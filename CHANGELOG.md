# Changelog

## [6.0.0] - 2026-05-17

### Changed

- **Breaking:** Migrate from Pages Router to Next.js App Router ([`5724113`](https://github.com/portovep/pabloporto.me/commit/5724113))
- Migrate blog posts from Markdown to MDX ([#388](https://github.com/portovep/pabloporto.me/pull/388))
- Upgrade Next.js to v16 with Turbopack for local development ([`741162c`](https://github.com/portovep/pabloporto.me/commit/741162c))
- Redesign book display with cover-focused layout ([`677003d`](https://github.com/portovep/pabloporto.me/commit/677003d))
- Refactor photography lightbox using shadcn Dialog ([`b3a98ef`](https://github.com/portovep/pabloporto.me/commit/b3a98ef))
- Migrate buttons and labels to shadcn/ui components ([`dac0174`](https://github.com/portovep/pabloporto.me/commit/dac0174))
- Replace hand-rolled UI with shadcn/ui component library ([`9f1c4c0`](https://github.com/portovep/pabloporto.me/pull/372))
- Improve working page content, structure, and CTA consistency ([`8f472c5`](https://github.com/portovep/pabloporto.me/commit/8f472c5))

### Added

- Add dark mode with `next-themes` and Cal Sans heading font ([#372](https://github.com/portovep/pabloporto.me/pull/372))
- Add photography destination galleries with lightbox ([`33ef50a`](https://github.com/portovep/pabloporto.me/commit/33ef50a))
- Add speaking engagements page ([`d0fc9e5`](https://github.com/portovep/pabloporto.me/commit/d0fc9e5))
- Add reading page with Literal.club integration ([`7eef679`](https://github.com/portovep/pabloporto.me/commit/7eef679))
- Add `/bucharest` page ([`0eb1d77`](https://github.com/portovep/pabloporto.me/commit/0eb1d77))
- Add `createMetadata()` helper and apply SEO metadata to all pages ([`6454479`](https://github.com/portovep/pabloporto.me/commit/6454479))
- Add sitemap generation ([`52b0004`](https://github.com/portovep/pabloporto.me/commit/52b0004))
- Add Vercel Analytics ([`a527d46`](https://github.com/portovep/pabloporto.me/commit/a527d46))
- Add theme switcher dropdown with icons ([`0e29a2d`](https://github.com/portovep/pabloporto.me/commit/0e29a2d))
- Add country tooltip to world map ([`f43d890`](https://github.com/portovep/pabloporto.me/commit/5b5b376))
- Add "See all posts" navigation links on blog post pages ([`5f4c76c`](https://github.com/portovep/pabloporto.me/commit/5f4c76c))
- Add skeleton loading state for reading page ([`365375f`](https://github.com/portovep/pabloporto.me/commit/365375f))
- Add role-based project filtering with badges on working page ([`31dfe69`](https://github.com/portovep/pabloporto.me/commit/31dfe69))
- Add Wanderpass project ([`a1b388f`](https://github.com/portovep/pabloporto.me/commit/a1b388f))
- Add E2E test coverage for photography, reading, speaking, and navigation ([`111516b`](https://github.com/portovep/pabloporto.me/commit/111516b))

### Fixed

- Fix mobile navigation with Sheet-based hamburger menu ([`365375f`](https://github.com/portovep/pabloporto.me/commit/858a2aa))
- Fix photography lightbox navigation and back link ([`7bb9e10`](https://github.com/portovep/pabloporto.me/commit/7bb9e10))
- Fix blur placeholder handling for remote images in BookCard ([`b5b376a`](https://github.com/portovep/pabloporto.me/commit/b5b376a))
- Fix layout spacing and mobile padding consistency across all pages ([`da7d551`](https://github.com/portovep/pabloporto.me/commit/da7d551))
- Fix dark mode photo card shadows on traveling page ([#386](https://github.com/portovep/pabloporto.me/pull/386))
- Fix Literal API endpoint and improve error handling ([`90dc388`](https://github.com/portovep/pabloporto.me/commit/90dc388))

[6.0.0]: https://github.com/portovep/pabloporto.me/releases/tag/v6.0.0

## [5.0.0] - 2023-07-20

### Changed

- Migrate codebase to TypeScript ([`9674656`](https://github.com/portovep/pabloporto.me/commit/9674656))
- Migrate CSS to Tailwind CSS ([`ad367f7`](https://github.com/portovep/pabloporto.me/commit/ad367f7))
- Migrate projects content from JSON to Markdown ([`791e10f`](https://github.com/portovep/pabloporto.me/commit/791e10f))
- Switch to `next/image` for image optimization ([`e27a281`](https://github.com/portovep/pabloporto.me/commit/e27a281))
- Migrate to `@next/font` with Inter typeface ([`1601ffb`](https://github.com/portovep/pabloporto.me/commit/1601ffb))
- Refactor page headers into a single reusable component ([`b207b11`](https://github.com/portovep/pabloporto.me/commit/b207b11))
- Collapse project summaries on working page for a cleaner layout ([`c359cf2`](https://github.com/portovep/pabloporto.me/commit/c359cf2))
- Add multi-role support for project entries ([`aa10982`](https://github.com/portovep/pabloporto.me/commit/aa10982))

### Added

- Add traveling page with interactive world map ([`329d7ec`](https://github.com/portovep/pabloporto.me/commit/329d7ec))
- Add hover effect on visited and lived countries on world map ([`d78f1b1`](https://github.com/portovep/pabloporto.me/commit/d78f1b1))
- Add about page with biography and skills section ([`e441cf9`](https://github.com/portovep/pabloporto.me/commit/e441cf9))
- Add stack page ([`501c8bf`](https://github.com/portovep/pabloporto.me/commit/501c8bf))
- Add making page showcasing pet projects ([`a791a51`](https://github.com/portovep/pabloporto.me/commit/a791a51))
- Add blog posts list and full post pages ([`56a5db2`](https://github.com/portovep/pabloporto.me/commit/56a5db2))
- Add desktop and mobile navigation ([`5ebd6d4`](https://github.com/portovep/pabloporto.me/commit/5ebd6d4))
- Add logo to header ([`1adc415`](https://github.com/portovep/pabloporto.me/commit/1adc415))
- Add Vercel Analytics ([`2b99571`](https://github.com/portovep/pabloporto.me/commit/2b99571))
- Add Lighthouse CI integration for performance monitoring ([`930445c`](https://github.com/portovep/pabloporto.me/commit/930445c))
- Add E2E test coverage with Cypress ([`58afae0`](https://github.com/portovep/pabloporto.me/commit/58afae0))
- Add `robots.txt` and OG/meta tags for SEO ([`a3bb71f`](https://github.com/portovep/pabloporto.me/commit/a3bb71f))
- Add Dependabot configuration for automated dependency updates ([`535655b`](https://github.com/portovep/pabloporto.me/commit/535655b))

### Fixed

- Calculate footer year dynamically ([`eb73e51`](https://github.com/portovep/pabloporto.me/commit/eb73e51))
- Fix nested `<a>` accessibility issue in post summaries ([`14739c4`](https://github.com/portovep/pabloporto.me/commit/14739c4))

[5.0.0]: https://github.com/portovep/pabloporto.me/releases/tag/v5
