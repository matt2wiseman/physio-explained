/**
 * Scene: ankle-lateral — RIGHT ankle & hindfoot, LATERAL view (standard atlas / weight-bearing lateral radiograph view),
 * foot plantigrade, ankle in neutral.
 *   - Viewed from the patient's lateral side: ANTERIOR (toes) = screen RIGHT, POSTERIOR (heel) = screen LEFT,
 *     superior = up. Lateral = toward the viewer ("out"), medial = away ("in"). Proximal/distal follow the leg (up/down).
 *   - Layering (deep → superficial): medial forefoot bones (decorative), navicular, tibia, talus, calcaneus, cuboid,
 *     5th metatarsal, os trigonum; talar-dome cartilage; joint spaces (translucent, above bone so effusion/bleeding shows);
 *     PTFL (deep to the malleolus); fibula (lateral, overlies tibia & talus) + its physis; AITFL, CFL, ATFL; Achilles;
 *     peroneus brevis then longus (longus is the more superficial in the retromalleolar groove); superior peroneal retinaculum.
 *   - The peroneal tendons cross the lower part of the CFL (it forms the floor of their sheath), so the CFL mid-substance stays visible.
 *   - Distal fibular physis lies at the level of the tibial plafond (paediatric Salter–Harris injuries).
 * Geometry is authored in millimetres (x forward from the back of the heel, y up from the floor) and mapped to the
 * 800 × 450 stage at 2.4 px/mm.
 * Band conventions (from → to):
 *   atfl  fibular origin (anterior border of lateral malleolus) → talar neck/body          (avulse end:"from" = fibular avulsion)
 *   cfl   lateral malleolus tip → lateral calcaneal tubercle
 *   ptfl  malleolar fossa → lateral tubercle of the posterior talar process
 *   aitfl tibia (anterolateral / Chaput tubercle) → fibula (anterior / Wagstaffe tubercle)  (avulse end:"from" = Tillaux-type)
 *   superiorPeronealRetinaculum  fibular (posterolateral ridge) attachment → lateral calcaneus  (avulse/tear end:"from" = Eckert–Davis stripping)
 *   peronealBrevisTendon  above the malleolus → 5th metatarsal tuberosity (avulse end:"to" = base-of-5th avulsion)
 *   peronealLongusTendon  above the malleolus → cuboid groove where it turns into the sole (plantar course not drawn)
 *   achillesTendon  proximal → calcaneal insertion (avulse end:"to")
 * Cartilage axis: tibiotalarCartilage anterior dome (0) → posterior dome (1).
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const S = 2.4, X0 = 168, Y0 = 436;
const r = (n) => Math.round(n * 10) / 10;
/** mm (x forward, y up) → stage px. A third element (1) marks a sharp corner. */
const m = (p) => (p[2] ? [r(X0 + p[0] * S), r(Y0 - p[1] * S), 1] : [r(X0 + p[0] * S), r(Y0 - p[1] * S)]);
const M = (pts) => pts.map(m);
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
const offset = (c, d) => c.map((p, i) => { const n = normalAt(c, i); const di = typeof d === "function" ? d(i) : d; return [p[0] + n[0] * di, p[1] + n[1] * di]; });
/** Closed outline around a centreline with half-width w (number or per-point array). */
const ribbon = (c, w) => spline([...offset(c, (i) => (Array.isArray(w) ? w[i] : w)), ...offset(c, (i) => -(Array.isArray(w) ? w[i] : w)).reverse()]);
/** Lens-shaped layer between a surface polyline and its offset, tapering at both ends (articular cartilage). */
const rim = (c, t, taper = 0.5) => spline([...c, ...offset(c, (i) => t * Math.pow(Math.sin((Math.PI * i) / (c.length - 1)), taper)).slice(1, -1).reverse()]);
const mid = (a, b, t = 0.5) => [r(a[0] + (b[0] - a[0]) * t), r(a[1] + (b[1] - a[1]) * t)];

/* ---------- bones (mm) ---------- */
const TIBIA = M([[34, 192], [34, 150], [33, 125], [31.5, 105], [30.5, 92], [31, 84, 1], [37, 89], [44, 91], [52, 91.6], [60, 91], [66, 89], [70, 86, 1],
  [73, 90], [72.5, 98], [69, 112], [65, 128], [62.5, 150], [62, 192]]);
