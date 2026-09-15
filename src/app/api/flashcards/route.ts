import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { glossary } from '@/data/glossary'
import { subjects } from '@/data/biology'
import { schedule, isMastered, type ReviewGrade } from '@/lib/srs'

/** 每日新卡上限（术语卡 + 要点卡分开限额，防止一次喂太多） */
const TERM_DAILY_NEW = 12
const KP_DAILY_NEW = 6
/** 单次会话队列上限 */
const SESSION_LIMIT = 25

/** 队列卡片（术语卡 / 要点卡统一结构） */
interface DueCard {
  cardId: string
  /** 卡片类型：term 术语卡 / keypoint 小节要点卡 */
  type: 'term' | 'keypoint'
  /** 术语卡：术语名；要点卡：小节标题 */
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

/**
 * GET /api/flashcards
 * 返回本次复习队列（到期卡优先，新卡补足：术语卡 + 小节要点卡）+ 全局统计
 */
export async function GET() {
  try {
    const now = new Date()
    const reviews = await db.flashcardReview.findMany()
    const reviewMap = new Map(reviews.map((r) => [r.cardId, r]))

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

    // 3) 队列：到期卡 + 新卡，截断到会话上限
    const queue = [...dueCards, ...newCards].slice(0, SESSION_LIMIT)

    // 4) 全局统计（覆盖术语卡 + 要点卡）
    const totalCards = glossary.length + KEYPOINT_SOURCES.length
    const seen = reviews.filter((r) => r.reps > 0).length
    const mastered = reviews.filter((r) => r.reps > 0 && isMastered(r)).length
    const stats: SessionStats = {
      totalCards,
      seen,
      mastered,
      dueNow: dueCards.length,
      newToday: termCount + kpCount,
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
 * 提交一次复习评分，SM-2 更新调度（术语卡与要点卡统一调度）
 */
export async function POST(req: NextRequest) {
  try {
    const { cardId, grade } = await req.json()
    const validCard =
      (typeof cardId === 'string' && glossary.some((t) => t.id === cardId)) ||
      (typeof cardId === 'string' && KP_IDS.has(cardId))
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
