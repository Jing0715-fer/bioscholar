'use client'

import { useMemo } from 'react'
import {
  ArrowRight,
  BookOpen,
  BookMarked,
  Library,
  MessagesSquare,
  NotebookPen,
  RotateCcw,
  ClipboardX,
  FileBarChart,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useAppStore } from '@/lib/store'
import { subjects, allSections, subjectWordCounts, totalWordCount } from '@/data/biology'
import { allGlossaryTerms } from '@/data/glossary'
import { allQuizQuestions } from '@/lib/quiz-data'
import { formatWordCount } from '@/lib/word-count'
import { getSubjectTheme } from './subject-theme'
import { cn } from '@/lib/utils'

const QUICK = [
  { view: { name: 'subjects' }, label: '学科中心', icon: BookOpen, desc: '八大教材体系' },
  { view: { name: 'glossary' }, label: '术语词典', icon: Library, desc: `${allGlossaryTerms.length} 条术语` },
  { view: { name: 'gallery' }, label: '教材图库', icon: BookMarked, desc: '插图浏览' },
  { view: { name: 'assistant' }, label: 'AI 助教', icon: MessagesSquare, desc: '智能问答' },
  { view: { name: 'revision' }, label: '复习卡片', icon: RotateCcw, desc: '间隔重复' },
  { view: { name: 'wrongbook' }, label: '错题本', icon: ClipboardX, desc: '错题回顾' },
  { view: { name: 'notes' }, label: '学习笔记', icon: NotebookPen, desc: '知识沉淀' },
  { view: { name: 'report' }, label: '学习报告', icon: FileBarChart, desc: '数据统计' },
] as const

