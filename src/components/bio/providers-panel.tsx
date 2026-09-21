'use client'

// ============================================================
// AI 供应商配置面板（ProvidersPanel）
// 参考 pdb-tracker-web-v5 的 ProvidersPanel 设计：
// 选择供应商 → Base URL 自动填充 → 选择模型 → 填入 API Key →
// 测试连通 / 保存；下方为已配置供应商列表（设默认 / 编辑 / 删除）。
// ============================================================

import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertCircle,
  Check,
  ChevronDown,
  ExternalLink,
  Eye,
  EyeOff,
  Globe,
  Key,
  Loader2,
  Plus,
  RefreshCw,
  ShieldCheck,
  Trash2,
  Zap,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'

/* ---------- API 契约类型（与 /api/assistant/providers 一致） ---------- */

interface ProviderModelInfo {
  id: string
  name: string
  contextWindow?: number
}

interface ProviderInfo {
  id: string
  displayName: string
  label: string
  baseURL: string
  apiKeyEnv: string
  defaultModel: string
  models: ProviderModelInfo[]
  supportsToolCalling: boolean
  docsUrl: string
  group: 'builtin' | 'major' | 'china' | 'aggregator' | 'local'
  customBaseURL?: boolean
  /** 是否已配置（有 Key 或内置） */
  available: boolean
  hasApiKey: boolean
  /** 脱敏后的 Key（如 sk-***abc4） */
  maskedKey?: string
  hasBaseURLOverride: boolean
  effectiveModel: string
}

const GROUP_LABELS: Record<ProviderInfo['group'], string> = {
  builtin: '内置（无需配置）',
  china: '国内供应商',
  major: '国际主流',
  aggregator: '聚合 / 推理云',
  local: '本地 / 自定义',
}

const GROUP_ORDER: ProviderInfo['group'][] = [
  'builtin',
  'china',
  'major',
  'aggregator',
  'local',
]

interface Props {
  open: boolean
  onClose: () => void
  /** 配置发生变化（保存/删除/设默认）后通知父组件刷新指示器 */
  onChanged?: () => void
}

/* ---------- 主面板 ---------- */

