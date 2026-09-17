/**
 * 从 RCSB PDB 化学组分字典（CCD）批量下载小分子 2D 结构图
 *
 * 数据源：
 *  - 结构图（SVG 矢量，OpenEye 统一渲染）：
 *      https://cdn.rcsb.org/images/ccd/unlabeled/{首字母}/{CCD代码}.svg
 *  - 名称/化学式校验：https://data.rcsb.org/rest/v1/core/chemcomp/{代码}
 *
 * 所有代码均已逐一经 data-api 名称核实（避免 CCD 历史命名陷阱，如
 * LAC=乳酸而非乳糖、CMP=cAMP、GMP=鸟苷、THY=某硫胺素衍生物 等）。
 *
 * 用法：bun scripts/fetch-ccd-structures.ts
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'

const OUT_DIR = 'public/images/bio/structures'
const CDN = (code: string) =>
  `https://cdn.rcsb.org/images/ccd/unlabeled/${code[0]}/${code}.svg`
const DATA_API = (code: string) =>
  `https://data.rcsb.org/rest/v1/core/chemcomp/${code}`

/** 下载清单：代码 → { 中文名, 学科分组 } */
const PLAN: Record<string, { zh: string; group: string }> = {
  // ---- 单糖（生物化学 ch1）----
  GLC: { zh: 'α-D-吡喃葡萄糖', group: 'monosaccharide' },
  BGC: { zh: 'β-D-吡喃葡萄糖', group: 'monosaccharide' },
  FRU: { zh: 'β-D-呋喃果糖', group: 'monosaccharide' },
  GAL: { zh: 'β-D-吡喃半乳糖', group: 'monosaccharide' },
  MAN: { zh: 'α-D-吡喃甘露糖', group: 'monosaccharide' },
  RIB: { zh: 'α-D-呋喃核糖', group: 'monosaccharide' },
  XYS: { zh: 'α-D-吡喃木糖', group: 'monosaccharide' },
  // ---- 脂质（生物化学 ch2）----
  PLM: { zh: '棕榈酸（C16:0）', group: 'fatty-acid' },
  STE: { zh: '硬脂酸（C18:0）', group: 'fatty-acid' },
  MYR: { zh: '豆蔻酸（C14:0）', group: 'fatty-acid' },
  OLA: { zh: '油酸（C18:1 Δ9）', group: 'fatty-acid' },
  PAM: { zh: '棕榈油酸（C16:1 Δ9）', group: 'fatty-acid' },
  GOL: { zh: '甘油', group: 'lipid' },
  CLR: { zh: '胆固醇', group: 'lipid' },
  PCW: { zh: '1,2-二油酰-sn-甘油-3-磷酸胆碱', group: 'lipid' },
  SPH: { zh: '鞘氨醇', group: 'lipid' },
  // ---- 20 种标准氨基酸（生物化学 ch3）----
  GLY: { zh: '甘氨酸', group: 'amino-acid' },
  ALA: { zh: '丙氨酸', group: 'amino-acid' },
  VAL: { zh: '缬氨酸', group: 'amino-acid' },
  LEU: { zh: '亮氨酸', group: 'amino-acid' },
  ILE: { zh: '异亮氨酸', group: 'amino-acid' },
  MET: { zh: '甲硫氨酸', group: 'amino-acid' },
  PHE: { zh: '苯丙氨酸', group: 'amino-acid' },
  TRP: { zh: '色氨酸', group: 'amino-acid' },
  PRO: { zh: '脯氨酸', group: 'amino-acid' },
  SER: { zh: '丝氨酸', group: 'amino-acid' },
  THR: { zh: '苏氨酸', group: 'amino-acid' },
  CYS: { zh: '半胱氨酸', group: 'amino-acid' },
  ASN: { zh: '天冬酰胺', group: 'amino-acid' },
  GLN: { zh: '谷氨酰胺', group: 'amino-acid' },
  TYR: { zh: '酪氨酸', group: 'amino-acid' },
  ASP: { zh: '天冬氨酸', group: 'amino-acid' },
  GLU: { zh: '谷氨酸', group: 'amino-acid' },
  LYS: { zh: '赖氨酸', group: 'amino-acid' },
  ARG: { zh: '精氨酸', group: 'amino-acid' },
  HIS: { zh: '组氨酸', group: 'amino-acid' },
  // ---- 维生素与辅酶（生物化学 ch6）----
  TPP: { zh: '焦磷酸硫胺素（B1 辅酶形式）', group: 'vitamin' },
  RBF: { zh: '核黄素（B2）', group: 'vitamin' },
  FMN: { zh: '黄素单核苷酸（FMN）', group: 'vitamin' },
  FAD: { zh: '黄素腺嘌呤二核苷酸（FAD）', group: 'vitamin' },
  NCA: { zh: '烟酰胺（B3）', group: 'vitamin' },
  PLP: { zh: '磷酸吡哆醛（B6 辅酶形式）', group: 'vitamin' },
  BTN: { zh: '生物素（B7）', group: 'vitamin' },
  FOL: { zh: '叶酸（B9）', group: 'vitamin' },
  B12: { zh: '钴胺素（B12）', group: 'vitamin' },
  ASC: { zh: '抗坏血酸（维生素C）', group: 'vitamin' },
  RTL: { zh: '视黄醇（维生素A）', group: 'vitamin' },
  RET: { zh: '视黄醛', group: 'vitamin' },
  BCR: { zh: 'β-胡萝卜素', group: 'vitamin' },
  VDY: { zh: '骨化三醇（1,25-二羟维生素D3）', group: 'vitamin' },
  VIT: { zh: '维生素E（生育酚）', group: 'vitamin' },
  PQN: { zh: '叶绿醌（维生素K1）', group: 'vitamin' },
  // ---- 核酸化学（生物化学 ch7）----
  ADE: { zh: '腺嘌呤', group: 'nucleic-acid' },
  GUN: { zh: '鸟嘌呤', group: 'nucleic-acid' },
  CYT: { zh: '胞嘧啶', group: 'nucleic-acid' },
  URA: { zh: '尿嘧啶', group: 'nucleic-acid' },
  TDR: { zh: '胸腺嘧啶', group: 'nucleic-acid' },
  ADN: { zh: '腺苷（核苷）', group: 'nucleic-acid' },
  GMP: { zh: '鸟苷（核苷）', group: 'nucleic-acid' },
  URI: { zh: '尿苷（核苷）', group: 'nucleic-acid' },
  CTN: { zh: '胞苷（核苷）', group: 'nucleic-acid' },
  THM: { zh: '胸苷（核苷）', group: 'nucleic-acid' },
  AMP: { zh: '腺苷酸（AMP）', group: 'nucleic-acid' },
  '5GP': { zh: '鸟苷酸（GMP）', group: 'nucleic-acid' },
  C5P: { zh: '胞苷酸（CMP）', group: 'nucleic-acid' },
  U5P: { zh: '尿苷酸（UMP）', group: 'nucleic-acid' },
  TMP: { zh: '胸苷酸（dTMP）', group: 'nucleic-acid' },
  // ---- 辅酶与高能化合物（生物化学 ch8）----
  ATP: { zh: '三磷酸腺苷（ATP）', group: 'coenzyme' },
  GTP: { zh: '三磷酸鸟苷（GTP）', group: 'coenzyme' },
  COA: { zh: '辅酶A（CoA）', group: 'coenzyme' },
  ACO: { zh: '乙酰辅酶A', group: 'coenzyme' },
  NAD: { zh: 'NAD⁺（氧化型）', group: 'coenzyme' },
  NAI: { zh: 'NADH（还原型）', group: 'coenzyme' },
  NAP: { zh: 'NADP⁺（氧化型）', group: 'coenzyme' },
  NDP: { zh: 'NADPH（还原型）', group: 'coenzyme' },
  CMP: { zh: '环腺苷酸（cAMP）', group: 'coenzyme' },
  HEM: { zh: '血红素（铁卟啉）', group: 'coenzyme' },
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
  const manifest: Record<
    string,
    { zh: string; en: string; formula: string; src: string }
  > = {}
  let ok = 0
  let skip = 0

  for (const [code, meta] of Object.entries(PLAN)) {
    const file = `${OUT_DIR}/${code}.svg`
    if (existsSync(file)) {
      ok++
      continue
    }
    // 1) 名称校验（防 CCD 陷阱代码）
    let en = ''
    let formula = ''
    try {
      const res = await fetchWithRetry(DATA_API(code))
      if (res.ok) {
        const j = (await res.json()) as {
          chem_comp?: { name?: string; formula?: string }
        }
        en = j.chem_comp?.name ?? ''
        formula = j.chem_comp?.formula ?? ''
      }
    } catch {
      /* 名称校验失败不阻断，图面仍下载 */
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
      manifest[code] = {
        zh: meta.zh,
        en,
        formula,
        src: `https://www.rcsb.org/ligand/${code}`,
      }
      ok++
      console.log(`✓ ${code.padEnd(4)} ${meta.zh}  [${en.slice(0, 40)}]`)
    } catch (e) {
      console.warn(`✗ ${code}（${meta.zh}）失败：${String(e)}`)
      skip++
    }
  }

  // 写 manifest（覆盖，包含全部已存在文件）
  for (const [code, meta] of Object.entries(PLAN)) {
    if (!manifest[code] && existsSync(`${OUT_DIR}/${code}.svg`)) {
      manifest[code] = {
        zh: meta.zh,
        en: '',
        formula: '',
        src: `https://www.rcsb.org/ligand/${code}`,
      }
    }
  }
  await writeFile(
    `${OUT_DIR}/manifest.json`,
    JSON.stringify(manifest, null, 2),
    'utf-8'
  )
  console.log(`\n完成：成功 ${ok}，跳过 ${skip}；清单写入 ${OUT_DIR}/manifest.json`)
}

main()
