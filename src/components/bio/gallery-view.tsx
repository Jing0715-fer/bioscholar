'use client'

import { useMemo, useState } from 'react'
import { getIllustrations } from '@/data/illustrations'
import { subjects, getSubject } from '@/data/biology'
import { figureNumber } from '@/lib/figure-utils'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import { useAppStore } from '@/lib/store'
import type { SubjectId } from '@/lib/types'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import {
  BookOpenText,
  FlaskConical,
  Images,
  Maximize2,
  Microscope,
  PenTool,
  Route,
  Wand2,
  X,
} from 'lucide-react'

// ============================================================
// 数据聚合与类型
// ============================================================

/** 配图来源分类 */
type SourceType = 'ccd' | 'pdb' | 'commons' | 'drawn' | 'ai'

/** 画廊条目（插图 + 归属信息） */
interface GalleryItem {
  src: string
  caption: string
  credit?: string
  /** 教材图号（图 {章}-{节}-{序}） */
  num: string
  subjectId: SubjectId
  chapterId: string
  chapterNumber: number
  chapterTitle: string
  sectionId: string
  sectionTitle: string
  source: SourceType
}

/** 按来源路径判定配图来源体系 */
function sourceTypeOf(src: string): SourceType {
  if (src.includes('/structures/')) return 'ccd'
  if (src.includes('/pdb/')) return 'pdb'
  if (src.includes('/commons/')) return 'commons'
  if (src.includes('/drawn/')) return 'drawn'
  return 'ai'
}

const SOURCE_META: Record<
  SourceType,
  { label: string; full: string; icon: typeof FlaskConical; badge: string; accent: string }
> = {
  ccd: {
    label: '化学结构式',
    full: 'RCSB 化学组分字典（CCD）',
    icon: FlaskConical,
    badge: 'border-emerald-300/60 bg-emerald-50 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-400',
    accent: 'bg-emerald-500',
  },
  pdb: {
    label: '实验结构',
    full: 'RCSB Protein Data Bank',
    icon: Microscope,
    badge: 'border-teal-300/60 bg-teal-50 text-teal-700 dark:border-teal-500/40 dark:bg-teal-500/10 dark:text-teal-400',
    accent: 'bg-teal-500',
  },
  commons: {
    label: '通路过程图',
    full: 'Wikimedia Commons',
    icon: Route,
    badge: 'border-amber-300/60 bg-amber-50 text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-400',
    accent: 'bg-amber-500',
  },
  drawn: {
    label: '自绘矢量图',
    full: '依据教材参数代码绘制（非 AI 生成）',
    icon: PenTool,
    badge:
      'border-violet-300/60 bg-violet-50 text-violet-700 dark:border-violet-500/40 dark:bg-violet-500/10 dark:text-violet-400',
    accent: 'bg-violet-500',
  },
  ai: {
    label: '机制示意',
    full: 'AI 绘制示意图',
    icon: Wand2,
    badge: 'border-border bg-muted text-muted-foreground',
    accent: 'bg-muted-foreground/30',
  },
}

type SourceFilter = 'all' | SourceType
type SubjectFilter = 'all' | SubjectId

/** 聚合全部插图并反查学科/章节/小节元信息 */
function buildGallery(): GalleryItem[] {
  const items: GalleryItem[] = []
  for (const subject of subjects) {
    for (const chapter of subject.chapters) {
      for (const section of chapter.sections) {
        const figs = getIllustrations(section.id)
        if (!figs?.length) continue
        figs.forEach((fig, i) => {
          items.push({
            ...fig,
            num: figureNumber(chapter.number, section.id, i),
            subjectId: subject.id,
            chapterId: chapter.id,
            chapterNumber: chapter.number,
            chapterTitle: chapter.title,
            sectionId: section.id,
            sectionTitle: section.title,
            source: sourceTypeOf(fig.src),
          })
        })
      }
    }
  }
  return items
}

