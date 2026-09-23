'use client'

import { useMemo, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

/** 单日活动计数（与 /api/activity 返回一致） */
export interface ActivityDay {
  date: string
  completed: number
  quiz: number
  notes: number
  reviews: number
  total: number
  /** 当日答对题数（/api/report 聚合，热力图渲染不使用） */
  correct?: number
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
 *
 * 结构要点：
 * - 扁平单层 grid（grid-auto-flow: column × 7 行）：子项按列填充，
 *   每列即一周，彻底避免「嵌套周块被拉伸」的渲染缺陷
 * - 格子尺寸走 CSS 自定义属性 --cell / --gap，移动端 10px、
 *   sm 13px、lg 14px，卡片内永不横向溢出（18 周 ≈ 216–315px）
 * - 月份标尺与格子列共用同一列模板（同容器内渲染），保证像素级对齐
 * - 展开态用 grid-template-rows 0fr→1fr 平滑过渡
 * - hover / focus / 点选 单格 → 底部明细行更新（避免 tooltip 溢出）
 */
export function ActivityHeatmap({
  days,
  summary,
  defaultCollapsed = false,
}: {
  days: ActivityDay[]
  summary: ActivitySummary | null
  /** 初始是否折叠（仪表盘传 true 压缩版面；学习报告默认展开） */
  defaultCollapsed?: boolean
}) {
  const [hovered, setHovered] = useState<ActivityDay | null>(null)
  const [collapsed, setCollapsed] = useState(defaultCollapsed)
  /** 今日日期串：数据区间末位即今日（与 /api/activity 口径一致，避免 SSR 水合不一致） */
  const todayStr = days.length ? days[days.length - 1].date : null

  /** 布局：周列 × 7 行（第一天偏移补位到周一） */
  const weeks = useMemo(() => {
    if (!days.length) return [] as Array<Array<ActivityDay | null>>
    // getDay: 周日=0 → 周一体系 (d+6)%7
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

  /** 月份标签：每周第一格若跨新月则标注（col → label） */
  const monthByCol = useMemo(() => {
    const map = new Map<number, string>()
    let lastMonth = -1
    weeks.forEach((week, col) => {
      const firstReal = week.find((d): d is ActivityDay => d !== null)
      if (!firstReal) return
      const month = Number(firstReal.date.slice(5, 7))
      if (month !== lastMonth) {
        map.set(col, `${month}月`)
        lastMonth = month
      }
    })
    return map
  }, [weeks])

  const hasActivity = days.some((d) => d.total > 0)
  const totalActivities = useMemo(
    () => days.reduce((a, d) => a + d.total, 0),
    [days]
  )

  /** 折叠态迷你条：每周活动量合计（单行火花条，高 4–22px） */
  const weeklyTotals = useMemo(
    () => weeks.map((week) => week.reduce((a, d) => a + (d?.total ?? 0), 0)),
    [weeks]
  )
  const weeklyMax = Math.max(1, ...weeklyTotals)

  if (!days.length) {
    return (
      <p className="py-10 text-center text-xs text-muted-foreground">
        正在加载学习活动数据…
      </p>
    )
  }

  const weekCount = weeks.length
  /** grid 行/列模板（与月份标尺、星期标尺共用，保证三轴对齐） */
  const rowsTemplate = 'repeat(7, var(--cell))'
  const colsTemplate = `repeat(${weekCount}, var(--cell))`

  return (
    <div className="[--cell:10px] [--gap:2px] sm:[--cell:13px] sm:[--gap:3px] lg:[--cell:14px]">
      {/* ---------- 摘要行 + 展开开关（常驻） ---------- */}
      <button
        type="button"
        onClick={() => {
          const next = !collapsed
          if (next) setHovered(null) // 收起时清除选中格
          setCollapsed(next)
        }}
        aria-expanded={!collapsed}
        aria-label={collapsed ? '展开学习热力图完整日历' : '收起学习热力图，仅保留摘要行'}
        className="group flex w-full flex-wrap items-center gap-x-4 gap-y-2 rounded-lg px-1 py-1 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring hover:bg-accent/40"
      >
        <span className="text-xs tabular-nums text-muted-foreground">
          {hasActivity ? (
            <>
              近 {weekCount} 周 · 活跃{' '}
              <span className="font-serif text-sm font-bold text-primary">
                {summary?.activeTotal ?? 0}
              </span>{' '}
              天 · 累计 {totalActivities} 次学习活动
            </>
          ) : (
            <span className="text-muted-foreground/70">
              完成小节、答题或复习后，格子将点亮
            </span>
          )}
        </span>
        {collapsed && (
          <span className="flex items-end gap-[2px]" aria-hidden="true">
            {weeklyTotals.map((t, i) => {
              const h = t > 0 ? 4 + Math.round((t / weeklyMax) * 18) : 3
              const lv = levelOf(t)
              return (
                <span
                  key={i}
                  className={cn(
                    'w-[5px] rounded-[1px]',
                    lv === 0 ? 'bg-muted' : LEVEL_BG[lv]
                  )}
                  style={{ height: `${h}px` }}
                />
              )
            })}
          </span>
        )}
        <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-medium text-primary group-hover:underline">
          {collapsed ? '展开日历' : '收起日历'}
          {collapsed ? (
            <ChevronDown className="h-3.5 w-3.5" aria-hidden />
          ) : (
            <ChevronUp className="h-3.5 w-3.5" aria-hidden />
          )}
        </span>
      </button>

      {/* ---------- 展开面板（0fr↔1fr 平滑过渡） ---------- */}
      <div
        className={cn(
          'grid transition-[grid-template-rows,opacity,visibility] duration-300 ease-in-out',
          collapsed ? 'invisible' : 'visible'
        )}
        style={{ gridTemplateRows: collapsed ? '0fr' : '1fr', opacity: collapsed ? 0 : 1 }}
        aria-hidden={collapsed}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="pt-1.5">
            {/* 单一横向滚动容器：月份标尺 + 星期标尺 + 格子矩阵同轴对齐 */}
            <div className="bio-scroll overflow-x-auto pb-1">
              <div className="w-max">
                {/* 月份标尺：与格子列共用列模板 → 像素级对齐 */}
                <div
                  className="mb-1.5 flex gap-1.5"
                  aria-hidden="true"
                >
                  <div className="w-6 shrink-0" />
                  <div
                    className="grid h-4 text-[10px] tabular-nums text-muted-foreground"
                    style={{
                      gridTemplateColumns: colsTemplate,
                      gap: 'var(--gap)',
                    }}
                  >
                    {weeks.map((_, i) => (
                      <span
                        key={i}
                        className="flex items-end whitespace-nowrap leading-none"
                      >
                        {monthByCol.get(i) ?? ''}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 星期标尺 + 格子矩阵（行模板一致 → 行行对齐） */}
                <div className="flex gap-1.5">
                  <div
                    className="grid w-6 shrink-0 text-[10px] leading-none text-muted-foreground/80"
                    style={{ gridTemplateRows: rowsTemplate, gap: 'var(--gap)' }}
                    aria-hidden="true"
                  >
                    {WEEKDAY_LABELS.map((w, i) => (
                      <span
                        key={w}
                        className={cn(
                          'flex items-center justify-end pr-0.5',
                          i % 2 === 1 && 'opacity-0 sm:opacity-100'
                        )}
                      >
                        {w}
                      </span>
                    ))}
                  </div>

                  {/* 扁平格子矩阵：列流填充，每列即一周 */}
                  <div
                    className="grid"
                    style={{
                      gridAutoFlow: 'column',
                      gridTemplateRows: rowsTemplate,
                      gridAutoColumns: 'var(--cell)',
                      gap: 'var(--gap)',
                    }}
                  >
                    {weeks.flatMap((week, wi) =>
                      week.map((day, di) =>
                        day === null ? (
                          <span key={`pad-${wi}-${di}`} aria-hidden="true" />
                        ) : (
                          <button
                            key={day.date}
                            type="button"
                            className={cn(
                              'relative rounded-[3px] outline-none transition-colors duration-150',
                              LEVEL_BG[levelOf(day.total)],
                              hovered?.date === day.date
                                ? 'z-10 ring-2 ring-primary'
                                : 'hover:z-10 hover:ring-2 hover:ring-primary/60',
                              day.date === todayStr && hovered?.date !== day.date
                                ? 'ring-1 ring-ring/70'
                                : false
                            )}
                            onMouseEnter={() => setHovered(day)}
                            onFocus={() => setHovered(day)}
                            onBlur={() => setHovered(null)}
                            onClick={() => setHovered(day)}
                            aria-label={`${formatCn(day.date)}：完成小节 ${day.completed}，答题 ${day.quiz}，笔记 ${day.notes}，复习 ${day.reviews}`}
                          />
                        )
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 底部：图例 + 当日明细 */}
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 border-t pt-2.5">
              <div className="flex shrink-0 items-center gap-1.5">
                <span className="text-[10px] text-muted-foreground/70">少</span>
                {([0, 1, 2, 3, 4] as const).map((l) => (
                  <span
                    key={l}
                    className={cn('h-2.5 w-2.5 rounded-[3px]', LEVEL_BG[l])}
                    aria-hidden="true"
                  />
                ))}
                <span className="text-[10px] text-muted-foreground/70">多</span>
              </div>
              <p
                className="min-w-0 flex-1 truncate text-xs tabular-nums text-muted-foreground"
                aria-live="polite"
              >
                {hovered ? (
                  <span>
                    <span className="font-medium text-foreground">
                      {formatCn(hovered.date)}
                    </span>
                    {hovered.date === todayStr && (
                      <span className="ml-1.5 rounded-sm bg-primary/10 px-1 py-px text-[10px] font-medium text-primary">
                        今天
                      </span>
                    )}
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
                    天 · 区间最长 {summary.maxStreak} 天 · 今日{' '}
                    {summary.todayTotal} 项
                  </span>
                ) : (
                  <span className="text-muted-foreground/70">
                    完成小节、答题或复习后，格子将点亮
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
