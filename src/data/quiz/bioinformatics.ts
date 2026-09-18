// ============================================================
// 生物信息学测验题库（聚合各编写批次）
// 覆盖 12 章，每章 5 题，共 60 题
// ============================================================
import type { QuizQuestion } from '@/lib/types'
import { bioinformaticsQuizB6 } from './bioinformatics-b6'
import { bioinformaticsQuizB5 } from './bioinformatics-b5'
import { bioinformaticsQuizB2 } from './bioinformatics-b2'
import { bioinformaticsQuizB3 } from './bioinformatics-b3'
import { bioinformaticsQuizB4 } from './bioinformatics-b4'

export const bioinformaticsQuiz: QuizQuestion[] = [
  ...bioinformaticsQuizB6,
  ...bioinformaticsQuizB5,
  ...bioinformaticsQuizB2,
  ...bioinformaticsQuizB3,
  ...bioinformaticsQuizB4,
]
