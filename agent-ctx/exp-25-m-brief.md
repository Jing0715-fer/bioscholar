# Task 25-m 任务简报：生物物理学 第 1–3 章正文深度扩充

先完整阅读 /home/z/my-project/agent-ctx/expansion-guide.md（通用指南，必须严格执行），再按下述批次参数执行。

## 批次参数
- 学科：生物物理学（subjectId: biophysics）
- 章节：第 1–3 章（共 12 小节，一个都不能少）
- 原文文件：/home/z/my-project/src/data/subjects/biophysics.ts，按章读取的行号区间：
  - ch1: L23–184（4 节）
  - ch2: L185–324（4 节）
  - ch3: L325–473（4 节）
- 测验题文件：/home/z/my-project/src/data/quiz/biophysics.ts（用 rg -n "chapterId: 'biophysics-ch{N}'" 定位你负责章节的题目并逐题核对事实）
- 输出文件：/home/z/my-project/src/data/expansions/biophysics-ch1-3.ts
- 导出名：export const biophysicsCh1To3: Record<string, string> = { ... }
- 校验命令：cd /home/z/my-project && bun run scripts/validate-expansion.ts src/data/expansions/biophysics-ch1-3.ts biophysics 1 2 3

## 收工
bash cat >> /home/z/my-project/worklog.md 追加记录（Task ID: 25-m），最终汇报按通用指南要求。
