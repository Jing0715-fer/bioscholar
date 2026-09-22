// ============================================================
// 结构生物学实验方法测验题库（聚合各编写批次）
// 覆盖 12 章，每章 5 题，共 60 题
// ============================================================
import type { QuizQuestion } from '@/lib/types'
import { structuralBiologyQuizA1 } from './structural-biology-a1'
import { structuralBiologyQuizA2 } from './structural-biology-a2'
import { structuralBiologyQuizA3 } from './structural-biology-a3'
import { structuralBiologyQuizA4 } from './structural-biology-a4'

export const structuralBiologyQuiz: QuizQuestion[] = [
  ...structuralBiologyQuizA1,
  ...structuralBiologyQuizA2,
  ...structuralBiologyQuizA3,
  ...structuralBiologyQuizA4,
]
