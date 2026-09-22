// sb ch11-s4 蛋白质动力学与 NMR 的其他应用（Task SB-4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、弛豫三参数与 S² 地图 ============
  b.panel(30, 132, 660, 300, { title: '一、弛豫三参数与模型自由分析：S² 柔性地图' })
  const params: Array<[string, string]> = [
    ['R1（1/T1 纵向）', '秒级，定重复等待'],
    ['R2（1/T2 横向）', '数十毫秒，定线宽'],
    ['异核 NOE', '最快的柔性探针'],
  ]
  params.forEach(([t, s], i) => {
    const x = 50 + i * 205
    b.rect(x, 160, 195, 40, { fill: C.accL, stroke: C.acc, sw: 1.4, rx: 7 })
    b.ctext(x + 97, 176, t, { size: 11.5, weight: 700, fill: C.accD })
    b.ctext(x + 97, 193, s, { size: 9.5, fill: C.sub })
    b.arrow(x + 97, 202, x + 97, 212, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  })
  b.rect(50, 214, 620, 36, { fill: C.proL, stroke: C.pro, sw: 1.4, rx: 7, fillOp: 0.6 })
  b.ctext(360, 236, '模型自由分析（Lipari 与 Szabo 1982）：序参量 S²（0 至 1）与有效相关时间 τe', { size: 11.5, weight: 700, fill: C.proD })
  // S² 沿序列条形图
  const s2vals: number[] = []
  const seg = (n: number, a: number, z: number) => { for (let i = 0; i < n; i++) s2vals.push(a + (z - a) * (i / Math.max(n - 1, 1))) }
  seg(4, 0.35, 0.72); seg(10, 0.84, 0.9); seg(8, 0.42, 0.3); seg(10, 0.86, 0.88); seg(4, 0.68, 0.5); seg(8, 0.45, 0.18)
  const cx0 = 80, cyB = 402, ch = 130, cw = 560
  const bw = cw / s2vals.length
  s2vals.forEach((v, i) => {
    const bh = v * ch
    b.rect(cx0 + i * bw + bw * 0.14, cyB - bh, bw * 0.72, bh, {
      fill: v >= 0.7 ? C.okL : v >= 0.4 ? C.warnL : C.badL,
      stroke: v >= 0.7 ? C.ok : v >= 0.4 ? C.warn : C.bad, sw: 1.1, rx: 2,
    })
  })
  b.line(cx0, cyB, cx0, cyB - ch, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.line(cx0, cyB, cx0 + cw + 10, cyB, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  for (const v of [0, 0.5, 1]) {
    b.line(cx0, cyB - v * ch, cx0 - 5, cyB - v * ch, { stroke: C.sub, sw: 1.4 })
    b.ctext(cx0 - 10, cyB - v * ch + 4, v.toFixed(1), { size: 9.5, fill: C.mute })
  }
  b.ctext(cx0 - 32, cyB - ch / 2, '序参量 S²', { size: 10.5, weight: 600, fill: C.sub, rotate: -90 })
  b.ctext(cx0 + cw / 2, cyB + 16, '残基序号（逐残基读数）', { size: 10, fill: C.mute })
  b.line(cx0, cyB - 0.4 * ch, cx0 + cw, cyB - 0.4 * ch, { stroke: C.bad, sw: 1.1, dash: '5 4' })
  b.text(86, 344, '柔性界 0.4', { size: 9.5, weight: 700, fill: C.bad })
  b.ctext(cx0 + 128, cyB - 0.87 * ch - 8, '刚性核心 0.8–0.9', { size: 9.5, weight: 700, fill: C.okD })
  b.ctext(cx0 + 236, 340, '活性环低于 0.4', { size: 9.5, weight: 700, fill: C.bad })
  b.ctext(600, 340, 'C 端弥散', { size: 9.5, weight: 700, fill: C.bad })
  b.wtext(50, 425, '异核 NOE 低值或负值直接圈定高柔性区，几乎不必建模；三参数须同温同机配套采集。', { size: 10, fill: C.sub, maxW: 620, lh: 13 })

  // ============ 二、CPMG 弛豫色散 ============
  b.panel(710, 132, 660, 300, { title: '二、CPMG 弛豫色散：把隐藏态拟合出来' })
  const dx0 = 740, dyB = 372, dyT = 212, dw = 280
  const nvx = (v: number) => dx0 + (Math.log10(v / 20) / 2) * dw
  const rvy = (v: number) => dyB - (v / 30) * (dyB - dyT)
  b.line(dx0, dyB, dx0, dyT, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.line(dx0, dyB, dx0 + dw + 14, dyB, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  for (const v of [10, 20, 30]) {
    b.line(dx0, rvy(v), dx0 - 5, rvy(v), { stroke: C.sub, sw: 1.4 })
    b.ctext(dx0 - 9, rvy(v) + 4, String(v), { size: 9.5, fill: C.mute })
  }
  for (const v of [20, 100, 1000]) {
    b.line(nvx(v), dyB, nvx(v), dyB - 6, { stroke: C.sub, sw: 1.4 })
    b.ctext(nvx(v), dyB + 15, String(v), { size: 9.5, fill: C.mute })
  }
  b.ctext(dx0 - 34, (dyT + dyB) / 2, 'R_{2,eff}（s⁻¹）', { size: 10.5, weight: 600, fill: C.sub, rotate: -90 })
  b.ctext(dx0 + dw / 2, dyB + 32, '回波频率 ν_{CPMG}（Hz，对数）', { size: 10, weight: 600, fill: C.sub })
  // 无交换参照（平线）
  b.line(dx0, rvy(12), dx0 + dw, rvy(12), { stroke: C.faint, sw: 1.8, dash: '6 5' })
  b.ctext(dx0 + dw - 26, rvy(12) + 14, '无交换：R2⁰', { size: 9.5, fill: C.mute })
  // 色散曲线
  const disp: Array<[number, number]> = []
  for (const v of [20, 30, 45, 70, 100, 150, 220, 330, 500, 750, 1100, 1600, 2000]) {
    disp.push([nvx(v), rvy(12 + 16 / (1 + Math.pow(v / 250, 2)))])
  }
  b.spline(disp, { stroke: C.enz, sw: 2.8 })
  b.circle(nvx(20), rvy(27.9), 4.5, { fill: C.enz })
  b.ctext(nvx(20) + 8, rvy(27.9) - 8, '低频平台：交换显现', { size: 9.5, weight: 700, fill: C.enz })
  b.arrow(nvx(30) + 14, rvy(27.5), nvx(30) + 14, rvy(12.5), { stroke: C.bad, sw: 1.8, marker: 'bad', markerStart: 'bad' })
  b.ctext(nvx(30) + 22, rvy(20) + 4, 'Rex', { size: 10.5, weight: 700, fill: C.bad })
  b.tag(nvx(500) + 20, rvy(15.5), '拟合得 kex 与 p_{B}', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enz, pad: 8 })
  // 右侧注记
  b.wtext(1060, 216, '自旋回波串成链、以回波频率反复「聚焦」交换效应——测 R_{2,eff} 对回波频率的依赖曲线。', { size: 10.5, fill: C.sub, maxW: 290, lh: 15 })
  b.wtext(1060, 268, '覆盖窗约 0.2–10 ms（kex 约 100–5000 s⁻¹），拟合隐藏态占有率与交换速率。', { size: 10.5, fill: C.sub, maxW: 290, lh: 15 })
  b.wtext(1060, 320, '更慢的交给 CEST（约 10–500 ms）：稀态占有率低至约 1% 仍可见；稀态先于配体存在，即构象选择的直接证据。', { size: 10.5, fill: C.sub, maxW: 290, lh: 15 })
  b.wtext(1060, 388, 'Palmer 组 2000 年代推成变构研究范式。', { size: 10, fill: C.sub, maxW: 290, lh: 14 })

  // ============ 三、时间尺度谱系 ============
  b.panel(30, 452, 1340, 230, { title: '三、从皮秒到小时：NMR 动力学方法的时间尺度谱系' })
  const ax0 = 70, ax1 = 1310
  const tx = (lg: number) => ax0 + ((lg + 12.3) / 16.3) * (ax1 - ax0)
  b.line(ax0, 572, ax1, 572, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  const ticks: Array<[number, string]> = [[-12, 'ps'], [-9, 'ns'], [-6, 'μs'], [-3, 'ms'], [0, 's'], [3.56, '小时']]
  for (const [lg, lab] of ticks) {
    b.line(tx(lg), 572, tx(lg), 578, { stroke: C.sub, sw: 1.8 })
    b.ctext(tx(lg), 594, lab, { size: 11, fill: C.mute })
  }
  // 上轨：快交换方法
  const band = (lg1: number, lg2: number, y: number, h: number, fill: string, stroke: string) =>
    b.rect(tx(lg1), y, tx(lg2) - tx(lg1), h, { fill, stroke, sw: 1.5, rx: 6 })
  band(-12.3, -8.7, 522, 34, C.accL, C.acc)
  b.ctext(tx(-10.5), 543, 'R1、R2、异核 NOE 加模型自由：S²、τe、τc', { size: 10.5, weight: 700, fill: C.accD })
  band(-5, -3, 522, 34, C.rnaL, C.rna)
  b.ctext(tx(-4), 543, 'R1ρ、谱线形状', { size: 10.5, weight: 700, fill: C.rnaD })
  band(-3.7, -2, 522, 34, C.enzL, C.enz)
  b.ctext(tx(-2.85), 543, 'CPMG：kex、p_{B}', { size: 10.5, weight: 700, fill: C.enz })
  band(-2, -0.3, 522, 34, C.warnL, C.warn)
  b.ctext(tx(-1.15), 543, 'CEST、zz-交换谱', { size: 10.5, weight: 700, fill: C.warnD })
  // 空窗
  b.rect(tx(-8.7), 522, tx(-5) - tx(-8.7), 34, { fill: 'none', stroke: C.faint, sw: 1.4, dash: '4 4', rx: 6 })
  b.ctext(tx(-6.85), 543, '方法学空窗', { size: 10, weight: 700, fill: C.faint })
  // 下轨：氢交换
  band(-3, 3.6, 604, 34, C.okL, C.ok)
  b.ctext(tx(0.3), 625, '氢交换保护因子：局部稳定性与折叠途径（时间窗秒至小时）', { size: 10.5, weight: 700, fill: C.okD })
  b.wtext(70, 662, 'ps–ns 档恰是酶催化环与结合界面「预存在运动」的尺度——晶体学只有 B 因子间接暗示，NMR 直接把幅度读成数字；ns 至 μs 空窗正由顺磁方法与新兴弛豫代理填补。', { size: 10, fill: C.sub, maxW: 1270, lh: 14 })

  // ============ 四、PRE、氢交换与互作应用 ============
  b.panel(30, 702, 1340, 200, { title: '四、PRE、氢交换与互作应用：不必解结构也有大用' })
  // PRE
  b.rect(50, 728, 420, 158, { fill: C.enzL, stroke: C.enz, sw: 1.3, rx: 8, fillOp: 0.4 })
  b.text(66, 750, 'PRE：长程距离与稀态探针', { size: 12.5, weight: 700, fill: C.enz })
  b.wtext(66, 770, 'MTSL 自旋标记工程化半胱氨酸，未配对电子使 15–35 Å 内的核额外弛豫。', { size: 10, fill: C.sub, maxW: 390, lh: 14 })
  const dsc = (a: number) => 70 + (a / 40) * 350
  b.rect(dsc(0), 800, dsc(6) - dsc(0), 13, { fill: C.accL, stroke: C.acc, sw: 1.2, rx: 3 })
  b.rect(dsc(15), 800, dsc(35) - dsc(15), 13, { fill: C.enz, stroke: C.enz, sw: 1.2, rx: 3, fillOp: 0.8 })
  b.line(dsc(0), 813, dsc(40), 813, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  for (const a of [0, 10, 20, 30, 40]) {
    b.line(dsc(a), 813, dsc(a), 818, { stroke: C.sub, sw: 1.3 })
    b.ctext(dsc(a), 830, String(a), { size: 9, fill: C.mute })
  }
  b.ctext(dsc(3), 792, 'NOE 至约 6 Å', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(dsc(25), 792, 'PRE 15–35 Å', { size: 9.5, weight: 700, fill: C.enz })
  b.wtext(66, 852, '对约 1% 瞬态敏感——遭遇复合物的成名应用；氧化态与还原态各测一份方为真对照。', { size: 10, fill: C.sub, maxW: 390, lh: 14 })
  // 氢交换
  b.rect(490, 728, 390, 158, { fill: C.okL, stroke: C.ok, sw: 1.3, rx: 8, fillOp: 0.4 })
  b.text(506, 750, '氢交换保护因子', { size: 12.5, weight: 700, fill: C.okD })
  b.wtext(506, 770, 'PF = 实测交换速率 ÷ 无结构参考速率', { size: 10, fill: C.sub, maxW: 360, lh: 14 })
  b.bars(516, 872, 150, 78, [6, 7, 8], { vlabels: ['10^{6}', '10^{7}', '10^{8}'], fill: C.okL, stroke: C.ok, max: 8.6 })
  b.ctext(591, 892, '保护因子可达', { size: 9.5, fill: C.mute })
  b.wtext(690, 792, '折算局部展开自由能：一张逐残基稳定性图谱，折叠途径的过渡态位置可由此圈定。', { size: 10, fill: C.sub, maxW: 175, lh: 14 })
  // 应用
  b.rect(900, 728, 440, 158, { fill: C.accL, stroke: C.acc, sw: 1.3, rx: 8, fillOp: 0.4 })
  b.text(916, 750, '互作与筛选的量具', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(916, 770, '化学位移滴定：Kd 最佳量程微摩尔至毫摩尔，峰移动方向画出结合面地图。', { size: 10, fill: C.sub, maxW: 410, lh: 14 })
  b.wtext(916, 800, 'SAR by NMR（Shuker 等 1996）：先筛两个弱结合片段、再连接优化，开创片段导向设计。', { size: 10, fill: C.sub, maxW: 410, lh: 14 })
  b.wtext(916, 830, 'STD 与 WaterLOGSY（Mayer 与 Meyer 1999）：毫摩尔级弱命中照收，每化合物只需纳摩尔级蛋白。', { size: 10, fill: C.sub, maxW: 410, lh: 14 })
  b.wtext(916, 866, '代谢组学：一维 ¹H 谱加统计模式识别，读出疾病与干预的代谢指纹。', { size: 10, fill: C.sub, maxW: 410, lh: 14 })
  b.ctext(700, 934, '静态结构可预测、动力学与系综不可预测——弱结合、瞬态复合物、变构稀态正是预测的盲区与 NMR 的舞台', { size: 11, weight: 600, fill: C.mute })
}

export default scene({
  title: '蛋白质动力学与 NMR 的其他应用：从皮秒到小时的谱系',
  subtitle: 'R1/R2/异核 NOE 给出 S² 与 τe；CPMG 覆盖 0.2–10 ms；CEST 至约 1% 稀态；PRE 15–35 Å；保护因子 10⁶–10⁸',
  draw,
})
