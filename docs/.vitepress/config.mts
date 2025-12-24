import { defineConfig } from 'vitepress'
import { zhNav, enNav } from './nav'
import { zhSidebar, enSidebar } from './sidebar'

export default defineConfig({
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Visual-Maimai-Manual/visual-maimai-manual.github.io' },
      { icon: 'discord', link: 'https://discord.gg/R5eGkMk9Pj' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})