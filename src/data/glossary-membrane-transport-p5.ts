// ============================================================
// 膜蛋白与物质转运术语词典 - 批次 P5（10 条，g-435 ~ g-444）
// 由内容代理 46-b5 编写，subjectId 均为 membrane-transport
// 类别分布：转运蛋白 3 / 结构 1 / 农业应用 1 / 信号转导 1 / 调节 1 / 植物营养 1 / 植物逆境 1 / 金属稳态 1
// 依据：Stein & Litton《Channels, Carriers, and Pumps》第2版、Alberts《Molecular Biology of the Cell》第7版、
// Taiz & Zeiger《Plant Physiology》第6版及本学科第 9–10 章教材正文
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const membraneTransportGlossaryP5: GlossaryTerm[] = [
  // ---------- 转运蛋白（3 条） ----------
  {
    id: 'g-435',
    term: 'ABC 转运体',
    english: 'ATP-binding cassette transporter',
    subjectId: 'membrane-transport',
    category: '转运蛋白',
    definition:
      '以 ATP 结合与水解为能量的一级主动转运超家族，核心模块为 2 个跨膜结构域（各约 6 条跨膜螺旋）加 2 个核苷酸结合域（NBD）。两个 NBD 面对面二聚成「三明治」夹住两分子 ATP，Walker A/P 环与对侧 LSGGQ 签名基序互嵌，按结合、二聚化、水解、解离的循环驱动交替通路。人类基因组编码约 48 个 ABC 基因（ABCA–ABCG 七亚族），拟南芥约 130 个（ABCA–ABCI）；每转运一分子底物约消耗 2 分子 ATP。',
  },
  {
    id: 'g-436',
    term: 'P-糖蛋白',
    english: 'P-glycoprotein',
    subjectId: 'membrane-transport',
    category: '转运蛋白',
    definition:
      '即 ABCB1（又称 MDR1），1976 年 Juliano 与 Ling 在中国仓鼠秋水仙素抗性细胞膜上发现的第一个 ABC 转运体，约 170 kDa。外排地高辛、长春碱、罗丹明等疏水阳离子，底物从膜的胞质小叶「舀」出后甩向胞外；高表达于血脑屏障、肠上皮、肾小管与胎盘，构成药物屏障；维拉帕米为其经典抑制剂。肿瘤化疗压力下高表达 P-gp，使多种结构无关的药物同时失效，即多药耐药表型。',
  },
  {
    id: 'g-437',
    term: '囊性纤维化跨膜电导调节因子',
    english: 'cystic fibrosis transmembrane conductance regulator',
    subjectId: 'membrane-transport',
    category: '转运蛋白',
    definition:
      '即 CFTR（ABCC7），目前已知唯一演化为离子通道的 ABC 家族成员，在上皮顶膜导通 Cl⁻ 与 HCO₃⁻。门控需要 R 域经 cAMP-PKA 多位点磷酸化「松绑」后、再由 ATP 驱动 NBD 二聚化开门；ΔF508 突变（NBD1 第 508 位苯丙氨酸缺失，约占异常等位基因七成）造成折叠缺陷，被内质网 ERAD 途径降解，是囊性纤维化的分子根源；伊瓦卡福特类增效剂与矫正剂是机制补丁式的治疗。',
  },
  // ---------- 结构（1 条） ----------
  {
    id: 'g-438',
    term: '核苷酸结合域',
    english: 'nucleotide-binding domain',
    subjectId: 'membrane-transport',
    category: '结构',
    definition:
      'ABC 转运体的催化模块，也是全家族序列最保守的部分，集结 Walker A（P 环，抓 ATP 磷酸基）、Walker B（配位 Mg²⁺）、Q 环、H 环与家族独有的 LSGGQ 签名基序。单个 NBD 不具完整催化腔，只有两个 NBD 面对面二聚、像三明治一样夹住两分子 ATP（γ 磷酸抵住对侧签名基序）才拼齐催化要素；二聚体的开合经耦联螺旋传动给 TMD，实现交替通路。',
  },
  // ---------- 农业应用（1 条） ----------
  {
    id: 'g-439',
    term: '安全剂',
    english: 'safener',
    subjectId: 'membrane-transport',
    category: '农业应用',
    definition:
      '选择性提高作物除草剂耐受的农用化合物：先施安全剂诱导玉米、小麦等作物高表达液泡膜 ABCC 转运体、谷胱甘肽 S-转移酶与细胞色素 P450，使谷胱甘肽偶联的除草剂代谢物被隔离进液泡；杂草未获同等诱导，随后的除草剂施药便形成选择性杀伤。同一田里「开大作物的 ABC、关小杂草的生存」，是转运蛋白知识直接转化为农艺的教科书案例。',
  },
  // ---------- 信号转导（1 条） ----------
  {
    id: 'g-440',
    term: '库容操控钙内流',
    english: 'store-operated calcium entry',
    subjectId: 'membrane-transport',
    category: '信号转导',
    definition:
      '动物细胞在钙库耗竭后经 CRAC 通道补钙的机制：内质网膜上的 STIM1 感受腔内钙浓度下降后聚合并迁移到质膜下方，扣住孔道蛋白 Orai1 使其开门，形成持续的内向 Ca²⁺ 电流为钙库回充。T 细胞活化高度依赖这条进水通路，Orai1 或 STIM1 的基因缺陷造成重症联合免疫缺陷，是「通道缺陷即免疫缺陷」的经典案例。',
  },
  // ---------- 调节（1 条） ----------
  {
    id: 'g-441',
    term: '铁调蛋白',
    english: 'hepcidin',
    subjectId: 'membrane-transport',
    category: '调节',
    definition:
      '肝脏合成的铁稳态总开关激素，成熟肽为 25 个氨基酸。与靶细胞 ferroportin 的胞外环结合并促其泛素化、内吞与降解，从而关闭肠上皮与巨噬细胞的铁出口、降低血清铁；其转录经 BMP/SMAD 通路受铁储备与炎症双向调节。HFE 遗传血色病因 hepcidin 不足致铁过载，慢性病贫血因 hepcidin 升高致「有库存却用不了」的功能性缺铁。',
  },
  // ---------- 植物营养（1 条） ----------
  {
    id: 'g-442',
    term: '麦根酸类植物铁载体',
    english: 'phytosiderophore',
    subjectId: 'membrane-transport',
    category: '植物营养',
    definition:
      '禾草类植物「策略 II」取铁的小分子螯合剂，从蛋氨酸经烟酰胺途径合成、由根尖的 TOM1 蛋白清晨集中外排，对 Fe³⁺ 亲和力极高。它在石灰性碱性土壤中把不溶性铁螯合成可溶的 Fe(III)-PS 复合物，再由 YS1/YSL 转运体整分子摄入根细胞；分泌量随缺铁加剧而增加，且禾草间分泌量与耐性排序一致（大麦高、水稻低），水稻则兼用策略 I 与 II。',
  },
  // ---------- 植物逆境（1 条） ----------
  {
    id: 'g-443',
    term: '植物螯合肽',
    english: 'phytochelatin',
    subjectId: 'membrane-transport',
    category: '植物逆境',
    definition:
      '骨架为 (γ-Glu-Cys)n-Gly（n 约 2–11）的重金属螯合小肽，由植物螯合肽合酶（PCS）被镉、砷与谷胱甘肽的复合物变构激活后酶法合成——γ 肽键不能由核糖体编码，只能「遇毒现做」。PC 把 Cd²⁺ 与 As(III) 抱成 PC-Cd、PC-As 复合物，经液泡膜 ABCC1/2 转运入液泡隔离；同一方案在裂殖酵母中由 HMT1 执行，是深度保守的解毒组合。',
  },
  // ---------- 金属稳态（1 条） ----------
  {
    id: 'g-444',
    term: '金属硫蛋白',
    english: 'metallothionein',
    subjectId: 'membrane-transport',
    category: '金属稳态',
    definition:
      '富含半胱氨酸的小分子金属结合蛋白：哺乳动物 MT-1/MT-2 约 61–62 个氨基酸、含约 20 个半胱氨酸，一分子可结合 7 个 Cd²⁺ 或 Zn²⁺，是肝肾重金属缓冲的主力，并把胞质游离锌缓冲在皮摩尔量级。Cd-MT 复合物经肾小球滤过后被近端小管重吸收、长期蓄积于溶酶体并释放游离镉，是日本痛痛病（镉污染致骨软化与剧痛）的病变核心。',
  },
]
