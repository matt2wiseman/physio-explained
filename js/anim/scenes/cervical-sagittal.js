/**
 * Scene: cervical-sagittal — occiput to T1, LATERAL view from the patient's RIGHT, neutral lordosis (C2–C7 ≈ 18°).
 *   - ANTERIOR = screen RIGHT, POSTERIOR = screen LEFT, superior = up. Lateral = toward the viewer ("out").
 *   - Composite atlas view like lumbar-sagittal: vertebrae as lateral silhouettes (body with uncinate process and
 *     anteroinferior lip, short pedicle, articular pillar with ~45° facet joints, lamina, bifid spinous processes;
 *     long C7 "vertebra prominens"); spinal canal, spinal cord and posterior longitudinal ligament / ligamentum
 *     flavum are shown "X-ray style" over the pedicles and pillars. C1 shows anterior arch, lateral mass and
 *     posterior arch; the dens sits behind the anterior arch with the transverse ligament behind it.
 *   - Discs are true wedges (closed `d`, annulus + nucleus) drawn above the vertebrae.
 *   - Nerve roots exit ABOVE their numbered vertebra (C6 through C5–6, C7 through C6–7): each band runs from the
 *     cord → foramen (compress at ≈ 0.35) → out anteroinferiorly in the transverse-process gutter.
 *   - Vertebral artery ascends through the C6–C1 transverse foramina (projected over the posterior bodies), loops
 *     over the C1 posterior arch and enters the foramen magnum (dissection: tear/occlude at ≈ 0.75–0.85).
 *   - Muscle axes run origin → insertion. Splenius capitis and upper trapezius are superficial → ghosted.
 * Lordosis: C2 inferior endplate −6°, T1 superior endplate +14° (C2–C7 ≈ 18°). Scale ≈ 2.45 px/mm.
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const S = 2.45;
const r = (n) => Math.round(n * 10) / 10;
const pt = (p) => `${r(p[0])},${r(p[1])}`;
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
const U = (a) => [Math.cos(rad(a)), Math.sin(rad(a))];
const N = (a) => [-Math.sin(rad(a)), Math.cos(rad(a))];
const add = (p, v, k = 1) => [p[0] + v[0] * k, p[1] + v[1] * k];
const mid = (a, b, t = 0.5) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const R = (p) => [r(p[0]), r(p[1])];
const frame = (o, a) => (p, q, k) => { const u = U(a), v = N(a), x = [o[0] + (u[0] * p + v[0] * q) * S, o[1] + (u[1] * p + v[1] * q) * S]; if (k !== undefined) x.push(k); return x; };

/* ---------- column C2 (inferior endplate) → T1, chained endplate to endplate ---------- */
const SEGS = [
  { id: "C3", D: 16, h: 14, sup: -4, inf: -2 }, { disc: "C3C4", h: 5.4 },
  { id: "C4", D: 16, h: 14, sup: -0.5, inf: 1.5 }, { disc: "C4C5", h: 5.5 },
  { id: "C5", D: 16.5, h: 14, sup: 3, inf: 5 }, { disc: "C5C6", h: 5.5 },
  { id: "C6", D: 17, h: 14, sup: 6.5, inf: 8.5 }, { disc: "C6C7", h: 5.5 },
  { id: "C7", D: 17.5, h: 15, sup: 10, inf: 12 }, { disc: "C7T1", h: 5.6 },
  { id: "T1", D: 19, h: 17, sup: 14, inf: 15 }
];
const C2inf = { ang: -6, C: [478, 158], D: 17.5 };
const V = {}, DISC = {};
{
  C2inf.IA = add(C2inf.C, U(C2inf.ang), (C2inf.D / 2) * S); C2inf.IP = add(C2inf.C, U(C2inf.ang), (-C2inf.D / 2) * S);
  let C = add(C2inf.C, N((C2inf.ang + SEGS[0].sup) / 2), 5.2 * S);
  DISC.C2C3 = { up: "C2", down: "C3", ang: (C2inf.ang + SEGS[0].sup) / 2 };
  for (let i = 0; i < SEGS.length; i++) {
    const s = SEGS[i]; if (s.disc) continue;
    const m = (s.sup + s.inf) / 2, C2 = add(C, N(m), s.h * S);
    V[s.id] = { ...s, mean: m, C, SA: add(C, U(s.sup), (s.D / 2) * S), SP: add(C, U(s.sup), (-s.D / 2) * S), C2, IA: add(C2, U(s.inf), (s.D / 2) * S), IP: add(C2, U(s.inf), (-s.D / 2) * S) };
    V[s.id].F = frame(V[s.id].SP, m);
    const d = SEGS[i + 1], nx = SEGS[i + 2];
    if (d) { C = add(C2, N((s.inf + nx.sup) / 2), d.h * S); DISC[d.disc] = { up: s.id, down: nx.id, ang: (s.inf + nx.sup) / 2 }; }
  }
  V.C2 = { IA: C2inf.IA, IP: C2inf.IP, D: C2inf.D, mean: C2inf.ang };
}
const G = frame(C2inf.IP, C2inf.ang);   // C2 frame: origin = posterior-inferior corner of the C2 body; q negative = cranial
const B = (v, s, t, dp = 0, dq = 0, k) => {
  const a = mid(mid(v.SP, v.SA, s), mid(v.IP, v.IA, s), t), u = U(v.mean), n = N(v.mean);
  const x = [a[0] + (u[0] * dp + n[0] * dq) * S, a[1] + (u[1] * dp + n[1] * dq) * S]; if (k !== undefined) x.push(k); return x;
};

