// ============================================================
// 教材文案审查器：LLM 结构化审查（科学性/时效性/表述/一致性）
// 用法:
//   bun scripts/audit-text.ts sample [每学科抽样数]   抽样审查
//   bun scripts/audit-text.ts all                     全量审查
//   bun scripts/audit-text.ts section <sectionId>     单节审查
// 输出: /tmp/text-audit/results.json（断点续跑）
// ============================================================
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { readdirSync } from 'node:fs'
import ZAI from 'z-ai-web-dev-sdk'

const OUT = '/tmp/text-audit'
mkdirSync(OUT, { recursive: true })
const RESULT = `${OUT}/results.json`
const _raw: Record<string, unknown> = existsSync(RESULT) ? JSON.parse(readFileSync(RESULT, 'utf8')) : {}
const results: Record<string, unknown> = {}
for (const [k, v] of Object.entries(_raw)) {
  const verdict = (v as { verdict?: string })?.verdict
  if (verdict === 'ERROR' || verdict === 'PARSE_ERROR') continue // 失败的节重跑
  results[k] = v
}

// ---------- 提取实际展示版正文 ----------
type Sec = { id: string; subject: string; chapter: string; title: string; content: string }

function extractAll(): Sec[] {
  const secs: Sec[] = []
  // expansions（bc/mb/cb/bp 替换版）
  const expIdx = readFileSync('src/data/expansions/index.ts', 'utf8')
  const expFiles = [...expIdx.matchAll(/from '\.\/([a-z0-9-]+)'/g)].map((m) => m[1])
  for (const f of expFiles) {
    const s = readFileSync(`src/data/expansions/${f}.ts`, 'utf8')
    for (const m of s.matchAll(/'([a-z-]+-ch\d+-s\d+)':\s*`([\s\S]*?)`/g)) {
      const id = m[1]
      secs.push({ id, subject: id.split('-')[0], chapter: f, title: '', content: m[2] })
    }
  }
  // 8 学科子目录
  const dirs: Record<string, string> = {
    neurobiology: 'neuro', immunology: 'immuno', virology: 'viro', 'electron-microscopy': 'em',
    'x-ray-crystallography': 'xc', 'structural-biology': 'sb', microbiology: 'micro', bioinformatics: 'bioinfo',
  }
  for (const [name, d] of Object.entries(dirs)) {
    for (let i = 1; i <= 12; i++) {
      const f = `src/data/subjects/${d}/ch${i}.ts`
      if (!existsSync(f)) continue
      const s = readFileSync(f, 'utf8')
      for (const m of s.matchAll(/id:\s*'([a-z-]+-ch\d+-s\d+)',/g)) {
        const id = m[1]
        const after = s.slice(m.index!, m.index! + 6000)
        const cm = /content:\s*`([\s\S]*?)`/.exec(after)
        if (!cm) continue
        const tm = /title:\s*'([^']*)'/.exec(after)
        secs.push({ id, subject: name, chapter: `subjects/${d}/ch${i}`, title: tm?.[1] ?? '', content: cm[1] })
      }
    }
  }
  // 标题补齐（expansions 无标题，从 subjects 主文件找）
  for (const sec of secs) {
    if (sec.title) continue
    const subjFile = `src/data/subjects/${sec.subject}.ts`
    if (existsSync(subjFile)) {
      const s = readFileSync(subjFile, 'utf8')
      const m = new RegExp(`id:\\s*'${sec.id}',\\s*\\n\\s*title:\\s*'([^']*)'`).exec(s)
      if (m) sec.title = m[1]
    }
  }
  return secs
}

// ---------- 审查 Prompt ----------
const PROMPT = (sec: Sec) => `你是一位生命科学教材审校专家（兼具科学准确性把关与中文文字编辑能力）。请审查以下教材小节的正文，找出真实存在的问题。

小节：${sec.title || sec.id}（${sec.id}）

【审查维度】（只报高置信度问题，宁缺毋滥；不确定的不要报）
A. 科学性错误：概念、数值（数量级/单位）、反应式、机理、因果关系明确错误或误导。注意：教材常用近似值（如红细胞膜弯曲刚度 ≈ 50 kBT、膜剪切模量以 μN/m 计）——凡在教科书正常取值范围内的数值不算错误
B. 时效性问题：陈述已明确过时（如把已解决的问题写成未解决、旧奖项年份、AlphaFold 之后的结构预测格局）
C. 确凿文字缺陷：错别字（同音/形近误字）、明显语病（成分残缺/搭配不当）、标点误用。文风生动口语化是本教材特色，不算问题，勿报
D. 内部矛盾：同节数据/表述前后冲突（数值对不上、说法相反）

【输出格式】严格输出 JSON（无其他文字）：
{"verdict":"CLEAN 或 ISSUES","issues":[{"type":"A|B|C|D","quote":"原文摘录(≤30字)","problem":"问题说明","fix":"修改建议(给出替换文字)"}]}
若无问题输出 {"verdict":"CLEAN","issues":[]}

【正文】
${sec.content}`

