'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useAppStore } from '@/lib/store'
import { getSubject, getChapter } from '@/data/biology'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import type { SubjectId } from '@/lib/types'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { cn } from '@/lib/utils'
import { formatDistanceToNow } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import {
  BookOpenCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Eye,
  EyeOff,
  History,
  Layers,
  Loader2,
  NotebookPen,
  Trash2,
} from 'lucide-react'

/** API 返回的错题条目 */
interface WrongItem {
  lastWrongAt: string
  wrongCount: number
  question: {
    id: string
    subjectId: SubjectId
    chapterId: string
    type: 'single' | 'multiple' | 'truefalse'
    question: string
    options: string[]
    answer: number | number[]
    explanation: string
    difficulty: 1 | 2 | 3
  }
  lastUserAnswer: number[]
}

const SUBJECT_ORDER: SubjectId[] = [
  'biochemistry',
  'molecular-biology',
  'cell-biology',
  'biophysics',
  'microbiology',
  'immunology',
  'neurobiology',
  'bioinformatics',
  'virology',
  'structural-biology',
  'x-ray-crystallography',
  'electron-microscopy',
]

const SUBJECT_NAMES: Record<SubjectId, string> = {
  biochemistry: '生物化学',
  'molecular-biology': '分子生物学',
  'cell-biology': '细胞生物学',
  biophysics: '生物物理学',
  microbiology: '微生物学',
  immunology: '免疫学',
  neurobiology: '神经生物学',
  bioinformatics: '生物信息学',
  virology: '病毒学',
  'structural-biology': '结构生物学实验方法',
  'x-ray-crystallography': 'X射线晶体学',
  'electron-microscopy': '电子显微学',
}

const TYPE_NAMES: Record<string, string> = {
  single: '单选题',
  multiple: '多选题',
  truefalse: '判断题',
}

