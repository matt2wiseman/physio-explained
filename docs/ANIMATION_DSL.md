# Animation DSL & Engine Contract

Every injury page has a short animated explainer (~15–30 s) built from **phases** that play in order:

| Phase | What the viewer sees | Implemented by |
|---|---|---|
| `moi` | Whole-body figure performing the mechanism of injury (MOI), with force arrows, slow-motion and a highlight at the injury site | rig + player |
| `zoom` | Camera pushes in from the figure to the injured body part, then cross-fades into the close-up | player/camera |
| `closeup` | Anatomical close-up of the joint/muscle (named structures) showing what fails: stretch → tear, fracture, herniation, compression, bleeding, swelling | close-up renderer + scene files |
| `micro` | Microscopic/cellular view: fibres failing, then the healing cascade (inflammation → proliferation → remodelling) or the tissue's specific process | micro modules |

All ids (scenes, structures, anchors, presets, props, micro stages) come from **`js/anim/catalogue.js`**. `npm run validate` rejects anything else.

Rendering is **SVG** (no external libraries), on a fixed dark "lightbox" stage (`--stage-*` / `--fig-*` / `--anat-*` / `--fx-*` tokens in `css/tokens.css`). Everything must be deterministic: the frame at time *t* is a pure function of the spec and *t* (this makes scrubbing, screenshots and reduced-motion storyboards possible).

---

## 1. The `animation` object (authored in each injury file)

```js
animation: {
  title: "How an ACL rupture happens",            // shown above the player
  phases: [ /* moi | zoom | closeup | micro, in play order */ ]
}
```
Typical durations: moi 4–7 s, zoom 1.2–2 s, closeup 6–10 s, micro 6–10 s. Total ≤ 35 s.
Every phase has `type`, `label` (chapter name shown on the timeline, ≤ 18 chars) and `duration` (seconds). Times `t` inside a phase are **seconds from the start of that phase**.

Every phase may have `captions: [{ t, text }]` — each caption shows from its `t` until the next caption (or the phase end). Captions are the teaching voice: one short sentence each (≤ 110 chars), present tense, clinical but plain. Aim for one caption every 1.5–3 s.

### 1.1 `moi` phase

```js
{
  type: "moi", label: "Mechanism", duration: 5,
  view: "anterior",                 // "lateral" | "anterior"  (see JOINTS in catalogue for angle meanings)
  environment: "court",             // ENVIRONMENTS
  actors: [                         // optional. Default: [{ id: "athlete", kit: "athlete" }]
    { id: "athlete", kit: "athlete" },
    { id: "opponent", kit: "opponent", facing: "left" }   // facing: "right" (default) | "left"
  ],
  keyframes: [                      // per actor; sorted by t; poses are interpolated (eased) between keyframes
    { t: 0,   actor: "athlete", pose: "run-contact", root: { x: -80 } },
    { t: 1.0, actor: "athlete", pose: "cut-plant", root: { x: 0 } },
    { t: 1.6, actor: "athlete", pose: "valgus-collapse", joints: { kneeR: 25, hipR: -12 }, ease: "in" }
  ],
  props: [                          // optional
    { id: "ball", type: "ball-basketball", attach: "handR" },                  // follows a body target
    { id: "ball2", type: "ball-soccer", keyframes: [{ t: 0, x: 60, y: 10 }, { t: 1, x: 20, y: 0 }] }   // world cm, y = height above ground
  ],
  forces: [                         // arrows drawn on the body
    { t: [1.4, 2.6], at: "kneeR", dir: "medial", label: "Valgus load" },        // dir ∈ FORCE_DIRS, or angle: degrees (0 = screen right, 90 = up)
    { t: [1.4, 2.6], at: "shinR", dir: "forward", label: "Anterior tibial shear" }
  ],
  highlights: [{ t: [1.5, 5], at: "kneeR" }],   // pulsing glow at a BODY_TARGET
  impacts: [{ t: 1.6, at: "kneeR" }],           // brief flash/shake at the moment of injury
  slowmo: [{ t: [1.3, 2.2], rate: 0.25 }],      // optional time-stretch around the injury moment
  captions: [ { t: 0, text: "..." } ]
}
```
**Keyframe fields**
- `t` (s), `actor` (defaults to the first actor), `pose` (POSE_PRESETS id) and/or `joints` (overrides, degrees, JOINT_NAMES), `root`, `ease`: `"linear" | "in" | "out" | "inOut"` (default `"inOut"`; applies to the segment ending at this keyframe).
- `root`: `{ x, lift, rot }` — `x` horizontal position in cm (0 = stage centre), `lift` cm above the auto-grounded height (jumps), `rot` whole-body pitch in degrees (+ = falls forward / face down; used for falls and lying). By default the rig keeps the lowest foot on the ground; set `root.grounded: false` when the body must leave the ground without a foot as the lowest point (e.g. mid-fall).
- Angles not given by the preset or overrides stay at their previous keyframe value (the first keyframe starts from `stand`).

