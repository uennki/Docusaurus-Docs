// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CodeMonkey",
  tagline: "Documents 使技术要点得以快速复习",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  i18n: {
    defaultLocale: "zh",
    locales: ["zh"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // hideableSidebar: true,
      autoCollapseSidebarCategories: true,
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: "14JKZKMSA3D",
      //   apiKey: "756e3f5b0d332d08511a09d60e5fc71a",
      //   indexName: "dev_uennki",
      //   contextualSearch: true,
      // },
      navbar: {
        hideOnScroll: true,
        title: "CodeMonkey",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "技术文档",
          },
          { to: "/blog", position: "left", label: "博客" },
          // {
          //   type: "doc",
          //   label: "API",
          //   docId: "api/index",
          // },
          // {
          //   position: 'left',
          //   label: 'Tools',
          //   items: [
          //     {
          //       type: 'doc',
          //       label: 'Tool 1',
          //       docId: 'intro',
          //     },
          //     {
          //       type: 'doc',
          //       label: 'Tool 2',
          //       docId: 'intro',
          //     },
          //   ]
          // },
          {
            href: "https://github.com/uennki",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Docs",
      //       items: [
      //         {
      //           label: "Tutorial",
      //           to: "/docs/intro",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Community",
      //       items: [
      //         {
      //           label: "Stack Overflow",
      //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //         },
      //         {
      //           label: "Discord",
      //           href: "https://discordapp.com/invite/docusaurus",
      //         },
      //         {
      //           label: "Twitter",
      //           href: "https://twitter.com/docusaurus",
      //         },
      //       ],
      //     },
      //     {
      //       title: "More",
      //       items: [
      //         {
      //           label: "Blog",
      //           to: "/blog",
      //         },
      //         {
      //           label: "GitHub",
      //           href: "https://github.com/facebook/docusaurus",
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