export function ProvidersPanel({ open, onClose, onChanged }: Props) {
  const [providers, setProviders] = useState<ProviderInfo[]>([])
  const [defaultProvider, setDefaultProvider] = useState('zai')
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/assistant/providers')
      if (!res.ok) return
      const data = (await res.json()) as {
        providers: ProviderInfo[]
        defaultProvider?: string
      }
      setProviders(data.providers ?? [])
      setDefaultProvider(data.defaultProvider ?? 'zai')
    } catch {
      /* 网络异常时保留旧数据 */
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (open) void refresh()
  }, [open, refresh])

  const configuredProviders = providers.filter(
    (p) => p.hasApiKey || p.id === 'zai'
  )
  const unconfiguredProviders = providers.filter(
    (p) => !p.hasApiKey && p.id !== 'zai'
  )

  /** 设为默认供应商 */
  const setDefault = async (id: string) => {
    if (id === defaultProvider) return
    try {
      await fetch('/api/assistant/providers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId: id, setDefault: true }),
      })
      setDefaultProvider(id)
      const p = providers.find((x) => x.id === id)
      toast({
        title: '默认供应商已切换',
        description: p ? `AI 助教现在使用 ${p.displayName}` : undefined,
      })
      onChanged?.()
    } catch {
      toast({ title: '设置默认供应商失败', variant: 'destructive' })
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) onClose()
      }}
    >
      <DialogContent className="max-w-lg gap-0 overflow-hidden p-0 sm:max-w-lg">
        {/* 头部 */}
        <DialogHeader className="border-b px-5 pb-3 pt-5">
          <DialogTitle className="flex items-center gap-2 text-sm leading-none">
            <Key className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
            AI 供应商配置
          </DialogTitle>
          <DialogDescription className="mt-2 text-xs leading-relaxed">
            选择 LLM 供应商并填入 API Key，Base URL 将自动填充。切换供应商后
            AI 助教的问答、看图讲解均走新通道。
          </DialogDescription>
        </DialogHeader>

        {/* 内容区 */}
        <div className="max-h-[65vh] space-y-4 overflow-y-auto px-5 py-4">
          {loading && providers.length === 0 ? (
            <div
              className="flex items-center justify-center gap-2 py-8"
              aria-live="polite"
            >
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              <span className="text-xs text-muted-foreground">加载中…</span>
            </div>
          ) : (
            <>
              <AddProviderForm
                providers={unconfiguredProviders}
                onSaved={() => {
                  void refresh()
                  onChanged?.()
                }}
              />

              {configuredProviders.length > 0 && (
                <div>
                  <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
                    <span>已配置（{configuredProviders.length}）</span>
                    <span className="text-[9px] text-muted-foreground/70">
                      点击行设为默认供应商
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {configuredProviders.map((p) => (
                      <ConfiguredProviderRow
                        key={p.id}
                        provider={p}
                        isDefault={defaultProvider === p.id}
                        onSetDefault={(id) => void setDefault(id)}
                        onChanged={() => {
                          void refresh()
                          onChanged?.()
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* 底部：安全说明 + 刷新 */}
        <div className="flex items-center gap-2 border-t bg-muted/30 px-5 py-2.5">
          <ShieldCheck
            className="h-3 w-3 shrink-0 text-muted-foreground"
            aria-hidden
          />
          <span className="text-[10px] text-muted-foreground">
            API Key 仅存储在本机服务端，不写入数据库、不上传日志
          </span>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => void refresh()}
            disabled={loading}
            aria-label="刷新供应商列表"
            className="ml-auto h-6 w-6 p-0 text-muted-foreground"
          >
            <RefreshCw
              className={cn('h-3 w-3', loading && 'animate-spin')}
              aria-hidden
            />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

/* ---------- 添加供应商表单 ---------- */

function AddProviderForm({
  providers,
  onSaved,
}: {
  providers: ProviderInfo[]
  onSaved: () => void
}) {
  const { toast } = useToast()
  const [selectedId, setSelectedId] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [baseURL, setBaseURL] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [useCustomModel, setUseCustomModel] = useState(false)
  const [customModel, setCustomModel] = useState('')
  const [showKey, setShowKey] = useState(false)
  const [saving, setSaving] = useState(false)
  const [testing, setTesting] = useState(false)
  const [testResult, setTestResult] = useState<{
    ok: boolean
    error?: string
    models?: number
  } | null>(null)

  const selected = providers.find((p) => p.id === selectedId)
  const effectiveModel = useCustomModel
    ? customModel.trim()
    : selectedModel

  // 切换供应商时自动填充 baseURL 与默认模型
  useEffect(() => {
    if (selected) {
      setBaseURL(selected.baseURL)
      setSelectedModel(selected.defaultModel)
      setUseCustomModel(false)
      setCustomModel('')
      setTestResult(null)
    }
  }, [selectedId, selected])

  const grouped = useMemo(() => {
    return GROUP_ORDER.map((g) => ({
      group: g,
      items: providers.filter((p) => p.group === g),
    })).filter((g) => g.items.length > 0)
  }, [providers])

  const resetForm = () => {
    setSelectedId('')
    setApiKey('')
    setBaseURL('')
    setSelectedModel('')
    setCustomModel('')
    setUseCustomModel(false)
    setTestResult(null)
    setShowKey(false)
  }

  const buildSaveBody = () => ({
    providerId: selectedId,
    apiKey: apiKey.trim(),
    baseURL: baseURL.trim() || undefined,
    defaultModel: effectiveModel || undefined,
  })

  const handleSave = async () => {
    if (!selectedId || !apiKey.trim()) return
    if (selected?.customBaseURL && !baseURL.trim()) {
      toast({
        title: '请填写 Base URL',
        description: '自定义接口必须提供服务地址',
        variant: 'destructive',
      })
      return
    }
    setSaving(true)
    try {
      const res = await fetch('/api/assistant/providers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildSaveBody()),
      })
      if (!res.ok) throw new Error('save failed')
      const p = providers.find((x) => x.id === selectedId)
      toast({
        title: '供应商已保存',
        description: p ? `${p.displayName} 配置完成` : undefined,
      })
      resetForm()
      onSaved()
    } catch {
      toast({ title: '保存失败，请重试', variant: 'destructive' })
    } finally {
      setSaving(false)
    }
  }

  const handleTest = async () => {
    if (!selectedId || !apiKey.trim()) return
    if (selected?.customBaseURL && !baseURL.trim()) {
      toast({
        title: '请填写 Base URL',
        description: '自定义接口必须提供服务地址',
        variant: 'destructive',
      })
      return
    }
    setTesting(true)
    setTestResult(null)
    try {
      // 先保存配置，再触发连通性测试
      await fetch('/api/assistant/providers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildSaveBody()),
      })
      const res = await fetch('/api/assistant/providers/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId: selectedId }),
      })
      const data = (await res.json()) as {
        ok: boolean
        error?: string
        models?: number
      }
      setTestResult(data)
      if (data.ok) {
        const p = providers.find((x) => x.id === selectedId)
        toast({
          title: '连接成功',
          description: `${p?.displayName ?? selectedId} API Key 验证通过${
            data.models ? `（发现 ${data.models} 个模型）` : ''
          }`,
        })
        resetForm()
        onSaved()
      }
    } catch (err) {
      setTestResult({
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      })
    } finally {
      setTesting(false)
    }
  }

  if (providers.length === 0) {
    return (
      <div className="rounded-lg border border-dashed bg-muted/30 px-4 py-6 text-center">
        <Check className="mx-auto mb-1.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden />
        <p className="text-xs text-muted-foreground">所有供应商均已配置。</p>
      </div>
    )
  }

  return (
    <div className="space-y-3 rounded-lg border bg-card p-4">
      <div className="flex items-center gap-1.5 text-xs font-medium">
        <Plus className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden />
        添加供应商
      </div>

      {/* 供应商选择（分组下拉） */}
      <div>
        <Label className="mb-1.5 block text-[10px] uppercase tracking-wider text-muted-foreground">
          供应商
        </Label>
        <Select value={selectedId} onValueChange={setSelectedId}>
          <SelectTrigger
            size="sm"
            className="h-8 w-full text-xs"
            aria-label="选择 LLM 供应商"
          >
            <SelectValue placeholder="选择供应商…" />
          </SelectTrigger>
          <SelectContent>
            {grouped.map(({ group, items }) => (
              <SelectGroup key={group}>
                <SelectLabel className="text-[10px]">
                  {GROUP_LABELS[group]}
                </SelectLabel>
                {items.map((p) => (
                  <SelectItem key={p.id} value={p.id} className="text-xs">
                    {p.displayName}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* 选中后展开：Base URL / 模型 / API Key */}
      <AnimatePresence initial={false}>
        {selected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="space-y-3 overflow-hidden"
          >
            {/* Base URL */}
            <div>
              <Label className="mb-1.5 flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                <Globe className="h-2.5 w-2.5" aria-hidden />
                Base URL
              </Label>
              <Input
                type="text"
                value={baseURL}
                onChange={(e) => setBaseURL(e.target.value)}
                placeholder={
                  selected.customBaseURL
                    ? 'https://your-endpoint.example.com/v1'
                    : undefined
                }
                aria-label="API Base URL"
                className="h-8 font-mono text-xs"
              />
              {selected.customBaseURL && (
                <p className="mt-1 text-[10px] text-muted-foreground">
                  需兼容 OpenAI /chat/completions 协议
                </p>
              )}
            </div>

            {/* 默认模型 */}
            <div>
              <Label className="mb-1.5 block text-[10px] uppercase tracking-wider text-muted-foreground">
                默认模型
              </Label>
              {!useCustomModel ? (
                <>
                  <Select
                    value={selectedModel}
                    onValueChange={setSelectedModel}
                  >
                    <SelectTrigger
                      size="sm"
                      className="h-8 w-full text-xs"
                      aria-label="选择默认模型"
                    >
                      <SelectValue placeholder="选择模型…" />
                    </SelectTrigger>
                    <SelectContent>
                      {selected.models.map((m) => (
                        <SelectItem key={m.id} value={m.id} className="text-xs">
                          {m.name}
                          {m.contextWindow
                            ? ` · ${Math.round(m.contextWindow / 1000)}k`
                            : ''}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <button
                    type="button"
                    onClick={() => {
                      setUseCustomModel(true)
                      setCustomModel(selectedModel)
                    }}
                    className="mt-1 text-[10px] text-emerald-700 transition-colors hover:underline dark:text-emerald-400"
                  >
                    + 输入自定义模型 ID…
                  </button>
                </>
              ) : (
                <div className="flex gap-1.5">
                  <Input
                    type="text"
                    value={customModel}
                    onChange={(e) => setCustomModel(e.target.value)}
                    placeholder="输入自定义模型 ID…"
                    aria-label="自定义模型 ID"
                    className="h-8 flex-1 font-mono text-xs"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setUseCustomModel(false)}
                    className="h-8 shrink-0 text-[10px] text-muted-foreground"
                  >
                    列表
                  </Button>
                </div>
              )}
            </div>

            {/* API Key */}
            <div>
              <Label className="mb-1.5 block text-[10px] uppercase tracking-wider text-muted-foreground">
                API Key
              </Label>
              <div className="relative">
                <Input
                  type={showKey ? 'text' : 'password'}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder={`输入 ${selected.displayName} 的 Key…`}
                  aria-label="API Key"
                  autoComplete="off"
                  className="h-8 pr-9 font-mono text-xs"
                />
                <button
                  type="button"
                  onClick={() => setShowKey((v) => !v)}
                  aria-label={showKey ? '隐藏 Key' : '显示 Key'}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showKey ? (
                    <EyeOff className="h-3.5 w-3.5" aria-hidden />
                  ) : (
                    <Eye className="h-3.5 w-3.5" aria-hidden />
                  )}
                </button>
              </div>
            </div>

            {/* 测试结果 */}
            {testResult && (
              <div
                role="status"
                className={cn(
                  'flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[11px]',
                  testResult.ok
                    ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300'
                    : 'border-red-500/30 bg-red-500/5 text-red-700 dark:text-red-300'
                )}
              >
                {testResult.ok ? (
                  <Check className="h-3 w-3 shrink-0" aria-hidden />
                ) : (
                  <AlertCircle className="h-3 w-3 shrink-0" aria-hidden />
                )}
                <span className="break-words">
                  {testResult.ok
                    ? `连接成功${testResult.models ? `，发现 ${testResult.models} 个模型` : ''}！`
                    : (testResult.error ?? '连接失败')}
                </span>
              </div>
            )}

            {/* 操作区 */}
            <div className="flex items-center justify-between gap-2 pt-1">
              <a
                href={selected.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-0.5 text-[10px] text-muted-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
              >
                <ExternalLink className="h-2.5 w-2.5" aria-hidden />
                获取 Key
              </a>
              <div className="flex items-center gap-1.5">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => void handleTest()}
                  disabled={testing || !apiKey.trim()}
                  className="h-7 text-[11px]"
                >
                  {testing ? (
                    <Loader2 className="h-3 w-3 animate-spin" aria-hidden />
                  ) : (
                    <Zap className="h-3 w-3" aria-hidden />
                  )}
                  测试并保存
                </Button>
                <Button
                  size="sm"
                  onClick={() => void handleSave()}
                  disabled={saving || !apiKey.trim()}
                  className="h-7 bg-emerald-600 text-[11px] text-white hover:bg-emerald-700"
                >
                  {saving ? (
                    <Loader2 className="h-3 w-3 animate-spin" aria-hidden />
                  ) : (
                    <Check className="h-3 w-3" aria-hidden />
                  )}
                  保存
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ---------- 已配置供应商行 ---------- */

function ConfiguredProviderRow({
  provider,
  isDefault,
  onSetDefault,
  onChanged,
}: {
  provider: ProviderInfo
  isDefault: boolean
  onSetDefault: (id: string) => Promise<void>
  onChanged: () => void
}) {
  const { toast } = useToast()
  const [deleting, setDeleting] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [editApiKey, setEditApiKey] = useState('')
  const [editBaseURL, setEditBaseURL] = useState('')
  const [editModel, setEditModel] = useState('')
  const [saving, setSaving] = useState(false)
  const [testing, setTesting] = useState(false)
  const [testResult, setTestResult] = useState<{
    ok: boolean
    error?: string
  } | null>(null)

  const handleDelete = async () => {
    setDeleting(true)
    try {
      await fetch(
        `/api/assistant/providers?providerId=${encodeURIComponent(provider.id)}`,
        { method: 'DELETE' }
      )
      toast({ title: `已删除 ${provider.displayName} 的配置` })
      onChanged()
    } catch {
      toast({ title: '删除失败', variant: 'destructive' })
    } finally {
      setDeleting(false)
    }
  }

  const handleExpand = () => {
    if (!expanded) {
      setEditBaseURL(provider.baseURL)
      setEditModel(provider.effectiveModel || provider.defaultModel)
      setEditApiKey('')
      setTestResult(null)
    }
    setExpanded(!expanded)
  }

  const handleSave = async (e: React.MouseEvent) => {
    e.stopPropagation()
    setSaving(true)
    try {
      await fetch('/api/assistant/providers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          providerId: provider.id,
          apiKey: editApiKey.trim() || undefined,
          baseURL: editBaseURL.trim() || undefined,
          defaultModel: editModel.trim() || undefined,
        }),
      })
      toast({ title: `${provider.displayName} 配置已更新` })
      setEditApiKey('')
      setExpanded(false)
      onChanged()
    } catch {
      toast({ title: '保存失败', variant: 'destructive' })
    } finally {
      setSaving(false)
    }
  }

  const handleTest = async (e: React.MouseEvent) => {
    e.stopPropagation()
    // 有未保存编辑时先保存再测试
    if (
      editApiKey.trim() ||
      editBaseURL !== provider.baseURL ||
      editModel !== (provider.effectiveModel || provider.defaultModel)
    ) {
      setSaving(true)
      await fetch('/api/assistant/providers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          providerId: provider.id,
          apiKey: editApiKey.trim() || undefined,
          baseURL: editBaseURL.trim() || undefined,
          defaultModel: editModel.trim() || undefined,
        }),
      })
      setSaving(false)
      setEditApiKey('')
    }
    setTesting(true)
    setTestResult(null)
    try {
      const res = await fetch('/api/assistant/providers/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId: provider.id }),
      })
      const data = (await res.json()) as { ok: boolean; error?: string }
      setTestResult(data)
    } catch (err) {
      setTestResult({
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      })
    } finally {
      setTesting(false)
    }
  }

  return (
    <div
      className={cn(
        'overflow-hidden rounded-md border transition-colors',
        isDefault
          ? 'border-emerald-500/50 bg-emerald-500/5 ring-1 ring-emerald-500/20'
          : provider.available
            ? 'border-emerald-500/25 bg-emerald-500/[0.03]'
            : 'bg-card'
      )}
    >
      {/* 行头：点击设默认 */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => void onSetDefault(provider.id)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            void onSetDefault(provider.id)
          }
        }}
        aria-label={`将 ${provider.displayName} 设为默认供应商`}
        className="flex cursor-pointer items-center gap-2.5 px-3 py-2 transition-colors hover:bg-accent/40"
      >
        {/* 单选指示 */}
        <div
          className={cn(
            'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors',
            isDefault
              ? 'border-emerald-600 dark:border-emerald-400'
              : 'border-muted-foreground/30'
          )}
          aria-hidden
        >
          {isDefault && (
            <div className="h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
          )}
        </div>
        {/* 短标签徽标 */}
        <div
          className={cn(
            'flex h-8 w-8 shrink-0 items-center justify-center rounded text-[10px] font-bold',
            provider.available
              ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400'
              : 'bg-muted text-muted-foreground'
          )}
          aria-hidden
        >
          {provider.label}
        </div>
        {/* 信息 */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="truncate text-xs font-medium">
              {provider.displayName}
            </span>
            {isDefault && (
              <Badge
                variant="outline"
                className="h-4 shrink-0 border-emerald-500/40 bg-emerald-500/10 px-1 text-[9px] text-emerald-700 dark:text-emerald-400"
              >
                默认
              </Badge>
            )}
            {provider.available && !isDefault && (
              <span
                className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                aria-label="已配置"
              />
            )}
          </div>
          <div className="truncate text-[10px] text-muted-foreground">
            {provider.maskedKey && (
              <span className="font-mono">{provider.maskedKey} · </span>
            )}
            <span className="font-mono">
              {provider.effectiveModel || provider.defaultModel || '未设置模型'}
            </span>
          </div>
        </div>
        {/* 展开 / 删除 */}
        {provider.id !== 'zai' && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleExpand()
              }}
              aria-label={expanded ? '收起编辑' : '展开编辑'}
              aria-expanded={expanded}
              className="shrink-0 rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronDown
                className={cn(
                  'h-3.5 w-3.5 transition-transform',
                  expanded && 'rotate-180'
                )}
                aria-hidden
              />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                void handleDelete()
              }}
              disabled={deleting}
              aria-label={`删除 ${provider.displayName} 配置`}
              className="shrink-0 rounded p-1 text-muted-foreground transition-colors hover:text-red-600"
            >
              {deleting ? (
                <Loader2 className="h-3 w-3 animate-spin" aria-hidden />
              ) : (
                <Trash2 className="h-3 w-3" aria-hidden />
              )}
            </button>
          </>
        )}
      </div>

      {/* 展开编辑区 */}
      <AnimatePresence initial={false}>
        {expanded && provider.id !== 'zai' && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden"
          >
            <div className="space-y-2.5 border-t px-3 py-3">
              <div>
                <Label className="mb-1 block text-[10px] uppercase tracking-wider text-muted-foreground">
                  Base URL
                </Label>
                <Input
                  type="text"
                  value={editBaseURL}
                  onChange={(e) => setEditBaseURL(e.target.value)}
                  aria-label="编辑 Base URL"
                  className="h-8 font-mono text-xs"
                />
              </div>
              <div>
                <Label className="mb-1 block text-[10px] uppercase tracking-wider text-muted-foreground">
                  模型 ID
                </Label>
                <Input
                  type="text"
                  value={editModel}
                  onChange={(e) => setEditModel(e.target.value)}
                  aria-label="编辑模型 ID"
                  className="h-8 font-mono text-xs"
                />
              </div>
              <div>
                <Label className="mb-1 block text-[10px] uppercase tracking-wider text-muted-foreground">
                  更新 API Key（留空保持不变）
                </Label>
                <Input
                  type="password"
                  value={editApiKey}
                  onChange={(e) => setEditApiKey(e.target.value)}
                  placeholder="sk-…"
                  aria-label="更新 API Key"
                  autoComplete="off"
                  className="h-8 font-mono text-xs"
                />
              </div>
              {testResult && (
                <div
                  role="status"
                  className={cn(
                    'flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[11px]',
                    testResult.ok
                      ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300'
                      : 'border-red-500/30 bg-red-500/5 text-red-700 dark:text-red-300'
                  )}
                >
                  {testResult.ok ? (
                    <Check className="h-3 w-3 shrink-0" aria-hidden />
                  ) : (
                    <AlertCircle className="h-3 w-3 shrink-0" aria-hidden />
                  )}
                  <span className="break-words">
                    {testResult.ok ? '连接成功！' : (testResult.error ?? '连接失败')}
                  </span>
                </div>
              )}
              <div className="flex justify-end gap-1.5">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => void handleTest(e)}
                  disabled={testing}
                  className="h-7 text-[11px]"
                >
                  {testing ? (
                    <Loader2 className="h-3 w-3 animate-spin" aria-hidden />
                  ) : (
                    <Zap className="h-3 w-3" aria-hidden />
                  )}
                  测试
                </Button>
                <Button
                  size="sm"
                  onClick={(e) => void handleSave(e)}
                  disabled={saving}
                  className="h-7 bg-emerald-600 text-[11px] text-white hover:bg-emerald-700"
                >
                  {saving ? (
                    <Loader2 className="h-3 w-3 animate-spin" aria-hidden />
                  ) : (
                    <Check className="h-3 w-3" aria-hidden />
                  )}
                  保存修改
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
