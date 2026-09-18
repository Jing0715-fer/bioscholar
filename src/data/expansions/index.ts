// ============================================================
// 扩充层：既有学科正文的深度扩充（sectionId → 完整替换正文）
// 批次文件由内容代理并行写入：{subject}-ch{a}-{b}.ts（互不冲突），
// 新批次完成后在下方 import 并展开进 sectionExpansions 即自动生效
// （biology.ts 会在构建 subjects 时应用替换，字数统计随之联动）。
// ============================================================

import { biochemistryCh1To3 } from './biochemistry-ch1-3'
import { biochemistryCh4To6 } from './biochemistry-ch4-6'
import { biochemistryCh7To9 } from './biochemistry-ch7-9'
import { biochemistryCh10To12 } from './biochemistry-ch10-12'
import { molecularBiologyCh1To3 } from './molecular-biology-ch1-3'
import { molecularBiologyCh4To6 } from './molecular-biology-ch4-6'
import { molecularBiologyCh7To9 } from './molecular-biology-ch7-9'
import { molecularBiologyCh10To12 } from './molecular-biology-ch10-12'
import { cellBiologyCh1To3 } from './cell-biology-ch1-3'
import { cellBiologyCh4To6 } from './cell-biology-ch4-6'
import { cellBiologyCh7To9 } from './cell-biology-ch7-9'
import { cellBiologyCh10To12 } from './cell-biology-ch10-12'
import { biophysicsCh1To3 } from './biophysics-ch1-3'
import { biophysicsCh4To6 } from './biophysics-ch4-6'
import { biophysicsCh7To8 } from './biophysics-ch7-8'
import { biophysicsCh9To10 } from './biophysics-ch9-10'

export const sectionExpansions: Record<string, string> = {
  ...biochemistryCh1To3,
  ...biochemistryCh4To6,
  ...biochemistryCh7To9,
  ...biochemistryCh10To12,
  ...molecularBiologyCh1To3,
  ...molecularBiologyCh4To6,
  ...molecularBiologyCh7To9,
  ...molecularBiologyCh10To12,
  ...cellBiologyCh1To3,
  ...cellBiologyCh4To6,
  ...cellBiologyCh7To9,
  ...cellBiologyCh10To12,
  ...biophysicsCh1To3,
  ...biophysicsCh4To6,
  ...biophysicsCh7To8,
  ...biophysicsCh9To10,
}
