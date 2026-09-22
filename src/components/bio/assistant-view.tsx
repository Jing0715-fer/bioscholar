'use client'

import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ChangeEvent, KeyboardEvent } from 'react'
import {
  BookOpenText,
  Check,
  ChevronDown,
  CircleAlert,
  Copy,
  Dna,
  Key,
  Lightbulb,
  RotateCcw,
  Send,
  Sparkles,
  Square,
  Trash2,
  X,
} from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { getChapter, getSubject, subjects } from '@/data/biology'
import { getSubjectTheme } from '@/components/bio/subject-theme'
import { Markdown } from '@/components/bio/markdown'
import { ProvidersPanel } from '@/components/bio/providers-panel'
import type { ChatMessage, SubjectId } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'

// ============================================================
// AI 智能助教聊天视图（SSE 流式渲染）
// ============================================================

/** localStorage 会话 id 键 */
const SESSION_KEY = 'bioscholar-chat-session'

/** 输入框最大高度（约 4 行） */
const MAX_INPUT_HEIGHT = 104

/** 学科 id 列表（下拉过滤用） */
const SUBJECT_IDS: SubjectId[] = subjects.map((s) => s.id)

/** 空会话时的快捷经典问题 */
const QUICK_QUESTIONS: Array<{ tag: string; question: string }> = [
  { tag: '生物化学', question: '用化学渗透假说解释氧化磷酸化中 ATP 的合成过程' },
  {
    tag: '生物化学',
    question: '米氏常数 Km 与最大速率 Vmax 的物理意义是什么？如何用双倒数作图法求取？',
  },
  { tag: '分子生物学', question: '比较原核与真核基因表达调控的异同' },
  { tag: '细胞生物学', question: '为什么说 Bcl-2 家族是细胞凋亡的「开关」？' },
  { tag: '生物物理学', question: '膜蛋白跨膜区的 α-螺旋为什么在脂双层环境中能保持稳定？' },
  {
    tag: '综合',
    question: '从中心法则出发，梳理遗传信息从 DNA 到蛋白质的传递过程及其调控层次',
  },
]

/* ---------- 类型与守卫 ---------- */

/** 聊天上下文（与后端 API 契约一致） */
type ChatContext = NonNullable<ChatMessage['context']>

/** 本地展示消息（在持久化字段之外附加流式状态） */
interface DisplayMessage extends ChatMessage {
  /** 流式过程中出错的信息 */
  error?: string
  /** 用户手动停止 */
  stopped?: boolean
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null
}

function isDeltaEvent(v: unknown): v is { delta: string } {
  return isRecord(v) && typeof v.delta === 'string'
}

function isDoneEvent(v: unknown): v is { done: boolean } {
  return isRecord(v) && typeof v.done === 'boolean'
}

function isErrorEvent(v: unknown): v is { error: string } {
  return isRecord(v) && typeof v.error === 'string'
}

function isChatMessage(v: unknown): v is ChatMessage {
  return (
    isRecord(v) &&
    typeof v.id === 'string' &&
    (v.role === 'user' || v.role === 'assistant') &&
    typeof v.content === 'string' &&
    typeof v.createdAt === 'string'
  )
}

function isHistoryResponse(v: unknown): v is { messages: ChatMessage[] } {
  return isRecord(v) && Array.isArray(v.messages) && v.messages.every(isChatMessage)
}

function isSubjectId(v: string): v is SubjectId {
  return SUBJECT_IDS.includes(v as SubjectId)
}

function uuid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
}

