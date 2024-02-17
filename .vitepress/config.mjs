import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Inertia Go",
  description: "Create modern single-page apps using classic server-side Go routing. Works with any Go backend.",
  base: '/inertia-go-docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/introduction' }
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Quick Start', link: '/quick-start' }
        ]
      },
      {
        text: 'Digging Deeper',
        items: [
          { text: 'Share Data', link: '/props' },
          { text: 'Server-side Render', link: '/ssr' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/humweb/inertia-go' }
    ]
  }
})
