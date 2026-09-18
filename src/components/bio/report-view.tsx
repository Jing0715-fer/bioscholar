'use client'

import { useCallback, useEffect, useState } from 'react'
import { useAppStore } from '@/lib/store'
import { formatWordCount } from '@/lib/word-count'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import {
  ActivityHeatmap,
  type ActivityDay,
  type ActivitySummary,
} from '@/components/bio/activity-heatmap'
import { AbilityRadar, buildAbilityDims } from '@/components/bio/ability-radar'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { format, formatDistanceToNow } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import type { SubjectId } from '@/lib/types'
import {
  Activity as ActivityIcon,
  AlertCircle,
  ArrowRight,
  FileChartColumn,
  Printer,
  RefreshCw,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'

/* ---------- API 响应类型（与 /api/report 一致） ---------- */

interface ReportOverview {
  completedSections: number
  totalSections: number
  /** 累计已读字数（旧响应可能缺失） */
  readWords?: number
  /** 教材字库总字数（旧响应可能缺失） */
  totalWords?: number
  quizTotal: number
  quizCorrect: number
  accuracy: number
  noteCount: number
  cardsSeen: number
  cardsMastered: number
  cardsDue: number
  wrongCount: number
}

interface ReportSubject {
  subjectId: SubjectId
  name: string
  englishName: string
  completedSections: number
  totalSections: number
  progress: number
  quizTotal: number
  quizCorrect: number
  accuracy: number
  wrongCount: number
  noteCount: number
}

interface ReportResponse {
  generatedAt: string
  overview: ReportOverview
  subjects: ReportSubject[]
  activity: {
    days: ActivityDay[]
    streak: number
    maxStreak: number
    activeDays: number
  }
  weeklyCompare?: WeeklyCompare
  recent: {
    sections: Array<{
      sectionId: string
      subjectId: SubjectId
      chapterId: string
      sectionTitle: string
      chapterTitle: string
      completedAt: string
    }>
    notes: Array<{ id: string; title: string; updatedAt: string }>
    reviews: Array<{ cardId: string; label: string; lastReviewedAt: string }>
  }
}

/** 周对比快照（本周 vs 上周） */
interface WeeklyCompare {
  thisWeek: WeekBucket
  lastWeek: WeekBucket
}

interface WeekBucket {
  completed: number
  quiz: number
  correct: number
  notes: number
  reviews: number
  accuracy: number
  total: number
}

/* ---------- 工具 ---------- */

/** 中文相对时间（如「3 天前」） */
function relTime(iso: string): string {
  return formatDistanceToNow(new Date(iso), { addSuffix: true, locale: zhCN })
}

/** 数值容错归一（缺失/非有限值 → 0） */
function num(v: unknown): number {
  return typeof v === 'number' && Number.isFinite(v) ? v : 0
}

/** 响应归一化：字段缺失时兜底，保证渲染层拿到完整结构 */
function normalizeReport(p: ReportResponse): ReportResponse {
  return {
    generatedAt:
      typeof p.generatedAt === 'string'
        ? p.generatedAt
        : new Date().toISOString(),
    overview: {
      completedSections: num(p.overview.completedSections),
      totalSections: num(p.overview.totalSections),
      readWords: num(p.overview.readWords),
      totalWords: num(p.overview.totalWords),
      quizTotal: num(p.overview.quizTotal),
      quizCorrect: num(p.overview.quizCorrect),
      accuracy: num(p.overview.accuracy),
      noteCount: num(p.overview.noteCount),
      cardsSeen: num(p.overview.cardsSeen),
      cardsMastered: num(p.overview.cardsMastered),
      cardsDue: num(p.overview.cardsDue),
      wrongCount: num(p.overview.wrongCount),
    },
    subjects: p.subjects.filter(
      (s) => !!s && typeof s.subjectId === 'string'
    ),
    activity: {
      days: p.activity.days.filter(
        (d) => !!d && typeof d.date === 'string'
      ),
      streak: num(p.activity.streak),
      maxStreak: num(p.activity.maxStreak),
      activeDays: num(p.activity.activeDays),
    },
    weeklyCompare: normalizeWeekly(p.weeklyCompare),
    recent: {
      sections: p.recent.sections,
      notes: p.recent.notes,
      reviews: p.recent.reviews,
    },
  }
}

const EMPTY_WEEK: WeekBucket = {
  completed: 0,
  quiz: 0,
  correct: 0,
  notes: 0,
  reviews: 0,
  accuracy: 0,
  total: 0,
}

/** weeklyCompare 字段兜底（老响应缺失时全零） */
function normalizeWeekly(w: unknown): WeeklyCompare {
  const bucket = (b: unknown): WeekBucket => {
    if (!b || typeof b !== 'object') return { ...EMPTY_WEEK }
    const o = b as Record<string, unknown>
    return {
      completed: num(o.completed),
      quiz: num(o.quiz),
      correct: num(o.correct),
      notes: num(o.notes),
      reviews: num(o.reviews),
      accuracy: num(o.accuracy),
      total: num(o.total),
    }
  }
  const obj = (w && typeof w === 'object' ? w : {}) as Record<string, unknown>
  return {
    thisWeek: bucket(obj.thisWeek),
    lastWeek: bucket(obj.lastWeek),
  }
}

/** 零值判定（"0" / "0%" / "0 天" 均视为零） */
function isZeroValue(v: string): boolean {
  return /^0[^0-9]*$/.test(v.trim())
}

/* ---------- 视图 ---------- */

export function ReportView() {
  const navigate = useAppStore((s) => s.navigate)
  const openReader = useAppStore((s) => s.openReader)
  const [data, setData] = useState<ReportResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/report')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const payload = (await res.json()) as
        | ReportResponse
        | { error?: string }
        | null
      // 形状校验：异常负载（如错误 JSON）落入错误态而非渲染崩溃
      if (!payload || !('overview' in payload)) {
        throw new Error('响应数据格式异常')
      }
      if (
        !Array.isArray(payload.subjects) ||
        !payload.activity ||
        !Array.isArray(payload.activity.days) ||
        !payload.recent ||
        !Array.isArray(payload.recent.sections) ||
        !Array.isArray(payload.recent.notes) ||
        !Array.isArray(payload.recent.reviews)
      ) {
        throw new Error('响应数据格式异常')
      }
      setData(normalizeReport(payload))
    } catch (e) {
      setError(String(e instanceof Error ? e.message : e))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  /**
   * 导出 PDF：临时切换到浅色主题再打印，
   * 避免「深色模式浅字 + 白底」导致打印内容不可读
   */
  const handleExportPdf = () => {
    const root = document.documentElement
    const wasDark = root.classList.contains('dark')
    if (wasDark) root.classList.remove('dark')
    window.print()
    if (wasDark) root.classList.add('dark')
  }

  if (loading) {
    return (
      <div
        className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8"
        aria-busy="true"
        aria-label="学习报告加载中"
      >
        <div className="flex items-end justify-between gap-4">
          <div className="w-full max-w-xl">
            <Skeleton className="h-3.5 w-44" />
            <Skeleton className="mt-4 h-9 w-40" />
            <Skeleton className="mt-4 h-4 w-full max-w-md" />
          </div>
          <Skeleton className="hidden h-9 w-28 shrink-0 sm:block" />
        </div>
        <Skeleton className="mt-6 h-px w-full" />
        <Skeleton className="mt-8 h-28 w-full rounded-xl" />
        <Skeleton className="mt-10 h-72 w-full rounded-xl" />
        <Skeleton className="mt-10 h-36 w-full rounded-xl" />
        <Skeleton className="mt-10 h-64 w-full rounded-xl" />
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-20 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed">
            <AlertCircle
              className="h-7 w-7 text-muted-foreground/60"
              aria-hidden="true"
            />
          </div>
          <h1 className="mt-6 font-serif text-lg font-bold">报告加载失败</h1>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            无法获取学习数据{error ? `（${error}）` : ''}，请检查网络后重试。
          </p>
          <Button variant="outline" className="mt-6" onClick={load}>
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            重新加载
          </Button>
        </div>
      </div>
    )
  }

  const { overview, activity } = data
  const isEmpty =
    overview.completedSections === 0 &&
    overview.quizTotal === 0 &&
    overview.noteCount === 0 &&
    overview.cardsSeen === 0

  const heatmapSummary: ActivitySummary | null = activity.days.length
    ? {
        streak: activity.streak,
        maxStreak: activity.maxStreak,
        activeTotal: activity.activeDays,
        todayTotal: activity.days[activity.days.length - 1]?.total ?? 0,
      }
    : null

  const abilityDims = buildAbilityDims({
    completedSections: overview.completedSections,
    totalSections: overview.totalSections,
    quizTotal: overview.quizTotal,
    quizCorrect: overview.quizCorrect,
    accuracy: overview.accuracy,
    noteCount: overview.noteCount,
    cardsSeen: overview.cardsSeen,
    cardsMastered: overview.cardsMastered,
    activeDays: activity.activeDays,
  })
  const abilityAvg = Math.round(
    abilityDims.reduce((s, d) => s + d.score, 0) / abilityDims.length
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      {/* 报告本体：打印时仅此容器可见 */}
      <div className="print-root">
        {/* 刊头 */}
        <header className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
          <div className="min-w-0 max-w-2xl">
            <p className="bio-eyebrow text-primary">STUDY REPORT · 学习档案</p>
            <h1 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              学习报告
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              汇总四大学科的学习进度、测验成绩、复习记忆与学习活跃度，
              形成一份可存档的阶段学习档案。
            </p>
            <p className="mt-2 text-xs tabular-nums text-muted-foreground/80">
              报告生成于{' '}
              {format(new Date(data.generatedAt), 'yyyy年M月d日 HH:mm', {
                locale: zhCN,
              })}{' '}
              · 数据覆盖近 18 周
            </p>
          </div>
          {!isEmpty && (
            <div className="no-print shrink-0">
              <Button variant="outline" onClick={handleExportPdf}>
                <Printer className="h-4 w-4" aria-hidden="true" />
                导出 PDF
              </Button>
            </div>
          )}
        </header>
        <div className="bio-rule mt-5" aria-hidden />

        {isEmpty ? (
          /* 空数据引导 */
          <div className="flex flex-col items-center py-20 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed">
              <FileChartColumn
                className="h-8 w-8 text-muted-foreground/50"
                aria-hidden="true"
              />
            </div>
            <h2 className="mt-6 font-serif text-lg font-bold">尚无学习数据</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              开始学习后此处将生成你的学习报告：学科进度、测验成绩、复习记忆与学习活跃度。
            </p>
            <div className="no-print mt-6">
              <Button onClick={() => navigate({ name: 'subjects' })}>
                前往学科中心
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        ) : (
          <>
            {/* 概览统计带 */}
            <section className="mt-8" aria-label="学习总览">
              <SectionHead
                eyebrow="Overview"
                title="学习总览"
                meta={`${overview.totalSections} 小节 · 教材约 ${formatWordCount(
                  overview.totalWords ?? 0
                )}`}
              />
              <div className="bio-rule mt-2.5" aria-hidden />
              <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-3 lg:grid-cols-6">
                <StatTile
                  label="已完成小节"
                  value={`${overview.completedSections}`}
                  sub={`全书 ${overview.totalSections} 节 · 已读约 ${formatWordCount(
                    overview.readWords ?? 0
                  )}`}
                />
                <StatTile
                  label="答题总数"
                  value={`${overview.quizTotal}`}
                  sub={`答对 ${overview.quizCorrect} 题`}
                />
                <StatTile
                  label="测验正确率"
                  value={`${overview.accuracy}%`}
                  sub={
                    overview.quizTotal
                      ? `基于 ${overview.quizTotal} 次作答`
                      : '尚未开始测验'
                  }
                />
                <StatTile
                  label="学习笔记"
                  value={`${overview.noteCount}`}
                  sub="研读随记存档"
                />
                <StatTile
                  label="复习卡片"
                  value={`${overview.cardsSeen}`}
                  sub={`已掌握 ${overview.cardsMastered} 张`}
                />
                <StatTile
                  label="错题本"
                  value={`${overview.wrongCount}`}
                  sub={overview.wrongCount ? '按题目去重' : '暂无错题记录'}
                />
              </div>
            </section>

            {/* 本周快照：周环比 */}
            {data.weeklyCompare && (
              <section className="mt-10" aria-label="本周快照">
                <SectionHead
                  eyebrow="Weekly Snapshot"
                  title="本周快照"
                  meta={`周环比 · 本周 ${data.weeklyCompare.thisWeek.total} 项 / 上周 ${data.weeklyCompare.lastWeek.total} 项`}
                />
                <div className="bio-rule mt-2.5" aria-hidden />
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  以最近 7 个自然日为「本周」、之前 7 日为「上周」，
                  对比五项核心学习产出：箭头指示环比变化，正确率按百分点（pp）计。
                </p>
                <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-3 lg:grid-cols-5">
                  <WeekTile
                    label="完成小节"
                    thisVal={data.weeklyCompare.thisWeek.completed}
                    lastVal={data.weeklyCompare.lastWeek.completed}
                  />
                  <WeekTile
                    label="答题次数"
                    thisVal={data.weeklyCompare.thisWeek.quiz}
                    lastVal={data.weeklyCompare.lastWeek.quiz}
                  />
                  <WeekTile
                    label="答题正确率"
                    thisVal={data.weeklyCompare.thisWeek.accuracy}
                    lastVal={data.weeklyCompare.lastWeek.accuracy}
                    unit="%"
                    deltaUnit="pp"
                  />
                  <WeekTile
                    label="学习笔记"
                    thisVal={data.weeklyCompare.thisWeek.notes}
                    lastVal={data.weeklyCompare.lastWeek.notes}
                  />
                  <WeekTile
                    label="复习次数"
                    thisVal={data.weeklyCompare.thisWeek.reviews}
                    lastVal={data.weeklyCompare.lastWeek.reviews}
                  />
                </div>
              </section>
            )}

            {/* 能力画像 */}
            <section className="mt-10" aria-label="能力画像">
              <SectionHead
                eyebrow="Ability Profile"
                title="能力画像"
                meta={`六维综合 ${abilityAvg} 分`}
              />
              <div className="bio-rule mt-2.5" aria-hidden />
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                六维得分由学习数据自动归一化（每维满分 100）：悬停雷达轴或明细行可联动高亮，
                综合分取六维算术平均，用于阶段自评与前后对比。
              </p>
              <div className="mt-5">
                <AbilityRadar dims={abilityDims} />
              </div>
            </section>

            {/* 学科进展 */}
            <section className="mt-10" aria-label="学科进展">
              <SectionHead
                eyebrow="Subject Progress"
                title="学科进展"
                meta="五学科"
              />
              <div className="bio-rule mt-2.5" aria-hidden />
              <div className="mt-5 space-y-6">
                {data.subjects.map((s) => {
                  const theme = getSubjectTheme(s.subjectId)
                  return (
                    <div
                      key={s.subjectId}
                      className={`border-l-2 pl-4 sm:pl-5 ${theme.classes.border}`}
                    >
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-serif text-base font-bold">
                          {s.name}
                        </h3>
                        <span className="bio-eyebrow text-muted-foreground/70">
                          {s.englishName}
                        </span>
                        <span
                          className={`ml-auto font-serif text-sm font-bold tabular-nums ${theme.classes.text}`}
                        >
                          {s.progress}%
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs tabular-nums text-muted-foreground">
                        已完成 {s.completedSections} / {s.totalSections} 小节
                      </p>
                      <div
                        className="mt-2 block h-1 w-full overflow-hidden rounded-full bg-muted"
                        role="progressbar"
                        aria-valuenow={s.progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${s.name}学习进度`}
                      >
                        <span
                          className={`block h-full rounded-full ${theme.classes.bg}`}
                          style={{ width: `${s.progress}%` }}
                        />
                      </div>
                      <p className="mt-2 text-xs tabular-nums text-muted-foreground">
                        答题 {s.quizTotal} · 正确率 {s.accuracy}% · 错题{' '}
                        {s.wrongCount} · 笔记 {s.noteCount}
                      </p>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* 复习记忆 */}
            <section className="mt-10" aria-label="复习记忆">
              <SectionHead eyebrow="Review & Memory" title="复习记忆" />
              <div className="bio-rule mt-2.5" aria-hidden />
              <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border lg:grid-cols-4">
                <StatTile
                  label="已学卡片"
                  value={`${overview.cardsSeen}`}
                  sub="术语卡与要点卡"
                />
                <StatTile
                  label="已掌握"
                  value={`${overview.cardsMastered}`}
                  sub="复习间隔 ≥ 21 天"
                />
                <StatTile
                  label="今日到期"
                  value={`${overview.cardsDue}`}
                  sub="按 SM-2 间隔调度"
                />
                <StatTile
                  label="连续学习"
                  value={`${activity.streak} 天`}
                  sub="近 18 周窗口内"
                />
              </div>
            </section>

            {/* 学习活跃度 */}
            <section className="mt-10" aria-label="学习活跃度">
              <SectionHead
                eyebrow="Learning Activity"
                title="学习活跃度"
                meta="近 18 周 · 四类学习行为"
              />
              <div className="bio-rule mt-2.5" aria-hidden />
              <div className="mt-4 grid grid-cols-3 divide-x divide-border overflow-hidden rounded-xl border bg-card">
                <ActivityStat label="连续学习" value={activity.streak} />
                <ActivityStat label="活跃天数" value={activity.activeDays} />
                <ActivityStat label="最长连续" value={activity.maxStreak} />
              </div>
              <div className="mt-5">
                <ActivityHeatmap
                  days={activity.days}
                  summary={heatmapSummary}
                />
              </div>
            </section>

            {/* 最近动态 */}
            <section className="mt-10" aria-label="最近动态">
              <SectionHead eyebrow="Recent Activity" title="最近动态" />
              <div className="bio-rule mt-2.5" aria-hidden />
              <div className="mt-4 grid gap-x-8 gap-y-8 lg:grid-cols-3">
                <div>
                  <RecentColumnHead
                    title="最近完成小节"
                    count={data.recent.sections.length}
                  />
                  <div className="divide-y">
                    {data.recent.sections.length ? (
                      data.recent.sections.map((s) => (
                        <RecentRow
                          key={s.sectionId}
                          title={s.sectionTitle}
                          sub={s.chapterTitle}
                          time={`${relTime(s.completedAt)}完成`}
                          onClick={() =>
                            openReader(s.subjectId, s.chapterId, s.sectionId)
                          }
                          ariaLabel={`打开小节：${s.sectionTitle}`}
                        />
                      ))
                    ) : (
                      <EmptyColumn />
                    )}
                  </div>
                </div>
                <div>
                  <RecentColumnHead
                    title="最近笔记"
                    count={data.recent.notes.length}
                  />
                  <div className="divide-y">
                    {data.recent.notes.length ? (
                      data.recent.notes.map((n) => (
                        <RecentRow
                          key={n.id}
                          title={n.title}
                          time={`${relTime(n.updatedAt)}更新`}
                          onClick={() => navigate({ name: 'notes' })}
                          ariaLabel={`查看笔记：${n.title}`}
                        />
                      ))
                    ) : (
                      <EmptyColumn />
                    )}
                  </div>
                </div>
                <div>
                  <RecentColumnHead
                    title="最近复习"
                    count={data.recent.reviews.length}
                  />
                  <div className="divide-y">
                    {data.recent.reviews.length ? (
                      data.recent.reviews.map((r) => (
                        <RecentRow
                          key={r.cardId}
                          title={r.label}
                          sub={
                            r.cardId.startsWith('kp-')
                              ? '小节要点卡'
                              : '术语卡'
                          }
                          time={`${relTime(r.lastReviewedAt)}复习`}
                          onClick={() => navigate({ name: 'revision' })}
                          ariaLabel={`前往复习：${r.label}`}
                        />
                      ))
                    ) : (
                      <EmptyColumn />
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* 报告脚注 */}
            <footer className="mt-12 border-t pt-4 text-center text-[11px] leading-relaxed text-muted-foreground/70">
              BioScholar 学习报告 · 由学习进度、答题记录、笔记与复习调度数据自动生成
            </footer>
          </>
        )}
      </div>
    </div>
  )
}

/* ---------- 子组件 ---------- */

/** 区块头：eyebrow + 衬线标题 + 右侧元信息 */
function SectionHead({
  eyebrow,
  title,
  meta,
}: {
  eyebrow: string
  title: string
  meta?: string
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
      <div className="flex items-baseline gap-3">
        <span className="bio-eyebrow text-muted-foreground">{eyebrow}</span>
        <h2 className="font-serif text-lg font-bold">{title}</h2>
      </div>
      {meta && (
        <span className="text-xs tabular-nums text-muted-foreground">
          {meta}
        </span>
      )}
    </div>
  )
}

/** hairline 统计格：衬线大号数字，零值调淡 */
function StatTile({
  label,
  value,
  sub,
}: {
  label: string
  value: string
  sub: string
}) {
  const isZero = isZeroValue(value)
  return (
    <div className="min-w-0 bg-card p-4 transition-colors hover:bg-muted/30 sm:p-5">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div
        className={cn(
          'mt-2 font-serif text-2xl font-bold leading-none tabular-nums sm:text-3xl',
          isZero && 'text-muted-foreground/50'
        )}
      >
        {value}
      </div>
      <div className="mt-2.5 truncate text-[11px] text-muted-foreground/80">
        {sub}
      </div>
    </div>
  )
}

/** 周对比格：本周值 + 环比徽章 + 上周参考值 */
function WeekTile({
  label,
  thisVal,
  lastVal,
  unit,
  deltaUnit,
}: {
  label: string
  thisVal: number
  lastVal: number
  /** 数值后缀（如 %） */
  unit?: string
  /** 环比增量单位（默认空，正确率用 pp） */
  deltaUnit?: string
}) {
  const delta = thisVal - lastVal
  const up = delta > 0
  const flat = delta === 0
  return (
    <div className="min-w-0 bg-card p-4 transition-colors hover:bg-muted/30 sm:p-5">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div className="mt-2 flex items-baseline gap-2">
        <span
          className={cn(
            'font-serif text-2xl font-bold leading-none tabular-nums sm:text-3xl',
            thisVal === 0 && 'text-muted-foreground/50'
          )}
        >
          {thisVal}
          {unit && (
            <span className="ml-0.5 font-sans text-sm font-normal text-muted-foreground">
              {unit}
            </span>
          )}
        </span>
        {/* 环比徽章 */}
        <span
          className={cn(
            'inline-flex shrink-0 items-center gap-0.5 rounded-full border px-1.5 py-0.5 font-mono text-[10px] font-semibold tabular-nums',
            flat
              ? 'border-border bg-muted/50 text-muted-foreground/70'
              : up
                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                : 'border-rose-500/40 bg-rose-500/10 text-rose-700 dark:text-rose-400'
          )}
          title={flat ? '与上周持平' : `上周 ${lastVal}${unit ?? ''}，${up ? '增加' : '减少'} ${Math.abs(delta)}${deltaUnit ?? ''}`}
        >
          {flat ? (
            '—'
          ) : up ? (
            <TrendingUp className="h-3 w-3" aria-hidden="true" />
          ) : (
            <TrendingDown className="h-3 w-3" aria-hidden="true" />
          )}
          {flat ? '' : `${Math.abs(delta)}${deltaUnit ?? ''}`}
          <span className="sr-only">
            {flat ? '与上周持平' : `较上周${up ? '增加' : '减少'} ${Math.abs(delta)}${deltaUnit ?? ''}`}
          </span>
        </span>
      </div>
      <div className="mt-2.5 truncate text-[11px] tabular-nums text-muted-foreground/80">
        上周 {lastVal}
        {unit ?? ''}
      </div>
    </div>
  )
}

/** 活跃度统计格（天数为单位的紧凑行） */
function ActivityStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-0 px-4 py-3.5 sm:px-5">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div
        className={cn(
          'mt-1.5 font-serif text-xl font-bold leading-none tabular-nums',
          value === 0 && 'text-muted-foreground/50'
        )}
      >
        {value}
        <span className="ml-1 font-sans text-xs font-normal text-muted-foreground">
          天
        </span>
      </div>
    </div>
  )
}

/** 最近动态列表头 */
function RecentColumnHead({ title, count }: { title: string; count: number }) {
  return (
    <div className="flex items-baseline justify-between gap-2 pb-1.5">
      <h3 className="font-serif text-sm font-bold">{title}</h3>
      <span className="text-[11px] tabular-nums text-muted-foreground">
        {count} 条
      </span>
    </div>
  )
}

/** 最近动态条目行 */
function RecentRow({
  title,
  sub,
  time,
  onClick,
  ariaLabel,
}: {
  title: string
  sub?: string
  time: string
  onClick: () => void
  ariaLabel: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="group flex w-full items-start gap-2.5 py-3 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring hover:bg-accent/40"
    >
      <span
        className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40"
        aria-hidden="true"
      />
      <span className="min-w-0 flex-1">
        <span className="block truncate font-serif text-sm font-bold leading-snug">
          {title}
        </span>
        {sub && (
          <span className="mt-0.5 block truncate text-xs text-muted-foreground">
            {sub}
          </span>
        )}
        <span className="mt-1 block text-[11px] tabular-nums text-muted-foreground/70">
          {time}
        </span>
      </span>
      <ArrowRight
        className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground/40 opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-foreground"
        aria-hidden="true"
      />
    </button>
  )
}

/** 最近动态空列 */
function EmptyColumn() {
  return (
    <p className="py-6 text-xs text-muted-foreground/70">
      暂无记录
    </p>
  )
}
