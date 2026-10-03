// ============================================================
// BioScholar 膜蛋白与物质转运测验题库 - 批次 P7（第 13 章 细胞器膜上的转运）
// 10 题（q-membrane-transport-61 ~ q-membrane-transport-70）
// 题型：single 6 / truefalse 2 / multiple 2；难度 1:2:3 = 2:6:2
// 教材依据：Stein & Litton《Channels, Carriers, and Pumps》第2版 ·
// Alberts《Molecular Biology of the Cell》第7版 ·
// Taiz & Zeiger《Plant Physiology》第6版 · Nicholls & Ferguson
// 《Bioenergetics》第4版，及本学科第 13 章教材正文
// Task ID: 47-c3（主控亲撰）
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const membraneTransportQuizP7: QuizQuestion[] = [
  // ================= 第 13 章 细胞器膜上的转运（q-membrane-transport-61 ~ 70） =================
  {
    id: 'q-membrane-transport-61',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch13',
    type: 'single',
    question: '关于线粒体外膜的 VDAC（电压依赖阴离子通道），下列叙述正确的是：',
    options: [
      '它是 19 折叠的 β 桶蛋白，与细菌外膜孔蛋白同源，允许约 5 kDa 以下代谢物自由扩散，跨膜电压升高时转入闭合构象',
      '它是 α 螺旋六次跨膜的载体，按米氏动力学饱和运转，把 ATP 从基质主动泵出到胞质',
      '它对离子的选择性极高，只允许 H⁺ 通过，是线粒体膜电位的产生者',
      '它只存在于动物线粒体外膜，植物线粒体外膜完全缺乏同源孔道',
    ],
    answer: 0,
    explanation:
      'VDAC 是 19 链 β 桶（内共生签名），孔径约 2.5–3 nm、放行约 5 kDa 以下代谢物，电压升高时转入闭合态且选择性反转（只放小阳离子）——本质是细胞器版的门控离子通道，A 正确。它是通道不是载体（B 错）；它非特异放行小代谢物、并不产生膜电位（C 错）；植物线粒体外膜同样有同源 VDAC 体系（D 错）。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-62',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch13',
    type: 'truefalse',
    question:
      '线粒体内膜的腺苷酸转位体（ANT）以一个 ADP³⁻ 换一个 ATP⁴⁻，每次循环膜两侧电荷净变化为零，因此该交换不需要任何能量驱动。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。ADP³⁻ 入基质、ATP⁴⁻ 出基质，每循环净向胞质侧移出一个负电荷（等效于把一个正电荷留在基质侧），并非电中性。这一份额外工钱由线粒体膜电位（内负外正，150–180 mV）支付——ATP 出货是被电位「下山」推着走的，这正是化学渗透 coupling 的组成部分。',
    difficulty: 1,
  },
  {
    id: 'q-membrane-transport-63',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch13',
    type: 'single',
    question: '关于植物线粒体的交替氧化酶（AOX），下列叙述正确的是：',
    options: [
      '它从泛醌池直接把电子交给氧、绕过复合物 III 与 IV 且不泵 H⁺，赋予植物「氰化物抗性呼吸」',
      '它是动物与植物线粒体共有的产能调节阀，两界配置完全相同',
      '它每传递一对电子泵出 4 个 H⁺，是植物线粒体产能效率最高的复合体',
      '它位于线粒体外膜，与 VDAC 协同控制丙酮酸输入',
    ],
    answer: 0,
    explanation:
      'AOX 从泛醌池直接把电子交给 O₂，绕过复合物 III/IV，不泵质子——产能故意打折，换来抗氰化物、稳住泛醌池、限制活性氧爆发，植物的氰化物抗性呼吸即由此得名，A 正确。AOX 为植物（及真菌、原生生物）所独有，动物线粒体缺如（B 错）；它恰恰不泵 H⁺（C 错）；它位于内膜（D 错）。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-64',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch13',
    type: 'single',
    question: '关于叶绿体内被膜的三糖磷酸转运体（TPT），下列叙述正确的是：',
    options: [
      '以三糖磷酸:无机磷酸严格 1:1 反向交换，白天出口卡尔文循环产物、换回 Pi 供 ATP 与卡尔文循环之用',
      '以 H⁺ 电化学梯度驱动三糖磷酸与蔗糖的同向共运输',
      '夜间被光系统直接激活，把淀粉整段运出叶绿体',
      '动物细胞的过氧化物酶体膜上有其精确同源物，执行同样的碳流出口',
    ],
    answer: 0,
    explanation:
      'TPT 做严格 1:1 的 TP:Pᵢ 反向交换——出口产能物、带回原料，与线粒体 ANT 的「ATP 换 ADP」是同一套交换语法；磷账必须由 Pᵢ 回程补平，A 正确。它靠交换化学而非 H⁺ 梯度驱动（B 错）；夜里卡尔文循环停转、碳走 MEX1 的麦芽糖出口（C 错）；动物没有质体，无对应物（D 错）。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-65',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch13',
    type: 'truefalse',
    question:
      '叶绿体外被膜的蛋白输入通道 Toc75 与线粒体外膜的 VDAC、细菌外膜的孔蛋白同为 β 桶折叠——两次内共生都把细菌的 β 桶孔留作了门户。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。线粒体（α-变形菌内共生）与叶绿体（蓝藻内共生）的外膜输入通道 Tom40/Toc75 与 VDAC、细菌孔蛋白同属 β 桶家族——「同源部件、各守各门」，是内共生起源与演化保守性最直观的证据之一；两套系统再以导肽「化学口音」（富 Ser/Thr 对富 Arg）分流彼此的前体蛋白。',
    difficulty: 1,
  },
  {
    id: 'q-membrane-transport-66',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch13',
    type: 'multiple',
    question: '关于类囊体膜的电中性离子回路，下列叙述正确的有：',
    options: [
      'KEA3 是 K⁺/H⁺ 反向转运体，把 pmf 在 ΔpH 与 ΔΨ 两种形态间重新分配，相当于可调的质子泄漏阀',
      'VCCN1 是电压依赖 Cl⁻ 通道，Cl⁻ 进腔对冲 H⁺ 泵入积累的正电荷',
      'TPK3 是光驱动的 H⁺ 泵，每吸收一个光子泵入一个质子',
      '该回路把膜电位钳在低位，使 ΔpH 成为类囊体 pmf 的主要储库（常占九成上下）',
    ],
    answer: [0, 1, 3],
    explanation:
      'KEA3 让腔内 H⁺ 外泄回基质、基质 K⁺ 顶进腔，再分配 ΔpH/ΔΨ 并参与 NPQ 松紧调控（A 对）；VCCN1 放 Cl⁻ 进腔平衡电荷（B 对）；三者合力把膜电位钳在低位、ΔpH 占 pmf 九成上下（D 对）。TPK3 是电压敏感的 K⁺ 通道而非 H⁺ 泵——光驱动泵 H⁺ 的是光系统与 b₆f（C 错）。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-67',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch13',
    type: 'single',
    question:
      '1963 年 Jagendorf 的「酸跳」实验把离体叶绿体先在 pH 4 暗酸性浴中酸化、再瞬间转入 pH 8 缓冲液，观察到：',
    options: [
      '黑暗中毫无电子传递，ATP 却照合成不误——证明人工 ΔpH 单独足以驱动 ATP 合酶',
      '黑暗中 ATP 合成仍需要完整的光系统 II 水裂解反应',
      'ATP 合成完全停止，证明光合磷酸化必须依赖光驱动的电子传递',
      '叶绿体把 H⁺ 主动泵入类囊体腔以重建梯度，随后才开始合成 ATP',
    ],
    answer: 0,
    explanation:
      '酸跳实验的关键在于把能量来源与光/电子传递彻底剥离：暗酸性浴预装人工 ΔpH，转入 pH 8 后质子经 ATP 合酶下泄、暗中合成 ATP——这是化学渗透假说在叶绿体上的第一个决定性证据（Mitchell 由此获 1978 年诺奖），A 正确，B、C、D 与实验事实相反。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-68',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch13',
    type: 'single',
    question:
      '线性电子流每释放 1 个 O₂ 约向类囊体腔移入 12 个 H⁺（约兑 2.5 个 ATP）并产出 2 个 NADPH，而卡尔文循环的预算是 3 ATP : 2 NADPH。这一缺口的填补方式是：',
    options: [
      '循环电子流（PGR5/PGRL1 与 NDH 通路）让电子绕回 b₆f 再泵 H⁺，只补 ATP 不产 NADPH',
      '线粒体呼吸链跨细胞器把 ATP 直接运入叶绿体补足',
      'KEA3 反向转运体把腔内 K⁺ 换成基质 ATP',
      'Tat 通路用 ΔpH 把折叠蛋白送入腔内时顺带合成 ATP',
    ],
    answer: 0,
    explanation:
      '循环电子流让电子从光系统 I 一侧绕回 b₆f（PGR5/PGRL1）或经 NDH 复合体再泵质子——只泵 H⁺、不产 NADPH，把 ATP/NADPH 比值调到 3:2 的预算线，强光下兼作处理过剩还原力的泄洪道，A 正确。跨细胞器 ATP 输运并非此缺口的机制（B 错）；KEA3 转运 K⁺/H⁺ 与 ATP 无关（C 错）；Tat 消耗而非产生 ΔpH（D 错）。',
    difficulty: 3,
  },
  {
    id: 'q-membrane-transport-69',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch13',
    type: 'single',
    question: '内质网、线粒体与过氧化物酶体的蛋白输入分别代表三种范式，其中过氧化物酶体一系的特点是：',
    options: [
      'Pex5 受体携带已折叠的蛋白（含 PTS1 的 SKL 基序）靠坞入膜，Pex5 泛素化后被 AAA 马达拽回循环再用',
      '核糖体直接对接 Sec61 通道，新生肽链边合成边穿膜',
      '前体蛋白须先解折叠，由 ΔΨ 拉正电导肽、mtHsp70 棘轮拽入基质',
      '蛋白经 FG 重复无序筛网被动漏过核孔，速度只受浓度差限制',
    ],
    answer: 0,
    explanation:
      '过氧化物酶体输入是「折叠输入」范式：货物先折叠好（触酶四聚体整队入关），Pex5 识别 PTS1 后携带靠坞，经对接复合体入膜，Pex5 单体泛素化后由 AAA 马达回收（A 正确）。B 是 ER 的共翻译范式，C 是线粒体的解折叠范式，D 混入了核孔的被动扩散（且大货物不能被动漏过）——同一问题「蛋白怎么进膜封闭区室」，演化给出三个答案。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-70',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch13',
    type: 'multiple',
    question: '关于细胞器层面动物与植物转运体系的异同，下列叙述正确的有：',
    options: [
      'SLC25 线粒体载体家族两界数量相当：人类 53 个成员、拟南芥约 58 个',
      '叶绿体被膜与类囊体膜整层为植物独占，动物细胞没有对应膜系统',
      '植物内质网拥有与动物 IP₃R/RyR 完全同源的钙释放通道',
      '核孔复合体两界共享同一套核心语法（FG 筛网＋受体载体＋Ran-GTP 泵），植物特异 Nup 变体参与免疫信号分流',
    ],
    answer: [0, 1, 3],
    explanation:
      'SLC25 两界各约半百（53 对约 58），是「同超家族不同成员数」的细胞器实例（A 对）；叶绿体被膜/类囊体是植物独占的整层界面（B 对）；NPC 的「通道-载体-泵」三分法巨型复现两界共有，植物特异 Nup 参与免疫分流（D 对）。植物 ER 缺乏明确的 IP₃R/RyR 同源物，其钙释放分子身份仍在考证——两界钙库调度在此分岔（C 错）。',
    difficulty: 3,
  },
]