export function Dashboard() {
  const setView = useAppStore((s) => s.setView)
  const completed = useAppStore((s) => s.completedSections)

  const stats = useMemo(() => {
    const sections = allSections()
    const total = sections.length
    const done = sections.filter((s) => completed.has(s.section.id)).length
    const readWords = sections
      .filter((s) => completed.has(s.section.id))
      .reduce((acc, s) => acc + (subjectWordCounts[s.subject.id] ? 0 : 0), 0)
    return { total, done, percent: total ? Math.round((done / total) * 100) : 0 }
  }, [completed])

  const lastSection = useMemo(() => {
    const sections = allSections()
    for (const s of sections) {
      if (completed.has(s.section.id)) return s
    }
    return sections[0]
  }, [completed])

  const TOTAL_CHAPTERS = subjects.reduce((a, s) => a + s.chapters.length, 0)

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
      {/* 刊头 */}
      <section className="mb-8 overflow-hidden rounded-2xl border bg-gradient-to-br from-emerald-50 via-teal-50/60 to-white dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-background">
        <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:p-8">
          <object
            type="image/svg+xml"
            data="/images/bio/covers/hero-bioscience.svg"
            className="hidden h-44 w-64 shrink-0 rounded-lg md:block"
            aria-label="生命科学插画作刊头"
          />
          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-2">
              <Badge className="bg-primary/15 text-primary border-primary/30">
                101 计划 · 生物学核心课程
              </Badge>
            </div>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              生命科学智能学习平台
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground md:text-[15px]">
              覆盖生物化学、分子生物学、细胞生物学、生物物理学、微生物学、免疫学、神经生物学与生物信息学八大基础学科，
              {TOTAL_CHAPTERS} 章 · {stats.total} 小节 · 教材全文约 {formatWordCount(totalWordCount)}；
              配备 AI 智能助教、测验错题本、间隔重复复习与学习报告。
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button onClick={() => setView({ name: 'subjects' })} className="gap-1.5">
                进入学科中心
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => setView({ name: 'assistant' })} className="gap-1.5">
                <MessagesSquare className="h-4 w-4" />
                问问 AI 助教
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 统计条 */}
      <section className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4" aria-label="学习统计">
        {[
          { label: '教材学科', value: `${subjects.length} 门`, hint: '八大基础学科' },
          { label: '教材小节', value: `${stats.total} 节`, hint: `${TOTAL_CHAPTERS} 章` },
          { label: '测验题库', value: `${allQuizQuestions.length} 题`, hint: '各章自测' },
          { label: '术语词典', value: `${allGlossaryTerms.length} 条`, hint: '跨学科检索' },
        ].map((item) => (
          <Card key={item.label} className="p-4">
            <div className="text-xs text-muted-foreground">{item.label}</div>
            <div className="mt-1 text-xl font-bold tabular-nums md:text-2xl">{item.value}</div>
            <div className="mt-0.5 text-[11px] text-muted-foreground/80">{item.hint}</div>
          </Card>
        ))}
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* 继续学习 */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">继续学习</CardTitle>
            <CardDescription>
              {stats.done > 0 && lastSection
                ? `已学 ${stats.done} / ${stats.total} 小节（${stats.percent}%）`
                : '从任意学科的第一章开始你的学习之旅'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {stats.total > 0 && (
              <div>
                <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>教材总进度</span>
                  <span className="font-medium tabular-nums text-foreground">{stats.percent}%</span>
                </div>
                <Progress value={stats.percent} className="h-2.5" />
              </div>
            )}
            {lastSection && (
              <button
                onClick={() =>
                  setView({
                    name: 'reader',
                    subjectId: lastSection.subject.id,
                    chapterId: lastSection.chapter.id,
                    sectionId: lastSection.section.id,
                  })
                }
                className="flex w-full items-center gap-4 rounded-xl border bg-card p-4 text-left transition-colors hover:border-primary/40 hover:bg-muted/40"
              >
                <div
                  className={cn(
                    'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white',
                    getSubjectTheme(lastSection.subject.id).classes.bg
                  )}
                >
                  {(() => {
                    const T = getSubjectTheme(lastSection.subject.id).icon
                    return <T className="h-5 w-5" />
                  })()}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{lastSection.subject.name}</span>
                    <span>·</span>
                    <span>
                      第 {lastSection.chapter.number} 章 {lastSection.chapter.title}
                    </span>
                  </div>
                  <div className="mt-0.5 truncate text-[15px] font-semibold">
                    {lastSection.section.title}
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </button>
            )}
          </CardContent>
        </Card>

        {/* 快捷入口 */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">学习工具</CardTitle>
            <CardDescription>测验 · 词典 · 复习 · 报告</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-2">
            {QUICK.map((q) => (
              <button
                key={q.label}
                onClick={() => setView(q.view as never)}
                className="flex flex-col items-start gap-1.5 rounded-lg border bg-card p-3 text-left transition-colors hover:border-primary/40 hover:bg-muted/40"
              >
                <q.icon className="h-4 w-4 text-primary" />
                <span className="text-[13px] font-medium leading-none">{q.label}</span>
                <span className="text-[11px] text-muted-foreground">{q.desc}</span>
              </button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 学科总览 */}
      <section className="mt-8">
        <h2 className="mb-3 text-base font-semibold">八大基础学科</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((s) => {
            const theme = getSubjectTheme(s.id)
            const total = s.chapters.reduce((a, c) => a + c.sections.length, 0)
            const done = s.chapters.reduce(
              (a, c) => a + c.sections.filter((sec) => completed.has(sec.id)).length,
              0
            )
            const percent = total ? Math.round((done / total) * 100) : 0
            return (
              <button
                key={s.id}
                onClick={() => setView({ name: 'subjects' })}
                className={cn(
                  'group flex flex-col rounded-xl border bg-card p-4 text-left transition-all hover:shadow-md',
                  theme.classes.hover
                )}
              >
                <div className="flex items-center gap-2">
                  <div className={cn('flex h-8 w-8 items-center justify-center rounded-lg text-white', theme.classes.bg)}>
                    {(() => {
                      const T = theme.icon
                      return <T className="h-4 w-4" />
                    })()}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold leading-none">{s.name}</div>
                    <div className="mt-1 text-[11px] text-muted-foreground">
                      {s.chapters.length} 章 · {total} 节 · 约 {formatWordCount(subjectWordCounts[s.id] ?? 0)}
                    </div>
                  </div>
                </div>
                <p className="mt-2.5 line-clamp-2 text-xs leading-5 text-muted-foreground">
                  {s.description}
                </p>
                <div className="mt-3">
                  <Progress value={percent} className="h-1.5" />
                  <div className="mt-1 text-right text-[10px] tabular-nums text-muted-foreground">
                    {percent}%
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </section>
    </div>
  )
}
