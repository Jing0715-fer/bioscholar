'use client'

import { useEffect } from 'react'
import { useAppStore } from '@/lib/store'
import { AppShell } from '@/components/bio/app-shell'
import { Dashboard } from '@/components/bio/dashboard'
import { SubjectsView } from '@/components/bio/subjects-view'
import { ReaderView } from '@/components/bio/reader-view'
import { QuizView } from '@/components/bio/quiz-view'
import { GlossaryView } from '@/components/bio/glossary-view'
import { GalleryView } from '@/components/bio/gallery-view'
import { NotesView } from '@/components/bio/notes-view'
import { AssistantView } from '@/components/bio/assistant-view'
import { RevisionView } from '@/components/bio/revision-view'
import { WrongbookView } from '@/components/bio/wrongbook-view'
import { ReportView } from '@/components/bio/report-view'
import { SearchDialog } from '@/components/bio/search-dialog'

export default function Home() {
  const view = useAppStore((s) => s.view)
  const hydrate = useAppStore((s) => s.hydrate)
  const hydrated = useAppStore((s) => s.hydrated)

  useEffect(() => {
    if (hydrated) return
    fetch('/api/progress')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.sections)) hydrate(data.sections)
      })
      .catch(() => hydrate([]))
  }, [hydrated, hydrate])

  return (
    <AppShell>
      {view.name === 'dashboard' && <Dashboard />}
      {view.name === 'subjects' && <SubjectsView />}
      {view.name === 'reader' && (
        <ReaderView
          subjectId={view.subjectId}
          chapterId={view.chapterId}
          sectionId={view.sectionId}
        />
      )}
      {view.name === 'quiz' && <QuizView subjectId={view.subjectId} />}
      {view.name === 'glossary' && <GlossaryView />}
      {view.name === 'gallery' && <GalleryView />}
      {view.name === 'notes' && <NotesView />}
      {view.name === 'assistant' && <AssistantView />}
      {view.name === 'revision' && <RevisionView />}
      {view.name === 'wrongbook' && <WrongbookView />}
      {view.name === 'report' && <ReportView />}
      <SearchDialog />
    </AppShell>
  )
}