**Authoring tips**
- Use `view: "anterior"` for frontal-plane mechanisms (valgus, inversion sprain, lateral trunk flexion, AC joint fall on point of shoulder), `"lateral"` for sagittal mechanisms (hamstring late swing, Achilles push-off, whiplash, stoop lift, FOOSH).
- The right side (`R`) is the injured side by convention. In lateral view R is the near limb.
- 3–6 keyframes is usually enough. Put the injury moment roughly 50–70 % through the phase, wrap it in `slowmo`, and fire `impacts` at the exact instant.


**Rig extras (from the rig implementation, A2):**
- Anterior-view joint angles are the *visible (projected)* frontal-plane angles — a heavily flexed segment reads by its screen direction.
- `root` also accepts `roll` (+ = topples toward the patient's right) and `yaw` (+ = turns toward the patient's right; lateral view + `yaw: 90` shows the front); both interpolate.
- `grounded: false` places the pelvis at standing height + `lift`.
- Lying presets: `lie-supine` = rot −90 (head screen-left), `lie-prone` = rot +90 (head screen-right), side-lying = yaw 90 + roll −90.
- Prop keyframes may use `{ t, at: "<BODY_TARGET>" }` instead of `x`/`y`, plus optional `rot`.
- `forces` accept optional `actor` (default first actor) and `size: "s" | "m" | "l"`.

### 1.2 `zoom` phase
```js
{ type: "zoom", label: "Zoom in", duration: 1.5, to: "kneeR", captions: [] }
```
`to` is a BODY_TARGET. The camera holds the last MOI frame, scales toward the target (≈ 6×), and cross-fades into the following `closeup` phase. A `zoom` must be preceded by a `moi` and followed by a `closeup`.

### 1.3 `closeup` phase
```js
{
  type: "closeup", label: "Inside the knee", duration: 9,
  scene: "knee-anterior",           // SCENES id
  mirror: false,                    // optional: flip horizontally (left-side injuries)
  actions: [
    { t: 0.0, do: "highlight", target: "acl" },
    { t: 0.8, do: "arrow", at: "lateralTibialPlateau", dir: "anterior", label: "Anterior tibial translation" },
    { t: 1.0, do: "stretch", target: "acl", amount: 0.35, dur: 1.2 },
    { t: 2.4, do: "tear", target: "acl", grade: 3, at: 0.5 },
    { t: 2.4, do: "impact", at: "jointCentre" },
    { t: 3.2, do: "bruise", target: "femur", at: "lateralFemoralCondyle" },
    { t: 3.6, do: "bleed", target: "jointSpace" },
    { t: 4.5, do: "label", target: "acl", text: "Complete (grade III) rupture" },
    { t: 6.0, do: "camera", at: "lateralTibialPlateau", zoom: 1.6, dur: 1 }
  ],
  captions: [ ... ]
}
```
**Common action fields**: `t` (s), `do` (action), `target` (structure id — required for structure actions), `dur` (transition seconds, default 0.6), `label` (optional text callout attached to the effect).

**Actions (by structure type — see STRUCTURE_TYPES):**

