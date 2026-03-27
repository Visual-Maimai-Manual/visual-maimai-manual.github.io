import { defineConfig } from 'vitepress' // Vitepress configuration file
import { zhNav, enNav } from './nav' // Nav Bar, imported from nav.ts
import { zhSidebar, enSidebar } from './sidebar' // Sidebar, imported from sidebar/index.ts


export default defineConfig({
  base: '/',
  title: "Visual Maimai", 
  description: "A Manual About Visual Maimai", 
  locales: {
    root: {
      label: '中文（简体）',
      lang: 'zh',
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
        sidebar: enSidebar,
      }
    }
  },

  themeConfig: {
    logo: "https://raw.githubusercontent.com/Visual-Maimai-Manual/visual-maimai-manual.github.io/refs/heads/main/public/favicon.ico",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Visual-Maimai-Manual/visual-maimai-manual.github.io' },
      { icon: 'discord', link: 'https://discord.gg/R5eGkMk9Pj' }
    ],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Software made by CH3COOOHH | The software is an unofficial hobby project and is not affiliated with SEGA.',  // Copyright
      copyright: '©SEGA All rights reserved | This website is using CC BY-NC-SA License.'
    }
  }
})
// 快去感谢CH3COOOHH大佬在百忙之中维护Visual Maimai口牙！！！！！！！！！
// Thanks to CH3COOOHH for coding Visual Maimai in his busy schedule!!!!!!!!!!!!!!