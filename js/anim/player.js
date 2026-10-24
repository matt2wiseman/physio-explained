/**
 * player.js — the injury-animation player: stage compositor, transport UI, captions, chapters,
 * keyboard, reduced motion, storyboard.            OWNER: A1 (player & integration)
 *
 *   mountAnimation(container, spec, opts)  → controller (see bottom of Player)
 *   renderStoryboard(container, spec, opts) → { element, ready, destroy }
 *
 * Phase renderers are lazy-imported (moi.js, closeup.js, micro/index.js) and called with AUTHORED phase
 * time. Missing modules or renderer exceptions never reach the page: that phase shows a placeholder card
 * and a single console.warn("[anim] …"). Every frame is a pure function of (spec, t), so scrubbing,
 * storyboards and screenshots all go through the same Stage.renderAt(T).
 */
import { buildTimeline, locate, captionAt, rateAt, posterTime, formatTime, captionTimes, evenTimes, keyTimes, clamp } from "./timeline.js";
import { STAGE_W, STAGE_H, IDENTITY, SAFE, SAFE_DOCKED, camTransform, viewBoxCamera, zoomCamera, scaleAboutCentre, unproject,
  normalizeMoiResult, createMoiCamera, planFrame } from "./camera.js";

const NS = "http://www.w3.org/2000/svg";
let uid = 0;

/* ============================================================== DOM utils */
function h(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === "class") e.className = v;
    else if (k === "text") e.textContent = v;
    else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v === true ? "" : String(v));
  }
  for (const c of kids.flat()) if (c != null && c !== false) e.append(c);
  return e;
}
function s(tag, attrs = {}, parent) {
  const e = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) if (v != null) e.setAttribute(k, String(v));
  if (parent) parent.append(e);
  return e;
}
const ICONS = {
  play: '<path d="M8 5.6v12.8a1 1 0 0 0 1.52.85l10.2-6.4a1 1 0 0 0 0-1.7L9.52 4.75A1 1 0 0 0 8 5.6z" fill="currentColor"/>',
  pause: '<rect x="6.5" y="5" width="3.8" height="14" rx="1.1" fill="currentColor"/><rect x="13.7" y="5" width="3.8" height="14" rx="1.1" fill="currentColor"/>',
  restart: '<path d="M4.6 12.4A7.5 7.5 0 1 0 6.9 6.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M5.4 3.8v3.9h3.9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  cc: '<rect x="2.8" y="5.2" width="18.4" height="13.6" rx="2.6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10.7 10.3a2.2 2.2 0 1 0 0 3.4M17 10.3a2.2 2.2 0 1 0 0 3.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  steps: '<rect x="3.5" y="4.5" width="7.5" height="6" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="13" y="4.5" width="7.5" height="6" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="3.5" y="13.5" width="7.5" height="6" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="13" y="13.5" width="7.5" height="6" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  fullscreen: '<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  exitFullscreen: '<path d="M9 4v5H4M20 9h-5V4M15 20v-5h5M4 15h5v5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  back: '<path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  slowmo: '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
};
function icon(name) {
  const e = s("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", class: "pe-icon" });
  e.innerHTML = ICONS[name] || "";
  return e;
}

/* ========================================================== shared bits */
/** One document-wide <defs> shared by every stage (ids stay unique; never inside a display:none subtree). */
let sharedDefs = null;
function getSharedDefs() {
  if (sharedDefs && sharedDefs.isConnected) return sharedDefs;
  const holder = s("svg", { "aria-hidden": "true", focusable: "false", width: 0, height: 0, class: "pe-anim-defs" });
  holder.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;pointer-events:none";
  sharedDefs = s("defs", {}, holder);
  // player's own gradients (prefixed "player-")
  const spot = s("radialGradient", { id: "player-spot", cx: "50%", cy: "42%", r: "70%" }, sharedDefs);
  s("stop", { offset: "0", style: "stop-color:var(--stage-bg-2);stop-opacity:.9" }, spot);
  s("stop", { offset: "1", style: "stop-color:var(--stage-bg);stop-opacity:0" }, spot);
  const vig = s("radialGradient", { id: "player-vignette", cx: "50%", cy: "50%", r: "75%" }, sharedDefs);
  s("stop", { offset: "0.62", style: "stop-color:var(--stage-bg);stop-opacity:0" }, vig);
  s("stop", { offset: "1", style: "stop-color:var(--stage-bg);stop-opacity:.55" }, vig);
  document.body.append(holder);
  return sharedDefs;
}

let stylesChecked = false;
/** Link css/components/player.css if the host page has not (e.g. a standalone embed). */
export function ensureStyles() {
  if (stylesChecked || typeof document === "undefined") return;
  stylesChecked = true;
  const linked = [...document.querySelectorAll('link[rel~="stylesheet"]')].some((l) => /components\/player\.css(\?|$)/.test(l.getAttribute("href") || ""));
  if (!linked) document.head.append(h("link", { rel: "stylesheet", href: new URL("../../css/components/player.css", import.meta.url).href, "data-pe-anim": "" }));
}

/** Deduplicated warning sink: console.warn("[anim] …") once per message + optional callback. */
function makeWarn(...sinks) {
  const seen = new Set();
  return (msg) => {
    msg = String(msg);
    if (seen.has(msg)) return;
    seen.add(msg);
    try { console.warn(`[anim] ${msg}`); } catch { /* no console */ }
    for (const f of sinks) try { f?.(msg); } catch { /* listener error */ }
  };
}

export function prefersReducedMotion() {
  try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch { return false; }
}

const PREF_KEY = "pe.anim.prefs";
const prefs = {
  get() { try { return JSON.parse(localStorage.getItem(PREF_KEY)) || {}; } catch { return {}; } },
  set(patch) { try { localStorage.setItem(PREF_KEY, JSON.stringify({ ...prefs.get(), ...patch })); } catch { /* storage blocked */ } }
};

