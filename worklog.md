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

---
Task ID: 4
Agent: frontend-reader
Task: 构建知识点阅读器视图

Work Log:
- 重写 src/components/bio/reader-view.tsx（约 860 行），实现完整三栏式知识点阅读器
- 布局：lg 以上三栏（260px 章节目录树 + 弹性主栏 + 280px 要点/术语栏），以下单栏；移动端目录收进左侧 Sheet 抽屉（含学科头/进度条/目录树），要点/术语/操作卡移至正文下方
- 左栏/抽屉共用 ChapterTree 组件：当前章节默认展开（chapterId 变化自动跟随），当前小节高亮（学科色左边框 + bgSoft + 学科文字色），已完成小节显示绿色 CheckCircle2，章节行显示 done/total 进度数字，全部完成时章号替换为对勾；点击小节调用 openReader
- 主栏：桌面面包屑（学科中心/学科名可点击返回 + 章节路径）、本书阅读进度条卡（doneCount/totalSections + Progress）、学科渐变横幅（bio-dna-bg 装饰 + 小节标题 + 章节摘要 + 已学习/时长/要点/术语徽章）、max-w-3xl Markdown 正文卡（bio-md 排版）、章末测验入口卡（getQuizByChapter>0 时显示，navigate quiz）、上一节/下一节导航卡
- 上一节/下一节：computeNeighbors 处理跨章边界（章末→下一章第一节，章首→上一章最后节），跨章时显示"下一章/上一章"Badge；第一节无上一节、最后一节无下一节（bun 脚本对四学科真实数据边界校验通过）
- 右栏 SectionAside（桌面右栏 + 移动端下方共用）：本节要点卡（编号列表 + 学科色）、相关术语卡（术语 chip 点击 navigate glossary）、学习操作卡（标记为已学/取消已学 toggleSectionComplete，pending 时 Loader2 旋转、完成后显示"已完成本节学习"绿色提示；向 AI 助教提问本节按钮 setAssistantContext + navigate assistant，带 Tooltip）
- 细节：学科配色全部取自 getSubjectTheme（gradient/bg/bgSoft/text/border/badge/hover）；切节自动回页顶；无效 id 兜底"未找到该知识点"页；自定义滚动用 bio-scroll；无障碍（nav/aria-label/aria-current/aria-expanded/focus-visible ring/sr-only 语义）；严格 TypeScript 无 any；未引入新依赖
- 验证：bunx tsc --noEmit 全项目 0 错误；bun run lint 0 错误 0 警告；dev server 编译通过 GET / 200

Stage Summary:
- 实现功能：三栏阅读布局（桌面）/单栏+目录抽屉（移动）、章节目录树（当前节高亮/已完成绿勾/跨章点击跳转）、本书进度条、学科渐变横幅、Markdown 正文渲染、本节要点卡、相关术语卡（跳转词典）、标记已学/取消已学（乐观更新+pending 态）、AI 助教上下文跳转、章末测验入口、上一节/下一节跨章导航、无效内容兜底页

---
Task ID: 5
Agent: frontend-assistant
Task: 构建 AI 智能助教聊天视图

Work Log:
- 重写 src/components/bio/assistant-view.tsx（约 900 行）：SSE 流式聊天 / 历史加载 / 上下文展示 / 快捷提问 / 学科聚焦 / 清空会话
- 会话管理：localStorage 'bioscholar-chat-session' 持久化 UUID（crypto.randomUUID + 降级）；挂载 GET /api/chat 加载历史；AlertDialog 确认后 DELETE 清空并重置
- 流式渲染：fetch POST + ReadableStream.getReader() + TextDecoder 逐行解析 `data:` SSE 事件；类型守卫区分 delta/done/error；rAF 批量合并增量渲染（避免高频 setState 抖动）；AbortController 支持"停止生成"（保留已生成部分并标记"已手动停止"）
- 消息区：用户右侧 primary 气泡 / AI 左侧 card 气泡 + Dna 渐变头像；AI 回复用 <Markdown/> 渲染（支持表格/标题/列表）；流式光标动画；空内容时 bio-dot-1/2/3 三点跳动"思考中"；智能滚动（scrollTop 距底 <80px 才自动跟随，附"回到底部"悬浮按钮）；React.memo 优化非流式气泡
- 输入区：Textarea JS 自适应高度（1–4 行，clamp 104px）；Enter 发送（含 IME isComposing 判断）/ Shift+Enter 换行；生成中切换为红色停止按钮；safe-area-inset-bottom 适配
- 上下文展示：store.assistantContext 解析为"学科 · 第 N 章 · 小节"学科色 Badge（可点 × 清除）；无上下文时显示阅读页引导提示
- 快捷提问：空会话 6 张经典生物学问题卡片（化学渗透假说 / 米氏方程 / 原核真核调控 / Bcl-2 / 膜蛋白 α-螺旋 / 中心法则），点击直接发送
- 学科聚焦（加分项）：顶栏 Select 下拉，选中后显示聚焦 Badge + 输入区提示语（仅提示不强制）
- 错误处理：网络失败/HTTP 异常/SSE error 事件均落位到消息内错误横幅 + "重试"按钮（重发最近用户消息）；toast（use-toast destructive）提示
- 验证：bunx tsc --noEmit 0 错误；eslint 该文件 0 警告；curl 冒烟测试 GET/POST SSE/DELETE 全部符合前端解析协议（data:{"delta"}…data:{"done":true}）

