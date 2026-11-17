# Deployment (Vercel)

- **Project:** `physio-explained` on the Vercel team "matt's projects" (Hobby plan), project id `prj_u4QhJw64qBYehNrJEABrJnFbRXMf`.
- **Address:** https://physio-explained.vercel.app (first production deployment 17 Nov 2026, commit `5fa46a9`, 123 injuries).
- **Source:** the GitHub repository `matt2wiseman/physio-explained`. The Vercel project's **production branch is `claude/physio-explained-site`**, so every push to that branch deploys to production automatically. To stop that, change the production branch in the Vercel project settings (for example to `main` once the work is merged).
- **Build:** `vercel.json` has no framework and no install step. The build command copies only the files the site needs into `dist/` (`index.html`, `css/`, `js/`, `data/`, `assets/` and `content/catalogue.json`, which the glossary fetches at runtime) and serves `dist/`. `content/`, `docs/`, `scripts/`, `tools/` and `tests/` are not published. The deployed folder is about 231 files and 8.8 MB.
- **The compiled data is committed.** Run `node scripts/build.mjs` before pushing so `data/` matches `content/`; Vercel does not run the content build.
- **Access:** Vercel's default protection (Vercel Authentication, all `vercel.app` addresses) is on, so the site is private to the account owner until that setting is changed or a custom domain is attached. Making it public is a deliberate step: Project settings, Deployment Protection.
- **Adding injuries later:** write the page under `content/injuries/<region>/`, run `node scripts/build.mjs` and `tools/scan-render.sh`, commit data and content, push. Production updates on its own.
- **External dependency:** `index.html` loads three Google Fonts families from fonts.googleapis.com. The rest of the site is self-contained. Self-hosting the fonts would remove the dependency (project rule 3 asks for no external runtime CDNs).
- **Before wider release:** the evidence audit covered abstracts and open full texts only; see `docs/qa/audit-followups.md` for what remains unconfirmed. A clinician should read the pages before anyone relies on them.
