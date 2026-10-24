/**
 * Props & environments for the figure rig. OWNER: A2.
 * All drawing is in screen units: cm, x right, y DOWN, ground at y = 0. Colours are token-only (CSS vars in style).
 *   drawProp(g, type, pl, { view, t }) → bbox in world y-UP { x0, x1, y0, y1 }
 *   placeProp(type, body, hints, { view, frames, attach, seat }) → placement (or array) for a PROPS id
 *   placeStaticProps(ids, body, hints, { view, seat }) → placements for a static exercise figure (auto chair when seated)
 *   drawEnvironment(g, id, { view, ref, frames }) → quiet backdrop drawn ≈ x −1500…1500 (ref = reference body for alignment)
 */
import { PROPS, ENVIRONMENTS } from "./catalogue.js";
import { targetFrames } from "./rig.js";

export const PROP_IDS = PROPS;
export const ENV_IDS = ENVIRONMENTS;
export const SUPPORT_PROPS = ["chair", "bench", "box", "plyo-box", "step", "kerb", "car-seat", "stairs"];
const BALL_R = { "ball-soccer": 11, "ball-basketball": 12, "ball-rugby": 10, "ball-cricket": 3.6, "ball-tennis": 3.4, "ball-volleyball": 10.5 };

const NS = "http://www.w3.org/2000/svg";
const f2 = (n) => (Math.round(n * 100) / 100).toString();
function E(g, tag, a) { const e = document.createElementNS(NS, tag); for (const k in a) if (a[k] !== undefined) e.setAttribute(k, a[k]); g.append(e); return e; }
const mx = (a, p, b) => `color-mix(in srgb, var(${a}) ${p}%, var(${b}))`;
const S = (fill, stroke, sw, extra = "") => `fill: ${fill || "none"};${stroke ? ` stroke: ${stroke}; stroke-width: ${sw};` : ""} ${extra}`;
const rnd = (i) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const deg = (v) => (Math.atan2(v[1], v[0]) * 180) / Math.PI;

const C = {
  equip: mx("--stage-ink-2", 24, "--stage-bg-2"), equipEdge: mx("--stage-ink-2", 60, "--stage-bg"),
  metal: "var(--stage-ink-2)", light: "var(--stage-ink)", plate: mx("--stage-ink-2", 34, "--stage-bg"),
  wood: mx("--anat-fat", 40, "--stage-bg-2"), woodEdge: mx("--anat-fat", 30, "--stage-bg"),
  pad: mx("--fig-kit-far", 55, "--stage-bg-2"), padEdge: mx("--fig-kit-far", 70, "--stage-bg"),
  grip: mx("--stage-bg", 70, "--stage-ink-2"), band: mx("--fx-inflame", 78, "--fig-opponent"),
  ski: "var(--fig-opponent)", grid: "var(--stage-grid)"
};

/* ---------------- geometry helpers on a built body ---------------- */
function bottomNear(body, units, xc, hw) {
  let m = Infinity;
  for (const pc of body.pieces) if (units.includes(pc.unit)) for (const q of pc.s) { const [x, y] = body.pr(q.w); if (Math.abs(x - xc) <= hw + q.r * 0.4) m = Math.min(m, y - q.r); }
  return m;
}
function extentOf(body, units) {
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  for (const pc of body.pieces) if (!units || units.includes(pc.unit)) for (const q of pc.s) { const [x, y] = body.pr(q.w); x0 = Math.min(x0, x - q.r); x1 = Math.max(x1, x + q.r); y0 = Math.min(y0, y - q.r); y1 = Math.max(y1, y + q.r); }
  return { x0, x1, y0, y1 };
}
const tp = (body, id) => body.targets[id]; // world y-up

/* ---------------- placement ---------------- */
function supportPlace(type, body, target, view) {
  const m = body.facing;
  const unitsFor = { pelvis: ["torso"], upperBack: ["torso"], lowBack: ["torso"], heels: ["legR", "legL"], footR: ["legR"], footL: ["legL"], kneeR: ["legR"], kneeL: ["legL"], shinR: ["legR"], shinL: ["legL"], handL: ["armL"], handR: ["armR"] };
  let xc, top;
  if (target === "heels") { xc = (tp(body, "heelR")[0] + tp(body, "heelL")[0]) / 2; top = bottomNear(body, unitsFor.heels, xc, 9); }
  else if (target === "pelvis") { xc = tp(body, "pelvis")[0] - m * 3; top = bottomNear(body, unitsFor.pelvis, xc, 10); }
  else if (unitsFor[target]) { xc = tp(body, target)[0]; top = bottomNear(body, unitsFor[target], xc, target.startsWith("foot") ? 12 : 9); }
  else { // higher foot, else in front
    const r = bottomNear(body, ["legR"], tp(body, "footR")[0], 12), l = bottomNear(body, ["legL"], tp(body, "footL")[0], 12);
    if (Math.max(r, l) > 5) { const R = r >= l; xc = tp(body, R ? "footR" : "footL")[0]; top = Math.max(r, l); }
    else { const ext = extentOf(body); xc = (m > 0 ? ext.x1 : ext.x0) + m * 35; top = type === "step" ? 20 : type === "kerb" ? 15 : 40; }
  }
  if (!isFinite(top)) top = 40;
  top = Math.max(4, top);
  const W = { chair: 44, bench: 112, box: 46, "plyo-box": 56, step: view === "anterior" ? 86 : 64, kerb: 60, "car-seat": 50, stairs: 28 }[type] || 46;
  let x = xc;
  if (type === "chair" && view !== "anterior") x = xc + m * 6;
  if (type === "bench" && target === "upperBack") x = xc - m * 22;
  return { type, x, y: -top, w: W, h: top, facing: m, view, body, target };
}

