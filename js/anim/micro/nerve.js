/**
 * Micro module: PERIPHERAL NERVE (compression → neurapraxia → axonotmesis → Wallerian degeneration → regeneration). OWNER: A9.
 * Layout: LEFT  = transverse section (epineurium with vasa nervorum & fat, fascicles wrapped in perineurium, myelinated axons).
 *         RIGHT = longitudinal view of one fascicle, proximal (left) → distal (right); lesion at x = LX.
 *   healthy           myelinated axons: Schwann-cell internodes, nodes of Ranvier, saltatory impulse; vasa nervorum perfusing
 *   compression       external pressure narrows the nerve (hour-glass); fascicles flatten in the transverse section
 *   ischaemia         venules occlude first → venous congestion, intraneural oedema, impaired intraneural blood flow
 *   demyelination     focal paranodal myelin loss under the compression; axon intact; impulse blocked (neurapraxia)
 *   axonal-injury     axons divide at the lesion, endoneurial tubes / perineurium preserved (axonotmesis)
 *   wallerian-degen.  distal axon & myelin break into ovoids; macrophages clear debris; Schwann cells form bands of Büngner
 *   regeneration      growth cones advance along the Schwann tubes (~1 mm/day); new, thinner myelin with short internodes
 */
import { el, rng, lerp, clamp, ease, fade, seg, col, mix, field, label, arrow, drawCell, capillary, smoothPath, linear, radial, def, f } from "./index.js";

/* ---------------- geometry */
const AX = 150, AY = 228, AR = 100;                       // transverse section
const BX0 = 286, BX1 = 812, CY = 222, LX = 522;            // longitudinal panel
const EPI = [100, 344], PERI = [124, 320], AXONS = [172, 222, 272];
const H = 14, AH = 4, INL = 118, GAP = 9, PITCH = INL + GAP, OFF = [8, 70, 38];
const ORDER = ["healthy", "compression", "ischaemia", "demyelination", "axonal-injury", "wallerian-degeneration", "regeneration"];

const FASC = [[-40, -36, 32], [38, -38, 30], [-44, 36, 30], [34, 38, 34], [0, 0, 16]];
const ART = [[-82, 14, 5.5], [72, 0, 5.5], [-6, 74, 5.5]], VEN = [[-88, -12, 7], [6, -80, 7]];
const FAT = [[60, -70, 6], [82, 40, 6], [-60, 68, 5]];
const G = (() => {
  const r = rng("nerve-geo");
  const dots = FASC.map(([, , rad]) => {
    const out = [], s = 8.2;
    for (let y = -rad, row = 0; y <= rad; y += s * 0.866, row++) for (let x = -rad + (row % 2) * s * 0.5; x <= rad; x += s) {
      const d = Math.hypot(x, y); if (d < rad - 4.5) out.push({ x: x + (r() - 0.5) * 1.6, y: y + (r() - 0.5) * 1.6, r1: r(), r2: r(), a: r() * 180, edge: d / rad });
    }
    return out;
  });
  const internodes = AXONS.map((yc, i) => {
    const list = []; for (let x = OFF[i] - PITCH; x < BX1 + 10; x += PITCH) if (x + INL > BX0 - 20) list.push({ x0: x, x1: x + INL, k: list.length, j: r() });
    return list;
  });
  const macros = [[592, 172], [668, 222], [742, 272], [612, 272], [716, 172], [784, 222]].map(([x, y]) => ({ x, y, s: r() }));
  return { dots, internodes, macros };
})();

/* ---------------- stage parameters (cumulative state; p = progress 0–1) */
function params(stage, p) {
  const s = { comp: 0, isch: 0, demy: 0, cut: 0, wall: 0, clear: 0, regen: 0, flow: 1, distal: 0 };
  switch (stage) {
    case "compression": s.comp = lerp(0.15, 1, ease(seg(p, 0, 0.75))); s.flow = lerp(1, 0.75, p); break;
    case "ischaemia": s.comp = 1; s.isch = lerp(0.1, 1, fade(0, 0.8, p)); s.flow = lerp(0.7, 0.12, p); break;
    case "demyelination": Object.assign(s, { comp: 1, isch: lerp(0.9, 0.7, p), demy: lerp(0.08, 1, fade(0, 0.75, p)), flow: 0.2 }); break;
    case "axonal-injury": Object.assign(s, { comp: lerp(1, 0.85, p), isch: 0.7, demy: 1, cut: lerp(0.1, 1, fade(0, 0.6, p)), flow: 0.25 }); break;
    case "wallerian-degeneration": Object.assign(s, { comp: 0, isch: 0.15, demy: 1, cut: 1, wall: lerp(0.35, 1, ease(p)), clear: 0.85 * fade(0.3, 1, p), flow: 0.7, distal: 1 }); break;
    case "regeneration": Object.assign(s, { comp: 0, demy: 0.5, cut: 1, wall: 1, clear: 1, regen: lerp(0.06, 1, ease(p, "linear")), flow: 1, distal: 1 }); break;
    default: break;
  }
  return s;
}

