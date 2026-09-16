import { cellBiologyCh1To3 as exp } from '../../src/data/expansions/cell-biology-ch1-3'
const banned = [
  { name: 'backtick', re: /`/ },
  { name: '${', re: /\$\{/ },
  { name: '{{', re: /\{\{/ },
  { name: 'HTML tag', re: /<[a-zA-Z/][^>]*>/ },
  { name: 'H3+', re: /^###/m },
  { name: 'code fence', re: /^```/m },
  { name: 'tab', re: /\t/ },
  { name: 'image link', re: /!\[/ },
]
for (const [k, v] of Object.entries(exp)) {
  const h2 = (v.match(/^## /gm) || []).length
  const tables = (v.match(/^\|/gm) || []).length
  const issues = banned.filter(b => b.re.test(v)).map(b => b.name)
  const flag = (v.length < 2600 || v.length > 3600 || h2 < 4 || issues.length) ? ' <-- CHECK' : ''
  console.log(`${k}  len=${v.length}  H2=${h2}  tableLines=${tables}  banned=[${issues.join(',')}]${flag}`)
}
