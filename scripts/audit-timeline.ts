// ============================================================
// 时效性与表述风险确定性扫描（零 API）
// 扫描模式：
//   1. 年份引用（2023 及以前的"近年/最新"表述、具体年份+前沿表述）
//   2. 诺奖表述 vs 实际获奖年份（含 2024 化学奖 AlphaFold）
//   3. "尚未/未解决/至今无法" 类可能已过时的断言
//   4. "目前/当前/最新" + 具体技术指标
//   5. 历史里程碑年份错误（知识库内比对）
// 用法: bun scripts/audit-timeline.ts
// ============================================================
import { readFileSync, existsSync } from 'node:fs'

type Sec = { id: string; content: string }
function extractAll(): Sec[] {
  const secs: Sec[] = []
  const expIdx = readFileSync('src/data/expansions/index.ts', 'utf8')
  const expFiles = [...expIdx.matchAll(/from '\.\/([a-z0-9-]+)'/g)].map((m) => m[1])
  for (const f of expFiles) {
    const s = readFileSync(`src/data/expansions/${f}.ts`, 'utf8')
    for (const m of s.matchAll(/'([a-z-]+-ch\d+-s\d+)':\s*`([\s\S]*?)`/g)) secs.push({ id: m[1], content: m[2] })
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
      for (const m of s.matchAll(/id:\s*'([a-z-]+-ch\d+-s\d+)',/g)) {
        const after = s.slice(m.index!, m.index! + 6000)
        const cm = /content:\s*`([\s\S]*?)`/.exec(after)
        if (cm) secs.push({ id: m[1], content: cm[1] })
      }
    }
  }
  return secs
}

const all = extractAll()
console.log(`扫描 ${all.length} 节`)

type Hit = { id: string; kind: string; text: string; note: string }
const hits: Hit[] = []

// ---------- 规则库 ----------
const RULES: Array<{ kind: string; re: RegExp; note: string }> = [
  // A. 诺奖相关（重点核对：2024 化学奖 = Baker/Hassabis/Jumper 蛋白质设计/结构预测）
  { kind: 'Nobel', re: /[阿艾]尔法?折|[Aa]lphaFold|哈萨比斯|哈萨比|朱姆珀|江珀|[Jj]umper|贝克[·‧]?(?:Hassabis)?|蛋白质结构预测的?(?:突破|革命|诺奖|诺贝尔)/, note: 'AlphaFold 相关表述——核对是否反映 2024 诺奖' },
  { kind: 'Nobel', re: /诺贝尔.{0,30}(?:2024|二〇二四)/, note: '2024 诺奖表述' },
  { kind: 'Nobel', re: /(?:结构预测|冷冻?电镜| Cryo-?EM).{0,40}(?:尚未|还未|还没有|仍待).{0,20}(?:解决|突破|克服)/, note: '结构预测/电镜"尚未解决"类断言' },
  // B. 年份+前沿（固定年份的前沿表述会过时）
  { kind: 'Year', re: /20(?:1[5-9]|2[0-5])\s*[-–~至]\s*20(?:2[0-6])\s*年/, note: '年份区间+前沿表述，随时间推移过时' },
  { kind: 'Year', re: /(?:近年|近年来|最新|最近).{0,25}(?:20(?:1\d|2[0-3])\s*年)/, note: '"近年+2010-2023年份"——2026 年视角下偏旧' },
  // C. "至今/尚未"类强断言
  { kind: 'Claim', re: /至今(?:仍|还|无法|未能|没有)/, note: '"至今仍/无法"强断言——可能已被突破' },
  { kind: 'Claim', re: /(?:目前|当前)(?:仍|尚|还)(?:未|无法|没有)/, note: '"目前仍无法"断言' },
  { kind: 'Claim', re: /(?:尚未|仍未)(?:被)?(?:解决|攻克|实现|观测|解析|确定)/, note: '"尚未解决/实现"断言' },
  // D. 快速演进领域指标
  { kind: 'Metric', re: /(?:PDB|蛋白数据库).{0,30}(?:超过|已达|约|多于)\s*[\d.,]+\s*(?:万|亿|k|个).{0,10}(?:结构|条目)/, note: 'PDB 条目数——持续增长，固定数会过时' },
  { kind: 'Metric', re: /(?:测序成本|基因组测序).{0,20}(?:约|仅|已降至|低于)\s*[\d$,]+\s*(?:美元|元)/, note: '测序成本——持续下降' },
  { kind: 'Metric', re: /(?:人类基因组计划|HGP).{0,15}(?:耗时|历时|花费).{0,30}(?:亿|年)/, note: 'HGP 成本/时长表述（惯例表述，核对语境）' },
  // E. COVID 相关
  { kind: 'COVID', re: /(?:新冠|COVID|SARS-CoV-2).{0,40}(?:大流行|疫情).{0,20}(?:目前|当前|正在|仍)/, note: 'COVID 疫情状态表述——需符合"已结束/常态化"认知' },
  { kind: 'COVID', re: /疫苗.{0,30}(?:尚在|正在|仍在).{0,15}(?:试验|研发|审批)/, note: '疫苗在研表述——可能已上市' },
]

for (const sec of all) {
  for (const rule of RULES) {
    for (const m of sec.content.matchAll(new RegExp(rule.re.source, 'g'))) {
      const start = Math.max(0, m.index! - 30)
      const text = sec.content.slice(start, m.index! + m[0].length + 40).replace(/\n/g, ' ')
      hits.push({ id: sec.id, kind: rule.kind, text: `…${text}…`, note: rule.note })
    }
  }
}

// 按类型分组输出
const byKind: Record<string, Hit[]> = {}
for (const h of hits) (byKind[h.kind] ??= []).push(h)
for (const [kind, list] of Object.entries(byKind)) {
  console.log(`\n===== ${kind}（${list.length} 处）=====`)
  for (const h of list) console.log(`  ${h.id}\n    ${h.text}\n    → ${h.note}`)
}
console.log(`\n总计 ${hits.length} 处待人工核对`)