/* ---------------- colours */
const MY = () => mix("anat-nerve", "stage-ink", 0.45);            // myelin (matches drawCell "schwann")
const MYE = () => mix("anat-nerve-edge", "stage-bg", 0.2);
const AXC = () => col("anat-nerve"), AXE = () => col("anat-nerve-edge");

/* ---------------- warp (compression hour-glass) */
const squeeze = (comp, x) => comp * Math.exp(-(((x - LX) / 50) ** 2));
const W = (comp) => (x, y) => [x, CY + (y - CY) * (1 - 0.4 * squeeze(comp, x))];
function bandPath(w, xa, xb, top, bot, step = 12) {
  const T = [], B = [];
  for (let x = xa; ; x += step) { const xx = Math.min(x, xb); T.push(w(xx, top(xx))); B.push(w(xx, bot(xx))); if (xx >= xb) break; }
  return "M" + [...T, ...B.reverse()].map(([x, y]) => `${f(x)},${f(y)}`).join("L") + "Z";
}
function linePath(w, xa, xb, y, step = 14) {
  const P = []; for (let x = xa; ; x += step) { const xx = Math.min(x, xb); P.push(w(xx, typeof y === "function" ? y(xx) : y)); if (xx >= xb) break; }
  return P;
}
function capsulePath(w, x0, x1, yc, h) {
  const r = Math.min(h, (x1 - x0) / 2), pts = [];
  for (let x = x0 + r; x < x1 - r; x += 12) pts.push([x, yc - h]);
  for (let i = 0; i <= 6; i++) { const a = -Math.PI / 2 + (i / 6) * Math.PI; pts.push([x1 - r + Math.cos(a) * r, yc + Math.sin(a) * h]); }
  for (let x = x1 - r; x > x0 + r; x -= 12) pts.push([x, yc + h]);
  for (let i = 0; i <= 6; i++) { const a = Math.PI / 2 + (i / 6) * Math.PI; pts.push([x0 + r + Math.cos(a) * r, yc + Math.sin(a) * h]); }
  return "M" + pts.map((q) => w(q[0], q[1])).map(([x, y]) => `${f(x)},${f(y)}`).join("L") + "Z";
}

