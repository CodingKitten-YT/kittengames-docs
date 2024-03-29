import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'KittenGames',
  description:
    'Fully customizble game website that loads games from a json file.',

  themeConfig: {
    logo: 'https://raw.githubusercontent.com/KittenGames/kittengames.github.io/main/icon.svg',
    siteTitle: 'KittenGames',

    sidebar: [
      {
        items: [{ text: 'Intro', link: '/intro' }],
      },
      {
        text: 'Making a game library',
        collapsed: false,
        items: [
          { text: 'Make a list', link: '/game-library/make-a-list.md' },
          { text: 'File structure', link: '/game-library/file-structure.md' },
        ],
      },
      {
        text: 'Customization',
        collapsed: false,
        items: [
          { text: 'Quick Start', link: '/customization/quickstart.md' },
          { text: 'Custom Css', link: '/customization/custom-css.md' },
        ],
      },
      {
        text: 'Deploying',
        collapsed: false,
        items: [
          { text: 'Quick deployments', link: '/deploying/quick-deploy.md' },
          { text: 'Run it locally', link: '/deploying/locally.md' },
          { text: 'Desktop app', link: '/deploying/desktop-app.md' },
        ],
      },
    ],
  },
});
