'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useAppStore } from '@/lib/store'
import { subjects, getSubject, getQuizBySubject, getQuizByChapter } from '@/data/biology'
import type { QuizQuestion, SubjectId } from '@/lib/types'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import { toast } from 'sonner'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCheck,
  CheckCircle2,
  Layers,
  ListChecks,
  Play,
  RotateCcw,
  Shuffle,
  Timer,
  Trophy,
  XCircle,
} from 'lucide-react'

// ============================================================
// 常量与工具
// ============================================================

/** 随机挑战抽题数 */
const RANDOM_COUNT = 10

const TYPE_LABEL: Record<QuizQuestion['type'], string> = {
  single: '单选题',
  multiple: '多选题',
  truefalse: '判断题',
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'] as const

/** 学科 Tabs 激活配色（克制：学科色浅底 + 文字色，不用全色块） */
const SUBJECT_TAB_ACTIVE: Record<SubjectId, string> = {
  biochemistry:
    'data-[state=active]:bg-amber-500/10 dark:data-[state=active]:bg-amber-500/15 data-[state=active]:text-amber-700 dark:data-[state=active]:text-amber-400 data-[state=active]:shadow-none',
  'molecular-biology':
    'data-[state=active]:bg-violet-500/10 dark:data-[state=active]:bg-violet-500/15 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-400 data-[state=active]:shadow-none',
  'cell-biology':
    'data-[state=active]:bg-rose-500/10 dark:data-[state=active]:bg-rose-500/15 data-[state=active]:text-rose-700 dark:data-[state=active]:text-rose-400 data-[state=active]:shadow-none',
  biophysics:
    'data-[state=active]:bg-cyan-500/10 dark:data-[state=active]:bg-cyan-500/15 data-[state=active]:text-cyan-700 dark:data-[state=active]:text-cyan-400 data-[state=active]:shadow-none',
  microbiology:
    'data-[state=active]:bg-emerald-500/10 dark:data-[state=active]:bg-emerald-500/15 data-[state=active]:text-emerald-700 dark:data-[state=active]:text-emerald-400 data-[state=active]:shadow-none',
  bioinformatics:
    'data-[state=active]:bg-lime-500/10 dark:data-[state=active]:bg-lime-500/15 data-[state=active]:text-lime-700 dark:data-[state=active]:text-lime-400 data-[state=active]:shadow-none',
  neurobiology:
    'data-[state=active]:bg-teal-500/10 dark:data-[state=active]:bg-teal-500/15 data-[state=active]:text-teal-700 dark:data-[state=active]:text-teal-400 data-[state=active]:shadow-none',
  immunology:
    'data-[state=active]:bg-fuchsia-500/10 dark:data-[state=active]:bg-fuchsia-500/15 data-[state=active]:text-fuchsia-700 dark:data-[state=active]:text-fuchsia-400 data-[state=active]:shadow-none',
}

/** 学科主按钮配色（含 hover 深色，避免默认 hover 变主色） */
const SUBJECT_BUTTON: Record<SubjectId, string> = {
  biochemistry: 'bg-amber-600 text-white hover:bg-amber-700',
  'molecular-biology': 'bg-violet-600 text-white hover:bg-violet-700',
  'cell-biology': 'bg-rose-600 text-white hover:bg-rose-700',
  biophysics: 'bg-cyan-600 text-white hover:bg-cyan-700',
  microbiology: 'bg-emerald-600 text-white hover:bg-emerald-700',
  bioinformatics: 'bg-lime-600 text-white hover:bg-lime-700',
  neurobiology: 'bg-teal-600 text-white hover:bg-teal-700',
  immunology: 'bg-fuchsia-600 text-white hover:bg-fuchsia-700',
}

/** 章节卡学科色左边框 */
const SUBJECT_LEFT_BORDER: Record<SubjectId, string> = {
  biochemistry: 'border-l-amber-500',
  'molecular-biology': 'border-l-violet-500',
  'cell-biology': 'border-l-rose-500',
  biophysics: 'border-l-cyan-500',
  microbiology: 'border-l-emerald-500',
  bioinformatics: 'border-l-lime-500',
  neurobiology: 'border-l-teal-500',
  immunology: 'border-l-fuchsia-500',
}

interface AttemptApiItem {
  id: string
  questionId: string
  subjectId: string
  chapterId: string
  userAnswer: string
  correct: boolean
  createdAt: string
}

/** 待批量提交的答题记录 */
interface AttemptRecord {
  questionId: string
  subjectId: SubjectId
  chapterId: string
  userAnswer: number[]
  correct: boolean
}

type Phase = 'select' | 'quiz' | 'result'
type Mode = 'chapter' | 'random'

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = a[i] as T
    a[i] = a[j] as T
    a[j] = tmp
  }
  return a
}

