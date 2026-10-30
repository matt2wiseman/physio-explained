/**
 * Scene: ankle-anterior — RIGHT ankle MORTISE, ANTERIOR (coronal) view through the talar body, as on a mortise radiograph /
 * coronal atlas section, with the leg "broken" (shaft omitted) so the PROXIMAL fibula is shown at the same scale above
 * the break (Maisonneuve: syndesmotic disruption propagating up the interosseous membrane to a proximal fibular fracture).
 *   - Viewer in front of the patient: patient's LATERAL side (fibula, lateral malleolus) = screen LEFT, MEDIAL (medial
 *     malleolus) = screen RIGHT. Superior/proximal = up. Anterior = toward the viewer ("out"), posterior = away ("in").
 *   - Distal segment: distal tibia (plafond + medial malleolus), distal fibula (lateral malleolus, ≈1 cm longer than the
 *     medial), talus (dome, medial & lateral facets, lateral process), calcaneus with the sustentaculum tali medially.
 *     Upper segment (above the break): proximal tibial metaphysis with the fibular head and neck behind its lateral condyle.
 *   - Layering: interosseous membrane (behind the bones, seen between them), calcaneus, talus, fibula, tibia, cartilage,
 *     joint cavity & tibiofibular clear space (translucent, above bone), then the interosseous ligament, AITFL, deltoid
 *     and lateral ligaments.
 * Geometry is authored in millimetres (x = medial offset from the centre of the talar dome, y = up from the floor) and
 * mapped at 2.7 px/mm; the upper segment uses the same x scale with its own vertical placement (px).
 * Band conventions (from → to):
 *   aitfl                 tibia (anterolateral / Chaput tubercle) → fibula (anterior tubercle)
 *   interosseousLigament  tibia (incisura) → fibula, fibres running down and laterally
 *   interosseousMembrane  proximal (below the proximal tibiofibular joint) → distal (continuous with the interosseous ligament)
 *   deltoidLigament       medial malleolus → talus/sustentaculum (avulse end:"from" = medial malleolar avulsion)
 *   lateralLigaments      lateral malleolus tip → talus/calcaneus (ATFL + CFL as one complex in this view)
 * Cartilage axes: talarDomeCartilage and plafondCartilage run LATERAL (0) → MEDIAL (1)
 *   (anterolateral dome lesion ≈ 0.15; posteromedial dome lesion ≈ 0.85).
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const S = 2.7, X0 = 400, Y0 = 473;
const r = (n) => Math.round(n * 10) / 10;
/** mm (x medial, y up) → stage px. A third element (1) marks a sharp corner. */
const m = (p) => (p[2] ? [r(X0 + p[0] * S), r(Y0 - p[1] * S), 1] : [r(X0 + p[0] * S), r(Y0 - p[1] * S)]);
const M = (pts) => pts.map(m);
/** upper (proximal) segment: x in mm, y already in stage px. */
const u = (p) => (p[2] ? [r(X0 + p[0] * S), p[1], 1] : [r(X0 + p[0] * S), p[1]]);
const U = (pts) => pts.map(u);
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
/** Lens-shaped layer between a surface polyline (px) and its offset, tapering at both ends (articular cartilage). */
const rim = (c, t, taper = 0.35) => spline([...c, ...offset(c, (i) => t * Math.pow(Math.sin((Math.PI * i) / (c.length - 1)), taper)).slice(1, -1).reverse()]);

/* ---------- distal segment (mm) ---------- */
const TIBIA_DISTAL = M([[-14.6, 128, 1], [-7, 129.6], [0, 127.8], [7, 129.4], [14.4, 128, 1], [18, 118], [24.6, 106], [28, 93], [29, 80], [27.4, 72], [21.6, 69.6],
  [17.8, 72.6], [16.4, 76], [15.2, 84], [13.6, 88.4, 1], [10, 89.8], [0, 90.2], [-10, 89.8], [-17, 88.6, 1], [-20, 93], [-19.4, 100], [-17.6, 110], [-16, 120]]);
const FIBULA_DISTAL = M([[-22.6, 128, 1], [-27.6, 129.2], [-33, 128, 1], [-34, 115], [-36, 100], [-38.6, 88], [-39, 73], [-37, 63.6], [-32, 59.4], [-26.6, 61.2],
  [-22.6, 66], [-21.4, 76], [-21.6, 84], [-23, 91], [-24, 100], [-23.6, 112]]);
const TALUS = M([[-16.4, 84.4], [-10, 87.6], [0, 88.6], [10, 87.6], [13.6, 85.4], [14.6, 81], [15, 74], [13.6, 68], [11, 62.4], [4, 59.4], [-8, 58.2], [-16.6, 59.6],
  [-22, 60.4], [-21, 64.4], [-19, 73], [-17.6, 81]]);
const CALCANEUS = M([[-18, 57.6], [-8, 56.8], [4, 56.4], [10, 56.8], [17, 56.2], [21, 53.4], [20, 49], [12, 46.6], [8, 40], [6, 28], [4, 17.4], [-4, 12.8],
  [-16, 13.6], [-24, 18.4], [-27, 30], [-27.2, 44], [-24.6, 53.6]]);
