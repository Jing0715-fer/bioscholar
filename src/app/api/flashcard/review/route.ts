import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

/** 简化 SM-2 复习记录 */
export async function POST(req: NextRequest) {
  try {
    const { cardId, quality } = await req.json()
    if (typeof cardId !== 'string') {
      return NextResponse.json({ error: 'invalid' }, { status: 400 })
    }
    const existing = await db.flashcardReview.findUnique({ where: { cardId } })
    const q = Math.min(5, Math.max(0, Number(quality) || 0))

    let ease = 2.5
    let intervalDays = 1
    let reps = 1
    let lapses = 0

    if (existing) {
      ease = Math.max(1.3, existing.ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)))
      reps = existing.reps + 1
      lapses = existing.lapses + (q < 3 ? 1 : 0)
      if (q < 3) intervalDays = 1
      else if (reps === 1) intervalDays = 1
      else if (reps === 2) intervalDays = 6
      else intervalDays = Math.round(existing.intervalDays * ease)
    } else if (q < 3) {
      lapses = 1
    }

    const dueAt = new Date(Date.now() + intervalDays * 86400000)
    await db.flashcardReview.upsert({
      where: { cardId },
      create: { cardId, ease, intervalDays, reps, lapses, dueAt, lastReviewedAt: new Date() },
      update: { ease, intervalDays, reps, lapses, dueAt, lastReviewedAt: new Date() },
    })
    return NextResponse.json({ ok: true, intervalDays })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
