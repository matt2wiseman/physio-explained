# Injury Content Schema & Quality Bar

One file per injury: `content/injuries/<region>/<id>.js`, exporting a single object as `export default { ... }`.
`id`, `region` and the folder **must** match `content/catalogue.json`. Only write the injuries assigned to you there.
The gold-standard example is **`content/injuries/knee/acl-rupture.js`** — match its depth, tone and structure.
Run `npm run validate` (fast, no output files) after every file; fix every error and every warning you can.

Audience: practising and student physiotherapists. Tone: precise, clinical, plain English, Australian/British spelling
(e.g. *haematoma, oedema, ageing, paediatric, centre, programme* is fine but be consistent — prefer "program"). Active voice. No marketing language.

## Field reference

```ts
{
  id: string,                 // kebab-case, == filename == catalogue id
  name: string,               // == catalogue name
  shortName: string,          // ≤ 28 chars for cards/breadcrumbs, e.g. "ACL rupture"
  aka: string[],              // synonyms, abbreviations, lay terms (feeds search). ≥ 2
  region: Region,             // see list below — must equal catalogue region
  tissues: Tissue[],          // primary tissue(s) injured, first = main
  onset: "acute" | "gradual" | "acute-or-gradual",
  mechanismType: MechanismType[],   // ≥ 1
  populations: string[],      // who gets it: "adolescent athletes", "female team-sport athletes", "older adults"...
  sports: string[],           // common sports/activities (lowercase) — [] if not sport-related
  urgency: "routine" | "urgent" | "emergency",   // emergency = needs same-day medical/ED; urgent = medical review within days
  summary: string,            // ≤ 220 chars, one or two sentences, for cards & search results. No citations.
  keyFacts: { label: string, value: string }[],  // 4–6 quick facts. Use these labels where relevant:
                              // "Typical recovery", "Return to sport", "Key test", "Imaging", "Peak age", "Incidence"
  overview: string,           // 1–3 short paragraphs separated by "\n\n". Cite with [r1] markers.

  epidemiology: {
    text: string,             // incidence, prevalence, demographics, with citations
    riskFactors: { intrinsic: string[], extrinsic: string[] }   // ≥ 2 each where evidence exists; "modifiable" noted in text
  },

  mechanism: {
    summary: string,          // 2–4 sentences: the classic MOI, with forces/planes named
    sequence: string[],       // 4–8 ordered steps of the MOI, each a short sentence (drives the "how it happens" list)
    variants: { name: string, description: string }[]   // other mechanisms (contact vs non-contact, overuse...). [] if none
  },

  anatomy: {
    text: string,             // the relevant functional anatomy in 1 paragraph
    structures: { name: string, role: string }[]          // 3–8 key structures and what they normally do
  },

  pathophysiology: {
    tissueDamage: string,     // what physically happens to the tissue (failure mode, load vs capacity) — 1–2 paragraphs, cited
    structures: { name: string, effect: string }[],       // structures injured incl. commonly associated injuries
    muscles: { name: string, effect: string }[],          // muscle responses: inhibition (AMI), guarding/spasm, atrophy, altered recruitment
    cellular: { phase: string, timing: string, description: string }[],   // ordered cellular/biological events (e.g. Inflammatory, 0–5 days, ...)
    systems: { system: string, effect: string }[]         // body systems beyond the tissue: nervous (pain processing, proprioception,
                              // cortical changes), vascular, immune/inflammatory, endocrine, musculoskeletal chain, psychological. ≥ 3
  },

  grading: null | {           // null if no accepted grading/classification
    system: string,           // e.g. "Clinical grading (I–III)", "British Athletics Muscle Injury Classification", "Weber"
    grades: { grade: string, description: string, prognosis?: string }[]
  },

  timeframes: {
    summary: string,          // 1–2 sentences
    healing: { phase: string, startDay: number, endDay: number, description: string }[],   // ≥ 3 phases, numbers in DAYS (overlap allowed). Drives the timeline chart.
    milestones: { label: string, day: number, note?: string }[],   // ≥ 3 (e.g. "Walking without aids" 14, "Running" 90, "Return to sport" 270)
    returnToSport: string     // range with context, e.g. "9–12 months after reconstruction; criteria-based, not time-based"
  },

  clinicalPresentation: { symptoms: string[], signs: string[] },   // ≥ 3 each

  assessment: {
    subjective: string[],     // key history features/questions (≥ 4)
    observation: string[],
    palpation: string[],
    rangeOfMotion: string[],
    strength: string[],
    neuro: string[],          // [] if not relevant
    functional: string[],     // functional tests (hop tests, single-leg squat, etc.)
    specialTests: {
      name: string, purpose: string,
      procedure: string,      // how to perform it, 1–3 sentences
      positive: string,       // what counts as positive
      sensitivity?: string, specificity?: string,   // e.g. "85%" or "0.85 (95% CI 0.83–0.87)" — ONLY if from a cited source
      lrPositive?: string, lrNegative?: string,
      refs: string[]          // reference ids supporting the accuracy figures; [] if none quoted
    }[],                      // ≥ 2 where tests exist. Never invent accuracy statistics.
    clinicalRules: { name: string, description: string }[],   // e.g. Ottawa ankle rules. [] if none
    outcomeMeasures: { name: string, use: string }[],          // validated PROMs/performance measures (≥ 2)
    imaging: { modality: string, indication: string, findings: string }[]   // when to image and what it shows
  },

  differentials: { name: string, id?: string, distinguishing: string }[],   // ≥ 4; include `id` when the condition is in content/catalogue.json
  redFlags: string[],         // ≥ 2 — serious pathology/complications to screen for, and what to do

  management: {
    principles: string,       // 1 paragraph — the overall approach, shared decision-making, load management
    medical: Treatment[],     // non-physio: analgesia/NSAIDs, injections, bracing/immobilisation, surgery, other specialties
    physio: Treatment[],      // physio interventions (exercise, education, manual therapy, taping, modalities...) — include
                              // things that DON'T work with recommendation "not-recommended" where evidence says so
    education: string[]       // key messages for the patient (≥ 3)
  },

  rehab: {
    overview: string,         // criteria-based progression philosophy for this injury
    stages: {
      name: string,           // e.g. "Protect & restore"
      timeframe: string,      // e.g. "Weeks 0–2" (typical, criteria override time)
      goals: string[],
      precautions: string[],  // [] if none
      exercises: {
        name: string,
        dosage: string,       // sets × reps / time / load / frequency, e.g. "3 × 10, 3 s lowering, daily"
        cues?: string,        // key coaching cue
        figure?: { pose: string, view?: "lateral" | "anterior", props?: string[] }   // optional illustration: POSE_PRESETS id + PROPS
      }[],                    // 3–6 per stage
      progressionCriteria: string[]   // objective criteria to move on (≥ 2)
    }[]                       // 3–5 stages: early → intermediate → late/strength → return to sport/performance
  },

  returnToSport: { criteria: string[], tests: string[] },   // objective criteria; [] tests if none
  prognosis: string,          // natural history, recurrence/re-injury rates, long-term sequelae — cited
  prevention: string[],       // evidence-based prevention strategies ([] if none)
  clinicalPearls: string[],   // 3–6 high-yield tips an experienced physio would share
  related: string[],          // 2–6 other injury ids from content/catalogue.json

  references: {
    id: string,               // "r1", "r2", ... in order of first use
    citation: string,         // Vancouver: "Surname AB, Surname CD, et al. Title. Journal Abbrev. Year;Vol(Issue):pages."
    pmid?: string,            // REQUIRED unless the work is not in PubMed (then give doi or url)
    doi?: string,
    url?: string,
    type: RefType,
    year: number
  }[],                        // 8–20 references; every one must be cited somewhere with [rN] or in specialTests.refs / Treatment.refs

  animation: { ... },         // see docs/ANIMATION_DSL.md — MUST contain moi → zoom → closeup → micro (micro may be omitted only if truly irrelevant)

  meta: { lastReviewed: "2026-10", team: "LL1" }   // your agent code
}

type Treatment = {
  name: string,
  description: string,        // what it is, when, and how (dose/parameters where relevant)
  evidence: "strong" | "moderate" | "limited" | "very-limited" | "conflicting" | "expert-opinion",
  recommendation: "recommended" | "consider" | "not-recommended",
  refs: string[]              // reference ids ([] only for expert-opinion)
}
```

