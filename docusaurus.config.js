const github = "https://github.com/Rockz-one/fwd-docs"
const domain = "fwd.rockz.one"
const URL    = "https://" + domain

module.exports = {
  title: 'fwd',
  tagline: 'Forward services to the internet over ssh. Fast & simple',
  url: URL,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'fwd',
  projectName: 'fwd',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      title: 'fwd',
      logo: {
        alt: 'fwd logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: github,
          label: 'Github',
          position: 'left'
        },
        {
          href: URL + "/console",
          label: 'Console',
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
              label: 'The Docs',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: github,
            },
          ],
        },
        {
          title: 'Help',
          items: [
            {
              label: 'GitHub',
              href: github,
            }
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'GitHub',
              href: github,
            },
          ],
        },
      ],
      copyright: 'fwd is just gettin started... leave issues on github for feature requests or bugs',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/Rockz-one/fwd-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
