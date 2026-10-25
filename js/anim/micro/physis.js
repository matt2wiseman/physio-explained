/**
 * Micro module: GROWTH PLATE / APOPHYSIS (e.g. tibial tuberosity in Osgood–Schlatter, calcaneal apophysis in Sever's,
 * apophyseal avulsion; also Salter–Harris separation). OWNER: A9.
 * View: longitudinal section. Tendon inserting into the apophysis (secondary ossification centre) at the top; the physis
 * below it with columns of chondrocytes: resting → proliferative (flat stacked "coins") → hypertrophic (swollen cells,
 * sparse matrix — mechanically the weakest) → provisional calcification; metaphyseal primary spongiosa at the bottom
 * (bone spicules on calcified septa, osteoblasts, invading capillary loops). A zone key sits on the right.
 *   healthy → traction (repetitive tendon pull loads the apophysis and physis in tension) → microdamage (microfractures/
 *   fissuring at the apophysis–cartilage junction) → inflammation (oedema, inflammatory cells, vessels) → separation
 *   (the plate fails through the hypertrophic zone; the apophysis lifts away; haematoma fills the gap) → healing
 *   (callus fills and bridges the gap, reossifies; columns re-form).
 */
import { el, rng, lerp, clamp, ease, fade, seg, wave, col, mix, field, label, arrow, drawCell, capillary, collagenFibre,
  smoothPath, blobPath, scatter, radial, def, NUC, f } from "./index.js";

const ORDER = ["healthy", "traction", "microdamage", "inflammation", "separation", "healing"];
const APO = [100, 160], ZR = [160, 186], ZP = [186, 246], ZH = [246, 296], ZC = [296, 318], SPLIT = 274, PX1 = 632;
const G = (() => {
  const r = rng("physis-geo");
  const marrowA = scatter(r, 16, { x: 0, y: APO[0] + 8, w: PX1, h: APO[1] - APO[0] - 14 }, { minDist: 34 }).map(([x, y]) => ({ x, y, rr: 7 + r() * 7, s: Math.floor(r() * 1e6) }));
  const spic = []; for (let x = 1.5; x < PX1 + 20; x += 30) spic.push({ x, len: 64 + r() * 60, s: r() });
  const cracks = Array.from({ length: 7 }, () => ({ x: 200 + r() * 360, y: APO[1] - 6 + r() * 34, a: (r() - 0.5) * 0.8, l: 16 + r() * 22 }));
  const infl = Array.from({ length: 16 }, () => ({ x: 170 + r() * 420, y: APO[0] - 10 + r() * 90, k: r(), s: Math.floor(r() * 1e6) }));
  const clot = Array.from({ length: 30 }, () => ({ x: r() * PX1, y: r(), k: r(), s: Math.floor(r() * 1e6) }));
  return { marrowA, spic, cracks, infl, clot };
})();

function params(stage, p) {
  const s = { pull: 0, elong: 0, damage: 0, infl: 0, gap: 0, heal: 0, bleed: 0 };
  switch (stage) {
    case "traction": s.pull = 0.35 + 0.65 * wave(p, 3); s.elong = 6 * s.pull; break;
    case "microdamage": Object.assign(s, { pull: 0.5 + 0.5 * wave(p, 2), damage: ease(seg(p, 0, 0.8)) }); s.elong = 5 * s.pull; break;
    case "inflammation": Object.assign(s, { pull: 0.2, damage: 1, infl: ease(seg(p, 0, 0.8)), elong: 1 }); break;
    case "separation": Object.assign(s, { pull: lerp(0.8, 1, p), damage: 1, infl: lerp(0.6, 0.3, p), gap: 30 * ease(seg(p, 0.1, 0.65)), bleed: fade(0.35, 0.9, p) }); break;
    case "healing": Object.assign(s, { damage: 1 - ease(p), infl: lerp(0.3, 0, p), gap: 30 * (1 - ease(seg(p, 0, 0.75))), heal: ease(seg(p, 0, 0.6)) * (1 - 0.8 * fade(0.75, 1, p)), bleed: 1 - ease(seg(p, 0, 0.5)) }); break;
    default: break;
  }
  return s;
}

