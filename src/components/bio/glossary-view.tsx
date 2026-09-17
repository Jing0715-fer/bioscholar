'use client'

import { useMemo, useState } from 'react'
import { Search, BookMarked } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { allGlossaryTerms } from '@/data/glossary'
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

export function GlossaryView() {
  const [query, setQuery] = useState('')
  const [subject, setSubject] = useState<SubjectId | 'all'>('all')
  const setView = useAppStore((s) => s.setView)

  const terms = useMemo(() => {
    const q = query.trim().toLowerCase()
    return allGlossaryTerms
      .filter((t) => (subject === 'all' ? true : t.subjectId === subject))
      .filter((t) =>
        !q
          ? true
          : t.term.toLowerCase().includes(q) ||
            t.english.toLowerCase().includes(q) ||
            (t.abbreviation ?? '').toLowerCase().includes(q) ||
            t.definition.toLowerCase().includes(q)
      )
  }, [query, subject])

  const grouped = useMemo(() => {
    const map = new Map<string, typeof terms>()
    for (const t of terms) {
      const key = t.category || '其他'
      if (!map.has(key)) map.set(key, [])
      map.get(key)!.push(t)
    }
    return Array.from(map.entries())
  }, [terms])

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 md:px-6 md:py-8">
      <header className="mb-5">
        <h1 className="text-xl font-bold tracking-tight md:text-2xl">术语词典</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {allGlossaryTerms.length} 条跨学科术语 · 支持中英文与缩写检索
        </p>
      </header>

      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索术语、英文或缩写…"
            className="pl-9"
          />
        </div>
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

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>共 {terms.length} 条</span>
        <span>{grouped.length} 个类别</span>
      </div>

      <ScrollArea className="mt-3 max-h-[calc(100vh-18rem)] pr-3">
        <div className="space-y-5">
          {grouped.map(([category, list]) => (
            <section key={category}>
              <h2 className="mb-2 flex items-center gap-1.5 text-sm font-semibold">
                <BookMarked className="h-4 w-4 text-primary" />
                {category}
                <span className="text-xs font-normal text-muted-foreground">（{list.length}）</span>
              </h2>
              <div className="grid gap-2.5 md:grid-cols-2">
                {list.map((t) => {
                  const theme = getSubjectTheme(t.subjectId)
                  return (
                    <Card key={t.id} className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-sm font-semibold">{t.term}</span>
                            {t.abbreviation && (
                              <Badge variant="secondary" className="text-[10px]">
                                {t.abbreviation}
                              </Badge>
                            )}
                          </div>
                          <div className="mt-0.5 text-[11px] italic text-muted-foreground">
                            {t.english}
                          </div>
                        </div>
                        <button
                          onClick={() => setView({ name: 'subjects' })}
                          className={cn(
                            'shrink-0 rounded-full border px-2 py-0.5 text-[10px] transition-colors hover:opacity-80',
                            theme.classes.badge
                          )}
                        >
                          {theme.colorName}
                        </button>
                      </div>
                      <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
                        {t.definition}
                      </p>
                    </Card>
                  )
                })}
              </div>
            </section>
          ))}
          {terms.length === 0 && (
            <div className="py-12 text-center text-sm text-muted-foreground">
              未找到匹配的术语，换个关键词试试。
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
