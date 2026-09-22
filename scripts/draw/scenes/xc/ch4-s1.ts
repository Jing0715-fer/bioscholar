// xc ch4-s1 X 射线源的产生机制（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、X 射线管与发射谱 ============
  b.panel(30, 132, 660, 340, { title: '一、X 射线管：特征谱叠加于韧致辐射连续谱' })
  // 管体
  b.rect(58, 178, 275, 195, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 12 })
  b.ctext(196, 170, 'X 射线管（真空）', { size: 10.5, weight: 700, fill: C.sub })
  b.path('M 75,218 l 6,-7 l 6,7 l 6,-7 l 6,7 l 6,-7 l 6,7', { fill: 'none', stroke: C.warn, sw: 2 })
  b.wtext(66, 238, '热阴极灯丝（约 2000 K）', { size: 9, fill: C.warnD, maxW: 96, lh: 11 })
  b.ctext(188, 202, '加速 40–60 kV', { size: 9.5, weight: 700, fill: C.bad })
  b.arrow(122, 210, 245, 262, { stroke: C.pro, sw: 1.6, dash: '5 4', marker: 'pro' })
  b.arrow(122, 219, 252, 273, { stroke: C.pro, sw: 1.6, dash: '5 4', marker: 'pro' })
  b.arrow(122, 228, 245, 284, { stroke: C.pro, sw: 1.6, dash: '5 4', marker: 'pro' })
  b.text(150, 262, '电子束', { size: 9, weight: 700, fill: C.proD })
  b.line(240, 290, 292, 262, { stroke: C.enz, sw: 5 })
  b.ctext(302, 260, 'Cu 靶', { size: 9.5, weight: 700, fill: C.enzD })
  b.path('M 246,300 q 6,-6 12,0 q 6,6 12,0 q 6,-6 12,0', { fill: 'none', stroke: C.acc, sw: 1.5 })
  b.ctext(270, 316, '水冷', { size: 8.5, fill: C.accD })
  b.wtext(66, 320, '电子在靶原子核附近骤然减速：韧致辐射连续谱；击出 K 层电子、外层回填空位：叠加锐利特征谱', { size: 9, fill: C.mute, maxW: 168, lh: 12 })
  b.arrow(268, 282, 300, 366, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.arrow(276, 288, 322, 370, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ctext(316, 390, 'X 射线（经铍窗）', { size: 9, weight: 700, fill: C.enzD })
  // 发射谱
  const ax = 365, ay = 370, aw = 285, ah = 170
  b.axis(ax, ay, aw, ah, {
    xlabel: '波长 λ（Å）', title: 'Cu 靶发射谱与 Ni 滤波（示意）',
    xticks: [[0.056, '0.5'], [0.333, '1.0'], [0.611, '1.5'], [0.889, '2.0']],
    yticks: [[0.5, '强'], [0.05, '弱']],
  })
  const fx = (f: number) => ax + f * aw
  const fy = (v: number) => ay - v * ah
  b.curve(ax, ay, aw, ah, [[0.03, 0.02], [0.08, 0.3], [0.16, 0.44], [0.28, 0.46], [0.45, 0.34], [0.7, 0.2], [1.0, 0.07]], { smooth: true, stroke: C.mute, sw: 2.2 })
  b.ctext(fx(0.2), fy(0.56), '韧致辐射连续谱', { size: 9, weight: 700, fill: C.mute })
  b.polygon([[fx(0.53), ay], [fx(0.551), fy(0.22)], [fx(0.575), ay]], { fill: C.accL, stroke: C.acc, sw: 1.4 })
  b.polygon([[fx(0.6), ay], [fx(0.634), fy(0.92)], [fx(0.67), ay]], { fill: C.enzL, stroke: C.enz, sw: 1.4 })
  b.etext(fx(0.52), fy(0.09), 'Kβ 1.3922 Å', { size: 9, weight: 700, fill: C.accD })
  b.ctext(fx(0.634) + 42, fy(0.95), 'Kα 1.5418 Å', { size: 9.5, weight: 700, fill: C.enzD })
  b.line(fx(0.604), ay, fx(0.604), fy(0.85), { stroke: C.bad, sw: 1.6, dash: '5 4' })
  b.etext(fx(0.596), fy(0.72), 'Ni K 边 1.488 Å', { size: 9, weight: 700, fill: C.bad })
  b.wtext(60, 428, 'Cu Kα 由 L 层至 K 层跃迁产生：Kα1 1.5406 Å 与 Kα2 1.5443 Å 双线按强度 2:1 加权记作 1.5418 Å；Kβ 强度约为 Kα 的五分之一，双线在高衍射角劈裂斑点，故高分辨率家用机常再配石墨单色器。最简便的单色化是镍滤波片：Ni 的 K 吸收边 1.488 Å 恰卡在 Kβ 与 Kα 之间，选择性吸收前者而基本放过后者；钼靶 Kα 为 0.7107 Å，多见于小分子晶体学。', { size: 10, fill: C.sub, maxW: 616, lh: 13.5 })

  // ============ 二、实验室源的进化 ============
  b.panel(710, 132, 660, 340, { title: '二、实验室源的进化：功率与亮度的两条路线' })
  const rows: Array<[string, string, string, string]> = [
    ['密封管', '靶面静止、水冷散热；热负荷是硬约束——过热熔蚀靶面，升华物还会污染铍窗。', '功率 1–3 kW', C.sub],
    ['旋转阳极', '圆盘靶高速旋转（每分钟数千转），热斑不断移位、散热能力大增；代价是旋转真空密封的维护与轴承寿命。', '5–18 kW，亮度数倍', C.warn],
    ['微焦源', '电子束聚焦成 10–50 μm 微斑，总功率仅数十瓦而单位面积亮度高两到三个数量级；多层膜聚焦光学（Montel 双反射镜）把发散光聚到样品，微光斑与微晶体尺寸匹配。', '亮度 +2–3 个数量级', C.acc],
    ['液态金属靶', '液态镓合金射流以流动阳极带走热量，可在微焦几何下满功率长期运行；Ga Kα 约 1.34 Å，亮度再上一个台阶。', 'Ga Kα 约 1.34 Å', C.dna],
  ]
  rows.forEach(([name, txt, pw, col], i) => {
    const ry = 178 + i * 66
    b.rect(730, ry, 616, 60, { fill: C.panelB, stroke: col, sw: 1.2, rx: 7 })
    b.text(810, ry + 20, name, { size: 11.5, weight: 700, fill: col })
    b.wtext(810, ry + 36, txt, { size: 9, fill: C.sub, maxW: 360, lh: 11 })
    b.tag(1248, ry + 30, pw, { fill: '#ffffff', stroke: col, size: 9.5, weight: 700, tfill: col, pad: 8 })
    // 小图标
    const ix = 770, iy = ry + 30
    if (i === 0) {
      b.rect(ix - 20, iy - 6, 40, 11, { fill: C.mute, stroke: C.sub, sw: 1.2 })
      b.path(`M ${ix - 16},${iy + 12} q 5,-5 10,0 q 5,5 10,0 q 5,-5 10,0 q 5,5 10,0`, { fill: 'none', stroke: C.acc, sw: 1.4 })
    } else if (i === 1) {
      b.circle(ix, iy, 15, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
      for (let k = 0; k < 6; k++) {
        const a = (k / 6) * Math.PI * 2
        b.line(ix + 7 * Math.cos(a), iy + 7 * Math.sin(a), ix + 13 * Math.cos(a), iy + 13 * Math.sin(a), { stroke: C.warn, sw: 1.4 })
      }
      b.path(`M ${ix + 19},${iy - 8} a 10,10 0 0 1 4,12`, { fill: 'none', stroke: C.warnD, sw: 1.6, marker: 'mute' })
    } else if (i === 2) {
      b.line(ix - 24, iy - 14, ix - 2, iy, { stroke: C.acc, sw: 1.6 })
      b.line(ix - 24, iy + 14, ix - 2, iy, { stroke: C.acc, sw: 1.6 })
      b.circle(ix, iy, 3, { fill: C.bad })
      b.path(`M ${ix + 6},${iy} q 7,6 14,6 q 7,0 14,-6`, { fill: 'none', stroke: C.acc, sw: 1.6, marker: 'acc' })
    } else {
      b.path(`M ${ix},${iy - 18} q 6,6 0,12 q -6,6 0,12`, { fill: 'none', stroke: C.dna, sw: 2, marker: 'dna' })
      b.ellipse(ix, iy + 16, 5, 3, { fill: C.dnaL, stroke: C.dna, sw: 1.2 })
    }
  })
  b.wtext(730, 452, '热管理是实验室源的主线：静止靶吃不住功率，就转动它（旋转阳极）、缩小它（微焦源）、或者让它流动（液态金属靶）。', { size: 10, fill: C.mute, maxW: 616, lh: 13.5 })

  // ============ 三、同步辐射与插入件 ============
  b.panel(30, 492, 660, 480, { title: '三、同步辐射：相对论电子的光与插入件' })
  // 储存环
  b.ellipse(185, 615, 110, 58, { fill: C.accL, fillOp: 0.25, stroke: C.acc, sw: 2.4 })
  b.ctext(185, 545, '储存环：GeV 级相对论电子（SSRF 3.5 GeV、HEPS 6 GeV）', { size: 9.5, weight: 700, fill: C.accD })
  b.arrow(160, 559, 212, 559, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.circle(186, 559, 4.5, { fill: C.pro })
  b.text(224, 562, 'e^{-}', { size: 8.5, weight: 700, fill: C.proD })
  b.rect(100, 602, 100, 26, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 5 })
  b.ctext(150, 618, '插入件（直线节）', { size: 9, weight: 700, fill: C.proD })
  b.rect(288, 600, 18, 30, { fill: C.warnL, stroke: C.warn, sw: 1.6 })
  b.ctext(297, 588, '弯转磁铁', { size: 9, weight: 700, fill: C.warnD })
  b.arrow(306, 615, 352, 601, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.arrow(306, 615, 357, 615, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.arrow(306, 615, 352, 629, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.ctext(335, 650, '切向约 1/γ 锥角', { size: 9, weight: 700, fill: C.bad })
  b.ctext(335, 663, '（毫弧度量级）', { size: 8.5, fill: C.bad })
  b.wtext(70, 690, '弯转磁铁辐射为连续谱，自红外一直铺到硬 X 射线；现代储存环以 top-up 注入维持流强，束流位置反馈把光斑钉在微米级。', { size: 9.5, fill: C.sub, maxW: 226, lh: 12.5 })
  // 扭摆器与波荡器
  b.text(400, 552, '扭摆器（wiggler）：强磁场', { size: 10.5, weight: 700, fill: C.warnD })
  let d = 'M 400,578'
  for (let i = 0; i < 8; i++) d += ` q 16,${i % 2 === 0 ? -22 : 22} 32,0`
  b.path(d, { fill: 'none', stroke: C.warn, sw: 2 })
  b.wtext(400, 622, '大幅蛇形扭摆，各磁极辐射简单叠加——更亮更宽的连续谱。', { size: 9.5, fill: C.sub, maxW: 264, lh: 12 })
  b.text(400, 652, '波荡器（undulator）：弱磁场', { size: 10.5, weight: 700, fill: C.dnaD })
  let d2 = 'M 400,678'
  for (let i = 0; i < 8; i++) d2 += ` q 16,${i % 2 === 0 ? -6 : 6} 32,0`
  b.path(d2, { fill: 'none', stroke: C.dna, sw: 2 })
  b.wtext(400, 700, '偏转角约 1/γ 的周期运动，相邻磁极辐射相干干涉——准单色谐波，改磁隙即可连续调谐能量。', { size: 9.5, fill: C.sub, maxW: 264, lh: 12 })
  b.wtext(60, 742, '波荡器第 n 次谐波相对带宽约 1/(nN)：百十个周期的一级谐波带宽已在百分之一量级，再经单色器一压，落到样品上的 ΔE/E 可达 10^{-4}。能量可调是反常散射实验（MAD/SAD，第 8 章）的硬件前提——只有同步辐射能把光子能量精确设到靶原子吸收边附近。', { size: 10, fill: C.sub, maxW: 616, lh: 13.5 })
  // 束线光学链
  b.text(60, 786, '束线光学链：从光源到样品', { size: 11, weight: 700, fill: C.ink })
  const chain: Array<[number, number, string, string]> = [
    [60, 130, '单色器', 'Si(111) 双晶 ΔE/E 约 10^{-4}'],
    [214, 120, '聚焦镜', '掠入射 20–100 μm 光斑'],
    [358, 90, '狭缝', '裁掉边缘散射'],
    [466, 100, '衰减器', '铝箔两三倍一档'],
    [580, 76, '样品', '晶体'],
  ]
  chain.forEach(([x, w, t, s], i) => {
    b.rect(x, 798, w, 46, { fill: i === 4 ? C.proL : C.accL, stroke: i === 4 ? C.pro : C.acc, sw: 1.5, rx: 7 })
    b.ctext(x + w / 2, 816, t, { size: 10.5, weight: 700, fill: i === 4 ? C.proD : C.accD })
    b.wtext(x + w / 2, 832, s, { size: 8.5, fill: C.mute, maxW: w - 10, lh: 10, anchor: 'middle' })
    if (i < 4) b.arrow(x + w + 2, 821, chain[i + 1][0] - 3, 821, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  })
  b.wtext(60, 874, '第四代扩散光源（DLSR）以低发射度布局把电子束团压向光的衍射极限：瑞典 MAX IV 于 2016 年率先以 7 弯铁消色差布局实现约 200 pm·rad 的水平发射度，相干光子份额大增，利好微小晶体的串行收集；国内谱系——合肥 NSRL 最早（紫外与软 X 射线）、上海 SSRF 三代（3.5 GeV）、北京 HEPS（6 GeV）把我国带入第四代序列。', { size: 10, fill: C.sub, maxW: 616, lh: 13.5 })
  b.wtext(60, 938, '家用源的「光学链」浓缩在测角仪头上：弯聚焦石墨单色器或多层膜镜、点焦与准直管一气呵成；聚焦镜常镀铑或铂，兼压高阶反射。', { size: 10, fill: C.mute, maxW: 616, lh: 13.5 })

  // ============ 四、亮度阶梯与波长选择 ============
  b.panel(710, 492, 660, 480, { title: '四、亮度阶梯与波长选择策略' })
  b.tag(1038, 536, '亮度 brilliance：ph/s/mm^{2}/mrad^{2}/0.1%bw', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 12 })
  b.stairs(730, 560, 616, 140, [
    '密封管：10^{11}–10^{12}',
    '微焦源与液态金属靶：再高 2–3 个数量级',
    '三代波荡器束线：约 10^{21}',
  ], { fill: C.accL, stroke: C.acc, size: 10.5 })
  b.wtext(730, 718, '亮度不同于只计光子总数的通量——微小样品要的正是亮度。家用旋转阳极收一帧典型需 30–60 s 曝光、中等分辨率反射 I/σ 约 5–15；同步辐射微聚焦束 0.1–1 s 即可把同类反射推到 I/σ 30 以上。三代同步辐射较最好的实验室源高 10^{8}–10^{10} 倍：单颗晶体对入射光子的衍射利用率仅 10^{-8}–10^{-10}，弱信号必须配强源。', { size: 10, fill: C.sub, maxW: 616, lh: 13.5 })
  b.wtext(730, 758, '1.5418 Å 下空气每厘米衰减约百分之一，长光路宜用氦气或真空管道；约 0.5 Å 短波长：吸收低、损伤角度依赖弱、衍射角变小令斑点易分开。', { size: 10, fill: C.mute, maxW: 616, lh: 13.5 })
  b.text(730, 786, '常用波长策略速查（波长是实验设计里最廉价的旋钮）', { size: 11.5, weight: 700, fill: C.ink })
  b.table(730, 798, 616, {
    headers: ['波长', '典型场景', '主要优点', '主要代价'],
    colW: [110, 160, 180, 166],
    rowH: 28,
    fontSize: 10,
    rows: [
      ['1.5418 Å（Cu Kα）', '家用密封管与旋转阳极', '通量高、成本低', '吸收与空气衰减强'],
      ['0.9–1.0 Å', '同步辐射常规收集', '吸收、几何与效率折中', '依赖机时'],
      ['约 0.5 Å', '小晶体、长晶胞', '吸收低、斑点易分开', '通量与探测效率降'],
      ['0.9795 Å 附近', 'Se 反常定相', 'f″ 峰值、反常信号最强', '能量须精确标定'],
    ],
  })
}

export default scene({
  title: 'X 射线源的产生机制：从实验室 X 射线管到第四代同步辐射',
  subtitle: 'Cu Kα 1.5418 Å、Ni 滤波片 K 边 1.488 Å；密封管 1–3 kW、旋转阳极 5–18 kW、微焦斑 10–50 μm；三代波荡器亮度约 10^{21}、较实验室源高 10^{8}–10^{10} 倍；常规波长 0.9–1.0 Å',
  draw,
})
