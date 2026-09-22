'use client'

import { create } from 'zustand'
import type { AppView, SubjectId, ChatMessage } from '@/lib/types'
import { persist } from 'zustand/middleware'

/** 侧边栏导航项 */
export type NavKey =
  | 'dashboard'
  | 'subjects'
  | 'assistant'
  | 'quiz'
  | 'revision'
  | 'wrongbook'
  | 'report'
  | 'glossary'
  | 'gallery'
  | 'notes'

interface AppState {
  /** 当前视图 */
  view: AppView
  /** 视图历史栈（返回上一级用；不持久化） */
  viewHistory: AppView[]
  /** 学科中心内部状态：null=学科列表，否则为选中的学科详情（不持久化，返回时保留） */
  subjectsDetail: SubjectId | null
  /** 最近阅读位置（继续学习） */
  lastRead: {
    subjectId: SubjectId
    chapterId: string
    sectionId: string
    sectionTitle: string
    chapterTitle: string
  } | null
  /** 已完成的小节 id 集合 */
  completedSections: string[]
  /** 全局搜索面板开关 */
  searchOpen: boolean
  /** AI 助教携带的上下文 */
  assistantContext: {
    subjectId?: SubjectId
    chapterId?: string
    sectionId?: string
    sectionTitle?: string
  } | null

  navigate: (view: AppView) => void
  openReader: (subjectId: SubjectId, chapterId: string, sectionId: string) => void
  /** 返回上一级视图（历史栈优先，空则回落逻辑父级） */
  goBack: () => void
  /** 学科中心内部导航：null 回列表；学科 id 进详情并切到 subjects 视图 */
  openSubject: (subjectId: SubjectId | null) => void
  toggleSectionComplete: (sectionId: string) => Promise<void>
  setSearchOpen: (open: boolean) => void
  setAssistantContext: (ctx: AppState['assistantContext']) => void
  hydrateCompleted: () => Promise<void>
}

/** 历史栈上限 */
const HISTORY_CAP = 30

const sameView = (a: AppView, b: AppView) =>
  JSON.stringify(a) === JSON.stringify(b)

/** 视图的逻辑父级（历史栈为空时的回落目标） */
function logicalParent(view: AppView): AppView {
  if (view.name === 'reader' || view.name === 'quiz') {
    return { name: 'subjects' }
  }
  return { name: 'dashboard' }
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      view: { name: 'dashboard' },
      viewHistory: [],
      subjectsDetail: null,
      lastRead: null,
      completedSections: [],
      searchOpen: false,
      assistantContext: null,

      navigate: (view) => {
        const { view: cur, viewHistory } = get()
        if (sameView(cur, view)) {
          // 同视图重复点击：点「学科中心」回到学科列表（等价「返回列表」）
          set(
            view.name === 'subjects'
              ? { subjectsDetail: null, searchOpen: false }
              : { searchOpen: false }
          )
          return
        }
        set({
          view,
          // 主动切到学科中心（侧边栏/按钮）一律回到学科列表；goBack 不经此处，详情得以保留
          subjectsDetail: view.name === 'subjects' ? null : get().subjectsDetail,
          viewHistory: [...viewHistory, cur].slice(-HISTORY_CAP),
          searchOpen: false,
        })
      },

      openSubject: (subjectId) => {
        const { view: cur, viewHistory } = get()
        const already = cur.name === 'subjects'
        set({
          view: { name: 'subjects' },
          subjectsDetail: subjectId,
          viewHistory: already
            ? viewHistory
            : [...viewHistory, cur].slice(-HISTORY_CAP),
          searchOpen: false,
        })
      },

      openReader: (subjectId, chapterId, sectionId) => {
        const subject = subjectsMap[subjectId]
        const chapter = subject?.chapters.find((c) => c.id === chapterId)
        const section = chapter?.sections.find((s) => s.id === sectionId)
        const { view: cur, viewHistory } = get()
        const next: AppView = { name: 'reader', subjectId, chapterId, sectionId }
        // 同为 reader 的相邻跳转（上一节/下一节/目录切换）不压栈
        const history = sameView(cur, next)
          ? viewHistory
          : [...viewHistory, cur].slice(-HISTORY_CAP)
        set({
          view: next,
          viewHistory: history,
          searchOpen: false,
          lastRead: {
            subjectId,
            chapterId,
            sectionId,
            sectionTitle: section?.title ?? '',
            chapterTitle: chapter?.title ?? '',
          },
        })
      },

      goBack: () => {
        const { view, viewHistory } = get()
        const rest = viewHistory.slice(0, -1)
        const target = viewHistory[viewHistory.length - 1] ?? logicalParent(view)
        // 回落目标若与当前视图相同（罕见），再退一级逻辑父级
        const final =
          sameView(target, view) && !sameView(logicalParent(view), view)
            ? logicalParent(view)
            : target
        set({ view: final, viewHistory: rest, searchOpen: false })
      },

      toggleSectionComplete: async (sectionId) => {
        const { completedSections } = get()
        const has = completedSections.includes(sectionId)
        // 找到该小节所属学科
        const subjectId =
          Object.values(subjectsMap).find((s) =>
            s.chapters.some((c) => c.sections.some((sec) => sec.id === sectionId))
          )?.id ?? ''
        // 乐观更新
        set({
          completedSections: has
            ? completedSections.filter((id) => id !== sectionId)
            : [...completedSections, sectionId],
        })
        try {
          const res = await fetch('/api/progress', {
            method: has ? 'DELETE' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sectionId, subjectId }),
          })
          if (!res.ok) throw new Error('failed')
        } catch {
          // 回滚
          set({ completedSections: completedSections })
        }
      },

      setSearchOpen: (open) => set({ searchOpen: open }),

      setAssistantContext: (ctx) => set({ assistantContext: ctx }),

      hydrateCompleted: async () => {
        try {
          const res = await fetch('/api/progress')
          if (!res.ok) return
          const data = await res.json()
          const serverSet = new Set<string>(data.sections ?? [])
          const local = get().completedSections
          // 合并本地与服务端
          const merged = Array.from(new Set([...local, ...serverSet]))
          set({ completedSections: merged })
          // 同步本地新增到服务端
          for (const id of local) {
            if (!serverSet.has(id)) {
              fetch('/api/progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sectionId: id }),
              }).catch(() => {})
            }
          }
        } catch {
          // 离线时忽略
        }
      },
    }),
    {
      name: 'bioscholar-app',
      partialize: (s) => ({
        completedSections: s.completedSections,
        lastRead: s.lastRead,
      }),
    }
  )
)

// 学科映射（避免循环依赖开销，直接引入静态数据）
import { subjects as _subjects } from '@/data/biology'
const subjectsMap = Object.fromEntries(_subjects.map((s) => [s.id, s])) as Record<
  SubjectId,
  (typeof _subjects)[number]
>
