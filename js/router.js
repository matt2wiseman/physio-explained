// Hash-token router. OWNER: P1.
//
//   #injury.acl-rupture.assessment  →  { name: "injury", params: ["acl-rupture", "assessment"] }
//   start({ main })                   begin listening (main = selector of the <main> element, default "#main")
//   navigate(hash, { replace, silent })
//                                     go to a route ("#library.knee" or "library.knee"). replace: no new history entry.
//                                     silent: update the URL + current() without re-rendering (e.g. a search view
//                                     mirroring its query into the hash).
//   current() → { name, params }      onChange(fn(route, prev)) → unsubscribe      href("injury", id, "rehab") → "#injury.id.rehab"
//   reload()                          re-render the current route
//
// View modules (js/views/<name>.js): export render(main, params, ctx), optional destroy(), optional title
// (string or (params, ctx) → string, may be async), and OPTIONAL update(main, params, ctx) → truthy if the view handled a
// param change itself (then no re-render happens). ctx = { store, router, h, esc, formatText, icon, route }.
//
// Behaviour on change: lazy import → previous view's destroy() → render into a fresh <main id="main"> (a stale, slow render
// can never write into the new page) → document.title "<title> · Physio Explained" → focus the <h1> → scroll to top, to the
// section whose id matches the last param, or back to the remembered position when the user went Back.
// Same view + only the trailing section param changed (e.g. #injury.x.assessment → #injury.x.rehab) → just scrolls.
// A hash that is not a route but matches an element id (e.g. "#main", "#references") scrolls/focuses that element.
// Missing view module → "This section is being built"; unknown route → not found; render error → error state.

import { store } from "./store.js";
import { h, esc, formatText, icon } from "./util/dom.js";

export const ROUTES = ["home", "library", "search", "injury", "bodymap", "compare", "saved", "healing", "glossary", "about"];
const NAV_PARENT = { injury: "library" };
const SITE = "Physio Explained";
const MAIN_CLASS = "site-main";

const listeners = new Set();
const scrollMemory = new Map();
const stack = [];
let mainSel = "#main";
let started = false;
let renderId = 0;
let silentHash = null;
let sectionTimer = null;
const S = { route: null, module: null, base: null, rendered: false, firstDone: false };

const reducedMotion = () => { try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch { return false; } };
const key = (r) => "#" + [r.name, ...r.params].join(".");
const sameArr = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);

export function parse(hash = location.hash) {
  let raw = String(hash || "").replace(/^#!?\/?/, "");
  try { raw = decodeURIComponent(raw); } catch { /* keep raw */ }
  const tokens = raw.split(".").map((t) => t.trim()).filter(Boolean);
  const name = (tokens.shift() || "home").toLowerCase();
  return { name, params: tokens, raw };
}

export const current = () => { const r = S.route || parse(); return { name: r.name, params: [...r.params] }; };
export const href = (name, ...params) => "#" + [name, ...params.filter((p) => p != null && p !== "")].join(".");
export function onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); }

export function navigate(hash, opts = {}) {
  let target = String(hash ?? "");
  if (!target.startsWith("#")) target = "#" + target;
  if (target === location.hash) {
    if (opts.silent) { S.route = parse(target); return; }
    handle(true);
    return;
  }
  if (opts.silent) silentHash = target;
  if (opts.replace) {
    let replaced = false;
    try { history.replaceState(history.state, "", target); replaced = true; } catch { /* sandboxed: fall back */ }
    if (replaced) { if (opts.silent) { silentHash = null; commit(parse(target)); } else handle(); return; }
    try { location.replace(target); return; } catch { /* fall through */ }
  }
  location.hash = target;
}
export const reload = () => handle(true);

export const router = { start, navigate, current, onChange, href, reload, parse, ROUTES };
export default router;

export function start({ main = "#main" } = {}) {
  if (started) return;
  started = true;
  mainSel = main;
  try { history.scrollRestoration = "manual"; } catch { /* ignore */ }
  window.addEventListener("hashchange", () => handle());
  handle();
}

/* ------------------------------------------------------------------ core */
function getMain() { return document.querySelector(mainSel) || document.getElementById("main"); }
function ctxFor(route, extra) { return { store, router, h, esc, formatText, icon, route: { name: route.name, params: [...route.params] }, ...extra }; }

function commit(route) {
  const prev = S.route;
  S.route = route;
  document.documentElement.dataset.route = route.name;
  for (const a of document.querySelectorAll("[data-nav]")) {
    const n = a.getAttribute("data-nav");
    if (n === route.name) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    a.classList.toggle("is-parent", NAV_PARENT[route.name] === n);
  }
  for (const fn of [...listeners]) { try { fn({ name: route.name, params: [...route.params] }, prev && { name: prev.name, params: [...prev.params] }); } catch (e) { console.error(e); } }
}

function progress(on) {
  document.documentElement.toggleAttribute("data-loading", !!on);
}

