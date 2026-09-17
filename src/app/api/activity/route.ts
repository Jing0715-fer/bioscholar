import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

function daysAgo(n: number) {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return d
}

export async function GET() {
  try {
    const [progress, notes, attempts, reviews] = await Promise.all([
      db.learningProgress.findMany({ where: { createdAt: { gte: daysAgo(7) } }, select: { createdAt: true } }),
      db.note.findMany({ where: { createdAt: { gte: daysAgo(7) } }, select: { createdAt: true } }),
      db.quizAttempt.findMany({ where: { createdAt: { gte: daysAgo(7) } }, select: { createdAt: true, correct: true } }),
      db.flashcardReview.findMany({ where: { lastReviewedAt: { gte: daysAgo(7) } }, select: { lastReviewedAt: true } }),
  ])
    const byDay: Record<string, { read: number; notes: number; quiz: number; review: number; quizCorrect: number }> = {}
    for (let i = 6; i >= 0; i--) {
      const key = new Date(daysAgo(i)).toISOString().slice(0, 10)
      byDay[key] = { read: 0, notes: 0, quiz: 0, review: 0, quizCorrect: 0 }
    }
    const tally = (list: { createdAt: Date }[], field: 'read' | 'notes') => {
      for (const item of list) {
        const key = item.createdAt.toISOString().slice(0, 10)
        if (byDay[key]) byDay[key][field]++
      }
    }
    tally(progress, 'read')
    tally(notes, 'notes')
    for (const a of attempts) {
      const key = a.createdAt.toISOString().slice(0, 10)
      if (byDay[key]) {
        byDay[key].quiz++
        if (a.correct) byDay[key].quizCorrect++
      }
    }
    for (const r of reviews) {
      const key = r.lastReviewedAt.toISOString().slice(0, 10)
      if (byDay[key]) byDay[key].review++
    }
    return NextResponse.json({ byDay })
  } catch {
    return NextResponse.json({ byDay: {} })
  }
}
