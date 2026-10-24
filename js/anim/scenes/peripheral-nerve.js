/**
 * Scene: peripheral-nerve — a peripheral nerve passing through a fibro-osseous tunnel, LONGITUDINAL section
 * (lateral view, e.g. carpal or cubital tunnel). OWNER: A8.
 *   Proximal = screen LEFT, distal = screen RIGHT; superficial (roof side) = up; bony floor = down.
 *   The retinaculum (roof) spans the bony groove attachment-to-attachment; the tunnel is the space between roof and floor;
 *   the nerve (fascicles visible) runs through it with its vasa nervorum on the epineurium; an adjacent muscle belly
 *   arises from the roof (as the thenar muscles do from the flexor retinaculum).
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
const GROOVE = [[244, 262], [290, 270], [345, 278], [400, 281], [455, 278], [510, 270], [556, 262]];
const ROOF = [[262, 256], [292, 214], [340, 198], [400, 194], [460, 198], [508, 214], [538, 256]];

export default {
  id: "peripheral-nerve",
  viewBox: [0, 0, 800, 450],
  directions: { proximal: [-1, 0], distal: [1, 0], superior: [-1, 0], inferior: [1, 0], anterior: [0, -1], posterior: [0, 1], up: [0, -1], down: [0, 1], lateral: "out", medial: "in" },
  backdrop: [
    { d: spline([[110, 120], [300, 96], [500, 96], [690, 120], [706, 250], [690, 392], [500, 410], [300, 410], [110, 392], [96, 250]]), fill: "skin", opacity: 0.3 }
  ],
  structures: {
    tunnel: { type: "space", z: 0, visible: true, label: [400, 268],
      d: spline([[262, 258], [294, 220], [340, 205], [400, 201], [460, 205], [506, 220], [538, 258], [510, 266], [455, 274], [400, 277], [345, 274], [290, 266]]) },
    bone: { type: "bone", z: 1, label: [400, 330],
      d: spline([...GROOVE.map(([x, y], i) => [x, y + (i === 0 || i === GROOVE.length - 1 ? 0 : 2)]), [574, 280], [582, 330], [564, 372], [500, 388], [400, 392], [300, 388], [236, 372], [218, 330], [226, 280]]) },
    surroundingMuscle: { type: "muscle", z: 2, label: [430, 146], axis: [[300, 182], [560, 132]],
      d: spline([[298, 190], [330, 166], [380, 146], [440, 128], [500, 116], [552, 118], [566, 132], [540, 150], [490, 170], [440, 186], [380, 196], [330, 200]]) },
    nerve: { type: "nerve", z: 3, width: 20, label: [190, 214], points: [[132, 196], [196, 212], [262, 234], [330, 243], [400, 245], [470, 243], [538, 234], [604, 214], [668, 198]] },
    vasaNervorum: { type: "vessel", kind: "artery", z: 4, width: 2.6, label: [610, 196], points: [[140, 188], [200, 203], [266, 225], [334, 234], [400, 236], [466, 234], [534, 225], [600, 205], [662, 190]] },
    retinaculum: { type: "ligament", z: 5, width: 13, label: [400, 186], points: ROOF }
  },
  anchors: {
    proximalNerve: [196, 212],
    tunnelEntry: [268, 236],
    tunnelCentre: [400, 245],
    tunnelExit: [532, 236],
    distalNerve: [604, 214]
  }
};
