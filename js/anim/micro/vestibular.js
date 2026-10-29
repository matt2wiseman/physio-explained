/**
 * Micro module: VESTIBULAR — otoconia in the posterior semicircular canal (BPPV, canalithiasis). OWNER: A9.
 * View: the posterior canal in its own plane (patient's right side, anterior to the left). Bony labyrinth → perilymph →
 * membranous duct filled with endolymph. The canal's ampulla (crista + gelatinous cupula) opens into the utricle, whose
 * macula carries hair cells under an otolithic membrane studded with otoconia (CaCO₃ crystals); the canal's other end
 * joins the utricle through the common crus. Gravity is fixed (screen-down); the labyrinth rotates with the head
 * (head-position icon top-right).
 *   healthy → dislodged (otoconia break free from the macula) → canal-migration (debris enters the canal through the
 *   common crus and settles in its most dependent part, near the cupula) → head-movement (Dix–Hallpike: head brought
 *   back into the plane of the canal; crystals start to roll after a short latency) → endolymph-drag (falling crystals
 *   drag endolymph away from the ampulla, deflecting the cupula → hair cells fire → upbeating torsional nystagmus and
 *   vertigo that fade as the crystals settle) → repositioned (a repositioning manoeuvre such as the Epley rolls the
 *   crystals round the canal and out through the common crus back into the utricle).
 */
import { el, rng, lerp, clamp, ease, fade, seg, wave, col, mix, field, label, arrow, dashedArrow, smoothPath, f } from "./index.js";

const ORDER = ["healthy", "dislodged", "canal-migration", "head-movement", "endolymph-drag", "repositioned"];
const RC = [480, 210], R = 120, TH0 = 150, SWEEP = 255;          // canal arc: u = 0 at the ampulla (150°) → u = 1 at the crus end (−105°)
const UT = [300, 262], URX = 74, URY = 44;                        // utricle (local)
const deg = Math.PI / 180;
const canalPt = (u, off = 0) => { const a = (TH0 - u * SWEEP) * deg; return [RC[0] + Math.cos(a) * (R + off), RC[1] + Math.sin(a) * (R + off)]; };
const canalPath = (u0 = -0.02, u1 = 1) => { const pts = []; for (let i = 0; i <= 40; i++) pts.push(canalPt(lerp(u0, u1, i / 40))); return pts; };
const CRUS = [canalPt(1), [404, 108], [344, 150], [310, 222]];
const AMP = canalPt(0.0);
const AMP_T = [Math.sin(TH0 * deg), -Math.cos(TH0 * deg)];         // canal direction (towards u+) at the ampulla
const AMP_N = [Math.cos(TH0 * deg), Math.sin(TH0 * deg)];          // radial outward at the ampulla

const G = (() => {
  const r = rng("vest-geo");
  const oto = Array.from({ length: 16 }, (_, i) => ({ x: UT[0] - 40 + (i / 15) * 80 + (r() - 0.5) * 4, a: r() * 180, s: 0.8 + r() * 0.5, free: i % 2 === 0 && i > 1 && i < 15, j: r(), k: r() }));
  const free = oto.filter((o) => o.free);
  return { oto, free };
})();
const maculaY = (x) => UT[1] + URY * 0.62 - 0.0005 * (x - UT[0]) ** 2 * 6;

/* ---------- stage state */
function phiRepos(p) {
  const K = [[0, 90], [0.08, 90], [0.28, 180], [0.4, 180], [0.58, 270], [0.7, 270], [0.9, 360], [1, 360]];
  for (let i = 1; i < K.length; i++) if (p <= K[i][0]) return lerp(K[i - 1][1], K[i][1], ease((p - K[i - 1][0]) / (K[i][0] - K[i - 1][0] || 1)));
  return 360;
}
function params(stage, p) {
  const s = { phi: 0, det: 0, route: 0, u: null, q: null, cup: 0, flow: 0, eye: 0, mode: "macula" };
  switch (stage) {
    case "dislodged": Object.assign(s, { det: ease(seg(p, 0, 0.8)), mode: "float" }); break;
    case "canal-migration": Object.assign(s, { det: 1, route: ease(seg(p, 0, 0.9)), mode: "route" }); break;
    case "head-movement": Object.assign(s, { phi: 90 * ease(seg(p, 0, 0.8)), u: 0.235 + 0.05 * fade(0.65, 1, p), mode: "canal" }); break;
    case "endolymph-drag": {
      const k = ease(p, "out");
      const cup = Math.sin(Math.PI * clamp(p * 1.12)) * (p < 0.08 ? p / 0.08 : 1);
      Object.assign(s, { phi: 90, u: lerp(0.285, 0.575, k), cup, flow: cup, eye: cup, mode: "canal" });
      break;
    }
    case "repositioned": {
      const phi = phiRepos(p), lag = phiRepos(Math.max(0, p - 0.05));
      const q = lag <= 195 ? clamp((lag - 90) / 105) * 1 : 1 + clamp((lag - 195) / 45);
      Object.assign(s, { phi, q, mode: lag >= 240 ? "utricle" : "repos" });
      s.settle = clamp((lag - 240) / 80);
      break;
    }
    default: break;
  }
  return s;
}

