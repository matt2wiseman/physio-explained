/**
 * Scene: foot-sagittal — RIGHT foot, MEDIAL view of the medial longitudinal arch (medial column: calcaneus → talus →
 * navicular → medial cuneiform → 1st metatarsal → hallux), foot plantigrade, ankle neutral.
 *   - Viewed from the patient's medial side: ANTERIOR/DISTAL (toes) = screen LEFT, POSTERIOR/PROXIMAL (heel) = screen RIGHT,
 *     superior/dorsal = up. Medial = toward the viewer ("out"), lateral = away ("in").
 *     Note: in this foot scene "proximal"/"distal" follow the foot (toward the heel / toward the toes).
 *   - Plantar layers: heel fat pad under the calcaneus; plantar fascia from the medial calcaneal tubercle to the base of the
 *     proximal phalanx (via the plantar plate — windlass); flexor digitorum brevis above it; flexor hallucis brevis under
 *     the 1st metatarsal with the (tibial) sesamoid in its tendon; FHL running under the sustentaculum and between the
 *     sesamoids to the distal phalanx. Abductor hallucis, the most medial muscle, is GHOSTED so these stay visible.
 *   - Adolescent calcaneal apophysis: the physis is the curved band a few millimetres in front of the posterior heel
 *     (Sever's); the Achilles inserts on the apophysis and the plantar fascia/intrinsics pull from its plantar end.
 *   - Inferior calcaneal (Baxter's) nerve: first branch of the lateral plantar nerve, descending deep to abductor hallucis
 *     then turning laterally just in front of the medial calcaneal tubercle.
 * Geometry is authored in millimetres (x = distance forward from the back of the heel, y = up from the floor) and
 * mapped at 2.05 px/mm (mirrored so the toes point screen-left).
 * Band conventions (from → to):
 *   plantarFascia  calcaneal origin → proximal phalanx base (tear at≈0.05–0.15 = proximal/origin; avulse end:"from")
 *   plantarPlate   1st metatarsal neck → proximal phalanx base (turf toe: tear/avulse end:"to")
 *   springLigament sustentaculum tali → navicular
 *   flexorHallucisLongusTendon  behind the ankle → base of the distal phalanx
 *   tibialisPosteriorTendon     behind the medial malleolus → navicular tuberosity (avulse end:"to")
 *   achillesTendon  proximal → calcaneal insertion (avulse end:"to")
 *   inferiorCalcanealNerve  origin from the lateral plantar nerve → under the heel (entrapment at≈0.6–0.75)
 * Muscle axes run origin → insertion.
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const S = 2.05, X0 = 646, Y0 = 424;
const r = (n) => Math.round(n * 10) / 10;
/** mm (x forward, y up) → stage px (mirrored: forward = screen-left). A third element (1) marks a sharp corner. */
const m = (p) => (p[2] ? [r(X0 - p[0] * S), r(Y0 - p[1] * S), 1] : [r(X0 - p[0] * S), r(Y0 - p[1] * S)]);
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
const ribbon = (c, w) => spline([...offset(c, w), ...offset(c, -w).reverse()]);
const shape = (pts) => spline(M(pts));
const along = (pts, t) => { // point at fraction t along a polyline (mm), mapped to px
  const L = [0]; for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const target = t * L[L.length - 1]; let i = 1; while (i < pts.length - 1 && L[i] < target) i++;
  const u = (target - L[i - 1]) / (L[i] - L[i - 1] || 1);
  return m([pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * u, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * u]);
};

/* ---------- bones (mm) ---------- */
const TIBIA = [[34, 214], [33.4, 150], [33, 125], [31.6, 105], [31, 92], [33, 86], [38, 83], [42, 79], [46, 75.4], [51, 73.6], [56, 73.4], [60.6, 74.6],
  [64.4, 79], [68, 84.6], [71, 87.6], [73, 92], [72.6, 100], [69, 112], [65, 128], [62.6, 150], [62, 214]];
const TALUS = [[35, 79], [40, 84.6], [46, 87.6], [52, 88.4], [58, 88], [63, 86], [67, 82.6], [71, 78.6], [76, 76.4], [81, 75.6], [86, 73.4], [89.4, 69],
  [90.8, 63], [89.6, 57.6], [86, 53.6], [80, 53], [74, 55], [66, 56.6], [56, 57.6], [46, 59.6], [38, 62.4], [32, 64.6], [29.6, 68], [31, 74]];
const CALCANEUS = [[12, 52.6], [7.6, 47.6], [5.2, 40], [4.6, 32], [6, 24], [10, 17.6], [16, 13.4], [24, 14], [36, 17.6], [48, 21.6], [60, 25], [68, 27],
  [74, 31], [78.6, 35], [80, 41], [78, 45], [70, 46.4], [64.6, 47.8], [71, 49.4], [74.6, 52.6], [70.6, 56.2], [60, 56.8], [52, 55.4], [46, 56.6], [40, 59.4],
  [33, 59.8], [27, 57.4], [20, 55.4], [15, 54.6]];
