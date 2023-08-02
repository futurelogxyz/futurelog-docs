// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Futurelog',
  tagline: 'leave things better than you found them',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.futurelog.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Futurelog', // Usually your GitHub org/user name.
  projectName: 'futurelog-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/futurelogxyz/futurelog-docs/tree/main',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 5,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/futurelogxyz/futurelog-docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'keywords', content: 'AI, AIGC, AIOps, future, log, prompt, engineering, tutorial, docs,' }],
      // Replace with your project's social card
      image: 'img/futurelog.svg',
      navbar: {
        // style: 'dark',
        title: 'Futurelog Docs',
        logo: {
          alt: 'Futurelog Logo',
          src: 'img/futurelog-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/blog/tags', label: 'Tags', position: 'right' },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/futurelogxyz/futurelog-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'LLM Prompt Engineering',
                to: '/docs/category/llm-prompt-engineering',
              },
              {
                label: 'Text2Img Prompt Engineering',
                to: '/docs/category/text2img-prompt-engineering',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/wallezen',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/wallezen007',
              },
              {
                label: 'Futurelog',
                href: 'https://futurelog.xyz',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Futurelog. Powered by [Vercel](https://vercel.com/) and [Docusaurus.](https://docusaurus.io/)`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
