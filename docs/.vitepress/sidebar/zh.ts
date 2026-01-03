import { DefaultTheme } from 'vitepress'

export const zhSidebar: DefaultTheme.Sidebar = [
      {
        text: '简介',
        items: [
          { text: '什么是Visual Maimai', link: '/intro/what-is-vm' },
          { text: '下载Visual Maimai', link: '/intro/download' }
        ]
      },
      {
        text: '入门',
        items: [
          { text: 'Visual Maimai的页面', link: '/guide/gui' },
          { text: '制谱', link: '/guide/make-charts'}
        ]
        },
        {
        text: '谱面共享',
        items: [
          { text: '本地发起或加入', link: '/guide/co-op' },
          { text: '内网穿透：Easytier', link: '/guide/easytier'},
          { text: '内网穿透：Zerotier', link: '/guide/zerotier'},
        ]
        }
    ]