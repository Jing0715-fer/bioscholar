'use client'

import { useEffect, useState } from 'react'
import { useAppStore } from '@/lib/store'
import { getSubject, getQuizByChapter } from '@/data/biology'
import { getIllustrations } from '@/data/illustrations'
import type { Chapter, Section, Subject, SubjectId } from '@/lib/types'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import { Markdown, toFigureItems } from '@/components/bio/markdown'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  BookOpen,
  BookOpenCheck,
  BookX,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Lightbulb,
  ListTree,
  Loader2,
  MessageSquareText,
  Undo2,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/** 相邻小节引用（用于上一节/下一节跨章导航） */
interface SectionRef {
  chapter: Chapter
  section: Section
}

/** 计算上一节/下一节（跨章节边界时自动跳到上一章最后/下一章第一节） */
function computeNeighbors(
  subject: Subject | undefined,
  chapter: Chapter | undefined,
  chapterIndex: number,
  sectionIndex: number
): { prev: SectionRef | null; next: SectionRef | null } {
  if (!subject || !chapter || sectionIndex < 0) {
    return { prev: null, next: null }
  }
  let prev: SectionRef | null = null
  let next: SectionRef | null = null
  if (sectionIndex > 0) {
    prev = { chapter, section: chapter.sections[sectionIndex - 1] }
  } else if (chapterIndex > 0) {
    const pc = subject.chapters[chapterIndex - 1]
    if (pc.sections.length > 0) {
      prev = { chapter: pc, section: pc.sections[pc.sections.length - 1] }
    }
  }
  if (sectionIndex < chapter.sections.length - 1) {
    next = { chapter, section: chapter.sections[sectionIndex + 1] }
  } else if (chapterIndex < subject.chapters.length - 1) {
    const nc = subject.chapters[chapterIndex + 1]
    if (nc.sections.length > 0) {
      next = { chapter: nc, section: nc.sections[0] }
    }
  }
  return { prev, next }
}

