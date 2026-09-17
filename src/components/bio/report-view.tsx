'use client'

import { useEffect, useState } from 'react'
import { FileBarChart, BookOpen, NotebookPen, ClipboardCheck, RotateCcw } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { allQuizQuestions } from '@/lib/quiz-data'
import { allGlossaryTerms } from '@/data/glossary'
import { formatWordCount } from '@/lib/word-count'
import { getSubjectTheme } from './subject-theme'
import { cn } from '@/lib/utils'
import { useAppStore } from '@/lib/store'
import type { SubjectId } from '@/lib/types'

interface ReportData {
  overview: {
    subjects: number
    chapters: number
    sections: number
    completed: number
    notes: number
    quizAttempts: number
    readWords: number
    totalWords: number
  } | null
  subjectStats: Array<{
    id: SubjectId
    name: string
    color: string
    chapters: number
    sections: number
    completedSections: number
    percent: number
    quizAttempts: number
    quizCorrect: number
    accuracy: number | null
    words: number
  }>
}

export function ReportView() {
  const [data, setData] = useState<ReportData | null>(null)
  const [loading, setLoading] = useState(true)
  const [activity, setActivity] = useState<Record<string, { read: number; notes: number; quiz: number; quizCorrect: number; review: number }>>({})
  const completed = useAppStore((s) => s.completedSections)

  useEffect(() => {
    Promise.all([
      fetch('/api/report').then((r) => r.json()),
      fetch('/api/activity').then((r) => r.json()),
    ])
      .then(([report, act]) => {
        setData(report)
        setActivity(act.byDay ?? {})
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <div className="py-16 text-center text-sm text-muted-foreground">统计生成中…</div>
  }

  const overview = data?.overview
  const days = Object.entries(activity)
  const maxAct = Math.max(1, ...days.map(([, v]) => v.read + v.notes + v.quiz + v.review))

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 md:px-6 md:py-8">
      <header className="mb-6 flex items-center gap-2">
        <FileBarChart className="h-5 w-5 text-primary" />
        <div>
          <h1 className="text-xl font-bold tracking-tight md:text-2xl">学习报告</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            教材约 {overview ? formatWordCount(overview.totalWords) : '—'} · 已读约{' '}
            {overview ? formatWordCount(overview.readWords) : '—'}
          </p>
        </div>
      </header>

      {/* 概览统计 */}
      <section className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { icon: BookOpen, label: '已读小节', value: `${completed.size} / ${overview?.sections ?? '—'}` },
          { icon: NotebookPen, label: '学习笔记', value: `${overview?.notes ?? 0} 篇` },
          { icon: ClipboardCheck, label: '测验作答', value: `${overview?.quizAttempts ?? 0} 次` },
          { icon: RotateCcw, label: '术语词典', value: `${allGlossaryTerms.length} 条` },
        ].map((s) => (
          <Card key={s.label} className="p-4">
            <s.icon className="h-4 w-4 text-primary" />
            <div className="mt-2 text-xl font-bold tabular-nums">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </Card>
        ))}
      </section>

      {/* 七日活动 */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">近 7 天学习活动</CardTitle>
        </CardHeader>
        <CardContent>
          {days.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              暂无活动记录——开始阅读或测验后这里会有图表。
            </p>
          ) : (
            <div className="flex h-32 items-end gap-2">
              {days.map(([day, v]) => {
                const total = v.read + v.notes + v.quiz + v.review
                return (
                  <div key={day} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t bg-gradient-to-t from-primary/40 to-primary"
                      style={{ height: `${(total / maxAct) * 100}%`, minHeight: total > 0 ? 4 : 2 }}
                      title={`${day}：读 ${v.read} · 笔记 ${v.notes} · 测验 ${v.quiz} · 复习 ${v.review}`}
                    />
                    <span className="text-[10px] text-muted-foreground">
                      {day.slice(5)}
                    </span>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* 学科进度表 */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">学科进度与测验正确率</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {(data?.subjectStats ?? []).map((s) => {
            const theme = getSubjectTheme(s.id)
            return (
              <div key={s.id} className="flex items-center gap-3">
                <div className={cn('flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-white', theme.classes.bg)}>
                  {(() => {
                    const T = theme.icon
                    return <T className="h-3.5 w-3.5" />
                  })()}
                </div>
                <div className="w-20 shrink-0 text-sm font-medium">{s.name}</div>
                <div className="min-w-0 flex-1">
                  <Progress value={s.percent} className="h-1.5" />
                  <div className="mt-1 flex items-center gap-2 text-[11px] text-muted-foreground">
                    <span className="tabular-nums">
                      {s.completedSections}/{s.sections} 节 · {s.percent}%
                    </span>
                    <span>约 {formatWordCount(s.words)}</span>
                  </div>
                </div>
                {s.quizAttempts > 0 ? (
                  <Badge
                    variant="outline"
                    className={cn(
                      'shrink-0 tabular-nums',
                      (s.accuracy ?? 0) >= 80
                        ? 'border-emerald-500/40 text-emerald-700 dark:text-emerald-400'
                        : (s.accuracy ?? 0) >= 60
                          ? 'border-amber-500/40 text-amber-700 dark:text-amber-400'
                          : 'border-destructive/40 text-destructive'
                    )}
                  >
                    {s.accuracy}% 正确
                  </Badge>
                ) : (
                  <span className="shrink-0 text-[11px] text-muted-foreground/60">未测验</span>
                )}
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
