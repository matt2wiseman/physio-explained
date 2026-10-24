/**
 * Scene: thigh-anterior — RIGHT thigh, ANTERIOR view (quadriceps), from the iliac crest/ASIS to the patella.
 *   - Viewer faces the patient: patient's LATERAL side (TFL, ITB, vastus lateralis) = screen LEFT,
 *     MEDIAL side (adductor longus, vastus medialis, femoral vessels) = screen RIGHT. Superior = up.
 *     Anterior = toward the viewer ("out"), posterior = away ("in").
 *   - Rectus femoris arises from the AIIS (direct head) and the superior acetabular rim (reflected head);
 *     its central (deep) aponeurosis runs down the proximal–middle belly (the classic strain site).
 *   - Sartorius crosses from the ASIS to the medial knee, roofing the femoral vessels in the adductor canal.
 * Scale ≈ 0.84 px/mm.
 * Band conventions — all run PROXIMAL → DISTAL:
 *   rectusFemorisProximalTendon  AIIS / acetabular rim → proximal MTJ (avulse end:"from" = AIIS avulsion)
 *   rfCentralTendon  proximal → distal end of the central aponeurosis
 *   quadricepsTendon  distal MTJ → superior pole of patella (avulse end:"to")
 *   itBand  TFL junction → knee;  femoralNerve / femoralArtery  inguinal ligament → distal.
 * Muscle axes run origin → insertion.  rfMTJ = musculotendinous junction of the central aponeurosis.
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
const ellipse = (cx, cy, rx, ry, n = 14) => Array.from({ length: n }, (_, i) => { const a = (-i / n) * Math.PI * 2; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });

/* ---------- centrelines (origin → insertion) ---------- */
const RF = [[357, 52], [356, 92], [358, 150], [362, 220], [366, 290], [369, 345], [371, 380]];
const SART = [[342, 22], [356, 80], [380, 150], [403, 228], [416, 308], [417, 380], [409, 440]];
const TFL = [[341, 18], [331, 58], [322, 98], [316, 136]];

export default {
  id: "thigh-anterior",
  viewBox: [0, 0, 800, 450],
  directions: {
    medial: [1, 0], lateral: [-1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1],
    anterior: "out", posterior: "in"
  },
  backdrop: [
    { d: spline([[300, -20], [474, -20], [466, 60], [444, 120], [430, 200], [422, 300], [418, 380], [418, 470], [324, 470], [322, 380], [306, 280], [296, 160], [294, 60]]), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    pelvis: {
      type: "bone", z: 0, label: [400, 30],
      d: [spline([[326, -16], [332, 6], [341, 19], [350, 32], [356, 45], [357, 56], [352, 66], [356, 86], [364, 104], [376, 120], [389, 132],
        [404, 131], [420, 118], [438, 112], [447, 112], [447, 82], [430, 84], [425, 87], [404, 80], [389, 70], [404, 44], [424, 14], [438, -16]]),
        spline(ellipse(408, 101, 13, 9))].join(" ")
    },
    femur: {
      type: "bone", z: 1, label: [350, 300],
      d: spline([[370, 57], [384, 62], [391, 76], [386, 92], [372, 100], [360, 112], [358, 126], [351, 137], [358, 220], [368, 300], [376, 356],
        [390, 380], [404, 400], [406, 420], [398, 436], [372, 441], [346, 436], [336, 420], [338, 398], [346, 378], [345, 356], [337, 300],
        [328, 220], [321, 140], [313, 114], [311, 92], [318, 78], [332, 76], [348, 70], [356, 62]])
    },
    vastusIntermedius: {
      type: "muscle", z: 2, label: [372, 330], fibreAngle: 8,
      d: spline([[332, 118], [356, 108], [376, 138], [381, 240], [380, 330], [374, 378], [358, 382], [349, 320], [340, 220]]),
      axis: [[356, 120], [368, 380]]
    },
    vastusLateralis: {
      type: "muscle", z: 3, label: [330, 220], fibreAngle: 15,
      d: spline([[322, 102], [344, 112], [348, 200], [354, 300], [361, 370], [364, 398], [350, 398], [334, 376], [320, 318], [312, 240], [313, 160]]),
      axis: [[322, 110], [362, 396]]
    },
    vastusMedialis: {
      type: "muscle", z: 3, label: [398, 350], fibreAngle: 35,
      d: spline([[382, 218], [396, 250], [409, 306], [413, 356], [405, 392], [388, 402], [376, 392], [375, 340], [377, 280]]),
      axis: [[382, 222], [384, 400]]
    },
    adductorLongus: {
      type: "muscle", z: 3, label: [432, 160], fibreAngle: 0,
      d: spline([[425, 91], [437, 95], [448, 138], [445, 196], [424, 246], [398, 262], [392, 244], [403, 192], [416, 134]]),
      axis: [[431, 94], [398, 252]]
    },
    rectusFemoris: { type: "muscle", z: 4, d: ribbon(RF, [3, 8, 17, 20, 18, 11, 4]), axis: [RF[0], [371, 394]], fibreAngle: 25, label: [362, 250] },
    rectusFemorisProximalTendon: { type: "tendon", z: 5, from: [357, 47], to: [357, 96], width: 7 },
    rfCentralTendon: { type: "tendon", z: 5, from: [357, 92], to: [364, 256], width: 3.5, bend: -1 },
    femoralNerve: { type: "nerve", z: 6, points: [[378, 28], [380, 60], [382, 88], [385, 112]], width: 6, label: [384, 100] },
    femoralNerveBranchesDeco: { type: "nerve", z: 6, points: [[385, 112], [378, 140], [372, 172]], width: 3 },
    saphenousNerveDeco: { type: "nerve", z: 6, points: [[385, 112], [396, 160], [405, 220], [411, 280]], width: 2.5 },
    femoralArtery: { type: "vessel", z: 6, points: [[394, 28], [393, 64], [398, 110], [405, 170], [411, 230], [414, 290]], width: 6, label: [400, 140] },
    sartorius: { type: "muscle", z: 7, d: ribbon(SART, [5, 10, 11, 11, 10, 9, 6]), axis: [SART[0], SART[SART.length - 1]], fibreAngle: 0, label: [414, 300] },
    tensorFasciaeLatae: { type: "muscle", z: 7, d: ribbon(TFL, [6, 12, 11, 4]), axis: [TFL[0], TFL[TFL.length - 1]], fibreAngle: 0, label: [322, 70] },
    itBand: { type: "tendon", z: 8, points: [[316, 120], [311, 200], [315, 300], [325, 380], [338, 440], [346, 470]], width: 11, label: [312, 260] },
    quadricepsTendon: { type: "tendon", z: 8, from: [370, 362], to: [372, 396], width: 15 },
    patella: { type: "bone", z: 9, d: spline([[358, 398], [372, 393], [386, 398], [390, 412], [384, 428], [372, 437], [360, 428], [354, 412]]), label: [372, 416] }
  },
  anchors: {
    asis: [341, 19],
    aiis: [356, 46],
    midThighAnterior: [363, 232],
    anterolateralThigh: [334, 240],
    femurShaftMid: [350, 250],
    quadricepsTendonInsertion: [372, 396],
    superiorPolePatella: [372, 394],
    rfMTJ: [360, 160]
  }
};
