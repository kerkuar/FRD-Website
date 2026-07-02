# Content review checklist

> **Update 2 July 2026 — Campaign Bold redesign.** New items FRD must review, in addition to the list below:
>
> - **Article summaries** (`src/content/articles/*.mdx`) — 7 real articles added from the Archive & press spreadsheet; summaries drafted from titles only, marked `BOZZA`.
> - **Speech summaries** (`src/content/speeches/*.mdx`) — 6 real videos added; the "Bruxelles Speech" (April 2024) needs its exact event name confirmed.
> - **Featured press selection** (`src/data/campaign.json`) — 6 real headlines chosen; swap freely.
> - **Partecipa page copy** (IT/EN) — drafted; verify the Volt Italia link.
> - **Privacy policy** (IT/EN) — standard GDPR draft; have it legally checked before the campaign (political supporter data is special-category under Art. 9 GDPR).
> - **Newsletter copy** ("Dalla mia parte" / "On my side") — drafted.
> - **Photos** — hero: gold top on purple wall (FRD6); about: blue blazer. Alternates in `public/photos/`. OG share image built from the Volt stage photo.
> - **Campaign-mode placeholders** in `campaign.json` — to be written with FRD before any announcement.

Every block of copy that was drafted on FRD's behalf is listed here. Each draft is flagged inside the source file with `<!-- DRAFT — to be reviewed by FRD -->` so it's easy to find in the codebase.

## How to review

1. Open the site locally (`npm run dev`) or read it on Netlify after the first deploy.
2. For each item below, mark **OK** or rewrite directly in the named file.
3. Drafts are written in **first person** and meant to sound like FRD's voice — not formal, not bureaucratic.

---

## Home — `src/pages/index.astro` (IT) and `src/pages/en/index.astro`

| # | Block | Where in file | Notes |
|---|---|---|---|
| 1 | Hero kicker: "Co-presidente di Volt Europa" | hero section | Pulled from Wikipedia. |
| 2 | Hero headline: "Costruire l'Europa che ancora non c'è." | hero `<h1>` | DRAFT. EN: "Building the Europe that doesn't exist yet." |
| 3 | Hero lead paragraph | hero `<p>` | DRAFT. ~3 lines, voice-led, mentions democracy / climate / social justice. |
| 4 | Three feature blocks (About / Positions / Speeches) | features grid | DRAFT one-liners. Replace if FRD wants a different framing. |
| 5 | Closing CTA "Restiamo in contatto" | bottom CTA card | DRAFT. |

## About — `src/pages/chi-sono.astro` (IT) and `src/pages/en/about.astro`

| # | Block | Notes |
|---|---|---|
| 6 | Title: "Da Vico Equense a Bruxelles, una scelta alla volta." | DRAFT. Could land closer to her own framing. |
| 7 | Lead paragraph | DRAFT. Names year (1987), birthplace, Berlin, Volt role. All from Wikipedia. |
| 8 | Section "Il percorso" — three paragraphs | DRAFT. Sapienza → Geneva → AstraZeneca/Menarini/Berlin-Chemie → 2018-19 books → Volt 2019 → co-pres 2021/2023. All Wikipedia-sourced; no invention. |
| 9 | Section "Cosa faccio oggi" — two paragraphs | DRAFT. Mentions 2024 campaign, growth from 1 to 5 MEPs, training/community organising. |
| 10 | Section "I valori che mi guidano" — one paragraph | DRAFT. Compresses the six stances into one statement. Easy to rewrite. |
| 11 | Timeline of milestones | `src/data/timeline.ts` — 9 entries. DRAFT. Edit the `it` and `en` strings. |

## Positions — `src/pages/posizioni.astro` (IT) and `src/pages/en/positions.astro`

| # | Block | Notes |
|---|---|---|
| 12 | Page lead paragraph + disclaimer | DRAFT. |
| 13 | Six stance cards | `src/data/stances.ts` — DRAFT. Each in IT + EN. The six issues: democrazia europea, clima, asilo e migrazione, fisco e disuguaglianze, Ucraina/Gaza/pace, partecipazione. |
| 14 | Instagram block heading + body | OK to keep, generic copy. |

## Articles — placeholder examples in `src/content/articles/`

| # | File | Notes |
|---|---|---|
| 15 | `esempio-volt-europa.mdx` | **PLACEHOLDER** — delete or replace with a real article entry. |
| 16 | `esempio-clima-giustizia.mdx` | **PLACEHOLDER** — delete or replace. |
| 17 | `esempio-asilo-gjader.mdx` | **PLACEHOLDER** — delete or replace. |

The articles index pulls from this folder automatically. Add real entries as `.mdx` files; see `README.md`.

## Speeches — placeholder examples in `src/content/speeches/`

| # | File | Notes |
|---|---|---|
| 18 | `esempio-volt-congresso-2024.mdx` | **PLACEHOLDER** with a fake YouTube ID. Replace. |
| 19 | `esempio-st-gallen.mdx` | **PLACEHOLDER**. Replace with the actual St. Gallen Symposium talk if a recording exists. |
| 20 | `esempio-workshop-organising.mdx` | **PLACEHOLDER** for a self-hosted (file-uploaded) speech. Demonstrates the `type: hosted` flow. |

## Contact — `src/pages/contatti.astro` and `src/pages/en/contact.astro`

| # | Block | Notes |
|---|---|---|
| 21 | Lead paragraph | DRAFT. |
| 22 | Speaking-invitations note in the side card | DRAFT. Adjust to FRD's actual policy on bookings. |
| 23 | Form labels + intent options | OK; matches the brief (Stay in touch / Work together / Speaking invitation / Workshop / Campaign / Press / Other). |

---

## Things to verify, not rewrite

- **Birth year/place** in About (1987, Vico Equense): on Wikipedia, double-check FRD wants this on the public site.
- **Pen name** (Francesca Del Mar) — on About, mentioned briefly. Remove if she'd rather keep that off this site.
- **Pause of professional career in 2021** — phrased gently; check it matches how she'd put it.
- **"In Gjader ho visto da vicino"** in the asylum stance — this presumes a personal visit. From Wikipedia: yes, November 2024 visit confirmed. Worth confirming with her directly anyway.
- **Volt growth statistics** (1 → 5 MEPs, 3 → 13+ staff) — verified from Wikipedia. Update before launch if numbers have moved.

## Photos to add

Drop final portraits into `public/photos/` and pass `src` to the `<PhotoFrame>` components on Home and About. Suggested:

- `portrait-hero.jpg` — used on Home hero (4:5 portrait)
- `portrait-about.jpg` — used on About page (4:5 portrait)
- `og-default.png` — 1200×630 social-share image (currently missing; OG tags reference `/og-default.png`)

## Live data still to wire

- **Instagram live feed** — currently a static preview. See `README.md` → "Live Instagram feed" to switch on.
- **Substack** — only linked in footer. If FRD wants a section embed on Home, we can add a Substack iframe widget.

## Summary

22 distinct copy blocks drafted in IT + EN. All are confined to:

- `src/pages/*.astro` (Home, About, Positions, Articles, Speeches, Contact, in both IT and EN)
- `src/data/timeline.ts` (9 milestones)
- `src/data/stances.ts` (6 stance cards)
- `src/components/InstagramFeed.astro` (one helper paragraph)
- `src/components/Footer.astro` (one tagline)

Search the codebase for `DRAFT —` to jump straight to every item.
