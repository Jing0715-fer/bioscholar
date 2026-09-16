const mod = await import('/home/z/my-project/src/data/expansions/biophysics-ch4-6.ts')
const exp = (mod as any).biophysicsCh4To6 as Record<string, string>
for (const [k, v] of Object.entries(exp)) {
  const h2 = (v.match(/^## /gm) || []).length
  console.log(k, v.length, 'H2:', h2)
}
