/**
 * Scene: foot-dorsal — RIGHT foot, DORSAL view (looking down on the top of the foot), laid HORIZONTALLY with the toes
 * pointing screen RIGHT (the direction the figure's foot points in the lateral MOI view), so the foot fills the 16:9 stage.
 *   - DISTAL (toes) = screen RIGHT, PROXIMAL (heel) = screen LEFT, MEDIAL (hallux side) = screen UP, LATERAL (5th ray) = screen DOWN.
 *     Dorsal/superior = toward the viewer ("out"), plantar/inferior = away ("in").
 *   - Bones as on a standard dorsal atlas plate / AP foot radiograph: calcaneus (posterior & lateral to the talus),
 *     talus, navicular, cuboid, three cuneiforms, the recessed 2nd metatarsal base ("keystone" of the Lisfranc joint),
 *     five metatarsals (2nd longest) and phalanges.
 *   - Plantar structures are drawn the way an atlas shows hidden parts: the interdigital nerves and the deep transverse
 *     metatarsal ligament lie BENEATH the metatarsals and show in the intermetatarsal/web spaces (nerve plantar to the
 *     ligament → Morton's neuroma site); the sesamoids and the 2nd MTP plantar plate are GHOSTED over the bones that
 *     cover them. The dorsal tarsometatarsal ligaments and the extensor tendons overlie the bones and are ghosted.
 * Geometry is authored in millimetres (x = distance forward from the back of the heel, y = lateral offset from the
 * 2nd-ray axis) and mapped at 2.1 px/mm.
 * Band conventions (from → to):
 *   lisfrancLigament        medial cuneiform → base of 2nd metatarsal   (avulse end:"to" = fleck sign off the M2 base)
 *   plantarPlate2           2nd metatarsal neck (weak origin) → base of 2nd proximal phalanx (avulse end:"to" = typical tear)
 *   intermetatarsalLigament 1st-ray sesamoid apparatus → 5th MTP (deep transverse metatarsal ligament)
 *   interdigitalNerve2/3    proximal (between the shafts) → bifurcation in the web space (Morton's neuroma at ≈0.7,
 *                           where it passes beneath the deep transverse metatarsal ligament)
 * Shapes with axes: dorsalTMTLigaments medial (1st TMT) → lateral (5th TMT), fibres across the joints;
 *   extensorTendons proximal → distal.
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const S = 2.1, X0 = 130, Y0 = 202;
const r = (n) => Math.round(n * 10) / 10;
/** mm (x distal, y lateral) → stage px. A third element (1) marks a sharp corner. */
const m = (p) => (p[2] ? [r(X0 + p[0] * S), r(Y0 + p[1] * S), 1] : [r(X0 + p[0] * S), r(Y0 + p[1] * S)]);
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
/** Closed outline around a centreline (mm) with half-width w (mm, number or per-point array). */
const ribbonMM = (c, w) => spline(M([...offset(c, (i) => (Array.isArray(w) ? w[i] : w)), ...offset(c, (i) => -(Array.isArray(w) ? w[i] : w)).reverse()]));
/** Tubular bone (metatarsal / phalanx) from proximal end A to distal end B (mm), half-widths [base, shaft, neck, head]. */
function tubeBone(A, B, [b, s, n, h]) {
  const ux = B[0] - A[0], uy = B[1] - A[1], L = Math.hypot(ux, uy), u = [ux / L, uy / L], nv = [-u[1], u[0]];
  const prof = [[0.0, b * 0.92], [0.06, b], [0.2, (b + s) / 2], [0.4, s], [0.62, s], [0.76, n], [0.87, h], [0.96, h * 0.72]];
  const at = (t, w) => [A[0] + u[0] * L * t + nv[0] * w, A[1] + u[1] * L * t + nv[1] * w];
  const left = prof.map(([t, w]) => at(t, w)), right = prof.map(([t, w]) => at(t, -w)).reverse();
  return spline(M([...left, B, ...right]));
}
const join = (...ds) => ds.join(" ");