export function ReaderView({
  subjectId,
  chapterId,
  sectionId,
}: {
  subjectId: SubjectId
  chapterId: string
  sectionId: string
}) {
  // ---- Hooks（须无条件调用） ----
  const navigate = useAppStore((s) => s.navigate)
  const openReader = useAppStore((s) => s.openReader)
  const toggleSectionComplete = useAppStore((s) => s.toggleSectionComplete)
  const completedSections = useAppStore((s) => s.completedSections)
  const setAssistantContext = useAppStore((s) => s.setAssistantContext)
  const [tocOpen, setTocOpen] = useState(false)
  const [pending, setPending] = useState(false)

  // 切换小节后回到页面顶部
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [sectionId])

  // ---- 数据解析 ----
  const subject = getSubject(subjectId)
  const chapterIndex = subject?.chapters.findIndex((c) => c.id === chapterId) ?? -1
  const chapter = chapterIndex >= 0 ? subject?.chapters[chapterIndex] : undefined
  const sectionIndex = chapter?.sections.findIndex((s) => s.id === sectionId) ?? -1
  const section = sectionIndex >= 0 ? chapter?.sections[sectionIndex] : undefined
  const theme = getSubjectTheme(subjectId)

  const isCompleted = completedSections.includes(sectionId)
  const totalSections =
    subject?.chapters.reduce((a, c) => a + c.sections.length, 0) ?? 0
  const doneCount =
    subject?.chapters.reduce(
      (a, c) =>
        a + c.sections.filter((s) => completedSections.includes(s.id)).length,
      0
    ) ?? 0
  const percent = totalSections ? Math.round((doneCount / totalSections) * 100) : 0
  const quizCount = getQuizByChapter(chapterId).length
  const readMinutes = section
    ? Math.max(1, Math.round(section.content.length / 500))
    : 0
  // 本节配图（自动编号并穿插进正文）
  const sectionFigures = section
    ? toFigureItems(getIllustrations(section.id), chapter?.number ?? 1, section.id)
    : []

  // ---- 上一节 / 下一节（跨章节边界） ----
  const { prev, next } = computeNeighbors(
    subject,
    chapter,
    chapterIndex,
    sectionIndex
  )

  // ---- 操作 ----
  const handleToggleComplete = async () => {
    setPending(true)
    try {
      await toggleSectionComplete(sectionId)
    } finally {
      setPending(false)
    }
  }

  const handleAskAssistant = () => {
    setAssistantContext({
      subjectId,
      chapterId,
      sectionId,
      sectionTitle: section?.title,
    })
    navigate({ name: 'assistant' })
  }

  const goTo = (ref: SectionRef) => {
    openReader(subjectId, ref.chapter.id, ref.section.id)
    setTocOpen(false)
  }

  // ---- 兜底：内容缺失 ----
  if (!subject || !chapter || !section) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center px-4 py-20 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
          <BookX className="h-7 w-7 text-muted-foreground" aria-hidden="true" />
        </span>
        <h1 className="mt-4 text-lg font-bold tracking-tight">未找到该知识点</h1>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          内容可能已被移动或链接无效，请返回学科中心重新选择章节。
        </p>
        <Button className="mt-6" onClick={() => navigate({ name: 'subjects' })}>
          <BookOpenCheck className="mr-2 h-4 w-4" />
          返回学科中心
        </Button>
      </div>
    )
  }

  const asideProps = {
    subjectId,
    section,
    isCompleted,
    pending,
    onToggleComplete: handleToggleComplete,
    onAskAssistant: handleAskAssistant,
    onOpenGlossary: () => navigate({ name: 'glossary' }),
  }

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">
      {/* ============ 移动端：目录抽屉触发 + 紧凑面包屑 ============ */}
      <div className="mb-4 flex items-center gap-3 lg:hidden">
        <Sheet open={tocOpen} onOpenChange={setTocOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={cn('shrink-0 gap-1.5', theme.classes.hover)}
              aria-label="打开本书目录"
            >
              <ListTree className="h-4 w-4" />
              目录
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 gap-0 p-0">
            <SheetHeader className="border-b pb-3 pr-12">
              <SheetTitle className="flex items-center gap-2.5 text-base">
                <span
                  className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
                    theme.classes.bg
                  )}
                >
                  <theme.icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 truncate">{subject.name}</span>
              </SheetTitle>
              <SheetDescription asChild>
                <p className="text-xs text-muted-foreground">
                  {subject.chapters.length} 章 · {totalSections} 节 · 已学{' '}
                  {doneCount} 节（{percent}%）
                </p>
              </SheetDescription>
              <Progress
                value={percent}
                className="mt-1 h-1.5"
                aria-label={`${subject.name}学习进度`}
              />
            </SheetHeader>
            <div className="min-h-0 flex-1 overflow-y-auto bio-scroll px-2 py-2">
              <ChapterTree
                subject={subject}
                currentChapterId={chapterId}
                currentSectionId={sectionId}
                completedSections={completedSections}
                onSelect={(cid, sid) => {
                  openReader(subjectId, cid, sid)
                  setTocOpen(false)
                }}
              />
            </div>
          </SheetContent>
        </Sheet>
        <nav
          aria-label="章节路径"
          className="flex min-w-0 flex-1 items-center gap-1 text-xs text-muted-foreground"
        >
          <span className="shrink-0 truncate">{subject.name}</span>
          <ChevronRight
            className="h-3 w-3 shrink-0 opacity-50"
            aria-hidden="true"
          />
          <span className="truncate">
            第 {chapter.number} 章 · {chapter.title}
          </span>
        </nav>
      </div>

      {/* ============ 三栏布局 ============ */}
      <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)_280px]">
        {/* ---- 左栏：本书章节目录树（桌面端） ---- */}
        <aside className="hidden lg:block" aria-label="本书目录">
          <div className="sticky top-20 flex max-h-[calc(100vh-6rem)] flex-col overflow-hidden rounded-xl border bg-card shadow-sm">
            <div className="flex items-center gap-2.5 border-b px-4 py-3">
              <span
                className={cn(
                  'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
                  theme.classes.bg
                )}
              >
                <theme.icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{subject.name}</p>
                <p className="text-[11px] text-muted-foreground">
                  {subject.chapters.length} 章 · {totalSections} 节
                </p>
              </div>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto bio-scroll p-2">
              <ChapterTree
                subject={subject}
                currentChapterId={chapterId}
                currentSectionId={sectionId}
                completedSections={completedSections}
                onSelect={(cid, sid) => openReader(subjectId, cid, sid)}
              />
            </div>
            <div className="border-t px-4 py-3">
              <div className="flex items-baseline justify-between gap-2 text-[11px]">
                <span className="text-muted-foreground">本书学习进度</span>
                <span className="font-semibold tabular-nums">
                  {doneCount}/{totalSections}
                </span>
              </div>
              <Progress
                value={percent}
                className="mt-1.5 h-1.5"
                aria-label={`${subject.name}学习进度`}
              />
            </div>
          </div>
        </aside>

        {/* ---- 中栏：正文阅读区 ---- */}
        <div className="min-w-0">
          {/* 桌面端面包屑 */}
          <nav
            aria-label="章节路径"
            className="mb-3 hidden items-center gap-1.5 text-xs text-muted-foreground lg:flex"
          >
            <button
              onClick={() => navigate({ name: 'subjects' })}
              className="rounded outline-none transition-colors hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring"
            >
              学科中心
            </button>
            <ChevronRight
              className="h-3 w-3 shrink-0 opacity-50"
              aria-hidden="true"
            />
            <button
              onClick={() => navigate({ name: 'subjects' })}
              className="rounded outline-none transition-colors hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring"
            >
              {subject.name}
            </button>
            <ChevronRight
              className="h-3 w-3 shrink-0 opacity-50"
              aria-hidden="true"
            />
            <span className="truncate">第 {chapter.number} 章 · {chapter.title}</span>
            <ChevronRight
              className="h-3 w-3 shrink-0 opacity-50"
              aria-hidden="true"
            />
            <span className="truncate font-medium text-foreground">
              {section.title}
            </span>
          </nav>

          {/* 本书阅读进度 */}
          <div className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3 shadow-sm">
            <BookOpenCheck
              className="h-4 w-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2 text-xs">
                <span className="truncate text-muted-foreground">
                  本书学习进度 · {subject.name}
                </span>
                <span className="shrink-0 font-medium tabular-nums">
                  {doneCount}/{totalSections} 节 ·{' '}
                  <span className={cn('font-bold', theme.classes.text)}>
                    {percent}%
                  </span>
                </span>
              </div>
              <Progress
                value={percent}
                className="mt-1.5 h-1.5"
                aria-label={`${subject.name}学习进度`}
              />
            </div>
          </div>

          {/* 小节题头（编辑式学术版式） */}
          <header className="bio-paper relative mt-4 overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div
              className={cn('h-1 w-full bg-gradient-to-r', theme.classes.gradient)}
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute -right-2 -top-7 select-none font-serif text-[130px] font-bold leading-none tabular-nums opacity-[0.055] sm:-top-9 sm:text-[160px]"
              aria-hidden="true"
            >
              {String(chapter.number).padStart(2, '0')}
            </span>
            <div className="relative p-5 sm:p-7">
              <p className="bio-eyebrow flex items-center gap-2 text-muted-foreground">
                <theme.icon
                  className={cn('h-3.5 w-3.5', theme.classes.text)}
                  aria-hidden="true"
                />
                {subject.englishName}
                <span className="opacity-50">·</span>
                Chapter {String(chapter.number).padStart(2, '0')}
              </p>
              <h1 className="mt-2.5 font-serif text-[1.55rem] font-bold leading-snug tracking-tight sm:text-[1.8rem]">
                {section.title}
              </h1>
              <p className="mt-1.5 text-sm text-muted-foreground">
                第 {chapter.number} 章 · {chapter.title}
              </p>
              <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {chapter.summary}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t pt-3.5 text-xs text-muted-foreground">
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5 font-medium',
                    isCompleted && 'text-emerald-600 dark:text-emerald-400'
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                  {isCompleted ? '已完成学习' : '未学习'}
                </span>
                <span className="opacity-30" aria-hidden="true">
                  ·
                </span>
                <span>约 {readMinutes} 分钟</span>
                <span className="opacity-30" aria-hidden="true">
                  ·
                </span>
                <span>要点 {section.keyPoints.length} 条</span>
                <span className="opacity-30" aria-hidden="true">
                  ·
                </span>
                <span>术语 {section.terms.length} 个</span>
                {sectionFigures.length > 0 && (
                  <>
                    <span className="opacity-30" aria-hidden="true">
                      ·
                    </span>
                    <span className={cn('font-medium', theme.classes.text)}>
                      插图 {sectionFigures.length} 幅
                    </span>
                  </>
                )}
              </div>
            </div>
          </header>

          {/* Markdown 正文（含配图穿插） */}
          <Card className="mx-auto mt-5 max-w-3xl">
            <CardContent className="p-5 sm:p-8">
              <Markdown content={section.content} figures={sectionFigures} />
            </CardContent>
          </Card>

          {/* 章末测验入口 */}
          {quizCount > 0 && (
            <Card
              className={cn(
                'mx-auto mt-4 max-w-3xl transition-shadow hover:shadow-md',
                theme.classes.hover
              )}
            >
              <CardContent className="flex flex-wrap items-center gap-4 p-5">
                <span
                  className={cn(
                    'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
                    theme.classes.bg
                  )}
                >
                  <ClipboardList className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">
                    本章自测 · 第 {chapter.number} 章
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    共 {quizCount} 道题，覆盖本章 {chapter.sections.length}{' '}
                    个小节的知识点，学完检验掌握程度
                  </p>
                </div>
                <Button
                  size="sm"
                  className={cn('shrink-0', theme.classes.bg)}
                  onClick={() => navigate({ name: 'quiz', subjectId })}
                >
                  开始自测
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* 上一节 / 下一节 */}
          {(prev || next) && (
            <nav
              className="mx-auto mt-6 flex max-w-3xl flex-col gap-3 sm:flex-row"
              aria-label="小节导航"
            >
              {prev ? (
                <SectionNavCard
                  direction="prev"
                  target={prev}
                  currentChapterId={chapterId}
                  hover={theme.classes.hover}
                  onClick={() => goTo(prev)}
                />
              ) : (
                <div className="hidden sm:block sm:flex-1" aria-hidden="true" />
              )}
              {next && (
                <SectionNavCard
                  direction="next"
                  target={next}
                  currentChapterId={chapterId}
                  hover={theme.classes.hover}
                  onClick={() => goTo(next)}
                />
              )}
            </nav>
          )}

          {/* 移动端：要点 / 术语 / 操作区（正文下方） */}
          <div className="mt-6 space-y-4 lg:hidden">
            <SectionAside {...asideProps} />
          </div>
        </div>

        {/* ---- 右栏：要点 / 术语 / 学习操作（桌面端） ---- */}
        <aside
          className="hidden lg:block"
          aria-label="本节要点与相关术语"
        >
          <div className="sticky top-20 max-h-[calc(100vh-6rem)] space-y-4 overflow-y-auto bio-scroll pb-2">
            <SectionAside {...asideProps} />
          </div>
        </aside>
      </div>
    </div>
  )
}

