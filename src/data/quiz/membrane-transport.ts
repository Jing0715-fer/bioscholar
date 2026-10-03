// ============================================================
// BioScholar 膜蛋白与物质转运测验题库 - 总聚合
// 7 个批次共 70 题（q-membrane-transport-1 ~ q-membrane-transport-70）：
// 内容代理 46-b1~b6 并行编写 60 题（每章 5 题）＋主控 47-c3 补第 13 章 10 题
// 题型：single 45 / truefalse 14 / multiple 11；难度 1:2:3 ≈ 14:36:20
// 依据：Stein & Litton 第2版 · Alberts 第7版 · Taiz 第6版 ·
// Guyton & Hall 第14版 · Nicholls & Ferguson 第4版及本学科第 1–13 章教材正文
// ============================================================

import type { QuizQuestion } from '@/lib/types'
import { membraneTransportQuizP1 } from './membrane-transport-p1'
import { membraneTransportQuizP2 } from './membrane-transport-p2'
import { membraneTransportQuizP3 } from './membrane-transport-p3'
import { membraneTransportQuizP4 } from './membrane-transport-p4'
import { membraneTransportQuizP5 } from './membrane-transport-p5'
import { membraneTransportQuizP6 } from './membrane-transport-p6'
import { membraneTransportQuizP7 } from './membrane-transport-p7'

export const membraneTransportQuiz: QuizQuestion[] = [
  ...membraneTransportQuizP1,
  ...membraneTransportQuizP2,
  ...membraneTransportQuizP3,
  ...membraneTransportQuizP4,
  ...membraneTransportQuizP5,
  ...membraneTransportQuizP6,
  ...membraneTransportQuizP7,
]