/* ---------- tarsal bones (mm) ---------- */
const CALCANEUS = M([[0, 12], [2, 1], [8, -7], [18, -12], [30, -14], [42, -18], [52, -23], [60, -24.6], [66, -21], [68, -12], [70, 2], [76, 6], [81, 10],
  [82.6, 22], [82, 34], [70, 36.6], [55, 37.6], [40, 36.6], [25, 34], [12, 30], [3, 22]]);
const TALUS = M([[28, -10], [34, -14], [48, -15.6], [60, -16.6], [66, -20], [72, -24], [79, -25], [83.6, -20], [85, -10], [84, 0], [80, 5], [72, 6.4], [66, 9.4],
  [60, 16], [52, 21], [44, 19.4], [34, 15], [28, 10], [25, 2]]);
const NAVICULAR = M([[95.6, -30], [96, -20], [95.8, -11], [96.2, -1], [97, 6], [95, 10.6], [90, 11.2], [86, 7], [84.4, 0], [84, -8], [84.4, -16], [82.6, -24],
  [80, -30], [79.4, -35], [84, -37.4], [90, -35.4]]);
const CUBOID = M([[82.4, 11], [83.4, 22], [82.8, 34], [90, 37.6], [100, 38.6], [106.4, 36], [107.6, 29], [109, 23], [109.6, 13], [102, 12], [96, 11.2], [88, 9.2]]);
const MED_CUNEIFORM = M([[95.6, -29], [96.4, -20], [96.2, -12.4], [110, -12.2], [121.6, -13.2], [122.2, -22], [121.6, -31], [110, -32.4], [100, -31.6]]);
const INT_CUNEIFORM = M([[96.6, -11.6], [111.6, -11.2], [112, -6.4], [111.6, -1.6], [96.8, -1.6], [96.4, -6.4]]);
const LAT_CUNEIFORM = M([[97, -1], [116.6, 0.8], [117, 6.4], [116.6, 11.6], [109.6, 12.2], [98, 11.2], [96.4, 5]]);
/* ---------- metatarsals & phalanges (mm) ---------- */
const MT1 = tubeBone([122.4, -22], [191, -18], [9, 6, 7.4, 10.6]);
const MT2 = tubeBone([112.4, -6.4], [194, 1], [5.2, 3.8, 3.8, 5.6]);
const MT3 = tubeBone([117.2, 6.6], [189, 13.6], [5, 3.6, 3.6, 5.2]);
const MT4 = tubeBone([109.8, 18], [182, 25], [5, 3.5, 3.5, 5]);
const MT5 = spline(M([[108.6, 23.6], [116, 25.6], [130, 28.6], [150, 32], [163, 34], [168, 33.6], [173.6, 36], [175, 40], [172.6, 44], [166, 44.6], [160, 42.6],
  [145, 40.6], [128, 39.6], [118, 41.6], [110, 44.6], [103, 45.2], [99.6, 42.6], [101.6, 38], [106, 35], [107.6, 30]]));
const P1_HALLUX = tubeBone([192.4, -18], [219, -17.6], [8.6, 6.4, 6.6, 7.6]);
const P2_HALLUX = tubeBone([220.6, -17.6], [243, -18.2], [8, 6.6, 6.4, 6.4]);
const toe = (prox, mid, dist, k = 1) => join(
  tubeBone(prox[0], prox[1], [4.6 * k, 3 * k, 3.1 * k, 3.7 * k]),
  tubeBone(mid[0], mid[1], [3.6 * k, 2.8 * k, 2.8 * k, 3.1 * k]),
  tubeBone(dist[0], dist[1], [3.3 * k, 2.7 * k, 2.6 * k, 2.6 * k]));
const LESSER_TOES = join(
  toe([[196, 1.6], [220, 3]], [[221.6, 3], [230, 3.6]], [[231.6, 3.6], [239.4, 4]]),
  toe([[191, 14], [213, 16.6]], [[214.6, 16.6], [222, 17.6]], [[223.6, 17.6], [230.4, 18.6]], 0.97),
  toe([[184, 25.6], [204, 28.6]], [[205.6, 28.8], [212, 29.8]], [[213.6, 30], [219.4, 31]], 0.93),
  toe([[175.4, 38.6], [191, 42]], [[192.6, 42.4], [198, 43.4]], [[199.6, 43.6], [204.4, 44.6]], 0.85));

