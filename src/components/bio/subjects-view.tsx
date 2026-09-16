'use client'

import { useState } from 'react'
import { useAppStore } from '@/lib/store'
import {
  subjects,
  getQuizBySubject,
  getSubjectWordCount,
  getChapterWordCount,
  getSectionWordCount,
  totalWordCount,
} from '@/data/biology'
import { formatWordCount, readingMinutes } from '@/lib/word-count'
import type { SubjectId } from '@/lib/types'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import { subjectCovers } from '@/data/illustrations'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CheckCircle2, ChevronLeft, ArrowRight } from 'lucide-react'
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
      <header className="mb-8">
        <p className="bio-eyebrow text-primary">Core Disciplines</p>
        <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight">学科中心</h1>
        <div className="bio-rule mt-3" aria-hidden />
        <p className="mt-3 text-sm text-muted-foreground">
          基础学科教材知识体系 · 全文约 {formatWordCount(totalWordCount)} ·
          系统梳理生命的分子与细胞逻辑
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
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
                'group overflow-hidden rounded-xl border bg-card text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring',
                theme.classes.hover
              )}
              aria-label={`进入${subject.name}学习`}
            >
              <div
                className={`aspect-[21/9] w-full overflow-hidden ${theme.classes.bgSoft}`}
              >
                <img
                  src={subjectCovers[subject.id]}
                  alt={`${subject.name}学科封面插图`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="bio-eyebrow text-muted-foreground/70">
                  {subject.englishName}
                </p>
                <h2 className="mt-1.5 font-serif text-xl font-bold">{subject.name}</h2>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {subject.description}
                </p>
                <p className="mt-3 text-xs tabular-nums text-muted-foreground">
                  {subject.chapters.length} 章 · {totalSections} 小节 · 约{' '}
                  {formatWordCount(getSubjectWordCount(subject.id))} · {quizCount}{' '}
                  道自测题
                </p>
                <div className="mt-4">
                  <div className="flex items-baseline justify-between text-xs">
                    <span className="text-muted-foreground">
                      学习进度 {done}/{totalSections} 节
                    </span>
                    <span
                      className={cn('font-serif font-bold tabular-nums', theme.classes.text)}
                    >
                      {percent}%
                    </span>
                  </div>
                  <div
                    className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-muted"
                    role="progressbar"
                    aria-valuenow={percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${subject.name}学习进度`}
                  >
                    <div
                      className={`h-full rounded-full ${theme.classes.bg}`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t pt-3 text-xs">
                  <span className={cn('font-medium', theme.classes.text)}>进入学习</span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
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

  const totalSections = subject.chapters.reduce((a, c) => a + c.sections.length, 0)
  const doneSections = subject.chapters.reduce(
    (a, c) => a + c.sections.filter((s) => completedSections.includes(s.id)).length,
    0
  )

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
      <Button
        variant="ghost"
        size="sm"
        onClick={onBack}
        className="-ml-2 mb-4 text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        返回学科列表
      </Button>

      <header className="bio-paper overflow-hidden rounded-2xl border bg-card">
        <div className={`aspect-[21/9] w-full ${theme.classes.bgSoft}`}>
          <img
            src={subjectCovers[subjectId]}
            alt={`${subject.name}学科封面插图`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6 sm:p-8">
          <p className={`bio-eyebrow ${theme.classes.text}`}>{subject.englishName}</p>
          <h1 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
            {subject.name}
          </h1>
          <div className="bio-rule mt-4" aria-hidden />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {subject.description}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs tabular-nums text-muted-foreground">
              <span>
                {subject.chapters.length} 章 · {totalSections} 小节 ·{' '}
                {getQuizBySubject(subjectId).length} 道自测题 · 已完成 {doneSections}{' '}
                节
              </span>
              <span className="mt-1 block text-[11px] text-muted-foreground/70">
                {subject.textbook}
              </span>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => navigate({ name: 'quiz', subjectId })}
              className={cn('shrink-0', theme.classes.text)}
            >
              本学科自测（{getQuizBySubject(subjectId).length} 题）
            </Button>
          </div>
        </div>
      </header>

      <div className="mt-8">
        <div className="mb-3 flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-primary/70" aria-hidden />
          <h2 className="font-serif text-lg font-bold">章节目录</h2>
          <span className="ml-auto text-xs tabular-nums text-muted-foreground">
            {doneSections}/{totalSections} 节已完成
          </span>
        </div>
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
                  'rounded-lg border px-4 transition-colors',
                  allDone ? 'border-primary/30' : 'border-border'
                )}
              >
                <AccordionTrigger className="py-4 hover:no-underline">
                  <div className="flex flex-1 items-center gap-4 pr-2 text-left">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center font-serif text-xl font-bold tabular-nums ${
                        allDone ? '' : theme.classes.text
                      }`}
                    >
                      {allDone ? (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      ) : (
                        String(chapter.number).padStart(2, '0')
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="font-serif text-sm font-bold sm:text-base">
                        第 {chapter.number} 章 · {chapter.title}
                      </div>
                      <div className="mt-0.5 line-clamp-1 text-xs font-normal text-muted-foreground">
                        {chapter.summary}
                      </div>
                    </div>
                    <span className="shrink-0 text-right text-[11px] tabular-nums text-muted-foreground">
                      <span className="block">{done}/{chapter.sections.length}</span>
                      <span className="mt-0.5 block text-[10px] text-muted-foreground/70">
                        约 {formatWordCount(getChapterWordCount(chapter.id))}
                      </span>
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-3">
                  <p className="pb-3 text-[11px] leading-relaxed text-muted-foreground">
                    <span className="bio-eyebrow mr-2 text-muted-foreground/60">
                      关键词
                    </span>
                    {chapter.keywords.join(' · ')}
                  </p>
                  <ul className="space-y-1">
                    {chapter.sections.map((section) => {
                      const isDone = completedSections.includes(section.id)
                      return (
                        <li key={section.id}>
                          <button
                            onClick={() => openReader(subjectId, chapter.id, section.id)}
                            className="group flex w-full items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-left text-sm transition-colors outline-none hover:border-border hover:bg-accent/40 focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            {isDone ? (
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                            ) : (
                              <span
                                className="h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40"
                                aria-hidden
                              />
                            )}
                            <span className="flex-1 truncate group-hover:font-medium">
                              {section.title}
                            </span>
                            <span className="shrink-0 text-[10px] tabular-nums text-muted-foreground/70">
                              {getSectionWordCount(section.id).toLocaleString('zh-CN')}{' '}
                              字 · 约{' '}
                              {readingMinutes(getSectionWordCount(section.id))} 分钟
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
