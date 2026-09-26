// 精确定位配平问题：栈式扫描，报告未闭合的开括号或多余闭括号及其上下文
import { readFileSync } from 'node:fs'

const targets: Array<[string, number]> = [
  ['src/data/subjects/xc/ch1.ts', 66],
  ['src/data/subjects/xc/ch4.ts', 109],
  ['src/data/subjects/xc/ch4.ts', 151],
  ['src/data/subjects/cell-biology.ts', 694],
  ['src/data/subjects/cell-biology.ts', 1231],
  ['src/data/subjects/viro/ch1.ts', 70],
  ['src/data/subjects/viro/ch10.ts', 22],
  ['src/data/subjects/biochemistry.ts', 1085],
  ['src/data/subjects/biochemistry.ts', 1101],
  ['src/data/subjects/biochemistry.ts', 1106],
  ['src/data/subjects/biochemistry.ts', 1183],
  ['src/data/subjects/biochemistry.ts', 1748],
  ['src/data/expansions/biochemistry-ch7-9.ts', 20],
  ['src/data/expansions/biochemistry-ch7-9.ts', 48],
  ['src/data/expansions/biochemistry-ch7-9.ts', 50],
  ['src/data/expansions/biochemistry-ch7-9.ts', 141],
]

for (const [f, targetLine] of targets) {
  const s = readFileSync(f, 'utf8')
  const chunks: Array<{ t: string; i: number }> = []
  for (const m of s.matchAll(/`([\s\S]*?)`/g)) chunks.push({ t: m[1], i: m.index! })
  for (const m of s.matchAll(/'([^'\\]{200,})'/g)) chunks.push({ t: m[1], i: m.index! })
  for (const ch of chunks) {
    const line = s.slice(0, ch.i).split('\n').length
    if (line !== targetLine) continue
    const t = ch.t
    // 只跟踪全角括号
    const stack: number[] = []
    let ok = true
    for (const m of t.matchAll(/[（）]/g)) {
      if (m[0] === '（') stack.push(m.index!)
      else {
        if (stack.length === 0) {
          console.log(`${f}:${line} 多余闭括号 @${m.index}: ...${t.slice(Math.max(0, m.index! - 50), m.index! + 15)}...`)
          ok = false
        } else stack.pop()
      }
    }
    for (const pos of stack) {
      console.log(`${f}:${line} 未闭合开括号 @${pos}: ...${t.slice(Math.max(0, pos - 30), pos + 60)}...`)
      ok = false
    }
    if (ok) console.log(`${f}:${line} （配平正常，可能是半角混用）`)
  }
}