const NAVICULAR = [[90.4, 70], [94, 75.6], [100, 76.6], [105, 74], [107, 66], [106.6, 58], [103, 52], [97, 47.4], [92.4, 46.6], [89.6, 50], [90.6, 56], [91.6, 63]];
const MED_CUNEIFORM = [[107.4, 72], [118, 73.2], [127, 69], [128.6, 58], [128, 46], [124, 40], [114, 38.6], [107.6, 42], [106.8, 52], [107.4, 62]];
const MT1 = [[128.8, 66], [136, 64.4], [150, 56.6], [165, 47.4], [178, 38.4], [184, 34.6], [190, 33.4], [196, 29], [198.4, 22], [196, 15], [190, 10.6],
  [183, 10.8], [177.4, 15], [168, 25.4], [155, 34], [143, 41.4], [135, 43], [130, 41.6], [128.8, 48], [128.6, 58]];
const PROX_PHALANX = [[200.6, 22.6], [206, 21.4], [218, 18.6], [228, 18.6], [233, 16.4], [234.4, 11.8], [231, 8], [226, 8.4], [214, 9.4], [205, 8.4], [200.4, 6.8],
  [199, 12], [199.4, 18]];
const DIST_PHALANX = [[235.6, 16.8], [241, 16.2], [246, 13.4], [247.4, 10], [244, 6.6], [238, 6.2], [235.4, 7.6], [234.8, 12]];
const SESAMOID = [[183.4, 7], [186, 10.4], [191, 10.8], [194.4, 8.4], [193, 4.6], [188, 3.8], [184.6, 4.8]];

/* ---------- soft tissue (mm) ---------- */
const PLANTAR_FASCIA = [[15.6, 13.8], [30, 11], [60, 10], [100, 10], [140, 9], [170, 7], [186, 4.8], [198, 3.8], [206, 4.6]];
const FHL = [[19, 214], [19, 150], [19.4, 115], [20, 95], [21.6, 82], [25.6, 70], [32, 58], [43, 49.4], [58, 43.6], [80, 36.4], [110, 26.6], [140, 18.6],
  [165, 12.6], [182, 8.6], [196, 6.4], [210, 6.6], [225, 7.6], [236.4, 9]];
const TP = [[42, 214], [41, 150], [40.4, 115], [40.2, 95], [41.4, 84], [45, 74.4], [52, 66.6], [62, 61], [74, 56.6], [84, 52.8], [92.4, 50.4]];
const ACHILLES = [[8, 214], [7.5, 160], [7, 130], [6, 104], [5, 80], [3.6, 62], [2.6, 50], [2.6, 39], [4.4, 30.5]];
const BAXTER = [[32.4, 51], [33, 42], [32, 32], [30.4, 23], [34.6, 18], [46, 16.4]];

