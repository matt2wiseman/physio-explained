// Injury page — route #injury.<id>[.<section>]   OWNER: P4
// The most important page on the site: every schema field, rendered for a clinician who needs
// "what are the key tests?" or "when can they run?" in seconds.
//
// Robustness: teammates' modules (dom utils, store, widgets, animation engine) are loaded dynamically
// and every integration has a built-in fallback, so the page never breaks if one is missing or throws.
// All content is inserted as text nodes (never as HTML).

import { evidenceBadge, EVIDENCE_LEVELS } from "../components/evidence-badge.js";
import { referenceList, REF_TYPE_LABELS } from "../components/references.js";

/* ------------------------------------------------------------------ constants */

// [id, TOC label, heading]
const SECTIONS = [
  ["overview", "Overview", "Overview & epidemiology"],
  ["mechanism", "Mechanism", "Mechanism of injury"],
  ["anatomy", "Anatomy", "Functional anatomy"],
  ["pathophysiology", "Pathophysiology", "Pathophysiology"],
  ["grading", "Grading", "Grading & classification"],
  ["timeframes", "Timeframes", "Healing & timeframes"],
  ["presentation", "Presentation", "Clinical presentation"],
  ["assessment", "Assessment", "Assessment"],
  ["differentials", "Differentials", "Differential diagnosis"],
  ["red-flags", "Red flags", "Red flags"],
  ["management", "Management", "Management"],
  ["rehab", "Rehabilitation", "Rehabilitation"],
  ["return-to-sport", "Return to sport", "Return to sport"],
  ["prognosis", "Prognosis", "Prognosis"],
  ["prevention", "Prevention", "Prevention"],
  ["pearls", "Clinical pearls", "Clinical pearls"],
  ["related", "Related", "Related injuries"],
  ["references", "References", "References"]
];
// Sub-anchors shown in the desktop table of contents for the busiest sections.
const SUBNAV = {
  assessment: [["assessment-tests", "Special tests"], ["assessment-imaging", "Imaging"]],
  management: [["management-medical", "Medical"], ["management-physio", "Physiotherapy"]]
};

const LABELS = {
  region: {
    "hip-groin": "Hip & groin", thigh: "Thigh", knee: "Knee", "lower-leg": "Lower leg", ankle: "Ankle", foot: "Foot",
    shoulder: "Shoulder", arm: "Arm", elbow: "Elbow", "wrist-hand": "Wrist & hand", cervical: "Cervical spine",
    thoracic: "Thoracic spine", lumbar: "Lumbar spine", pelvis: "Pelvis", "chest-abdomen": "Chest & abdomen",
    "head-face": "Head & face", general: "General"
  },
  tissue: {
    ligament: "Ligament", tendon: "Tendon", muscle: "Muscle", bone: "Bone", cartilage: "Cartilage", meniscus: "Meniscus",
    labrum: "Labrum", "joint-capsule": "Joint capsule", nerve: "Nerve", bursa: "Bursa", disc: "Disc", fascia: "Fascia",
    "fat-pad": "Fat pad", physis: "Physis", vascular: "Vascular", brain: "Brain", vestibular: "Vestibular", multiple: "Multiple tissues"
  },
  onset: { acute: "Acute", gradual: "Gradual", "acute-or-gradual": "Acute or gradual" },
  mechanism: {
    contact: "Contact", "non-contact": "Non-contact", overuse: "Overuse", fall: "Fall", collision: "Collision",
    degenerative: "Degenerative", insidious: "Insidious", traction: "Traction", compression: "Compression"
  }
};
const ABBR = new Set(["acl", "mcl", "pcl", "lcl", "ac", "acj", "sij", "si", "tfcc", "itb", "fai", "mtss", "pfp", "pfps", "tmj", "ucl", "dvt", "mtp", "ip", "pip", "dip", "cmc", "mcp", "rcrsp", "sc", "scj", "slap", "gtps", "cts", "tos", "ptt", "otb"]);

const URGENCY = {
  urgent: { title: "Urgent", text: "Arrange medical review within days. Screen the red flags before you load this injury.", icon: "warning" },
  emergency: { title: "Emergency", text: "Needs same-day medical or emergency department assessment. Do not start rehabilitation until serious injury is excluded.", icon: "alert" }
};

const SVGNS = "http://www.w3.org/2000/svg";
const ICONS = {
  bookmark: "M6.5 3.5h11v17l-5.5-4-5.5 4z",
  compare: "M3.5 5.5h7v13h-7zM13.5 5.5h7v13h-7z",
  link: "M10.6 13.4a3.6 3.6 0 0 0 5.1 0l3.1-3.1a3.6 3.6 0 0 0-5.1-5.1l-1.2 1.2M13.4 10.6a3.6 3.6 0 0 0-5.1 0l-3.1 3.1a3.6 3.6 0 0 0 5.1 5.1l1.2-1.2",
  warning: "M12 3.8 2.8 19.8h18.4zM12 9.8v4.6M12 17v.2",
  alert: "M12 2.8a9.2 9.2 0 1 0 0 18.4 9.2 9.2 0 0 0 0-18.4zM12 7.4v6.2M12 16.6v.2",
  check: "M5 12.5 9.8 17 19 7.5",
  chevron: "M9.5 6l6 6-6 6",
  play: "M8 5.5v13l10-6.5z",
  search: "M10.8 4.5a6.3 6.3 0 1 0 0 12.6 6.3 6.3 0 0 0 0-12.6zM15.4 15.4l4.6 4.6",
  arrow: "M5 12h13M13 6.5l5.5 5.5-5.5 5.5"
};

/* ------------------------------------------------------------------ module state */

let S = null;                     // per-render state (null when destroyed)
const nameCache = new Map();      // id → display name, for title()
const missing = new Set();        // ids that failed to load (title → "Injury not found")

/* ------------------------------------------------------------------ tiny DOM helpers (self-contained) */

function el(tag, attrs, ...kids) {
  const e = document.createElement(tag);
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "class") e.className = v;
      else if (k === "text") e.textContent = String(v);
      else if (k === "on") for (const [ev, fn] of Object.entries(v)) e.addEventListener(ev, fn);
      else if (k === "dataset") Object.assign(e.dataset, v);
      else e.setAttribute(k, v === true ? "" : String(v));
    }
  }
  add(e, kids);
  return e;
}
function add(parent, kids) {
  for (const k of [kids].flat(Infinity)) {
    if (k == null || k === false || k === "") continue;
    parent.append(k instanceof Node ? k : String(k));
  }
  return parent;
}
function icon(name, size = 18) {
  const svg = document.createElementNS(SVGNS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", String(size));
  svg.setAttribute("height", String(size));
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("class", `inj-icon inj-icon--${name}`);
  const p = document.createElementNS(SVGNS, "path");
  p.setAttribute("d", ICONS[name] || ICONS.chevron);
  p.setAttribute("fill", "none");
  p.setAttribute("stroke", "currentColor");
  p.setAttribute("stroke-width", "1.8");
  p.setAttribute("stroke-linecap", "round");
  p.setAttribute("stroke-linejoin", "round");
  svg.append(p);
  return svg;
}
const arr = (v) => (Array.isArray(v) ? v.filter((x) => x != null && x !== "") : []);
const str = (v) => (v == null ? "" : String(v));
const has = (v) => (Array.isArray(v) ? v.length > 0 : v != null && String(v).trim() !== "");
const pad2 = (n) => String(n).padStart(2, "0");
const reducedMotion = () => { try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch { return false; } };
const cap = (s) => { s = str(s); return s ? s[0].toUpperCase() + s.slice(1) : s; };
function humanise(id) {
  return cap(str(id).split("-").map((w) => (ABBR.has(w) ? w.toUpperCase() : w)).join(" "));
}
function label(kind, key, domMaps) {
  const m = domMaps?.[kind];
  const v = m && m[key];
  if (typeof v === "string" && v) return v;
  if (v && typeof v === "object" && v.label) return String(v.label);
  return LABELS[kind]?.[key] || humanise(key);
}

/* ------------------------------------------------------------------ safe loading of teammates' modules */

async function tryImport(path, ms = 4000) {
  try {
    return await Promise.race([import(path), new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), ms))]);
  } catch (e) {
    console.warn(`[injury] optional module unavailable: ${path} (${e?.message || e})`);
    return null;
  }
}
function pickFn(mod, name) {
  if (!mod) return null;
  if (typeof mod[name] === "function") return mod[name];
  if (typeof mod.default === "function") return mod.default;
  return null;
}
async function getStore(ctx) {
  if (ctx?.store) return ctx.store;
  const m = await tryImport("../store.js");
  return m ? (m.store ?? m.default ?? m) : null;
}
async function loadInjury(store, id) {
  if (store && typeof store.injury === "function") return store.injury(id);
  const r = await fetch(`data/injuries/${encodeURIComponent(id)}.json`);
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
}
async function loadIndex(store) {
  try {
    if (store && typeof store.index === "function") return await store.index();
    const r = await fetch("data/index.json");
    return r.ok ? await r.json() : null;
  } catch { return null; }
}
/** Run a teammate widget; return its element or null (caller then renders the fallback). */
function tryWidget(fn, ...args) {
  if (typeof fn !== "function") return null;
  try {
    const out = fn(...args);
    return out instanceof Node ? out : null;
  } catch (e) {
    console.warn("[injury] widget failed, using fallback:", e?.message || e);
    return null;
  }
}

