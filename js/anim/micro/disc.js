/**
 * Micro module: INTERVERTEBRAL DISC (mid-sagittal section, anterior = left, posterior/spinal canal = right). OWNER: A9.
 * Vertebral bodies above & below with hyaline cartilage endplates; annulus fibrosus drawn as concentric lamellae whose
 * collagen alternates ±30°; nucleus pulposus = hydrated proteoglycan (aggrecan) gel with sparse chondrocyte-like cells;
 * outer annulus innervated (sinuvertebral twigs); posterior longitudinal ligament; traversing nerve root in the canal.
 *   healthy → loaded (axial compression + flexion: intradiscal pressure rises, nucleus pushed posteriorly, lamellae in hoop
 *   tension) → annular-fissure (radial tear through the inner posterior lamellae) → nucleus-migration (nuclear gel tracks
 *   along the fissure; contained bulge of the outer annulus) → herniation (extrusion past the outer annulus; nerve root
 *   displaced & compressed) → inflammation (macrophages, cytokines TNF-α / IL-1β, neovessels around the extruded fragment:
 *   "chemical radiculitis") → resorption (macrophage phagocytosis; the fragment shrinks and the root is decompressed).
 */
import { el, rng, lerp, clamp, ease, fade, seg, wave, col, mix, field, label, arrow, drawCell, capillary, smoothPath, blobPath,
  scatter, polyline, radial, def, f } from "./index.js";

const XA = 170, XP = 600, TOP = 150, BOT = 294, CART = 9;   // disc outline (rest)
const NX = 385, RX = 676;                                    // nucleus centre x, nerve-root centre x
const ORDER = ["healthy", "loaded", "annular-fissure", "nucleus-migration", "herniation", "inflammation", "resorption"];

const FIS = [[478, 0], [500, 6], [522, 1], [546, 9], [568, 4], [590, 11], [612, 9]];   // fissure centreline (dy from disc mid)
const G = (() => {
  const r = rng("disc-geo");
  const brushes = Array.from({ length: 13 }, () => ({ u: r(), v: r(), a: r() * 180, l: 13 + r() * 7, s: r() }));
  const cells = Array.from({ length: 4 }, () => ({ u: r(), v: r(), s: r() }));
  const marrowU = Array.from({ length: 16 }, () => ({ x: XA - 50 + r() * 470, y: 30 + r() * 95, rr: 7 + r() * 9, s: Math.floor(r() * 1e6) }));
  const marrowL = Array.from({ length: 12 }, () => ({ x: XA - 50 + r() * 470, y: 322 + r() * 110, rr: 7 + r() * 9, s: Math.floor(r() * 1e6) }));
  const cyto = Array.from({ length: 34 }, () => ({ a: r() * Math.PI * 2, d: r(), s: r() }));
  return { brushes, cells, marrowU, marrowL, cyto };
})();

function params(stage, p) {
  const s = { comp: 0, flex: 0, fis: 0, mig: 0, her: 0, inf: 0, res: 0, zoom: 0 };
  switch (stage) {
    case "loaded": s.comp = ease(seg(p, 0, 0.6)); s.flex = ease(seg(p, 0.15, 0.8)); break;
    case "annular-fissure": Object.assign(s, { comp: 1, flex: 1, fis: lerp(0.12, 0.8, ease(p)) }); break;
    case "nucleus-migration": Object.assign(s, { comp: 1, flex: 1, fis: 0.82, mig: lerp(0.08, 1, ease(p)) }); break;
    case "herniation": Object.assign(s, { comp: lerp(1, 0.6, p), flex: lerp(1, 0.6, p), fis: 1, mig: 1, her: lerp(0.12, 1, ease(p)) }); break;
    case "inflammation": Object.assign(s, { comp: 0.4, flex: 0.4, fis: 1, mig: 1, her: 1, inf: lerp(0.15, 1, fade(0, 0.7, p)), zoom: ease(seg(p, 0, 0.45)) }); break;
    case "resorption": Object.assign(s, { comp: 0.2, flex: 0.2, fis: 1, mig: 1, her: 1, inf: lerp(1, 0.3, ease(p)), res: ease(p), zoom: 1 }); break;
    default: break;
  }
  return s;
}

