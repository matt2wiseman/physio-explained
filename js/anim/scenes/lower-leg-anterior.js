/**
 * Scene: lower-leg-anterior — RIGHT leg, ANTERIOR view (shin & compartments), from the tibial plateau to the ankle,
 * superficial dissection with the deep fascia removed.
 *   - Viewer in front of the patient: patient's LATERAL side (fibula, peronei) = screen LEFT, MEDIAL (subcutaneous tibial
 *     surface, soleus edge) = screen RIGHT. Superior/proximal = up. Anterior = toward the viewer ("out"), posterior = "in".
 *   - Anterior compartment: tibialis anterior beside the tibial crest, extensor digitorum longus laterally, extensor hallucis
 *     longus emerging between them distally. The anterior tibial artery and deep peroneal nerve are shown in the
 *     TA–EDL interval (as when the bellies are separated in a dissection) so compression is visible.
 *   - Lateral compartment: peroneus longus (upper) and brevis (lower) over the fibula; the common peroneal nerve winds
 *     round the fibular neck and divides into deep and superficial branches; the superficial branch runs between the
 *     peronei and EDL and becomes subcutaneous distally.
 *   - Medially, beyond the tibia's medial (posteromedial) border: soleus and, in the distal third, flexor digitorum longus
 *     (deep posterior compartment). The tibial periosteum is the thin sleeve round the shaft (visible along the medial
 *     border) and the deep crural fascia is drawn at its posteromedial tibial attachment — the MTSS traction site.
 *   - Compartments are HIDDEN spaces drawn above the muscles, so `pressure`/`bleed` shade the whole compartment.
 *     The deep posterior compartment is shown where it reaches the surface, behind the medial tibial border.
 *   - EDL and the peronei overlie much of the fibular shaft (as in life); the lateral strip of the shaft shows between
 *     them at midShaftFibula. Fade them for a full view of a fibular fracture.
 * Geometry is authored in millimetres (x = medial offset from the leg midline, y = up from the floor) and mapped at
 * 0.87 px/mm vertically and 1.3 px/mm horizontally (slender leg widened ×1.5 for legibility; relationships unchanged).
 * Band conventions (from → to), all PROXIMAL → DISTAL:
 *   commonPeronealNerve  behind the fibular head → division at the fibular neck
 *   deepPeronealNerve / superficialPeronealNerve  fibular neck → ankle;  anteriorTibialArtery  IOM opening → ankle
 *   interosseousMembrane  proximal → distal;  deepCruralFascia  proximal → distal along the posteromedial tibial border
 * Shapes with axes: muscles origin → insertion; tibialPeriosteum proximal → distal.
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const SX = 1.3, SY = 0.87, X0 = 400, Y0 = 446;
const r = (n) => Math.round(n * 10) / 10;
/** mm (x medial, y up) → stage px. A third element (1) marks a sharp corner. */
const m = (p) => (p[2] ? [r(X0 + p[0] * SX), r(Y0 - p[1] * SY), 1] : [r(X0 + p[0] * SX), r(Y0 - p[1] * SY)]);
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
const shape = (pts) => spline(M(pts));

/* ---------- bones (mm) ---------- */
const TIBIA = [[-36, 448], [-38, 438], [-33, 422], [-24, 405], [-16, 380], [-12.6, 330], [-11.6, 260], [-12.6, 190], [-15, 140], [-18, 110], [-20, 96],
  [-17, 89, 1], [0, 90], [14, 89, 1], [17, 80], [19, 72], [24, 68.6], [29, 71], [31.6, 82], [31.4, 100], [26, 130], [21.6, 190], [19.4, 260], [19.6, 330],
  [23, 380], [31, 405], [38, 425], [41, 440], [40, 449], [20, 452], [0, 451], [-20, 452]];
const FIBULA = [[-33, 432], [-37, 442], [-44, 446], [-51, 442], [-54, 432], [-52, 422], [-48.4, 414], [-46.6, 400], [-45, 350], [-43, 280], [-41, 210],
  [-39.6, 150], [-39, 115], [-39.6, 95], [-40, 80], [-38.6, 68], [-34, 61], [-28, 62.6], [-24, 70], [-23, 82], [-24, 92], [-25, 105], [-27, 130],
  [-29.6, 210], [-31.6, 280], [-33.6, 350], [-35.6, 400], [-35, 414]];
const PERIOSTEUM = [[-14.4, 384], [-14.2, 330], [-13.4, 260], [-14.4, 190], [-16.8, 140], [-19.8, 108], [-20, 100], [21.6, 100], [27.8, 130], [23.4, 190],
  [21.2, 260], [21.4, 330], [24.8, 384]];