const FIBULA = M([[44.5, 192], [45, 160], [47.5, 130], [52, 106], [55.5, 94], [56, 87], [54.5, 80], [51, 73.5], [46.5, 67.5], [42.5, 64.5], [39, 64.5],
  [35.5, 66.5], [33, 71], [32, 79], [32, 92], [31.5, 110], [31, 130], [30, 160], [29.5, 192]]);
const TALUS = M([[35, 79], [40, 85], [46, 88], [52, 88.7], [58, 88.1], [63, 86], [67, 82.5], [71, 78.6], [76, 76.6], [81, 76], [86, 73.6], [89, 69], [90.5, 63],
  [89, 57.5], [85.5, 53.6], [80, 52.6], [75, 54], [69, 55], [62, 55.2], [55, 57], [48, 59.6], [41, 62], [35, 63.2], [31, 65], [30, 68.5], [31.5, 74]]);
const CALCANEUS = M([[12, 52.5], [7.5, 47.5], [5.2, 40], [4.6, 32], [6, 24], [10, 17.5], [16, 13.5], [24, 14], [36, 17.5], [48, 21.5], [60, 25], [68, 26.5],
  [76, 30], [79.6, 33.5, 1], [80.6, 39], [81, 44], [80, 49, 1], [77, 51], [72, 50.2], [66, 47.4], [60.5, 49.2], [56, 53], [50, 56], [44, 58.4], [38, 59.6],
  [33, 59.8], [27, 57.4], [20, 55.4], [15, 54.6]]);
const NAVICULAR = M([[90.5, 72.5], [95, 75.4], [101, 75.4], [105, 72], [106.3, 64], [105.2, 56], [101, 52.2], [95, 51], [91, 53], [92.6, 58], [93, 64], [92, 69]]);
const CUBOID = M([[82.5, 49.4], [88, 51], [96, 50.6], [103, 48.6], [107, 44.4], [107.4, 36], [105.4, 29.2], [100.5, 24.6], [94, 22.4], [88, 23.8], [83.6, 28],
  [82, 34], [82.2, 42]]);
const MT5 = M([[107.4, 39.4], [113, 38.2], [126, 33.6], [145, 27.2], [163, 21.6], [168, 21.6], [174, 20.8], [180, 17.8], [182.2, 13], [180.2, 9], [174, 7],
  [168, 8.4], [163, 12.4], [145, 17], [128, 20.4], [114, 23], [104.5, 19.6], [99, 18], [97.6, 21.4], [100.8, 26.2], [105.6, 30.4], [107.6, 35]]);
const OS_TRIGONUM = M([[21.6, 66.6], [23.6, 70.2], [27.2, 71], [29.4, 69], [29.6, 65.2], [27.4, 62.4], [23.4, 62.8]]);
// decorative medial-column / forefoot bones seen behind the lateral column
const LAT_CUNEIFORM = M([[106.6, 50], [106.8, 58], [106.6, 66.5], [110, 69.4], [121, 68.6], [126, 64.5], [126.4, 53], [123, 48.2], [112, 47.6]]);
const MT3 = M([[126.6, 66], [150, 55.6], [175, 42], [192, 30.6], [197.6, 25.4], [196, 18.6], [190, 16.6], [172, 26.4], [150, 40.4], [127.6, 51.6]]);
const MT4 = M([[107.6, 48.6], [130, 43], [160, 33.4], [185, 23.6], [191, 20.6], [192.4, 15], [187.4, 11.2], [181, 13.2], [158, 22.4], [130, 30.4], [108.4, 37.4]]);
const TOE5 = M([[183, 17.6], [192, 15.4], [199, 13.6], [202, 11], [200.5, 7.8], [192, 8.2], [183.2, 10]]);

/* ---------- joint surfaces / spaces (mm) ---------- */
const PLAFOND = [[31, 84], [37, 89], [44, 91], [52, 91.6], [60, 91], [66, 89], [70, 86]];
const DOME = [[35, 79], [40, 85], [46, 88], [52, 88.7], [58, 88.1], [63, 86], [67, 82.5], [71, 78.6]];

