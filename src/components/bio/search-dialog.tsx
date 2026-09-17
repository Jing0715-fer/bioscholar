'use client'

import { useEffect, useMemo, useState } from 'react'
import { Search, FileText, BookMarked, ArrowRight } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useAppStore } from '@/lib/store'
import { allSections } from '@/data/biology'
import { allGlossaryTerms } from '@/data/glossary'
import { allIllustrations } from '@/data/illustrations'
import { getSubjectTheme } from './subject-theme'
import { cn } from '@/lib/utils'
import type { SubjectId } from '@/lib/types'

interface SearchHit {
  type: 'section' | 'term' | 'figure'
  id: string
  title: string
  desc: string
  subjectId: SubjectId
  chapterId?: string
  sectionId?: string
}

export function SearchDialog() {
  const open = useAppStore((s) => s.searchOpen)
  const setOpen = useAppStore((s) => s.setSearchOpen)
  const setView = useAppStore((s) => s.setView)
  const [query, setQuery] = useState('')

  const hits = useMemo<SearchHit[]>(() => {
    const q = query.trim().toLowerCase()
    if (!q || q.length < 1) return []
    const out: SearchHit[] = []

    for (const { subject, chapter, section } of allSections()) {
      if (
        section.title.toLowerCase().includes(q) ||
        chapter.title.toLowerCase().includes(q) ||
        section.content.toLowerCase().includes(q) ||
        section.terms.some((t) => t.toLowerCase().includes(q))
      ) {
        const snippet = findSnippet(section.content, q)
        out.push({
          type: 'section',
          id: section.id,
          title: section.title,
          desc: `${subject.name} · 第 ${chapter.number} 章 ${chapter.title}${snippet ? ' · ' + snippet : ''}`,
          subjectId: subject.id,
          chapterId: chapter.id,
          sectionId: section.id,
        })
      }
    }

    for (const t of allGlossaryTerms) {
      if (
        t.term.toLowerCase().includes(q) ||
        t.english.toLowerCase().includes(q) ||
        (t.abbreviation ?? '').toLowerCase().includes(q)
      ) {
        out.push({
          type: 'term',
          id: t.id,
          title: `${t.term}（${t.english}）`,
          desc: t.definition.slice(0, 60) + '…',
          subjectId: t.subjectId,
        })
      }
    }

    for (const it of allIllustrations()) {
      if (it.illustration.caption.toLowerCase().includes(q)) {
        out.push({
          type: 'figure',
          id: it.sectionId + it.illustration.src,
          title: it.illustration.caption.slice(0, 30) + '…',
          desc: `教材插图 · ${it.subjectId}`,
          subjectId: it.subjectId as SubjectId,
          chapterId: it.chapterId,
          sectionId: it.sectionId,
        })
      }
    }

    return out.slice(0, 30)
  }, [query])

  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  const go = (hit: SearchHit) => {
    setOpen(false)
    if (hit.type === 'term') {
      setView({ name: 'glossary' })
    } else if (hit.sectionId && hit.chapterId) {
      setView({
        name: 'reader',
        subjectId: hit.subjectId,
        chapterId: hit.chapterId,
        sectionId: hit.sectionId,
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="top-24 max-w-xl translate-y-0 p-0 sm:rounded-xl">
        <DialogHeader className="border-b p-4">
          <DialogTitle className="flex items-center gap-2 text-sm">
            <Search className="h-4 w-4 text-muted-foreground" />
            全局搜索
            <kbd className="ml-auto rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              ESC 关闭
            </kbd>
          </DialogTitle>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索小节、术语、插图…（支持中英文）"
            className="mt-1 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </DialogHeader>

        <ScrollArea className="max-h-96">
          <div className="p-2">
            {hits.length === 0 && query && (
              <p className="py-8 text-center text-sm text-muted-foreground">未找到相关内容</p>
            )}
            {!query && (
              <p className="py-8 text-center text-sm text-muted-foreground">
                输入关键词检索全站教材 · 术语词典 · 教材图库
              </p>
            )}
            {hits.map((hit) => {
              const theme = getSubjectTheme(hit.subjectId)
              const Icon = hit.type === 'section' ? FileText : hit.type === 'term' ? BookMarked : BookMarked
              return (
                <button
                  key={hit.id}
                  onClick={() => go(hit)}
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left transition-colors hover:bg-muted/60"
                >
                  <Icon className={cn('h-4 w-4 shrink-0', theme.classes.text)} />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[13px] font-medium">{hit.title}</div>
                    <div className="truncate text-[11px] text-muted-foreground">{hit.desc}</div>
                  </div>
                  <ArrowRight className="h-3 w-3 shrink-0 text-muted-foreground/40" />
                </button>
              )
            })}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

function findSnippet(content: string, q: string): string {
  const idx = content.toLowerCase().indexOf(q)
  if (idx < 0) return ''
  const start = Math.max(0, idx - 20)
  return (start > 0 ? '…' : '') + content.slice(start, idx + 40).replace(/\n/g, ' ') + '…'
}
