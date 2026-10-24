/**
 * Scene: hip-posterior — RIGHT buttock, POSTERIOR view of the deep gluteal space (gluteus maximus ghosted).
 *   - Viewer behind the patient: patient's LATERAL side (greater trochanter) = screen RIGHT, MEDIAL (sacrum,
 *     midline x ≈ 225) = screen LEFT. Superior = up. Posterior = toward the viewer ("out"), anterior = "in".
 *   - From superior to inferior in the deep gluteal space: piriformis (through the greater sciatic foramen to the
 *     tip of the trochanter), sciatic nerve emerging at its inferior border, superior gemellus / obturator internus
 *     tendon / inferior gemellus, quadratus femoris spanning the ischiofemoral space, hamstring origin on the
 *     ischial tuberosity. Sacrotuberous and sacrospinous ligaments, posterior SIJ ligaments over the SI joint.
 *   - The femoral head lies behind the posterior acetabular wall; the neck, trochanters and shaft are visible.
 * Scale ≈ 2.1 px/mm.
 * Band conventions: sacrotuberousLigament  sacrum/PSIS → ischial tuberosity; sacrospinousLigament  sacrum/coccyx →
 *   ischial spine; posteriorSIJLigaments  ilium (PSIS) → sacral crest; sacroiliacJoint  superior → inferior along the
 *   joint line; proximalHamstringTendon  ischial footprint → MTJ (avulse end:"from" = proximal avulsion);
 *   sciaticNerve  greater sciatic foramen → thigh.  Muscle axes origin (medial) → insertion (femur).
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
/** Ellipse wound counter-clockwise on screen (used for holes in a clockwise outline). */
const hole = (cx, cy, rx, ry, n = 10) => spline(Array.from({ length: n }, (_, i) => { const a = (-i / n) * Math.PI * 2; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; }));

const MID = 225; // sacral midline
const FORAMINA = [[92, 40, 7, 6], [136, 37, 6.5, 5.5], [178, 33, 5.5, 5], [216, 28, 4.5, 4]];
const PIRIFORMIS = [[308, 200], [340, 205], [384, 214], [430, 224], [480, 232], [527, 236]];
const OI = [[338, 287], [380, 284], [430, 280], [470, 276], [505, 271]];

export default {
  id: "hip-posterior",
  viewBox: [0, 0, 800, 450],
  directions: {
    medial: [-1, 0], lateral: [1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1],
    posterior: "out", anterior: "in"
  },
  backdrop: [
    { d: spline([[150, -20], [600, -20], [612, 100], [600, 200], [604, 300], [590, 400], [580, 470], [380, 470], [300, 420], [228, 390], [150, 400]]), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    pelvis: {
      type: "bone", z: 0, label: [450, 90],
      d: spline([[316, 62], [330, 40], [380, 24], [440, 20], [500, 30], [546, 54], [566, 90], [560, 130], [536, 168], [504, 196], [470, 212], [462, 240],
        [452, 272], [430, 292], [404, 304], [389, 318], [386, 344], [378, 366], [360, 375], [336, 378], [306, 386], [284, 380], [286, 364],
        [316, 360], [336, 346], [340, 318], [346, 296], [340, 280], [330, 268, 1], [346, 254], [360, 236], [366, 216], [354, 196], [336, 182],
        [320, 174], [318, 140], [316, 100]])
    },
    sacrum: {
      type: "bone", z: 0, label: [MID, 250], fillRule: "evenodd",
      d: [spline([[150, 52], [MID, 40], [300, 50], [316, 62], [316, 100], [318, 140], [320, 174], [310, 210], [296, 250], [280, 288], [262, 318],
        [248, 340], [238, 364], [MID, 370], [212, 364], [202, 340], [188, 318], [170, 288], [154, 250], [140, 210], [132, 174], [134, 140], [134, 100], [138, 62]]),
        ...FORAMINA.flatMap(([y, dx, rx, ry]) => [hole(MID - dx, y, rx, ry), hole(MID + dx, y, rx, ry)])].join(" ")
    },
    femur: {
      type: "bone", z: 1, label: [492, 420],
      d: spline([[414, 195], [446, 205], [462, 228], [471, 261], [492, 282], [503, 266], [514, 246], [532, 234], [552, 240], [563, 258], [564, 290],
        [552, 320], [532, 342], [518, 400], [503, 470], [439, 470], [449, 400], [452, 378], [440, 364, 1], [440, 346], [443, 327], [423, 304],
        [396, 292], [370, 270], [364, 245], [372, 215], [390, 200]])
    },
    sacroiliacJoint: { type: "capsule", z: 2, points: [[316, 60], [314, 100], [316, 140], [319, 178]], width: 6, label: [306, 120] },
    posteriorSIJLigaments: { type: "ligament", z: 3, from: [334, 96], to: [282, 150], width: 18, bend: 4 },
    sacrospinousLigament: { type: "ligament", z: 3, from: [284, 272], to: [334, 266], width: 15 },
    gemelli: {
      type: "muscle", z: 4, label: [450, 300], fibreAngle: 0,
      d: spline([[338, 262], [380, 264], [430, 264], [480, 264], [506, 266], [506, 280], [480, 288], [430, 296], [380, 304], [346, 310], [336, 290]]),
      axis: [[340, 286], [506, 273]]
    },
    quadratusFemoris: {
      type: "muscle", z: 4, label: [440, 340], fibreAngle: 0,
      d: spline([[382, 318], [430, 320], [490, 312], [500, 330], [494, 352], [430, 356], [386, 352], [378, 334]]),
      axis: [[382, 336], [497, 332]]
    },
    obturatorInternus: { type: "muscle", z: 5, d: ribbon(OI, [8, 7, 6, 5, 3.5]), axis: [OI[0], OI[OI.length - 1]], fibreAngle: 0, label: [420, 281] },
    sciaticNerve: { type: "nerve", z: 6, points: [[338, 214], [356, 240], [378, 268], [396, 300], [406, 340], [412, 390], [416, 450]], width: 17, label: [412, 400] },
    piriformis: { type: "muscle", z: 7, d: ribbon(PIRIFORMIS, [24, 24, 20, 14, 8, 3.5]), axis: [PIRIFORMIS[0], PIRIFORMIS[PIRIFORMIS.length - 1]], fibreAngle: 0, label: [400, 214] },
    sacrotuberousLigament: { type: "ligament", z: 8, from: [298, 128], to: [347, 332], width: 24, bend: -4 },
    proximalHamstringTendon: { type: "tendon", z: 8, from: [360, 338], to: [368, 430], width: 16 },
    gluteusMaximus: {
      type: "muscle", z: 9, ghost: true, label: [520, 160], fibreAngle: 0,
      d: spline([[330, 34], [420, 80], [500, 140], [566, 210], [578, 300], [566, 400], [520, 452], [440, 450], [360, 410], [280, 360], [244, 330], [250, 250], [262, 160], [290, 70]]),
      axis: [[280, 160], [566, 330]]
    }
  },
  anchors: {
    ischialTuberosity: [360, 346],
    greaterTrochanter: [548, 270],
    greaterSciaticNotch: [362, 218],
    piriformisSciaticCrossing: [352, 232],
    ischiofemoralSpace: [414, 354],
    psis: [324, 82],
    sijLine: [316, 130]
  }
};
