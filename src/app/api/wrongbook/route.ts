import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { allQuizQuestions } from '@/data/biology'
import type { SubjectId } from '@/lib/types'

interface WrongItem {
  /** 最后一次答错的时间 */
  lastWrongAt: string
  /** 答错次数 */
  wrongCount: number
  question: {
    id: string
    subjectId: SubjectId
    chapterId: string
    type: 'single' | 'multiple' | 'truefalse'
    question: string
    options: string[]
    answer: number | number[]
    explanation: string
    difficulty: 1 | 2 | 3
  }
  /** 用户最近一次的错误答案（索引数组） */
  lastUserAnswer: number[]
}

/**
 * GET /api/wrongbook
 * 错题本：聚合 QuizAttempt 中答错（含答对后又答错）的题目，
 * 按最后答错时间倒序。附带学科统计。
 */
export async function GET() {
  try {
    const attempts = await db.quizAttempt.findMany({
      orderBy: { createdAt: 'asc' },
    })

    // 按 questionId 聚合：统计错误次数与最近一次的用户答案
    interface Agg {
      wrongCount: number
      lastWrongAt: Date
      lastUserAnswer: number[]
    }
    const agg = new Map<string, Agg>()
    for (const a of attempts) {
      const item = agg.get(a.questionId)
      if (!a.correct) {
        if (item) {
          item.wrongCount += 1
          item.lastWrongAt = a.createdAt
          item.lastUserAnswer = parseAnswer(a.userAnswer)
        } else {
          agg.set(a.questionId, {
            wrongCount: 1,
            lastWrongAt: a.createdAt,
            lastUserAnswer: parseAnswer(a.userAnswer),
          })
        }
      }
    }

    // 关联题目原文，过滤已不存在的题目
    const qMap = new Map(allQuizQuestions.map((q) => [q.id, q]))
    const items: WrongItem[] = []
    for (const [questionId, a] of agg) {
      const q = qMap.get(questionId)
      if (!q) continue
      items.push({
        lastWrongAt: a.lastWrongAt.toISOString(),
        wrongCount: a.wrongCount,
        question: q,
        lastUserAnswer: a.lastUserAnswer,
      })
    }
    items.sort((x, y) => y.lastWrongAt.localeCompare(x.lastWrongAt))

    // 学科统计
    const stats: Record<string, number> = {}
    for (const it of items) {
      stats[it.question.subjectId] = (stats[it.question.subjectId] ?? 0) + 1
    }

    return NextResponse.json({ items, stats })
  } catch (e) {
    console.error('GET /api/wrongbook error:', e)
    return NextResponse.json(
      { items: [], stats: {}, error: 'internal error' },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/wrongbook  { questionId }
 * 移除一道错题（删除该题的全部作答记录，并同步移除联动生成的错题复习卡）
 */
export async function DELETE(req: Request) {
  try {
    const { questionId } = await req.json()
    if (typeof questionId !== 'string' || !questionId) {
      return NextResponse.json({ error: 'questionId required' }, { status: 400 })
    }
    await db.quizAttempt.deleteMany({ where: { questionId } })
    // 错题联动清理：该题的错题复习卡一并移除（cardId 约定：wq-{questionId}）
    await db.flashcardReview.deleteMany({
      where: { cardId: `wq-${questionId}` },
    })
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('DELETE /api/wrongbook error:', e)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}

/** 'userAnswer' JSON → 索引数组（容错） */
function parseAnswer(raw: string): number[] {
  try {
    const v = JSON.parse(raw)
    if (Array.isArray(v)) return v.filter((x) => typeof x === 'number')
    if (typeof v === 'number') return [v]
  } catch {
    // ignore
  }
  return []
}
