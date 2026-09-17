import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const records = await db.quizAttempt.findMany({ orderBy: { createdAt: 'desc' }, take: 500 })
    return NextResponse.json({ records })
  } catch {
    return NextResponse.json({ records: [] })
  }
}
