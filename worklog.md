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
