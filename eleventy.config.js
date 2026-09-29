// Eleventy builds only the News & Updates blog (updates/). Every other page on the
// site is hand-authored HTML and is copied through to _site/ unchanged.

const PASSTHROUGH = [
  "index.html",
  "about-us",
  "careers",
  "contact-us",
  "data",
  "exs",
  "platform",
  "images",
  "logos",
  "_archive",
  "admin",
];

const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

// Post dates are calendar days; format in UTC so a date never shifts across time zones.
function formatDate(value, style) {
  const d = new Date(value);
  const month = MONTHS_LONG[d.getUTCMonth()];
  return `${style === "short" ? month.slice(0, 3) : month} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

export default function (eleventyConfig) {
  for (const path of PASSTHROUGH) eleventyConfig.addPassthroughCopy(path);

  // Hand-authored pages are .html; only Markdown posts and Nunjucks templates are built.
  eleventyConfig.setTemplateFormats(["md", "njk"]);
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("DEPLOYMENT.md");
  eleventyConfig.ignores.add("_archive/**");

  eleventyConfig.addFilter("dateLong", (d) => formatDate(d, "long"));
  eleventyConfig.addFilter("dateShort", (d) => formatDate(d, "short"));
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));

  eleventyConfig.addFilter("head", (arr, n) => arr.slice(0, n));
  eleventyConfig.addFilter("tail", (arr, n) => arr.slice(n));

  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("updates/posts/*.md").sort((a, b) => b.date - a.date)
  );
  // Categories for the News & Updates filter, most posts first: [{ name, slug, count }]
  const PAGE_SIZE = 20;
  const slug = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const sortedPosts = (api) => api.getFilteredByGlob("updates/posts/*.md").sort((a, b) => b.date - a.date);
  const categoriesOf = (posts) => {
    const counts = new Map();
    for (const p of posts) for (const c of p.data.categories || []) counts.set(c, (counts.get(c) || 0) + 1);
    return [...counts].map(([name, count]) => ({ name, slug: slug(name), count })).sort((a, b) => b.count - a.count);
  };
  eleventyConfig.addCollection("categoryList", (api) => categoriesOf(sortedPosts(api)));

  // One entry per page of each category: /updates/category/<slug>/ and /updates/category/<slug>/page/<n>/
  eleventyConfig.addCollection("categoryPages", (api) => {
    const posts = sortedPosts(api);
    const pages = [];
    for (const cat of categoriesOf(posts)) {
      const inCat = posts.filter((p) => (p.data.categories || []).includes(cat.name));
      const total = Math.ceil(inCat.length / PAGE_SIZE);
      const href = (n) => `/updates/category/${cat.slug}/${n > 0 ? `page/${n + 1}/` : ""}`;
      const hrefs = Array.from({ length: total }, (_, n) => href(n));
      for (let n = 0; n < total; n++) {
        pages.push({
          ...cat, pageNumber: n, total, hrefs, url: hrefs[n],
          previous: n > 0 ? hrefs[n - 1] : null, next: n < total - 1 ? hrefs[n + 1] : null,
          posts: inCat.slice(n * PAGE_SIZE, (n + 1) * PAGE_SIZE),
        });
      }
    }
    return pages;
  });

  // Data & Analytics posts only, for the Data section's own News page (/data/updates/).
  eleventyConfig.addCollection("dataPosts", (api) =>
    sortedPosts(api).filter((p) => (p.data.categories || []).includes("Data & Analytics"))
  );
  eleventyConfig.addCollection("dataOlderPosts", (api) =>
    sortedPosts(api).filter((p) => (p.data.categories || []).includes("Data & Analytics")).slice(3)
  );

  // Everything after the three featured posts, paginated on /updates/.
  eleventyConfig.addCollection("olderPosts", (api) =>
    api.getFilteredByGlob("updates/posts/*.md").sort((a, b) => b.date - a.date).slice(3)
  );

  return {
    dir: { input: ".", output: "_site", includes: "_includes" },
    markdownTemplateEngine: false,
  };
}
