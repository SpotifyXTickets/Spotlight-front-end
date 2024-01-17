# Spotlight frontend

This repository contains a typescript based proof of concept (POC) for the Spotlight frontend. It is built with Next.js, uses TailwindCSS and SCSS for styling by utilizing the BEM methodology and uses Cypress and Playwright for testing.

The frontend provides our application with a user-friendly interface where users can login with their Spotify account and get event recommendations based on their Spotify data. It includes diverse pages, where you can explore recommended events and artists. Each recommended event has a percentage showing how much does it match with your music taste. 

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- npm

### Installing
1. Clone the repository:
```
git clone https://github.com/SpotifyXTickets/General-POC.git
```
2. Navigate into the cloned repository:
```
cd General-POC
```
3. Install the dependencies:
```
npm install
```
4. Start the server:
```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages by modifying the files inside `src/pages/`. The pages auto-update as you edit the file.

This project features a custom TailwindCSS configuration with custom values and a function for responsive pixel based font sizes.

All CSS including tailwind should be written in an SCSS file with the BEM methodology.

## ESLint

```bash
npm run lint
```
In order to automatic fix issues while using ESLint run the following line:
```bash
npm run lint -- --fix
```

## Testing

In order to use cypress run the following line:

```bash
npm run cypress
```

In order to use playwright run the following line:

```bash
npm run playwright
```

## Features

- Easy to navigate user-friendly interface
- Ability to login with Spotify
- Ability to select the playlists for which you want to receive recommendations.
- Browsing event recommendations based on your Spotify listening data.
- Percentage indicating how closely the event aligns with your music preferences.
- Redirecting to Ticketmaster to buy the ticket for the selected event.

## Built With

- [Next.js](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Playwright](https://playwright.dev/docs/getting-started-vscode)
- [SCSS](https://sass-lang.com/documentation/syntax/)  

## BEM Methodology

- [BEM Methodology](https://getbem.com)

## Authors

- [@denislav-d](https://github.com/denislav-d) Lead front-end developer
- [@RafSchapendonk](https://github.com/RafSchapendonk) Supporting front-end developer
- [@annabobrovska](https://github.com/annabobrovska) Lead designer
