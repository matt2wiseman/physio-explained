// Body map: an original, gender-neutral human figure (front & back) with one clickable tile per body region.
// OWNER: P6.
//
//   bodyMap({ view: "front" | "back", counts, selected, onSelect(region), compact?, labels? }) → SVGElement
//     counts   { [region]: number } (or Map)  — drives the red "tissue" heat tint, count badges and tooltips
//     selected region id to show as selected
//     onSelect called with the region id on click / Enter / Space
//   The returned <svg> also exposes  .update({ counts?, selected? })  and  .focusRegion(id).
//
// Construction: one silhouette (a clipPath) is filled by region tiles (polygons that tile the body); seams are drawn by
// the tile strokes, the outline sits underneath. Left/right tiles of a region are one control. "general" is a pill.
// Keyboard: every region is a focusable button (Enter / Space select); arrow keys, Home and End also move between them.
// Tooltips are drawn inside the SVG; colours come from tokens (see css/components/bodymap.css).

import { h } from "../util/dom.js";
import * as dom from "../util/dom.js";

export const VIEWBOX = [240, 520];
const CX = 120;
let uid = 0;

const FALLBACK_LABELS = {
  "head-face": "Head & face", cervical: "Neck (cervical spine)", shoulder: "Shoulder", arm: "Arm", elbow: "Elbow",
  "wrist-hand": "Wrist & hand", "chest-abdomen": "Chest & abdomen", thoracic: "Thoracic spine", lumbar: "Lumbar spine",
  pelvis: "Pelvis", "hip-groin": "Hip & groin", thigh: "Thigh", knee: "Knee", "lower-leg": "Lower leg", ankle: "Ankle", foot: "Foot",
  general: "General & systemic"
};
export const regionLabel = (r) => (dom.REGION_LABELS && dom.REGION_LABELS[r]) || FALLBACK_LABELS[r] || String(r);

/* ------------------------------------------------------------------ geometry */
const mir = (pts) => pts.map(([x, y]) => [2 * CX - x, y]);
const fmt = (n) => +n.toFixed(2);
const poly = (pts) => "M" + pts.map(([x, y]) => `${fmt(x)} ${fmt(y)}`).join("L") + "Z";
/** left-half outline from the centre line (top) to the centre line (bottom) → symmetric closed polygon */
const sym = (left) => poly([...left, ...mir(left.slice(1, -1)).reverse()]);
/** a lateral region: the left polygon and its mirror image */
const both = (pts) => [poly(pts), poly(mir(pts))];