function answerIndexes(q: QuizQuestion): number[] {
  return Array.isArray(q.answer) ? [...q.answer] : [q.answer]
}

function judgeAnswer(q: QuizQuestion, user: number[]): boolean {
  if (Array.isArray(q.answer)) {
    if (user.length !== q.answer.length) return false
    const correct = [...q.answer].sort((a, b) => a - b)
    const mine = [...user].sort((a, b) => a - b)
    return correct.every((v, i) => v === mine[i])
  }
  return user.length === 1 && user[0] === q.answer
}

function formatAnswerText(q: QuizQuestion, indexes: number[]): string {
  if (indexes.length === 0) return '未作答'
  return [...indexes]
    .sort((a, b) => a - b)
    .map((i) => {
      const opt = q.options[i]
      const letter = OPTION_LETTERS[i] ?? '?'
      return opt !== undefined ? `${letter}. ${opt}` : letter
    })
    .join('、')
}

function formatDuration(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000))
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

/** 随机挑战抽题：难度均衡（基础 3 · 进阶 5 · 挑战 2，不足从余量补齐） */
function pickRandomQuestions(pool: QuizQuestion[]): QuizQuestion[] {
  if (pool.length <= RANDOM_COUNT) return shuffle(pool)
  const buckets: QuizQuestion[][] = [[], [], []]
  for (const q of pool) {
    buckets[q.difficulty - 1]?.push(q)
  }
  const quotas = [3, 5, 2]
  const picked: QuizQuestion[] = []
  const used = new Set<string>()
  buckets.forEach((bucket, d) => {
    for (const q of shuffle(bucket).slice(0, quotas[d] ?? 0)) {
      picked.push(q)
      used.add(q.id)
    }
  })
  if (picked.length < RANDOM_COUNT) {
    for (const q of shuffle(pool.filter((item) => !used.has(item.id)))) {
      if (picked.length >= RANDOM_COUNT) break
      picked.push(q)
    }
  }
  return shuffle(picked)
}

// ============================================================
// 子组件
// ============================================================

/** 难度细文字标签：小圆点色标 + 纯文字 */
function DifficultyLabel({ level }: { level: 1 | 2 | 3 }) {
  const config =
    level === 1
      ? { label: '基础', dot: 'bg-emerald-500' }
      : level === 2
        ? { label: '进阶', dot: 'bg-amber-500' }
        : { label: '挑战', dot: 'bg-rose-500' }
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
      aria-label={`难度：${config.label}`}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', config.dot)} aria-hidden />
      {config.label}
    </span>
  )
}

