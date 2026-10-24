/**
 * Scene: knee-anterior — RIGHT knee, ANTERIOR view, knee slightly flexed with the joint opened
 * (atlas convention after Netter "Right knee in flexion: anterior view").
 *   - Viewer faces the patient: patient's LATERAL side (fibula, LCL, ITB) is on screen LEFT,
 *     MEDIAL side (MCL, pes anserinus) on screen RIGHT. Superior = up.
 *   - The tibial plateau is tilted toward the viewer (seen from anterosuperior) so the C-shaped
 *     menisci, tibial spines and both cruciate footprints are visible; the femur shows the
 *     trochlea (patellar surface) above the intercondylar notch.
 *   - The patella is REFLECTED inferiorly on its tendon (articular surface toward the viewer)
 *     and ghosted, so the notch and cruciates are unobstructed.
 * Scale ≈ 2.8 px/mm mediolaterally (bicondylar width ≈ 79 mm).
 * Band conventions (from → to):
 *   acl  femoral footprint (lateral notch wall) → tibial footprint (anterior intercondylar area)
 *   pcl  femoral footprint (medial notch wall/roof) → tibial footprint (posterior intercondylar area)
 *   mcl  femoral origin (medial epicondyle) → tibial insertion (≈ 6 cm below joint line)
 *   lcl  femoral origin (lateral epicondyle) → fibular head
 *   itBand  proximal (lateral thigh) → Gerdy's tubercle;  pesAnserine  proximal → insertion
 *   popliteusTendon  musculotendinous junction (behind tibia) → femoral insertion (popliteal groove)
 * Cartilage axes: menisci anterior body → posterior body (along the peripheral rim);
 *   femoral/tibial cartilage lateral → medial.
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const r = (n) => Math.round(n * 10) / 10;
const pt = (p) => `${r(p[0])},${r(p[1])}`;
/** Catmull-Rom spline through points → cubic Bézier path. A point [x, y, 1] is a sharp corner. */
function spline(pts, closed = true, tension = 1) {
  const n = pts.length, s = tension / 6;
  const at = (i) => (closed ? pts[(i + n) % n] : pts[Math.min(n - 1, Math.max(0, i))]);
  let d = `M${pt(pts[0])}`;
  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
    const c1 = p1[2] ? p1 : [p1[0] + (p2[0] - p0[0]) * s, p1[1] + (p2[1] - p0[1]) * s];
    const c2 = p2[2] ? p2 : [p2[0] - (p3[0] - p1[0]) * s, p2[1] - (p3[1] - p1[1]) * s];
    d += ` C${pt(c1)} ${pt(c2)} ${pt(p2)}`;
  }
  return closed ? d + " Z" : d;
}
function normalAt(c, i) {
  const a = c[Math.max(0, i - 1)], b = c[Math.min(c.length - 1, i + 1)];
  const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
  return [-dy / l, dx / l];
}
/** Points offset from a polyline along its normals (positive = left of travel in screen space). */
const offset = (c, d) => c.map((p, i) => { const n = normalAt(c, i); const di = typeof d === "function" ? d(i) : d; return [p[0] + n[0] * di, p[1] + n[1] * di]; });
/** Closed outline around a centreline with per-point half-widths. */
const ribbon = (c, w) => spline([...offset(c, (i) => (Array.isArray(w) ? w[i] : w)), ...offset(c, (i) => -(Array.isArray(w) ? w[i] : w)).reverse()]);
/** Lens-shaped band between a boundary polyline and its offset, tapering to the ends (cartilage seen tangentially). */
const rim = (c, t) => spline([...c, ...offset(c, (i) => t * Math.pow(Math.sin((Math.PI * i) / (c.length - 1)), 0.6)).slice(1, -1).reverse()]);
const ellipse = (cx, cy, rx, ry, n = 18) => Array.from({ length: n }, (_, i) => { const a = (i / n) * Math.PI * 2; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];

/* Tibial-plateau plan → screen projection. X = mm medial(+)/lateral(−), Z = mm anterior(+)/posterior(−), h = mm height. */
const K = 2.8, Q = 1.4, HP = 2.4, CX = 400, CY = 236;
const pj = ([X, Z, h = 0]) => [CX + X * K, CY + Z * Q - h * HP];

/** Meniscus: ribbon in plan space, projected; the peripheral (outer) rim is raised posteriorly to read as a wedge. */
function meniscus(centre, widths, ctr) {
  const a = offset(centre, (i) => widths[i]), b = offset(centre, (i) => -widths[i]);
  const outerIsA = Math.hypot(a[4][0] - ctr[0], a[4][1] - ctr[1]) > Math.hypot(b[4][0] - ctr[0], b[4][1] - ctr[1]);
  const lift = (p, outer) => { const post = Math.min(1, Math.max(0, (ctr[1] + 14 - p[1]) / 28)); return pj([p[0], p[1], outer ? 2.6 * post : 0]); };
  const A = a.map((p) => lift(p, outerIsA)), B = b.map((p) => lift(p, !outerIsA));
  return spline([...A, ...B.reverse()]);
}

/* ---------- bones ---------- */
const FEMUR = [
  [354, -16], [352, 32], [348, 62], [336, 84], [316, 104], [300, 120], [292, 138], [294, 158], [298, 172], [307, 183],
  [324, 189], [344, 190], [361, 187], [371, 182, 1], [374, 168], [379, 152], [389, 141], [400, 138], [411, 141], [421, 152],
  [426, 168], [429, 182, 1], [440, 188], [460, 191], [482, 189], [499, 182], [508, 170], [513, 152], [512, 138], [506, 120],
  [492, 100], [470, 82], [452, 62], [446, 32], [446, -16]
];
// Tibia: posterior rim of the plateau (with the two intercondylar spines in silhouette), then the shaft.
const TIBIA = [
  pj([-37, -10]), pj([-30, -20]), pj([-16, -22]), [378, 211], [384, 207], [388, 204], [393, 208], [398, 212], [403, 206], [409, 201],
  [415, 205], [421, 210], pj([16, -23]), pj([31, -19]), pj([37, -8]), pj([38, 4]), [505, 262], [497, 282], [482, 305],
  [466, 332], [456, 362], [451, 400], [449, 470], [360, 470], [358, 400], [353, 362], [342, 330], [327, 302], [310, 278],
  [298, 258], [294, 240]
];
const FIBULA = [
  [282, 249, 1], [272, 257], [264, 271], [266, 288], [276, 300], [284, 313], [288, 350], [294, 470], [318, 470], [312, 350],
  [306, 314], [310, 298], [313, 280], [308, 262], [296, 253]
];
// Patella reflected inferiorly on its tendon: apex (tendon end) up, base (cut quadriceps tendon) down, articular face toward viewer.
const PATELLA = [[399, 355], [372, 362], [352, 376], [343, 396], [348, 416], [364, 428], [399, 433], [434, 428], [450, 416], [455, 396], [446, 376], [426, 362]];

/* ---------- articular cartilage ---------- */
const TROCHLEA = [[326, 124], [346, 112], [370, 108], [389, 112], [400, 119], [411, 113], [432, 109], [456, 113], [476, 124], [466, 133], [444, 136], [422, 138], [410, 135], [400, 133], [390, 135], [378, 138], [356, 136], [336, 132]];
const LFC_RIM = [[295, 160], [299, 173], [307, 183], [324, 189], [344, 190], [361, 187], [371, 182], [374, 170], [377, 160]];
const MFC_RIM = [[423, 160], [426, 170], [429, 182], [440, 188], [460, 191], [482, 189], [499, 182], [508, 170], [511, 160]];
const femoralCartilage = [spline(TROCHLEA), rim(LFC_RIM.map(([x, y]) => [x, y + 1]), -13), rim(MFC_RIM.map(([x, y]) => [x, y + 1]), -13)].join(" ");
const tibialCartilage = [spline(ellipse(...pj([-19, -1]), 30, 14.5)), spline(ellipse(...pj([19, -1]), 33, 19.5))].join(" ");

/* ---------- menisci (plan coordinates, mm) ---------- */
const LM_C = [[-5, 4.5], [-10, 9.5], [-17, 11.5], [-25, 10.5], [-30.5, 5.5], [-32, -1], [-30.5, -7.5], [-25, -12.5], [-17, -13.5], [-10, -11.5], [-5, -8]];
const LM_W = [1.6, 3.5, 4.8, 5.2, 5.4, 5.4, 5.4, 5.2, 4.8, 3.5, 1.6];
const MM_C = [[7, 18], [14, 18.5], [22, 16], [29, 10], [32.5, 1], [31.5, -8], [26, -15], [17, -17.5], [10, -15], [5, -12]];
const MM_W = [1.6, 3.2, 3.8, 4.2, 4.8, 5.8, 6.6, 6.2, 4.5, 2.0];

/* ---------- bands ---------- */
const MCL = { from: [512, 142], to: [456, 358], bend: -46 };
const quadMid = (b) => { // point at t = 0.5 on the quadratic used for bands (same convention as the preview)
  const [x1, y1] = b.from, [x2, y2] = b.to, L = Math.hypot(x2 - x1, y2 - y1);
  const c = [(x1 + x2) / 2 - ((y2 - y1) / L) * b.bend, (y1 + y2) / 2 + ((x2 - x1) / L) * b.bend];
  return [0.25 * x1 + 0.5 * c[0] + 0.25 * x2, 0.25 * y1 + 0.5 * c[1] + 0.25 * y2];
};

export default {
  id: "knee-anterior",
  viewBox: [0, 0, 800, 450],
  directions: {
    medial: [1, 0], lateral: [-1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1],
    anterior: "out", posterior: "in"
  },
  backdrop: [
    { d: spline([[228, -20], [238, 80], [250, 160], [254, 230], [256, 300], [262, 380], [266, 470], [544, 470], [548, 380], [556, 300], [562, 230], [568, 160], [576, 80], [584, -20]]), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    // deepest: capsule sac and joint cavity (seen through the notch and the opened joint)
    capsule: {
      type: "capsule", z: 0, label: [292, 228],
      d: spline([[302, 118], [285, 144], [281, 176], [284, 205], [288, 232], [291, 258], [300, 280], [330, 292], [400, 296], [470, 292], [500, 282], [509, 260], [514, 236], [518, 206], [521, 176], [519, 146], [508, 120], [470, 104], [400, 100], [330, 104]])
    },
    jointSpace: {
      type: "space", z: 1, label: [400, 196],
      d: spline([[296, 160], [290, 190], [292, 216], [296, 242], [304, 260], [340, 268], [400, 270], [460, 268], [498, 260], [507, 240], [511, 212], [513, 186], [509, 160], [480, 178], [440, 180], [428, 166], [420, 144], [400, 134], [380, 144], [372, 166], [360, 180], [320, 180]])
    },
    fibula: { type: "bone", z: 2, d: spline(FIBULA), label: [278, 330] },
    femur: { type: "bone", z: 3, d: spline(FEMUR), label: [400, 60] },
    distalFemoralPhysis: {
      type: "physis", z: 4, label: [480, 112],
      d: ribbon([[308, 113], [330, 108], [352, 103], [376, 106], [400, 103], [424, 106], [450, 104], [478, 110], [504, 118]], 2.6),
      axis: [[308, 113], [504, 118]]
    },
    femoralCartilage: {
      type: "cartilage", z: 5, label: [345, 186],
      d: femoralCartilage,
      axis: [[296, 180], [510, 180]]   // lateral (LFC) → medial (MFC); MFC lateral aspect (OCD site) ≈ 0.62
    },
    popliteusTendon: { type: "tendon", z: 6, from: [320, 252], to: [298, 168], width: 8, bend: 6 },
    tibia: { type: "bone", z: 7, d: spline(TIBIA), label: [404, 392] },
    proximalTibialPhysis: {
      type: "physis", z: 8, label: [470, 300],
      d: ribbon([[303, 277], [330, 292], [360, 302], [386, 307], [400, 314], [414, 307], [440, 302], [470, 293], [500, 280]], 2.6),
      axis: [[303, 277], [500, 280]]
    },
    tibialCartilage: { type: "cartilage", z: 9, d: tibialCartilage, axis: [pj([-36, 0]), pj([36, 0])], label: pj([19, -2]) },
    // decorative (not targetable): transverse intermeniscal ligament joining the anterior horns
    transverseLigament: { type: "ligament", z: 10, from: pj([-9, 10]), to: pj([9, 18.5]), width: 4, bend: 2 },
    lateralMeniscus: {
      type: "cartilage", z: 11, label: pj([-31, 8]),
      d: meniscus(LM_C, LM_W, [-19, -1]),
      axis: [pj([-28.5, 9]), pj([-28.5, -11])]   // anterior body → posterior body, along the peripheral rim
    },
    medialMeniscus: {
      type: "cartilage", z: 11, label: pj([33, 8]),
      d: meniscus(MM_C, MM_W, [19, -1]),
      axis: [pj([29.5, 11]), pj([29.5, -11])]    // anterior body → posterior horn/body (posteromedial = 0.75–1)
    },
    pcl: { type: "ligament", z: 12, from: [421, 150], to: [391, 223], width: 19, bend: -4 },
    acl: { type: "ligament", z: 13, from: [379, 156], to: pj([3, 6]), width: 16, bend: 3 },
    lcl: { type: "ligament", z: 14, from: [293, 141], to: [272, 264], width: 9, bend: 7 },
    mcl: { type: "ligament", z: 15, ...MCL, width: 18 },
    pesAnserine: { type: "tendon", z: 16, points: [[548, 40], [546, 110], [539, 168], [528, 218], [511, 268], [487, 311], [462, 337], [448, 345]], width: 14, label: [536, 180] },
    itBand: { type: "tendon", z: 17, points: [[304, -12], [296, 60], [289, 115], [286, 142], [288, 176], [293, 212], [302, 248], [318, 281]], width: 16, label: [292, 80] },
    // decorative: patellar tendon (folded down) and cut quadriceps tendon carried with the reflected patella
    patellarTendonStub: { type: "tendon", z: 18, from: [400, 330], to: [399, 360], width: 62, ghost: true },
    patella: { type: "bone", z: 19, d: spline(PATELLA), ghost: true, label: [399, 396] },
    quadricepsStub: { type: "tendon", z: 19, from: [399, 430], to: [399, 452], width: 74, ghost: true }
  },
  anchors: {
    medialFemoralCondyle: [462, 172],
    lateralFemoralCondyle: [336, 170],
    medialTibialPlateau: pj([19, 0]),
    lateralTibialPlateau: pj([-19, 0]),
    posterolateralTibialPlateau: pj([-21, -7]),
    tibialSpine: [400, 210],
    intercondylarNotch: [400, 160],
    lateralEpicondyle: [293, 140],
    medialEpicondyle: [511, 150],
    gerdysTubercle: [320, 280],
    fibularHead: [276, 274],
    pesAnserineInsertion: [448, 345],
    aclFemoralAttachment: [379, 156],
    aclTibialAttachment: pj([3, 6]),
    jointLineMedial: [512, 200],
    jointLineLateral: [291, 200],
    mclFemoralAttachment: [512, 142],
    mclMid: quadMid(MCL),
    jointCentre: [400, 200],
    medialFemoralCondyleLateralAspect: [431, 179]
  }
};
