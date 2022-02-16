[![Build](https://github.com/margual56/nextjs-project-template/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/margual56/nextjs-project-template/actions/workflows/main.yml)

# NextJS template project

## What custom things does this have?

1. It uses SASS instead of plain CSS
2. An extra example using an API (see next section)
3. It uses TypeScript instead of JavaScript
4. `eslint` has been configured how I like it (tabulations with 4 spaces and all the lines ending in `;`)
5. `lint-staged` using `prettier` and `Husky` has been added (so when committing, the code is automatically formatted and checked)
6. VScode settings for auto-formatting on paste, save and more
7. Uses Yarn
8. GitHub Action to build the web/app on push or pull request to the main branch

## Extra example

I have implemented a simple request to [jsonplaceholder.typecode.com](https://jsonplaceholder.typicode.com/posts) as an example on how to deal with APIs in NextJS using TypeScript.

## Requirements

This project is configured to use VScode with the [Prettier](https://open-vsx.org/vscode/item?itemName=esbenp.prettier-vscode) extension installed, though I guess you could use other tools (no warranties).

---

## Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
