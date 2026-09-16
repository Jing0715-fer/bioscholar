/** 探测候选 Commons 文件标题：批量 imageinfo + 尺寸换算 */
const UA = 'BioScholar/1.0 (educational project; contact dev@example.org) curl/8.5.0'

const GUESSES = [
  'File:Average prokaryote cell.svg', 'File:Average prokaryote cell en.svg', 'File:Average prokaryote cell-en.svg',
  'File:Gram positive negative cell wall.svg', 'File:Gram positive and negative cell wall.svg',
  'File:Cell wall plasmolysis.svg', 'File:Flagellum base diagram.svg', 'File:Flagellum diagram.svg',
  'File:Tevenphage.png', 'File:Phage T4 structure.svg', 'File:Bacteriophage T4.png',
  'File:Lytic or lysogenic.gif', 'File:Lytic or lysogenic.png', 'File:Lysogenic cycle.svg',
  'File:Influenza virus structure.svg', 'File:Influenza virus structure-en.svg', 'File:Influenza nomenclature.svg', 'File:Influenza virus letters.png',
  'File:Bacterial growth curve.svg', 'File:Bacterial growth curve (English).svg', 'File:Growth curve (bacteria).svg',
  'File:Bacterial conjugation.svg', 'File:Bacterial conjugation (English).svg', 'File:Conjugation.svg',
  'File:Nitrogen Cycle.svg', 'File:Nitrogen cycle.svg', 'File:Nitrogen cycle (Chinese).svg', 'File:Nitrogen Cycle (Chinese).svg',
  'File:Lipopolysaccharide structure.svg', 'File:LPS structure.svg', 'File:Lipopolysaccharide.svg',
  'File:Tree of life SVG.svg', 'File:Tree of life.svg', 'File:Phylogenetic tree.svg', 'File:Tree of life (Chinese).svg',
  'File:CRISPR Cas9.svg', 'File:CRISPR-Cas9.svg', 'File:Cas9.svg', 'File:CRISPR Cas9 mechanism.svg', 'File:DNA repair CRISPR.svg',
  'File:Penicillium labeled.jpg', 'File:Penicillium sp..jpg', 'File:Penicillium.jpg',
  'File:Endospore.svg', 'File:Rhizopus sporangium.jpg', 'File:Rhizopus nigricans.jpg', 'File:Aspergillus conidial head.jpg',
  'File:Complement pathway.svg', 'File:Complement system.svg',
]

async function api(params: Record<string, string>) {
  const qs = new URLSearchParams({ format: 'json', ...params }).toString()
  await new Promise(s => setTimeout(s, 3500))
  const r = await fetch(`https://commons.wikimedia.org/w/api.php?${qs}`, {
    headers: { 'User-Agent': UA, Accept: 'application/json', 'Accept-Encoding': 'identity' },
  })
  if (r.status !== 200) throw new Error('HTTP ' + r.status)
  return await r.json()
}

async function main() {
  for (let i = 0; i < GUESSES.length; i += 20) {
    const batch = GUESSES.slice(i, i + 20)
    const info = await api({
      action: 'query', titles: batch.join('|'), prop: 'imageinfo',
      iiprop: 'url|size|mime|extmetadata', iiextmetadatafilter: 'LicenseShortName|Artist',
      iiurlwidth: '1920',
    })
    for (const page of Object.values(info?.query?.pages ?? {}) as any[]) {
      if (page.missing !== undefined) continue
      const ii = page?.imageinfo?.[0]
      if (!ii) continue
      const em = ii.extmetadata ?? {}
      const artist = (em.Artist?.value ?? '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim().slice(0, 70)
      console.log(`${page.title} | ${ii.width}x${ii.height} | ${ii.mime} | ${(em.LicenseShortName?.value ?? '').replace(/&amp;/g, '&')} | ${artist}`)
      if (ii.thumburl) console.log(`   thumb1920: ${ii.thumbwidth}x${ii.thumbheight}`)
    }
  }
}
main()
