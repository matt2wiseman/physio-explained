/**
 * Micro module: BONE-FRACTURE (fracture healing). OWNER: A7.
 * View: longitudinal section through the wall of a long-bone shaft — periosteum (top), cortical (lamellar) bone with
 * osteons (Haversian canals + vessels, concentric lamellae, osteocytes in lacunae), endosteum, marrow cavity with
 * trabeculae, fat cells and haematopoietic marrow (bottom).
 *   healthy → fracture (crack propagates, fragments separate, periosteum & vessels tear) → haematoma (clot fills the gap
 *   and lifts the periosteum; osteocytes at the bone ends die) → inflammation (neutrophils, macrophages; mesenchymal stem
 *   cells recruited from periosteum & marrow; vessels begin to invade) → soft-callus (cartilage + fibrous tissue bridges
 *   the gap; periosteal intramembranous bone) → hard-callus (endochondral ossification: woven bone advances from the
 *   periphery to the gap) → remodelling (cutting cones: osteoclasts tunnel, osteoblasts lay lamellar osteons; callus resorbs).
 * Exports boneBase(), BONE geometry and helpers reused by bone-stress.js.
 */
import { el, rng, lerp, clamp, ease, fade, seg, wave, col, mix, field, label, arrow, drawCell, capillary, blobPath, radial,
  smoothPath, f, def, dashedArrow, scatter } from "./index.js";

export const BONE = { top: 100, bot: 262, peri: 95, marrowBot: 450, canals: [124, 160, 198, 238] };

const dotsPath = (pts, r) => pts.map(([x, y]) => `M${f(x - r)},${f(y)}a${r},${r} 0 1,0 ${2 * r},0a${r},${r} 0 1,0 ${-2 * r},0`).join("");

export const bgeo = (() => {
  const r = rng("bone-base");
  const osteocytes = [];
  for (let i = 0; i < 70 && osteocytes.length < 46; i++) {
    const x = 10 + r() * 780, y = BONE.top + 8 + r() * (BONE.bot - BONE.top - 16);
    if (BONE.canals.some((c) => Math.abs(y - c) < 7)) continue;
    if (osteocytes.some(([a, b]) => Math.hypot(a - x, b - y) < 30)) continue;
    osteocytes.push([x, y, (r() - 0.5) * 10]);
  }
  const fat = scatter(r, 26, { x: 0, y: 300, w: 800, h: 150 }, { minDist: 30 }).map(([x, y]) => [x, y, 10 + r() * 7]);
  const hema = scatter(r, 120, { x: 0, y: 272, w: 800, h: 178 }, { minDist: 7, avoid: (x, y) => fat.some(([a, b, rr]) => Math.hypot(a - x, b - y) < rr + 3) });
  const trab = [[60, 262, 120, 300, 170, 262], [250, 262, 300, 318, 330, 262], [520, 262, 560, 296, 610, 262], [690, 262, 740, 330, 780, 262]];
  return { osteocytes, fat, hema, trab };
})();

/** Cortical bone + marrow. o: { dead(x,y)→0–1, periLift(x)→px, periTorn:[x0,x1]|null, periThick 0–1, marrowOedema 0–1,
 *  canalVessel 0–1 (vessel visibility), pits: [{x,y,rx,ry}], marrowTint } */