/* ------------------------------------------------------------------ text formatting & citations */

function makeText(ctx, dom, injury) {
  const refs = arr(injury.references);
  const num = new Map(refs.map((r, i) => [str(r.id), i + 1]));
  const byId = new Map(refs.map((r) => [str(r.id), r]));
  const ext = (typeof ctx?.formatText === "function" && ctx.formatText) || (typeof dom?.formatText === "function" && dom.formatText) || null;
  const refHref = (rid) => `#injury.${injury.id}.ref-${rid}`;

  function citeLink(rid) {
    const n = num.get(rid);
    if (!n) return el("span", { class: "cite__x", title: `Unknown reference ${rid}` }, rid);
    return el("a", { class: "cite__a", href: refHref(rid), "data-ref": rid, "aria-label": `Reference ${n}` }, String(n));
  }
  function citeSup(ids) {
    const sup = el("sup", { class: "cite" });
    ids.forEach((rid, i) => { if (i) sup.append(","); sup.append(citeLink(rid)); });
    return sup;
  }
  function inlineInto(parent, s) {
    const re = /\*\*(.+?)\*\*|\[\s*(r\d+(?:\s*[,;]\s*r\d+)*)\s*\]/g;
    let last = 0, m;
    while ((m = re.exec(s))) {
      let before = s.slice(last, m.index);
      if (m[2] != null) before = before.replace(/\s+$/, "");
      if (before) parent.append(before);
      if (m[1] != null) inlineInto(parent.appendChild(document.createElement("strong")), m[1]);
      else parent.append(citeSup(m[2].split(/\s*[,;]\s*/)));
      last = re.lastIndex;
    }
    if (last < s.length) parent.append(s.slice(last));
  }
  function local(text) {
    const frag = document.createDocumentFragment();
    for (const para of str(text).split(/\n{2,}/)) {
      if (!para.trim()) continue;
      const p = document.createElement("p");
      inlineInto(p, para.trim());
      frag.append(p);
    }
    return frag;
  }
  // Normalise any citation anchors produced by the shared formatText so they jump to the exact reference.
  function normalise(frag) {
    for (const a of frag.querySelectorAll ? frag.querySelectorAll("a") : []) {
      const href = a.getAttribute("href") || "";
      const ds = a.dataset || {};
      let rid = ds.ref || ds.refs || ds.cite || "";
      rid = rid.split(/[\s,;]+/)[0];
      if (!rid && /references|ref-/.test(href)) {
        const m = href.match(/ref-?(r\d+)/) || null;
        if (m) rid = m[1];
        else {
          const n = parseInt(a.textContent, 10);
          if (n && refs[n - 1]) rid = str(refs[n - 1].id);
        }
      }
      if (rid && num.has(rid)) {
        a.setAttribute("href", refHref(rid));
        a.dataset.ref = rid;
        a.classList.add("cite__a");
        a.removeAttribute("title");            // replaced by the accessible tooltip (aria-describedby)
        a.textContent = String(num.get(rid));  // number = position in the reference list
        a.setAttribute("aria-label", `Reference ${num.get(rid)}`);
      }
    }
    return frag;
  }
  /** Block text → DocumentFragment of <p>. */
  function block(text) {
    if (!has(text)) return document.createDocumentFragment();
    if (ext) {
      try {
        const out = ext(str(text), { refs, injuryId: injury.id });
        if (out instanceof Node) {
          const frag = out instanceof DocumentFragment ? out : (() => { const f = document.createDocumentFragment(); f.append(out); return f; })();
          if (![...frag.childNodes].some((n) => n.nodeType === 1 && n.tagName === "P")) {
            const p = document.createElement("p"); p.append(...frag.childNodes); frag.append(p);
          }
          return normalise(frag);
        }
      } catch (e) { console.warn("[injury] formatText failed, using local formatter:", e?.message || e); }
    }
    return local(text);
  }
  /** Inline text (inside li/td/dd) → DocumentFragment without a wrapping <p> when it is a single paragraph. */
  function inline(text) {
    const frag = block(text);
    const els = [...frag.childNodes].filter((n) => !(n.nodeType === 3 && !n.textContent.trim()));
    if (els.length === 1 && els[0].nodeType === 1 && els[0].tagName === "P") {
      const f = document.createDocumentFragment(); f.append(...els[0].childNodes); return f;
    }
    return frag;
  }
  /** A "Sources 3, 4" line for structured refs arrays. */
  function sources(ids, lead = "Sources") {
    const list = arr(ids).map(str).filter((r) => num.has(r));
    if (!list.length) return null;
    const wrap = el("span", { class: "inj-sources" }, el("span", { class: "inj-sources__lead" }, list.length === 1 ? lead.replace(/s$/, "") : lead));
    list.forEach((rid, i) => { if (i) wrap.append(", "); wrap.append(citeLink(rid)); });
    return wrap;
  }
  return { block, inline, sources, citeLink, num, byId, refs };
}

/* ------------------------------------------------------------------ small building blocks */

function sectionShell(id, n, heading, ...kids) {
  return el("section", { class: `inj-sec inj-sec--${id}`, id, "aria-labelledby": `${id}-h` },
    el("header", { class: "inj-sec__head" },
      el("span", { class: "inj-sec__num", "aria-hidden": "true" }, pad2(n)),
      el("h2", { class: "inj-sec__title", id: `${id}-h`, tabindex: "-1" }, heading)),
    ...kids);
}
function h3(text, id) { return el("h3", { class: "inj-h3", id, tabindex: id ? "-1" : null }, text); }
function prose(frag, cls = "") { return el("div", { class: `inj-prose ${cls}`.trim() }, frag); }
function bulletList(items, T, cls = "inj-list") {
  const list = arr(items);
  if (!list.length) return null;
  return el("ul", { class: cls }, list.map((t) => el("li", null, T.inline(t))));
}
function dl(items, keyF, valF, T, cls = "inj-dl") {
  const list = arr(items);
  if (!list.length) return null;
  return el("dl", { class: cls }, list.map((it) => el("div", { class: "inj-dl__row" },
    el("dt", null, T.inline(keyF(it))), el("dd", null, T.inline(valF(it))))));
}
/** Real <table>; stacks into labelled rows on narrow screens (td[data-label]). */
function table(cols, rows, { caption, cls = "" } = {}) {
  const t = el("table", { class: `inj-table ${cls}`.trim() },
    caption ? el("caption", { class: "inj-table__cap" }, caption) : null,
    el("thead", null, el("tr", null, cols.map((c) => el("th", { scope: "col", class: c.cls }, c.label)))),
    el("tbody", null, rows.map((r) => el("tr", null, cols.map((c, i) => {
      const v = r[i];
      return i === 0 ? el("th", { scope: "row", class: c.cls, "data-label": c.label }, v) : el("td", { class: c.cls, "data-label": c.label }, v);
    })))));
  return el("div", { class: "inj-table-wrap" }, t);
}
function fmtDay(d) {
  d = Number(d);
  if (!isFinite(d)) return { n: "", u: "" };
  if (d < 14) return { n: String(Math.round(d)), u: d === 1 ? "day" : "days" };
  if (d < 112) { const w = d / 7; return { n: String(Number.isInteger(w) ? w : Math.round(w * 2) / 2), u: "wk" }; }
  if (d < 540) { const m = Math.round((d / 30.44) * 2) / 2; return { n: String(m), u: "mo" }; }
  const y = Math.round((d / 365) * 2) / 2; return { n: String(y), u: y === 1 ? "yr" : "yr" };
}
function fmtRange(a, b) {
  const A = fmtDay(a), B = fmtDay(b);
  if (Number(a) === 0) return `0–${B.n} ${B.u}`;
  if (A.u === B.u) return `${A.n}–${B.n} ${B.u}`;
  return `${A.n} ${A.u} – ${B.n} ${B.u}`;
}
function fmtDayLong(d) { const D = fmtDay(d); return Number(d) === 0 ? "Day 0" : `${D.n} ${D.u}`; }
function phaseKind(name) {
  const n = str(name).toLowerCase();
  if (/inflam|haem|bleed|acute|reactive|irritab|exudat/.test(n)) return "inflammatory";
  if (/prolif|repair|regenerat|fibro|granulat|callus|epilig|matrix/.test(n)) return "proliferative";
  if (/remodel|matur|ligamenti|consolidat|adapt/.test(n)) return "remodelling";
  return "other";
}
/** "85% (95% CI 83–87)" → { main: "85%", sub: "95% CI 83–87" } */
function splitStat(s) {
  const t = str(s).trim();
  const m = t.match(/^([~≈<>≤≥]?\s?\d[\d.,]*\s?%?)(.*)$/);
  if (!m) return { main: t, sub: "" };
  const sub = m[2].trim().replace(/^\((.*?)\)/, "$1").replace(/^[;,]\s*/, "").trim();
  return { main: m[1].trim(), sub };
}

