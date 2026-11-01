/**
 * Scene: inner-ear — RIGHT vestibular labyrinth, LATERAL view (stylised, slightly oblique so all three canals open up).
 *   - ANTERIOR = screen RIGHT, POSTERIOR = screen LEFT, superior = up; lateral = toward the viewer ("out"),
 *     medial (internal acoustic meatus) = away ("in").
 *   - Membranous labyrinth (endolymph spaces, drawn visible) inside a pale bony labyrinth:
 *       utricle (centre) with its macula on the floor — the normal home of the otoconia;
 *       saccule (anteroinferior) → cochlear duct (≈2.5 turns, anterior);
 *       anterior (superior) canal arching up, ampulla at its anterior end;
 *       posterior canal hanging posteroinferiorly — the most gravity-dependent canal, ampulla at its inferior end,
 *         long (non-ampullary) arm rising to the common crus it shares with the anterior canal;
 *       lateral (horizontal) canal projecting posterolaterally (foreshortened ellipse), ampulla anterior, beside
 *         the anterior ampulla. The three canals are mutually orthogonal.
 *   - Vestibular nerve leaves medially toward the internal acoustic meatus (drawn behind the labyrinth).
 *   - BPPV: `scatter` otoconia `to: "posteriorCanalLongArm"` (or the ampulla) — particles fall under gravity.
 * Pixel units (≈ 22 px/mm).
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
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
const rad = (a) => (a * Math.PI) / 180;
/** points on an ellipse arc (angles in degrees, screen convention y down), centre c, radii a/b, rotation rot */
const arc = (c, a, b, from, to, n = 24, rot = 0) => { const out = []; for (let i = 0; i <= n; i++) { const t = rad(from + ((to - from) * i) / n), x = a * Math.cos(t), y = b * Math.sin(t), q = rad(rot); out.push([c[0] + x * Math.cos(q) - y * Math.sin(q), c[1] + x * Math.sin(q) + y * Math.cos(q)]); } return out; };
/** closed outline of a tube along centreline C with half-width hw(i) (rounded ends) */
function tube(C, hw) {
  const n = C.length, L = [], Rr = [], h = typeof hw === "function" ? hw : () => hw;
  for (let i = 0; i < n; i++) {
    const a = C[Math.max(0, i - 1)], b = C[Math.min(n - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1, nx = -dy / l, ny = dx / l, w = h(i / (n - 1));
    L.push([C[i][0] + nx * w, C[i][1] + ny * w]); Rr.push([C[i][0] - nx * w, C[i][1] - ny * w]);
  }
  const end = (p, q, c) => [(p[0] + q[0]) / 2 + (c[0] - (p[0] + q[0]) / 2) * 0, (p[1] + q[1]) / 2];
  return spline([...L, ...Rr.reverse()].map((p, i, arr) => (i === n - 1 || i === n || i === 0 || i === arr.length - 1 ? [...p, 0.6] : p)));
}
const R = (p) => [r(p[0]), r(p[1])];
const lerp = (a, b, t) => a + (b - a) * t;
const ampW = (base, amp, at, span = 0.18) => (u) => base + (amp - base) * Math.max(0, 1 - Math.abs(u - at) / span) ** 0.8;

/* ---------- centrelines ---------- */
const ANT = arc([388, 118], 76, 78, 52, -218, 40);                        // anterior canal: ampulla (front, lower) → over the top → common crus
const POST = [...arc([300, 238], 74, 76, -72, -300, 44), [352, 284], [370, 262]];   // posterior canal: crus top → back → bottom → ampulla → vestibule
const CRUS = [[326, 166], [334, 190], [346, 212]];
const LAT = [[412, 206], ...arc([318, 220], 64, 26, -12, -298, 40)];          // lateral canal: ampulla (front) → top → back → bottom → posterior limb
const coch = (() => { const c = [548, 312], r0 = 70, k = 0.0846, out = []; for (let i = 0; i <= 90; i++) { const th = (i / 90) * 5 * Math.PI, rr = r0 * Math.exp(-k * th), a = rad(200) + th; out.push([c[0] + rr * Math.cos(a), c[1] + rr * Math.sin(a)]); } return out; })();
const cochW = (u) => 0.33 * 70 * Math.exp(-0.0846 * u * 5 * Math.PI) / 2;

const posteriorCanal = tube([...CRUS.slice().reverse(), ...POST.slice(1)], (u) => (u > 0.86 ? lerp(6, 13, Math.min(1, (u - 0.86) / 0.07)) : 6));
const anteriorCanal = tube(ANT, ampW(6, 13, 0.02, 0.1));
const lateralCanal = tube(LAT, ampW(6, 13, 0.04, 0.1));
const cochlea = tube([[466, 286], [478, 288], ...coch], (u) => Math.max(5, cochW(u) * 1.05));
const bony = (C, w) => tube(C, w);

export default {
  id: "inner-ear",
  viewBox: [0, 0, 800, 450],
  directions: { anterior: [1, 0], posterior: [-1, 0], superior: [0, -1], inferior: [0, 1], lateral: "out", medial: "in", up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] },
  backdrop: [{ d: spline([[150, 70], [300, 18], [520, 40], [660, 150], [668, 330], [560, 425], [330, 430], [168, 360], [140, 210]]), fill: "skin", opacity: 0.35 }],
  structures: {
    bonyLabyrinthContext: { type: "bone", d: [bony(ANT, 13), bony([...CRUS.slice().reverse(), ...POST.slice(1)], 13), bony(LAT, 13), bony([[466, 286], [478, 288], ...coch], (u) => Math.max(10, cochW(u) * 1.05 + 7))].join(" ") + " " + spline([[340, 200], [372, 190], [430, 188], [462, 214], [470, 262], [452, 304], [410, 310], [366, 290], [338, 252]]), z: 0.5 },
    vestibularNerve: { type: "nerve", points: [[404, 232], [450, 220], [500, 206], [560, 192], [640, 176], [700, 166]], width: 12, z: 0.8, label: [600, 184] },
    cochlearNerveContext: { type: "nerve", points: [[548, 312], [570, 268], [600, 222], [640, 186]], width: 9, z: 0.7 },
    singularNerveContext: { type: "nerve", points: [[358, 270], [400, 262], [452, 232], [500, 208]], width: 5, z: 0.75 },
    cochlea: { type: "space", d: cochlea, visible: true, z: 2, label: [560, 300] },
    saccule: { type: "space", d: spline([[422, 268], [446, 262], [462, 276], [458, 298], [436, 304], [418, 290]]), visible: true, z: 2.2, label: [440, 284] },
    posteriorCanal: { type: "space", d: posteriorCanal, visible: true, z: 2.2, label: R(POST[24]) },
    anteriorCanal: { type: "space", d: anteriorCanal, visible: true, z: 2.2, label: R(ANT[20]) },
    lateralCanal: { type: "space", d: lateralCanal, visible: true, z: 2.4, label: R(LAT[22]) },
    utricle: { type: "space", d: spline([[350, 222], [366, 204], [400, 198], [432, 206], [446, 226], [436, 248], [400, 256], [364, 250]]), visible: true, z: 2.5, label: [398, 222] },
    otoconia: { type: "particles", cx: 398, cy: 244, r: 5, count: 12, z: 3 }
  },
  anchors: {
    utricleMacula: [398, 246], posteriorCanalAmpulla: R(POST[POST.length - 2]), posteriorCanalLongArm: R(POST[16]),
    commonCrus: [332, 186], lateralCanalArm: R(LAT[20])
  }
};
