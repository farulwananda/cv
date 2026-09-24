import { readFileSync } from "node:fs";

const locales = ["id", "en"];
const unpublished = locales.filter((locale) => {
  const html = readFileSync(
    new URL(`../dist/${locale}/index.html`, import.meta.url),
    "utf8",
  );

  return !html.includes('<meta name="robots" content="index, follow">');
});

if (unpublished.length > 0) {
  console.error(`Deployment blocked: ${unpublished.join(", ")} CV content is still marked as draft.`);
  process.exitCode = 1;
}
