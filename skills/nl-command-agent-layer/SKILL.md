---
name: nl-command-agent-layer
description: 为已有命令行工具/CLI 应用搭建「自然语言→命令」的 AI Agent 层基础设施（LLM 翻译自然语言为白名单命令并自动执行，含确认门控与自动修正循环）。适用场景：用户想让应用支持自然语言操控、AI 助手执行绘图/分析/操作指令。
---

# 自然语言→命令 Agent 层基础设施

## 架构（四层，前端薄、后端纯）

1. **协议层** `agent/protocol.ts`：AgentChatMessage（含命令记录 7 态：pending/running/ok/error/confirm/rejected/blocked）、AgentDecision `{reply, commands[]}`、持久化键与上限常量。命令数硬上限（防 LLM 失控刷命令）。
2. **上下文层** `agent/context.ts`：buildSceneContext() 把应用状态（结构/选择/设置/最近命令）序列化为紧凑文本，**每轮请求随对话注入**——LLM 实时感知场景，是「再红一点」类增量指令的基础。
3. **执行层** `agent/runner.ts`：classifyCmd 白名单三分级——AUTO（安全命令自动执行）/ CONFIRM（破坏性命令等用户点确认，细粒度豁免如 session save|export、record stop）/ blocked（未知命令拒绝）。execAgentCmd 复用应用既有命令执行入口（同一条代码路径可审计），从日志增量捕获输出判定成败。
4. **端点层** `/api/agent/route.ts`：z-ai-web-dev-sdk（仅后端），系统提示词（严格 JSON 协议+命令语法参考+行为规则）+ 场景以独立 user 消息注入（非 system role）。

## 质量标准

- LLM 决策 sanitize：reply 长度钳制、命令条数 ≤10、单条 ≤300 字符、extractJson 容忍 ```围栏
- **降级兜底**：LLM 未按 JSON 说话但有实质文本 → 全文当 reply、commands 空（可用性优先于严格协议，永不因格式漂移 502）
- **自动修正循环**（depth≤1）：失败命令（cmd+错误输出）反馈 LLM 求修正，修正消息带🔁前缀，UI 展示闭环
- 对话 localStorage 持久化（刷新恢复），命令卡片含状态图标+可展开输出+重跑按钮

## 踩坑记录（全部实测捕获）

1. **异步命令时序**：`load` 类命令网络+解析需数秒，逐条 120ms 间隔执行会让后续命令全部报「没有结构」→ runner 轮询状态（如 structures.length 增加，最多 20s，err 提前退出）。
2. **历史格式污染**：assistant 历史消息附带「[上轮命令] cmd(ok)」摘要会诱导 LLM 模仿该格式输出纯文本而非 JSON（两轮 502 实测复现）→ 历史只传纯 reply，机器状态放场景注入消息里。
3. **静默吞错**：应用命令若把无效参数存进内部状态而不报错（如空 rep），agent 会误报成功 → 入口处加即时校验（evaluateSelection 探测）。
4. **React 受控 input 测试**：eval 直接赋值+dispatch input 不触发 onChange（value tracker 机制）——E2E 必须走 CDP 级 fill/press（agent-browser fill/press 命令）。
5. **LLM 幻觉命令模式**：会发明不存在的命名选择（须在提示词明确「内联表达式优先、命名选择须先创建」）、把独立命令当 set 键（`set ssao on`，提示词注明「ssao 是独立命令非 set 键」）。
6. **ZAI 服务瞬时 502 存在**（长上下文下偶发）→ 端点内部重试 2 次 + 降级兜底双防线。
7. **命名选择的指令随机性**：同一问题不同轮 LLM 输出不同（一次带 `select x = ...` 一次不带）——修复循环就是为此设计的兜底。