// ---------- 抽样 ----------
const mode = process.argv[2] ?? 'sample'
const all = extractAll()
let targets: Sec[] = []
if (mode === 'all') targets = all
else if (mode === 'section') targets = all.filter((s) => s.id === process.argv[3])
else {
  const n = Number(process.argv[3] ?? 1)
  const bySubject = new Map<string, Sec[]>()
  for (const s of all) {
    if (!bySubject.has(s.subject)) bySubject.set(s.subject, [])
    bySubject.get(s.subject)!.push(s)
  }
  for (const list of bySubject.values()) {
    // 按内容长度取中位数附近的节（避免只抽最长/最短）
    list.sort((a, b) => a.content.length - b.content.length)
    const mid = Math.floor(list.length / 2)
    const picks = [list[mid]]
    for (let k = 1; picks.length < Math.min(n, list.length); k++) {
      if (mid - k >= 0) picks.push(list[mid - k])
      if (picks.length < Math.min(n, list.length) && mid + k < list.length) picks.push(list[mid + k])
    }
    targets.push(...picks)
  }
}

console.log(`目标 ${targets.length} 节（全站 ${all.length} 节）`)
const pending = targets.filter((t) => !(t.id in results))
console.log(`待审 ${pending.length} 节（已完成 ${targets.length - pending.length}）`)

// ---------- 执行 ----------
const zai = await ZAI.create()
let done = 0
let global429 = 0
const CONC = 1
const queue = [...pending]

async function auditOne(sec: (typeof pending)[number]) {
  const delays = [15000, 40000, 90000]
  for (let attempt = 0; attempt <= delays.length; attempt++) {
    try {
      const r = await zai.chat.completions.create({
        messages: [{ role: 'user', content: PROMPT(sec) }],
        thinking: { type: 'disabled' },
        temperature: 0.1,
      })
      let content = String(r.choices?.[0]?.message?.content ?? '').trim()
      content = content.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '')
      let parsed: unknown
      try { parsed = JSON.parse(content) } catch { parsed = { verdict: 'PARSE_ERROR', raw: content.slice(0, 600) } }
      results[sec.id] = parsed as never
      done++
      global429 = 0
      const v = (parsed as { verdict?: string }).verdict
      const nIss = ((parsed as { issues?: unknown[] }).issues ?? []).length
      console.log(`[${done}/${pending.length}] ${sec.id} → ${v}${v === 'ISSUES' ? ` (${nIss} 项)` : ''}`)
      return
    } catch (e) {
      const msg = String((e as Error).message ?? '')
      if (msg.includes('429')) global429++
      if (attempt < delays.length) {
        const wait = global429 >= 3 ? 300000 : delays[attempt] // 连续 429 → 全局冷却 5 分钟
        console.log(`  ${sec.id} 重试(${attempt + 1}): ${msg.slice(0, 50)}，等 ${wait / 1000}s`)
        await new Promise((r) => setTimeout(r, wait))
      } else {
        results[sec.id] = { verdict: 'ERROR', message: msg.slice(0, 200) } as never
        done++
        console.log(`  ${sec.id} FAILED`)
      }
    }
  }
}

const workers = Array.from({ length: CONC }, () => (async () => {
  while (queue.length) {
    const sec = queue.shift()
    if (!sec) break
    await auditOne(sec)
    writeFileSync(RESULT, JSON.stringify(results, null, 1))
    await new Promise((r) => setTimeout(r, 5000))
  }
})())
await Promise.all(workers)

// ---------- 汇总 ----------
let clean = 0, issues = 0, errs = 0
const issueList: Array<{ id: string; type: string; quote: string; problem: string; fix: string }> = []
for (const [id, v] of Object.entries(results as Record<string, { verdict: string; issues?: Array<{ type: string; quote: string; problem: string; fix: string }> }>)) {
  if (v.verdict === 'CLEAN') clean++
  else if (v.verdict === 'ISSUES') { issues++; for (const i of v.issues ?? []) issueList.push({ id, ...i }) }
  else errs++
}
console.log(`\n===== 汇总 =====`)
console.log(`CLEAN ${clean} · ISSUES ${issues} · ERROR ${errs}`)
const byType: Record<string, number> = {}
for (const i of issueList) byType[i.type] = (byType[i.type] ?? 0) + 1
console.log('问题类型分布:', byType)
if (issueList.length) {
  const out = `${OUT}/issues.json`
  writeFileSync(out, JSON.stringify(issueList, null, 1))
  console.log(`问题清单: ${out}（${issueList.length} 项）`)
  for (const i of issueList.slice(0, 15)) console.log(`  [${i.type}] ${i.id}: ${i.quote} → ${i.problem.slice(0, 60)}`)
}