/* ---------- soft tissue (mm) ---------- */
const NERVE2 = [[136, 2], [158, 4.2], [178, 6.2], [190, 7.4], [199.6, 8.4]];
const NERVE3 = [[134, 14.4], [156, 16.6], [176, 18.7], [187, 20], [196.6, 21.4]];
const TMT_LINE = [[122.4, -31], [122.6, -22], [121.2, -14.4], [115.6, -11.8], [112.6, -6.2], [115.4, -0.6], [117.4, 6], [115, 12.4], [109.8, 17], [108.8, 24],
  [107.6, 31], [104.6, 37]];
const EXT = {
  ta: [[36, -21], [60, -27], [84, -32.4], [102, -34.6]],
  ehl: [[38, -14.6], [70, -20.6], [100, -23.6], [140, -21.4], [180, -18.4], [214, -17.6], [236, -18]],
  edl: [[38, -3.4], [60, 2], [80, 8.4]],
  s2: [[80, 6.6], [120, -0.6], [160, 1.6], [196, 3], [226, 3.6]],
  s3: [[81, 8.6], [120, 8.4], [160, 11.6], [194, 16], [219, 17.6]],
  s4: [[82, 10.4], [125, 16.4], [160, 21.6], [190, 27.4], [208, 29.6]],
  s5: [[83, 12.4], [125, 24.6], [155, 33], [180, 40], [197, 43.6]]
};

