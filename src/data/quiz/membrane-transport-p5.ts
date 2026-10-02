// ============================================================
// BioScholar 膜蛋白与物质转运测验题库 - 批次 P5（第 9–10 章）
// 10 题（q-membrane-transport-41 ~ q-membrane-transport-50），每章 5 题，由内容代理 46-b5 编写
// 题型：single 6 / truefalse 2 / multiple 2；难度 1:2:3 = 2:5:3
// 依据：Stein & Litton《Channels, Carriers, and Pumps》第2版、Alberts《Molecular Biology of the Cell》第7版、
// Taiz & Zeiger《Plant Physiology》第6版及本学科第 9–10 章教材正文
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const membraneTransportQuizP5: QuizQuestion[] = [
  // ================= 第 9 章 ABC 转运体：ATP 直接驱动的多面手（q-membrane-transport-41 ~ 45） =================
  {
    id: 'q-membrane-transport-41',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch9',
    type: 'single',
    question: '关于 ABC 转运体与 P 型 ATPase 这两类「直接利用 ATP」的转运机器，下列叙述正确的是：',
    options: [
      '两者都通过形成磷酰化中间体驱动构象变化，只是磷酸化位点不同',
      'ABC 转运体的两个 NBD 各自独立水解 ATP，彼此在构象上互不影响',
      'ABC 转运体的两个 NBD 二聚成「三明治」夹住两分子 ATP，靠结合、二聚化、水解、解离的循环驱动 TMD 交替通路，全程不经共价中间体',
      'ABC 转运体每转运一分子底物恰好消耗一分子 ATP，与离子泵同样精打细算',
    ],
    answer: 2,
    explanation:
      'P 型 ATPase 把 ATP 的 γ 磷酸共价转移到自身天冬氨酸形成 E1-P 中间体，靠磷酸化与脱落推动构象轮转，底物限于离子；ABC 完全不经共价中间体：两个 NBD 面对面二聚，一侧 Walker A/P 环与对侧 LSGGQ 签名基序互嵌，像三明治一样夹住两分子 ATP，水解与解离经耦联螺旋把 TMD 通路在内开口与外开口间翻转；多数 ABC 每转运一分子底物约耗 2 ATP，计量远比离子泵松。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-42',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch9',
    type: 'truefalse',
    question:
      'CFTR（ABCC7）是目前已知唯一演化为离子通道的 ABC 家族成员，其门控需要 R 域经 cAMP-PKA 通路磷酸化「松绑」后、再由 ATP 驱动 NBD 二聚化开门；最常见的 ΔF508 突变破坏蛋白折叠，使其被内质网的 ERAD 途径降解。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。CFTR 保留 NBD 发动机却在 TMD 上开出 Cl⁻ 与 HCO₃⁻ 通路，不再搬运大分子，是家族中唯一的通道型成员；R 域多位点磷酸化是开启前提，去磷酸化时 R 域堵住通道。ΔF508（NBD1 第 508 位苯丙氨酸缺失，约占异常等位基因七成）造成折叠缺陷，突变蛋白被内质网质量控制系统识别并送入 ERAD 降解，分泌黏液因缺盐而黏稠，即囊性纤维化的分子根源。',
    difficulty: 1,
  },
  {
    id: 'q-membrane-transport-43',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch9',
    type: 'single',
    question: '血脑屏障毛细血管内皮细胞腔面膜高表达 P-糖蛋白（ABCB1）。关于它对该处药物分布的作用，下列判断正确的是：',
    options: [
      '在内皮细胞内代谢降解药物，降低其稳定性',
      '把药物从血液侧主动摄取进入脑组织，提高脑内药物浓度',
      '维持内皮细胞的离子稳态，与药物转运无关',
      '把渗入内皮细胞的疏水药物泵回血管腔，限制药物进入脑组织，是中枢药理的守门人',
    ],
    answer: 3,
    explanation:
      'P-gp 是 ATP 驱动的输出体，底物为地高辛、长春碱等在脂膜中富集的疏水阳离子，从膜的胞质小叶「舀」出后甩向细胞外。血脑屏障内皮腔面膜高表达 P-gp，把渗入的药物泵回血液，脑内药物浓度因此远低于血浆——这是许多中枢药物难以成药的分子原因，也是给药时需考虑的屏障因素；维拉帕米等抑制剂可竞争性削弱这道闸门。它既不代谢药物，也不促进药物入脑。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-44',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch9',
    type: 'multiple',
    question: '关于拟南芥 ABC 转运体的功能，下列叙述正确的有：',
    options: [
      'ABCB1/ABCB19 定位于质膜，介导生长素 IAA 的极性外排，与 PIN 载体协同维持长距离运输',
      'ABCG37/PDR9 外排生长素前体 IBA，参与侧根发生的位置信号',
      'ABCG11/CER5 外运角质层蜡质组分，构建表皮的防水屏障',
      'ABCC1/2 定位于质膜，把镉、砷等重金属阳离子直接泵出细胞外排出体外',
    ],
    answer: [0, 1, 2],
    explanation:
      'ABCB1/19 提供不依赖 PIN 定位的稳定背景外流，与 PIN、AUX1 共同撑起生长素极性运输；ABCG37 外排 IBA，IBA 在侧根起始位点氧化转回 IAA 起空间信号作用；ABCG11/CER5 把超长链脂肪酸衍生的蜡质外运到角质层，突变体茎面发亮、失水加速——三项皆对。D 项错在定位与方向：ABCC1/2 在液泡膜上把谷胱甘肽结合物与 PC-金属复合物隔离进液泡，植物没有排泄器官，无从「排出体外」。',
    difficulty: 3,
  },
  {
    id: 'q-membrane-transport-45',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch9',
    type: 'single',
    question: '关于 ABC 转运体的分子组装方式，下列叙述正确的是：',
    options: [
      '所有 ABC 转运体都是一条肽链依次串联 TMD-NBD-TMD-NBD 的全长蛋白',
      'TAP1 与 TAP2 各为半分子，必须异二聚体化后才能把蛋白酶体降解的抗原肽转运入内质网供 MHC I 类分子装载',
      '植物 ABCG 亚族全部是全长单体，不需要二聚化即可行使功能',
      'ABCE1 含有两个跨膜结构域，是典型的药物输出体',
    ],
    answer: 1,
    explanation:
      'ABC 组装分两型：全长型（如 P-gp）一条肽链自带 TMD1-NBD1-TMD2-NBD2；半分子型每条链只带一个 TMD 加一个 NBD，必须成对拼装——TAP1/TAP2 异二聚体把 8–10 氨基酸抗原肽送入内质网，植物 ABCG 多为半分子、同二聚或异二聚皆可。ABCE1（RLI）则完全丢失 TMD，只剩两个 NBD，转型为核糖体循环因子并参与抗病毒免疫，并非输出体。',
    difficulty: 2,
  },
  // ================= 第 10 章 钙与金属元素的转运（q-membrane-transport-46 ~ 50） =================
  {
    id: 'q-membrane-transport-46',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch10',
    type: 'single',
    question: '肝激素 hepcidin 调节全身铁稳态的核心机制是：',
    options: [
      '促进十二指肠 DMT1 对 Fe²⁺ 的吸收，增加铁的摄入',
      '促进铁蛋白水解释放储存铁，升高血清铁',
      '与铁外排蛋白 ferroportin 结合并促其内吞降解，关闭肠上皮与巨噬细胞的铁出口',
      '增加转铁蛋白的合成，提高血浆铁转运容量',
    ],
    answer: 2,
    explanation:
      'hepcidin 与 ferroportin 的胞外环结合，令后者泛素化、内吞并降解——肠上皮与巨噬细胞的铁出口随之关闭，血清铁下降，故被称为铁稳态总开关。其临床两面正好对应两类疾病：HFE 遗传性血色病 hepcidin 不足、ferroportin 畅通，肠道吸收失控致铁过载；慢性病贫血 hepcidin 升高、出口关闭，造成「有库存却用不了」的功能性缺铁。它并不直接作用于 DMT1、铁蛋白或转铁蛋白的合成。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-47',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch10',
    type: 'truefalse',
    question:
      '心肌缺血时 NCX 反向运行（Na⁺ 外流驱动 Ca²⁺ 内流）是心脏的保护性适应反应：通过增加胞内钙来增强缺血心肌的收缩力，有助于维持心输出量。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。正常生理下 NCX 以 3 Na⁺ 内流换 1 Ca²⁺ 外流，是心肌舒张期大容量钙清除的主力之一；缺血时 Na⁺ 积累与膜去极化使交换方向反转——Na⁺ 外流驱动 Ca²⁺ 内流——结果是钙超载、心肌挛缩与再灌注损伤，这正是缺血-再灌注危险期的分子机制之一。它是病理损害通路，不是保护性适应；「用增加钙来救缺血心肌」的推理混淆了代偿与损伤的界限。',
    difficulty: 1,
  },
  {
    id: 'q-membrane-transport-48',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch10',
    type: 'single',
    question: '水稻、小麦等禾草类植物在石灰性碱性土壤中获取铁的「策略 II」，其要点是：',
    options: [
      '根尖 FRO2 把 Fe³⁺ 还原为 Fe²⁺，再由 IRT1 通道吸收二价铁',
      '根系经 TOM1 外排麦根酸类植物铁载体螯合根际 Fe³⁺，再由 YS1/YSL 转运体把整个 Fe(III)-PS 螯合物摄入根细胞',
      '通过增加木质部导管的数量提高铁向地上部的运输能力',
      '依赖肝脏 hepcidin-ferroportin 轴关闭铁的外排，把铁锁在根部',
    ],
    answer: 1,
    explanation:
      '策略 II 三步走：合成麦根酸类植物铁载体（PS，对 Fe³⁺ 亲和力极高的六齿螯合剂）→ 经 TOM1 外排到根际 → 由 YS1/YSL 整分子摄入 Fe(III)-PS 复合物。PS 在碱性 pH 下依然高效，这是禾草在石灰性土壤上保持绿色、分泌量与耐性排序一致的原因。A 是双子叶的策略 I（FRO2 还原加 IRT1 吸收）；hepcidin 是动物激素，与植物无关；水稻则是兼用两策的著名例外。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-49',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch10',
    type: 'single',
    question: 'Menkes 综合征与 Wilson 病都源于 P1B 型铜泵突变，但表型几乎相反。二者的机制分别是：',
    options: [
      'ATP7A 突变使肠上皮无法把铜运出肠入血，全身进行性缺铜；ATP7B 突变使肝细胞无法经胆汁排铜，铜在肝、脑沉积过载',
      'ATP7A 突变使铜吸收过多致全身铜过载；ATP7B 突变使铜吸收过少致全身缺铜',
      '两者都是 CTR1 输入缺陷，只是发生的组织不同',
      '两者都是铜伴侣蛋白 ATOX1 的丢失，铜无法装载到任何酶上',
    ],
    answer: 0,
    explanation:
      'ATP7A 平时在高尔基体给酪氨酸酶等装铜，缺铜时迁移到肠上皮基底侧把铜运出肠、供应全身；其突变即 Menkes 综合征——铜出不了肠，全身缺铜，头发卷曲易断、神经退行。ATP7B 平时在高尔基体装铜蛋白，过量时迁移到胆小管膜把铜排入胆汁；其突变即 Wilson 病——胆汁排铜阻断，铜在肝、脑、角膜沉积，出现 Kayser-Fleischer 环。同一家族的两个成员守着相反方向的出口，突变表型恰好互补成一对教学经典。',
    difficulty: 3,
  },
  {
    id: 'q-membrane-transport-50',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch10',
    type: 'multiple',
    question: '与动物相比，植物应对镉、砷等重金属毒害的策略包括：',
    options: [
      '植物螯合肽合酶（PCS）被镉、砷翻译后激活，合成 (γ-Glu-Cys)n-Gly 螯合肽',
      'ABCC1/2 把 PC-Cd、PC-As 复合物转运入液泡隔离',
      '通过肾脏主动排泄重金属，把毒物排出体外',
      'CAX、MTP、NHX 等把金属阳离子装填进液泡「分子保险库」',
    ],
    answer: [0, 1, 3],
    explanation:
      '植物的解毒三步：PCS 遇镉砷被变构激活、酶法合成植物螯合肽（γ 肽键无法经核糖体编码，只能「遇毒现做」）；PC 抱住 Cd²⁺ 或 As(III) 形成 PC 复合物，经液泡膜 ABCC1/2 收押入液泡；CAX/MTP/NHX 则直接把金属阳离子装填进液泡。C 项是动物的方案——植物没有排泄器官，无法经肾排出毒物，只能区室化隔离或把污染随落叶、落果丢弃；「不能排泄的植物 vs 能排泄的动物」正是本节的核心分野。',
    difficulty: 3,
  },
]
