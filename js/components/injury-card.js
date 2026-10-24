// Injury card — the reusable summary card for one data/index.json entry.
// OWNER: P3.
//
//   injuryCard(entry, { compact, favourite, headingLevel }) → <article class="ic">
//     compact        false  one-line variant for related / recent lists (name, region, urgency, save)
//     favourite      true   include the save-to-favourites toggle (a <button>, never nested in the link)
//     headingLevel   3      1–6, the heading element wrapping the name (use the level below your section heading)
//
// The whole card is clickable through a stretched link on the name (a real <a href="#injury.<id>">), so the
// favourite button is a sibling control, not nested inside the link. All text is set with textContent / Text nodes
// (index data is never trusted as HTML). Styles live in css/components/card.css.
//
// Also exported for the library view: el, cardIcon, labels, keyFact, urgencyBadge, favouriteButton, areaOf.

import * as dom from "../util/dom.js";
import * as storeMod from "../store.js";

const store = storeMod.store ?? storeMod.default ?? storeMod;

/* ------------------------------------------------------------------ tiny DOM helper (self-contained) */
export function el(tag, attrs, ...kids) {
  const n = document.createElement(tag);
  if (attrs) {
    for (const k in attrs) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "class") n.className = v;
      else if (k === "on") for (const ev in v) n.addEventListener(ev, v[ev]);
      else n.setAttribute(k, v === true ? "" : v);
    }
  }
  append(n, kids);
  return n;
}
function append(n, kids) {
  for (const k of kids) {
    if (k == null || k === false) continue;
    if (Array.isArray(k)) append(n, k);
    else n.append(k instanceof Node ? k : String(k));
  }
}

/* ------------------------------------------------------------------ icons (16px, currentColor, decorative) */
const SVGNS = "http://www.w3.org/2000/svg";
const ICONS = {
  // [paths, filled?]
  bookmark: ["M4.5 2.5h7a1 1 0 0 1 1 1v9.9a.35.35 0 0 1-.57.27L8 10.2l-3.93 3.47a.35.35 0 0 1-.57-.27V3.5a1 1 0 0 1 1-1z"],
  alert: ["M8 2.3 14.5 13.5h-13z", "M8 6.6v3.1", "M8 11.5v.1"],
  clock: ["M8 2.2a5.8 5.8 0 1 0 0 11.6A5.8 5.8 0 0 0 8 2.2z", "M8 4.9V8l2.1 1.4"],
  play: ["M5.2 3.4v9.2a.4.4 0 0 0 .6.35l7.3-4.6a.4.4 0 0 0 0-.7L5.8 3.05a.4.4 0 0 0-.6.35z"],
  close: ["M4 4l8 8", "M12 4l-8 8"],
  search: ["M7 2.8a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4z", "M10.2 10.2 13.5 13.5"],
  filter: ["M2.5 4.5h11", "M4.5 8h7", "M6.5 11.5h3"],
  chevron: ["M4 6.2 8 10l4-3.8"],
  grid: ["M2.7 2.7h4.2v4.2H2.7z", "M9.1 2.7h4.2v4.2H9.1z", "M2.7 9.1h4.2v4.2H2.7z", "M9.1 9.1h4.2v4.2H9.1z"],
  list: ["M2.5 4h11", "M2.5 8h11", "M2.5 12h11"],
  check: ["M3.5 8.4 6.6 11.5 12.5 4.8"],
  arrow: ["M3 8h10", "M9 4l4 4-4 4"]
};
const FILLED = new Set(["play"]);
export function cardIcon(name, size = 16) {
  const d = ICONS[name] || [];
  const s = document.createElementNS(SVGNS, "svg");
  s.setAttribute("viewBox", "0 0 16 16");
  s.setAttribute("width", size);
  s.setAttribute("height", size);
  s.setAttribute("aria-hidden", "true");
  s.setAttribute("focusable", "false");
  s.setAttribute("class", `ic-i ic-i--${name}`);
  for (const path of d) {
    const p = document.createElementNS(SVGNS, "path");
    p.setAttribute("d", path);
    if (FILLED.has(name)) p.setAttribute("fill", "currentColor");
    s.append(p);
  }
  return s;
}

