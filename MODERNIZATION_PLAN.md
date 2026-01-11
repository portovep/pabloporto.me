# Modernization Plan for pabloporto.me

**Last Updated:** 2025-01-27  
**Status:** Planning Phase  
**Target:** Complete migration to Next.js 15 App Router with modern best practices

---

## Overview

This document outlines a comprehensive modernization plan for migrating from a mixed Pages Router/App Router architecture to a fully App Router-based Next.js 15 application, with TypeScript strict mode, modern React patterns, and improved code quality.

---

## Phase 1: Critical Architectural Changes

### Task 1.1: Migrate Pages Router to App Router

**Priority:** 🔴 Critical  
**Estimated Effort:** High  
**Dependencies:** None

#### Pages to Migrate:

- `pages/index.tsx` → `app/page.tsx`
- `pages/about/index.tsx` → `app/about/page.tsx`
- `pages/blog/index.tsx` → `app/blog/page.tsx`
- `pages/blog/[id].tsx` → `app/blog/[id]/page.tsx`
- `pages/making/index.tsx` → `app/making/page.tsx`
- `pages/working/index.tsx` → `app/working/page.tsx`
- `pages/traveling/index.tsx` → `app/traveling/page.tsx`
- `pages/stack/index.tsx` → `app/stack/page.tsx`

#### Migration Steps:

1. Create corresponding `app/` directory structure
2. Convert `getStaticProps` → Server Components with direct data fetching
3. Convert `getStaticPaths` → `generateStaticParams`
4. Replace `Meta` component with `metadata` export
5. Update imports to use `@/` aliases
6. Remove `Layout` wrapper (handled by root layout)
7. Update Cypress tests to reflect new routes
8. Delete old `pages/` files after verification

#### Key Changes:

- Remove `GetStaticProps` and `GetStaticPaths` types
- Use async Server Components
- Export `metadata` object instead of using `<Meta>` component
- Use `generateStaticParams` for dynamic routes

#### Example Migration Pattern:

```typescript
// Before (Pages Router)
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return { props: { allPostsData } };
};

export default function Blog({ allPostsData }: BlogProps) {
  return <Layout pageTitle="Blog">...</Layout>;
}

// After (App Router)
export const metadata: Metadata = {
  title: 'Blog | Pablo Porto',
  description: '...'
};

export default async function BlogPage() {
  const allPostsData = await getSortedPostsData();
  return <div>...</div>;
}
```

**Files to Modify:**

- `app/page.tsx` (new)
- `app/about/page.tsx` (new)
- `app/blog/page.tsx` (new)
- `app/blog/[id]/page.tsx` (new)
- `app/making/page.tsx` (new)
- `app/working/page.tsx` (new)
- `app/traveling/page.tsx` (new)
- `app/stack/page.tsx` (new)
- `cypress/e2e/*.ts` (update routes)

**Files to Delete:**

- `pages/index.tsx`
- `pages/about/index.tsx`
- `pages/blog/index.tsx`
- `pages/blog/[id].tsx`
- `pages/making/index.tsx`
- `pages/working/index.tsx`
- `pages/traveling/index.tsx`
- `pages/stack/index.tsx`
- `pages/_app.tsx`
- `pages/_document.tsx`
- `components/Meta/Meta.tsx` (after migration)

---

### Task 1.2: Consolidate Layout Logic

**Priority:** 🔴 Critical  
**Estimated Effort:** Low  
**Dependencies:** Task 1.1

#### Actions:

1. Ensure `app/layout.tsx` contains all layout logic
2. Remove duplicate layout code from `pages/_app.tsx`
3. Update `components/Layout/Layout.tsx` to work with App Router
4. Remove `home` prop pattern (use route detection instead)
5. Integrate Vercel Analytics in root layout

#### Current State:

- `app/layout.tsx` - Basic layout
- `pages/_app.tsx` - Duplicate layout with Analytics

#### Target State:

- Single `app/layout.tsx` with Header, Footer, Analytics
- `components/Layout/Layout.tsx` simplified for page-level layout

**Files to Modify:**

- `app/layout.tsx`
- `components/Layout/Layout.tsx`
- `pages/_app.tsx` (delete after migration)

---

### Task 1.3: Enable TypeScript Strict Mode

**Priority:** 🔴 Critical  
**Estimated Effort:** Medium  
**Dependencies:** None (can be done in parallel)

