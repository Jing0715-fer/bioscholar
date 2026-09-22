'use client'

import { useMemo, useState } from 'react'
import { glossary } from '@/data/glossary'
import { subjects, getSubject } from '@/data/biology'
import { termStructures, termStructureSrc } from '@/data/term-structures'
import type { GlossaryTerm, SubjectId } from '@/lib/types'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { ExternalLink, FlaskConical, LayoutGrid, Layers, Maximize2, Search, SearchX, X } from 'lucide-react'

// ============================================================
// 常量
// ============================================================

type SubjectFilter = 'all' | SubjectId

/** A–Z 字母表（首字母索引条） */
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

/** 取英文术语首字母（大写；非拉丁开头返回 null） */
function firstLetter(english: string): string | null {
  const c = english.trim().charAt(0).toUpperCase()
  return /^[A-Z]$/.test(c) ? c : null
}

/** 学科左边框色（卡片左侧 4px 色条） */
const SUBJECT_LEFT_BORDER: Record<SubjectId, string> = {
  biochemistry: 'border-l-amber-500',
  'molecular-biology': 'border-l-violet-500',
  'cell-biology': 'border-l-rose-500',
  biophysics: 'border-l-cyan-500',
  microbiology: 'border-l-emerald-500',
  bioinformatics: 'border-l-lime-500',
  neurobiology: 'border-l-teal-500',
  immunology: 'border-l-fuchsia-500',
  virology: 'border-l-orange-500',
  'structural-biology': 'border-l-purple-500',
  'x-ray-crystallography': 'border-l-red-500',
  'electron-microscopy': 'border-l-stone-500',
}

/** 学科筛选下边线激活态（学科色文字 + 下边线，不用全色块） */
const SUBJECT_TAB_ACTIVE: Record<SubjectId, string> = {
  biochemistry: 'border-b-amber-500 text-amber-700 dark:border-b-amber-400 dark:text-amber-400',
  'molecular-biology':
    'border-b-violet-500 text-violet-700 dark:border-b-violet-400 dark:text-violet-400',
  'cell-biology': 'border-b-rose-500 text-rose-700 dark:border-b-rose-400 dark:text-rose-400',
  biophysics: 'border-b-cyan-500 text-cyan-700 dark:border-b-cyan-400 dark:text-cyan-400',
  microbiology:
    'border-b-emerald-500 text-emerald-700 dark:border-b-emerald-400 dark:text-emerald-400',
  bioinformatics:
    'data-[state=active]:bg-lime-500/10 dark:data-[state=active]:bg-lime-500/15 data-[state=active]:text-lime-700 dark:data-[state=active]:text-lime-400 data-[state=active]:shadow-none',
  neurobiology:
    'data-[state=active]:bg-teal-500/10 dark:data-[state=active]:bg-teal-500/15 data-[state=active]:text-teal-700 dark:data-[state=active]:text-teal-400 data-[state=active]:shadow-none',
  immunology:
    'data-[state=active]:bg-fuchsia-500/10 dark:data-[state=active]:bg-fuchsia-500/15 data-[state=active]:text-fuchsia-700 dark:data-[state=active]:text-fuchsia-400 data-[state=active]:shadow-none',
  virology:
    'data-[state=active]:bg-orange-500/10 dark:data-[state=active]:bg-orange-500/15 data-[state=active]:text-orange-700 dark:data-[state=active]:text-orange-400 data-[state=active]:shadow-none',
  'structural-biology':
    'data-[state=active]:bg-purple-500/10 dark:data-[state=active]:bg-purple-500/15 data-[state=active]:text-purple-700 dark:data-[state=active]:text-purple-400 data-[state=active]:shadow-none',
  'x-ray-crystallography':
    'data-[state=active]:bg-red-500/10 dark:data-[state=active]:bg-red-500/15 data-[state=active]:text-red-700 dark:data-[state=active]:text-red-400 data-[state=active]:shadow-none',
  'electron-microscopy':
    'data-[state=active]:bg-stone-500/10 dark:data-[state=active]:bg-stone-500/15 data-[state=active]:text-stone-700 dark:data-[state=active]:text-stone-300 data-[state=active]:shadow-none',
}

// ============================================================
// 子组件
// ============================================================

/** A-Z 首字母索引格 */
function LetterCell({
  letter,
  count,
  active,
  disabled,
  onClick,
}: {
  letter: string
  count: number
  active: boolean
  /** 当前范围内无词条（置灰不可点） */
  disabled: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
      aria-label={`${letter} 开头的术语（${count} 条）`}
      className={cn(
        'inline-flex h-7 min-w-7 items-center justify-center gap-0.5 rounded-md border px-1 font-mono text-xs font-semibold tabular-nums transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
        active
          ? 'border-primary/60 bg-primary/10 text-primary'
          : disabled
            ? 'cursor-default border-transparent text-muted-foreground/30'
            : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
      )}
    >
      {letter}
      {count > 0 && <span className="text-[9px] font-normal opacity-60">{count}</span>}
    </button>
  )
}

