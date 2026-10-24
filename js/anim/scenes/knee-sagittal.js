/**
 * Scene: knee-sagittal — RIGHT knee, LATERAL view as a sagittal cut-away (knee near full extension).
 *   - Viewed from the patient's lateral side: ANTERIOR = screen RIGHT, POSTERIOR = screen LEFT, superior = up.
 *     Lateral = toward the viewer ("out"), medial = away ("in").
 *   - The femoral condyle is drawn in section so both cruciates (ACL lateral/in front, PCL behind) and the
 *     sagittal profile of the meniscus (anterior & posterior horn wedges) are visible, as on a sagittal MRI.
 *   - Extensor mechanism: quadriceps → quadriceps tendon → patella → patellar tendon → tibial tuberosity,
 *     with Hoffa's fat pad, suprapatellar pouch, pre- and deep infrapatellar bursae.
 *   - Adolescent growth plates are shown: distal femoral & proximal tibial physes and the tibial
 *     tuberosity apophysis (Osgood–Schlatter); Sinding-Larsen–Johansson = inferiorPolePatella.
 * Scale ≈ 2.6 px/mm.
 * Band conventions (from → to): quadricepsTendon  muscle → superior pole of patella;
 *   patellarTendon  inferior pole → tibial tuberosity; acl  femoral → tibial; pcl  femoral → tibial;
 *   capsule  femoral attachment → tibial attachment (posterior capsule).
 * Cartilage axes: meniscus anterior horn → posterior horn; femoral cartilage trochlea → posterior condyle;
 *   tibial cartilage anterior → posterior; patellar cartilage superior → inferior.
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
const offset = (c, d) => c.map((p, i) => { const n = normalAt(c, i); const di = typeof d === "function" ? d(i) : d; return [p[0] + n[0] * di, p[1] + n[1] * di]; });
/** Closed outline around a centreline with half-width w (number or per-point array). */
const ribbon = (c, w) => spline([...offset(c, (i) => (Array.isArray(w) ? w[i] : w)), ...offset(c, (i) => -(Array.isArray(w) ? w[i] : w)).reverse()]);
/** Lens-shaped band between a surface polyline and its offset, tapering at both ends (articular cartilage). */
const rim = (c, t, taper = 0.6) => spline([...c, ...offset(c, (i) => t * Math.pow(Math.sin((Math.PI * i) / (c.length - 1)), taper)).slice(1, -1).reverse()]);
const quadAt = (b, t) => { // point on the band's quadratic (same convention as the scene preview)
  const [x1, y1] = b.from, [x2, y2] = b.to, L = Math.hypot(x2 - x1, y2 - y1), k = b.bend || 0;
  const c = [(x1 + x2) / 2 - ((y2 - y1) / L) * k, (y1 + y2) / 2 + ((x2 - x1) / L) * k];
  return [(1 - t) ** 2 * x1 + 2 * (1 - t) * t * c[0] + t * t * x2, (1 - t) ** 2 * y1 + 2 * (1 - t) * t * c[1] + t * t * y2];
};

/* ---------- bones ---------- */
const FEMUR = [
  [350, -16], [352, 40], [350, 92], [344, 124], [334, 146], [325, 168], [324, 192], [331, 210], [345, 224], [366, 233],
  [393, 237], [418, 234], [437, 225], [452, 210], [461, 190], [465, 170], [463, 148], [457, 128], [447, 106], [441, 78],
  [438, 40], [436, -16]
];
const TIBIA = [
  [333, 252], [338, 245], [362, 243], [392, 242], [422, 240], [446, 239], [455, 243], [460, 255], [463, 272], [469, 290],
  [475, 304], [471, 320], [463, 342], [457, 380], [452, 470], [378, 470], [372, 400], [362, 340], [350, 300], [340, 276], [334, 264]
];
const FIBULA = [
  [340, 266, 1], [328, 274], [322, 290], [328, 304], [341, 313], [352, 340], [368, 470], [386, 470], [372, 338], [363, 306],
  [366, 288], [360, 272], [350, 266]
];
const PATELLA = [
  [484, 80], [500, 75], [515, 83], [524, 104], [528, 130], [526, 158], [519, 180], [508, 196], [500, 203, 1], [492, 197],
  [482, 182], [474, 160], [470, 136], [472, 110], [477, 92]
];

