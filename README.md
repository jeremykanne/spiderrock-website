# SpiderRock Website Redesign

Redesign of the SpiderRock website, currently in client review.

**Live site**: https://spiderrock.netlify.app/

## Sections

| Path | Page |
|---|---|
| `/` | Homepage |
| `/platform/` | Trading Platform |
| `/data/` | Data & Analytics |
| `/exs/` | SpiderRock EXS — Brokerage & Market Access |
| `/about-us/` | Leadership |
| `/careers/` | Careers |
| `/updates/` | News & Updates |
| `/contact-us/` | Contact Us |

Each page is a directory with its own `index.html`. Shared assets live in `images/` and `logos/`.

## Tech

- Static HTML, no build step
- Tailwind CSS via CDN
- Hosted on Netlify, auto-deploys from `main`

## Working Locally

Open `index.html` in a browser, or serve the folder so directory links resolve:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploying

Push to `main` and Netlify deploys automatically. See [DEPLOYMENT.md](DEPLOYMENT.md) for branches, previews, and settings.