/* ---------- muscles (mm) ---------- */
const TA = [[-6, 428], [-24, 424], [-31, 395], [-32.4, 340], [-30, 280], [-26, 225], [-19.6, 185], [-12, 158], [-5, 142], [-1.4, 148], [-2.6, 180],
  [-2, 230], [-1, 290], [-0.6, 350], [-1.6, 400]];
const EDL = [[-30, 430], [-40, 425], [-45, 400], [-44, 350], [-41.4, 290], [-39.4, 235], [-36.6, 190], [-31, 150], [-24, 122], [-20, 128], [-26.6, 165],
  [-32, 210], [-35, 260], [-36.6, 310], [-37, 360], [-35, 405]];
const EHL = [[-30, 290], [-34, 260], [-33.6, 215], [-29, 175], [-21, 140], [-14, 120], [-11, 126], [-16, 152], [-23, 188], [-27.6, 230], [-28.6, 270]];
const PL = [[-44, 438], [-56, 430], [-61, 385], [-61, 325], [-58, 265], [-54, 215], [-50, 182], [-47.6, 192], [-48, 245], [-48.6, 300], [-48.6, 360], [-47.6, 415]];
const PB = [[-49, 275], [-56.6, 255], [-58, 205], [-55.6, 152], [-50, 112], [-42, 92], [-38.6, 98], [-42.4, 130], [-46, 182], [-48, 236]];
const SOLEUS = [[24, 400], [33, 380], [37, 320], [37, 260], [34, 200], [31, 160], [28, 130], [25, 140], [25, 200], [23, 260], [21.6, 330], [22, 380]];
const FDL = [[20.6, 240], [25, 220], [26.6, 170], [26, 130], [24, 105], [20.6, 95], [19.4, 110], [19.4, 150], [19.8, 200]];

/* ---------- nerves & vessels (mm) ---------- */
const CPN = [[-56, 476], [-58, 448], [-56.4, 426], [-51.6, 415], [-47, 410]];
const DPN = [[-47, 410], [-40, 401], [-36, 385], [-35.8, 340], [-35.2, 280], [-32, 225], [-27, 185], [-19, 150], [-12.4, 115], [-8, 92], [-5.6, 72]];
const SPN = [[-47, 410], [-47.4, 380], [-46.8, 320], [-45.4, 260], [-43, 200], [-40, 150], [-35, 115], [-29, 90], [-22, 66]];
const ATA = [[-29, 400], [-33.6, 340], [-33, 280], [-30, 225], [-24.6, 185], [-16, 150], [-9, 115], [-4.6, 92], [-2, 72]];

