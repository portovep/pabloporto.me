# MDX Migration Plan

**Branch:** `feature/mdx-migration`  
**Status:** ✅ Complete

## Goal

Adopt MDX as the primary content format for blog posts and static prose pages, separating content from layout logic and enabling React components inside content files.

## Library Choice: `@next/mdx`

`@next/mdx` was chosen over alternatives:

- **Not `next-mdx-remote`** — RSC incompatibility with Next.js 16 (issue #488)
- **Not Velite** — overkill for a personal site with 17 posts; adds a separate build step, config file, and generated `.velite/` dir for no meaningful gain

`@next/mdx` gives native RSC support, zero runtime overhead, and one `mdx-components.tsx` at the project root that covers all MDX files automatically.

## What Migrated and What Didn't

| Page / Content                               | Migrated? | Reason                                                                              |
| -------------------------------------------- | --------- | ----------------------------------------------------------------------------------- |
| `content/posts/*.md` → `.mdx`                | ✅        | Core motivation — removes `dangerouslySetInnerHTML`, enables components in posts    |
| `app/about/page.tsx`                         | ✅        | Pure prose with inline links — ideal MDX candidate                                  |
| `app/stack/page.tsx`                         | ✅        | 9 hardcoded `StackItem` calls became readable MDX                                   |
| `app/making/page.tsx`                        | ✅        | 5 near-identical JSX cards became MDX + shared `ProjectCard`                        |
| `app/working/page.tsx` (prose sections only) | ✅        | Intro, "What I do" list, Principles grid extracted; `FilteredProjects` stays in TSX |
| `app/reading/page.tsx`                       | ❌        | Live Literal.club GraphQL API — no static content to author                         |
| `app/speaking/page.tsx`                      | ❌        | `talks.ts` is structured data for a list UI                                         |
| `app/traveling/page.tsx`                     | ❌        | Photo gallery driven by image imports                                               |
| `content/projects/*.md`                      | ❌        | Structured frontmatter drives `FilteredProjects` filtering                          |

---

## Phases

### Phase 0: Foundation ✅

**Packages installed:**

```
@next/mdx @mdx-js/loader @mdx-js/react @types/mdx remark-gfm
```

**`next.config.ts`** — wrapped with `createMDX`:

- `remarkPlugins: ['remark-gfm']` as a string reference (Turbopack cannot pass JS functions to Rust)
- `pageExtensions` includes `'md'` and `'mdx'`

**`mdx-components.tsx`** — created at project root (required by App Router).

### Phase 1: About Page ✅

- `content/pages/about.mdx` — intro, "Being lucky", "Now" sections
- `app/about/page.tsx` — thin shell importing `AboutContent`
- **Gotcha:** MDX parses blank lines in JSX children as markdown paragraphs, creating nested `<p>` elements (hydration error). Fix: keep text content inline with opening JSX tags — no blank lines inside `<p>` blocks.

### Phase 2: Blog Pipeline ✅

- Renamed all 17 `content/posts/*.md` → `.mdx`
- `lib/posts.ts` — `getPostData()` now uses dynamic import for the compiled MDX `Content` component; `getSortedPostsData()` still uses `gray-matter` + `fs.readFileSync` (no need to compile every post just to get frontmatter)
- `app/blog/[id]/page.tsx` — renders `<postData.Content />` instead of `<PostBody>`
- `mdx-components.tsx` — added `wrapper` mapping with the Tailwind Typography prose classes (copied exactly from the deleted `PostBody.tsx`)
- **Deleted:** `components/PostBody.tsx`, `lib/markdown.ts`
- **Note:** `micromark` and `micromark-extension-gfm` remain as transitive dependencies used by `lib/projects.ts`

### Phase 3: Stack Page ✅

- `content/pages/stack.mdx` — 9 `StackItem` calls
- `app/stack/page.tsx` — thin shell

### Phase 4: Making Page ✅

- New `components/ProjectCard.tsx` — extracts the repeated two-column card layout
    - Accepts `title`, `year`, `imageSlot`, `actions`, `children`, `noBorder?`, `topMargin?`
    - Preserves `data-testid="making-project"` on outer container (Cypress tests depend on it)
- `content/pages/making.mdx` — 5 project cards
- `app/making/page.tsx` — thin shell

### Phase 5: Working Page (prose only) ✅

- New `components/PrinciplesList.tsx` — renders the 14-item principles grid from a `string[]` prop
- `content/pages/working-intro.mdx` — career intro, "What I do" list, Principles grid
- `app/working/page.tsx` — imports `WorkingIntro` MDX + keeps `FilteredProjects` in TSX
- **Fix:** `lib/projects.ts` still needs markdown→HTML for `ProjectSummary` (which uses `dangerouslySetInnerHTML`). Since `lib/markdown.ts` was deleted, inlined the `micromark` call directly in `lib/projects.ts`.

---

## Final Content Architecture

```
content/
  posts/          # .mdx (renamed from .md) — blog posts
  projects/       # .md (unchanged) — structured data for FilteredProjects
  pages/          # MDX for static prose pages
    about.mdx
    stack.mdx
    making.mdx
    working-intro.mdx

app/
  about/page.tsx        # thin shell
  stack/page.tsx        # thin shell
  making/page.tsx       # thin shell
  working/page.tsx      # MDX intro + FilteredProjects (data)
  blog/[id]/page.tsx    # renders <postData.Content />

components/
  PostBody.tsx          # DELETED
  ProjectCard.tsx       # NEW
  PrinciplesList.tsx    # NEW

lib/
  posts.ts              # dynamic import for Content component; gray-matter for index
  markdown.ts           # DELETED
  projects.ts           # uses micromark directly for HTML output

mdx-components.tsx      # wrapper with Tailwind Typography prose classes
```

## Key Decisions

- **`gray-matter` stays** — still used by `getSortedPostsData()` for the blog index
- **`content/projects/*.md` stays as `.md`** — structured frontmatter drives filtering UI; `ProjectSummary` still renders `contentHtml`
- **`micromark` stays** — transitive dep used directly in `lib/projects.ts` to avoid re-adding a separate markdown processing lib
- **GFM continuity** — `remark-gfm` (string reference) replaces `micromark-extension-gfm` for blog posts; projects still use `micromark-extension-gfm` directly
- **Turbopack constraint** — remark/rehype plugins must be string references in `next.config.ts`, not imported functions
