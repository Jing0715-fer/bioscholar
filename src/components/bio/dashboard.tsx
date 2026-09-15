'use client'

import { useEffect, useState } from 'react'
import { useAppStore } from '@/lib/store'
import { subjects, allQuizQuestions } from '@/data/biology'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
  BookOpenCheck,
  ClipboardCheck,
  StickyNote,
  Target,
  ArrowRight,
  MessageSquareText,
  GraduationCap,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
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
      {/* 欢迎横幅 */}
      <section className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 p-6 text-white shadow-lg sm:p-8">
        <div className="bio-dna-bg absolute inset-0 opacity-60" aria-hidden />
        <div className="relative">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <GraduationCap className="h-4 w-4" />
            基于「101计划」生物学核心课程教材体系
          </div>
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            生命科学学习之旅
          </h1>
          <p className="mt-2 max-w-xl text-sm text-white/85">
            覆盖生物化学、分子生物学、细胞生物学与生物物理学四大基础学科，
            {subjects.reduce((a, s) => a + s.chapters.length, 0)} 章教材级知识点、
            {allQuizQuestions.length} 道自测题与 AI 智能助教，助你系统掌握生命科学的分子逻辑。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              onClick={() => navigate({ name: 'subjects' })}
              className="bg-white text-emerald-700 hover:bg-white/90"
            >
              <BookOpenCheck className="mr-2 h-4 w-4" />
              进入学科中心
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setAssistantContext(null)
                navigate({ name: 'assistant' })
              }}
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
            >
              <MessageSquareText className="mr-2 h-4 w-4" />
              询问 AI 助教
            </Button>
          </div>
        </div>
      </section>

      {/* 统计卡片 */}
      <section className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4" aria-label="学习统计">
        <StatCard
          icon={<BookOpenCheck className="h-5 w-5" />}
          label="已学小节"
          value={`${totalCompleted}`}
          sub={`共 ${TOTAL_SECTIONS} 节 · ${overallPercent}%`}
          iconClass="bg-emerald-500/10 text-emerald-600"
        />
        <StatCard
          icon={<ClipboardCheck className="h-5 w-5" />}
          label="答题总数"
          value={`${stats?.quizTotal ?? 0}`}
          sub={`答对 ${stats?.quizCorrect ?? 0} 题`}
          iconClass="bg-violet-500/10 text-violet-600"
        />
        <StatCard
          icon={<Target className="h-5 w-5" />}
          label="正确率"
          value={`${stats?.quizAccuracy ?? 0}%`}
          sub={stats?.quizTotal ? `基于 ${stats.quizTotal} 次作答` : '尚未开始测验'}
          iconClass="bg-amber-500/10 text-amber-600"
        />
        <StatCard
          icon={<StickyNote className="h-5 w-5" />}
          label="学习笔记"
          value={`${stats?.noteCount ?? 0}`}
          sub="随时记录灵感"
          iconClass="bg-rose-500/10 text-rose-600"
        />
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* 学科进度 */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <TrendingUp className="h-4 w-4 text-primary" />
              学科学习进度
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
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
                  className="group block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
                  aria-label={`进入${subject.name}，进度 ${percent}%`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${theme.classes.bg}`}
                    >
                      <theme.icon className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="truncate text-sm font-semibold group-hover:underline">
                          {subject.name}
                          <span className="ml-2 text-xs font-normal text-muted-foreground">
                            {subject.chapters.length} 章 · {total} 节
                          </span>
                        </span>
                        <span className={`text-xs font-bold tabular-nums ${theme.classes.text}`}>
                          {percent}%
                        </span>
                      </div>
                      <Progress
                        value={percent}
                        className="mt-1.5 h-2"
                        aria-label={`${subject.name}进度`}
                      />
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                </button>
              )
            })}
          </CardContent>
        </Card>

        {/* 继续学习 + 活跃度 */}
        <div className="flex flex-col gap-6">
          {lastRead ? (
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Sparkles className="h-4 w-4 text-primary" />
                  继续学习
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">{lastRead.sectionTitle}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {lastRead.chapterTitle}
                </p>
                <Button
                  size="sm"
                  className="mt-3 w-full"
                  onClick={() =>
                    openReader(
                      lastRead.subjectId,
                      lastRead.chapterId,
                      lastRead.sectionId
                    )
                  }
                >
                  <BookOpenCheck className="mr-2 h-4 w-4" />
                  继续阅读
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="pt-6 text-center">
                <BookOpenCheck className="mx-auto h-8 w-8 text-muted-foreground/40" />
                <p className="mt-2 text-sm text-muted-foreground">
                  还没有阅读记录，从学科中心开始你的第一课吧
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-3"
                  onClick={() => navigate({ name: 'subjects' })}
                >
                  开始学习
                </Button>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">近 14 天学习活动</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 教材依据 */}
      <section className="mt-6 grid gap-4 sm:grid-cols-2" aria-label="教材依据">
        {subjects.map((subject) => {
          const theme = getSubjectTheme(subject.id)
          return (
            <Card key={subject.id} className={`transition-shadow hover:shadow-md ${theme.classes.hover}`}>
              <CardContent className="flex gap-4 p-5">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${theme.classes.bg}`}
                >
                  <theme.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold">{subject.name}</span>
                    <Badge variant="outline" className={`text-[10px] ${theme.classes.badge}`}>
                      {subject.englishName}
                    </Badge>
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {subject.textbook}
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </section>
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
  sub,
  iconClass,
}: {
  icon: React.ReactNode
  label: string
  value: string
  sub: string
  iconClass: string
}) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconClass}`}>
            {icon}
          </span>
          <div className="min-w-0">
            <div className="text-xs text-muted-foreground">{label}</div>
            <div className="text-xl font-bold tabular-nums sm:text-2xl">{value}</div>
          </div>
        </div>
        <div className="mt-2 truncate text-[11px] text-muted-foreground">{sub}</div>
      </CardContent>
    </Card>
  )
}
