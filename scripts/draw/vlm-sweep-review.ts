// ============================================================
// VLM 分批审查 /tmp/vlm-sweep 渲染图（5 张/批，4 路并发，断点续跑）
// 用法: bun scripts/draw/vlm-sweep-review.ts [起始批号] [结束批号]
// 输出: /tmp/vlm-sweep/results.json（增量合并）
// ============================================================
import { execFile } from 'node:child_process'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { promisify } from 'node:util'

const exec = promisify(execFile)
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

const from = Number(process.argv[2] ?? 1)
const to = Number(process.argv[3] ?? batches.length)
const todo = batches.slice(from - 1, to).filter((idxs) => idxs.some((i) => !results[String(i)] || results[String(i)] === 'RETRY'))

const PROMPT = `这是教材插图的批量质检，共按顺序给出若干张图（编号从 1 开始）。请逐张检查排版缺陷：
A) 文字与文字相互重叠压字（无法阅读）
B) 文字压在线条/曲线/箭头/色块边缘上导致难以辨认
C) 文字或图形超出画布被裁切（内容被切断）
注意：以下不算缺陷——图例标签紧邻但不遮挡；标签有意置于色块/箭头/结构内部且清晰可读；科学示意中元素贴近。
输出格式：每行一条，格式为"编号|PASS"或"编号|FAIL|不超过25字的位置描述"，只输出这些行，不要其他内容。`

async function runBatch(bi: number, idxs: number[]): Promise<void> {
  const imgs = idxs.map((i) => join(DIR, String(i).padStart(4, '0') + '.png'))
  const tmpOut = join(DIR, `batch-${bi}.json`)
  // 最多 4 次尝试，退避 4s/12s/30s（应对 429 限流）
  const delays = [4000, 12000, 30000]
  for (let attempt = 0; attempt <= delays.length; attempt++) {
    try {
      await exec('z-ai', ['vision', '-p', PROMPT, ...imgs.flatMap((i) => ['-i', i]), '-o', tmpOut], { timeout: 180000 })
      const out = JSON.parse(readFileSync(tmpOut, 'utf8'))
      const content = String(out.choices?.[0]?.message?.content ?? '')
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
      if (parsed >= idxs.length) break // 全部解析成功，结束尝试
    } catch {
      // 调用失败，退避后重试
    }
    if (attempt < delays.length) await new Promise((r) => setTimeout(r, delays[attempt]))
  }
  // 仍未成功解析的标记 RETRY（下一轮可续跑）
  for (const g of idxs) if (!results[String(g)] || results[String(g)] === 'RETRY') results[String(g)] = 'RETRY'
  writeFileSync(RES, JSON.stringify(results, null, 1))
}

// 批内失败自动重试一轮
async function runBatchRetry(bi: number, idxs: number[]): Promise<void> {
  const need = idxs.filter((i) => results[String(i)] === 'RETRY' || !results[String(i)])
  if (!need.length) return
  await runBatch(bi, need)
}

let done = 0
const queue = [...todo.entries()]
async function worker() {
  while (queue.length) {
    const [bi, idxs] = queue.shift()!
    await runBatch(bi + 1, idxs)
    done++
    if (done % 10 === 0 || queue.length === 0) {
      const fails = Object.values(results).filter((v) => v.startsWith('FAIL')).length
      const retries = Object.values(results).filter((v) => v === 'RETRY').length
      console.log(`进度 ${done}/${todo.length} 批 · FAIL ${fails} · RETRY ${retries}`)
    }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker))
// 失败批统一重试一轮（降并发）
const retryQueue = [...todo.entries()].filter(([, idxs]) => idxs.some((i) => results[String(i)] === 'RETRY'))
if (retryQueue.length) {
  console.log(`重试 ${retryQueue.length} 个失败批…`)
  for (const [bi, idxs] of retryQueue) await runBatchRetry(bi + 1, idxs)
}

const fails = Object.entries(results).filter(([, v]) => v.startsWith('FAIL'))
const retries = Object.entries(results).filter(([, v]) => v === 'RETRY')
console.log(`\n审查完成：FAIL ${fails.length} 张，RETRY ${retries.length} 张`)
for (const [k, v] of fails) console.log(`  #${k} ${manifest[k]?.file} — ${v.slice(5)}`)
if (retries.length) console.log(`RETRY 清单: ${retries.map(([k]) => k).join(',')}`)
