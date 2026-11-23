// The DocSearch filter tag for the released version of the docs, read at build time so the
// search dialog's documentation results follow each new docs release. On the docs site
// (Docusaurus), "docs-default-current" is the pre-release "Upcoming" version, so it can't be
// used. We follow the docs homepage's first /docs/ link (always the released version) and read
// that page's docsearch:docusaurus_tag. If the docs site can't be reached during the build,
// fall back to the version that was live when this was written (checked 2026-11-23).
import nav from "./nav.js";

const FALLBACK = "docusaurus_tag:docs-default-8.6.10.4";

export default async function () {
  try {
    const get = async (url) => {
      const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
      if (!res.ok) throw new Error(`${url} → ${res.status}`);
      return res.text();
    };
    const home = await get(nav.docs);
    const link = home.match(/href="?(\/docs\/(?!next\/)[^"\s>#]+)/);
    if (!link) throw new Error("no /docs/ link on the docs homepage");
    const page = await get(new URL(link[1], nav.docs).href);
    const tag = page.match(/name="?docsearch:docusaurus_tag"?\s+content="?(docs-[^"\s>]+)/);
    if (!tag || tag[1].endsWith("-current")) throw new Error("no released-version tag found");
    return `docusaurus_tag:${tag[1]}`;
  } catch (err) {
    console.warn(`[docsSearchTag] using fallback ${FALLBACK}: ${err.message}`);
    return FALLBACK;
  }
}
