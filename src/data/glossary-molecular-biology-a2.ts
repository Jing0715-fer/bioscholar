// ============================================================
// BioScholar 分子生物学术语词典 - 批次 A2（第 4–6 章）
// 5 条（g-26 ~ g-30），subjectId 均为 molecular-biology
// 类别分布：DNA 修复 2 / 转录机器 1 / RNA 加工 1 / 遗传密码 1
// 依据：朱玉贤《现代分子生物学》（第5版）、Weaver《Molecular Biology》、
// Watson《Molecular Biology of the Gene》第 4–6 章正文
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const molecularBiologyGlossaryA2: GlossaryTerm[] = [
  // ---------- DNA 修复（2 条） ----------
  {
    id: 'g-26',
    term: '核苷酸切除修复',
    english: 'nucleotide excision repair',
    abbreviation: 'NER',
    subjectId: 'molecular-biology',
    category: 'DNA 修复',
    definition:
      '面向嘧啶二聚体、黄曲霉毒素与 BPDE 等大体积加合物的切除修复通路——这类损伤的共同点是使双螺旋变形，NER 因此不认化学、只认形变，识别面极宽。大肠杆菌由 UvrABC 系统执行：UvrA₂UvrB 扫描并验证损伤，UvrC 在 5′ 侧约 8 个、3′ 侧约 4–5 个核苷酸处双切，UvrD 抽出 12–13 聚体后由 Pol I 填隙。真核由 XPC（或停滞的 RNA 聚合酶 II 触发的转录偶联路线）发起，TFIIH 的 XPB/XPD 打开约 25 bp 的泡，XPG 与 ERCC1-XPF 双切切下 24–32 聚体。着色性干皮病（XPA–XPG 各缺一步）对应其缺陷，患者皮肤癌风险升高逾千倍；Cockayne 综合征则特异缺陷转录偶联支线。',
  },
  {
    id: 'g-27',
    term: 'SOS 应答',
    english: 'SOS response',
    subjectId: 'molecular-biology',
    category: 'DNA 修复',
    definition:
      '大肠杆菌在损伤压过修复能力时启动的全局应急程序：复制叉停摆造成单链 DNA 积累，RecA 在其上聚合成活性丝状体，作为辅刺激因子催化阻遏蛋白 LexA 的自主切割（「蛋白酶活性在阻遏蛋白内休眠」的经典设计）；LexA 分崩后它所阻遏的约 40 个基因集体去阻遏——uvrAB、recA 等修复增援到场，sulA 暂停细胞分裂，易错聚合酶 IV（DinB）与 V（UmuD′₂C）登场执行跨损伤合成，在损伤对侧「闭着眼睛」插入核苷酸把复制强行续完，代价是突变率骤升。损伤消退后 RecA 活性回落、LexA 重新积累，SOS 关闭。它以「租借保真度换存活」著称，喹诺酮类抗生素杀菌的同时诱导 SOS，反而促成耐药突变与基因水平转移，是临床耐药演化的动力之一。',
  },
  // ---------- 转录机器（1 条） ----------
  {
    id: 'g-28',
    term: 'RNA 聚合酶',
    english: 'RNA polymerase',
    subjectId: 'molecular-biology',
    category: '转录机器',
    definition:
      '以 DNA 为模板、四种 NTP 为底物催化 RNA 合成的聚合酶，不需引物即可把两个游离 NTP 直接缩合起步，沿模板 3′ 到 5′ 移动、新链按 5′ 到 3′ 延伸，行进中携带约 12–14 bp 转录泡与约 8–9 bp 的 RNA-DNA 杂合区。大肠杆菌核心酶含 α₂ββ′ω 五亚基（约 400 kDa），β 与 β′ 组成蟹钳形钳口夹住 DNA 并以双金属离子机制催化；σ 因子加入成全酶后方能识别启动子（-35 与 -10 区），起始后 σ 释放循环再用，换 σ 即换一整套表达程序。真核分 Pol I（45S rRNA 前体）、Pol II（mRNA 前体与多数 snRNA，其 RPB1 带 YSPTSPS 重复的 CTD 以磷酸化时刻表调度共转录加工）与 Pol III（tRNA、5S rRNA 等），三者的 α-鹅膏蕈碱敏感性（不敏感/低浓度敏感/高浓度方敏感）是经典鉴别工具。',
  },
  // ---------- RNA 加工（1 条） ----------
  {
    id: 'g-29',
    term: '剪接体',
    english: 'spliceosome',
    subjectId: 'molecular-biology',
    category: 'RNA 加工',
    definition:
      '催化前体 mRNA 内含子删除的巨型核糖核蛋白机器，含 U1、U2、U4、U5、U6 五种 snRNP 与逾百种蛋白。装配次序：U1 先认 5′ 剪接位点，U2 进场替换 SF1 并把分支点腺苷顶出成凸起，U4/U6.U5 三聚体加入后大重排——U6 取代 U1 占据 5′ 位点并与 U2 配对形成催化核心，在镁离子参与下完成两步转酯：分支点 A 的 2′-OH 进攻 5′ 位点生成 2′,5′-磷酸二酯键连接的套马索中间体，外显子 1 的 3′-OH 再进攻 3′ 位点连接两外显子。两步转酯均不水解 ATP（能量自洽），ATP 全花在机器重排上；其催化核心与 II 型自剪接内含子高度相似，提示催化 RNA 来自古老的核酶遗产。',
  },
  // ---------- 遗传密码（1 条） ----------
  {
    id: 'g-30',
    term: '摆动假说',
    english: 'wobble hypothesis',
    subjectId: 'molecular-biology',
    category: '遗传密码',
    definition:
      '克里克 1966 年提出的配对放宽规则：反密码子 5′ 端碱基（第 34 位）处于 RNA 双链大沟边缘、几何约束松弛，配对可以放宽——该位 C 只配 G、A 只配 U（罕见）、G 可配 C 或 U、U 可配 A 或 G、肌苷 I（腺苷脱氨产物）可配 U、C 或 A；摆动只发生在这一处，密码子前两位依旧严丝合缝。其算术意义是省编制：不带摆动须 61 种 tRNA 覆盖全部有义密码，带摆动后大肠杆菌约 40 余种、哺乳动物胞质约 50 种即可；线粒体更以仅 22 种 tRNA 配合「超摆动」（U 起头反密码子通读四重家族）。摆动还与修饰联动——反密码子摆动位碱基的硫代与甲基化修饰决定该 tRNA 能读几个密码，修饰酶突变造成的「读码面变窄」可解释部分线粒体病的分子机制。',
  },
]
