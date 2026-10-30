/**
 * Scene: ankle-medial — RIGHT ankle & hindfoot, MEDIAL view with the tarsal tunnel (standard atlas "medial view of the
 * ankle: flexor retinaculum reflected/ghosted"), foot plantigrade, ankle neutral.
 *   - Viewed from the patient's medial side: ANTERIOR (toes) = screen LEFT, POSTERIOR (heel) = screen RIGHT, superior = up.
 *     Medial = toward the viewer ("out"), lateral = away ("in"). Proximal/distal follow the leg (up/down).
 *   - Tarsal tunnel contents, anterior → posterior behind the medial malleolus ("Tom, Dick And Very Nervous Harry"):
 *     tibialis posterior, flexor digitorum longus, posterior tibial artery, tibial nerve, flexor hallucis longus.
 *     The tibial nerve divides under the retinaculum into medial and lateral plantar nerves, which pass deep to
 *     abductor hallucis. The flexor retinaculum is GHOSTED so the tunnel stays visible.
 *   - Layering (deep → superficial): bones; tarsal tunnel space; deltoid & spring ligaments; FHL, vessels & nerves;
 *     FDL; tibialis posterior; abductor hallucis; plantar fascia; flexor retinaculum (ghost).
 * Geometry is authored in millimetres (x = distance forward from the back of the heel, y = up from the floor) and
 * mapped at 2.4 px/mm (mirrored so the toes point screen-left).
 * Band conventions (from → to):
 *   deltoidLigament   medial malleolus → sustentaculum tali (tibiocalcaneal/tibiospring part)  (avulse end:"from")
 *   springLigament    sustentaculum tali → navicular (cradles the talar head)
 *   flexorRetinaculum medial malleolus → medial calcaneus
 *   tibialisPosteriorTendon  above the malleolus → navicular tuberosity (avulse end:"to"; retromalleolar zone ≈0.5–0.6)
 *   flexorDigitorumLongusTendon / flexorHallucisLongusTendon  above the malleolus → into the sole (insertions off-scene)
 *   tibialNerve       above the malleolus → bifurcation in the tunnel;  medial/lateralPlantarNerve  bifurcation → sole
 *   posteriorTibialArtery  above the malleolus → bifurcation;  plantarFascia  medial calcaneal tubercle → 1st MT head
 * Muscle axis: abductorHallucis origin (medial calcaneal tubercle) → insertion (hallux).
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const S = 2.4, X0 = 640, Y0 = 436;
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

/* ---------- bones (mm) ---------- */
const TIBIA = M([[34, 192], [33.4, 150], [33, 125], [31.6, 105], [31, 92], [33, 86], [38, 83], [42, 79], [46, 75.4], [51, 73.6], [56, 73.4], [60.6, 74.6],
  [64.4, 79], [68, 84.6], [71, 87.6], [73, 92], [72.6, 100], [69, 112], [65, 128], [62.6, 150], [62, 192]]);
const TALUS = M([[35, 79], [40, 84.6], [46, 87.6], [52, 88.4], [58, 88], [63, 86], [67, 82.6], [71, 78.6], [76, 76.4], [81, 75.6], [86, 73.4], [89.4, 69],
  [90.8, 63], [89.6, 57.6], [86, 53.6], [80, 53], [74, 55], [66, 56.6], [56, 57.6], [46, 59.6], [38, 62.4], [32, 64.6], [29.6, 68], [31, 74]]);
const CALCANEUS = M([[12, 52.6], [7.6, 47.6], [5.2, 40], [4.6, 32], [6, 24], [10, 17.6], [16, 13.4], [24, 14], [36, 17.6], [48, 21.6], [60, 25], [68, 27],
  [74, 31], [78.6, 35], [80, 41], [78, 45], [70, 46.4], [64.6, 47.8], [71, 49.4], [74.6, 52.6], [70.6, 56.2], [60, 56.8], [52, 55.4], [46, 56.6], [40, 59.4],
  [33, 59.8], [27, 57.4], [20, 55.4], [15, 54.6]]);
