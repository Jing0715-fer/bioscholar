// ============================================================
// BioScholar 教材插图库
// 按小节挂载配图：key 为 sectionId，正文渲染时自动插入 H2 边界
//
// 图片来源体系（全部为真实科学数据源，无 AI 生成图）：
//  1. 小分子结构式：RCSB PDB 化学组分字典（CCD）——OpenEye 统一渲染的
//     矢量 SVG；糖类、脂肪酸、氨基酸、维生素、核苷酸、辅酶等均取自
//     真实化学数据库（每个配体代码均经 RCSB data-api 名称核实）
//  2. 大分子三维结构：RCSB PDB 条目官方渲染图（统一渲染管线）——
//     血红蛋白、核糖体、KcsA、核小体等均为实验测定结构
//  3. 通路/过程图：Wikimedia Commons（各图均经 VLM 科学性审校，
//     图注署名作者与许可证，遵循 CC BY / CC BY-SA / PD 条款）
//  4. 少量机制示意图为代码自绘矢量图（drawn/，依据教材参数绘制，
//     数值精确可控，非 AI 生成；来源在 manifest-21c.json 中如实标注）
// 图注采用学术严谨的中文描述，并标注数据来源
// ============================================================
import type { Illustration, SubjectId } from '@/lib/types'
import { microIllustrations } from './micro-illustrations'
import { immunoIllustrations } from './immuno-illustrations'
import { neuroIllustrations } from './neuro-illustrations'
import { bioinfoIllustrations } from './bioinfo-illustrations'
import { viroIllustrations } from './viro-illustrations'

/** 学科封面图（学科中心卡片 / 阅读器用；全部为自绘矢量封面，非 AI 生成） */
export const subjectCovers: Record<SubjectId, string> = {
  biochemistry: '/images/bio/covers/cover-biochemistry.svg',
  'molecular-biology': '/images/bio/covers/cover-molecular-biology.svg',
  'cell-biology': '/images/bio/covers/cover-cell-biology.svg',
  biophysics: '/images/bio/covers/cover-biophysics.svg',
  microbiology: '/images/bio/covers/cover-microbiology.svg',
  immunology: '/images/bio/covers/cover-immunology.svg',
  neurobiology: '/images/bio/covers/cover-neurobiology.svg',
  bioinformatics: '/images/bio/covers/cover-bioinformatics.svg',
  virology: '/images/bio/covers/cover-virology.svg',
}

/** 仪表盘主视觉横幅（自绘矢量） */
export const heroImage = '/images/bio/covers/hero-bioscience.svg'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'
const CCD_CREDIT = '结构式来源：RCSB PDB 化学组分字典（CCD）'
const pdbCredit = (id: string) => `结构来源：RCSB Protein Data Bank（${id}）`
const commonsCredit = (author: string, license: string) =>
  `图片来源：Wikimedia Commons（${author}，${license}）`
const webCredit = (author: string) =>
  `图片来源：${author}（网络教材图源，经 VLM 科学审校）`

