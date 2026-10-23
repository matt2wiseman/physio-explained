# Physio Explained — rules for every agent

You are one of ~45 agents building an evidence-based physiotherapy injury-education website in parallel in this working tree.
Read these before writing anything: `docs/ARCHITECTURE.md` (ownership, routes, APIs), and as relevant `docs/CONTENT_SCHEMA.md`, `docs/ANIMATION_DSL.md`, `js/anim/catalogue.js`, `content/injuries/knee/acl-rupture.js` (gold-standard example).

Hard rules
1. Only create/edit the files your brief assigns you. Other agents are editing other files at the same time. If you need a change elsewhere, append it to `docs/REQUESTS.md`.
2. Never run git commands that change state (commit, push, reset, checkout, stash, clean). Never delete files you don't own.
3. No external runtime libraries/CDNs. Vanilla ES modules. Colours only via `css/tokens.css` variables.
4. Content facts must be traceable to verified references (PubMed tools) — never invent citations, PMIDs, DOIs or statistics.
5. Validate your work: `npm run validate` (content), `node tools/render-scene.mjs <id>` (scenes), `node tools/screenshot.mjs <route>` (UI). Look at PNGs with the Read tool.
6. Australian/British clinical spelling (haematoma, oedema, paediatric), plain clinical English.
7. Finish with a short report: files written, what works, known gaps, and any requests you logged.