/* ------------------------------------------------------------------ header */

function buildHeader(inj, T, store, dom, cleanup) {
  const maps = { region: dom?.REGION_LABELS, tissue: dom?.TISSUE_LABELS, onset: dom?.ONSET_LABELS, mechanism: dom?.MECHANISM_LABELS };
  const regionLabel = label("region", inj.region, maps);
  const crumbs = el("nav", { class: "inj-crumbs", "aria-label": "Breadcrumb" },
    el("ol", null,
      el("li", null, el("a", { href: "#library" }, "Library")),
      inj.region ? el("li", null, el("a", { href: `#library.${inj.region}` }, regionLabel)) : null,
      el("li", null, el("span", { "aria-current": "page" }, inj.shortName || inj.name))));

  const aka = arr(inj.aka).length
    ? el("p", { class: "inj-aka" }, el("span", { class: "inj-aka__label" }, "Also known as"), " ", arr(inj.aka).join(" · "))
    : null;

  // Tag groups: region / tissue / onset / mechanism / sports
  const group = (name, chips, cls = "") => (chips.length
    ? el("div", { class: `inj-tags__group ${cls}`.trim() },
      el("span", { class: "inj-tags__label" }, name),
      el("ul", { class: "inj-tags__list", "aria-label": name }, chips.map((c) => el("li", null, c))))
    : null);
  const chip = (text, cls, href, title) => (href
    ? el("a", { class: `inj-chip ${cls}`, href, title }, text)
    : el("span", { class: `inj-chip ${cls}` }, text));
  const sports = arr(inj.sports);
  const tags = el("div", { class: "inj-tags" },
    group("Region", inj.region ? [chip(regionLabel, "inj-chip--region", `#library.${inj.region}`, `Browse ${regionLabel} injuries`)] : []),
    group("Tissue", arr(inj.tissues).map((t, i) => chip(label("tissue", t, maps), `inj-chip--tissue${i === 0 ? " is-primary" : ""}`, `#healing.${t}`, `How ${label("tissue", t, maps).toLowerCase()} heals`))),
    group("Onset", inj.onset ? [chip(label("onset", inj.onset, maps), "inj-chip--plain")] : []),
    group("Mechanism", arr(inj.mechanismType).map((m) => chip(label("mechanism", m, maps), "inj-chip--plain"))),
    group("Sports", sports.map((s) => chip(cap(s), "inj-chip--quiet")), "inj-tags__group--sports"));

  const urg = URGENCY[inj.urgency];
  const banner = urg
    ? el("div", { class: `inj-urgency inj-urgency--${inj.urgency}`, role: "note", "aria-label": `${urg.title} injury` },
      el("span", { class: "inj-urgency__icon" }, icon(urg.icon, 22)),
      el("p", { class: "inj-urgency__text" },
        el("strong", null, urg.title + ". "), urg.text, " ",
        has(inj.redFlags) ? el("a", { href: `#injury.${inj.id}.red-flags`, class: "inj-urgency__link" }, "See red flags") : null))
    : null;

  const summary = has(inj.summary) ? el("p", { class: "inj-summary" }, str(inj.summary)) : null;

  // Actions
  const status = el("span", { class: "inj-actions__status", role: "status", "aria-live": "polite" });
  const fav = store?.favourites;
  const isSaved = () => { try { return !!fav?.has?.(inj.id); } catch { return false; } };
  const saveBtn = el("button", { type: "button", class: "inj-btn inj-btn--save", "aria-pressed": String(isSaved()) },
    icon("bookmark"), el("span", { class: "inj-btn__label" }, isSaved() ? "Saved" : "Save"));
  const syncSave = () => {
    const on = isSaved();
    saveBtn.setAttribute("aria-pressed", String(on));
    saveBtn.querySelector(".inj-btn__label").textContent = on ? "Saved" : "Save";
  };
  if (fav && typeof fav.toggle === "function") {
    saveBtn.addEventListener("click", () => {
      try { fav.toggle(inj.id); } catch {}
      syncSave();
      status.textContent = isSaved() ? "Saved to your list" : "Removed from saved";
    });
    try {
      const off = fav.onChange?.(syncSave);
      if (typeof off === "function") cleanup.push(off);
    } catch {}
  } else {
    saveBtn.disabled = true;
    saveBtn.title = "Saving is unavailable in this browser";
  }
  const compare = el("a", { class: "inj-btn", href: `#compare.${inj.id}` }, icon("compare"), el("span", { class: "inj-btn__label" }, "Compare with…"));
  const copyBox = el("div", { class: "inj-copybox", hidden: true });
  const copyBtn = el("button", { type: "button", class: "inj-btn" }, icon("link"), el("span", { class: "inj-btn__label" }, "Copy link"));
  copyBtn.addEventListener("click", async () => {
    const url = `${String(location.href).split("#")[0]}#injury.${inj.id}`;
    if (await copyText(url)) {
      status.textContent = "Link copied";
      copyBox.hidden = true;
    } else {
      // Manual fallback: show the URL selected, ready for Ctrl/Cmd+C.
      copyBox.replaceChildren(
        el("label", { for: "inj-copy-input", class: "inj-copybox__label" }, "Copy this link"),
        el("input", { id: "inj-copy-input", class: "inj-copybox__input", type: "text", readonly: true, value: url }));
      copyBox.hidden = false;
      const input = copyBox.querySelector("input");
      input.focus(); input.select();
      status.textContent = "Press Ctrl+C (or ⌘C) to copy";
    }
    clearTimeout(S?.statusTimer);
    if (S) S.statusTimer = setTimeout(() => { status.textContent = ""; }, 4000);
  });
  const actions = el("div", { class: "inj-actions" }, saveBtn, compare, copyBtn, status, copyBox);

  return el("header", { class: "inj-head" },
    crumbs,
    el("h1", { class: "inj-title", tabindex: "-1" }, inj.name || inj.shortName || humanise(inj.id)),
    aka, summary, banner, tags, actions);
}

async function copyText(text) {
  try {
    if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(text); return true; }
  } catch {}
  try {
    const ta = el("textarea", { class: "inj-offscreen", readonly: true, "aria-hidden": "true" });
    ta.value = text;
    document.body.append(ta);
    ta.select();
    const ok = document.execCommand && document.execCommand("copy");
    ta.remove();
    return !!ok;
  } catch { return false; }
}

/* ------------------------------------------------------------------ hero: animation + key facts */

function buildHero(inj, T) {
  const anim = inj.animation;
  const stage = el("div", { class: "inj-anim__stage", "data-state": "loading" },
    el("div", { class: "inj-anim__loading" },
      el("span", { class: "inj-anim__spinner", "aria-hidden": "true" }),
      el("span", null, "Loading animation…")));
  const fig = el("figure", { class: "inj-anim", "aria-labelledby": "inj-anim-cap" },
    stage,
    el("figcaption", { class: "inj-anim__cap", id: "inj-anim-cap" },
      el("span", { class: "inj-anim__kicker" }, "Animated explainer"),
      el("span", { class: "inj-anim__title" }, str(anim?.title) || `How ${inj.shortName || inj.name} happens`)));

  const facts = arr(inj.keyFacts);
  const aside = el("aside", { class: "inj-facts", "aria-labelledby": "inj-facts-h" },
    el("h2", { class: "inj-facts__title", id: "inj-facts-h" }, "Key facts"),
    facts.length
      ? el("dl", { class: "inj-facts__list" }, facts.map((f) => el("div", { class: "inj-facts__row" },
        el("dt", null, str(f.label)), el("dd", null, T.inline(f.value)))))
      : el("p", { class: "inj-muted" }, "No key facts recorded."),
    el("p", { class: "inj-facts__jump" },
      quick(inj, "assessment-tests", "Special tests", has(inj.assessment?.specialTests)),
      quick(inj, "timeframes", "Timeframes", true),
      quick(inj, "return-to-sport", "RTS criteria", has(inj.returnToSport?.criteria)),
      quick(inj, "red-flags", "Red flags", has(inj.redFlags))));
  return { el: el("div", { class: "inj-hero" }, fig, aside), stage, fig };
}
function quick(inj, target, text, show) {
  return show ? el("a", { class: "inj-jump", href: `#injury.${inj.id}.${target}` }, text, icon("arrow", 14)) : null;
}