/* zone patterns (columns share a 30 px x-period so they line up through the zones) */
function patterns(g) {
  const matrix = mix("anat-cartilage", "stage-bg", 0.52), septum = mix("anat-cartilage", "anat-vein", 0.35, 0.75);
  const cell = mix("anat-cartilage", "stage-ink", 0.4), nuc = NUC(0.95);
  const P = (key, w, h, build) => def(g, key, (defs, id) => { const pt = el("pattern", { id, patternUnits: "userSpaceOnUse", width: w, height: h }, defs); el("rect", { x: 0, y: 0, width: w, height: h, fill: matrix }, pt); build(pt); });
  return {
    rest: P("ph-rest", 30, 26, (pt) => { for (const [x, y] of [[8, 8], [23, 20]]) { el("ellipse", { cx: x, cy: y, rx: 4.6, ry: 3.8, fill: cell }, pt); el("circle", { cx: x, cy: y, r: 1.6, fill: nuc }, pt); } }),
    prol: P("ph-prol", 30, 8, (pt) => { el("rect", { x: 0, y: 0, width: 3, height: 8, fill: septum }, pt); el("ellipse", { cx: 16.5, cy: 4, rx: 10.5, ry: 2.6, fill: cell }, pt); el("ellipse", { cx: 16.5, cy: 4, rx: 3.2, ry: 1.4, fill: nuc }, pt); }),
    hyp: P("ph-hyp", 30, 21, (pt) => { el("rect", { x: 0, y: 0, width: 2.5, height: 21, fill: septum }, pt); el("ellipse", { cx: 16.2, cy: 10.5, rx: 12.6, ry: 9.4, fill: mix("stage-bg", "anat-cartilage", 0.3) }, pt); el("ellipse", { cx: 16.2, cy: 10.5, rx: 11, ry: 8, fill: mix("anat-cartilage", "stage-ink", 0.62, 0.8) }, pt); el("circle", { cx: 16.2, cy: 10.5, r: 2.6, fill: nuc }, pt); }),
    calc: P("ph-calc", 30, 22, (pt) => { el("rect", { x: 0, y: 0, width: 5, height: 22, fill: mix("anat-bone-edge", "stage-bg", 0.15) }, pt); for (let i = 0; i < 4; i++) el("circle", { cx: 1 + (i % 2) * 3, cy: 3 + i * 5, r: 1.1, fill: mix("anat-bone", "stage-ink", 0.3) }, pt); el("ellipse", { cx: 17, cy: 11, rx: 11, ry: 8, fill: mix("stage-bg", "anat-cartilage", 0.18) }, pt); el("circle", { cx: 19, cy: 13, r: 1.6, fill: mix("anat-vein", "stage-bg", 0.4) }, pt); })
  };
}

