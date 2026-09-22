// sb ch7-s3 实验相位法：同晶置换与反常散射（Task 4-b）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、同晶置换与差值 Patterson ============
  b.panel(30, 132, 660, 330, { title: '一、同晶置换：差值 Patterson 定位重原子' })
  // 母体晶体
  b.rect(60, 218, 140, 108, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 5 })
  b.ctext(130, 236, '母体晶体 F_{P}', { size: 10.5, weight: 700, fill: C.ink })
  const pAt: Array<[number, number]> = [[90, 262], [120, 252], [150, 275], [105, 295], [140, 310], [170, 295]]
  for (const [x, y] of pAt) b.circle(x, y, 3, { fill: C.dna, fillOp: 0.75, stroke: 'none' })
  b.text(70, 344, '晶胞 a = 61.84 Å', { size: 9.5, fill: C.mute })
  // 浸泡箭头
  b.arrow(205, 272, 245, 272, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.tag(225, 240, '浸泡 0.1–10 mM', { fill: C.warnL, stroke: C.warn, size: 9.5, weight: 700, tfill: C.warnD, pad: 7 })
  b.ctext(225, 300, '数小时至数天', { size: 9, fill: C.mute })
  // 衍生物晶体
  b.rect(250, 218, 140, 108, { fill: '#fef3c7', fillOp: 0.4, stroke: C.sub, sw: 1.8, rx: 5 })
  b.ctext(320, 236, '衍生物 F_{PH}（+重原子）', { size: 10.5, weight: 700, fill: C.warnD })
  for (const [x, y] of pAt) b.circle(x + 190, y, 3, { fill: C.dna, fillOp: 0.55, stroke: 'none' })
  const hvy: Array<[number, number]> = [[285, 265], [332, 292], [300, 322]]
  for (const [x, y] of hvy) b.circle(x, y, 7.5, { fill: C.warn, stroke: C.warnD, sw: 1.4 })
  b.text(258, 344, '晶胞 a = 62.11 Å（变化 0.4%）', { size: 9.5, fill: C.mute })
  // 差值 Patterson
  b.rect(430, 218, 200, 128, { fill: C.bg, stroke: C.sub, sw: 1.8, rx: 5 })
  b.ctext(530, 236, '差值 Patterson：ΔF 系数', { size: 10.5, weight: 700, fill: C.ink })
  const pcx = 530, pcy = 290
  for (let i = 0; i < hvy.length; i++) for (let j = i + 1; j < hvy.length; j++) {
    const vx = (hvy[j][0] - hvy[i][0]) * 0.9, vy = (hvy[j][1] - hvy[i][1]) * 0.9
    b.circle(pcx + vx / 2, pcy + vy / 2, 6.5, { fill: C.warn, fillOp: 0.85, stroke: C.warnD, sw: 1.2 })
    b.circle(pcx - vx / 2, pcy - vy / 2, 6.5, { fill: C.warn, fillOp: 0.85, stroke: C.warnD, sw: 1.2 })
  }
  b.text(438, 358, '蛋白贡献大体相消，只剩重原子间向量峰', { size: 9.5, fill: C.mute })
  b.tag(510, 388, '数个巨峰，人工即可解出亚结构', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.okD, pad: 8 })
  b.wtext(56, 400, '历史坐标：Perutz 学派 1950 年代在血红蛋白上建立方法学；Kendrew 的肌红蛋白 1958 年得 6 Å、1960 年推进到 2 Å（1962 年诺贝尔化学奖）。同晶性是硬门槛：晶胞变化须小于 1%、空间群不变，否则强度之差混入晶格噪声——浸泡筛选废品率常过半。', { size: 10, fill: C.sub, maxW: 360, lh: 14.5 })

  // ============ 二、Harker 相位圆 ============
  b.panel(710, 132, 660, 330, { title: '二、Harker 相位圆（1956）：SIR 双解与破解' })
  const OX = 900, OY = 270
  // 坐标轴
  b.line(OX - 130, OY, OX + 170, OY, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.line(OX, OY - 130, OX, OY + 120, { stroke: C.faint, sw: 1, dash: '4 4' })
  // 圆1：|F_P| 绕原点
  b.circle(OX, OY, 90, { fill: 'none', stroke: C.dna, sw: 2.2 })
  // F_H 向量（已知）
  const Hx = OX + 60.6, Hy = OY - 35
  b.arrow(OX, OY, Hx, Hy, { stroke: C.warn, sw: 2.6, marker: 'warn' })
  b.ctext(Hx + 6, Hy - 14, 'F_{H}（位点已定）', { size: 10, weight: 700, fill: C.warnD })
  // 圆2：以 −F_H 端点为心、|F_PH| 为半径
  const C2x = OX - 60.6, C2y = OY + 35
  b.circle(C2x, C2y, 105, { fill: 'none', stroke: C.enz, sw: 2.2, dash: '7 5' })
  b.circle(C2x, C2y, 3.5, { fill: C.enz })
  b.ctext(C2x - 6, C2y + 18, '−F_{H} 端点为心', { size: 9.5, fill: C.enz })
  // 两个交点（数值求解）
  const dx = C2x - OX, dy = C2y - OY, d = Math.hypot(dx, dy), r1 = 90, r2 = 105
  const a = (d * d + r1 * r1 - r2 * r2) / (2 * d)
  const hgt = Math.sqrt(Math.max(r1 * r1 - a * a, 0))
  const ux = dx / d, uy = dy / d
  const P1x = OX + a * ux - hgt * uy, P1y = OY + a * uy + hgt * ux
  const P2x = OX + a * ux + hgt * uy, P2y = OY + a * uy - hgt * ux
  b.arrow(OX, OY, P1x, P1y, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.arrow(OX, OY, P2x, P2y, { stroke: C.acc, sw: 2.4, dash: '6 4', marker: 'acc' })
  b.circle(P1x, P1y, 4.5, { fill: C.acc, stroke: 'none' })
  b.circle(P2x, P2y, 4.5, { fill: 'none', stroke: C.acc, sw: 1.8 })
  b.ctext(P1x - 10, P1y - 14, '候选 α', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(P2x + 6, P2y + 22, '候选 β', { size: 10.5, weight: 700, fill: C.accD })
  b.tag(1075, 200, 'F_{PH} = F_{P} + F_{H}', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 8 })
  b.wtext(725, 428, 'SIR 双解困局：两个候选对一切强度数据同样自洽，图上真假并存。破解有二：再加独立衍生物（MIR，第二个圆收敛为单解）或引入反常差异（SIRAS）当第三观测。Blow 与 Crick（1959）以缺乏闭合误差把几何作图改写为概率语言——输出相位概率分布而非单值。', { size: 10, fill: C.sub, maxW: 430, lh: 14.5 })
  // MIR 插图：三圆共点
  const ix = 1245, iy = 245
  b.rect(ix - 92, iy - 74, 184, 172, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 8 })
  b.ctext(ix, iy - 56, 'MIR：第二个圆收敛', { size: 10, weight: 700, fill: C.ink })
  b.circle(ix - 46, iy - 8, 36, { fill: 'none', stroke: C.dna, sw: 1.8 })
  b.circle(ix + 10, iy - 2, 30, { fill: 'none', stroke: C.enz, sw: 1.8, dash: '5 4' })
  b.circle(ix - 22, iy + 42, 29, { fill: 'none', stroke: C.bad, sw: 1.8 })
  b.circle(ix - 16, iy + 12, 4.5, { fill: C.ok, stroke: 'none' })
  b.ctext(ix - 16, iy + 2, '唯一解', { size: 9, weight: 700, fill: C.okD })
  b.text(ix + 34, iy - 26, '×', { size: 15, weight: 700, fill: C.bad })
  b.ctext(ix, iy + 82, '两圆交点被第三圆排除', { size: 9, fill: C.mute })

  // ============ 三、反常散射与 Bijvoet 对 ============
  b.panel(30, 482, 660, 400, { title: '三、反常散射：把波长拧到吸收边（SAD）' })
  // f'/f'' 曲线（共同刻度：(v+8)/12）
  const ax = 56, ay = 690, aw = 300, ah = 110
  b.ctext(ax + aw / 2, 530, 'Se 的 f′ 与 f″ 随能量剧变（示意，单位 e^{−}）', { size: 11, weight: 700, fill: C.ink })
  b.axis(ax, ay, aw, ah, {
    xlabel: '', grid: false,
    xticks: [[0.092, '8.05'], [0.5, '10.5'], [0.858, '12.658'], [1, '13.5']],
    yticks: [[0.02, '−8'], [0.42, '−3'], [0.67, '0'], [0.97, '+3.8']],
  })
  const ex = (kev: number) => (kev - 7.5) / 6 * aw // 7.5..13.5 keV
  // 零线
  b.line(ax, ay - 0.67 * ah, ax + aw, ay - 0.67 * ah, { stroke: C.faint, sw: 1, dash: '3 4' })
  // f''：边前约 1 e-，边处尖峰 3.8，边后衰减
  const fpp: Array<[number, number]> = [[0.0, 0.755], [0.3, 0.755], [0.55, 0.76], [0.72, 0.78], [0.8, 0.83], [0.846, 0.97], [0.87, 0.90], [0.9, 0.88], [1, 0.875]]
  b.curve(ax, ay, aw, ah, fpp, { stroke: C.enz, sw: 2.6 })
  // f'：边前约 0，边处深跌 -8，边后回升
  const fpc: Array<[number, number]> = [[0.0, 0.672], [0.3, 0.665], [0.55, 0.64], [0.72, 0.52], [0.8, 0.36], [0.846, 0.02], [0.86, 0.16], [0.89, 0.32], [1, 0.42]]
  b.curve(ax, ay, aw, ah, fpc, { stroke: C.dna, sw: 2.6, dash: '7 4' })
  // Cu Kα 硫参照
  b.line(ax + ex(8.05), ay - 0.71 * ah, ax + ex(8.05), ay, { stroke: C.mute, sw: 1.1, dash: '3 4' })
  b.circle(ax + ex(8.05), ay - 0.713 * ah, 3.6, { fill: C.mute })
  b.text(ax + ex(8.05) + 4, ay - 0.78 * ah, 'Cu Kα：硫 f″ 约 0.56 e^{−}', { size: 9, weight: 700, fill: C.mute })
  // Se K 边竖线
  b.line(ax + ex(12.658), ay, ax + ex(12.658), ay - ah, { stroke: C.sub, sw: 1.3, dash: '4 4' })
  b.text(ax + ex(12.658) - 3, ay - ah - 8, 'Se K 边 12.658 keV = 0.9795 Å', { size: 9.5, weight: 700, fill: C.sub, anchor: 'end' })
  b.text(ax + ex(12.658) + 5, ay - 0.94 * ah, 'f″ 峰约 3.8 e^{−}', { size: 9.5, weight: 700, fill: C.enz })
  b.text(ax + 8, ay - 0.02 * ah - 6, 'f′ 深跌为负（两者 Kramers-Kronig 锁定）', { size: 9, weight: 700, fill: C.dnaD })
  // 三个 MAD 波长标记
  b.ctext(ax + ex(12.68), 552, '峰/边', { size: 9.5, weight: 700, fill: C.bad })
  b.ctext(ax + ex(13.3), 552, '远程', { size: 9.5, weight: 700, fill: C.acc })
  for (const kev of [12.68, 13.3]) b.circle(ax + ex(kev), 566, 4, { fill: C.bad, stroke: 'none' })
  b.ctext(ax + aw / 2, 734, '入射能量（keV）', { size: 13, weight: 600, fill: C.sub })
  b.wtext(56, 756, '对照刻度：天然硫在 Cu Kα 下 f″ 仅约 0.56 e^{−}——硒的反常信号近七倍于硫。MAD 须在峰、边、远程三个波长各收一套完整数据，晶体扛数倍剂量；SAD 只在峰波长收一套，配密度修饰即可定相——剂量省、晶体省、收集快，已是绝对主流。', { size: 10, fill: C.sub, maxW: 340, lh: 14.5 })
  // Bijvoet 对
  const bx = 551, by = 640
  b.rect(420, 520, 262, 250, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(551, 540, 'Bijvoet 对与绝对构型', { size: 11, weight: 700, fill: C.ink })
  b.line(bx - 85, by, bx + 85, by, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.line(bx, by - 80, bx, by + 70, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.arrow(bx, by, bx + 78, by - 52, { stroke: C.acc, sw: 2.6, marker: 'acc' })
  b.arrow(bx, by, bx + 66, by - 60, { stroke: C.bad, sw: 2.6, dash: '6 4', marker: 'bad' })
  b.ctext(bx + 56, by - 68, '|F_{+}|', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(bx - 44, by - 80, '|F_{−}|', { size: 10.5, weight: 700, fill: C.badD })
  b.ctext(bx + 10, by + 24, '差异约 1%', { size: 10, weight: 700, fill: C.warnD })
  b.wtext(430, 782, 'Friedel 对破裂：结构因子与其复共轭不再相等，差异同时编码重原子位置与绝对构型——结构镜像翻转，Bijvoet 差异随之反号，一测便知手性。反常路线不需第二颗晶体，同晶性问题天然消失。', { size: 10, fill: C.sub, maxW: 250, lh: 14.5 })
  b.tag(555, 866, 'f = f_{0} + f′ + if″', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 8 })

  // ============ 四、SeMet 与试剂库 ============
  b.panel(710, 482, 660, 400, { title: '四、SeMet 路线与浸泡试剂库：实务清单' })
  b.table(730, 528, 620, {
    headers: ['试剂', '重原子', '常见靶基团', '特点'],
    colW: [186, 66, 130, 238],
    rowH: 34,
    fontSize: 10,
    rows: [
      ['K_{2}PtCl_{4} 四氯铂酸钾', 'Pt', 'His、Met、Cys', '经典首选，数小时至数天'],
      ['HgCl_{2} 氯化汞', 'Hg', 'Cys、His', '反应快而猛，易失同晶'],
      ['KAu(CN)_{2} 二氰合金酸钾', 'Au', 'Cys、His', '温和，同晶性常好'],
      ['PCMBA 对氯汞苯甲酸', 'Hg', 'Cys（共价）', '定点修饰，可预测性最高'],
      ['碘乙酰胺汞等衍生物', 'Hg、I', 'Cys', '共价标记补充选项'],
    ],
  })
  // SeMet 要点
  b.tag(770, 764, 'B834 菌株 + SeMet 约 50 mg/L', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 8 })
  b.tag(1030, 764, '掺入率九成以上', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 8 })
  b.wtext(730, 796, 'Met 在蛋白中频率约 2%：30 kDa（约 270 残基）通常有 4–8 个硒位点，信号网足够密；Cowie 与 Cohen 1957 年即证明细菌能把 SeMet 整合进蛋白质。', { size: 10, fill: C.sub, maxW: 620, lh: 14.5 })
  b.wtext(730, 838, '硫-SAD 极限路线：硫 f″ 仅约 0.56 e^{−}、Bijvoet 差异约 1%，须十倍级反常冗余、Bijvoet 对分开缩放；把波长拉长到约 2 Å 可把 f″ 抬向 1 e^{−}（Dauter 等 1999 年起示范）。实务次序：有 SeMet 就不上 S-SAD，两者皆无再浸泡重原子。', { size: 10, fill: C.sub, maxW: 620, lh: 14.5 })

  // 底部收束
  b.ctext(700, 946, '同晶置换借「外来的探照灯」、反常散射把「波长」当旋钮——两者合力守住无模型可借时的定相底线', { size: 12, weight: 600, fill: C.mute })
}

export default scene({
  title: '实验相位法：同晶置换与反常散射',
  subtitle: '同晶置换要求晶胞变化小于 1%、差值 Patterson 定位重原子；Harker 相位圆双解由 MIR 或反常差异破解；Se K 边 0.9795 Å（12.658 keV）f″ 峰约 3.8 e^{−}、近七倍于硫；SAD 单波长已成主流',
  draw,
})
