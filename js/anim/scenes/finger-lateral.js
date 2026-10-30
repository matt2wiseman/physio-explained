/**
 * Scene: finger-lateral — RIGHT index/middle finger, LATERAL (radial-side) view, joints in slight resting flexion
 * (atlas convention after Netter "Flexor and extensor tendons in fingers" + "Finger ligaments").
 *   - Metacarpal enters from screen LEFT, fingertip points screen RIGHT (proximal = left, distal = right).
 *   - DORSAL is screen UP, VOLAR (palmar) is screen DOWN; the radial side faces the viewer ("out").
 *   - Extensor apparatus on top: extensor hood (sagittal bands) over the MCP, central slip to the middle-phalanx base,
 *     lateral bands passing dorsal to the PIP axis and joining as the terminal tendon on the distal-phalanx base.
 *   - Flexors below: FDS (volar at the MCP, splits and passes deep to FDP at the chiasm, inserts on the middle phalanx)
 *     and FDP (to the distal-phalanx base) inside the flexor sheath, held by the A1 (MCP), A2 (proximal phalanx) and
 *     A4 (middle phalanx) pulleys. The radial digital nerve runs volar-lateral.
 * Scale ≈ 5.2 px/mm; joints in a relaxed resting cascade (PP 10°, MP 24°, DP 36° from the metacarpal axis).
 * Band conventions (from → to):
 *   centralSlip  over proximal phalanx → dorsal base of middle phalanx (boutonnière: tear/avulse end:"to")
 *   lateralBands  extensor hood → terminal-tendon confluence;  terminalExtensorTendon  confluence → dorsal base of distal
 *     phalanx (mallet: avulse end:"to")
 *   fdpTendon  palm (off-stage left) → volar base of distal phalanx (jersey finger: avulse end:"to")
 *   fdsTendon  palm → middle phalanx;  volarPlate  proximal-phalanx neck (checkreins) → volar base of middle phalanx
 *     (avulse end:"to" = volar-plate avulsion fracture);  collateralLigament  proximal-phalanx head → middle-phalanx base
 *   digitalNerve  palm → fingertip.  Pulleys (closed shapes) axis proximal → distal.
 * fdpRetractedPosition = where the FDP band's mid-point goes when the avulsed tendon retracts into the palm
 *   ({ do:"move", target:"fdpTendon", to:"fdpRetractedPosition" } puts the stump end just proximal to the A1 pulley).
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
/** Point at `along` px down the segment axis (angle th°, + = flexed toward volar) and `perp` px dorsal (+) / volar (−). */
const SC = 1.25;   // authoring units → px
const P = (J, th, along, perp) => { const a = (th * Math.PI) / 180; along *= SC; perp *= SC; return [r(J[0] + Math.cos(a) * along + Math.sin(a) * perp), r(J[1] + Math.sin(a) * along - Math.cos(a) * perp)]; };
/** Phalanx / metacarpal outline from base point a to head end b (half-heights: base, shaft, head). */
function longBone(a, b, wb, ws, wh, tuft = false) {
  const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy), u = [dx / L, dy / L], n = [-u[1], u[0]];
  const Q = (t, w) => [a[0] + u[0] * t * L + n[0] * w, a[1] + u[1] * t * L + n[1] * w];
  const prof = tuft
    ? [[0.03, wb * 0.95], [0.14, wb], [0.34, ws], [0.62, ws * 0.95], [0.84, wh], [0.95, wh * 0.85]]
    : [[0.02, wb * 0.92], [0.1, wb], [0.26, wb * 0.78], [0.42, ws], [0.66, ws], [0.8, wh * 0.86], [0.9, wh], [0.97, wh * 0.74]];
  return [Q(0, 0), ...prof.map(([t, w]) => Q(t, w)), Q(1, 0), ...prof.slice().reverse().map(([t, w]) => Q(t, -w))];
}
/** Closed rounded box along a segment between `along` a0..a1 and dorsal offsets p0..p1 (pulleys, plates). */
const box = (J, th, a0, a1, p0, p1) => spline([P(J, th, a0, p0), P(J, th, (a0 + a1) / 2, p0), P(J, th, a1, p0), P(J, th, a1, (p0 + p1) / 2), P(J, th, a1, p1), P(J, th, (a0 + a1) / 2, p1), P(J, th, a0, p1), P(J, th, a0, (p0 + p1) / 2)]);

