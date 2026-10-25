/**
 * Micro module: JOINT CAPSULE & SYNOVIUM (e.g. glenohumeral capsule / axillary recess in adhesive capsulitis). OWNER: A9.
 * View: section through the inferior capsule. Articular cartilage on bone at the top; the capsule hangs below it as a
 * redundant fold (recess) whose slack allows range of motion. Layers from the joint outward: synovial intima (1–3 cells
 * of type A/B synoviocytes) → vascular areolar subintima → fibrous capsule (crimped, aligned type I collagen + fibroblasts).
 *   healthy → inflammation (synovitis: lining hyperplasia, hypervascularity, lymphocytes/macrophages, small effusion)
 *   → fibrosis (fibroblasts become α-SMA myofibroblasts and lay down disorganised type III collagen; capsule thickens)
 *   → contracture (myofibroblast contraction: thickened, shortened capsule, recess obliterated, range lost)
 *   → remodelling (collagen realigns towards type I, myofibroblasts regress, slack and extensibility gradually return).
 * A small "joint range" bar (bottom-left) tracks capsular extensibility.
 */
import { el, rng, lerp, clamp, ease, fade, seg, wave, col, mix, field, label, arrow, drawCell, capillary, collagenFibre,
  def, f } from "./index.js";

const ORDER = ["healthy", "inflammation", "fibrosis", "contracture", "remodelling"];
const XA = -20, XB = 820;
const G = (() => {
  const r = rng("capsule-geo");
  const syn = []; for (let x = XA + 30; x < XB - 20; x += 22) syn.push({ x, a: r() < 0.4, k: r() });
  const fib = Array.from({ length: 10 }, (_, i) => ({ u: (i + 0.3 + r() * 0.4) / 10, d: 0.6 + r() * 0.35, s: Math.floor(r() * 1e6) }));
  const myo = Array.from({ length: 18 }, (_, i) => ({ u: (i + 0.2 + r() * 0.6) / 18, d: 0.25 + r() * 0.7, j: (r() - 0.5) * 70, s: Math.floor(r() * 1e6) }));
  const t3 = Array.from({ length: 34 }, () => ({ u: 0.04 + r() * 0.92, d: 0.15 + r() * 0.8, a: (r() - 0.5) * 120, l: 22 + r() * 22, s: Math.floor(r() * 1e6) }));
  const inf = Array.from({ length: 18 }, () => ({ u: 0.06 + r() * 0.88, d: 0.08 + r() * 0.3, k: r(), s: Math.floor(r() * 1e6) }));
  return { syn, fib, myo, t3, inf };
})();

function params(stage, p) {
  const s = { infl: 0, fib: 0, con: 0, rem: 0, D: 1, T: 60, vess: 0.3, rom: 1, effu: 0 };
  switch (stage) {
    case "inflammation": { const k = ease(seg(p, 0, 0.8)); Object.assign(s, { infl: lerp(0.1, 1, k), vess: lerp(0.35, 1, k), T: lerp(60, 74, k), D: 1.04, effu: k, rom: lerp(0.95, 0.7, k) }); break; }
    case "fibrosis": { const k = ease(seg(p, 0, 0.85)); Object.assign(s, { infl: lerp(1, 0.35, k), fib: lerp(0.1, 1, k), vess: lerp(1, 0.6, k), T: lerp(74, 92, k), D: lerp(1, 0.6, k), effu: 1 - k, rom: lerp(0.68, 0.45, k) }); break; }
    case "contracture": { const k = ease(seg(p, 0, 0.85)); Object.assign(s, { infl: 0.25, fib: 1, con: lerp(0.1, 1, k), vess: 0.45, T: lerp(92, 104, k), D: lerp(0.6, 0.06, k), rom: lerp(0.45, 0.22, k) }); break; }
    case "remodelling": { const k = ease(p); Object.assign(s, { fib: 1, con: 1 - k, rem: k, vess: lerp(0.45, 0.3, k), T: lerp(104, 72, k), D: lerp(0.06, 0.7, k), rom: lerp(0.22, 0.8, k) }); break; }
    default: break;
  }
  return s;
}

