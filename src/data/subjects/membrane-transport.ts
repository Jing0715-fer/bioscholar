// ============================================================
// 膜蛋白与物质转运 —— 第十四大学科
// 体系参照 Stein & Litton《Channels, Carriers, and Pumps》第2版、
// Alberts《Molecular Biology of the Cell》第7版、Taiz & Zeiger
// 《Plant Physiology》第6版、Guyton & Hall《Textbook of Medical
// Physiology》第14版
// 12 章 48 节，由内容代理并行编写（见 src/data/subjects/mt/）
// 学科特色：以动物与植物转运蛋白的分类异同为经纬，
// 对照动物 Na⁺ 循环与植物 H⁺ 循环两大主引擎
// ============================================================
import type { Subject } from '@/lib/types'
import { mtCh1 } from './mt/ch1'
import { mtCh2 } from './mt/ch2'
import { mtCh3 } from './mt/ch3'
import { mtCh4 } from './mt/ch4'
import { mtCh5 } from './mt/ch5'
import { mtCh6 } from './mt/ch6'
import { mtCh7 } from './mt/ch7'
import { mtCh8 } from './mt/ch8'
import { mtCh9 } from './mt/ch9'
import { mtCh10 } from './mt/ch10'
import { mtCh11 } from './mt/ch11'
import { mtCh12 } from './mt/ch12'

export const membraneTransport: Subject = {
  id: 'membrane-transport',
  name: '膜蛋白与物质转运',
  englishName: 'Membrane Proteins & Transport',
  description:
    '以「通道—载体—泵」三分框架系统讲授跨膜转运：从膜脂双层的选择性屏障与转运热力学出发，依次深潜离子通道与门控、钾通道与水通道、载体与易化扩散、P 型/V 型/F 型三类 ATP 驱动泵、次级协同转运与 ABC 外排泵，直至钙与金属转运、特化上皮与气孔保卫细胞、通道病与植物逆境转运——全书以动物与植物转运蛋白的分类异同为经纬，对照动物 Na⁺ 循环与植物 H⁺ 循环两大主引擎，逐家族梳理两界的共有与独有、保守与扩张。',
  textbook:
    'Stein & Litton《Channels, Carriers, and Pumps》第2版 · Alberts《Molecular Biology of the Cell》第7版 · Taiz & Zeiger《Plant Physiology》第6版 · Guyton & Hall《Textbook of Medical Physiology》第14版',
  color: 'green',
  icon: 'ArrowLeftRight',
  chapters: [
    mtCh1,
    mtCh2,
    mtCh3,
    mtCh4,
    mtCh5,
    mtCh6,
    mtCh7,
    mtCh8,
    mtCh9,
    mtCh10,
    mtCh11,
    mtCh12,
  ],
}
