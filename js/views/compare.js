// #compare — side-by-side differential comparison of two injuries. OWNER: P6.
//   #compare  /  #compare.<id1>  /  #compare.<id1>.<id2>     (the hash follows the selections without re-rendering)
// Two searchable pickers (ARIA 1.2 combobox) over data/index.json; full records come from store.injury(). Rows are chosen
// for differential diagnosis: mechanism, onset, population, symptoms/signs, key tests with accuracy, imaging, red flags,
// healing, return to sport and urgency. On narrow screens each row stacks both values under one label.

import {
  h, icon, plural, stripMarkup, REGION_LABELS, TISSUE_LABELS, ONSET_LABELS, MECHANISM_LABELS, URGENCY_LABELS, URGENCY_DESCRIPTIONS, URGENCY_TONE
} from "../util/dom.js";
import { fmtDay } from "../components/healing-timeline.js";

let M = null;
let uid = 0;
export const title = () => "Compare injuries";

const norm = (s) => String(s ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const t = (s) => stripMarkup(s);
const arr = (v) => (Array.isArray(v) ? v : []);
const regionName = (r) => REGION_LABELS?.[r] || r;
const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SLOT = [
  { key: "A", label: "First injury", short: "A" },
  { key: "B", label: "Second injury", short: "B" }
];

/* ------------------------------------------------------------------ view lifecycle */
export async function render(main, params = [], ctx = {}) {
  destroy();
  const { store } = ctx;
  const inst = (M = { main, ctx, store, entries: [], byId: new Map(), ids: [null, null], full: new Map(), errors: new Map(), token: 0, pickers: [] });

  const root = h("section", { class: "cmp", "aria-labelledby": "cmp-title" },
    h("header", { class: "cmp-head" },
      h("p", { class: "eyebrow" }, "Differential diagnosis"),
      h("h1", { id: "cmp-title", tabindex: "-1" }, "Compare injuries"),
      h("p", { class: "lead cmp-lead" }, "Put two presentations side by side: mechanism, who gets them, what you will see, which tests help, and when to worry.")),
    h("div", { class: "cmp-loading", role: "status" }, "Loading the library…"));
  main.replaceChildren(root);
  inst.root = root;

  try {
    const entries = await store.index();
    inst.entries = Array.isArray(entries) ? entries : [];
    inst.byId = new Map(inst.entries.map((e) => [e.id, e]));
  } catch {
    if (M !== inst) return;
    root.querySelector(".cmp-loading").replaceWith(h("div", { class: "callout callout--danger", role: "alert" },
      h("p", { class: "callout__title" }, icon("warning", { size: 16 }), "The library could not be loaded"),
      h("button", { type: "button", class: "btn btn--sm", on: { click: () => render(main, params, ctx) } }, icon("restart"), "Retry")));
    return;
  }
  if (M !== inst) return;

  inst.ids = readIds(inst, params);
  inst.live = h("div", { class: "visually-hidden", role: "status", "aria-live": "polite" });
  inst.results = h("div", { class: "cmp-results", "aria-live": "off" });
  inst.pickers = SLOT.map((s, i) => makePicker(inst, i));
  const swap = h("button", { type: "button", class: "btn btn--sm cmp-swap", "aria-label": "Swap the two injuries", on: { click: () => swapIds(inst) } }, icon("compare"), "Swap");
  inst.swap = swap;
  const pickers = h("div", { class: "cmp-pickers" }, inst.pickers[0].el, h("div", { class: "cmp-swapcell" }, swap), inst.pickers[1].el);
  root.querySelector(".cmp-loading").replaceWith(pickers, inst.live, inst.results);
  syncPickers(inst);
  refresh(inst, { initial: true });
}

export function update(main, params = []) {
  if (!M || !M.results) return false;
  M.ids = readIds(M, params);
  syncPickers(M);
  refresh(M, { fromHash: true });
  return true;
}

export function destroy() { if (M) { for (const p of M.pickers) p.destroy?.(); } M = null; }

function readIds(inst, params) {
  return [0, 1].map((i) => {
    const id = String(params[i] || "").toLowerCase();
    return ID_RE.test(id) ? id : null;
  }).map((id, i, all) => (id && i === 1 && id === all[0] ? null : id));
}

function swapIds(inst) {
  inst.ids = [inst.ids[1], inst.ids[0]];
  syncPickers(inst);
  refresh(inst);
  inst.live.textContent = "Swapped the two injuries.";
}

function setId(inst, i, id) {
  inst.ids[i] = id || null;
  if (inst.ids[0] && inst.ids[0] === inst.ids[1]) inst.ids[1 - i] = null;
  syncPickers(inst);
  refresh(inst);
}

function syncPickers(inst) {
  inst.pickers.forEach((p, i) => p.set(inst.ids[i], inst.ids[1 - i]));
  inst.swap.hidden = !(inst.ids[0] || inst.ids[1]);
}

/* ------------------------------------------------------------------ refresh: url, data, results */
async function refresh(inst, { initial = false, fromHash = false } = {}) {
  const token = ++inst.token;
  const [a, b] = inst.ids;
  if (!fromHash && !initial) {
    const hash = "#" + ["compare", a, a ? b : null].filter(Boolean).join(".");
    try { inst.ctx.router.navigate(hash, { replace: true, silent: true }); } catch { /* ignore */ }
    try { document.title = `${a && b ? `${nameOf(inst, a)} vs ${nameOf(inst, b)}` : "Compare injuries"} · Physio Explained`; } catch { /* ignore */ }
  }
  const need = [a, b].filter((id) => id && !inst.full.has(id) && !inst.errors.has(id));
  if (need.length) {
    inst.results.setAttribute("aria-busy", "true");
    drawResults(inst, { loading: true });
    await Promise.all(need.map(async (id) => {
      if (!inst.byId.has(id)) { inst.errors.set(id, "not-found"); return; }
      try { inst.full.set(id, await inst.store.injury(id)); } catch (e) { inst.errors.set(id, e?.code || "error"); }
    }));
    if (M !== inst || token !== inst.token) return;
    inst.results.removeAttribute("aria-busy");
  }
  drawResults(inst, {});
  if (a && b && inst.full.has(a) && inst.full.has(b) && !initial) {
    inst.live.textContent = `Comparing ${nameOf(inst, a)} with ${nameOf(inst, b)}.`;
  }
}

const nameOf = (inst, id) => { const e = inst.byId.get(id); return e ? e.shortName || e.name : id; };

/* ------------------------------------------------------------------ combobox picker */
function makePicker(inst, slotIdx) {
  const slot = SLOT[slotIdx];
  const uidn = ++uid;
  const inId = `cmp-in-${uidn}`, lbId = `cmp-lb-${uidn}`;
  let value = null, other = null, open = false, active = -1, shown = [];

  const input = h("input", {
    id: inId, type: "text", class: "input cmp-combo__in", role: "combobox", autocomplete: "off", spellcheck: "false",
    "aria-autocomplete": "list", "aria-expanded": "false", "aria-controls": lbId, "aria-haspopup": "listbox",
    placeholder: "Search by name, synonym or region…"
  });
  const list = h("ul", { id: lbId, class: "cmp-combo__list", role: "listbox", "aria-label": `${slot.label} results`, hidden: true });
  const clear = h("button", { type: "button", class: "icon-btn cmp-combo__clear", "aria-label": `Clear ${slot.label.toLowerCase()}`, hidden: true, on: { click: () => { setId(inst, slotIdx, null); input.focus(); } } }, icon("close", { size: 18 }));
  const meta = h("p", { class: "cmp-pick__meta small" });
  const el = h("div", { class: "cmp-pick", "data-slot": slot.key },
    h("label", { class: "cmp-pick__label", for: inId }, h("span", { class: "cmp-tag", "aria-hidden": "true" }, slot.short), slot.label),
    h("div", { class: "cmp-combo" }, input, clear, list), meta);

  const haystack = (e) => norm([e.name, e.shortName, ...(e.aka || []), regionName(e.region), e.id.replace(/-/g, " ")].join(" | "));
  const cache = new Map();
  const hay = (e) => { let v = cache.get(e.id); if (v == null) cache.set(e.id, (v = haystack(e))); return v; };

  function results(q) {
    const toks = norm(q).split(" ").filter(Boolean);
    const pool = inst.entries.filter((e) => e.id !== other);
    if (!toks.length) return pool.slice().sort((x, y) => (x.shortName || x.name).localeCompare(y.shortName || y.name)).slice(0, 60);
    const scored = [];
    for (const e of pool) {
      const hs = hay(e);
      if (!toks.every((tk) => hs.includes(tk))) continue;
      const nm = norm(e.shortName || e.name);
      let s = 3;
      if (nm.startsWith(toks[0])) s = 0; else if (nm.split(" ").some((w) => w.startsWith(toks[0]))) s = 1; else if (nm.includes(toks[0])) s = 2;
      scored.push([s, e]);
    }
    return scored.sort((x, y) => x[0] - y[0] || (x[1].shortName || x[1].name).localeCompare(y[1].shortName || y[1].name)).map((x) => x[1]).slice(0, 60);
  }

  function render() {
    const q = input.dataset.dirty === "1" ? input.value : "";
    shown = results(q);
    list.replaceChildren(...(shown.length ? shown.map((e, i) => h("li", {
      id: `${lbId}-${i}`, role: "option", class: "cmp-opt", "aria-selected": String(i === active),
      on: { mousedown: (ev) => ev.preventDefault(), click: () => pick(e.id), mousemove: () => { if (active !== i) { active = i; mark(); } } }
    }, h("span", { class: "cmp-opt__name" }, e.shortName || e.name), h("span", { class: "cmp-opt__meta" }, regionName(e.region)))) : [h("li", { class: "cmp-opt cmp-opt--none", role: "presentation" }, inst.entries.length < 2 ? "Only one injury is published so far." : "No injury matches that search.")]));
    mark();
  }
  function mark() {
    [...list.children].forEach((li, i) => li.setAttribute("aria-selected", String(i === active)));
    if (active >= 0 && list.children[active]) { input.setAttribute("aria-activedescendant", list.children[active].id); list.children[active].scrollIntoView({ block: "nearest" }); }
    else input.removeAttribute("aria-activedescendant");
  }
  function show() {
    if (open) return;
    open = true; list.hidden = false; input.setAttribute("aria-expanded", "true");
  }
  function hide() {
    open = false; list.hidden = true; input.setAttribute("aria-expanded", "false"); input.removeAttribute("aria-activedescendant"); active = -1;
  }
  function pick(id) { hide(); input.dataset.dirty = "0"; setId(inst, slotIdx, id); input.blur(); }
  function reset() { input.dataset.dirty = "0"; input.value = value ? nameOf(inst, value) : ""; }

  input.addEventListener("focus", () => { input.select(); input.dataset.dirty = "0"; active = -1; render(); show(); });
  input.addEventListener("input", () => { input.dataset.dirty = "1"; active = 0; render(); show(); });
  input.addEventListener("blur", () => { hide(); reset(); });
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) { render(); show(); }
      const n = shown.length; if (!n) return;
      active = e.key === "ArrowDown" ? (active + 1) % n : (active - 1 + n) % n; mark();
    } else if (e.key === "Enter") {
      if (open && active >= 0 && shown[active]) { e.preventDefault(); pick(shown[active].id); }
    } else if (e.key === "Escape") {
      if (open) { e.preventDefault(); hide(); reset(); }
    } else if (e.key === "Home" && open) { e.preventDefault(); active = 0; mark(); }
    else if (e.key === "End" && open) { e.preventDefault(); active = shown.length - 1; mark(); }
  });
  // clicks inside the list must not blur the input first
  list.addEventListener("mousedown", (e) => e.preventDefault());

  return {
    el,
    set(id, otherId) {
      value = id; other = otherId;
      const e = id && inst.byId.get(id);
      if (document.activeElement !== input) reset();
      clear.hidden = !id;
      el.classList.toggle("is-set", !!id);
      meta.replaceChildren();
      if (id && e) meta.append(regionName(e.region), " · ", h("span", { class: `badge badge--${URGENCY_TONE?.[e.urgency] || "ok"}` }, URGENCY_LABELS?.[e.urgency] || e.urgency || "Routine"));
      else if (id) meta.append(h("span", { class: "cmp-warn" }, `“${id}” is not in the library.`));
      else meta.append("Choose an injury to compare.");
    },
    destroy() { /* listeners die with the element */ }
  };
}