/** Lateral silhouette of a subaxial cervical vertebra. sp = { tip, droop, bifid } */
function vertebra(v, sp) {
  const F = v.F, tip = sp.tip, dr = sp.droop || 0;
  const body = [
    B(v, 0, 0, 0.3, 0.2, 0.5), B(v, 0.06, 0, 0.1, -1.5, 0.6), B(v, 0.18, 0, 0, -0.1), B(v, 0.6, 0, 0, 0.2), B(v, 1, 0, -0.4, 0.3, 0.5),
    B(v, 1, 0.15, 0.15, 0), B(v, 1, 0.55, -0.7, 0), B(v, 1, 0.9, 0.45, 0.2), B(v, 1, 1, 0.55, 1.2, 0.5),
    B(v, 0.84, 1, 0, 0.3), B(v, 0.5, 1, 0, -0.5), B(v, 0.12, 1, 0, 0), B(v, 0, 1, 0.3, -0.2, 0.5), B(v, 0, 0.72, 0.3, 0)
  ];
  const post = [
    F(-0.2, 9.4, 0.6), F(-2.5, 8.9), F(-4.6, 9.6), F(-6.1, 12.2), F(-6.6, 16, 0.4),           // pedicle lower edge, pillar front
    F(-11.9, 20.7), F(-17.2, 25.3, 0.4), F(-18.4, 21.6),                                       // inferior facet, pillar back
    F(-21, 21.6 + dr * 0.3), F(tip + 7, 21 + dr), F(tip + 1.4, 22.4 + dr, 0.5)                  // lamina & spinous inferior border
  ];
  if (sp.bifid) post.push(F(tip, 20.6 + dr), F(tip + 2.2, 19.2 + dr), F(tip + 0.4, 17.4 + dr, 0.5));
  else post.push(F(tip - 0.6, 19.6 + dr), F(tip + 0.2, 16.2 + dr, 0.5));
  post.push(F(tip + 6, 13.6 + dr * 0.8), F(-22, 10.4 + dr * 0.2), F(-18.8, 8.4), F(-16.8, 6.3, 0.4),  // spinous superior border, lamina top
    F(-11, 1.6), F(-5.4, -3, 0.4), F(-5.2, 0), F(-4, 2.3), F(-2, 2.6));                           // superior facet, pillar front, pedicle top
  return spline([...body, ...post]);
}
function c2() {
  return spline([
    G(0.3, -0.2, 0.5), G(0, -3.5), G(0, -6.2, 0.6), G(-2.5, -6.6), G(-5, -5.8), G(-6.1, -2.2), G(-6.6, 1.5, 0.4),     // posterior wall, pedicle, IAP front
    G(-11.9, 6.2), G(-17.2, 10.8, 0.4), G(-18.6, 7.4), G(-22, 5.2), G(-30, 4.6), G(-38, 5.4), G(-43, 4, 0.5),        // C2–3 facet, lamina, spinous
    G(-45, 0.4), G(-43, -2.2), G(-44.6, -5.2, 0.5), G(-37, -8.8), G(-27, -11), G(-17, -14), G(-9.8, -18.2),           // bifid tip, superior border, lamina
    G(-5, -21.2), G(1, -22.6), G(3.2, -25), G(3.4, -32), G(5.2, -36.4, 0.6), G(8.6, -37.6), G(12, -36, 0.6),          // superior facet → dens
    G(13.6, -32), G(13.5, -24.5), G(15.2, -21.6), G(17.2, -19.6, 0.6), G(16.8, -14), G(16.4, -8), G(17.3, -2.5),     // dens front, body front
    G(17.9, 1.6, 0.5), G(14, 0.6), G(8.5, 0.3), G(3, 0.2)                                                            // anteroinferior lip, endplate
  ]);
}
function c1() {
  return spline([
    G(22.8, -27.2, 0.6), G(22.6, -32), G(19.8, -35.6, 0.6), G(15.4, -36.2), G(12, -37.4), G(3, -37.2), G(-5.6, -37),   // anterior arch, lateral mass top
    G(-8.6, -34.2), G(-13.5, -33.6), G(-18, -35), G(-25, -35.4), G(-32.5, -34.6, 0.6), G(-35, -31.2), G(-33, -27.8, 0.6), // posterior arch (VA groove), tubercle
    G(-25, -28.4), G(-15, -28.2), G(-9, -26.4), G(-5.4, -22.8), G(1.5, -22.4), G(12, -22.8), G(16.5, -25), G(20.2, -24.8)
  ]);
}
function occiput() {
  return spline([
    G(27, -66, 0), G(19, -53), G(12.8, -44.4, 0.5), G(12, -40.4), G(8, -37.8), G(2, -37.4), G(-4, -37.8), G(-7.6, -39.6),
    G(-14, -41), G(-24, -42.6, 0.5), G(-34, -46.4), G(-44, -52.4), G(-52, -59.2), G(-57, -65.4), G(-60, -69, 0.6), G(-60.6, -77), G(-61, -92, 0),
    G(-53, -92, 0), G(-52.4, -76), G(-48, -64), G(-39, -55), G(-29, -49), G(-20, -47), G(-12, -45.6), G(-4, -46.4), G(4, -47.4), G(10.4, -52.4), G(18, -66, 0)
  ]);
}
function disc(key) {
  const { up, down, ang } = DISC[key], a = V[up], b = V[down], bul = 1.1;
  const IP = a.IP, IA = a.IA, SP = b.SP, SA = b.SA, u = U(ang), n = N(ang);
  const off = (p, dp, dq = 0, k) => { const x = [p[0] + (u[0] * dp + n[0] * dq) * S, p[1] + (u[1] * dp + n[1] * dq) * S]; if (k !== undefined) x.push(k); return x; };
  const pm = mid(IP, SP), am = mid(IA, SA);
  const pts = [off(IP, 0.2, 0.1, 0.4), off(mid(IP, IA, 0.5), 0, -0.4), off(IA, -0.8, 0.9, 0.4), off(am, bul * 0.6), off(SA, -0.3, -0.1, 0.4),
    off(mid(SP, SA, 0.5), 0, 0.2), off(mid(SP, SA, 0.12), 0, -0.9), off(SP, 0.15, -0.1, 0.4), off(pm, -bul)];
  const c = mid(mid(IP, IA), mid(SP, SA)), hMid = Math.hypot(mid(IP, IA)[0] - mid(SP, SA)[0], mid(IP, IA)[1] - mid(SP, SA)[1]) / 2;
  const depth = ((a.D + b.D) / 2) * S, nuc = add(c, u, -0.12 * depth);
  return { type: "disc", d: spline(pts), z: 2.6, nucleus: { rx: r(depth * 0.2), ry: r(hMid * 0.45), dx: r(nuc[0] - c[0]), dy: r(nuc[1] - c[1]) }, post: off(pm, -bul), ant: off(am, bul), c, label: R(c) };
}
const discs = Object.fromEntries(Object.keys(DISC).map((k) => [k, disc(k)]));
const cleanDisc = (o) => { const { post, ant, c, ...rest } = o; return rest; };
const { C3, C4, C5, C6, C7, T1 } = V;
const SPD = { C3: { tip: -31, bifid: true }, C4: { tip: -32, bifid: true }, C5: { tip: -33, droop: 1, bifid: true }, C6: { tip: -38, droop: 2.5, bifid: true }, C7: { tip: -47, droop: 5 }, T1: { tip: -50, droop: 9 } };
const tipPt = (v, k, extra = 0) => v.F(SPD[k].tip - 1 - extra, 18 + (SPD[k].droop || 0));

