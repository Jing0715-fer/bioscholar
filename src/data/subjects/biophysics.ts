// ============================================================
// 生物物理学 —— 学科聚合
// ============================================================
import type { Subject } from '@/lib/types'
import { bpCh1 } from './bp/ch1'
import { bpCh2 } from './bp/ch2'
import { bpCh3 } from './bp/ch3'
import { bpCh4 } from './bp/ch4'
import { bpCh5 } from './bp/ch5'
import { bpCh6 } from './bp/ch6'
import { bpCh7 } from './bp/ch7'
import { bpCh8 } from './bp/ch8'
import { bpCh9 } from './bp/ch9'
import { bpCh10 } from './bp/ch10'

export const biophysics: Subject = {
  id: 'biophysics',
  name: '生物物理学',
  englishName: 'Biophysics',
  description:
    '从热力学与自由能、生物分子相互作用、膜与离子通道，到分子马达、光谱与折叠、光生物物理、电磁效应、生物成像与量子生物前沿，用物理语言定量描述生命现象。',
  textbook: '赵南明/周海梦《生物物理学》· Nelson《Biological Physics》· Cantor & Schimmel《Biophysical Chemistry》',
  color: 'cyan',
  icon: 'Atom',
  chapters: [
    bpCh1, bpCh2, bpCh3, bpCh4, bpCh5,
    bpCh6, bpCh7, bpCh8, bpCh9, bpCh10,
  ],
}