/* ===================================================== renderer loading */
const MODULES = {
  moi: { path: "./moi.js", fn: "renderMoiFrame" },
  closeup: { path: "./closeup.js", fn: "renderCloseupFrame" },
  micro: { path: "./micro/index.js", fn: "renderMicroFrame" }
};
const modCache = new Map();
function importOnce(path) {
  if (!modCache.has(path)) modCache.set(path, import(path).catch((error) => ({ __error: error })));
  return modCache.get(path);
}
const withTimeout = (p, ms) => Promise.race([p, new Promise((r) => setTimeout(r, ms))]);

/**
 * Resolve renderer functions for the phase types a timeline uses.
 * `overrides` ({ moi, closeup, micro } functions) replace modules — used by the preview's mock mode.
 */
async function loadRenderers(tl, overrides = {}, warn) {
  const types = new Set(tl.phases.map((p) => p.type));
  if (types.has("zoom")) types.add("moi");
  const out = {};
  await Promise.all([...types].map(async (type) => {
    if (typeof overrides?.[type] === "function") { out[type] = overrides[type]; return; }
    const m = MODULES[type];
    if (!m) return;
    const mod = await importOnce(m.path);
    if (mod.__error) { warn(`${type} renderer unavailable — ${m.path} failed to load (${mod.__error.message || mod.__error})`); return; }
    const fn = mod[m.fn] || mod.default?.[m.fn] || (typeof mod.default === "function" ? mod.default : null);
    if (typeof fn !== "function") { warn(`${m.path} does not export ${m.fn}()`); return; }
    out[type] = fn;
    // optional warm-up hooks so the first visible frame is complete
    const pre = [];
    for (const e of tl.phases) {
      if (e.type !== type) continue;
      try {
        if (type === "micro" && mod.preloadMicro && e.phase.tissue) pre.push(mod.preloadMicro(e.phase.tissue));
        if (type === "closeup" && mod.preloadScene && e.phase.scene) pre.push(mod.preloadScene(e.phase.scene));
        if (typeof mod.preload === "function") pre.push(mod.preload(e.phase));
      } catch (err) { warn(`${m.path} preload failed: ${err.message}`); }
    }
    if (pre.length) await withTimeout(Promise.allSettled(pre), 5000);
  }));
  return out;
}

/* ================================================================ Stage */
const UNAVAILABLE = { moi: "Mechanism view unavailable", closeup: "Close-up view unavailable", micro: "Cellular view unavailable" };

function drawPlaceholder(g, entry) {
  const card = s("g", { class: "pe-placeholder" }, g);
  s("rect", { x: 220, y: 148, width: 360, height: 138, rx: 16, style: "fill:var(--stage-bg-2);stroke:var(--stage-grid);stroke-width:1.5" }, card);
  const ic = s("g", { transform: "translate(400 186)", style: "fill:none;stroke:var(--stage-ink-2);stroke-width:2;stroke-linecap:round" }, card);
  s("rect", { x: -16, y: -12, width: 32, height: 24, rx: 4 }, ic);
  s("path", { d: "M-20 16 20 -16" }, ic);
  const txt = (y, str, size, weight, color) => {
    const t = s("text", { x: 400, y, "text-anchor": "middle", style: `font:${weight} ${size}px var(--font-body);fill:var(--${color})` }, card);
    t.textContent = str;
  };
  txt(232, UNAVAILABLE[entry.type] || (entry.type === "none" ? "Animation unavailable" : "This view is unavailable"), 19, 600, "stage-ink");
  const detail = [entry.label, entry.phase?.scene || entry.phase?.tissue].filter(Boolean).join(" · ");
  txt(256, detail, 13.5, 400, "stage-ink-2");
  txt(276, "The captions continue the explanation.", 12.5, 400, "stage-ink-2");
}

/**
 * The composited 800 × 450 SVG. One per player, one per storyboard frame.
 * Layers: background → phases (one wrapper <g> per phase, camera transform + opacity) → overlay (vignette).
 */
class Stage {
  constructor({ timeline, warn, reducedMotion = false, shared, className = "pe-stage__svg" }) {
    this.tl = timeline;
    this.warn = warn;
    this.rm = reducedMotion;
    this.shared = shared || { moiCams: new Map() };
    this.shared.moiSamples ||= new Map();
    this.docked = false;          // captions docked below the stage → frame the MOI into a taller safe area
    this.renderers = null;
    this.onRedraw = null;
    this.slots = new Map();
    this.warned = new Set();
    this.svg = s("svg", { viewBox: `0 0 ${STAGE_W} ${STAGE_H}`, class: className, "aria-hidden": "true", focusable: "false", preserveAspectRatio: "xMidYMid meet" });
    const bg = s("g", { class: "pe-layer-bg" }, this.svg);
    s("rect", { width: STAGE_W, height: STAGE_H, style: "fill:var(--stage-bg)" }, bg);
    s("rect", { width: STAGE_W, height: STAGE_H, fill: "url(#player-spot)" }, bg);
    this.phasesLayer = s("g", { class: "pe-layer-phases" }, this.svg);
    const ov = s("g", { class: "pe-layer-overlay", "pointer-events": "none" }, this.svg);
    s("rect", { width: STAGE_W, height: STAGE_H, fill: "url(#player-vignette)" }, ov);
    this.ctx = { reducedMotion: this.rm, width: STAGE_W, height: STAGE_H, defs: getSharedDefs(), warn: (m) => this.warn(m) };
  }
  setRenderers(r) { this.renderers = r || {}; this.invalidate(); }
  setDocked(on) { if (this.docked !== !!on) { this.docked = !!on; this.invalidate(); } }
  setReducedMotion(rm) { this.rm = !!rm; this.ctx = { ...this.ctx, reducedMotion: this.rm }; this.invalidate(); }
  invalidate() { for (const slot of this.slots.values()) slot.lastT = NaN; }
  warnOnce(key, msg) { if (!this.warned.has(key)) { this.warned.add(key); this.warn(msg); } }

  /** Wrapper group for a phase, kept in phase order so later phases paint on top. */
  slot(index) {
    let slot = this.slots.get(index);
    if (slot) return slot;
    const wrap = s("g", { class: "pe-shot", "data-phase": index });
    const g = s("g", {}, wrap);
    const after = [...this.slots.entries()].filter(([i]) => i > index).sort((a, b) => a[0] - b[0])[0];
    this.phasesLayer.insertBefore(wrap, after ? after[1].wrap : null);
    slot = { wrap, g, lastT: NaN, result: null, placeholder: false, hidden: false, op: 1, waiting: false };
    this.slots.set(index, slot);
    return slot;
  }
  fresh(slot) { const g = s("g"); slot.g.replaceWith(g); slot.g = g; }

