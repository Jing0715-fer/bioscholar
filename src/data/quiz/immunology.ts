// ============================================================
// 免疫学测验题库（聚合各编写批次）
// 覆盖 12 章，每章 5 题，共 60 题
// ============================================================
import type { QuizQuestion } from '@/lib/types'
import { immunologyQuizA1 } from './immunology-a1'
import { immunologyQuizA2 } from './immunology-a2'
import { immunologyQuizA3 } from './immunology-a3'
import { immunologyQuizA4 } from './immunology-a4'
import { immunologyQuizA5 } from './immunology-a5'

export const immunologyQuiz: QuizQuestion[] = [
  ...immunologyQuizA1,
  ...immunologyQuizA2,
  ...immunologyQuizA3,
  ...immunologyQuizA4,
  ...immunologyQuizA5,
]