/* geometry helpers driven by state */
function geo(s) {
  const drop = 6 * s.comp, tilt = 14 * s.flex;
  const topY = (x) => TOP + drop + tilt * clamp((XP - x) / (XP - XA), 0, 1.2);
  const botY = () => BOT;
  const mid = (TOP + drop + tilt * 0.5 + BOT) / 2;
  const fis = FIS.map(([x, dy]) => [x, mid + dy]);
  const nx = NX + 26 * s.flex + 10 * s.comp;
  const fragR = s.her > 0 ? (8 + 24 * s.her) * (1 - 0.66 * s.res) : 0;
  const fx = 604 + 30 * s.her - 6 * s.res, fy = mid + 10;
  const push = fragR ? Math.max(0, fx + fragR - (RX - 13)) : 0;
  return { topY, botY, mid, fis, nx, fragR, fx, fy, push };
}

function vertebra(g, upper, s, G0) {
  const yb = (x) => (upper ? G0.topY(x) - CART : BOT + CART);
  const pts = [];
  if (upper) {
    for (let x = XA - 60; x <= XP + 6; x += 20) pts.push([x, yb(x)]);
    pts.push([XP + 8, yb(XP) - 40], [XP + 10, -10], [XA - 64, -10]);
  } else {
    pts.push([XA - 64, 470], [XP + 10, 470], [XP + 8, yb(0) + 40]);
    for (let x = XP + 6; x >= XA - 60; x -= 20) pts.push([x, yb(x)]);
  }
  const d = "M" + pts.map(([x, y]) => `${f(x)},${f(y)}`).join("L") + "Z";
  el("path", { d, fill: mix("anat-bone", "stage-bg", 0.12), stroke: col("anat-bone-edge"), "stroke-width": 2.5 }, g);
  (upper ? G.marrowU : G.marrowL).forEach((m) => {
    const y = upper ? m.y - (TOP - G0.topY(m.x)) : m.y;
    el("path", { d: blobPath(rng(m.s), m.x, y, m.rr, { irregular: 0.35 }), fill: mix("anat-marrow", "stage-bg", 0.35), stroke: mix("anat-bone-edge", "stage-bg", 0.3), "stroke-width": 1 }, g);
  });
  // hyaline cartilage endplate
  const ep = [];
  for (let x = XA - 2; x <= XP + 2; x += 20) ep.push([x, upper ? yb(x) : yb(x) - CART]);
  const ep2 = ep.map(([x, y]) => [x, y + CART]).reverse();
  el("path", { d: "M" + [...ep, ...ep2].map(([x, y]) => `${f(x)},${f(y)}`).join("L") + "Z", fill: mix("anat-cartilage", "stage-bg", 0.15), stroke: mix("anat-cartilage", "stage-bg", 0.45), "stroke-width": 1 }, g);
}

function hatch(g, key, angle) {
  return def(g, key, (defs, id) => {
    const pt = el("pattern", { id, patternUnits: "userSpaceOnUse", width: 7, height: 7, patternTransform: `rotate(${angle})` }, defs);
    el("path", { d: "M0,3.5 L7,3.5", stroke: mix("anat-annulus", "anat-bone-edge", 0.55, 0.75), "stroke-width": 1.4 }, pt);
  });
}

