/**
 * Scene: lumbar-axial — axial (transverse) view at the L4–5 disc, radiological convention (viewed from the feet).
 *   - ANTERIOR = screen UP, POSTERIOR = screen DOWN; patient's RIGHT = screen LEFT, patient's LEFT = screen RIGHT.
 *     Superior = away from the viewer ("in"), inferior = toward the viewer ("out").
 *   - Composite teaching view (as in standard herniation diagrams): the L4–5 disc (annulus + nucleus) lies on the
 *     vertebral body; the neural arch shows pedicles, transverse processes, L5 superior and L4 inferior articular
 *     processes (facet joints ~45° to the coronal plane), laminae and spinous process. The thecal sac (CSF) holds the
 *     cauda equina; the L5 roots leave the sac anterolaterally, run in the lateral recess, then out through the
 *     foramen into psoas (compress at ≈ 0.25 = lateral recess / subarticular, ≈ 0.5 = foraminal, ≈ 0.75 = extraforaminal).
 *   - Ligamentum flavum lines the posterior canal and the anterior facet capsules; PLL on the posterior disc.
 *   - Muscles: psoas (anterolateral), multifidus (beside the spinous process), erector spinae (lateral to multifidus).
 * Scale ≈ 3.2 px/mm; origin = disc centre at screen (400, 122).
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const S = 3.2, OX = 400, OY = 122;
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
/** mm (x + = patient's left / screen right, y + = posterior / screen down) → px */
const P = (x, y, k) => (k === undefined ? [OX + x * S, OY + y * S] : [OX + x * S, OY + y * S, k]);
const pts = (list) => list.map(([x, y, k]) => P(x, y, k));
const R = (p) => [r(p[0]), r(p[1])];
/** symmetric outline from a right-half list (screen-left, x ≤ 0) running from the midline front to the midline back */
const sym = (half) => [...half, ...half.slice(1, -1).reverse().map(([x, y, k]) => [-x, y, k])];
const mirror = (list) => list.map(([x, y, k]) => [-x, y, k]).reverse();

/* ---------- shapes (right half; x ≤ 0) ---------- */
const BODY = [[0, -19.4], [-12, -18.6], [-21, -15], [-25.6, -7], [-26, 3], [-23.6, 11.5], [-17.4, 17.4], [-9, 18.8], [0, 17.6]];
const DISC = [[0, -18.2], [-12, -17.4], [-20, -14], [-24.4, -6.6], [-24.8, 3], [-22.5, 10.8], [-16.6, 16.4], [-8.6, 17.6], [0, 16.6]];
const ARCH_R = [   // right half of the neural arch: outer contour from the pedicle root to the spinous tip
  [-12.4, 17.4, 0.5], [-21.6, 15.2, 0.5], [-23.6, 18.6], [-30, 18], [-40, 18.6], [-46.4, 20.6, 0.6], [-46.4, 25.8, 0.6], [-38, 26.4], [-31.4, 27.4],   // pedicle, transverse process
  [-30.2, 31.6], [-30.6, 36.2], [-28.4, 39.2, 0.5], [-17.2, 25.6, 0], [-26.2, 40.6, 0.5],                                                         // SAP, facet slit, IAP
  [-23.6, 42.6], [-17, 44.6], [-9.4, 47.2], [-5.4, 52], [-4.6, 62], [-3.4, 68.4, 0.6], [0, 69.6]                                                    // lamina, spinous process
];
const ARCH_IN_R = [[0, 34], [-8, 33.2], [-12.8, 30.4], [-14.6, 25.4], [-13.4, 20.6]];   // canal side: lamina → lateral recess → pedicle (midline back → front)
const arch = [...ARCH_R, ...mirror(ARCH_R).slice(1), ...mirror(ARCH_IN_R), ...ARCH_IN_R.slice(1)];
const SAC = sym([[0, 20.6], [-5.6, 21], [-9.8, 23.6], [-10.6, 27.4], [-7.6, 31], [0, 32]]);
const facet = (s) => { const c = [s * 21.6, 31.6], a = Math.atan2(36.8 - 24.6, s * (26.6 - 16.4)), out = []; for (let i = 0; i < 14; i++) { const t = (i / 14) * Math.PI * 2, u = 9.4 * Math.cos(t), w = 4.4 * Math.sin(t); out.push([c[0] + u * Math.cos(a) - w * Math.sin(a), c[1] + u * Math.sin(a) + w * Math.cos(a)]); } return out; };
const PSOAS = [[-26.6, -15], [-34, -19.6], [-43, -17], [-49.6, -8], [-51, 4], [-46, 14.6], [-38, 17.4], [-31, 14.6], [-26.8, 6], [-26.4, -6]];
const MULTI = [[-5.8, 50], [-9.8, 47.6], [-17.6, 45.4], [-24.4, 43.4], [-28.6, 46], [-29, 56], [-26, 67], [-19, 75.4], [-10, 78], [-5, 72], [-5.2, 60]];
const ERECTOR = [[-30.4, 30], [-38, 28.4], [-48, 29.4], [-57, 36], [-61, 48], [-58.6, 62], [-49, 73.6], [-36, 79.6], [-22, 80], [-20, 76.2], [-27, 67.6], [-30.4, 56.6], [-30.2, 45]];
const SKIN = [[0, -48], [-40, -44], [-70, -26], [-82, 6], [-80, 46], [-70, 74], [-42, 88], [0, 91]];
const rootR = [[-7.4, 23.4], [-11.2, 22.6], [-14.4, 21.8], [-19, 20.4], [-24.6, 19], [-30, 16.4], [-35.4, 11.6], [-39.6, 6]];

