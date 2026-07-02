# Launch checklist — frdantuono.eu

Written for a non-technical reader. Steps 1–3 replace the GoDaddy "coming soon" page currently live on frdantuono.eu. Everything else can follow after.

---

## 1. Put the site on GitHub (~15 min, once)

Use **GitHub Desktop** (free app, no command line): desktop.github.com

1. Install it and sign in with the GitHub account (kerkuar).
2. File → **Add local repository** → choose this folder (`FRD - Website`). It will offer to create a repository — accept.
3. Write a short summary (e.g. "first version") → **Commit to main** → **Publish repository**. Keep "private" ticked if you prefer.

Note: the `Extra/` folder (original photos + the press-contacts spreadsheet with journalists' emails) is **excluded from publishing** on purpose — it stays only on your computer.

## 2. Connect Netlify (~10 min, once)

1. On netlify.com → **Add new site → Import an existing project → GitHub** → pick the repository.
2. Settings are detected automatically (from `netlify.toml`). Click **Deploy**.
3. After ~2 minutes you get a test address like `something.netlify.app` — open it and check the site.

From now on, every change committed via GitHub Desktop republishes the site automatically.

## 3. Point the domain here (kills the GoDaddy placeholder)

1. In Netlify: Site settings → **Domain management** → Add domain → `frdantuono.eu` (and `www.frdantuono.eu`). Netlify shows the exact DNS records to set.
2. In GoDaddy (where the domain lives): DNS settings →
   - `A` record for `@` → `75.2.60.5`
   - `CNAME` record for `www` → `<your-site-name>.netlify.app`
3. Wait up to a few hours. Netlify issues the security certificate automatically. The "Solutions for a Smarter Future" page disappears.

## 4. Forms (5 min)

In Netlify → **Forms**: you'll see two forms after the first submission — `contact` and `newsletter`.
Settings → Form notifications → add the email that should be alerted for each.
Free tier: 100 submissions/month across both forms — enough to start, upgrade or switch newsletter to Brevo when it grows.

## 5. Visitor statistics (5 min, free)

1. Create an account at **goatcounter.com** → choose a code, e.g. `frdantuono`.
2. Open `src/data/campaign.json` → put that code in `goatcounterCode` → commit via GitHub Desktop.
No cookie banner needed — it's cookieless by design.

## 6. Newsletter upgrade to Brevo (when ready, ~15 min)

1. Create a free account at **brevo.com** → Contacts → Forms → create a simple email-signup form.
2. Copy the form's **action URL** (Brevo shows it in the form's HTML embed, the `action="…"` address).
3. Paste it into `src/data/campaign.json` → `brevoFormAction` → commit.
The signup box switches from Netlify to Brevo automatically. Export any earlier signups from Netlify → Forms and import them into Brevo.

## 7. Content sign-off before sharing widely

- Review every item in `CONTENT_REVIEW.md` (all drafts are marked).
- New since the redesign: article and speech summaries (drafted from titles — FRD should check them), the "Partecipa" page copy, the privacy policy (have someone with legal eyes read it), the featured-press selection, and the photo choices (swap any photo by replacing files in `public/photos/` — alternates already included: `portrait-alt-pink.jpg`, `portrait-alt-gold.jpg`).
- The Domani article "C'è bisogno di una costituente europea" links to a Google Drive PDF — replace with the public article link and make sure the Drive file is viewable by anyone.
- Verify the Volt Italia link on the Partecipa page and add volunteer/donate links when they exist.

## 8. The day she announces (2 min)

Open `src/data/campaign.json`:
- change `"mode": "personal"` to `"mode": "campaign"`
- write the real campaign `headline` and `lead` (placeholders are marked)
- commit. The homepage switches to campaign mode: the announcement message + a gold "Unisciti alla campagna" button.

## Everything editable in one place

`src/data/campaign.json` controls: campaign mode, hero message, the homepage video (paste a YouTube ID), featured press, the press strip, endorsements, support links, analytics and the newsletter connection. The full 151-item press archive extracted from the spreadsheet lives in `src/data/archive.json`, ready for a future "Archivio" page.
