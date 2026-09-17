import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { allQuizQuestions } from '@/data/biology'

/** 错题卡 cardId 约定：wq-{questionId}（与 /api/flashcards、/api/wrongbook 共用） */
export const WRONG_CARD_PREFIX = 'wq-'

export function wrongCardId(questionId: string): string {
  return `${WRONG_CARD_PREFIX}${questionId}`
}

/** 获取答题统计与历史 */
export async function GET() {
  try {
    const attempts = await db.quizAttempt.findMany({
      orderBy: { createdAt: 'desc' },
      take: 500,
    })
    const total = attempts.length
    const correct = attempts.filter((a) => a.correct).length
    return NextResponse.json({
      attempts,
      stats: { total, correct, accuracy: total ? correct / total : 0 },
    })
  } catch (e) {
    console.error('GET /api/quiz/attempts error:', e)
    return NextResponse.json({ attempts: [], stats: { total: 0, correct: 0, accuracy: 0 } })
  }
}

/** 批量记录答题 */
export async function POST(req: NextRequest) {
  try {
    const { records } = await req.json()
    if (!Array.isArray(records) || records.length === 0) {
      return NextResponse.json({ error: 'records required' }, { status: 400 })
    }
    const data = records
      .filter(
        (r: unknown): r is { questionId: string; subjectId: string; chapterId: string; userAnswer: number[]; correct: boolean } =>
          typeof r === 'object' && r !== null && 'questionId' in r
      )
      .map((r) => ({
        questionId: String(r.questionId),
        subjectId: String(r.subjectId ?? ''),
        chapterId: String(r.chapterId ?? ''),
        userAnswer: JSON.stringify(r.userAnswer ?? []),
        correct: Boolean(r.correct),
      }))
    if (data.length === 0) {
      return NextResponse.json({ error: 'invalid records' }, { status: 400 })
    }
    await db.quizAttempt.createMany({ data })

    // —— 错题联动：答错的题自动生成「错题卡」进入间隔重复队列 ——
    // 首次答错：新建记录（reps=0、dueAt=now，下次进入复习队列即为最高优先）
    // 再次答错：拉回队列立即到期；若此前已「掌握」（间隔 ≥ 21 天）则重置为待巩固
    const qMap = new Map(allQuizQuestions.map((q) => [q.id, q]))
    const now = new Date()
    let linked = 0
    for (const r of data) {
      if (r.correct) continue
      if (!qMap.has(r.questionId)) continue
      const cardId = wrongCardId(r.questionId)
      const prev = await db.flashcardReview.findUnique({ where: { cardId } })
      if (prev) {
        await db.flashcardReview.update({
          where: { cardId },
          data: {
            dueAt: now,
            lapses: prev.lapses + 1,
            ...(prev.intervalDays >= 21 ? { intervalDays: 1, reps: 1 } : {}),
          },
        })
      } else {
        await db.flashcardReview.create({
          data: {
            cardId,
            ease: 2.5,
            intervalDays: 0,
            reps: 0,
            lapses: 1,
            dueAt: now,
            lastReviewedAt: null,
          },
        })
      }
      linked += 1
    }

    return NextResponse.json({ ok: true, count: data.length, wrongCards: linked })
  } catch (e) {
    console.error('POST /api/quiz/attempts error:', e)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}
