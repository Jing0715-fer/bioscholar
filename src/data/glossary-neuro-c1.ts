// ============================================================
// 神经生物学术语词典 · C1 批次（第 4–6 章：突触/递质/可塑性）
// 7 条（g-185 ~ g-191），subjectId 均为 neurobiology（原 g-192「海马」与 C5 批次 g-213 重复，已去重移除）
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const neuroGlossaryC1: GlossaryTerm[] = [
  // ---------- 突触传递 ----------
  {
    id: 'g-185',
    term: '化学突触',
    english: 'chemical synapse',
    subjectId: 'neurobiology',
    category: '突触结构',
    definition:
      '以神经递质为媒介传递信号的突触结构，由突触前膜（含活性区与突触囊泡）、约 20–40 nm 的突触间隙与突触后致密区（PSD）构成。动作电位到达突触前末梢后，钙离子经 N/P/Q 型电压门控通道内流，触发 SNARE 介导的囊泡胞吐释放递质，递质扩散穿越间隙激活突触后受体。与电突触相比，化学突触有约 0.5 ms 的突触延迟，但具备单向传导、可放大与可塑性等优势，是中枢神经系统中占主导的信号传递方式。',
  },
  {
    id: 'g-186',
    term: 'SNARE 复合体',
    english: 'SNARE complex',
    abbreviation: 'SNARE',
    subjectId: 'neurobiology',
    category: '突触结构',
    definition:
      '介导突触囊泡与突触前膜融合的核心蛋白机器，由囊泡上的 synaptobrevin（VAMP）、膜上的 syntaxin 与 SNAP-25（贡献两条螺旋）三者组装成四股螺旋束，像拉链一样把囊泡拉向质膜。synaptotagmin 作为钙感受器感知钙离子浓度升高后触发融合孔开放。肉毒杆菌毒素与破伤风毒素均为锌依赖内肽酶，特异性切割 SNARE 蛋白从而阻断递质释放——前者致弛缓性麻痹，后者致痉挛性麻痹，是 SNARE 机制的著名病理注脚。',
  },
  {
    id: 'g-187',
    term: '量子释放',
    english: 'quantal release',
    subjectId: 'neurobiology',
    category: '突触传递',
    definition:
      'Katz 在神经-肌肉接头提出的递质释放基本单位学说：每个突触囊泡包含固定数量的递质分子（约数千个 ACh），释放以整个囊泡为单位进行，产生的突触后电位变化（微终板电位 MEPP 约 0.5–1 mV）呈量子化分布。终板电位是多个量子同时释放的总和，其幅度随钙离子浓度改变呈离散的倍数分布。该学说确立了「一个囊泡一个量子」的现代突触传递图像，Katz 因此获 1970 年诺贝尔生理学或医学奖。',
  },
  {
    id: 'g-188',
    term: '缝隙连接',
    english: 'gap junction',
    subjectId: 'neurobiology',
    category: '突触结构',
    definition:
      '电突触的结构基础：相邻两个细胞各提供一个由 6 个 connexin 亚基组成的半通道（连接子），对接后形成允许离子与小分子（<约 1 kDa）直接跨膜流动的亲水性孔道。电突触传导几乎无延迟、双向、低电阻，常见于需要同步化活动的脑区（如哺乳动物脑中的 Cx36 缝隙连接介导的 interneuron 电耦合）以及在发育与胶质细胞网络中广泛分布，弥补化学突触慢而灵活的不足。',
  },
  // ---------- 递质与受体 ----------
  {
    id: 'g-189',
    term: 'NMDA 受体',
    english: 'NMDA receptor',
    abbreviation: 'NMDAR',
    subjectId: 'neurobiology',
    category: '递质受体',
    definition:
      '谷氨酸门控的离子型受体，需「递质结合 + 突触后去极化解除 Mg²⁺ 堵塞」两个条件同时满足才开放，故称「巧合检测器」；甘氨酸/D-丝氨酸为其共激动剂。开放后对 Ca²⁺ 高通透，钙内流触发 CaMKII 等信号级联，是诱导海马 CA1 区 LTP 的核心分子开关；其过度激活导致的钙超载即「兴奋性毒性」，与卒中后神经元死亡相关。NMDA 受体 NR2B 亚基数目随发育减少，是突触可塑性关键期分子基础之一。',
  },
  {
    id: 'g-190',
    term: '长时程增强',
    english: 'long-term potentiation',
    abbreviation: 'LTP',
    subjectId: 'neurobiology',
    category: '突触可塑性',
    definition:
      'Bliss 与 Lømo（1973）在海马发现的突触可塑性现象：一串高频刺激（如 100 Hz）后，突触传递效率可在数小时乃至数周内持续增强。其诱导依赖 NMDA 受体的钙内流，表达阶段以 AMPA 受体上膜与磷酸化增强为主；晚相 LTP 需蛋白合成与 CREB 通路的转录事件。LTP 满足 Hebb 规则「共同激活的细胞连接在一起」，被广泛视为陈述性记忆的突触级底层机制。',
  },
  {
    id: 'g-191',
    term: '脉冲时间依赖可塑性',
    english: 'spike-timing-dependent plasticity',
    abbreviation: 'STDP',
    subjectId: 'neurobiology',
    category: '突触可塑性',
    definition:
      '以突触前脉冲与突触后脉冲的相对时间决定可塑性方向的规则：突触前发放先于突触后放电约数十毫秒内（pre-before-post）诱导 LTP；顺序颠倒（post-before-pre）则诱导 LTD。时间窗约 ±20–40 ms，由 NMDA 受体钙信号幅度与持续时间差异以及回溯信号（如内源性大麻素）共同实现。STDP 将 Hebb 规则精细化到毫秒尺度，为发育期突触竞争、环路自组织与生物启发的局部学习算法提供了统一框架。',
  },
  // ---------- 学习记忆 ----------
  // （「海马」词条已与 neuro-c5 的 g-213 合并去重，此处不再重复收录）
]
