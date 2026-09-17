import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const notes = await db.note.findMany({ orderBy: { updatedAt: 'desc' } })
    return NextResponse.json({ notes })
  } catch {
    return NextResponse.json({ notes: [] })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { id, subjectId, sectionId, title, content } = await req.json()
    if (id) {
      const note = await db.note.update({
        where: { id },
        data: { title, content },
      })
      return NextResponse.json({ note })
    }
    const note = await db.note.create({
      data: { subjectId, sectionId, title, content },
    })
    return NextResponse.json({ note })
  } catch {
    return NextResponse.json({ error: 'failed' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'missing id' }, { status: 400 })
    await db.note.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
