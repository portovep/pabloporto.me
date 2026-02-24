---
name: pabloporto-brand-guidelines
description: Applies pabloporto.me brand colors, typography, and layout tokens to any artifact. Use when styling UI, generating content, or matching the site's look-and-feel.
---

# pabloporto.me Brand Styling

## Overview

To access the official brand identity and style resources for Pablo Porto's personal website, use this document. The site uses Next.js, Tailwind CSS v4, and design tokens defined in `styles/globals.css`.

**Keywords**: branding, pabloporto.me, visual identity, styling, brand colors, typography, design tokens, Tailwind, Inter, Cal Sans, emerald accent, dark mode

## Brand Guidelines

### Colors

**Semantic tokens (source of truth: `styles/globals.css`)**

All main UI colors are defined as CSS variables in `:root` and `.dark` using OKLCH. Prefer these Tailwind semantic classes over raw gray/slate when building new UI.

**Light mode (`:root`):**

| Token              | OKLCH value                 | Usage                       |
| ------------------ | --------------------------- | --------------------------- |
| Background         | `oklch(1 0 0)`              | Page background (~white)    |
| Foreground         | `oklch(0.145 0 0)`          | Primary text (~#252525)     |
| Muted              | `oklch(0.97 0 0)`           | Subtle backgrounds          |
| Muted foreground   | `oklch(0.556 0 0)`          | Secondary text (~#747474)   |
| Primary            | `oklch(0.205 0 0)`          | Buttons, emphasis           |
| Primary foreground | `oklch(0.985 0 0)`          | Text on primary             |
| Border             | `oklch(0.922 0 0)`          | Borders, dividers           |
| Destructive        | `oklch(0.577 0.245 27.325)` | Errors, destructive actions |

**Dark mode (`.dark`):** Inverted and adjusted for contrast; same variable names, different values in `styles/globals.css`.

**Tailwind classes to use:**

- **Backgrounds:** `bg-background`, `bg-card`, `bg-muted` (layout, header, footer, and cards use semantic tokens)
- **Text:** `text-foreground`, `text-muted-foreground`, `text-primary`
- **Borders:** `border-border`, `border-input`

**Literal palette (used alongside semantic tokens):**

- **Primary accent (links, CTAs, hover):** `text-emerald-500`, `hover:text-emerald-600`, `bg-emerald-500`, `hover:bg-emerald-600`
- **Body & secondary (content):** `text-gray-600`, `text-gray-700`, `text-slate-600`, `text-slate-900` where semantic tokens are not yet applied
- **Neutral UI:** `bg-gray-100`, `hover:bg-gray-200`, `text-gray-500`
- **Playful accent (footer):** `group-hover:text-red-600`

**World map (special case):**

- Land: `#cccccc` (default), `#959595` (hover)
- Visited: `#22cd88`
- Lived: `black` (0.8 opacity, 1 on hover)
- Stroke: `white`

### Typography

- **Body font:** Inter (Google Font), loaded via `next/font/google`, CSS variable `--font-inter`
- **Heading font:** Cal Sans (`@fontsource/cal-sans`), exposed as `--font-heading` in `@theme`; use Tailwind class `font-heading`
- **Tailwind:** `font-sans` maps to Inter; `font-heading` maps to Cal Sans with system sans fallback
- **Body:** `antialiased` and `font-feature-settings: 'rlig' 1, 'calt' 1` (ligatures, contextual alternates) on `<body>`; default text color `text-foreground` in root layout

**Scale and weight:**

- **Page title (PageHeader):** `font-heading text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground`
- **Page subtitle:** `text-xl text-muted-foreground`
- **Section headings:** `text-3xl font-semibold text-foreground sm:text-4xl` (or semantic tokens)
- **Nav / links:** `text-lg font-semibold` (nav), `text-emerald-500 hover:text-emerald-600 font-medium` (content links)
- **Body / intro:** `text-xl`, `leading-normal`, `text-muted-foreground` or `text-gray-600` / `text-gray-700`
- **Small labels / badges:** `text-xs font-medium`, `text-sm font-medium`
- **Logo/name in header:** `font-bold tracking-wider text-foreground`

**Prose (blog/content):** `@tailwindcss/typography` is used; prefer semantic tokens or the same gray scale for prose where customisation is needed.

### Spacing and layout

- **Border radius:** Base `--radius: 0.625rem`; derived `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl` in `@theme`
- **Page container:** `max-w-4xl` (default) or `max-w-6xl` (wide), `mx-auto px-4 py-8 sm:px-6 md:py-12`
- **Header:** `lg:max-w-4xl`, `container`, `px-6`, `py-5`, `mb-6`
- **Section spacing:** `space-y-4`, `space-y-6`, `space-y-8`; `pb-8 pt-6 md:pb-12 md:pt-10` (hero-style sections)

## Features

### Dark mode

- **Theme provider:** `next-themes` with `ThemeProvider` in root layout; class-based `.dark` on `<html>`; preference persisted in `localStorage` under `pabloporto-theme` (light / dark / system).
- **Toggle:** Theme switcher (Light / Dark / System) in the footer via `ThemeToggle` (icon-only, no label); uses shadcn dropdown.
- **Shell:** Header, footer, and layout use `bg-background` and explicit `text-foreground` so both themes render correctly.
- **Footer social icons:** Use `dark:[&_img]:invert` on the icon container so SVGs are visible in dark mode.

### Semantic theming

- Use design tokens from `styles/globals.css` for backgrounds, text, borders, and components so light/dark and future theme changes stay consistent.
- Prefer `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, and component tokens (`primary`, `accent`, `card`, etc.) over hard-coded grays in shared UI.

### Accent usage

- **Emerald** is the primary accent: links, primary buttons, nav hover, and key CTAs use `emerald-500` / `emerald-600`
- **Red** is used sparingly for a single playful interaction (footer heart hover)

### Text hierarchy

- Page title: **Cal Sans** (`font-heading`), large, extrabold, tight tracking, `text-foreground`
- Section headings: 3xl–4xl, semibold
- Body and subtitles: `text-muted-foreground` or gray-600/700, with `leading-normal` or `leading-relaxed` where appropriate

### Component styling

- Buttons use `buttonVariants` (primary, secondary, outline, ghost, link, destructive) from `components/ui/button.tsx`, which rely on semantic tokens
- Cards and other shadcn/ui components use the same token system; use `cn()` for conditional or overridden classes

## Technical Details

### Stack

- **Tailwind CSS v4:** `@import 'tailwindcss'`; `@theme inline` in `styles/globals.css` maps CSS variables to Tailwind color/radius/font utilities
- **Typography plugin:** `@tailwindcss/typography` for prose
- **Fonts:** Inter via `next/font/google` (`variable: '--font-inter'`), applied as `font-sans` on `<body>`; Cal Sans via `@fontsource/cal-sans`, `--font-heading` in `@theme`, applied as `font-heading` (e.g. PageHeader)

### Class organisation

When writing Tailwind classes, follow this order (per project AGENTS.md):

1. Layout (flex, grid)
2. Spacing (margin, padding)
3. Sizing (width, height)
4. Typography (text-_, font-_)
5. Colors (bg-_, text-_, border-\_)
6. Effects (shadow, opacity)
7. Transitions/animations

Use the `cn()` utility from `@/lib/utils` for conditional or merged class names.

### Where styles live

- **Design tokens:** `styles/globals.css` (`:root`, `.dark`, `@theme inline` for colors, radius, `--font-heading`)
- **Font config:** `app/layout.tsx` (Inter via next/font), `styles/globals.css` (Cal Sans via `@fontsource/cal-sans` and `@theme inline`)
- **Global base:** `@layer base` in `styles/globals.css` (`body`: `bg-background text-foreground`, `font-feature-settings: 'rlig' 1, 'calt' 1`)
- **World map:** `.world-map` rules in `styles/globals.css` (fills and strokes for land/visited/lived)

### Color application

- In components: use Tailwind classes that reference theme tokens (e.g. `bg-primary`, `text-muted-foreground`) or the literal palette (e.g. `text-gray-900`, `text-emerald-500`) as above
- Raw OKLCH is only defined in `styles/globals.css`; do not duplicate OKLCH in component files
