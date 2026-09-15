# BioScholar 生命科学智能学习平台 - 工作日志

## 项目概述
基于教育部"101计划"生物学核心课程教材体系（生物化学、分子生物学、细胞生物学、生物物理学）构建的专业生物学学习应用，附带 AI 智能助教。

技术栈：Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + shadcn/ui + Prisma (SQLite) + Zustand + z-ai-web-dev-sdk (LLM)

## 核心功能规划
1. 仪表盘：学习概览、进度统计、继续学习
2. 学科中心：四大基础学科（含章节知识点体系）
3. 知识点阅读器：Markdown 渲染、要点、术语关联
4. AI 智能助教：LLM 流式聊天、生物学专家人设、上下文感知
5. 测验系统：每章自测题、答题记录、成绩统计
6. 术语词典：跨学科专业术语检索
7. 学习笔记：知识点笔记、持久化存储
8. 学习进度追踪：小节完成状态、进度百分比
9. 全局搜索：⌘K 命令面板式搜索

## 数据规范
- 学科内容文件：src/data/subjects/{subjectId}.ts，导出符合 Subject 类型的数据
- 测验题文件：src/data/quiz/{subjectId}.ts，导出 QuizQuestion[]
- 术语词典：src/data/glossary.ts，导出 GlossaryTerm[]
- 类型定义：src/lib/types.ts（所有 subagent 必须遵循）
- 学科 ID 规范：biochemistry / molecular-biology / cell-biology / biophysics

---
Task ID: 1
Agent: 主控 (Z.ai Code)
Task: 搭建基础架构

Work Log:
- 进行中：类型定义、Prisma schema、状态管理、worklog 初始化

Stage Summary:
- （待补充）

---
Task ID: 2-a
Agent: content-biochemistry
Task: 编写生物化学学科教材内容与测验题

Work Log:
- 编写 src/data/subjects/biochemistry.ts（12 章 53 小节，正文约 6 万字 Markdown，含 Unicode 化学式、Markdown 数据表格、经典数值核算）
- 编写 src/data/quiz/biochemistry.ts（60 题：single 46 / truefalse 11 / multiple 3；难度 1=15、2=34、3=11）
- 章节结构：ch1 糖类化学(4节) ch2 脂质与生物膜(4节) ch3 氨基酸与蛋白质一级结构(4节) ch4 蛋白质三维结构与功能(5节) ch5 酶学(5节) ch6 维生素与辅酶(3节) ch7 核酸化学(4节) ch8 生物能学与生物氧化(5节) ch9 糖代谢(5节) ch10 脂质代谢(5节) ch11 氨基酸与核苷酸代谢(5节) ch12 物质代谢的整合与调节(4节)
- 修复内容审校问题：tRNA 稀有碱基表述、糖异生激素调节方向、α-酮酸汇入点计数、心肌代谢表述、能量表格数值
- 验证：bun 结构化校验（章节 id/小节 id/keyPoints 3-6 条/terms 3-8 个/题目答案越界）全部通过；bunx tsc -p tsconfig.json 中 biochemistry 文件 0 错误

Stage Summary:
- 章节数：12；小节数：53；测验题数：60（每章 5 题）
- 关键教材数据已核对：糖酵解净得 2 ATP、葡萄糖彻底氧化 30/32 ATP、棕榈酸 β 氧化净产 106 ATP、尿素循环耗 3 ATP、P/O 比 2.5/1.5、ATP 水解 ΔG°′=−30.5 kJ/mol、TCA 一轮 3NADH+1FADH₂+1GTP、脂肪酸合成 8 乙酰CoA+7ATP+14NADPH
- 文件：src/data/subjects/biochemistry.ts（导出 biochemistry: Subject）、src/data/quiz/biochemistry.ts（导出 biochemistryQuiz: QuizQuestion[]）
- 已被 src/data/biology.ts 的汇总导出引用，类型与 types.ts 完全匹配

---
Task ID: 2-c2
Agent: quiz-cell-biology
Task: 补写细胞生物学测验题

Work Log:
- 编写 src/data/quiz/cell-biology.ts（60 题，覆盖 12 章）
- 每章 5 题（cell-biology-ch1 至 cell-biology-ch12），id 为 q-cell-biology-01 至 q-cell-biology-60，与 biology.ts 已有的 import { cellBiologyQuiz } 对接
- 题目依据 cell-biology.ts 各节 keyPoints 出题（如 ch12 考 Caspase、死亡受体/线粒体途径、Bcl-2 家族、自噬、坏死性凋亡/焦亡/铁死亡）
- 验证：tsc 无 cell-biology 相关错误；脚本校验通过（id 唯一且连续、chapterId 与教材一致、answer 索引均在 options 范围内）

Stage Summary:
- 总题数 60
- 题型分布：single 45 题（75%）、truefalse 12 题（20%，options 固定 ['正确','错误']）、multiple 3 题（5%，answer 为数组）
- 难度分布：难度 1 共 15 题、难度 2 共 35 题、难度 3 共 10 题
- 每题均含 2-4 句解析，说明正确项依据与错误项错因
