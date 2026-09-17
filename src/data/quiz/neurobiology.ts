// ============================================================
// 神经生物学测验题库（聚合各编写批次）
// 覆盖 12 章，每章 5 题，共 60 题
// ============================================================
import type { QuizQuestion } from '@/lib/types'
import { neurobiologyQuizC1 } from './neurobiology-c1'
import { neurobiologyQuizC2 } from './neurobiology-c2'
import { neurobiologyQuizC3 } from './neurobiology-c3'
import { neurobiologyQuizC4 } from './neurobiology-c4'

export const neurobiologyQuiz: QuizQuestion[] = [
  ...neurobiologyQuizC4.filter((q) => parseInt(q.id.split('-').pop() ?? '0', 10) <= 15),
  ...neurobiologyQuizC1,
  ...neurobiologyQuizC4.filter((q) => parseInt(q.id.split('-').pop() ?? '0', 10) >= 31 && parseInt(q.id.split('-').pop() ?? '0', 10) <= 40),
  ...neurobiologyQuizC2,
  ...neurobiologyQuizC3,
]
