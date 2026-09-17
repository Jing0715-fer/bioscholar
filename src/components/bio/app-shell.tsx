'use client'

import { useEffect } from 'react'
import {
  BookOpen,
  GraduationCap,
  MessagesSquare,
  NotebookPen,
  BookMarked,
  Library,
  RotateCcw,
  FileBarChart,
  ClipboardX,
  Search,
  Moon,
  Sun,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { useAppStore } from '@/lib/store'
import { subjects } from '@/data/biology'
import { getSubjectTheme } from './subject-theme'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { TooltipProvider } from '@/components/ui/tooltip'

const NAV = [
  { key: 'dashboard', label: '仪表盘', icon: GraduationCap, desc: '学习概览与进度' },
  { key: 'subjects', label: '学科中心', icon: BookOpen, desc: '八大基础学科教材' },
  { key: 'glossary', label: '术语词典', icon: Library, desc: '跨学科术语检索' },
  { key: 'gallery', label: '教材图库', icon: BookMarked, desc: '插图浏览' },
  { key: 'notes', label: '学习笔记', icon: NotebookPen, desc: '知识点笔记' },
  { key: 'assistant', label: 'AI 助教', icon: MessagesSquare, desc: '智能问答' },
  { key: 'revision', label: '复习卡片', icon: RotateCcw, desc: '间隔重复记忆' },
  { key: 'wrongbook', label: '错题本', icon: ClipboardX, desc: '测验错题回顾' },
  { key: 'report', label: '学习报告', icon: FileBarChart, desc: '学习数据统计' },
] as const

export function AppShell({ children }: { children: React.ReactNode }) {
  const view = useAppStore((s) => s.view)
  const setView = useAppStore((s) => s.setView)
  const setSearchOpen = useAppStore((s) => s.setSearchOpen)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [setSearchOpen])

  const activeKey = view.name

  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex min-h-screen w-full bg-background">
        {/* 侧边栏 */}
        <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r bg-card/60 backdrop-blur md:flex">
          <div className="flex items-center gap-2.5 px-5 py-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-sm">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[15px] font-bold leading-tight tracking-tight">BioScholar</div>
              <div className="text-[11px] text-muted-foreground">生命科学智能学习平台</div>
            </div>
          </div>

          <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-2" aria-label="主导航">
            {NAV.map((item) => {
              const active = activeKey === item.key
              return (
                <button
                  key={item.key}
                  onClick={() => setView({ name: item.key } as never)}
                  className={cn(
                    'flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors',
                    active
                      ? 'bg-primary/10 font-medium text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              )
            })}

            <div className="px-3 pb-2 pt-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
              学科教材
            </div>
            {subjects.map((s) => {
              const theme = getSubjectTheme(s.id)
              const active = view.name === 'reader' || view.name === 'quiz'
                ? 'subjectId' in view && view.subjectId === s.id
                : false
              return (
                <button
                  key={s.id}
                  onClick={() => setView({ name: 'subjects' })}
                  className={cn(
                    'flex w-full items-center gap-2.5 rounded-lg px-3 py-1.5 text-[13px] transition-colors',
                    active ? 'bg-muted font-medium' : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                  )}
                >
                  <theme.icon className={cn('h-3.5 w-3.5 shrink-0', theme.classes.text)} />
                  <span className="truncate">{s.name}</span>
                </button>
              )
            })}
          </nav>

          <div className="border-t p-3">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2 text-muted-foreground"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-4 w-4" />
              全局搜索
              <kbd className="ml-auto rounded bg-muted px-1.5 font-mono text-[10px]">⌘K</kbd>
            </Button>
          </div>
        </aside>

        {/* 主区域 */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b bg-background/85 px-4 backdrop-blur md:px-6">
            <div className="flex items-center gap-2 md:hidden">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
                <GraduationCap className="h-4 w-4" />
              </div>
              <span className="text-sm font-bold">BioScholar</span>
            </div>
            <nav className="flex flex-1 items-center gap-1 overflow-x-auto md:hidden" aria-label="移动端导航">
              {NAV.slice(0, 5).map((item) => (
                <button
                  key={item.key}
                  onClick={() => setView({ name: item.key } as never)}
                  className={cn(
                    'flex items-center gap-1 rounded-full px-2.5 py-1 text-xs whitespace-nowrap transition-colors',
                    activeKey === item.key
                      ? 'bg-primary/10 font-medium text-primary'
                      : 'text-muted-foreground hover:bg-muted'
                  )}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} aria-label="搜索">
                <Search className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="切换主题"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="mt-auto border-t bg-card/50 px-4 py-3 text-center text-xs text-muted-foreground md:px-6">
            BioScholar · 基于「101 计划」生物学核心课程教材体系 · 教材内容仅供学习参考
          </footer>
        </div>
      </div>
    </TooltipProvider>
  )
}
