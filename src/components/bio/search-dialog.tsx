'use client'

import { useMemo, useState } from 'react'
import { useAppStore } from '@/lib/store'
import { subjects } from '@/data/biology'
import { glossary } from '@/data/glossary'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { FileText, BookMarked, BookOpen, Search } from 'lucide-react'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import { cn } from '@/lib/utils'

interface SearchEntry {
  key: string
  title: string
  subtitle: string
  group: string
  icon: 'section' | 'chapter' | 'term'
  subjectId?: string
  chapterId?: string
  sectionId?: string
  keywords: string
}

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const openReader = useAppStore((s) => s.openReader)
  const navigate = useAppStore((s) => s.navigate)
  const setAssistantContext = useAppStore((s) => s.setAssistantContext)
  const [query, setQuery] = useState('')

  const entries = useMemo<SearchEntry[]>(() => {
    const list: SearchEntry[] = []
    for (const subject of subjects) {
      for (const chapter of subject.chapters) {
        list.push({
          key: `c-${chapter.id}`,
          title: `第 ${chapter.number} 章 ${chapter.title}`,
          subtitle: `${subject.name} · ${chapter.sections.length} 节`,
          group: '章节',
          icon: 'chapter',
          subjectId: subject.id,
          chapterId: chapter.id,
          sectionId: chapter.sections[0]?.id,
          keywords: `${chapter.title} ${chapter.summary} ${chapter.keywords.join(' ')} ${subject.name}`,
        })
        for (const section of chapter.sections) {
          list.push({
            key: `s-${section.id}`,
            title: section.title,
            subtitle: `${subject.name} · 第 ${chapter.number} 章`,
            group: '知识点',
            icon: 'section',
            subjectId: subject.id,
            chapterId: chapter.id,
            sectionId: section.id,
            keywords: `${section.title} ${section.content} ${section.terms.join(' ')}`,
          })
        }
      }
    }
    for (const term of glossary) {
      list.push({
        key: `g-${term.id}`,
        title: `${term.term}${term.abbreviation ? `（${term.abbreviation}）` : ''}`,
        subtitle: `${term.english} · ${term.category}`,
        group: '术语',
        icon: 'term',
        keywords: `${term.term} ${term.english} ${term.abbreviation ?? ''} ${term.definition}`,
      })
    }
    return list
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return entries
      .filter((e) => e.keywords.toLowerCase().includes(q))
      .slice(0, 24)
  }, [entries, query])

  const grouped = useMemo(() => {
    const map = new Map<string, SearchEntry[]>()
    for (const e of filtered) {
      const arr = map.get(e.group) ?? []
      arr.push(e)
      map.set(e.group, arr)
    }
    return map
  }, [filtered])

  const handleSelect = (entry: SearchEntry) => {
    onOpenChange(false)
    setQuery('')
    if (entry.group === '术语') {
      navigate({ name: 'glossary' })
      return
    }
    if (entry.subjectId && entry.chapterId && entry.sectionId) {
      openReader(
        entry.subjectId as never,
        entry.chapterId,
        entry.sectionId
      )
    }
  }

  const iconFor = (icon: SearchEntry['icon'], subjectId?: string) => {
    if (icon === 'term') return <BookMarked className="h-4 w-4 text-amber-600" />
    if (icon === 'chapter')
      return <BookOpen className="h-4 w-4 text-primary" />
    const theme = subjectId ? getSubjectTheme(subjectId as never) : null
    return (
      <FileText
        className={cn('h-4 w-4', theme ? theme.classes.text : 'text-muted-foreground')}
      />
    )
  }

  return (
    <CommandDialog open={open} onOpenChange={(o) => { onOpenChange(o); if (!o) setQuery('') }}>
      <CommandInput
        placeholder="搜索章节、知识点、术语…（如：糖酵解、Caspase、光镊）"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList className="bio-scroll">
        {query.trim() === '' ? (
          <div className="px-4 py-6 text-center text-sm text-muted-foreground">
            <Search className="mx-auto mb-2 h-5 w-5 opacity-40" />
            输入关键词检索全部
            {entries.filter((e) => e.group === '知识点').length} 个知识点与{' '}
            {glossary.length} 条术语
          </div>
        ) : filtered.length === 0 ? (
          <CommandEmpty>未找到相关内容，试试其他关键词</CommandEmpty>
        ) : (
          Array.from(grouped.entries()).map(([group, items], gi) => (
            <div key={group}>
              {gi > 0 && <CommandSeparator />}
              <CommandGroup heading={group}>
                {items.map((entry) => (
                  <CommandItem
                    key={entry.key}
                    value={entry.key + ' ' + entry.title + ' ' + entry.subtitle}
                    onSelect={() => handleSelect(entry)}
                    className="gap-3"
                  >
                    {iconFor(entry.icon, entry.subjectId)}
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-medium">{entry.title}</div>
                      <div className="truncate text-xs text-muted-foreground">
                        {entry.subtitle}
                      </div>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </div>
          ))
        )}
      </CommandList>
    </CommandDialog>
  )
}
