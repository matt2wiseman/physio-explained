# Physio Explained — Architecture & Ownership

A static, build-free single-page web app (vanilla ES modules, no frameworks, no npm runtime dependencies).
Content is authored as JS data files and compiled to JSON by `scripts/build.mjs`. Animations are SVG, driven by data.
It must run from any static host (GitHub Pages, Vercel, a claude.ai Artifact) and from `npx serve .`.

## Teams (6 components) & file ownership
**Only edit files you own.** Need a change in someone else's file? Write it in `docs/REQUESTS.md` (append a line: `- [from X → owner Y] request`). Never delete or rewrite another team's work. Never run `git commit`, `git push`, `git reset` or `git checkout` — QC handles version control.

| Component | Agents | Owns |
|---|---|---|
| **1. Platform & UX** | P1–P6 | `index.html`, `css/base.css`, `css/layout.css`, `css/components/*.css`, `js/app.js`, `js/router.js`, `js/store.js`, `js/util/*`, `js/views/*`, `js/components/*`, `js/search/*`, `data/glossary.json`, `assets/*` |
| **2. Animation engine** | A1–A9 | `js/anim/**` (except `catalogue.js`), `css/components/player.css`, `tools/anim-preview.html` |
| **3. Lower-limb content** | LL1–LL10 | `content/injuries/{hip-groin,thigh,knee,lower-leg,ankle,foot}/<their ids>.js` |
| **4. Upper-limb content** | UL1–UL8 | `content/injuries/{shoulder,arm,elbow,wrist-hand}/<their ids>.js` |
| **5. Spine, trunk, head & general content** | SP1–SP6 | `content/injuries/{cervical,thoracic,lumbar,pelvis,chest-abdomen,head-face,general}/<their ids>.js` |
| **6. Evidence & QA** | QA1–QA7 | `tests/**`, review reports in `docs/qa/`; edits to content files during their review pass |
| **Head of QC** | — | `docs/*.md` (except qa/), `css/tokens.css`, `js/anim/catalogue.js`, `content/catalogue.json`, `scripts/**`, `tools/lib/*`, `tools/*.mjs`, `content/injuries/knee/acl-rupture.js`, `CLAUDE.md` |

Detailed per-file ownership inside Platform and Animation is in the table at the bottom.

## Directory map
```
index.html                 app shell (P1)
css/tokens.css             design tokens (QC) — colours, type, spacing. Use tokens only, never literal colours.
css/base.css, layout.css   reset, typography, page grid (P1)
css/components/*.css       one file per component, linked from index.html (P1 links them all; files pre-created)
js/app.js                  bootstrap: theme, header, router start (P1)
js/router.js               hash-token router (P1)
js/store.js                data loading + local prefs (P1)
js/util/dom.js             h(), esc(), formatText(), icons (P1)
js/views/<view>.js         one module per route (various P agents)
js/components/<c>.js       reusable widgets
js/search/engine.js        search index + ranking (P5)
js/anim/**                 animation engine (A1–A8), catalogue (QC)
content/catalogue.json     the 169 planned injuries, ids, regions and assigned writer (QC)
content/injuries/<region>/<id>.js   injury content (content teams)
data/index.json            GENERATED light index for library/search
data/injuries/<id>.json    GENERATED full injury records (lazy-loaded)
data/meta.json             GENERATED counts
data/glossary.json         glossary terms (P5)
scripts/build.mjs          validate + generate data/ (QC)
tools/                     previews & screenshot tools (QC + A1)
tests/                     automated tests (QA7)
```

## Routing (hash tokens)
The app must work inside a sandboxed iframe where only `#token` style hashes are reliable. Routes are **dot-separated tokens, letters/digits/`-`/`.` only**:

| Hash | View module | Notes |
|---|---|---|
| `#home` (or empty) | `views/home.js` | |
| `#library` / `#library.<region>` / `#library.<bodyArea>` | `views/library.js` | other filters kept in page state |
| `#search` / `#search.<terms-joined-by-hyphens>` | `views/search.js` | |
| `#injury.<id>` / `#injury.<id>.<section>` | `views/injury.js` | section = anchor id e.g. `assessment` |
| `#bodymap` | `views/bodymap.js` | interactive body navigator |
| `#compare` / `#compare.<id1>.<id2>` | `views/compare.js` | side-by-side compare (ids contain hyphens not dots) |
| `#saved` | `views/saved.js` | favourites + recently viewed |
| `#healing` / `#healing.<tissue>` | `views/healing.js` | tissue healing science primer |
| `#glossary` | `views/glossary.js` | |
| `#about` | `views/about.js` | methods, evidence levels, disclaimer, credits |
| anything else | `views/notfound.js` | |

