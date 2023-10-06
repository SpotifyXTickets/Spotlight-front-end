This is a front-end boilerplate for our team to easily create new poc's with the same configurations. This boilerplate should keep evolving during the span of the project so that whenever we use a new technology it will be included in the boilerplate. If anything is unclear or needs to be explained further please notify Raf Schapendonk.

## Getting Started

First install the necessary packages:

```bash
npm install
```

After installling the packages change project name from 'boilerplate' to your project name in the package-lock.json and package.json

Now you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/pages/index.tsx`. The page auto-updates as you edit the file.

This project features a custom tailwind configuration with custom values and a function for responsive pixel based font sizes.

All css including tailwind should be written in an scss file with the BEM methodology

## Testing

In order to use cypress run the following line:

```bash
npm run cypress
```

In order to use playwright run the following line:

```bash
npm run playwright
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind documentation](https://tailwindcss.com/docs/installation) - learn about what tailwindcss has to offer
- [Cypress documentation](https://docs.cypress.io/guides/overview/why-cypress) - learn how cypress works.
- [Playwright documentation](https://playwright.dev/docs/getting-started-vscode) - learn how playwright works.
- [SCSS syntax](https://sass-lang.com/documentation/syntax/) - see what SCSS has to offer.
- [What is BEM](https://getbem.com) - BEM methodology explained.
