/**
 * Scene: hip-anterior — RIGHT hip & groin, ANTERIOR view (atlas convention, hip joint shown in situ).
 *   - Viewer faces the patient: patient's LATERAL side (greater trochanter, ASIS) = screen LEFT,
 *     MEDIAL side (pubic symphysis = midline, x ≈ 585) = screen RIGHT. Superior = up.
 *     Anterior = toward the viewer ("out"), posterior = away ("in").
 *   - Femur: neck–shaft angle ≈ 130°, CE angle ≈ 30°. The femoral HEAD (capital epiphysis) is a separate bone
 *     from the rest of the femur, joined at the proximal femoral physis (SCFE = move femoralHead; subcapital /
 *     neck fractures = fracture femur at the neck anchors).
 *   - The anterosuperior labrum projects at the superolateral acetabular rim in this view; the cam site is the
 *     superolateral head–neck junction; hipCartilage = femoral-head + acetabular cartilage with the joint space between.
 *   - Rectus femoris and sartorius cross directly over the anterior hip joint, so they are GHOSTED to keep the
 *     labrum, head–neck junction and capsule visible.
 * Scale ≈ 2.2 px/mm.
 * Band conventions (PROXIMAL → DISTAL unless stated):
 *   iliopsoasTendon  MTJ (pelvic brim) → lesser trochanter (avulse end:"to" = LT avulsion)
 *   adductorLongusTendon  pubic enthesis → MTJ (avulse end:"from" = pubic avulsion)
 *   inguinalLigament  ASIS → pubic tubercle;  femoralNerve / obturatorNerve  proximal → distal.
 * Cartilage axes: labrum rim base (chondrolabral junction, 0) → free edge laterally (1);
 *   hipCartilage lateral → medial;  pubicSymphysis superior → inferior.  Muscle axes origin → insertion.
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
/** Closed outline around a centreline with half-widths w (number or per-point array). */
const ribbon = (c, w) => spline([...offset(c, (i) => (Array.isArray(w) ? w[i] : w)), ...offset(c, (i) => -(Array.isArray(w) ? w[i] : w)).reverse()]);
const ellipse = (cx, cy, rx, ry, n = 16) => Array.from({ length: n }, (_, i) => { const a = (-i / n) * Math.PI * 2; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });

/* ---------- femoral head geometry ---------- */
const H = [385, 205], R = 53;                       // head centre & radius (≈ 48 mm head)
const U = [-0.669, 0.743], W = [0.743, 0.669];      // neck axis (head → shaft) and its perpendicular (inferior side +)
const polar = (deg, rad) => [H[0] + rad * Math.cos((deg * Math.PI) / 180), H[1] + rad * Math.sin((deg * Math.PI) / 180)];
const arc = (a0, a1, rad, n) => Array.from({ length: n + 1 }, (_, i) => polar(a0 + ((a1 - a0) * i) / n, typeof rad === "function" ? rad(i / n) : rad));
const neck = (t, s) => [H[0] + U[0] * t + W[0] * s, H[1] + U[1] * t + W[1] * s];
/** Crescent band between two radii over an angular range (outer radius may taper with f(0..1)). */
const crescent = (a0, a1, rIn, rOut, n = 10) => spline([...arc(a0, a1, rOut, n), ...arc(a1, a0, rIn, n)]);

// Physis: chord across the head 38 px from its centre, bowed slightly toward the head.
const PHYS = [0, 0.25, 0.5, 0.75, 1].map((f) => { const s = -36.9 + 73.8 * f, bow = 5 * Math.sin(Math.PI * f); return neck(38 - bow, s); });
const HEAD = [...arc(176, 448, R, 15).slice(0, -1), PHYS[4], PHYS[3], PHYS[2], PHYS[1]];
const FEMUR = [
  PHYS[0], PHYS[1], PHYS[2], PHYS[3], PHYS[4], neck(50, 33), neck(70, 34), neck(95, 36), [356, 310], [365, 320, 1], [361, 333], [348, 343],
  [352, 400], [360, 470], [301, 470], [291, 400], [282, 340], [275, 308], [260, 288], [246, 262], [242, 232], [248, 207], [264, 193],
  [279, 206], [289, 228], [296, 247], neck(75, -33), neck(50, -32)
];

