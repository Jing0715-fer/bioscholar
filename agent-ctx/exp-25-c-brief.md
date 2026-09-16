# Task 25-c 任务简报：生物化学 第 7–9 章正文深度扩充

先完整阅读 /home/z/my-project/agent-ctx/expansion-guide.md（通用指南，必须严格执行），再按下述批次参数执行。

## 批次参数
- 学科：生物化学（subjectId: biochemistry）
- 章节：第 7–9 章（共 14 小节，一个都不能少）
- 原文文件：/home/z/my-project/src/data/subjects/biochemistry.ts，按章读取的行号区间：
  - ch7: L1055–1214（4 节）
  - ch8: L1215–1431（5 节）
  - ch9: L1432–1650（5 节）
- 测验题文件：/home/z/my-project/src/data/quiz/biochemistry.ts（用 rg -n "chapterId: 'biochemistry-ch{N}'" 定位你负责章节的题目并逐题核对事实）
- 输出文件：/home/z/my-project/src/data/expansions/biochemistry-ch7-9.ts
- 导出名：export const biochemistryCh7To9: Record<string, string> = { ... }
- 校验命令：cd /home/z/my-project && bun run scripts/validate-expansion.ts src/data/expansions/biochemistry-ch7-9.ts biochemistry 7 8 9

## 收工
bash cat >> /home/z/my-project/worklog.md 追加记录（Task ID: 25-c），最终汇报按通用指南要求。