export function WrongbookView() {
  const navigate = useAppStore((s) => s.navigate)
  const [items, setItems] = useState<WrongItem[]>([])
  const [stats, setStats] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<SubjectId | 'all'>('all')
  /** 排列模式：按章节聚类 / 按时间平铺 */
  const [mode, setMode] = useState<'chapter' | 'recent'>('chapter')
  /** 折叠的章节分组（chapterId 集合） */
  const [collapsedChapters, setCollapsedChapters] = useState<Set<string>>(new Set())
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const [confirmId, setConfirmId] = useState<string | null>(null)
  const [removing, setRemoving] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/wrongbook')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = (await res.json()) as {
        items: WrongItem[]
        stats: Record<string, number>
      }
      setItems(data.items ?? [])
      setStats(data.stats ?? {})
    } catch (e) {
      setError(String(e instanceof Error ? e.message : e))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const filtered = useMemo(
    () => (filter === 'all' ? items : items.filter((i) => i.question.subjectId === filter)),
    [items, filter]
  )

  /** 章节聚类：按学科顺序 + 章号分组（mode === 'chapter' 时使用） */
  const chapterGroups = useMemo(() => {
    const groups = new Map<
      string,
      {
        subjectId: SubjectId
        chapterId: string
        chapterNumber: number
        chapterTitle: string
        items: WrongItem[]
        lastWrongAt: string
      }
    >()
    for (const item of filtered) {
      const q = item.question
      const chapter = getChapter(q.subjectId, q.chapterId)
      const key = q.chapterId
      const g = groups.get(key)
      if (g) {
        g.items.push(item)
        if (item.lastWrongAt > g.lastWrongAt) g.lastWrongAt = item.lastWrongAt
      } else {
        groups.set(key, {
          subjectId: q.subjectId,
          chapterId: q.chapterId,
          chapterNumber: chapter?.number ?? 0,
          chapterTitle: chapter?.title ?? '未分章',
          items: [item],
          lastWrongAt: item.lastWrongAt,
        })
      }
    }
    // 学科顺序 → 章号 排序
    return Array.from(groups.values()).sort(
      (a, b) =>
        SUBJECT_ORDER.indexOf(a.subjectId) - SUBJECT_ORDER.indexOf(b.subjectId) ||
        a.chapterNumber - b.chapterNumber
    )
  }, [filtered])

  const toggleChapter = (chapterId: string) => {
    setCollapsedChapters((prev) => {
      const next = new Set(prev)
      if (next.has(chapterId)) next.delete(chapterId)
      else next.add(chapterId)
      return next
    })
  }

  const toggleExpand = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const removeItem = async (questionId: string) => {
    setRemoving(true)
    try {
      const res = await fetch('/api/wrongbook', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId }),
      })
      if (res.ok) {
        setItems((prev) => prev.filter((i) => i.question.id !== questionId))
        setStats((prev) => {
          const next = { ...prev }
          const item = items.find((i) => i.question.id === questionId)
          if (item) {
            const sid = item.question.subjectId
            next[sid] = Math.max(0, (next[sid] ?? 1) - 1)
            if (!next[sid]) delete next[sid]
          }
          return next
        })
      }
    } finally {
      setRemoving(false)
      setConfirmId(null)
    }
  }

  const confirmItem = items.find((i) => i.question.id === confirmId)

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      {/* ===== 头部（学术编辑风） ===== */}
      <header>
        <p className="bio-eyebrow flex items-center gap-2 text-muted-foreground">
          <NotebookPen className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          Wrong Answers · 错题归集
        </p>
        <h1 className="mt-2 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          错题本
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          测验中答错的题目会自动归集到这里。展开题目查看正误对照与解析，
          消化后可移除——建议结合「复习卡片」巩固相关术语。
        </p>
        <div className="bio-rule mt-5" aria-hidden="true" />
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
          <span className="tabular-nums">
            共 <span className="font-semibold text-foreground">{items.length}</span> 道错题
          </span>
          <span className="opacity-30">·</span>
          <button
            className="inline-flex items-center gap-1 rounded outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => navigate({ name: 'quiz', subjectId: 'biochemistry' })}
          >
            <ClipboardList className="h-3.5 w-3.5" aria-hidden="true" />
            去测验中心练习
          </button>
        </div>
      </header>

      {/* ===== 学科筛选（下边线式） + 排列模式 ===== */}
      {!loading && items.length > 0 && (
        <div
          className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-b pb-2"
          role="tablist"
          aria-label="按学科筛选错题"
        >
          <FilterTab
            active={filter === 'all'}
            label="全部"
            count={items.length}
            onClick={() => setFilter('all')}
          />
          {SUBJECT_ORDER.filter((s) => stats[s]).map((s) => {
            const theme = getSubjectTheme(s)
            return (
              <FilterTab
                key={s}
                active={filter === s}
                label={SUBJECT_NAMES[s]}
                count={stats[s]}
                toneClass={theme.classes.text}
                toneBorder={theme.classes.border}
                onClick={() => setFilter(s)}
              />
            )
          })}
          {/* 排列模式切换（右侧） */}
          <div
            className="ml-auto flex items-center gap-1 rounded-lg border bg-card p-0.5"
            role="group"
            aria-label="错题排列模式"
          >
            <ModeChip
              active={mode === 'chapter'}
              onClick={() => setMode('chapter')}
              label="按章节聚类"
            >
              <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            </ModeChip>
            <ModeChip
              active={mode === 'recent'}
              onClick={() => setMode('recent')}
              label="按时间平铺"
            >
              <History className="h-3.5 w-3.5" aria-hidden="true" />
            </ModeChip>
          </div>
        </div>
      )}

      {/* ===== 列表 ===== */}
      <main className="mt-6" aria-label="错题列表">
        {loading ? (
          <div className="flex flex-col items-center gap-3 py-20 text-muted-foreground">
            <Loader2 className="h-8 w-8 animate-spin" aria-hidden="true" />
            <p className="text-sm">正在加载错题…</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <p className="text-sm text-destructive">加载失败：{error}</p>
            <Button variant="outline" size="sm" onClick={() => load()}>
              重试
            </Button>
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed bg-card py-16 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary">
              <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-serif text-lg font-bold">
              {items.length === 0 ? '还没有错题记录' : '该学科暂无错题'}
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {items.length === 0
                ? '完成一轮章节自测后，答错的题目会出现在这里，方便针对性复习。'
                : '换一个学科看看，或回到全部视图。'}
            </p>
            {items.length === 0 && (
              <Button
                variant="outline"
                size="sm"
                className="mt-6"
                onClick={() => navigate({ name: 'quiz', subjectId: 'biochemistry' })}
              >
                <ClipboardList className="mr-2 h-4 w-4" aria-hidden="true" />
                开始章节自测
              </Button>
            )}
          </div>
        ) : mode === 'chapter' ? (
          /* 按章节聚类列表 */
          <div className="space-y-6">
            {chapterGroups.map((g) => {
              const theme = getSubjectTheme(g.subjectId)
              const collapsed = collapsedChapters.has(g.chapterId)
              const subject = getSubject(g.subjectId)
              return (
                <section
                  key={g.chapterId}
                  aria-label={`${subject?.name ?? ''}第 ${g.chapterNumber} 章错题分组`}
                >
                  {/* 章节分组头 */}
                  <div className={`border-l-2 pl-3.5 ${theme.classes.border}`}>
                    <button
                      type="button"
                      onClick={() => toggleChapter(g.chapterId)}
                      aria-expanded={!collapsed}
                      className="group flex w-full flex-wrap items-center gap-x-2.5 gap-y-1 rounded py-1 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
                          collapsed && '-rotate-90'
                        )}
                        aria-hidden="true"
                      />
                      <span className="font-serif text-base font-bold">
                        第 {g.chapterNumber} 章 {g.chapterTitle}
                      </span>
                      <span
                        className={cn(
                          'rounded-full px-2 py-0.5 text-[11px] font-medium tabular-nums',
                          g.items.length >= 3
                            ? 'bg-destructive/10 text-destructive'
                            : 'bg-muted text-muted-foreground'
                        )}
                      >
                        {g.items.length} 道错题
                      </span>
                      <span className="text-[11px] tabular-nums text-muted-foreground/70">
                        最近答错{' '}
                        {formatDistanceToNow(new Date(g.lastWrongAt), {
                          addSuffix: true,
                          locale: zhCN,
                        })}
                      </span>
                    </button>
                    {/* 章内快捷操作 */}
                    {!collapsed && (
                      <div className="mt-1.5 flex items-center gap-3 pl-6 text-xs">
                        <button
                          className="inline-flex items-center gap-1 rounded outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                          onClick={() =>
                            navigate({ name: 'quiz', subjectId: g.subjectId })
                          }
                        >
                          <ClipboardList className="h-3.5 w-3.5" aria-hidden="true" />
                          重练本章测验
                        </button>
                        <span className="opacity-30">·</span>
                        <button
                          className="inline-flex items-center gap-1 rounded outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                          onClick={() =>
                            setExpanded((prev) => {
                              const next = new Set(prev)
                              const allOpen = g.items.every((i) =>
                                next.has(i.question.id)
                              )
                              for (const i of g.items) {
                                if (allOpen) next.delete(i.question.id)
                                else next.add(i.question.id)
                              }
                              return next
                            })
                          }
                        >
                          <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                          展开本章全部解析
                        </button>
                      </div>
                    )}
                  </div>
                  {/* 组内错题卡 */}
                  {!collapsed && (
                    <ul className="mt-3 space-y-4 pl-1.5">
                      {g.items.map((item, idx) => (
                        <WrongCard
                          key={item.question.id}
                          item={item}
                          order={idx + 1}
                          expanded={expanded.has(item.question.id)}
                          onToggle={() => toggleExpand(item.question.id)}
                          onRemove={() => setConfirmId(item.question.id)}
                        />
                      ))}
                    </ul>
                  )}
                </section>
              )
            })}
          </div>
        ) : (
          /* 按时间平铺（原视图） */
          <ul className="space-y-4">
            {filtered.map((item, idx) => (
              <WrongCard
                key={item.question.id}
                item={item}
                order={idx + 1}
                expanded={expanded.has(item.question.id)}
                onToggle={() => toggleExpand(item.question.id)}
                onRemove={() => setConfirmId(item.question.id)}
              />
            ))}
          </ul>
        )}
      </main>

      {/* ===== 移除确认 ===== */}
      <AlertDialog
        open={confirmId !== null}
        onOpenChange={(open) => !open && setConfirmId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>移除这道错题？</AlertDialogTitle>
            <AlertDialogDescription>
              {confirmItem
                ? `「${confirmItem.question.question.slice(0, 40)}${confirmItem.question.question.length > 40 ? '…' : ''}」的答题记录将被删除，且不再出现在错题本中。`
                : ''}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={removing}>取消</AlertDialogCancel>
            <AlertDialogAction
              disabled={removing}
              onClick={(e) => {
                e.preventDefault()
                if (confirmId) removeItem(confirmId)
              }}
              className="bg-destructive text-white hover:bg-destructive/90"
            >
              {removing && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
              )}
              确认移除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

