'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import {
  ChevronDown,
  ChevronUp,
  Hand,
  Maximize,
  MousePointerClick,
  Scan,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * 教材插图灯箱（全屏级大图查看器）
 *
 * 交互设计：
 * - 滚轮（中键滚轮）缩放：以光标为中心缩放，Ctrl+滚轮（触控板捏合）同样生效
 * - 左键 / 中键 按住拖拽平移；中键轻点（无拖动）切换放大/复位
 * - 双击切换放大（以点击点为中心 2.5×）/ 复位
 * - 触屏：双指捏合缩放 + 双指平移，单指拖动平移
 * - 工具栏：缩小 / 当前倍率 / 放大 / 复位适配
 * - 键盘：+/- 缩放、0 复位、方向键平移、Esc 关闭
 * - 图注面板可折叠：折叠后图像区域最大化（小屏友好）
 *
 * 状态生命周期：LightboxBody 仅在对话框打开期间挂载（Radix Presence），
 * 每次打开自动复位到 100% 适配视图，无需手动重置。
 */

const MIN_SCALE = 1
const MAX_SCALE = 10

interface Transform {
  scale: number
  tx: number
  ty: number
}

const IDENTITY: Transform = { scale: 1, tx: 0, ty: 0 }

function clampScale(s: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, s))
}

export interface FigureLightboxProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  /** 图片地址 */
  src: string
  /** 图号（图 1-2-3） */
  num?: string
  /** 无障碍标题（缺省用图号） */
  title?: string
  /** 图注 */
  caption?: string
  /** 来源署名 */
  credit?: string
  /** 头部元信息行（学科 · 章 · 节） */
  headerMeta?: React.ReactNode
  /** 底部面板附加内容（AI 讲解、跳转按钮等） */
  footer?: React.ReactNode
}