| Action | Applies to | Parameters | Visual |
|---|---|---|---|
| `highlight` / `unhighlight` | any | — | glow outline in `--fx-highlight` |
| `pulse` | any | — | breathing glow (draws attention) |
| `label` | any | `text` | leader-line callout |
| `fade` | any | `to` (0–1) | opacity change (ghost overlying structures) |
| `show` / `hide` | any | — | |
| `swell` | any | `amount` 0–1 | oedema halo + slight scale-up |
| `inflame` | any | `amount` 0–1 | red-orange glow, swelling, heat shimmer |
| `move` | any | `to` (anchor) **or** `dir` + `amount` 0–1 | translate (dislocation, subluxation, displacement, slip) |
| `rotate` | any | `deg` | rotate about the structure centroid (fracture angulation, tilt) |
| `reset` | any | — | return to resting state (relocation, reduction, healing) |
| `fracture` | bone | `pattern` (FRACTURE_PATTERNS), `at` (anchor), `displaced` (bool) | fracture line(s) in pattern; displaced fragments separate |
| `bruise` | bone | `at` (anchor) | bone-marrow-oedema blush |
| `stress` | bone | `at` (anchor) | stress reaction: periosteal glow → cortical line |
| `stretch` | ligament, tendon, muscle, nerve, capsule | `amount` 0–1 | elongates & thins, fibres straighten |
| `tear` | ligament, tendon, cartilage, vessel, capsule, fascia | ligament/tendon: `grade` 1–3, `at` 0–1 along the band. cartilage: `pattern` (CARTILAGE_TEARS), `at` 0–1 | grade 1 frayed fibres; 2 partial gap; 3 full rupture with recoiling ends |
| `avulse` | ligament, tendon | `end`: `"from"` \| `"to"` | tendon/ligament pulls off bone with a fragment |
| `degenerate` | ligament, tendon, cartilage, disc, fascia | — | thickened, disorganised, discoloured, neovessels |
| `thicken` | ligament, tendon, fascia | `amount` | |
| `calcify` | tendon | `at` 0–1 | calcific deposit |
| `contract` | muscle | `amount` | shortens/bulges |
| `strain` | muscle | `grade` 1–3, `at` 0–1 along muscle axis (0 = origin) | fibre disruption at site, haemorrhage for grade ≥2 |
| `haematoma` | muscle | `at` 0–1 | blood pooling |
| `ossify` | muscle | `at` 0–1 | myositis ossificans |
| `atrophy` | muscle | `amount` | thinning (disuse, AMI) |
| `spasm` | muscle | — | protective guarding: rapid tremor + shortening |
| `compress` | cartilage, nerve, vessel, bursa, disc | nerve/vessel: `at` 0–1 or anchor | squash + pinch; nerves turn "irritated" |
| `lesion` | cartilage | `at` 0–1, `depth`: `"partial"` \| `"full"` \| `"osteochondral"` | chondral/osteochondral defect |
| `irritate` | nerve | — | flickering "firing" glow along the nerve |
| `entrap` | nerve | `at` 0–1 | constriction ring |
| `occlude` | vessel | `at` 0–1 | flow stops distal to point |
| `herniate` | disc | `grade` (HERNIATION_GRADES), `dir`: `"posterior"` \| `"posterolateral-left"` \| `"posterolateral-right"` \| `"anterior"` \| `"foraminal-left"` \| `"foraminal-right"` | nucleus pushes through annulus |
| `fissure` | disc | — | annular tear lines |
| `tighten` | capsule | `amount` | capsule contracts (adhesive capsulitis) |
| `impinge` | fatpad | — | pinched between bones, inflamed |
| `bleed` | space | — | haemarthrosis / haematoma fills the space |
| `effuse` | space | `amount` | clear effusion |
| `pressure` | space | `amount` | compartment pressure (tension shading, compressed vessels) |
| `separate` | physis | `grade` (SALTER_HARRIS) | physeal separation |
| `accelerate` | brain | `dir` | brain lags & strikes skull (coup/contrecoup) |
| `shear` | brain | — | strain lines through white matter |
| `scatter` | particles | `to` (anchor) | crystals drift to anchor (BPPV) |
| `arrow` | scene | `at` (anchor), `dir` (scene direction keyword or angle), `label`, `size`: `"s"`\|`"m"`\|`"l"` | force/translation arrow |
| `impact` | scene | `at` | flash ring at moment of injury |
| `camera` | scene | `at` (anchor) **or** `target`, `zoom` 1–3, `dur` | in-scene zoom/pan; `{ do: "camera", zoom: 1 }` resets |
| `pain` | scene | `at` | pain marker (pulsing jagged burst) — use for symptom location |

**Direction keywords in close-ups**: `"superior" | "inferior" | "medial" | "lateral" | "anterior" | "posterior" | "proximal" | "distal" | "up" | "down" | "left" | "right"` or a number (degrees, 0 = screen right, 90 = up). Each scene declares how anatomical directions map to the screen; out-of-plane directions are drawn with the ⊙ (toward viewer) / ⊗ (away) convention.

**State model**: actions are cumulative. The renderer computes, for time *t*, the state of each structure by applying (in order) every action whose `t ≤` current time, tweening over `dur`. Scrubbing backwards must work.

