/**
 * Micro module: TENDON-CONTINUUM (tendinopathy continuum, Cook & Purdam 2009). OWNER: A7.
 * View: longitudinal section of a tendon fascicle, load axis horizontal.
 *   healthy          aligned crimped type I collagen, sparse elongated tenocytes, little ground substance
 *   reactive         tenocytes round up & multiply, large proteoglycans bind water → matrix swells; collagen intact
 *   disrepair        matrix breakdown (collagen separates & disorganises), chondroid cells, neovessels with nerves
 *   degenerative     acellular zone (cell death), fragmented disordered matrix, many vessels — little reversibility
 *   load-adaptation  progressive loading: surrounding matrix realigns & proteoglycans fall; degenerative area persists
 * A small continuum bar (bottom-left) shows where the tissue sits: reactive → disrepair → degenerative.
 */
import { el, rng, lerp, clamp, ease, fade, wave, col, mix, field, label, arrow, drawCell, collagenFibre, capillary,
  radial, smoothPath, f } from "./index.js";

const X0 = -30, X1 = 830, CY = 232;
const Z = { cx: 430, cy: 232, rx: 150, ry: 92 };
const geo = (() => {
  const r = rng("tendon-continuum");
  const rows = []; for (let i = 0; i < 11; i++) rows.push({ y0: 117 + i * 23, seed: 50 + i * 13, phase: 0.06 * r(), w: 10 + r() * 2, dis: r(), brk: 120 + r() * 560 });
  const cells = []; for (let i = 0; i < 10; i++) for (let k = 0; k < 5; k++) cells.push({ gap: i, x: 50 + ((k + 0.2 + r() * 0.6) / 5) * 700, extra: false, seed: cells.length });
  for (let i = 0; i < 10; i++) for (let k = 0; k < 3; k++) cells.push({ gap: i, x: 60 + r() * 680, extra: true, seed: 900 + cells.length });
  const pgs = []; for (let i = 0; i < 10; i++) for (let k = 0; k < 7; k++) pgs.push({ gap: i, x: 30 + r() * 740, a: (r() - 0.5) * 50, s: 0.8 + r() * 0.5 });
  const frags = []; for (let i = 0; i < 34; i++) { const a = r() * Math.PI * 2, d = Math.sqrt(r()); frags.push({ x: Z.cx + Math.cos(a) * Z.rx * d * 0.92, y: Z.cy + Math.sin(a) * Z.ry * d * 0.9, a: r() * 180 - 90, L: 18 + r() * 34, seed: 700 + i }); }
  const vessels = [
    { pts: [[250, 470], [262, 400], [300, 330], [330, 270], [372, 238]] },
    { pts: [[560, -20], [548, 60], [520, 130], [500, 190], [470, 226]] },
    { pts: [[640, 470], [626, 400], [590, 330], [540, 290], [500, 268]] },
    { pts: [[180, -20], [196, 70], [240, 140], [300, 190], [345, 205]] }
  ];
  return { rows, cells, pgs, frags, vessels };
})();