/** Catmull-Rom → cubic Bézier through points; a third item `true` marks a corner. Returns path data without the M. */
function spline(pts) {
  let d = "";
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1 = p1[2] ? [p1[0] + (p2[0] - p1[0]) / 3, p1[1] + (p2[1] - p1[1]) / 3] : [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = p2[2] ? [p2[0] - (p2[0] - p1[0]) / 3, p2[1] - (p2[1] - p1[1]) / 3] : [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${fmt(c1[0])} ${fmt(c1[1])} ${fmt(c2[0])} ${fmt(c2[1])} ${fmt(p2[0])} ${fmt(p2[1])}`;
  }
  return d;
}

// Left half of the body outline, from the top of the neck, down the outside, round the foot, up the inside to the crotch.
// [x, y, corner?]
const OUTLINE_L = [
  [109, 58, 1], [109, 76], [106, 84], [96, 89], [82, 92], [70, 95], [61, 101], [55, 112],
  [52, 128], [50.5, 150], [49.5, 172], [49, 190],                                  // upper arm (outer)
  [46.5, 212], [43, 236], [40, 255], [38, 266],                                    // forearm
  [34, 278], [31.5, 292], [33, 306], [39, 315], [44, 317], [49, 312], [51, 300], [52, 288], [51, 276], [50, 266],  // hand
  [55, 240], [62, 215], [67.5, 192], [70, 170], [74, 148], [78, 127, 1],           // inner arm → armpit
  [79, 140], [81, 160], [85, 180], [88.5, 198], [86, 215], [82.5, 228], [80.5, 242], // torso side → hip
  [81, 262], [83, 290], [86, 318], [89, 345], [90, 360], [89.5, 372],              // thigh & knee (outer)
  [87.5, 392], [88, 408], [91, 430], [95, 450], [97, 462],                         // calf (outer)
  [93, 474], [88, 484, 1], [86.5, 492], [91, 498], [103, 499.5], [111, 497.5], [113, 490], [112, 478], [111, 466], [111, 458], // foot
  [113.5, 440], [115.5, 418], [115, 395], [113.5, 378], [113, 362], [113.5, 348],  // calf & knee (inner)
  [115.5, 322], [117.5, 296], [119.2, 272], [120, 258, 1]                          // thigh (inner) → crotch
];
const BODY_D = (() => {
  const right = mir(OUTLINE_L).reverse().slice(1).map(([x, y, c], i, a) => [x, y, c]);
  const all = [...OUTLINE_L, ...right];
  all[all.length - 1] = [...all[all.length - 1].slice(0, 2), 1];
  return `M${all[0][0]} ${all[0][1]}${spline(all)}Z`;
})();
const HEAD_D = "M120 9C133 9 142 20 142 36C142 50 138 60 131 66C127 70 123.5 71 120 71C116.5 71 113 70 109 66C102 60 98 50 98 36C98 20 107 9 120 9Z";
const EARS = [[97.5, 41], [142.5, 41]];

/* ------------------------------------------------------------------ region tiles */
// Shared boundary vertices so adjacent tiles meet exactly.
const AX = [79, 127], B1 = [76, 150], B2 = [76, 172];            // armpit and the gap between arm and torso
const ARM_CUT1 = [[30, 136], AX], ELB1 = [[30, 167], B2], ELB2 = [[28, 200], [76, 206]], WR = [[26, 258], [70, 263]];

const SHARED = {
  head: [HEAD_D],
  cervical: ["M120 71C123.5 71 127 70 131 66L140 64L140 88L120 96L100 88L100 64L109 66C113 70 116.5 71 120 71Z"],
  upperArm: both([ARM_CUT1[0], AX, B1, B2, ELB1[0]]),
  elbow: both([ELB1[0], B2, ELB2[1], ELB2[0]]),
  forearm: both([ELB2[0], ELB2[1], [70, 263], WR[0]]),
  hand: both([WR[0], WR[1], [70, 330], [26, 330]]),
  thigh: both([[70, 280], [120, 280], [120, 340], [70, 340]]),
  knee: both([[70, 340], [120, 340], [120, 380], [70, 380]]),
  lowerLeg: both([[70, 380], [120, 380], [120, 448], [70, 448]]),
  ankle: both([[70, 448], [120, 448], [120, 472], [70, 472]]),
  foot: both([[70, 472], [120, 472], [120, 512], [70, 512]])
};

const FRONT = [
  { id: "head-face", d: SHARED.head, at: [120, 36] },
  { id: "cervical", d: SHARED.cervical, at: [120, 80] },
  { id: "shoulder", d: both([[100, 64], [100, 88], [88, 100], [82, 112], AX, ARM_CUT1[0], [30, 64]]), at: [180, 106] },
  { id: "arm", d: [...SHARED.upperArm, ...SHARED.forearm], at: [182, 150] },
  { id: "elbow", d: SHARED.elbow, at: [188, 188] },
  { id: "wrist-hand", d: SHARED.hand, at: [196, 290] },
  { id: "chest-abdomen", d: [sym([[120, 96], [100, 88], [88, 100], [82, 112], AX, B1, B2, [76, 190], [82, 201], [100, 205], [120, 207]])], at: [120, 150] },
  { id: "pelvis", d: [sym([[120, 207], [100, 205], [82, 201], [74, 214], [92, 230], [106, 246], [120, 258]])], at: [120, 228] },
  { id: "hip-groin", d: both([[74, 214], [92, 230], [106, 246], [120, 258], [120, 280], [70, 280], [70, 214]]), at: [152, 252] },
  { id: "thigh", d: SHARED.thigh, at: [142, 312] },
  { id: "knee", d: SHARED.knee, at: [140, 360] },
  { id: "lower-leg", d: SHARED.lowerLeg, at: [140, 414] },
  { id: "ankle", d: SHARED.ankle, at: [137, 460] },
  { id: "foot", d: SHARED.foot, at: [139, 490] }
];
const BACK = [
  { id: "head-face", d: SHARED.head, at: [120, 36] },
  { id: "cervical", d: SHARED.cervical, at: [120, 80] },
  { id: "shoulder", d: both([[100, 64], [100, 88], [108, 108], [106, 138], [94, 152], B1, AX, ARM_CUT1[0], [30, 64]]), at: [180, 106] },
  { id: "arm", d: [...SHARED.upperArm, ...SHARED.forearm], at: [182, 150] },
  { id: "elbow", d: SHARED.elbow, at: [188, 188] },
  { id: "wrist-hand", d: SHARED.hand, at: [196, 290] },
  { id: "thoracic", d: [sym([[120, 92], [100, 88], [108, 108], [106, 138], [94, 152], B1, [76, 168], [98, 171], [120, 172]])], at: [120, 128] },
  { id: "lumbar", d: [sym([[120, 172], [98, 171], [76, 168], [76, 190], [82, 201], [100, 205], [120, 207]])], at: [120, 190] },
  { id: "pelvis", d: [sym([[120, 207], [100, 205], [82, 201], [74, 214], [80, 232], [96, 248], [120, 254]])], at: [120, 232] },
  { id: "hip-groin", d: both([[74, 214], [80, 232], [96, 248], [120, 254], [120, 280], [70, 280], [70, 214]]), at: [158, 256] },
  { id: "thigh", d: SHARED.thigh, at: [142, 312] },
  { id: "knee", d: SHARED.knee, at: [140, 360] },
  { id: "lower-leg", d: SHARED.lowerLeg, at: [140, 414] },
  { id: "ankle", d: SHARED.ankle, at: [137, 460] },
  { id: "foot", d: SHARED.foot, at: [139, 490] }
];

// Fine anatomical hints (non-interactive).
function detailFront() {
  const lines = [];
  const L = (d) => { lines.push(d); };
  L("M118 97C108 92 98 92 88 96L75 101");                 // clavicle
  L("M122 97C132 92 142 92 152 96L165 101");
  L("M120 100V152");                                       // sternum
  for (const [y, dx] of [[112, 28], [124, 33], [136, 35], [148, 33]]) {
    L(`M118 ${y}C108 ${y + 2} ${120 - dx + 6} ${y + 8} ${120 - dx} ${y + 14}`);
    L(`M122 ${y}C132 ${y + 2} ${120 + dx - 6} ${y + 8} ${120 + dx} ${y + 14}`);
  }
  L("M100 357a6.4 8.4 0 1 0 0.01 0Z");                      // patellae
  L("M140 357a6.4 8.4 0 1 0 0.01 0Z");
  L("M92 214C100 222 108 232 114 244");                    // inguinal creases
  L("M148 214C140 222 132 232 126 244");
  return { paths: lines, dots: [[120, 181, 1.6]] };
}
function detailBack() {
  const lines = [];
  lines.push("M110 106L91 109C93 124 98 140 104 148C108 142 110 124 110 106Z");   // scapulae
  lines.push("M130 106L149 109C147 124 142 140 136 148C132 142 130 124 130 106Z");
  lines.push("M120 214L113 232L120 246L127 232Z");                                 // sacrum
  lines.push("M120 250V258");
  lines.push("M92 252C104 258 112 258 120 256M148 252C136 258 128 258 120 256");   // gluteal folds
  const dots = [];
  for (let i = 0; i < 7; i++) dots.push([120, 62 + i * 4.3, 1.5]);
  for (let i = 0; i < 12; i++) dots.push([120, 94 + i * 6.55, 1.9 + i * 0.03]);
  for (let i = 0; i < 5; i++) dots.push([120, 174 + i * 7.4, 2.6]);
  return { paths: lines, dots };
}

/* ------------------------------------------------------------------ component */
const bump = (str, n) => (str.length * n);

export function bodyMap(opts = {}) {
  const { view = "front", onSelect, compact = false } = opts;
  const labelFor = (r) => (opts.labels && opts.labels[r]) || regionLabel(r);
  let counts = toCounts(opts.counts);
  let selected = opts.selected || null;
  const regions = view === "back" ? BACK : FRONT;
  const clipId = `bm-clip-${++uid}`;

  const svg = h("svg", {
    class: `bm bm--${view}${compact ? " bm--compact" : ""}`, viewBox: `0 0 ${VIEWBOX[0]} ${VIEWBOX[1]}`,
    role: "group", "aria-label": `Body map, ${view} view. Choose a region to see its injuries.`, "data-view": view,
    preserveAspectRatio: "xMidYMid meet"
  });

  // silhouette
  const silhouette = () => [h("path", { d: BODY_D }), h("path", { d: HEAD_D }), ...EARS.map(([x, y]) => h("ellipse", { cx: x, cy: y, rx: 3.2, ry: 6 }))];
  svg.append(h("defs", null, h("clipPath", { id: clipId }, silhouette())));

  // outline underneath (its inner half is hidden by the tiles)
  svg.append(h("g", { class: "bm__outline", "aria-hidden": "true" }, silhouette()));

  // tiles
  const clipped = h("g", { "clip-path": `url(#${clipId})` });
  const groups = new Map();
  const tileLayer = h("g", { class: "bm__tiles" });
  for (const r of regions) {
    const g = h("g", { class: "bm__r", "data-region": r.id, role: "button", tabindex: "0", "aria-pressed": "false" },
      r.d.map((d) => h("path", { class: "bm__shape", d })));
    groups.set(r.id, { g, def: r });
    tileLayer.append(g);
  }
  clipped.append(tileLayer);

  // anatomical hints
  const det = view === "back" ? detailBack() : detailFront();
  clipped.append(h("g", { class: "bm__detail", "aria-hidden": "true" },
    det.paths.map((d) => h("path", { d })),
    det.dots.map(([x, y, r]) => h("circle", { cx: x, cy: y, r }))));

  // state overlays (hover / selected / focus), cloned from the tile shapes
  const ovl = { sel: h("g", { class: "bm__ovl bm__ovl--sel", "aria-hidden": "true" }), hover: h("g", { class: "bm__ovl bm__ovl--hover", "aria-hidden": "true" }), focus: h("g", { class: "bm__ovl bm__ovl--focus", "aria-hidden": "true" }) };
  clipped.append(ovl.sel, ovl.hover, ovl.focus);
  svg.append(clipped);

  // badges (drawn above, unclipped)
  const badgeLayer = h("g", { class: "bm__badges", "aria-hidden": "true" });
  const badges = new Map();
  for (const r of regions) {
    const b = h("g", { class: "bm__badge", transform: `translate(${r.at[0]} ${r.at[1]})` }, h("circle", { r: 7.6 }), h("text", { y: 3.4 }, ""));
    badges.set(r.id, b);
    badgeLayer.append(b);
  }
  svg.append(badgeLayer);

  // general pill + orientation label
  const gText = h("text", { class: "bm__pill-t", x: 12, y: 19 }, "General");
  const gCount = h("text", { class: "bm__pill-n", x: 76, y: 19, "text-anchor": "end" }, "");
  const general = h("g", { class: "bm__r bm__r--general", "data-region": "general", role: "button", tabindex: "0", "aria-pressed": "false" },
    h("rect", { class: "bm__pill", x: 4, y: 4, width: 80, height: 22, rx: 11 }), gText, gCount);
  groups.set("general", { g: general, def: { id: "general", at: [44, 26] } });
  svg.append(general);
  svg.append(h("text", { class: "bm__side", x: 236, y: 16, "text-anchor": "end", "aria-hidden": "true" }, view === "back" ? "POSTERIOR" : "ANTERIOR"));
  if (!compact) {
    svg.append(h("text", { class: "bm__lr", x: 26, y: 264, "aria-hidden": "true" }, view === "back" ? "L" : "R"));
    svg.append(h("text", { class: "bm__lr", x: 214, y: 264, "text-anchor": "end", "aria-hidden": "true" }, view === "back" ? "R" : "L"));
  }

  // tooltip
  const tipRect = h("rect", { class: "bm__tip-bg", rx: 4, height: 34 });
  const tipName = h("text", { class: "bm__tip-t", x: 8, y: 14 });
  const tipCount = h("text", { class: "bm__tip-n", x: 8, y: 27 });
  const tip = h("g", { class: "bm__tip", "aria-hidden": "true", hidden: true }, tipRect, tipName, tipCount);
  tip.style.display = "none";
  svg.append(tip);

  /* ---- state */
  const countOf = (id) => counts.get(id) || 0;
  const countText = (n) => (n === 1 ? "1 injury" : `${n} injuries`);
  const max = () => Math.max(1, ...[...counts.values()].filter((n) => n > 0));

  function paint() {
    const m = max();
    for (const [id, { g }] of groups) {
      const n = countOf(id);
      g.setAttribute("aria-label", `${labelFor(id)}, ${n ? countText(n) : "no injuries yet"}`);
      g.setAttribute("aria-pressed", String(id === selected));
      g.classList.toggle("is-selected", id === selected);
      g.classList.toggle("has-count", n > 0);
      if (id === "general") { gCount.textContent = n ? String(n) : ""; continue; }
      g.style.setProperty("--heat", n ? String(Math.round(14 + 40 * (n / m))) : "0");
      const b = badges.get(id);
      const show = n > 0 && !compact;
      b.style.display = show ? "" : "none";
      if (show) { b.querySelector("text").textContent = String(n); b.querySelector("circle").setAttribute("r", n > 99 ? 9.4 : n > 9 ? 8.2 : 7.2); }
    }
    setOverlay(ovl.sel, selected);
  }

  function setOverlay(layer, id) {
    layer.replaceChildren();
    const item = id && groups.get(id);
    if (!item || id === "general") {
      if (id === "general" && layer !== ovl.sel) { /* pill handled by CSS */ }
      return;
    }
    for (const p of item.g.querySelectorAll(".bm__shape")) layer.append(h("path", { d: p.getAttribute("d") }));
  }

  function showTip(id) {
    const item = groups.get(id); if (!item) return;
    const n = countOf(id);
    const name = labelFor(id), cnt = n ? countText(n) : "No injuries yet";
    tipName.textContent = name; tipCount.textContent = cnt;
    const w = Math.max(bump(name, 6.1), bump(cnt, 5.8)) + 16;
    tipRect.setAttribute("width", fmt(w));
    let [ax, ay] = item.def.at;
    if (id === "general") { ax = 44; ay = 30; }
    let x = Math.min(Math.max(ax - w / 2, 4), VIEWBOX[0] - 4 - w);
    let y = ay - 46;
    if (y < 30) y = ay + 14;
    if (id === "head-face") y = ay + 36;
    tip.setAttribute("transform", `translate(${fmt(x)} ${fmt(y)})`);
    tip.style.display = "";
  }
  const hideTip = () => { tip.style.display = "none"; };

  const order = regions.map((r) => r.id).concat("general");
  const select = (id) => { selected = id; paint(); if (typeof onSelect === "function") onSelect(id); };

  for (const [id, { g }] of groups) {
    g.addEventListener("click", () => select(id));
    g.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") { e.preventDefault(); select(id); return; }
      const i = order.indexOf(id);
      let n = null;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") n = (i + 1) % order.length;
      else if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = (i - 1 + order.length) % order.length;
      else if (e.key === "Home") n = 0;
      else if (e.key === "End") n = order.length - 1;
      if (n != null) { e.preventDefault(); groups.get(order[n]).g.focus(); }
    });
    g.addEventListener("pointerenter", () => { setOverlay(ovl.hover, id); g.classList.add("is-hover"); showTip(id); });
    g.addEventListener("pointerleave", () => { ovl.hover.replaceChildren(); g.classList.remove("is-hover"); if (document.activeElement !== g || !g.matches(":focus-visible")) hideTip(); });
    g.addEventListener("focus", () => { if (g.matches(":focus-visible")) { setOverlay(ovl.focus, id); showTip(id); g.classList.add("is-focus"); } });
    g.addEventListener("blur", () => { ovl.focus.replaceChildren(); g.classList.remove("is-focus"); hideTip(); });
  }

  svg.update = (next = {}) => {
    if ("counts" in next) counts = toCounts(next.counts);
    if ("selected" in next) selected = next.selected || null;
    paint();
  };
  svg.focusRegion = (id) => { const it = groups.get(id); if (it) it.g.focus(); };
  svg.regions = order;
  paint();
  return svg;
}

function toCounts(c) {
  if (c instanceof Map) return new Map([...c].filter(([, v]) => Number.isFinite(+v)).map(([k, v]) => [k, +v]));
  const m = new Map();
  if (c && typeof c === "object") for (const k of Object.keys(c)) if (Number.isFinite(+c[k])) m.set(k, +c[k]);
  return m;
}

/** Which view shows a region (the front view has no thoracic/lumbar; the back view has no chest-abdomen). */
export const viewOf = (region) => (["thoracic", "lumbar"].includes(region) ? "back" : region === "chest-abdomen" ? "front" : null);

export default bodyMap;