**Enumerations**
- `Region`: hip-groin, thigh, knee, lower-leg, ankle, foot, shoulder, arm, elbow, wrist-hand, cervical, thoracic, lumbar, pelvis, chest-abdomen, head-face, general
- `Tissue`: ligament, tendon, muscle, bone, cartilage, meniscus, labrum, joint-capsule, nerve, bursa, disc, fascia, fat-pad, physis, vascular, brain, vestibular, multiple
- `MechanismType`: contact, non-contact, overuse, fall, collision, degenerative, insidious, traction, compression
- `RefType`: clinical-practice-guideline, consensus-statement, systematic-review, meta-analysis, rct, cohort, case-control, cross-sectional, diagnostic-accuracy, biomechanical, basic-science, narrative-review, textbook, other

## Text conventions
- Plain strings. Allowed inline markup: `**bold**` (sparingly) and citation markers `[r1]` or `[r1,r4]` placed before the full stop.
  Do not use HTML or other markdown. Use "\n\n" only inside `overview`, `tissueDamage`, `principles`, `overview` (rehab).
- Numbers with units: "6–12 weeks", "85%". Use en dash for ranges.
- Use "physiotherapist"/"physio". Use "return to sport (RTS)" on first mention per page.

## Evidence rules (non-negotiable)
1. **Every reference must be real and verified.** Find sources with the PubMed tools (`mcp__PubMed__search_articles`,
   `mcp__PubMed__get_article_metadata`; load them via ToolSearch first). Copy authors/title/journal/year/volume/pages
   and the PMID/DOI **from the tool result**, never from memory. If you can't verify it, don't cite it.
