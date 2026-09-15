// ============================================================
// SM-2 简化版间隔重复算法（SuperMemo-2 adapted）
// 评分四档：0=忘记 1=困难 2=良好 3=简单
// ============================================================

/** 复习评分 */
export type ReviewGrade = 0 | 1 | 2 | 3

/** SM-2 调度参数（可调） */
export const SRS_CONFIG = {
  /** ease 因子边界 */
  minEase: 1.3,
  maxEase: 2.8,
  /** 初始 ease */
  initEase: 2.5,
  /** 新卡首答间隔（天） */
  firstInterval: [1, 1, 1, 3] as const,
  /** 复习巩固最小间隔（天） */
  minInterval: 1,
  /** 掌握阈值（天）——超过视为已掌握 */
  masteredInterval: 21,
}

export interface SrsState {
  ease: number
  intervalDays: number
  reps: number
  lapses: number
}

export interface SrsNext extends SrsState {
  /** 下次到期时间 */
  dueAt: Date
}

/** 单次复习后的状态推演（纯函数，便于测试与服务端共用） */
export function schedule(
  prev: SrsState,
  grade: ReviewGrade,
  now: Date = new Date()
): SrsNext {
  let { ease, intervalDays, reps, lapses } = prev

  if (grade === 0) {
    // 遗忘：重置间隔、记一次 lapse，降低难度
    reps = 0
    lapses += 1
    intervalDays = SRS_CONFIG.minInterval
    ease = clamp(ease - 0.2)
  } else {
    reps += 1
    if (grade === 1) {
      intervalDays =
        reps === 1
          ? SRS_CONFIG.firstInterval[1]
          : Math.max(1, intervalDays * 1.2)
      ease = clamp(ease - 0.15)
    } else if (grade === 2) {
      intervalDays =
        reps === 1 ? SRS_CONFIG.firstInterval[2] : intervalDays * ease
      // ease 不变
    } else {
      intervalDays =
        reps === 1
          ? SRS_CONFIG.firstInterval[3]
          : intervalDays * ease * 1.3
      ease = clamp(ease + 0.15)
    }
    intervalDays = Math.max(SRS_CONFIG.minInterval, Math.round(intervalDays))
  }

  const dueAt = new Date(now)
  dueAt.setDate(dueAt.getDate() + Math.max(0, Math.round(intervalDays)))
  // 遗忘卡当天内再现（10 分钟后），保持当天巩固
  if (grade === 0) dueAt.setMinutes(dueAt.getMinutes() + 10)

  return { ease, intervalDays, reps, lapses, dueAt }
}

function clamp(v: number) {
  return Math.min(SRS_CONFIG.maxEase, Math.max(SRS_CONFIG.minEase, v))
}

/** 判断某张卡是否算"已掌握" */
export function isMastered(s: SrsState) {
  return s.intervalDays >= SRS_CONFIG.masteredInterval
}

/** 四档评分的 UI 语义 */
export const GRADE_META: Record<
  ReviewGrade,
  { label: string; hint: string }
> = {
  0: { label: '忘记', hint: '完全想不起来' },
  1: { label: '困难', hint: '勉强记得/较模糊' },
  2: { label: '良好', hint: '正确回忆，略有迟疑' },
  3: { label: '简单', hint: '秒答，非常清晰' },
}
