/**
 * js/anim/index.js — public entry point of the animation engine.      OWNER: A1
 *
 *   import { mountAnimation, renderStoryboard } from "./anim/index.js";
 *   const player = mountAnimation(el, injury.animation, { autoplay: false, loop: false });
 *   player.play(); player.pause(); player.seek(12); player.destroy();
 *   player.on("chapter", ({ index, label }) => …);           // play | pause | ended | seek | timeupdate | chapter | ready | warn | view
 *   await player.ready;                                       // first frame drawn (phase modules loaded)
 *   renderStoryboard(el, injury.animation, { frames: 6 });   // static key-frame grid → { element, ready, destroy }
 *
 * Heavy phase renderers (moi.js, closeup.js, micro/*) are lazy-imported by the player, so importing this
 * module is cheap. Everything here is safe to call with a bad or partial spec: problems are reported with
 * console.warn("[anim] …") and the player keeps working.
 */
export { mountAnimation, renderStoryboard, prefersReducedMotion, ensureStyles } from "./player.js";
export { buildTimeline, locate, globalTime, captionAt, captionAtTime, posterTime, formatTime,
  ease, easeBetween, EASINGS, clamp, lerp, smoothstep } from "./timeline.js";
