# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Production build
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix lint issues
npm run format       # Check formatting with Prettier
npm run format:fix   # Auto-fix formatting
npm run test:e2e     # Run Cypress E2E tests
npm run performance:check  # Check web vitals with Lighthouse
```

Pre-commit hooks (Husky) auto-run lint and format on staged files.

## Architecture

Personal website built with **Next.js 16 App Router**, **React 19**, **TypeScript 5.8** (strict mode), and **Tailwind CSS v4**.

### Folder layout

- `app/` — Routes only. Two layout groups:
    - `app/(standard)/` — Standard-width layout: blog, speaking, working, about, now, stack, bucharest
    - `app/(wide)/` — Wide layout: photography, travels
    - Root `app/` — Homepage and root layout
- `components/` — Reusable components. `components/ui/` holds shadcn/ui primitives.
- `content/` — Source content:
    - `posts/` — MDX blog posts with YAML frontmatter
    - `projects/` — Markdown project entries
    - `talks.ts`, `photography.ts` — Structured TypeScript data
- `lib/` — Utilities and data-fetching helpers (metadata, MDX parsing, Literal API)
- `styles/` — Tailwind base and design token overrides
- `cypress/` — E2E tests (`cypress/e2e/**/*_test.ts`)

### Key patterns

**Server Components by default.** Only add `"use client"` when you need interactivity, browser APIs, or React hooks.

**Path aliases** — always use `@/` imports, never relative paths:

```ts
import { Button } from '@/components/ui/button';
import { getPost } from '@/lib/posts';
```

**Component props** — define as `interface`, not `type`:

```ts
interface CardProps {
    title: string;
    description?: string;
}
```

**UI components** — check `components/ui/` (shadcn/ui, New York style) before building anything from scratch.

**Dark mode** — implemented via `next-themes` with class strategy (`.dark` on `<html>`). Use `dark:` Tailwind variants.

**Design tokens** — colours, typography, and spacing are defined as CSS variables in `styles/`. See `docs/brand-guidelines.md` for the full palette and scale.

**MDX** — blog posts use `@next/mdx` with `remark-gfm`, `remark-frontmatter`, and `rehype-pretty-code`. Frontmatter is parsed via `gray-matter`.

**Testing** — E2E only (no unit tests). Use `data-testid` attributes for Cypress selectors. Routes are auto-discovered from the `app/` directory by `cypress/support/tasks.ts`.

**Commits** — follow `<type>(<scope>): <subject>` format (e.g. `feat(blog): add tag filtering`). Types: `feat`, `fix`, `refactor`, `perf`, `chore`, `docs`, `style`, `test`, `build`, `ci`. Always ask the user for explicit permission before committing; show a summary of changes first. Never commit directly to `main`.

**Image optimization** — always use `next/image`. Add `priority` to above-the-fold images, `placeholder="blur"` for local static images, and a `sizes` prop for responsive images.

**Environment variables** — access via `lib/env.ts`, never read `process.env` directly in components. Required vars: `LITERAL_API_TOKEN`, `LITERAL_PROFILE_ID`, `LITERAL_PROFILE_HANDLE`.

**SEO** — every page must export `metadata` or call `createMetadata()` from `lib/metadata.ts`.

**React 19 specifics** — no `import React from 'react'` unless using a React API; use `ref` as a regular prop (`forwardRef` is deprecated); don't add explicit return types to components (TypeScript infers them), but do add return types to utility functions.

**Styling** — use semantic tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`) for shared UI. Accent colour is `emerald-500`/`emerald-600`. Use `cn()` from `@/lib/utils` for conditional classes. Never hardcode OKLCH/hex values in components — use tokens from `styles/globals.css`.

**Naming** — component files PascalCase (`PostSummary.tsx`), utility/lib files kebab-case (`posts.ts`), constants UPPER_SNAKE_CASE, test files snake_case with `_test.ts` suffix.

**Code formatting** — Prettier: 4-space tabs, 100-char print width, single quotes, semicolons, no trailing commas. `prettier-plugin-tailwindcss` auto-sorts class order — don't reorder manually.

## Anti-patterns to avoid

- Hand-rolling UI that shadcn/ui already provides
- Relative imports — always use `@/` aliases
- Using `any` — use `unknown` or a proper type
- Inline styles — use Tailwind classes
- Hardcoding colours in components — use semantic tokens
- New routes in `pages/` — all routes go in `app/`
- Skipping `data-testid` on interactive elements
- Committing with `--no-verify` — fix pre-commit hook failures instead
