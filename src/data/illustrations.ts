// ============================================================
// BioScholar 教材插图库
// 按小节挂载配图：key 为 sectionId，正文渲染时自动插入 H2 边界
// 图片为统一风格的教科书级科学示意插画（AI 生成，经内容审校定位）
// 图注采用学术严谨的中文描述
// ============================================================
import type { Illustration, SubjectId } from '@/lib/types'

/** 学科封面图（学科中心卡片 / 阅读器用） */
export const subjectCovers: Record<SubjectId, string> = {
  biochemistry: '/images/bio/covers/cover-biochemistry.png',
  'molecular-biology': '/images/bio/covers/cover-molecular-biology.png',
  'cell-biology': '/images/bio/covers/cover-cell-biology.png',
  biophysics: '/images/bio/covers/cover-biophysics.png',
}

/** 仪表盘主视觉横幅 */
export const heroImage = '/images/bio/covers/hero-bioscience.png'

const AI_CREDIT = 'AI 绘制示意图'

export const illustrations: Record<string, Illustration[]> = {
  // ==================== 生物化学 ====================
  'biochemistry-ch2-s3': [
    {
      src: '/images/bio/biochemistry/lipid-bilayer.png',
      caption:
        '生物膜的流动镶嵌模型：磷脂双分子层构成膜的基本骨架，极性头部朝向膜两侧的水相，疏水脂肪酸尾部相互嵌合于膜内部；胆固醇与整合蛋白（跨膜蛋白）、外周蛋白镶嵌分布，膜蛋白与膜脂均可进行侧向移动。',
      credit: AI_CREDIT,
    },
  ],
  'biochemistry-ch4-s1': [
    {
      src: '/images/bio/biochemistry/protein-structure.png',
      caption:
        '蛋白质的两种基本二级结构：α-螺旋为右手螺旋，螺距 0.54 nm，每圈 3.6 个氨基酸残基，由主链 CO 与第 n+4 位残基的 NH 之间形成的氢键（沿螺旋轴取向）维系；β-折叠由相邻肽段之间的氢键维系，肽链呈锯齿状（pleated）延展，分平行式与反平行式两类。',
      credit: AI_CREDIT,
    },
  ],
  'biochemistry-ch5-s2': [
    {
      src: '/images/bio/biochemistry/enzyme-substrate.png',
      caption:
        '酶—底物结合的诱导契合（induced fit）模型：底物（分子较小者）接近酶时，酶活性中心的构象发生诱导性改变，催化基团与结合基团随之调整到与底物精确互补的位置；催化完成后产物释出，酶恢复游离构象，可再次结合底物。',
      credit: AI_CREDIT,
    },
  ],
  'biochemistry-ch7-s2': [
    {
      src: '/images/bio/molecular-biology/dna-helix.png',
      caption:
        'B 型 DNA 双螺旋结构模型：两条反向平行（antiparallel）的多核苷酸链围绕同一假想轴右手缠绕，脱氧核糖—磷酸骨架位于外侧，碱基对 A=T（2 个氢键）与 G≡C（3 个氢键）堆叠于内侧，螺距约 3.4 nm，每圈 10 bp，交替出现大沟与小沟。',
      credit: AI_CREDIT,
    },
  ],
  'biochemistry-ch8-s3': [
    {
      src: '/images/bio/biochemistry/atp-synthase.png',
      caption:
        'ATP 合酶（复合体Ⅴ）旋转催化机制：F₀ 部分嵌于线粒体内膜，构成跨膜质子通道；H⁺ 顺电化学梯度回流推动 c 环与 γ 中央轴旋转，带动 F₁ 头部（α₃β₃ 六聚体）三个催化位点依"疏松 L→紧密 T→开放 O"次序循环变构，按结合变化机制合成 ATP——每转一周约释放 3 分子 ATP。',
      credit: AI_CREDIT,
    },
  ],
  'biochemistry-ch9-s1': [
    {
      src: '/images/bio/biochemistry/glycolysis.png',
      caption:
        '糖酵解（glycolysis）途径总览：1 分子葡萄糖经 10 步酶促反应在胞质中分解为 2 分子丙酮酸。前 5 步为耗能的"投入阶段"（己糖激酶与磷酸果糖激酶各消耗 1 ATP），后 5 步为放能的"产出阶段"（2 次底物水平磷酸化共生成 4 ATP，并还原 2 分子 NAD⁺ 为 NADH），净得 2 ATP。',
      credit: AI_CREDIT,
    },
  ],
  'biochemistry-ch9-s2': [
    {
      src: '/images/bio/biochemistry/tca-cycle.png',
      caption:
        '三羧酸循环（Krebs 循环）：乙酰 CoA 与草酰乙酸经柠檬酸合酶缩合为柠檬酸，经 8 步酶促反应逐步氧化脱羧，重新生成草酰乙酸。一轮循环净得 3 NADH、1 FADH₂、1 GTP（底物水平磷酸化），释放 2 分子 CO₂；其中异柠檬酸脱氢酶与 α-酮戊二酸脱氢酶复合体为关键调节步骤。',
      credit: AI_CREDIT,
    },
  ],

  // ==================== 分子生物学 ====================
  'molecular-biology-ch2-s4': [
    {
      src: '/images/bio/molecular-biology/replication-fork.png',
      caption:
        '复制体（replisome）与半不连续复制：解旋酶在复制叉处解开亲代双链，SSB 维持单链状态；前导链沿 5′→3′ 方向随复制叉推进连续合成；后随链模板被"环出"，指导合成短的冈崎片段（原核约 1000 nt），DNA polⅢ 催化延伸、polⅠ 切除 RNA 引物并填补缺口，最后由 DNA 连接酶封口。',
      credit: AI_CREDIT,
    },
  ],
  'molecular-biology-ch4-s2': [
    {
      src: '/images/bio/molecular-biology/transcription.png',
      caption:
        '原核转录的延伸阶段：RNA 聚合酶全酶（σ 因子已在起始完成后释放）沿模板链 3′→5′ 方向移动，转录泡内约 12–14 bp 的 DNA 解旋区维持开放，RNA 以 5′→3′ 方向逐核苷酸聚合，新生 RNA 链与模板形成约 8 bp 的 RNA–DNA 杂合区后从酶分子顶部穿出。',
      credit: AI_CREDIT,
    },
  ],
  'molecular-biology-ch6-s4': [
    {
      src: '/images/bio/molecular-biology/translation.png',
      caption:
        '核糖体三元结构与翻译延伸循环：mRNA 结合于大小亚基之间的通道；A 位（氨酰位）接纳氨酰-tRNA，P 位（肽酰位）携带肽酰-tRNA，转肽反应将 P 位肽链转移到 A 位氨基酸上，空载 tRNA 经 E 位（出口位）离去；延长中的多肽链经出口通道穿出核糖体。',
      credit: AI_CREDIT,
    },
  ],
  'molecular-biology-ch7-s1': [
    {
      src: '/images/bio/molecular-biology/operon.png',
      caption:
        '乳糖操纵子（lac operon）负调控模型：调节基因 I 表达的阻遏蛋白四聚体结合于操纵基因 O，阻挡 RNA 聚合酶从启动子 P 起始转录结构基因（lacZ/Y/A）；诱导物别乳糖（乳糖的异构体）与阻遏蛋白结合使其变构脱离 O 位点，转录得以开启。',
      credit: AI_CREDIT,
    },
  ],
  'molecular-biology-ch11-s2': [
    {
      src: '/images/bio/molecular-biology/crispr.png',
      caption:
        'CRISPR-Cas9 系统的靶向切割机制：向导 RNA（sgRNA，由 crRNA 与 tracrRNA 融合而来）与 Cas9 核酸酶形成复合物，扫描 dsDNA 中与 PAM（5′-NGG-3′）相邻的序列，解开双链后 sgRNA 的间隔序列与靶标链互补配对形成 R 环，Cas9 的 HNH 与 RuvC 样结构域分别在两条链上产生切割，形成平末端双链断裂（DSB）。',
      credit: AI_CREDIT,
    },
  ],

  // ==================== 细胞生物学 ====================
  'cell-biology-ch1-s2': [
    {
      src: '/images/bio/cell-biology/cell-anatomy.png',
      caption:
        '典型的动物细胞（真核细胞）结构总览：以双层核被膜包裹、含核仁的细胞核为中心；细胞质中分布线粒体（产能）、粗面与滑面内质网、高尔基体（加工分选）、溶酶体（消化）等膜性细胞器，以及核糖体、中心体与细胞骨架等非膜性结构。',
      credit: AI_CREDIT,
    },
  ],
  'cell-biology-ch4-s2': [
    {
      src: '/images/bio/cell-biology/secretory-pathway.png',
      caption:
        '蛋白质分泌途径：分泌蛋白在粗面内质网（RER）膜旁核糖体上合成并共翻译转入内质网腔，经折叠与 N-连接糖基化修饰后由 COPⅡ 包被小泡运输至高尔基体，在高尔基体顺面→反面完成进一步加工与分选，最终由分泌小泡运送至细胞膜，经胞吐作用外排。',
      credit: AI_CREDIT,
    },
  ],
  'cell-biology-ch5-s1': [
    {
      src: '/images/bio/cell-biology/mitochondrion.png',
      caption:
        '线粒体的超微结构：外膜平滑、含孔蛋白通透性较高；内膜向基质内折叠形成嵴（cristae），其上分布电子传递链复合体与 ATP 合酶；嵴间基质含三羧酸循环酶系、mtDNA、核糖体等——线粒体是细胞氧化磷酸化与能量转换的核心场所。',
      credit: AI_CREDIT,
    },
  ],
  'cell-biology-ch6-s1': [
    {
      src: '/images/bio/cell-biology/cytoskeleton.png',
      caption:
        '细胞骨架的三类蛋白纤维网络：微管由 α/β 微管蛋白异二聚体组装成的中空管（外径约 25 nm），自中心体向外放射；中间丝（约 10 nm，如波形蛋白）构成抗张力网络；微丝（肌动蛋白纤维，直径约 7 nm）富集于细胞皮层，三者协同维持细胞形态与运动。',
      credit: AI_CREDIT,
    },
  ],
  'cell-biology-ch10-s4': [
    {
      src: '/images/bio/cell-biology/mitosis.png',
      caption:
        '有丝分裂各时相：前期——染色质凝缩、纺锤体自中心体装配、核膜崩解；中期——染色体（含动粒）排列于赤道板；后期——姐妹染色单体着丝粒分离，分别向两极移动；末期——子核核膜重建、染色体去凝缩；随后胞质分裂（收缩环形成分裂沟）将胞质一分为二。',
      credit: AI_CREDIT,
    },
  ],
  'cell-biology-ch12-s1': [
    {
      src: '/images/bio/cell-biology/apoptosis.png',
      caption:
        '细胞凋亡的形态学演变（自左至右）：细胞皱缩、体积缩小且变圆；细胞膜起泡（blebbing）但保持完整；染色质凝缩并边缘化、核碎裂；胞膜内陷分割形成凋亡小体，内含完整细胞器，被邻近吞噬细胞识别清除——全过程不泄漏内容物、不引发炎症，与坏死形成鲜明对照。',
      credit: AI_CREDIT,
    },
  ],

  // ==================== 生物物理学 ====================
  'biophysics-ch2-s2': [
    {
      src: '/images/bio/biophysics/folding-funnel.png',
      caption:
        '蛋白质折叠的能量景观（折叠漏斗）：漏斗口代表构象熵极大的变性态系综，随自由能下降可用构象数递减；粗糙表面上遍布局部极小值（动力学陷阱，对应熔球态等中间体），需要越过过渡态能垒；漏斗底部唯一的深井即天然态——全局自由能极小点。漏斗的拓扑决定了不同蛋白折叠速率可相差数个数量级。',
      credit: AI_CREDIT,
    },
  ],
  'biophysics-ch4-s1': [
    {
      src: '/images/bio/biophysics/kinesin.png',
      caption:
        '驱动蛋白-1（kinesin-1）沿微管的定向行走：马达同源二聚体的两个球状头部交替与微管结合位点（间距 8 nm）结合，经 ATP 水解驱动的构象变化实现"手拉手"（hand-over-hand）步进，每次跨步移动 8 nm；茎部呈卷曲螺旋摆动，末端扇形轻链域结合货物囊泡。',
      credit: AI_CREDIT,
    },
  ],
  'biophysics-ch6-s3': [
    {
      src: '/images/bio/biophysics/single-molecule.png',
      caption:
        '全内反射荧光显微术（TIRF）原理：激光以大于临界角的入射角射向玻片—溶液界面发生全内反射，在样品侧产生约 100–200 nm 深度的隐失场（evanescent field），只激发贴近玻片的荧光分子，大幅消除背景噪声，使单个荧光标记分子呈现为衍射受限的荧光斑点（艾里斑），实现单分子动态示踪。',
      credit: AI_CREDIT,
    },
  ],
  'biophysics-ch7-s1': [
    {
      src: '/images/bio/biophysics/membrane-potential.png',
      caption:
        '静息膜电位的离子基础：Na⁺/K⁺-ATP 酶每水解 1 分子 ATP 泵出 3 个 Na⁺、泵入 2 个 K⁺（生电性泵）；同时膜对 K⁺ 具有较高的本底通透性，K⁺ 经漏通道外流，形成膜内侧负电荷积累——两者叠加建立约 −70 mV 的"外正内负"静息电位，接近 K⁺ 的 Nernst 平衡电位。',
      credit: AI_CREDIT,
    },
  ],
  'biophysics-ch8-s1': [
    {
      src: '/images/bio/biophysics/ion-channel.png',
      caption:
        '钾通道的选择性过滤（selectivity filter）机制（KcsA 结构启示）：主链羰基氧沿滤器排列成 4 个串联的氧原子笼，恰好剥离 K⁺ 的水化层并以等价配位补偿其结合能，K⁺ 可"裸奔"通过；而 Na⁺ 半径过小，无法与氧笼形成稳定配位（静电补偿不足），去水化代价无法弥补——故通道对 K⁺ 的选择性较 Na⁺ 高约 10⁴ 倍。',
      credit: AI_CREDIT,
    },
  ],
}

/** 获取某小节的配图（无配图返回空数组） */
export function getIllustrations(sectionId: string): Illustration[] {
  return illustrations[sectionId] ?? []
}
