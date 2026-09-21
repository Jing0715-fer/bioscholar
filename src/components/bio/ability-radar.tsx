'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

/* ============================================================
   能力画像 · 六维雷达图（SVG 自绘）
   维度：知识覆盖 / 测验正确率 / 记忆巩固 / 学习坚持 / 笔记产出 / 复习投入
   全部数据来自 /api/report 的 overview 与 activity，无需后端改动
   ============================================================ */

export interface AbilityDim {
  key: string
  label: string
  /** 0-100 归一化得分 */
  score: number
  /** 原始值展示（如 "12/53 小节"） */
  raw: string
  /** 维度口径说明 */
  hint: string
}

/* ---------- 几何工具 ---------- */

const CENTER = { x: 160, y: 148 }
const RADIUS = 96

/** 六维顶点角度：从正上方开始，顺时针每 60° */
function angleOf(i: number): number {
  return -Math.PI / 2 + (i * Math.PI) / 3
}

/** 第 i 维、比例 r（0-1）的顶点坐标 */
function vertex(i: number, r: number): { x: number; y: number } {
  return {
    x: CENTER.x + RADIUS * r * Math.cos(angleOf(i)),
    y: CENTER.y + RADIUS * r * Math.sin(angleOf(i)),
  }
}

function polygonPoints(ratios: number[]): string {
  return ratios
    .map((r, i) => {
      const p = vertex(i, r)
      return `${p.x.toFixed(1)},${p.y.toFixed(1)}`
    })
    .join(' ')
}

/* ---------- 雷达主体 ---------- */

