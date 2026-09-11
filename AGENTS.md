<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

Project: CodeWithPurpose India

## Project overview

This repository contains the CodeWithPurpose India website. It is a Next.js app using:

- Next.js 16.3.4
- React 19.2.8
- TypeScript 5
- Tailwind CSS 4
- ESLint 9

## Working rules

- Keep changes focused and consistent with the current codebase.
- Prefer small, reviewable edits over broad rewrites.
- Do not add unnecessary dependencies or new frameworks unless explicitly requested.
- Match the existing app-router structure in `app/`.
- Keep styling aligned with the current Tailwind-based design patterns.
- Update docs when behavior, setup, or contributor workflow changes.

## Key files

- `app/page.tsx` — main landing page
- `app/layout.tsx` — global layout
- `app/globals.css` — global styles
- `package.json` — scripts and dependencies
- `README.md` — project overview and setup
- `CONTRIBUTING.md` — contribution workflow
- `CODE_OF_CONDUCT.md` — community expectations
- `LICENSE` — Apache 2.0 license

## Useful commands

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
npm run check
```

## Repo-specific notes

- Use Node.js 24 LTS.
- The current project is a simple website starter and should remain easy to understand and maintain.
- If a change affects developer setup, update the relevant docs in the same PR.

## Before finishing

- Run `npm run check` for the standard verification pass when relevant.
- If you change the app structure, configuration, or public behavior, mention what changed clearly.
- Keep the README and contributor docs accurate.