function render(g, { stage, progress = 0 }) {
  const p = clamp(progress);
  const s = params(ORDER.includes(stage) ? stage : "healthy", p);
  field(g, { tint: "anat-physis", tintAmount: 0.06 });
  const P = patterns(g);
  const lift = s.elong + s.gap;                    // upper segment (apophysis side) moves up by this

  // ---------- lower (fixed) segment: metaphysis + calcification + lower hypertrophic
  el("rect", { x: 0, y: ZC[1], width: 800, height: 140, fill: mix("anat-marrow", "stage-bg", 0.76) }, g);
  G.spic.forEach((sp, i) => {
    el("path", { d: `M${f(sp.x - 4)},${ZC[1]} L${f(sp.x - 2)},${f(ZC[1] + sp.len)} Q${f(sp.x)},${f(ZC[1] + sp.len + 6)} ${f(sp.x + 2)},${f(ZC[1] + sp.len)} L${f(sp.x + 5)},${ZC[1]} Z`, fill: mix("anat-bone", "stage-bg", 0.25), stroke: col("anat-bone-edge", 0.7), "stroke-width": 0.8 }, g);
    for (const [side, dy] of [[-1, 22 + sp.s * 20], [1, 34 + sp.s * 16]]) el("rect", { x: sp.x + side * 6 - 3, y: ZC[1] + dy, width: 6, height: 8, rx: 2, fill: mix("anat-vein", "stage-ink", 0.55, 0.9) }, g);
    const vx = sp.x + 15;
    if (vx < 800) el("path", { d: `M${f(vx - 5)},${ZC[1] + 70} L${f(vx - 5)},${ZC[1] + 8} Q${f(vx)},${ZC[1] - 1} ${f(vx + 5)},${ZC[1] + 8} L${f(vx + 5)},${ZC[1] + 70}`, stroke: mix("anat-artery", "stage-bg", 0.3), "stroke-width": 2, fill: "none", opacity: 0.6 }, g);
    void i;
  });
  el("rect", { x: 0, y: ZC[0], width: 800, height: ZC[1] - ZC[0], fill: P.calc }, g);
  el("rect", { x: 0, y: SPLIT - s.elong, width: 800, height: ZH[1] - SPLIT + s.elong, fill: P.hyp }, g);

  // ---------- gap: haematoma → callus
  if (s.gap > 0.5) {
    const y0 = SPLIT - lift, y1 = SPLIT - s.elong;
    el("rect", { x: 0, y: y0 - 1, width: 800, height: y1 - y0 + 2, fill: s.heal > 0.02 ? mix("fx-bleed", "fx-heal", clamp(s.heal * 1.4), 0.4 + 0.3 * s.bleed) : col("fx-bleed", 0.35 + 0.35 * s.bleed) }, g);
    G.clot.forEach((c) => {
      const y = lerp(y0 + 3, y1 - 3, c.y);
      if (c.k < 0.6 * s.bleed) drawCell(g, "rbc", c.x, y, 3.6, { seed: c.s });
      else if (s.heal > 0.1 && c.k > 0.55) drawCell(g, c.k > 0.8 ? "chondrocyte" : "fibroblast", c.x, y, 4, { seed: c.s, opacity: clamp(s.heal * 1.5) });
    });
  }

  // ---------- upper segment (moves with the apophysis)
  const up = el("g", { transform: lift ? `translate(0,${f(-lift)})` : undefined }, g);
  el("rect", { x: 0, y: ZH[0], width: 800, height: SPLIT - ZH[0], fill: P.hyp }, up);
  el("rect", { x: 0, y: ZP[0], width: 800, height: ZP[1] - ZP[0], fill: P.prol }, up);
  el("rect", { x: 0, y: ZR[0], width: 800, height: ZR[1] - ZR[0], fill: P.rest }, up);
  // apophysis (secondary ossification centre) with trabecular bone
  el("rect", { x: 0, y: -60, width: 800, height: APO[1] + 60, fill: mix("anat-bone", "stage-bg", 0.42) }, up);
  G.marrowA.forEach((m) => el("path", { d: blobPath(rng(m.s), m.x, m.y, m.rr, { irregular: 0.35 }), fill: mix("anat-marrow", "stage-bg", 0.62) }, up));
  el("path", { d: `M0,${APO[1]} L800,${APO[1]}`, stroke: col("anat-bone-edge"), "stroke-width": 2 }, up);
  // tendon inserting via fibrocartilage
  el("path", { d: `M230,${APO[0] - 40} L560,${APO[0] - 40} L540,${APO[0] + 6} L250,${APO[0] + 6} Z`, fill: mix("anat-cartilage", "stage-bg", 0.45) }, up);
  el("path", { d: `M190,-80 L600,-80 L560,${APO[0] - 38} L230,${APO[0] - 38} Z`, fill: mix("anat-tendon", "stage-bg", 0.55) }, up);
  for (let i = 0; i < 7; i++) {
    const u = (i + 0.5) / 7;
    collagenFibre(up, [[lerp(196, 594, u), -80], [lerp(236, 554, u), APO[0] - 34], [lerp(250, 540, u), APO[0] + 4]], { crimp: lerp(0.45, 0.05, s.pull), width: 7, wavelength: 34, amplitude: 2, color: mix("anat-tendon", "stage-bg", 0.15), edge: mix("anat-tendon-edge", "stage-bg", 0.35), seed: 40 + i, highlight: false });
  }
  for (let i = 0; i < 6; i++) drawCell(up, "chondrocyte", 280 + i * 48, APO[0] - 14 + (i % 2) * 10, 4, { seed: 70 + i, aspect: 0.8 });
  // microdamage: fissures at the apophysis–cartilage junction / enthesis
  if (s.damage > 0.02) G.cracks.forEach((c, i) => {
    if (i / G.cracks.length > s.damage) return;
    const dx = Math.cos(c.a) * c.l, dy = Math.sin(c.a) * c.l;
    el("path", { d: `M${f(c.x - dx / 2)},${f(c.y - dy / 2)} l${f(dx * 0.3)},${f(dy * 0.3 + 3)} l${f(dx * 0.35)},${f(dy * 0.35 - 4)} l${f(dx * 0.35)},${f(dy * 0.35 + 2)}`, stroke: col("fx-injury"), "stroke-width": 2, fill: "none", "stroke-linecap": "round" }, up);
    el("circle", { cx: c.x, cy: c.y + 3, r: 2.4, fill: col("fx-bleed", 0.8) }, up);
  });
  // inflammation: oedema, vessels and cells around the insertion
  if (s.infl > 0.02) {
    el("ellipse", { cx: 395, cy: APO[0] + 40, rx: 280, ry: 90, fill: radial(up, "ph-oed", [[0, col("fx-inflame", 0.32)], [0.55, col("fx-oedema")], [1, col("anat-fluid", 0)]]), opacity: f(s.infl) }, up);
    capillary(up, [[150, APO[0] + 30], [300, APO[0] + 44], [460, APO[0] + 26], [640, APO[0] + 40]], { width: 7, seed: 9, sprouting: s.infl, sprouts: 3, sproutLength: 22, flow: p * 0.6, opacity: s.infl });
    const n = Math.round(G.infl.length * s.infl);
    for (let i = 0; i < n; i++) { const c = G.infl[i]; drawCell(up, c.k < 0.5 ? "neutrophil" : c.k < 0.8 ? "macrophage" : "mast", c.x, c.y, 6, { seed: c.s, phase: p, activated: s.infl }); }
  }
  // separation line (through the hypertrophic zone)
  if (s.gap > 0.5 && s.heal < 0.5) el("path", { d: `M0,${f(SPLIT - lift)} L800,${f(SPLIT - lift)}`, stroke: col("fx-injury", 0.8), "stroke-width": 1.6, "stroke-dasharray": "6 4" }, g);

  // forces
  if (s.pull > 0.02) {
    arrow(g, 395, 84 - lift, 395, 58 - lift * 0.2 - 10 * s.pull, { width: 5, head: 13, opacity: clamp(s.pull * 1.3) });
    if (stage === "traction" || stage === "microdamage") for (const x of [140, 560]) {
      arrow(g, x, ZH[0] - 6 - s.elong, x, ZH[0] - 30 - s.elong, { width: 3, head: 9, opacity: 0.7 * s.pull });
      arrow(g, x, ZH[1] + 4, x, ZH[1] + 28, { width: 3, head: 9, opacity: 0.7 * s.pull });
    }
  }
  zoneKey(g, s, lift);
  labels(g, stage, s, p, lift);
}

