/**
 * Scene: elbow-medial — RIGHT elbow, MEDIAL view, elbow flexed 90° with the forearm in neutral rotation (thumb up)
 * (atlas convention after Netter "Elbow ligaments: medial view" + "Cubital fossa").
 *   - Humerus vertical (shoulder at the top). Forearm horizontal pointing ANTERIORLY = screen RIGHT.
 *     Olecranon / cubital tunnel at screen LEFT (posterior). Medial = toward the viewer ("out").
 *   - The ulna is the near (medial) forearm bone, below; the radius lies behind it and above (radial head behind the
 *     coronoid; radial tuberosity seen between the bones, where the distal biceps tendon inserts).
 *   - Flexor–pronator mass, pronator teres and FCU are ghosted so the UCL bundles, cubital tunnel and nerves show.
 *     Triceps lies behind the humerus. The medial epicondyle is drawn as an ossicle (decorative bone
 *     `_medialEpicondyle`) over the humerus so its apophysis (physis) can separate in Little League elbow.
 * Scale ≈ 3 px/mm.  Directions: superior/inferior follow the humerus; proximal/distal follow the FOREARM
 *   (distal = screen right); anterior = screen right, posterior = screen left.
 * Band conventions (from → to):
 *   uclAnterior  medial epicondyle (anteroinferior) → sublime tubercle (avulse end:"to" = sublime tubercle avulsion)
 *   uclPosterior medial epicondyle → medial olecranon (floor of the cubital tunnel)
 *   osborneLigament  medial epicondyle → olecranon (roof of the cubital tunnel)
 *   commonFlexorTendon  medial epicondyle (avulse end:"from") → flexor–pronator mass
 *   distalBicepsTendon  biceps MTJ (proximal) → radial tuberosity (rupture: avulse end:"to")
 *   bicipitalAponeurosis  biceps tendon → forearm fascia over the flexor–pronator mass
 *   ulnarNerve, medianNerve  arm (proximal) → forearm (distal)
 * Muscle axes: origin → insertion.
 * posteriorDislocationPosition = where the ULNA area-centroid goes in a posterior elbow dislocation (olecranon behind the
 *   humerus, coronoid in the olecranon fossa): { do:"move", target:"ulna", to:"posteriorDislocationPosition" }
 *   (move the radius with { do:"move", target:"radius", dir:"posterior", amount } alongside).
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const r = (n) => Math.round(n * 10) / 10;
const pt = (p) => `${r(p[0])},${r(p[1])}`;
/** Catmull-Rom spline through points → cubic Bézier path. A point [x, y, 1] is a sharp corner. */
function spline(pts, closed = true) {
  const n = pts.length, s = 1 / 6, at = (i) => (closed ? pts[(i + n) % n] : pts[Math.min(n - 1, Math.max(0, i))]);
  let d = `M${pt(pts[0])}`;
  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
    const c1 = p1[2] ? p1 : [p1[0] + (p2[0] - p0[0]) * s, p1[1] + (p2[1] - p0[1]) * s];
    const c2 = p2[2] ? p2 : [p2[0] - (p3[0] - p1[0]) * s, p2[1] - (p3[1] - p1[1]) * s];
    d += ` C${pt(c1)} ${pt(c2)} ${pt(p2)}`;
  }
  return closed ? d + " Z" : d;
}
/** Area centroid of a closed spline (sampled) — matches the renderer's move{to} reference point. */
function centroid(pts) {
  const n = pts.length, s = 1 / 6, at = (i) => pts[(i + n) % n], poly = [];
  for (let i = 0; i < n; i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
    const c1 = p1[2] ? p1 : [p1[0] + (p2[0] - p0[0]) * s, p1[1] + (p2[1] - p0[1]) * s];
    const c2 = p2[2] ? p2 : [p2[0] - (p3[0] - p1[0]) * s, p2[1] - (p3[1] - p1[1]) * s];
    for (let k = 0; k < 8; k++) { const t = k / 8, u = 1 - t; poly.push([0, 1].map((j) => u * u * u * p1[j] + 3 * u * u * t * c1[j] + 3 * u * t * t * c2[j] + t * t * t * p2[j])); }
  }
  let A = 0, X = 0, Y = 0;
  for (let i = 0; i < poly.length; i++) { const [x0, y0] = poly[i], [x1, y1] = poly[(i + 1) % poly.length], c = x0 * y1 - x1 * y0; A += c; X += (x0 + x1) * c; Y += (y0 + y1) * c; }
  return [r(X / (3 * A)), r(Y / (3 * A))];
}
const arc = (cx, cy, rad, a0, a1, n) => Array.from({ length: n + 1 }, (_, i) => { const a = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + rad * Math.cos(a), cy - rad * Math.sin(a)]; });
const add = (p, d) => [r(p[0] + d[0]), r(p[1] + d[1])];
const ring = (c, rIn, rOut, a0, a1, n = 10) => spline([...arc(c[0], c[1], rOut, a0, a1, n), ...arc(c[0], c[1], rIn, a1, a0, n)]);

/* ---------- bones (T = trochlear centre) ---------- */
const T = [336, 256];
const HUMERUS = [[290, -12, 1], [290, 140], [292, 200], [296, 228], [300, 246], ...arc(T[0], T[1], 34, 195, 390, 12), [356, 220], [348, 200], [345, 160], [344, -12, 1]];
const ULNA = [
  ...arc(T[0], T[1], 37, 52, -175, 14), [288, 256], [276, 262], [270, 280], [274, 300], [288, 316], [340, 326], [440, 330], [560, 328], [712, 326, 1],
  [712, 300, 1], [560, 302], [450, 300], [404, 296], [384, 286], [374, 272], [370, 250]
];
const ULNA_C = centroid(ULNA);
const RADIUS = [[372, 236], [396, 234], [400, 244], [418, 246], [520, 248], [712, 250, 1], [712, 276, 1], [560, 278], [470, 280], [446, 284], [430, 289], [414, 283], [400, 277], [396, 282], [372, 282], [368, 258]];
const EPICONDYLE = [[300, 214], [310, 204], [326, 203], [338, 212], [340, 228], [330, 240], [314, 242], [302, 233]];

