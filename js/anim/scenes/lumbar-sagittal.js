/**
 * Scene: lumbar-sagittal — lumbar spine L3–sacrum, LATERAL view from the patient's RIGHT, standing lordosis.
 *   - ANTERIOR = screen RIGHT, POSTERIOR = screen LEFT, superior = up. Lateral (patient's right) = toward the
 *     viewer ("out"), medial/left = away ("in").
 *   - Composite atlas view (as in patient-education sagittal diagrams): the vertebrae are drawn as their lateral
 *     silhouette (body, pedicle, superior/inferior articular processes, pars interarticularis, spinous process),
 *     so the intervertebral foramina, facet joints and pars read clearly; the spinal canal, cauda equina,
 *     posterior longitudinal ligament and ligamentum flavum are shown "X-ray style" over the pedicles.
 *   - Discs are drawn as the true intervertebral wedge (closed `d`, annulus + explicit nucleus) above the
 *     vertebrae so herniation/fissure/degeneration effects stay visible; lordosis ≈ 40° L3→S1 with the
 *     L5–S1 disc the most wedged; sacral slope ≈ 38°.
 *   - Nerve roots: each band starts at the cauda equina above the disc it traverses, runs in the lateral
 *     recess behind that disc (compress at ≈ 0.25), under its own pedicle and out through the foramen below
 *     it (compress at ≈ 0.55–0.65 = foraminal). L4 exits L4–5, L5 exits L5–S1, S1 runs into the sacral canal.
 *   - Muscles: multifidus (deep, in the laminar gutter behind the posterior arch), erector spinae (superficial),
 *     thoracolumbar fascia (posterior layer). Muscle axes run origin (sacrum) → insertion (cranial).
 * Scale ≈ 2.2 px/mm.
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const S = 2.2;
const r = (n) => Math.round(n * 10) / 10;
const pt = (p) => `${r(p[0])},${r(p[1])}`;
/** Catmull-Rom → cubic Bézier. A point's 3rd value is its tangent scale (0 = sharp corner, default 1). */
function spline(pts, closed = true) {
  const n = pts.length, at = (i) => (closed ? pts[(i + n) % n] : pts[Math.min(n - 1, Math.max(0, i))]);
  let d = `M${pt(pts[0])}`;
  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2), k1 = (p1[2] ?? 1) / 6, k2 = (p2[2] ?? 1) / 6;
    d += ` C${pt([p1[0] + (p2[0] - p0[0]) * k1, p1[1] + (p2[1] - p0[1]) * k1])} ${pt([p2[0] - (p3[0] - p1[0]) * k2, p2[1] - (p3[1] - p1[1]) * k2])} ${pt(p2)}`;
  }
  return closed ? d + " Z" : d;
}
const rad = (a) => (a * Math.PI) / 180;
const U = (a) => [Math.cos(rad(a)), Math.sin(rad(a))];           // anterior along an endplate inclined a° (clockwise)
const N = (a) => [-Math.sin(rad(a)), Math.cos(rad(a))];          // "down" (caudal) normal to it
const add = (p, v, k = 1) => [p[0] + v[0] * k, p[1] + v[1] * k];
const mid = (a, b, t = 0.5) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const R = (p) => [r(p[0]), r(p[1])];
/** Local frame: origin o (px), inclination a°; (p mm anterior, q mm caudal) → px. */
const frame = (o, a) => (p, q, k) => { const u = U(a), v = N(a), x = [o[0] + (u[0] * p + v[0] * q) * S, o[1] + (u[1] * p + v[1] * q) * S]; if (k !== undefined) x.push(k); return x; };