/* ---------------- longitudinal panel */
function longitudinal(g0, s, p, stage) {
  const w = W(s.comp);
  const clip = def(g0, "nv-clipB", (defs, id) => { const cp = el("clipPath", { id }, defs); el("rect", { x: BX0, y: 56, width: 800 - BX0, height: 394 }, cp); });
  const g = el("g", { "clip-path": clip }, g0);
  // epineurium + perineurium
  el("path", { d: bandPath(w, BX0, BX1, () => EPI[0], () => EPI[1]), fill: mix("anat-fascia", "stage-bg", 0.8), stroke: mix("anat-nerve-edge", "stage-bg", 0.35), "stroke-width": 2 }, g);
  el("path", { d: bandPath(w, BX0, BX1, () => PERI[0], () => PERI[1]), fill: mix("anat-nerve", "stage-bg", 0.86), stroke: col("anat-capsule"), "stroke-width": 3 }, g);
  el("path", { d: bandPath(w, BX0, BX1, () => PERI[0] + 4, () => PERI[1] - 4), fill: "none", stroke: col("anat-capsule", 0.45), "stroke-width": 1 }, g);
  // vasa nervorum: epineurial arteriole (top), endoneurial capillary, epineurial venule (bottom)
  const occl = s.isch, flowPh = p * 2.2 * s.flow;
  capillary(g, linePath(w, BX0, BX1, 112), { width: lerp(10, 8, occl), seed: 3, flow: flowPh, rbcs: Math.round(lerp(13, 5, occl)) });
  capillary(g, linePath(w, BX0, BX1, 142), { width: 7, seed: 4, flow: flowPh * 0.8, rbcs: Math.round(lerp(10, 2, occl)), opacity: lerp(1, 0.65, occl) });
  const venHw = (x) => 6.5 * (1 + 0.65 * occl * (x < LX - 40 ? clamp((LX - 40 - x) / 60) : 0)) * (1 - 0.75 * occl * Math.exp(-(((x - LX) / 40) ** 2)));
  el("path", { d: bandPath(w, BX0, BX1, (x) => 332 - venHw(x), (x) => 332 + venHw(x), 10), fill: mix("anat-vein", "stage-bg", 0.35), stroke: mix("anat-vein", "stage-ink", 0.25), "stroke-width": 1.2 }, g);
  const vr = rng("ven-rbc");
  for (let i = 0; i < 16; i++) {
    const u = ((i + vr() * 0.6) / 16 + flowPh * 0.6) % 1, x = lerp(BX0, BX1, u);
    if (occl > 0.3 && Math.abs(x - LX) < 34) continue;
    const [xx, yy] = w(x, 332);
    el("ellipse", { cx: xx, cy: yy, rx: 3.4, ry: 2.4, fill: mix("anat-artery", "anat-vein", 0.35 + 0.3 * occl) }, g);
  }
  // intraneural oedema
  if (s.isch > 0.02) el("ellipse", { cx: LX + 8, cy: CY, rx: 190, ry: 104, fill: radial(g, "nv-oed", [[0, col("fx-oedema")], [0.6, col("anat-fluid", 0.2)], [1, col("anat-fluid", 0)]]), opacity: f(s.isch * (1 - s.distal)) }, g);

  // axons
  AXONS.forEach((yc, ai) => {
    const nodes = G.internodes[ai];
    // myelin internodes
    nodes.forEach((n) => {
      let { x0, x1 } = n; const mid = (x0 + x1) / 2;
      const near = Math.abs(mid - LX) < 80, distalSeg = mid > LX + 4;
      if (s.regen > 0 && distalSeg) return;                         // drawn as new myelin below
      if (s.wall > 0 && distalSeg && x1 > LX + 14) {                  // Wallerian: myelin ovoids (digestion chambers)
        const keep = 1 - s.clear;
        if (keep < 0.03) return;
        const q = rng("ov" + ai + n.k);
        for (let k = 0; k < 4; k++) {
          const cx = lerp(Math.max(x0, LX + 14), x1, (k + 0.5) / 4) + (q() - 0.5) * 8, rx = lerp(INL / 8, INL / 10, s.wall) * (0.6 + 0.4 * keep), ry = H * lerp(1, 0.72, s.wall) * (0.6 + 0.4 * keep);
          el("ellipse", { cx, cy: yc + (q() - 0.5) * 5 * s.wall, rx, ry, fill: MY(), stroke: MYE(), "stroke-width": 1, opacity: f(keep) }, g);
          el("ellipse", { cx, cy: yc, rx: rx * 0.45, ry: 2.6, fill: mix("anat-nerve", "anat-nerve-edge", 0.4), opacity: f(keep * (1 - s.wall * 0.5)) }, g);
        }
        return;
      }
      let h = H, op = 1;
      if (s.demy > 0 && near) {                                        // paranodal retraction + thinning under the compression
        const k = s.demy * (1 - Math.abs(mid - LX) / 160);
        if (mid < LX) x1 -= 28 * k; else x0 += 28 * k;
        h = H * (1 - 0.62 * k); op = 1 - 0.4 * k;
      }
      if (s.cut > 0 && x1 > LX - 6 && x0 < LX + 6) { if (mid < LX) x1 = LX - 10 - 14 * s.cut; else x0 = LX + 10 + 10 * s.cut; }
      if (x1 - x0 < 8) return;
      el("path", { d: capsulePath(w, x0, x1, yc, h), fill: MY(), stroke: MYE(), "stroke-width": 1.2, opacity: op < 1 ? f(op) : undefined }, g);
      el("path", { d: smoothPath(linePath(w, x0 + h, x1 - h, yc - h * 0.55, 16)), stroke: col("anat-nerve-edge", 0.35), "stroke-width": 0.8, fill: "none" }, g);
      el("path", { d: smoothPath(linePath(w, x0 + h, x1 - h, yc + h * 0.55, 16)), stroke: col("anat-nerve-edge", 0.35), "stroke-width": 0.8, fill: "none" }, g);
      const [nx, ny] = w(mid + (n.j - 0.5) * 30, yc - h);
      el("ellipse", { cx: nx, cy: ny + 1, rx: 11, ry: 3.6, fill: mix("anat-vein", "anat-brain-deep", 0.35) }, g);
    });
    // myelin debris at a demyelinating site
    if (s.demy > 0.05 && !s.wall) {
      const q = rng("deb" + ai);
      for (let k = 0; k < 3; k++) { const [x, y] = w(LX - 16 + k * 16 + (q() - 0.5) * 6, yc + (q() < 0.5 ? -1 : 1) * (H * 0.55)); el("ellipse", { cx: x, cy: y, rx: 3.5 * s.demy, ry: 2.4 * s.demy, fill: MY(), opacity: 0.85 }, g); }
    }
    // axon (axoplasm)
    const gapL = s.cut ? 2 + 14 * s.cut : 0, gapR = s.cut ? 2 + 10 * s.cut : 0;
    const prox = s.cut ? LX - gapL : BX1;
    el("path", { d: bandPath(w, BX0, prox, () => yc - AH, () => yc + AH, 10), fill: AXC(), stroke: AXE(), "stroke-width": 0.8 }, g);
    if (s.cut > 0.05) {
      const [bx, by] = w(prox, yc); el("circle", { cx: bx, cy: by, r: AH + 2.5 * s.cut, fill: AXC(), stroke: AXE(), "stroke-width": 0.8 }, g); // retraction bulb
    }
    if (s.cut && !s.wall) {
      el("path", { d: bandPath(w, LX + gapR, BX1, () => yc - AH, () => yc + AH, 10), fill: AXC(), stroke: AXE(), "stroke-width": 0.8 }, g);
    } else if (s.wall && s.regen < 0.999) {                          // fragmenting distal axon
      const keep = 1 - s.clear;
      for (let x = LX + 16; x < BX1; x += 21) {
        if (s.regen > 0) break;
        const rx = lerp(9.5, 5, s.wall) * (0.5 + 0.5 * keep);
        el("ellipse", { cx: x, cy: yc, rx, ry: AH * (0.6 + 0.4 * keep), fill: AXC(), opacity: f(Math.max(0.15, keep)) }, g);
      }
    }
    // endoneurial tube (Schwann-cell basal lamina) once axons are divided
    if (s.cut > 0.05) {
      const xa = s.wall ? LX - 30 : LX - 46, xb = s.wall ? BX1 : LX + 46;
      for (const sg of [-1, 1]) el("path", { d: smoothPath(linePath(w, xa, xb, yc + sg * (H + 2), 14)), stroke: col("stage-ink-2", 0.75 * s.cut), "stroke-width": 1.2, "stroke-dasharray": "4 3", fill: "none" }, g);
    }
    // Schwann cells proliferating in columns (bands of Büngner)
    if (s.wall > 0.2) {
      const n0 = s.regen ? 0 : 0;
      for (let x = LX + 34 + (ai % 2) * 14; x < BX1; x += 30) {
        const ahead = s.regen > 0 ? x > growthX(s, ai) + 10 : true;
        if (!ahead) continue;
        const k = clamp((s.wall - 0.2) * 1.6);
        el("ellipse", { cx: x, cy: yc + ((x / 30) % 2 ? -3 : 3), rx: 12, ry: 3.4, fill: mix("anat-nerve", "stage-ink", 0.6, 0.45 * k) }, g);
        el("ellipse", { cx: x, cy: yc + ((x / 30) % 2 ? -3 : 3), rx: 6, ry: 2.4, fill: NUCC(k), }, g);
        void n0;
      }
    }
    // regeneration: new axon + thin myelin + growth cone
    if (s.regen > 0) {
      const xg = growthX(s, ai);
      el("path", { d: bandPath(w, LX - gapL, xg - 6, () => yc - 2.6, () => yc + 2.6, 10), fill: AXC(), stroke: AXE(), "stroke-width": 0.6 }, g);
      for (let x = LX - 4; x + 46 < xg - 34; x += 54) {
        el("path", { d: capsulePath(w, x, x + 46, yc, 8.5), fill: MY(), stroke: MYE(), "stroke-width": 1, opacity: f(clamp((xg - 34 - (x + 46)) / 60)) }, g);
      }
      el("path", { d: bandPath(w, LX - 6, xg - 6, () => yc - 2.6, () => yc + 2.6, 10), fill: AXC(), opacity: 0.95 }, g);
      growthCone(g, xg, yc, p + ai * 0.3);
    }
  });

  // macrophages recruited into the distal stump (Wallerian degeneration)
  const mk = s.wall * (1 - clamp(s.regen * 3));
  if (mk > 0.03) G.macros.forEach((m, i) => drawCell(g, "macrophage", m.x + (1 - s.wall) * 18, m.y + (i % 2 ? 4 : -4), 12 + m.s * 3, { opacity: clamp(mk * 1.4 - i * 0.08), engulf: 0.3 + 0.7 * s.clear, phase: p + i * 0.2, seed: 90 + i }));
  // action potential (saltatory conduction along the middle axon)
  const block = s.demy > 0.45 || s.cut > 0.2;
  if (s.wall < 0.05 && s.regen === 0) {
    const nodes = G.internodes[1].map((n) => n.x1 + GAP / 2).filter((x) => x > BX0 + 10 && x < BX1 - 10 && (!block || x < LX - 40));
    if (nodes.length) {
      const cyc = (p * (block ? 4 : 3)) % 1, idx = Math.min(nodes.length - 1, Math.floor(cyc * (nodes.length + (block ? 1.2 : 0))));
      const [x, y] = W(s.comp)(nodes[idx], AXONS[1]);
      el("circle", { cx: x, cy: y, r: 13, fill: radial(g, "nv-ap", [[0, col("fx-highlight", 0.9)], [0.45, col("fx-highlight", 0.35)], [1, col("fx-highlight", 0)]]) }, g);
      if (idx > 0) { const [px, py] = W(s.comp)(nodes[idx - 1], AXONS[1]); el("circle", { cx: px, cy: py, r: 6, fill: col("fx-highlight", 0.3) }, g); }
    }
    if (block && s.cut < 0.2) {
      const [x, y] = W(s.comp)(LX - 14, AXONS[1]);
      el("path", { d: `M${f(x - 7)},${f(y - 7)}L${f(x + 7)},${f(y + 7)}M${f(x + 7)},${f(y - 7)}L${f(x - 7)},${f(y + 7)}`, stroke: col("fx-injury"), "stroke-width": 3.2, "stroke-linecap": "round" }, g);
    }
  }
  // external compression (fibro-osseous tunnel / band)
  const padK = clamp(s.comp * 2.5) * (1 - s.distal);
  if (padK > 0.02) {
    const top = w(LX, EPI[0])[1], bot = w(LX, EPI[1])[1];
    for (const [cy, sg] of [[top - 15, -1], [bot + 15, 1]]) {
      const gg = el("g", { opacity: f(padK) }, g);
      el("ellipse", { cx: LX, cy, rx: 58, ry: 15, fill: mix("anat-ligament", "stage-bg", 0.35), stroke: col("anat-ligament-edge"), "stroke-width": 1.5 }, gg);
      for (let k = -1; k <= 1; k++) el("path", { d: `M${LX - 44},${f(cy + k * 5)} Q${LX},${f(cy + k * 5 + sg * 3)} ${LX + 44},${f(cy + k * 5)}`, stroke: col("anat-ligament-edge", 0.6), "stroke-width": 0.9, fill: "none" }, gg);
      arrow(gg, LX, cy + sg * 52, LX, cy + sg * 19, { width: 4, head: 11 });
    }
  }
  // lesion marker
  if (s.cut > 0.3) {
    el("path", { d: `M${LX},${f(w(LX, EPI[0])[1] + 4)} L${LX},${f(w(LX, EPI[1])[1] - 4)}`, stroke: col("fx-injury", 0.6), "stroke-width": 1.4, "stroke-dasharray": "3 4" }, g);
  }
  // fade both ends of the nerve into the field
  const fc = mix("stage-bg", "anat-nerve", 0.05);
  el("rect", { x: BX0 - 2, y: 60, width: 46, height: 320, fill: linear(g, "nv-fadeL", [[0, fc], [1, mix("stage-bg", "anat-nerve", 0.05, 0)]], { x1: 0, y1: 0, x2: 1, y2: 0 }) }, g);
  // orientation
  el("text", { x: BX0 + 6, y: 357, "font-size": 11, fill: col("stage-ink-2"), "font-family": "inherit", text: "◂ proximal" }, g);
  el("text", { x: BX1 - 18, y: 357, "font-size": 11, fill: col("stage-ink-2"), "text-anchor": "end", text: "distal ▸" }, g);
  void stage;
}
const NUCC = (a) => mix("anat-vein", "anat-brain-deep", 0.35, a);
function growthX(s, ai) { return LX + 6 + s.regen * (BX1 - 40 - LX) - ai * 16 + (ai === 1 ? 10 : 0); }
function growthCone(g, x, y, ph) {
  el("circle", { cx: x + 4, cy: y, r: 16, fill: col("fx-heal", 0.18) }, g);
  const wob = Math.sin(ph * 12) * 2;
  el("path", { d: `M${f(x - 8)},${f(y - 2.6)} C${f(x)},${f(y - 3)} ${f(x + 2)},${f(y - 10)} ${f(x + 10)},${f(y - 9 + wob)} L${f(x + 15)},${f(y - 3)} L${f(x + 15)},${f(y + 3)} L${f(x + 10)},${f(y + 9 - wob)} C${f(x + 2)},${f(y + 10)} ${f(x)},${f(y + 3)} ${f(x - 8)},${f(y + 2.6)} Z`,
    fill: col("anat-nerve"), stroke: col("fx-heal"), "stroke-width": 1.2 }, g);
  for (const [dy, len, a] of [[-8, 9, -35], [-3, 12, -10], [3, 11, 12], [8, 9, 38]]) {
    const r = (a + wob * 3) * Math.PI / 180;
    el("path", { d: `M${f(x + 12)},${f(y + dy)} l${f(Math.cos(r) * len)},${f(Math.sin(r) * len)}`, stroke: col("anat-nerve"), "stroke-width": 1.3, "stroke-linecap": "round" }, g);
  }
}