export function placeProp(type, body, hints = {}, opts = {}) {
  const view = opts.view || body.view, m = body.facing;
  const F = opts.frames || targetFrames(body);
  const attach = opts.attach;
  if (BALL_R[type]) {
    const r = BALL_R[type];
    let fr = attach ? F[attach] : null;
    if (!fr && type === "ball-soccer") { const toe = F.toeR.p; return { type, x: toe[0] + m * (r + 3), y: -r, r, front: true }; }
    if (!fr) fr = F.handR;
    const isHand = /^(hand|wrist)/.test(attach || "handR"), isFoot = /^(foot|toe|heel)/.test(attach || "");
    let x = fr.p[0], y = fr.p[1];
    if (isHand) { x += fr.dir[0] * r * 0.55; y += fr.dir[1] * r * 0.55 + r * 0.25; }
    if (isFoot) { x += m * (r + 1); y = Math.min(y, -r); }
    return { type, x, y: Math.min(y, -r), r, front: view === "anterior" || !/L$/.test(attach || "R") };
  }
  if (type === "skis") return ["R", "L"].map((s) => ({ type, x: F["sole" + s].p[0], y: F["sole" + s].p[1], dir: F["sole" + s].dir, side: s, front: s === "R" || view === "anterior", hands: [F.handR.p, F.handL.p], poles: s === "R" }));
  if (["dumbbell", "kettlebell", "hammer", "racquet", "cricket-bat", "golf-club", "climbing-hold", "barbell"].includes(type)) {
    const hold = attach ? (/L$/.test(attach) ? "L" : "R") : (hints.hold || "R");
    const two = (type === "dumbbell" || type === "kettlebell" || type === "climbing-hold") && hold === "both";
    if (two) return ["R", "L"].map((s) => ({ type, x: F["hand" + s].p[0], y: F["hand" + s].p[1], dir: F["hand" + s].dir, side: s, front: view === "anterior" || s === "R" }));
    if (hold === "both" || type === "barbell") {
      const a = F.handR.p, b = F.handL.p;
      return { type, x: (a[0] + b[0]) / 2, y: (a[1] + b[1]) / 2, dir: F.handR.dir, side: "R", front: true, view };
    }
    const s = hold === "L" ? "L" : "R";
    const fr = attach && F[attach] ? F[attach] : F["hand" + s];
    return { type, x: fr.p[0], y: fr.p[1], dir: fr.dir, side: s, front: view === "anterior" || s === "R", view };
  }
  if (SUPPORT_PROPS.includes(type)) {
    const target = attach && !/^(hand|foot|toe|heel|knee|shin)/.test(attach) ? attach : attach || hints.support || (opts.seat ? "pelvis" : null);
    const pl = supportPlace(type, body, target, view);
    if (type === "car-seat") { pl.back = tp(body, "upperBack"); pl.low = tp(body, "lowBack"); pl.head = tp(body, "head"); }
    if (type === "chair") pl.back = tp(body, "upperBack");
    return pl;
  }
  switch (type) {
    case "mat": { const ext = extentOf(body); return { type, x0: ext.x0 - 10, x1: ext.x1 + 10 }; }
    case "wall": {
      const where = hints.wall || "back";
      if (view === "anterior") return { type, x: (body.bounds.x0 + body.bounds.x1) / 2, w: body.bounds.x1 - body.bounds.x0 + 80, panel: true };
      if (where === "front") { const ext = extentOf(body, ["armR", "armL"]); return { type, x: m > 0 ? ext.x1 + 0.5 : ext.x0 - 0.5, dirn: m }; }
      const ext = extentOf(body, ["torso"]); return { type, x: m > 0 ? ext.x0 - 0.5 : ext.x1 + 0.5, dirn: -m };
    }
    case "foam-roller": { const id = attach || hints.roller || "upperBack"; const p = tp(body, id); const top = bottomNear(body, ["torso"], p[0], 10); return { type, x: p[0], r: Math.max(5, Math.min(9, (top > 0 ? top : 15) / 2)), view }; }
    case "resistance-band": {
      const s = /L$/.test(attach || hints.band || "R") ? "L" : "R", h = F["hand" + s].p;
      const anchor = view === "anterior" ? [h[0] + (s === "R" ? 1 : -1) * m * 70, h[1]] : [h[0] + m * 62, h[1] + 4];
      return { type, p1: h, p2: anchor, front: true };
    }
    case "desk": case "keyboard": {
      const hR = F.handR.p, hL = F.handL.p, hx = (hR[0] + hL[0]) / 2, hy = Math.max(hR[1], hL[1]);
      return { type, x: hx, y: hy + 2.6, facing: m, view, front: type === "keyboard" };
    }
    case "hurdle": { const ext = extentOf(body, ["legR", "legL"]); return { type, x: (m > 0 ? ext.x1 : ext.x0) + m * 40, view }; }
    case "ice-patch": { const a = tp(body, "heelR")[0], b = tp(body, "heelL")[0]; return { type, x: (a + b) / 2, w: 120 }; }
    case "bike": { return { type, x: tp(body, "pelvis")[0], seatY: -bottomNear(body, ["torso", "legR", "legL"], tp(body, "pelvis")[0], 10), hands: [F.handR.p, F.handL.p], facing: m, view }; }
  }
  return null;
}

export function placeStaticProps(ids, body, hints = {}, opts = {}) {
  const frames = targetFrames(body);
  const out = [];
  for (const id of ids) { const pl = placeProp(id, body, hints, { ...opts, frames }); if (pl) out.push(...[].concat(pl)); }
  if (hints.desk && !ids.includes("desk")) { const pl = placeProp("desk", body, hints, { ...opts, frames }); if (pl) out.push(pl); }
  if (opts.seat && !ids.some((i) => SUPPORT_PROPS.includes(i))) { const pl = placeProp(hints.seatProp || "chair", body, hints, { ...opts, frames, seat: true }); if (pl) out.push(pl); }
  if (hints.anchor === "ankles") out.push({ type: "_anchor", x: (body.targets.heelR[0] + body.targets.heelL[0]) / 2, y: -Math.max(body.targets.heelR[1], body.targets.heelL[1]) - 4, front: true });
  if (hints.arcAt) { const p = body.targets[hints.arcAt]; out.push({ type: "_arc", x: p[0], y: -p[1], front: true }); }
  return out;
}

/* ---------------- prop drawings ---------------- */
const bb = (x0, x1, ys0, ys1) => ({ x0, x1, y0: -ys1, y1: -ys0 }); // from screen y-range to world y-up
function rotG(g, x, y, a, flip) { return E(g, "g", { transform: `translate(${f2(x)} ${f2(y)}) rotate(${f2(a)})${flip ? " scale(1,-1)" : ""}` }); }

function drawBall(g, pl, t) {
  const { x, y } = pl, r = pl.r || BALL_R[pl.type], spin = ((pl.ang || 0) + (pl.free ? (pl.spin || 0) * 220 : 0));
  const G = rotG(g, x, y, spin);
  const edge = "var(--stage-bg)";
  switch (pl.type) {
    case "ball-soccer": {
      E(G, "circle", { r: f2(r), style: S(C.light, edge, 0.7) });
      const pts = [...Array(5)].map((_, i) => { const a = (i / 5) * Math.PI * 2 - Math.PI / 2; return [Math.cos(a) * r * 0.36, Math.sin(a) * r * 0.36]; });
      E(G, "path", { d: "M" + pts.map((p) => p.map(f2).join(",")).join("L") + "Z", style: S("var(--stage-bg-2)") });
      E(G, "path", { d: pts.map((p) => `M${f2(p[0])},${f2(p[1])}L${f2(p[0] * 2.5)},${f2(p[1] * 2.5)}`).join(""), style: S(null, "var(--stage-bg-2)", 0.8) });
      break;
    }
    case "ball-basketball":
      E(G, "circle", { r: f2(r), style: S(mx("--fig-opponent", 78, "--fx-inflame"), edge, 0.7) });
      E(G, "path", { d: `M0,${-r}V${r}M${-r},0H${r}M${-r * 0.7},${-r * 0.7}Q${-r * 0.2},0 ${-r * 0.7},${r * 0.7}M${r * 0.7},${-r * 0.7}Q${r * 0.2},0 ${r * 0.7},${r * 0.7}`, style: S(null, mx("--stage-bg", 80, "--fig-opponent"), 0.75) });
      break;
    case "ball-rugby":
      E(G, "ellipse", { rx: f2(r * 1.45), ry: f2(r * 0.9), style: S(mx("--anat-marrow", 55, "--stage-ink"), edge, 0.7) });
      E(G, "path", { d: `M${-r * 0.6},${-r * 0.25}Q0,${-r * 0.45} ${r * 0.6},${-r * 0.25}`, style: S(null, "var(--stage-ink)", 0.6, "stroke-dasharray: 1 1") });
      break;
    case "ball-cricket":
      E(G, "circle", { r: f2(r), style: S(mx("--fx-injury", 62, "--fx-bleed"), edge, 0.4) });
      E(G, "path", { d: `M${-r},0Q0,${-r * 0.3} ${r},0`, style: S(null, "var(--stage-ink)", 0.35, "opacity: .8") });
      break;
    case "ball-tennis":
      E(G, "circle", { r: f2(r), style: S(mx("--fx-force", 62, "--fx-heal"), edge, 0.35) });
      E(G, "path", { d: `M${-r * 0.8},${-r * 0.5}Q0,0 ${-r * 0.8},${r * 0.5}M${r * 0.8},${-r * 0.5}Q0,0 ${r * 0.8},${r * 0.5}`, style: S(null, "var(--stage-ink)", 0.35) });
      break;
    case "ball-volleyball":
      E(G, "circle", { r: f2(r), style: S(C.light, edge, 0.7) });
      E(G, "path", { d: `M0,0Q${r * 0.5},${-r * 0.5} ${r * 0.2},${-r}L${r},${-r * 0.1}Q${r * 0.4},${r * 0.1} 0,0Z`, style: S(mx("--fx-force", 45, "--stage-ink")) });
      E(G, "path", { d: `M0,0Q${-r * 0.6},${-r * 0.2} ${-r * 0.8},${-r * 0.6}M0,0Q${-r * 0.1},${r * 0.6} ${-r * 0.5},${r * 0.86}M0,0Q${r * 0.6},${r * 0.3} ${r * 0.85},${r * 0.5}`, style: S(null, "var(--stage-bg-2)", 0.7) });
      break;
  }
  return bb(x - r * 1.5, x + r * 1.5, y - r, y + r);
}