export function FigureLightbox({
  open,
  onOpenChange,
  src,
  num,
  title,
  caption,
  credit,
  headerMeta,
  footer,
}: FigureLightboxProps) {
  const a11yTitle = title ?? (num ? `图 ${num}` : '插图放大查看')

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
        />
        <DialogPrimitive.Content
          className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-background outline-none duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 sm:inset-4 sm:rounded-2xl sm:border sm:shadow-2xl"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div className="sr-only">
            <DialogPrimitive.Title>{a11yTitle}</DialogPrimitive.Title>
            <DialogPrimitive.Description>
              {caption ?? '教材插图放大查看，支持滚轮缩放与拖拽平移'}
            </DialogPrimitive.Description>
          </div>

          {/* 关闭按钮 */}
          <DialogPrimitive.Close
            className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border bg-background/90 text-foreground shadow-md backdrop-blur transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="关闭大图查看"
          >
            <X className="h-4.5 w-4.5" aria-hidden />
          </DialogPrimitive.Close>

          <LightboxBody
            src={src}
            num={num}
            caption={caption}
            credit={credit}
            headerMeta={headerMeta}
            footer={footer}
            a11yTitle={a11yTitle}
          />
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

// ============================================================
// 灯箱主体：仅在打开期间挂载，状态随挂载复位
// ============================================================

interface LightboxBodyProps {
  src: string
  num?: string
  caption?: string
  credit?: string
  headerMeta?: React.ReactNode
  footer?: React.ReactNode
  a11yTitle: string
}

function LightboxBody({
  src,
  num,
  caption,
  credit,
  headerMeta,
  footer,
  a11yTitle,
}: LightboxBodyProps) {
  // 变换真值保存在 ref（事件内同步读写，直接写 DOM 避免高频 setState 抖动）
  const tfRef = useRef<Transform>(IDENTITY)
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  // 仅用于 UI 呈现的状态
  const [scalePct, setScalePct] = useState(100)
  const [dragging, setDragging] = useState(false)
  const [captionOpen, setCaptionOpen] = useState(true)

  // 拖拽会话（左键/中键/单指）
  const dragRef = useRef<{
    id: number
    x: number
    y: number
    tx: number
    ty: number
    moved: boolean
    button: number
    t0: number
  } | null>(null)
  // 活动触点（捏合）
  const pointersRef = useRef(new Map<number, { x: number; y: number }>())
  const pinchRef = useRef<{
    dist: number
    midX: number
    midY: number
    scale: number
    tx: number
    ty: number
  } | null>(null)

  /** 平滑缩放过渡开关（直接写 class，保证先挂过渡再写 transform 才能动画） */
  const setTransition = useCallback((on: boolean) => {
    const img = imgRef.current
    if (img) img.classList.toggle('bio-fig-zm', on)
  }, [])

  /** 将变换写入图片元素（transform-origin: center） */
  const writeTf = useCallback((t: Transform) => {
    tfRef.current = t
    const img = imgRef.current
    if (img) img.style.transform = `translate(${t.tx}px, ${t.ty}px) scale(${t.scale})`
    setScalePct(Math.round(t.scale * 100))
  }, [])

  /** 以视口内 (clientX, clientY) 为锚点缩放 factor 倍 */
  const zoomAt = useCallback(
    (clientX: number, clientY: number, factor: number, withSmooth: boolean) => {
      const prev = tfRef.current
      const next = clampScale(prev.scale * factor)
      setTransition(withSmooth)
      if (next <= MIN_SCALE) {
        writeTf(IDENTITY)
        return
      }
      const rect = viewportRef.current?.getBoundingClientRect()
      // 光标相对视口中心的偏移
      const cx = rect ? clientX - rect.left - rect.width / 2 : 0
      const cy = rect ? clientY - rect.top - rect.height / 2 : 0
      const ratio = next / prev.scale
      // 保持光标下的图像点不动：t' = c - (c - t) · ratio
      writeTf({
        scale: next,
        tx: cx - (cx - prev.tx) * ratio,
        ty: cy - (cy - prev.ty) * ratio,
      })
    },
    [writeTf, setTransition]
  )

  /** 以视口中心缩放（按钮 / 键盘） */
  const zoomCenter = useCallback(
    (factor: number) => {
      const rect = viewportRef.current?.getBoundingClientRect()
      zoomAt(
        rect ? rect.left + rect.width / 2 : 0,
        rect ? rect.top + rect.height / 2 : 0,
        factor,
        true
      )
    },
    [zoomAt]
  )

  /** 复位到适配大小 */
  const resetView = useCallback(() => {
    setTransition(true)
    writeTf(IDENTITY)
  }, [writeTf, setTransition])

  // 滚轮缩放（必须非被动监听才能 preventDefault；组件仅在打开期间挂载）
  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      // 指数平滑：触控板小增量顺滑，鼠标滚轮一档约 ±16%
      const factor = Math.exp(-e.deltaY * 0.0018)
      zoomAt(e.clientX, e.clientY, Math.min(1.4, Math.max(0.7, factor)), false)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [zoomAt])

  // 中键按下禁用浏览器自动滚动（兜底：部分浏览器 pointerdown 不拦截）
  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const onMouseDown = (e: MouseEvent) => {
      if (e.button === 1) e.preventDefault()
    }
    el.addEventListener('mousedown', onMouseDown)
    return () => el.removeEventListener('mousedown', onMouseDown)
  }, [])

  // 键盘：+/- 缩放、0 复位、方向键平移
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const pan = 80
      switch (e.key) {
        case '+':
        case '=':
          e.preventDefault()
          zoomCenter(1.3)
          break
        case '-':
        case '_':
          e.preventDefault()
          zoomCenter(1 / 1.3)
          break
        case '0':
          e.preventDefault()
          resetView()
          break
        case 'ArrowLeft':
          e.preventDefault()
          setTransition(false)
          writeTf({ ...tfRef.current, tx: tfRef.current.tx + pan })
          break
        case 'ArrowRight':
          e.preventDefault()
          setTransition(false)
          writeTf({ ...tfRef.current, tx: tfRef.current.tx - pan })
          break
        case 'ArrowUp':
          e.preventDefault()
          setTransition(false)
          writeTf({ ...tfRef.current, ty: tfRef.current.ty + pan })
          break
        case 'ArrowDown':
          e.preventDefault()
          setTransition(false)
          writeTf({ ...tfRef.current, ty: tfRef.current.ty - pan })
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [zoomCenter, resetView, writeTf, setTransition])

  // ------------------------------------------------------------------
  // 指针交互：左键/中键/单指拖拽 + 双指捏合
  // ------------------------------------------------------------------

  const startDrag = (pointerId: number, x: number, y: number, button: number) => {
    dragRef.current = {
      id: pointerId,
      x,
      y,
      tx: tfRef.current.tx,
      ty: tfRef.current.ty,
      moved: false,
      button,
      t0: Date.now(),
    }
    setDragging(true)
    setTransition(false)
  }

  const moveDrag = (x: number, y: number) => {
    const d = dragRef.current
    if (!d) return
    const dx = x - d.x
    const dy = y - d.y
    if (!d.moved && Math.hypot(dx, dy) > 4) d.moved = true
    writeTf({
      scale: tfRef.current.scale,
      tx: d.tx + dx,
      ty: d.ty + dy,
    })
  }

  const endDrag = () => {
    dragRef.current = null
    setDragging(false)
  }

  /** 中键轻点（无拖动）切换放大 */
  const middleClickToggle = (x: number, y: number) => {
    if (tfRef.current.scale > MIN_SCALE + 0.01) resetView()
    else zoomAt(x, y, 2.5, true)
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = viewportRef.current
    if (!el) return
    // 捕获指针使拖拽移出视区仍可跟踪；个别环境（非活动指针）会抛错，安全兜底
    try {
      el.setPointerCapture(e.pointerId)
    } catch {
      /* noop */
    }
    if (e.pointerType === 'mouse') {
      if (e.button !== 0 && e.button !== 1) return
      e.preventDefault()
      pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
      startDrag(e.pointerId, e.clientX, e.clientY, e.button)
    } else {
      // 触摸 / 触控笔
      pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
      if (pointersRef.current.size === 2) {
        // 进入捏合：终止单指拖拽，记录基线
        endDrag()
        const [p1, p2] = [...pointersRef.current.values()]
        const rect = el.getBoundingClientRect()
        pinchRef.current = {
          dist: Math.hypot(p1.x - p2.x, p1.y - p2.y) || 1,
          midX: (p1.x + p2.x) / 2 - rect.left - rect.width / 2,
          midY: (p1.y + p2.y) / 2 - rect.top - rect.height / 2,
          scale: tfRef.current.scale,
          tx: tfRef.current.tx,
          ty: tfRef.current.ty,
        }
        setTransition(false)
      } else if (pointersRef.current.size === 1) {
        startDrag(e.pointerId, e.clientX, e.clientY, 0)
      }
    }
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointersRef.current.has(e.pointerId)) return
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY })

    if (pinchRef.current && pointersRef.current.size >= 2) {
      const [p1, p2] = [...pointersRef.current.values()]
      const rect = viewportRef.current?.getBoundingClientRect()
      const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y) || 1
      const midX = (p1.x + p2.x) / 2 - (rect ? rect.left + rect.width / 2 : 0)
      const midY = (p1.y + p2.y) / 2 - (rect ? rect.top + rect.height / 2 : 0)
      const base = pinchRef.current
      const next = clampScale((base.scale * dist) / base.dist)
      if (next <= MIN_SCALE) {
        writeTf(IDENTITY)
        return
      }
      const ratio = next / base.scale
      // 基线中指下的图像点跟随当前中指移动，兼顾双指平移
      writeTf({
        scale: next,
        tx: midX - (base.midX - base.tx) * ratio,
        ty: midY - (base.midY - base.ty) * ratio,
      })
      return
    }

    if (dragRef.current && pointersRef.current.size === 1) {
      moveDrag(e.clientX, e.clientY)
    }
  }

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const had = pointersRef.current.delete(e.pointerId)
    if (!had) return

    if (pointersRef.current.size < 2) pinchRef.current = null

    if (pointersRef.current.size === 0) {
      const d = dragRef.current
      // 中键轻点（基本无位移且间隔短）→ 切换缩放
      if (
        d &&
        d.button === 1 &&
        !d.moved &&
        Date.now() - d.t0 < 400 &&
        e.pointerType === 'mouse'
      ) {
        endDrag()
        middleClickToggle(e.clientX, e.clientY)
        return
      }
      endDrag()
    } else if (pointersRef.current.size === 1 && e.pointerType !== 'mouse') {
      // 捏合结束还剩一指：从当前位置重启拖拽
      const [p] = [...pointersRef.current.values()]
      startDrag(e.pointerId, p.x, p.y, 0)
    }
  }

  const onDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (tfRef.current.scale > MIN_SCALE + 0.01) resetView()
    else zoomAt(e.clientX, e.clientY, 2.5, true)
  }

  const zoomedState = scalePct > 100
  const cursorCls =
    dragging && zoomedState
      ? 'cursor-grabbing'
      : zoomedState
        ? 'cursor-grab'
        : 'cursor-zoom-in'

  return (
    <>
      {/* ============ 图像视区：缩放 / 拖拽 ============ */}
      <div
        ref={viewportRef}
        role="img"
        aria-label={`${a11yTitle}：滚轮或双击缩放，按住鼠标左键或中键拖拽平移`}
        className={cn(
          'relative flex min-h-0 flex-1 touch-none select-none items-center justify-center overflow-hidden overscroll-none bg-[#faf9f4] outline-none dark:bg-[#111a16]',
          cursorCls
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onLostPointerCapture={onPointerUp}
        onDoubleClick={onDoubleClick}
        onContextMenu={(e) => e.preventDefault()}
      >
        {src ? (
          <img
            ref={imgRef}
            src={src}
            alt={caption ?? a11yTitle}
            draggable={false}
            className="pointer-events-none max-h-full max-w-full select-none object-contain will-change-transform"
          />
        ) : null}

        {/* 缩放工具栏 */}
        <div
          className="absolute bottom-3 right-3 z-10 flex items-center gap-0.5 rounded-full border bg-background/90 py-1 pl-1 pr-1.5 shadow-lg backdrop-blur"
          role="group"
          aria-label="缩放控制"
        >
          <button
            type="button"
            onClick={() => zoomCenter(1 / 1.3)}
            disabled={scalePct <= MIN_SCALE * 100}
            aria-label="缩小"
            className="flex h-8 w-8 items-center justify-center rounded-full outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"
          >
            <ZoomOut className="h-4 w-4" aria-hidden />
          </button>
          <span
            className="min-w-[3.4rem] text-center font-mono text-[11px] font-semibold tabular-nums text-foreground"
            aria-live="polite"
          >
            {scalePct}%
          </span>
          <button
            type="button"
            onClick={() => zoomCenter(1.3)}
            disabled={scalePct >= MAX_SCALE * 100}
            aria-label="放大"
            className="flex h-8 w-8 items-center justify-center rounded-full outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"
          >
            <ZoomIn className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={resetView}
            disabled={scalePct === 100}
            aria-label="复位适配窗口"
            title="复位 (0)"
            className="flex h-8 w-8 items-center justify-center rounded-full outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"
          >
            <Scan className="h-4 w-4" aria-hidden />
          </button>
        </div>

        {/* 操作提示（桌面 / 触屏两套文案） */}
        <div className="pointer-events-none absolute bottom-3 left-3 z-10 hidden max-w-[46%] items-center gap-1.5 rounded-full border bg-background/80 px-3 py-1.5 text-[10px] leading-none text-muted-foreground shadow-sm backdrop-blur sm:flex">
          <MousePointerClick className="h-3 w-3 shrink-0" aria-hidden />
          <span>
            滚轮 / 双击缩放 · 左键或中键拖拽
            <span className="opacity-60"> · 中键轻点放大</span>
          </span>
        </div>
        <div className="pointer-events-none absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-full border bg-background/80 px-3 py-1.5 text-[10px] leading-none text-muted-foreground shadow-sm backdrop-blur sm:hidden">
          <Hand className="h-3 w-3 shrink-0" aria-hidden />
          <span>双指缩放 · 单指拖动</span>
        </div>

        {/* 复位提示（非 100% 时浮现） */}
        {zoomedState && (
          <button
            type="button"
            onClick={resetView}
            className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border bg-background/90 px-3 py-1.5 text-[10px] font-medium text-muted-foreground shadow-md backdrop-blur transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Maximize className="h-3 w-3" aria-hidden />
            复位视图
          </button>
        )}
      </div>

      {/* ============ 底部图注面板（可折叠，最大化图像区） ============ */}
      <div className="shrink-0 border-t bg-background">
        <div className="flex min-h-[44px] items-center gap-2.5 px-4 py-2 sm:px-5">
          {num && (
            <span className="shrink-0 font-mono text-xs font-bold text-primary">
              图 {num}
            </span>
          )}
          {headerMeta && (
            <span className="min-w-0 flex-1 truncate text-xs text-muted-foreground">
              {headerMeta}
            </span>
          )}
          {!headerMeta && <span className="flex-1" aria-hidden />}
          <button
            type="button"
            onClick={() => setCaptionOpen((v) => !v)}
            aria-expanded={captionOpen}
            aria-label={captionOpen ? '折叠图注，最大化图像' : '展开图注'}
            className="inline-flex shrink-0 items-center gap-1 rounded-md border bg-card px-2 py-1 text-[10px] font-medium text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
          >
            {captionOpen ? (
              <>
                <ChevronDown className="h-3 w-3" aria-hidden />
                收起图注
              </>
            ) : (
              <>
                <ChevronUp className="h-3 w-3" aria-hidden />
                展开图注
              </>
            )}
          </button>
        </div>
        {captionOpen && (
          <div className="bio-scroll max-h-[30dvh] overflow-y-auto border-t px-4 pb-4 pt-3 sm:max-h-[32dvh] sm:px-5">
            {caption && (
              <p className="text-sm leading-relaxed text-foreground">{caption}</p>
            )}
            {credit && (
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {credit}
              </p>
            )}
            {footer && <div className="mt-3">{footer}</div>}
          </div>
        )}
      </div>
    </>
  )
}