async function handle(force = false) {
  const route = parse(location.hash);
  if (silentHash && location.hash === silentHash) { silentHash = null; commit(route); return; }
  silentHash = null;
  const prev = S.route;
  const prevKey = prev && key(prev);
  const nextKey = key(route);
  if (!force && prev && S.rendered && prevKey === nextKey) return;

  // In-page anchor that isn't a route (skip link "#main", a TOC "#references"…): scroll there, keep the route URL.
  if (!ROUTES.includes(route.name) && route.params.length === 0 && prev) {
    const el = document.getElementById(route.raw);
    if (el && el.getClientRects().length) {
      focusEl(el, { scroll: true, smooth: true });
      try { history.replaceState(history.state, "", prevKey); } catch { silentHash = prevKey; try { location.replace(prevKey); } catch { /* ignore */ } }
      return;
    }
  }

  // Back/forward detection (for scroll restoration).
  if (prev) scrollMemory.set(prevKey, window.scrollY);
  let isBack = false;
  if (stack.length > 1 && stack[stack.length - 2] === nextKey) { stack.pop(); isBack = true; }
  else if (stack[stack.length - 1] !== nextKey) { stack.push(nextKey); if (stack.length > 60) stack.shift(); }

  // Same view: let the view handle it, or just scroll to a section.
  if (!force && prev && S.module && S.rendered && prev.name === route.name && ROUTES.includes(route.name)) {
    if (typeof S.module.update === "function") {
      try {
        const handled = await S.module.update(getMain(), [...route.params], ctxFor(route));
        if (handled) { commit(route); afterSection(route, { smooth: true }); return; }
      } catch (e) { console.error("[router] view update() failed", e); }
    }
    const base = S.base || [];
    const p = route.params;
    if (p.length <= base.length + 1 && sameArr(p.slice(0, base.length), base)) {
      const sec = p[base.length];
      if (!sec) { commit(route); window.scrollTo({ top: 0, behavior: reducedMotion() ? "auto" : "smooth" }); focusHeading(getMain()); return; }
      const el = findSection(sec);
      if (el) { commit(route); focusEl(el, { scroll: true, smooth: true }); return; }
    }
  }

  await renderRoute(route, { isBack, nextKey });
}

async function importView(name) {
  const url = new URL(`./views/${name}.js`, import.meta.url);
  try {
    return { mod: await import(url.href) };
  } catch (error) {
    let missing = false;
    try {
      let res = await fetch(url.href, { method: "HEAD", cache: "no-store" });
      if (res.status === 405 || res.status === 501) res = await fetch(url.href, { cache: "no-store" });
      missing = res.status === 404;
    } catch { /* offline: treat as an error */ }
    return { error, missing };
  }
}

async function renderRoute(route, { isBack }) {
  const id = ++renderId;
  clearTimeout(sectionTimer);
  progress(true);
  const known = ROUTES.includes(route.name);
  let mod = null, reason = known ? null : "unknown", error = null;

  if (known) {
    const r = await importView(route.name);
    if (id !== renderId) return;
    if (r.mod && typeof r.mod.render === "function") mod = r.mod;
    else if (r.mod) { reason = "error"; error = new Error(`views/${route.name}.js does not export render()`); }
    else { reason = r.missing ? "building" : "error"; error = r.error; if (!r.missing) console.error(`[router] failed to load views/${route.name}.js`, r.error); }
  }

  // tear down the previous view
  const old = S.module;
  if (old && typeof old.destroy === "function") { try { old.destroy(); } catch (e) { console.error("[router] destroy() failed", e); } }
  S.module = null; S.rendered = false;

  const main = freshMain(route.name);
  commit(route);

  if (mod) {
    try {
      main.setAttribute("aria-busy", "true");
      await mod.render(main, [...route.params], ctxFor(route));
      if (id !== renderId) { if (mod !== S.module && typeof mod.destroy === "function") { try { mod.destroy(); } catch { /* ignore */ } } return; }
      S.module = mod;
    } catch (e) {
      console.error(`[router] views/${route.name}.js render() failed`, e);
      if (id !== renderId) return;
      reason = "error"; error = e;
      if (typeof mod.destroy === "function") { try { mod.destroy(); } catch { /* ignore */ } }
      main.replaceChildren();
      mod = null;
    }
  }
  if (!mod) await renderFallback(main, route, reason, error);
  if (id !== renderId) return;

  main.removeAttribute("aria-busy");
  S.rendered = true;
  progress(false);
  await setTitle(mod, route, main);
  if (id !== renderId) return;

  // section base: injury pages always treat param[1] as the section; others only when the element exists
  if (mod && route.name === "injury") S.base = route.params.slice(0, 1);
  else {
    const last = route.params[route.params.length - 1];
    S.base = mod && last && findSection(last) ? route.params.slice(0, -1) : [...route.params];
  }

  const first = !S.firstDone;
  S.firstDone = true;
  if (mod && route.name === "injury" && route.params[0]) trackRecent(route.params[0]);

  const saved = isBack ? scrollMemory.get(key(route)) : undefined;
  if (saved != null) { restoreScroll(saved, id); if (!first) focusHeading(main, { scroll: false }); return; }
  const sec = S.base.length < route.params.length ? route.params[route.params.length - 1] : null;
  if (sec && mod) { window.scrollTo(0, 0); afterSection(route, { smooth: false, id, focus: !first }); return; }
  window.scrollTo(0, 0);
  if (!first) focusHeading(main);
}