  /** Render phase `entry` at authored time t into its slot (skipped when unchanged). */
  draw(slot, entry, t) {
    if (!this.renderers) return null;               // modules still loading: background only
    if (slot.lastT === t) return slot.result;
    const fn = this.renderers[entry.type];
    let res = null;
    if (typeof fn !== "function") {
      if (!slot.placeholder) { this.fresh(slot); drawPlaceholder(slot.g, entry); slot.placeholder = true; }
    } else {
      if (slot.placeholder) { this.fresh(slot); slot.placeholder = false; }
      try {
        const raw = fn(slot.g, entry.phase, t, this.ctx);
        if (raw && typeof raw.then === "function") { this.warnOnce(`async${entry.index}`, `${entry.type} renderer returned a Promise — frames must render synchronously`); res = {}; }
        else res = entry.type === "moi" ? normalizeMoiResult(raw, slot.g) : raw || {};
        if (raw && raw.ready === false && raw.whenReady && typeof raw.whenReady.then === "function" && !slot.waiting) {
          slot.waiting = true;          // e.g. micro tissue module still loading → redraw when it lands
          raw.whenReady.then(() => { slot.waiting = false; slot.lastT = NaN; this.onRedraw?.(); }, () => { slot.waiting = false; });
        }
      } catch (err) {
        this.warnOnce(`err${entry.index}:${err?.message}`, `${entry.type} renderer failed in phase ${entry.index + 1} ("${entry.label}") at t=${t.toFixed(2)}s: ${err?.message || err}`);
        this.fresh(slot); drawPlaceholder(slot.g, entry); slot.placeholder = true; res = null;
      }
    }
    slot.lastT = t; slot.result = res;
    return res;
  }

  /** Stable MOI framing for a phase: sample the renderer across the phase once, union the bboxes. */
  moiCamera(entry) {
    const cams = this.shared.moiCams, key = `${entry.index}|${this.docked ? "docked" : "overlay"}`;
    if (cams.has(key)) return cams.get(key);
    const fn = this.renderers?.moi;
    let samples = this.shared.moiSamples.get(entry.index);
    if (!samples && typeof fn === "function") {
      samples = [];
      const scratch = s("g", { visibility: "hidden", "aria-hidden": "true" }, this.phasesLayer);
      const N = 10;
      for (let i = 0; i <= N; i++) {
        const t = (entry.authoredDuration * i) / N;
        const g = s("g", {}, scratch);
        try { samples.push({ t, ...normalizeMoiResult(fn(g, entry.phase, t, this.ctx), g) }); } catch { /* reported by draw() */ }
      }
      scratch.remove();
      this.shared.moiSamples.set(entry.index, samples);
    }
    const cam = createMoiCamera(samples || [], entry.authoredDuration, this.docked ? SAFE_DOCKED : SAFE);
    if (cam.mode === "fallback" && typeof fn === "function") this.warnOnce(`bbox${entry.index}`, `renderMoiFrame returned no usable bbox in phase ${entry.index + 1} — using default framing`);
    cams.set(key, cam);
    return cam;
  }

  cameraFor(slot, entry, shot, res) {
    if (!res || slot.placeholder) return IDENTITY;
    let cam = IDENTITY, target = null;
    if (entry.type === "moi") {
      const mc = this.moiCamera(entry);
      cam = mc.at(shot.t);
      if (shot.zoom) {
        target = res.targets?.[shot.zoomTo] || mc.finalTargets[shot.zoomTo];
        if (!target) {
          this.warnOnce(`zt${entry.index}`, `zoom target "${shot.zoomTo}" not returned by renderMoiFrame — zooming to the figure centre`);
          const b = res.bbox || mc.union;
          target = [b.x + b.w / 2, b.y + b.h / 2];
        }
      }
    } else if (res.viewBox) cam = viewBoxCamera(res.viewBox);
    if (shot.zoom) cam = zoomCamera(cam, target || unproject(cam, [STAGE_W / 2, STAGE_H / 2]), shot.zoom);
    if (shot.settle && shot.settle !== 1) cam = scaleAboutCentre(cam, shot.settle);
    return cam;
  }

  /** Draw global time T. Returns the timeline location. */
  renderAt(T) {
    const plan = planFrame(this.tl, T, { reducedMotion: this.rm });
    const seen = new Set();
    for (const shot of plan.shots) {
      const entry = this.tl.phases[shot.index];
      const slot = this.slot(shot.index);
      seen.add(shot.index);
      const res = this.draw(slot, entry, shot.t);
      slot.wrap.setAttribute("transform", camTransform(this.cameraFor(slot, entry, shot, res)));
      const op = clamp(shot.opacity);
      if (slot.op !== op) { slot.wrap.style.opacity = op >= 1 ? "" : op.toFixed(3); slot.op = op; }
      if (slot.hidden) { slot.wrap.removeAttribute("display"); slot.hidden = false; }
    }
    for (const [i, slot] of this.slots) if (!seen.has(i) && !slot.hidden) { slot.wrap.setAttribute("display", "none"); slot.hidden = true; }
    return plan.loc;
  }
  destroy() { this.svg.remove(); this.slots.clear(); this.onRedraw = null; }
}

/* =============================================================== Player */
const SPEEDS = [0.5, 1, 1.5];
const fmtRate = (r) => `${r}×`;

