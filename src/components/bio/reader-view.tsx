'use client'

import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  List,
  MessageCircleQuestion,
  Sparkles,
} from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { MarkdownView } from './markdown-view'
import { Card } from '@/components/ui/card'
import { useAppStore } from '@/lib/store'
import {
  getSubject,
  getChapter,
  allSections,
  getSectionWordCount,
} from '@/data/biology'
import { getIllustrations, subjectCovers } from '@/data/illustrations'
import { formatWordCount, readingMinutes } from '@/lib/word-count'
import { getSubjectTheme } from './subject-theme'
import { cn } from '@/lib/utils'
import type { SubjectId } from '@/lib/types'

export function ReaderView({
  subjectId,
  chapterId,
  sectionId,
}: {
  subjectId: SubjectId
  chapterId: string
  sectionId: string
}) {
  const setView = useAppStore((s) => s.setView)
  const completed = useAppStore((s) => s.completedSections)
  const toggleSection = useAppStore((s) => s.toggleSection)
  const [explain, setExplain] = useState<Record<string, string>>({})
  const [explaining, setExplaining] = useState<string | null>(null)

  const subject = getSubject(subjectId)
  const chapter = getChapter(subjectId, chapterId)
  const section = chapter?.sections.find((s) => s.id === sectionId)
  const theme = getSubjectTheme(subjectId)

  const flat = useMemo(
    () => allSections().map((s) => s.section.id),
    []
  )
  const idx = flat.indexOf(sectionId)
  const prevId = idx > 0 ? flat[idx - 1] : null
  const nextId = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null
  const prevEntry = prevId ? allSections().find((s) => s.section.id === prevId) : undefined
  const nextEntry = nextId ? allSections().find((s) => s.section.id === nextId) : undefined

  const illustrations = getIllustrations(sectionId)
  const isDone = completed.has(sectionId)

  const navTo = (entry: typeof nextEntry) => {
    if (!entry) return
    setView({
      name: 'reader',
      subjectId: entry.subject.id,
      chapterId: entry.chapter.id,
      sectionId: entry.section.id,
    })
  }

  const askFigure = async (src: string, caption: string) => {
    if (explain[src]) return
    setExplaining(src)
    try {
      const res = await fetch('/api/assistant/figure-explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ src, caption, question: '请结合教材讲解这张图。' }),
      })
      const data = await res.json()
      if (data.answer) setExplain((e) => ({ ...e, [src]: data.answer }))
      else toast.error('插图讲解暂时不可用')
    } catch {
      toast.error('插图讲解暂时不可用')
    } finally {
      setExplaining(null)
    }
  }

  if (!subject || !chapter || !section) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center text-muted-foreground">
        未找到该小节。
        <Button variant="link" onClick={() => setView({ name: 'subjects' })}>
          返回学科中心
        </Button>
      </div>
    )
  }

  const words = getSectionWordCount(sectionId)

  // 插图插入：按 H2 边界切分正文
  const parts = section.content.split(/^## /m)
  const head = parts[0] ?? ''
  const bodies = parts.slice(1)

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
      {/* 题头 */}
      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <button
          className="hover:text-foreground"
          onClick={() => setView({ name: 'subjects' })}
        >
          {subject.name}
        </button>
        <span>/</span>
        <button
          className="hover:text-foreground"
          onClick={() => setView({ name: 'quiz', subjectId })}
        >
          第 {chapter.number} 章 · {chapter.title}
        </button>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* 目录抽屉 */}
        <div className="order-first lg:order-last lg:w-64 lg:shrink-0">
          <div className="lg:sticky lg:top-20">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="mb-3 w-full gap-1.5 lg:hidden">
                  <List className="h-3.5 w-3.5" />
                  本章目录（{chapter.sections.length} 节）
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                <SheetHeader className="border-b p-4">
                  <SheetTitle className="text-left text-sm">
                    {subject.name} · 第 {chapter.number} 章
                  </SheetTitle>
                </SheetHeader>
                <ScrollArea className="h-[calc(100vh-8rem)] p-3">
                  <ChapterToc subjectId={subjectId} chapterId={chapterId} currentId={sectionId} />
                </ScrollArea>
              </SheetContent>
            </Sheet>
            <Card className="hidden lg:block">
              <div className="border-b p-3">
                <div className="text-xs font-semibold">本章目录</div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">
                  {chapter.sections.length} 节 · 约 {formatWordCount(getSectionWordCount(chapterId) || 0)}
                </div>
              </div>
              <ScrollArea className="h-72 p-2">
                <ChapterToc subjectId={subjectId} chapterId={chapterId} currentId={sectionId} />
              </ScrollArea>
            </Card>
          </div>
        </div>

        {/* 正文 */}
        <article className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <Badge variant="outline" className={theme.classes.badge}>
              第 {chapter.number} 章
            </Badge>
            <span className="text-xs text-muted-foreground">
              全文 {words.toLocaleString('zh-CN')} 字 · 约 {readingMinutes(words)} 分钟
            </span>
          </div>
          <h1 className="text-xl font-bold tracking-tight md:text-2xl">{section.title}</h1>

          <div className="mt-4 space-y-1">
            <MarkdownView content={head} />
            {bodies.map((body, i) => {
              const illustration = illustrations[i % Math.max(illustrations.length, 1)] ?? null
              return (
                <div key={i}>
                  <MarkdownView content={'## ' + body} />
                  {illustration && i < illustrations.length && (
                    <figure className="my-6 overflow-hidden rounded-xl border bg-muted/20">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={illustration.src}
                        alt={illustration.caption.slice(0, 60)}
                        className="max-h-[30rem] w-full object-contain bg-white"
                      />
                      <figcaption className="space-y-2 border-t bg-card p-3">
                        <p className="text-xs leading-5 text-muted-foreground">
                          {illustration.caption}
                        </p>
                        {illustration.credit && (
                          <p className="text-[10px] text-muted-foreground/60">{illustration.credit}</p>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 gap-1 px-2 text-[11px] text-primary"
                          disabled={explaining === illustration.src}
                          onClick={() => askFigure(illustration.src, illustration.caption)}
                        >
                          <Sparkles className="h-3 w-3" />
                          {explaining === illustration.src ? 'AI 讲解生成中…' : 'AI 看图讲解'}
                        </Button>
                        {explain[illustration.src] && (
                          <p className="rounded-lg bg-primary/5 p-2.5 text-xs leading-5 text-foreground/90">
                            <MessageCircleQuestion className="mr-1 inline h-3 w-3 text-primary" />
                            {explain[illustration.src]}
                          </p>
                        )}
                      </figcaption>
                    </figure>
                  )}
                </div>
              )
            })}
          </div>

          {/* 要点与术语 */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-4">
              <div className="mb-2 flex items-center gap-1.5 text-sm font-semibold">
                <BookOpen className="h-4 w-4 text-primary" />
                本节要点
              </div>
              <ul className="space-y-1.5 text-[13px] leading-6 text-muted-foreground">
                {section.keyPoints.map((kp, i) => (
                  <li key={i} className="flex gap-1.5">
                    <span className={cn('mt-2 h-1 w-1 shrink-0 rounded-full', theme.classes.bg.replace(' text-white', ''))} />
                    <span>{kp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-4">
              <div className="mb-2 text-sm font-semibold">关联术语</div>
              <div className="flex flex-wrap gap-1.5">
                {section.terms.map((t) => (
                  <button
                    key={t}
                    onClick={() => setView({ name: 'glossary' })}
                    className={cn(
                      'rounded-full border px-2.5 py-0.5 text-xs transition-colors',
                      theme.classes.badge,
                      'hover:opacity-80'
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 完成与翻页 */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-t pt-5">
            <Button
              variant={isDone ? 'secondary' : 'default'}
              className="gap-1.5"
              onClick={() => {
                toggleSection(sectionId)
                toast.success(isDone ? '已标记为未读完' : '已完成本节学习 ✓')
              }}
            >
              <Check className="h-4 w-4" />
              {isDone ? '已读完（点击撤销）' : '标记为已读完'}
            </Button>
            <div className="ml-auto flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={!prevEntry}
                onClick={() => navTo(prevEntry)}
                className="gap-1"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                上一节
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={!nextEntry}
                onClick={() => navTo(nextEntry)}
                className="gap-1"
              >
                下一节
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

function ChapterToc({
  subjectId,
  chapterId,
  currentId,
}: {
  subjectId: SubjectId
  chapterId: string
  currentId: string
}) {
  const setView = useAppStore((s) => s.setView)
  const completed = useAppStore((s) => s.completedSections)
  const chapter = getChapter(subjectId, chapterId)
  if (!chapter) return null
  const done = chapter.sections.filter((s) => completed.has(s.id)).length
  return (
    <div>
      <div className="px-2 pb-2">
        <Progress value={(done / chapter.sections.length) * 100} className="h-1.5" />
        <div className="mt-1 text-[10px] tabular-nums text-muted-foreground">
          {done}/{chapter.sections.length} 已读
        </div>
      </div>
      {chapter.sections.map((s, i) => {
        const isDone = completed.has(s.id)
        return (
          <button
            key={s.id}
            onClick={() =>
              setView({ name: 'reader', subjectId, chapterId, sectionId: s.id })
            }
            className={cn(
              'flex w-full items-start gap-2 rounded-lg px-2 py-1.5 text-left text-[13px] transition-colors',
              s.id === currentId
                ? 'bg-primary/10 font-medium text-primary'
                : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
            )}
          >
            <span className="mt-0.5 w-4 shrink-0 text-center text-[10px] tabular-nums opacity-60">
              {i + 1}
            </span>
            <span className="min-w-0 flex-1">{s.title}</span>
            {isDone && <Check className="mt-0.5 h-3 w-3 shrink-0 text-primary" />}
          </button>
        )
      })}
    </div>
  )
}
