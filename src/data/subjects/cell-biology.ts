// ============================================================
// 细胞生物学 —— 学科聚合
// ============================================================
import type { Subject } from '@/lib/types'
import { cbCh1 } from './cb/ch1'
import { cbCh2 } from './cb/ch2'
import { cbCh3 } from './cb/ch3'
import { cbCh4 } from './cb/ch4'
import { cbCh5 } from './cb/ch5'
import { cbCh6 } from './cb/ch6'
import { cbCh7 } from './cb/ch7'
import { cbCh8 } from './cb/ch8'
import { cbCh9 } from './cb/ch9'
import { cbCh10 } from './cb/ch10'
import { cbCh11 } from './cb/ch11'
import { cbCh12 } from './cb/ch12'

export const cellBiology: Subject = {
  id: 'cell-biology',
  name: '细胞生物学',
  englishName: 'Cell Biology',
  description:
    '从细胞膜、内膜系统、线粒体、细胞骨架到细胞核，从信号转导、细胞周期、分化干细胞到衰老死亡与细胞社会，以「细胞是生命活动基本单位」为纲系统讲授细胞的结构与功能。',
  textbook: '翟中和/丁明孝《细胞生物学》（第5版）· Alberts《Molecular Biology of the Cell》',
  color: 'rose',
  icon: 'Microscope',
  chapters: [
    cbCh1, cbCh2, cbCh3, cbCh4, cbCh5, cbCh6,
    cbCh7, cbCh8, cbCh9, cbCh10, cbCh11, cbCh12,
  ],
}