function animFallback(inj, reason) {
  const steps = arr(inj.mechanism?.sequence);
  return el("div", { class: "inj-anim__fallback" },
    el("p", { class: "inj-anim__fb-title" }, reason || "The animation can't be shown here, so here is the mechanism step by step."),
    steps.length
      ? el("ol", { class: "inj-anim__fb-steps" }, steps.map((s) => el("li", null, str(s).replace(/\s*\[r\d+(?:\s*,\s*r\d+)*\]/g, ""))))
      : null,
    has(inj.mechanism) ? el("a", { class: "inj-jump", href: `#injury.${inj.id}.mechanism` }, "Read the full mechanism", icon("arrow", 14)) : null);
}

async function mountHero(inj, stage, fig, token) {
  const anim = inj.animation;
  const fail = (msg) => {
    if (S !== token) return;
    try { token.player?.destroy?.(); } catch {}
    token.player = null;
    stage.dataset.state = "fallback";
    fig.classList.add("inj-anim--fallback");
    stage.replaceChildren(animFallback(inj, msg));
  };
  if (!anim || !arr(anim.phases).length) return fail("No animation has been authored for this injury yet. The mechanism, step by step:");
  const mod = await tryImport("../anim/index.js", 8000);
  if (S !== token) return;
  const mount = pickFn(mod, "mountAnimation");
  if (!mount) return fail();
  try {
    stage.replaceChildren();
    const player = mount(stage, anim, { autoplay: false, loop: false, showTitle: false });
    token.player = player;
    stage.dataset.state = "ready";
    if (player?.ready && typeof player.ready.catch === "function") player.ready.catch((e) => { console.warn("[injury] player failed:", e?.message || e); fail(); });
  } catch (e) {
    console.warn("[injury] mountAnimation failed:", e?.message || e);
    fail();
  }
}

/* ------------------------------------------------------------------ sections */

function secOverview(inj, T) {
  const epi = inj.epidemiology || {};
  const rf = epi.riskFactors || {};
  const rfList = (items) => {
    const list = arr(items);
    if (!list.length) return el("p", { class: "inj-muted" }, "None established.");
    return el("ul", { class: "inj-list inj-list--rf" }, list.map((t) => {
      const mod = /\(modifiable\)/i.test(t);
      const li = el("li", null, T.inline(str(t).replace(/\s*\(modifiable\)/i, "")));
      if (mod) li.append(" ", el("span", { class: "inj-tag inj-tag--mod" }, "Modifiable"));
      return li;
    }));
  };
  const pops = arr(inj.populations);
  return [
    prose(T.block(inj.overview), "inj-prose--lead"),
    pops.length ? el("p", { class: "inj-who" }, el("span", { class: "inj-who__label" }, "Who it affects"), " ", pops.join(" · ")) : null,
    has(epi.text) || has(rf.intrinsic) || has(rf.extrinsic) ? [
      h3("Epidemiology"),
      prose(T.block(epi.text)),
      (has(rf.intrinsic) || has(rf.extrinsic)) ? el("div", { class: "inj-cols inj-rf" },
        el("div", { class: "inj-rf__col" }, el("h4", { class: "inj-h4" }, "Intrinsic risk factors"), rfList(rf.intrinsic)),
        el("div", { class: "inj-rf__col" }, el("h4", { class: "inj-h4" }, "Extrinsic risk factors"), rfList(rf.extrinsic))) : null
    ] : null
  ];
}

function secMechanism(inj, T) {
  const m = inj.mechanism || {};
  const seq = arr(m.sequence);
  const variants = arr(m.variants);
  // The step where the tissue actually fails gets the "tissue" emphasis (first match only).
  const failAt = seq.findIndex((s) => /\b(ruptur|tear|tears|torn|fails?|failure|fractur|dislocat|avuls)/i.test(s));
  return [
    prose(T.block(m.summary)),
    seq.length ? [
      h3("How it happens, step by step"),
      el("ol", { class: "inj-steps" }, seq.map((s, i) => el("li", { class: `inj-steps__item${i === failAt ? " is-failure" : ""}` },
        el("span", { class: "inj-steps__n", "aria-hidden": "true" }, String(i + 1)),
        el("p", { class: "inj-steps__text" }, T.inline(s)))))
    ] : null,
    variants.length ? [
      h3("Other mechanisms"),
      el("dl", { class: "inj-variants" }, variants.map((v) => el("div", { class: "inj-variants__item" },
        el("dt", null, str(v.name)), el("dd", null, T.inline(v.description)))))
    ] : null
  ];
}

function secAnatomy(inj, T) {
  const a = inj.anatomy || {};
  return [
    prose(T.block(a.text)),
    has(a.structures) ? [h3("Key structures"), dl(a.structures, (s) => s.name, (s) => s.role, T, "inj-dl inj-dl--anat")] : null
  ];
}

function secPatho(inj, T) {
  const p = inj.pathophysiology || {};
  const layers = [];
  const layer = (n, scale, title, question, content) => layers.push(
    el("li", { class: `patho__layer patho__layer--${n}` },
      el("div", { class: "patho__rail", "aria-hidden": "true" }, el("span", { class: "patho__node" }, String(n))),
      el("div", { class: "patho__label" },
        el("span", { class: "patho__scale" }, scale),
        el("h3", { class: "patho__title" }, title),
        el("p", { class: "patho__q" }, question)),
      el("div", { class: "patho__content" }, content)));

  if (has(p.tissueDamage)) layer(layers.length + 1, "Tissue", "Tissue damage", "What fails, and why", prose(T.block(p.tissueDamage)));
  if (has(p.structures)) layer(layers.length + 1, "Joint & region", "Structures injured", "What else is hurt", dl(p.structures, (s) => s.name, (s) => s.effect, T, "inj-dl inj-dl--patho"));
  if (has(p.muscles)) layer(layers.length + 1, "Muscle", "Muscle response", "How the muscles react", dl(p.muscles, (s) => s.name, (s) => s.effect, T, "inj-dl inj-dl--patho"));
  if (has(p.cellular)) {
    layer(layers.length + 1, "Cell", "Cellular timeline", "What the cells do, and when",
      el("ol", { class: "patho-cells" }, arr(p.cellular).map((c) => el("li", { class: `patho-cells__phase is-${phaseKind(c.phase)}` },
        el("span", { class: "patho-cells__time" }, str(c.timing)),
        el("span", { class: "patho-cells__name" }, str(c.phase)),
        el("p", { class: "patho-cells__desc" }, T.inline(c.description))))));
  }
  if (has(p.systems)) {
    layer(layers.length + 1, "Whole body", "Body systems", "Effects beyond the tissue",
      el("dl", { class: "patho-sys" }, arr(p.systems).map((s) => el("div", { class: "patho-sys__item" },
        el("dt", null, str(s.system)), el("dd", null, T.inline(s.effect))))));
  }
  if (!layers.length) return [el("p", { class: "inj-muted" }, "Not yet documented.")];
  return [
    el("p", { class: "patho-intro" }, "Read from the damaged tissue outwards: what fails, what else is hurt, how the muscles respond, what the cells do over time, and how the whole person is affected."),
    el("ol", { class: "patho", "aria-label": "Pathophysiology, from tissue to whole body" }, layers)
  ];
}

function secGrading(inj, T) {
  const g = inj.grading;
  const grades = arr(g?.grades);
  const anyProg = grades.some((x) => has(x.prognosis));
  const cols = [{ label: "Grade", cls: "col-grade" }, { label: "Description" }];
  if (anyProg) cols.push({ label: "Prognosis" });
  const rows = grades.map((x, i) => {
    const sev = el("span", { class: "inj-sev", "aria-hidden": "true" }, grades.map((_, j) => el("i", { class: j <= i ? "on" : null })));
    const r = [el("span", { class: "inj-grade" }, sev, el("span", null, str(x.grade))), T.inline(x.description)];
    if (anyProg) r.push(has(x.prognosis) ? T.inline(x.prognosis) : "—");
    return r;
  });
  return [
    has(g?.system) ? el("p", { class: "inj-system" }, el("span", { class: "inj-system__label" }, "System"), " ", str(g.system)) : null,
    grades.length ? table(cols, rows, { cls: "inj-table--grading" }) : null
  ];
}