`router.js` API: `start()`, `navigate(hash)`, `current() → { name, params: string[] }`, `onChange(fn)`. On route change: call the previous view's `destroy()` if present, scroll to top (or to section), set `document.title`, move focus to the main `<h1>` for screen readers.

### View module contract
```js
// js/views/<name>.js
export async function render(main, params, ctx) { /* fill <main>; params = string[] from the hash */ }
export function destroy() { /* optional: stop animations, remove listeners */ }
export const title = (params, ctx) => "Library";   // optional document.title
```
`ctx` = `{ store, router, h, esc, formatText }`.

## Data API (`js/store.js`, P1)
```js
await store.index()            // → IndexEntry[] (data/index.json, cached)
await store.meta()             // → data/meta.json
await store.injury(id)         // → full injury object (data/injuries/<id>.json, cached)
await store.glossary()         // → data/glossary.json
store.favourites.list() / has(id) / toggle(id) / onChange(fn)    // localStorage, wrapped in try/catch
store.recent.list() / push(id)                                  // last 12 viewed
store.prefs.get(key, fallback) / set(key, value)                 // theme, library view mode, etc.
```
All `fetch` URLs are **relative** (`data/index.json`, never `/data/...`). All localStorage access is wrapped in try/catch and the app works without it.

## Shared helpers (`js/util/dom.js`, P1)
```js
h(tag, attrs?, ...children) → Element     // attrs: class, on:{click}, aria-*, data-*, html (trusted only)
esc(str) → string                           // HTML escape
formatText(str, { refs, injuryId }) → DocumentFragment
  // escapes text, converts **bold**, turns [r1,r3] into superscript links to #injury.<id>.references (with tooltip = citation),
  // splits "\n\n" into paragraphs
icon(name) → SVGElement                     // small inline icon set (search, bookmark, play, pause, chevron, external, warning, ...)
REGION_LABELS, BODY_AREA_LABELS, TISSUE_LABELS, EVIDENCE_LABELS  // display names
```

## Components (`js/components/`)
| Module | Owner | Export |
|---|---|---|
| `injury-card.js` | P3 | `injuryCard(entry, { compact }) → Element` (used by home, library, search, saved, related) |
| `searchbox.js` | P5 | `mountSearchbox(container, { autofocus, onSubmit }) ` — header typeahead with keyboard nav, `/` shortcut |
| `bodymap-svg.js` | P6 | `bodyMap({ view: "front"|"back", counts, onSelect(region) }) → SVGElement` |
| `healing-timeline.js` | P6 | `healingTimeline(injury) → Element` — log-scaled day axis, phase bars, milestones |
| `exercise-program.js` | P6 | `exerciseProgram(injury) → Element` — stage stepper with goals/criteria and exercise cards (uses `renderFigure` from `js/anim/rig.js` for `figure`, with a graceful fallback if the rig is unavailable) |
| `special-tests.js` | P6 | `specialTestsTable(tests, refs) → Element` — Sn/Sp/LR with evidence links |
| `evidence-badge.js` | P4 | `evidenceBadge(evidence, recommendation) → Element` |
| `references.js` | P4 | `referenceList(references) → Element` — numbered list with PubMed (`https://pubmed.ncbi.nlm.nih.gov/<pmid>/`) and DOI (`https://doi.org/<doi>`) links |