/* ---------- transform: rotate the labyrinth with the head and fit it in the frame */
function makeXf(phi) {
  const a = phi * deg, c = Math.cos(a), sn = Math.sin(a);
  const rot = ([x, y]) => [c * (x - RC[0]) - sn * (y - RC[1]), sn * (x - RC[0]) + c * (y - RC[1])];
  const Rr = R + 24, Ru = Math.max(URX, URY) + 16, [ux, uy] = rot(UT);
  const x0 = Math.min(-Rr, ux - Ru), x1 = Math.max(Rr, ux + Ru), y0 = Math.min(-Rr, uy - Ru), y1 = Math.max(Rr, uy + Ru);
  const sc = Math.min(1, 292 / (y1 - y0), 540 / (x1 - x0));
  const tx = 410 - sc * (x0 + x1) / 2, ty = 216 - sc * (y0 + y1) / 2;
  const T = (pt) => { const [x, y] = rot(pt); return [tx + sc * x, ty + sc * y]; };
  return { T, transform: `translate(${f(tx)},${f(ty)}) rotate(${f(phi)}) scale(${f(sc * 1000) / 1000}) translate(${-RC[0]},${-RC[1]})`, sc };
}

/* ---------- crystal positions (local coordinates) */
function crystals(s, p) {
  const out = [];
  const route = (w, i) => {        // utricle float → crus → canal (u 1 → 0.235)
    const r = rng("rt" + i);
    const start = [UT[0] - 20 + r() * 40, UT[1] - 8 - r() * 16];
    if (w < 0.25) return lerp2(start, [310, 222], w / 0.25);
    if (w < 0.5) return along(CRUS.slice().reverse(), (w - 0.25) / 0.25);
    return canalPt(lerp(1, 0.235, (w - 0.5) / 0.5) + (i - 3.5) * 0.008, (r() - 0.5) * 9);
  };
  G.free.forEach((o, i) => {
    const r = rng("cr" + i), jit = (r() - 0.5) * 9, du = (i - 3.5) * 0.009;
    if (s.mode === "macula") return;
    if (s.mode === "float") {
      const x = o.x + (r() - 0.5) * 30 * s.det, y = lerp(maculaY(o.x) - 6, UT[1] - 10 - r() * 14, s.det) + Math.sin(p * 6 + i) * 2 * s.det;
      out.push([x, y, o]);
    } else if (s.mode === "route") {
      out.push([...route(clamp(s.route * 1.08 - i * 0.012), i), o]);
    } else if (s.mode === "canal") out.push([...canalPt(s.u + du, jit), o]);
    else if (s.mode === "repos") {
      if (s.q <= 1) out.push([...canalPt(lerp(0.575, 1, s.q) + du * (1 - s.q), jit), o]);
      else out.push([...along(CRUS, clamp((s.q - 1) + i * 0.02)), o]);
    } else {
      const target = [UT[0] - 24 + i * 8, UT[1] + URY * 0.35 + (i % 2) * 4];
      out.push([...lerp2([310, 226], target, ease(s.settle ?? 1)), o]);
    }
  });
  return out;
}
const lerp2 = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];
function along(pts, t) {
  const L = [0]; for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const d = clamp(t) * L[L.length - 1]; let i = 1; while (i < pts.length - 1 && L[i] < d) i++;
  return lerp2(pts[i - 1], pts[i], (d - L[i - 1]) / (L[i] - L[i - 1] || 1));
}