Stage Summary:
- 会话：UUID localStorage 持久化 + 历史加载 + 确认清空（DELETE）
- 流式：SSE 解析（类型守卫无 any）+ rAF 批渲染 + 停止/重试 + 流式光标与思考动画
- UI：emerald→teal 渐变横幅（Bot/GraduationCap）、max-w-4xl、消息区 flex-1 bio-scroll 滚动、移动端 safe-area
- 上下文：学科色 Badge 展示/清除 + 空态引导 + 学科聚焦下拉
- 快捷提问：6 个生物学经典问题卡片
- 质量门：tsc 0 错、eslint 0 警告、API 冒烟通过

---
Task ID: 6
Agent: frontend-quiz-glossary-notes
Task: 构建测验中心、术语词典、学习笔记视图

Work Log:
- 重写 quiz-view.tsx / glossary-view.tsx / notes-view.tsx
- layout.tsx 追加挂载 sonner Toaster（top-center, richColors），使 sonner toast 生效
- agent-browser 端到端实测三个视图全流程，并清理测试数据

Stage Summary:
- quiz-view：四学科 Tabs（学科色激活态）+ 已答/正确率统计（GET /api/quiz/attempts 过滤）；章节练习（12 章卡片，含每章已答/正确率）与随机挑战（难度分层 3/5/2 抽 10 题）双模式；单选 RadioGroup / 判断双大按钮 / 多选 Checkbox+确认按钮；题号进度条、难度星级（基础/进阶/挑战三色）、实时计时；答后即时判分（绿色/红色高亮+解析+正确答案）；结果页 SVG 得分环、评语、用时、逐题回顾（对错标记+答案+错题解析）、再来一轮/返回选题/返回学科；交卷批量 POST 记录并刷新统计
- glossary-view：实时搜索（中文/英文/缩写，不区分大小写）；全部+四学科筛选胶囊（学科色激活、带计数）；词条卡片网格（学科色左边框+缩写 Badge+英文名+类别标签+定义，hover 学科色效果）；按类别分组开关（类别计数降序）；匹配计数与空态；移动端单列→桌面 3 列
- notes-view：GET /api/notes 列表（标题、内容 line-clamp-2、学科色 Badge、date-fns zhCN 相对时间、关联知识点一键跳回阅读页）；Dialog 新建/编辑（POST/PATCH + 校验 + loading）；AlertDialog 确认删除（DELETE）；标题/内容前端搜索过滤；插画式空态（StickyNote）+ 阅读页快捷记笔记提示；加载骨架屏
- 验证：bunx tsc --noEmit 0 错误；bun run lint 0 错误；agent-browser 实测答题全流程/搜索筛选分组/笔记 CRUD 均通过

---
Task ID: 7-8
Agent: 主控 (Z.ai Code)
Task: 全局搜索、收尾打磨、agent-browser 端到端验证

Work Log:
- 实现 ⌘K 全局搜索（search-dialog.tsx：章节/知识点/术语三组检索，点击跳转阅读器/词典）
- 修复移动端 Sheet 缺少 Description 的 aria 警告（page.tsx + reader-view.tsx）
- agent-browser 端到端验证：
  * 仪表盘渲染正常（统计卡、学科进度、活动图表、教材依据卡）
  * 学科中心 → 生物化学 12 章目录 → 展开章节 → 进入阅读器全流程正常
  * 阅读器三栏布局、目录树高亮、标记已学（乐观更新）、下一节导航、术语关联正常
  * "向 AI 助教提问本节"成功携带上下文（显示"生物化学·第1章·单糖的结构、构型与构象"）
  * AI 助教 SSE 流式回复验证：问"什么是异头物"，返回专业完整解析（α/β 比例 36%/64%、变旋现象、易混淆点）
  * 测验中心：章节练习启动、多选题勾选确认、判分+解析正确（答错后正确显示 A/C/D 及糖胺聚糖解析）
  * 术语词典：100 词条加载、搜索 ATP 命中三磷酸腺苷
  * 全局搜索：搜"糖酵解"返回知识点+术语分组，点击跳转阅读器成功
  * 暗色模式切换正常（html class=dark）
  * 移动端 390px：桌面侧栏隐藏、顶栏+抽屉菜单正常
  * 粘性页脚：短页 footerBottom=viewportH（贴底），长页自然下推
  * console 零警告、零页面错误；TSC 与 ESLint 零错误

Stage Summary:
- 应用达到"浏览器可交互"完成标准：全部核心流程经 agent-browser 实测通过
- 产出：全局搜索、aria 修复

---
Task ID: 9
Agent: 主控 (Z.ai Code)
Task: 创建 15 分钟定时 webDevReview 任务

Work Log:
- cron 服务拒绝 6 字段 cron 表达式（*/15 分钟），改用 fixed_rate=900s 成功创建（job_id: 386790）
- 任务类型 webDevReview，每 15 分钟自动评估项目状态、agent-browser 测试 QA、修 bug 或推进新需求、更新 worklog

Stage Summary:
- 项目初始版本全部完成并经浏览器端到端验证
- 定时持续开发任务已就位
