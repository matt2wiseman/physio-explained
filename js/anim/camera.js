/**
 * camera.js — framing & shot planning for the composited 800 × 450 stage.
 * OWNER: A1 (player & integration). Pure maths + one small DOM helper (reading a group's own transform).
 *
 * A camera is { s, cx, cy, ox, oy }: world point (cx, cy) appears at stage point (ox, oy) at scale s
 * (stage px per world unit). → SVG transform `matrix(s 0 0 s  ox−s·cx  oy−s·cy)` on the phase's wrapper group.
 *
 *   MOI      fit the union bbox of the actors over the whole phase (sampled & cached) into the safe area;
 *            if the actors travel far, keep the scale and pan smoothly instead (tracking camera).
 *   ZOOM     start at the MOI final framing; push in geometrically toward the BODY_TARGET (~6×) while the
 *            target glides to stage centre; cross-fade into the next close-up's first frame over the last 40 %.
 *   CLOSEUP  apply the (possibly animated) viewBox returned by the close-up renderer.
 *   MICRO    identity (already 800 × 450).
 * planFrame() decides WHICH phases are visible at a global time, with what opacity/zoom — the player applies it.
 */
import { clamp, lerp, ease, smoothstep, locate } from "./timeline.js";

export const STAGE_W = 800, STAGE_H = 450;
/** Area the MOI actors are framed into: clear of the chapter chip (top-left) and of overlay captions (bottom). */
export const SAFE = { x: 48, y: 40, w: 704, h: 306 };
export const ZOOM_FACTOR = 6;
export const ZOOM_FADE_START = 0.6;     // cross-fade over the last 40 % of the zoom phase
export const DISSOLVE = 0.45;           // s of playback: soft dissolve between other phases (cut under reduced motion)

export const IDENTITY = Object.freeze({ s: 1, cx: STAGE_W / 2, cy: STAGE_H / 2, ox: STAGE_W / 2, oy: STAGE_H / 2 });
const finite = (x) => typeof x === "number" && Number.isFinite(x);
const r4 = (x) => Math.round(x * 1e4) / 1e4;

/** Camera → SVG transform attribute value. */
export function camTransform(c) {
  return `matrix(${r4(c.s)} 0 0 ${r4(c.s)} ${r4(c.ox - c.s * c.cx)} ${r4(c.oy - c.s * c.cy)})`;
}
/** Where a world point lands on stage. */
export const project = (c, [x, y]) => [(x - c.cx) * c.s + c.ox, (y - c.cy) * c.s + c.oy];
/** Which world point is under a stage point. */
export const unproject = (c, [x, y]) => [(x - c.ox) / c.s + c.cx, (y - c.oy) / c.s + c.cy];
/** Extra zoom k about the stage centre (used for the close-up "settle" while it fades in). */
export function scaleAboutCentre(c, k) {
  const [wx, wy] = unproject(c, [STAGE_W / 2, STAGE_H / 2]);
  return { s: c.s * k, cx: wx, cy: wy, ox: STAGE_W / 2, oy: STAGE_H / 2 };
}

/* ------------------------------------------------------------------ boxes */
export function normBox(b) {
  if (!b) return null;
  if (Array.isArray(b)) b = { x: b[0], y: b[1], w: b[2], h: b[3] };
  const x = +b.x, y = +b.y, w = +(b.w ?? b.width), h = +(b.h ?? b.height);
  return finite(x) && finite(y) && finite(w) && finite(h) && w > 0 && h > 0 ? { x, y, w, h } : null;
}
export function unionBox(boxes) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const b of boxes) { if (!b) continue; x0 = Math.min(x0, b.x); y0 = Math.min(y0, b.y); x1 = Math.max(x1, b.x + b.w); y1 = Math.max(y1, b.y + b.h); }
  return x0 < x1 && y0 < y1 ? { x: x0, y: y0, w: x1 - x0, h: y1 - y0 } : null;
}
const contains = (b, [x, y], pad = 4) => x >= b.x - pad && x <= b.x + b.w + pad && y >= b.y - pad && y <= b.y + b.h + pad;
const flipBox = (b) => ({ x: b.x, y: -(b.y + b.h), w: b.w, h: b.h });

