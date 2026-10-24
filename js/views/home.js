// Home view — purpose-first landing page. OWNER: P2.
//
// Complete at rest (no viewport-height hero). Static parts render immediately; everything that depends on
// data/index.json (counts, featured, recently viewed) fills in once the index arrives and degrades gracefully:
// 1 injury or 170, no body-map component, no injury-card component, no recent history, failed fetch.
//
// Exports: render / destroy / title, plus phaseGlyph(kind) which the About page re-uses for the animation strip.

import { h, icon, REGION_LABELS, plural } from "../util/dom.js";

/* ------------------------------------------------------------------ constants */
const AREAS = [
  { id: "lower-limb", label: "Lower limb", link: true, regions: ["hip-groin", "thigh", "knee", "lower-leg", "ankle", "foot"] },
  { id: "upper-limb", label: "Upper limb", link: true, regions: ["shoulder", "arm", "elbow", "wrist-hand"] },
  { id: "spine-trunk", label: "Spine & trunk", link: false, regions: ["cervical", "thoracic", "lumbar", "pelvis", "chest-abdomen"] },
  { id: "head-general", label: "Head & general", link: false, regions: ["head-face", "general"] }
];
const ALL_REGIONS = AREAS.flatMap((a) => a.regions);

const STEPS = [
  { id: "mechanism", title: "Mechanism", text: "How the injury happens: forces, joint positions and timing, shown as an animated sequence that zooms from the whole body to the cell.", inside: ["Step-by-step sequence", "Animated explainer", "Contact and non-contact variants"] },
  { id: "pathophysiology", title: "Pathophysiology", text: "What fails, and what the body does next, from the injured structure to muscle, cells and wider systems.", inside: ["Structures injured", "Muscle inhibition and guarding", "Cellular phases"] },
  { id: "timeframes", title: "Timeframes", text: "How long biology takes, on a log-scaled healing timeline with milestones, so expectations match the tissue.", inside: ["Healing phases in days", "Milestones", "Return-to-sport range"] },
  { id: "assessment", title: "Assessment", text: "What to ask, see and test. Test accuracy is quoted only where a cited source supplies it.", inside: ["Special tests with Sn / Sp", "Clinical rules and outcome measures", "Imaging: when and why"] },
  { id: "management", title: "Management", text: "Medical and physiotherapy options, each labelled with its evidence level and recommendation, including what not to do.", inside: ["Evidence level per treatment", "Medical versus physio", "Patient education"] },
  { id: "rehab", title: "Staged rehab", text: "Criteria-based stages with goals, precautions, exercises with dosage and the tests that let a patient progress.", inside: ["Goals and precautions", "Exercises with dosage", "Progression criteria"] }
];

// Typical durations (seconds) from docs/ANIMATION_DSL.md, used only for the film-strip captions.
const PHASES = [
  { kind: "moi", label: "Mechanism", note: "4–7 s" },
  { kind: "zoom", label: "Zoom", note: "1–2 s" },
  { kind: "closeup", label: "Close-up", note: "6–10 s" },
  { kind: "micro", label: "Cellular", note: "6–10 s" }
];

// Mini healing timeline (days, log scale). Mirrors a subset of the Healing science page.
const MINI_ROWS = [
  { label: "Ligament", segs: [[1, 5, "i"], [5, 42, "p"], [42, 365, "r"]] },
  { label: "Muscle", segs: [[1, 5, "i"], [5, 21, "p"], [21, 90, "r"]] },
  { label: "Bone (fracture)", segs: [[1, 7, "i"], [7, 84, "p"], [84, 730, "r"]] }
];
const LOG_MAX = Math.log(730);

let cleanups = [];
export function destroy() {
  for (const fn of cleanups.splice(0)) { try { fn(); } catch { /* ignore */ } }
}
export const title = () => "Home";

/* ------------------------------------------------------------------ small helpers */
const slug = (s) => String(s || "").toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const regionLabel = (r) => REGION_LABELS[r] || r;
const fmtDate = (iso) => { try { return new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }); } catch { return ""; } };

function arrowLink(href, text, cls = "") {
  return h("a", { href, class: ["hm-arrow", cls] }, h("span", null, text), icon("arrow-right", { size: "1em" }));
}