### 1.4 `micro` phase
```js
{
  type: "micro", label: "Cellular response", duration: 9, tissue: "ligament",
  stages: [
    { t: 0,   stage: "healthy" }, { t: 1.2, stage: "overload" }, { t: 2.2, stage: "failure" },
    { t: 3.4, stage: "haemorrhage" }, { t: 4.6, stage: "inflammation" }, { t: 6.2, stage: "proliferation" }, { t: 7.8, stage: "remodelling" }
  ],
  timeLabels: [ { t: 4.6, text: "0–5 days" }, { t: 6.2, text: "5 days – 6 weeks" }, { t: 7.8, text: "6 weeks – 12+ months" } ],   // optional clock overlay
  captions: [ ... ]
}
```
`tissue` ∈ MICRO_TISSUES and every `stage` must be in that tissue's list (any subset, in order).
Optional `variant` (see MICRO_VARIANTS): `variant: "intra-articular"` for ligament/tendon inside a synovial joint (ACL, PCL, LHB) — the clot is diluted by synovial fluid, a synovial cap forms on each stump and **no bridging scar forms**; use it whenever your captions say the tissue does not heal across the gap. Each stage shows a clearly different, labelled microscopic state (e.g. *inflammation*: platelets → neutrophils → macrophages; *proliferation*: fibroblasts laying down disorganised type III collagen + new capillaries; *remodelling*: aligned type I collagen along the line of load). The engine shows the stage name as a small chip.

---

## 2. Engine modules & public APIs

```
js/anim/
  catalogue.js        QC    — ids (read-only for everyone else)
  index.js            A1    — public entry: mountAnimation(), renderStoryboard()
  player.js           A1    — timeline, transport controls, chapters, captions, speed, keyboard, reduced motion
  camera.js           A1    — viewBox tweening, zoom phase, cross-fade
  timeline.js         A1    — phase scheduling, slowmo time-remap, easing helpers (shared utils)
  rig.js              A2    — renderFigure(), poseAt(), skeleton geometry, body target resolution
  poses.js            A2    — POSE_PRESETS angle tables (both views)
  props.js            A2    — prop & environment drawings
  moi.js              A2    — renders a moi phase frame (actors, props, forces, highlights, impacts)
  closeup.js          A8    — renders a closeup phase frame from a scene file + actions (all structure types & actions)
  closeup-fx.js       A8    — shared effect primitives (tear, fracture lines, glow, bleed, arrows, labels)
  scenes/<id>.js      A3–A6, A8 — one declarative file per SCENES id
  micro/index.js      A7    — renderMicroFrame(g, phase, t, ctx) (alias renderMicro); renderMicroStage() for single-stage previews
  micro/<tissue>.js   A7, A9 — one module per MICRO_TISSUES id
```

### Public API (consumed by the injury page)
```js
import { mountAnimation, renderStoryboard } from "./anim/index.js";
const player = mountAnimation(containerEl, injury.animation, { autoplay: false, loop: false });
player.play(); player.pause(); player.seek(seconds); player.destroy();
renderStoryboard(containerEl, injury.animation, { frames: 6 });   // static key-frame strip (reduced motion / print)
```
```js
import { renderFigure } from "./anim/rig.js";   // static figure for exercise illustrations
const svg = renderFigure({ view: "lateral", pose: "ex-bridge", joints: {}, props: ["mat"], width: 160, height: 120 });
container.append(svg);
```

### Internal frame contract (so modules can be built in parallel)
- **A2 → A1**: `renderMoiFrame(g, phase, t, ctx)` draws into SVG group `g` (world units cm; ground y = 0, y up — `moi.js` applies the flip). Returns `{ bbox: {x, y, w, h}, targets: { kneeR: [x, y], ... } }` so the camera can frame and zoom.
- **A8 → A1**: `renderCloseupFrame(g, phase, t, ctx)` draws the scene in its own viewBox units; returns `{ viewBox: [x, y, w, h], anchors }`.
- **A7 → A1**: `renderMicroFrame(g, phase, t, ctx)` draws in a 800 × 450 coordinate space.
- `ctx` = `{ reducedMotion, width, height, defs }` where `defs` is a shared `<defs>` element for gradients/filters (prefix every id with the module name to avoid collisions, e.g. `closeup-glow`).
- Every `render*Frame` must be **pure and idempotent**: called many times per second with arbitrary `t` (including going backwards). Clear and redraw, or diff — but never accumulate.

Stage is 16:9 (`viewBox 0 0 800 450` for the composited view); the player scales it responsively. Captions are HTML overlays (not SVG text) so they wrap and are screen-reader friendly (`aria-live="polite"`).

---

## 3. Visual style rules
- Calm, clinical, legible at 360 px wide. No gore. Blood = dark red tint, not splatter.
- Figure: smooth capsule-limbed mannequin (not a stick figure, not a realistic human), near limbs brighter than far limbs, clear joint centres, subtle shading. Kit colours from `--fig-*`.
- Close-ups: atlas-style anatomical illustration — flat fills with a soft inner gradient and a darker edge stroke; fibre texture on ligaments/tendons/muscles (thin parallel lines along the axis); bones with a cortical rim and faint trabecular texture. Use `--anat-*` tokens only.
- Injury effects use `--fx-*` tokens. The injured structure must be unmistakable at the key moment (highlight + label).
- Labels: 13–15 px equivalent, sentence case, leader lines, never overlapping the structure they name; avoid more than 4 labels visible at once.
- Respect `prefers-reduced-motion`: player starts paused, offers the storyboard, and transitions become cuts.

