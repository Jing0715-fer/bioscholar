// ============================================================
// 生物化学测验题库（聚合各编写批次）
// 覆盖 12 章，每章 5 题，共 60 题
// ============================================================
import type { QuizQuestion } from '@/lib/types'
import { biochemistryQuizA1 } from './biochemistry-a1'
import { biochemistryQuizA2 } from './biochemistry-a2'
import { biochemistryQuizA3 } from './biochemistry-a3'
import { biochemistryQuizA4 } from './biochemistry-a4'

export const biochemistryQuiz: QuizQuestion[] = [
  ...biochemistryQuizA1,
  ...biochemistryQuizA2,
  ...biochemistryQuizA3,
  ...biochemistryQuizA4,
]