const NAVICULAR = M([[90.4, 70], [94, 75.6], [100, 76.6], [105, 74], [107, 66], [106.6, 58], [103, 52], [97, 47.4], [92.4, 46.6], [89.6, 50], [90.6, 56],
  [91.6, 63]]);
const MED_CUNEIFORM = M([[107.4, 72], [118, 73.2], [127, 69], [128.6, 58], [128, 46], [124, 40], [114, 38.6], [107.6, 42], [106.8, 52], [107.4, 62]]);
const MT1 = M([[128.8, 66], [136, 64.4], [150, 56.6], [165, 47.4], [178, 38.4], [184, 34.6], [190, 33.4], [196, 29], [198.4, 22], [196, 15], [190, 10.6],
  [183, 10.8], [177.4, 15], [168, 25.4], [155, 34], [143, 41.4], [135, 43], [130, 41.6], [128.8, 48], [128.6, 58]]);
const SESAMOID = M([[183, 6.6], [186, 9.6], [191, 9.8], [194, 7.6], [192, 5], [187, 4.4]]);

/* ---------- bands (mm) ---------- */
const TP = [[42, 198], [41, 150], [40.4, 115], [40.2, 95], [41.4, 84], [45, 74.4], [52, 66.6], [62, 61], [74, 56.6], [84, 52.8], [92.4, 50.4]];
const FDL = [[36, 198], [35.6, 150], [35, 115], [35, 95], [36, 84], [39, 72], [45, 61.4], [54, 54.8], [64, 50], [76, 45], [88, 40.4], [102, 36]];
const ARTERY = [[30.4, 198], [30, 150], [29.6, 115], [29.6, 95], [30.2, 84], [31.2, 72], [33, 62], [35.4, 53.6]];
const NERVE = [[25, 198], [24.6, 150], [24.6, 115], [25, 95], [25.6, 84], [26.8, 72], [28.6, 62], [31, 55]];
const MPN = [[31, 55], [36, 50], [44, 45.4], [56, 41], [70, 37.4], [86, 33.4], [102, 29.4]];
const LPN = [[31, 55], [33.6, 48], [39, 42], [49, 37], [60, 33.4], [72, 30.6]];
const FHL = [[19, 198], [19, 150], [19.4, 115], [20, 95], [21.6, 82], [25.6, 70], [32, 58], [43, 49.4], [58, 43.6], [80, 36.4], [110, 26.6], [140, 18.4], [165, 11.6],
  [184, 7.8], [197, 6]];
const PLANTAR_FASCIA = [[15, 13.8], [30, 10.8], [60, 9.8], [100, 9.6], [140, 8.6], [170, 6.6], [190, 5]];

