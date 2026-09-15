import type { Illustration } from '@/lib/types'

/** 传给渲染器的插图项（含自动编号） */
export interface FigureItem {
  src: string
  num: string
  caption: string
  credit?: string
}

/** 阅读上下文（供 AI 看图讲解携带教学位置） */
export interface FigureSectionCtx {
  sectionId: string
  sectionTitle?: string
}

/** biofigure:// 插图标记（渲染前由 interleaveFigures 注入正文） */
export const FIGURE_MARKER = /^biofigure:\/\/(\d+)$/

/** 由小节 id 与章号计算教材式图编号（图 {章}-{节}-{序}） */
export function figureNumber(chapterNumber: number, sectionId: string, index: number): string {
  const m = /-s(\d+)$/.exec(sectionId)
  const sec = m ? Number(m[1]) : 0
  return `${chapterNumber}-${sec}-${index + 1}`
}

/** 将 Illustration 数据转为渲染器所需 FigureItem（含编号） */
export function toFigureItems(
  items: Illustration[],
  chapterNumber: number,
  sectionId: string
): FigureItem[] {
  return items.map((it, i) => ({
    ...it,
    num: figureNumber(chapterNumber, sectionId, i),
  }))
}
