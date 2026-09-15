// ============================================================
// BioScholar 术语词典 · 分子结构式映射
// 将化学分子类词条挂载 RCSB CCD 真实结构图（OpenEye 统一渲染 SVG）
//
// 图片目录：public/images/bio/terms/{CCD代码}.svg
// 重取脚本：bun scripts/fetch-term-structures.ts
// 全部配体代码均经 data.rcsb.org 名称 API 核实（避开 CCD 历史命名陷阱）
// ============================================================

export interface TermStructure {
  /** CCD 配体代码 */
  code: string
  /** 分子式（来自 RCSB data API） */
  formula: string
  /** RCSB 官方英文名 */
  en: string
}

/** termId → CCD 结构图（src 为 /images/bio/terms/{code}.svg） */
export const termStructures: Record<string, TermStructure> = {
  // ---- 既有词条挂图 ----
  'g-001': { code: 'ATP', formula: 'C10 H16 N5 O13 P3', en: "ADENOSINE-5'-TRIPHOSPHATE" },
  'g-021': { code: 'CLR', formula: 'C27 H46 O', en: 'CHOLESTEROL' },
  // ---- 分子结构词条（g-101 ~ g-124）----
  'g-101': { code: 'GLC', formula: 'C6 H12 O6', en: 'alpha-D-glucopyranose' },
  'g-102': { code: 'FRU', formula: 'C6 H12 O6', en: 'beta-D-fructofuranose' },
  'g-103': { code: 'GAL', formula: 'C6 H12 O6', en: 'beta-D-galactopyranose' },
  'g-104': { code: 'PLM', formula: 'C16 H32 O2', en: 'PALMITIC ACID' },
  'g-105': { code: 'OLA', formula: 'C18 H34 O2', en: 'OLEIC ACID' },
  'g-106': { code: 'GOL', formula: 'C3 H8 O3', en: 'GLYCEROL' },
  'g-107': { code: 'SPH', formula: 'C18 H37 N O2', en: 'SPHINGOSINE' },
  'g-108': { code: 'ADE', formula: 'C5 H5 N5', en: 'ADENINE' },
  'g-109': { code: 'GUN', formula: 'C5 H5 N5 O', en: 'GUANINE' },
  'g-110': { code: 'CYT', formula: 'C4 H5 N3 O', en: '6-AMINOPYRIMIDIN-2(1H)-ONE（胞嘧啶）' },
  'g-111': { code: 'URA', formula: 'C4 H4 N2 O2', en: 'URACIL' },
  'g-112': { code: 'TDR', formula: 'C5 H6 N2 O2', en: 'THYMINE' },
  'g-113': { code: 'ADN', formula: 'C10 H13 N5 O4', en: 'ADENOSINE' },
  'g-114': { code: 'NAD', formula: 'C21 H27 N7 O14 P2', en: 'NICOTINAMIDE-ADENINE-DINUCLEOTIDE' },
  'g-115': { code: 'FAD', formula: 'C27 H33 N9 O15 P2', en: 'FLAVIN-ADENINE DINUCLEOTIDE' },
  'g-116': { code: 'COA', formula: 'C21 H36 N7 O16 P3 S', en: 'COENZYME A' },
  'g-117': { code: 'HEM', formula: 'C34 H32 Fe N4 O4', en: 'PROTOPORPHYRIN IX CONTAINING FE（血红素）' },
  'g-118': { code: 'TPP', formula: 'C12 H19 N4 O7 P2 S', en: 'THIAMINE DIPHOSPHATE' },
  'g-119': { code: 'PLP', formula: 'C8 H10 N O6 P', en: "PYRIDOXAL-5'-PHOSPHATE" },
  'g-120': { code: 'BTN', formula: 'C10 H16 N2 O3 S', en: 'BIOTIN' },
  'g-121': { code: 'FOL', formula: 'C19 H19 N7 O6', en: 'FOLIC ACID' },
  'g-122': { code: 'ASC', formula: 'C6 H8 O6', en: 'ASCORBIC ACID' },
  'g-123': { code: 'RTL', formula: 'C20 H30 O', en: 'RETINOL' },
  'g-124': { code: 'BCR', formula: 'C40 H56', en: 'BETA-CAROTENE' },
}

/** 取术语结构图路径 */
export function termStructureSrc(termId: string): string | null {
  const s = termStructures[termId]
  return s ? `/images/bio/terms/${s.code}.svg` : null
}
