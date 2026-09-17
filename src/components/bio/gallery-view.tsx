'use client'

import { useMemo, useState } from 'react'
import { Images, Filter } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { allIllustrations } from '@/data/illustrations'
import { getSubject } from '@/data/biology'
import { useAppStore } from '@/lib/store'
import { getSubjectTheme } from './subject-theme'
import { cn } from '@/lib/utils'
import type { SubjectId } from '@/lib/types'

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

export function GalleryView() {
  const [subject, setSubject] = useState<SubjectId | 'all'>('all')
  const setView = useAppStore((s) => s.setView)

  const items = useMemo(() => {
    const all = allIllustrations()
    return all.filter((it) => (subject === 'all' ? true : it.subjectId === subject))
  }, [subject])

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
      <header className="mb-5">
        <h1 className="text-xl font-bold tracking-tight md:text-2xl">教材图库</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {items.length} 张教材插图 · 真实科学图源（Wikimedia Commons / 自绘矢量图）· 点击可跳转对应小节
        </p>
      </header>

      <div className="mb-4 flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <Tabs value={subject} onValueChange={(v) => setSubject(v as SubjectId | 'all')}>
          <TabsList className="h-auto flex-wrap justify-start gap-1">
            {SUBJECTS.map((s) => (
              <TabsTrigger key={s.id} value={s.id} className="px-2.5 text-xs">
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => {
          const subjectData = getSubject(it.subjectId as SubjectId)
          const theme = getSubjectTheme(it.subjectId as SubjectId)
          const chapter = subjectData?.chapters.find((c) => c.id === it.chapterId)
          const section = chapter?.sections.find((s) => s.id === it.sectionId)
          return (
            <Card key={it.sectionId + it.illustration.src} className="group overflow-hidden">
              <button
                onClick={() =>
                  setView({
                    name: 'reader',
                    subjectId: it.subjectId as SubjectId,
                    chapterId: it.chapterId,
                    sectionId: it.sectionId,
                  })
                }
                className="block w-full text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={it.illustration.src}
                    alt={it.illustration.caption.slice(0, 50)}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="space-y-2 p-3">
                  <div className="flex items-center gap-1.5">
                    <Badge variant="outline" className={cn('text-[10px]', theme.classes.badge)}>
                      {subjectData?.name ?? it.subjectId}
                    </Badge>
                    {chapter && section && (
                      <span className="truncate text-[10px] text-muted-foreground">
                        {chapter.number}-{section.id.split('-s')[1]} {section.title}
                      </span>
                    )}
                  </div>
                  <p className="line-clamp-3 text-xs leading-5 text-muted-foreground">
                    {it.illustration.caption}
                  </p>
                  {it.illustration.credit && (
                    <p className="truncate text-[10px] text-muted-foreground/60">
                      {it.illustration.credit}
                    </p>
                  )}
                </div>
              </button>
            </Card>
          )
        })}
        {items.length === 0 && (
          <div className="col-span-full flex flex-col items-center gap-2 py-16 text-muted-foreground">
            <Images className="h-8 w-8 opacity-40" />
            <span className="text-sm">该学科的插图正在收集中</span>
          </div>
        )}
      </div>
    </div>
  )
}