/* facet capsules: oval along the joint line between the upper pillar's inferior facet and the lower superior facet */
function facet(F, k = 1) {
  const a = [-6.6, 16], b = [-17.2, 25.3], c = mid(a, b), L = 8.2 * k, W = 3.6, dx = (b[0] - a[0]) / Math.hypot(b[0] - a[0], b[1] - a[1]), dy = (b[1] - a[1]) / Math.hypot(b[0] - a[0], b[1] - a[1]);
  const pts = []; for (let i = 0; i < 14; i++) { const t = (i / 14) * Math.PI * 2, s = L * Math.cos(t), w = W * Math.sin(t); pts.push(F(c[0] + dx * s - dy * w, c[1] + dy * s + dx * w)); }
  return spline(pts);
}
const GF = (p, q, k) => G(p, q - 0, k);
const facetC2 = (() => { const a = [-6.6, 1.5], b = [-17.2, 10.8], c = mid(a, b), dx = (b[0] - a[0]) / Math.hypot(b[0] - a[0], b[1] - a[1]), dy = (b[1] - a[1]) / Math.hypot(b[0] - a[0], b[1] - a[1]); const pts = []; for (let i = 0; i < 14; i++) { const t = (i / 14) * Math.PI * 2, s = 8.2 * Math.cos(t), w = 3.6 * Math.sin(t); pts.push(GF(c[0] + dx * s - dy * w, c[1] + dy * s + dx * w)); } return spline(pts); })();

