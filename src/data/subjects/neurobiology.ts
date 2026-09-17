// ============================================================
// 神经生物学 —— 第七大学科
// 体系参照寿天德《神经生物学》（第3版）、Kandel《Principles of Neural Science》
// 12 章 48 节，各章由内容代理并行编写（见 src/data/subjects/neuro/）
// ============================================================
import type { Subject } from '@/lib/types'
import { neuroCh1 } from './neuro/ch1'
import { neuroCh2 } from './neuro/ch2'
import { neuroCh3 } from './neuro/ch3'
import { neuroCh4 } from './neuro/ch4'
import { neuroCh5 } from './neuro/ch5'
import { neuroCh6 } from './neuro/ch6'
import { neuroCh7 } from './neuro/ch7'
import { neuroCh8 } from './neuro/ch8'
import { neuroCh9 } from './neuro/ch9'
import { neuroCh10 } from './neuro/ch10'
import { neuroCh11 } from './neuro/ch11'
import { neuroCh12 } from './neuro/ch12'

export const neurobiology: Subject = {
  id: 'neurobiology',
  name: '神经生物学',
  englishName: 'Neurobiology',
  description:
    '从静息膜电位、动作电位到突触传递与神经递质，从突触可塑性、学习记忆到感觉与运动系统，直至自主神经、脑发育与神经退行性疾病，以电生理为骨架系统讲授神经系统的结构与功能。',
  textbook:
    '寿天德《神经生物学》（第3版）· 许绍芬《神经生物学》· Kandel《Principles of Neural Science》',
  color: 'teal',
  icon: 'Brain',
  chapters: [
    neuroCh1, neuroCh2, neuroCh3, neuroCh4, neuroCh5, neuroCh6,
    neuroCh7, neuroCh8, neuroCh9, neuroCh10, neuroCh11, neuroCh12,
  ],
}
