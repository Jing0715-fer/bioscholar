// ============================================================
// X射线晶体学 —— 第十一大学科
// 体系参照 Rhodes《Crystallography Made Crystal Clear》、
// Drenth《Principles of Protein X-ray Crystallography》、
// Rupp《Biomolecular Crystallography》与
// Stout & Jensen《X-ray Structure Determination: A Practical Guide》
// 12 章 48 节，各章由内容代理并行编写（见 src/data/subjects/xc/）
// ============================================================
import type { Subject } from '@/lib/types'
import { xcCh1 } from './xc/ch1'
import { xcCh2 } from './xc/ch2'
import { xcCh3 } from './xc/ch3'
import { xcCh4 } from './xc/ch4'
import { xcCh5 } from './xc/ch5'
import { xcCh6 } from './xc/ch6'
import { xcCh7 } from './xc/ch7'
import { xcCh8 } from './xc/ch8'
import { xcCh9 } from './xc/ch9'
import { xcCh10 } from './xc/ch10'
import { xcCh11 } from './xc/ch11'
import { xcCh12 } from './xc/ch12'

export const xrayCrystallography: Subject = {
  id: 'x-ray-crystallography',
  name: 'X射线晶体学',
  englishName: 'X-ray Crystallography',
  description:
    '从劳厄实验与布拉格定律的百年谱系出发，经点阵、晶胞与空间群的几何语言，进入蛋白质晶体生长的相图与成核理论、X射线源与衍射几何、数据收集策略与处理还原，再到相位问题的分子置换与实验定相两路、电子密度图解读与模型搭建、精修与验证的质量闭环，直至串行晶体学、XFEL 与时间分辨的前沿疆界。',
  textbook:
    'Rhodes《Crystallography Made Crystal Clear》· Drenth《Principles of Protein X-ray Crystallography》· Rupp《Biomolecular Crystallography》· Stout & Jensen《X-ray Structure Determination: A Practical Guide》',
  color: 'red',
  icon: 'Gem',
  chapters: [
    xcCh1,
    xcCh2,
    xcCh3,
    xcCh4,
    xcCh5,
    xcCh6,
    xcCh7,
    xcCh8,
    xcCh9,
    xcCh10,
    xcCh11,
    xcCh12,
  ],
}
