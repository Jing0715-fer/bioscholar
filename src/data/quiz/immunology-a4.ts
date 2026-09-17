// ============================================================
// BioScholar 免疫学测验题库 - 批次 A4（第 10–11 章）
// 覆盖 2 章，每章 5 题，共 10 题（q-immunology-41 ~ q-immunology-50）
// 题型：single 7 / truefalse 2 / multiple 1
// 难度：1（基础识记）3 / 2（理解应用）5 / 3（综合分析）2
// 依据：曹雪涛《医学免疫学》（第4版）、周光炎《免疫学原理》、
// Janeway《Immunobiology》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

// 注：immunology 为本批次新增学科，主体 SubjectId 联合类型尚未收录该 id；
// 此处以双重断言保持本文件类型自洽，待类型联合扩展后可直接改回字面量。
const IMMUNOLOGY = 'immunology' as unknown as QuizQuestion['subjectId']

export const immunologyQuizA4: QuizQuestion[] = [
  // ================= 第 10 章 B 淋巴细胞与体液免疫应答（q-immunology-41 ~ 45） =================
  {
    id: 'q-immunology-41',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch10',
    type: 'single',
    question: 'B 细胞在骨髓发育中，免疫球蛋白重链基因的 V-D-J 重排主要发生于：',
    options: [
      'pro-B 细胞阶段',
      'pre-B 细胞阶段',
      '未成熟 B 细胞阶段',
      '成熟 B 细胞阶段',
    ],
    answer: 0,
    explanation:
      'B 细胞发育遵循「先重链、后轻链」的重排时序：pro-B 阶段先完成重链 D 与 J 片段的连接、再完成 V 与 DJ 的连接；重排成功的 μ 重链与 λ5/VpreB 替代轻链组装 pre-BCR，细胞进入 pre-B 阶段并经检查点验证重链可用性；小 pre-B 细胞后期才重启轻链（先 κ 后 λ）重排，未成熟 B 细胞表达完整 mIgM，成熟 B 则停止一切重排并共表达 mIgD。故 V-D-J 重排是 pro-B 阶段的标志事件，选 A。',
    difficulty: 1,
  },
  {
    id: 'q-immunology-42',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch10',
    type: 'single',
    question: '关于 B 细胞共受体复合物 CD21-CD19-CD81 的叙述，正确的是：',
    options: [
      'CD21 即补体受体 2，其胞外区可结合补体活化片段 C3d',
      'CD19 的胞内区携带 ITAM 基序，是 BCR 信号的唯一来源',
      '该复合物与补体片段结合后会显著升高 B 细胞活化所需的抗原阈值',
      'EB 病毒经 CD81 进入 B 细胞，与 CD21 无关',
    ],
    answer: 0,
    explanation:
      'CD21 即补体受体 2（CR2），胞外区结合补体活化片段 C3d 或 C3dg；同一颗粒上 C3d 结合 CD21、抗原结合 BCR 时，CD19 长胞内尾被磷酸化并招募 PI3K，与 Igα/Igβ 的信号叠加放大，使活化所需抗原量降低至约千分之一——是降低而非升高阈值。BCR 信号的来源是 Igα/Igβ 各自的 ITAM，CD19 胞内为酪氨酸残基而非 ITAM 基序；EB 病毒正是经包膜糖蛋白 gp350 结合 CD21 进入 B 细胞。故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-43',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch10',
    type: 'single',
    question: '活化诱导的胞嘧啶脱氨酶（AID）在生发中心 B 细胞中催化的反应及其两项经典产物是：',
    options: [
      '将 DNA 中的胞嘧啶脱氨为尿嘧啶，介导体细胞高频突变与类别转换重组',
      '将 DNA 中的腺嘌呤脱氨为次黄嘌呤，介导亲和力成熟与等位排斥',
      '将 RNA 中的胞嘧啶脱氨为尿嘧啶，介导轻链受体编辑与克隆删除',
      '直接磷酸化 ITAM 基序，介导 BCR 信号放大与浆细胞分化',
    ],
    answer: 0,
    explanation:
      'AID 作用于 DNA 而非 RNA：把胞嘧啶脱氨为尿嘧啶、制造 U:G 错配，再经错配修复与碱基切除修复「将错就错」——靶向重排后 V 区时产生体细胞高频突变、服务于亲和力成熟；靶向各恒定区上游 S 区时制造双链断裂对接，实现类别转换重组。AID 突变者 SHM 与 CSR 俱废，临床上表现为高 IgM 综合征。受体编辑由 RAG 介导且发生于骨髓，等位排斥亦属 RAG 重排层面的事务，均与 AID 无关，故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-44',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch10',
    type: 'truefalse',
    question:
      '生发中心中，体细胞高频突变主要发生于亮区的中央细胞，而中央母细胞在暗区接受滤泡树突状细胞与 Tfh 的拣选。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '极化方向恰好相反：暗区聚集快速增殖的中央母细胞（细胞周期可短至 6–12 小时），AID 在此高表达、执行体细胞高频突变与类别转换的「变异」工序；亮区的中央细胞则陈列于滤泡树突状细胞的抗原货架上，接受抗原亲和力拣选，并争取 Tfh 的 CD40L-CD40 共刺激与 IL-21 辅导，完成「选择」工序。细胞循 CXCR4-CXCL12 与 CXCR5-CXCL13 梯度在两区间循环往返，「暗区生变、亮区受审」交替迭代方成就亲和力成熟，故本题叙述错误。',
    difficulty: 3,
  },
  {
    id: 'q-immunology-45',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch10',
    type: 'single',
    question: '初次免疫应答与再次免疫应答相比较，下列数值符合教材口径的是：',
    options: [
      '初次应答潜伏期约 5–10 天，再次应答约 1–3 天',
      '初次应答潜伏期约 1–3 天，再次应答约 5–10 天',
      '初次与再次应答潜伏期均约 5–10 天，仅抗体类别不同',
      '再次应答潜伏期较初次延长，且早期仍以 IgM 为主',
    ],
    answer: 0,
    explanation:
      '初次应答须从初始 B 细胞活化、克隆扩增到生发中心加工全程走完，潜伏期约 5–10 天甚至更长，抗体以 IgM 起步、平台低而亲和力低；再次应答由记忆 B 与记忆 T 承担，潜伏期缩至约 1–3 天，迅速以 IgG 为主、平台高数倍至数十倍且亲和力显著升高、维持更久。记忆群体的「存量」正是基础-加强免疫程序的细胞学基础，故选 A。',
    difficulty: 1,
  },
  // ================= 第 11 章 免疫耐受与免疫调节（q-immunology-46 ~ 50） =================
  {
    id: 'q-immunology-46',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch11',
    type: 'single',
    question: 'AIRE 基因突变所致的 APS-1/APECED 综合征，其免疫学发病环节在于：',
    options: [
      'mTEC 不能异位表达组织特异性抗原，相应自身反应性 T 细胞逃过胸腺阴性选择',
      '胸腺皮质上皮细胞无法提呈自身肽，阳性选择废止致 T 细胞匮乏',
      '骨髓 pre-BCR 检查点失效，自身反应性 B 细胞大量输出',
      '外周 T 细胞 Fas 表达缺陷，活化克隆不能经 AICD 收缩',
    ],
    answer: 0,
    explanation:
      'AIRE 是驱动髓质上皮细胞（mTEC）异位表达数百上千种组织特异性蛋白的转录调节因子，其意义是把全身抗原清单铺陈于胸腺、供阴性选择删除高亲和力自身反应克隆。AIRE 突变使「考卷缺题」，识别胰岛素、甲状旁腺等组织抗原的 T 细胞漏网出胸腺、在外周行凶，临床上表现为甲状旁腺功能减退、肾上腺皮质功能不全与皮肤黏膜念珠菌病等。B 项描述的是阳性选择受损（致免疫缺陷而非自身免疫），C、D 分别对应 B 细胞发育障碍与 ALPS 的机制，故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-47',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch11',
    type: 'single',
    question: '人类自身免疫性淋巴细胞增殖综合征（ALPS）的主要分子缺陷是：',
    options: [
      'AIRE 基因突变致中枢耐受筛查失败',
      'Fas（CD95）介导的活化诱导的细胞死亡通路缺陷',
      'Foxp3 突变致调节性 T 细胞缺失',
      'IL-2 受体 γ 链突变致 T 细胞发育障碍',
    ],
    answer: 1,
    explanation:
      'ALPS 由 Fas 或其下游 FADD 等凋亡通路基因突变所致：反复受抗原刺激而高度活化的 T 细胞不能经 Fas-FasL 启动凋亡（即 AICD 失败），活化淋巴细胞持续堆积——脾大与淋巴结肿大、双阴性 T 细胞（CD4⁻CD8⁻）增多，并出现溶血性贫血、血小板减少等自身免疫血细胞减少，淋巴瘤风险亦显著升高。AIRE 与 Foxp3 的突变分别对应 APS-1/APECED 与 IPEX 综合征，IL-2 受体 γ 链缺陷则致重症联合免疫缺陷，均与 ALPS 无涉，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-48',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch11',
    type: 'truefalse',
    question:
      '免疫豁免部位（如眼前房）之所以「免受」免疫攻击，是因为该处完全没有免疫细胞进入，也不发生任何免疫应答。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '免疫豁免并非免疫空白，而是应答模式的定向偏置：豁免部位以血管与组织屏障限制免疫细胞进入，局部高表达 FasL 可杀伤擅入的活化 T 细胞，TGF-β 与吲哚胺 2,3-双加氧酶（IDO）介导的色氨酸耗竭构成代谢防御。前房接种抗原后经 ACAID 保留体液应答并诱导分泌 IL-10 的调节性 T 细胞，把炎症型应答改写为非炎症型；一旦屏障破坏（眼外伤），隔离抗原暴露于炎症环境，交感性眼炎等自身免疫炎症即可发生。本题「完全没有」的表述错误。',
    difficulty: 1,
  },
  {
    id: 'q-immunology-49',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch11',
    type: 'multiple',
    question: '调节性 T 细胞（Treg）执行免疫抑制时可采用的机制或介质包括：',
    options: [
      '分泌 IL-10 与 TGF-β，抑制抗原提呈细胞与效应 T 细胞',
      '分泌 IL-35（p35 与 EBI3 异二聚体）抑制效应 T 细胞增殖',
      '经高亲和力 CD25 掳夺局部 IL-2，剥夺效应细胞的生长信号',
      '经 CTLA-4 转胞吞掳走抗原提呈细胞表面的 CD80/CD86',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      'Treg 的抑制工具箱多兵种协同：IL-10 抑制抗原提呈细胞成熟与 IL-12 分泌、下调 MHC II 与共刺激分子；TGF-β 抑制增殖并诱导更多 iTreg 放大抑制回路；IL-35 由 p35 与 EBI3 组成，抑制效应 T 细胞增殖并诱导 iTr35 群体；高亲和力 CD25 使 Treg 抢占局部 IL-2，令依赖 IL-2 的效应 T 细胞「断粮」；高表达的 CTLA-4 经转胞吞清除抗原提呈细胞的 CD80/CD86，并留下 IDO 催化色氨酸耗竭的环境。四项均为 Treg 的经典抑制机制，故全选。',
    difficulty: 3,
  },
  {
    id: 'q-immunology-50',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch11',
    type: 'single',
    question: '关于胆碱能抗炎通路，下列叙述正确的是：',
    options: [
      '迷走神经末梢释放的乙酰胆碱经巨噬细胞表面 α7 烟碱型受体抑制 TNF 等促炎因子合成',
      '交感神经末梢释放的乙酰胆碱经 β2 肾上腺素能受体抑制炎症',
      '炎症信号经传入神经上传后，中枢直接释放皮质醇进入脾脏抑制免疫细胞',
      '该通路经糖皮质激素受体转导信号，实现 PGE2 介导的发热抑制',
    ],
    answer: 0,
    explanation:
      '胆碱能抗炎通路是一条免疫反射弧：组织炎症信号经迷走神经感觉纤维上传脑干，整合后经迷走运动纤维下行，末梢释放的乙酰胆碱结合巨噬细胞等免疫细胞表面的 α7 烟碱型乙酰胆碱受体，抑制 NF-κB 与 JAK-STAT 通路、压制 TNF 等促炎因子合成；脾内的「最后一段」由脾神经-乙酰胆碱能 T 细胞接力完成。乙酰胆碱并非交感递质（交感为去甲肾上腺素，经 β2 受体作用），皮质醇属 HPA 轴的内分泌通路，PGE2 介导的发热及非甾体抗炎药退热与本通路无关，故选 A。',
    difficulty: 2,
  },
]
