# Task ID: 5 — frontend-assistant（AI 智能助教聊天视图）

## 交付物
- 重写 `/home/z/my-project/src/components/bio/assistant-view.tsx`（原为占位组件）

## 实现要点

### 会话管理
- `sessionId` 持久化于 localStorage（key: `bioscholar-chat-session`），`crypto.randomUUID()` 生成，隐私模式下退化为内存 UUID
- 挂载时 `GET /api/chat?sessionId=` 加载历史（类型守卫 `isHistoryResponse` 校验响应）
- 清空按钮（Trash2 图标）→ shadcn AlertDialog 确认 → `DELETE /api/chat?sessionId=` + 本地重置 + toast

### SSE 流式聊天
- `fetch POST /api/chat` + `response.body.getReader()` + `TextDecoder`，按 `data: ` 行解析 JSON
- 类型守卫：`isDeltaEvent` / `isDoneEvent` / `isErrorEvent`（无 any）
- rAF 批量合并 delta 渲染（pendingRef + requestAnimationFrame），降低高频 setState
- AbortController「停止生成」：保留部分内容并标记 stopped
- 错误：网络/HTTP/SSE error → 消息内错误横幅 + 重试按钮（重发最近用户消息，drop 失败气泡）+ destructive toast

### UI 结构
- 外层 `flex flex-col h-[calc(100dvh-…)] max-w-4xl`，消息区 `flex-1 overflow-y-auto bio-scroll`
- 顶部渐变横幅 emerald→teal，Bot + GraduationCap，「AI 智能助教 / 基于「101计划」教材体系的生物学专家」，右侧在线/生成中状态灯
- 用户右 primary 气泡 / AI 左 card 气泡 + Dna 渐变头像；AI 内容用 `<Markdown/>` 渲染
- 思考中三点动画复用 `bio-dot-1/2/3`；流式光标 animate-pulse
- 智能滚动：距底 <80px 才自动跟随；非贴底显示「回到底部」悬浮按钮
- Textarea 1–4 行自适应（JS clamp 104px）；Enter 发送（`isComposing` 判断）/ Shift+Enter 换行；输入区 `pb-[max(0.625rem,env(safe-area-inset-bottom))]`
- React.memo(MessageBubble) 避免流式期间无关气泡重渲

### 上下文与快捷提问
- `store.assistantContext` → 「生物化学 · 第 5 章 酶学 · 米氏方程」学科色 Badge（subject-theme），点 × 清除；无上下文显示引导提示
- 空会话展示 6 张经典问题卡片（化学渗透假说、米氏方程、原核真核调控、Bcl-2、膜蛋白 α-螺旋、中心法则），点击直发
- 学科聚焦 Select（全部/四学科），选中显示聚焦 Badge 与输入区提示语（仅提示不强制）

## 验证
- `bunx tsc --noEmit -p tsconfig.json`（过滤 examples/skills）→ 0 错误
- `bunx eslint src/components/bio/assistant-view.tsx` → 0 警告
- dev.log 编译正常（✓ Compiled / GET / 200）
- curl 冒烟：GET 历史 ✅、POST SSE（`data:{"delta"}` … `data:{"done":true}`）✅、DELETE 清空 ✅（测试数据已清理）

## 关键接口约定（供后续 agent 参考）
- POST body: `{ sessionId, message, context?: { subjectId, chapterId, sectionId, sectionTitle } }`
- SSE 事件：`{"delta": string}` 增量 / `{"done": true}` 结束 / `{"error": string}` 失败
- 消息类型：`src/lib/types.ts` 的 `ChatMessage`；本地展示扩展 `DisplayMessage { error?, stopped? }`
