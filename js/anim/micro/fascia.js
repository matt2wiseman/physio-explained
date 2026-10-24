/**
 * Micro module: FASCIA (e.g. plantar fascia at its calcaneal origin). OWNER: A7.
 * View: longitudinal section — calcaneus (left) with a fibrocartilaginous enthesis, the fascia running to the right
 * (dense, aligned type I collagen with sparse fibroblasts), muscle (flexor digitorum brevis) above, heel fat pad below.
 *   healthy → microtears (repetitive tensile load; small fibre failures near the origin) → degeneration (myxoid change,
 *   disorganised collagen, fibroblast proliferation, neovessels, few inflammatory cells: "fasciosis" rather than "-itis")
 *   → thickening (the fascia thickens and the matrix stays disorganised; a calcaneal spur may form) → remodelling
 *   (progressive loading: collagen realigns, myxoid areas and vessels regress, thickness gradually normalises).
 */
import { el, rng, lerp, clamp, ease, fade, wave, col, mix, field, label, arrow, drawCell, collagenFibre, capillary,
  blobPath, smoothPath, f, scatter } from "./index.js";

const BX = 150, ENT = 196, ZONE = [200, 470];
const fg = (() => {
  const r = rng("fascia");
  const rows = Array.from({ length: 10 }, (_, i) => ({ u: (i + 0.5) / 10, seed: 20 + i, ph: r() * 0.2, tear: 215 + r() * 200, tearRow: r() < 0.6, t: r() * 0.7 }));
  const cells = Array.from({ length: 34 }, () => ({ x: ENT + 10 + r() * 600, u: r(), k: r(), seed: Math.floor(r() * 1e6) }));
  const extra = Array.from({ length: 22 }, () => ({ x: ZONE[0] + r() * (ZONE[1] - ZONE[0]), u: 0.1 + r() * 0.8, a: (r() - 0.5) * 120, L: 20 + r() * 30, seed: Math.floor(r() * 1e6), k: r() }));
  const myx = Array.from({ length: 9 }, () => ({ x: ZONE[0] + 20 + r() * (ZONE[1] - ZONE[0] - 40), u: 0.15 + r() * 0.7, rx: 18 + r() * 22, ry: 6 + r() * 6, seed: Math.floor(r() * 1e6) }));
  const fat = scatter(r, 18, { x: 160, y: 352, w: 640, h: 98 }, { minDist: 34 });
  const entCells = Array.from({ length: 10 }, (_, i) => ({ x: BX + 12 + (i % 2) * 18, u: (Math.floor(i / 2) + 0.5) / 5 }));
  return { rows, cells, extra, myx, fat, entCells };
})();