#### Steps:

1. Enable `strict: true` in `tsconfig.json`
2. Enable `strictNullChecks: true`
3. Fix type errors incrementally
4. Add proper type definitions for markdown frontmatter
5. Type API responses properly

#### Configuration Changes:

```json
{
    "compilerOptions": {
        "strict": true,
        "strictNullChecks": true
    }
}
```

#### Type Improvements Needed:

- Markdown frontmatter types (`PostData`, `ProjectData`)
- API response types (`literal.ts`)
- Environment variable types
- Component prop types

**Files to Modify:**

- `tsconfig.json`
- `lib/posts.ts`
- `lib/projects.ts`
- `lib/talks.ts`
- `lib/literal.ts`
- All component files with type errors

---

## Phase 2: Code Quality Improvements

### Task 2.1: Remove Unnecessary React Imports

**Priority:** 🟡 High  
**Estimated Effort:** Low  
**Dependencies:** None

#### Actions:

1. Remove `import React from 'react'` from all files
2. Keep React imports only when using React APIs (hooks, types)
3. Update ESLint config if needed

#### Files Affected (28+ files):

- `components/Header/Header.tsx`
- `components/Card/Card.tsx`
- `components/Footer/Footer.tsx`
- `components/Layout/Layout.tsx`
- `components/Meta/Meta.tsx`
- `pages/*.tsx` (all)
- `app/layout.tsx`
- All component files

**Script to Find:**

```bash
grep -r "import React from 'react'" --include="*.tsx" --include="*.ts"
```

---

### Task 2.2: Remove Return Type Annotations

**Priority:** 🟡 High  
**Estimated Effort:** Low  
**Dependencies:** Task 1.3 (TypeScript strict mode)

#### Actions:

1. Remove `: React.ReactElement` from all component functions
2. Let TypeScript infer return types
3. Keep return types only for exported utility functions where it adds clarity

#### Pattern:

```typescript
// Before
export default function Card({ title }: CardProps): React.ReactElement {
  return <div>...</div>;
}

// After
export default function Card({ title }: CardProps) {
  return <div>...</div>;
}
```

**Files Affected:** All component files

---

### Task 2.3: Add Environment Variable Validation

**Priority:** 🟡 High  
**Estimated Effort:** Medium  
**Dependencies:** None

#### Implementation:

1. Install `zod`: `npm install zod`
2. Create `lib/env.ts` with validation schema
3. Validate at build time
4. Provide helpful error messages

#### Example Implementation:

```typescript
// lib/env.ts
import { z } from 'zod';

const envSchema = z.object({
    LITERAL_API_TOKEN: z.string().optional(),
    LITERAL_PROFILE_ID: z.string().optional(),
    LITERAL_PROFILE_HANDLE: z.string().optional(),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development')
});

export const env = envSchema.parse(process.env);
```

#### Usage:

```typescript
// Before
const apiToken = process.env.LITERAL_API_TOKEN;

// After
import { env } from '@/lib/env';
const apiToken = env.LITERAL_API_TOKEN;
```

**Files to Create:**

- `lib/env.ts`

**Files to Modify:**

- `app/reading/page.tsx`
- `lib/literal.ts`
- `scripts/get-literal-token.ts`

---

### Task 2.4: Standardize Metadata API Usage

**Priority:** 🟡 High  
**Estimated Effort:** Low  
**Dependencies:** Task 1.1

#### Actions:

1. Ensure all App Router pages use `metadata` export
2. Create shared metadata utilities for common patterns
3. Remove `Meta` component after migration

#### Shared Metadata Pattern:

```typescript
// lib/metadata.ts
import { Metadata } from 'next';

export function createPageMetadata(title: string, description: string, path: string): Metadata {
    return {
        title: `${title} | Pablo Porto`,
        description,
        metadataBase: new URL('https://pabloporto.me'),
        alternates: { canonical: path },
        openGraph: {
            title: `${title} | Pablo Porto`,
            description,
            url: path,
            siteName: 'Pablo Porto',
            locale: 'en_US',
            type: 'website'
        },
        twitter: {
            card: 'summary',
            title: `${title} | Pablo Porto`,
            description
        }
    };
}
```

**Files to Create:**

- `lib/metadata.ts`

**Files to Modify:**

- All `app/**/page.tsx` files

---

## Phase 3: Structural Improvements