/* ---------- the column: bodies & discs chained endplate to endplate ---------- */
const SEGS = [
  { id: "L2", D: 34, h: 27, sup: -8, inf: -5 }, { disc: "L2L3", h: 10.5 },
  { id: "L3", D: 35, h: 27.5, sup: -3, inf: 0 }, { disc: "L3L4", h: 11 },
  { id: "L4", D: 36, h: 27, sup: 7, inf: 9 }, { disc: "L4L5", h: 12 },
  { id: "L5", D: 36.5, h: 26, sup: 19, inf: 25 }, { disc: "L5S1", h: 10.5 },
  { id: "S1", D: 37, sup: 38 }
];
const V = {}, DISC = {};
{
  let C = [536, 14];   // centre of the L2 superior endplate (px)
  for (let i = 0; i < SEGS.length; i++) {
    const s = SEGS[i];
    if (s.disc) continue;
    const SA = add(C, U(s.sup), (s.D / 2) * S), SP = add(C, U(s.sup), (-s.D / 2) * S);
    const v = { ...s, C, SA, SP };
    if (s.h) {
      const m = (s.sup + s.inf) / 2, C2 = add(C, N(m), s.h * S);
      Object.assign(v, { mean: m, C2, IA: add(C2, U(s.inf), (s.D / 2) * S), IP: add(C2, U(s.inf), (-s.D / 2) * S) });
      const d = SEGS[i + 1], nx = SEGS[i + 2];
      C = add(C2, N((s.inf + nx.sup) / 2), d.h * S);
      DISC[d.disc] = { up: s.id, down: nx.id, ang: (s.inf + nx.sup) / 2 };
    }
    V[s.id] = v;
  }
  V.S1.mean = V.S1.sup;
}
/** Bilinear point on a vertebral body: s 0→1 posterior→anterior, t 0→1 superior→inferior, + (dp, dq) mm offsets. */
const B = (v, s, t, dp = 0, dq = 0, k) => {
  const a = mid(mid(v.SP, v.SA, s), mid(v.IP, v.IA, s), t), u = U(v.mean), n = N(v.mean);
  const x = [a[0] + (u[0] * dp + n[0] * dq) * S, a[1] + (u[1] * dp + n[1] * dq) * S]; if (k !== undefined) x.push(k); return x;
};
for (const id of ["L2", "L3", "L4", "L5", "S1"]) V[id].F = frame(V[id].SP, V[id].mean);