/* ------------------------------------------------------------------ results */
function drawResults(inst, { loading = false }) {
  const [a, b] = inst.ids;
  const host = inst.results;
  const kids = [];
  const pub = inst.entries.length;

  if (!a && !b) {
    kids.push(h("div", { class: "cmp-intro" },
      h("p", { class: "cmp-intro__t" }, "Pick two injuries to begin."),
      h("p", { class: "muted" }, pub < 2
        ? `Only ${plural(pub, "injury", "injuries")} ${pub === 1 ? "is" : "are"} published so far, so there is nothing to compare yet. More are added as they are written and reviewed.`
        : "Try presentations that are easily confused, for example a ligament sprain and a fracture in the same region."),
      h("p", { class: "cluster cluster--sm" }, h("a", { class: "btn btn--sm", href: "#library" }, icon("grid"), "Browse the library"), h("a", { class: "btn btn--sm btn--ghost", href: "#bodymap" }, icon("body"), "Use the body map"))));
    host.replaceChildren(...kids);
    return;
  }

  const miss = [a, b].filter((id) => id && inst.errors.has(id));
  for (const id of miss) kids.push(h("div", { class: "callout callout--warn", role: "alert" }, h("p", null, inst.errors.get(id) === "not-found" ? `There is no injury called “${id}” in the library.` : `The record for “${id}” could not be loaded.`)));

  if (loading) { kids.push(h("p", { class: "cmp-loading-line", role: "status" }, "Loading the comparison…")); host.replaceChildren(...kids); return; }

  const A = a && inst.full.get(a), B = b && inst.full.get(b);
  if (!(A && B)) {
    const one = A || B;
    if (one) kids.push(suggestions(inst, one, A ? 1 : 0));
    host.replaceChildren(...kids);
    return;
  }

  kids.push(diffCallout(inst, A, B));
  kids.push(heads(A, B));
  for (const row of ROWS) {
    const ca = row.render(A), cb = row.render(B);
    kids.push(h("section", { class: `cmp-row cmp-row--${row.key}`, "aria-labelledby": `cmp-r-${row.key}` },
      h("h3", { class: "cmp-label", id: `cmp-r-${row.key}` }, row.label),
      cell("A", A, ca), cell("B", B, cb)));
  }
  kids.push(h("p", { class: "cmp-foot small muted" }, "Summaries only. Open each full page for references, assessment detail and management. ",
    h("a", { href: `#injury.${A.id}` }, A.shortName || A.name), " · ", h("a", { href: `#injury.${B.id}` }, B.shortName || B.name)));
  host.replaceChildren(...kids.filter(Boolean));
}

