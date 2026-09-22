// ============================================================
// X射线晶体学测验题库（聚合各编写批次）
// 覆盖 12 章，每章 5 题，共 60 题
// ============================================================
import type { QuizQuestion } from '@/lib/types'
import { xrayCrystallographyQuizA1 } from './x-ray-crystallography-a1'
import { xrayCrystallographyQuizA2 } from './x-ray-crystallography-a2'
import { xrayCrystallographyQuizA3 } from './x-ray-crystallography-a3'
import { xrayCrystallographyQuizA4 } from './x-ray-crystallography-a4'

export const xrayCrystallographyQuiz: QuizQuestion[] = [
  ...xrayCrystallographyQuizA1,
  ...xrayCrystallographyQuizA2,
  ...xrayCrystallographyQuizA3,
  ...xrayCrystallographyQuizA4,
]
