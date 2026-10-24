// Shared DOM helpers, inline icon set and display labels. OWNER: P1.
//
//   h(tag, attrs?, ...children) → Element
//     attrs: class (string | array | {name: bool}), style (string | object), on: { click: fn, ... },
//            html (TRUSTED markup only), aria-* / data-* / any attribute; true → "", false/null → omitted.
//            value / checked / selected / indeterminate are set as properties.
//     SVG: tags such as svg, g, path, circle, line, rect, text… are created in the SVG namespace automatically;
//          force it with an "svg:" prefix (e.g. h("svg:title")) or use svg(tag, attrs, ...children).
//     children: Nodes, strings, numbers, arrays (flattened); null/undefined/false/true are skipped.
//   esc(str) → string                 HTML-escape (& < > " ')
//   formatText(str, { refs, injuryId, paragraphs }) → DocumentFragment
//     escapes everything, **bold** → <strong>, [r1,r3] → <sup class="cite"> links to #injury.<id>.references
//     (title = citation text when refs are given; plain superscript when injuryId is missing),
//     "\n\n" → <p> paragraphs. paragraphs: "auto" (default — wrap only multi-paragraph text),
//     true (always wrap in <p>), false (never; paragraphs separated by <br><br>).
//     refs may be the references array [{id, citation}], an object map {r1: {...}|"text"} or a Map.
//   stripMarkup(str) → plain text without ** and [rN] markers (for titles, meta, aria-labels)
//   icon(name, { size, label, className }) → SVGElement  (24×24 grid, stroke = currentColor)
//   qs / qsa, debounce, plural, labelOf, humanize
//   REGIONS, BODY_AREAS, bodyAreaOf, REGION_LABELS, BODY_AREA_LABELS, TISSUE_LABELS, EVIDENCE_LABELS,
//   RECOMMENDATION_LABELS, URGENCY_LABELS, URGENCY_DESCRIPTIONS, URGENCY_TONE, ONSET_LABELS, MECHANISM_LABELS,
//   REF_TYPE_LABELS, EVIDENCE_ORDER

const SVG_NS = "http://www.w3.org/2000/svg";
const SVG_TAGS = new Set(["svg", "g", "path", "circle", "ellipse", "line", "polyline", "polygon", "rect", "text", "tspan",
  "textPath", "defs", "use", "symbol", "linearGradient", "radialGradient", "stop", "clipPath", "mask", "pattern", "marker",
  "foreignObject", "filter", "feGaussianBlur", "feOffset", "feMerge", "feMergeNode", "feFlood", "feComposite"]);
const PROPS = new Set(["value", "checked", "selected", "indeterminate", "muted"]);

function appendChildren(el, kids) {
  for (const k of kids) {
    if (k == null || k === false || k === true) continue;
    if (Array.isArray(k)) appendChildren(el, k);
    else if (k instanceof Node) el.appendChild(k);
    else if (typeof k === "object" && typeof k[Symbol.iterator] === "function" && typeof k !== "string") appendChildren(el, [...k]);
    else el.appendChild(document.createTextNode(String(k)));
  }
}

function classString(c) {
  if (!c) return "";
  if (typeof c === "string") return c;
  if (Array.isArray(c)) return c.flat(Infinity).filter(Boolean).join(" ");
  if (typeof c === "object") return Object.keys(c).filter((k) => c[k]).join(" ");
  return String(c);
}

function isAttrs(a) {
  return a != null && typeof a === "object" && !(a instanceof Node) && !Array.isArray(a) && typeof a[Symbol.iterator] !== "function";
}

