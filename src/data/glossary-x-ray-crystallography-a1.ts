// ============================================================
// BioScholar X射线晶体学术语词典 · A1 批次（第 1–3 章）
// 5 条（g-295 ~ g-299），subjectId 均为 x-ray-crystallography
// 覆盖：布拉格定律（ch1）/ 倒易点阵、空间群、马修斯系数（ch2）/ 蒸气扩散法（ch3）
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const xrayCrystallographyGlossaryA1: GlossaryTerm[] = [
  {
    id: 'g-295',
    term: '布拉格定律',
    english: "Bragg's law",
    subjectId: 'x-ray-crystallography',
    category: '衍射原理',
    definition:
      'X射线晶体学的核心几何关系，由 W.L. 布拉格于 1912–1913 年导出：把衍射视为晶面族（间距 d、Miller 指数 hkl）对X射线的镜面反射，相长干涉要求相邻两面反射线的程差为波长整数倍，即 2d sinθ = nλ（工程口径常把 n 并入指数约化为 2d sinθ = λ）。它把「测量衍射斑点位置」翻译为「测量晶面间距」，是劳厄斑几何的等价重构；布拉格父子因X射线结构分析共享 1915 年诺贝尔物理学奖。该定律与倒易点阵、Ewald 球一起构成第 4 章衍射几何的基石。',
  },
  {
    id: 'g-296',
    term: '倒易点阵',
    english: 'reciprocal lattice',
    subjectId: 'x-ray-crystallography',
    category: '晶体学几何',
    definition:
      '与正空间点阵对偶的数学构造：由基矢 b₁ = a₂×a₃/V、b₂ = a₃×a₁/V、b₃ = a₁×a₂/V（V 为晶胞体积）张成的点阵。正空间的 (hkl) 晶面族在倒易空间对应一个格点 h b₁ + k b₂ + l b₃，其到原点的距离恰为 d* = 1/d（晶体学惯例不含 2π 因子）；两套晶胞体积互为倒数（V* = 1/V）。衍射条件在倒易空间获得极简的几何表述（Ewald 球），数据处理软件逐条处理的「反射指标」即倒易格点坐标——它是连接晶体几何与衍射实验的通用语言。',
  },
  {
    id: 'g-297',
    term: '空间群',
    english: 'space group',
    subjectId: 'x-ray-crystallography',
    category: '对称性',
    definition:
      '晶体全部对称操作（平移、旋转、螺旋轴、滑移面、反演及其复合）的集合，共 230 种，由舍恩夫利斯、费奥多罗夫与巴洛于 1890–1894 年间独立推导完成。任一周期晶体必属于且仅属于一种空间群；其判定是结构解析的第一道手续，实验依据为 Laue 对称与系统消光。记号体系以 Hermann–Mauguin 为主（如 P2₁2₁2₁ 表示三根互相垂直的 2₁ 螺旋轴）。生物大分子为手性分子，只能出现在不含镜面、滑移面与反演的 65 个 Sohncke 手性空间群中。',
  },
  {
    id: 'g-298',
    term: '马修斯系数',
    english: 'Matthews coefficient',
    abbreviation: 'VM',
    subjectId: 'x-ray-crystallography',
    category: '晶体性质',
    definition:
      '表征蛋白质晶体「疏松程度」的参数，由马修斯 1968 年统计提出：VM = Vcell/(MW·Z)，其中 Vcell 为晶胞体积（Å³）、MW 为分子量（Da）、Z 为每个晶胞内的分子总数。典型范围为 1.7–3.5 Å³/Da，对应溶剂含量 27–65%、典型约 50%——晶体体积的一半为液态母液，这解释了蛋白晶体的脆弱性、怕干燥性与可浸泡性。VM 明显偏离区间常用作判断 Z 出错（过低）或结晶对象为碎片/寡聚体误判（过高）的第一线索。',
  },
  {
    id: 'g-299',
    term: '蒸气扩散结晶法',
    english: 'vapor diffusion crystallization',
    subjectId: 'x-ray-crystallography',
    category: '结晶技术',
    definition:
      '蛋白质结晶最常用的实验方法，分悬滴（24 孔板，1–2 μL 液滴悬于 0.5–1 mL 池液上方）与坐滴（96 孔板，0.2–1 μL）两种形式。原理是水的化学势平衡：池液沉淀剂浓度更高、水活度更低，水分子从液滴经气相迁入池液，液滴被缓慢浓缩，在相图上走出「先穿成核区、后回落亚稳区」的轨迹，天然契合「成核要快、生长要慢」的动力学要求；油封配比可调节速率。坐滴格式与移液机器人匹配，是现代高通量筛选的主流载体。',
  },
]