export function boneBase(g, o = {}) {
  // soft tissue above
  el("rect", { x: 0, y: 56, width: 800, height: BONE.peri - 56, fill: mix("anat-muscle", "stage-bg", 0.82) }, g);
  // marrow
  el("rect", { x: 0, y: BONE.bot, width: 800, height: 200, fill: mix("anat-marrow", "stage-bg", 0.62) }, g);
  el("path", { d: dotsPath(bgeo.hema, 2.2), fill: mix("anat-brain-deep", "anat-vein", 0.4, 0.8) }, g);
  bgeo.fat.forEach(([x, y, rr]) => drawCell(g, "adipocyte", x, y, rr, {}));
  capillary(g, [[-10, 350], [200, 330], [420, 360], [620, 335], [810, 352]], { width: 9, seed: 3, rbcs: 10, opacity: 0.85 });
  if (o.marrowOedema > 0.01) el("rect", { x: 0, y: BONE.bot, width: 800, height: 200, fill: radial(g, "bone-mo", [[0, col("fx-oedema")], [1, col("fx-oedema", 0.15)]], { cx: "50%", cy: "15%", r: "70%" }), opacity: o.marrowOedema }, g);
  // trabeculae
  bgeo.trab.forEach(([a, b, c, d, e, h]) => el("path", { d: `M${a},${b} Q${c - 20},${d} ${c},${d} Q${c + 20},${d} ${e},${h} Z`, fill: col("anat-bone"), stroke: col("anat-bone-edge"), "stroke-width": 1 }, g));
  // cortex
  el("rect", { x: -10, y: BONE.top, width: 820, height: BONE.bot - BONE.top, fill: col("anat-bone") }, g);
  let lam = "";
  for (const c of BONE.canals) for (const off of [-16, -11, -6.5, 6.5, 11, 16]) lam += `M-10,${c + off} L810,${c + off} `;
  el("path", { d: lam, stroke: col("anat-bone-edge", 0.45), "stroke-width": 0.9, fill: "none" }, g);
  let cem = ""; for (const c of BONE.canals) cem += `M-10,${c - 19} L810,${c - 19} M-10,${c + 19} L810,${c + 19} `;
  el("path", { d: cem, stroke: mix("anat-bone-edge", "stage-bg", 0.3, 0.55), "stroke-width": 1.3, fill: "none" }, g);
  // Haversian canals + vessels, Volkmann canals
  for (const c of BONE.canals) {
    el("rect", { x: -10, y: c - 3.5, width: 820, height: 7, fill: mix("anat-bone-edge", "stage-bg", 0.55) }, g);
    el("path", { d: `M-10,${c} L810,${c}`, stroke: col("anat-artery", 0.85 * (o.canalVessel ?? 1)), "stroke-width": 2 }, g);
  }
  for (const x of [150, 640]) el("path", { d: `M${x},${BONE.canals[0]} L${x + 10},${BONE.canals[3]}`, stroke: mix("anat-bone-edge", "stage-bg", 0.55), "stroke-width": 5 }, g);
  // resorption pits / cavities
  (o.pits || []).forEach((pt) => { if (pt.rx > 0.5) el("path", { d: blobPath(rng(pt.x), pt.x, pt.y, pt.rx, { ry: pt.ry, irregular: 0.12, n: 9 }), fill: mix("anat-marrow", "stage-bg", 0.55), stroke: col("anat-bone-edge"), "stroke-width": 1 }, g); });
  // osteocytes
  for (const [x, y, a] of bgeo.osteocytes) drawCell(g, "osteocyte", x, y, 5.2, { angle: a, dead: o.dead ? o.dead(x, y) : 0 });
  // endosteum + periosteum
  el("path", { d: `M-10,${BONE.bot} L810,${BONE.bot}`, stroke: col("anat-bone-edge"), "stroke-width": 2 }, g);
  const lift = o.periLift || (() => 0), th = o.periThick || 0;
  const torn = o.periTorn;
  const periPts = (x0, x1) => { const pts = []; for (let x = x0; x <= x1; x += 10) pts.push([x, BONE.peri - lift(x)]); return pts; };
  const segs = torn ? [[-10, torn[0]], [torn[1], 810]] : [[-10, 810]];
  segs.forEach(([a, b]) => {
    if (b - a < 4) return;
    const d = smoothPath(periPts(a, b));
    el("path", { d, stroke: mix("anat-fascia", "stage-bg", 0.25), "stroke-width": 6 + 8 * th, fill: "none", "stroke-linecap": "round" }, g);
    el("path", { d, stroke: col("anat-fascia"), "stroke-width": 1.4, fill: "none", transform: `translate(0,${f(-2 - 3 * th)})` }, g);
  });
  // cambium-layer cells (osteoprogenitors) under the fibrous layer
  for (let x = 20; x < 800; x += 46) { if (torn && x > torn[0] - 6 && x < torn[1] + 6) continue; el("ellipse", { cx: x, cy: BONE.peri + 2.5 - lift(x), rx: 6, ry: 2.2, fill: mix("anat-vein", "anat-brain-deep", 0.35, 0.9) }, g); }
}

