'use client'

import { useEffect } from 'react'
import { useAppStore, type NavKey } from '@/lib/store'
import { useTheme } from 'next-themes'
import {
  LayoutDashboard,
  BookOpen,
  MessageSquareText,
  ClipboardList,
  BookMarked,
  StickyNote,
  Search,
  Moon,
  Sun,
  Dna,
  Menu,
  Layers,
  NotebookPen,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Dashboard } from '@/components/bio/dashboard'
import { SubjectsView } from '@/components/bio/subjects-view'
import { ReaderView } from '@/components/bio/reader-view'
import { AssistantView } from '@/components/bio/assistant-view'
import { QuizView } from '@/components/bio/quiz-view'
import { GlossaryView } from '@/components/bio/glossary-view'
import { NotesView } from '@/components/bio/notes-view'
import { SearchDialog } from '@/components/bio/search-dialog'
import { RevisionView } from '@/components/bio/revision-view'
import { WrongbookView } from '@/components/bio/wrongbook-view'

const NAV_ITEMS: Array<{
  key: NavKey
  label: string
  icon: typeof LayoutDashboard
  desc: string
}> = [
  { key: 'dashboard', label: '学习仪表盘', icon: LayoutDashboard, desc: '进度总览与学习统计' },
  { key: 'subjects', label: '学科中心', icon: BookOpen, desc: '四大基础学科教材' },
  { key: 'assistant', label: 'AI 智能助教', icon: MessageSquareText, desc: '生物学专家问答' },
  { key: 'quiz', label: '测验中心', icon: ClipboardList, desc: '章节自测与成绩' },
  { key: 'revision', label: '复习卡片', icon: Layers, desc: '间隔重复记忆术语' },
  { key: 'wrongbook', label: '错题本', icon: NotebookPen, desc: '测验错题归集复习' },
  { key: 'glossary', label: '术语词典', icon: BookMarked, desc: '跨学科专业术语' },
  { key: 'notes', label: '学习笔记', icon: StickyNote, desc: '我的知识笔记' },
]

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const view = useAppStore((s) => s.view)
  const navigate = useAppStore((s) => s.navigate)

  const activeNav: NavKey =
    view.name === 'reader' ? 'subjects' : (view.name as NavKey)

  return (
    <nav aria-label="主导航" className="flex flex-col gap-1 px-3">
      {NAV_ITEMS.map((item) => {
        const active = activeNav === item.key
        return (
          <button
            key={item.key}
            onClick={() => {
              navigate(
                item.key === 'quiz'
                  ? { name: 'quiz', subjectId: 'biochemistry' }
                  : ({ name: item.key } as never)
              )
              onNavigate?.()
            }}
            className={cn(
              'group flex items-center gap-3 rounded-lg border-l-[3px] px-3 py-2.5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring',
              active
                ? 'border-primary bg-primary/10 font-semibold text-foreground'
                : 'border-transparent font-medium text-muted-foreground hover:bg-accent hover:text-foreground'
            )}
            aria-current={active ? 'page' : undefined}
          >
            <item.icon
              className={cn(
                'h-[18px] w-[18px] shrink-0',
                active ? 'text-primary' : 'text-muted-foreground/80'
              )}
            />
            <span className="flex flex-col items-start leading-tight">
              <span>{item.label}</span>
              <span
                className={cn(
                  'text-[11px] font-normal',
                  active ? 'text-muted-foreground' : 'text-muted-foreground/70'
                )}
              >
                {item.desc}
              </span>
            </span>
          </button>
        )
      })}
    </nav>
  )
}

function BrandHeader() {
  return (
    <div className="flex items-center gap-3 px-6 pt-6 pb-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
        <Dna className="h-5 w-5" />
      </div>
      <div className="leading-tight">
        <div className="font-serif text-base font-bold tracking-tight">BioScholar</div>
        <div className="text-[11px] text-muted-foreground">生命科学智能学习平台</div>
      </div>
    </div>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? '切换到浅色模式' : '切换到深色模式'}
      className="h-9 w-9"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}