/* ------------------------------------------------------------------ labels (dom.js first, local fallback) */
const FB = {
  region: { "hip-groin": "Hip & groin", thigh: "Thigh", knee: "Knee", "lower-leg": "Lower leg", ankle: "Ankle", foot: "Foot", shoulder: "Shoulder", arm: "Arm", elbow: "Elbow", "wrist-hand": "Wrist & hand", cervical: "Neck (cervical)", thoracic: "Thoracic spine", lumbar: "Lower back (lumbar)", pelvis: "Pelvis", "chest-abdomen": "Chest & abdomen", "head-face": "Head & face", general: "General" },
  area: { "lower-limb": "Lower limb", "upper-limb": "Upper limb", spine: "Spine", trunk: "Trunk", head: "Head", general: "General" },
  tissue: { ligament: "Ligament", tendon: "Tendon", muscle: "Muscle", bone: "Bone", cartilage: "Cartilage", meniscus: "Meniscus", labrum: "Labrum", "joint-capsule": "Joint capsule", nerve: "Nerve", bursa: "Bursa", disc: "Disc", fascia: "Fascia", "fat-pad": "Fat pad", physis: "Growth plate", vascular: "Vascular", brain: "Brain", vestibular: "Vestibular", multiple: "Multiple tissues" },
  urgency: { routine: "Routine", urgent: "Urgent", emergency: "Emergency" },
  onset: { acute: "Acute", gradual: "Gradual", "acute-or-gradual": "Acute or gradual" },
  mechanism: { contact: "Contact", "non-contact": "Non-contact", overuse: "Overuse", fall: "Fall", collision: "Collision", degenerative: "Degenerative", insidious: "Insidious onset", traction: "Traction", compression: "Compression" }
};
const pretty = (k) => { const s = String(k ?? "").replace(/[-_]+/g, " ").trim(); return s ? s[0].toUpperCase() + s.slice(1) : ""; };
const pick = (map, fb, k) => (map && map[k]) || fb[k] || pretty(k);
export const labels = {
  region: (k) => pick(dom.REGION_LABELS, FB.region, k),
  area: (k) => pick(dom.BODY_AREA_LABELS, FB.area, k),
  tissue: (k) => pick(dom.TISSUE_LABELS, FB.tissue, k),
  urgency: (k) => pick(dom.URGENCY_LABELS, FB.urgency, k),
  onset: (k) => FB.onset[k] || pretty(k),
  mechanism: (k) => FB.mechanism[k] || pretty(k)
};

const AREA_OF = { "hip-groin": "lower-limb", thigh: "lower-limb", knee: "lower-limb", "lower-leg": "lower-limb", ankle: "lower-limb", foot: "lower-limb", shoulder: "upper-limb", arm: "upper-limb", elbow: "upper-limb", "wrist-hand": "upper-limb", cervical: "spine", thoracic: "spine", lumbar: "spine", pelvis: "trunk", "chest-abdomen": "trunk", "head-face": "head", general: "general" };
export const areaOf = (e) => e.bodyArea || AREA_OF[e.region] || "general";
// Areas that hold a single region would repeat themselves ("Head & face · Head") — show the region alone.
const SINGLE_REGION_AREAS = new Set(["head", "general"]);

/* ------------------------------------------------------------------ small pieces */
/** The fact to show on a card: typical recovery, else return to sport, else the first fact. */
export function keyFact(e) {
  const f = Array.isArray(e.keyFacts) ? e.keyFacts : [];
  return f.find((k) => /^typical recovery/i.test(k.label)) || f.find((k) => /return to sport/i.test(k.label)) || f[0] || null;
}

const URG = {
  emergency: { icon: "alert", tone: "danger", hint: "Emergency: needs same-day emergency medical care" },
  urgent: { icon: "clock", tone: "warn", hint: "Urgent: needs medical review within days" }
};
/** Badge for urgent / emergency entries (icon + text, uses the shared .badge classes); null for routine. */
export function urgencyBadge(urgency, { small = false } = {}) {
  const u = URG[urgency];
  if (!u) return null;
  return el("span", { class: `badge badge--${u.tone} ic-badge${small ? " ic-badge--sm" : ""}`, title: u.hint },
    cardIcon(u.icon, small ? 12 : 14), el("span", null, labels.urgency(urgency)));
}