class Player {
  constructor(container, spec, opts) {
    this.container = container;
    this.spec = spec || {};
    this.opts = opts;
    this.id = `pe-anim-${++uid}`;
    this.listeners = new Map();
    this.cleanups = [];
    this.warn = makeWarn(opts.onWarn, (m) => this.emit("warn", m));
    this.tl = buildTimeline(this.spec, { warn: this.warn });
    this.rm = opts.reducedMotion ?? prefersReducedMotion();
    const p = prefs.get();
    this.time = 0; this.playing = false; this.started = false; this.ended = false;
    this.speed = SPEEDS.includes(opts.speed) ? opts.speed : SPEEDS.includes(p.speed) ? p.speed : 1;
    this.captionsOn = opts.captions ?? p.captions ?? true;
    this.suspendFlags = { offscreen: false, hidden: typeof document !== "undefined" && document.hidden };
    this.raf = 0; this.last = 0; this.ui = {};
    this.shared = { moiCams: new Map() };
    this.stage = new Stage({ timeline: this.tl, warn: this.warn, reducedMotion: this.rm, shared: this.shared, className: "pe-player__svg" });
    this.stage.onRedraw = () => { if (!this.playing) this.render(); };
    this.build();
    this.bind();
    this.ready = loadRenderers(this.tl, opts.renderers, this.warn)
      .then((r) => {
        if (this.destroyed) return;
        this.stage.setRenderers(r);
        this.root.removeAttribute("data-loading");
        if (Number.isFinite(opts.startAt)) this.seek(opts.startAt);
        else this.render();
        this.emit("ready");
      })
      .catch((err) => this.warn(`player failed to initialise: ${err?.message || err}`));
    this.api = this.makeApi();
  }

  /* ---------------------------------------------------------- build DOM */
  build() {
    const tl = this.tl, title = tl.title;
    const ui = this.ui;
    this.root = h("div", { class: "pe-player", role: "group", "aria-label": title, tabindex: "-1", "data-loading": "", "data-state": "poster",
      "data-captions": this.captionsOn ? "on" : "off", "data-rm": this.rm ? "" : null, id: this.id });
    // ---- stage
    ui.chip = h("div", { class: "pe-player__chip", "aria-hidden": "true" }, ui.chipNum = h("span", { class: "pe-player__chip-num" }), ui.chipText = h("span"));
    ui.slowmo = h("div", { class: "pe-player__slowmo", "aria-hidden": "true", hidden: true }, icon("slowmo"), ui.slowmoText = h("span"));
    ui.bigPlay = h("button", { type: "button", class: "pe-player__bigplay", "aria-label": `Play animation: ${title}` }, icon("play"));
    ui.posterTitle = h("p", { class: "pe-player__poster-title", text: title, hidden: this.opts.showTitle === false });
    ui.posterMeta = h("p", { class: "pe-player__poster-meta", text: `${formatTime(tl.duration)} · ${tl.phases.length} ${tl.phases.length === 1 ? "chapter" : "chapters"}${this.rm ? " · reduced motion" : ""}` });
    ui.posterSteps = h("button", { type: "button", class: "pe-player__poster-steps", hidden: !this.rm }, icon("steps"), h("span", { text: "View as steps" }));
    ui.poster = h("div", { class: "pe-player__poster" }, ui.bigPlay, ui.posterTitle, ui.posterMeta, ui.posterSteps);
    ui.stage = h("div", { class: "pe-player__stage" }, this.stage.svg, ui.chip, ui.slowmo, ui.poster);
    ui.caption = h("p", { class: "pe-player__caption" }, ui.captionText = h("span"));
    ui.captions = h("div", { class: "pe-player__captions", "aria-live": "polite", "aria-atomic": "true", "data-empty": "" }, ui.caption);
    ui.capHint = h("p", { class: "pe-player__cap-hint", "aria-hidden": "true", text: `${formatTime(tl.duration)} · ${tl.phases.length} ${tl.phases.length === 1 ? "chapter" : "chapters"} · captions appear here` });
    ui.viewport = h("div", { class: "pe-player__viewport" }, ui.stage, ui.captions);
    ui.captions.append(ui.capHint);
    // ---- scrubber with proportional chapter segments
    const n = tl.phases.length;
    ui.segs = []; ui.chapters = [];
    ui.track = h("div", { class: "pe-player__track", role: "slider", tabindex: "0", "aria-label": "Seek", "aria-valuemin": "0",
      "aria-valuemax": String(Math.round(tl.duration)), "aria-valuenow": "0", "aria-valuetext": "0:00", "aria-describedby": `${this.id}-help` });
    tl.phases.forEach((e) => {
      const fill = h("span", { class: "pe-player__seg-fill" });
      const seg = h("span", { class: "pe-player__seg", style: `--grow:${Math.max(0.0001, e.playDuration).toFixed(4)}` }, fill);
      ui.track.append(seg); ui.segs.push({ seg, fill, f: -1 });
      const chap = h("button", { type: "button", class: "pe-player__chapter", style: `--grow:${Math.max(0.0001, e.playDuration).toFixed(4)}`,
        title: e.label, "aria-label": `Chapter ${e.index + 1}: ${e.label} (${formatTime(e.start)})`, onclick: () => this.jumpToChapter(e.index) },
      h("span", { class: "pe-player__chapter-num", text: String(e.index + 1) }), h("span", { class: "pe-player__chapter-txt", text: e.label }));
      ui.chapters.push(chap);
    });
    ui.thumb = h("span", { class: "pe-player__thumb", "aria-hidden": "true" });
    ui.tip = h("span", { class: "pe-player__tip", "aria-hidden": "true", hidden: true });
    ui.track.append(ui.thumb, ui.tip);
    ui.chapterRow = h("div", { class: "pe-player__chapters", role: "group", "aria-label": "Chapters" }, ui.chapters);
    this.gapPx = 3; this.nSegs = n;
    // ---- controls
    const btn = (cls, label, ic, onclick, extra = {}) => h("button", { type: "button", class: `pe-player__btn ${cls}`, "aria-label": label, title: label, onclick, ...extra }, ic ? icon(ic) : null);
    ui.play = btn("pe-player__btn--play", "Play", "play", () => this.toggle());
    ui.restart = btn("pe-player__btn--restart", "Restart", "restart", () => { this.seek(0); this.play(); });
    ui.timeCur = h("span", { text: "0:00" });
    ui.time = h("span", { class: "pe-player__time", "aria-hidden": "true" }, ui.timeCur, h("span", { class: "pe-player__time-sep", text: " / " }), h("span", { class: "pe-player__time-dur", text: formatTime(tl.duration) }));
    ui.speed = btn("pe-player__btn--speed", "", null, () => this.setSpeed(SPEEDS[(SPEEDS.indexOf(this.speed) + 1) % SPEEDS.length]));
    ui.cc = btn("pe-player__btn--cc", "Captions", "cc", () => this.setCaptions(!this.captionsOn), { "aria-pressed": String(this.captionsOn) });
    ui.stepsBtn = btn("pe-player__btn--steps", "View as steps", "steps", () => this.showSteps(true));
    const fsOk = (() => { try { return !!(document.fullscreenEnabled && this.root.requestFullscreen); } catch { return false; } })();
    ui.fs = fsOk ? btn("pe-player__btn--fs", "Full screen", "fullscreen", () => this.toggleFullscreen()) : null;
    ui.controls = h("div", { class: "pe-player__controls" }, ui.play, ui.restart, ui.time, h("span", { class: "pe-player__spacer" }), ui.speed, ui.cc, ui.stepsBtn, ui.fs);
    ui.help = h("p", { class: "pe-player__sr", id: `${this.id}-help`, text: "Keys: Space or K play/pause, left/right arrows step 1 second, Home/End, 1 to 9 jump to a chapter, C captions." });
    ui.bar = h("div", { class: "pe-player__bar" }, h("div", { class: "pe-player__timeline" }, ui.track, ui.chapterRow), ui.controls, ui.help);
    // ---- steps (storyboard) view
    ui.stepsBack = h("button", { type: "button", class: "pe-player__steps-back", onclick: () => this.showSteps(false) }, icon("back"), h("span", { text: "Back to animation" }));
    ui.stepsBody = h("div", { class: "pe-player__steps-body" });
    ui.steps = h("div", { class: "pe-player__steps", hidden: true }, h("div", { class: "pe-player__steps-head" },
      h("p", { class: "pe-player__steps-title" }, h("strong", { text: "Step by step" }), h("span", { text: ` · ${title}` })), ui.stepsBack), ui.stepsBody);
    this.root.append(ui.viewport, ui.steps, ui.bar);
    if (!tl.phases.length) {          // nothing to play: calm message instead of a dead transport
      this.root.dataset.empty = "";
      ui.poster.hidden = true; ui.bar.hidden = true; ui.captions.hidden = true;
      drawPlaceholder(s("g", {}, this.stage.phasesLayer), { type: "none", label: "No animation steps were provided", phase: {} });
    }
    this.container.append(this.root);
    this.updateSpeedUI();
  }

