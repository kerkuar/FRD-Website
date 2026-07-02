# Build prompt — frdantuono.eu

Paste this into a fresh Claude session (with computer/file/web access) to build the site. Fill in the **`<< FILL IN >>`** placeholders before running.

---

## Project

Build a personal website for **Francesca Romana D'Antuono** (FRD), an Italian political/civic figure. Domain is already registered: **frdantuono.eu**. The site will live in a new GitHub repo under https://github.com/kerkuar and deploy via Netlify (account already exists).

**Reference inputs (read these first):**
- Wikipedia (EN): https://en.wikipedia.org/wiki/Francesca_Romana_D%27Antuono — also fetch the IT version if it exists, prefer IT for source quotes.
- CV (Canva): https://canva.link/4jdeaucir3kh5vi
- Owner's existing site (for deployment workflow reference only — do **not** copy visual style): `C:\Users\andi_\Downloads\My projects\Andi - Website`
- This project folder (where the new site lives): `C:\Users\andi_\Downloads\My projects\FRD - Website`

## Tech stack

- **Astro** (latest stable) with TypeScript and content collections.
- **Tailwind CSS** for styling. Custom design tokens — no off-the-shelf admin theme.
- **Astro i18n** for IT/EN routing (`/` = Italian default, `/en/` = English). A visible language toggle in the header.
- **MDX** for Articles and Speeches content collections so individual posts can be uploaded as files.
- **Netlify Forms** for the contact form (no backend code).
- Deploy target: **Netlify**, connected to a new GitHub repo at `github.com/kerkuar/frdantuono-eu` (or similar — confirm name with owner).
- No analytics, no cookie banner, no privacy/imprint pages for this first build (will be added later before launch).

## Visual identity & tone

- Tone: **warm personal-brand** — approachable, modern, photo-led. Reads like a thinker/communicator, not an institution.
- Before writing CSS, browse 5–8 reference sites of comparable political/civic communicators and writers (e.g. EU MEPs with personal sites, Italian public intellectuals, journalists with personal pages, campaigners). Briefly summarize what works on each, then propose **2–3 distinct palette + typography directions** with rationale and pick one to implement (note the others as alternatives in `DESIGN_NOTES.md`).
- Constraints to respect when choosing:
  - Warm, not cold. Off-white/cream backgrounds rather than pure white. Avoid corporate blue.
  - One serif typeface for headings/long-form (suggest Playfair Display, Cormorant, GT Sectra-like, etc.) paired with one humanist sans for UI/body.
  - Generous whitespace, large editorial photography, clear hierarchy.
  - Italian-first: design for occasionally long Italian words/sentences (no clipped narrow buttons).
- Distinct from the owner's Andi - Website — open that folder and note its style only so you can avoid replicating it.

## Information architecture

Five top-level pages, each in IT and EN:

1. **Home (`/`)** — hero with portrait + one-line positioning, short bio paragraph, three feature blocks linking to About / Stance / Speeches, latest 3 articles, newsletter/contact CTA.
2. **About (`/chi-sono` / `/en/about`)** — long-form biography (Italian first, written in her voice, first person). Pull facts from Wikipedia + CV. Sections: chi sono, percorso, cosa faccio oggi, valori. Include a small timeline/milestones component.
3. **Posizioni (`/posizioni` / `/en/positions`)** — political stance on current issues. Two parts:
   - **Top of page:** 4–8 curated short stance statements (1 paragraph each) on the issues she cares about most — derive provisional list from Wikipedia/CV (likely candidates: democrazia europea, clima, diritti civili, partecipazione, lobby trasparente, ecc.). Mark each clearly as **draft for FRD's review** in a comment in the MDX.
   - **Below:** a live Instagram feed embed showing her latest posts as a grid (use Elfsight, SnapWidget, or `instagram-feed` lite — pick whichever needs the least account access; document the choice). Fall back gracefully if the embed fails. Include link buttons to all her socials.
4. **Articoli (`/articoli` / `/en/articles`)** — index of articles she has written, each as a card with title, outlet, date, language flag, short summary, and an external link to the original publication. Driven by an Astro content collection so adding a new article = adding a new MDX/YAML entry. Filterable by year and outlet.
5. **Interventi (`/interventi` / `/en/speeches`)** — index of speeches/talks. Each entry is either:
   - A YouTube embed with title, event, date, location, short context (most entries), OR
   - A self-hosted entry with uploaded video/audio file + transcript (some entries).
   Drive both via the same content collection with a `type: youtube | hosted` field.
