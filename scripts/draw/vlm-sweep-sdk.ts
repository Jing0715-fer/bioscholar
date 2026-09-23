// ============================================================
// VLM 分批审查（SDK 单进程版——避免多进程 OOM 与 CLI 限流）
// 用法: bun scripts/draw/vlm-sweep-sdk.ts
// 前置: 先跑 render-all-sweep.ts 生成 /tmp/vlm-sweep/{NNNN.png, manifest.json}
// 断点续跑：读取 results.json 跳过已完成批；429 自动退避重试
// ============================================================
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import ZAI from 'z-ai-web-dev-sdk'

const DIR = '/tmp/vlm-sweep'
const RES = join(DIR, 'results.json')
const BATCH = 5
const CONCURRENCY = 2

const manifest: Record<string, { file: string }> = JSON.parse(readFileSync(join(DIR, 'manifest.json'), 'utf8'))
const total = Object.keys(manifest).length
const batches: number[][] = []
for (let s = 1; s <= total; s += BATCH) {
  batches.push(Array.from({ length: Math.min(BATCH, total - s + 1) }, (_, k) => s + k))
}

let results: Record<string, string> = {}
if (existsSync(RES)) results = JSON.parse(readFileSync(RES, 'utf8'))

const PROMPT = `这是教材插图的批量质检，共按顺序给出若干张图（编号从 1 开始）。请逐张检查排版缺陷：
A) 文字与文字相互重叠压字（无法阅读）
B) 文字压在线条/曲线/箭头/色块边缘上导致难以辨认
C) 文字或图形超出画布被裁切（内容被切断）
注意：以下不算缺陷——图例标签紧邻但不遮挡；标签有意置于色块/箭头/结构内部且清晰可读；科学示意中元素贴近。
输出格式：每行一条，格式为"编号|PASS"或"编号|FAIL|不超过25字的位置描述"，只输出这些行，不要其他内容。`

const zai = await ZAI.create()

function toDataUri(i: number): string {
  const b64 = readFileSync(join(DIR, String(i).padStart(4, '0') + '.png')).toString('base64')
  return `data:image/png;base64,${b64}`
}

async function callVLM(idxs: number[]): Promise<string> {
  const content: Array<Record<string, unknown>> = [{ type: 'text', text: PROMPT }]
  for (const i of idxs) content.push({ type: 'image_url', image_url: { url: toDataUri(i) } })
  const out = await zai.chat.completions.createVision({
    messages: [{ role: 'user', content: content as never }],
    thinking: { type: 'disabled' },
  })
  return String(out.choices?.[0]?.message?.content ?? '')
}

async function runBatch(idxs: number[]): Promise<boolean> {
  const delays = [3000, 8000, 20000]
  for (let attempt = 0; attempt <= delays.length; attempt++) {
    try {
      const content = await callVLM(idxs)
      let parsed = 0
      for (const line of content.split('\n')) {
        const m = line.trim().match(/^(\d+)\s*[|｜:：]?\s*(PASS|FAIL)\s*[|｜]?\s*(.*)$/)
        if (!m) continue
        const local = Number(m[1])
        if (local >= 1 && local <= idxs.length) {
          results[String(idxs[local - 1])] = m[2] === 'PASS' ? 'PASS' : `FAIL|${m[3].trim()}`
          parsed++
        }
      }
      if (parsed >= idxs.length) return true
    } catch {
      // 退避重试
    }
    if (attempt < delays.length) await new Promise((r) => setTimeout(r, delays[attempt]))
  }
  for (const g of idxs) if (!results[String(g)] || results[String(g)] === 'RETRY') results[String(g)] = 'RETRY'
  return false
}

const todo = batches.filter((idxs) => idxs.some((i) => !results[String(i)] || results[String(i)] === 'RETRY'))
console.log(`待审 ${todo.length}/${batches.length} 批（每批 ${BATCH} 张）`)

let done = 0
const queue = [...todo]
async function worker() {
  while (queue.length) {
    const idxs = queue.shift()!
    await runBatch(idxs)
    done++
    if (done % 10 === 0 || queue.length === 0) {
      writeFileSync(RES, JSON.stringify(results, null, 1))
      const fails = Object.values(results).filter((v) => v.startsWith('FAIL')).length
      const retries = Object.values(results).filter((v) => v === 'RETRY').length
      const ok = Object.values(results).filter((v) => v === 'PASS').length
      console.log(`进度 ${done}/${todo.length} · PASS ${ok} · FAIL ${fails} · RETRY ${retries} · ${new Date().toISOString().slice(11, 19)}`)
    }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker))
writeFileSync(RES, JSON.stringify(results, null, 1))

const fails = Object.entries(results).filter(([, v]) => v.startsWith('FAIL'))
const retries = Object.values(results).filter((v) => v === 'RETRY').length
console.log(`\n完成：FAIL ${fails.length} 张，RETRY ${retries} 张`)
for (const [k, v] of fails) console.log(`  #${k} ${manifest[k]?.file} — ${v.slice(5)}`)
if (retries > 0) console.log(`（仍有 RETRY，可重跑本脚本续审）`)
