/**
 * Commons 来源反查：按本地图片尺寸匹配 Wikimedia 缩略图尺寸
 * 对每个本地文件，用主题关键词搜索 Commons 候选，取 imageinfo 尺寸，
 * 计算 1920px 缩略图（或原图直取）的应有尺寸，与本地文件精确匹配。
 */
import { readFileSync, statSync } from 'node:fs'

const UA = 'BioScholar/1.0 (educational project; contact: dev@example.org)'

interface Cand {
  title: string
  width: number
  height: number
  mime: string
  license: string
  artist: string
  thumbW: number
  thumbH: number
}

const TARGETS: Array<{ file: string; queries: string[]; localW: number; localH: number; direct: boolean }> = [
  { file: 'average-prokaryote-cell.png', queries: ['Average prokaryote cell', 'prokaryote cell structure diagram'], localW: 1920, localH: 1152, direct: false },
  { file: 'gram-cell-wall-comparison.png', queries: ['gram positive gram negative cell wall', 'Gram stain cell wall'], localW: 1920, localH: 2388, direct: false },
  { file: 'flagellum-base-diagram.png', queries: ['flagellum base diagram', 'bacterial flagellum diagram'], localW: 1920, localH: 1711, direct: false },
  { file: 'saccharomyces-cerevisiae-sem.jpg', queries: ['Saccharomyces cerevisiae SEM', 'budding yeast SEM'], localW: 0, localH: 0, direct: true },
  { file: 'penicillium-conidiophore.jpg', queries: ['Penicillium conidiophore', 'Penicillium microscopy'], localW: 0, localH: 0, direct: true },
  { file: 'bacteriophage-t4-structure.png', queries: ['bacteriophage T4 structure', 'T4 phage structure diagram'], localW: 1920, localH: 2343, direct: false },
  { file: 'phage-lytic-lysogenic-cycles.png', queries: ['lytic lysogenic cycle', 'lysogenic cycle diagram'], localW: 1920, localH: 2056, direct: false },
  { file: 'influenza-virus-structure.png', queries: ['influenza virus structure', 'influenza virus diagram'], localW: 1920, localH: 1920, direct: false },
  { file: 'bacterial-growth-curve.png', queries: ['bacterial growth curve', 'growth curve bacteria'], localW: 1920, localH: 1319, direct: false },
  { file: 'bacterial-conjugation.png', queries: ['bacterial conjugation', 'conjugation bacteria diagram'], localW: 1920, localH: 1742, direct: false },
  { file: 'nitrogen-cycle.png', queries: ['nitrogen cycle', 'nitrogen cycle diagram'], localW: 1920, localH: 1440, direct: false },
  { file: 'lps-structure.png', queries: ['lipopolysaccharide structure', 'LPS structure'], localW: 1280, localH: 2944, direct: false },
  { file: 'three-domain-tree.png', queries: ['tree of life three domain', 'phylogenetic tree Woese'], localW: 1920, localH: 1043, direct: false },
  { file: 'crispr-cas9-mechanism.png', queries: ['CRISPR Cas9 mechanism', 'CRISPR-Cas9 diagram'], localW: 1920, localH: 1920, direct: false },
]

async function api(params: Record<string, string>): Promise<any> {
  const qs = new URLSearchParams({ format: 'json', ...params }).toString()
  for (let i = 0; i < 4; i++) {
    try {
      const r = await fetch(`https://commons.wikimedia.org/w/api.php?${qs}`, {
        headers: { 'User-Agent': UA },
      })
      if (r.status === 429) {
        console.error('  429 限流，等 60s…')
        await new Promise((s) => setTimeout(s, 60000))
        continue
      }
      return await r.json()
    } catch (e) {
      await new Promise((s) => setTimeout(s, 5000))
    }
  }
  throw new Error('API 失败: ' + qs.slice(0, 60))
}

function cleanArtist(a: string): string {
  return a
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80)
}

async function main() {
  const results: Array<{ file: string; match?: Cand; directBytes?: number; localBytes: number; cands: number }> = []
  for (const t of TARGETS) {
    const localBytes = statSync(`public/images/bio/commons/${t.file}`).size
    console.log(`\n== ${t.file} (${t.localW}x${t.localH || '?'}, ${Math.round(localBytes / 1024)}KB) ==`)
    const seen = new Set<string>()
    let cands: Cand[] = []
    for (const q of t.queries) {
      const s = await api({ action: 'query', list: 'search', srnamespace: '6', srsearch: q, srlimit: '20' })
      for (const hit of s?.query?.search ?? []) seen.add(hit.title)
    }
    const titles = [...seen].slice(0, 40)
    console.log(`  候选 ${titles.length} 个`)
    // imageinfo 批量（每批 20）
    for (let i = 0; i < titles.length; i += 20) {
      const batch = titles.slice(i, i + 20)
      const info = await api({
        action: 'query',
        titles: batch.join('|'),
        prop: 'imageinfo',
        iiprop: 'url|size|mime|extmetadata',
        iiextmetadatafilter: 'LicenseShortName|Artist',
      })
      for (const page of Object.values(info?.query?.pages ?? {}) as any[]) {
        const ii = page?.imageinfo?.[0]
        if (!ii) continue
        const em = ii.extmetadata ?? {}
        const c: Cand = {
          title: page.title,
          width: ii.width,
          height: ii.height,
          mime: ii.mime,
          license: (em.LicenseShortName?.value ?? '').replace(/&amp;/g, '&'),
          artist: cleanArtist(em.Artist?.value ?? ''),
          thumbW: 0,
          thumbH: 0,
        }
        if (t.direct) {
          c.thumbW = ii.width
          c.thumbH = ii.height
        } else if (ii.width >= 1900) {
          c.thumbW = 1920
          c.thumbH = Math.round((ii.height * 1920) / ii.width)
        } else {
          c.thumbW = ii.width
          c.thumbH = ii.height
        }
        cands.push(c)
      }
    }
    // 尺寸匹配（宽高都相等）
    let match: Cand | undefined
    if (t.direct) {
      // 原图直取：尺寸一致且字节接近
      match = cands.find(
        (c) => c.width === t.localW || c.mime.includes('jpeg')
      )
    } else {
      match = cands.find((c) => c.thumbW === t.localW && c.thumbH === t.localH)
    }
    if (!match && !t.direct) {
      // 容差 ±2px
      match = cands.find(
        (c) => Math.abs(c.thumbW - t.localW) <= 2 && Math.abs(c.thumbH - t.localH) <= 2
      )
    }
    if (match) {
      console.log(`  ✓ ${match.title} | ${match.width}x${match.height} | ${match.mime} | ${match.license} | ${match.artist}`)
    } else {
      console.log(`  ✗ 未匹配。相近候选：`)
      for (const c of cands
        .filter((c) => Math.abs(c.thumbH - (t.localH || c.thumbH)) <= 40)
        .slice(0, 5))
        console.log(`    ${c.title} thumb ${c.thumbW}x${c.thumbH} ${c.license}`)
    }
    results.push({ file: t.file, match, localBytes, cands: cands.length })
  }
  console.log('\n===== 汇总 =====')
  for (const r of results) {
    console.log(
      `${r.file} => ${r.match ? r.match.title + ' | ' + r.match.license + ' | ' + r.match.artist : '未匹配'}`
    )
  }
  writeFileSync('/tmp/commons-match.json', JSON.stringify(results, null, 2))
}

main()