/** Camera that fits a world box (plus margin) into `area`, centred. */
export function fitBox(box, area = SAFE, { margin = 0.06, minW = 110, minH = 150, maxScale = 12 } = {}) {
  const w = Math.max(minW, box.w * (1 + 2 * margin)), h = Math.max(minH, box.h * (1 + 2 * margin));
  const s = Math.min(maxScale, area.w / w, area.h / h);
  return { s, cx: box.x + box.w / 2, cy: box.y + box.h / 2, ox: area.x + area.w / 2, oy: area.y + area.h / 2 };
}

/** Close-up: fit a renderer viewBox [x, y, w, h] into the stage ("meet"). */
export function viewBoxCamera(vb) {
  const b = normBox(vb);
  if (!b) return IDENTITY;
  return { s: Math.min(STAGE_W / b.w, STAGE_H / b.h), cx: b.x + b.w / 2, cy: b.y + b.h / 2, ox: STAGE_W / 2, oy: STAGE_H / 2 };
}

/**
 * Zoom shot: from `from` (camera), push in toward world point `target` by `factor` at progress u (0–1).
 * Scale grows geometrically (constant perceived speed); the target's stage position glides to stage centre.
 */
export function zoomCamera(from, target, u, factor = ZOOM_FACTOR) {
  const e = ease("inOut", u);
  const [sx, sy] = project(from, target);
  return { s: from.s * Math.pow(factor, e), cx: target[0], cy: target[1], ox: lerp(sx, STAGE_W / 2, e), oy: lerp(sy, STAGE_H / 2, e) };
}

/* -------------------------------------------------------- MOI result I/O */
const FOOT_KEYS = ["footR", "footL", "heelR", "heelL", "ankleR", "ankleL", "toeR", "toeL"];
function readMatrix(g) {
  try { const tl = g?.transform?.baseVal; if (tl && tl.numberOfItems) return tl.consolidate()?.matrix || null; } catch { /* not an SVG element */ }
  return null;
}
/**
 * Bring a renderMoiFrame() result into the player's camera space (the parent of `g`; y down).
 * Tolerates: [x, y] or {x, y} points; {x,y,w,h} / {width,height} / array boxes; a transform set on `g`
 * itself; and world-space (y-up) results — detected because the head would sit below the feet.
 */
export function normalizeMoiResult(raw, g) {
  const out = { bbox: null, targets: {} };
  if (!raw || typeof raw !== "object") return out;
  const M = readMatrix(g);
  const tx = ([x, y]) => (M ? [M.a * x + M.c * y + M.e, M.b * x + M.d * y + M.f] : [x, y]);
  for (const [k, v] of Object.entries(raw.targets || {})) {
    const p = Array.isArray(v) ? v : v && typeof v === "object" ? [v.x, v.y] : null;
    if (p && finite(+p[0]) && finite(+p[1])) out.targets[k] = tx([+p[0], +p[1]]);
  }
  let box = normBox(raw.bbox);
  if (box && M) {
    const pts = [[box.x, box.y], [box.x + box.w, box.y], [box.x, box.y + box.h], [box.x + box.w, box.y + box.h]].map(tx);
    box = unionBox(pts.map(([x, y]) => ({ x, y, w: 1e-6, h: 1e-6 })));
  }
  // orientation: head must be above (smaller y than) the feet in camera space
  const head = out.targets.head, feet = FOOT_KEYS.map((k) => out.targets[k]).filter(Boolean);
  if (head && feet.length && head[1] > Math.max(...feet.map((p) => p[1])) + 5) {
    for (const k of Object.keys(out.targets)) out.targets[k] = [out.targets[k][0], -out.targets[k][1]];
  }
  if (box) {
    const pts = Object.values(out.targets);
    if (pts.length) {
      const flipped = flipBox(box);
      const score = (b) => pts.filter((p) => contains(b, p, 12)).length;
      if (score(flipped) > score(box)) box = flipped;
    }
  } else {
    const pts = Object.values(out.targets);
    if (pts.length) {     // no bbox: approximate from body targets, padded for limb thickness & head
      const u = unionBox(pts.map(([x, y]) => ({ x, y, w: 1e-6, h: 1e-6 })));
      if (u) box = { x: u.x - 18, y: u.y - 22, w: u.w + 36, h: u.h + 30 };
    }
  }
  out.bbox = box;
  return out;
}

/* ----------------------------------------------------------- MOI camera */
/** Default framing when a renderer gives us nothing usable: a standing adult centred on x = 0 (y down). */
export const DEFAULT_MOI_BOX = { x: -100, y: -190, w: 200, h: 200 };

