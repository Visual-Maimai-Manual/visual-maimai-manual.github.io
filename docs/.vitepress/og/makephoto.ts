// 这个TS参考了https://kurohsu.dev/notes/vitepress-%E8%87%AA%E5%8B%95%E7%94%9F%E6%88%90-og-%E5%9C%96%E7%89%87.html
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * 將長文字分成多行
 * @param text 要分行的文字
 * @param maxCharsPerLine 每行最大字元數
 * @param maxLines 最大行數
 */
function splitTextIntoLines(text: string, maxCharsPerLine: number = 20, maxLines: number = 3): string[] {
  const lines: string[] = []
  let currentLine = ''

  // 處理中文和英文混合的文字
  for (const char of text) {
    if (currentLine.length >= maxCharsPerLine) {
      lines.push(currentLine)
      currentLine = char

      if (lines.length >= maxLines - 1) {
        break
      }
    } else {
      currentLine += char
    }
  }

  if (currentLine && lines.length < maxLines) {
    lines.push(currentLine)
  }

  // 如果最後一行太長，加上省略號
  if (text.length > currentLine.length + lines.join('').length) {
    lines[lines.length - 1] = lines[lines.length - 1].slice(0, -3) + '...'
  }

  return lines
}

/**
 * 跳脫 XML 特殊字元
 */
function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * 生成 OG 圖片
 * @param title 文章標題
 * @param outputPath 輸出路徑
 */
export async function generateOgImage(title: string, outputPath: string): Promise<void> {
  try {
    // 確保輸出目錄存在
    const outputDir = path.dirname(outputPath)
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // 讀取 SVG 模板
    const templatePath = path.join(__dirname, 'og-template.svg')
    let svgTemplate = fs.readFileSync(templatePath, 'utf-8')

    // 將標題分成多行（每行最多 20 個字元，最多 3 行）
    const lines = splitTextIntoLines(title, 20, 3)

    // 建構多行文字的 SVG (使用 2x 解析度)
    let textElements = ''
    const startY = 400  // 2x of 200
    const lineHeight = 160  // 2x of 80

    lines.forEach((line, index) => {
      const y = startY + (index * lineHeight)
      textElements += `
      <text x="0" y="${y}" font-family="Noto Sans SC, sans-serif" font-size="144" font-weight="500" fill="#ffffff" text-anchor="start">
        ${escapeXml(line)}
      </text>`
    })

    // 替換模板中的標題
    svgTemplate = svgTemplate.replace(
      /<text[^>]*>\s*\{\{title\}\}\s*<\/text>/s,
      textElements
    )

    // 將 SVG (2400x1260) 轉換並縮放為 PNG (1200x630)
    // 使用高密度渲染和 Lanczos3 縮放確保文字清晰
    await sharp(Buffer.from(svgTemplate), {
      density: 200  // 提高 SVG 渲染密度到 200 DPI
    })
      .resize(1200, 630, {
        fit: 'cover',
        kernel: 'lanczos3',  // 使用高品質的 Lanczos3 縮放演算法
        position: 'center'
      })
      .png({
        compressionLevel: 6,  // PNG 壓縮等級 (0-9)
        palette: false  // 使用全彩 PNG
      })
      .toFile(outputPath)

    console.log(`✓ Generated OG image: ${outputPath}`)
  } catch (error) {
    console.error(`✗ Failed to generate OG image for "${title}":`, error)
    throw error
  }
}