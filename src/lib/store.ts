'use client'

import { create } from 'zustand'
import type { AppView, SubjectId } from './types'

interface AppState {
  /** 当前视图 */
  view: AppView
  /** ⌘K 搜索面板 */
  searchOpen: boolean
  /** 已完成小节集合 */
  completedSections: Set<string>
  /** 是否初始化完成 */
  hydrated: boolean

  setView: (view: AppView) => void
  setSearchOpen: (open: boolean) => void
  hydrate: (completed: string[]) => void
  toggleSection: (sectionId: string) => void
}

export const useAppStore = create<AppState>((set, get) => ({
  view: { name: 'dashboard' },
  searchOpen: false,
  completedSections: new Set<string>(),
  hydrated: false,

  setView: (view) => set({ view }),
  setSearchOpen: (searchOpen) => set({ searchOpen }),
  hydrate: (completed) =>
    set({ completedSections: new Set(completed), hydrated: true }),
  toggleSection: (sectionId) => {
    const next = new Set(get().completedSections)
    if (next.has(sectionId)) next.delete(sectionId)
    else next.add(sectionId)
    set({ completedSections: next })
    // 持久化到后端（失败静默）
    fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sectionId, completed: next.has(sectionId) }),
    }).catch(() => {})
  },
}))