function zoneKey(g, s, lift) {
  const x0 = PX1 + 4, w = 800 - x0;
  el("rect", { x: x0, y: 56, width: w, height: 300, fill: col("stage-caption-bg") }, g);
  const rows = [["Apophysis (bone)", APO[0] + 10, APO[1], true], ["Resting zone", ZR[0], ZR[1], true], ["Proliferative zone", ZP[0], ZP[1], true],
    ["Hypertrophic zone", ZH[0], ZH[1], "split"], ["Calcification zone", ZC[0], ZC[1], false], ["Metaphysis", ZC[1], 356, false]];
  rows.forEach(([name, a, b, upper]) => {
    const ya = a - (upper ? lift : 0), yb = upper === "split" ? b : b - (upper ? lift : 0);
    const weak = name.startsWith("Hyper") && s.gap > 0.5;
    el("path", { d: `M${x0 + 10},${f(ya + 2)} L${x0 + 6},${f(ya + 2)} L${x0 + 6},${f(yb - 2)} L${x0 + 10},${f(yb - 2)}`, stroke: col(weak ? "fx-injury" : "stage-ink", 0.7), "stroke-width": 1.4, fill: "none" }, g);
    el("text", { x: x0 + 16, y: f((ya + yb) / 2 + 4), "font-size": 12.5, "font-weight": weak ? 700 : 500, fill: weak ? col("fx-injury") : col("stage-ink", 0.9), text: name }, g);
  });
}

