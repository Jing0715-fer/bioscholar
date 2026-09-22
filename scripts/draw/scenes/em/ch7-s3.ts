// em ch7-s3 衬度传输函数与成像理论（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  const LAM = 0.00197 // nm，300 kV
  const Q = 0.07
  const ctf = (g: number, dfNm: number) => {
    const chi = Math.PI * LAM * g * g * dfNm
    return -(Math.sin(chi) + Q * Math.cos(chi))
  }

  // ============ 一、WPOA 与完整 CTF ============
  b.panel(30, 132, 660, 412, { title: '一、弱相位物体近似与完整 CTF' })
  b.wtext(50, 180, '纯相位物体在正焦下不可见；欠焦是让相位差显影为强度差的「天然泽尼克板」——单颗粒刻意工作在离焦态，正是这一成像机制的选择。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.rect(50, 208, 610, 74, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 8 })
  b.ctext(355, 234, 'CTF(g) = −[sin(χ) + Q·cos(χ)]', { size: 15, weight: 700, fill: C.ink })
  b.ctext(355, 258, 'χ = πλg^{2}(Δf − 0.5λ^{2}g^{2}C_{s})', { size: 13, weight: 700, fill: C.sub })
  b.ctext(355, 278, 'λ = 0.00197 nm（300 kV）；Q 约 0.07–0.2；C_{s} 0.5–2 mm', { size: 11, fill: C.mute })
  b.tag(180, 318, 'sin(χ)：相位衬度项，随欠焦振荡', { fill: C.dnaL, stroke: C.dna, size: 10.5, tfill: C.dnaD, pad: 9 })
  b.tag(470, 318, 'Q·cos(χ)：振幅衬度项，低频补缺', { fill: C.proL, stroke: C.pro, size: 10.5, tfill: C.proD, pad: 9 })
  b.wtext(50, 352, '振幅衬度分数 Q 来自散射电子被物镜光阑或能量过滤器剔除的振幅损失，冰包埋蛋白典型 0.07–0.2——颗粒整体轮廓（低频）主要靠它传递；小分子量蛋白低频缺、高频又埋进噪声，成像天然吃亏。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(200, 452, '本平台约定欠焦取负值', { fill: C.warnL, stroke: C.warn, size: 10.5, tfill: C.warnD, pad: 9 })
  b.tag(460, 452, '像散控制于欠焦值的百分之几以内', { fill: C.warnL, stroke: C.warn, size: 10.5, tfill: C.warnD, pad: 9 })
  b.wtext(50, 500, '像散把零点位置在不同方向上拉开（椭圆化），拟合须连同像散一起解。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 二、CTF 曲线族 ============
  b.panel(710, 132, 660, 412, { title: '二、CTF 一维曲线族：300 kV 欠焦扫描' })
  const ax = 850, ay = 496, aw = 460, ah = 300
  b.axis(ax, ay, aw, ah, {
    grid: false,
    xticks: [[0, '0'], [0.286, '1.0'], [0.571, '2.0'], [0.857, '3.0'], [1, '']],
    yticks: [[0.5, '+1'], [0.045, '0'], [0.95, '−1']],
    xlabel: '空间频率 g（nm^{-1}）',
    ylabel: 'CTF',
  })
  b.arrow(1308, 496, 1318, 496, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  const fam: [number, string, string][] = [[-500, C.acc, 'Δf = −0.5 μm'], [-1000, C.dna, 'Δf = −1 μm'], [-2000, C.warn, 'Δf = −2 μm']]
  fam.forEach(([df, col, label], idx) => {
    const pts: [number, number][] = []
    for (let i = 0; i <= 220; i++) {
      const g = (i / 220) * 3.5
      pts.push([g / 3.5, (ctf(g, df) + 1.1) / 2.2])
    }
    b.curve(ax, ay, aw, ah, pts, { stroke: col, sw: 2.2 })
    b.text(ax + 12 + idx * 6, ay - ah + 18 + idx * 20, label, { size: 11.5, weight: 700, fill: col })
  })
  // 零点标记
  b.line(ax + (0.71 / 3.5) * aw, ay, ax + (0.71 / 3.5) * aw, ay - 44, { stroke: C.dna, sw: 1.3, dash: '4 4' })
  b.line(ax + (1.01 / 3.5) * aw, ay, ax + (1.01 / 3.5) * aw, ay - 20, { stroke: C.dna, sw: 1.3, dash: '4 4' })
  b.circle(ax + (1.01 / 3.5) * aw, ay - ah * 0.045 - 8, 4, { fill: C.dna })
  b.tag(1010, 545, '−1 μm 的零点：0.71 / 1.01 / 1.23 / 1.43 nm^{-1}', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 8 })
  b.tag(760, 577, '−2 μm 首零点 g_{1} ≈ 0.50（周期约 2 nm）', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 8 })
  b.tag(1090, 577, '−0.5 μm 首零点外移至约 1.0 nm^{-1}', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 8 })
  b.wtext(730, 206, '零点＝该照片的周期性盲区：零点频率的结构信息完全湮灭，平均救不回。对 3 Å 目标（g 约 3.3 nm^{-1}），−1 μm 欠焦通带内已有约十个零点——CTF 校正不是修一处而是修一串。曲线按忽略 C_{s} 高阶项绘制（其修正量在图示范围内约百分之几）。', { size: 10, fill: C.sub, maxW: 600, lh: 14 })

  // ============ 三、Thon 环与多欠焦 ============
  b.panel(30, 572, 660, 398, { title: '三、Thon 环拟合与多欠焦互补' })
  const px = 90, py = 620, ps = 170
  b.rect(px, py, ps, ps, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  for (let i = 0; i < 6; i++) {
    const r = 14 + i * 13
    b.circle(px + ps / 2, py + ps / 2, r, { fill: i % 2 === 0 ? C.acc : '#ffffff', fillOp: i % 2 === 0 ? 0.28 : 1, stroke: 'none' })
  }
  b.circle(px + ps / 2, py + ps / 2, 4, { fill: C.ink })
  b.ctext(px + ps / 2, py + ps + 20, '功率谱的 Thon 环', { size: 10.5, weight: 700, fill: C.sub })
  b.arrow(px + ps + 16, py + ps / 2, px + ps + 66, py + ps / 2, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(px + ps + 72, py + 18, 130, 134, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(px + ps + 137, py + 48, 'CTFFIND4', { size: 11, weight: 700, fill: C.accD })
  b.ctext(px + ps + 137, py + 66, 'Rohou 与 Grigorieff 2015', { size: 9, fill: C.mute })
  b.ctext(px + ps + 137, py + 84, 'GCTF（Zhang 2016）', { size: 11, weight: 700, fill: C.accD })
  b.ctext(px + ps + 137, py + 104, '报告：欠焦、像散', { size: 9.5, fill: C.sub })
  b.ctext(px + ps + 137, py + 122, '拟合分辨率极限', { size: 9.5, fill: C.sub })
  b.ctext(px + ps + 137, py + 140, '失败微图早期剔除', { size: 9.5, fill: C.badD })
  b.wtext(60, 830, '三角权衡：近焦（−0.5 μm 以内）首零点远、高频可传，但低频衬度弱、颗粒难辨；强欠焦（−2 至 −3 μm）颗粒清晰，但首零点内移砍掉中频、包络衰减加深。解法是多欠焦收集：数据集把欠焦铺在 −0.5 至 −3 μm（主力 −0.8 至 −2.0 μm），零点错开、频域互补合并。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(220, 920, '小颗粒配大欠焦', { fill: C.proL, stroke: C.pro, size: 10.5, tfill: C.proD, pad: 9 })
  b.tag(430, 920, '大复合物配小欠焦', { fill: C.proL, stroke: C.pro, size: 10.5, tfill: C.proD, pad: 9 })
  b.tag(600, 920, '近焦批次可后补', { fill: C.proL, stroke: C.pro, size: 10.5, tfill: C.proD, pad: 9 })

  // ============ 四、校正两派与包络 ============
  b.panel(710, 572, 660, 398, { title: '四、CTF 校正两派与包络函数' })
  b.tag(880, 628, '相位翻转：按符号乘正负一', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 10 })
  b.tag(1190, 628, '全幅度：维纳式除以 CTF', { fill: C.proL, stroke: C.pro, size: 11, weight: 700, tfill: C.proD, pad: 10 })
  b.wtext(730, 672, '相位翻转简单稳健，但零点附近信噪为零、翻转无济于事，且忽略幅度变化；全幅度修正同时补偿幅度、信息更完整，对拟合误差也更敏感——第 8 章逐颗粒 CTF 精修属此路线的现代化（同一微图内欠焦可差数十纳米）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  const ex = 850, ey = 852, ew = 300, eh = 130
  b.axis(ex, ey, ew, eh, {
    grid: false,
    xticks: [[0, '0'], [1, '']],
    yticks: [[1, '1'], [0, '0']],
    xlabel: '频率 g',
    title: '包络：束发散、能量展宽、漂移',
  })
  b.arrow(1146, 852, 1156, 852, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  const env: [number, number][] = []
  for (let i = 0; i <= 60; i++) env.push([i / 60, Math.exp(-Math.pow(i / 60, 2) * 3.2)])
  b.curve(ex, ey, ew, eh, env, { stroke: C.warn, sw: 2.4 })
  b.ctext(1000, 712, '有效传递函数 = CTF × 包络', { size: 11.5, weight: 700, fill: C.warnD })
  b.tag(1195, 780, '信息极限（包络决定）', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 9 })
  b.tag(1195, 812, '奈奎斯特极限 = 2 倍像素尺寸', { fill: C.panelB, stroke: C.sub, size: 10.5, tfill: C.sub, pad: 9 })
  b.tag(1195, 844, '两者相互独立', { fill: C.panelB, stroke: C.sub, size: 10.5, tfill: C.sub, pad: 9 })
  b.wtext(730, 900, '像素再小、包络不答应，分辨率也上不去；B 因子锐化在图谱层面把有效传递函数部分地除回去。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
}

export default scene({
  title: '衬度传输函数：弱相位物体近似与欠焦扫描',
  subtitle: 'CTF(g) = −[sin(χ) + Q·cos(χ)]，Q 约 0.07–0.2；300 kV 下 −2 μm 首零点约 0.50 nm⁻¹、−0.5 μm 约 1.0 nm⁻¹，−1 μm 通带内约十个零点——多欠焦互补与维纳式修正是解药',
  draw,
})
