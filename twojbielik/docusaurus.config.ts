import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Twój Bielik',
  tagline: 'Czat AI z sarmackim wąsem',
  favicon: 'img/sllogo.ico',
  deploymentBranch: 'website',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/twojbielik/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'danieltechdev', // Usually your GitHub org/user name.
  projectName: 'twojbielik', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/danieltechdev/twojbielik',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/danieltechdev/twojbielik',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Twój Bielik',
      logo: {
        alt: 'Logo',
        src: 'img/sllogo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Zacznij z nami',
        },
        //  Dodatkowy sidebar
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Baza wiedzy',
        // },

      //  Blog n pozniej
      //  {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://speakleash.org/',
          label: 'Speakleash',
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
              label: 'Wstęp',
              to: '/docs/wstep',
            },
            {
              label: 'Wprowadzenie',
              to: '/docs/category/szybki-start',
            },
            {
              label: 'Baza wiedzy',
              to: '/docs/category/następne-kroki',
            },
            {
              label: 'Zaangażowanie',
              to: '/docs/wklad',
            },
          ],
        },
        {
          title: 'Społeczność',
          items: [

            {
              label: 'Discord',
              href: 'https://discord.com/invite/ZJwCMrxwT7',
            },
            {
              label: 'x.com (dawny Twitter)',
              href: 'https://twitter.com/Speak_Leash',
            },
       
          ],
        },
        {
          title: 'Więcej',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'Czat Arena',
              href: 'https://arena.speakleash.org.pl/',
            },   
            {
              label: 'GitHub',
              href: 'https://github.com/speakleash',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SL`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