  /* ------------------------------------------------------------ events */
  bind() {
    const ui = this.ui, on = (el, ev, fn, o) => { el.addEventListener(ev, fn, o); this.cleanups.push(() => el.removeEventListener(ev, fn, o)); };
    on(ui.bigPlay, "click", (e) => { e.stopPropagation(); this.play(); });
    on(ui.posterSteps, "click", (e) => { e.stopPropagation(); this.showSteps(true); });
    on(ui.poster, "click", () => this.play());
    on(ui.stage, "pointerdown", () => { try { if (!this.root.contains(document.activeElement)) this.root.focus({ preventScroll: true }); } catch { /* old browser */ } });
    on(ui.stage, "click", (e) => { if (e.target.closest(".pe-player__poster")) return; this.toggle(); });
    on(this.root, "keydown", (e) => this.onKey(e));
    // scrubber
    on(ui.track, "pointerdown", (e) => this.scrubStart(e));
    on(ui.track, "pointermove", (e) => this.scrubMove(e));
    on(ui.track, "pointerup", (e) => this.scrubEnd(e));
    on(ui.track, "pointercancel", (e) => this.scrubEnd(e));
    on(ui.track, "pointerleave", () => { if (!this.scrub) ui.tip.hidden = true; });
    // page visibility & viewport
    on(document, "visibilitychange", () => this.setSuspended("hidden", document.hidden));
    on(document, "fullscreenchange", () => this.updateFullscreenUI());
    if (typeof IntersectionObserver === "function") {
      this.io = new IntersectionObserver((entries) => {
        for (const en of entries) {
          this.setSuspended("offscreen", !en.isIntersecting);
          if (en.isIntersecting && en.intersectionRatio >= 0.5 && this.opts.autoplay && !this.rm && !this.started && !this.autoplayed) { this.autoplayed = true; this.play(); }
        }
      }, { threshold: [0, 0.5] });
      this.io.observe(this.root);
    }
    if (typeof ResizeObserver === "function") {
      this.ro = new ResizeObserver(() => {
        this.fitChapterLabels();
        const docked = this.root.clientWidth <= 560;     // matches the @container breakpoint in player.css
        if (docked !== this.stage.docked) { this.stage.setDocked(docked); this.render(); }
      });
      this.ro.observe(ui.chapterRow); this.ro.observe(this.root);
    }
    try {
      const mq = matchMedia("(prefers-reduced-motion: reduce)");
      const f = () => { if (this.opts.reducedMotion == null) this.setReducedMotion(mq.matches); };
      mq.addEventListener("change", f); this.cleanups.push(() => mq.removeEventListener("change", f));
    } catch { /* no matchMedia */ }
  }

  onKey(e) {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    if (this.stepsOpen) { if (e.key === "Escape") { e.preventDefault(); this.showSteps(false); } return; }
    const onButton = !!e.target.closest?.("button");
    const onTrack = e.target === this.ui.track;
    const step = e.shiftKey ? 5 : 1;
    const k = e.key;
    let handled = true;
    if (k === " " || k === "Spacebar") { if (onButton) return; this.toggle(); }
    else if (k === "k" || k === "K") this.toggle();
    else if (k === "ArrowLeft" || (onTrack && k === "ArrowDown")) this.seek(this.time - step);
    else if (k === "ArrowRight" || (onTrack && k === "ArrowUp")) this.seek(this.time + step);
    else if (onTrack && k === "PageDown") this.seek(this.time - 5);
    else if (onTrack && k === "PageUp") this.seek(this.time + 5);
    else if (k === "Home") this.seek(0);
    else if (k === "End") this.seek(this.tl.duration);
    else if (/^[1-9]$/.test(k) && +k <= this.tl.phases.length) this.jumpToChapter(+k - 1);
    else if (k === "c" || k === "C") this.setCaptions(!this.captionsOn);
    else if ((k === "f" || k === "F") && this.ui.fs) this.toggleFullscreen();
    else handled = false;
    if (handled) e.preventDefault();
  }

