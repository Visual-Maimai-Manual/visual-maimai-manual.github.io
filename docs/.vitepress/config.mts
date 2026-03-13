import { defineConfig } from 'vitepress'
import { zhNav, enNav } from './nav'
import { zhSidebar, enSidebar } from './sidebar'
import makeOG from './og/makeOG'
const siteUrl = (process.env.SITE_URL || 'https://visual-maimai-manual.github.io').replace(/\/$/, '')
const buildTimestamp = process.env.BUILD_TIMESTAMP || Date.now().toString()
const transformPageData = makeOG(siteUrl, buildTimestamp)

export default defineConfig({
  base: '/',
  title: "Visual Maimai", 
  description: "A Manual About Visual Maimai", 
  transformPageData,
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
    },
    footer: {
      message: 'Software made by CH3COOOHH',
      copyright: '©SEGA All rights reserved | This website is using CC BY-NC-SA Lisence.'
    }
  }
})