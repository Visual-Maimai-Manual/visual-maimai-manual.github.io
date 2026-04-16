import { DefaultTheme } from 'vitepress'

export const zhSidebar: DefaultTheme.Sidebar = [
      {
        text: '简介',
        items: [
          { text: '什么是Visual Maimai', link: '/intro/what-is-vm' },
          { text: '下载Visual Maimai', link: '/intro/download' },
          { text: '制作语言包', link: '/guide/make-langpack' }
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
          { text: '本地发起或加入', link: '/co-op/co-op' },
          { text: '内网穿透：Easytier', link: '/co-op/easytier'},
          { text: '内网穿透：Zerotier', link: '/co-op/zerotier'},
          { text: '内网穿透：Astral', link: '/co-op/astral'}
        ]
        }
    ]
    // 啦啦啦啦埋彩蛋喵 (=^･ω･^=)