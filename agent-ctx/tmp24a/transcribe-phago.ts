import ZAI from 'z-ai-web-dev-sdk'
import { readFile } from 'node:fs/promises'

async function main() {
  const buf = await readFile('/home/z/my-project/agent-ctx/tmp24a/staging/phagocytosis-three-steps-zh.png')
  const dataUrl = `data:image/png;base64,${buf.toString('base64')}`
  const zai = await ZAI.create()
  const completion = await zai.chat.completions.createVision({
    model: 'glm-5v-turbo',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text' as const,
            text: '请逐字转录这张图中出现的全部文字标注（保持原有繁简体写法），并按图中步骤顺序说明每个步骤的画面内容（每步 1-2 句）。不要评价，只做忠实转录与描述。',
          },
          { type: 'image_url' as const, image_url: { url: dataUrl } },
        ],
      },
    ],
    thinking: { type: 'disabled' },
  })
  console.log(completion.choices[0]?.message?.content ?? '')
}
main()