function ScoreRing({ pct }: { pct: number }) {
  const R = 52
  const CIRC = 2 * Math.PI * R
  const stroke =
    pct >= 80 ? 'stroke-emerald-500' : pct >= 60 ? 'stroke-amber-500' : 'stroke-rose-500'
  const fill =
    pct >= 80
      ? 'fill-emerald-600 dark:fill-emerald-400'
      : pct >= 60
        ? 'fill-amber-600 dark:fill-amber-400'
        : 'fill-rose-600 dark:fill-rose-400'
  return (
    <svg
      viewBox="0 0 128 128"
      className="h-32 w-32 shrink-0"
      role="img"
      aria-label={`得分率 ${pct}%`}
    >
      <circle cx="64" cy="64" r={R} fill="none" className="stroke-muted" strokeWidth="10" />
      <circle
        cx="64"
        cy="64"
        r={R}
        fill="none"
        className={cn(stroke, 'transition-[stroke-dashoffset] duration-700 ease-out')}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={CIRC}
        strokeDashoffset={CIRC * (1 - Math.min(Math.max(pct, 0), 100) / 100)}
        transform="rotate(-90 64 64)"
      />
      <text
        x="64"
        y="64"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="26"
        className={cn(fill, 'font-serif font-bold')}
      >
        {pct}
      </text>
      <text x="64" y="86" textAnchor="middle" fontSize="11" className="fill-muted-foreground">
        得分率 %
      </text>
    </svg>
  )
}

// ============================================================
// 测验中心主视图
// ============================================================

