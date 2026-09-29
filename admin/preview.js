// Decap CMS preview for News & Updates: the post page as it will publish, followed by
// the card it gets on the /updates/ listing. Uses Decap's globals (CMS, createClass, h).

const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

// Same output as the site's dateLong/dateShort filters (UTC, so the day never shifts).
function formatDate(value, short) {
  if (!value) return "";
  const d = new Date(value);
  if (isNaN(d)) return "";
  const month = MONTHS[d.getUTCMonth()];
  return `${short ? month.slice(0, 3) : month} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

const UpdatePreview = createClass({
  render() {
    const { entry, widgetFor, getAsset } = this.props;
    const get = (field) => entry.getIn(["data", field]);
    const title = get("title");
    const date = get("date");
    const summary = get("summary");
    const image = get("image");
    const categories = (get("categories") || []).toJS ? get("categories").toJS() : get("categories") || [];

    return h("div", {},
      h("section", { className: "pv-hero" },
        h("span", { className: "pv-back" }, "← All Updates"),
        h("p", { className: "pv-eyebrow" }, "News & Updates"),
        h("h1", { className: "pv-title" + (title ? "" : " pv-empty") }, title || "Post title"),
        h("p", { className: "pv-date" }, formatDate(date) || "Publish date")
      ),
      h("section", { className: "pv-article" },
        h("div", { className: "prose" }, widgetFor("body"))
      ),
      h("section", { className: "pv-listing" },
        h("p", { className: "pv-listing-label" }, "On the News & Updates page"),
        h("div", { className: "pv-card" },
          image
            ? h("img", { className: "pv-card-img", src: getAsset(image).toString(), alt: get("image_alt") || "" })
            : h("div", { className: "pv-card-ph" }),
          h("div", { className: "pv-card-body" },
            categories.length ? h("div", { className: "pv-tags" }, categories.map((c) => h("span", { className: "pv-tag", key: c }, c))) : null,
            h("h3", { className: "pv-card-title" }, title || "Post title"),
            h("p", { className: "pv-card-date" }, formatDate(date, true)),
            h("p", { className: "pv-card-summary" + (summary ? "" : " pv-empty") }, summary || "Summary shown on the listing"),
            h("span", { className: "pv-card-link" }, "Read More →")
          )
        ),
        h("p", { className: "pv-note" }, "The three newest posts show this card with the listing image; older posts appear as a text row.")
      )
    );
  },
});

CMS.registerPreviewStyle("/admin/preview.css");
CMS.registerPreviewTemplate("updates", UpdatePreview);
