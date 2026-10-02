// ============================================================
// 膜蛋白与物质转运术语词典 - 批次 P3（10 条，g-415 ~ g-424）
// 由内容代理 46-b3 编写，subjectId 均为 membrane-transport
// 类别分布：载体原理 3 / 糖转运 3 / 韧皮部运输 1 / 主动转运 3
// 依据：Stein & Litton《Channels, Carriers, and Pumps》第2版 ·
// Alberts《Molecular Biology of the Cell》第7版 · Taiz & Zeiger《Plant Physiology》第6版
// 及本学科第 5–6 章教材正文
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const membraneTransportGlossaryP3: GlossaryTerm[] = [
  // ---------- 载体原理（3 条） ----------
  {
    id: 'g-415',
    term: '载体蛋白',
    english: 'carrier protein',
    subjectId: 'membrane-transport',
    category: '载体原理',
    definition:
      '经自身构象变化跨膜转运特异溶质的膜蛋白，底物结合位点遵循交替通路原则、从不同时暴露于膜两侧。周转速率约每秒 10²–10⁴ 次，比通道的 10⁷–10⁸ 慢约五个数量级，换来高选择性与 Michaelis-Menten 饱和动力学（Vmax 与 Km）；温度系数 Q₁₀ 大于 3，是与简单扩散（Q₁₀ 约 1.2–1.6）鉴别的经典判据。',
  },
  {
    id: 'g-416',
    term: '交替通路',
    english: 'alternating access',
    subjectId: 'membrane-transport',
    category: '载体原理',
    definition:
      '一切载体共同的工作总则：底物结合腔由内外两道门看守，一侧开启时另一侧必然关闭，绝不形成贯通膜两侧的连续孔道，跨膜梯度因此不会被短路。三种实现模式：MFS 家族的摇摆开关、LeuT 折叠的摇摆束与谷氨酸转运体的滑梯式（转运结构域携底物沿膜法向位移十余埃）；两门皆闭的封闭状态被结构捕获，是「绝不同时开门」的直接证据。',
  },
  {
    id: 'g-417',
    term: '易化扩散',
    english: 'facilitated diffusion',
    subjectId: 'membrane-transport',
    category: '载体原理',
    definition:
      '经载体或通道顺电化学梯度进行的被动转运，不直接水解 ATP。载体型易化扩散具三项酶学性状：饱和（服从米氏动力学，如红细胞葡萄糖摄取的平台现象）、结构特异性与竞争性抑制（根皮素抑制 GLUT 而根皮苷抑制 SGLT），温度系数 Q₁₀ 大于 3；与速率始终正比于浓度、低 Q₁₀ 的简单扩散形成判别对照。GLUT 家族即单转运型易化扩散的代表。',
  },
  // ---------- 糖转运（3 条） ----------
  {
    id: 'g-418',
    term: '葡萄糖转运体',
    english: 'glucose transporter',
    abbreviation: 'GLUT',
    subjectId: 'membrane-transport',
    category: '糖转运',
    definition:
      'SLC2A 基因家族编码的易化扩散载体，人类共 14 个成员（GLUT1–12、HMIT/GLUT13、GLUT14），均属 MFS 折叠的 12 跨膜螺旋。代表性 Km：GLUT1 约 1–2 mM（红细胞与血脑屏障）、GLUT2 约 15–20 mM（肝与 β 细胞的葡萄糖感受器）、GLUT3 约 1.4 mM（神经元）、GLUT5 约 6 mM（果糖）；GLUT1 缺陷综合征与 Fanconi-Bickel 综合征分别源于 SLC2A1 与 SLC2A2 突变。',
  },
  {
    id: 'g-419',
    term: 'GLUT4 转位',
    english: 'GLUT4 translocation',
    subjectId: 'membrane-transport',
    category: '糖转运',
    definition:
      '胰岛素上调骨骼肌与脂肪组织糖摄取的核心机制：静息时约 90% 的 GLUT4 封存于 GLUT4 储存囊泡（GSV）；胰岛素经受体-IRS-PI3K-AKT 级联磷酸化 AS160/TBC1D4，解除对 Rab 小 G 蛋白的抑制，GSV 转位并与质膜融合，膜上 GLUT4 数分钟内增多数倍，葡萄糖摄取随之拔高；运动另经 AMPK 通路并行调度。2 型糖尿病的胰岛素抵抗即表现为转位应答迟钝，餐后血糖缓冲失灵。',
  },
  {
    id: 'g-420',
    term: 'SWEET 载体',
    english: 'SWEET transporter',
    subjectId: 'membrane-transport',
    category: '糖转运',
    definition:
      '植物糖外排载体家族，拟南芥共 17 个成员，7 个跨膜螺旋由两个三螺旋半重复串联而成；细菌祖先 SemiSWEET 仅 3 个跨膜螺旋、以同源二聚体行使功能，经加倍融合演化出植物版本。SWEET11/12/15 参与筛分子-伴胞的韧皮部装载，SWEET16/17 司液泡果糖调配；黄单胞菌 TAL 效应子诱导水稻 OsSWEET14 高表达致白叶枯病感病，是「易感基因」的经典案例。',
  },
  // ---------- 韧皮部运输（1 条） ----------
  {
    id: 'g-421',
    term: '压力流学说',
    english: 'pressure-flow hypothesis',
    subjectId: 'membrane-transport',
    category: '韧皮部运输',
    definition:
      'Münch 于 1930 年定形的韧皮部长距离运输理论：源端伴胞的 SUC2 以 H⁺ 梯度把蔗糖逆数十倍浓度泵入筛管（汁液蔗糖浓度可达 0.3–1 M），渗透吸水形成高压；库端卸糖失水降压，两端压差推动筛管汁液整体单向流动，实测流速约 0.5–1.5 m/h。整套运输不以任何泵直接推液，仅凭半透膜两侧的渗透压差即可把糖送上几十米高的树冠。',
  },
  // ---------- 主动转运（3 条） ----------
  {
    id: 'g-422',
    term: 'P 型 ATPase',
    english: 'P-type ATPase',
    subjectId: 'membrane-transport',
    category: '主动转运',
    definition:
      '以保守天冬氨酸的磷酸化中间体（β 天冬氨酰磷酸）为标志的初级主动转运 ATP 酶超家族，循 Post-Albers 循环 E1→E1~P→E2-P→E2 往返，每周期耦联离子跨膜易位；分 P1（重金属 CPx 型）至 P5 五大亚类，典型拓扑为 10 跨膜螺旋加 A/N/P 三个胞质催化域。钒酸根作为磷酸根类似物对其通用抑制；2000 年 Toyoshima 解析的 SERCA1a 结构是该族首个原子模型，循环可逆运行（以离子梯度合成 ATP）亦经 Garrahan-Glynn 1967 年实验证实。',
  },
  {
    id: 'g-423',
    term: '钠钾泵',
    english: 'Na⁺/K⁺-ATPase',
    subjectId: 'membrane-transport',
    category: '主动转运',
    definition:
      '动物细胞的总引擎（P2C 亚类）：α 催化亚基（约 110 kDa）加 β 糖蛋白组装，FXYD 磷调节蛋白可加盟微调，每水解 1 分子 ATP 泵出 3 个 Na⁺、泵入 2 个 K⁺，净外移一个正电荷而具生电性。静息时耗全身约 25% 的 ATP、肾脏可高达 70%；其 Na⁺ 梯度是 SGLT、NCX、NHE 等次级转运的能源。乌本苷为经典抑制剂，地高辛经「抑泵→NCX 减弱→Ca²⁺ 升高」级联产生正性肌力。',
  },
  {
    id: 'g-424',
    term: '植物质膜 H⁺-ATPase',
    english: 'plasma membrane H⁺-ATPase',
    abbreviation: 'AHA',
    subjectId: 'membrane-transport',
    category: '主动转运',
    definition:
      '植物的电化学引擎（P3A 亚类）：拟南芥共 11 个 AHA 基因（AHA1/2/3 主力），约 100 kDa 单亚基、10 跨膜螺旋，每 ATP 泵出 1 个 H⁺（生电）。C 端自抑制域经 Thr947（AHA2 口径）磷酸化后结合 14-3-3 二聚体实现全激活，糠菌素锁死该复合体致异常激活。其建立的双重势能（细胞质 pH 约 7.2 对质外体约 5.5、膜电位 −120~−250 mV）驱动植物几乎全部次级转运，并支撑气孔开放与酸生长。',
  },
]