// stage state: swell (matrix spacing), pg (proteoglycan), round (cell rounding), extra (cell count), dis (disorder),
// hole (degenerative zone 0–1), vess (neovessel growth), crimp
function state(stage, p) {
  const k = ease(p);
  switch (stage) {
    case "reactive": return { swell: k, pg: lerp(0.1, 1, k), round: k, extra: k, dis: 0, hole: 0, vess: 0, crimp: lerp(0.8, 0.5, k), bar: lerp(0.08, 0.2, k) };
    case "disrepair": return { swell: 1, pg: 1, round: 1, extra: 1, dis: lerp(0.1, 0.6, k), hole: 0, vess: lerp(0.1, 0.8, k), crimp: 0.45, bar: lerp(0.38, 0.55, k), brk: k };
    case "degenerative": return { swell: lerp(1, 0.9, k), pg: 0.9, round: 1, extra: 1, dis: 0.6, hole: lerp(0.15, 1, k), vess: lerp(0.8, 1, k), crimp: 0.4, bar: lerp(0.72, 0.88, k), brk: 1 };
    case "load-adaptation": return { swell: lerp(0.8, 0.25, k), pg: lerp(0.8, 0.3, k), round: lerp(0.9, 0.2, k), extra: lerp(0.8, 0.2, k), dis: lerp(0.5, 0.05, k), hole: lerp(1, 0.8, k), vess: lerp(1, 0.5, k), crimp: lerp(0.4, 0.75, k), bar: lerp(0.85, 0.85, k), brk: 1 - k, adapt: k };
    default: return { swell: 0, pg: 0.1, round: 0, extra: 0, dis: 0, hole: 0, vess: 0, crimp: 0.8 + 0.05 * wave(p), bar: -1 };
  }
}
const rowY = (row, sw) => CY + (row.y0 - CY) * (1 + 0.17 * sw);
const zoneHalf = (y, h) => { const t = (y - Z.cy) / (Z.ry * Math.max(h, 0.001)); return t * t >= 1 ? 0 : Z.rx * h * Math.sqrt(1 - t * t); };
const inZone = (x, y, h) => h > 0 && ((x - Z.cx) / (Z.rx * h)) ** 2 + ((y - Z.cy) / (Z.ry * h)) ** 2 < 1;

function cellShape(g, x, y, round, o = {}) {
  const rx = lerp(17, 8.5, round), ry = lerp(3.2, 7, round);
  const gg = el("g", { opacity: o.opacity }, g);
  if (o.dead) { el("ellipse", { cx: x, cy: y, rx: rx * 0.9, ry: ry * 0.9, fill: "none", stroke: col("stage-ink-2", 0.4), "stroke-dasharray": "2 2" }, gg); return; }
  if (round > 0.6) el("ellipse", { cx: x, cy: y, rx: rx * 1.25, ry: ry * 1.3, fill: mix("anat-cartilage", "stage-bg", 0.55, (round - 0.6) * 1.5) }, gg);
  el("ellipse", { cx: x, cy: y, rx, ry, fill: mix("anat-tendon", "stage-ink", 0.35, 0.85) }, gg);
  el("ellipse", { cx: x, cy: y, rx: rx * lerp(0.62, 0.48, round), ry: ry * lerp(0.62, 0.62, round), fill: mix("anat-vein", "anat-brain-deep", 0.35) }, gg);
}
function proteoglycan(g, x, y, a, s, op) {
  const gg = el("g", { transform: `translate(${f(x)},${f(y)}) rotate(${f(a)}) scale(${f(s)})`, opacity: op }, g);
  const c = mix("anat-nucleus", "anat-vein", 0.25);
  el("path", { d: "M-8,0 L8,0", stroke: c, "stroke-width": 1.4 }, gg);
  let d = ""; for (let i = -6; i <= 6; i += 3) d += `M${i},0 l-1.5,-4.5 M${i},0 l1.5,4.5 `;
  el("path", { d, stroke: c, "stroke-width": 1, fill: "none" }, gg);
}
function continuumBar(g, pos) {
  const x0 = 20, y0 = 404, w = 228;
  const gg = el("g", { "font-family": "system-ui, sans-serif" }, g);
  el("rect", { x: x0 - 6, y: y0 - 12, width: w + 12, height: 40, rx: 6, fill: col("stage-caption-bg") }, gg);
  const segs = [["Reactive", "fx-inflame"], ["Disrepair", "fx-force"], ["Degenerative", "fx-injury"]];
  segs.forEach(([t, c], i) => {
    el("rect", { x: x0 + (i * w) / 3 + 1, y: y0, width: w / 3 - 2, height: 6, rx: 3, fill: col(c, 0.75) }, gg);
    el("text", { x: x0 + (i + 0.5) * (w / 3), y: y0 + 20, "text-anchor": "middle", "font-size": 11, fill: col("stage-ink-2"), text: t }, gg);
  });
  if (pos >= 0) el("path", { d: `M${f(x0 + pos * w)},${y0 - 1} l-5,-7 h10 Z`, fill: col("stage-ink") }, gg);
}

