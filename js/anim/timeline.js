/**
 * timeline.js — phase scheduling, slow-motion time remap, easing & caption helpers.
 * OWNER: A1 (player & integration). Pure functions only: no DOM, safe to import anywhere.
 *
 * Two clocks exist in an animation:
 *   - PLAYBACK time (what the scrubber shows, what the user waits through), global across phases;
 *   - AUTHORED time `t` (seconds from the start of a phase, as written in the injury file).
 * They differ only inside `slowmo` segments: an authored segment of length L at rate r plays
 * for L / r seconds. Corners between rates are rounded (C1-smooth, total length preserved) so
 * slow motion eases in and out instead of lurching. Renderers always receive AUTHORED time.
 */

/* ------------------------------------------------------------------ maths */
export const clamp = (x, lo = 0, hi = 1) => (x < lo ? lo : x > hi ? hi : x);
export const lerp = (a, b, u) => a + (b - a) * u;
/** Inverse lerp, clamped to 0–1. */
export const progress = (x, a, b) => (b === a ? (x >= b ? 1 : 0) : clamp((x - a) / (b - a)));
/** Hermite smoothstep between edges e0 and e1. */
export const smoothstep = (e0, e1, x) => { const u = progress(x, e0, e1); return u * u * (3 - 2 * u); };
const finite = (x) => typeof x === "number" && Number.isFinite(x);

/* ---------------------------------------------------------------- easing */
/** Easing curves on 0–1 (cubic). Names match the DSL keyframe `ease` field. */
export const EASINGS = {
  linear: (u) => u,
  in: (u) => u * u * u,
  out: (u) => 1 - (1 - u) ** 3,
  inOut: (u) => (u < 0.5 ? 4 * u * u * u : 1 - (-2 * u + 2) ** 3 / 2),
  /** gentler sine in-out, used for camera moves */
  sine: (u) => 0.5 - Math.cos(Math.PI * u) / 2
};
const EASE_ALIASES = { "ease-in": "in", easeIn: "in", "ease-out": "out", easeOut: "out", "ease-in-out": "inOut", easeInOut: "inOut", inout: "inOut" };

/** ease("inOut", 0.3) → eased value. Unknown names fall back to inOut. Input is clamped to 0–1. */
export function ease(name, u) {
  const f = EASINGS[name] || EASINGS[EASE_ALIASES[name]] || EASINGS.inOut;
  return f(clamp(u));
}
/** Eased 0–1 progress of time `t` through the window [t0, t1]. */
export const easeBetween = (t, t0, t1, name = "inOut") => ease(name, progress(t, t0, t1));

/* ------------------------------------------------------- slow-motion map */
const RAMP = 0.18;            // half-width (playback s) of the rounded corner between two rates
const MIN_RATE = 0.05, MAX_RATE = 4;

/**
 * Build the piecewise map between a phase's authored time and its playback time.
 * @returns {{ authored:number, play:number, pieces:Array, corners:Array }}
 */
export function buildTimeMap(authoredDuration, slowmo, warn = () => {}, where = "phase") {
  const L = Math.max(0, authoredDuration);
  const segs = [];
  for (const s of Array.isArray(slowmo) ? slowmo : []) {
    const [a, b] = Array.isArray(s?.t) ? s.t : [];
    const r = Number(s?.rate);
    if (!finite(a) || !finite(b) || b <= a || !(r > 0)) { warn(`${where}: ignoring invalid slowmo ${JSON.stringify(s)}`); continue; }
    if (r < MIN_RATE || r > MAX_RATE) warn(`${where}: slowmo rate ${r} clamped to ${MIN_RATE}–${MAX_RATE}`);
    segs.push({ a: clamp(a, 0, L), b: clamp(b, 0, L), r: clamp(r, MIN_RATE, MAX_RATE) });
  }
  segs.sort((x, y) => x.a - y.a);
  const pieces = [];
  let cur = 0;
  for (const s of segs) {
    const a = Math.max(s.a, cur);              // overlapping segments: the earlier one wins
    if (s.b <= a) continue;
    if (a > cur) pieces.push({ a0: cur, a1: a, r: 1 });
    pieces.push({ a0: a, a1: s.b, r: s.r });
    cur = s.b;
  }
  if (cur < L || !pieces.length) pieces.push({ a0: cur, a1: L, r: 1 });
  // merge neighbours with equal rate, then assign playback times
  const merged = [];
  for (const p of pieces) {
    const last = merged[merged.length - 1];
    if (last && Math.abs(last.r - p.r) < 1e-9) last.a1 = p.a1; else merged.push({ ...p });
  }
  let play = 0;
  for (const p of merged) { p.p0 = play; play += (p.a1 - p.a0) / p.r; p.p1 = play; }
  // rounded corners: quadratic blend of the two slopes over [P - w, P + w]
  const corners = [];
  for (let k = 0; k < merged.length - 1; k++) {
    const A = merged[k], B = merged[k + 1];
    const w = Math.min(RAMP, 0.45 * (A.p1 - A.p0), 0.45 * (B.p1 - B.p0));
    if (w > 1e-4) corners.push({ P: A.p1, A: A.a1, s1: A.r, s2: B.r, w });
  }
  return { authored: L, play, pieces: merged, corners };
}