export default {
  id: "ankle-medial",
  viewBox: [0, 0, 800, 450],
  directions: {
    anterior: [-1, 0], posterior: [1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1],
    dorsal: [0, -1], plantar: [0, 1], medial: "out", lateral: "in"
  },
  backdrop: [
    { d: spline(M([[-8, 192], [-6, 160], [-3.6, 128], [-2, 100], [-1.6, 72], [-1.4, 50], [-1.6, 30], [0, 12], [6, 2.6], [16, 0.4], [34, 1.4], [56, 6.6],
      [80, 12.6], [110, 12.4], [140, 6.6], [170, 1.6], [192, 0.6], [204, 4], [208, 14], [206, 26], [196, 36], [175, 47], [150, 58], [128, 70], [108, 80],
      [92, 88], [82, 96], [77, 112], [72, 140], [70, 192]])), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    /* bones */
    tibia: { type: "bone", z: 1, d: spline(TIBIA), label: m([50, 140]) },
    talus: { type: "bone", z: 2, d: spline(TALUS), label: m([72, 66]) },
    calcaneus: { type: "bone", z: 3, d: spline(CALCANEUS), label: m([30, 34]) },
    navicular: { type: "bone", z: 3, d: spline(NAVICULAR), label: m([99, 64]) },
    medialCuneiform: { type: "bone", z: 3, d: spline(MED_CUNEIFORM), label: m([117, 58]) },
    firstMetatarsal: { type: "bone", z: 3, d: spline(MT1), label: m([160, 30]) },
    sesamoidDeco: { type: "bone", z: 4, d: spline(SESAMOID) },
    achillesTendonDeco: { type: "tendon", z: 4, points: M([[8, 198], [7.5, 160], [7, 130], [6, 104], [5, 80], [3.6, 62], [2.6, 50], [2.6, 39], [4.4, 30.5]]), width: 6.6 * S },

    /* tunnel & ligaments */
    tarsalTunnel: {
      type: "space", z: 5, label: m([30, 54]),
      d: spline(M([[44, 84], [36, 79], [27, 64], [20, 47], [21, 34.4], [32, 36], [46, 42], [56, 46.4], [60.6, 54], [52, 62], [46, 72]]))
    },
    deltoidPosteriorFanDeco: { type: "ligament", z: 6, from: m([44, 76.6]), to: m([33, 65.6]), width: 7 * S },
    deltoidAnteriorFanDeco: { type: "ligament", z: 6, from: m([61, 76.4]), to: m([92, 67]), width: 6 * S, bend: 3 },
    deltoidLigament: { type: "ligament", z: 7, from: m([53.6, 75.6]), to: m([62.6, 56]), width: 13 * S, label: m([58, 68]) },
    springLigament: { type: "ligament", z: 7, from: m([70.6, 52.6]), to: m([92.6, 52.2]), width: 8 * S, bend: -4, label: m([82, 51]) },

    /* neurovascular bundle & tendons */
    flexorHallucisLongusTendon: { type: "tendon", z: 8, points: M(FHL), width: 5 * S, label: m([24, 104]) },
    lateralPlantarNerve: { type: "nerve", z: 9, points: M(LPN), width: 2.8 * S, label: m([44, 39.6]) },
    medialPlantarNerve: { type: "nerve", z: 9, points: M(MPN), width: 3 * S, label: m([48, 44.6]) },
    posteriorTibialArtery: { type: "vessel", kind: "artery", z: 10, points: M(ARTERY), width: 3.4 * S, label: m([30, 110]) },
    tibialNerve: { type: "nerve", z: 11, points: M(NERVE), width: 4.6 * S, label: m([25, 120]) },
    flexorDigitorumLongusTendon: { type: "tendon", z: 12, points: M(FDL), width: 4.4 * S, label: m([35.4, 130]) },
    tibialisPosteriorTendon: { type: "tendon", z: 13, points: M(TP), width: 6 * S, label: m([40.6, 140]) },

    /* superficial */
    abductorHallucis: {
      type: "muscle", z: 14, fibreAngle: 6, label: m([90, 26]),
      d: spline(M([[12, 18], [14, 29], [22, 34.6], [34, 38], [50, 39], [70, 38.4], [90, 37], [110, 33], [130, 27.6], [150, 21.6], [170, 16], [190, 12.4],
        [197, 10.6], [195, 7.4], [178, 8.4], [160, 11], [140, 14], [120, 15.2], [100, 15.2], [80, 14.2], [60, 14], [40, 13.2], [24, 12.4], [15, 13.4]])),
      axis: [m([16, 22]), m([195, 9])]
    },
    plantarFascia: { type: "fascia", z: 15, points: M(PLANTAR_FASCIA), width: 3 * S, label: m([60, 9.8]) },
    flexorRetinaculum: { type: "ligament", z: 16, ghost: true, from: m([46, 78]), to: m([17, 30]), width: 18 * S, bend: -4, label: m([30, 60]) }
  },
  anchors: {
    medialMalleolus: m([52, 80]),
    navicularTuberosity: m([93.6, 49.6]),
    sustentaculumTali: m([64, 52.4]),
    tarsalTunnelEntry: m([33, 70]),
    tibialisPosteriorRetromalleolar: m([40.6, 88]),
    medialCalcanealTubercle: m([18, 15]),
    medialArchApex: m([100, 42])
  }
};
