## pabloporto.me

[![CD Pipeline](https://github.com/portovep/pabloporto.me/actions/workflows/pipeline.yml/badge.svg?branch=main)](https://github.com/portovep/pabloporto.me/actions/workflows/pipeline.yml)

Pablo's personal website built with React, TypeScipt, NextJS and Tailwind. You can check it live at [pabloporto.me](https://pabloporto.me).

## Motivation

I change the tech stack that use to build my personal website every few years. I started using Wordpress, then moved to Jekyll, then React/Redux and finally Next.js. I do this to have a playground where I can play around with new frontend and CI/CD technologies.

You can use this project as an example on how to create a continuous deployment pipeline with Github Actions for a website/webapp built with Next.js. The CI/CD pipeline includes automated code formatting, linting, dependecy checks and [web vitals checks](https://web.dev/vitals/).

## How To Use

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

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

## Screenshots

TBC

## Tech stack

<b>Built with</b>

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
- [GitHub Actions](https://github.com/features/actions)

## Features & roadmap

- [x] Code formatting with Prettier
- [x] Linting with ESLint
- [x] Trunk base development and Continuous deployment with Github Actions
- [x] Dependency check and auto-update with Dependabot
- [x] Web Vitals check with lighthouseci
- [x] CDN hosting with Vercel
- [ ] Unit test with Jest/React testing library
- [ ] Acceptance test with Cypress.js
- [ ] Automated secret scanning
- [ ] Support for i18n

## API Reference

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Tests

TBC

## Contribute

Suggestions on new tools to try and things to add are welcome. 🙏

## License

This project is open source and available under the [MIT License](LICENSE).
