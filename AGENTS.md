# AGENTS.md — cv

Bilingual (Indonesian/English) CV site built with Astro, deployed to Cloudflare Workers.

## How to work

1. **Think before coding.** State your assumptions. If there are several interpretations, name them instead of picking one silently. Ask only when the answer cannot be found in the code or the repo docs; if it can be inferred, proceed.
2. **Simplicity first.** Write the minimum code that solves the request. No features, abstractions, or configuration that were not asked for. If 200 lines could be 50, rewrite it.
3. **Surgical changes.** Touch only what the task needs. Don't "improve" adjacent code, comments, or formatting. Match the existing style. If you notice unrelated dead code, mention it; don't delete it. Remove only the imports/variables your own change made unused.
4. **Goal-driven execution.** Define a check for "done": for a bug, write a test that reproduces it, then make it pass. For multi-step work, state a short plan as `step -> verify: check`. If you cannot run the tests, say so; never claim they passed.

## Code structure

- All CV content lives in `src/data/cv.ts`. Never invent or embellish facts (jobs, dates, skills, results); change only what the owner gives you, in both languages.
- The CV is a draft: both locales carry `noindex`, and `bun run deploy` refuses to publish while the draft flag is set. Don't clear the draft flag or deploy unless asked.
- Keep the A4 print layout working when you change styles.

## This project

- Bun. `bun run dev` · `bun run check` · `bun run build`. Deploy (`bun run deploy`) only when asked.
