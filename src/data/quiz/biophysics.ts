// ============================================================
// 生物物理学测验题库（聚合各编写批次）
// 覆盖 10 章，每章 5 题，共 50 题
// ============================================================
import type { QuizQuestion } from '@/lib/types'
import { biophysicsQuizA1 } from './biophysics-a1'
import { biophysicsQuizA2 } from './biophysics-a2'
import { biophysicsQuizA3 } from './biophysics-a3'
import { biophysicsQuizA4 } from './biophysics-a4'

export const biophysicsQuiz: QuizQuestion[] = [
  ...biophysicsQuizA1,
  ...biophysicsQuizA2,
  ...biophysicsQuizA3,
  ...biophysicsQuizA4,
]