function cell(tag, inj, content) {
  return h("div", { class: `cmp-cell cmp-cell--${tag.toLowerCase()}`, "data-who": tag },
    h("p", { class: "cmp-who" }, h("span", { class: "cmp-tag", "aria-hidden": "true" }, tag), h("span", { class: "visually-hidden" }, `${tag}: `), inj.shortName || inj.name),
    content);
}

function heads(A, B) {
  const one = (tag, inj) => h("div", { class: `cmp-hd cmp-hd--${tag.toLowerCase()}` },
    h("span", { class: "cmp-tag", "aria-hidden": "true" }, tag),
    h("div", { class: "cmp-hd__t" },
      h("h2", { class: "cmp-hd__name" }, h("a", { href: `#injury.${inj.id}` }, inj.shortName || inj.name)),
      h("p", { class: "cmp-hd__sub small" }, regionName(inj.region), " · ", URGENCY_LABELS?.[inj.urgency] || inj.urgency)));
  return h("div", { class: "cmp-hds" }, h("span", { class: "cmp-hds__spacer", "aria-hidden": "true" }), one("A", A), one("B", B));
}

/** What each page says about the other, when it lists it as a differential. */
function diffCallout(inst, A, B) {
  const find = (x, y) => arr(x.differentials).find((d) => d && (d.id === y.id || norm(d.name) === norm(y.name)));
  const ab = find(A, B), ba = find(B, A);
  if (!ab && !ba) return null;
  return h("aside", { class: "callout callout--accent cmp-ddx", "aria-labelledby": "cmp-ddx-h" },
    h("p", { class: "callout__title", id: "cmp-ddx-h" }, icon("target", { size: 16 }), "How the pages tell them apart"),
    ab ? h("p", null, h("strong", null, `${A.shortName || A.name} vs ${B.shortName || B.name}: `), t(ab.distinguishing)) : null,
    ba ? h("p", null, h("strong", null, `${B.shortName || B.name} vs ${A.shortName || A.name}: `), t(ba.distinguishing)) : null);
}

