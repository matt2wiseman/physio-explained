/**
 * Scene: shoulder-girdle — RIGHT shoulder girdle, ANTERIOR view: clavicle with the AC and SC joints
 * (atlas convention after Netter "Shoulder: anterior view" + "Sternoclavicular joint").
 *   - Viewer faces the patient: LATERAL (acromion, humeral head) is screen LEFT; MEDIAL (manubrium, midline) is
 *     screen RIGHT. Superior = up. Anterior = toward the viewer ("out"), posterior = "in".
 *   - Coracoclavicular ligaments: conoid (medial, vertical cone to the conoid tubercle) and trapezoid
 *     (lateral, oblique) run from the coracoid up to the clavicle undersurface.
 *   - The subclavian vessels and brachial plexus pass BEHIND the clavicle (drawn beneath it) over the 1st rib and under
 *     the coracoid into the axilla; upper trapezius is posterior (behind the clavicle); deltoid is ghosted.
 * Scale ≈ 2.4 px/mm (clavicle ≈ 150 mm).
 * Band conventions (from → to):
 *   acLigament  acromion → clavicle;  conoidLigament / trapezoidLigament  coracoid (from) → clavicle (to; avulse end:"to")
 *   scjLigaments  clavicle (medial end) → manubrium;  costoclavicularLigament  1st rib → clavicle
 *   subclavianVessels, brachialPlexus  proximal (root of neck / behind the SC joint) → distal (axilla)
 * Muscle axes: origin → insertion.
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
function normalAt(c, i) {
  const a = c[Math.max(0, i - 1)], b = c[Math.min(c.length - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
  return [-dy / l, dx / l];
}
const offset = (c, d) => c.map((p, i) => { const n = normalAt(c, i), di = typeof d === "function" ? d(i) : d; return [p[0] + n[0] * di, p[1] + n[1] * di]; });
const ribbon = (c, w) => spline([...offset(c, w), ...offset(c, (i) => -(typeof w === "function" ? w(i) : w)).reverse()]);
const arc = (cx, cy, rad, a0, a1, n) => Array.from({ length: n + 1 }, (_, i) => { const a = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + rad * Math.cos(a), cy - rad * Math.sin(a)]; });

const CLAVICLE = [
  [220, 146, 1], [260, 147], [300, 151], [340, 154], [380, 158], [430, 162], [480, 168], [530, 175], [566, 181], [584, 186], [592, 196], [594, 212],
  [590, 228], [574, 233], [552, 227], [520, 214], [480, 202], [440, 194], [400, 190], [356, 188], [318, 186], [303, 190], [290, 184], [262, 179], [220, 176, 1]
];
const ACROMION = [[214, 148, 1], [196, 146], [172, 148], [150, 154], [138, 162], [135, 172], [144, 179], [170, 180], [194, 178], [214, 176, 1]];
const SCAPULA = [
  [254, 216], [262, 207], [282, 202], [302, 203], [313, 212], [318, 224], [360, 220], [410, 212], [442, 206], [452, 230], [452, 290], [444, 360], [432, 460, 1],
  [330, 460, 1], [300, 380], [282, 330], [272, 304], [262, 292], [258, 262], [260, 236], [266, 222]
];
const HUMERUS = [...arc(200, 254, 52, 130, -50, 12), [228, 318], [225, 340], [224, 400], [224, 460, 1], [178, 460, 1], [178, 400], [177, 340], [172, 318], [158, 298], [147, 278], [144, 250], [148, 224]];
const MANUBRIUM = [[590, 190], [612, 184], [636, 188], [652, 196], [668, 188], [692, 184], [714, 190], [717, 206], [713, 226], [710, 262], [706, 306, 1], [598, 306, 1], [594, 262], [592, 240], [597, 226], [598, 208]];
const RIB1 = [[594, 250], [552, 254], [506, 244], [474, 222], [462, 192], [472, 162], [506, 138], [556, 122], [610, 114]];

export default {
  id: "shoulder-girdle",
  viewBox: [0, 0, 800, 450],
  directions: { medial: [1, 0], lateral: [-1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1], anterior: "out", posterior: "in" },
  backdrop: [
    { d: spline([[100, 470, 1], [104, 300], [112, 200], [126, 150], [160, 120], [230, 92], [320, 62], [420, 30], [480, -12, 1], [820, -12, 1], [820, 470, 1]]), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    trapezius: { type: "muscle", z: 0.5, axis: [[500, -10], [230, 150]], fibreAngle: 0, label: [330, 110],
      d: spline([[340, 156], [300, 150], [260, 147], [220, 145], [190, 146], [160, 151], [140, 159], [162, 128], [222, 100], [300, 70], [380, 40], [440, 8], [468, -12, 1], [540, -12, 1], [520, 30], [482, 80], [432, 120], [382, 145]]) },
    scapula: { type: "bone", z: 1, label: [380, 330], d: spline(ACROMION) + " " + spline(SCAPULA) },
    _subscapularis: { type: "muscle", z: 1.2, decorative: true, axis: [[420, 300], [296, 250]],
      d: spline([[318, 232], [360, 226], [410, 218], [446, 214], [452, 250], [450, 300], [442, 360], [432, 460, 1], [330, 460, 1], [304, 380], [290, 330], [284, 300], [290, 262], [302, 240]]) },
    humerus: { type: "bone", z: 1.5, label: [196, 300], d: spline(HUMERUS) },
    firstRib: { type: "bone", z: 1.5, label: [470, 200], d: ribbon(RIB1, 8) },
    brachialPlexus: { type: "nerve", z: 2, label: [480, 100], points: [[500, 30], [482, 100], [452, 160], [412, 200], [352, 236], [302, 268], [258, 302]], width: 13 },
    subclavianVessels: { type: "vessel", kind: "artery", z: 2.2, points: [[626, 222], [592, 188], [548, 162], [502, 156], [462, 172], [420, 200], [360, 234], [302, 264], [254, 296]], width: 10 },
    _subclavianVein: { type: "vessel", kind: "vein", z: 2.1, decorative: true, points: [[632, 240], [596, 236], [548, 228], [496, 214], [440, 214], [380, 240], [316, 274], [262, 306]], width: 11 },
    sternum: { type: "bone", z: 3, label: [652, 250], d: spline(MANUBRIUM) },
    clavicle: { type: "bone", z: 4, label: [420, 176], d: spline(CLAVICLE) },
    medialClavicularPhysis: { type: "physis", z: 4.5, label: [578, 210], d: ribbon([[577, 186], [579, 200], [580, 214], [578, 230]], 2.3) },
    costoclavicularLigament: { type: "ligament", z: 4.6, from: [546, 246], to: [552, 226], width: 16 },
    scjLigaments: { type: "ligament", z: 5, from: [568, 200], to: [606, 210], width: 18 },
    acJointCapsule: { type: "capsule", z: 5, label: [217, 172], d: spline([[205, 144], [230, 142], [237, 162], [232, 182], [206, 184], [201, 164]]) },
    acLigament: { type: "ligament", z: 5.5, from: [190, 149], to: [250, 147], width: 8, bend: 2 },
    conoidLigament: { type: "ligament", z: 5.5, from: [300, 205], to: [304, 188], width: 13 },
    trapezoidLigament: { type: "ligament", z: 5.5, from: [282, 204], to: [258, 181], width: 12 },
    sternocleidomastoid: { type: "muscle", z: 6, axis: [[566, -10], [604, 192]], fibreAngle: 0, label: [580, 90],
      d: spline([[640, 196], [632, 140], [614, 80], [598, 20], [588, -12, 1], [546, -12, 1], [546, 40], [534, 100], [518, 150], [512, 178], [540, 182], [568, 186], [594, 186], [616, 192]]) },
    deltoid: { type: "muscle", z: 7, ghost: true, axis: [[230, 180], [196, 460]], label: [140, 300],
      d: spline([[256, 182], [236, 182], [210, 182], [180, 183], [150, 183], [134, 182], [120, 204], [112, 262], [118, 330], [138, 400], [158, 460, 1], [226, 460, 1], [234, 400], [244, 330], [254, 262], [262, 212]]) }
  },
  anchors: {
    acJoint: [217, 162], scJoint: [589, 208], distalClavicle: [252, 162], midshaftClavicle: [400, 175], medialClavicle: [546, 200],
    coracoid: [284, 210], acromion: [176, 164], shoulderTip: [148, 152], retrosternal: [612, 232]
  }
};
