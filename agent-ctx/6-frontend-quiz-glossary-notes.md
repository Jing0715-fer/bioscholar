# Task 6 — frontend-quiz-glossary-notes 工作记录

## 任务
构建 BioScholar 三个视图组件：测验中心（quiz-view）、术语词典（glossary-view）、学习笔记（notes-view）。

## 产出文件
- `src/components/bio/quiz-view.tsx`（重写，~700 行）
- `src/components/bio/glossary-view.tsx`（重写，~300 行）
- `src/components/bio/notes-view.tsx`（重写，~480 行）
- `src/app/layout.tsx`（追加 sonner `<Toaster position="top-center" richColors closeButton />`，使 `import { toast } from 'sonner'` 生效；原 radix Toaster 保留）

## 关键实现决策（供后续 agent 参考）
- **学科色静态类映射**：Tailwind 4 无法扫描模板字符串拼接的类名，所有学科色均使用静态 Record<SubjectId, string> 映射：
  - `SUBJECT_TAB_ACTIVE`（Tabs 激活态覆盖默认 `data-[state=active]:bg-background`，含 dark 变体防串色）
  - `SUBJECT_BUTTON`（主 CTA，覆盖默认 hover:bg-primary/90 防止 hover 变主色）
  - `SUBJECT_LEFT_BORDER`（glossary 卡片 border-l-4 学科色条）
- **quiz 状态机**：phase: select → quiz → result；mode: chapter | random；answers/pending/records 本地缓存，交卷（最后一题"查看成绩"）时批量 POST /api/quiz/attempts，成功后刷新 GET 统计。随机挑战按难度分层抽题（3/5/2 配额，不足从余量补齐）。
- **page.tsx 的 key 机制**：外层 `key={view.name + JSON.stringify(view)}`，切换学科会 remount QuizView，天然重置答题状态（符合"刷新不保留进行中状态"要求）。
- **多选判分**：answer 为 number[]，排序后逐位比较；单选/判断 answer 为 number。
- **notes 类型收窄**：后端 subjectId 为 string | null，用 `isSubjectId()` type guard + 局部 `sid` 变量收窄（TS 无法通过布尔变量关联收窄 note.subjectId）。
- **notes 关联跳转**：sectionId 反查章节（resolveSection），笔记卡片可一键 openReader 跳回知识点阅读页。
- **relative time**：date-fns v4 `formatDistanceToNow(date, { addSuffix: true, locale: zhCN })`。
- RadioGroup 必须恒为受控（value='' 而非 undefined），否则 uncontrolled→controlled 告警（已修复）。

## 验证结果
- `bunx tsc --noEmit`：0 错误
- `bun run lint`：0 错误 0 警告
- agent-browser 端到端实测：
  - quiz：章节练习全流程（多选确认→判分解析→单选→判断→成绩环 80%→toast 提交 5 条→回顾列表 5 项→统计头部更新 已答5/80%→再来一轮→退出）
  - glossary：100 词条渲染、搜索 "ATP"→2 条、学科筛选 cell-biology→26 条、按类别分组→12 类、空态、清空按钮
  - notes：空态→新建（toast 已创建）→搜索过滤→编辑（toast 已更新）→AlertDialog 删除（toast 已删除）→回到空态
  - 测试数据已清理（attempts/notes 均为空）
- API 冒烟：POST/GET/DELETE /api/notes、POST/GET /api/quiz/attempts 全部符合前端 payload 契约