function labels(g, stage, s, p, lift) {
  const L = (x, y, text, to, o = {}) => label(g, x, y, text, { to, ...o });
  switch (stage) {
    case "healthy": {
      const a = fade(0.52, 0.45, p), b = fade(0.45, 0.52, p);
      L(18, 76, "Tendon", [240, 70], { opacity: a });
      L(18, 222, "Columns of\nchondrocytes", [108, 215], { opacity: a });
      L(18, 76, "Enthesis (fibrocartilage)", [270, APO[0] - 18], { opacity: b });
      L(18, 360, "Bone laid down on\ncalcified cartilage", [182, ZC[1] + 40], { opacity: b });
      break;
    }
    case "traction":
      L(420, 76, "Repetitive tendon traction", null, { opacity: fade(0.05, 0.25, p), color: col("fx-force"), weight: 600 });
      L(18, 360, "Physis loaded in tension", [140, ZH[1] + 18], { opacity: fade(0.35, 0.6, p) });
      break;
    case "microdamage":
      L(18, 76, "Microfractures at the\napophysis–cartilage junction", [G.cracks[0].x, G.cracks[0].y - lift], { opacity: fade(0.2, 0.45, p) });
      break;
    case "inflammation":
      L(18, 76, "Oedema & inflammatory cells", [G.infl[2].x, G.infl[2].y - lift], { opacity: fade(0.15, 0.4, p) });
      L(18, 360, "Pain with loading", [395, APO[0] + 60], { opacity: fade(0.5, 0.7, p) });
      break;
    case "separation":
      L(18, 360, "Fails through the hypertrophic\nzone (weakest layer)", [150, SPLIT - lift / 2], { opacity: fade(0.2, 0.45, p) });
      L(18, 76, "Apophysis pulled away", [200, APO[1] - lift - 12], { opacity: fade(0.45, 0.7, p) });
      break;
    case "healing":
      L(18, 360, "Callus bridges the gap\nand reossifies", [170, SPLIT - (s.elong + s.gap) / 2], { opacity: fade(0.1, 0.35, p) * fade(0.85, 0.7, p) });
      L(18, 360, "Columns re-form", [150, ZP[0] + 30], { opacity: fade(0.75, 0.9, p) });
      break;
    default: break;
  }
}

export default {
  id: "physis",
  scale: "≈ 50 µm",
  labels: { separation: "Separation (physeal failure)", healing: "Healing" },
  render
};
