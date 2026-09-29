// Copies the shared footer (_includes/partials/footer.njk) into every hand-built HTML page.
// Blog templates include the partial directly; static pages aren't templated, so they get a copy.
// Run after editing the footer:  npm run sync-footer
import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const footer = readFileSync("_includes/partials/footer.njk", "utf8").trimEnd();
const pages = execSync("git ls-files '*.html'", { encoding: "utf8" })
  .split("\n")
  .filter((f) => f && !f.startsWith("admin/") && !f.startsWith("_archive/"));

// The old footer, plus any "FOOTER" comment directly above it.
const OLD = /(?:[ \t]*<!--[^>]*FOOTER[\s\S]*?-->\s*)?[ \t]*<footer\b[\s\S]*?<\/footer>/;
let changed = 0;
for (const file of pages) {
  const html = readFileSync(file, "utf8");
  if (!OLD.test(html)) continue;
  const next = html.replace(OLD, footer);
  if (next !== html) { writeFileSync(file, next); changed++; }
}
console.log(`footer synced: ${changed} page(s) updated, ${pages.length} checked`);