  /** Global time under a pointer x (segments are flex-proportional with fixed gaps). */
  timeAtX(clientX) {
    for (const [i, { seg }] of this.ui.segs.entries()) {
      const r = seg.getBoundingClientRect(), e = this.tl.phases[i];
      const last = i === this.ui.segs.length - 1;
      if (clientX <= r.right + this.gapPx / 2 || last) return e.start + clamp((clientX - r.left) / (r.width || 1)) * e.playDuration;
    }
    return 0;
  }
  scrubStart(e) {
    if (e.button > 0) return;
    e.preventDefault();
    try { this.ui.track.setPointerCapture(e.pointerId); } catch { /* synthetic event */ }
    this.ui.track.focus({ preventScroll: true });
    this.scrub = { resume: this.playing };
    if (this.playing) this.pause(true);
    this.root.dataset.scrubbing = "";
    this.seek(this.timeAtX(e.clientX));
    this.showTip(e.clientX);
  }
  scrubMove(e) {
    if (this.scrub) this.seek(this.timeAtX(e.clientX));
    if (this.scrub || e.pointerType === "mouse") this.showTip(e.clientX);
  }
  scrubEnd(e) {
    if (!this.scrub) return;
    const { resume } = this.scrub;
    this.scrub = null;
    delete this.root.dataset.scrubbing;
    try { this.ui.track.releasePointerCapture(e.pointerId); } catch { /* not captured */ }
    if (e.pointerType !== "mouse") this.ui.tip.hidden = true;
    if (resume && this.time < this.tl.duration) this.play();
  }
  showTip(clientX) {
    const T = this.timeAtX(clientX), loc = locate(this.tl, T), r = this.ui.track.getBoundingClientRect();
    this.ui.tip.textContent = `${formatTime(T)} · ${loc ? loc.entry.label : ""}`;
    this.ui.tip.hidden = false;
    const w = this.ui.tip.offsetWidth || 80;
    this.ui.tip.style.left = `${clamp(clientX - r.left, w / 2, Math.max(w / 2, r.width - w / 2))}px`;
  }

  /** Chapter labels that do not fit their segment collapse to their number. */
  fitChapterLabels() {
    for (const c of this.ui.chapters) {
      c.classList.remove("is-compact");
      const txt = c.lastElementChild;
      if (txt && txt.scrollWidth > txt.clientWidth + 1) c.classList.add("is-compact");
    }
  }

  /* ---------------------------------------------------------- playback */
  emit(evt, data) { for (const f of this.listeners.get(evt) || []) try { f(data); } catch (err) { console.warn("[anim] listener error", err); } }
  setState() {
    this.root.dataset.state = !this.started ? "poster" : this.ended ? "ended" : this.playing ? "playing" : "paused";
    const label = this.playing ? "Pause" : this.ended ? "Replay" : "Play";
    this.ui.play.setAttribute("aria-label", label); this.ui.play.title = label;
    this.ui.play.replaceChildren(icon(this.playing ? "pause" : this.ended ? "restart" : "play"));
    const showPoster = !this.started || this.ended;
    if (this.ui.poster.hidden === showPoster) {
      const hadFocus = this.ui.poster.contains(document.activeElement);
      this.ui.poster.hidden = !showPoster;
      if (hadFocus && !showPoster) this.ui.play.focus({ preventScroll: true });
    }
    if (this.ended) {
      this.ui.bigPlay.setAttribute("aria-label", "Watch again");
      this.ui.bigPlay.replaceChildren(icon("restart"));
      this.ui.posterTitle.hidden = true;
      this.ui.posterMeta.textContent = "Watch again";
      this.ui.posterSteps.hidden = false;
    }
  }
  play() {
    if (this.destroyed || !this.tl.duration) return;
    if (!this.started || this.ended || this.time >= this.tl.duration - 1e-3) { this.time = 0; }
    this.started = true; this.ended = false;
    if (!this.playing) { this.playing = true; this.last = performance.now(); this.schedule(); this.emit("play"); }
    this.setState(); this.render();
  }
  pause(internal = false) {
    if (!this.playing) return;
    this.playing = false;
    cancelAnimationFrame(this.raf); this.raf = 0;
    this.setState();
    if (!internal) this.emit("pause");
  }
  toggle() { if (this.playing) this.pause(); else this.play(); }
  seek(T) {
    if (this.destroyed) return;
    T = clamp(Number(T) || 0, 0, this.tl.duration);
    this.started = true;
    this.ended = false;
    this.time = T;
    this.last = performance.now();
    this.setState(); this.render();
    this.emit("seek", T);
  }
  jumpToChapter(i) {
    const e = this.tl.phases[i];
    if (e) this.seek(e.start);
  }
  schedule() { if (!this.raf && this.playing && !this.suspended) this.raf = requestAnimationFrame((now) => this.tick(now)); }
  tick(now) {
    this.raf = 0;
    if (!this.playing || this.suspended || this.destroyed) return;
    const dt = Math.min(0.1, Math.max(0, (now - this.last) / 1000)) * this.speed;
    this.last = now;
    let T = this.time + dt;
    if (T >= this.tl.duration) {
      if (this.opts.loop) T %= this.tl.duration || 1;
      else { this.time = this.tl.duration; this.render(); this.finish(); return; }
    }
    this.time = T;
    this.render();
    this.schedule();
  }
  finish() {
    this.playing = false; this.ended = true;
    this.setState();
    this.emit("pause"); this.emit("ended");
  }
  setSuspended(why, on) {
    this.suspendFlags[why] = on;
    const sus = this.suspendFlags.offscreen || this.suspendFlags.hidden;
    if (sus === this.suspended) return;
    this.suspended = sus;
    if (sus) { cancelAnimationFrame(this.raf); this.raf = 0; } else { this.last = performance.now(); this.schedule(); }
  }
  setSpeed(r) {
    if (!SPEEDS.includes(r)) return;
    this.speed = r; prefs.set({ speed: r });
    this.updateSpeedUI();
  }
  updateSpeedUI() {
    this.ui.speed.textContent = fmtRate(this.speed);
    const l = `Playback speed ${fmtRate(this.speed)}`;
    this.ui.speed.setAttribute("aria-label", l); this.ui.speed.title = l;
  }
  setCaptions(on) {
    this.captionsOn = !!on; prefs.set({ captions: this.captionsOn });
    this.root.dataset.captions = on ? "on" : "off";
    this.ui.cc.setAttribute("aria-pressed", String(this.captionsOn));
    this.ui.captions.setAttribute("aria-live", on ? "polite" : "off");
  }
  setDocked(on) { if (this.docked !== !!on) { this.docked = !!on; this.invalidate(); } }
  setReducedMotion(rm) {
    this.rm = !!rm;
    if (rm) this.root.dataset.rm = ""; else delete this.root.dataset.rm;
    if (!this.ended) this.ui.posterSteps.hidden = !rm;
    this.stage.setReducedMotion(rm);
    this.render();
  }
  toggleFullscreen() {
    try {
      if (document.fullscreenElement === this.root) document.exitFullscreen?.()?.catch?.(() => {});
      else this.root.requestFullscreen?.()?.catch?.((err) => this.warn(`full screen unavailable: ${err.message}`));
    } catch (err) { this.warn(`full screen unavailable: ${err.message}`); }
  }
  updateFullscreenUI() {
    if (!this.ui.fs) return;
    const fs = document.fullscreenElement === this.root;
    const l = fs ? "Exit full screen" : "Full screen";
    this.ui.fs.setAttribute("aria-label", l); this.ui.fs.title = l;
    this.ui.fs.replaceChildren(icon(fs ? "exitFullscreen" : "fullscreen"));
  }
  showSteps(on) {
    this.stepsOpen = !!on;
    this.root.dataset.view = on ? "steps" : "player";
    this.ui.viewport.hidden = on;
    this.ui.steps.hidden = !on;
    this.ui.bar.hidden = on;
    if (on) {
      this.pause();
      if (this.fullscreenActive()) this.toggleFullscreen();
      if (!this.board) this.board = renderStoryboard(this.ui.stepsBody, this.spec, { mode: "captions", renderers: this.opts.renderers, reducedMotion: this.rm, _shared: this.shared, _warn: this.warn });
      this.ui.stepsBack.focus({ preventScroll: true });
      try { this.root.scrollIntoView({ block: "nearest" }); } catch { /* old browser */ }
    } else {
      this.ui.stepsBtn.focus({ preventScroll: true });
      this.render();
    }
    this.emit("view", on ? "steps" : "player");
  }
  fullscreenActive() { try { return document.fullscreenElement === this.root; } catch { return false; } }