export default function Home() {
  const view = useAppStore((s) => s.view)
  const searchOpen = useAppStore((s) => s.searchOpen)
  const setSearchOpen = useAppStore((s) => s.setSearchOpen)

  // ⌘K / Ctrl+K 打开全局搜索
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

  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-screen flex flex-col bg-background">
        <div className="flex flex-1">
          {/* 桌面侧边栏 */}
          <aside className="hidden lg:flex lg:w-64 xl:w-72 shrink-0 flex-col border-r bg-sidebar sticky top-0 h-screen">
            <BrandHeader />
            <div className="flex-1 overflow-y-auto bio-scroll pb-4">
              <NavList />
              <div className="mt-6 mx-3 rounded-xl border bg-card p-4 bio-dna-bg">
                <div className="bio-eyebrow text-muted-foreground">教材体系依据</div>
                <div className="bio-rule mt-2" aria-hidden />
                <p className="mt-3 text-[11px] leading-[1.9] text-muted-foreground">
                  教育部「101计划」生物学核心课程
                </p>
                <p className="mt-1 text-[11px] leading-[1.9] text-muted-foreground/80">
                  王镜岩《生物化学》 · 朱玉贤《现代分子生物学》 · 翟中和《细胞生物学》 ·
                  生物物理学交叉课程
                </p>
              </div>
            </div>
          </aside>

          {/* 主内容区 */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* 移动端顶栏 */}
            <header className="sticky top-0 z-40 flex h-14 items-center gap-2 border-b bg-background px-4 lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="打开菜单" className="h-9 w-9">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-72 p-0">
                  <SheetTitle className="sr-only">导航菜单</SheetTitle>
                  <SheetDescription className="sr-only">
                    BioScholar 主导航：仪表盘、学科中心、AI 助教、测验、词典与笔记
                  </SheetDescription>
                  <BrandHeader />
                  <NavList />
                </SheetContent>
              </Sheet>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                  <Dna className="h-4 w-4" />
                </div>
                <span className="font-serif text-sm font-bold">BioScholar</span>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchOpen(true)}
                  aria-label="全局搜索"
                  className="h-9 w-9"
                >
                  <Search className="h-4 w-4" />
                </Button>
                <ThemeToggle />
              </div>
            </header>

            {/* 桌面顶栏 */}
            <header className="hidden lg:flex sticky top-0 z-30 h-14 items-center gap-3 border-b bg-background px-6">
              <div className="flex items-baseline gap-2.5">
                <span className="bio-eyebrow text-muted-foreground/60">BioScholar</span>
                <span className="h-3 w-px bg-border" aria-hidden />
                <span className="font-serif text-sm font-bold">
                  {NAV_ITEMS.find((n) => n.key === (view.name === 'reader' ? 'subjects' : view.name))?.label ??
                    '学习'}
                </span>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchOpen(true)}
                  className="h-9 gap-2 text-muted-foreground"
                >
                  <Search className="h-4 w-4" />
                  <span className="hidden xl:inline">搜索知识点 / 术语…</span>
                  <kbd className="hidden xl:inline-flex h-5 items-center rounded border bg-muted px-1.5 font-mono text-[10px]">
                    ⌘K
                  </kbd>
                </Button>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ThemeToggle />
                  </TooltipTrigger>
                  <TooltipContent>切换主题</TooltipContent>
                </Tooltip>
              </div>
            </header>

            {/* 视图内容 */}
            <main className="flex-1">
              <div key={view.name + JSON.stringify(view)} className="bio-fade-up">
                {view.name === 'dashboard' && <Dashboard />}
                {view.name === 'subjects' && <SubjectsView />}
                {view.name === 'reader' && (
                  <ReaderView
                    subjectId={view.subjectId}
                    chapterId={view.chapterId}
                    sectionId={view.sectionId}
                  />
                )}
                {view.name === 'quiz' && <QuizView subjectId={view.subjectId} />}
                {view.name === 'revision' && <RevisionView />}
                {view.name === 'wrongbook' && <WrongbookView />}
                {view.name === 'glossary' && <GlossaryView />}
                {view.name === 'notes' && <NotesView />}
                {view.name === 'assistant' && <AssistantView />}
              </div>
            </main>

            {/* 页脚 */}
            <footer className="mt-auto border-t">
              <div className="mx-auto max-w-5xl px-4 py-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] text-center text-[11px] leading-relaxed text-muted-foreground/80">
                BioScholar · 生命科学智能学习平台 — 内容体系参照教育部「101计划」生物学核心课程教材 ·
                学习资源仅用于教学参考
              </div>
            </footer>
          </div>
        </div>

        {/* 全局搜索 */}
        <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      </div>
    </TooltipProvider>
  )
}