// ============================================================
// 学科筛选 tab（下边线式）
// ============================================================
function FilterTab({
  active,
  label,
  count,
  toneClass,
  toneBorder,
  onClick,
}: {
  active: boolean
  label: string
  count: number
  /** 学科色文字类（可选） */
  toneClass?: string
  /** 学科色边框类（可选） */
  toneBorder?: string
  onClick: () => void
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1.5 border-b-2 pb-1.5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring',
        active
          ? cn('font-semibold', toneClass ?? 'text-foreground', toneBorder ?? 'border-foreground')
          : 'border-transparent text-muted-foreground hover:text-foreground'
      )}
    >
      {label}
      <span className="text-[11px] tabular-nums opacity-70">{count}</span>
    </button>
  )
}

// ============================================================
// 排列模式切换 chip
// ============================================================
function ModeChip({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean
  onClick: () => void
  label: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      aria-label={label}
      onClick={onClick}
      className={cn(
        'inline-flex h-7 items-center gap-1.5 rounded-md px-2.5 text-xs outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring',
        active
          ? 'bg-primary/10 font-semibold text-primary'
          : 'text-muted-foreground hover:text-foreground'
      )}
    >
      {children}
      <span className="hidden sm:inline">{label}</span>
    </button>
  )
}

// ============================================================
// 错题卡片
// ============================================================
function WrongCard({
  item,
  order,
  expanded,
  onToggle,
  onRemove,
}: {
  item: WrongItem
  order: number
  expanded: boolean
  onToggle: () => void
  onRemove: () => void
}) {
  const { question: q } = item
  const theme = getSubjectTheme(q.subjectId)
  const subject = getSubject(q.subjectId)
  const chapter = getChapter(q.subjectId, q.chapterId)
  const correctIdx = Array.isArray(q.answer) ? q.answer : [q.answer]

  return (
    <li
      className={cn(
        'overflow-hidden rounded-xl border bg-card transition-colors',
        theme.classes.hover
      )}
    >
      {/* 学科色细顶线 */}
      <div className={cn('h-0.5 w-full bg-gradient-to-r', theme.classes.gradient)} aria-hidden="true" />

      <div className="p-4 sm:p-5">
        {/* 元信息行 */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-muted-foreground">
          <span className={cn('font-medium', theme.classes.text)}>
            {SUBJECT_NAMES[q.subjectId]}
          </span>
          <span className="opacity-30">·</span>
          <span>{chapter ? `第 ${chapter.number} 章` : ''}</span>
          <span className="opacity-30">·</span>
          <span>{TYPE_NAMES[q.type]}</span>
          <span className="opacity-30">·</span>
          <span className="inline-flex items-center gap-1 text-destructive tabular-nums">
            <Trash2 className="h-3 w-3" aria-hidden="true" />
            答错 {item.wrongCount} 次
          </span>
          <span className="ml-auto tabular-nums opacity-70">
            {formatDistanceToNow(new Date(item.lastWrongAt), {
              addSuffix: true,
              locale: zhCN,
            })}
          </span>
        </div>

        {/* 题干 */}
        <button
          onClick={onToggle}
          className="group mt-2.5 flex w-full items-start gap-3 rounded text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-expanded={expanded}
        >
          <span className="mt-0.5 shrink-0 font-serif text-lg font-bold tabular-nums text-muted-foreground/50">
            {String(order).padStart(2, '0')}
          </span>
          <span className="min-w-0 flex-1 font-serif text-[0.95rem] font-semibold leading-relaxed text-foreground group-hover:text-primary">
            {q.question}
          </span>
          <ChevronDown
            className={cn(
              'mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
              expanded && 'rotate-180'
            )}
            aria-hidden="true"
          />
        </button>

        {/* 展开区：答案对照 + 解析 */}
        {expanded && (
          <div className="bio-fade-up mt-4 border-t pt-4">
            <ul className="space-y-1.5">
              {q.options.map((opt, i) => {
                const isCorrect = correctIdx.includes(i)
                const isUserPick = item.lastUserAnswer.includes(i)
                return (
                  <li
                    key={i}
                    className={cn(
                      'flex items-start gap-2.5 rounded-lg border px-3 py-2 text-sm leading-relaxed',
                      isCorrect
                        ? 'border-emerald-500/40 bg-emerald-500/10 text-foreground'
                        : isUserPick
                          ? 'border-destructive/40 bg-destructive/10 text-foreground'
                          : 'border-transparent bg-muted/50 text-muted-foreground'
                    )}
                  >
                    <span
                      className={cn(
                        'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-semibold',
                        isCorrect
                          ? 'bg-emerald-600 text-white'
                          : isUserPick
                            ? 'bg-destructive text-white'
                            : 'bg-muted-foreground/20 text-muted-foreground'
                      )}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="min-w-0 flex-1">{opt}</span>
                    {isCorrect && (
                      <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
                        <BookOpenCheck className="h-3 w-3" aria-hidden="true" />
                        正确
                      </span>
                    )}
                    {!isCorrect && isUserPick && (
                      <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 text-[10px] font-medium text-destructive">
                        <EyeOff className="h-3 w-3" aria-hidden="true" />
                        你的选择
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* 解析 */}
            <div className="mt-3.5 rounded-lg border-l-2 border-primary/50 bg-secondary/60 px-4 py-3">
              <p className="bio-eyebrow text-muted-foreground">解析</p>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
                {q.explanation}
              </p>
            </div>

            {/* 操作 */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <span className="text-xs text-muted-foreground">
                {subject ? `${subject.name} · ${chapter?.title ?? ''}` : ''}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={onRemove}
                className="h-8 gap-1.5 border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                已掌握，移除
              </Button>
            </div>
          </div>
        )}
      </div>
    </li>
  )
}
