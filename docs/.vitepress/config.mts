import { defineConfig } from 'vitepress'
import { zhNav, enNav } from './nav'
import { zhSidebar, enSidebar } from './sidebar'
import { zhSearch } from './minisearch/zh'

export default defineConfig({
  locales: {
    root: {
      label: '中文（简体）',
      lang: 'zh-CN',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        search: zhSearch
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
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