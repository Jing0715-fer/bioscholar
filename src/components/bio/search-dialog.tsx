'use client'

import { useMemo, useState } from 'react'
import { useAppStore } from '@/lib/store'
import { subjects } from '@/data/biology'
import { glossary } from '@/data/glossary'
import { getIllustrations } from '@/data/illustrations'
import { figureNumber } from '@/lib/figure-utils'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  FileText,
  BookMarked,
  BookOpen,
  Search,
  FlaskConical,
  Microscope,
  PenTool,
  Route,
  Wand2,
} from 'lucide-react'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import { cn } from '@/lib/utils'

interface SearchEntry {
  key: string
  title: string
  subtitle: string
  group: string
  icon: 'section' | 'chapter' | 'term' | 'figure'
  /** 教材插图来源体系（icon === 'figure' 时用于选图标） */
  figureSource?: 'ccd' | 'pdb' | 'commons' | 'drawn' | 'ai'
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
    // 教材插图条目：图号 + 小节标题 + 图注全文 + 来源体系 + 数据库标识符（PDB ID / CCD / Commons 文件名）
    const SRC_KEYWORDS: Record<string, string> = {
      ccd: '化学结构式 分子结构 结构式 RCSB CCD 小分子',
      pdb: '实验结构 三维结构 晶体结构 冷冻电镜 PDB RCSB 蛋白质数据库',
      commons: '通路过程图 代谢通路 信号通路 示意图 Wikimedia Commons',
      drawn: '自绘 矢量图 机制示意 自绘矢量图 教材参数绘制',
      ai: '机制示意 示意图 AI 绘制',
    }
    for (const subject of subjects) {
      for (const chapter of subject.chapters) {
        for (const section of chapter.sections) {
          const figs = getIllustrations(section.id)
          if (!figs?.length) continue
          figs.forEach((fig, i) => {
            const src = fig.src
            const figureSource = src.includes('/structures/')
              ? ('ccd' as const)
              : src.includes('/pdb/')
                ? ('pdb' as const)
                : src.includes('/commons/')
                  ? ('commons' as const)
                  : src.includes('/drawn/')
                    ? ('drawn' as const)
                    : ('ai' as const)
            // 从路径提取数据库名标识（如 glycolysis-pathway / 1MBO / GLC）增强检索
            const fileToken = src
              .split('/')
              .pop()
              ?.replace(/\.(svg|png|jpe?g)$/i, '')
              .replace(/[-_]/g, ' ')
            const num = figureNumber(chapter.number, section.id, i)
            list.push({
              key: `f-${section.id}-${i}`,
              title: `${num} ${section.title}`,
              subtitle: `${subject.name} · 第 ${chapter.number} 章 · ${
                figureSource === 'ccd'
                  ? '化学结构式'
                  : figureSource === 'pdb'
                    ? '实验结构'
                    : figureSource === 'commons'
                      ? '通路过程图'
                      : figureSource === 'drawn'
                        ? '自绘矢量图'
                        : '机制示意'
              }`,
              group: '教材插图',
              icon: 'figure',
              figureSource,
              subjectId: subject.id,
              chapterId: chapter.id,
              sectionId: section.id,
              keywords: `${num} ${section.title} ${fig.caption} ${fig.credit ?? ''} ${
                SRC_KEYWORDS[figureSource]
              } ${fileToken ?? ''}`,
            })
          })
        }
      }
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

  const iconFor = (icon: SearchEntry['icon'], subjectId?: string, figureSource?: SearchEntry['figureSource']) => {
    if (icon === 'term') return <BookMarked className="h-4 w-4 text-amber-600" />
    if (icon === 'chapter')
      return <BookOpen className="h-4 w-4 text-primary" />
    if (icon === 'figure') {
      if (figureSource === 'ccd')
        return <FlaskConical className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
      if (figureSource === 'pdb')
        return <Microscope className="h-4 w-4 text-teal-600 dark:text-teal-400" />
      if (figureSource === 'commons')
        return <Route className="h-4 w-4 text-amber-600 dark:text-amber-400" />
      if (figureSource === 'drawn')
        return <PenTool className="h-4 w-4 text-violet-600 dark:text-violet-400" />
      return <Wand2 className="h-4 w-4 text-muted-foreground" />
    }
    const theme = subjectId ? getSubjectTheme(subjectId as never) : null
    return (
      <FileText
        className={cn('h-4 w-4', theme ? theme.classes.text : 'text-muted-foreground')}
      />
    )
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={(o) => { onOpenChange(o); if (!o) setQuery('') }}
      commandProps={{ shouldFilter: false }}
    >
      <CommandInput
        placeholder="搜索章节、知识点、术语、教材插图…（如：糖酵解、Caspase、光镊、1MBO）"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList className="bio-scroll">
        {query.trim() === '' ? (
          <div className="px-4 py-6 text-center text-sm text-muted-foreground">
            <Search className="mx-auto mb-2 h-5 w-5 opacity-40" />
            输入关键词检索全部
            {entries.filter((e) => e.group === '知识点').length} 个知识点、
            {glossary.length} 条术语与{' '}
            {entries.filter((e) => e.group === '教材插图').length} 张教材插图
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
                    {iconFor(entry.icon, entry.subjectId, entry.figureSource)}
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
