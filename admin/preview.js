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
        h("p", { className: "pv-listing-label" }, "Latest News on the News & Updates page"),
        h("div", { className: "pv-lead" },
          h("div", { className: "pv-lead-tags" },
            h("span", { className: "pv-lead-latest" }, "Latest"),
            categories.map((c) => h("span", { className: "pv-lead-tag", key: c }, c))
          ),
          h("h3", { className: "pv-lead-title" + (title ? "" : " pv-empty") }, title || "Post title"),
          h("p", { className: "pv-lead-date" }, formatDate(date)),
          h("p", { className: "pv-lead-summary" + (summary ? "" : " pv-empty") }, summary || "Summary shown on the listing"),
          h("span", { className: "pv-lead-btn" }, "Read More →")
        ),
        h("p", { className: "pv-note" }, "The newest post appears as this lead story; the next two sit beside it as smaller cards, and older posts appear as text rows.")
      )
    );
  },
});

CMS.registerPreviewStyle("/admin/preview.css");
CMS.registerPreviewTemplate("updates", UpdatePreview);
