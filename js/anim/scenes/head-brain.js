/**
 * Scene: head-brain — head in MIDSAGITTAL section, LATERAL view (face to the right).
 *   - ANTERIOR = screen RIGHT, POSTERIOR = screen LEFT, superior = up; lateral = toward the viewer ("out").
 *   - Skull is drawn as its midline section (vault inner & outer tables continuous with the skull base: anterior
 *     cranial fossa floor, sella turcica, clivus, foramen magnum, posterior fossa) plus the facial skeleton and
 *     mandible as a lateral silhouette (so forehead, chin, occiput and temple impact points sit on real bone).
 *   - Brain: cerebrum (medial surface), corpus callosum, cerebellum below the tentorium, brainstem against the
 *     clivus continuing through the foramen magnum. A ≈3–4 mm cerebrospinal-fluid gap separates brain from the
 *     inner table (csf space, visible) so `accelerate` (coup/contrecoup) and `shear` read clearly.
 *   - coupSite = frontal pole (under a forehead impact); contrecoupSite = occipital pole. For an occipital impact,
 *     use `accelerate dir: "anterior"` (coup posteriorly, contrecoup frontally).
 * Scale ≈ 1.75 px/mm; origin = centre of the cranial cavity at screen (392, 172).
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const S = 1.75, OX = 392, OY = 172;
const r = (n) => Math.round(n * 10) / 10;
const pt = (p) => `${r(p[0])},${r(p[1])}`;
function spline(pts, closed = true) {
  const n = pts.length, at = (i) => (closed ? pts[(i + n) % n] : pts[Math.min(n - 1, Math.max(0, i))]);
  let d = `M${pt(pts[0])}`;
  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2), k1 = (p1[2] ?? 1) / 6, k2 = (p2[2] ?? 1) / 6;
    d += ` C${pt([p1[0] + (p2[0] - p0[0]) * k1, p1[1] + (p2[1] - p0[1]) * k1])} ${pt([p2[0] - (p3[0] - p1[0]) * k2, p2[1] - (p3[1] - p1[1]) * k2])} ${pt(p2)}`;
  }
  return closed ? d + " Z" : d;
}
const P = (x, y, k) => (k === undefined ? [OX + x * S, OY + y * S] : [OX + x * S, OY + y * S, k]);
const pts = (list) => list.map(([x, y, k]) => P(x, y, k));
const shape = (list) => spline(pts(list));
const R = (p) => [r(p[0]), r(p[1])];

/* ---------- skull: one "C"-shaped bony section (outer table → face → skull base → inner table), open at the foramen magnum ---------- */
const OUTER = [
  [-31, 60, 0.5], [-34, 64.5], [-48, 63], [-66, 56], [-84, 42], [-92, 30, 0.6], [-100, 10], [-99, -12], [-86, -40], [-62, -64], [-28, -80], [8, -83],
  [42, -76], [70, -58], [88, -30], [94, 0], [93, 22], [88, 36, 0.5], [96, 50], [99.5, 55, 0.6], [92, 59], [90, 67], [97, 71, 0.6], [94, 80], [96.5, 89, 0.5],
  [88, 90.5], [70, 87.5], [50, 86], [36, 82], [31, 70], [29, 58], [24, 50], [14, 55], [5.5, 60.5, 0.5], [2, 56.5, 0.5]
];
const INNER = [   // clivus → sella → anterior fossa → vault inner table → posterior fossa (basion → opisthion)
  [10, 46], [18, 36], [23, 29, 0.5], [27, 35], [32, 35.5], [36, 30, 0.5], [48, 29], [62, 30], [74, 28], [80, 24], [85, 10], [85.5, -5], [80, -28], [64, -52],
  [40, -68], [8, -75], [-26, -72], [-56, -57], [-78, -35], [-91, -10], [-92, 10], [-86, 26, 0.6], [-76, 38], [-60, 48], [-44, 54], [-34, 56]
];
const MANDIBLE = [[92.5, 92.5], [95.5, 100], [93, 112], [89, 124, 0.6], [78, 129], [56, 124], [36, 118], [24, 113, 0.5], [18, 98], [17, 80], [19, 64, 0.6], [24, 60, 0.6], [26, 68], [25.5, 82], [30, 94], [44, 96], [64, 95], [84, 93.5]];
const C_SPINE = [
  [[0, 65.5, 0.6], [6, 64.5, 0.6], [8.6, 74], [16, 79], [16.6, 96], [17.6, 101, 0.5], [-2, 101, 0.5], [-3, 92], [-3.4, 80], [-1.4, 72]],   // C2 body & dens
  [[11, 66.4, 0.6], [17.4, 65.6, 0.6], [19, 70.4], [17.6, 75.6, 0.6], [11.4, 75.4, 0.6], [10.4, 71]],                                   // C1 anterior arch
  [[-30, 67, 0.6], [-46, 66, 0.6], [-48.6, 70.4], [-46, 74.6, 0.6], [-30, 74, 0.6], [-27, 70.6]],                                       // C1 posterior arch (section)
  [[-26, 84, 0.6], [-46, 85.4, 0.6], [-52, 92], [-48, 98.6, 0.6], [-28, 96, 0.6], [-24, 90]],                                         // C2 spinous process
  [[-3, 106, 0.5], [17.8, 106, 0.5], [18, 122, 0.5], [-3, 122, 0.5]]                                                                // C3 body
];
const CSF = [...INNER, [-29, 57.5], [-22, 66, 0], [-2, 66, 0], [2, 56.5]];

