# Task 25-p 任务简报：生物物理学 第 9–10 章正文深度扩充

先完整阅读 /home/z/my-project/agent-ctx/expansion-guide.md（通用指南，必须严格执行），再按下述批次参数执行。

## 批次参数
- 学科：生物物理学（subjectId: biophysics）
- 章节：第 9–10 章（共 8 小节，一个都不能少）
- 原文文件：/home/z/my-project/src/data/subjects/biophysics.ts，按章读取的行号区间：
  - ch9: L1162–1306（4 节）
  - ch10: L1307–1432（4 节）
- 测验题文件：/home/z/my-project/src/data/quiz/biophysics.ts（用 rg -n "chapterId: 'biophysics-ch{N}'" 定位你负责章节的题目并逐题核对事实）
- 输出文件：/home/z/my-project/src/data/expansions/biophysics-ch9-10.ts
- 导出名：export const biophysicsCh9To10: Record<string, string> = { ... }
- 校验命令：cd /home/z/my-project && bun run scripts/validate-expansion.ts src/data/expansions/biophysics-ch9-10.ts biophysics 9 10

## 收工
bash cat >> /home/z/my-project/worklog.md 追加记录（Task ID: 25-p），最终汇报按通用指南要求。
