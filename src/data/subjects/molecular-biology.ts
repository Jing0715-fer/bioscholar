// ============================================================
// 分子生物学 —— 学科聚合
// ============================================================
import type { Subject } from '@/lib/types'
import { mbCh1 } from './mb/ch1'
import { mbCh2 } from './mb/ch2'
import { mbCh3 } from './mb/ch3'
import { mbCh4 } from './mb/ch4'
import { mbCh5 } from './mb/ch5'
import { mbCh6 } from './mb/ch6'
import { mbCh7 } from './mb/ch7'
import { mbCh8 } from './mb/ch8'
import { mbCh9 } from './mb/ch9'
import { mbCh10 } from './mb/ch10'
import { mbCh11 } from './mb/ch11'
import { mbCh12 } from './mb/ch12'

export const molecularBiology: Subject = {
  id: 'molecular-biology',
  name: '分子生物学',
  englishName: 'Molecular Biology',
  description:
    '从 DNA 复制、损伤修复、转录翻译到原核与真核基因表达调控，再到分子技术、基因组学与信号转导癌生物学，以中心法则为骨架系统讲授遗传信息的流动与调控。',
  textbook: '朱玉贤《现代分子生物学》（第5版）· Weaver《Molecular Biology》· Watson《Molecular Biology of the Gene》',
  color: 'violet',
  icon: 'Dna',
  chapters: [
    mbCh1, mbCh2, mbCh3, mbCh4, mbCh5, mbCh6,
    mbCh7, mbCh8, mbCh9, mbCh10, mbCh11, mbCh12,
  ],
}
