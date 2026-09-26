# Farul Wananda CV

A compact bilingual curriculum vitae built with Astro. The static site provides Indonesian and English pages, a theme control, and an A4 print layout.

The CV content is a draft. Both locales carry `noindex`; the production deployment command checks that the draft flag has been cleared before publishing. Review every fact and translation in `src/data/cv.ts` before changing `draft` to `false`.

## Development

Requires Bun 1.4.2 or newer.

```sh
bun install --frozen-lockfile
bun run dev
```

Open `/en/` or `/id/`. The root URL redirects to `/en/`.

## Content and checks

Edit shared facts and localized text in `src/data/cv.ts`. Keep official names, dates, URLs, and technology names consistent across both languages. Review both pages and their print output after content changes.

```sh
bun run check
bun run build
bun run deploy:dry-run
```

## Cloudflare deployment

The Worker serves static files from `dist`. Its intended custom domain is `cv.farulwananda.my.id`; Astro uses the same domain for canonical URLs and the sitemap. Once the CV content is approved, set `draft: false`, run the checks above, and deploy with `bun run deploy`. Configure the custom domain in Cloudflare before directing visitors to it. The existing apex domain can then be assigned to the portfolio site.

No database, API binding, or runtime secret is required.
