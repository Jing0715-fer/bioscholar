// ============================================================
// 病毒学 —— 第九大学科
// 体系参照谢天恩/胡志红《普通病毒学》、黄文林《分子病毒学》
// 与 Flint《Principles of Virology》、Fields Virology
// 12 章 48 节，各章由内容代理并行编写（见 src/data/subjects/viro/）
// ============================================================
import type { Subject } from '@/lib/types'
import { viroCh1 } from './viro/ch1'
import { viroCh2 } from './viro/ch2'
import { viroCh3 } from './viro/ch3'
import { viroCh4 } from './viro/ch4'
import { viroCh5 } from './viro/ch5'
import { viroCh6 } from './viro/ch6'
import { viroCh7 } from './viro/ch7'
import { viroCh8 } from './viro/ch8'
import { viroCh9 } from './viro/ch9'
import { viroCh10 } from './viro/ch10'
import { viroCh11 } from './viro/ch11'
import { viroCh12 } from './viro/ch12'

export const virology: Subject = {
  id: 'virology',
  name: '病毒学',
  englishName: 'Virology',
  description:
    '从毒粒的结构对称性与巴尔的摩基因组分类，到吸附侵入、复制转录、装配释放的完整增殖周期，再到病毒与宿主的攻防互作、准种进化与跨种传播，直至疫苗、抗病毒药物与公共卫生防控的现代实践。',
  textbook:
    '谢天恩/胡志红《普通病毒学》· 黄文林《分子病毒学》· Flint《Principles of Virology》· Fields Virology',
  color: 'orange',
  icon: 'Bug',
  chapters: [
    viroCh1,
    viroCh2,
    viroCh3,
    viroCh4,
    viroCh5,
    viroCh6,
    viroCh7,
    viroCh8,
    viroCh9,
    viroCh10,
    viroCh11,
    viroCh12,
  ],
}