/* ------------------------------------------------------------------ phase glyphs (shared with About) */
const st = (o) => Object.entries(o).map(([k, v]) => `${k}:${v}`).join(";");

/** Decorative 160×100 glyph for one animation phase, drawn with the anatomy / stage tokens. */
export function phaseGlyph(kind) {
  const svg = h("svg", { viewBox: "0 0 160 100", class: "pg", "aria-hidden": "true", focusable: "false", preserveAspectRatio: "xMidYMid meet" });
  const add = (...kids) => kids.forEach((k) => svg.append(k));
  const line = (x1, y1, x2, y2, o) => h("line", { x1, y1, x2, y2, style: st(o), "stroke-linecap": "round" });
  if (kind === "moi") {
    add(
      line(8, 90, 152, 90, { stroke: "var(--stage-grid)", "stroke-width": 2 }),
      line(72, 16, 82, 52, { stroke: "var(--fig-kit)", "stroke-width": 12 }),
      line(82, 52, 70, 84, { stroke: "var(--fig-kit-far)", "stroke-width": 10 }),
      line(68, 86, 88, 86, { stroke: "var(--fig-skin)", "stroke-width": 5 }),
      h("circle", { cx: 72, cy: 16, r: 7, style: st({ fill: "var(--fig-skin)" }) }),
      h("circle", { cx: 82, cy: 52, r: 11, fill: "none", "stroke-dasharray": "3 3", style: st({ stroke: "var(--fx-injury)", "stroke-width": 2 }) }),
      line(124, 33, 98, 47, { stroke: "var(--fx-force)", "stroke-width": 2.5 }),
      h("polygon", { points: "96,48 105.8,47.3 102,40.3", style: st({ fill: "var(--fx-force)" }) })
    );
  } else if (kind === "zoom") {
    const br = (d) => h("path", { d, fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", style: st({ stroke: "var(--stage-ink-2)", "stroke-width": 2 }) });
    add(
      br("M14 24V12h12"), br("M146 24V12h-12"), br("M14 76v12h12"), br("M146 76v12h-12"),
      h("circle", { cx: 80, cy: 50, r: 31, style: st({ fill: "var(--stage-bg-2)", stroke: "var(--stage-accent)", "stroke-width": 2 }) }),
      line(69, 33, 88, 67, { stroke: "var(--anat-bone-edge)", "stroke-width": 15 }),
      line(69, 33, 88, 67, { stroke: "var(--anat-bone)", "stroke-width": 12 }),
      h("circle", { cx: 79, cy: 50, r: 5.5, style: st({ fill: "var(--fx-injury)", opacity: 0.9 }) })
    );
  } else if (kind === "closeup") {
    add(
      h("path", { d: "M44 8H116V22Q116 40 98 40H62Q44 40 44 22Z", style: st({ fill: "var(--anat-bone)", stroke: "var(--anat-bone-edge)", "stroke-width": 2 }) }),
      h("path", { d: "M46 66H114V84Q114 92 106 92H54Q46 92 46 84Z", style: st({ fill: "var(--anat-bone)", stroke: "var(--anat-bone-edge)", "stroke-width": 2 }) }),
      h("rect", { x: 48, y: 40, width: 64, height: 5, rx: 2, style: st({ fill: "var(--anat-cartilage)" }) }),
      h("rect", { x: 48, y: 61, width: 64, height: 5, rx: 2, style: st({ fill: "var(--anat-cartilage)" }) }),
      line(92, 46, 72, 62, { stroke: "var(--anat-ligament-edge)", "stroke-width": 9 }),
      line(92, 46, 72, 62, { stroke: "var(--anat-ligament)", "stroke-width": 6.5 }),
      line(68, 46, 82, 54, { stroke: "var(--anat-ligament-edge)", "stroke-width": 9 }),
      line(68, 46, 82, 54, { stroke: "var(--anat-ligament)", "stroke-width": 6.5 }),
      h("path", { d: "M80 49l4 3-4 3 4 3", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", style: st({ stroke: "var(--fx-injury)", "stroke-width": 2 }) }),
      h("circle", { cx: 83, cy: 53, r: 11, fill: "none", "stroke-dasharray": "2 3", style: st({ stroke: "var(--fx-injury)", "stroke-width": 1.5 }) })
    );
  } else {
    const wave = (y, x0, x1) => {
      let d = `M${x0} ${y}`;
      for (let x = x0; x < x1; x += 20) d += ` q5 -7 10 0 t10 0`;
      return h("path", { d, fill: "none", "stroke-linecap": "round", style: st({ stroke: "var(--anat-ligament)", "stroke-width": 3, opacity: 0.95 }) });
    };
    add(
      wave(24, 8, 150), wave(38, 8, 68), wave(38, 92, 152), wave(60, 8, 68), wave(60, 92, 152), wave(76, 8, 150),
      h("circle", { cx: 80, cy: 48, r: 5, style: st({ fill: "var(--fx-inflame)" }) }),
      h("circle", { cx: 74, cy: 57, r: 4, style: st({ fill: "var(--fx-inflame)", opacity: 0.8 }) }),
      h("circle", { cx: 86, cy: 41, r: 3.2, style: st({ fill: "var(--fx-inflame)", opacity: 0.8 }) }),
      h("ellipse", { cx: 108, cy: 49, rx: 10, ry: 3.6, transform: "rotate(-18 108 49)", style: st({ fill: "var(--fx-heal)" }) }),
      h("ellipse", { cx: 50, cy: 49, rx: 9, ry: 3.2, transform: "rotate(14 50 49)", style: st({ fill: "var(--fx-heal)", opacity: 0.85 }) })
    );
  }
  return svg;
}

function filmStrip(compact = false) {
  const tiles = PHASES.map((p, i) => h("li", { class: "hm-film__tile" },
    h("div", { class: "hm-film__art" }, phaseGlyph(p.kind)),
    h("p", { class: "hm-film__cap" }, h("span", { class: "hm-film__n" }, String(i + 1)), h("b", null, p.label), compact ? null : h("span", { class: "hm-film__t" }, p.note))));
  return h("ol", { class: ["hm-film", compact && "hm-film--compact"], "aria-label": "The four phases of an injury animation" }, tiles);
}

/* ------------------------------------------------------------------ lede */
function buildLede(ctx) {
  const input = h("input", {
    type: "search", id: "hm-q", class: "hm-search__input", name: "q", autocomplete: "off", spellcheck: "false",
    placeholder: window.innerWidth < 520 ? "Search injuries or tests" : "Search an injury, structure or test: ACL, rotator cuff, Lachman…"
  });
  const form = h("form", {
    class: "hm-search", role: "search", "aria-label": "Search injuries",
    on: {
      submit: (e) => {
        e.preventDefault();
        const s = slug(input.value);
        ctx.router.navigate(s ? `#search.${s}` : "#search");
      }
    }
  },
  h("label", { class: "visually-hidden", for: "hm-q" }, "Search injuries, structures or tests"),
  h("span", { class: "hm-search__icon" }, icon("search", { size: 22 })),
  input,
  h("button", { class: "btn btn--primary btn--lg hm-search__go", type: "submit" }, "Search"));

  const tryRow = h("p", { class: "hm-try", hidden: true });
  const mapSlot = h("div", { class: "hm-map", "aria-label": "Body map" });

  const left = h("div", { class: "hm-lede__main" },
    h("p", { class: "eyebrow hm-eyebrow" }, "Evidence-based injury education for physiotherapists"),
    h("h1", { class: "hm-h1", tabindex: "-1" }, "Every injury, from mechanism to rehab: ", h("span", { class: "hm-h1__em" }, "explained, animated, referenced.")),
    h("p", { class: "lead hm-lede__lead" },
      "See how an injury happens, what changes in the tissue, how long healing takes, how to assess it and how to rehabilitate it, with every claim traced to a verified PubMed reference."),
    form,
    tryRow,
    h("div", { class: "hm-cta cluster" },
      h("a", { class: "btn", href: "#library" }, icon("grid"), "Browse the library"),
      h("a", { class: "btn btn--ghost", href: "#healing" }, icon("activity"), "Tissue healing science")));

  const section = h("section", { class: "hm-lede", "aria-labelledby": "hm-title" }, left, mapSlot);
  left.querySelector("h1").id = "hm-title";
  return { section, mapSlot, tryRow };
}

async function mountMap(slot, counts, ctx) {
  const goto = (r) => { const id = typeof r === "string" ? r : r && (r.region || r.id); if (id) ctx.router.navigate(`#library.${id}`); };
  let mod = null;
  try { mod = await import("../components/bodymap-svg.js"); } catch { /* component not available */ }
  const fn = mod && (mod.bodyMap || mod.default);
  const regionList = () => {
    const withCounts = ALL_REGIONS.filter((r) => counts[r]);
    const shown = (withCounts.length ? withCounts : ALL_REGIONS).slice(0, 8);
    return h("div", { class: "hm-map__fallback" },
      h("p", { class: "eyebrow" }, "Browse by body region"),
      h("ul", { class: "hm-map__chips", role: "list" }, shown.map((r) => h("li", null,
        h("a", { class: "chip", href: `#library.${r}` }, regionLabel(r), counts[r] ? h("span", { class: "chip__count" }, String(counts[r])) : null)))));
  };
  if (typeof fn !== "function") { slot.replaceChildren(regionList()); return; }

  let view = "front";
  const holder = h("div", { class: "hm-map__svg" });
  const draw = () => {
    try {
      const svg = fn({ view, counts, onSelect: goto });
      if (!(svg instanceof Node)) throw new Error("bodyMap did not return a node");
      holder.replaceChildren(svg);
    } catch (e) {
      console.warn("[home] body map failed", e);
      slot.replaceChildren(regionList());
    }
  };
  const toggle = (v, label) => h("button", {
    type: "button", class: "chip", "aria-pressed": String(v === view), "data-view": v,
    on: { click: () => { view = v; draw(); toggles.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.view === view))); } }
  }, label);
  const toggles = [toggle("front", "Front"), toggle("back", "Back")];
  slot.replaceChildren(
    h("div", { class: "hm-map__head" },
      h("p", { class: "eyebrow" }, "Browse by body map"),
      h("div", { class: "cluster cluster--sm", role: "group", "aria-label": "Body map view" }, toggles)),
    holder,
    h("p", { class: "hm-map__cap small muted" }, "Select a region to see its injuries. Numbers show how many are in the library."));
  draw();
}

/* ------------------------------------------------------------------ stats strip */
function statsStrip() {
  const cells = {
    injuries: h("dd", { class: "hm-stat__v num" }, "–"),
    refs: h("dd", { class: "hm-stat__v num" }, "–"),
    anim: h("dd", { class: "hm-stat__v num" }, "–"),
    regions: h("dd", { class: "hm-stat__v num" }, "–")
  };
  const sub = { injuries: h("span", { class: "hm-stat__sub" }) };
  const item = (k, label, extra) => h("div", { class: "hm-stat" }, h("dt", { class: "hm-stat__l" }, label), cells[k], extra || null);
  const el = h("section", { class: "hm-stats", "aria-label": "Library at a glance" },
    h("dl", { class: "hm-stats__grid" },
      item("injuries", "Injuries", sub.injuries),
      item("refs", "Verified references"),
      item("anim", "Animated explainers"),
      item("regions", "Body regions covered")));
  return {
    el,
    fill({ entries, meta }) {
      const n = Number.isFinite(meta.injuries) ? meta.injuries : entries.length;
      cells.injuries.textContent = String(n);
      if (Number.isFinite(meta.planned) && meta.planned > n) sub.injuries.textContent = `of ${meta.planned} planned`;
      const refTotal = Number.isFinite(meta.references) ? meta.references : entries.reduce((a, e) => a + (e.refCount || 0), 0);
      cells.refs.textContent = String(refTotal);
      cells.anim.textContent = String(entries.filter((e) => e.hasAnimation).length);
      cells.regions.textContent = `${new Set(entries.map((e) => e.region)).size} of ${ALL_REGIONS.length}`;
    }
  };
}

/* ------------------------------------------------------------------ regions */
function buildRegions(counts) {
  const cols = AREAS.map((a) => {
    const total = a.regions.reduce((s, r) => s + (counts[r] || 0), 0);
    const head = a.link
      ? h("a", { class: "hm-area__name", href: `#library.${a.id}` }, a.label)
      : h("span", { class: "hm-area__name" }, a.label);
    return h("div", { class: "hm-area" },
      h("div", { class: "hm-area__head" }, head, h("span", { class: "hm-area__total num", "aria-label": plural(total, "injury", "injuries") }, String(total))),
      h("ul", { class: "hm-area__list", role: "list" }, a.regions.map((r) => {
        const n = counts[r] || 0;
        return h("li", null, h("a", { class: ["hm-region", !n && "is-empty"], href: `#library.${r}`, "aria-label": `${regionLabel(r)}: ${plural(n, "injury", "injuries")}` },
          h("span", { class: "hm-region__n" }, regionLabel(r)), h("span", { class: "hm-region__c num" }, String(n))));
      })));
  });
  return h("section", { class: "hm-section", "aria-labelledby": "hm-regions-h" },
    h("div", { class: "hm-section__head" },
      h("h2", { id: "hm-regions-h" }, "Browse by body region"),
      arrowLink("#library", "All injuries")),
    h("div", { class: "hm-areas" }, cols));
}

/* ------------------------------------------------------------------ featured + recent */
function pickFeatured(entries) {
  const score = (e) => (e.hasAnimation ? 1000 : 0) + (e.refCount || 0);
  return [...entries].sort((a, b) => score(b) - score(a) || String(a.name).localeCompare(String(b.name))).slice(0, 4);
}

function factList(e, labels = ["Typical recovery", "Key test", "Peak age"]) {
  const facts = (e.keyFacts || []).filter((f) => labels.includes(f.label)).sort((a, b) => labels.indexOf(a.label) - labels.indexOf(b.label));
  const pick = facts.length ? facts : (e.keyFacts || []).slice(0, 3);
  if (!pick.length) return null;
  return h("dl", { class: "hm-facts" }, pick.map((f) => h("div", null, h("dt", null, f.label), h("dd", null, f.value))));
}

function leadFeature(e) {
  const href = `#injury.${e.id}`;
  return h("article", { class: "hm-feature" },
    h("div", { class: "hm-feature__text" },
      h("p", { class: "eyebrow" }, e.hasAnimation ? "Featured · animated explainer" : "Featured injury"),
      h("h3", { class: "hm-feature__title" }, h("a", { href }, e.name)),
      h("p", { class: "hm-feature__sum" }, e.summary),
      factList(e),
      h("div", { class: "cluster" },
        h("a", { class: "btn btn--primary", href }, "Open " + (e.shortName || e.name), icon("arrow-right")),
        e.hasAnimation ? h("a", { class: "btn", href: `${href}.mechanism` }, icon("play"), "Watch how it happens") : null)),
    e.hasAnimation ? h("div", { class: "hm-feature__film" },
      h("p", { class: "eyebrow hm-feature__film-h" }, "What the animation shows"),
      filmStrip()) : null);
}

async function fillFeatured(section, entries) {
  const list = pickFeatured(entries);
  if (!list.length) { section.hidden = true; return; }
  const body = section.querySelector(".hm-feature-body");
  body.replaceChildren(leadFeature(list[0]));
  const rest = list.slice(1);
  if (!rest.length) return;
  let card = null;
  try { const m = await import("../components/injury-card.js"); card = m.injuryCard || m.default; } catch { /* fall back below */ }
  const mk = (e) => {
    if (typeof card === "function") { try { return card(e, { headingLevel: 3 }); } catch { /* fall through */ } }
    return h("article", { class: "hm-mini" },
      h("p", { class: "eyebrow" }, regionLabel(e.region)),
      h("h3", null, h("a", { href: `#injury.${e.id}` }, e.name)),
      h("p", { class: "small muted" }, e.summary));
  };
  body.append(h("div", { class: "hm-feature-more grid grid--3" }, rest.map(mk)));
}

async function fillRecent(section, entries, store) {
  let ids = [];
  try { ids = store.recent.list(); } catch { /* storage unavailable */ }
  const byId = new Map(entries.map((e) => [e.id, e]));
  const items = ids.map((id) => byId.get(id)).filter(Boolean).slice(0, 6);
  if (!items.length) { section.hidden = true; return; }
  let card = null;
  try { const m = await import("../components/injury-card.js"); card = m.injuryCard || m.default; } catch { /* fallback */ }
  const grid = section.querySelector(".hm-recent-grid");
  grid.replaceChildren(...items.map((e) => {
    if (typeof card === "function") { try { return card(e, { compact: true, favourite: false, headingLevel: 3 }); } catch { /* fall through */ } }
    return h("a", { class: "chip", href: `#injury.${e.id}` }, e.shortName || e.name);
  }));
  section.hidden = false;
}

/* ------------------------------------------------------------------ explained sequence */
function buildSequence() {
  const items = STEPS.map((s, i) => h("li", { class: "hm-step", "data-step": s.id },
    h("span", { class: "hm-step__n num", "aria-hidden": "true" }, String(i + 1).padStart(2, "0")),
    h("h3", { class: "hm-step__t" }, s.title),
    h("p", { class: "hm-step__p" }, s.text),
    h("ul", { class: "hm-step__in", role: "list", "aria-label": `Inside ${s.title}` }, s.inside.map((x) => h("li", null, x)))));
  const exampleSlot = h("p", { class: "hm-seq__example" });
  const el = h("section", { class: "hm-section hm-seq", "aria-labelledby": "hm-seq-h" },
    h("div", { class: "hm-section__head" },
      h("h2", { id: "hm-seq-h" }, "How each injury is explained"),
      h("p", { class: "hm-section__sub" }, "Every injury page follows the same order, so you can find what you need and compare injuries like for like.")),
    h("ol", { class: "hm-steps" }, items),
    exampleSlot);
  return {
    el,
    link(e) {
      if (!e) return;
      exampleSlot.replaceChildren("See the sequence on a real page: ", h("a", { href: `#injury.${e.id}` }, e.name), ".");
      el.querySelectorAll(".hm-step").forEach((li) => {
        const t = li.querySelector(".hm-step__t");
        const a = h("a", { href: `#injury.${e.id}.${li.dataset.step}`, "aria-label": `${t.textContent}, example from ${e.shortName || e.name}` }, t.textContent);
        t.replaceChildren(a);
      });
    }
  };
}

/* ------------------------------------------------------------------ healing band */
function miniTimeline() {
  const pos = (d) => (Math.log(Math.max(1, d)) / LOG_MAX) * 100;
  const names = { i: "Inflammatory", p: "Proliferative or repair", r: "Remodelling" };
  const rows = MINI_ROWS.map((r) => h("div", { class: "hm-mini-tl__row" },
    h("span", { class: "hm-mini-tl__label" }, r.label),
    h("span", { class: "hm-mini-tl__track" }, r.segs.map(([a, b, k]) =>
      h("span", { class: `hm-mini-tl__seg hm-mini-tl__seg--${k}`, style: { left: `${pos(a)}%`, width: `${pos(b) - pos(a)}%` }, title: `${names[k]}: day ${a}–${b}` })))));
  const ticks = [[1, "1 d"], [7, "1 wk"], [42, "6 wk"], [180, "6 mo"], [730, "2 y"]];
  return h("figure", { class: "hm-mini-tl" },
    h("div", { class: "hm-mini-tl__rows", "aria-hidden": "true" }, rows,
      h("div", { class: "hm-mini-tl__axis" }, ticks.map(([d, t]) => h("span", { style: { left: `${pos(d)}%` } }, t)))),
    h("figcaption", { class: "small muted" }, "Typical phase timings on a log scale: inflammatory, proliferative or repair, then remodelling. Ranges vary with injury, site, age and health."));
}

function buildHealing() {
  return h("section", { class: "hm-section hm-healing full-bleed", "aria-labelledby": "hm-heal-h" },
    h("div", { class: "hm-healing__grid" },
      h("div", { class: "hm-healing__text" },
        h("p", { class: "eyebrow" }, "Foundations"),
        h("h2", { id: "hm-heal-h" }, "Rehab follows biology"),
        h("p", { class: "lead" }, "A primer on how ligament, tendon, muscle, bone, cartilage, nerve and disc heal, what loading does to each, and what that means for progression. Includes the matching cellular animation for every tissue."),
        h("div", { class: "cluster" },
          h("a", { class: "btn btn--primary", href: "#healing" }, "Open the primer", icon("arrow-right")),
          h("a", { class: "btn btn--ghost", href: "#healing.tendon.tendinopathy" }, "Tendinopathy continuum"))),
      miniTimeline()));
}

/* ------------------------------------------------------------------ method note */
function buildMethod(ctx) {
  return h("section", { class: "hm-section hm-method", "aria-labelledby": "hm-method-h" },
    h("div", { class: "callout callout--warn hm-method__box" },
      h("p", { class: "callout__title" }, icon("shield", { size: "1.1em" }), h("span", { id: "hm-method-h" }, "How this is made")),
      h("p", null,
        "Content is written by AI agents to a fixed clinical schema, and every reference is retrieved from PubMed and checked by an automated QA pass. It is an education aid, not a substitute for clinical reasoning: have a qualified clinician review anything before it informs patient care."),
      h("p", null, arrowLink("#about", "Methods, evidence levels and limits"))));
}

/* ------------------------------------------------------------------ render */
export async function render(main, params, ctx) {
  destroy();
  const { store } = ctx;

  const lede = buildLede(ctx);
  const stats = statsStrip();
  const recent = h("section", { class: "hm-section hm-recent", "aria-labelledby": "hm-recent-h", hidden: true },
    h("div", { class: "hm-section__head" },
      h("h2", { id: "hm-recent-h" }, "Pick up where you left off"),
      arrowLink("#saved", "Saved and recent")),
    h("div", { class: "hm-recent-grid grid grid--auto", style: { "--grid-min": "240px" } }));
  const regionsHost = h("div", { class: "hm-regions-host" });
  const featured = h("section", { class: "hm-section hm-featured", "aria-labelledby": "hm-feat-h" },
    h("div", { class: "hm-section__head" },
      h("h2", { id: "hm-feat-h" }, "Featured explainers")),
    h("div", { class: "hm-feature-body stack stack--lg" }));
  const seq = buildSequence();

  const root = h("div", { class: "hm" }, lede.section, stats.el, recent, regionsHost, featured, seq.el, buildHealing(), buildMethod(ctx));
  main.replaceChildren(root);

  // Data-dependent parts
  let entries = [], meta = {}, failed = false;
  try {
    [entries, meta] = await Promise.all([store.index(), store.meta().catch(() => ({}))]);
  } catch (e) {
    failed = true;
    console.warn("[home] could not load the injury index", e);
  }
  if (!root.isConnected) return;

  const counts = {};
  for (const e of entries) counts[e.region] = (counts[e.region] || 0) + 1;

  stats.fill({ entries, meta: meta || {} });
  regionsHost.replaceChildren(buildRegions(counts));
  mountMap(lede.mapSlot, counts, ctx);

  if (failed) {
    const retry = h("a", { href: "#home", on: { click: (ev) => { ev.preventDefault(); if (ctx.router.reload) ctx.router.reload(); else location.reload(); } } }, "try again");
    featured.querySelector(".hm-feature-body").replaceChildren(h("div", { class: "callout callout--warn", role: "alert" },
      h("p", { class: "callout__title" }, "The injury index did not load"),
      h("p", null, "Check your connection and ", retry, ".")));
    return;
  }

  // "Try" chips from real entries
  const tries = [];
  const top = pickFeatured(entries);
  for (const e of top.slice(0, 3)) tries.push(e.shortName || e.name);
  const tests = (top[0] && top[0].keywords && top[0].keywords.tests) || [];
  for (const t of tests.slice(0, 2)) tries.push(t);
  if (tries.length) {
    lede.tryRow.replaceChildren(h("span", { class: "hm-try__l" }, "Try"), ...tries.map((t) => h("a", { class: "chip", href: `#search.${slug(t)}` }, t)));
    lede.tryRow.hidden = false;
  }

  seq.link(top.find((e) => e.hasAnimation) || top[0]);
  await Promise.all([fillFeatured(featured, entries), fillRecent(recent, entries, store)]);

  if (meta && meta.builtAt) {
    const d = fmtDate(meta.builtAt);
    if (d) root.querySelector(".hm-stats").append(h("p", { class: "hm-stats__built small muted" }, `Library data built ${d}.`));
  }
}
