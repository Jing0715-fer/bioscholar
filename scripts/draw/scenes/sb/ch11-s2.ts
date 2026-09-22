// sb ch11-s2 共振指定与结构约束（Task SB-4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三共振串珠指定 ============
  b.panel(30, 132, 1340, 300, { title: '一、三共振串珠：沿主链认领每枚 HSQC 峰' })
  b.wtext(50, 180, '共振指定把每枚酰胺峰认领到具体残基：三共振实验以 ¹³C-¹⁵N 双标记沿主链传递信息——相邻两枚酰胺峰若共享同一组 Cα/Cβ(i−1)，即为主链邻居，错位比对、逐段推进。', { size: 10.5, fill: C.sub, maxW: 1240, lh: 16 })
  // 相关矩阵：行 = 实验，列 = 核；实心 = 强观测，空心 = 弱观测
  const colNames = ['C′(i−1)', 'Cα(i−1)', 'Cβ(i−1)', 'Cα(i)', 'Cβ(i)', 'HN·N(i)']
  const colX = [165, 255, 345, 435, 525, 615]
  const rows: Array<[string, Array<[number, boolean]>]> = [
    ['HNCO', [[0, true], [5, true]]],
    ['HNCA', [[1, false], [3, true], [5, true]]],
    ['HNCACB', [[1, false], [2, false], [3, true], [4, true], [5, true]]],
    ['CBCA(CO)NH', [[1, true], [2, true], [5, true]]],
  ]
  colNames.forEach((nm, i) => b.ctext(colX[i], 212, nm, { size: 11, weight: 700, fill: C.ink }))
  b.line(92, 224, 660, 224, { stroke: C.line, sw: 1.2 })
  rows.forEach(([name, dots], ri) => {
    const ry = 254 + ri * 42
    b.rect(92, ry - 14, 128, 28, { fill: C.accL, stroke: C.acc, sw: 1.2, rx: 6 })
    b.ctext(156, ry + 4, name, { size: 11.5, weight: 700, fill: C.accD })
    for (const [ci, strong] of dots) {
      if (strong) b.circle(colX[ci], ry, 6, { fill: C.pro })
      else b.circle(colX[ci], ry, 6, { fill: '#ffffff', stroke: C.pro, sw: 1.8 })
    }
  })
  b.circle(108, 414, 5.5, { fill: C.pro })
  b.text(120, 418, '强观测', { size: 10.5, fill: C.sub })
  b.circle(185, 414, 5.5, { fill: '#ffffff', stroke: C.pro, sw: 1.8 })
  b.text(197, 418, '弱观测（i−1 峰弱一档）', { size: 10.5, fill: C.sub })
  // 右侧：氨基酸指纹 + 实务账本
  b.rect(770, 200, 560, 110, { fill: C.proL, stroke: C.pro, sw: 1.4, rx: 8, fillOp: 0.55 })
  b.text(788, 224, '氨基酸指纹：Cα/Cβ 位移校对', { size: 12.5, weight: 700, fill: C.proD })
  b.text(788, 250, 'Ala：Cβ 约 19 ppm，显著偏低', { size: 11, fill: C.sub })
  b.text(788, 271, 'Gly：Cα 低至约 45 ppm（无 Cβ）', { size: 11, fill: C.sub })
  b.text(788, 292, 'Ser 与 Thr：Cβ 高于 60 ppm——像按颜色配珠子，逐段推进、回环校验', { size: 11, fill: C.sub })
  b.rect(770, 324, 560, 92, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(788, 348, '实务账本', { size: 12.5, weight: 700, fill: C.sub })
  b.wtext(788, 370, '百残基蛋白约三四周谱仪时间（600 MHz 计）；指定覆盖率以九成以上为合格线——残缺的地址簿会让 NOE 指认成片失明；化学位移表存入 BMRB，是结构计算的全部地址簿。', { size: 10.5, fill: C.sub, maxW: 530, lh: 15 })

  // ============ 二、NOE 距离约束 ============
  b.panel(30, 452, 660, 250, { title: '二、NOE 距离约束：强度随 r^{−6} 衰减' })
  const px0 = 80, pyB = 665, pyT = 505, pw = 260
  const rx = (r: number) => px0 + ((r - 2) / 5) * pw
  // 检测上限带（5–6 Å）
  b.rect(rx(5), pyT, rx(6) - rx(5), pyB - pyT, { fill: C.badL, fillOp: 0.5 })
  b.ctext(rx(5.5), pyT + 16, '检测上限', { size: 10, weight: 700, fill: C.badD })
  b.ctext(rx(5.5), pyT + 31, '5–6 Å', { size: 10, weight: 700, fill: C.badD })
  // 轴
  b.line(px0, pyB, px0 + pw + 14, pyB, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.line(px0, pyB, px0, pyT, { stroke: C.sub, sw: 2, marker: 'ink' })
  for (let r = 2; r <= 7; r++) {
    b.line(rx(r), pyB, rx(r), pyB - 6, { stroke: C.sub, sw: 1.4 })
    b.ctext(rx(r), pyB + 16, String(r), { size: 9.5, fill: C.mute })
  }
  b.ctext(px0 + pw / 2, pyB + 34, '质子间距离 r（Å）', { size: 10.5, weight: 600, fill: C.sub })
  b.ctext(px0 - 30, (pyT + pyB) / 2, 'NOE 强度（对数）', { size: 10.5, weight: 600, fill: C.sub, rotate: -90 })
  // r^-6 曲线（I = (2.7/r)^6，对数坐标）
  const cy = (L: number) => pyB - ((Math.min(L, 0.5) + 3) / 3.5) * (pyB - pyT)
  let d = ''
  for (let r = 2.2; r <= 7.0001; r += 0.1) {
    const L = Math.log10(Math.pow(2.7 / r, 6))
    d += `${r < 2.25 ? 'M' : 'L'}${rx(r).toFixed(1)},${cy(L).toFixed(1)} `
  }
  b.path(d, { fill: 'none', stroke: C.pro, sw: 2.6 })
  // 强中弱三点
  const marks: Array<[number, string, string, string]> = [
    [2.7, '强', '约 2.7 Å', C.ok],
    [3.3, '中', '约 3.3 Å', C.warn],
    [5.0, '弱', '约 5.0 Å', C.acc],
  ]
  for (const [r, tag, val, c] of marks) {
    const gy = cy(Math.log10(Math.pow(2.7 / r, 6)))
    b.line(rx(r), pyB, rx(r), gy, { stroke: c, sw: 1.4, dash: '4 4' })
    b.circle(rx(r), gy, 5, { fill: c, stroke: '#ffffff', sw: 1.4 })
    b.ctext(rx(r), gy - 14, `${tag} ${val}`, { size: 10, weight: 700, fill: c })
  }
  // 右侧注记
  b.wtext(365, 512, '偶极交叉弛豫把磁化在近邻质子间搬移，NOESY 交叉峰强度随距离六次方衰减——近邻强、远亲弱。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.wtext(365, 566, '积分换算为距离上限：强峰约 2.7 Å、中峰约 3.3 Å、弱峰约 5.0 Å。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.wtext(365, 610, '混合时间 80–150 ms：过长滋生自旋扩散转手假峰——「虚增约束」比缺约束更糟。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.wtext(365, 660, '百残基蛋白典型提取一两千条以上、多则数千条。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })

  // ============ 三、约束的空间分布 ============
  b.panel(710, 452, 660, 250, { title: '三、约束的空间分布：「局部准、全局松」' })
  // 两段螺旋 + 中间环
  b.rect(738, 534, 132, 42, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 12, fillOp: 0.6 })
  b.rect(978, 534, 132, 42, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 12, fillOp: 0.6 })
  b.ctext(804, 528, '螺旋 A', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(1044, 528, '螺旋 B', { size: 10.5, weight: 700, fill: C.proD })
  const resX: number[] = []
  for (let k = 0; k < 13; k++) resX.push(748 + k * 30)
  for (const x of resX) b.circle(x, 555, 6, { fill: C.ink, stroke: '#ffffff', sw: 1.2 })
  // 短程约束弧（|i-j| < 5）
  const shortPairs: Array<[number, number]> = [[0, 2], [1, 3], [2, 4], [1, 4], [5, 7], [6, 8], [7, 9], [8, 10], [9, 11], [10, 12]]
  for (const [a1, a2] of shortPairs) {
    b.path(`M${resX[a1]},547 Q${(resX[a1] + resX[a2]) / 2},${498 + Math.abs(a2 - a1) * -4} ${resX[a2]},547`, { fill: 'none', stroke: C.pro, sw: 1.3, opacity: 0.5 })
  }
  b.ctext(925, 496, '短程约束（|i−j| 小于 5）：密集，画的是二级结构', { size: 10.5, weight: 700, fill: C.proD })
  // 长程约束弧
  b.path(`M${resX[0]},565 Q925,648 ${resX[12]},565`, { fill: 'none', stroke: C.enz, sw: 2.2, dash: '6 5' })
  b.ctext(925, 640, '长程约束（|i−j| 大于 5）：稀疏，唯它定义三级折叠', { size: 10.5, weight: 700, fill: C.enz })
  // 占比条
  b.rect(748, 656, 300, 20, { fill: C.accL, stroke: C.acc, sw: 1.3, rx: 4 })
  b.rect(1048, 656, 100, 20, { fill: C.enzL, stroke: C.enz, sw: 1.3, rx: 4 })
  b.ctext(898, 670, '序列近邻 约 70–80%', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(1098, 670, '长程 两三成', { size: 10.5, weight: 700, fill: C.enz })
  b.ctext(925, 695, '长程稀疏区即精度薄弱区；RDC 以键矢量全局取向正交互补——专治「局部都对、整体歪了」', { size: 10, fill: C.sub })

  // ============ 四、五类约束拼图 ============
  b.panel(30, 712, 1340, 190, { title: '四、五类约束拼图（百残基典型量）' })
  b.table(50, 738, 1300, {
    headers: ['约束类型', '典型数量', '信息维度', '主要局限'],
    colW: [250, 210, 370, 470],
    rowH: 23,
    fontSize: 10.5,
    rows: [
      ['NOE 距离', '一两千至数千条', '两原子近于 5–6 Å', 'r^{−6} 时间平均，长程占比低'],
      ['^{3}J 耦合', '数十至上百', 'φ 等局部二面角（Karplus）', '多解、候选区间宽'],
      ['RDC', '数十至一二百', '键矢量全局取向，几到几十 Hz', '依赖 pf1、拉伸凝胶等定向介质'],
      ['氢键', '数十条', 'N–H 至 O 约 2.0 Å', '仅慢交换酰胺可见'],
      ['化学位移 TALOS-N', '全残基覆盖', 'φ/ψ 统计预测（Shen 与 Bax 2013）', '推断而非直接观测'],
    ],
  })
  b.ctext(700, 934, 'NOE 管距离、J 与化学位移管局部二面角、RDC 管全局取向、氢键管二级结构骨架——拼图集齐，方轮到结构计算登场', { size: 11, weight: 600, fill: C.mute })
}

export default scene({
  title: '共振指定与结构约束：三共振串珠与 NOE 距离拼图',
  subtitle: 'HNCO 等三共振串珠指定；NOE 强中弱约 2.7/3.3/5.0 Å；RDC 几到几十 Hz；氢键约 2.0 Å；TALOS-N 全残基 φ/ψ',
  draw,
})