export default {
  id: "elbow-medial",
  viewBox: [0, 0, 800, 450],
  directions: { superior: [0, -1], inferior: [0, 1], anterior: [1, 0], posterior: [-1, 0], proximal: [-1, 0], distal: [1, 0], medial: "out", lateral: "in" },
  backdrop: [
    { d: spline([[214, -12, 1], [470, -12, 1], [468, 80], [460, 160], [470, 206], [560, 214], [712, 218], [812, 220, 1], [812, 372, 1], [700, 368], [560, 366], [420, 366], [320, 360], [270, 344], [244, 310], [232, 250], [222, 160], [216, 80]]), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    triceps: { type: "muscle", z: 1, axis: [[262, -10], [286, 262]], label: [258, 120],
      d: spline([[232, -12, 1], [294, -12, 1], [296, 120], [294, 200], [290, 240], [288, 262], [272, 264], [254, 236], [240, 170], [230, 90]]) },
    jointSpace: { type: "space", z: 1.5, hidden: true, label: [336, 296],
      d: spline([[352, 204], [364, 214], [373, 234], [376, 256], [372, 276], [358, 293], [336, 297], [314, 291], [300, 277], [293, 256], [291, 236], [296, 222], [303, 240], [306, 262], [317, 280], [336, 287], [355, 281], [366, 262], [364, 242], [356, 226], [348, 214]]) },
    radius: { type: "bone", z: 2, label: [600, 262], d: spline(RADIUS) },
    humerus: { type: "bone", z: 2.5, label: [318, 120], d: spline(HUMERUS) },
    ulna: { type: "bone", z: 3, label: [600, 314], d: spline(ULNA) },
    _medialEpicondyle: { type: "bone", z: 3.2, decorative: true, d: spline(EPICONDYLE) },
    medialEpicondyleApophysis: { type: "physis", z: 3.4, epiphysis: "_medialEpicondyle", label: [316, 202], d: ring([320, 224], 20, 24.5, 200, 20) },
    brachialis: { type: "muscle", z: 4, axis: [[372, 50], [392, 290]], label: [384, 130],
      d: spline([[346, 40], [394, 50], [410, 120], [410, 190], [404, 236], [400, 272], [394, 292], [384, 288], [380, 250], [368, 216], [352, 172], [346, 110]]) },
    uclPosterior: { type: "ligament", z: 4.5, from: [316, 240], to: [294, 286], width: 13 },
    uclAnterior: { type: "ligament", z: 5.2, from: [326, 238], to: [376, 281], width: 12, bend: 2 },
    ulnarNerve: { type: "nerve", z: 5, points: [[274, -12], [280, 80], [288, 160], [296, 212], [301, 246], [316, 276], [350, 300], [420, 312], [560, 314], [712, 314]], width: 9 },
    osborneLigament: { type: "ligament", z: 5.5, from: [308, 230], to: [282, 268], width: 14 },
    biceps: { type: "muscle", z: 5, axis: [[414, -10], [420, 176]], label: [424, 80],
      d: spline([[384, -12, 1], [446, -12, 1], [452, 60], [446, 120], [430, 160], [418, 180], [408, 160], [396, 110], [388, 50]]) },
    distalBicepsTendon: { type: "tendon", z: 6, points: [[418, 168], [416, 206], [420, 244], [430, 282]], width: 10 },
    medianNerve: { type: "nerve", z: 6.2, points: [[384, -12], [384, 100], [390, 180], [394, 222], [398, 244], [430, 262], [520, 270], [712, 274]], width: 8 },
    commonFlexorTendon: { type: "tendon", z: 6.5, points: [[330, 216], [366, 228], [404, 242]], width: 17 },
    bicipitalAponeurosis: { type: "fascia", z: 7, from: [418, 206], to: [496, 262], width: 22, bend: 4 },
    flexorPronatorMass: { type: "muscle", z: 8, ghost: true, axis: [[398, 244], [712, 278]], label: [600, 282],
      d: spline([[398, 234], [460, 240], [560, 248], [712, 254, 1], [712, 302, 1], [560, 304], [460, 302], [410, 292], [390, 270]]) },
    pronatorTeres: { type: "muscle", z: 8.4, ghost: true, axis: [[336, 214], [530, 246]], label: [470, 238],
      d: spline([[336, 206], [380, 212], [440, 224], [520, 236], [548, 248], [506, 256], [432, 250], [372, 238], [340, 226]]) },
    flexorCarpiUlnaris: { type: "muscle", z: 8.6, ghost: true, axis: [[296, 268], [712, 338]], label: [600, 338],
      d: spline([[300, 262], [330, 302], [420, 318], [560, 326], [712, 330, 1], [712, 352, 1], [560, 348], [420, 342], [320, 328], [282, 298]]) }
  },
  anchors: {
    medialEpicondyle: [320, 222], sublimeTubercle: [377, 281], coronoid: [362, 234], olecranon: [278, 288], olecranonPosteromedial: [298, 262],
    cubitalTunnel: [299, 248], radialTuberosity: [430, 284], commonFlexorOrigin: [330, 216], medialJointLine: [348, 290], uclMid: [350, 262],
    posteriorDislocationPosition: add(ULNA_C, [-58, -30])
  }
};