function render(g, { stage, progress: p }) {
  const k = ease(p);
  const order = ["healthy", "microtears", "degeneration", "thickening", "remodelling"];
  const si = Math.max(0, order.indexOf(stage));
  field(g, { tint: "anat-fascia", tintAmount: 0.05 });
  // ---- parameters
  const thick = si === 3 ? k : si === 4 ? 1 - 0.55 * k : 0;              // 0 → 1 thickening
  const FT = 160 - 34 * thick, FB = 288 + 30 * thick;
  const yAt = (u) => lerp(FT, FB, u);
  const tearK = si === 1 ? k : si === 2 || si === 3 ? 1 : si === 4 ? 1 - k : 0;
  const myxK = si === 2 ? k : si === 3 ? 1 : si === 4 ? 1 - 0.8 * k : 0;
  const disorder = si === 2 ? 0.6 * k : si === 3 ? 0.6 + 0.1 * k : si === 4 ? 0.7 * (1 - k) : 0;
  const vessK = si === 2 ? fade(0.3, 1, p) : si === 3 ? 1 : si === 4 ? 1 - 0.7 * k : 0;
  const spur = si === 3 ? fade(0.4, 1, p) : si === 4 ? 1 : 0;
  // ---- surroundings: muscle above, fat pad below
  el("rect", { x: 0, y: 56, width: 800, height: FT - 56, fill: mix("anat-muscle", "stage-bg", 0.68) }, g);
  let st = ""; for (let y = 64; y < FT - 6; y += 9) st += `M${BX + 4},${y} L800,${y + 2} `;
  el("path", { d: st, stroke: col("anat-muscle-edge", 0.6), "stroke-width": 1.4 }, g);
  el("rect", { x: 0, y: FB, width: 800, height: 450 - FB, fill: mix("anat-fat", "stage-bg", 0.75) }, g);
  fg.fat.forEach(([x, y]) => drawCell(g, "adipocyte", x, Math.max(y, FB + 26), 15));
  // ---- calcaneus + spur
  el("path", { d: `M0,56 L${BX},56 C${BX + 10},150 ${BX + 6},300 ${BX - 4},450 L0,450 Z`, fill: col("anat-bone"), stroke: col("anat-bone-edge"), "stroke-width": 2 }, g);
  const R = rng("calc");
  for (let i = 0; i < 9; i++) el("path", { d: blobPath(R, 20 + R() * 100, 80 + R() * 350, 12 + R() * 10, { irregular: 0.3 }), fill: mix("anat-marrow", "stage-bg", 0.4) }, g);
  if (spur > 0.01) el("path", { d: `M${BX + 4},${FT - 8} Q${BX + 40 * spur},${FT - 14} ${BX + 58 * spur},${FT - 4} Q${BX + 30 * spur},${FT + 2} ${BX + 4},${FT + 6} Z`, fill: col("anat-bone"), stroke: col("anat-bone-edge"), "stroke-width": 1.4 }, g);
  // ---- fascia band ground
  el("path", { d: `M${BX},${FT} L820,${FT} L820,${FB} L${BX},${FB} Z`, fill: mix("anat-fascia", "stage-bg", 0.72) }, g);
  // enthesis fibrocartilage
  el("rect", { x: BX, y: FT, width: ENT - BX, height: FB - FT, fill: mix("anat-cartilage", "stage-bg", 0.5) }, g);
  el("path", { d: smoothPath(Array.from({ length: 9 }, (_, i) => [BX + 22 + 3 * Math.sin(i * 1.7), lerp(FT, FB, i / 8)])), stroke: mix("anat-vein", "anat-brain-deep", 0.4), "stroke-width": 2, fill: "none" }, g);
  fg.entCells.forEach((c, i) => drawCell(g, "chondrocyte", c.x + (i % 2 ? 6 : 0), yAt(c.u), 4.5, { aspect: 0.8 }));
  // neovessels (degeneration)
  if (vessK > 0.01) [[240, 0.25], [330, 0.7], [420, 0.4]].forEach(([x, u], i) => capillary(g, [[x - 40, FT - 18], [x - 10, yAt(u) - 10], [x + 40 * vessK, yAt(u) + 6]], { width: 6, seed: 50 + i, rbcs: 2, opacity: vessK }));
  // myxoid (mucoid ground substance) pools
  fg.myx.forEach((m) => { if (myxK > 0.02) el("path", { d: blobPath(rng(m.seed), m.x, yAt(m.u), m.rx * (0.4 + 0.6 * myxK) * (1 + thick * 0.3), { ry: m.ry * (0.5 + 0.5 * myxK) * (1 + thick * 0.6), irregular: 0.3 }), fill: mix("anat-nucleus", "anat-vein", 0.25, 0.45 * myxK) }, g); });
  // ---- collagen rows
  const fibre = col("anat-fascia"), edge = mix("anat-ligament-edge", "stage-bg", 0.3);
  fg.rows.forEach((r) => {
    const y = yAt(r.u);
    const base = { type: "I", width: 9 * (1 + 0.25 * thick), crimp: si === 1 ? 0.2 + 0.3 * wave(p, 3) : 0.45, wavelength: 38, amplitude: 2.4, color: fibre, edge, seed: r.seed, phase: r.ph };
    const tk = r.tearRow ? clamp((tearK - r.t * (si === 1 ? 1 : 0)) * 2) : 0;
    if (tk > 0.02) {
      const gp = 3 + 8 * tk;
      collagenFibre(g, [[ENT - 22, y], [r.tear - gp, y]], { ...base, frayEnd: 0.6 * tk, frayLength: 14 });
      collagenFibre(g, [[r.tear + gp, y + 1], [830, y]], { ...base, frayStart: 0.6 * tk, frayLength: 14, seed: r.seed + 1 });
      if (si === 1) el("circle", { cx: r.tear, cy: y, r: 3 + 2 * tk, fill: col("fx-bleed", 0.8) }, g);
    } else collagenFibre(g, [[ENT - 22, y], [830, y]], base);
  });
  // disorganised fibres in the degenerative zone
  if (disorder > 0.02) fg.extra.forEach((e, i) => {
    if (i / fg.extra.length > disorder * 1.4) return;
    const a = (lerp(e.a, 0, si === 4 ? k : 0) * Math.PI) / 180, y = yAt(e.u);
    collagenFibre(g, [[e.x - Math.cos(a) * e.L / 2, y - Math.sin(a) * e.L / 2], [e.x + Math.cos(a) * e.L / 2, y + Math.sin(a) * e.L / 2]], { type: "III", width: 2.6, crimp: 0.8, aligned: 0.4, color: mix("anat-fascia", "fx-heal", 0.25), seed: e.seed });
  });
  // fibroblasts (more and plumper in degeneration)
  const nCells = Math.round(lerp(14, 34, si === 2 ? k : si === 3 ? 1 : si === 4 ? 1 - 0.6 * k : 0));
  fg.cells.slice(0, nCells).forEach((c, i) => {
    const plump = i >= 14 ? 1 : 0;
    drawCell(g, "fibroblast", c.x, yAt(c.u), plump ? 6.5 : 5.5, { angle: plump && si !== 4 ? (c.k - 0.5) * 70 : 0, seed: c.seed, fill: plump ? undefined : mix("anat-fascia", "stage-ink", 0.3, 0.85) });
  });
  // ---- load arrows (tension from the windlass mechanism)
  const loadA = (amp, txt, colr) => {
    arrow(g, 700, 76, 740 + 30 * amp, 76, { width: 4.5, head: 13, color: colr });
    label(g, 690, 81, txt, { anchor: "end", size: 13, color: colr || col("fx-force") });
  };
  switch (stage) {
    case "microtears": {
      loadA(wave(p, 4), "Repetitive tensile load");
      const r1 = fg.rows.find((r) => r.tearRow) || fg.rows[0];
      label(g, 632, 412, "Microtears near the calcaneal origin", { to: [r1.tear, yAt(r1.u)], anchor: "end", opacity: fade(0.15, 0.45, p) });
      break;
    }
    case "degeneration":
      label(g, 632, 412, "Myxoid change & disorganised collagen;\nneovessels; few inflammatory cells", { to: [fg.myx[2].x, yAt(fg.myx[2].u)], anchor: "end" });
      label(g, 400, 76, "Fasciosis — degeneration, not '-itis'", { anchor: "middle", size: 13, color: col("fx-inflame"), opacity: fade(0.3, 0.6, p) });
      break;
    case "thickening":
      el("path", { d: `M600,${FT} L600,${FB} M592,${FT} L608,${FT} M592,${FB} L608,${FB}`, stroke: col("fx-force"), "stroke-width": 2 }, g);
      label(g, 614, (FT + FB) / 2 + 5, "Thicker", { size: 13, color: col("fx-force"), weight: 600 });
      label(g, 632, 412, "Fascia thickens near its origin\n(seen on ultrasound)", { to: [520, FB], anchor: "end" });
      label(g, 380, 76, "Calcaneal spur may form (often incidental)", { to: [BX + 40, FT - 8], anchor: "start", size: 13, opacity: fade(0.4, 0.7, p) });
      break;
    case "remodelling": {
      const lvl = Math.min(2, Math.floor(p * 3));
      loadA(0.3 + lvl * 0.35, ["Low load", "Progressive load", "Higher load"][lvl]);
      label(g, 632, 412, "Collagen realigns; myxoid areas and\nvessels regress; thickness normalises", { to: [420, yAt(0.5)], anchor: "end", opacity: fade(0.2, 0.5, p) });
      break;
    }
    default:
      label(g, 90, 412, "Calcaneus", { anchor: "middle", size: 14, weight: 600 });
      label(g, 250, 76, "Fibrocartilaginous enthesis", { to: [BX + 24, FT + 10], anchor: "middle" });
      label(g, 632, 412, "Aligned type I collagen, sparse fibroblasts", { to: [560, yAt(0.65)], anchor: "end" });
      label(g, 600, 76, "Muscle (flexor digitorum brevis)", { anchor: "middle", size: 13, color: col("stage-ink-2") });
  }
  label(g, 790, FB + 22, "Heel fat pad", { anchor: "end", size: 12, color: col("stage-ink-2"), opacity: stage === "healthy" ? 1 : 0 });
}

export default { id: "fascia", scale: "≈ 200 µm", render };
