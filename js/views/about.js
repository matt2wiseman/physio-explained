// About & methods view (#about, #about.<section>). OWNER: P2.
//
// What the site is, how content is made (honestly: AI-assisted), evidence-level legend, how to read an injury page,
// how the animations work, disclaimer, data attribution. Section ids double as route tokens (#about.evidence), so the
// router scrolls to them natively. Re-uses evidenceBadge (P4) and phaseGlyph (home view) when available.

import { h, icon, URGENCY_LABELS, URGENCY_DESCRIPTIONS, URGENCY_TONE, EVIDENCE_ORDER, EVIDENCE_LABELS, RECOMMENDATION_LABELS } from "../util/dom.js";

export const title = () => "About and methods";
export function destroy() { /* nothing persistent */ }

const SECTIONS = [
  ["purpose", "What it is"],
  ["method", "How content is made"],
  ["evidence", "Evidence levels"],
  ["reading", "Reading an injury page"],
  ["animations", "How animations work"],
  ["disclaimer", "Disclaimer"],
  ["sources", "Sources and credits"]
];

const EVIDENCE_ROWS = {
  strong: ["Consistent findings from several high-quality studies, or a guideline built on high-certainty evidence.", "Systematic reviews of RCTs, multiple good RCTs, clinical practice guidelines"],
  moderate: ["Good-quality evidence with some inconsistency, imprecision or indirectness.", "At least one good RCT, or consistent lower-quality trials"],
  limited: ["Few or small studies, or weaker designs. A better study could change the conclusion.", "Small RCTs, cohort and case-control studies"],
  "very-limited": ["A single small study, a case series, or evidence from a different population or condition.", "Case series, laboratory or mechanistic data"],
  conflicting: ["Good studies disagree and no reliable direction emerges.", "Discordant trials or meta-analyses"],
  "expert-opinion": ["No direct evidence. Based on consensus, physiology or clinical reasoning.", "Consensus statements, textbooks, clinical experience"]
};
const RECOMMENDATION_ROWS = {
  recommended: "Offer routinely when indicated. On current evidence the benefits clearly outweigh the harms.",
  consider: "Reasonable for selected patients. Discuss the options, decide together and monitor the response.",
  "not-recommended": "Evidence of no benefit or of net harm, or better options exist. Avoid it, or stop if it is not helping."
};

const READING = [
  ["Overview and key facts", "A summary, an urgency label and the numbers clinicians ask first: typical recovery, return to sport, key test, imaging."],
  ["Mechanism", "The step-by-step sequence of the injury, with the animated explainer beside it. Variants (contact, overuse and so on) are listed separately."],
  ["Pathophysiology", "Structure, then muscle response, then cells, then wider body systems. The cellular phases match the final animation phase."],
  ["Timeframes", "Healing phases on a log-scaled day axis with milestones. Ranges are typical; progression should follow criteria, not the calendar."],
  ["Assessment", "History prompts, observation, tests and outcome measures. Sensitivity, specificity and likelihood ratios appear only when a cited source reports them."],
  ["Differentials and red flags", "What else it could be and the findings that mean medical review is needed, with what to do about each."],
  ["Management", "Medical and physiotherapy options, each with an evidence level and a recommendation. Interventions that do not work are listed on purpose."],
  ["Rehabilitation", "Staged and criteria-based: goals, precautions, exercises with dosage and the objective tests that unlock the next stage."]
];

const PHASE_TEXT = [
  { kind: "moi", name: "Mechanism", time: "4–7 s", text: "A whole-body figure performs the movement that causes the injury, with force arrows and slow motion at the critical instant." },
  { kind: "zoom", name: "Zoom", time: "1–2 s", text: "The camera pushes in on the injured region and cross-fades into the close-up." },
  { kind: "closeup", name: "Close-up", time: "6–10 s", text: "An anatomical illustration names the structures and shows what fails: stretch, tear, fracture, herniation, compression or bleeding." },
  { kind: "micro", name: "Cellular", time: "6–10 s", text: "A microscopic view of how the tissue fails and then heals: inflammation, proliferation and remodelling, or the tissue's own process." }
];

/* ------------------------------------------------------------------ helpers */
function fallbackBadge(evidence, rec) {
  const parts = [];
  if (rec) parts.push(RECOMMENDATION_LABELS[rec] || rec);
  if (evidence) parts.push(EVIDENCE_LABELS[evidence] || evidence);
  return h("span", { class: "badge badge--outline" }, parts.join(" · "));
}

