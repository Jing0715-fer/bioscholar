'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

/** 单日活动计数（与 /api/activity 返回一致） */
export interface ActivityDay {
  date: string
  completed: number
  quiz: number
  notes: number
  reviews: number
  total: number
}

export interface ActivitySummary {
  streak: number
  maxStreak: number
  activeTotal: number
  todayTotal: number
}

const WEEKDAY_LABELS = ['一', '二', '三', '四', '五', '六', '日']

/** 活动量 → 色阶（0-4） */
function levelOf(total: number): 0 | 1 | 2 | 3 | 4 {
  if (total <= 0) return 0
  if (total === 1) return 1
  if (total <= 3) return 2
  if (total <= 6) return 3
  return 4
}

const LEVEL_BG: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: 'bg-muted',
  1: 'bg-primary/25',
  2: 'bg-primary/45',
  3: 'bg-primary/65',
  4: 'bg-primary/90',
}

/** 日期格式化：MM-DD → M月D日 */
function formatCn(dateStr: string): string {
  const [, m, d] = dateStr.split('-')
  return `${Number(m)}月${Number(d)}日`
}

/**
 * 学习热力图（GitHub 风格活动日历，学术编辑风）
 * - 按周分列、周一为第一行
 * - hover / focus 单格 → 底部明细行更新（避免 tooltip 溢出）
 */
export function ActivityHeatmap({
  days,
  summary,
}: {
  days: ActivityDay[]
  summary: ActivitySummary | null
}) {
  const [hovered, setHovered] = useState<ActivityDay | null>(null)

  /** 布局：周列 × 7 行 */
  const weeks = useMemo(() => {
    if (!days.length) return [] as Array<Array<ActivityDay | null>>
    // 第一天偏移到周一（getDay: 周日=0 → 周一体系 (d+6)%7）
    const first = new Date(days[0].date + 'T00:00:00Z')
    const offset = (first.getUTCDay() + 6) % 7
    const padded: Array<ActivityDay | null> = [
      ...Array.from({ length: offset }, () => null),
      ...days,
    ]
    const cols: Array<Array<ActivityDay | null>> = []
    for (let i = 0; i < padded.length; i += 7) {
      cols.push(padded.slice(i, i + 7))
    }
    return cols
  }, [days])

  /** 月份标签：每周第一格若跨新月则标注 */
  const monthMarks = useMemo(() => {
    const marks: Array<{ col: number; label: string }> = []
    let lastMonth = -1
    weeks.forEach((week, col) => {
      const firstReal = week.find((d): d is ActivityDay => d !== null)
      if (!firstReal) return
      const month = Number(firstReal.date.slice(5, 7))
      if (month !== lastMonth) {
        marks.push({ col, label: `${month}月` })
        lastMonth = month
      }
    })
    return marks
  }, [weeks])

  const hasActivity = days.some((d) => d.total > 0)

  if (!days.length) {
    return (
      <p className="py-10 text-center text-xs text-muted-foreground">
        正在加载学习活动数据…
      </p>
    )
  }

  return (
    <div>
      {/* 月份标尺 */}
      <div
        className="relative mb-1.5 h-4 text-[10px] tabular-nums text-muted-foreground/80"
        aria-hidden="true"
      >
        {monthMarks.map((m) => (
          <span
            key={`${m.label}-${m.col}`}
            className="absolute top-0"
            style={{
              left: `calc(${m.col} * (0.75rem + 2px) + 1.875rem)`,
            }}
          >
            {m.label}
          </span>
        ))}
      </div>

      <div className="flex gap-1.5">
        {/* 星期标尺 */}
        <div
          className="grid w-6 shrink-0 grid-rows-7 gap-[2px] pt-px text-[10px] leading-3 text-muted-foreground/70"
          aria-hidden="true"
        >
          {WEEKDAY_LABELS.map((w, i) => (
            <span key={w} className={cn(i % 2 === 1 && 'opacity-0 sm:opacity-100')}>
              {w}
            </span>
          ))}
        </div>

        {/* 格子矩阵（移动端横向滚动） */}
        <div className="bio-scroll min-w-0 flex-1 overflow-x-auto pb-1">
          <div className="grid grid-flow-col grid-rows-7 gap-[2px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="grid grid-rows-7 gap-[2px]">
                {week.map((day, di) =>
                  day === null ? (
                    <span key={`pad-${wi}-${di}`} className="h-3 w-3" />
                  ) : (
                    <button
                      key={day.date}
                      type="button"
                      className={cn(
                        'h-3 w-3 rounded-[3px] outline-none transition-[transform,box-shadow] focus-visible:ring-2 focus-visible:ring-ring',
                        LEVEL_BG[levelOf(day.total)],
                        hovered?.date === day.date
                          ? 'ring-1 ring-primary/60 ring-offset-1 ring-offset-card'
                          : 'hover:ring-1 hover:ring-primary/40 hover:ring-offset-1 hover:ring-offset-card'
                      )}
                      onMouseEnter={() => setHovered(day)}
                      onFocus={() => setHovered(day)}
                      onMouseLeave={() => setHovered(null)}
                      onBlur={() => setHovered(null)}
                      aria-label={`${formatCn(day.date)}：完成小节 ${day.completed}，答题 ${day.quiz}，笔记 ${day.notes}，复习 ${day.reviews}`}
                    />
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 图例 + 当日明细 */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t pt-3">
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-muted-foreground">活动量</span>
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-muted-foreground/70">少</span>
            {([0, 1, 2, 3, 4] as const).map((l) => (
              <span
                key={l}
                className={cn('h-2.5 w-2.5 rounded-[2px]', LEVEL_BG[l])}
                aria-hidden="true"
              />
            ))}
            <span className="text-[10px] text-muted-foreground/70">多</span>
          </div>
        </div>
        <p
          className="text-xs tabular-nums text-muted-foreground"
          aria-live="polite"
        >
          {hovered ? (
            <span>
              <span className="font-medium text-foreground">
                {formatCn(hovered.date)}
              </span>
              {hovered.total === 0 ? (
                <span className="ml-2 text-muted-foreground/70">无学习记录</span>
              ) : (
                <span className="ml-2">
                  完成 {hovered.completed} · 答题 {hovered.quiz} · 笔记{' '}
                  {hovered.notes} · 复习 {hovered.reviews}
                </span>
              )}
            </span>
          ) : hasActivity && summary ? (
            <span>
              连续学习{' '}
              <span className="font-serif font-bold text-primary">
                {summary.streak}
              </span>{' '}
              天 · 活跃 {summary.activeTotal} 天 · 区间最长{' '}
              {summary.maxStreak} 天
            </span>
          ) : (
            <span className="text-muted-foreground/70">
              完成小节、答题或复习后，格子将点亮
            </span>
          )}
        </p>
      </div>
    </div>
  )
}
