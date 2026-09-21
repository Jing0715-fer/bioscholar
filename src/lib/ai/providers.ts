// ============================================================
// BioScholar AI 助教 — LLM 供应商目录（Provider Catalog）
// 参考 pdb-tracker-web-v5 的 provider 设计：
// 每个供应商描述 baseURL / 默认模型 / 模型列表 / 认证方式 / 文档链接，
// 除 zai（内置 SDK，无需 Key）外均走 OpenAI 兼容 /chat/completions 协议。
// ============================================================

/** 供应商模型条目 */
export interface ProviderModel {
  id: string
  name: string
  /** 上下文窗口（token 数，用于 UI 展示） */
  contextWindow?: number
}

/** 供应商档案 */
export interface ProviderProfile {
  id: string
  /** 展示名（含中文说明） */
  displayName: string
  /** 短标签（1–2 字符，用于行内徽标） */
  label: string
  /** 默认 Base URL */
  baseURL: string
  /** 对应的环境变量名（fallback） */
  apiKeyEnv: string
  /** 认证头名称（默认 Authorization） */
  authHeader?: string
  /** 认证头前缀（默认 'Bearer '） */
  authPrefix?: string
  /** 额外请求头 */
  extraHeaders?: Record<string, string>
  /** 默认模型 id */
  defaultModel: string
  /** 模型列表 */
  models: ProviderModel[]
  /** 是否支持工具调用（当前聊天未用，仅展示） */
  supportsToolCalling: boolean
  /** 获取 API Key 的文档地址 */
  docsUrl: string
  /** 供应商分组：内置 / 主流 / 国内 / 聚合 / 本地 */
  group: 'builtin' | 'major' | 'china' | 'aggregator' | 'local'
  /** 是否允许自定义 Base URL（custom 型必填） */
  customBaseURL?: boolean
}

