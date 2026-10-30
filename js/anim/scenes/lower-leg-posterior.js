/**
 * Scene: lower-leg-posterior — RIGHT leg, POSTERIOR view (calf & Achilles), from the distal femur to the heel, superficial
 * dissection with the deep fascia removed (standard atlas "muscles of the leg, posterior view").
 *   - Viewer behind the patient: patient's MEDIAL side = screen LEFT, LATERAL = screen RIGHT (fibula, lateral gastrocnemius).
 *     Superior/proximal = up. Posterior = toward the viewer ("out"), anterior = away ("in").
 *   - Layering (deep → superficial): bones; calcaneal apophysis; popliteus (decorative); popliteal artery; tibial nerve
 *     (visible in the popliteal fossa, then deep to soleus, re-emerging medial to the Achilles in the distal third);
 *     Kager's fat pad and retrocalcaneal bursa (deep to the tendon, bulging either side of it); soleus; plantaris
 *     (between soleus and gastrocnemius, then along the medial border of the Achilles); Achilles tendon; lateral & medial
 *     gastrocnemius heads (the medial head is larger and reaches lower); hamstring tendons (decorative) framing the fossa;
 *     the superficial posterior compartment is a hidden space drawn ABOVE the muscles so `pressure` shades the whole calf.
 *   - Calcaneal apophysis: seen from behind the apophysis is a shield over the posterior heel; its physeal margin shows as a
 *     U-shaped band around the inferior, medial and lateral edges of the tuberosity (Sever's disease).
 * Geometry is authored in millimetres (x = lateral from the midline of the calf, y = up from the floor) and mapped at
 * 0.87 px/mm vertically and 1.3 px/mm horizontally (the long, slender calf is widened ×1.5 so it reads on a 16:9 stage;
 * relationships and attachments are unchanged).
 * Band conventions (from → to), all PROXIMAL → DISTAL:
 *   achillesTendon  gastrocnemius–soleus junction (deep to the gastrocnemius bellies) → calcaneal insertion (avulse end:"to")
 *   plantaris       musculotendinous junction behind the lateral femoral condyle → medial calcaneus
 *   tibialNerve     popliteal fossa apex → behind the medial malleolus;  poplitealArtery  adductor hiatus → popliteus lower border
 * Muscle axes run origin → insertion (strain at:0 = origin; gastrocnemius at:≈0.9 = distal MTJ "tennis leg").
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const SX = 1.3, SY = 0.87, X0 = 400, Y0 = 446;
const r = (n) => Math.round(n * 10) / 10;
/** mm (x lateral, y up) → stage px. A third element (1) marks a sharp corner. */
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
function normalAt(c, i) {
  const a = c[Math.max(0, i - 1)], b = c[Math.min(c.length - 1, i + 1)];
  const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
  return [-dy / l, dx / l];
}
const offset = (c, d) => c.map((p, i) => { const n = normalAt(c, i); const di = typeof d === "function" ? d(i) : d; return [p[0] + n[0] * di, p[1] + n[1] * di]; });
const ribbon = (c, w) => spline([...offset(c, (i) => (Array.isArray(w) ? w[i] : w)), ...offset(c, (i) => -(Array.isArray(w) ? w[i] : w)).reverse()]);

/* ---------- bones (mm) ---------- */
const FEMUR = M([[-16, 530], [-16, 505], [-24, 492], [-34, 482], [-42, 470], [-44, 461], [-39, 455.5], [-28, 454], [-17, 455.6], [-9, 461], [-4, 474, 1],
  [3, 474, 1], [8, 461], [17, 456], [29, 456.4], [37.6, 461], [40, 470], [36, 483], [26, 494], [16, 505], [16, 530]]);
const TIBIA = M([[-40, 449], [-42.6, 441], [-39, 425], [-31, 409], [-23, 380], [-19.6, 330], [-18.6, 260], [-20.4, 190], [-24, 140], [-28, 110], [-30, 95],
  [-29.4, 82], [-26, 73.6], [-20, 75], [-16, 85, 1], [-10, 89], [4, 90], [12.6, 92, 1], [15.6, 104], [13.6, 140], [10.6, 190], [9, 260], [10.6, 330],
  [15.6, 380], [24, 408], [32, 426], [36.6, 440], [35.6, 448.6], [20, 451], [0, 450.4], [-22, 451]]);