function annulus(g, s, G0) {
  const hA = hatch(g, "dk-hA", 30), hB = hatch(g, "dk-hB", -30);
  const strip = (xin, xout, k, side, bulgeExtra) => {
    const L = [], R = [];
    for (let i = 0; i <= 12; i++) {
      const v = i / 12;
      const yIn = lerp(G0.topY(xin), BOT, v), yOut = lerp(G0.topY(xout), BOT, v);
      const bulge = (k) => (2 + 7 * k) * (1 + 0.8 * s.comp) * Math.sin(Math.PI * v) + bulgeExtra(k, lerp(G0.topY(xout), BOT, v));
      L.push([xin + side * bulge(k), yIn]); R.push([xout + side * bulge(k + 1 / 6), yOut]);
    }
    return "M" + [...L, ...R.reverse()].map(([x, y]) => `${f(x)},${f(y)}`).join("L") + "Z";
  };
  const none = () => 0;
  const post = (k, y) => (k > 0.5 ? (12 * s.mig * (1 - s.her * 0.4)) * Math.exp(-(((y - G0.mid - 8) / 28) ** 2)) * (k - 0.5) * 2 : 0);
  for (let i = 0; i < 6; i++) {
    const kk = i / 6;
    // anterior (outer at left)
    const da = strip(290 - i * 20, 290 - (i + 1) * 20, kk, -1, none);
    el("path", { d: da, fill: i % 2 ? mix("anat-annulus", "stage-bg", 0.12) : col("anat-annulus") }, g);
    el("path", { d: da, fill: i % 2 ? hA : hB, stroke: mix("anat-annulus", "stage-bg", 0.45), "stroke-width": 0.8 }, g);
    const dp = strip(480 + i * 20, 480 + (i + 1) * 20, kk, 1, post);
    el("path", { d: dp, fill: i % 2 ? mix("anat-annulus", "stage-bg", 0.12) : col("anat-annulus") }, g);
    el("path", { d: dp, fill: i % 2 ? hB : hA, stroke: mix("anat-annulus", "stage-bg", 0.45), "stroke-width": 0.8 }, g);
  }
  // hoop tension highlight on the outer posterior lamellae
  if (s.comp > 0.05 && s.her < 0.5) el("path", { d: strip(560, 600, 0.66, 1, post), fill: "none", stroke: col("fx-force", 0.55 * s.comp * (1 - s.fis * 0.6)), "stroke-width": 2 }, g);
  // sinuvertebral nerve twigs in the outer posterior annulus
  for (const [y, sg] of [[G0.mid - 48, -1], [G0.mid + 50, 1]]) {
    el("path", { d: `M${RX - 30},${f(y + sg * 22)} Q${XP + 18},${f(y + sg * 6)} ${XP - 6},${f(y)} M${XP + 2},${f(y + sg * 2)} l-12,${-sg * 8} M${XP + 2},${f(y + sg * 2)} l-13,${sg * 6}`,
      stroke: col("anat-nerve", 0.85), "stroke-width": 1.4, fill: "none", "stroke-linecap": "round" }, g);
  }
}

function nucleus(g, s, G0, p) {
  const ry = (BOT - G0.topY(G0.nx)) / 2 - 20, rx = 96;
  const cy = (G0.topY(G0.nx) + BOT) / 2;
  const fill = radial(g, "dk-np", [[0, col("anat-nucleus", 0.95)], [0.7, mix("anat-nucleus", "anat-annulus", 0.25, 0.9)], [1, mix("anat-nucleus", "anat-annulus", 0.7, 0.4)]]);
  el("path", { d: blobPath(rng("np"), G0.nx, cy, rx + 14, { ry: ry + 12, n: 12, irregular: 0.06, phase: s.comp * 0.1 }), fill }, g);
  // aggrecan "bottle-brushes" + bound water
  const bc = mix("anat-nucleus", "stage-ink", 0.55), wc = mix("anat-fluid", "stage-ink", 0.3, 0.8);
  G.brushes.forEach((b) => {
    const a = b.u * Math.PI * 2, rr = Math.sqrt(b.v) * 0.8;
    const x = G0.nx + Math.cos(a) * rx * rr, y = cy + Math.sin(a) * ry * rr, th = (b.a * Math.PI) / 180;
    const ux = Math.cos(th), uy = Math.sin(th), L = b.l * (1 - 0.15 * s.comp);
    let d = `M${f(x - ux * L / 2)},${f(y - uy * L / 2)}L${f(x + ux * L / 2)},${f(y + uy * L / 2)}`;
    for (let k = 0; k < 5; k++) {
      const t = -0.4 + k * 0.2, bx = x + ux * L * t, by = y + uy * L * t, bl = 4.5 * (1 - 0.25 * s.comp);
      d += `M${f(bx - uy * bl)},${f(by + ux * bl)}L${f(bx + uy * bl)},${f(by - ux * bl)}`;
    }
    el("path", { d, stroke: bc, "stroke-width": 1, fill: "none" }, g);
    el("circle", { cx: x - uy * 8, cy: y + ux * 8, r: 1.4, fill: wc }, g);
    el("circle", { cx: x + uy * 7, cy: y - ux * 7, r: 1.2, fill: wc }, g);
  });
  G.cells.forEach((c) => drawCell(g, "chondrocyte", G0.nx + (c.u - 0.5) * rx * 1.1, cy + (c.v - 0.5) * ry * 1.1, 4.6, { seed: 5 + Math.round(c.s * 100) }));
  // raised intradiscal pressure: arrows pushing outward (posteriorly biased in flexion)
  const pk = s.comp * (1 - s.fis * 0.7);
  if (pk > 0.05) {
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2, k = 1 + 0.5 * s.flex * Math.cos(a);
      const x1 = G0.nx + Math.cos(a) * rx * 0.45, y1 = cy + Math.sin(a) * ry * 0.45;
      const x2 = G0.nx + Math.cos(a) * rx * (0.62 + 0.18 * k * wave(p, 2)), y2 = cy + Math.sin(a) * ry * (0.62 + 0.18 * k * wave(p, 2));
      arrow(g, x1, y1, x2, y2, { width: 2.2, head: 7, opacity: pk * 0.9, color: col("fx-force") });
    }
  }
}

