// ============================================================
// BioScholar X射线晶体学术语词典 · A2 批次（第 4–6 章）
// 5 条（g-300 ~ g-304），subjectId 均为 x-ray-crystallography
// 覆盖：埃瓦尔德反射球、结构因子（ch4）/ 辐射剂量极限（ch5）/
// CC1/2、系统消光（ch6）
// 与 A1 批次（g-295~299：布拉格定律、倒易点阵、空间群、
// 马修斯系数、蒸气扩散结晶法）无重复
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const xrayCrystallographyGlossaryA2: GlossaryTerm[] = [
  {
    id: 'g-300',
    term: '埃瓦尔德反射球',
    english: 'Ewald sphere',
    subjectId: 'x-ray-crystallography',
    category: '晶体学几何',
    definition:
      '把布拉格衍射条件几何化的经典作图，由 P. P. 埃瓦尔德于 1921 年确立：以晶体位置为球心、1/λ 为半径作球，入射波矢 k_in 由球心指向球面，倒易点阵原点取在 k_in 与球面的交点；凡倒易格点落在球面上，散射矢量 s = k_out − k_in 即等于该格矢，衍射沿球心指向格点的方向发生。旋转晶体等价于令倒易点阵扫过球面，这是旋转法逐帧出斑的几何解释；转轴附近天然存在测不到的盲区。波长越短球越大（电子衍射球近平面），晶胞越大格点越密、衍射图越拥挤。',
  },
  {
    id: 'g-301',
    term: '结构因子',
    english: 'structure factor',
    subjectId: 'x-ray-crystallography',
    category: '衍射原理',
    definition:
      '描述晶胞内全部原子对某反射 hkl 相干散射贡献的复数量：F(h) = Σⱼ fⱼ·exp(2πi(h·rⱼ))，其中 fⱼ 为原子散射因子、rⱼ 为分数坐标。模 |F(h)| 给出振幅、辐角给出相位，两者都由原子坐标唯一决定；实测强度只正比于 |F|²，相位在记录过程中天然丢失——晶体学的「相位问题」即由此而生。结构因子与晶胞电子密度互为傅里叶变换对，是连接衍射实验与结构模型的桥梁；系统消光、温度因子衰减与反常散射修正都作用在它身上。',
  },
  {
    id: 'g-302',
    term: '辐射剂量极限',
    english: 'radiation dose limit',
    subjectId: 'x-ray-crystallography',
    category: '辐射损伤',
    definition:
      '蛋白晶体在衍射能力退化为不可用之前可吸收的剂量上限。Henderson 1995 年由电子显微学的辐射化学数据外推，估算出约 2×10⁷ Gy（20 MGy）；Owen 等 2006 年的系统实验表明约 30 MGy 时强度已明显衰减、但电子密度图通常仍可解读，实务警戒线故取 20–30 MGy。剂量以 Gy（J/kg）计量，只计吸收的总能量、与吸收快慢无关（减通量不省剂量）；收数前用 RADDOSE-3D 计算晶体三维剂量分布是现代标准操作，反常与高分辨率数据须留足余量。',
  },
  {
    id: 'g-303',
    term: 'CC1/2',
    english: 'half-set correlation coefficient',
    subjectId: 'x-ray-crystallography',
    category: '数据质量',
    definition:
      'Karplus 与 Diederichs 2012 年提出的数据质量指标：把每个反射的全部测量随机对半分组、各自合并，计算两半强度在分辨率壳层内的相关系数。信号显著时两半互相「认得」（数值高），只剩噪声时趋零；经 CC* = √(2·CC1/2/(1+CC1/2)) 换算，CC1/2 = 0.143 恰对应 CC* = 0.5，故 0.143 成为现代分辨率截断的主判据。它通常比 I/σ 不低于 2 的老惯例更能识别高角壳层的真实信号，与 Rpim、Rmeas 共同构成数据还原的质量指标体系。',
  },
  {
    id: 'g-304',
    term: '系统消光',
    english: 'systematic absence',
    subjectId: 'x-ray-crystallography',
    category: '对称性',
    definition:
      '带心格子与平移型对称元素（螺旋轴、滑移面）使某些反射的结构因子恒为零的现象，与原子坐标无关、只由对称性决定。体心格子 h+k+l 为奇、面心格子 hkl 奇偶混杂、C 底心 h+l 为奇时消光；沿 b 的 2₁ 螺旋轴使 0k0 中 k 为奇者缺席，垂直于 b 的 c 滑移面使 h0l 中 l 为奇者缺席。消光规律是实验判定格子心性与空间群的主要依据，也是识别指标化歧义（如四方晶系 tP 与 tI 之别）的裁决证据；误读「伪消光」则会错选空间群。',
  },
]
