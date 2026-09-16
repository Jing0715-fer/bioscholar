# Task 25-l 任务简报：细胞生物学 第 10–12 章正文深度扩充

先完整阅读 /home/z/my-project/agent-ctx/expansion-guide.md（通用指南，必须严格执行），再按下述批次参数执行。

## 批次参数
- 学科：细胞生物学（subjectId: cell-biology）
- 章节：第 10–12 章（共 13 小节，一个都不能少）
- 原文文件：/home/z/my-project/src/data/subjects/cell-biology.ts，按章读取的行号区间：
  - ch10: L1768–1984（5 节）
  - ch11: L1985–2138（4 节）
  - ch12: L2139–2343（4 节）
- 测验题文件：/home/z/my-project/src/data/quiz/cell-biology.ts（用 rg -n "chapterId: 'cell-biology-ch{N}'" 定位你负责章节的题目并逐题核对事实）
- 输出文件：/home/z/my-project/src/data/expansions/cell-biology-ch10-12.ts
- 导出名：export const cellBiologyCh10To12: Record<string, string> = { ... }
- 校验命令：cd /home/z/my-project && bun run scripts/validate-expansion.ts src/data/expansions/cell-biology-ch10-12.ts cell-biology 10 11 12

## 收工
bash cat >> /home/z/my-project/worklog.md 追加记录（Task ID: 25-l），最终汇报按通用指南要求。