export default {
  id: "foot-dorsal",
  viewBox: [0, 0, 800, 450],
  directions: {
    distal: [1, 0], proximal: [-1, 0], anterior: [1, 0], posterior: [-1, 0], medial: [0, -1], lateral: [0, 1],
    superior: "out", inferior: "in", dorsal: "out", plantar: "in"
  },
  backdrop: [
    { d: spline(M([[-1, -4], [5, -14], [30, -22.6], [60, -28.4], [95, -39], [125, -36.6], [160, -34.4], [185, -32.6], [205, -30.6], [230, -29.6], [245, -24],
      [248, -16], [244, -9], [239, -5.6], [242, 0.6], [240, 8], [234.6, 12.6], [233, 19], [228, 23], [224.6, 28], [223, 34], [215, 37.6], [209, 40.6],
      [207, 48], [190, 50.6], [175, 50.4], [150, 47.6], [120, 49.4], [102, 49.6], [85, 44.6], [60, 42.6], [35, 39.6], [12, 34.4], [2, 24], [-3, 10]])),
      fill: "skin", opacity: 0.35 }
  ],
  structures: {
    /* hindfoot & midfoot */
    calcaneus: { type: "bone", z: 1, d: spline(CALCANEUS), label: m([28, 26]) },
    talus: { type: "bone", z: 2, d: spline(TALUS), label: m([46, 2]) },
    navicular: { type: "bone", z: 3, d: spline(NAVICULAR), label: m([89, -14]) },
    cuboid: { type: "bone", z: 3, d: spline(CUBOID), label: m([95, 25]) },
    medialCuneiform: { type: "bone", z: 3, d: spline(MED_CUNEIFORM), label: m([108, -23]) },
    intermediateCuneiform: { type: "bone", z: 3, d: spline(INT_CUNEIFORM), label: m([103.6, -6.4]) },
    lateralCuneiform: { type: "bone", z: 3, d: spline(LAT_CUNEIFORM), label: m([106, 5.6]) },

    /* plantar soft tissue seen in the intermetatarsal / web spaces */
    interdigitalNerve2: { type: "nerve", z: 4, points: M(NERVE2), width: 3.2 * S, label: m([160, 4.4]) },
    interdigitalNerve3: { type: "nerve", z: 4, points: M(NERVE3), width: 3.2 * S, label: m([158, 16.8]) },
    digitalNerveBranchesDeco: {
      type: "nerve", z: 4, width: 1.4 * S,
      d: join(spline(M([[199.6, 8.4], [205, 5.6], [212, 5.4]]), false), spline(M([[199.6, 8.4], [205, 11.4], [210, 13.2]]), false),
        spline(M([[196.6, 21.4], [202, 19], [207, 19.2]]), false), spline(M([[196.6, 21.4], [200.6, 24.4], [205, 26]]), false))
    },
    intermetatarsalLigament: { type: "ligament", z: 5, points: M([[185, -12], [189.4, 1], [185.6, 13.6], [179, 25], [171, 37]]), width: 5 * S, label: m([186, 7.6]) },

    /* rays */
    metatarsal1: { type: "bone", z: 6, d: MT1, label: m([150, -19]) },
    metatarsal2: { type: "bone", z: 6, d: MT2, label: m([150, -2.4]) },
    metatarsal3: { type: "bone", z: 6, d: MT3, label: m([150, 10]) },
    metatarsal4: { type: "bone", z: 6, d: MT4, label: m([150, 21.6]) },
    metatarsal5: { type: "bone", z: 6, d: MT5, label: m([145, 36.6]) },
    proximalPhalanx1: { type: "bone", z: 6, d: P1_HALLUX, label: m([206, -17.6]) },
    distalPhalanx1: { type: "bone", z: 6, d: P2_HALLUX, label: m([232, -18]) },
    lesserToes: { type: "bone", z: 6, d: LESSER_TOES, label: m([208, 2.4]) },

    /* plantar structures ghosted over the bones that hide them */
    sesamoidMedial: { type: "bone", z: 8, ghost: true, d: spline(M([[175.6, -23], [178, -27.2], [183, -28.4], [187.6, -25.4], [188.6, -21.4], [185.6, -18.8], [180, -18.6]])), label: m([182, -23.4]) },
    sesamoidLateral: { type: "bone", z: 8, ghost: true, d: spline(M([[177.6, -13], [180, -16.4], [184.6, -16.8], [188, -14], [187.6, -10.4], [183.6, -9.2], [179.4, -10]])), label: m([183, -13]) },
    plantarPlate2: { type: "ligament", z: 8, ghost: true, from: m([180.4, 0.4]), to: m([198.6, 1.8]), width: 8.6 * S, label: m([190, 1]) },

    /* Lisfranc complex */
    lisfrancLigament: { type: "ligament", z: 9, from: m([113.4, -15.6]), to: m([122.4, -8.4]), width: 5.6 * S, label: m([118, -12]) },
    dorsalTMTLigaments: {
      type: "ligament", z: 10, ghost: true, fibreAngle: 90, label: m([108.4, 27]),
      d: ribbonMM(TMT_LINE, 3.4), axis: [m(TMT_LINE[0]), m(TMT_LINE[TMT_LINE.length - 1])]
    },
    extensorTendons: {
      type: "tendon", z: 11, ghost: true, label: m([140, -21.4]),
      d: join(ribbonMM(EXT.ta, 2.6), ribbonMM(EXT.ehl, 2), ribbonMM(EXT.edl, 2.8), ribbonMM(EXT.s2, 1.3), ribbonMM(EXT.s3, 1.3), ribbonMM(EXT.s4, 1.3), ribbonMM(EXT.s5, 1.2)),
      axis: [m([40, -14.6]), m([236, -18])]
    }
  },
  anchors: {
    lisfrancJoint: m([112.6, -6.2]),
    secondMetatarsalBase: m([118, -6]),
    secondMetatarsalNeck: m([174, -0.6]),
    thirdMetatarsalNeck: m([170, 11.8]),
    fifthMetatarsalBase: m([102.6, 41.6]),
    jonesZone: m([120, 33.8]),
    navicularDorsalCentral: m([90, -10]),
    thirdWebSpace: m([187, 20]),
    firstMTPJoint: m([191.6, -17.8]),
    secondMTPJoint: m([195.2, 1.2]),
    medialCuneiformM2Base: m([117, -12.4])
  }
};
