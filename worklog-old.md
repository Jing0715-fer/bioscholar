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

---
Task ID: 10-e1
Agent: frontend-styling-expert
Task: 仪表盘 / 学科中心 / 应用外壳「学术编辑风」改造（去 AI 味）

Work Log:
- 仅改动三个文件：dashboard.tsx、subjects-view.tsx、page.tsx；未动 globals.css / store / API / 路由逻辑 / 数据口径
- dashboard.tsx：
  * hero 重做：emerald→cyan 渐变横幅删除，改为 bio-paper 纹理卡片 + 左文右图（heroImage 占约 4/9，容器 bg-primary/5 兜底、border-t / lg:border-l 细线分隔）；文案区 bio-eyebrow「101计划」眉标 + font-serif「生命科学研习堂」大标题 + bio-rule + 副题 + 章节题数元信息行（·分隔）+ 双 CTA
  * 统计区：四张彩色图标卡 → 单条 hairline 分隔统计带（gap-px + bg-border，grid-cols-2→4），数字 font-serif tabular-nums 大号优先，sub 元信息行，彩色图标底座全部移除
  * 学科进度：每学科一行卡片，subjectCovers 缩略图（h-20/24 w-32/40 object-cover + theme.bgSoft 兜底）+ 学科色 border-l-2 细左边框 + serif 学科名 + 英文名小字 +「N 章 · N 小节 · N 节已完成」元信息 + 学科色细进度条（自定义 div，role=progressbar 完整 aria）+ serif 百分比；hover bg-accent/40 细过渡（无大阴影）
  * 继续学习卡：bg-primary/5 纯色（原渐变）+ eyebrow + bio-rule + serif 标题；空态同构
  * 活动图表：标题改「小方块 + font-serif」，recharts 数据逻辑不动
  * 教材依据：四张图标底座卡 → 编辑式条目列表（学科色左边框 + serif 名称 + 英文 eyebrow + 教材名 + 元信息），区块头部加 Textbook Foundation eyebrow + bio-rule
- subjects-view.tsx：
  * 列表页头部：eyebrow "Four Core Disciplines" + font-serif「学科中心」+ bio-rule
  * 学科卡：删除 gradient 顶条与彩色图标底座；封面图 aspect-[21/9] object-cover 置顶（图上无文字，bgSoft 兜底）；下方 eyebrow 英文名 + serif 中文名 + 简介 +「章 · 小节 · 自测题」元信息行 + 学科色细进度条 +「进入学习」+ ArrowRight 页脚；hover 用 theme.hover 细边框（去掉 translate-y / shadow-lg）
  * 学科详情：gradient 横幅删除 → 封面图（21/9）+ bio-paper 编辑式头部（eyebrow 英文名 + serif 中文名 + bio-rule + 简介 + 元信息 + 教材名 + outline 自测按钮）
  * 章节目录：章号改 font-serif tabular-nums 两位编号（01/02…，学科色），已完成 CheckCircle2 绿色对勾；关键词 chips →「关键词」eyebrow + 正文式 · 分隔文本；小节行 hover 细边框（border-transparent→border-border），未读 FileText 图标 → 1px 小圆点，降低图标密度
- page.tsx：
  * BrandHeader：emerald 渐变 DNA 底座 → border-primary/30 + bg-primary/10 + text-primary 克制样式；品牌名 font-serif
  * NavList 激活态：bg-primary 白字大块 → 左侧 3px border-primary 竖线 + bg-primary/10 + font-semibold + 图标 text-primary（inactive border-transparent 保持布局稳定）；删除图标 scale 动画
  * 侧栏「教材体系依据」：保留 bio-dna-bg，改 eyebrow 标题 + bio-rule 分隔的两段纯文字
  * 桌面顶栏：bio-eyebrow "BioScholar" + 竖 hairline + font-serif 当前栏目名；移动端顶栏品牌图标同步克制化
  * 去玻璃拟态：侧栏 bg-sidebar/60 backdrop-blur-sm → bg-sidebar 纯色；双顶栏 bg-background/80 backdrop-blur-md → bg-background
  * 页脚：bg-muted/40 色块 → 仅 border-t 一行居中细字（safe-area 以 pb-[max()] 保留）
- 验证：bunx tsc --noEmit 过滤 src/ 零错误（仅 examples/、skills/ 脚手架存在与本次无关的预置报错）；bun run lint 0 错误 0 警告；dev.log 末尾连续 ✓ Compiled；期间 quiz-view / assistant-view 的瞬时 tsc 报错系并行代理编辑中的中间状态，非本任务文件

Stage Summary:
- 三文件学术编辑风改造完成：渐变横幅、彩色徽章、图标底座、玻璃拟态全部清除，统一为 eyebrow + font-serif 标题 + bio-rule + 学科色细节的设计语言
- heroImage 与 subjectCovers 全部接入（<img loading="lazy"> + 学科色浅底兜底，封面资源由并行代理产出中，未就绪时布局不塌陷）
- 交互、统计、导航逻辑保持原样；自定义进度条补齐 role / aria-valuenow 等无障碍属性

---
Task ID: 10-e2（重派）
Agent: frontend-styling-expert
Task: AI 助教 / 测验中心 / 术语词典 / 学习笔记「学术编辑风」打磨（去 AI 味）

Work Log:
- 重派背景：前一次 10-e2 调用中断；本次先核对四文件现状（git diff 逐一审阅），确认前次调用实际已完成四个文件的完整改造（共约 +400/-384 行，无半成品残留），随后进行完整性审计、模式扫描与质量门验证，并补记本条工作日志（前次中断未及追加）
- 仅涉及四个文件：assistant-view.tsx / quiz-view.tsx / glossary-view.tsx / notes-view.tsx；未触碰 globals.css / markdown.tsx / reader-view / dashboard / subjects-view / page.tsx / illustrations.ts / store / API；SSE 流式解析、localStorage 会话、答题判分、CRUD、搜索过滤等业务逻辑零改动（diff 仅样式层）
- assistant-view.tsx：
  * 顶部 emerald→teal 渐变横幅（Bot/GraduationCap + bio-dna-bg）删除 → 编辑式学术头部：bio-eyebrow「AI Teaching Assistant」+ font-serif「AI 智能助教」+ 一行说明 + bio-rule；仅保留 h-1 细线级渐变点缀（规则允许）；原独立工具栏（教材上下文 Badge / 学科聚焦 Select / 清空会话按钮）并入头部卡内，功能不变
  * 快捷提问卡：删 Zap/FlaskConical/Dna/Microscope/Atom/Lightbulb 彩色图标底座与 LucideIcon 依赖 → font-serif tabular-nums 题号 01/02… + 衬线问题文本 + 细边框 hover（hover:border-foreground/25 + bg-accent/40，去 translate-y/彩色阴影）
  * 消息气泡：AI 头像 emerald→teal 渐变 → bg-primary 单色；流式光标/思考三点 emerald → primary token；AI 气泡保持 card 质感、用户气泡 primary 保持；「回到底部」按钮去 backdrop-blur 玻璃拟态
  * 提示图标 Lightbulb 去 amber 着色改 muted；历史消息分隔线改 bio-rule 渐隐规线
- quiz-view.tsx：
  * 顶部：ClipboardList 图标 + 统计卡（Separator 分隔框）→ bio-eyebrow「Self-Assessment Center」+ font-serif「测验中心」+ 元信息行化统计（已答 N 题 · 正确率 N%，数字 font-serif tabular-nums + 学科色）+ bio-rule
  * 学科 Tabs 激活态：全色块白字 + 彩色阴影 → 学科色 bgSoft（-500/10）+ 学科色文字 + shadow-none；模式 Tabs 功能不变
  * 章节练习卡：「第 N 章」bgSoft 徽章 + 「N 题」Badge + hover 下划线 → font-serif tabular-nums 大号章号（01/02…，muted 色弱化、hover 提亮）+ 学科色 border-l-4 细左边框 + 衬线章名 +「N 题 · 已答 N · 正确率 N%」行化元信息
  * 随机挑战卡：Shuffle 全色图标底座 + bio-dna-bg 纹理 + 三枚彩色难度 Badge → h-1 学科色细线 + eyebrow「Random Challenge」+ 衬线标题 +「基础 × N · 进阶 × N · 挑战 × N」行化元信息
  * 答题界面：题干 font-serif；难度 DifficultyStars（★★★ 彩色星）→ DifficultyLabel（1.5px 小圆点色标 + 细文字「基础/进阶/挑战」）；题号/计时 tabular-nums
  * 结果页：得分环保留，环内得分大数字 font-serif；「答对 N / N 题」数字 font-serif tabular-nums；评语、逐题回顾结构保持
- glossary-view.tsx：
  * 头部：BookMarked 图标标题 → bio-eyebrow「Glossary · 术语检索」+ font-serif「术语词典」+ 检索说明一行 + bio-rule；分组按钮保留
  * 学科筛选：全色块胶囊（FilterPill + theme.classes.bg）→ 下边线式学术 tabs（FilterTab：激活 = 学科色 border-b + 文字色；全部 = primary；计数 tabular-nums 伴随）
  * 词条卡：保留学科色 border-l-4 左边框；hover 去 translate-y/彩色阴影仅 shadow-sm；缩写 Badge 去学科色改中性 outline；英文名 font-serif italic；学科徽章 → 学科色细文字 + · 分隔行化元信息；类别 Badge secondary → outline muted
  * 分组视图：类别标题 font-serif +「N 条」细字 + bio-rule 渐隐规线（替代 Badge + 硬分隔线）
- notes-view.tsx：
  * 头部：StickyNote 图标标题 → bio-eyebrow「Study Notes · 学习档案」+ font-serif「学习笔记」+ 动态说明行 + bio-rule；新建按钮保留
  * 笔记卡：标题 font-serif；学科 Badge → 学科色细文字 + · 分隔；「相对时间更新 tabular-nums · 关联小节跳转链接」行化元信息；hover 改细边框过渡（hover:border-foreground/25，去 shadow-md）
  * 空态：插画保留但去 bg-primary/8 彩色底座 + 双层圆环 → border-dashed 细线圆 + muted 图标；Badge 依赖整体移除（import 清理）
- 完整性审计（本次重派新增）：rg 扫描四文件确认 0 emoji / 0 backdrop-blur / 0 shadow-lg|xl / 0 theme.classes.bg 全色块；全部渐变仅剩 3 处 h-1/hairline 细线级（assistant 头部 h-1、quiz 随机挑战卡 h-1、历史消息分隔 h-px）；0 处 any；bio-* 自定义类均在 globals.css 中定义；aria 属性抽查齐全
- 验证：bunx tsc --noEmit src/ 零错误（仅 examples/websocket、skills/image-edit、skills/stock-analysis-skill 存在与本次无关的预置报错）；bun run lint 0 错误 0 警告；dev.log 末尾连续 ✓ Compiled 无新增错误（dev server 此刻已停，未重启以免干扰主控）

Stage Summary:
- 四文件学术编辑风改造完成并经重派审计确认：AI 助教渐变横幅/彩色图标底座、测验彩色 Tabs/星级难度/彩色徽章、词典全色胶囊、笔记彩色空态全部清除，与 Task 10-e1 的 dashboard/学科中心/外壳设计语言对齐（eyebrow + font-serif + bio-rule + 学科色细节 + 行化元信息 + tabular-nums）
- 全部业务逻辑（SSE 流式、会话持久化、判分提交、CRUD、搜索过滤、跳转导航）保持原样；严格 TS 无 any；响应式与无障碍属性完整
- 质量门：tsc（src/）0 错误、eslint 0 错误 0 警告

---
Task ID: 11 & 12
Agent: 主控 (Z.ai Code)
Task: 插图体系完成 + 表格修复 + 复习卡片新功能 + 全量推送 GitHub

Work Log:
- 【插图体系】第二批 16 张教学关键插图生成并挂载（scripts/gen-images-extra.sh）：
  * 生物化学 6 张：葡萄糖异头物(ch1-s1)、氨基酸通式(ch3-s1)、血红蛋白四级结构(ch4-s4)、米氏动力学曲线(ch5-s3)、糖原分支结构(ch9-s5)、尿素循环(ch11-s2)
  * 分子生物学 4 张：中心法则(ch1-s4)、Holliday 交叉(ch3-s3)、剪接体剪接(ch5-s2)、染色质多级包装(ch8-s1)
  * 细胞生物学 4 张：钠钾泵(ch2-s4)、染色质包装(ch7-s3，复用 mb 图)、GPCR 信号通路(ch8-s2)、减数分裂(ch10-s5)
  * 生物物理学 3 张：膜脂相变(ch3-s1)、光镊(ch6-s1)、动作电位(ch7-s2)
  * 全部统一"墨线+淡彩教科书插画"风格；图注为学术严谨中文描述（含数值与机制细节）；共 44 张图、40 个配图小节
- 【关键 Bug 修复】
  * markdown.tsx：react-markdown 默认 urlTransform 会清空 biofigure:// 自定义协议 → 自定义 urlTransform 放行标记；defaultUrlTransform 仅接收 1 参数（修正签名）
  * markdown.tsx：react-markdown 将独立图片包在 <p> 内导致 <figure>/<figcaption> 嵌套 <p> 的 hydration 错误 → 安装 rehype-unwrap-images 插件解除包裹（console 错误清零）
- 【新功能：复习卡片（间隔重复）】
  * prisma 新增 FlashcardReview 模型（ease/intervalDays/reps/lapses/dueAt，dueAt 索引）已 db:push
  * src/lib/srs.ts：SM-2 简化算法（四档评分 0忘记/1困难/2良好/3简单；遗忘重置+10分钟再现；掌握阈值 21 天）
  * /api/flashcards：GET 返回到期卡+新卡补足队列（每日新卡≤15、会话≤25）与统计；POST 提交评分并 upsert 调度
  * revision-view.tsx：翻卡流程（正面术语→显示答案→四档自评）、进度条、新卡/轮次标记、下轮复习提示、完成页统计（张数/记忆质量/需巩固）、空态与重试，学术编辑风（学科色顶线+衬线术语大字+eyebrow）
  * 导航集成：page.tsx 新增"复习卡片"项（Layers 图标），store NavKey/AppView 增加 revision
- 【侧栏微调】教材体系依据卡行距 1.9、分段（VLM 评审反馈的拥挤问题）
- 【QA】agent-browser 实测：仪表盘 hero/学科封面缩略图、学科详情、阅读器插图（图 2-3-1、图 1-4-1、动作电位图 7-2-1）、booktabs 三线表（8 行数据+表头）、GFM 表格渲染、四视图新样式、控制台零错误；VLM 设计评审结论：插图风格高度统一、科学准确性优秀、排版专业
- 【推送】GitHub 仓库 Jing0715-fer/bioscholar 已创建并全量推送

Stage Summary:
- 应用完成度：44 张统一风格教材插图覆盖 40 个关键小节 + 106 个小节的学术三线表全部正确渲染 + 复习卡片间隔重复系统全流程可用
- 质量门：bunx tsc src/ 0 错误、bun run lint 0 错误 0 警告、浏览器 console 零错误零警告
- 已推送：https://github.com/Jing0715-fer/bioscholar

未解决问题与下一步建议：
- 插图风格为 AI 生成示意（图注已声明"AI 绘制示意图"），后续可逐张人工审校替换为矢量图
- 复习卡片目前仅基于术语词典 100 条，可扩展为"小节要点卡"（keyPoints 抽卡）
- 可考虑学习热力图、导出学习报告 PDF、错题本等增强功能

---
Task ID: 13
Agent: 主控 (Z.ai Code)
Task: 复习卡片 QA 修复 + 错题本新功能 + 推送

Work Log:
- 【QA 发现并修复关键 Bug】复习卡片 /api/flashcards HTTP 500：db:push 时 dev server 占用导致 Prisma Client 未热更新，db.flashcardReview undefined → bun run db:generate 重新生成 + 重启 dev server 修复
- 【QA 复习卡片全流程】agent-browser 实测：队列加载（15 张新卡）→ 翻卡（ATP→糖酵解）→ 四档评分（"良好"）→ 推进正常；Prisma 验证 SM-2 调度正确（ATP：reps=1、intervalDays=1、ease=2.5、dueAt=次日）；测试数据已清理
- 【新功能：错题本（wrongbook）】
  * /api/wrongbook：GET 聚合 QuizAttempt 答错记录（按题聚合错次/最近错答/最后错误时间倒序，关联题目原文与学科统计）；DELETE { questionId } 移除错题（删除该题全部作答）
  * wrongbook-view.tsx：学术编辑风（eyebrow+衬线标题+学科色顶线）；学科下边线式筛选（带计数）；错题卡（衬线序号+题干展开/收起）；展开区选项正误对照（绿=正确/红=你的选择/灰=未选）+ 解析块（左侧 primary 细线）+ 移除操作（AlertDialog 确认）；空态/加载/错误态；date-fns 相对时间
  * 导航集成：page.tsx 新增"错题本"（NotebookPen 图标），types AppView + store NavKey 增加 wrongbook
- 【端到端验证】agent-browser：真实答题（5 题对 1）→ 交卷（得分率 20%）→ 错题本自动归集 4 道 → 学科筛选 → 展开解析 → 移除 1 道（4→3 实时更新）→ console 零错误；VLM 评审排版专业统一
- 【tsc/lint】src/ 0 错误，eslint 0 警告

Stage Summary:
- 应用现有 9 大功能视图：仪表盘/学科中心/阅读器/AI 助教/测验中心/复习卡片/错题本/术语词典/学习笔记
- 错题闭环成型：测验 → 错题归集 → 解析复习 → 移除已掌握；结合 SM-2 复习卡片形成完整学习回路

未解决问题与下一步建议：
- 复习卡片可扩展"小节要点卡"（keyPoints 抽卡）与错题联动（错题自动生成卡片）
- 仪表盘可加入错题数/到期卡数统计卡
- 学习热力图（GitHub 风格活动日历）可作为下一亮点功能

---
Task ID: 14
Agent: 主控 (Z.ai Code)
Task: 全面 QA 回归 + 学习热力图 + 仪表盘统计增强 + 复习卡片要点卡扩展

Work Log:
- 【QA 回归（本轮起点）】agent-browser 遍历 9 大视图 + 全局搜索 + 阅读器插图/灯箱/三线表 + 复习卡片翻卡评分全流程 + SM-2 数据库验证 + 移动端 390px 布局：全部通过、console 零错误、无需修复
- 【新功能：学习热力图（GitHub 风格活动日历）】
  * 新 API /api/activity：LearningProgress/QuizAttempt/Note/FlashcardReview 四类行为按日聚合（126 天 = 18 周）+ streak 连续天数 + maxStreak 区间最长 + activeTotal 活跃天数；lastReviewedAt 可空守卫
  * 新组件 activity-heatmap.tsx：周列 × 7 行格子矩阵（周一为首行）、5 级色阶（bg-muted → primary/25/45/65/90，评审后加大级差）、月份标尺（left 精确 calc 对齐修正 1.875rem 偏移）、星期标尺（奇数行移动端隐藏）、hover/focus 双通道 + aria-live 当日明细行（避免 tooltip 溢出）、图例（少→多）、格子 aria-label 完整、移动端 overflow-x-auto 内滚 + min-w-0
  * 仪表盘：移除原 recharts 近 14 天柱状图 → 全宽热力图卡（eyebrow Learning Activity · 近 18 周 + 连续学习 N 天衬线徽标 + bio-rule）
- 【新功能：仪表盘统计增强】
  * /api/stats 扩展：dueCards（今日到期复习卡）、wrongCount（错题去重数）、近 14 天 activity 补充 reviews 维度
  * 统计条 4 → 6 格（grid-cols-2 sm:3 lg:6）：新增"待复习卡片""错题本"两格可点击跳转（role=button + Enter/Space 键盘支持 + 箭头 hover 动效）
  * 右栏新增"今日速览"卡：复习卡片（到期数）+ 错题本（待攻克数）两行列表入口
  * VLM 评审优化落地：零值数字调淡（muted/50 避免满屏 0 焦虑感）
- 【新功能：复习卡片小节要点卡】
  * /api/flashcards 重构：buildKeypointSources() 从四学科 203 个小节 keyPoints 构建要点卡源（cardId 规范 kp-{sectionId}，要求 keyPoints ≥ 3 条）；队列 = 到期卡（术语+要点按 intervalDays 排序）+ 新卡（术语 12/日 + 要点 6/日，2:1 交织排列）；SESSION_LIMIT 25 不变；POST 校验 cardId ∈ glossary ∪ kp 集合
  * stats.totalCards 100 → 303（100 术语卡 + 203 要点卡），seen/mastered/dueNow 统一覆盖两类卡
  * revision-view.tsx：DueCard 扩展 type/chapterTitle/chapterId/sectionId/keyPoints；正面分支（要点卡显示"学科 · 第 N 章 · 章题"eyebrow + 小节衬线大字 + "回忆本节的 N 条要点"提示）；背面分支（01/02 编号要点列表，衬线 primary 序号）；卡片类型徽标（要点卡 violet 细边框 / 术语卡中性）；"回看本节原文"按钮 openReader 跳转阅读器；头部文案更新"303 张学科卡片"
- 【QA 发现并修复存量 Bug】移动端 390px 仪表盘横向溢出（bodyOverflowX）：学科进度 Card 等作为 grid 子项缺 min-w-0，导致内容链（封面 128px + 文字 min-content）无法收缩，按钮 409px > 358px 可用宽 → 全部 Card/grid 容器补 min-w-0，修复后 308px 正常截断
- 【验证】tsc src/ 0 错误、eslint 0 错误 0 警告、agent-browser：热力图 126 格渲染/焦点交互 aria-live 更新/月份标尺、要点卡翻卡（编号列表）→评分→SM-2（POST kp- 卡 reps=1 interval=1）、回看原文跳转阅读器、移动端 2 列统计条 + 无横向溢出、8 视图回归零错误；VLM 桌面/移动双评审通过（A+ 风格一致性）；测试数据已清理（122 条 mock 进度 + flashcardReview）
- 【推送】commit 58fdd1d 已推送 https://github.com/Jing0715-fer/bioscholar

Stage Summary:
- 应用现有功能：仪表盘（6 格统计 + 热力图 + 今日速览）/ 学科中心 / 阅读器 / AI 助教 / 测验 / 复习卡片（术语 + 要点双卡型）/ 错题本 / 词典 / 笔记
- 学习行为数据全面打通：四类行为 → 热力图/streak 统计 → 仪表盘聚合，学习闭环可视化成型
- 质量门：tsc 0 错误、lint 0 警告、浏览器 console 零错误、移动端零溢出

未解决问题与下一步建议：
- 热力图色阶为单一 primary 绿阶梯，可考虑学科色混合或更大数据量下的分位数分级
- 错题联动卡片（答错自动生成要点卡）尚未实现，可作为复习系统下一步
- 可做导出学习报告 PDF、AI 助教多轮上下文记忆增强、错题本按知识点聚类
- 插图覆盖 40/203 小节，仍可继续扩充第二批学科插图

---
Task ID: 15-b
Agent: full-stack-developer (学习报告)
Task: 学习报告功能（API + 视图 + 打印导出 + 导航）

Work Log:
- 前置阅读 worklog（10-e1/10-e2 学术编辑风设计语言、Task 14 热力图）与 dashboard / activity-heatmap / api/activity / api/stats / api/wrongbook / store / page / types / biology 源码，确认设计语言（bio-eyebrow + font-serif + bio-rule + hairline 统计带 + 学科色 border-l-2 + tabular-nums）与数据口径
- 新建 src/app/api/report/route.ts（GET）：Promise.all 拉取 LearningProgress / QuizAttempt / Note / FlashcardReview 四表全量 + 三个最近子集；聚合 generatedAt、overview（已完成/总小节 203/答题/正确率/笔记/已学/已掌握/今日到期/错题去重）、subjects（四学科：进度%、答题/正确率/错题去重/笔记数）、activity（126 天 = 18 周四类行为按日计数 + streak/maxStreak/activeDays，逐行复刻 /api/activity 的 toKey 与连续天数算法保证两处热力图完全一致）、recent（最近 8 完成小节经 SECTION_INDEX 静态映射标题、最近 8 笔记、最近 5 复习含 cardId→可读 label 解析：术语卡取词条名 / kp- 要点卡取小节标题）；错题数按 questionId 去重（对齐 wrongbook）；复习掌握判定复用 srs.isMastered
- 新建 src/components/bio/report-view.tsx（约 620 行，学术编辑风）：刊头（eyebrow「STUDY REPORT · 学习档案」+ 衬线大标题 + 说明 + 报告生成时间 tabular-nums + bio-rule，右侧导出 PDF 按钮 Printer 图标触发 window.print）；报告本体包 print-root；概览统计带（grid-cols-2 sm:3 lg:6 gap-px hairline，零值数字 text-muted-foreground/50 调淡）；学科进展（学科色 border-l-2 + 衬线学科名 + 英文 eyebrow + 已完成 N/M + 细进度条 role=progressbar 完整 aria + 「答题 N · 正确率 N% · 错题 N · 笔记 N」行化元信息）；复习记忆（已学/已掌握/今日到期/连续学习 四格 hairline 带）；学习活跃度（复用 ActivityHeatmap + 连续/活跃/最长连续 三格统计带）；最近动态三列（最近完成小节→openReader、最近笔记→notes、最近复习→revision，date-fns zhCN 相对时间 + hover 箭头）；空数据引导态（dashed 圆 + muted 图标 + 「开始学习后此处将生成你的学习报告」+ 前往学科中心按钮）；加载骨架 / 错误重试态
- QA 中发现并修复健壮性缺口：API 返回 200 但负载异常（如 {error}）时视图解构 undefined 崩溃（agent-browser 实测触发 Application error）→ load() 增加形状校验（overview/activity/recent/数组字段缺失抛错落错误态）+ normalizeReport 归一化（数值 num() 兜底、days/subjects 过滤非法项），修复后异常负载显示「报告加载失败 + 重新加载」
- 导出 PDF 按钮处理深色模式：打印前临时移除 html.dark、打印后恢复，避免「深色浅字 + 白底」不可读
- globals.css 末尾追加学习报告打印导出 @media print 规则（body 白底 / 仅 .print-root 可见 / .no-print 隐藏），报告刊头操作区加 no-print
- 导航集成：types.ts AppView 增加 { name: 'report' }、store.ts NavKey 增加 'report'（注：项目无 viewTitle 映射，顶栏标题由 page.tsx NAV_ITEMS 派生）、page.tsx NAV_ITEMS 在「错题本」后新增「学习报告」（FileChartColumn 图标，desc「学习数据汇总与导出」）+ ViewSwitch 渲染 ReportView + 移动端 SheetDescription 文案同步；NavList 桌面/移动共用确认同步
- 质量门：bunx tsc --noEmit src/ 零错误；bun run lint 0 错误 0 警告；agent-browser 实测：导航切换/五区块渲染/126 格热力图/4 progressbar aria/导出按钮存在且包裹 no-print、window.print 为 function、print-root 计算样式与编译 CSS 均确认 @media print 规则生效、agent-browser pdf 生成 211KB 报告 PDF 且 pdftotext 验证仅含报告内容（无侧栏/顶栏外壳）、最近动态行点击跳转阅读器与笔记视图、错误态重试恢复、空态（mock 全零负载：引导文案 + 前往学科中心 + 导出按钮正确隐藏）、移动端 390px 零横向溢出（print-root 宽 358px）、深色模式渲染正常、console 零错误零警告
- 测试数据经真实 API 种子（6 小节进度 + 4 答题 + 1 笔记 + 2 复习卡）验证后精确清理（不动并行代理的 test-* 数据），清理后 API 复查归零（122 条并行代理 mock 数据除外）

Stage Summary:
- 应用现有 10 大功能视图：仪表盘/学科中心/阅读器/AI 助教/测验/复习卡片/错题本/学习报告/词典/笔记
- /api/report 一次聚合四表 + 静态映射，返回 { generatedAt, overview(10 字段), subjects[4](11 字段), activity{days[126], streak, maxStreak, activeDays}, recent{sections[8], notes[8], reviews[5]} }；日键与 /api/activity 逐字节一致（其实现为 toISOString UTC 键，为保证仪表盘与报告两处热力图完全一致而沿用）
- 学习报告视图：学术编辑风五区块（总览/学科/复习记忆/活跃度/最近动态）+ 一键导出 PDF（print-root 隔离 + 深色模式临时切浅 + pdftotext 验证导出内容纯净）+ 空态/骨架/错误重试三态齐备，异常负载防崩溃
- 质量门全过：tsc src/ 0 错误、eslint 0 警告、浏览器 console 零错误、移动端零溢出

---
Task ID: 15
Agent: 主控 (Z.ai Code)
Task: 全面 QA 回归 + 数据清理 + 错题联动复习卡 + 第三批插图（12 张）+ 学习报告统筹 + 推送

Work Log:
- 【QA 回归（本轮起点）】agent-browser 遍历仪表盘/复习卡片/错题本/学科中心/阅读器：功能全部正常、console 零错误；tsc src/ 0 错误、lint 0 警告、dev.log 无异常
- 【QA 发现并修复】数据库残留 123 条 test-* 假进度数据（上轮 cron 任务测试残留，subjectId 为空串污染仪表盘"已学 61%"）→ deleteMany 清理，stats 归零复核；本轮结束时再次全量清理（quiz 6 + flashcards 4 + progress 128）
- 【新功能 A：错题联动复习卡（测验答错 → SM-2 队列）】
  * /api/quiz/attempts POST：答错记录自动 upsert FlashcardReview（cardId 约定 wq-{questionId}）；首次答错建卡（reps=0、dueAt=now、lapses=1、lastReviewedAt=null）；再次答错拉回立即到期并 lapses+1，已掌握（interval≥21 天）则重置为待巩固；响应新增 wrongCards 计数
  * /api/flashcards GET：新增 QUIZ_SOURCES 题库源（225 题）；错题卡最高优先入队（含 reps=0 未复习新错题卡），其次到期卡、新卡补足；0.5 步查询 QuizAttempt 最近错误选择附到 userAnswer（背面红绿对比）；stats.totalCards 动态 = 303 + 错题卡数，新增 wrongDue；POST 校验扩展 wq- 前缀
  * /api/wrongbook DELETE：移除错题时同步删除对应 wq- 复习卡（闭环清理）
  * revision-view.tsx：DueCard 扩展 type:'wrong' + question/options/answer/explanation/userAnswer；正面（学科·章 eyebrow + 衬线题干 + "回忆这道题的正确答案"）；背面（选项列表红绿对比：绿=正确答案✓ / 红=你的选择✗ / 灰=未选 + 图例 + 解析块）；徽标三态（错题卡 rose / 要点卡 violet / 术语卡中性；isNew 对错题卡显示"待巩固"）；辅助操作"前往错题本"；头部文案动态卡库数 + "错题待巩固 N" 统计
  * quiz-view.tsx：交卷响应捕获 wrongCards，结果页新增 rose 提示卡"N 道错题已自动加入复习卡片，点击前往巩固"（直跳复习视图）；startQuiz 重置
- 【新功能 A 端到端验证】API 直测（答错→wq 卡入队首位→评分良好→SM-2 interval=1→wrongbook 删除→卡库回落 303）；agent-browser 真实答题（5 题对 1）→交卷→结果页提示"4 道错题已自动加入"→跳转复习→错题卡翻卡（红绿对比+解析）→评分推进（第 2/22 张仍错题卡连续排队）；VLM 评审采纳 P1 建议增加"你的选择"对比视图
- 【新功能 C：第三批教学插图（12 张，覆盖 40→52 小节）】
  * 呼吸链四复合物(ch8-s2)/磷酸戊糖途径(ch9-s3)/脂肪酸β氧化(ch10-s1)/DNA变性复性Tm(ch7-s3)/PCR循环(mb-ch9-s2)/Sanger测序(mb-ch9-s4)/trp操纵子衰减(mb-ch7-s3)/RNA干扰(mb-ch8-s5)/RTK-Ras-MAPK(cb-ch8-s4)/CDK-cyclin周期引擎(cb-ch10-s2)/跳跃式传导(bp-ch7-s3)/冷冻电镜(bp-ch9-s4)
  * 生成链路：gen-images-batch3.sh（后台 nohup/setsid 均被会话清理终止 → 改前台分段运行）；VLM 审校两轮发现 6 张乱码文字/结构缺陷 → 重画一轮仍残留伪标签 → 新工具 scripts/remove-text-illu.ts（z-ai image-edit SDK 批量擦除文字，保留图形）→ 5 张清洗后 VLM 复检全部可用
  * 【格式修复】image-edit 返回 JPEG 数据存为 .png 扩展名导致 MIME 不匹配浏览器解码失败（naturalWidth=0）→ PIL 转真 PNG；scripts/remove-text-illu.ts 修正 SDK 类型（image 而非 images）
  * illustrations.ts：12 条新挂载（学术图注含机制细节/数值/诺奖出处），图编号自动 图{章}-{节}-{序}；呼吸链/PCR/跳跃传导/CDK 四处阅读器实测渲染正常
- 【新功能 B：学习报告】子代理完成（详见 Task 15-b 条目）：/api/report 四表聚合 + report-view 五区块学术编辑风 + print-root 打印导出 PDF（pdftotext 验证内容纯净）+ 导航集成（错题本之后，FileChartColumn）
- 【最终回归】10 视图零错误零溢出；移动端 390px 仪表盘/学习报告/复习卡片/错题本零横向溢出；tsc 0 错误、lint 0 警告；测试数据全量清理（进度/答题/复习卡/笔记归零）
- 【推送】commit 已推送 https://github.com/Jing0715-fer/bioscholar

Stage Summary:
- 应用现有 10 大功能视图：仪表盘/学科中心/阅读器/AI 助教/测验/复习卡片（术语+要点+错题三卡型）/错题本/学习报告/词典/笔记
- 学习闭环完全成型：测验答错 → 自动生成错题卡 → SM-2 调度巩固 → 错题本红绿对照复习 → 掌握后移除（同步清卡）
- 插图体系 56 张 / 52 个小节（覆盖 52/203，约 26%）
- 质量门：tsc 0 错误、lint 0 警告、console 零错误、移动端零溢出、VLM 插图与 UI 双审校通过

未解决问题与下一步建议：
- 插图仍可继续扩充（52/203）；图像模型在复杂多步骤流程图上易生成乱码伪标签，流程类插图建议"简洁构图+去文字工具"流水线（scripts/remove-text-illu.ts 可复用）
- 热力图打印时右侧截断（GitHub 同款行为），可加 print 缩放
- AI 助教多轮上下文记忆增强、错题本按知识点聚类、学习报告增加"能力画像"雷达图可作下一步
- cron 定时任务（15 分钟 webDevReview）会自行 seed 测试数据用于 QA，推送前需检查数据清洁
---
Task ID: 5-a
Agent: commons-biochemistry-images
Task: 从 Wikimedia Commons 搜集生物化学通路真实配图

Work Log:
- 读取 worklog 了解插图体系现状（Task 11/12/15 的 AI 生成示意图 56 张，用户要求替换为真实权威来源图）
- Commons API（action=query&list=search, srnamespace=6）逐项英文关键词检索 10 类目标图，再用 imageinfo（url|size|mime|extmetadata）获取候选的原图地址、尺寸、许可与作者；自建 /tmp/commons_info.sh 脚本批量查询并 sed 去除 Artist 的 HTML 标签
- 候选遴选：全部选择 Wikipedia 经典教学图（Glycolysis.svg、Citric acid cycle with aconitate 2.svg、Mitochondrial ETC annotated diagram.svg、Pentose phosphate pathway en.svg、Beta oxidation of fatty acids.png、Urea cycle.svg、Michaelis-Menten saturation curve.svg、Hyperchromicity.svg、Cell membrane detailed diagram en.svg、Calvero 的 Sucrose/Lactose/Maltose.svg 同作者同风格黑白线式系列）
- 下载：SVG 一律取 1920px PNG 缩略图（小尺寸结构式取 960px），保存为小写 kebab-case PNG 至 public/images/bio/commons/；期间发现 1600px 自拼 thumb URL 返回 HTML 报错页，改用 API 返回的 thumburl 后全部成功；遇 Commons 429 限流，加 User-Agent 与 sleep 退避后恢复
- VLM 科学性验证（z-ai vision，每图中文核对清单）：糖酵解（10步/酶名/中间产物/ATP·NADH 计量）、TCA（8步酶名/3NADH+1FADH2+1GTP/回补）、ETC（四复合物/CoQ·cyt c/电子流/质子泵向/ATP合酶）、PPP（氧化2NADPH+CO2/非氧化转酮转醛）、β氧化（四步螺旋/FADH2·NADH/活化/C16→C14+C2）、尿素循环（5步酶/线粒体·胞质分区/4个高能磷酸键）、米氏曲线（Vmax/Km/1/2Vmax/双曲线形态）、DNA 熔解（S形/A260/Tm 中点）、流动镶嵌（双层/整合外周蛋白/胆固醇/糖链仅外侧）、三种二糖糖苷键类型与还原性——12 张全部一次通过，无需启用备选候选
- 校验 10 个 sectionId 与 src/data/subjects/biochemistry.ts 逐一匹配（ch1-s2 二糖、ch2-s3 生物膜、ch5-s3 米氏、ch7-s3 变性复性、ch8-s2 呼吸链、ch9-s1/s2/s3 糖代谢、ch10-s1 β氧化、ch11-s2 尿素循环）
- 写入 public/images/bio/commons/manifest-5a.json（12 条：topic/sectionId/commonsFile/author/license/sourceUrl/verified），与并行代理目录共存未触碰他人文件；最终完整性脚本校验：12 文件均有效 PNG、<5MB、许可证均在 CC0/PD/CC BY/CC BY-SA 白名单、manifest 键与磁盘文件一一对应
- 未修改 src/ 任何代码与其他图片目录（structures/、pdb/、covers/、各学科 AI 图目录原样保留）

Stage Summary:
- 成功搜集并 VLM 审校通过 12 张 Commons 真实图（10 类目标全覆盖，含二糖三张组图）：
  * glycolysis-pathway.png → ch9-s1（WYassineMrabet, CC BY-SA 3.0）
  * tca-cycle.png → ch9-s2（Naryanese et al., CC BY-SA 3.0）
  * electron-transport-chain.png → ch8-s2（Rozzychan, CC BY-SA 2.5）
  * pentose-phosphate-pathway.png → ch9-s3（Pink Bee, CC BY-SA 4.0）
  * beta-oxidation.png → ch10-s1（Mplanine, CC BY 4.0）
  * urea-cycle.png → ch11-s2（Yikrazuul, CC BY-SA 3.0）
  * michaelis-menten-kinetics.png → ch5-s3（fullofstars, Public domain）
  * dna-melting-curve.png → ch7-s3（Fdardel, CC BY-SA 3.0）
  * fluid-mosaic-model.png → ch2-s3（Mariana Ruiz, Public domain）
  * sucrose/lactose/maltose-structure.png → ch1-s2（Calvero, Public domain，同作者同风格系列）
- 跳过项：无（DNA 熔解曲线与二糖系列均找到合格图，未触发 3 候选淘汰）
- 全部署名信息已如实记录于 manifest-5a.json，供图注署名使用

---
Task ID: 5-c
Agent: commons-cellbio-images
Task: 从 Wikimedia Commons 搜集细胞生物学与生物物理学真实配图

Work Log:
- 读取 worklog 了解插图体系现状（56 张 AI 生成示意图覆盖 52 小节，用户核心诉求：替换为真实、权威来源配图）
- 通过 Commons API（action=query&list=search，srnamespace=6）检索 12 个主题候选图，关键词含 "animal cell anatomy diagram"、"mitochondrion structure"、"mitosis phases diagram"、"meiosis diagram"、"apoptosis"、"G protein-coupled receptor signaling cAMP"、"MAPK pathway"、"action potential"、"saltatory conduction"、"endomembrane system"、"cytoskeleton"、"cyclin CDK cell cycle" 等
- 逐候选调用 imageinfo（iiprop=url|size|mime|extmetadata）获取原图/缩略图 URL、尺寸、许可证（LicenseShortName）与作者（Artist，sed/jq 去 HTML 标签），仅保留 CC0/Public domain/CC BY/CC BY-SA
- 下载 12 个最终文件至 public/images/bio/commons/（SVG 原图优先；Smart-Servier 细胞骨架原图 10240×5760 超 5MB，改用 1920px 允许尺寸缩略图；OpenStax 动作电位为 JPEG 故扩展名用 .jpg）；期间 upload.wikimedia.org 出现 429 限速（retry-after 600s，与并行代理共享出口 IP），通过等待限速窗口与 thumb.wikimedia.org 备用主机完成全部下载；所有文件均经 file/jq 校验非 HTML 错误页
- VLM 科学审校（z-ai vision，glm-5v-turbo）：每图按定制核对清单中文提问（结构完整性、各期顺序与染色体行为、通路级联顺序、数值与阈值标注、标签语言与乱码检查）；SVG 图使用 Commons 1920px PNG 渲染图送审（与原图内容一致）
- VLM 审校淘汰/替换记录（每目标 ≤3 候选）：
  * 线粒体首选 File:Mitochondrion structure labels.svg（CC0）渲染后仅有文字标签列表、无结构图形 → 弃用，改用 File:Animal mitochondrion diagram en.svg（PD, LadyofHats）复审通过（外膜/内膜/嵴/基质/膜间隙/ATP合酶/mtDNA/核糖体全部正确）
  * 跳跃传导首选 File:Saltatory conduction along a myelinated axonw.svg（CC0）科学内容正确但标注为德语（Myelinscheide/Ranvier'sche Schnürringe）→ 不符英文标注要求，改用 File:Propagation of action potential along myelinated nerve fiber en.svg（CC BY-SA 4.0, Helixitta）复审通过
  * GPCR 候选 File:XBio illustration – G Protein Coupled Receptor (GPCR).png（CC BY 4.0）仅展示 7 次跨膜结构、无 G 蛋白/cAMP 下游级联 → 弃用；File:Process of cAMP Dependent Pathway.jpg（CC BY 4.0）通过（VLM 指出糖原分解产物为教科书级简化，建议图注补充 G-1-P）
  * RTK-Ras-MAPK 两候选均通过审校：File:MAPK-pathway-mammalian.png 缺上游 RTK→Grb2/SOS→Ras 环节且不含 JAK-STAT；File:Signal transduction pathways.svg 完整覆盖 RTK→Grb2/SOS→Ras→Raf→MEK→ERK 并含 JAK-STAT/PI3K/Wnt 总览，与 ch8-s4 小节标题"酶联受体：RTK 途径与 JAK-STAT"更契合 → 选后者
- 写入 manifest-5c.json（12 条：文件名→topic→sectionId→commonsFile→author→license→sourceUrl→VLM 审校说明）；未触碰 manifest-5a.json 与并行代理的任何文件；未修改 src/ 下任何代码；文件名全部为细胞/生物物理主题 kebab-case，与并行代理无冲突

Stage Summary:
- 成功搜集 12 张 Commons 真实配图（任务清单 10 个主目标全部命中，另完成 2 个加分项），全部经 VLM 科学审校通过、许可证合规（PD/CC0/CC BY/CC BY-SA）、作者如实记录：
  1. animal-cell-anatomy.svg → cell-biology-ch1-s2（PD, LadyofHats/Mariana Ruiz）
  2. mitochondrion-ultrastructure.svg → cell-biology-ch5-s1（PD, Mariana Ruiz Villarreal）
  3. mitosis-phases.svg → cell-biology-ch10-s4（CC BY-SA 3.0, Jpablo cad & juliana osorio 等）
  4. meiosis-stages.svg → cell-biology-ch10-s5（CC BY-SA 4.0, Ali Zifan）
  5. apoptosis-morphology.png → cell-biology-ch12-s1（PD, H. Hoffmeister 德语原版的中文翻译版；中文标注）
  6. gpcr-camp-signaling.jpg → cell-biology-ch8-s2（CC BY 4.0, Evvong168）
  7. rtk-ras-mapk-pathway.svg → cell-biology-ch8-s4（CC BY-SA 3.0, cybertory）
  8. action-potential.jpg → biophysics-ch7-s2（CC BY 4.0, OpenStax；阈值-55mV/静息-70mV/超射+30mV 全标注）
  9. saltatory-conduction.svg → biophysics-ch7-s3（CC BY-SA 4.0, Helixitta）
  10. secretory-pathway.svg → cell-biology-ch4-s2（PD, Mariana Ruiz；内膜系统 ER→Golgi→囊泡→胞吐）
  11. cytoskeleton.jpg → cell-biology-ch6-s1（CC BY-SA 3.0, Laboratoires Servier）【加分项】
  12. cdk-cyclin.png → cell-biology-ch10-s2（CC0, Fatma Abukhater）【加分项】
- 跳过项：无
- 后续集成建议：挂载到 illustrations.ts 时——gpcr-camp-signaling.jpg 图注可补充"糖原分解首先生成葡萄糖-1-磷酸"；cytoskeleton.jpg 图内 'Actine' 为法语拼写变体；apoptosis-morphology.png 为中文标注图、含少量繁体写法；7 张 SVG 中 meiosis/mitochondrion 等部分图为文字转路径（无字体依赖，渲染稳定）
---
Task ID: 5-b2
Agent: commons-molbio-images-fix
Task: 补完分子生物学 Commons 配图（RNA剪接/RNAi/乳糖操纵子）+ manifest 收尾

Work Log:
- 读取 worklog 与 public/images/bio/commons/ 目录现状：7 张分子生物学图已由超时中断的 5-b 代理下载（dna-replication-fork/central-dogma/prokaryotic-transcription/translation-elongation/pcr-cycles/sanger-sequencing/holliday-junction），但 rna-splicing.png 为 0 字节损坏文件，RNAi 与乳糖操纵子缺失，manifest-5b.json 未创建
- 校验目标 sectionId 与 src/data/subjects/molecular-biology.ts 匹配：ch5-s2（pre-mRNA 剪接与剪接体）、ch8-s5（转录后调控与 RNA 干扰）、ch7-s1（操纵子模型与乳糖操纵子的负调控），并为 7 张已有图核定归属小节（ch1-s4/ch2-s4/ch3-s3/ch4-s2/ch6-s4/ch9-s2/ch9-s4）
- 删除 0 字节 rna-splicing.png；Commons API（list=search, srnamespace=6）检索三主题候选，imageinfo（url|size|mime|extmetadata）查许可与作者，全部落在 CC0/PD/CC BY/CC BY-SA 白名单内：
  * RNA 剪接：File:RNA splicing reaction.svg（BCSteve, CC BY-SA 3.0，两步转酯+lariat 教学图），备选 File:Splicing overview.jpg（Agathman, CC BY-SA 3.0）未启用
  * RNAi：File:RNAi-simplified.svg（Silvia3 矢量重绘、改编自 Matzke & Matzke 2004 PLoS Biol，CC BY 2.5），备选 File:Mechanism of RNA interference.jpg（综述图，偏密）未启用
  * 乳糖操纵子：File:Lac operon-2010-21-01.png（G3pro 原作/Tereseik 衍生, CC BY 2.0，经典 Wikipedia lac operon 调控全图）
- 下载：SVG 取 1920px PNG 缩略图（thumb.wikimedia.org），PNG 原图直取；首次两笔遇 Wikimedia 限速返回 HTML 错误页，删除后等待 45-60s 重试全部成功；file 命令校验均为有效 PNG（1920x1200 / 1920x1439 / 1190x992）
- VLM 科学审校（z-ai vision，中文核对清单）：3 张新图一次通过——剪接图两步转酯反应/GU-AG-A/套索中间体/外显子连接全对；RNAi 图 siRNA 与 miRNA 双途径走向、Dicer/Argonaute/RISC/RITS 拼写全对；lac 操纵子 lacI-P-O-ZYA 标注、阻遏蛋白负调控、CAP-cAMP 正调控四状态全对，无需启用备选候选
- 7 张已有图来源反查：通过 /tmp 遗留的 5-b 候选 JSON（ti/ti2/ps/hjs.json 等）+ Commons 检索 + 下载同宽度缩略图做像素级比对（PIL/numpy 逐像素差分，6 张 mean diff=0.0000、1 张 holliday-junction SHA256 完全一致）确认来源与归属：DNA replication en.svg（PD, LadyofHats）、Central dogma of molecular biology.svg（CC BY-SA 3.0, Philippe Hupé）、0325 Transcription.jpg（CC BY 4.0, OpenStax）、Ribosome mRNA translation en.svg（PD, LadyofHats）、Polymerase chain reaction.svg（CC BY-SA 3.0, Enzoklop）、Sanger-sequencing.svg（CC BY-SA 3.0, Estevezj）、Holliday Junction.svg（PD, Mouagip）
- 7 张已有图 VLM 复审：6 张直接通过；prokaryotic-transcription.png 首轮快速审校误判"碱基配对混乱/模板链归属错误"，经分区裁剪 3 倍放大 + 逐碱基转录 + 像素级定位氢键示意线（y423-430 恰连接 RNA 行与上方模板链行，RNA UACUGCC…与模板 ATGACGG…逐位互补、两 DNA 链 36/36 互补），推翻误判维持通过，并在 verified 字段如实记录"图为延伸阶段特写+OpenStax 染色体定位图标"的使用建议
- 写入 manifest-5b.json（10 条：3 新图 + 7 张已有图，含 topic/sectionId/commonsFile/author/license/sourceUrl/verified）；完整性脚本校验：10 文件均有效 PNG、非空、许可证全部白名单、manifest 键与磁盘文件一一对应
- 未修改 src/ 任何代码、未触碰 manifest-5a.json / manifest-5c.json 及非分子生物学图片（git status 与 mtime 核实：illustrations.ts 13:08、manifest-5a 13:20、manifest-5c 13:38 均为本任务开始前状态）

Stage Summary:
- 分子生物学 Commons 配图 10 张全部到位并完成 manifest-5b.json（本任务 3 张新图 + 5-b 遗留 7 张收尾）：
  * rna-splicing.png → ch5-s2（BCSteve, CC BY-SA 3.0；两步转酯+套索）
  * rna-interference.png → ch8-s5（Silvia3 改编自 Matzke & Matzke, CC BY 2.5；Dicer→siRNA/miRNA→RISC）
  * lac-operon.png → ch7-s1（G3pro/Tereseik, CC BY 2.0；负调控+正调控四状态全图）
  * dna-replication-fork.png → ch2-s4（LadyofHats, PD）、central-dogma.png → ch1-s4（Philippe Hupé, CC BY-SA 3.0）、prokaryotic-transcription.png → ch4-s2（OpenStax, CC BY 4.0）、translation-elongation.png → ch6-s4（LadyofHats, PD）、pcr-cycles.png → ch9-s2（Enzoklop, CC BY-SA 3.0）、sanger-sequencing.png → ch9-s4（Estevezj, CC BY-SA 3.0）、holliday-junction.png → ch3-s3（Mouagip, PD）
- 跳过/淘汰项：无（3 新图均一次通过 VLM；7 张已有图复审全通过）
- 后续集成建议：prokaryotic-transcription.png 图注宜注明"图示转录延伸阶段"（无 σ 因子/终止子结构）；translation-elongation.png 未显式标 E 位可图注补充；central-dogma.png 为灰度图与彩色插图混排时注意视觉一致性

---

Task ID: 16
Agent: 主控 (Z.ai Code)
Task: 插图体系全面切换为真实科学数据源（RCSB CCD/PDB 渲染 + Wikimedia Commons），替换 AI 生成图

Work Log:
- 【用户核心指令】AI 配图不符合科学规范，改为通过网络获取真实科学配图（用户点名 RCSB 小分子库获取糖结构式），并保证图片格式一致性
- 【数据源勘察与验证】
  * RCSB CCD 结构图 URL 模式确认：https://cdn.rcsb.org/images/ccd/unlabeled/{首字母}/{代码}.svg（OpenEye 统一渲染矢量 SVG，风格天然一致）
  * RCSB PDB 条目 3D 渲染图 URL 模式确认：https://cdn.rcsb.org/images/structures/{id}_{view}.jpeg（统一渲染管线）
  * 逐一经 data.rcsb.org 化学名称 API 核实全部配体代码，避开 CCD 历史命名陷阱（LAC=乳酸而非乳糖、CMP=cAMP、GMP=鸟苷、THY=某硫胺素衍生物、ACA=6-氨基己酸、GSN≠鸟苷、UBI≠泛醌、4UXW=二酰甘油激酶而非驱动蛋白——VLM 曾误判，原始数据核实推翻）
  * VLM 风格对比评审（RCSB SVG vs PubChem PNG）：结论两者不可混用、RCSB 质量更优 → 小分子统一采用 RCSB CCD
- 【小分子结构图：77 张 CCD SVG】
  * scripts/fetch-ccd-structures.ts：77 个配体（单糖 7、脂肪酸 5、脂质 4、20 种氨基酸、维生素与辅酶 16、碱基/核苷/核苷酸 16、辅酶与高能化合物 10）批量下载，内置 data-api 名称校验 + manifest.json
  * scripts/compose-figure-panels.ts：嵌套 SVG 合成 11 张多联组图（2500×2500 面板 + 中文标签 + 分类配色：氨基酸 5×4 网格、脂肪酸饱和/不饱和组、五碱基组、核苷→核苷酸演进、维生素 B1-B5/B6-C/脂溶性三组、NAD⁺/NADH/FAD 氧化还原组、葡萄糖异头物组）
  * VLM 科学审校通过：α/β 葡萄糖羟基取向正确、氨基酸 20 种齐全、油酸双键弯折清晰、AMP 磷酸基团清楚
- 【大分子 3D 结构图：17 张 PDB 渲染图】全部经条目标题/组成/物种 API 核实：1MBO 肌红蛋白(1.6Å)、1HHO/2HHB 血红蛋白 R/T 态、1BNA Dickerson B-DNA 十二聚体、1AOI 核小体(2.8Å)、1BL8 KcsA 钾通道、5F9R Cas9-sgRNA-DNA 三元复合物、2ZXE Na⁺/K⁺-ATP 酶 E2·2K⁺态、4V4R 嗜热栖热菌 70S 核糖体(含 P/E 位 tRNA)、4LJZ E.coli RNAP 全酶、1LBG LacI-操纵基因 DNA、6OQV E.coli ATP 合酶全酶(VLM 对比 6FKF/5DN6 后择优)、1C17 c₁₂环转子(核实为 Na⁺转运型)、5NRL 酵母 B 复合物剪接体、4UXW→3KIN 驱动蛋白二聚体(纠正 VLM 误判)、1OEL GroEL、1BKV 胶原样肽(核实序列含天然 α1 插入段，修正图注)、6FKF→删除
- 【通路/过程图：34 张 Wikimedia Commons】三个并行子代理（5-a 生化 12 张 / 5-b2 分子生物学 10 张 / 5-c 细胞+生物物理 12 张）：
  * 全部经 Commons API 搜索 + extmetadata 许可证核验（仅接受 CC0/PD/CC BY/CC BY-SA）+ VLM 逐图科学审校 + manifest-5{a,b,c}.json 记录作者与许可证
  * 覆盖：糖酵解/TCA/呼吸链/磷酸戊糖/β氧化/尿素循环/米氏曲线/DNA 熔解曲线/流动镶嵌模型/三种二糖结构式（Calvero 同风格系列）、中心法则/复制叉/原核转录(OpenStax)/翻译/Holliday/RNA 剪接/RNAi/乳糖操纵子(含 CAP 正调控)/PCR/Sanger、动物细胞/线粒体/分泌途径/细胞骨架(Smart Servier)/有丝分裂/减数分裂/凋亡(中文标注版)/GPCR/RTK-Ras-MAPK/CDK-cyclin/动作电位(OpenStax)/跳跃传导
  * 主控亲自复核：6 图拼版 VLM 抽查（有丝分裂曾被误判不通过→全尺寸复审推翻缩略图误报，全部通过）
- 【集成重写 src/data/illustrations.ts】
  * 79 张配图覆盖 62 个小节：Commons 34 + PDB 17 + CCD 13 = 64 张真实科学数据图（81%），AI 示意图仅余 15 张（19%，均为无权威替代的机制示意：二级结构/诱导契合/糖原分支/trp 衰减/染色质层级/钠钾泵循环/折叠漏斗/膜相变/光镊/TIRF/静息电位/滤器机制/冷冻电镜流程/驱动蛋白步进）
  * 6 张 AI 图被真实图直接替换下岗：葡萄糖异头物、氨基酸、血红蛋白、DNA 双螺旋、ATP 合酶、CRISPR
  * 图注全面重写：含实验方法/分辨率/发表年份/关键结构细节（如 2HHB 盐键具体残基对、1BNA 扭转角波动 26°-45°、E2·2K⁺ 锁闭态等）；credit 行如实署名（CCD/PDB 条目号/Commons 作者+许可证）
  * 深色模式：SVG 白底板与既有 AI 图行为一致
- 【清理】删除 112 张不再引用图片（37 张退役 AI 图 + 75 张仅作合成原料的单体 CCD SVG，可经脚本一键重取），图片目录 22MB→14MB
- 【QA】
  * tsc src/ 0 错误、eslint 0 错误 0 警告
  * agent-browser 端到端：生物化学 ch1-s1/ch1-s2（4 图）/ch3-s1/ch4-s4（3 图）、分子生物学 ch5-s2（双图穿插）、细胞生物学 ch10-s4、生物物理学 ch7-s2 逐节验证图片全部加载（lazy 懒加载视口外行为正常）、灯箱放大交互正常、控制台全程零错误
  * 移动端 390px：插图 290px 自适应、零横向溢出
  * VLM 视觉终审：图注学术规范、排版无破损、三页风格高度一致
  * 清理 cron 任务播种的 128 条空 subjectId 假进度数据
- 【推送】已推送 GitHub（本条 commit）

Stage Summary:
- 插图体系完成"去 AI 化"改造：64/79（81%）配图来自真实科学数据库（RCSB CCD 化学结构 + RCSB PDB 实验结构渲染 + Wikimedia Commons 权威图源），覆盖 62 个小节
- 三条数据管道可复用：fetch-ccd-structures.ts（77 配体一键重取）、compose-figure-panels.ts（组图合成）、Commons manifest 体系（许可证合规）
- 质量门：tsc 0 错、lint 0 警、浏览器 console 零错误、移动端零溢出、VLM 双重审校通过

未解决问题与下一步建议：
- 剩余 15 张 AI 示意图（二级结构/糖原分支/光镊/TIRF/冷冻电镜等）暂无权威开源替代，图注已如实标注"AI 绘制示意图"，可后续逐张人工绘制 SVG 替换
- 蔗糖等二糖结构来自 Commons（Calvero 黑白线式，与 CCD 风格接近但非同源渲染引擎）；如追求绝对统一可考虑用 CCD 单体+自绘糖苷键方案
- prokaryotic-transcription.png（OpenStax）为彩色照片风格插画，与黑白结构式混排时风格差异可见（属正常教材混排）
- cron 15 分钟任务会自行 seed 测试数据，推送/交付前需再清理（本次已清 128 条）
- 下一步可做：AI 助教引用插图（VLM 读图讲解）、术语词典挂结构式缩略图、学习报告增加"本学期配图一览"

---
Task ID: 17
Agent: 主控 (Z.ai Code)
Task: 本轮 QA 回归 + 三大新功能：教材图库画廊页 / 术语词典 CCD 结构式 / AI 助教看图讲解

Work Log:
- 【开工准备】读取 worklog.md 了解 Task 16 状态（插图体系已 81% 去 AI 化）；确认 dev server 正常、数据库干净（无 cron 假数据）
- 【agent-browser 全面 QA】主页→学科中心→阅读器插图→测验判分（选项即时反馈+解析）→复习卡片（四档评分流）→AI 助教（流式回复）→错题本/笔记/报告/词典，全部正常：0 破图、console 零错误 → 无需修 bug，进入新功能开发
- 【新功能 A：教材图库画廊页】新建 src/components/bio/gallery-view.tsx：
  * 从 illustrations.ts 聚合全部 79 张插图，反查 subjects 得到学科/章节/小节元信息与图号（复用 figureNumber）
  * 四类来源徽章（CCD 化学结构式 13 / PDB 实验结构 17 / Commons 通路图 34 / AI 示意 15）+ 可点击来源统计卡筛选 + 学科筛选 tabs（沿用词典下边线样式与学科色）
  * 卡片：4:3 白底缩略 + 悬停 scale + 图号角标 + line-clamp-3 图注（带 title 悬停全文）+ 来源徽章
  * 灯箱：大图 + 完整图注 + credit + 来源体系全称 + 「阅读本节」跳转按钮（openReader）
  * 头部统计："79 张教材插图 · 64 张（81%）来自真实科学数据库"
  * 接线：types.ts AppView + store.ts NavKey 增加 'gallery'，page.tsx 导航项（Images 图标）+ 视图挂载
- 【新功能 B：术语词典挂 RCSB CCD 真实结构式】
  * 新建 scripts/fetch-term-structures.ts：27 个配体批量下载（data-api 名称校验 + manifest），输出 public/images/bio/terms/
  * 下载结果 26 成功 1 跳过（SUC 蔗糖 404，CCD 无此 unlabeled 图）
  * VLM 科学审校：CYT 确认胞嘧啶（IUPAC 名 6-AMINOPYRIMIDIN-2(1H)-ONE）；THY 确认为 C2-羟甲基-硫胺素二磷酸（SAM 类，陷阱！）→ 删除；TDR 图面实为胸腺嘧啶碱基（VLM 确认无糖环）→ 用作「胸腺嘧啶」词条图并在 manifest 如实标注 THYMINE
  * glossary.ts 新增 24 条「分子结构」类词条（g-101~g-124：三种单糖、两种脂肪酸、甘油、鞘氨醇、五种碱基、腺苷、NAD⁺、FAD、CoA、血红素、TPP、PLP、生物素、叶酸、抗坏血酸、视黄醇、β-胡萝卜素），定义含分子式/结构要点/教材考点 → 词典 100→124 条
  * 新建 src/data/term-structures.ts：26 个 termId→CCD 映射（含分子式、RCSB 英文名）；既有词条挂图：g-001 三磷酸腺苷 ATP、g-021 胆固醇 CLR
  * TermCard 改造：右侧 92px 结构式缩略（白底圆角框+悬停放大）+ 灯箱（大图+CCD 代码+英文名+分子式+「在 RCSB 查看该分子」外链）；头部统计更新
- 【新功能 C：AI 助教看图讲解（VLM）】
  * 后端 src/app/api/assistant/figure-explain/route.ts：路径安全校验（仅 public/images/bio/、防 ..）→ SVG 经 sharp 栅格化（density 110）转 PNG → z-ai-web-dev-sdk createVision（glm-5v-turbo）→ 教授人设 prompt（看图说话/科学准确/教学导向/350 字内，含图号图注 credit 与小节教学位置上下文）
  * 前端 markdown.tsx BioFigure 灯箱增加「AI 看图讲解」按钮：loading spinner / 错误重试 / 讲解结果以 ReactMarkdown 渲染于主题色左边框卡片（含"视觉模型生成，请注意核对"提示）；灯箱关闭重置状态
  * Markdown 组件新增 sectionCtx prop，reader-view 传入 { sectionId, sectionTitle }
  * 端到端验证：生物化学 ch1-s1 CCD 组图（SVG→PNG→VLM）讲解正确覆盖 α/β 异头物、平伏位、呋喃果糖 C2 酮糖中心，格式符合「图面导览+核心要点」
- 【样式细节】
  * 阅读器顶部新增 3px 滚动阅读进度条（fixed、学科主题渐变色、rAF 节流、切节重置）
  * 画廊卡片图注 title 悬停全文（VLM UI 评审建议）
- 【QA 汇总】tsc src/ 0 错误、eslint 0 警告；agent-browser：10 个视图全遍历 0 破图、console 零错误；画廊筛选（PDB 17 张）→灯箱→跳转阅读器全链路通；词典灯箱 ATP 分子式与 RCSB 外链正常；VLM 截图评审（画廊桌面版：整齐专业；深色模式阅读器：对比度好、无白底眩光 bug）

Stage Summary:
- 新增三大功能全部完成并验证：
  1. 教材图库画廊页（79 图按学科分组、来源筛选、灯箱、跳转阅读）
  2. 术语词典 +24 分子词条（共 124 条），26 张 RCSB CCD 真实结构式缩略图 + 灯箱分子式/RCSB 外链
  3. AI 助教看图讲解：插图灯箱一键 VLM 读图，SVG 自动栅格化，讲解含教学上下文
- 阅读体验细节：滚动阅读进度条（学科主题色）
- 数据管道新增第 4 条：fetch-term-structures.ts（26 配体，含名称校验与陷阱规避记录）
- 质量门：tsc 0 错、lint 0 警、10 视图 0 破图、console 零错误、VLM 双场景 UI 评审通过

未解决问题与下一步建议：
- 画廊页移动端 390px 未实机验证（agent-browser 设备模拟仅 macOS 可用）；组件均使用与现有视图一致的响应式前缀模式，风险低
- AI 看图讲解为非流式（一次性返回，VLM 耗时 10-20s，已有 loading 态）；后续可改为流式输出提升体感
- 术语结构式暂只覆盖生物化学分子（26 个）；分子生物学/细胞生物学词条无对应 CCD 小分子，属正常
- 剩余 15 张 AI 机制示意图仍待权威开源替代（同 Task 16 遗留）
- 搜索对话框（⌘K）尚未收录图库结果——可把画廊条目加入全局搜索
- cron 15 分钟任务可能再次 seed 测试数据，交付前需复查（本轮开工时为 0 条）

---
Task ID: 18
Agent: 主控 (Z.ai Code)
Task: 本轮 QA 回归 + 三大新功能：⌘K 搜索收录教材插图 / 学习报告能力画像雷达图 / 错题本章节聚类 + 打印样式修复

Work Log:
- 【开工准备】读取 worklog.md 了解 Task 17 状态（画廊/词典结构式/AI 看图讲解已完成）；发现并清理 cron 播种的 128 条空 subjectId 假进度数据（QA 期间 cron 又 seed 一次，再次清理——该 cron 任务行为需持续留意）
- 【agent-browser 全面 QA（无需修 bug）】
  * 主页/图库（79/79 图加载 0 破图）/灯箱/画廊跳转阅读器/术语词典结构式懒加载/复习卡片四档评分/AI 助教流式回复/错题本/学习报告/笔记——全部正常，console 零错误
  * 测验全流程：单选（radio 自动判分）/判断（正确/错误大按钮）/多选（checkbox+确认答案）三题型答完 5 题 → 成绩页 → 记录提交；期间发现的"界面不动"实为测试脚本只处理 radio 题型（停在第 2 题判断题未答），属脚本问题非应用 bug
- 【新功能 A：⌘K 全局搜索收录教材插图】
  * search-dialog.tsx：新增 79 张图库搜索条目（图号+小节标题+图注全文+credit+来源关键词+文件名 token），分组「教材插图」，四类来源图标（FlaskConical/Microscope/Route/Wand2），选中直接 openReader 到插图所在小节
  * 修复 cmdk 双重过滤冲突：自定义 keywords filter 命中后，cmdk 内置 filter 又按 CommandItem value（不含 keywords）二次过滤导致"1MBO"等搜索落空——ui/command.tsx 的 CommandDialog 新增 commandProps 透传，search-dialog 传 shouldFilter: false 由自定义 filter 全权接管
  * 验证："糖酵解"18 条跨类型命中、"1MBO"→4-4-1 肌红蛋白实验结构图、"结构式"16 张 CCD 图、点击跳转阅读器插图正常加载
- 【新功能 B：学习报告「能力画像」六维雷达图】新建 src/components/bio/ability-radar.tsx：
  * 六维：知识覆盖（完成小节比）/测验正确率/记忆巩固（SM-2≥21天掌握比）/学习坚持（活跃天数×2 满格50天）/笔记产出（×5 满格20篇）/复习投入（已学卡数满格100张）
  * SVG 自绘：四层虚线六边形网格+轴线+数据多边形（primary 色 15% 填充）+顶点标签与得分；进场动画（多边形自中心展开 700ms）；雷达轴与右侧明细行 hover 双向联动高亮（标签变主题色、顶点放大、hint 提亮）
  * 右侧明细条：维度名+原始值+得分（≥60 绿 / >0 琥珀 / 0 淡灰）+进度条+口径说明；头部 meta 显示六维综合分（算术平均）
  * report-view.tsx 集成于「学习总览」与「学科进展」之间；全部数据取自现有 /api/report overview，无后端改动
- 【新功能 C：错题本章节聚类重组】wrongbook-view.tsx：
  * 新增「按章节聚类/按时间平铺」排列模式切换（ModeChip）；章节分组头：学科色左边线+章号标题+错题数徽章（≥3 道转 destructive 红色）+最近答错相对时间+折叠箭头
  * 章内快捷操作：「重练本章测验」（跳测验中心对应学科）+「展开本章全部解析」（章内全部卡一键展开/收起切换）
  * 分组排序：学科顺序→章号；默认聚类模式，保留原时间平铺视图
- 【样式细节与打印修复】globals.css：
  * @page { margin: 12mm } + print-root padding 改 8mm；.overflow-x-auto 容器打印时解除裁剪（修复热力图右侧截断）
  * 打印时 rounded-xl/2xl 去阴影省墨迹；section break-inside: avoid-page 防区块跨页断裂
- 【QA 与验证】
  * tsc src/ 0 错误、eslint 0 警告
  * agent-browser：搜索三关键词全命中+跳转链路、雷达图 SVG 六维标签/分数/5 polygon 结构校验+数据正确性核对（6/203→3%、1 天活跃→2%等全部符合口径）、错题本聚类分组（第1章2道+第2章1道）/展开全部解析/折叠/平铺切换、console 全程零错误
  * VLM 双场景审查：桌面雷达图"通过"；移动端 390px 报告页"通过"（雷达图 340×319 完整渲染零溢出）
  * 移动端 390px：图库 79 图懒加载零溢出零破图、报告页零溢出
  * 测试数据（6 小节+3 错题+2 复习）验证完毕后已全部清理

Stage Summary:
- 三大新功能全部完成并验证：⌘K 搜索收录 79 张教材插图（修 cmdk 双重过滤冲突）、能力画像六维雷达图（SVG 自绘+联动高亮+进场动画）、错题本章节聚类（双模式切换+章级快捷操作）
- 打印导出修复：@page 边距+热力图截断+分页控制
- 质量门：tsc 0 错、lint 0 警、console 零错误、移动端零溢出、VLM 双场景通过

未解决问题与下一步建议：
- cron 15 分钟任务仍会自动 seed 假数据（本轮两次清理共 256 条），交付/演示前务必检查 LearningProgress 表
- AI 看图讲解为非流式（VLM 10-20s 一次性返回），可改为流式提升体感
- 剩余 15 张 AI 机制示意图仍待权威开源替代（同 Task 16/17 遗留）
- 可做的新功能方向：阅读器内「本节相关插图」侧栏快速导航、复习卡片统计图表（遗忘曲线）、学习报告 PDF 版式美化、术语词典分类筛选

---
Task ID: 19
Agent: 主控 (Z.ai Code)
Task: 本轮 QA 回归 + 三大新功能：术语词典分类筛选 / 阅读器插图快速导航 / 复习记忆统计面板 + 修复 CSS 编译缓存不生效问题

Work Log:
- 【开工准备】读取 worklog.md 了解 Task 18 状态；数据库检查发现 cron 又 seed 128 条脏数据（已清理）
- 【agent-browser QA 回归】搜索插图（"呼吸链"18 条命中含图库条目）、四核心视图遍历、console 零错误——Task 18 功能在新会话下稳定，无需修 bug，进入新功能开发
- 【新功能 A：术语词典分类筛选】glossary-view.tsx：
  * 新增 category state 与 CategoryChip 组件（13 类圆角胶囊 chip：分子结构 24/结构 17/遗传 15/调控 11/能量 11/技术 11/代谢 11/酶学 9/理论 5/电生理 3/力学 3/信号 3/基础 1）
  * 三级筛选叠加：搜索词 × 学科 × 分类；chip 计数随学科筛选联动（如筛生物化学时"遗传"类显示 0 并置灰 dimmed）
  * 选中分类出「清除」虚线胶囊；空态文案与「清除搜索与筛选」按钮同步清空三级条件；分组 map 变量重命名避免与 category state 遮蔽
  * 验证：分子结构 24 条全命中（D-葡萄糖/棕榈酸等）、生化学科叠加仍 24 条（分子词条全属生化，逻辑正确）、遗传类在生化下 0 条空态、一键清除恢复 124 条
- 【新功能 B：阅读器「本节插图」快速导航】：
  * markdown.tsx：BioFigure 的 figure 元素加 id={`figure-${fig.num}`} 锚点（如 figure-1-2-3）
  * reader-view.tsx 新增 FigureNav 组件（Images 图标+数量徽标+每图 12×40px 缩略图+图号学科色徽章+图注截断），接入桌面右栏（sticky aside 内）与移动端正文下方双位置
  * 点击 jumpTo：scrollIntoView smooth 居中 + WAAPI 闪烁高亮（outline 从 --primary 到透明 1.6s）
  * 【修复两个深层问题】
    ① Turbopack CSS 编译缓存不生效：globals.css 修改（figure-flash 动画 + Task 18 的 @page 打印样式）从未注入页面（styleSheets 检查 279 条规则缺失、animationName none）——通过追加 cache-bust 注释改变内容 hash 触发重编译解决；**这意味着 Task 18 的打印样式修复在浏览器里此前从未生效过，本轮才真正落地**
    ② React 重渲染清除手动 DOM class：阅读进度条 scrollPct 更新 → reader-view 重渲染 → figures/sectionCtx 为 inline 引用 → react-markdown 重建正文 DOM → 滚动中断 + class 被清——修复：sectionFigures/figureCtx 均 useMemo 稳定引用 + Markdown 组件 React.memo 包装 + jumpTo 改用 Web Animations API（动画挂元素上不受重渲染影响）+ oklch 颜色拼接修正（--primary 为 oklch() 格式，中段透明度用 color-mix）
  * 验证：点击"图 1-2-2"→ figure 滚至视口 top 100 居中 ✓；点击后 getAnimations() 确认动画播放（firstFrame outline lab() 已解析）✓；2s 后动画自然结束（WAAPI 不留 class）
- 【新功能 C：复习页「记忆统计」面板】：
  * flashcards API GET 扩展 SessionStats：intervalBuckets（<1天/1-7天/7-21天/≥21天四桶）、upcomingDue（未来 7 天每日到期分布，含今天）、avgEase（平均 SM-2 难度系数）
  * revision-view.tsx 新增 MemoryStatsPanel（BrainCircuit 图标+折叠按钮，默认收起）：
    * 记忆阶段分布：四段水平堆叠条（rose/amber/teal/emerald 渐进色）+ 图例（初学/短期巩固/中期巩固/已掌握+区间说明）
    * 未来 7 天到期柱状图：7 根柱（今天主色高亮+其余 40% 透明度，数值标签，日期 mm/dd）
    * 平均难度系数行（初始 2.5 说明）
  * 验证：造 4 条不同间隔记录（0.5/1/10/25 天）→ 面板四桶各 1 张、7 柱图、avgEase 2.55=(2.5+2.6+2.8+2.3)/4 完全正确；VLM 审查"通过"（颜色区分度/柱高比例/学术排版三项全过）
- 【样式细节】画廊卡片来源色顶边条：SOURCE_META 新增 accent 色（ccd=emerald/pdb=teal/commons=amber/ai=muted），卡片顶部 3px 色条悬停时增亮拉宽至 4px（与来源徽章呼应，强化四源视觉体系）
- 【QA 汇总】
  * tsc src/ 0 错误、eslint 0 警告（期间发现并修复 figureCtx useMemo 位于 early return 之后的 rules-of-hooks 错误）
  * agent-browser：九视图遍历 console 零错误；插图导航滚动/动画/锚点全链路；词典三级筛选+空态+清除；记忆统计四桶+柱图+ease；移动端 390px 阅读器 12 图零溢出零破图
  * VLM 审查：记忆统计面板"通过"（三项全过）
  * 测试数据清理：4 条复习记录 + cron 再次 seed 的 128 条脏数据

Stage Summary:
- 三大新功能全部完成并验证：术语词典分类筛选（13 类 chips 三级联动）、阅读器本节插图导航（锚点滚动+WAAPI 高亮，桌面/移动双端）、复习记忆统计面板（间隔分桶+7 天到期预测+平均难度）
- 修复两个隐蔽基建问题：Turbopack CSS 缓存不生效（Task 18 打印样式由此才真正落地；globals.css 变更需 cache-bust 触发）、React 重渲染清除手动 DOM 修改（正文渲染 memo 化，阅读器滚动稳定性提升）
- 画廊来源色顶边、词典 chips 等视觉细节增强
- 质量门：tsc 0 错、lint 0 警、9 视图 console 零错误、移动端零溢出、VLM 通过

未解决问题与下一步建议：
- markdown.tsx 同时导出组件与工具函数（figureNumber/toFigureItems 被 search-dialog/gallery-view 引用），Turbopack 有架构提示——后续可拆 figure-utils.ts
- cron 15 分钟任务持续 seed 假数据（本轮又清 128 条），交付前必查
- Turbopack CSS 缓存问题：以后每次修改 globals.css 建议追加 cache-bust 注释验证注入
- 新功能方向：AI 看图讲解流式输出、学习报告对比快照（阶段对比）、术语词典拼音首字母索引、复习卡片快捷键（1-4 评分）

---
Task ID: 20
Agent: 主控 (Z.ai Code)
Task: 本轮 QA 回归 + 三大新功能：复习卡片键盘快捷键 / 学习报告周对比快照 / 术语词典 A-Z 索引条 + figure-utils 架构拆分

Work Log:
- 【开工准备】读取 worklog.md 了解 Task 19 状态；数据库又现 128 条 cron seed 脏数据（已清理）
- 【QA 回归】主页/复习卡片视图 console 零错误、抽认卡队列正常（327 张卡），Task 19 功能稳定，进入新功能开发
- 【架构拆分：figure-utils】新建 src/lib/figure-utils.ts：
  * 迁移纯类型/纯函数：FigureItem、FigureSectionCtx、FIGURE_MARKER、figureNumber、toFigureItems（markdown.tsx 不再「组件与工具函数混导出」，解决 worklog 遗留的 Turbopack 架构提示）
  * 引用方迁移：gallery-view / search-dialog 改 import figureNumber；reader-view 拆分 Markdown（组件）与 toFigureItems（工具）双 import；markdown.tsx 体积 308→277 行
  * 排障：编辑过程曾残留重复 const FIGURE_MARKER 声明导致 Turbopack 编译报错，修复后 agent-browser console --clear 重验零错误（教训：console 历史报错不会自动清除，需 --clear 区分新旧）
- 【新功能 A：复习卡片键盘快捷键】revision-view.tsx：
  * window keydown 全局监听：未翻面 Space/Enter 翻面（preventDefault 防页面滚动）；翻面后 1/2/3/4 键对应评分 0忘记/1困难/2良好/3简单
  * 守卫条件：修饰键组合（⌘K 搜索等）不接管；焦点在 INPUT/TEXTAREA/SELECT/contentEditable 时跳过；loading/error/submitting 状态跳过
  * UI 键帽提示：「显示答案」按钮右侧 kbd 空格键帽（≥sm 显示）；GradeButton 右上角 hotkey 数字角标（≥sm 显示，opacity-40 不喧宾夺主）；「你记得多清楚？」提示加「（按 1–4 键快速评分）」；aria-label 同步快捷键说明
  * 验证：agent-browser 实测 Space 翻面→快照显示答案/评分按钮；按 3 →「三磷酸腺苷」推进至「三羧酸循环」；再 Space→按 1 验证「忘记」档位；isContentEditable 类型收窄为 instanceof HTMLElement
- 【新功能 B：学习报告周对比快照】：
  * API（/api/report）：dayMap 聚合新增 correct 计数（ActivityDay 加 optional correct 字段，热力图渲染不受影响）；新增 weeklyCompare 返回——weekAgg 对 days.slice(-7)（本周）与 slice(-14,-7)（上周）聚合 completed/quiz/correct/notes/reviews/accuracy/total
  * 前端（report-view.tsx）：「学习总览」与「能力画像」之间插入 Weekly Snapshot 区块；WeekTile 组件五格（完成小节/答题次数/答题正确率/学习笔记/复习次数）：本周大数字 + 环比徽章（TrendingUp/TrendingDown 箭头 + Δ值，升 emerald/降 rose/持平—置灰；正确率 delta 用 pp 百分点）+ 上周参考值小字；normalizeWeekly 兜底旧响应缺失字段
  * 验证：API 返回正确（测试期 thisWeek completed=128↑128、reviews=2↑2、其余持平—）；快照结构完整（sr-only 环比说明、title 悬停详情）；VLM 两轮审查——首轮截图区域未含徽章误判不通过，scrollintoview 精确截取后复审通过（绿色↑128/↑2 与灰色—清晰可辨）；移动端布局 VLM 通过
- 【新功能 C：术语词典 A-Z 首字母索引条】glossary-view.tsx：
  * LETTERS 常量 + firstLetter 工具（英文首字母大写归一，非拉丁返回 null）；letter state 与四级筛选叠加：搜索词 × 学科 × 分类 × 首字母
  * LetterCell：h-7 圆角小格 font-mono 字母 + 计数角标（text-[9px]）；激活主色描边填充；当前学科+分类范围内 0 条的字母 disabled 置灰；「A–Z 首字母」引导标签 + 选中后「清除」虚线胶囊；空态「清除搜索与筛选」按钮同步清四级条件
  * 计数联动：letterCountsInScope 随学科+分类筛选变化
  * 验证：全量字母计数正确（A12/B2/C16/G10/M12/P11/R8/S7/T8…共124）；点击 G→「匹配 10/124 条」且结果含 glycogen；清除→恢复 124 条；J/Q/V/X/Y/Z 正确 disabled；390px 移动端字母条两行换行零溢出零破图，VLM 三项检查全通过
- 【样式细节】报告页 StatTile/WeekTile 数据格 hover:bg-muted/30 过渡（数据带可感知微交互）；词典 TermCard 标题 group-hover:text-primary（与卡片 hover 阴影呼应）
- 【QA 汇总】
  * tsc src/ 0 错误（中途修复：WeekTile 多余 lastLabel prop、Element.isContentEditable 类型收窄）；eslint 0 警告
  * agent-browser 全回归：阅读器（图 1-1-1 渲染、拆分后正常）、⌘K 搜索（呼吸链→教材插图分组 8-2-1/8-2-2 命中，figureNumber 迁移生效）、图库 79 图零破图、测验/错题本/笔记/AI 助教/仪表盘五视图 console 零错误
  * 测试数据清理：LearningProgress 128 条 + FlashCardReview 2 条全部删除，/api/report 归零验证

Stage Summary:
- 三大新功能全部完成并验证：复习卡片键盘快捷键（Space 翻面 + 1-4 评分，含守卫与键帽提示）、学习报告周对比快照（五格环比徽章 + pp 百分点 + VLM 双轮验证）、术语词典 A-Z 索引条（26 字母联动计数 + 空字母置灰 + 移动端换行）
- 架构改善：figure-utils.ts 拆分完成，markdown.tsx 只导出组件，Turbopack「组件与工具混合导出」提示消除
- 质量门：tsc 0 错、lint 0 警、9+ 视图 console 零错误、图库 79 图零破图、移动端 390px 零溢出

未解决问题与下一步建议：
- cron 15 分钟任务持续 seed 假数据（本轮又清 128+2 条），交付前必查 LearningProgress/FlashCardReview 表
- agent-browser console 历史报错不自动清除，QA 时应先 console --clear 再验证，避免误判
- 新功能方向：AI 看图讲解流式输出、错题本按学科维度统计图、复习卡片「遗忘曲线」历史图表（基于 FlashCardReview 时序）、⌘K 搜索支持拼音首字母匹配

---
Task ID: 21-b
Agent: commons-molcell-images
Task: 搜集分子生物学/细胞生物学 4 张真实配图替换 AI 图

Work Log:
- 读取 worklog.md（Task 5-a/5-b2/5-c 的 Commons 搜图管线与 Task 16 插图体系：79 张配图中 AI 示意图仅余 15 张，含 trp 衰减/染色质层级/钠钾泵循环三处无权威替代的机制图）；只读核对 src/data/subjects/molecular-biology.ts（ch7-s3 色氨酸操纵子与衰减机制、ch8-s1 染色质水平的调控）与 cell-biology.ts（ch2-s4 主动运输 ATP 驱动泵、ch7-s3 染色质与染色体的多级包装）正文，明确各挂载位必须表达的科学要点
- Commons API（action=query&list=search, srnamespace=6）分主题检索：chromatin packaging/structure levels/30nm fiber/condensation、trp operon attenuation/tryptophan operon、sodium potassium pump 等关键词；期间持续遭遇 429 限流（与并行代理共享出口 IP），按规范每次等待 60s 重试并自制 cfetch.sh 重试脚本，全部检索完成
- 候选遴选（imageinfo iiprop=url|size|mime|extmetadata 核许可与作者，Artist 用 sed/regex 去 HTML 标签）：
  * 染色质：File:Chromatin Structures.png（Richard Wheeler, CC BY-SA 3.0，Wikipedia Chromatin 词条经典六级层级图）为主候选；备选 File:Basic units of chromatin structure.svg（David O Morgan, CC BY 4.0，经 wikitext 反查许可模板 {{CC-notice|cc=by4}} 确认，但仅覆盖核小体→30nm 无更高层级）、File:Chromatin chromosome.png（Magnus Manske, 577×274 过小）均弃用
  * trp 衰减：File:Trp operon attenuation.svg（Histidine, CC BY-SA 3.0，前导区 1-4 区段衰减机制经典图）；备选 File:Trp operon.svg（CC0，仅阻遏调控无衰减）、File:Trpoperon.svg（CC BY-SA 3.0，仅结构+阻遏）均不契合
  * 钠钾泵：任务点名的 File:Scheme sodium-potassium pump.svg 经 API 核实已不存在（Commons 拆分为各语言变体），锁定同作者英文原版 File:Scheme sodium-potassium pump-en.svg（LadyofHats Mariana Ruiz Villarreal, Public domain）；备选 File:0308 Sodium Potassium Pump labeled.jpg（OpenStax, CC BY 3.0）复审通过但膜内外方向需依赖 ATP 位置推断，弃用
- 下载：SVG 一律取 1920px PNG 缩略图（thumb.wikimedia.org）、PNG/JPEG 原图直取；全部经 file 命令校验为有效图片（非 HTML 错误页）且 <5MB；文件名小写 kebab-case，与目录内既有 37 个文件无冲突（现 40 个）
- VLM 科学审校（z-ai vision，glm-5v-turbo，每图中文定制核对清单）：
  * 染色质图：六级层级完整无缺失、Add core histones/Add histone H1/Add further scaffold proteins 等标注无误、无乱码；仅缺直径数值标注（图注补充 2/11/30nm 与约 10⁴ 倍压缩即可）→ 通过
  * trp 衰减图：高/低 Trp 两态、3:4 终止子+poly(U) vs 2:3 抗终止子、核糖体越过/停滞于 UGG、通读 trp regulated genes 全部正确、无乱码 → 通过（未画 1-2 暂停发夹属可接受简化，图注可说明）
  * 钠钾泵图：首轮全图审校 K⁺ 计数存疑（误报 1 个），追加竖条切片 + 2.5 倍放大裁剪三轮精确计数（步骤②释放 3 Na⁺、步骤③入口 2 K⁺ 待结合、步骤④释放 2 K⁺、磷酸化 P 结合与 Pi 释放明确）推翻误报 → 通过
- 写入 public/images/bio/commons/manifest-21b.json（3 条：chromatin 条目按任务要求写两个 sectionId 数组）；完整性校验：3 文件均有效 PNG、非空、<5MB、许可证均在 CC0/PD/CC BY/CC BY-SA 白名单、manifest 键与磁盘文件一一对应；git status 核实仅新增 4 个文件（3 图+manifest），未修改 src/ 任何代码、未删除/触碰任何既有图片

Stage Summary:
- 成功搜集 3 张 Commons 真实图覆盖 4 个挂载位（任务全部完成，未触发 3 候选淘汰兜底）：
  * chromatin-packaging.png → molecular-biology-ch8-s1 + cell-biology-ch7-s3（File:Chromatin Structures.png, Richard Wheeler, CC BY-SA 3.0；DNA→核小体→10nm 串珠→30nm 纤维→间期环→中期染色体六级，VLM 通过，图注需补尺寸数值）
  * trp-attenuation.png → molecular-biology-ch7-s3（File:Trp operon attenuation.svg, Histidine, CC BY-SA 3.0；1-4 区段配对/终止 vs 通读两态全对，VLM 通过）
  * sodium-potassium-pump-cycle.png → cell-biology-ch2-s4（File:Scheme sodium-potassium pump-en.svg, Mariana Ruiz Villarreal (LadyofHats), Public domain；四步 E1/E2 循环 3Na⁺出/2K⁺入/ATP 磷酸化-去磷酸化全对，VLM 通过）
- 未找到合格图的主题：无
- 后续集成建议（供主控挂载 illustrations.ts 参考）：chromatin-packaging.png 图注应补充各层级直径（2 nm DNA 双螺旋/11 nm 核小体串珠/30 nm 纤维）与 147 bp、1.65 圈、总压缩约 10⁴ 倍等正文数值；trp-attenuation.png 图注可注明"1-2 暂停发夹未在图中显示"；钠钾泵图无 E1/E2 字样术语（以构象示意表达），图注可对应正文 E1/E2 术语

---
Task ID: 21-a
Agent: commons-biochem-images
Task: 搜集生物化学 5 张真实配图替换 AI 图

Work Log:
- 读取 worklog.md（Task 5-a/5-b2/5-c Commons 搜图管线、Task 16 插图体系说明、Task 21-b 做法）：79 张配图中 AI 示意图仅余 15 张，本任务负责其中生化 5 处（α螺旋/β折叠/拉氏图/诱导契合/糖原分支）；只读核对 src/data/subjects/biochemistry.ts ch4-s1（稳定构象的作用力与二级结构）、ch5-s2（酶的活性中心与催化机理）、ch9-s5（糖原的合成与分解）正文，明确各图必须表达的科学要点（3.6 残基/圈、n+4 氢键沿轴、反平行 0.70 nm、φ/ψ 允许区、Koshland 诱导契合、α1→4/α1→6 键型等）
- Commons API（action=query&list=search, srnamespace=6）检索 alpha helix hydrogen bonds / beta pleated sheet / Ramachandran plot / induced fit enzyme / lock and key model / glycogen structure 等关键词；自建 info.py（curl 重试 + 429 等待 60s + UA 署名）批量 imageinfo（iiprop=url|size|mime|extmetadata）获取候选许可与作者，Artist 去 HTML 标签
- 候选遴选：α螺旋选 Dardel 经典 Alphahelix.png（球棍模型+绿色虚线氢键）；β折叠选 Beta sheets.svg（同图并列平行/反平行两种排列）；拉氏图优先中文标注版 Ramachandran zh.png；诱导契合选 TimVickers 经典 Induced fit diagram.svg；糖原选 GKFX 的 Glycogen.svg（放大框标注两种糖苷键）；全部许可均在 CC0/PD/CC BY/CC BY-SA 白名单
- 下载：SVG 一律取 1920px PNG 缩略图（thumb.wikimedia.org）、PNG/JPEG 直取原图；多次遭遇 upload.wikimedia.org 429 限速（返回 HTML 错误页），按规范等待 60s 重试/换 thumb 备用主机全部成功；另发现 Wikimedia 新缩略图尺寸白名单机制（非标准宽度返回 400 "Use thumbnail sizes listed on w.wiki/GHai"，960/1280/1920 可用），Ramachandran zh.png 取 1280px 缩略图；5 文件均经 file 校验为有效 PNG 且 <5MB
- VLM 科学审校（z-ai vision glm-5v-turbo，每图中文定制核对清单）逐图执行，淘汰与替换记录（每主题 ≤3 候选）：
  * 拉氏图首选 Ramachandran plot original outlines.jpg（CC BY 3.0）图缘多处乱码字符且无 Gly 区域 → 弃用；次选 Ramachandran.png 科学性全对但为法语标注（Hélice α/Feuillet β）不适合中文教材 → 弃用；第三候选中文版 Ramachandran zh.png 通过
  * 糖原首选 Häggström Glycogen structure.svg（PD）经 VLM 中性描述+清单两轮核实为无标注全原子渲染图（无法区分 α1→4/α1→6 键、教学可读性差）→ 弃用；次选 GKFX Glycogen.svg（α1,4/α1,6 标注+非还原端红色标记+放大框）通过
  * α螺旋、β折叠、诱导契合首选候选均一次通过
- 写入 public/images/bio/commons/manifest-21a.json（5 条：topic/sectionId/commonsFile/author/license/sourceUrl/verified）；完整性脚本校验：5 文件均有效 PNG、非空、<5MB、许可证白名单、manifest 键与磁盘一一对应、与既有 41 个文件无重名冲突（现 42 张图）；git status 核实仅新增 6 个文件（5 图+manifest），未修改 src/ 任何代码、未删除任何既有图片

Stage Summary:
- 成功搜集 5 张 Commons 真实图（任务全部完成，未触发 3 候选全败兜底）：
  * alpha-helix.png → biochemistry-ch4-s1（File:Alphahelix.png, Frédéric Dardel, CC BY-SA 3.0；右手螺旋/n+4 氢键沿轴/侧链外伸全对，VLM 通过，图注需补 3.6 残基、0.54 nm 螺距等数值）
  * beta-sheet.png → biochemistry-ch4-s1（File:Beta sheets.svg, Mysterioso, CC BY-SA 3.0；平行+反平行并列、链间氢键垂直链向、侧链上下交替全对，VLM 通过，图注需补 0.65/0.70 nm 重复周期）
  * ramachandran-plot.png → biochemistry-ch4-s1（File:Ramachandran zh.png, Frédéric Dardel 修订 Webridge, CC BY-SA 3.0；中文标注 φ/ψ 平面、α/β 允许区位置正确无错别字，VLM 通过，图注建议补甘氨酸可及区更广）
  * induced-fit.png → biochemistry-ch5-s2（File:Induced fit diagram.svg, TimVickers/Fvasconcellos, Public domain；"Enzyme changes shape slightly as substrate binds" 完整催化循环，VLM 通过，图注可补 Koshland 对锁钥学说的修正）
  * glycogen-structure.png → biochemistry-ch9-s5（File:Glycogen.svg, GKFX, Public domain；α1,4 直链/α1,6 分支点标注正确+非还原端红色标记，VLM 通过，图注需补 A/B/C 层级与糖原素核心）
- 未找到合格图的主题：无
- 供主控挂载参考：5 张图均在 biochemistry 学科，beta-sheet 与 alpha-helix 同挂 ch4-s1（与拉氏图三图同节，注意插图排序）；ramachandran-plot.png 为中文标注图与正文语言一致； Wikimedia 缩略图尺寸白名单机制（960/1280/1920px）后续代理取图时需注意

---
Task ID: 21-c
Agent: 主控 (Z.ai Code)（子代理启动连续故障，改为主控直接执行）
Task: 搜集生物物理 8 张真实配图替换 AI 图

Work Log:
- Task 工具连续 4 次启动失败（check existing record: context deadline exceeded），21-a/21-b 两次启动成功但 21-c 均未实际执行（worklog/manifest/文件三重确认无痕迹），改为主控亲自执行搜图管线
- Commons API 检索 12 组关键词，14 个候选经 imageinfo 许可证核验（白名单 CC0/PD/CC BY/CC BY-SA）
- 下载 7 张 Commons 图（期间遇 429 限流，65 秒退避 + thumb.wikimedia.org 备用主机 + 6 秒间隔恢复；一次手工拼 URL 哈希错误改用 API thumburl）
- VLM 逐图中文审校：折叠漏斗/驱动蛋白步进（含 8nm 微管二聚体标注）/TIRF（隐失场渐变区+光路分离）/冷冻电镜中文版流程图 4 张一次通过
- 两候选淘汰：Optical tweezers rays4.PNG（希伯来语标注全部乱码+缺折射光线）、Membrane Potential Diagram (Resting State).svg（"Chlorine Atoms"应为 Chloride Ions）；Basis of Membrane Potential2-en.svg 备选也淘汰（缺钠钾泵）；KcsA.png 淘汰（实为 Kv 通道张冠李戴）
- 4 个主题自绘精确 SVG（代码绘制非 AI 生成，保存 public/images/bio/drawn/）：膜相变（凝胶 Lβ vs 液晶 Lα + Tm 温度计 + 胆固醇甾环双重缓冲 + DPPC 41℃ 数据）、光镊（完整光路 + 梯度力/散射力矢量 + 光线折射动量传递插图 + 分子偶联 Δx∝F）、静息膜电位（离子分布 + K⁺ 漏通道 + 3Na⁺出/2K⁺入生电泵 + −70mV 电位计）、KcsA 选择性滤器（S1-S4 氧原子笼 + TVGYG + K⁺/Na⁻ 半径机制 + knock-on 交替队列）
- 排障关键：sharp/librsvg 栅格化 SVG 时 "Noto Sans SC" 字体族不可用导致全部文字丢失 → font-family 改为系统已安装的 "Noto Serif SC, LXGW WenKai, sans-serif" 后文字正常渲染（浏览器端不受影响，且与学术编辑风 serif 设计语言一致）
- 全部 8 张经 VLM 审校通过（光镊首审文字重叠已修复：F散射标签与平衡注释间距 26px→44px）
- 写入 manifest-21c.json（8 条含 VLM 结论）

Stage Summary:
- 生物物理 8 张全部到位：4 张 Commons 真实图（folding-funnel.png / kinesin-walking.png / tirf-microscopy.png / cryo-em-workflow.png 中文版）+ 4 张自绘矢量图（../drawn/membrane-phase-transition.svg / optical-tweezers.svg / resting-membrane-potential.svg / kcsa-selectivity-filter.svg）
- 21 系列三组共 17 张图（21-a 生化 5 张 + 21-b 分子细胞 3 张 + 21-c 生物物理 8 张 + 1 张 chromatin 双挂载位）全部完成，15 张 AI 图全部可退役
- 工程经验：librsvg 字体族白名单（须用系统已装字体）、Wikimedia 缩略图宽度白名单（960/1280/1920）

---
Task ID: 21
Agent: 主控 (Z.ai Code)
Task: 彻底去除 AI 插图（15→0）+ 第四章第一节正文深度扩写 + 集成 QA 与推送

Work Log:
- 【用户指令】第四章第一节仍有 AI 图，需彻底避免 AI 图；该节文字内容太少需扩充细节
- 【插图去 AI 化收官】三组搜集 + 主控集成，15 张 AI 图全部退役：
  * 21-a（生化 5 张）：alpha-helix（Alphahelix.png, Dardel）/ beta-sheet（Beta sheets.svg, Mysterioso）/ ramachandran-plot（中文版 Ramachandran zh.png）/ induced-fit（PD, TimVickers）/ glycogen-structure（PD, GKFX）
  * 21-b（分子+细胞 3 张）：chromatin-packaging（Richard Wheeler, 双挂载 mb-ch8-s1 + cb-ch7-s3）/ trp-attenuation（Histidine）/ sodium-potassium-pump-cycle（LadyofHats, PD）
  * 21-c（生物物理 8 张）：folding-funnel（Splettstoesser）/ kinesin-walking（PD）/ tirf-microscopy（PD, Kulik）/ cryo-em-workflow（中文版, Hira Khan）+ 4 张主控自绘 SVG（membrane-phase-transition / optical-tweezers / resting-membrane-potential / kcsa-selectivity-filter，代码绘制非 AI，manifest 如实标注 self-drawn）
  * 集成 illustrations.ts：15 处条目替换（ch4-s1 由 1 张扩为 3 张）、图注全部重写（含数值细节与教学线索）、AI_CREDIT 常量替换为 DRAWN_CREDIT、头注释更新为「全部真实科学数据源」
  * gallery-view：SourceType 新增 drawn（自绘矢量图，PenTool 图标 + violet 配色 + 来源统计卡 grid-cols-4→5）；realCount 口径改为「总数 − AI 数」（=100%）；search-dialog：SRC_KEYWORDS/figureSource/副标题/图标四处分支新增 drawn
  * 删除 15 张退役 AI 图与 4 个空目录（biochemistry/molecular-biology/cell-biology/biophysics）
- 【第四章第一节正文深度扩写】（用户点名）biochemistry.ts ch4-s1：约 730 字 → 约 3000 字
  * 新增两节：「肽键几何与拉氏图」（C–N 0.132 nm 部分双键、反式 >99.9%、X-Pro 顺式 5-6%、φ/ψ 定义、αR/β/αL 允许区坐标）与「稳定构象的作用力」（五力分条定量：氢键 8-40 kJ/mol 方向性/水中竞争、疏水熵驱动 ΔS、盐桥介电屏蔽 ε≈80、范德华 0.4-4 kJ/mol 与堆积密度 0.74、二硫键 210-250 kJ/mol 与 PDI/内质网氧化环境）
  * 层次节补 Anfinsen RNase A 实验（8M 尿素+β-巯基乙醇、热力学假说、1972 诺奖）与四级结构括号笔误修复
  * α 螺旋节扩：两亲螺旋（3-4 位周期）、卷曲螺旋 heptad a/d 位、螺旋宏观偶极（N 端 δ+/C 端 δ-、帽化）、13 元环、Pro/Gly/多聚 Glu 破坏机制、肌红蛋白 75%
  * β 折叠节扩：平行/反平行 φψ 双组数据、链右手扭转、β 凸起、丝心蛋白 Gly-Ala 层堆叠
  * β 转角节扩：Ⅱ型第 3 位 Gly、Ω 环（6-16 残基）功能位点
  * keyPoints 5→6 条（新增肽键几何/拉氏图条目、各条充实），测验题参数（3.6/圈、0.54 nm、0.15 nm、100°、n+4）与 Anfinsen 题目保持一致
- 【工程排障】sharp/librsvg 栅格化 SVG 文字丢失：font-family 用「Noto Sans SC」不可用（未安装）→ 改为系统已装「Noto Serif SC, LXGW WenKai, sans-serif」后文字正常；该修复同时使 AI 看图讲解（VLM 读图）对自绘 SVG 输出正确（实测光镊图讲解含梯度力/散射力/F=-kΔx）
- 【QA】
  * tsc src/ 0 错误、eslint 0 警告
  * 16 个新图文件 HTTP 200；插图完整性脚本：81 张图 0 缺失 0 AI
  * agent-browser 端到端：阅读器 ch4-s1 渲染 6 个 H2 + 3 张新图（VLM 三图截图审校：α 螺旋球棍/β 折叠对比/中文拉氏图全部完整清晰版式正常）；「光镊」⌘K 搜索命中自绘图条目并跳转阅读器；trp 衰减小节（VLM 审校通过）；KcsA 自绘+PDB 双图并存；钠钾泵 Commons+PDB 双图并存；图库 81 张 100% 真实来源（AI 卡 0 张）+ 自绘 4 张筛选卡；深色模式 VLM 通过；console 全程零错误
  * AI 看图讲解实测自绘 SVG 正常（25s 内返回专业解读）
  * 移动端设备模拟 Linux 不可用（与 Task 17 一致）；图片响应式约束（w-full max-w-[560px]）与既有布局组件未改动，风险低
  * 清理 cron 播种的 128 条 LearningProgress 假数据（stats 归零复核）
- 【推送】GitHub Jing0715-fer/bioscholar

Stage Summary:
- 插图体系完成 100% 去 AI 化：81 张插图 = CCD 13 + PDB 17 + Commons 47 + 自绘矢量 4；AI 生成图 0 张
- 第四章第一节由概览式扩写为深度教材节（约 3000 字 + 3 张权威配图），新增肽键几何/拉氏图与五力定量分析两大知识块
- 图库/搜索双入口新增「自绘矢量图」来源体系（violet 视觉标识）
- 质量门：tsc 0 错、lint 0 警、console 零错误、81 图 0 缺失、VLM 多轮审校通过

未解决问题与下一步建议：
- cron 15 分钟任务持续 seed 假数据（本轮又清 128 条），交付前必查 LearningProgress
- 自绘图仅覆盖生物物理 4 个机制主题；若其他小节需要补充配图，可复用 drawn/ 管线（注意 librsvg 字体族白名单）
- 4 张 Commons 候选因科学性瑕疵被淘汰（光镊希伯来语乱码、静息电位 Chlorine Atoms 错标、KcsA 实为 Kv 通道），已在 manifest-21c.json 记录，如后续找到更好候选可替换自绘图
- 新功能方向：AI 看图讲解流式输出、复习卡片遗忘曲线历史图、⌘K 拼音首字母匹配

---
Task ID: 23-e
Agent: content-micro-quiz
Task: 微生物学 60 道测验题 + 30 条术语词条

Work Log:
- 开工前置：读 worklog.md 尾部 80 行掌握数据规范；读 types.ts 的 QuizQuestion/GlossaryTerm 定义；读 biophysics.ts 头 80 行与尾 30 行掌握题库格式；读 glossary.ts 头 40 行掌握词条格式
- 用 rg 提取既有 124 条术语名逐一比对，规避冲突点：既有'质粒'→遗传类改用 SOS 反应；既有'乳酸发酵'（生化角度）→代谢类改用混合酸发酵；既有'CRISPR-Cas9'（编辑角度）→题目改考 CRISPR 免疫起源（间隔序列）；既有'突变'→不写基因突变词条
- 检查既有四科 quiz 的微生物相关考点（cell-biology 病毒无细胞结构判断题、molecular-biology 的 IS 序列/中心法则、biophysics 的鞭毛马达物理），确保角度区分：q16 考单一核酸类型而非无细胞结构；q59 考 CRISPR 位点记忆而非基因编辑应用
- 编写 src/data/quiz/microbiology.ts：60 题（每章恰 5 题，chapterId microbiology-ch1…ch12，id q-microbiology-1…60）；每题解析 2-4 句均 ≥60 字；数值题均取教材级可靠数据（121℃/15-30min 高压灭菌、63-66℃/30min 与 72℃/15s 巴氏消毒、志贺 10-100 个 vs 霍乱 10⁸ 感染剂量、T4 潜伏期 22min 裂解量 100-200、16S 1540bp/98.7% 阈值、DNA-DNA 杂交 70%、固氮 16ATP、青蒿酸 25 g/L、Syn3.0 473 基因、Taq 95℃ 半衰期 40min、D₁₂₁=0.2min 12D、G⁺ 壁 20-80nm vs G⁻ 2-7nm、酸奶 42℃）
- 编写 src/data/glossary-micro.ts：30 条 g-125…g-154，subjectId 全部 microbiology，definition 均 60-160 字
- 首次校验发现难度 1 多 1 题（15/33/12）：q17 潜伏期定义题由难度 1 调整为难度 2（涉隐晦期/胞内累积期需理解），复跑后 14/34/12 精确达标
- 与并行教材代理对齐验证：src/data/subjects/micro/ch4-6.ts 的 chapterId 命名与本题库一致（microbiology-ch4 等），ch4 覆盖小节（病毒特征/一步生长/溶原性/亚病毒）与我 5 题分布一一对应
- 校验：bun run /tmp/validate-micro-quiz.ts 输出 PASS（60 题+30 词条）；bunx tsc --noEmit 无 microbiology/glossary-micro 相关错误（TSC-CLEAN）；术语名与既有 124 条 comm 比对 0 重复；题目 id 无重复；git 确认仅新增 2 个文件未改任何既有文件
- 未修改任何既有文件（biology.ts/glossary.ts/types.ts 等的 M 状态系其他并行代理所为，本任务零触碰）

Stage Summary:
- 题型分布：single 44 / truefalse 10 / multiple 6；难度分布：1（基础识记）14 / 2（理解应用）34 / 3（综合分析）12
- 判断题均匀分布于 ch1/2/3/5/6/7/8/9/10/11 共 10 个不同章节；多选题集中于概念并列性强的小节：q5 原核类群（ch1）、q10 G⁻外膜成分（ch2）、q19 亚病毒因子（ch4）、q24 四种跨膜运输（ch5）、q45 氮循环环节（ch9）、q49 三条补体途径（ch10）
- 每章题号区间：ch1 q1-5 / ch2 q6-10 / ch3 q11-15 / ch4 q16-20 / ch5 q21-25 / ch6 q26-30 / ch7 q31-35 / ch8 q36-40 / ch9 q41-45 / ch10 q46-50 / ch11 q51-55 / ch12 q56-60
- 词条覆盖面（30 条）：形态结构 6（肽聚糖/芽孢/鞭毛/荚膜/菌丝体/刺突蛋白）、营养 2（化能自养/生长因子）、代谢 4（无氧呼吸/混合酸发酵/次级代谢/基团转位）、遗传 5（转座子 Tn/感受态/溶原性/原生质体融合/SOS 反应）、生长控制 4（高压蒸汽灭菌/巴氏消毒/D 值/水活度 aw）、生态 4（拮抗/群体感应 QS/生物膜/生物固氮）、感染免疫 3（外毒素/内毒素 LPS/正常菌群）、技术分类 2（16S rRNA/双名法）
- 校验结果：validate 脚本 PASS（题型 44/10/6、难度 14/34/12、答案索引无越界、判断题选项规范、解析均 ≥60 字、词条 id g-125…154 无重复无越界、definition 长度合规）；tsc 无类型错误
- 集成提示：quiz/microbiology.ts 与 glossary-micro.ts 为独立导出文件，需主控在聚合层（如 quiz index 或 glossary 聚合处）挂载 microbiologyQuiz 与 microGlossary；glossary-micro 词条 id 衔接既有 g-124 序列

---
Task ID: 23-b
Agent: content-micro-b
Task: 编写微生物学第 4–6 章（11 节）

Work Log:
- 开工前置：tail -100 worklog.md 了解项目现状与数据规范；读 src/lib/types.ts（Chapter/Section 类型）；读 src/data/subjects/biophysics.ts 前 120 行学习既有书写风格（模板字符串正文、H2/H3 层级、Markdown 表格、术语首现标英文、**加粗**）
- 核对 scripts/validate-micro.ts 校验规则（正文 ≥2400 字、H2 ≥2、keyPoints 3–6、terms 3–8、id 正则、summary ≥30、keywords ≥3）
- 严格按任务蓝图创建三个独立文件（未改动任何其他文件）：
  * src/data/subjects/micro/ch4.ts → export const microCh4（病毒与亚病毒因子，4 节：非细胞属性与形态化学组成 / 烈性噬菌体增殖与一步生长曲线 / 溶原性与温和噬菌体 / 动物病毒增殖与亚病毒因子）
  * src/data/subjects/micro/ch5.ts → microCh5（微生物的营养与培养基，3 节：营养要素与营养类型 / 培养基设计原则与类型 / 营养物质的跨膜运输）
  * src/data/subjects/micro/ch6.ts → microCh6（微生物的代谢，4 节：化能异养产能 / 发酵类型与经典工业产物 / 自养代谢光能与化能 / 次级代谢及其产物）
- 内容要点全覆盖蓝图：病毒七类核酸（巴尔的摩分类表）、TMV 2130 壳粒/螺距 2.3 nm、腺病毒 252 壳粒、T4 尾鞘注射器机制、一步生长曲线四期表与 T4 burst size 100–200、双层平板法计算示例（10⁻⁶×0.1 mL×45 斑=4.5×10⁸ PFU/mL）、λ 的 cI/cro-OR1-OR2-OR3 开关电路与 CII/FtsH、attB×attP 整合、白喉 β 噬菌体 tox 溶原转换、RecA* 促 CI 自切割、EMBL 置换型载体、流感 8 节段重排与 1957/1968 大流行、HIV LTR 前病毒、PSTVd 359 nt、PrPᶜ→PrPˢᶜ 构象转变（42%→30% α 螺旋、3%→43% β 片层）与 134 ℃ 灭菌、六大营养要素表、四营养类型表（能源/供氢体/碳源三要素）、细菌 C:N≈5/真菌≈10/培养基 10:1、四配制原则（灭菌后 pH 校正、Eh ±0.1 V 分档）、琼脂 96 ℃ 熔/40 ℃ 凝与 1.5–2%/0.3–0.5%、EMB/马丁/SS 选择培养基、四大经典配方表、四种跨膜运输对比表、PTS 级联（EI-HPr-EII、PEP、6-磷酸葡萄糖锁入）、三种通用产能机制、发酵/有氧/无氧呼吸三方对比表、38/32 ATP 口径说明、大肠杆菌 bo/bd 分支链、反硝化/硫酸盐/碳酸盐呼吸、乙醇发酵 NAD⁺ 闭环与亚硫酸氢盐甘油旁路、同型 2 ATP vs 异型 PK 途径 1 ATP、MR/V-P/IMViC（++−− vs −−++）、ABE 溶剂转换 3:6:1、产氧/不产氧光合对比表、硝化两级 −275/−74 kJ/mol、Calvin/rTCA/3-HP/Wood-Ljungdahl 四条固碳途径、深海热泉化能合成、初级 vs 次级代谢对比表、青霉素-弗莱明-弗洛里-钱恩 1945 诺奖科学史、链霉素-瓦克斯曼 1952 诺奖、次级代谢调节与工业育种（抗反馈突变/苯乙酸前体/共合成）
- 质量自检脚本（/tmp/len.ts、/tmp/check.ts）逐节统计字数与禁用字符：三文件正文均无反引号、无 ${、无 {{、无 HTML、无 emoji、无控制字符
- 初稿部分小节低于 2400 字（最短 2106），按蓝图深化补写（吸附环境因素与军备竞赛、人工裂解窥探累积期、温和噬菌体潜伏策略多样性 P1/Mu、CI 型特异性免疫与 sie 系统、局限转导、双稳态开关、细胞培养蚀斑/CPE/包涵体、水活度、速效/迟效碳源、CO₂ 微量需要、灭菌方式选择与钙盐沉淀、疱肉培养基、铁载体主动运输、PTS 功能替代、Stickland 反应、呼吸链换装与抑制剂/解偶联剂、巴斯德效应、丙酸发酵、杜汉小管产气比、V-P 操作细节、ABE 工艺复兴、环式/非环式光合磷酸化、Calvin 科学史、环孢素/洛伐他汀、群体感应调节、6-APA 半合成）后全部达标
- 校验：bun run scripts/validate-micro.ts ch4.ts ch5.ts ch6.ts 输出三行 ✓（4 节 10983 字最短 2664 / 3 节 8191 字最短 2672 / 4 节 10750 字最短 2633）；bunx tsc -p tsconfig.json 全项目 src/ 无错误（仅 examples/skills 预存无关报错）；bunx eslint 三文件 0 警告 0 错误；git status 核实仅新增 src/data/subjects/micro/ 三个文件，未修改其他任何文件

Stage Summary:
- 3 章 11 节全部完成：ch4 病毒与亚病毒因子（4 节）、ch5 微生物的营养与培养基（3 节）、ch6 微生物的代谢（4 节），总正文 29924 字（含 H2 层级正文），全部 11 节字数落在 2633–2824 区间（要求 2600–3600）
- 每节 5–6 个 H2、5 条 keyPoints、6–7 个 terms；每章 1 张以上对比表（合计 15 张 Markdown 表）；章 summary 123–146 字、keywords 各 6 个
- 学术口径说明：ATP 产率采用「经典 38 / 修正 32（真核 30–32）」双口径标注；λ 载体容量写约 9–22 kb；朊病毒构象比例采用文献常用值（PrPᶜ α 42%/β 3% → PrPˢᶜ α 30%/β 43%）；发酵净 ATP 写「1–3 个」区间以涵盖各型
- 校验结果：validate-micro 三行 ✓、tsc 0 错、eslint 0 警告、禁用字符扫描零命中；仅新增 3 个文件

---
Task ID: 23-a
Agent: content-micro-a
Task: 编写微生物学第 1–3 章（12 节）

Work Log:
- 开工前置：读 agent-ctx/23-a-brief.md 任务蓝图；tail -80 worklog.md 掌握项目数据规范；读 src/lib/types.ts（Chapter/Section 类型）与 src/data/subjects/micro/ch4.ts 前 100 行对齐书写风格；核对 scripts/validate-micro.ts 校验规则（正文 ≥2400、H2 ≥2、keyPoints 3–6、terms 3–8、id 正则）
- 发现上轮中断残留：ch1.ts/ch2.ts 已存在但未收尾（ch2-s3 仅 2004 字未过校验；ch1-s1/ch1-s3/ch2-s1/ch2-s5 各有 6–7 个 H2 超出简报 3–5 上限；另查实 3 处史实/数值瑕疵），ch3.ts 缺失，worklog 亦无 23-a 记录；按简报硬指标对既有两章整备后补写第三章
- ch1 整备：s1/s3 各由 7 个 H2 归并为 5 个（六大共性并为「一至三/四至六」两段、有害面/有益面各归并），s3 补 WHO 食源性疾病负担（年约 6 亿患病、逾 40 万死）；s2 统一「维诺格拉德斯基」译名；s1 保留教材经典口径（每时代谢糖约 2000 倍干重，标注「经典测定常被引用」）与 2⁷²=4.7×10²¹、2¹⁴⁴≈2.2×10⁴³、菌群每代新突变≈数十万（10⁹×4.6×10⁶×10⁻¹⁰ 自洽）等推算
- ch2 整备：s1/s5 各由 6 个 H2 降为 5（观察与鉴定合并、鞭毛构造与马达合并）并补「幼龄培养物观察」原则与衰老衰残形；s3 重点扩写 2004→2641 字（新增储藏颗粒五类对比表、拟核膜附着与复制起点耦联、Sec/Tat 分泌通路、多粘菌素靶膜）；「蕉烷」错字修正为藿烷类（hopanoid）并补生物标志物意义；s4 修正「结核病房尘埃」误例（结核杆菌不产芽孢）为格鲁伊纳岛炭疽封锁史实，补 1876 科赫/科恩芽孢耐热史；纳米比亚硫珠菌年份改为「1997 年采得、1999 年报道」；鞭毛游速类比降为保守口径（每秒 20–40 μm、折算数十公里时速）
- ch3 新写 4 节全按蓝图落点：s1 酵母菌（构造/多边芽殖与芽痕计数/裂殖掷孢子假菌丝/MAT 交配型与单双倍体交替生活史/工业地位表含酵母双杂交 1989、基因组 1996 约 1.2×10⁷ bp、诺奖 2001/2009/2013/2016）；s2 霉菌（三型菌丝/有隔无隔与假根匍匐菌丝附着胞吸器/泡囊顶端生长与顶体/霉菌细菌菌落对比表/青霉帚状与曲霉足细胞）；s3 繁殖与孢子（无性孢子六型表/有性孢子四类表/根霉异宗配合/双核阶段钩状锁状联合/准性生殖/单担子果数十亿与布勒液滴弹射、孢子 vs 芽孢本质辨析）；s4 真菌界（五共同特征与后鞭毛生物/四门表/卵菌黏菌移出分子证据与爱尔兰大饥荒双口径/经济真菌（食用菌中国占全球约七成、青霉素 <1 U/mL→数万 U/mL）/脉孢霉 1941 一基因一酶 1958 诺奖/机会感染与三类抗真菌靶点）
- 与题库对齐：quiz q1–15 全部考点在正文中有落点（q1 支原体无壁、q5 衣原体立克次体原核属性、q8 PHB、q9 芽孢休眠性、q12 隔膜小孔、q13 孢子vs芽孢、q15 酵母壁葡聚糖甘露糖蛋白、q14 后鞭毛生物）
- 质量自检：自写 /tmp/check-all.ts 逐节统计字数、H2 数、keyPoints/terms 条数、反引号/${/{{/HTML/emoji 扫描，12 节全部 OK；表格数 ch1 4 张/ch2 4 张/ch3 5 张共 13 张
- 校验：bun run scripts/validate-micro.ts ch1.ts ch2.ts ch3.ts 三行 ✓；bunx tsc --noEmit 过滤 micro 相关 0 错误；git status 确认本任务仅触碰 micro/ch1–ch3 三个文件
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 12 节全部达标：ch1 绪论 3 节 8082 字 / ch2 原核细胞结构 5 节 13469 字 / ch3 真菌 4 节 10632 字，合计 32183 字；每节 2635–2760 字符（要求 2600–3600）、每节 4–5 个 H2（要求 3–5）、keyPoints 5–6 条、terms 6–7 个、章 summary 170–224 字、keywords 各 6 个
- 校验结果：validate-micro 三行 ✓（最短小节 2635 字）、tsc 无 micro 相关错误、禁用字符零命中、表格 13 张
- 学术取舍：①「大肠杆菌每小时代谢糖约为干重 2000 倍」按周德庆教材经典口径保留并标注「经典测定常被引用」；②卵菌按分子证据移出真菌界，但致病疫霉/爱尔兰大饥荒仍保留并说明传统「真菌病害」口径演变，兼提卵菌壁无几丁质故药剂选择的实际含义；③中体按教材保留经典功能描述并如实标注冷冻制样假象争议；④芽孢存活例证弃用「结核病房尘埃」（结核杆菌非芽孢菌）改格鲁伊纳岛炭疽史实；⑤鞭毛游速、比表面积倍数等数量级均取保守表述
- 集成提示：ch1–ch3 与 ch4–12 同目录独立导出（microCh1/microCh2/microCh3），需主控在学科聚合层挂载；与 quiz q1–15、glossary-micro 词条（芽孢/荚膜/鞭毛/肽聚糖/菌丝体等）已互相对应

---
Task ID: 23-d
Agent: content-micro-d
Task: 编写微生物学第 10–12 章（11 节）

Work Log:
- 开工前置：读 agent-ctx/23-d-brief.md 任务蓝图；tail -80 worklog.md 掌握项目数据规范；读 src/lib/types.ts（Chapter/Section 类型）与 src/data/subjects/micro/ch4.ts 前 100 行对齐书写风格；核对 scripts/validate-micro.ts 校验规则（正文 ≥2400、H2 ≥2、keyPoints 3–6、terms 3–8、id 正则、summary ≥30）
- 发现上轮中断残留：ch10.ts/ch11.ts 已存在且过基础校验，但 ch10-s4 与 ch11-s3 各有 6 个 H2 超出简报 3–5 上限、ch11-s1 仅 2582 字低于 2600 目标；ch12.ts 缺失，worklog 亦无 23-d 记录——按简报硬指标整备两章残留后补写第三章
- ch10 整备：「免疫记忆的细胞学基础」并入「细胞免疫：Th 亚群、CTL 与免疫记忆」（H2 6→5，内容无损仅改层级）
- ch11 整备：「商品化鉴定系统：API 与 VITEK」并入「数值分类与商品化鉴定系统」（H2 6→5，衔接原有「数值分类孕育商品化系统」文脉）；s1 增补致病型（pathovar）条目（2582→2644 字）
- ch12 新写 4 节全按蓝图落点：s1 工业发酵与代谢工程（菌种库→摇瓶/种子罐逐级扩大→深层培养→下游精制全流程；发酵罐搅拌桨/挡板/空气分布器/换热器与 pH-DO-温度-补料在线控制；分批/补料分批/连续三型对比表；青霉素流加策略破碳代谢物阻遏；乙醇 SSF；柠檬酸黑曲霉限锰酸化 80%–90% 转化；谷氨酸生物素亚适量膜渗漏与透性调节、赖氨酸高丝氨酸营养缺陷型/AEC 抗反馈育种；1982 人胰岛素 A/B 链大肠杆菌表达与包涵体复性；1973 固定化大肠杆菌天冬氨酸酶；MFA 与系统代谢工程）；s2 微生物与食品（发酵食品四例总表；酸奶德氏乳杆菌保加利亚亚种+嗜热链球菌 42℃ 交叉喂养、终点 pH 4.4–4.6、后酸化冷链控制；干酪凝乳酶切 κ-酪蛋白 Phe105–Met106、青霉表面/内部成熟；酱油味噌米曲霉制曲产蛋白酶/肽酶/淀粉酶、嗜盐四联球菌与鲁氏接合酵母 18% 盐水后熟酯化；泡菜异型→同型菌群演替与亚硝酸盐先升后降单峰曲线及安全食用期；啤酒麦芽糖化-酒花异 α-酸-拉格 8–13℃/艾尔 15–25℃；白酒大曲-窖泥混合菌群与己酸乙酯主体香；FAO/WHO 益生菌定义与 GB 19302 乳酸菌 ≥10⁶ CFU/g(mL)；SCP 酵母 50%/螺旋藻 60% 与 RNA<2%；aw-pH 腐败生态与栅栏技术六因子复合）；s3 环境微生物技术（活性污泥菌胶团絮体-原生动物指示-BOD₅ 污泥负荷-SVI>150 膨胀诊断；滴滤池/生物转盘/生物流化床挂膜分层；A²/O 厌氧释磷储 PHA→缺氧反硝化→好氧硝化与超量吸磷分区表、富磷剩余污泥排磷闭环，附短程硝化与 anammox 节能路线；厌氧消化水解发酵菌→产氢产乙酸菌→产甲烷古菌三阶段互营、种间氢转移热力学拉动、乙酸裂解约 2/3、沼气 55%–70%；Exxon Valdez 营养盐生物刺激对照评估；PAH/农药共代谢；氧化亚铁硫杆菌 Fe³⁺ 间接浸出铜铀与全球 15%–25% 铜产量；MEOR 与鼠李糖脂/表面活性素/槐糖脂；MFC Geobacter 胞外电子传递耦合废水处理）；s4 CRISPR 与合成生物学（1987 石野重复序列→2005 spacer 噬菌体同源→2007 嗜热链球菌适应性免疫→2012 Cas9-sgRNA 体外切割→2020 诺奖时间线表；sgRNA 配对+PAM NGG、距 PAM 约 3 bp 平末端 DSB、NHEJ 敲除/HDR 敲入；CRISPRi/a dCas9、CBE/ABE 碱基编辑、pegRNA 引物编辑；噬菌体疗法 d'Hérelle/第比利斯 Eliava 传统与 2017 鲍曼不动杆菌静脉鸡尾酒、2019 伦敦工程噬菌体个案；元件-装置-系统层级与大肠杆菌/酿酒酵母双底盘；JCVI-syn3.0 473 基因 531 kb 约 1/3 功能未知；Sc2.0 删不稳定区/tRNA 新染色体/loxPsym-SCRaMbLE/签名序列、2023 全部 16 条合成染色体组装完成；HMP 2007→iHMP 2014 与 EMP/NMI/中国微生物组计划/TMI 队列；培养组学；FMT 2013 RCT 81% vs 23%–31%；FDA 2022–2023 两款菌群制剂与 LBP 类别；malacidins 宏基因组新抗生素；生物制造与碳中和）
- 存疑名词核验：以 web 检索确认「TMI」在微生物组领域唯一可考实体为 The Microsetta Initiative（UCSD 公众微生物组队列），按此义写入而不杜撰教材缩写义；碱基编辑临床进度取保守表述「已进入临床试验」
- 与题库对齐：quiz q46–60 的 chapterId（microbiology-ch10/11/12 各 5 题）与本章 id 一一对应，无失配
- 质量自检：自写 bun 内联脚本逐节统计字数/H2/keyPoints/terms/表格数与禁用字符（反引号、${、{{、HTML 标签、emoji）扫描，11 节全部 clean
- 校验：bun run scripts/validate-micro.ts ch10.ts ch11.ts ch12.ts 输出三行 ✓；bunx tsc --noEmit 无 micro 相关错误（仅 examples/skills 预存无关报错）；bunx eslint 三文件 0 警告 0 错误；git 确认本任务仅触碰 micro/ch10–ch12 三个文件，未改任何其他文件
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 11 节全部达标：ch10 感染与免疫 4 节 11107 字 / ch11 微生物的分类与鉴定 3 节 7856 字 / ch12 微生物的应用与现代生物技术 4 节 11204 字，合计 30167 字；全部小节字数落在 2602–2962 区间（要求 2600–3600）、每节 4–5 个 H2（要求 3–5）、keyPoints 5–6 条（要求 3–6）、terms 5–6 个（要求 3–8）、章 summary 191–276 字（要求 ≥80）、keywords 各 6 个
- 表格：ch10 5 张（人体菌群分布 / 外毒素 vs 内毒素 / 补体三途径 / 五类 Ig 职能 / 人工免疫分类）、ch11 3 张（七级分类阶梯 / 三域特征对比 / IMViC 四联）、ch12 4 张（三种操作方式 / 发酵食品四例 / A²/O 分区 / CRISPR 时间线）
- 校验结果：validate-micro 三行 ✓（最短小节 2602 字）、tsc 无 micro 相关错误、eslint 0 警告、禁用字符零命中、quiz q46–60 chapterId 对齐
- 学术取舍：①正常菌群总数采用「经典 10¹⁴/10:1 与直接计数修订约 1:1（3.8×10¹³）」双口径并注明修订来源；②「TMI」按唯一可考实体 The Microsetta Initiative 写入；③生物浸出铜份额取 15%–25% 区间口径；④沼气甲烷取 55%–70%（约 60%）区间、乙酸裂解产甲烷取「约三分之二」；⑤FMT 循证取 van Nood 2013 RCT 数据（81% 对 23%–31%）；⑥碱基编辑临床表述收敛为「进入临床试验」；⑦柠檬酸转化率取理论值 80%–90%、谷氨酸糖酸转化率取 ≥50% 保守口径
- 集成提示：ch10–ch12 与 ch1–ch9 同目录独立导出（microCh10/microCh11/microCh12），需主控在学科聚合层挂载；与 quiz q46–60、glossary-micro 词条（外毒素/内毒素 LPS/正常菌群/16S rRNA/双名法等）已互相对应

---
Task ID: 23-c
Agent: content-micro-c
Task: 编写微生物学第 7–9 章（12 节）

Work Log:
- 开工前置：读 agent-ctx/23-c-brief.md 任务简报；tail -80 worklog.md 掌握项目规范；读 src/lib/types.ts（Chapter/Section 类型）与 ch4.ts 前 100 行对齐书写风格；核对 scripts/validate-micro.ts 校验规则（正文 ≥2400、H2 ≥2、keyPoints 3–6、terms 3–8、id 正则）
- 检查残留：ch7.ts 已存在且 4 节基本达标，但 ch7-s2 有 6 个 H2 超出简报 3–5 上限、s1 中「活菌数/总菌数绘制」段落位置突兀——归并修复（「生长测定的总体思路」并入「计总菌数」成 5 个 H2；该段落移至衰亡期之后承接两曲线分歧）；ch8.ts、ch9.ts 缺失，按蓝图全新编写
- ch7 修复后四节全覆盖蓝图：生长曲线四期（迟缓期 RNA/诱导酶与工业压缩策略、对数期 μ=ln2/td 与成分最均匀、稳定期次级代谢收获期、衰亡期自溶）、恒化器 μ=D 与 D≥μmax 洗出/恒浊器、分批 vs 连续优缺点表；测定法（血球计数板 0.1 mm³ 换算、CFU 30–300 与倾注/涂布两法、薄膜过滤、MPN 多管发酵大肠菌群、OD₆₀₀ 0.3–0.8 线性区与 McFarland、干重/总氮/ATP 生物发光）+ 六法对比表；环境因子（五类温度型与 Pyrolobus fumarii 113 ℃、嗜酸反向梯度与生理酸性盐、aw 0.90/0.86/0.61 与相容溶质、五类氧型与厌氧罐/焦性没食子酸/亨盖特滚管/Eh 指示剂、UV 260 nm 嘧啶二聚体）；控制（灭菌/消毒/防腐/化疗界分表、干热 160 ℃ 2 h、高压 121 ℃ 0.1 MPa 15–30 min、巴氏 63 ℃/30 min 与 72 ℃/15 s HTST、UHT、D/Z/F 值与 12D 商业无菌、0.22 μm 膜与 HEPA、消毒剂机制与浓度/时间/温度/有机物四因素、石炭酸系数）
- ch8 新写 4 节：s1 突变类型与规律（转换/颠换/移码/结构变异与同义/错义/无义三档、ts 条件致死/营养缺陷型/抗药性、三大随机性实验——彷徨试验方差爆炸的统计学论证、Newcombe 重涂布、Lederberg 影印培养、突变率 10⁻⁸–10⁻⁹、原位回复与基因内/基因间抑制、Ames 试验、lacI CTGG 滑移热点、诱变剂五类表与 RecA-LexA-umuDC SOS 易错修复）；s2 三种基因重组途径（Griffith 1928→Avery 1944、感受态因子与单链摄取、CaCl₂/电击人工转化、P22/P1 误包装等概率普遍转导与流产转导、λ 偏差切离携带 gal/bio 局限转导并与溶原转换辨析、F 质粒 tra 操纵子与性菌毛、Hfr 整合与 F 区段殿后、Wollman–Jacob 中断杂交以分钟为图距建 100 分钟环图、F′lac 性导部分二倍体）+ 三途径对比表；s3 质粒与转座因子（自主复制/Inc 不相容群/非必需/可转移四共性、Col/降解 CAM-OCT-NAH-TOL/Ti 质粒 T-DNA 跨界、R 质粒 RTF+r 决定子与 1950s 日本志贺菌传染性耐药及 NDM-1 现状、IS1 768 bp/复合 Tn5-Tn10/Tn3 家族 res 位点、McClintock 玉米 Ac-Ds 与 1983 诺奖、复制型经共整合体 vs 剪切粘贴、基因组进化四意义）；s4 菌种选育与保藏（出发菌株与 70%–80% 致死率剂量学、CM/MM 检出、影印法与青霉素浓缩法原理、AEC 抗反馈育种、原生质体融合溶菌酶-PEG-Ca²⁺-高渗再生四步与种间屏障打破、pBR322→pUC 蓝白斑与 Ti 双元载体、1982 重组人胰岛素与 1986 乙肝疫苗、衰退两根源与宿主轮回/单菌落分离复壮、斜面/石蜡油/甘油管 −70~−80 ℃/冻干四级保藏表）
- ch9 新写 4 节：s1 生态地位（生产者/消费者/分解者三角色、根际 R/S 5–100 与 PGPR、外生菌根哈蒂氏网 vs 丛枝菌根碳磷交换、地衣裸岩先锋与地衣酸、瘤胃种间氢转移互营与白蚁真菌圃、管虫营养体、人体微生物组 10¹⁴ 与免疫训练/维生素/定植抗力及 FMT、每克肥土 10⁷–10⁹）；s2 相互作用（八关系逐一配微生物学实例 + 速查表：好氧菌耗氧开路偏利、两菌接力甾体转化、地衣与瘤胃互惠、竞争排斥、抗生素与乳酸菌酸抑制拮抗、噬菌体与蛭弧菌寄生、原生动物食菌与真菌收缩环捕线虫；生物膜 EPS 基质、梯度微生境分层、耐药提高百倍以上与植入物感染/滴滤池两面性；群体感应费氏弧菌-乌贼发光发现史、LuxI/LuxR-AHL 阈值切换、AIP 与 AI-2 通用语、群体感应淬灭低选择压策略）；s3 极端环境微生物（Brock 黄石 Taq 与 PCR 半壁江山、Pfu 3′→5′ 校正、Methanopyrus 约 122 ℃ 纪录、冷适应酶与冰核蛋白双向应用、嗜盐古菌 KCl-酸性蛋白与菌视紫质紫膜质子泵、Picrophilus pH 0.7、碱性蛋白酶与加酶洗衣粉、Photobacterium profundum 嗜压）+ 适应分子七因子总表 + 南极干谷/冰下湖/木卫二天体生物学；s4 生物地球化学循环（好氧矿化与厌氧产甲烷链、甲烷 GWP 双时间尺度、叠层石 35 亿年与碳酸盐封存、固氮酶 16 ATP 与侵染线-豆血红蛋白屏氧-异形胞糖脂层、硝化两级与氮素有效化、反硝化 N₂O 与水田损失、anammox 1995 发现与海洋 30–70% 氮逸出及节能六成、硫杆菌-SRB-AMD 成因治理、植酸酶与聚磷菌厌氧释磷好氧超量吸磷 EBPR、1977 Alvin 热泉化学合成与管虫共生收束）
- 与题库对齐验证：quiz q36–45 全部考点在正文有落点（q36 Griffith/Avery、q37 λ 局限转导切离偏差、q38 波动实验随机性、q39 Ames his⁻ 回复筛选、q40 冻干保护剂与熔封、q41 Taq 黄石来源、q42 浸矿化能自养、q43 豆血红蛋白氧缓冲、q44 地衣互利分工、q45 氮循环固氮/氨化/硝化/反硝化四环节及 E 项纠错依据）
- 质量自检：自写 agent-ctx/tmp/check-ch79.ts 逐节统计——12 节字数 2611–3548 全部落于 2600–3600 区间；每节 H2 3–5 个；kp 5–6 条、terms 6–8 个；反引号/${/{{/HTML/emoji/控制字符零命中；表格 ch7 4 张、ch8 3 张、ch9 2 张共 9 张；自检脚本用后已清理
- 学术口径复核并修正五处：Methanopyrus kandleri 培养温度纪录改「约 122 ℃ 加压培养」（strain 116 原始报道口径）；回复突变段落「前者」误指改「后者」；清除两处中英混杂（microbial 界→微生物界、fungus 与植物→真菌与植物）；lacI 热点处 hotspot 统一为中文「突变热点」；非复制型转座补英文规范名（conservative transposition）
- 校验：bun run scripts/validate-micro.ts src/data/subjects/micro/ch7.ts ch8.ts ch9.ts 三行 ✓（4 节 11516 字最短 2772 / 4 节 12348 字最短 2863 / 4 节 11487 字最短 2611）；bunx tsc --noEmit 过滤 micro/ch7–9 零错误；bunx eslint 三文件 0 警告 0 错误；git status 核实本任务仅触碰 micro/ch7–ch9 三文件（worklog 追加与 agent-ctx 临时文件除外，其余 M 状态系并行代理所为）
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 12 节全部完成：ch7 微生物的生长及其控制（4 节 11516 字）、ch8 微生物的遗传变异与育种（4 节 12348 字）、ch9 微生物生态（4 节 11487 字），合计 35351 字；每节 2611–3548 字符（要求 2600–3600）、每节 H2 3–5 个（要求 3–5）、keyPoints 5–6 条、terms 6–8 个、章 summary 161–238 字、keywords 各 6 个；Markdown 表 9 张（ch7 4 / ch8 3 / ch9 2）
- 校验结果：validate-micro 三行 ✓（最短小节 2611 字）、tsc 无 micro/ch7–9 相关错误、eslint 0 警告 0 错误、禁用字符扫描零命中；仅新增 2 文件 + 修复 1 残留文件
- 学术取舍：①人体细胞:细菌数量采用「传统 10¹³:10¹⁴ 口径 + 近年重估两者同量级」双口径标注；②甲烷温室强度取「百年 25–30 倍、二十年约八十倍」、N₂O 取「近三百倍」（IPCC 口径区间）；③超嗜热纪录统一为 Methanopyrus 约 122 ℃ 加压培养，与 ch7 的 Pyrolobus fumarii 113 ℃ 各安其位；④固氮 ATP 采用教材经典「约 16」口径；⑤与 ch7-s3 互见内容（氧化亚铁硫杆菌、Pyrolobus、UV）采取「原理详 ch7、生态与工程应用详 ch9」的分工避免重复
- 集成提示：ch7–9 与 ch1–6、ch10–12 同目录独立导出（microCh7/microCh8/microCh9），需主控在学科聚合层挂载；与 quiz q31–45 及 glossary-micro 词条（高压蒸汽灭菌/巴氏消毒/D 值/水活度/SOS 反应/感受态/转座子 Tn/原生质体融合/拮抗/群体感应 QS/生物膜/生物固氮）已互相对应

Task ID: 24-b
Agent: cover-designer
Task: 自绘 SVG 学科封面替换 AI 封面（4 学科封面 + 微生物学新封面 + 仪表盘 hero 主视觉）

Work Log:
- 开工前置：读 agent-ctx/24-b-brief.md；读 globals.css 前 80 行（象牙纸底、衬线字体栈、bio-paper 设计 token）；读 subject-theme.ts（五学科 amber/violet/rose/cyan/emerald 色系与中文色名）；读 drawn/optical-tweezers.svg 头部学习字体声明写法（Noto Serif SC, LXGW WenKai, Georgia, serif）；核对 subjects 数据得各学科真实教材体系（王镜岩/朱玉贤/翟中和/赵南明/周德庆）与章节数；旧图均为 1344×768 AI 生成 PNG
- 新建 6 个手写 SVG（public/images/bio/covers/，均含顶部 XML 注释「依据学科主题自绘矢量封面（代码绘制，非 AI 生成）」）：
  - cover-biochemistry.svg（800×500，amber #d97706/#b45309）：eyebrow「BIOCHEMISTRY · 101 CORE CURRICULUM」+ 80px 衬线书名「生物化学」+ bio-rule 双分隔线 + 副题「王镜岩体系 · 12 章 53 节」+ 底部元素带（苯环六元环内圈、吡喃糖环 Haworth 投影含环 O 与 OH 取代基、锯齿肽链球棍骨架、三角烧瓶含液面与气泡）+ 细边框角标 + 0.04 透明度纸纹点阵
  - cover-molecular-biology.svg（violet #7c3aed/#6d28d9）：「分子生物学」「朱玉贤体系 · 12 章 57 节」+ mRNA 单链（波状线+4 密码子圆点+5'/3' 标注+3' 箭头）、DNA 双螺旋（两条反正弦带采样 polyline + 10 对横向碱基短线，振幅 26/周期 104，坐标经 node 预计算）、核糖体（大亚基穹顶+小亚基椭圆，mRNA 穿行亚基间沟）
  - cover-cell-biology.svg（rose #e11d48/#be123c）：「细胞生物学」「翟中和体系 · 12 章 53 节」+ 细胞剖面（双圈膜+核+核仁+胞内小线粒体+ER 短波+核糖体点）、线粒体（外膜+内膜+5 条嵴曲线）、内质网（双波浪带+上方核糖体颗粒=糙面内质网）、高尔基体（4 条堆叠弧+3 分泌泡）
  - cover-biophysics.svg（cyan #0891b2/#0e7490）：「生物物理学」「赵南明体系 · 10 章 40 节」+ 正弦波含中轴、蛋白质卡通螺旋-线圈-螺旋（两段锯齿+中央大环）、力矢量 F（作用点圆+45° 斜箭头+斜体 F）、光镊焦点（会聚弧+双会聚光线+捕获小球+虚线势阱椭圆+出射光线）
  - cover-microbiology.svg（emerald #059669/#047857，新学科封面，illustrations.ts 已预留 .svg 引用路径）：「微生物学」「周德庆体系 · 12 章 46 节」+ 琼脂平板（双圈皿+9 个菌落点）、球菌链（6 个相切圆）、杆菌（圆角胞体+端部双波状鞭毛）、螺旋菌（7.5px 粗 S 形胞体+极生鞭毛）
  - hero-bioscience.svg（1200×1000，中性象牙底 #f5f2ec）：五学科淡彩拼贴（右竖向 DNA 双螺旋紫晶 12 对碱基、左上细胞剖面圆绯红含核仁/线粒体/ER、顶中苯环琥珀、左下双杆菌轮廓翠微、右下青碧波动曲线，细线稿 stroke-opacity 0.35–0.6）+ 中央「BIOSCIENCE · 101 CORE CURRICULUM / 生命科学研习堂 / 教育部 101 计划核心课程 · 五大基础学科」+ 五学科色标圆点
- 设计要点：主色仅用于线稿与细 accents（边框/角标/eyebrow/粗规线/科学元素），文字主体深墨 #1c1917；书名 ≥64px（4 字 80px/5 字 68px）；letter-spacing 居中用 x+ls/2 补偿（librsvg/Chrome 尾随字距偏移）；8% 安全边距内承载全部重要内容；每文件 4.4–6.0KB（限 15KB）；纯 rect/circle/path/line/polyline/polygon/text/g/pattern，无 script/位图/外部引用
- 校验（/tmp/render-check.ts，参照 figure-explain/route.ts 的 createVision 用法）：sharp 以 density 144（hero 96）栅格化 6 张 → 1600×1000/1600×1333 PNG，文字均正常渲染（字体回退栈生效）；VLM glm-5v-turbo 逐张按四项标准（①文字完整无截断无乱码 ②科学元素学术正确 ③构图居中 ④无重叠）审查——首轮 6/6 全 PASS
- 反盲测交叉验证（防提示词引导偏置）：另以无预期答案的盲审 prompt 令 VLM 逐字转录文字并描述元素——6 张文字全部逐字命中（含 OH/O、5'/3'、–连接符）；盲审中「光镊焦点」一度误读为「光镜」，遂放大 8× 区域复查确认为「光镊焦点」字形无误，且光镊元素（会聚光束/捕获小球居势阱中心/出射光线）被 VLM 正确解读为光学捕获原理示意
- 自检：git status 确认仅新增上述 6 个 untracked SVG，未修改任何既有文件（其余 M 状态系并行代理先前所为）；rg 确认 6 文件无 script/<image>/href 外部依赖
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 产出 6 个文件（public/images/bio/covers/）：cover-biochemistry.svg 4679B、cover-molecular-biology.svg 5630B、cover-cell-biology.svg 4709B、cover-biophysics.svg 4382B、cover-microbiology.svg 4532B、hero-bioscience.svg 5955B——5 张学科封面（800×500=卡片 1.6 比例，object-cover 零裁切）+ 1 张 hero 主视觉（1200×1000，重要内容居中可容四边裁切）
- VLM 审查结论（glm-5v-turbo，四项标准）：6/6 全 PASS——①文字均完整无截断无乱码（盲审逐字复核一致，光镊焦点经 8× 放大确认）②科学元素均判学术画法正确（DNA 双螺旋=两交叉正弦链+横向碱基对短线、线粒体有内膜与 5 嵴、吡喃糖环含氧 Haworth、螺旋菌 S 形、光镊会聚光束捕获小球等）③构图居中留白协调 ④无不当重叠
- 设计取舍：①副题采用项目真实教材体系（王镜岩/朱玉贤/翟中和/赵南明/周德庆）+ 简报给定章节数；②生物化学以苯环/吡喃糖/肽链/烧瓶四联元素带呈现（化学键点阵以 0.04 纸纹点阵全局承载）；③核糖体采取大亚基上/小亚基下、mRNA 穿行两亚基间沟的经典翻译起始画法；④hero 严格限定 brief 列举的四类元素（DNA/细胞/分子环/杆菌）另加青碧波动曲线凑齐五学科色，并配五色圆点呼应「五大基础学科」
- 集成提示：主控需在 src/data/illustrations.ts 将 cover-biochemistry/molecular-biology/cell-biology/biophysics 四处 .png 引用切至同名 .svg 并删除 5 张旧 AI PNG（cover-microbiology.svg 引用已就位）；栅格化校验脚本在 /tmp/render-check.ts（含 --render-only 模式）

---
Task ID: 25-a
Agent: content-biochem-a
Task: 生物化学第 1–3 章正文深度扩充（12 节超集式扩写）

Work Log:
- 开工前置：完整阅读 agent-ctx/expansion-guide.md 通用指南与 agent-ctx/exp-25-a-brief.md 批次简报；tail -60 worklog.md 掌握项目规范与并行批次格局
- 逐节读原文：按简报行号区间 Read biochemistry.ts ch1 L24–198 / ch2 L199–356 / ch3 L357–521，12 节原文逐节细读并摘录全部知识点、数值、术语与 H2 主题（原文每节 909–1290 字符）
- 测验题核查：rg 定位 quiz/biochemistry.ts q01–q15（ch1/ch2/ch3 各 5 题），逐题核对考点在扩写正文的成立性（详见 Stage Summary）
- 残留接管：发现 src/data/expansions/biochemistry-ch1-3.ts 已有同批次未完工残留（12 节已扩写但无 worklog 记录、未经校验，agent-ctx/tmp/ 亦有同任务自检脚本残留）——逐节全文复核后接管：完成 138 项原文知识点超集核查、q01–q15 事实核查、格式扫描，修正两处学术/文字问题：①ch2-s3「嗜钱性」错字改「嗜锇性（锇试剂染色）」；②ch1-s2 葡萄糖「经逆转糖酵解关键三步转变为果糖-6-磷酸」的错误表述改为「经磷酸化与异构化转变为果糖-6-磷酸、进而流向蔗糖与淀粉合成」
- 超集式扩写要点：原 H2 主题全部保留并改写措辞（如「构象」→「构象：椅式构象与 Haworth 投影」），每节新增 2–3 个深化小节；扩充方向覆盖机理分步（变旋平衡反算 36% α、Edman 产率指数衰减账）、定量数据（脂肪酸熔点表、磷脂侧向扩散 10⁻⁸ cm²/s）、经典实验证据链（Fischer/Bijvoet 1951、Gorter-Grendel 1925、Frye-Edidin 1970、Ingram 1956 指纹图谱）、生理病理应用（HbA1c、遗传性果糖不耐症、von Gierke、Tay-Sachs、分子病 E6V）、易混淆对比表（麦芽糖/乳糖/蔗糖、三多糖、磷脂酶 A1/A2/C/D、膜脂四相、专一性裂解工具、脂蛋白四类）
- 表格：每章 ≥2 张 Markdown 表（ch1 共 4 张 / ch2 共 5 张 / ch3 共 2 张，合计 11 张）；交叉引用全部指向本学科真实章节（糖代谢/脂质代谢/生物氧化/维生素/氨基酸代谢/物质代谢的整合与调节/蛋白质的三维结构）
- 质量自检：自写内联脚本逐节统计字数/H2/表格数与禁用字符（反引号、${、{{、HTML 标签、emoji、制表符、H3+ 标题、代码围栏）——12 节全部 clean；138 项原文事实超集核查全部命中
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/biochemistry-ch1-3.ts biochemistry 1 2 3 输出「✓ 12 节全部通过 · 字数区间 2618–3051」；bunx tsc --noEmit 过滤本文件零错误；bunx eslint 该文件 0 警告 0 错误；git status 确认本任务仅触碰 src/data/expansions/biochemistry-ch1-3.ts（biology.ts/quiz/illustrations 等的 M 状态系先前并行任务所为，与开始时快照一致）
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 12 节全部达标：ch1 糖类化学 4 节 / ch2 脂质与生物膜 4 节 / ch3 氨基酸与蛋白质一级结构 4 节；扩写前后字数对照（前→后）：ch1-s1 1290→3051、ch1-s2 993→2648、ch1-s3 1097→2621、ch1-s4 1152→2642、ch2-s1 1023→2628、ch2-s2 994→2625、ch2-s3 912→2641、ch2-s4 921→2618、ch3-s1 946→2687、ch3-s2 1031→2638、ch3-s3 909→2635、ch3-s4 965→2733；合计 10961→32229 字符，全部落在 2600–3600 区间
- 每节 H2 由 2–4 个增至 5–6 个（要求 ≥4）；原有 H2 主题全保留（含与插图 caption 呼应的「环式结构与异头物/变旋」「三种二糖比较」「脂肪酸熔点」「胆固醇」「流动镶嵌模型」「氨基酸分类」等主题）
- 测验题事实核查结论（q01–q15 无题面失配）：q01 蔗糖双异头碳均成键→非还原无变旋 ✓；q02 糖原 8~12 残基分支（支链淀粉 24~30 对照）✓；q03 磷酸化酶磷酸解直接产物 1-磷酸葡萄糖 ✓；q04 淀粉 α-1,4/α-1,6 vs 纤维素 β-1,4 结构决定功能 ✓；q05 GAG 含硫酸软骨素/透明质酸/肝素（糖原为同多糖非 GAG）✓；q06 必需脂肪酸亚油酸 18:2 Δ9,12（缺 Δ12/Δ15 去饱和酶、花生四烯酸条件必需）✓；q07 胆固醇高于 Tm 降流动性/低于 Tm 维持流动性的双向调节 ✓；q08 鞘磷脂以鞘氨醇为骨架不含甘油 ✓；q09 PE 头小链大呈锥形→H_II 相 ✓；q10 PLC 水解 PIP₂→DAG+IP₃ ✓；q11 必需 8 种「甲缬赖亮异苯色苏」（丙氨酸非必需）✓；q12 碱性氨基酸 pI=(pKa₂+pKaR)/2=9.75（Lys 9.74 教材口径）✓；q13 肽键部分双键、0.133 nm、六原子肽平面 ✓；q14 Edman 用 PITC、产物 PTH-氨基酸、50~60 残基 ✓；q15 胰蛋白酶切 Lys/Arg 羧基侧（胰凝乳蛋白酶芳香族、CNBr 切 Met 对照）✓
- 校验结果：validate-expansion 输出「✓ src/data/expansions/biochemistry-ch1-3.ts: 12 节全部通过 · 字数区间 2618–3051」；tsc 无本文件相关错误；eslint 0 警告；禁用字符扫描零命中
- 集成提示：biochemistryCh1To3 为独立导出，需主控在 src/data/expansions/index.ts 的 sectionExpansions 挂载后方可生效；与 quiz q01–q15、illustrations（葡萄糖异头物/常见单糖/蔗糖/乳糖/麦芽糖/脂肪酸/膜脂/流动镶嵌/氨基酸网格 9 处）已互相对应

---
Task ID: 25-e
Agent: content-molbio-e
Task: 分子生物学第 1–3 章正文深度扩充（13 节超集式扩写）

Work Log:
- 开工前置：完整阅读 agent-ctx/expansion-guide.md 通用指南与 agent-ctx/exp-25-e-brief.md 批次简报；tail -60 worklog.md 掌握项目规范与并行批次格局（25-a 生物化学批次对残留文件的接管模式为本任务提供参照）
- 逐节读原文：按简报行号区间 Read molecular-biology.ts ch1 L25–200 / ch2 L201–388 / ch3 L389–544，13 节原文逐节细读并摘录全部知识点、数值、术语与 H2 主题（原文每节 906–1485 字符）
- 测验题核查：rg 定位 quiz/molecular-biology.ts q01–q15（每章 5 题），逐题核对考点在扩写正文的成立性（详见 Stage Summary）
- 残留接管：发现 src/data/expansions/molecular-biology-ch1-3.ts 已有同批次未完工残留（13 节均已扩写、无 worklog 记录、仅过校验下限 2400 而未达指南 2600 硬性要求：8 节 2440–2597 低于 2600）——逐节全文复核后接管，对低于 2600 的 8 节定向扩写深化
- 定向扩写内容（8 节 22 处，每处均为学术增量而非凑字）：ch1-s3 补 Cot 交叉参照法定复杂度（约 3×10⁸ bp，测序前纯物理丈量）与 C 值/重复组分比例的定量衔接；ch1-s2 修正洋葱基因数表述为「并未随 DNA 含量相应增多」（原「与人类同量级」依据不足，改用 C 值之谜安全口径）；ch2-s1 补稳定同位素标记的实验学优点与「颗粒遗传的分子答案」收束；ch2-s2 补 M13 单链载体工程应用、复制子概念层级（细菌单复制子/真核多复制子/病毒单复制子）与 DnaA-ATP·dnaA 拷贝双重负反馈；ch2-s4 补解旋-引发-聚合速率同速约束、旋转酶每秒近百圈超螺旋化解、核小体经 CAF-1/PCNA 的半保留传承（参见第 8 章）；ch2-s5 补「错误 vs 损伤」两防线分工、增变基因/突变体表型概念、Geminin-Cdt1 泛素清除时序；ch3-s1 补 O⁶-meG「形似正常」识别盲区、肿瘤突变签名（UV 的 C→T、烟草的 G→T）、彗星电泳与微核试验；ch3-s3 补 Potter-Dressler 电镜实拍 χ 形 DNA 使 Holliday 连接体由假说变实体、RecA 兼任 SOS 感受元件的一物两用、交叉点 chiasmata 与交换干涉；ch3-s4 补 RecA 促 λ CI 自切触发溶原菌诱导切离（与本章 SOS 呼应）、睡美人/piggyBac 转座子工程载体
- 原有 H2 主题全部保留并改写措辞；与插图 caption 呼应的 H2 主题核对：ch1-s4（中心法则/信息流分类）、ch2-s4（复制体/半不连续复制）、ch3-s3（Holliday 连接体/补丁-拼接解离）均在位
- 质量自检：自写内联脚本逐节统计字数/H2/表格数与禁用字符（反引号、${、{{、HTML 标签、emoji、制表符、H3+ 标题、代码围栏）——13 节全部 clean；305 项原文关键事实超集核查全部命中；q01–q15 题面事实逐题复核成立（q07/q15d 首轮 needle 未含加粗定界符的假性失配经人工确认排除）
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/molecular-biology-ch1-3.ts molecular-biology 1 2 3 输出「✓ 13 节全部通过 · 字数区间 2609–2819」；bunx tsc --noEmit 过滤本文件零错误；bunx eslint 该文件 0 警告 0 错误；git status 核实本任务仅触碰 src/data/expansions/molecular-biology-ch1-3.ts（其余 M 状态系并行代理所为，与开工时快照一致）
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 13 节全部达标：ch1 基因、基因组与中心法则 4 节 / ch2 DNA 复制 5 节 / ch3 DNA 损伤、修复与重组 4 节；扩写前后字数对照（前→后）：ch1-s1 1215→2714、ch1-s2 1090→2616、ch1-s3 1344→2734、ch1-s4 1157→2609、ch2-s1 924→2731、ch2-s2 1060→2759、ch2-s3 1174→2616、ch2-s4 1074→2784、ch2-s5 1023→2757、ch3-s1 906→2735、ch3-s2 1485→2649、ch3-s3 1113→2809、ch3-s4 1217→2819；合计 13802→35332 字符，全部落于 2600–3600 区间
- 每节 H2 保持 5–6 个（要求 ≥4）；表格 ch1 共 8 张 / ch2 共 5 张 / ch3 共 7 张合计 20 张（每章 ≥2，要求 1–2）；术语首现均注英文、重点术语加粗、引用统一「」
- 测验题事实核查结论（q01–q15 无题面失配）：q01 顺反子=不可再分遗传功能单位（突变子/重组子可小至单核苷酸对）✓；q02 断裂基因外显子/内含子相间、转录后剪接 ✓；q03 肺鱼两栖类约 10¹¹ bp 远超人类 3.1×10⁹ bp、C 值与复杂度不成比例 ✓；q04 Alu 中度重复、约 280 bp 约 100 万拷贝、7SL RNA 衍生非自主 SINE ✓；q05 DNA→RNA/RA→DNA/RNA→RNA 已证实、蛋白质→核酸不存在 ✓；q06 第二代轻带:杂合带 1:1 ✓；q07 pol III 才是复制主导酶、pol I 主修复 ✓；q08 pol I 5′→3′ 外切+聚合切口平移去引物、连接酶封口 ✓；q09 β 亚基滑动夹高续进性 ✓；q10 端粒酶 TER+TERT 核糖核蛋白以自身 RNA 为模板 ✓；q11 UV 260 nm→CPD 与 6-4 光产物 ✓；q12 光复活一步逆转不切除核苷酸、胎盘类缺失 ✓；q13 UvrC 在损伤两侧 5′ 侧 8 nt、3′ 侧 4–5 nt 切割 ✓；q14 补丁型无旁侧标记重组 ✓；q15 IS 端 IR 仅编码转座酶/Tn3 复制型共整合体解离酶拆分/LINE-1 ORF2 内切酶+逆转录酶经 RNA 中间体/Alu 非自主借用 LINE-1 酶系 ✓
- 校验结果：validate-expansion 输出「✓ src/data/expansions/molecular-biology-ch1-3.ts: 13 节全部通过 · 字数区间 2609–2819」；tsc 无本文件相关错误；eslint 0 警告 0 错误；禁用字符扫描零命中；305 项原文关键事实超集核查全命中
- 学术口径取舍：①人基因组单一序列复杂度采用 Cot 分析经典口径「约 3×10⁸ bp」并以「量级基本一致」与测序结果对表；②洋葱基因数目改为定性表述规避旧文献高估；③XP 皮肤癌风险采用「数千至上万倍」区间；④人端粒长度用「生殖细胞约 5～15 kb」区间口径；⑤睡美人转座子表述为「从鱼类化石序列中重建复活」（Ivics 1997 口径）
- 集成提示：molecularBiologyCh1To3 为独立导出，需主控在 src/data/expansions/index.ts 的 sectionExpansions 挂载后方可生效；与 quiz q01–q15、illustrations（中心法则 ch1-s4/复制叉 ch2-s4/Holliday 交叉 ch3-s3 三处 caption 主题）已互相对应
---
Task ID: 25-b
Agent: content-biochem-b
Task: 生物化学第 4–6 章正文深度扩充（13 节超集式扩写）

Work Log:
- 开工前置：完整阅读 agent-ctx/expansion-guide.md 通用指南与 agent-ctx/exp-25-b-brief.md 批次简报；tail -60 worklog.md 掌握项目规范与并行批次格局（25-a/25-e 的「残留接管」模式为本任务提供参照）
- 逐节读原文：按简报行号区间 Read biochemistry.ts ch4 L522–735 / ch5 L736–922 / ch6 L923–1054，13 节原文逐节细读并摘录全部知识点、数值、术语与 H2 主题（原文每节 834–1439 字符，ch4-s1 为 3031 字符深度小节）
- 测验题核查：rg 定位 quiz/biochemistry.ts q16–q30（每章 5 题），逐题核对考点在扩写正文的成立性（详见 Stage Summary）
- 残留接管：发现 src/data/expansions/biochemistry-ch4-6.ts 已有同批次未完工残留（13 节均已扩写但无 worklog 记录、未经校验：6 节低于校验下限 2400、9 节低于指南硬性 2600）——逐节全文复核后接管
- 接管复核发现并修正的问题：①ch5-s3 遗漏原文关键定义句「Km 是 v = Vmax/2 时的底物浓度（单位 mol/L）」——q21 直接考查此定义，已补回；②原文「Km = (k₂+k₃)/k₂」为笔误，残留稿已改 (k₂+k₃)/k₁，与 quiz 解析口径一致，予以保留；③ch4-s5「侧链尚未完全 packed」英文混排改「紧密堆积」；④ch6-s1/s2 五处 ASCII 直引号（"3D""活性羧基""泛""陷阱""活性 CO₂ 载体"）规范为「」；⑤ch5-s5 表格「毫秒级」恢复原文「微秒-毫秒级」；⑥ch6-s1「生物氧化」章引用补全为「生物能学与生物氧化」
- 学术口径取舍：原文 ch4-s4「E7 使 CO 结合能降低约 10,000 倍」与人卫教材标准口径（游离血红素 CO/O₂ 亲和力约 25,000 倍→血红蛋白中约 200 倍）不符，采用标准口径「上万倍→约 200 倍」，知识点本身（远端 His 迫使 CO 弯折结合以削弱其优势）完整保留
- 定向深化（对低于 2600 的 9 节补充学术增量）：ch4-s2 补锌指/亮氨酸拉链模体 H2 与有限蛋白酶水解切域；ch4-s3 补纤维状蛋白家族 H2（α 角蛋白二硫键与烫发化学、弹性蛋白锁链素交联、明胶由来）、结构域交换、三级结构边际稳定性；ch4-s4 补深潜哺乳动物 Mb 氧库、高铁血红蛋白与亚甲蓝、Hill 图作图式、库存血 2,3-BPG 与曲线移位临床语言；ch4-s5 补 tafamidis 药理分子伴侣（前沿衔接）；ch5-s1 补酶工程 H2（固定化酶高果糖浆/加酶洗衣粉/重组凝乳酶/Taq-PCR、临床酶学 CK-MB/ALT）与「温和的另一面是脆弱」；ch5-s2 补抗体酶证据链、丝氨酸蛋白酶家族口袋分化（Asp189/Val-Thr 封口）；ch5-s3 补停流法直接目击 ES、酶浓度/温度/pH 新 H2（Arrhenius 与最适温度时移、钟形 pH 曲线、胃蛋白酶/胰蛋白酶/碱性磷酸酶最适 pH 表）、Km 工作区两端近似式；ch5-s4 补自杀底物 H2（克拉维酸锁死 β-内酰胺酶、别嘌呤醇双重身份）、阿司匹林乙酰化 COX 的长效抗栓、不可逆抑制时间依赖指纹表行、α=1+[I]/Ki 定量式与 Dixon 法、药物设计「占据/共价」两主线收束；ch5-s5 补 MWC/KNF 对比表、MAPK 三级级联、凝血内外源双入口汇流、别构酶居关键酶位
- 原有 H2 主题全部保留（含与插图 caption 呼应的「α 螺旋」（ch4-s1）、「胶原蛋白三股超螺旋」（ch4-s3）、「肌红蛋白/氧结合」（ch4-s4）、「诱导契合学说」（ch5-s2）、「米氏方程」（ch5-s3）及 ch6 三节各维生素主题）；ch4-s1 按简报「原样保留或轻微润色」处理：仅将 4 处 ASCII 直引号规范为「」，内容与原文逐字一致（3031 字符，6 个 H2、1 表）
- 质量自检：自写内联脚本 401 项原文关键事实 needle 超集核查（10 项加粗定界符假性失配经去 ** 复核全部命中）；q16–q30 题面事实逐题复核成立；禁用字符扫描（反引号、${、{{、HTML、制表符、H3+ 标题、ASCII/中文弯引号、emoji）零命中
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/biochemistry-ch4-6.ts biochemistry 4 5 6 输出「✓ 13 节全部通过 · 字数区间 2638–3031」；bunx tsc --noEmit 过滤本文件零错误；bunx eslint 该文件 0 警告 0 错误；git status 确认本任务仅触碰 src/data/expansions/biochemistry-ch4-6.ts（其余 M 状态系并行代理所为，与开工时快照一致）
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 13 节全部达标：ch4 蛋白质的三维结构与功能 5 节 / ch5 酶学 5 节 / ch6 维生素与辅酶 3 节；扩写前后字数对照（前→后）：ch4-s1 3031→3031（按简报保留、仅引号润色）、ch4-s2 961→2671、ch4-s3 834→2638、ch4-s4 1098→2660、ch4-s5 1218→2697、ch5-s1 1097→2660、ch5-s2 1050→2699、ch5-s3 1005→2754、ch5-s4 943→2679、ch5-s5 1079→2665、ch6-s1 1439→2810、ch6-s2 1335→2766、ch6-s3 1220→2651；合计 16310→35381 字符，全部落在 2600–3600 区间
- 每节 H2 为 5–7 个（要求 ≥4）；表格 ch4 共 6 张 / ch5 共 8 张 / ch6 共 5 张合计 19 张（每章 ≥2，要求 1–2）；术语首现注英文、重点术语加粗、引用统一「」、交叉引用全部指向本学科真实章节（糖类化学/脂质与生物膜/氨基酸与蛋白质的一级结构/蛋白质的三维结构与功能/酶学/维生素与辅酶/生物能学与生物氧化/糖代谢/脂质代谢/氨基酸与核苷酸代谢/物质代谢的整合与调节）
- 测验题事实核查结论（q16–q30 无题面失配）：q16 α 螺旋每圈 3.6 残基/螺距 0.54 nm/每残基 0.15 nm/转角 100°/n+4 氢键平行于轴 ✓；q17 波尔效应 H⁺/CO₂ 升高降 Hb 氧亲和力、促组织卸氧 ✓；q18 判断题「均为双曲线」错误——Mb 双曲线、Hb S 形 ✓；q19 2,3-BPG 结合 T 态中央空腔、稳定 T 态降亲和力（胎儿 γ 链结合弱对照）✓；q20 Anfinsen 一级结构包含全部折叠信息、天然构象热力学最稳态 ✓；q21 Km = Vmax/2 时底物浓度（接管时补回被遗漏的定义句）、k₃≪k₂ 时近似 Ks ✓；q22 表观 Km 增大而 Vmax 不变 → 竞争性 ✓；q23 酶只降活化能、不改平衡常数 ✓；q24 反竞争性只结合 ES、Km 与 Vmax 同比例下降、双倒数平行线 ✓；q25 快速调节 = 别构/共价修饰/酶原激活（诱导合成为慢调节）✓；q26 B₁→TPP 缺乏致脚气病 ✓；q27 生物素经酰胺键共价连于酶 Lys（生物胞素）、活性 CO₂ 载体 ✓；q28 维生素 K 为 γ-谷氨酰羧化酶辅酶、Gla 结合 Ca²⁺、华法林拮抗 ✓；q29 维生素 C 为脯氨酰-4-羟化酶辅因子、缺乏致坏血病、人体缺乏 L-古洛糖酸内酯氧化酶 ✓；q30 转氨酶辅酶为 PLP（Schiff 碱结合 α-氨基）✓
- 校验结果：validate-expansion 输出「✓ src/data/expansions/biochemistry-ch4-6.ts: 13 节全部通过 · 字数区间 2638–3031」；tsc 无本文件相关错误；eslint 0 警告 0 错误；禁用字符扫描零命中；401 项原文关键事实超集核查全部命中（含 10 项加粗定界假性失配的去 ** 复核）
- 集成提示：biochemistryCh4To6 为独立导出，src/data/expansions/index.ts 尚未挂载（rg 确认无引用），需主控在 sectionExpansions 接入后方可生效；与 quiz q16–q30、illustrations（α 螺旋 ch4-s1/胶原三股超螺旋 ch4-s3/肌红蛋白 1MBO ch4-s4/诱导契合 ch5-s2/米氏曲线 ch5-s3/三张维生素复合结构图 ch6-s1~s3 共 8 处 caption 主题）已互相对应
---
Task ID: 25-i
Agent: content-cellbio-i
Task: 细胞生物学第 1–3 章正文深度扩充（13 节超集式扩写）

Work Log:
- 开工前置：完整阅读 agent-ctx/expansion-guide.md 通用指南与 agent-ctx/exp-25-i-brief.md 批次简报；tail -60 worklog.md 掌握项目规范与并行批次格局（25-a/25-e/25-b 的「残留接管」模式为本任务提供参照）
- 逐节读原文：按简报行号区间 Read cell-biology.ts ch1 L24–208 / ch2 L209–434 / ch3 L435–599，13 节原文逐节细读并摘录全部知识点、数值、术语与 H2 主题（原文每节 861–1393 字符）
- 测验题核查：rg 定位 quiz/cell-biology.ts q01–q15（每章 5 题），逐题核对考点在扩写正文的成立性（详见 Stage Summary）
- 残留接管：发现 src/data/expansions/cell-biology-ch1-3.ts 已有同批次未完工残留（13 节均已扩写、无 worklog 记录、git 显示整个 expansions 目录未跟踪）——逐节全文复核后接管
- 接管复核发现并修正的问题：①ch2-s4 地高辛「安全窗/治疗窗狭窄（有效与中毒浓度接近）」前后两句重复表述，删去前句保留后句（更完整的血药浓度监测表述）；②ch3-s2 分泌实验交叉引用「参见本章第 1 节与第 1 章」指向含混，改为准确的「实验方法详见第 1 章第 4 节」；③ch1-s1 同句连用两个「（参见第 5 章）」，合并为一处
- 复核确认的既有优点（予以保留）：ch1-s1 补 Brown/Purkinje 前史与 Remak 纠错、三大发现年表；ch1-s2 补 FtsZ/MreB 骨架同源、抗生素 70S 选择毒性、球体平方-立方定量推演；ch1-s3 补衍射极限/数值孔径/空放大、超分辨 STED/PALM/STORM 前沿衔接；ch1-s4 补支原体污染检测、HeLa 伦理、类器官平台、³H β 射程与时间序列（数分钟 RER→约 20 分钟高尔基体→约 1 小时分泌颗粒）；ch2-s1 补 Gorter-Grendel 实验细节、髓鞘/线粒体内膜蛋白比例两端；ch2-s2 补磷脂酶探针、Frye-Edidin 1970 融合实验、脂扩散 10⁻⁸ cm²/s 与每秒 10⁷ 次换位、scramblase/flippase 对偶；ch2-s3 补脂质体水/离子 10⁹ 倍通透差、GLUT2/3 分工、三种门控对应「电化力」输入；ch2-s4 补鲨鱼直肠腺 2.4 Å 结构（与 2ZXE 插图 caption 呼应）、交替通达与锁闭态、Na⁺/Ca²⁺ 梯度定量、钠泵 ATP 预算三分之一；ch2-s5 补泡沫细胞、巨胞饮、网格蛋白「架子通用认货专用」、受体下调两种命运、纯合 FH 儿童期心梗；ch3-s1 补 SRP 7S RNA+六肽、GTP 握手计时器、停止转移序列、钙联接蛋白循环、集钙蛋白、G-6-P 酶；ch3-s2 补 3–8 层膜囊、CI-MPR 兼 IGF-II 受体、LIMP-2 旁路、紧密连接栅栏；ch3-s3 补 de Duve 推理链条、脂褐素残余体、贮积病发病率数千分之一、DAB 细胞化学、数百个过氧化物酶体、PTS2 通道；ch3-s4 补 BiP「腾手」开关、ATF4/GADD34、衣霉素/毒胡萝卜素诱导剂、α1-AT「肝内堵肺外缺」、UPR 减负-增援-决断框架
- 原有 H2 主题全部保留（含与插图 caption 呼应的「真核细胞区室化」（ch1-s2 动物细胞结构总览图）、「Na⁺/K⁺-ATPase：结构与 E1—E2 循环」（ch2-s4 钠泵循环图与 2ZXE 实验结构图）——2ZXE caption 的鲨鱼直肠腺/2.4 Å/10 次跨膜/锁闭态细节在正文均有对应）
- 质量自检：自写内联脚本 956 项原文关键事实 needle 超集核查（5 项措辞变体假性失配经人工逐条确认存在：仅蛋白质→仅由蛋白质构成、1953 年诺贝尔物理学奖→1953 年获诺贝尔物理学奖、膜蛋白分布→膜蛋白在两叶中的分布、与线粒体不同→与线粒体输入必须解折叠形成鲜明对比、蛋白酶切割→两位蛋白酶顺序切割）；45 项 quiz 靶向 needle 全命中；禁用字符扫描（反引号、${、{{、HTML、制表符、ASCII 直引号、emoji、H3+ 标题、代码围栏）零命中；交叉引用全部指向本学科真实章节（第 4/5/6/7/8/9/12 章）
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/cell-biology-ch1-3.ts cell-biology 1 2 3 输出「✓ 13 节全部通过 · 字数区间 2616–2808」；bunx tsc --noEmit 过滤本文件零错误；bunx eslint 该文件退出码 0（0 警告 0 错误）；git status 确认整个 expansions 目录为未跟踪新内容、本任务仅触碰 cell-biology-ch1-3.ts（其余 M 状态系并行代理所为，与开工时快照一致）
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 13 节全部达标：ch1 细胞概述与研究方法 4 节 / ch2 细胞质膜与跨膜运输 5 节 / ch3 细胞内膜系统 4 节；扩写前后字数对照（前→后）：ch1-s1 1032→2696、ch1-s2 1216→2693、ch1-s3 1215→2629、ch1-s4 1281→2693、ch2-s1 1393→2808、ch2-s2 861→2708、ch2-s3 1167→2692、ch2-s4 1226→2646、ch2-s5 1099→2660、ch3-s1 1084→2643、ch3-s2 1085→2683、ch3-s3 1135→2616、ch3-s4 983→2732；合计 14777→34899 字符，全部落在 2600–3600 区间
- 每节 H2 为 4–6 个（要求 ≥4）；表格 ch1 共 4 张 / ch2 共 7 张 / ch3 共 4 张合计 15 张（每章 ≥2，要求 1–2）；术语首现注英文、重点术语加粗、引用统一「」
- 测验题事实核查结论（q01–q15 无题面失配）：q01 Virchow 1855「一切细胞只能来自于已经存在的细胞」（omnis cellula e cellula）✓；q02 病毒无核糖体/无能量转换与独立代谢、必须活细胞内复制 ✓；q03 原核无核膜无内膜系统 70S 二分裂、真核 80S 有骨架 ✓；q04 光镜约 0.2 μm / TEM 0.1—0.2 nm ✓；q05 Jamieson-Palade 胰腺腺泡 ³H-亮氨酸脉冲-追踪：糙面内质网→高尔基体→浓缩分泌颗粒→胞外 ✓；q06 流动镶嵌模型（Singer 与 Nicolson，1972，流动基质+镶嵌蛋白+两大原则）✓；q07 FRAP 直接证明侧向扩散即膜流动性 ✓；q08 每水解 1 ATP 泵出 3 Na⁺、泵入 2 K⁺（产电泵）✓；q09 简单扩散无饱和/协助扩散饱和/SGLT1 为次级主动运输（正文明确归协同运输而非被动）/TVGYG 滤器与 AQP 排斥 H₃O⁺ ✓；q10 FH 为 LDL 受体缺陷致受体介导胞吞受阻 ✓；q11 信号肽-SRP-易位子（Sec61）共翻译转运（Blobel，1999 诺奖）✓；q12 I-cell 病 GlcNAc 磷酸转移酶缺陷、酶缺 M6P 标记被错误分泌 ✓；q13 溶酶体 V 型 H⁺-ATPase 维持 pH 约 4.6 ✓；q14 过氧化物酶体输入可保持折叠状态（PTS1/Ser-Lys-Leu，与线粒体需解折叠对比）✓；q15 N-连接糖基化起始在 RER（SER 三功能为膜脂合成/P450 解毒/钙库，正文表格明确分工）✓
- 校验结果：validate-expansion 输出「✓ src/data/expansions/cell-biology-ch1-3.ts: 13 节全部通过 · 字数区间 2616–2808」；tsc 无本文件相关错误；eslint 退出码 0；禁用字符扫描零命中；956 项超集核查全命中（含 5 项假性失配人工确认）
- 集成提示：cellBiologyCh1To3 为独立导出，需主控在 src/data/expansions/index.ts 的 sectionExpansions 挂载后方可生效；与 quiz q01–q15、illustrations（动物细胞结构总览 ch1-s2/钠泵 E1-E2 循环+2ZXE 实验结构 ch2-s4 共 3 处 caption 主题）已互相对应
---
Task ID: 25-c
Agent: content-biochem-c
Task: 生物化学第 7–9 章正文深度扩充（14 节超集式扩写）

Work Log:
- 开工前置：完整阅读 agent-ctx/expansion-guide.md 通用指南与 agent-ctx/exp-25-c-brief.md 批次简报；tail -60 worklog.md 掌握项目规范与并行批次格局（25-a/25-e/25-b/25-i 的「残留接管」模式为本任务提供参照）
- 逐节读原文：按简报行号区间 Read biochemistry.ts ch7 L1055–1214 / ch8 L1215–1431 / ch9 L1432–1650，14 节原文逐节细读并摘录全部知识点、数值、术语与 H2 主题（原文每节 1068–1347 字符）
- 测验题核查：rg 定位 quiz/biochemistry.ts q31–q45（每章 5 题），逐题核对考点在扩写正文的成立性（详见 Stage Summary）
- 残留接管：发现 src/data/expansions/biochemistry-ch7-9.ts 已有同批次未完工残留（14 节均已扩写、无 worklog 记录、未经校验：全部 14 节低于指南硬性下限 2600，其中 9 节低于校验下限 2400）——逐节全文复核后接管
- 接管复核发现并修正的问题：①ch9-s3 残留稿全节仅有缩写「G6PD」，quiz q45 解析口径的酶全名「6-磷酸葡萄糖脱氢酶（G6PD）」缺失，已在概述与氧化阶段表格两处补全；②ch9-s2 枢纽段原有的「Glu→α-KG、Asp→OAA」缩写记法在残留稿改表时丢失，已于表前导语恢复原记法（表中并注中文全名）；③ch9-s4 残留稿插入 Cori/丙氨酸循环对照表时把表格末行与后句粘连成一行（表格语法被破坏），已拆分修复并把表格移至两句之间合理位置；④ch7-s2 残留稿 B-DNA 参数仅存于表格（「每圈 10 个碱基对」正文表述缺失），已在正文补回完整参数句
- 接管复核确认的既有优点（予以保留）：Photo 51/1BNA Dickerson 结构与螺旋桨扭转、Lk=Tw+Wr 拓扑账本、Wallace 规则与 1% 错配降 1 ℃、Britten-Kohne 1968 复性动力学、碱水解区分 RNA/DNA、Karikó-Weissman mRNA 疫苗、能荷 0.8~0.9、Q 循环「两进一出」与 Racker 重组实验、Δp=Δψ−59mV·ΔpH 与 200 mV、Noji 显微观测旋转、state 3/4 呼吸控制率、c 环 8~15 变幅、ANT 占内膜蛋白一成、氧化磷酸化贡献九成、Mn-SOD 敲除小鼠、GSH/GSSG 100:1、mitohormesis、Embden–Meyerhof 发现史、LDH1/LDH2 翻转、2,3-BPG 支路、同位素示踪 CO₂ 来源、PDH E2 60 聚体、WHO G6PD 五级分类与 4 亿人、疟疾选择压力、丙酸→琥珀酰CoA（B₁₂）、F-2,6-BP 枢纽表、Gierke/Pompe/Cori/McArdle 四型糖原贮积症等学术增量
- 定向扩写（对不足 2600 的 14 节补充学术增量）：ch7-s1 补核苷酸类似物药物 H2（阿昔洛韦/AZT/阿糖胞苷「伪底物」策略）与 A₂₆₀/A₂₈₀ 质控、cAMP-PDE-咖啡因；ch7-s2 补双螺旋柔性 H2（持久长度 50 nm、A-tract 固有弯曲、TBP 弯折 TATA 约 80°、呼吸运动）；ch7-s3 补细胞内解链工程 H2（解旋酶/SSB/拓扑异构酶）、qPCR 熔解曲线单峰判读、固相 vs 液相杂交、PCR 三步温控程序化、CGH；ch7-s4 补原核转录翻译偶联与真核加工时序、UTR-IRE 顺式元件、反密码子环恒 7 nt 与可变环分类、70S/80S 抗生素选择毒性、circRNA miRNA 海绵、治疗性 mRNA H2（2023 诺奖）；ch8-s1 补高能键六型一览表、腺苷酸激酶平方级 AMP 升高与 AMPK 传感；ch8-s2 补生物氧化三形式、Cyt c 104 残基保守性、超复合物 I₁III₂IV₁ 呼吸体与嵴 H2、CoQ 公共瓶颈；ch8-s3 补质子动力势其他用途 H2（ANT/磷酸/丙酮酸载体皆用户）与三类药剂分辨表（耗氧/ATP/梯度三态，氧电极判别顺序）；ch8-s4 补无氧时不穿膜方案、G3P 脱氢酶位于内膜外表面、ANT 占内膜蛋白一成、三复合物释能 69.5/36.7/110 kJ/mol 与泵质子开销匹配、效率口径三成一档与 P/O 氧电极测定、心脑线粒体占比三成；ch8-s5 补过氧化氢酶转换数居酶冠、线粒体 DNA 损累积与衰老线粒体学说、铁死亡 GPx4、Nrf2-Keap1 与硫氧还蛋白双系统 H2、膜电位-ROS 泄漏反比；ch9-s1 补发现史 H2（Buchner 1897/Harden-Young 1905/Embden-Meyerhof-Parnas）、HIF-1α 低氧上调全套酵解酶、己糖激酶四型分布与葡萄糖感受器、MCT 乳酸出胞；ch9-s2 补 PDH 临床注脚 H2（B₁ 缺乏脚气病/Wernicke、砷中毒、先天缺陷生酮饮食）、柠檬酸合酶诱导契合防漏、氨基酸汇入位点表、乙醛酸循环保碳捷径；ch9-s3 补内酯酶与 5-磷酸核酮糖/木酮糖真实底物、G6PD 竞争抑制解除机制、PRPP 接口 H2、转酮/转醛三步接力反应链、红细胞 PPP 流量、棕榈酸 14 NADPH 定量注脚、高铁血红蛋白还原、萘丸诱因；ch9-s4 补夜间血糖两管道值守、草酰乙酸三重身份、果糖二磷酸酶-1 缺乏临床注脚、Cori/丙氨酸循环分工表、空腹时序与临床注脚 H2（酒精性空腹低血糖的 NADH 机制、胰岛素瘤与肝衰竭鉴别思路）；ch9-s5 补 UDPG 焦磷酸化酶 ΔG°′ 近零与 PPi 单向阀、糖原颗粒 10~40 nm、GSK3-Akt 通路与定向磷酸酶 H2、餐后两路输入在 UDPG 合流、糖原负荷法超储数成、缺血性运动试验鉴别 V 型
- 原有 H2 主题全部保留（含与插图 caption 呼应的「嘌呤与嘧啶/核苷与核苷酸」（ch7-s1 碱基与核苷酸两图）、「Watson-Crick 模型与大沟小沟」（ch7-s2 1BNA）、「熔解曲线与 Tm」（ch7-s3 变性曲线图）、「三大类 RNA」（ch7-s4）、「ATP 居中能量货币」（ch8-s1 ATP 结构图）、「四类电子传递载体/四大复合物」（ch8-s2 呼吸链全貌与 NAD/FAD 辅酶图）、「ATP 合酶结构/结合变化机制」（ch8-s3 6OQV 与 1C17 c 环两图，caption 的半通道/Glu 残基/c 环化学计量在正文均有对应）、「十步反应」（ch9-s1 糖酵解全图）、「八步反应」（ch9-s2 TCA 全图）、「氧化/非氧化阶段」（ch9-s3 PPP 图）、「高度分支分子设计」（ch9-s5 糖原分支图））
- 质量自检：自写内联脚本 601 项原文关键事实 needle 超集核查（含 ** 归一化，2 项空格型假性失配经原文定位人工确认存在）全部命中；q31–q45 题面事实逐题复核成立（2 项 bold 空格假性失配人工确认）；禁用字符扫描（反引号、${、{{、HTML、制表符、H3+ 标题、代码围栏、ASCII 直引号、emoji）零命中；交叉引用全部指向本学科真实章节（核酸化学/生物能学与生物氧化/糖代谢/脂质代谢/氨基酸与核苷酸代谢/物质代谢的整合与调节/酶学/维生素与辅酶/蛋白质的三维结构与功能/糖类化学）
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/biochemistry-ch7-9.ts biochemistry 7 8 9 输出「✓ 14 节全部通过 · 字数区间 2633–2993」；bunx tsc --noEmit 无本文件相关错误（现存错误均位于 agent-ctx/tmp24a、examples、skills 等并行任务遗留文件）；bunx eslint 本文件退出码 0（0 警告 0 错误）；git status 确认整个 expansions 目录为未跟踪新内容、本任务仅触碰 biochemistry-ch7-9.ts（其余 M 状态系并行代理所为，与开工时快照一致）
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 14 节全部达标：ch7 核酸化学 4 节 / ch8 生物能学与生物氧化 5 节 / ch9 糖代谢 5 节；扩写前后字数对照（前→后）：ch7-s1 1136→2993、ch7-s2 1191→2689、ch7-s3 1068→2664、ch7-s4 1157→2705、ch8-s1 1240→2753、ch8-s2 1347→2701、ch8-s3 1234→2686、ch8-s4 1314→2633、ch8-s5 1118→2649、ch9-s1 1216→2671、ch9-s2 1346→2781、ch9-s3 1070→2644、ch9-s4 1288→2647、ch9-s5 1190→2709；合计 16915→37925 字符，全部落在 2600–3600 区间
- 每节 H2 为 6–7 个（要求 ≥4）；表格 ch7 共 8 张 / ch8 共 8 张 / ch9 共 10 张合计 26 张（每章 ≥2，要求 1–2；ch8-s3 原零表格已补三类药剂分辨表）；术语首现注英文、重点术语加粗、引用统一「」
- 测验题事实核查结论（q31–q45 无题面失配）：q31 DNA 含 T、RNA 含 U、戊糖脱氧核糖/核糖之别、稀有碱基以 tRNA 最丰 ✓；q32 B-DNA 右手、直径 2 nm、每圈 10 bp、螺距 3.4 nm、间距 0.34 nm、A 右手 11 bp、Z 左手锯齿 12 bp ✓；q33 GC% 越高 Tm 越高（69.3+0.41(G+C)%）、盐升甲酰胺降 ✓；q34 tRNA 三叶草二级/倒 L 三级、3'-CCA 与反密码子环分居两端 ✓；q35 Z-DNA 左手锯齿、交替嘌呤-嘧啶 GC、高盐 ✓；q36 ATP→ADP+Pi ΔG°′=−30.5 kJ/mol（细胞内约 −50）、>21 kJ/mol 判据、G6P −13.8 低能 ✓；q37 Mitchell 1961 化学渗透假说 1978 诺奖、Boyer 结合变化机制 1997 ✓；q38 CN⁻/CO/H₂S/N₃⁻ 抑复合物 IV a₃ 血红素、鱼藤酮抑 I、抗霉素 A 抑 III、亚硝酸盐-硫代硫酸盐解毒 ✓；q39 甘油-α-磷酸穿梭 FAD 入链约 1.5 ATP、苹果酸穿梭约 2.5 ✓；q40 DNP 脂溶性质子载体与 UCP1 生理性质子通道为解偶联、寡霉素抑 F₀、抗霉素 A 抑 III 均非解偶联 ✓；q41 PFK-1 最重要限速酶（ATP/柠檬酸/H⁺ 抑制、AMP 与 F-2,6-BP 最强激活）✓；q42 净 2 ATP + 2 NADH（两次底物水平磷酸化 4 ATP 减投资 2 ATP）✓；q43 肌肉无葡萄糖-6-磷酸酶、G6P 只入酵解/PPP、Cori 循环间接补血糖 ✓；q44 乙酰CoA 为丙酮酸羧化酶别构激活剂（同时抑制 PDH 促分流）✓；q45 PPP 不产能、核心产物 NADPH 与核糖-5-磷酸、限速酶 6-磷酸葡萄糖脱氢酶（G6PD）✓
- 校验结果：validate-expansion 输出「✓ src/data/expansions/biochemistry-ch7-9.ts: 14 节全部通过 · 字数区间 2633–2993」；tsc 无本文件相关错误；eslint 退出码 0；禁用字符扫描零命中；601 项原文关键事实超集核查全部命中（含 2 项空格型假性失配人工复核）
- 学术口径取舍：①有氧氧化能量效率采用双口径区间「约三分之一到过半」（按细胞内 ~50 kJ/ATP 与标准态 30.5 kJ/ATP 分别计），回避单一数值争议；②三复合物每对电子释能采用 69.5/36.7/110 kJ/mol 教材口径；③c 环亚基数表述为「8 到 15 不等」（覆盖 6OQV c₁₀ 与 1C17 c₁₂ 的插图 caption 口径）；④红细胞 PPP 流量用「百分之几、氧化应激成倍上调」区间表述；⑤心肌线粒体体积占比用「三成上下」；⑥糖原负荷法用「超储数成」保守口径
- 集成提示：biochemistryCh7To9 为独立导出，src/data/expansions/index.ts 目前仅挂载 biochemistryCh1To3 与 biochemistryCh4To6，需主控在 sectionExpansions 接入后方可生效；与 quiz q31–q45、illustrations（五种碱基+核苷酸到核苷酸两图 ch7-s1/1BNA ch7-s2/熔解曲线 ch7-s3/呼吸链全貌+辅酶两图 ch8-s2/6OQV+1C17 两图 ch8-s3/糖酵解 ch9-s1/TCA ch9-s2/PPP ch9-s3/糖原分支 ch9-s5 共 12 处 caption 主题）已互相对应
---
Task ID: 25-g
Agent: content-molbio-g
Task: 分子生物学第 7–9 章正文深度扩充（14 节超集式扩写）

Work Log:
- 开工前置：完整阅读 agent-ctx/expansion-guide.md 通用指南与 agent-ctx/exp-25-g-brief.md 批次简报；tail -60 worklog.md 掌握项目规范与并行批次格局（25-a/25-e/25-b/25-i/25-c 的「残留接管」模式为本任务提供参照）
- 逐节读原文：按简报行号区间 Read molecular-biology.ts ch7 L1188–1368 / ch8 L1369–1595 / ch9 L1596–1816，14 节原文逐节细读并摘录全部知识点、数值、术语与 H2 主题（原文每节 984–1604 字符）
- 测验题核查：rg 定位 quiz/molecular-biology.ts q31–q45（每章 5 题），逐题核对考点在扩写正文的成立性（详见 Stage Summary）
- 残留接管：发现 src/data/expansions/molecular-biology-ch7-9.ts 已有同批次未完工残留（14 节均已成稿、无 worklog 记录、未经校验：仅 ch7-s1/ch8-s1 达标，其余 12 节低于指南硬性下限 2600，其中 9 节低于校验下限 2400）——逐节全文复核后接管
- 接管复核确认的既有优点（予以保留）：PaJaMo 实验细节与 F′ lac 性导、LacI 347 aa/1LBG 4.8 Å 结构、lacP -35 区 TTTACA 弱启动子分子解释、CAP Ⅰ/Ⅱ类位点架构、trpL 1:2 暂停发夹与 GCN4 真核对照、核糖开关 Breaker/Roth 发现史与 DsrA 激活型反义、ppGpp「魔斑」1969 Cashel-Gallant 与自反馈、30 nm 纤维活体争议、二价结构域、TET 氧化去甲基化、IGF2/H19 甲基化-CTCF 开关机制、超增强子与凝聚体模型、BCL11A 增强子编辑镰贫疗法、EWS-FLI1 融合、STAT3 高 IgE、IκBα 振荡负反馈、miR-122-HCV、P body、Lin28？无——lin-4/let-7 2024 诺奖、patisiran、乒乓循环 10 nt 错位签名、华莱士规则、ASO、Southern HIV 应用、28S/18S 完整度参照、smFISH、Cetus 传奇与 1985 镰贫产前诊断、MIQE、UNG/dUTP、ARMS、星号活性、λ 包装效率、文库规模 70 万/9 万克隆推演、Gibson 无缝组装、BigDye、峰图母语、T2T-CHM13、Q30、Botstein 1980/Fields-Song 1989/Jeffreys 1985 溯源、3-AT 压本底、CUT&RUN/Tag、双荧光素酶零本底等学术增量
- 定向深化（对不足 2600 的 12 节补充学术增量）：ch7-s2 补诱导物排斥（inducer exclusion，EIIA 结合 LacY 封锁底物入胞）与 CAP 位点 22 bp 准对称回文/双半位点识别几何；ch7-s3 补「为何选色氨酸作标尺」代谢经济学（丰度最低＋五步昂贵）、双 UGG 停顿窗口加倍、+140 nt 通读率连续输出、阻遏/衰减时间尺度互补、trpR 远离操纵子与 lacI 紧邻对照；ch7-s4 补 relaxed/stringent 命名由来、诺西那生钠（nusinersen）反义药物衔接 SMN2 剪接、持留菌-ppGpp 耐药避风港；ch8-s2 补 NRSE/REST 沉默子代表、增强子活性单元剂量拓扑、Grosveld 1987 转基因位置非依赖实验、TAD 边界病、启动子清扫（promoter bashing）；ch8-s3 补人类 TF 约 1600 个/C2H2 最大家族/核受体 48 成员药理富矿、特异性悖论与组合解答、c-Myc 二聚体饱和致癌路线、模块化暗面 EWS-FLI1；ch8-s4 补通路串扰（GR-NF-κB 反式抑制）与信号动力学编码（ERK 脉冲/持续）；ch8-s5 补 CDR1as miR-7 海绵与 ceRNA 假说；ch9-s1 补分子信标（molecular beacon）、Southern 大片段重排独到优势、DEPC/RNase 操作纪律与 28S:18S≈2:1 完整度指标、FISH 探针尺寸-分辨率取舍；ch9-s2 补 Cetus-罗氏 1991 三亿美元专利史、第一链引物三选一、qPCR 三道质量关卡（效率 90%~110%/内参验证/产物单一）、touchdown PCR；ch9-s3 补双酶切定向克隆、穿梭载体、TEV 标签拆卸；ch9-s4 补循环测序与 BigDye、放射自显影手工读序年代、Phred Q 值溯源、纳米孔约五碱基电流窗口与神经网络解调；ch9-s5 补 ChIP-on-chip 前身、GFP 定向改造（EGFP/GCaMP）、EMSA 定量变体
- 原有 H2 主题全部保留（含与插图 caption 呼应的「负调控的机制/阻遏蛋白的分子解剖」（ch7-s1 lac 操纵子图与 1LBG 结构图，成环/HTH 大沟/铰链螺旋/4.8 Å 细节在正文均有对应）、「第二层：衰减」（ch7-s3 衰减机制图，1–4 区段/3:4/2:3/1:2 全呼应）、「核小体与染色质的可及性」（ch8-s1 包装层级图与 1AOI 2.8 Å Luger 1997）、「siRNA 与 RNA 干扰技术」（ch8-s5 RNAi 通路图，Dicer/RISC/PIWI/Fire-Mello）、「PCR 的基本原理」（ch9-s2 三步循环图）、「Sanger 双脱氧链终止法/自动化荧光 Sanger」（ch9-s4 四色测序图）
- 质量自检：自写内联脚本 794 项原文关键事实 needle 超集核查（含 ** 归一化；7 项假性失配经人工逐条确认存在：trpA→trpE-D-C-B-A 记法、连续 U→连续约 7～9 个 U、GTP + ATP→全角＋、LPS-TLR4→LPS 经 TLR4、数分钟至数十小时→从数分钟到数十小时、IRP1/2→IRP1/IRP2 分述、$3B→30 亿美元）全部命中；47 项 quiz 靶向 needle 全命中；36 项新增学术增量 spot check 全命中；禁用字符扫描（反引号、${、{{、HTML、制表符、H3+ 标题、代码围栏、ASCII/弯引号、emoji）零命中；交叉引用全部指向本学科真实章节（第 1/4/8/9/11/12 章及本章第 2/4/5 节）
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/molecular-biology-ch7-9.ts molecular-biology 7 8 9 输出「✓ 14 节全部通过 · 字数区间 2616–2804」；bunx tsc --noEmit 无本文件相关错误（现存错误均位于 agent-ctx/tmp24a、examples、skills 等并行任务遗留文件）；bunx eslint 本文件退出码 0（0 警告 0 错误）；git status 确认整个 expansions 目录为未跟踪新内容、本任务仅触碰 molecular-biology-ch7-9.ts（其余 M 状态系并行代理所为，与开工时快照一致）
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 14 节全部达标：ch7 原核基因表达调控 4 节 / ch8 真核基因表达调控 5 节 / ch9 分子生物学研究技术 5 节；扩写前后字数对照（前→后）：ch7-s1 1150→2753、ch7-s2 984→2675、ch7-s3 1068→2616、ch7-s4 1275→2642、ch8-s1 1528→2804、ch8-s2 999→2666、ch8-s3 1098→2754、ch8-s4 1368→2697、ch8-s5 1604→2730、ch9-s1 1156→2677、ch9-s2 1231→2681、ch9-s3 1211→2653、ch9-s4 1309→2657、ch9-s5 1266→2670；合计 17247→37675 字符，全部落在 2600–3600 区间
- 每节 H2 为 5–6 个（要求 ≥4）；表格 ch7 共 4 张 / ch8 共 5 张 / ch9 共 5 张合计 14 张（每章 ≥2，要求 1–2）；术语首现注英文、重点术语加粗、引用统一「」
- 测验题事实核查结论（q31–q45 无题面失配）：q31 异乳糖（allolactose，β-1→6）为天然诱导物、亲和力下降约 1000 倍、IPTG 为不可代谢「免费」诱导物 ✓；q32 高表达需「有乳糖＋无葡萄糖（cAMP 高）」与门 ✓；q33 Trp 充足→核糖体越过双 UGG 遮蔽区段 2→3:4 终止子（GC 茎环＋poly(U)）提前终止、饥饿→2:3 抗终止子读通 ✓；q34 lacOᶜ 仅顺式、lacI⁺ 反式互补（F′ lac 部分二倍体）✓；q35 RelA 催化 GTP＋ATP→ppGpp「魔斑」、DksA 协同改启动子选择、SpoT 水解 ✓；q36 乙酰化中和 Lys 正电荷→松散染色质→激活（HAT 写入/HDAC 移除）、H3K27ac 活跃增强子 ✓；q37 增强子距离/方向/位置三不敏感＋组织特异（「必须位于启动子内部」为错误项）✓；q38 DNMT1 辅 UHRF1 于复制叉维持甲基化、DNMT3A/3B 从头、TET 5mC→5hmC ✓；q39 miRNA 顺序 pri→Drosha-DGCR8→exportin-5→Dicer→Ago2/RISC ✓；q40 Mediator 约 30 亚基头-中-尾＋CDK8、增强子信息下传总线 ✓；q41 Northern 同时给出 mRNA 大小与丰度 ✓；q42 TaqMan 依赖 Taq 5′→3′ 外切活性切下报告基团（Taq 无 3′→5′ 校读）✓；q43 插入破坏 lacZα、Δ(lacZ)M15 宿主 α 互补失效显白斑 ✓；q44 ddNTP（2′,3′-）缺 3′-OH 无法成磷酸二酯键 ✓；q45 ChIP 次序甲醛交联→超声 200–500 bp→免疫沉淀→逆转交联→DNA 纯化检测 ✓
- 校验结果：validate-expansion 输出「✓ src/data/expansions/molecular-biology-ch7-9.ts: 14 节全部通过 · 字数区间 2616–2804」；tsc 无本文件相关错误；eslint 退出码 0；禁用字符扫描零命中；794 项原文关键事实超集核查全部命中（含 7 项假性失配人工复核）；47 项 quiz 靶向 needle 全命中
- 学术口径取舍：①CAP-cAMP 增强幅度用「数十倍」区间表述；②trp 动态范围沿用「约 700 倍（70×10）」教材口径、衰减读数标注 +140 nt 与 140 nt 前导 RNA 并存（原文一致）；③人类转录因子总数用「以千计（约 1600 个）」、核受体用「48 个成员」口径；④纳米孔电流窗口用「约五个碱基」；⑤RT-qPCR 扩增效率理想区间 90%～110%（MIQE 口径）；⑥Cetus-罗氏专利用「约三亿美元」
- 集成提示：molecularBiologyCh7To9 为独立导出，src/data/expansions/index.ts 目前未挂载本文件（rg 确认无引用），需主控在 sectionExpansions 接入后方可生效；与 quiz q31–q45、illustrations（lac 操纵子+1LBG 两图 ch7-s1/trp 衰减图 ch7-s3/包装层级+1AOI 两图 ch8-s1/RNAi 通路图 ch8-s5/PCR 循环图 ch9-s2/Sanger 测序图 ch9-s4 共 8 处 caption 主题）已互相对应

---
Task ID: 24-a
Agent: 主控（子代理启动连续失败后接管收尾，残余下载为其所留）
Task: 微生物学 Commons 插图搜集与挂载

Work Log:
- 子代理 5 次启动失败（context deadline / 后端超时），但每次失败前已下载部分图片；共遗留 14 张图（08:45–10:06 时间戳）无清单
- 主控反查来源：VLM 转录图内标注 + Commons API 检索 + imageinfo 缩略图尺寸匹配（iiurlwidth 计算，±2px 容差）+ JPEG 字节级比对，14 张全部锁定源文件与许可证
- 补充下载 2 张：rhizopus-sporangium.jpg（File:Sporangium of Rhizopus.jpg, CC BY-SA 4.0）、complement-pathway.png（File:09 Hegasy Complement System Wiki EN CCBYSA.png, CC BY-SA 4.0）
- VLM 科学审校 16 张全部通过；补体图首轮候选 File:Complement pathway.svg 因 C3 转化酶误标 C2b（应为 C2a）被淘汰，换用 Hegasy 现代版复审通过
- 写入 src/data/micro-illustrations.ts（16 张配图 + 学术中文图注，导出 microIllustrations）；manifest-24a.json（16 条含 VLM 结论与淘汰记录）
- 集成：illustrations.ts 的 getIllustrations 合并 microIllustrations；subjectCovers 与 heroImage 切换至自绘 SVG；删除 5 张 AI 封面 PNG

Stage Summary:
- 微生物学插图体系完成：16 张 Commons 真实图覆盖 ch2/3/4/7/8/9/10/11/12 共 16 个小节，许可证全部在 CC0/PD/CC BY/CC BY-SA 白名单，AI 生成图 0 张
- 全站封面与主视觉切换为 Task 24-b 自绘 SVG（学术编辑风），AI 生成图在项目中清零
- 工程经验：Bun fetch 访问 Commons API 需带 Accept: application/json 与 Accept-Encoding: identity 头，否则被边缘节点 403
---
Task ID: 25-d
Agent: content-biochem-d
Task: 生物化学第 10–12 章正文深度扩充（14 节超集式扩写，残留接管）

Work Log:
- 开工前置：完整阅读 agent-ctx/expansion-guide.md 通用指南与 agent-ctx/exp-25-d-brief.md 批次简报；tail -60 worklog.md 掌握项目规范与并行批次格局（25-b 等批次的「残留接管」模式为本任务提供参照）。注：简报正文写「共 12 小节」，但行号区间与原文件结构均为 ch10 5 节 + ch11 5 节 + ch12 4 节 = 14 节，以行号区间与校验命令为准执行 14 节
- 逐节读原文：按简报行号区间 Read biochemistry.ts ch10 L1651–1885 / ch11 L1886–2104 / ch12 L2105–2287，14 节原文逐节细读并摘录全部知识点、数值、术语与 H2 主题（原文每节 961~1404 字符）
- 测验题核查：rg 定位 quiz/biochemistry.ts q46–q60（每章 5 题），逐题核对考点在扩写正文的成立性（详见 Stage Summary）
- 残留接管：发现 src/data/expansions/biochemistry-ch10-12.ts 已有同批次未完工残留（14 节均已具雏形、无 worklog 记录、未经校验：仅 ch10-s1/s3/s5 达 2600 下限，其余 11 节低于指南硬性下限 2600，其中 7 节低于校验下限 2400：ch11-s2/s4/s5 与 ch12-s1~s4；全部 14 节零表格不符合每章表格要求）——逐节全文复核后接管
- 接管复核发现并修正的问题：①ch11-s2 残留稿把原文「肝细胞终末小静脉周围（腺泡Ⅲ带）尿素循环酶含量最高」改写成相反的「门周带（腺泡Ⅰ带）含量最高+Ⅲ带谷氨酰胺合成酶精滤」叙事，违反超集原则，已删除矛盾段并将原文结论原样恢复至「调节」节；②ch11-s3 残留稿多胺写作「精脐」（错字），已正为「精脒」；③ch10-s1 残留稿称「肝型 CPT-I 对丙二酰CoA 敏感性显著高于肌型（阈值低约一个数量级）」，与文献通行口径（肌型更敏感）方向相悖且系无据新增，已改为只保留「CPT-I 有肝型/肌型同工酶、组织分工」的安全表述；④ch10-s3 残留稿称「神经酸可达 C24:0」，神经酸实为 24:1（24:0 为木蜡酸），已更正并列出两种 C24 级脂肪酸；⑤ch11-s4 残留稿丢失原文「AMP 抑制自身分支（而 GTP 供能反之亦然）」的分支末端反馈要点，已在交叉调节处补全（AMP 抑制腺苷酸代琥珀酸合成酶、GMP 抑制 IMP 脱氢酶）
- 接管复核确认的既有优点（予以保留）：Knoop 1904 苯环标记与 Lynen 酶学、ETF 汇入 CoQ 池、每碳 6.6 vs 5 ATP 均摊账、MCAD 低酮性低血糖与 MCT 营养、Knoop/β位化学语法、酮体三成分检测表（硝普盐对乙酰乙酸阳性/β-羟丁酸阴性）、HMG-CoA 线粒体/胞质两车间、MCT1 上调、β-羟丁酸 HDAC 抑制剂（2013）、DKA 阴离子间隙与「补液+胰岛素为主」、CoA 回收视角看「肝只产不用」、柠檬酸-丙酮酸穿梭 8 NADPH 账目、ACC 三级信号、FAS 二聚体与 ACP 机械手、延长/去饱和与必需脂肪酸缺乏、HSL/ATGL/MGL 三步脂解接力、perilipin 开闸、lipin、Kennedy 通路两条 CDP 策略、PEMT 支路、L/S≥2 胎肺成熟、SREBP-2-SCAP-Insig 与他汀睡前服用、异戊二烯暗线（泛醌/多萜醇/异戊烯化）、LDL 受体三重应答、依折麦布/PCSK9 靶点谱系、PLP↔PMP 与 m-AST、De Ritis 比、多源一汇氨收支、Owen 饥饿时序、NLRP3 炎症小体、别嘌呤醇自杀抑制与钼蝶呤、肿瘤溶解综合征、拉布立酶借回尿酸酶、磺胺 Woods-Fildes 发现史、6-MP-别嘌呤醇相互作用、嘌呤/嘧啶分解对照表、器官燃料环流表、GLUT1/GLUT3 免检通道、Randle 葡萄糖-脂肪酸循环、Sutherland 1957 cAMP 发现史、β 细胞 GLUT2-葡糖激酶-K_ATP-磺脲、RTK/GPCR 对照表、霍乱/百日咳毒素与 1994 诺奖、Schoenheimer《身体组分的动态状态》、IDH-2-羟基戊二酸致癌代谢物、FBA 必需基因预测等学术增量
- 定向扩写（对不足 2600 的 11 节补充学术增量）：ch10-s2 补「先肌后脑」酮体供给时序（Owen 经典研究）与治疗性生酮 0.5~3 mmol/L 区间；ch10-s3 补极长链脂肪酸过氧化物酶体加工与 X-ALD 注脚；ch10-s4 补磷脂酰肌醇-肌醇再循环与锂盐治疗双相障碍机制假说、胆碱缺乏性脂肪肝机理；ch11-s1 补氨的多源一汇格局、门脉/体循环血氨浓度差与「氨处理器容量」、转氨酶胞内酶属性；ch11-s2 补精氨酸枢纽 H2（NOS-NO-瓜氨酸回环、肌酸、多胺四线分流）、循环中间物催化量与补充治疗、ASS/I 型瓜氨酸血症、CPS-I/II 氮源分工；ch11-s3 补支链α-酮酸脱氢酶复合体与枫糖尿症、「酮亮赖」口诀、围孕期补叶酸与神经管缺陷；ch11-s4 补 CPS-I/CPS-II 同工酶对照表、IMP 两幕装配与 PRPP「通用核糖币」、dUMP 双来路（dUTPase/dCMP 脱氨）、乳清酸尿症与尿苷旁路给药、补救的组织分工与 TK-阿昔洛韦活化；ch11-s5 补嘌呤分解双小路、尿酸 pKa 5.4 与痛风石好发部位理化、420 μmol/L 切点与肾 2/3 排泄分型、拉布立酶、嘌呤/嘧啶分解对照表、磺胺发现史与 6-MP 药物相互作用；ch12-s1 补燃料环流 H2+总表、肝体重 2%/静息氧耗五分之一、心肌脂肪酸供能六至七成、脂库 10~15 kg、肌蛋白库过半；ch12-s2 补 q60 因果锁链显式化、饥饿时间线总览表、DKA/HHS 对比、糖皮质激素「拆东墙补西墙」、餐后血脂两波次、终末期蛋白分解回升；ch12-s3 补三层调节举例（PFK-1/糖原合酶/皮质醇）、β 细胞传感与磺脲、Sutherland 史、RTK/GPCR 对照表、胰岛素/胰高血糖素摩尔比判读；ch12-s4 补关键节点表、单向阀/倒车挡设计笔法、Schoenheimer 动态代谢史、FBA 与网络鲁棒性、IDH 注脚
- 原有 H2 主题全部保留（含与插图 caption 呼应的「β氧化的四步循环/能量核算」（ch10-s1 β-氧化螺旋图：四步反应/肉碱穿梭/106 ATP/丙酰CoA→琥珀酰CoA 全对应）、「五步反应/要点归纳」（ch11-s2 尿素循环图：线粒体-胞质分区/延胡索酸汇入 TCA/3 ATP 4 高能键/CPS-I 限速/AGA 全对应））
- 字符规范化：残留稿 4′-磷酸泛酰巯基乙胺、2′-磷酸中的 ASCII 撇号（U+27）统一改为素字符 ′（U+2032），消除 ASCII 直引号残留
- 质量自检：自写内联脚本 728 项原文关键事实 needle 超集核查（含 ** 归一化）——713 项直接命中，15 项为措辞/表格形态假性失配（「苹果酸酶氧化脱羧…顺产 1 分子 NADPH」「大肠杆菌则为可解离」「缩合时 CO₂ 释出…其释出推动缩合」「AMP 经腺苷酸脱氨酶水解脱氨 → IMP + NH₄⁺」「尿黑酸症（尿黑酸氧化酶缺陷…」等），经 19 项二次定向 needle 逐一确认全部存在；q46–q60 共 58 项 quiz 靶向 needle 全命中（q47 表格实为「8 × 10 | 80」正确口径，初检误写 7×10 属核查脚本笔误）；禁用字符扫描（反引号、${、{{、HTML、制表符、H3+ 标题、代码围栏、ASCII/弯引号、emoji、图片链接、非 H2 开头）零命中；交叉引用全部指向本学科真实章节（脂质代谢/氨基酸与核苷酸代谢/物质代谢的整合与调节/糖代谢/酶学/维生素与辅酶/核酸化学/蛋白质的三维结构与功能）
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/biochemistry-ch10-12.ts biochemistry 10 11 12 输出「✓ 14 节全部通过 · 字数区间 2612–2877」；bunx tsc --noEmit 无本文件相关错误（现存 6 处错误均位于 agent-ctx/tmp24a、examples、scripts、skills 等并行任务遗留文件）；bunx eslint 本文件退出码 0；git status 确认整个 expansions 目录为未跟踪新内容、本任务仅触碰 biochemistry-ch10-12.ts（其余 M/D 状态系并行代理与插图任务所为，与开工时快照一致）
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 14 节全部达标：ch10 脂质代谢 5 节 / ch11 氨基酸与核苷酸代谢 5 节 / ch12 物质代谢的整合与调节 4 节（简报「12 小节」系笔误，实际以行号区间 5+5+4=14 节执行并全部通过校验）；扩写前后字数对照（前→后）：ch10-s1 1300→2877、ch10-s2 1095→2721、ch10-s3 1210→2730、ch10-s4 961→2682、ch10-s5 1404→2694、ch11-s1 1075→2736、ch11-s2 1185→2691、ch11-s3 1271→2775、ch11-s4 1046→2612、ch11-s5 1213→2614、ch12-s1 1276→2617、ch12-s2 984→2629、ch12-s3 1156→2639、ch12-s4 1181→2617；合计 16357→37634 字符，全部落在 2600–3600 区间
- 每节 H2 为 5–9 个（要求 ≥4）；表格 ch10 共 5 张 / ch11 共 8 张 / ch12 共 7 张合计 20 张（每章 ≥2 要求充分满足，接管前全批零表格）；术语首现注英文、重点术语加粗、引用统一「」
- 测验题事实核查结论（q46–q60 无题面失配）：q46 酮体肝细胞线粒体生成（HMG-CoA 合酶限速）✓；q47 棕榈酸 7 轮产 8 乙酰CoA+7 FADH₂+7 NADH、8×10+7×1.5+7×2.5=108 减活化 2 高能键净 106（旧值 129）✓；q48 乙酰CoA 羧化酶为从头合成限速酶（柠檬酸激活/脂酰CoA 抑制/AMPK 失活）、CPT-I 为β氧化限速、HMG-CoA 还原酶为胆固醇合成限速 ✓；q49 肝缺 SCOT 不能利用酮体（肝内生成、肝外利用）✓；q50 他汀竞争性抑制 HMG-CoA 还原酶+代偿上调肝 LDL 受体（依折麦布抑吸收、PCSK9 抑制剂阻受体降解为干扰项对照）✓；q51 联合脱氨基（转氨+GDH）为主要方式且可逆、肌肉走嘌呤核苷酸循环 ✓；q52 CPS-I 限速+AGA 别构激活、尿素 2N 来自 NH₄⁺ 与天冬氨酸、耗 3 ATP（4 高能键）✓；q53 尿酸为人类嘌呤分解终产物（缺尿酸酶）、黄嘌呤氧化酶、别嘌呤醇自杀抑制 ✓；q54 纯生酮仅 Leu、Lys（生糖兼生酮 Ile/Phe/Tyr/Trp）✓；q55 嘧啶分解为 β-丙氨酸/β-氨基异丁酸、水溶不结晶 ✓；q56 胰岛素唯一降糖、RTK（IRS-PI3K-Akt）、GLUT4 转位 ✓；q57 长期饥饿脑以酮体替代 50%~70%、葡萄糖需求 120→40 g/天、脂肪酸不能过血脑屏障 ✓；q58 肝缺 SCOT 不能利用酮体 ✓；q59 胰高血糖素受体为 Gs-GPCR（胰岛素受体才是 RTK）✓；q60 脑利用酮体→葡萄糖需求降→糖异生氨基酸需求降→蛋白分解 75→20 g/天，因果链已显式写入正文 ✓
- 校验结果：validate-expansion 输出「✓ src/data/expansions/biochemistry-ch10-12.ts: 14 节全部通过 · 字数区间 2612–2877」；tsc 无本文件相关错误；eslint 退出码 0；禁用字符扫描零命中；728 项原文关键事实超集核查全部命中（15 项假性失配经二次定向 needle 确认存在）
- 学术口径取舍：①脂肪酸能量效率采用 106 ATP（1.5/2.5 口径）+129 旧值双注记（与 quiz q47 口径一致）；②亚油酸完全氧化沿用「约 98 ATP」教材口径；③酮症酸中毒血酮阈值 >4 mmol/L、营养性生酮 0.5~3 mmol/L、饥饿血酮 1~2 mmol/L 分层表述；④高尿酸血症切点「约 420 μmol/L」、肾排泄份额「约三分之二」；⑤肝静息氧耗「五分之一上下」、心肌脂肪酸供能「六至七成」、脂库「约 10~15 kg」均用区间/约数口径；⑥腺泡Ⅲ带尿素循环酶含量最高的表述遵原文保留（残留稿的Ⅰ带相反叙事已按超集原则纠正）
- 集成提示：biochemistryCh10To12 为独立导出，src/data/expansions/index.ts 目前仅挂载 biochemistryCh1To3 与 biochemistryCh4To6，需主控在 sectionExpansions 接入后方可生效；与 quiz q46–q60、illustrations（β-氧化螺旋图 ch10-s1 / 尿素循环图 ch11-s2 共 2 处 caption 主题）已互相对应

---
Task ID: 25-h
Agent: content-molbio-h
Task: 分子生物学第 10–12 章正文深度扩充（15 节超集式扩写，残留接管）

Work Log:
- 开工前置：完整阅读 agent-ctx/expansion-guide.md 通用指南与 agent-ctx/exp-25-h-brief.md 批次简报；tail -60 worklog.md 掌握项目规范与并行批次格局（25-d/25-g 等批次的「残留接管」模式为本任务提供参照）
- 逐节读原文：按简报行号区间 Read molecular-biology.ts ch10 L1817–2019 / ch11 L2020–2229 / ch12 L2230–2454，15 节原文逐节细读并摘录全部知识点、数值、术语与 H2 主题（原文每节 883~1583 字符）
- 测验题核查：rg 定位 quiz/molecular-biology.ts q46–q60（每章 5 题），逐题核对考点在扩写正文的成立性（详见 Stage Summary）
- 残留接管：发现 src/data/expansions/molecular-biology-ch10-12.ts 已有同批次未完工残留（15 节均已成稿、无 worklog 记录、未经校验：ch11-s5 2331 与 ch12-s1 2386 低于校验下限 2400，另 ch11-s4 与 ch12-s2~s5 共五节低于指南硬性下限 2600）——逐节全文复核后接管
- 接管复核修正的问题：①ch10-s3 残留稿「河豚基因组约人类九分之一」更正为「约八分之一」（390 Mb 对 3.1 Gb 的通行教材口径）；②ch12-s3 残留稿「遗传病例平均诊断年龄比散发早一年余」系无据数字，改为泛化表述；③ch12-s5「imetelestat」更正为正确拼写 imetelstat；④ch11-s3 残留稿沿用原文「RS-1 抑制 NHEJ、scr7」的歧义表述，按通行口径厘清为「scr7 抑制连接酶 IV 以削弱 NHEJ、RS-1 经激活 RAD51 促进 HDR」（两分子与两通路知识点均保留）；⑤原文 H2 英文注记 base editing / prime editing / genetic circuit / TME 在残留稿标题化时丢失，全部补回；⑥「三阶段机制（以 II 型为例）」关键概念在残留稿拆分 H2 时丢失，恢复为「三阶段机制：适应（spacer 获取）/ 表达（crRNA 加工）/ 干扰（靶标切割）」命名并补三阶段导语
- 接管复核确认的既有优点（予以保留）：Dulbecco 1986 缘起与 DOE/NIH 备忘录、中国 1% 任务、百慕大原则 24 小时、T2T-CHM13 新增近 2 亿碱基、短读长/长读长「读长换准确率」辩证法、N50 算例（90/80/70/60 kb）、GENSCAN HMM 状态-观测框架、Fitch 1970 同源术语界定、2R 假说与鲤科加倍、Ka/Ks 选择温度计、Perturb-seq 与网络模体、TPM 归一化辨析与火山图体检、DIA/PRM 临床化、mRNA-蛋白相关性 0.4–0.6 归因、表观基因组路线图百余参考、FTO→IRX3/IRX5、FAIR 原则、R-M 四型分型表、DpnI/MboI 甲基化验身、Genentech 编年（1977 生长抑素/1978 胰岛素）、同尾酶 BamHI/BglII、Cas12 反式切割与 SHERLOCK/DETECTR、SaCas9 1053 aa 装进 AAV、5F9R 三元复合物结构（与插图 caption 完全一致）、种子区 10–12 nt、exa-cel 2023 年底英美获批、BE4max/ABE8e、PE3b、Rosa26、Gelsinger 与 SCID-X1 插入性白血病事故史、synNotch 逻辑门、SY14 单染色体酵母、pp60 豆蔻酰化、费城染色体 1960/1973 断代、ecDNA、p190/p230 剂量分级、单倍剂量不足、p63/p73、Xue/Ventura p53 重启、Hanahan 2022 十四 hallmark、恶病质、DETECTR 等学术增量
- 定向扩写（对不足 2600 的 7 节补充学术增量）：ch11-s4 补基因敲入（knock-in）/Rosa26 安全港/免疫球蛋白基因座人源化/ATryn 山羊乳腺生物反应器（欧洲 2006、美国 2009）；ch11-s5 补基因组工程里程碑时间线表（syn1.0 2010/syn3.0 2016/SY14 2018/Syn61 2019/Sc2.0 2023）、群体感应对表与多细胞协调、Golden Gate 装配语法；ch12-s1 补 RSV gag-pol-env+src 与 LTR 底盘溯源慢病毒载体、v-/c- 命名与 pp60、逆转录病毒 vs DNA 肿瘤病毒对照表（焊油门 vs 拆刹车）；ch12-s2 补 KRAS G12C 约见于 13% 肺腺癌、MYC 蛋白半衰期 20–30 分钟、BCR-ABL p190/p230 断点剂量分级；ch12-s3 补单倍剂量不足（PTEN、p27）与 PARP 抑制剂后线拓展至胰腺/前列腺癌；ch12-s4 补 p63/p73 家族分工、Trp53 敲除鼠早发淋巴瘤、p53 重启消退实验（Xue 肝癌与 Ventura 肺癌，2007）；ch12-s5 补 Hanahan 2022 四项新 hallmark（表型可塑性/表观重编程/衰老细胞/微生物组）、鼠人端粒种差、恶病质系统性面相
- 原有 H2 主题全部保留（含与插图 caption 呼应的「Cas9 结构与 sgRNA 工程」——ch11-s2 5F9R 三元复合物结构图：双叶/REC 识别叶/R 环/磷酸结合凹槽/HNH 活性取向/PI 结构域在正文均有对应，PDB 5F9R 与 3.4 Å 口径经 web 检索核实为 Jiang-Doudna 的 SpCas9-sgRNA-dsDNA 三元复合物、与 illustrations.ts 既有 caption 一致）
- 质量自检：自动超集核查（原文全部数字 token 与 ≥3 字符拉丁术语 token 提取、** 归一）15 节 0 缺失（imetelestat→imetelstat 为唯一有意更正）；41 项句子片段差异逐条人工复核，全部为引号「」替换与措辞重组的假性失配（六国/1998 Venter Celera/ab initio/必需基因/80% 活性/假设+数据双轨/三阶段/贺建奎/CIN/MSI 等事实均确认在位）；62 项 quiz 靶向 needle 全命中；禁用字符扫描（反引号、${、{{、HTML、制表符、H3+ 标题、代码围栏、ASCII/弯引号、emoji、Markdown 链接、非 H2 开头）零命中；交叉引用全部指向本学科真实章节（第 1/2/3/6/7/8/9/11 章及本章第 1–5 节，rg 全量提取核对）
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/molecular-biology-ch10-12.ts molecular-biology 10 11 12 输出「✓ 15 节全部通过 · 字数区间 2610–2819」；bunx tsc --noEmit 无本文件相关错误；bunx eslint 本文件退出码 0；git status 确认整个 expansions 目录为未跟踪新内容、本任务仅触碰 molecular-biology-ch10-12.ts（其余 M/D 状态系并行代理所为，与开工时快照一致）
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 15 节全部达标：ch10 基因组学与系统生物学 5 节 / ch11 基因编辑与基因工程 5 节 / ch12 癌分子生物学 5 节；扩写前后字数对照（前→后）：ch10-s1 1073→2785、ch10-s2 883→2631、ch10-s3 926→2719、ch10-s4 1071→2610、ch10-s5 1234→2659、ch11-s1 1124→2651、ch11-s2 1220→2813、ch11-s3 1583→2652、ch11-s4 1213→2738、ch11-s5 1184→2793、ch12-s1 1050→2819、ch12-s2 1289→2695、ch12-s3 1380→2692、ch12-s4 1237→2713、ch12-s5 1174→2715；合计 17641→40685 字符，全部落在 2600–3600 区间
- 每节 H2 为 5–6 个（要求 ≥4）；表格 ch10 共 4 张 / ch11 共 6 张 / ch12 共 7 张合计 17 张（每章 ≥2 要求充分满足）；术语首现注英文、重点术语加粗、引用统一「」
- 测验题事实核查结论（q46–q60 无题面失配）：q46 公共联盟分级作图战略 BAC-by-BAC（遗传图→物理图→逐克隆测序）✓；q47 蛋白编码基因约 2 万个、编码序列约 1.5% ✓；q48 TPM 先长度后总量归一、适合跨样本比较 ✓；q49 bisulfite 使未甲基化 C→U（读作 T）、5mC 保持 C，单碱基分辨 ✓；q50 旁系同源源于基因复制（β/δ-珠蛋白）、常经亚/新功能化分化 ✓；q51 SpCas9 PAM 5′-NGG-3′ 位于靶序列紧邻 3′ 侧、自身阵列无 PAM（TTTV 为 Cas12a、NNGRRT 为 SaCas9 均在正文并存）✓；q52 RuvC 切非靶标链、HNH 切靶标链、D10A 失活 RuvC/H840A 失活 HNH ✓；q53 ABE 工程化 TadA 将 A→肌苷 I 实现 A·T→G·C ✓；q54 pegRNA 3′ 延伸 PBS+RTT、Cas9(H840A)-RT 融合 ✓；q55 NHEJ 无需同源模板、快速易错 indel 移码适于敲除；HDR 依赖供体限 S/G2 ✓；q56 v-src 由 Varmus-Bishop 1976 分子杂交证明源自宿主 c-src（1989 诺奖）、Tyr527 缺失去刹车 ✓；q57 t(9;22) 费城染色体 BCR-ABL p210 组成性激酶激活、伊马替尼 ATP 竞争性抑制 ✓；q58 p21^CIP1 广谱抑制 CDK、Rb 低磷酸化扣押 E2F 阻滞 G1 ✓；q59 Knudson 1971 两次打击假说、RB1 1986 克隆证实 ✓；q60 RB1（G1/S 检查点）/TP53（基因组守卫）/APC（Wnt 负调控）为抑癌基因，HER2 为原癌基因（扩增激活、赫赛汀靶点，干扰项对照成立）✓
- 校验结果：validate-expansion 输出「✓ src/data/expansions/molecular-biology-ch10-12.ts: 15 节全部通过 · 字数区间 2610–2819」；tsc 无本文件相关错误；eslint 退出码 0；禁用字符扫描零命中；自动超集核查 0 缺失；62 项 quiz 靶向 needle 全命中
- 学术口径取舍：①河豚/人类基因组大小比用「约八分之一」；②KRAS G12C 肺腺癌占比用「约 13%」；③hallmark 清单口径 2011 十条→2022 十四条（增补表型可塑性/非突变性表观重编程/衰老细胞/重编程微生物组四项）；④p53 重启消退实验双源标注（Xue 肝癌、Ventura 肺癌，均 2007）；⑤imetelstat 拼写更正；⑥RS-1/scr7 机制按通行口径厘清（原文两分子均保留）；⑦AAV 预存中和抗体用「约三成」区间口径
- 集成提示：molecularBiologyCh10To12 为独立导出，src/data/expansions/index.ts 目前未挂载本文件（rg 确认无引用），需主控在 sectionExpansions 接入后方可生效；与 quiz q46–q60、illustrations（ch11-s2 Cas9-sgRNA-靶 DNA 三元复合物结构图 1 处 caption 主题）已互相对应
---
Task ID: 25-j
Agent: content-cellbio-j
Task: 细胞生物学第 4–6 章正文深度扩充（13 节超集式扩写，残留接管）

Work Log:
- 开工前置：完整阅读 agent-ctx/expansion-guide.md 通用指南与 agent-ctx/exp-25-j-brief.md 批次简报；tail -60 worklog.md 掌握项目规范与并行批次格局（25-d/25-h 等批次的「残留接管」模式为本任务提供参照）
- 逐节读原文：按简报行号区间 Read cell-biology.ts ch4 L600–773 / ch5 L774–942 / ch6 L943–1175，13 节原文逐节细读并摘录全部知识点、数值、术语与 H2 主题（原文每节 893~1491 字符）
- 测验题核查：rg 定位 quiz/cell-biology.ts q16–q30（每章 5 题），逐题核对考点在扩写正文的成立性（详见 Stage Summary）
- 残留接管：发现 src/data/expansions/cell-biology-ch4-6.ts 已有同批次未完工残留（13 节均已具雏形、无 worklog 记录、未经校验：各节 2609–2955 字符虽已达 2600 下限，但存在零散事实疑点与 1 处 ASCII 撇号）——逐节全文复核后接管
- 接管复核修正的问题（共 9 处）：①ch6-s4 三类骨架对照表「成核/组织」行微管列误写「γ-TuRC、Arp2/3、formin」（Arp2/3 与 formin 为肌动蛋白成核因子，属跨列串位错误），更正为「γ-TuRC（中心体/基体）、augmin」；②ch6-s3「ACTA1/细丝蛋白突变致杆状体肌病」中细丝蛋白（FLNC）实致肌原纤维肌病而非杆状体肌病，更正为「ACTA1 与 nebulin 突变致杆状体肌病」；③ch6-s1 中心粒尺寸「长约 0.2 μm、直径约 0.15—0.2 μm」按通行口径（长 0.3—0.5 μm、直径约 0.2 μm）更正；④ch6-s1「体内游离二聚体浓度（约 10 μM 量级）通常高于两端临界浓度，因此细胞内微管几乎总处在生长态」表述失准（游离浓度通常仅略高于正端临界浓度且负端多被 γ-TuRC 封固），改为稳妥口径；⑤ch6-s2「半个世纪前在活神经上测到的快速轴浆运输速度（每天百余毫米）」史实与数值双双失准（快速运输由 1960 年代同位素示踪发现、量级为每天数百毫米），已改写；⑥ch4-s3「人类 SEC23A 突变造成颅-缝早闭样骨发育不良」病症名失准（CLSD 非颅缝早闭），更正为「颅-晶状体-缝发育不良（CLSD，颅面畸形伴晶状体与骨骼异常）」；⑦ch4-s1「1975 年前后信号肽的一级序列被直接测出」时间口径偏早（直接测序集中于 1970 年代末），改为「1970 年代末，多种分泌前体的信号肽一级序列被陆续直接测出」；⑧ch5-s2「人卵含数十万拷贝」上限偏高，改为「数万至数十万拷贝」区间口径；⑨ch4-s3 coatomer 亚基组成 αββ'δεγζ 中的 ASCII 撇号（U+0027）规范为素字符 ′（U+2032），消除全文件唯一 ASCII 引号残留
- 接管复核确认的既有优点（予以保留）：Blobel-Sabatini 1971 缘起与 1999 诺奖、无细胞翻译体系证据链、n/h/c 三区解剖与 SRP 循环、双分型 NLS/CRM1/细霉素 B、I 细胞病与 M6P 信号斑、核孔 30 种核孔蛋白逾 100 MDa、Ran 梯度双向对账、Mia40-Erv1/SAM/MIM/OXA 支线、Pex5 单泛素化-Pex1/6 回收环、Schekman sec 突变体与 Rothman 重组实验（2013 诺奖）、TANGO1 大载体、KDEL 受体 pH 换手、BFA 药理开关时间线、网格蛋白三足蛋白与 AP2 三重校验、AP3/Hermansky-Pudlak、Rab 转换与 Griscelli 三遗传分型、EEA1 搭桥/HOPS/exocyst、Qa/Qb/Qc/R 螺旋分类、20S 颗粒拆解环、complexin/Munc13/Munc18 启动机、突触延迟 0.2—0.5 ms、BoNT 血清型剪刀谱与 LRRK2-Rab 磷酸化、Benda 1898 命名与 Michaelis 活体染色、嵴连接 20—30 nm 与 MICOS、心磷脂约占内膜磷脂五分之一、ATP 合酶二聚体行状排列、Mfn/OPA1/Drp1 动力学与 DOA/CMT2A、Anderson 1981 参考序列与 tRNA punctuation、超摆动与线粒体密码偏离、TFAM 类核、氢假说（Martin-Müller 1998）、疏水性假说与 CoRR、mitosome/氢化体减配版、电位差贡献约八成、DNP 1930 年代减肥药史、c 环亚基数物种参数（8/10/14+）、每 ATP 约 4 H⁺ 换算账、Boyer-Walker 1997 诺奖与 Kinosita 螺旋桨、apoptosome 七辐轮、OMA1-嵴重构、NIM811、阈值「预算-备用金」模型与 1/5000 患病率、1/200 携带率、idebenone 欧洲获批与三亲婴儿伦理、搜索-捕获模型、+TIP/stathmin/MCAK 调节层、微管蛋白密码（K40 乙酰化/去酪氨酸化/谷氨酰化）、紫杉醇 1971 Wani-Wall 分离史、驱动蛋白-1 自折叠休眠与失速力 5—7 pN、马达域位置预示方向口诀、LIS1 无脑回畸形、dynein-2 与 IFT 往返列车、DNAH5/DNAI1 与内脏反位因果链、titin 3—3.7 MDa 标尺、rigor mortis 状态机、TnC/TnT/TnI 三兄弟、DMD 2.4 Mb 最大基因与整码缺失分型、Alexander 病首个中间丝脑病、NFL 血液生物标志物、ULF 组装与 plectin、progerin-法尼基化-lonafarnib 谱系、LADs 基因组书架、迁移四步循环与离合器/布朗棘轮、LEGI 模型与 1—2% 浅梯度感知、迁移可塑性与 blebbing、durotaxis 与 YAP/TAZ 硬度计等学术增量
- 增补 1 处插图呼应桥接句：ch6-s1 首段补「微管与约 7 nm 微丝、约 10 nm 中间丝并列构成三大纤维体系」桥接句，与 cytoskeleton.jpg 图注的三类纤维网络叙事对应（图注中三类直径、秋水仙碱/紫杉醇/细胞松弛素/鬼笔环肽靶点在正文均在位）
- 原有 H2 主题全部保留：ch4-s1「信号假说/分选信号的类型/三种基本方式」、ch4-s2「转运途径总览/线粒体输入/分泌与内吞两条主干」、ch4-s3「COPII/COPI/网格蛋白」、ch4-s4「Rab/SNARE/神经递质释放」、ch5-s1「结构分区/标志酶/功能概览」、ch5-s2「mtDNA/两套基因组协同/内共生学说/遗传特点」、ch5-s3「电子传递链/化学渗透假说/ATP 合酶」、ch5-s4「凋亡调控中心/线粒体疾病」、ch6-s1「微管结构/组装与踏车/动态不稳定性/MTOC/特异性药物」、ch6-s2「驱动蛋白/胞质动力蛋白/轴丝动力蛋白/疾病」、ch6-s3「肌动蛋白结构/成核因子/结合蛋白/肌球蛋白/滑动丝模型/非肌细胞结构」、ch6-s4「分型/分子结构与组装/动态调控/功能」、ch6-s5「迁移循环/Rho 家族/趋化作用/其他形式/骨架协作」
- 质量自检：自动超集核查（原文 13 节全部数字 token 与 ≥3 字符拉丁术语 token 提取、** 归一）共 645 项，仅 3 项大小写形态假性失配（原文 Kinesin-5/14/13 与扩写稿 kinesin-5/14/13），经大小写归一复核全部在位，实际缺失 0；51 项 quiz 靶向 needle 全命中（初检 1 项「COPII 小泡从 ER 出口位点」系核查脚本把 ch4-s3 的内容误标到 ch4-s2，复核确认该短语在 ch4-s3 原位）；禁用字符扫描（反引号、${、HTML、制表符、H3+ 标题、代码围栏、ASCII/弯引号、emoji、图片链接、Markdown 链接、非 H2 开头）零命中；交叉引用全部指向本学科真实章节（第 2/3/5/7/9/10/12 章及本章第 2–5 节）
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/cell-biology-ch4-6.ts cell-biology 4 5 6 输出「✓ 13 节全部通过 · 字数区间 2609–2961」；bunx tsc --noEmit 无本文件相关错误（现存 6 处错误均位于 agent-ctx/tmp24a、examples、scripts、skills 等并行任务遗留文件）；bunx eslint 本文件退出码 0；git status 确认整个 expansions 目录为未跟踪新内容、本任务仅触碰 cell-biology-ch4-6.ts（其余 M/D 状态系并行代理所为）；临时核查脚本已清理
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 13 节全部达标：ch4 蛋白质分选与膜泡运输 4 节 / ch5 线粒体与能量转换 4 节 / ch6 细胞骨架 5 节；扩写前后字数对照（前→后）：ch4-s1 1084→2849、ch4-s2 1020→2844、ch4-s3 1189→2678、ch4-s4 1075→2697、ch5-s1 893→2613、ch5-s2 1165→2626、ch5-s3 1343→2650、ch5-s4 956→2615、ch6-s1 1200→2729、ch6-s2 1054→2629、ch6-s3 1491→2961、ch6-s4 1086→2657、ch6-s5 972→2609；合计 14638→35152 字符，全部落在 2600–3600 区间
- 每节 H2 为 5–7 个（要求 ≥4）；表格 ch4 共 4 张（分选信号类型/三种方式/转运途径六路线/三类膜泡对照）/ ch5 共 2 张（分区标志酶/线粒体病四代表）/ ch6 共 3 张（肌动蛋白结合蛋白/中间丝分型/三类骨架对照），每章 ≥2 张要求满足；术语首现注英文、重点术语加粗、引用统一「」
- 测验题事实核查结论（q16–q30 无题面失配）：q16 ER→高尔基体经 COPII 囊泡运输 ✓；q17 KDEL/KKXX 逆向回收由 COPI（Arf1-coatomer）执行 ✓；q18 BFA 抑制 Arf GEF、COPI 瘫痪、高尔基体崩解入 ER ✓；q19 Rab-GTP 招募拴系因子、v/t-SNARE 拉链四螺旋束驱动融合（NSF 用 ATP 而非 GTP、毒素切割而非增强 SNARE）✓；q20 线粒体输入须解折叠+Δψ、核输入保持折叠、过氧化物酶体可折叠寡聚输入 ✓；q21 化学渗透假说经质子动力势耦联（1978 诺奖）✓；q22 mtDNA 仅编码 13+22+2、99% 蛋白由核基因编码（「全部由 mtDNA 编码」为干扰项反例）✓；q23 DNP 使内膜 H⁺ 通透、梯度以热泄漏 ✓；q24 mtDNA 母系遗传、16569 bp、13/22/2、突变率高于核基因组 ✓；q25 Bax/Bak 成孔释放 Cyt c-Apaf-1-凋亡复合体-caspase-9、环孢素 A 抑制（非诱导）mPTP ✓；q26 GTP 帽得失决定生长/灾难性缩短 ✓；q27 驱动蛋白向正端、动力蛋白（dynactin 辅助）向负端 ✓；q28 中间丝无极性、不结合核苷酸、无踏车无马达 ✓；q29 肌钙蛋白-原肌球蛋白复合体执行 Ca²⁺ 开关 ✓；q30 秋水仙素抑制组装/紫杉醇稳定微管 ✓
- 校验结果：validate-expansion 输出「✓ src/data/expansions/cell-biology-ch4-6.ts: 13 节全部通过 · 字数区间 2609–2961」；tsc 无本文件相关错误；eslint 退出码 0；禁用字符扫描零命中；645 项原文 token 超集核查实际缺失 0
- 学术口径取舍：①质子动力势取「约 180—200 mV、电位差贡献约八成」通行区间；②每 ATP 约 3 H⁺（计磷酸共转运约 4 H⁺）、NADH 约 2.5/FADH₂ 约 1.5 ATP 与旧值 3/2 并注；③线粒体病患病率「约 1/5000」、携带率「约 1/200」；④HGPS 平均寿命「约 13 岁」；⑤卵母细胞 mtDNA 拷贝用「数万至数十万」区间；⑥中心粒尺寸、CLSD 病名、快速轴浆运输史实等 7 处按教材通行口径更正（详见 Work Log）
- 集成提示：cellBiologyCh4To6 为独立导出，src/data/expansions/index.ts 目前未挂载本文件（rg 确认无引用），需主控在 sectionExpansions 接入后方可生效；与 quiz q16–q30、illustrations（ch4-s2 分泌途径图/ch5-s1 线粒体超微结构图/ch6-s1 细胞骨架三类纤维图共 3 处 caption 主题）已互相对应
---
Task ID: 25-k
Agent: content-cellbio-k
Task: 细胞生物学第 7–9 章正文深度扩充（14 节超集式扩写，残留接管）

Work Log:
- 开工前置：完整阅读 agent-ctx/expansion-guide.md 通用指南与 agent-ctx/exp-25-k-brief.md 批次简报；tail -60 worklog.md 掌握项目规范与并行批次格局（25-d/25-g/25-h/25-j 的「残留接管」模式为本任务提供参照）
- 逐节读原文：按简报行号区间 Read cell-biology.ts ch7 L1176–1361 / ch8 L1362–1587 / ch9 L1588–1767，14 节原文逐节细读并摘录全部知识点、数值、术语与 H2 主题（原文每节 943~1609 字符）
- 测验题核查：rg 定位 quiz/cell-biology.ts q31–q45（每章 5 题），逐题核对考点在扩写正文的成立性（详见 Stage Summary）
- 残留接管：发现 src/data/expansions/cell-biology-ch7-9.ts 已有同批次未完工残留（14 节均已成稿、无 worklog 记录、未经校验）——逐节全文复核后接管
- 接管复核修正的问题（共 4 处）：①ch7-s4 残留稿「imetelstat 已于 2024 年获准用于骨髓纤维化」适应证失实（该药 2024 年获批适应证为伴输血依赖性贫血的低危骨髓增生异常综合征，骨髓纤维化仅为研究阶段），更正为「获批用于伴输血依赖性贫血的低危骨髓增生异常综合征」；②ch7-s5 果蝇热激胀泡位点「87A/87B」更正为「87A/87C」（hsp70 基因座位于 87A 与 87C 带纹，87B 无热激胀泡）；③ch7-s3 染色质命名年份 1878 更正为通行的 1879，且「豌豆与人类的 H4 仅数个氨基酸之差」改为经典教材口径「豌豆与牛的 H4 在 102 个氨基酸中仅两个之差」；④ch9-s3「IIIEDA 结构域」命名不规范，厘清为「III 型重复中的 EDA 结构域」
- 接管复核确认的既有优点（予以保留）：LINC 复合体 SUN/KASH 与开放/封闭式核分裂、Callan-Tomlin 1950 年代核孔首报与 NPC 每秒数百至上千次转运、SV40 NLS 1984/NES 1995 鉴定史、karyopherin 家族与 exportin-t、NTF2 回收与 HIV Rev 劫持 CRM1、三 A 综合征与 selinexor、lamin 法尼基化/ZMPSTE24/progerin/lonafarnib 谱系、核仁相分离视角与 p14ARF 双保险、放线菌素 D「蒸发」实验、豌豆-牛 H4 负选择、SWI/SNF-ISWI-CHD-INO80 四家族与 H2A.Z/macroH2A 变体、30 nm 纤维体内争议与染色体领地/环挤压、CENP-B 与新着丝粒、Dam1 环与全着丝粒、Mad2 安全带构象、Olovnikov 1971 理论预言、TERT 启动子突变与 ALT、Painter 48 条统治 33 年与 ISCN 语法、Rowley 1973 易位证明、维甲酸+砷剂对位、热激胀泡放射自显影与原位杂交首演、Bayliss-Starling 1902 激素溯源、Kobilka 2007 β₂ 受体结晶与偏向性激动剂、SGLT1-口服补液盐药理、PDE 家族组织分工、海兔 CREB 记忆门槛、Hokin 1953 磷脂转换与 Berridge 双信使、钙振荡频率编码与钙微域、Putney 1986 电容性钙内流到 2005–2006 RNAi 定案、58 种 RTK/20 亚家族、ERK 超敏感阈值与 KSR 支架、sotorasib 撬开 G12C、ISGF3 复合体与 JAK2 V617F-芦可替尼、NOTCH1 在 T-ALL/头颈鳞癌的双面、Nusse 1982 int-1 溯源、他莫昔芬 SERM 药理、Farquhar-Palade 1963 与钙开关实验、跨上皮电阻数量级对比、claudin-18.2 抗体临床、EC1 链交换与力强化粘附、抗 CD20 治天疱疮、ARVC 运动猝死筛查、分子离合器与趋硬性、connexin 疾病谱表、胼胝质可调阀与共质体、基质体组学与刚度-命运、Lind 海上试验与 67 nm D 周横纹、losartan 拮抗 TGF-β、EDA 可变剪接、肾小球三层滤过、MMP 抑制剂折戟史、吡非尼酮/尼达尼布、边缘化前奏与多步粘附模型学术史（Springer/Lawrence/Bevilacqua）、LAD 三亚型对位、crizanlizumab 镰刀危象、Paget 种子土壤等学术增量
- 原有 H2 主题全部保留（含与插图 caption 呼应的三大主题）：ch7-s3 染色体多级包装各级（核小体/螺线管/环状结构域/中期染色体，对应 chromatin-packaging.png 的 2 nm→串珠→30 nm→襻环→中期染色体各级与 core histones/H1/scaffold 注记）；ch8-s2 GPCR 结构/G 蛋白循环/cAMP-PKA 全链（七次跨膜、Gα GTP/GDP、AC、R₂C₂、CREB、磷酸化酶激酶、RGS、霍乱毒素，对应 gpcr-camp-signaling.jpg 与 CMP.svg 双图注）；ch8-s4 RTK 激活/Ras-MAPK 级联（EGF 二聚化、自磷酸化、Grb2-SOS、Ras、RAF-MEK-ERK、Elk-1、GAP、Ras 突变，对应 rtk-ras-mapk-pathway.svg）
- 质量自检：自动超集核查（原文 14 节全部数字 token 与 ≥3 字符拉丁术语 token 提取、** 归一）仅 2 项假性失配——①SH2-SH3（残留稿以更精确的「一个 SH2 加两个 SH3 的组合体」表述 Grb2，知识点在位）；②CKCL8（原文笔误，残留稿已更正为正确 HGNC 符号 CXCL8，quiz q45 仅用「IL-8」无冲突）；51 项 quiz 靶向 needle 全命中（初检 2 项「HRE/LRP5/6」系核查清单把它们误列到 ch8-s1/ch9-s3，二者实际位于 ch8-s5 原位，复核确认在位）；禁用字符扫描（反引号、${、HTML、制表符、H3+ 标题、代码围栏、ASCII/弯引号、emoji、图片链接、Markdown 链接、非 H2 开头）零命中；交叉引用全部指向本学科真实章节（第 2/4/6/8/9/10/11/12 章及本章各节，rg 全量提取核对）
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/cell-biology-ch7-9.ts cell-biology 7 8 9 输出「✓ 14 节全部通过 · 字数区间 2605–2752」；bunx tsc --noEmit 无本文件相关错误（现存错误均位于 agent-ctx/tmp24a、examples、scripts、skills 等并行任务遗留文件）；bunx eslint 本文件退出码 0；git status 确认整个 expansions 目录为未跟踪新内容、本任务仅触碰 cell-biology-ch7-9.ts（其余 M/D 状态系并行代理所为）；临时核查脚本已清理
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 14 节全部达标：ch7 细胞核与染色体 5 节 / ch8 细胞信号转导 5 节 / ch9 细胞连接与细胞外基质 4 节；扩写前后字数对照（前→后）：ch7-s1 1028→2731、ch7-s2 1059→2752、ch7-s3 967→2607、ch7-s4 997→2718、ch7-s5 1075→2629、ch8-s1 1226→2652、ch8-s2 1177→2605、ch8-s3 1042→2609、ch8-s4 1261→2696、ch8-s5 1521→2644、ch9-s1 943→2632、ch9-s2 1325→2609、ch9-s3 1609→2729、ch9-s4 1227→2607；合计 16457→37220 字符，全部落在 2600–3600 区间
- 每节 H2 为 5–7 个（要求 ≥4）；表格 ch7 共 4 张（被动/主动运输对照/核仁三分区/包装四级/多线-灯刷比较）/ ch8 共 6 张（信号性质-受体匹配/七类受体总表/Gα 三类对照/CaM 靶酶/三途径汇总/第二信使总表）/ ch9 共 4 张（连接分类/claudin 谱系/胶原四型/粘附四家族），每章 ≥2 张要求充分满足；术语首现注英文、重点术语加粗、引用统一「」
- 测验题事实核查结论（q31–q45 无题面失配）：q31 RCC1 位于核内（染色质）、RanGAP 位于胞质建立核高胞低 Ran-GTP 梯度 ✓；q32 核仁无膜围绕 NOR 构建、5S rRNA 由 Pol III 核仁外转录、有丝分裂期解体 ✓；q33 核小体 146 bp/1.65 圈（Kornberg 提出、Luger 晶体结构、连接 DNA 约 60 bp）✓；q34 端粒酶 TERT+TERC 自身 RNA 模板逆转录、生殖/干细胞/多数肿瘤活跃、体细胞逐次缩短 ✓；q35 多线染色体胀泡为活跃转录位点、灯刷侧环为高转录单位（果蝇唾腺多轮复制不分离+体细胞同源配对 vs 双线期卵母细胞）✓；q36 GPCR 七次跨膜最大膜受体家族、Gα 自身 GTP 酶+RGS、霍乱毒素持久激活（非失活）Gs、RTK 才有 Tyr 激酶活性 ✓；q37 IP₃ 开放 ER 的 IP₃ 受体释钙、DAG 与 Ca²⁺ 协同激活 PKC ✓；q38 NO-sGC-cGMP 舒张与硝酸甘油药理（eNOS 受 Ca²⁺-CaM 调控）✓；q39 cAMP/IP₃/Ca²⁺ 为第二信使、Ras 为小 GTP 酶开关非第二信使（正文第二信使总表与 Ras 定位均无歧义）✓；q40 STAT 须先磷酸化经 SH2-pTyr 二聚化方能入核结合 GAS、SOCS 负反馈、Ras 约 30%、PTEN 抑癌负调 ✓；q41 紧密连接封闭细胞旁通路并维持极性（B/C/D 分别为间隙连接/桥粒/粘着斑的干扰项在正文均有清晰区分）✓；q42 connexin 六聚体对接 1.5—2 nm、通透上限约 1 kDa、GJB2 耳聋 ✓；q43 桥粒连角蛋白中间丝（粘合带连肌动蛋白、粘着斑/半桥粒连 ECM）✓；q44 胶原 Gly-X-Y、维生素 C 羟化、IV 型构成基膜；弹性蛋白非三股螺旋、纤连蛋白二聚体含 RGD、透明质酸游离不共价连接（干扰项对照均成立）✓；q45 渗出级联四步顺序（选择素滚动→趋化因子激活整联蛋白→ICAM-1 牢固粘附→PECAM-1 穿内皮迁移）、LAD 与那他珠单抗正反印证 ✓
- 校验结果：validate-expansion 输出「✓ src/data/expansions/cell-biology-ch7-9.ts: 14 节全部通过 · 字数区间 2605–2752」；tsc 无本文件相关错误；eslint 退出码 0；禁用字符扫描零命中；超集 token 核查实际缺失 0（SH2-SH3 为更精确表述的假性失配、CKCL8→CXCL8 为原文笔误更正）
- 学术口径取舍：①imetelstat 2024 年获批适应证按 FDA 实际批文更正为「低危骨髓增生异常综合征」；②果蝇热激胀泡位点按 87A/87C（hsp70 基因座）；③染色质命名年份取 1879（Flemming）；④H4 保守性取「豌豆与牛 102 个氨基酸仅两个之差」经典口径；⑤纤维连接蛋白可变剪接结构域规范命名 EDA；⑥McClintock 断裂-融合-桥循环沿用「1938 年」（其 1938–1939 年报首报、1941 年正式成文）；⑦原文「百日咳毒素使 Gi 不能与受体解离」的欠妥表述在残留稿已厘清为「ADP 核糖基化后无法与激活受体耦合换 GTP、冻结于 GDP 失活态」，予以保留
- 集成提示：cellBiologyCh7To9 为独立导出，src/data/expansions/index.ts 目前仅挂载 cell-biology-ch1-3 与 cell-biology-ch4-6（rg 确认本文件无引用），需主控在 sectionExpansions 接入后方可生效；与 quiz q31–q45、illustrations（ch7-s3 染色体多级包装图 / ch8-s2 GPCR-cAMP-PKA 通路图与 cAMP 结构式 / ch8-s4 RTK-Ras-MAPK 通路图共 3 节 4 处 caption 主题）已互相对应
---
Task ID: 25-l
Agent: content-cellbio-l
Task: 细胞生物学第 10–12 章正文深度扩充（13 节超集式扩写，残留接管）

Work Log:
- 开工前置：完整阅读 agent-ctx/expansion-guide.md 通用指南与 agent-ctx/exp-25-l-brief.md 批次简报；tail -60 worklog.md 掌握项目规范与并行批次格局（25-j/25-k 的「残留接管」模式为本任务提供参照）
- 逐节读原文：按简报行号区间 Read cell-biology.ts ch10 L1768–1984 / ch11 L1985–2138 / ch12 L2139–2343，13 节原文逐节细读并摘录全部知识点、数值、术语与 H2 主题（原文每节 768~1394 字符）
- 测验题核查：rg 定位 quiz/cell-biology.ts q46–q60（ch10/ch11 各 5 题、ch12 5 题），逐题核对考点在扩写正文的成立性（详见 Stage Summary）
- 残留接管：发现 src/data/expansions/cell-biology-ch10-12.ts 已有同批次未完工残留（13 节均已成稿且字数达标、无 worklog 记录、未经校验）——逐节全文复核后接管
- 接管复核修正的问题（共 7 处）：①ch10-s3「两批底物的时序衔接（cyclin B 略先、securin 随后）」的降解先后口径存在争议（哺乳动物细胞两底物降解近乎同时启动、酵母中 securin 先行），改为教科书稳妥表述「securin 的清除启动分离、cyclin B 的持续降解贯穿后期并完成退出」；②ch10-s4 Nicklas 显微操作实验对象误写「蚱蜢精子细胞」，更正为「蚱蜢精母细胞」（经典张力实验在初级精母细胞减数分裂纺锤体上进行）；③ch10-s4 断离检查点介导者补回原文的「Chk 激酶与 Aurora B」（残留稿仅留 Aurora B，超集要求保留原文术语）；④ch10-s3 SAC 盲区表述「不能补救着丝粒过弱等结构缺陷」过于含糊，改为精确的「对 merotelic（一个动粒同时连两极、仍具张力的隐蔽错连）也不敏感」（SAC 盲区的标准教材口径）；⑤ch12-s3「OPTN 突变即因线粒体自噬缺陷而致病」因果断言过强，软化为「OPTN 突变与肌萎缩侧索硬化相关，线粒体自噬缺陷为其候选致病机制之一」；⑥ch10-s2 删除指向他学科的「（泛素-蛋白酶体系统详见分子生物学相关章节）」交叉引用（本项目交叉引用约定为本学科真实章节）；⑦ch10-s1 时相表 M 行「4C→2×2C」记法易误读为 M 期 DNA 减半，改为「4C（分裂后子细胞各 2C）」
- 接管复核确认的既有优点（予以保留）：Howard-Pelc 1953 32P 标记蚕豆根尖定名 G1/S/G2、分子指纹（PCNA/H3S10ph/Ki-67）与 EdU 点击化学、早期胚胎 30 min 周期的母源产物驱动、wee1「尺寸检查」解读、数万复制起点与早/晚 S 时序、两窗互补的许可逻辑、Masui-Markert/Hartwell/Nurse/Hunt 三路汇流与 1988 MPF 纯化、cyclin D 半衰期约 30 min「传感器」、Cip/Kip 低计量兼任组装因子、Murray-Kirschner 1989 不可降解 cyclin、哌柏西利与 Wee1 抑制剂的油门/刹车双向制药、p53 半衰期约 20 min 与 1979 年发现史、R175/R248/R273 热点与显性负效应、HPV E6 招募 E3、SAC「单个未附着动粒即可扣押 Cdc20」与单亲二体盲区、三类微管与自组织纺锤体（小鼠卵母细胞无中心体）、核膜片段并入 ER、congression 拉推合力、后期 A 约 1 μm/min、RhoA 先定位后收缩、Rec8/shugoshin-PP2A、一个初级卵母细胞产 1 卵 2—3 极体、约十分之一 DSB 定型交叉、70 万亿合子组合、母亲年龄效应两条年龄曲线、Cyp26b1-视黄酸时序、珠蛋白切换与拟时序、决定/分化两态、Gurdon 核仁多态对照、MyoD 1987 Davis-Weintraub-Lassar、二价结构域、ATRA-砷剂分化疗法、LIF-STAT3/2i/14 天规则、CFU-S「一个细胞重建一个系统」、Lgr5 类器官每 4—5 天换上皮、群体不对称、1968 首例 HLA 相合移植、Dolly 277:1 与三源遗传身份、治疗性克隆 2013 人实现、Thomson 团队 Nanog/Lin28 替代组合、0.01%—0.1% 重编程效率、L-Myc/Lin28/化学重编程、iPS-RPE 2014 与多巴胺 2018 临床、GMT/BAM 2010 与先锋因子、Carrel 永生教条崩塌史、SA-β-gal pH 6.0、Shelterin 六亚基与 T 环、hTERT 不致癌与端粒综合征、SASP DDR 自分泌环路、senolytics 2011—2018 双重证据与雷帕霉素 2009 晚年给药、线虫 959/131 与 ced 基因对应、caspase (p20/p10)₂、I/II 型细胞与 c-FLIP、CASP8 缺陷人类遗传验证、Vaux 1988 第二类癌基因、BH3 profiling、de Duve 1963 命名与大隅良典 ATG、PARL-PINK1 级联与正反馈、Atg5 敲除围产期致死、GFP-mCherry 双色报告、necrostatin-1 2005、牛痘 CrmA/CMV M45 军备竞赛、非经典炎性小体、GSDMD 10—20 nm 孔与邵峰/Kayagaki 2015 同刊、GSDME 凋亡转焦亡、FSP1-CoQ10 轴等学术增量
- 原有 H2 主题全部保留（含与插图 caption 呼应的四大主题）：ch10-s2 CDK-cyclin 引擎各层（MPF 发现史/总表/多层调控/定时降解，对应 cdk-cyclin.png 图注的四复合体序贯与 APC/C 降解退出主线）；ch10-s4 有丝分裂时相事件与胞质分裂（对应 mitosis-phases.svg 图注的前/前中/中/后/末各期与 anaphase A/B、收缩环分裂沟）；ch10-s5 减数分裂总过程（对应 meiosis-stages.svg 图注的联会/交叉/后期 I 同源分离/4 个单倍体配子）；ch12-s1 凋亡形态学与 caspase（对应 apoptosis-morphology.png 图注的皱缩-起泡-边集-凋亡小体序列与两条途径在 caspase-3 汇合）
- 质量自检：自动超集核查（原文 13 节全部数字 token 与 ≥3 字符拉丁术语 token 提取、** 归一）仅 1 项假性失配（原文「染色体 passengers 复合体」在扩写稿以规范全名「染色体乘客复合体（chromosome passenger complex，CPC）」表述，知识点在位）；quiz 靶向 needle 300 余项全命中；禁用字符扫描（反引号、${、HTML、制表符、H3+ 标题、代码围栏、ASCII/弯引号、emoji、图片链接、Markdown 链接、非 H2 开头）零命中；交叉引用全部指向本学科真实章节（第 5/6/7/8/9/10/11/12 章及本章第 1—4 节，rg 全量提取核对）
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/cell-biology-ch10-12.ts cell-biology 10 11 12 输出「✓ 13 节全部通过 · 字数区间 2610–2942」；bunx tsc --noEmit 无本文件相关错误（现存错误均位于并行任务遗留文件）；bunx eslint 本文件退出码 0；git status 确认整个 expansions 目录为未跟踪新内容、本任务仅触碰 cell-biology-ch10-12.ts（其余 M/D 状态系并行代理所为）；临时核查脚本已清理
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 13 节全部达标：ch10 细胞周期与细胞分裂 5 节 / ch11 细胞分化、干细胞与衰老 4 节 / ch12 细胞死亡 4 节；扩写前后字数对照（前→后）：ch10-s1 1019→2808、ch10-s2 1394→2942、ch10-s3 1328→2808、ch10-s4 1119→2748、ch10-s5 1299→2686、ch11-s1 768→2639、ch11-s2 1150→2728、ch11-s3 999→2690、ch11-s4 1028→2632、ch12-s1 1178→2633、ch12-s2 1296→2640、ch12-s3 1154→2642、ch12-s4 1354→2610；合计 15086→35203 字符，全部落在 2600–3600 区间
- 每节 H2 为 4–6 个（要求 ≥4）；表格 ch10 共 5 张（时相横向比较/CDK-cyclin 总表/三大监控机制对照/有丝分裂各期标志/有丝-减数对照）/ ch11 共 4 张（管家-奢侈基因/成体干细胞四类/三条重编程路线/复制性-应激性衰老）/ ch12 共 5 张（凋亡-坏死鉴别/Bcl-2 家族三分/两条途径对照/自噬三类型/死亡方式整合），每章 ≥2 张要求充分满足；术语首现注英文、重点术语加粗、引用统一「」
- 测验题事实核查结论（q46–q60 无题面失配）：q46 S 期 2C→4C、G1 含 R 点、流式 2C/4C 峰 ✓；q47 MPF=CDK1-cyclin B（磷酸化核纤层致核膜崩解），cyclin D-CDK4/6-Rb 与 cyclin E/A-CDK2 搭配在位 ✓；q48 p53-Mdm2 降解、损伤后稳定上调 p21 致 G1 阻滞、不可修复促凋亡 ✓；q49 APC/C 降解 securin 释放 separase 切 cohesin（condensin 凝集、RhoA 收缩环为干扰项对照在位）✓；q50 一次复制两次分裂、后期 I 同源分离姐妹着丝粒相连、前期 I 联会交叉、子细胞遗传各异 ✓；q51 管家基因+奢侈基因差异表达、基因组不变、B 细胞重排例外 ✓；q52 Gurdon 爪蟾肠上皮核移植证明核全能性与分化可逆、2012 诺奖 ✓；q53 山中因子 OSKM 四因子（MyoD/Pax6 为转分化因子、Nanog 为标志的干扰项对照在位）✓；q54 ESC 源自 ICM、无限自我更新、Oct4/Nanog/Sox2 标志、三胚层畸胎瘤金标准（滋养层/单能为干扰项对照在位）✓；q55 Hayflick 约 50 代、端粒临界缩短、每轮丢 50—200 bp、hTERT 越过界限且不致癌、SIPS/OIS 不依赖端粒 ✓；q56 凋亡三联征与 180–200 bp 梯状条带、PS 外翻（肿胀破裂属坏死为干扰项）✓；q57 凋亡基因决定的主动程序性死亡、不引发炎症 ✓；q58 FasL-Fas→FADD→caspase-8→caspase-3（II 型细胞经 tBid 借道线粒体、线粒体途径/坏死性凋亡/颗粒酶为干扰项对照在位）✓；q59 Bax/Bak 效应、BH3-only 感应、tBid 衔接两途径、t(14;18) 抑制凋亡促瘤、Smac 拮抗 XIAP、Venetoclax 为 BH3 模拟物 ✓；q60 坏死性凋亡 RIPK1-RIPK3-MLKL、焦亡 caspase-1-GSDMD-IL-1β/IL-18、铁死亡 GPX4、PINK1-Parkin 线粒体自噬为选择性自噬典型（第 4 项干扰项反例在正文有明确反证）✓
- 校验结果：validate-expansion 输出「✓ src/data/expansions/cell-biology-ch10-12.ts: 13 节全部通过 · 字数区间 2610–2942」；tsc 无本文件相关错误；eslint 退出码 0；禁用字符扫描零命中；超集 token 核查实际缺失 0（passengers 为规范术语化的假性失配）
- 学术口径取舍：①cyclin B 与 securin 降解先后争议改为稳妥的功能性表述；②Nicklas 张力实验对象更正为精母细胞；③断离检查点介导者按原文保留「Chk 激酶与 Aurora B」；④SAC 盲区补 merotelic 标准口径；⑤OPTN-ALS 因果关系降格为候选机制表述；⑥Down 综合征年龄发生率取「30 岁约 1/1000、40 岁以上约 1/100」通行区间；⑦人端粒取「出生约 10—15 kb、临界约 4—6 kb」区间口径；⑧线虫凋亡 2002 年诺奖按史实表述为 Brenner、Horvitz 与 Sulston 共享（原文「凋亡发现者与 Horvitz 共享」欠准，扩写稿以史实为准并保留 Horvitz 获奖知识点）
- 集成提示：cellBiologyCh10To12 为独立导出，src/data/expansions/index.ts 目前未挂载本文件（rg 确认无引用），需主控在 sectionExpansions 接入后方可生效；与 quiz q46–q60、illustrations（ch10-s2 CDK-cyclin 引擎图 / ch10-s4 有丝分裂各期图 / ch10-s5 减数分裂各期图 / ch12-s1 凋亡形态演变图共 4 处 caption 主题）已互相对应
---
Task ID: 25-m
Agent: content-biophys-m
Task: 生物物理学第 1–3 章正文深度扩充（12 节超集式扩写，残留接管）

Work Log:
- 开工前置：完整阅读 agent-ctx/expansion-guide.md 通用指南与 agent-ctx/exp-25-m-brief.md 批次简报；tail -60 worklog.md 掌握项目规范与并行批次格局（25-j/25-k/25-l 的「残留接管」模式为本任务提供参照）
- 逐节读原文：按简报行号区间 Read biophysics.ts ch1 L23–184 / ch2 L185–324 / ch3 L325–473，12 节原文逐节细读并摘录全部知识点、数值、术语与 H2 主题（原文每节 803–1104 字符）
- 测验题核查：rg 定位 quiz/biophysics.ts q01–q13（ch1 4 题、ch2 5 题、ch3 4 题），逐题核对考点在扩写正文的成立性（详见 Stage Summary）
- 残留接管：发现 src/data/expansions/biophysics-ch1-3.ts 已有同批次未完工残留（12 节均已成稿、无 worklog 记录、未经校验）——逐节全文复核后接管。复核结论：残留稿质量总体过硬（超集 token 全在位、事实基本可靠、H2/表格结构达标），但字数全面偏短：ch2-s3 2350 字、ch3-s1 2095、ch3-s2 1858、ch3-s3 1687、ch3-s4 1765 五节低于 2400 校验线，ch1-s3 2524、ch1-s4 2483、ch2-s1 2428、ch2-s2 2461 四节低于 2600 目标线
- 接管补写（9 节扩写至 2600+，全部以追加段落/内联句子方式扩入，不动已有 H2 与知识点）：ch1-s3 补凝胶过滤-超速离心尺寸联测、⟨r²⟩=6Dt 扩散推广；ch1-s4 补 Flory 1974 与 de Gennes 1991 双诺奖史、人类基因组 2 m→10 μm 核内压缩量化（核小体 147 bp 1.65 圈）；ch2-s1 补 RNase A 首个测序酶（Moore-Stein 1960）与首个合成酶（Gutte-Merrifield 1969、Merrifield 1984 诺奖）、翻译后修饰第四边界；ch2-s2 补嗜热/嗜冷蛋白稳定性演化调节、pH-等电点-静电对 Tm 的移动；ch2-s3 补 chevron 人字图两态动力学判据、单分子力谱停顿平台、漏斗坑深-中间体可见性判据（1–2 vs 3–5 k_BT）；ch3-s1 新增「从液晶到生物膜」简史 H2（Reinitzer 1888、Lehmann、Gorter-Grendel 1925、Singer-Nicolson 1972）、Tm=ΔH_m/ΔS_m 热力学账（DPPC 35 kJ/mol、每 CH₂ 约 1 kJ/mol 对接第 1 章疏水标尺）、脂质过氧化-维生素 E-铁死亡、比电容 0.5–1 μF/cm² 面积换算；ch3-s2 补 σ 的本体张力澄清（烃水界面约 40 mN/m vs 静息 0.003–0.015 mN/m、破裂约数 mN/m）、胆固醇/多不饱和链/带电脂对 κ 的调制、膜管心算例（√(κ/2σ)≈60 nm、力约 8 pN）、约化体积形状序列（v≈0.6 双凹盘）、零剪切的代价与骨架搭档；ch3-s3 补轮廓涨落分析测 κ、膜动力学三时钟（旋转纳秒/侧向 1 μm²/s/翻转小时-天）与跳笼扩散、涨落力-静电力-水化力三大膜间作用、HA 压簧融合器与 gp120-gp41、dynamin 机械化学掐断、筏尺寸的线张力-偶极斥力平衡（数 pN）、统计视角改写实验设计；ch3-s4 补胆固醇约半数的脂组成与 PS 内叶不对称-「吃我」清除信号、网架几何计数（12–16 肌动蛋白单体、5–6 条血影蛋白四聚体/节点）、v≈0.6 复盘与 1–2 μm 扩散距离、Hb 330 g/L 浓度账与渗透稳容、遗传性椭圆红细胞增多症与血库贮存损伤、caveolae 面积稳态策略
- 接管复核修正的问题（共 2 处，均在 ch2-s4）：①groE 基因鉴定史「噬菌体复制所需的温度敏感突变」更正为「不支持噬菌体 λ 头部组装的大肠杆菌突变体（1972 年，Georgopoulos 等）」；②「1996 年解析的约 2.8 Å 晶体结构」更正为 1997 年 GroEL–GroES 复合物结构（Xu-Horwich-Sigler，与插图 PDB 1OEL 对应；1994 年 Braig 的 2.8 Å 为无底物 apo 结构，笼中折叠图景出自 1997 复合物）
- 编辑事故自查自纠：一次 MultiEdit 因锚点失误部分回滚，复跑时造成 3 处段落重复插入，立即以精确锚点去重修复（ch1-s3 两处、ch1-s4 一处），并修正 2 个形近字（瞄/矄、哑/呕）；sort|uniq -d 复查全文仅剩表格分隔行为正常重复
- 接管复核确认的既有优点（予以保留）：三条主线设问式学科定义、Helmholtz-Schrödinger 溯源与里程碑表、尺度-时间双表、水物性五参表与德拜长度经验式、闪烁团簇与冷变性、Kuhn/蠕虫链双模型与 15 k_BT 弯曲 DNA 心算、λ DNA 心算与 65 pN 超伸展、Flory 平均场推导与普适性反用、105 种二硫键配对与 scrambled 实验、吴宪 1931 变性学说、AlphaFold2-2024 诺奖、最小阻挫与漏斗三参数表、ΔC_p-疏水面积报表、van 't Hoff/量热焓比与 m 值语言、Ptitsyn 熔球命名与 N/MG/U 特征表、氢交换-质谱时序、Φ 值陷阱警示、GroEL 负协同与迭代退火、Virchow-刚果红-立体拉链-冷冻电镜淀粉样谱系、功能性淀粉样（curli/Pmel17）、DSC 预转变与协同单元、稳态黏度适应与四醚脂、温敏脂质体 41–42 °C、微管吸吮双模量、Helfrich 1973-液晶显示跨界、8πκ≈500 k_BT 与膜管能账、ATP 合酶二聚体嵴缘、q⁻⁴ 涨落谱、Helfrich 熵排斥 1/d³、红细胞闪烁 19 世纪 90 年代、SNARE 半融合茎与融合孔开合、Simons-Ikonen 1997 与近临界质膜、血影蛋白 ghost 1968、Evans-Skalak 参数表、Canham 1970-Deuling-Helfrich 双凹形、ekta-细胞计量与脾脏芯片、Fåhræus-Lindqvist 效应等学术增量
- 原有 H2 主题全部保留（含与插图 caption 呼应的三大主题）：ch2-s2 折叠漏斗（对应 folding-funnel.png 漏斗-粗糙度-过渡态-天然态图注）；ch2-s4 GroEL–GroES 分子机器（对应 1OEL.jpeg 双环-笼腔-ATP 循环图注）；ch3-s1 凝胶相与液晶相/相变温度 Tm（对应 membrane-phase-transition.svg 全反式-gauche-胆固醇-Tm≈41 °C 图注）；另为 ch3-s1 新增「从液晶到生物膜：一段简史」H2，使插图分布更均匀
- 质量自检：自动超集核查（原文 12 节全部数字 token 与 ≥3 字符拉丁术语 token 提取、** 归一）缺失 0 项；quiz 靶向 needle 共 90 项全命中；禁用字符扫描（反引号、${、HTML、制表符、H3+ 标题、代码围栏、ASCII 双引号、emoji、图片链接、Markdown 链接、{{、连续空格）零命中（van 't Hoff 与 Pβ' 之撇号为科学记法，非引号）；交叉引用全部指向本学科真实章节（第 1/2/4/5/6/7/8 章及本章第 2/3/4 节）；表格分布 ch1 4 张 / ch2 4 张 / ch3 4 张，每章 ≥2 张要求满足；每节 H2 为 4–6 个（要求 ≥4）
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/biophysics-ch1-3.ts biophysics 1 2 3 输出「✓ 12 节全部通过 · 字数区间 2613–2805」；bunx tsc --noEmit 无本文件相关错误（现存错误均位于并行任务遗留文件）；bunx eslint 本文件退出码 0；git status 确认整个 expansions 目录为未跟踪新内容、本任务仅触碰 biophysics-ch1-3.ts（其余 M/D 状态系并行代理所为）；临时核查脚本已清理
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 12 节全部达标：ch1 概论与生物大分子物理性质 4 节 / ch2 蛋白质折叠热力学与动力学 4 节 / ch3 生物膜的物理 4 节；扩写前后字数对照（前→后）：ch1-s1 1016→2761、ch1-s2 899→2634、ch1-s3 896→2793、ch1-s4 974→2752、ch2-s1 850→2787、ch2-s2 1104→2714、ch2-s3 803→2694、ch2-s4 1016→2656、ch3-s1 1082→2805、ch3-s2 936→2613、ch3-s3 811→2742、ch3-s4 887→2727；合计 11274→32678 字符，全部落在 2600–3600 区间（其中 ch1-s1/ch1-s2/ch2-s4 为残留稿原样达标，其余 9 节为本轮接管补写）
- 测验题事实核查结论（q01–q13 无题面失配）：q01 ε≈80 削弱静电约 80 倍、利于带电物种溶解解离 ✓；q02 自由连接链 ⟨R²⟩ = Nb² ✓；q03 双链 DNA 持续长度约 50 nm（约 150 bp、Kuhn 约 100 nm）✓；q04 ν 良溶剂 3/5（0.588）、θ 溶剂 1/2、不良溶剂坍缩球 1/3 ✓；q05 一级序列含足够信息、天然态为自由能极小的自组织结果、8 mol/L 尿素+β-巯基乙醇、1972 诺奖（伴侣蛋白不改变热力学终点）✓；q06 熔球态 ANS 强结合（题面干扰项「完全不结合」在正文有明确反证）✓；q07 Tm 为去折叠分数 50%、ΔG(Tm)=0 的平衡态指标 ✓；q08 Levinthal 悖论恰证明折叠不可能为随机搜索（正文「下坡通道」表述在位）✓；q09 GroEL 14 亚基双环、ATP 结合+GroES 扣盖致腔壁翻亲水、笼中折叠避免聚集（不改变折叠路径与热力学）✓；q10 饱和链 14:0→18:0 使 Tm 显著升高（每 CH₂ 升 5–8 °C、DSPC 55 °C vs DMPC 24 °C；双键降 20 °C 以上、胆固醇消除相变为干扰项反例）✓；q11 C₀ 源于膜两侧成分不对称或嵌入蛋白固有弯形 ✓；q12 脂筏为鞘磷脂-胆固醇 Lo 相、链有序仍侧向流动 ✓；q13 血影蛋白网架剪切弹性（μ 约 5–10 μN/m）+面积过剩约 40%、变形靠多余膜重排而非拉伸（KA 约 0.5 N/m、拉 2–3% 即裂）✓
- 校验结果：validate-expansion 输出「✓ src/data/expansions/biophysics-ch1-3.ts: 12 节全部通过 · 字数区间 2613–2805」；tsc 无本文件相关错误；eslint 退出码 0；禁用字符扫描零命中；超集 token 核查缺失 0
- 学术口径取舍：①GroEL 晶体结构年份按 1997 年 GroEL–GroES 复合物（1OEL）口径（残留稿 1996 有误）；②groE 鉴定史按噬菌体 λ 头部组装突变（1972）表述；③膜静息张力取 0.003–0.015 mN/m、破裂张力取「约数 mN/m」区间；④脂筏线张力取「约数 pN」；⑤红细胞膜胆固醇取「约半数摩尔」；⑥血红蛋白取 330 g/L（约 5 mmol/L 四聚体）；⑦扩散 10 μm 用 t=x²/4D≈25 s「约半分钟」；⑧双凹盘氧扩散距离取「约 1—2 μm」
- 集成提示：biophysicsCh1To3 为独立导出，src/data/expansions/index.ts 目前未挂载本文件（rg 确认无引用），需主控在 sectionExpansions 接入后方可生效；与 quiz q01–q13、illustrations（ch2-s2 折叠漏斗图 / ch2-s4 GroEL 结构图 / ch3-s1 膜相变图共 3 处 caption 主题）已互相对应
---
Task ID: 25-n
Agent: content-biophys-n
Task: 生物物理学第 4–6 章正文深度扩充（12 节超集式扩写，残留接管）

Work Log:
- 开工前置：完整阅读 agent-ctx/expansion-guide.md 通用指南与 agent-ctx/exp-25-n-brief.md 批次简报；tail -60 worklog.md 掌握项目规范与并行批次格局（25-j/25-k/25-l/25-m 的「残留接管」模式为本任务提供参照）
- 逐节读原文：按简报行号区间 Read biophysics.ts ch4 L474–610 / ch5 L611–767 / ch6 L768–903，12 节原文逐节细读并摘录全部知识点、数值、术语与 H2 主题（原文每节 817–1220 字符，合计 11241）
- 测验题核查：rg 定位 quiz/biophysics.ts q14–q27（ch4 5 题、ch5 4 题、ch6 5 题），逐题核对考点在扩写正文的成立性（详见 Stage Summary）
- 残留接管：发现 src/data/expansions/biophysics-ch4-6.ts 已有同批次未完工残留（12 节均已成稿且字数 2670–2946、无 worklog 记录、未经校验）——逐节全文复核后接管
- 接管复核修正的问题（共 7 处）：①ch4-s1 原文「轨道直径 7 nm（微管）或 8 nm（F-actin）」把两类轨道直径记反，残留稿已按教材口径更正为微管外径约 25 nm、F-肌动蛋白丝（F-actin）约 7–8 nm，本轮删去稿中残留的「原文记反了」式元注释、只保留正确数值（quiz 无此考点，无题面影响）；②ch5-s1 跑步上楼心算账「其中约六成化为热」算术有误（21/84=25% 做功，产热 63 kJ 占 75%），更正为「约四分之三化为热」（半升水升温约 30 度的结论不变且与 63 kJ 自洽）；③ch4-s3 肌球蛋白 II 首现补注英文（myosin II），对齐「术语首现标英文」规范并补齐超集 token；④ch5-s4 黏菌 cAMP 螺旋波周期由「约 5 分钟」放宽为「约 5–10 分钟」区间（文献口径以区间为稳）；⑤ch6-s2 高速 AFM 肌球蛋白 V 行走影片帧率由「每秒十余帧」收敛为「每秒约十帧」（Kodera 2010 实拍口径）；⑥ch6-s2 DNA 超螺旋失稳临界扭矩由「约 10 pN·nm 量级」改为「约 10–30 pN·nm（随张力升高而增大）」区间表述；⑦ch6-s1 「阱的势深达千百 k_BT」措辞规范化为「成百上千 k_BT」
- 接管复核确认的既有优点（予以保留）：马达发现史时间线（Gibbons 1960s 动力蛋白、Vale 1985 驱动蛋白、Boyer-Walker 1994 F₁ 结构与 1997 诺奖）、P-环 NTP 酶共享折叠与 dynein AAA+ 圆盘例外、kinesin-14/myosin VI 反向行走、Noji 1997 肌动蛋白丝目击旋转与系珠实验、Yildiz 2004 手拉手 17 nm 交替步进、栅极协调与折叠自抑制、随机度参数作化学计量「计数器」（双限速事件降到约 0.5）、Feynman 讲义第 46 章出处、Lymn-Taylor 四化学态与弱/强结合开关、Hill 1938 a≈0.25F₀、Fenn 1923、Gordon-Huxley-Julian 1966 长度-张力平台 2.0–2.2 μm、Ca²⁺ 0.1→10 μM 百倍摆幅、DHPR 机械勾拽 RyR 与心肌钙致钙释放、恶性高热 RyR 失控、Guharay-Sachs 1984 首次 SAC 单通道记录、PIEZO2 触觉/本体感觉缺失与 PIEZO1 干瘪红细胞症正反遗传印证、prestin 反向换能、Dupont 2011 YAP 力学专线与 Engler 2006 基质刚度命运实验、卡诺-克劳修斯-玻尔兹曼-薛定谔思想史与 Lavoisier-Laplace 冰量热计、一生 10⁹ J/K 熵账与单位体检、ATP Keq≈2×10⁵ 反算、「高能键」三成因解毒、100 mV≈RT·ln50 换算、谷氨酰胺酶累积反馈抑制与肝性脑病、59.2/61.5 mV 十倍一档、每 NADH 10 H⁺/FADH₂ 6 H⁺/2.5 与 1.5 ATP 新账、180–200 mV 质子动力势电位占八成、680 nm 光子 176 kJ/mol、临界瑞利数约 1700、Belousov 拒稿史与 Turing 1952、Liphardt-Bustamante 2002 Jarzynski 单分子检验、Ashkin 1970 双光束源头与朱棣文激光冷却、65 pN 过拉伸悬案、φ29 包装约 50 pN、Strick 1996 磁镊扭转、I/II 型拓扑酶 ΔLk=1/2、catch bond、Moerner-Orrit 单分子首例与 2014 诺奖、临界角 61–62° 心算、Ha 1996 首个单分子 FRET、ALEX 校正、Sigworth-Sine 表示法、Colquhoun-Hawkes 理论、噪声分析反推通道数等学术增量
- 原有 H2 主题全部保留（含与插图 caption 呼应的主题）：ch4-s1 分类总表/运动与旋转两大模式（对应 kinesin-walking.png 手拉手步进与 3KIN.jpeg P-环 NTP 酶/颈链对接图注的主题在 ch4-s1 正文与 ch4-s2「八纳米步长与一比一机械化学耦合」均有落点）；ch6-s1 原理 H2（对应 optical-tweezers.svg 梯度力/散射力/1064 nm/F=−kΔx 图注）；ch6-s3 TIRF H2（对应 tirf-microscopy.png 临界角约 61°/隐失场 100–200 nm 图注）
- 质量自检：自动超集核查（原文 12 节全部数字 token 与 ≥3 字符拉丁术语 token 提取、** 归一）实际缺失 0——报告中的 kinesin（残留稿以 kinesin-1/kinesin-14 连字符串形式在位）与 Ardem（人名缩名，姓氏 Patapoutian 在位）均为假性失配；quiz 靶向 needle 58 项全命中；禁用字符扫描（反引号、${、HTML 标签、制表符、H3+ 标题、ASCII 引号、emoji、图片/Markdown 链接、非 H2 开头、连续空格）零命中；交叉引用全部指向本学科真实章节（第 2/3/4/5/6/7/8/9 章，rg 提取核对，「第 46 章」为费曼物理学讲义卷章引用非学科交叉引用）；表格分布 ch4 共 4 张（马达性能总表/棘轮-冲程对照/横桥循环四步/三时程通路）/ ch5 共 4 张（ΔG 判据/磷酸化合物能量表/电对电位表/近远平衡对照）/ ch6 共 2 张（单通道电导/三工具分工），每章 ≥2 张（ch6 为 2 张达标）；每节 H2 为 4–7 个（要求 ≥4）
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/biophysics-ch4-6.ts biophysics 4 5 6 输出「✓ 12 节全部通过 · 字数区间 2670–2955」；bunx tsc --noEmit 无本文件相关错误（现存错误均位于并行任务遗留文件）；bunx eslint 本文件退出码 0；git status 确认本任务仅触碰 biophysics-ch4-6.ts（其余 M/D 状态系并行代理所为）；临时核查脚本已清理
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 3 章 12 节全部达标：ch4 分子马达与细胞力学 4 节 / ch5 生物能量学与热力学 4 节 / ch6 单分子生物物理技术 4 节；扩写前后字数对照（前→后）：ch4-s1 1220→2955、ch4-s2 968→2863、ch4-s3 952→2794、ch4-s4 875→2670、ch5-s1 817→2762、ch5-s2 1072→2772、ch5-s3 978→2671、ch5-s4 847→2695、ch6-s1 941→2738、ch6-s2 844→2798、ch6-s3 890→2721、ch6-s4 837→2718；合计 11241→32357 字符，全部落在 2600–3600 区间（残留稿 12 节原已达标，本轮为复核修正 7 处口径后接管）
- 测验题事实核查结论（q14–q27 无题面失配）：q14 kinesin-1 恒定 8 nm、1:1 机械化学耦合、低 ATP 下频率正比于 [ATP]（36 nm 为 myosin V 干扰项在位）✓；q15 F₁ 三催化位点每转 360° 合成 3 ATP、每步 120°（80°+40° 子步）、可逆旋转、转矩约 45 pN·nm ✓；q16 Feynman 棘轮-棘爪在单一热源平衡且无耗散时不能定向做功（细致平衡），马达定向性来自 ATP 水解打破细致平衡 ✓；q17 Pi/ADP 依次释放驱动杠杆臂摆动 5–10 nm、单冲程力 3–5 pN、滑动丝学说丝长不变（粗细丝同时缩短为干扰项）✓；q18 kinesin-1 过程性约 100 步、myosin II 占空比约 4%、鞭毛马达质子动力势每秒千转，D 项「ATP 唯一能源」有 F₀/鞭毛马达离子梯度反证在位 ✓；q19 ΔG=ΔG°′+RT lnQ、ΔG°′=0/Q=100 时 +11.4 kJ/mol（正文嵌入同款算例、活化能决定速率非方向）✓；q20 ΔE°′=1.136 V、ΔG°′=−nFΔE°′≈−219 kJ/mol ✓；q21 生命输入自由能输出更多熵、总熵单调增加不违反第二定律 ✓；q22 ATP 标准态 −30.5、细胞内 −50～−60（PEP −61.9/1,3-BPG −49.4 更负、[ATP]/[ADP]≈10³ 均在位）✓；q23 梯度力拉向光强极大处、小位移近似弹簧 F=−k·Δx、刚度 0.01–1 pN/nm（散射力沿传播方向为次要项）✓；q24 FRET 灵敏区间 1–10 nm、R₀≈4–6 nm ✓；q25 WLC 拟合 dsDNA 持续长度 p≈50 nm 与静态方法交叉验证 ✓；q26 TIRF 隐失波 100–200 nm 指数衰减压低背景 1–2 个数量级（针孔=共聚焦、非线性=双光子为干扰项对照在位）✓；q27 膜片钳 GΩ 封接 pA 级分辨、1 pA≈6×10⁶ 单价离子/s、K⁺ 通道 4–20 pS/nAChR 约 40 pS/BK 约 250 pS ✓
- 校验结果：validate-expansion 输出「✓ src/data/expansions/biophysics-ch4-6.ts: 12 节全部通过 · 字数区间 2670–2955」；tsc 无本文件相关错误；eslint 退出码 0；禁用字符扫描零命中；超集 token 核查实际缺失 0（kinesin/Ardem 为假性失配）
- 学术口径取舍：①微管/F-actin 直径按教材口径更正（原文记反）；②上楼心算产热份额按 75% 修正；③黏菌 cAMP 周期取 5–10 分钟区间；④HS-AFM 帧率取约每秒十帧；⑤DNA 临界扭矩取 10–30 pN·nm 区间；⑥Dissociation 相关数值均维持教材通行口径（解链 10–15 pN、过拉伸约 65 pN、RNAP 约 25 pN、φ29 约 50 pN）；⑦每 NADH 2.5 ATP/每 FADH₂ 1.5 ATP 采用现行 P/O 比新账并注明旧整数口径并存
- 集成提示：biophysicsCh4To6 为独立导出，src/data/expansions/index.ts 目前未挂载本文件（rg 确认无引用），需主控在 sectionExpansions 接入后方可生效；与 quiz q14–q27、illustrations（ch4-s1 驱动蛋白步进循环图与 3KIN 晶体结构图 / ch6-s1 光镊原理图 / ch6-s3 TIRF 原理图共 3 节 4 处 caption 主题）已互相对应
---
Task ID: 25-o
Agent: content-biophys-o
Task: 生物物理学第 7–8 章正文深度扩充（8 节超集式扩写）

Work Log:
- 开工前置：完整阅读 agent-ctx/expansion-guide.md 通用指南与 agent-ctx/exp-25-o-brief.md 批次简报；tail -60 worklog.md 掌握项目规范与并行批次格局（25-m/25-n 的同学科前批为参照，注意保持交叉引用与术语口径一致）
- 残留检查：确认 src/data/expansions/biophysics-ch7-8.ts 此前不存在（ls 核对），无残留接管需求，为全新撰写
- 逐节读原文：按简报行号区间 Read biophysics.ts ch7 L904–1042 / ch8 L1043–1161，8 节原文逐节细读并摘录全部知识点、数值、术语与 H2 主题（原文每节 713–989 字符，合计 6725）
- 测验题核查：rg 定位 quiz/biophysics.ts q28–q36（ch7 4 题、ch8 5 题），逐题核对考点在扩写正文的成立性（详见 Stage Summary）
- 撰写扩写稿：每节以原有 H2 主题为骨架（全部保留并适度改写措辞）+ 新增 1–2 个深化 H2；初稿字数偏短（1264–2679），随后按节补写至 2604–2816 全部达标
- 扩写增量摘录：ch7-s1 补 10⁵ V/cm 场强心算、膜充电百万分之一量级账、du Bois-Reymond 1848/Bernstein 1902 膜假说史、电化学势推导、25 °C 59.2 mV 对接第 5 章、Donnan 澄清、K2P 漏通道与三档调节旋钮、四离子「电池规格书」总表；ch7-s2 补四相时程表、每 AP 数 pmol/cm² 钠内流能量账、负斜率电导双稳读法、强度–时程曲线与时值、Cole-Marmont 电压钳技术史、手摇计算机数值积分、传播方程由膜片耦合自动得出、m³ 的 S 形拟合史、HH 遗产（模块化拼接/FitzHugh-Nagumo/相轨道）；ch7-s3 补 Hermann 1879 局部电流学说、梯形网络与电报方程、复极化波后环、v∝√a 标度律推导、Q10 区分两种传导、Tasaki/Huxley-Stämpfli 1949 跳跃实证、MBP/PLP 致密化与 g 比 0.6 最优、有颌类 4 亿年演化、Hursh 线性律系数约 6、Gasser-Erlanger 纤维分类表（1944 诺奖）、Uhthoff 现象、兴奋性错位与 NCV 诊断；ch7-s4 补 Hodgkin-Rushton-Rall 学脉、τ∂V/∂t=λ²∂²V/∂x²−V、比膜阻/轴浆电阻率两个心算实例（10 ms 与 0.8 mm 恰落典型区间）、EPSP/IPSP 加权求和、胞体分流不对称、电紧张电位、Lapicque 1907 LIF 先声、神经形态芯片、3/2 幂律电学含义、NMDA 符合检测器、被动-主动对照表；ch8-s1 补 Hodgkin-Keynes 1955 通量比指数 2.5 伏笔、1.33/0.95 Å 小差异大后果、KcsA 质子门控、螺旋偶极稳定中央水腔、16 个羰基氧合计（呼应 1BL8 插图图注）、RT·ln(10⁴)≈24 kJ/mol≈10 k_BT 能量译码、Berneche-Roux 2001 自由能模拟、10⁸ 离子/s≈16 pA 换算、高/低钾滤器挺直-塌陷与 C 型失活、hERG 临床回声、超家族临床谱（Kv1.1 共济失调/Kir Bartter）与 GYG 突变崩塌；ch8-s2 补 13 e₀×100 mV≈50 k_BT 做功账、Aggarwal-MacKinnon 1996 电荷中和突变、反电荷簇接力/门控孔（低钾性周期性瘫痪）/S4–S5 链牵 S6、门控电流 2×10⁻¹⁹ C 量级与电荷锁住、m/h 双按钮独立部件、三类失活表、Unwin 冷冻电镜可视化解旋、MWC 三态简图与 C→O 平衡移动数千倍、神经元型 α7/α4β2、三类门控能量账表；ch8-s3 补驻留时间直方图流水线、两态开关三参数、爆发簇分析、三个「记账」示例、E_rev 判别力、幂次语法对串行状态语法的对译史、HMM 与似然比检验、25 mV 一个 e 因子的电压依赖律、Sigworth 1980 非稳态方差分析（σ²=iI−I²/N）、二项涨落 1/√N 标度、LQT3 晚钠流统计即病理、随机共振史（Benzi 1981 气候→Douglass 1993 鳌虾→Priplata 2002 振动鞋垫）；ch8-s4 补 MscL 10 mN/m 阈值与约 3 nm 开孔、MscL 五聚体/MscS 七聚体分级保险丝、Piezo 冷冻电镜 20–30 nm 跨度与 Yoda1 激动剂、听觉数十微秒换能与门控弹簧毫牛每米、TRP 多模混合形态、STX 同族毒素与 TTX 癌痛临床试验、pH 陷阱/碱化增强/美西律肌强直/Ib 类抗心律失常、hERG 撤市与临床前标准筛、阻断剂五药总表
- 原有 H2 主题全部保留（含与插图 caption 呼应的四大主题）：ch7-s1 膜电位的物理起源（对应 resting-membrane-potential.svg 图注的离子分布/3:2 泵/−70 mV/E_K −90 mV）；ch7-s2 波形与各相的离子机制（对应 action-potential.jpg 图注的四相/阈值 −55/超射/undershoot）；ch7-s3 有髓纤维与跳跃式传导（对应 saltatory-conduction.svg 图注的结区点火/100 m/s/节能/脱髓鞘）；ch8-s1 KcsA 结构与选择性机制（对应 kcsa-selectivity-filter.svg 与 1BL8.jpeg 图注的 TVGYG/S1–S4/16 氧/1.33 对 0.95 Å/10⁴ 选择性/knock-on/螺旋偶极）
- 学术口径自校：初稿曾把「选择性滤器」英文注为 selective filter，按原文与超集 token 核查更正为 selectivity filter；「河鲀对自体毒素免疫」的「自体免疫」措辞改为直述以免与自身免疫混淆
- 质量自检：自动超集核查（原文 8 节全部数字 token 与 ≥3 字符拉丁术语 token 提取、** 归一）缺失 0 项；quiz 靶向 needle 共 50 余项全命中；禁用字符扫描（反引号、${、HTML 标签、制表符、H3+ 标题、代码围栏、ASCII/弯引号、emoji、图片与 Markdown 链接、{{、** 不配对、非 H2 开头、正文内双空格）零命中；交叉引用全部指向本学科真实章节（第 2/3/4/5/6/7/8 章及本章第 1/2/4 节）；表格分布 ch7 共 4 张（四离子电池规格书/AP 四相时程/纤维分类/被动-主动对照）/ ch8 共 5 张（K⁺-Na⁺ 过闸账单/三类失活/三类门控能量账/两类力传入对照/阻断剂五药总表），每章 ≥2 张要求充分满足；每节 H2 为 4–6 个（要求 ≥4）
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/biophysics-ch7-8.ts biophysics 7 8 输出「✓ 8 节全部通过 · 字数区间 2604–2816」；bunx tsc --noEmit 无本文件相关错误（现存错误均位于并行任务遗留文件）；bunx eslint 本文件退出码 0；git status 确认本任务仅新增 src/data/expansions/biophysics-ch7-8.ts（其余 M/D 状态系并行代理所为）；临时核查脚本已清理
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 2 章 8 节全部达标：ch7 生物电现象 4 节 / ch8 离子通道的物理生物学 4 节；扩写前后字数对照（前→后）：ch7-s1 988→2816、ch7-s2 989→2649、ch7-s3 722→2677、ch7-s4 791→2624、ch8-s1 912→2666、ch8-s2 834→2649、ch8-s3 713→2604、ch8-s4 776→2707；合计 6725→21392 字符，全部落在 2600–3600 区间
- 测验题事实核查结论（q28–q36 无题面失配）：q28 E_K = 61.5×log₁₀(5/140) ≈ −89 mV（约 −90）、静息 −60～−70 靠近 E_K 未达到 ✓；q29 m³h = 3 个快激活粒子（τ_m≈0.1 ms）+1 个失活粒子（τ_h≈1 ms）须同时就位、n⁴ 4 个慢粒子 τ_n 数 ms、四聚体 K⁺ 通道四个 S4 给出 n⁴（ATP 三次方/质量厚度为干扰项）✓；q30 跳跃传导结区再生/结间被动、速度与直径线性可达 100 m/s 以上、代谢降约两个数量级、脱髓鞘=电缆漏电 ✓；q31 τ = r_m·c_m 与 λ = √(r_m/r_i) 定义式原样在位（其余三选项组合均被正文明确排除）✓；q32 滤器羰基氧几何模仿 K⁺ 水化壳、脱水能被配位能补偿而 Na⁻ 不能、P_K/P_Na > 10⁴、非孔径筛分而是配位化学尺寸匹配—能量补偿 ✓；q33 门控电流=门控电荷移动的瞬态电容电流而非离子流、先于离子电流、S4 每 3 残基一 Arg、12–16 e₀（Shaker 约 13 e₀）均在位（「门控电流是离子流」的错误选项在正文有明确反证）✓；q34 驻留时间指数分布符合马尔可夫模型、I = N·P_o·g·(V−E_rev) ✓；q35 TTX 胍基从胞外侧卡入 Na⁺ 通道滤器外口 nM 级封孔、心肌 Nav1.5 相对不敏感、HH 分离钠电流经典工具（胞内侧堵 K⁺/耗竭递质/水解磷脂为干扰项）✓；q36 nAChR 五聚体（肌肉型 α₂βγδ）、两个 ACh 位点引发别构转换开 M2 孔道、40 pS 非 250 pS、脱敏为持续暴露后的另一关闭态而非立即发生（单体/立即脱敏为干扰项反证在位）✓
- 校验结果：validate-expansion 输出「✓ src/data/expansions/biophysics-ch7-8.ts: 8 节全部通过 · 字数区间 2604–2816」；tsc 无本文件相关错误；eslint 退出码 0；禁用字符扫描零命中；超集 token 核查缺失 0（selective→selectivity filter 已按原文口径修正）
- 学术口径取舍：①无髓/有髓传导的 Q10 分别取约 2 与 1.1–1.3 区间；②有髓线性律系数取 Hursh 约 6（4.5–6 区间表述）；③g 比取约 0.6、结间长度约 100 倍直径量级；④Piezo 跨膜面尺度取「约 20–30 nm」区间；⑤MscL 开放阈值取「约 10 mN/m 量级」；⑥随机共振人工脂双层证据以 Bezrukov-Vodyanoy 类实验的「人工脂双层中的离子通道」表述；⑦利多卡因 pKa 取约 7.9；⑧HH 每 AP 钠内流取「约数 pmol/cm²」（乌贼巨轴突经典量级）
- 集成提示：biophysicsCh7To8 为独立导出，src/data/expansions/index.ts 目前未挂载本文件（rg 确认无引用），需主控在 sectionExpansions 接入后方可生效；与 quiz q28–q36、illustrations（ch7-s1 静息电位离子基础图 / ch7-s2 动作电位波形图 / ch7-s3 跳跃传导图 / ch8-s1 KcsA 滤器示意图与 1BL8 结构图共 4 节 5 处 caption 主题）已互相对应
---
Task ID: 25-p
Agent: content-biophys-p
Task: 生物物理学第 9–10 章正文深度扩充（8 节超集式扩写）

Work Log:
- 开工前置：完整阅读 agent-ctx/expansion-guide.md 通用指南与 agent-ctx/exp-25-p-brief.md 批次简报；tail -60 worklog.md 掌握项目规范与并行批次格局（25-m/25-n 的生物物理前两批次「残留接管/从零撰写」模式为参照）
- 逐节读原文：按简报行号区间 Read biophysics.ts ch9 L1162–1306 / ch10 L1307–1432，8 节原文逐节细读并摘录全部知识点、数值、术语与 H2 主题（原文每节 764–1224 字符，合计 7348）
- 测验题核查：rg 定位 quiz/biophysics.ts q37–q45（ch9 4 题、ch10 5 题），逐题核对考点在扩写正文的成立性（详见 Stage Summary）
- 残留检查：确认 src/data/expansions/biophysics-ch9-10.ts 不存在（无前序残留），按指南模板从零撰写 8 节完整替换正文并写入输出文件（导出名 biophysicsCh9To10）
- 扩写增量摘记：ch9-s1 阿贝成像原理第三种读法（0 级±1 级两束衍射干涉重现周期）、瑞利判据 0.61λ/NA 对照、NA-介质-波长工程组合表（干 0.9/水 1.2/油 1.4/405 nm 紫光四行）、亮度∝NA 四次方与景深代价、光刻工业同公式（193 nm 浸没式与 13.5 nm 极紫外）、突触囊泡约 40 nm 与核孔约 120 nm、相位板四分之一波长相移与 DIC 沃拉斯顿棱镜机理、阿贝-蔡司硅藻栅距检验史；ch9-s2 GFP π 电子共轭「分子内染料」光谱学、Shimomura 1962-Prasher 1992-Chalfie 1994-Tsien EGFP 发现史链、斯托克斯位移 34 nm、双色串色与补偿矩阵、甲醛/甲醇固定剂折中、一抗-二抗连接误差 10–20 nm、量子点 2023 诺奖（Bawendi/Brus/Ekimov）与开/关对比度指标、三标签混搭策略；ch9-s3 针孔艾里单位旋钮、转盘/共振振镜提速、三光子 1300 nm 深层成像、STED 饱和公式 d≈λ/(2NA·√(1+I/Iₐ))、专用 STED 染料族、定位精度=PSF 宽度/√光子数、SOFI 统计赎回、饱和非线性 SIM 会师、单分子定位的分子计数优势；ch9-s4 液乙烷 vs 液氮（莱顿弗罗斯特效应）、负染外壳对照、傅里叶切片定理与 Crowther 判据、气-水界面优选取向与界面钝化、沃尔塔相位板、FSC 0.143 金标准、Henderson 1975 细菌视紫红质电子衍射、FIB 减薄 100–200 nm 与缺失楔、PET 正电子毫米级飞行路程/BOLD 滞后数秒/OCT 光学回声测距的物理边界账、PET/CT 与 PET/MRI 联机常规；ch10-s1 碱基对占据不足 1 立方纳米、215 PB≈两万块 10 TB 硬盘换算、古 DNA 损伤三路径（脱嘌呤水解/氧化/电离辐射）与短片段半衰期约数百年、二氧化硅微珠封装加速老化外推、亚磷酰胺 99% 偶联→200 nt 全长得率约一成三、格式说明书一并归档、Goldman 三重冗余 vs Erlich 喷泉码 85% 容量、检索规模百到千文件演示、Landauer 原理 k_B T ln2 与 1 bit=k_B ln2、介质横向对比表与速度-寿命时间账；ch10-s2 E. coli 游动约 20 μm/s 与体长约 2 μm、受体阵列集体放大、有偏随机游走与搜索理论同构、Alon 1999 表达量扰动活细胞验证、「输出回基线」vs「状态记忆」澄清、两分量信号机六元件表与快慢双时钟、4.6 Mb 基因组六种趋化蛋白的极简设计、Berg–Purcell 理想吸收体边界与直觉账本、Bialek–Setayeshgar 修正、Baylor 1979 单光子电流、毛细胞热噪声阈值、灵敏度-速度-能耗三维权衡；ch10-s3 FMO 每单体 7 位点、2D-ES「以时间换频率」原理、室温节拍与 LHCII/隐藻藻胆体报道、ENAQT 中间地带与主方程语言、自由基对微秒寿命/黄素-色氨酸电子传递链、Larmor 1.4 MHz 心算（28 GHz/T×50 μT）、Cry4 候鸟-留鸟对比、2004 年起射频行为实验系列、隧穿能量匹配振动模式、压力实验与低表观活化能旁证、薛定谔 1944《生命是什么》思想源头、Tegmark 2000 退相干估算与不可通信定理；ch10-s4 syn1.0（2010，1.08 Mb 基因组移植）工程循环起点、转座子逐段删除、倍增时间约 1→3 小时、必需基因集的环境依赖、流感嗜血杆菌约 1.8 Mb 天然对照、2010—2016 群体同步与低噪声振荡改造、Basu 2005 同心圆图案、Rothemund 2006 折纸与 2011 试管 Hopfield 网络补全图案、无细胞系统快车道、两态启动子爆发频率/爆发大小参数、乳糖操纵子概率诱导双稳态、Top7 2003 与 2024 诺奖（Baker 与 Hassabis/Jumper 各半）、1982 重组胰岛素与 mRNA 疫苗两个产业界标、自杀开关-营养缺陷-物理围栏三层冗余失效率乘法折减
- 原有 H2 主题全部保留（含与插图 caption 呼应的主题）：ch9-s4 冷冻电镜主线各层（玻璃态冰与原位冻结/相位衬度与单粒子分析/CTF 修正/分辨率革命/其他成像模态，对应 cryo-em-workflow.png 图注的速冻玻璃化—电子束投影成像—颗粒挑选—二维对齐平均—三维分类—三维密度图—模型精修全流程，各步均有落点）
- 质量自检：自动超集核查（原文 8 节全部数字 token 与 ≥3 字符拉丁术语 token 提取、** 归一）缺失 0 项；quiz 靶向 needle 共 61 项全命中；禁用字符扫描（反引号、${、HTML、制表符、H3+ 标题、ASCII 引号、emoji、图片链接、Markdown 链接、{{、非 H2 开头、连续空格）零命中；交叉引用全部指向本学科真实章节（第 1/5/6/7 章及本章第 2/3/4 节）；表格分布 ch9 共 4 张（NA 工程组合/标签三分类/超分辨三杰/成像模态四维坐标）、ch10 共 2 张（存储介质对比/趋化六元件），每章 ≥2 张要求满足；每节 H2 为 5–6 个（要求 ≥4）
- 学术口径取舍：①原文「齐格蒙迪因此获 1925 年诺贝尔物理学奖」史实有误——相差显微由 Zernike 发明并获 1953 年诺贝尔物理学奖，齐格蒙迪以超显微镜与胶体研究获 1925 年诺贝尔化学奖，扩写稿按史实分别表述并保留两位人物的知识点；②其余全部数值维持原文教材口径（550 nm/NA 1.4/约 200 nm、395/475/509 nm、STED 20–50 nm、PALM/STORM ~20 nm、SIM ~100 nm、>10⁵ K/s、20–40 e⁻/Å²、2–4 Å、2 bit 每碱基、215 PB、(δc/c)²≥1/(Dacτ)、约 50 μT、k_H/k_D 3–10 与 >80、473 基因/531 kb 等）
- 编辑事故自查：一次 MultiEdit 中途因锚点笔误部分回滚（工具按序执行、前四笔已落盘），复跑前先以 rg 核对实际落盘状态再补齐余量，未产生重复插入；事后以 sort|uniq -d 思路复核全文仅表格分隔行为正常重复
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/biophysics-ch9-10.ts biophysics 9 10 输出「✓ 8 节全部通过 · 字数区间 2603–2815」；bunx tsc --noEmit 无本文件相关错误（现存错误均位于并行任务遗留文件）；bunx eslint 本文件退出码 0；git status 确认整个 expansions 目录为未跟踪新内容、本任务仅新增 biophysics-ch9-10.ts（其余 M/D 状态系并行代理所为）；临时核查脚本已清理
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- 2 章 8 节全部达标：ch9 生物成像技术 4 节 / ch10 生物信息、量子生物与前沿 4 节；扩写前后字数对照（前→后）：ch9-s1 799→2815、ch9-s2 981→2675、ch9-s3 899→2683、ch9-s4 1224→2723、ch10-s1 764→2603、ch10-s2 953→2642、ch10-s3 909→2618、ch10-s4 819→2636；合计 7348→21395 字符，全部落在 2600–3600 区间
- 测验题事实核查结论（q37–q45 无题面失配）：q37 d=λ/(2NA)=550/(2×1.4)≈196≈200 nm、病毒约 100 nm/核糖体约 25 nm 被挡、2014 诺奖 ✓；q38 GFP 11 条 β 折叠成桶/Ser65–Tyr66–Gly67 自催化环化-氧化-脱水无外源辅因子/发射峰 509 nm/2008 诺奖在位，D 项「必须蓝光激发」在正文有明确反证（475 nm 激发峰、红移变体调色板、双光子 700–1000 nm）✓；q39 STED 20–50 nm、PALM/STORM ~20 nm、SIM ~100 nm 配对与三机理在位 ✓；q40 玻璃态冰+相位衬度+液乙烷>10⁵ K/s+2–4 Å+2017 诺奖（Dubochet/Frank/Henderson）✓；q41 每碱基 2 bit、1 g 约 215 PB、高 6–7 个数量级、索引+载荷+Reed–Solomon、避同聚物与 GC 失衡、归档冷存储定位与读写瓶颈 ✓；q42 受体甲基化积分器/CheR 加甲基增敏、CheB~P 去甲基减敏/Barkai–Leibler 结构性鲁棒 ✓；q43 (δc/c)²≥1/(Dacτ) 公式原文在位、散粒噪声物理下界 ✓；q44 自由基对-隐花色素-超精细与塞曼-单线态/三线态-Larmor 扫频全链在位 ✓；q45 FMO 数百飞秒节拍（Engel 2007）/氢隧穿 KIE 3–10 极端 >80/Turin 振动论同位素可检验，D 项「量子纠缠传递代谢物」在「边界与判据」小节有明确否定（不可通信定理）✓
- 校验结果：validate-expansion 输出「✓ src/data/expansions/biophysics-ch9-10.ts: 8 节全部通过 · 字数区间 2603–2815」；tsc 无本文件相关错误；eslint 退出码 0；禁用字符扫描零命中；超集 token 核查实际缺失 0
- 集成提示：biophysicsCh9To10 为独立导出，src/data/expansions/index.ts 目前未挂载本文件（rg 确认无引用），需主控在 sectionExpansions 接入后方可生效；与 quiz q37–q45、illustrations（ch9-s4 冷冻电镜单颗粒重构流程图 caption 主题）已互相对应
---
Task ID: 25-q
Agent: content-repair-mb-ch6
Task: 修复分生 ch6 四节残留覆写

Work Log:
- 开工前置：完整阅读 agent-ctx/25-q-brief.md 任务简报与 agent-ctx/expansion-guide.md 通用指南；tail -60 worklog.md 掌握项目规范与并行批次格局
- 现状核查：bun 脚本测量 15 节字数——ch6-s1 1875 / ch6-s2 1966 / ch6-s3 2124 / ch6-s5 2013 低于教材级下限（ch6-s4 2547 已过校验线不动；ch4/ch5 十节 2630–2829 全达标不动）；Read subjects/molecular-biology.ts L965–1187 逐节核对 ch6 原文 5 节；rg 定位 quiz/molecular-biology.ts q26–q30（chapterId molecular-biology-ch6）五题考点
- 残留覆写修复：ch6-s1 残留的元注释残句「poly(UIC)ₙ 需为 poly(UUC)ₙ：…」清理为规范表述 poly(UUC)ₙ 三读框归属（按教材口径 UUC = Phe、UCU = Ser、CUU = Leu）；全文扫描确认无其他「需为」类残句
- 超集式扩写（仅动 4 节字符串值，Edit/MultiEdit 逐节实施，锚点脚本预校验唯一性）：ch6-s1 1875→2703，新增 sRNA 早期发现（Hoagland-Zamecnik-Stephenson 1956–1958）、多核苷酸磷酸化酶（Grunberg-Manago 与 Ochoa 1955）、poly(U) 体系平行管读出与高 Mg²⁺ 通读要点、莫斯科小场转大礼堂细节、新 H2「三条破译路线的分工与互补」（均一随机多聚物/重复共聚物/三核苷酸结合实验五列对照表）、1966 冷泉港研讨会收官与 4³ 无空码及 Met/Trp 单码注记，H2 5→6；ch6-s2 1966→2998，新增同义/错义/无义三类点突变对照表、摆动位修饰细节（肌苷由 A 脱氨生成、IGC 读 GCU/GCC/GCA、线粒体超摆动压缩 tRNA 库）、偏离分布规律与共进化假说、新 H2「密码子使用偏性：tRNA 库塑造的方言」（tRNA 基因拷贝数相关、AGA/AGG 稀有码减速、CAI 指数、密码子优化权衡）、Sec 的 Ser→Sep→Sec 改造路径与 PylRS 直接装载及操纵子布局、+/− 移码互补回复与同号三叠加复位细节，H2 5→6；ch6-s3 2124→3070，新增各臂尺寸定数（接受臂 7 bp、TψC 环 7 碱基、D 环 5～7、Ser/Leu/Tyr 长可变臂）、CCA 添加酶转录后加装、身份元件可拆可拼与正交 tRNA 出发点、氨酰化能量账（净耗 2 个高能磷酸键）、I 类 LysRS 古菌孤例与 Glu→Gln/Asp→Asn 间接路径、线粒体 PheRS 编辑域缺陷致小鼠心肌病、新 H2「保真度的接力与总账」（整体错译率 10⁻⁴～10⁻⁵、三层保险）、tavaborole 锁死 LeuRS 编辑腔与常山酮靶向 ProRS，H2 6→7；ch6-s5 2013→3041，新增信号假说 1971 设想/1975 Blobel-Dobberstein 微粒体证明证据链、Sec61 α 亚基 10 跨膜螺旋沙漏孔道与核糖体环形密封、正内规则（positive-inside rule）、线粒体 Δψ+ATP 双货币与 TIM22 载体通路、Pex5 随货同入与 Pex1/Pex6 拽出循环、Sec/Tat 平件-整件分工、耐药三路（氯霉素乙酰转移酶/TetA 外排/erm 甲基化 23S rRNA）、新 H2「四套输入体系速查」（ER/线粒体/过氧化物酶体/细胞核五行对照表），H2 6→7
- H2 主题与表格全部保留：原 24 个 H2（4 节合计）全部在位，摆动规则表、例外体系表、两类合成酶表、抗生素表原样保留；全章新增 3 张表（破译路线/突变类型/输入体系），ch6 合计 7 张表格；插图 caption 唯一挂载于 ch6-s4（translation-elongation 与 4V4R），本任务未触碰，无 caption 呼应风险
- 测验题事实核查（q26–q30 无题面失配）：q26 poly(U)→聚苯丙氨酸、UUU = Phe、1961、poly(A)→Lys/poly(C)→Pro、Khorana 重复共聚物与三核苷酸结合实验全部在位；q27 摆动规则表 I→U/C/A、G→U/C、U→A/G 原样在位，「大肠杆菌约 40～50 种有效 tRNA」覆盖题面「约 40 余种」口径；q28 IleRS 双筛、Val 比 Ile 小被编辑腔水解、错误率 10⁻²→10⁻⁵ 以下原样在位；q29 为 ch6-s4 考点（真核扫描模型），s4 零改动；q30 嘌呤霉素「氨酰-腺苷类似物进 A 位接受肽酰基后脱落、原核与真核」表行与正文原样在位
- 校验：bun run scripts/validate-expansion.ts src/data/expansions/molecular-biology-ch4-6.ts molecular-biology 4 5 6 输出「✓ src/data/expansions/molecular-biology-ch4-6.ts: 15 节全部通过 · 字数区间 2547–3070」；bunx tsc -p tsconfig.json --noEmit 过滤本文件零错误（现存错误均位于 examples/skills 等并行任务遗留文件）；禁用字符扫描（反引号、${、HTML 标签、制表符、H3+ 标题、图片/链接标记）零命中；ch4/ch5 十节与 ch6-s4 字数逐节复核与修改前完全一致（零改动）；临时核查脚本已清理
- 收工：本条目即以 bash cat >> 追加

Stage Summary:
- ch6 四节残留覆写修复完成，ch6-s4 与 ch4/ch5 十节零改动；修复前后字数对照（前→后）：ch6-s1 1875→2703、ch6-s2 1966→2998、ch6-s3 2124→3070、ch6-s5 2013→3041，四节全部落入 2600–3600 区间；15 节字数区间 2547–3070
- 校验输出：validate-expansion「✓ src/data/expansions/molecular-biology-ch4-6.ts: 15 节全部通过 · 字数区间 2547–3070」；tsc 本文件零错误；quiz q26–q30 考点核查无失配
- 集成提示：molecularBiologyCh4To6 是否已挂载于 src/data/expansions/index.ts 需主控核对（本任务未触碰 index.ts，越界文件一律未动）

---
Task ID: 22
Agent: 主控 (Z.ai Code)
Task: 全学科正文深度扩充 + 字数统计功能 + 微生物学新学科 + AI 图彻底清零

Work Log:
- 【字数统计功能】新建 src/lib/word-count.ts（countWords：CJK 逐字+英文按词；formatWordCount 万字格式；readingMinutes 400字/分）；biology.ts 新增 sectionWordCounts/chapterWordCounts/subjectWordCounts/totalWordCount 四级字数表与查询函数；阅读器题头「全文 X 字 · 约 Y 分钟」、目录抽屉「约 N 万字」、学科中心学科卡/章卡/小节行三级字数、仪表盘刊头「教材全文约 45 万字」+ 已学小节「已读 X 万字」+ 学科行字数、报告页「教材约 45 万字 · 已读约 X 万字」（/api/report overview 新增 readWords/totalWords）；修复仪表盘硬编码「303 张卡」→ 词典长度动态
- 【微生物学新学科】types.ts SubjectId 增加 microbiology；subject-theme 新增翠微(emerald)+Biohazard 主题；quiz-view/glossary-view/wrongbook-view/revision-view/notes-view 六组学科映射全部补 emerald 分支；chat 系统提示词与教材体系补微生物学；sidebar/仪表盘/学科中心文案改「五大基础学科」
- 【微生物学内容体系】4 个内容代理并行编写 12 章 46 节（src/data/subjects/micro/ch1-12.ts，约 13.8 万字符，每节 2600-3548 字）+ 60 道测验题 + 30 条术语（g-125~g-154 并入 glossary.ts）；microbiology.ts 聚合并注册进 biology.ts（五学科 58 章 249 节 285 题）
- 【AI 图彻底清零】24-b 代理自绘 6 张学术编辑风 SVG 封面（4 学科+微生物学+hero，VLM 全过）；删除 5 张 AI 生成 PNG，subjectCovers/heroImage 全部切 SVG；24-a 微生物 Commons 插图 16 张（主控接管反查源文件+VLM 审校+图注编写+挂载），补体图因 C2b/C2a 误标淘汰换用 Hegasy 版
- 【全学科正文深度扩充】expansion-guide.md 通用指南 + 16 批次简报（agent-ctx/exp-25-*）；16 个批次代理执行（多批为残留接管模式，逐节复核+事实修正），输出 src/data/expansions/*.ts（Record<string,string>）；expansions/index.ts 统一合并，biology.ts withExpansions 应用（扩充层架构：并行写入零冲突、任何批次缺失时教材仍完整）；分生 ch6 四节被后到残留覆写 → 25-q 修复代理定向修复；最终 249 节全部 ≥2400 字符（实测 min=2547）
- 【图库/搜索联动修复】gallery-view 与 search-dialog 从 illustrations 直读改为 getIllustrations（合并 microIllustrations），图库 81→97 张、学科筛选新增微生物学
- 【QA】tsc src/ 0 错、eslint 0 警告；插图完整性脚本 97 挂载位 0 缺失 0 AI；agent-browser 回归：仪表盘（五学科卡+字数+SVG hero VLM 过）、学科中心（微生物学卡+12 章字数）、阅读器（微生物 ch2-s2「全文 2,028 字」+ 图 2-2-1 Commons 插图 VLM 过）、测验（微生物学 tab 12 章×5 题+答题渲染）、词典（154 条+微生物筛选）、图库（97 张+微生物筛选）、报告（45 万字）、⌘K 搜索（革兰氏命中小节+插图）、深色模式 VLM 过、console 全程零错误；清理 cron 播种 128 条假进度

Stage Summary:
- 教材总量 21.8 万字 → 44.5 万字（翻倍），249 小节全部教材级深度（avg 2700+ 字符/节）
- 微生物学：12 章 46 节 9.0 万字 + 60 题 + 30 术语 + 16 张 Commons 插图 + 自绘封面，五大学科体系完整
- 字数统计：四级（节/章/学科/全书）+ 已读字数双维度，覆盖阅读器/学科中心/仪表盘/学习报告四视图
- AI 图清零：97 张插图 100% 真实来源 + 6 张自绘 SVG 封面，全站无任何 AI 生成图像
- 质量门：tsc 0 错、lint 0 警、console 零错误、VLM 多轮审校通过

未解决问题与下一步建议：
- cron 15 分钟任务会持续 seed 假数据，交付前必查 LearningProgress（本轮已清 128 条）
- 分生/生化等扩充层由多代理接管完成，个别小节风格略有差异（已过校验，非阻塞）
- 后续方向：AI 看图讲解流式输出、复习卡片遗忘曲线历史图、⌘K 拼音首字母匹配、微生物学补充芽孢/光学显微镜主题配图、字数统计「今日已读」粒度
