/**
 * Micro module: BURSA (longitudinal section: tendon above, bone below, bursa between them). OWNER: A9.
 * A flattened synovial-lined sac: thin fibrous outer wall, a 1–3-cell synovial intima (type A macrophage-like and
 * type B fibroblast-like synoviocytes) facing a thin film of synovial fluid that lets the tendon glide over bone.
 *   healthy → friction (repetitive gliding + compression of the sac between tendon and bone; lining irritated)
 *   → inflammation (synovial hyperplasia/thickening with villous folds, inflammatory cells, mast-cell degranulation,
 *   hypervascularity) → effusion (inflammatory fluid distends the sac and pushes the tendon away)
 *   → resolution (fluid resorbed, lining thins back towards 1–3 cells, vessels and cells regress).
 */
import { el, rng, lerp, clamp, ease, fade, seg, wave, col, mix, field, label, arrow, drawCell, capillary, collagenFibre,
  smoothPath, blobPath, scatter, radial, f } from "./index.js";

const BXL = 92, BXR = 708, BCX = 400, BCY = 234, TB = 176, BONE = 318;
const ORDER = ["healthy", "friction", "inflammation", "effusion", "resolution"];

const G = (() => {
  const r = rng("bursa-geo");
  const fat = scatter(r, 9, { x: 10, y: TB + 16, w: 780, h: BONE - TB - 30 }, { minDist: 40, avoid: (x, y) => x > BXL - 10 && x < BXR + 10 && Math.abs(y - BCY) < 50 });
  const areolar = Array.from({ length: 16 }, () => ({ x: r() * 800, y: TB + 10 + r() * (BONE - TB - 20), a: (r() - 0.5) * 50, l: 40 + r() * 50, s: Math.floor(r() * 1e6) }));
  const lining = []; for (let x = BXL + 26; x < BXR - 20; x += 25) lining.push({ x, k: r(), a: r() < 0.4 });
  const infl = Array.from({ length: 22 }, () => ({ u: r(), side: r() < 0.5 ? -1 : 1, d: r(), kind: r(), s: Math.floor(r() * 1e6) }));
  const floaters = Array.from({ length: 14 }, () => ({ u: r(), v: r(), kind: r(), s: Math.floor(r() * 1e6) }));
  const marrow = scatter(r, 22, { x: 0, y: BONE + 46, w: 800, h: 150 }, { minDist: 34 }).map(([x, y]) => ({ x, y, rr: 8 + r() * 9, s: Math.floor(r() * 1e6) }));
  return { fat, areolar, lining, infl, floaters, marrow };
})();

function params(stage, p) {
  const s = { slide: 0, squash: 0, irritate: 0, thick: 0, cells: 0, vess: 0, fluid: 0, lift: 0 };
  switch (stage) {
    case "friction": Object.assign(s, { slide: 1, squash: 0.55 + 0.35 * wave(p, 3), irritate: ease(seg(p, 0.2, 1)) }); break;
    case "inflammation": Object.assign(s, { squash: lerp(0.4, 0, ease(p)), irritate: 1, thick: lerp(0.1, 1, ease(seg(p, 0, 0.8))), cells: lerp(0.15, 1, ease(seg(p, 0.1, 0.9))), vess: lerp(0.1, 1, ease(seg(p, 0.1, 0.8))), fluid: lerp(0.05, 0.25, p) }); break;
    case "effusion": Object.assign(s, { irritate: 1, thick: 1, cells: 1, vess: 1, fluid: lerp(0.25, 1, ease(seg(p, 0, 0.85))), lift: lerp(0.15, 1, ease(seg(p, 0, 0.85))) }); break;
    case "resolution": Object.assign(s, { irritate: lerp(0.6, 0, ease(p)), thick: lerp(0.9, 0.15, ease(p)), cells: lerp(0.8, 0.05, ease(p)), vess: lerp(0.9, 0.15, ease(p)), fluid: lerp(0.9, 0.04, ease(seg(p, 0, 0.85))), lift: lerp(0.9, 0, ease(seg(p, 0, 0.85))) }); break;
    default: break;
  }
  return s;
}

/* sac geometry: lumen half-height & wall thickness along x */
function sac(s) {
  const lumH = lerp(5, 58, s.fluid) * (1 - 0.6 * s.squash);
  const wall = lerp(10, 25, s.thick);
  const outer = 3;
  const shape = (x) => { const u = (x - BCX) / ((BXR - BXL) / 2); return Math.sqrt(Math.max(0, 1 - u ** (s.fluid > 0.3 ? 2 : 4))); };
  const lumen = (x) => lumH * shape(x);
  const cy = BCY - 10 * s.lift;
  return { lumH, wall, outer, shape, lumen, cy };
}
const rim = (S, side, off, step = 15) => {
  const pts = [];
  for (let x = BXL; x <= BXR; x += step) {
    const sh = S.shape(x), y = S.cy + side * (S.lumen(x) + off * Math.max(sh, 0.35));
    pts.push([x, y]);
  }
  return pts;
};

