'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight, FileText, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/lib/store'
import { subjects, getSectionWordCount, getChapterWordCount } from '@/data/biology'
import { subjectCovers } from '@/data/illustrations'
import { formatWordCount, readingMinutes } from '@/lib/word-count'
import { getSubjectTheme } from './subject-theme'
import { cn } from '@/lib/utils'
import type { SubjectId } from '@/lib/types'

export function SubjectsView() {
  const [expanded, setExpanded] = useState<SubjectId | null>(null)
  const setView = useAppStore((s) => s.setView)
  const completed = useAppStore((s) => s.completedSections)

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
      <header className="mb-6">
        <h1 className="text-xl font-bold tracking-tight md:text-2xl">学科中心</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          八大基础学科 · 教材级正文 · 每章配测验与术语
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        {subjects.map((s) => {
          const theme = getSubjectTheme(s.id)
          const total = s.chapters.reduce((a, c) => a + c.sections.length, 0)
          const done = s.chapters.reduce(
            (a, c) => a + c.sections.filter((sec) => completed.has(sec.id)).length,
            0
          )
          const percent = total ? Math.round((done / total) * 100) : 0
          const isOpen = expanded === s.id
          const cover = subjectCovers[s.id]
          return (
            <Card key={s.id} className={cn('overflow-hidden transition-all', theme.classes.hover)}>
              {/* 学科头 */}
              <div className="flex flex-col gap-4 p-5 sm:flex-row">
                {cover && (
                  <object
                    type="image/svg+xml"
                    data={cover}
                    className="h-32 w-full shrink-0 rounded-lg border bg-muted/30 sm:w-44"
                    aria-label={`${s.name}教材封面`}
                  />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2.5">
                    <div className={cn('flex h-9 w-9 items-center justify-center rounded-lg text-white', theme.classes.bg)}>
                      {(() => {
                        const T = theme.icon
                        return <T className="h-4.5 w-4.5" />
                      })()}
                    </div>
                    <div>
                      <h2 className="text-base font-bold leading-tight">{s.name}</h2>
                      <div className="text-[11px] text-muted-foreground">{s.englishName}</div>
                    </div>
                    <Badge variant="outline" className={cn('ml-auto shrink-0', theme.classes.badge)}>
                      {theme.colorName}
                    </Badge>
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground">
                    {s.description}
                  </p>
                  <div className="mt-2 text-[11px] text-muted-foreground/80">{s.textbook}</div>
                  <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{s.chapters.length} 章 · {total} 节</span>
                    <span>约 {formatWordCount(s.chapters.reduce((a, c) => a + getChapterWordCount(c.id), 0))}</span>
                    <span className="ml-auto font-medium tabular-nums">{percent}%</span>
                  </div>
                  <Progress value={percent} className="mt-1.5 h-1.5" />
                  <div className="mt-3">
                    <Button
                      size="sm"
                      variant={isOpen ? 'secondary' : 'default'}
                      className="gap-1"
                      onClick={() => setExpanded(isOpen ? null : s.id)}
                    >
                      {isOpen ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
                      {isOpen ? '收起章节' : '展开章节'}
                    </Button>
                  </div>
                </div>
              </div>

              {/* 章节目录 */}
              {isOpen && (
                <div className="border-t bg-muted/20">
                  <div className="max-h-96 overflow-y-auto p-3">
                    {s.chapters.map((c) => (
                      <div key={c.id} className="mb-2 rounded-lg border bg-card p-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 text-[13px] font-semibold">
                              <span className={cn('shrink-0 rounded px-1.5 py-0.5 text-[10px] tabular-nums', theme.classes.badge)}>
                                第 {c.number} 章
                              </span>
                              <span className="truncate">{c.title}</span>
                            </div>
                            <div className="mt-0.5 text-[11px] text-muted-foreground">
                              {c.sections.length} 节 · 约 {formatWordCount(getChapterWordCount(c.id))}
                            </div>
                          </div>
                        </div>
                        <ul className="mt-2 space-y-1">
                          {c.sections.map((sec) => {
                            const w = getSectionWordCount(sec.id)
                            const isDone = completed.has(sec.id)
                            return (
                              <li key={sec.id}>
                                <button
                                  onClick={() =>
                                    setView({
                                      name: 'reader',
                                      subjectId: s.id,
                                      chapterId: c.id,
                                      sectionId: sec.id,
                                    })
                                  }
                                  className="group flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[13px] transition-colors hover:bg-muted/60"
                                >
                                  <FileText
                                    className={cn(
                                      'h-3.5 w-3.5 shrink-0',
                                      isDone ? 'text-primary' : 'text-muted-foreground/50'
                                    )}
                                  />
                                  <span className="min-w-0 flex-1 truncate">{sec.title}</span>
                                  <span className="shrink-0 text-[10px] tabular-nums text-muted-foreground/70">
                                    {formatWordCount(w).replace(' ', '')} · {readingMinutes(w)} 分钟
                                  </span>
                                  <ArrowRight className="h-3 w-3 shrink-0 text-muted-foreground/0 transition-opacity group-hover:text-muted-foreground" />
                                </button>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
