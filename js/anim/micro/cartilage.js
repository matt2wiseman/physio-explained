/**
 * Micro module: CARTILAGE (articular hyaline cartilage). OWNER: A7.
 * View: vertical section — synovial fluid (top), articular surface, superficial zone (flattened chondrocytes, tangential
 * collagen), middle zone (round cells, oblique fibres), deep zone (cell columns, radial fibres), tidemark, calcified
 * cartilage, subchondral bone & marrow. Collagen arcades (Benninghoff) drawn faintly; proteoglycans as a blue matrix tint.
 *   healthy → impact (surface compresses, pressurised fluid is squeezed out, surface fissures) → chondrocyte-death
 *   (apoptosis/necrosis spreading from the impact site; empty lacunae) → matrix-loss (proteoglycan depletion, collagen
 *   network disrupted, defect deepens to the tidemark) → fibrocartilage-fill (subchondral breach lets marrow cells in;
 *   defect fills with fibrocartilage — type I collagen, weaker than hyaline) → degeneration (fibrillation & clefts,
 *   chondrocyte clusters, thinning, tidemark duplication, subchondral sclerosis).
 */
import { el, rng, lerp, clamp, ease, fade, seg, wave, col, mix, field, label, arrow, drawCell, collagenFibre, blobPath, smoothPath,
  f, def, radial, dashedArrow, scatter } from "./index.js";

const SURF = 96, TIDE = 304, CALC = 328, BONE_Y = 368, CX = 400;
const cg = (() => {
  const r = rng("cartilage");
  const cells = [];
  for (let i = 0; i < 17; i++) cells.push({ x: 18 + i * 46 + r() * 16, y: 106 + r() * 16, aspect: 0.45, r: 7, zone: 0 });
  scatter(r, 24, { x: 14, y: 140, w: 772, h: 70 }, { minDist: 30 }).forEach(([x, y]) => cells.push({ x, y, aspect: 0.9, r: 7.5, zone: 1 }));
  for (let i = 0; i < 13; i++) { const x = 30 + i * 60 + r() * 14; for (let j = 0; j < 3; j++) cells.push({ x: x + (r() - 0.5) * 3, y: 232 + j * 21, aspect: 0.78, r: 6.6, zone: 2 }); }
  cells.forEach((c) => { c.seed = Math.floor(r() * 1e6); c.k = r(); });
  const pgs = scatter(r, 90, { x: 8, y: 112, w: 784, h: 186 }, { minDist: 16 }).map(([x, y]) => ({ x, y, a: r() * 180 }));
  const clefts = Array.from({ length: 9 }, (_, i) => ({ x: 120 + i * 68 + (r() - 0.5) * 20, depth: 0.5 + r() * 0.5, bend: (r() - 0.5) * 16 }));
  const fillFib = Array.from({ length: 22 }, () => ({ x: CX + (r() - 0.5) * 100, y: 120 + r() * 180, a: (r() - 0.5) * 140, k: r(), seed: Math.floor(r() * 1e6) }));
  const marrow = scatter(r, 18, { x: 0, y: 392, w: 800, h: 60 }, { minDist: 30 });
  return { cells, pgs, clefts, fillFib, marrow };
})();

