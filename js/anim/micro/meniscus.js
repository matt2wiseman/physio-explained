/**
 * Micro module: MENISCUS (fibrocartilage). OWNER: A7.
 * View: an "unrolled" segment of meniscus seen from above — the periphery (joint capsule & perimeniscal capillary plexus)
 * at the top, the thin inner free edge at the bottom. Circumferential collagen bundles run left–right (the hoop
 * direction), radial tie fibres run top–bottom. The vascular gradient is explicit: a zone bar on the left (red zone =
 * outer, vascular; red–white; white zone = inner, avascular) and radial vessels that penetrate only the outer part.
 *   healthy → loaded (axial load becomes hoop tension in circumferential fibres; meniscus pushed outward) →
 *   tear (longitudinal tear in the red zone; radial tear in the white zone cutting the hoop fibres) →
 *   red-zone-healing (vessels sprout into the tear: clot, cells, fibrovascular scar) →
 *   white-zone-no-healing (no vessels reach the inner tear: no clot, no repair cells — the tear persists / extends).
 */
import { el, rng, lerp, clamp, ease, fade, seg, wave, col, mix, field, label, arrow, drawCell, collagenFibre, capillary,
  smoothPath, f, linear, radial, blobPath } from "./index.js";

const TOP = 88, EDGE = 394, ROWS = Array.from({ length: 14 }, (_, i) => 100 + i * 21.2);
const RED = [TOP, 188], RW = [188, 292], WHITE = [292, EDGE];
const LT = { x0: 210, x1: 450, row: 2 };                // longitudinal tear between rows 2 & 3 (red zone)
const RT = { x: 572 };                                  // radial tear from the free edge
const mg = (() => {
  const r = rng("meniscus");
  const vessels = [90, 170, 250, 330, 410, 490, 570, 650, 730].map((x) => ({ x: x + (r() - 0.5) * 20, L: 50 + r() * 60 }));
  const cells = [];
  for (let i = 0; i < ROWS.length - 1; i++) for (let k = 0; k < 6; k++) cells.push({ x: 50 + ((k + 0.2 + r() * 0.6) / 6) * 720, y: (ROWS[i] + ROWS[i + 1]) / 2, seed: cells.length, k: r() });
  const clot = Array.from({ length: 26 }, () => ({ x: LT.x0 + 30 + r() * (LT.x1 - LT.x0 - 60), y: (ROWS[2] + ROWS[3]) / 2 + (r() - 0.5) * 10, k: r(), seed: Math.floor(r() * 1e6) }));
  return { vessels, cells, clot };
})();

const ltProfile = (x) => (x <= LT.x0 || x >= LT.x1 ? 0 : Math.sin((Math.PI * (x - LT.x0)) / (LT.x1 - LT.x0)));