/* canal, cord, ligaments */
const canalAnt = [G(6, -43, 0), G(1.2, -38), G(0.6, -24), G(-0.6, -12), G(-0.6, 0), C3.F(-0.6, 6), C4.F(-0.6, 6), C5.F(-0.6, 6), C6.F(-0.6, 6), C7.F(-0.6, 6), T1.F(-0.6, 6), T1.F(-0.6, 30, 0)];
const canalPost = [T1.F(-16, 30, 0), T1.F(-16, 6), C7.F(-16, 8), C6.F(-16, 8), C5.F(-16, 8), C4.F(-16, 8), C3.F(-16, 8), G(-16.5, 0), G(-17.5, -16), G(-21, -30), G(-23, -42, 0)];
const cordPts = [G(-9, -82), G(-8.6, -60), G(-8.4, -44), G(-8, -30), G(-7.8, -16), G(-7.8, -2), C3.F(-7.6, 8), C4.F(-7.6, 8), C5.F(-7.6, 8), C6.F(-7.6, 8), C7.F(-7.6, 8), T1.F(-7.6, 8), T1.F(-7.6, 30)];
const pllPts = [G(2.4, -40), G(1.7, -26), G(-0.9, -14), G(-0.9, -2), discs.C2C3.post, C3.F(-0.9, 8), discs.C3C4.post, C4.F(-0.9, 8), discs.C4C5.post, C5.F(-0.9, 8), discs.C5C6.post, C6.F(-0.9, 8), discs.C6C7.post, C7.F(-0.9, 8), discs.C7T1.post, T1.F(-0.9, 12), T1.F(-0.9, 28)];
const allPts = [G(23.8, -30), G(19, -22.5), G(18.4, -12), G(19, 1.8), discs.C2C3.ant, B(C3, 1, 0.5, 0.2), discs.C3C4.ant, B(C4, 1, 0.5, 0.2), discs.C4C5.ant, B(C5, 1, 0.5, 0.2), discs.C5C6.ant, B(C6, 1, 0.5, 0.2), discs.C6C7.ant, B(C7, 1, 0.5, 0.2), discs.C7T1.ant, B(T1, 1, 0.5, 0.4), B(T1, 1, 1.3, 0.8)];
const lfPts = [G(-18.4, -26), G(-15.5, -12), G(-15, 0), C3.F(-15, 8), C4.F(-15, 8), C5.F(-15, 8), C6.F(-15, 8), C7.F(-15, 8), T1.F(-15, 8), T1.F(-15, 24)];

