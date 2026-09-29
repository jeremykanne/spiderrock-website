# SpiderRock Website Deployment

## Overview

- **Live site**: https://spiderrock.netlify.app/ (currently in client review)
- **Repo**: https://github.com/jeremykanne/spiderrock-website
- **Hosting**: Netlify, auto-deploys from `main`
- **Build**: `npm run build` (Eleventy) — builds the News & Updates blog and copies every other page unchanged into `_site/`

## Deploying Changes

```bash
git add .
git commit -m "Describe the change"
git push
```

Netlify picks up every push to `main` and the live site updates within about a minute. Every page is served with `max-age=0`, so reviewers see the latest version on a normal reload.

## Working on a Branch

For larger changes you want to preview before they go live:

```bash
git checkout -b my-change
git push -u origin my-change
gh pr create
```

Netlify builds a deploy preview for each pull request and links it on the PR. When the PR is merged, GitHub deletes the branch automatically (auto-delete on merge is enabled).

## Site Structure

Each page is a directory with its own `index.html`, which gives clean URLs (e.g. `/platform/`).

```
spiderrock-website/
├── index.html      Homepage
├── about-us/
├── careers/
├── contact-us/
├── data/           Data & Analytics section
├── exs/            EXS pages
├── platform/       Platform pages
├── updates/
├── images/
└── logos/
```

## Settings

**GitHub**
- Default branch: `main`
- Auto-delete head branches on merge: on
- Secret scanning and push protection: on

**Netlify**
- Production branch: `main`
- Build command: `npm run build` (set in `netlify.toml`)
- Publish directory: `_site` (set in `netlify.toml`)
- Search engines: blocked with an `X-Robots-Tag: noindex` header in `netlify.toml` until launch

## Pending

- Contact forms are set up for ActiveCampaign and still need to be connected and tested.
- Add caching headers for `/images` and `/logos` before launch.

## Blog Editor

Posts are managed at `/admin/` (Decap CMS). Editors sign in with email and password through DecapBridge; each published post is committed to `main` and Netlify rebuilds the site automatically. See the README for how posts are stored.
