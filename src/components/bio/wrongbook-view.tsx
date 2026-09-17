'use client'

import { useEffect, useMemo, useState } from 'react'
import { ClipboardX, RefreshCcw } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getQuizQuestions } from '@/lib/quiz-data'
import { useAppStore } from '@/lib/store'
import { getSubjectTheme } from './subject-theme'
import { cn } from '@/lib/utils'
import type { SubjectId, QuizQuestion } from '@/lib/types'

const SUBJECTS: { id: SubjectId; label: string }[] = [
  { id: 'biochemistry', label: '生物化学' },
  { id: 'molecular-biology', label: '分子生物学' },
  { id: 'cell-biology', label: '细胞生物学' },
  { id: 'biophysics', label: '生物物理学' },
  { id: 'microbiology', label: '微生物学' },
  { id: 'immunology', label: '免疫学' },
  { id: 'neurobiology', label: '神经生物学' },
  { id: 'bioinformatics', label: '生物信息学' },
]

interface WrongRecord {
  questionId: string
  subjectId: string
  chapterId: string
  userAnswer: string
  correct: boolean
  createdAt: string
}

export function WrongbookView() {
  const [records, setRecords] = useState<WrongRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<SubjectId | 'all'>('all')
  const setView = useAppStore((s) => s.setView)

  useEffect(() => {
    fetch('/api/wrongbook')
      .then((r) => r.json())
      .then((d) => setRecords(Array.isArray(d.records) ? d.records : []))
      .catch(() => setRecords([]))
      .finally(() => setLoading(false))
  }, [])

  /** 每题只保留最近一次作答 */
  const latest = useMemo(() => {
    const map = new Map<string, WrongRecord>()
    for (const r of records) {
      map.set(r.questionId, r)
    }
    return Array.from(map.values()).filter((r) => !r.correct)
  }, [records])

  const wrongBySubject = useMemo(() => {
    return latest.filter((r) => (tab === 'all' ? true : r.subjectId === tab))
  }, [latest, tab])

  const questions = useMemo(() => {
    const map = new Map<string, QuizQuestion>()
    for (const r of wrongBySubject) {
      const q = getQuizQuestions(r.subjectId).find((x) => x.id === r.questionId)
      if (q) map.set(q.id, q)
    }
    return map
  }, [wrongBySubject])

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 md:px-6 md:py-8">
      <header className="mb-5 flex items-center gap-2">
        <ClipboardX className="h-5 w-5 text-destructive" />
        <div>
          <h1 className="text-xl font-bold tracking-tight md:text-2xl">错题本</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            测验答错的题目自动收录 · 附解析 · 重做正确后自动移出
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto gap-1 text-muted-foreground"
          onClick={() => {
            setLoading(true)
            fetch('/api/wrongbook')
              .then((r) => r.json())
              .then((d) => setRecords(Array.isArray(d.records) ? d.records : []))
              .catch(() => {})
              .finally(() => setLoading(false))
          }}
        >
          <RefreshCcw className="h-3.5 w-3.5" />
          刷新
        </Button>
      </header>

      <Tabs value={tab} onValueChange={(v) => setTab(v as SubjectId | 'all')}>
        <TabsList className="h-auto flex-wrap justify-start gap-1">
          <TabsTrigger value="all" className="px-2.5 text-xs">
            全部（{latest.length}）
          </TabsTrigger>
          {SUBJECTS.map((s) => {
            const count = latest.filter((r) => r.subjectId === s.id).length
            if (count === 0) return null
            return (
              <TabsTrigger key={s.id} value={s.id} className="px-2.5 text-xs">
                {s.label}（{count}）
              </TabsTrigger>
            )
          })}
        </TabsList>
      </Tabs>

      <div className="mt-4 space-y-3">
        {loading && <div className="py-12 text-center text-sm text-muted-foreground">加载中…</div>}
        {!loading && wrongBySubject.length === 0 && (
          <div className="rounded-xl border border-dashed py-12 text-center text-sm text-muted-foreground">
            {latest.length === 0 ? '太棒了，暂无错题记录！' : '当前筛选下没有错题。'}
          </div>
        )}
        {wrongBySubject.map((r) => {
          const q = questions.get(r.questionId)
          if (!q) return null
          const theme = getSubjectTheme(r.subjectId as SubjectId)
          return (
            <Card key={r.questionId} className="p-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={theme.classes.badge}>
                  {theme.colorName}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {new Date(r.createdAt).toLocaleDateString('zh-CN')} 答错
                </span>
                <button
                  className="ml-auto text-xs text-primary hover:underline"
                  onClick={() => setView({ name: 'quiz', subjectId: r.subjectId as SubjectId })}
                >
                  去重做 →
                </button>
              </div>
              <p className="mt-2 text-sm font-semibold leading-6">{q.question}</p>
              <div className="mt-2 space-y-1 text-[13px]">
                {q.options.map((opt, i) => {
                  const isAnswer = Array.isArray(q.answer) ? q.answer.includes(i) : q.answer === i
                  return (
                    <div
                      key={i}
                      className={cn(
                        'rounded-md px-2.5 py-1.5',
                        isAnswer ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' : 'text-muted-foreground'
                      )}
                    >
                      {String.fromCharCode(65 + i)}. {opt}
                      {isAnswer && ' ✓'}
                    </div>
                  )
                })}
              </div>
              <p className="mt-2 rounded-lg bg-muted/50 p-2.5 text-xs leading-5 text-muted-foreground">
                {q.explanation}
              </p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
