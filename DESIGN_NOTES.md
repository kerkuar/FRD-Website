# Design notes — frdantuono.eu

This document captures the visual decisions behind the first build, plus two alternative directions you can switch to without rebuilding the site.

## Brief recap

- Tone requested: **warm personal-brand** — approachable, modern, photo-led, distinct from a politician's institutional site.
- Constraints: warm cream backgrounds (no cold whites or corporate blues), one serif for headings + one humanist sans for UI, generous whitespace, large editorial photography, Italian-first layouts (long words/sentences).
- Bilingual (IT/EN) with a header toggle, no analytics or cookie banner for the first build.

## Reference styles surveyed

While no live screenshots were captured in this session, the build draws on conventions seen on:

- **EU MEP personal pages** (Luisa Porritiello, Brando Benifei, Sandro Gozi) — clean header, biography-first, articles + interventions broken out, language toggle.
- **Italian public-intellectual sites** (Bifo Berardi, Ilaria Capua, Tomaso Montanari) — editorial typography, serif headlines, restrained palette, photo-led hero.
- **Civic communicators / writers** (Anand Giridharadas's *The Ink*, Christiane Amanpour's site, Naomi Klein's site, *Volt Europa* itself) — strong wordmark instead of logo, big photo on home, clear "Latest" hooks.
- **Activist personal sites** (Marlene Engelhorn, Vandana Shiva) — warm palette, pronounced editorial voice, uncomplicated nav.

Common patterns adopted: pill-shaped buttons, sticky transparent header with cream-tinted backdrop, serif italics used as in-line emphasis ("the Europe that doesn't exist yet" / "che ancora non c'è"), pre-numbered sections (01 / 02 / 03) borrowed from political-magazine aesthetics, large rounded image frames.

## Chosen direction (shipped)

**Name:** *Cream & Clay*

| Token | Value | Use |
|---|---|---|
| Cream-50 | `#FBF8F2` | Page background |
| Cream-100 | `#F7F2E8` | Card / footer backgrounds |
| Cream-200 | `#EFE6D2` | Image placeholders |
| Ink-900 | `#1C1812` | Primary text, primary buttons |
| Ink-700 | `#403832` | Secondary text |
| Ink-500 | `#7A6E63` | Muted captions |
| Clay-600 | `#A85733` | Accent (links, eyebrow text, hover) |
| Clay-700 | `#874427` | Stronger accent (button hover) |
| Sage-100 | `#E2E7DE` | Soft success / secondary tile |
| Sage-400 | `#7A9376` | Borders on success blocks |

**Typography**
- Headings: **Fraunces** (variable opsz/weight, 400 / 500 / 600). Modern warm serif with a slight literary quality. Used at large sizes for headlines, titles, eyebrow numerals.
- UI / body: **Inter** (400 / 500 / 600). Humanist, language-friendly (handles IT diacritics cleanly), excellent at small sizes.
- Both loaded via Google Fonts with `display=swap`. Self-hosting is straightforward later if performance demands it.

**Spacing & layout**
- 6xl max-width on the page container (1152px) keeping line lengths comfortable.
- Reading prose at `max-w-prose` (~68 ch).
- Generous vertical rhythm: 12–24 vertical units between sections.
- Rounded language: `rounded-2xl` / `rounded-3xl` for image frames and CTA blocks.

**Why this works**
- The cream + clay palette reads warm and human without feeling boutique. It deliberately sidesteps the cold blue/white that signals "institution" or "consultancy".
- Fraunces gives editorial heft to the long-form pages (About) without locking the site into a heavy literary feel — it modulates from playful (italic, large) to serious (small caps, regular weight) easily.
- The single accent (clay) keeps emphasis cheap. When you need urgency, you can introduce a sage or a bolder clay; the system has headroom.

## Alternative directions (not shipped — easy to swap)

### Alt A — *Mediterranean*

Off-white background (`#FAFAF7`), muted Adriatic blue (`#3D5A6C`) as accent, terracotta (`#C45A3F`) as secondary. Serif: **Cormorant Garamond** (more classical) paired with **Manrope** for UI.

Reads more "European federalist" and slightly cooler. Better if FRD wants the site to feel closer to Volt Europa's institutional palette.

To switch: edit the colour tokens in `tailwind.config.mjs` and the font URL in `src/layouts/Base.astro`.

### Alt B — *Bold Civic*

Near-black background (`#111111`) with cream type and a single saturated coral accent (`#FF5A5F`). Display serif: **GT Sectra** (or open-source alternative **Eczar**).

High-contrast, pulls attention, reads activist/movement-led. Higher visual cost: photos must be exceptional, and reading long-form bios on dark is harder. Use only if the site leans more toward campaigning than thinking.

To switch: most Tailwind tokens flip (`bg-cream-50` → `bg-ink-900`, `text-ink-900` → `text-cream-50`, etc.). Plan a couple of hours to rework component classes.

## Component inventory (shipped)

- `Header.astro` — sticky, cream-tinted, wordmark + nav + lang toggle, mobile drawer.
- `Footer.astro` — three-column footer with site nav, socials, contact email, year + colophon.
- `PhotoFrame.astro` — image frame with placeholder fallback (so layout doesn't shift before real photos arrive).
- `ArticleCard.astro` / `SpeechCard.astro` — uniform card + metadata layout.
- `StanceCard.astro` — large numbered card used on Posizioni.
- `InstagramFeed.astro` — graceful static preview with one-flag switch to live embed.
- `ContactForm.astro` — Netlify-Forms-ready, intent dropdown, honeypot, success redirect.
- `Base.astro` (layout) — `<html>`, head, OG tags, hreflang, fonts.

## Performance & accessibility notes

- All interactive elements have visible `:focus-visible` rings (clay accent on cream offset).
- Skip-to-content link in `Base.astro`.
- Header nav is keyboard-accessible; mobile drawer toggles `aria-expanded`.
- Images use `loading="lazy"`. When real portraits land, switch to Astro's `<Image>` for automatic `srcset` + AVIF.
- YouTube embeds use `youtube-nocookie.com` so the iframe doesn't drop tracking cookies before the user interacts.

## Things deliberately deferred

- Cookie banner / privacy policy / imprint page (per build brief).
- Analytics (none for now).
- Newsletter signup (Substack link in footer is enough for v1).
- Article detail pages (currently external links only — easy to add later by swapping the `<a>` to a route under `/articoli/[slug]`).