/* roots exit above their vertebra: C6 via C5–6, C7 via C6–7 */
const root = (Fu, Fl) => [Fu(-8.2, 8), Fu(-7, 13.5), Fu(-4.2, 17), Fu(-1.5, 18.9), Fl(2.8, 0.5), Fl(7, 2.6), Fl(12.5, 6), Fl(18, 10.5), Fl(23, 16)];
const rootC6 = root(C5.F, C6.F), rootC7 = root(C6.F, C7.F);

/* vessels */
const vaPts = [T1.F(17, 22), T1.F(9, 8), C7.F(5.5, 2), C6.F(3.6, 4), C5.F(3, 4), C4.F(3, 4), C3.F(3, 4), G(2.6, -6), G(-0.6, -16), G(-2.6, -27), G(-8, -35.6), G(-15, -37.6), G(-20.5, -38), G(-19, -42.5), G(-12, -46.5), G(-4, -50)];
const icaPts = [C4.F(28, 2), C3.F(27.5, 4), G(29, 0), G(29.5, -14), G(28.5, -28), G(26.5, -40), G(25, -50)];
const ccaPts = [T1.F(36, 26), C7.F(33, 4), C6.F(31, 4), C5.F(29.5, 6), C4.F(28.6, 4)];
const ecaPts = [C4.F(29, 2), C3.F(32.5, 2), G(36, 0), G(40, -12), G(43, -26)];

/* muscles */
const longus = [G(24, -32, 0.5), G(25.5, -27), G(23.5, -18), G(22.6, -6), B(C3, 1, 0.5, 5.6), B(C4, 1, 0.5, 6.2), B(C5, 1, 0.5, 6.6), B(C6, 1, 0.5, 6.6), B(C7, 1, 0.5, 6.2), B(T1, 1, 0.6, 5.2), B(T1, 1, 1.25, 4, 0),
  B(T1, 1, 1.25, 1.4, 0), B(T1, 1, 0.6, 1.6), B(C7, 1, 0.5, 1.6), B(C6, 1, 0.5, 1.6), B(C5, 1, 0.5, 1.6), B(C4, 1, 0.5, 1.6), B(C3, 1, 0.5, 1.6), G(19.2, -6), G(19.6, -18), G(21.4, -26)];
const semis = [G(-17, -10), G(-21, -1), C3.F(-21, 6), C4.F(-21, 6), C5.F(-21, 6), C6.F(-21, 6), C7.F(-21, 8), T1.F(-21, 8), T1.F(-21, 30, 0),
  T1.F(-56, 30, 0), T1.F(-56, 12), C7.F(-52, 10), C6.F(-44, 8), C5.F(-39.5, 8), C4.F(-38.5, 8), C3.F(-38, 8), G(-49, 6), G(-48, -4), G(-40, -10)];
