// em ch9-s4 子图平均与原位结构生物学（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、STA 流程 ============
  b.panel(30, 132, 660, 412, { title: '一、子图平均流程：从断层图到结构' })
  // 断层片
  b.rect(60, 190, 150, 120, { fill: '#f8fafc', stroke: C.sub, sw: 1.8 })
  for (let i = 0; i < 30; i++) {
    const rx = 68 + ((Math.sin(i * 71.3) * 33758.5) % 1 + 1) % 1 * 134
    const ry = 198 + ((Math.sin(i * 217.7) * 42543.2) % 1 + 1) % 1 * 104
    b.circle(rx, ry, 1.3, { fill: C.mute, opacity: 0.45 })
  }
  ;[[100, 230], [150, 270], [120, 290], [180, 215], [85, 285]].forEach(([hx, hy]) => {
    b.circle(hx, hy, 8, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
    b.rect(hx - 12, hy - 12, 24, 24, { fill: 'none', stroke: C.ok, sw: 1.2, dash: '5 4' })
  })
  b.ctext(135, 332, '断层图内定位（模板匹配）', { size: 10, weight: 700, fill: C.sub })
  b.arrow(220, 250, 262, 250, { stroke: C.sub, sw: 2, marker: 'ink' })
  // 子图堆
  for (let i = 0; i < 5; i++) {
    b.rect(270 + i * 9, 196 + i * 8, 88, 70, { fill: '#ffffff', stroke: C.line, sw: 1.2, opacity: 0.95 })
    b.ellipse(314 + i * 9, 231 + i * 8, 16, 12, { fill: C.enzL, stroke: C.enz, sw: 1.4 })
  }
  b.ctext(320, 300, '提取子图', { size: 10, weight: 700, fill: C.sub })
  b.arrow(372, 250, 412, 250, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(392, 232, '六维对齐', { size: 9.5, fill: C.sub })
  b.arrow(414, 250, 414, 290, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  // 平均
  b.ellipse(480, 316, 34, 26, { fill: C.proL, stroke: C.pro, sw: 2.4 })
  b.path('M 466,310 q 8,-9 16,-2 q 6,-7 12,1', { stroke: C.proD, sw: 2, fill: 'none' })
  b.ctext(480, 366, '平均与迭代精修', { size: 10, weight: 700, fill: C.sub })
  b.tag(590, 250, '单子图评估 10^{5}–10^{7} 次', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })
  b.tag(590, 284, '傅里叶域卷积', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(590, 316, 'GPU 加速', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(590, 348, '分层搜索', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.wtext(50, 404, '缺失楔随取向互补、平均图中楔效应收敛；每个子图按其倾角与欠焦计算三维楔形 CTF 权重——这是 STA 与单颗粒平均的根本差别之一。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.ctext(360, 468, '分辨率随子图数目与均一度提升；统计瓶颈让位于均一度瓶颈后，收益递减', { size: 10, fill: C.mute })

  // ============ 二、分辨率阶梯 ============
  b.panel(710, 132, 660, 412, { title: '二、分辨率阶梯：里程碑与收益递减' })
  const rows: [string, string, string][] = [
    ['2000 年前后', '方法确立：病毒颗粒与核糖体的子图平均', '2–4 nm'],
    ['2010 年前后', '原位断层进入细菌与突触末梢', '3–5 nm'],
    ['2015 年前后', '完整病毒颗粒内衣壳晶格（Schur 等）', '约 8 Å'],
    ['近年', '核糖体推进至 3–4 Å 级（低于 3 Å 仍属个例）', '3–4 Å'],
  ]
  b.table(730, 196, 620, {
    headers: ['时期', '里程碑', '分辨率量级'],
    colW: [140, 360, 120], rowH: 34, fontSize: 10.5,
    rows: rows.map(r => [r[0], r[1], r[2]]),
  })
  const ax = 760, ay = 470, aw = 330, ah = 130
  b.axis(ax, ay, aw, ah, {
    grid: false,
    xticks: [[0.06, '10^{2}'], [0.5, '10^{3}'], [0.94, '10^{4}']],
    yticks: [[0, '差'], [0.9, '好']],
    xlabel: '子图数目（对数示意）',
    title: '10²–10⁴ 个子图常态 1–2 nm；10³ 到 10⁴ 只剩半个档位',
  })
  b.curve(ax, ay, aw, ah, [[0.04, 0.06], [0.3, 0.42], [0.55, 0.62], [0.8, 0.75], [0.96, 0.8]], { stroke: C.dna, sw: 2.4, smooth: true })
  b.wtext(1120, 360, '统计瓶颈让位均一度瓶颈：加子图先快后慢，异质性成为新的限制因素——与单颗粒的子集选择同思。', { size: 10, fill: C.sub, maxW: 220, lh: 14 })
  b.tag(1230, 470, '优秀案例达 3–4 Å 级', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })

  // ============ 三、原位与体外 ============
  b.panel(30, 572, 660, 398, { title: '三、原位与体外：结构相同、社会学不同' })
  // 体外
  b.rect(60, 616, 240, 170, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  ;[[130, 680], [220, 740], [90, 760]].forEach(([px2, py2]) => {
    b.ellipse(px2, py2, 15, 12, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  })
  b.ctext(180, 812, '体外：稀溶液中的纯化颗粒', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(180, 828, '浓度与相互作用由实验者设定', { size: 9.5, fill: C.mute })
  // 原位
  b.rect(330, 616, 240, 170, { fill: '#f8fafc', stroke: C.sub, sw: 1.8 })
  for (let i = 0; i < 22; i++) {
    const rx = 338 + ((Math.sin(i * 51.3) * 23758.5) % 1 + 1) % 1 * 224
    const ry = 624 + ((Math.sin(i * 187.7) * 32543.2) % 1 + 1) % 1 * 154
    b.circle(rx, ry, 2.2, { fill: C.mute, opacity: 0.4 })
  }
  const poly: [number, number][] = [[370, 700], [410, 670], [450, 690], [490, 660], [530, 680]]
  b.polyline(poly, { stroke: C.bad, sw: 2.4 })
  poly.forEach(([px2, py2]) => b.ellipse(px2, py2, 13, 10, { fill: C.proL, stroke: C.pro, sw: 1.8 }))
  b.ellipse(400, 760, 14, 11, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
  b.ellipse(450, 770, 14, 11, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
  b.ctext(450, 812, '原位：拥挤细胞质中的分子社会学', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(450, 828, '红色链＝多聚体，橙点＝蛋白酶体簇', { size: 9.5, fill: C.mute })
  b.wtext(60, 862, '原位独有产出：核糖体翻译态的占据比与多聚体组织、膜蛋白间距、蛋白酶体的核周浓度梯度（Mahamid 等 2016 年 HeLa 数据的经典一幕）——结构一致，读出的是它在细胞里的生活方式。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、多尺度整合与三大挑战 ============
  b.panel(710, 572, 660, 398, { title: '四、多尺度整合与三大挑战' })
  b.text(730, 620, '多尺度上下文：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(830, 648, 'vCLEM：荧光先行定位目标', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(1080, 648, '光电坐标以标志物多项式拟合', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(930, 680, '相关误差 100–200 nm；FIB-SEM 体成像提供细胞级参照', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.text(730, 724, '三大挑战：', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(730, 746, '其一，数百 mg/mL 的拥挤背景——约 200 kDa 以下的分子缺乏可分辨的识别特征，构成识别地板；其二，剂量极限不可重置，同一区域无法二次补光；其三，「以已知找已知」——模板匹配找不到模板里没有的构象与新分子。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(880, 824, '拥挤背景：约 200 kDa 识别地板', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 9 })
  b.tag(1150, 824, '剂量：不可重置的预算', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 9 })
  b.tag(880, 856, '识别：以已知找已知', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 9 })
  b.tag(1150, 856, '出路：片段化模板与新构象方法', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.ctext(1040, 916, 'Beck 与 Mahamid 2020 年前后把这条路线命名为原位结构生物学（第 12 章收束）', { size: 9.5, fill: C.mute })
}

export default scene({
  title: '子图平均与原位结构生物学：在细胞里做结构',
  subtitle: 'STA 六维对齐平均（单子图 10⁵–10⁷ 次评估，傅里叶域卷积＋GPU＋分层搜索）；10²–10⁴ 子图常态 1–2 nm、优秀案例 3–4 Å；原位独有产出是占据比与多聚体组织等「社会学」信息；三大挑战为拥挤、剂量与识别',
  draw,
})