// ============================================================
// 章节目录树（左栏 / 移动端抽屉共用）
// ============================================================
function ChapterTree({
  subject,
  currentChapterId,
  currentSectionId,
  completedSections,
  onSelect,
}: {
  subject: Subject
  currentChapterId: string
  currentSectionId: string
  completedSections: string[]
  onSelect: (chapterId: string, sectionId: string) => void
}) {
  const theme = getSubjectTheme(subject.id)
  const [expandedId, setExpandedId] = useState<string | null>(currentChapterId)

  // 当前章节变化时自动跟随展开
  useEffect(() => {
    setExpandedId(currentChapterId)
  }, [currentChapterId])

  return (
    <nav aria-label={`${subject.name}章节目录`} className="space-y-1">
      {subject.chapters.map((ch) => {
        const expanded = expandedId === ch.id
        const done = ch.sections.filter((s) => completedSections.includes(s.id)).length
        const allDone = done === ch.sections.length && done > 0
        return (
          <div
            key={ch.id}
            className={cn(
              'rounded-lg transition-colors',
              expanded && theme.classes.bgSoft
            )}
          >
            <button
              onClick={() => setExpandedId(expanded ? null : ch.id)}
              aria-expanded={expanded}
              className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span
                className={cn(
                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-bold tabular-nums',
                  allDone
                    ? 'bg-primary text-primary-foreground'
                    : cn(theme.classes.bgSoft, theme.classes.text)
                )}
                aria-hidden="true"
              >
                {allDone ? <CheckCircle2 className="h-3.5 w-3.5" /> : ch.number}
              </span>
              <span
                className={cn(
                  'min-w-0 flex-1 truncate',
                  ch.id === currentChapterId ? 'font-semibold' : 'font-medium'
                )}
              >
                {ch.title}
              </span>
              <span className="shrink-0 text-[10px] tabular-nums text-muted-foreground">
                {done}/{ch.sections.length}
              </span>
              <ChevronRight
                className={cn(
                  'h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-200',
                  expanded && 'rotate-90'
                )}
                aria-hidden="true"
              />
            </button>
            {expanded && (
              <ul className="mt-0.5 space-y-0.5 pb-1.5 pl-3 pr-1.5">
                {ch.sections.map((sec, i) => {
                  const isCurrentSec = sec.id === currentSectionId
                  const secDone = completedSections.includes(sec.id)
                  return (
                    <li key={sec.id}>
                      <button
                        onClick={() => onSelect(ch.id, sec.id)}
                        aria-current={isCurrentSec ? 'page' : undefined}
                        className={cn(
                          'flex w-full items-center gap-2 rounded-md border-l-2 px-2 py-1.5 text-left text-xs transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
                          isCurrentSec
                            ? cn(
                                'font-semibold',
                                theme.classes.border,
                                theme.classes.bgSoft,
                                theme.classes.text
                              )
                            : 'border-transparent text-muted-foreground hover:bg-accent hover:text-foreground'
                        )}
                      >
                        {secDone ? (
                          <CheckCircle2
                            className="h-3.5 w-3.5 shrink-0 text-emerald-500"
                            aria-label="已完成"
                          />
                        ) : (
                          <span
                            className="flex h-3.5 w-3.5 shrink-0 items-center justify-center text-[10px] font-medium tabular-nums text-muted-foreground/60"
                            aria-hidden="true"
                          >
                            {i + 1}
                          </span>
                        )}
                        <span className="min-w-0 flex-1 truncate">
                          {sec.title}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        )
      })}
    </nav>
  )
}

// ============================================================
// 右栏：本节要点 / 相关术语 / 学习操作（桌面右栏 + 移动端下方共用）
// ============================================================
function SectionAside({
  subjectId,
  section,
  isCompleted,
  pending,
  onToggleComplete,
  onAskAssistant,
  onOpenGlossary,
}: {
  subjectId: SubjectId
  section: Section
  isCompleted: boolean
  pending: boolean
  onToggleComplete: () => void
  onAskAssistant: () => void
  onOpenGlossary: () => void
}) {
  const theme = getSubjectTheme(subjectId)

  return (
    <>
      {/* 本节要点 */}
      {section.keyPoints.length > 0 && (
        <Card className={cn('gap-3 py-4', theme.classes.border)}>
          <CardHeader className="px-4 pb-0">
            <CardTitle
              className={cn('flex items-center gap-2 text-sm', theme.classes.text)}
            >
              <Lightbulb className="h-4 w-4 shrink-0" aria-hidden="true" />
              本节要点
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4">
            <ul className="space-y-2.5">
              {section.keyPoints.map((kp, i) => (
                <li key={i} className="flex gap-2.5 text-xs leading-relaxed">
                  <span
                    className={cn(
                      'mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold tabular-nums',
                      theme.classes.bgSoft,
                      theme.classes.text
                    )}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1">{kp}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* 相关术语 */}
      {section.terms.length > 0 && (
        <Card className="gap-3 py-4">
          <CardHeader className="px-4 pb-0">
            <CardTitle className="flex items-center gap-2 text-sm">
              <BookMarked
                className="h-4 w-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              相关术语
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4">
            <div className="flex flex-wrap gap-1.5">
              {section.terms.map((term) => (
                <button
                  key={term}
                  onClick={onOpenGlossary}
                  className={cn(
                    'inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs transition-all outline-none hover:-translate-y-px focus-visible:ring-2 focus-visible:ring-ring',
                    theme.classes.badge
                  )}
                  aria-label={`在术语词典中查看「${term}」`}
                >
                  <BookMarked className="h-3 w-3 opacity-60" aria-hidden="true" />
                  {term}
                </button>
              ))}
            </div>
            <p className="mt-2.5 text-[10px] text-muted-foreground">
              点击术语可跳转术语词典查看详细释义
            </p>
          </CardContent>
        </Card>
      )}

      {/* 学习操作 */}
      <Card className="gap-3 py-4">
        <CardContent className="space-y-3 px-4">
          {isCompleted && (
            <p className="flex items-center justify-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              已完成本节学习
            </p>
          )}
          {isCompleted ? (
            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={onToggleComplete}
              disabled={pending}
            >
              {pending ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Undo2 className="h-4 w-4" aria-hidden="true" />
              )}
              取消已学
            </Button>
          ) : (
            <Button
              className="w-full gap-2 bg-emerald-600 text-white hover:bg-emerald-700"
              onClick={onToggleComplete}
              disabled={pending}
            >
              {pending ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              )}
              标记为已学
            </Button>
          )}
          <Separator />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className={cn('w-full gap-2', theme.classes.hover)}
                onClick={onAskAssistant}
              >
                <MessageSquareText
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                向 AI 助教提问本节
              </Button>
            </TooltipTrigger>
            <TooltipContent>将携带本节学习上下文进入对话</TooltipContent>
          </Tooltip>
        </CardContent>
      </Card>
    </>
  )
}

// ============================================================
// 上一节 / 下一节导航卡片
// ============================================================
function SectionNavCard({
  direction,
  target,
  currentChapterId,
  hover,
  onClick,
}: {
  direction: 'prev' | 'next'
  target: SectionRef
  currentChapterId: string
  hover: string
  onClick: () => void
}) {
  const isNext = direction === 'next'
  const crossChapter = target.chapter.id !== currentChapterId

  return (
    <button
      onClick={onClick}
      className={cn(
        'group flex flex-1 items-center gap-3 rounded-xl border bg-card p-4 text-left outline-none transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring',
        hover
      )}
      aria-label={`${isNext ? '下一节' : '上一节'}：第 ${target.chapter.number} 章 ${target.section.title}`}
    >
      {!isNext && (
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-accent"
          aria-hidden="true"
        >
          <ArrowLeft className="h-4 w-4" />
        </span>
      )}
      <span className={cn('min-w-0 flex-1', isNext && 'sm:text-right')}>
        <span
          className={cn(
            'flex items-center gap-1.5 text-[11px] text-muted-foreground',
            isNext && 'sm:justify-end'
          )}
        >
          {crossChapter && (
            <Badge variant="outline" className="h-4 px-1.5 text-[10px]">
              {isNext ? '下一章' : '上一章'}
            </Badge>
          )}
          {isNext ? '下一节' : '上一节'}
        </span>
        <span className="mt-1 block truncate text-sm font-medium group-hover:underline">
          {target.section.title}
        </span>
        <span className="mt-0.5 block truncate text-[11px] text-muted-foreground">
          第 {target.chapter.number} 章 · {target.chapter.title}
        </span>
      </span>
      {isNext && (
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-accent"
          aria-hidden="true"
        >
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      )}
    </button>
  )
}
