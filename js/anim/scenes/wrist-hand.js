/**
 * Scene: wrist-hand — RIGHT wrist & hand, PALMAR (volar) view, hand laid HORIZONTALLY (atlas convention after
 * Netter "Bones of wrist and hand: palmar view" + "Carpal tunnel"), so the carpus is drawn as large as possible.
 *   - Forearm enters from screen LEFT, fingers point screen RIGHT (proximal = left, distal = right).
 *   - Palm faces the viewer, so the RADIAL side (thumb, radial styloid, scaphoid) is screen UP and the
 *     ULNAR side (little finger, ulnar styloid, pisiform, hamate) is screen DOWN. Palmar = "out", dorsal = "in".
 *   - Flexor retinaculum, thenar and hypothenar muscles are ghosted so the carpal tunnel contents and carpal bones show.
 *   - Dorsal structures (1st dorsal compartment APL/EPB, ECU in its subsheath) are drawn at the radial / ulnar borders
 *     where they wrap into view.
 * Scale 3.0 px/mm (fingers run toward the right edge). Geometry is authored in mm (X distal from the radiocarpal joint, Y ulnar from the 3rd-ray axis).
 * Band conventions (from → to):
 *   flexorTendons  forearm (proximal) → fingers;  fcrTendon forearm → 2nd MC base;  aplTendon forearm → 1st MC base
 *   epbTendon  forearm → thumb proximal phalanx base;  ecuTendon forearm → 5th MC base
 *   scapholunateLigament  scaphoid → lunate;  lunotriquetralLigament  lunate → triquetrum
 *   flexorRetinaculum (closed shape) axis radial attachment (scaphoid tubercle/trapezium) → ulnar (pisiform/hook of hamate)
 *   medianNerve, ulnarNerve, radialArtery, ulnarArtery  proximal (forearm) → distal (palm)
 *   firstDorsalCompartment / ecuSubsheath  proximal → distal sheath ends
 * Cartilage axis: tfcc radial attachment (sigmoid notch rim) → ulnar fovea/styloid.
 * `dorsalRadiusTilt` is an arrow anchor on the distal radius (use dir:"posterior" — dorsal displacement is into the page).
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const r = (n) => Math.round(n * 10) / 10;
const K = 3.0, X0 = 196, Y0 = 282;
const S = ([X, Y, c]) => (c ? [X0 + X * K, Y0 + Y * K, 1] : [X0 + X * K, Y0 + Y * K]);   // mm → screen
const SP = (pts) => pts.map(S);
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
function normalAt(c, i) {
  const a = c[Math.max(0, i - 1)], b = c[Math.min(c.length - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
  return [-dy / l, dx / l];
}
const offset = (c, d) => c.map((p, i) => { const n = normalAt(c, i), di = typeof d === "function" ? d(i) : d; return [p[0] + n[0] * di, p[1] + n[1] * di]; });
const ribbonPts = (c, w) => [...offset(c, w), ...offset(c, (i) => -(typeof w === "function" ? w(i) : w)).reverse()];
const area = (p) => p.reduce((a, q, i) => { const b = p[(i + 1) % p.length]; return a + q[0] * b[1] - b[0] * q[1]; }, 0);
const orient = (p) => (area(p) < 0 ? p.slice().reverse() : p);   // consistent winding so unions fill under nonzero
/** Long bone (metacarpal / phalanx) outline in mm from base point a to head point b. */
function longBone(a, b, wb, ws, wh, tuft = false) {
  const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy), u = [dx / L, dy / L], n = [-u[1], u[0]];
  const P = (t, w) => [a[0] + u[0] * t * L + n[0] * w, a[1] + u[1] * t * L + n[1] * w];
  const prof = tuft
    ? [[0.03, wb * 0.95], [0.14, wb], [0.32, ws], [0.62, ws * 0.9], [0.82, wh], [0.94, wh * 0.9]]
    : [[0.02, wb * 0.92], [0.1, wb], [0.24, wb * 0.8], [0.4, ws], [0.66, ws], [0.8, wh * 0.78], [0.9, wh], [0.97, wh * 0.72]];
  return [P(0, 0), ...prof.map(([t, w]) => P(t, w)), P(1, 0), ...prof.slice().reverse().map(([t, w]) => P(t, -w))];
}
const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const ext = (a, b, len) => { const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy); return [b[0] + (dx / L) * len, b[1] + (dy / L) * len]; };

