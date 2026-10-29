/**
 * Scene: shoulder-anterior — RIGHT shoulder, ANTERIOR view of the glenohumeral joint, drawn as a coronal cut-away
 * (atlas convention after Netter "Shoulder: anterior view" + coronal MRI anatomy).
 *   - Viewer faces the patient: LATERAL (greater tuberosity, deltoid) is screen LEFT, MEDIAL (coracoid, scapular body,
 *     sternum) is screen RIGHT. Superior = up. Anterior = toward the viewer ("out").
 *   - Arm hanging in neutral rotation. The glenoid faces anterolaterally, so its face is seen slightly obliquely:
 *     the ANTERIOR rim/labrum is its medial (right) edge, the POSTERIOR rim/labrum its lateral (left) edge.
 *   - Capsule shown in section as a C-shaped sleeve (superior capsule under the cuff → glenoid neck → axillary recess →
 *     medial humeral neck). Deltoid, pectoralis major and biceps are ghosted so the cuff, joint and humerus show.
 *   - Supraspinatus/infraspinatus lie behind the scapula and clavicle (posterior); infraspinatus peeks out lateral to the
 *     greater tuberosity and below the glenoid. The radial nerve's spiral-groove segment is posterior but drawn over the
 *     shaft so it can be animated (seen-through convention).
 * Scale ≈ 2.0 px/mm (humeral head Ø ≈ 46 mm).
 * Band conventions (from → to):
 *   supraspinatusTendon  musculotendinous junction (under acromion) → footprint on greater tuberosity (avulse end:"to")
 *   subscapularisTendon  MTJ (anterior to glenoid neck) → lesser tuberosity
 *   longHeadBicepsTendon supraglenoid tubercle / superior labrum (SLAP: avulse end:"from") → biceps MTJ below the groove
 *   pectoralisMajorTendon MTJ (medial) → lateral lip of bicipital groove (avulse end:"to" = humeral avulsion)
 *   ighl  anteroinferior glenoid/labrum (Bankart: avulse end:"from") → inferomedial humeral neck (HAGL: end:"to")
 *   coracoacromialLigament  coracoid → anterior acromion
 *   axillaryNerve  posterior cord (medial) → quadrilateral space / surgical neck;  radialNerve  axilla → spiral groove → lateral arm
 * Cartilage axes: labrum & glenoidCartilage superior (0) → inferior (1); humeralCartilage superolateral (0) → inferomedial (1).
 * Muscle axes: origin → insertion.
 * Dislocation anchors (subcoracoidPosition, posteriorDislocationPosition) are where the HUMERUS area-centroid goes
 * (content: { do:"move", target:"humerus", to:"subcoracoidPosition" }) — head ends below the coracoid / behind the glenoid.
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
function normalAt(c, i) {
  const a = c[Math.max(0, i - 1)], b = c[Math.min(c.length - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
  return [-dy / l, dx / l];
}
const offset = (c, d) => c.map((p, i) => { const n = normalAt(c, i), di = typeof d === "function" ? d(i) : d; return [p[0] + n[0] * di, p[1] + n[1] * di]; });
/** Closed outline around a centreline with half-width w (number or function of index). */
const ribbonPts = (c, w) => [...offset(c, w), ...offset(c, (i) => -(typeof w === "function" ? w(i) : w)).reverse()];
const ribbon = (c, w) => spline(ribbonPts(c, w));
const taper = (n, a = 0.5) => (i) => Math.pow(Math.sin((Math.PI * i) / (n - 1)), a);
/** Points on a circle; angles in degrees, maths convention (0 = screen right, 90 = up). */
const arc = (cx, cy, rad, a0, a1, n) => Array.from({ length: n + 1 }, (_, i) => { const a = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + rad * Math.cos(a), cy - rad * Math.sin(a)]; });
const add = (p, d) => [r(p[0] + d[0]), r(p[1] + d[1])];

/* ---------- humerus (head centre H, radius RH) ---------- */
const H = [290, 146], RH = 46;
const HUMERUS = [
  ...arc(H[0], H[1], RH, 125, -50, 14),
  [313, 198], [305, 216], [299, 236], [296, 262], [295, 320], [295, 400], [295, 470, 1], [251, 470, 1],
  [251, 430], [248, 394], [248, 372], [251, 340], [251, 282], [250, 244], [247, 220], [242, 196], [237, 172], [235, 150],
  [237, 130], [244, 118], [254, 112]
];
const HUM_C = centroid(HUMERUS);
const HUM_CART = (() => {
  const n = 16, a0 = 122, a1 = -47, tp = taper(n + 1, 0.5);
  const out = arc(H[0], H[1], 1, a0, a1, n).map((_, i) => { const a = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180, R = RH + 3.2 * tp(i); return [H[0] + R * Math.cos(a), H[1] - R * Math.sin(a)]; });
  const inn = arc(H[0], H[1], 1, a0, a1, n).map((_, i) => { const a = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180, R = RH - 2 * tp(i); return [H[0] + R * Math.cos(a), H[1] - R * Math.sin(a)]; });
  return spline([...out, ...inn.slice(1, -1).reverse()]);
})();

