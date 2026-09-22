import { readdirSync, readFileSync, existsSync } from 'fs'

const cfg: Record<string, string> = { sb: 'structural-biology', xc: 'x-ray-crystallography', em: 'electron-microscopy' }

// 所有 mount 条目（新批次）
const mounts = new Map<string, any>()
for (const f of readdirSync('scripts/tmp').filter(x => x.startsWith('mount-'))) {
  for (const m of JSON.parse(readFileSync(`scripts/tmp/${f}`, 'utf-8')))
    mounts.set(m.sectionId, m)
}

// 原有挂载
const preExisting = new Set<string>()
for (const [subj, prefix] of Object.entries(cfg)) {
  const src = readFileSync(`src/data/draw-${subj}-r4.ts`, 'utf-8')
  for (const m of src.matchAll(new RegExp(`'${prefix}-ch\\d+-s\\d+'`, 'g'))) preExisting.add(m[0].slice(1, -1))
}
console.log(`原有挂载: ${preExisting.size} | 新批次挂载: ${mounts.size}`)

for (const [subj, prefix] of Object.entries(cfg)) {
  const needScene: string[] = []   // 场景文件不存在
  const needMount: string[] = []   // 场景在、新挂载缺、且非原有
  const dupSlugs = new Map<string, number>()
  for (let c = 1; c <= 12; c++) for (let s = 1; s <= 4; s++) {
    const sid = `${prefix}-ch${c}-s${s}`
    if (preExisting.has(sid)) continue
    const hasScene = existsSync(`scripts/draw/scenes/${subj}/ch${c}-s${s}.ts`)
    const hasMount = mounts.has(sid)
    if (!hasScene) needScene.push(sid)
    else if (!hasMount) needMount.push(sid)
  }
  for (const m of mounts.values()) dupSlugs.set(m.slug, (dupSlugs.get(m.slug) ?? 0) + 1)
  const dups = [...dupSlugs].filter(([, n]) => n > 1).map(([s]) => s)
  console.log(`\n${subj}: 缺场景 ${needScene.length}: ${needScene.map(s=>s.replace(prefix+'-','')).join(',') || '无'} | 缺挂载 ${needMount.length}: ${needMount.map(s=>s.replace(prefix+'-','')).join(',') || '无'} | slug重复: ${dups.join(',') || '无'}`)
}