/* ---------- drawing */
function labyrinth(g, s, p) {
  const canal = smoothPath(canalPath()), crus = smoothPath(CRUS);
  const ampT = `rotate(${f(Math.atan2(AMP_T[1], AMP_T[0]) / deg)} ${f(AMP[0])} ${f(AMP[1])})`;
  const layers = [[50, mix("anat-bone", "stage-bg", 0.55)], [38, mix("anat-fluid", "stage-bg", 0.82)], [24, mix("anat-capsule", "stage-bg", 0.15)], [19, col("anat-fluid", 0.5)]];
  layers.forEach(([w, c], i) => {
    const grow = (w - 19) / 2;
    el("path", { d: canal, stroke: c, "stroke-width": w, fill: "none", "stroke-linecap": "round" }, g);
    el("path", { d: crus, stroke: c, "stroke-width": w * 0.9, fill: "none", "stroke-linecap": "round" }, g);
    el("ellipse", { cx: AMP[0], cy: AMP[1], rx: 34 + grow, ry: 30 + grow, fill: c, transform: ampT }, g);
    el("path", { d: `M${AMP[0]},${AMP[1]} L${UT[0] + URX - 20},${UT[1] + 2}`, stroke: c, "stroke-width": w * 1.1, "stroke-linecap": "round" }, g);
    el("ellipse", { cx: UT[0], cy: UT[1], rx: URX + grow, ry: URY + grow, fill: c }, g);
    void i;
  });
  // macula: hair cells + otolithic membrane + otoconia
  const mPts = []; for (let x = UT[0] - 48; x <= UT[0] + 48; x += 8) mPts.push([x, maculaY(x)]);
  el("path", { d: smoothPath(mPts), stroke: mix("anat-physis", "stage-ink", 0.3), "stroke-width": 9, fill: "none", "stroke-linecap": "round" }, g);
  for (const [x, y] of mPts) el("path", { d: `M${f(x)},${f(y - 3)} l0,-6 M${f(x + 2)},${f(y - 3)} l0,-5`, stroke: col("stage-ink", 0.6), "stroke-width": 0.8 }, g);
  el("path", { d: smoothPath(mPts.map(([x, y]) => [x, y - 10])), stroke: col("anat-nucleus", 0.75), "stroke-width": 6, fill: "none", "stroke-linecap": "round" }, g);
  G.oto.forEach((o) => { if (o.free && s.mode !== "macula") return; crystal(g, o.x, maculaY(o.x) - 15, o, 1); });
  // crista + cupula in the ampulla
  const base = [AMP[0] + AMP_N[0] * 27, AMP[1] + AMP_N[1] * 27];
  el("ellipse", { cx: base[0], cy: base[1], rx: 12, ry: 7, fill: mix("anat-physis", "stage-ink", 0.3), transform: `rotate(${f(Math.atan2(AMP_T[1], AMP_T[0]) / deg)} ${f(base[0])} ${f(base[1])})` }, g);
  const tip = [AMP[0] - AMP_N[0] * 26 + AMP_T[0] * 22 * s.cup, AMP[1] - AMP_N[1] * 26 + AMP_T[1] * 22 * s.cup];
  const mid = [AMP[0] + AMP_T[0] * 12 * s.cup, AMP[1] + AMP_T[1] * 12 * s.cup];
  const wv = [AMP_T[0] * 7, AMP_T[1] * 7];
  el("path", { d: `M${f(base[0] - wv[0])},${f(base[1] - wv[1])} Q${f(mid[0] - wv[0])},${f(mid[1] - wv[1])} ${f(tip[0] - wv[0] * 0.4)},${f(tip[1] - wv[1] * 0.4)} L${f(tip[0] + wv[0] * 0.4)},${f(tip[1] + wv[1] * 0.4)} Q${f(mid[0] + wv[0])},${f(mid[1] + wv[1])} ${f(base[0] + wv[0])},${f(base[1] + wv[1])} Z`,
    fill: mix("anat-nucleus", "stage-ink", 0.55, 0.92), stroke: s.cup > 0.15 ? col("fx-force") : col("stage-bg", 0.7), "stroke-width": s.cup > 0.15 ? 2 : 1.4 }, g);
  for (let k = -1; k <= 1; k++) el("path", { d: `M${f(base[0] + AMP_T[0] * k * 5)},${f(base[1] + AMP_T[1] * k * 5)} l${f(-AMP_N[0] * 9 + AMP_T[0] * 4 * s.cup)},${f(-AMP_N[1] * 9 + AMP_T[1] * 4 * s.cup)}`, stroke: col("stage-ink", 0.75), "stroke-width": 1 }, g);
  // hair-cell firing burst when the cupula is deflected away from the utricle (excitatory for the posterior canal)
  if (s.cup > 0.15) el("circle", { cx: base[0], cy: base[1], r: 12 + 8 * wave(p, 6), fill: "none", stroke: col("fx-force", 0.8 * s.cup), "stroke-width": 2.4 }, g);
  // endolymph drag arrows
  if (s.flow > 0.05) for (const [u0, u1] of [[0.07, 0.17], [0.36, 0.5], [0.62, 0.74]]) {
    const [x1, y1] = canalPt(u0), [x2, y2] = canalPt(u1);
    dashedArrow(g, x1, y1, x2, y2, { color: col("stage-bg", 0.85), width: 2.6, head: 10, opacity: s.flow, bend: -10 });
  }
  // crystals
  crystals(s, p).forEach(([x, y, o]) => crystal(g, x, y, o, 1, true));
}
function crystal(g, x, y, o, op = 1, free = false) {
  if (free) el("circle", { cx: x, cy: y, r: 7, fill: col("fx-highlight", 0.25) }, g);
  const w = 6.2 * o.s, h = 4 * o.s;
  el("path", { d: `M${f(x - w)},${f(y)} L${f(x - w * 0.3)},${f(y - h)} L${f(x + w)},${f(y - h * 0.2)} L${f(x + w * 0.3)},${f(y + h)} Z`, fill: mix("anat-bone", "stage-ink", 0.55), stroke: col("anat-bone-edge"), "stroke-width": 0.8, transform: `rotate(${f(o.a)} ${f(x)} ${f(y)})`, opacity: op < 1 ? op : undefined }, g);
}