const FIBULA = M([[30, 430], [33, 440], [40, 445], [48, 441], [50.6, 431], [46, 420], [43.4, 408], [44, 350], [42, 280], [40, 210], [38.4, 150], [38.6, 115],
  [39.6, 95], [40.4, 80], [39, 68], [34, 61.4], [27.6, 63.6], [23, 72], [22, 84], [23.6, 98], [26.4, 116], [28.6, 150], [29.4, 210], [31.4, 280],
  [33.4, 350], [34, 404], [31.6, 418]]);
const TALUS = M([[-16, 86], [0, 89.4], [12, 89.6], [20.6, 85], [22.6, 75], [20, 65], [11, 61.4], [0, 60], [-9.6, 61], [-16, 66], [-17.6, 77]]);
const CALCANEUS = M([[-8, 62], [6, 64.4], [19, 62.4], [25.6, 53], [28, 39], [28.6, 26], [25, 16], [14, 11.6], [2, 11.4], [-9.6, 13.4], [-14.6, 20.4],
  [-15.6, 32], [-15, 42], [-21.6, 47.6], [-25, 53], [-20, 57], [-13.6, 58.4]]);

/* ---------- muscles & tendons (mm) ---------- */
const GASTROC_MED = M([[-22, 482], [-34, 470], [-46, 448], [-55, 415], [-58, 380], [-55, 345], [-46, 312], [-33, 286], [-20, 268], [-11, 262], [-4, 276],
  [-1.6, 310], [-1.4, 360], [-3, 410], [-7, 440], [-12, 464]]);
const GASTROC_LAT = M([[24, 480], [34, 468], [43, 446], [49, 414], [50, 382], [46, 352], [37, 324], [24, 304], [12, 292], [3, 294], [1, 320],
  [0.6, 360], [2, 410], [6, 440], [13, 466]]);
const SOLEUS = M([[-30, 416], [-42, 382], [-51, 330], [-53, 280], [-48, 230], [-38, 180], [-26, 140], [-14, 112], [-6, 102], [8, 106], [17, 126], [29, 165],
  [41, 220], [49, 280], [50, 338], [46, 390], [41, 422], [31, 430], [12, 419], [-10, 419]]);
const ACHILLES = M([[4, 262], [4, 220], [3.6, 170], [3.2, 120], [3, 90], [3, 70], [3.6, 52], [5, 36]]);
const ACH_W = 13 * SX;
const PLANTARIS = M([[9, 432], [2, 405], [-6, 360], [-11, 300], [-12.6, 240], [-12, 180], [-11, 130], [-10, 95], [-9.4, 66], [-8.6, 46], [-7.6, 30]]);
const TIBIAL_NERVE = M([[2, 528], [1, 495], [0, 462], [-1.6, 430], [-5, 380], [-9, 300], [-12.6, 220], [-15.4, 150], [-18, 110], [-21, 86], [-24, 72], [-25.6, 58]]);
const POPLITEAL_ARTERY = M([[-15, 536], [-10, 505], [-5, 476], [-2, 452], [0, 428], [1.4, 405]]);
const ACH_AT = (y) => m([3.3 - (y < 60 ? (60 - y) * -0.05 : 0), y]);

