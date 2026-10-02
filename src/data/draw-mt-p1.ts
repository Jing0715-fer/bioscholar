// ============================================================
// 膜蛋白与物质转运自绘插图挂载 - 批次 P1（第 1 章 4 张，46-c1）
// 生成管线：scripts/draw/scenes/mt/ → bun -e 渲染落盘
//   public/images/bio/drawn/mt-ch1-s{1..4}-*.svg
// 图注数值与 src/data/subjects/mt/ch1.ts 正文严格对齐
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawMtP1: Record<string, Illustration[]> = {
  'membrane-transport-ch1-s1': [
    {
      src: '/images/bio/drawn/mt-ch1-s1-membrane-basics.svg',
      caption:
        '膜脂、膜蛋白与选择性屏障：流动镶嵌模型中 7.5–10 nm 的磷脂双层以约 3 nm 疏水核心封死离子（Na⁺/K⁺ 自发跨膜半衰期以小时乃至天计），O₂/CO₂ 与类固醇近乎自由渗透；膜脂侧向扩散系数约 10⁻⁸ cm²/s，翻转半衰期小时到天，两侧脂质不对称因此维持。动物以胆固醇（占膜脂 30%–50%）、植物以谷甾醇/豆甾醇/菜油甾醇调校流动性；红细胞膜蛋白:脂:糖约 5:4:1，人类基因组 20%–30% 基因编码膜蛋白。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch1-s2': [
    {
      src: '/images/bio/drawn/mt-ch1-s2-transport-thermo.svg',
      caption:
        '转运的热力学：ΔG = RT ln(C₂/C₁) + zFV 合并浓度与电位差（25 ℃ RT/F ≈ 25.7 mV）；Nernst 给出净流为零的平衡电位 E_K ≈ −90、E_Na +60~+67、E_Ca > +125 mV。动物静息电位 −30~−90 mV、植物 −120~−250 mV（H⁺-ATPase 超极化、质外体 pH 5.5、PMF 常超 250–300 mV）；维持 Na⁺/K⁺ 梯度约占静息 ATP 消耗 20%–30%。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch1-s3': [
    {
      src: '/images/bio/drawn/mt-ch1-s3-classification-map.svg',
      caption:
        '三分法与动植物版图：通道 10⁷–10⁸ 离子/s 不饱和，载体 10²–10⁴ 分子/s 米氏饱和，泵水解 ATP 逆梯度。动物约 900 转运基因（SLC/通道各约 400、ABC 48、P 型约 40）；拟南芥逾 1000 个、占 3%–4%（ABC 约 130、NPF 53、AQP 35、AHA/CAX 11）。主引擎：动物发 Na⁺ 币、植物发 H⁺ 币；共有 AQP/ABC/MFS，特化 Nav/Cav 与 HKT/SWEET。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch1-s4': [
    {
      src: '/images/bio/drawn/mt-ch1-s4-methods.svg',
      caption:
        '膜转运研究方法：膜片钳（1976，1991 诺奖）以吉欧级高阻封接测皮安级单通道电流，四种构型分别控制膜两侧溶液；卵母细胞表达克隆拿下 SGLT1（1987）与 AQP1（1992 胀破实验，2003 诺奖），酵母 trk1 trk2 互补送出 AKT1/KAT1；结构接力 KcsA（1998）、SERCA1a（2000）到 cryo-EM（2017 诺奖）解锁 GLUT/SWEET/Piezo；植物侧另有 MIFE、钙成像与拟南芥 SOS 筛选。',
      credit: DRAWN_CREDIT,
    },
  ],
}
