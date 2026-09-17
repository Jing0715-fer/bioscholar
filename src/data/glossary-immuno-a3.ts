// ============================================================
// BioScholar 免疫学术语词典 - 批次 A3（第 8–9 章）
// 5 条（g-171 ~ g-175），subjectId 均为 immunology
// 类别分布：免疫遗传 1 / 抗原提呈 2 / 免疫发育 1 / 免疫调控 1
// 依据：曹雪涛《医学免疫学》（第4版）、周光炎《免疫学原理》、
// Janeway《Immunobiology》
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

// 注：immunology 为本批次新增学科，主体 SubjectId 联合类型尚未收录该 id；
// 此处以双重断言保持本文件类型自洽，待类型联合扩展后可直接改回字面量。
const IMMUNOLOGY = 'immunology' as unknown as GlossaryTerm['subjectId']

export const immunoGlossaryA3: GlossaryTerm[] = [
  {
    id: 'g-171',
    term: '主要组织相容性复合体',
    english: 'major histocompatibility complex',
    abbreviation: 'MHC',
    subjectId: IMMUNOLOGY,
    category: '免疫遗传',
    definition:
      '一组紧密连锁、编码抗原提呈分子的基因群，人类 MHC 即定位于第 6 号染色体短臂 6p21.3 的 HLA 复合体，跨越约 3600 kb，传统分为 I、II、III 类区：经典 I 类基因 HLA-A/B/C 与 II 类基因 DR/DQ/DP 分别编码提呈内源性与外源性抗原肽的分子。其遗传特征包括多基因性、极端多态性（HLA-B 已命名等位基因逾八千个）、共显性表达、单元型遗传与连锁不平衡。生理功能是为 T 细胞提呈抗原肽并参与胸腺选择，同时决定同种移植排斥与众多疾病的遗传易感性。',
  },
  {
    id: 'g-172',
    term: '抗原加工相关转运体',
    english: 'transporter associated with antigen processing',
    abbreviation: 'TAP',
    subjectId: IMMUNOLOGY,
    category: '抗原提呈',
    definition:
      '由 TAP1 与 TAP2 组成的异二聚体跨膜蛋白，属 ATP 结合盒（ABC）转运蛋白超家族，定位于内质网膜，基因居 HLA II 类区内并受 IFN-γ 上调。其功能是把蛋白酶体降解产生的、长度 8–16 个氨基酸且 C 端多为疏水或碱性残基的肽，以 ATP 水解依赖方式从胞浆泵入内质网腔，供新合成的 MHC I 类分子装载，是内源性提呈途径的「关卡」。人类 TAP 先天缺陷者 I 类分子表达锐减并反复呼吸道感染；CMV 的 US6 与 HSV 的 ICP47 均以其为免疫逃逸靶点。',
  },
  {
    id: 'g-173',
    term: '交叉提呈',
    english: 'cross-presentation',
    subjectId: IMMUNOLOGY,
    category: '抗原提呈',
    definition:
      '外源性抗原被抗原提呈细胞摄取后，经 MHC I 类分子提呈给 CD8⁺ T 细胞的过程，打破「内源抗原走 I 类、外源抗原走 II 类」的经典分工，由 Bevan 于 1976 年首先证实。专职执行者为 cDC1 型树突状细胞（人类为 CD141⁺ 亚群），经胞质溶胶途径（抗原逸入胞浆、依赖蛋白酶体与 TAP）与空泡途径（内体腔室内直接装载再循环的 I 类分子、不依赖 TAP）实现。若后果是激活初始 CD8⁺ T 细胞称交叉启动，若导向耐受称交叉耐受；其生理意义覆盖抗病毒 CD8 应答启动、抗肿瘤免疫与外周耐受诱导三大领域。',
  },
  {
    id: 'g-174',
    term: '阳性选择',
    english: 'positive selection',
    subjectId: IMMUNOLOGY,
    category: '免疫发育',
    definition:
      'T 细胞胸腺发育中的第一轮筛选：双阳性（CD4⁺CD8⁺）胸腺细胞若以适当的低亲和力识别皮质上皮细胞（cTEC）提呈的自身肽-自身 MHC 复合物，即获得存活信号；不能识别任何自身肽-MHC 者死于「忽视」。其成果有二：赋予成熟 T 细胞自身 MHC 限制性——日后只在该 MHC 分子框架内识别外来抗原肽；同时伴随 CD4/CD8 谱系定向（识别 I 类走向 CD8⁺、识别 II 类走向 CD4⁺）。与阴性选择共同构成胸腺筛选的一体两面，约为 95% 以上的胸腺细胞凋亡淘汰奠定了第一道关卡。',
  },
  {
    id: 'g-175',
    term: 'T 细胞耗竭',
    english: 'T cell exhaustion',
    subjectId: IMMUNOLOGY,
    category: '免疫调控',
    definition:
      '慢性病毒感染（如 HBV、HCV、HIV）或肿瘤等抗原长期持续刺激下，T 细胞效应功能阶梯式衰退的状态：先是丧失分泌 IL-2 的能力，继而增殖与杀伤衰减，最终存活能力也难以维持；表面以 PD-1 持续高表达为标志，常伴 TIM-3、LAG-3 等其他检查点分子上调，表观遗传与代谢程序使耗竭趋于固化，但 TCF-1⁺「祖耗竭」群体仍可低水平自我更新以维系残存应答。耗竭是慢性抗原压力下的适应亦是病理，抗 PD-1/PD-L1 与抗 CTLA-4 等检查点阻断疗法通过松开「刹车」使其部分逆转，是肿瘤免疫治疗的核心原理（2018 年诺贝尔奖主题）。',
  },
]
