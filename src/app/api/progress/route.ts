import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

/** 获取全部已完成小节 */
export async function GET() {
  try {
    const records = await db.learningProgress.findMany({
      orderBy: { completedAt: 'desc' },
    })
    return NextResponse.json({
      sections: records.map((r) => r.sectionId),
      details: records,
    })
  } catch (e) {
    console.error('GET /api/progress error:', e)
    return NextResponse.json({ sections: [], details: [] }, { status: 200 })
  }
}

/** 标记小节完成 */
export async function POST(req: NextRequest) {
  try {
    const { sectionId, subjectId } = await req.json()
    if (typeof sectionId !== 'string' || !sectionId) {
      return NextResponse.json({ error: 'sectionId required' }, { status: 400 })
    }
    const record = await db.learningProgress.upsert({
      where: { sectionId },
      update: {},
      create: { sectionId, subjectId: subjectId ?? '' },
    })
    return NextResponse.json({ ok: true, record })
  } catch (e) {
    console.error('POST /api/progress error:', e)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}

/** 取消小节完成 */
export async function DELETE(req: NextRequest) {
  try {
    const { sectionId } = await req.json()
    if (typeof sectionId !== 'string' || !sectionId) {
      return NextResponse.json({ error: 'sectionId required' }, { status: 400 })
    }
    await db.learningProgress.deleteMany({ where: { sectionId } })
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('DELETE /api/progress error:', e)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}
