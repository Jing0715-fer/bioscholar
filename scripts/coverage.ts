// 小节配图覆盖率分析
import { getIllustrations } from '../src/data/illustrations'
import { subjects } from '../src/data/biology'
const all: string[] = []
for (const s of subjects) for (const c of s.chapters) for (const sec of c.sections) all.push(sec.id)
const withIll = all.filter((id) => getIllustrations(id).length > 0)
console.log(`TOTAL: ${all.length}, WITH: ${withIll.length} (${(100 * withIll.length / all.length).toFixed(1)}%)`)
for (const s of subjects) {
  const ids: string[] = []
  for (const c of s.chapters) for (const sec of c.sections) ids.push(sec.id)
  const w = ids.filter((id) => getIllustrations(id).length > 0)
  console.log(`${s.id}: ${w.length}/${ids.length}`)
}
for (const s of subjects) {
  const miss: string[] = []
  for (const c of s.chapters) for (const sec of c.sections) if (getIllustrations(sec.id).length === 0) miss.push(`${sec.id}|${c.title}|${sec.title}`)
  if (miss.length) { console.log(`\n=== ${s.id} missing ${miss.length} ===`); miss.forEach((m) => console.log('  ' + m)) }
}
