# Task 25-b 任务简报：生物化学 第 4–6 章正文深度扩充

先完整阅读 /home/z/my-project/agent-ctx/expansion-guide.md（通用指南，必须严格执行），再按下述批次参数执行。

## 批次参数
- 学科：生物化学（subjectId: biochemistry）
- 章节：第 4–6 章（共 13 小节，一个都不能少）
- 原文文件：/home/z/my-project/src/data/subjects/biochemistry.ts，按章读取的行号区间：
  - ch4: L522–735（5 节；注意 ch4-s1 已是约 3000 字深度小节，可原样保留或仅轻微润色）
  - ch5: L736–922（5 节）
  - ch6: L923–1054（3 节）
- 测验题文件：/home/z/my-project/src/data/quiz/biochemistry.ts（用 rg -n "chapterId: 'biochemistry-ch{N}'" 定位你负责章节的题目并逐题核对事实）
- 输出文件：/home/z/my-project/src/data/expansions/biochemistry-ch4-6.ts
- 导出名：export const biochemistryCh4To6: Record<string, string> = { ... }
- 校验命令：cd /home/z/my-project && bun run scripts/validate-expansion.ts src/data/expansions/biochemistry-ch4-6.ts biochemistry 4 5 6

## 收工
bash cat >> /home/z/my-project/worklog.md 追加记录（Task ID: 25-b），最终汇报按通用指南要求。