const HAND = (pl) => [pl.x, pl.y, deg(pl.dir || [0, 1])];
const DRAW = {
  racquet(g, pl) {
    const [x, y, a] = HAND(pl), G = rotG(g, x, y, a);
    E(G, "rect", { x: -3, y: -1.3, width: 28, height: 2.6, rx: 1, style: S(C.grip) });
    E(G, "path", { d: "M25,-1.2L31,-6M25,1.2L31,6", style: S(null, C.metal, 1.2) });
    let s = "";
    for (let xx = 33; xx <= 59; xx += 3.4) { const k = Math.sqrt(Math.max(0, 1 - ((xx - 46) / 16.5) ** 2)) * 12.5; s += `M${f2(xx)},${f2(-k)}V${f2(k)}`; }
    for (let yy = -11; yy <= 11; yy += 3.4) { const k = Math.sqrt(Math.max(0, 1 - (yy / 12.5) ** 2)) * 16.5; s += `M${f2(46 - k)},${f2(yy)}H${f2(46 + k)}`; }
    E(G, "path", { d: s, style: S(null, "var(--stage-ink)", 0.3, "opacity: .45") });
    E(G, "ellipse", { cx: 46, rx: 17, ry: 13, style: S(null, C.metal, 1.6) });
    return bb(x - 64, x + 64, y - 64, y + 64);
  },
  "cricket-bat"(g, pl) {
    const [x, y, a] = HAND(pl), G = rotG(g, x, y, a);
    E(G, "rect", { x: -4, y: -1.5, width: 30, height: 3, rx: 1.2, style: S(C.grip) });
    E(G, "path", { d: "M26,-4.2L82,-5.3Q86,-5.3 86,-1V1Q86,5.3 82,5.3L26,4.2Z", style: S(C.wood, C.woodEdge, 0.6) });
    E(G, "path", { d: "M30,0L82,0", style: S(null, C.woodEdge, 0.5, "opacity: .6") });
    return bb(x - 88, x + 88, y - 88, y + 88);
  },
  "golf-club"(g, pl) {
    const [x, y, a] = HAND(pl), G = rotG(g, x, y, a);
    E(G, "path", { d: "M-2,0L100,0", style: S(null, C.metal, 0.9) });
    E(G, "path", { d: "M-2,0L22,0", style: S(null, C.grip, 2) });
    E(G, "path", { d: "M99,-1.5L104,-1.5Q107,-1.5 107,2L107,4Q107,6 104,6L98,6Z", style: S(C.metal, "var(--stage-bg)", 0.4) });
    return bb(x - 108, x + 108, y - 108, y + 108);
  },
  hammer(g, pl) {
    const [x, y, a] = HAND(pl), G = rotG(g, x, y, a);
    E(G, "rect", { x: -4, y: -1.3, width: 34, height: 2.6, rx: 1, style: S(C.wood, C.woodEdge, 0.4) });
    E(G, "path", { d: "M27,-7H33V3Q33,6 30,7L27,7Z", style: S(C.metal, "var(--stage-bg)", 0.5) });
    return bb(x - 36, x + 36, y - 36, y + 36);
  },
  dumbbell(g, pl) {
    const [x, y, a] = HAND(pl), G = rotG(g, x, y, a + 90);
    E(G, "rect", { x: -9, y: -0.9, width: 18, height: 1.8, style: S(C.metal) });
    for (const sx of [-1, 1]) {
      E(G, "rect", { x: f2(sx > 0 ? 7.5 : -12), y: -6.8, width: 4.5, height: 13.6, rx: 1.4, style: S(C.plate, C.equipEdge, 0.5) });
      E(G, "rect", { x: f2(sx > 0 ? 12 : -13.6), y: -4.2, width: 1.6, height: 8.4, rx: 0.6, style: S(C.metal) });
    }
    return bb(x - 15, x + 15, y - 15, y + 15);
  },
  kettlebell(g, pl) {
    const { x, y } = pl;
    E(g, "path", { d: `M${f2(x - 5.5)},${f2(y + 5)}Q${f2(x - 6)},${f2(y - 3.5)} ${f2(x)},${f2(y - 3.5)}Q${f2(x + 6)},${f2(y - 3.5)} ${f2(x + 5.5)},${f2(y + 5)}`, style: S(null, C.plate, 2.2) });
    E(g, "path", { d: `M${f2(x - 8)},${f2(y + 24)}A10.5,10.5 0 1,1 ${f2(x + 8)},${f2(y + 24)}Z`, style: S(C.plate, C.equipEdge, 0.6) });
    E(g, "ellipse", { cx: f2(x - 3.5), cy: f2(y + 13), rx: 2.5, ry: 3.5, style: S("var(--stage-ink)", null, 0, "opacity: .12") });
    return bb(x - 11, x + 11, y - 4, y + 25);
  },
  barbell(g, pl, o) {
    const { x, y } = pl;
    if ((o.view || pl.view) === "anterior") {
      E(g, "path", { d: `M${f2(x - 108)},${f2(y)}H${f2(x + 108)}`, style: S(null, C.metal, 2.2) });
      for (const sx of [-1, 1]) for (const off of [70, 76]) E(g, "rect", { x: f2(x + sx * off - 2.3), y: f2(y - 22.5), width: 4.6, height: 45, rx: 1.2, style: S(C.plate, C.equipEdge, 0.5) });
      return bb(x - 110, x + 110, y - 23, y + 23);
    }
    E(g, "circle", { cx: f2(x), cy: f2(y), r: 22.5, style: S(C.plate, C.equipEdge, 0.7) });
    E(g, "circle", { cx: f2(x), cy: f2(y), r: 16, style: S(null, C.equipEdge, 0.6, "opacity: .7") });
    E(g, "circle", { cx: f2(x), cy: f2(y), r: 2.8, style: S(C.metal) });
    return bb(x - 23, x + 23, y - 23, y + 23);
  },
  "climbing-hold"(g, pl) {
    const { x, y } = pl;
    E(g, "path", { d: `M${f2(x - 5)},${f2(y - 3)}Q${f2(x)},${f2(y - 8)} ${f2(x + 6)},${f2(y - 2)}Q${f2(x + 5)},${f2(y + 3)} ${f2(x - 1)},${f2(y + 2)}Q${f2(x - 6)},${f2(y + 1)} ${f2(x - 5)},${f2(y - 3)}Z`, style: S("var(--fig-opponent)", "var(--stage-bg)", 0.5) });
    return bb(x - 7, x + 7, y - 8, y + 4);
  },
  skis(g, pl, o) {
    const { x, y } = pl;
    if ((o.view || pl.view) === "anterior") { E(g, "rect", { x: f2(x - 5), y: f2(y + 0.3), width: 10, height: 2.6, rx: 1.2, style: S(C.ski, "var(--stage-bg)", 0.4) }); return bb(x - 6, x + 6, y, y + 3); }
    const a = deg(pl.dir), flip = Math.cos((a * Math.PI) / 180) < 0;
    const G = rotG(g, x, y, a, flip);
    E(G, "path", { d: "M-74,0.4L86,0.4Q96,0.4 99,-7L97.4,-7.6Q94.5,-1.8 86,-1.8L-74,-1.8Q-77,-1.8 -77,-0.7Q-77,0.4 -74,0.4Z", style: S(C.ski, "var(--stage-bg)", 0.4) });
    E(G, "rect", { x: -9, y: -3.8, width: 22, height: 2.2, rx: 0.8, style: S(C.metal) });
    if (pl.poles && pl.hands) for (const h of pl.hands) {
      const tipx = h[0] - (pl.dir[0] >= 0 ? 1 : -1) * 22, tipy = Math.min(-1, h[1] + 95);
      E(g, "path", { d: `M${f2(h[0])},${f2(h[1] - 4)}L${f2(tipx)},${f2(tipy)}`, style: S(null, C.metal, 0.8) });
      E(g, "circle", { cx: f2(tipx + (h[0] - tipx) * 0.08), cy: f2(tipy + (h[1] - tipy) * 0.08), r: 2, style: S(null, C.metal, 0.6) });
    }
    return bb(x - 100, x + 100, y - 10, y + 10);
  },
  box(g, pl) { return boxLike(g, pl, false); },
  "plyo-box"(g, pl) { return boxLike(g, pl, true); },
  step(g, pl) {
    const { x, w, h } = pl, x0 = x - w / 2;
    E(g, "rect", { x: f2(x0), y: f2(-h), width: f2(w), height: f2(h), rx: 2.5, style: S(C.equip, C.equipEdge, 0.6) });
    E(g, "rect", { x: f2(x0 + 1), y: f2(-h), width: f2(w - 2), height: 2.4, rx: 1.2, style: S(mx("--stage-ink-2", 45, "--stage-bg")) });
    return bb(x0, x0 + w, -h, 0);
  },
  kerb(g, pl) {
    const { x, h } = pl, m = pl.facing || 1, a = m > 0 ? x - 18 : x - 600, w = 618;
    E(g, "rect", { x: f2(a), y: f2(-h), width: f2(w), height: f2(h), style: S(mx("--stage-ink-2", 34, "--stage-bg-2"), C.equipEdge, 0.6) });
    E(g, "path", { d: `M${f2(a)},${f2(-h + 0.8)}H${f2(a + w)}`, style: S(null, "var(--stage-ink-2)", 0.8, "opacity: .7") });
    return bb(x - 20, x + 20, -h, 0);
  },
  hurdle(g, pl, o) {
    const { x } = pl;
    if ((o.view || pl.view) === "anterior") {
      for (const sx of [-50, 50]) { E(g, "rect", { x: f2(x + sx - 1.2), y: -86, width: 2.4, height: 86, style: S(C.metal) }); E(g, "rect", { x: f2(x + sx - 14), y: -2.2, width: 28, height: 2.2, style: S(C.metal) }); }
      E(g, "rect", { x: f2(x - 52), y: -91, width: 104, height: 9, style: S(C.light, "var(--stage-bg)", 0.4) });
      for (let i = -40; i <= 40; i += 20) E(g, "rect", { x: f2(x + i - 5), y: -91, width: 10, height: 9, style: S(mx("--fx-injury", 70, "--stage-bg")) });
      return bb(x - 53, x + 53, -91, 0);
    }
    E(g, "rect", { x: f2(x - 1.2), y: -86, width: 2.4, height: 86, style: S(C.metal) });
    E(g, "rect", { x: f2(x - 24), y: -2.2, width: 48, height: 2.2, style: S(C.metal) });
    E(g, "rect", { x: f2(x - 2.8), y: -92, width: 5.6, height: 10, rx: 0.8, style: S(C.light, "var(--stage-bg)", 0.4) });
    return bb(x - 25, x + 25, -92, 0);
  },
  bike(g, pl, o) {
    const m = pl.facing || 1, x = pl.x, sy = pl.seatY ?? -60;
    const hands = pl.hands || [[x + m * 60, -100], [x + m * 60, -100]], hx = (hands[0][0] + hands[1][0]) / 2, hy = Math.max(hands[0][1], hands[1][1]);
    if ((o.view || pl.view) === "anterior") {
      E(g, "ellipse", { cx: f2(x), cy: -34, rx: 3, ry: 34, style: S(null, C.grip, 2.4) });
      E(g, "path", { d: `M${f2(x - 22)},${f2(hy + 1)}H${f2(x + 22)}M${f2(x)},${f2(hy + 1)}V-34`, style: S(null, C.metal, 1.6) });
      return bb(x - 23, x + 23, Math.min(hy, sy) - 4, 0);
    }
    const rw = [x - m * 42, -34], fw = [hx + m * 18, -34], bbp = [x + m * 6, -30], st = [x - m * 2, sy + 2], ht = [hx + m * 4, hy + 10];
    for (const w of [rw, fw]) { E(g, "circle", { cx: f2(w[0]), cy: f2(w[1]), r: 33, style: S(null, C.grip, 2.6) }); E(g, "circle", { cx: f2(w[0]), cy: f2(w[1]), r: 30.5, style: S(null, C.metal, 0.4, "opacity: .5") }); }
    E(g, "path", { d: `M${f2(rw[0])},${f2(rw[1])}L${f2(bbp[0])},${f2(bbp[1])}L${f2(st[0])},${f2(st[1])}L${f2(rw[0])},${f2(rw[1])}M${f2(bbp[0])},${f2(bbp[1])}L${f2(ht[0])},${f2(ht[1])}L${f2(st[0])},${f2(st[1] + 3)}M${f2(ht[0])},${f2(ht[1])}L${f2(fw[0])},${f2(fw[1])}M${f2(ht[0])},${f2(ht[1])}L${f2(hx)},${f2(hy)}`, style: S(null, C.metal, 1.6, "stroke-linejoin: round") });
    E(g, "path", { d: `M${f2(st[0] - m * 10)},${f2(sy)}H${f2(st[0] + m * 8)}`, style: S(null, C.grip, 3, "stroke-linecap: round") });
    return bb(Math.min(rw[0], fw[0]) - 34, Math.max(rw[0], fw[0]) + 34, Math.min(hy, sy) - 4, 0);
  },
  "car-seat"(g, pl, o) {
    const m = pl.facing || 1, x = pl.x, top = -pl.h;
    const fill = mx("--stage-ink-2", 20, "--stage-bg-2"), edge = C.equipEdge;
    if ((o.view || pl.view) === "anterior") {
      E(g, "rect", { x: f2(x - 27), y: f2(top - 70), width: 54, height: 70, rx: 9, style: S(fill, edge, 0.6) });
      E(g, "rect", { x: f2(x - 14), y: f2(top - 92), width: 28, height: 18, rx: 6, style: S(fill, edge, 0.6) });
      E(g, "rect", { x: f2(x - 28), y: f2(top), width: 56, height: 12, rx: 5, style: S(fill, edge, 0.6) });
      return bb(x - 28, x + 28, top - 92, 0);
    }
    const low = pl.low ? [pl.low[0], -pl.low[1]] : [x - m * 12, top - 20], hi = pl.back ? [pl.back[0], -pl.back[1]] : [x - m * 16, top - 50];
    let ux = hi[0] - low[0], uy = hi[1] - low[1]; const n = Math.hypot(ux, uy) || 1; ux /= n; uy /= n;
    const nx = -m * Math.abs(uy), ny = m * ux * Math.sign(-uy || 1) * 0; // behind the back
    const b0 = [low[0] - m * 3, top + 2], b1 = [b0[0] + ux * 66, b0[1] + uy * 66];
    const bt = 11;
    E(g, "path", { d: `M${f2(b0[0])},${f2(b0[1])}L${f2(b1[0])},${f2(b1[1])}L${f2(b1[0] - m * bt)},${f2(b1[1] + 2)}L${f2(b0[0] - m * bt)},${f2(b0[1] + 4)}Z`, style: S(fill, edge, 0.6, "stroke-linejoin: round") });
    const hr = pl.head ? [pl.head[0] - m * 13, -pl.head[1]] : [b1[0] + ux * 10, b1[1] + uy * 10];
    E(g, "rect", { x: f2(hr[0] - 5.5), y: f2(hr[1] - 9), width: 11, height: 18, rx: 4.5, style: S(fill, edge, 0.6) });
    E(g, "path", { d: `M${f2(hr[0])},${f2(hr[1] + 9)}L${f2(b1[0] - m * 4)},${f2(b1[1])}`, style: S(null, C.metal, 1) });
    E(g, "path", { d: `M${f2(b0[0] - m * bt)},${f2(top)}L${f2(x + m * 28)},${f2(top - 3)}Q${f2(x + m * 32)},${f2(top + 2)} ${f2(x + m * 28)},${f2(top + 10)}L${f2(b0[0] - m * bt)},${f2(top + 12)}Z`, style: S(fill, edge, 0.6) });
    void nx; void ny;
    const xs = [b0[0] - m * bt, x + m * 32, hr[0]];
    return bb(Math.min(...xs) - 6, Math.max(...xs) + 6, Math.min(b1[1], hr[1] - 9), top + 12);
  },
  chair(g, pl, o) {
    const m = pl.facing || 1, x = pl.x, top = -pl.h, w = pl.w || 44;
    const fill = C.wood, edge = C.woodEdge;
    if ((o.view || pl.view) === "anterior") {
      E(g, "rect", { x: f2(x - 24), y: f2(top - 44), width: 48, height: 26, rx: 3, style: S(fill, edge, 0.6) });
      E(g, "rect", { x: f2(x - 25), y: f2(top), width: 50, height: 4, rx: 1.5, style: S(fill, edge, 0.6) });
      for (const sx of [-21, 18]) E(g, "rect", { x: f2(x + sx), y: f2(top + 4), width: 3, height: f2(-top - 4), style: S(fill, edge, 0.5) });
      return bb(x - 25, x + 25, top - 44, 0);
    }
    const xb = x - m * w / 2, xf = x + m * w / 2;
    const a = Math.min(xb, xf);
    E(g, "rect", { x: f2(a), y: f2(top), width: f2(w), height: 4, rx: 1.5, style: S(fill, edge, 0.6) });
    E(g, "path", { d: `M${f2(xf - m * 3)},${f2(top + 4)}V0M${f2(xb + m * 3)},${f2(top + 4)}V0`, style: S(null, edge, 3) });
    E(g, "path", { d: `M${f2(xb + m * 1.5)},${f2(top)}L${f2(xb - m * 3)},${f2(top - 44)}`, style: S(null, fill, 3.4, "stroke-linecap: round") });
    E(g, "path", { d: `M${f2(xb - m * 0.5)},${f2(top - 26)}L${f2(xb - m * 2.6)},${f2(top - 42)}`, style: S(null, fill, 7, "stroke-linecap: round") });
    return bb(a - 6, a + w + 6, top - 46, 0);
  },
  bench(g, pl, o) {
    const x = pl.x, top = -pl.h, L = pl.w || 112;
    if ((o.view || pl.view) === "anterior") {
      E(g, "rect", { x: f2(x - 15), y: f2(top), width: 30, height: 6, rx: 2.5, style: S(C.pad, C.padEdge, 0.6) });
      E(g, "rect", { x: f2(x - 3), y: f2(top + 6), width: 6, height: f2(-top - 6), style: S(C.metal) });
      E(g, "rect", { x: f2(x - 20), y: -2.5, width: 40, height: 2.5, style: S(C.metal) });
      return bb(x - 20, x + 20, top, 0);
    }
    E(g, "rect", { x: f2(x - L / 2), y: f2(top), width: f2(L), height: 6, rx: 2.5, style: S(C.pad, C.padEdge, 0.6) });
    E(g, "rect", { x: f2(x - L / 2 + 4), y: f2(top + 6), width: f2(L - 8), height: 2.6, style: S(C.metal) });
    for (const sx of [-L / 2 + 10, L / 2 - 12]) E(g, "rect", { x: f2(x + sx), y: f2(top + 8), width: 2.6, height: f2(-top - 8), style: S(C.metal) });
    return bb(x - L / 2, x + L / 2, top, 0);
  },
  "resistance-band"(g, pl) {
    const [a, b] = [pl.p1, pl.p2];
    const cx = (a[0] + b[0]) / 2, cy = (a[1] + b[1]) / 2 + 4;
    E(g, "path", { d: `M${f2(a[0])},${f2(a[1])}Q${f2(cx)},${f2(cy)} ${f2(b[0])},${f2(b[1])}`, style: S(null, C.band, 1.5, "stroke-linecap: round") });
    E(g, "rect", { x: f2(b[0] - 1.5), y: f2(b[1] - 4), width: 3, height: 8, rx: 1, style: S(C.metal) });
    return bb(Math.min(a[0], b[0]) - 2, Math.max(a[0], b[0]) + 2, Math.min(a[1], b[1]) - 4, Math.max(a[1], b[1], cy) + 4);
  },
  mat(g, pl) {
    E(g, "rect", { x: f2(pl.x0), y: -2, width: f2(pl.x1 - pl.x0), height: 2.6, rx: 1.1, style: S(mx("--fig-kit-far", 62, "--stage-bg-2"), mx("--fig-kit", 40, "--stage-bg"), 0.5) });
    return bb(pl.x0, pl.x1, -1.5, 0.6);
  },
  "foam-roller"(g, pl, o) {
    const { x } = pl, r = pl.r || 7.5;
    if ((o.view || pl.view) === "anterior") { E(g, "rect", { x: f2(x - 45), y: f2(-2 * r), width: 90, height: f2(2 * r), rx: f2(r), style: S(C.pad, C.padEdge, 0.6) }); return bb(x - 45, x + 45, -2 * r, 0); }
    E(g, "circle", { cx: f2(x), cy: f2(-r), r: f2(r), style: S(C.pad, C.padEdge, 0.6) });
    E(g, "circle", { cx: f2(x), cy: f2(-r), r: f2(r * 0.32), style: S(C.padEdge) });
    return bb(x - r, x + r, -2 * r, 0);
  },
  wall(g, pl) {
    const fill = mx("--stage-ink-2", 15, "--stage-bg-2");
    if (pl.panel) { E(g, "rect", { x: f2(pl.x - pl.w / 2), y: -235, width: f2(pl.w), height: 235, style: S(fill, C.grid, 0.8) }); return null; }
    const x = pl.x, d = pl.dirn || -1, a = d > 0 ? x : x - 14;
    E(g, "rect", { x: f2(a), y: -240, width: 14, height: 240, style: S(fill) });
    E(g, "path", { d: `M${f2(x)},-240V0`, style: S(null, "var(--stage-ink-2)", 0.8, "opacity: .7") });
    return bb(Math.min(a, a + 14), Math.max(a, a + 14), -120, 0);
  },
  stairs(g, pl) {
    const m = pl.facing || 1, x0 = pl.x - m * 14;
    let d = `M${f2(x0)},0`;
    for (let i = 0; i < 5; i++) d += `V${-(i + 1) * 17}H${f2(x0 + m * (i + 1) * 28)}`;
    d += "V0Z";
    E(g, "path", { d, style: S(C.equip, C.equipEdge, 0.6, "stroke-linejoin: round") });
    return bb(Math.min(x0, x0 + m * 140), Math.max(x0, x0 + m * 140), -85, 0);
  },
  "ice-patch"(g, pl) {
    E(g, "ellipse", { cx: f2(pl.x), cy: 0.5, rx: f2(pl.w / 2), ry: 2.6, style: S(mx("--anat-fluid", 55, "--stage-bg"), null, 0, "opacity: .85") });
    E(g, "path", { d: `M${f2(pl.x - pl.w * 0.3)},0L${f2(pl.x - pl.w * 0.12)},-0.4M${f2(pl.x + pl.w * 0.05)},0.6L${f2(pl.x + pl.w * 0.3)},0.2`, style: S(null, "var(--stage-ink)", 0.6, "opacity: .55; stroke-linecap: round") });
    return bb(pl.x - pl.w / 2, pl.x + pl.w / 2, -1, 3);
  },
  desk(g, pl, o) {
    const m = pl.facing || 1, top = pl.y, x = pl.x;
    const fill = C.wood, edge = C.woodEdge;
    if ((o.view || pl.view) === "anterior") {
      E(g, "rect", { x: f2(x - 60), y: f2(top), width: 120, height: 3.2, style: S(fill, edge, 0.5) });
      for (const sx of [-56, 53]) E(g, "rect", { x: f2(x + sx), y: f2(top + 3), width: 3, height: f2(-top - 3), style: S(fill, edge, 0.4) });
      return bb(x - 60, x + 60, top, 0);
    }
    const a = x - m * 22, b = x + m * 78, lo = Math.min(a, b);
    E(g, "rect", { x: f2(lo), y: f2(top), width: 100, height: 3.2, style: S(fill, edge, 0.5) });
    E(g, "path", { d: `M${f2(b - m * 4)},${f2(top + 3)}V0`, style: S(null, edge, 3) });
    E(g, "rect", { x: f2(b - m * 18 - 2), y: f2(top - 36), width: 4, height: 30, rx: 1, style: S(C.equip, C.equipEdge, 0.5) });
    E(g, "path", { d: `M${f2(b - m * 18)},${f2(top - 6)}V${f2(top)}`, style: S(null, C.equipEdge, 1.6) });
    return bb(lo, lo + 100, top - 36, 0);
  },
  keyboard(g, pl, o) {
    const w = (o.view || pl.view) === "anterior" ? 44 : 30;
    E(g, "rect", { x: f2(pl.x - w / 2), y: f2(pl.y - 1.4), width: w, height: 2.2, rx: 0.8, style: S(C.equip, C.equipEdge, 0.4) });
    return bb(pl.x - w / 2, pl.x + w / 2, pl.y - 1.4, pl.y + 1);
  },
  _anchor(g, pl) {
    E(g, "path", { d: `M${f2(pl.x)},${f2(pl.y)}V0`, style: S(null, C.metal, 2) });
    E(g, "circle", { cx: f2(pl.x), cy: f2(pl.y), r: 4.2, style: S(C.pad, C.padEdge, 0.6) });
    return bb(pl.x - 5, pl.x + 5, pl.y - 5, 0);
  },
  _arc(g, pl) {
    E(g, "circle", { cx: f2(pl.x), cy: f2(pl.y), r: 8, style: S(null, "var(--fx-highlight)", 0.7, "stroke-dasharray: 2 1.6; opacity: .8") });
    return bb(pl.x - 9, pl.x + 9, pl.y - 9, pl.y + 9);
  }
};
function boxLike(g, pl, plyo) {
  const { x, w, h } = pl, x0 = x - w / 2;
  if (plyo) {
    E(g, "path", { d: `M${f2(x0)},0L${f2(x0 + 4)},${f2(-h)}H${f2(x0 + w - 4)}L${f2(x0 + w)},0Z`, style: S(C.wood, C.woodEdge, 0.6, "stroke-linejoin: round") });
    E(g, "rect", { x: f2(x - 7), y: f2(-h + 7), width: 14, height: 4, rx: 2, style: S("var(--stage-bg)", null, 0, "opacity: .6") });
  } else {
    E(g, "rect", { x: f2(x0), y: f2(-h), width: f2(w), height: f2(h), rx: 1.2, style: S(C.equip, C.equipEdge, 0.6) });
    E(g, "path", { d: `M${f2(x0 + 1)},${f2(-h + 1)}H${f2(x0 + w - 1)}`, style: S(null, "var(--stage-ink-2)", 0.6, "opacity: .55") });
  }
  return bb(x0, x0 + w, -h, 0);
}

