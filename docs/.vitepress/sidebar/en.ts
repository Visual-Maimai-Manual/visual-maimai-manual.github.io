import { DefaultTheme } from 'vitepress'

export const enSidebar: DefaultTheme.Sidebar = [
  {
    text: 'Introduction',
    items: [
      { text: 'What is Visual Maimai?', link: '/en/intro/what-is-vm' },
      { text: 'Download Visual Maimai (Mobile verion inclusive)', link: '/en/intro/download' },
      { text: 'Change the UI to English', link: '/en/guide/change-lang'},
      { text: 'Making a Language Pack', link: '/en/guide/make-langpack' }
    ]
    },
    {
     text: 'Getting Started',
     items:[
        { text: 'About Visual Maimai\'s GUI', link: '/en/guide/gui'},
        { text: 'Making Charts', link: '/en/guide/make-charts'}
    ],
    
  },
  {
  text: 'CO-OP',
        items: [
          { text: 'Local Host or Join', link: '/en/co-op/co-op' },
          { text: 'Intranet penetration: Easytier', link: '/en/co-op/easytier'},
          { text: 'Intranet penetration: Zerotier', link: '/en/co-op/zerotier'},
        ]
        }
]