/** Lateral silhouette of a lumbar vertebra (body + pedicle + SAP + pars + IAP + spinous process). */
function vertebra(v, o = {}) {
  const F = v.F, sp = o.sp || { tip: -59, top: 9, bot: 24.5 }, sub = [];
  const body = [
    B(v, 0, 0, 0.35, 0.25, 0.5), B(v, 0.08, 0, 0, -0.3), B(v, 0.5, 0, 0, 0.7), B(v, 0.92, 0, 0, -0.3), B(v, 1, 0, -0.35, 0.25, 0.5),
    B(v, 1, 0.12, 0.3, 0), B(v, 1, 0.5, -1.4, 0), B(v, 1, 0.88, 0.3, 0), B(v, 1, 1, -0.35, -0.25, 0.5),
    B(v, 0.92, 1, 0, 0.3), B(v, 0.5, 1, 0, -0.7), B(v, 0.08, 1, 0, 0.3), B(v, 0, 1, 0.35, -0.25, 0.5), B(v, 0, 0.78, 0.45, 0)
  ];
  const post = [
    F(-0.4, 15.8, 0.6), F(-3, 14.6), F(-6.5, 14.1), F(-9.8, 15), F(-11.6, 17.5),            // inferior vertebral notch (roof of foramen)
    F(-12.6, 21.5), F(-13.2, 26), F(-14, 31), F(-15, 35.5),                                // pars → IAP anterior (articular) border
    F(-17.2, 38.2, 0.6), F(-20, 36.2), F(-22.4, 31), F(-24, 26.6),                         // IAP tip & posterior border
    F(-28, sp.bot + 0.6), F(-38, sp.bot), F(sp.tip + 9, sp.bot + 0.4), F(sp.tip + 2, sp.bot - 0.6, 0.5), // spinous inferior border
    F(sp.tip, (sp.top + sp.bot) / 2 + 3), F(sp.tip + 0.3, sp.top + 3), F(sp.tip + 2.5, sp.top, 0.5),   // spinous tip
    F(sp.tip + 11, sp.top - 0.4), F(-35, sp.top - 0.2), F(-28.5, sp.top - 2.2),                    // spinous superior border
    F(-23.5, 3), F(-21.8, -1.2), F(-20.6, -3.6), F(-18.6, -8),                              // lamina edge, mammillary process, SAP posterior border
    F(-15.6, -12, 0.6), F(-13.2, -8.6), F(-11.6, -3.6), F(-10.4, 0.8),                     // SAP tip & anterior border
    F(-7, 1.6), F(-3.5, 1.3)                                                                  // superior vertebral notch (pedicle top)
  ];
  sub.push(spline([...body, ...post]));
  return sub.join(" ");
}
/** Sacrum in its own frame (origin S1 posterior-superior corner, inclined with the S1 endplate). */
function sacrum() {
  const v = V.S1, F = v.F, D = v.D;
  return spline([
    F(0.35, 0.25, 0.5), F(3, -0.3), F(D / 2, 0.7), F(D - 3, -0.3), F(D - 0.3, 0.3, 0.5), F(D + 0.6, 3.5), F(D - 0.6, 12), F(D - 1.4, 21),
    F(D - 0.4, 24.5), F(D - 0.6, 33), F(D + 0.8, 46), F(D + 3.6, 60), F(D + 7.4, 74), F(D + 11.5, 87), F(D + 12, 93, 0.5), F(D + 8, 96.5, 0.5),
    F(36, 97), F(26, 93), F(14, 85), F(2, 72), F(-9, 57), F(-17, 42), F(-21.5, 28), F(-23.6, 16), F(-24.3, 6),
    F(-22, 2), F(-19.6, -3), F(-17.6, -8), F(-14.6, -12, 0.6), F(-12.4, -8), F(-11, -3), F(-10, 1), F(-6, 1.6), F(-2, 0.9)
  ]);
}
/** Disc wedge between the inferior endplate of `up` and the superior endplate of `down`. */
function disc(key) {
  const { up, down, ang } = DISC[key], a = V[up], b = V[down], bul = 1.7;
  const IP = a.IP, IA = a.IA, SP = b.SP, SA = b.SA, u = U(ang), n = N(ang);
  const off = (p, dp, dq = 0) => [p[0] + (u[0] * dp + n[0] * dq) * S, p[1] + (u[1] * dp + n[1] * dq) * S];
  const pm = mid(IP, SP), am = mid(IA, SA);
  const pts = [
    off(IP, 0.2, 0.15, 0.4), off(mid(IP, IA, 0.25), 0, -0.25), off(mid(IP, IA, 0.5), 0, -0.55), off(mid(IP, IA, 0.75), 0, -0.25), off(IA, -0.2, 0.15, 0.4),
    off(am, bul), off(SA, -0.2, -0.15, 0.4), off(mid(SP, SA, 0.75), 0, 0.25), off(mid(SP, SA, 0.5), 0, 0.55), off(mid(SP, SA, 0.25), 0, 0.25),
    off(SP, 0.2, -0.15, 0.4), off(pm, -bul)
  ];
  const c = mid(mid(IP, IA), mid(SP, SA)), hMid = Math.hypot(...[0, 1].map((i) => mid(IP, IA)[i] - mid(SP, SA)[i])) / 2;
  const depth = (a.D + b.D) / 2 * S, nuc = add(c, u, -0.1 * depth);
  return {
    type: "disc", d: spline(pts), z: 2.6, rotate: r(ang),
    nucleus: { rx: r(depth * 0.2), ry: r(hMid * 0.5), dx: r(nuc[0] - c[0]), dy: r(nuc[1] - c[1]) },
    post: off(pm, -bul), c, label: R(c)
  };
}

/* ---------- build ---------- */
const L2 = V.L2, L3 = V.L3, L4 = V.L4, L5 = V.L5, S1 = V.S1;
const discs = { L2L3: disc("L2L3"), L3L4: disc("L3L4"), L4L5: disc("L4L5"), L5S1: disc("L5S1") };
const cleanDisc = (o) => { const { post, c, ...rest } = o; return rest; };

