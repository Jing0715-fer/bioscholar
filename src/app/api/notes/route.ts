import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

/** 获取笔记列表 */
export async function GET() {
  try {
    const notes = await db.note.findMany({ orderBy: { updatedAt: 'desc' } })
    return NextResponse.json({ notes })
  } catch (e) {
    console.error('GET /api/notes error:', e)
    return NextResponse.json({ notes: [] })
  }
}

/** 新建笔记 */
export async function POST(req: NextRequest) {
  try {
    const { title, content, subjectId, sectionId } = await req.json()
    if (typeof title !== 'string' || !title.trim()) {
      return NextResponse.json({ error: '标题不能为空' }, { status: 400 })
    }
    const note = await db.note.create({
      data: {
        title: title.trim(),
        content: typeof content === 'string' ? content : '',
        subjectId: subjectId ?? null,
        sectionId: sectionId ?? null,
      },
    })
    return NextResponse.json({ ok: true, note })
  } catch (e) {
    console.error('POST /api/notes error:', e)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}

/** 更新笔记 */
export async function PATCH(req: NextRequest) {
  try {
    const { id, title, content } = await req.json()
    if (typeof id !== 'string') {
      return NextResponse.json({ error: 'id required' }, { status: 400 })
    }
    const note = await db.note.update({
      where: { id },
      data: {
        ...(typeof title === 'string' ? { title } : {}),
        ...(typeof content === 'string' ? { content } : {}),
      },
    })
    return NextResponse.json({ ok: true, note })
  } catch (e) {
    console.error('PATCH /api/notes error:', e)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}

/** 删除笔记 */
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json()
    if (typeof id !== 'string') {
      return NextResponse.json({ error: 'id required' }, { status: 400 })
    }
    await db.note.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('DELETE /api/notes error:', e)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}
