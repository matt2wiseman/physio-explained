/**
 * MICRO PHASE ENGINE — js/anim/micro/index.js            OWNER: A7 (stable API — A9 builds against it)
 * ======================================================================================================
 * Draws the microscopic / cellular view of an injury (docs/ANIMATION_DSL.md §1.4, §5) in an 800 × 450 space.
 *
 *   renderMicroFrame(g, phase, t, ctx)  → { viewBox: [0,0,800,450], stage, progress, ready, whenReady }
 *       g      SVG <g> to draw into (cleared on every call — pure & idempotent for any t, forwards or backwards)
 *       phase  { type:"micro", tissue, duration, stages:[{t, stage}], timeLabels?:[{t, text}], variant? }
 *       t      seconds from the start of the phase
 *       ctx    { reducedMotion, width, height, defs }  (defs is not required — gradients live in a local <defs>)
 *     Works out the active stage (+ progress 0–1 within it, prevStage), cross-fades from the previous stage over
 *     ~0.4 s (cut when ctx.reducedMotion), lazy-loads ./<tissue>.js (cached) and draws shared overlays:
 *     stage-name chip + stage dots (top-left), optional clock chip from timeLabels (top-right), scale hint (bottom-right).
 *     While a tissue module is still loading the frame shows an empty field and returns { ready:false, whenReady }
 *     — re-render when that promise resolves (or `await preloadMicro(tissue)` before the first frame).
 *   preloadMicro(tissue)               → Promise<module|null>
 *   renderMicroStage(g, tissue, stage, progress, opts?) → same as renderMicroFrame for a single stage (previews, healing primer)
 *   stageAt(phase, t)                  → { stage, index, progress, prevStage, since, dur }
 *   STAGE_LABELS / stageLabel(id)      human stage names;  stageKind(id) → "normal"|"injury"|"bleed"|"inflame"|"heal"
 *
 * TISSUE MODULE FORMAT (js/anim/micro/<tissue>.js)
 *   export default {
 *     id: "nerve",
 *     scale: "≈ 20 µm"  |  { default: "≈ 20 µm", ischaemia: "≈ 100 µm" }  |  (stage) => "≈ 20 µm",   // optional scale hint
 *     labels: { compression: "Compression" },                         // optional stage-name overrides for the chip
 *     render(g, { stage, progress, prevStage, t, ctx, phase, variant, rnd }) { … draw 800 × 450 … }
 *   };
 *   - Draw your own background first (use field(g, …)) — the engine adds only the overlays on top.
 *   - Keep labels out of the overlay zones: y < 56 (chips) and the bottom-right corner x > 640 & y > 412 (scale).
 *   - Motion must come only from `progress` (0→1 through the stage) and seeded randomness (rng / `rnd`).
 *     `rnd` is a fresh rng seeded with the tissue + stage id on each call. Never use Math.random or Date.
 *   - `prevStage` is the stage shown before this one in the phase (null for the first) — the engine already
 *     cross-fades, so you only need it if you want extra continuity. `variant` = phase.variant (optional string).
 *
 * HELPERS (all exported; pure; colours always resolved from css/tokens.css — never literal colours)
 *   el(tag, attrs, parent)        create an SVG element; attrs.text sets textContent; undefined/null/false attrs skipped
 *   rng(seed)                     deterministic PRNG → () => [0,1). seed: number or string. r.range(a,b), r.int(a,b), r.pick(arr), r.sign()
 *   lerp(a,b,t)  clamp(v,lo=0,hi=1)  ease(t,"linear"|"in"|"out"|"inOut")  seg(p,a,b) linear ramp 0–1 of p over [a,b]
 *   fade(from,to,p)               smooth (eased) ramp: 0 at p=from → 1 at p=to (from > to → falling ramp)
 *   wave(p, cycles, phase=0)      0–1 sine for in-stage oscillation: 0.5 - 0.5·cos(2π(p·cycles + phase))
 *   col(token, alpha=1)           resolved token colour, e.g. col("anat-bone", .5) → "rgba(232,223,202,0.5)"
 *   mix(tokA, tokB, t=.5, alpha=1)  blend two tokens (t = share of B) — for shading, edges, tints
 *   NUC, CYTO                     default nucleus / cytoplasm colours (H&E-like, readable on the dark stage)
 *   f(n)                          round to 0.1 for compact path strings
 *   smoothPath(points, closed)    Catmull-Rom → cubic Bézier "d" through [[x,y],…]
 *   blobPath(r, cx, cy, rad, {n, irregular, phase})  irregular closed blob (clots, haematoma, cells) — r = rng
 *   scatter(r, n, box, {minDist, avoid})  deterministic spaced points in box {x,y,w,h}; avoid(x,y) → true to reject
 *   field(g, {tint, tintAmount, vignette})  full-bleed microscope-field background (stage-bg + tissue tint + vignette)
 *   def(g, key, build)            local <defs> entry (gradient/pattern) → "url(#…)"; build(defsEl, id) creates it once per frame
 *   radial(g, key, stops)         shortcut: radial gradient; stops = [[offset 0–1, colour], …] → "url(#…)"
 *   drawCell(g, kind, x, y, r, opts)  shared cell vocabulary (see CELL_KINDS); returns the cell's <g>
 *       kinds: platelet, rbc, neutrophil, macrophage, fibroblast, myofibroblast, tenocyte, osteoclast, osteoblast,
 *              osteocyte, chondrocyte, satellite, myoblast, schwann, mast, lymphocyte, msc, adipocyte, endothelial
 *       opts: { angle (deg), opacity, seed, phase 0–1 (shape wobble), dead 0–1 (apoptosis → empty lacuna/ghost),
 *               activated 0–1 (platelet spikes, satellite rounding, mast degranulation), aspect (y-squash),
 *               engulf 0–1 (macrophage phagosomes), demyelinated 0–1 (schwann), fill/nucleus (colour overrides) }
 *   collagenFibre(g, path, {crimp 0–1, aligned true|0–1, type "I"|"III", width, wavelength, amplitude, phase,
 *                 seed, color, edge, opacity, frayStart 0–1, frayEnd 0–1, highlight})
 *       path = [[x,y], …] centreline (≥2 pts) or {from:[x,y], to:[x,y]}. Type I = thick bundled, bright;
 *       type III = thin, finer, wavier, healing tint. crimp 1 = resting wave, 0 = straight (loaded).
 *   capillary(g, path, {width, sprouting 0–1, sprouts, flow 0–1, rbcs, torn: {at 0–1, gap}, opacity, seed, leaky 0–1})
 *   label(g, x, y, text, {to:[x,y], anchor:"start"|"middle"|"end", size:14, color, opacity, weight, dot})
 *       sentence-case callout with dark halo; optional leader line to `to`; "\n" splits lines
 *   arrow(g, x1, y1, x2, y2, {color, width, head, opacity, label, labelPos})  thick force/load arrow (--fx-force)
 *   dashedArrow(g, x1,y1,x2,y2, opts)  thin dashed process arrow (migration, flow)
 */

export const MICRO_W = 800, MICRO_H = 450;
export const NS = "http://www.w3.org/2000/svg";
export const FONT = "'Public Sans', 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif";
const CROSSFADE = 0.4; // seconds

