# MDX Simplification Opportunities

Identified after migrating `working-intro.mdx` and `about.mdx` from HTML-heavy JSX to Markdown.
Ordered by impact.

---

## 1. Register shared components globally in `mdx-components.tsx`

Every MDX file currently opens with boilerplate imports:

```mdx
import Link from 'next/link';
import { PageHeader } from '@/components/ui';

;
```

`mdx-components.tsx` is designed for exactly this — any component registered there is available in every MDX file without importing. `img` is already handled this way. Extend it:

```tsx
import Link from 'next/link';
import { PageHeader } from '@/components/ui';

export function useMDXComponents(components) {
    return {
        img: ...,
        a: ...,
        PageHeader,
        Link,
        ...components,
    };
}
```

Every `content/pages/*.mdx` file then drops 2–3 import lines. No functional change.

---

## 2. Remove redundant prose modifiers from the blog post page

`app/blog/[id]/page.tsx` has:

```tsx
className =
    'lg:prose-xl prose-a:text-emerald-500 hover:prose-a:text-emerald-600 hover:prose-a:font-medium prose-a:no-underline prose-table:m-1 prose-table:p-2 mt-10 prose dark:prose-invert';
```

The `prose-a:*` and `prose-a:no-underline` parts duplicate the global prose link styles added to `globals.css`. They can be removed:

```tsx
className = 'lg:prose-xl prose-table:m-1 prose-table:p-2 mt-10 prose dark:prose-invert';
```

---

## 3. Move static MDX pages into `app/` directly

Current pattern: `content/pages/about.mdx` imported by `app/about/page.tsx`  
Alternative: `app/about/page.mdx` that exports its own metadata

Next.js 15+ with `@next/mdx` supports metadata exported directly from MDX files:

```mdx
export const metadata = { title: 'About', description: '...' };

<PageHeader title="About" />
...content...
```

This would eliminate the 5 thin `page.tsx` shell files for `about`, `now`, `stack`, `making`, and `working-intro`. The `working` page cannot do this because it needs `await getSortedProjectData()`.

**Prerequisite:** `PageContainer` would need to be provided globally (via `mdx-components.tsx` or a shared layout file) since the shell pages currently handle the container wrapping.

---

## 4. Eliminate `gray-matter` with MDX frontmatter exports

Blog posts currently use YAML frontmatter parsed by `gray-matter` in `lib/posts.ts`. An alternative is exporting frontmatter directly from each MDX file:

```mdx
export const frontmatter = {
    title: 'Seven lessons I wish I knew...',
    date: '2023-01-19',
    tag: 'Engineering'
};

Content starts here...
```

`lib/posts.ts` would read it via `import()` instead of `fs.readFileSync` + `matter()`, removing the `gray-matter` dependency entirely.

**Trade-off:** Building the blog list requires dynamically importing every post file to read its frontmatter. Fine for ~15 posts; revisit if the post count grows significantly.

---

## 5. `making.mdx` ProjectCard children — minor cleanup

Each `ProjectCard` child currently uses:

```mdx
<p className="mb-6 leading-relaxed text-muted-foreground">...</p>
```

If `ProjectCard` rendered children through a prose-styled container, these could be plain markdown paragraphs. Low priority — only worth doing if `ProjectCard` is refactored for other reasons.

---

## Recommendation

| #   | Action                           | Effort | Risk |
| --- | -------------------------------- | ------ | ---- |
| 1   | Global MDX components            | Low    | None |
| 2   | Remove redundant prose modifiers | Low    | None |
| 3   | MDX pages in `app/`              | Medium | Low  |
| 4   | Eliminate `gray-matter`          | Medium | Low  |
| 5   | `ProjectCard` prose children     | Low    | None |

Do 1 and 2 now. Consider 3 when adding the next new page. Skip 4 unless actively reducing dependencies.
