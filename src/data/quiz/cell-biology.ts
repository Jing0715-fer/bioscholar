// ============================================================
// 细胞生物学测验题库（聚合各编写批次）
// 覆盖 12 章，每章 5 题，共 60 题
// ============================================================
import type { QuizQuestion } from '@/lib/types'
import { cellBiologyQuizA1 } from './cell-biology-a1'
import { cellBiologyQuizA2 } from './cell-biology-a2'
import { cellBiologyQuizA3 } from './cell-biology-a3'
import { cellBiologyQuizA4 } from './cell-biology-a4'

export const cellBiologyQuiz: QuizQuestion[] = [
  ...cellBiologyQuizA1,
  ...cellBiologyQuizA2,
  ...cellBiologyQuizA3,
  ...cellBiologyQuizA4,
]