/* ------------------------------------------------------------------ stage names */
export const STAGE_LABELS = {
  healthy: "Healthy tissue", loaded: "Physiological load", overload: "Overload", failure: "Failure",
  haemorrhage: "Haemorrhage", inflammation: "Inflammation", proliferation: "Proliferation", remodelling: "Remodelling",
  reactive: "Reactive tendinopathy", disrepair: "Tendon disrepair", degenerative: "Degenerative tendinopathy",
  "load-adaptation": "Load adaptation", contracting: "Contraction", "eccentric-overstretch": "Eccentric overstretch",
  "sarcomere-disruption": "Sarcomere disruption", haematoma: "Haematoma", "satellite-activation": "Satellite cell activation",
  regeneration: "Regeneration", scar: "Scar formation", fracture: "Fracture", "soft-callus": "Soft callus",
  "hard-callus": "Hard callus", loading: "Repetitive loading", microdamage: "Microdamage",
  "resorption-exceeds-formation": "Resorption exceeds formation", "stress-reaction": "Stress reaction",
  "stress-fracture": "Stress fracture", healing: "Healing", impact: "Impact", "chondrocyte-death": "Chondrocyte death",
  "matrix-loss": "Matrix loss", "fibrocartilage-fill": "Fibrocartilage fill", degeneration: "Degeneration",
  tear: "Tear", "red-zone-healing": "Red zone: healing", "white-zone-no-healing": "White zone: no healing",
  microtears: "Microtears", thickening: "Thickening", compression: "Compression", ischaemia: "Ischaemia",
  demyelination: "Demyelination", "axonal-injury": "Axonal injury", "wallerian-degeneration": "Wallerian degeneration",
  "annular-fissure": "Annular fissure", "nucleus-migration": "Nucleus migration", herniation: "Herniation",
  resorption: "Resorption", friction: "Friction", effusion: "Effusion", resolution: "Resolution", fibrosis: "Fibrosis",
  contracture: "Contracture", "axonal-stretch": "Axonal stretch", "ionic-flux": "Ionic flux", "energy-crisis": "Energy crisis",
  recovery: "Recovery", traction: "Traction", separation: "Separation", swelling: "Swelling", "pressure-rise": "Pressure rise",
  "venous-occlusion": "Venous occlusion", necrosis: "Necrosis", decompression: "Decompression",
  dislodged: "Otoconia dislodged", "canal-migration": "Canal migration", "head-movement": "Head movement",
  "endolymph-drag": "Endolymph drag", repositioned: "Repositioned"
};
const KIND = {
  injury: ["overload", "failure", "fracture", "tear", "impact", "microdamage", "eccentric-overstretch", "sarcomere-disruption",
    "microtears", "chondrocyte-death", "matrix-loss", "degeneration", "degenerative", "disrepair", "stress-fracture",
    "stress-reaction", "resorption-exceeds-formation", "white-zone-no-healing", "compression", "ischaemia", "demyelination",
    "axonal-injury", "wallerian-degeneration", "annular-fissure", "nucleus-migration", "herniation", "friction",
    "axonal-stretch", "ionic-flux", "energy-crisis", "traction", "separation", "pressure-rise", "venous-occlusion",
    "necrosis", "dislodged", "canal-migration", "endolymph-drag", "contracture"],
  bleed: ["haemorrhage", "haematoma"],
  inflame: ["inflammation", "reactive", "effusion", "swelling", "fibrosis"],
  heal: ["proliferation", "remodelling", "load-adaptation", "satellite-activation", "regeneration", "scar", "soft-callus",
    "hard-callus", "healing", "fibrocartilage-fill", "red-zone-healing", "thickening", "resorption", "resolution", "recovery",
    "decompression", "repositioned"]
};
export function stageLabel(id, mod) {
  if (mod?.labels?.[id]) return mod.labels[id];
  if (STAGE_LABELS[id]) return STAGE_LABELS[id];
  const s = String(id || "").replace(/-/g, " ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}
export function stageKind(id) {
  for (const k in KIND) if (KIND[k].includes(id)) return k;
  return "normal";
}
const KIND_TOKEN = { normal: "stage-accent", injury: "fx-injury", bleed: "fx-injury", inflame: "fx-inflame", heal: "fx-heal" };

/* ------------------------------------------------------------------ maths & randomness */
export const clamp = (v, lo = 0, hi = 1) => (v < lo ? lo : v > hi ? hi : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export function ease(t, kind = "inOut") {
  t = clamp(t);
  if (kind === "linear") return t;
  if (kind === "in") return t * t * t;
  if (kind === "out") return 1 - Math.pow(1 - t, 3);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
export const seg = (p, a, b) => (b === a ? (p >= b ? 1 : 0) : clamp((p - a) / (b - a)));
export function fade(from, to, p) {
  if (from > to) return 1 - fade(to, from, p);
  const x = seg(p, from, to);
  return x * x * (3 - 2 * x);
}
export const wave = (p, cycles = 1, phase = 0) => 0.5 - 0.5 * Math.cos(2 * Math.PI * (p * cycles + phase));
export const f = (n) => Math.round(n * 10) / 10;

function hashSeed(s) {
  if (typeof s === "number") return (s * 2654435761) >>> 0;
  let h = 2166136261 >>> 0;
  for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
export function rng(seed = 1) {
  let a = hashSeed(seed) || 1;
  const r = () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  r.range = (lo, hi) => lo + (hi - lo) * r();
  r.int = (lo, hi) => Math.floor(lo + (hi - lo + 1) * r());
  r.pick = (arr) => arr[Math.floor(r() * arr.length)];
  r.sign = () => (r() < 0.5 ? -1 : 1);
  return r;
}

/* ------------------------------------------------------------------ colours (from tokens) */
const _tok = new Map();
function rawToken(name) {
  const n = name.startsWith("--") ? name : "--" + name;
  if (_tok.has(n)) return _tok.get(n);
  let v = "";
  try { v = getComputedStyle(document.documentElement).getPropertyValue(n).trim(); } catch { /* no DOM */ }
  const parsed = v ? parseColour(v) : null;
  if (parsed) _tok.set(n, parsed);
  return parsed || { fallback: `var(${n})` };
}
function parseColour(v) {
  if (v[0] === "#") {
    let h = v.slice(1);
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    const n = parseInt(h.slice(0, 6), 16);
    if (Number.isNaN(n)) return null;
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255, h.length === 8 ? parseInt(h.slice(6), 16) / 255 : 1];
  }
  const m = v.match(/rgba?\(([^)]+)\)/);
  if (m) {
    const p = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
    return [p[0], p[1], p[2], p.length > 3 ? p[3] : 1];
  }
  return null;
}
const rgba = (c, a) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${Math.round(clamp(a) * 1000) / 1000})`;
/** Resolved token colour. Accepts "anat-bone" or "--anat-bone". */
export function col(token, alpha = 1) {
  const c = rawToken(token);
  if (c.fallback) return alpha >= 1 ? c.fallback : `color-mix(in srgb, ${c.fallback} ${Math.round(alpha * 100)}%, transparent)`;
  return rgba(c, c[3] * alpha);
}
/** Blend token A → token B (t = share of B). */
export function mix(a, b, t = 0.5, alpha = 1) {
  const A = rawToken(a), B = rawToken(b);
  if (A.fallback || B.fallback) {
    const m = `color-mix(in srgb, ${A.fallback || col(a)} ${Math.round((1 - t) * 100)}%, ${B.fallback || col(b)})`;
    return alpha >= 1 ? m : `color-mix(in srgb, ${m} ${Math.round(alpha * 100)}%, transparent)`;
  }
  return rgba([lerp(A[0], B[0], t), lerp(A[1], B[1], t), lerp(A[2], B[2], t)], lerp(A[3], B[3], t) * alpha);
}
/** H&E-like default cell colours that read on the dark stage. Functions so tokens resolve lazily. */
export const NUC = (a = 1) => mix("anat-vein", "anat-brain-deep", 0.35, a);
export const CYTO = (a = 1) => mix("anat-brain", "stage-ink", 0.45, a);

/* ------------------------------------------------------------------ DOM & geometry */
export function el(tag, attrs = {}, parent) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) {
    const v = attrs[k];
    if (v === undefined || v === null || v === false) continue;
    if (k === "text") e.textContent = v;
    else e.setAttribute(k, typeof v === "number" ? String(f(v)) : v);
  }
  if (parent) parent.appendChild(e);
  return e;
}
export function smoothPath(pts, closed = false) {
  if (!pts || pts.length < 2) return "";
  if (pts.length === 2) return `M${f(pts[0][0])},${f(pts[0][1])}L${f(pts[1][0])},${f(pts[1][1])}`;
  const n = pts.length, P = (i) => (closed ? pts[(i + n) % n] : pts[clamp(i, 0, n - 1)]);
  let d = `M${f(pts[0][0])},${f(pts[0][1])}`;
  const last = closed ? n : n - 1;
  for (let i = 0; i < last; i++) {
    const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${f(c1[0])},${f(c1[1])} ${f(c2[0])},${f(c2[1])} ${f(p2[0])},${f(p2[1])}`;
  }
  return closed ? d + "Z" : d;
}
export function blobPath(r, cx, cy, rad, { n = 9, irregular = 0.25, phase = 0, ry } = {}) {
  const pts = [], ryy = ry ?? rad;
  const off = []; for (let i = 0; i < n; i++) off.push(r());
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const k = 1 + irregular * (off[i] * 2 - 1) + irregular * 0.35 * Math.sin(a * 3 + phase * Math.PI * 2 + off[i] * 6);
    pts.push([cx + Math.cos(a) * rad * k, cy + Math.sin(a) * ryy * k]);
  }
  return smoothPath(pts, true);
}
export function scatter(r, n, box, { minDist = 0, avoid, tries = 30 } = {}) {
  const out = [];
  for (let i = 0; i < n; i++) {
    let best = null;
    for (let k = 0; k < tries; k++) {
      const p = [box.x + r() * box.w, box.y + r() * box.h];
      if (avoid && avoid(p[0], p[1])) continue;
      if (minDist && out.some((q) => Math.hypot(q[0] - p[0], q[1] - p[1]) < minDist)) { best = best || null; continue; }
      best = p; break;
    }
    if (best) out.push(best);
  }
  return out;
}
/** Points along a polyline: returns { at(u) → [x,y], tan(u) → [dx,dy] unit, len }. */
export function polyline(pts) {
  const L = [0];
  for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const len = L[L.length - 1] || 1;
  const find = (u) => {
    const s = clamp(u) * len;
    let i = 1; while (i < pts.length - 1 && L[i] < s) i++;
    const k = (s - L[i - 1]) / (L[i] - L[i - 1] || 1);
    return [i, k];
  };
  return {
    len,
    at(u) { const [i, k] = find(u); return [lerp(pts[i - 1][0], pts[i][0], k), lerp(pts[i - 1][1], pts[i][1], k)]; },
    tan(u) { const [i] = find(u); const dx = pts[i][0] - pts[i - 1][0], dy = pts[i][1] - pts[i - 1][1], l = Math.hypot(dx, dy) || 1; return [dx / l, dy / l]; }
  };
}
const toPts = (path) => (Array.isArray(path) ? path : [path.from, path.to]);