### Task 3.1: Reorganize Component Structure

**Priority:** 🟢 Medium  
**Estimated Effort:** Medium  
**Dependencies:** None

#### Actions:

1. Flatten single-file component folders
2. Keep folders only for components with multiple files
3. Update imports across codebase

#### Migration Pattern:

- `components/Card/Card.tsx` → `components/Card.tsx`
- `components/Footer/Footer.tsx` → `components/Footer.tsx`
- `components/Header/Header.tsx` → `components/Header.tsx`
- Keep `components/ui/` structure (has multiple files)

**Files to Move:**

- `components/Card/Card.tsx` → `components/Card.tsx`
- `components/Footer/Footer.tsx` → `components/Footer.tsx`
- `components/Header/Header.tsx` → `components/Header.tsx`
- `components/Layout/Layout.tsx` → `components/Layout.tsx`
- `components/Meta/Meta.tsx` → Delete (after migration)
- `components/PostBody/PostBody.tsx` → `components/PostBody.tsx`
- `components/PostSummary/PostSummary.tsx` → `components/PostSummary.tsx`
- `components/ProjectSummary/ProjectSummary.tsx` → `components/ProjectSummary.tsx`
- `components/BookCard/BookCard.tsx` → `components/BookCard.tsx`
- `components/PhotoCard/PhotoCard.tsx` → `components/PhotoCard.tsx`
- `components/Shelf/Shelf.tsx` → `components/Shelf.tsx`
- `components/TalkCard/TalkCard.tsx` → `components/TalkCard.tsx`
- `components/WorldMap/WorldMap.tsx` → `components/WorldMap.tsx`

**Files to Update:** All files importing these components

---

### Task 3.2: Modernize Next.js Configuration

**Priority:** 🟢 Medium  
**Estimated Effort:** Low  
**Dependencies:** None

#### Actions:

1. Convert `next.config.js` to TypeScript (`next.config.ts`)
2. Add proper typing
3. Update ESLint dirs to reflect App Router

#### New Configuration:

```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack']
        });
        return config;
    },
    eslint: {
        dirs: ['app', 'components', 'lib', 'cypress']
    }
};

export default nextConfig;
```

**Files to Modify:**

- `next.config.js` → `next.config.ts` (rename and convert)

---

### Task 3.3: Improve Error Handling

**Priority:** 🟢 Medium  
**Estimated Effort:** Medium  
**Dependencies:** Task 1.1

#### Actions:

1. Add error boundaries for App Router
2. Create `app/error.tsx` for global error handling
3. Add `app/not-found.tsx` for 404 pages
4. Improve error messages for environment variables

#### Implementation:

```typescript
// app/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

**Files to Create:**

- `app/error.tsx`
- `app/not-found.tsx`

**Files to Modify:**

- `app/reading/page.tsx` (improve error handling)
- `lib/literal.ts` (better error messages)

---

### Task 3.4: Remove Unused Code

**Priority:** 🟢 Medium  
**Estimated Effort:** Low  
**Dependencies:** Task 1.1

#### Actions:

1. Delete `pages/api/hello.ts` if unused
2. Remove `components/Meta/Meta.tsx` after migration
3. Clean up unused imports
4. Remove duplicate utility functions

**Files to Delete:**

- `pages/api/hello.ts` (verify unused first)
- `components/Meta/Meta.tsx` (after Task 1.1)

---

## Phase 4: Optimization & Polish

### Task 4.1: Standardize Image Optimization

**Priority:** 🔵 Low  
**Estimated Effort:** Low  
**Dependencies:** None

#### Actions:

1. Create shared image configuration
2. Standardize quality settings
3. Ensure all images use Next.js Image component properly

#### Create Image Config:

```typescript
// lib/image-config.ts
export const imageConfig = {
    quality: 85,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
} as const;
```

**Files to Create:**

- `lib/image-config.ts`

**Files to Modify:**

- `pages/index.tsx`
- `pages/blog/[id].tsx`
- `components/PhotoCard/PhotoCard.tsx`
- `components/BookCard/BookCard.tsx`

---

### Task 4.2: Improve Type Safety for Content

**Priority:** 🔵 Low  
**Estimated Effort:** Medium  
**Dependencies:** Task 1.3

#### Actions:

1. Create strict types for markdown frontmatter
2. Validate frontmatter at build time
3. Add type guards for content data

#### Implementation:

```typescript
// lib/content-types.ts
import { z } from 'zod';

