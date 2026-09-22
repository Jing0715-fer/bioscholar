// ============================================================
// BioScholar 结构生物学测验题库 - 批次 A1（第 1–3 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-structural-biology-1 ~ q-structural-biology-15）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3
// 依据：本平台《结构生物学实验方法》第 1–3 章教材正文常考点，
// 参照王大成《蛋白质工程学》、Sambrook《Molecular Cloning》
// 与 GE Healthcare《Protein Purification Handbook》
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const structuralBiologyQuizA1: QuizQuestion[] = [
  // ================= 第 1 章 结构生物学总论（q-structural-biology-1 ~ 5） =================
  {
    id: 'q-structural-biology-1',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch1',
    type: 'single',
    question: '截至 2024 年，蛋白质数据银行（PDB）收录的实验测定结构条目存量约为：',
    options: ['约 2.2 万条', '约 22 万条', '约 220 万条', '约 2 亿条'],
    answer: 1,
    explanation:
      'PDB 于 1971 年建于布鲁克海文国家实验室，起步仅收录 13 个结构；先后跨过 2008 年 5 万条与 2014 年 10 万条关口，2024 年存量已超过 22 万条、每年新增逾万条，其中约八成五来自 X 射线晶体学，冷冻电镜条目增速居首。约 2 亿条是 AlphaFold DB 预测结构的规模——预测库与实验库是互补的两座数据库，不能混为一谈，故选 B。',
    difficulty: 1,
  },
  {
    id: 'q-structural-biology-2',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch1',
    type: 'single',
    question: '关于冷冻电镜单颗粒分析的分子量适用范围，下列叙述最准确的是：',
    options: [
      '约 10 kDa 起步，分子越小越容易完成取向判定',
      '分子量下限约 100 kDa，大于 300 kDa 时定位与取向判定更可靠',
      '仅适用于 1 MDa 以上的巨大装配体',
      '不存在分子量下限，任何大小的蛋白都同样容易解析',
    ],
    answer: 1,
    explanation:
      '单颗粒成像的衬度随分子量下降而迅速衰减，信号瓶颈决定了约 100 kDa 的适用下限；大于 300 kDa 的颗粒信噪比充足，颗粒定位与取向判定更可靠。2013 年直接电子探测相机掀起分辨率革命后 2–3 Å 已成常规、铁蛋白最佳达 1.22 Å，但小分子量蛋白的衬度困难并未因此消失，小而稳定的蛋白仍首选晶体学或 NMR。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-3',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch1',
    type: 'truefalse',
    question:
      'X 射线晶体学实验直接测得的是各衍射斑的相位，而强度须经分子置换或重原子法另行推算。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '说法把强度与相位的关系说反了：探测器记录的是衍射斑的强度（结构因子振幅的平方），相位信息在实验中丢失，这就是「相位问题」，须经分子置换、多对同晶置换或反常散射（SAD/MAD）另行求解（第 7 章）。这也解释了为什么高质量同源模型与 AlphaFold 预测能显著提高解析成功率——它们提供的正是缺失的相位信息，而不是强度。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-4',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch1',
    type: 'single',
    question: '关于 X 射线晶体学、冷冻电镜单颗粒分析与溶液 NMR 三大方法的比较，下列叙述正确的是：',
    options: [
      'NMR 必须将样品冷冻或结晶后测定，输出单一静态坐标',
      '冷冻电镜可经计算分类解析构象异质性，NMR 是传统方法中唯一能直接测量皮秒至秒动力学的',
      'X 射线晶体学常规分辨率约 6–10 Å，远逊于另两种方法',
      '三种方法在分子量上没有分工，选择只取决于成本高低',
    ],
    answer: 1,
    explanation:
      'A 错——NMR 在近生理溶液状态测结构，无需晶体亦无需冰冻，产出的是携带柔性信息的结构系综；C 错——晶体学常规约 1.0–2.5 Å、crambin 纪录达 0.48 Å，恰恰是分辨率上限最高者；D 错——分子量分工明确：小而能结晶交晶体学、大而难结晶交电镜（约 100 kDa 起、大于 300 kDa 更佳）、以动力学为核心问题的中小蛋白交 NMR。B 正确概括了两种方法的独特优势。',
    difficulty: 3,
  },
  {
    id: 'q-structural-biology-5',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch1',
    type: 'multiple',
    question: '（多选题）关于三大结构解析方法，下列叙述正确的有：',
    options: [
      'X 射线晶体学以约 10 的 13 至 15 次方个分子组成的有序晶格放大微弱散射信号',
      '冷冻电镜单颗粒分析无需晶体，样品经液态乙烷玻璃化保存于薄冰中',
      '溶液 NMR 常规适用于约 30–50 kDa 以下，TROSY 结合氘代可推至约 100 kDa',
      '冷冻电镜对分子量没有下限，10 kDa 的小蛋白同样常规可解',
      'X 射线晶体学给出的本质是晶格中的静态快照',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      'D 错误：冷冻电镜存在约 100 kDa 的分子量下限，小于此值颗粒衬度不足、取向判定不可靠，小分子量蛋白仍应交给晶体学或 NMR。其余四项均为教材标准表述：晶格对散射信号的相干放大（A）、液态乙烷玻璃化薄冰制样（B）、NMR 的常规区间与 TROSY 扩展（C）、以及晶体学的静态快照属性（E，可由时间分辨实验部分补充）。',
    difficulty: 2,
  },
  // ================= 第 2 章 重组蛋白表达系统（q-structural-biology-6 ~ 10） =================
  {
    id: 'q-structural-biology-6',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch2',
    type: 'single',
    question: '大肠杆菌表达可溶性重组蛋白的经典「低温慢表达」方案是：',
    options: [
      'OD600 0.5–0.8 时加 IPTG 至 0.05–0.2 mM，16–18 °C 过夜诱导',
      'OD600 达 2.0 时加 IPTG 至 5 mM，37 °C 诱导 2 小时',
      '接种同时加入 1 M IPTG，42 °C 过夜诱导',
      '无需诱导剂，LB 培养基 37 °C 摇过夜即可',
    ],
    answer: 0,
    explanation:
      '低温慢表达的参数组合是：对数中期（OD600 0.5–0.8）加入低浓度 IPTG（0.05–0.2 mM）、16–18 °C 过夜诱导——低温减慢翻译与折叠的竞争、提高可溶比例，低浓度诱导剂减轻代谢负担。37 °C 快诱导仅适合本来就稳定易溶的原核酶类；高浓度 IPTG 常反而降低可溶蛋白比例，T7 体系更不需要 1 M 级的极端剂量。',
    difficulty: 1,
  },
  {
    id: 'q-structural-biology-7',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch2',
    type: 'single',
    question: '关于包涵体的处理与复性，下列叙述错误的是：',
    options: [
      '包涵体可先以 6–8 M 尿素或约 6 M 盐酸胍溶解变性',
      '稀释复性须把变性剂浓度骤降 50–100 倍，蛋白浓度常控制在 0.1 mg/mL 以下',
      '二硫键蛋白复性可加入约 10 比 1 的还原型与氧化型谷胱甘肽氧化还原对',
      '复性收率通常高达 80–90%，故应优先选择包涵体路线',
    ],
    answer: 3,
    explanation:
      '包涵体是「失败中的机会」而非优选路线：复性收率通常仅 5–20%，且复性蛋白的均一性常逊于可溶表达，结构生物学项目仅在没有替代路线时启用，D 的数字与结论皆错。A、B、C 均为标准操作：变性剂溶解、骤降浓度（或透析梯度）复性、GSH 与 GSSG 约 10:1 配对二硫键，另可以 0.4–1 M 精氨酸抑制聚集。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-8',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch2',
    type: 'truefalse',
    question:
      '毕赤酵母以甲醇诱导的 AOX1 启动子驱动外源基因表达，载体经基因组整合而遗传稳定，高密度发酵干重可达约 100 g/L；但其 N-糖基化为高甘露糖型，与人体糖型差异较大。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。AOX1 是酵母体系最强的启动子之一，甲醇诱导下外源蛋白可占可溶蛋白 30% 以上；载体线性化后整合进基因组、无质粒丢失之忧，补料分批高密度发酵干重约 100 g/L，毫克至克级收率屡见不鲜。短板恰在糖基化：高甘露糖型糖链可延伸数十个甘露糖残基，追求均一糖型时可选 GlycoSwitch 糖工程菌株或以酶切除糖后重构。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-9',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch2',
    type: 'single',
    question: '关于哺乳动物细胞表达系统与糖基化，下列叙述正确的是：',
    options: [
      'CHO 建系于 1977 年，当今约 70% 的重组蛋白类药物产自 HEK293',
      '瞬时表达以 PEI 转染悬浮 293F 细胞，常规滴度约 5–50 mg/L，48–72 小时收获',
      'Fc 的 N297 糖链去岩藻糖会使 ADCC 减弱约 50 倍',
      '稳定细胞系经 DHFR/MTX 或 GS/MSX 选择扩增，工业补料分批滴度仅约 5–50 mg/L',
    ],
    answer: 1,
    explanation:
      'A 颠倒了史实与份额：HEK293 建系于 1977 年、CHO 建系于 1957 年，约 70% 的重组蛋白类药物产自 CHO。C 方向反了——去除核心岩藻糖解除对 Fc 与 FcγRIIIa 结合的立体阻碍，ADCC 反而增强最多约 50 倍（obinutuzumab、mogamulizumab 即糖工程抗体）。D 低估稳定系：工业补料分批抗体滴度可达 1–5 g/L。B 正确：25 kDa 线性 PEI 转染、48–72 小时收获、常规滴度 5–50 mg/L。',
    difficulty: 3,
  },
  {
    id: 'q-structural-biology-10',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch2',
    type: 'multiple',
    question: '（多选题）关于融合标签与蛋白酶切割，下列叙述正确的有：',
    options: [
      'His6 标签仅约 0.8 kDa，以咪唑基螯合固定化金属，几乎不干扰结构与功能',
      'MBP 约 42 kDa，是常用标签中增溶能力最强的一档',
      'GST 标签 26 kDa 且自身形成二聚体，用后必须切除',
      'TEV 蛋白酶识别 ENLYFQ 与 Gly 之间的肽键，带 His 标签的酶可经二次镍柱负吸附清除',
      'Strep-tag II 以 500 mM 咪唑竞争洗脱',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      'E 张冠李戴：Strep-tag II 的洗脱靠 desthiobiotin 竞争（约 2.5 mM），生理盐条件即可完成、温和可逆；咪唑浓度梯度洗脱是 His 标签（IMAC）体系的做法。A 至 D 均为标准知识：His6 小而近中性（A）、MBP 共折叠增溶能力最强（B）、GST 自身二聚须切（C）、TEV 切口在 Q 与 G 之间且其 His 标签支撑负吸附工艺（D）。',
    difficulty: 2,
  },
  // ================= 第 3 章 蛋白质纯化的原理：层析基础（q-structural-biology-11 ~ 15） =================
  {
    id: 'q-structural-biology-11',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch3',
    type: 'single',
    question: 'IMAC 纯化 His6 标签蛋白时，常规的咪唑洗脱浓度约为：',
    options: ['5–20 mM', '40–60 mM', '150–500 mM', '2–5 M'],
    answer: 2,
    explanation:
      '咪唑浓度按任务分段：结合缓冲液 10–40 mM 用于压制内源组氨酸丰富杂蛋白的非特异结合，洗涤段 20–60 mM 进一步清杂，洗脱则须 150–500 mM 才能竞争占据金属配位点、释放目标蛋白。5–20 mM 只会把弱结合杂蛋白洗下来；2–5 M 属浪费且有变性风险。另须记得咪唑在 280 nm 有吸收，高浓度会使监测基线上移，读峰须扣除参比。',
    difficulty: 1,
  },
  {
    id: 'q-structural-biology-12',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch3',
    type: 'single',
    question:
      '某蛋白等电点 pI 为 8.5，在 pH 6.0 的醋酸盐缓冲液中，该蛋白所带电荷与应选的离子交换剂为：',
    options: [
      '带负电，选阴离子交换剂 Q 或 DEAE',
      '带正电，选阳离子交换剂 SP 或 CM',
      '净电荷为零，任何交换剂都不结合',
      '带正电，选阴离子交换剂 Q 或 DEAE',
    ],
    answer: 1,
    explanation:
      'pH 低于 pI 时蛋白去质子化不占优、整体带正电，应结合带负电的阳离子交换剂（SP 强型、CM 弱型），故选 B；本例 pH 偏离 pI 达 2.5 个单位，满足「至少偏离 1 个单位保证牢固结合」的经验法则。D 混淆了交换剂自身的电荷与它结合的对象——阴离子交换剂带正电功能基，结合的是带负电的蛋白；C 只有 pH 恰在 pI 处才成立。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-13',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch3',
    type: 'truefalse',
    question:
      '分子排阻层析不靠吸附而靠筛分分离，上样量可达柱体积的 10–20% 而不影响分辨率。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。SEC 是三大机理中唯一不依赖吸附者，上样量以柱体积百分比计且必须严苛控制在 0.5–2%——上样带宽直接叠加在峰宽上，10–20% 的上样会把分辨率彻底吃掉，这正是它「分辨率随牺牲通量为代价」的短板。唯一例外是脱盐用途的组别分离（G-25 类介质上样可达 30%），因其只要求大分子与小分子分开，而非蛋白彼此分开。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-14',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch3',
    type: 'single',
    question:
      '关于 van Deemter 方程 H = A + B/u + Cu 及其在蛋白质层析中的含义，下列叙述错误的是：',
    options: [
      'A 项为涡流扩散项，源于介质颗粒间隙的路径差，正比于粒径',
      'B/u 项为纵向扩散项，在低流速时反而成为峰展宽的主导',
      'C 项为传质阻力项，蛋白扩散系数仅约 10 的负 6 次方 cm²/s 使该项尤为苛刻',
      '三项权衡表明流速越快柱效越高，蛋白层析应尽量以高流速运行',
    ],
    answer: 3,
    explanation:
      'D 与结论相反：三项相加给出 U 形曲线与最优流速，流速超过最优后 C 项传质阻力使塔板高度上升、柱效下降；蛋白传质尤其吃亏（扩散系数比小分子低一至两个数量级），常规琼脂糖介质宜在约 30–150 cm/h 低线速运行，只有粒径足够细的介质才配得上高流速，低温操作还应再降三至五成。A、B、C 分别正确归属了三个展宽项。',
    difficulty: 3,
  },
  {
    id: 'q-structural-biology-15',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch3',
    type: 'multiple',
    question: '（多选题）关于本章各层析机理，下列叙述正确的有：',
    options: [
      'IMAC 介质再生时以 EDTA 剥离金属，再以约 50–100 mM 硫酸镍重新挂金属',
      '离子交换梯度洗脱中，梯度体积越大分辨率越高',
      'HIC 以高盐上样、降低盐浓度洗脱，硫酸铵是经典上样盐',
      'SEC 的分辨率随柱长线性增长，柱长加倍分辨率即翻倍',
      'NTA 配基占据 4 个配位点螯合金属，金属保留比三齿的 IDA 牢固',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      'D 错误：SEC 分辨率随柱长的平方根增长（塔板理论的推论），柱长加倍分辨率仅提升约四成，想显著提升须两柱串联或换 8–13 μm 细粒径增效介质。其余四项皆正确：EDTA 剥镍再挂镍的再生流程（A）、梯度体积与分辨率的正向关系（B）、HIC 高盐上样降盐洗脱并以硫酸铵居 Hofmeister 序列前端（C）、NTA 四齿对 IDA 三齿的金属保留优势（E）。',
    difficulty: 2,
  },
]
