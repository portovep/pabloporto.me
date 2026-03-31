# Modernization Plan for pabloporto.me

**Last Updated:** 2026-03-30
**Status:** In Progress

---

## Current State (2026-03-30)

| Area                                      | Status                                                                    |
| ----------------------------------------- | ------------------------------------------------------------------------- |
| App Router migration                      | ✅ Complete — `pages/` fully removed                                      |
| TypeScript strict mode                    | ✅ Complete — `strict: true`, `strictNullChecks: true`                    |
| Remove React imports                      | ✅ Complete — zero legacy imports                                         |
| `lib/metadata.ts`                         | ✅ Complete — `createMetadata()` helper used across all pages             |
| `lib/env.ts`                              | ✅ Complete — simple `as const` approach (Zod skipped as unnecessary)     |
| `next.config.ts`                          | ✅ Complete — TypeScript config                                           |
| `app/error.tsx`                           | ✅ Complete                                                               |
| `app/not-found.tsx`                       | ✅ Complete                                                               |
| `components/Meta/Meta.tsx`                | ✅ Deleted                                                                |
| `pages/api/hello.ts`                      | ✅ Deleted                                                                |
| shadcn/ui adoption                        | ✅ Complete — Button, Card, Dropdown, Tooltip, Badge installed and in use |
| Dark mode                                 | ✅ Complete — shadcn ThemeProvider, system/light/dark toggle              |
| Node.js 24                                | ✅ Complete — `.nvmrc`, `package.json`, CI pipeline updated               |
| Remove `: React.ReactElement` annotations | ✅ Complete                                                               |
| Flatten `ui/` subfolders                  | ✅ Complete                                                               |
| `WorldMap/WorldMap.tsx` flatten           | ⚠️ Skipped — keep subfolder (client/server split needed)                  |
| Vercel Analytics in layout                | ✅ Complete                                                               |
| Turbopack for dev                         | ✅ Complete                                                               |
| ESLint flat config migration              | ❌ Not done                                                               |

---

## Next Steps

Priority order — each step is independently completable.

---

### Step 1 — Remove `: React.ReactElement` return type annotations

**Effort:** Low · **Risk:** None

TypeScript infers JSX return types automatically. Explicit annotations add noise with no benefit.

Files to update (11):

| File                                      | Change                        |
| ----------------------------------------- | ----------------------------- |
| `components/PostSummary.tsx`              | Remove `: React.ReactElement` |
| `components/PageContainer.tsx`            | Remove `: React.ReactElement` |
| `components/ThemeToggle.tsx`              | Remove `: React.ReactElement` |
| `components/Card.tsx`                     | Remove `: React.ReactElement` |
| `components/Header.tsx`                   | Remove `: React.ReactElement` |
| `components/Footer.tsx`                   | Remove `: React.ReactElement` |
| `components/PostBody.tsx`                 | Remove `: React.ReactElement` |
| `components/PhotoCard.tsx`                | Remove `: React.ReactElement` |
| `components/ui/StackItem/StackItem.tsx`   | Remove `: React.ReactElement` |
| `components/ui/PageHeader/PageHeader.tsx` | Remove `: React.ReactElement` |
| `components/ui/Date/Date.tsx`             | Remove `: React.ReactElement` |

Pattern:

```tsx
// Before
export default function Card({ title }: CardProps): React.ReactElement {

// After
export default function Card({ title }: CardProps) {
```

Verify: `npm run build && npm run lint`

---

### Step 2 — Flatten `components/ui/` subfolders

**Effort:** Low · **Risk:** Low (update imports)

Three single-file components are still in nested folders inside `components/ui/`. Flatten them
to match the rest of the component structure.

| Current path                              | Target path                    |
| ----------------------------------------- | ------------------------------ |
| `components/ui/Date/Date.tsx`             | `components/ui/Date.tsx`       |
| `components/ui/PageHeader/PageHeader.tsx` | `components/ui/PageHeader.tsx` |
| `components/ui/StackItem/StackItem.tsx`   | `components/ui/StackItem.tsx`  |

