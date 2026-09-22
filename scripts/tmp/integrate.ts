// ============================================================
// integrate.ts — 将 mount-{subj}-*.json 挂载片段集成进平台
// 用法：bun run scripts/tmp/integrate.ts <sb|xc|em> [--gen]
// 幂等：可重复执行（已挂载条目自动跳过）
// 步骤：
//   1. 合并该学科所有 mount JSON（去重）
//   2. 过滤 draw-{subj}-r4.ts 已有条目
//   3. 从 draw-r4 + mount JSON 重建 scenes/{subj}/index.ts
//   4. 向 draw-{subj}-r4.ts 追加新挂载（闭合大括号前插入）
//   5. --gen 时运行 gen.ts 生成 SVG
// ============================================================
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { execSync } from 'child_process'

const subj = process.argv[2] as 'sb' | 'xc' | 'em'
const doGen = process.argv.includes('--gen')
const PREFIX: Record<string, string> = {
  sb: 'structural-biology',
  xc: 'x-ray-crystallography',
  em: 'electron-microscopy',
}
const prefix = PREFIX[subj]
if (!prefix) {
  console.error('用法：bun run scripts/tmp/integrate.ts <sb|xc|em> [--gen]')
  process.exit(1)
}

// ---- 1. 合并挂载条目 ----
interface Mount { sectionId: string; slug: string; caption: string }
const mounts: Mount[] = []
const seen = new Set<string>()
for (const f of readdirSync('scripts/tmp').filter((x) => x.startsWith(`mount-${subj}`)).sort()) {
  const arr = JSON.parse(readFileSync(`scripts/tmp/${f}`, 'utf-8')) as Mount[]
  for (const m of arr) {
    if (seen.has(m.sectionId)) {
      console.log(`  ⚠ 重复 sectionId 跳过：${m.sectionId}（${f}）`)
      continue
    }
    seen.add(m.sectionId)
    mounts.push(m)
  }
}
console.log(`合并挂载条目：${mounts.length} 条`)

// ---- 2. 过滤已有挂载 ----
const r4Path = `src/data/draw-${subj}-r4.ts`
let r4 = readFileSync(r4Path, 'utf-8')
const existing = new Set(
  [...r4.matchAll(new RegExp(`'${prefix}-ch\\d+-s\\d+'`, 'g'))].map((m) => m[0].slice(1, -1))
)
const fresh = mounts.filter((m) => !existing.has(m.sectionId))
console.log(`已有挂载 ${existing.size} 条，新增 ${fresh.length} 条`)

// ---- 3. 重建 index.ts（从 draw-r4 已有条目 + 新挂载推导） ----
const indexPath = `scripts/draw/scenes/${subj}/index.ts`

function parseSec(sectionId: string): { ch: string; s: string } | null {
  const m = sectionId.match(new RegExp(`^${prefix}-ch(\\d+)-s(\\d+)$`))
  return m ? { ch: m[1], s: m[2] } : null
}

interface Reg { file: string; varName: string; slug: string; sectionId: string }
const regs: Reg[] = []
const regSeen = new Set<string>()
// 旧条目：draw-r4 中 src 路径携带 slug，键携带 sectionId
for (const m of r4.matchAll(new RegExp(`'(${prefix}-ch\\d+-s\\d+)':\\s*\\[\\s*\\{[\\s\\S]*?src: '([^']+)'`, 'g'))) {
  const sid = m[1]
  const sec = parseSec(sid)
  if (!sec || regSeen.has(sid)) continue
  regSeen.add(sid)
  const slug = (m[2].match(/drawn\/([a-z0-9-]+)\.svg/) ?? [])[1] ?? ''
  regs.push({ file: `ch${sec.ch}-s${sec.s}`, varName: `ch${sec.ch}s${sec.s}`, slug, sectionId: sid })
}
// 新条目
for (const m of mounts) {
  const sec = parseSec(m.sectionId)
  if (!sec || regSeen.has(m.sectionId)) continue
  regSeen.add(m.sectionId)
  regs.push({ file: `ch${sec.ch}-s${sec.s}`, varName: `ch${sec.ch}s${sec.s}`, slug: m.slug, sectionId: m.sectionId })
}
regs.sort((a, b) => {
  const sa = parseSec(a.sectionId)!
  const sb = parseSec(b.sectionId)!
  return Number(sa.ch) - Number(sb.ch) || Number(sa.s) - Number(sb.s)
})
const NAMES: Record<string, string> = {
  sb: 'structural biology',
  xc: 'x-ray crystallography',
  em: 'electron microscopy',
}
const newIndex = `// ${NAMES[subj]} 自绘插图登记表（6-${subj}；7 系列增量见 worklog）
${regs.map((r) => `import ${r.varName} from './${r.file}'`).join('\n')}

export default {
${regs.map((r) => `  '${r.slug}': ${r.varName},`).join('\n')}
} as Record<string, string>
`
writeFileSync(indexPath, newIndex, 'utf-8')
console.log(`index.ts 重建：${regs.length} 个登记（旧 ${regs.length - fresh.length} + 新 ${fresh.length}）`)

// ---- 4. 追加 draw-r4 挂载 ----
const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
const blocks: string[] = []
for (const m of fresh) {
  blocks.push(`  '${m.sectionId}': [
    {
      src: '/images/bio/drawn/${m.slug}.svg',
      caption:
        '${esc(m.caption)}',
      credit: DRAWN_CREDIT,
    },
  ],`)
}
if (blocks.length) {
  const closeIdx = r4.lastIndexOf('}')
  r4 = r4.slice(0, closeIdx) + blocks.join('\n') + '\n' + r4.slice(closeIdx)
  writeFileSync(r4Path, r4, 'utf-8')
  console.log(`draw-${subj}-r4.ts 追加 ${blocks.length} 条挂载`)
}

// ---- 5. 生成 SVG ----
if (doGen) {
  console.log(`\n运行 gen.ts ${subj} …`)
  execSync(`bun scripts/draw/gen.ts ${subj}`, { stdio: 'inherit', cwd: process.cwd() })
}
