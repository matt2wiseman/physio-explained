/**
 * MOI phase renderer. OWNER: A2.
 *   renderMoiFrame(g, phase, t, ctx) → { bbox: {x, y, w, h}, targets: { kneeR: [x, y], ... }, actors: { <id>: targets } }
 * Coordinates: everything is drawn in the user space of `g` with the y-flip already applied:
 *   cm, x right, y DOWN, ground at y = 0, head at negative y (no transform is set on `g`).
 *   bbox covers actors + attached/keyframed props only (NOT the environment, which is drawn ≈ x −1500…1500).
 * Pure & deterministic: the frame is a function of (phase, t) only; scrubbing backwards is safe.
 * ctx: { reducedMotion, width, height, defs, warn, pxPerCm? } — pxPerCm (stage units per cm) sizes labels
 * exactly; without it the size is estimated from the phase's framing so labels read ≈ 14 px on the 800×450 stage.
 * Also exported: moiBounds(phase) — union bbox over the whole phase (stable camera framing).
 */
import { BODY_TARGETS, FORCE_DIRS } from "./catalogue.js";
import { buildBody, drawBody, drawShadow, resolveKeyframes, poseAt, targetFrames, svgEl, fmt, clamp, lerp, EASE, mixc } from "./rig.js";
import { drawProp, drawEnvironment, placeProp, ENV_IDS, PROP_IDS, SUPPORT_PROPS } from "./props.js";

const cache = new WeakMap();
const sigOf = (ph) => JSON.stringify([ph.view, ph.actors, ph.keyframes, ph.props, ph.environment]);

function prepare(phase, warn) {
  const sig = sigOf(phase);
  const c = cache.get(phase);
  if (c && c.sig === sig) return c;
  const view = phase.view === "anterior" ? "anterior" : "lateral";
  const actorsIn = Array.isArray(phase.actors) && phase.actors.length ? phase.actors : [{ id: "athlete", kit: "athlete" }];
  const firstId = actorsIn[0].id || "athlete";
  const kfs = Array.isArray(phase.keyframes) ? phase.keyframes : [];
  const actors = actorsIn.map((a, i) => {
    const id = a.id || (i ? "actor" + i : "athlete");
    const mine = kfs.filter((k) => (k.actor || firstId) === id).slice().sort((p, q) => (p.t || 0) - (q.t || 0));
    return { id, kit: a.kit || (i ? "opponent" : "athlete"), facing: a.facing === "left" ? "left" : "right", kfs: resolveKeyframes(mine.length ? mine : [{ t: 0, pose: "stand" }], view, warn) };
  });
  if (phase.environment && !ENV_IDS.includes(phase.environment)) warn(`[moi] unknown environment "${phase.environment}"`);
  for (const p of phase.props || []) if (!PROP_IDS.includes(p.type)) warn(`[moi] unknown prop type "${p.type}"`);
  for (const f of phase.forces || []) { if (!BODY_TARGETS.includes(f.at)) warn(`[moi] unknown force target "${f.at}"`); if (f.dir !== undefined && !FORCE_DIRS.includes(f.dir)) warn(`[moi] unknown force dir "${f.dir}"`); }
  for (const h of [...(phase.highlights || []), ...(phase.impacts || [])]) if (!BODY_TARGETS.includes(h.at)) warn(`[moi] unknown target "${h.at}"`);
  // reference body for environment alignment & seats: first actor at its first seated keyframe (else first keyframe)
  const a0 = actors[0];
  const seatK = a0.kfs.find((k) => k.pose.seat > 0.5) || a0.kfs[0];
  const ref = buildBody(seatK.pose, view, { kit: a0.kit, facing: a0.facing });
  const seats = [];
  actors.forEach((a, i) => {
    const k = a.kfs.find((q) => q.pose.seat > 0.5);
    if (!k) return;
    const hasSupport = (phase.props || []).some((p) => SUPPORT_PROPS.includes(p.type) && (p.actor || firstId) === a.id);
    if (hasSupport) return;
    if (i === 0 && phase.environment === "car") return; // the car environment draws its own seat
    const b = i === 0 ? ref : buildBody(k.pose, view, { kit: a.kit, facing: a.facing });
    const pl = placeProp(k.pose.hints?.seatProp || "chair", b, k.pose.hints || {}, { view, seat: true, frames: targetFrames(b) });
    if (pl) seats.push(pl);
  });
  // phase extent (for label sizing & moiBounds)
  const dur = Math.max(0.01, phase.duration || 5);
  let bx0 = Infinity, bx1 = -Infinity, by0 = Infinity, by1 = -Infinity;
  for (let i = 0; i <= 8; i++) {
    const t = (dur * i) / 8;
    for (const a of actors) {
      const b = buildBody(poseAt(a.kfs, t, view), view, { kit: a.kit, facing: a.facing });
      bx0 = Math.min(bx0, b.bounds.x0); bx1 = Math.max(bx1, b.bounds.x1); by0 = Math.min(by0, -b.bounds.y1); by1 = Math.max(by1, -b.bounds.y0);
    }
  }
  const ext = { x: bx0, y: by0, w: bx1 - bx0, h: by1 - by0 };
  const k = Math.min(800 / (Math.max(ext.w, 60) * 1.3), 450 / (Math.max(ext.h, 60) * 1.35));
  const out = { sig, view, actors, firstId, ref, refFrames: targetFrames(ref), seats, ext, k };
  cache.set(phase, out);
  return out;
}

