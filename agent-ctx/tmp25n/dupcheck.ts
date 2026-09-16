const mod = await import('/home/z/my-project/src/data/expansions/biophysics-ch4-6.ts')
const exp = (mod as any).biophysicsCh4To6 as Record<string, string>
for (const [k, v] of Object.entries(exp)) {
  // check for immediately repeated sentence-like chunks (>=12 chars) separated by nothing
  const sents = v.split(/(?<=[。；])/).map(s => s.trim()).filter(s => s.length >= 12)
  const seen = new Map<string, number>()
  for (const s of sents) seen.set(s, (seen.get(s) || 0) + 1)
  const dups = [...seen.entries()].filter(([, n]) => n > 1)
  if (dups.length) console.log(k, 'DUP:', dups.map(([s]) => s.slice(0, 30)).join(' | '))
}
console.log('dup scan done')
