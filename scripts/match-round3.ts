import { writeFileSync } from 'node:fs'
const UA = 'BioScholar/1.0 (educational project; contact dev@example.org) curl/8.5.0'

async function api(params: Record<string, string>) {
  const qs = new URLSearchParams({ format: 'json', ...params }).toString()
  for (let i = 0; i < 5; i++) {
    await new Promise(s => setTimeout(s, 3200))
    const r = await fetch(`https://commons.wikimedia.org/w/api.php?${qs}`, {
      headers: { 'User-Agent': UA, Accept: 'application/json', 'Accept-Encoding': 'identity' },
    })
    if (r.status === 429) { await new Promise(s => setTimeout(s, 60000)); continue }
    if (r.status !== 200) { await new Promise(s => setTimeout(s, 15000)); continue }
    try { return await r.json() } catch { await new Promise(s => setTimeout(s, 20000)) }
  }
  throw new Error('API failed')
}

async function main() {
  const seen = new Set<string>()
  for (const q of [
    'Penicillium', 'Penicillium conidiophore', 'Penicillium microscopy', 'Penicillium microscope',
    'Penicillium illustration', 'Penicillium structure',
  ]) {
    const s = await api({ action: 'query', list: 'search', srnamespace: '6', srsearch: q, srlimit: '30' })
    for (const hit of s?.query?.search ?? []) seen.add(hit.title)
  }
  const titles = [...seen].filter((t) => /\.(jpe?g|png|tif+)$/i.test(t))
  console.log(`Penicillium 位图候选 ${titles.length}`)
  const out: any[] = []
  for (let i = 0; i < titles.length; i += 20) {
    const info = await api({
      action: 'query', titles: titles.slice(i, i + 20).join('|'), prop: 'imageinfo',
      iiprop: 'url|size|mime|extmetadata', iiextmetadatafilter: 'LicenseShortName|Artist',
    })
    for (const page of Object.values(info?.query?.pages ?? {}) as any[]) {
      const ii = page?.imageinfo?.[0]
      if (!ii) continue
      const em = ii.extmetadata ?? {}
      const rec = {
        title: page.title, w: ii.width, h: ii.height,
        license: (em.LicenseShortName?.value ?? '').replace(/&amp;/g, '&'),
        artist: (em.Artist?.value ?? '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim().slice(0, 80),
      }
      out.push(rec)
      if (ii.width === 4000 && ii.height === 2250) console.log('  ✓✓ 尺寸命中:', rec.title, '|', rec.license, '|', rec.artist)
    }
  }
  const near = out.filter((r) => r.w >= 3000 && r.w <= 5000)
  console.log('  相近大图：')
  for (const r of near.slice(0, 15)) console.log(`    ${r.title} ${r.w}x${r.h} | ${r.license} | ${r.artist}`)
  writeFileSync('/tmp/penicillium-cands.json', JSON.stringify(out, null, 2))
}
main()
