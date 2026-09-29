// Every Markdown file in this folder is a News & Updates post, served at /updates/<file-name>/.
export default {
  layout: "layouts/post.njk",
  permalink: (data) => `updates/${data.page.fileSlug}/index.html`,
};
