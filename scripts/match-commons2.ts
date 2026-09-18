/** Commons 来源反查 v2：多宽度缩略图匹配 + 特征短语搜索 */
import { statSync } from 'node:fs'

const UA = 'BioScholar/1.0 (educational project; contact dev@example.org) curl/8.5.0'

const TARGETS = [
  { file: 'average-prokaryote-cell.png', w: 1920, h: 1152, queries: ['Average prokaryote cell', 'prokaryote cell LadyofHats'] },
  { file: 'gram-cell-wall-comparison.png', w: 1920, h: 2388, queries: ['gram positive gram negative cell wall diagram', 'Gram positive cell wall peptidoglycan outer membrane'] },
  { file: 'flagellum-base-diagram.png', w: 1920, h: 1711, queries: ['flagellum diagram', 'bacterial flagellum structure'] },
  { file: 'saccharomyces-cerevisiae-sem.jpg', w: 0, h: 0, queries: ['Saccharomyces cerevisiae SEM', 'yeast budding SEM'] },
  { file: 'bacteriophage-t4-structure.png', w: 1920, h: 2343, queries: ['Tevenphage', 'T4 phage structure'] },
  { file: 'phage-lytic-lysogenic-cycles.png', w: 1920, h: 2056, queries: ['lytic lysogenic', 'Lytic or lysogenic'] },
  { file: 'influenza-virus-structure.png', w: 1920, h: 1920, queries: ['influenza virus structure', 'influenza virus neuraminidase hemagglutinin'] },
  { file: 'bacterial-growth-curve.png', w: 1920, h: 1319, queries: ['bacterial growth curve lag exponential stationary', 'bacterial growth curve diagram'] },
  { file: 'bacterial-conjugation.png', w: 1920, h: 1742, queries: ['bacterial conjugation relaxasome', 'conjugation F plasmid pilus'] },
  { file: 'nitrogen-cycle.png', w: 1920, h: 1440, queries: ['nitrogen cycle legume root nodules denitrifying', 'nitrogen cycle diagram'] },
  { file: 'lps-structure.png', w: 1280, h: 2944, queries: ['lipopolysaccharide lipid A core polysaccharide', 'LPS structure'] },
  { file: 'three-domain-tree.png', w: 1920, h: 1043, queries: ['three domain tree of life', 'tree of life Bacteria Archaea Eukarya'] },
  { file: 'crispr-cas9-mechanism.png', w: 1920, h: 1920, queries: ['CRISPR Cas9 mechanism', 'Cas9 guide RNA PAM'] },
]

async function api(params: Record<string, string>) {
  const qs = new URLSearchParams({ format: 'json', ...params }).toString()
  for (let i = 0; i < 5; i++) {
    await new Promise(s => setTimeout(s, 4000))
    try {
      const r = await fetch(`https://commons.wikimedia.org/w/api.php?${qs}`, { headers: { 'User-Agent': UA, Accept: 'application/json', 'Accept-Encoding': 'identity' } })
      if (r.status === 429) { console.error('  429, wait 60s'); await new Promise(s => setTimeout(s, 60000)); continue }
      if (r.status !== 200) { console.error('  HTTP ' + r.status + ', wait 15s'); await new Promise(s => setTimeout(s, 15000)); continue }
      const text = await r.text()
      try { return JSON.parse(text) } catch { console.error('  非JSON, wait 20s'); await new Promise(s => setTimeout(s, 20000)); continue }
    } catch (e) { await new Promise(s => setTimeout(s, 10000)) }
  }
  throw new Error('API failed')
}

function thumbDims(w: number, h: number): Array<[number, number]> {
  const out: Array<[number, number]> = [[w, h]]
  for (const tw of [1920, 1280, 960]) {
    if (w >= tw) out.push([tw, Math.round((h * tw) / w)])
  }
  return out
}

async function main() {
  const summary: Array<any> = []
  for (const t of TARGETS) {
    console.log(`\n== ${t.file} (${t.w}x${t.h || '?'}) ==`)
    const seen = new Set<string>()
    for (const q of t.queries) {
      const s = await api({ action: 'query', list: 'search', srnamespace: '6', srsearch: q, srlimit: '25' })
      for (const hit of s?.query?.search ?? []) seen.add(hit.title)
    }
    const titles = [...seen]
    console.log(`  候选 ${titles.length}`)
    const found: any[] = []
    for (let i = 0; i < titles.length; i += 20) {
      const info = await api({
        action: 'query', titles: titles.slice(i, i + 20).join('|'), prop: 'imageinfo',
        iiprop: 'url|size|mime|extmetadata', iiextmetadatafilter: 'LicenseShortName|Artist',
      })
      for (const page of Object.values(info?.query?.pages ?? {}) as any[]) {
        const ii = page?.imageinfo?.[0]
        if (!ii) continue
        const dims = thumbDims(ii.width, ii.height)
        const hit = t.w === 0
          ? true // direct: 需进一步比较字节
          : dims.some(([tw, th]) => tw === t.w && th === t.h)
        if (hit) {
          const em = ii.extmetadata ?? {}
          found.push({
            title: page.title, w: ii.width, h: ii.height, mime: ii.mime, url: ii.url,
            license: (em.LicenseShortName?.value ?? '').replace(/&amp;/g, '&'),
            artist: (em.Artist?.value ?? '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim().slice(0, 90),
          })
        }
      }
    }
    if (found.length) {
      for (const f of found.slice(0, 4))
        console.log(`  ✓ ${f.title} | ${f.w}x${f.h} | ${f.mime} | ${f.license} | ${f.artist}`)
    } else console.log('  ✗ 无尺寸匹配')
    summary.push({ file: t.file, found })
  }
  console.log('\n===== 汇总 =====')
  for (const s of summary)
    console.log(`${s.file} => ${s.found.map((f: any) => `${f.title} [${f.license}] ${f.artist}`).join(' || ') || '未匹配'}`)
  const { writeFileSync } = await import('node:fs')
  writeFileSync('/tmp/commons-match2.json', JSON.stringify(summary, null, 2))
}
main()
