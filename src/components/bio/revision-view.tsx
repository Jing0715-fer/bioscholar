'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useAppStore } from '@/lib/store'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import { GRADE_META, type ReviewGrade } from '@/lib/srs'
import type { SubjectId } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import {
  BookMarked,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Eye,
  FileText,
  Layers,
  NotebookPen,
  RefreshCw,
  RotateCcw,
  Sparkles,
  XCircle,
} from 'lucide-react'

/** 队列卡片（与 API 返回结构一致；术语卡 / 要点卡 / 错题卡统一） */
interface DueCard {
  cardId: string
  /** 卡片类型：term 术语卡 / keypoint 小节要点卡 / wrong 错题卡 */
  type: 'term' | 'keypoint' | 'wrong'
  /** 术语卡：术语名；要点卡：小节标题；错题卡：题干 */
  term: string
  english: string
  abbreviation?: string
  subjectId: SubjectId
  category: string
  definition: string
  /** 要点卡 / 错题卡：章节路径 */
  chapterTitle?: string
  chapterId?: string
  sectionId?: string
  /** 要点卡：本节要点（3-6 条） */
  keyPoints?: string[]
  /** 错题卡：题目详情 */
  question?: string
  options?: string[]
  answer?: number | number[]
  explanation?: string
  /** 错题卡：用户最近一次的错误选择（用于红绿对比） */
  userAnswer?: number[]
  isNew: boolean
  reps: number
  intervalDays: number
  ease: number
}

interface Stats {
  totalCards: number
  seen: number
  mastered: number
  dueNow: number
  newToday: number
  /** 待巩固错题卡数 */
  wrongDue: number
  /** 间隔分桶（遗忘曲线阶段） */
  intervalBuckets: {
    d0: number
    d1: number
    d7: number
    d21: number
  }
  /** 未来 7 天每日到期分布 */
  upcomingDue: Array<{ date: string; count: number }>
  /** 平均 ease */
  avgEase: number
}

/** 本轮会话的评分记录（用于完成页统计） */
interface GradeLog {
  grades: ReviewGrade[]
}

