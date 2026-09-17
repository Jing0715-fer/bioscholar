// ============================================================
// 生物学教材内容数据 - 汇总导出
// 内容体系参照教育部"101计划"生物学核心课程及经典教材
// ============================================================

import type { Subject, SubjectId, QuizQuestion, Chapter, Section } from '@/lib/types'
import { countWords } from '@/lib/word-count'
import { immunology } from './subjects/immunology'
import { neurobiology } from './subjects/neurobiology'
import { bioinformatics } from './subjects/bioinformatics'
// 旧五学科（重建批次将逐学科取消注释接入）
import { biochemistry } from './subjects/biochemistry'
import { molecularBiology } from './subjects/molecular-biology'
import { cellBiology } from './subjects/cell-biology'
import { biophysics } from './subjects/biophysics'
import { microbiology } from './subjects/microbiology'

/** 八大基础学科 */
export const subjects: Subject[] = [
  biochemistry,
  molecularBiology,
  cellBiology,
  biophysics,
  microbiology,
  immunology,
  neurobiology,
  bioinformatics,
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

// ============================================================
// 字数统计（模块加载时一次性计算）
// ============================================================

/** 各小节正文字数（key 为 sectionId） */
export const sectionWordCounts: Record<string, number> = {}
/** 各章正文字数（key 为 chapterId） */
export const chapterWordCounts: Record<string, number> = {}
/** 各学科正文字数（key 为 subjectId） */
export const subjectWordCounts: Record<string, number> = {}
/** 全书总字数 */
export let totalWordCount = 0

for (const { subject, chapter, section } of allSections()) {
  const w = countWords(section.content)
  sectionWordCounts[section.id] = w
  chapterWordCounts[chapter.id] = (chapterWordCounts[chapter.id] ?? 0) + w
  subjectWordCounts[subject.id] = (subjectWordCounts[subject.id] ?? 0) + w
  totalWordCount += w
}

/** 小节字数 */
export function getSectionWordCount(sectionId: string): number {
  return sectionWordCounts[sectionId] ?? 0
}

/** 章字数 */
export function getChapterWordCount(chapterId: string): number {
  return chapterWordCounts[chapterId] ?? 0
}

/** 学科字数 */
export function getSubjectWordCount(subjectId: SubjectId): number {
  return subjectWordCounts[subjectId] ?? 0
}
