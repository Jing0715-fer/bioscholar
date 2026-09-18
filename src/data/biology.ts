// 生物学教材内容数据 - 汇总导出
// 内容体系参照教育部"101计划"生物学核心课程及经典教材

import type { Subject, SubjectId, QuizQuestion, Chapter, Section } from '@/lib/types'
import { countWords } from '@/lib/word-count'
import { biochemistry } from './subjects/biochemistry'
import { molecularBiology } from './subjects/molecular-biology'
import { cellBiology } from './subjects/cell-biology'
import { biophysics } from './subjects/biophysics'
import { microbiology } from './subjects/microbiology'
import { immunology } from './subjects/immunology'
import { neurobiology } from './subjects/neurobiology'
import { bioinformatics } from './subjects/bioinformatics'
import { virology } from './subjects/virology'
import { sectionExpansions } from './expansions'

/**
 * 应用正文扩充层：将 expansions/ 中登记的深度扩充正文替换到对应小节。
 * 未被扩充的小节保持原文，保证任何批次缺失时教材仍然完整。
 */
function withExpansions(subject: Subject): Subject {
  const touched = subject.chapters.some((c) =>
    c.sections.some((s) => sectionExpansions[s.id] !== undefined)
  )
  if (!touched) return subject
  return {
    ...subject,
    chapters: subject.chapters.map((c) => ({
      ...c,
      sections: c.sections.map((s) =>
        sectionExpansions[s.id] !== undefined
          ? { ...s, content: sectionExpansions[s.id] }
          : s
      ),
    })),
  }
}

/** 九大学科 */
export const subjects: Subject[] = [
  biochemistry,
  molecularBiology,
  cellBiology,
  biophysics,
  microbiology,
  immunology,
  neurobiology,
  bioinformatics,
  virology,
].map(withExpansions)

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

// ============================================================
// 字数统计（含扩充层正文，模块加载时一次性计算）
// ============================================================

/** 各小节正文字数（key 为 sectionId） */
export const sectionWordCounts: Record<string, number> = {}
/** 各章正文字数（key 为 chapterId） */
export const chapterWordCounts: Record<string, number> = {}
/** 各学科正文字数（key 为 subjectId） */
export const subjectWordCounts: Record<string, number> = {}

for (const { subject, chapter, section } of allSections()) {
  const w = countWords(section.content)
  sectionWordCounts[section.id] = w
  chapterWordCounts[chapter.id] = (chapterWordCounts[chapter.id] ?? 0) + w
  subjectWordCounts[subject.id] = (subjectWordCounts[subject.id] ?? 0) + w
}

/** 教材字库总字数（全学科合计） */
export const totalWordCount = Object.values(subjectWordCounts).reduce(
  (a, b) => a + b,
  0
)

export function getSectionWordCount(sectionId: string): number {
  return sectionWordCounts[sectionId] ?? 0
}

export function getChapterWordCount(chapterId: string): number {
  return chapterWordCounts[chapterId] ?? 0
}

export function getSubjectWordCount(subjectId: SubjectId): number {
  return subjectWordCounts[subjectId] ?? 0
}

// 测验题汇总
import { biochemistryQuiz } from './quiz/biochemistry'
import { molecularBiologyQuiz } from './quiz/molecular-biology'
import { cellBiologyQuiz } from './quiz/cell-biology'
import { biophysicsQuiz } from './quiz/biophysics'
import { microbiologyQuiz } from './quiz/microbiology'
import { immunologyQuiz } from './quiz/immunology'
import { neurobiologyQuiz } from './quiz/neurobiology'
import { bioinformaticsQuiz } from './quiz/bioinformatics'
import { virologyQuiz } from './quiz/virology'

export const allQuizQuestions: QuizQuestion[] = [
  ...biochemistryQuiz,
  ...molecularBiologyQuiz,
  ...cellBiologyQuiz,
  ...biophysicsQuiz,
  ...microbiologyQuiz,
  ...immunologyQuiz,
  ...neurobiologyQuiz,
  ...bioinformaticsQuiz,
  ...virologyQuiz,
]

export function getQuizBySubject(subjectId: SubjectId): QuizQuestion[] {
  return allQuizQuestions.filter((q) => q.subjectId === subjectId)
}

export function getQuizByChapter(chapterId: string): QuizQuestion[] {
  return allQuizQuestions.filter((q) => q.chapterId === chapterId)
}
