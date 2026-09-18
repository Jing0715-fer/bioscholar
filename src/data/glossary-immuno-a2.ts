// ============================================================
// BioScholar 免疫学术语词典 - 批次 A2（第 4–6 章）
// 8 条（g-163 ~ g-170），subjectId 均为 immunology
// 类别分布：免疫分子 3 / 固有免疫 2 / 抗原 2 / 抗体技术 1
// 依据：曹雪涛《医学免疫学》（第4版）、周光炎《免疫学原理》、
// Janeway《Immunobiology》
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

// 注：immunology 为本批次新增学科，主体 SubjectId 联合类型尚未收录该 id；
// 此处以双重断言保持本文件类型自洽，待类型联合扩展后可直接改回字面量。
const IMMUNOLOGY = 'immunology' as unknown as GlossaryTerm['subjectId']

export const immunoGlossaryA2: GlossaryTerm[] = [
  // ---------- 免疫分子（3 条） ----------
  {
    id: 'g-163',
    term: '补体系统',
    english: 'complement system',
    subjectId: IMMUNOLOGY,
    category: '免疫分子',
    definition:
      '存在于血清、组织液与细胞膜表面、经活化后呈现酶级联反应的一组精密协作的蛋白质，由 40 余种固有成分、调节蛋白与补体受体组成，肝细胞与单核巨噬细胞是主要合成场所，C3 血清浓度最高（约 1.2–1.6 g/L）。经典、凝集素与旁路三条激活途径在 C3 转化酶处汇合，经共同末端通路形成攻膜复合物；效应包括溶菌溶细胞、调理吞噬、过敏毒素与趋化、免疫复合物清除及 B 细胞共刺激，调节蛋白缺陷见于遗传性血管神经性水肿、阵发性睡眠性血红蛋白尿等疾病。',
  },
  {
    id: 'g-164',
    term: 'C3 转化酶',
    english: 'C3 convertase',
    subjectId: IMMUNOLOGY,
    category: '免疫分子',
    definition:
      '补体级联中裂解 C3 的酶复合物，是三条激活途径的汇合枢纽。经典与凝集素途径的 C3 转化酶为 C4b2a，由 C1s 或 MASP 裂解 C4 与 C2 后组装而成；旁路途径为 C3bBb，由 C3b 与 B 因子经 D 因子裂解生成，备解素可增强其稳定性。C3 被裂解为 C3a 与 C3b：前者为过敏毒素，后者既是调理素又是新转化酶的组成成分，构成正反馈放大回路；C3b 再与 C3 转化酶结合形成 C5 转化酶，启动共同末端通路，是理解补体级联与放大效应的核心概念。',
  },
  {
    id: 'g-169',
    term: '免疫球蛋白',
    english: 'immunoglobulin',
    abbreviation: 'Ig',
    subjectId: IMMUNOLOGY,
    category: '免疫分子',
    definition:
      '具有抗体活性或化学结构与抗体相似的球蛋白，基本单位为两条重链与两条轻链经链间二硫键连接的四肽链，每链折叠为数个约 110 个氨基酸残基的 Ig 结构域。氨基端约 110 个氨基酸构成可变区，其中三段高变的互补决定区（CDR）并置形成抗原结合部位；其余为恒定区，介导补体激活、调理、ADCC 等效应功能。按重链分为 IgG、IgM、IgA、IgD、IgE 五类，血清中 IgG 含量最高（约占 75%–80%）、半衰期约 23 天；抗体是功能命名，免疫球蛋白是化学命名，二者内涵交叉而不等同。',
  },
  // ---------- 固有免疫（2 条） ----------
  {
    id: 'g-165',
    term: 'Toll 样受体',
    english: 'Toll-like receptor',
    abbreviation: 'TLR',
    subjectId: IMMUNOLOGY,
    category: '固有免疫',
    definition:
      '模式识别受体中最重要的膜型家族，因与果蝇 Toll 蛋白同源得名，人类表达 10 种。细胞表面的 TLR（如 TLR1/2、TLR2/6、TLR4、TLR5）识别脂多糖、脂蛋白、鞭毛蛋白等胞外病原体成分，内体中的 TLR3、TLR7、TLR8 与 TLR9 识别病毒与细菌核酸。信号除 TLR3 经 TRIF 外多经 MyD88 汇入 NF-κB 与 IRF，诱导前炎性细胞因子、I 型干扰素及共刺激分子表达，是连接固有免疫与适应性免疫的关键分子，其配体也是现代疫苗佐剂设计的核心元件。',
  },
  {
    id: 'g-166',
    term: '炎症小体',
    english: 'inflammasome',
    subjectId: IMMUNOLOGY,
    category: '固有免疫',
    definition:
      '胞质中由感应蛋白（如 NLRP3）、接头蛋白 ASC 与 caspase-1 前体组装而成的多蛋白复合物，是胞质危险信号的效应终端。以 NLRP3 为例，活化需两个信号：TLR 等提供的启动信号经 NF-κB 上调 pro-IL-1β、pro-IL-18 与 NLRP3 转录；钾离子外流、尿酸等晶体破坏溶酶体等应激信号促成组装。活化的 caspase-1 将 pro-IL-1β 与 pro-IL-18 切割成熟并分泌，还裂解 gasdermin D 诱发细胞焦亡；功能获得性突变引起家族性寒冷型自身炎症综合征，尿酸晶体活化 NLRP3 是痛风发作的核心机制。',
  },
  // ---------- 抗原（2 条） ----------
  {
    id: 'g-167',
    term: '表位',
    english: 'epitope',
    subjectId: IMMUNOLOGY,
    category: '抗原',
    definition:
      '又称抗原决定基，即抗原分子上与 TCR、BCR 或抗体特异性结合的基本结构单位，是抗原特异性的物质基础。T 细胞表位一律为线性短肽（约 8–17 个氨基酸残基），须经 MHC 分子提呈、受 MHC 限制；B 细胞表位由 BCR 直接识别，可为线性或构象表位，大小约 5–15 个氨基酸残基或 5–7 个糖残基，常位于天然抗原表面并依赖空间构象。一个抗原可携带多个表位，暴露可用者为功能性表位、藏于内部者为隐蔽表位；表位作图与优势表位选择是诊断试剂开发与疫苗设计的基础工具。',
  },
  {
    id: 'g-168',
    term: '超抗原',
    english: 'superantigen',
    abbreviation: 'SAg',
    subjectId: IMMUNOLOGY,
    category: '抗原',
    definition:
      '一类不经加工处理、不进入 MHC 肽结合槽、而以完整分子同时结合 MHC II 类分子抗原结合槽外侧非多态区与 TCR β 链 V 区特定家族的蛋白质，以极低剂量即可激活外周 2%–20% 的 T 细胞（普通抗原通常不足万分之一）。代表有金黄色葡萄球菌肠毒素 SEA–SEE、中毒性休克综合征毒素 TSST-1（主要激活 Vβ2 阳性 T 细胞）与链球菌致热外毒素，可引发细胞因子风暴样中毒性休克综合征；小鼠 Mls 超抗原曾为中枢耐受研究提供关键模型，葡萄球菌蛋白 A 则为 B 细胞超抗原的代表。',
  },
  // ---------- 抗体技术（1 条） ----------
  {
    id: 'g-170',
    term: '杂交瘤',
    english: 'hybridoma',
    subjectId: IMMUNOLOGY,
    category: '抗体技术',
    definition:
      '免疫动物 B 细胞与骨髓瘤细胞经细胞融合产生的杂种细胞系，兼具 B 细胞分泌特异性抗体的能力与瘤细胞无限增殖的能力，由 Köhler 与 Milstein 于 1975 年建立（1984 年获诺贝尔奖）。流程以聚乙二醇融合免疫脾细胞与 HGPRT 缺陷骨髓瘤细胞，在 HAT 选择培养基中仅杂交瘤存活，再经有限稀释克隆化与 ELISA 筛选获得分泌目的抗体的阳性克隆，从而实现单克隆抗体均一、特异、可长期大量供应；该技术是单克隆抗体产业的基石，也为抗体结构与功能研究提供了标准化材料。',
  },
]
