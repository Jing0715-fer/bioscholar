import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

/** 热力图覆盖天数（18 周） */
const DAYS = 126

/** 单日活动计数 */
interface ActivityDay {
  date: string // YYYY-MM-DD
  completed: number // 完成小节
  quiz: number // 答题
  notes: number // 新建笔记
  reviews: number // 复习卡片
  total: number
}

/**
 * GET /api/activity
 * 学习活动热力图：四类学习行为按日聚合 + 连续学习天数统计
 */
export async function GET() {
  try {
    const now = new Date()
    const start = new Date(now)
    start.setDate(start.getDate() - (DAYS - 1))
    start.setHours(0, 0, 0, 0)

    const [progress, attempts, notes, reviews] = await Promise.all([
      db.learningProgress.findMany({ where: { completedAt: { gte: start } } }),
      db.quizAttempt.findMany({ where: { createdAt: { gte: start } } }),
      db.note.findMany({ where: { createdAt: { gte: start } } }),
      db.flashcardReview.findMany({ where: { lastReviewedAt: { gte: start } } }),
    ])

    // 按日聚合（时区无关，取 UTC 日期键）
    const dayMap = new Map<
      string,
      { completed: number; quiz: number; notes: number; reviews: number }
    >()
    for (let i = 0; i < DAYS; i++) {
      const d = new Date(start)
      d.setDate(d.getDate() + i)
      dayMap.set(toKey(d), { completed: 0, quiz: 0, notes: 0, reviews: 0 })
    }
    for (const p of progress) {
      const k = toKey(p.completedAt)
      if (dayMap.has(k)) dayMap.get(k)!.completed += 1
    }
    for (const a of attempts) {
      const k = toKey(a.createdAt)
      if (dayMap.has(k)) dayMap.get(k)!.quiz += 1
    }
    for (const n of notes) {
      const k = toKey(n.createdAt)
      if (dayMap.has(k)) dayMap.get(k)!.notes += 1
    }
    for (const r of reviews) {
      if (!r.lastReviewedAt) continue
      const k = toKey(r.lastReviewedAt)
      if (dayMap.has(k)) dayMap.get(k)!.reviews += 1
    }

    const days: ActivityDay[] = Array.from(dayMap.entries()).map(
      ([date, v]) => ({
        date,
        ...v,
        total: v.completed + v.quiz + v.notes + v.reviews,
      })
    )

    // 连续学习天数：从今天（或昨天）往回数
    const activeDays = new Set(days.filter((d) => d.total > 0).map((d) => d.date))
    const today = new Date(now)
    today.setHours(0, 0, 0, 0)
    let streak = 0
    const cursor = new Date(today)
    if (!activeDays.has(toKey(cursor))) cursor.setDate(cursor.getDate() - 1)
    while (activeDays.has(toKey(cursor))) {
      streak += 1
      cursor.setDate(cursor.getDate() - 1)
    }

    // 最长连续记录（区间内）
    let maxStreak = 0
    let run = 0
    for (const d of days) {
      if (d.total > 0) {
        run += 1
        maxStreak = Math.max(maxStreak, run)
      } else {
        run = 0
      }
    }

    return NextResponse.json({
      days,
      streak,
      maxStreak,
      activeTotal: activeDays.size,
      todayTotal: days[days.length - 1]?.total ?? 0,
    })
  } catch (e) {
    console.error('GET /api/activity error:', e)
    return NextResponse.json(
      { days: [], streak: 0, maxStreak: 0, activeTotal: 0, todayTotal: 0 },
      { status: 500 }
    )
  }
}

/** Date → YYYY-MM-DD */
function toKey(d: Date): string {
  return d.toISOString().slice(0, 10)
}