export default {
  id: "lower-leg-posterior",
  viewBox: [0, 0, 800, 450],
  directions: {
    medial: [-1, 0], lateral: [1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1],
    posterior: "out", anterior: "in"
  },
  backdrop: [
    { d: spline(M([[-58, 530], [-60, 480], [-63, 430], [-68, 380], [-67, 330], [-60, 280], [-48, 230], [-36, 180], [-29, 140], [-30, 100], [-32, 70],
      [-25, 40], [-20, 14], [-8, 1], [14, 0.6], [30, 6], [34, 30], [36, 60], [42, 90], [44, 130], [52, 190], [60, 250], [63, 320], [62, 380], [58, 430],
      [56, 480], [58, 530]])), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    /* bones */
    femur: { type: "bone", z: 1, d: spline(FEMUR), label: m([0, 496]) },
    tibia: { type: "bone", z: 1, d: spline(TIBIA), label: m([-6, 250]) },
    fibula: { type: "bone", z: 1, d: spline(FIBULA), label: m([36, 250]) },
    talus: { type: "bone", z: 1, d: spline(TALUS), label: m([2, 75]) },
    calcaneus: { type: "bone", z: 2, d: spline(CALCANEUS), label: m([18, 42]) },
    calcanealApophysis: {
      type: "physis", z: 3, label: m([-11, 28]),
      d: ribbon(M([[-12.4, 44], [-12.6, 30], [-8.6, 18.8], [2, 15.4], [14, 15.6], [22, 19.8], [24.8, 32], [24, 44]]), 1.3),
      axis: [m([-12.4, 30]), m([24.8, 30])]
    },

    /* deep popliteal fossa */
    popliteusDeco: { type: "muscle", z: 4, fibreAngle: 0, d: spline(M([[30, 456], [36, 448], [24, 430], [4, 414], [-18, 404], [-32, 404], [-36, 414], [-24, 426], [0, 440], [18, 452]])), axis: [m([32, 452]), m([-32, 408])] },
    poplitealArtery: { type: "vessel", kind: "artery", z: 5, points: POPLITEAL_ARTERY, width: 6, label: m([-6, 470]) },
    poplitealVeinDeco: { type: "vessel", kind: "vein", z: 5, points: M([[-10, 534], [-6, 505], [-2, 476], [0.6, 452], [2.6, 428]]), width: 6 },
    tibialNerve: { type: "nerve", z: 6, points: TIBIAL_NERVE, width: 5.2, label: m([-22, 92]) },
    commonPeronealNerveDeco: { type: "nerve", z: 6, points: M([[2, 528], [12, 500], [24, 474], [34, 452], [42, 428], [44, 414]]), width: 4 },

    /* deep to the Achilles */
    kagersFatPad: { type: "fatpad", z: 7, d: spline(M([[-16, 57], [-18.6, 76], [-14.6, 100], [-6, 124], [4, 134], [14, 124], [22, 100], [26, 76], [24, 59], [14, 55.6], [-4, 55.4]])), label: m([18, 90]) },
    retrocalcanealBursa: { type: "bursa", z: 8, cx: m([5, 51])[0], cy: m([5, 51])[1], rx: 15.5 * SX, ry: 3.6 },

    /* calf muscles */
    soleus: { type: "muscle", z: 9, d: spline(SOLEUS), axis: [m([4, 424]), m([4, 104])], fibreAngle: 18, label: m([-40, 250]) },
    plantarisBellyDeco: { type: "muscle", z: 10, fibreAngle: 0, d: spline(M([[24, 490], [28, 482], [22, 460], [14, 440], [8, 428], [6, 436], [12, 456], [18, 476]])), axis: [m([25, 486]), m([8, 430])] },
    plantaris: { type: "tendon", z: 10, points: PLANTARIS, width: 2.6, label: m([-12, 200]) },
    achillesTendon: { type: "tendon", z: 11, points: ACHILLES, width: ACH_W, label: m([4, 160]) },
    gastrocLateral: { type: "muscle", z: 12, d: spline(GASTROC_LAT), axis: [m([24, 476]), m([5, 296])], fibreAngle: 10, label: m([28, 380]) },
    gastrocMedial: { type: "muscle", z: 13, d: spline(GASTROC_MED), axis: [m([-22, 478]), m([-12, 266])], fibreAngle: -10, label: m([-30, 380]) },

    /* decorative hamstring tendons framing the popliteal fossa */
    bicepsFemorisTendonDeco: { type: "tendon", z: 14, points: M([[30, 534], [36, 500], [42, 470], [46, 444]]), width: 8 },
    semimembranosusTendonDeco: { type: "tendon", z: 14, points: M([[-20, 534], [-28, 500], [-34, 472], [-37, 448]]), width: 9 },
    semitendinosusTendonDeco: { type: "tendon", z: 14, points: M([[-30, 534], [-40, 500], [-47, 470], [-49, 446], [-44, 420]]), width: 4 },

    /* compartment: hidden until pressure / bleed; drawn above the muscles so the whole calf shades */
    superficialPosteriorCompartment: {
      type: "space", z: 20, hidden: true, label: m([30, 230]),
      d: spline(M([[-34, 474], [-48, 448], [-57, 415], [-60, 380], [-57, 330], [-53, 280], [-48, 230], [-38, 180], [-26, 140], [-14, 108], [-8, 70], [-6, 46],
        [14, 46], [16, 70], [19, 110], [29, 165], [41, 220], [50, 280], [52, 340], [51, 384], [46, 430], [38, 470], [26, 484], [10, 438], [-10, 438], [-24, 486]]))
    }
  },
  anchors: {
    medialGastrocMTJ: m([-17, 275]),
    soleusAponeurosis: m([2, 225]),
    achillesMidportion: ACH_AT(68),
    achillesInsertion: m([5, 34]),
    achillesMTJ: m([3.4, 122]),
    calcanealTuberosity: m([8, 18]),
    posterosuperiorCalcaneus: m([10, 58]),
    poplitealFossa: m([0, 462]),
    achillesRuptureZone: ACH_AT(84)
  }
};