export default {
  id: "lumbar-axial",
  viewBox: [0, 0, 800, 450],
  directions: { anterior: [0, -1], posterior: [0, 1], right: [-1, 0], left: [1, 0], superior: "in", inferior: "out", proximal: "in", distal: "out", up: [0, -1], down: [0, 1] },
  backdrop: [{ d: spline(pts(sym(SKIN))), fill: "skin", opacity: 0.3 }],
  structures: {
    psoasRight: { type: "muscle", d: spline(pts(PSOAS)), axis: [R(P(-38, -18)), R(P(-38, 16))], fibreAngle: 90, z: 1, label: R(P(-39, -2)) },
    psoasLeft: { type: "muscle", d: spline(pts(mirror(PSOAS))), axis: [R(P(38, -18)), R(P(38, 16))], fibreAngle: 90, z: 1, label: R(P(39, -2)) },
    erectorSpinaeRight: { type: "muscle", d: spline(pts(ERECTOR)), axis: [R(P(-44, 32)), R(P(-38, 76))], fibreAngle: 90, z: 1, label: R(P(-45, 55)) },
    erectorSpinaeLeft: { type: "muscle", d: spline(pts(mirror(ERECTOR))), axis: [R(P(44, 32)), R(P(38, 76))], fibreAngle: 90, z: 1, label: R(P(45, 55)) },
    multifidusRight: { type: "muscle", d: spline(pts(MULTI)), axis: [R(P(-16, 47)), R(P(-14, 76))], fibreAngle: 90, z: 1.1, label: R(P(-16, 62)) },
    multifidusLeft: { type: "muscle", d: spline(pts(mirror(MULTI))), axis: [R(P(16, 47)), R(P(14, 76))], fibreAngle: 90, z: 1.1, label: R(P(16, 62)) },

    vertebralBody: { type: "bone", d: spline(pts(sym(BODY))), z: 2, label: R(P(0, -17.2)) },
    posteriorElements: { type: "bone", d: spline(pts(arch)), z: 2.1, label: R(P(0, 58)) },
    disc: { type: "disc", d: spline(pts(sym(DISC))), nucleus: { rx: r(11 * S), ry: r(7.6 * S), dx: 0, dy: r(1.8 * S) }, z: 2.6, label: R(P(-14, -6)) },
    posteriorLongitudinalLigament: { type: "ligament", points: pts([[-10, 17.4], [-4, 18.2], [4, 18.2], [10, 17.4]]).map(R), width: 4, z: 3 },
    thecalSac: { type: "space", d: spline(pts(SAC)), visible: true, z: 3.1, label: R(P(0, 24)) },
    ligamentumFlavum: { type: "ligament", points: pts([[-17.6, 23.4], [-14.6, 29.2], [-8.6, 32.4], [0, 33.2], [8.6, 32.4], [14.6, 29.2], [17.6, 23.4]]).map(R), width: 5, z: 3.2 },
    facetJointRight: { type: "capsule", d: spline(pts(facet(-1))), z: 3.3, label: R(P(-21.6, 31.6)) },
    facetJointLeft: { type: "capsule", d: spline(pts(facet(1))), z: 3.3, label: R(P(21.6, 31.6)) },
    caudaEquina: { type: "nerve", points: pts([[-6.6, 26.8], [-3, 28.6], [3, 28.6], [6.6, 26.8]]).map(R), width: 8, z: 3.6 },
    nerveRootRight: { type: "nerve", points: pts(rootR).map(R), width: 7, z: 3.8 },
    nerveRootLeft: { type: "nerve", points: pts(mirror(rootR).reverse()).map(R), width: 7, z: 3.8 },
    thoracolumbarFasciaContext: { type: "fascia", points: pts([[-62, 40], [-60, 62], [-48, 79], [-32, 84], [-14, 82], [0, 74], [14, 82], [32, 84], [48, 79], [60, 62], [62, 40]]).map(R), width: 3, z: 1.2 }
  },
  anchors: {
    posterolateralLeft: R(P(14.6, 16.2)), posterolateralRight: R(P(-14.6, 16.2)), central: R(P(0, 17.4)),
    foraminalLeft: R(P(25, 18.6)), foraminalRight: R(P(-25, 18.6)), lateralRecessLeft: R(P(13.4, 22.4)), lateralRecessRight: R(P(-13.4, 22.4)),
    parsLeft: R(P(20.6, 41.4)), parsRight: R(P(-20.6, 41.4)), nucleusCentre: R(P(0, 1.8)), annulusPosterior: R(P(0, 14.6))
  }
};