/* ---------- brain ---------- */
const CEREBRUM = [
  [81, 4], [78.5, 21], [66, 25], [50, 25], [38, 22], [27, 18], [15, 11], [2, 6], [-12, 7], [-24, 9], [-40, 13], [-58, 17], [-74, 18], [-84, 12],
  [-88, 0, 0.8], [-84.5, -28], [-56, -53], [-24, -67.5], [8, -71], [38, -64.5], [62, -48.5], [77, -26], [82, -8]
];
const CALLOSUM = [[33, -6], [30, -19], [14, -29.5], [-8, -31], [-26, -25], [-36.5, -13.5], [-34, -4.5, 0.6], [-26, -9], [-14, -19], [5, -21.5], [21, -16.5], [27, -8], [24, -2.5, 0.6]];
const CEREBELLUM = [[-28, 21], [-42, 18], [-60, 22], [-76, 26], [-84, 33], [-79, 43], [-64, 50.5], [-48, 53], [-35, 50], [-26, 41], [-24, 31]];
const BRAINSTEM = [[5, 5], [8, 16], [14.5, 24], [17, 32], [14, 41], [6, 48], [0, 57], [-4.5, 72, 0], [-16.5, 72, 0], [-17.5, 58], [-18, 46], [-19, 36], [-17.5, 24], [-14, 14], [-9, 5]];
const SKIN = [
  [-62, 160, 0], [-60, 110], [-62, 76], [-90, 50], [-102, 34], [-107, 10], [-105, -16], [-92, -46], [-66, -71], [-30, -87.5], [8, -90], [46, -82], [76, -63],
  [95, -32], [101, 0], [99, 26], [95, 38], [104, 56], [112, 68, 0.6], [101, 72], [103, 82], [101, 90], [104, 98], [100, 106], [99, 122], [94, 133, 0.6],
  [78, 138], [62, 146], [58, 160, 0]
];

export default {
  id: "head-brain",
  viewBox: [0, 0, 800, 450],
  directions: { anterior: [1, 0], posterior: [-1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1], lateral: "out", medial: "in", up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] },
  backdrop: [{ d: shape(SKIN), fill: "skin", opacity: 0.38 }],
  structures: {
    csf: { type: "space", d: shape(CSF), visible: true, z: 1, label: R(P(-60, -62)) },
    skull: { type: "bone", d: shape([...OUTER, ...INNER]) + " " + shape(MANDIBLE), z: 2, label: R(P(30, -79)) },
    cervicalSpine: { type: "bone", d: C_SPINE.map(shape).join(" "), z: 2, label: R(P(7, 90)) },
    spinalCordContext: { type: "nerve", points: pts([[-10.5, 68], [-12, 90], [-13, 125], [-14, 160]]).map(R), width: 16, z: 2.5 },
    tentoriumContext: { type: "fascia", points: pts([[-87, 24], [-72, 20], [-52, 16], [-34, 14], [-22, 14]]).map(R), width: 2.5, z: 2.6 },
    brain: { type: "brain", d: shape(CEREBRUM), z: 3, label: R(P(30, -40)) },
    cerebellum: { type: "brain", d: shape(CEREBELLUM), z: 3, label: R(P(-55, 37)) },
    brainstem: { type: "brain", d: shape(BRAINSTEM), z: 3.1, label: R(P(0, 30)) },
    corpusCallosum: { type: "brain", d: shape(CALLOSUM), z: 3.2, label: R(P(0, -25)) }
  },
  anchors: {
    frontalPole: R(P(78, 0)), occipitalPole: R(P(-85, -2)), coupSite: R(P(80, -4)), contrecoupSite: R(P(-87, -4)),
    brainstemUpper: R(P(-3, 14)), corpusCallosumMid: R(P(-2, -25)), foreheadImpact: R(P(99, -16)), chinImpact: R(P(92, 134)),
    occiputImpact: R(P(-106, 8)), templeImpact: R(P(58, 4)), centreOfMass: R(P(-4, -18))
  }
};
