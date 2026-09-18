// cb ch7-s1 核被膜与核孔复合体（39-d 批A 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、NPC 八重对称轮辐结构（纵截面） ============
  b.panel(30, 132, 660, 430, { title: '一、核孔复合体：八重旋转对称的轮辐装配体' })
  // -- 区域底色：胞质（上）/ 核质（下）--
  b.rect(50, 180, 620, 96, { fill: C.accL, fillOp: 0.35 })
  b.text(64, 200, '胞质', { size: 11, weight: 700, fill: C.accD })
  b.text(64, 218, '外核膜连 RER', { size: 9.5, fill: C.mute })
  b.rect(50, 372, 620, 170, { fill: C.proL, fillOp: 0.35 })
  b.text(64, 392, '核质', { size: 11, weight: 700, fill: C.proD })
  b.text(64, 410, '内核膜衬核纤层', { size: 9.5, fill: C.mute })
  // -- 双层核被膜（左右两段，中留 NPC）--
  b.bilayer(50, 292, 220)
  b.bilayer(450, 292, 220)
  b.bilayer(50, 342, 220)
  b.bilayer(450, 342, 220)
  b.brace(280, 292, 342, '核周腔 20—40 nm', { side: 'left', size: 10 })
  // -- NPC 主体（胞质环/核质环各 8 辐条）--
  const cx = 360
  for (let i = 0; i < 8; i++) {
    const dx = (i - 3.5) * 20
    // 胞质环（上排 8 珠）与核质环（下排 8 珠）
    b.circle(cx + dx, 286, 6.5, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
    b.circle(cx + dx, 348, 6.5, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
    // 辐条连接两环
    b.line(cx + dx * 0.82, 292, cx + dx * 0.82, 342, { stroke: C.enz, sw: 2.4 })
    // 胞质纤维（向上）
    b.line(cx + dx, 280, cx + dx * 1.25, 248, { stroke: C.mute, sw: 1.5 })
    // 核篮纤维（向下汇聚）
    b.line(cx + dx, 354, cx + dx * 0.5, 404, { stroke: C.pro, sw: 1.8 })
  }
  // 核篮末端小环
  b.circle(cx, 416, 13, { stroke: C.pro, sw: 2 })
  b.text(400, 424, '篮筐末端环', { size: 9.5, fill: C.proD })
  // 中央栓 + FG 筛网
  b.ellipse(cx, 317, 26, 30, { fill: C.bg, stroke: C.dna, sw: 2.2 })
  b.text(338, 300, '中央栓（转运体）', { size: 9.5, weight: 700, fill: C.dnaD })
  b.text(338, 314, 'FG 重复核孔蛋白', { size: 9.5, weight: 700, fill: C.rnaD })
  b.text(338, 328, '凝胶样选择性筛网', { size: 9, fill: C.mute })
  // 标注
  b.tag(155, 244, '胞质细纤维', { fill: C.panelB, stroke: C.mute, size: 9.5, tfill: C.mute, pad: 5 })
  b.tag(508, 244, '胞质环（8 辐条）', { fill: C.enzL, stroke: C.enz, size: 9.5, tfill: C.enzD, pad: 5 })
  b.tag(508, 380, '核质环（8 辐条）', { fill: C.enzL, stroke: C.enz, size: 9.5, tfill: C.enzD, pad: 5 })
  b.tag(520, 424, '核质侧篮状结构', { fill: C.proL, stroke: C.pro, size: 9.5, tfill: C.proD, pad: 5 })
  b.wtext(64, 452, '巨型装配体：分子量约 110—125 MDa，由约 30 种核孔蛋白（Nup）构成；典型哺乳动物细胞核膜上有 2000—5000 个 NPC。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.wtext(64, 492, '选择性筛网：与运输受体互作的分子快速通透，其他大分子被阻留。', { size: 10, fill: C.mute, maxW: 580, lh: 14 })
  b.tag(200, 540, '被动扩散：＜5 nm / ＜40 kDa 自由通过', { fill: C.okL, stroke: C.ok, size: 9.5, tfill: C.ok, pad: 6 })
  b.tag(490, 540, '主动运输：NLS / NES＋输入蛋白 / 输出蛋白', { fill: C.badL, stroke: C.bad, size: 9.5, tfill: C.bad, pad: 6 })

  // ============ 二、NLS 入核与 NES 出核 ============
  b.panel(710, 132, 660, 430, { title: '二、双向运输：经典 NLS 入核 / CRM1 介导 NES 出核' })
  // -- 膜带（水平双层，上半胞质下半核质）--
  b.bilayer(740, 300, 240)
  b.bilayer(1100, 300, 240)
  b.text(740, 188, '胞质', { size: 11, weight: 700, fill: C.accD })
  b.text(740, 208, '低 Ran-GTP', { size: 9.5, fill: C.mute })
  b.text(1064, 188, '核质', { size: 11, weight: 700, fill: C.proD })
  // -- 入核路径（左，向下箭头）--
  b.tag(860, 236, '货物＋NLS', { fill: C.dnaL, stroke: C.dna, size: 9.5, weight: 700, tfill: C.dnaD, pad: 5 })
  b.tag(940, 262, '输入蛋白 α/β', { fill: C.proL, stroke: C.pro, size: 9.5, weight: 700, tfill: C.proD, pad: 5 })
  b.arrow(880, 278, 880, 372, { stroke: C.pro, sw: 2.6, marker: 'pro' })
  b.text(892, 330, '经 FG 筛网入核', { size: 9, fill: C.mute })
  b.ion(880, 396, 'Ran-GTP', { r: 24, fill: C.okL, stroke: C.ok, tfill: C.ok, size: 10 })
  b.arrow(908, 400, 946, 400, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.wtext(960, 384, 'Ran-GTP 撞击复合体使其解离，货物释放；输入蛋白 β 循环利用', { size: 9.5, fill: C.sub, maxW: 300, lh: 13 })
  b.ctext(880, 448, '入核（importin α/β 异二聚体）', { size: 10.5, weight: 700, fill: C.ink })
  // -- 出核路径（右，向上箭头）--
  b.tag(1290, 384, '货物＋NES', { fill: C.rnaL, stroke: C.rna, size: 9.5, weight: 700, tfill: C.rnaD, pad: 5 })
  b.tag(1214, 358, 'CRM1＋Ran-GTP', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 700, tfill: C.enzD, pad: 5 })
  b.arrow(1254, 344, 1254, 254, { stroke: C.enz, sw: 2.6, marker: 'enz' })
  b.text(1266, 300, '三聚体出核', { size: 9, fill: C.mute })
  b.ion(1254, 226, 'RanGAP', { r: 22, fill: C.badL, stroke: C.bad, tfill: C.bad, size: 9.5 })
  b.arrow(1232, 226, 1196, 226, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.wtext(900, 214, '胞质侧 Ran-GTP 水解为 Ran-GDP，货物释放；NES 为富含亮氨酸的出核信号', { size: 9.5, fill: C.sub, maxW: 280, lh: 13 })
  b.ctext(1254, 448, '出核（exportin / CRM1）', { size: 10.5, weight: 700, fill: C.ink })
  // -- 工具药与 mRNA --
  b.tag(790, 486, 'LMB（来普霉素 B）特异性抑制 CRM1', { fill: C.badL, stroke: C.bad, size: 9.5, tfill: C.bad, pad: 6 })
  b.tag(1080, 486, 'mRNA 以 mRNP 形式经 TREX 等因子输出', { fill: C.rnaL, stroke: C.rna, size: 9.5, tfill: C.rnaD, pad: 6 })

  // ============ 三、Ran-GTP 梯度：方向性的来源 ============
  b.panel(30, 576, 1340, 404, { title: '三、Ran-GTP 梯度：核高胞低的势能差赋予运输单向性' })
  // -- 细胞与核 --
  b.cell(330, 796, 272, 172, { label: '' })
  b.nucleusU(330, 792, 108)
  b.dna(268, 860, 124, { amp: 9, period: 34, stroke: C.dna, sw: 2.2, rung: true, rungC: C.dnaD })
  b.text(262, 828, '染色质', { size: 9.5, weight: 700, fill: C.dnaD })
  b.tag(330, 726, 'RCC1（GEF）只位于染色质', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.ok, pad: 6 })
  b.arrow(330, 738, 330, 762, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.text(448, 742, 'Ran-GDP → Ran-GTP', { size: 10, weight: 700, fill: C.ok })
  for (let i = 0; i < 6; i++) {
    b.ion(262 + i * 30, 792 + (i % 2 === 0 ? -26 : 26), 'GTP', { r: 13, fill: C.okL, stroke: C.ok, tfill: C.ok, size: 8 })
  }
  b.tag(330, 944, '核内高 Ran-GTP', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.ok, pad: 6 })
  // -- 胞质侧 --
  b.tag(196, 968, 'RanGAP 只位于胞质', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: C.bad, pad: 6 })
  for (let i = 0; i < 4; i++) {
    b.ion(452 + i * 26, 860 + (i % 2 === 0 ? 14 : -14), 'GDP', { r: 12, fill: C.panelB, stroke: C.mute, tfill: C.mute, size: 8 })
  }
  b.tag(505, 944, '胞质低 Ran-GTP', { fill: C.panelB, stroke: C.mute, size: 10.5, weight: 700, tfill: C.mute, pad: 6 })
  // -- 梯度示意（右）--
  b.axis(760, 930, 560, 250, {
    ylabel: 'Ran-GTP 浓度', title: 'Ran-GTP 梯度',
    xticks: [[0.08, '核质'], [0.5, 'NPC'], [0.92, '胞质']],
    yticks: [[0.05, '低'], [0.55, ''], [0.95, '高']],
  })
  b.curve(760, 930, 560, 250, [[0, 0.94], [0.12, 0.9], [0.3, 0.72], [0.45, 0.42], [0.55, 0.2], [0.7, 0.08], [0.88, 0.04], [1, 0.03]], { stroke: C.ok, sw: 3, smooth: true, label: 'Ran-GTP', labelAt: [0.18, 0.86] })
  b.text(790, 968, 'RCC1（核）与 RanGAP（胞质）的区室化分布建立梯度，驱动双向单向流。', { size: 10.5, fill: C.sub })
  b.text(790, 628, '有丝分裂前期 CDK1 磷酸化核纤层蛋白与核孔蛋白 → 核被膜崩解；末期去磷酸化重建。', { size: 10.5, weight: 600, fill: C.warn })
}

export default scene({
  title: '核被膜与核孔复合体：双向选择性运输',
  subtitle: 'NPC 约 110—125 MDa、约 30 种核孔蛋白，八重轮辐＋核侧篮筐与 FG 筛网；＜40 kDa 被动扩散，大分子经 NLS/NES 主动运输，Ran-GTP 梯度驱动单向流',
  draw,
})
