# Farul Wananda CV

A compact, print-friendly curriculum vitae built with Astro and deployed as static assets on Cloudflare Workers.

> **Draft content:** The CV is based on the owner's supplied text. Contact details, descriptive job titles, translations, links, and portrait still require final review. Both language pages use `noindex` while `cv.draft` is `true`.

## Local development

Requires Bun 1.4.2 or later. Use the committed `bun.lock` for reproducible installs.

```bash
bun install --frozen-lockfile
bun run dev
```

Open `http://localhost:4321/en/` or `http://localhost:4321/id/`. Run `bun run check` and `bun run build` before submitting changes. Use `bun run preview` to inspect the built site locally.

## Updating the CV

Edit [`src/data/cv.ts`](src/data/cv.ts). Shared facts such as names, dates, links, and technologies appear once. Translatable fields contain `id` and `en` text; keep both versions aligned with the same factual source. The `projects` array supplies both language pages. Keep summaries and achievements concise so each printed document stays within two A4 pages. The portrait is stored at `src/assets/profile.jpg`. Phone and portfolio links are omitted because the supplied CV contained placeholders; the existing email and social links remain pending confirmation.

Before publishing, verify every name, date, role, certification, project, metric, link, image, and translation. Then set `draft: false` in `src/data/cv.ts`, review metadata for `/en/` and `/id/`, and check both printed PDFs. The `deploy` command refuses to publish while either built page is marked `noindex`.

## Cloudflare deployment

Astro builds a static site into `dist/`. Wrangler serves that directory directly through the configuration in `wrangler.jsonc`; no Worker runtime bindings or environment variables are required.

```bash
bun install --frozen-lockfile
bun run deploy:dry-run
```

Once both versions are approved, authenticate with `bunx wrangler login` and run `bun run deploy`. Connect `farulwananda.my.id` as a custom domain for the `farulwananda-cv` Worker in the Cloudflare dashboard. The root URL redirects to `/en/`; `/id/` serves the Indonesian version. Confirm the redirects, DNS, canonical URLs, sitemap, and TLS certificate after deployment. The repository configuration prepares the site for that domain but does not create DNS records or publish the Worker by itself.

## License

MIT. See [LICENSE](LICENSE).

The bundled [Taste Skill](https://github.com/Leonxlnx/taste-skill) files in `.agents/skills` are MIT-licensed by Leonxlnx; their copyright notice is preserved in `LICENSE`. The local `selia-ui-engineering` skill is retained for development reference.