function render(g, { stage, progress: p }) {
  const S = state(stage, p);
  field(g, { tint: "anat-tendon", tintAmount: 0.05 });
  const rowsY = geo.rows.map((r) => rowY(r, S.swell));
  // water / ground-substance haze between rows
  if (S.pg > 0.15) for (let i = 0; i < rowsY.length - 1; i++) el("rect", { x: 0, y: rowsY[i] + 4, width: 800, height: rowsY[i + 1] - rowsY[i] - 8, fill: col("anat-fluid", 0.1 * S.pg) }, g);
  // neovessels + nerves (behind the matrix)
  if (S.vess > 0.01) geo.vessels.forEach((v, i) => {
    const n = v.pts.length, upto = clamp(S.vess * (1 + i * 0.12)) * (n - 1);
    const pts = v.pts.slice(0, Math.floor(upto) + 1);
    const fr = upto - Math.floor(upto);
    if (fr > 0 && pts.length < n) { const a = v.pts[pts.length - 1], b = v.pts[pts.length]; pts.push([lerp(a[0], b[0], fr), lerp(a[1], b[1], fr)]); }
    if (pts.length < 2) return;
    capillary(g, pts, { width: 9, seed: 30 + i, rbcs: 3, opacity: S.adapt ? 1 - 0.5 * S.adapt : 1 });
    el("path", { d: smoothPath(pts.map(([x, y]) => [x + 9, y + 3])), stroke: col("anat-nerve", 0.85), "stroke-width": 1.6, fill: "none", "stroke-dasharray": "7 2" }, g);
  });
  // collagen rows
  geo.rows.forEach((row, i) => {
    const y = rowsY[i];
    const aligned = 1 - S.dis * (row.dis > 0.45 ? 1 : 0.4);
    const opts = { type: "I", crimp: S.crimp, aligned, width: row.w * (S.adapt ? 1 + 0.15 * S.adapt : 1), wavelength: 40, amplitude: 2.6, phase: row.phase, seed: row.seed,
      color: col("anat-tendon"), edge: mix("anat-tendon-edge", "stage-bg", 0.3) };
    const hw = zoneHalf(y, S.hole);
    const brk = S.brk && row.dis > 0.6 ? S.brk : 0;
    const pieces = [];
    if (hw > 4) pieces.push([X0, Z.cx - hw, 0, 0.8], [Z.cx + hw, X1, 0.8, 0]);
    else pieces.push([X0, X1, 0, 0]);
    pieces.forEach(([a, b, fs, fe], j) => {
      if (brk > 0.05 && row.brk > a + 30 && row.brk < b - 30) {
        const gp = 4 + 10 * brk;
        collagenFibre(g, [[a, y], [row.brk - gp, y]], { ...opts, frayStart: fs, frayEnd: 0.5 * brk, frayLength: 18, seed: row.seed + j * 3 });
        collagenFibre(g, [[row.brk + gp, y + 2], [b, y]], { ...opts, frayStart: 0.5 * brk, frayEnd: fe, frayLength: 18, seed: row.seed + j * 3 + 1 });
      } else collagenFibre(g, [[a, y], [b, y]], { ...opts, frayStart: fs, frayEnd: fe, frayLength: 20, seed: row.seed + j * 3 });
    });
  });
  // degenerative zone: fragmented, disordered matrix, acellular
  if (S.hole > 0.05) {
    el("ellipse", { cx: Z.cx, cy: Z.cy, rx: Z.rx * S.hole * 1.05, ry: Z.ry * S.hole * 1.05, fill: radial(g, "tc-zone", [[0, mix("anat-nucleus", "stage-bg", 0.6, 0.35)], [1, mix("anat-nucleus", "stage-bg", 0.6, 0)]]) }, g);
    geo.frags.forEach((fr, i) => {
      if (!inZone(fr.x, fr.y, S.hole)) return;
      const a = (lerp(fr.a, fr.a * 0.3, S.adapt || 0) * Math.PI) / 180, L = fr.L * 0.5;
      collagenFibre(g, [[fr.x - Math.cos(a) * L, fr.y - Math.sin(a) * L], [fr.x + Math.cos(a) * L, fr.y + Math.sin(a) * L]],
        { type: "III", width: 2.4, crimp: 0.9, aligned: 0.3, color: mix("anat-tendon", "stage-bg", 0.35), seed: fr.seed, frayEnd: 0.6, frayLength: 6 });
    });
  }
  // proteoglycans
  geo.pgs.forEach((q, i) => {
    const n = geo.pgs.length;
    const shown = i / n < S.pg + (inZone(q.x, CY, S.hole) ? 0.2 : 0);
    if (!shown) return;
    const y = (rowsY[q.gap] + rowsY[q.gap + 1]) / 2;
    proteoglycan(g, q.x, y, q.a, q.s * (0.8 + 0.4 * S.swell), clamp((S.pg - i / n) * 6));
  });
  // tenocytes
  geo.cells.forEach((c) => {
    if (c.extra && geo.cells.indexOf(c) % 3 >= Math.round(S.extra * 3)) return;
    const y = (rowsY[c.gap] + rowsY[c.gap + 1]) / 2 + (c.extra ? 0 : 0);
    const dead = inZone(c.x, y, S.hole * 0.98);
    cellShape(g, c.x, y, S.round * (c.extra ? 1 : 0.9), { dead, opacity: dead ? 0.8 : undefined });
  });
  continuumBar(g, S.bar);
  // labels
  const k = ease(p);
  switch (stage) {
    case "healthy":
      label(g, 632, 412, "Aligned, crimped type I collagen", { to: [600, rowsY[8]], anchor: "end" });
      label(g, 420, 76, "Sparse, elongated tenocytes", { to: [geo.cells[7].x, (rowsY[1] + rowsY[2]) / 2], anchor: "middle" });
      break;
    case "reactive":
      label(g, 230, 76, "Tenocytes round up & multiply", { to: [geo.cells[6].x, (rowsY[1] + rowsY[2]) / 2], anchor: "middle" });
      label(g, 632, 412, "Proteoglycans bind water →\nmatrix swells", { to: [geo.pgs[45].x, (rowsY[6] + rowsY[7]) / 2], anchor: "end", opacity: fade(0.15, 0.5, p) });
      label(g, 590, 76, "Collagen still intact & aligned", { anchor: "middle", size: 13, color: col("fx-heal") });
      break;
    case "disrepair":
      label(g, 590, 76, "Neovessels (with nerves) grow in", { to: [520, 130], anchor: "middle", opacity: fade(0.1, 0.4, p) });
      label(g, 632, 412, "Matrix breaks down —\ncollagen separates & disorganises", { to: [geo.rows[9].brk, rowsY[9]], anchor: "end" });
      label(g, 230, 76, "Chondroid, rounded cells", { to: [geo.cells[11].x, (rowsY[2] + rowsY[3]) / 2], anchor: "middle" });
      break;
    case "degenerative":
      label(g, 632, 412, "Acellular areas: cell death, fragmented\nand disordered matrix", { to: [Z.cx + 40, Z.cy + 30], anchor: "end", opacity: fade(0.1, 0.4, p) });
      label(g, 230, 76, "Abundant neovessels", { to: [300, 190], anchor: "middle" });
      label(g, 600, 76, "Little capacity to reverse", { anchor: "middle", size: 13, color: col("fx-injury") });
      break;
    case "load-adaptation": {
      const lvl = Math.min(2, Math.floor(p * 3)), L = 30 + lvl * 16;
      arrow(g, 340, 70, 340 - L, 70, { width: 3.5 + lvl, head: 12 + lvl * 2 });
      arrow(g, 460, 70, 460 + L, 70, { width: 3.5 + lvl, head: 12 + lvl * 2 });
      label(g, 400, 75, ["Isometric", "Isotonic", "Energy storage"][lvl], { anchor: "middle", size: 13, color: col("fx-force") });
      label(g, 632, 412, "Surrounding matrix realigns & thickens\n('treat the doughnut, not the hole')", { to: [660, rowsY[8]], anchor: "end", opacity: fade(0.1, 0.4, p) });
      label(g, 160, 76, "Degenerative area persists", { to: [Z.cx - Z.rx * 0.6, Z.cy - 30], anchor: "middle" });
      void k;
      break;
    }
  }
}

export default { id: "tendon-continuum", scale: "≈ 50 µm", render };
