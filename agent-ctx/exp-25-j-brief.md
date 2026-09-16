# Task 25-j 任务简报：细胞生物学 第 4–6 章正文深度扩充

先完整阅读 /home/z/my-project/agent-ctx/expansion-guide.md（通用指南，必须严格执行），再按下述批次参数执行。

## 批次参数
- 学科：细胞生物学（subjectId: cell-biology）
- 章节：第 4–6 章（共 13 小节，一个都不能少）
- 原文文件：/home/z/my-project/src/data/subjects/cell-biology.ts，按章读取的行号区间：
  - ch4: L600–773（4 节）
  - ch5: L774–942（4 节）
  - ch6: L943–1175（5 节）
- 测验题文件：/home/z/my-project/src/data/quiz/cell-biology.ts（用 rg -n "chapterId: 'cell-biology-ch{N}'" 定位你负责章节的题目并逐题核对事实）
- 输出文件：/home/z/my-project/src/data/expansions/cell-biology-ch4-6.ts
- 导出名：export const cellBiologyCh4To6: Record<string, string> = { ... }
- 校验命令：cd /home/z/my-project && bun run scripts/validate-expansion.ts src/data/expansions/cell-biology-ch4-6.ts cell-biology 4 5 6

## 收工
bash cat >> /home/z/my-project/worklog.md 追加记录（Task ID: 25-j），最终汇报按通用指南要求。