export function QuizView({ subjectId }: { subjectId: SubjectId }) {
  const navigate = useAppStore((s) => s.navigate)
  const theme = getSubjectTheme(subjectId)
  const subject = getSubject(subjectId)

  const [phase, setPhase] = useState<Phase>('select')
  const [mode, setMode] = useState<Mode>('chapter')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null)
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number[]>>({})
  const [pending, setPending] = useState<number[]>([])
  const [records, setRecords] = useState<AttemptRecord[]>([])
  const [startedAt, setStartedAt] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [now, setNow] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [attempts, setAttempts] = useState<AttemptApiItem[]>([])
  /** 本次交卷联动生成的错题卡数（用于结果页提示） */
  const [linkedWrongCards, setLinkedWrongCards] = useState(0)

  const pool = useMemo(() => getQuizBySubject(subjectId), [subjectId])
  const diffCounts = useMemo(() => {
    const counts = [0, 0, 0]
    for (const q of pool) counts[q.difficulty - 1] += 1
    return counts
  }, [pool])

  /** 该学科历史答题统计（从 API 全量记录中过滤） */
  const subjectStats = useMemo(() => {
    const mine = attempts.filter((a) => a.subjectId === subjectId)
    const total = mine.length
    const correct = mine.filter((a) => a.correct).length
    return { total, correct, accuracy: total > 0 ? Math.round((correct / total) * 100) : 0 }
  }, [attempts, subjectId])

  /** 各章节历史答题统计 */
  const chapterStats = useMemo(() => {
    const map = new Map<string, { total: number; correct: number }>()
    for (const a of attempts) {
      if (a.subjectId !== subjectId) continue
      const prev = map.get(a.chapterId)
      if (prev) {
        prev.total += 1
        if (a.correct) prev.correct += 1
      } else {
        map.set(a.chapterId, { total: 1, correct: a.correct ? 1 : 0 })
      }
    }
    return map
  }, [attempts, subjectId])

  const loadAttempts = useCallback(async () => {
    try {
      const res = await fetch('/api/quiz/attempts')
      if (!res.ok) return
      const data = (await res.json()) as { attempts?: AttemptApiItem[] }
      setAttempts(data.attempts ?? [])
    } catch {
      // 网络异常时静默处理，不影响本地练习
    }
  }, [])

  useEffect(() => {
    void loadAttempts()
  }, [loadAttempts])

  // 答题中每秒刷新计时
  useEffect(() => {
    if (phase !== 'quiz') return
    setNow(Date.now())
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [phase])

  const current = questions[index]
  const currentAnswer = current ? (answers[current.id] ?? []) : []
  const answered = current ? answers[current.id] !== undefined : false
  const answeredCount = useMemo(
    () => questions.filter((q) => answers[q.id] !== undefined).length,
    [questions, answers]
  )

  const startQuiz = useCallback((qs: QuizQuestion[], m: Mode, chapterId: string | null) => {
    setQuestions(qs)
    setMode(m)
    setActiveChapterId(chapterId)
    setIndex(0)
    setAnswers({})
    setPending([])
    setRecords([])
    setLinkedWrongCards(0)
    setStartedAt(Date.now())
    setElapsed(0)
    setPhase('quiz')
  }, [])

  const startChapter = (chapterId: string) => {
    const qs = getQuizByChapter(chapterId)
    if (qs.length === 0) {
      toast.error('该章节暂无题目')
      return
    }
    startQuiz(shuffle(qs), 'chapter', chapterId)
  }

  const startRandom = () => {
    if (pool.length === 0) {
      toast.error('该学科暂无题目')
      return
    }
    startQuiz(pickRandomQuestions(pool), 'random', null)
  }

  const commitAnswer = (userAnswer: number[]) => {
    const q = questions[index]
    if (!q || answers[q.id] !== undefined || userAnswer.length === 0) return
    const correct = judgeAnswer(q, userAnswer)
    setAnswers((prev) => ({ ...prev, [q.id]: userAnswer }))
    setRecords((prev) => [
      ...prev,
      {
        questionId: q.id,
        subjectId: q.subjectId,
        chapterId: q.chapterId,
        userAnswer,
        correct,
      },
    ])
  }

  const togglePending = (i: number) => {
    setPending((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]))
  }

  const finishQuiz = useCallback(async () => {
    setElapsed(Date.now() - startedAt)
    setPhase('result')
    if (records.length === 0) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/quiz/attempts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ records }),
      })
      if (!res.ok) throw new Error('submit failed')
      const data = (await res.json()) as { count?: number; wrongCards?: number }
      setLinkedWrongCards(data.wrongCards ?? 0)
      toast.success(`成绩已记录 · 共提交 ${data.count ?? records.length} 条答题记录`)
      await loadAttempts()
    } catch {
      toast.error('答题记录提交失败，统计可能未更新')
    } finally {
      setSubmitting(false)
    }
  }, [records, startedAt, loadAttempts])

  const goNext = () => {
    if (!answered) return
    if (index >= questions.length - 1) {
      void finishQuiz()
    } else {
      setIndex((i) => i + 1)
      setPending([])
    }
  }

  const exitQuiz = () => {
    setPhase('select')
    setQuestions([])
    setPending([])
  }

  const restart = () => {
    if (mode === 'chapter' && activeChapterId) startChapter(activeChapterId)
    else startRandom()
  }

  const correctCount = records.filter((r) => r.correct).length
  const scorePct =
    records.length > 0 ? Math.round((correctCount / records.length) * 100) : 0
  const scoreComment =
    scorePct >= 90
      ? '出色！知识点掌握非常扎实'
      : scorePct >= 70
        ? '不错的成绩，再查漏补缺就更完美'
        : scorePct >= 50
          ? '刚过半数，结合解析巩固薄弱环节'
          : '别灰心，读懂解析后再战一轮'
  const scoreTextCls =
    scorePct >= 80
      ? 'text-emerald-600 dark:text-emerald-400'
      : scorePct >= 60
        ? 'text-amber-600 dark:text-amber-400'
        : 'text-rose-600 dark:text-rose-400'

  const activeChapterTitle =
    mode === 'chapter' && activeChapterId
      ? subject?.chapters.find((c) => c.id === activeChapterId)?.title
      : undefined

  // ============================================================
  // 渲染
  // ============================================================

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      {/* 顶部标题 + 学科统计（编辑式头部） */}
      <header>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="bio-eyebrow text-muted-foreground">Self-Assessment Center</p>
            <h1 className="mt-2 font-serif text-xl font-bold tracking-tight sm:text-2xl">
              测验中心
            </h1>
          </div>
          <p
            className="text-xs text-muted-foreground sm:text-sm"
            aria-label="该学科答题统计"
          >
            <span>已答 </span>
            <span
              className={cn(
                'font-serif text-sm font-bold tabular-nums',
                subjectStats.total > 0 ? theme.classes.text : 'text-foreground'
              )}
            >
              {subjectStats.total}
            </span>
            <span> 题</span>
            <span className="mx-1.5 opacity-30" aria-hidden>
              ·
            </span>
            <span>正确率 </span>
            <span
              className={cn(
                'font-serif text-sm font-bold tabular-nums',
                subjectStats.total > 0 ? theme.classes.text : 'text-foreground'
              )}
            >
              {subjectStats.accuracy}%
            </span>
          </p>
        </div>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {subject ? `${subject.name} · ` : ''}题库共 {pool.length} 题 · 即时判分与解析
        </p>
        <div className="bio-rule mt-4" aria-hidden />
      </header>

      {/* 学科选择 */}
      <Tabs
        value={subjectId}
        onValueChange={(v) => navigate({ name: 'quiz', subjectId: v as SubjectId })}
        className="mt-4"
      >
        <TabsList className="grid h-auto w-full grid-cols-2 gap-1 sm:grid-cols-4">
          {subjects.map((s) => {
            const t = getSubjectTheme(s.id)
            return (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className={cn('h-9 gap-1.5 hover:bg-accent', SUBJECT_TAB_ACTIVE[s.id])}
              >
                <t.icon className="h-4 w-4" />
                {s.name}
              </TabsTrigger>
            )
          })}
        </TabsList>
      </Tabs>

      {/* ---------- 模式选择 ---------- */}
      {phase === 'select' && (
        <Tabs
          value={mode}
          onValueChange={(v) => setMode(v as Mode)}
          className="mt-5 bio-fade-up"
        >
          <TabsList>
            <TabsTrigger value="chapter" className="gap-1.5">
              <BookOpen className="h-4 w-4" />
              章节练习
            </TabsTrigger>
            <TabsTrigger value="random" className="gap-1.5">
              <Shuffle className="h-4 w-4" />
              随机挑战
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chapter" className="mt-4">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {(subject?.chapters ?? []).map((ch) => {
                const count = getQuizByChapter(ch.id).length
                const cs = chapterStats.get(ch.id)
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => startChapter(ch.id)}
                    disabled={count === 0}
                    className={cn(
                      'group flex items-start gap-3.5 rounded-lg border border-l-4 bg-card p-4 text-left outline-none transition-colors hover:bg-accent/30 focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                      SUBJECT_LEFT_BORDER[subjectId]
                    )}
                    aria-label={`开始练习：第 ${ch.number} 章 ${ch.title}，共 ${count} 题`}
                  >
                    <span
                      className="font-serif text-[1.7rem] font-bold leading-none tabular-nums text-muted-foreground/50 transition-colors group-hover:text-foreground/80"
                      aria-hidden
                    >
                      {String(ch.number).padStart(2, '0')}
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="font-serif text-[15px] font-semibold leading-snug">
                        {ch.title}
                      </span>
                      <span className="mt-1.5 text-xs tabular-nums leading-relaxed text-muted-foreground">
                        {count} 题
                        {cs && cs.total > 0
                          ? ` · 已答 ${cs.total} · 正确率 ${Math.round((cs.correct / cs.total) * 100)}%`
                          : ' · 尚未练习'}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="random" className="mt-4">
            <Card className="relative overflow-hidden">
              <div
                className={cn('h-1 w-full bg-gradient-to-r', theme.classes.gradient)}
                aria-hidden
              />
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:p-10">
                <div>
                  <p className="bio-eyebrow text-muted-foreground">Random Challenge</p>
                  <h3 className="mt-2 font-serif text-lg font-bold sm:text-xl">
                    随机挑战{subject ? ` · ${subject.name}` : ''}
                  </h3>
                </div>
                <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
                  跨章节随机抽取 {Math.min(RANDOM_COUNT, pool.length)} 道题，难度均衡搭配，
                  检验综合掌握程度。答完即刻提交并计入统计。
                </p>
                <p className="text-xs tabular-nums text-muted-foreground">
                  <span>基础 × {diffCounts[0]}</span>
                  <span className="mx-1.5 opacity-30" aria-hidden>
                    ·
                  </span>
                  <span>进阶 × {diffCounts[1]}</span>
                  <span className="mx-1.5 opacity-30" aria-hidden>
                    ·
                  </span>
                  <span>挑战 × {diffCounts[2]}</span>
                </p>
                <Button
                  size="lg"
                  className={cn('mt-1', SUBJECT_BUTTON[subjectId])}
                  onClick={startRandom}
                  disabled={pool.length === 0}
                >
                  <Play className="mr-1 h-4 w-4" />
                  开始挑战
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}

      {/* ---------- 答题界面 ---------- */}
      {phase === 'quiz' && current && (
        <Card key={current.id} className="mt-5 bio-fade-up">
          <CardContent className="p-5 sm:p-6">
            {/* 题头：题号 / 题型 / 难度 / 计时 */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2.5 text-sm">
                <span className="font-serif font-bold tabular-nums">
                  第 {index + 1} / {questions.length} 题
                </span>
                <Badge variant="outline" className="text-[11px]">
                  {TYPE_LABEL[current.type]}
                </Badge>
                <DifficultyLabel level={current.difficulty} />
              </div>
              <span
                className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground"
                aria-label="已用时"
              >
                <Timer className="h-3.5 w-3.5" />
                {formatDuration(Math.max(0, now - startedAt))}
              </span>
            </div>
            <Progress
              value={Math.round((answeredCount / questions.length) * 100)}
              className="mt-3 h-1.5"
              aria-label={`已答 ${answeredCount} / ${questions.length} 题`}
            />
            <p className="mt-2 text-xs text-muted-foreground">
              {mode === 'random' ? '随机挑战 · 跨章节' : `章节练习${activeChapterTitle ? ` · ${activeChapterTitle}` : ''}`}
            </p>

            {/* 题干 */}
            <p className="mt-4 font-serif text-base font-semibold leading-relaxed sm:text-lg">
              {current.question}
            </p>

            {/* 选项：单选 */}
            {current.type === 'single' && (
              <RadioGroup
                value={currentAnswer.length > 0 ? String(currentAnswer[0]) : ''}
                onValueChange={(v) => commitAnswer([Number(v)])}
                disabled={answered}
                className="mt-4 gap-3"
              >
                {current.options.map((opt, i) => {
                  const isCorrectOpt = answerIndexes(current).includes(i)
                  const isUserOpt = currentAnswer.includes(i)
                  return (
                    <label
                      key={i}
                      htmlFor={`${current.id}-opt-${i}`}
                      className={cn(
                        'flex items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-all',
                        answered
                          ? isCorrectOpt
                            ? 'border-emerald-500 bg-emerald-500/10'
                            : isUserOpt
                              ? 'border-rose-500 bg-rose-500/10'
                              : 'border-border opacity-60'
                          : 'cursor-pointer border-border hover:border-primary/50 hover:bg-accent/50 has-[[data-state=checked]]:border-primary/60 has-[[data-state=checked]]:bg-accent/50'
                      )}
                    >
                      <RadioGroupItem value={String(i)} id={`${current.id}-opt-${i}`} />
                      <span className="font-semibold text-muted-foreground">
                        {OPTION_LETTERS[i]}
                      </span>
                      <span className="min-w-0 flex-1 leading-relaxed">{opt}</span>
                      {answered && isCorrectOpt && (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                      )}
                      {answered && isUserOpt && !isCorrectOpt && (
                        <XCircle className="h-4 w-4 shrink-0 text-rose-500" />
                      )}
                    </label>
                  )
                })}
              </RadioGroup>
            )}

            {/* 选项：判断 */}
            {current.type === 'truefalse' && (
              <div className="mt-4 grid grid-cols-2 gap-3">
                {current.options.map((opt, i) => {
                  const isCorrectOpt = answerIndexes(current).includes(i)
                  const isUserOpt = currentAnswer.includes(i)
                  return (
                    <button
                      key={i}
                      type="button"
                      disabled={answered}
                      onClick={() => commitAnswer([i])}
                      className={cn(
                        'flex h-14 items-center justify-center gap-2 rounded-xl border text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default',
                        answered
                          ? isCorrectOpt
                            ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                            : isUserOpt
                              ? 'border-rose-500 bg-rose-500/10 text-rose-700 dark:text-rose-400'
                              : 'border-border opacity-60'
                          : 'cursor-pointer border-border hover:border-primary/50 hover:bg-accent/60 active:scale-[0.98]'
                      )}
                      aria-label={opt}
                    >
                      {i === 0 ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <XCircle className="h-5 w-5" />
                      )}
                      {opt}
                    </button>
                  )
                })}
              </div>
            )}

            {/* 选项：多选 */}
            {current.type === 'multiple' && (
              <div className="mt-4 space-y-3">
                {current.options.map((opt, i) => {
                  const isCorrectOpt = answerIndexes(current).includes(i)
                  const isUserOpt = currentAnswer.includes(i)
                  const checked = answered ? isUserOpt : pending.includes(i)
                  return (
                    <label
                      key={i}
                      className={cn(
                        'flex items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-all',
                        answered
                          ? isCorrectOpt
                            ? 'border-emerald-500 bg-emerald-500/10'
                            : isUserOpt
                              ? 'border-rose-500 bg-rose-500/10'
                              : 'border-border opacity-60'
                          : 'cursor-pointer border-border hover:border-primary/50 hover:bg-accent/50 has-[[data-state=checked]]:border-primary/60 has-[[data-state=checked]]:bg-accent/50'
                      )}
                    >
                      <Checkbox
                        checked={checked}
                        onCheckedChange={() => togglePending(i)}
                        disabled={answered}
                        aria-label={`选项 ${OPTION_LETTERS[i]}：${opt}`}
                      />
                      <span className="font-semibold text-muted-foreground">
                        {OPTION_LETTERS[i]}
                      </span>
                      <span className="min-w-0 flex-1 leading-relaxed">{opt}</span>
                      {answered && isCorrectOpt && (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                      )}
                      {answered && isUserOpt && !isCorrectOpt && (
                        <XCircle className="h-4 w-4 shrink-0 text-rose-500" />
                      )}
                    </label>
                  )
                })}
                {!answered && (
                  <Button
                    onClick={() => commitAnswer(pending)}
                    disabled={pending.length === 0}
                    className="w-full sm:w-auto"
                  >
                    <CheckCheck className="mr-1 h-4 w-4" />
                    确认答案{pending.length > 0 ? `（已选 ${pending.length} 项）` : ''}
                  </Button>
                )}
              </div>
            )}

            {/* 判分反馈 */}
            {answered && (
              <div
                className={cn(
                  'mt-4 rounded-lg border p-4 text-sm',
                  judgeAnswer(current, currentAnswer)
                    ? 'border-emerald-500/40 bg-emerald-500/5'
                    : 'border-rose-500/40 bg-rose-500/5'
                )}
                role="status"
              >
                <div className="flex flex-wrap items-center gap-2 font-semibold">
                  {judgeAnswer(current, currentAnswer) ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span className="text-emerald-700 dark:text-emerald-400">回答正确</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4 w-4 text-rose-500" />
                      <span className="text-rose-700 dark:text-rose-400">回答错误</span>
                      <span className="font-normal text-muted-foreground">
                        正确答案：{formatAnswerText(current, answerIndexes(current))}
                      </span>
                    </>
                  )}
                </div>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">解析：</span>
                  {current.explanation}
                </p>
              </div>
            )}

            {/* 底部操作 */}
            <div className="mt-5 flex items-center justify-between gap-3">
              <Button variant="ghost" size="sm" onClick={exitQuiz} className="text-muted-foreground">
                <ArrowLeft className="mr-1 h-4 w-4" />
                退出练习
              </Button>
              <Button onClick={goNext} disabled={!answered} className={SUBJECT_BUTTON[subjectId]}>
                {index >= questions.length - 1 ? '查看成绩' : '下一题'}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* ---------- 结果页 ---------- */}
      {phase === 'result' && (
        <Card className="mt-5 bio-fade-up">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
              <ScoreRing pct={scorePct} />
              <div className="min-w-0 flex-1 text-center sm:text-left">
                <h2 className={cn('flex items-center justify-center gap-2 text-xl font-bold sm:justify-start', scoreTextCls)}>
                  <Trophy className="h-5 w-5 shrink-0" />
                  {scoreComment}
                </h2>
                <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:justify-start">
                  <span>
                    <span className="text-muted-foreground">答对 </span>
                    <span className={cn('font-serif text-base font-bold tabular-nums', scoreTextCls)}>
                      {correctCount}
                    </span>
                    <span className="text-muted-foreground"> / {records.length} 题</span>
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Timer className="h-3.5 w-3.5" />
                    用时 <span className="tabular-nums text-foreground">{formatDuration(elapsed)}</span>
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {submitting ? '正在提交答题记录…' : '答题记录已提交，计入学科统计'}
                </p>
                {linkedWrongCards > 0 && (
                  <button
                    className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-rose-500/30 bg-rose-500/5 px-3 py-2 text-xs text-rose-700 outline-none transition-colors hover:border-rose-500/50 hover:bg-rose-500/10 focus-visible:ring-2 focus-visible:ring-ring dark:text-rose-400"
                    onClick={() => navigate({ name: 'revision' })}
                  >
                    <Layers className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>
                      <span className="font-semibold tabular-nums">{linkedWrongCards}</span>{' '}
                      道错题已自动加入复习卡片，点击前往巩固
                    </span>
                    <ArrowRight className="h-3 w-3 shrink-0" aria-hidden="true" />
                  </button>
                )}
                <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                  <Button onClick={restart} className={SUBJECT_BUTTON[subjectId]}>
                    <RotateCcw className="mr-1 h-4 w-4" />
                    再来一轮
                  </Button>
                  <Button variant="outline" onClick={() => setPhase('select')}>
                    <ListChecks className="mr-1 h-4 w-4" />
                    返回选题
                  </Button>
                  <Button variant="ghost" onClick={() => navigate({ name: 'subjects' })}>
                    返回学科
                  </Button>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <h3 className="text-sm font-semibold text-muted-foreground">答题回顾</h3>
            <div className="bio-scroll mt-3 max-h-96 space-y-2.5 overflow-y-auto pr-1">
              {questions.map((q, i) => {
                const userAns = answers[q.id] ?? []
                const ok = judgeAnswer(q, userAns)
                return (
                  <div key={q.id} className="rounded-lg border p-3 sm:p-4">
                    <div className="flex items-start gap-2">
                      {ok ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      ) : (
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                          <span className="font-semibold tabular-nums text-foreground">
                            第 {i + 1} 题
                          </span>
                          <Badge variant="outline" className="text-[10px]">
                            {TYPE_LABEL[q.type]}
                          </Badge>
                          <DifficultyLabel level={q.difficulty} />
                        </div>
                        <p className="mt-1 text-sm font-medium leading-snug">{q.question}</p>
                        <p className="mt-1.5 text-xs leading-relaxed">
                          <span className="text-muted-foreground">你的答案：</span>
                          <span
                            className={cn(
                              'font-medium',
                              ok
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-rose-600 dark:text-rose-400'
                            )}
                          >
                            {formatAnswerText(q, userAns)}
                          </span>
                          {!ok && (
                            <>
                              <span className="ml-3 text-muted-foreground">正确答案：</span>
                              <span className="font-medium text-emerald-600 dark:text-emerald-400">
                                {formatAnswerText(q, answerIndexes(q))}
                              </span>
                            </>
                          )}
                        </p>
                        {!ok && (
                          <p className="mt-1.5 rounded-md bg-muted/60 p-2 text-xs leading-relaxed text-muted-foreground">
                            {q.explanation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