/* ---------------- transverse section */
function transverse(g, s) {
  const sx = 1 + 0.22 * s.comp * (1 - s.distal), sy = 1 - 0.38 * s.comp * (1 - s.distal);
  const P = (x, y) => [AX + x * sx, AY + y * sy];
  el("text", { x: AX, y: 104, "text-anchor": "middle", "font-size": 12, "font-weight": 600, fill: col("stage-ink-2"), "letter-spacing": "0.06em", text: "TRANSVERSE SECTION" }, g);
  el("text", { x: AX, y: 119, "text-anchor": "middle", "font-size": 11, fill: col("stage-ink-2"), text: s.distal ? "distal to the lesion" : "at the compression site" }, g);
  el("ellipse", { cx: AX, cy: AY, rx: AR * sx, ry: AR * sy, fill: mix("anat-fascia", "stage-bg", 0.78), stroke: mix("anat-nerve-edge", "stage-bg", 0.3), "stroke-width": 2.2 }, g);
  FAT.forEach(([x, y, r], i) => { const [cx, cy] = P(x, y); drawCell(g, "adipocyte", cx, cy, r, { aspect: sy / sx, seed: 9 + i }); });
  // vessels
  const vis = s.distal ? 0 : s.isch;
  ART.forEach(([x, y, r]) => {
    const [cx, cy] = P(x, y), ry = r * sy * (1 - 0.45 * vis);
    el("ellipse", { cx, cy, rx: r * sx, ry, fill: mix("fx-bleed", "stage-bg", 0.3), stroke: mix("anat-artery", "stage-bg", 0.2), "stroke-width": 2.2 }, g);
    if (vis < 0.6) el("circle", { cx, cy, r: r * 0.42, fill: col("anat-artery", 1 - vis) }, g);
  });
  VEN.forEach(([x, y, r]) => {
    const [cx, cy] = P(x, y);
    el("ellipse", { cx, cy, rx: r * sx * (1 + 0.15 * vis), ry: Math.max(1.2, r * sy * (1 - 0.8 * vis)), fill: mix("anat-vein", "stage-bg", 0.4), stroke: mix("anat-vein", "stage-ink", 0.2), "stroke-width": 1.1 }, g);
  });
  // fascicles
  FASC.forEach(([fx, fy, rad], fi) => {
    const [cx, cy] = P(fx, fy);
    el("ellipse", { cx, cy, rx: rad * sx, ry: rad * sy, fill: mix("anat-nerve", "stage-bg", 0.86), stroke: col("anat-capsule"), "stroke-width": 3 }, g);
    if (s.isch > 0.02 && !s.distal) el("ellipse", { cx, cy, rx: (rad - 2) * sx, ry: (rad - 2) * sy, fill: col("fx-oedema"), opacity: f(s.isch) }, g);
    for (const d of G.dots[fi]) {
      const x = cx + d.x * sx, y = cy + d.y * sy;
      if (!s.distal) {
        const lostMy = d.r1 < 0.6 * s.demy * (0.45 + 0.55 * d.edge), lostAx = d.r2 < 0.8 * s.cut;
        el("ellipse", { cx: x, cy: y, rx: 2.5 * sx, ry: 2.5 * sy, fill: lostAx ? mix("stage-bg", "anat-nerve", 0.2) : AXC(), stroke: MY(), "stroke-width": lostMy ? 0.5 : 1.6, "stroke-dasharray": lostAx ? "1.5 1.5" : undefined }, g);
      } else if (d.r2 < s.regen * 0.95) {
        el("circle", { cx: x - 1.4, cy: y, r: 1.3, fill: AXC(), stroke: MY(), "stroke-width": 0.7 }, g);
        if (d.r1 < 0.6) el("circle", { cx: x + 1.6, cy: y + 0.8, r: 1.1, fill: AXC(), stroke: MY(), "stroke-width": 0.6 }, g);
      } else if (s.clear < 0.98 && d.r1 < 0.9) {
        el("ellipse", { cx: x, cy: y, rx: 2.6, ry: 1.7, fill: MY(), opacity: f((1 - s.clear) * 0.9), transform: `rotate(${f(d.a)} ${f(x)} ${f(y)})` }, g);
      } else if (d.r1 < 0.35) el("circle", { cx: x, cy: y, r: 1.2, fill: NUCC(0.8) }, g);   // Schwann cell (band of Büngner)
    }
    if (s.distal && rad > 20) {
      const mk = s.wall * (1 - s.regen);
      if (mk > 0.05) drawCell(g, "macrophage", cx + rad * 0.25, cy - rad * 0.2, 8.5, { opacity: mk, engulf: 0.4 + 0.6 * s.clear, seed: 70 + fi });
    }
  });
  // compression arrows
  const ak = s.comp * (1 - s.distal);
  if (ak > 0.05) {
    arrow(g, AX, AY - AR * sy - 44, AX, AY - AR * sy - 6, { width: 4, head: 11, opacity: ak });
    arrow(g, AX, AY + AR * sy + 44, AX, AY + AR * sy + 6, { width: 4, head: 11, opacity: ak });
  }
  return { sx, sy, P };
}

