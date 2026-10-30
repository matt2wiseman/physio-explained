/**
 * Scene: elbow-lateral — RIGHT elbow, LATERAL view, elbow flexed 90° with the forearm in neutral rotation (thumb up)
 * (atlas convention after Netter "Elbow ligaments: lateral view" + lateral radiograph anatomy).
 *   - Humerus vertical (shoulder at the top). Forearm horizontal, pointing ANTERIORLY = screen LEFT.
 *     Olecranon / point of the elbow at screen RIGHT (posterior). Lateral = toward the viewer ("out").
 *   - Radius is the upper forearm bone (thumb up), ulna below it; the radial head overlaps the coronoid.
 *   - The superficial extensors (brachioradialis, ECRL, ECRB, extensor digitorum) are ghosted so the common extensor
 *     tendon, lateral collateral complex, annular ligament, supinator and posterior interosseous nerve show.
 *     Triceps lies behind the humerus (posterior); its tendon inserts on the olecranon.
 * Scale ≈ 3.1 px/mm.  Directions: superior/inferior follow the humerus; proximal/distal follow the FOREARM axis
 *   (distal = screen left), anterior = screen left, posterior = screen right.
 * Band conventions (from → to):
 *   commonExtensorTendon  lateral epicondyle origin (avulse end:"from") → muscle bellies (distal)
 *   tricepsTendon  muscle (proximal) → olecranon insertion (avulse end:"to")
 *   radialCollateralLigament  lateral epicondyle → annular ligament;  lucl  lateral epicondyle → supinator crest of ulna
 *   annularLigament  anterior margin of radial notch (top) → posterior margin (bottom), encircling the radial head/neck
 *   radialNerve  arm (proximal) → bifurcation in front of the radiocapitellar joint
 *   posteriorInterosseousNerve  bifurcation → arcade of Frohse → through supinator → distal
 * Cartilage axis: capitellarCartilage anterosuperior (0) → inferior (1). Muscle axes: origin → insertion.
 * radialHeadDislocatedPosition = where the RADIUS area-centroid goes in a pulled elbow (radial head slips distally out of
 *   the annular ligament): { do:"move", target:"radius", to:"radialHeadDislocatedPosition" }.
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const r = (n) => Math.round(n * 10) / 10;
const pt = (p) => `${r(p[0])},${r(p[1])}`;
/** Authoring coordinates are zoomed ×ZK about the joint (500,292) → (480,262) so the elbow fills the stage. */
const ZK = 1.4, T = (p) => [480 + (p[0] - 500) * ZK, 262 + (p[1] - 292) * ZK, p[2]];
/** Catmull-Rom spline through points → cubic Bézier path. A point [x, y, 1] is a sharp corner. */
function spline(pts0, closed = true) {
  const pts = pts0.map(T), n = pts.length, s = 1 / 6, at = (i) => (closed ? pts[(i + n) % n] : pts[Math.min(n - 1, Math.max(0, i))]);
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
function normalAt(c, i) {
  const a = c[Math.max(0, i - 1)], b = c[Math.min(c.length - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
  return [-dy / l, dx / l];
}
const offset = (c, d) => c.map((p, i) => { const n = normalAt(c, i), di = typeof d === "function" ? d(i) : d; return [p[0] + n[0] * di, p[1] + n[1] * di]; });
const ribbon = (c, w) => spline([...offset(c, w), ...offset(c, -w).reverse()]);
/** Points on a circle; angles in degrees, maths convention (0 = screen right, 90 = up). */
const arc = (cx, cy, rad, a0, a1, n) => Array.from({ length: n + 1 }, (_, i) => { const a = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + rad * Math.cos(a), cy - rad * Math.sin(a)]; });
const add = (p, d) => [r(p[0] + d[0]), r(p[1] + d[1])];
/** Crescent along a circular arc between radii r0 and r1, tapering to the ends. */
function crescent(c, r0, r1, a0, a1, n = 14) {
  const tp = (i) => Math.pow(Math.sin((Math.PI * i) / n), 0.5);
  const out = arc(c[0], c[1], 1, a0, a1, n).map((_, i) => { const a = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180, R = r0 + (r1 - r0) * tp(i); return [c[0] + R * Math.cos(a), c[1] - R * Math.sin(a)]; });
  const inn = arc(c[0], c[1], r0, a0, a1, n);
  return spline([...out, ...inn.slice(1, -1).reverse()]);
}

/* ---------- bones ---------- */
const CAP = [498, 292], TROCH = [502, 292];   // capitellum centre (r 22) and trochlear centre (notch r 28)
const HUMERUS = [
  [498, -12, 1], [498, 120], [497, 200], [494, 232], [489, 252], [481, 266], [477, 280], ...arc(CAP[0], CAP[1], 22, 185, 300, 6).slice(1),
  [517, 314], [524, 304], [528, 288], [533, 270], [539, 252], [542, 232], [543, 200], [542, 120], [542, -12, 1]
];
const RADIUS = [
  [474, 268], [470, 279], [469, 292], [470, 305], [474, 316], [466, 318], [454, 317], [447, 307], [430, 305], [412, 309], [396, 308], [340, 306],
  [240, 305], [130, 304, 1], [130, 278, 1], [240, 278], [340, 279], [400, 279], [430, 280], [447, 278], [453, 268], [466, 266]
];
const RAD_C = centroid(RADIUS);
const ULNA = [
  ...arc(TROCH[0], TROCH[1], 28.5, 128, 352, 12), [540, 286], [550, 290], [557, 302], [556, 322], [546, 337], [522, 347], [460, 352], [360, 350],
  [240, 346], [130, 343, 1], [130, 318, 1], [240, 320], [360, 323], [440, 320], [466, 313], [476, 300], [480, 284]
];

const scene = {
  id: "elbow-lateral",
  viewBox: [0, 0, 800, 450],
  directions: { superior: [0, -1], inferior: [0, 1], anterior: [-1, 0], posterior: [1, 0], proximal: [1, 0], distal: [-1, 0], lateral: "out", medial: "in" },
  backdrop: [
    { d: spline([[472, -12, 1], [628, -12, 1], [630, 80], [622, 180], [606, 250], [592, 300], [580, 340], [550, 368], [500, 378], [400, 374], [260, 368], [128, 362, 1], [128, 234, 1], [260, 230], [400, 224], [450, 212], [468, 170], [474, 100]]), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    /* deep layer */
    triceps: { type: "muscle", z: 1, axis: [[574, -10], [552, 284]], label: [586, 120],
      d: spline([[540, -12, 1], [604, -12, 1], [610, 70], [606, 160], [592, 222], [574, 258], [556, 276], [544, 262], [541, 200], [541, 80]]) },
    jointSpace: { type: "space", z: 1.5, hidden: true, label: [484, 312],
      d: spline([[490, 236], [482, 248], [474, 266], [467, 282], [466, 300], [472, 316], [486, 326], [504, 328], [522, 322], [536, 308], [542, 290], [548, 270], [550, 248], [544, 234], [538, 250], [532, 270], [524, 286], [516, 300], [500, 308], [486, 298], [482, 280], [488, 262]]) },
    humerus: { type: "bone", z: 2, label: [520, 150], d: spline(HUMERUS) },
    ulna: { type: "bone", z: 2.2, label: [300, 336], d: spline(ULNA) },
    radius: { type: "bone", z: 2.4, label: [300, 292], d: spline(RADIUS) },
    distalHumeralPhysis: { type: "physis", z: 3, label: [520, 262], d: ribbon([[489, 264], [500, 266], [512, 268], [524, 266], [536, 258]], 2.4) },
    capitellarCartilage: { type: "cartilage", z: 3, axis: [[480, 272], [508, 314]], label: [478, 300], d: crescent(CAP, 22, 25.5, 150, 290) },
    supinator: { type: "muscle", z: 4, axis: [[466, 318], [360, 298]], fibreAngle: -15, label: [392, 300],
      d: spline([[472, 322], [446, 325], [404, 320], [366, 312], [352, 298], [362, 284], [398, 278], [434, 274], [448, 276], [454, 300]]) },
    anconeus: { type: "muscle", z: 4, axis: [[522, 288], [492, 336]], label: [516, 326],
      d: spline([[522, 284], [540, 302], [538, 332], [510, 345], [478, 342], [500, 318]]) },
    annularLigament: { type: "ligament", z: 5, from: [459, 262], to: [459, 322], width: 13, bend: -3 },
    radialCollateralLigament: { type: "ligament", z: 5.5, from: [509, 291], to: [466, 305], width: 11 },
    lucl: { type: "ligament", z: 5.5, points: [[508, 294], [496, 314], [476, 326], [446, 331]], width: 9 },
    olecranonBursa: { type: "bursa", z: 5, cx: 566, cy: 314, rx: 16, ry: 8, rotate: 78 },
    tricepsTendon: { type: "tendon", z: 6, points: [[570, 160], [568, 220], [560, 262], [549, 289]], width: 20 },
    commonExtensorTendon: { type: "tendon", z: 6.5, from: [514, 265], to: [430, 268], width: 17, bend: -2 },
    radialNerve: { type: "nerve", z: 7, points: [[488, -10], [486, 100], [482, 190], [474, 240], [466, 262]], width: 8 },
    posteriorInterosseousNerve: { type: "nerve", z: 7, points: [[466, 262], [448, 272], [432, 283], [402, 294], [368, 302], [320, 306]], width: 6 },
    _superficialRadialNerve: { type: "nerve", z: 7, decorative: true, points: [[466, 262], [440, 258], [380, 252], [300, 250]], width: 4 },

    /* superficial extensors (ghosted) */
    extensorDigitorum: { type: "muscle", z: 8, ghost: true, axis: [[440, 296], [140, 314]], label: [260, 316],
      d: spline([[440, 288], [400, 300], [320, 312], [220, 320], [140, 324], [140, 304], [230, 300], [330, 294], [410, 286]]) },
    ecrb: { type: "muscle", z: 8.2, ghost: true, axis: [[432, 276], [140, 296]], label: [300, 290],
      d: spline([[436, 268], [430, 286], [380, 292], [300, 297], [200, 300], [140, 302], [140, 286], [210, 284], [300, 281], [380, 276]]) },
    ecrl: { type: "muscle", z: 8.4, ghost: true, axis: [[512, 236], [140, 278]], label: [330, 272],
      d: spline([[510, 228], [516, 252], [500, 268], [460, 274], [380, 278], [270, 282], [140, 286], [140, 268], [270, 264], [380, 260], [452, 254], [490, 242]]) },
    brachioradialis: { type: "muscle", z: 8.6, ghost: true, axis: [[492, 120], [140, 262]], label: [330, 250],
      d: spline([[490, 100], [506, 150], [508, 206], [498, 240], [474, 258], [420, 264], [320, 268], [220, 270], [140, 272], [140, 252], [240, 248], [360, 240], [434, 230], [466, 210], [480, 168], [482, 120]]) }
  },
  anchors: {
    lateralEpicondyle: [510, 282], ecrbOrigin: [508, 266], capitellum: [486, 302], radialHead: [462, 292], radialNeck: [442, 292],
    olecranon: [540, 318], olecranonTip: [536, 288], tricepsInsertion: [549, 290], arcadeOfFrohse: [434, 283], radiocapitellarJoint: [474, 292],
    supracondylarRegion: [520, 228], olecranonFossa: [538, 254], radialHeadDislocatedPosition: add(RAD_C, [-14, 2])
  }
};

/* zoom every non-path coordinate with the same transform as the spline paths */
const TP = (p) => T(p).slice(0, 2).map(r);
for (const st of Object.values(scene.structures)) {
  if (st.points) st.points = st.points.map(TP);
  if (st.from) st.from = TP(st.from);
  if (st.to) st.to = TP(st.to);
  if (st.axis) st.axis = st.axis.map(TP);
  if (st.label) st.label = TP(st.label);
  if (st.cx !== undefined) { [st.cx, st.cy] = TP([st.cx, st.cy]); st.rx *= ZK; st.ry *= ZK; }
  if (st.width) st.width = r(st.width * ZK);
  if (st.bend) st.bend = r(st.bend * ZK);
}
for (const k of Object.keys(scene.anchors)) scene.anchors[k] = TP(scene.anchors[k]);

export default scene;
