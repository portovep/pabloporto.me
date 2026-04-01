# AI Coding Agent Guidelines

**Last Updated:** 2026-03-30
**Purpose:** Project-specific guardrails for AI coding agents. Documents only what cannot be inferred from reading the code.

---

## Table of Contents

1. [Architecture & Framework](#architecture--framework)
2. [Component Library](#component-library)
3. [TypeScript Conventions](#typescript-conventions)
4. [File Structure & Organization](#file-structure--organization)
5. [Styling & CSS](#styling--css)
6. [Import Patterns](#import-patterns)
7. [Naming Conventions](#naming-conventions)
8. [Code Formatting](#code-formatting)
9. [Git & Commits](#git--commits)
10. [Testing](#testing)
11. [Image Optimization](#image-optimization)
12. [Environment Variables](#environment-variables)
13. [Pre-commit Checks](#pre-commit-checks)

---

## Architecture & Framework

### Next.js App Router

This is a **fully App Router site** — all routes live in `app/`. The `pages/` directory has been removed.

- **MUST** use Server Components by default — only add `'use client'` when the component needs browser APIs, event handlers, or React state
- **MUST** use async Server Components for data fetching (no `useEffect` + fetch)
- **MUST** export `metadata` or call `createMetadata()` from `lib/metadata.ts` for SEO on every page

### Theming

Dark mode uses `next-themes` with class-based `.dark` on `<html>`. Preference is persisted in `localStorage` under the key `pabloporto-theme`. A blocking inline script in `app/layout.tsx` prevents flash on load. Use the `dark:` Tailwind prefix for dark-mode variants.

### React Patterns

- **MUST** use React 19 patterns — no `import React from 'react'` unless using a React API
- **MUST** use `ref` as a regular prop (React 19 — `forwardRef` is deprecated)
- **MUST NOT** add explicit return types to React components (TypeScript infers them)

### Next.js toooling

- **MUST** When starting work on a Next.js project, ALWAYS call the `init` tool from next-devtools-mcp FIRST to set up proper context and establish documentation requirements. Do this automatically without being asked.\*\*

## Component Library

### Use shadcn/ui first

- **MUST** check shadcn/ui before building any UI element — buttons, badges, dialogs, inputs, selects, tabs, tooltips, dropdowns, cards all have shadcn equivalents
- **MUST NOT** hand-roll components that shadcn/ui already provides
- **MUST** install missing shadcn components with `npx shadcn@latest add [component]`
- **MUST** use the `asChild` prop (Radix Slot pattern) when a Button needs to render as `<a>` or `<Link>`
- **MAY** create custom components only for domain-specific UI with no shadcn equivalent (e.g. `WorldMap`, `PhotoCard`, `PostSummary`)
- Full component list: https://ui.shadcn.com/components

### Available UI Components

Importable from `@/components/ui`:

- `Button` — all interactive buttons; use `asChild` for link-buttons
- `Badge` — tags and labels
- `Card`, `CardHeader`, `CardContent`, `CardFooter`, `CardTitle`, `CardDescription`
- `Date` — date formatting
- `PageHeader` — page title + subtitle layout
- `StackItem` — stack page list items

### Adding New shadcn/ui Components

```bash
npx shadcn@latest add [component]
```

After installing, fix the generated import path: shadcn defaults to `@/lib/utils` which is correct for this project — verify the import resolves to `lib/utils.ts` at root.

Export from `components/ui/index.ts` if the component is used across multiple pages.

---

## TypeScript Conventions

`tsconfig.json` has `strict: true` and `strictNullChecks: true`.

- **MUST** define typed props for all components using `interface` (not `type`)
- **MUST** use `type` for utility types and unions
- **MUST NOT** use `any` — use `unknown` if the type is truly unknown
- **MUST NOT** add explicit return types to React components (let TypeScript infer)
- **MUST** add return types to utility functions: `export function formatDate(d: Date): string`
- **MUST** co-locate prop types with their component; place shared types in the relevant `lib/` file

---

## File Structure & Organization

```
app/                    # Routes only — pages, layouts, route handlers
  [route]/page.tsx
  layout.tsx
  error.tsx
  not-found.tsx
components/             # Reusable React components (flat by default)
  ui/                   # shadcn/ui + custom primitives
    index.ts            # Barrel export
content/                # Source content
  posts/                # Markdown blog posts
  projects/             # Markdown project entries
  travels/              # Travel data
  talks.ts              # Talk data (TypeScript)
lib/                    # Utilities and data fetching
  utils.ts              # cn() helper — import as @/lib/utils
  metadata.ts           # createMetadata() helper
  env.ts                # Typed env vars
  posts.ts / projects.ts / talks.ts / literal.ts
styles/
  globals.css           # Design tokens (CSS vars), Tailwind base
public/images/          # Static assets
cypress/e2e/            # E2E tests
```

- **MUST** prefer single-file components (`Header.tsx`) over folders
- **MUST** use folders only when a component has multiple related files
- **MUST** export components as default exports, types as named exports

---

## Styling & CSS

See **`docs/brand-guidelines.md`** for the full colour palette, typography scale, spacing tokens, and dark mode guidance. Key rules:

- **MUST** use Tailwind CSS for all styling — no custom CSS unless required for complex animations or third-party overrides
- **MUST** use semantic tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`) for shared UI so light/dark themes stay consistent
- **MUST** use `cn()` from `@/lib/utils` for conditional or merged class names
- **MUST** use `emerald-500` / `emerald-600` as the accent colour for links, CTAs, and hover states (see brand guidelines)
- **MUST** use design tokens defined in `styles/globals.css` — do not hardcode OKLCH values in component files
- **MUST** use `@tailwindcss/typography` for prose/markdown content

---

## Import Patterns

- **MUST** use `@/` path alias for all imports — no relative imports (`../../`)
- **MUST** use barrel exports from `@/components/ui` when available; import directly from the component file otherwise
- Key aliases: `@/components`, `@/lib`, `@/app`

```typescript
// ✅ Correct
import { Card, CardContent } from '@/components/ui';
import { getSortedPostsData } from '@/lib/posts';
import { cn } from '@/lib/utils';

// ❌ Wrong — relative import
import { Card } from '../../components/ui/card';
```

---

## Naming Conventions

- **Component files:** PascalCase — `PostSummary.tsx`, `BookCard.tsx`
- **Utility/lib files:** kebab-case — `posts.ts`, `markdown.ts`
- **Constants:** UPPER_SNAKE_CASE — `DATE_FORMAT_MONTH_DAY_YEAR`
- **Test files:** snake_case with `_test.ts` suffix — `blog_page_test.ts`

---

## Code Formatting

Prettier config (`.prettierrc`):

| Setting           | Value    |
| ----------------- | -------- |
| `tabWidth`        | 4        |
| `printWidth`      | 100      |
| `singleQuote`     | true     |
| `semi`            | true     |
| `trailingComma`   | `'none'` |
| `bracketSameLine` | true     |

`prettier-plugin-tailwindcss` auto-sorts Tailwind class order — do not manually reorder classes.

---

## Git & Commits

### Commit Message Format

```
<type>(<scope>): <subject>

<body — explain the why, not the what>
```

Types: `feat`, `fix`, `refactor`, `perf`, `chore`, `docs`, `style`, `test`, `build`, `ci`

### Commit Best Practices

- **MUST** run `npm run format:fix` and `npm run lint` before every commit — fix all issues before proceeding
- **MUST** keep commits focused (one logical change per commit)
- **MUST NOT** commit directly to `main` — always use a feature branch
- **MUST** always ask the user for explicit permission before committing
- **MUST** show a summary of changes before asking for permission

---

## Testing

- **MUST** write Cypress E2E tests for critical user flows
- **MUST** use `data-testid` attributes as test selectors (not CSS classes or text)
- **MUST** run `npm run test:e2e` before committing UI changes
- **MUST** update tests when changing component structure or `data-testid` values
- Test files live in `cypress/e2e/` and follow the `page-name_test.ts` naming pattern

---

## Image Optimization

- **MUST** use `next/image` for all images
- **MUST** add `priority` to above-the-fold images
- **MUST** use `placeholder="blur"` for statically imported local images (Next.js auto-generates `blurDataURL`); for remote URLs you must supply `blurDataURL` explicitly or omit the prop
- **MUST** add `sizes` prop for responsive images

---

## Environment Variables

Required at build time (reading page and API integrations):

- `LITERAL_API_TOKEN`
- `LITERAL_PROFILE_ID`
- `LITERAL_PROFILE_HANDLE`

Access through `lib/env.ts` — do not read `process.env` directly in components.

```typescript
// lib/env.ts
export const env = {
    LITERAL_API_TOKEN: process.env.LITERAL_API_TOKEN,
    LITERAL_PROFILE_ID: process.env.LITERAL_PROFILE_ID,
    LITERAL_PROFILE_HANDLE: process.env.LITERAL_PROFILE_HANDLE
} as const;
```

---

## Pre-commit Checks

The Husky pre-commit hook runs `npm run format` and `npm run lint` automatically. If it fails, fix the issues and commit again — never use `--no-verify`.

Manual checklist before committing:

- [ ] `npm run format:fix` — formatting clean
- [ ] `npm run lint` — no errors
- [ ] `npm run build` — build succeeds
- [ ] `npm run test:e2e` — all tests pass (for UI changes)

---

## Anti-Patterns

1. **Hand-rolling shadcn components** — always check https://ui.shadcn.com/components first
2. **Relative imports** — always use `@/` aliases
3. **Importing React unnecessarily** — only import when using React APIs
4. **Using `any`** — use `unknown` or a proper type
5. **Inline styles** — use Tailwind classes
6. **Hardcoding OKLCH/hex colours in components** — use semantic tokens or the emerald palette (see brand guidelines)
7. **New Pages Router routes** — all new routes go in `app/`
8. **Skipping `data-testid`** on interactive elements
9. **Committing without running lint + format**

---

## Quick Reference

```bash
npm run dev              # Start dev server (Turbopack)
npm run build            # Production build
npm run lint             # ESLint check
npm run lint:fix         # ESLint auto-fix
npm run format           # Prettier check
npm run format:fix       # Prettier auto-fix
npm run test:e2e         # Cypress E2E tests
```

**Key files:**

- `tsconfig.json` — TypeScript config
- `.prettierrc` — Prettier config
- `eslint.config.mjs` — ESLint flat config
- `components.json` — shadcn/ui config
- `tailwind.config.js` — Tailwind config
- `next.config.ts` — Next.js config
- `styles/globals.css` — design tokens
- `docs/brand-guidelines.md` — colours, typography, spacing