function fissure(g, s, G0) {
  if (s.fis <= 0.01) return;
  const pl = polyline(G0.fis);
  const n = 24, tipU = s.fis;
  const L = [], R = [];
  for (let i = 0; i <= n; i++) {
    const u = (i / n) * tipU, [x, y] = pl.at(u), [tx, ty] = pl.tan(u);
    const w = (1 - u / Math.max(tipU, 0.01)) * 5 + 1.6 + (s.her ? 4 : 0);
    L.push([x - ty * w, y + tx * w]); R.push([x + ty * w, y - tx * w]);
  }
  el("path", { d: "M" + [...L, ...R.reverse()].map(([x, y]) => `${f(x)},${f(y)}`).join("L") + "Z", fill: mix("fx-bleed", "stage-bg", 0.55), stroke: col("fx-injury", 0.85), "stroke-width": 1.2 }, g);
  // nuclear material tracking along the fissure
  if (s.mig > 0.01) {
    const tu = Math.min(tipU, s.mig * 0.97), T = [], B = [];
    for (let i = 0; i <= n; i++) {
      const u = (i / n) * tu, [x, y] = pl.at(u), [tx, ty] = pl.tan(u), w = 5.5 - 2 * (u / Math.max(tu, 0.01)) + (s.her ? 3 : 0);
      T.push([x - ty * w, y + tx * w]); B.push([x + ty * w, y - tx * w]);
    }
    el("path", { d: smoothPath([[G0.fis[0][0] - 14, G0.fis[0][1] - 9], ...T, ...B.reverse(), [G0.fis[0][0] - 14, G0.fis[0][1] + 9]], true), fill: mix("anat-nucleus", "stage-ink", 0.12) }, g);
  }
}

function fragment(g, s, G0) {
  if (!G0.fragR) return;
  el("path", { d: blobPath(rng("frag"), G0.fx, G0.fy, G0.fragR, { ry: G0.fragR * 1.25, n: 10, irregular: 0.16 }), fill: mix("anat-nucleus", "stage-ink", 0.12), stroke: mix("anat-nucleus", "anat-annulus", 0.6), "stroke-width": 1.4 }, g);
  const R = rng("fragb");
  for (let i = 0; i < 4; i++) {
    const x = G0.fx + (R() - 0.5) * G0.fragR, y = G0.fy + (R() - 0.5) * G0.fragR * 1.4;
    el("path", { d: `M${f(x - 6)},${f(y - 2)}L${f(x + 6)},${f(y + 2)}`, stroke: mix("anat-nucleus", "stage-ink", 0.55), "stroke-width": 1, opacity: f(clamp(G0.fragR / 20)) }, g);
  }
}

function canal(g, s, G0) {
  // posterior longitudinal ligament (lifted over the extruded fragment)
  const bow = (y) => (G0.fragR ? Math.max(0, G0.fx + G0.fragR * 0.8 - 606) * Math.exp(-(((y - G0.fy) / (G0.fragR * 1.5 + 10)) ** 2)) : 0);
  const pll = []; for (let y = -10; y <= 470; y += 12) pll.push([606 + bow(y), y]);
  el("path", { d: smoothPath(pll), stroke: mix("anat-ligament", "stage-bg", 0.3), "stroke-width": 6, fill: "none" }, g);
  el("path", { d: smoothPath(pll), stroke: col("anat-ligament-edge", 0.6), "stroke-width": 1, fill: "none", transform: "translate(2,0)" }, g);
  // traversing nerve root
  const push = G0.push, cx = (y) => RX + push * Math.exp(-(((y - G0.fy) / 60) ** 2));
  const wid = (y) => 13 * (1 - 0.28 * clamp(push / 22) * Math.exp(-(((y - G0.fy) / 30) ** 2)));
  const Lp = [], Rp = [];
  for (let y = -10; y <= 470; y += 12) { Lp.push([cx(y) - wid(y), y]); Rp.push([cx(y) + wid(y), y]); }
  if (s.inf > 0.02) el("path", { d: smoothPath(Lp.map(([x, y], i) => [(x + Rp[i][0]) / 2, y])), stroke: col("fx-inflame", 0.35 * s.inf), "stroke-width": 44, fill: "none", "stroke-linecap": "round" }, g);
  el("path", { d: smoothPath([...Lp, ...Rp.reverse()], true), fill: col("anat-nerve"), stroke: col("anat-nerve-edge"), "stroke-width": 1.4 }, g);
  for (const o of [-5, 0, 5]) el("path", { d: smoothPath(Lp.map(([x, y], i) => [(x + Rp[Rp.length - 1 - i][0]) / 2 + o * (wid(y) / 13), y])), stroke: col("anat-nerve-edge", 0.5), "stroke-width": 0.8, fill: "none" }, g);
}

