/**
 * Scene: long-bone — a CHILD's right long bone (tibia-like), ANTERIOR view, vertical. OWNER: A8.
 *   Proximal (superior) = up, distal = down; medial = screen RIGHT, lateral = screen LEFT; anterior = toward viewer.
 *   Proximal epiphysis | proximal physis (growth plate) | metaphysis → diaphysis (cortex + medullary cavity) → metaphysis |
 *   distal physis | distal epiphysis, with articular cartilage caps, periosteal sleeve (shaft + metaphyses only — it
 *   anchors at the perichondrial ring beside each physis) and a nutrient artery entering the mid-shaft cortex.
 *   Separate epiphysis/diaphysis bones let Salter–Harris separations move the epiphysis; physes declare `epiphysis`.
 *   Scale: bone ≈ 410 px tall; shaft ≈ 70 px wide with ~13 px cortex.
 */
const r = (n) => Math.round(n * 10) / 10;
function spline(pts, closed = true) {
  const n = pts.length, at = (i) => (closed ? pts[(i + n) % n] : pts[Math.max(0, Math.min(n - 1, i))]);
  let d = `M${r(pts[0][0])},${r(pts[0][1])}`;
  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
    const c1 = p1[2] ? p1 : [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = p2[2] ? p2 : [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${r(c1[0])},${r(c1[1])} ${r(c2[0])},${r(c2[1])} ${r(p2[0])},${r(p2[1])}`;
  }
  return closed ? d + " Z" : d;
}
const off = (pts, dx) => pts.map(([x, y, k]) => [x + (x < 400 ? -dx : dx), y, k]);

// growth-plate centrelines (gently undulating, as on radiographs)
const PP = [[327, 82], [350, 78], [375, 83], [400, 79], [425, 83], [450, 78], [473, 82]];
const DP = [[323, 366], [348, 370], [374, 365], [400, 370], [426, 365], [452, 370], [477, 366]];
const plate = (c, h) => [...c.map(([x, y]) => [x, y - h]), ...c.slice().reverse().map(([x, y]) => [x, y + h])];
const below = (c, h) => c.map(([x, y]) => [x, y + h]);
const above = (c, h) => c.map(([x, y]) => [x, y - h]);

// diaphysis + both metaphyses: from proximal physis (top) to distal physis (bottom)
const SHAFT_L = [[329, 87, 1], [332, 104], [346, 127], [362, 152], [366, 200], [366, 262], [362, 300], [348, 326], [332, 346], [323, 361, 1]];
const SHAFT_R = SHAFT_L.map(([x, y, k]) => [800 - x, y, k]).reverse();
const DIAPHYSIS = [...SHAFT_L, ...above(DP, 4).slice(1, -1), ...SHAFT_R, ...below(PP, 4).slice(1, -1).reverse()];
// periosteal sleeve: offset outline on the sides only (zero thickness where it meets each physis)
const sleeve = (side) => { const inner = side; const outer = off(side.slice(1, -1), 5); return [inner, outer]; };
const [IL, OL] = sleeve(SHAFT_L), [IR, OR] = sleeve(SHAFT_R);
const PERIOSTEUM = spline([SHAFT_L[0], ...OL, SHAFT_L[SHAFT_L.length - 1], ...above(DP, 4).slice(1, -1), SHAFT_R[0], ...OR, SHAFT_R[SHAFT_R.length - 1], ...below(PP, 4).slice(1, -1).reverse()]) + " " + spline(DIAPHYSIS);
void IL; void IR;

export default {
  id: "long-bone",
  viewBox: [0, 0, 800, 450],
  directions: { medial: [1, 0], lateral: [-1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1], anterior: "out", posterior: "in" },
  backdrop: [
    { d: spline([[262, -10], [272, 90], [296, 180], [298, 270], [284, 360], [270, 460], [530, 460], [516, 360], [502, 270], [504, 180], [528, 90], [538, -10]]), fill: "soft", opacity: 0.55 }
  ],
  structures: {
    medullaryCavity: { type: "space", z: 2, visible: true, fill: "marrow", label: [400, 230],
      d: spline([[386, 136], [380, 168], [379, 236], [380, 296], [387, 322], [400, 330], [413, 322], [420, 296], [421, 236], [420, 168], [414, 136], [400, 129]]) },
    diaphysis: { type: "bone", z: 1, d: spline(DIAPHYSIS), axis: [[400, 86], [400, 362]], label: [372, 230] },
    proximalEpiphysis: { type: "bone", z: 1, label: [400, 52],
      d: spline([[329, 77, 1], [328, 60], [338, 40], [360, 28], [400, 24], [440, 28], [462, 40], [472, 60], [471, 77, 1], ...above(PP, 4).slice(1, -1).reverse()]) },
    distalEpiphysis: { type: "bone", z: 1, label: [400, 394],
      d: spline([[323, 371, 1], ...below(DP, 4).slice(1, -1), [477, 371, 1], [480, 390], [474, 410], [452, 418], [400, 421], [348, 418], [326, 410], [320, 390]]) },
    proximalPhysis: { type: "physis", z: 3, d: spline(plate(PP, 3.6)), axis: [PP[0], PP[PP.length - 1]], epiphysis: "proximalEpiphysis", label: [452, 80] },
    distalPhysis: { type: "physis", z: 3, d: spline(plate(DP, 3.6)), axis: [DP[0], DP[DP.length - 1]], epiphysis: "distalEpiphysis", label: [452, 368] },
    articularCartilageProximal: { type: "cartilage", z: 2, label: [430, 22], axis: [[334, 50], [466, 50]],
      d: spline([[330, 62], [338, 40], [360, 28], [400, 24], [440, 28], [462, 40], [470, 62], [476, 58], [469, 34], [444, 19], [400, 14], [356, 19], [331, 34], [324, 58]]) },
    articularCartilageDistal: { type: "cartilage", z: 2, label: [430, 425], axis: [[326, 412], [474, 412]],
      d: spline([[320, 392], [326, 410], [348, 418], [400, 421], [452, 418], [474, 410], [480, 392], [486, 396], [482, 418], [456, 428], [400, 431], [344, 428], [318, 418], [314, 396]]) },
    periosteum: { type: "fascia", z: 4, fillRule: "evenodd", d: PERIOSTEUM, axis: [[400, 90], [400, 358]], label: [325, 230] },
    nutrientArtery: { type: "vessel", kind: "artery", z: 5, width: 3.6, label: [470, 208],
      points: [[500, 196], [470, 210], [446, 220], [430, 228], [414, 234], [404, 226], [400, 200], [399, 168]] }
  },
  anchors: {
    midshaft: [400, 225],
    proximalMetaphysis: [400, 112],
    distalMetaphysis: [400, 338],
    proximalPhysisCentre: [400, 81],
    distalPhysisCentre: [400, 368],
    distalEpiphysisCentre: [400, 394],
    corticalStressSite: [433, 272]
  }
};