function render(g, { stage, progress: p }) {
  const k = ease(p);
  const order = ["healthy", "loaded", "tear", "red-zone-healing", "white-zone-no-healing"];
  const si = Math.max(0, order.indexOf(stage));
  field(g, { tint: "anat-cartilage", tintAmount: 0.04 });
  // ---- parameters
  const load = si === 1 ? fade(0, 0.5, p) : 0;
  const extr = 8 * load;
  const ltOpen = si === 2 ? fade(0.05, 0.6, p) * 14 : si === 3 ? 14 * (1 - fade(0.3, 1, p)) : si === 4 ? 0 : 0;
  const ltScar = si === 3 ? fade(0.4, 1, p) : si === 4 ? 1 : 0;
  const rtLen = si === 2 ? fade(0.3, 0.85, p) * 96 : si === 3 ? 96 : si === 4 ? 96 + 30 * k : 0;
  const rtGap = si >= 2 ? 8 + 16 * (si === 2 ? fade(0.3, 0.85, p) : 1) + (si === 4 ? 8 * k : 0) : 0;
  // ---- meniscus body (fibrocartilage ground) with vascular-gradient tint
  el("rect", { x: 0, y: 56, width: 800, height: TOP - 56 + 4, fill: mix("anat-capsule", "stage-bg", 0.55) }, g);
  el("rect", { x: 0, y: TOP - extr, width: 800, height: EDGE - TOP, fill: mix("anat-cartilage", "stage-bg", 0.6) }, g);
  el("rect", { x: 0, y: TOP - extr, width: 800, height: EDGE - TOP, fill: linear(g, "men-vasc", [[0, col("anat-artery", 0.42)], [0.33, col("anat-artery", 0.16)], [0.62, col("anat-artery", 0)], [1, col("anat-artery", 0)]]) }, g);
  el("rect", { x: 0, y: EDGE - extr, width: 800, height: 450 - EDGE, fill: mix("anat-fluid", "stage-bg", 0.75) }, g);
  // ---- radial tie fibres
  let tie = ""; for (let x = 40; x < 800; x += 92) tie += `M${x},${TOP + 4 - extr} C${x + 8},${TOP + 100} ${x - 8},${EDGE - 100} ${x + 2},${EDGE - 4 - extr} `;
  el("path", { d: tie, stroke: mix("anat-ligament", "stage-bg", 0.35, 0.65), "stroke-width": 2.4, fill: "none" }, g);
  // ---- circumferential collagen bundles
  const fibreCol = mix("anat-ligament", "anat-cartilage", 0.3), edge = mix("anat-ligament-edge", "stage-bg", 0.3);
  ROWS.forEach((y0, i) => {
    const y = y0 - extr * (1 - i / ROWS.length);
    const base = { type: "I", width: 7.5, crimp: lerp(0.45, 0.05, load), wavelength: 46, amplitude: 2.2, color: fibreCol, edge, seed: 30 + i, phase: i * 0.05 };
    const yTop = EDGE - rtLen;
    const cut = rtLen > 2 && y > yTop;
    const offL = i === LT.row ? -ltOpen / 2 : i === LT.row + 1 ? ltOpen / 2 : 0;
    const path = (a, b) => { const pts = []; for (let x = a; x <= b; x += 12) pts.push([x, y + offL * ltProfile(x)]); pts.push([b, y + offL * ltProfile(b)]); return pts; };
    if (cut) {
      const gap = rtGap * clamp((y - yTop) / Math.max(rtLen, 1) + 0.25);
      collagenFibre(g, path(-30, RT.x - gap / 2), { ...base, frayEnd: 0.8, frayLength: 14 });
      collagenFibre(g, path(RT.x + gap / 2, 830), { ...base, frayStart: 0.8, frayLength: 14, seed: 60 + i });
    } else collagenFibre(g, path(-30, 830), base);
  });
  // perimeniscal capillary plexus + radial vessels (outer third only)
  capillary(g, [[-10, 74], [200, 70], [400, 77], [600, 70], [810, 75]], { width: 10, seed: 2, rbcs: 14, flow: p * 0.3 });
  mg.vessels.forEach((v, i) => capillary(g, [[v.x, 74], [v.x + 6, 74 + v.L * 0.5 - extr], [v.x - 4, 74 + v.L - extr]], { width: 7, seed: 10 + i, rbcs: 2, flow: p * 0.3 }));
  // sprouts into the red-zone tear (healing)
  if (si === 3 || si === 4) [270, 330, 390].forEach((x, i) => {
    const gr = si === 3 ? fade(0, 0.45 + i * 0.1, p) : 1;
    capillary(g, [[x, 74], [x + 8, 74 + (ROWS[2] - 74) * 0.6 * gr], [x - 2, 74 + (ROWS[2] + 8 - 74) * gr]], { width: 6, seed: 20 + i, rbcs: 2, opacity: si === 4 ? 0.7 : 1 });
  });
  // longitudinal tear: clot → fibrovascular scar
  if (ltOpen > 0.5 || ltScar > 0) {
    const yc = (ROWS[2] + ROWS[3]) / 2;
    const lens = (h) => { const up = [], dn = []; for (let x = LT.x0; x <= LT.x1; x += 10) { up.push([x, yc - (h / 2) * ltProfile(x) - 2]); dn.push([x, yc + (h / 2) * ltProfile(x) + 2]); } return smoothPath([...up, ...dn.reverse()], true); };
    if (ltOpen > 0.5) el("path", { d: lens(ltOpen), fill: si === 3 ? col("fx-bleed", 0.75) : mix("anat-fluid", "stage-bg", 0.6) }, g);
    if (si === 3) {
      mg.clot.forEach((c, i) => { if (c.k < 1 - fade(0.3, 0.9, p)) drawCell(g, "rbc", c.x, c.y, 3.8, { seed: c.seed }); });
      mg.clot.slice(0, 8).forEach((c, i) => drawCell(g, "fibroblast", c.x, c.y + (i % 2 ? 3 : -3), 5.5, { angle: (c.k - 0.5) * 40, seed: c.seed, opacity: fade(0.35, 0.7, p) }));
    }
    if (ltScar > 0.01) {
      let d = ""; for (let x = LT.x0 + 16; x < LT.x1 - 16; x += 13) d += `M${x},${f(yc - 5)} q4,5 0,10 `;
      el("path", { d: `M${LT.x0 + 10},${yc} L${LT.x1 - 10},${yc}`, stroke: mix("fx-heal", "anat-ligament", 0.4, 0.8 * ltScar), "stroke-width": 7, "stroke-linecap": "round" }, g);
      el("path", { d, stroke: mix("fx-heal", "stage-bg", 0.3, ltScar), "stroke-width": 1.2, fill: "none" }, g);
    }
  }
  // radial tear opening (white zone)
  if (rtLen > 2) {
    const yTop = EDGE - rtLen - extr;
    el("path", { d: `M${RT.x - rtGap / 2 - 2},${EDGE + 4} L${RT.x - 1},${yTop} L${RT.x + 1},${yTop} L${RT.x + rtGap / 2 + 2},${EDGE + 4} Z`, fill: mix("anat-fluid", "stage-bg", 0.65) }, g);
    if (si === 2) el("path", { d: `M${RT.x},${yTop} L${RT.x},${EDGE}`, stroke: col("fx-injury", 0.35), "stroke-width": 10 }, g);
  }
  // cells: outer = fibroblast-like (spindle), inner = fibrochondrocytes (rounded)
  mg.cells.forEach((c) => {
    const y = c.y - extr * (1 - (c.y - TOP) / (EDGE - TOP));
    if (Math.abs(c.x - RT.x) < 12 && y > EDGE - rtLen - 6) return;
    if (y > RW[1] - 20) drawCell(g, "chondrocyte", c.x, y, 4.2, { seed: c.seed, aspect: 0.85 });
    else drawCell(g, "fibroblast", c.x, y, 5, { angle: 0, seed: c.seed, fill: mix("anat-ligament", "stage-ink", 0.4, 0.85) });
  });
  // zone bar (vascular gradient)
  const zb = el("g", {}, g);
  el("rect", { x: 8, y: RED[0] - extr, width: 112, height: EDGE - TOP, rx: 6, fill: col("stage-caption-bg", 0.55) }, zb);
  [[RED, "Red zone", "vascular", "anat-artery"], [RW, "Red–white", "partly", "fx-inflame"], [WHITE, "White zone", "avascular", "stage-ink"]].forEach(([[a, b], t1, t2, c]) => {
    el("rect", { x: 14, y: a + 3 - extr, width: 7, height: b - a - 6, rx: 3, fill: col(c, 0.9) }, zb);
    label(zb, 30, (a + b) / 2 - 2 - extr, t1, { size: 13, weight: 600 });
    label(zb, 30, (a + b) / 2 + 14 - extr, t2, { size: 12, color: col("stage-ink-2") });
  });
  // labels & load arrows
  switch (stage) {
    case "loaded": {
      const L = 26 + 22 * load;
      arrow(g, 228, 240, 228 - L, 240, { width: 5, head: 13, opacity: load });
      arrow(g, 760, 240, 760 + 0.5 * L, 240, { width: 5, head: 13, opacity: load });
      arrow(g, 470, 210, 470, 210 - 40 * load, { width: 4, head: 11, opacity: load });
      el("circle", { cx: 470, cy: 236, r: 11, fill: col("stage-bg", 0.6), stroke: col("fx-force"), "stroke-width": 2, opacity: load }, g);
      el("path", { d: "M462,228 L478,244 M478,228 L462,244", stroke: col("fx-force"), "stroke-width": 2, opacity: load }, g);
      label(g, 632, 412, "Axial load (⊗) is converted into\nhoop tension in circumferential fibres", { to: [700, ROWS[7]], anchor: "end", opacity: fade(0.1, 0.4, p) });
      label(g, 560, 76 + 120, "Pushed outward", { anchor: "middle", size: 13, color: col("fx-force"), opacity: load });
      break;
    }
    case "tear":
      label(g, 632, 412, "Radial tear (white zone) cuts the\nhoop fibres — load-bearing is lost", { to: [RT.x + 8, EDGE - 40], anchor: "end", opacity: fade(0.35, 0.7, p) });
      label(g, 560, 76 + 124, "Longitudinal tear (red zone)", { to: [400, (ROWS[2] + ROWS[3]) / 2 + 4], anchor: "middle", opacity: fade(0.1, 0.4, p) });
      break;
    case "red-zone-healing":
      label(g, 520, 412 - 210, "Vessels deliver clot, cells &\ngrowth factors → fibrovascular scar", { to: [330, (ROWS[2] + ROWS[3]) / 2], anchor: "start" });
      label(g, 632, 412, "Inner tear: no vessels reach it", { to: [RT.x + 8, EDGE - 30], anchor: "end", size: 13, color: col("stage-ink-2") });
      break;
    case "white-zone-no-healing":
      label(g, 632, 412, "No blood supply → no clot, no repair\ncells; the tear persists or extends", { to: [RT.x + 10, EDGE - rtLen + 10], anchor: "end" });
      label(g, 520, 202, "Red-zone tear healed (scar)", { to: [380, (ROWS[2] + ROWS[3]) / 2], anchor: "start", size: 13, color: col("fx-heal") });
      break;
    default:
      label(g, 632, 412, "Circumferential collagen bundles", { to: [640, ROWS[11]], anchor: "end" });
      label(g, 520, 76 + 128, "Radial tie fibres", { to: [592, 260], anchor: "start" });
      label(g, 400, 52 + 24, "Perimeniscal capillaries (periphery)", { anchor: "middle", size: 13, opacity: 0 });
  }
}

export default { id: "meniscus", scale: "≈ 500 µm", render };
