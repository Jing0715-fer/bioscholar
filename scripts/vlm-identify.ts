/** VLM 逐图转录标题/署名/特征，用于反查 Commons 源文件 */
import ZAI from 'z-ai-web-dev-sdk'
import { readFile } from 'node:fs/promises'
import { statSync } from 'node:fs'

const FILES = process.argv.slice(2)

async function main() {
  const zai = await ZAI.create()
  for (const f of FILES) {
    const path = `public/images/bio/commons/${f}`
    const buf = await readFile(path)
    const mime = f.endsWith('.jpg') ? 'image/jpeg' : 'image/png'
    const dataUrl = `data:${mime};base64,${buf.toString('base64')}`
    try {
      const completion = await zai.chat.completions.createVision({
        model: 'glm-5v-turbo',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text' as const,
                text: '请精确转录这张科学图片中出现的：1) 图内大标题/小标题原文（英文逐字）；2) 任何作者署名、来源标注、版权声明文字（逐字）；3) 图片主体内容与配色风格一句话概括（是否是 LadyofHats/Mariana Ruiz 风格的科学插画等）。输出格式：标题=…；署名=…；内容=…。若某项没有则写"无"。',
              },
              { type: 'image_url' as const, image_url: { url: dataUrl } },
            ],
          },
        ],
        thinking: { type: 'disabled' },
      })
      const content = completion.choices[0]?.message?.content ?? ''
      console.log(`\n===== ${f} (${Math.round(statSync(path).size / 1024)}KB) =====`)
      console.log(content)
    } catch (e) {
      console.log(`\n===== ${f} =====`)
      console.log('VLM 失败: ' + (e as Error).message)
    }
  }
}

main()
