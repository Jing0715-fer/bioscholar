import type { QuizQuestion } from './types'
import { immunologyQuiz } from '@/data/quiz/immunology'
import { neurobiologyQuiz } from '@/data/quiz/neurobiology'
import { bioinformaticsQuiz } from '@/data/quiz/bioinformatics'
import { biochemistryQuiz } from '@/data/quiz/biochemistry'
import { molecularBiologyQuiz } from '@/data/quiz/molecular-biology'
import { cellBiologyQuiz } from '@/data/quiz/cell-biology'
import { biophysicsQuiz } from '@/data/quiz/biophysics'
import { microbiologyQuiz } from '@/data/quiz/microbiology'

/** 全学科题库 */
export const allQuizQuestions: QuizQuestion[] = [
  ...biochemistryQuiz,
  ...molecularBiologyQuiz,
  ...cellBiologyQuiz,
  ...biophysicsQuiz,
  ...microbiologyQuiz,
  ...immunologyQuiz,
  ...neurobiologyQuiz,
  ...bioinformaticsQuiz,
]

export function getQuizQuestions(subjectId: string): QuizQuestion[] {
  return allQuizQuestions.filter((q) => q.subjectId === subjectId)
}
