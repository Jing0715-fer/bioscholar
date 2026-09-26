// 逐段输出全角/半角括号计数，甄别真缺括号 vs 混用
import { readFileSync } from 'node:fs'

const targets: Record<string, number[]> = {
  'src/data/subjects/xc/ch1.ts': [66],
  'src/data/subjects/xc/ch4.ts': [109, 151],
  'src/data/subjects/cell-biology.ts': [694, 1231],
  'src/data/subjects/viro/ch1.ts': [70],
  'src/data/subjects/viro/ch10.ts': [22],
  'src/data/subjects/biochemistry.ts': [1085, 1101, 1106, 1183, 1748],
  'src/data/expansions/biochemistry-ch7-9.ts': [20, 48, 50, 141],
}

for (const [f, lines] of Object.entries(targets)) {
  const s = readFileSync(f, 'utf8')
  const chunks = [...s.matchAll(/`([\s\S]*?)`/g)].map((m) => ({ t: m[1], i: m.index! }))
  for (const m of s.matchAll(/'([^'\\]{200,})'/g)) chunks.push({ t: m[1], i: m.index! })
  for (const ch of chunks) {
    const line = s.slice(0, ch.i).split('\n').length
    if (!lines.includes(line)) continue
    const o = (ch.t.match(/（/g) || []).length
    const c = (ch.t.match(/）/g) || []).length
    const ho = (ch.t.match(/\(/g) || []).length
    const hc = (ch.t.match(/\)/g) || []).length
    console.log(`${f}:${line} 全角${o}/${c} 半角${ho}/${hc}`)
    // 找出全角开无全角闭附近的文本
    if (o !== c || ho !== hc) {
      // 顺序扫描定位不配平位置
      let depth = 0
      let idx = 0
      for (const m of ch.t.matchAll(/[（）()]/g)) {
        const ch2 = m[0]
        if (ch2 === '（' || ch2 === '(') depth++
        else depth--
        if (depth < 0) {
          console.log(`   负深度@${idx}: ...${ch.t.slice(Math.max(0, idx - 40), idx + 20)}...`)
          depth = 0
        }
        idx = m.index! + 1
      }
      if (depth > 0) console.log(`   末尾剩余深度 ${depth}`)
    }
  }
}