/**
 * Build a stable MOI camera from sampled frames.
 * @param samples [{ t, bbox, targets }] (camera space)   @param duration authored phase seconds
 * @returns {{ mode:"static"|"track"|"fallback", at(t)→camera, union, finalTargets }}
 */
export function createMoiCamera(samples, duration) {
  const ok = (samples || []).filter((s) => s && normBox(s.bbox)).sort((a, b) => a.t - b.t);
  const finalTargets = [...(samples || [])].reverse().find((s) => s?.targets && Object.keys(s.targets).length)?.targets || {};
  if (!ok.length) {
    const cam = fitBox(DEFAULT_MOI_BOX);
    return { mode: "fallback", at: () => cam, union: DEFAULT_MOI_BOX, finalTargets };
  }
  const union = unionBox(ok.map((s) => s.bbox));
  const maxW = Math.max(...ok.map((s) => s.bbox.w)), maxH = Math.max(...ok.map((s) => s.bbox.h));
  if (union.w <= 1.8 * maxW + 60) {
    const cam = fitBox(union);
    return { mode: "static", at: () => cam, union, finalTargets };
  }
  // tracking: fixed scale from the largest single frame (+ travel allowance), pan x along a smoothed path
  const scale = fitBox({ x: 0, y: union.y, w: maxW * 1.6 + 40, h: union.h }).s;
  const xs = ok.map((s) => s.bbox.x + s.bbox.w / 2);
  const sm = xs.map((_, i) => (xs[Math.max(0, i - 1)] + 2 * xs[i] + xs[Math.min(xs.length - 1, i + 1)]) / 4);
  const ts = ok.map((s) => s.t);
  const cy = union.y + union.h / 2;
  const at = (t) => {
    let i = 0;
    while (i < ts.length - 2 && t > ts[i + 1]) i++;
    const t0 = ts[i], t1 = ts[Math.min(i + 1, ts.length - 1)];
    const u = t1 > t0 ? clamp((t - t0) / (t1 - t0)) : 0;
    // Catmull–Rom through the smoothed centres
    const p0 = sm[Math.max(0, i - 1)], p1 = sm[i], p2 = sm[Math.min(sm.length - 1, i + 1)], p3 = sm[Math.min(sm.length - 1, i + 2)];
    const u2 = u * u, u3 = u2 * u;
    const x = 0.5 * (2 * p1 + (-p0 + p2) * u + (2 * p0 - 5 * p1 + 4 * p2 - p3) * u2 + (-p0 + 3 * p1 - 3 * p2 + p3) * u3);
    return { s: scale, cx: x, cy, ox: SAFE.x + SAFE.w / 2, oy: SAFE.y + SAFE.h / 2 };
  };
  return { mode: "track", at, union, finalTargets, duration };
}

/* ----------------------------------------------------------- shot plan */
/**
 * Which phases are on stage at global time T, and how.
 * @returns {{ loc, shots: Array<{ index, t, opacity, zoom?:number, zoomTo?:string, settle?:number }> }}
 *   index  phase index to render · t authored time to render it at · opacity 0–1 (later shots paint on top)
 *   zoom   0–1 zoom progress (camera pushes in toward zoomTo) · settle  extra scale about centre (close-up fade-in)
 */
export function planFrame(tl, T, { reducedMotion = false } = {}) {
  const loc = locate(tl, T);
  if (!loc) return { loc: null, shots: [] };
  const e = loc.entry, prev = tl.phases[e.index - 1], next = tl.phases[e.index + 1];
  const shots = [];
  if (e.type === "zoom") {
    const u = loc.u;
    const fade = reducedMotion ? (u >= 0.5 ? 1 : 0) : smoothstep(ZOOM_FADE_START, 1, u);
    if (prev && fade < 1) shots.push({ index: prev.index, t: prev.authoredDuration, opacity: 1, zoom: reducedMotion ? 0 : u, zoomTo: e.phase.to });
    if (next && fade > 0) shots.push({ index: next.index, t: 0, opacity: fade, settle: reducedMotion ? 1 : lerp(0.78, 1, ease("out", fade)) });
  } else {
    const dissolve = !reducedMotion && prev && prev.type !== "zoom" && e.start > 0 ? smoothstep(0, DISSOLVE, loc.local) : 1;
    if (dissolve < 1) shots.push({ index: prev.index, t: prev.authoredDuration, opacity: 1 });
    shots.push({ index: e.index, t: loc.t, opacity: dissolve });
  }
  return { loc, shots };
}