/* ------------------------------------------------------------------ defs (local per frame) */
let _uid = 0;
function rootOf(g) {
  let n = g;
  while (n && n.getAttribute && !n.hasAttribute("data-micro-root")) n = n.parentNode;
  return n && n.getAttribute ? n : null;
}
export function def(g, key, build) {
  let root = rootOf(g);
  if (!root) { root = g; root.setAttribute("data-micro-root", ""); }
  if (!root.dataset.microUid) root.dataset.microUid = String(++_uid);
  let defs = root.querySelector(":scope > defs");
  if (!defs) { defs = el("defs", {}); root.insertBefore(defs, root.firstChild); }
  const id = `micro-${root.dataset.microUid}-${key}`;
  if (!defs.querySelector(`[id="${id}"]`)) build(defs, id);
  return `url(#${id})`;
}
export function radial(g, key, stops, { cx = "50%", cy = "50%", r = "50%" } = {}) {
  return def(g, key, (defs, id) => {
    const gr = el("radialGradient", { id, cx, cy, r }, defs);
    for (const [o, c] of stops) el("stop", { offset: o, "stop-color": c }, gr);
  });
}
export function linear(g, key, stops, { x1 = 0, y1 = 0, x2 = 0, y2 = 1 } = {}) {
  return def(g, key, (defs, id) => {
    const gr = el("linearGradient", { id, x1, y1, x2, y2 }, defs);
    for (const [o, c] of stops) el("stop", { offset: o, "stop-color": c }, gr);
  });
}

/* ------------------------------------------------------------------ drawing primitives */
/** Full-bleed microscope field: stage background + faint tissue tint + vignette. */
export function field(g, { tint = "anat-ligament", tintAmount = 0.07, vignette = 0.55 } = {}) {
  el("rect", { x: 0, y: 0, width: MICRO_W, height: MICRO_H, fill: mix("stage-bg", tint, tintAmount) }, g);
  const v = radial(g, `vig-${Math.round(vignette * 100)}`, [[0, col("stage-bg", 0)], [0.62, col("stage-bg", 0)], [1, col("stage-bg", vignette)]], { r: "72%" });
  return el("rect", { x: 0, y: 0, width: MICRO_W, height: MICRO_H, fill: v, "pointer-events": "none" }, g);
}

export function label(g, x, y, text, { to, anchor = "start", size = 14, color, opacity = 1, weight = 500, dot = true, halo = true } = {}) {
  if (opacity <= 0.01) return null;
  const gg = el("g", { opacity: opacity < 1 ? opacity : undefined, "font-family": FONT, "font-size": size }, g);
  const lines = String(text).split("\n");
  if (to) {
    const lh = size * 1.2, h = lines.length * lh;
    const ly = clamp(to[1], y - size, y - size + h);
    const lx = anchor === "end" ? x + 5 : anchor === "middle" ? x : x - 5;
    const sy = anchor === "middle" ? (to[1] > y ? y + h - size + 4 : y - size - 2) : ly;
    el("path", { d: `M${f(lx)},${f(anchor === "middle" ? sy : ly - size * 0.35)} L${f(to[0])},${f(to[1])}`, stroke: col("stage-ink", 0.75), "stroke-width": 1.2, fill: "none" }, gg);
    if (dot) el("circle", { cx: to[0], cy: to[1], r: 2.6, fill: col("stage-ink"), stroke: col("stage-bg", 0.8), "stroke-width": 1 }, gg);
  }
  const t = el("text", { x, y, "text-anchor": anchor, fill: color || col("stage-ink"), "font-weight": weight,
    stroke: halo ? col("stage-bg", 0.85) : undefined, "stroke-width": halo ? 3.6 : undefined, "stroke-linejoin": "round", "paint-order": "stroke" }, gg);
  lines.forEach((ln, i) => el("tspan", { x, dy: i ? size * 1.2 : 0, text: ln }, t));
  return gg;
}

