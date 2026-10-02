// ============================================================
// BioScholar 膜蛋白与物质转运测验题库 - 总聚合
// 6 个批次共 60 题（q-membrane-transport-1 ~ q-membrane-transport-60），
// 由内容代理 46-b1~b6 并行编写（每章 5 题）
// 题型：single 39 / truefalse 12 / multiple 9；难度 1:2:3 = 12:30:18
// 依据：Stein & Litton 第2版 · Alberts 第7版 · Taiz 第6版 ·
// Guyton & Hall 第14版及本学科第 1–12 章教材正文
// ============================================================

import type { QuizQuestion } from '@/lib/types'
import { membraneTransportQuizP1 } from './membrane-transport-p1'
import { membraneTransportQuizP2 } from './membrane-transport-p2'
import { membraneTransportQuizP3 } from './membrane-transport-p3'
import { membraneTransportQuizP4 } from './membrane-transport-p4'
import { membraneTransportQuizP5 } from './membrane-transport-p5'
import { membraneTransportQuizP6 } from './membrane-transport-p6'

export const membraneTransportQuiz: QuizQuestion[] = [
  ...membraneTransportQuizP1,
  ...membraneTransportQuizP2,
  ...membraneTransportQuizP3,
  ...membraneTransportQuizP4,
  ...membraneTransportQuizP5,
  ...membraneTransportQuizP6,
]