export default {
  id: "lower-leg-anterior",
  viewBox: [0, 0, 800, 450],
  directions: {
    medial: [1, 0], lateral: [-1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1],
    anterior: "out", posterior: "in"
  },
  backdrop: [
    { d: shape([[-64, 516], [-63, 470], [-66, 430], [-67, 380], [-65, 320], [-61, 260], [-58, 200], [-53, 150], [-48, 110], [-46, 80], [-44, 56], [-42, 30],
      [-44, -4], [36, -4], [36, 30], [36, 56], [35, 80], [32, 120], [36, 180], [44, 250], [48, 320], [49, 380], [48, 430], [48, 470], [47, 516]]), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    interosseousMembrane: { type: "ligament", z: 0, points: M([[-27, 404], [-24, 330], [-21.6, 260], [-21, 190], [-21, 130], [-22, 104]]), width: 12 * SX, label: m([-24, 115]) },
    talusDeco: { type: "bone", z: 1, d: shape([[-18, 86], [0, 88.6], [16, 86], [17, 70], [8, 62], [-8, 61], [-20, 64], [-21, 76]]) },
    tibialPeriosteum: { type: "fascia", z: 1, d: shape(PERIOSTEUM), axis: [m([4, 384]), m([4, 100])], label: m([22.6, 190]) },
    tibia: { type: "bone", z: 2, d: shape(TIBIA), label: m([4, 330]) },
    fibula: { type: "bone", z: 2, d: shape(FIBULA), label: m([-32, 92]) },

    /* deep posterior & superficial posterior edges, medially */
    flexorDigitorumLongus: { type: "muscle", z: 3, d: shape(FDL), axis: [m([21, 238]), m([22, 98])], fibreAngle: 10, label: m([23, 150]) },
    soleusMedial: { type: "muscle", z: 4, d: shape(SOLEUS), axis: [m([27, 396]), m([28, 134])], fibreAngle: -14, label: m([30, 290]) },
    medialGastrocnemiusDeco: { type: "muscle", z: 5, fibreAngle: 0, d: shape([[33, 432], [42, 402], [46, 352], [43, 300], [37, 282], [34.6, 330], [33, 384]]), axis: [m([38, 430]), m([39, 286])] },

    /* anterior & lateral compartments */
    extensorHallucisLongus: { type: "muscle", z: 6, d: shape(EHL), axis: [m([-31, 284]), m([-12, 122])], fibreAngle: 12, label: m([-28, 220]) },
    peroneusBrevis: { type: "muscle", z: 7, d: shape(PB), axis: [m([-52, 266]), m([-41, 95])], fibreAngle: 12, label: m([-52, 170]) },
    peroneusLongus: { type: "muscle", z: 8, d: shape(PL), axis: [m([-52, 432]), m([-49, 186])], fibreAngle: 10, label: m([-55, 330]) },
    anteriorTibialArtery: { type: "vessel", kind: "artery", z: 9, points: M(ATA), width: 3.4 * SX, label: m([-33.2, 300]) },
    deepPeronealNerve: { type: "nerve", z: 10, points: M(DPN), width: 2.8 * SX, label: m([-35.4, 300]) },
    tibialisAnterior: { type: "muscle", z: 11, d: shape(TA), axis: [m([-16, 422]), m([-4, 144])], fibreAngle: -12, label: m([-16, 320]) },
    extensorDigitorumLongus: { type: "muscle", z: 12, d: shape(EDL), axis: [m([-38, 422]), m([-21, 124])], fibreAngle: 12, label: m([-40, 330]) },
    tibialisAnteriorTendonDeco: { type: "tendon", z: 13, points: M([[-4.6, 150], [0, 120], [6, 100], [11, 80], [14, 58]]), width: 6 * SX },
    extensorHallucisTendonDeco: { type: "tendon", z: 13, points: M([[-12, 122], [-8, 100], [-4.6, 80], [-2.6, 56]]), width: 3.6 * SX },
    extensorDigitorumTendonDeco: { type: "tendon", z: 13, points: M([[-20, 126], [-18.6, 100], [-17.6, 80], [-18.6, 56]]), width: 5.6 * SX },
    superficialPeronealNerve: { type: "nerve", z: 14, points: M(SPN), width: 2.4 * SX, label: m([-45.6, 250]) },
    commonPeronealNerve: { type: "nerve", z: 14, points: M(CPN), width: 3.6 * SX, label: m([-57, 440]) },
    deepCruralFascia: { type: "fascia", z: 15, points: M([[25.6, 392], [21.8, 330], [21.4, 260], [23.4, 190], [27.4, 135], [30.6, 102]]), width: 3.2 * SX, label: m([22.6, 300]) },
    patellarTendonDeco: { type: "tendon", z: 16, from: m([1, 520]), to: m([1, 424]), width: 26 * SX },

    /* compartments (hidden until pressure / bleed / effuse), above the muscles */
    anteriorCompartment: {
      type: "space", z: 20, hidden: true, label: m([-26, 300]),
      d: shape([[-6, 430], [-30, 432], [-41, 427], [-46, 400], [-45, 350], [-42.4, 290], [-40.4, 235], [-37.6, 190], [-31, 150], [-24, 120], [-13, 100],
        [-6, 108], [-2, 150], [-1, 230], [-0.4, 300], [-0.6, 380]])
    },
    lateralCompartment: {
      type: "space", z: 20, hidden: true, label: m([-51, 280]),
      d: shape([[-44, 440], [-57, 432], [-62.6, 385], [-62.6, 325], [-59.6, 265], [-59, 205], [-56.6, 152], [-51, 110], [-41, 90], [-37.6, 100], [-42, 135],
        [-46, 185], [-48, 245], [-48.6, 300], [-48.6, 360], [-47.6, 415]])
    },
    deepPosteriorCompartment: {
      type: "space", z: 20, hidden: true, label: m([25, 180]),
      d: shape([[19.6, 270], [25.4, 255], [28.8, 200], [29.2, 150], [27.4, 115], [22, 92], [18.8, 100], [19, 150], [19.4, 200]])
    }
  },
  anchors: {
    posteromedialTibiaDistalThird: m([24.8, 140]),
    anteriorTibialCortexMid: m([-1, 275]),
    fibularHead: m([-45, 437]),
    fibularNeck: m([-47.6, 414]),
    distalFibula: m([-31.6, 92]),
    midShaftTibia: m([4, 255]),
    midShaftFibula: m([-42.2, 268])
  }
};