const subocc = [G(-20, -12), G(-38, -5), G(-48, -9), G(-56, -24), G(-55, -44), G(-52, -57), G(-38, -51), G(-26, -46), G(-14, -42), G(-9, -33), G(-11, -22)];
const splen = [T1.F(-58, 18), C7.F(-58, 2), C5.F(-52, -2), C3.F(-48, -6), G(-44, -18), G(-34, -34), G(-18, -44), G(-6, -48), G(-1, -43, 0.5), G(-12, -36), G(-28, -24), G(-36, -10), C3.F(-41, 4), C5.F(-46, 8), C7.F(-50, 12), T1.F(-50, 22)];
const trap = [G(-67, -82, 0), G(-67.6, -68), G(-64, -52), G(-61, -32), G(-60, -10), C3.F(-61, 10), C5.F(-62, 10), C7.F(-60, 10), T1.F(-62, 24, 0),
  T1.F(-30, 34, 0), T1.F(-46, 16), C7.F(-50, 0), C5.F(-54, 0), C3.F(-55, 0), G(-54, -14), G(-56, -34), G(-58, -54), G(-59, -72), G(-60, -82, 0)];
const nuchae = [G(-60.6, -69), G(-58, -54), G(-54, -36), G(-50, -18), G(-46, -4), C3.F(-42.5, 10), C4.F(-43.5, 13), C5.F(-45, 16), C6.F(-47, 19), tipPt(C7, "C7", 0.5)];
const gon = [G(-12, -20.5), G(-20, -16), G(-30, -14.5), G(-38, -18), G(-46, -28), G(-54, -42), G(-62, -56), G(-66.5, -66), G(-67, -80)];
const skinBack = [G(-69, -95), G(-69.5, -70), G(-66, -50), G(-63, -28), G(-62.5, -6), C3.F(-64, 10), C4.F(-64.5, 10), C5.F(-64.5, 10), C6.F(-63, 10), C7.F(-62, 10), T1.F(-64, 26)];