/* ---------- joint chain ---------- */
const J1 = [226, 182], T1 = 10, T2 = 24, T3 = 36;          // MCP centre; flexion of PP, MP, DP segments (deg)
const J2 = P(J1, T1, 186, 0), J3 = P(J2, T2, 112, 0), TIP = P(J3, T3, 78, 0);
const BONES = {
  metacarpal: longBone(P(J1, 0, -200, 0), P(J1, 0, 27, 0), 20 * SC, 16.5 * SC, 27 * SC),
  proximalPhalanx: longBone(P(J1, T1, 30, 0), P(J2, T1, 18, 0), 22 * SC, 15 * SC, 17.5 * SC),
  middlePhalanx: longBone(P(J2, T2, 20, 0), P(J3, T2, 15, 0), 19 * SC, 12.5 * SC, 14 * SC),
  distalPhalanx: longBone(P(J3, T3, 16, 0), TIP, 15 * SC, 8 * SC, 11 * SC, true)
};
const FDP = [P(J1, 0, -330, -40), P(J1, 0, -136, -40), P(J1, 0, 0, -40), P(J1, T1, 90, -27), P(J2, T1, 0, -27), P(J2, T2, 55, -21), P(J3, T2, 0, -20), P(J3, T3, 17, -14)];
// arc-length midpoint of the FDP centreline (the renderer's move{to} reference for a band)
const FDP_MID = (() => {
  const L = [0]; for (let i = 1; i < FDP.length; i++) L.push(L[i - 1] + Math.hypot(FDP[i][0] - FDP[i - 1][0], FDP[i][1] - FDP[i - 1][1]));
  const h = L[L.length - 1] / 2; let i = 1; while (L[i] < h) i++;
  const t = (h - L[i - 1]) / (L[i] - L[i - 1]); return [FDP[i - 1][0] + (FDP[i][0] - FDP[i - 1][0]) * t, FDP[i - 1][1] + (FDP[i][1] - FDP[i - 1][1]) * t];
})();
const FDP_END = FDP[FDP.length - 1], RETRACT_TO = P(J1, 0, -54, -40);
const SKIN = [
  [...P(J1, 0, -240, 32), 1], P(J1, 0, -116, 32), P(J1, 0, 0, 34), P(J1, T1, 90, 28), P(J2, T1, 0, 25), P(J2, T2, 60, 21), P(J3, T2, 0, 19), P(J3, T3, 40, 15), P(TIP, T3, 6, 4),
  P(TIP, T3, 4, -14), P(J3, T3, 46, -32), P(J3, T2, 0, -36), P(J2, T2, 50, -40), P(J2, T1, 0, -48), P(J1, T1, 90, -60), P(J1, 0, 0, -72), P(J1, 0, -116, -74), [...P(J1, 0, -240, -76), 1]
];

