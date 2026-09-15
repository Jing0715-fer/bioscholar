import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { subjects } from '@/data/biology'
import { glossary } from '@/data/glossary'
import { isMastered } from '@/lib/srs'
import type { SubjectId } from '@/lib/types'

/** 学习活跃度覆盖窗口（18 周，与 /api/activity 一致） */
const DAYS = 126
/** 最近完成小节 / 最近笔记 / 最近复习条数 */
const RECENT_SECTIONS = 8
const RECENT_NOTES = 8
const RECENT_REVIEWS = 5

/** 单日活动计数（与 /api/activity 返回结构一致） */
interface ActivityDay {
  date: string // YYYY-MM-DD
  completed: number
  quiz: number
  /** 当日答对题数（周对比正确率用） */
  correct: number
  notes: number
  reviews: number
  total: number
}

/** 周对比快照（本周 vs 上周，均按自然日窗口聚合） */
interface WeeklyCompare {
  thisWeek: {
    completed: number
    quiz: number
    correct: number
    notes: number
    reviews: number
    accuracy: number
    total: number
  }
  lastWeek: {
    completed: number
    quiz: number
    correct: number
    notes: number
    reviews: number
    accuracy: number
    total: number
  }
}

interface ReportSubject {
  subjectId: SubjectId
  name: string
  englishName: string
  completedSections: number
  totalSections: number
  progress: number
  quizTotal: number
  quizCorrect: number
  accuracy: number
  wrongCount: number
  noteCount: number
}

interface RecentSection {
  sectionId: string
  subjectId: SubjectId
  chapterId: string
  sectionTitle: string
  chapterTitle: string
  completedAt: string
}

interface RecentNote {
  id: string
  title: string
  updatedAt: string
}

interface RecentReview {
  cardId: string
  /** 卡片可读名称（术语名 / 小节标题） */
  label: string
  lastReviewedAt: string
}

/** sectionId → 标题映射（小节/章节路径，静态数据） */
const SECTION_INDEX = new Map<
  string,
  {
    subjectId: SubjectId
    chapterId: string
    sectionTitle: string
    chapterTitle: string
  }
>()
for (const subject of subjects) {
  for (const chapter of subject.chapters) {
    for (const section of chapter.sections) {
      SECTION_INDEX.set(section.id, {
        subjectId: subject.id,
        chapterId: chapter.id,
        sectionTitle: section.title,
        chapterTitle: chapter.title,
      })
    }
  }
}

/** cardId → 可读名称（术语卡 g-xxx / 要点卡 kp-{sectionId}） */
const CARD_LABELS = new Map<string, string>()
for (const t of glossary) {
  CARD_LABELS.set(t.id, t.term)
}
for (const [sectionId, info] of SECTION_INDEX) {
  CARD_LABELS.set(`kp-${sectionId}`, info.sectionTitle)
}

/** 全部小节总数（203） */
const TOTAL_SECTIONS = SECTION_INDEX.size

/**
 * GET /api/report
 * 学习报告：全量学习数据聚合（概览 / 学科进展 / 活跃度 / 最近动态）
 */
