import type { SubjectId } from '@/lib/types'
import type { LucideIcon } from 'lucide-react'
import {
  FlaskConical,
  Dna,
  Microscope,
  Atom,
  Biohazard,
  Shield,
  Brain,
  Network,
} from 'lucide-react'

/** 学科主题色映射（Tailwind 类名） */
export const subjectThemes: Record<
  SubjectId,
  {
    icon: LucideIcon
    classes: {
      bg: string
      bgSoft: string
      text: string
      border: string
      ring: string
      gradient: string
      badge: string
      hover: string
    }
    colorName: string
  }
> = {
  biochemistry: {
    icon: FlaskConical,
    classes: {
      bg: 'bg-amber-600 text-white',
      bgSoft: 'bg-amber-500/10',
      text: 'text-amber-700 dark:text-amber-400',
      border: 'border-amber-500/40',
      ring: 'ring-amber-500/30',
      gradient: 'from-amber-500/90 to-orange-600/90',
      badge: 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30',
      hover: 'hover:border-amber-500/60 hover:shadow-amber-500/10',
    },
    colorName: '琥珀',
  },
  'molecular-biology': {
    icon: Dna,
    classes: {
      bg: 'bg-violet-600 text-white',
      bgSoft: 'bg-violet-500/10',
      text: 'text-violet-700 dark:text-violet-400',
      border: 'border-violet-500/40',
      ring: 'ring-violet-500/30',
      gradient: 'from-violet-500/90 to-purple-600/90',
      badge: 'bg-violet-500/15 text-violet-700 dark:text-violet-400 border-violet-500/30',
      hover: 'hover:border-violet-500/60 hover:shadow-violet-500/10',
    },
    colorName: '紫晶',
  },
  'cell-biology': {
    icon: Microscope,
    classes: {
      bg: 'bg-rose-600 text-white',
      bgSoft: 'bg-rose-500/10',
      text: 'text-rose-700 dark:text-rose-400',
      border: 'border-rose-500/40',
      ring: 'ring-rose-500/30',
      gradient: 'from-rose-500/90 to-pink-600/90',
      badge: 'bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30',
      hover: 'hover:border-rose-500/60 hover:shadow-rose-500/10',
    },
    colorName: '绯红',
  },
  biophysics: {
    icon: Atom,
    classes: {
      bg: 'bg-cyan-600 text-white',
      bgSoft: 'bg-cyan-500/10',
      text: 'text-cyan-700 dark:text-cyan-400',
      border: 'border-cyan-500/40',
      ring: 'ring-cyan-500/30',
      gradient: 'from-cyan-500/90 to-teal-600/90',
      badge: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border-cyan-500/30',
      hover: 'hover:border-cyan-500/60 hover:shadow-cyan-500/10',
    },
    colorName: '青碧',
  },
  microbiology: {
    icon: Biohazard,
    classes: {
      bg: 'bg-emerald-600 text-white',
      bgSoft: 'bg-emerald-500/10',
      text: 'text-emerald-700 dark:text-emerald-400',
      border: 'border-emerald-500/40',
      ring: 'ring-emerald-500/30',
      gradient: 'from-emerald-500/90 to-green-600/90',
      badge: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
      hover: 'hover:border-emerald-500/60 hover:shadow-emerald-500/10',
    },
    colorName: '翠微',
  },
  immunology: {
    icon: Shield,
    classes: {
      bg: 'bg-fuchsia-600 text-white',
      bgSoft: 'bg-fuchsia-500/10',
      text: 'text-fuchsia-700 dark:text-fuchsia-400',
      border: 'border-fuchsia-500/40',
      ring: 'ring-fuchsia-500/30',
      gradient: 'from-fuchsia-500/90 to-pink-600/90',
      badge: 'bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-400 border-fuchsia-500/30',
      hover: 'hover:border-fuchsia-500/60 hover:shadow-fuchsia-500/10',
    },
    colorName: '胭紫',
  },
  neurobiology: {
    icon: Brain,
    classes: {
      bg: 'bg-teal-600 text-white',
      bgSoft: 'bg-teal-500/10',
      text: 'text-teal-700 dark:text-teal-400',
      border: 'border-teal-500/40',
      ring: 'ring-teal-500/30',
      gradient: 'from-teal-500/90 to-emerald-600/90',
      badge: 'bg-teal-500/15 text-teal-700 dark:text-teal-400 border-teal-500/30',
      hover: 'hover:border-teal-500/60 hover:shadow-teal-500/10',
    },
    colorName: '黛青',
  },
  bioinformatics: {
    icon: Network,
    classes: {
      bg: 'bg-lime-600 text-white',
      bgSoft: 'bg-lime-500/10',
      text: 'text-lime-700 dark:text-lime-400',
      border: 'border-lime-500/40',
      ring: 'ring-lime-500/30',
      gradient: 'from-lime-500/90 to-green-600/90',
      badge: 'bg-lime-500/15 text-lime-700 dark:text-lime-400 border-lime-500/30',
      hover: 'hover:border-lime-500/60 hover:shadow-lime-500/10',
    },
    colorName: '青柠',
  },
}

export function getSubjectTheme(id: SubjectId) {
  return subjectThemes[id]
}
