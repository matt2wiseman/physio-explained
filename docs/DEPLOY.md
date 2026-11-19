# Deployment (Vercel)

- **Project:** `physio-explained` on the Vercel team "matt's projects" (Hobby plan), project id `prj_u4QhJw64qBYehNrJEABrJnFbRXMf`.
- **Address:** https://physio-explained.vercel.app (first production deployment 17 Nov 2026, commit `5fa46a9`, 123 injuries).
- **Source:** the GitHub repository `matt2wiseman/physio-explained`. The Vercel project's **production branch is `claude/physio-explained-site`**, so every push to that branch deploys to production automatically. To stop that, change the production branch in the Vercel project settings (for example to `main` once the work is merged).
- **Build:** `vercel.json` has no framework and no install step. The build command copies only the files the site needs into `dist/` (`index.html`, `css/`, `js/`, `data/`, `assets/` and `content/catalogue.json`, which the glossary fetches at runtime) and serves `dist/`. `content/`, `docs/`, `scripts/`, `tools/` and `tests/` are not published. The deployed folder is about 231 files and 8.8 MB.
- **The compiled data is committed.** Run `node scripts/build.mjs` before pushing so `data/` matches `content/`; Vercel does not run the content build.
- **Access:** the site is **public**. Vercel Authentication was switched off on 19 Nov 2026 at the owner's request (it was on by default). To make it private again: Project settings, Deployment Protection (or `ssoProtection` through the Vercel API).
- **Adding injuries later:** write the page under `content/injuries/<region>/`, run `npm test` (validates content, rebuilds data, renders every animation, loads every route at 360 px and fails on errors or horizontal overflow; about 3 minutes), commit data and content, push. Production updates on its own.
- **No external dependencies.** The three font families (Archivo, Public Sans, IBM Plex Mono; SIL Open Font License 1.1) are self-hosted in `assets/fonts/` and declared in `css/fonts.css`, so the site makes no requests to third parties.
- **Before wider release:** the evidence audit covered abstracts and open full texts only; see `docs/qa/audit-followups.md` for what remains unconfirmed. A clinician should read the pages before anyone relies on them.
