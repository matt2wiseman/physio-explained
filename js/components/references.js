// Reference list — numbered Vancouver citations with PubMed / DOI links.
// OWNER: P4. Self-contained (no imports) so any view can use it safely.
//   referenceList(injury.references)                         → <ol class="ref-list">
//   referenceList(refs, { idPrefix: "ref-", backlinks })      → with "back to first citation" links
// Each item gets id `${idPrefix}${ref.id}` (default "ref-r1") so citation markers can jump to it.

export const REF_TYPE_LABELS = {
  "clinical-practice-guideline": "Clinical practice guideline",
  "consensus-statement": "Consensus statement",
  "systematic-review": "Systematic review",
  "meta-analysis": "Meta-analysis",
  "rct": "Randomised controlled trial",
  "cohort": "Cohort study",
  "case-control": "Case–control study",
  "cross-sectional": "Cross-sectional study",
  "diagnostic-accuracy": "Diagnostic accuracy study",
  "biomechanical": "Biomechanical study",
  "basic-science": "Basic science",
  "narrative-review": "Narrative review",
  "textbook": "Textbook",
  "other": "Other"
};

/** Rough evidence tier used only for a subtle visual grouping (never the only signal — the label is shown). */
const TIER = {
  "clinical-practice-guideline": "synth", "consensus-statement": "synth",
  "systematic-review": "synth", "meta-analysis": "synth",
  "rct": "primary", "cohort": "primary", "case-control": "primary", "cross-sectional": "primary", "diagnostic-accuracy": "primary",
  "biomechanical": "mech", "basic-science": "mech",
  "narrative-review": "other", "textbook": "other", "other": "other"
};

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

function extLink(href, text, label) {
  const a = el("a", "ref-list__link", text);
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  if (label) a.setAttribute("aria-label", label);
  const ext = el("span", "ref-list__ext", "↗");
  ext.setAttribute("aria-hidden", "true");
  a.append(ext);
  return a;
}

export function pubmedUrl(pmid) {
  const p = String(pmid || "").trim();
  return /^\d{1,9}$/.test(p) ? `https://pubmed.ncbi.nlm.nih.gov/${p}/` : null;
}

export function doiUrl(doi) {
  const d = String(doi || "").trim().replace(/^https?:\/\/(dx\.)?doi\.org\//i, "").replace(/^doi:\s*/i, "");
  if (!/^10\.\S+\/\S+$/.test(d)) return null;
  return "https://doi.org/" + d.split("/").map(encodeURIComponent).join("/");
}

function safeUrl(u) {
  try {
    const url = new URL(String(u));
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch { return null; }
}

/**
 * @param {Array<{id:string,citation:string,pmid?:string,doi?:string,url?:string,type?:string,year?:number}>} references
 * @param {{ idPrefix?: string, backlinks?: Map<string,{href:string,label?:string,onClick?:Function}>|Object }} [opts]
 * @returns {HTMLOListElement}
 */
export function referenceList(references, opts = {}) {
  const prefix = opts.idPrefix ?? "ref-";
  const back = opts.backlinks instanceof Map ? opts.backlinks : new Map(Object.entries(opts.backlinks || {}));
  const ol = el("ol", "ref-list");
  const list = Array.isArray(references) ? references : [];
  list.forEach((ref, i) => {
    if (!ref || typeof ref !== "object") return;
    const li = el("li", "ref-list__item");
    if (ref.id) li.id = prefix + String(ref.id).replace(/[^a-zA-Z0-9_-]/g, "");
    li.dataset.tier = TIER[ref.type] || "other";

    const n = el("span", "ref-list__n", String(i + 1));
    n.setAttribute("aria-hidden", "true");
    li.append(n);

    const body = el("div", "ref-list__body");
    body.append(el("p", "ref-list__cite", String(ref.citation || "Citation unavailable")));

    const meta = el("p", "ref-list__meta");
    if (ref.type) meta.append(el("span", "ref-list__type", REF_TYPE_LABELS[ref.type] || String(ref.type)));
    if (ref.year) meta.append(el("span", "ref-list__year", String(ref.year)));
    const pm = pubmedUrl(ref.pmid);
    if (pm) meta.append(extLink(pm, "PubMed", `PubMed record ${ref.pmid} (opens in a new tab)`));
    const doi = doiUrl(ref.doi);
    if (doi) meta.append(extLink(doi, "DOI", `DOI ${ref.doi} (opens in a new tab)`));
    const url = !pm && !doi && ref.url ? safeUrl(ref.url) : null;
    if (url) meta.append(extLink(url, "Source", "Source (opens in a new tab)"));
    const b = ref.id ? back.get(String(ref.id)) : null;
    if (b && b.href) {
      const a = el("a", "ref-list__back", "↑ First cited");
      a.href = b.href;
      a.setAttribute("aria-label", `Back to first citation of reference ${i + 1}${b.label ? " in " + b.label : ""}`);
      if (typeof b.onClick === "function") a.addEventListener("click", b.onClick);
      meta.append(a);
    }
    body.append(meta);
    li.append(body);
    ol.append(li);
  });
  return ol;
}

export default referenceList;
