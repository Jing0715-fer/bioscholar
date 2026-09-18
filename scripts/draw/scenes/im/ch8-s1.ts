// im ch8-s1 MHC 的基因结构与遗传特征：HLA 复合体基因图（39-g 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // 副标题过长（scene 两行自动换行仍溢出）→ 手动三行渲染（原文未改动）
  b.ctext(700, 77, 'HLA 复合体位于第 6 号染色体短臂 6p21.3、跨越约 3600 kb、座位超 200 个；I 类区（HLA-A/B/C 经典，E/F/G 非经典）、II 类区（DR/DQ/DP 经典 + TAP/PSMB/DM-DO 配套）与 III 类区（C2、C4、Bf、TNF）；', { size: 12, fill: C.mute })
  b.ctext(700, 94, '多样性来自多基因性与多态性（HLA-B 已逾八千等位基因，多态残基集中于肽结合槽编码区）两层，共显性表达使单个细胞陈列至多 6 种 I 类与 10 种上下 II 类分子；', { size: 12, fill: C.mute })
  b.ctext(700, 111, '紧密连锁的单元型整体传递、连锁不平衡与公共表位交叉反应是移植配型的遗传学基础', { size: 12, fill: C.mute })

  // ============ 一、HLA 复合体基因图 ============
  b.panel(30, 132, 1340, 290, { title: '一、HLA 复合体基因图：第 6 号染色体短臂 6p21.3 的「免疫基因特区」' })

  b.ctext(700, 178, '跨越约 3600 kb · 已确认基因座位超过 200 个——人体基因密度最高、多态性最强的区段之一', { size: 11.5, weight: 600, fill: C.sub })

  // 分区条
  b.rect(60, 192, 80, 54, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 6 })
  b.ctext(100, 223, '端粒侧', { size: 10.5, fill: C.mute })
  b.rect(140, 192, 400, 54, { fill: C.dnaL, fillOp: 0.55, stroke: C.dna, sw: 1.8, rx: 6 })
  b.ctext(340, 216, 'I 类区', { size: 15, weight: 700, fill: C.dnaD })
  b.ctext(340, 236, '经典 + 非经典', { size: 9.5, fill: C.sub })
  b.rect(540, 192, 220, 54, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 1.8, rx: 6 })
  b.ctext(650, 216, 'III 类区', { size: 15, weight: 700, fill: C.rnaD })
  b.ctext(650, 236, '居中而设', { size: 9.5, fill: C.sub })
  b.rect(760, 192, 420, 54, { fill: C.proL, fillOp: 0.55, stroke: C.pro, sw: 1.8, rx: 6 })
  b.ctext(970, 216, 'II 类区', { size: 15, weight: 700, fill: C.proD })
  b.ctext(970, 236, '经典 + 配套', { size: 9.5, fill: C.sub })
  b.rect(1180, 192, 120, 54, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 6 })
  b.ctext(1240, 223, '着丝粒侧', { size: 10.5, fill: C.mute })

  // 分区注释框
  const notes: Array<[number, number, string, string, string, string, string]> = [
    [140, 195, 'I 类区（经典）', 'HLA-A · -B · -C', '提呈内源性抗原给 CD8⁺ T', '多态水平：极高', C.dna],
    [345, 195, 'I 类区（非经典）', 'HLA-E · -F · -G', '调控 NK 活性、母胎耐受等', '多态水平：低', C.dna],
    [540, 220, 'III 类区', 'C2、C4、Bf、TNF 等', '补体与炎症介质，不直接提呈抗原', '多态水平：中', C.rna],
    [760, 205, 'II 类区（经典）', 'HLA-DR · -DQ · -DP', '提呈外源性抗原给 CD4⁺ T', '多态水平：高', C.pro],
    [975, 205, 'II 类区（配套）', 'TAP1/2 · PSMB8/9 · HLA-DM/DO', '抗原加工、转运与肽加载', '多态水平：低至中', C.pro],
  ]
  notes.forEach(([x, w, t, g, f, m, col]) => {
    b.rect(x, 262, w, 132, { fill: C.bg, stroke: col, sw: 1.5, rx: 8 })
    b.text(x + 12, 286, t, { size: 11.5, weight: 700, fill: col })
    b.wtext(x + 12, 306, g, { size: 10, weight: 700, fill: C.ink, maxW: w - 24, lh: 14 })
    b.wtext(x + 12, 330, f, { size: 9.5, fill: C.sub, maxW: w - 24, lh: 14 })
    b.wtext(x + 12, 372, m, { size: 9.5, weight: 600, fill: C.mute, maxW: w - 24, lh: 13 })
  })
  b.ctext(700, 412, '大量产物直接参与免疫应答——名副其实的「免疫基因特区」', { size: 11, weight: 600, fill: C.ink })

  // ============ 二、多基因性与多态性 ============
  b.panel(30, 438, 1340, 258, { title: '二、多基因性 × 多态性 × 共显性表达：HLA 多样性的三重来源' })

  b.rect(60, 490, 390, 148, { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(78, 514, '多基因性（个体内）', { size: 13, weight: 700, fill: C.accD })
  b.wtext(78, 538, '一个个体内 I、II 类多个座位并存（A/B/C 与 DR/DQ/DP……），拓宽单个细胞的提呈覆盖面。', { size: 10.5, fill: C.sub, maxW: 356, lh: 16 })
  const seats = ['A', 'B', 'C', 'DR', 'DQ', 'DP']
  seats.forEach((s, i) => {
    b.rect(82 + i * 60, 596, 50, 28, { fill: C.bg, stroke: C.acc, sw: 1.3, rx: 5 })
    b.ctext(107 + i * 60, 614, s, { size: 11, weight: 700, fill: C.accD })
  })

  b.rect(470, 490, 390, 148, { fill: C.dnaL, fillOp: 0.55, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(488, 514, '多态性（群体内）', { size: 13, weight: 700, fill: C.dnaD })
  b.wtext(488, 538, '群体内每个座位等位基因众多；多态残基集中于肽结合槽编码区——HLA-B 已逾八千个等位基因。', { size: 10.5, fill: C.sub, maxW: 356, lh: 16 })
  b.bars(488, 590, 356, 26, [86, 46, 60, 24, 30], { labels: ['A', 'B', 'C', 'DRB1', 'DQB1'], fill: C.dnaL, stroke: C.dna, max: 100 })
  b.ctext(666, 630, '各座位等位基因数（示意，B 居首、已逾 8000）', { size: 9.5, fill: C.mute })

  b.rect(880, 490, 460, 148, { fill: C.proL, fillOp: 0.55, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(898, 514, '共显性表达（细胞面）', { size: 13, weight: 700, fill: C.proD })
  b.wtext(898, 538, '来自父母双方的等位基因同时开动：一个有核细胞可同时陈列至多 6 种 I 类分子与 10 种上下的 II 类分子。', { size: 10.5, fill: C.sub, maxW: 428, lh: 16 })
  b.rect(910, 580, 190, 44, { fill: C.bg, stroke: C.pro, sw: 1.4, rx: 7 })
  b.ctext(1005, 600, 'I 类分子 ≤ 6 种', { size: 11.5, weight: 700, fill: C.proD })
  b.ctext(1005, 616, 'A · B · C 各两份', { size: 9, fill: C.mute })
  b.rect(1120, 580, 190, 44, { fill: C.bg, stroke: C.pro, sw: 1.4, rx: 7 })
  b.ctext(1215, 600, 'II 类分子 ~10 种', { size: 11.5, weight: 700, fill: C.proD })
  b.ctext(1215, 616, 'DR · DQ · DP 各两份', { size: 9, fill: C.mute })

  b.ctext(700, 668, '多基因性拓宽个体覆盖面，多态性加深群体储备库——HLA 是个体的免疫身份签名', { size: 11.5, weight: 600, fill: C.ink })

  // ============ 三、单元型遗传与连锁不平衡 ============
  b.panel(30, 712, 1340, 260, { title: '三、单元型遗传 · 连锁不平衡 · 公共表位：移植配型的遗传学基础' })

  // 单元型遗传
  b.rect(90, 766, 190, 40, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
  b.text(104, 792, '父：单元型 a ｜ b', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(90, 838, 190, 40, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
  b.text(104, 864, '母：单元型 c ｜ d', { size: 11.5, weight: 700, fill: C.ink })
  b.arrow(284, 786, 340, 816, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.arrow(284, 858, 340, 828, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.rect(344, 788, 276, 68, { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(482, 812, '子代必得父一条 + 母一条', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(482, 836, '组合：ac · ad · bc · bd', { size: 11, fill: C.sub })
  b.wtext(90, 902, '紧密连锁使亲代以单元型（haplotype）整体传递 HLA，如同「成套家具」罕见拆散。', { size: 10.5, fill: C.sub, maxW: 530, lh: 15 })
  b.wtext(90, 938, '单元型与等位基因组合信息共同用于器官移植的供受配型评估。', { size: 10, fill: C.mute, maxW: 530, lh: 14 })

  b.rect(660, 766, 680, 88, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(678, 790, '连锁不平衡（linkage disequilibrium）', { size: 12.5, weight: 700, fill: C.dnaD })
  b.wtext(678, 812, '特定等位基因的组合频率偏离随机期望——疾病关联分析与移植配型的遗传学基础。', { size: 10.5, fill: C.sub, maxW: 645, lh: 15 })

  b.rect(660, 866, 680, 92, { fill: C.warnL, fillOp: 0.5, stroke: C.warn, sw: 1.6, rx: 9 })
  b.text(678, 890, '公共表位与交叉反应', { size: 12.5, weight: 700, fill: '#92400e' })
  b.wtext(678, 912, '不同等位基因可共享公共表位：致敏受者的抗公共表位抗体，可对同组等位基因的供器官发生交叉阳性反应。', { size: 10.5, fill: C.sub, maxW: 645, lh: 15 })
}

export default scene({
  title: 'HLA 复合体的基因结构与遗传特征：6p21.3 的分区与三重多样性',
  draw,
})
