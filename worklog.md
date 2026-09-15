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
