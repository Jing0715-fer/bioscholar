// ============================================================
// BioScholar 结构生物学术语词典 · 批次 A3（第 7–9 章）
// 5 条（g-285 ~ g-289），subjectId 均为 structural-biology
// 与 A1/A2 批次（g-275 ~ g-284）无重复
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const structuralBiologyGlossaryA3: GlossaryTerm[] = [
  {
    id: 'g-285',
    term: 'Patterson 函数',
    english: 'Patterson function',
    subjectId: 'structural-biology',
    category: '结构解析',
    definition:
      '以强度 |F|² 为系数的傅里叶级数（Patterson 于 1934 年提出），无需任何相位即可从衍射数据直接计算。几何意义为原子间向量图：晶胞内每对原子在差向量处升起高度正比于两者电子数之积的峰，N 个原子共 N(N−1) 个非原点峰。它既是分子置换的数学入口（分子内向量不随平移改变，支撑旋转与平移两步搜索），也以差值 Patterson 的形式用振幅差定位重原子亚结构，是实验定相的第一块跳板。',
  },
  {
    id: 'g-286',
    term: '溶剂平坦化',
    english: 'solvent flattening',
    subjectId: 'structural-biology',
    category: '相位改进',
    definition:
      'Wang 于 1985 年提出的密度修饰方法：蛋白晶体的溶剂含量通常为 40–60%，溶剂区密度本应是平缓常数、实为相位噪声的狂欢；以约 8–10 Å 的 Wang 半径滑动平均划分蛋白区与溶剂区，把溶剂区密度一律压平到均值，再经傅里叶变换回收相位，迭代 5–20 轮至收敛。与直方图匹配、非晶对称平均交替执行，把初始相位误差收窄至可建模水平；溶剂含量本身可在 30–65% 区间扫描优化，是实验定相后的标准工序。',
  },
  {
    id: 'g-287',
    term: 'R 自由因子',
    english: 'free R-factor',
    abbreviation: 'Rfree',
    subjectId: 'structural-biology',
    category: '模型验证',
    definition:
      'Brünger 于 1992 年提出的交叉验证指标：从衍射数据随机剥离约 5% 反射组成自由集，精修全程（含人工重建）对其不可见、不进目标函数，结束时仅在自由集上计算的 R 因子。模型真正改善时 Rfree 才下降，参数拟合噪声时它按兵不动甚至回升，是识别过拟合与无效水的制度性防线；2 Å 数据的健康区间约 0.22–0.26，与 Rwork 之差 2–5% 为宜、大于 7% 即过拟合警告，自由集一经划定全程不得重划。',
  },
  {
    id: 'g-288',
    term: '衬度传递函数',
    english: 'contrast transfer function',
    abbreviation: 'CTF',
    subjectId: 'structural-biology',
    category: '成像原理',
    definition:
      '描述电镜光学系统对各空间频率传递效率的函数：相位衬度成像中近似为 sin(χ)，χ 由离焦量、球差与电子波长共同决定，在频率轴上周期性过零——零点处信息整段缺失，深离焦衬度强但零点向低频移动。多档离焦（−0.5 至 −3 μm）互补收集与事后 CTF 校正由此成为必需：300 kV 下 −1.5 μm 与 −2.5 μm 的第一零点分别约在 17 Å 与 22 Å，两档合并互相补上对方失明的频段。',
  },
  {
    id: 'g-289',
    term: '玻璃化',
    english: 'vitrification',
    subjectId: 'structural-biology',
    category: '冷冻制样',
    definition:
      'Dubochet 与同事于 1982 年建立的冷冻制样技术（与低温成像理论、图像处理方法同获 2017 年诺贝尔化学奖）：把载网上的薄水膜快速浸入液氮预冷至约 90 K 的液态乙烷浆料，冷却速率超过 10⁵ K/s，水分子来不及成核排列、直接凝固为无定形玻璃态冰，蛋白在原位保持水合结构。液氮因 Leidenfrost 气膜效应致传热骤降而不能直接使用；玻璃化是冷冻电镜样品制备的核心工序，其成败直接决定下游数据质量。',
  },
]