/* geometry: bone/cartilage surface and the capsule's inner (synovial) surface */
const boneY = (x) => 70 + 34 * (1 - ((x - 400) / 440) ** 2);
const cartY = (x) => boneY(x) + 16;
const foldK = (x) => { const u = clamp((x - 90) / 620); return Math.sin(Math.PI * u) ** 2; };
function curves(s) {
  const depth = 112 * s.D + 10 * s.effu;
  const inner = (x) => cartY(x) + 7 + depth * foldK(x) - 6 * (1 - foldK(x)) * 0;
  const pts = []; for (let x = XA; x <= XB; x += 12) pts.push([x, inner(x)]);
  const N = pts.map((q, i) => {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1;
    return [-dy / L, dx / L];   // points outward (down / away from the joint)
  });
  const off = (d) => pts.map(([x, y], i) => [x + N[i][0] * d, y + N[i][1] * d]);
  const at = (u, d) => { const i = clamp(Math.round(u * (pts.length - 1)), 0, pts.length - 1); return [pts[i][0] + N[i][0] * d, pts[i][1] + N[i][1] * d, Math.atan2(N[i][0], -N[i][1]) * 180 / Math.PI]; };
  return { pts, off, at, inner };
}
const band = (A, B) => "M" + [...A, ...B.slice().reverse()].map(([x, y]) => `${f(x)},${f(y)}`).join("L") + "Z";

