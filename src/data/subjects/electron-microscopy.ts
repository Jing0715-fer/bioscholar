// ============================================================
// 电子显微学 —— 第十二大学科
// 体系参照 Frank《Three-Dimensional Electron Microscopy of
// Macromolecular Assemblies》、Reimer & Kohl《Transmission Electron
// Microscopy: Physics of Image Formation》、Williams & Carter
// 《Transmission Electron Microscopy》与 Bozzola & Russell
// 《Electron Microscopy: Principles and Techniques for Biologists》
// 12 章 48 节，各章由内容代理并行编写（见 src/data/subjects/em/）
// ============================================================
import type { Subject } from '@/lib/types'
import { emCh1 } from './em/ch1'
import { emCh2 } from './em/ch2'
import { emCh3 } from './em/ch3'
import { emCh4 } from './em/ch4'
import { emCh5 } from './em/ch5'
import { emCh6 } from './em/ch6'
import { emCh7 } from './em/ch7'
import { emCh8 } from './em/ch8'
import { emCh9 } from './em/ch9'
import { emCh10 } from './em/ch10'
import { emCh11 } from './em/ch11'
import { emCh12 } from './em/ch12'

export const electronMicroscopy: Subject = {
  id: 'electron-microscopy',
  name: '电子显微学',
  englishName: 'Electron Microscopy',
  description:
    '从 Ruska 电子显微镜的诞生与电子光学基础讲起，经相位衬度成像理论、电子与样品相互作用及辐射损伤物理，进入负染与超微结构制样、玻璃化冷冻与载网制备，再到单颗粒分析的中心截面定理与数据处理流水线、电子断层扫描的原位成像、电子晶体学与 MicroED、扫描电镜的信号世界，直至分辨率革命、相位板、人工智能与原位结构生物学的前沿整合。',
  textbook:
    'Frank《Three-Dimensional Electron Microscopy of Macromolecular Assemblies》· Reimer & Kohl《Transmission Electron Microscopy》· Williams & Carter《Transmission Electron Microscopy》· Bozzola & Russell《Electron Microscopy》',
  color: 'stone',
  icon: 'Aperture',
  chapters: [
    emCh1,
    emCh2,
    emCh3,
    emCh4,
    emCh5,
    emCh6,
    emCh7,
    emCh8,
    emCh9,
    emCh10,
    emCh11,
    emCh12,
  ],
}