const scene = {
  id: "finger-lateral",
  viewBox: [0, 0, 800, 450],
  directions: { proximal: [-1, 0], distal: [1, 0], posterior: [0, -1], anterior: [0, 1], superior: [-1, 0], inferior: [1, 0], dorsal: [0, -1], volar: [0, 1], palmar: [0, 1], lateral: "out", medial: "in" },
  backdrop: [{ d: spline(SKIN), fill: "skin", opacity: 0.35 }],
  structures: {
    flexorSheath: { type: "fascia", z: 1, axis: [P(J1, 0, -60, -40), P(J3, T3, 12, -18)], label: P(J2, T2, 70, -27),
      d: spline([P(J1, 0, -62, -24), P(J1, 0, 0, -27), P(J1, T1, 60, -16), P(J2, T1, 0, -15), P(J2, T2, 60, -12), P(J3, T2, 0, -11), P(J3, T3, 14, -10),
        P(J3, T3, 14, -24), P(J3, T2, 0, -28), P(J2, T2, 60, -30), P(J2, T1, 0, -34), P(J1, T1, 60, -48), P(J1, 0, 0, -61), P(J1, 0, -62, -60)]) },
    metacarpal: { type: "bone", z: 2, label: P(J1, 0, -110, 0), d: spline(BONES.metacarpal) },
    proximalPhalanx: { type: "bone", z: 2, label: P(J1, T1, 100, 0), d: spline(BONES.proximalPhalanx) },
    middlePhalanx: { type: "bone", z: 2, label: P(J2, T2, 60, 0), d: spline(BONES.middlePhalanx) },
    distalPhalanx: { type: "bone", z: 2, label: P(J3, T3, 40, 0), d: spline(BONES.distalPhalanx) },
    fdsTendon: { type: "tendon", z: 3, points: [P(J1, 0, -330, -57), P(J1, 0, -136, -57), P(J1, 0, 0, -52), P(J1, T1, 60, -38), P(J1, T1, 140, -19), P(J2, T1, 0, -16), P(J2, T2, 42, -13)], width: 9 },
    fdpTendon: { type: "tendon", z: 3.2, points: FDP, width: 10 },
    volarPlate: { type: "ligament", z: 4, from: P(J2, T1, -26, -16), to: P(J2, T2, 19, -18), width: 8, bend: 3 },
    collateralLigament: { type: "ligament", z: 4.2, from: P(J2, T1, -8, 7), to: P(J2, T2, 18, -11), width: 13 },
    a1Pulley: { type: "ligament", z: 5, axis: [P(J1, 0, -12, -42), P(J1, 0, 16, -42)], label: P(J1, 0, 2, -50), d: box(J1, 2, -12, 16, -25, -58) },
    a2Pulley: { type: "ligament", z: 5, axis: [P(J1, T1, 34, -32), P(J1, T1, 100, -32)], label: P(J1, T1, 67, -42), d: box(J1, T1, 34, 100, -15, -45) },
    a4Pulley: { type: "ligament", z: 5, axis: [P(J2, T2, 36, -20), P(J2, T2, 70, -20)], label: P(J2, T2, 53, -24), d: box(J2, T2, 36, 70, -11, -28) },
    digitalNerve: { type: "nerve", z: 6, points: [P(J1, 0, -330, -66), P(J1, 0, -136, -66), P(J1, 0, 0, -64), P(J1, T1, 90, -54), P(J2, T1, 0, -43), P(J2, T2, 55, -36), P(J3, T2, 0, -31), P(J3, T3, 40, -22), P(TIP, T3, -4, -10)], width: 5 },
    _extensorTendon: { type: "tendon", z: 6, decorative: true, points: [P(J1, 0, -330, 26), P(J1, 0, -136, 27), P(J1, 0, -16, 31)], width: 10 },
    extensorHood: { type: "fascia", z: 6.4, axis: [P(J1, 0, -30, 20), P(J1, T1, 110, 14)], label: P(J1, T1, 30, 14),
      d: spline([P(J1, 0, -34, 31), P(J1, 0, 0, 33), P(J1, T1, 40, 26), P(J1, T1, 104, 21), P(J1, T1, 112, 8), P(J1, T1, 70, 0), P(J1, T1, 22, -6), P(J1, 0, 2, -14), P(J1, 0, -20, -6), P(J1, 0, -36, 14)]) },
    centralSlip: { type: "tendon", z: 7, points: [P(J1, T1, 96, 19), P(J1, T1, 150, 18), P(J2, T1, -4, 19), P(J2, T2, 22, 18)], width: 10 },
    lateralBands: { type: "tendon", z: 7.2, points: [P(J1, T1, 108, 9), P(J1, T1, 160, 9), P(J2, (T1 + T2) / 2, 0, 12), P(J2, T2, 60, 11), P(J3, T2, -26, 13)], width: 8 },
    terminalExtensorTendon: { type: "tendon", z: 7.4, points: [P(J3, T2, -28, 14), P(J3, T2, 0, 15), P(J3, T3, 15, 14)], width: 9 }
  },
  anchors: {
    dipJoint: J3, pipJoint: J2, mcpJoint: J1,
    distalPhalanxBaseDorsal: P(J3, T3, 17, 13), distalPhalanxBaseVolar: P(J3, T3, 17, -13),
    middlePhalanxBaseDorsal: P(J2, T2, 22, 17), middlePhalanxBaseVolar: P(J2, T2, 22, -17),
    a2PulleyRegion: P(J1, T1, 67, -30), a1PulleyRegion: P(J1, 0, 2, -42), proximalPhalanxShaft: P(J1, T1, 100, 0),
    fdpRetractedPosition: [r(FDP_MID[0] + RETRACT_TO[0] - FDP_END[0]), r(FDP_MID[1] + RETRACT_TO[1] - FDP_END[1])]
  }
};
for (const st of Object.values(scene.structures)) if (st.width) st.width = r(st.width * SC);

export default scene;