export function arrow(g, x1, y1, x2, y2, { color, width = 5, head = 14, opacity = 1, label: lab, labelPos = "start", labelSize = 13 } = {}) {
  if (opacity <= 0.01) return null;
  const c = color || col("fx-force");
  const gg = el("g", { opacity: opacity < 1 ? opacity : undefined }, g);
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1, ux = dx / L, uy = dy / L;
  const bx = x2 - ux * head, by = y2 - uy * head;
  el("path", { d: `M${f(x1)},${f(y1)} L${f(bx)},${f(by)}`, stroke: c, "stroke-width": width, "stroke-linecap": "round" }, gg);
  const w = head * 0.62;
  el("path", { d: `M${f(x2)},${f(y2)} L${f(bx - uy * w)},${f(by + ux * w)} L${f(bx + uy * w)},${f(by - ux * w)} Z`, fill: c }, gg);
  if (lab) {
    const [lx, ly] = labelPos === "end" ? [x2, y2] : labelPos === "mid" ? [(x1 + x2) / 2, (y1 + y2) / 2] : [x1, y1];
    const horiz = Math.abs(ux) > Math.abs(uy);
    label(gg, lx + (horiz ? 0 : 12), ly + (horiz ? -12 : 4), lab, { anchor: horiz ? "middle" : "start", size: labelSize, color: c });
  }
  return gg;
}
export function dashedArrow(g, x1, y1, x2, y2, { color, width = 1.6, head = 7, opacity = 1, bend = 0 } = {}) {
  if (opacity <= 0.01) return null;
  const c = color || col("stage-ink", 0.7);
  const gg = el("g", { opacity: opacity < 1 ? opacity : undefined }, g);
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1;
  const qx = mx - (dy / L) * bend, qy = my + (dx / L) * bend;
  el("path", { d: `M${f(x1)},${f(y1)} Q${f(qx)},${f(qy)} ${f(x2)},${f(y2)}`, stroke: c, "stroke-width": width, fill: "none", "stroke-dasharray": "5 4" }, gg);
  const tx = x2 - qx, ty = y2 - qy, tl = Math.hypot(tx, ty) || 1, ux = tx / tl, uy = ty / tl;
  el("path", { d: `M${f(x2)},${f(y2)} L${f(x2 - ux * head - uy * head * 0.55)},${f(y2 - uy * head + ux * head * 0.55)} L${f(x2 - ux * head + uy * head * 0.55)},${f(y2 - uy * head - ux * head * 0.55)}Z`, fill: c }, gg);
  return gg;
}

