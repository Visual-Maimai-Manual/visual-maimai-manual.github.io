import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Visual Maimai文档",
  description: "A VitePress Site",
  
  locales: {
    root: {
      label: '中文（简体）',
      lang: 'cn'
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/'
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/intro/what-is-vm' },
      { text: '下载', link: '/download' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '什么是Visual Maimai', link: '/intro/what-is-vm' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