/** Draw a placed prop. Returns a world (y-up) bbox or null. */
export function drawProp(g, type, pl, opts = {}) {
  if (!pl) return null;
  const G = E(g, "g", { class: "prop prop-" + type });
  if (BALL_R[type]) return drawBall(G, pl, opts.t || 0);
  const fn = DRAW[type];
  if (!fn) return null;
  return fn(G, pl, opts);
}

/* ---------------- environments ---------------- */
const X0 = -1500, XW = 3000;
function ground(g, fill, edge) {
  E(g, "rect", { x: X0, y: 0, width: XW, height: 700, style: S(fill) });
  E(g, "path", { d: `M${X0},0H${X0 + XW}`, style: S(null, edge, 0.9) });
}
function backWall(g, h = 320, op = 0.5) { E(g, "rect", { x: X0, y: -h, width: XW, height: h, style: S("var(--stage-bg-2)", null, 0, `opacity: ${op}`) }); }
function lines(g, ys, color, w0, w1, op0, op1, dash) {
  ys.forEach((y, i) => { const u = ys.length > 1 ? i / (ys.length - 1) : 0; E(g, "path", { d: `M${X0},${y}H${X0 + XW}`, style: S(null, color, f2(w0 + (w1 - w0) * u), `opacity: ${f2(op0 + (op1 - op0) * u)};${dash ? " stroke-dasharray: " + dash : ""}`) }); });
}
const refX = (o, id, d = 0) => (o.ref ? o.ref.targets[id][0] : d);
const refM = (o) => (o.ref ? o.ref.facing : 1);