function headIcon(g, phi, stage) {
  const cx = 730, cy = 106;
  el("rect", { x: 668, y: 58, width: 122, height: 104, rx: 8, fill: col("stage-caption-bg"), stroke: col("stage-ink", 0.15) }, g);
  const h = el("g", { transform: `rotate(${f(phi)} ${cx} ${cy})` }, g);
  el("circle", { cx, cy, r: 24, fill: mix("fig-skin", "stage-bg", 0.35), stroke: col("fig-skin"), "stroke-width": 1.5 }, h);
  el("path", { d: `M${cx - 23},${cy - 4} L${cx - 31},${cy + 3} L${cx - 22},${cy + 6} Z`, fill: mix("fig-skin", "stage-bg", 0.35), stroke: col("fig-skin"), "stroke-width": 1.2 }, h);
  el("circle", { cx: cx - 13, cy: cy - 6, r: 2.2, fill: col("stage-ink") }, h);
  el("ellipse", { cx: cx + 4, cy: cy + 2, rx: 4, ry: 6, fill: "none", stroke: col("fig-skin"), "stroke-width": 1.2 }, h);
  const name = stage === "head-movement" || stage === "endolymph-drag" ? "Dix–Hallpike" : stage === "repositioned" ? "Epley manoeuvre" : "Upright";
  el("text", { x: cx, y: 152, "text-anchor": "middle", "font-size": 11.5, fill: col("stage-ink", 0.85), text: name }, g);
}
function gravity(g) {
  el("path", { d: "M34,70 L34,104", stroke: col("stage-ink-2"), "stroke-width": 2 }, g);
  el("path", { d: "M28,98 L34,108 L40,98", stroke: col("stage-ink-2"), "stroke-width": 2, fill: "none" }, g);
  el("text", { x: 44, y: 94, "font-size": 12, fill: col("stage-ink-2"), "font-style": "italic", text: "gravity" }, g);
}
function eyePanel(g, k, p) {
  if (k <= 0.02) return;
  const gg = el("g", { opacity: f(clamp(k * 2)) }, g);
  el("rect", { x: 18, y: 296, width: 222, height: 72, rx: 8, fill: col("stage-caption-bg"), stroke: col("stage-ink", 0.15) }, gg);
  const cx = 62, cy = 330;
  el("path", { d: `M${cx - 30},${cy} Q${cx},${cy - 22} ${cx + 30},${cy} Q${cx},${cy + 22} ${cx - 30},${cy} Z`, fill: mix("stage-ink", "stage-bg", 0.15), stroke: col("stage-ink", 0.6) }, gg);
  const saw = (p * 7) % 1, dy = saw < 0.85 ? lerp(-5, 4, saw / 0.85) : lerp(4, -5, (saw - 0.85) / 0.15);
  el("circle", { cx, cy: cy + dy * k, r: 10, fill: mix("anat-vein", "stage-bg", 0.2) }, gg);
  el("circle", { cx, cy: cy + dy * k, r: 4, fill: col("stage-bg") }, gg);
  el("path", { d: `M${cx + 38},${cy + 14} A16,16 0 0 0 ${cx + 38},${cy - 14}`, stroke: col("fx-highlight"), "stroke-width": 2, fill: "none" }, gg);
  el("path", { d: `M${cx + 33},${cy - 16} L${cx + 39},${cy - 15} L${cx + 37},${cy - 9}`, stroke: col("fx-highlight"), "stroke-width": 2, fill: "none" }, gg);
  el("text", { x: 120, y: 324, "font-size": 12, fill: col("stage-ink"), "font-weight": 600, text: "Nystagmus:" }, gg);
  el("text", { x: 120, y: 340, "font-size": 12, fill: col("stage-ink", 0.85), text: "upbeat, torsional" }, gg);
  el("text", { x: 120, y: 356, "font-size": 12, fill: col("stage-ink", 0.85), text: "+ vertigo" }, gg);
}

