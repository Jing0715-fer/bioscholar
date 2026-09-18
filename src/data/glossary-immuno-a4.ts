// ============================================================
// BioScholar 免疫学术语词典 - 批次 A4（第 10–11 章）
// 5 条（g-176 ~ g-180），subjectId 均为 immunology
// 类别分布：免疫发育 1 / 体液免疫 2 / 免疫调控 2
// 依据：曹雪涛《医学免疫学》（第4版）、周光炎《免疫学原理》、
// Janeway《Immunobiology》
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

// 注：immunology 为本批次新增学科，主体 SubjectId 联合类型尚未收录该 id；
// 此处以双重断言保持本文件类型自洽，待类型联合扩展后可直接改回字面量。
const IMMUNOLOGY = 'immunology' as unknown as GlossaryTerm['subjectId']

export const immunoGlossaryA4: GlossaryTerm[] = [
  {
    id: 'g-176',
    term: '受体编辑',
    english: 'receptor editing',
    subjectId: IMMUNOLOGY,
    category: '免疫发育',
    definition:
      'B 细胞中枢耐受中处置自身反应性的一种整改机制：骨髓中携带自身反应性膜型 IgM 的未成熟 B 细胞重新激活 RAG 重组酶，对免疫球蛋白轻链基因座位（可动用此前未被使用的等位基因，先 κ 后 λ）进行新一轮重排，以新的轻链替换原有组合；若新受体不再结合自身抗原，细胞即获放行并继续发育为成熟 B 细胞。该机制为 B 细胞所独有（T 细胞无受体编辑），可反复尝试、以「整改」减少克隆删除造成的库容损耗；其代价是部分编辑后的受体仍残留自身反应性，且经编辑改换的特异性难以在库中追认，成为外周自身抗体的来源之一。',
  },
  {
    id: 'g-177',
    term: '生发中心',
    english: 'germinal center',
    abbreviation: 'GC',
    subjectId: IMMUNOLOGY,
    category: '体液免疫',
    definition:
      '次级淋巴器官 B 细胞滤泡内由胸腺依赖性抗原应答催生的动态结构：活化 B 淋巴母细胞快速增殖并挤压静息 B 细胞于外围形成套区，中心极化为暗区与亮区——暗区的中央母细胞增殖极快（细胞周期可短至 6–12 小时）、AID 高表达，执行体细胞高频突变与类别转换重组；亮区的中央细胞陈列于滤泡树突状细胞的抗原货架上，接受亲和力拣选与 Tfh 经 CD40L-CD40、IL-21 的辅导。细胞循 CXCR4-CXCL12 与 CXCR5-CXCL13 梯度在两区循环往返，「暗区生变、亮区受审」周而复始即亲和力成熟，最终产出高亲和力浆细胞与记忆 B 细胞；CD40L/CD40 或 AID 缺陷者生发中心缺如，表现为高 IgM 综合征。',
  },
  {
    id: 'g-178',
    term: '体细胞高频突变',
    english: 'somatic hypermutation',
    abbreviation: 'SHM',
    subjectId: IMMUNOLOGY,
    category: '体液免疫',
    definition:
      '生发中心暗区中央母细胞中发生的、局限于重排后免疫球蛋白 V 区及其旁侧约 1.5–2 kb 窗口的点突变过程，突变率较基因组背景高出约百万倍（V 区每碱基每代约 10⁻³）。由活化诱导的胞嘧啶脱氨酶（AID）启动：将 DNA 中的胞嘧啶脱氨为尿嘧啶、制造 U:G 错配，再经错配修复与碱基切除修复引入点突变或小片段变更，互补决定区的错义突变常改写抗体亲和力。突变体须经亮区抗原与 Tfh 的双重拣选，高亲和力者存活增殖，如此多轮「突变-选择」迭代使血清抗体平均亲和力逐级攀升，即亲和力成熟的分子基础；AID 脱靶攻击原癌基因与 Ig 座位间的易位，亦是 B 细胞淋巴瘤的已知成因之一。',
  },
  {
    id: 'g-179',
    term: '活化诱导的细胞死亡',
    english: 'activation-induced cell death',
    abbreviation: 'AICD',
    subjectId: IMMUNOLOGY,
    category: '免疫调控',
    definition:
      '反复受抗原刺激而高度活化的 T 细胞（以 Th1 类为主）经 Fas（CD95）与 FasL（CD95L）结合介导的凋亡过程：Fas 胞内死亡结构域招募 FADD 与胱天蛋白酶 8，启动凋亡级联，既可发生于同种活化细胞之间、亦可经自分泌完成。AICD 是免疫应答后期克隆收缩、防止应答无限延续的主装置，也是外周删除自身反应性活化克隆的执行机制——「活化越深、Fas 越高、死亡越早」构成自限环。人类 Fas 或 FADD 通路基因突变致自身免疫性淋巴细胞增殖综合征（ALPS）：活化淋巴细胞不能如期凋亡、双阴性 T 细胞堆积、脾大与淋巴结肿大、自身免疫性血细胞减少及淋巴瘤风险升高，是其失灵的临床模板。',
  },
  {
    id: 'g-180',
    term: '调节性 T 细胞',
    english: 'regulatory T cell',
    abbreviation: 'Treg',
    subjectId: IMMUNOLOGY,
    category: '免疫调控',
    definition:
      '以 Foxp3 为命脉转录因子的免疫抑制性 CD4⁺ T 细胞亚群，表型常记为 CD4⁺CD25⁺Foxp3⁺，约占人类外周血 CD4⁺ T 细胞的 5%–10%。按来源分胸腺来源 tTreg（旧称 nTreg，由阴性选择中亲和力居中的克隆分流而来，守自身抗原耐受）与外周诱导 iTreg（pTreg，TGF-β 等环境诱导，管环境与共生抗原耐受）两支。抑制手段包括分泌 IL-10、TGF-β 与 IL-35，经高亲和力 CD25 掳夺局部 IL-2 使效应细胞断粮，经 CTLA-4 转胞吞掳走抗原提呈细胞的 CD80/CD86 并留下 IDO 色氨酸耗竭环境等。Foxp3 缺陷对应 Scurfy 小鼠与人类 IPEX 综合征（肠病、湿疹样皮炎、多内分泌病），证明其为外周耐受不可或缺的支柱。',
  },
]
