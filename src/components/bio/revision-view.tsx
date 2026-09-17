'use client'

import { useEffect, useMemo, useState } from 'react'
import { RotateCcw, ChevronRight, Check } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { allSections } from '@/data/biology'
import { useAppStore } from '@/lib/store'
import { getSubjectTheme } from './subject-theme'
import { cn } from '@/lib/utils'
import type { SubjectId, Flashcard } from '@/lib/types'

const SUBJECTS: { id: SubjectId | 'all'; label: string }[] = [
  { id: 'all', label: '全部' },
  { id: 'biochemistry', label: '生物化学' },
  { id: 'molecular-biology', label: '分子生物学' },
  { id: 'cell-biology', label: '细胞生物学' },
  { id: 'biophysics', label: '生物物理学' },
  { id: 'microbiology', label: '微生物学' },
  { id: 'immunology', label: '免疫学' },
  { id: 'neurobiology', label: '神经生物学' },
  { id: 'bioinformatics', label: '生物信息学' },
]

/** 由全部小节的 keyPoints 生成复习卡片 */
export function useFlashcards(): Flashcard[] {
  return useMemo(() => {
    const cards: Flashcard[] = []
    for (const { subject, chapter, section } of allSections()) {
      section.keyPoints.forEach((kp, i) => {
        cards.push({
          id: `${section.id}-kp${i}`,
          subjectId: subject.id,
          chapterId: chapter.id,
          sectionId: section.id,
          sectionTitle: section.title,
          front: `${section.title} · 要点 ${i + 1}\n\n（来自《${subject.name}》第 ${chapter.number} 章）`,
          back: kp,
        })
      })
    }
    return cards
  }, [])
}

export function RevisionView() {
  const cards = useFlashcards()
  const [subject, setSubject] = useState<SubjectId | 'all'>('all')
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [reviewed, setReviewed] = useState<Set<string>>(new Set())
  const setView = useAppStore((s) => s.setView)

  const filtered = useMemo(
    () => cards.filter((c) => (subject === 'all' ? true : c.subjectId === subject)),
    [cards, subject]
  )

  const card = filtered[index]
  const theme = card ? getSubjectTheme(card.subjectId) : null

  const next = (remembered: boolean) => {
    if (remembered && card) {
      setReviewed((r) => new Set(r).add(card.id))
      // 记录到后端（SM-2 简化版）
      fetch('/api/flashcard/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardId: card.id, quality: 4 }),
      }).catch(() => {})
    }
    setFlipped(false)
    if (index < filtered.length - 1) setIndex((i) => i + 1)
    else toast.success('本组卡片复习完毕 🎉')
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 md:px-6 md:py-8">
      <header className="mb-5">
        <h1 className="text-xl font-bold tracking-tight md:text-2xl">复习卡片</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          由各节「要点」自动生成 · 翻卡自测 · 间隔重复
        </p>
      </header>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Tabs value={subject} onValueChange={(v) => { setSubject(v as SubjectId | 'all'); setIndex(0); setFlipped(false) }}>
          <TabsList className="h-auto flex-wrap justify-start gap-1">
            {SUBJECTS.map((s) => (
              <TabsTrigger key={s.id} value={s.id} className="px-2.5 text-xs">
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
          <RotateCcw className="h-3.5 w-3.5" />
          {filtered.length > 0 ? `${index + 1}/${filtered.length} 张` : '0 张'}
        </div>
      </div>

      <Progress value={filtered.length ? ((index + 1) / filtered.length) * 100 : 0} className="mb-4 h-1.5" />

      {card && theme ? (
        <Card
          className="cursor-pointer select-none p-8 text-center transition-all hover:shadow-md"
          onClick={() => setFlipped((f) => !f)}
        >
          <div className="mb-3 flex items-center justify-center gap-2">
            <Badge variant="outline" className={theme.classes.badge}>
              {flipped ? '答案' : '题目'}
            </Badge>
            <span className="text-xs text-muted-foreground">{card.sectionTitle}</span>
          </div>
          <div className="min-h-32 flex items-center justify-center">
            {flipped ? (
              <p className="max-w-xl text-[15px] font-medium leading-7">{card.back}</p>
            ) : (
              <p className="max-w-md whitespace-pre-line text-sm leading-6 text-muted-foreground">
                {card.front}
              </p>
            )}
          </div>
          <p className="mt-4 text-[11px] text-muted-foreground/60">点击卡片{flipped ? '看题面' : '查看答案'}</p>
        </Card>
      ) : (
        <div className="rounded-xl border border-dashed py-16 text-center text-sm text-muted-foreground">
          该学科暂无卡片
        </div>
      )}

      {card && (
        <div className="mt-4 flex items-center justify-center gap-2">
          <Button variant="outline" size="sm" onClick={() => next(false)} className="gap-1">
            再想想
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>
          <Button size="sm" onClick={() => next(true)} className="gap-1">
            <Check className="h-3.5 w-3.5" />
            记住了
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setView({ name: 'reader', subjectId: card.subjectId, chapterId: card.chapterId, sectionId: card.sectionId })}
          >
            回到小节
          </Button>
        </div>
      )}

      {reviewed.size > 0 && (
        <p className="mt-4 text-center text-xs text-muted-foreground">
          本次已巩固 {reviewed.size} 张卡片
        </p>
      )}
    </div>
  )
}
