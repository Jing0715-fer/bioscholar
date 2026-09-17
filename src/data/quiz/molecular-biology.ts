// ============================================================
// 分子生物学测验题库（聚合各编写批次）
// 覆盖 12 章，每章 5 题，共 60 题
// ============================================================
import type { QuizQuestion } from '@/lib/types'
import { molecularBiologyQuizA1 } from './molecular-biology-a1'
import { molecularBiologyQuizA2 } from './molecular-biology-a2'
import { molecularBiologyQuizA3 } from './molecular-biology-a3'
import { molecularBiologyQuizA4 } from './molecular-biology-a4'

export const molecularBiologyQuiz: QuizQuestion[] = [
  ...molecularBiologyQuizA1,
  ...molecularBiologyQuizA2,
  ...molecularBiologyQuizA3,
  ...molecularBiologyQuizA4,
]
