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

- Static HTML pages, Tailwind CSS via CDN
- Built with [Eleventy](https://www.11ty.dev/): the News & Updates blog is generated from Markdown, and the hand-authored `.html` pages are run through Nunjucks so they can share the header and footer
- Posts edited through [Decap CMS](https://decapcms.org/) at `/admin/`
- Hosted on Netlify: `npm run build` outputs the site to `_site/`

## Working Locally

```bash
npm install
npm start          # site at http://localhost:8080
```

## News & Updates Blog

Each post is a Markdown file in `updates/posts/`, served at `/updates/<file-name>/`. The listing at `/updates/` is generated from these files, newest first.

| File | Purpose |
|---|---|
| `updates/posts/*.md` | One post each: title, date, summary, optional listing image, categories, and the article body |
| `updates/posts/posts.11tydata.js` | Gives every post the post layout and its URL |
| `_includes/layouts/post.njk` | Post page template (head, nav, footer, article) |
| `updates/index.njk` | News & Updates listing template |
| `admin/config.yml` | Editor fields and DecapBridge login settings for Decap CMS |

To try the editor locally without logging in, run `npm run cms` alongside `npm start`, then open http://localhost:8080/admin/. Saving there writes directly to `updates/posts/`.

Uploaded images are stored in `images/uploads/`.

## Deploying

Push to `main` and Netlify deploys automatically. See [DEPLOYMENT.md](DEPLOYMENT.md) for branches, previews, and settings.

## Header and Footer

Every page includes the same two partials:

| File | Purpose |
|---|---|
| `_includes/partials/header.njk` | Utility bar, main bar with docs search, section sub-nav, mobile menu |
| `_data/nav.js` | The links in the header and mobile menu, per section |
| `js/site.js` | Dropdowns (click, tap, keyboard), mobile menu, Ctrl/Cmd+K search |
| `_includes/partials/footer.njk` | Footer links and legal block |

The header works out the current section from the page URL (`/platform/`, `/exs/`, `/data/`), so pages need no extra setup. The footer's legal text is copied verbatim from spiderrock.net — change it only with the client's approval.

## Legal Pages

`/privacy-statement/`, `/cookie-policy/`, `/biometric-information-privacy-policy/`, and `/legal-disclaimers/` carry the live site's text verbatim. The Authorized Agent Designation Form linked from the Privacy Statement is in `files/legal/`.
