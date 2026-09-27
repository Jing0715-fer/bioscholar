// ============================================================
// 生理学测验题库（聚合各编写批次）
// 覆盖 12 章，每章 5 题，共 60 题
// ============================================================
import type { QuizQuestion } from '@/lib/types'
import { physiologyQuizP1 } from './physiology-p1'
import { physiologyQuizP2 } from './physiology-p2'
import { physiologyQuizP3 } from './physiology-p3'
import { physiologyQuizP4 } from './physiology-p4'
import { physiologyQuizP5 } from './physiology-p5'
import { physiologyQuizP6 } from './physiology-p6'

export const physiologyQuiz: QuizQuestion[] = [
  ...physiologyQuizP1,
  ...physiologyQuizP2,
  ...physiologyQuizP3,
  ...physiologyQuizP4,
  ...physiologyQuizP5,
  ...physiologyQuizP6,
]
