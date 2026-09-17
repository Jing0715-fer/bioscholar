'use client'

import { useEffect, useMemo, useState } from 'react'
import { NotebookPen, Plus, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MarkdownView } from './markdown-view'
import { allSections, getSubject } from '@/data/biology'
import { useAppStore } from '@/lib/store'
import { getSubjectTheme } from './subject-theme'
import { cn } from '@/lib/utils'
import type { NoteItem } from '@/lib/types'

export function NotesView() {
  const [notes, setNotes] = useState<NoteItem[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<NoteItem | null>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const setView = useAppStore((s) => s.setView)

  useEffect(() => {
    fetch('/api/notes')
      .then((r) => r.json())
      .then((d) => setNotes(Array.isArray(d.notes) ? d.notes : []))
      .catch(() => setNotes([]))
      .finally(() => setLoading(false))
  }, [])

  const save = async () => {
    if (!title.trim() || !content.trim()) {
      toast.error('标题与内容不能为空')
      return
    }
    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          editing
            ? { id: editing.id, title: title.trim(), content: content.trim() }
            : {
                subjectId: 'biochemistry',
                sectionId: 'manual',
                title: title.trim(),
                content: content.trim(),
              }
        ),
      })
      const d = await res.json()
      if (d.note) {
        setNotes((ns) =>
          editing ? ns.map((n) => (n.id === d.note.id ? d.note : n)) : [d.note, ...ns]
        )
        setEditing(null)
        setTitle('')
        setContent('')
        toast.success('笔记已保存')
      } else toast.error('保存失败')
    } catch {
      toast.error('保存失败')
    }
  }

  const remove = async (id: string) => {
    try {
      await fetch(`/api/notes?id=${id}`, { method: 'DELETE' })
      setNotes((ns) => ns.filter((n) => n.id !== id))
      toast.success('已删除')
    } catch {
      toast.error('删除失败')
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 md:px-6 md:py-8">
      <header className="mb-5">
        <h1 className="text-xl font-bold tracking-tight md:text-2xl">学习笔记</h1>
        <p className="mt-1 text-sm text-muted-foreground">支持 Markdown 的知识点笔记，自动保存到本地数据库</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* 编辑器 */}
        <Card className="p-4 lg:col-span-2 lg:sticky lg:top-20 lg:self-start">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <NotebookPen className="h-4 w-4 text-primary" />
            {editing ? '编辑笔记' : '新建笔记'}
          </div>
          <div className="space-y-3">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="笔记标题…"
            />
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="笔记内容（支持 Markdown：## 标题、**加粗**、| 表格 | 等）…"
              className="min-h-52"
            />
            <div className="flex gap-2">
              <Button size="sm" onClick={save} className="gap-1">
                <Plus className="h-3.5 w-3.5" />
                {editing ? '保存修改' : '添加笔记'}
              </Button>
              {editing && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setEditing(null)
                    setTitle('')
                    setContent('')
                  }}
                >
                  取消
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* 笔记列表 */}
        <div className="space-y-3 lg:col-span-3">
          {loading && <div className="py-12 text-center text-sm text-muted-foreground">加载中…</div>}
          {!loading && notes.length === 0 && (
            <div className="rounded-xl border border-dashed py-12 text-center text-sm text-muted-foreground">
              还没有笔记，从左侧开始记录你的学习心得
            </div>
          )}
          {notes.map((n) => {
            const subject = getSubject(n.subjectId as never)
            const theme = subject ? getSubjectTheme(subject.id) : null
            return (
              <Card key={n.id} className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">{n.title}</span>
                      {theme && (
                        <Badge variant="outline" className={cn('text-[10px]', theme.classes.badge)}>
                          {subject?.name}
                        </Badge>
                      )}
                    </div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground">
                      {new Date(n.updatedAt).toLocaleString('zh-CN')}
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => {
                        setEditing(n)
                        setTitle(n.title)
                        setContent(n.content)
                      }}
                    >
                      <Plus className="h-3.5 w-3.5 rotate-45" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-destructive"
                      onClick={() => remove(n.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                <div className="mt-2 max-h-48 overflow-y-auto text-[13px]">
                  <MarkdownView content={n.content} />
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