/* canal: anterior wall = posterior body walls / discs (p≈0), posterior wall = spinolaminar line (p≈-15) */
const canalAnt = [L2.F(-0.6, -14), L2.F(-0.6, 12), L3.F(-0.6, -3), L3.F(-0.6, 13), L4.F(-0.6, -3), L4.F(-0.6, 13), L5.F(-0.6, -3), L5.F(-0.6, 13), S1.F(-0.6, -3), S1.F(0.5, 14), S1.F(3, 30), S1.F(8, 46), S1.F(15, 60, 0.6)];
const canalPost = [S1.F(9, 62), S1.F(0, 46), S1.F(-8, 30), S1.F(-13.5, 14), S1.F(-15.4, 0), L5.F(-16.6, 13), L5.F(-17, -3), L4.F(-17, 13), L4.F(-17, -3), L3.F(-17, 13), L3.F(-17, -3), L2.F(-17, 12), L2.F(-17, -14)];
const caudaPts = [L2.F(-11.6, -12), L2.F(-11.6, 12), L3.F(-11.6, 2), L3.F(-11.6, 22), L4.F(-11.6, 2), L4.F(-11.6, 22), L5.F(-11.4, 2), L5.F(-11, 22), S1.F(-9.6, 6), S1.F(-6.5, 22), S1.F(-2, 38)];
const lfPts = [L2.F(-15.8, -14), L2.F(-15.8, 14), L3.F(-15.8, 0), L3.F(-15.8, 16), L4.F(-15.8, 0), L4.F(-15.8, 16), L5.F(-15.8, 0), L5.F(-15.4, 16), S1.F(-14.6, 0), S1.F(-14, 6)];
const pllPts = [L2.F(-1, -14), L2.F(-1, 13), discs.L2L3.post, L3.F(-1, 13), add(discs.L3L4.post, U(DISC.L3L4.ang), -0.9 * S), L4.F(-1, 13), add(discs.L4L5.post, U(DISC.L4L5.ang), -0.9 * S), L5.F(-1, 13), add(discs.L5S1.post, U(DISC.L5S1.ang), -0.9 * S), S1.F(-0.9, 10), S1.F(1, 24)];
const allPts = [B(L2, 1, 0.2, 0.8), B(L2, 1, 0.8, 0.8), B(L3, 1, 0.1, 1.2), B(L3, 1, 0.5, -0.4), B(L3, 1, 0.9, 1.2), B(L4, 1, 0.1, 1.2), B(L4, 1, 0.5, -0.4), B(L4, 1, 0.9, 1.2), B(L5, 1, 0.1, 1.2), B(L5, 1, 0.5, -0.4), B(L5, 1, 0.92, 1.2), S1.F(S1.D + 1.4, 1), S1.F(S1.D + 0.9, 14), S1.F(S1.D + 0.4, 28)];

const SPd = { L2: { tip: -58, top: 9, bot: 24 }, L3: { tip: -59, top: 9, bot: 24.5 }, L4: { tip: -59, top: 9.5, bot: 24.5 }, L5: { tip: -51, top: 10.5, bot: 23 } };
const spTip = (v, k, t) => v.F(SPd[k].tip - 1.1, mid([0, SPd[k].top], [0, SPd[k].bot], t)[1]);

/* facet capsules: ovals around IAP(upper) / SAP(lower) overlap, in the lower vertebra's frame */
function facet(v, cp = -17, cq = -3.5) {
  const pts = []; for (let k = 0; k < 16; k++) { const a = (k / 16) * Math.PI * 2, p = cp + 5 * Math.cos(a), q = cq + 9 * Math.sin(a); pts.push(v.F(p + (q - cq) * -0.12, q)); }
  return spline(pts);
}

/* roots: cauda (above the disc they traverse) → lateral recess → under pedicle → foramen → out anteroinferiorly */
const rootL4 = [L3.F(-10, 19), L4.F(-5, -4), L4.F(-2.8, 6), L4.F(-2.6, 13.5), L4.F(-3, 18.4), L4.F(1.5, 22), L4.F(8, 25.6), L5.F(14, 3), L5.F(23, 10), L5.F(31, 19)];
const rootL5 = [L4.F(-10, 19), L5.F(-4.8, -6.5), L5.F(-2.8, 3), L5.F(-2.6, 13), L5.F(-3, 18.2), L5.F(1.5, 21.6), L5.F(8, 25), S1.F(14, 3), S1.F(26, 7), S1.F(38, 13), S1.F(45, 23)];
const rootS1 = [L5.F(-10, 18), S1.F(-4.8, -6.5), S1.F(-2.8, 3), S1.F(-1.5, 11), S1.F(4, 17.5), S1.F(14, 21), S1.F(26, 22.5), S1.F(37, 25), S1.F(44, 32), S1.F(48, 42)];