function inflammation(g, s, G0, p) {
  const k = s.inf;
  if (k <= 0.01 && s.res <= 0.01) return;
  const R = G0.fragR;
  // neovessels growing toward the fragment
  capillary(g, [[RX + 70, 60], [RX + 20, G0.fy - 70], [G0.fx + R * 0.5, G0.fy - R * 0.9]], { width: 8, seed: 21, sprouting: k, sprouts: 2, sproutLength: 26, flow: p * 0.8, opacity: clamp(k * 1.5) });
  capillary(g, [[RX + 80, 420], [RX + 18, G0.fy + 90], [G0.fx + R * 0.4, G0.fy + R * 1.1]], { width: 8, seed: 22, sprouting: k, sprouts: 2, sproutLength: 24, flow: p * 0.8, opacity: clamp(k * 1.5) });
  // cytokines diffusing toward the root
  G.cyto.forEach((c, i) => {
    const d = R + 6 + c.d * (34 + 30 * k), x = G0.fx + Math.cos(c.a) * d * 1.1 + 18 * k * c.s, y = G0.fy + Math.sin(c.a) * d * 1.3;
    el("circle", { cx: x, cy: y, r: 1.8 + c.s, fill: col(i % 3 ? "fx-inflame" : "fx-pain", 0.85 * k) }, g);
  });
  // macrophages surrounding / engulfing the fragment
  const n = 6;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + 0.4, d = R + lerp(16, 4, s.res) + 3 * Math.sin(p * 6 + i);
    drawCell(g, "macrophage", G0.fx + Math.cos(a) * d, G0.fy + Math.sin(a) * d * 1.25, 8, { opacity: clamp(k * 2 + s.res), engulf: 0.3 + 0.7 * s.res, phase: p + i * 0.17, seed: 40 + i });
  }
}

