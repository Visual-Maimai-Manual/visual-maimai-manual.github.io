import { generateOgImage } from './makephoto'
import path from 'path'
import fs from 'fs/promises'

export default function makeOG(siteUrl: string, buildTimestamp: string | number) {
	return async function transformPageData(pageData: any) {
		try {
			if (!pageData || !pageData.relativePath) return

			// 為動態標籤頁面設定正確的標題
			if (pageData.relativePath.startsWith('tags/') &&
					pageData.relativePath !== 'tags/index.md' &&
					pageData.params?.tag) {
				pageData.title = `標籤：${pageData.params.tag}`
			}

			// 為有標題的頁面生成 OG 圖片（排除首頁）
			if (pageData.title && pageData.title !== 'Kuro Hsu 的筆記') {
				const ogImagePath = `/og/${pageData.relativePath.replace(/\.md$/, '.png')}`
				const outputPath = path.join(process.cwd(), 'docs/public', ogImagePath)

				// 确保输出目录存在
				await fs.mkdir(path.dirname(outputPath), { recursive: true })

				// 生成 OG 圖片
				await generateOgImage(pageData.title, outputPath)

				// 初始化 head 陣列
				if (!pageData.frontmatter) pageData.frontmatter = {}
				if (!pageData.frontmatter.head) pageData.frontmatter.head = []

				// 新增時間戳 query string 來防止快取
				const ogImageUrl = `${siteUrl}${ogImagePath}?v=${buildTimestamp}`

				// 注入 OG meta 標籤
				pageData.frontmatter.head.push(
					['meta', { property: 'og:image', content: ogImageUrl }],
					['meta', { property: 'og:image:width', content: '1200' }],
					['meta', { property: 'og:image:height', content: '630' }],
					['meta', { property: 'og:title', content: pageData.title }],
					['meta', { property: 'og:description', content: pageData.description || pageData.frontmatter.description || '技術筆記、學習紀錄與生活記錄' }],
					['meta', { property: 'twitter:card', content: 'summary_large_image' }],
					['meta', { property: 'twitter:image', content: ogImageUrl }],
					['meta', { property: 'twitter:title', content: pageData.title }],
					['meta', { property: 'twitter:description', content: pageData.description || pageData.frontmatter.description || '技術筆記、學習紀錄與生活記錄' }]
				)
			}
		} catch (error) {
			console.warn(`Warning: Failed to generate OG image for ${pageData?.relativePath}:`, error)
		}
	}
}