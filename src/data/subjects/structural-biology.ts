// ============================================================
// 结构生物学实验方法 —— 第十大学科
// 体系参照 Scopes《Protein Purification: Principles and Practice》、
// Drenth《Principles of Protein X-ray Crystallography》、
// Frank《Three-Dimensional Electron Microscopy of Macromolecular
// Assemblies》与 Wüthrich《NMR of Proteins and Nucleic Acids》
// 12 章 48 节，各章由内容代理并行编写（见 src/data/subjects/sb/）
// ============================================================
import type { Subject } from '@/lib/types'
import { sbCh1 } from './sb/ch1'
import { sbCh2 } from './sb/ch2'
import { sbCh3 } from './sb/ch3'
import { sbCh4 } from './sb/ch4'
import { sbCh5 } from './sb/ch5'
import { sbCh6 } from './sb/ch6'
import { sbCh7 } from './sb/ch7'
import { sbCh8 } from './sb/ch8'
import { sbCh9 } from './sb/ch9'
import { sbCh10 } from './sb/ch10'
import { sbCh11 } from './sb/ch11'
import { sbCh12 } from './sb/ch12'

export const structuralBiology: Subject = {
  id: 'structural-biology',
  name: '结构生物学实验方法',
  englishName: 'Structural Biology Methods',
  description:
    '从重组蛋白表达系统的选择到亲和、离子交换与分子排阻的多步纯化流程，从结晶相图与成核理论到衍射数据收集，从分子置换与实验定相到模型精修验证，再到冷冻电镜的玻璃化制样、单颗粒三维重构与 NMR 波谱的约束计算，直至 AlphaFold 时代的整合结构生物学，系统讲授从基因到原子结构的完整实验路线。',
  textbook:
    'Scopes《Protein Purification: Principles and Practice》· Drenth《Principles of Protein X-ray Crystallography》· Frank《Three-Dimensional Electron Microscopy of Macromolecular Assemblies》· Wüthrich《NMR of Proteins and Nucleic Acids》',
  color: 'purple',
  icon: 'Boxes',
  chapters: [
    sbCh1,
    sbCh2,
    sbCh3,
    sbCh4,
    sbCh5,
    sbCh6,
    sbCh7,
    sbCh8,
    sbCh9,
    sbCh10,
    sbCh11,
    sbCh12,
  ],
}