6. **Contatti (`/contatti` / `/en/contact`)** — single contact form with a required **"motivo del contatto"** dropdown:
   - Restiamo in contatto / Stay in touch
   - Collaborare / Work together
   - Invito a un evento (speech) / Speaking invitation
   - Workshop / Training
   - Campagna / Campaign collaboration
   - Stampa / Press
   - Altro / Other

   Wired to Netlify Forms, sending notifications to the contact email below. Show clear privacy reassurance copy under the form. Also list direct links to her socials.

## Content sourcing

- Read the Wikipedia page (EN, and IT if it exists) and the Canva CV. Extract: full name, year/place of birth if public, education, professional roles, political affiliations and positions held, notable campaigns/causes, books/publications, public talks, social media handles if listed.
- Draft **all body copy in Italian first**, in **first person** in FRD's voice (warm, civic, plain-spoken — not bureaucratic). Then translate to English for the `/en/` version.
- Mark every drafted block clearly inside the MDX with an HTML comment: `<!-- DRAFT — to be reviewed by FRD -->` so she knows nothing is published as her words without review.
- Where the source material is thin, write a tasteful placeholder paragraph and add a `TODO:` comment noting what's missing.

## Assets

- Professional photos exist. Owner will drop them into `C:\Users\andi_\Downloads\My projects\FRD - Website\assets\photos\` before/after the build. Generate `srcset` and modern formats (AVIF/WebP) via Astro's image pipeline. If photos are not present at build time, use a clearly-marked placeholder with the same aspect ratio so layouts are stable.
- No existing logo. Use her full name as a wordmark in the chosen serif; design a small monogram **FRD** as a favicon and compact mark for the header on narrow screens.

## Placeholders to fill in before running this prompt

```
CONTACT_EMAIL          = << francescaromanadantuono.frd@gmail.com >>
CONTACT_EMAIL 2        = << francescaromana.dantuono@volteuropa.org >>
INSTAGRAM_HANDLE       = << @francescaromana_dantuono >>
INSTAGRAM_URL          = << https://www.instagram.com/francescaromana_dantuono?igsh=MWRrdHFxeHBxaDVmdQ%3D%3D&utm_source=qr >>
X_TWITTER_HANDLE       = << "none" >>
LINKEDIN_URL           = << https://www.linkedin.com/in/thisisfrd/ >>
FACEBOOK_URL           = << "none" >>
YOUTUBE_CHANNEL_URL    = << "none" >>
SUBSTACK_URL           = << https://substack.com/@francescaromanadantuono >>
PHOTOS_FOLDER          = C:\Users\andi_\Downloads\My projects\FRD - Website\assets\photos\
```

## Deliverables

1. A complete Astro project at `C:\Users\andi_\Downloads\My projects\FRD - Website\` ready to `npm install && npm run dev`.
2. `README.md` covering: how to run locally, how to add an article, how to add a speech, how to swap photos, how to deploy to Netlify, how to update the live Instagram feed token if used.
3. `DESIGN_NOTES.md` capturing the reference sites you reviewed, the palette/type options you considered, and the rationale for the chosen direction.
4. `CONTENT_REVIEW.md` listing every block drafted on FRD's behalf with a one-line summary so she can review them in one pass.
5. A `netlify.toml` configured for Astro + Netlify Forms.
6. A `.gitignore` and an initialized git repo with a clean first commit. Do **not** push to GitHub yourself — print the exact `gh repo create` / `git remote add` / `git push` commands the owner should run, plus the Netlify "Add new site → Import from Git" steps and the DNS records to point `frdantuono.eu` at Netlify (apex + www).

## Working style

- Before writing any code, produce a short plan and confirm: chosen palette/type direction (with a small swatch/screenshot if you can), the IA, and the Wikipedia/CV facts you'll use as the basis for the About page. Then build.
- Italian copy must be reviewed for fluency before commit — if uncertain on a phrasing, leave a `TODO: IT review` comment rather than guessing.
- Keep the first commit installable and visually complete; avoid leaving broken pages behind feature flags.
- After the build, print a concise punch list of everything still pending (real photos, live IG token, FRD's review of drafted copy, DNS, etc.).