/* ---------- glenoid (face seen obliquely: pear, wider inferiorly) ---------- */
const G = [362, 146];
const pear = (rx, ry, n = 28) => Array.from({ length: n }, (_, i) => {
  const a = (i / n) * Math.PI * 2, s = Math.sin(a), w = rx * (1 + 0.24 * Math.max(0, s));
  return [G[0] + w * Math.cos(a), G[1] + ry * s];
});
const GLENOID_FACE = pear(8.5, 37);
const LABRUM = spline(pear(15, 43)) + " " + spline(pear(8, 36.5).reverse());

/* ---------- scapula: acromion island + body/glenoid/coracoid ---------- */
const ACROMION = [[322, 54, 1], [300, 53], [272, 55], [250, 60], [236, 66], [230, 73], [233, 79], [246, 80], [268, 76], [294, 72], [322, 72, 1]];
const SCAPULA_BODY = [
  [360, 101], [374, 104], [390, 103], [384, 98], [372, 96], [364, 93], [366, 86], [378, 80], [400, 76], [420, 77], [434, 83], [440, 96],
  [444, 108], [458, 113], [462, 119], [468, 113], [494, 108], [522, 100], [531, 130], [533, 190], [527, 250], [512, 310], [492, 360],
  [478, 388], [466, 393], [452, 375], [430, 328], [408, 282], [390, 242], [377, 214], [368, 201], [354, 196], [346, 180], [343, 160],
  [344, 138], [347, 120], [352, 107]
];
const CLAVICLE = [
  [326, 52, 1], [350, 48], [390, 42], [440, 37], [500, 36], [560, 39], [620, 42], [652, 44, 1], [652, 72, 1], [620, 70], [560, 66],
  [500, 63], [450, 61], [420, 60], [404, 62], [392, 64], [370, 67], [348, 70], [326, 72, 1]
];

/* ---------- capsule (C-shaped sleeve in section) ---------- */
const CAPSULE_C = [
  ...arc(H[0], H[1], 52.5, 122, 62, 4), [334, 99], [352, 98], [372, 99], [386, 110], [390, 134], [390, 160], [385, 184], [374, 204],
  [358, 219], [340, 228], [322, 230], [307, 224], [299, 214]
];