/** With one injury chosen: quick picks from its differentials / related list. */
function suggestions(inst, inj, emptySlot) {
  const ids = [];
  for (const d of arr(inj.differentials)) if (d?.id) ids.push(d.id);
  for (const r of arr(inj.related)) ids.push(r);
  const picks = [...new Set(ids)].filter((id) => id !== inj.id && inst.byId.has(id)).slice(0, 8);
  const body = picks.length
    ? [h("p", { class: "cmp-sugg__t" }, `Often confused with ${inj.shortName || inj.name}`),
      h("ul", { class: "cmp-sugg__list", role: "list" }, picks.map((id) => h("li", null,
        h("button", { type: "button", class: "chip", on: { click: () => setId(inst, emptySlot, id) } }, inst.byId.get(id).shortName || inst.byId.get(id).name))))]
    : [h("p", { class: "muted" }, inst.entries.length < 2
      ? "No second injury is published yet, so there is nothing to compare this with."
      : "Choose a second injury above to see the comparison.")];
  return h("div", { class: "cmp-sugg" }, h("p", { class: "cmp-sugg__lead" }, `${inj.shortName || inj.name} is selected.`), ...body);
}

/* ------------------------------------------------------------------ rows */
function paras(s) { return h("p", { class: "cmp-text" }, t(s) || "—"); }
function bullets(items, max = 6, inj) {
  const l = arr(items).map(t).filter(Boolean);
  if (!l.length) return h("p", { class: "cmp-text muted" }, "—");
  const shown = l.slice(0, max);
  return h("ul", { class: "cmp-list", role: "list" }, shown.map((x) => h("li", null, x)),
    l.length > max ? h("li", { class: "cmp-more" }, h("a", { href: `#injury.${inj.id}` }, `+${l.length - max} more on the full page`)) : null);
}
const firstNum = (s) => { const m = String(s ?? "").match(/^\s*[≥≤><~≈]?\s*\d+(?:\.\d+)?\s*%?/); return m ? m[0].replace(/\s+/g, "") : (String(s ?? "").trim() ? "reported" : ""); };

