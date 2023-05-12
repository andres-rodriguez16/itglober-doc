// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://itglober-doc.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'andres-rodriguez16', // Usually your GitHub org/user name.
  projectName: 'itglober-doc', // Usually your repo name.
  deploymentBranch: "main",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Página principal',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/pages', label: 'Páginas', position: 'left'},
          {
            href: 'https://github.com/ITGlobers/itglobers-website',
            label: 'GitHub',
            position: 'right',
          },
        ],
        
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Comunidad',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/itglobers/mycompany/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/explore/tags/itglobers/',
              },
              {
                label: 'GrupoAkaes',
                href: 'https://www.grupoakaes.com',
              },
            ],
          },
          {
            title: 'Colaboradores',
            items: [
              {
                label: 'David Barona',
                to: 'https://github.com/Davidbarona',
              },
              {
                label: 'Cristian Ramirez',
                to: 'https://github.com/imchristiandev',
              },
              {
                label: 'Andres Rodriguez',
                to: 'https://github.com/andres-rodriguez16',
              },
              {
                label: 'Sergio Yepes',
                to: 'https://github.com/SergioYepes',
              },
            ],
          },
          
          {
            title: 'Más',
            items: [
              
              {
                label: 'GitHub',
                href: 'https://github.com/ITGlobers',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Documentación ITGlobers, Inc. Construido con Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