/* muscles */
const mfOut = [L2.F(-24, -14), L3.F(-23, 2), L3.F(-23.5, 26), L4.F(-24.5, 14), L5.F(-24, 6), L5.F(-25.5, 24), S1.F(-25, 12), S1.F(-21, 32), S1.F(-12, 52), S1.F(-4, 64, 0.6),
  S1.F(-18, 66), S1.F(-34, 58), S1.F(-48, 44), S1.F(-57, 26), L5.F(-71, 26), L5.F(-70, 6), L4.F(-67, 12), L3.F(-65, 12), L2.F(-63, 8), L2.F(-62, -14, 0)];
const esOut = [L2.F(-61, -14), L2.F(-62.5, 10), L3.F(-64.5, 10), L4.F(-66.5, 10), L5.F(-69.5, 12), S1.F(-56, 24), S1.F(-49, 42), S1.F(-40, 54, 0.6),
  S1.F(-56, 46), S1.F(-70, 30), L5.F(-91, 18), L4.F(-88, 12), L3.F(-86, 8), L2.F(-84, 6), L2.F(-83, -14, 0)];
const tlfPts = [L2.F(-86.5, -14), L2.F(-87, 10), L3.F(-89, 10), L4.F(-90.8, 10), L5.F(-93.6, 14), S1.F(-72, 30), S1.F(-58, 48), S1.F(-46, 58)];
const skin = [L2.F(-101, -16), L2.F(-101.5, 12), L3.F(-103.5, 12), L4.F(-105.5, 12), L5.F(-108.5, 16), S1.F(-86, 30), S1.F(-72, 50), S1.F(-60, 64), [140, 470], [820, 470], [820, -20], [140, -20]];
const fat = [L2.F(-101, -16), L2.F(-101.5, 12), L3.F(-103.5, 12), L4.F(-105.5, 12), L5.F(-108.5, 16), S1.F(-86, 30), S1.F(-72, 50), S1.F(-60, 64), S1.F(-44, 60), S1.F(-56, 48), S1.F(-70, 30), L5.F(-93.6, 14), L4.F(-90.8, 10), L3.F(-89, 10), L2.F(-87, 10), L2.F(-86.5, -16)];

/* interspinous (L4–5 is the catalogue structure; other levels decorative) */
function interspinous(a, ka, b, kb) {
  const fa = (p) => a.F(p, SPd[ka].bot - 0.2), fb = (p) => b.F(p, SPd[kb].top + 0.2);
  return { from: R(mid(fa(-27), fb(-25))), to: R(mid(fa(SPd[ka].tip + 4), fb(SPd[kb].tip + 3))), width: r(Math.max(9, 0.78 * Math.hypot(...[0, 1].map((i) => fa(-42)[i] - fb(-40)[i])))) };
}