function render(g, { stage, progress = 0 }) {
  const p = clamp(progress);
  const s = params(ORDER.includes(stage) ? stage : "healthy", p);
  const C = curves(s);
  field(g, { tint: "anat-capsule", tintAmount: 0.05 });
  const intima = lerp(7, 16, s.infl) * (1 - 0.4 * s.fib * (1 - s.infl));
  const sub = lerp(16, 30, s.infl) + 10 * s.fib;
  const T = Math.max(s.T, intima + sub + 30);
  const fibrous = T - intima - sub;

  // periarticular tissue below the capsule
  // periarticular fat (honeycomb of adipocytes as a pattern — cheap to draw)
  const outerPts = C.off(T + 1);
  const fatPath = "M" + outerPts.map(([x, y]) => `${f(x)},${f(y)}`).join("L") + "L830,470L-30,470Z";
  el("path", { d: fatPath, fill: mix("anat-fat", "stage-bg", 0.88) }, g);
  el("path", { d: fatPath, fill: def(g, "cap-fat", (defs, id) => {
    const pt = el("pattern", { id, patternUnits: "userSpaceOnUse", width: 34, height: 58.9 }, defs);
    for (const [cx, cy] of [[0, 0], [34, 0], [0, 58.9], [34, 58.9], [17, 29.45]]) {
      el("circle", { cx, cy, r: 15.6, fill: mix("anat-fat", "stage-bg", 0.8), stroke: mix("anat-fat", "stage-bg", 0.6), "stroke-width": 1.2 }, pt);
      el("ellipse", { cx: cx + 10, cy: cy - 9, rx: 2.4, ry: 1.4, fill: mix("anat-vein", "anat-brain-deep", 0.35, 0.6) }, pt);
    }
  }) }, g);
  // joint cavity (synovial fluid) between cartilage and synovium
  const cav = []; for (let x = XA; x <= XB; x += 12) cav.push([x, cartY(x) - 2]);
  el("path", { d: band(cav, C.pts), fill: col("anat-fluid", 0.28 + 0.12 * s.effu) }, g);
  // capsule layers
  const L0 = C.pts, L1 = C.off(intima), L2 = C.off(intima + sub), L3 = C.off(T);
  el("path", { d: band(L2, L3), fill: mix("anat-capsule", "stage-bg", lerp(0.5, 0.38, s.fib)), stroke: mix("anat-capsule", "stage-bg", 0.2), "stroke-width": 1.5 }, g);
  el("path", { d: band(L1, L2), fill: mix("anat-brain", "stage-bg", lerp(0.72, 0.55, s.infl)) }, g);
  el("path", { d: band(L0, L1), fill: mix("anat-brain", "stage-bg", lerp(0.5, 0.32, s.infl)) }, g);
  if (s.infl > 0.05) el("path", { d: band(L0, L2), fill: col("fx-inflame", 0.16 * s.infl) }, g);

  // fibrous layer: aligned crimped type I bundles (straightened & thickened in contracture)
  const rows = 4;
  const crimp = lerp(0.7, 0.15, Math.max(s.con, s.fib * 0.4)) + 0.4 * s.rem;
  for (let i = 0; i < rows; i++) {
    const path = C.off(intima + sub + (i + 0.5) * (fibrous / rows)).filter((_, k) => k % 2 === 0);
    collagenFibre(g, path, { crimp, width: lerp(6, 8, s.fib), wavelength: 30, amplitude: 3, seed: 10 + i, phase: i * 0.21,
      color: mix("anat-ligament", "stage-bg", 0.2), edge: mix("anat-ligament-edge", "stage-bg", 0.35) });
  }
  // type III collagen laid down by myofibroblasts (disorganised → realigned in remodelling)
  const t3k = s.fib;
  if (t3k > 0.02) {
    const n = Math.round(G.t3.length * t3k);
    for (let i = 0; i < n; i++) {
      const c = G.t3[i], [x, y, ang] = C.at(c.u, intima + 4 + c.d * (T - intima - 8));
      const a = ((ang + lerp(c.a, 0, s.rem)) * Math.PI) / 180, L = c.l;
      collagenFibre(g, [[x - Math.cos(a) * L / 2, y - Math.sin(a) * L / 2], [x + Math.cos(a) * L / 2, y + Math.sin(a) * L / 2]],
        s.rem > 0.6 ? { type: "I", width: 3, crimp: 0.5, aligned: 1, seed: c.s, color: mix("anat-ligament", "fx-heal", 0.3), highlight: false }
          : { type: "III", width: 2.2, crimp: 0.9, aligned: 0.3 + 0.7 * s.rem, seed: c.s });
    }
  }
  // capillaries in the subintima
  [[0.12, 0.38], [0.42, 0.62], [0.66, 0.9]].forEach(([u0, u1], i) => {
    const pts = []; for (let k = 0; k <= 6; k++) { const [x, y] = C.at(lerp(u0, u1, k / 6), intima + sub * 0.55); pts.push([x, y]); }
    capillary(g, pts, { width: lerp(5, 7.5, s.vess), seed: 40 + i, sprouting: clamp((s.vess - 0.4) * 1.6), sprouts: 2, sproutLength: 16, flow: p * 0.7, rbcs: 4, opacity: clamp(0.35 + s.vess) });
  });
  // fibroblasts (healthy) → myofibroblasts (fibrosis/contracture)
  const myoK = s.fib * (1 - 0.75 * s.rem);
  G.fib.forEach((c, i) => {
    const [x, y, ang] = C.at(c.u, intima + sub + c.d * fibrous * 0.9);
    drawCell(g, "fibroblast", x, y + (i % 2 ? -fibrous * 0.18 : 0), 6.5, { angle: ang, seed: c.s, opacity: 1 - 0.6 * s.fib });
  });
  if (myoK > 0.02) G.myo.forEach((c, i) => {
    if (i / G.myo.length > myoK * 1.05) return;
    const [x, y, ang] = C.at(c.u, intima + 6 + c.d * (T - intima - 12));
    drawCell(g, "myofibroblast", x, y, 7.5, { angle: ang + c.j * (1 - s.con) * (1 - s.rem), seed: c.s, phase: s.con * wave(p, 2) * 0.3 });
  });
  // synovial intima: type A (macrophage-like) & type B (fibroblast-like) synoviocytes; hyperplasia in synovitis
  const layers = 1 + Math.round(2 * s.infl);
  G.syn.forEach((c) => {
    for (let L = 0; L < layers; L++) {
      const xx = c.x + (L % 2) * 10;
      const [x, y, ang] = C.at((xx - XA) / (XB - XA), 3.5 + L * 5.2);
      el("ellipse", { cx: x, cy: y, rx: c.a ? 4.2 : 6.2, ry: c.a ? 3.6 : 2.5, transform: `rotate(${f(ang)} ${f(x)} ${f(y)})`, fill: c.a ? mix("fx-inflame", "anat-brain", 0.6 - 0.2 * s.infl) : mix("fx-heal", "stage-ink", 0.5, 0.9) }, g);
      el("circle", { cx: x, cy: y, r: 1.6, fill: mix("anat-vein", "anat-brain-deep", 0.35) }, g);
    }
  });
  // inflammatory cells
  if (s.infl > 0.03) {
    const n = Math.round(G.inf.length * s.infl);
    for (let i = 0; i < n; i++) {
      const c = G.inf[i], [x, y] = C.at(c.u, intima + 4 + c.d * sub * 2.2);
      drawCell(g, c.k < 0.5 ? "lymphocyte" : c.k < 0.85 ? "macrophage" : "mast", x, y, c.k < 0.5 ? 3.8 : 5.4, { seed: c.s, phase: p, activated: s.infl });
    }
  }
  // bone + cartilage over the capsule attachments
  const top = []; for (let x = -10; x <= 810; x += 20) top.push([x, boneY(x)]);
  el("path", { d: "M-10,0 L810,0 " + top.slice().reverse().map(([x, y]) => `L${f(x)},${f(y)}`).join(" ") + "Z", fill: mix("anat-bone", "stage-bg", 0.45), stroke: col("anat-bone-edge"), "stroke-width": 2 }, g);
  const cart = []; for (let x = -10; x <= 810; x += 20) cart.push([x, cartY(x)]);
  el("path", { d: band(top, cart), fill: mix("anat-cartilage", "stage-bg", 0.3), stroke: mix("anat-cartilage", "stage-bg", 0.5), "stroke-width": 1 }, g);
  // contraction arrows
  if (s.con > 0.1 && stage === "contracture") {
    const [ax, ay] = C.at(0.2, T * 0.6), [bx, by] = C.at(0.8, T * 0.6);
    arrow(g, ax - 40, ay, ax + 26, ay, { width: 4, head: 11, opacity: s.con, color: col("fx-injury") });
    arrow(g, bx + 40, by, bx - 26, by, { width: 4, head: 11, opacity: s.con, color: col("fx-injury") });
  }
  romBar(g, s);
  labels(g, stage, s, p, C, intima, sub, T);
}

