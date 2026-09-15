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
  | 'glossary'
  | 'notes'

interface AppState {
  /** 当前视图 */
  view: AppView
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
  toggleSectionComplete: (sectionId: string) => Promise<void>
  setSearchOpen: (open: boolean) => void
  setAssistantContext: (ctx: AppState['assistantContext']) => void
  hydrateCompleted: () => Promise<void>
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      view: { name: 'dashboard' },
      lastRead: null,
      completedSections: [],
      searchOpen: false,
      assistantContext: null,

      navigate: (view) => set({ view, searchOpen: false }),

      openReader: (subjectId, chapterId, sectionId) => {
        const subject = subjectsMap[subjectId]
        const chapter = subject?.chapters.find((c) => c.id === chapterId)
        const section = chapter?.sections.find((s) => s.id === sectionId)
        set({
          view: { name: 'reader', subjectId, chapterId, sectionId },
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
