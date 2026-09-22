// ============================================================
// 真实图源 caption 上下文 VLM 科学审校（commons/web/pdb 共 ~153 张）
// 维度：图文一致性 / 科学性 / 乱码
// 用法：bun scripts/review/vlm-audit-commons.ts [--conc N] [--only f1,f2] [--dir commons|web|pdb]
// 断点续跑：结果增量写入 /tmp/drawn-audit/vlm-commons.json（ERROR 自动重试）
// 429 限流时指数退避（最多 6 次）
// ============================================================
import ZAI from 'z-ai-web-dev-sdk'
import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { illustrations } from '../../src/data/illustrations'
import { bioinfoIllustrations } from '../../src/data/bioinfo-illustrations'
import { neuroIllustrations } from '../../src/data/neuro-illustrations'
import { microIllustrations } from '../../src/data/micro-illustrations'
import { immunoIllustrations } from '../../src/data/immuno-illustrations'
import { viroIllustrations } from '../../src/data/viro-illustrations'

const REPORT = '/tmp/drawn-audit/vlm-commons.json'
mkdirSync('/tmp/drawn-audit', { recursive: true })

const args = process.argv.slice(2)
function argVal(flag: string): string | undefined {
  const i = args.indexOf(flag)
  return i >= 0 ? args[i + 1] : undefined
}
const ONLY = argVal('--only')?.split(',').filter(Boolean)
const DIR_FILTER = argVal('--dir')
const CONC = Number(argVal('--conc') ?? 3)

interface Illustration { src: string; caption: string; credit?: string }

const allRecords: Record<string, Illustration[]> = {
  ...illustrations,
  ...bioinfoIllustrations,
  ...neuroIllustrations,
  ...microIllustrations,
  ...immunoIllustrations,
  ...viroIllustrations,
}

interface Entry { file: string; dir: string; sectionId: string; caption: string }
const entries: Entry[] = []
for (const [sectionId, list] of Object.entries(allRecords)) {
  for (const illu of list ?? []) {
    const m = /^\/images\/bio\/(commons|web|pdb)\/([A-Za-z0-9_.-]+)$/.exec(illu.src)
    if (!m) continue
    if (DIR_FILTER && m[1] !== DIR_FILTER) continue
    entries.push({ dir: m[1], file: m[2], sectionId, caption: illu.caption ?? '' })
  }
}

interface Result {
  file: string
  sectionId: string
  verdict: 'PASS' | 'FAIL' | 'ERROR'
  match?: boolean; science?: boolean; garbled?: boolean
  issues?: string; fix_hint?: string; note?: string
}

const PROMPT = (e: Entry) => `你是资深生物学教授，正在为教材做出版级配图科学审校。这张图片将用于教材小节「${e.sectionId}」，配套图注如下：

「${e.caption}」

请逐项严格审查：
1. 图文一致性：图片实际内容与图注描述是否相符（图注描述的对象、结构、过程与图中所示是否一致；图注提及的关键标注在图中是否存在）
2. 科学性：图片本身有无科学性错误——标注指向错误、结构关系错误、方向/数值错误、分类错误等（结合生物学专业知识判断）
3. 乱码可读性：图内文字有无乱码方框□、字符缺失、严重不可读

判定标准：图片为真实教学图源（维基共享/期刊/数据库渲染），并非代码绘制；只有确凿的科学性错误或图文明显不符才判 FAIL；图注中超出图片范围的知识性扩展不算不符。

只输出严格 JSON（无其他文字）：
{"verdict":"PASS或FAIL","match":true或false,"science":true或false,"garbled":true或false,"issues":"具体列出每个问题与位置，PASS 则为空串","fix_hint":"针对每个问题给出可执行的修复建议（如：修正图注某句/更换图源），PASS 则为空串"}`