function romBar(g, s) {
  const x0 = 18, y0 = 316, w = 190, h = 48;
  el("rect", { x: x0, y: y0, width: w, height: h, rx: 6, fill: col("stage-caption-bg"), stroke: col("stage-ink", 0.15) }, g);
  el("text", { x: x0 + 10, y: y0 + 17, "font-size": 12, fill: col("stage-ink-2"), text: "Joint range (capsular slack)" }, g);
  const bx = x0 + 10, by = y0 + 26, bw = w - 20;
  el("rect", { x: bx, y: by, width: bw, height: 10, rx: 5, fill: col("stage-ink", 0.12) }, g);
  const c = s.rom > 0.75 ? "fx-heal" : s.rom > 0.4 ? "fx-force" : "fx-injury";
  el("rect", { x: bx, y: by, width: Math.max(10, bw * s.rom), height: 10, rx: 5, fill: col(c) }, g);
  el("path", { d: `M${bx + bw},${by - 3} L${bx + bw},${by + 13}`, stroke: col("stage-ink", 0.5), "stroke-width": 1 }, g);
}

function labels(g, stage, s, p, C, intima, sub, T) {
  const L = (x, y, text, to, o = {}) => label(g, x, y, text, { to, ...o });
  const at = (u, d) => { const [x, y] = C.at(u, d); return [x, y]; };
  switch (stage) {
    case "healthy": {
      const a = fade(0.52, 0.45, p), b = fade(0.45, 0.52, p);
      L(790, 236, "Synovial intima\n(1–3 cells)", at(0.72, 3), { anchor: "end", opacity: a });
      L(790, 292, "Subintima\n(capillaries)", at(0.8, intima + sub * 0.55), { anchor: "end", opacity: a });
      L(790, 350, "Fibrous capsule\n(type I collagen)", at(0.68, T - 10), { anchor: "end", opacity: a });
      L(400, 150, "Joint cavity (synovial fluid)", [400, C.inner(400) - 30], { anchor: "middle", opacity: b });
      L(790, 300, "Redundant recess:\nslack allows range", at(0.62, T), { anchor: "end", opacity: b });
      L(790, 72, "Articular cartilage", [690, cartY(690) - 6], { anchor: "end", opacity: b });
      break;
    }
    case "inflammation":
      L(790, 236, "Synovitis: lining\nhyperplasia", at(0.74, 6), { anchor: "end", opacity: fade(0.15, 0.4, p) });
      L(790, 300, "Hypervascular\nsubintima", at(0.8, intima + sub * 0.55), { anchor: "end", opacity: fade(0.35, 0.6, p) });
      L(400, 150, "Inflammatory cells", at(0.47, intima + 10), { anchor: "middle", opacity: fade(0.55, 0.75, p) });
      break;
    case "fibrosis":
      L(790, 236, "Myofibroblasts\n(α-SMA)", at(G.myo[13].u, intima + 6 + G.myo[13].d * (T - intima - 12)), { anchor: "end", opacity: fade(0.15, 0.4, p) });
      L(400, 150, "Disorganised type III collagen", at(0.5, intima + sub * 0.7), { anchor: "middle", opacity: fade(0.4, 0.65, p) });
      L(790, 330, "Capsule thickens", at(0.7, T), { anchor: "end", opacity: fade(0.6, 0.8, p) });
      break;
    case "contracture":
      L(400, 330, "Thickened, shortened capsule", at(0.5, T), { anchor: "middle", opacity: fade(0.2, 0.45, p) });
      L(790, 236, "Recess obliterated:\nrange lost", at(0.75, 0), { anchor: "end", opacity: fade(0.5, 0.7, p) });
      break;
    case "remodelling":
      L(790, 300, "Collagen realigns\n(type III → type I)", at(0.72, intima + sub), { anchor: "end", opacity: fade(0.15, 0.4, p) });
      L(400, 150, "Slack and extensibility gradually return", [400, C.inner(400) - 6], { anchor: "middle", opacity: fade(0.5, 0.7, p) });
      break;
    default: break;
  }
}

export default {
  id: "capsule",
  scale: "≈ 500 µm",
  labels: { inflammation: "Inflammation (synovitis)" },
  render
};