/* ---------------- labels */
function labels(g, stage, s, p, T) {
  const w = W(s.comp);
  const L = (x, y, text, to, o = {}) => label(g, x, y, text, { to, ...o });
  const [ac, acy] = T.P(FASC[0][0], FASC[0][1]);
  switch (stage) {
    case "healthy": {
      const a = fade(0.52, 0.45, p), b = fade(0.45, 0.52, p);
      const node = G.internodes[0].map((n) => n.x1 + GAP / 2).reduce((best, x) => (Math.abs(x - 450) < Math.abs(best - 450) ? x : best), 0);
      L(316, 84, "Axon", w(352, AXONS[0]), { opacity: a });
      L(450, 84, "Node of Ranvier", w(node, AXONS[0] - 5), { anchor: "middle", opacity: a });
      L(664, 84, "Myelin sheath\n(Schwann cell)", w(660, AXONS[0] - 10), { anchor: "middle", opacity: a });
      L(392, 84, "Vasa nervorum", w(430, 112), { anchor: "middle", opacity: b });
      L(640, 84, "Perineurium (fascicle)", w(620, PERI[0]), { anchor: "middle", opacity: b });
      L(40, 360, "Epineurium", [AX - 72, AY + 52], { opacity: b });
      L(262, 360, "Fascicle", [ac + 20, acy + 22], { anchor: "end", opacity: b });
      break;
    }
    case "compression":
      L(LX + 92, 84, "External compression", [LX + 40, w(LX, EPI[0])[1] - 22], { opacity: fade(0.1, 0.35, p) });
      L(AX, 362, "Flattened fascicles", [T.P(FASC[3][0], FASC[3][1])[0], T.P(FASC[3][0], FASC[3][1])[1] + 8], { anchor: "middle", opacity: fade(0.3, 0.55, p) });
      break;
    case "ischaemia":
      L(694, 84, "Intraneural oedema", [LX + 90, 168], { anchor: "middle", opacity: fade(0.2, 0.45, p) });
      L(412, 84, "Reduced blood flow", w(440, 112), { anchor: "middle", opacity: fade(0.1, 0.35, p) });
      L(440, 370, "Venous congestion", w(410, 338), { anchor: "middle", opacity: fade(0.35, 0.6, p) });
      break;
    case "demyelination":
      L(LX + 110, 84, "Focal demyelination", w(LX + 30, AXONS[0] - 6), { anchor: "middle", opacity: fade(0.2, 0.45, p) });
      L(450, 370, "Conduction block (neurapraxia)", w(LX - 14, AXONS[1] + 8), { anchor: "middle", opacity: fade(0.35, 0.6, p) });
      L(672, 370, "Axon intact", w(LX + 40, AXONS[2] + 3), { anchor: "middle", opacity: fade(0.5, 0.7, p) });
      break;
    case "axonal-injury":
      L(LX - 120, 84, "Axon divided (axonotmesis)", w(LX - 14, AXONS[0]), { anchor: "middle", opacity: fade(0.25, 0.5, p) });
      L(650, 370, "Endoneurial tube intact", w(LX + 30, AXONS[2] + H + 2), { anchor: "middle", opacity: fade(0.45, 0.7, p) });
      L(AX, 362, "Axons disrupted", [ac, acy + 12], { anchor: "middle", opacity: fade(0.4, 0.65, p) });
      break;
    case "wallerian-degeneration":
      L(700, 84, "Macrophages clear\nmyelin debris", [G.macros[4].x, G.macros[4].y - 10], { anchor: "middle", opacity: fade(0.15, 0.4, p) });
      L(470, 84, "Lesion", [LX, w(LX, EPI[0])[1] + 6], { anchor: "middle", opacity: fade(0.05, 0.25, p), color: col("fx-injury") });
      L(560, 370, "Myelin & axon break into ovoids", [575, AXONS[2] + 8], { anchor: "middle", opacity: fade(0.3, 0.55, p) * fade(0.85, 0.7, p) });
      L(560, 370, "Schwann cells form bands of Büngner", [700, AXONS[2] + 2], { anchor: "middle", opacity: fade(0.75, 0.9, p) });
      break;
    case "regeneration": {
      const xg = growthX(s, 0);
      L(790, 78, "Growth cone advancing along a Schwann tube", [xg + 12, AXONS[0] - 7], { anchor: "end", opacity: fade(0.1, 0.3, p) });
      L(560, 370, "New myelin: thinner, shorter internodes", [LX + 40, AXONS[2] + 8], { anchor: "middle", opacity: fade(0.45, 0.7, p) });
      L(AX, 362, "Regenerating sprouts", [ac + 6, acy], { anchor: "middle", opacity: fade(0.4, 0.65, p) });
      break;
    }
    default: break;
  }
}
function ruler(g, s, p) {
  if (!s.regen) return;
  const xg = growthX(s, 0), y = 95;
  const gg = el("g", { opacity: f(fade(0.15, 0.35, p)) }, g);
  el("path", { d: `M${LX},${y - 5} L${LX},${y} L${f(xg)},${y} L${f(xg)},${y - 5}`, stroke: col("fx-heal"), "stroke-width": 1.6, fill: "none" }, gg);
  label(gg, LX - 8, y + 3, "≈ 1 mm/day", { anchor: "end", size: 13, color: col("fx-heal"), weight: 600 });
}
export default {
  id: "nerve",
  scale: { default: "≈ 25 µm", "wallerian-degeneration": "≈ 25 µm", regeneration: "≈ 25 µm" },
  labels: { "axonal-injury": "Axonal injury (axonotmesis)", demyelination: "Demyelination (neurapraxia)" },
  render(g, { stage, progress = 0 }) {
    const p = clamp(progress);
    const s = params(ORDER.includes(stage) ? stage : "healthy", p);
    field(g, { tint: "anat-nerve", tintAmount: 0.05 });
    longitudinal(g, s, p, stage);
    const T = transverse(g, s);
    ruler(g, s, p);
    labels(g, stage, s, p, T);
  }
};
