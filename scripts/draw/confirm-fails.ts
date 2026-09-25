// ============================================================
// 精查（断点重建版 /tmp 丢失后）：
//  A 组：8 张待确认 FAIL（2 倍分辨率单图 VLM 复核）
//  B 组：6 张已修复图（验证修复后是否干净）
// 用法: bun scripts/draw/confirm-fails.ts
// 输出: /tmp/vlm-sweep/confirm.json
// ============================================================
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import sharp from 'sharp'
import ZAI from 'z-ai-web-dev-sdk'

const DIR = '/tmp/vlm-sweep'
const manifest: Record<string, { file: string }> = JSON.parse(readFileSync(join(DIR, 'manifest.json'), 'utf8'))

// A 组：上一会话未及精查的 8 张 FAIL
const TODO = [254, 285, 299, 354, 399, 413, 424, 505]
// B 组：提交 2f28472 已修复的 6 张（验证修复效果）
const FIXED = [150, 207, 260, 294, 370, 444]

const zai = await ZAI.create()

const confirm: Record<string, string> = (() => {
  try {
    return JSON.parse(readFileSync(join(DIR, 'confirm.json'), 'utf8'))
  } catch {
    return {}
  }
})()
// 已知历史结论（上一会话确认）
confirm['10'] = 'PASS'
confirm['120'] = 'PASS'
confirm['181'] = 'PASS'
for (const i of FIXED) confirm[String(i)] = 'FIXED(待复核)'

const CONFIRM_PROMPT = `这是教材插图的高分辨率渲染。此前低分辨率初检怀疑存在排版缺陷。
请仔细确认全图是否真的存在以下缺陷之一：
A) 文字与文字相互重叠导致无法阅读（不是紧邻、不是贴近，是真的压字交叠）
B) 文字压在线条/曲线/箭头/色块上导致难以辨认（文字与图形交叠且无底色衬托）
C) 文字或图形超出画布被裁切（内容被切断缺失）
判定标准从严：轻微接触、文字带白底衬托、有意设计的标签在色块/箭头内部、图例紧邻——都算 PASS。
回答格式：第一行只写 PASS 或 FAIL；若 FAIL，第二行起用不超过 60 字精确描述位置与缺陷。`

const delays = [20000, 45000, 90000]

async function judge(idx: number, png: string): Promise<string> {
  const b64 = readFileSync(png).toString('base64')
  for (let attempt = 0; attempt <= delays.length; attempt++) {
    try {
      const out = await zai.chat.completions.createVision({
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: CONFIRM_PROMPT },
              { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
            ] as never,
          },
        ],
        thinking: { type: 'disabled' },
      })
      const content = String(out.choices?.[0]?.message?.content ?? '').trim()
      if (content.startsWith('PASS')) return 'PASS'
      if (content.startsWith('FAIL')) return `FAIL|${content.split('\n').slice(1).join(' ').slice(0, 90)}`
    } catch {
      /* 退避重试 */
    }
    if (attempt < delays.length) {
      console.log(`  #${idx} 第 ${attempt + 1} 次失败，退避 ${delays[attempt] / 1000}s`)
      await new Promise((r) => setTimeout(r, delays[attempt]))
    }
  }
  return 'ERROR'
}

async function runGroup(name: string, idxs: number[], tag: string) {
  for (const idx of idxs) {
    const key = String(idx)
    // 断点续跑：已有最终结论（PASS / FAIL| / ERROR 之外）则跳过
    const prev = confirm[key] ?? ''
    if (prev === 'PASS' || prev.startsWith('FAIL')) {
      console.log(`[${name}] #${idx} 已有结论，跳过`)
      continue
    }
    const file = manifest[key].file
    const png = join(DIR, `confirm-${idx}.png`)
    await sharp(file, { density: 150 }).resize({ width: 1800 }).png().toFile(png)
    console.log(`[${name}] #${idx} ${file} …`)
    confirm[key] = await judge(idx, png)
    console.log(`   -> ${confirm[key]}`)
    writeFileSync(join(DIR, 'confirm.json'), JSON.stringify(confirm, null, 1))
    await new Promise((r) => setTimeout(r, 8000))
  }
}

await runGroup('A 精查', TODO, 'confirm')
await runGroup('B 复核', FIXED, 'verify')
writeFileSync(join(DIR, 'confirm.json'), JSON.stringify(confirm, null, 1))

const real = Object.entries(confirm).filter(([, v]) => v.startsWith('FAIL'))
const errored = Object.entries(confirm).filter(([, v]) => v === 'ERROR' || v.startsWith('FIXED'))
console.log(`\n完成：确认真实缺陷 ${real.length} 张 · 待处理 ERROR/未复核 ${errored.length}`)
for (const [k, v] of real) console.log(`  #${k} ${manifest[k]?.file}\n     ${v}`)
