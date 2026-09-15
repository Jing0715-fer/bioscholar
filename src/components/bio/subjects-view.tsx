'use client'

import { useState } from 'react'
import { useAppStore } from '@/lib/store'
import { subjects, getQuizBySubject } from '@/data/biology'
import type { SubjectId } from '@/lib/types'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  CheckCircle2,
  ChevronLeft,
  ClipboardList,
  FileText,
  BookOpen,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export function SubjectsView() {
  const [activeSubject, setActiveSubject] = useState<SubjectId | null>(null)

  if (activeSubject) {
    return <SubjectDetail subjectId={activeSubject} onBack={() => setActiveSubject(null)} />
  }

  return <SubjectGrid onSelect={setActiveSubject} />
}

function SubjectGrid({ onSelect }: { onSelect: (id: SubjectId) => void }) {
  const completedSections = useAppStore((s) => s.completedSections)

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">学科中心</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          四大基础学科 · 忠实还原「101计划」核心课程教材知识体系
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {subjects.map((subject) => {
          const theme = getSubjectTheme(subject.id)
          const totalSections = subject.chapters.reduce(
            (a, c) => a + c.sections.length,
            0
          )
          const done = subject.chapters.reduce(
            (a, c) =>
              a + c.sections.filter((s) => completedSections.includes(s.id)).length,
            0
          )
          const percent = totalSections ? Math.round((done / totalSections) * 100) : 0
          const quizCount = getQuizBySubject(subject.id).length

          return (
            <button
              key={subject.id}
              onClick={() => onSelect(subject.id)}
              className={cn(
                'group relative overflow-hidden rounded-2xl border bg-card text-left outline-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring',
                theme.classes.hover
              )}
            >
              <div className={cn('h-1.5 w-full bg-gradient-to-r', theme.classes.gradient)} />
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        'flex h-14 w-14 items-center justify-center rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3',
                        theme.classes.bg
                      )}
                    >
                      <theme.icon className="h-7 w-7" />
                    </span>
                    <div>
                      <h2 className="text-lg font-bold">{subject.name}</h2>
                      <div className="text-xs text-muted-foreground">
                        {subject.englishName}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className={cn('shrink-0', theme.classes.badge)}>
                    {subject.chapters.length} 章
                  </Badge>
                </div>

                <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {subject.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {subject.chapters.slice(0, 4).map((ch) => (
                    <span
                      key={ch.id}
                      className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {ch.title}
                    </span>
                  ))}
                  {subject.chapters.length > 4 && (
                    <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                      +{subject.chapters.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      学习进度 {done}/{totalSections} 节
                    </span>
                    <span className={cn('font-bold tabular-nums', theme.classes.text)}>
                      {percent}%
                    </span>
                  </div>
                  <Progress value={percent} className="mt-1.5 h-1.5" aria-label={`${subject.name}进度`} />
                </div>

                <div className="mt-4 flex items-center justify-between border-t pt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <ClipboardList className="h-3.5 w-3.5" />
                    {quizCount} 道自测题
                  </span>
                  <span className={cn('font-medium', theme.classes.text)}>
                    进入学习 →
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function SubjectDetail({
  subjectId,
  onBack,
}: {
  subjectId: SubjectId
  onBack: () => void
}) {
  const subject = subjects.find((s) => s.id === subjectId)!
  const theme = getSubjectTheme(subjectId)
  const openReader = useAppStore((s) => s.openReader)
  const navigate = useAppStore((s) => s.navigate)
  const completedSections = useAppStore((s) => s.completedSections)

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
      <Button
        variant="ghost"
        size="sm"
        onClick={onBack}
        className="mb-4 -ml-2 text-muted-foreground"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        返回学科列表
      </Button>

      <header className={cn('relative overflow-hidden rounded-2xl border p-6 bg-gradient-to-br text-white shadow-lg', theme.classes.gradient)}>
        <div className="bio-dna-bg absolute inset-0 opacity-50" aria-hidden />
        <div className="relative flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
            <theme.icon className="h-7 w-7" />
          </span>
          <div>
            <h1 className="text-xl font-bold sm:text-2xl">{subject.name}</h1>
            <p className="text-sm text-white/85">{subject.englishName}</p>
          </div>
        </div>
        <p className="relative mt-4 max-w-2xl text-sm leading-relaxed text-white/90">
          {subject.description}
        </p>
        <p className="relative mt-2 text-xs text-white/70">{subject.textbook}</p>
        <Button
          size="sm"
          onClick={() => navigate({ name: 'quiz', subjectId })}
          className="relative mt-4 border-white/40 bg-white/15 text-white hover:bg-white/25 hover:text-white"
        >
          <ClipboardList className="mr-2 h-4 w-4" />
          本学科自测（{getQuizBySubject(subjectId).length} 题）
        </Button>
      </header>

      <div className="mt-6">
        <h2 className="mb-3 flex items-center gap-2 text-base font-semibold">
          <BookOpen className="h-4 w-4 text-primary" />
          章节目录
        </h2>
        <Accordion type="multiple" className="space-y-2">
          {subject.chapters.map((chapter) => {
            const done = chapter.sections.filter((s) =>
              completedSections.includes(s.id)
            ).length
            const allDone = done === chapter.sections.length && done > 0
            return (
              <AccordionItem
                key={chapter.id}
                value={chapter.id}
                className={cn(
                  'rounded-xl border px-4 shadow-sm transition-colors data-[state=open]:bg-card',
                  allDone ? 'border-primary/30' : theme.classes.border
                )}
              >
                <AccordionTrigger className="py-4 hover:no-underline">
                  <div className="flex flex-1 items-center gap-3 pr-2 text-left">
                    <span
                      className={cn(
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold',
                        allDone
                          ? 'bg-primary text-primary-foreground'
                          : theme.classes.bgSoft
                      )}
                    >
                      {allDone ? <CheckCircle2 className="h-5 w-5 text-primary" /> : chapter.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-semibold sm:text-base">
                        第 {chapter.number} 章 · {chapter.title}
                      </div>
                      <div className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                        {chapter.summary}
                      </div>
                    </div>
                    <span className="shrink-0 text-[11px] text-muted-foreground">
                      {done}/{chapter.sections.length}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-3">
                  <div className="flex flex-wrap gap-1.5 pb-2">
                    {chapter.keywords.map((kw) => (
                      <span
                        key={kw}
                        className={cn('rounded-md border px-1.5 py-0.5 text-[10px]', theme.classes.badge)}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1">
                    {chapter.sections.map((section) => {
                      const isDone = completedSections.includes(section.id)
                      return (
                        <li key={section.id}>
                          <button
                            onClick={() => openReader(subjectId, chapter.id, section.id)}
                            className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            {isDone ? (
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                            ) : (
                              <FileText className="h-4 w-4 shrink-0 text-muted-foreground/60 group-hover:text-foreground" />
                            )}
                            <span className="flex-1 truncate group-hover:font-medium">
                              {section.title}
                            </span>
                            <span className="shrink-0 text-[10px] text-muted-foreground/70">
                              约 {Math.max(1, Math.round(section.content.length / 500))} 分钟
                            </span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </div>
  )
}
