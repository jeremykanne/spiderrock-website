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
- News & Updates blog built with [Eleventy](https://www.11ty.dev/); every other page is copied through unchanged
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
| `admin/config.yml` | Editor fields and GitHub settings for Decap CMS |

To try the editor locally without logging in, run `npm run cms` alongside `npm start`, then open http://localhost:8080/admin/. Saving there writes directly to `updates/posts/`.

Uploaded images are stored in `images/uploads/`.

## Deploying

Push to `main` and Netlify deploys automatically. See [DEPLOYMENT.md](DEPLOYMENT.md) for branches, previews, and settings.
