// sb ch10-s3 三维重构与均匀化精修（Task SB-3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、中心截面定理 ============
  b.panel(30, 132, 660, 330, { title: '一、中心截面定理：随机截面填满频率空间' })
  b.text(66, 182, '实空间', { size: 9.5, weight: 600, fill: C.mute })
  // 物体（三个取向的投影束）
  b.circle(125, 300, 50, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ellipse(110, 285, 16, 12, { fill: C.dna, fillOp: 0.4, stroke: 'none' })
  b.ellipse(140, 315, 13, 9, { fill: C.dna, fillOp: 0.4, stroke: 'none' })
  b.circle(135, 283, 7, { fill: C.dna, fillOp: 0.5, stroke: 'none' })
  b.arrow(125, 190, 125, 240, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.arrow(44, 300, 70, 300, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.arrow(215, 390, 172, 342, { stroke: C.bad, sw: 2, marker: 'bad' })
  // 投影小图
  b.rect(215, 175, 90, 46, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 4 })
  b.ellipse(260, 198, 30, 11, { fill: C.panelB, stroke: C.mute, sw: 1.2 })
  b.rect(215, 245, 90, 46, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 4 })
  b.ellipse(260, 268, 12, 16, { fill: C.panelB, stroke: C.mute, sw: 1.2 })
  b.rect(215, 315, 90, 46, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 4 })
  b.ellipse(260, 338, 26, 12, { fill: C.panelB, stroke: C.mute, sw: 1.2 })
  b.ctext(260, 378, '投影（取向各异）', { size: 9, fill: C.mute })
  b.arrow(309, 268, 408, 268, { stroke: C.mute, sw: 2.2, marker: 'ink' })
  // 频率空间：过原点的中心截面族
  b.text(598, 194, '频率空间', { size: 9.5, weight: 600, fill: C.mute, anchor: 'end' })
  b.ellipse(505, 275, 88, 24, { fill: C.accL, fillOp: 0.55, stroke: C.acc, sw: 1.4 })
  b.ellipse(505, 275, 24, 88, { fill: C.proL, fillOp: 0.55, stroke: C.pro, sw: 1.4 })
  b.ellipse(505, 275, 62, 62, { fill: C.okL, fillOp: 0.45, stroke: C.ok, sw: 1.4 })
  b.ellipse(505, 275, 80, 46, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 1.4 })
  b.ellipse(505, 275, 46, 80, { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.4 })
  b.circle(505, 275, 4, { fill: C.ink, stroke: 'none' })
  b.ctext(505, 385, '每张投影给一张过原点的截面', { size: 9, fill: C.mute })
  b.wtext(56, 408, '一张投影的二维傅里叶变换，恰是物体三维傅里叶变换过原点的中心截面——十万颗粒的十万张随机截面填满频率空间，反变换即得密度图；缺失的截面就是频率空间里补不上的洞。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // ============ 二、初始模型与三维分类 ============
  b.panel(710, 132, 660, 330, { title: '二、初始模型与三维分类' })
  b.text(730, 180, 'ab initio：多起点排假', { size: 11.5, weight: 700, fill: C.ink })
  const noiseOff: Array<[number, number]> = [[-6, -4], [5, -7], [7, 5], [-4, 7]]
  for (let i = 0; i < 4; i++) {
    const cx = 755 + i * 40
    b.circle(cx, 205, 16, { fill: C.panelB, stroke: C.faint, sw: 1.4 })
    for (const [dx, dy] of noiseOff) b.circle(cx + dx, 205 + dy, 2, { fill: C.mute, stroke: 'none' })
  }
  b.ctext(815, 236, '4–8 个随机起点（噪声球出发）', { size: 9, fill: C.sub })
  b.arrow(755, 223, 798, 258, { stroke: C.mute, sw: 1.3, marker: 'ink' })
  b.arrow(795, 223, 803, 258, { stroke: C.mute, sw: 1.3, marker: 'ink' })
  b.arrow(835, 223, 810, 258, { stroke: C.mute, sw: 1.3, marker: 'ink' })
  b.arrow(875, 223, 817, 258, { stroke: C.mute, sw: 1.3, marker: 'ink' })
  b.ellipse(808, 282, 27, 21, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.circle(800, 276, 6, { fill: C.dna, fillOp: 0.5, stroke: 'none' })
  b.ctext(808, 318, '终态一致才可信', { size: 9, fill: C.sub })
  b.wtext(730, 348, '频率以低通逐级放开：约 40–60 Å 起步、先定轮廓再上细节——高频放得太早，噪声与偏差滚雪球；AlphaFold 低通先验同守「多起点收敛一致」与「独立交叉验证」的老规矩。', { size: 9.5, fill: C.sub, maxW: 270, lh: 13 })
  b.line(1020, 180, 1020, 450, { stroke: C.line, sw: 1, dash: '5 4' })
  b.text(1040, 180, '三维分类：拆构象、筛质量', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(1040, 200, 145, 56, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 8 })
  b.ctext(1112, 222, '类 1：结合态', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(1112, 240, '独立参考与取向', { size: 8.5, fill: C.sub })
  b.rect(1210, 200, 145, 56, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(1282, 222, '类 2：空载态', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(1282, 240, '独立参考与取向', { size: 8.5, fill: C.sub })
  b.arrow(1187, 220, 1207, 220, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.arrow(1207, 238, 1187, 238, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ctext(1197, 258, 'tau 控制迁移', { size: 8.5, fill: C.warnD })
  b.rect(1040, 285, 145, 44, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 8 })
  b.ctext(1112, 303, '垃圾类', { size: 10, weight: 700, fill: C.badD })
  b.ctext(1112, 318, '自发吸收坏颗粒与冰渣', { size: 8.5, fill: C.sub })
  b.wtext(1040, 350, '类数常取 3–8：太少把构象态压扁平均，太多每类颗粒不足、分辨率反跌；类占有率即溶液中的态比例；判读须各类密度能互相解释、差异集中于预期功能部位。', { size: 9.5, fill: C.sub, maxW: 300, lh: 13 })

  // ============ 三、金标准精修 ============
  b.panel(30, 482, 660, 420, { title: '三、金标准精修：分半独立、只在 FSC 碰面' })
  b.rect(240, 512, 220, 36, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 8 })
  b.ctext(350, 535, '全部颗粒（随机分半）', { size: 10.5, weight: 700, fill: C.ink })
  b.arrow(315, 548, 205, 588, { stroke: C.mute, sw: 1.8, marker: 'ink' })
  b.arrow(385, 548, 495, 588, { stroke: C.mute, sw: 1.8, marker: 'ink' })
  b.rect(95, 592, 215, 62, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(202, 614, '半区 1', { size: 11, weight: 700, fill: C.accD })
  b.wtext(115, 636, '独立取向指认与参考更新', { size: 9, fill: C.sub, maxW: 175, lh: 11 })
  b.rect(390, 592, 215, 62, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 8 })
  b.ctext(497, 614, '半区 2', { size: 11, weight: 700, fill: C.proD })
  b.wtext(410, 636, '独立取向指认与参考更新', { size: 9, fill: C.sub, maxW: 175, lh: 11 })
  b.line(310, 623, 390, 623, { stroke: C.bad, sw: 1.5, dash: '5 4' })
  b.line(342, 617, 358, 629, { stroke: C.bad, sw: 2.2 })
  b.line(342, 629, 358, 617, { stroke: C.bad, sw: 2.2 })
  b.tag(350, 652, '互不通信', { fill: C.badL, stroke: C.bad, size: 9, weight: 700, tfill: C.badD, pad: 5 })
  b.arrow(202, 654, 310, 700, { stroke: C.mute, sw: 1.8, marker: 'ink' })
  b.arrow(497, 654, 390, 700, { stroke: C.mute, sw: 1.8, marker: 'ink' })
  b.rect(300, 705, 130, 46, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 8 })
  b.ctext(365, 724, '仅算 FSC', { size: 10.5, weight: 700, fill: C.okD })
  b.ctext(365, 740, '时两半碰面', { size: 9, fill: C.sub })
  b.arrow(365, 751, 365, 772, { stroke: C.mute, sw: 1.8, marker: 'ink' })
  b.tag(360, 792, 'FSC＝0.143：分辨率金科玉律（Scheres 与 Chen 2012）', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.okD, pad: 7 })
  b.wtext(56, 826, '常规旋钮：局部角度搜索窗口随迭代收窄、采样步长自约 7.5 度细化到亚度级、掩蔽逐级收紧、频率上限逐级放开——迭代 20–25 轮、取向参数与 FSC 不再变动即收敛。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })
  b.wtext(56, 860, '分半必须随机化——不能一半来自网 A 一半来自网 B，批次效应会假扮分辨率；金标准把算力翻倍，是「防伪」的诚实代价。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // ============ 四、精修进阶与对称性时机 ============
  b.panel(710, 482, 660, 420, { title: '四、精修进阶四层与对称性时机' })
  const layers: Array<[string, string]> = [
    ['贝叶斯抛光（Zivanov 等 2019）', '逐颗粒轨迹后验估计，运动校正从微图级下沉到颗粒级——对束致运动残留的高频损失是最后一道挽回'],
    ['逐颗粒 CTF 与高阶像差（Zivanov 等 2018）', 'defocus 逐颗精修（冰深埃级涨落），再上束倾、三叶、四阶曲面——3 Å 以内攻坚逐项变现'],
    ['局部聚焦精修', '掩蔽目标亚基、减除其余密度后独立精修——柔性附属挂在刚性核心上常靠它单独拿高分辨'],
    ['多体精修（Nakane 等 2018）', '复合物拆成刚体、各自精修取向与位置，产出的体间相对运动谱本身就是动力学数据'],
  ]
  let ry = 530
  for (let i = 0; i < layers.length; i++) {
    b.circle(750, ry - 4, 12, { fill: C.acc, stroke: 'none' })
    b.ctext(750, ry, String(i + 1), { size: 11, weight: 700, fill: '#ffffff' })
    b.text(770, ry, layers[i][0], { size: 11.5, weight: 700, fill: C.accD })
    b.wtext(770, ry + 16, layers[i][1], { size: 9.5, fill: C.sub, maxW: 565, lh: 12.5 })
    ry += 44
  }
  b.line(730, 692, 1350, 692, { stroke: C.line, sw: 1 })
  b.ctext(940, 716, '对称性时机：先 C1 验证、后施加', { size: 11.5, weight: 700, fill: C.ink })
  b.ellipse(790, 778, 30, 23, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.circle(778, 766, 5, { fill: C.pro, stroke: 'none' })
  b.ctext(790, 815, 'C1（不对称）', { size: 9, fill: C.sub })
  b.arrow(828, 778, 886, 778, { stroke: C.mute, sw: 2, marker: 'ink' })
  b.ctext(857, 766, '确认自发对称', { size: 8.5, fill: C.mute })
  for (let k = 0; k < 6; k++) {
    const a = (k * Math.PI) / 3 - Math.PI / 2
    b.circle(955 + 32 * Math.cos(a), 778 + 32 * Math.sin(a), 12.5, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  }
  b.circle(955, 778, 4.5, { fill: C.pro, stroke: 'none' })
  b.ctext(955, 815, 'C6：等效颗粒数 ×6', { size: 9, fill: C.sub })
  b.wtext(1040, 735, '对称是假设不是恩赐——错误对称把无关密度相干平均成伪结构；施加后 FSC 与密度连通性的改善即是验证。', { size: 9.5, fill: C.sub, maxW: 300, lh: 13 })
  b.wtext(730, 840, '次序「先便宜后昂贵」：逐颗粒校正近乎免费、先做；聚焦与多体改变问题定义、后做；对称一旦施加便难再客观验证——永远最后做。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // 底部收束
  b.ctext(700, 940, '均匀化的要义：不是把颗粒硬变一样，而是把不一样的先分开，再让每一态各自享受高分辨精修', { size: 12, weight: 600, fill: C.mute })
}

export default scene({
  title: '三维重构与均匀化精修：中心截面定理与金标准',
  subtitle: '十万随机截面填满频率空间；ab initio 多起点 4–8 个、低通 40–60 Å 起步；3D 分类 3–8 类；金标准分半互不通信、FSC 0.143；采样 7.5 度至亚度级、迭代 20–25 轮',
  draw,
})
