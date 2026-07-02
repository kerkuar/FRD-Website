# Deployment — exact commands

Run these from this folder (`C:\Users\andi_\Downloads\My projects\FRD - Website`) on Andi's Windows machine. Where you see PowerShell-friendly syntax, use `wsl` / Git Bash if you prefer Bash.

## 1. One-time: install dependencies

```bash
npm install
```

## 2. Verify the build works locally

```bash
npm run dev      # http://localhost:4321 — Ctrl+C to stop
npm run build    # writes static files to ./dist
```

## 3. Initialise git + first commit

```bash
git init
git add .
git commit -m "Initial commit — frdantuono.eu"
git branch -M main
```

## 4. Create the GitHub repo and push

### Option A — using the GitHub CLI (`gh`)

```bash
gh auth login            # only the first time, if not logged in
gh repo create kerkuar/frdantuono-eu --public --source=. --remote=origin --push
```

### Option B — without `gh`

1. Open https://github.com/new
2. Owner: `kerkuar`. Name: `frdantuono-eu`. Visibility: Public. Do NOT initialise with README/.gitignore (we already have them).
3. Then locally:

```bash
git remote add origin https://github.com/kerkuar/frdantuono-eu.git
git push -u origin main
```

## 5. Connect to Netlify

1. https://app.netlify.com/start → **Import from Git** → GitHub → pick `kerkuar/frdantuono-eu`.
2. Build settings (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20
3. Click **Deploy**. First build takes ~1–2 minutes.

## 6. Custom domain — frdantuono.eu

In Netlify: **Site settings → Domain management → Add a domain → frdantuono.eu**

Netlify will then show two records to add at your domain registrar:

- `A`     `@`     `75.2.60.5`            (Netlify's load balancer)
- `CNAME` `www`   `<your-site>.netlify.app`

(Use the exact CNAME target Netlify shows in the dashboard — it's specific to this site.)

After DNS propagates (5 min – a few hours):

- Netlify auto-issues a free Let's Encrypt SSL cert.
- Set **Primary domain** to either `frdantuono.eu` or `www.frdantuono.eu` (apex preferred for political/personal sites). Toggle "Force HTTPS" on.

## 7. Wire up form notifications

In Netlify dashboard:

1. **Forms → contact** (the form name we declared in `ContactForm.astro`).
2. **Settings → Notifications → Add notification → Email notification**.
3. Recipient: `francescaromanadantuono.frd@gmail.com`. Optionally add `francescaromana.dantuono@volteuropa.org`.
4. Save. Test by submitting the form once after the first deploy is live.

## 8. (Optional) Live Instagram feed

See the `Live Instagram feed` section in `README.md`. After flipping the flag and pushing, Netlify rebuilds automatically — no extra setup.

## Subsequent deploys

Just push to `main`:

```bash
git add .
git commit -m "Update positions copy"
git push
```

Netlify rebuilds on every push. Expect ~1 minute from push to live.