2. Prefer, in order: clinical practice guidelines & consensus statements → systematic reviews/meta-analyses → RCTs →
   high-quality cohorts → landmark mechanistic/biomechanical papers. Prefer the most recent high-quality evidence (last ~10 years)
   but keep landmark classics (e.g. original classification papers).
3. Every number (incidence, sensitivity/specificity, recurrence, timeframes) must be traceable to a cited reference or be
   clearly framed as typical clinical ranges. Never invent statistics. If the evidence is weak or conflicting, say so.
4. Where treatment evidence is weak, label it honestly (`limited`, `very-limited`, `expert-opinion`).
5. Healing timeframes should reflect tissue biology (e.g. ligament: inflammation ~0–5 d, proliferation ~5 d–6 wk, remodelling 6 wk–12+ months).

## Quality checklist (QC will check every file against this)
- [ ] Mechanism is specific (planes, forces, joint positions, timing in the movement) and matches the animation.
- [ ] Pathophysiology covers structure → muscles → cells → systems, not just the injured tissue.
- [ ] Assessment lists expected findings the physio will actually see, with test accuracy only from cited sources.
- [ ] Management separates medical vs physio, includes evidence levels and what not to do.
- [ ] Rehab stages are criteria-based, progressive, realistic, and safe (precautions stated, e.g. post-op restrictions).
- [ ] Red flags are specific and actionable.
- [ ] References: 8–20, verified PMIDs/DOIs, all cited, numbered in order of first use.
- [ ] Animation: anatomically correct MOI, correct structures fail in the close-up, micro stages fit the tissue.
- [ ] `npm run validate` passes with no errors.
