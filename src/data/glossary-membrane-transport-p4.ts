// ============================================================
// BioScholar 膜蛋白与物质转运术语词典 - 批次 P4（10 条，g-425 ~ g-434）
// 由内容代理 46-b4 编写，subjectId 均为 membrane-transport
// 类别分布：泵 2 / 转运体 3 / 结构 1 / 机制 3 / 学说 1
// 依据：Stein & Litton《Channels, Carriers, and Pumps》第2版、
// Alberts《Molecular Biology of the Cell》第7版、Taiz & Zeiger《Plant Physiology》第6版
// 及本学科第 7–8 章教材正文
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const membraneTransportGlossaryP4: GlossaryTerm[] = [
  // ---------- 泵（2 条） ----------
  {
    id: 'g-425',
    term: 'V 型 ATP 酶',
    english: 'V-ATPase',
    subjectId: 'membrane-transport',
    category: '泵',
    definition:
      '真核细胞专职酸化膜泡的旋转质子泵，由胞质侧 V1（A₃B₃CDE₃FG₃H，ATP 水解马达）与膜内 V0（a、c 环、c″、d、e，质子通路）组成双旋转马达。每转一圈水解 3 分子 ATP、泵入质子数等于 c 环拷贝数（酵母 10 拷贝约 3.3 H⁺/ATP）。生理方向只水解不合成（末端抑制与动力学不可逆性），并可经可逆解离节能调控；服务溶酶体酸化（pH 4.5–5.0）、内体分选与破骨细胞、闰细胞等特化泌酸功能。',
  },
  {
    id: 'g-426',
    term: '液泡 H⁺ 焦磷酸酶',
    english: 'H⁺-translocating pyrophosphatase',
    abbreviation: 'V-PPase',
    subjectId: 'membrane-transport',
    category: '泵',
    definition:
      '植物液泡膜特有的第二质子泵（拟南芥基因 AVP1），以约 77 kDa 单一多肽的同源二聚体工作，水解焦磷酸（PPi，ΔG 约 −27 kJ/mol）并偶联 H⁺ 跨液泡膜泵送。PPi 是纤维素与蛋白质等合成反应的副产品，V-PPase 等于把「废能」回收为梯度，故称廉价引擎；动物基因组不含 V-PPase。AVP1 过表达可提高转基因植物的抗旱耐盐性，且与生长素极性运输相关；与 V-ATPase 双突变在拟南芥致死。',
  },
  // ---------- 转运体（3 条） ----------
  {
    id: 'g-427',
    term: 'ClC-7',
    english: 'ClC-7 chloride/proton antiporter',
    subjectId: 'membrane-transport',
    category: '转运体',
    definition:
      '溶酶体膜与破骨细胞褶皱缘上的 Cl⁻/H⁺ 反向转运体（交换比约 2Cl⁻:1H⁺），为 V-ATPase 泵入的 H⁺ 提供电荷分流——持续把 Cl⁻ 放入腔内、泄掉正电压，使酸化以接近电中性的 HCl 积累推进。CLCN7 基因突变使溶蚀腔无法酸化至约 pH 4.5，骨吸收障碍而致石骨症，并伴溶酶体贮积表型；它与 V-ATPase 构成「泵＋分流」的经典搭档。',
  },
  {
    id: 'g-428',
    term: 'SGLT2',
    english: 'sodium-glucose cotransporter 2',
    subjectId: 'membrane-transport',
    category: '转运体',
    definition:
      '即钠-葡萄糖共转运体 2（基因 SLC5A2），驻肾近曲小管 S1 段顶端膜，以 1Na⁺:1 葡萄糖的化学计量承担约 90% 滤过葡萄糖的重吸收（每日约 180 g），容量大而亲和低；其余约 10% 由 2Na⁺:1 葡萄糖、亲和更高的 SGLT1 补足。恩格列净、达格列净等 SGLT2 抑制剂阻断该重吸收、促成尿糖排泄，在降糖之外带来心肾保护；SLC5A2 突变致家族性肾性糖尿。',
  },
  {
    id: 'g-429',
    term: 'NRT1.1',
    english: 'NRT1/Peptide transporter 6.3',
    abbreviation: 'CHL1',
    subjectId: 'membrane-transport',
    category: '转运体',
    definition:
      '拟南芥双亲和硝酸盐转运体（原名 CHL1，现归 NPF6.3），兼作硝酸盐感受器：第 101 位苏氨酸被 CIPK23 激酶磷酸化后由低亲和切换为高亲和模式，单个位点完成两挡变速；结合硝酸盐后又触发 NLP7 介导的转录级联，是「转运体兼感受器」（transceptor）的教科书范例。NPF 家族以 53 个成员位列拟南芥最大的次级转运家族之一，底物横跨硝酸盐、肽、氨基酸与激素。',
  },
  // ---------- 结构（1 条） ----------
  {
    id: 'g-430',
    term: 'c 环',
    english: 'c-ring',
    subjectId: 'membrane-transport',
    category: '结构',
    definition:
      '旋转马达型 ATPase 膜区的转子环，由多个疏水 c 亚基围成，每个 c 亚基带一个可质子化的谷氨酸。每转一圈转位的质子数等于拷贝数：哺乳动物线粒体 F 型 8 拷贝约 2.7 H⁺/ATP、酵母 10 约 3.3、叶绿体 14 约 4.7；V 型酵母 10 拷贝约 3.3 H⁺/ATP。拷贝数同时决定单步做功与所需质子动力势的高低，是旋转马达与其所在膜能量环境的适配参数。',
  },
  // ---------- 机制（3 条） ----------
  {
    id: 'g-431',
    term: '结合变化机制',
    english: 'binding change mechanism',
    subjectId: 'membrane-transport',
    category: '机制',
    definition:
      'F 型 ATP 合酶的催化原理，由 Boyer 提出：三个 β 催化位点处于开放（O）、松散（L）、紧密（T）三种构象并随 γ 轴每 120° 轮换；ADP 与 Pi 在 L 态松散结合，转入 T 态被机械压迫直接缩合成 ATP，再经 O 态释放——合成能量来自构象循环而非高能中间物。Walker 解出的 F₁ 晶体结构（1994 年）证实三位点异构；Boyer 与 Walker 因此与发现 Na⁺/K⁺-ATPase 的 Skou 分享 1997 年诺贝尔化学奖。',
  },
  {
    id: 'g-432',
    term: '次级主动转运',
    english: 'secondary active transport',
    subjectId: 'membrane-transport',
    category: '机制',
    definition:
      '不直接水解 ATP，而利用一级泵建立的离子梯度驱动另一溶质逆梯度移动的转运方式，分同向、反向与单向三类。动物以 Na⁺ 梯度支付（SGLT1 以 2Na⁺ 捎带 1 葡萄糖、NCX 以 3Na⁺ 换 1Ca²⁺），植物以 H⁺ 梯度支付；化学计量决定生电性——谷氨酸转运体 EAAT 以 3Na⁺:1H⁺:1Glu⁻ 并反向送出 1 个 K⁺ 的复杂计量把摄取做成近单向阀。抑制一级泵即瘫痪二级泵，是经典的药理学判据。',
  },
  {
    id: 'g-433',
    term: '驱动离子',
    english: 'driving ion',
    subjectId: 'membrane-transport',
    category: '机制',
    definition:
      '次级主动转运中「付款」的离子：动物用 Na⁺（血浆约 145 mmol/L，承袭海水），植物用 H⁺（质子动力势，根系分泌质子自产）。钙外排两端殊途同归——动物 NCX 以 3Na⁺:1Ca²⁺、植物 CAX 以多 H⁺:1Ca²⁺ 借单价阳离子梯度抬走二价钙。混用时哲学互逆：耐盐植物 SOS1 用 ΔpH 排 Na⁺（Na⁺ 为毒），动物 NHE3 用 Na⁺ 排 H⁺（Na⁺ 为资源）。驱动离子的选择是环境化学的镜像——海水的钠、土壤的酸。',
  },
  // ---------- 学说（1 条） ----------
  {
    id: 'g-434',
    term: '化学渗透学说',
    english: 'chemiosmotic theory',
    subjectId: 'membrane-transport',
    category: '学说',
    definition:
      'Mitchell 于 1961 年提出、1978 年获诺贝尔化学奖的能量耦联理论：电子传递释放的能量以跨膜质子梯度（质子动力势，PMF＝ΔpH＋Δψ）形式存储，H⁺ 回流经 ATP 合酶驱动合成 ATP。该学说统一了线粒体、叶绿体、细菌与植物质膜的产能逻辑；动物细胞质膜以 Na⁺ 循环为变体，仍是「离子梯度即能量货币」的同一框架，也是本书动植物两条主线（Na⁺ 循环对 H⁺ 循环）的理论底座。',
  },
]
