// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/okaidia');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DayZ Legacy',
  tagline: 'Classic DayZ Standalone, renewed for modern times.',
  url: 'https://dayzlegacydev.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dayzlegacydev', // Usually your GitHub org/user name.
  projectName: 'dayzlegacydev.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },
  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.74/dist/shoelace.js',
      type: "module",
    }
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Lato:wght@400;500;700&family=Roboto+Mono:wght@400;700&display=swap',
    'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.74/dist/themes/dark.css',
    "https://fonts.googleapis.com/icon?family=Material+Icons"
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/dayzlegacydev/dayzlegacydev.github.io/tree/master/'
        },
        blog: {
          path: 'blog',
          blogSidebarCount: 0,
          showReadingTime: true,
          editUrl:
            'https://github.com/dayzlegacydev/dayzlegacydev.github.io/tree/master/',
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
      announcementBar: {
        id: 'announcementBar', // Increment on change
        content: 'Important project update available <a href="https://dayzlegacy.dev/blog/progress-report-may-2023/">here.</a>',
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'YAP33BKRCA',
        // Public API key: it is safe to commit it
        apiKey: '7d68c3181a134366b669225073fed1cb',
        indexName: 'dayzlegacydev',
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Algolia search parameters
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
        //... other Algolia params
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: 'img/logo.png',
      metadata: [{ name: 'twitter:card', content: 'summary' }],
      navbar: {
        title: 'DayZ Legacy',
        logo: {
          alt: 'DayZ Legacy Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: 'blog', label: 'Blog', position: 'left' },
          // {
          //   to: '/progress/milestones', label: 'Progress', position: 'left',
          //   items: [
          //     {
          //       label: 'Major Milestones',
          //       to: '/progress/milestones',
          //     }
          //   ]
          // },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Documentation',
          // },
          // { to: '/docs/faq', label: 'FAQ', position: 'left' },
          // {
          //   label: 'Galleries', position: 'left',
          //   items: [
          //     {
          //       label: 'Gameplay Videos',
          //       to: '/gallery/videos',
          //     },
          //     {
          //       label: 'Images',
          //       to: '/gallery/images',
          //     }
          //   ]
          // },
          {
            href: 'https://github.com/dayzlegacydev',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `
        Copyright © ${new Date().getFullYear()} DayZ Legacy Team. Built with Docusaurus.
        <br>
        <br>
        <span class="trademark-disclaimer">All third party trademarks (including but not limited to: logos and icons) referenced by DayZ Legacy remain the property of their respective owners. Unless specifically identified as such, DayZ Legacy's use of third party trademarks does not indicate any relationship, sponsorship, or endorsment between DayZ Legacy and the owners of these trademarks.  Any references to the aforementioned trademarks is for non-commercial, informative purposes and should be considered nominative fair use.</span>`,
      },
      prism: {
        theme: darkCodeTheme,
        lightTheme: lightCodeTheme,
        additionalLanguages: ['lisp', 'clojure']
      },
    }),
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

module.exports = config;