export const illustrations: Record<string, Illustration[]> = {
  // ==================== 生物化学 ====================
  'biochemistry-ch1-s1': [
    {
      src: '/images/bio/structures/composite-glucose-anomers.svg',
      caption:
        'α-与 β-D-吡喃葡萄糖及 β-D-呋喃果糖的结构式（真实化学数据库渲染）。葡萄糖 C1 位新形成的半缩醛羟基在环平面两侧的取向不同，构成 α-（与 C6 羟甲基反式）与 β-（顺式）两种异头物——图中楔形键（粗楔）表示指向纸面外的取代基。β-D-吡喃葡萄糖的所有大取代基均处于平伏（equatorial）位，是溶液中最稳定的异头物（变旋平衡中约占 64%）；果糖则主要以五元呋喃环形式存在，半缩醛中心位于 C2（酮糖）。',
      credit: CCD_CREDIT,
    },
  ],
  'biochemistry-ch1-s2': [
    {
      src: '/images/bio/structures/composite-common-monosaccharides.svg',
      caption:
        '四种生物学常见单糖的结构式：D-半乳糖（葡萄糖的 C4 差向异构体，乳糖与糖脂的组成成分）、D-甘露糖（C2 差向异构体，糖蛋白 N-连接寡糖核心三糖的成员）、D-核糖（RNA 及 ATP、NAD⁺ 等辅酶的呋喃糖组分）与 D-木糖（植物半纤维素的主要戊糖）。半乳糖、甘露糖与葡萄糖各仅有一个手性碳的构型不同——这类差向异构体之间的互变必须经差向异构酶催化，不能自发进行。',
      credit: CCD_CREDIT,
    },
    {
      src: '/images/bio/commons/sucrose-structure.png',
      caption:
        '蔗糖的结构式：α-D-吡喃葡萄糖的异头碳 C1 与 β-D-呋喃果糖的异头碳 C2 之间形成 α(1→2) 糖苷键——两个异头碳的半缩醛羟基同时被封闭，因此蔗糖是非还原糖：无变旋现象、不与 Fehling/Tollens 试剂反应、不能成脎。植物体以蔗糖作为长途运输的碳源形式，正是利用其化学惰性与高水溶性。',
      credit: commonsCredit('Calvero', 'Public domain'),
    },
    {
      src: '/images/bio/commons/lactose-structure.png',
      caption:
        '乳糖的结构式：β-D-吡喃半乳糖的 C1 与 D-吡喃葡萄糖的 C4 之间形成 β(1→4) 糖苷键——糖苷键只封闭了半乳糖的异头碳，葡萄糖的 C1 半缩醛羟基保持游离，因此乳糖是还原糖，存在 α/β 异头物互变与变旋现象。乳糖是乳汁中的主要二糖，经乳糖酶（β-半乳糖苷酶）水解为半乳糖与葡萄糖；成年人肠乳糖酶活性下降即乳糖不耐受的成因。',
      credit: commonsCredit('Calvero', 'Public domain'),
    },
    {
      src: '/images/bio/commons/maltose-structure.png',
      caption:
        '麦芽糖的结构式：两分子 D-吡喃葡萄糖以 α(1→4) 糖苷键连接——第二个葡萄糖的 C1 半缩醛羟基游离，故麦芽糖为还原糖。α(1→4) 键正是直链淀粉与糖原主链的连接方式（淀粉酶水解淀粉即逐个切下麦芽糖）；对照乳糖的 β(1→4) 键可见：糖苷键的 α/β 构型与连接位置决定了多糖的几何形态（螺旋 vs 平板）与酶的可及性。',
      credit: commonsCredit('Calvero', 'Public domain'),
    },
  ],
  'biochemistry-ch2-s1': [
    {
      src: '/images/bio/structures/composite-fatty-acids.svg',
      caption:
        '天然脂肪酸的结构式（上排饱和酸、下排不饱和酸，命名以碳原子数:双键数表示）。饱和脂肪酸（豆蔻酸 14:0、棕榈酸 16:0、硬脂酸 18:0）的烃链呈全反式锯齿状伸展，链与链之间可紧密堆积，熔点随链长升高；不饱和脂肪酸（棕榈油酸 16:1、油酸 18:1 Δ9）的顺式双键使烃链在双键处产生约 30° 的固定弯折，分子间无法紧密堆积、熔点显著降低——这正是油酸（熔点 13.4 ℃）远低于硬脂酸（69.6 ℃）的结构根源，也是膜脂需要不饱和脂肪酸维持流动性的原因。',
      credit: CCD_CREDIT,
    },
  ],
  'biochemistry-ch2-s2': [
    {
      src: '/images/bio/structures/composite-membrane-lipids.svg',
      caption:
        '三类膜脂的代表结构：磷脂酰胆碱（卵磷脂，甘油磷脂）——甘油骨架 sn-1、sn-2 位各酯化一条脂肪酸链，sn-3 位以磷酸二酯键连接极性胆碱头部，是生物膜中含量最丰富的甘油磷脂；鞘氨醇——18 碳长链氨基二醇，构成鞘磷脂与糖鞘脂的共同骨架（其氨基以酰胺键连接脂肪酸即为神经酰胺）；胆固醇——四环甾核、3β-羟基与 17 位异辛基侧链，插入膜脂双层烃链区调节膜流动性。',
      credit: CCD_CREDIT,
    },
  ],
  'biochemistry-ch2-s3': [
    {
      src: '/images/bio/commons/fluid-mosaic-model.png',
      caption:
        '生物膜的流动镶嵌模型（Singer–Nicolson, 1972）：磷脂双分子层构成膜的基本骨架，极性头部朝向膜两侧的水相，疏水脂肪酸尾部相互嵌合于膜内部；整合蛋白以单次或多次跨膜形式镶嵌于双层中，外周蛋白附着于膜表面；胆固醇散布于烃链区调节流动性。注意糖链（寡糖链）仅存在于膜的外侧——连接于糖蛋白与糖脂，构成细胞外被（glycocalyx），膜两侧组分布局的不对称性与其功能分工一一对应。',
      credit: commonsCredit('Mariana Ruiz (LadyofHats)', 'Public domain'),
    },
  ],
  'biochemistry-ch3-s1': [
    {
      src: '/images/bio/structures/composite-amino-acids-grid.svg',
      caption:
        '20 种标准氨基酸的完整结构式（按侧链性质配色）：深灰为非极性疏水侧链（甘氨酸、丙氨酸、缬氨酸、亮氨酸、异亮氨酸、甲硫氨酸、苯丙氨酸、色氨酸、脯氨酸），青色为不带电荷的极性侧链（丝氨酸、苏氨酸、半胱氨酸、天冬酰胺、谷氨酰胺、酪氨酸），玫红为酸性侧链（天冬氨酸、谷氨酸），紫色为碱性侧链（赖氨酸、精氨酸、组氨酸）。除甘氨酸（R = H，无手性）外，所有氨基酸的 α-碳均为 L-构型；侧链的体积、极性与可解离基团共同决定蛋白质的折叠路径、活性中心的化学性质与表面电荷。',
      credit: CCD_CREDIT,
    },
  ],
  'biochemistry-ch4-s1': [
    {
      src: '/images/bio/commons/alpha-helix.png',
      caption:
        '右手 α 螺旋的球棍模型：主链羰基 C=O 与第 n+4 位残基的酰胺 N–H 之间形成氢键（绿色虚线），取向与螺旋轴平行——每圈 3.6 个残基、螺距 0.54 nm、每残基上升 0.15 nm、转角 100°，构成 13 元环的氢键网络。R 侧链伸向螺旋外侧、不参与螺旋内氢键；脯氨酸因无 N–H 供体且环状侧链锁定 φ 角而成为螺旋强破坏者。α 螺旋由 Pauling 与 Corey 于 1951 年提出，是蛋白质中第一个被阐明的二级结构。',
      credit: commonsCredit('Frédéric Dardel', 'CC BY-SA 3.0'),
    },
    {
      src: '/images/bio/commons/beta-sheet.png',
      caption:
        'β 折叠的两种排列（左：反平行；右：平行）：肽链充分伸展呈锯齿状，相邻链之间形成垂直于链伸展方向的链间氢键（虚线），R 侧链上下交替伸向片层两侧。反平行排列氢键近于直线、重复周期 0.70 nm，比氢键弯折的平行排列（0.65 nm）更稳定——丝心蛋白即反平行 β 片层。与 α 螺旋的主链内氢键对照可见：二级结构的差异本质上就是氢键取向的不同组织方式。',
      credit: commonsCredit('Mysterioso', 'CC BY-SA 3.0'),
    },
    {
      src: '/images/bio/commons/ramachandran-plot.png',
      caption:
        'Ramachandran 图（拉氏图，中文标注版）：以主链二面角 φ（横轴）与 ψ（纵轴）为坐标，全平面中仅局部区域因位阻允许——「α 螺旋」区位于 φ≈−60°、ψ≈−45°，「β 折叠」区位于 φ≈−120°、ψ≈+120°，两者正是两处主要允许区。甘氨酸无侧链位阻、几乎布满全图；脯氨酸被环锁定在狭窄区域。拉氏图由 Ramachandran 等人于 1963 年提出，至今仍是检验蛋白结构模型几何合理性的标准质检工具。',
      credit: commonsCredit('Frédéric Dardel 修订，Webridge', 'CC BY-SA 3.0'),
    },
  ],
  'biochemistry-ch4-s3': [
    {
      src: '/images/bio/pdb/1BKV.jpeg',
      caption:
        '胶原三股超螺旋的实验测定结构（X 射线晶体学，2.0 Å）：胶原样肽链（Pro-Pro-Gly 重复区段中间嵌入天然 α1 链片段）以左手多聚脯氨酸Ⅱ型螺旋每条链各自盘绕，三条链再围绕共同的中心轴绞合成右手超螺旋。每隔两个残基出现一次的甘氨酸恰好嵌入三链轴心处的拥挤空间，容许链间紧密堆积——Gly-X-Y（X 常为 Pro、Y 常为 Hyp）重复序列因此成为三股螺旋的结构密码；脯氨酸与羟脯氨酸的环状侧链赋予螺旋刚性，羟脯氨酸的羟基还参与链间水介导的氢键网络。',
      credit: pdbCredit('PDB 1BKV'),
    },
  ],
  'biochemistry-ch4-s4': [
    {
      src: '/images/bio/pdb/1MBO.jpeg',
      caption:
        '肌红蛋白（Mb）的实验测定三维结构（X 射线晶体学，1.6 Å）：153 个残基折叠为 8 段 α-螺旋（A–H，螺旋比例极高的经典球蛋白），疏水口袋容纳一个血红素辅基——Fe²⁺ 一侧与近端组氨酸（F8 His）配位，另一侧可逆结合 O₂。Mb 为单亚基蛋白，氧合曲线呈矩形双曲线（P₅₀ ≈ 2.8 torr），没有协同性——它是理解血红蛋白别构行为的经典对照。肌红蛋白也是历史上第一个被解析三维结构的蛋白质（Kendrew，1958）。',
      credit: pdbCredit('PDB 1MBO'),
    },
    {
      src: '/images/bio/pdb/1HHO.jpeg',
      caption:
        '人氧合血红蛋白（R 态，X 射线晶体学，2.1 Å）：两个 α 与两个 β 亚基组成 α₂β₂ 四聚体，每个亚基各含一个血红素。氧合使 Fe²⁺ 移入卟啉平面，牵动 F 螺旋与 FG 转角，经由 α₁β₂ 界面的构象变化传递为四级结构整体从紧张（T）态向松弛（R）态的转换——亚基间的协同变构（Hill 系数 ≈ 2.8）使四聚体的氧合曲线呈 S 形（P₅₀ ≈ 26 torr），在组织与肺的氧分压之间高效搬运氧。',
      credit: pdbCredit('PDB 1HHO'),
    },
    {
      src: '/images/bio/pdb/2HHB.jpeg',
      caption:
        '人脱氧血红蛋白（T 态，X 射线晶体学，1.74 Å）：与 R 态相比，T 态在亚基间（尤其 α₁β₂ 与 α₂β₁ 界面）维持一组额外的盐键与氢键网络（如 βAsp94 与 αLys40、αArg141 与 βAsp126 等）锁住四级结构；脱氧态血红素 Fe²⁺ 高出卟啉平面约 0.06 nm，对 O₂ 的亲和力较低。O₂ 结合逐一破坏这些约束、推动四聚体滑向 R 态——两种状态间的平衡移动即 MWC 别构模型描述的分子基础；H⁺、CO₂ 与 2,3-BPG 均通过稳定 T 态降低亲和力（玻尔效应）。',
      credit: pdbCredit('PDB 2HHB'),
    },
  ],
  'biochemistry-ch5-s2': [
    {
      src: '/images/bio/commons/induced-fit.png',
      caption:
        '酶与底物结合的诱导契合模型（Koshland，1958）：底物进入时酶活性中心构象发生诱导性改变，结合位点收紧包裹底物形成 ES 复合物；催化完成、产物释放后酶复原并可重复循环。构象调整使结合基团与催化基团精确围拢底物——既解释专一性（弹性识别而非刚性锁孔）又解释催化效率，修正了早期锁钥学说的刚性结合观念。图中完整展示 底物→ES→EP→产物释放 的催化循环。',
      credit: commonsCredit('TimVickers 绘，Fvasconcellos 矢量化', 'Public domain'),
    },
  ],
  'biochemistry-ch5-s3': [
    {
      src: '/images/bio/commons/michaelis-menten-kinetics.png',
      caption:
        '米氏方程曲线（实测酶反应数据拟合）：酶促反应初速度 v 随底物浓度 [S] 呈矩形双曲线升高——低 [S] 区 v ∝ [S]（近似一级反应），高 [S] 区 v 逼近 Vmax（零级）；v = Vmax/2 对应的底物浓度即米氏常数 Km（图中虚线标定）。Km 反映酶与底物的表观亲和力（Km 越小亲和越强，近似等于 (k₋₁+k₂)/k₁），Vmax = k₂[E]t 定义转换数（turnover number）；线性化处理见 Lineweaver–Burk 双倒数作图。',
      credit: commonsCredit('fullofstars', 'Public domain'),
    },
  ],
  'biochemistry-ch6-s1': [
    {
      src: '/images/bio/structures/composite-vitamins-b1-b2-b3-b5.svg',
      caption:
        '四种水溶性维生素（B1、B2、B3、B5）及其活性形式的结构式：焦磷酸硫胺素（TPP，维生素 B1 的辅酶形式）——噻唑环 C2 位经去质子化形成负碳离子，介导 α-酮酸氧化脱羧与转酮醇反应（“活性醛”化学）；核黄素（B2）——异咯嗪三环体系可逆地接受两个电子，是 FMN 与 FAD 的母核；烟酰胺（B3）——吡啶环接受一个氢负离子生成 NADH/NADPH，氧化/还原型仅一氢之差；辅酶 A（含泛酸 B5）——3′-磷酸腺苷–泛醇–巯基乙胺三段结构，巯基携带脂酰基，是酰基转移反应的通用载体。',
      credit: CCD_CREDIT,
    },
  ],
  'biochemistry-ch6-s2': [
    {
      src: '/images/bio/structures/composite-vitamins-b6-b7-b9-b12-c.svg',
      caption:
        '五种水溶性维生素的辅酶形式结构式：磷酸吡哆醛（PLP，B6）——吡哆醛的醛基与氨基酸 α-氨基形成 Schiff 碱（醛亚胺），介导转氨、脱羧、消旋等众多氨基酸反应；生物素（B7）——脲环结构与载体蛋白上 Lys 侧链共价连接，携带 CO₂ 参与丙酮酸羧化酶等羧化反应；叶酸（B9）——蝶啶–对氨基苯甲酸–谷氨酸三段结构，四氢化后成为一碳单位（甲基、甲烯基等）的转移载体；钴胺素（B12）——咕啉环中心的钴与 5′-脱氧腺苷形成罕见的 Co–C 共价键，参与变位酶反应与甲基转移；抗坏血酸（维生素C）——内酯环上的烯二醇结构赋予强还原性，作为羟化酶的辅因子维持铁的还原态。',
      credit: CCD_CREDIT,
    },
  ],
  'biochemistry-ch6-s3': [
    {
      src: '/images/bio/structures/composite-vitamins-fat-soluble.svg',
      caption:
        '脂溶性维生素（A 原、A、D、E、K）的结构式：β-胡萝卜素——对称的双 β-紫罗酮头–共轭多烯长链，在小肠中被 β-胡萝卜素双加氧酶于中心位置对称裂解，理论上生成两分子视黄醇（实际转化效率约 1/12）；视黄醇——环己烯–共轭多烯–醇，氧化为 11-顺视黄醛后与视蛋白的 Lys 形成 Schiff 碱，是视紫红质光异构化的生色团；骨化三醇（1,25-二羟维生素 D₃）——开环甾（secosteroid）结构，胆固醇经紫外光开环成的维生素 D₃ 在肝、肾两次羟化后的活性激素，与核受体 VDR 结合规钙磷代谢基因；生育酚（E）——色满环上可牺牲的酚羟基捕获脂质过氧化自由基链（自身被氧化后由维生素 C 再生）；叶绿醌（K1）——萘醌核在 γ-谷氨酰羧化酶介导的谷氨酸 γ-羧化中循环氧化还原，为凝血因子提供 Ca²⁺ 结合位点。',
      credit: CCD_CREDIT,
    },
  ],
  'biochemistry-ch7-s1': [
    {
      src: '/images/bio/structures/composite-nitrogenous-bases.svg',
      caption:
        '五种碱基的结构式（青色标签为嘌呤、玫红标签为嘧啶）：腺嘌呤与鸟嘌呤为双环嘌呤——鸟嘌呤 C2 的氨基与 C6 的酮基使其与胞嘧啶可形成 3 个氢键（腺嘌呤–胸腺嘧啶仅 2 个），GC 含量因此提高 DNA 的热稳定性（Tm 升高）；胞嘧啶、尿嘧啶（RNA 特有，C5 位为氢）与胸腺嘧啶（DNA 特有，C5 位多一个甲基）为单环嘧啶——胸腺嘧啶的 5-甲基既增强双螺旋稳定性（疏水堆积），也是 DNA 甲基化表观调控的化学前提（5-甲基胞嘧啶脱氨基即为胸腺嘧啶，这是突变热点之谜的一角）。',
      credit: CCD_CREDIT,
    },
    {
      src: '/images/bio/structures/composite-nucleoside-to-nucleotide.svg',
      caption:
        '从核苷到核苷酸的结构演进（左侧腺苷、右侧腺苷酸）：核苷 = 碱基 + 戊糖——嘌呤 N9（或嘧啶 N1）与核糖 C1′ 之间形成 β-构型的 N-糖苷键，呋喃糖的 C1′ 相对新形成的连接即 β 构型；核苷酸 = 核苷 + 磷酸——本图为 5′-羟基金磷酸酯化的腺苷酸（AMP）。5′ 位可再串联两个磷酸（ADP、ATP，形成高能磷酸酐键）；核苷酸的 3′-OH 与 5′-磷酸经磷酸二酯键首尾相连即聚合为核酸链——糖苷键的 β 构型与 3′→5′ 连接方向是核酸统一的结构语法。',
      credit: CCD_CREDIT,
    },
  ],
  'biochemistry-ch7-s2': [
    {
      src: '/images/bio/pdb/1BNA.jpeg',
      caption:
        'B 型 DNA 双螺旋的实验测定结构——Dickerson 十二聚体 d(CGCGAATTCGCG)₂（1.9 Å，1981 年发表的首个单晶 B-DNA 结构）。两条链反向平行，脱氧核糖–磷酸骨架在外侧，碱基对近似垂直于螺旋轴堆积于内部；大沟与小沟清晰可辨（大沟宽约 1.17 nm、深约 0.85 nm，小沟宽约 0.57 nm——序列信息主要暴露于大沟边缘，是转录因子识别的位点）。实测结构显示 B-DNA 并非完美均匀：相邻碱基对的扭转角在约 26°–45° 间波动，且存在螺旋桨式扭转（propeller twist）等精细形变——Watson–Crick 理想模型与真实结构之间的这些序列依赖性差异，正是蛋白质识别特异序列的结构基础。',
      credit: pdbCredit('PDB 1BNA'),
    },
  ],
  'biochemistry-ch7-s3': [
    {
      src: '/images/bio/commons/dna-melting-curve.png',
      caption:
        'DNA 的热变性曲线与增色效应（hyperchromic effect）：单链碱基暴露使 260 nm 紫外吸收升高，以吸光度（相对值）对温度作图得 S 形熔解曲线——协同解链使曲线陡升而非线性缓升，其中点（50% 解链）对应熔解温度 Tm。G≡C 含量越高（三个氢键、堆积更强）、离子强度越高（屏蔽骨架静电斥力），Tm 越高；甲酰胺等试剂降低 Tm。缓慢降温（退火）时互补单链重新配对复性，特异性互补序列间的复性即核酸分子杂交的热力学基础。',
      credit: commonsCredit('Fdardel', 'CC BY-SA 3.0'),
    },
  ],
  'biochemistry-ch8-s1': [
    {
      src: '/images/bio/structures/ATP.svg',
      caption:
        'ATP（腺苷-5′-三磷酸）的结构式：腺嘌呤–β-D-核糖–三磷酸链，三个磷酸基团以酸酐键（～）依次连接。磷酸酐键水解释放大量自由能（ATP + H₂O → ADP + Pi，ΔG°′ = −30.5 kJ/mol）——“高能磷酸键”并非键本身强大，而是水解产物 Pi 与 ADP 的共振稳定化、静电排斥解除与小离子化等多重因素使反应热力学上极为有利。γ、β 位磷酸最常被转移，Mg²⁺ 与磷酸氧的螯合是体内酶促磷酸转移的普遍前提；细胞内 ATP/ADP 的浓度比远偏离标准态，使实际 ΔG 更负（约 −50 kJ/mol），从而驱动无数耦合反应。',
      credit: CCD_CREDIT,
    },
  ],
  'biochemistry-ch8-s2': [
    {
      src: '/images/bio/commons/electron-transport-chain.png',
      caption:
        '线粒体内膜电子传递链全貌：复合体Ⅰ（NADH 脱氢酶）、复合体Ⅱ（琥珀酸脱氢酶）、复合体Ⅲ（细胞色素 bc₁）与复合体Ⅳ（细胞色素 c 氧化酶）嵌于内膜，脂溶性泛醌（CoQ）与水溶性细胞色素 c 作为移动载体在复合物间穿梭。NADH 的电子经Ⅰ→Ⅲ→Ⅳ传递给 O₂ 生成水，FADH₂ 经Ⅱ→Ⅲ→Ⅳ汇入；Ⅰ、Ⅲ、Ⅳ 为质子泵，每对电子分别向膜间隙泵出约 4、4、2 个 H⁺，建立的质子电化学梯度（质子驱动力）驱动 ATP 合酶（图中右侧蘑菇状结构）合成 ATP——化学渗透假说的完整图景。',
      credit: commonsCredit('Rozzychan', 'CC BY-SA 2.5'),
    },
    {
      src: '/images/bio/structures/composite-redox-coenzymes.svg',
      caption:
        '呼吸链两类核心氧化还原辅酶的结构式：NAD⁺ 与其还原型 NADH——氧化型吡啶环维持芳香共轭，C4 位接受一个氢负离子（H⁻）后失去芳香性生成 NADH（图中可见 C4 新增的氢与环的形变），这一步双电子传递经复合体Ⅰ的黄素与铁硫链逐级流向氧；FAD——异咯嗪环可分步接受两个电子（经半醌中间态），既能双电子也能单电子传递，贴合复合体Ⅱ中琥珀酸→泛醌的两电子反应。辅酶结构决定电子传递的化学方式：烟酰胺介导氢负转移、黄素介导逐电子流。',
      credit: CCD_CREDIT,
    },
  ],
  'biochemistry-ch8-s3': [
    {
      src: '/images/bio/pdb/6OQV.jpeg',
      caption:
        '大肠杆菌 ATP 合酶（F₁F₀）的完整实验结构（冷冻电镜，3.3 Å）：顶部 α₃β₃ 六聚体头部经中央轴杆（γε）与膜内 c₁₀ 环转子相连，外周定子（b₂ 亚基与 δ）把头部锚定在 a 亚基上。质子经 a–c 界面的两条半通道从膜外侧进入、结合 c 亚基酸性残基使其旋转，再从胞质侧半通道释放——c 环的旋转带动 γ 轴在 α₃β₃ 头部内转动，按结合变化机制（L→T→O）循环三个催化位点的构象合成 ATP。转子每转一圈合成 3 个 ATP、转运 10 个 H⁺，对应 H⁺/ATP ≈ 3.3。',
      credit: pdbCredit('PDB 6OQV'),
    },
    {
      src: '/images/bio/pdb/1C17.jpeg',
      caption:
        'F₀ 转子的高分辨率实验结构（2.4 Å，来自 Ilyobacter tartaricus 的 Na⁺ 转运型 ATP 合酶，结构与 H⁺ 转运型同源）：12 个 c 亚基围成环状转子（c₁₂ 环），每个 c 亚基中部一个保守酸性残基（Glu/Asp）携带一个耦合离子；a 亚基贴附于环外侧、提供进出两条半通道。离子从一侧进入后中和 c 亚基负电荷使环得以旋转，转至另一侧被释放——c 环化学计量（此处 12）直接决定每合成 1 个 ATP 需跨膜转运的离子数（12/3 = 4 Na⁺/ATP）。线粒体 c 环为 c₈，热力学上对应较高的 H⁺/ATP 比值。',
      credit: pdbCredit('PDB 1C17'),
    },
  ],
  'biochemistry-ch9-s1': [
    {
      src: '/images/bio/commons/glycolysis-pathway.png',
      caption:
        '糖酵解（glycolysis）完整途径：1 分子葡萄糖经 10 步酶促反应在胞质中分解为 2 分子丙酮酸。前 5 步为耗能的“投入阶段”（己糖激酶与磷酸果糖激酶-1 各消耗 1 ATP）；后 5 步为放能的“产出阶段”（磷酸甘油酸激酶与丙酮酸激酶两次底物水平磷酸化共生成 4 ATP，3-磷酸甘油醛脱氢酶还原 2 NAD⁺ 为 2 NADH），净得 2 ATP。三个关键调节酶（己糖激酶、PFK-1、丙酮酸激酶）催化的反应远离平衡、不可逆，是通路的“闸门”；PFK-1 被 ATP/柠檬酸抑制、被 AMP 与果糖-2,6-二磷酸激活，是最重要的限速酶。',
      credit: commonsCredit('WYassineMrabet', 'CC BY-SA 3.0'),
    },
  ],
  'biochemistry-ch9-s2': [
    {
      src: '/images/bio/commons/tca-cycle.png',
      caption:
        '三羧酸循环（Krebs 循环）全图：乙酰 CoA 与草酰乙酸经柠檬酸合酶缩合为柠檬酸，经 8 步酶促反应逐步氧化脱羧、重新生成草酰乙酸。一轮循环净得 3 NADH、1 FADH₂、1 GTP（琥珀酰辅酶 A 合成酶的底物水平磷酸化），释放 2 分子 CO₂；异柠檬酸脱氢酶与 α-酮戊二酸脱氢酶复合体为关键调节步骤（受 NADH/ATP 抑制）。循环中间产物也是氨基酸、卟啉等合成的前体——“两用途径”的特性决定了其必须由回补反应（如丙酮酸羧化酶）维持中间产物浓度。',
      credit: commonsCredit(
        'Naryanese, WikiUserPedia, YassineMrabet, TotoBaggins',
        'CC BY-SA 3.0'
      ),
    },
  ],
  'biochemistry-ch9-s3': [
    {
      src: '/images/bio/commons/pentose-phosphate-pathway.png',
      caption:
        '磷酸戊糖途径（PPP）：氧化阶段从 6-磷酸葡萄糖开始，经两次不可逆脱氢（6-磷酸葡萄糖脱氢酶与 6-磷酸葡萄糖酸脱氢酶）产生 2 NADPH 并释放 1 CO₂，生成 5-磷酸核糖；非氧化阶段经转酮醇酶（转移二碳单位）与转醛醇酶（转移三碳单位）重排磷酸糖，与糖酵解中间产物（6-磷酸果糖、3-磷酸甘油醛）互通。该途径的核心意义在于提供 NADPH（还原性生物合成与谷胱甘肽抗氧化体系）与 5-磷酸核糖（核苷酸合成原料），而非产能；6-磷酸葡萄糖脱氢酶缺乏症（蚕豆病）患者 NADPH 供应不足即红细胞氧化损伤的病因。',
      credit: commonsCredit('Pink Bee', 'CC BY-SA 4.0'),
    },
  ],
  'biochemistry-ch9-s5': [
    {
      src: '/images/bio/commons/glycogen-structure.png',
      caption:
        '糖原的分支结构：葡萄糖以 α(1→4) 糖苷键连成直链（放大框），链延伸至约 11 个残基即以 α(1→6) 键引出分支（图中标注分支点与两种键型）；红色标记为数众多的非还原端。分支层级 A 链（外层）→B 链→C 链逐级汇入中心的糖原素蛋白（glycogenin，全分子唯一的还原端所在）。高度分支带来大量非还原端，使磷酸化酶与合酶可多点位平行加/减葡萄糖——这正是糖原作为血糖「快速蓄水池」的结构基础。',
      credit: commonsCredit('GKFX', 'Public domain'),
    },
  ],
  'biochemistry-ch10-s1': [
    {
      src: '/images/bio/commons/beta-oxidation.png',
      caption:
        '脂肪酸的 β-氧化螺旋：胞质中活化的脂酰 CoA 经肉碱穿梭进入线粒体基质后，每轮循环四步反应——脂酰 CoA 脱氢酶（FAD 介导，生成 FADH₂）、烯酰 CoA 水化酶、β-羟脂酰 CoA 脱氢酶（NAD⁺ 介导，生成 NADH）、β-酮硫解酶（硫解，切下一个乙酰 CoA）——链长缩短两个碳原子，缩短的脂酰 CoA 重新进入循环。以棕榈酸（C16:0）为例：活化耗 2 个高能键，7 轮螺旋产 8 乙酰 CoA、7 FADH₂、7 NADH，彻底氧化净得 106 ATP；奇数碳脂肪酸最后一轮生成丙酰 CoA，经羧化异构为琥珀酰 CoA 汇入 TCA。',
      credit: commonsCredit('Mplanine', 'CC BY 4.0'),
    },
  ],
  'biochemistry-ch11-s2': [
    {
      src: '/images/bio/commons/urea-cycle.png',
      caption:
        '尿素循环（鸟氨酸循环）：在线粒体基质中，NH₃（以氨基甲酰磷酸形式）与鸟氨酸经鸟氨酸氨基甲酰转移酶缩合为瓜氨酸，后者转运至胞质，与天冬氨酸缩合为精氨酸代琥珀酸，裂解生成精氨酸并释放延胡索酸（汇入 TCA，连接两大循环）；精氨酸酶水解精氨酸重新生成鸟氨酸并释放尿素。每轮循环消耗 3 ATP（4 个高能磷酸键），将 2 个氮（氨基甲酰磷酸与天冬氨酸）转化为无毒的尿素经肾排出；氨基甲酰磷酸合成酶Ⅰ（线粒体）为限速酶，N-乙酰谷氨酸为其别构激活剂。',
      credit: commonsCredit('Yikrazuul', 'CC BY-SA 3.0'),
    },
  ],

  // ==================== 分子生物学 ====================
  'molecular-biology-ch1-s4': [
    {
      src: '/images/bio/commons/central-dogma.png',
      caption:
        '中心法则（Crick, 1958）及其发展：DNA 经复制（replication）自我拷贝；遗传信息经转录（transcription）从 DNA 流向 RNA，再经翻译（translation）从 RNA 流向蛋白质。实线表示所有细胞生物共有的三条通用信息流；后续发现补充了 RNA 复制（RNA 病毒）、逆转录（逆转录病毒，Temin/Baltimore，1970）等路径（特殊转移），但“信息一旦进入蛋白质便不可逆出”的核心论断至今未被推翻。',
      credit: commonsCredit('Philippe Hupé', 'CC BY-SA 3.0'),
    },
  ],
  'molecular-biology-ch2-s4': [
    {
      src: '/images/bio/commons/dna-replication-fork.png',
      caption:
        '复制叉（replication fork）与半不连续复制：解旋酶在复制叉处解开亲代双链，SSB 蛋白维持单链状态，拓扑异构酶消除解旋产生的超螺旋扭转；前导链沿 5′→3′ 方向随复制叉推进连续合成；后随链模板环出，指导合成短的冈崎片段（原核约 1000 nt）——引物酶合成 RNA 引物、DNA polⅢ 延伸、polⅠ 切除引物并填补缺口，最后由 DNA 连接酶封口。两条子链的合成方式不对称却同步推进，全部由多聚体复制体（replisome）协调完成。',
      credit: commonsCredit('LadyofHats (Mariana Ruiz)', 'Public domain'),
    },
  ],
  'molecular-biology-ch4-s2': [
    {
      src: '/images/bio/commons/prokaryotic-transcription.png',
      caption:
        '原核转录的延伸阶段（OpenStax 教材图）：RNA 聚合酶（σ 因子已在起始完成后释放）沿模板链 3′→5′ 方向移动，转录泡内约 12–17 bp 的 DNA 解旋区维持开放，RNA 以 5′→3′ 方向逐核苷酸聚合，新生 RNA 链与模板形成约 8 bp 的 RNA–DNA 杂合区后从酶分子顶部穿出；重新螺旋化的 DNA 区域在酶后方恢复双链。掺入错误核苷酸时聚合酶可回退数个核苷酸切除（gre 因子辅助的 Proofreading），保真性低于 DNA 复制但足以满足 RNA 的功能容错度。',
      credit: commonsCredit('OpenStax', 'CC BY 4.0'),
    },
    {
      src: '/images/bio/pdb/4LJZ.jpeg',
      caption:
        '大肠杆菌 RNA 聚合酶全酶的实验测定结构（X 射线晶体学，3.6 Å）：核心酶（α₂ββ′ω）呈蟹钳形，钳口围出宽约 2.5 nm 的 DNA 通道；σ⁷⁰ 因子（独立着色的一段）跨骑在钳口上，其 2.4 区与 4.2 区分别伸向 −10 与 −35 元件识别启动子。转录起始完成后 σ 因子从钳口解离，核心酶夹住 DNA 并沿模板滑行——同一台机器“带 σ 起始、卸 σ 延伸”的结构切换是原核基因表达调控的第一层机关。',
      credit: pdbCredit('PDB 4LJZ'),
    },
  ],
  'molecular-biology-ch6-s4': [
    {
      src: '/images/bio/commons/translation-elongation.png',
      caption:
        '核糖体上的翻译延伸：mRNA 结合于大小亚基之间的通道；氨酰-tRNA 经 EF-Tu·GTP 护送进入 A 位（氨酰位），密码子–反密码子正确配对触发 GTP 水解与构象校验；转肽反应将 P 位（肽酰位）携带的肽链转移到 A 位氨基酸上（肽键由 23S rRNA 催化），随后 EF-G·GTP 驱动核糖体沿 mRNA 移动一个密码子——空载 tRNA 经 E 位（出口位）离去（图为突出 A/P 位机制的简化表示，E 位未显式标出），肽链经出口通道穿出核糖体。',
      credit: commonsCredit('LadyofHats (Mariana Ruiz)', 'Public domain'),
    },
    {
      src: '/images/bio/pdb/4V4R.jpeg',
      caption:
        '嗜热栖热菌 70S 核糖体的整体实验结构（X 射线晶体学）：50S 大亚基与 30S 小亚基界面间结合的 tRNA 清晰可辨——本结构捕获了 P 位与 E 位各一个苯丙氨酸 tRNA（两亚基之间的桥状密度），tRNA 反密码子端落在 30S 解码中心、氨基酸臂伸入 50S 肽酰转移酶中心，跨越约 7–8 nm。肽键形成由 23S rRNA 催化（核酶），延伸的每一步消耗 GTP（EF-Tu/EF-G 循环）。',
      credit: pdbCredit('PDB 4V4R'),
    },
  ],
  'molecular-biology-ch3-s3': [
    {
      src: '/images/bio/commons/holliday-junction.png',
      caption:
        '同源重组的 Holliday 交叉：两条同源 DNA 双链经单链断裂与交叉连接形成 Holliday 交叉结构——交换的异源双链（heteroduplex）两侧仍为亲本链。交叉点沿 DNA 移动（分支迁移，由 RuvAB 等蛋白驱动）扩大交换区；随后 RuvC 内切酶在两种不同平面切开（解离），分别产生非交换型（patch，仅一段异源双链）与交换型（splice，两侧基因重组）产物。RecA 蛋白（原核）催化链侵入与三分叉中间体形成—— Holliday 模型解释了真核减数分裂中可见的交叉（chiasmata）。',
      credit: commonsCredit('Mouagip', 'Public domain'),
    },
  ],
  'molecular-biology-ch5-s2': [
    {
      src: '/images/bio/commons/rna-splicing.png',
      caption:
        '剪接体（spliceosome）介导的 pre-mRNA 剪接两步转酯反应：U1 识别 5′ 剪接位点（GU），U2 结合分支点并使该腺苷（A）外凸；第一步转酯——分支点 A 的 2′-OH 攻击 5′ 剪接位点，形成套索（lariat）中间体并释放上游外显子；第二步转酯——上游外显子新生的 3′-OH 攻击 3′ 剪接位点（AG），两个外显子连接、内含子以套索形式被切除降解。GU-AG 边界与分支点 A 是剪接机器识别的三类顺式元件。',
      credit: commonsCredit('BCSteve', 'CC BY-SA 3.0'),
    },
    {
      src: '/images/bio/pdb/5NRL.jpeg',
      caption:
        '酿酒酵母前催化剪接体（B 复合物）的实验结构（冷冻电镜，7.2 Å）：U2 snRNP 与 U4/U6·U5 三聚体已组装到位，四十余种蛋白与多条 snRNA 构成细胞内最复杂的分子机器之一。此阶段分支点腺苷已被 U2 外凸、第一步转酯反应尚未发生——剪接体在剪接进程中反复拆解与重装（ATP 酶解聚蛋白驱动），每一步构象转换都伴随 snRNA 间碱基配对网络的重写，催化中心最终由 U2/U6 snRNA 自身构成（又一例核酶）。',
      credit: pdbCredit('PDB 5NRL'),
    },
  ],
  'molecular-biology-ch8-s1': [
    {
      src: '/images/bio/commons/chromatin-packaging.png',
      caption:
        '染色质的多级包装层级：DNA 双螺旋（直径 2 nm）→ 组蛋白八聚体缠绕 147 bp DNA 约 1.65 圈构成核小体，串成 10 nm「串珠」纤维 → 借组蛋白 H1 螺旋成 30 nm 纤维 → 环状结构域锚定于蛋白质支架 → 最终浓缩为中期染色体（合计压缩约 10⁴ 倍而仍保持可转录、可复制）。图中「Add core histones / Add histone H1 / Add further scaffold proteins」标注每级包装的添加成分；包装层级间的转换由组蛋白修饰、凝聚素（condensin）等调控——基因表达调控的第一步就是打开包装。',
      credit: commonsCredit('Richard Wheeler (Panther)', 'CC BY-SA 3.0'),
    },
    {
      src: '/images/bio/pdb/1AOI.jpeg',
      caption:
        '核小体核心颗粒的实验测定结构（X 射线晶体学，2.8 Å，1997 年 Luger 等的经典解析）：146 bp DNA 以约 1.65 圈左手超螺旋缠绕组蛋白八聚体（中央 H3·H4 四聚体、两侧各一个 H2A·H2B 二聚体），缠绕直径约 10 nm、螺距约 2.7 nm。组蛋白富含 Lys/Arg 的碱性表面通过静电作用（无序列特异性）结合 DNA 磷酸骨架；组蛋白 N 端尾部自颗粒内部伸出，是乙酰化/甲基化等表观遗传修饰的物理载体。',
      credit: pdbCredit('PDB 1AOI'),
    },
  ],
  'molecular-biology-ch7-s1': [
    {
      src: '/images/bio/commons/lac-operon.png',
      caption:
        '乳糖操纵子（lac operon）的双重调控：结构基因 lacZ（β-半乳糖苷酶）/lacY（透性酶）/lacA（转乙酰酶）由同一启动子 P 转录；调节基因 lacI 表达的阻遏蛋白四聚体结合于操纵基因 O，阻挡 RNA 聚合酶起始（负调控）；诱导物别乳糖与阻遏蛋白结合使其变构脱离 O 位点。同时 CAP–cAMP 复合物结合启动子上游（正调控）——葡萄糖匮乏时 cAMP 升高、CAP 协助招募 RNA 聚合酶。乳糖与葡萄糖同时存在时葡萄糖的代谢物使 cAMP 维持低位（代谢物阻遏），操纵子仅在“有乳糖且无葡萄糖”时高效开启——两层调控的与门逻辑。',
      credit: commonsCredit('G3pro 原作 / Tereseik 衍生', 'CC BY 2.0'),
    },
    {
      src: '/images/bio/pdb/1LBG.jpeg',
      caption:
        '乳糖操纵子阻遏蛋白（LacI）与操纵基因 DNA 复合物的实验结构（X 射线晶体学，4.8 Å，α-碳轨迹示意）：LacI 二聚体骑跨 DNA（图中双螺旋清晰可辨），每个亚基 N 端 DNA 结合域的螺旋–转角–螺旋基序插入大沟识别操纵基因的准对称序列，铰链螺旋则以小沟的中央碱基对为支点撬开窄沟——四聚体 LacI 同时结合两个远隔的操纵基因位点时可使 DNA 成环，进一步增强阻遏。别乳糖结合调节域后铰链螺旋解离、蛋白变构释放 DNA。',
      credit: pdbCredit('PDB 1LBG'),
    },
  ],
  'molecular-biology-ch7-s3': [
    {
      src: '/images/bio/commons/trp-attenuation.png',
      caption:
        'trp 操纵子的转录衰减机制（上：高色氨酸；下：低色氨酸）：前导区 1–4 区段可互斥配对——高 Trp 时核糖体顺利翻译前导肽越过 Trp 密码子并遮蔽区段 2，3:4 终止子发夹（后随 poly-U）形成，转录提前终止；低 Trp 时核糖体停滞在区段 1 的连续 Trp 密码子处，2:3 抗终止发夹形成，RNA 聚合酶通读进入结构基因（trp regulated genes）。衰减与阻遏双系统叠加，使 trp 操纵子对色氨酸浓度的应答呈两档精细调控；图未绘出转录起始时的 1:2 暂停发夹（属常见简化）。',
      credit: commonsCredit('Histidine', 'CC BY-SA 3.0'),
    },
  ],
  'molecular-biology-ch8-s5': [
    {
      src: '/images/bio/commons/rna-interference.png',
      caption:
        'RNA 干扰（RNAi）通路：外源或内源长双链 RNA 被 Dicer（RNaseⅢ 家族核酸内切酶）切割为约 21–23 nt 的 siRNA 双链；随后与 Argonaute 蛋白组装成 RISC 复合体，乘客链被降解、保留向导链；向导链按碱基配对识别靶 mRNA，Argonaute 的 PIWI 结构域在配对区中部切割 mRNA，使其被快速降解——序列特异性的基因沉默（Fire 与 Mello，2006 年诺贝尔奖）。内源 miRNA 前体（发夹 RNA）经 Dicer 加工后走类似路径，但通常仅部分配对、引起翻译抑制与去稳定化。',
      credit: commonsCredit('Silvia3（改编自 Matzke & Matzke, PLoS Biol）', 'CC BY 2.5'),
    },
  ],
  'molecular-biology-ch9-s2': [
    {
      src: '/images/bio/commons/pcr-cycles.png',
      caption:
        '聚合酶链式反应（PCR）的三步温度循环：①变性（约 94–95 ℃）——双链模板氢键断裂解为单链；②退火（约 50–65 ℃，低于 Tm 5 ℃左右）——引物与互补序列特异性结合；③延伸（约 72 ℃）——Taq DNA 聚合酶从引物 3′-OH 起沿模板合成新链。每循环目的片段数翻倍（2ⁿ），30 轮即可扩增约 10⁹ 倍；上一轮产物成为下一轮模板是指数扩增的关键。耐热聚合酶（Taq，来自嗜热水生菌）使自动化热循环成为可能（Mullis，1993 年诺贝尔奖）。',
      credit: commonsCredit('Enzoklop', 'CC BY-SA 3.0'),
    },
  ],
  'molecular-biology-ch9-s4': [
    {
      src: '/images/bio/commons/sanger-sequencing.png',
      caption:
        'Sanger 双脱氧链终止法测序：以单链模板+引物进行体外复制反应，反应体系中掺入少量双脱氧核苷酸（ddNTP，3′ 缺少羟基），一旦掺入链即终止延伸；四种 ddNTP 分别荧光标记，一个反应管即产生一套长度相差一个核苷酸、末端固定的片段群；毛细管电泳按长度分离，激光激发荧光读取末端碱基——从短到长依次读出的序列即模板互补链序列（5′→3′）。读长可达 800–1000 bp、单碱基分辨，是人类基因组计划的主力方法（Sanger 因此第二次获诺贝尔奖）。',
      credit: commonsCredit('Estevezj', 'CC BY-SA 3.0'),
    },
  ],
  'molecular-biology-ch11-s2': [
    {
      src: '/images/bio/pdb/5F9R.jpeg',
      caption:
        '化脓链球菌 Cas9 与 sgRNA、靶标 DNA 三元复合物的实验结构（X 射线晶体学，3.4 Å）：识别（REC）叶与核酸酶叶两大结构域钳住 sgRNA–靶链形成的 R 环（RNA:DNA 异源双链），sgRNA 骨架被 Cas9 的磷酸结合凹槽逐段锚定；HNH 结构域摆向靶标链呈切割活性取向，RuvC 结构域负责切割非靶标链。两结构域各自经历依赖互补配对的构象校验（checkpoint），仅在向导 RNA 与靶序列完全互补且 PAM（5′-NGG-3′）正确的条件下才同时激活——单链切口酶（nickase）与 dCas9 等基因组编辑工具均为对这一结构机制的定向改造。',
      credit: pdbCredit('PDB 5F9R'),
    },
  ],

  // ==================== 细胞生物学 ====================
  'cell-biology-ch1-s2': [
    {
      src: '/images/bio/commons/animal-cell-anatomy.svg',
      caption:
        '典型的动物细胞（真核细胞）结构总览：以双层核被膜包裹、含核仁的细胞核为中心；细胞质中分布线粒体（产能与凋亡信号整合）、粗面与滑面内质网（蛋白质合成/脂质与钙储存）、高尔基体（加工分选）、溶酶体（消化）、过氧化物酶体（氧化解毒）等膜性细胞器，以及核糖体、中心体与细胞骨架等非膜性结构。各细胞器以生物膜为共同结构基础，通过膜流（囊泡运输）互通——真核细胞的区室化使互不相容的生化反应得以同时高效运行。',
      credit: commonsCredit('LadyofHats (Mariana Ruiz)', 'Public domain'),
    },
  ],
  'cell-biology-ch2-s4': [
    {
      src: '/images/bio/commons/sodium-potassium-pump-cycle.png',
      caption:
        'Na⁺/K⁺-ATP 酶（钠钾泵）的 E1/E2 构象循环（四步）：①泵开口胞内侧、结合 3 Na⁺（ATP 在场）→ ②ATP 水解、磷酸基转移至泵蛋白，构象翻转为开口胞外、释放 3 Na⁺ → ③胞外结合 2 K⁺ → ④去磷酸化、构象复原、2 K⁺ 释入胞质。每循环消耗 1 ATP、泵出 3 Na⁺ 泵入 2 K⁺（净外移 1 个正电荷，生电性泵），维持胞内高 K⁺/低 Na⁺ 的离子梯度——既是静息电位的基础，也为葡萄糖等物质的继发性主动转运储备能量。',
      credit: commonsCredit('Mariana Ruiz Villarreal (LadyofHats)', 'Public domain'),
    },
    {
      src: '/images/bio/pdb/2ZXE.jpeg',
      caption:
        'Na⁺/K⁺-ATP 酶的实验测定结构（X 射线晶体学，2.4 Å，鲨鱼直肠腺）：α 亚基的 10 次跨膜螺旋围成离子转运腔（图中跨膜区中部可见配位残基），此构象为 E2·2K⁺·Pi 态——膜外侧进入的两个 K⁺ 已结合并被锁闭（occluded，无通路可进出），等待去磷酸化后开口向胞内释放；单个跨膜段的 β 糖蛋白亚基与 FXYD 家族 γ 小亚基（最外侧短螺旋）分别稳定 α 亚基并调节泵亲和力。P 型泵“离子门控两不透”的交替通达（alternating access）几何在原子尺度上直接可见。',
      credit: pdbCredit('PDB 2ZXE'),
    },
  ],
  'cell-biology-ch3-s1': [
    {
      src: '/images/bio/web/chief-cell-rer-em.jpg',
      caption:
        '胃腺主细胞的透射电镜照片：细胞基部密布平行排列的粗面内质网（RER）——扁囊外表面缀满核糖体颗粒，是分泌蛋白合成的车间；核上区可见高尔基体将酶原蛋白加工浓缩为顶部的分泌颗粒（酶原颗粒）。「核糖体-内质网-高尔基-分泌颗粒」的极性排布是经典分泌细胞的结构签名，也是内膜系统「区室分工、流水作业」的最佳实例。',
      credit: webCredit('大学组织学实验教程电镜图库'),
    },
  ],
  'cell-biology-ch3-s2': [
    {
      src: '/images/bio/web/endomembrane-transport.png',
      caption:
        '内膜系统的膜泡运输总览：内质网合成的蛋白与脂质经运输囊泡送往高尔基体，在高尔基体内自顺面到反面依次加工、分选，或经分泌囊泡抵达质膜外排（分泌途径），或进入溶酶体；质膜则通过内吞回收受体与膜组分（内吞途径）。分泌与内吞两条干线在「向外送」与「向内收」之间维持膜的动态平衡——细胞每小时的膜翻转量可达其表面积的数倍。',
      credit: webCredit('开放教育资源（OER）生物学教材'),
    },
  ],
  'cell-biology-ch4-s2': [
    {
      src: '/images/bio/commons/secretory-pathway.svg',
      caption:
        '蛋白质分泌途径：分泌蛋白在粗面内质网（RER）膜旁核糖体上合成并共翻译转入内质网腔，经折叠、二硫键形成与 N-连接糖基化初加工后由 COPⅡ 包被小泡运输至高尔基体；在高尔基体顺面（cis）→反面（trans）完成糖链修剪与分选信号解码，最终由分泌小泡运送至细胞膜，经胞吐作用外排。可溶性分泌蛋白全程不接触胞质溶胶——膜系统的区室连续性构成了真核细胞的“分泌公路”。',
      credit: commonsCredit('Mariana Ruiz (LadyofHats)', 'Public domain'),
    },
  ],
  'cell-biology-ch5-s1': [
    {
      src: '/images/bio/commons/mitochondrion-ultrastructure.svg',
      caption:
        '线粒体的超微结构：外膜平滑、含孔蛋白（VDAC）通透性较高；内膜向基质内折叠形成嵴（cristae），其上分布电子传递链复合体与 ATP 合酶（嵴的折叠极大增加产能膜面积）；嵴间基质含三羧酸循环酶系、mtDNA、核糖体等。内膜两侧的质子梯度（外正内负的膜电位）是化学渗透的能量形式——线粒体是细胞氧化磷酸化与能量转换的核心场所，也是凋亡信号（细胞色素 c 释放）的策源地。',
      credit: commonsCredit('Mariana Ruiz Villarreal (LadyofHats)', 'Public domain'),
    },
  ],
  'cell-biology-ch5-s2': [
    {
      src: '/images/bio/web/mito-chloroplast-diagram.png',
      caption:
        '线粒体与叶绿体的结构对照：两者均具双层被膜（外膜与内膜之间为膜间隙）、基质内含自身环状 DNA 与核糖体——半自主性的形态学证据；线粒体内膜内折成嵴并嵌有 ATP 合酶，叶绿体内膜则演化为类囊体垛叠的基粒。内共生学说据此认为二者分别起源于被真核细胞吞噬的α-变形菌与蓝细菌：双层被膜即「吞噬膜＋细菌原生膜」的历史遗存。',
      credit: webCredit('开放教育资源（OER）生物学教材'),
    },
  ],
  'cell-biology-ch6-s1': [
    {
      src: '/images/bio/commons/cytoskeleton.jpg',
      caption:
        '细胞骨架的三类蛋白纤维网络：微管由 α/β 微管蛋白异二聚体头尾相接组装成的中空管（外径约 25 nm），自中心体向外放射，是囊泡运输的轨道与纺锤体的元件（秋水仙碱/紫杉醇的作用靶点）；中间丝（约 10 nm，如波形蛋白、角蛋白）构成抗张力网络，锚定核膜与桥粒；微丝（肌动蛋白纤维，直径约 7 nm）富集于细胞皮层，驱动运动、吞噬与胞质分裂（细胞松弛素/鬼笔环肽的作用靶点）。三者均为动态结构——聚合/解聚的平衡本身就是功能调控。',
      credit: commonsCredit('Laboratoires Servier (Smart Servier)', 'CC BY-SA 3.0'),
    },
  ],
  'cell-biology-ch7-s3': [
    {
      src: '/images/bio/commons/chromatin-packaging.png',
      caption:
        '染色体多级包装模型（核型视角）：2 nm DNA 双螺旋 → 10 nm 核小体串珠 → 30 nm 螺线管纤维 → 襻环结构域 → 浓缩为中期染色体。间期染色质以环状结构域状态存在、保持转录活性（图中标注每级包装依次添加 core histones、histone H1 与 scaffold proteins）；仅在分裂期才完全浓缩为棒状染色体。全套基因组压缩约 10⁴ 倍而复制与转录机器仍可定位操作——包装与解包装本身就是基因调控的组成环节。',
      credit: commonsCredit('Richard Wheeler (Panther)', 'CC BY-SA 3.0'),
    },
  ],
  'cell-biology-ch8-s2': [
    {
      src: '/images/bio/commons/gpcr-camp-signaling.jpg',
      caption:
        'GPCR–cAMP–PKA 信号通路：配体结合七次跨膜受体胞外结构域→胞内侧异三聚体 G 蛋白的 Gα 亚基交换 GDP 为 GTP 而活化，与 Gβγ 解离→活化的 Gαs 激活腺苷酸环化酶（AC）→ ATP 环化为第二信使 cAMP→ cAMP 结合 PKA 调节亚基释放催化亚基→磷酸化下游靶蛋白（如 CREB 转录因子、磷酸化酶激酶，启动糖原分解级联）。Gα 固有的 GTP 酶活性（可被 RGS 加速）使信号及时关闭；霍乱毒素抑制 GTP 水解造成信号“卡死”是其病理机制。',
      credit: commonsCredit('Evvong168', 'CC BY 4.0'),
    },
    {
      src: '/images/bio/structures/CMP.svg',
      caption:
        '第二信使 cAMP（3′,5′-环腺苷一磷酸）的结构式：磷酸基团以双酯键同时连接核糖的 3′-OH 与 5′-OH，形成张力驱动的环状结构——环约束使 cAMP 的磷酸二酯键水解 ΔG°′ 比 ATP 更负，也赋予其不被大多数磷酸酶识别的专一性，只能由 cAMP 磷酸二酯酶（PDE，咖啡因的靶点）水解为 5′-AMP。受体经 Gαs→腺苷酸环化酶可在数秒内把胞内 cAMP 从约 10⁻⁸ M 放大数十倍，PKA 调节亚基上两个 cAMP 结合位点协同结合后释放催化亚基——信号级联“第二信使”一词的来源分子。',
      credit: CCD_CREDIT,
    },
  ],
  'cell-biology-ch8-s4': [
    {
      src: '/images/bio/commons/rtk-ras-mapk-pathway.svg',
      caption:
        '受体酪氨酸激酶（RTK）–Ras–MAPK 通路：信号分子（如表皮生长因子 EGF）诱导受体二聚化，胞内酪氨酸激酶结构域相互磷酸化（自磷酸化）；磷酸化的酪氨酸作为停泊位点招募接头蛋白 Grb2–SOS，将质膜内侧的 Ras 从 GDP 态转换为 GTP 活化态；活化的 Ras 依次激活 RAF→MEK→ERK 三级激酶级联（逐级放大信号），ERK 进入细胞核磷酸化转录因子（如 Elk-1），调控增殖与分化相关基因表达。通路中 GAP 蛋白加速 Ras 水解 GTP 而关闭信号——Ras 突变失活 GTP 酶活性即“卡在开位”，是人类肿瘤中最常见的癌基因激活方式之一。',
      credit: commonsCredit('cybertory', 'CC BY-SA 3.0'),
    },
  ],
  'cell-biology-ch9-s1': [
    {
      src: '/images/bio/web/cell-junctions-overview.png',
      caption:
        '上皮细胞侧面连接装置的全景示意（自顶向基）：紧密连接构成最顶端的封闭索；其下黏附连接（肌动蛋白锚定）与桥粒（中间纤维锚定）负责机械铆合；缝隙连接允许小分子与离子直接胞间互通；基底的半桥粒把细胞锚在基膜上。四类连接各司封闭、连接与通讯之职，沿侧膜排布成典型的「连接复合体」。',
      credit: webCredit('GeeksforGeeks 教育图库'),
    },
    {
      src: '/images/bio/web/tight-junction-diagram.jpg',
      caption:
        '紧密连接的分子模型：相邻两枚细胞的质膜由跨膜蛋白链（密封蛋白 claudin 与闭合蛋白 occludin）直接并合，封闭细胞间隙——像拉链一样把上皮层的细胞侧隙焊死，既阻断分子自顶部向基底侧的旁细胞渗漏，又锁定膜蛋白的顶-基极性分布。紧密连接的密封性并非恒定，可由信号瞬时调节以允许离子与免疫细胞选择性穿越。',
      credit: webCredit('UEN Pressbooks 开放教材'),
    },
  ],
  'cell-biology-ch9-s2': [
    {
      src: '/images/bio/web/desmosome-diagram.jpg',
      caption:
        '桥粒的结构模型：两侧细胞的跨膜钙黏蛋白（桥粒芯蛋白与桥粒胶蛋白）在胞间隙中互锁，胞内端锚定于致密斑块（plaque），斑块再捕系角蛋白中间纤维——形成从一枚细胞骨架直通邻枚细胞骨架的「铆钉」。桥粒赋予上皮与心肌强大的抗剪切强度：抗桥粒自身抗体所致的天疱疮与致密斑蛋白突变所致的心肌病，从反面印证了这一机械连接的生理分量。',
      credit: webCredit('UEN Pressbooks 开放教材'),
    },
  ],
  'cell-biology-ch10-s2': [
    {
      src: '/images/bio/commons/cdk-cyclin.png',
      caption:
        '细胞周期的 CDK–cyclin 引擎：cyclin 周期性合成与降解（经泛素–蛋白酶体途径）驱动 CDK 活性振荡，不同 cyclin–CDK 组合序贯主导各时相转换——G1 期 cyclin D–CDK4/6 磷酸化 Rb 释放 E2F，启动 G1/S 基因表达；cyclin E–CDK2 触发 S 期起始、启动复制起点；cyclin A–CDK2 维持 S 期进程；cyclin B–CDK1（MPF）驱动 G2/M 转换与有丝分裂事件；末期 APC/C 降解 cyclin B 使细胞退出分裂。CKI（p21、p27 等）与磷酸化修饰（Wee1/Cdc25）对引擎进行精密校准，DNA 损伤经 p53→p21 拉动刹车（限制点与纺锤体组装检查点为图中主线之外的监督层）。',
      credit: commonsCredit('Fatma Abukhater', 'CC0'),
    },
  ],
  'cell-biology-ch10-s4': [
    {
      src: '/images/bio/commons/mitosis-phases.svg',
      caption:
        '有丝分裂各时相：前期（prophase）——染色质凝缩为可见染色体、中心体向两极移动并开始装配纺锤体；前中期（prometaphase）——核膜崩解，纺锤微管经动粒捕获染色体；中期（metaphase）——染色体（含动粒）整齐排列于赤道板；后期（anaphase）——着丝粒分裂，姐妹染色单体分离为子染色体分别向两极移动（anaphase A 动粒微管缩短 + anaphase B 极间微管滑动推两极外移）；末期（telophase）——子核核膜重建、染色体去凝缩；胞质分裂（ cytokinesis）由肌动蛋白–肌球蛋白收缩环形成分裂沟，将胞质一分为二。',
      credit: commonsCredit('Jpablo cad & Juliana Osorio 等', 'CC BY-SA 3.0'),
    },
  ],
  'cell-biology-ch10-s5': [
    {
      src: '/images/bio/commons/meiosis-stages.svg',
      caption:
        '减数分裂的核心事件：减数第一次分裂（MI）——前期Ⅰ细线期至偶线期同源染色体配对联会（联会复合体），粗线期同源重组交换形成交叉（chiasmata，可见的重组表现型），中期Ⅰ四分体（二价体）排列赤道板，后期Ⅰ分离的是同源染色体（而非姐妹染色单体）——遗传重组与自由组合在此造就配子多样性；减数第二次分裂（MII）类似有丝分裂，姐妹染色单体分离。最终一个二倍体细胞产生 4 个遗传上各异的单倍体配子——减数分裂是有性生殖遗传多样性的细胞学引擎。',
      credit: commonsCredit('Ali Zifan', 'CC BY-SA 4.0'),
    },
  ],
  'cell-biology-ch12-s1': [
    {
      src: '/images/bio/commons/apoptosis-morphology.png',
      caption:
        '细胞凋亡的形态学演变（自左至右）：正常细胞→细胞皱缩、体积缩小且变圆；细胞膜起泡（blebbing）但保持完整；染色质凝缩并边缘化、核碎裂；胞膜内陷分割形成凋亡小体（内含完整细胞器），被邻近吞噬细胞识别清除——全过程不泄漏内容物、不引发炎症，与坏死形成鲜明对照。分子层面由胱天蛋白酶（caspase）级联执行：死亡受体途径（Fas/FADD→caspase-8）与线粒体途径（Bcl-2 家族调控、细胞色素 c 释放→Apaf-1 凋亡体→caspase-9）在 caspase-3 汇合。',
      credit: commonsCredit('H. Hoffmeister（中文标注版）', 'Public domain'),
    },
  ],

  // ==================== 生物物理学 ====================
  'biophysics-ch2-s2': [
    {
      src: '/images/bio/commons/folding-funnel.png',
      caption:
        '蛋白质折叠的能量景观（折叠漏斗）：纵轴为自由能（向下降低），漏斗口代表构象熵极大的变性态系综（Unfolded）；表面粗糙、遍布局部极小值（动力学陷阱，对应 Molten globule 熔球态等中间体），需越过过渡态能垒；漏斗底唯一的深井即天然态（Native state）——全局自由能极小点。漏斗拓扑决定不同蛋白折叠速率可相差数个数量级；伴侣蛋白 GroEL 的作用即降低有效势垒（见本学科折叠机器的实验结构图）。',
      credit: commonsCredit('Thomas Splettstoesser (scistyle.com)', 'CC BY-SA 3.0'),
    },
  ],
  'biophysics-ch2-s3': [
    {
      src: '/images/bio/web/protein-folding-concepts.jpg',
      caption:
        '蛋白质折叠的三个核心概念：Levinthal 悖论——20 种氨基酸的全构象搜索空间（20^N）大到天文数字，天然折叠却毫秒即成；能量漏斗——自由能面整体向下收窄、构象熵随折叠递减，粗粒度的漏斗形景观引导多肽快速滑向天然态；动力学机制——「局部优先、全局在后」的框架模型，二级结构先在局部成形，再拼装为三级折叠。三者共同回答「折叠为何既快又准」。',
      credit: webCredit('PMC/NIH 开放获取文献插图'),
    },
  ],
  'biophysics-ch2-s4': [
    {
      src: '/images/bio/pdb/1OEL.jpeg',
      caption:
        'GroEL 伴侣蛋白的实验测定结构（X 射线晶体学，2.8 Å，大肠杆菌）：14 个相同的亚基堆叠为背靠背的两个七元环，每环围出可容纳约 60 kDa 未折叠多肽的笼状腔室，环口边缘由柔性末端形成“手指”状入口。GroEL 与帽状的 GroES（未示）及 ATP 循环配合，将陷入动力学陷阱的底物解聚后封闭于亲水腔内重新折叠——以 ATP 水解为代价购买“重来一次”的机会，是能量景观理论中降低有效势垒高度的实验典范。',
      credit: pdbCredit('PDB 1OEL'),
    },
    {
      src: '/images/bio/web/folding-landscape-chaperones.jpg',
      caption:
        '体外复折与胞内折叠的能量景观对照：稀溶液中自变性剂复折的多肽可自行滑向天然态（N），也易陷入错误折叠（M*）与聚集（Agg）的能阱；而细菌胞内新生链一出生即被触发因子（TF）护持、由 Hsp70 反复结合释放，把聚集通道从能量上「垫高」，使漏斗更陡更光滑——伴侣蛋白并不改变折叠的热力学终点，只优化动力学的路径选择。',
      credit: webCredit('PMC/NIH 开放获取文献插图'),
    },
  ],
  'biophysics-ch3-s1': [
    {
      src: '/images/bio/drawn/membrane-phase-transition.svg',
      caption:
        '膜脂相变：凝胶相（Lβ）中磷脂尾部全反式伸展、排列紧密有序（左，T < Tm）；温度升至相变温度 Tm 以上转入液晶相（Lα），尾部出现 gauche 歪扭构象、活动加剧（右，T > Tm），膜流动性与侧向扩散增大。胆固醇（灰色刚性甾环）插入两层尾部之间起双向缓冲——Tm 以上限制流动、Tm 以下阻止紧密排列，把动物细胞膜的相变「抹平」为宽温区中间态。不饱和双键的顺式弯折使链间无法紧密堆积，故 Tm 显著低于同链长饱和磷脂（DPPC 的 Tm ≈ 41 ℃）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch4-s1': [
    {
      src: '/images/bio/commons/kinesin-walking.png',
      caption:
        '驱动蛋白-1 沿微管的「手拉手」（hand-over-hand）步进循环（四阶段）：两个球状马达域交替与微管结合——微管由 α/β 微管蛋白异二聚体头尾相接组装，原聚体间距即步长 8 nm（图中 Dimers of tubulin (8nm) 标注）；ATP 结合使前导头颈链对接、把后随头甩向微管正端的下一个结合位点，ATP→ADP+Pi 的水解循环驱动构象交替。本图为马达域机制特写，茎部与货物的完整结构见下方实验结构图。',
      credit: commonsCredit('Slagt 原作，Bcjordan 衍生', 'Public domain'),
    },
    {
      src: '/images/bio/pdb/3KIN.jpeg',
      caption:
        '大鼠驱动蛋白-1 马达结构域二聚体的实验测定结构（X 射线晶体学）：两个相同的球状头部（各自为 P-loop NTPase 折叠，含 ATP 结合口袋与微管结合面）由颈链（neck linker）汇聚为卷曲螺旋茎部（图中向上延伸的双股螺旋）。ATP 在前导头内水解使颈链对接（docking）、把后随头甩向微管正端的下一个结合位点——晶体结构中颈链的构象直接对应马达“换步”的机械冲程，8 nm 步长由微管原聚体间距与头部尺度共同决定。',
      credit: pdbCredit('PDB 3KIN'),
    },
  ],
  'biophysics-ch6-s1': [
    {
      src: '/images/bio/drawn/optical-tweezers.svg',
      caption:
        '光镊原理：近红外激光（~1064 nm，对活样品光损伤小）经高 NA 油浸物镜强会聚，在焦点处形成三维梯度光势阱；折射率高于介质的介电微珠（n ≈ 1.5 > 1.33）被俘获于焦点附近——梯度力（指向焦点）与散射力（沿光传播方向）平衡。右侧插图以光线追迹解释力的来源：光线穿珠折射后动量改变，反作用力把珠推向光强更大处（焦点）。微珠偶联单个生物分子（马达蛋白/RNA 聚合酶/DNA）后，pN 级牵引力使珠偏离焦点、位移与力成正比（F = −kΔx，小位移近似下阱刚度 k 约 0.1 pN/nm）——力分辨率 ~0.1 pN、位移分辨率 nm 级的单分子力谱。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch6-s3': [
    {
      src: '/images/bio/commons/tirf-microscopy.png',
      caption:
        '全内反射荧光显微术（TIRF）原理：激发激光（红）以大于临界角（玻璃 n≈1.5 → 水 n≈1.33 时约 61°）射向玻片—溶液界面发生全内反射，在样品侧产生深度仅约 100–200 nm 的隐失场（evanescent field）——场强随距离指数衰减，只激发贴近玻片的荧光分子（绿），大幅消除背景噪声，使单个荧光标记分子呈现为可示踪的衍射受限荧光斑点。图中编号：①高 NA 物镜（收集荧光）②发射荧光 ③样品溶液 ④贴壁样品层 ⑤近表面荧光分子 ⑥隐失场 ⑦激发激光 ⑧玻璃棱镜/载玻片。',
      credit: commonsCredit('Dawid Kulik', 'Public domain'),
    },
  ],
  'biophysics-ch7-s1': [
    {
      src: '/images/bio/drawn/resting-membrane-potential.svg',
      caption:
        '静息膜电位的离子基础：膜两侧离子分布不均——胞外高 Na⁺/Cl⁻，胞内高 K⁺ 与不可通透的阴离子 A⁻（蛋白质、磷酸化中间物等）。膜对 K⁺ 的本底通透性最高，K⁺ 经漏通道顺浓度梯度外流，膜内侧净负电荷积累；生电性 Na⁺/K⁺-ATP 酶（每水解 1 ATP 泵出 3 Na⁺、泵入 2 K⁺，净外移 1 个正电荷）维持离子梯度。两者叠加建立约 −70 mV 的外正内负静息电位——数值接近但不等于 K⁺ 的 Nernst 平衡电位 E_K（约 −90 mV），差值来自 Na⁺ 少量内漏与泵的生电贡献。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch7-s2': [
    {
      src: '/images/bio/commons/action-potential.jpg',
      caption:
        '动作电位的波形与相位（OpenStax 教材图）：静息电位（约 −70 mV）→去极化达到阈电位（约 −55 mV）触发再生性 Na⁺ 内流，迅速去极化至峰值（约 +30 mV，超射）→Na⁺ 通道失活、K⁺ 外流主导复极化→K⁺ 通道延迟关闭造成超极化后电位（undershoot）→恢复静息。全或无、再生性、不应期与幅度不变沿轴突传播，是 Hodgkin–Huxley 模型描述的对象——阈下刺激只引起局部电位（电紧张性扩布，指数衰减）。',
      credit: commonsCredit('OpenStax', 'CC BY 4.0'),
    },
  ],
  'biophysics-ch7-s3': [
    {
      src: '/images/bio/commons/saltatory-conduction.svg',
      caption:
        '有髓纤维的跳跃式传导（saltatory conduction）：髓鞘由胶质细胞质膜反复包绕轴突形成，膜电阻高、电容低，电压门控 Na⁺ 通道几乎只集中于裸露的郎飞结；动作电位在结区去极化产生的局部电流几乎无衰减地流过结间体，在下一个郎飞结重新触发再生性放电——信号如同“从结跳到结”。相比无髓纤维的连续传导，跳跃式传导使传导速度提高可达数十倍（人大腿神经纤维可达 100 m/s 以上），且每单位长度仅需重建小部分离子梯度，显著节能；多发性硬化等脱髓鞘疾病即因结间泄漏导致传导减慢甚至阻滞。',
      credit: commonsCredit('Helixitta', 'CC BY-SA 4.0'),
    },
  ],
  'biophysics-ch8-s1': [
    {
      src: '/images/bio/drawn/kcsa-selectivity-filter.svg',
      caption:
        '钾通道选择性滤器的识别机制（依据 PDB 1BL8 结构特征绘制）：主链羰基氧（红）沿滤器排列成 4 个串联的氧原子笼位点（S₁–S₄，共 16 个氧，来自 TVGYG 保守基序）。K⁺（紫，半径 1.33 Å）恰与氧笼形成等长配位（~2.8 Å，与水化配位几何一致）——去水化能量损失被完全补偿；Na⁺（0.95 Å）半径过小、无法同时贴近同层 4 个氧，静电补偿不足——故通道对 K⁺ 的选择性较 Na⁺ 高约 10⁴ 倍。滤器内 K⁺ 与水分子交替排列（knock-on 队列），新离子从外庭撞入把整列「顶」过去实现高通量；下方中央水腔由螺旋偶极静电稳定水合 K⁺。',
      credit: DRAWN_CREDIT,
    },
    {
      src: '/images/bio/pdb/1BL8.jpeg',
      caption:
        'KcsA 钾通道的实验测定结构（X 射线晶体学，3.2 Å，嗜热链霉菌）：四个亚基围成倒锥形通道，每个亚基贡献两个跨膜螺旋（外层感应膜电位、内层围成孔道）与介于其间的 P 区——P 区的主链羰基氧串成选择性滤器（图中通道外端的收缩环），排布恰与水合 K⁺ 的配位距离匹配，实现较 Na⁺ 高约 10⁴ 倍的选择性；滤器下方为充水的宽大中央腔，由螺旋倾斜度支撑的水合结构解释了“孔道看似封闭却仍能导通”的静电之谜。此结构确立了“通道以配位几何而非孔径识别离子”的范式（2003 年诺贝尔化学奖）。',
      credit: pdbCredit('PDB 1BL8'),
    },
  ],
  'biophysics-ch9-s4': [
    {
      src: '/images/bio/commons/cryo-em-workflow.png',
      caption:
        '冷冻电镜单颗粒重构（SPA）流程（中文标注版）：蛋白样品速冻玻璃化（vitrification，非晶冰防止冰晶损伤）于载网 → 电子束穿透冰层投影成像，直接电子检测器采集数千至数百万张粒子图像 → 颗粒挑选（particle picking）→ 二维对齐与平均（去噪）→ 三维分类（取向判定与构象异质性剔除）→ 三维密度图谱（3D map）→ 原子模型搭建与迭代精修。无需结晶即可在近原子分辨率解析膜蛋白等大分子机器——2017 年诺贝尔化学奖表彰的冷冻电镜与单颗粒重构方法学革命。',
      credit: commonsCredit('Hira Khan', 'CC BY 4.0'),
    },
  ],
}

/** 获取某小节的配图（无配图返回空数组） */
export function getIllustrations(sectionId: string): Illustration[] {
  return [
    ...(illustrations[sectionId] ?? []),
    ...(microIllustrations[sectionId] ?? []),
    ...(immunoIllustrations[sectionId] ?? []),
    ...(neuroIllustrations[sectionId] ?? []),
    ...(bioinfoIllustrations[sectionId] ?? []),
    ...(viroIllustrations[sectionId] ?? []),
  ]
}