/* ---------- forearm bones & carpus (mm) ---------- */
const RADIUS = [[11, -24.5], [8.5, -21], [5, -16], [2.6, -11], [1.6, -7], [1.2, -3], [0.5, 2], [-1, 7.2, 1], [-4, 8.6], [-9, 8.9], [-14, 8.1],
  [-20, 5.6], [-28, 3.5], [-44, 3, 1], [-44, -13, 1], [-28, -14], [-18, -18], [-10, -23], [-3, -26.5], [4, -27.6], [8.6, -27]];
const ULNA = [[-2, 10], [-1.6, 13], [-1.6, 17], [-2.6, 19.5], [-1.5, 22], [2.5, 24], [4.3, 25.6], [3.5, 27.5], [-1, 27.2], [-6, 26.5], [-12, 24],
  [-20, 21], [-30, 19.8], [-44, 19.5, 1], [-44, 8, 1], [-30, 8.3], [-20, 9.6], [-12, 10.4], [-6, 10.6]];
const SCAPHOID = [[3.4, -7], [8, -7.4], [12.6, -10], [17.4, -13.6], [21.6, -17.4], [23.2, -21.6], [21, -26.2], [16.4, -25.8], [12.4, -23.4], [7.6, -21.4], [3.6, -18.2], [1.6, -13.4]];
const LUNATE = [[2.4, -4.4], [6, -5.6], [12.8, -4.6], [10.6, 0.6], [13.4, 5.8], [7.2, 7.6], [2.8, 5.4], [1.6, 0.4]];
const TRIQUETRUM = [[6.4, 8.8], [13.2, 8.2], [17, 11.4], [17.2, 16.2], [13.4, 20.6], [8.4, 21], [5.2, 17.4], [4.4, 12.6]];
const PISIFORM = [[8.4, 17.6], [12, 14], [16.4, 14.8], [17.6, 18.6], [14.6, 22], [10, 21.6]];
const TRAPEZIUM = [[23.6, -17.4], [25.4, -24], [29.2, -29], [35, -30.4], [39.2, -26.6], [38.4, -19.6], [36.2, -15.6], [30.2, -15], [25.4, -15.4]];
const TRAPEZOID = [[23.4, -8.6], [23.8, -12.8], [27.6, -14.6], [33.2, -14], [35.2, -11.2], [34.4, -7.8], [28.4, -7.2]];
const CAPITATE = [[11.6, 0.6], [12.8, -3.8], [17, -6.4], [24, -6.6], [33, -6.6], [36.2, -4.8], [37, 0.2], [36.2, 5], [32, 6.2], [22, 6.2], [16, 5.4], [12.8, 4]];
const HAMATE = [[15.2, 7.4], [22, 7.2], [33, 7.8], [37, 9], [37.2, 14], [36.2, 19.2], [31, 21.6], [24, 20.2], [18.4, 15.4], [15.4, 10.4]];

