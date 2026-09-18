// ne ch12-s1 脑的发育与神经疾病 / 神经系统的早期发育（39-h 批C）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、神经诱导：默认模型 ============
  b.panel(30, 132, 660, 430, { title: '一、神经诱导：组织者与默认模型（Spemann 1924）' })
  b.wtext(60, 200, 'Spemann 与 Mangold 将蝾螈背侧胚孔唇移植到另一胚胎腹侧，竟诱导出完整的次级神经轴乃至双头胚胎——移植物发出改变命运的信号，这块组织被称为「组织者」。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  // 默认模型示意
  b.rect(60, 268, 200, 90, { fill: C.proL, fillOp: 0.45, stroke: C.pro, sw: 1.8, rx: 9 })
  b.ctext(160, 296, '外胚层', { size: 13, weight: 700, fill: C.proD })
  b.ctext(160, 318, '（默认命运 → 神经）', { size: 10.5, fill: C.mute })
  b.ctext(160, 340, '「默认成神经」', { size: 11, weight: 700, fill: C.proD })
  // BMP
  b.tag(370, 288, 'BMP 信号 → 表皮化', { fill: C.badL, stroke: C.bad, size: 11, weight: 700, tfill: C.bad, pad: 8 })
  b.arrow(262, 288, 303, 288, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.tag(370, 344, '组织者分泌 noggin / chordin', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 8 })
  b.arrow(370, 330, 330, 316, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.ctext(470, 372, '拮抗 BMP → 神经诱导', { size: 11, weight: 700, fill: C.dnaD })
  b.wtext(60, 392, '诱导即「去抑制」：组织者不添加神经指令，而是解除 BMP 的表皮化命令——默认模型由此得名。', { size: 11, weight: 700, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(60, 442, '神经诱导是区域化的：组织者信号沿头尾轴梯度分布，为后继的脑区划分预埋位置信息。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、神经管闭合与脑泡划分 ============
  b.panel(710, 132, 660, 430, { title: '二、神经管闭合（第 3–4 周）与三脑泡分区' })
  b.line(740, 200, 1330, 200, { stroke: C.sub, sw: 3, marker: 'ink' })
  const tl: Array<[number, string, string]> = [
    [756, '约第 22 天', '神经褶开始愈合'],
    [930, '约 25 天', '前神经孔闭合'],
    [1104, '约 27–28 天', '后神经孔闭合'],
    [1290, '此后', '脑泡分区与增殖'],
  ]
  tl.forEach(([x, yr, label]) => {
    b.circle(x, 200, 5.5, { fill: C.dna })
    b.ctext(x, 224, yr, { size: 11, weight: 700, fill: C.ink })
    b.ctext(x, 242, label, { size: 10, fill: C.mute })
  })
  b.rect(740, 258, 290, 84, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.6, rx: 9 })
  b.wtext(756, 280, '闭合缺陷：前孔不闭 → 无脑畸形；后孔不闭 → 脊柱裂。围孕期补充叶酸可显著预防。', { size: 11, fill: C.sub, maxW: 258, lh: 15 })
  b.rect(1050, 258, 280, 84, { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 1.6, rx: 9 })
  b.wtext(1066, 280, '分区基因：Hox 编码后脑菱脑节；Otx2 / Gbx2 划定中脑-后脑边界；信号中心提供位置信息。', { size: 11, fill: C.sub, maxW: 248, lh: 15 })
  b.table(740, 352, 590, {
    headers: ['初级脑泡', '次级结构', '主要衍生物'],
    colW: [100, 170, 320],
    rowH: 30,
    fontSize: 11,
    rows: [
      ['前脑', '端脑', '大脑皮层、基底神经节、海马'],
      ['前脑', '间脑', '丘脑、下丘脑、上丘脑与视网膜'],
      ['中脑', '中脑', '上丘与下丘、黑质、红核'],
      ['后脑', '菱脑前部', '脑桥与小脑'],
      ['后脑', '末脑（延髓）', '延髓（呼吸与心血管中枢）'],
    ],
  })

  // ============ 三、放射状胶质与皮层分层 ============
  b.panel(30, 578, 660, 396, { title: '三、放射状胶质：干细胞 + 迁移脚手架的双重身份' })
  // 脑室区-皮层板示意
  b.rect(80, 648, 560, 240, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 10 })
  b.line(80, 706, 640, 706, { stroke: C.line, sw: 1.4, dash: '5 4' })
  b.line(80, 764, 640, 764, { stroke: C.line, sw: 1.4, dash: '5 4' })
  b.ctext(120, 676, 'VZ 脑室区（放射状胶质胞体）', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(120, 730, 'SVZ 脑室下区（人类显著扩张）', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(140, 800, '皮层板（六层，由内向外生成）', { size: 10.5, weight: 700, fill: C.sub })
  // 放射状胶质纤维
  ;[220, 300, 380, 460].forEach(x => {
    b.line(x, 712, x, 840, { stroke: C.pro, sw: 1.8, opacity: 0.75 })
  })
  // 迁移中的神经元
  b.circle(300, 780, 7, { fill: C.rna })
  b.circle(380, 745, 7, { fill: C.rna })
  b.circle(460, 815, 7, { fill: C.rna })
  b.arrow(460, 830, 500, 862, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.ctext(520, 872, '沿放射状纤维攀行', { size: 10.5, weight: 700, fill: C.rnaD })
  // inside-out
  b.wtext(80, 908, 'inside-out 分层：早生者居深层、晚生者越过先辈居浅层——皮层的「年轮」由内向外生长；人类 SVZ 扩张与皮层神经元数量及脑沟回复杂度相关。', { size: 11, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、发育性凋亡 ============
  b.panel(710, 578, 620, 396, { title: '四、发育性凋亡：约半数神经元的「选拔赛」' })
  b.bars(780, 856, 400, 130, [1, 0.5], {
    labels: ['出生时神经元数', '存活（约半数）'],
    vlabels: ['100%', '约 50% 存活'],
    fill: C.enzL, stroke: C.enz, max: 1.15,
  })
  b.wtext(740, 660, '约半数神经元经发育性凋亡被删除；存活取决于靶源性神经营养因子（NGF、BDNF 等）——「谁拿到靶区的营养券，谁活下去」。', { size: 11.5, fill: C.sub, maxW: 560, lh: 17 })
  b.wtext(740, 902, '这一选拔使神经元数量与靶组织规模匹配：神经支配富余即被裁撤，突触连接精度由此打磨。', { size: 11, fill: C.mute, maxW: 560, lh: 15 })
}

export default scene({
  title: '神经系统的早期发育：神经诱导、神经管闭合与皮层 inside-out 分层',
  subtitle: '诱导即去抑制（noggin/chordin 拮抗 BMP）；前孔约 25 天、后孔约 27–28 天闭合；约半数神经元经凋亡删减',
  draw,
})