/* ---------- articular surfaces ---------- */
const FEM_SURF = [[458, 136], [463, 152], [465, 170], [461, 190], [452, 210], [437, 225], [418, 234], [393, 237], [366, 233], [345, 224], [331, 210], [324, 192], [325, 170], [331, 154]];
const TIB_SURF = [[338, 245], [362, 243], [392, 242], [422, 240], [446, 239]];
const PAT_SURF = [[480, 86], [474, 104], [471, 126], [472, 150], [477, 172], [486, 190]];

/* ---------- bands ---------- */
const PATELLAR_TENDON = { from: [500, 201], to: [470, 299], bend: -3 };

export default {
  id: "knee-sagittal",
  viewBox: [0, 0, 800, 450],
  directions: {
    anterior: [1, 0], posterior: [-1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1],
    lateral: "out", medial: "in"
  },
  backdrop: [
    { d: spline([[188, -20], [196, 80], [222, 170], [262, 228], [252, 300], [234, 380], [228, 470], [486, 470], [490, 330], [504, 272], [532, 204], [543, 140], [542, 70], [554, 20], [556, -20]]), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    jointSpace: {
      type: "space", z: 0, label: [470, 222],
      d: spline([[452, 92], [467, 90], [477, 118], [477, 160], [471, 194], [461, 214], [455, 233], [440, 243], [400, 244], [360, 246], [334, 252], [322, 240], [316, 212], [316, 186], [321, 160], [334, 144], [380, 170], [430, 150]])
    },
    hamstrings: {
      type: "muscle", z: 1, label: [278, 90], fibreAngle: 8,
      d: spline([[218, -16], [348, -16], [349, 40], [345, 96], [336, 136], [322, 170], [309, 196], [298, 204], [282, 186], [258, 140], [236, 84], [224, 30]]),
      axis: [[282, -10], [312, 198]]
    },
    gastrocnemius: {
      type: "muscle", z: 2, label: [290, 360], fibreAngle: 14,
      d: spline([[340, 150], [328, 164], [308, 200], [284, 248], [262, 304], [248, 366], [246, 470], [344, 470], [350, 404], [346, 334], [337, 286], [331, 246], [330, 206], [334, 172]]),
      axis: [[336, 156], [300, 460]]
    },
    capsule: { type: "capsule", z: 3, from: [341, 146], to: [336, 260], width: 6, bend: 52, label: [312, 196] },
    fibula: { type: "bone", z: 4, d: spline(FIBULA), label: [366, 400] },
    // decorative: distal biceps femoris tendon to the fibular head
    bicepsFemorisTendonDeco: { type: "tendon", z: 5, from: [306, 192], to: [331, 280], width: 8, bend: -4 },
    femur: { type: "bone", z: 6, d: spline(FEMUR), label: [394, 60] },
    distalFemoralPhysis: {
      type: "physis", z: 7, label: [360, 136],
      d: ribbon([[336, 150], [360, 145], [385, 148], [410, 141], [435, 138], [455, 131]], 2.6),
      axis: [[336, 150], [455, 131]]
    },
    femoralCartilage: { type: "cartilage", z: 8, d: rim(FEM_SURF, 8, 0.35), axis: [[462, 160], [328, 176]], label: [400, 230] },
    tibia: { type: "bone", z: 9, d: spline(TIBIA), label: [414, 400] },
    proximalTibialPhysis: {
      type: "physis", z: 10, label: [380, 272],
      d: ribbon([[338, 270], [362, 266], [390, 268], [418, 264], [442, 266], [452, 270]], 2.6),
      axis: [[338, 270], [452, 270]]
    },
    tibialApophysis: {
      type: "physis", z: 11, label: [452, 300],
      d: ribbon([[450, 269], [458, 281], [462, 297], [464, 314], [466, 331]], [2, 2.4, 2.6, 2.4, 2]),
      axis: [[450, 269], [466, 331]]
    },
    tibialCartilage: { type: "cartilage", z: 12, d: rim(TIB_SURF, 5, 0.3), axis: [[446, 241], [338, 247]], label: [392, 246] },
    infrapatellarFatPad: {
      type: "fatpad", z: 13, label: [474, 236],
      d: spline([[486, 199], [493, 212], [486, 238], [476, 263], [468, 280], [462, 276], [459, 260], [456, 245], [455, 232], [458, 220], [466, 208], [477, 200]])
    },
    meniscus: {
      type: "cartilage", z: 14, label: [440, 228],
      d: [
        spline([[456, 240], [455, 229], [449, 223], [439, 229], [429, 236], [420, 240, 1]]),            // anterior horn
        spline([[332, 249], [330, 236], [336, 225], [348, 228], [361, 234], [373, 240], [380, 244, 1]])  // posterior horn
      ].join(" "),
      axis: [[440, 235], [346, 239]]   // anterior horn (0) → posterior horn (1)
    },
    pcl: { type: "ligament", z: 15, from: [420, 214], to: [346, 264], width: 17, bend: 40 },
    acl: { type: "ligament", z: 16, from: [361, 203], to: [421, 240], width: 13, bend: -3 },
    suprapatellarPouch: {
      type: "space", z: 17, label: [458, 60],
      d: spline([[446, 34], [455, 30], [461, 50], [470, 72], [475, 98], [472, 122], [464, 134], [453, 130], [447, 112], [443, 74]])
    },
    quadriceps: {
      type: "muscle", z: 18, label: [506, 20], fibreAngle: 12,
      d: spline([[452, -16], [552, -16], [549, 18], [538, 46], [520, 66], [503, 76], [488, 76], [474, 68], [464, 52], [458, 24]]),
      axis: [[498, -12], [494, 76]]
    },
    infrapatellarBursa: { type: "bursa", z: 19, cx: 469, cy: 284, rx: 4.5, ry: 10, rotate: -17 },
    patella: { type: "bone", z: 20, d: spline(PATELLA), label: [506, 140] },
    patellarCartilage: { type: "cartilage", z: 21, d: rim(PAT_SURF, -10, 0.45), axis: [[478, 90], [484, 188]], label: [478, 140] },
    quadricepsTendon: { type: "tendon", z: 22, from: [480, 12], to: [496, 80], width: 18, bend: -3 },
    patellarTendon: { type: "tendon", z: 23, ...PATELLAR_TENDON, width: 14 },
    prepatellarBursa: { type: "bursa", z: 24, cx: 534, cy: 140, rx: 5.5, ry: 34, rotate: -6 }
  },
  anchors: {
    tibialTuberosity: [473, 304],
    inferiorPolePatella: [499, 201],
    superiorPolePatella: [495, 77],
    patellarTendonProximal: quadAt(PATELLAR_TENDON, 0.14),
    patellarTendonMid: quadAt(PATELLAR_TENDON, 0.5),
    quadricepsTendonInsertion: [495, 80],
    trochlea: [463, 168],
    anteriorHornMeniscus: [443, 233],
    posteriorHornMeniscus: [345, 237],
    femoralCondyleWeightBearing: [395, 234],
    poplitealFossa: [306, 232],
    tibialPlateauPosterior: [346, 248],
    tibialPlateauAnterior: [443, 243],
    jointCentre: [395, 239],
    patellaCentre: [499, 140],
    prepatellar: [534, 140]
  }
};
