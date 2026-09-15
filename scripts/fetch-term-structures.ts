/**
 * 为术语词典下载分子结构式缩略图（RCSB CCD 单体 SVG）
 *
 * 输出目录：public/images/bio/terms/（与教材插图 structures/ 分离，
 * 仅用于术语卡片缩略图与词典灯箱）
 *
 * 用法：bun scripts/fetch-term-structures.ts
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'

const OUT_DIR = 'public/images/bio/terms'
const CDN = (code: string) =>
  `https://cdn.rcsb.org/images/ccd/unlabeled/${code[0]}/${code}.svg`
const DATA_API = (code: string) => `https://data.rcsb.org/rest/v1/core/chemcomp/${code}`

/** 下载清单：CCD 代码 → { 术语名, 英文名预期片段 } */
const PLAN: Record<string, { zh: string; expect: string }> = {
  ATP: { zh: '三磷酸腺苷', expect: 'adenosine triphosphate' },
  CLR: { zh: '胆固醇', expect: 'cholesterol' },
  GLC: { zh: 'D-葡萄糖', expect: 'glucopyranose' },
  FRU: { zh: 'D-果糖', expect: 'fructofuranose' },
  GAL: { zh: 'D-半乳糖', expect: 'galactopyranose' },
  SUC: { zh: '蔗糖', expect: 'sucrose' },
  PLM: { zh: '棕榈酸', expect: 'palmitic acid' },
  OLA: { zh: '油酸', expect: 'oleic acid' },
  GOL: { zh: '甘油', expect: 'glycerol' },
  SPH: { zh: '鞘氨醇', expect: 'sphingosine' },
  ADE: { zh: '腺嘌呤', expect: 'adenine' },
  GUN: { zh: '鸟嘌呤', expect: 'guanine' },
  CYT: { zh: '胞嘧啶', expect: 'cytosine' },
  URA: { zh: '尿嘧啶', expect: 'uracil' },
  THY: { zh: '胸腺嘧啶', expect: 'thymine' },
  ADN: { zh: '腺苷', expect: 'adenosine' },
  TDR: { zh: '胸苷', expect: 'thymidine' },
  NAD: { zh: 'NAD⁺（氧化型烟酰胺腺嘌呤二核苷酸）', expect: 'nicotinamide' },
  FAD: { zh: 'FAD（黄素腺嘌呤二核苷酸）', expect: 'flavin' },
  COA: { zh: '辅酶A', expect: 'coenzyme A' },
  HEM: { zh: '血红素（铁卟啉）', expect: 'heme' },
  TPP: { zh: '焦磷酸硫胺素', expect: 'thiamine' },
  PLP: { zh: '磷酸吡哆醛', expect: 'pyridoxal' },
  BTN: { zh: '生物素', expect: 'biotin' },
  FOL: { zh: '叶酸', expect: 'folic acid' },
  ASC: { zh: '抗坏血酸（维生素C）', expect: 'ascorbic acid' },
  RTL: { zh: '视黄醇（维生素A）', expect: 'retinol' },
  BCR: { zh: 'β-胡萝卜素', expect: 'carotene' },
}

async function fetchWithRetry(url: string, tries = 3): Promise<Response> {
  let lastErr: unknown
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'BioScholar/1.0 (educational)' },
        signal: AbortSignal.timeout(20000),
      })
      if (res.ok) return res
      if (res.status === 404) return res
      lastErr = new Error(`HTTP ${res.status}`)
    } catch (e) {
      lastErr = e
    }
    await new Promise((r) => setTimeout(r, 1200 * (i + 1)))
  }
  throw lastErr
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })
  // 读旧 manifest（补全已存在文件的元数据）
  const prevPath = `${OUT_DIR}/manifest.json`
  const prev: Record<string, { en?: string; formula?: string }> = existsSync(prevPath)
    ? (JSON.parse(await readFileUtf8(prevPath)) as Record<string, { en?: string; formula?: string }>)
    : {}
  const manifest: Record<
    string,
    { zh: string; en: string; formula: string; src: string }
  > = {}
  let ok = 0
  let skip = 0

  for (const [code, meta] of Object.entries(PLAN)) {
    const file = `${OUT_DIR}/${code}.svg`
    let en = prev[code]?.en ?? ''
    let formula = prev[code]?.formula ?? ''

    if (!existsSync(file)) {
      // 1) 名称校验（防 CCD 历史陷阱代码）
      let verified = false
      try {
        const res = await fetchWithRetry(DATA_API(code))
        if (res.ok) {
          const j = (await res.json()) as { chem_comp?: { name?: string; formula?: string } }
          en = j.chem_comp?.name ?? ''
          formula = j.chem_comp?.formula ?? ''
          verified = en.toLowerCase().includes(meta.expect.split(' ')[0].toLowerCase())
        }
      } catch {
        /* 名称校验失败不阻断 */
      }
      if (en && !verified) {
        console.warn(`⚠ ${code} 名称校验不符：期望含「${meta.expect}」，实际「${en}」——请人工复核`)
      }
      // 2) 下载 SVG
      try {
        const res = await fetchWithRetry(CDN(code))
        if (!res.ok) {
          console.warn(`✗ ${code}（${meta.zh}）HTTP ${res.status}，跳过`)
          skip++
          continue
        }
        const svg = await res.text()
        if (!svg.includes('<svg')) {
          console.warn(`✗ ${code}（${meta.zh}）非 SVG 内容，跳过`)
          skip++
          continue
        }
        await writeFile(file, svg, 'utf-8')
        console.log(
          `✓ ${code.padEnd(4)} ${meta.zh}  [${en.slice(0, 46)}]${verified ? '' : '（名称待复核）'}`
        )
      } catch (e) {
        console.warn(`✗ ${code}（${meta.zh}）失败：${String(e)}`)
        skip++
        continue
      }
    }
    ok++
    manifest[code] = {
      zh: meta.zh,
      en,
      formula,
      src: `https://www.rcsb.org/ligand/${code}`,
    }
  }

  await writeFile(`${OUT_DIR}/manifest.json`, JSON.stringify(manifest, null, 2), 'utf-8')
  console.log(`\n完成：成功 ${ok}，跳过 ${skip}；manifest 写入 ${OUT_DIR}/manifest.json`)
}

async function readFileUtf8(p: string): Promise<string> {
  const { readFile } = await import('node:fs/promises')
  return readFile(p, 'utf-8')
}

main()