/** Union bbox (y-down screen cm) of all actors over the whole phase — use for a steady camera. */
export function moiBounds(phase, ctx = {}) { return { ...prepare(phase, ctx.warn || (() => {})).ext }; }

function ensureDefs(ctx, g) {
  const defs = ctx.defs || null;
  const doc = g.ownerDocument;
  const has = (id) => (defs && defs.querySelector("#" + id)) || doc.getElementById(id);
  if (has("moi-glow")) return "url(#moi-glow)";
  const host = defs || svgEl("defs", null, g);
  const rg = svgEl("radialGradient", { id: "moi-glow", cx: "50%", cy: "50%", r: "50%" }, host);
  svgEl("stop", { offset: "0%", style: "stop-color: var(--fx-highlight); stop-opacity: .85" }, rg);
  svgEl("stop", { offset: "55%", style: "stop-color: var(--fx-highlight); stop-opacity: .32" }, rg);
  svgEl("stop", { offset: "100%", style: "stop-color: var(--fx-highlight); stop-opacity: 0" }, rg);
  return "url(#moi-glow)";
}

const win = (t, t0, t1, fin = 0.2, fout = 0.25) => (t < t0 || t > t1 ? 0 : Math.min(1, (t - t0) / fin, (t1 - t) / fout + (t1 - t0 < fout ? 1 : 0)));

/** Map a force direction to screen (y-down): { kind: "arrow", u } or { kind: "out" | "in" }. */
function forceVector(f, view, side, facing) {
  if (typeof f.angle === "number") { const a = (f.angle * Math.PI) / 180; return { kind: "arrow", u: [Math.cos(a), -Math.sin(a)] }; }
  const d = f.dir;
  if (d === "up") return { kind: "arrow", u: [0, -1] };
  if (d === "down") return { kind: "arrow", u: [0, 1] };
  if (d === "toward-viewer") return { kind: "out" };
  if (d === "away-from-viewer") return { kind: "in" };
  if (view === "lateral") {
    if (d === "forward") return { kind: "arrow", u: [facing, 0] };
    if (d === "backward") return { kind: "arrow", u: [-facing, 0] };
    // viewer stands on the patient's right: R-limb lateral = toward viewer
    if (d === "lateral") return { kind: side > 0 ? "out" : "in" };
    if (d === "medial") return { kind: side > 0 ? "in" : "out" };
  } else {
    if (d === "forward") return { kind: "out" };
    if (d === "backward") return { kind: "in" };
    // patient's R is on the viewer's left: medial for R = screen +x
    const med = side * facing;
    if (d === "medial") return { kind: "arrow", u: [med, 0] };
    if (d === "lateral") return { kind: "arrow", u: [-med, 0] };
  }
  return { kind: "arrow", u: [1, 0] };
}

function textEl(g, x, y, str, fs, anchor, style) {
  const t = svgEl("text", { x: fmt(x), y: fmt(y), "font-size": fmt(fs), "text-anchor": anchor, "dominant-baseline": "middle",
    style: `font-family: var(--font-body); font-weight: 600; fill: ${style || "var(--stage-ink)"}; stroke: var(--stage-bg); stroke-width: ${fmt(fs * 0.32)}; stroke-linejoin: round; paint-order: stroke` }, g);
  t.textContent = str;
  return t;
}

