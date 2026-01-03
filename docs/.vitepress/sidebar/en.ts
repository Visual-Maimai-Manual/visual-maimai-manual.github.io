import { DefaultTheme } from 'vitepress'

export const enSidebar: DefaultTheme.Sidebar = [
  {
    text: 'Introduction',
    items: [
      { text: 'What is Visual Maimai', link: '/en/intro/what-is-vm' },
      { text: 'Download Visual Maimai', link: '/en/intro/download' },
    ]
    },
    {
     text: 'Get Started',
     items:[
        { text: 'About Visual Maimai`s GUI', link: '/en/guide/gui'},
        { text: 'Make Charts', link: '/en/guide/make-charts'}
    ],
    
  },
  {
  text: 'CO-OP',
        items: [
          { text: 'Local Host or Join', link: '/en/guide/co-op' },
          { text: 'NAT Traversal: Easytier', link: '/en/guide/easytier'},
          { text: 'NAT Traversal: Zerotier', link: '/en/guide/zerotier'},
        ]
        }
]