function labels(g, stage, s, G0, p, Z) {
  const L = (x, y, text, to, o = {}) => label(g, x, y, text, { to: to && Z(to), ...o });
  switch (stage) {
    case "healthy": {
      const a = fade(0.52, 0.45, p), b = fade(0.45, 0.52, p);
      L(20, 214, "Annulus fibrosus\n(lamellae ±30°)", [196, 214], { opacity: a });
      L(NX, 92, "Nucleus pulposus\n(proteoglycan–water gel)", [NX - 20, 196], { anchor: "middle", opacity: a });
      L(20, 140, "Cartilage endplate", [216, 146], { opacity: a });
      L(790, 92, "Nerve root", [RX + 6, 120], { anchor: "end", opacity: b });
      L(20, 96, "Vertebral body", [190, 92], { opacity: b });
      L(790, 340, "Outer annulus\nis innervated", [XP + 2, G0.mid + 52], { anchor: "end", opacity: b });
      break;
    }
    case "loaded":
      L(20, 214, "Flexion + axial load", null, { opacity: fade(0.05, 0.25, p), color: col("fx-force"), weight: 600 });
      L(NX, 92, "Intradiscal pressure rises;\nnucleus pushed posteriorly", [G0.nx + 40, G0.mid], { anchor: "middle", opacity: fade(0.2, 0.45, p) });
      L(790, 340, "Posterior annulus\nin hoop tension", [XP - 4, G0.mid + 40], { anchor: "end", opacity: fade(0.4, 0.65, p) });
      break;
    case "annular-fissure":
      L(790, 340, "Radial fissure through\nthe inner annulus", [548, G0.mid + 12], { anchor: "end", opacity: fade(0.15, 0.4, p) });
      L(NX, 92, "Outer lamellae still intact", [XP - 10, G0.mid - 30], { anchor: "middle", opacity: fade(0.5, 0.7, p) });
      break;
    case "nucleus-migration":
      L(NX + 10, 360, "Nuclear gel tracks along the fissure", [540, G0.mid + 10], { anchor: "middle", opacity: fade(0.15, 0.4, p) });
      L(790, 92, "Contained bulge", [XP + 10, G0.mid + 6], { anchor: "end", opacity: fade(0.45, 0.7, p) });
      break;
    case "herniation":
      L(790, 92, "Extruded nucleus", [G0.fx + 4, G0.fy - G0.fragR], { anchor: "end", opacity: fade(0.2, 0.45, p) });
      L(790, 350, "Nerve root\ncompressed", [RX + G0.push + 10, G0.fy + 30], { anchor: "end", opacity: fade(0.45, 0.7, p) });
      L(NX, 92, "Outer annulus ruptured", [XP - 2, G0.mid + 6], { anchor: "middle", opacity: fade(0.1, 0.3, p) });
      break;
    case "inflammation":
      L(20, 96, "Macrophages & cytokines\n(TNF-α, IL-1β)", [G0.fx - G0.fragR - 14, G0.fy - G0.fragR * 0.9], { opacity: fade(0.35, 0.55, p) });
      L(790, 350, "Chemical radiculitis", [RX + G0.push + 8, G0.fy + 60], { anchor: "end", opacity: fade(0.5, 0.7, p) });
      L(790, 80, "New vessels", [RX + 26, G0.fy - 60], { anchor: "end", opacity: fade(0.6, 0.8, p) });
      break;
    case "resorption":
      L(20, 96, "Macrophages phagocytose\nthe fragment", [G0.fx - G0.fragR - 8, G0.fy - G0.fragR], { opacity: fade(0.1, 0.3, p) });
      L(20, 340, "Fragment shrinks", [G0.fx - 4, G0.fy + G0.fragR], { opacity: fade(0.4, 0.6, p) });
      L(790, 350, "Root decompressed", [RX + G0.push + 10, G0.fy + 40], { anchor: "end", opacity: fade(0.65, 0.85, p) });
      break;
    default: break;
  }
}

export default {
  id: "disc",
  scale: { default: "≈ 5 mm", inflammation: "≈ 3 mm", resorption: "≈ 3 mm" },
  labels: { herniation: "Herniation (extrusion)" },
  render(g, { stage, progress = 0 }) {
    const p = clamp(progress);
    const s = params(ORDER.includes(stage) ? stage : "healthy", p);
    const G0 = geo(s);
    field(g, { tint: "anat-annulus", tintAmount: 0.05 });
    // zoom toward the posterior disc / canal for the cellular stages
    const z = 1 + 0.6 * s.zoom, fx = 640, fy = G0.fy, tx = lerp(fx, 470, s.zoom), ty = lerp(fy, 226, s.zoom);
    const Z = ([x, y]) => [tx + (x - fx) * z, ty + (y - fy) * z];
    const v = el("g", { transform: s.zoom ? `translate(${f(tx)},${f(ty)}) scale(${f(z * 100) / 100}) translate(${f(-fx)},${f(-fy)})` : undefined }, g);
    el("rect", { x: XP + 4, y: -20, width: 260, height: 500, fill: mix("stage-bg", "anat-fluid", 0.06) }, v);
    vertebra(v, true, s, G0);
    vertebra(v, false, s, G0);
    annulus(v, s, G0);
    nucleus(v, s, G0, p);
    fissure(v, s, G0);
    canal(v, s, G0);
    fragment(v, s, G0);
    inflammation(v, s, G0, p);
    // external load
    const lk = s.comp * (1 - s.zoom);
    if (lk > 0.05) {
      arrow(g, 300 - 10 * s.flex, 60, 300 - 10 * s.flex, 112, { width: 5, head: 13, opacity: lk });
      arrow(g, 470, 60, 470, 108, { width: 5, head: 13, opacity: lk });
      arrow(g, 385, 372, 385, 334, { width: 5, head: 13, opacity: lk * 0.8 });
    }
    labels(g, stage, s, G0, p, Z);
  }
};
