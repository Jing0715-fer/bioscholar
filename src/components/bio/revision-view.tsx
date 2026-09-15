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
  CheckCircle2,
  Eye,
  Layers,
  RefreshCw,
  RotateCcw,
  Sparkles,
} from 'lucide-react'

/** 队列卡片（与 API 返回结构一致） */
interface DueCard {
  cardId: string
  term: string
  english: string
  abbreviation?: string
  subjectId: SubjectId
  category: string
  definition: string
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
}

/** 本轮会话的评分记录（用于完成页统计） */
interface GradeLog {
  grades: ReviewGrade[]
}

export function RevisionView() {
  const navigate = useAppStore((s) => s.navigate)
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
          基于 SM-2 间隔重复算法调度 100 条学科术语——看正面回忆释义，翻卡自评，
          算法将按遗忘曲线安排每张卡的下次复习时间。
        </p>
        <div className="bio-rule mt-5" aria-hidden="true" />
        {stats && (
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
            <span className="tabular-nums">
              词库 <span className="font-semibold text-foreground">{stats.totalCards}</span> 条
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
          </div>
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
                  <span className="shrink-0 rounded border border-primary/40 bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                    新卡
                  </span>
                ) : (
                  <span className="shrink-0 text-[10px] tabular-nums text-muted-foreground">
                    第 {current.reps + 1} 轮
                  </span>
                )}
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
                  {/* 正面：术语 */}
                  <div className="text-center">
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

                    {/* 背面：定义 */}
                    {revealed ? (
                      <div className="bio-fade-up mx-auto mt-7 max-w-lg border-t pt-6">
                        <p className="font-serif text-sm italic text-muted-foreground">
                          {current.english}
                        </p>
                        <p className="mt-3 text-left text-[0.95rem] leading-relaxed text-foreground">
                          {current.definition}
                        </p>
                      </div>
                    ) : (
                      <p className="mt-8 text-xs text-muted-foreground">
                        回忆这个词的定义，然后翻开核对
                      </p>
                    )}
                  </div>
                </div>
              </article>

              {/* 操作区 */}
              <div className="mt-5">
                {!revealed ? (
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => setRevealed(true)}
                  >
                    <Eye className="mr-2 h-4 w-4" aria-hidden="true" />
                    显示答案
                  </Button>
                ) : (
                  <div className="bio-fade-up">
                    <p className="mb-2.5 text-center text-xs text-muted-foreground">
                      你记得多清楚？
                    </p>
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                      {([0, 1, 2, 3] as ReviewGrade[]).map((g) => (
                        <GradeButton
                          key={g}
                          grade={g}
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
                <button
                  className="inline-flex items-center gap-1.5 rounded text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={() =>
                    navigate({ name: 'glossary' })
                  }
                >
                  <BookMarked className="h-3.5 w-3.5" aria-hidden="true" />
                  在词典中查看全部术语
                </button>
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
  disabled,
  onClick,
}: {
  grade: ReviewGrade
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
      className={cn('h-auto flex-col gap-0.5 py-2.5', styles[grade])}
      aria-label={`${meta.label}：${meta.hint}`}
    >
      <span className="text-sm font-semibold">{meta.label}</span>
      <span className="text-[10px] font-normal opacity-70">{meta.hint}</span>
    </Button>
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
          已学 {stats.seen} / {stats.totalCards} 条 · 已掌握 {stats.mastered} 条
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