/** 内置供应商目录 */
export const PROVIDER_CATALOG: ProviderProfile[] = [
  {
    id: 'zai',
    displayName: 'Z.ai（内置默认）',
    label: 'Z',
    baseURL: '',
    apiKeyEnv: '',
    defaultModel: 'glm-4.6',
    models: [
      { id: 'glm-4.6', name: 'GLM-4.6', contextWindow: 128000 },
      { id: 'glm-4.5', name: 'GLM-4.5', contextWindow: 128000 },
      { id: 'glm-4-flash', name: 'GLM-4 Flash', contextWindow: 128000 },
      { id: 'glm-4-plus', name: 'GLM-4 Plus', contextWindow: 128000 },
      { id: 'glm-4-air', name: 'GLM-4 Air', contextWindow: 128000 },
    ],
    supportsToolCalling: true,
    docsUrl: 'https://open.bigmodel.cn/usercenter/apikeys',
    group: 'builtin',
  },
  {
    id: 'deepseek',
    displayName: 'DeepSeek 深度求索',
    label: 'DS',
    baseURL: 'https://api.deepseek.com/v1',
    apiKeyEnv: 'DEEPSEEK_API_KEY',
    defaultModel: 'deepseek-chat',
    models: [
      { id: 'deepseek-chat', name: 'DeepSeek V3（Chat）', contextWindow: 64000 },
      { id: 'deepseek-reasoner', name: 'DeepSeek R1（推理）', contextWindow: 64000 },
    ],
    supportsToolCalling: true,
    docsUrl: 'https://platform.deepseek.com/api_keys',
    group: 'china',
  },
  {
    id: 'openai',
    displayName: 'OpenAI',
    label: 'AI',
    baseURL: 'https://api.openai.com/v1',
    apiKeyEnv: 'OPENAI_API_KEY',
    defaultModel: 'gpt-4.1-mini',
    models: [
      { id: 'gpt-4.1', name: 'GPT-4.1', contextWindow: 1047576 },
      { id: 'gpt-4.1-mini', name: 'GPT-4.1 mini', contextWindow: 1047576 },
      { id: 'gpt-4.1-nano', name: 'GPT-4.1 nano', contextWindow: 1047576 },
      { id: 'gpt-4o', name: 'GPT-4o', contextWindow: 128000 },
      { id: 'gpt-4o-mini', name: 'GPT-4o mini', contextWindow: 128000 },
      { id: 'o4-mini', name: 'o4-mini（推理）', contextWindow: 200000 },
    ],
    supportsToolCalling: true,
    docsUrl: 'https://platform.openai.com/api-keys',
    group: 'major',
  },
  {
    id: 'anthropic',
    displayName: 'Anthropic Claude',
    label: 'AN',
    baseURL: 'https://api.anthropic.com/v1',
    apiKeyEnv: 'ANTHROPIC_API_KEY',
    defaultModel: 'claude-sonnet-4-20250514',
    models: [
      { id: 'claude-sonnet-4-20250514', name: 'Claude Sonnet 4', contextWindow: 200000 },
      { id: 'claude-haiku-4-5-20251001', name: 'Claude Haiku 4.5', contextWindow: 200000 },
      { id: 'claude-opus-4-20250514', name: 'Claude Opus 4', contextWindow: 200000 },
      { id: 'claude-3-5-sonnet-20241022', name: 'Claude 3.5 Sonnet', contextWindow: 200000 },
    ],
    supportsToolCalling: true,
    docsUrl: 'https://console.anthropic.com/settings/keys',
    group: 'major',
  },
  {
    id: 'google',
    displayName: 'Google Gemini',
    label: 'GG',
    baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai',
    apiKeyEnv: 'GOOGLE_API_KEY',
    defaultModel: 'gemini-2.5-flash',
    models: [
      { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', contextWindow: 1048576 },
      { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', contextWindow: 1048576 },
      { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash', contextWindow: 1048576 },
    ],
    supportsToolCalling: true,
    docsUrl: 'https://aistudio.google.com/apikey',
    group: 'major',
  },
  {
    id: 'qwen',
    displayName: '通义千问 Qwen（阿里）',
    label: 'QW',
    baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    apiKeyEnv: 'DASHSCOPE_API_KEY',
    defaultModel: 'qwen-plus',
    models: [
      { id: 'qwen3-max', name: 'Qwen3 Max', contextWindow: 262144 },
      { id: 'qwen3-plus', name: 'Qwen3 Plus', contextWindow: 131072 },
      { id: 'qwen-plus', name: 'Qwen Plus', contextWindow: 131072 },
      { id: 'qwen-max', name: 'Qwen Max', contextWindow: 32768 },
    ],
    supportsToolCalling: true,
    docsUrl: 'https://dashscope.console.aliyun.com/apiKey',
    group: 'china',
  },
  {
    id: 'moonshot',
    displayName: '月之暗面 Kimi',
    label: 'MS',
    baseURL: 'https://api.moonshot.cn/v1',
    apiKeyEnv: 'MOONSHOT_API_KEY',
    defaultModel: 'kimi-k2-0905-preview',
    models: [
      { id: 'kimi-k2-0905-preview', name: 'Kimi K2', contextWindow: 131072 },
      { id: 'moonshot-v1-128k', name: 'Moonshot v1（128k）', contextWindow: 128000 },
      { id: 'moonshot-v1-32k', name: 'Moonshot v1（32k）', contextWindow: 32000 },
      { id: 'moonshot-v1-8k', name: 'Moonshot v1（8k）', contextWindow: 8000 },
    ],
    supportsToolCalling: true,
    docsUrl: 'https://platform.moonshot.cn/console/api-keys',
    group: 'china',
  },
  {
    id: 'zhipu',
    displayName: '智谱 AI GLM',
    label: 'ZP',
    baseURL: 'https://open.bigmodel.cn/api/paas/v4',
    apiKeyEnv: 'ZHIPU_API_KEY',
    defaultModel: 'glm-4-flash',
    models: [
      { id: 'glm-4-plus', name: 'GLM-4 Plus', contextWindow: 128000 },
      { id: 'glm-4-air', name: 'GLM-4 Air', contextWindow: 128000 },
      { id: 'glm-4-flash', name: 'GLM-4 Flash（免费）', contextWindow: 128000 },
    ],
    supportsToolCalling: true,
    docsUrl: 'https://open.bigmodel.cn/usercenter/apikeys',
    group: 'china',
  },
  {
    id: 'siliconflow',
    displayName: 'SiliconFlow 硅基流动',
    label: 'SF',
    baseURL: 'https://api.siliconflow.cn/v1',
    apiKeyEnv: 'SILICONFLOW_API_KEY',
    defaultModel: 'deepseek-ai/DeepSeek-V3',
    models: [
      { id: 'deepseek-ai/DeepSeek-V3', name: 'DeepSeek V3', contextWindow: 64000 },
      { id: 'deepseek-ai/DeepSeek-R1', name: 'DeepSeek R1', contextWindow: 64000 },
      { id: 'Qwen/Qwen2.5-72B-Instruct', name: 'Qwen2.5 72B', contextWindow: 32768 },
    ],
    supportsToolCalling: true,
    docsUrl: 'https://cloud.siliconflow.cn/account/ak',
    group: 'china',
  },
  {
    id: 'minimax',
    displayName: 'MiniMax',
    label: 'MM',
    baseURL: 'https://api.minimaxi.com/v1',
    apiKeyEnv: 'MINIMAX_API_KEY',
    defaultModel: 'MiniMax-Text-01',
    models: [
      { id: 'MiniMax-Text-01', name: 'MiniMax Text 01', contextWindow: 1000000 },
      { id: 'abab6.5s-chat', name: 'abab6.5s', contextWindow: 245760 },
    ],
    supportsToolCalling: true,
    docsUrl: 'https://platform.minimaxi.com/user-center/basic-information/interface-key',
    group: 'china',
  },
  {
    id: 'openrouter',
    displayName: 'OpenRouter（聚合）',
    label: 'OR',
    baseURL: 'https://openrouter.ai/api/v1',
    apiKeyEnv: 'OPENROUTER_API_KEY',
    defaultModel: 'deepseek/deepseek-chat',
    models: [
      { id: 'deepseek/deepseek-chat', name: 'DeepSeek V3', contextWindow: 64000 },
      { id: 'anthropic/claude-sonnet-4', name: 'Claude Sonnet 4', contextWindow: 200000 },
      { id: 'openai/gpt-4.1-mini', name: 'GPT-4.1 mini', contextWindow: 1047576 },
      { id: 'google/gemini-2.5-flash', name: 'Gemini 2.5 Flash', contextWindow: 1048576 },
    ],
    supportsToolCalling: true,
    docsUrl: 'https://openrouter.ai/keys',
    group: 'aggregator',
  },
  {
    id: 'groq',
    displayName: 'Groq（极速推理）',
    label: 'GQ',
    baseURL: 'https://api.groq.com/openai/v1',
    apiKeyEnv: 'GROQ_API_KEY',
    defaultModel: 'llama-3.3-70b-versatile',
    models: [
      { id: 'llama-3.3-70b-versatile', name: 'Llama 3.3 70B', contextWindow: 131072 },
      { id: 'llama-3.1-8b-instant', name: 'Llama 3.1 8B', contextWindow: 131072 },
    ],
    supportsToolCalling: true,
    docsUrl: 'https://console.groq.com/keys',
    group: 'aggregator',
  },
  {
    id: 'mistral',
    displayName: 'Mistral AI',
    label: 'MI',
    baseURL: 'https://api.mistral.ai/v1',
    apiKeyEnv: 'MISTRAL_API_KEY',
    defaultModel: 'mistral-small-latest',
    models: [
      { id: 'mistral-large-latest', name: 'Mistral Large', contextWindow: 128000 },
      { id: 'mistral-small-latest', name: 'Mistral Small', contextWindow: 32000 },
    ],
    supportsToolCalling: true,
    docsUrl: 'https://console.mistral.ai/api-keys',
    group: 'major',
  },
  {
    id: 'xai',
    displayName: 'xAI Grok',
    label: 'xA',
    baseURL: 'https://api.x.ai/v1',
    apiKeyEnv: 'XAI_API_KEY',
    defaultModel: 'grok-3-mini',
    models: [
      { id: 'grok-3', name: 'Grok 3', contextWindow: 131072 },
      { id: 'grok-3-mini', name: 'Grok 3 Mini', contextWindow: 131072 },
    ],
    supportsToolCalling: true,
    docsUrl: 'https://console.x.ai',
    group: 'major',
  },
  {
    id: 'ollama',
    displayName: 'Ollama（本地模型）',
    label: 'OL',
    baseURL: 'http://localhost:11434/v1',
    apiKeyEnv: 'OLLAMA_API_KEY',
    defaultModel: 'qwen2.5',
    models: [
      { id: 'qwen2.5', name: 'Qwen 2.5', contextWindow: 32768 },
      { id: 'llama3.2', name: 'Llama 3.2', contextWindow: 128000 },
      { id: 'deepseek-r1', name: 'DeepSeek R1', contextWindow: 128000 },
    ],
    supportsToolCalling: true,
    docsUrl: 'https://ollama.com',
    group: 'local',
  },
  {
    id: 'custom',
    displayName: '自定义 OpenAI 兼容接口',
    label: 'CU',
    baseURL: '',
    apiKeyEnv: 'CUSTOM_LLM_API_KEY',
    defaultModel: '',
    models: [],
    supportsToolCalling: true,
    docsUrl: 'https://platform.openai.com/docs/api-reference/chat',
    group: 'local',
    customBaseURL: true,
  },
]

/** 按 id 获取供应商档案 */
export function getProviderProfile(id: string): ProviderProfile | undefined {
  return PROVIDER_CATALOG.find((p) => p.id === id)
}

/** 全部供应商 id */
export function getProviderIds(): string[] {
  return PROVIDER_CATALOG.map((p) => p.id)
}

/** 供应商分组（UI 展示顺序） */
export const PROVIDER_GROUPS: Array<{ key: ProviderProfile['group']; label: string }> = [
  { key: 'builtin', label: '内置' },
  { key: 'china', label: '国内供应商' },
  { key: 'major', label: '国际主流' },
  { key: 'aggregator', label: '聚合 / 推理云' },
  { key: 'local', label: '本地 / 自定义' },
]