function secTimeframes(inj, T, widgets) {
  const tf = inj.timeframes || {};
  const out = [prose(T.block(tf.summary))];
  const w = tryWidget(widgets.healingTimeline, inj);
  if (w) out.push(el("div", { class: "inj-widget inj-widget--timeline" }, w));
  else {
    const heal = arr(tf.healing);
    if (heal.length) {
      out.push(h3("Healing phases"));
      out.push(el("ol", { class: "inj-phases" }, heal.map((p) => el("li", { class: `inj-phases__item is-${phaseKind(p.phase)}` },
        el("span", { class: "inj-phases__time" }, fmtRange(p.startDay, p.endDay)),
        el("span", { class: "inj-phases__name" }, str(p.phase)),
        el("span", { class: "inj-phases__desc" }, T.inline(p.description))))));
    }
    const ms = arr(tf.milestones).slice().sort((a, b) => Number(a.day) - Number(b.day));
    if (ms.length) {
      out.push(h3("Milestones"));
      out.push(el("ol", { class: "inj-milestones" }, ms.map((m) => el("li", { class: "inj-milestones__item" },
        el("span", { class: "inj-milestones__day" }, fmtDayLong(m.day)),
        el("span", { class: "inj-milestones__body" },
          el("span", { class: "inj-milestones__label" }, str(m.label)),
          has(m.note) ? el("span", { class: "inj-milestones__note" }, T.inline(m.note)) : null)))));
    }
  }
  if (has(tf.returnToSport)) out.push(rtsLine(inj, T, tf.returnToSport));
  return out;
}
function rtsLine(inj, T, text, withLink = true) {
  return el("div", { class: "inj-rts-line" },
    el("span", { class: "inj-rts-line__label" }, "Return to sport"),
    el("p", { class: "inj-rts-line__text" }, T.inline(text),
      withLink && has(inj.returnToSport?.criteria) ? [" ", el("a", { href: `#injury.${inj.id}.return-to-sport`, class: "inj-rts-line__link" }, "RTS criteria")] : null));
}

function secPresentation(inj, T) {
  const cp = inj.clinicalPresentation || {};
  return [el("div", { class: "inj-cols inj-present" },
    el("div", { class: "inj-present__col" },
      el("h3", { class: "inj-h3" }, "Symptoms"), el("p", { class: "inj-sub" }, "What the patient reports"),
      bulletList(cp.symptoms, T) || el("p", { class: "inj-muted" }, "Not documented.")),
    el("div", { class: "inj-present__col" },
      el("h3", { class: "inj-h3" }, "Signs"), el("p", { class: "inj-sub" }, "What you find on examination"),
      bulletList(cp.signs, T) || el("p", { class: "inj-muted" }, "Not documented.")))];
}

function specialTestsFallback(tests, T) {
  const showLR = tests.some((t) => has(t.lrPositive) || has(t.lrNegative));
  return el("ol", { class: "inj-tests" }, tests.map((t) => {
    const stat = (k, lab, full) => {
      if (!has(t[k])) return el("div", { class: "inj-stat is-empty" }, el("dt", { title: full }, lab), el("dd", null, el("span", { class: "inj-stat__main" }, "—"), el("span", { class: "inj-sr" }, "not reported")));
      const s = splitStat(t[k]);
      return el("div", { class: "inj-stat" }, el("dt", { title: full }, lab, el("span", { class: "inj-sr" }, ` (${full})`)),
        el("dd", null, el("span", { class: "inj-stat__main" }, s.main), s.sub ? el("span", { class: "inj-stat__sub" }, s.sub) : null));
    };
    const anyStat = ["sensitivity", "specificity", "lrPositive", "lrNegative"].some((k) => has(t[k]));
    return el("li", { class: "inj-test" },
      el("div", { class: "inj-test__main" },
        el("h4", { class: "inj-test__name" }, str(t.name)),
        has(t.purpose) ? el("p", { class: "inj-test__purpose" }, T.inline(t.purpose)) : null,
        el("dl", { class: "inj-test__how" },
          has(t.procedure) ? el("div", null, el("dt", null, "How"), el("dd", null, T.inline(t.procedure))) : null,
          has(t.positive) ? el("div", null, el("dt", null, "Positive"), el("dd", null, T.inline(t.positive))) : null)),
      el("div", { class: "inj-test__acc" },
        anyStat
          ? el("dl", { class: `inj-stats${showLR ? " inj-stats--lr" : ""}` }, stat("sensitivity", "Sn", "sensitivity"), stat("specificity", "Sp", "specificity"),
            showLR ? [stat("lrPositive", "LR+", "positive likelihood ratio"), stat("lrNegative", "LR−", "negative likelihood ratio")] : null)
          : el("p", { class: "inj-test__noacc" }, "No accuracy figures from a cited source."),
        T.sources(t.refs, "Sources")));
  }));
}

function secAssessment(inj, T, widgets) {
  const a = inj.assessment || {};
  const groups = [
    ["subjective", "Subjective history"], ["observation", "Observation"], ["palpation", "Palpation"],
    ["rangeOfMotion", "Range of motion"], ["strength", "Strength"], ["neuro", "Neurological"], ["functional", "Functional tests"]
  ].filter(([k]) => has(a[k]));
  const out = [];
  if (groups.length) {
    out.push(h3("Examination", "assessment-exam"));
    out.push(el("div", { class: "inj-exam" }, groups.map(([k, lab]) => el("section", { class: `inj-exam__group inj-exam__group--${k}`, "aria-label": lab },
      el("h4", { class: "inj-exam__title" }, lab), bulletList(a[k], T)))));
  }
  const tests = arr(a.specialTests);
  if (tests.length) {
    out.push(h3("Special tests", "assessment-tests"));
    out.push(el("p", { class: "inj-sub" }, "Sn sensitivity · Sp specificity · LR likelihood ratio. Accuracy figures are shown only where a cited source reports them."));
    const w = tryWidget(widgets.specialTestsTable, tests, arr(inj.references));
    out.push(w ? el("div", { class: "inj-widget inj-widget--tests" }, w) : specialTestsFallback(tests, T));
  }
  if (has(a.clinicalRules)) {
    out.push(h3("Clinical decision rules"));
    out.push(dl(a.clinicalRules, (r) => r.name, (r) => r.description, T, "inj-dl inj-dl--rules"));
  }
  if (has(a.outcomeMeasures)) {
    out.push(h3("Outcome measures"));
    out.push(dl(a.outcomeMeasures, (r) => r.name, (r) => r.use, T, "inj-dl"));
  }
  if (has(a.imaging)) {
    out.push(h3("Imaging", "assessment-imaging"));
    out.push(table([{ label: "Modality", cls: "col-key" }, { label: "When to image" }, { label: "What it shows" }],
      arr(a.imaging).map((m) => [str(m.modality), T.inline(m.indication), T.inline(m.findings)]), { cls: "inj-table--imaging" }));
  }
  return out;
}

function secDifferentials(inj, T, indexMap) {
  const list = arr(inj.differentials);
  return [el("ul", { class: "inj-ddx" }, list.map((d) => {
    const linkable = d.id && (!indexMap || indexMap.has(d.id)) && d.id !== inj.id;
    const name = linkable
      ? el("a", { href: `#injury.${d.id}`, class: "inj-ddx__link" }, str(d.name), icon("chevron", 14))
      : el("span", null, str(d.name));
    return el("li", { class: "inj-ddx__item" },
      el("p", { class: "inj-ddx__name" }, name, d.id && !linkable && d.id !== inj.id ? el("span", { class: "inj-ddx__soon" }, "page in preparation") : null),
      el("p", { class: "inj-ddx__dist" }, T.inline(d.distinguishing)));
  }))];
}

function secRedFlags(inj, T) {
  return [el("div", { class: "inj-redflags", role: "note", "aria-label": "Red flags" },
    el("p", { class: "inj-redflags__lead" }, icon("warning", 20), el("span", null, "Screen for these. If present, stop and refer for urgent medical assessment.")),
    el("ul", { class: "inj-redflags__list" }, arr(inj.redFlags).map((f) => el("li", null, T.inline(f)))))];
}

function treatmentList(items, T) {
  return el("ul", { class: "inj-tx" }, arr(items).map((t) => {
    const not = t.recommendation === "not-recommended";
    return el("li", { class: `inj-tx__item inj-tx__item--${t.recommendation || "unrated"}` },
      el("div", { class: "inj-tx__head" },
        el("h4", { class: "inj-tx__name" }, str(t.name)),
        evidenceBadge(t.evidence, t.recommendation)),
      el("p", { class: "inj-tx__desc" }, not ? el("span", { class: "inj-tx__avoid" }, "Avoid as a routine treatment. ") : null, T.inline(t.description)),
      T.sources(t.refs, "Sources"));
  }));
}

function evidenceKey() {
  const order = ["strong", "moderate", "limited", "very-limited", "conflicting", "expert-opinion"];
  return el("details", { class: "inj-evkey" },
    el("summary", null, "How to read the evidence badges"),
    el("div", { class: "inj-evkey__body" },
      el("ul", { class: "inj-evkey__list" }, order.filter((k) => EVIDENCE_LEVELS[k]).map((k) => el("li", null, evidenceBadge(k, null)))),
      el("ul", { class: "inj-evkey__list" }, ["recommended", "consider", "not-recommended"].map((r) => el("li", null, evidenceBadge(null, r)))),
      el("p", { class: "inj-sub" }, "Evidence level reflects the quality of the research; the recommendation reflects benefit versus harm in context. ",
        el("a", { href: "#about" }, "Methods and evidence levels"))));
}

