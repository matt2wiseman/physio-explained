/**
 * Scene: patellofemoral-axial — RIGHT knee, AXIAL (skyline / Merchant-type) view of the patellofemoral joint,
 * knee slightly flexed so the patella is engaged in the trochlea.
 *   - Radiological convention, viewed from BELOW (feet): ANTERIOR = screen UP, POSTERIOR = DOWN,
 *     patient's LATERAL (right) side = screen LEFT, MEDIAL = screen RIGHT. Superior/proximal = into the screen.
 *   - Trochlea with a longer, higher lateral facet (sulcus angle ≈ 140°); patella with its larger lateral facet,
 *     median ridge and steeper medial facet; thick patellar cartilage.
 *   - Medial restraints: MPFL from the femur (between adductor tubercle and medial epicondyle) to the
 *     superomedial patellar border, with VMO inserting alongside; laterally the lateral retinaculum and VL.
 *   - z-order follows the viewing direction (from below): the MPFL and retinaculum (at patellar level) are drawn
 *     over the more proximal vasti.
 * Scale ≈ 4 px/mm.
 * Band conventions (from → to): mpfl  femoral attachment → patellar attachment;
 *   lateralRetinaculum  lateral femoral condyle / ITB side → lateral patellar border.
 * Cartilage axes lateral → medial.  Muscle axes origin (proximal side) → patellar insertion.
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
/** Lens-shaped band between a surface polyline and its offset, tapering at both ends (articular cartilage). */
const rim = (c, t, taper = 0.5) => spline([...c, ...offset(c, (i) => t * Math.pow(Math.sin((Math.PI * i) / (c.length - 1)), taper)).slice(1, -1).reverse()]);

/* ---------- bones ---------- */
// Distal femur at trochlear level: trochlea anteriorly (lateral ridge higher), condyles + notch posteriorly.
const FEMUR = [
  [300, 172], [340, 188], [372, 203], [405, 215, 1], [440, 206], [472, 197], [500, 190], [530, 204], [550, 236], [560, 270], [556, 300],
  [550, 345], [534, 394], [504, 416], [470, 406], [450, 376], [424, 344], [398, 342], [374, 370], [346, 404], [310, 413],
  [276, 396], [258, 352], [252, 314], [244, 286], [250, 252], [262, 220], [276, 196]
];
const PATELLA = [
  [306, 163], [311, 141], [326, 126], [362, 118], [405, 115], [446, 117], [476, 124], [492, 141], [497, 167, 1], [489, 181],
  [466, 188], [438, 195], [408, 205, 1], [372, 190], [340, 177], [315, 169, 1]
];
const TROCH_SURF = [[266, 214], [278, 190], [300, 173], [340, 189], [372, 204], [405, 216], [440, 207], [472, 198], [500, 191], [522, 199]];
const PAT_SURF = [[318, 169], [340, 177], [372, 190], [408, 205], [438, 195], [466, 188], [489, 181]];

/* ---------- bands ---------- */
const MPFL = { from: [558, 272], to: [496, 162], bend: 36 };
const LAT_RET = { from: [246, 274], to: [307, 158], bend: -32 };

export default {
  id: "patellofemoral-axial",
  viewBox: [0, 0, 800, 450],
  directions: {
    anterior: [0, -1], posterior: [0, 1], lateral: [-1, 0], medial: [1, 0],
    superior: "in", inferior: "out", proximal: "in", distal: "out"
  },
  backdrop: [
    { d: spline([[400, 66], [520, 82], [612, 132], [660, 220], [662, 330], [640, 470], [160, 470], [138, 330], [140, 220], [188, 132], [280, 82]]), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    jointSpace: {
      type: "space", z: 0, label: [404, 222],
      d: spline([[284, 166], [306, 158], [340, 168], [372, 181], [408, 196], [438, 185], [468, 178], [500, 172], [522, 186], [502, 200], [472, 208], [440, 217], [405, 226], [372, 213], [340, 199], [300, 184], [278, 182]])
    },
    vastusLateralis: {
      type: "muscle", z: 1, label: [228, 168], fibreAngle: 18,
      d: spline([[304, 146], [292, 126], [264, 112], [228, 114], [198, 134], [184, 168], [192, 202], [214, 222], [240, 224], [258, 206], [276, 182], [296, 164]]),
      axis: [[204, 196], [302, 152]]
    },
    vmo: {
      type: "muscle", z: 1, label: [578, 160], fibreAngle: 20,
      d: spline([[497, 150], [516, 128], [548, 116], [584, 122], [610, 146], [618, 180], [608, 212], [586, 228], [562, 222], [544, 196], [522, 176], [503, 166]]),
      axis: [[604, 204], [499, 156]]
    },
    femur: { type: "bone", z: 2, d: spline(FEMUR), label: [402, 290] },
    trochlearCartilage: { type: "cartilage", z: 3, d: rim(TROCH_SURF, 12, 0.4), axis: [[270, 200], [520, 196]], label: [440, 214] },
    patella: { type: "bone", z: 4, d: spline(PATELLA), label: [404, 140] },
    patellarCartilage: { type: "cartilage", z: 5, d: rim(PAT_SURF, -15, 0.45), axis: [[318, 166], [490, 178]], label: [372, 182] },
    lateralRetinaculum: { type: "ligament", z: 6, ...LAT_RET, width: 7 },
    mpfl: { type: "ligament", z: 7, ...MPFL, width: 9 }
  },
  anchors: {
    medialFacet: [454, 186],
    lateralFacet: [356, 178],
    trochlearGroove: [405, 218],
    lateralTrochlearRidge: [300, 175],
    lateralFemoralCondyle: [268, 214],
    mpflFemoralAttachment: MPFL.from,
    mpflPatellarAttachment: MPFL.to,
    dislocatedPosition: [214, 212],
    medialPatellarBorder: [496, 168],
    patellaCentre: [404, 156]
  }
};
