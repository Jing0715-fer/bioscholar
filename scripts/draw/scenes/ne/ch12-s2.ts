// ne ch12-s2 脑的发育与神经疾病 / 轴突导向与突触修剪（39-h 批D）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、生长锥：轴突的探路者 ============
  b.panel(30, 132, 660, 430, { title: '一、生长锥：丝足探测线索，Rho GTP 酶掌舵' })
  // 生长锥示意
  b.line(120, 320, 300, 320, { stroke: C.dna, sw: 5 })
  b.polygon([[300, 300], [356, 320], [300, 340]], { fill: C.dnaL, fillOp: 0.8, stroke: C.dna, sw: 2 })
  // 丝足
  ;[[356, 320, 402, 278], [356, 320, 412, 316], [356, 320, 396, 356]].forEach(([x1, y1, x2, y2]) => {
    b.line(x1, y1, x2, y2, { stroke: C.dna, sw: 1.8 })
    b.circle(x2, y2, 3.5, { fill: C.dna })
  })
  b.ctext(250, 292, '轴突（束状）', { size: 11, weight: 700, fill: C.dnaD })
  b.ctext(462, 300, '片足', { size: 11, weight: 700, fill: C.dnaD })
  b.ctext(310, 258, '丝足（探测分子线索）', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(150, 356, '生长锥', { size: 12, weight: 700, fill: C.dnaD })
  // 线索分子
  b.tag(520, 244, 'Netrin（吸引）', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: '#065f46', pad: 7 })
  b.tag(520, 284, 'Slit / Sema（排斥）', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 7 })
  b.tag(520, 324, 'Ephrin（接触）', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 7 })
  b.wtext(60, 400, '同一配体可因受体组合或胞内 cAMP / cGMP 水平而效应相反——「线索的读法」由生长锥自己决定；Rho 家族 GTP 酶重组肌动蛋白实现转向。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(60, 460, '转向 = 肌动蛋白在丝足内的定向组装：吸引侧稳定、排斥侧坍缩。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、四类导向线索与中线穿越 ============
  b.panel(710, 132, 660, 430, { title: '二、四类经典导向线索与「先允许、后禁止」' })
  b.table(740, 200, 600, {
    headers: ['家族', '代表配体与来源', '受体', '典型效应'],
    colW: [110, 170, 160, 160],
    rowH: 52,
    fontSize: 10.5,
    rows: [
      ['Netrin', '底板分泌 Netrin-1', 'DCC（或 DCC-UNC5）', '长程吸引抵达中线'],
      ['Slit', '底板分泌', 'Robo', '排斥已过中线者'],
      ['Semaphorin', 'Sema3A 等分泌/膜型', 'Neuropilin + Plexin', '多为排斥'],
      ['Ephrin', '膜结合 A / B 型', 'EphA / EphB', '接触依赖双向信号'],
    ],
  })
  // 中线穿越示意
  b.ctext(1040, 460, '中线穿越的 Robo 开关', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(760, 480, 540, 60, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(776, 504, '穿越前：压低 Robo → Slit 排斥被「静音」→ 允许靠近中线', { size: 10.5, weight: 700, fill: C.ok })
  b.text(776, 526, '穿越后：Robo 表达恢复 → Slit 排斥生效 → 禁止回穿——单次穿越的分子闸门', { size: 10.5, weight: 700, fill: C.bad })

  // ============ 三、reelin 与 inside-out 分层 ============
  b.panel(30, 578, 660, 396, { title: '三、reelin 信号：晚生者在外层「刹车」' })
  b.rect(60, 648, 580, 180, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 10 })
  // 边缘带（Cajal-Retzius）
  b.rect(70, 658, 560, 34, { fill: C.rnaL, fillOp: 0.55, stroke: C.rna, sw: 1.5, rx: 6 })
  b.ctext(350, 680, '边缘带：Cajal-Retzius 细胞分泌 reelin', { size: 11.5, weight: 700, fill: C.rnaD })
  // 层
  const layers: Array<[string, string]> = [['VI 层（早生）', C.pro], ['V 层', C.acc], ['IV 层', C.dna], ['II–III 层（晚生）', C.ok]]
  layers.forEach(([label, c], i) => {
    b.rect(86, 704 + i * 30, 528, 26, { fill: c, fillOp: 0.25, stroke: c, sw: 1.2, rx: 4 })
    b.ctext(350, 721 + i * 30, label, { size: 10.5, weight: 600, fill: C.sub })
  })
  // 迁移箭头
  b.arrow(130, 830, 130, 700, { stroke: C.pro, sw: 2.4, marker: 'pro' })
  b.ctext(160, 850, '晚生神经元沿放射状纤维攀行', { size: 10.5, weight: 700, fill: C.proD })
  b.wtext(60, 866, 'reelin 使晚生神经元在最外层「刹车」定居——皮层由内向外（inside-out）分层；reeler 小鼠 reelin 缺陷致层序大体颠倒、小脑发育不良且共济失调（1951 年发现的经典突变）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、突触修剪 ============
  b.panel(710, 578, 660, 396, { title: '四、突触修剪：经验、小胶质细胞与青春期' })
  b.rect(740, 648, 290, 130, { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 1.8, rx: 9 })
  b.text(756, 674, '经验依赖修剪', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(756, 698, '视觉关键期的单眼剥夺实验：被剥夺眼的突触被成批删除——「用进废退」在突触尺度的直接演示。', { size: 11, fill: C.sub, maxW: 258, lh: 15 })
  b.rect(1050, 648, 290, 130, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.8, rx: 9 })
  b.text(1066, 674, '小胶质细胞的吞噬修剪', { size: 12.5, weight: 700, fill: C.dnaD })
  b.wtext(1066, 698, '补体 C1q 与 C3 标记弱突触，小胶质细胞经 CR3 介导吞噬——免疫分子被征用为「突触裁决官」。', { size: 11, fill: C.sub, maxW: 258, lh: 15 })
  b.rect(740, 806, 600, 96, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(756, 830, '修剪失衡的代价', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(756, 852, '青春期前额叶修剪异常与精神分裂症风险相关：修剪过少→连接过密假说，修剪过多→突触贫乏——「适度删除」是精确组装的必要代价。', { size: 11, fill: C.sub, maxW: 560, lh: 16 })
}

export default scene({
  title: '轴突导向与突触修剪：四类线索、Robo 开关与 reelin 分层',
  subtitle: '生长锥探测 Netrin/Slit/Sema/Ephrin；中线「先允许后禁止」；小胶质细胞经补体标记吞噬弱突触',
  draw,
})
