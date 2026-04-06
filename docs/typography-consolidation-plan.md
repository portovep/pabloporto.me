# Typography Consolidation Plan

## Context

After migrating MDX pages from HTML-with-classNames to Markdown + Tailwind Typography (`prose`), two problems surfaced:

1. **Blanket `text-xl leading-6` on section wrappers** — pages set a 20px/fixed-24px base on the outer `<section>`, but `prose` overrides that with its own font-size (1rem default). Non-prose JSX children (layout divs, card text) end up at 20px while prose body text renders at 16px. The result: inconsistent sizes between adjacent elements on the same page.

2. **No consistent prose scale across the site** — content pages use plain `prose` (16px base), blog posts use `lg:prose-xl` (20px at large screens), and `NowEntry` also uses plain `prose`. No coherent rationale.

The goal is a single, documented type scale applied consistently everywhere.

---

## Recommended Type Scale

Based on UX/UI best practices for a text-heavy personal portfolio/blog:

| Role                       | Size           | Class                                 | px        |
| -------------------------- | -------------- | ------------------------------------- | --------- |
| Page title (H1)            | XL heading     | `text-4xl lg:text-5xl font-extrabold` | 36 → 48px |
| Section heading (H2)       | Large heading  | `text-3xl sm:text-4xl font-semibold`  | 30 → 36px |
| Card/subsection title (H3) | Medium heading | `text-xl font-semibold`               | 20px      |
| Intro / lead text          | Large body     | `text-lg leading-relaxed`             | 18px      |
| Prose body text            | Readable body  | `prose-lg` = 18px base                | 18px      |
| Component body text        | Standard body  | `text-base leading-relaxed`           | 16px      |
| Secondary / metadata       | Small          | `text-sm`                             | 14px      |
| Badges / tooltips          | Micro          | `text-xs`                             | 12px      |

**Rationale:**

- 18px (`prose-lg`) is the sweet spot for long-form reading — proven by research to reduce eye strain vs. 16px, without the "marketing-site" feel of 20px
- Blog articles get `prose-lg lg:prose-xl` — slightly larger on wide screens where line length is longest
- Removing blanket `text-xl` from section wrappers lets each element own its size explicitly, eliminating inheritance surprises
- `leading-relaxed` (1.625) everywhere body text appears — replaces the tight `leading-6` (1.2 ratio at 20px) that was causing cramped paragraphs
- Nav links: `text-base` is standard for desktop nav; the current `text-lg sm:text-base` is inverted

---

## Implementation

### 1. `styles/globals.css` — Remove absolute `font-size` from `.prose p`

The `.prose p { font-size }` override was added to preserve 20px paragraph text after the MDX migration. With `prose-lg` (which sets 18px natively), this override is no longer needed and conflicts with it. Remove that property. Keep all other overrides (h2 size, link colours, list spacing).

```css
/* REMOVE font-size only — keep line-height and margin */
.prose p {
    line-height: 1.625;
    margin-bottom: 1.5rem;
}
```

Also update the h2 `margin-top` from `4rem` to `3rem` — `prose-lg` has slightly larger spacing built in so the gap before headings remains generous.

### 2. Page section wrappers — remove `text-xl leading-6`

These classes fight prose sizing and add nothing once `prose-lg` manages the base:

| File                      | Before                        | After       |
| ------------------------- | ----------------------------- | ----------- |
| `app/about/page.tsx:15`   | `max-w-3xl text-xl leading-6` | `max-w-3xl` |
| `app/working/page.tsx:20` | `text-xl leading-6`           | _(remove)_  |
| `app/now/page.tsx:14`     | `w-full text-xl leading-6`    | `w-full`    |
| `app/blog/page.tsx`       | `text-xl leading-6`           | _(remove)_  |
| `app/stack/page.tsx`      | `text-xl leading-6`           | _(remove)_  |

### 3. Upgrade `prose` → `prose-lg` in all content sections

| Location                                                | Change               |
| ------------------------------------------------------- | -------------------- |
| `content/pages/working-intro.mdx` — `<section>`         | `prose` → `prose-lg` |
| `content/pages/about.mdx` — `<section>`                 | `prose` → `prose-lg` |
| `components/NowEntry.tsx` — non-collapsible content div | `prose` → `prose-lg` |
| `components/NowEntry.tsx` — collapsible content div     | `prose` → `prose-lg` |

### 4. Blog post — add `prose-lg` as mobile base

`app/blog/[id]/page.tsx`:

```tsx
// Before
'lg:prose-xl prose-table:m-1 prose-table:p-2 mt-10 prose dark:prose-invert';
// After
'prose-lg lg:prose-xl prose-table:m-1 prose-table:p-2 mt-10 prose dark:prose-invert';
```

### 5. `about.mdx` intro paragraphs — explicit `text-lg`

The two lead paragraphs in the flex container inherit from the section wrapper. Once `text-xl` is removed from the section, they fall back to 16px. Add `text-lg` explicitly to preserve the lead copy size:

```mdx
<div className="mb-6 leading-relaxed text-lg">I'm Pablo — ...</div>
<div className="leading-relaxed text-lg">This is where I write...</div>
```

### 6. `components/Card.tsx` — fix description size

Card descriptions at `text-xl leading-7` (20px) are oversized for a card summary:

```tsx
// Before
<p className="m-0 text-xl leading-7">{description}</p>
// After
<p className="m-0 text-base leading-relaxed">{description}</p>
```

### 7. `components/Header.tsx` — simplify nav link size

All 8 nav link classes have `text-lg sm:text-base`. The nav container already sets `text-base`, making both overrides redundant. Remove them:

```tsx
// Before (on every nav link)
'hover:text-emerald-600 text-muted-foreground sm:text-base mr-5 text-lg font-semibold ...';
// After
'hover:text-emerald-600 text-muted-foreground mr-5 font-semibold ...';
```

---

## What Does NOT Change

- `PageHeader` h1 sizing (`text-4xl lg:text-5xl`) — already correct
- H2 sizes in `GetInTouch`, `WorldMap`, `working/page.tsx` (`text-3xl sm:text-4xl`) — already correct
- `prose-purple lg:prose-sm` in `ProjectSummary` — intentionally compact for the project details panel
- `text-sm` / `text-xs` badge and metadata sizing — already correct
- Blog post badge, back-link, and date text sizes — already correct

---

## Verification

1. `/about`, `/working`, `/now`, `/blog`, `/stack` — prose body text should be visibly ~18px, consistent across pages
2. `/blog/[any-post]` — article body 18px on mobile, 20px on `lg` screens
3. `/` — Card descriptions should be smaller and tighter than before
4. Desktop nav — links unchanged in size (container's `text-base` takes effect)
5. Dark mode toggle — `prose-invert` colours remain correct
6. `npm run build` — 0 TypeScript errors
