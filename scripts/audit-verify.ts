// ============================================================
// 二级复核：对一审 issues 逐条裁决（accept / reject / uncertain）
// 用法: bun scripts/audit-verify.ts
// 输入: /tmp/text-audit/results.json（全量一审完成）
// 输出: /tmp/text-audit/verified.json
// ============================================================
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import ZAI from 'z-ai-web-dev-sdk'

const RESULT = '/tmp/text-audit/results.json'
const OUT = '/tmp/text-audit/verified.json'
if (!existsSync(RESULT)) { console.error('先跑 audit-text.ts all'); process.exit(1) }
const results = JSON.parse(readFileSync(RESULT, 'utf8')) as Record<string, { verdict: string; issues?: Array<{ type: string; quote: string; problem: string; fix: string }> }>

// ---------- 重新提取正文（与 audit-text.ts 同源逻辑） ----------
import { readdirSync } from 'node:fs'
type Sec = { id: string; content: string }
function extractAll(): Record<string, string> {
  const map: Record<string, string> = {}
  const expIdx = readFileSync('src/data/expansions/index.ts', 'utf8')
  const expFiles = [...expIdx.matchAll(/from '\.\/([a-z0-9-]+)'/g)].map((m) => m[1])
  for (const f of expFiles) {
    const s = readFileSync(`src/data/expansions/${f}.ts`, 'utf8')
    for (const m of s.matchAll(/'([a-z-]+-ch\d+-s\d+)':\s*`([\s\S]*?)`/g)) map[m[1]] = m[2]
  }
  const dirs: Record<string, string> = {
    neurobiology: 'neuro', immunology: 'immuno', virology: 'viro', 'electron-microscopy': 'em',
    'x-ray-crystallography': 'xc', 'structural-biology': 'sb', microbiology: 'micro', bioinformatics: 'bioinfo',
  }
  for (const d of Object.values(dirs)) {
    for (let i = 1; i <= 12; i++) {
      const f = `src/data/subjects/${d}/ch${i}.ts`
      if (!existsSync(f)) continue
      const s = readFileSync(f, 'utf8')
      for (const m of s.matchAll(/content:\s*`([\s\S]*?)`/g)) {
        const idm = /id:\s*'([a-z-]+-ch\d+-s\d+)',/.exec(s.slice(Math.max(0, m.index! - 400), m.index!))
        if (idm) map[idm[1]] = m[1]
      }
    }
  }
  return map
}
const contents = extractAll()

// ---------- 收集全部一审 issues ----------
type Issue1 = { id: string; idx: number; type: string; quote: string; problem: string; fix: string }
const pending: Issue1[] = []
const verified: Record<string, string> = existsSync(OUT) ? JSON.parse(readFileSync(OUT, 'utf8')) : {}
for (const [id, v] of Object.entries(results)) {
  if (v.verdict !== 'ISSUES') continue
  ;(v.issues ?? []).forEach((iss, idx) => {
    const key = `${id}#${idx}`
    if (!(key in verified)) pending.push({ id, idx, ...iss, })
  })
}
console.log(`待复核 ${pending.length} 项（已复核 ${Object.keys(verified).length}）`)

const zai = await ZAI.create()
let n = 0
for (const iss of pending) {
  const key = `${iss.id}#${iss.idx}`
  const content = contents[iss.id] ?? ''
  // 找 quote 上下文（±250 字符）
  let ctx = ''
  const pos = content.indexOf(iss.quote.slice(0, 12))
  if (pos >= 0) ctx = content.slice(Math.max(0, pos - 250), pos + 350)
  else ctx = content.slice(0, 500)

  const PROMPT = `你是资深生命科学审校终审专家。一审对教材小节 ${iss.id} 提出下述问题，请你基于专业知识与原文上下文做终审裁决。

【一审问题】类型 ${iss.type}（A科学性/B时效性/C文字/D矛盾）
- 涉及原文: ${iss.quote}
- 问题: ${iss.problem}
- 修改建议: ${iss.fix}

【原文上下文】
${ctx}

【裁决标准】
- ACCEPT: 原文确有错误/过时/确凿文字缺陷，建议的修改方向正确（或需微调）
- REJECT: 一审误报——原文实际正确（教材惯例数值/标准术语/正常文风），或建议本身引入错误
- REVISE: 原文确有问题，但一审建议的修法不当，需给出更好的修法

注意：中文教材中「」引号、生动口语化文风是本站特色，不算缺陷；教科书正常取值范围的数值（如膜剪切模量 μN/m 量级、弯曲刚度 ~50 kBT、红细胞约化体积 ~0.6）不算错误；「始动菌」「花束状六聚体」等为标准术语。

严格输出 JSON（无其他文字）: {"verdict":"ACCEPT|REJECT|REVISE","reason":"≤60字","fix":"REVISE 时给出替换文字，否则空串"}`

  const delays = [15000, 40000, 90000]
  for (let attempt = 0; attempt <= delays.length; attempt++) {
    try {
      const r = await zai.chat.completions.create({
        messages: [{ role: 'user', content: PROMPT }],
        thinking: { type: 'disabled' },
        temperature: 0.1,
      })
      let c = String(r.choices?.[0]?.message?.content ?? '').trim()
      c = c.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '')
      try {
        const j = JSON.parse(c)
        verified[key] = j.verdict
        n++
        console.log(`[${n}/${pending.length}] ${key} → ${j.verdict}: ${String(j.reason).slice(0, 60)}`)
      } catch {
        verified[key] = `PARSE|${c.slice(0, 120)}`
        n++
        console.log(`[${n}/${pending.length}] ${key} → PARSE_ERROR`)
      }
      break
    } catch (e) {
      if (attempt < delays.length) {
        console.log(`  ${key} 重试(${attempt + 1}): ${(e as Error).message?.slice(0, 50)}`)
        await new Promise((r) => setTimeout(r, delays[attempt]))
      } else verified[key] = 'ERROR'
    }
  }
  writeFileSync(OUT, JSON.stringify(verified, null, 1))
  await new Promise((r) => setTimeout(r, 4000))
}

// ---------- 汇总 ----------
const cnt: Record<string, number> = {}
for (const v of Object.values(verified)) {
  const k = v.split('|')[0]
  cnt[k] = (cnt[k] ?? 0) + 1
}
console.log('\n===== 裁决汇总 =====')
console.log(cnt)
