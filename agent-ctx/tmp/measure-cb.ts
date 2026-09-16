import { subjects } from '../../src/data/biology'
const s = subjects.find(x => x.id === 'cell-biology')!
for (const c of s.chapters.filter(c => [1,2,3].includes(c.number))) {
  for (const sec of c.sections) {
    const content = sec.content
    const h2s = (content.match(/^## /gm) || []).length
    console.log(`${sec.id}  ${content.length} chars  H2=${h2s}`)
  }
}
