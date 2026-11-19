# Writer brief (all content writers)

You write injury pages for "Physio Explained", an evidence-based injury-education website for physiotherapists. The platform and animation engine are finished. A trial showed Sonnet-written pages match Opus-written pages on reference accuracy and depth, so write at that standard. QC checks every reference against PubMed and every quoted number against its source.

## Read first (once)
CLAUDE.md; docs/CONTENT_SCHEMA.md (schema, evidence rules, checklist); content/injuries/knee/acl-rupture.js (gold standard) and content/injuries/knee/patellar-tendinopathy.js (a QC-passed Sonnet page; match its depth and its honesty about what could not be traced); docs/ANIMATION_DSL.md section 1 (including "Rig extras" and authoring tips); js/anim/catalogue.js (the ONLY ids you may use in animations: scenes with structures and anchors, allowed actions per structure type, POSE_PRESETS, PROPS, ENVIRONMENTS, BODY_TARGETS, FORCE_DIRS, MICRO_TISSUES stages). Read the catalogue entries only for the scenes you use.

## Workflow per injury (one complete validated file at a time; save before starting the next)
1. Research with PubMed. Load tools with ToolSearch query "select:mcp__PubMed__search_articles,mcp__PubMed__get_article_metadata". Prefer guidelines and consensus, then systematic reviews, RCTs, cohorts, landmark mechanism papers. Call get_article_metadata for EVERY paper you cite. Build each Vancouver citation (first three authors then "et al"), year, PMID and DOI from the returned data, never from memory. When a paper has no abstract and a PMC id exists, use mcp__PubMed__get_full_text_article (load via ToolSearch). Aim for 10 to 18 references.
2. Write content/injuries/<region>/<id>.js exactly to the schema: specific mechanism; pathophysiology through structure, muscles, cells and body systems; expected assessment findings; special tests with sensitivity or specificity only when a cited source states them; medical versus physio management with honest evidence labels, including what does NOT work; a criteria-based staged programme (3 to 5 stages, 3 to 6 exercises each, real dosages, `figure` with POSE_PRESETS ids where they match); return-to-sport criteria; actionable red flags; differentials with `id` when the condition is in content/catalogue.json; related ids from the catalogue.
3. Animation (moi, zoom, closeup, micro) like the ACL example, using only catalogue ids.
4. Validate: `node scripts/build.mjs --check --only <id>`. Fix every error and every warning you reasonably can. Never run the build without --check.
5. Preview the animation once: `node tools/render-anim.mjs <id> --sheet 12`, Read tools/output/anim-<id>-sheet.png, fix anything wrong (wrong structure failing, labels off-target, mechanism not readable). The command also prints browser console errors: any `Error:` line (for example `attribute ... "NaN"`) is a bug in your file that the validator cannot see, so fix it before you finish. Support props (chair, bench, box, step, kerb…) take no x/y keyframes.

## QC rules
(a) A number next to a citation marker must appear in the abstract or full text you actually read. Clinical conventions (dosages, pain thresholds, return-to-sport thresholds) go uncited and are worded "a common clinical convention".
(b) Never rate a treatment's evidence higher than the cited source supports. If a guideline or consensus could not recommend something, do not label it recommended.
(c) PubMed's publication year can be the online date. Use the print year implied by volume and issue.
(d) Keep a scratch file of verified references in your scratchpad and reuse them across injuries.
(e) Micro `variant: "intra-articular"` is only for ligament or tendon inside a synovial joint.
(f) In anterior view avoid kneel, foosh and trip presets; use lateral view for sagittal mechanisms.
(g) If a scene lacks a structure you need, use the closest available id and note it in docs/REQUESTS.md.
(h) `reference ids` are "r1", "r2", ... numbered in order of first use.

## Lessons from the evidence audit of the first 123 pages (read before writing; these were the errors found)
The audit judged 900 numbers against their cited abstracts and full texts. Most were correct, but the defects were avoidable and followed a few patterns:
1. **A cited number must be in THAT paper.** If a review quotes another study's figure (for example "only 60% were diagnosed correctly"), cite the primary study or write "reported in a review"; do not cite the review as if it measured it. Never carry a figure from one paper's text to another paper's marker.
2. **Dosages, progression criteria, return-to-sport times, classification definitions and test procedures are conventions unless the paper states them.** Word them "(clinical convention)" and leave the marker off. A rehabilitation commentary may state doses; a trial abstract usually does not. If you read the full text and it states the dose, say which stage or arm it belongs to.
3. **Do not turn a general statement in a case report or a review's introduction into a finding.** "Pain settles in 4–6 weeks" in a case report's discussion is weak support; write "often settles over a few weeks".
4. **Repeated claims must stay identical and equally supported.** The same number often appeared in keyFacts, the timeframes summary, the overview, a patient-education line and an animation caption; the audit found the weakest copy again and again. Write the sourced wording once and reuse it, or leave the number out of the weaker places.
5. **Check denominators and direction.** Patients versus elbows, 12 versus 17 per arm, "of those asked" versus "of all": copy the counts from the abstract and re-read them against your sentence.
6. **Age bands, angles and durations are easy to invent.** "Aged 40–60", "at 20–30° of flexion", "within 6–12 weeks": include one only if a source you read gives it; otherwise say "middle age", "slightly flexed", "over weeks to months".
7. **Use the paper's own scale and words** ("pain ≤4/10", "older patients"), not a stricter or rounder version.
8. **Say when you could not read the full text.** If the number matters and only a closed-access paper holds it, soften it or label it.
9. Run the render preview and treat any console error as a bug (see workflow step 5).

## Rules
Australian/British spelling, plain clinical English, flag weak or contested evidence honestly. Only create or edit your assigned files. Never run git. Do not re-read files unnecessarily, because usage limits are tight.

## Final report (under 250 words)
Ids written; validation result per id; verified reference count per id; claims you could not trace to an abstract or full text you read; anything clinically uncertain.