/* ---------- upper (proximal) segment: x mm, y px ---------- */
const TIBIA_PROXIMAL = U([[-38, -8], [-39, 8], [-36, 22], [-31, 45], [-26.4, 70], [-24.4, 95], [-23.6, 116, 1], [-12, 118], [0, 114.6], [12, 118.4], [24.6, 116, 1],
  [25.4, 95], [28, 70], [34, 45], [39, 22], [40.4, 8], [40.6, -8]]);
const FIBULA_PROXIMAL = U([[-31, 22], [-34, 14.6], [-40, 11.4], [-47, 14.6], [-52.6, 26], [-54, 40], [-51.6, 54], [-46.6, 65], [-44.8, 80], [-44.4, 100], [-44.2, 116, 1],
  [-40, 117.6], [-36.4, 116, 1], [-36.6, 100], [-37, 80], [-36, 64], [-32.4, 52], [-29.6, 38], [-29, 28]]);

/* ---------- articular surfaces (mm) ---------- */
const DOME = M([[-19, 73], [-17.6, 81], [-16.4, 84.4], [-10, 87.6], [0, 88.6], [10, 87.6], [13.6, 85.4], [14.6, 81], [15, 74]]);
const PLAFOND = M([[-17, 88.6], [-10, 89.8], [0, 90.2], [10, 89.8], [13.6, 88.4], [15.2, 84], [16.4, 76], [17.6, 72.6]]);

export default {
  id: "ankle-anterior",
  viewBox: [0, 0, 800, 450],
  directions: {
    medial: [1, 0], lateral: [-1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1],
    anterior: "out", posterior: "in"
  },
  backdrop: [
    { d: spline(U([[-62, -10], [-63, 40], [-60, 80], [-56, 117], [48, 117], [50, 80], [52, 40], [53, -10]])), fill: "skin", opacity: 0.32 },
    { d: spline(M([[-42, 129.6], [-43.4, 100], [-46, 76], [-44, 52], [-38, 26], [-32, 10], [-18, 4], [8, 4], [20, 12], [30, 32], [34.6, 56], [36, 80], [34, 104], [31, 129.6]])), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    interosseousMembrane: {
      type: "ligament", z: 0, width: 13, label: u([-30, 104]),
      points: [u([-30.4, 60]), u([-30.2, 92]), u([-28.6, 122]), m([-22.4, 126]), m([-21, 113]), m([-21.4, 104])]
    },
    calcaneus: { type: "bone", z: 1, d: spline(CALCANEUS), label: m([-12, 34]) },
    talus: { type: "bone", z: 2, d: spline(TALUS), label: m([-2, 72]) },
    fibula: { type: "bone", z: 3, d: [spline(FIBULA_DISTAL), spline(FIBULA_PROXIMAL)].join(" "), label: m([-30, 108]) },
    tibia: { type: "bone", z: 4, d: [spline(TIBIA_DISTAL), spline(TIBIA_PROXIMAL)].join(" "), label: m([2, 110]) },
    talarDomeCartilage: { type: "cartilage", z: 5, d: rim(DOME, 4.2), axis: [m([-18, 80]), m([14.8, 80])], label: m([-4, 87.2]) },
    plafondCartilage: { type: "cartilage", z: 6, d: rim(PLAFOND, -3.6), axis: [m([-17, 90]), m([17, 74])], label: m([4, 90.6]) },
    jointSpace: {
      type: "space", z: 7, label: m([-19.8, 88]),
      d: spline(M([[-20.4, 90.4], [-17, 88.6, 1], [-10, 89.8], [0, 90.2], [10, 89.8], [13.6, 88.4], [15.2, 84], [16.4, 76], [17.8, 72.6, 1], [14.4, 71.6],
        [14.8, 76], [14.4, 82], [13.4, 85.4], [10, 87.4], [0, 88.4], [-10, 87.4], [-16.4, 84.2], [-17.6, 80], [-19, 72], [-21, 64.4, 1], [-22.4, 68],
        [-21.4, 78], [-21.6, 86]]))
    },
    tibiofibularClearSpace: {
      type: "space", z: 7, label: m([-21.4, 106]),
      d: spline(M([[-17.6, 89.4, 1], [-20, 93], [-19.4, 100], [-18, 108], [-17.4, 113, 1], [-23.6, 113, 1], [-24, 100], [-23, 91], [-21.8, 87, 1]]))
    },
    interosseousLigament: { type: "ligament", z: 8, from: m([-18.4, 110.6]), to: m([-24.4, 101.4]), width: 6.4 * S, label: m([-21.4, 106]) },
    aitfl: { type: "ligament", z: 9, from: m([-15, 97.4]), to: m([-28.6, 86]), width: 6.4 * S, bend: -1, label: m([-22, 91.6]) },
    deltoidLigament: { type: "ligament", z: 9, from: m([20.8, 72.6]), to: m([14.4, 55.8]), width: 8 * S, bend: -2, label: m([17.6, 63]) },
    lateralLigaments: { type: "ligament", z: 9, from: m([-30.4, 61.6]), to: m([-25, 41.6]), width: 6.4 * S, bend: 2, label: m([-27.6, 50]) }
  },
  anchors: {
    medialMalleolus: m([23, 78]),
    lateralMalleolus: m([-30.4, 74]),
    medialClearSpace: m([15.6, 78]),
    syndesmosisLevel: m([-21.6, 99]),
    talarDomeMedial: m([11.6, 86.4]),
    talarDomeLateral: m([-13.4, 86]),
    proximalFibula: u([-40.6, 92]),
    plafond: m([0, 90.4])
  }
};