function secManagement(inj, T) {
  const m = inj.management || {};
  const out = [prose(T.block(m.principles))];
  if (has(m.medical) || has(m.physio)) out.push(evidenceKey());
  if (has(m.medical)) { out.push(h3("Medical & surgical", "management-medical")); out.push(treatmentList(m.medical, T)); }
  if (has(m.physio)) { out.push(h3("Physiotherapy", "management-physio")); out.push(treatmentList(m.physio, T)); }
  if (has(m.education)) {
    out.push(h3("Patient education"));
    out.push(el("p", { class: "inj-sub" }, "Key messages, in words you can use with the patient"));
    out.push(el("ul", { class: "inj-edu" }, arr(m.education).map((e) => el("li", null, T.inline(e)))));
  }
  return out;
}

function rehabFallback(inj, T) {
  const stages = arr(inj.rehab?.stages);
  return el("ol", { class: "inj-stages" }, stages.map((s, i) => el("li", { class: "inj-stage" },
    el("header", { class: "inj-stage__head" },
      el("span", { class: "inj-stage__n" }, `Stage ${i + 1}`),
      el("h3", { class: "inj-stage__name" }, str(s.name)),
      has(s.timeframe) ? el("span", { class: "inj-stage__time" }, str(s.timeframe)) : null),
    el("div", { class: "inj-stage__cols" },
      has(s.goals) ? el("div", null, el("h4", { class: "inj-h4" }, "Goals"), bulletList(s.goals, T)) : null,
      has(s.precautions) ? el("div", { class: "inj-stage__prec" }, el("h4", { class: "inj-h4" }, "Precautions"), bulletList(s.precautions, T)) : null),
    has(s.exercises) ? [el("h4", { class: "inj-h4" }, "Exercises"),
      table([{ label: "Exercise", cls: "col-key" }, { label: "Dosage", cls: "col-dose" }, { label: "Coaching cue" }],
        arr(s.exercises).map((x) => [str(x.name), str(x.dosage), has(x.cues) ? T.inline(x.cues) : "—"]), { cls: "inj-table--ex" })] : null,
    has(s.progressionCriteria) ? el("div", { class: "inj-stage__next" },
      el("h4", { class: "inj-h4" }, i === stages.length - 1 ? "Criteria to complete" : "Move on when"),
      el("ul", { class: "inj-checks" }, arr(s.progressionCriteria).map((c) => el("li", null, icon("check", 16), el("span", null, T.inline(c)))))) : null)));
}

function secRehab(inj, T, widgets) {
  const r = inj.rehab || {};
  const out = [prose(T.block(r.overview))];
  const w = tryWidget(widgets.exerciseProgram, inj);
  if (w) out.push(el("div", { class: "inj-widget inj-widget--program" }, w));
  else if (has(r.stages)) out.push(rehabFallback(inj, T));
  return out;
}

function secRTS(inj, T) {
  const r = inj.returnToSport || {};
  const out = [];
  if (has(inj.timeframes?.returnToSport)) out.push(rtsLine(inj, T, inj.timeframes.returnToSport, false));
  const crit = arr(r.criteria);
  if (crit.length) {
    const count = el("p", { class: "inj-rtscheck__count", "aria-live": "polite" }, `0 of ${crit.length} criteria ticked`);
    const update = (form) => {
      const n = form.querySelectorAll("input:checked").length;
      count.textContent = `${n} of ${crit.length} criteria ticked${n === crit.length ? " — all criteria met" : ""}`;
      form.classList.toggle("is-complete", n === crit.length);
    };
    const form = el("form", { class: "inj-rtscheck", "aria-labelledby": "rts-crit-h", on: { submit: (e) => e.preventDefault() } },
      el("ul", { class: "inj-rtscheck__list" }, crit.map((c, i) => el("li", null,
        el("input", { type: "checkbox", id: `rts-c${i}`, class: "inj-rtscheck__box" }),
        el("label", { for: `rts-c${i}` }, T.inline(c))))),
      el("div", { class: "inj-rtscheck__foot" }, count,
        el("button", { type: "reset", class: "inj-btn inj-btn--small" }, "Clear")));
    form.addEventListener("change", () => update(form));
    form.addEventListener("reset", () => setTimeout(() => update(form), 0));
    out.push(el("h3", { class: "inj-h3", id: "rts-crit-h" }, "Criteria checklist"));
    out.push(el("p", { class: "inj-sub" }, "Tick criteria as your patient meets them. Nothing is saved or sent."));
    out.push(form);
  }
  if (has(r.tests)) { out.push(h3("Tests used")); out.push(bulletList(r.tests, T, "inj-list inj-list--tests")); }
  return out;
}

function secRelated(inj, indexMap, injuryCard) {
  const ids = arr(inj.related).filter((r) => r !== inj.id);
  const ddxName = new Map(arr(inj.differentials).filter((d) => d.id).map((d) => [d.id, d.name]));
  const ul = el("ul", { class: `inj-related${injuryCard ? " inj-related--cards" : ""}` });
  for (const rid of ids) {
    const entry = indexMap?.get(rid) || null;
    if (entry && injuryCard) {
      const c = tryWidget(injuryCard, entry, { compact: true, headingLevel: 3 });
      if (c) { ul.append(el("li", { class: "inj-related__item" }, c)); continue; }
    }
    if (entry || !indexMap) {
      ul.append(el("li", { class: "inj-related__item" },
        el("a", { class: "inj-related__link", href: `#injury.${rid}` },
          el("span", { class: "inj-related__name" }, str(entry?.shortName || entry?.name || ddxName.get(rid) || humanise(rid))),
          entry?.region ? el("span", { class: "inj-related__meta" }, label("region", entry.region)) : null,
          icon("chevron", 16))));
    } else {
      ul.append(el("li", { class: "inj-related__item is-pending" },
        el("span", { class: "inj-related__name" }, str(ddxName.get(rid) || humanise(rid))),
        el("span", { class: "inj-related__meta" }, "In preparation")));
    }
  }
  return [ul];
}

function secReferences(inj) {
  const refs = arr(inj.references);
  const counts = {};
  for (const r of refs) counts[r.type] = (counts[r.type] || 0) + 1;
  const synth = (counts["clinical-practice-guideline"] || 0) + (counts["consensus-statement"] || 0);
  const sr = (counts["systematic-review"] || 0) + (counts["meta-analysis"] || 0);
  const years = refs.map((r) => Number(r.year)).filter(Boolean);
  const bits = [`${refs.length} reference${refs.length === 1 ? "" : "s"}`];
  if (synth) bits.push(`${synth} guideline${synth === 1 ? "" : "s"} or consensus statement${synth === 1 ? "" : "s"}`);
  if (sr) bits.push(`${sr} systematic review${sr === 1 ? "" : "s"} or meta-analys${sr === 1 ? "is" : "es"}`);
  if (years.length) bits.push(`${Math.min(...years)}–${Math.max(...years)}`);
  return { summary: el("p", { class: "inj-refsum" }, bits.join(" · ")), refs };
}

/* ------------------------------------------------------------------ footer */

function buildFooter(inj) {
  const m = inj.meta || {};
  return el("footer", { class: "inj-foot" },
    el("p", null,
      has(m.lastReviewed) ? ["Last reviewed ", el("time", { datetime: str(m.lastReviewed) }, str(m.lastReviewed)), ". "] : null,
      "An educational resource for physiotherapists and students. It does not replace clinical assessment, local protocols or a surgeon’s instructions. ",
      el("a", { href: "#about" }, "Methods & disclaimer")));
}

/* ------------------------------------------------------------------ navigation: TOC, scroll-spy, in-page links, citation tooltips */

function buildToc(inj, present) {
  const ol = el("ol", { class: "inj-toc__list" });
  present.forEach(([id, short], i) => {
    const li = el("li", { class: "inj-toc__item" },
      el("a", { class: "inj-toc__link", href: `#injury.${inj.id}.${id}`, "data-sec": id },
        el("span", { class: "inj-toc__n", "aria-hidden": "true" }, pad2(i + 1)), el("span", { class: "inj-toc__text" }, short)));
    const subs = (SUBNAV[id] || []).filter(([sid]) => present.sub.has(sid));
    if (subs.length) {
      li.append(el("ol", { class: "inj-toc__sub" }, subs.map(([sid, lab]) => el("li", null,
        el("a", { class: "inj-toc__sublink", href: `#injury.${inj.id}.${sid}`, "data-sub": sid }, lab)))));
    }
    ol.append(li);
  });
  return el("nav", { class: "inj-toc", "aria-label": "On this page" },
    el("p", { class: "inj-toc__title", "aria-hidden": "true" }, "On this page"), ol);
}