Update barrel export in `components/ui/index.ts` accordingly.
Update any direct imports of these components across the codebase.

Verify: `npm run build` + all E2E tests pass.

---

### Step 3 — Add Vercel Analytics to `app/layout.tsx`

**Effort:** Low · **Risk:** None

Analytics was previously in `pages/_app.tsx` and was lost during the App Router migration.

```bash
npm install @vercel/analytics
```

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <ThemeProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
```

Verify: Deploy to Vercel preview and confirm events appear in the Analytics dashboard.

---

### Step 4 — Enable Turbopack for dev

**Effort:** Trivial · **Risk:** None

One flag change for faster hot reload during local development. No code changes required.

```json
// package.json
"dev": "next dev --turbo"
```

Verify: `npm run dev` starts without errors and HMR works as expected.

---

### Step 5 — Migrate to ESLint flat config

**Effort:** Low · **Risk:** Low

`next lint` is deprecated in favour of the ESLint CLI. Next.js 16 will remove it entirely.
Running `npx @next/codemod@canary next-lint-to-eslint-cli .` automates the migration.

```bash
npx @next/codemod@canary next-lint-to-eslint-cli .
```

This replaces `.eslintrc.json` with `eslint.config.mjs` and updates `package.json` lint script
from `next lint` to `eslint .`.

Verify: `npm run lint` passes with no warnings.

---

## Completed — for reference

### shadcn/ui Design System

Adopted shadcn/ui as the component library. Installed components:

| Component     | File                              | Used in                                                        |
| ------------- | --------------------------------- | -------------------------------------------------------------- |
| Button        | `components/ui/button.tsx`        | Header, ThemeToggle, FilteredProjects, GetInTouch, making page |
| Card          | `components/ui/card.tsx`          | Home page cards                                                |
| Dropdown Menu | `components/ui/dropdown-menu.tsx` | ThemeToggle                                                    |
| Tooltip       | `components/ui/tooltip.tsx`       | WorldMap                                                       |
| Badge         | `components/ui/badge.tsx`         | Blog post tags, PostSummary, ProjectSummary                    |

Migration pattern for link-buttons: use `asChild` prop with `<a>` or `<Link>`.

```tsx
<Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-white">
    <a href="mailto:pablo@pabloporto.me">Get in Touch</a>
</Button>
```

Custom components remaining in `components/ui/` (intentional — not shadcn equivalents):

- `Date.tsx` — date formatter using `date-fns`
- `PageHeader.tsx` — page title + subtitle layout
- `StackItem.tsx` — stack page list item with logo
- `coffee.tsx` / `heart.tsx` — animated SVG icons (Framer Motion)

---

## Architecture reference

```
app/
  layout.tsx          # Root layout — Header, Footer, ThemeProvider
  page.tsx            # Home
  about/page.tsx
  blog/
    page.tsx
    [id]/page.tsx
  working/page.tsx
  making/page.tsx
  traveling/page.tsx
  reading/page.tsx
  speaking/page.tsx
  stack/page.tsx
  error.tsx
  not-found.tsx

components/
  ui/                 # shadcn/ui + custom primitives
    button.tsx        # shadcn
    card.tsx          # shadcn
    badge.tsx         # shadcn
    dropdown-menu.tsx # shadcn
    tooltip.tsx       # shadcn
    Date/             # custom (to be flattened — Step 2)
    PageHeader/       # custom (to be flattened — Step 2)
    StackItem/        # custom (to be flattened — Step 2)
    coffee.tsx        # custom animated icon
    heart.tsx         # custom animated icon
    index.ts          # barrel export
  WorldMap/           # kept as folder — WorldMap.tsx + WorldMapClient.tsx
  Header.tsx
  Footer.tsx
  ...

lib/
  metadata.ts         # createMetadata() helper
  env.ts              # typed env vars
  posts.ts
  projects.ts
  talks.ts
  literal.ts

styles/
  globals.css         # Tailwind + shadcn CSS variables + dark mode overrides
```
