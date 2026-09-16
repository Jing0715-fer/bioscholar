import { subjects } from '../../src/data/biology'
const s = subjects.find((x) => x.id === 'biochemistry')!
for (const ch of s.chapters.filter((c) => [1, 2, 3].includes(c.number))) {
  for (const sec of ch.sections) {
    const h2 = (sec.content.match(/^## /gm) || []).length
    const h3 = (sec.content.match(/^### /gm) || []).length
    console.log(`${sec.id}  ${String(sec.content.length).padStart(5)} chars  H2=${h2} H3=${h3}`)
  }
}
