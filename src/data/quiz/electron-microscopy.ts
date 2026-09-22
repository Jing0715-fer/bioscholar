// ============================================================
// 电子显微学测验题库（聚合各编写批次）
// 覆盖 12 章，每章 5 题，共 60 题
// ============================================================
import type { QuizQuestion } from '@/lib/types'
import { electronMicroscopyQuizA1 } from './electron-microscopy-a1'
import { electronMicroscopyQuizA2 } from './electron-microscopy-a2'
import { electronMicroscopyQuizA3 } from './electron-microscopy-a3'
import { electronMicroscopyQuizA4 } from './electron-microscopy-a4'

export const electronMicroscopyQuiz: QuizQuestion[] = [
  ...electronMicroscopyQuizA1,
  ...electronMicroscopyQuizA2,
  ...electronMicroscopyQuizA3,
  ...electronMicroscopyQuizA4,
]