const ROWS = [
  { key: "summary", label: "Summary", render: (i) => paras(i.summary) },
  { key: "tissues", label: "Region and tissues", render: (i) => h("p", { class: "cmp-text" }, regionName(i.region), " · ", arr(i.tissues).map((x) => (TISSUE_LABELS?.[x] || x).toLowerCase()).join(", ") || "—") },
  {
    key: "onset", label: "Onset and mechanism type",
    render: (i) => h("div", null,
      h("p", { class: "cmp-text" }, ONSET_LABELS?.[i.onset] || i.onset || "—"),
      arr(i.mechanismType).length ? h("ul", { class: "cmp-tags", role: "list" }, arr(i.mechanismType).map((m) => h("li", null, h("span", { class: "badge badge--outline" }, MECHANISM_LABELS?.[m] || m)))) : null)
  },
  { key: "mechanism", label: "Mechanism", render: (i) => paras(i.mechanism?.summary) },
  { key: "population", label: "Typical population", render: (i) => bullets(i.populations, 5, i) },
  { key: "symptoms", label: "Key symptoms", render: (i) => bullets(i.clinicalPresentation?.symptoms, 6, i) },
  { key: "signs", label: "Key signs", render: (i) => bullets(i.clinicalPresentation?.signs, 6, i) },
  {
    key: "tests", label: "Key special tests (Sn / Sp)",
    render: (i) => {
      const tests = arr(i.assessment?.specialTests).filter((x) => x?.name);
      if (!tests.length) return h("p", { class: "cmp-text muted" }, "No special tests listed.");
      return h("ul", { class: "cmp-tests", role: "list" }, tests.slice(0, 4).map((x) => {
        const sn = firstNum(x.sensitivity), sp = firstNum(x.specificity);
        return h("li", null, h("span", { class: "cmp-test__n" }, x.name),
          sn || sp ? h("span", { class: "cmp-test__v mono" }, sn ? `Sn ${sn}` : null, sn && sp ? " · " : null, sp ? `Sp ${sp}` : null) : h("span", { class: "cmp-test__v mono muted" }, "accuracy not reported"));
      }), tests.length > 4 ? h("li", { class: "cmp-more" }, h("a", { href: `#injury.${i.id}.assessment-tests` }, `+${tests.length - 4} more on the full page`)) : null);
    }
  },
  {
    key: "imaging", label: "Imaging",
    render: (i) => {
      const im = arr(i.assessment?.imaging).filter((x) => x?.modality);
      if (!im.length) return h("p", { class: "cmp-text muted" }, "—");
      return h("ul", { class: "cmp-list", role: "list" }, im.slice(0, 3).map((x) => h("li", null, h("strong", null, x.modality), x.indication ? `: ${t(x.indication)}` : "")));
    }
  },
  { key: "redflags", label: "Red flags", render: (i) => bullets(i.redFlags, 6, i) },
  {
    key: "healing", label: "Healing timeframe",
    render: (i) => {
      const ph = arr(i.timeframes?.healing).filter((p) => p && Number.isFinite(+p.startDay) && Number.isFinite(+p.endDay));
      return h("div", null, paras(i.timeframes?.summary),
        ph.length ? h("ul", { class: "cmp-phases", role: "list" }, ph.map((p) => h("li", null, h("span", { class: "cmp-phase__n" }, p.phase), h("span", { class: "mono cmp-phase__t" }, `${fmtDay(+p.startDay)}–${fmtDay(+p.endDay)}`)))) : null);
    }
  },
  { key: "rts", label: "Return to sport", render: (i) => paras(i.timeframes?.returnToSport) },
  {
    key: "urgency", label: "Urgency",
    render: (i) => h("div", null,
      h("p", { class: "cmp-text" }, h("span", { class: `badge badge--${URGENCY_TONE?.[i.urgency] || "ok"}` }, URGENCY_LABELS?.[i.urgency] || i.urgency)),
      h("p", { class: "cmp-text small muted" }, URGENCY_DESCRIPTIONS?.[i.urgency] || ""))
  }
];
