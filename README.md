# pabloporto.me

[![CD Pipeline](https://github.com/portovep/pabloporto.me/actions/workflows/pipeline.yml/badge.svg?branch=main)](https://github.com/portovep/pabloporto.me/actions/workflows/pipeline.yml)

My personal website built with React, TypeScript, NextJS and Tailwind. Live at [pabloporto.me](https://pabloporto.me).

## About

I change the tech stack that use to build my personal website every few years.
I started using Wordpress, then moved to Jekyll, then React/Redux and finally
Next.js. This project serves as my playground for experimenting with modern frontend technologies and CI/CD practices. It demonstrates a complete deployment pipeline with GitHub Actions, including automated code formatting, linting, dependecy checks and [web
vitals checks](https://web.dev/vitals/).

## Development

```bash
# Start development server
npm run dev
```

To run the linter:

```bash
npm run lint
# or
npm run lint:fix
```

To run the code formatter:

```bash
npm run format
# or
npm run format:fix
```

## Testing

```bash
# Run end-to-end tests
npm run test:e2e

# Check performance metrics
npm run performance:check
```

## Git Hooks

This project uses Husky for pre-commit hooks that run the formatter and linter:

```bash
# Install and setup
npm install --save-dev husky
npx husky init

```

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vercel](https://vercel.com/) - Hosting
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## Features

- ✅ Code formatting and linting
- ✅ Continuous deployment pipeline
- ✅ Performance monitoring
- ✅ Pre-commit hooks
- ✅ E2E testing
- ⏳ Unit testing
- ⏳ i18n support

## Contributing

Suggestions and improvements are welcome! 🙏

## License

MIT License - see [LICENSE](LICENSE) for details.
