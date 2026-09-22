# Task 25-q 任务简报：修复 molecular-biology-ch4-6.ts 中第 6 章的 4 个未达标小节

你是 BioScholar 的内容修复代理。项目根目录 /home/z/my-project。

## 背景
src/data/expansions/molecular-biology-ch4-6.ts（导出 molecularBiologyCh4To6: Record<string, string>）中第 6 章（遗传密码与蛋白质合成，5 节）有 4 节被并行进程的残留覆写，当前字数低于教材级下限：
- molecular-biology-ch6-s1「遗传密码的破译」：当前约 1875 字符 → 需 ≥2600
- molecular-biology-ch6-s2「密码子特性」：当前约 1966 → 需 ≥2600
- molecular-biology-ch6-s3「tRNA 结构与氨酰-tRNA 合成酶」：当前约 2124 → 需 ≥2600
- molecular-biology-ch6-s5「蛋白质靶向转运与抗生素靶点」：当前约 2013 → 需 ≥2600
（ch6-s4 约 2720 已达标，不要动它；ch4/ch5 各节也不要动。）

## 任务
1. 读 /home/z/my-project/agent-ctx/expansion-guide.md 通用指南（质量标准与格式红线）。
2. 读 src/data/subjects/molecular-biology.ts 第 965–1187 行（ch6 原文 5 节）。
3. 读 src/data/quiz/molecular-biology.ts 中 chapterId 为 molecular-biology-ch6 的 5 道题（rg -n "molecular-biology-ch6" 定位），扩写后考点必须仍然成立。
4. 用 Edit 工具**只修改** src/data/expansions/molecular-biology-ch4-6.ts 中上述 4 节的字符串值（超集式扩写到 2600–3600 字符；保留现有全部知识点、H2 主题与表格，在其上扩充机理细节/定量数据/经典实验/易混淆对比）。
5. 校验：cd /home/z/my-project && bun run scripts/validate-expansion.ts src/data/expansions/molecular-biology-ch4-6.ts molecular-biology 4 5 6 → 必须输出「✓ 15 节全部通过」。
6. bunx tsc -p tsconfig.json --noEmit 过滤本文件零错误。
7. bash cat >> 追加 worklog.md 记录（Task ID: 25-q、Agent: content-repair-mb-ch6、Task: 修复分生 ch6 四节残留覆写）。
8. 汇报：4 节修复前后字数对照 + 校验输出。
