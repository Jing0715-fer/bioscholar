'use client'

import { useEffect, useRef, useState } from 'react'
import { MessagesSquare, Send, Sparkles, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MarkdownView } from './markdown-view'
import { useAppStore } from '@/lib/store'
import { getSubject } from '@/data/biology'
import { getSubjectTheme } from './subject-theme'
import { cn } from '@/lib/utils'
import type { ChatMessage } from '@/lib/types'

const SUGGESTIONS = [
  '为什么氧化磷酸化的解偶联剂能产热而不产 ATP？',
  '比较原核与真核翻译起始的三个差异。',
  '用 Nernst 方程解释高钾血症对静息膜电位的影响。',
  '为什么说 BLOSUM62 比 PAM250 更适合远缘序列比对？',
  '解释生发中心里亲和力成熟的分子机制。',
]

export function AssistantView() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const view = useAppStore((s) => s.view)
  const setView = useAppStore((s) => s.setView)

  // 若从阅读器跳转而来，携带学科上下文
  const contextSubjectId = view.name === 'assistant' ? undefined : undefined
  const readerSubject = useAppStore((s) =>
    s.view.name === 'reader' ? s.view.subjectId : undefined
  )

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  const send = async (text?: string) => {
    const question = (text ?? input).trim()
    if (!question || streaming) return
    setInput('')
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: question,
      createdAt: new Date().toISOString(),
    }
    setMessages((m) => [...m, userMsg])
    setStreaming(true)

    const assistantId = `a-${Date.now()}`
    setMessages((m) => [
      ...m,
      { id: assistantId, role: 'assistant', content: '', createdAt: new Date().toISOString() },
    ])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({ role: m.role, content: m.content })),
          context: readerSubject ? { subjectId: readerSubject } : undefined,
        }),
      })
      if (!res.ok || !res.body) throw new Error('chat failed')
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let acc = ''
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        acc += decoder.decode(value, { stream: true })
        setMessages((m) =>
          m.map((x) => (x.id === assistantId ? { ...x, content: acc } : x))
        )
      }
    } catch {
      setMessages((m) =>
        m.map((x) =>
          x.id === assistantId ? { ...x, content: '（网络异常，请稍后重试。）' } : x
        )
      )
    } finally {
      setStreaming(false)
    }
  }

  const subject = readerSubject ? getSubject(readerSubject) : null
  const theme = subject ? getSubjectTheme(subject.id) : null

  return (
    <div className="mx-auto flex h-[calc(100vh-3.5rem)] max-w-3xl flex-col px-4 py-4 md:px-6">
      <header className="mb-3 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
          <MessagesSquare className="h-4.5 w-4.5" />
        </div>
        <div>
          <h1 className="text-base font-bold leading-tight">AI 智能助教</h1>
          <p className="text-[11px] text-muted-foreground">八大生物学学科 · 教材级答疑</p>
        </div>
        {messages.length > 0 && (
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto h-8 w-8 text-muted-foreground"
            onClick={() => setMessages([])}
            aria-label="清空对话"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </header>

      {/* 上下文提示 */}
      {subject && theme && (
        <div className="mb-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <Badge variant="outline" className={theme.classes.badge}>
            上下文：{subject.name}
          </Badge>
          <button className="hover:text-foreground" onClick={() => setView({ name: 'subjects' })}>
            切换学科 →
          </button>
        </div>
      )}

      {/* 消息流 */}
      <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto pr-1">
        {messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Sparkles className="h-7 w-7 text-primary" />
            </div>
            <div>
              <div className="text-base font-semibold">向 AI 助教提问</div>
              <p className="mt-1 max-w-md text-xs leading-5 text-muted-foreground">
                覆盖八大生物学基础学科的资深教授人设；概念辨析、机制推演、数值核算与实验设计均可提问。
              </p>
            </div>
            <div className="grid w-full max-w-lg gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-xl border bg-card px-3.5 py-2.5 text-left text-[13px] text-muted-foreground transition-colors hover:border-primary/40 hover:bg-muted/40 hover:text-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn('flex gap-2.5', m.role === 'user' ? 'justify-end' : 'justify-start')}
            >
              {m.role === 'assistant' && (
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
              )}
              <div
                className={cn(
                  'max-w-[85%] rounded-2xl px-4 py-2.5',
                  m.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'border bg-card'
                )}
              >
                {m.role === 'user' ? (
                  <p className="text-sm leading-6">{m.content}</p>
                ) : m.content ? (
                  <div className="text-sm [&_.markdown-body]:text-[14px]">
                    <MarkdownView content={m.content} />
                  </div>
                ) : (
                  <div className="flex items-center gap-1 py-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/60 [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/60 [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/60 [animation-delay:300ms]" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 输入区 */}
      <div className="mt-3 border-t pt-3">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
                e.preventDefault()
                send()
              }
            }}
            placeholder="输入问题…（Enter 发送，Shift+Enter 换行）"
            className="min-h-11 max-h-40 flex-1 resize-none"
            rows={1}
          />
          <Button
            onClick={() => send()}
            disabled={streaming || !input.trim()}
            size="icon"
            className="h-11 w-11 shrink-0"
            aria-label="发送"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
