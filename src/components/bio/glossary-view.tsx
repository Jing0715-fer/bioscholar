'use client'

import { useMemo, useState } from 'react'
import { glossary } from '@/data/glossary'
import { subjects, getSubject } from '@/data/biology'
import type { GlossaryTerm, SubjectId } from '@/lib/types'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { LayoutGrid, Layers, Search, SearchX, X } from 'lucide-react'

// ============================================================
// 常量
// ============================================================

type SubjectFilter = 'all' | SubjectId

/** 学科左边框色（卡片左侧 4px 色条） */
const SUBJECT_LEFT_BORDER: Record<SubjectId, string> = {
  biochemistry: 'border-l-amber-500',
  'molecular-biology': 'border-l-violet-500',
  'cell-biology': 'border-l-rose-500',
  biophysics: 'border-l-cyan-500',
}

/** 学科筛选下边线激活态（学科色文字 + 下边线，不用全色块） */
const SUBJECT_TAB_ACTIVE: Record<SubjectId, string> = {
  biochemistry: 'border-b-amber-500 text-amber-700 dark:border-b-amber-400 dark:text-amber-400',
  'molecular-biology':
    'border-b-violet-500 text-violet-700 dark:border-b-violet-400 dark:text-violet-400',
  'cell-biology': 'border-b-rose-500 text-rose-700 dark:border-b-rose-400 dark:text-rose-400',
  biophysics: 'border-b-cyan-500 text-cyan-700 dark:border-b-cyan-400 dark:text-cyan-400',
}

// ============================================================
// 子组件
// ============================================================

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

function TermCard({ term }: { term: GlossaryTerm }) {
  const theme = getSubjectTheme(term.subjectId)
  const subjectName = getSubject(term.subjectId)?.name ?? ''
  return (
    <Card
      className={cn(
        'group border-l-4 transition-shadow hover:shadow-sm',
        SUBJECT_LEFT_BORDER[term.subjectId]
      )}
    >
      <CardContent className="p-4">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h3 className="text-sm font-semibold leading-tight sm:text-base">{term.term}</h3>
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
      </CardContent>
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

  /** 各学科词条数 */
  const subjectCounts = useMemo(() => {
    const map = new Map<SubjectId, number>()
    for (const t of glossary) {
      map.set(t.subjectId, (map.get(t.subjectId) ?? 0) + 1)
    }
    return map
  }, [])

  /** 搜索 + 学科过滤 */
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return glossary.filter((t) => {
      if (filter !== 'all' && t.subjectId !== filter) return false
      if (!q) return true
      return (
        t.term.toLowerCase().includes(q) ||
        t.english.toLowerCase().includes(q) ||
        (t.abbreviation?.toLowerCase().includes(q) ?? false)
      )
    })
  }, [query, filter])

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
              收录 {glossary.length} 条跨学科专业术语 · 支持中英文与缩写检索
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

      {/* 结果计数 */}
      <p className="mt-4 text-xs tabular-nums text-muted-foreground" aria-live="polite">
        {hasQuery || filter !== 'all'
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
            }}
          >
            清除搜索与筛选
          </Button>
        </div>
      ) : grouped ? (
        <div className="mt-3 space-y-6">
          {groups.map(([category, terms]) => (
            <section key={category} aria-label={`${category} 类术语`}>
              <div className="flex items-center gap-2.5">
                <h2 className="font-serif text-sm font-bold">{category}</h2>
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