function freshMain(name) {
  const old = getMain();
  const main = document.createElement("main");
  main.id = "main";
  main.tabIndex = -1;
  main.className = `${MAIN_CLASS} view view--${name}`;
  main.dataset.view = name;
  if (old) old.replaceWith(main);
  else (document.querySelector(".site-footer")?.before(main) ?? document.body.append(main));
  return main;
}

async function renderFallback(main, route, reason, error) {
  main.className = `${MAIN_CLASS} view view--notfound`;
  main.dataset.view = "notfound";
  try {
    const nf = await import(new URL("./views/notfound.js", import.meta.url).href);
    await nf.render(main, [route.name, ...route.params], ctxFor(route, { reason, error }));
    S.fallbackTitle = typeof nf.title === "function" ? nf.title([route.name], ctxFor(route, { reason })) : nf.title;
  } catch (e) {
    console.error("[router] notfound view failed", e);
    main.replaceChildren(h("div", { class: "empty-state" },
      h("p", { class: "eyebrow" }, "Page unavailable"),
      h("h1", null, "This page couldn’t be shown"),
      h("p", null, h("a", { href: "#home" }, "Go to the home page"))));
    S.fallbackTitle = "Page unavailable";
  }
}

async function setTitle(mod, route, main) {
  let t = null;
  try {
    if (mod) t = typeof mod.title === "function" ? await mod.title([...route.params], ctxFor(route)) : mod.title;
    else t = S.fallbackTitle;
  } catch { t = null; }
  if (!t && route.name !== "home") t = main.querySelector("h1")?.textContent?.trim() || null;
  t = t ? String(t).replace(/\s+/g, " ").trim() : "";
  document.title = !t || t === SITE || route.name === "home" && !mod?.title ? SITE : `${t} · ${SITE}`;
}

/* ------------------------------------------------------------------ focus & scroll */
function findSection(id) {
  const main = getMain();
  if (!main || !id) return null;
  let el = null;
  try { el = main.querySelector(`#${CSS.escape(id)}`); } catch { el = null; }
  return el && el.getClientRects().length ? el : null;
}

function focusHeading(main, { scroll = false } = {}) {
  if (!main) return;
  const target = main.querySelector("h1") || main;
  if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
  target.setAttribute("data-route-focus", "");
  try { target.focus({ preventScroll: !scroll }); } catch { /* ignore */ }
}

function focusEl(el, { scroll = true, smooth = false, focus = true } = {}) {
  if (scroll) el.scrollIntoView({ block: "start", behavior: smooth && !reducedMotion() ? "smooth" : "auto" });
  if (!focus) return;
  const target = el.matches("a,button,input,select,textarea,[tabindex],h1,h2,h3,h4,h5,h6") ? el : el.querySelector("h1,h2,h3,h4") || el;
  if (!target.hasAttribute("tabindex") && !target.matches("a[href],button,input,select,textarea")) target.setAttribute("tabindex", "-1");
  target.setAttribute("data-route-focus", "");
  try { target.focus({ preventScroll: true }); } catch { /* ignore */ }
}

// Sections may render a moment after render() resolves (lazy chunks): poll briefly, stop if the user scrolls.
function afterSection(route, { smooth = false, id = renderId, focus = true } = {}) {
  const sec = route.params[(S.base || []).length];
  if (!sec) return;
  clearTimeout(sectionTimer);
  let tries = 0, userMoved = false;
  const stop = () => { userMoved = true; };
  window.addEventListener("wheel", stop, { once: true, passive: true });
  window.addEventListener("touchstart", stop, { once: true, passive: true });
  const tick = () => {
    if (id !== renderId || userMoved) return;
    const el = findSection(sec);
    if (el) { focusEl(el, { scroll: true, smooth, focus }); return; }
    if (++tries < 25) sectionTimer = setTimeout(tick, 100);
    else if (focus) focusHeading(getMain());
  };
  tick();
}

function restoreScroll(y, id) {
  let tries = 0;
  const tick = () => {
    if (id !== renderId) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (max >= y - 4 || ++tries > 20) { window.scrollTo(0, Math.min(y, Math.max(0, max))); return; }
    setTimeout(tick, 60);
  };
  requestAnimationFrame(tick);
}

async function trackRecent(id) {
  try { if (await store.entry(id)) store.recent.push(id); } catch { /* ignore */ }
}
