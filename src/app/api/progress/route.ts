import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const rows = await db.learningProgress.findMany({
      where: { completed: true },
      select: { sectionId: true },
    })
    return NextResponse.json({ sections: rows.map((r) => r.sectionId) })
  } catch {
    return NextResponse.json({ sections: [] })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { sectionId, completed } = await req.json()
    if (typeof sectionId !== 'string') {
      return NextResponse.json({ error: 'invalid' }, { status: 400 })
    }
    // 从 sectionId 解析 subjectId 与 chapterId（格式 {subjectId}-ch{n}-s{m}）
    const m = sectionId.match(/^(.+)-ch(\d+)-s(\d+)$/)
    const subjectId = m ? m[1] : 'unknown'
    const chapterId = m ? `${m[1]}-ch${m[2]}` : 'unknown'
    await db.learningProgress.upsert({
      where: { sectionId },
      create: { sectionId, subjectId, chapterId, completed: completed !== false },
      update: { completed: completed !== false },
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
