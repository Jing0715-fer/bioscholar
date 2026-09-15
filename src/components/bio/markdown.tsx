'use client'

import { useMemo, useState } from 'react'
import ReactMarkdown, { defaultUrlTransform } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Maximize2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import type { Illustration } from '@/lib/types'

/** 传给渲染器的插图项（含自动编号） */
export interface FigureItem {
  src: string
  num: string
  caption: string
  credit?: string
}

const FIGURE_MARKER = /^biofigure:\/\/(\d+)$/

/** 保留 biofigure:// 自定义插图标记，其余 URL 走 react-markdown 默认安全转换 */
function urlTransform(url: string, key: string) {
  return url.startsWith('biofigure://') ? url : defaultUrlTransform(url, key)
}
void urlTransform

/**
 * 在正文 H2 标题边界处均匀穿插插图标记（![](biofigure://i)），
 * 让配图像教材排版一样分布在相关段落之间，而非集中堆叠。
 */
function interleaveFigures(content: string, count: number): string {
  if (count <= 0) return content
  const parts = content.split(/\n(?=##\s)/g)
  if (parts.length <= 1) {
    // 无 H2 层级：置于开头
    const marks = Array.from({ length: count }, (_, i) => `![](biofigure://${i})`)
      .join('\n\n')
    return `${marks}\n\n${content}`
  }
  // 每张图插入的目标段索引（避免与段 0 之前的引言重叠，保持均匀）
  const targetIdx = new Map<number, number[]>()
  for (let i = 0; i < count; i++) {
    let idx = Math.round(((i + 1) * parts.length) / (count + 1))
    idx = Math.max(1, Math.min(parts.length - 1, idx))
    const list = targetIdx.get(idx) ?? []
    list.push(i)
    targetIdx.set(idx, list)
  }
  return parts
    .map((part, idx) => {
      const list = targetIdx.get(idx)
      if (!list?.length) return part
      const marks = list.map((i) => `![](biofigure://${i})`).join('\n\n')
      return `${marks}\n\n${part}`
    })
    .join('\n')
}

/** 教材插图（figure）：纸面画框 + 学术图注 + 点击灯箱放大 */
function BioFigure({ fig }: { fig: FigureItem }) {
  const [zoom, setZoom] = useState(false)
  return (
    <figure className="bio-figure my-7">
      <button
        type="button"
        className="bio-figure-frame group relative block w-full cursor-zoom-in overflow-hidden rounded-lg border bg-[#faf9f4] outline-none focus-visible:ring-2 focus-visible:ring-ring dark:bg-[#111a16]"
        onClick={() => setZoom(true)}
        aria-label={`放大查看 图${fig.num}`}
      >
        <img
          src={fig.src}
          alt={fig.caption}
          loading="lazy"
          className="mx-auto block w-full max-w-[560px] object-contain"
        />
        <span className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </button>
      <figcaption className="bio-fig-caption">
        <span className="bio-fig-num">图 {fig.num}</span>
        <span className="bio-fig-text">{fig.caption}</span>
        {fig.credit && <span className="bio-fig-credit">{fig.credit}</span>}
      </figcaption>

      {/* 灯箱放大 */}
      <Dialog open={zoom} onOpenChange={setZoom}>
        <DialogContent className="max-w-4xl overflow-hidden p-0 sm:rounded-xl">
          <div className="sr-only">
            <DialogTitle>{`图 ${fig.num}`}</DialogTitle>
            <DialogDescription>{fig.caption}</DialogDescription>
          </div>
          <div className="max-h-[75vh] overflow-y-auto bg-[#faf9f4] dark:bg-[#111a16]">
            <img
              src={fig.src}
              alt={fig.caption}
              className="mx-auto block w-full object-contain"
            />
          </div>
          <div className="border-t bg-background px-5 py-4">
            <p className="text-sm leading-relaxed text-foreground">
              <span className="mr-2 font-bold">图 {fig.num}</span>
              {fig.caption}
            </p>
            {fig.credit && (
              <p className="mt-1 text-xs text-muted-foreground">{fig.credit}</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </figure>
  )
}

/** 教材正文 Markdown 渲染器（GFM 表格 + 配图穿插） */
export function Markdown({
  content,
  className,
  figures,
}: {
  content: string
  className?: string
  /** 小节配图（可选，自动按编号穿插进正文） */
  figures?: FigureItem[]
}) {
  const marked = useMemo(
    () => interleaveFigures(content, figures?.length ?? 0),
    [content, figures]
  )

  return (
    <div className={cn('bio-md', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        urlTransform={urlTransform}
        components={{
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              {children}
            </a>
          ),
          // 表格：包裹横向滚动容器（配合 booktabs 学术表格样式）
          table: ({ children }) => (
            <div className="bio-table-wrap">
              <table>{children}</table>
            </div>
          ),
          img: ({ src, alt }) => {
            const s = typeof src === 'string' ? src : ''
            const m = FIGURE_MARKER.exec(s)
            if (m && figures) {
              const fig = figures[Number(m[1])]
              if (fig) return <BioFigure fig={fig} />
            }
            return (
              <img
                src={s}
                alt={alt ?? ''}
                loading="lazy"
                className="mx-auto my-4 block max-w-full rounded-lg"
              />
            )
          },
        }}
      >
        {marked}
      </ReactMarkdown>
    </div>
  )
}

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
