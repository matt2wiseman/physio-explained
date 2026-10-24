/**
 * Scene: hip-lateral — RIGHT hip, LATERAL view (gluteal tendons & greater trochanter).
 *   - Viewed from the patient's right side: ANTERIOR = screen RIGHT (ASIS, TFL), POSTERIOR = screen LEFT
 *     (gluteus maximus), superior = up. Lateral = toward the viewer ("out"), medial = away ("in").
 *   - Greater trochanter facets (Dwek/Pfirrmann): anterior facet = gluteus minimus; lateral facet = main gluteus
 *     medius insertion; superoposterior facet = posterior medius fibres; posterior facet = trochanteric bursa.
 *   - The ITB (with the gluteal aponeurosis) and gluteus maximus lie superficial to the trochanter, so they are
 *     GHOSTED; the gluteal tendons and bursae beneath remain visible (tendinopathy, bursitis, ITB compression).
 * Scale ≈ 1.6 px/mm.
 * Band conventions (PROXIMAL → DISTAL): gluteusMediusTendon / gluteusMinimusTendon  MTJ → trochanteric facet
 *   (avulse end:"to" = detachment from the trochanter; tear at 0.8–1 = insertional tear);
 *   itBand  iliac tubercle region (gluteal aponeurosis) → distal thigh.  Muscle axes origin → insertion.
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

const TFL = [[486, 116], [482, 170], [472, 230], [458, 290], [446, 342]];

export default {
  id: "hip-lateral",
  viewBox: [0, 0, 800, 450],
  directions: {
    anterior: [1, 0], posterior: [-1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1],
    lateral: "out", medial: "in"
  },
  backdrop: [
    { d: spline([[232, -20], [520, -20], [528, 80], [522, 150], [530, 220], [520, 300], [500, 380], [492, 470], [330, 470], [300, 420], [250, 380], [206, 300], [196, 200], [206, 100]]), fill: "skin", opacity: 0.35 }
  ],
  structures: {
    pelvis: {
      type: "bone", z: 0, label: [300, 96],
      d: [spline([[250, 118], [262, 84], [300, 60], [346, 48], [392, 44], [432, 54], [456, 68], [476, 88], [490, 112], [482, 134], [476, 158], [470, 182],
        [468, 202], [482, 232], [504, 256], [524, 276], [527, 306], [510, 322], [470, 330], [420, 342], [378, 352], [340, 350], [312, 330],
        [302, 298], [296, 266], [300, 244], [284, 214], [262, 186], [248, 156], [244, 136]]),
        spline(ellipse(452, 302, 30, 20))].join(" ")
    },
    femur: {
      type: "bone", z: 1, label: [404, 400],
      d: spline([[418, 187], [442, 194], [455, 214], [454, 240], [443, 258], [437, 276], [436, 305], [432, 360], [430, 470], [380, 470], [378, 380],
        [374, 334], [366, 300], [363, 266], [370, 240], [386, 224], [384, 206], [394, 192]])
    },
    gluteusMinimus: {
      type: "muscle", z: 2, label: [462, 150], fibreAngle: 0,
      d: spline([[400, 128], [450, 110], [482, 130], [480, 164], [466, 200], [450, 226], [436, 238], [420, 230], [410, 204], [403, 168]]),
      axis: [[452, 132], [430, 258]]
    },
    gluteusMinimusTendon: { type: "tendon", z: 3, from: [441, 226], to: [428, 262], width: 12 },
    gluteusMedius: {
      type: "muscle", z: 4, label: [360, 110], fibreAngle: 0,
      d: spline([[300, 70], [360, 52], [430, 56], [466, 82], [470, 112], [452, 150], [432, 188], [414, 212], [400, 220], [386, 220], [370, 208], [344, 178], [308, 140], [288, 104]]),
      axis: [[378, 74], [400, 254]]
    },
    subgluteusMediusBursa: { type: "bursa", z: 5, cx: 415, cy: 243, rx: 8, ry: 5, rotate: -35 },
    gluteusMediusTendon: { type: "tendon", z: 6, from: [395, 212], to: [401, 258], width: 18 },
    trochantericBursa: { type: "bursa", z: 7, cx: 384, cy: 268, rx: 13, ry: 25, rotate: 10 },
    tensorFasciaeLatae: { type: "muscle", z: 8, d: ribbon(TFL, [8, 15, 16, 12, 4]), axis: [TFL[0], TFL[TFL.length - 1]], fibreAngle: 0, label: [482, 200] },
    itBand: { type: "tendon", z: 9, ghost: true, points: [[446, 104], [432, 160], [416, 222], [406, 280], [403, 360], [404, 470]], width: 26, label: [404, 330] },
    gluteusMaximus: {
      type: "muscle", z: 10, ghost: true, label: [276, 250], fibreAngle: 0,
      d: spline([[250, 110], [298, 92], [326, 120], [350, 170], [376, 228], [394, 290], [398, 350], [374, 378], [320, 362], [262, 302], [222, 232], [214, 160]]),
      axis: [[262, 140], [396, 330]]
    }
  },
  anchors: {
    greaterTrochanter: [400, 268],
    iliacCrest: [392, 46],
    iliacCrestLateral: [456, 70],
    asis: [489, 112],
    anteriorFacet: [428, 262],
    lateralFacet: [403, 258],
    superoposteriorFacet: [381, 236],
    itbOverTrochanter: [405, 276]
  }
};
