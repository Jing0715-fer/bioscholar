// ============================================================
// BioScholar 免疫学测验题库 - 批次 A3（第 8–9 章）
// 覆盖 2 章，每章 5 题，共 10 题（q-immunology-31 ~ q-immunology-40）
// 题型：single 7 / truefalse 2 / multiple 1
// 难度：1（基础识记）3 / 2（理解应用）5 / 3（综合分析）2
// 依据：曹雪涛《医学免疫学》（第4版）、周光炎《免疫学原理》、
// Janeway《Immunobiology》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

// 注：immunology 为本批次新增学科，主体 SubjectId 联合类型尚未收录该 id；
// 此处以双重断言保持本文件类型自洽，待类型联合扩展后可直接改回字面量。
const IMMUNOLOGY = 'immunology' as unknown as QuizQuestion['subjectId']

export const immunologyQuizA3: QuizQuestion[] = [
  // ================= 第 8 章 MHC 与抗原提呈（q-immunology-31 ~ 35） =================
  {
    id: 'q-immunology-31',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch8',
    type: 'single',
    question: '人类 HLA 复合体（人类 MHC）在染色体上的定位是：',
    options: [
      '第 6 号染色体短臂 6p21.3',
      '第 15 号染色体长臂',
      '第 2 号染色体短臂',
      '第 17 号染色体长臂',
    ],
    answer: 0,
    explanation:
      '人类 MHC 即 HLA 复合体，定位于第 6 号染色体短臂 6p21.3，跨越约 3600 kb，含 200 余个基因座位，是人体多态性最强的区段之一。第 15 号染色体是干扰项——它编码的是 MHC I 类分子的轻链 β2 微球蛋白，而非 HLA 复合体本身；后者由位于 HLA I 类区的重链基因与 15 号染色体的 β2m 基因配合产物共同组装，故选 A。',
    difficulty: 1,
  },
  {
    id: 'q-immunology-32',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch8',
    type: 'single',
    question: '关于 MHC I 类与 II 类分子的比较，下列叙述错误的是：',
    options: [
      'I 类分子由重链与 β2 微球蛋白非共价结合组成，II 类分子为 α/β 异二聚体',
      'I 类分子肽结合槽两端闭合，一般结合 8–10 个氨基酸的肽',
      'II 类分子肽结合槽两端开放，一般结合 13–17 个氨基酸的肽',
      'I 类分子与 CD4 共受体结合，II 类分子与 CD8 共受体结合',
    ],
    answer: 3,
    explanation:
      '共受体匹配恰好相反：CD8 识别 MHC I 类分子保守的 α3 结构域，CD4 识别 II 类分子近膜侧的 α2/β2 结构域，由此锁定 CD8⁺ T 应答 I 类提呈、CD4⁺ T 应答 II 类提呈的分工，D 项张冠李戴。其余三项均为两类分子结构的标准对照：I 类为重链加 β2m、槽两端闭合装 8–10 肽；II 类为 α/β 异二聚体、槽两端开放装 13–17 肽。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-33',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch8',
    type: 'truefalse',
    question:
      '由于 HLA 复合体内基因紧密连锁、区内重组率很低，亲代以单元型为单位将 HLA 等位基因整体传递给子代；据此同胞间两条单元型完全相同的概率约为四分之一。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。同一条染色体上 HLA 各座位等位基因的组合即单元型；因紧密连锁，单元型作为整体遗传，子代两条单元型分别来自父母。按孟德尔分离推算，同胞间获完全相同两条单元型的概率为四分之一、完全不同亦为四分之一、共享一条为二分之一——这正是器官移植首先在同胞中筛查 HLA 全相合供者的遗传学依据。',
    difficulty: 1,
  },
  {
    id: 'q-immunology-34',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch8',
    type: 'single',
    question: '巨细胞病毒（CMV）蛋白 US6 逃避 MHC I 类提呈途径的分子策略是：',
    options: [
      '自内质网腔面结合 TAP 异二聚体，阻断 ATP 水解偶联的肽转运',
      '在胞浆侧竞争结合蛋白酶体底物，抑制蛋白降解',
      '催化 MHC I 类分子重链去泛素化并促其滞留内质网',
      '封闭 CD8 分子与 I 类分子 α3 结构域的结合位点',
    ],
    answer: 0,
    explanation:
      'US6 自内质网腔侧结合 TAP1/TAP2 异二聚体，阻断 ATP 水解驱动的肽向内质网腔的转运，使新合成 I 类分子无货可装、细胞表面提呈量骤减，从而逃避 CTL 识别。在胞浆侧封堵 TAP 底物口袋的是单纯疱疹病毒的 ICP47；促使重链「踢出」内质网降解的是 CMV 的 US2 与 US11——不同病毒对同一条流水线的不同环节各有打击方案，恰从反面印证该途径的关键地位，故选 A。',
    difficulty: 3,
  },
  {
    id: 'q-immunology-35',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch8',
    type: 'single',
    question: '在外源性抗原提呈途径中，HLA-DM 分子的核心作用是：',
    options: [
      '在内质网内促进 II 类分子与不变链的组装成九聚体',
      '在 MHC II 类腔室中催化 CLIP 与外源性抗原肽的交换并进行肽编辑',
      '将装载完成的 II 类分子从内体转运至细胞表面',
      '降解不变链使其在槽内仅剩 CLIP 片段',
    ],
    answer: 1,
    explanation:
      '组织蛋白酶降解不变链后残余的 CLIP 仍占据 II 类分子肽结合槽；HLA-DM 作为结构与 II 类相似的肽交换催化剂（自身不结合肽），在 MIIC 中撬开凹槽促成 CLIP 解离、稳定空载 II 类分子直至合适外源肽就位，并对低亲和力肽反复替换择优，即肽编辑。降解 Ii 留下 CLIP 的是组织蛋白酶（D 项职能错置），组装九聚体发生于内质网且非 DM 职责，故选 B。',
    difficulty: 2,
  },
  // ================= 第 9 章 T 淋巴细胞（q-immunology-36 ~ 40） =================
  {
    id: 'q-immunology-36',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch9',
    type: 'single',
    question: '一个完整的 TCR-CD3 复合体（含一条 TCR αβ 异二聚体）所含 ITAM 基序的总数是：',
    options: ['3 个', '6 个', '10 个', '20 个'],
    answer: 2,
    explanation:
      'TCR-CD3 复合体由 TCR αβ、CD3 γε、CD3 δε 与 ζζ 同二聚体共八条链组装：CD3 γ、δ、ε 各含 1 个 ITAM（ε 出现两次共 2 个），ζ 链每条含 3 个 ITAM、ζζ 合计 6 个——全复合体共 10 个 ITAM。多位点计数使 TCR 得以对微弱且短暂的 pMHC 识别进行串联磷酸化放大与甄别（动力校对），这正是 T 细胞以低亲和力识别换取高敏感性的分子基础，故选 C。',
    difficulty: 1,
  },
  {
    id: 'q-immunology-37',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch9',
    type: 'truefalse',
    question:
      '在胸腺发育中，AIRE 基因在胸腺皮质上皮细胞中驱动组织特异性抗原的「异位」表达，从而提高阳性选择的效率。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误有二：其一，AIRE 主要表达于胸腺髓质上皮细胞（mTEC）而非皮质上皮细胞；其二，其驱动的数百至数千种组织限制性抗原（如胰岛素、甲状腺球蛋白）的异位表达，是供阴性选择「审查」并删除高亲和力自身反应克隆、实现中枢耐受之用，与提高阳性选择效率无关。AIRE 突变导致 APS-1/APECED 自身免疫病，是该机制重要性的临床反证。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-38',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch9',
    type: 'single',
    question: '下列 T 细胞亚群与其主转录因子、特征细胞因子的对应关系中，错误的是：',
    options: [
      'Th1——T-bet——IFN-γ',
      'Th2——GATA3——IL-4',
      'Th17——RORγt——IL-17',
      'Tfh——Foxp3——IL-21',
    ],
    answer: 3,
    explanation:
      'Tfh 的主转录因子是 BCL6，由 IL-6 与 IL-21 经 STAT3 诱导，循 CXCR5 迁入 B 细胞滤泡辅导生发中心反应；Foxp3 属于调节性 T 细胞（Treg）的命脉因子，其突变致 Scurfy 小鼠与人类 IPEX 综合征。Th1/T-bet/IFN-γ、Th2/GATA3/IL-4、Th17/RORγt/IL-17 三组对应均正确，故仅 D 项连线错误。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-39',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch9',
    type: 'multiple',
    question: '关于 T 细胞活化与免疫突触，下列叙述正确的有：',
    options: [
      'TCR 与 pMHC 的亲和力较低，解离常数大致在 1–100 μmol/L 量级',
      '免疫突触外周 SMAC 由 LFA-1 与 ICAM 的黏附环构成，起稳定接触的作用',
      '仅有 TCR 识别的第一信号而缺乏 CD28-B7 第二信号时，T 细胞通常发生克隆失能',
      '免疫突触的形成与成熟不需要肌动蛋白骨架的重组与驱动',
      '慢性抗原持续刺激可使 T 细胞耗竭，表现为 PD-1 等检查点分子持续高表达',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      'A、B、C、E 均为教材标准结论：TCR-pMHC 的 Kd 约 1–100 μmol/L、比抗原-抗体结合低三至五个数量级；pSMAC 以 LFA-1-ICAM 黏附环稳定接触面；无第二信号的抗原刺激诱导克隆失能（IL-2 转录缺陷、再刺激无应答）；耗竭以 PD-1 持续高表达与效应功能阶梯式丧失为特征。D 项错误——突触的组装、分层与成熟恰由 talin 等接头蛋白与肌动蛋白流驱动，骨架解聚则突触瓦解。',
    difficulty: 3,
  },
  {
    id: 'q-immunology-40',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch9',
    type: 'single',
    question: '胸腺细胞发育中「β 选择」的直接意义是：',
    options: [
      '检验 TCR β 链是否功能重排成功，信号中止 β 座位进一步重排并推动细胞进入 DP 阶段',
      '删除与自身肽-MHC 高亲和力结合的克隆，实现中枢耐受',
      '赋予发育中的 T 细胞自身 MHC 限制性',
      '最终确定 CD4 与 CD8 的谱系定向',
    ],
    answer: 0,
    explanation:
      'β 链重排成功后与 pTα 组装成 pre-TCR，经 CD3 报告「β 可用」：中止 β 座位其余等位基因重排（等位基因排除）、驱动增殖、启动 α 重排并进入 CD4⁺CD8⁺ 双阳性阶段。B 项为阴性选择、C 项为阳性选择、D 项为阳性选择后期的谱系定向，各自发生于后续的不同环节，勿与本早期检查点混淆，故选 A。',
    difficulty: 2,
  },
]
