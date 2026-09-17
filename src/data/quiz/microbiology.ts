// ============================================================
// 微生物学测验题库（聚合各编写批次）
// 覆盖 12 章，每章 5 题，共 60 题
// ============================================================
import type { QuizQuestion } from '@/lib/types'
import { microbiologyQuizA1 } from './microbiology-a1'
import { microbiologyQuizA2 } from './microbiology-a2'
import { microbiologyQuizA3 } from './microbiology-a3'
import { microbiologyQuizA4 } from './microbiology-a4'

export const microbiologyQuiz: QuizQuestion[] = [
  ...microbiologyQuizA1,
  ...microbiologyQuizA2,
  ...microbiologyQuizA3,
  ...microbiologyQuizA4,
]
