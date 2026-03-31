# pabloporto.me

[![CD Pipeline](https://github.com/portovep/pabloporto.me/actions/workflows/pipeline.yml/badge.svg?branch=main)](https://github.com/portovep/pabloporto.me/actions/workflows/pipeline.yml)

My personal website built with Next.js, TypeScript, Tailwind CSS and shadcn/ui. Live at [pabloporto.me](https://pabloporto.me).

## About

This project serves as my playground for experimenting with modern frontend technologies and CI/CD practices. It includes a complete deployment pipeline with GitHub Actions covering formatting, linting, dependency checks, E2E tests, and [web vitals checks](https://web.dev/vitals/).

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React 19 framework with App Router and Turbopack
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Vercel](https://vercel.com/) - Hosting and analytics
- [Cypress](https://www.cypress.io/) - E2E testing
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## Features

- ✅ Code formatting and linting (ESLint + Prettier)
- ✅ Continuous deployment pipeline
- ✅ Performance monitoring
- ✅ Pre-commit hooks
- ✅ E2E testing
- ✅ Vercel Analytics
- ✅ Sitemap generation
- ⏳ Unit testing
- ⏳ i18n support
- ⏳ Automated secret scanning

## Development

```bash
npm run dev        # start dev server (Turbopack)
npm run lint       # run ESLint
npm run format     # check formatting
npm run format:fix # fix formatting
```

## Testing

```bash
npm run test:e2e          # run Cypress E2E tests
npm run performance:check # check web vitals
```

## Git Hooks

This project uses Husky for pre-commit hooks that run the formatter and linter. The hooks are automatically set up when you run `npm install`.

## Contributing

Suggestions and improvements are welcome! 🙏

## License

MIT License - see [LICENSE](LICENSE) for details.
