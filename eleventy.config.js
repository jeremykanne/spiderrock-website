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
  // Everything after the three featured posts, paginated on /updates/.
  eleventyConfig.addCollection("olderPosts", (api) =>
    api.getFilteredByGlob("updates/posts/*.md").sort((a, b) => b.date - a.date).slice(3)
  );

  return {
    dir: { input: ".", output: "_site", includes: "_includes" },
    markdownTemplateEngine: false,
  };
}
