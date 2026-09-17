import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { subjects, allSections, subjectWordCounts, totalWordCount } from '@/data/biology'

export async function GET() {
  try {
    const [progress, attempts, notes] = await Promise.all([
      db.learningProgress.findMany({ where: { completed: true }, select: { sectionId: true, subjectId: true } }),
      db.quizAttempt.findMany({ select: { subjectId: true, correct: true, chapterId: true } }),
      db.note.findMany({ select: { id: true } }),
    ])

    const completedSet = new Set(progress.map((p) => p.sectionId))
    const readWords = allSections()
      .filter((s) => completedSet.has(s.section.id))
      .reduce((acc, s) => acc + (subjectWordCounts[s.subject.id] ? 0 : 0) + wordCountOf(s.section.id), 0)

    function wordCountOf(sectionId: string) {
      const sec = allSections().find((x) => x.section.id === sectionId)
      return sec ? Math.round(sec.section.content.length / 2.2) : 0
    }

    const subjectStats = subjects.map((s) => {
      const total = s.chapters.reduce((a, c) => a + c.sections.length, 0)
      const done = s.chapters.reduce(
        (a, c) => a + c.sections.filter((sec) => completedSet.has(sec.id)).length,
        0
      )
      const attemptsFor = attempts.filter((a) => a.subjectId === s.id)
      const correct = attemptsFor.filter((a) => a.correct).length
      return {
        id: s.id,
        name: s.name,
        color: s.color,
        chapters: s.chapters.length,
        sections: total,
        completedSections: done,
        percent: total > 0 ? Math.round((done / total) * 100) : 0,
        quizAttempts: attemptsFor.length,
        quizCorrect: correct,
        accuracy: attemptsFor.length > 0 ? Math.round((correct / attemptsFor.length) * 100) : null,
        words: subjectWordCounts[s.id] ?? 0,
      }
    })

    return NextResponse.json({
      overview: {
        subjects: subjects.length,
        chapters: subjects.reduce((a, s) => a + s.chapters.length, 0),
        sections: allSections().length,
        completed: completedSet.size,
        notes: notes.length,
        quizAttempts: attempts.length,
        readWords,
        totalWords: totalWordCount,
      },
      subjectStats,
    })
  } catch {
    return NextResponse.json({ overview: null, subjectStats: [] })
  }
}
