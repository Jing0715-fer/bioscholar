'use client'

import { useMemo, useState } from 'react'
import { Check, RotateCcw, X, Trophy, ChevronRight } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAppStore } from '@/lib/store'
import { getQuizQuestions } from '@/lib/quiz-data'
import { getSubject } from '@/data/biology'
import { getSubjectTheme } from './subject-theme'
import { cn } from '@/lib/utils'
import type { SubjectId, QuizQuestion } from '@/lib/types'

const SUBJECT_TABS: { id: SubjectId; label: string }[] = [
  { id: 'biochemistry', label: '生物化学' },
  { id: 'molecular-biology', label: '分子生物学' },
  { id: 'cell-biology', label: '细胞生物学' },
  { id: 'biophysics', label: '生物物理学' },
  { id: 'microbiology', label: '微生物学' },
  { id: 'immunology', label: '免疫学' },
  { id: 'neurobiology', label: '神经生物学' },
  { id: 'bioinformatics', label: '生物信息学' },
]

export function QuizView({ subjectId }: { subjectId: SubjectId }) {
  const setView = useAppStore((s) => s.setView)
  const [tab, setTab] = useState<SubjectId>(subjectId)
  const activeSubject = getSubject(tab)
  const questions = useMemo(() => getQuizQuestions(tab), [tab])
  const theme = getSubjectTheme(tab)

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 md:px-6 md:py-8">
      <header className="mb-5">
        <h1 className="text-xl font-bold tracking-tight md:text-2xl">章节测验</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          每章 5 题 · 自动判分与解析 · 错题自动进入错题本
        </p>
      </header>

      <Tabs value={tab} onValueChange={(v) => setTab(v as SubjectId)}>
        <TabsList className="h-auto w-full flex-wrap justify-start gap-1 rounded-xl p-1">
          {SUBJECT_TABS.map((t) => (
            <TabsTrigger key={t.id} value={t.id} className="text-xs">
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {SUBJECT_TABS.map((t) => (
          <TabsContent key={t.id} value={t.id} className="mt-4">
            {t.id === tab && <QuizRunner subjectId={t.id} />}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function QuizRunner({ subjectId }: { subjectId: SubjectId }) {
  const questions = useMemo(() => getQuizQuestions(subjectId), [subjectId])
  const setView = useAppStore((s) => s.setView)
  const theme = getSubjectTheme(subjectId)
  const subject = getSubject(subjectId)

  // 按章分组
  const chapters = useMemo(() => {
    const map = new Map<string, QuizQuestion[]>()
    for (const q of questions) {
      if (!map.has(q.chapterId)) map.set(q.chapterId, [])
      map.get(q.chapterId)!.push(q)
    }
    return Array.from(map.entries())
  }, [questions])

  const [currentChapter, setCurrentChapter] = useState(chapters[0]?.[0] ?? '')
  const [page, setPage] = useState(0) // 该章内题号
  const [selected, setSelected] = useState<Record<string, number | number[]>>({})
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({})
  const [saving, setSaving] = useState(false)

  const chapterQuestions = chapters.find(([id]) => id === currentChapter)?.[1] ?? []
  const q = chapterQuestions[page]
  const chapter = subject?.chapters.find((c) => c.id === currentChapter)

  if (!q || !subject) {
    return (
      <Card className="p-8 text-center text-sm text-muted-foreground">
        该学科的测验题库正在建设中。
        <Button variant="link" onClick={() => setView({ name: 'subjects' })}>
          返回学科中心
        </Button>
      </Card>
    )
  }

  const isSubmitted = submitted[q.id] ?? false
  const answer = q.answer
  const chosen = selected[q.id]

  const choose = (i: number) => {
    if (isSubmitted) return
    if (q.type === 'multiple') {
      const cur = Array.isArray(chosen) ? chosen : []
      setSelected((s) => ({
        ...s,
        [q.id]: cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i],
      }))
    } else {
      setSelected((s) => ({ ...s, [q.id]: i }))
    }
  }

  const isCorrect = () => {
    if (chosen === undefined) return false
    if (Array.isArray(answer)) {
      const a = [...(chosen as number[])].sort()
      const b = [...answer].sort()
      return a.length === b.length && a.every((v, i) => v === b[i])
    }
    return chosen === answer
  }

  const submit = async () => {
    if (chosen === undefined) {
      toast.error('请先选择答案')
      return
    }
    const correct = isCorrect()
    setSubmitted((s) => ({ ...s, [q.id]: true }))
    setSaving(true)
    try {
      await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          attempts: [
            {
              questionId: q.id,
              subjectId: q.subjectId,
              chapterId: q.chapterId,
              userAnswer: JSON.stringify(chosen),
              correct,
            },
          ],
        }),
      })
    } catch {
      /* 静默 */
    } finally {
      setSaving(false)
    }
    if (correct) toast.success('回答正确！')
    else toast.error('回答错误，已记入错题本')
  }

  const answeredCount = chapterQuestions.filter((x) => submitted[x.id]).length
  const correctCount = chapterQuestions.filter(
    (x) => submitted[x.id] && selected[x.id] !== undefined && (() => {
      const a = Array.isArray(x.answer) ? [...(selected[x.id] as number[])].sort().join() : selected[x.id]
      const b = Array.isArray(x.answer) ? [...x.answer].sort().join() : x.answer
      return a === b
    })()
  ).length

  return (
    <div className="space-y-4">
      {/* 章选择 */}
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {chapters.map(([id, list]) => (
          <button
            key={id}
            onClick={() => {
              setCurrentChapter(id)
              setPage(0)
            }}
            className={cn(
              'shrink-0 rounded-full border px-3 py-1 text-xs transition-colors',
              id === currentChapter
                ? theme.classes.badge + ' font-semibold'
                : 'text-muted-foreground hover:bg-muted/60'
            )}
          >
            第 {list[0]?.chapterId.split('-ch')[1]?.split('-')[0]} 章
          </button>
        ))}
      </div>

      {chapter && (
        <div className="text-xs text-muted-foreground">
          第 {chapter.number} 章 · {chapter.title}
        </div>
      )}

      {/* 进度 */}
      <div className="flex items-center gap-3">
        <Progress value={(answeredCount / chapterQuestions.length) * 100} className="h-1.5 flex-1" />
        <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
          {answeredCount}/{chapterQuestions.length} 题已作答 · 正确 {correctCount}
        </span>
      </div>

      {/* 题目卡 */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={theme.classes.badge}>
              {q.type === 'single' ? '单选' : q.type === 'multiple' ? '多选' : '判断'}
            </Badge>
            <Badge variant="secondary" className="text-[10px]">
              难度 {'★'.repeat(q.difficulty)}
            </Badge>
            <span className="ml-auto text-xs tabular-nums text-muted-foreground">
              {page + 1} / {chapterQuestions.length}
            </span>
          </div>
          <CardTitle className="text-[15px] font-semibold leading-6">{q.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {q.options.map((opt, i) => {
            const isSelected = Array.isArray(chosen) ? chosen.includes(i) : chosen === i
            const isAnswer = Array.isArray(answer) ? answer.includes(i) : answer === i
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                disabled={isSubmitted}
                className={cn(
                  'flex w-full items-start gap-2.5 rounded-lg border p-3 text-left text-sm transition-colors',
                  !isSubmitted && 'hover:border-primary/40 hover:bg-muted/40',
                  isSelected && !isSubmitted && 'border-primary/50 bg-primary/5',
                  isSubmitted && isAnswer && 'border-emerald-500/50 bg-emerald-500/5',
                  isSubmitted && isSelected && !isAnswer && 'border-destructive/50 bg-destructive/5',
                  isSubmitted && !isSelected && !isAnswer && 'opacity-60'
                )}
              >
                <span
                  className={cn(
                    'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold',
                    q.type === 'multiple' ? 'rounded-md' : 'rounded-full',
                    isSelected && 'border-primary bg-primary text-primary-foreground'
                  )}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1 leading-6">{opt}</span>
                {isSubmitted && isAnswer && <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />}
                {isSubmitted && isSelected && !isAnswer && <X className="mt-1 h-4 w-4 shrink-0 text-destructive" />}
              </button>
            )
          })}

          {isSubmitted && (
            <div
              className={cn(
                'rounded-lg border p-3 text-[13px] leading-6',
                isCorrect() ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-destructive/40 bg-destructive/5'
              )}
            >
              <div className="mb-1 flex items-center gap-1.5 font-semibold">
                <Trophy className="h-3.5 w-3.5" />
                {isCorrect() ? '回答正确' : '回答错误'}
              </div>
              <p className="text-muted-foreground">{q.explanation}</p>
            </div>
          )}

          <div className="flex items-center gap-2 pt-2">
            {!isSubmitted ? (
              <Button onClick={submit} disabled={saving} className="gap-1.5">
                <Check className="h-4 w-4" />
                提交答案
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSubmitted((s) => ({ ...s, [q.id]: false }))
                    setSelected((s) => ({ ...s, [q.id]: undefined as never }))
                  }}
                  className="gap-1"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  重做本题
                </Button>
                {page < chapterQuestions.length - 1 && (
                  <Button
                    size="sm"
                    onClick={() => setPage((p) => p + 1)}
                    className="ml-auto gap-1"
                  >
                    下一题
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Button>
                )}
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
