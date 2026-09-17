import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const { attempts } = await req.json()
    if (!Array.isArray(attempts)) {
      return NextResponse.json({ error: 'invalid' }, { status: 400 })
    }
    const rows = attempts
      .filter((a) => a && typeof a.questionId === 'string')
      .map((a) => ({
        questionId: String(a.questionId),
        subjectId: String(a.subjectId ?? ''),
        chapterId: String(a.chapterId ?? ''),
        userAnswer: String(a.userAnswer ?? ''),
        correct: Boolean(a.correct),
      }))
    if (rows.length > 0) {
      await db.quizAttempt.createMany({ data: rows })
    }
    return NextResponse.json({ ok: true, saved: rows.length })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