function stickyOffset() {
  // Height of anything fixed/sticky at the top (site header + our chip bar on mobile).
  let off = 0;
  try {
    for (const hdr of document.querySelectorAll("header, [role='banner'], .site-header")) {
      if (hdr.closest(".inj")) continue;
      const cs = getComputedStyle(hdr);
      if (cs.position === "sticky" || cs.position === "fixed") { const r = hdr.getBoundingClientRect(); if (r.top <= 1 && r.height < 200) off = Math.max(off, r.bottom); }
    }
    const bar = S?.toc;
    if (bar && getComputedStyle(bar).position === "sticky" && bar.dataset.mode === "bar") off = Math.max(off, bar.getBoundingClientRect().bottom);
  } catch {}
  return off;
}

function scrollToId(targetId, { smooth = false, focus = false } = {}) {
  const t = targetId && document.getElementById(targetId);
  if (!t) return false;
  const top = window.scrollY + t.getBoundingClientRect().top - stickyOffset() - 12;
  window.scrollTo({ top: Math.max(0, top), behavior: smooth && !reducedMotion() ? "smooth" : "auto" });
  if (t.matches(".ref-list__item, a.cite__a")) {
    t.classList.remove("is-target"); void t.offsetWidth; t.classList.add("is-target");
    setTimeout(() => t.classList.remove("is-target"), 2400);
  }
  if (focus) {
    const f = t.matches("h2,h3,h4,[tabindex]") ? t : t.querySelector("h2,h3,[tabindex='-1']") || t;
    if (!f.hasAttribute("tabindex") && !/^(A|BUTTON|INPUT)$/.test(f.tagName)) f.setAttribute("tabindex", "-1");
    try { f.focus({ preventScroll: true }); } catch {}
  }
  return true;
}

function setupNav(article, inj, token, router) {
  const toc = token.toc;
  const links = [...toc.querySelectorAll(".inj-toc__link")];
  const secs = links.map((a) => document.getElementById(a.dataset.sec)).filter(Boolean);
  let current = null, raf = 0;

  const mode = () => { toc.dataset.mode = matchMedia("(min-width: 1024px)").matches ? "rail" : "bar"; };
  mode();

  const setCurrent = (id) => {
    if (id === current) return;
    current = id;
    for (const a of links) {
      const on = a.dataset.sec === id;
      a.classList.toggle("is-current", on);
      if (on) a.setAttribute("aria-current", "location"); else a.removeAttribute("aria-current");
      if (on && toc.dataset.mode === "bar") {
        const list = toc.querySelector(".inj-toc__list");
        const left = a.parentElement.offsetLeft - list.clientWidth / 2 + a.parentElement.offsetWidth / 2;
        try { list.scrollTo({ left: Math.max(0, left), behavior: reducedMotion() ? "auto" : "smooth" }); } catch { list.scrollLeft = left; }
      }
    }
  };
  const spy = () => {
    raf = 0;
    if (S !== token) return;
    const line = stickyOffset() + 80;
    let id = secs[0]?.id || null;
    for (const s of secs) { if (s.getBoundingClientRect().top <= line) id = s.id; else break; }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4 && secs.length) id = secs[secs.length - 1].id;
    setCurrent(id);
  };
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(spy); };
  const onResize = () => { mode(); onScroll(); };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  token.cleanup.push(() => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); if (raf) cancelAnimationFrame(raf); });

  // In-page links (#injury.<id>.<anchor>): scroll without re-rendering the view; keep the URL shareable.
  const prefix = `#injury.${inj.id}.`;
  const onClick = (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    if (!href.startsWith(prefix)) return;
    const target = href.slice(prefix.length);
    if (!document.getElementById(target)) return;
    e.preventDefault();
    hideTip(token);
    scrollToId(target, { smooth: true, focus: true });
    // Keep the URL shareable without re-rendering or stacking history entries.
    if (router && typeof router.navigate === "function") { try { router.navigate(href, { replace: true, silent: true }); return; } catch {} }
    try { history.replaceState(history.state, "", href); } catch {}
  };
  article.addEventListener("click", onClick);
  token.cleanup.push(() => article.removeEventListener("click", onClick));
  spy();
}

/* Citation tooltip: one shared role="tooltip" element, shown on hover and keyboard focus. */
function setupCiteTips(article, T, token) {
  const tip = el("div", { class: "inj-tip", role: "tooltip", id: "inj-cite-tip", hidden: true });
  document.body.append(tip);
  token.tip = tip;
  token.cleanup.push(() => tip.remove());
  let showTimer = 0;
  const show = (a) => {
    const rid = a.dataset.ref;
    const ref = T.byId.get(rid);
    if (!ref) return;
    tip.replaceChildren(
      el("span", { class: "inj-tip__n" }, String(T.num.get(rid))),
      el("span", { class: "inj-tip__cite" }, str(ref.citation)),
      el("span", { class: "inj-tip__meta" }, [REF_TYPE_LABELS[ref.type] || "", ref.year || ""].filter(Boolean).join(" · ")));
    tip.hidden = false;
    a.setAttribute("aria-describedby", "inj-cite-tip");
    const r = a.getBoundingClientRect();
    const w = Math.min(360, window.innerWidth - 24);
    tip.style.maxWidth = `${w}px`;
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    let left = Math.min(Math.max(12, r.left + r.width / 2 - tw / 2), window.innerWidth - tw - 12);
    let top = r.top - th - 8;
    if (top < 8) top = r.bottom + 8;
    tip.style.left = `${Math.round(left)}px`;
    tip.style.top = `${Math.round(top)}px`;
    token.tipFor = a;
  };
  const hide = () => hideTip(token);
  const over = (e) => {
    const a = e.target.closest && e.target.closest("a.cite__a[data-ref]");
    if (!a) return;
    clearTimeout(showTimer);
    if (e.type === "focusin") show(a); else showTimer = setTimeout(() => show(a), 120);
  };
  const out = (e) => {
    const a = e.target.closest && e.target.closest("a.cite__a[data-ref]");
    if (!a) return;
    clearTimeout(showTimer);
    if (e.type === "mouseout" && a.contains(e.relatedTarget)) return;
    hide();
  };
  const key = (e) => { if (e.key === "Escape" && !tip.hidden) hide(); };
  article.addEventListener("mouseover", over);
  article.addEventListener("mouseout", out);
  article.addEventListener("focusin", over);
  article.addEventListener("focusout", out);
  document.addEventListener("keydown", key);
  window.addEventListener("scroll", hide, { passive: true });
  token.cleanup.push(() => {
    clearTimeout(showTimer);
    document.removeEventListener("keydown", key);
    window.removeEventListener("scroll", hide);
  });
}
function hideTip(token) {
  if (!token?.tip || token.tip.hidden) return;
  token.tip.hidden = true;
  token.tipFor?.removeAttribute("aria-describedby");
  token.tipFor = null;
}

/** Give the first citation of each reference an id, so the reference list can link back to it. */
function backlinks(article, inj, present) {
  const map = new Map();
  const labelOf = new Map(present.map(([id, short]) => [id, short]));
  for (const a of article.querySelectorAll("a.cite__a[data-ref]")) {
    const rid = a.dataset.ref;
    if (map.has(rid)) continue;
    const sec = a.closest(".inj-sec");
    if (!sec || sec.id === "references") continue;
    const anchor = `cite-${rid}`;
    if (!a.id) a.id = anchor;
    map.set(rid, { href: `#injury.${inj.id}.${a.id}`, label: labelOf.get(sec.id) });
  }
  return map;
}

/* ------------------------------------------------------------------ skeleton & error */

function skeleton() {
  return el("article", { class: "inj inj--loading", "aria-busy": "true" },
    el("p", { class: "inj-sr", role: "status" }, "Loading injury…"),
    el("div", { class: "inj-skel", "aria-hidden": "true" },
      el("div", { class: "inj-skel__bar inj-skel__bar--crumb" }),
      el("div", { class: "inj-skel__bar inj-skel__bar--title" }),
      el("div", { class: "inj-skel__bar inj-skel__bar--line" }),
      el("div", { class: "inj-skel__bar inj-skel__bar--line inj-skel__bar--short" }),
      el("div", { class: "inj-skel__hero" },
        el("div", { class: "inj-skel__stage" }),
        el("div", { class: "inj-skel__facts" }, [1, 2, 3, 4, 5].map(() => el("div", { class: "inj-skel__bar inj-skel__bar--line" }))))));
}

