# TOGAF 9.2 Foundation — Refresher + Mock Tests (Static Site)

A compact refresher and 10 seeded mock tests for the TOGAF® Standard, Version 9.2 Foundation (Part 1).

- Multiple choice
- 60-minute timer
- Pass mark 60%
- At least 10 mock tests (seeded)
- Post-test feedback focusing on incorrect answers

## Run locally

1. Double-click `index.html` (works offline), or
2. Use a tiny web server (optional, recommended for Chrome security):
   - Python 3: `python -m http.server 8080` then open http://localhost:8080

## Deploy free on the cloud

### Option A: GitHub Pages (free)

1. Create a new GitHub repository, e.g., `togaf-foundation-site`.
2. Upload all files in this folder (index.html, app.js, styles.css, README.md, sources.md).
3. In **Settings → Pages**, set **Source** to `Deploy from a branch`, choose `main` and `/ (root)`.
4. Wait a minute; your site will be live at a `github.io` URL shown on the Pages screen.

### Option B: Netlify (drag-and-drop)

1. Go to netlify.com → Sign up (free).
2. Click **Add new site → Deploy manually** and drag this folder onto the drop-zone,
   or connect your Git repo and choose the repo (no build command needed; publish directory is the repo root).
3. Netlify gives you a public URL instantly; you can rename it under **Site settings**.

### Option C: Vercel (zero-config)

1. vercel.com → Sign in → **Add New… → Project** and import your Git repo.
2. No build step required (static). Framework preset: **Other**. Output directory: `/` (root).
3. Deploy; Vercel provides a public URL and optional custom domain.

## Notes

- This content is **not** official exam material. Questions are inspired by public sources and worded originally.
- If you want 40 questions per test, ensure the BANK in `app.js` contains at least 40 items; it currently contains 72.
- To add or edit questions, update the `BANK` constant in `app.js` (each item has `stem`, `choices`, `explanation`).

(c) 2025-09-26 — Study aid for personal use.
