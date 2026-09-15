'use client'

import { useEffect, useState } from 'react'
import { useAppStore } from '@/lib/store'
import { subjects, allQuizQuestions } from '@/data/biology'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import { subjectCovers, heroImage } from '@/data/illustrations'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as ChartTooltip,
  XAxis,
  YAxis,
} from 'recharts'

interface StatsResponse {
  completedCount: number
  quizTotal: number
  quizCorrect: number
  quizAccuracy: number
  noteCount: number
  activity: Array<{ date: string; completed: number; quiz: number }>
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

  useEffect(() => {
    hydrateCompleted()
    fetch('/api/stats')
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {})
  }, [hydrateCompleted])

  const totalCompleted = completedSections.length
  const overallPercent = Math.round((totalCompleted / TOTAL_SECTIONS) * 100)

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      {/* 编辑式刊头：左文右图 */}
      <section className="bio-paper relative overflow-hidden rounded-2xl border bg-card">
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="bio-eyebrow text-primary">
              教育部「101计划」生物学核心课程
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              生命科学研习堂
            </h1>
            <div className="bio-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              覆盖生物化学、分子生物学、细胞生物学与生物物理学四大基础学科，
              系统梳理生命的分子逻辑。
            </p>
            <p className="mt-2 text-xs tabular-nums text-muted-foreground/80">
              {TOTAL_CHAPTERS} 章 · {TOTAL_SECTIONS} 小节 ·{' '}
              {allQuizQuestions.length} 道自测题 · AI 智能助教
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

      {/* 统计条：数字优先，细线分隔 */}
      <section
        className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border lg:grid-cols-4"
        aria-label="学习统计"
      >
        <StatTile
          label="已学小节"
          value={`${totalCompleted}`}
          sub={`全书 ${TOTAL_SECTIONS} 节 · ${overallPercent}%`}
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
          label="学习笔记"
          value={`${stats?.noteCount ?? 0}`}
          sub="随时记录灵感"
        />
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* 学科进度：封面缩略图 + 学科色左边框 */}
        <Card className="shadow-none lg:col-span-2">
          <CardContent className="px-6">
            <div className="flex items-center gap-2.5 border-b pb-3">
              <span className="h-2.5 w-2.5 rounded-[2px] bg-primary/70" aria-hidden />
              <h2 className="font-serif text-lg font-bold">学科学习进度</h2>
              <span className="ml-auto text-xs tabular-nums text-muted-foreground">
                四学科 · {TOTAL_SECTIONS} 小节
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
                        {subject.chapters.length} 章 · {total} 小节 · {done} 节已完成
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

        {/* 继续学习 + 活跃度 */}
        <div className="flex flex-col gap-6">
          {lastRead ? (
            <Card className="border-primary/25 bg-primary/5 shadow-none">
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
            <Card className="shadow-none">
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

          <Card className="shadow-none">
            <CardContent className="px-6">
              <div className="flex items-center gap-2.5 border-b pb-3">
                <span className="h-2.5 w-2.5 rounded-[2px] bg-primary/70" aria-hidden />
                <h2 className="font-serif text-lg font-bold">近 14 天学习活动</h2>
              </div>
              <div className="mt-4">
                {stats && stats.activity.some((a) => a.completed + a.quiz > 0) ? (
                  <div className="h-36">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={stats.activity} barGap={1}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                        <XAxis
                          dataKey="date"
                          tickFormatter={(v: string) => v.slice(5)}
                          tick={{ fontSize: 10 }}
                          interval={2}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          allowDecimals={false}
                          tick={{ fontSize: 10 }}
                          width={20}
                          axisLine={false}
                          tickLine={false}
                        />
                        <ChartTooltip
                          contentStyle={{
                            borderRadius: 8,
                            border: '1px solid var(--border)',
                            background: 'var(--popover)',
                            fontSize: 12,
                          }}
                          labelFormatter={(v: string) => v.slice(5).replace('-', '/')}
                        />
                        <Bar dataKey="completed" name="完成小节" fill="var(--primary)" radius={[3, 3, 0, 0]} maxBarSize={12} />
                        <Bar dataKey="quiz" name="答题" fill="#a78bfa" radius={[3, 3, 0, 0]} maxBarSize={12} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <p className="flex h-36 items-center justify-center text-center text-xs text-muted-foreground">
                    完成小节或答题后，这里会展示你的学习热力
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

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
}: {
  label: string
  value: string
  sub: string
}) {
  return (
    <div className="bg-card p-4 sm:p-5">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-2 font-serif text-2xl font-bold tabular-nums leading-none sm:text-3xl">
        {value}
      </div>
      <div className="mt-2.5 truncate text-[11px] text-muted-foreground/80">{sub}</div>
    </div>
  )
}
