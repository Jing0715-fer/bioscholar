import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { glossary } from '@/data/glossary'
import { subjects, allQuizQuestions } from '@/data/biology'
import { schedule, isMastered, type ReviewGrade } from '@/lib/srs'

/** 错题卡 cardId 前缀（与 /api/quiz/attempts、/api/wrongbook 共用） */
const WRONG_CARD_PREFIX = 'wq-'

/** 每日新卡上限（术语卡 + 要点卡分开限额，防止一次喂太多） */
const TERM_DAILY_NEW = 12
const KP_DAILY_NEW = 6
/** 单次会话队列上限 */
const SESSION_LIMIT = 25

/** 队列卡片（术语卡 / 要点卡 / 错题卡统一结构） */
interface DueCard {
  cardId: string
  /** 卡片类型：term 术语卡 / keypoint 小节要点卡 / wrong 错题卡 */
  type: 'term' | 'keypoint' | 'wrong'
  /** 术语卡：术语名；要点卡：小节标题；错题卡：题干 */
  term: string
  english: string
  abbreviation?: string
  subjectId: string
  category: string
  /** 术语卡：词条定义 */
  definition: string
  /** 要点卡：章节路径（学科 · 第 N 章 · 章题） */
  chapterTitle?: string
  /** 要点卡：章节 id（用于回看原文） */
  chapterId?: string
  sectionId?: string
  /** 要点卡：本节要点（3-6 条） */
  keyPoints?: string[]
  /** 错题卡：题目详情 */
  question?: string
  options?: string[]
  answer?: number | number[]
  explanation?: string
  /** 错题卡：用户最近一次的错误选择（用于红绿对比） */
  userAnswer?: number[]
  isNew: boolean
  reps: number
  intervalDays: number
  ease: number
}

interface SessionStats {
  totalCards: number
  seen: number
  mastered: number
  dueNow: number
  newToday: number
  /** 待巩固错题卡数 */
  wrongDue: number
}

/** 全部小节要点卡源数据（构建一次复用） */
function buildKeypointSources() {
  const list: Array<{
    cardId: string
    subjectId: string
    chapterId: string
    chapterTitle: string
    sectionId: string
    sectionTitle: string
    keyPoints: string[]
  }> = []
  for (const subject of subjects) {
    for (const chapter of subject.chapters) {
      for (const section of chapter.sections) {
        if (section.keyPoints.length >= 3) {
          list.push({
            cardId: `kp-${section.id}`,
            subjectId: subject.id,
            chapterId: chapter.id,
            chapterTitle: `第 ${chapter.number} 章 · ${chapter.title}`,
            sectionId: section.id,
            sectionTitle: section.title,
            keyPoints: section.keyPoints,
          })
        }
      }
    }
  }
  return list
}

const KEYPOINT_SOURCES = buildKeypointSources()
const KP_IDS = new Set(KEYPOINT_SOURCES.map((k) => k.cardId))

/** 题库源（错题卡用）：cardId → 题目 + 章节路径 */
const QUIZ_SOURCES = (() => {
  const list: Array<{
    cardId: string
    subjectId: string
    chapterId: string
    chapterTitle: string
    question: string
    options: string[]
    answer: number | number[]
    explanation: string
  }> = []
  const byChapter = new Map<string, { number: number; title: string }>()
  for (const subject of subjects) {
    for (const chapter of subject.chapters) {
      byChapter.set(chapter.id, { number: chapter.number, title: chapter.title })
    }
  }
  for (const q of allQuizQuestions) {
    const ch = byChapter.get(q.chapterId)
    if (!ch) continue
    list.push({
      cardId: `${WRONG_CARD_PREFIX}${q.id}`,
      subjectId: q.subjectId,
      chapterId: q.chapterId,
      chapterTitle: `第 ${ch.number} 章 · ${ch.title}`,
      question: q.question,
      options: q.options,
      answer: q.answer,
      explanation: q.explanation,
    })
  }
  return list
})()
const WQ_IDS = new Set(QUIZ_SOURCES.map((q) => q.cardId))

/**
 * GET /api/flashcards
 * 返回本次复习队列（错题卡最优先，其次到期卡，新卡补足：术语卡 + 小节要点卡）+ 全局统计
 */