/* ---------- bands (mm → px) ---------- */
const ATFL = { from: m([48.6, 70.6]), to: m([66, 73.4]), width: 7.5 * S, bend: -2 };
const CFL = { from: m([44.6, 63.6]), to: m([39.6, 45.6]), width: 5 * S, bend: 3 };
const ACHILLES = M([[8, 192], [7.5, 160], [7, 130], [6, 104], [5, 80], [3.6, 62], [2.6, 50], [2.6, 39], [4.4, 30.5]]);
const BREVIS = M([[37, 160], [35, 125], [33, 98], [32, 84], [32, 73], [33.6, 65], [36.6, 58.6], [40.6, 53], [47, 48.6], [55, 44.6], [64, 40], [75, 35], [86, 30],
  [95, 26], [100.6, 24.2]]);
const LONGUS = M([[32, 160], [29.6, 125], [27.6, 98], [27, 84], [27, 73], [28.6, 64], [31.6, 56], [36.6, 49], [43, 43.6], [51, 38.6], [61, 33.6], [72, 28.6],
  [83, 24.6], [90.4, 22]]);
const ATFL_MID = mid(ATFL.from, ATFL.to);

export default {
  id: "ankle-lateral",
  viewBox: [0, 0, 800, 450],
  directions: {
    anterior: [1, 0], posterior: [-1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1],
    dorsal: [0, -1], plantar: [0, 1], lateral: "out", medial: "in"
  },
  backdrop: [
    { d: spline(M([[-8, 192], [-6, 160], [-3.6, 128], [-2, 100], [-1.6, 72], [-1.4, 50], [-1.6, 30], [0, 12], [6, 2.6], [16, 0.4], [40, 1.2], [70, 2.6],
      [100, 2.2], [130, 1], [165, 0.4], [185, 1], [200, 3], [207, 8.6], [206, 16], [198, 24], [180, 35], [155, 47], [128, 60], [105, 72], [90, 82], [81, 92],
      [77, 110], [72, 140], [70, 192]])), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    /* decorative deep parts (not targetable) */
    flexorHallucisLongusMuscleDeco: { type: "muscle", z: 0, fibreAngle: 18, d: spline(M([[23, 194], [33.6, 194], [33.4, 150], [32.8, 120], [32, 98], [30.6, 85], [28, 78.6], [25.6, 86], [24, 105], [22.6, 135], [22, 165]])), axis: [m([28, 192]), m([28, 79])] },
    soleusDeco: { type: "muscle", z: 0, fibreAngle: 14, d: spline(M([[10.6, 194], [22.6, 194], [21.6, 165], [19, 138], [15, 120], [11, 110], [10.2, 140], [10.4, 170]])), axis: [m([16, 192]), m([12, 112])] },
    kagersFatPadDeco: { type: "fatpad", z: 1, d: spline(M([[6.4, 51.6], [11, 54.6], [17, 56.4], [23, 58.4], [27, 62.4], [29, 70], [27.6, 78], [25.4, 86], [23.8, 100], [19, 108.4], [12, 110.6], [9.4, 104], [8.6, 90], [7.8, 75], [6.8, 62]])) },
    thirdMetatarsalDeco: { type: "bone", z: 1, d: spline(MT3) },
    lateralCuneiformDeco: { type: "bone", z: 2, d: spline(LAT_CUNEIFORM) },
    fourthMetatarsalDeco: { type: "bone", z: 2, d: spline(MT4) },

    /* bones */
    navicular: { type: "bone", z: 3, d: spline(NAVICULAR), label: m([99, 66]) },
    tibia: { type: "bone", z: 4, d: spline(TIBIA), label: m([55, 150]) },
    talus: { type: "bone", z: 5, d: spline(TALUS), label: m([60, 70]) },
    calcaneus: { type: "bone", z: 6, d: spline(CALCANEUS), label: m([28, 32]) },
    cuboid: { type: "bone", z: 7, d: spline(CUBOID), label: m([94, 38]) },
    fifthMetatarsal: { type: "bone", z: 8, d: spline(MT5), label: m([150, 22]) },
    fifthToeDeco: { type: "bone", z: 8, d: spline(TOE5) },
    osTrigonum: { type: "bone", z: 9, d: spline(OS_TRIGONUM), label: m([25.6, 66.6]) },

    /* cartilage & spaces (translucent at rest; above bone so bleed/effusion read) */
    tibiotalarCartilage: { type: "cartilage", z: 10, d: rim(M(DOME), 4.2, 0.35), axis: [m([70, 80]), m([36, 80.5])], label: m([52, 87.4]) },
    jointSpace: {
      type: "space", z: 11, label: m([46, 90]),
      d: spline(M([[29.5, 83, 1], [37, 89], [44, 91], [52, 91.6], [60, 91], [66, 89], [70, 86, 1], [69, 83.6], [64.5, 86.6], [58, 88.6], [52, 89.2], [46, 88.6],
        [40, 85.8], [35.6, 80], [32.6, 76.4], [30, 78]]))
    },
    anteriorJointRecess: {
      type: "space", z: 11, label: m([76, 84]),
      d: spline(M([[69.8, 85], [72.6, 89], [76.2, 92.2], [79.6, 90.2], [81.2, 85], [80.2, 79.8], [77, 76.8], [73, 77.4], [70.6, 80.6]]))
    },
    sinusTarsi: {
      type: "space", z: 11, label: m([71, 51.6]),
      d: spline(M([[60, 50.6], [64, 53.2], [70, 54.4], [76, 54.2], [81, 52.8], [80.4, 50.2], [74.6, 49.6], [68.6, 48.4], [64.4, 47.4], [61, 48.4]]))
    },

    /* deep lateral ligament & fibula */
    ptfl: { type: "ligament", z: 12, from: m([38.6, 70]), to: m([30.4, 66.4]), width: 5 * S, bend: 1 },
    fibula: { type: "bone", z: 13, d: spline(FIBULA), label: m([40, 140]) },
    distalFibularPhysis: {
      type: "physis", z: 14, label: m([44, 90]),
      d: ribbon(M([[31.6, 88.6], [37, 89.8], [43, 89.4], [49, 90.4], [55.6, 90.6]]), 1.25 * S),
      axis: [m([31.6, 88.6]), m([55.6, 90.6])]
    },
    aitfl: { type: "ligament", z: 15, from: m([67.4, 99.6]), to: m([55, 87.6]), width: 7 * S, bend: 1.5 },
    cfl: { type: "ligament", z: 15, ...CFL },
    atfl: { type: "ligament", z: 16, ...ATFL },

    /* tendons & retinacula */
    achillesTendon: { type: "tendon", z: 17, points: ACHILLES, width: 6.6 * S, label: m([6, 120]) },
    peronealBrevisTendon: { type: "tendon", z: 18, points: BREVIS, width: 5 * S, label: m([80, 32.6]) },
    peronealLongusTendon: { type: "tendon", z: 19, points: LONGUS, width: 5 * S, label: m([66, 31]) },
    superiorPeronealRetinaculum: { type: "ligament", z: 20, from: m([33.4, 77.6]), to: m([17, 52]), width: 9 * S, bend: -2, label: m([25, 64]) },
    inferiorPeronealRetinaculumDeco: { type: "ligament", z: 20, ghost: true, from: m([58.4, 50.4]), to: m([50.4, 30]), width: 6 * S, bend: 2 },
    extensorTendonsDeco: { type: "tendon", z: 21, ghost: true, points: M([[70.6, 192], [73, 150], [76.6, 112], [81, 95], [89, 84], [106, 70.6], [128, 57], [156, 42.6], [184, 29]]), width: 6 * S }
  },
  anchors: {
    lateralMalleolus: m([44, 80]),
    lateralMalleolusTip: m([41, 65]),
    fibularGroove: m([32.6, 78]),
    baseFifthMetatarsal: m([101.6, 22.4]),
    jonesZone: m([120.6, 28.4]),
    talarDome: m([52, 87.6]),
    anteriorTibialLip: m([70.4, 86.6]),
    anteriorTalarNeck: m([74, 77.4]),
    posteriorTalarProcess: m([31, 66.6]),
    sinusTarsiOpening: m([70.6, 51.4]),
    ankleJointLine: m([70, 83.6]),
    atflMid: ATFL_MID,
    fibulaWeberA: m([43.4, 73.4]),
    fibulaWeberB: m([44, 92]),
    fibulaWeberC: m([39.4, 132])
  }
};
