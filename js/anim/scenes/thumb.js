/**
 * Scene: thumb — RIGHT thumb ray, DORSAL (slightly dorsoradial) view of the MCP and CMC joints
 * (atlas convention after Netter "Thumb: ligaments" + Stener-lesion diagrams).
 *   - Thumb points UP (distal = up, proximal/wrist = down). Dorsum faces the viewer ("out"), volar = "in".
 *   - RADIAL side is screen LEFT (RCL, APL, EPB), ULNAR side is screen RIGHT (UCL, adductor aponeurosis, first web space).
 *   - The adductor aponeurosis is ghosted over the UCL; Stener position lies just proximal to its proximal edge.
 *   - Volar structures: the MCP volar plate is drawn beneath the bones (its sesamoid margins peek out at the joint);
 *     the anterior oblique ("beak") ligament is drawn seen-through at the volar-ulnar corner of the CMC joint.
 * Scale ≈ 3.2 px/mm.
 * Band conventions (from → to):
 *   uclThumb / rclThumb  metacarpal head (from) → proximal-phalanx base (to; skier's thumb usually avulse end:"to")
 *   volarPlateThumb  metacarpal neck → proximal-phalanx base;  anteriorObliqueLigament  trapezium → volar-ulnar 1st MC base
 *   aplTendon  forearm → 1st MC base;  epbTendon  forearm → proximal-phalanx base;  eplTendon  forearm (Lister's tubercle) → distal phalanx
 * stenerPosition = where the UCL band's mid-point goes when the torn ligament flips proximally, superficial to the
 *   aponeurosis: { do:"move", target:"uclThumb", to:"stenerPosition" }.
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
/** Long bone outline from base point a to head end b (half-widths: base, shaft, head). */
function longBone(a, b, wb, ws, wh, tuft = false) {
  const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy), u = [dx / L, dy / L], n = [-u[1], u[0]];
  const Q = (t, w) => [a[0] + u[0] * t * L + n[0] * w, a[1] + u[1] * t * L + n[1] * w];
  const prof = tuft
    ? [[0.03, wb * 0.95], [0.14, wb], [0.34, ws], [0.62, ws * 0.95], [0.84, wh], [0.95, wh * 0.85]]
    : [[0.02, wb * 0.92], [0.1, wb], [0.26, wb * 0.78], [0.42, ws], [0.66, ws], [0.8, wh * 0.86], [0.9, wh], [0.97, wh * 0.74]];
  return [Q(0, 0), ...prof.map(([t, w]) => Q(t, w)), Q(1, 0), ...prof.slice().reverse().map(([t, w]) => Q(t, -w))];
}
const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];

const UCL = { from: [424, 249], to: [425, 211] };
const STENER_SHIFT = [9, 39];

export default {
  id: "thumb",
  viewBox: [0, 0, 800, 450],
  directions: { distal: [0, -1], proximal: [0, 1], superior: [0, 1], inferior: [0, -1], lateral: [-1, 0], medial: [1, 0], radial: [-1, 0], ulnar: [1, 0], posterior: "out", anterior: "in", dorsal: "out", volar: "in" },
  backdrop: [
    { d: spline([[318, 470, 1], [334, 400], [346, 320], [352, 240], [356, 160], [360, 90], [372, 46], [400, 30], [428, 46], [440, 90], [446, 160], [462, 200], [530, 214], [640, 230], [700, 260], [720, 330], [700, 470, 1]]), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    _adductorPollicis: { type: "muscle", z: 0.5, decorative: true, axis: [[600, 320], [436, 236]],
      d: spline([[440, 236], [490, 230], [556, 244], [596, 276], [588, 318], [546, 328], [490, 292], [446, 258]]) },
    volarPlateThumb: { type: "ligament", z: 1, from: [400, 252], to: [400, 216], width: 60 },
    trapezium: { type: "bone", z: 2, label: [398, 414], d: spline([[370, 393], [397, 389], [424, 393], [436, 408], [431, 428], [408, 441], [380, 439], [363, 423], [363, 405]]) },
    metacarpal1: { type: "bone", z: 2, label: [400, 310], d: spline(longBone([400, 386], [400, 224], 24, 15, 26)) },
    proximalPhalanx1: { type: "bone", z: 2, label: [400, 176], d: spline(longBone([400, 220], [400, 128], 25, 15, 20)) },
    distalPhalanx1: { type: "bone", z: 2, label: [400, 86], d: spline(longBone([400, 122], [400, 50], 19, 11, 15, true)) },
    cmcCapsule: { type: "capsule", z: 3, label: [372, 388], fillRule: "evenodd",
      d: spline([[366, 370], [400, 366], [434, 370], [440, 388], [434, 404], [400, 408], [366, 404], [360, 388]]) + " " + spline([[374, 376], [400, 373], [426, 376], [430, 388], [426, 398], [400, 400], [374, 398], [370, 388]]) },
    anteriorObliqueLigament: { type: "ligament", z: 3.2, from: [424, 412], to: [426, 378], width: 11, bend: -3 },
    rclThumb: { type: "ligament", z: 4, from: [376, 249], to: [375, 211], width: 12 },
    uclThumb: { type: "ligament", z: 4, ...UCL, width: 12 },
    aplTendon: { type: "tendon", z: 5, points: [[322, 470], [344, 430], [366, 398], [377, 380]], width: 11 },
    epbTendon: { type: "tendon", z: 5.2, points: [[340, 470], [366, 410], [386, 344], [393, 280], [395, 236], [397, 222]], width: 9 },
    eplTendon: { type: "tendon", z: 5.4, points: [[490, 470], [450, 404], [418, 344], [407, 280], [405, 226], [402, 170], [401, 128], [400, 118]], width: 9 },
    adductorAponeurosis: { type: "fascia", z: 6, ghost: true, axis: [[466, 226], [406, 226]], label: [452, 226],
      d: spline([[404, 200], [430, 193], [456, 197], [471, 211], [469, 240], [452, 256], [428, 261], [408, 256]]) }
  },
  anchors: {
    mcpJointUlnar: [426, 232], proximalPhalanxBaseUlnar: [425, 214], metacarpalHeadUlnar: [424, 246], cmcJoint: [400, 388],
    firstMetacarpalBaseVolarUlnar: [418, 381], stenerPosition: (() => { const m = mid(UCL.from, UCL.to); return [r(m[0] + STENER_SHIFT[0]), r(m[1] + STENER_SHIFT[1])]; })()
  }
};