export default {
  id: "lumbar-sagittal",
  viewBox: [0, 0, 800, 450],
  directions: { anterior: [1, 0], posterior: [-1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1], lateral: "out", medial: "in", up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] },
  backdrop: [
    { d: spline(skin.map((p, i) => (i >= 8 ? [...p, 0] : p))), fill: "skin", opacity: 0.32 },
    { d: spline(fat), fill: "fat", opacity: 0.1 }
  ],
  structures: {
    /* decorative context (not targetable) */
    vertebraL2Context: { type: "bone", d: vertebra(L2, { sp: SPd.L2 }), z: 2.0 },
    discL2L3Context: cleanDisc(discs.L2L3),

    vertebraL3: { type: "bone", d: vertebra(L3, { sp: SPd.L3 }), z: 2.1, label: R(B(L3, 0.55, 0.5)) },
    vertebraL4: { type: "bone", d: vertebra(L4, { sp: SPd.L4 }), z: 2.2, label: R(B(L4, 0.55, 0.5)) },
    vertebraL5: { type: "bone", d: vertebra(L5, { sp: SPd.L5 }), z: 2.3, label: R(B(L5, 0.55, 0.5)) },
    sacrum: { type: "bone", d: sacrum(), z: 2.4, label: R(S1.F(14, 30)) },
    discL3L4: cleanDisc(discs.L3L4),
    discL4L5: cleanDisc(discs.L4L5),
    discL5S1: cleanDisc(discs.L5S1),

    spinalCanal: { type: "space", d: spline([...canalAnt, ...canalPost]), z: 3.0, label: R(L3.F(-14.5, 8)) },
    posteriorLongitudinalLigament: { type: "ligament", points: pllPts.map(R), width: 4, z: 3.2 },
    anteriorLongitudinalLigament: { type: "ligament", points: allPts.map(R), width: 5, z: 3.2 },
    ligamentumFlavum: { type: "ligament", points: lfPts.map(R), width: 5.5, z: 3.3 },
    interspinousLigament: { type: "ligament", ...interspinous(L4, "L4", L5, "L5"), z: 3.2 },
    interspinousL3L4Context: { type: "ligament", ...interspinous(L3, "L3", L4, "L4"), z: 3.15 },
    interspinousL5S1Context: { type: "ligament", from: R(mid(L5.F(-26, 23.4), S1.F(-24, 3))), to: R(mid(L5.F(-46, 23.4), S1.F(-26, 14))), width: 12, z: 3.15 },
    supraspinousLigament: { type: "ligament", points: [spTip(L2, "L2", 0.2), spTip(L2, "L2", 0.9), spTip(L3, "L3", 0.15), spTip(L3, "L3", 0.9), spTip(L4, "L4", 0.15), spTip(L4, "L4", 0.9), spTip(L5, "L5", 0.2), spTip(L5, "L5", 0.8)].map(R), width: 5, z: 3.2 },
    facetL4L5: { type: "capsule", d: facet(L5, -17, -1.5), z: 3.5, label: R(L5.F(-17, -1.5)) },
    facetL5S1: { type: "capsule", d: facet(S1, -16.6, -2), z: 3.5, label: R(S1.F(-16.6, -2)) },
    facetL3L4Context: { type: "capsule", d: facet(L4, -17, -1.5), z: 3.45 },

    caudaEquina: { type: "nerve", points: caudaPts.map(R), width: 10, z: 4 },
    nerveRootL4: { type: "nerve", points: rootL4.map(R), width: 6.5, z: 4.2 },
    nerveRootL5: { type: "nerve", points: rootL5.map(R), width: 6.5, z: 4.2 },
    nerveRootS1: { type: "nerve", points: rootS1.map(R), width: 6.5, z: 4.2 },

    multifidus: { type: "muscle", d: spline(mfOut), axis: [R(S1.F(-30, 40)), R(L3.F(-45, 8))], fibreAngle: 28, z: 1.9, label: R(L5.F(-62, 30)) },
    erectorSpinae: { type: "muscle", d: spline(esOut), axis: [R(S1.F(-58, 40)), R(L2.F(-74, -10))], fibreAngle: 4, z: 5.2, label: R(L4.F(-78, 14)) },
    thoracolumbarFascia: { type: "fascia", points: tlfPts.map(R), width: 4, z: 5.5 }
  },
  anchors: {
    parsL5: R(L5.F(-16.6, 20.5)), parsL4: R(L4.F(-16.6, 20.5)),
    l3BodyAnterior: R(B(L3, 0.86, 0.38)), l4SuperiorEndplate: R(B(L4, 0.5, 0, 0, 0.6)),
    l4L5Foramen: R(L4.F(-5.6, 21.5)), l5S1Foramen: R(L5.F(-5.6, 21)),
    posteriorDiscL4L5: R(discs.L4L5.post), posteriorDiscL5S1: R(discs.L5S1.post),
    spinousProcessL4: R(L4.F(-46, 17)), sacralPromontory: R(S1.SA),
    conusLevel: R(L3.F(-11.6, 10)), canalL4L5: R(add(discs.L4L5.post, U(DISC.L4L5.ang), -8.5 * S))
  }
};
