'use client'

import { useMemo, useState } from 'react'
import ReactMarkdown, { defaultUrlTransform } from 'react-markdown'
import { memo } from 'react'
import remarkGfm from 'remark-gfm'
import rehypeUnwrapImages from 'rehype-unwrap-images'
import { Maximize2, RotateCcw, Sparkles } from 'lucide-react'
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

/** 阅读上下文（供 AI 看图讲解携带教学位置） */
export interface FigureSectionCtx {
  sectionId: string
  sectionTitle?: string
}

const FIGURE_MARKER = /^biofigure:\/\/(\d+)$/

/** 保留 biofigure:// 自定义插图标记，其余 URL 走 react-markdown 默认安全转换 */
function urlTransform(url: string) {
  return url.startsWith('biofigure://') ? url : defaultUrlTransform(url)
}

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

/** 教材插图（figure）：纸面画框 + 学术图注 + 点击灯箱放大（含 AI 看图讲解） */
function BioFigure({
  fig,
  sectionCtx,
}: {
  fig: FigureItem
  sectionCtx?: FigureSectionCtx
}) {
  const [zoom, setZoom] = useState(false)
  const [explanation, setExplanation] = useState<string | null>(null)
  const [explaining, setExplaining] = useState(false)
  const [explainErr, setExplainErr] = useState(false)

  /** 调用后端 VLM 看图讲解 */
  async function explainFigure() {
    setExplaining(true)
    setExplainErr(false)
    try {
      const res = await fetch('/api/assistant/figure-explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          src: fig.src,
          num: fig.num,
          caption: fig.caption,
          credit: fig.credit,
          sectionId: sectionCtx?.sectionId,
        }),
      })
      if (!res.ok) throw new Error('failed')
      const data = (await res.json()) as { content?: string }
      if (!data.content) throw new Error('empty')
      setExplanation(data.content)
    } catch {
      setExplainErr(true)
    } finally {
      setExplaining(false)
    }
  }

  // 灯箱关闭时重置讲解状态
  function handleOpenChange(open: boolean) {
    setZoom(open)
    if (!open) {
      setExplanation(null)
      setExplainErr(false)
      setExplaining(false)
    }
  }

  return (
    <figure className="bio-figure my-7" id={`figure-${fig.num}`}>
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

      {/* 灯箱放大（含 AI 看图讲解） */}
      <Dialog open={zoom} onOpenChange={handleOpenChange}>
        <DialogContent className="max-h-[92vh] max-w-4xl overflow-y-auto p-0 sm:rounded-xl">
          <div className="sr-only">
            <DialogTitle>{`图 ${fig.num}`}</DialogTitle>
            <DialogDescription>{fig.caption}</DialogDescription>
          </div>
          <div className="bg-[#faf9f4] dark:bg-[#111a16]">
            <img
              src={fig.src}
              alt={fig.caption}
              className="mx-auto block max-h-[62vh] w-auto max-w-full object-contain"
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

            {/* AI 看图讲解 */}
            <div className="mt-3 border-t pt-3">
              {!explanation && !explaining && !explainErr && (
                <button
                  type="button"
                  onClick={explainFigure}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  AI 看图讲解
                  <span className="font-normal text-muted-foreground">（视觉模型读图）</span>
                </button>
              )}
              {explaining && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground" aria-live="polite">
                  <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-primary/30 border-t-primary" aria-hidden />
                  正在看图，整理讲解要点…
                </div>
              )}
              {explainErr && (
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-destructive">讲解生成失败，请重试</span>
                  <button
                    type="button"
                    onClick={explainFigure}
                    className="inline-flex items-center gap-1 rounded-md border px-2 py-1 font-semibold transition-colors hover:bg-accent"
                  >
                    <RotateCcw className="h-3 w-3" aria-hidden />
                    重试
                  </button>
                </div>
              )}
              {explanation && (
                <div className="rounded-lg border-l-2 border-primary/40 bg-primary/[0.04] px-4 py-3">
                  <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                    <Sparkles className="h-3 w-3" aria-hidden />
                    AI 助教 · 看图讲解
                    <span className="font-normal text-muted-foreground">
                      （视觉模型生成，请注意核对）
                    </span>
                  </div>
                  <div className="bio-md text-sm leading-relaxed">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{explanation}</ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </figure>
  )
}

/** 教材正文 Markdown 渲染器（GFM 表格 + 配图穿插）。
 *  memo 化：figures/sectionCtx 引用稳定时（reader-view 已 useMemo），
 *  阅读进度条等无关 state 更新不再触发正文重渲染，
 *  保障插图跳转高亮不被 DOM 重建打断 */
export const Markdown = memo(function Markdown({
  content,
  className,
  figures,
  sectionCtx,
}: {
  content: string
  className?: string
  /** 小节配图（可选，自动按编号穿插进正文） */
  figures?: FigureItem[]
  /** 阅读上下文（供插图 AI 讲解携带教学位置） */
  sectionCtx?: FigureSectionCtx
}) {
  const marked = useMemo(
    () => interleaveFigures(content, figures?.length ?? 0),
    [content, figures]
  )

  return (
    <div className={cn('bio-md', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeUnwrapImages]}
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
              if (fig) return <BioFigure fig={fig} sectionCtx={sectionCtx} />
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
})

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