function render(g, { stage, progress = 0 }) {
  const p = clamp(progress);
  const s = params(ORDER.includes(stage) ? stage : "healthy", p);
  const S = sac(s);
  field(g, { tint: "anat-fat", tintAmount: 0.04 });
  const slideX = s.slide ? 26 * Math.sin(p * Math.PI * 2 * 3) : 0;
  const tendonBot = TB - 44 * s.lift;
  const sqDrop = 10 * s.squash;

  // loose areolar tissue + fat between tendon and bone
  el("rect", { x: 0, y: tendonBot, width: 800, height: BONE - tendonBot, fill: mix("anat-fat", "stage-bg", 0.84) }, g);
  G.areolar.forEach((a) => {
    const th = (a.a * Math.PI) / 180, y = a.y - (a.y < BCY ? 30 * s.lift : 0);
    collagenFibre(g, [[a.x - Math.cos(th) * a.l / 2, y - Math.sin(th) * a.l / 2], [a.x + Math.cos(th) * a.l / 2, y + Math.sin(th) * a.l / 2]], { type: "III", width: 1.6, crimp: 1, color: mix("anat-fascia", "stage-bg", 0.55), seed: a.s });
  });
  G.fat.forEach(([x, y], i) => drawCell(g, "adipocyte", x, y - (y < BCY ? 30 * s.lift : 0), 13 * (1 - 0.25 * s.lift), { seed: 10 + i, aspect: 1 - 0.3 * s.lift, fill: mix("anat-fat", "stage-bg", 0.72) }));

  // bone (periosteum, cortex, trabecular)
  el("rect", { x: 0, y: BONE, width: 800, height: 160, fill: mix("anat-bone", "stage-bg", 0.58) }, g);
  el("rect", { x: 0, y: BONE + 6, width: 800, height: 30, fill: mix("anat-bone", "stage-bg", 0.4) }, g);
  G.marrow.forEach((m) => el("path", { d: blobPath(rng(m.s), m.x, m.y - 6, m.rr, { irregular: 0.35 }), fill: mix("anat-marrow", "stage-bg", 0.72) }, g));
  el("path", { d: `M0,${BONE + 2} L800,${BONE + 2}`, stroke: mix("anat-ligament-edge", "stage-bg", 0.2), "stroke-width": 4 }, g);

  // tendon (dense regular collagen), sliding in friction, lifted by effusion
  const ty0 = 58, ty1 = tendonBot + sqDrop;
  el("rect", { x: 0, y: ty0, width: 800, height: ty1 - ty0, fill: mix("anat-tendon", "stage-bg", 0.62) }, g);
  const rows = 6;
  for (let i = 0; i < rows; i++) {
    const y = lerp(ty0 + 9, ty1 - 9, i / (rows - 1));
    collagenFibre(g, [[-40 + slideX, y], [840 + slideX, y]], { crimp: 0.35, width: 8, wavelength: 40, amplitude: 2.2, color: mix("anat-tendon", "stage-bg", 0.22), edge: mix("anat-tendon-edge", "stage-bg", 0.4), seed: 30 + i, phase: i * 0.13 });
  }
  for (let i = 0; i < 9; i++) drawCell(g, "tenocyte", ((i * 97 + 40 + slideX) % 860) - 30, lerp(ty0 + 18, ty1 - 18, (i % 5) / 4) + 2, 6, { seed: 60 + i });

  // ---- the bursa
  const outerTop = rim(S, -1, S.wall + S.outer), outerBot = rim(S, 1, S.wall + S.outer);
  const inTop = rim(S, -1, 0), inBot = rim(S, 1, 0);
  const villi = (pts, side) => pts.map(([x, y], i) => [x, y + side * (s.thick * 4 * Math.sin(i * 1.9 + x * 0.05)) * S.shape(x)]);
  const vTop = villi(inTop, -1), vBot = villi(inBot, 1);
  const ends = (pts) => pts;
  const sacPath = smoothPath([...ends(outerTop), ...outerBot.slice().reverse()], true);
  // inflammatory hyperaemia halo
  if (s.irritate > 0.02 || s.vess > 0.02) el("ellipse", { cx: BCX, cy: S.cy, rx: 330, ry: 70 + 50 * s.fluid, fill: radial(g, "bu-heat", [[0, col("fx-inflame", 0.28)], [0.6, col("fx-inflame", 0.1)], [1, col("fx-inflame", 0)]]), opacity: f(Math.max(s.vess, s.irritate * 0.5)) }, g);
  // wall (fibrous outer layer + synovial subintima)
  el("path", { d: sacPath, fill: mix("anat-brain", "stage-bg", lerp(0.45, 0.3, s.thick)), stroke: col("anat-capsule"), "stroke-width": 2 }, g);
  // subsynovial capillaries
  const vk = 0.35 + 0.65 * s.vess;
  [[-1, 0.3], [1, 0.62], [-1, 0.78], [1, 0.2]].forEach(([side, u], i) => {
    if (i >= 2 && s.vess < 0.05) return;
    const x0 = lerp(BXL + 40, BXR - 160, u), pts = [];
    for (let x = x0; x <= x0 + 130; x += 26) pts.push([x, S.cy + side * (S.lumen(x) + (S.wall + 2) * 0.55 * Math.max(S.shape(x), 0.35))]);
    capillary(g, pts, { width: lerp(4.5, 6.5, s.vess), seed: 80 + i, sprouting: s.vess, sprouts: 1, sproutLength: 14, sproutSide: -side, flow: p * 0.6, rbcs: 3, opacity: i >= 2 ? s.vess : vk });
  });
  // lumen (synovial fluid)
  const lumPath = smoothPath([...vTop, ...vBot.slice().reverse()], true);
  el("path", { d: lumPath, fill: radial(g, "bu-fluid", [[0, col("anat-fluid", 0.75)], [1, col("anat-fluid", 0.5)]]), stroke: mix("anat-brain", "stage-ink", 0.25), "stroke-width": 1.2 }, g);
  // hyaluronan / fibrin strands + floating cells in an effusion
  if (s.fluid > 0.25) {
    const k = seg(s.fluid, 0.25, 0.8);
    G.floaters.forEach((c, i) => {
      const x = lerp(BXL + 70, BXR - 70, c.u), y = S.cy + (c.v - 0.5) * 1.3 * S.lumen(x);
      if (c.kind < 0.45) el("path", { d: `M${f(x - 12)},${f(y)} q8,-6 14,0 t14,0`, stroke: mix("anat-fluid", "stage-ink", 0.55, 0.7 * k), "stroke-width": 1.2, fill: "none" }, g);
      else drawCell(g, c.kind < 0.75 ? "neutrophil" : "macrophage", x, y, 5.5, { opacity: k * s.cells, seed: c.s, phase: p });
    });
  }
  // synovial lining cells (intima): type A (macrophage-like) & type B (fibroblast-like)
  const layers = 1 + Math.round(2 * s.thick);
  G.lining.forEach((c) => {
    for (const side of [-1, 1]) {
      const sh = S.shape(c.x);
      if (sh < 0.5) continue;
      for (let L = 0; L < layers; L++) {
        const y = S.cy + side * (S.lumen(c.x) + 5 + L * 7) + side * s.thick * 4 * Math.sin(c.x * 0.05);
        const x = c.x + (L % 2) * 11;
        const glow = s.irritate * (0.5 + 0.5 * c.k);
        el("ellipse", { cx: x, cy: y, rx: c.a ? 5.6 : 8.5, ry: c.a ? 4.6 : 3.4, fill: c.a ? mix("fx-inflame", "anat-brain", 0.65 - 0.25 * glow) : mix("fx-heal", "stage-ink", 0.5, 0.9) }, g);
        el("ellipse", { cx: x, cy: y, rx: c.a ? 2.4 : 3.8, ry: 1.9, fill: mix("anat-vein", "anat-brain-deep", 0.35) }, g);
      }
    }
  });
  // inflammatory cells in the thickened wall
  if (s.cells > 0.02) {
    const n = Math.round(G.infl.length * s.cells);
    for (let i = 0; i < n; i++) {
      const c = G.infl[i], x = lerp(BXL + 50, BXR - 50, c.u), sh = S.shape(x);
      const y = S.cy + c.side * (S.lumen(x) + (9 + c.d * (S.wall - 8)) * Math.max(sh, 0.4));
      const kind = c.kind < 0.35 ? "lymphocyte" : c.kind < 0.65 ? "neutrophil" : c.kind < 0.85 ? "macrophage" : "mast";
      drawCell(g, kind, x, y, kind === "lymphocyte" ? 4.2 : 6, { seed: c.s, phase: p, activated: kind === "mast" ? s.cells : 0 });
    }
  }
  // microtrauma marks during friction
  if (s.irritate > 0.05 && stage === "friction") {
    const r = rng("bu-mt");
    for (let i = 0; i < 6; i++) {
      const x = lerp(BXL + 90, BXR - 90, i / 5) + (r() - 0.5) * 30, y = S.cy - S.lumen(x) - 6;
      el("path", { d: `M${f(x - 5)},${f(y - 2)} l4,4 l3,-4 l4,4`, stroke: col("fx-injury", s.irritate), "stroke-width": 1.6, fill: "none" }, g);
    }
  }
  // forces
  if (s.slide) {
    const dir = Math.cos(p * Math.PI * 2 * 3) >= 0 ? 1 : -1;
    arrow(g, 400 - dir * 60, 78, 400 + dir * 60, 78, { width: 4, head: 12, color: col("fx-force") });
    arrow(g, 250, 64, 250, 112 + sqDrop, { width: 4, head: 11, opacity: 0.9 });
    arrow(g, 560, 64, 560, 112 + sqDrop, { width: 4, head: 11, opacity: 0.9 });
  }
  if (s.fluid > 0.5 && stage === "effusion") {
    const k = seg(s.fluid, 0.5, 1);
    arrow(g, BCX, S.cy - S.lumH * 0.4, BCX, S.cy - S.lumH + 4, { width: 3, head: 9, opacity: k, color: col("anat-fluid") });
    arrow(g, BCX + 150, S.cy + S.lumH * 0.2, BCX + 150, S.cy + S.lumen(BCX + 150) - 2, { width: 3, head: 9, opacity: k, color: col("anat-fluid") });
  }
  labels(g, stage, s, S, p);
}

