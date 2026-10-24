/**
 * Scene: thigh-posterior — RIGHT thigh, POSTERIOR view (hamstrings), from the ischial tuberosity to the knee.
 *   - Viewer behind the patient: patient's LATERAL side = screen RIGHT (biceps femoris, fibula),
 *     MEDIAL = screen LEFT (semitendinosus, semimembranosus, adductor magnus). Superior = up.
 *     Posterior = toward the viewer ("out"), anterior = away ("in").
 *   - Gluteus maximus is ghosted over the ischial tuberosity so the hamstring origin stays visible.
 *   - Layering (deep → superficial): femur, adductor magnus, semimembranosus & BF short head, sciatic nerve,
 *     semitendinosus & BF long head, conjoint tendon, gluteus maximus.
 * Scale ≈ 0.9 px/mm (ischial tuberosity → knee joint line ≈ 37 cm).
 * Band conventions — all run PROXIMAL → DISTAL:
 *   proximalHamstringTendon  ischial footprint → MTJ (avulse end:"from" = proximal avulsion off the ischium)
 *   bflhCentralTendon        proximal (conjoint tendon) → distal end of the intramuscular tendon (proximal MTJ along it)
 *   bicepsFemorisTendon      distal MTJ → fibular head (avulse end:"to")
 *   sciaticNerve             greater sciatic foramen (under gluteus maximus) → bifurcation at the popliteal apex
 * Muscle axes run origin → insertion (strain at:0 = origin).
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
const ends = (c) => [c[0], c[c.length - 1]];

/* ---------- muscle centrelines (origin → insertion) ---------- */
const BFLH = [[357, 84], [366, 124], [378, 172], [391, 226], [403, 280], [412, 322], [418, 352]];
const BFSH = [[404, 196], [415, 240], [423, 286], [425, 324], [421, 352]];
const ST = [[349, 78], [345, 120], [342, 168], [342, 218], [345, 262], [349, 296]];
const SM = [[353, 70], [348, 104], [340, 150], [333, 205], [333, 262], [340, 316], [350, 362]];

export default {
  id: "thigh-posterior",
  viewBox: [0, 0, 800, 450],
  directions: {
    medial: [-1, 0], lateral: [1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1],
    posterior: "out", anterior: "in"
  },
  backdrop: [
    { d: spline([[268, -20], [470, -20], [468, 60], [458, 140], [452, 230], [446, 320], [444, 390], [450, 470], [328, 470], [330, 400], [322, 320], [306, 230], [294, 140], [282, 60]]), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    femur: {
      type: "bone", z: 0, label: [404, 250],
      d: spline([[366, -6], [392, -4], [420, -6], [436, 0], [447, 18], [446, 44], [438, 64], [428, 100], [418, 200], [408, 300], [412, 336],
        [425, 364], [428, 388], [419, 401], [403, 399], [395, 386], [388, 378], [381, 386], [373, 401], [357, 402], [348, 389], [348, 366],
        [358, 342], [376, 300], [390, 200], [396, 110], [386, 84], [381, 70], [392, 56], [380, 40], [362, 36], [355, 18]])
    },
    pelvis: {
      type: "bone", z: 1, label: [306, 44],
      d: spline([[318, -16], [384, -16], [388, 4], [378, 22], [367, 34], [366, 52], [364, 70], [354, 80], [339, 76], [327, 63], [310, 58], [286, 58], [276, 46], [286, 30], [306, 18]])
    },
    tibia: { type: "bone", z: 2, d: spline([[350, 406], [370, 403], [388, 406], [404, 403], [422, 405], [429, 414], [421, 428], [405, 440], [402, 470], [372, 470], [368, 440], [352, 428], [347, 415]]), label: [386, 440] },
    fibula: { type: "bone", z: 3, d: spline([[416, 410], [428, 407], [436, 415], [434, 428], [428, 436], [431, 470], [421, 470], [418, 436], [413, 424]]), label: [436, 440] },
    adductorMagnus: {
      type: "muscle", z: 4, label: [312, 200], fibreAngle: 10,
      d: spline([[290, 46], [330, 52], [350, 74], [366, 120], [378, 200], [373, 280], [361, 336], [352, 366], [340, 356], [322, 300], [308, 220], [298, 140], [292, 84]]),
      axis: [[318, 56], [354, 362]]
    },
    semimembranosus: { type: "muscle", z: 5, d: ribbon(SM, [2.5, 4, 8, 14, 17, 13, 5]), axis: ends(SM), fibreAngle: 12, label: [326, 262] },
    bicepsFemorisShort: { type: "muscle", z: 5, d: ribbon(BFSH, [4, 10, 11, 9, 4]), axis: ends(BFSH), fibreAngle: 18, label: [428, 290] },
    // decorative distal tendons of the semis
    smDistalTendonDeco: { type: "tendon", z: 5, points: [[350, 360], [352, 390], [356, 410]], width: 6 },
    sciaticNerve: { type: "nerve", z: 6, points: [[389, -10], [391, 40], [392, 100], [393, 170], [394, 240], [394, 300], [392, 345]], width: 9, label: [396, 30] },
    tibialNerveDeco: { type: "nerve", z: 6, points: [[392, 344], [390, 380], [388, 420]], width: 6 },
    commonPeronealNerveDeco: { type: "nerve", z: 6, points: [[392, 344], [408, 372], [424, 402], [433, 432]], width: 5 },
    semitendinosus: { type: "muscle", z: 7, d: ribbon(ST, [4, 12, 15, 15, 11, 4]), axis: [ST[0], [346, 400]], fibreAngle: 0, label: [336, 210] },
    stDistalTendonDeco: { type: "tendon", z: 7, points: [[349, 294], [346, 340], [343, 380], [347, 412]], width: 5 },
    bicepsFemorisLong: { type: "muscle", z: 8, d: ribbon(BFLH, [4, 13, 18, 19, 16, 11, 5]), axis: [BFLH[0], [424, 412]], fibreAngle: 14, label: [398, 248] },
    bicepsFemorisTendon: { type: "tendon", z: 9, from: [418, 350], to: [425, 412], width: 7, bend: -1 },
    proximalHamstringTendon: { type: "tendon", z: 9, from: [352, 64], to: [358, 100], width: 11 },
    bflhCentralTendon: { type: "tendon", z: 10, from: [358, 96], to: [384, 196], width: 4, bend: -1.5 },
    ischialBursa: { type: "bursa", z: 11, cx: 345, cy: 66, rx: 11, ry: 7, rotate: -10 },
    gluteusMaximus: {
      type: "muscle", z: 12, ghost: true, label: [404, 40], fibreAngle: 0,
      d: spline([[258, -16], [474, -16], [466, 40], [458, 92], [452, 130], [430, 120], [392, 104], [344, 92], [300, 86], [270, 60]]),
      axis: [[290, 20], [452, 112]]
    }
  },
  anchors: {
    ischialTuberosity: [349, 58],
    bflhProximalMTJ: [366, 128],
    bflhDistalMTJ: [415, 336],
    semitendinosusMid: [343, 196],
    semimembranosusProximal: [342, 140],
    fibularHead: [426, 418],
    poplitealFossa: [390, 370],
    midThighPosterior: [380, 220],
    proximalTendonInsertion: [353, 63]
  }
};