function create(tag, ns, attrs, kids) {
  if (!isAttrs(attrs)) { if (attrs !== undefined) kids.unshift(attrs); attrs = null; }
  const el = ns ? document.createElementNS(SVG_NS, tag) : document.createElement(tag);
  if (attrs) {
    for (const key of Object.keys(attrs)) {
      const v = attrs[key];
      if (key === "on") { for (const ev of Object.keys(v || {})) if (typeof v[ev] === "function") el.addEventListener(ev, v[ev]); continue; }
      if (key === "html") { if (v != null) el.innerHTML = v; continue; }
      if (key === "ref") { if (typeof v === "function") v(el); continue; }
      if (v == null || v === false) continue;
      if (key === "class" || key === "className") { const s = classString(v); if (s) el.setAttribute("class", s); continue; }
      if (key === "style" && typeof v === "object") {
        for (const p of Object.keys(v)) { if (v[p] == null) continue; p.startsWith("--") || p.includes("-") ? el.style.setProperty(p, v[p]) : (el.style[p] = v[p]); }
        continue;
      }
      if (key === "dataset" && typeof v === "object") { for (const d of Object.keys(v)) if (v[d] != null) el.dataset[d] = v[d]; continue; }
      if (!ns && PROPS.has(key)) { el[key] = v; continue; }
      el.setAttribute(key, v === true ? "" : String(v));
    }
  }
  appendChildren(el, kids);
  return el;
}

/** Create an element. See header comment. */
export function h(tag, attrs, ...children) {
  let ns = false;
  if (tag.startsWith("svg:")) { tag = tag.slice(4); ns = true; } else if (SVG_TAGS.has(tag)) ns = true;
  return create(tag, ns, attrs, children);
}

/** Always create in the SVG namespace (use for <title>, <a>, <style> inside SVG). */
export function svg(tag, attrs, ...children) { return create(tag, true, attrs, children); }

