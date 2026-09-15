// 生物学教材内容数据 - 汇总导出
// 内容体系参照教育部"101计划"生物学核心课程及经典教材

import type { Subject, SubjectId, QuizQuestion, Chapter, Section } from '@/lib/types'
import { biochemistry } from './subjects/biochemistry'
import { molecularBiology } from './subjects/molecular-biology'
import { cellBiology } from './subjects/cell-biology'
import { biophysics } from './subjects/biophysics'

/** 四大基础学科 */
export const subjects: Subject[] = [
  biochemistry,
  molecularBiology,
  cellBiology,
  biophysics,
]

export function getSubject(id: SubjectId): Subject | undefined {
  return subjects.find((s) => s.id === id)
}

export function getChapter(
  subjectId: SubjectId,
  chapterId: string
): Chapter | undefined {
  return getSubject(subjectId)?.chapters.find((c) => c.id === chapterId)
}

export function getSection(
  subjectId: SubjectId,
  chapterId: string,
  sectionId: string
): Section | undefined {
  return getChapter(subjectId, chapterId)?.sections.find(
    (s) => s.id === sectionId
  )
}

/** 全部小节平铺（用于进度统计/搜索） */
export function allSections(): Array<{
  subject: Subject
  chapter: Chapter
  section: Section
}> {
  const result: Array<{
    subject: Subject
    chapter: Chapter
    section: Section
  }> = []
  for (const subject of subjects) {
    for (const chapter of subject.chapters) {
      for (const section of chapter.sections) {
        result.push({ subject, chapter, section })
      }
    }
  }
  return result
}

// 测验题汇总
import { biochemistryQuiz } from './quiz/biochemistry'
import { molecularBiologyQuiz } from './quiz/molecular-biology'
import { cellBiologyQuiz } from './quiz/cell-biology'
import { biophysicsQuiz } from './quiz/biophysics'

export const allQuizQuestions: QuizQuestion[] = [
  ...biochemistryQuiz,
  ...molecularBiologyQuiz,
  ...cellBiologyQuiz,
  ...biophysicsQuiz,
]

export function getQuizBySubject(subjectId: SubjectId): QuizQuestion[] {
  return allQuizQuestions.filter((q) => q.subjectId === subjectId)
}

export function getQuizByChapter(chapterId: string): QuizQuestion[] {
  return allQuizQuestions.filter((q) => q.chapterId === chapterId)
}