/* ---------- rays ---------- */
const MC = {
  1: [[38.6, -30.6], [76.4, -51.4]], 2: [[36.6, -10.4], [103, -17.4]], 3: [[37.8, -0.4], [101.6, 0.4]], 4: [[37.8, 11.2], [95.6, 15.6]], 5: [[37.4, 17.6], [89, 28]]
};
const MCW = { 1: [6.4, 3.6, 5.2], 2: [5.4, 3.2, 5], 3: [5.4, 3.2, 5], 4: [4.4, 2.6, 4.4], 5: [4.6, 2.8, 4.4] };
const FINGERS = { 2: [40, 23, 17], 3: [44, 27, 18], 4: [41, 26, 18], 5: [32, 18, 16] };
const phalanges = [];
for (const f of [2, 3, 4, 5]) {
  const [a, b] = MC[f], dir = f === 2 ? -0.04 : f === 5 ? 0.06 : 0, gap = 1.8;
  let p = ext(a, b, gap); const [l1, l2, l3] = FINGERS[f], w = f === 5 ? 0.85 : 1;
  const step = (len) => { const q = [p[0] + len, p[1] + len * dir]; const bone = [p, q]; p = [q[0] + gap, q[1] + gap * dir]; return bone; };
  const pp = step(l1), mp = step(l2), dp = step(l3);
  phalanges.push(longBone(pp[0], pp[1], 5 * w, 3.1 * w, 4.2 * w), longBone(mp[0], mp[1], 4.2 * w, 2.7 * w, 3.6 * w), longBone(dp[0], dp[1], 3.6 * w, 1.9 * w, 3.2 * w, true));
}
{ // thumb: proximal & distal phalanx along the 1st MC axis
  const [a, b] = MC[1], p0 = ext(a, b, 1.8), p1 = ext(a, p0, 31), p2 = ext(a, p1, 1.8), p3 = ext(a, p2, 22);
  phalanges.push(longBone(p0, p1, 5.4, 3.4, 4.6), longBone(p2, p3, 4.6, 2.6, 4, true));
}
const bone = (pts) => spline(SP(pts));
const mcBone = (i) => spline(SP(longBone(MC[i][0], MC[i][1], ...MCW[i])));

/* ---------- soft tissue (mm) ---------- */
const tendonStrip = (c) => spline(orient(SP(ribbonPts(c, 1.55))));
const FLEXORS = [
  [[-44, -6], [-10, -4.5], [16, -3.5], [40, -6.5], [86, -15.6], [118, -18.6]],
  [[-44, -2], [-10, -0.5], [16, 0], [40, 0], [86, 0.2], [120, 0.2]],
  [[-44, 2.6], [-10, 3.2], [16, 3.8], [40, 5.4], [82, 14.4], [112, 16.8]],
  [[-44, 6.2], [-10, 6.6], [16, 7.6], [40, 10.4], [76, 23.4], [102, 27.4]]
];
const handOutline = orient(SP([[-46, -21], [-20, -24], [0, -30], [14, -34], [30, -38], [50, -50], [70, -62], [90, -76], [104, -87], [124, -97], [130, -90], [118, -76],
  [100, -60], [90, -46], [96, -28], [106, -26], [104, -10], [104, 8], [100, 22], [96, 33], [86, 38], [60, 38], [36, 34], [16, 31], [0, 31], [-20, 28], [-46, 27]]));
const fingerSkins = [2, 3, 4, 5].map((f) => { const [a, b] = MC[f], tip = [b[0] + FINGERS[f].reduce((s, v) => s + v, 0) + 8, b[1] + (f === 2 ? -3.5 : f === 5 ? 5 : 0)]; return spline(orient(SP(ribbonPts([lerp(a, b, 0.6), b, lerp(b, tip, 0.5), tip], f === 5 ? 7.4 : 8.6)))); });

