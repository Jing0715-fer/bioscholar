// sb ch1-s2 三大结构解析方法总览（Task 6-sb）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、六维对比 ============
  b.panel(30, 132, 1340, 340, { title: '一、六维对比：样品、分子量、分辨率、动态、周期与门槛' })
  b.table(50, 172, 1300, {
    headers: ['维度', 'X 射线晶体学', '冷冻电镜（单颗粒）', '溶液 NMR'],
    colW: [140, 392, 384, 384],
    rowH: 42,
    fontSize: 12.5,
    rows: [
      ['样品要求', '有序晶体：10^{13}–10^{15} 个分子同相位散射', '玻璃化薄冰约 100 nm，无需晶体', '^{15}N/^{13}C 双标记溶液，0.1–1 mM'],
      ['适用分子量', '数 kDa 至数 MDa 无上限（50S 约 1.6 MDa，2000 年）', '约 100 kDa 起，大于 300 kDa 更可靠', '常规小于 30–50 kDa；TROSY 加氘代约 100 kDa'],
      ['常规分辨率', '约 1.0–2.5 Å；纪录 0.48 Å（crambin，46 残基）', '约 2–3 Å；最佳 1.22 Å（铁蛋白，2020）', '局部约束约 1–2 Å；约 15–20 构象的系综'],
      ['动态信息', '晶格静态快照，可辅时间分辨串晶学', '构象异质性可分类、分别重构', '皮秒至秒动力学直接可测（三法独有）'],
      ['单个结构周期', '数天至数月（含结晶瓶颈）', '数天至数周', '数周至数月'],
      ['门槛与成本', '同步辐射机时；实验室 Cu Kα 1.5418 Å', '千万元级电镜与设施', '高场谱仪与同位素标记成本'],
    ],
  })

  // ============ 二、分子量适用区间 ============
  b.panel(30, 492, 660, 260, { title: '二、分子量适用区间（对数轴）' })
  const ax = 110, aw = 500, ay = 672
  const lg = (v: number) => ax + ((Math.log10(v) - 1) / 6) * aw
  // 参考标记
  b.line(lg(300), 548, lg(300), 655, { stroke: C.mute, sw: 1.2, dash: '4 4' })
  b.line(lg(1.6e6), 548, lg(1.6e6), 655, { stroke: C.mute, sw: 1.2, dash: '4 4' })
  b.ctext(lg(300), 662, '300 kDa', { size: 9.5, fill: C.mute })
  b.ctext(lg(1.6e6), 662, '50S 约 1.6 MDa', { size: 9.5, fill: C.mute })
  // X 射线
  b.text(110, 540, 'X 射线晶体学：数 kDa 至数 MDa，无上限', { size: 11, weight: 700, fill: C.accD })
  b.rect(lg(10), 548, lg(1e7) - lg(10) - 26, 20, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 4 })
  b.arrow(lg(1e7) - 20, 558, lg(1e7) + 4, 558, { stroke: C.acc, sw: 2, marker: 'acc' })
  // 冷冻电镜
  b.text(lg(100), 580, '冷冻电镜：约 100 kDa 起，大于 300 kDa 更可靠', { size: 11, weight: 700, fill: C.enzD })
  b.rect(lg(100), 588, lg(1e7) - lg(100), 20, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 4 })
  // NMR
  b.text(110, 620, '溶液 NMR：常规小于 30–50 kDa；TROSY＋氘代至约 100 kDa', { size: 11, weight: 700, fill: C.proD })
  b.rect(lg(10), 628, lg(50) - lg(10), 20, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 4 })
  b.rect(lg(50), 628, lg(100) - lg(50), 20, { fill: 'none', stroke: C.pro, sw: 1.6, rx: 4, dash: '4 3' })
  // 轴
  b.line(ax, ay, ax + aw + 14, ay, { stroke: C.sub, sw: 2, marker: 'ink' })
  for (let k = 1; k <= 7; k++) {
    b.line(lg(10 ** k), ay, lg(10 ** k), ay + 6, { stroke: C.sub, sw: 1.6 })
    b.ctext(lg(10 ** k), ay + 22, `10^{${k}}`, { size: 10.5, fill: C.mute })
  }
  b.ctext(367, 716, '分子量（kDa，对数刻度）', { size: 11.5, weight: 600, fill: C.sub })

  // ============ 三、分辨率标尺 ============
  b.panel(710, 492, 660, 260, { title: '三、分辨率标尺：可分辨细节的最小尺度（左端更优）' })
  const rx = 790, rw = 460, ry = 648
  const rp = (d: number) => rx + ((d - 0.4) / 6.6) * rw
  b.etext(780, 559, 'X 射线常规', { size: 11, weight: 700, fill: C.accD })
  b.rect(rp(1), 548, rp(2.5) - rp(1), 18, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 4 })
  b.etext(780, 589, '冷冻电镜常规', { size: 11, weight: 700, fill: C.enzD })
  b.rect(rp(2), 578, rp(3) - rp(2), 18, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 4 })
  b.etext(780, 619, 'NMR 局部约束', { size: 11, weight: 700, fill: C.proD })
  b.rect(rp(1), 608, rp(2) - rp(1), 18, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 4 })
  const marks: [number, string][] = [[0.48, '0.48'], [1.22, '1.22'], [3, '3'], [6, '6']]
  for (const [d, lab] of marks) {
    b.line(rp(d), 540, rp(d), ry, { stroke: C.sub, sw: 1.2, dash: '4 4' })
    b.ctext(rp(d), 534, lab, { size: 9.5, fill: C.sub })
  }
  b.line(rx, ry, rx + rw + 12, ry, { stroke: C.sub, sw: 2, marker: 'ink' })
  for (const d of [0.5, 1, 2, 3, 4, 5, 6, 7]) {
    b.line(rp(d), ry, rp(d), ry + 6, { stroke: C.sub, sw: 1.6 })
    b.ctext(rp(d), ry + 22, `${d}`, { size: 10.5, fill: C.mute })
  }
  b.ctext(rx + rw / 2, ry + 44, '分辨率 d（Å）', { size: 11.5, weight: 600, fill: C.sub })
  b.wtext(726, 700, '0.48 Å＝crambin 纪录；1.22 Å＝铁蛋白冷冻电镜最佳（2020）；1.2 Å 级电子密度可见氢原子、交替构象与半占据水。', { maxW: 305, lh: 14, size: 10.5, fill: C.sub })
  b.wtext(1052, 700, '3 Å：主链清晰、侧链细节受限；6 Å：仅辨螺旋轮廓；冷冻电镜以 FSC＝0.143 为金标准；3 Å 结构坐标误差约 0.3 Å 量级。', { maxW: 300, lh: 14, size: 10.5, fill: C.sub })

  // ============ 四、方法选择决策与互补实践 ============
  b.panel(30, 770, 1340, 200, { title: '四、方法选择决策与当代互补实践' })
  b.tag(155, 810, '小于 30 kDa → X 射线或 NMR', { fill: C.accL, stroke: C.acc, size: 11, tfill: C.accD, pad: 9 })
  b.tag(392, 810, '大于 300 kDa → 冷冻电镜优先', { fill: C.enzL, stroke: C.enz, size: 11, tfill: C.enzD, pad: 9 })
  b.tag(618, 810, '要皮秒至秒动力学 → NMR', { fill: C.proL, stroke: C.pro, size: 11, tfill: C.proD, pad: 9 })
  b.tag(872, 810, '追求 1.2 Å 级细节 → 高分辨 X 射线', { fill: C.dnaL, stroke: C.dna, size: 11, tfill: C.dnaD, pad: 9 })
  b.tag(1145, 810, '难结晶／膜蛋白 → 冷冻电镜', { fill: C.rnaL, stroke: C.rna, size: 11, tfill: C.rnaD, pad: 9 })
  b.wtext(50, 848, 'PDB 存量（2024 年超 22 万条）约八成五来自 X 射线晶体学，溶液 NMR 约占不足一成，冷冻电镜条目增速居首；2013 年直接电子探测相机配合运动校正掀起「分辨率革命」——当年 TRPV1 通道即以 3.4 Å 刷新膜蛋白纪录。', { maxW: 1300, lh: 16, size: 11, fill: C.sub })
  b.wtext(50, 884, '三法互补分工：小而稳定、能结晶的蛋白交给晶体学追求极限分辨率；大而难结晶、构象多样的复合物交给冷冻电镜；以动力学为核心问题的中小蛋白交给 NMR——「电镜看整体、晶体看口袋、NMR 看动态」。', { maxW: 1300, lh: 16, size: 11, fill: C.sub })
  b.wtext(50, 920, '核糖体为典型接力：50S 与 30S 亚基晶体结构（2000 年前后）给出原子细节，70S 功能态系列由冷冻电镜接力补全；GPCR 家族中晶体结构（2011 年 β2 受体-抗体片段复合物）、冷冻电镜复合物与 NMR 构象动力学相互衔接。', { maxW: 1300, lh: 16, size: 11, fill: C.sub })
}

export default scene({
  title: '三大结构解析方法总览：X 射线晶体学 · 冷冻电镜 · 溶液 NMR',
  subtitle: '晶体学以 10^{13}–10^{15} 个分子的有序晶格放大信号、常规约 1.0–2.5 Å（纪录 0.48 Å）；冷冻电镜约 100 kDa 起、2–3 Å 常规（最佳 1.22 Å）；NMR 常规小于 30–50 kDa、TROSY 加氘代至约 100 kDa，皮秒至秒动力学独有',
  draw,
})