const timeFormatter = new Intl.DateTimeFormat('zh-CN', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

function formatTime(iso: string): string {
  const d = new Date(iso)
  return Number.isNaN(d.getTime()) ? '' : timeFormatter.format(d)
}

/* ---------- 子组件 ---------- */

/** 历史加载骨架 */
function HistorySkeleton() {
  return (
    <div className="flex flex-col gap-5 py-2" aria-label="正在加载历史对话" aria-busy="true">
      <div className="flex justify-end">
        <Skeleton className="h-10 w-44 rounded-2xl rounded-br-md" />
      </div>
      <div className="flex gap-2.5">
        <Skeleton className="h-8 w-8 shrink-0 rounded-full" />
        <Skeleton className="h-16 w-3/5 rounded-2xl rounded-tl-md" />
      </div>
      <div className="flex justify-end">
        <Skeleton className="h-10 w-32 rounded-2xl rounded-br-md" />
      </div>
      <div className="flex gap-2.5">
        <Skeleton className="h-8 w-8 shrink-0 rounded-full" />
        <Skeleton className="h-28 w-4/5 rounded-2xl rounded-tl-md" />
      </div>
    </div>
  )
}

/** 空会话快捷问题（编辑式学术卡：衬线题号 + 衬线问题文本） */
function QuickQuestions({ onPick }: { onPick: (question: string) => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-1 py-4 text-center">
      <p className="bio-eyebrow text-muted-foreground">Quick Questions · 经典问题</p>
      <h2 className="mt-2.5 font-serif text-lg font-bold leading-snug sm:text-xl">
        向 BioScholar 助教提问
      </h2>
      <p className="mt-1.5 max-w-md text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
        助教精通生物化学、分子生物学、细胞生物学、生物物理学、微生物学、免疫学、神经生物学、生物信息学与病毒学，
        支持表格、公式推导与对比分析。点击经典问题立即开始：
      </p>
      <div className="mt-5 grid w-full grid-cols-1 gap-2 text-left sm:grid-cols-2">
        {QUICK_QUESTIONS.map((q, i) => (
          <button
            key={q.question}
            type="button"
            onClick={() => onPick(q.question)}
            className="group flex items-start gap-3 rounded-lg border bg-card p-3 text-left outline-none transition-colors hover:border-foreground/25 hover:bg-accent/40 focus-visible:ring-2 focus-visible:ring-ring sm:p-3.5"
          >
            <span
              className="mt-0.5 font-serif text-base font-bold leading-none tabular-nums text-muted-foreground/55 transition-colors group-hover:text-foreground"
              aria-hidden
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex min-w-0 flex-col gap-0.5">
              <span className="text-[10px] font-medium tracking-wide text-muted-foreground/80">
                {q.tag}
              </span>
              <span className="font-serif text-[13px] leading-relaxed text-foreground/90">
                {q.question}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

/** 消息气泡 */
interface MessageBubbleProps {
  message: DisplayMessage
  streaming: boolean
  copied: boolean
  onCopy: (message: DisplayMessage) => void
  onRetry: () => void
}

const MessageBubble = memo(function MessageBubble({
  message,
  streaming,
  copied,
  onCopy,
  onRetry,
}: MessageBubbleProps) {
  const isUser = message.role === 'user'
  const time = formatTime(message.createdAt)

  if (isUser) {
    return (
      <div className="bio-fade-up flex justify-end">
        <div className="flex max-w-[85%] flex-col items-end sm:max-w-[75%]">
          {message.context?.sectionTitle ? (
            <span className="mb-1 flex max-w-full items-center gap-1 text-[10px] text-muted-foreground">
              <BookOpenText className="h-3 w-3 shrink-0" aria-hidden />
              <span className="truncate">{message.context.sectionTitle}</span>
            </span>
          ) : null}
          <div className="whitespace-pre-wrap break-words rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm leading-relaxed text-primary-foreground shadow-sm">
            {message.content}
          </div>
          <span className="mt-1 text-[10px] text-muted-foreground/80">{time}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="bio-fade-up flex gap-2.5 sm:gap-3">
      <div
        className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm"
        aria-hidden
      >
        <Dna className="h-4 w-4" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col items-start">
        <div className="w-full max-w-full rounded-2xl rounded-tl-md border bg-card px-3.5 py-3 shadow-sm sm:px-4">
          {message.content ? (
            <>
              <Markdown content={message.content} />
              {streaming ? (
                <span
                  className="mt-1 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse rounded bg-primary"
                  aria-hidden
                />
              ) : null}
            </>
          ) : streaming ? (
            <div className="flex items-center gap-1.5 py-1" role="status" aria-label="AI 正在思考">
              <span className="bio-dot-1 h-2 w-2 rounded-full bg-primary" />
              <span className="bio-dot-2 h-2 w-2 rounded-full bg-primary" />
              <span className="bio-dot-3 h-2 w-2 rounded-full bg-primary" />
              <span className="ml-1.5 text-xs text-muted-foreground">助教正在思考…</span>
            </div>
          ) : null}

          {message.error ? (
            <div className="mt-2 flex items-start gap-1.5 rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-xs leading-relaxed text-destructive">
              <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              <span>生成中断：{message.error}</span>
            </div>
          ) : null}

          {message.stopped && !message.error ? (
            <p className="mt-1.5 text-[11px] italic text-muted-foreground">已手动停止生成</p>
          ) : null}
        </div>

        <div className="mt-1 flex items-center gap-1">
          <span className="text-[10px] text-muted-foreground/80">{time}</span>
          {!streaming && message.content ? (
            <button
              type="button"
              onClick={() => onCopy(message)}
              aria-label={copied ? '已复制' : '复制回复内容'}
              className="rounded-md p-1 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
            >
              {copied ? (
                <Check className="h-3 w-3 text-emerald-600" aria-hidden />
              ) : (
                <Copy className="h-3 w-3" aria-hidden />
              )}
            </button>
          ) : null}
          {message.error ? (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onRetry}
              className="h-6 gap-1 rounded-md px-2 text-[11px] text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              <RotateCcw className="h-3 w-3" aria-hidden />
              重试
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  )
})

/* ---------- 主视图 ---------- */

export function AssistantView() {
  const assistantContext = useAppStore((s) => s.assistantContext)
  const setAssistantContext = useAppStore((s) => s.setAssistantContext)
  const { toast } = useToast()

  const [sessionId, setSessionId] = useState<string | null>(null)
  const [historyLoaded, setHistoryLoaded] = useState(false)
  const [hadHistory, setHadHistory] = useState(false)
  const [messages, setMessages] = useState<DisplayMessage[]>([])
  const [input, setInput] = useState('')
  const [generating, setGenerating] = useState(false)
  const [streamingId, setStreamingId] = useState<string | null>(null)
  const [atBottom, setAtBottom] = useState(true)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [subjectFilter, setSubjectFilter] = useState<SubjectId | 'all'>('all')
  /** 供应商配置面板开关 */
  const [providersOpen, setProvidersOpen] = useState(false)
  /** 当前生效的 LLM 供应商（头部指示器） */
  const [activeLlm, setActiveLlm] = useState<{
    displayName: string
    model: string
    isBuiltin: boolean
  } | null>(null)

  const scrollRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const abortRef = useRef<AbortController | null>(null)
  const stickRef = useRef(true)
  const rafRef = useRef<number | null>(null)
  const pendingRef = useRef('')
  const streamIdRef = useRef<string | null>(null)
  const sessionIdRef = useRef<string | null>(null)

  /** 拉取当前生效供应商信息（用于头部指示器） */
  const refreshActiveLlm = useCallback(async () => {
    try {
      const res = await fetch('/api/assistant/providers')
      if (!res.ok) return
      const data = (await res.json()) as {
        defaultProvider?: string
        providers?: Array<{
          id: string
          displayName: string
          effectiveModel: string
          defaultModel: string
        }>
      }
      const id = data.defaultProvider ?? 'zai'
      const p = data.providers?.find((x) => x.id === id)
      if (p) {
        setActiveLlm({
          displayName: p.displayName.split(/[（(]/)[0].trim() || p.displayName,
          model: p.effectiveModel || p.defaultModel || '',
          isBuiltin: id === 'zai',
        })
      }
    } catch {
      /* 指示器静默失败 */
    }
  }, [])

  useEffect(() => {
    void refreshActiveLlm()
  }, [refreshActiveLlm])

  /* ----- 会话初始化 + 历史加载 ----- */
  useEffect(() => {
    let sid: string | null = null
    try {
      sid = window.localStorage.getItem(SESSION_KEY)
      if (!sid) {
        sid = uuid()
        window.localStorage.setItem(SESSION_KEY, sid)
      }
    } catch {
      // 隐私模式等 localStorage 不可用时退化为内存会话
      sid = uuid()
    }
    sessionIdRef.current = sid
    setSessionId(sid)

    let cancelled = false
    fetch(`/api/chat?sessionId=${encodeURIComponent(sid)}`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json() as Promise<unknown>
      })
      .then((data: unknown) => {
        if (cancelled) return
        if (isHistoryResponse(data)) {
          setMessages(data.messages)
          setHadHistory(data.messages.length > 0)
        }
      })
      .catch(() => {
        if (!cancelled) {
          toast({
            title: '加载历史对话失败',
            description: '请刷新页面重试',
            variant: 'destructive',
          })
        }
      })
      .finally(() => {
        if (!cancelled) setHistoryLoaded(true)
      })

    return () => {
      cancelled = true
    }
  }, [toast])

  /* ----- 卸载时中止请求 ----- */
  useEffect(() => {
    return () => {
      abortRef.current?.abort()
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  /* ----- 流式增量 rAF 批量渲染 ----- */
  const flush = useCallback(() => {
    const chunk = pendingRef.current
    pendingRef.current = ''
    const id = streamIdRef.current
    if (!chunk || !id) return
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, content: m.content + chunk } : m))
    )
  }, [])

  const scheduleFlush = useCallback(() => {
    if (rafRef.current == null) {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        flush()
      })
    }
  }, [flush])

  /* ----- 滚动控制：仅当接近底部时自动跟随 ----- */
  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const near = el.scrollHeight - el.scrollTop - el.clientHeight < 80
    stickRef.current = near
    setAtBottom((prev) => (prev === near ? prev : near))
  }, [])

  const scrollToBottom = useCallback((smooth: boolean) => {
    const el = scrollRef.current
    if (!el) return
    stickRef.current = true
    setAtBottom(true)
    el.scrollTo({ top: el.scrollHeight, behavior: smooth ? 'smooth' : 'auto' })
  }, [])

  useEffect(() => {
    if (!stickRef.current) return
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages])

  /* ----- 输入框自适应高度 ----- */
  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, MAX_INPUT_HEIGHT)}px`
  }, [input])

  /* ----- 发送 / 流式接收 ----- */
  const runCompletion = useCallback(
    async (opts: {
      text: string
      context?: ChatContext
      appendUser: boolean
      dropTrailingAssistant?: boolean
    }) => {
      const sid = sessionIdRef.current
      const trimmed = opts.text.trim()
      if (!sid || !trimmed) return

      const aiId = uuid()
      const now = new Date().toISOString()
      const assistantMsg: DisplayMessage = {
        id: aiId,
        role: 'assistant',
        content: '',
        createdAt: now,
        context: opts.context,
      }
      const userMsg: DisplayMessage = {
        id: uuid(),
        role: 'user',
        content: trimmed,
        createdAt: now,
        context: opts.context,
      }

      setMessages((prev) => {
        let base = prev
        if (opts.dropTrailingAssistant) {
          while (base.length > 0 && base[base.length - 1].role === 'assistant') {
            base = base.slice(0, -1)
          }
        }
        return opts.appendUser ? [...base, userMsg, assistantMsg] : [...base, assistantMsg]
      })
      setGenerating(true)
      setStreamingId(aiId)
      streamIdRef.current = aiId
      pendingRef.current = ''
      stickRef.current = true

      const controller = new AbortController()
      abortRef.current = controller

      let streamError: string | null = null
      let userAborted = false

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId: sid,
            message: trimmed,
            context: opts.context ?? undefined,
          }),
          signal: controller.signal,
        })

        if (!res.ok) {
          streamError = `服务响应异常（HTTP ${res.status}）`
        } else {
          const body = res.body
          if (!body) {
            streamError = '响应流不可用'
          } else {
            const reader = body.getReader()
            const decoder = new TextDecoder()
            let buffer = ''
            for (;;) {
              const { done, value } = await reader.read()
              if (done) break
              buffer += decoder.decode(value, { stream: true })
              const lines = buffer.split('\n')
              buffer = lines.pop() ?? ''
              for (const rawLine of lines) {
                const line = rawLine.trim()
                if (!line.startsWith('data:')) continue
                const payload = line.slice(5).trim()
                if (!payload || payload === '[DONE]') continue
                let parsed: unknown
                try {
                  parsed = JSON.parse(payload)
                } catch {
                  continue // 忽略无法解析的行
                }
                if (isErrorEvent(parsed)) {
                  streamError = parsed.error
                  break
                }
                if (isDeltaEvent(parsed)) {
                  pendingRef.current += parsed.delta
                  scheduleFlush()
                }
                // { done: true } 为正常结束标记，无需处理
              }
              if (streamError) break
            }
            // 提前退出时释放底层连接
            void reader.cancel().catch(() => {})
          }
        }
      } catch (e) {
        if (controller.signal.aborted) {
          userAborted = true
        } else if (e instanceof TypeError) {
          streamError = '网络连接失败，请检查网络后重试'
        } else {
          streamError = e instanceof Error ? e.message : '请求失败，请重试'
        }
      } finally {
        if (rafRef.current != null) {
          cancelAnimationFrame(rafRef.current)
          rafRef.current = null
        }
        flush()
        abortRef.current = null
        streamIdRef.current = null
        setStreamingId(null)
        setGenerating(false)
      }

      if (streamError !== null) {
        const err = streamError
        setMessages((prev) => prev.map((m) => (m.id === aiId ? { ...m, error: err } : m)))
        toast({ title: '回复生成失败', description: err, variant: 'destructive' })
      } else if (userAborted) {
        setMessages((prev) => prev.map((m) => (m.id === aiId ? { ...m, stopped: true } : m)))
      }
    },
    [flush, scheduleFlush, toast]
  )

  const send = useCallback(
    (raw: string) => {
      const text = raw.trim()
      if (!text || generating || !historyLoaded || sessionId === null) return
      setInput('')
      const ctx: ChatContext | undefined = assistantContext ?? undefined
      textareaRef.current?.focus()
      void runCompletion({ text, context: ctx, appendUser: true })
    },
    [assistantContext, generating, historyLoaded, runCompletion, sessionId]
  )

  const retryLast = useCallback(() => {
    if (generating || !historyLoaded) return
    const lastUser = [...messages].reverse().find((m) => m.role === 'user')
    if (!lastUser) return
    void runCompletion({
      text: lastUser.content,
      context: lastUser.context ?? undefined,
      appendUser: false,
      dropTrailingAssistant: true,
    })
  }, [generating, historyLoaded, messages, runCompletion])

  const stop = useCallback(() => {
    abortRef.current?.abort()
  }, [])

  const clearConversation = useCallback(async () => {
    const sid = sessionIdRef.current
    if (!sid) return
    abortRef.current?.abort()
    try {
      const res = await fetch(`/api/chat?sessionId=${encodeURIComponent(sid)}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setMessages([])
      setHadHistory(false)
      toast({ title: '对话已清空', description: '已开始新的会话' })
    } catch (e) {
      const desc = e instanceof Error ? e.message : '请稍后重试'
      toast({ title: '清空对话失败', description: desc, variant: 'destructive' })
    }
  }, [toast])

  const copyMessage = useCallback(
    async (message: DisplayMessage) => {
      try {
        await navigator.clipboard.writeText(message.content)
        setCopiedId(message.id)
        window.setTimeout(() => setCopiedId((cur) => (cur === message.id ? null : cur)), 1600)
      } catch {
        toast({
          title: '复制失败',
          description: '当前浏览器不支持剪贴板操作',
          variant: 'destructive',
        })
      }
    },
    [toast]
  )

  /* ----- 输入事件 ----- */
  const handleInputChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }, [])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
        e.preventDefault()
        send(input)
      }
    },
    [input, send]
  )

  const handleFilterChange = useCallback((v: string) => {
    setSubjectFilter(v === 'all' ? 'all' : isSubjectId(v) ? v : 'all')
  }, [])

  /* ----- 派生数据 ----- */
  const contextInfo = useMemo(() => {
    if (!assistantContext?.subjectId) return null
    const subject = getSubject(assistantContext.subjectId)
    const chapter = assistantContext.chapterId
      ? getChapter(assistantContext.subjectId, assistantContext.chapterId)
      : undefined
    const parts: string[] = [subject?.name ?? '教材']
    if (chapter) parts.push(`第 ${chapter.number} 章 ${chapter.title}`)
    if (assistantContext.sectionTitle) parts.push(assistantContext.sectionTitle)
    return {
      label: parts.join(' · '),
      theme: subject ? getSubjectTheme(subject.id) : null,
    }
  }, [assistantContext])

  const filterSubject = useMemo(
    () => (subjectFilter === 'all' ? null : getSubject(subjectFilter)),
    [subjectFilter]
  )

  const canSend = input.trim().length > 0 && !generating && historyLoaded && sessionId !== null

  const placeholder = !historyLoaded
    ? '正在加载会话…'
    : filterSubject
      ? `聚焦「${filterSubject.name}」· 输入你的生物学问题…`
      : '输入你的生物学问题，例如：解释糖酵解的反应历程…'

  /* ----- 渲染 ----- */
  return (
    <div className="mx-auto flex h-[calc(100dvh-3.5rem)] min-h-[460px] w-full max-w-4xl flex-col px-3 pt-2 sm:px-4 sm:pt-4 lg:h-[calc(100dvh-7.5rem)]">
      {/* 顶部：编辑式学术头部（含工具栏） */}
      <header className="relative shrink-0 overflow-hidden rounded-t-2xl border bg-card">
        <div
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600"
          aria-hidden
        />
        <div className="px-4 pt-3 sm:px-5 sm:pt-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="bio-eyebrow hidden text-muted-foreground sm:block">AI Teaching Assistant</p>
              <h1 className="mt-1.5 font-serif text-lg font-bold leading-snug tracking-tight sm:mt-1 sm:text-xl">
                AI 智能助教
              </h1>
              <p className="mt-1 hidden text-xs text-muted-foreground sm:block">
                覆盖十二大基础学科的生物学专家助教
              </p>
            </div>
            <span
              className="hidden shrink-0 items-center gap-1.5 pt-1 text-[10px] text-muted-foreground sm:inline-flex"
              aria-live="polite"
            >
              <span
                className={cn(
                  'h-1.5 w-1.5 rounded-full',
                  generating ? 'animate-pulse bg-amber-500' : 'bg-emerald-500'
                )}
                aria-hidden
              />
              {generating ? '生成中' : '在线'}
            </span>
          </div>
        </div>
        <div className="bio-rule mt-3.5" aria-hidden />

        {/* 工具栏：教材上下文 / 学科过滤 / 清空 */}
        <div className="flex items-center gap-2 px-3 py-2 sm:px-4">
          <div className="flex min-w-0 flex-1 items-center">
            {contextInfo ? (
              <Badge
                variant="outline"
                className={cn(
                  'gap-1.5 py-1 pl-2.5 pr-1 text-[11px] font-medium',
                  contextInfo.theme?.classes.badge ??
                    'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30'
                )}
              >
                <BookOpenText className="h-3 w-3 shrink-0" aria-hidden />
                <span className="max-w-[13rem] truncate sm:max-w-[24rem]" title={contextInfo.label}>
                  {contextInfo.label}
                </span>
                <button
                  type="button"
                  onClick={() => setAssistantContext(null)}
                  aria-label="清除教材上下文"
                  className="ml-0.5 rounded-full p-0.5 transition-colors hover:bg-foreground/10"
                >
                  <X className="h-3 w-3" aria-hidden />
                </button>
              </Badge>
            ) : filterSubject ? (
              <Badge
                variant="outline"
                className="gap-1.5 border-emerald-500/30 bg-emerald-500/15 py-1 pl-2.5 pr-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400"
              >
                <Sparkles className="h-3 w-3 shrink-0" aria-hidden />
                <span className="truncate">提问聚焦：{filterSubject.name}</span>
                <button
                  type="button"
                  onClick={() => setSubjectFilter('all')}
                  aria-label="取消学科聚焦"
                  className="ml-0.5 rounded-full p-0.5 transition-colors hover:bg-foreground/10"
                >
                  <X className="h-3 w-3" aria-hidden />
                </button>
              </Badge>
            ) : (
              <p className="flex min-w-0 items-center gap-1.5 text-[11px] text-muted-foreground">
                <Lightbulb className="h-3.5 w-3.5 shrink-0 text-muted-foreground/70" aria-hidden />
                <span className="truncate">
                  提示：从知识点阅读页点击「向 AI 提问」可携带教材上下文
                </span>
              </p>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            {/* 供应商配置入口：显示当前生效供应商 */}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setProvidersOpen(true)}
              aria-label="AI 供应商配置"
              title={
                activeLlm
                  ? `当前供应商：${activeLlm.displayName} · ${activeLlm.model}（点击配置）`
                  : '配置 AI 供应商与 API Key'
              }
              className="h-8 gap-1.5 rounded-lg px-2 text-xs text-muted-foreground hover:text-foreground"
            >
              <span
                className={cn(
                  'h-1.5 w-1.5 shrink-0 rounded-full',
                  activeLlm && !activeLlm.isBuiltin
                    ? 'bg-teal-500'
                    : 'bg-emerald-500'
                )}
                aria-hidden
              />
              <Key className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="hidden max-w-[7.5rem] truncate font-medium sm:inline">
                {activeLlm ? activeLlm.displayName : '供应商'}
              </span>
            </Button>

            <Select value={subjectFilter} onValueChange={handleFilterChange}>
              <SelectTrigger
                size="sm"
                aria-label="选择学科聚焦范围"
                className="h-8 w-[124px] rounded-lg text-xs text-muted-foreground"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部学科</SelectItem>
                {subjects.map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  disabled={messages.length === 0}
                  aria-label="清空对话"
                  className="h-8 w-8 rounded-lg text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" aria-hidden />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-sm">
                <AlertDialogHeader>
                  <AlertDialogTitle>清空当前对话？</AlertDialogTitle>
                  <AlertDialogDescription>
                    将删除本会话的全部 {messages.length} 条消息记录，此操作无法恢复。
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>取消</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => void clearConversation()}
                    className="bg-destructive text-white hover:bg-destructive/90"
                  >
                    确认清空
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </header>

      {/* 消息区 */}
      <div className="relative min-h-0 flex-1 border-x bg-background">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          role="log"
          aria-label="对话消息"
          aria-live="polite"
          className="bio-scroll h-full overflow-y-auto px-3 py-4 sm:px-5"
        >
          {!historyLoaded ? (
            <HistorySkeleton />
          ) : messages.length === 0 ? (
            <QuickQuestions onPick={send} />
          ) : (
            <div className="flex flex-col gap-5">
              {hadHistory ? (
                <div className="flex items-center gap-3" aria-hidden>
                  <div className="bio-rule h-px flex-1" />
                  <span className="text-[10px] text-muted-foreground">历史消息</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
                </div>
              ) : null}
              {messages.map((m) => (
                <MessageBubble
                  key={m.id}
                  message={m}
                  streaming={m.id === streamingId}
                  copied={copiedId === m.id}
                  onCopy={copyMessage}
                  onRetry={retryLast}
                />
              ))}
            </div>
          )}
          <div className="h-2" aria-hidden />
        </div>

        {!atBottom && (
          <button
            type="button"
            onClick={() => scrollToBottom(true)}
            aria-label="滚动到最新消息"
            className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm transition-colors hover:text-foreground"
          >
            <ChevronDown className="h-4 w-4" aria-hidden />
          </button>
        )}
      </div>

      {/* 输入区 */}
      <div className="shrink-0 rounded-b-2xl border border-t bg-card p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] sm:p-3">
        <div className="flex items-end gap-2 rounded-lg border bg-background px-2 py-1 transition-shadow focus-within:border-ring/50 focus-within:ring-2 focus-within:ring-ring/40">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder={placeholder}
            aria-label="输入你的问题"
            disabled={!historyLoaded}
            className="min-h-[44px] flex-1 resize-none border-0 bg-transparent px-2 py-2.5 shadow-none focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-transparent"
          />
          {generating ? (
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={stop}
              aria-label="停止生成"
              className="h-10 w-10 shrink-0 rounded-lg border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              <Square className="h-4 w-4" aria-hidden />
            </Button>
          ) : (
            <Button
              type="button"
              size="icon"
              onClick={() => send(input)}
              disabled={!canSend}
              aria-label="发送问题"
              className="h-10 w-10 shrink-0 rounded-lg"
            >
              <Send className="h-4 w-4" aria-hidden />
            </Button>
          )}
        </div>
        <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 px-1 text-[10px] leading-relaxed text-muted-foreground">
          <span>Enter 发送 · Shift + Enter 换行</span>
          {filterSubject ? <span>当前聚焦「{filterSubject.name}」（提示性，不严格限定）</span> : null}
          {activeLlm ? (
            <span className="font-mono">
              引擎：{activeLlm.displayName} / {activeLlm.model || '默认模型'}
            </span>
          ) : null}
          <span className="ml-auto hidden sm:inline">回答由 AI 生成，请注意核对关键数据</span>
        </p>
      </div>

      {/* 供应商配置弹窗 */}
      <ProvidersPanel
        open={providersOpen}
        onClose={() => setProvidersOpen(false)}
        onChanged={() => void refreshActiveLlm()}
      />
    </div>
  )
}