export default {
  id: "foot-sagittal",
  viewBox: [0, 0, 800, 450],
  directions: {
    anterior: [-1, 0], posterior: [1, 0], distal: [-1, 0], proximal: [1, 0], superior: [0, -1], inferior: [0, 1],
    dorsal: [0, -1], plantar: [0, 1], medial: "out", lateral: "in"
  },
  backdrop: [
    { d: shape([[-8, 214], [-6, 160], [-3.6, 128], [-2, 100], [-1.6, 72], [-1.4, 50], [-1.6, 30], [0, 12], [6, 2.6], [16, 0.4], [34, 1.4], [56, 6.6], [80, 12.6],
      [110, 12.4], [140, 6.6], [170, 1.6], [195, 0.4], [220, 1.6], [240, 2.4], [249, 6], [251, 12], [248, 18], [238, 22.6], [222, 25.6], [205, 30], [192, 38],
      [175, 47], [150, 58], [128, 70], [108, 80], [92, 88], [82, 96], [77, 112], [72, 140], [70, 214]]), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    /* bones */
    tibia: { type: "bone", z: 1, d: shape(TIBIA), label: m([50, 150]) },
    talus: { type: "bone", z: 2, d: shape(TALUS), label: m([72, 66]) },
    calcaneus: { type: "bone", z: 3, d: shape(CALCANEUS), label: m([46, 36]) },
    navicular: { type: "bone", z: 3, d: shape(NAVICULAR), label: m([99, 66]) },
    medialCuneiform: { type: "bone", z: 3, d: shape(MED_CUNEIFORM), label: m([117, 58]) },
    firstMetatarsal: { type: "bone", z: 3, d: shape(MT1), label: m([160, 36]) },
    proximalPhalanx1: { type: "bone", z: 3, d: shape(PROX_PHALANX), label: m([217, 14]) },
    distalPhalanx1: { type: "bone", z: 3, d: shape(DIST_PHALANX), label: m([241, 11.4]) },
    calcanealApophysis: {
      type: "physis", z: 4, label: m([12, 32]),
      d: ribbon(M([[9.4, 49.6], [11.4, 40], [12, 30], [14.4, 21], [20.4, 14.4]]), 1.2 * S),
      axis: [m([9.4, 49.6]), m([20.4, 14.4])]
    },
    heelFatPad: { type: "fatpad", z: 4, d: shape([[6, 12], [4, 6], [10, 1.6], [24, 0.6], [38, 1.6], [46, 5], [42, 9.6], [32, 12.6], [22, 13], [14, 13.4]]), label: m([24, 7]) },
    firstMTPJointSpace: {
      type: "space", z: 5, label: m([199.6, 26]),
      d: shape([[193.6, 30.4], [198.6, 23], [196.8, 15], [194.6, 9.6], [199.6, 5.6], [200.6, 12], [200.4, 19], [202, 25.4], [198, 30.6]])
    },

    /* ligaments, deep tendons & nerves */
    springLigament: { type: "ligament", z: 6, from: m([70.6, 52.6]), to: m([92.6, 52.2]), width: 8 * S, bend: -3.5, label: m([82, 51]) },
    tibialNerveDeco: { type: "nerve", z: 6, points: M([[25, 214], [24.6, 150], [24.6, 115], [25, 95], [25.6, 84], [26.8, 72], [28.6, 62], [31, 55], [34, 48], [40, 42.4], [50, 37.6]]), width: 4 * S },
    flexorHallucisLongusTendon: { type: "tendon", z: 7, points: M(FHL), width: 4.6 * S, label: m([24, 110]) },
    plantarPlate: { type: "ligament", z: 8, from: m([180.6, 7]), to: m([204, 6.6]), width: 5 * S, bend: -1.5, label: m([198, 5.6]) },
    sesamoid: { type: "bone", z: 9, d: shape(SESAMOID), label: m([189, 7.4]) },
    flexorDigitorumBrevis: {
      type: "muscle", z: 10, fibreAngle: 4, label: m([90, 17.6]),
      d: shape([[16, 20], [30, 22], [60, 23.6], [95, 22.6], [125, 19], [150, 15], [170, 11], [176, 9], [172, 6.6], [150, 8.4], [120, 10.6], [90, 12],
        [60, 12.4], [30, 12.6], [18, 14]]),
      axis: [m([18, 17]), m([174, 8.6])]
    },
    flexorHallucisBrevis: {
      type: "muscle", z: 10, fibreAngle: 6, label: m([150, 18.6]),
      d: shape([[112, 28], [128, 28], [150, 24], [170, 18], [184, 12.6], [194, 8.6], [200, 6.6], [196, 4.6], [184, 5.6], [168, 8.4], [148, 12.4], [128, 17], [114, 21]]),
      axis: [m([114, 25]), m([199, 6])]
    },
    inferiorCalcanealNerve: { type: "nerve", z: 11, points: M(BAXTER), width: 2.2 * S, label: m([33, 36]) },
    tibialisPosteriorTendon: { type: "tendon", z: 12, points: M(TP), width: 6 * S, label: m([40.6, 130]) },
    achillesTendon: { type: "tendon", z: 13, points: M(ACHILLES), width: 6.6 * S, label: m([6, 130]) },

    /* superficial plantar layer */
    plantarFascia: { type: "fascia", z: 14, points: M(PLANTAR_FASCIA), width: 3.6 * S, label: m([100, 10]) },
    abductorHallucis: {
      type: "muscle", z: 15, ghost: true, fibreAngle: 6, label: m([60, 32]),
      d: shape([[12, 18], [14, 29], [22, 34.6], [34, 38], [50, 39], [70, 38.4], [90, 37], [110, 33], [130, 27.6], [150, 21.6], [170, 16], [190, 12.4],
        [197, 10.6], [195, 7.4], [178, 8.4], [160, 11], [140, 14], [120, 15.2], [100, 15.2], [80, 14.2], [60, 14], [40, 13.2], [24, 12.4], [15, 13.4]]),
      axis: [m([16, 22]), m([195, 9])]
    }
  },
  anchors: {
    plantarFasciaOrigin: m([17, 14.4]),
    plantarFasciaMid: along(PLANTAR_FASCIA, 0.5),
    calcanealBodyPosterior: m([22, 40]),
    firstMTPJoint: m([198.8, 18]),
    sesamoidRegion: m([189, 7.4]),
    medialArchApex: m([104, 40]),
    heelPadCentre: m([24, 7]),
    navicularTuberosity: m([93.6, 49.6]),
    calcanealTuberosity: m([10, 20]),
    achillesInsertion: m([4.8, 32]),
    navicularBody: m([98.6, 62])
  }
};
