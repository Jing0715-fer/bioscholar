import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { glossary } from '@/data/glossary'
import { schedule, isMastered, type ReviewGrade } from '@/lib/srs'

/** 每日新卡上限（防止一次喂太多） */
const DAILY_NEW_LIMIT = 15
/** 单次会话队列上限 */
const SESSION_LIMIT = 25

/** 待复习卡片（含术语原文与服务端调度状态） */
interface DueCard {
  cardId: string
  term: string
  english: string
  abbreviation?: string
  subjectId: string
  category: string
  definition: string
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
}

/**
 * GET /api/flashcards
 * 返回本次复习队列（到期卡优先，新卡补足）+ 全局统计
 */
export async function GET() {
  try {
    const now = new Date()
    const reviews = await db.flashcardReview.findMany()
    const reviewMap = new Map(reviews.map((r) => [r.cardId, r]))

    // 1) 到期待复习卡（旧卡优先：越早到期越靠前）
    const dueCards: DueCard[] = []
    for (const t of glossary) {
      const r = reviewMap.get(t.id)
      if (r && r.dueAt <= now && r.reps > 0) {
        dueCards.push(toCard(t, r, false))
      }
    }
    dueCards.sort((a, b) => a.intervalDays - b.intervalDays)

    // 2) 新卡补足（无记录的术语；固定顺序保证稳定体验）
    const newCards: DueCard[] = []
    let newCount = 0
    for (const t of glossary) {
      if (!reviewMap.has(t.id)) {
        if (newCount < DAILY_NEW_LIMIT) {
          newCards.push(toCard(t, null, true))
          newCount++
        }
      }
    }

    // 3) 队列：到期卡 + 新卡，截断到会话上限
    const queue = [...dueCards, ...newCards].slice(0, SESSION_LIMIT)

    // 4) 全局统计
    const seen = reviews.filter((r) => r.reps > 0).length
    const mastered = reviews.filter((r) => isMastered(r)).length
    const stats: SessionStats = {
      totalCards: glossary.length,
      seen,
      mastered,
      dueNow: dueCards.length,
      newToday: newCount,
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
 * 提交一次复习评分，SM-2 更新调度
 */
export async function POST(req: NextRequest) {
  try {
    const { cardId, grade } = await req.json()
    if (typeof cardId !== 'string' || !glossary.some((t) => t.id === cardId)) {
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

/** glossary 词条 + 复习记录 → 队列卡片 */
function toCard(
  t: (typeof glossary)[number],
  r: { ease: number; intervalDays: number; reps: number } | null,
  isNew: boolean
): DueCard {
  return {
    cardId: t.id,
    term: t.term,
    english: t.english,
    abbreviation: t.abbreviation ?? undefined,
    subjectId: t.subjectId,
    category: t.category,
    definition: t.definition,
    isNew,
    reps: r?.reps ?? 0,
    intervalDays: r?.intervalDays ?? 0,
    ease: r?.ease ?? 2.5,
  }
}
