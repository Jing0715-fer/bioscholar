// em ch7-s2 三维重构的角度问题（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Crowther 判据 ============
  b.panel(30, 132, 660, 420, { title: '一、Crowther 判据：视角数的几何账' })
  b.text(50, 184, 'N_{view} ≈ πD/d（Crowther、DeRosier 与 Klug，1970）', { size: 14, weight: 700, fill: C.ink })
  b.wtext(50, 208, '直径 D 的颗粒要无混叠地分辨尺度 d 的细节，需约 πD/d 个均匀分布的投影：相邻中心截面的角间隔不超过 d/D 量级，才不致把高频信息折叠混叠。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.bars(80, 388, 380, 170, [32, 80, 157], {
    labels: ['d = 10 Å', 'd = 4 Å', 'd = 2 Å'],
    vlabels: ['约 32', '约 80', '约 157'],
    fill: C.accL, stroke: C.acc, max: 175,
  })
  b.ctext(270, 300, '固定 D = 100 Å：分辨率每提高一倍，所需视角翻倍', { size: 11, weight: 700, fill: C.accD })
  b.ctext(270, 436, '目标分辨率 d', { size: 12, weight: 600, fill: C.sub })
  b.wtext(480, 318, '两点必须强调：其一，均匀分布是前提——200 个挤在同一方向的投影，不及 80 个均匀铺开的视角；其二，判据只算几何账，统计账须再乘几个数量级，10^{5} 级颗粒数据集由此而来。', { size: 10.5, fill: C.sub, maxW: 190, lh: 15 })
  b.tag(580, 452, '大复合物「高分辨须大颗粒数」的定量出处', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })

  // ============ 二、取向覆盖三态 ============
  b.panel(710, 132, 660, 420, { title: '二、傅里叶空间的取向覆盖：三种命运' })
  const disk = (cx: number, cy: number, r: number, angles: number[], col: string) => {
    b.circle(cx, cy, r, { fill: '#ffffff', stroke: C.line, sw: 1.6 })
    angles.forEach(deg => {
      const a = (deg * Math.PI) / 180
      b.line(cx - r * 0.86 * Math.cos(a), cy - r * 0.86 * Math.sin(a), cx + r * 0.86 * Math.cos(a), cy + r * 0.86 * Math.sin(a), { stroke: col, sw: 2.2, opacity: 0.8 })
    })
    b.circle(cx, cy, 3.5, { fill: C.ink })
  }
  // (a) 均匀
  const uni: number[] = []
  for (let i = 0; i < 13; i++) uni.push((i * 180) / 13)
  disk(830, 300, 72, uni, C.ok)
  b.ctext(830, 398, '均匀覆盖', { size: 11.5, weight: 700, fill: C.okD })
  b.ctext(830, 416, '中心截面稠密铺满体积', { size: 9.5, fill: C.mute })
  // (b) 缺失锥
  const wedge: number[] = []
  for (let i = 0; i < 10; i++) wedge.push(30 + (i * 120) / 9)
  b.path('M 1040,300 L 992,246 A 72,72 0 0 1 992,354 Z', { fill: C.badL, fillOp: 0.8, stroke: C.bad, sw: 1.2, dash: '4 3' })
  disk(1040, 300, 72, wedge, C.warn)
  b.ctext(1040, 244, '缺失锥', { size: 10.5, weight: 700, fill: C.badD })
  b.ctext(1040, 398, '缺失锥/缺失楔', { size: 11.5, weight: 700, fill: C.warnD })
  b.ctext(1040, 416, '密度沿缺失方向拉长', { size: 9.5, fill: C.mute })
  // (c) 优势取向
  const pref: number[] = []
  for (let i = 0; i < 11; i++) pref.push(84 + i * 1.2)
  disk(1250, 300, 72, pref, C.bad)
  b.ctext(1250, 398, '优势取向', { size: 11.5, weight: 700, fill: C.badD })
  b.ctext(1250, 416, '单一视角信息论上不可重构', { size: 9.5, fill: C.mute })
  b.wtext(730, 462, '优势取向是单颗粒最常见失败模式：颗粒贴附界面或择优躺平，中心截面挤成一束——缺失锥使分辨率各向异性，单一视角数据在信息论意义上不可重构，取向加权与倾斜数据收集只能部分补救。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、无参考定向 ============
  b.panel(30, 572, 660, 398, { title: '三、无参考定向：共线法与随机锥形重构' })
  // 共线法
  b.circle(190, 700, 78, { fill: '#ffffff', stroke: C.line, sw: 1.6 })
  b.line(120, 660, 258, 742, { stroke: C.dna, sw: 2.4 })
  b.line(126, 748, 254, 655, { stroke: C.pro, sw: 2.4 })
  b.line(190, 626, 190, 774, { stroke: C.enz, sw: 2.6 })
  b.ctext(190, 610, '公共线（过原点）', { size: 10, weight: 700, fill: C.enzD })
  b.circle(190, 700, 3.5, { fill: C.ink })
  b.ctext(190, 792, '两个中心截面必交于公共线', { size: 10.5, weight: 700, fill: C.sub })
  b.wtext(80, 830, '共线法：van Heel 1987 年 angular reconstitution 从几张最清晰的 2D 类平均出发，搜索使公共线一致的相对取向，以多组三投影投票自举（bootstrap）出低分辨率初始模型——无须任何外部参考。', { size: 10.5, fill: C.sub, maxW: 560, lh: 15 })
  b.tag(360, 900, '随机锥形重构（Radermacher，1981 年前后构想、1986–1987 年系统发表）', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 10 })
  b.wtext(80, 938, '倾转已知角度 α 加 0 度两张照片：0 度像定面内角、倾转像补第三维，两像的取向共同张出一个锥面覆盖——用实验设计绕开取向搜索。', { size: 10.5, fill: C.sub, maxW: 560, lh: 15 })

  // ============ 四、ab initio 与参考偏差防线 ============
  b.panel(710, 572, 660, 398, { title: '四、现代 ab initio 与参考偏差的防线' })
  b.rect(730, 616, 620, 84, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(1040, 642, 'cryoSPARC ab initio（Punjani 2017）', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(1040, 664, '随机初始模型 + SGD 联合优化取向与密度 + 频率由低到高爬升', { size: 10.5, fill: C.sub })
  b.ctext(1040, 686, '对小于约 100 kDa 的样品常须百万级颗粒才稳', { size: 10, fill: C.mute })
  b.arrow(1040, 704, 1040, 730, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.text(730, 756, '参考偏差风险由 Dotson 与 Glaeser 2016 年论战推到台前，防线成套：', { size: 11, weight: 700, fill: C.ink })
  b.tag(860, 788, '金标准半图精修与 FSC 0.143（Scheres 2012）', { fill: C.okL, stroke: C.ok, size: 10.5, tfill: C.okD, pad: 9 })
  b.tag(1180, 788, '参考低通滤波防噪声入参考', { fill: C.okL, stroke: C.ok, size: 10.5, tfill: C.okD, pad: 9 })
  b.tag(860, 820, '纯噪声对照检验虚假信号', { fill: C.okL, stroke: C.ok, size: 10.5, tfill: C.okD, pad: 9 })
  b.tag(1180, 820, '独立初始模型交叉验证', { fill: C.okL, stroke: C.ok, size: 10.5, tfill: C.okD, pad: 9 })
  b.wtext(730, 862, '定向与初始模型方法对照：', { size: 11, weight: 700, fill: C.ink })
  b.table(730, 878, 620, {
    headers: ['方法', '依赖', '主要风险'],
    colW: [230, 180, 210], rowH: 26, fontSize: 10.5, headFill: C.panelB,
    rows: [
      ['共线法 / angular reconstitution', '公共线几何', '噪声下的伪解'],
      ['随机锥形重构', '已知倾角双张照片', '锥面覆盖不完整'],
      ['cryoSPARC ab initio（SGD）', '大颗粒数', '小样品不收敛'],
      ['同源结构参考', '先验模型', '参考偏差（最高）'],
    ],
  })
}

export default scene({
  title: '三维重构的角度问题：Crowther 判据与取向覆盖',
  subtitle: 'N ≈ πD/d（D=100 Å：10 Å 约 32 个视角、4 Å 约 80、2 Å 约 157）；缺失锥与优势取向是失败主因，共线法、随机锥形与 ab initio 各自给出无参考定向路线',
  draw,
})