export function renderMoiFrame(g, phase, t, ctx = {}) {
  const warn = typeof ctx.warn === "function" ? ctx.warn : (m) => console.warn(m);
  while (g.firstChild) g.removeChild(g.firstChild);
  let P;
  try { P = prepare(phase || {}, warn); } catch (e) { warn("[moi] " + e.message); return { bbox: { x: -60, y: -190, w: 120, h: 200 }, targets: {} }; }
  const view = P.view, rm = !!ctx.reducedMotion;
  const k = ctx.pxPerCm > 0 ? ctx.pxPerCm : P.k;
  const fs = Math.max(13.5 / k, 4);
  const W = svgEl("g", { class: "moi-world" }, g);
  const envG = svgEl("g", { class: "moi-env" }, W);
  const shadowG = svgEl("g", { class: "moi-shadow" }, W);
  const backG = svgEl("g", { class: "moi-props-back" }, W);
  const figG = svgEl("g", { class: "moi-figures" }, W);
  const frontG = svgEl("g", { class: "moi-props-front" }, W);
  const fxG = svgEl("g", { class: "moi-fx" }, W);
  const labG = svgEl("g", { class: "moi-labels" }, W);

  try { drawEnvironment(envG, phase.environment || "plain", { view, ref: P.ref, frames: P.refFrames }); } catch (e) { warn("[moi] environment: " + e.message); }

  // bodies
  const bodies = P.actors.map((a) => buildBody(poseAt(a.kfs, t, view), view, { kit: a.kit, facing: a.facing }));
  const byId = {}; P.actors.forEach((a, i) => { byId[a.id] = i; });
  // impact shake (first actor)
  let shake = 0;
  if (!rm) for (const im of phase.impacts || []) { const dt = t - im.t; if (dt >= 0 && dt < 0.32) shake += 1.3 * Math.sin(dt * 75) * (1 - dt / 0.32); }
  const dxOf = (i) => (i === 0 ? shake : 0);
  const frames = bodies.map((b, i) => { const F = targetFrames(b); if (dxOf(i)) for (const id in F) F[id].p = [F[id].p[0] + dxOf(i), F[id].p[1]]; return F; });

  // bbox accumulator (screen y-down)
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  const grow = (bb) => { if (!bb) return; x0 = Math.min(x0, bb.x0); x1 = Math.max(x1, bb.x1); y0 = Math.min(y0, -bb.y1); y1 = Math.max(y1, -bb.y0); };
  bodies.forEach((b, i) => grow({ x0: b.bounds.x0 + dxOf(i), x1: b.bounds.x1 + dxOf(i), y0: b.bounds.y0, y1: b.bounds.y1 }));

  // seats (static per phase)
  for (const pl of P.seats) { try { drawProp(backG, pl.type, pl, { view }); } catch (e) { warn("[moi] seat: " + e.message); } }

  // props
  for (const pr of phase.props || []) {
    if (!PROP_IDS.includes(pr.type)) continue;
    try {
      const ai = byId[pr.actor || P.firstId] ?? 0, body = bodies[ai];
      let pl = null;
      const kf = Array.isArray(pr.keyframes) && pr.keyframes.length ? pr.keyframes.slice().sort((a, b) => a.t - b.t) : null;
      if (kf && (!pr.attach || t >= kf[0].t)) {
        const posOf = (q) => {
          if (q.at && frames[ai][q.at]) return [frames[ai][q.at].p[0], frames[ai][q.at].p[1]];
          return [Number(q.x) || 0, -(Number(q.y) || 0)];
        };
        let a = kf[0], b = kf[0], u = 0;
        if (t >= kf[kf.length - 1].t) { a = b = kf[kf.length - 1]; }
        else for (let i = 1; i < kf.length; i++) if (t <= kf[i].t) { a = kf[i - 1]; b = kf[i]; u = (EASE[b.ease] || EASE.inOut)(clamp((t - a.t) / Math.max(1e-6, b.t - a.t))); break; }
        const pa = posOf(a), pb = posOf(b);
        pl = { type: pr.type, x: lerp(pa[0], pb[0], u), y: lerp(pa[1], pb[1], u), ang: lerp(Number(a.rot) || 0, Number(b.rot) || 0, u), free: true, front: true, spin: lerp(a.t, b.t, u) };
      } else if (pr.attach) {
        pl = placeProp(pr.type, body, body.pose.hints || {}, { view, frames: frames[ai], attach: pr.attach });
      } else {
        pl = placeProp(pr.type, body, body.pose.hints || {}, { view, frames: frames[ai] });
      }
      if (!pl) continue;
      for (const one of [].concat(pl)) grow(drawProp(one.front ? frontG : backG, one.type, one, { view, t }));
    } catch (e) { warn(`[moi] prop ${pr.type}: ${e.message}`); }
  }

  // figures: other actors first, the patient (first actor) on top
  const order = bodies.map((_, i) => i).sort((a, b) => (a === 0 ? 1 : b === 0 ? -1 : a - b));
  for (const i of order) {
    drawShadow(shadowG, bodies[i], { dx: dxOf(i) });
    drawBody(figG, bodies[i], { dx: dxOf(i) });
  }

  const tg = (id, actor) => {
    const i = byId[actor || P.firstId] ?? 0, b = bodies[i];
    const p = b.targets[id];
    return p ? [p[0] + dxOf(i), -p[1]] : null;
  };
  const S0 = bodies[0].scale;

  // highlights
  const glow = ensureDefs(ctx, g);
  for (const h of phase.highlights || []) {
    const r = Array.isArray(h.t) ? h.t : [h.t, h.t + 1];
    const a = win(t, r[0], r[1], 0.3, 0.3);
    if (a <= 0) continue;
    const p = tg(h.at, h.actor); if (!p) continue;
    const pulse = rm ? 0.6 : 0.5 + 0.5 * Math.sin((2 * Math.PI * (t - r[0])) / 1.15);
    const R = 12 * S0 * (1 + 0.16 * pulse);
    svgEl("circle", { cx: fmt(p[0]), cy: fmt(p[1]), r: fmt(R * 1.25), style: `fill: ${glow}; opacity: ${fmt(a * (0.55 + 0.35 * pulse))}` }, fxG);
    svgEl("circle", { cx: fmt(p[0]), cy: fmt(p[1]), r: fmt(R * 0.82), style: `fill: none; stroke: var(--fx-highlight); stroke-width: ${fmt(0.9 * S0)}; opacity: ${fmt(a * (0.45 + 0.4 * pulse))}` }, fxG);
  }

  // impacts
  for (const im of phase.impacts || []) {
    const dt = t - im.t;
    if (dt < -0.03 || dt > 0.75) continue;
    const p = tg(im.at, im.actor); if (!p) continue;
    const u = clamp(dt / 0.75);
    if (rm) { svgEl("circle", { cx: fmt(p[0]), cy: fmt(p[1]), r: fmt(14 * S0), style: `fill: none; stroke: var(--fx-injury); stroke-width: 1.4; opacity: .8` }, fxG); continue; }
    const eo = 1 - Math.pow(1 - u, 3);
    svgEl("circle", { cx: fmt(p[0]), cy: fmt(p[1]), r: fmt((6 + 34 * eo) * S0), style: `fill: none; stroke: var(--fx-injury); stroke-width: ${fmt(2.2 * (1 - u) + 0.3)}; opacity: ${fmt(1 - u)}` }, fxG);
    if (dt < 0.24) {
      const v = clamp(dt / 0.24);
      svgEl("circle", { cx: fmt(p[0]), cy: fmt(p[1]), r: fmt((7 + 6 * v) * S0), style: `fill: var(--fx-injury); opacity: ${fmt(0.75 * (1 - v))}` }, fxG);
      let d = "";
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2 + 0.2, r1 = (10 + 6 * v) * S0, r2 = (17 + 12 * v) * S0;
        d += `M${fmt(p[0] + Math.cos(a) * r1)},${fmt(p[1] + Math.sin(a) * r1)}L${fmt(p[0] + Math.cos(a) * r2)},${fmt(p[1] + Math.sin(a) * r2)}`;
      }
      svgEl("path", { d, style: `fill: none; stroke: ${mixc("--fx-injury", 60, "--stage-ink")}; stroke-width: 1.3; stroke-linecap: round; opacity: ${fmt(1 - v)}` }, fxG);
    }
  }

  // forces + labels
  const placed = [];
  const place = (x, y, w, h) => {
    let yy = y;
    for (let n = 0; n < 8; n++) {
      const hit = placed.some((r) => x < r.x + r.w && x + w > r.x && yy < r.y + r.h && yy + h > r.y);
      if (!hit) break;
      yy += (n % 2 ? -1 : 1) * h * 1.15 * (n + 1);
    }
    placed.push({ x, y: yy, w, h });
    return yy;
  };
  const label = (x, y, str, anchor, color) => {
    if (!str) return;
    const w = String(str).length * fs * 0.56, h = fs * 1.2;
    const bx = anchor === "end" ? x - w : anchor === "middle" ? x - w / 2 : x;
    const yy = place(bx, y - h / 2, w, h) + h / 2;
    textEl(labG, x, yy, String(str), fs, anchor, color);
  };
  for (const f of phase.forces || []) {
    const r = Array.isArray(f.t) ? f.t : [0, phase.duration || 5];
    const a = win(t, r[0], r[1], 0.18, 0.25);
    if (a <= 0) continue;
    const p = tg(f.at, f.actor); if (!p) continue;
    const ai = byId[f.actor || P.firstId] ?? 0;
    const side = /L$/.test(f.at) ? -1 : 1;
    const fv = forceVector(f, view, side, bodies[ai].facing);
    const col = "var(--fx-force)";
    const sc = f.size === "s" ? 0.75 : f.size === "l" ? 1.3 : 1;
    if (fv.kind === "arrow") {
      const [ux, uy] = fv.u, n = Math.hypot(ux, uy) || 1, vx = ux / n, vy = uy / n;
      const push = rm ? 0 : 1.6 * Math.sin((t - r[0]) * 9);
      const grow2 = 0.55 + 0.45 * clamp((t - r[0]) / 0.25);
      const gap = 8.5 * S0, len = 30 * sc * grow2;
      const tip = [p[0] - vx * (gap - push), p[1] - vy * (gap - push)];
      const tail = [tip[0] - vx * len, tip[1] - vy * len];
      const hw = 4.2 * sc, hl = 7.5 * sc, base = [tip[0] - vx * hl, tip[1] - vy * hl];
      const nx = -vy, ny = vx;
      const ag = svgEl("g", { style: `opacity: ${fmt(a)}` }, fxG);
      const shaft = `M${fmt(tail[0])},${fmt(tail[1])}L${fmt(base[0])},${fmt(base[1])}`;
      const head = `M${fmt(tip[0])},${fmt(tip[1])}L${fmt(base[0] + nx * hw)},${fmt(base[1] + ny * hw)}L${fmt(base[0] - nx * hw)},${fmt(base[1] - ny * hw)}Z`;
      svgEl("path", { d: shaft, style: `fill: none; stroke: var(--stage-bg); stroke-width: ${fmt(4.6 * sc)}; stroke-linecap: round` }, ag);
      svgEl("path", { d: head, style: `fill: var(--stage-bg); stroke: var(--stage-bg); stroke-width: ${fmt(2 * sc)}; stroke-linejoin: round` }, ag);
      svgEl("path", { d: shaft, style: `fill: none; stroke: ${col}; stroke-width: ${fmt(2.6 * sc)}; stroke-linecap: round` }, ag);
      svgEl("path", { d: head, style: `fill: ${col}` }, ag);
      if (f.label && a > 0.3) {
        const lx = tail[0] - vx * fs * 0.5, ly = tail[1] - vy * fs * 0.8;
        const anchor = Math.abs(vx) < 0.35 ? "middle" : vx > 0 ? "end" : "start";
        label(lx, ly, f.label, anchor, col);
      }
    } else {
      const off = 13 * S0;
      const c = [p[0] + off, p[1] - off * 0.7], R = 5.4 * sc;
      const ag = svgEl("g", { style: `opacity: ${fmt(a)}` }, fxG);
      svgEl("path", { d: `M${fmt(p[0] + 3)},${fmt(p[1] - 2)}L${fmt(c[0] - R * 0.7)},${fmt(c[1] + R * 0.7)}`, style: `stroke: ${col}; stroke-width: .8; opacity: .7` }, ag);
      svgEl("circle", { cx: fmt(c[0]), cy: fmt(c[1]), r: fmt(R), style: `fill: var(--stage-bg); stroke: ${col}; stroke-width: ${fmt(1.4 * sc)}` }, ag);
      if (fv.kind === "out") svgEl("circle", { cx: fmt(c[0]), cy: fmt(c[1]), r: fmt(R * 0.32), style: `fill: ${col}` }, ag);
      else { const q = R * 0.55; svgEl("path", { d: `M${fmt(c[0] - q)},${fmt(c[1] - q)}L${fmt(c[0] + q)},${fmt(c[1] + q)}M${fmt(c[0] + q)},${fmt(c[1] - q)}L${fmt(c[0] - q)},${fmt(c[1] + q)}`, style: `stroke: ${col}; stroke-width: ${fmt(1.3 * sc)}; stroke-linecap: round` }, ag); }
      if (f.label && a > 0.3) label(c[0] + R + fs * 0.4, c[1], f.label, "start", col);
    }
  }

  const targets = {}, actorsOut = {};
  bodies.forEach((b, i) => {
    const o = {};
    for (const id of BODY_TARGETS) { const p = b.targets[id]; o[id] = [p[0] + dxOf(i), -p[1]]; }
    actorsOut[P.actors[i].id] = o;
    if (i === 0) Object.assign(targets, o);
  });
  if (!isFinite(x0)) { x0 = -60; x1 = 60; y0 = -190; y1 = 0; }
  return { bbox: { x: x0, y: y0, w: x1 - x0, h: y1 - y0 }, targets, actors: actorsOut, pxPerCm: k };
}