/* ------------------------------------------------------------------ fracture geometry */
const CRACK = [[396, -10], [392, 92], [401, 128], [391, 168], [405, 212], [397, 262], [409, 318], [400, 400], [404, 470]];
const leftPoly = "M-20,-20 " + CRACK.map(([x, y]) => `L${x},${y}`).join(" ") + " L-20,470 Z";
const rightPoly = "M830,-20 " + CRACK.map(([x, y]) => `L${x},${y}`).join(" ") + " L830,470 Z";
const GAP = 24;
const fg = (() => {
  const r = rng("fracture");
  const P = (n, box, avoid) => scatter(r, n, { x: box[0], y: box[1], w: box[2] - box[0], h: box[3] - box[1] }, { minDist: 9, avoid }).map(([x, y]) => ({ x, y, k: r(), a: r() * 180, seed: Math.floor(r() * 1e6) }));
  const inGap = (x, y) => Math.abs(x - 408) < 32;
  return {
    rbc: P(80, [350, 64, 470, 330]), plt: P(14, [380, 100, 440, 300]), neut: P(9, [370, 90, 450, 310]), mac: P(6, [372, 100, 446, 300]),
    msc: P(8, [300, 60, 520, 340]), chon: P(34, [300, 50, 520, 330]), woven: P(420, [288, 44, 528, 332]),
    fibro: P(10, [290, 50, 530, 96])
  };
})();
const crackX = (y) => { for (let i = 1; i < CRACK.length; i++) if (y <= CRACK[i][1]) { const [x0, y0] = CRACK[i - 1], [x1, y1] = CRACK[i]; return lerp(x0, x1, (y - y0) / (y1 - y0)); } return 404; };
/** external callus profile: height above the periosteum at x (k = size) */
const callusH = (x, k, c = 408, w = 120, h = 50) => { const u = (x - c) / w; return Math.abs(u) >= 1 ? 0 : h * k * Math.pow(Math.cos((u * Math.PI) / 2), 1.4); };
function callusPath(k, top = true, c = 408, w = 120, h = 50) {
  const pts = []; for (let x = c - w; x <= c + w; x += 8) pts.push([x, top ? BONE.top - 2 - callusH(x, k, c, w, h) : BONE.bot + 2 + callusH(x, k * 0.6, c, w * 0.8, h)]);
  return smoothPath(pts) + `L${c + w},${top ? BONE.top + 2 : BONE.bot - 2} L${c - w},${top ? BONE.top + 2 : BONE.bot - 2}Z`;
}
const inCallus = (x, y, k) => {
  if (Math.abs(x - 408) < 20 && y > BONE.top - 6 && y < BONE.bot + 30) return true;
  if (y < BONE.top) return BONE.top - y < callusH(x, k) - 3;
  if (y > BONE.bot) return y - BONE.bot < callusH(x, k * 0.6, 408, 96) - 3;
  return false;
};

function fragments(g, d, base) {
  const L = el("g", { "clip-path": def(g, "bf-left", (defs, id) => { const c = el("clipPath", { id }, defs); el("path", { d: leftPoly }, c); }) }, g);
  boneBase(L, base);
  const Rg = el("g", { transform: `translate(${f(d)},0)` }, g);
  const R2 = el("g", { "clip-path": def(g, "bf-right", (defs, id) => { const c = el("clipPath", { id }, defs); el("path", { d: rightPoly }, c); }) }, Rg);
  boneBase(R2, base);
}