export function AbilityRadar({ dims }: { dims: AbilityDim[] }) {
  const [mounted, setMounted] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(t)
  }, [])

  const ratios = dims.map((d) => Math.max(0, Math.min(100, d.score)) / 100)
  // 进场动画：从中心（全 0）插值到真实值
  const animated = mounted ? ratios : ratios.map(() => 0)

  const GRID_LEVELS = [0.25, 0.5, 0.75, 1]

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
      {/* 雷达图 */}
      <div
        className="mx-auto w-full max-w-[340px]"
        role="img"
        aria-label={`能力画像雷达图：${dims
          .map((d) => `${d.label} ${Math.round(d.score)} 分`)
          .join('、')}`}
      >
        <svg
          viewBox="0 0 320 300"
          className="h-auto w-full overflow-visible"
          onMouseLeave={() => setHovered(null)}
        >
          {/* 网格：四层同心六边形 */}
          {GRID_LEVELS.map((lv) => (
            <polygon
              key={lv}
              points={polygonPoints(dims.map(() => lv))}
              className="fill-none stroke-border"
              strokeWidth={lv === 1 ? 1.2 : 0.7}
              strokeDasharray={lv === 1 ? undefined : '3 3'}
            />
          ))}
          {/* 轴线 */}
          {dims.map((_, i) => {
            const p = vertex(i, 1)
            return (
              <line
                key={i}
                x1={CENTER.x}
                y1={CENTER.y}
                x2={p.x}
                y2={p.y}
                className="stroke-border"
                strokeWidth={0.7}
                strokeDasharray="2 3"
              />
            )
          })}

          {/* 数据多边形（进场由中心展开） */}
          <polygon
            points={polygonPoints(animated)}
            className="fill-primary/15 stroke-primary transition-[points] duration-700 ease-out"
            strokeWidth={2}
            strokeLinejoin="round"
            style={{ transformBox: 'fill-box' }}
          />

          {/* 数据顶点 + 标签 */}
          {dims.map((d, i) => {
            const p = vertex(i, animated[i])
            const label = vertex(i, 1.26)
            const isHover = hovered === i
            return (
              <g key={d.key}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={isHover ? 6 : 4}
                  className="fill-primary stroke-background transition-all duration-200"
                  strokeWidth={2}
                />
                {/* 命中区（扩大到轴末端，便于 hover） */}
                <line
                  x1={CENTER.x}
                  y1={CENTER.y}
                  x2={vertex(i, 1).x}
                  y2={vertex(i, 1).y}
                  className="cursor-help stroke-transparent"
                  strokeWidth={16}
                  onMouseEnter={() => setHovered(i)}
                />
                <text
                  x={label.x}
                  y={label.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={cn(
                    'select-none font-serif text-[13px] font-bold transition-colors',
                    isHover ? 'fill-primary' : 'fill-foreground/80'
                  )}
                >
                  {d.label}
                </text>
                <text
                  x={label.x}
                  y={label.y + 15}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={cn(
                    'select-none font-sans text-[10px] tabular-nums transition-colors',
                    isHover ? 'fill-primary' : 'fill-muted-foreground'
                  )}
                >
                  {Math.round(d.score)}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* 明细列表 */}
      <div className="space-y-4">
        {dims.map((d, i) => {
          const isHover = hovered === i
          return (
            <div
              key={d.key}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                'rounded-lg border px-4 py-3 transition-colors',
                isHover ? 'border-primary/40 bg-accent/50' : 'border-border'
              )}
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-serif text-sm font-bold">{d.label}</span>
                <span className="text-xs tabular-nums text-muted-foreground">
                  {d.raw}
                </span>
                <span
                  className={cn(
                    'ml-auto font-serif text-sm font-bold tabular-nums',
                    d.score >= 60
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : d.score > 0
                        ? 'text-amber-600 dark:text-amber-500'
                        : 'text-muted-foreground/50'
                  )}
                >
                  {Math.round(d.score)}
                  <span className="ml-0.5 font-sans text-[10px] font-normal text-muted-foreground">
                    /100
                  </span>
                </span>
              </div>
              <div
                className="mt-2 block h-1 w-full overflow-hidden rounded-full bg-muted"
                role="progressbar"
                aria-valuenow={Math.round(d.score)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${d.label}得分`}
              >
                <span
                  className="block h-full rounded-full bg-primary transition-[width] duration-700 ease-out"
                  style={{ width: `${mounted ? d.score : 0}%` }}
                />
              </div>
              <p
                className={cn(
                  'mt-1.5 text-[11px] leading-relaxed text-muted-foreground/80 transition-opacity',
                  isHover ? 'opacity-100' : 'opacity-70'
                )}
              >
                {d.hint}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ---------- 维度计算（由调用方传入 overview/activity 数据） ---------- */

export function buildAbilityDims(input: {
  completedSections: number
  totalSections: number
  quizTotal: number
  quizCorrect: number
  accuracy: number
  noteCount: number
  cardsSeen: number
  cardsMastered: number
  activeDays: number
}): AbilityDim[] {
  const {
    completedSections,
    totalSections,
    quizTotal,
    quizCorrect,
    accuracy,
    noteCount,
    cardsSeen,
    cardsMastered,
    activeDays,
  } = input

  const coverage = totalSections ? (completedSections / totalSections) * 100 : 0
  const retention = cardsSeen ? (cardsMastered / cardsSeen) * 100 : 0
  // 坚持度：近 18 周内每 2 个活跃天记 1 分，50 天满格
  const persistence = Math.min(100, activeDays * 2)
  // 笔记：每篇 5 分，20 篇满格
  const notesScore = Math.min(100, noteCount * 5)
  // 复习投入：每张已学卡 1 分，100 张满格
  const reviewsScore = Math.min(100, cardsSeen)

  return [
    {
      key: 'coverage',
      label: '知识覆盖',
      score: coverage,
      raw: `${completedSections}/${totalSections} 小节`,
      hint: '已完成小节占九学科全部小节的比例，反映教材推进广度',
    },
    {
      key: 'accuracy',
      label: '测验正确率',
      score: accuracy,
      raw: `${quizCorrect}/${quizTotal} 题正确`,
      hint: '全部章节自测题的总正确率，反映即时掌握质量',
    },
    {
      key: 'retention',
      label: '记忆巩固',
      score: retention,
      raw: `${cardsMastered}/${cardsSeen} 张掌握`,
      hint: 'SM-2 复习间隔 ≥ 21 天的卡片占比，反映长期记忆留存',
    },
    {
      key: 'persistence',
      label: '学习坚持',
      score: persistence,
      raw: `${activeDays} 天活跃`,
      hint: '近 18 周内出现学习行为的天数（50 天计满），反映学习规律性',
    },
    {
      key: 'notes',
      label: '笔记产出',
      score: notesScore,
      raw: `${noteCount} 篇笔记`,
      hint: '研读笔记累计篇数（20 篇计满），反映主动整理习惯',
    },
    {
      key: 'reviews',
      label: '复习投入',
      score: reviewsScore,
      raw: `${cardsSeen} 张卡片`,
      hint: '间隔重复系统已学卡片量（100 张计满），反映记忆训练投入',
    },
  ]
}