## Platform per-agent ownership
| Agent | Files |
|---|---|
| P1 Shell | `index.html`, `css/base.css`, `css/layout.css`, `css/components/header.css`, `css/components/footer.css`, `js/app.js`, `js/router.js`, `js/store.js`, `js/util/dom.js`, `js/views/notfound.js`, `assets/*` |
| P2 Home & learning | `js/views/home.js`, `js/views/about.js`, `js/views/healing.js`, `css/components/home.css`, `css/components/healing.css`, `css/components/about.css` |
| P3 Library | `js/views/library.js`, `js/components/injury-card.js`, `css/components/library.css`, `css/components/card.css` |
| P4 Injury page | `js/views/injury.js`, `js/components/evidence-badge.js`, `js/components/references.js`, `css/components/injury.css` |
| P5 Search & glossary | `js/search/engine.js`, `js/components/searchbox.js`, `js/views/search.js`, `js/views/glossary.js`, `data/glossary.json`, `css/components/search.css`, `css/components/glossary.css` |
| P6 Navigation & clinical widgets | `js/components/bodymap-svg.js`, `js/views/bodymap.js`, `js/views/compare.js`, `js/views/saved.js`, `js/components/healing-timeline.js`, `js/components/exercise-program.js`, `js/components/special-tests.js`, `css/components/bodymap.css`, `css/components/compare.css`, `css/components/widgets.css` |

## Animation per-agent ownership
| Agent | Files |
|---|---|
| A1 Player & integration | `js/anim/index.js`, `player.js`, `camera.js`, `timeline.js`, `css/components/player.css`, `tools/anim-preview.html` |
| A2 Figure rig & MOI | `js/anim/rig.js`, `poses.js`, `props.js`, `moi.js`, `tools/rig-preview.html`, `tools/render-rig.mjs` |
| A3 Scenes: knee, thigh, hip | `js/anim/scenes/{knee-anterior,knee-sagittal,patellofemoral-axial,thigh-posterior,thigh-anterior,hip-anterior,hip-lateral,hip-posterior}.js` |
| A4 Scenes: leg, ankle, foot | `js/anim/scenes/{lower-leg-posterior,lower-leg-anterior,ankle-lateral,ankle-anterior,ankle-medial,foot-dorsal,foot-sagittal}.js` |
| A5 Scenes: upper limb | `js/anim/scenes/{shoulder-anterior,shoulder-girdle,elbow-lateral,elbow-medial,wrist-hand,finger-lateral,thumb}.js` |
| A6 Scenes: spine, trunk, head | `js/anim/scenes/{lumbar-sagittal,lumbar-axial,cervical-sagittal,neck-plexus,thorax-ribs,pelvis-anterior,head-brain,inner-ear,tmj}.js` |
| A7 Micro framework + tissues I | `js/anim/micro/index.js`, `micro/{ligament,tendon,tendon-continuum,muscle,bone-fracture,bone-stress,cartilage,meniscus,fascia}.js`, `tools/micro-preview.html`, `tools/render-micro.mjs` |
| A9 Micro tissues II | `js/anim/micro/{nerve,disc,bursa,capsule,brain,physis,compartment,vestibular}.js` |
| A8 Close-up renderer | `js/anim/closeup.js`, `js/anim/closeup-fx.js`, `js/anim/scenes/{long-bone,muscle-tendon-unit,peripheral-nerve}.js`, `tools/closeup-preview.html`, `tools/render-closeup.mjs` |

## Engineering rules (all code)
- Vanilla ES2022 modules, no build step, no external runtime libraries, no CDN scripts. Fonts come from Google Fonts only (linked in `index.html`).
- Relative URLs everywhere. No `window.print()`, `alert()`, `confirm()`, `prompt()`, iframes or service workers.
- Colours from `css/tokens.css` variables only; components must look right in light AND dark (`[data-theme]` + `prefers-color-scheme`). The animation stage is a fixed dark lightbox in both themes.
- Responsive from 360 px to 1600 px; the page body never scrolls horizontally (tables/diagrams scroll inside their own `overflow-x:auto` box). Side gutter `padding-inline: max(16px, env(safe-area-inset-left/right))`.
- Accessibility: semantic landmarks, one `<h1>` per view, labelled controls, visible focus (`--focus-ring`), keyboard operable everything, `aria-live` for search results and captions, colour never the only signal, `prefers-reduced-motion` respected.
- Escape all content text (`esc`/`formatText`) — content is data, never trusted HTML.
- Performance: the home and library load only `data/index.json`; injury JSON loads on demand. Keep JS per module small; lazy-import heavy modules (`js/anim/*`) only on the injury page.
- Validate visually: `node tools/screenshot.mjs <route> [--width 390] [--dark] [--full]` writes a PNG to `tools/output/` and prints console errors — open the PNG with the Read tool and iterate.