function render(g, { stage, progress: p }) {
  const k = ease(p);
  field(g, { tint: "anat-bone", tintAmount: 0.04 });
  const order = ["healthy", "fracture", "haematoma", "inflammation", "soft-callus", "hard-callus", "remodelling"];
  const si = Math.max(0, order.indexOf(stage));
  const d = si === 1 ? GAP * fade(0.45, 0.85, p) : si >= 2 ? GAP : 0;
  const deadK = si === 2 ? fade(0.3, 1, p) : si >= 3 && si <= 5 ? 1 : si === 6 ? 1 - fade(0.3, 1, p) : 0;
  const dead = (x, y) => (Math.abs(x - crackX(y)) < 46 ? deadK : 0);
  const liftK = si === 2 ? ease(p) : si === 3 ? 1 : si === 4 ? 1 : si === 5 ? 1 - 0.4 * k : si === 6 ? 0.6 * (1 - k) : 0;
  const callusK = si === 4 ? ease(p) : si === 5 ? 1 : si === 6 ? lerp(1, 0.18, k) : 0;
  const periLift = (x) => Math.max(18 * liftK * Math.max(0, 1 - Math.abs(x - 408) / 90), callusH(x, callusK) + 2 * (callusK > 0 ? 1 : 0));
  const base = { dead, periLift, periTorn: si >= 1 && si <= 3 && d > 2 ? [crackX(BONE.peri) - 6, crackX(BONE.peri) + d + 6] : null, canalVessel: 1 };
  if (si === 0) boneBase(g, base);
  else {
    // what shows through the gap outside the cortex: soft tissue above, marrow (→ granulation tissue) below
    el("rect", { x: 300, y: 56, width: 220, height: BONE.peri - 52, fill: mix("anat-muscle", "stage-bg", 0.82) }, g);
    el("rect", { x: 300, y: BONE.bot, width: 220, height: 200, fill: si >= 3 ? mix("anat-marrow", "fx-heal", 0.15, 0.55) : mix("anat-marrow", "stage-bg", 0.62) }, g);
    if (si === 6) el("rect", { x: 300, y: BONE.top, width: 220, height: BONE.bot - BONE.top, fill: mix("anat-bone", "anat-bone-edge", 0.25) }, g);
    fragments(g, d, base);
  }

  // crack propagation (fracture stage)
  if (si === 1) {
    const prop = fade(0, 0.45, p);
    const pts = CRACK.filter(([, y]) => y >= BONE.peri - 4 && y <= BONE.peri + prop * 360);
    const yEnd = BONE.peri + prop * 360;
    pts.push([crackX(Math.min(yEnd, 460)), Math.min(yEnd, 460)]);
    if (d < 1 && pts.length > 1) { el("path", { d: smoothPath(pts), stroke: col("fx-injury"), "stroke-width": 3, fill: "none" }, g); el("path", { d: smoothPath(pts), stroke: col("fx-injury", 0.3), "stroke-width": 10, fill: "none" }, g); }
    if (d > 1) for (const c of BONE.canals) el("circle", { cx: crackX(c) + d / 2, cy: c, r: 4 + 3 * (d / GAP), fill: col("fx-bleed", 0.85) }, g);
    label(g, 632, 412, "Fracture line through cortex\nand marrow", { to: [crackX(300) + d / 2, 300], anchor: "end", opacity: fade(0.05, 0.3, p) });
    label(g, 200, 76, "Periosteum & vessels tear", { to: [crackX(BONE.peri) + d / 2, BONE.peri], anchor: "middle", opacity: fade(0.5, 0.8, p) });
    return;
  }
  // haematoma in the gap & under the lifted periosteum
  const hemK = si === 2 ? ease(p, "out") : si === 3 ? 1 : si === 4 ? 1 - k : 0;
  if (hemK > 0.01) {
    const gapPts = []; for (let y = BONE.peri - 4; y <= 420; y += 12) gapPts.push([crackX(y) - 2, y]);
    const back = gapPts.slice().reverse().map(([x, y]) => [x + d + 4, y]);
    el("path", { d: smoothPath([...gapPts, ...back], true), fill: col("fx-bleed", 0.75 * hemK) }, g);
    el("path", { d: blobPath(rng(9), 408, BONE.peri - 6, 70 * hemK, { ry: 16 * hemK, irregular: 0.1, n: 10 }), fill: col("fx-bleed", 0.6 * hemK) }, g);
    el("path", { d: blobPath(rng(10), 410, BONE.bot + 40, 60 * hemK, { ry: 40 * hemK, irregular: 0.2, n: 10 }), fill: col("fx-bleed", 0.5 * hemK) }, g);
    const n = Math.round(fg.rbc.length * hemK * (si === 3 ? 1 - 0.5 * k : 1));
    for (let i = 0; i < n; i++) { const c = fg.rbc[i]; const inside = Math.abs(c.x - (crackX(c.y) + d / 2)) < 12 + 50 * Math.max(0, (BONE.peri + 10 - c.y) / 40) || (c.y > BONE.bot && Math.abs(c.x - 410) < 50); if (inside) drawCell(g, "rbc", c.x, c.y, 4.6, { seed: c.seed, edge: c.k > 0.8 }); }
    if (si === 2) fg.plt.slice(0, Math.round(14 * k)).forEach((c) => drawCell(g, "platelet", crackX(c.y) + d / 2 + (c.k - 0.5) * 10, c.y, 3.6, { activated: k, seed: c.seed }));
  }
  const gx = (y) => crackX(y) + d / 2;
  switch (stage) {
    case "haematoma":
      label(g, 632, 412, "Fracture haematoma (clot) fills\nthe gap and lifts the periosteum", { to: [gx(300), 300], anchor: "end", opacity: fade(0.1, 0.4, p) });
      label(g, 180, 412, "Osteocytes die at the bone ends\n(empty lacunae)", { to: [bgeo.osteocytes.find(([x, y]) => Math.abs(x - crackX(y)) < 40 && x < crackX(y))?.[0] ?? 370, bgeo.osteocytes.find(([x, y]) => Math.abs(x - crackX(y)) < 40 && x < crackX(y))?.[1] ?? 180], anchor: "middle", opacity: fade(0.4, 0.8, p) });
      break;
    case "inflammation": {
      el("ellipse", { cx: 410, cy: 200, rx: 190, ry: 200, fill: radial(g, "bf-oed", [[0, col("fx-oedema")], [1, col("fx-oedema", 0)]]), opacity: 0.8 }, g);
      const nk = 1 - fade(0.5, 0.9, p), mk = fade(0.2, 0.6, p);
      fg.neut.forEach((c) => drawCell(g, "neutrophil", gx(c.y) + (c.k - 0.5) * 8, c.y, 7.5, { seed: c.seed, opacity: nk, phase: p }));
      fg.mac.forEach((c) => drawCell(g, "macrophage", gx(c.y) + (c.k - 0.5) * 6, c.y, 11, { seed: c.seed, opacity: mk, engulf: 0.6 }));
      fg.msc.forEach((c, i) => {
        const from = i % 2 ? [c.x, BONE.peri - 2] : [c.x, BONE.bot + 30 + c.k * 40];
        const to = [gx(i % 2 ? 108 : 250) + (c.k - 0.5) * 10, i % 2 ? 108 + c.k * 40 : 230 + c.k * 30];
        const m = fade(0.2 + c.k * 0.2, 1, p);
        drawCell(g, "msc", lerp(from[0], to[0], m), lerp(from[1], to[1], m), 5.5, { seed: c.seed, opacity: fade(0.1, 0.3, p) });
      });
      dashedArrow(g, 300, BONE.peri + 4, gx(130) - 8, 130, { bend: -20, opacity: fade(0.1, 0.4, p) });
      dashedArrow(g, 520, BONE.bot + 50, gx(240) + 10, 244, { bend: -20, opacity: fade(0.1, 0.4, p) });
      label(g, 180, 412, "Neutrophils, then macrophages\nclear the clot & signal repair", { to: [fg.mac[1].x, fg.mac[1].y], anchor: "middle", opacity: mk });
      label(g, 632, 412, "Mesenchymal stem cells recruited\nfrom periosteum & marrow", { to: [520, BONE.bot + 50], anchor: "end", opacity: fade(0.1, 0.4, p) });
      break;
    }
    case "soft-callus": case "hard-callus": case "remodelling": {
      const ck = callusK;
      // cartilaginous callus (bridging + external)
      const cartOp = si === 4 ? 1 : si === 5 ? 1 - fade(0.6, 1, p) * 0.9 : 0;
      if (cartOp > 0.01) {
        const cart = mix("anat-cartilage", "stage-bg", 0.4, 0.95 * cartOp);
        el("path", { d: callusPath(ck, true), fill: cart, stroke: mix("anat-cartilage", "stage-bg", 0.2, cartOp), "stroke-width": 1 }, g);
        el("path", { d: callusPath(ck, false), fill: cart }, g);
        const gapPts = []; for (let y = BONE.top - 4; y <= BONE.bot + 10; y += 12) gapPts.push([crackX(y) - 1, y]);
        const back = gapPts.slice().reverse().map(([x, y]) => [x + d + 2, y]);
        el("path", { d: smoothPath([...gapPts, ...back], true), fill: cart }, g);
        fg.chon.forEach((c) => { if (inCallus(c.x, c.y, ck) && Math.abs(c.x - 408) < 30 + 90 * ck) drawCell(g, "chondrocyte", c.x, c.y, 4.6 * (si === 5 ? 1.25 : 1), { seed: c.seed, opacity: cartOp }); });
        // fibrous tissue at the callus surface
        if (si === 4) fg.fibro.forEach((c) => { const y = BONE.top - callusH(c.x, ck) - 3; if (callusH(c.x, ck) > 6) drawCell(g, "fibroblast", c.x, y, 5, { angle: 0, seed: c.seed }); });
      }
      // woven bone (periosteal intramembranous bone in soft callus; endochondral front in hard callus)
      const front = si === 4 ? 999 : si === 5 ? lerp(120, -10, ease(p)) : -10;
      const wovenOp = si === 6 ? 1 - fade(0.2, 1, p) * 0.85 : 1;
      fg.woven.forEach((c) => {
        const dist = Math.abs(c.x - 408);
        const show = si === 4 ? c.y < BONE.top && dist > 95 - 20 * ck && inCallus(c.x, c.y, ck) : dist > front && inCallus(c.x, c.y, ck);
        if (!show) return;
        el("path", { d: blobPath(rng(c.seed), c.x, c.y, 7 + c.k * 4, { ry: 4 + c.k * 4, irregular: 0.4, n: 7 }), fill: col("anat-bone", wovenOp), stroke: col("anat-bone-edge", wovenOp), "stroke-width": 0.8 }, g);
        if (c.k > 0.5) drawCell(g, "osteocyte", c.x, c.y, 3.4, { angle: c.a, opacity: wovenOp });
      });
      if (si === 5) { // osteoblasts at the front + vessels invading
        fg.chon.slice(0, 10).forEach((c, i) => { const s = i % 2 ? 1 : -1; const x = 408 + s * Math.max(front, 0); const y = lerp(BONE.top - 30 * ck, BONE.bot + 10, (i + 0.5) / 10); if (inCallus(x, y, ck)) drawCell(g, "osteoblast", x + s * 6, y, 4.2, { angle: s * 90, seed: c.seed }); });
        capillary(g, [[330, BONE.top - 6], [360, BONE.top - 16], [Math.min(398, 408 - Math.max(front, 0)), BONE.top - 20]], { width: 6, seed: 81, rbcs: 2 });
      }
      if (si === 6) { // lamellar bone fills the gap via cutting cones
        const gp = []; for (let y = BONE.top; y <= BONE.bot; y += 10) gp.push([crackX(y) - 1, y]);
        el("path", { d: smoothPath([...gp, ...gp.slice().reverse().map(([x, y]) => [x + d + 2, y])], true), fill: mix("anat-bone", "anat-bone-edge", 0.25) }, g);
        const xHead = lerp(330, 500, k);
        const fillW = Math.max(0, xHead - 360);
        el("rect", { x: 380, y: BONE.top, width: Math.min(fillW, 60), height: BONE.bot - BONE.top, fill: col("anat-bone", fade(0.1, 0.6, p)) }, g);
        let lam = ""; for (const c of BONE.canals) for (const off of [-11, -6.5, 6.5, 11]) lam += `M372,${c + off} L${f(Math.max(372, xHead - 30))},${c + off} `;
        el("path", { d: lam, stroke: col("anat-bone-edge", 0.6), "stroke-width": 1, fill: "none" }, g);
        for (const cy of [BONE.canals[1], BONE.canals[3]]) {
          el("path", { d: `M300,${cy - 9} L${f(xHead - 10)},${cy - 9} Q${f(xHead + 14)},${cy} ${f(xHead - 10)},${cy + 9} L300,${cy + 9} Z`, fill: mix("anat-marrow", "stage-bg", 0.5) }, g);
          el("path", { d: `M300,${cy} L${f(xHead - 8)},${cy}`, stroke: col("anat-artery"), "stroke-width": 2.4 }, g);
          drawCell(g, "osteoclast", xHead - 4, cy, 6.5, { angle: -90, nuclei: 4 });
          for (let x = xHead - 40; x > 300; x -= 16) { drawCell(g, "osteoblast", x, cy - 6, 3.4, { angle: 180 }); drawCell(g, "osteoblast", x, cy + 6, 3.4, { angle: 0 }); }
        }
      }
      if (stage === "soft-callus") {
        label(g, 632, 412, "Cartilage & fibrous tissue\n(soft callus) bridge the gap", { to: [gx(200), 200], anchor: "end", opacity: fade(0.1, 0.4, p) });
        label(g, 180, 76, "Periosteal new bone", { to: [300, BONE.top - 6], anchor: "middle", opacity: fade(0.3, 0.6, p) });
      } else if (stage === "hard-callus") {
        label(g, 632, 412, "Woven bone replaces cartilage\n(endochondral ossification)", { to: [408 + Math.max(front, 12) + 12, BONE.top - 10], anchor: "end" });
        label(g, 180, 412, "Disorganised woven bone\nunites the fragments", { to: [330, BONE.bot + 16], anchor: "middle", opacity: fade(0.4, 0.8, p) });
      } else {
        label(g, 632, 412, "Cutting cone: osteoclasts resorb,\nosteoblasts lay lamellar bone", { to: [lerp(330, 500, k) - 4, BONE.canals[3] + 6], anchor: "end" });
        label(g, 180, 76, "Callus resorbs; shape restored", { to: [430, BONE.top - 4], anchor: "middle", opacity: fade(0.3, 0.7, p) });
      }
      break;
    }
    default:
      label(g, 180, 76, "Periosteum", { to: [230, BONE.peri], anchor: "middle" });
      label(g, 632, 76, "Osteon: Haversian canal & vessel", { to: [560, BONE.canals[1]], anchor: "end" });
      label(g, 180, 412, "Osteocyte in its lacuna", { to: [bgeo.osteocytes[3][0], bgeo.osteocytes[3][1]], anchor: "middle" });
      label(g, 632, 412, "Marrow cavity & trabecular bone", { to: [560, 290], anchor: "end" });
  }
}

export default { id: "bone-fracture", scale: "≈ 200 µm", render };