---

## 4. Scene file format (`js/anim/scenes/<id>.js`)

Declarative data + optional custom drawing. The close-up renderer (A8) draws every structure **by type** and applies actions generically, so scene authors mostly provide geometry.

```js
export default {
  id: "knee-anterior",
  viewBox: [0, 0, 800, 450],      // REQUIRED: every scene uses the 16:9 stage coordinate space (800 × 450)
  // how anatomical directions map to screen unit vectors (y down); "out"/"in" = toward/away from viewer
  directions: { medial: [1, 0], lateral: [-1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1], anterior: "out", posterior: "in" },
  backdrop: [ { d: "M ... Z", fill: "skin", opacity: 0.35 } ],  // decorative silhouette: fill ∈ skin|soft|fat|fluid|none
  structures: {
    // closed shapes
    femur:  { type: "bone", d: "M ... Z", z: 1 },                       // z = paint order (low first)
    medialMeniscus: { type: "cartilage", d: "M ... Z", axis: [[x1, y1], [x2, y2]], z: 4 },   // axis needed for tear/lesion `at`
    vastusMedialis: { type: "muscle", d: "M ... Z", axis: [[x1, y1], [x2, y2]], fibreAngle: 20, z: 2 },  // axis origin→insertion
    // bands (ligament, tendon, nerve, vessel, fascia, capsule may also be bands)
    acl: { type: "ligament", from: [x, y], to: [x, y], width: 14, bend: 0, z: 5 },     // straight/curved band; bend = true perpendicular bow at the midpoint (px), sign: + bows toward (−dy, +dx) of the from→to direction
    sciaticNerve: { type: "nerve", points: [[x, y], [x, y], [x, y]], width: 8, z: 3 }, // polyline centreline (smoothed)
    // ellipses
    prepatellarBursa: { type: "bursa", cx, cy, rx, ry, rotate: 0, z: 6 },
    disc: { type: "disc", cx, cy, rx, ry, rotate: 0, nucleus: { rx, ry, dx: 0, dy: 0 }, z: 3 },
    // hidden-until-used spaces
    jointSpace: { type: "space", d: "M ... Z", z: 0 },
    otoconia: { type: "particles", cx, cy, r: 6, count: 8, z: 9 },
    // any structure may add: label: [x, y] (preferred label anchor), ghost: true (draw at 35 % opacity by default),
    //                        draw(g, state, api) for fully custom rendering (escape hatch — use sparingly)
  },
  anchors: { lateralFemoralCondyle: [x, y], ... }   // EVERY anchor listed in catalogue.js for this scene
};
```
Rules for scene authors:
1. Implement **every** structure and anchor listed for your scene in `catalogue.js`, using exactly those ids and types. Decorative extras are allowed but must not be targetable ids.
0. `viewBox` is always `[0, 0, 800, 450]`. Keep the anatomy inside roughly x 140–660 so labels have room on both sides.
2. Anatomically faithful proportions and relationships (attachments in the right place, correct layering). Reference a standard atlas view; label the view orientation in the file header comment.
3. Bands must run attachment-to-attachment so `tear at: 0.5` really is mid-substance and `avulse end: "to"` pulls off the distal attachment.
4. Check your scene visually: `node tools/render-scene.mjs <scene-id>` writes PNGs to `tools/output/` (static preview, all structures labelled) — open them with the Read tool and iterate until it looks like a clean atlas illustration.


**Advanced/optional fields** supported by the renderer (`kind` for vessels artery|vein, `visible`/`hidden`, `epiphysis` linking a physis to its bone, `fillRule`, per-action `hold`, `accelerate` direction semantics, cartilage tear orientation, longer default `dur` for slow processes such as bleed/stress/herniate) are documented in the header comment of `js/anim/closeup.js` — that header is authoritative.

## 5. Micro module format (`js/anim/micro/<tissue>.js`)
```js
export default {
  id: "ligament",
  render(g, { stage, progress, prevStage, t, ctx }) { /* draw 800×450 */ }
};
```
`stage` = current stage id, `progress` 0–1 through the stage (for in-stage motion), `prevStage` for cross-fades. Must be deterministic (seeded randomness only — use the `rng(seed)` helper exported by `micro/index.js`).
