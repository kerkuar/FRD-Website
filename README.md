# frdantuono.eu

Personal website of **Francesca Romana D'Antuono** — co-presidente di Volt Europa.

Built with [Astro](https://astro.build) + Tailwind CSS + MDX, deployed to Netlify, source on GitHub at `github.com/kerkuar/frdantuono-eu`.

---

## Run locally

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:4321. Pages live-reload on save.

```bash
npm run build      # full production build to ./dist
npm run preview    # preview the production build locally
```

---

## How to add an article

1. Create a new file in `src/content/articles/` named like `2025-04-volt-europa.mdx`.
2. Fill in the frontmatter:

   ```yaml
   ---
   title: "Titolo italiano"
   titleEn: "English title"        # optional but recommended
   outlet: "Il Manifesto"
   date: 2025-04-12
   lang: it                         # it | en | fr | de | es | other
   summary: "Sommario in italiano (2-4 frasi)."
   summaryEn: "English summary."
   url: "https://example.com/articolo-originale"
   tags: ["clima", "europa"]
   featured: true                   # optional, true to highlight on home
   ---
   ```

3. Body content under the frontmatter is optional — articles are shown as cards that link out to the original publication.

The article will appear automatically on `/articoli`, `/en/articles`, and (if recent) on the home page.

---

## How to add a speech

1. Create a new file in `src/content/speeches/`, e.g. `2024-05-volt-congress.mdx`.
2. Frontmatter for a YouTube speech:

   ```yaml
   ---
   title: "Discorso di apertura — Congresso 2024"
   titleEn: "Opening speech — Congress 2024"
   event: "Congresso Volt Europa"
   eventEn: "Volt Europa Congress"
   location: "Bruxelles · Brussels"
   date: 2024-05-25
   lang: it
   type: youtube
   youtubeId: "ABC123xyz"     # the part after v= in the URL
   summary: "Sommario."
   summaryEn: "Summary."
   ---
   ```

3. For a self-hosted video (file uploaded to `/public/media/`):

   ```yaml
   type: hosted
   videoSrc: "/media/intervento-2024.mp4"
   transcript: |
     Trascrizione integrale qui…
   ```

   Drop the actual `.mp4` (or `.mp3` for audio) file into `public/media/` so it ships with the site.

The speech appears automatically on `/interventi` and `/en/speeches`, and gets its own detail page at `/interventi/<slug>` and `/en/speeches/<slug>`.

---

## How to swap in real photos

1. Save photos into `assets/photos/` at the repo root (already a folder, gitignored is up to you).
2. Move the ones you want to publish into `public/photos/` so Astro ships them as static assets.
3. In `src/pages/index.astro`, `chi-sono.astro`, `en/about.astro`, etc., find the `<PhotoFrame>` component and pass a `src` prop, e.g.:

   ```astro
   <PhotoFrame src="/photos/portrait-2025.jpg" alt="FRD — ritratto" ratio="portrait" rounded="3xl" />
   ```

   When `src` is omitted, the component shows a tasteful placeholder at the same aspect ratio.

For best results, ship 1600px-wide JPEGs (or use Astro's `<Image>` component to auto-generate AVIF/WebP — see Astro docs).

---

## Live Instagram feed

The first build ships with a **static Instagram preview** that links out to her account. To turn on a live feed:

1. Create a free widget at [SnapWidget](https://snapwidget.com/) for the IG account `@francescaromana_dantuono` and copy the iframe `src` URL.
2. Open `src/components/InstagramFeed.astro` and:
   - Set `USE_LIVE_EMBED = true`
   - Paste the iframe URL into `WIDGET_SRC`
3. Commit + push. Netlify will rebuild and the live grid will appear on `/posizioni` and `/en/positions`.

Heavier alternatives (Elfsight paid plan, or the official Instagram Basic Display API) are also possible — see the comments at the top of `InstagramFeed.astro`.

---

## Deploy to Netlify

The repo is configured for one-click Netlify deploys via `netlify.toml`. First-time setup:

1. **Push to GitHub** (see commands below if not done yet).
2. In Netlify → **Add new site → Import from Git** → choose the GitHub repo.
3. Build settings auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20
4. **Custom domain:** Site settings → Domain management → Add `frdantuono.eu` and `www.frdantuono.eu`. Netlify will issue a free Let's Encrypt cert.
5. **DNS:** at the domain registrar, set:
   - `A` record on apex `@` → `75.2.60.5` (Netlify's load balancer)
   - `CNAME` on `www` → `<your-site-name>.netlify.app`

   (Netlify's dashboard shows the exact records to use.)

### First push to GitHub

From this folder, after running `npm install` once:

```bash
git init
git add .
git commit -m "Initial commit — frdantuono.eu"
gh repo create kerkuar/frdantuono-eu --public --source=. --remote=origin --push
```

If you don't use the GitHub CLI:

```bash
git init
git add .
git commit -m "Initial commit — frdantuono.eu"
git branch -M main
git remote add origin https://github.com/kerkuar/frdantuono-eu.git
git push -u origin main
```

---

## Contact form

The form on `/contatti` and `/en/contact` is wired to **Netlify Forms**:

- Submissions appear in the Netlify dashboard under **Forms → contact**.
- To get email notifications: Netlify → Forms → Settings → Notifications → add `francescaromanadantuono.frd@gmail.com`.
- Honeypot field included to deter spam. Add reCAPTCHA in Netlify settings if it ever becomes an issue.

---

## Project structure

```
src/
├── components/        # Header, Footer, cards, form, InstagramFeed, PhotoFrame
├── content/
│   ├── articles/      # one .mdx per article
│   └── speeches/      # one .mdx per speech
├── data/              # stances.ts, timeline.ts (drafts to be reviewed by FRD)
├── i18n/              # ui.ts (translations) + utils.ts (lang detection, route mapping)
├── layouts/           # Base.astro (the wrapping <html>, head, header, footer)
├── pages/             # IT routes at root, EN routes under /en/
└── styles/            # global.css (Tailwind + design tokens)
```

---

## What's left before launch

See `CONTENT_REVIEW.md` for the full list of items FRD still needs to review or replace, and `DESIGN_NOTES.md` for the design rationale + alternative directions you can switch to.
