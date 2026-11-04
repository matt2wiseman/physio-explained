# Writer brief (all content writers)

You write injury pages for "Physio Explained", an evidence-based injury-education website for physiotherapists. The platform and animation engine are finished. A trial showed Sonnet-written pages match Opus-written pages on reference accuracy and depth, so write at that standard. QC checks every reference against PubMed and every quoted number against its source.

## Read first (once)
CLAUDE.md; docs/CONTENT_SCHEMA.md (schema, evidence rules, checklist); content/injuries/knee/acl-rupture.js (gold standard) and content/injuries/knee/patellar-tendinopathy.js (a QC-passed Sonnet page; match its depth and its honesty about what could not be traced); docs/ANIMATION_DSL.md section 1 (including "Rig extras" and authoring tips); js/anim/catalogue.js (the ONLY ids you may use in animations: scenes with structures and anchors, allowed actions per structure type, POSE_PRESETS, PROPS, ENVIRONMENTS, BODY_TARGETS, FORCE_DIRS, MICRO_TISSUES stages). Read the catalogue entries only for the scenes you use.

## Workflow per injury (one complete validated file at a time; save before starting the next)
1. Research with PubMed. Load tools with ToolSearch query "select:mcp__PubMed__search_articles,mcp__PubMed__get_article_metadata". Prefer guidelines and consensus, then systematic reviews, RCTs, cohorts, landmark mechanism papers. Call get_article_metadata for EVERY paper you cite. Build each Vancouver citation (first three authors then "et al"), year, PMID and DOI from the returned data, never from memory. When a paper has no abstract and a PMC id exists, use mcp__PubMed__get_full_text_article (load via ToolSearch). Aim for 10 to 18 references.
2. Write content/injuries/<region>/<id>.js exactly to the schema: specific mechanism; pathophysiology through structure, muscles, cells and body systems; expected assessment findings; special tests with sensitivity or specificity only when a cited source states them; medical versus physio management with honest evidence labels, including what does NOT work; a criteria-based staged programme (3 to 5 stages, 3 to 6 exercises each, real dosages, `figure` with POSE_PRESETS ids where they match); return-to-sport criteria; actionable red flags; differentials with `id` when the condition is in content/catalogue.json; related ids from the catalogue.
3. Animation (moi, zoom, closeup, micro) like the ACL example, using only catalogue ids.
4. Validate: `node scripts/build.mjs --check --only <id>`. Fix every error and every warning you reasonably can. Never run the build without --check.
5. Preview the animation once: `node tools/render-anim.mjs <id> --sheet 12`, Read tools/output/anim-<id>-sheet.png, fix anything wrong (wrong structure failing, labels off-target, mechanism not readable).

## QC rules
(a) A number next to a citation marker must appear in the abstract or full text you actually read. Clinical conventions (dosages, pain thresholds, return-to-sport thresholds) go uncited and are worded "a common clinical convention".
(b) Never rate a treatment's evidence higher than the cited source supports. If a guideline or consensus could not recommend something, do not label it recommended.
(c) PubMed's publication year can be the online date. Use the print year implied by volume and issue.
(d) Keep a scratch file of verified references in your scratchpad and reuse them across injuries.
(e) Micro `variant: "intra-articular"` is only for ligament or tendon inside a synovial joint.
(f) In anterior view avoid kneel, foosh and trip presets; use lateral view for sagittal mechanisms.
(g) If a scene lacks a structure you need, use the closest available id and note it in docs/REQUESTS.md.
(h) `reference ids` are "r1", "r2", ... numbered in order of first use.

## Rules
Australian/British spelling, plain clinical English, flag weak or contested evidence honestly. Only create or edit your assigned files. Never run git. Do not re-read files unnecessarily, because usage limits are tight.

## Final report (under 250 words)
Ids written; validation result per id; verified reference count per id; claims you could not trace to an abstract or full text you read; anything clinically uncertain.
