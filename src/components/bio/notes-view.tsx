'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { useAppStore } from '@/lib/store'
import { subjects, getSubject } from '@/data/biology'
import type { SubjectId } from '@/lib/types'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import { toast } from 'sonner'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { cn } from '@/lib/utils'
import {
  ArrowUpRight,
  Loader2,
  Pencil,
  Plus,
  Search,
  SearchX,
  StickyNote,
  Trash2,
} from 'lucide-react'

// ============================================================
// 类型与工具
// ============================================================

/** 笔记（对应后端 Note 模型） */
interface NoteItem {
  id: string
  subjectId: string | null
  sectionId: string | null
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

const SUBJECT_IDS: ReadonlyArray<SubjectId> = [
  'biochemistry',
  'molecular-biology',
  'cell-biology',
  'biophysics',
]

function isSubjectId(v: string | null): v is SubjectId {
  return v !== null && (SUBJECT_IDS as ReadonlyArray<string>).includes(v)
}

/** 由 sectionId 反查所属章节与小节标题（用于笔记跳回阅读页） */
function resolveSection(
  subjectId: string,
  sectionId: string
): { chapterId: string; sectionTitle: string } | null {
  const subject = subjects.find((s) => s.id === subjectId)
  if (!subject) return null
  for (const ch of subject.chapters) {
    const sec = ch.sections.find((s) => s.id === sectionId)
    if (sec) return { chapterId: ch.id, sectionTitle: sec.title }
  }
  return null
}

function formatRelative(iso: string): string {
  try {
    return formatDistanceToNow(new Date(iso), { addSuffix: true, locale: zhCN })
  } catch {
    return ''
  }
}

// ============================================================
// 学习笔记主视图
// ============================================================

export function NotesView() {
  const openReader = useAppStore((s) => s.openReader)

  const [notes, setNotes] = useState<NoteItem[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  // 新建 / 编辑对话框
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editing, setEditing] = useState<NoteItem | null>(null)
  const [formTitle, setFormTitle] = useState('')
  const [formContent, setFormContent] = useState('')
  const [saving, setSaving] = useState(false)

  // 删除确认
  const [deleting, setDeleting] = useState<NoteItem | null>(null)
  const [deleteBusy, setDeleteBusy] = useState(false)

  const loadNotes = useCallback(async () => {
    try {
      const res = await fetch('/api/notes')
      if (!res.ok) throw new Error('load failed')
      const data = (await res.json()) as { notes?: NoteItem[] }
      setNotes(data.notes ?? [])
    } catch {
      toast.error('笔记加载失败，请刷新重试')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void loadNotes()
  }, [loadNotes])

  /** 前端过滤（标题 + 内容） */
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return notes
    return notes.filter(
      (n) =>
        n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q)
    )
  }, [notes, search])

  const openCreate = () => {
    setEditing(null)
    setFormTitle('')
    setFormContent('')
    setDialogOpen(true)
  }

  const openEdit = (note: NoteItem) => {
    setEditing(note)
    setFormTitle(note.title)
    setFormContent(note.content)
    setDialogOpen(true)
  }

  const handleSave = async () => {
    const title = formTitle.trim()
    if (!title) {
      toast.error('请填写笔记标题')
      return
    }
    setSaving(true)
    try {
      const res = await fetch('/api/notes', {
        method: editing ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          editing
            ? { id: editing.id, title, content: formContent }
            : { title, content: formContent }
        ),
      })
      if (!res.ok) throw new Error('save failed')
      const data = (await res.json()) as { note?: NoteItem }
      const saved = data.note
      if (editing) {
        if (saved) {
          setNotes((prev) => prev.map((n) => (n.id === saved.id ? saved : n)))
        }
        toast.success('笔记已更新')
      } else {
        if (saved) {
          setNotes((prev) => [saved, ...prev])
        }
        toast.success('笔记已创建')
      }
      setDialogOpen(false)
    } catch {
      toast.error('保存失败，请重试')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!deleting || deleteBusy) return
    setDeleteBusy(true)
    try {
      const res = await fetch('/api/notes', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: deleting.id }),
      })
      if (!res.ok) throw new Error('delete failed')
      setNotes((prev) => prev.filter((n) => n.id !== deleting.id))
      toast.success('笔记已删除')
      setDeleting(null)
    } catch {
      toast.error('删除失败，请重试')
    } finally {
      setDeleteBusy(false)
    }
  }

  const hasSearch = search.trim().length > 0

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      {/* 顶部：编辑式学术头部 */}
      <header>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="bio-eyebrow text-muted-foreground">Study Notes · 学习档案</p>
            <h1 className="mt-2 font-serif text-xl font-bold tracking-tight sm:text-2xl">
              学习笔记
            </h1>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {notes.length > 0
                ? `共 ${notes.length} 篇笔记 · 持久化保存`
                : '随手记录你的理解与思考'}
            </p>
          </div>
          <Button onClick={openCreate}>
            <Plus className="mr-1 h-4 w-4" />
            新建笔记
          </Button>
        </div>
        <div className="bio-rule mt-4" aria-hidden />
      </header>

      {/* 搜索框 */}
      <div className="relative mt-4">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="搜索笔记标题或内容…"
          className="h-11 pl-9"
          aria-label="搜索笔记"
          inputMode="search"
        />
      </div>

      {/* 笔记列表 */}
      <div className="mt-4">
        {loading ? (
          <div className="space-y-3">
            {[0, 1, 2].map((i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <Skeleton className="h-5 w-2/5" />
                  <Skeleton className="mt-2 h-4 w-full" />
                  <Skeleton className="mt-1 h-4 w-4/5" />
                  <Skeleton className="mt-3 h-3 w-24" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          notes.length === 0 && !hasSearch ? (
            // 全空状态
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed py-14 text-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed text-muted-foreground/60">
                <StickyNote className="h-9 w-9" />
              </span>
              <div>
                <p className="font-semibold">还没有学习笔记</p>
                <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  点击「新建笔记」写下第一篇心得；在知识点阅读页也可以快速记笔记，
                  并自动关联所在学科与小节。
                </p>
              </div>
              <Button variant="outline" onClick={openCreate}>
                <Plus className="mr-1 h-4 w-4" />
                创建第一篇笔记
              </Button>
            </div>
          ) : (
            // 搜索无结果
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed py-12 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed text-muted-foreground/60">
                <SearchX className="h-7 w-7" />
              </span>
              <div>
                <p className="font-semibold">没有找到匹配的笔记</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  换个关键词，或清空搜索查看全部 {notes.length} 篇笔记
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={() => setSearch('')}>
                清空搜索
              </Button>
            </div>
          )
        ) : (
          <div className="grid gap-3 lg:grid-cols-2">
            {filtered.map((note) => {
              // 类型收窄：仅当 subjectId 是合法学科 id 时展示学科信息
              const sid = isSubjectId(note.subjectId) ? note.subjectId : null
              const theme = sid ? getSubjectTheme(sid) : null
              const subjectName = sid ? getSubject(sid)?.name : null
              const sectionInfo =
                sid && note.sectionId ? resolveSection(sid, note.sectionId) : null
              return (
                <Card
                  key={note.id}
                  className="group transition-colors hover:border-foreground/25"
                >
                  <CardContent className="flex items-start justify-between gap-2 p-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-sm font-semibold leading-snug sm:text-base">
                        {note.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {note.content.trim() || '（暂无内容）'}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1.5 text-xs text-muted-foreground">
                        {sid && theme && subjectName && (
                          <span
                            className={cn(
                              'inline-flex items-center gap-1 font-medium',
                              theme.classes.text
                            )}
                          >
                            <theme.icon className="h-3 w-3" aria-hidden />
                            {subjectName}
                          </span>
                        )}
                        {sid && theme && subjectName && (
                          <span className="opacity-30" aria-hidden>
                            ·
                          </span>
                        )}
                        <span
                          title={new Date(note.updatedAt).toLocaleString('zh-CN')}
                          className="tabular-nums"
                        >
                          {formatRelative(note.updatedAt)}更新
                        </span>
                        {sectionInfo && sid && (
                          <>
                            <span className="opacity-30" aria-hidden>
                              ·
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                openReader(
                                  sid,
                                  sectionInfo.chapterId,
                                  note.sectionId ?? ''
                                )
                              }
                              className="inline-flex items-center gap-0.5 rounded font-medium text-primary underline-offset-2 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              aria-label={`跳转到知识点：${sectionInfo.sectionTitle}`}
                            >
                              <ArrowUpRight className="h-3.5 w-3.5" />
                              {sectionInfo.sectionTitle}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                        onClick={() => openEdit(note)}
                        aria-label={`编辑笔记：${note.title}`}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => setDeleting(note)}
                        aria-label={`删除笔记：${note.title}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </div>

      {/* 新建 / 编辑对话框 */}
      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => {
          if (saving) return
          setDialogOpen(open)
        }}
      >
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? '编辑笔记' : '新建笔记'}</DialogTitle>
            <DialogDescription>
              {editing
                ? '修改笔记的标题与内容，保存后立即生效。'
                : '记录你的理解、疑问或总结，随时可以回来修改。'}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="note-title">
                标题 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="note-title"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                placeholder="例如：糖酵解的三个关键调控点"
                maxLength={100}
                autoFocus
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="note-content">内容</Label>
              <Textarea
                id="note-content"
                value={formContent}
                onChange={(e) => setFormContent(e.target.value)}
                placeholder="写下你的理解、疑问或总结…"
                rows={6}
                className="bio-scroll resize-none"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)} disabled={saving}>
              取消
            </Button>
            <Button onClick={() => void handleSave()} disabled={saving}>
              {saving && <Loader2 className="mr-1 h-4 w-4 animate-spin" />}
              {editing ? '保存修改' : '创建笔记'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 删除确认 */}
      <AlertDialog
        open={deleting !== null}
        onOpenChange={(open) => {
          if (!open && !deleteBusy) setDeleting(null)
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>删除这篇笔记？</AlertDialogTitle>
            <AlertDialogDescription>
              将永久删除「{deleting?.title}」，删除后无法恢复。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleteBusy}>取消</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault()
                void handleDelete()
              }}
              className="bg-destructive text-white hover:bg-destructive/90"
            >
              {deleteBusy && <Loader2 className="mr-1 h-4 w-4 animate-spin" />}
              删除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