function suggestions(id, index) {
  if (!Array.isArray(index) || !index.length) return [];
  const words = str(id).toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 1);
  if (!words.length) return [];
  const scored = index.map((e) => {
    const hay = [e.id, e.name, e.shortName, ...arr(e.aka)].join(" ").toLowerCase();
    const toks = new Set(hay.split(/[^a-z0-9]+/));
    let score = 0;
    for (const w of words) {
      if (toks.has(w)) score += 3;
      else if ([...toks].some((t) => t.startsWith(w) || (w.length > 3 && w.startsWith(t) && t.length > 2))) score += 1;
    }
    return { e, score };
  }).filter((x) => x.score > 0).sort((a, b) => b.score - a.score);
  return scored.slice(0, 4).map((x) => x.e);
}

function errorView(id, index, err) {
  const terms = str(id).toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
  const sugg = suggestions(id, index);
  const offline = err && !/404|not\s*found/i.test(String(err?.message || err)) && err?.name === "TypeError";
  return el("article", { class: "inj inj--error" },
    el("div", { class: "inj-error" },
      el("p", { class: "inj-error__code", "aria-hidden": "true" }, id ? "No page" : "No injury"),
      el("h1", { class: "inj-title", tabindex: "-1" }, id ? "We couldn’t find that injury" : "No injury selected"),
      el("p", { class: "inj-error__text" },
        id ? ["There is no injury page for “", el("code", null, id), "”. ",
          offline ? "The content could not be loaded — check your connection and try again." : "It may still be in preparation, or the link may be mistyped."]
          : "Choose an injury from the library or search for one."),
      sugg.length ? el("div", { class: "inj-error__sugg" },
        el("h2", { class: "inj-h3" }, "Did you mean"),
        el("ul", null, sugg.map((e) => el("li", null, el("a", { href: `#injury.${e.id}` }, str(e.name)))))) : null,
      el("p", { class: "inj-error__actions" },
        terms ? el("a", { class: "inj-btn inj-btn--primary", href: `#search.${terms}` }, icon("search"), el("span", null, `Search for “${terms.replace(/-/g, " ")}”`)) : null,
        el("a", { class: "inj-btn", href: "#library" }, el("span", null, "Browse the library")))));
}

/* ------------------------------------------------------------------ view contract */

export const title = (params = []) => {
  const id = str(params[0]).toLowerCase();
  if (!id) return "Injury";
  return nameCache.get(id) || (missing.has(id) ? "Injury not found" : humanise(id));
};

export async function render(main, params = [], ctx = {}) {
  destroy();
  const token = { cleanup: [], player: null, toc: null, tip: null, statusTimer: 0 };
  S = token;
  const id = str(params[0]).toLowerCase();
  const section = params.slice(1).join(".");

  main.replaceChildren(skeleton());
  main.setAttribute("aria-busy", "true");

  if (!/^[a-z0-9][a-z0-9-]*$/.test(id)) {
    if (id) missing.add(id);
    main.replaceChildren(errorView(id, null));
    main.removeAttribute("aria-busy");
    return;
  }

  const store = await getStore(ctx);
  const [domMod, injury, index, healingMod, programMod, testsMod, cardMod] = await Promise.all([
    tryImport("../util/dom.js"),
    loadInjury(store, id).then((x) => x, (e) => ({ __error: e })),
    loadIndex(store),
    tryImport("../components/healing-timeline.js"),
    tryImport("../components/exercise-program.js"),
    tryImport("../components/special-tests.js"),
    tryImport("../components/injury-card.js")
  ]);
  if (S !== token) return;
  main.removeAttribute("aria-busy");

  if (!injury || injury.__error || typeof injury !== "object" || !injury.id) {
    missing.add(id);
    main.replaceChildren(errorView(id, index, injury?.__error));
    return;
  }
  nameCache.set(id, injury.name || injury.shortName);
  missing.delete(id);
  try { store?.recent?.push?.(id); } catch {}

  const dom = domMod || {};
  const widgets = {
    healingTimeline: pickFn(healingMod, "healingTimeline"),
    exerciseProgram: pickFn(programMod, "exerciseProgram"),
    specialTestsTable: pickFn(testsMod, "specialTestsTable")
  };
  const injuryCard = pickFn(cardMod, "injuryCard");
  const indexMap = Array.isArray(index) ? new Map(index.map((e) => [e.id, e])) : null;
  const T = makeText(ctx, dom, injury);
  const inj = injury;

  // Which sections have content (empty ones are omitted from both page and TOC).
  const a = inj.assessment || {};
  const content = {
    overview: has(inj.overview) || has(inj.epidemiology?.text),
    mechanism: has(inj.mechanism?.summary) || has(inj.mechanism?.sequence),
    anatomy: has(inj.anatomy?.text) || has(inj.anatomy?.structures),
    pathophysiology: !!inj.pathophysiology,
    grading: has(inj.grading?.grades),
    timeframes: !!inj.timeframes,
    presentation: has(inj.clinicalPresentation?.symptoms) || has(inj.clinicalPresentation?.signs),
    assessment: !!inj.assessment,
    differentials: has(inj.differentials),
    "red-flags": has(inj.redFlags),
    management: !!inj.management,
    rehab: has(inj.rehab?.overview) || has(inj.rehab?.stages),
    "return-to-sport": has(inj.returnToSport?.criteria) || has(inj.returnToSport?.tests) || has(inj.timeframes?.returnToSport),
    prognosis: has(inj.prognosis),
    prevention: has(inj.prevention),
    pearls: has(inj.clinicalPearls),
    related: has(arr(inj.related).filter((r) => r !== inj.id)),
    references: has(inj.references)
  };
  const present = SECTIONS.filter(([sid]) => content[sid]);
  present.sub = new Set([
    has(a.specialTests) && "assessment-tests", has(a.imaging) && "assessment-imaging",
    has(inj.management?.medical) && "management-medical", has(inj.management?.physio) && "management-physio"
  ].filter(Boolean));

  const builders = {
    overview: () => secOverview(inj, T),
    mechanism: () => secMechanism(inj, T),
    anatomy: () => secAnatomy(inj, T),
    pathophysiology: () => secPatho(inj, T),
    grading: () => secGrading(inj, T),
    timeframes: () => secTimeframes(inj, T, widgets),
    presentation: () => secPresentation(inj, T),
    assessment: () => secAssessment(inj, T, widgets),
    differentials: () => secDifferentials(inj, T, indexMap),
    "red-flags": () => secRedFlags(inj, T),
    management: () => secManagement(inj, T),
    rehab: () => secRehab(inj, T, widgets),
    "return-to-sport": () => secRTS(inj, T),
    prognosis: () => [prose(T.block(inj.prognosis))],
    prevention: () => [bulletList(inj.prevention, T, "inj-list inj-list--prevent")],
    pearls: () => [el("ol", { class: "inj-pearls" }, arr(inj.clinicalPearls).map((p) => el("li", null, T.inline(p))))],
    related: () => secRelated(inj, indexMap, injuryCard),
    references: () => []
  };

  const sections = present.map(([sid, , heading], i) => {
    let kids;
    try { kids = builders[sid](); }
    catch (e) { console.warn(`[injury] section ${sid} failed:`, e); kids = [el("p", { class: "inj-muted" }, "This section could not be displayed.")]; }
    const sec = sectionShell(sid, i + 1, heading, kids);
    if (sid === "grading" && inj.grading?.system) sec.dataset.system = inj.grading.system;
    return sec;
  });

  const hero = buildHero(inj, T);
  token.toc = buildToc(inj, present);
  const contentCol = el("div", { class: "inj-content" }, sections, buildFooter(inj));
  const article = el("article", { class: "inj", "data-injury": inj.id, "data-urgency": inj.urgency || "routine", "data-region": inj.region || "" },
    buildHeader(inj, T, store, dom, token.cleanup),
    hero.el,
    el("div", { class: "inj-body" }, token.toc, contentCol));

  main.replaceChildren(article);

  // References last: back-links need every citation in the DOM first.
  const refSec = article.querySelector("#references");
  if (refSec) {
    const { summary, refs } = secReferences(inj);
    let list;
    try { list = referenceList(refs, { idPrefix: "ref-", backlinks: backlinks(article, inj, present) }); }
    catch (e) { console.warn("[injury] reference list failed:", e); list = el("p", { class: "inj-muted" }, "References could not be displayed."); }
    refSec.append(summary, list);
  }

  setupNav(article, inj, token, ctx?.router);
  setupCiteTips(article, T, token);

  if (section && !ctx?.router) {
    // The shared router scrolls to the section itself (using scroll-margin-top); only do it when running standalone.
    requestAnimationFrame(() => requestAnimationFrame(() => { if (S === token) scrollToId(section, { focus: false }); }));
  }

  mountHero(inj, hero.stage, hero.fig, token);
}

export function destroy() {
  const t = S;
  S = null;
  if (!t) return;
  try { t.player?.destroy?.(); } catch (e) { console.warn("[injury] player destroy failed:", e); }
  clearTimeout(t.statusTimer);
  for (const fn of t.cleanup.splice(0)) { try { fn(); } catch {} }
}
