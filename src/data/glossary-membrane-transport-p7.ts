// ============================================================
// 膜蛋白与物质转运术语词典 - 批次 P7（10 条，g-455 ~ g-464）
// 主控 47-c3 编写，subjectId 均为 membrane-transport
// 类别分布：细胞器膜转运 10 条（第 13 章配套）
// 教材依据：Stein & Litton 第2版 · Alberts 第7版 · Taiz 第6版 ·
// Nicholls & Ferguson《Bioenergetics》第4版，及第 13 章教材正文
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const membraneTransportGlossaryP7: GlossaryTerm[] = [
  {
    id: 'g-455',
    term: 'VDAC',
    english: 'voltage-dependent anion channel',
    subjectId: 'membrane-transport',
    category: '细胞器膜转运',
    definition:
      '线粒体外膜的主孔道，19 折叠 β 桶蛋白，与细菌外膜孔蛋白同源——内共生起源的分子签名。孔径约 2.5–3 nm，允许约 5 kDa 以下的代谢物（ATP、ADP、丙酮酸、磷酸等）自由扩散而拦下蛋白质；跨膜电压升高时转入闭合构象、选择性反转为小阳离子。动物细胞中它还是 Bcl-2 家族调控凋亡与己糖激酶锚定的平台，兼具代谢分配器与生死开关双重身份。',
  },
  {
    id: 'g-456',
    term: '线粒体载体家族',
    english: 'mitochondrial carrier family (SLC25/MCF)',
    subjectId: 'membrane-transport',
    category: '细胞器膜转运',
    definition:
      '线粒体内膜最大的代谢物载体家族：人类基因组为 SLC25 共 53 个成员，拟南芥约 58 个——两界数量相当。成员以 6 个跨膜 α 螺旋组成三个二联体，各含保守 PX(D/E)XX(K/R)X(K/R) 基序，在「腔开／基质开」两种构象间交替（摇摆开关的紧凑快板）。代表成员有腺苷酸转位体（ANT）、磷酸载体（PIC）、丙酮酸载体（MPC）、柠檬酸载体（CIC）、解偶联蛋白（UCP）等。',
  },
  {
    id: 'g-457',
    term: '腺苷酸转位体',
    english: 'adenine nucleotide translocase (ANT)',
    subjectId: 'membrane-transport',
    category: '细胞器膜转运',
    definition:
      '线粒体内膜最丰富的蛋白之一，以一个 ADP³⁻ 换一个 ATP⁴⁻ 做严格反向交换：每循环净向胞质移出一个负电荷，由线粒体膜电位（内负外正，150–180 mV）驱赶——ATP 出货是被电位「下山」推着走的。苍术苷锁死其胞质侧构象、黄曲霉酰肽锁死基质侧构象，两种毒素各冻半程，是交替接触机制的经典药学证据。',
  },
  {
    id: 'g-458',
    term: '解偶联蛋白',
    english: 'uncoupling protein (UCP)',
    subjectId: 'membrane-transport',
    category: '细胞器膜转运',
    definition:
      'SLC25 家族中让 H⁺ 绕过 ATP 合酶直接内泄、把电化学势烧成热的成员。动物 UCP1 是棕色脂肪的产热引擎，新生儿与冬眠动物靠它维持体温，由去甲肾上腺素—cAMP—脂解—游离脂肪酸链激活；植物的同家族 UCP（旧称 PUMP）在海芋花序等产热器官把温度抬高十余度以扩散臭味吸引传粉者——同一蛋白家族，两界各自演化出「烧电量取暖」的用法。',
  },
  {
    id: 'g-459',
    term: '交替氧化酶',
    english: 'alternative oxidase (AOX)',
    subjectId: 'membrane-transport',
    category: '细胞器膜转运',
    definition:
      '植物（及真菌、原生生物）线粒体内膜特有的末端氧化酶：从泛醌池直接把电子交给氧、绕过复合物 III 与 IV 且不泵 H⁺——产能故意打折，换来抗氰化物、稳住泛醌池与胁迫下限制活性氧爆发的能力，植物的「氰化物抗性呼吸」由此得名。动物线粒体没有 AOX 旁路：这是两界线粒体配件表最醒目的差异之一。',
  },
  {
    id: 'g-460',
    term: '三糖磷酸转运体',
    english: 'triose phosphate/phosphate translocator (TPT)',
    subjectId: 'membrane-transport',
    category: '细胞器膜转运',
    definition:
      '叶绿体内被膜最重要的碳流闸门：以三糖磷酸:无机磷酸严格 1:1 反向交换——出口卡尔文循环产能物、换回 Pi 补 ATP 与循环原料，与线粒体 ANT 的「ATP 换 ADP」遵循同一套交换语法。白天全力出口供胞质合成蔗糖；Pi 不足时 TP 出不去、循环物锁死为淀粉，即「Pi 限制光合」的经典现象。夜里换 MEX1 出口麦芽糖，昼夜两本碳账。',
  },
  {
    id: 'g-461',
    term: 'Toc-Tic 复合体',
    english: 'Toc–Tic complex',
    subjectId: 'membrane-transport',
    category: '细胞器膜转运',
    definition:
      '叶绿体被膜的蛋白输入机器：外被膜的 Toc34（GTP 酶受体）识别转位肽、Toc75（β 桶，与线粒体 Tom40/VDAC 同源）供出通道，内被膜的 Tic 复合体（Tic20/Tic110 等）接力送入基质，转位肽被切除。与线粒体 TOM–TIM 的分流靠「化学口音」：叶绿体转位肽富丝氨酸/苏氨酸、线粒体导肽富精氨酸，两套受体各认各的货。',
  },
  {
    id: 'g-462',
    term: '类囊体电中性回路',
    english: 'thylakoid ion circuit',
    subjectId: 'membrane-transport',
    category: '细胞器膜转运',
    definition:
      '类囊体膜上抵消光驱动 H⁺ 泵入所致电荷积累的离子体系：KEA3（K⁺/H⁺ 反向转运体）作为可调质子泄漏阀在 ΔpH 与 ΔΨ 间再分配 pmf、并参与 NPQ 松紧；VCCN1（电压依赖 Cl⁻ 通道）放 Cl⁻ 进腔对冲正电荷；TPK3 提供电压敏感的 K⁺ 外流。三者合力把膜电位钳在低位，使 ΔpH 常占 pmf 九成上下，类囊体既充得满又不过压。',
  },
  {
    id: 'g-463',
    term: 'Pex5 受体循环',
    english: 'Pex5 receptor cycle',
    subjectId: 'membrane-transport',
    category: '细胞器膜转运',
    definition:
      '过氧化物酶体的蛋白输入范式：携 PTS1（C 端 SKL 基序）或 PTS2 信号的蛋白先折叠好（触酶四聚体整队入关），由可溶性受体 Pex5/Pex7 携带靠坞、经对接复合体塞入膜，Pex5 单体泛素化后被 AAA 马达拽回循环再用。与 ER 的共翻译易位、线粒体的解折叠输入并列为「蛋白怎么进膜封闭区室」的三个演化答案；Pex 基因突变酿成 Zellweger 谱病。',
  },
  {
    id: 'g-464',
    term: '核孔复合体',
    english: 'nuclear pore complex (NPC)',
    subjectId: 'membrane-transport',
    category: '细胞器膜转运',
    definition:
      '核被膜上逾 100 MDa 的八辐轮盘（哺乳类约 30 种核孔蛋白拼成，每核数百至数千拷贝），细胞里最大的蛋白机器之一。选择性来自辐条与中央栓上成百上千份 FG 重复无序蛋白铺成的筛网：约 40 kDa 以下小蛋白被动漏过，大货物由 importin/exportin 受体牵引「跳岛」通行，方向性由 Ran-GTP 梯度把关（核内 RCC1 置换 GTP、胞质 RanGAP 水解回 GDP）——「通道—载体—泵」三分法的巨型复现。',
  },
]