  /* ------------------------------------------------------------ render */
  render() {
    if (this.destroyed) return;
    const tl = this.tl, ui = this.ui;
    const showT = this.started ? this.time : posterTime(tl);
    const loc = this.stage.renderAt(showT);
    // scrubber
    const T = this.started ? this.time : 0;
    tl.phases.forEach((e, i) => {
      const f = e.playDuration ? clamp((T - e.start) / e.playDuration) : T >= e.end ? 1 : 0;
      const s = ui.segs[i];
      if (s.f !== f) { s.fill.style.transform = `scaleX(${f.toFixed(4)})`; s.f = f; }
    });
    const D = tl.duration || 1, u = T / D, idx = loc ? loc.index : 0;
    const gaps = (this.nSegs - 1) * this.gapPx;
    ui.thumb.style.left = `calc(${(u * 100).toFixed(3)}% + ${(idx * this.gapPx - gaps * u).toFixed(2)}px)`;
    const sec = formatTime(T);
    const chapIdx = this.started && loc ? loc.index : -1;
    if (sec !== this.lastSec || chapIdx !== this.lastChapIdx) {
      ui.timeCur.textContent = sec;
      ui.track.setAttribute("aria-valuenow", String(Math.floor(T)));
      ui.track.setAttribute("aria-valuetext", `${sec} of ${formatTime(tl.duration)}${loc ? ` — ${loc.entry.label}` : ""}`);
      this.lastSec = sec;
    }
    // chapter chip + chapter buttons
    if (loc && chapIdx !== this.lastChapIdx) {
      this.root.dataset.phase = loc.entry.type;      // CSS: micro draws its own stage chip top-left → hide ours
      ui.chipNum.textContent = `${loc.index + 1}/${tl.phases.length}`;
      ui.chipText.textContent = loc.entry.label;
      ui.chapters.forEach((c, i) => (i === chapIdx ? c.setAttribute("aria-current", "step") : c.removeAttribute("aria-current")));
      if (this.lastChapIdx !== undefined && chapIdx >= 0) this.emit("chapter", { index: loc.index, label: loc.entry.label });
      this.lastChapIdx = chapIdx;
    }
    // slow-motion badge
    const rate = loc && this.started ? rateAt(loc.entry, loc.t) : 1;
    if (rate !== this.lastRate) {
      ui.slowmo.hidden = rate >= 1;
      ui.slowmoText.textContent = `Slow motion · ${+rate.toFixed(2)}×`;
      this.lastRate = rate;
    }
    // captions (DOM touched only when the caption changes → calm for screen readers)
    const cap = loc && this.started ? captionAt(loc.entry, loc.t) : null;
    const key = cap ? `${loc.index}:${cap.index}` : "";
    if (key !== this.lastCapKey) {
      ui.captionText.textContent = cap ? cap.text : "";
      if (cap) ui.captions.removeAttribute("data-empty"); else ui.captions.setAttribute("data-empty", "");
      this.lastCapKey = key;
    }
    this.emit("timeupdate", T);
  }

  destroy() {
    if (this.destroyed) return;
    this.destroyed = true;
    this.playing = false;
    cancelAnimationFrame(this.raf);
    this.io?.disconnect(); this.ro?.disconnect();
    for (const f of this.cleanups) try { f(); } catch { /* ignore */ }
    try { if (this.fullscreenActive()) document.exitFullscreen?.(); } catch { /* ignore */ }
    this.board?.destroy();
    this.stage.destroy();
    this.root.remove();
    this.listeners.clear();
  }

