// Evidence badge — compact "recommendation + evidence level" marker for a treatment.
// OWNER: P4. Self-contained (no imports) so any view can use it safely.
//   evidenceBadge("moderate", "recommended") → <span class="ev-badge ...">
// Colour is never the only signal: every badge carries text, a shape (meter) and a title.

export const EVIDENCE_LEVELS = {
  "strong":          { label: "Strong evidence",       short: "Strong",        bars: 4 },
  "moderate":        { label: "Moderate evidence",     short: "Moderate",      bars: 3 },
  "limited":         { label: "Limited evidence",      short: "Limited",       bars: 2 },
  "very-limited":    { label: "Very limited evidence", short: "Very limited",  bars: 1 },
  "conflicting":     { label: "Conflicting evidence",  short: "Conflicting",   bars: -1 },
  "expert-opinion":  { label: "Expert opinion",        short: "Expert opinion", bars: 0 }
};

export const RECOMMENDATIONS = {
  "recommended":     { label: "Recommended" },
  "consider":        { label: "Consider" },
  "not-recommended": { label: "Not recommended" }
};

const SVGNS = "http://www.w3.org/2000/svg";

function span(cls, text) {
  const s = document.createElement("span");
  if (cls) s.className = cls;
  if (text != null) s.textContent = text;
  return s;
}

function recIcon(rec) {
  const svg = document.createElementNS(SVGNS, "svg");
  svg.setAttribute("viewBox", "0 0 12 12");
  svg.setAttribute("width", "12");
  svg.setAttribute("height", "12");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("class", "ev-badge__icon");
  const p = document.createElementNS(SVGNS, "path");
  p.setAttribute("fill", "none");
  p.setAttribute("stroke", "currentColor");
  p.setAttribute("stroke-width", "1.8");
  p.setAttribute("stroke-linecap", "round");
  p.setAttribute("stroke-linejoin", "round");
  // recommended: tick · consider: half-circle question-ish dash · not-recommended: cross
  p.setAttribute("d", rec === "recommended" ? "M2.5 6.4 5 8.8 9.6 3.4"
    : rec === "not-recommended" ? "M3 3 9 9M9 3 3 9"
    : "M3 6h6");
  svg.append(p);
  return svg;
}

function meter(bars) {
  const m = span("ev-meter");
  m.setAttribute("aria-hidden", "true");
  if (bars < 0) { m.classList.add("ev-meter--conflicting"); }
  for (let i = 0; i < 4; i++) {
    const b = document.createElement("i");
    if (bars > i) b.className = "on";
    m.append(b);
  }
  return m;
}

/**
 * @param {string} evidence  strong | moderate | limited | very-limited | conflicting | expert-opinion
 * @param {string} [recommendation]  recommended | consider | not-recommended
 * @param {{ compact?: boolean }} [opts]  compact = short evidence label (for tables)
 * @returns {HTMLElement}
 */
export function evidenceBadge(evidence, recommendation, opts = {}) {
  const ev = EVIDENCE_LEVELS[evidence] || null;
  const rec = RECOMMENDATIONS[recommendation] || null;
  const root = span("ev-badge");
  if (ev) root.classList.add(`ev-badge--${evidence}`);
  if (rec) root.classList.add(`ev-badge--rec-${recommendation}`);
  if (rec && !evidence) root.classList.add("ev-badge--rec-only");

  const parts = [];
  if (rec) {
    const r = span(`ev-badge__rec ev-rec--${recommendation}`);
    r.append(recIcon(recommendation), span("ev-badge__text", rec.label));
    root.append(r);
    parts.push(rec.label);
  }
  if (ev) {
    const e = span("ev-badge__ev");
    e.append(meter(ev.bars), span("ev-badge__text", opts.compact ? ev.short : ev.label));
    root.append(e);
    parts.push(ev.label);
  } else if (evidence) {
    const e = span("ev-badge__ev");
    e.append(span("ev-badge__text", String(evidence)));
    root.append(e);
    parts.push(String(evidence));
  }
  const label = parts.join(" · ");
  root.title = label;
  // The visible text is already readable; expose one tidy label to assistive tech too.
  root.setAttribute("role", "img");
  root.setAttribute("aria-label", label || "Evidence level not stated");
  return root;
}

export default evidenceBadge;