export async function GET() {
  try {
    const now = new Date()
    const reviews = await db.flashcardReview.findMany()
    const reviewMap = new Map(reviews.map((r) => [r.cardId, r]))

    // 0) 待巩固错题卡（最高优先：测验答错自动生成；含 reps=0 的未复习新错题卡）
    const wrongCards: DueCard[] = []
    for (const src of QUIZ_SOURCES) {
      const r = reviewMap.get(src.cardId)
      if (r && r.dueAt <= now) {
        wrongCards.push(toWrongCard(src, r))
      }
    }

    // 0.5) 错题卡附带用户最近一次的错误选择（背面红绿对比用）
    if (wrongCards.length > 0) {
      const qIds = wrongCards.map((c) => c.cardId.slice(WRONG_CARD_PREFIX.length))
      const attempts = await db.quizAttempt.findMany({
        where: { questionId: { in: qIds } },
        orderBy: { createdAt: 'desc' },
      })
      const latest = new Map<string, number[]>()
      for (const a of attempts) {
        if (!latest.has(a.questionId)) {
          latest.set(a.questionId, parseAnswerIdx(a.userAnswer))
        }
      }
      for (const c of wrongCards) {
        c.userAnswer = latest.get(c.cardId.slice(WRONG_CARD_PREFIX.length)) ?? []
      }
    }

    // 1) 到期待复习卡（术语 + 要点；越早到期越靠前）
    const dueCards: DueCard[] = []
    for (const t of glossary) {
      const r = reviewMap.get(t.id)
      if (r && r.dueAt <= now && r.reps > 0) {
        dueCards.push(toTermCard(t, r))
      }
    }
    for (const k of KEYPOINT_SOURCES) {
      const r = reviewMap.get(k.cardId)
      if (r && r.dueAt <= now && r.reps > 0) {
        dueCards.push(toKeypointCard(k, r))
      }
    }
    dueCards.sort((a, b) => a.intervalDays - b.intervalDays)

    // 2) 新卡补足（无记录的卡；术语卡与要点卡分别限额，交织排列避免连续同类型）
    const newTerms: DueCard[] = []
    const newKps: DueCard[] = []
    let termCount = 0
    for (const t of glossary) {
      if (!reviewMap.has(t.id)) {
        if (termCount < TERM_DAILY_NEW) {
          newTerms.push(toTermCard(t, null))
          termCount++
        }
      }
    }
    let kpCount = 0
    for (const k of KEYPOINT_SOURCES) {
      if (!reviewMap.has(k.cardId)) {
        if (kpCount < KP_DAILY_NEW) {
          newKps.push(toKeypointCard(k, null))
          kpCount++
        }
      }
    }
    // 交织：每 2 张术语卡插 1 张要点卡
    const newCards: DueCard[] = []
    let ti = 0
    let ki = 0
    while (ti < newTerms.length || ki < newKps.length) {
      for (let n = 0; n < 2 && ti < newTerms.length; n++) newCards.push(newTerms[ti++])
      if (ki < newKps.length) newCards.push(newKps[ki++])
    }

    // 3) 队列：错题卡最优先，其次到期卡 + 新卡，截断到会话上限
    const queue = [...wrongCards, ...dueCards, ...newCards].slice(0, SESSION_LIMIT)

    // 4) 全局统计（术语卡 + 要点卡 + 错题卡）
    const wqCount = reviews.filter((r) =>
      r.cardId.startsWith(WRONG_CARD_PREFIX)
    ).length
    const totalCards = glossary.length + KEYPOINT_SOURCES.length + wqCount
    const seen = reviews.filter((r) => r.reps > 0).length
    const mastered = reviews.filter((r) => r.reps > 0 && isMastered(r)).length
    const stats: SessionStats = {
      totalCards,
      seen,
      mastered,
      dueNow: dueCards.length,
      newToday: termCount + kpCount,
      wrongDue: wrongCards.length,
    }

    return NextResponse.json({ queue, stats })
  } catch (e) {
    console.error('GET /api/flashcards error:', e)
    return NextResponse.json(
      { queue: [], stats: null, error: 'internal error' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/flashcards  { cardId, grade }
 * 提交一次复习评分，SM-2 更新调度（术语卡 / 要点卡 / 错题卡统一调度）
 */
export async function POST(req: NextRequest) {
  try {
    const { cardId, grade } = await req.json()
    const validCard =
      (typeof cardId === 'string' && glossary.some((t) => t.id === cardId)) ||
      (typeof cardId === 'string' && KP_IDS.has(cardId)) ||
      (typeof cardId === 'string' && WQ_IDS.has(cardId))
    if (!validCard) {
      return NextResponse.json({ error: 'invalid cardId' }, { status: 400 })
    }
    if (typeof grade !== 'number' || ![0, 1, 2, 3].includes(grade)) {
      return NextResponse.json({ error: 'invalid grade' }, { status: 400 })
    }

    const now = new Date()
    const prev = await db.flashcardReview.findUnique({ where: { cardId } })
    const state = prev
      ? {
          ease: prev.ease,
          intervalDays: prev.intervalDays,
          reps: prev.reps,
          lapses: prev.lapses,
        }
      : {
          ease: 2.5,
          intervalDays: 0,
          reps: 0,
          lapses: 0,
        }

    const next = schedule(state, grade as ReviewGrade, now)
    const record = await db.flashcardReview.upsert({
      where: { cardId },
      update: {
        ease: next.ease,
        intervalDays: next.intervalDays,
        reps: next.reps,
        lapses: next.lapses,
        dueAt: next.dueAt,
        lastReviewedAt: now,
      },
      create: {
        cardId,
        ease: next.ease,
        intervalDays: next.intervalDays,
        reps: next.reps,
        lapses: next.lapses,
        dueAt: next.dueAt,
        lastReviewedAt: now,
      },
    })

    return NextResponse.json({
      ok: true,
      dueAt: record.dueAt,
      intervalDays: record.intervalDays,
      reps: record.reps,
      mastered: isMastered(record),
    })
  } catch (e) {
    console.error('POST /api/flashcards error:', e)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}

/** glossary 词条 + 复习记录 → 术语卡 */
function toTermCard(
  t: (typeof glossary)[number],
  r: { ease: number; intervalDays: number; reps: number } | null
): DueCard {
  return {
    cardId: t.id,
    type: 'term',
    term: t.term,
    english: t.english,
    abbreviation: t.abbreviation ?? undefined,
    subjectId: t.subjectId,
    category: t.category,
    definition: t.definition,
    isNew: !r,
    reps: r?.reps ?? 0,
    intervalDays: r?.intervalDays ?? 0,
    ease: r?.ease ?? 2.5,
  }
}

/** 小节要点源 + 复习记录 → 要点卡 */
function toKeypointCard(
  k: (typeof KEYPOINT_SOURCES)[number],
  r: { ease: number; intervalDays: number; reps: number } | null
): DueCard {
  return {
    cardId: k.cardId,
    type: 'keypoint',
    term: k.sectionTitle,
    english: '',
    subjectId: k.subjectId,
    category: '小节要点',
    definition: k.keyPoints.map((p, i) => `${i + 1}. ${p}`).join('\n'),
    chapterTitle: k.chapterTitle,
    chapterId: k.chapterId,
    sectionId: k.sectionId,
    keyPoints: k.keyPoints,
    isNew: !r,
    reps: r?.reps ?? 0,
    intervalDays: r?.intervalDays ?? 0,
    ease: r?.ease ?? 2.5,
  }
}

/** 'userAnswer' JSON → 选项索引数组（容错） */
function parseAnswerIdx(raw: string): number[] {
  try {
    const v = JSON.parse(raw)
    if (Array.isArray(v)) return v.filter((x) => typeof x === 'number')
    if (typeof v === 'number') return [v]
  } catch {
    // ignore
  }
  return []
}

/** 题库源 + 复习记录 → 错题卡（reps=0 表示答错后尚未复习过） */
function toWrongCard(
  q: (typeof QUIZ_SOURCES)[number],
  r: { ease: number; intervalDays: number; reps: number }
): DueCard {
  return {
    cardId: q.cardId,
    type: 'wrong',
    term: q.question,
    english: '',
    subjectId: q.subjectId,
    category: '测验错题',
    definition: '',
    chapterTitle: q.chapterTitle,
    chapterId: q.chapterId,
    question: q.question,
    options: q.options,
    answer: q.answer,
    explanation: q.explanation,
    isNew: r.reps === 0,
    reps: r.reps,
    intervalDays: r.intervalDays,
    ease: r.ease,
  }
}
