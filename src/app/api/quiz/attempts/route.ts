import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

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
    return NextResponse.json({ ok: true, count: data.length })
  } catch (e) {
    console.error('POST /api/quiz/attempts error:', e)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}