const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
export function esc(str) { return String(str ?? "").replace(/[&<>"']/g, (c) => ESC[c]); }

export const qs = (sel, root = document) => root.querySelector(sel);
export const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));
export function debounce(fn, ms = 150) {
  let t; const d = (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
  d.cancel = () => clearTimeout(t); return d;
}
/** plural(3, "injury", "injuries") → "3 injuries" */
export const plural = (n, one, many = one + "s") => `${n} ${n === 1 ? one : many}`;
export const humanize = (k) => { const s = String(k ?? "").replace(/[-_]+/g, " ").trim(); return s ? s[0].toUpperCase() + s.slice(1) : ""; };
/** labelOf(REGION_LABELS, "knee") → "Knee"; unknown keys are humanised. */
export const labelOf = (map, key) => (map && map[key]) || humanize(key);

/* ------------------------------------------------------------------ formatText */
const TOKEN_RE = /\*\*(.+?)\*\*|\[(r\d+(?:\s*,\s*r\d+)*)\]/g;
const CITE_ONLY_RE = /\[(r\d+(?:\s*,\s*r\d+)*)\]/g;

function refLookup(refs) {
  if (!refs) return () => null;
  if (refs instanceof Map) return (id) => refs.get(id) ?? null;
  if (Array.isArray(refs)) { const m = new Map(refs.filter(Boolean).map((r) => [r.id, r])); return (id) => m.get(id) ?? null; }
  if (typeof refs === "object") return (id) => refs[id] ?? null;
  return () => null;
}
const citationText = (r) => (r == null ? "" : typeof r === "string" ? r : r.citation || r.title || "");

function citeNode(ids, opts, lookup) {
  const sup = document.createElement("sup");
  sup.className = "cite";
  ids.forEach((id, i) => {
    if (i) sup.appendChild(document.createTextNode(","));
    const num = id.replace(/^r/, "");
    const title = citationText(lookup(id));
    const el = document.createElement(opts.injuryId ? "a" : "span");
    if (opts.injuryId) el.setAttribute("href", `#injury.${opts.injuryId}.references`);
    el.className = "cite__ref";
    el.dataset.ref = id;
    if (title) el.setAttribute("title", `[${num}] ${title}`);
    el.setAttribute("aria-label", title ? `Reference ${num}: ${title}` : `Reference ${num}`);
    el.textContent = num;
    sup.appendChild(el);
  });
  return sup;
}

function inlineNodes(text, opts, lookup, allowBold = true) {
  const frag = document.createDocumentFragment();
  const re = allowBold ? new RegExp(TOKEN_RE.source, "g") : new RegExp(CITE_ONLY_RE.source, "g");
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
    if (allowBold && m[1] !== undefined) {
      const strong = document.createElement("strong");
      strong.appendChild(inlineNodes(m[1], opts, lookup, false));
      frag.appendChild(strong);
    } else {
      const ids = (allowBold ? m[2] : m[1]).split(/\s*,\s*/);
      // drop the space before a citation so the superscript hugs the word ("knee [r1]." → "knee¹.")
      const prev = frag.lastChild;
      if (prev && prev.nodeType === 3) prev.nodeValue = prev.nodeValue.replace(/\s+$/, "");
      frag.appendChild(citeNode(ids, opts, lookup));
    }
    last = re.lastIndex;
  }
  if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
  return frag;
}

/** Safe rich text for content strings. See header comment. */
export function formatText(str, opts = {}) {
  const frag = document.createDocumentFragment();
  if (str == null || str === "") return frag;
  const o = { refs: opts.refs, injuryId: opts.injuryId, paragraphs: opts.paragraphs ?? "auto" };
  const lookup = refLookup(o.refs);
  const paras = String(str).split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const wrap = o.paragraphs === true || (o.paragraphs === "auto" && paras.length > 1);
  paras.forEach((p, i) => {
    if (wrap) { const el = document.createElement("p"); el.appendChild(inlineNodes(p, o, lookup)); frag.appendChild(el); }
    else {
      if (i) { frag.appendChild(document.createElement("br")); frag.appendChild(document.createElement("br")); }
      frag.appendChild(inlineNodes(p, o, lookup));
    }
  });
  return frag;
}

/** Plain text: removes **bold** markers and [rN] citations. */
export function stripMarkup(str) {
  return String(str ?? "").replace(/\s*\[(r\d+(?:\s*,\s*r\d+)*)\]/g, "").replace(/\*\*(.+?)\*\*/g, "$1").replace(/\s+/g, " ").trim();
}

/* ------------------------------------------------------------------ icons
   24×24 grid, 1.75 stroke, round caps/joins, currentColor. Entries: array of [element, attrs].
   "f" in attrs = filled with currentColor (no stroke). */
const P = (d, extra) => ["path", { d, ...extra }];
const C = (cx, cy, r, extra) => ["circle", { cx, cy, r, ...extra }];
const R = (x, y, width, height, rx = 1.5, extra) => ["rect", { x, y, width, height, rx, ...extra }];
const DOT = (cx, cy) => C(cx, cy, 1.1, { f: 1 });
const BOOKMARK = "M6.5 3.75h11a.75.75 0 0 1 .75.75v15.6a.4.4 0 0 1-.64.32L12 16.2l-5.61 4.22a.4.4 0 0 1-.64-.32V4.5a.75.75 0 0 1 .75-.75z";
const BONE = "M8.18 10.6h7.64a2.4 2.4 0 1 1 2.18 1.4a2.4 2.4 0 1 1-2.18 1.4H8.18A2.4 2.4 0 1 1 6 12a2.4 2.4 0 1 1 2.18-1.4z";

const ICONS = {
  search: [C(10.75, 10.75, 6.25), P("M15.5 15.5l4.75 4.75")],
  bookmark: [P(BOOKMARK)],
  "bookmark-filled": [P(BOOKMARK, { f: 1 })],
  play: [P("M8 5.2v13.6a.6.6 0 0 0 .9.52l11-6.8a.6.6 0 0 0 0-1.04l-11-6.8A.6.6 0 0 0 8 5.2z", { f: 1 })],
  pause: [R(6.5, 5, 3.75, 14, 1, { f: 1 }), R(13.75, 5, 3.75, 14, 1, { f: 1 })],
  "chevron-right": [P("M9.5 5.5L16 12l-6.5 6.5")],
  "chevron-left": [P("M14.5 5.5L8 12l6.5 6.5")],
  "chevron-down": [P("M5.5 9.5L12 16l6.5-6.5")],
  "chevron-up": [P("M5.5 14.5L12 8l6.5 6.5")],
  "arrow-right": [P("M4.5 12h15M13.5 6l6 6-6 6")],
  "arrow-left": [P("M19.5 12h-15M10.5 6l-6 6 6 6")],
  "arrow-up": [P("M12 19.5v-15M6 10.5l6-6 6 6")],
  external: [P("M14 4.25h5.75V10M19.5 4.5l-8.25 8.25"), P("M17.75 13.5v5a1.25 1.25 0 0 1-1.25 1.25h-11a1.25 1.25 0 0 1-1.25-1.25v-11A1.25 1.25 0 0 1 5.5 6.25h5")],
  warning: [P("M10.7 4.2a1.5 1.5 0 0 1 2.6 0l7.6 13.4a1.5 1.5 0 0 1-1.3 2.25H4.4a1.5 1.5 0 0 1-1.3-2.25z"), P("M12 9.5v4.25"), DOT(12, 16.9)],
  danger: [P("M8.3 3.5h7.4l5.3 5.3v6.4l-5.3 5.3H8.3L3 15.2V8.8z"), P("M12 8v4.75"), DOT(12, 16)],
  info: [C(12, 12, 8.75), P("M12 11v5.25"), DOT(12, 7.9)],
  close: [P("M6.5 6.5l11 11M17.5 6.5l-11 11")],
  menu: [P("M4 7h16M4 12h16M4 17h16")],
  plus: [P("M12 5v14M5 12h14")],
  minus: [P("M5 12h14")],
  sun: [C(12, 12, 3.75), P("M12 2.75v2.5M12 18.75v2.5M2.75 12h2.5M18.75 12h2.5M5.46 5.46l1.77 1.77M16.77 16.77l1.77 1.77M5.46 18.54l1.77-1.77M16.77 7.23l1.77-1.77")],
  moon: [P("M19.5 14.6A7.75 7.75 0 0 1 9.4 4.5a7.75 7.75 0 1 0 10.1 10.1z")],
  monitor: [R(3, 4.25, 18, 12.25, 1.75), P("M8.5 20h7M12 16.5V20")],
  filter: [P("M3.75 6h16.5M6.75 12h10.5M9.75 18h4.5")],
  grid: [R(4, 4, 6.5, 6.5, 1.25), R(13.5, 4, 6.5, 6.5, 1.25), R(4, 13.5, 6.5, 6.5, 1.25), R(13.5, 13.5, 6.5, 6.5, 1.25)],
  list: [P("M9 6.5h11M9 12h11M9 17.5h11"), DOT(4.75, 6.5), DOT(4.75, 12), DOT(4.75, 17.5)],
  compare: [R(3.5, 4, 7, 16, 1.5), R(13.5, 4, 7, 16, 1.5), P("M6 8.5h2M6 12h2M16 8.5h2M16 12h2")],
  copy: [R(8.75, 8.75, 11, 11, 1.75), P("M15.25 8.75V5.5A1.25 1.25 0 0 0 14 4.25H5.5A1.25 1.25 0 0 0 4.25 5.5V14a1.25 1.25 0 0 0 1.25 1.25h3.25")],
  check: [P("M5 12.5l4.5 4.5L19 7.5")],
  clock: [C(12, 12, 8.75), P("M12 7.25V12l3.25 2")],
  history: [P("M4.5 12a7.5 7.5 0 1 0 2.2-5.3L4.5 9"), P("M4.5 4.75V9h4.25"), P("M12 8v4.25l2.75 1.75")],
  restart: [P("M4.75 12a7.25 7.25 0 1 0 2.12-5.13"), P("M4.25 4.5v4.25H8.5")],
  layers: [P("M12 3.75l8.5 4.5-8.5 4.5-8.5-4.5z"), P("M3.5 12.25l8.5 4.5 8.5-4.5"), P("M3.5 16.25l8.5 4.5 8.5-4.5")],
  link: [P("M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1.25 1.25"), P("M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1.25-1.25")],
  expand: [P("M14.5 4.25h5.25V9.5M9.5 19.75H4.25V14.5M19.5 4.5l-5.75 5.75M4.5 19.5l5.75-5.75")],
  book: [P("M12 6.5c-1.9-1.5-4.6-2-7.75-1.75v13.5c3.15-.25 5.85.25 7.75 1.75 1.9-1.5 4.6-2 7.75-1.75V4.75C16.6 4.5 13.9 5 12 6.5z"), P("M12 6.5v13")],
  flag: [P("M5.75 21V4"), P("M5.75 4.75h11.5l-2.25 4.5 2.25 4.5H5.75")],
  shield: [P("M12 3.5l7.25 2.75v5.5c0 4.4-3 7.6-7.25 9.25-4.25-1.65-7.25-4.85-7.25-9.25v-5.5z")],
  activity: [P("M3 12h3.75l2.5-6.5 5.5 13 2.5-6.5H21")],
  dumbbell: [P("M7 7v10M17 7v10M4 9.5v5M20 9.5v5M7 12h10")],
  target: [C(12, 12, 8.5), C(12, 12, 4.5), DOT(12, 12)],
  body: [C(12, 4.75, 2.1), P("M12 7.75v6.75M12 14.5l-2.75 6.25M12 14.5l2.75 6.25M6.5 9.75l5.5 1 5.5-1")],
  home: [P("M4 10.5L12 4l8 6.5"), P("M6.25 9v10.75h11.5V9"), P("M10 19.75v-5.5h4v5.5")],
  trash: [P("M4.5 6.75h15M9.5 6.75V4.5h5v2.25M6.5 6.75l.9 12.5a1 1 0 0 0 1 .93h7.2a1 1 0 0 0 1-.93l.9-12.5")],
  bone: [P(BONE, { transform: "rotate(-45 12 12)" })],
  ligament: [P("M6 3.5h12v2.25a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"), P("M6 20.5h12v-2.25a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3z"), P("M10 8.75l4 6.5M14 8.75l-4 6.5")],
  muscle: [P("M12 2.75v2.75M12 18.5v2.75"), P("M12 5.5c4.25 2 4.75 11 0 13-4.75-2-4.25-11 0-13z"), P("M10.4 9v6M13.6 9v6")],
  nerve: [C(7, 7, 2.6), P("M8.9 8.9c2.1 2.1 2.6 4.9 4.6 6.2s3.6 1.1 5.75 4.65"), P("M5.1 5.1L3.5 3.5M7 4.4V2.5M4.4 7H2.5"), P("M11.4 11.6l1.5-1.2M14.4 15.2l1.1-1.5")],
  tendon: [P("M12 2.75v4"), P("M12 6.75c3 1.25 3.5 6 0 7.25-3.5-1.25-3-6 0-7.25z"), P("M11 14.5c-.5 2 .5 3 1 4.5s-.25 1.75-.25 2.25")],
  cartilage: [P("M4.5 9.5a7.5 4.5 0 0 1 15 0"), P("M4.5 13a7.5 4.5 0 0 0 15 0"), P("M4.5 9.5v3.5M19.5 9.5v3.5")],
  joint: [P("M7.5 3.5v5a4.5 4.5 0 0 0 9 0v-5"), P("M6.5 20.5v-3.75a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3.75")]
};
const ICON_ALIASES = { chevron: "chevron-right", x: "close", "bookmark-fill": "bookmark-filled", alert: "warning", error: "danger", sliders: "filter" };

/** Inline SVG icon. Decorative (aria-hidden) unless `label` is given. */
export function icon(name, { size, label, className } = {}) {
  const key = ICONS[name] ? name : ICON_ALIASES[name];
  const parts = ICONS[key] || [];
  const s = document.createElementNS(SVG_NS, "svg");
  s.setAttribute("viewBox", "0 0 24 24");
  const dim = size == null ? "1.25em" : typeof size === "number" ? `${size}` : size;
  s.setAttribute("width", dim);
  s.setAttribute("height", dim);
  s.setAttribute("fill", "none");
  s.setAttribute("stroke", "currentColor");
  s.setAttribute("stroke-width", "1.75");
  s.setAttribute("stroke-linecap", "round");
  s.setAttribute("stroke-linejoin", "round");
  s.setAttribute("focusable", "false");
  s.setAttribute("class", `icon icon--${key || name}${className ? " " + className : ""}`);
  if (label) { s.setAttribute("role", "img"); s.setAttribute("aria-label", label); }
  else s.setAttribute("aria-hidden", "true");
  for (const [tag, attrs] of parts) {
    const el = document.createElementNS(SVG_NS, tag);
    for (const k of Object.keys(attrs)) {
      if (k === "f") { el.setAttribute("fill", "currentColor"); el.setAttribute("stroke", "none"); }
      else el.setAttribute(k, attrs[k]);
    }
    s.appendChild(el);
  }
  return s;
}
export const ICON_NAMES = Object.keys(ICONS);

/* ------------------------------------------------------------------ labels
   Region / body-area lists mirror scripts/lib/validate.mjs (REGIONS, BODY_AREAS). */
export const REGIONS = ["hip-groin", "thigh", "knee", "lower-leg", "ankle", "foot", "shoulder", "arm", "elbow", "wrist-hand", "cervical", "thoracic", "lumbar", "pelvis", "chest-abdomen", "head-face", "general"];
export const BODY_AREAS = {
  "lower-limb": ["hip-groin", "thigh", "knee", "lower-leg", "ankle", "foot"],
  "upper-limb": ["shoulder", "arm", "elbow", "wrist-hand"],
  "spine": ["cervical", "thoracic", "lumbar"],
  "trunk": ["pelvis", "chest-abdomen"],
  "head": ["head-face"],
  "general": ["general"]
};
export const bodyAreaOf = (region) => Object.keys(BODY_AREAS).find((k) => BODY_AREAS[k].includes(region)) || "general";

export const REGION_LABELS = {
  "hip-groin": "Hip & groin", thigh: "Thigh", knee: "Knee", "lower-leg": "Lower leg", ankle: "Ankle", foot: "Foot",
  shoulder: "Shoulder", arm: "Arm", elbow: "Elbow", "wrist-hand": "Wrist & hand",
  cervical: "Cervical spine", thoracic: "Thoracic spine", lumbar: "Lumbar spine",
  pelvis: "Pelvis", "chest-abdomen": "Chest & abdomen", "head-face": "Head & face", general: "General & systemic"
};
export const BODY_AREA_LABELS = {
  "lower-limb": "Lower limb", "upper-limb": "Upper limb", spine: "Spine", trunk: "Trunk & pelvis", head: "Head & face", general: "General"
};
export const TISSUE_LABELS = {
  ligament: "Ligament", tendon: "Tendon", muscle: "Muscle", bone: "Bone", cartilage: "Articular cartilage", meniscus: "Meniscus",
  labrum: "Labrum", "joint-capsule": "Joint capsule", nerve: "Nerve", bursa: "Bursa", disc: "Intervertebral disc", fascia: "Fascia",
  "fat-pad": "Fat pad", physis: "Growth plate (physis)", vascular: "Vascular", brain: "Brain", vestibular: "Vestibular system",
  multiple: "Multiple tissues"
};
export const EVIDENCE_LABELS = {
  strong: "Strong", moderate: "Moderate", limited: "Limited", "very-limited": "Very limited", conflicting: "Conflicting", "expert-opinion": "Expert opinion"
};
export const EVIDENCE_ORDER = ["strong", "moderate", "limited", "very-limited", "conflicting", "expert-opinion"];
export const RECOMMENDATION_LABELS = { recommended: "Recommended", consider: "Consider", "not-recommended": "Not recommended" };
export const URGENCY_LABELS = { routine: "Routine", urgent: "Urgent", emergency: "Emergency" };
export const URGENCY_DESCRIPTIONS = {
  routine: "Suitable for physiotherapy-led management",
  urgent: "Needs medical review within days",
  emergency: "Needs same-day emergency medical care"
};
/** Badge/callout modifier per urgency: `badge--${URGENCY_TONE[u]}` */
export const URGENCY_TONE = { routine: "ok", urgent: "warn", emergency: "danger" };
export const ONSET_LABELS = { acute: "Acute", gradual: "Gradual", "acute-or-gradual": "Acute or gradual" };
export const MECHANISM_LABELS = {
  contact: "Contact", "non-contact": "Non-contact", overuse: "Overuse", fall: "Fall", collision: "Collision",
  degenerative: "Degenerative", insidious: "Insidious onset", traction: "Traction", compression: "Compression"
};
export const REF_TYPE_LABELS = {
  "clinical-practice-guideline": "Clinical practice guideline", "consensus-statement": "Consensus statement",
  "systematic-review": "Systematic review", "meta-analysis": "Meta-analysis", rct: "Randomised controlled trial", cohort: "Cohort study",
  "case-control": "Case–control study", "cross-sectional": "Cross-sectional study", "diagnostic-accuracy": "Diagnostic accuracy study",
  biomechanical: "Biomechanical study", "basic-science": "Basic science", "narrative-review": "Narrative review", textbook: "Textbook", other: "Other"
};
