// ============================================================
// 生物信息学 —— 第八大学科
// 体系参照 Pevzner《Bioinformatics Algorithms》、Durbin《Biological Sequence Analysis》
// 12 章 48 节，各章由内容代理并行编写（见 src/data/subjects/bioinfo/）
// ============================================================
import type { Subject } from '@/lib/types'
import { bioinfoCh1 } from './bioinfo/ch1'
import { bioinfoCh2 } from './bioinfo/ch2'
import { bioinfoCh3 } from './bioinfo/ch3'
import { bioinfoCh4 } from './bioinfo/ch4'
import { bioinfoCh5 } from './bioinfo/ch5'
import { bioinfoCh6 } from './bioinfo/ch6'
import { bioinfoCh7 } from './bioinfo/ch7'
import { bioinfoCh8 } from './bioinfo/ch8'
import { bioinfoCh9 } from './bioinfo/ch9'
import { bioinfoCh10 } from './bioinfo/ch10'
import { bioinfoCh11 } from './bioinfo/ch11'
import { bioinfoCh12 } from './bioinfo/ch12'

export const bioinformatics: Subject = {
  id: 'bioinformatics',
  name: '生物信息学',
  englishName: 'Bioinformatics',
  description:
    '从序列数据库、双序列比对、BLAST 到多序列比对与 HMM，从分子系统发生、蛋白质结构预测（AlphaFold）到基因组学、转录组学与单细胞组学，直至网络生物学与 AI 前沿，系统讲授海量生物数据的分析方法论。',
  textbook:
    'Pevzner《Bioinformatics Algorithms》· Durbin《Biological Sequence Analysis》· Mount《Bioinformatics》· 樊龙江《生物信息学》',
  color: 'lime',
  icon: 'Network',
  chapters: [
    bioinfoCh1, bioinfoCh2, bioinfoCh3, bioinfoCh4, bioinfoCh5, bioinfoCh6,
    bioinfoCh7, bioinfoCh8, bioinfoCh9, bioinfoCh10, bioinfoCh11, bioinfoCh12,
  ],
}