// ============================================================
// 子组件
// ============================================================

/** 筛选 tab（下边线式，与术语词典一致） */
function GalleryTab({
  active,
  onClick,
  activeCls,
  label,
  children,
}: {
  active: boolean
  onClick: () => void
  activeCls: string
  label: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={label}
      className={cn(
        'inline-flex h-9 items-center gap-1.5 border-b-2 px-0.5 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
        active
          ? activeCls
          : 'border-b-transparent text-muted-foreground hover:border-border hover:text-foreground'
      )}
    >
      {children}
    </button>
  )
}

/** 图库卡片 */
function FigureCard({
  item,
  onZoom,
}: {
  item: GalleryItem
  onZoom: (item: GalleryItem) => void
}) {
  const theme = getSubjectTheme(item.subjectId)
  const meta = SOURCE_META[item.source]
  return (
    <figure className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-shadow duration-300 hover:shadow-md">
      {/* 来源色顶边条（悬停时增亮拉宽） */}
      <span
        className={cn(
          'absolute inset-x-0 top-0 z-10 h-[3px] opacity-60 transition-all duration-300 group-hover:h-1 group-hover:opacity-100',
          meta.accent
        )}
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={() => onZoom(item)}
        aria-label={`放大查看 图${item.num}：${item.sectionTitle}`}
        className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden border-b bg-[#faf9f4] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset dark:bg-[#111a16]"
      >
        <img
          src={item.src}
          alt={`图 ${item.num}：${item.caption}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-2.5 top-2.5 rounded-md bg-background/85 px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-wide text-foreground/80 shadow-sm backdrop-blur-sm">
          图 {item.num}
        </span>
        <span className="pointer-events-none absolute bottom-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
          <Maximize2 className="h-3 w-3" aria-hidden />
        </span>
      </button>
      <figcaption className="flex flex-1 flex-col gap-2 p-3.5">
        <div className="flex items-center gap-1.5">
          <theme.icon className={cn('h-3.5 w-3.5 shrink-0', theme.classes.text)} aria-hidden />
          <span className="truncate text-xs font-semibold leading-tight text-foreground">
            {item.sectionTitle}
          </span>
        </div>
        <p
          className="line-clamp-3 text-[11px] leading-relaxed text-muted-foreground"
          title={item.caption}
        >
          {item.caption}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-0.5">
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[10px] font-medium',
              meta.badge
            )}
            title={meta.full}
          >
            <meta.icon className="h-3 w-3" aria-hidden />
            {meta.label}
          </span>
          <span className="shrink-0 font-mono text-[10px] text-muted-foreground/70">
            第 {item.chapterNumber} 章
          </span>
        </div>
      </figcaption>
    </figure>
  )
}

// ============================================================
// 图库主视图
// ============================================================

export function GalleryView() {
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>('all')
  const [subjectFilter, setSubjectFilter] = useState<SubjectFilter>('all')
  const [zoomed, setZoomed] = useState<GalleryItem | null>(null)

  const openReader = useAppStore((s) => s.openReader)

  /** 全量条目（静态数据，一次聚合） */
  const allItems = useMemo(() => buildGallery(), [])

  /** 来源统计 */
  const sourceCounts = useMemo(() => {
    const map = new Map<SourceType, number>()
    for (const it of allItems) map.set(it.source, (map.get(it.source) ?? 0) + 1)
    return map
  }, [allItems])

  /** 学科统计（受来源筛选影响） */
  const subjectCounts = useMemo(() => {
    const map = new Map<SubjectId, number>()
    for (const it of allItems) {
      if (sourceFilter !== 'all' && it.source !== sourceFilter) continue
      map.set(it.subjectId, (map.get(it.subjectId) ?? 0) + 1)
    }
    return map
  }, [allItems, sourceFilter])

  /** 筛选 + 按学科→章节排序 */
  const filtered = useMemo(
    () =>
      allItems.filter(
        (it) =>
          (sourceFilter === 'all' || it.source === sourceFilter) &&
          (subjectFilter === 'all' || it.subjectId === subjectFilter)
      ),
    [allItems, sourceFilter, subjectFilter]
  )

  /** 按学科分组的展示结构 */
  const grouped = useMemo(() => {
    const map = new Map<SubjectId, GalleryItem[]>()
    for (const it of filtered) {
      const arr = map.get(it.subjectId)
      if (arr) arr.push(it)
      else map.set(it.subjectId, [it])
    }
    // 按学科在教材体系中的固定顺序排列
    return subjects
      .map((s) => ({ subject: s, items: map.get(s.id) ?? [] }))
      .filter((g) => g.items.length > 0)
  }, [filtered])

  const realCount = allItems.length - (sourceCounts.get('ai') ?? 0)
  const realPct = Math.round((realCount / allItems.length) * 100)

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      {/* 头部 */}
      <header>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="bio-eyebrow text-muted-foreground">Figure Gallery · 教材图库</p>
            <h1 className="mt-2 flex items-center gap-2.5 font-serif text-xl font-bold tracking-tight sm:text-2xl">
              教材图库
              <Images className="h-5 w-5 text-primary/70" aria-hidden />
            </h1>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {allItems.length} 张教材插图 · {realCount} 张（{realPct}%）来自真实科学数据库
            </p>
          </div>
          {/* 来源统计卡 */}
          <div className="grid grid-cols-5 gap-2" role="group" aria-label="配图来源统计">
            {(['ccd', 'pdb', 'commons', 'drawn', 'ai'] as const).map((k) => {
              const meta = SOURCE_META[k]
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setSourceFilter(sourceFilter === k ? 'all' : k)}
                  aria-pressed={sourceFilter === k}
                  title={`筛选：${meta.full}`}
                  className={cn(
                    'flex min-w-[72px] flex-col items-center gap-0.5 rounded-lg border px-2.5 py-2 text-center transition-colors',
                    sourceFilter === k
                      ? meta.badge
                      : 'bg-card hover:bg-accent'
                  )}
                >
                  <meta.icon className="h-4 w-4" aria-hidden />
                  <span className="text-sm font-bold tabular-nums leading-none">
                    {sourceCounts.get(k) ?? 0}
                  </span>
                  <span className="text-[10px] leading-tight opacity-80">{meta.label}</span>
                </button>
              )
            })}
          </div>
        </div>
        <div className="bio-rule mt-4" aria-hidden />
      </header>

      {/* 学科筛选 */}
      <div
        className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1"
        role="group"
        aria-label="按学科筛选配图"
      >
        <GalleryTab
          active={subjectFilter === 'all'}
          onClick={() => setSubjectFilter('all')}
          activeCls="border-b-primary text-primary"
          label="显示全部学科配图"
        >
          全部
          <span className="text-xs tabular-nums opacity-70">{filtered.length}</span>
        </GalleryTab>
        {subjects.map((s) => {
          const t = getSubjectTheme(s.id)
          const activeCls =
            s.id === 'biochemistry'
              ? 'border-b-amber-500 text-amber-700 dark:border-b-amber-400 dark:text-amber-400'
              : s.id === 'molecular-biology'
                ? 'border-b-violet-500 text-violet-700 dark:border-b-violet-400 dark:text-violet-400'
                : s.id === 'cell-biology'
                  ? 'border-b-rose-500 text-rose-700 dark:border-b-rose-400 dark:text-rose-400'
                  : 'border-b-cyan-500 text-cyan-700 dark:border-b-cyan-400 dark:text-cyan-400'
          return (
            <GalleryTab
              key={s.id}
              active={subjectFilter === s.id}
              onClick={() => setSubjectFilter(s.id)}
              activeCls={activeCls}
              label={`筛选${s.name}配图`}
            >
              <t.icon className="h-3.5 w-3.5" aria-hidden />
              {s.name}
              <span className="text-xs tabular-nums opacity-70">
                {subjectCounts.get(s.id) ?? 0}
              </span>
            </GalleryTab>
          )
        })}
        {(sourceFilter !== 'all' || subjectFilter !== 'all') && (
          <button
            type="button"
            onClick={() => {
              setSourceFilter('all')
              setSubjectFilter('all')
            }}
            className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-3 w-3" aria-hidden />
            清除筛选
          </button>
        )}
      </div>

      {/* 结果计数 */}
      <p className="mt-4 text-xs tabular-nums text-muted-foreground" aria-live="polite">
        {sourceFilter !== 'all' || subjectFilter !== 'all'
          ? `匹配 ${filtered.length} / ${allItems.length} 张插图`
          : `共 ${filtered.length} 张插图，按学科排列`}
      </p>

      {/* 按学科分组展示 */}
      {filtered.length === 0 ? (
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed text-muted-foreground/60">
            <Images className="h-8 w-8" aria-hidden />
          </span>
          <p className="font-semibold">当前筛选下暂无插图</p>
          <p className="text-sm text-muted-foreground">试试切换学科或来源类型</p>
        </div>
      ) : (
        <div className="mt-3 space-y-8 pb-4">
          {grouped.map(({ subject, items }) => {
            const theme = getSubjectTheme(subject.id)
            return (
              <section key={subject.id} aria-label={`${subject.name}配图`}>
                <div className="flex flex-wrap items-center gap-2.5">
                  <theme.icon className={cn('h-4 w-4', theme.classes.text)} aria-hidden />
                  <h2 className="font-serif text-base font-bold">{subject.name}</h2>
                  <span className="rounded-md border bg-muted/50 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {subject.englishName}
                  </span>
                  <span className="text-[10px] tabular-nums text-muted-foreground">
                    {items.length} 张
                  </span>
                  <div className="bio-rule h-px flex-1" aria-hidden />
                </div>
                <div className="mt-3.5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((item) => (
                    <FigureCard key={item.sectionId + item.num} item={item} onZoom={setZoomed} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      )}

      {/* 灯箱：大图 + 完整图注 + 跳转阅读 */}
      <Dialog open={!!zoomed} onOpenChange={(o) => !o && setZoomed(null)}>
        <DialogContent className="max-w-4xl overflow-hidden p-0 sm:rounded-xl">
          {zoomed && (
            <>
              <div className="sr-only">
                <DialogTitle>{`图 ${zoomed.num} · ${zoomed.sectionTitle}`}</DialogTitle>
                <DialogDescription>{zoomed.caption}</DialogDescription>
              </div>
              <div className="max-h-[62vh] overflow-y-auto bg-[#faf9f4] dark:bg-[#111a16]">
                <img
                  src={zoomed.src}
                  alt={`图 ${zoomed.num}：${zoomed.caption}`}
                  className="mx-auto block w-full object-contain"
                />
              </div>
              <div className="border-t bg-background px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-primary">图 {zoomed.num}</span>
                  <span className="text-xs text-muted-foreground">
                    {getSubject(zoomed.subjectId)?.name} · 第 {zoomed.chapterNumber} 章 ·{' '}
                    {zoomed.chapterTitle}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{zoomed.caption}</p>
                {zoomed.credit && (
                  <p className="mt-1.5 text-xs text-muted-foreground">{zoomed.credit}</p>
                )}
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-medium',
                      SOURCE_META[zoomed.source].badge
                    )}
                  >
                    <span aria-hidden>来源</span>
                    {SOURCE_META[zoomed.source].full}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const { subjectId, chapterId, sectionId } = zoomed
                      setZoomed(null)
                      openReader(subjectId, chapterId, sectionId)
                    }}
                    className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <BookOpenText className="h-3.5 w-3.5" aria-hidden />
                    阅读本节「{zoomed.sectionTitle}」
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
