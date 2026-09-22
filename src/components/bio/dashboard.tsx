'use client'

import { useEffect, useState } from 'react'
import { useAppStore } from '@/lib/store'
import {
  subjects,
  allQuizQuestions,
  totalWordCount,
  getSubjectWordCount,
  sectionWordCounts,
} from '@/data/biology'
import { glossary } from '@/data/glossary'
import { formatWordCount } from '@/lib/word-count'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import { subjectCovers, heroImage } from '@/data/illustrations'
import {
  ActivityHeatmap,
  type ActivityDay,
  type ActivitySummary,
} from '@/components/bio/activity-heatmap'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight, Layers, NotebookPen } from 'lucide-react'

interface StatsResponse {
  completedCount: number
  quizTotal: number
  quizCorrect: number
  quizAccuracy: number
  noteCount: number
  dueCards: number
  wrongCount: number
  activity: Array<{ date: string; completed: number; quiz: number; reviews?: number }>
}

const TOTAL_SECTIONS = subjects.reduce(
  (a, s) => a + s.chapters.reduce((b, c) => b + c.sections.length, 0),
  0
)
const TOTAL_CHAPTERS = subjects.reduce((a, s) => a + s.chapters.length, 0)

export function Dashboard() {
  const navigate = useAppStore((s) => s.navigate)
  const openReader = useAppStore((s) => s.openReader)
  const lastRead = useAppStore((s) => s.lastRead)
  const completedSections = useAppStore((s) => s.completedSections)
  const hydrateCompleted = useAppStore((s) => s.hydrateCompleted)
  const setAssistantContext = useAppStore((s) => s.setAssistantContext)
  const [stats, setStats] = useState<StatsResponse | null>(null)
  const [heatmapDays, setHeatmapDays] = useState<ActivityDay[]>([])
  const [heatmapSummary, setHeatmapSummary] = useState<ActivitySummary | null>(null)

  useEffect(() => {
    hydrateCompleted()
    fetch('/api/stats')
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {})
    fetch('/api/activity')
      .then((r) => r.json())
      .then((d: { days: ActivityDay[] } & ActivitySummary) => {
        setHeatmapDays(d.days ?? [])
        setHeatmapSummary({
          streak: d.streak,
          maxStreak: d.maxStreak,
          activeTotal: d.activeTotal,
          todayTotal: d.todayTotal,
        })
      })
      .catch(() => {})
  }, [hydrateCompleted])

  const totalCompleted = completedSections.length
  const overallPercent = Math.round((totalCompleted / TOTAL_SECTIONS) * 100)
  // 累计已读字数（已完成小节的正文字数合计）
  const readWords = completedSections.reduce(
    (a, sid) => a + (sectionWordCounts[sid] ?? 0),
    0
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      {/* 编辑式刊头：左文右图 */}
      <section className="bio-paper relative overflow-hidden rounded-2xl border bg-card">
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="bio-eyebrow text-primary">
              生命科学核心课程体系
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              生命科学研习堂
            </h1>
            <div className="bio-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              覆盖生物化学、分子生物学、细胞生物学、生物物理学、微生物学、免疫学、神经生物学、生物信息学、病毒学、结构生物学实验方法、X射线晶体学与电子显微学十二大基础学科，
              系统梳理生命的分子逻辑、细胞世界与结构解析方法。
            </p>
            <p className="mt-2 text-xs tabular-nums text-muted-foreground/80">
              {TOTAL_CHAPTERS} 章 · {TOTAL_SECTIONS} 小节 · 教材全文约{' '}
              {formatWordCount(totalWordCount)} · {allQuizQuestions.length} 道自测题 ·
              AI 智能助教
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => navigate({ name: 'subjects' })}>
                进入学科中心
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setAssistantContext(null)
                  navigate({ name: 'assistant' })
                }}
              >
                询问 AI 助教
              </Button>
            </div>
          </div>
          <div className="relative min-h-[200px] border-t bg-primary/5 sm:min-h-[240px] lg:min-h-full lg:border-l lg:border-t-0 lg:border-border/60">
            <img
              src={heroImage}
              alt="生命科学主视觉：从分子结构到细胞体系的教材级科学示意插图"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 统计条：六格，数字优先，细线分隔 */}
      <section
        className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-3 lg:grid-cols-6"
        aria-label="学习统计"
      >
        <StatTile
          label="已学小节"
          value={`${totalCompleted}`}
          sub={`全书 ${TOTAL_SECTIONS} 节 ${overallPercent}% · 已读 ${formatWordCount(readWords)}`}
        />
        <StatTile
          label="答题总数"
          value={`${stats?.quizTotal ?? 0}`}
          sub={`答对 ${stats?.quizCorrect ?? 0} 题`}
        />
        <StatTile
          label="测验正确率"
          value={`${stats?.quizAccuracy ?? 0}%`}
          sub={stats?.quizTotal ? `基于 ${stats.quizTotal} 次作答` : '尚未开始测验'}
        />
        <StatTile
          label="待复习卡片"
          value={`${stats?.dueCards ?? 0}`}
          sub={
            stats?.dueCards
              ? '今日到期 · 按 SM-2 调度'
              : `${glossary.length} 术语卡在库 · 无今日到期`
          }
          onClick={() => navigate({ name: 'revision' })}
        />
        <StatTile
          label="错题本"
          value={`${stats?.wrongCount ?? 0}`}
          sub={stats?.wrongCount ? '待攻克错题' : '暂无待复习错题'}
          onClick={() => navigate({ name: 'wrongbook' })}
        />
        <StatTile
          label="学习笔记"
          value={`${stats?.noteCount ?? 0}`}
          sub="随时记录灵感"
        />
      </section>

      <div className="mt-6 grid min-w-0 gap-6 lg:grid-cols-3">
        {/* 学科进度：封面缩略图 + 学科色左边框 */}
        <Card className="min-w-0 shadow-none lg:col-span-2">
          <CardContent className="px-6">
            <div className="flex items-center gap-2.5 border-b pb-3">
              <span className="h-2.5 w-2.5 rounded-[2px] bg-primary/70" aria-hidden />
              <h2 className="font-serif text-lg font-bold">学科学习进度</h2>
              <span className="ml-auto text-xs tabular-nums text-muted-foreground">
                九学科 · {TOTAL_SECTIONS} 小节 · 约 {formatWordCount(totalWordCount)}
              </span>
            </div>
            <div className="mt-4 space-y-2">
              {subjects.map((subject) => {
                const theme = getSubjectTheme(subject.id)
                const total = subject.chapters.reduce(
                  (a, c) => a + c.sections.length,
                  0
                )
                const done = subject.chapters.reduce(
                  (a, c) =>
                    a + c.sections.filter((s) => completedSections.includes(s.id)).length,
                  0
                )
                const percent = total ? Math.round((done / total) * 100) : 0
                return (
                  <button
                    key={subject.id}
                    onClick={() => navigate({ name: 'subjects' })}
                    className={`group flex w-full items-center gap-4 rounded-lg border-l-2 p-2.5 pl-3.5 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring hover:bg-accent/40 ${theme.classes.border}`}
                    aria-label={`进入${subject.name}，进度 ${percent}%`}
                  >
                    <span
                      className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-md sm:h-24 sm:w-40 ${theme.classes.bgSoft}`}
                    >
                      <img
                        src={subjectCovers[subject.id]}
                        alt={`${subject.name}学科封面插图`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-baseline justify-between gap-2">
                        <span className="truncate font-serif text-base font-bold">
                          {subject.name}
                          <span className="ml-2 font-sans text-[11px] font-normal text-muted-foreground">
                            {subject.englishName}
                          </span>
                        </span>
                        <span
                          className={`shrink-0 font-serif text-sm font-bold tabular-nums ${theme.classes.text}`}
                        >
                          {percent}%
                        </span>
                      </span>
                      <span className="mt-1 block truncate text-xs tabular-nums text-muted-foreground">
                        {subject.chapters.length} 章 · {total} 小节 · 约{' '}
                        {formatWordCount(getSubjectWordCount(subject.id))} · {done} 节已完成
                      </span>
                      <span
                        className="mt-2 block h-1 w-full overflow-hidden rounded-full bg-muted"
                        role="progressbar"
                        aria-valuenow={percent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${subject.name}学习进度`}
                      >
                        <span
                          className={`block h-full rounded-full ${theme.classes.bg}`}
                          style={{ width: `${percent}%` }}
                        />
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* 右栏：继续阅读 + 今日速览 */}
        <div className="flex min-w-0 flex-col gap-6">
          {lastRead ? (
            <Card className="min-w-0 border-primary/25 bg-primary/5 shadow-none">
              <CardContent className="px-6">
                <p className="bio-eyebrow text-primary">继续阅读</p>
                <div className="bio-rule mt-2.5" aria-hidden />
                <p className="mt-3 font-serif text-base font-bold leading-snug">
                  {lastRead.sectionTitle}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {lastRead.chapterTitle}
                </p>
                <Button
                  size="sm"
                  className="mt-4 w-full"
                  onClick={() =>
                    openReader(
                      lastRead.subjectId,
                      lastRead.chapterId,
                      lastRead.sectionId
                    )
                  }
                >
                  继续阅读
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="min-w-0 shadow-none">
              <CardContent className="px-6">
                <p className="bio-eyebrow text-muted-foreground">开始学习</p>
                <div className="bio-rule mt-2.5" aria-hidden />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  还没有阅读记录，从学科中心开始你的第一课吧。
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-4 w-full"
                  onClick={() => navigate({ name: 'subjects' })}
                >
                  前往学科中心
                </Button>
              </CardContent>
            </Card>
          )}

          {/* 今日速览：到期卡 + 错题 */}
          <Card className="min-w-0 shadow-none">
            <CardContent className="px-6">
              <div className="flex items-center gap-2.5 border-b pb-3">
                <span className="h-2.5 w-2.5 rounded-[2px] bg-primary/70" aria-hidden />
                <h2 className="font-serif text-lg font-bold">今日速览</h2>
                <span className="ml-auto text-[11px] tabular-nums text-muted-foreground">
                  {heatmapSummary?.todayTotal ?? 0} 项活动
                </span>
              </div>
              <div className="mt-2 divide-y">
                <button
                  className="group flex w-full items-center gap-3 py-3 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring hover:bg-accent/40"
                  onClick={() => navigate({ name: 'revision' })}
                >
                  <Layers
                    className="h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="min-w-0 flex-1 text-sm">
                    复习卡片
                    <span className="ml-2 text-xs text-muted-foreground">
                      {stats?.dueCards
                        ? `${stats.dueCards} 张今日到期`
                        : '新卡待解锁'}
                    </span>
                  </span>
                  <ArrowRight
                    className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                    aria-hidden="true"
                  />
                </button>
                <button
                  className="group flex w-full items-center gap-3 py-3 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring hover:bg-accent/40"
                  onClick={() => navigate({ name: 'wrongbook' })}
                >
                  <NotebookPen
                    className="h-4 w-4 shrink-0 text-amber-700 dark:text-amber-400"
                    aria-hidden="true"
                  />
                  <span className="min-w-0 flex-1 text-sm">
                    错题本
                    <span className="ml-2 text-xs text-muted-foreground">
                      {stats?.wrongCount ? `${stats.wrongCount} 道待攻克` : '暂无错题'}
                    </span>
                  </span>
                  <ArrowRight
                    className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 学习热力图：GitHub 风格活动日历（默认折叠为摘要行，节省版面） */}
      <section className="mt-6" aria-label="学习热力图">
        <Card className="min-w-0 shadow-none">
          <CardContent className="px-6 py-4 sm:px-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-[2px] bg-primary/70" aria-hidden />
                  <h2 className="font-serif text-lg font-bold">学习热力图</h2>
                </div>
                {heatmapSummary && heatmapSummary.streak > 0 && (
                  <span className="text-xs tabular-nums text-muted-foreground">
                    连续学习{' '}
                    <span className="font-serif text-base font-bold text-primary">
                      {heatmapSummary.streak}
                    </span>{' '}
                    天
                  </span>
                )}
              </div>
              <p className="bio-eyebrow text-muted-foreground">
                Learning Activity · 近 18 周
              </p>
            </div>
            <div className="mt-2.5">
              <ActivityHeatmap
                days={heatmapDays}
                summary={heatmapSummary}
                defaultCollapsed
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 教材体系依据：编辑式条目 */}
      <section className="mt-8" aria-label="教材体系依据">
        <div className="flex items-baseline gap-3">
          <span className="bio-eyebrow text-muted-foreground">Textbook Foundation</span>
          <h2 className="font-serif text-lg font-bold">教材体系依据</h2>
        </div>
        <div className="bio-rule mt-2.5" aria-hidden />
        <div className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2">
          {subjects.map((subject) => {
            const theme = getSubjectTheme(subject.id)
            const total = subject.chapters.reduce(
              (a, c) => a + c.sections.length,
              0
            )
            return (
              <div key={subject.id} className={`border-l-2 pl-4 ${theme.classes.border}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-serif text-base font-bold">{subject.name}</h3>
                  <span className="bio-eyebrow text-muted-foreground/70">
                    {subject.englishName}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {subject.textbook}
                </p>
                <p className="mt-1.5 text-[11px] tabular-nums text-muted-foreground/70">
                  {subject.chapters.length} 章 · {total} 小节
                </p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

function StatTile({
  label,
  value,
  sub,
  onClick,
}: {
  label: string
  value: string
  sub: string
  /** 可点击统计格（跳转对应视图） */
  onClick?: () => void
}) {
  const interactive = typeof onClick === 'function'
  // 零值调淡：避免满屏 0 带来"未初始化"的焦虑感
  const isZero = /^0(%?)$/.test(value.trim())
  return (
    <div
      className={
        interactive
          ? 'group relative cursor-pointer bg-card p-4 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring hover:bg-accent/40 sm:p-5'
          : 'bg-card p-4 sm:p-5'
      }
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClick?.()
              }
            }
          : undefined
      }
      aria-label={interactive ? `${label}：${sub}，点击查看` : undefined}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs text-muted-foreground">{label}</span>
        {interactive && (
          <ArrowRight
            className="h-3 w-3 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
            aria-hidden="true"
          />
        )}
      </div>
      <div
        className={cn(
          'mt-2 font-serif text-2xl font-bold tabular-nums leading-none sm:text-3xl',
          isZero && 'text-muted-foreground/50'
        )}
      >
        {value}
      </div>
      <div className="mt-2.5 truncate text-[11px] text-muted-foreground/80">{sub}</div>
    </div>
  )
}
