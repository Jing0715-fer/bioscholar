import { subjects } from '/home/z/my-project/src/data/biology'
const bp = subjects.find(s => s.id === 'biophysics')!
for (const ch of bp.chapters.filter(c => [4,5,6].includes(c.number))) {
  for (const s of ch.sections) {
    console.log(s.id, s.content.length, 'H2:', (s.content.match(/^## /gm)||[]).length)
  }
}