export default {
  id: "shoulder-anterior",
  viewBox: [0, 0, 800, 450],
  directions: { medial: [1, 0], lateral: [-1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1], anterior: "out", posterior: "in" },
  backdrop: [
    { d: spline([[180, 470, 1], [178, 380], [176, 290], [178, 200], [186, 130], [204, 84], [236, 52], [290, 36], [360, 28], [440, 20], [520, 8], [570, -12, 1], [820, -12, 1], [820, 470, 1]]), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    /* deep / posterior layer */
    infraspinatus: { type: "muscle", z: 0.5, axis: [[505, 300], [238, 132]], fibreAngle: 0, label: [233, 140],
      d: spline([[252, 108], [240, 113], [231, 126], [229, 142], [234, 154], [262, 152], [310, 172], [360, 212], [420, 262], [470, 302], [505, 330], [522, 300], [522, 240], [502, 200], [440, 160], [380, 130], [320, 110], [280, 104]]) },
    _tricepsLongHead: { type: "muscle", z: 0.8, decorative: true, axis: [[366, 200], [340, 470]],
      d: spline([[360, 198], [374, 198], [380, 236], [376, 300], [366, 380], [356, 470, 1], [322, 470, 1], [334, 380], [346, 300], [352, 236]]) },
    supraspinatus: { type: "muscle", z: 1, axis: [[575, 82], [356, 94]], label: [470, 100],
      d: spline([[356, 86], [380, 74], [420, 65], [470, 60], [520, 60], [566, 67], [580, 81], [566, 96], [522, 104], [470, 108], [420, 108], [384, 104], [358, 100]]) },

    /* bones */
    scapula: { type: "bone", z: 2, label: [500, 230], d: spline(ACROMION) + " " + spline(SCAPULA_BODY) },
    humerus: { type: "bone", z: 3, label: [273, 330], d: spline(HUMERUS) },
    _teresMajor: { type: "muscle", z: 3.5, decorative: true, axis: [[472, 386], [298, 296]],
      d: spline([[476, 378], [470, 393], [440, 381], [392, 347], [344, 321], [300, 313], [294, 297], [300, 283], [344, 292], [394, 316], [444, 350]]) },
    subscapularis: { type: "muscle", z: 4, axis: [[505, 240], [390, 160]], fibreAngle: -20, label: [470, 230],
      d: spline([[388, 130], [410, 121], [444, 119], [480, 116], [516, 112], [526, 140], [528, 200], [520, 260], [504, 316], [484, 362], [470, 381], [452, 362], [428, 318], [405, 272], [389, 233], [381, 206], [384, 186], [390, 168]]) },
    capsule: { type: "capsule", z: 4.2, label: [330, 229], d: ribbon(CAPSULE_C, 3) },
    jointSpace: { type: "space", z: 4.5, hidden: true, label: [342, 205],
      d: spline([[324, 104], [338, 108], [346, 118], [348, 134], [346, 150], [346, 166], [349, 180], [355, 191], [352, 205], [340, 217], [325, 223], [311, 217], [311, 206], [318, 194], [326, 182], [333, 170], [338, 158], [339, 146], [337, 132], [331, 117]]) },
    proximalHumeralPhysis: { type: "physis", z: 5.5, label: [262, 172], d: ribbon([[239, 190], [255, 176], [272, 166], [288, 161], [302, 166], [313, 175], [320, 184]], 2.6) },
    humeralCartilage: { type: "cartilage", z: 6, axis: [[262, 106], [322, 183]], label: [334, 128], d: HUM_CART },
    glenoidCartilage: { type: "cartilage", z: 6, axis: [[362, 110], [362, 183]], label: [362, 150], d: spline(GLENOID_FACE) },
    subscapularisTendon: { type: "tendon", z: 6.5, points: [[390, 156], [364, 158], [338, 164], [313, 172], [293, 180]], width: 16 },
    labrum: { type: "cartilage", z: 7, axis: [[362, 103], [362, 190]], label: [377, 176], fillRule: "evenodd", d: LABRUM },
    ighl: { type: "ligament", z: 7.2, points: [[373, 182], [370, 201], [358, 216], [338, 226], [318, 226], [304, 216]], width: 7 },
    longHeadBicepsTendon: { type: "tendon", z: 8, points: [[360, 104], [342, 103], [320, 107], [300, 114], [284, 124], [272, 138], [268, 158], [267, 190], [268, 226], [270, 262], [274, 292]], width: 7 },
    supraspinatusTendon: { type: "tendon", z: 9, points: [[360, 94], [336, 96], [313, 97], [290, 92], [268, 97], [256, 105], [249, 113]], width: 11 },
    axillaryNerve: { type: "nerve", z: 9, points: [[442, 214], [406, 224], [370, 236], [342, 244], [318, 248], [301, 248]], width: 6 },
    radialNerve: { type: "nerve", z: 9, points: [[454, 256], [406, 280], [358, 316], [320, 350], [294, 374], [274, 398], [259, 424], [248, 458]], width: 7 },
    subacromialBursa: { type: "bursa", z: 10, cx: 283, cy: 84, rx: 48, ry: 4.6, rotate: -12 },
    coracoacromialLigament: { type: "ligament", z: 10.5, from: [368, 90], to: [264, 73], width: 7, bend: 2 },
    clavicle: { type: "bone", z: 11, label: [520, 50], d: spline(CLAVICLE) },

    /* superficial (ghosted) layer */
    biceps: { type: "muscle", z: 12, ghost: true, axis: [[300, 262], [298, 470]], label: [300, 420],
      d: spline([[266, 296], [276, 287], [286, 300], [294, 330], [304, 340], [318, 300], [330, 262], [340, 236], [350, 250], [354, 300], [352, 360], [344, 420], [338, 470, 1], [262, 470, 1], [258, 420], [258, 360], [260, 320]]) },
    pectoralisMajor: { type: "muscle", z: 13, ghost: true, axis: [[690, 250], [334, 262]], fibreAngle: 0, label: [560, 250],
      d: spline([[332, 244], [372, 226], [420, 198], [470, 160], [520, 120], [570, 92], [620, 84], [660, 86], [692, 98], [702, 200], [702, 320], [692, 420], [660, 446], [600, 430], [520, 392], [440, 342], [382, 312], [344, 296], [332, 288]]) },
    pectoralisMajorTendon: { type: "tendon", z: 14, from: [334, 262], to: [266, 263], width: 26 },
    deltoid: { type: "muscle", z: 15, ghost: true, axis: [[300, 74], [258, 404]], fibreAngle: 0, label: [222, 210],
      d: spline([[372, 70], [350, 73], [326, 74], [300, 75], [270, 78], [246, 81], [228, 84], [215, 100], [207, 140], [209, 200], [219, 270], [235, 340], [250, 392], [258, 406], [267, 392], [282, 340], [298, 280], [314, 210], [330, 150], [348, 108]]) }
  },
  anchors: {
    greaterTuberosity: [242, 140], lesserTuberosity: [292, 182], bicipitalGroove: [268, 182],
    superiorLabrum: [362, 104], anteroinferiorLabrum: [377, 176], posteriorLabrum: [348, 150],
    posterolateralHumeralHead: [262, 118], anteromedialHumeralHead: [330, 168],
    subcoracoidPosition: add(HUM_C, [108, 40]), posteriorDislocationPosition: add(HUM_C, [30, -4]),
    acromionUndersurface: [284, 74], coracoid: [400, 86], supraspinatusFootprint: [251, 112], criticalZone: [267, 96],
    surgicalNeck: [273, 240], humeralShaftMid: [273, 420], spiralGroove: [276, 393], quadrilateralSpace: [322, 251],
    pecMajorInsertion: [262, 263], pecMajorMTJ: [338, 263], glenohumeralJointCentre: [342, 146], rotatorInterval: [326, 116]
  }
};
