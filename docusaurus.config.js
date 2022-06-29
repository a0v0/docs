const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Micro",
  tagline: "",
  url: "https://micro.dev",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "micro",
  projectName: "micro",
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "Micro Logo",
        src: "images/micro.png",
      },
      items: [
        // {
        //   href: "/blog",
        //   position: "left",
        //   label: "🗒️ Blog",
        // },
        {
          href: "https://github.com/m3o/m3o",
          position: "left",
          label: "M3O",
        },
        {
          href: "https://github.com/micro",
          position: "left",
          label: "Micro",
        },
        {
          href: "https://github.com/micro/micro",
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
    //           label: "Contributing",
    //           to: "/contributing",
    //         },
    //         {
    //           label: "REST API",
    //           to: "/api/",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Community",
    //       items: [
    //         {
    //           label: "Revolt",
    //           href: "https://app.revolt.chat/invite/Testers",
    //         },
    //         {
    //           label: "Reddit",
    //           href: "https://reddit.com/r/revoltchat/",
    //         },
    //         {
    //           label: "Twitter",
    //           href: "https://twitter.com/revoltchat",
    //         },
    //         {
    //           label: "Mastodon",
    //           href: "https://mastodon.social/@revoltchat",
    //         },
    //       ],
    //     },
    //     {
    //       title: "More",
    //       items: [
    //         /*{
    //           label: 'Blog',
    //           to: '/blog',
    //         },*/
    //         {
    //           label: "GitHub",
    //           href: "https://github.com/revoltchat",
    //         },
    //         {
    //           label: "Project Tracker",
    //           href: "https://github.com/orgs/revoltchat/projects/2?fullscreen=true",
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Licensed under AGPLv3`,
    // },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/micro/docs/blob/master/",
        },
        /*blog: {
          showReadingTime: true,
          editUrl:
          'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },*/
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