function FilterTab({
  active,
  onClick,
  activeCls,
  children,
  label,
}: {
  active: boolean
  onClick: () => void
  /** 激活态附加样式（学科色下边线 + 文字色 / 主色） */
  activeCls: string
  children: React.ReactNode
  label: string
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

/** 分类筛选 chip：小号圆角胶囊，激活态主色描边 */
function CategoryChip({
  active,
  onClick,
  children,
  label,
  dimmed,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
  label: string
  /** 当前学科范围内无词条的分类（置灰仍可点击查看空态） */
  dimmed?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={label}
      className={cn(
        'inline-flex h-6.5 items-center gap-1 rounded-full border px-2.5 text-[11px] font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
        active
          ? 'border-primary/60 bg-primary/10 text-primary'
          : dimmed
            ? 'border-border/60 text-muted-foreground/40 hover:text-muted-foreground'
            : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
      )}
    >
      {children}
    </button>
  )
}

function TermCard({ term }: { term: GlossaryTerm }) {
  const theme = getSubjectTheme(term.subjectId)
  const subjectName = getSubject(term.subjectId)?.name ?? ''
  const struct = termStructures[term.id]
  const [zoom, setZoom] = useState(false)
  return (
    <Card
      className={cn(
        'group border-l-4 transition-shadow hover:shadow-sm',
        SUBJECT_LEFT_BORDER[term.subjectId]
      )}
    >
      <CardContent className="p-4">
        <div className="flex gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <h3 className="text-sm font-semibold leading-tight transition-colors group-hover:text-primary sm:text-base">{term.term}</h3>
              {term.abbreviation && (
                <Badge variant="outline" className="px-1.5 font-mono text-[10px] font-bold">
                  {term.abbreviation}
                </Badge>
              )}
            </div>
            <p
              className="mt-0.5 truncate font-serif text-xs italic text-muted-foreground"
              title={term.english}
            >
              {term.english}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5">
              <span
                className={cn('inline-flex items-center gap-1 text-[11px] font-medium', theme.classes.text)}
              >
                <theme.icon className="h-3 w-3" aria-hidden />
                {subjectName}
              </span>
              <span className="text-[11px] opacity-30" aria-hidden>
                ·
              </span>
              <Badge variant="outline" className="text-[10px] text-muted-foreground">
                {term.category}
              </Badge>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {term.definition}
            </p>
          </div>
          {/* RCSB CCD 真实结构式缩略图 */}
          {struct && (
            <button
              type="button"
              onClick={() => setZoom(true)}
              aria-label={`查看「${term.term}」的分子结构式`}
              title="RCSB CCD 真实结构式，点击放大"
              className="group/struct relative h-[92px] w-[92px] shrink-0 cursor-zoom-in self-start overflow-hidden rounded-lg border bg-[#faf9f4] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring dark:bg-[#111a16]"
            >
              <img
                src={termStructureSrc(term.id) ?? undefined}
                alt={`${term.term}的分子结构式（RCSB CCD ${struct.code}）`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain p-1.5 transition-transform duration-300 group-hover/struct:scale-105"
              />
              <span className="absolute bottom-1 right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-background/85 p-0.5 text-foreground/70 opacity-0 shadow-sm transition-opacity group-hover/struct:opacity-100">
                <Maximize2 className="h-2.5 w-2.5" aria-hidden />
              </span>
            </button>
          )}
        </div>
      </CardContent>

      {/* 结构式灯箱 */}
      <Dialog open={zoom} onOpenChange={setZoom}>
        <DialogContent className="max-w-lg overflow-hidden p-0 sm:rounded-xl">
          <div className="sr-only">
            <DialogTitle>{`${term.term} · 分子结构式`}</DialogTitle>
            <DialogDescription>{`RCSB CCD ${struct?.code}：${struct?.en}`}</DialogDescription>
          </div>
          <div className="flex items-center justify-center bg-[#faf9f4] px-6 py-6 dark:bg-[#111a16]">
            <img
              src={termStructureSrc(term.id) ?? undefined}
              alt={`${term.term}的分子结构式`}
              className="max-h-[46vh] w-auto max-w-full object-contain"
            />
          </div>
          <div className="border-t bg-background px-5 py-4">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-serif text-sm font-bold">{term.term}</h4>
              <span className="font-mono text-[10px] text-muted-foreground">CCD {struct?.code}</span>
            </div>
            <dl className="mt-2 space-y-1 text-xs text-muted-foreground">
              <div className="flex gap-2">
                <dt className="shrink-0 font-medium">英文名</dt>
                <dd className="truncate" title={struct?.en}>
                  {struct?.en}
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 font-medium">分子式</dt>
                <dd className="font-mono">{struct?.formula}</dd>
              </div>
            </dl>
            <a
              href={`https://www.rcsb.org/ligand/${struct?.code}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              在 RCSB 查看该分子
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

// ============================================================
// 术语词典主视图
// ============================================================

export function GlossaryView() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<SubjectFilter>('all')
  const [grouped, setGrouped] = useState(false)
  /** 分类筛选（与学科筛选叠加，'all' 为不筛） */
  const [category, setCategory] = useState<string>('all')
  /** 英文首字母筛选（A–Z，null 为不筛） */
  const [letter, setLetter] = useState<string | null>(null)

  /** 各学科词条数 */
  const subjectCounts = useMemo(() => {
    const map = new Map<SubjectId, number>()
    for (const t of glossary) {
      map.set(t.subjectId, (map.get(t.subjectId) ?? 0) + 1)
    }
    return map
  }, [])

  /** 全部分类及计数（按词条数降序，仅在需要时计算） */
  const categories = useMemo(() => {
    const map = new Map<string, number>()
    for (const t of glossary) {
      map.set(t.category, (map.get(t.category) ?? 0) + 1)
    }
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1])
  }, [])

  /** 当前学科筛选下各分类的实际词条数（chip 上的计数随学科联动） */
  const categoryCountsInScope = useMemo(() => {
    const map = new Map<string, number>()
    for (const t of glossary) {
      if (filter !== 'all' && t.subjectId !== filter) continue
      map.set(t.category, (map.get(t.category) ?? 0) + 1)
    }
    return map
  }, [filter])

  /** 当前学科 + 分类范围内各英文字母的词条数（首字母索引条计数） */
  const letterCountsInScope = useMemo(() => {
    const map = new Map<string, number>()
    for (const t of glossary) {
      if (filter !== 'all' && t.subjectId !== filter) continue
      if (category !== 'all' && t.category !== category) continue
      const c = firstLetter(t.english)
      if (c) map.set(c, (map.get(c) ?? 0) + 1)
    }
    return map
  }, [filter, category])

  /** 搜索 + 学科 + 分类 + 首字母过滤 */
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return glossary.filter((t) => {
      if (filter !== 'all' && t.subjectId !== filter) return false
      if (category !== 'all' && t.category !== category) return false
      if (letter && firstLetter(t.english) !== letter) return false
      if (!q) return true
      return (
        t.term.toLowerCase().includes(q) ||
        t.english.toLowerCase().includes(q) ||
        (t.abbreviation?.toLowerCase().includes(q) ?? false)
      )
    })
  }, [query, filter, category, letter])

  /** 按类别分组（仅在开启分组时计算） */
  const groups = useMemo(() => {
    if (!grouped) return []
    const map = new Map<string, GlossaryTerm[]>()
    for (const t of filtered) {
      const arr = map.get(t.category)
      if (arr) arr.push(t)
      else map.set(t.category, [t])
    }
    return Array.from(map.entries()).sort((a, b) => b[1].length - a[1].length)
  }, [filtered, grouped])

  const hasQuery = query.trim().length > 0

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      {/* 顶部：编辑式学术头部 */}
      <header>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="bio-eyebrow text-muted-foreground">Glossary · 术语检索</p>
            <h1 className="mt-2 font-serif text-xl font-bold tracking-tight sm:text-2xl">
              术语词典
            </h1>
            <p className="mt-1.5 text-sm text-muted-foreground">
              收录 {glossary.length} 条跨学科专业术语 · {Object.keys(termStructures).length} 个分子配有
              RCSB CCD 真实结构式 · 支持中英文与缩写检索
            </p>
          </div>
          <Button
            variant={grouped ? 'default' : 'outline'}
            size="sm"
            onClick={() => setGrouped((g) => !g)}
            aria-pressed={grouped}
          >
            {grouped ? <Layers className="mr-1 h-4 w-4" /> : <LayoutGrid className="mr-1 h-4 w-4" />}
            {grouped ? '按类别分组中' : '按类别分组'}
          </Button>
        </div>
        <div className="bio-rule mt-4" aria-hidden />
      </header>

      {/* 搜索框 */}
      <div className="relative mt-4">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜索术语的中文、英文或缩写，如「ATP」「糖酵解」「apoptosis」…"
          className="h-11 pl-9 pr-9"
          aria-label="搜索术语"
          inputMode="search"
        />
        {hasQuery && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="清空搜索"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* 学科筛选（下边线式学术 tabs） */}
      <div
        className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1"
        role="group"
        aria-label="按学科筛选术语"
      >
        <FilterTab
          active={filter === 'all'}
          onClick={() => setFilter('all')}
          activeCls="border-b-primary text-primary"
          label="显示全部学科术语"
        >
          全部
          <span className="text-xs tabular-nums opacity-70">{glossary.length}</span>
        </FilterTab>
        {subjects.map((s) => {
          const t = getSubjectTheme(s.id)
          return (
            <FilterTab
              key={s.id}
              active={filter === s.id}
              onClick={() => setFilter(s.id)}
              activeCls={SUBJECT_TAB_ACTIVE[s.id]}
              label={`筛选${s.name}术语`}
            >
              <t.icon className="h-3.5 w-3.5" aria-hidden />
              {s.name}
              <span className="text-xs tabular-nums opacity-70">
                {subjectCounts.get(s.id) ?? 0}
              </span>
            </FilterTab>
          )
        })}
      </div>

      {/* 分类筛选 chips（随学科筛选联动计数） */}
      <div
        className="bio-scroll mt-3 flex flex-wrap items-center gap-1.5"
        role="group"
        aria-label="按分类筛选术语"
      >
        <CategoryChip
          active={category === 'all'}
          onClick={() => setCategory('all')}
          label="全部分类"
        >
          全部分类
          <span className="tabular-nums opacity-70">{categoryCountsInScope.size ? Array.from(categoryCountsInScope.values()).reduce((a, b) => a + b, 0) : glossary.length}</span>
        </CategoryChip>
        {categories.map(([cat, total]) => {
          const scoped = categoryCountsInScope.get(cat) ?? 0
          return (
            <CategoryChip
              key={cat}
              active={category === cat}
              onClick={() => setCategory(category === cat ? 'all' : cat)}
              label={`筛选${cat}类术语（${scoped} 条）`}
              dimmed={scoped === 0 && category !== cat}
            >
              {cat}
              <span className="tabular-nums opacity-70">{scoped}</span>
            </CategoryChip>
          )
        })}
        {category !== 'all' && (
          <button
            type="button"
            onClick={() => setCategory('all')}
            className="inline-flex h-6.5 items-center gap-1 rounded-full border border-dashed px-2 text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="清除分类筛选"
          >
            <X className="h-3 w-3" aria-hidden />
            清除
          </button>
        )}
      </div>

      {/* 首字母索引条（A–Z，随学科/分类联动计数） */}
      <div
        className="bio-scroll mt-3 flex flex-wrap items-center gap-1"
        role="group"
        aria-label="按英文首字母筛选术语"
      >
        <span className="mr-1 inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
          <span className="font-mono font-semibold text-primary" aria-hidden>
            A–Z
          </span>
          首字母
        </span>
        {LETTERS.map((c) => {
          const n = letterCountsInScope.get(c) ?? 0
          return (
            <LetterCell
              key={c}
              letter={c}
              count={n}
              active={letter === c}
              disabled={n === 0 && letter !== c}
              onClick={() => setLetter(letter === c ? null : c)}
            />
          )
        })}
        {letter && (
          <button
            type="button"
            onClick={() => setLetter(null)}
            className="ml-1 inline-flex h-6.5 items-center gap-1 rounded-full border border-dashed px-2 text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="清除首字母筛选"
          >
            <X className="h-3 w-3" aria-hidden />
            清除
          </button>
        )}
      </div>

      {/* 结果计数 */}
      <p className="mt-4 text-xs tabular-nums text-muted-foreground" aria-live="polite">
        {hasQuery || filter !== 'all' || category !== 'all' || letter !== null
          ? `匹配 ${filtered.length} / ${glossary.length} 条术语`
          : `共 ${filtered.length} 条术语`}
      </p>

      {/* 词条网格 / 分组 */}
      {filtered.length === 0 ? (
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed text-muted-foreground/60">
            <SearchX className="h-8 w-8" />
          </span>
          <div>
            <p className="font-semibold">未找到匹配的术语</p>
            <p className="mt-1 text-sm text-muted-foreground">
              试试其他关键词，或切换学科 / 清除筛选条件
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setQuery('')
              setFilter('all')
              setCategory('all')
              setLetter(null)
            }}
          >
            清除搜索与筛选
          </Button>
        </div>
      ) : grouped ? (
        <div className="mt-3 space-y-6">
          {groups.map(([groupCat, terms]) => (
            <section key={groupCat} aria-label={`${groupCat} 类术语`}>
              <div className="flex items-center gap-2.5">
                <h2 className="font-serif text-sm font-bold">{groupCat}</h2>
                <span className="text-[10px] tabular-nums text-muted-foreground">
                  {terms.length} 条
                </span>
                <div className="bio-rule h-px flex-1" aria-hidden />
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {terms.map((term) => (
                  <TermCard key={term.id} term={term} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((term) => (
            <TermCard key={term.id} term={term} />
          ))}
        </div>
      )}
    </div>
  )
}
