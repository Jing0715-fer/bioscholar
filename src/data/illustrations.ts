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
  'biochemistry-ch1-s1': [
    {
      src: '/images/bio/biochemistry/glucose-anomer.png',
      caption:
        'D-葡萄糖的环状结构与异头物：并环平面两侧的取向不同，形成 α-与 β-两种异头物（端基差向异构体）；两者在溶液中经开链式互变，即变旋现象。图中 Haworth 投影式旁给出更接近真实构象的椅式，可见 C1 位取代基的直立（axial）与平伏（equatorial）取向差异——β-D-吡喃葡萄糖因所有大基团均处于平伏位，是自然界最丰富的葡萄糖形式。',
      credit: AI_CREDIT,
    },
  ],
  'biochemistry-ch3-s1': [
    {
      src: '/images/bio/biochemistry/amino-acids.png',
      caption:
        '氨基酸的通用结构：α-碳原子分别连接氨基、羧基、氢原子与侧链 R 基。除甘氨酸（R = H）外其余 19 种均为 L-构型；侧链的化学性质决定分类：非极性（疏水）、不带电荷极性、酸性（含羧基，如 Asp/Glu）与碱性（含碱性基，如 Lys/Arg/His）——侧链的物理化学性质是决定蛋白质折叠、活性中心催化与功能的化学基础。',
      credit: AI_CREDIT,
    },
  ],
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
  'biochemistry-ch4-s4': [
    {
      src: '/images/bio/biochemistry/hemoglobin.png',
      caption:
        '血红蛋白（Hb）与肌红蛋白（Mb）的结构对比：Hb 为 α₂β₂ 四聚体（约 64 kDa），每个亚基的三级结构与单链的 Mb 高度相似，各含一个血红素辅基；Fe²⁺ 位于卟啉环平面中心，与 O₂ 可逆结合。Hb 四聚体呈四面体排列，亚基间盐键等非共价作用使其呈紧张（T）态——这是协同性氧结合（Hill 系数 ≈ 2.8）与别构调节的结构基础。',
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
  'biochemistry-ch5-s3': [
    {
      src: '/images/bio/biochemistry/michaelis-menten.png',
      caption:
        '米氏方程曲线：酶促反应初速度 v 随底物浓度 [S] 呈双曲线升高，逐渐逼近最大速度 Vmax；当 v = Vmax/2 时的底物浓度即米氏常数 Km。Km 反映酶与底物的亲和力（Km 越小亲和越强，近似等于 k₋₁+k₂/k₁），Vmax = k₂[E]t 定义转换数。该曲线体现“低 [S] 近似一级、高 [S] 达零级”的经典动力学行为。',
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
  'biochemistry-ch9-s5': [
    {
      src: '/images/bio/biochemistry/glycogen.png',
      caption:
        '糖原的多级分支结构：以位于核心的糖原蛋白（glycogenin）为引物，葡萄糖单位以 α(1→4) 糖苷键延伸，每隔 8–12 个残基由分支酶催化形成 α(1→6) 分支。分支带来两大优势：极大增加非还原端数量，使磷酸化酶与合成酶可同时在多个末端快速动员/合成；提高水溶性。一个外层分支链约含 13 个残基。',
      credit: AI_CREDIT,
    },
  ],
  'biochemistry-ch11-s2': [
    {
      src: '/images/bio/biochemistry/urea-cycle.png',
      caption:
        '尿素循环（鸟氨酸循环）：在线粒体基质中，NH₃（以氨基甲酰磷酸形式）与鸟氨酸缩合生成瓜氨酸，后者转运至胞质，与天冬氨酸结合为精氨酸代琥珀酸，裂解生成精氨酸并释放延胡索酸；精氨酸酶水解精氨酸重新生成鸟氨酸并释放尿素。每轮循环消耗 3 ATP（4 个高能磷酸键），将 2 个氮（氨基甲酰磷酸与天冬氨酸）转化为无毒的尿素排出。',
      credit: AI_CREDIT,
    },
  ],
  'biochemistry-ch8-s2': [
    {
      src: '/images/bio/biochemistry/etc-complexes.png',
      caption:
        '呼吸链（电子传递链）的四个复合物：复合体Ⅰ（NADH 脱氢酶，L 形）、复合体Ⅱ（琥珀酸脱氢酶）、复合体Ⅲ（细胞色素 bc₁）与复合体Ⅳ（细胞色素 c 氧化酶）嵌于线粒体内膜。NADH 与 FADH₂ 提供的高能电子经黄素辅基、铁硫中心与细胞色素等载体逐级传递，其中Ⅰ、Ⅲ、Ⅳ为质子泵，每传递一对电子分别向膜间隙泵出约 4、4、2 个 H⁺；脂溶性的泛醌（Q）与水溶性的细胞色素 c 作为移动载体在复合物间穿梭；电子最终传给 O₂ 生成水，同时在内膜两侧建立质子电化学梯度（质子驱动力）驱动 ATP 合酶。',
      credit: AI_CREDIT,
    },
  ],
  'biochemistry-ch9-s3': [
    {
      src: '/images/bio/biochemistry/pentose-phosphate.png',
      caption:
        '磷酸戊糖途径（PPP）：氧化阶段从 6-磷酸葡萄糖开始，经两次脱氢（6-磷酸葡萄糖脱氢酶与 6-磷酸葡萄糖酸脱氢酶）产生 2 NADPH 并释放 1 分子 CO₂，生成 5-磷酸核糖；非氧化阶段经转酮醇酶（转移二碳单位）与转醛醇酶（转移三碳单位）将磷酸糖重新排列，可与糖酵解中间产物（6-磷酸果糖、3-磷酸甘油醛）互通。该途径的核心意义在于提供 NADPH（还原性生物合成与抗氧化）与核糖-5-磷酸（核苷酸合成原料），而非产能。',
      credit: AI_CREDIT,
    },
  ],
  'biochemistry-ch10-s1': [
    {
      src: '/images/bio/biochemistry/beta-oxidation.png',
      caption:
        '脂肪酸的 β-氧化螺旋：活化后的脂酰 CoA 进入线粒体基质（经肉碱穿梭系统），每轮循环四步反应——FAD 介导的脱氢（生成 FADH₂）、水化、NAD⁺ 介导的再脱氢（生成 NADH）、硫解酶催化的硫解（thiolysis）——从羧基端切下一个乙酰 CoA，缩短两个碳原子的脂酰 CoA 重新进入循环。以棕榈酸（C16）为例：7 轮螺旋共产生 8 乙酰 CoA、7 FADH₂、7 NADH，彻底氧化净得 106 ATP。',
      credit: AI_CREDIT,
    },
  ],
  'biochemistry-ch7-s3': [
    {
      src: '/images/bio/biochemistry/dna-renaturation.png',
      caption:
        'DNA 的热变性、复性与 Tm：加热破坏碱基对间氢键与堆积力，双链解链为单链（变性），增色效应（hyperchromic effect）使 260 nm 紫外吸收上升；以吸光度对温度作图得到 S 形熔解曲线，其中点对应的温度即熔解温度 Tm。G≡C 含量越高（三个氢键）、离子强度越高，Tm 越高。缓慢降温时互补单链可重新按碱基配对“拉链式”复性（退火），特异性互补序列间的复性即分子杂交的基础。',
      credit: AI_CREDIT,
    },
  ],

  // ==================== 分子生物学 ====================
  'molecular-biology-ch1-s4': [
    {
      src: '/images/bio/molecular-biology/central-dogma.png',
      caption:
        '中心法则（Crick, 1958）及其发展：DNA 经复制（replication）自我拷贝；遗传信息经转录（transcription）从 DNA 流向 RNA，再经翻译（translation）从 RNA 流向蛋白质。三条信息流的通用性与例外：RNA 复制（RNA 病毒）、逆转录（逆转录病毒，Temin/Baltimore 发现）与 RNA 复制等补充路径的发现丰富了这一框架，但“信息一旦进入蛋白质便不可逆出”的核心论断至今未被推翻。',
      credit: AI_CREDIT,
    },
  ],
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
  'molecular-biology-ch3-s3': [
    {
      src: '/images/bio/molecular-biology/holliday.png',
      caption:
        '同源重组的 Holliday 模型：两条同源 DNA 双链交叉连接形成 Holliday 交叉，交换的异源双链（heteroduplex）两侧为亲本链；交叉点沿 DNA 移动（分支迁移）扩大交换区；随后由内切酶在两种不同平面切开（解离），分别产生非交换型（贴片段）与交换型（重组）产物。RecA 蛋白（原核）催化链侵入与三分叉中间体形成。',
      credit: AI_CREDIT,
    },
  ],
  'molecular-biology-ch5-s2': [
    {
      src: '/images/bio/molecular-biology/rna-splicing.png',
      caption:
        '剪接体（spliceosome）介导的 pre-mRNA 剪接：U1 识别 5′ 剪接位点，U2 结合分支点并使该腺苷外凸；随后 U4/U6·U5 三聚体加入组装成催化活性中心，发生两步转酯反应——先是分支点 A 的 2′-OH 攻击 5′ 剪接位点形成套索（lariat）中间体，再由 5′ 外显子的 3′-OH 攻击 3′ 剪接位点，两个外显子连接而内含子以套索形式被切除降解。',
      credit: AI_CREDIT,
    },
  ],
  'molecular-biology-ch8-s1': [
    {
      src: '/images/bio/molecular-biology/chromatin.png',
      caption:
        '染色质的多级包装层级：裸露 DNA 双链（直径 2 nm）→ 核小体“串珠链”（10 nm，146 bp 绕组蛋白八聚体约 1.65 圈）→ 30 nm 螺线管纤维 → 环化襻结结构（间期染色质）→ 经浓缩最终形成中期 X 形染色体（直径约 1400 nm）。压缩比高达约 10⁴ 倍；乙酰化等组蛋白修饰可降低浓缩程度、暴露启动子，是染色质水平调控的基础。',
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
  'molecular-biology-ch9-s2': [
    {
      src: '/images/bio/molecular-biology/pcr-cycles.png',
      caption:
        '聚合酶链式反应（PCR）的三步温度循环：①变性（约 94–95 ℃）——双链模板氢键断裂解为单链；②退火（约 50–65 ℃，低于 Tm 5 ℃左右）——引物与互补序列特异性结合；③延伸（约 72 ℃）——Taq DNA 聚合酶从 3′-OH 起沿模板合成新链。每循环产物呈指数扩增（2ⁿ），30 轮即可将目的片段扩增约 10⁹ 倍；耐热聚合酶的发现使自动化循环成为可能（Mullis，1993 年诺贝尔奖）。',
      credit: AI_CREDIT,
    },
  ],
  'molecular-biology-ch9-s4': [
    {
      src: '/images/bio/molecular-biology/sanger-sequencing.png',
      caption:
        'Sanger 双脱氧链终止法测序：以单链模板+引物进行体外复制反应，反应体系中掺入少量双脱氧核苷酸（ddNTP，3′ 缺少羟基），一旦掺入即终止延伸，四个反应管（分别含 ddATP/ddGTP/ddCTP/ddTTP）产生一套长度相差一个核苷酸、末端固定的片段群；变性后经高分辨变性聚丙烯酰胺凝胶电泳按长度分离，自下而上读出的条带序列即模板的互补序列。读长可达约 800–1000 bp，是人类基因组计划的主力方法（Sanger 因此第二次获诺贝尔奖）。',
      credit: AI_CREDIT,
    },
  ],
  'molecular-biology-ch7-s3': [
    {
      src: '/images/bio/molecular-biology/trp-attenuation.png',
      caption:
        '色氨酸操纵子的衰减（attenuation）机制：前导序列 trpL 含 4 个可两两配对的区段。色氨酸充足时，核糖体快速翻译前导肽并覆盖区段 2，使 3–4 区段配对形成终止子发夹+寡聚 U，RNA 聚合酶提前脱落（转录终止）；色氨酸匮乏时，核糖体在连续 Trp 密码子处停顿于区段 1，2–3 区段配对形成反终止子发夹，3–4 无法配对，转录得以通读进入结构基因。衰减将翻译速度（胞内 aa-tRNA 供应）与转录偶联，实现细粒度调控。',
      credit: AI_CREDIT,
    },
  ],
  'molecular-biology-ch8-s5': [
    {
      src: '/images/bio/molecular-biology/rna-interference.png',
      caption:
        'RNA 干扰（RNAi）通路：外源或内源长双链 RNA 被 Dicer（RNase III 家族核酸内切酶）切割为约 21–23 nt 的 siRNA 双链；随后与 Argonaute 蛋白组装成 RISC 复合体，乘客链被降解，保留向导链；向导链按碱基配对识别靶 mRNA，Argonaute 的 PIWI 结构域在配对区中部切割 mRNA，使其被快速降解——序列特异性的基因沉默（Fire 与 Mello，2006 年诺贝尔奖）。',
      credit: AI_CREDIT,
    },
  ],

  // ==================== 细胞生物学 ====================
  'cell-biology-ch2-s4': [
    {
      src: '/images/bio/cell-biology/sodium-potassium-pump.png',
      caption:
        'Na⁺/K⁺-ATP 酶（钠钾泵）的循环工作模型：胞内侧 3 个 Na⁺ 结合位点被占据后，ATP 磷酸化泵蛋白→构象向外开放、释放 Na⁺ 至胞外；随后胞外侧 2 个 K⁺ 结合→去磷酸化→构象向内复位、释放 K⁺ 入胞。每循环消耗 1 ATP，泵出 3 Na⁺、泵入 2 K⁺，维持胞内高 K⁺/低 Na⁺ 的离子梯度——既是静息电位的基础，也为葡萄糖等物质的继发性主动转运储备能量。',
      credit: AI_CREDIT,
    },
  ],
  'cell-biology-ch1-s2': [
    {
      src: '/images/bio/cell-biology/cell-anatomy.png',
      caption:
        '典型的动物细胞（真核细胞）结构总览：以双层核被膜包裹、含核仁的细胞核为中心；细胞质中分布线粒体（产能）、粗面与滑面内质网、高尔基体（加工分选）、溶酶体（消化）等膜性细胞器，以及核糖体、中心体与细胞骨架等非膜性结构。',
      credit: AI_CREDIT,
    },
  ],
  'cell-biology-ch7-s3': [
    {
      src: '/images/bio/molecular-biology/chromatin.png',
      caption:
        '染色体的多级包装模型：DNA 双螺旋（2 nm）经组蛋白八聚体包装为核小体串珠（10 nm 纤维）→螺线管（30 nm 纤维）→襻环结构域→浓缩形成中期染色体。全部基因组被压缩约 10⁴ 倍而仍保持可转录/可复制；包装层级间的转换由组蛋白修饰、凝聚素（condensin）等调控。',
      credit: AI_CREDIT,
    },
  ],
  'cell-biology-ch8-s2': [
    {
      src: '/images/bio/cell-biology/gpcr-signaling.png',
      caption:
        'GPCR-cAMP-PKA 信号通路：配体结合七次跨膜受体胞外结构域→胞内侧的异三聚体 G 蛋白中 Gα 亚基交换 GDP 为 GTP 而活化，与 Gβγ 解离→活化的 Gα 激活腺苷酸环化酶（AC）→ ATP 环化为第二信使 cAMP→ cAMP 结合 PKA 调节亚基释放催化亚基→磷酸化下游靶蛋白（如 CREB）。Gα 固有的 GTP 酶活性（可被 RGS 加速）使信号及时关闭。',
      credit: AI_CREDIT,
    },
  ],
  'cell-biology-ch10-s5': [
    {
      src: '/images/bio/cell-biology/meiosis.png',
      caption:
        '减数分裂的核心事件：减数第一次分裂（MI）中同源染色体配对联会（同源重组交换，可见交叉/chiasmata），随后同源染色体（而非姐妹染色单体）分离，遗传重组与自由组合造就配子多样性；减数第二次分裂（MII）类似有丝分裂，姐妹染色单体分离。最终一个二倍体细胞产生 4 个遗传上各异的单倍体配子。',
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
  'cell-biology-ch8-s4': [
    {
      src: '/images/bio/cell-biology/rtk-signaling.png',
      caption:
        '受体酪氨酸激酶（RTK）—Ras—MAPK 通路：信号分子（如表皮生长因子 EGF）诱导受体二聚化，胞内酪氨酸激酶结构域相互磷酸化（自磷酸化）；磷酸化的酪氨酸作为停泊位点招募接头蛋白 Grb2–SOS，将质膜内侧的 Ras 从 GDP 态转换为 GTP 活化态；活化的 Ras 依次激活 RAF→MEK→ERK 三级激酶级联（逐级放大信号），ERK 进入细胞核磷酸化转录因子（如 Elk-1），调控增殖与分化相关基因表达。通路中 GAP 蛋白加速 Ras 水解 GTP 而关闭信号。',
      credit: AI_CREDIT,
    },
  ],
  'cell-biology-ch10-s2': [
    {
      src: '/images/bio/cell-biology/cdk-cyclin.png',
      caption:
        '细胞周期的 CDK–cyclin 引擎：cyclin 周期性合成与降解（经泛素—蛋白酶体途径）驱动 CDK 活性振荡，不同 cyclin–CDK 组合序贯主导各时相转换——G1 期 cyclin D–CDK4/6 磷酸化 Rb 释放 E2F，启动 G1/S 基因表达；cyclin E–CDK2 触发 S 期起始、启动复制起点；cyclin A–CDK2 维持 S 期进程；cyclin B–CDK1（MPF）驱动 G2/M 转换与有丝分裂事件；末期 APC/C 降解 cyclin B 使细胞退出分裂。CKI（p21、p27 等）与磷酸化修饰（Wee1/Cdc25）对引擎进行精密校准。',
      credit: AI_CREDIT,
    },
  ],

  // ==================== 生物物理学 ====================
  'biophysics-ch3-s1': [
    {
      src: '/images/bio/biophysics/membrane-phases.png',
      caption:
        '膜脂的相变：凝胶相（gel / Lβ）中磷脂尾部充分伸展、排列有序，膜刚性强；温度升至相变温度 Tm 以上转入液晶相（liquid-crystalline / Lα），尾部活动加剧、膜流动性增大。胆固醇插入两层尾部之间，在 Tm 以上限制流动、在 Tm 以下阻止紧密排列，起“流动缓冲”作用。不饱和双键（弯折）降低 Tm。',
      credit: AI_CREDIT,
    },
  ],
  'biophysics-ch2-s2': [
    {
      src: '/images/bio/biophysics/folding-funnel.png',
      caption:
        '蛋白质折叠的能量景观（折叠漏斗）：漏斗口代表构象熵极大的变性态系综，随自由能下降可用构象数递减；粗糙表面上遍布局部极小值（动力学陷阱，对应熔球态等中间体），需要越过过渡态能垒；漏斗底部唯一的深井即天然态——全局自由能极小点。漏斗的拓扑决定了不同蛋白折叠速率可相差数个数量级。',
      credit: AI_CREDIT,
    },
  ],
  'biophysics-ch6-s1': [
    {
      src: '/images/bio/biophysics/optical-tweezers.png',
      caption:
        '光镊（optical tweezers）：强会聚激光在焦点处形成三维梯度光势阱，将折射率高于介质的介电微珠稳定俘获于焦点附近——梯度力（拉向焦点）与散射力平衡。微珠偶联单个生物分子（如肌球蛋白/驱动蛋白/RNA 聚合酶）后，分子产生的 pN 级力使微珠偏离焦点，偏移量与力成正比，实现单分子力的实时测量（位移分辨率 nm、力分辨率 pN）。',
      credit: AI_CREDIT,
    },
  ],
  'biophysics-ch7-s2': [
    {
      src: '/images/bio/biophysics/action-potential.png',
      caption:
        '动作电位的波形与相位：静息电位（约 −70 mV）→去极化达到阈电位（约 −55 mV）触发再生性 Na⁺ 内流，迅速去极化至峰值（约 +30 mV，超射）→Na⁺ 通道失活、K⁺ 外流主导复极化→K⁺ 通道延迟关闭造成超极化后电位（undershoot）→恢复静息。全或无、再生性、不应期与幅度不变沿轴突传播，是 Hodgkin–Huxley 模型描述的对象。',
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
  'biophysics-ch7-s3': [
    {
      src: '/images/bio/biophysics/saltatory-conduction.png',
      caption:
        '有髓纤维的跳跃式传导（saltatory conduction）：髓鞘由胶质细胞质膜反复包绕轴突形成，膜电阻高、电容低，电压门控 Na⁺ 通道几乎只集中于裸露的郎飞结；动作电位在结区去极化产生的局部电流几乎无衰减地流过结间体，在下一个郎飞结重新触发再生性放电——信号如同"从结跳到结"。相比无髓纤维的连续传导，跳跃式传导使传导速度提高可达数十倍（人大腿神经纤维可达 100 m/s 以上），且每单位长度仅需重建小部分离子梯度，显著节能；多发性硬化等脱髓鞘疾病即因结间泄漏导致传导减慢甚至阻滞。',
      credit: AI_CREDIT,
    },
  ],
  'biophysics-ch9-s4': [
    {
      src: '/images/bio/biophysics/cryo-em.png',
      caption:
        '冷冻电子显微镜（cryo-EM）单颗粒重构流程：样品溶液速冻（玻璃化，vitreous ice）于电镜载网上，蛋白质分子以随机取向保持近生理状态；电子束穿透冰层投影成像，直接电子检测器采集数千至数百万张粒子图像；经二维分类平均、颗粒取向判定（angular reconstitution）与迭代精修，将不同方向的投影反投影叠加，重构出三维密度图，最终可在近原子分辨率解析膜蛋白等大分子机器——无需结晶，是结构生物学近年革命（2017 年诺贝尔化学奖）的核心技术。',
      credit: AI_CREDIT,
    },
  ],
}

/** 获取某小节的配图（无配图返回空数组） */
export function getIllustrations(sectionId: string): Illustration[] {
  return illustrations[sectionId] ?? []
}