/* --- favourites: one shared subscription keeps every rendered toggle in step with the store --- */
const favRefs = new Set();
let favSubscribed = false;
const isFav = (id) => { try { return !!store.favourites.has(id); } catch { return false; } };
function setPressed(btn, on) {
  btn.setAttribute("aria-pressed", on ? "true" : "false");
  btn.title = on ? "Remove from favourites" : "Save to favourites";
}
function syncFavourites() {
  for (const ref of favRefs) {
    const b = ref.deref();
    if (!b) favRefs.delete(ref);
    else setPressed(b, isFav(b.dataset.id));
  }
}
function trackFavourite(btn) {
  if (favRefs.size > 800) for (const ref of favRefs) if (!ref.deref()) favRefs.delete(ref);
  favRefs.add(new WeakRef(btn));
  if (!favSubscribed) {
    favSubscribed = true;
    try { store.favourites.onChange(syncFavourites); } catch { /* storage unavailable: toggles still work per click */ }
  }
}
/** The save toggle: <button aria-pressed>, separate from any link. */
export function favouriteButton(e, { className = "" } = {}) {
  const btn = el("button", {
    type: "button",
    class: `ic-fav ${className}`.trim(),
    "data-id": e.id,
    "aria-label": `Save ${e.shortName || e.name} to favourites`,
    on: {
      click(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        try { store.favourites.toggle(e.id); } catch { /* ignore */ }
        setPressed(btn, isFav(e.id));
      }
    }
  }, cardIcon("bookmark", 18));
  setPressed(btn, isFav(e.id));
  trackFavourite(btn);
  return btn;
}

/* ------------------------------------------------------------------ the card */
export function injuryCard(entry, opts = {}) {
  const { compact = false, favourite = true, headingLevel = 3 } = opts;
  const e = entry || {};
  const href = `#injury.${e.id}`;
  const urgency = e.urgency || "routine";
  const area = areaOf(e);
  const regionName = labels.region(e.region);
  const areaName = SINGLE_REGION_AREAS.has(area) ? "" : labels.area(area);
  const hl = `h${Math.min(6, Math.max(1, headingLevel | 0 || 3))}`;

  if (compact) {
    const name = e.shortName || e.name || e.id;
    return el("article", { class: "ic ic--compact", "data-id": e.id, "data-urgency": urgency },
      el("div", { class: "ic-main" },
        el("p", { class: "ic-region" }, el("span", null, regionName)),
        el(hl, { class: "ic-name" }, el("a", { class: "ic-link", href, title: e.name !== name ? e.name : null }, name))),
      urgencyBadge(urgency, { small: true }),
      favourite ? favouriteButton(e) : null);
  }

  const tissues = Array.isArray(e.tissues) ? e.tissues : [];
  const shownTissues = tissues.slice(0, 3);
  const fact = keyFact(e);
  const badge = urgencyBadge(urgency);
  const refs = Number.isFinite(e.refCount) ? e.refCount : null;

  return el("article", { class: "ic", "data-id": e.id, "data-urgency": urgency },
    el("div", { class: "ic-body" },
      el("div", { class: "ic-top" },
        el("p", { class: "ic-region" },
          el("span", null, regionName),
          areaName ? el("span", { class: "ic-area" }, areaName) : null),
        favourite ? favouriteButton(e) : null),
      el(hl, { class: "ic-name" }, el("a", { class: "ic-link", href }, e.name || e.shortName || e.id)),
      e.summary ? el("p", { class: "ic-summary" }, e.summary) : null),
    el("div", { class: "ic-bottom" },
      shownTissues.length
        ? el("ul", { class: "ic-tissues", "aria-label": "Tissues involved" },
            shownTissues.map((t, i) => el("li", { class: i === 0 ? "is-primary" : null }, labels.tissue(t).toLowerCase())),
            tissues.length > 3 ? el("li", { class: "ic-more", title: tissues.slice(3).map((t) => labels.tissue(t).toLowerCase()).join(", ") }, `+${tissues.length - 3}`) : null)
        : null,
      fact ? el("dl", { class: "ic-fact" }, el("dt", null, fact.label), el("dd", null, fact.value)) : null,
      el("div", { class: "ic-foot" },
        badge,
        e.hasAnimation ? el("span", { class: "ic-anim", title: "Includes an animated mechanism-of-injury explainer" }, cardIcon("play", 12), "Animated") : null,
        refs != null ? el("span", { class: "ic-refs", title: `${refs} verified references` }, el("b", null, String(refs)), refs === 1 ? " ref" : " refs") : null)));
}

export default injuryCard;