function labels(g, stage, s, S, p) {
  const L = (x, y, text, to, o = {}) => label(g, x, y, text, { to, ...o });
  const topIn = (x) => [x, S.cy - S.lumen(x) - 3], botIn = (x) => [x, S.cy + S.lumen(x) + 3];
  switch (stage) {
    case "healthy": {
      const a = fade(0.52, 0.45, p), b = fade(0.45, 0.52, p);
      L(790, 104, "Tendon", [690, 120], { anchor: "end", opacity: a });
      L(18, 210, "Synovial\nlining", topIn(BXL + 70), { opacity: a });
      L(790, 262, "Thin film of\nsynovial fluid", [560, S.cy], { anchor: "end", opacity: a });
      L(18, 210, "Bursal wall", [BXL + 60, S.cy - S.lumen(BXL + 60) - 8], { opacity: b });
      L(790, 262, "Bone (periosteum)", [700, BONE + 3], { anchor: "end", opacity: b });
      L(790, 104, "Gliding surface", [600, S.cy - 2], { anchor: "end", opacity: b });
      break;
    }
    case "friction":
      L(400, 104, "Repetitive friction + compression", null, { anchor: "middle", opacity: fade(0.05, 0.25, p), color: col("fx-force"), weight: 600 });
      L(790, 262, "Lining irritated", topIn(600), { anchor: "end", opacity: fade(0.35, 0.6, p) });
      break;
    case "inflammation":
      L(18, 200, "Synovial\nthickening", topIn(BXL + 90), { opacity: fade(0.15, 0.4, p) });
      L(790, 104, "Inflammatory cells", [lerp(BXL + 50, BXR - 50, G.infl[3].u), S.cy - S.lumen(400) - 10], { anchor: "end", opacity: fade(0.35, 0.55, p) });
      L(790, 262, "Hypervascular wall", botIn(lerp(BXL + 40, BXR - 160, 0.62) + 60), { anchor: "end", opacity: fade(0.5, 0.7, p) });
      break;
    case "effusion":
      L(790, 262, "Effusion distends\nthe bursa", [560, S.cy + 10], { anchor: "end", opacity: fade(0.15, 0.4, p) });
      L(18, 200, "Tendon pushed\naway; pressure", [180, S.cy - S.lumen(180) - 18], { opacity: fade(0.45, 0.7, p) });
      break;
    case "resolution":
      L(790, 262, "Fluid resorbed", [580, S.cy], { anchor: "end", opacity: fade(0.2, 0.45, p) });
      L(18, 200, "Lining thins;\nvessels regress", topIn(BXL + 90), { opacity: fade(0.45, 0.7, p) });
      break;
    default: break;
  }
}

export default {
  id: "bursa",
  scale: "not to scale",
  labels: { friction: "Friction & compression", effusion: "Effusion (bursal swelling)" },
  render
};