function labels(g, stage, s, p, X) {
  const L = (x, y, text, to, o = {}) => label(g, x, y, text, { to: to && X.T(to), ...o });
  const cr = crystals(s, p);
  const c0 = cr.length ? [cr[Math.floor(cr.length / 2)][0], cr[Math.floor(cr.length / 2)][1]] : null;
  switch (stage) {
    case "healthy": {
      const a = fade(0.52, 0.45, p), b = fade(0.45, 0.52, p);
      L(790, 236, "Semicircular canal\n(endolymph)", canalPt(0.55, 6), { anchor: "end", opacity: a });
      L(18, 150, "Ampulla with\ncrista & cupula", [AMP[0] + AMP_N[0] * 6, AMP[1] + AMP_N[1] * 6], { opacity: a });
      L(18, 362, "Utricle: otoconia on\nthe macula", [UT[0] - 10, maculaY(UT[0] - 10) - 15], { opacity: a });
      L(790, 236, "Bony labyrinth\n& perilymph", canalPt(0.5, 22), { anchor: "end", opacity: b });
      L(18, 150, "Common crus", CRUS[2], { opacity: b });
      L(18, 362, "Hair cells under the\notolithic membrane", [UT[0] + 30, maculaY(UT[0] + 30) - 2], { opacity: b });
      break;
    }
    case "dislodged":
      L(18, 362, "Otoconia break free\nfrom the macula", c0, { opacity: fade(0.2, 0.45, p) });
      break;
    case "canal-migration":
      L(790, 300, "Debris enters the canal and\nsettles at its lowest point", c0, { anchor: "end", opacity: fade(0.5, 0.75, p) });
      L(18, 150, "via the common crus", CRUS[1], { opacity: fade(0.15, 0.35, p) * fade(0.8, 0.6, p) });
      break;
    case "head-movement":
      L(790, 300, "Head moved into the\nplane of the canal", null, { anchor: "end", opacity: fade(0.1, 0.3, p) });
      L(790, 350, "Crystals roll after a\nshort latency", c0, { anchor: "end", opacity: fade(0.7, 0.85, p) });
      break;
    case "endolymph-drag":
      L(790, 236, "Crystals drag endolymph\naway from the ampulla", c0, { anchor: "end", opacity: fade(0.05, 0.25, p) });
      L(790, 330, "Cupula deflects:\nhair cells fire", [AMP[0], AMP[1]], { anchor: "end", opacity: fade(0.25, 0.45, p) });
      break;
    case "repositioned":
      L(790, 236, "Crystals rolled round\nthe canal", c0 && s.q !== null && s.q < 1 ? c0 : null, { anchor: "end", opacity: fade(0.1, 0.3, p) * fade(0.62, 0.5, p) });
      L(790, 236, "Back in the utricle", c0, { anchor: "end", opacity: fade(0.75, 0.9, p) });
      break;
    default: break;
  }
}

export default {
  id: "vestibular",
  scale: "≈ 1 mm",
  labels: { dislodged: "Otoconia dislodged", "endolymph-drag": "Endolymph drag → cupula", repositioned: "Repositioned" },
  render(g, { stage, progress = 0 }) {
    const p = clamp(progress);
    const s = params(ORDER.includes(stage) ? stage : "healthy", p);
    field(g, { tint: "anat-fluid", tintAmount: 0.05 });
    const X = makeXf(s.phi % 360);
    const lab = el("g", { transform: X.transform }, g);
    labyrinth(lab, s, p);
    gravity(g);
    headIcon(g, s.phi, stage);
    eyePanel(g, s.eye, p);
    labels(g, stage, s, p, X);
  }
};