export const PostFrontmatterSchema = z.object({
    title: z.string(),
    date: z.string(),
    type: z.enum(['Post', 'Paper']),
    link: z.string().url().optional(),
    tag: z.string().optional()
});

export type PostFrontmatter = z.infer<typeof PostFrontmatterSchema>;
```

**Files to Create:**

- `lib/content-types.ts`

**Files to Modify:**

- `lib/posts.ts`
- `lib/projects.ts`

---

### Task 4.3: Update ESLint Configuration

**Priority:** 🔵 Low  
**Estimated Effort:** Low  
**Dependencies:** Task 1.1

#### Actions:

1. Update ESLint config for App Router
2. Add rules for React Server Components
3. Configure import order

**Files to Modify:**

- `.eslintrc.json`

---

## Testing Strategy

### After Each Phase:

1. Run `npm run build` to verify no build errors
2. Run `npm run lint` to check code quality
3. Run `npm run test:e2e` to verify E2E tests pass
4. Manually test critical user flows

### Test Updates Required:

- Update Cypress tests for new routes
- Verify all navigation links work
- Test dynamic routes (`/blog/[id]`)
- Verify metadata is correct

**Files to Modify:**

- `cypress/e2e/navigation_test.ts`
- `cypress/e2e/blog_page_test.ts`
- All other E2E test files

---

## Migration Checklist

### Pre-Migration

- [ ] Backup current codebase
- [ ] Create feature branch: `modernization/migrate-to-app-router`
- [ ] Review all Pages Router routes

### Phase 1: Critical

- [ ] Task 1.1: Migrate all pages to App Router
- [ ] Task 1.2: Consolidate layout logic
- [ ] Task 1.3: Enable TypeScript strict mode
- [ ] Verify build passes
- [ ] Update E2E tests

### Phase 2: Code Quality

- [ ] Task 2.1: Remove React imports
- [ ] Task 2.2: Remove return type annotations
- [ ] Task 2.3: Add env validation
- [ ] Task 2.4: Standardize metadata API

### Phase 3: Structural

- [ ] Task 3.1: Reorganize components
- [ ] Task 3.2: Modernize Next.js config
- [ ] Task 3.3: Improve error handling
- [ ] Task 3.4: Remove unused code

### Phase 4: Polish

- [ ] Task 4.1: Standardize images
- [ ] Task 4.2: Improve content types
- [ ] Task 4.3: Update ESLint

### Post-Migration

- [ ] Delete `pages/` directory
- [ ] Update README with new structure
- [ ] Run performance check
- [ ] Deploy to preview environment
- [ ] Verify all functionality works
- [ ] Merge to main

---

## Risk Mitigation

### Potential Issues:

1. **Breaking Changes**: Test thoroughly before deleting old code
2. **Type Errors**: Fix incrementally, don't enable all strict checks at once
3. **Route Changes**: Update all internal links and external references
4. **SEO Impact**: Verify metadata is correctly migrated

### Rollback Plan:

- Keep `pages/` directory until verification complete
- Use feature flags if needed
- Maintain git history for easy rollback

---

## Notes for AI Agents

### When Executing Tasks:

1. **Always test after changes**: Run `npm run build` and `npm run lint`
2. **Update imports**: Use `@/` alias consistently
3. **Preserve functionality**: Don't change behavior, only structure
4. **Commit incrementally**: Small, focused commits per task
5. **Update tests**: Keep E2E tests in sync with changes

### Common Patterns:

- Server Components: Use `async` functions, fetch data directly
- Metadata: Export `metadata` object, not component
- Layout: Use `app/layout.tsx` for global layout
- Dynamic Routes: Use `[id]/page.tsx` structure with `generateStaticParams`

### File Path Conventions:

- Components: `components/ComponentName.tsx`
- Pages: `app/route-name/page.tsx`
- Dynamic: `app/route/[id]/page.tsx`
- Utils: `lib/utility-name.ts`
- Types: `lib/types.ts` or co-located

---

## Resources

- [Next.js App Router Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
- [React Server Components](https://react.dev/reference/rsc/server-components)
- [TypeScript Strict Mode](https://www.typescriptlang.org/tsconfig#strict)
- [Zod Documentation](https://zod.dev/)

---

**Status Tracking:** Update this document as tasks are completed.
