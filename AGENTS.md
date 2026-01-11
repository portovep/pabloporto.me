# AI Coding Agent Guidelines

**Last Updated:** 2025-01-27  
**Purpose:** System-level guardrails and conventions for AI coding agents working on this codebase

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
11. [Accessibility](#accessibility)
12. [Performance](#performance)
13. [Image Optimization](#image-optimization)
14. [Error Handling](#error-handling)
15. [Environment Variables](#environment-variables)
16. [Pre-commit Checks](#pre-commit-checks)

---

## Architecture & Framework

### Next.js App Router (Primary)

- **MUST** use Next.js 15 App Router (`app/` directory) for all new pages
- **MUST NOT** create new Pages Router (`pages/`) routes
- **MUST** use Server Components by default (no `'use client'` unless needed)
- **MUST** use async Server Components for data fetching
- **MUST** export `metadata` object for SEO (not `<Head>` component)

### React Patterns

- **MUST** use React 19 patterns (no unnecessary React imports)
- **MUST NOT** import React unless using React APIs (hooks, types)
- **MUST** use Server Components for data fetching
- **MUST** mark Client Components with `'use client'` directive
- **MUST** use `forwardRef` for components that need ref forwarding

### Example: Server Component Pattern

```typescript
// ✅ CORRECT: App Router Server Component
import { Metadata } from 'next';
import { getSortedPostsData } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog | Pablo Porto',
  description: '...'
};

export default async function BlogPage() {
  const posts = await getSortedPostsData();
  return <div>...</div>;
}
```

### Example: Client Component Pattern

```typescript
// ✅ CORRECT: Client Component with 'use client'
'use client';

import { useState } from 'react';

export default function InteractiveComponent() {
  const [state, setState] = useState(false);
  return <button onClick={() => setState(!state)}>...</button>;
}
```

---

## Component Library

### shadcn/ui Components

- **MUST** use existing shadcn/ui components from `components/ui/`
- **MUST** import from `@/components/ui` using path aliases
- **MUST NOT** create custom implementations of existing UI components
- **MUST** use `cn()` utility for className merging (from `@/lib/utils`)

### Available UI Components

- `Button` - Use for all button interactions
- `Card`, `CardHeader`, `CardContent`, `CardFooter`, `CardTitle`, `CardDescription`
- `Date` - Date formatting component
- `Label` - Form labels
- `PageHeader` - Page headers
- `StackItem` - Stack display items

### Adding New shadcn/ui Components

- **MUST** use `npx shadcn@latest add [component]` command
- **MUST** follow shadcn/ui conventions (forwardRef, displayName, etc.)
- **MUST** export from `components/ui/index.ts` if needed

### Example: Using UI Components

```typescript
// ✅ CORRECT: Using existing UI components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function MyComponent({ className }: { className?: string }) {
  return (
    <Card className={cn('custom-class', className)}>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">Click me</Button>
      </CardContent>
    </Card>
  );
}
```

---

## TypeScript Conventions

### Type Safety

- **MUST** use TypeScript for all new files (`.ts` or `.tsx`)
- **MUST** define proper types for all component props
- **MUST** use interfaces for component props (not types, for consistency)
- **MUST** use `type` for utility types and unions
- **MUST NOT** use `any` type (use `unknown` if needed)
- **MUST** type function parameters and return values for utilities

### Type Definitions

- **MUST** co-locate types with components when used only there
- **MUST** place shared types in `lib/types.ts` or appropriate lib file
- **MUST** use descriptive type names (e.g., `PostData`, `ProjectData`)

### Example: Type Definitions

```typescript
// ✅ CORRECT: Component with typed props
interface CardProps {
  title: string;
  description: string;
  linkURL?: string;
}

export default function Card({ title, description, linkURL }: CardProps) {
  return <div>...</div>;
}

// ✅ CORRECT: Shared types in lib file
// lib/posts.ts
export type PostData = {
  id: string;
  title: string;
  date: string;
  contentHtml?: string;
};
```

### Return Types

- **MUST NOT** add explicit return types to React components (let TypeScript infer)
- **MUST** add return types to utility functions for clarity
- **MUST** use `React.ReactElement` only when necessary for type constraints

```typescript
// ✅ CORRECT: No return type annotation
export default function Card({ title }: CardProps) {
  return <div>...</div>;
}

// ✅ CORRECT: Return type for utility function
export function formatDate(date: Date): string {
  return date.toISOString();
}
```

---

## File Structure & Organization

### Directory Structure

```
app/                    # Next.js App Router pages
  [route]/
    page.tsx           # Page component
    layout.tsx         # Route-specific layout (optional)
components/            # React components
  ComponentName.tsx    # Single-file components (preferred)
  ComponentName/       # Multi-file components (tests, styles, etc.)
    ComponentName.tsx
    ComponentName.test.tsx
lib/                   # Utility functions and helpers
  utility-name.ts      # kebab-case for file names
content/               # Markdown content files
  posts/
  projects/
cypress/               # E2E tests
  e2e/
public/                # Static assets
styles/                # Global styles
```

### File Naming

- **MUST** use PascalCase for component files: `ComponentName.tsx`
- **MUST** use kebab-case for utility files: `utility-name.ts`
- **MUST** use kebab-case for page routes: `app/blog/[id]/page.tsx`
- **MUST** use descriptive names (avoid abbreviations)

### Component Organization

- **MUST** prefer single-file components when possible
- **MUST** use folders only for components with multiple related files
- **MUST** export components as default exports
- **MUST** export types/interfaces as named exports

---

## Styling & CSS

### Tailwind CSS

- **MUST** use Tailwind CSS for all styling (no custom CSS unless necessary)
- **MUST** use Tailwind v4 syntax (`@import 'tailwindcss'`)
- **MUST** use `cn()` utility for conditional classes
- **MUST** use responsive prefixes (`sm:`, `md:`, `lg:`) for responsive design
- **MUST** use design tokens from `styles/globals.css` (CSS variables)

### Class Organization

- **MUST** organize Tailwind classes in this order:
    1. Layout (flex, grid, etc.)
    2. Spacing (margin, padding)
    3. Sizing (width, height)
    4. Typography (text-_, font-_)
    5. Colors (bg-_, text-_, border-\*)
    6. Effects (shadow, opacity, etc.)
    7. Transitions/animations

### Example: Tailwind Usage

```typescript
// ✅ CORRECT: Well-organized Tailwind classes
<div className="flex flex-col items-center justify-center mt-10 px-4 py-6 bg-white rounded-lg shadow-md">
  <h1 className="text-4xl font-bold text-gray-900">Title</h1>
</div>

// ✅ CORRECT: Using cn() for conditional classes
import { cn } from '@/lib/utils';

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  className
)}>
```

### Custom CSS

- **MUST NOT** create custom CSS files unless absolutely necessary
- **MUST** use CSS variables defined in `styles/globals.css` for theming
- **MUST** use `@tailwindcss/typography` for prose content

---

## Import Patterns

### Path Aliases

- **MUST** use `@/` alias for all imports (configured in `tsconfig.json`)
- **MUST** use absolute imports, not relative imports
- **MUST** organize imports in this order:
    1. React/Next.js core imports
    2. Third-party library imports
    3. Internal component imports (`@/components`)
    4. Internal utility imports (`@/lib`)
    5. Type imports (with `type` keyword)

### Import Examples

```typescript
// ✅ CORRECT: Organized imports with aliases
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui';
import { getSortedPostsData } from '@/lib/posts';
import type { PostData } from '@/lib/posts';

// ❌ INCORRECT: Relative imports
import { Card } from '../../components/ui/card';
```

### Barrel Exports

- **MUST** use barrel exports from `components/ui/index.ts` when available
- **MUST** import directly from component files when barrel doesn't exist

---

## Naming Conventions

### Components

- **MUST** use PascalCase: `Card`, `PostSummary`, `BookCard`
- **MUST** use descriptive names that indicate purpose
- **MUST** match component name to file name

### Functions

- **MUST** use camelCase: `getSortedPostsData`, `formatDate`
- **MUST** use verb prefixes for functions: `get`, `set`, `is`, `has`, `format`
- **MUST** use descriptive names

### Variables

- **MUST** use camelCase: `postData`, `isLoading`
- **MUST** use boolean prefixes: `is`, `has`, `should`, `can`
- **MUST** use descriptive names (avoid single letters except in loops)

### Constants

- **MUST** use UPPER_SNAKE_CASE: `EXCLUDED_SHELF_SLUGS`, `DATE_FORMAT`
- **MUST** define at module level or in dedicated constants file

### Files & Directories

- **MUST** use PascalCase for component files: `Card.tsx`
- **MUST** use kebab-case for utility files: `markdown.ts`, `posts.ts`
- **MUST** use kebab-case for routes: `app/blog/[id]/page.tsx`

---

## Code Formatting

### Prettier Configuration

- **MUST** follow Prettier config in `.prettierrc`:
    - `semi: true` - Always use semicolons
    - `tabWidth: 4` - Use 4 spaces for indentation
    - `printWidth: 100` - Max line length 100 characters
    - `singleQuote: true` - Use single quotes
    - `trailingComma: 'none'` - No trailing commas
    - `bracketSameLine: true` - JSX closing bracket on same line

### Formatting Commands

- **MUST** run `npm run format:fix` before committing
- **MUST** ensure code passes `npm run format` check
- **MUST** format all `.ts`, `.tsx`, `.css`, `.md`, `.json` files

### ESLint

- **MUST** follow ESLint rules from `.eslintrc.json`
- **MUST** run `npm run lint` before committing
- **MUST** fix all linting errors (use `npm run lint:fix` when possible)

---

## Git & Commits

### Commit Message Convention

- **MUST** use conventional commits format:

    ```
    <type>(<scope>): <subject>

    <body>

    <footer>
    ```

### Commit Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (dependencies, config, etc.)
- `build`: Build system changes
- `ci`: CI/CD changes

### Commit Examples

```bash
# ✅ CORRECT: Feature commit
feat(blog): add pagination to blog listing page

# ✅ CORRECT: Fix commit
fix(header): resolve mobile menu closing issue

# ✅ CORRECT: Refactor commit
refactor(components): migrate Card to App Router pattern

# ✅ CORRECT: Style commit
style: format all files with Prettier

# ✅ CORRECT: Chore commit
chore(deps): update Next.js to 15.3.2
```

### Commit Best Practices

- **MUST** write clear, descriptive commit messages
- **MUST** keep commits focused (one logical change per commit)
- **MUST** reference issue numbers if applicable: `fix(blog): resolve #123`
- **MUST NOT** commit directly to `main` branch
- **MUST** create feature branches for changes

---

## Testing

### Cypress E2E Tests

- **MUST** write E2E tests for critical user flows
- **MUST** use `data-testid` attributes for test selectors
- **MUST** follow existing test patterns in `cypress/e2e/`
- **MUST** run `npm run test:e2e` before committing

### Test Data Attributes

- **MUST** add `data-testid` to interactive elements:
    ```typescript
    <button data-testid="mobile-menu-toggle">Menu</button>
    <nav data-testid="desktop-menu">...</nav>
    ```

### Test File Naming

- **MUST** use kebab-case: `navigation_test.ts`, `blog_page_test.ts`
- **MUST** suffix with `_test.ts` or `.test.ts`

### Running Tests

- **MUST** run `npm run test:e2e` to verify tests pass
- **MUST** update tests when changing component structure
- **MUST** ensure all tests pass before merging

---

## Accessibility

### ARIA Attributes

- **MUST** use semantic HTML elements (`<nav>`, `<main>`, `<article>`, etc.)
- **MUST** add `aria-label` to icon-only buttons
- **MUST** use `aria-hidden="true"` for decorative elements
- **MUST** ensure proper heading hierarchy (`h1` → `h2` → `h3`)

### Keyboard Navigation

- **MUST** ensure all interactive elements are keyboard accessible
- **MUST** use proper focus management
- **MUST** add `focus-visible:` Tailwind classes for focus states

### Screen Readers

- **MUST** provide alternative text for images (`alt` attribute)
- **MUST** use `sr-only` class for screen-reader-only content
- **MUST** ensure form inputs have associated labels

### Example: Accessible Component

```typescript
// ✅ CORRECT: Accessible button
<button
  type="button"
  aria-label="Toggle mobile menu"
  data-testid="mobile-menu-toggle"
  className="focus:outline-none focus-visible:ring-2"
>
  <svg aria-hidden="true">...</svg>
</button>
```

---

## Performance

### Code Splitting

- **MUST** use dynamic imports for heavy components: `next/dynamic`
- **MUST** use Server Components for data fetching (no client-side fetching unless needed)
- **MUST** avoid importing large libraries in client components

### Bundle Size

- **MUST** import only needed functions from libraries
- **MUST** use tree-shakeable imports
- **MUST** avoid unnecessary dependencies

### Rendering

- **MUST** use Server Components by default
- **MUST** mark Client Components explicitly with `'use client'`
- **MUST** use `React.memo` only when profiling shows it's needed

---

## Image Optimization

### Next.js Image Component

- **MUST** use `next/image` for all images
- **MUST** provide `width` and `height` or use `fill` with parent container
- **MUST** use `priority` for above-the-fold images
- **MUST** use `quality` prop (default: 75, use 100 for hero images)
- **MUST** use `sizes` prop for responsive images
- **MUST** use `placeholder="blur"` when possible

### Image Examples

```typescript
// ✅ CORRECT: Optimized image
import Image from 'next/image';
import profilePic from '@/public/images/profile.png';

<Image
  src={profilePic}
  alt="Profile picture"
  width={144}
  height={144}
  priority
  quality={75}
  className="rounded-full"
/>

// ✅ CORRECT: Responsive image with fill
<div className="relative aspect-[2/3] w-full">
  <Image
    src={coverSrc}
    alt={book.title}
    fill
    sizes="(max-width: 768px) 50vw, 33vw"
    className="object-contain"
  />
</div>
```

### Image File Organization

- **MUST** store images in `public/images/` directory
- **MUST** use descriptive filenames
- **MUST** optimize images before committing (use appropriate formats)

---

## Error Handling

### Error Boundaries

- **MUST** create `app/error.tsx` for error boundaries
- **MUST** handle errors gracefully with user-friendly messages
- **MUST** log errors appropriately (console.error in development)

### API Error Handling

- **MUST** validate API responses
- **MUST** provide fallback UI for failed data fetches
- **MUST** use try-catch for async operations

### Example: Error Handling

```typescript
// ✅ CORRECT: Error handling in Server Component
export default async function ReadingPage() {
  try {
    const shelves = await getShelves();
    return <div>...</div>;
  } catch (error) {
    console.error('Error fetching shelves:', error);
    return <div>Error loading shelves. Please try again later.</div>;
  }
}
```

---

## Environment Variables

### Validation

- **MUST** validate environment variables at build time
- **MUST** use Zod or similar for runtime validation
- **MUST** provide helpful error messages for missing variables

### Usage

- **MUST** access env vars through validated schema
- **MUST** use `process.env` only in Server Components or API routes
- **MUST NOT** expose sensitive variables to client

### Example: Environment Variables

```typescript
// ✅ CORRECT: Validated environment variables
// lib/env.ts
import { z } from 'zod';

const envSchema = z.object({
    LITERAL_API_TOKEN: z.string().optional(),
    LITERAL_PROFILE_ID: z.string().optional()
});

export const env = envSchema.parse(process.env);

// Usage
import { env } from '@/lib/env';
const apiToken = env.LITERAL_API_TOKEN;
```

---

## Pre-commit Checks

### Husky Hooks

- **MUST** ensure pre-commit hook runs (`npm run format` and `npm run lint`)
- **MUST** fix all formatting and linting errors before committing
- **MUST NOT** skip hooks (`--no-verify`)

### Pre-commit Checklist

Before every commit, ensure:

- [ ] Code is formatted (`npm run format:fix`)
- [ ] No linting errors (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Tests pass (`npm run test:e2e`)
- [ ] Commit message follows convention

---

## Quick Reference

### Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Check linting
npm run lint:fix         # Fix linting issues
npm run format           # Check formatting
npm run format:fix       # Fix formatting

# Testing
npm run test:e2e         # Run E2E tests

# Performance
npm run performance:check # Run Lighthouse CI
```

### Path Aliases

- `@/components` → `components/`
- `@/lib` → `lib/`
- `@/app` → `app/`
- `@/hooks` → `hooks/` (if exists)

### Key Files

- `tsconfig.json` - TypeScript configuration
- `.prettierrc` - Prettier configuration
- `.eslintrc.json` - ESLint configuration
- `components.json` - shadcn/ui configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `next.config.js` - Next.js configuration

---

## Anti-Patterns to Avoid

### ❌ DO NOT:

1. **Mix routing patterns** - Don't use Pages Router for new routes
2. **Import React unnecessarily** - Don't import React unless using React APIs
3. **Use relative imports** - Always use `@/` aliases
4. **Skip type definitions** - Always type component props and functions
5. **Ignore formatting** - Always run Prettier before committing
6. **Commit without testing** - Always verify build and tests pass
7. **Use inline styles** - Use Tailwind classes instead
8. **Create duplicate components** - Check existing UI components first
9. **Skip accessibility** - Always add proper ARIA attributes
10. **Hardcode values** - Use constants or environment variables

---

## Additional Resources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [React Server Components](https://react.dev/reference/rsc/server-components)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Remember:** When in doubt, follow existing patterns in the codebase. Consistency is key.