async function auditOne(zai: Awaited<ReturnType<typeof ZAI.create>>, e: Entry): Promise<Result> {
  const path = resolve(import.meta.dir, '../../public/images/bio', e.dir, e.file)
  let buf: Buffer
  try {
    buf = await readFile(path)
  } catch {
    return { file: `${e.dir}/${e.file}`, sectionId: e.sectionId, verdict: 'ERROR', note: '文件不存在' }
  }
  const mime = /\.(jpe?g|svg)$/i.test(e.file)
    ? (e.file.endsWith('.svg') ? 'image/svg+xml' : 'image/jpeg')
    : 'image/png'
  const dataUrl = `data:${mime};base64,${buf.toString('base64')}`
  for (let attempt = 1; attempt <= 8; attempt++) {
    try {
      const completion = await zai.chat.completions.createVision({
        model: 'glm-5v-turbo',
        messages: [{
          role: 'user',
          content: [
            { type: 'text' as const, text: PROMPT(e) },
            { type: 'image_url' as const, image_url: { url: dataUrl } },
          ],
        }],
        thinking: { type: 'disabled' },
      })
      const content = completion.choices[0]?.message?.content ?? ''
      const jsonM = /\{[\s\S]*\}/.exec(content)
      if (!jsonM) throw new Error('无 JSON 输出')
      const parsed = JSON.parse(jsonM[0])
      return {
        file: `${e.dir}/${e.file}`,
        sectionId: e.sectionId,
        verdict: parsed.verdict === 'FAIL' ? 'FAIL' : 'PASS',
        match: !!parsed.match, science: !!parsed.science, garbled: !!parsed.garbled,
        issues: String(parsed.issues ?? ''), fix_hint: String(parsed.fix_hint ?? ''),
        note: content.slice(0, 150),
      }
    } catch (err) {
      const is429 = /429|Too many/i.test(String(err))
      if (attempt === (is429 ? 8 : 3)) return { file: `${e.dir}/${e.file}`, sectionId: e.sectionId, verdict: 'ERROR', note: String(err).slice(0, 200) }
      // 429 时长退避（45s×attempt），让账户配额自然回充
      await new Promise(r => setTimeout(r, (is429 ? 45000 : 2000) * attempt + Math.random() * 5000))
    }
  }
  return { file: `${e.dir}/${e.file}`, sectionId: e.sectionId, verdict: 'ERROR' }
}

async function main() {
  const zai = await ZAI.create()
  const { readFile: rf } = await import('node:fs/promises')
  const existing: Result[] = existsSync(REPORT) ? JSON.parse(await rf(REPORT, 'utf-8')) : []
  const done = new Set(existing.filter(r => r.verdict !== 'ERROR').map(r => r.file))
  let targets = entries.filter(e => !done.has(`${e.dir}/${e.file}`))
  if (ONLY) targets = targets.filter(e => ONLY.some(o => e.file === o || `${e.dir}/${e.file}` === o))
  console.log(`待审 ${targets.length} 张（已完成 ${done.size}，并发 ${CONC}；范围 commons+web+pdb 共 ${entries.length} 条）`)

  const results = [...existing.filter(r => r.verdict !== 'ERROR')]
  let idx = 0, n = 0
  async function worker(wid: number) {
    while (idx < targets.length) {
      const e = targets[idx++]
      const r = await auditOne(zai, e)
      results.push(r)
      n++
      const flag = r.verdict === 'PASS' ? '✓' : r.verdict === 'FAIL' ? '✗ FAIL' : '✗ ERR'
      console.log(`[w${wid}] ${n}/${targets.length} ${flag} ${e.dir}/${e.file} (${e.sectionId})`)
      if (r.verdict === 'FAIL') console.log(`    → ${(r.issues ?? '').slice(0, 200)}`)
      writeFileSync(REPORT, JSON.stringify(results, null, 2))
    }
  }
  await Promise.all(Array.from({ length: CONC }, (_, i) => worker(i + 1)))
  writeFileSync(REPORT, JSON.stringify(results, null, 2))
  const pass = results.filter(r => r.verdict === 'PASS').length
  const fail = results.filter(r => r.verdict === 'FAIL')
  const err = results.filter(r => r.verdict === 'ERROR')
  console.log(`\n===== 汇总：PASS ${pass} / FAIL ${fail.length} / ERROR ${err.length}（共 ${results.length}）=====`)
  for (const f of fail) console.log(`FAIL ${f.file} (${f.sectionId}): ${f.issues?.slice(0, 200)}`)
  for (const e2 of err) console.log(`ERROR ${e2.file}: ${e2.note}`)
}
main()