/** Collagen fibre (bundle) along a centreline. */
export function collagenFibre(g, path, o = {}) {
  const pts = toPts(path);
  const type = o.type === "III" ? "III" : "I";
  const crimp = o.crimp ?? (type === "III" ? 0.8 : 0.6);
  const aligned = o.aligned === undefined ? 1 : o.aligned === true ? 1 : o.aligned === false ? 0 : o.aligned;
  const width = o.width ?? (type === "I" ? 6 : 2);
  const wl = o.wavelength ?? (type === "I" ? 30 : 18);
  const amp = (o.amplitude ?? (type === "I" ? 4.5 : 3.2)) * crimp;
  const r = rng(o.seed ?? 7);
  const ph = (o.phase ?? r()) * Math.PI * 2;
  const pl = polyline(pts);
  const steps = Math.max(8, Math.ceil(pl.len / 4));
  const wob = [r(), r(), r(), r()];
  const disorder = 1 - aligned;
  const line = [];
  for (let i = 0; i <= steps; i++) {
    const u = i / steps, s = u * pl.len;
    const [x, y] = pl.at(u), [tx, ty] = pl.tan(u);
    let off = amp * Math.sin((2 * Math.PI * s) / wl + ph);
    if (type === "III") off += amp * 0.5 * Math.sin((2 * Math.PI * s) / (wl * 0.53) + ph * 1.7);
    off += disorder * 14 * (Math.sin(s / 37 + wob[0] * 6) * 0.6 + Math.sin(s / 17 + wob[1] * 6) * 0.4);
    line.push([x - ty * off, y + tx * off]);
  }
  const fs = o.frayStart || 0, fe = o.frayEnd || 0;
  const cut = (k) => Math.round(clamp(k) * steps * 0.28);
  const i0 = cut(fs), i1 = steps - cut(fe);
  const core = line.slice(i0, i1 + 1);
  const base = o.color || (type === "I" ? col("anat-ligament") : mix("fx-heal", "anat-ligament", 0.35));
  const edge = o.edge || (type === "I" ? mix("anat-ligament-edge", "stage-bg", 0.35) : mix("fx-heal", "stage-bg", 0.55));
  const gg = el("g", { opacity: o.opacity !== undefined && o.opacity < 1 ? o.opacity : undefined, fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" }, g);
  const d = core.length > 1 ? smoothPath(core.filter((_, i) => i % 2 === 0 || i === core.length - 1)) : "";
  if (d) {
    if (type === "I") {
      el("path", { d, stroke: edge, "stroke-width": width + 2 }, gg);
      el("path", { d, stroke: base, "stroke-width": width }, gg);
      if (o.highlight !== false && width >= 4) el("path", { d, stroke: mix("stage-ink", "anat-ligament", 0.2, 0.55), "stroke-width": Math.max(0.8, width * 0.18), transform: `translate(0,${f(-width * 0.22)})` }, gg);
    } else {
      el("path", { d, stroke: base, "stroke-width": width }, gg);
    }
  }
  // frayed ends: fibrils splay & curl
  const fray = (from, to, dir, k) => {
    if (k <= 0 || Math.abs(to - from) < 2) return;
    const n = type === "I" ? 4 : 2;
    for (let j = 0; j < n; j++) {
      const spread = ((j / (n - 1)) * 2 - 1) * width * (1.1 + k * 1.4);
      const seq = [];
      const cnt = Math.abs(to - from);
      for (let s = 0; s <= cnt; s += 2) {
        const idx = from + dir * s, q = s / cnt;
        const [x, y] = line[idx];
        const [tx, ty] = pl.tan(idx / steps);
        const curl = Math.sin(q * Math.PI * (1.3 + j * 0.4) + j) * k * 5 * q;
        seq.push([x - ty * (spread * q + curl), y + tx * (spread * q + curl)]);
      }
      if (seq.length > 1) el("path", { d: smoothPath(seq), stroke: base, "stroke-width": Math.max(0.9, width / n), opacity: 0.9 }, gg);
    }
  };
  fray(i0, 0, -1, fs);
  fray(i1, steps, 1, fe);
  return gg;
}

/** Blood capillary (tube + lumen + endothelial nuclei + RBCs), with optional sprouts and tear. */
export function capillary(g, path, o = {}) {
  const pts = toPts(path);
  const w = o.width ?? 11;
  const r = rng(o.seed ?? 11);
  const gg = el("g", { opacity: o.opacity !== undefined && o.opacity < 1 ? o.opacity : undefined, fill: "none", "stroke-linecap": "round" }, g);
  const wall = mix("anat-artery", "stage-bg", 0.25), lumen = mix("fx-bleed", "stage-bg", 0.35);
  const pl = polyline(pts);
  const segs = [];
  if (o.torn) {
    const a = clamp(o.torn.at ?? 0.5), gap = (o.torn.gap ?? 24) / pl.len;
    segs.push([0, a - gap / 2], [a + gap / 2, 1]);
  } else segs.push([0, 1]);
  const sub = (u0, u1) => { const out = []; const n = Math.max(2, Math.ceil(((u1 - u0) * pl.len) / 10)); for (let i = 0; i <= n; i++) out.push(pl.at(lerp(u0, u1, i / n))); return out; };
  // sprouts (angiogenesis): buds grow perpendicular-ish from the vessel
  const sp = o.sprouting || 0;
  if (sp > 0) {
    const ns = o.sprouts ?? 3;
    for (let i = 0; i < ns; i++) {
      const u = (i + 0.5 + (r() - 0.5) * 0.5) / ns;
      const [x, y] = pl.at(u), [tx, ty] = pl.tan(u);
      const side = o.sproutSide ?? (i % 2 ? 1 : -1);
      const len = (o.sproutLength ?? 70) * sp * (0.7 + r() * 0.5);
      const ang = (r() - 0.5) * 0.9;
      const nx = -ty * side, ny = tx * side;
      const dx = nx * Math.cos(ang) - ny * Math.sin(ang), dy = nx * Math.sin(ang) + ny * Math.cos(ang);
      const bend = (r() - 0.5) * 30;
      const p2 = [x + dx * len * 0.5 + tx * bend * 0.5, y + dy * len * 0.5 + ty * bend * 0.5], p3 = [x + dx * len + tx * bend, y + dy * len + ty * bend];
      const d = smoothPath([[x, y], p2, p3]);
      el("path", { d, stroke: wall, "stroke-width": w * 0.62 }, gg);
      el("path", { d, stroke: lumen, "stroke-width": w * 0.28 }, gg);
      el("ellipse", { cx: p3[0], cy: p3[1], rx: w * 0.42, ry: w * 0.3, fill: mix("anat-artery", "stage-ink", 0.35), transform: `rotate(${f((Math.atan2(dy, dx) * 180) / Math.PI)} ${f(p3[0])} ${f(p3[1])})` }, gg);
    }
  }
  for (const [u0, u1] of segs) {
    if (u1 - u0 <= 0.001) continue;
    const s = sub(u0, u1), d = smoothPath(s);
    el("path", { d, stroke: wall, "stroke-width": w }, gg);
    el("path", { d, stroke: lumen, "stroke-width": w * 0.55 }, gg);
    // endothelial nuclei along the wall
    const nn = Math.max(1, Math.round(((u1 - u0) * pl.len) / 55));
    for (let i = 0; i < nn; i++) {
      const u = lerp(u0, u1, (i + 0.5) / nn), [x, y] = pl.at(u), [tx, ty] = pl.tan(u), side = i % 2 ? 1 : -1;
      el("ellipse", { cx: x - ty * side * w * 0.42, cy: y + tx * side * w * 0.42, rx: w * 0.45, ry: w * 0.16, fill: NUC(0.9), transform: `rotate(${f((Math.atan2(ty, tx) * 180) / Math.PI)} ${f(x - ty * side * w * 0.42)} ${f(y + tx * side * w * 0.42)})` }, gg);
    }
  }
  // RBCs flowing in the lumen
  const nr = o.rbcs ?? Math.round(pl.len / 40);
  const flow = o.flow ?? 0;
  for (let i = 0; i < nr; i++) {
    const u = ((i + r() * 0.6) / nr + flow) % 1;
    if (!segs.some(([a, b]) => u > a + 0.01 && u < b - 0.01)) continue;
    const [x, y] = pl.at(u), [tx, ty] = pl.tan(u);
    el("ellipse", { cx: x, cy: y, rx: w * 0.28, ry: w * 0.2, fill: col("anat-artery"), transform: `rotate(${f((Math.atan2(ty, tx) * 180) / Math.PI)} ${f(x)} ${f(y)})` }, gg);
  }
  // torn ends leak
  if (o.torn && (o.leaky ?? 1) > 0) {
    for (const u of [segs[0][1], segs[1][0]]) {
      const [x, y] = pl.at(u);
      el("circle", { cx: x, cy: y, r: w * 0.55 * (o.leaky ?? 1), fill: col("fx-bleed", 0.7) }, gg);
    }
  }
  return gg;
}

/* ------------------------------------------------------------------ cell vocabulary */
export const CELL_KINDS = ["platelet", "rbc", "neutrophil", "macrophage", "fibroblast", "myofibroblast", "tenocyte", "osteoclast",
  "osteoblast", "osteocyte", "chondrocyte", "satellite", "myoblast", "schwann", "mast", "lymphocyte", "msc", "adipocyte", "endothelial"];

export function drawCell(g, kind, x, y, r = 10, o = {}) {
  const dead = clamp(o.dead || 0), act = clamp(o.activated || 0);
  const op = (o.opacity ?? 1) * (kind === "chondrocyte" || kind === "osteocyte" ? 1 : 1 - dead * 0.35);
  if (op <= 0.01) return null;
  const rot = o.angle ? ` rotate(${f(o.angle)})` : "", sq = o.aspect && o.aspect !== 1 ? ` scale(1,${f(o.aspect)})` : "";
  const c = el("g", { transform: `translate(${f(x)},${f(y)})${rot}${sq}`, opacity: op < 1 ? op : undefined }, g);
  const R = rng(o.seed ?? ((x * 73 + y * 151) | 0));
  const ph = o.phase || 0;
  const nucC = o.nucleus || NUC(1 - dead * 0.2);
  const shrink = 1 - dead * 0.35;
  const deadNuc = (cx, cy, rr) => { // pyknosis → karyorrhexis
    if (dead < 0.6) el("circle", { cx, cy, r: rr * (1 - dead * 0.5), fill: mix("anat-vein", "stage-bg", 0.45) }, c);
    else for (let i = 0; i < 3; i++) el("circle", { cx: cx + (R() - 0.5) * rr * 2, cy: cy + (R() - 0.5) * rr * 2, r: rr * 0.32, fill: mix("anat-vein", "stage-bg", 0.4) }, c);
  };
  switch (kind) {
    case "platelet": {
      const fill = o.fill || mix("anat-brain", "anat-vein", 0.3);
      if (act > 0.05) {
        const pts = []; const n = 7;
        for (let i = 0; i < n * 2; i++) { const a = (i / (n * 2)) * Math.PI * 2 + R() * 0.3; const k = i % 2 ? 1 + act * 0.9 : 0.75; pts.push([Math.cos(a) * r * k, Math.sin(a) * r * k * 0.85]); }
        el("path", { d: smoothPath(pts, true), fill, stroke: mix("anat-vein", "stage-bg", 0.3), "stroke-width": 0.6 }, c);
      } else el("ellipse", { cx: 0, cy: 0, rx: r, ry: r * 0.62, fill, stroke: mix("anat-vein", "stage-bg", 0.3), "stroke-width": 0.6 }, c);
      el("circle", { cx: -r * 0.3, cy: 0, r: r * 0.22, fill: mix("anat-vein", "anat-brain-deep", 0.5) }, c);
      el("circle", { cx: r * 0.3, cy: r * 0.1, r: r * 0.18, fill: mix("anat-vein", "anat-brain-deep", 0.5) }, c);
      break;
    }
    case "rbc": {
      if (o.edge) { el("rect", { x: -r, y: -r * 0.38, width: r * 2, height: r * 0.76, rx: r * 0.38, fill: col("anat-artery"), stroke: mix("anat-artery", "fx-bleed", 0.6), "stroke-width": 0.8 }, c); break; }
      el("circle", { cx: 0, cy: 0, r: r * shrink, fill: col("anat-artery"), stroke: mix("anat-artery", "fx-bleed", 0.6), "stroke-width": 0.9 }, c);
      el("circle", { cx: 0, cy: 0, r: r * 0.45 * shrink, fill: mix("anat-artery", "anat-brain", 0.45) }, c);
      break;
    }
    case "neutrophil": {
      const rr = r * shrink;
      el("path", { d: blobPath(R, 0, 0, rr, { n: 8, irregular: 0.08, phase: ph }), fill: o.fill || mix("stage-ink", "anat-brain", 0.35, 0.92), stroke: mix("anat-brain-deep", "stage-bg", 0.2), "stroke-width": 0.9 }, c);
      for (let i = 0; i < 9; i++) el("circle", { cx: (R() - 0.5) * rr * 1.4, cy: (R() - 0.5) * rr * 1.4, r: 0.8, fill: mix("anat-brain-deep", "stage-bg", 0.1, 0.55) }, c);
      if (dead > 0.05) { deadNuc(0, 0, rr * 0.35); break; }
      const lobes = [[-0.42, -0.12], [-0.08, -0.38], [0.32, -0.15], [0.18, 0.32]];
      const lp = lobes.map(([a, b]) => [a * rr, b * rr]);
      el("path", { d: smoothPath(lp), stroke: nucC, "stroke-width": rr * 0.16, fill: "none" }, c);
      lp.forEach(([a, b], i) => el("ellipse", { cx: a, cy: b, rx: rr * 0.26, ry: rr * 0.2, fill: nucC, transform: `rotate(${i * 40} ${f(a)} ${f(b)})` }, c));
      break;
    }
    case "macrophage": {
      const rr = r * shrink;
      el("path", { d: blobPath(R, 0, 0, rr, { n: 11, irregular: 0.3, phase: ph }), fill: o.fill || mix("fx-inflame", "anat-brain", 0.6, 0.88), stroke: mix("fx-inflame", "stage-bg", 0.45), "stroke-width": 1 }, c);
      const eg = o.engulf ?? 0.6;
      const nv = Math.round(1 + eg * 3);
      for (let i = 0; i < nv; i++) {
        const a = R() * Math.PI * 2, d = rr * (0.3 + R() * 0.3);
        el("circle", { cx: Math.cos(a) * d, cy: Math.sin(a) * d, r: rr * (0.12 + R() * 0.08), fill: mix("stage-bg", "anat-brain", 0.3, 0.7) }, c);
        el("circle", { cx: Math.cos(a) * d, cy: Math.sin(a) * d, r: rr * 0.06, fill: mix("fx-bleed", "anat-brain-deep", 0.4) }, c);
      }
      if (dead > 0.05) deadNuc(rr * 0.15, rr * 0.1, rr * 0.3);
      else el("path", { d: `M${f(-rr * 0.05)},${f(-rr * 0.32)} q${f(rr * 0.5)},${f(-rr * 0.05)} ${f(rr * 0.42)},${f(rr * 0.35)} q${f(-0.05 * rr)},${f(rr * 0.32)} ${f(-rr * 0.4)},${f(rr * 0.22)} q${f(rr * 0.15)},${f(-rr * 0.25)} ${f(-rr * 0.02)},${f(-rr * 0.57)}Z`, fill: nucC }, c);
      break;
    }
    case "fibroblast": case "myofibroblast": case "myoblast": case "tenocyte": {
      const myo = kind === "myofibroblast", mb = kind === "myoblast", ten = kind === "tenocyte";
      const L = r * (ten ? 2.6 : 2.3), H = r * (ten ? 0.32 : myo ? 0.62 : mb ? 0.6 : 0.5) * shrink;
      const tail = ten ? 0.15 : 0.35;
      const fill = o.fill || (mb ? mix("anat-muscle-light", "stage-ink", 0.35, 0.92) : ten ? mix("anat-tendon", "stage-ink", 0.3, 0.75) : mix("fx-heal", "stage-ink", 0.45, 0.9));
      const w1 = Math.sin(ph * Math.PI * 2) * H * 0.25;
      el("path", { d: `M${f(-L * (1 + tail))},${f(w1)} C${f(-L * 0.5)},${f(-H * 1.1)} ${f(L * 0.4)},${f(-H * 1.1)} ${f(L * (1 + tail))},${f(-w1)} C${f(L * 0.4)},${f(H * 1.1)} ${f(-L * 0.5)},${f(H * 1.1)} ${f(-L * (1 + tail))},${f(w1)}Z`,
        fill, stroke: ten ? "none" : mix("fx-heal", "stage-bg", 0.5, 0.8), "stroke-width": 0.8 }, c);
      if (myo) for (let i = -1; i <= 1; i++) el("path", { d: `M${f(-L * 0.9)},${f(i * H * 0.42)} L${f(L * 0.9)},${f(i * H * 0.42)}`, stroke: mix("anat-muscle-light", "stage-bg", 0.15, 0.85), "stroke-width": 1, fill: "none" }, c);
      if (dead > 0.05) deadNuc(0, 0, H * 0.6);
      else el("ellipse", { cx: L * 0.05, cy: 0, rx: L * (ten ? 0.55 : 0.4), ry: H * (ten ? 0.75 : 0.62), fill: nucC }, c);
      break;
    }
    case "osteoclast": {
      const rr = r * shrink;
      const fill = o.fill || mix("fx-inflame", "anat-brain", 0.55, 0.92);
      // dome with ruffled border on the bottom (bone side)
      const ruff = []; const n = 12;
      for (let i = 0; i <= n; i++) ruff.push([lerp(rr * 1.5, -rr * 1.5, i / n), rr * 0.55 + (i % 2 ? 3 : -1)]);
      let d = `M${f(-rr * 1.5)},${f(rr * 0.55)} C${f(-rr * 1.7)},${f(-rr * 0.9)} ${f(rr * 1.7)},${f(-rr * 0.9)} ${f(rr * 1.5)},${f(rr * 0.55)}`;
      ruff.forEach(([a, b]) => { d += ` L${f(a)},${f(b)}`; });
      el("path", { d: d + "Z", fill, stroke: mix("fx-inflame", "stage-bg", 0.5), "stroke-width": 1 }, c);
      const nn = o.nuclei ?? 5;
      for (let i = 0; i < nn; i++) {
        const a = lerp(-rr * 0.95, rr * 0.95, nn > 1 ? i / (nn - 1) : 0.5), b = -rr * 0.05 + (i % 2 ? -rr * 0.28 : rr * 0.06);
        if (dead > 0.05) deadNuc(a, b, rr * 0.16); else el("ellipse", { cx: a, cy: b, rx: rr * 0.2, ry: rr * 0.16, fill: nucC }, c);
      }
      break;
    }
    case "osteoblast": {
      const fill = o.fill || mix("anat-vein", "stage-ink", 0.55, 0.92);
      el("rect", { x: -r * 0.9, y: -r * 1.1, width: r * 1.8, height: r * 2, rx: r * 0.55, fill, stroke: mix("anat-vein", "stage-bg", 0.35), "stroke-width": 0.8 }, c);
      if (dead > 0.05) deadNuc(0, -r * 0.45, r * 0.42);
      else el("ellipse", { cx: 0, cy: -r * 0.45, rx: r * 0.55, ry: r * 0.45, fill: nucC }, c);
      break;
    }
    case "osteocyte": {
      // lacuna + cell body + canaliculi
      el("ellipse", { cx: 0, cy: 0, rx: r * 1.15, ry: r * 0.6, fill: mix("anat-bone-edge", "stage-bg", 0.35) }, c);
      if (dead < 0.95) {
        const k = 1 - dead;
        for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2 + 0.3; el("path", { d: `M${f(Math.cos(a) * r)},${f(Math.sin(a) * r * 0.5)} l${f(Math.cos(a) * r * 1.1)},${f(Math.sin(a) * r * 1.1)}`, stroke: mix("anat-bone-edge", "stage-bg", 0.2, 0.8 * k), "stroke-width": 0.8 }, c); }
        el("ellipse", { cx: 0, cy: 0, rx: r * 0.95 * (1 - dead * 0.4), ry: r * 0.45 * (1 - dead * 0.3), fill: mix("anat-bone", "anat-brain-deep", 0.5, k) }, c);
        el("ellipse", { cx: 0, cy: 0, rx: r * 0.45, ry: r * 0.28, fill: dead > 0.3 ? mix("anat-vein", "stage-bg", 0.5, k) : nucC }, c);
      }
      break;
    }
    case "chondrocyte": {
      // territorial matrix halo + lacuna + cell
      el("ellipse", { cx: 0, cy: 0, rx: r * 1.45, ry: r * 1.3, fill: mix("anat-cartilage", "anat-vein", 0.3, 0.35) }, c);
      el("ellipse", { cx: 0, cy: 0, rx: r * 1.12, ry: r, fill: mix("stage-bg", "anat-cartilage", 0.25) }, c);
      if (dead < 0.97) {
        const k = 1 - dead * 0.55;
        el("ellipse", { cx: 0, cy: r * 0.08, rx: r * 0.95 * k, ry: r * 0.85 * k, fill: o.fill || mix("anat-cartilage", "stage-ink", 0.45, 1 - dead * 0.5) }, c);
        if (dead > 0.05) deadNuc(0, r * 0.08, r * 0.38);
        else el("circle", { cx: 0, cy: r * 0.08, r: r * 0.38, fill: nucC }, c);
      }
      break;
    }
    case "satellite": {
      const ry = lerp(r * 0.45, r * 0.95, act), rx = lerp(r * 1.6, r * 1.1, act);
      el("ellipse", { cx: 0, cy: 0, rx, ry, fill: o.fill || mix("fx-heal", "stage-ink", lerp(0.6, 0.3, act), 0.95), stroke: mix("fx-heal", "stage-bg", 0.4), "stroke-width": 0.9 }, c);
      el("ellipse", { cx: 0, cy: 0, rx: rx * lerp(0.82, 0.55, act), ry: ry * lerp(0.75, 0.6, act), fill: nucC }, c);
      break;
    }
    case "schwann": {
      const L = r * 3, H = r * 0.9, dm = clamp(o.demyelinated || 0);
      const my = mix("anat-nerve", "stage-ink", 0.45);
      if (dm < 0.5) {
        el("rect", { x: -L, y: -H, width: L * 2, height: H * 2, rx: H, fill: my, opacity: 1 - dm, stroke: mix("anat-nerve-edge", "stage-bg", 0.2), "stroke-width": 1 }, c);
        for (let i = 1; i <= 2; i++) el("rect", { x: -L + i * 2.5, y: -H + i * 2.5, width: L * 2 - i * 5, height: H * 2 - i * 5, rx: H - i * 2.5, fill: "none", stroke: mix("anat-nerve-edge", "stage-bg", 0.1, 0.55 * (1 - dm)), "stroke-width": 0.7 }, c);
      } else {
        for (let i = 0; i < 5; i++) el("ellipse", { cx: lerp(-L * 0.8, L * 0.8, i / 4) + (R() - 0.5) * 4, cy: (R() - 0.5) * H * 0.6, rx: H * 0.7, ry: H * 0.5, fill: my, opacity: 1.4 - dm }, c);
      }
      el("ellipse", { cx: 0, cy: -H * 1.05, rx: L * 0.28, ry: H * 0.38, fill: nucC }, c);
      break;
    }
    case "mast": {
      el("ellipse", { cx: 0, cy: 0, rx: r, ry: r * 0.8, fill: o.fill || mix("anat-brain", "stage-ink", 0.3, 0.85), stroke: mix("anat-brain-deep", "stage-bg", 0.3), "stroke-width": 0.8 }, c);
      el("circle", { cx: 0, cy: 0, r: r * 0.32, fill: nucC }, c);
      for (let i = 0; i < 16; i++) {
        const a = R() * Math.PI * 2, d = r * (0.4 + R() * 0.45) * (1 + act * (0.8 + R()));
        el("circle", { cx: Math.cos(a) * d, cy: Math.sin(a) * d * 0.8, r: r * 0.1, fill: mix("anat-vein", "anat-brain-deep", 0.55) }, c);
      }
      break;
    }
    case "lymphocyte": {
      el("circle", { cx: 0, cy: 0, r, fill: o.fill || mix("anat-vein", "stage-ink", 0.6), stroke: mix("anat-vein", "stage-bg", 0.4), "stroke-width": 0.8 }, c);
      if (dead > 0.05) deadNuc(0, 0, r * 0.7); else el("circle", { cx: r * 0.08, cy: 0, r: r * 0.78, fill: nucC }, c);
      break;
    }
    case "msc": {
      const pts = []; const n = 5;
      for (let i = 0; i < n * 2; i++) { const a = (i / (n * 2)) * Math.PI * 2 + R() * 0.4; const k = i % 2 ? 0.55 : 1.5 + R() * 0.5; pts.push([Math.cos(a) * r * k, Math.sin(a) * r * k]); }
      el("path", { d: smoothPath(pts, true), fill: o.fill || mix("fx-heal", "anat-brain", 0.5, 0.85), stroke: mix("fx-heal", "stage-bg", 0.5), "stroke-width": 0.8 }, c);
      el("circle", { cx: 0, cy: 0, r: r * 0.45, fill: nucC }, c);
      break;
    }
    case "adipocyte": {
      el("circle", { cx: 0, cy: 0, r, fill: o.fill || mix("anat-fat", "stage-bg", 0.45, 0.9), stroke: mix("anat-fat", "stage-bg", 0.15), "stroke-width": 1.2 }, c);
      el("ellipse", { cx: r * 0.72, cy: -r * 0.4, rx: r * 0.18, ry: r * 0.1, fill: nucC, transform: `rotate(-30 ${f(r * 0.72)} ${f(-r * 0.4)})` }, c);
      break;
    }
    case "endothelial": {
      el("ellipse", { cx: 0, cy: 0, rx: r * 1.6, ry: r * 0.35, fill: o.fill || mix("anat-artery", "stage-ink", 0.5, 0.8) }, c);
      el("ellipse", { cx: 0, cy: 0, rx: r * 0.6, ry: r * 0.22, fill: nucC }, c);
      break;
    }
    default: {
      el("circle", { cx: 0, cy: 0, r, fill: o.fill || CYTO(0.9) }, c);
      el("circle", { cx: 0, cy: 0, r: r * 0.45, fill: nucC }, c);
    }
  }
  return c;
}

/* ------------------------------------------------------------------ stage timing */
export function stageAt(phase, t) {
  const st = (phase?.stages || []).filter((s) => s && typeof s.stage === "string");
  const dur = typeof phase?.duration === "number" && phase.duration > 0 ? phase.duration : null;
  if (!st.length) return { stage: "healthy", index: 0, progress: 0, prevStage: null, since: 0, dur: dur || 1, count: 1 };
  let i = 0;
  for (let k = 0; k < st.length; k++) if (t >= (st[k].t || 0)) i = k;
  const start = st[i].t || 0;
  const end = i + 1 < st.length ? st[i + 1].t : Math.max(dur ?? start + 1.5, start + 0.001);
  const len = Math.max(end - start, 0.001);
  return {
    stage: st[i].stage, index: i, count: st.length, progress: clamp((t - start) / len),
    prevStage: i > 0 ? st[i - 1].stage : null, since: Math.max(0, t - start), dur: len
  };
}

/* ------------------------------------------------------------------ module loading */
const _mods = new Map(); // tissue → { mod, promise, failed }
export function preloadMicro(tissue) {
  if (!/^[a-z0-9-]+$/.test(String(tissue || ""))) return Promise.resolve(null);
  let rec = _mods.get(tissue);
  if (!rec) {
    rec = { mod: null, failed: false, promise: null };
    rec.promise = import(`./${tissue}.js`).then((m) => {
      const mod = m.default || m;
      if (typeof mod.render !== "function") throw new Error("module has no render()");
      rec.mod = mod; return mod;
    }).catch((e) => { rec.failed = true; console.warn(`[micro] tissue module "${tissue}" unavailable — showing placeholder.`, e?.message || e); return null; });
    _mods.set(tissue, rec);
  }
  return rec.promise;
}
export function getLoadedMicro(tissue) { return _mods.get(tissue)?.mod || null; }

function placeholder(g, tissue, stage, loading) {
  field(g, { tint: "stage-accent", tintAmount: 0.04 });
  if (loading) return;
  const r = rng("ph-" + tissue);
  for (let i = 0; i < 14; i++) el("circle", { cx: 80 + r() * 640, cy: 90 + r() * 280, r: 6 + r() * 14, fill: "none", stroke: col("stage-ink-2", 0.35), "stroke-dasharray": "3 3" }, g);
  label(g, 400, 220, `Microscopic view: ${tissue || "unknown tissue"}`, { anchor: "middle", size: 16, color: col("stage-ink-2") });
  label(g, 400, 244, `(${stageLabel(stage)} — illustration pending)`, { anchor: "middle", size: 13, color: col("stage-ink-2") });
}

function scaleText(mod, stage) {
  const s = mod?.scale;
  if (!s) return null;
  if (typeof s === "function") return s(stage);
  if (typeof s === "string") return s;
  return s[stage] ?? s.default ?? null;
}

function drawStage(g, mod, tissue, stage, progress, extra) {
  if (!mod) { placeholder(g, tissue, stage, extra.loading); return; }
  try {
    mod.render(g, { stage, progress: clamp(progress), prevStage: extra.prevStage ?? null, t: extra.t ?? 0, ctx: extra.ctx || {},
      phase: extra.phase || null, variant: extra.phase?.variant ?? null, rnd: rng(`${tissue}:${stage}`) });
  } catch (e) {
    while (g.firstChild) g.removeChild(g.firstChild);
    placeholder(g, tissue, stage, false);
    if (!drawStage._warned?.has(tissue + stage)) {
      (drawStage._warned ||= new Set()).add(tissue + stage);
      console.warn(`[micro] ${tissue}.render failed at stage "${stage}"`, e);
    }
  }
}

/* ------------------------------------------------------------------ overlays */
function chip(g, x, y, text, { dot, align = "start", sub } = {}) {
  const size = 14, w = Math.round(text.length * size * 0.56 + (dot ? 34 : 22));
  const x0 = align === "end" ? x - w : x;
  const gg = el("g", { "font-family": FONT }, g);
  el("rect", { x: x0, y, width: w, height: 28, rx: 14, fill: col("stage-caption-bg"), stroke: col("stage-ink", 0.18), "stroke-width": 1 }, gg);
  if (dot) el("circle", { cx: x0 + 16, cy: y + 14, r: 5, fill: dot }, gg);
  el("text", { x: x0 + (dot ? 28 : 12), y: y + 19, fill: col("stage-ink"), "font-size": size, "font-weight": 600, text }, gg);
  if (sub) sub(gg, x0, w);
  return { x0, w };
}
function overlays(g, info, mod, phase, t) {
  const og = el("g", { class: "micro-overlay", "pointer-events": "none" }, g);
  const kind = stageKind(info.stage);
  const { x0, w } = chip(og, 14, 12, stageLabel(info.stage, mod), { dot: col(KIND_TOKEN[kind]) });
  // stage dots under the chip
  if (info.count > 1) {
    for (let i = 0; i < info.count; i++) {
      const cx = x0 + 14 + i * 11;
      el("circle", { cx, cy: 50, r: i === info.index ? 3.4 : 2.4, fill: i === info.index ? col(KIND_TOKEN[kind]) : col("stage-ink", i < info.index ? 0.55 : 0.22) }, og);
    }
  }
  void w;
  // clock chip
  const tl = (phase?.timeLabels || []).filter((l) => typeof l?.t === "number" && t >= l.t).pop();
  if (tl?.text) {
    const text = String(tl.text);
    const size = 14, cw = Math.round(text.length * size * 0.56 + 40);
    const cx0 = MICRO_W - 14 - cw;
    const gg = el("g", { "font-family": FONT }, og);
    el("rect", { x: cx0, y: 12, width: cw, height: 28, rx: 14, fill: col("stage-caption-bg"), stroke: col("stage-ink", 0.18) }, gg);
    el("circle", { cx: cx0 + 16, cy: 26, r: 7, fill: "none", stroke: col("stage-accent"), "stroke-width": 1.6 }, gg);
    el("path", { d: `M${cx0 + 16},21.5 L${cx0 + 16},26 L${cx0 + 19.5},28`, stroke: col("stage-accent"), "stroke-width": 1.6, fill: "none", "stroke-linecap": "round" }, gg);
    el("text", { x: cx0 + 30, y: 31, fill: col("stage-ink"), "font-size": size, "font-weight": 600, text }, gg);
  }
  // scale hint
  const sc = scaleText(mod, info.stage);
  if (sc) {
    const bx = MICRO_W - 18, by = MICRO_H - 16, bw = mod?.scaleBarPx || 70;
    el("path", { d: `M${bx - bw},${by - 4} L${bx - bw},${by} L${bx},${by} L${bx},${by - 4}`, stroke: col("stage-ink", 0.8), "stroke-width": 1.6, fill: "none" }, og);
    el("text", { x: bx - bw / 2, y: by - 8, "text-anchor": "middle", fill: col("stage-ink", 0.85), "font-size": 12, "font-family": FONT,
      stroke: col("stage-bg", 0.8), "stroke-width": 3, "paint-order": "stroke", text: sc }, og);
  }
}

/* ------------------------------------------------------------------ public frame renderers */
function clear(g) { while (g.firstChild) g.removeChild(g.firstChild); }
function makeRoot(g) {
  clear(g);
  const root = el("g", { "data-micro-root": "" }, g);
  root.dataset.microUid = g.dataset?.microUid || String(++_uid);
  if (g.dataset) g.dataset.microUid = root.dataset.microUid;
  el("defs", {}, root);
  const clipId = def(root, "clip", (defs, id) => { const cp = el("clipPath", { id }, defs); el("rect", { x: 0, y: 0, width: MICRO_W, height: MICRO_H }, cp); });
  const body = el("g", { "clip-path": clipId }, root);
  return { root, body };
}

export function renderMicroFrame(g, phase, t = 0, ctx = {}) {
  const tissue = phase?.tissue;
  const info = stageAt(phase, t);
  void preloadMicro(tissue);
  const rec = _mods.get(tissue);
  const mod = rec?.mod || null;
  const loading = !!rec && !rec.mod && !rec.failed;
  const { body } = makeRoot(g);
  const fadeLen = Math.min(CROSSFADE, info.dur * 0.4);
  const k = info.prevStage && !ctx.reducedMotion && info.since < fadeLen ? ease(info.since / fadeLen) : 1;
  const extra = { t, ctx, phase, loading };
  if (k < 1) {
    const prevInfo = stageAt(phase, (phase.stages[info.index - 1].t || 0) + 1e-6);
    const under = el("g", {}, body);
    drawStage(under, mod, tissue, info.prevStage, 1, { ...extra, prevStage: prevInfo.prevStage });
    const over = el("g", { opacity: f(k * 100) / 100 }, body);
    drawStage(over, mod, tissue, info.stage, info.progress, { ...extra, prevStage: info.prevStage });
  } else {
    drawStage(body, mod, tissue, info.stage, info.progress, { ...extra, prevStage: info.prevStage });
  }
  overlays(body, info, mod, phase, t);
  return { viewBox: [0, 0, MICRO_W, MICRO_H], stage: info.stage, progress: info.progress, ready: !!mod || !!rec?.failed, whenReady: rec?.promise || null };
}

/** Render one stage on its own (previews, storyboards, healing primer). opts: { prevStage, index, count, timeLabel, ctx, variant } */
export function renderMicroStage(g, tissue, stage, progress = 0.6, opts = {}) {
  void preloadMicro(tissue);
  const rec = _mods.get(tissue);
  const mod = rec?.mod || null;
  const { body } = makeRoot(g);
  const phase = { type: "micro", tissue, variant: opts.variant, stages: [{ t: 0, stage }], duration: 1, timeLabels: opts.timeLabel ? [{ t: 0, text: opts.timeLabel }] : [] };
  drawStage(body, mod, tissue, stage, progress, { t: progress, ctx: opts.ctx || {}, phase, prevStage: opts.prevStage ?? null, loading: !!rec && !mod && !rec.failed });
  overlays(body, { stage, index: opts.index ?? 0, count: opts.count ?? 1, progress }, mod, phase, 1);
  return { viewBox: [0, 0, MICRO_W, MICRO_H], stage, progress, ready: !!mod || !!rec?.failed, whenReady: rec?.promise || null };
}

export default { renderMicroFrame, renderMicroStage, preloadMicro, stageAt };