export function RevisionView() {
  const navigate = useAppStore((s) => s.navigate)
  const openReader = useAppStore((s) => s.openReader)
  const [queue, setQueue] = useState<DueCard[]>([])
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [cursor, setCursor] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [session, setSession] = useState<GradeLog>({ grades: [] })
  const [lastDueHint, setLastDueHint] = useState<string | null>(null)

  const current = queue[cursor]
  const finished = !loading && cursor >= queue.length
  const total = queue.length

  const loadQueue = useCallback(async () => {
    setLoading(true)
    setError(null)
    setCursor(0)
    setRevealed(false)
    setSession({ grades: [] })
    setLastDueHint(null)
    try {
      const res = await fetch('/api/flashcards')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = (await res.json()) as { queue: DueCard[]; stats: Stats | null }
      setQueue(data.queue ?? [])
      setStats(data.stats ?? null)
    } catch (e) {
      setError(String(e instanceof Error ? e.message : e))
      setQueue([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadQueue()
  }, [loadQueue])

  /** 提交评分并推进 */
  const grade = useCallback(
    async (g: ReviewGrade) => {
      if (!current || submitting) return
      setSubmitting(true)
      try {
        const res = await fetch('/api/flashcards', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cardId: current.cardId, grade: g }),
        })
        if (res.ok) {
          const data = (await res.json()) as {
            intervalDays: number
            reps: number
          }
          const days = data.intervalDays
          setLastDueHint(
            days >= 1
              ? `下次复习：${formatDays(days)}后`
              : '10 分钟内再次巩固'
          )
        }
        setSession((s) => ({ grades: [...s.grades, g] }))
        setRevealed(false)
        setCursor((c) => c + 1)
      } catch {
        // 网络失败：本地推进但提示
        setSession((s) => ({ grades: [...s.grades, g] }))
        setRevealed(false)
        setCursor((c) => c + 1)
        setLastDueHint(null)
      } finally {
        setSubmitting(false)
      }
    },
    [current, submitting]
  )

  const sessionSummary = useMemo(() => {
    const g = session.grades
    return {
      total: g.length,
      good: g.filter((x) => x >= 2).length,
      forget: g.filter((x) => x === 0).length,
    }
  }, [session])

  // ---------------- 键盘快捷键 ----------------
  // Space / Enter：翻面；1–4：评分（忘记/困难/良好/简单）
  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      // 修饰键组合（⌘K 搜索等）不接管
      if (e.metaKey || e.ctrlKey || e.altKey) return
      // 焦点在输入类元素时不拦截（搜索框、对话框输入等）
      const el = document.activeElement
      if (
        el instanceof HTMLElement &&
        (el.tagName === 'INPUT' ||
          el.tagName === 'TEXTAREA' ||
          el.tagName === 'SELECT' ||
          el.isContentEditable)
      )
        return
      if (!current || submitting || loading || error) return

      if (!revealed) {
        if (e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault()
          setRevealed(true)
        }
      } else {
        const g = ['1', '2', '3', '4'].indexOf(e.key)
        if (g >= 0) {
          e.preventDefault()
          grade(g as ReviewGrade)
        }
      }
    }
    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
  }, [current, submitting, loading, error, revealed, grade])

  // ---------------- 加载中 ----------------
  if (loading) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <div className="flex flex-col items-center gap-4 py-20 text-muted-foreground">
          <Layers className="h-10 w-10 animate-pulse" aria-hidden="true" />
          <p className="text-sm">正在准备复习卡片…</p>
        </div>
      </div>
    )
  }

  // ---------------- 出错 ----------------
  if (error) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <p className="text-sm text-destructive">加载复习队列失败：{error}</p>
          <Button variant="outline" size="sm" onClick={() => loadQueue()}>
            <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
            重试
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      {/* ===== 头部（学术编辑风） ===== */}
      <header>
        <p className="bio-eyebrow flex items-center gap-2 text-muted-foreground">
          <Layers className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          Spaced Repetition · 术语记忆
        </p>
        <h1 className="mt-2 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          复习卡片
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          基于 SM-2 间隔重复算法调度{' '}
          <span className="tabular-nums font-semibold text-foreground">
            {stats?.totalCards ?? 303}
          </span>{' '}
          张学科卡片——核心术语、小节要点与测验错题。看正面回忆，翻卡自评，
          算法将按遗忘曲线安排每张卡的下次复习时间；
          测验中答错的题目会自动生成错题卡，优先安排巩固。
        </p>
        <div className="bio-rule mt-5" aria-hidden="true" />
        {stats && (
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
            <span className="tabular-nums">
              卡库 <span className="font-semibold text-foreground">{stats.totalCards}</span> 张
            </span>
            <span className="opacity-30">·</span>
            <span className="tabular-nums">
              已学 <span className="font-semibold text-foreground">{stats.seen}</span>
            </span>
            <span className="opacity-30">·</span>
            <span className="tabular-nums">
              已掌握 <span className="font-semibold text-foreground">{stats.mastered}</span>
            </span>
            {stats.dueNow > 0 && (
              <>
                <span className="opacity-30">·</span>
                <span className="font-medium text-primary tabular-nums">
                  今日到期 {stats.dueNow}
                </span>
              </>
            )}
            {stats.wrongDue > 0 && (
              <>
                <span className="opacity-30">·</span>
                <span className="font-medium tabular-nums text-rose-700 dark:text-rose-400">
                  错题待巩固 {stats.wrongDue}
                </span>
              </>
            )}
          </div>
        )}

        {/* 记忆统计面板（有已学卡时可展开） */}
        {stats && stats.seen > 0 && (
          <MemoryStatsPanel stats={stats} />
        )}
      </header>

      {/* ===== 学习区 ===== */}
      <main className="mt-8" aria-label="抽认卡复习">
        {total === 0 ? (
          <EmptyState onReload={loadQueue} stats={stats} />
        ) : finished ? (
          <FinishCard
            summary={sessionSummary}
            onReload={loadQueue}
            lastDueHint={lastDueHint}
            onGlossary={() => navigate({ name: 'glossary' })}
          />
        ) : (
          current && (
            <div className="bio-fade-up" key={current.cardId}>
              {/* 进度 */}
              <div className="mb-5 flex items-center gap-3">
                <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                  第 {cursor + 1} / {total} 张
                </span>
                <Progress
                  value={((cursor + 1) / total) * 100}
                  className="h-1 flex-1"
                  aria-label="本次复习进度"
                />
                {current.isNew ? (
                  <span
                    className={cn(
                      'shrink-0 rounded border px-1.5 py-0.5 text-[10px] font-medium',
                      current.type === 'wrong'
                        ? 'border-rose-500/40 bg-rose-500/10 text-rose-700 dark:text-rose-400'
                        : 'border-primary/40 bg-primary/10 text-primary'
                    )}
                  >
                    {current.type === 'wrong' ? '待巩固' : '新卡'}
                  </span>
                ) : (
                  <span className="shrink-0 text-[10px] tabular-nums text-muted-foreground">
                    第 {current.reps + 1} 轮
                  </span>
                )}
                <span
                  className={cn(
                    'shrink-0 rounded border px-1.5 py-0.5 text-[10px] font-medium',
                    current.type === 'keypoint'
                      ? 'border-violet-500/40 bg-violet-500/10 text-violet-700 dark:text-violet-400'
                      : current.type === 'wrong'
                        ? 'border-rose-500/40 bg-rose-500/10 text-rose-700 dark:text-rose-400'
                        : 'border-border bg-muted/60 text-muted-foreground'
                  )}
                >
                  {current.type === 'keypoint'
                    ? '要点卡'
                    : current.type === 'wrong'
                      ? '错题卡'
                      : '术语卡'}
                </span>
              </div>

              {/* 卡片 */}
              <article
                className="bio-paper relative overflow-hidden rounded-2xl border bg-card shadow-sm"
                aria-label="抽认卡"
              >
                <div
                  className={cn(
                    'h-1 w-full bg-gradient-to-r',
                    getSubjectTheme(current.subjectId).classes.gradient
                  )}
                  aria-hidden="true"
                />
                <div className="px-6 py-10 sm:px-10 sm:py-14">
                  {/* 正面：术语卡 / 要点卡 / 错题卡分别渲染 */}
                  <div className="text-center">
                    {current.type === 'keypoint' ? (
                      <>
                        <p className="bio-eyebrow text-muted-foreground">
                          {subjectName(current.subjectId)} · {current.chapterTitle}
                        </p>
                        <h2 className="mt-3 font-serif text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                          {current.term}
                        </h2>
                        {!revealed && (
                          <p className="mt-8 text-xs text-muted-foreground">
                            回忆本节的 {current.keyPoints?.length ?? '3-6'}{' '}条要点，然后翻开核对
                          </p>
                        )}
                      </>
                    ) : current.type === 'wrong' ? (
                      <div className="mx-auto max-w-xl text-left">
                        <p className="bio-eyebrow text-center text-muted-foreground">
                          {subjectName(current.subjectId)} · {current.chapterTitle}
                        </p>
                        <h2 className="mt-4 font-serif text-lg font-bold leading-relaxed tracking-tight sm:text-xl">
                          {current.question}
                        </h2>
                        {!revealed && (
                          <p className="mt-8 text-center text-xs text-muted-foreground">
                            回忆这道题的正确答案，然后翻开核对
                          </p>
                        )}
                      </div>
                    ) : (
                      <>
                        <p className="bio-eyebrow text-muted-foreground">
                          {subjectName(current.subjectId)} · {current.category}
                        </p>
                        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                          {current.term}
                        </h2>
                        {current.abbreviation && (
                          <p className="mt-2 font-mono text-sm text-muted-foreground">
                            {current.abbreviation}
                          </p>
                        )}
                        {!revealed && (
                          <p className="mt-8 text-xs text-muted-foreground">
                            回忆这个词的定义，然后翻开核对
                          </p>
                        )}
                      </>
                    )}

                    {/* 背面 */}
                    {revealed &&
                      (current.type === 'keypoint' ? (
                        <div className="bio-fade-up mx-auto mt-7 max-w-lg border-t pt-6 text-left">
                          <p className="text-center font-serif text-sm italic text-muted-foreground">
                            {current.chapterTitle}
                          </p>
                          <ol className="mt-4 space-y-2.5">
                            {(current.keyPoints ?? []).map((p, i) => (
                              <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed">
                                <span className="shrink-0 font-serif text-sm font-bold tabular-nums text-primary">
                                  {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="flex-1">{p}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      ) : current.type === 'wrong' ? (
                        <div className="bio-fade-up mx-auto mt-7 max-w-xl border-t pt-6 text-left">
                          <div className="flex items-baseline justify-between">
                            <p className="font-serif text-sm italic text-muted-foreground">
                              正确答案
                            </p>
                            <p className="text-[10px] tabular-nums text-muted-foreground">
                              <span className="text-primary">■</span> 正确
                              {current.userAnswer && current.userAnswer.length > 0 && (
                                <>
                                  {'　'}
                                  <span className="text-rose-600 dark:text-rose-400">■</span> 你的选择
                                </>
                              )}
                            </p>
                          </div>
                          <ul className="mt-3 space-y-2">
                            {(current.options ?? []).map((opt, i) => {
                              const answers = Array.isArray(current.answer)
                                ? current.answer
                                : current.answer !== undefined
                                  ? [current.answer]
                                  : []
                              const isCorrect = answers.includes(i)
                              const isUserPick = (current.userAnswer ?? []).includes(i)
                              return (
                                <li
                                  key={i}
                                  className={cn(
                                    'flex items-start gap-3 rounded-lg border px-3.5 py-2.5 text-sm leading-relaxed',
                                    isCorrect
                                      ? 'border-primary/50 bg-primary/10 font-medium'
                                      : isUserPick
                                        ? 'border-rose-500/50 bg-rose-500/10'
                                        : 'border-border bg-muted/40 text-muted-foreground'
                                  )}
                                >
                                  <span
                                    className={cn(
                                      'mt-0.5 shrink-0 font-serif text-xs font-bold tabular-nums',
                                      isCorrect
                                        ? 'text-primary'
                                        : isUserPick
                                          ? 'text-rose-600 dark:text-rose-400'
                                          : 'text-muted-foreground/60'
                                    )}
                                  >
                                    {String.fromCharCode(65 + i)}
                                  </span>
                                  <span className="flex-1">{opt}</span>
                                  {isCorrect && (
                                    <CheckCircle2
                                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                                      aria-label="正确答案"
                                    />
                                  )}
                                  {isUserPick && !isCorrect && (
                                    <XCircle
                                      className="mt-0.5 h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400"
                                      aria-label="你的错误选择"
                                    />
                                  )}
                                </li>
                              )
                            })}
                          </ul>
                          {current.explanation && (
                            <div className="mt-4 border-l-2 border-primary/50 pl-4">
                              <p className="font-serif text-xs italic text-muted-foreground">
                                解析
                              </p>
                              <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                                {current.explanation}
                              </p>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="bio-fade-up mx-auto mt-7 max-w-lg border-t pt-6">
                          <p className="font-serif text-sm italic text-muted-foreground">
                            {current.english}
                          </p>
                          <p className="mt-3 text-left text-[0.95rem] leading-relaxed text-foreground">
                            {current.definition}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </article>

              {/* 操作区 */}
              <div className="mt-5">
                {!revealed ? (
                  <div className="relative">
                    <Button
                      size="lg"
                      className="w-full"
                      onClick={() => setRevealed(true)}
                    >
                      <Eye className="mr-2 h-4 w-4" aria-hidden="true" />
                      显示答案
                    </Button>
                    <span
                      className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 items-center sm:flex"
                      aria-hidden="true"
                    >
                      <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground shadow-sm">
                        空格
                      </kbd>
                    </span>
                  </div>
                ) : (
                  <div className="bio-fade-up">
                    <p className="mb-2.5 text-center text-xs text-muted-foreground">
                      你记得多清楚？
                      <span className="ml-1.5 hidden whitespace-nowrap opacity-70 sm:inline">
                        （按 1–4 键快速评分）
                      </span>
                    </p>
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                      {([0, 1, 2, 3] as ReviewGrade[]).map((g) => (
                        <GradeButton
                          key={g}
                          grade={g}
                          hotkey={String(g + 1)}
                          disabled={submitting}
                          onClick={() => grade(g)}
                        />
                      ))}
                    </div>
                    {lastDueHint && (
                      <p className="mt-3 text-center text-xs tabular-nums text-muted-foreground">
                        {lastDueHint}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* 辅助操作 */}
              <div className="mt-6 flex items-center justify-center gap-4 text-xs">
                {current.type === 'keypoint' && current.sectionId && current.chapterId ? (
                  <button
                    className="inline-flex items-center gap-1.5 rounded text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={() =>
                      openReader(
                        current.subjectId,
                        current.chapterId!,
                        current.sectionId!
                      )
                    }
                  >
                    <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                    回看本节原文
                  </button>
                ) : current.type === 'wrong' ? (
                  <button
                    className="inline-flex items-center gap-1.5 rounded text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={() => navigate({ name: 'wrongbook' })}
                  >
                    <NotebookPen className="h-3.5 w-3.5" aria-hidden="true" />
                    前往错题本查看同类错题
                  </button>
                ) : (
                  <button
                    className="inline-flex items-center gap-1.5 rounded text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={() =>
                      navigate({ name: 'glossary' })
                    }
                  >
                    <BookMarked className="h-3.5 w-3.5" aria-hidden="true" />
                    在词典中查看全部术语
                  </button>
                )}
              </div>
            </div>
          )
        )}
      </main>
    </div>
  )
}

// ============================================================
// 评分按钮
// ============================================================
function GradeButton({
  grade,
  hotkey,
  disabled,
  onClick,
}: {
  grade: ReviewGrade
  hotkey: string
  disabled: boolean
  onClick: () => void
}) {
  const meta = GRADE_META[grade]
  const styles: Record<ReviewGrade, string> = {
    0: 'border-destructive/30 text-destructive hover:bg-destructive/10 hover:border-destructive/50',
    1: 'border-amber-500/40 text-amber-700 dark:text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/60',
    2: 'border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60',
    3: 'border-emerald-500/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/60',
  }
  return (
    <Button
      variant="outline"
      disabled={disabled}
      onClick={onClick}
      className={cn('relative h-auto flex-col gap-0.5 py-2.5', styles[grade])}
      aria-label={`${meta.label}：${meta.hint}（快捷键 ${hotkey}）`}
    >
      <span className="text-sm font-semibold">{meta.label}</span>
      <span className="text-[10px] font-normal opacity-70">{meta.hint}</span>
      <span
        className="pointer-events-none absolute right-1.5 top-1.5 hidden font-mono text-[10px] font-semibold opacity-40 sm:block"
        aria-hidden="true"
      >
        {hotkey}
      </span>
    </Button>
  )
}

// ============================================================
// 记忆统计面板：间隔分桶（遗忘曲线阶段）+ 未来 7 天到期分布
// ============================================================
const BUCKET_META = [
  { key: 'd0' as const, label: '初学', hint: '间隔 < 1 天', bar: 'bg-rose-400' },
  { key: 'd1' as const, label: '短期巩固', hint: '1–7 天', bar: 'bg-amber-400' },
  { key: 'd7' as const, label: '中期巩固', hint: '7–21 天', bar: 'bg-teal-400' },
  { key: 'd21' as const, label: '已掌握', hint: '≥ 21 天', bar: 'bg-emerald-500' },
]

function MemoryStatsPanel({ stats }: { stats: Stats }) {
  const [open, setOpen] = useState(false)
  const buckets = stats.intervalBuckets ?? { d0: 0, d1: 0, d7: 0, d21: 0 }
  const upcoming = stats.upcomingDue ?? []
  const maxDue = Math.max(1, ...upcoming.map((d) => d.count))
  const seen = Math.max(1, stats.seen)

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <BrainCircuit className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
        记忆统计
        <ChevronDown
          className={cn(
            'h-3.5 w-3.5 transition-transform duration-200',
            open && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="bio-fade-up mt-3 rounded-xl border bg-card p-4 sm:p-5">
          {/* 间隔分桶：水平堆叠条 */}
          <p className="bio-eyebrow text-muted-foreground">Retention · 记忆阶段分布</p>
          <div
            className="mt-2.5 flex h-3 w-full overflow-hidden rounded-full bg-muted"
            role="img"
            aria-label={`记忆阶段分布：初学 ${buckets.d0} 张，短期巩固 ${buckets.d1} 张，中期巩固 ${buckets.d7} 张，已掌握 ${buckets.d21} 张`}
          >
            {BUCKET_META.map((b) => {
              const w = (buckets[b.key] / seen) * 100
              return w > 0 ? (
                <span
                  key={b.key}
                  className={cn('h-full', b.bar)}
                  style={{ width: `${w}%` }}
                  title={`${b.label}（${b.hint}）：${buckets[b.key]} 张`}
                />
              ) : null
            })}
          </div>
          <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5">
            {BUCKET_META.map((b) => (
              <li key={b.key} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className={cn('h-2 w-2 rounded-sm', b.bar)} aria-hidden="true" />
                {b.label}
                <span className="font-semibold tabular-nums text-foreground">{buckets[b.key]}</span>
                <span className="opacity-50">（{b.hint}）</span>
              </li>
            ))}
          </ul>

          {/* 未来 7 天到期柱状图 */}
          <p className="bio-eyebrow mt-5 text-muted-foreground">Upcoming · 未来 7 天到期</p>
          <div className="mt-2.5 flex items-end gap-1.5" style={{ height: 64 }}>
            {upcoming.map((d, i) => (
              <div key={i} className="flex min-w-0 flex-1 flex-col items-center gap-1">
                <span
                  className={cn(
                    'text-[10px] font-semibold tabular-nums',
                    i === 0 && d.count > 0 ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {d.count > 0 ? d.count : ''}
                </span>
                <div className="flex h-9 w-full items-end">
                  <span
                    className={cn(
                      'w-full rounded-t-[3px] transition-all',
                      d.count > 0
                        ? i === 0
                          ? 'bg-primary'
                          : 'bg-primary/40'
                        : 'bg-muted'
                    )}
                    style={{ height: `${Math.max(d.count > 0 ? 8 : 3, (d.count / maxDue) * 100)}%` }}
                    title={`${d.date}：到期 ${d.count} 张`}
                  />
                </div>
                <span className="truncate text-[9px] tabular-nums text-muted-foreground">
                  {i === 0 ? '今天' : d.date}
                </span>
              </div>
            ))}
          </div>

          {/* 平均难度系数 */}
          <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
            已学 {stats.seen} 张 · 平均难度系数（SM-2 ease）
            <span className="ml-1 font-semibold tabular-nums text-foreground">
              {stats.avgEase > 0 ? stats.avgEase.toFixed(2) : '—'}
            </span>
            （初始 2.5，评分越「简单」越高）
          </p>
        </div>
      )}
    </div>
  )
}

// ============================================================
// 空态：今日无待复习
// ============================================================
function EmptyState({
  onReload,
  stats,
}: {
  onReload: () => void
  stats: Stats | null
}) {
  return (
    <div className="rounded-2xl border border-dashed bg-card py-16 text-center">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary">
        <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
      </span>
      <h2 className="mt-4 font-serif text-lg font-bold">今日复习已完成</h2>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
        当前没有到期的卡片。新一批卡片将在到期日自动出现；
        也可以现在就提前刷新队列。
      </p>
      {stats && (
        <p className="mt-3 text-xs tabular-nums text-muted-foreground">
          已学 {stats.seen} / {stats.totalCards} 张 · 已掌握 {stats.mastered} 张
          {stats.wrongDue > 0 && ` · 错题待巩固 ${stats.wrongDue} 张`}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-3">
        <Button variant="outline" size="sm" onClick={onReload}>
          <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
          刷新队列
        </Button>
      </div>
    </div>
  )
}

// ============================================================
// 完成页：本轮统计
// ============================================================
function FinishCard({
  summary,
  onReload,
  lastDueHint,
  onGlossary,
}: {
  summary: { total: number; good: number; forget: number }
  onReload: () => void
  lastDueHint: string | null
  onGlossary: () => void
}) {
  const acc = summary.total
    ? Math.round((summary.good / summary.total) * 100)
    : 0
  return (
    <div className="bio-paper rounded-2xl border bg-card p-8 text-center shadow-sm sm:p-10">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary">
        <Sparkles className="h-6 w-6" aria-hidden="true" />
      </span>
      <h2 className="mt-4 font-serif text-xl font-bold">本轮复习完成</h2>
      <div className="mt-6 flex items-center justify-center gap-6 sm:gap-10">
        <div>
          <p className="font-serif text-3xl font-bold tabular-nums">
            {summary.total}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">复习张数</p>
        </div>
        <div className="h-10 w-px bg-border" aria-hidden="true" />
        <div>
          <p className="font-serif text-3xl font-bold tabular-nums text-primary">
            {acc}%
          </p>
          <p className="mt-1 text-xs text-muted-foreground">记忆质量</p>
        </div>
        <div className="h-10 w-px bg-border" aria-hidden="true" />
        <div>
          <p className="font-serif text-3xl font-bold tabular-nums text-destructive">
            {summary.forget}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">需巩固</p>
        </div>
      </div>
      {lastDueHint && (
        <p className="mt-5 text-xs tabular-nums text-muted-foreground">
          {lastDueHint}
        </p>
      )}
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <Button size="sm" onClick={onReload}>
          <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
          再来一轮
        </Button>
        <Button variant="outline" size="sm" onClick={onGlossary}>
          <BookMarked className="mr-2 h-4 w-4" aria-hidden="true" />
          浏览术语词典
        </Button>
      </div>
    </div>
  )
}

// ============================================================
// 工具
// ============================================================
function subjectName(id: SubjectId): string {
  const names: Record<SubjectId, string> = {
    biochemistry: '生物化学',
    'molecular-biology': '分子生物学',
    'cell-biology': '细胞生物学',
    biophysics: '生物物理学',
  }
  return names[id] ?? id
}

function formatDays(days: number): string {
  if (days < 1) return '当天'
  if (days < 30) return `${days} 天`
  if (days < 365) return `${Math.round(days / 30)} 个月`
  return `${(days / 365).toFixed(1)} 年`
}