export default {
  id: "cervical-sagittal",
  viewBox: [0, 0, 800, 450],
  directions: { anterior: [1, 0], posterior: [-1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1], lateral: "out", medial: "in", up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] },
  backdrop: [
    { d: spline([...skinBack, [800, 470, 0], [800, -20, 0]]), fill: "skin", opacity: 0.32 }
  ],
  structures: {
    suboccipitals: { type: "muscle", d: spline(subocc), axis: [R(G(-40, -8)), R(G(-46, -50))], fibreAngle: 20, z: 1.8, label: R(G(-40, -30)) },
    semispinalis: { type: "muscle", d: spline(semis), axis: [R(T1.F(-36, 26)), R(G(-34, -6))], fibreAngle: 18, z: 1.9, label: R(C5.F(-42, 12)) },

    occiput: { type: "bone", d: occiput(), z: 2.0, label: R(G(-44, -60)) },
    atlas: { type: "bone", d: c1(), z: 2.05, label: R(G(-26, -31.5)) },
    axis: { type: "bone", d: c2(), z: 2.1, label: R(G(10, -10)) },
    vertebraC3: { type: "bone", d: vertebra(C3, SPD.C3), z: 2.15, label: R(B(C3, 0.5, 0.5)) },
    vertebraC4: { type: "bone", d: vertebra(C4, SPD.C4), z: 2.2, label: R(B(C4, 0.5, 0.5)) },
    vertebraC5: { type: "bone", d: vertebra(C5, SPD.C5), z: 2.25, label: R(B(C5, 0.5, 0.5)) },
    vertebraC6: { type: "bone", d: vertebra(C6, SPD.C6), z: 2.3, label: R(B(C6, 0.5, 0.5)) },
    vertebraC7: { type: "bone", d: vertebra(C7, SPD.C7), z: 2.35, label: R(B(C7, 0.5, 0.5)) },
    vertebraT1: { type: "bone", d: vertebra(T1, SPD.T1), z: 2.4, label: R(B(T1, 0.5, 0.5)) },
    discC2C3Context: cleanDisc(discs.C2C3), discC3C4Context: cleanDisc(discs.C3C4),
    discC4C5: cleanDisc(discs.C4C5), discC5C6: cleanDisc(discs.C5C6), discC6C7: cleanDisc(discs.C6C7),
    discC7T1Context: cleanDisc(discs.C7T1),

    spinalCanalContext: { type: "space", d: spline([...canalAnt, ...canalPost]), z: 3.0 },
    anteriorLongitudinalLigament: { type: "ligament", points: allPts.map(R), width: 4, z: 3.2 },
    posteriorLongitudinalLigament: { type: "ligament", points: pllPts.map(R), width: 3.6, z: 3.2 },
    ligamentumFlavumContext: { type: "ligament", points: lfPts.map(R), width: 4, z: 3.25 },
    transverseLigament: { type: "ligament", from: R(G(1.4, -34.4)), to: R(G(1.4, -26.2)), width: 6, z: 3.3 },
    ligamentumNuchae: { type: "ligament", points: nuchae.map(R), width: 5, z: 3.2 },
    facetC2C3: { type: "capsule", d: facetC2, z: 4.1, label: R(G(-11.9, 6.2)) },
    facetC5C6: { type: "capsule", d: facet(C5.F), z: 4.1, label: R(C5.F(-11.9, 20.7)) },
    facetC3C4Context: { type: "capsule", d: facet(C3.F), z: 4.05 }, facetC4C5Context: { type: "capsule", d: facet(C4.F), z: 4.05 },
    facetC6C7Context: { type: "capsule", d: facet(C6.F), z: 4.05 }, facetC7T1Context: { type: "capsule", d: facet(C7.F), z: 4.05 },

    vertebralArtery: { type: "vessel", kind: "artery", points: vaPts.map(R), width: 5, z: 3.9 },
    spinalCord: { type: "nerve", points: cordPts.map(R), width: 17, z: 4 },
    nerveRootC6: { type: "nerve", points: rootC6.map(R), width: 6, z: 4.2 },
    nerveRootC7: { type: "nerve", points: rootC7.map(R), width: 6, z: 4.2 },
    longusColli: { type: "muscle", d: spline(longus), axis: [R(B(T1, 1, 1, 3)), R(G(24, -28))], fibreAngle: 4, z: 4.5, label: R(B(C5, 1, 0.5, 4)) },
    commonCarotidContext: { type: "vessel", kind: "artery", points: ccaPts.map(R), width: 9, z: 4.55 },
    externalCarotidContext: { type: "vessel", kind: "artery", points: ecaPts.map(R), width: 5, z: 4.55 },
    carotidArtery: { type: "vessel", kind: "artery", points: icaPts.map(R), width: 7, z: 4.6 },
    splenius: { type: "muscle", d: spline(splen), axis: [R(C7.F(-54, 8)), R(G(-6, -45))], fibreAngle: 6, z: 5, ghost: true, label: R(C4.F(-47, 0)) },
    upperTrapezius: { type: "muscle", d: spline(trap), axis: [R(G(-62, -66)), R(T1.F(-40, 30))], fibreAngle: 6, z: 5.2, ghost: true, label: R(C4.F(-59, 6)) },
    greaterOccipitalNerve: { type: "nerve", points: gon.map(R), width: 4.5, z: 5.6 }
  },
  anchors: {
    dens: R(G(8.6, -31)), c1c2: R(G(1.5, -22.6)), c2c3Facet: R(G(-11.9, 6.2)), c5c6Facet: R(C5.F(-11.9, 20.7)),
    c5c6Foramen: R(C5.F(-3, 15.5)), c6c7Foramen: R(C6.F(-3, 15.5)),
    posteriorDiscC5C6: R(discs.C5C6.post), posteriorDiscC6C7: R(discs.C6C7.post), c7SpinousProcess: R(C7.F(SPD.C7.tip + 6, 18 + 4)),
    cervicothoracicJunction: R(discs.C7T1.c), cordC5C6: R(add(discs.C5C6.post, U(DISC.C5C6.ang), -7 * S)),
    anteriorC5C6: R(discs.C5C6.ant), occiputBase: R(G(-36, -47))
  }
};
