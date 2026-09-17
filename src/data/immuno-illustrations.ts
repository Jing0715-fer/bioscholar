// ============================================================
// 免疫学教材插图（Wikimedia Commons 真实图，全部经 VLM 科学审校）
// 搜集于 Task 28-ILL-A2/A3：源文件/作者/许可证见
// agent-ctx/tmp28/manifest-a.json
// 图注为学术中文描述，与对应小节正文知识点呼应
// ============================================================
import type { Illustration } from '@/lib/types'

export const immunoIllustrations: Record<string, Illustration[]> = {
  // ---- 第 2 章 免疫器官与组织 ----
  'immunology-ch2-s2': [
    {
      src: '/images/bio/commons/lymph-node-structure.png',
      caption:
        '淋巴结的分区结构示意：被膜下为浅皮质区（含初级与次级淋巴滤泡，B 细胞居留并在此形成生发中心），深皮质区（副皮质区）为 T 细胞与交错突状细胞（DC）所在，髓质由髓索（浆细胞与 B 细胞）与髓窦构成。输入淋巴管自被膜进入，输出淋巴管自门部离开；高内皮静脉（HEV）位于副皮质区，是淋巴细胞自血流再循环进入淋巴结的门户——抗原经淋巴或 DC 携带抵达后，T/B 细胞分别在其各自的区室被激活，印证了「区室化分工」的组织学基础。',
      credit: '图片来源：Wikimedia Commons（lymph node structure diagram）',
    },
    {
      src: '/images/bio/commons/lymph-node-histology.jpg',
      caption:
        '淋巴结的组织学切片（H&E 染色）：外周深染的皮质区可见淋巴滤泡，中央色浅的生发中心清晰可辨（活跃的次级滤泡），内圈为小淋巴细胞构成的套区；髓质区髓索与髓窦相间排列，窦内含组织细胞与淋巴细胞。组织学图像与模式图互为印证：滤泡与生发中心是 B 细胞应答（体细胞高频突变与类别转换，参见第十章）的组织场所。',
      credit: '图片来源：Wikimedia Commons（Netha Hussain，CC BY-SA 3.0）',
    },
  ],

  // ---- 第 3 章 固有免疫细胞 ----
  'immunology-ch3-s1': [
    {
      src: '/images/bio/commons/macrophage-phagocytosis.png',
      caption:
        '受体介导的吞噬过程示意：巨噬细胞表面 Fc 受体或补体受体识别被调理（IgG/C3b 包被）的靶颗粒，伸出伪足包裹形成吞噬体，进而与溶酶体融合为吞噬溶酶体，经活性氧/氮中间物（ROI/RNS）与溶酶体酶杀伤消化。识别—内吞—杀伤—提呈四步环环相扣：消化后的肽段还可经 MHC II 类途径提呈给 CD4⁺ T 细胞，把固有吞噬与适应性应答衔接起来。',
      credit: '图片来源：Wikimedia Commons（macrophage phagocytosis diagram）',
    },
  ],

  // ---- 第 12 章 超敏反应与免疫学应用 ----
  'immunology-ch12-s4': [
    {
      src: '/images/bio/commons/car-t-structure.png',
      caption:
        '嵌合抗原受体 T 细胞（CAR-T）的模块结构：胞外单链可变片段（scFv，由 VH 与 VL 经连接肽拼接）负责识别肿瘤表面抗原（如 CD19）；铰链区提供柔性伸展空间；跨膜区锚定细胞膜；胞内信号域由 CD3ζ 的 ITAM（信号 1）与共刺激域（CD28 或 4-1BB，信号 2）串联构成——正是第九章「T 细胞活化双信号」原理的工程化重构。第二代 CAR 加入共刺激域后持续增殖与杀伤能力显著增强，是 CD19 CAR-T 治疗 B 细胞恶性肿瘤的核心设计。',
      credit: '图片来源：Wikimedia Commons（CAR-T structure diagram）',
    },
  ],
}
