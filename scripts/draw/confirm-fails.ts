// ============================================================
// FAIL 精查：2 倍分辨率单图复核（消除低分辨率误报）
// 用法: bun scripts/draw/confirm-fails.ts
// 前置: /tmp/vlm-sweep/{manifest.json, results.json}（vlm-sweep-sdk 产物）
// 断点续跑：confirm.json 中已判定项不重查
// ============================================================
import { readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import sharp from 'sharp'
import ZAI from 'z-ai-web-dev-sdk'

const DIR = '/tmp/vlm-sweep'
const manifest: Record<string, { file: string }> = JSON.parse(readFileSync(join(DIR, 'manifest.json'), 'utf8'))
const results: Record<string, string> = JSON.parse(readFileSync(join(DIR, 'results.json'), 'utf8'))
const fails = Object.entries(results).filter(([, v]) => v.startsWith('FAIL'))

const zai = await ZAI.create()
const confirm: Record<string, string> = {}
const prevPath = join(DIR, 'confirm.json')
const prev: Record<string, string> = (() => {
  try {
    return JSON.parse(readFileSync(prevPath, 'utf8'))
  } catch {
    return {}
  }
})()

const PROMPT = (hint: string) => `这是教材插图的高分辨率渲染。此前低分辨率初检怀疑存在排版缺陷，位置线索：「${hint}」。
请仔细确认该位置（以及全图其他位置）是否真的存在以下缺陷之一：
A) 文字与文字相互重叠导致无法阅读（不是紧邻、不是贴近，是真的压字交叠）
B) 文字压在线条/曲线/箭头/色块上导致难以辨认（文字与图形交叠且无底色衬托）
C) 文字或图形超出画布被裁切（内容被切断缺失）
判定标准从严：轻微接触、文字带白底衬托、有意设计的标签在色块/箭头内部、图例紧邻——都算 PASS。
回答格式：第一行只写 PASS 或 FAIL；若 FAIL，第二行起用不超过 60 字精确描述位置与缺陷。`

let n = 0
for (const [k, v] of fails) {
  if (prev[k] === 'PASS' || (prev[k] ?? '').startsWith('FAIL')) {
    confirm[k] = prev[k]
    continue
  }
  n++
  if (n > 1) await new Promise((r) => setTimeout(r, 8000)) // 限流防护：图间 8s
  const file = resolve(process.cwd(), manifest[k].file)
  const png = join(DIR, `confirm-${k}.png`)
  await sharp(file, { density: 150 }).resize({ width: 1800 }).png().toFile(png)
  const b64 = readFileSync(png).toString('base64')
  const hint = v.slice(5)
  let verdict = 'ERROR'
  const delays = [20000, 45000, 90000]
  for (let attempt = 0; attempt <= delays.length && verdict === 'ERROR'; attempt++) {
    try {
      const out = await zai.chat.completions.createVision({
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: PROMPT(hint) },
              { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
            ] as never,
          },
        ],
        thinking: { type: 'disabled' },
      })
      const content = String(out.choices?.[0]?.message?.content ?? '').trim()
      verdict = content.startsWith('PASS') ? 'PASS' : content.startsWith('FAIL') ? `FAIL|${content.split('\n').slice(1).join(' ').slice(0, 80)}` : 'ERROR'
    } catch {
      if (attempt < delays.length) await new Promise((r) => setTimeout(r, delays[attempt]))
    }
  }
  confirm[k] = verdict
  console.log(`#${k} ${manifest[k].file}`)
  console.log(`   ${verdict}`)
  writeFileSync(join(DIR, 'confirm.json'), JSON.stringify(confirm, null, 1))
}
writeFileSync(join(DIR, 'confirm.json'), JSON.stringify(confirm, null, 1))
const real = Object.entries(confirm).filter(([, v]) => v.startsWith('FAIL'))
const errored = Object.entries(confirm).filter(([, v]) => v === 'ERROR')
console.log(`\n精查完成：确认真实缺陷 ${real.length} 张 · 待重查 ERROR ${errored.length} 张`)
