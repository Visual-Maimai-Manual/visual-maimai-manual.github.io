import { defineConfig } from 'vitepress'

import { zhNav, enNav } from './nav/index'
import { zhSidebar, enSidebar } from './sidebar/index'


export default defineConfig({
  base: '/',
  title: "Visual Maimai",
  description: " A Manual About Visual Maimai",
  locales: {
    root: {
      label: '中文（简体）',
      lang: 'zh-CN',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar
      }
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Visual-Maimai-Manual/visual-maimai-manual.github.io' },
      { icon: 'discord', link: 'https://discord.gg/R5eGkMk9Pj' }
    ]
  }
})