export default {
  id: "wrist-hand",
  viewBox: [0, 0, 800, 450],
  directions: { proximal: [-1, 0], distal: [1, 0], lateral: [0, -1], medial: [0, 1], radial: [0, -1], ulnar: [0, 1], superior: [-1, 0], inferior: [1, 0], anterior: "out", posterior: "in", palmar: "out", dorsal: "in" },
  backdrop: [{ d: [spline(handOutline), ...fingerSkins].join(" "), fill: "skin", opacity: 0.35 }],
  structures: {
    /* bones */
    radius: { type: "bone", z: 2, label: S([-24, -6]), d: bone(RADIUS) },
    ulna: { type: "bone", z: 2, label: S([-26, 15]), d: bone(ULNA) },
    scaphoid: { type: "bone", z: 3, label: S([13, -17]), d: bone(SCAPHOID) },
    lunate: { type: "bone", z: 3, label: S([7, 1]), d: bone(LUNATE) },
    triquetrum: { type: "bone", z: 3, label: S([11, 12]), d: bone(TRIQUETRUM) },
    trapezium: { type: "bone", z: 3, label: S([32, -23]), d: bone(TRAPEZIUM) },
    trapezoid: { type: "bone", z: 3, label: S([29, -11]), d: bone(TRAPEZOID) },
    capitate: { type: "bone", z: 3, label: S([26, 0]), d: bone(CAPITATE) },
    hamate: { type: "bone", z: 3, label: S([26, 14]), d: bone(HAMATE) },
    pisiform: { type: "bone", z: 3.4, label: S([13, 18]), d: bone(PISIFORM) },
    _hookOfHamate: { type: "bone", z: 3.4, decorative: true, d: spline(SP([[27.6, 11.6], [30, 9.6], [32.6, 10.4], [33.2, 13.4], [31, 15.4], [28.2, 14.6]])) },
    metacarpal1: { type: "bone", z: 3, d: mcBone(1) },
    metacarpal2: { type: "bone", z: 3, d: mcBone(2) },
    metacarpal3: { type: "bone", z: 3, d: mcBone(3) },
    metacarpal4: { type: "bone", z: 3, d: mcBone(4) },
    metacarpal5: { type: "bone", z: 3, d: mcBone(5) },
    phalanges: { type: "bone", z: 3, label: S([125, 0]), d: phalanges.map((p) => spline(SP(p))).join(" ") },
    distalRadialPhysis: { type: "physis", z: 4, label: S([-9, -10]), d: spline(SP(ribbonPts([[-6, -26.6], [-7, -18], [-8.4, -9], [-9.6, 0], [-11.2, 8.4]], 1.1))) },
    tfcc: { type: "cartilage", z: 4, axis: [S([-0.6, 8]), S([2, 24])], label: S([1.6, 16]),
      d: spline(SP([[-0.6, 7.8], [2.6, 8.8], [4.2, 12], [4.4, 17], [3.6, 21.4], [1.6, 23.6], [-1.2, 21.8], [-1, 17], [-0.9, 12.4], [-1, 9.4]])) },
    scapholunateLigament: { type: "ligament", z: 5, from: S([6.6, -9.6]), to: S([6.6, -3.6]), width: 16 },
    lunotriquetralLigament: { type: "ligament", z: 5, from: S([8.4, 5.4]), to: S([8.4, 10.8]), width: 14 },
    carpalTunnel: { type: "space", z: 5.5, hidden: true, label: S([24, 2]),
      d: spline(SP([[10, -15], [22, -16], [36, -13], [38, -2], [37, 10], [24, 11.5], [12, 11], [9, 2]])) },
    guyonsCanal: { type: "space", z: 5.5, hidden: true, label: S([20, 15]),
      d: spline(SP([[6, 11.4], [16, 11], [26, 12.2], [34, 14.6], [34, 19.4], [26, 18.4], [18, 15.6], [8, 15.2]])) },

    /* tendons, sheaths, nerves, vessels */
    flexorTendons: { type: "tendon", z: 6, ghost: true, axis: [S([-44, 0]), S([118, 0])], label: S([60, 2]), d: FLEXORS.map(tendonStrip).join(" ") },
    fcrTendon: { type: "tendon", z: 6, points: SP([[-44, -12.4], [-15, -13.4], [5, -15.4], [20, -17.4], [31, -15.4], [37.6, -12.2]]), width: 8 },
    aplTendon: { type: "tendon", z: 6, points: SP([[-44, -21.6], [-15, -26.8], [3, -30.6], [20, -33], [36.4, -34.4]]), width: 9.5 },
    epbTendon: { type: "tendon", z: 6.2, points: SP([[-44, -18.6], [-15, -29.6], [3, -33.4], [22, -36.6], [44, -41], [66, -52.6], [80.6, -58.4]]), width: 8 },
    ecuTendon: { type: "tendon", z: 6, points: SP([[-44, 21.6], [-20, 24], [-6, 28.4], [8, 28.6], [22, 25.6], [37.4, 22]]), width: 10 },
    firstDorsalCompartment: { type: "fascia", z: 6.6, from: S([-8, -30]), to: S([13, -33.6]), width: 30 },
    ecuSubsheath: { type: "fascia", z: 6.6, from: S([-15, 26.2]), to: S([2, 29]), width: 19 },
    radialArtery: { type: "vessel", kind: "artery", z: 7, points: SP([[-44, -18.6], [-20, -19.6], [-2, -21.6], [7, -27.6], [12, -31]]), width: 7.5 },
    ulnarArtery: { type: "vessel", kind: "artery", z: 7, points: SP([[-44, 11.6], [-15, 11.4], [5, 10.6], [16, 10.2], [26, 11], [36, 12.6], [46, 8.6], [52, 0], [54, -8]]), width: 7.5 },
    medianNerve: { type: "nerve", z: 7.2, points: SP([[-44, -5], [-15, -4.4], [4, -2.6], [14, -2.8], [26, -5], [36, -8.4], [46, -12.6]]), width: 11 },
    ulnarNerve: { type: "nerve", z: 7.2, points: SP([[-44, 15], [-15, 14.8], [4, 14], [14, 13.2], [22, 14.2], [30, 16.6], [40, 21]]), width: 10 },
    flexorRetinaculum: { type: "ligament", z: 8, ghost: true, axis: [S([25, -26]), S([25, 20])], label: S([24, -12]),
      d: spline(SP([[14, -24], [24, -26.4], [36, -24], [37, -8], [36.4, 8], [35, 20.6], [24, 21], [13, 19.6], [12.4, 4], [13, -10]])) },
    thenarMuscles: { type: "muscle", z: 9, ghost: true, axis: [S([24, -20]), S([80, -56])], label: S([52, -38]),
      d: spline(SP([[34, -24], [40, -14], [48, -11], [56, -15], [66, -26], [78, -42], [85, -53], [81, -61], [68, -59], [52, -50], [46, -44], [38, -36], [34, -30]])) },
    hypothenarMuscles: { type: "muscle", z: 9, ghost: true, axis: [S([16, 24]), S([95, 33])], label: S([58, 30]),
      d: spline(SP([[22, 22.6], [30, 19.6], [40, 21], [60, 24.6], [80, 28.6], [96, 31], [98, 36], [88, 38.4], [66, 37], [44, 35], [30, 32.6], [22, 28.6]])) }
  },
  anchors: {
    distalRadiusMetaphysis: S([-19, -8]), radialStyloid: S([9.6, -24]), ulnarStyloid: S([3.2, 25.2]), scaphoidWaist: S([12, -16.6]),
    scaphoidProximalPole: S([4, -11]), scaphoidDistalPole: S([20, -21.4]), anatomicalSnuffbox: S([14, -31.6]), scapholunateInterval: S([4.6, -6.4]),
    hookOfHamate: S([30.4, 12.6]), fifthMetacarpalNeck: S([79.4, 26.6]), firstMetacarpalBase: S([41, -32.4]), carpalTunnelEntrance: S([16, -2]),
    lunate: S([7.4, 1]), foveaUlnar: S([-2.8, 19.6]), dorsalRadiusTilt: S([-5, -11]), firstDorsalCompartmentRegion: S([3, -31.6])
  }
};
