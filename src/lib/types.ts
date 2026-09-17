// ============================================================
// BioScholar 生命科学学习平台 - 核心数据类型定义
// 基于"101计划"生物学核心课程教材体系
// ============================================================

/** 学科 ID */
export type SubjectId =
  | 'biochemistry'
  | 'molecular-biology'
  | 'cell-biology'
  | 'biophysics'
  | 'microbiology'
  | 'immunology'
  | 'neurobiology'
  | 'bioinformatics'

/** 学科 */
export interface Subject {
  id: SubjectId
  name: string
  englishName: string
  /** 学科简介（1-2 句） */
  description: string
  /** 教材依据（编写所参照的经典教材） */
  textbook: string
  /** Tailwind 色彩 token（emerald/amber/violet/rose/cyan/teal 等） */
  color: string
  /** lucide 图标名（组件中映射） */
  icon: string
  chapters: Chapter[]
}

/** 章节 */
export interface Chapter {
  id: string // 格式: {subjectId}-ch{number}
  number: number
  title: string
  /** 章节导言/概述 */
  summary: string
  /** 关键词 */
  keywords: string[]
  sections: Section[]
}

/** 小节（知识点单元） */
export interface Section {
  id: string // 格式: {subjectId}-ch{n}-s{m}
  title: string
  /** Markdown 格式正文（要求教材级还原，含标题层级、表格、化学式、要点） */
  content: string
  /** 本节要点（3-6 条） */
  keyPoints: string[]
  /** 相关术语（供词典联动） */
  terms: string[]
}

/** 测验题型 */
export type QuizType = 'single' | 'multiple' | 'truefalse'

/** 测验题 */
export interface QuizQuestion {
  id: string // 格式: q-{subjectId}-{seq}
  subjectId: SubjectId
  chapterId: string
  type: QuizType
  question: string
  /** 选项（判断题为 ['正确', '错误']） */
  options: string[]
  /** 正确答案索引（单选/判断为单数字，多选为数组） */
  answer: number | number[]
  /** 解析 */
  explanation: string
  /** 难度 1-3 */
  difficulty: 1 | 2 | 3
}

/** 术语词条 */
export interface GlossaryTerm {
  id: string
  term: string
  english: string
  /** 缩写（如 ATP、DNA） */
  abbreviation?: string
  subjectId: SubjectId
  /** 术语类别（如：代谢 / 结构 / 技术） */
  category: string
  definition: string
}

/** 教材插图（配图） */
export interface Illustration {
  /** 图片路径（/images/bio/...） */
  src: string
  /** 学术图注（中文，严谨描述所绘结构/过程） */
  caption: string
  /** 来源标注 */
  credit?: string
}

/** 应用主视图 */
export type AppView =
  | { name: 'dashboard' }
  | { name: 'subjects' }
  | { name: 'reader'; subjectId: SubjectId; chapterId: string; sectionId: string }
  | { name: 'quiz'; subjectId: SubjectId }
  | { name: 'glossary' }
  | { name: 'gallery' }
  | { name: 'notes' }
  | { name: 'assistant' }
  | { name: 'revision' }
  | { name: 'wrongbook' }
  | { name: 'report' }

/** 聊天消息 */
export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  createdAt: string
  /** 关联的学科上下文 */
  context?: {
    subjectId?: SubjectId
    chapterId?: string
    sectionId?: string
    sectionTitle?: string
  }
}
