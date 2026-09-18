/** Commons 来源反查 v3：API 报告的 thumb 尺寸（±2px 容差） */
import { writeFileSync } from 'node:fs'

const UA = 'BioScholar/1.0 (educational project; contact dev@example.org) curl/8.5.0'

const TARGETS = [
  { file: 'average-prokaryote-cell.png', w: 1920, h: 1152, queries: ['prokaryotic cell structure diagram', 'bacteria cell structure diagram', 'prokaryote cell anatomy'] },
  { file: 'gram-cell-wall-comparison.png', w: 1920, h: 2388, queries: ['gram positive cell wall diagram', 'cell wall gram positive negative comparison', 'peptidoglycan layer diagram'] },
  { file: 'bacteriophage-t4-structure.png', w: 1920, h: 2343, queries: ['T4 bacteriophage diagram', 'bacteriophage structure diagram tail', 'tevenphage'] },
  { file: 'phage-lytic-lysogenic-cycles.png', w: 1920, h: 2056, queries: ['lytic lysogenic cycle diagram', 'lysogenic cycle prophage', 'temperate phage cycle'] },
  { file: 'influenza-virus-structure.png', w: 1920, h: 1920, queries: ['influenza virus structure diagram', 'influenza A virus structure', 'orthomyxovirus structure diagram'] },
  { file: 'bacterial-growth-curve.png', w: 1920, h: 1319, queries: ['bacterial growth curve diagram', 'growth curve lag exponential stationary death', 'microbial growth curve'] },
  { file: 'lps-structure.png', w: 1280, h: 2944, queries: ['lipopolysaccharide structure diagram', 'LPS lipid A core O-antigen', 'lipopolysaccharide chemical structure'] },
  { file: 'crispr-cas9-mechanism.png', w: 1920, h: 1920, queries: ['CRISPR Cas9 editing diagram', 'Cas9 guide RNA PAM diagram', 'CRISPR-Cas9 mechanism diagram'] },
]

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
  const out: any = {}
  for (const t of TARGETS) {
    console.log(`\n== ${t.file} (${t.w}x${t.h}) ==`)
    const seen = new Set<string>()
    for (const q of t.queries) {
      const s = await api({ action: 'query', list: 'search', srnamespace: '6', srsearch: q, srlimit: '25' })
      for (const hit of s?.query?.search ?? []) seen.add(hit.title)
    }
    const titles = [...seen].filter((x) => /\.(svg|png)$/i.test(x))
    console.log(`  图形候选 ${titles.length}`)
    const found: any[] = []
    for (let i = 0; i < titles.length; i += 20) {
      const info = await api({
        action: 'query', titles: titles.slice(i, i + 20).join('|'), prop: 'imageinfo',
        iiprop: 'url|size|mime|extmetadata', iiextmetadatafilter: 'LicenseShortName|Artist',
        iiurlwidth: String(t.w),
      })
      for (const page of Object.values(info?.query?.pages ?? {}) as any[]) {
        const ii = page?.imageinfo?.[0]
        if (!ii || !ii.thumburl) continue
        if (Math.abs(ii.thumbwidth - t.w) <= 2 && Math.abs(ii.thumbheight - t.h) <= 2) {
          const em = ii.extmetadata ?? {}
          found.push({
            title: page.title, mime: ii.mime, url: ii.thumburl,
            license: (em.LicenseShortName?.value ?? '').replace(/&amp;/g, '&'),
            artist: (em.Artist?.value ?? '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim().slice(0, 90),
          })
        }
      }
    }
    if (found.length) for (const f of found) console.log(`  ✓ ${f.title} | ${f.license} | ${f.artist}`)
    else console.log('  ✗ 未匹配')
    out[t.file] = found
  }
  writeFileSync('/tmp/commons-match3.json', JSON.stringify(out, null, 2))
  console.log('\n===== 汇总 =====')
  for (const [f, found] of Object.entries(out))
    console.log(`${f} => ${(found as any[]).map((x: any) => `${x.title} [${x.license}] ${x.artist}`).join(' || ') || '未匹配'}`)
}
main()