function render(g, { stage, progress: p }) {
  const k = ease(p);
  const order = ["healthy", "impact", "chondrocyte-death", "matrix-loss", "fibrocartilage-fill", "degeneration"];
  const si = Math.max(0, order.indexOf(stage));
  field(g, { tint: "anat-cartilage", tintAmount: 0.05 });
  // ---- stage parameters
  const comp = si === 1 ? Math.sin(Math.PI * seg(p, 0, 0.7)) * (1 - 0.8 * seg(p, 0.35, 0.7)) + 0.12 * seg(p, 0.35, 0.7) : 0; // compression
  const fissure = si === 1 ? fade(0.3, 0.55, p) : si >= 2 ? 1 : 0;
  const crater = si === 3 ? ease(p) : si >= 4 ? 1 : 0;                 // defect depth 0–1 (to tidemark)
  const fill = si === 4 ? ease(p) : si === 5 ? 1 : 0;
  const thin = si === 5 ? 34 * k : 0;                                   // OA thinning
  const deplete = si === 3 ? lerp(0.15, 1, k) : si === 2 ? 0.15 * k : si >= 4 ? 1 : 0;
  const deathR = si === 2 ? 60 + 190 * k : si >= 3 ? 250 : 0;
  const W = 120, D = TIDE - SURF + 6;
  const craterDepth = (x) => { const u = (x - CX) / (W / 2); return Math.abs(u) >= 1 ? 0 : crater * D * (1 - u ** 4); };
  const compDepth = (x) => comp * 26 * Math.max(0, 1 - ((x - CX) / 170) ** 2);
  const surf = (x) => SURF + compDepth(x) + thin * (0.6 + 0.4 * Math.sin(x / 40)) + Math.max(0, craterDepth(x) * (1 - fill) + (fill > 0 && craterDepth(x) > 0 ? 6 * fill : 0));
  // ---- subchondral bone & marrow
  const scl = si === 5 ? k : 0;
  el("rect", { x: 0, y: CALC, width: 800, height: 450 - CALC, fill: mix("anat-marrow", "stage-bg", 0.6) }, g);
  gg_marrow(g);
  el("path", { d: `M0,${CALC} L800,${CALC} L800,${BONE_Y + 22 * scl} ${trabEdge(scl)} L0,${BONE_Y + 22 * scl} Z`, fill: col("anat-bone"), stroke: col("anat-bone-edge"), "stroke-width": 1.2 }, g);
  if (scl > 0.05) el("rect", { x: 0, y: CALC, width: 800, height: BONE_Y - CALC + 20 * scl, fill: col("anat-bone-edge", 0.25 * scl) }, g);
  // ---- synovial fluid
  el("rect", { x: 0, y: 56, width: 800, height: TIDE - 56, fill: mix("anat-fluid", "stage-bg", 0.72) }, g);
  // ---- cartilage matrix (surface → calcified layer)
  const top = []; for (let x = -10; x <= 810; x += 6) top.push([x, surf(x)]);
  const cartD = smoothPath(top) + ` L810,${CALC} L-10,${CALC} Z`;
  el("path", { d: cartD, fill: mix("anat-cartilage", "stage-bg", 0.42) }, g);
  const clip = def(g, "cart-clip", (defs, id) => { const c = el("clipPath", { id }, defs); el("path", { d: cartD }, c); });
  const cg2 = el("g", { "clip-path": clip }, g);
  // proteoglycan tint (deeper blue = more PG) with depletion from the injured surface
  el("rect", { x: 0, y: SURF - 30, width: 800, height: TIDE - SURF + 30, fill: mix("anat-cartilage", "anat-vein", 0.4, 0.42) }, cg2);
  if (deplete > 0.01) el("ellipse", { cx: CX, cy: SURF, rx: 80 + 260 * deplete, ry: 40 + 200 * deplete, fill: radial(g, "cart-dep", [[0, mix("stage-bg", "anat-cartilage", 0.5, 0.95)], [0.75, mix("stage-bg", "anat-cartilage", 0.5, 0.6)], [1, mix("stage-bg", "anat-cartilage", 0.5, 0)]]) }, cg2);
  // calcified cartilage
  el("rect", { x: 0, y: TIDE, width: 800, height: CALC - TIDE, fill: mix("anat-cartilage", "anat-bone-edge", 0.5, 0.9) }, cg2);
  // collagen arcades (Benninghoff)
  let arc = "";
  for (let xc = -40; xc <= 840; xc += 110) for (const w of [20, 36, 50]) arc += `M${xc - w},${TIDE} C${xc - w},${SURF + 70} ${xc - w * 0.4},${SURF + 14} ${xc},${SURF + 10} C${xc + w * 0.4},${SURF + 14} ${xc + w},${SURF + 70} ${xc + w},${TIDE} `;
  el("path", { d: arc, stroke: col("stage-ink", 0.16), "stroke-width": 1, fill: "none", "stroke-dasharray": deplete > 0.3 ? "6 5" : undefined }, cg2);
  el("path", { d: "M-10,102 L810,102 M-10,108 L810,108", stroke: col("stage-ink", 0.2), "stroke-width": 1 }, cg2);
  // proteoglycan glyphs
  cg.pgs.forEach((q) => {
    const dep = deplete > 0.01 && ((q.x - CX) / (80 + 260 * deplete)) ** 2 + ((q.y - SURF) / (40 + 200 * deplete)) ** 2 < 0.8;
    if (dep || q.y < surf(q.x) + 4) return;
    const gq = el("g", { transform: `translate(${f(q.x)},${f(q.y)}) rotate(${f(q.a)})` }, cg2);
    el("path", { d: "M-6,0 L6,0 M-4,0 l-1,-3.5 M-4,0 l1,3.5 M0,0 l-1,-3.5 M0,0 l1,3.5 M4,0 l-1,-3.5 M4,0 l1,3.5", stroke: mix("anat-vein", "anat-nucleus", 0.4, 0.75), "stroke-width": 0.9, fill: "none" }, gq);
  });
  // chondrocytes
  const clusters = si === 5 ? k : 0;
  cg.cells.forEach((c) => {
    const y = c.y + compDepth(c.x) * Math.max(0, 1 - (c.y - SURF) / 200);
    if (y < surf(c.x) + 6) return;
    if (crater > 0 && craterDepth(c.x) > 0 && y < SURF + craterDepth(c.x) + 6) return;
    const dist = Math.hypot(c.x - CX, (c.y - SURF) * 1.6);
    const dead = deathR > 0 ? clamp((deathR - dist) / 40) : 0;
    const asp = c.aspect * (1 - 0.35 * comp * Math.max(0, 1 - Math.abs(c.x - CX) / 170));
    drawCell(cg2, "chondrocyte", c.x, y, c.r, { aspect: asp, seed: c.seed, dead: si === 5 ? dead * 0.6 : dead });
    if (clusters > 0.2 && c.zone === 1 && c.k > 0.45) for (let j = 1; j <= Math.round(clusters * 3); j++) drawCell(cg2, "chondrocyte", c.x + (j % 2 ? 9 : -9) * j * 0.7, y + (j > 1 ? 8 : -7), 5, { seed: c.seed + j });
  });
  // fibrocartilage fill
  if (fill > 0.01) {
    const pts = []; for (let x = CX - W / 2; x <= CX + W / 2; x += 6) pts.push([x, Math.max(surf(x), SURF + craterDepth(x) * (1 - fill) + 6 * fill)]);
    const bot = []; for (let x = CX + W / 2; x >= CX - W / 2; x -= 6) bot.push([x, SURF + craterDepth(x) + 2]);
    const topFill = []; for (let x = CX - W / 2; x <= CX + W / 2; x += 6) topFill.push([x, SURF + 6 + D * (1 - fill) * (1 - ((x - CX) / (W / 2)) ** 4) + (si === 5 ? 6 * Math.sin(x / 9) * k : 2 * Math.sin(x / 7))]);
    const fd = smoothPath(topFill) + " " + bot.map(([x, y]) => `L${f(x)},${f(y)}`).join(" ") + " Z";
    el("path", { d: fd, fill: mix("anat-tendon", "anat-cartilage", 0.35, 0.95), stroke: mix("anat-tendon-edge", "stage-bg", 0.3), "stroke-width": 1 }, g);
    const fclip = def(g, "cart-fill", (defs, id) => { const c = el("clipPath", { id }, defs); el("path", { d: fd }, c); });
    const fg = el("g", { "clip-path": fclip }, g);
    cg.fillFib.forEach((q) => { const a = (q.a * Math.PI) / 180, L = 16 + q.k * 20; collagenFibre(fg, [[q.x - Math.cos(a) * L, q.y - Math.sin(a) * L], [q.x + Math.cos(a) * L, q.y + Math.sin(a) * L]], { type: "I", width: 3.2, crimp: 0.8, aligned: 0.4, color: mix("anat-tendon", "stage-ink", 0.2), edge: mix("anat-tendon-edge", "stage-bg", 0.2), seed: q.seed, highlight: false }); });
    cg.fillFib.slice(0, 10).forEach((q, i) => drawCell(fg, i % 2 ? "fibroblast" : "chondrocyte", q.x + 6, q.y + 10, 5, { angle: q.a, seed: q.seed }));
  }
  // subchondral breach + marrow cells entering (fibrocartilage-fill)
  if (si === 4) {
    for (const dx of [-26, 4, 30]) el("path", { d: `M${CX + dx},${CALC - 4} l${dx > 0 ? 4 : -3},14 l-3,12 l2,${BONE_Y - CALC - 20}`, stroke: mix("anat-marrow", "stage-bg", 0.3), "stroke-width": 6, fill: "none" }, g);
    for (let i = 0; i < 6; i++) { const m = clamp(p * 1.6 - i * 0.12); if (m > 0) drawCell(g, "msc", CX - 30 + i * 12, lerp(BONE_Y + 20, TIDE - 30 - i * 14, m), 4.5, { seed: 40 + i, opacity: 1 - fade(0.8, 1, m) }); }
    dashedArrow(g, CX + 60, BONE_Y + 30, CX + 40, TIDE + 6, { bend: 10, opacity: fade(0, 0.3, p) });
  }
  // tidemark (duplicates in OA)
  el("path", { d: smoothPath(Array.from({ length: 41 }, (_, i) => [i * 20, TIDE + 2 * Math.sin(i * 1.3)])), stroke: mix("anat-vein", "anat-brain-deep", 0.4), "stroke-width": 2.4, fill: "none" }, g);
  if (si === 5) el("path", { d: smoothPath(Array.from({ length: 41 }, (_, i) => [i * 20, TIDE - 14 + 2 * Math.sin(i * 1.1 + 1)])), stroke: mix("anat-vein", "anat-brain-deep", 0.4, k), "stroke-width": 2, fill: "none" }, g);
  // surface (lamina splendens)
  el("path", { d: smoothPath(top), stroke: col("stage-ink", 0.75 - 0.4 * deplete), "stroke-width": 1.8, fill: "none" }, g);
  // fissures & fibrillation clefts
  if (fissure > 0.01) for (const dx of [-36, -8, 22, 50]) { const x = CX + dx, y0 = surf(x); if (crater > 0.05 && Math.abs(dx) < W / 2 + 4) continue; el("path", { d: `M${f(x)},${f(y0)} l${dx % 3 ? 3 : -3},${f(12 * fissure + (si >= 2 ? 10 : 0))} l-2,${f(10 * fissure)}`, stroke: col("fx-injury", 0.8), "stroke-width": 1.8, fill: "none" }, g); }
  if (si === 5) cg.clefts.forEach((c) => {
    const x = c.x, y0 = surf(x), dep = (40 + 90 * c.depth) * k;
    if (Math.abs(x - CX) < W / 2 + 6) return;
    el("path", { d: `M${f(x - 5)},${f(y0)} Q${f(x + c.bend)},${f(y0 + dep * 0.6)} ${f(x)},${f(y0 + dep)} Q${f(x + c.bend * 0.5 + 3)},${f(y0 + dep * 0.6)} ${f(x + 5)},${f(y0)} Z`, fill: mix("anat-fluid", "stage-bg", 0.72) }, g);
    for (let j = -1; j <= 1; j += 2) el("path", { d: `M${f(x + j * 6)},${f(y0 - 1)} q${j * 4},-8 ${j * 2},-14`, stroke: mix("anat-cartilage", "stage-bg", 0.3), "stroke-width": 2, fill: "none" }, g);
  });
  // impactor (opposing surface) during impact
  if (si === 1) {
    const yb = SURF - 4 + compDepth(CX) - (1 - Math.min(1, comp * 3 + (p > 0.35 ? 1 : 0))) * 30;
    const prof = (x) => Math.max(58, yb - ((x - CX) / 300) ** 2 * 60 - 2);
    const d = smoothPath(Array.from({ length: 21 }, (_, i) => [i * 40, prof(i * 40)]));
    el("path", { d: d + " L800,56 L0,56 Z", fill: mix("anat-cartilage", "stage-bg", 0.45), stroke: col("stage-ink", 0.6), "stroke-width": 1.4 }, g);
    el("path", { d: smoothPath(Array.from({ length: 21 }, (_, i) => [i * 40, Math.max(56, prof(i * 40) - 16)])) + " L800,56 L0,56 Z", fill: col("anat-bone", 0.9) }, g);
    label(g, 180, 76, "Opposing joint surface", { anchor: "middle", size: 12, color: col("stage-ink-2") });
    arrow(g, CX, 58, CX, 58 + 4 + 20 * Math.min(1, comp * 1.5), { width: 5, head: 12 });
    // fluid droplets squeezed out sideways
    for (let i = 0; i < 8; i++) { const s = i % 2 ? 1 : -1, m = seg(p, 0.1 + i * 0.03, 0.6 + i * 0.03); if (m <= 0 || m >= 1) continue; el("circle", { cx: CX + s * (60 + 150 * m + i * 4), cy: SURF - 6 - 10 * Math.sin(m * Math.PI), r: 3.2, fill: col("anat-fluid", 1 - m * 0.6) }, g); }
  }
  // labels
  switch (stage) {
    case "impact":
      label(g, 680, 76, "Impact load", { anchor: "middle", size: 13, color: col("fx-force") });
      label(g, 180, 412, "Pressurised fluid is squeezed out", { to: [CX - 160, SURF - 8], anchor: "middle", opacity: fade(0.1, 0.35, p) });
      label(g, 632, 412, "Surface fissures at peak load", { to: [CX + 22, surf(CX + 22) + 12], anchor: "end", opacity: fade(0.35, 0.6, p) });
      break;
    case "chondrocyte-death":
      label(g, 632, 412, "Chondrocytes die near the impact\n(apoptosis & necrosis)", { to: [cg.cells.find((c) => c.zone === 1 && Math.abs(c.x - CX) < 70)?.x ?? CX, cg.cells.find((c) => c.zone === 1 && Math.abs(c.x - CX) < 70)?.y ?? 170], anchor: "end" });
      label(g, 180, 412, "No blood supply — cells can't\nbe replaced from outside", { anchor: "middle", size: 13, color: col("stage-ink-2") });
      break;
    case "matrix-loss":
      label(g, 632, 412, "Proteoglycans lost → matrix softens,\ncollagen network breaks down", { to: [CX + 120, 160], anchor: "end" });
      label(g, 180, 412, "Defect deepens toward bone", { to: [CX - 30, SURF + craterDepth(CX - 30) - 4], anchor: "middle", opacity: fade(0.3, 0.6, p) });
      break;
    case "fibrocartilage-fill":
      label(g, 180, 412, "Marrow cells enter through\nthe breached subchondral bone", { to: [CX - 26, CALC + 20], anchor: "middle" });
      label(g, 632, 412, "Fibrocartilage (type I collagen):\nweaker than hyaline cartilage", { to: [CX + 30, SURF + D * (1 - fill) + 30], anchor: "end", opacity: fade(0.2, 0.5, p) });
      break;
    case "degeneration":
      label(g, 180, 76, "Fibrillation & clefts", { to: [cg.clefts[1].x, surf(cg.clefts[1].x) + 20], anchor: "middle", opacity: fade(0.1, 0.4, p) });
      label(g, 632, 76, "Chondrocyte clusters", { to: [cg.cells.find((c) => c.zone === 1 && c.k > 0.45 && Math.abs(c.x - CX) > 100)?.x ?? 600, cg.cells.find((c) => c.zone === 1 && c.k > 0.45 && Math.abs(c.x - CX) > 100)?.y ?? 180], anchor: "end", opacity: fade(0.3, 0.6, p) });
      label(g, 632, 412, "Subchondral sclerosis", { to: [560, BONE_Y + 4], anchor: "end", opacity: fade(0.4, 0.7, p) });
      label(g, 180, 412, "Tidemark duplicates", { to: [120, TIDE - 14], anchor: "middle", opacity: fade(0.5, 0.8, p) });
      break;
    default:
      label(g, 180, 76, "Synovial fluid", { anchor: "middle", size: 13, color: col("anat-fluid") });
      label(g, 632, 76, "Superficial zone: flattened cells", { to: [cg.cells[12].x, cg.cells[12].y], anchor: "end" });
      label(g, 180, 412, "Deep zone: cell columns", { to: [cg.cells.find((c) => c.zone === 2).x, 262], anchor: "middle" });
      label(g, 632, 412, "Tidemark → subchondral bone", { to: [560, TIDE + 2], anchor: "end" });
  }
}
function trabEdge(scl) {
  let d = ""; for (let x = 800; x >= 0; x -= 40) d += `L${x},${f(BONE_Y + 22 * scl + (x / 40) % 2 * 14)} `;
  return d;
}
function gg_marrow(g) { cg.marrow.forEach(([x, y]) => drawCell(g, "adipocyte", x, y, 12)); }

export default { id: "cartilage", scale: "≈ 200 µm", render };