const ENV = {
  plain(g) { ground(g, mx("--fig-ground", 50, "--stage-bg"), "var(--fig-ground)"); },
  pitch(g) {
    ground(g, mx("--fx-heal", 11, "--stage-bg"), mx("--fx-heal", 26, "--stage-bg"));
    let d = "";
    for (let i = -10; i < 10; i += 2) d += `M${i * 150},0h150v700h-150Z`;
    E(g, "path", { d, style: S(mx("--fx-heal", 15, "--stage-bg")) });
    lines(g, [9], "var(--stage-ink)", 1.1, 1.1, 0.16, 0.16);
    let tf = "";
    for (let i = 0; i < 130; i++) { const x = X0 + i * 23 + rnd(i) * 12, h = 1.5 + rnd(i + 99) * 2.5; tf += `M${f2(x)},0.4l${f2(-0.6 + rnd(i + 7))},${f2(-h)}`; }
    E(g, "path", { d: tf, style: S(null, mx("--fx-heal", 30, "--stage-bg"), 0.6, "stroke-linecap: round") });
  },
  court(g, o) {
    ground(g, mx("--anat-fat", 12, "--stage-bg"), mx("--anat-fat", 28, "--stage-bg"));
    lines(g, [4, 10, 18, 29, 44], mx("--anat-fat", 22, "--stage-bg"), 0.5, 1.2, 0.55, 0.3);
    lines(g, [7], "var(--stage-ink)", 1.3, 1.3, 0.26, 0.26);
    const hx = refX(o, "pelvis") + (o.view === "anterior" ? 430 : refM(o) * 470);
    E(g, "path", { d: `M${f2(hx + 70)},0V-330H${f2(hx + 18)}M${f2(hx + 12)},-392V-288`, style: S(null, C.grid, 3) });
    E(g, "ellipse", { cx: f2(hx - 8), cy: -305, rx: 22, ry: 3, style: S(null, mx("--fig-opponent", 45, "--stage-bg"), 1.4) });
    E(g, "path", { d: `M${f2(hx - 26)},-304l5,24M${f2(hx - 12)},-303l2,24M${f2(hx + 4)},-303l-2,24M${f2(hx + 12)},-304l-5,24`, style: S(null, C.grid, 0.8) });
  },
  track(g) {
    ground(g, mx("--fx-injury", 14, "--stage-bg"), mx("--fx-injury", 24, "--stage-bg"));
    lines(g, [4, 11, 21, 35, 54], "var(--stage-ink)", 0.7, 1.6, 0.32, 0.12);
  },
  gym(g) {
    backWall(g, 340, 0.55);
    E(g, "path", { d: `M${X0},-12H${X0 + XW}`, style: S(null, C.grid, 1.2) });
    E(g, "path", { d: "M300,0V-235M420,0V-235M292,-150H428M300,-235H420", style: S(null, C.grid, 2.4) });
    E(g, "circle", { cx: 300, cy: -150, r: 22, style: S(null, C.grid, 2) });
    E(g, "circle", { cx: 420, cy: -150, r: 22, style: S(null, C.grid, 2) });
    ground(g, mx("--stage-ink-2", 9, "--stage-bg"), C.grid);
    let d = ""; for (let i = -15; i <= 15; i++) d += `M${i * 100},0l${f2(i * 6)},700`;
    E(g, "path", { d, style: S(null, C.grid, 0.6, "opacity: .5") });
  },
  road(g) {
    E(g, "path", { d: "M520,0V-420Q520,-440 500,-440H470", style: S(null, C.grid, 3) });
    ground(g, mx("--stage-ink-2", 11, "--stage-bg"), mx("--stage-ink-2", 30, "--stage-bg"));
    lines(g, [16], "var(--stage-ink)", 2, 2, 0.3, 0.3, "60 45");
    lines(g, [44], "var(--stage-ink)", 3, 3, 0.18, 0.18, "90 60");
  },
  home(g) {
    backWall(g, 300, 0.5);
    E(g, "rect", { x: X0, y: -11, width: XW, height: 11, style: S(mx("--stage-ink-2", 13, "--stage-bg")) });
    E(g, "rect", { x: -390, y: -212, width: 96, height: 212, style: S(null, C.grid, 2.6) });
    E(g, "rect", { x: 230, y: -195, width: 72, height: 52, style: S(null, C.grid, 2) });
    ground(g, mx("--anat-fat", 9, "--stage-bg"), mx("--anat-fat", 20, "--stage-bg"));
    lines(g, [6, 15, 28], mx("--anat-fat", 16, "--stage-bg"), 0.5, 1, 0.5, 0.3);
    E(g, "rect", { x: -120, y: 0.4, width: 240, height: 3.2, rx: 1.5, style: S(mx("--fig-opponent", 16, "--stage-bg")) });
  },
  stairs(g, o) {
    ground(g, mx("--fig-ground", 46, "--stage-bg"), "var(--fig-ground)");
    const m = refM(o), ext = o.ref ? (m > 0 ? o.ref.bounds.x1 : o.ref.bounds.x0) : 40, x0 = ext + m * 30;
    let d = `M${f2(x0)},0`;
    for (let i = 0; i < 7; i++) d += `V${-(i + 1) * 17}H${f2(x0 + m * (i + 1) * 28)}`;
    d += "V0Z";
    E(g, "path", { d, style: S(mx("--stage-ink-2", 16, "--stage-bg-2"), C.grid, 0.8, "stroke-linejoin: round") });
    E(g, "path", { d: `M${f2(x0 + m * 14)},-105L${f2(x0 + m * 182)},-207`, style: S(null, mx("--stage-ink-2", 45, "--stage-bg"), 2.2) });
    let b = ""; for (let i = 0; i < 7; i++) { const x = x0 + m * (14 + i * 28); b += `M${f2(x)},${-(i + 1) * 17}V${f2(-105 - i * 17)}`; }
    E(g, "path", { d: b, style: S(null, C.grid, 1) });
  },
  snow(g) {
    E(g, "path", { d: "M-1500,0L-1050,-330L-760,-190L-420,-450L-60,-210L260,-380L640,-160L980,-420L1500,-200V0Z", style: S(mx("--stage-ink-2", 12, "--stage-bg")) });
    E(g, "path", { d: "M-480,-400L-420,-450L-350,-395L-395,-405ZM920,-370L980,-420L1050,-365L1000,-372ZM210,-345L260,-380L320,-338Z", style: S(mx("--stage-ink", 30, "--stage-bg")) });
    ground(g, mx("--stage-ink", 19, "--stage-bg"), mx("--stage-ink", 34, "--stage-bg"));
    lines(g, [7, 9.5], "var(--stage-bg)", 0.8, 0.8, 0.25, 0.25);
    let d = ""; for (let i = 0; i < 90; i++) d += `M${f2(X0 + rnd(i) * XW)},${f2(3 + rnd(i + 50) * 60)}h0.8`;
    E(g, "path", { d, style: S(null, "var(--stage-ink)", 0.8, "opacity: .35; stroke-linecap: round") });
  },
  office(g, o) {
    backWall(g, 300, 0.5);
    E(g, "rect", { x: -560, y: -255, width: 210, height: 140, style: S(null, C.grid, 2.4) });
    E(g, "path", { d: "M-455,-255V-115M-560,-185H-350", style: S(null, C.grid, 1.4) });
    ground(g, mx("--stage-ink-2", 8, "--stage-bg"), C.grid);
    if (o.ref && o.ref.pose.seat > 0.5) {
      const pl = placeProp("desk", o.ref, {}, { view: o.view, frames: o.frames });
      if (pl) DRAW.desk(g, pl, { view: o.view });
    } else DRAW.desk(g, { x: 140, y: -74, facing: 1, view: o.view }, { view: o.view });
  },
  car(g, o) {
    const m = refM(o), view = o.view;
    const F = o.frames;
    const px = refX(o, "pelvis", 0);
    E(g, "rect", { x: X0, y: 0, width: XW, height: 700, style: S(mx("--stage-ink-2", 8, "--stage-bg")) });
    if (view === "anterior") {
      E(g, "path", { d: `M${f2(px - 120)},-150Q${f2(px)},-175 ${f2(px + 120)},-150L${f2(px + 135)},-40M${f2(px - 120)},-150L${f2(px - 135)},-40`, style: S(null, C.grid, 3) });
      if (o.ref) { const pl = placeProp("car-seat", o.ref, {}, { view, frames: F, seat: true }); if (pl) DRAW["car-seat"](g, pl, { view }); }
      return;
    }
    const hx = F ? (F.handR.p[0] + F.handL.p[0]) / 2 : px + m * 60, hy = F ? (F.handR.p[1] + F.handL.p[1]) / 2 : -95;
    const roofY = o.ref ? -o.ref.bounds.y1 - 10 : -150;
    E(g, "path", { d: `M${f2(px - m * 150)},${f2(roofY)}H${f2(px + m * 55)}L${f2(hx + m * 62)},${f2(hy + 5)}`, style: S(null, C.grid, 3, "stroke-linejoin: round") });
    E(g, "path", { d: `M${f2(px - m * 150)},${f2(roofY)}V${f2(roofY + 50)}M${f2(px - m * 120)},-30H${f2(hx + m * 70)}`, style: S(null, C.grid, 2) });
    E(g, "path", { d: `M${f2(hx + m * 62)},${f2(hy + 5)}Q${f2(hx + m * 30)},${f2(hy + 2)} ${f2(hx + m * 16)},${f2(hy + 22)}L${f2(hx + m * 30)},${f2(hy + 34)}L${f2(hx + m * 72)},${f2(hy + 34)}Z`, style: S(mx("--stage-ink-2", 14, "--stage-bg-2"), C.grid, 0.8) });
    E(g, "ellipse", { cx: f2(hx + m * 2), cy: f2(hy + 2), rx: 3, ry: 18, transform: `rotate(${f2(-m * 22)} ${f2(hx + m * 2)} ${f2(hy + 2)})`, style: S(null, mx("--stage-ink-2", 45, "--stage-bg"), 2.4) });
    E(g, "path", { d: `M${f2(hx + m * 4)},${f2(hy + 4)}L${f2(hx + m * 30)},${f2(hy + 18)}`, style: S(null, mx("--stage-ink-2", 40, "--stage-bg"), 2.2) });
    if (o.ref) { const pl = placeProp("car-seat", o.ref, {}, { view, frames: F, seat: true }); if (pl) DRAW["car-seat"](g, pl, { view }); }
  },
  "climbing-wall"(g, o) {
    const holdCols = ["var(--fig-opponent)", "var(--fx-heal)", "var(--fx-force)"];
    if (o.view === "anterior") {
      E(g, "rect", { x: X0, y: -800, width: XW, height: 800, style: S(mx("--fig-opponent", 7, "--stage-bg-2")) });
      for (let i = 0; i < 70; i++) { const x = -700 + (i % 10) * 140 + rnd(i) * 70, y = -40 - Math.floor(i / 10) * 95 - rnd(i + 3) * 40; E(g, "ellipse", { cx: f2(x), cy: f2(y), rx: f2(3 + rnd(i + 9) * 3), ry: f2(2.5 + rnd(i + 5) * 2), style: S(holdCols[i % 3], null, 0, "opacity: .55") }); }
      ground(g, mx("--fig-ground", 46, "--stage-bg"), "var(--fig-ground)");
      E(g, "rect", { x: -300, y: -10, width: 600, height: 10, rx: 3, style: S(C.pad) });
      return;
    }
    const m = refM(o);
    let face = 45;
    if (o.frames) face = (m > 0 ? Math.max(o.frames.handR.p[0], o.frames.handL.p[0]) : Math.min(o.frames.handR.p[0], o.frames.handL.p[0])) + m * 4;
    const a = m > 0 ? face : face - 60;
    E(g, "rect", { x: f2(a), y: -800, width: 60, height: 800, style: S(mx("--fig-opponent", 9, "--stage-bg-2")) });
    E(g, "path", { d: `M${f2(face)},-800V0`, style: S(null, C.grid, 1.2) });
    let hd = "";
    for (let i = 0; i < 18; i++) { const y = -25 - i * 38 - rnd(i) * 14; hd += `M${f2(face)},${f2(y - 3)}q${f2(-m * 5)},2 0,${f2(5 + rnd(i + 4) * 2)}Z`; }
    E(g, "path", { d: hd, style: S("var(--fig-opponent)", null, 0, "opacity: .75") });
    ground(g, mx("--fig-ground", 46, "--stage-bg"), "var(--fig-ground)");
    E(g, "rect", { x: f2(m > 0 ? face - 220 : face), y: -9, width: 220, height: 9, rx: 3, style: S(C.pad) });
  },
  "dance-studio"(g) {
    backWall(g, 300, 0.5);
    E(g, "rect", { x: -620, y: -262, width: 1240, height: 236, style: S("var(--stage-bg-2)", C.grid, 1.2) });
    let d = ""; for (let i = 0; i < 9; i++) d += `M${-560 + i * 150},-30L${-470 + i * 150},-255`;
    E(g, "path", { d, style: S(null, "var(--stage-ink)", 3, "opacity: .035") });
    E(g, "path", { d: "M-620,-105H620", style: S(null, mx("--anat-fat", 40, "--stage-bg"), 2.6, "stroke-linecap: round") });
    E(g, "path", { d: "M-500,-105v-12M0,-105v-12M500,-105v-12", style: S(null, C.grid, 1.6) });
    ground(g, mx("--anat-fat", 16, "--stage-bg"), mx("--anat-fat", 30, "--stage-bg"));
    lines(g, [5, 13, 25, 42], mx("--anat-fat", 24, "--stage-bg"), 0.5, 1, 0.5, 0.25);
  },
  pool(g, o) {
    const m = refM(o), ext = o.ref ? (m > 0 ? o.ref.bounds.x1 : o.ref.bounds.x0) : 90, edge = ext + m * 70;
    backWall(g, 260, 0.4);
    const deckFill = mx("--anat-fluid", 10, "--stage-bg-2");
    const a = m > 0 ? X0 : edge, w = m > 0 ? edge - X0 : X0 + XW - edge;
    E(g, "rect", { x: f2(a), y: 0, width: f2(w), height: 700, style: S(deckFill) });
    E(g, "path", { d: `M${f2(a)},0H${f2(a + w)}`, style: S(null, mx("--anat-fluid", 30, "--stage-bg"), 0.9) });
    let t = ""; for (let i = 0; i < 60; i++) { const x = (m > 0 ? edge : edge) - m * i * 30; t += `M${f2(x)},0V700`; }
    E(g, "path", { d: t, style: S(null, C.grid, 0.5, "opacity: .5") });
    const wa = m > 0 ? edge : X0, ww = m > 0 ? X0 + XW - edge : edge - X0;
    E(g, "rect", { x: f2(wa), y: 9, width: f2(ww), height: 700, style: S(mx("--anat-fluid", 22, "--stage-bg")) });
    let wv = `M${f2(wa)},9`; for (let x = 0; x < ww; x += 24) wv += `q6,-2.4 12,0t12,0`;
    E(g, "path", { d: wv, style: S(null, mx("--anat-fluid", 50, "--stage-bg"), 1) });
    let r = ""; for (let x = 20; x < ww; x += 9) r += `M${f2(wa + x)},14h3`;
    E(g, "path", { d: r, style: S(null, mx("--fx-injury", 50, "--stage-ink"), 2, "opacity: .5; stroke-linecap: round") });
  }
};

/** Draw environment `id` (falls back to plain). */
export function drawEnvironment(g, id, o = {}) {
  const G = E(g, "g", { class: "env env-" + (ENV[id] ? id : "plain") });
  (ENV[id] || ENV.plain)(G, o);
  return G;
}