  makeApi() {
    const p = this;
    return {
      play: () => p.play(), pause: () => p.pause(), toggle: () => p.toggle(), seek: (t) => p.seek(t), destroy: () => p.destroy(),
      jumpToChapter: (i) => p.jumpToChapter(i), setSpeed: (r) => p.setSpeed(r), setCaptions: (on) => p.setCaptions(on), showSteps: (on = true) => p.showSteps(on),
      get duration() { return p.tl.duration; }, get currentTime() { return p.time; }, get paused() { return !p.playing; },
      get chapters() { return p.tl.phases.map((e) => ({ index: e.index, type: e.type, label: e.label, start: e.start, end: e.end })); },
      get element() { return p.root; }, ready: p.ready,
      /** on("play"|"pause"|"ended"|"seek"|"timeupdate"|"chapter"|"ready"|"warn"|"view", fn) → unsubscribe */
      on(evt, fn) { if (!p.listeners.has(evt)) p.listeners.set(evt, new Set()); p.listeners.get(evt).add(fn); return () => p.listeners.get(evt)?.delete(fn); },
      off(evt, fn) { p.listeners.get(evt)?.delete(fn); }
    };
  }
}

/** Static stand-in when mounting itself fails: the page keeps working. */
function deadController(container, spec, err) {
  let el = null;
  try {
    el = h("div", { class: "pe-player pe-player--dead", role: "group", "aria-label": String(spec?.title || "Animation") },
      h("div", { class: "pe-player__dead-msg", text: "This animation could not be displayed." }));
    container?.append(el);
  } catch { /* no DOM */ }
  const ready = Promise.resolve();
  return { play() {}, pause() {}, toggle() {}, seek() {}, jumpToChapter() {}, setSpeed() {}, setCaptions() {}, showSteps() {},
    destroy() { el?.remove(); }, duration: 0, currentTime: 0, paused: true, chapters: [], element: el, ready, error: err, on() { return () => {}; }, off() {} };
}

/**
 * Mount an animation player into `container`.
 * opts: { autoplay=false, loop=false, showTitle=true, captions (bool), speed (0.5|1|1.5), reducedMotion (override),
 *         startAt (s: show that frame instead of the poster), onWarn(msg), renderers: { moi, closeup, micro } (mocks) }
 */
export function mountAnimation(container, spec, opts = {}) {
  try {
    ensureStyles();
    return new Player(container, spec, opts || {}).api;
  } catch (err) {
    try { console.warn(`[anim] player failed to mount: ${err?.message || err}`); } catch { /* no console */ }
    return deadController(container, spec, err);
  }
}

/* =========================================================== Storyboard */
const nextTask = () => new Promise((r) => setTimeout(r, 0));

/**
 * Static grid of frames, each with its chapter, time and caption (reduced motion, print, QA contact sheets).
 * opts: { frames=6, mode: "key" (caption moments, spread over phases) | "even" | "captions" (one per caption),
 *         times: number[] (explicit global times), reducedMotion, renderers, onWarn, headingLevel }
 * @returns {{ element, ready: Promise, destroy() }}
 */
export function renderStoryboard(container, spec, opts = {}) {
  opts = opts || {};
  const stages = [];
  let destroyed = false;
  const list = h("ol", { class: "pe-storyboard" });
  try {
    ensureStyles();
    const warn = opts._warn || makeWarn(opts.onWarn);
    const tl = buildTimeline(spec, { warn });
    list.setAttribute("aria-label", `${tl.title}: step by step`);
    container.append(list);
    const n = Math.max(1, Math.min(60, Math.round(opts.frames ?? 6)));
    const mode = Array.isArray(opts.times) ? "times" : opts.mode || "key";
    const items = mode === "times" ? opts.times.map((T) => ({ T: clamp(+T || 0, 0, tl.duration) }))
      : mode === "captions" ? captionTimes(tl)
      : (mode === "even" ? evenTimes(tl, n) : keyTimes(tl, n)).map((T) => ({ T }));
    if (!tl.phases.length) items.length = 0;
    else if (!items.length) items.push({ T: posterTime(tl) });
    if (!items.length) list.append(h("li", { class: "pe-storyboard__empty", text: "No animation steps are available." }));
    const shared = opts._shared || { moiCams: new Map() };
    const ready = (async () => {
      const renderers = await loadRenderers(tl, opts.renderers, warn);
      for (const [i, it] of items.entries()) {
        if (destroyed) return;
        const stage = new Stage({ timeline: tl, warn, reducedMotion: !!opts.reducedMotion, shared, className: "pe-storyboard__svg" });
        stages.push(stage);
        stage.setRenderers(renderers);
        stage.onRedraw = () => stage.renderAt(it.T);
        const loc = stage.renderAt(it.T);
        const cap = it.text ?? (loc ? captionAt(loc.entry, loc.t)?.text : "") ?? "";
        const meta = h("span", { class: "pe-storyboard__meta" },
          h("span", { class: "pe-storyboard__num", text: `${i + 1}` }),
          h("span", { text: loc ? loc.entry.label : "" }),
          h("span", { class: "pe-storyboard__time", text: formatTime(it.T) }));
        list.append(h("li", { class: "pe-storyboard__frame" }, h("figure", {},
          h("div", { class: "pe-storyboard__stage" }, stage.svg),
          h("figcaption", {}, meta, cap ? h("p", { class: "pe-storyboard__caption", text: cap }) : null))));
        if (i % 3 === 2) await nextTask();     // keep the page responsive while drawing many frames
      }
    })().catch((err) => warn(`storyboard failed: ${err?.message || err}`));
    return { element: list, ready, destroy() { destroyed = true; stages.forEach((st) => st.destroy()); list.remove(); } };
  } catch (err) {
    try { console.warn(`[anim] storyboard failed: ${err?.message || err}`); } catch { /* no console */ }
    return { element: list, ready: Promise.resolve(), destroy() { list.remove(); } };
  }
}
