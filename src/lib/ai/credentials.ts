// ============================================================
// BioScholar AI 助教 — 供应商凭据存储（文件型 KV）
// 参考 pdb-tracker-web-v5 的 credentials 设计：
// - API Key + baseURL 覆盖 + 默认模型持久化到 .bioscholar/ai-providers.json
// - 默认供应商持久化到 .bioscholar/ai-default-provider.json
// - 内存缓存 + mtime 失效校验，避免每次请求读盘
// - 解析顺序：本地配置 → 环境变量 fallback
// zai 供应商使用 z-ai-web-dev-sdk 内置鉴权，无需显式 Key。
// ============================================================

import {
  existsSync,
  mkdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { resolve } from 'node:path'
import {
  getProviderProfile,
  PROVIDER_CATALOG,
  type ProviderProfile,
} from './providers'

export interface ProviderConfig {
  /** API Key */
  apiKey?: string
  /** 覆盖默认 Base URL */
  baseURL?: string
  /** 覆盖默认模型 */
  defaultModel?: string
  /** 是否启用（默认：有 Key 即启用） */
  enabled?: boolean
}

export type ProviderConfigMap = Record<string, ProviderConfig>

const CONFIG_DIR = resolve(process.cwd(), '.bioscholar')
const CONFIG_FILE = resolve(CONFIG_DIR, 'ai-providers.json')
const DEFAULT_FILE = resolve(CONFIG_DIR, 'ai-default-provider.json')

/* ---------- 底层读写（带 mtime 缓存） ---------- */

let cachedConfigs: ProviderConfigMap | null = null
let cachedConfigsMtime = 0

/** 读取全部供应商配置（内存缓存 + mtime 失效） */
export function loadProviderConfigs(): ProviderConfigMap {
  try {
    if (!existsSync(CONFIG_FILE)) return {}
    const stat = statSync(CONFIG_FILE)
    if (cachedConfigs && stat.mtimeMs === cachedConfigsMtime) {
      return cachedConfigs
    }
    const raw = readFileSync(CONFIG_FILE, 'utf-8')
    const data = JSON.parse(raw) as ProviderConfigMap
    cachedConfigs = data && typeof data === 'object' ? data : {}
    cachedConfigsMtime = stat.mtimeMs
    return cachedConfigs
  } catch {
    return {}
  }
}

/** 全量写回配置文件 */
function persistConfigs(map: ProviderConfigMap): void {
  try {
    if (!existsSync(CONFIG_DIR)) {
      mkdirSync(CONFIG_DIR, { recursive: true, mode: 0o700 })
    }
    writeFileSync(CONFIG_FILE, JSON.stringify(map, null, 2), {
      encoding: 'utf-8',
      mode: 0o600,
    })
    cachedConfigs = map
    cachedConfigsMtime = statSync(CONFIG_FILE).mtimeMs
  } catch (err) {
    console.error('[ai-credentials] persistConfigs failed:', err)
  }
}

/* ---------- 默认供应商 ---------- */

let cachedDefault: string | null | undefined = undefined
let cachedDefaultMtime = 0

/** 当前默认供应商 id（null 表示未设置，回退 zai） */
export function getDefaultProvider(): string | null {
  try {
    if (!existsSync(DEFAULT_FILE)) return null
    const stat = statSync(DEFAULT_FILE)
    if (cachedDefault !== undefined && stat.mtimeMs === cachedDefaultMtime) {
      return cachedDefault
    }
    const raw = readFileSync(DEFAULT_FILE, 'utf-8')
    const data = JSON.parse(raw) as { providerId?: string }
    cachedDefault = data.providerId ?? null
    cachedDefaultMtime = stat.mtimeMs
    return cachedDefault
  } catch {
    return null
  }
}

/** 设置默认供应商（校验目录内 id） */
export function setDefaultProvider(providerId: string): boolean {
  const profile = getProviderProfile(providerId)
  if (!profile) return false
  try {
    if (!existsSync(CONFIG_DIR)) {
      mkdirSync(CONFIG_DIR, { recursive: true, mode: 0o700 })
    }
    writeFileSync(
      DEFAULT_FILE,
      JSON.stringify({ providerId, updatedAt: new Date().toISOString() }, null, 2),
      { encoding: 'utf-8', mode: 0o600 }
    )
    cachedDefault = providerId
    cachedDefaultMtime = statSync(DEFAULT_FILE).mtimeMs
    return true
  } catch (err) {
    console.error('[ai-credentials] setDefaultProvider failed:', err)
    return false
  }
}

/* ---------- 单个供应商配置 CRUD ---------- */

/** 读取某供应商配置 */
export function getProviderConfig(providerId: string): ProviderConfig {
  return loadProviderConfigs()[providerId] ?? {}
}

/** 保存/更新某供应商配置（增量合并） */
export function saveProviderConfig(
  providerId: string,
  patch: ProviderConfig
): boolean {
  const profile = getProviderProfile(providerId)
  if (!profile) return false
  const map = { ...loadProviderConfigs() }
  const current = map[providerId] ?? {}
  map[providerId] = {
    ...current,
    ...(patch.apiKey !== undefined ? { apiKey: patch.apiKey } : {}),
    ...(patch.baseURL !== undefined ? { baseURL: patch.baseURL } : {}),
    ...(patch.defaultModel !== undefined
      ? { defaultModel: patch.defaultModel }
      : {}),
    ...(patch.enabled !== undefined ? { enabled: patch.enabled } : {}),
  }
  persistConfigs(map)
  return true
}

/** 删除某供应商配置 */
export function deleteProviderConfig(providerId: string): boolean {
  if (providerId === 'zai') return false // 内置供应商不可删除
  const map = { ...loadProviderConfigs() }
  if (!(providerId in map)) return true
  delete map[providerId]
  persistConfigs(map)
  // 若被删的是默认供应商，回退到 zai
  if (getDefaultProvider() === providerId) {
    setDefaultProvider('zai')
  }
  return true
}

/* ---------- 解析（供 LLM 调用器与测试端点使用） ---------- */

/** 解析 API Key：本地配置 → 环境变量 */
export function resolveApiKey(providerId: string): string | undefined {
  if (providerId === 'zai') return 'builtin' // SDK 自带鉴权
  const config = loadProviderConfigs()[providerId]
  if (config?.apiKey && config.apiKey.trim()) return config.apiKey.trim()
  const profile = getProviderProfile(providerId)
  if (profile?.apiKeyEnv && process.env[profile.apiKeyEnv]) {
    return process.env[profile.apiKeyEnv]
  }
  return undefined
}

/** 解析 Base URL：本地覆盖 → 档案默认 */
export function resolveBaseURL(providerId: string): string | undefined {
  const config = loadProviderConfigs()[providerId]
  if (config?.baseURL && config.baseURL.trim()) return config.baseURL.trim()
  const profile = getProviderProfile(providerId)
  return profile?.baseURL || undefined
}

/** 解析生效模型：本地覆盖 → 档案默认 */
export function resolveModel(providerId: string): string | undefined {
  const config = loadProviderConfigs()[providerId]
  if (config?.defaultModel && config.defaultModel.trim()) {
    return config.defaultModel.trim()
  }
  const profile = getProviderProfile(providerId)
  return profile?.defaultModel || undefined
}

/** 解析当前生效（默认）供应商档案；未配置时回退 zai */
export function resolveActiveProvider(): ProviderProfile {
  const id = getDefaultProvider() ?? 'zai'
  return getProviderProfile(id) ?? getProviderProfile('zai')!
}

/* ---------- 面向 UI 的脱敏 ---------- */

/** Key 脱敏展示（如 sk-abc…x9f2 → sk-***x9f2） */
export function maskApiKey(key: string): string {
  if (!key) return ''
  if (key.length <= 8) return `${key.slice(0, 2)}***`
  return `${key.slice(0, 5)}…${key.slice(-4)}`
}

/** 列出全部供应商（含配置状态，供 GET 接口返回） */
export function listProviderStatuses() {
  const configs = loadProviderConfigs()
  const defaultId = getDefaultProvider() ?? 'zai'
  return {
    defaultProvider: defaultId,
    providers: PROVIDER_CATALOG.map((p) => {
      const config = configs[p.id] ?? {}
      const hasApiKey =
        p.id === 'zai' || Boolean(resolveApiKey(p.id))
      const hasBaseURLOverride = Boolean(
        config.baseURL && config.baseURL.trim() && config.baseURL !== p.baseURL
      )
      const effectiveModel = resolveModel(p.id) ?? p.defaultModel
      return {
        id: p.id,
        displayName: p.displayName,
        label: p.label,
        baseURL: resolveBaseURL(p.id) ?? p.baseURL,
        apiKeyEnv: p.apiKeyEnv,
        defaultModel: p.defaultModel,
        models: p.models,
        supportsToolCalling: p.supportsToolCalling,
        docsUrl: p.docsUrl,
        group: p.group,
        customBaseURL: p.customBaseURL,
        available: hasApiKey,
        hasApiKey,
        maskedKey:
          p.id !== 'zai' && config.apiKey
            ? maskApiKey(config.apiKey)
            : undefined,
        hasBaseURLOverride,
        effectiveModel,
      }
    }),
  }
}
