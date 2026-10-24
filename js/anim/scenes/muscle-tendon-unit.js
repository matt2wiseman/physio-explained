/**
 * Scene: muscle-tendon-unit — a generic fusiform muscle–tendon unit, LATERAL view, laid horizontally. OWNER: A8.
 *   Proximal = screen LEFT (origin bone), distal = screen RIGHT (insertion bone / enthesis); superior = up.
 *   origin bone → proximal tendon → proximal MTJ → muscle belly (fibres follow the spindle) with a distal aponeurosis
 *   running into its distal half → distal MTJ → distal tendon → enthesis on the insertion bone.
 *   Epimysium/deep fascia is a translucent sheath around the belly; the compartment is the fascial space around it.
 *   Band conventions: tendons run proximal → distal (from = origin side), so `avulse end:"to"` pulls off the distal enthesis.
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
// fusiform belly outline (upper edge left→right, lower edge right→left)
const BELLY_TOP = [[240, 219], [262, 204], [300, 182], [350, 166], [400, 161], [450, 166], [492, 184], [516, 205], [530, 220]];
const BELLY_BOT = [[530, 232], [514, 248], [488, 268], [446, 285], [398, 291], [348, 285], [302, 268], [264, 247], [240, 231]];
const grow = (pts, k) => pts.map(([x, y]) => [400 + (x - 400) * (1 + k * 0.6), 226 + (y - 226) * (1 + k)]);

export default {
  id: "muscle-tendon-unit",
  viewBox: [0, 0, 800, 450],
  directions: { proximal: [-1, 0], distal: [1, 0], superior: [0, -1], inferior: [0, 1], anterior: [0, -1], posterior: [0, 1], lateral: "out", medial: "in" },
  backdrop: [
    { d: spline([[112, 128], [260, 112], [400, 104], [560, 112], [700, 132], [712, 226], [700, 326], [560, 346], [400, 352], [260, 344], [112, 326], [100, 226]]), fill: "skin", opacity: 0.3 }
  ],
  structures: {
    compartment: { type: "space", z: 0, label: [400, 312],
      d: spline([[222, 196], [260, 158], [330, 134], [400, 128], [470, 134], [540, 160], [574, 200], [574, 252], [540, 294], [470, 318], [400, 324], [330, 318], [260, 296], [222, 258]]) },
    originBone: { type: "bone", z: 1, label: [158, 300],
      d: spline([[146, 58], [178, 56], [184, 120], [182, 190], [190, 214, 1], [190, 236, 1], [182, 260], [184, 330], [178, 396], [146, 398], [140, 330], [142, 226], [140, 120]]) },
    insertionBone: { type: "bone", z: 1, label: [644, 300],
      d: spline([[618, 70], [654, 66], [660, 140], [658, 226], [662, 312], [654, 388], [618, 390], [612, 300], [606, 244, 1], [606, 214, 1], [614, 150]]) },
    epimysium: { type: "fascia", z: 2, label: [430, 150], axis: [[236, 225], [534, 226]], d: spline([...grow(BELLY_TOP, 0.1), ...grow(BELLY_BOT, 0.1)]) },
    muscleBelly: { type: "muscle", z: 3, label: [360, 240], axis: [[240, 225], [530, 226]], d: spline([...BELLY_TOP, ...BELLY_BOT]) },
    aponeurosis: { type: "fascia", z: 4, width: 5, label: [470, 232], points: [[408, 230], [450, 228], [492, 227], [532, 226]] },
    proximalTendon: { type: "tendon", z: 4, from: [184, 225], to: [252, 225], width: 17, label: [214, 214] },
    distalTendon: { type: "tendon", z: 4, from: [520, 226], to: [608, 229], width: 15, label: [572, 218] },
    bloodVessel: { type: "vessel", kind: "artery", z: 5, width: 4, label: [338, 150], points: [[318, 104], [336, 140], [356, 176], [384, 204], [420, 214], [462, 214]] }
  },
  anchors: {
    proximalEnthesis: [186, 225],
    proximalMTJ: [250, 225],
    muscleBellyCentre: [386, 226],
    distalMTJ: [524, 226],
    tendonMid: [566, 228],
    enthesis: [606, 229]
  }
};
