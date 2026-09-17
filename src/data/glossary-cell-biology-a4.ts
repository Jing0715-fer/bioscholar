// ============================================================
// BioScholar 细胞生物学术语词典 - 批次 A4（第 10–12 章）
// 5 条（g-56 ~ g-60），subjectId 均为 cell-biology
// 类别分布：细胞死亡 3 / 肿瘤生物学 1 / 前沿技术 1
// 依据：翟中和/丁明孝《细胞生物学》（第5版）、
// Alberts《Molecular Biology of the Cell》
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const cellBiologyGlossaryA4: GlossaryTerm[] = [
  // ---------- 细胞死亡（3 条） ----------
  {
    id: 'g-56',
    term: '细胞凋亡',
    english: 'apoptosis',
    subjectId: 'cell-biology',
    category: '细胞死亡',
    definition:
      '由基因程序控制的细胞自杀，形态上以胞膜起泡、染色质固缩边集、核裂解与凋亡小体形成为特征，内容物不外泄故不引发炎症，生化标志包括 DNA 的约 180–200 bp 整数倍梯状条带与磷脂酰丝氨酸外翻。1972 年由 Kerr、Wyllie 与 Currie 命名，线虫 ced-3/ced-4/ced-9 基因的解析证明其遗传学本质并获 2002 年诺贝尔奖。分子机器以 caspase 级联为核心：外源途径经死亡受体 DISC 活化 caspase-8，内源途径经 Bax/Bak 成孔、细胞色素 c 与 Apaf-1 组装凋亡体活化 caspase-9，两路汇合于执行 caspase-3 等；Bcl-2 家族与 IAP 设定死亡阈值。凋亡贯穿发育修剪、免疫克隆删除与肿瘤抑制，其不足与过多分别对应肿瘤、自身免疫与神经退行、艾滋病等疾病。',
  },
  {
    id: 'g-57',
    term: '细胞衰老',
    english: 'cellular senescence',
    subjectId: 'cell-biology',
    category: '细胞死亡',
    definition:
      '细胞在增殖潜力耗竭或应力打击下不可逆退出细胞周期、停滞于 G1 期而维持代谢活性的状态。Hayflick 与 Moorhead 1961 年证明正常人二倍体成纤维细胞体外约经 40–60 次群体倍增后停滞（Hayflick 界限）；分子机制有两条主轴：端粒每轮复制缩短约 50–200 bp、临界暴露激活 ATM/ATR-p53-p21，以及应力与癌基因诱导经 p16INK4a-Rb 锁闭 E2F。检出标志为 pH 6.0 条件下的衰老相关 β-半乳糖苷酶与核内异染色质聚焦；衰老相关分泌表型（SASP）经 NF-κB 与 C/EBPβ 分泌 IL-6、IL-8 与 MMP 等上百种因子。衰老在胚胎塑形、伤口愈合与抑癌（如癌基因诱导的衰老）中具正面作用，堆积则驱动慢性炎症与退行性疾病，senolytics 类药物以清除衰老细胞为干预策略。',
  },
  {
    id: 'g-58',
    term: '铁死亡',
    english: 'ferroptosis',
    subjectId: 'cell-biology',
    category: '细胞死亡',
    definition:
      '2012 年 Dixon 与 Stockwell 命名的铁依赖性程序性坏死，核心是多不饱和脂肪酸磷脂在铁催化下的过氧化连锁反应使膜完整性渐进丧失，形态上细胞器大体保全而线粒体缩小变密、嵴减少。防线体系包括：胱氨酸-谷氨酸反向转运体 system Xc−（SLC7A11 为轻链）输入胱氨酸以合成谷胱甘肽，GPX4 以其为还原当量清除磷脂过氧化物，另有 FSP1-CoQ10 还原通路与 ACSL4/LPCAT3 决定的底物供给。erastin 抑制 system Xc−、RSL3 灭活 GPX4 为经典诱导剂，铁螯合剂去铁胺与 ferrostatin-1 可逆转。高间质、高耐药肿瘤（如肾透明细胞癌）对其敏感，为抗癌新方向；缺血再灌注损伤与神经退行中则充当破坏者。',
  },
  // ---------- 肿瘤生物学（1 条） ----------
  {
    id: 'g-59',
    term: '上皮-间质转化',
    english: 'epithelial-mesenchymal transition',
    abbreviation: 'EMT',
    subjectId: 'cell-biology',
    category: '肿瘤生物学',
    definition:
      '上皮细胞获得间质表型的可逆性重编程程序：Snail、Slug、Twist 与 ZEB1/2 等转录因子成套压制 E-钙黏蛋白（与 miR-200 家族构成双稳态开关），同时上调 N-钙黏蛋白、波形蛋白、整联蛋白与 MMP 分泌，细胞失去顶底极性与细胞间连接并获得运动侵袭能力。生理性 EMT 见于原肠形成、神经嵴迁出与创面愈合，用毕经 MET 复位；肿瘤盗用同一程序启动转移，且与干性、抗凋亡及 PD-L1 上调的免疫逃逸偶联。EMT 并非全有或无，多数侵袭细胞处于杂合 E/M 状态，而转移灶克隆形成常需 MET 恢复上皮表型，EMT-MET 的往返节律与部分 EMT 状态是当前研究的焦点。',
  },
  // ---------- 前沿技术（1 条） ----------
  {
    id: 'g-60',
    term: '光遗传学',
    english: 'optogenetics',
    subjectId: 'cell-biology',
    category: '前沿技术',
    definition:
      '以基因编码的光敏蛋白遥控细胞活动的技术体系。核心工具来自微生物与藻类视蛋白：ChR2 吸收约 470 nm 蓝光开放阳离子通道、毫秒级去极化，卤视紫红质受黄光驱动泵氯致超极化，archaerhodopsin 则为质子泵；2005 年 Boyden 与 Deisseroth 首次用病毒表达 ChR2 实现光照遥控神经元动作电位，2010 年被评为年度方法。其三重选择性（光束定空间、毫秒定时间、启动子定细胞类型）超越电刺激与药理；CRY2-CIBN、LOV2 与 PhyB-PIF 等光控二聚化模块把该逻辑扩展为细胞信号与细胞器运输的时空调控。临床转化以视网膜色素变性的光遗传治疗领先，2021 年报道一例患者恢复部分视觉感知。',
  },
]