const fmtDate = (iso) => { try { return new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" }); } catch { return ""; } };

function section(id, heading, ...kids) {
  return h("section", { class: "ab-sec", id, "aria-labelledby": `${id}-h` }, h("h2", { id: `${id}-h` }, heading), ...kids);
}

/* ------------------------------------------------------------------ render */
export async function render(main, params, ctx) {
  const { store } = ctx;
  let meta = {}, entries = [];
  try { [entries, meta] = await Promise.all([store.index().catch(() => []), store.meta().catch(() => ({}))]); } catch { /* optional */ }

  let badge = fallbackBadge;
  try { const m = await import("../components/evidence-badge.js"); if (typeof m.evidenceBadge === "function") badge = m.evidenceBadge; } catch { /* fallback */ }
  let phaseGlyph = null, filmStripEl = null;
  try { const m = await import("./home.js"); phaseGlyph = m.phaseGlyph; } catch { /* decorative only */ }

  const exampleId = (entries.find((e) => e.hasAnimation) || entries[0] || {}).id;
  const exampleName = (entries.find((e) => e.id === exampleId) || {}).shortName || (entries.find((e) => e.id === exampleId) || {}).name;

  /* purpose */
  const purpose = section("purpose", "What it is, and who it is for",
    h("div", { class: "prose" },
      h("p", null, "Physio Explained is a free clinical reference that explains musculoskeletal and sports injuries the way a physiotherapist reasons about them. For each injury it covers how it happens, what changes in the tissue, how long healing takes, how to assess it, what the evidence supports and how to rehabilitate it. Each page includes an animated explainer that runs from the moment of injury down to the cells.")),
    h("div", { class: "ab-who" },
      h("div", null,
        h("h3", null, "Built for"),
        h("ul", { class: "ab-list" },
          h("li", null, h("b", null, "Practising physiotherapists"), " who want a consistent, referenced overview of an injury before or after a consultation."),
          h("li", null, h("b", null, "Students and educators"), " who need mechanism and pathophysiology shown, not just listed."),
          h("li", null, h("b", null, "Clinicians explaining an injury"), " to colleagues or patients. Pages are written for professionals, not as patient handouts."))),
      h("div", null,
        h("h3", null, "Not for"),
        h("ul", { class: "ab-list ab-list--not" },
          h("li", null, "Diagnosing or treating an individual. It does not replace clinical reasoning, local guidelines or specialist advice."),
          h("li", null, "Self-diagnosis or self-treatment by the public."),
          h("li", null, "Anything urgent. Use the red-flag lists and refer. In an emergency call your local emergency number.")))));

  /* method */
  const live = [];
  if (Number.isFinite(meta.injuries)) live.push(`${meta.injuries}${Number.isFinite(meta.planned) ? ` of ${meta.planned} planned` : ""} injuries published`);
  if (Number.isFinite(meta.references)) live.push(`${meta.references} verified references`);
  const built = meta.builtAt ? fmtDate(meta.builtAt) : "";
  const steps = [
    ["One structured record per injury", "Every injury is a single structured record with the same fields: mechanism, pathophysiology, timeframes, assessment, management, rehabilitation stages, references and animation. The fixed schema is why every page has the same order, and why a gap is visible rather than hidden."],
    ["Written by AI agents, region by region", "About 45 AI agents (Claude) built the site in parallel. Separate teams wrote lower-limb, upper-limb and spine, trunk, head and general content, and others built the platform and the animation engine. Each writer works only on the injuries assigned to it."],
    ["References are retrieved, not remembered", "Authors search PubMed with database tools and copy the authors, title, journal, year, PMID and DOI from the record returned. A source that cannot be found and verified is not cited. Every reference links to its PubMed record and its DOI."],
    ["Automated checks on every build", "A build step validates each record against the schema. Test-accuracy figures must carry a reference, every cited reference must exist, unused references are flagged, and animation parts must exist in the animation catalogue. Records that fail are left out of the site."],
    ["Evidence and QA review", "A separate QA team of agents checks each injury against its sources, for internal consistency, for anatomical accuracy in the animation and for clinical safety (red flags and precautions), and may edit content in that pass. Each record carries a last-reviewed date."]
  ];
  const method = section("method", "How the content is made",
    h("ol", { class: "ab-steps" }, steps.map(([t, p], i) => h("li", null,
      h("span", { class: "ab-steps__n num", "aria-hidden": "true" }, String(i + 1)),
      h("div", null, h("h3", null, t), h("p", null, p))))),
    h("div", { class: "callout callout--warn ab-callout" },
      h("p", { class: "callout__title" }, icon("warning", { size: "1.1em" }), "What this does not include"),
      h("p", null, "None of this replaces review by a qualified clinician. Unless a page says otherwise, assume it has not been independently peer reviewed by clinicians. AI-written content can contain errors even when its references are real, so check claims that matter against the cited source.")),
    live.length ? h("p", { class: "ab-live small muted" }, h("span", { class: "mono" }, live.join(" · ")), built ? `, data built ${built}.` : ".") : null);

  /* evidence */
  const evRows = EVIDENCE_ORDER.map((k) => h("tr", null,
    h("th", { scope: "row" }, badge(k)),
    h("td", null, (EVIDENCE_ROWS[k] || [""])[0]),
    h("td", { class: "ab-t-basis" }, (EVIDENCE_ROWS[k] || ["", ""])[1])));
  const recRows = Object.keys(RECOMMENDATION_ROWS).map((k) => h("tr", null,
    h("th", { scope: "row" }, badge(undefined, k)),
    h("td", null, RECOMMENDATION_ROWS[k])));
  const evidence = section("evidence", "Evidence levels and recommendations",
    h("div", { class: "prose" },
      h("p", null, "Each treatment in the Management section carries two labels. The ", h("b", null, "evidence level"), " describes how strong the supporting research is. The ", h("b", null, "recommendation"), " says what to do with it. Both are assigned by the content authors from the cited references. They are a transparent summary, not a formal GRADE appraisal.")),
    h("div", { class: "table-wrap ab-table" },
      h("table", null,
        h("caption", { class: "visually-hidden" }, "Evidence levels"),
        h("thead", null, h("tr", null, h("th", { scope: "col" }, "Evidence level"), h("th", { scope: "col" }, "What it means"), h("th", { scope: "col" }, "Typical basis"))),
        h("tbody", null, evRows))),
    h("div", { class: "table-wrap ab-table" },
      h("table", null,
        h("caption", { class: "visually-hidden" }, "Recommendations"),
        h("thead", null, h("tr", null, h("th", { scope: "col" }, "Recommendation"), h("th", { scope: "col" }, "What it means"))),
        h("tbody", null, recRows))),
    h("div", { class: "prose ab-after" },
      h("p", null, "When sourcing, authors prefer clinical practice guidelines and consensus statements, then systematic reviews and meta-analyses, then randomised trials, then cohort studies, then mechanistic work, and favour recent high-quality evidence alongside landmark papers. Statistics such as incidence or test accuracy appear only when a cited source reports them, and weak or conflicting evidence is labelled as such.")));

  /* reading */
  const cite = h("sup", { class: "cite" }, h("span", { class: "cite__ref" }, "3"));
  const reading = section("reading", "How to read an injury page",
    h("dl", { class: "ab-read" }, READING.map(([t, p]) => h("div", null, h("dt", null, t), h("dd", null, p)))),
    h("h3", { class: "ab-h3" }, "Markers you will see"),
    h("div", { class: "ab-markers" },
      h("div", null,
        h("p", { class: "ab-markers__k" }, "Citations"),
        h("p", null, "A superscript number", cite, " is a reference. Hover or tap it to see the citation, and follow it to the list with PubMed and DOI links.")),
      h("div", null,
        h("p", { class: "ab-markers__k" }, "Evidence badges"),
        h("p", { class: "ab-markers__ex" }, badge("moderate", "recommended", {}), badge("limited", "consider", {}), badge("conflicting", "not-recommended", {})),
        h("p", null, "The recommendation comes first, then the evidence level and a small strength meter.")),
      h("div", null,
        h("p", { class: "ab-markers__k" }, "Urgency"),
        h("ul", { class: "ab-urgency", role: "list" }, ["routine", "urgent", "emergency"].map((u) => h("li", null,
          h("span", { class: `badge badge--${URGENCY_TONE[u]}` }, URGENCY_LABELS[u]), h("span", null, URGENCY_DESCRIPTIONS[u])))))),
    h("p", { class: "ab-note" }, h("b", null, "Criteria beat dates. "), "Healing times and return-to-sport ranges are typical values. A patient moves to the next rehabilitation stage when the stated criteria are met, not when the calendar says so."));

  /* animations */
  const film = phaseGlyph
    ? h("ol", { class: "hm-film ab-film", "aria-label": "The four phases of an injury animation" }, PHASE_TEXT.map((p, i) => h("li", { class: "hm-film__tile" },
      h("div", { class: "hm-film__art" }, phaseGlyph(p.kind)),
      h("p", { class: "hm-film__cap" }, h("span", { class: "hm-film__n" }, String(i + 1)), h("b", null, p.name), h("span", { class: "hm-film__t" }, p.time)))))
    : null;
  filmStripEl = film;
  const animations = section("animations", "How the animations work",
    h("div", { class: "prose" }, h("p", null, "Each injury has an explainer of roughly 15 to 35 seconds. It moves through four phases, from the whole body down to the cell, and every phase has one-sentence captions.")),
    filmStripEl,
    h("ol", { class: "ab-phases" }, PHASE_TEXT.map((p) => h("li", null, h("h3", null, p.name, h("span", { class: "ab-phases__t mono" }, p.time)), h("p", null, p.text)))),
    h("div", { class: "prose ab-after" },
      h("p", null, "The player lets you play and pause, scrub between chapters, slow the action down, show captions and switch to a step-by-step storyboard. If your device is set to reduce motion, animations start paused."),
      h("p", null, h("b", null, "Treat them as schematic."), " They are teaching illustrations drawn from a fixed catalogue of anatomical structures. They are not to scale, are not patient imaging and simplify anatomy and timing. The text and references carry the clinical facts.")),
    exampleId ? h("p", { class: "ab-after" }, h("a", { class: "btn ab-example", href: `#injury.${exampleId}.mechanism` }, icon("play"), `Watch an example: ${exampleName}`)) : null);

  /* disclaimer */
  const disclaimer = section("disclaimer", "Disclaimer",
    h("div", { class: "callout callout--danger ab-callout" },
      h("p", { class: "callout__title" }, icon("danger", { size: "1.1em" }), "Educational use only"),
      h("ul", { class: "ab-list" },
        h("li", null, "This site is for physiotherapists, other qualified health professionals and students. It is not medical advice."),
        h("li", null, "Content is AI-generated and AI-reviewed. Errors, omissions and out-of-date statements are possible even where references are verified. Check primary sources and current guidelines."),
        h("li", null, "It does not replace clinical judgement, local protocols or specialist opinion. Screen for red flags and refer when indicated."),
        h("li", null, "It is provided as is, without warranty of accuracy, completeness or fitness for a particular purpose. You are responsible for how you use it."))),
    h("p", { class: "ab-note" }, h("b", null, "Your data. "), "Favourites and recently viewed injuries are stored only in your browser (local storage). They are not sent anywhere."));

  /* sources */
  const sources = section("sources", "Data sources and credits",
    h("div", { class: "ab-src" },
      h("div", null,
        h("p", { class: "ab-src__lead" }, "Reference metadata retrieved from PubMed (NLM)."),
        h("p", null, "Citations, PMIDs and DOIs come from PubMed, a service of the US National Library of Medicine at the National Institutes of Health. Each reference links to ",
          h("a", { href: "https://pubmed.ncbi.nlm.nih.gov/", target: "_blank", rel: "noopener noreferrer" }, "its PubMed record"), " and, where one exists, to the publisher through its DOI.")),
      h("div", null,
        h("p", { class: "ab-src__k" }, "Type"),
        h("p", null, "Archivo, Public Sans and IBM Plex Mono, served by Google Fonts under the SIL Open Font License.")),
      h("div", null,
        h("p", { class: "ab-src__k" }, "Code"),
        h("p", null, "Plain HTML, CSS and JavaScript with no frameworks. Animations are drawn as SVG from data. The page carries no advertising or analytics scripts."))));

  /* TOC */
  const toc = h("nav", { class: "ab-toc", "aria-label": "On this page" },
    h("p", { class: "eyebrow ab-toc__h" }, "On this page"),
    h("ul", { role: "list" }, SECTIONS.map(([id, label]) => h("li", null, h("a", { href: `#about.${id}` }, label)))));

  const head = h("header", { class: "ab-head" },
    h("p", { class: "eyebrow" }, "About"),
    h("h1", { tabindex: "-1" }, "About and methods"),
    h("p", { class: "lead" }, "What Physio Explained is, how its content is made and checked, and what it can and cannot be used for."),
    h("div", { class: "callout callout--warn ab-callout" },
      h("p", { class: "callout__title" }, icon("warning", { size: "1.1em" }), "AI-assisted content"),
      h("p", null, "Pages are written and reviewed by AI agents, with references retrieved from PubMed. Treat each page as a starting point, and have a qualified clinician review it before it informs patient care. ", h("a", { href: "#about.disclaimer" }, "Read the full disclaimer"), ".")));

  main.replaceChildren(h("div", { class: "ab" }, head,
    h("div", { class: "split split--left ab-layout", style: { "--split-side": "210px" } },
      h("aside", null, h("div", { class: "sticky" }, toc)),
      h("div", { class: "ab-body" }, purpose, method, evidence, reading, animations, disclaimer, sources))));
}
