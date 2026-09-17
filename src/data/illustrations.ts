// ============================================================
// 教材插图数据（全学科挂载表）
// 图片位于 public/images/bio/（commons/ 真实来源图 + drawn/ 自绘矢量图）
// 挂载：Record<sectionId, Illustration[]>
// ============================================================
import type { Illustration } from '@/lib/types'
import { immunoIllustrations } from './immuno-illustrations'
import { neuroIllustrations } from './neuro-illustrations'
import { bioinfoIllustrations } from './bioinfo-illustrations'
import { biochemistryIllustrations } from './illustrations-biochemistry'
import { molecularBiologyIllustrations } from './illustrations-molecular-biology'
import { cellBiologyIllustrations } from './illustrations-cell-biology'
import { biophysicsIllustrations } from './illustrations-biophysics'
import { microIllustrations } from './illustrations-microbiology'

/** 学科封面（自绘 SVG，非 AI 生成） */
export const subjectCovers: Record<string, string> = {
  biochemistry: '/images/bio/covers/cover-biochemistry.svg',
  'molecular-biology': '/images/bio/covers/cover-molecular-biology.svg',
  'cell-biology': '/images/bio/covers/cover-cell-biology.svg',
  biophysics: '/images/bio/covers/cover-biophysics.svg',
  microbiology: '/images/bio/covers/cover-microbiology.svg',
  immunology: '/images/bio/covers/cover-immunology.svg',
  neurobiology: '/images/bio/covers/cover-neurobiology.svg',
  bioinformatics: '/images/bio/covers/cover-bioinformatics.svg',
}

/** 全部插图挂载表（跨学科合并） */
export const illustrations: Record<string, Illustration[]> = {
  ...biochemistryIllustrations,
  ...molecularBiologyIllustrations,
  ...cellBiologyIllustrations,
  ...biophysicsIllustrations,
  ...microIllustrations,
  ...immunoIllustrations,
  ...neuroIllustrations,
  ...bioinfoIllustrations,
}

/** 查询某小节的插图 */
export function getIllustrations(sectionId: string): Illustration[] {
  return illustrations[sectionId] ?? []
}

/** 全部插图平铺（图库视图用） */
export function allIllustrations(): Array<{
  sectionId: string
  subjectId: string
  chapterId: string
  illustration: Illustration
}> {
  const result: Array<{
    sectionId: string
    subjectId: string
    chapterId: string
    illustration: Illustration
  }> = []
  for (const [sectionId, list] of Object.entries(illustrations)) {
    // sectionId 形如 {subjectId}-ch{n}-s{m}
    const m = sectionId.match(/^(.+)-ch\d+-s\d+$/)
    if (!m) continue
    const subjectId = m[1]
    const chapterId = sectionId.slice(0, sectionId.lastIndexOf('-s'))
    for (const illustration of list) {
      result.push({ sectionId, subjectId, chapterId, illustration })
    }
  }
  return result
}
