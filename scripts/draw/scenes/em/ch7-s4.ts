// em ch7-s4 生物样品的分辨率极限（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Henderson 剂量账本 ============
  b.panel(30, 132, 660, 420, { title: '一、Henderson 剂量账本与频率分层曝光' })
  b.tag(190, 188, '液氮温度约 20 e^{-}/Å^{2}（Henderson 1995）', { fill: C.badL, stroke: C.bad, size: 11, weight: 700, tfill: C.badD, pad: 10 })
  b.tag(470, 188, '实践预算 40–60 e^{-}/Å^{2}', { fill: C.warnL, stroke: C.warn, size: 11, weight: 700, tfill: C.warnD, pad: 10 })
  b.tag(210, 224, '每 e^{-}/Å^{2} 使 B 因子增加约 1–2 Å^{2}', { fill: C.rnaL, stroke: C.rna, size: 11, weight: 700, tfill: C.rnaD, pad: 10 })
  b.tag(480, 224, '剂量预算不容商量', { fill: C.panelB, stroke: C.sub, size: 11, tfill: C.sub, pad: 10 })
  const ax = 80, ay = 470, aw = 380, ah = 180
  b.axis(ax, ay, aw, ah, {
    grid: false,
    xticks: [[0, '0'], [1, '']],
    yticks: [[0, '0'], [1, '临界曝光']],
    xlabel: '空间频率 g（示意）',
    title: '信号衰减一半的临界曝光随频率急剧缩短',
  })
  b.arrow(ax + aw - 6, ay, ax + aw + 8, ay, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  const crit: [number, number][] = []
  for (let i = 0; i <= 80; i++) {
    const t = i / 80
    crit.push([t, Math.pow(1 - t * 0.92, 2.6)])
  }
  b.curve(ax, ay, aw, ah, crit, { stroke: C.acc, sw: 2.6 })
  b.ctext(270, 312, '低频容得下高剂量、高频只耐几度辐照', { size: 10.5, fill: C.accD })
  b.wtext(480, 300, 'Grant 与 Grigorieff 2015 年以轮状病毒 VP6 的 2.6 Å 重构实测「最优曝光」的频率依赖：低频的最优剂量高于高频——同一张照片里不同频率各有性价比最高的剂量，剂量加权据此逐帧赋权。', { size: 10.5, fill: C.sub, maxW: 180, lh: 15 })
  b.tag(500, 470, '电影帧按累积剂量逐帧加权', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })

  // ============ 二、冰厚：WPOA 的失效线 ============
  b.panel(710, 132, 660, 420, { title: '二、样品厚度：WPOA 的失效线' })
  const tx = 740, ty = 300, tw = 590
  b.line(tx, ty, tx + tw, ty, { stroke: C.sub, sw: 2.6, marker: 'ink' })
  b.ctext(tx + tw / 2, 192, '冰厚（nm）', { size: 11, weight: 700, fill: C.sub })
  const marks: [number, string, string][] = [
    [30, '30', C.ok], [100, '100', C.ok], [200, '200', C.warn], [400, '400', C.bad],
  ]
  marks.forEach(([v, s]) => {
    const x = tx + ((v - 0) / 420) * tw
    b.line(x, ty - 7, x, ty + 7, { stroke: C.sub, sw: 2 })
    b.ctext(x, ty + 24, s, { size: 11, fill: C.sub })
  })
  // 常规冰厚带 30–100
  b.rect(tx + (30 / 420) * tw, ty - 92, ((100 - 30) / 420) * tw, 92, { fill: C.okL, fillOp: 0.8, stroke: C.ok, sw: 1.4, rx: 4 })
  b.ctext(tx + ((30 + 100) / 2 / 420) * tw + 8, ty - 76, '常规单颗粒冰厚 30–100 nm（安全区）', { size: 10, weight: 700, fill: C.okD })
  // 失效线 100–200
  b.rect(tx + (100 / 420) * tw, ty - 92, ((200 - 100) / 420) * tw, 92, { fill: C.warnL, fillOp: 0.7, stroke: C.warn, sw: 1.4, rx: 4 })
  b.ctext(tx + (150 / 420) * tw, ty - 56, 'WPOA 失效线', { size: 10, weight: 700, fill: C.warnD })
  b.ctext(tx + (150 / 420) * tw, ty - 40, '100–200 nm', { size: 9.5, fill: C.warnD })
  b.ctext(tx + (300 / 420) * tw, ty - 74, '多重散射显著、非弹性背景抬升', { size: 9.5, fill: C.badD })
  b.wtext(730, 360, '弱相位物体近似要求相位偏移远小于一弧度，相位随厚度线性积累；散射平均自由程的底数：100–300 kV 电子在生物物质中弹性与非弹性平均自由程分别约 100–300 nm 与 50–150 nm。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(890, 428, '300 kV 穿 100 nm 冰：非弹性事件不足一次', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(1190, 428, '穿 400 nm：达两三次，信噪与解释同损', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 9 })
  b.tag(890, 466, '厚度是第 6 章制样的第一变量', { fill: C.panelB, stroke: C.sub, size: 10.5, tfill: C.sub, pad: 9 })
  b.tag(1190, 466, '滤冰与 blot 优化在此收账', { fill: C.panelB, stroke: C.sub, size: 10.5, tfill: C.sub, pad: 9 })

  // ============ 三、束致运动与构象异质性 ============
  b.panel(30, 572, 660, 398, { title: '三、束致运动与构象异质性' })
  const mx = 70, my = 812, mw = 300, mh = 170
  b.axis(mx, my, mw, mh, {
    grid: false,
    xticks: [[0, '0'], [1, '']],
    yticks: [[0, '0'], [0.9, '幅度']],
    xlabel: '曝光时间',
    title: '束致运动：初期最大、随后衰减（Brilot 2012）',
  })
  b.arrow(mx + mw - 6, my, mx + mw + 8, my, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  const mo: [number, number][] = []
  for (let i = 0; i <= 60; i++) {
    const t = i / 60
    mo.push([t, 0.92 * Math.exp(-t * 4.2) + 0.06])
  }
  b.curve(mx, my, mw, mh, mo, { stroke: C.enz, sw: 2.6 })
  b.wtext(400, 640, '辐照升温、充电与网格形变让颗粒在曝光期内走出数埃至数十埃——「先拍的帧最糊」的反直觉现象由此而来。全局加局部轨迹拟合追回大部分，残余埃级模糊继续压制高频，贝叶斯抛光逐颗粒再救一程。', { size: 10.5, fill: C.sub, maxW: 270, lh: 15 })
  b.text(50, 860, '构象与化学计量异质性：平均的分辨率天花板', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(210, 892, '离散态：三维分类拆解', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 9 })
  b.tag(500, 892, '连续柔性：多刚体或连续构象分析', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 9 })
  b.ctext(360, 938, '「同一结构」的假设自带误差——不均一的颗粒硬平均，只会把共同部分留下、把变化部分抹糊', { size: 10, fill: C.mute })

  // ============ 四、检测器、采样与现实峰值 ============
  b.panel(710, 572, 660, 398, { title: '四、检测器、采样与现实的峰值' })
  b.bars(740, 708, 250, 90, [0.09, 0.3], {
    labels: ['CCD（闪烁体+光纤）', '直接探测计数'],
    vlabels: ['<0.1', '约 0.3'],
    fill: C.dnaL, stroke: C.dna, max: 0.4,
  })
  b.ctext(865, 612, '奈奎斯特处 DQE（无单位）', { size: 11, weight: 700, fill: C.sub })
  b.wtext(1020, 624, '直接电子探测相机把 DQE 从 CCD 时代的不足 0.1 提升到约 0.3，并支持逐事件计数与电影输出；计数剂量率上限约 5–10 e^{-}/像素/秒。', { size: 10.5, fill: C.sub, maxW: 330, lh: 15 })
  b.tag(1040, 716, '采样上限 = 2 倍像素尺寸', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(1040, 748, '3 Å 目标取 0.8–1.1 Å/像素', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(1040, 780, '过采摊薄计数、纯属浪费', { fill: C.panelB, stroke: C.sub, size: 10.5, tfill: C.sub, pad: 9 })
  b.text(730, 828, '现实的峰值（第 12 章分辨率革命的起点）：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(850, 860, 'apoferritin 约 1.2 Å（2020 年前后，Yip 与 Kato 等团队）', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(1160, 860, '膜蛋白 1.7–2.5 Å 常态', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(850, 892, '小于 100 kDa 的蛋白普遍困难', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 9 })
  b.tag(1160, 892, '极限清单逐项记账后收束', { fill: C.panelB, stroke: C.sub, size: 10.5, tfill: C.sub, pad: 9 })
}

export default scene({
  title: '生物样品的分辨率极限：一份逐项记账的清单',
  subtitle: 'Henderson 极限约 20 e⁻/Å²（实践 40–60），每 e⁻/Å² 加 B 约 1–2 Å²；冰厚 30–100 nm 安全、超 100–200 nm WPOA 失效；DQE 约 0.3、3 Å 取 0.8–1.1 Å/像素；apoferritin 1.2 Å 为现实峰值',
  draw,
})