/** Playback seconds into a phase → authored phase time. */
export function toAuthored(map, p) {
  p = clamp(p, 0, map.play);
  for (const c of map.corners) {
    if (p >= c.P - c.w && p <= c.P + c.w) {
      const d = p - (c.P - c.w);
      return (c.A - c.s1 * c.w) + c.s1 * d + ((c.s2 - c.s1) * d * d) / (4 * c.w);
    }
  }
  for (const pc of map.pieces) if (p <= pc.p1) return pc.a0 + (p - pc.p0) * pc.r;
  return map.authored;
}

/** Authored phase time → playback seconds into the phase (exact inverse of toAuthored). */
export function toPlay(map, a) {
  a = clamp(a, 0, map.authored);
  for (const c of map.corners) {
    const a0 = c.A - c.s1 * c.w, a1 = c.A + c.s2 * c.w;
    if (a >= a0 && a <= a1) {
      const k = (c.s2 - c.s1) / (4 * c.w), q = a - a0;
      const disc = Math.max(0, c.s1 * c.s1 + 4 * k * q);
      return c.P - c.w + (2 * q) / (c.s1 + Math.sqrt(disc));   // numerically stable root
    }
  }
  for (const pc of map.pieces) if (a <= pc.a1) return pc.p0 + (a - pc.a0) / pc.r;
  return map.play;
}

/* --------------------------------------------------------------- phases */
export const PHASE_TYPES = ["moi", "zoom", "closeup", "micro"];
export const DEFAULT_DURATIONS = { moi: 5, zoom: 1.5, closeup: 8, micro: 8 };
const DEFAULT_LABELS = { moi: "Mechanism", zoom: "Zoom in", closeup: "Close-up", micro: "Cellular view" };

/**
 * Schedule an `animation` spec. Never throws; problems are reported through `warn`.
 * @returns {{ title:string, duration:number, phases: Array<{
 *   index, type, label, phase, authoredDuration, playDuration, start, end, map, captions }> }}
 */
export function buildTimeline(spec, { warn = () => {} } = {}) {
  const list = Array.isArray(spec?.phases) ? spec.phases : [];
  if (!list.length) warn("animation has no phases");
  let start = 0;
  const phases = [];
  list.forEach((phase, i) => {
    if (!phase || typeof phase !== "object") { warn(`phase ${i + 1} is not an object — skipped`); return; }
    const type = String(phase.type || "");
    const where = `phase ${i + 1} (${type || "?"})`;
    if (!PHASE_TYPES.includes(type)) warn(`${where}: unknown phase type "${type}" — a placeholder is shown`);
    let dur = Number(phase.duration);
    if (!(dur > 0)) { dur = DEFAULT_DURATIONS[type] || 5; warn(`${where}: missing/invalid duration — using ${dur}s`); }
    dur = Math.min(dur, 120);
    const map = buildTimeMap(dur, phase.slowmo, warn, where);
    const captions = (Array.isArray(phase.captions) ? phase.captions : [])
      .filter((c) => c && typeof c.text === "string" && c.text.trim())
      .map((c) => ({ t: clamp(finite(Number(c.t)) ? Number(c.t) : 0, 0, dur), text: c.text.trim() }))
      .sort((a, b) => a.t - b.t);
    const entry = {
      index: phases.length, type, phase,
      label: String(phase.label || DEFAULT_LABELS[type] || `Part ${phases.length + 1}`),
      authoredDuration: dur, playDuration: map.play, start, end: start + map.play, map, captions
    };
    phases.push(entry);
    start = entry.end;
  });
  return { title: String(spec?.title || "Animation"), duration: start, phases };
}

/**
 * Where is global playback time T?
 * @returns {{ index, entry, phase, local, t, u } | null}  local = playback s into phase, t = authored s, u = 0–1 playback progress
 */
export function locate(tl, T) {
  const n = tl.phases.length;
  if (!n) return null;
  T = clamp(T, 0, tl.duration);
  let e = tl.phases[n - 1];
  for (const p of tl.phases) if (T < p.end) { e = p; break; }
  const local = clamp(T - e.start, 0, e.playDuration);
  return { index: e.index, entry: e, phase: e.phase, local, t: toAuthored(e.map, local), u: e.playDuration ? local / e.playDuration : 1 };
}

