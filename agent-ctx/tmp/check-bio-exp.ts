import { biochemistryCh1To3 } from '../../src/data/expansions/biochemistry-ch1-3'
const ids = Object.keys(biochemistryCh1To3)
console.log(`sections: ${ids.length}`)
let bad = 0
for (const [id, c] of Object.entries(biochemistryCh1To3)) {
  const h2 = (c.match(/^## /gm) || []).length
  const h3 = (c.match(/^### /gm) || []).length
  const backtick = (c.match(/`/g) || []).length
  const dollar = (c.match(/\$\{/g) || []).length
  const brace = (c.match(/\{\{/g) || []).length
  const tab = (c.match(/\t/g) || []).length
  const tableRows = (c.match(/^\|/gm) || []).length
  const flag = c.length < 2600 || c.length > 3600 || h2 < 4 || backtick || dollar || brace || tab || h3
    ? ' <-- CHECK' : ''
  if (flag) bad++
  console.log(`${id}  ${String(c.length).padStart(5)}  H2=${h2} H3=${h3} tblRows=${tableRows} bt=${backtick} ${flag}`)
}
console.log(bad === 0 ? 'ALL OK' : `${bad} to fix`)