export async function GET() {
  try {
    const now = new Date()
    const start = new Date(now)
    start.setDate(start.getDate() - (DAYS - 1))
    start.setHours(0, 0, 0, 0)

    const [
      progress,
      attempts,
      notes,
      reviews,
      recentProgress,
      recentNotes,
      recentReviews,
    ] = await Promise.all([
      db.learningProgress.findMany(),
      db.quizAttempt.findMany(),
      db.note.findMany(),
      db.flashcardReview.findMany(),
      // 多取一些，过滤掉静态数据中已不存在的小节后截断
      db.learningProgress.findMany({
        orderBy: { completedAt: 'desc' },
        take: RECENT_SECTIONS * 2,
      }),
      db.note.findMany({ orderBy: { updatedAt: 'desc' }, take: RECENT_NOTES }),
      db.flashcardReview.findMany({
        where: { lastReviewedAt: { not: null } },
        orderBy: { lastReviewedAt: 'desc' },
        take: RECENT_REVIEWS,
      }),
    ])

    // ---------- 概览 ----------
    const quizTotal = attempts.length
    const quizCorrect = attempts.filter((a) => a.correct).length
    const wrongCount = new Set(
      attempts.filter((a) => !a.correct).map((a) => a.questionId)
    ).size
    const cardsSeen = reviews.filter((r) => r.reps > 0).length
    const cardsMastered = reviews.filter((r) => r.reps > 0 && isMastered(r)).length
    const cardsDue = reviews.filter((r) => r.reps > 0 && r.dueAt <= now).length

    const overview = {
      completedSections: progress.length,
      totalSections: TOTAL_SECTIONS,
      quizTotal,
      quizCorrect,
      accuracy: quizTotal ? Math.round((quizCorrect / quizTotal) * 100) : 0,
      noteCount: notes.length,
      cardsSeen,
      cardsMastered,
      cardsDue,
      wrongCount,
    }

    // ---------- 学科进展 ----------
    const subjectsReport: ReportSubject[] = subjects.map((s) => {
      const total = s.chapters.reduce((a, c) => a + c.sections.length, 0)
      const completed = progress.filter((p) => p.subjectId === s.id).length
      const subjAttempts = attempts.filter((a) => a.subjectId === s.id)
      const sTotal = subjAttempts.length
      const sCorrect = subjAttempts.filter((a) => a.correct).length
      return {
        subjectId: s.id,
        name: s.name,
        englishName: s.englishName,
        completedSections: completed,
        totalSections: total,
        progress: total ? Math.round((completed / total) * 100) : 0,
        quizTotal: sTotal,
        quizCorrect: sCorrect,
        accuracy: sTotal ? Math.round((sCorrect / sTotal) * 100) : 0,
        wrongCount: new Set(
          subjAttempts.filter((a) => !a.correct).map((a) => a.questionId)
        ).size,
        noteCount: notes.filter((n) => n.subjectId === s.id).length,
      }
    })

    // ---------- 学习活跃度（近 18 周按日聚合，口径与 /api/activity 一致） ----------
    const dayMap = new Map<
      string,
      { completed: number; quiz: number; correct: number; notes: number; reviews: number }
    >()
    for (let i = 0; i < DAYS; i++) {
      const d = new Date(start)
      d.setDate(d.getDate() + i)
      dayMap.set(toKey(d), { completed: 0, quiz: 0, correct: 0, notes: 0, reviews: 0 })
    }
    for (const p of progress) {
      if (p.completedAt < start) continue
      const k = toKey(p.completedAt)
      if (dayMap.has(k)) dayMap.get(k)!.completed += 1
    }
    for (const a of attempts) {
      if (a.createdAt < start) continue
      const k = toKey(a.createdAt)
      if (dayMap.has(k)) {
        dayMap.get(k)!.quiz += 1
        if (a.correct) dayMap.get(k)!.correct += 1
      }
    }
    for (const n of notes) {
      if (n.createdAt < start) continue
      const k = toKey(n.createdAt)
      if (dayMap.has(k)) dayMap.get(k)!.notes += 1
    }
    for (const r of reviews) {
      if (!r.lastReviewedAt || r.lastReviewedAt < start) continue
      const k = toKey(r.lastReviewedAt)
      if (dayMap.has(k)) dayMap.get(k)!.reviews += 1
    }

    const days: ActivityDay[] = Array.from(dayMap.entries()).map(
      ([date, v]) => ({
        date,
        completed: v.completed,
        quiz: v.quiz,
        correct: v.correct,
        notes: v.notes,
        reviews: v.reviews,
        total: v.completed + v.quiz + v.notes + v.reviews,
      })
    )

    // ---------- 周对比快照（本周 vs 上周，各 7 天自然日窗口） ----------
    const weekAgg = (slice: ActivityDay[]) => {
      const completed = slice.reduce((a, d) => a + d.completed, 0)
      const quiz = slice.reduce((a, d) => a + d.quiz, 0)
      const correct = slice.reduce((a, d) => a + (d.correct ?? 0), 0)
      const notes = slice.reduce((a, d) => a + d.notes, 0)
      const reviews = slice.reduce((a, d) => a + d.reviews, 0)
      return {
        completed,
        quiz,
        correct,
        notes,
        reviews,
        accuracy: quiz ? Math.round((correct / quiz) * 100) : 0,
        total: completed + quiz + notes + reviews,
      }
    }
    const weeklyCompare: WeeklyCompare = {
      thisWeek: weekAgg(days.slice(-7)),
      lastWeek: weekAgg(days.slice(-14, -7)),
    }

    // 连续学习天数：从今天（或昨天）往回数
    const activeDaySet = new Set(
      days.filter((d) => d.total > 0).map((d) => d.date)
    )
    const today = new Date(now)
    today.setHours(0, 0, 0, 0)
    let streak = 0
    const cursor = new Date(today)
    if (!activeDaySet.has(toKey(cursor))) cursor.setDate(cursor.getDate() - 1)
    while (activeDaySet.has(toKey(cursor))) {
      streak += 1
      cursor.setDate(cursor.getDate() - 1)
    }

    // 区间内最长连续
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

    // ---------- 最近动态 ----------
    const recentSectionList: RecentSection[] = recentProgress
      .map((p) => {
        const idx = SECTION_INDEX.get(p.sectionId)
        if (!idx) return null
        return {
          sectionId: p.sectionId,
          subjectId: idx.subjectId,
          chapterId: idx.chapterId,
          sectionTitle: idx.sectionTitle,
          chapterTitle: idx.chapterTitle,
          completedAt: p.completedAt.toISOString(),
        }
      })
      .filter((x): x is RecentSection => x !== null)
      .slice(0, RECENT_SECTIONS)

    const recentNoteList: RecentNote[] = recentNotes.map((n) => ({
      id: n.id,
      title: n.title,
      updatedAt: n.updatedAt.toISOString(),
    }))

    const recentReviewList: RecentReview[] = recentReviews
      .filter((r) => r.lastReviewedAt !== null)
      .map((r) => ({
        cardId: r.cardId,
        label: CARD_LABELS.get(r.cardId) ?? r.cardId,
        lastReviewedAt: (r.lastReviewedAt as Date).toISOString(),
      }))
      .slice(0, RECENT_REVIEWS)

    return NextResponse.json({
      generatedAt: now.toISOString(),
      overview,
      subjects: subjectsReport,
      activity: {
        days,
        streak,
        maxStreak,
        activeDays: activeDaySet.size,
      },
      weeklyCompare,
      recent: {
        sections: recentSectionList,
        notes: recentNoteList,
        reviews: recentReviewList,
      },
    })
  } catch (e) {
    console.error('GET /api/report error:', e)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}

/** Date → YYYY-MM-DD（与 /api/activity 的 toKey 保持一致） */
function toKey(d: Date): string {
  return d.toISOString().slice(0, 10)
}