/** Global playback time of authored time `t` in phase `index`. */
export function globalTime(tl, index, t) {
  const e = tl.phases[index];
  return e ? e.start + toPlay(e.map, t) : 0;
}

/** Current slow-motion rate (1 = normal) at authored time t of a phase entry. */
export function rateAt(entry, t) {
  for (const pc of entry?.map?.pieces || []) if (t >= pc.a0 && t < pc.a1) return pc.r;
  return 1;
}

/* -------------------------------------------------------------- captions */
/** Active caption of a phase entry at authored time t → { index, t, end, text } or null. */
export function captionAt(entry, t) {
  const caps = entry?.captions || [];
  let k = -1;
  for (let i = 0; i < caps.length; i++) { if (caps[i].t <= t + 1e-6) k = i; else break; }
  if (k < 0) return null;
  return { index: k, t: caps[k].t, end: k + 1 < caps.length ? caps[k + 1].t : entry.authoredDuration, text: caps[k].text };
}
/** Active caption at global time T (with phase index). */
export function captionAtTime(tl, T) {
  const loc = locate(tl, T);
  if (!loc) return null;
  const c = captionAt(loc.entry, loc.t);
  return c ? { ...c, phaseIndex: loc.index } : null;
}

/* ------------------------------------------------------------ key times */
/** n evenly spaced global times (bin centres) — for QA contact sheets. */
export function evenTimes(tl, n) {
  n = Math.max(1, Math.round(n) || 1);
  return Array.from({ length: n }, (_, i) => ((i + 0.5) / n) * tl.duration);
}

/** One global time per caption, `at` (0–1) of the way through the caption's window. */
export function captionTimes(tl, { at = 0.55, includeZoom = false } = {}) {
  const out = [];
  for (const e of tl.phases) {
    if (e.type === "zoom" && !includeZoom) continue;
    e.captions.forEach((c, i) => {
      const end = i + 1 < e.captions.length ? e.captions[i + 1].t : e.authoredDuration;
      const t = lerp(c.t, end, at);
      out.push({ T: globalTime(tl, e.index, t), phaseIndex: e.index, t, text: c.text });
    });
  }
  return out;
}

/**
 * n "key" times: picked from caption moments, spread over the phases (every non-zoom phase gets
 * at least one frame when n allows). Falls back to even spacing when there are no captions.
 */
export function keyTimes(tl, n) {
  n = Math.max(1, Math.round(n) || 1);
  const cands = captionTimes(tl);
  if (!cands.length) return evenTimes(tl, n);
  if (n >= cands.length) return cands.map((c) => c.T);
  const groups = new Map();
  for (const c of cands) { if (!groups.has(c.phaseIndex)) groups.set(c.phaseIndex, []); groups.get(c.phaseIndex).push(c); }
  const keys = [...groups.keys()];
  // allocate slots: one per phase first (if possible), the rest proportional to caption count
  const alloc = new Map(keys.map((k) => [k, n >= keys.length ? 1 : 0]));
  let left = n - [...alloc.values()].reduce((a, b) => a + b, 0);
  while (left > 0) {
    let best = null, bestScore = -1;
    for (const k of keys) {
      const have = alloc.get(k), cap = groups.get(k).length;
      if (have >= cap) continue;
      const score = cap / (have + 1);
      if (score > bestScore) { best = k; bestScore = score; }
    }
    if (best === null) break;
    alloc.set(best, alloc.get(best) + 1); left--;
  }
  const out = [];
  for (const k of keys) {
    const g = groups.get(k), m = alloc.get(k);
    for (let i = 0; i < m; i++) out.push(g[Math.min(g.length - 1, Math.floor(((i + 0.5) / m) * g.length))].T);
  }
  return out.sort((a, b) => a - b);
}

/**
 * A meaningful poster frame: the first `impacts` moment of the first moi phase, else 60 % through it;
 * with no moi phase, 60 % through the first phase.
 */
export function posterTime(tl) {
  const moi = tl.phases.find((p) => p.type === "moi");
  const e = moi || tl.phases[0];
  if (!e) return 0;
  const hits = (Array.isArray(e.phase.impacts) ? e.phase.impacts : []).map((x) => Number(x?.t)).filter(finite).sort((a, b) => a - b);
  const t = moi && hits.length ? clamp(hits[0], 0, e.authoredDuration) : 0.6 * e.authoredDuration;
  return globalTime(tl, e.index, t);
}

/** 75.4 → "1:15" */
export function formatTime(s) {
  s = Math.max(0, Math.floor((Number(s) || 0) + 1e-6));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