/* ---------- muscle centrelines ---------- */
const RF = [[341, 120], [338, 160], [334, 210], [330, 270], [326, 340], [322, 420], [320, 470]];
const SART = [[308, 56], [314, 120], [330, 200], [352, 280], [380, 360], [408, 440], [416, 470]];
const IL_TENDON = { from: [424, 190], to: [364, 321], bend: -14 };

export default {
  id: "hip-anterior",
  viewBox: [0, 0, 800, 450],
  directions: {
    medial: [1, 0], lateral: [-1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1],
    anterior: "out", posterior: "in"
  },
  backdrop: [
    { d: spline([[250, -20], [236, 80], [222, 190], [230, 280], [250, 380], [262, 470], [602, 470], [606, 360], [618, 290], [650, 240], [660, 120], [660, -20]]), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    capsule: {
      type: "capsule", z: 0, label: [292, 262],
      d: spline([[352, 138], [330, 150], [316, 170], [302, 198], [288, 222], [282, 250], [298, 282], [330, 302], [362, 310], [388, 300], [402, 280], [414, 258], [436, 232], [446, 200], [440, 166], [418, 144], [390, 134]])
    },
    pelvis: {
      type: "bone", z: 1, label: [356, 40],
      d: [spline([[322, -16], [315, 20], [306, 52], [318, 80], [334, 104], [342, 118], [348, 136], [354, 152], [372, 200], [396, 262], [404, 300], [430, 345],
        [450, 362], [482, 354], [530, 322], [560, 304], [581, 300], [581, 216], [560, 210], [532, 216], [490, 199], [452, 186], [430, 171],
        [452, 130], [488, 70], [512, 10], [520, -16]]),
        spline(ellipse(476, 287, 35, 38))].join(" ")
    },
    leftPubisDeco: { type: "bone", z: 1, d: spline([[591, 214], [620, 210], [646, 222], [648, 300], [616, 306], [591, 300]]) },
    pubicSymphysis: { type: "cartilage", z: 2, d: spline([[580, 214], [586, 212], [592, 214], [593, 256], [592, 300], [586, 303], [580, 300], [579, 256]]), axis: [[586, 216], [586, 298]], label: [596, 258] },
    jointSpace: {
      type: "space", z: 2, label: [400, 144],
      d: spline([...arc(-140, 30, R + 5, 12), [374, 287], [350, 306], [342, 296], ...arc(20, -140, R - 4, 10)])
    },
    obturatorNerve: { type: "nerve", z: 3, points: [[492, -16], [494, 60], [488, 130], [470, 190], [452, 236], [446, 254], [456, 292], [474, 342], [490, 400]], width: 6, label: [496, 100] },
    femur: { type: "bone", z: 4, d: spline(FEMUR), label: [308, 380] },
    femoralHead: { type: "bone", z: 5, d: spline(HEAD), label: [392, 196] },
    proximalFemoralPhysis: { type: "physis", z: 6, d: ribbon(PHYS, 2.6), axis: [PHYS[0], PHYS[4]], label: PHYS[2] },
    hipCartilage: {
      type: "cartilage", z: 7, label: polar(-100, R + 9),
      d: [
        spline([...arc(-172, -12, R, 14), ...arc(-12, -172, (f) => R - 7 * Math.pow(Math.sin(Math.PI * (1 - f)), 0.5), 14).slice(1, -1)]),   // femoral head
        spline([...arc(-128, -24, R + 12, 12), ...arc(-24, -128, (f) => R + 12 - 7 * Math.pow(Math.sin(Math.PI * (1 - f)), 0.5), 12).slice(1, -1)])  // acetabulum
      ].join(" "),
      axis: [polar(-170, R), polar(-15, R)]
    },
    labrum: {
      type: "cartilage", z: 8, label: polar(-150, R + 14),
      d: spline([...arc(-122, -166, (f) => R + 2 + 12 * (1 - f) ** 0.8, 8), ...arc(-166, -122, R + 1, 8).slice(1)]),
      axis: [polar(-126, R + 8), polar(-160, R + 3)]
    },
    pectineus: {
      type: "muscle", z: 9, label: [470, 238], fibreAngle: 0,
      d: spline([[452, 188], [500, 197], [530, 210], [520, 236], [470, 280], [420, 320], [392, 352], [377, 350], [378, 330], [405, 290], [432, 240]]),
      axis: [[492, 202], [384, 344]]
    },
    iliopsoas: {
      type: "muscle", z: 10, label: [430, 70], fibreAngle: 0,
      d: spline([[326, -16], [522, -16], [500, 60], [470, 120], [456, 165], [448, 210], [430, 255], [406, 292], [384, 312], [372, 318], [370, 300], [384, 268], [395, 225], [393, 180], [378, 140], [352, 100], [334, 50]]),
      axis: [[424, -10], [366, 318]]
    },
    iliopsoasBursa: { type: "bursa", z: 11, cx: 410, cy: 214, rx: 10, ry: 24, rotate: -24 },
    iliopsoasTendon: { type: "tendon", z: 12, ...IL_TENDON, width: 11 },
    femoralNerve: { type: "nerve", z: 13, points: [[424, -16], [414, 60], [403, 120], [397, 165], [392, 205], [388, 240]], width: 7, label: [418, 30] },
    femoralNerveBranchesDeco: { type: "nerve", z: 13, points: [[388, 240], [376, 270], [366, 300]], width: 3 },
    adductorLongus: {
      type: "muscle", z: 13, label: [500, 380], fibreAngle: 0,
      d: spline([[530, 226], [552, 232], [560, 262], [548, 320], [520, 380], [488, 440], [470, 470], [412, 470], [432, 420], [470, 350], [505, 286], [522, 250]]),
      axis: [[541, 232], [442, 466]]
    },
    gracilis: {
      type: "muscle", z: 13, label: [566, 400], fibreAngle: 0,
      d: spline([[556, 246], [576, 252], [580, 320], [578, 400], [576, 470], [548, 470], [550, 400], [552, 320]]),
      axis: [[566, 252], [562, 466]]
    },
    rectusAbdominis: {
      type: "muscle", z: 13, label: [556, 100], fibreAngle: 0,
      d: spline([[510, -16], [588, -16], [586, 100], [583, 204], [562, 209], [540, 213], [530, 180], [520, 100]]),
      axis: [[550, -10], [560, 208]]
    },
    adductorLongusTendon: { type: "tendon", z: 14, from: [541, 230], to: [527, 286], width: 10 },
    inguinalCanal: { type: "space", z: 15, d: ribbon([[418, 120], [450, 143], [484, 168], [513, 194]], [4, 5, 5, 6]), label: [462, 150] },
    inguinalLigament: { type: "ligament", z: 16, from: [308, 54], to: [532, 218], width: 5, bend: 24 },
    rectusFemoris: { type: "muscle", z: 17, ghost: true, d: ribbon(RF, [5, 7, 11, 17, 21, 22, 22]), axis: [RF[0], RF[RF.length - 1]], fibreAngle: 20, label: [322, 330] },
    sartorius: { type: "muscle", z: 18, ghost: true, d: ribbon(SART, 12), axis: [SART[0], SART[SART.length - 1]], fibreAngle: 0, label: [372, 350] }
  },
  anchors: {
    asis: [308, 53],
    aiis: [341, 117],
    anterosuperiorLabrum: polar(-140, R + 7),
    headNeckJunction: neck(43, -34),
    acetabularRim: polar(-122, R + 15),
    femoralNeckSuperior: neck(75, -32),
    femoralNeckInferior: neck(70, 33),
    subcapital: neck(46, 0),
    pubicTubercle: [532, 217],
    adductorLongusOrigin: [541, 232],
    adductorLongusMTJ: [527, 286],
    superficialInguinalRing: [515, 199],
    pubicBody: [558, 262],
    lesserTrochanter: [364, 322],
    greaterTrochanter: [254, 222],
    iliopectinealEminence: [430, 172],
    intertrochanteric: [318, 284],
    posteriorDislocationPosition: [360, 134]
  }
};
