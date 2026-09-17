// ============================================================
// BioScholar 生物物理术语词典 - 批次 A2（第 4–6 章）
// 5 条（g-66 ~ g-70），subjectId 均为 biophysics
// 类别分布：分子力学 2 / 荧光光谱 1 / 错误折叠 1 / 相分离 1
// 依据：赵南明/周海梦《生物物理学》、Nelson《Biological Physics》、
// Cantor & Schimmel《Biophysical Chemistry》
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const biophysicsGlossaryA2: GlossaryTerm[] = [
  // ---------- 分子力学（2 条） ----------
  {
    id: 'g-66',
    term: '光镊',
    english: 'optical tweezers',
    subjectId: 'biophysics',
    category: '分子力学',
    definition:
      'Ashkin 于 1970 至 1986 年间建立的激光捕获技术：强激光经高数值孔径物镜聚焦后，梯度力把折射率高于介质的介电微球（约 0.5–2 μm）拉向焦点、散射力沿光轴轻推，二者平衡使微球稳定悬停，成为刚度约 0.01–1 pN/nm 的「皮牛顿弹簧」，配合背焦面干涉检测可达 0.1 pN 的力分辨率与纳米级位移分辨。它是单分子力谱的主力工具：1993 年 Svoboda 与 Block 借此看清驱动蛋白 8 nm 步进，此后用于肌球蛋白做功冲程、RNA 聚合酶转录停顿等研究。Ashkin 因其创建与生物应用获 2018 年诺贝尔物理学奖（另一半授予啁啾放大技术）。',
  },
  {
    id: 'g-67',
    term: '蠕虫链模型',
    english: 'worm-like chain model',
    abbreviation: 'WLC',
    subjectId: 'biophysics',
    category: '分子力学',
    definition:
      '描述半刚性聚合物弹性的标准模型：把链视为连续可弯细棒，以持续长度 p（方向关联衰减的尺度，等于弯曲刚度除以 kBT）刻画刚度——双链 DNA 约 50 nm、单链 DNA 约 1 nm、去折叠肽链约 0.4 nm。Marko 与 Siggia 给出力–伸长关系 F = (kBT/p)[1/(4(1 − x/L)²) − 1/4 + x/L]：低力区退化为高斯链线性响应，高力区随 (1 − x/L) 平方倒数发散，弹性完全来自拉伸牺牲构象熵。WLC 对双链 DNA 精确至约 65 pN 的超伸展转变，也是解读单分子力谱中肌联蛋白锯齿平台与解旋单链的标准拟合语言。',
  },
  // ---------- 荧光光谱（1 条） ----------
  {
    id: 'g-68',
    term: '荧光共振能量转移',
    english: 'Förster resonance energy transfer',
    abbreviation: 'FRET',
    subjectId: 'biophysics',
    category: '荧光光谱',
    definition:
      '供体激发态经偶极–偶极耦合将能量无辐射地传给邻近受体的过程，由 Förster 于 1948 年定量描述：转移速率与距离六次方成反比，效率 E = 1/[1 + (r/R0)⁶]，其中 R0 为效率 50% 的距离（典型 2–7 nm），由供体量子产额、光谱重叠积分、折射率与取向因子决定。因其对 R0 附近距离变化最敏感、有效量程约 1–10 nm，FRET 被称为「纳米量尺」，广泛用于构象变化、受体二聚化、酶底物切割与单分子折叠研究；寿命法（FLIM）不受浓度干扰，是更可靠的读数，取向因子常取动态平均 2/3。',
  },
  // ---------- 错误折叠（1 条） ----------
  {
    id: 'g-69',
    term: '朊蛋白',
    english: 'prion',
    subjectId: 'biophysics',
    category: '错误折叠',
    definition:
      'Prusiner 1982 年命名并纯化的「蛋白质感染颗粒」（proteinaceous infectious particle）：正常膜蛋白 PrPC（人源 253 个残基、GPI 锚定、以 α 螺旋为主）在致病形式 PrPSc（富含 β 片、不溶、抗蛋白酶，核心片段 PrP 27–30）的模板催化下发生构象重排，并以 PrPSc 自身为复制模板——构象信息取代核酸成为遗传载体。由此引发传染性海绵状脑病：羊瘙痒病、牛海绵状脑病与人类的库鲁病、克雅氏病（散发约占 85%、遗传约 10%–15%）、变异型 CJD 等，潜伏期以年计且存在株型与种属屏障。Prusiner 因该假说独享 1997 年诺贝尔生理学或医学奖；酵母 Sup35 的 PSI 表型等证明朊蛋白样机制可作非孟德尔遗传元件。',
  },
  // ---------- 相分离（1 条） ----------
  {
    id: 'g-70',
    term: '液-液相分离',
    english: 'liquid-liquid phase separation',
    abbreviation: 'LLPS',
    subjectId: 'biophysics',
    category: '相分离生物物理',
    definition:
      '生物大分子溶液超过饱和浓度后自发分成稀释相与液态浓相（凝集体）的现象，热力学框架承自 Flory–Huggins 理论：多价吸引相互作用与构象熵损失相互竞争，价数与相互作用越强越易越过双稳线分相。液滴呈球形、可融合、光漂白后内部秒级恢复，是与沉淀及凝胶相区别的判据。驱动分子多为含内在无序区的多价蛋白与 RNA，粘点–间隔模型描述其短寿命弱键网络；翻译后修饰（磷酸化、精氨酸甲基化）可实时重画相图。2009 年 P 颗粒研究确立其作为无膜细胞器（核仁、应激颗粒等）的组织原理；FUS、TDP-43 等突变增强价数并使液滴老化固化为病理聚集体，是 ALS 等疾病的前沿机制，1,6-己二醇等稀释剂为常用研究工具。',
  },
]
