import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

/** 仪表盘聚合统计 */
export async function GET() {
  try {
    const [progress, attempts, notes] = await Promise.all([
      db.learningProgress.findMany(),
      db.quizAttempt.findMany({ orderBy: { createdAt: 'desc' }, take: 500 }),
      db.note.findMany(),
    ])

    const total = attempts.length
    const correct = attempts.filter((a) => a.correct).length

    // 按学科统计
    const bySubject: Record<string, { completed: number; quizTotal: number; quizCorrect: number }> = {}
    for (const p of progress) {
      bySubject[p.subjectId] ??= { completed: 0, quizTotal: 0, quizCorrect: 0 }
      bySubject[p.subjectId].completed += 1
    }
    for (const a of attempts) {
      bySubject[a.subjectId] ??= { completed: 0, quizTotal: 0, quizCorrect: 0 }
      bySubject[a.subjectId].quizTotal += 1
      if (a.correct) bySubject[a.subjectId].quizCorrect += 1
    }

    // 最近 14 天学习活动（按天统计完成小节数与答题数）
    const dayMap = new Map<string, { completed: number; quiz: number }>()
    const now = new Date()
    for (let i = 13; i >= 0; i--) {
      const d = new Date(now)
      d.setDate(d.getDate() - i)
      dayMap.set(d.toISOString().slice(0, 10), { completed: 0, quiz: 0 })
    }
    for (const p of progress) {
      const key = p.completedAt.toISOString().slice(0, 10)
      if (dayMap.has(key)) dayMap.get(key)!.completed += 1
    }
    for (const a of attempts) {
      const key = a.createdAt.toISOString().slice(0, 10)
      if (dayMap.has(key)) dayMap.get(key)!.quiz += 1
    }

    return NextResponse.json({
      completedCount: progress.length,
      quizTotal: total,
      quizCorrect: correct,
      quizAccuracy: total ? Math.round((correct / total) * 100) : 0,
      noteCount: notes.length,
      bySubject,
      activity: Array.from(dayMap.entries()).map(([date, v]) => ({ date, ...v })),
    })
  } catch (e) {
    console.error('GET /api/stats error:', e)
    return NextResponse.json({
      completedCount: 0,
      quizTotal: 0,
      quizCorrect: 0,
      quizAccuracy: 0,
      noteCount: 0,
      bySubject: {},
      activity: [],
    })
  }
}
