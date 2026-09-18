/** 第二轮：流感/CRISPR 深挖 + 两张 JPEG 的原图直查 */
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

async function probe(titles: string[], urlwidth?: string) {
  const out: any[] = []
  for (let i = 0; i < titles.length; i += 20) {
    const p: Record<string, string> = {
      action: 'query', titles: titles.slice(i, i + 20).join('|'), prop: 'imageinfo',
      iiprop: 'url|size|mime|extmetadata', iiextmetadatafilter: 'LicenseShortName|Artist',
    }
    if (urlwidth) p.iiurlwidth = urlwidth
    const info = await api(p)
    for (const page of Object.values(info?.query?.pages ?? {}) as any[]) {
      if (page.missing !== undefined) continue
      const ii = page?.imageinfo?.[0]
      if (!ii) continue
      const em = ii.extmetadata ?? {}
      out.push({
        title: page.title, w: ii.width, h: ii.height, mime: ii.mime,
        thumb: ii.thumburl ? `${ii.thumbwidth}x${ii.thumbheight}` : `${ii.width}x${ii.height}`,
        license: (em.LicenseShortName?.value ?? '').replace(/&amp;/g, '&'),
        artist: (em.Artist?.value ?? '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim().slice(0, 80),
      })
    }
  }
  return out
}

async function searchCollect(queries: string[]): Promise<string[]> {
  const seen = new Set<string>()
  for (const q of queries) {
    const s = await api({ action: 'query', list: 'search', srnamespace: '6', srsearch: q, srlimit: '30' })
    for (const hit of s?.query?.search ?? []) seen.add(hit.title)
  }
  return [...seen]
}

async function main() {
  // 1) 流感：square 1920×1920
  let titles = (await searchCollect([
    'influenza virion structure', 'influenza A virus diagram', 'flu virus structure diagram',
    'influenza virus morphology hemagglutinin', 'influenza virus structure svg',
  ])).filter((t) => /\.(svg|png)$/i.test(t))
  console.log(`流感图形候选 ${titles.length}`)
  let res = await probe(titles, '1920')
  for (const r of res) if (r.thumb === '1920x1920') console.log('  流感✓', r.title, '|', r.license, '|', r.artist)
  // 2) CRISPR：square 1920×1920
  titles = (await searchCollect([
    'CRISPR Cas9 diagram', 'Cas9 genome editing', 'CRISPR-Cas9 editing', 'Cas9 crystal structure diagram',
    'CRISPR mechanism', 'cas9 HNH RuvC',
  ])).filter((t) => /\.(svg|png)$/i.test(t))
  console.log(`CRISPR 图形候选 ${titles.length}`)
  res = await probe(titles, '1920')
  for (const r of res) if (r.thumb === '1920x1920') console.log('  CRISPR✓', r.title, '|', r.license, '|', r.artist)
  // 3) 两张 JPEG 原图尺寸匹配
  const jpgs = await probe([
    'File:Saccharomyces cerevisiae SEM.jpg', 'File:Penicillium.jpg', 'File:Penicillium labeled.jpg',
    'File:Penicillium sp.jpg', 'File:Penicillium microscopy', 'File:Penicillium conidiophore',
  ])
  for (const r of jpgs) {
    console.log(`  JPG ${r.title} ${r.w}x${r.h} ${r.mime} | ${r.license} | ${r.artist}`)
  }
}
main()
