// ph ch2-s4 兴奋的传导：局部电流与跳跃传导
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、局部电流学说（无髓纤维） ============
  b.panel(30, 132, 1340, 315, { title: '一、局部电流学说：未兴奋区被局部电流「抬」到阈电位' })
  // 轴突：左端已兴奋区（去极化反转），右侧静息区
  b.rect(80, 225, 760, 120, { fill: C.panel, stroke: C.sub, sw: 2.2, rx: 16 })
  b.rect(84, 229, 144, 112, { fill: C.badL, rx: 12 })
  // 膜内外极性标记（兴奋区外负内正；静息区外正内负）
  b.ctext(155, 216, '− − − −', { size: 11, weight: 700, fill: C.badD })
  b.ctext(155, 250, '+ + + +', { size: 11, weight: 700, fill: C.badD })
  for (const x of [310, 430, 550, 670]) {
    b.ctext(x, 216, '+ +', { size: 11, weight: 700, fill: C.accD })
    b.ctext(x, 250, '− −', { size: 11, weight: 700, fill: C.accD })
  }
  // 局部电流环路：膜外流向兴奋区、轴浆内反向
  b.ctext(430, 190, '膜外电流', { size: 11, weight: 700, fill: C.accD })
  b.arrow(620, 200, 260, 200, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(260, 300, 620, 300, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(430, 324, '轴浆内电流', { size: 11, weight: 700, fill: C.accD })
  b.arrow(620, 372, 260, 372, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(155, 285, '已兴奋区（+30 mV）', { size: 11, weight: 700, fill: C.badD })
  b.ctext(540, 285, '静息区（−70 mV）', { size: 11, weight: 700, fill: C.accD })
  b.ctext(430, 402, '邻近未兴奋区被去极化达阈电位 → 新 AP 就地爆发，逐段接力（双向）', { size: 11.5, fill: C.sub })
  b.ctext(430, 424, 'λ = √(r_{m}/r_{i})：无髓纤维 λ 仅 0.1–1 mm，被动扩布不能独力远传', { size: 11, fill: C.sub })
  // 右：电紧张扩布衰减曲线
  b.axis(950, 400, 385, 195, {
    title: '电紧张扩布（被动衰减）',
    xticks: [[0, '0'], [0.25, 'λ'], [0.5, '2λ'], [0.75, '3λ'], [1, '4λ']],
    yticks: [[1, 'V_{0}']],
  })
  b.curve(950, 400, 385, 195, [
    [0, 1], [0.06, 0.79], [0.125, 0.61], [0.19, 0.47], [0.25, 0.37], [0.31, 0.29],
    [0.375, 0.22], [0.44, 0.17], [0.5, 0.135], [0.6, 0.09], [0.7, 0.06], [0.8, 0.04], [0.9, 0.025], [1, 0.018],
  ], { stroke: C.bad, sw: 2.4, smooth: true })
  b.text(1100, 228, 'V_{0}e^{−x/λ}', { size: 12.5, weight: 700, fill: C.badD })
  b.line(950, 332, 1335, 332, { stroke: C.bad, sw: 1.2, dash: '6 4' })
  b.etext(1330, 327, '阈电位', { size: 10.5, weight: 700, fill: C.badD })
  b.line(1046, 400, 1046, 328, { stroke: C.faint, sw: 1.2, dash: '3 3' })
  b.circle(1046, 328, 4, { fill: C.bad })
  b.ctext(1046, 316, 'x = λ 时 V ≈ 0.37V_{0}', { size: 10.5, weight: 600, fill: C.sub })
  b.ctext(1142, 438, '距兴奋区距离 x', { size: 12, weight: 600, fill: C.sub })

  // ============ 二、有髓纤维与跳跃传导 ============
  b.panel(30, 461, 1340, 285, { title: '二、有髓纤维与跳跃传导：数量级的速度跃升' })
  // 轴突核心 + 髓鞘节段（结间体）
  b.rect(80, 553, 700, 34, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 17 })
  for (const [mx, mw] of [[80, 155], [275, 155], [470, 155], [665, 115]] as [number, number][]) {
    b.rect(mx, 522, mw, 66, { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 12 })
  }
  b.ctext(157, 573, '髓鞘', { size: 11.5, weight: 700, fill: C.warnD })
  for (const nx of [255, 450, 645]) b.ion(nx, 570, 'Na^{+}', { r: 12, size: 8, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.ctext(450, 502, '兴奋从结跳向结——跳跃传导', { size: 11.5, weight: 700, fill: C.okD })
  b.arrow(270, 514, 445, 514, { stroke: C.ok, sw: 2.4, marker: 'ok' })
  b.arrow(465, 514, 640, 514, { stroke: C.ok, sw: 2.4, marker: 'ok' })
  b.ctext(255, 626, '郎飞结', { size: 11, weight: 700, fill: C.badD })
  b.braceH(275, 600, 155, { label: '结间体 1–2 mm' })
  b.ctext(255, 648, 'Na^{+} 通道几乎全在结区', { size: 10.5, fill: C.badD })
  // 速度对比条
  b.rect(80, 672, 18, 11, { fill: C.badL, stroke: C.bad, sw: 1.4, rx: 2 })
  b.text(106, 681, '无髓 C 纤维：0.5–2 m/s', { size: 11, weight: 700, fill: C.badD })
  b.rect(80, 698, 330, 11, { fill: C.okL, stroke: C.ok, sw: 1.4, rx: 2 })
  b.text(422, 707, '有髓 Aα：70–120 m/s（数量级跃升）', { size: 11, weight: 700, fill: C.okD })
  // 右：经验式与机制
  b.text(830, 505, '直径–速度经验式', { size: 12.5, weight: 700, fill: C.ink })
  b.tag(1000, 532, '有髓：v ≈ 6 × d（μm → m/s）', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 11.5, weight: 700, pad: 10 })
  b.tag(1000, 568, '无髓：v ∝ √d（1 μm ≈ 1 m/s）', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 11.5, weight: 700, pad: 10 })
  b.text(830, 604, '例：Aα 直径 20 μm → 6×20 = 120 m/s；C 纤维 1 μm → 慢车道', { size: 10.5, fill: C.sub })
  b.wtext(830, 628, '髓鞘的物理收益：跨膜电阻升高数十倍（漏电锐减）＋膜电容大幅压缩（充放电加快）——局部电流几乎不衰减地跨过结间体，直达下一个郎飞结触发新 AP', { maxW: 500, lh: 17, size: 10.5, fill: C.sub })
  b.wtext(830, 676, '能耗账单：只需结区少量 Na^{+} 内流，钠泵开销约为无髓的百分之一量级；外周一条 Schwann 细胞只包一个结间体，中枢一条少突胶质细胞可同时包住数十段——经济但脆弱', { maxW: 500, lh: 17, size: 10.5, fill: C.sub })

  // ============ 三、神经纤维分类与脱髓鞘临床 ============
  b.panel(30, 760, 1340, 225, { title: '三、神经纤维分类（Erlanger–Gasser）与脱髓鞘临床' })
  b.table(46, 796, 700, {
    headers: ['类别', '直径 μm', '速度 m/s', '髓鞘', '主要功能'],
    colW: [64, 96, 96, 76, 368], rowH: 24, fontSize: 10.5,
    rows: [
      ['Aα', '12–20', '70–120', '有', '肌梭初级传入、α 运动纤维'],
      ['Aβ', '5–12', '30–70', '有', '皮肤触压觉传入'],
      ['Aγ', '3–6', '15–30', '有', '梭内肌运动纤维'],
      ['Aδ', '2–5', '12–30', '有', '快痛、温度觉'],
      ['B', '1–3', '3–15', '薄', '自主神经节前纤维'],
      ['C', '0.2–1.5', '0.5–2', '无', '慢痛、交感节后、内脏感觉'],
    ],
  })
  // 右：脱髓鞘 mini 示意
  b.line(795, 818, 1345, 818, { stroke: C.sub, sw: 2.2 })
  for (const [mx, mw] of [[795, 80], [915, 80], [1155, 80], [1275, 70]] as [number, number][]) {
    b.rect(mx, 804, mw, 28, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 6 })
  }
  b.rect(1035, 804, 80, 28, { fill: '#ffffff', stroke: C.bad, sw: 1.6, dash: '5 4', rx: 6 })
  b.ctext(835, 823, '髓鞘', { size: 9.5, weight: 700, fill: C.warnD })
  for (const nx of [891, 1011, 1131, 1251]) b.rect(nx, 810, 8, 16, { fill: C.badL, stroke: C.bad, sw: 1.1 })
  b.ctext(895, 852, '郎飞结', { size: 10, weight: 700, fill: C.badD })
  b.arrow(898, 790, 998, 790, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.arrow(1008, 790, 1112, 790, { stroke: C.faint, sw: 1.4, dash: '4 4' })
  b.ctext(1075, 780, '髓鞘脱失（MS 斑块）', { size: 10.5, weight: 700, fill: C.badD })
  b.arrow(1075, 834, 1075, 858, { stroke: C.bad, sw: 1.5, marker: 'bad' })
  b.ctext(1075, 874, '电流泄漏', { size: 10, weight: 700, fill: C.badD })
  b.line(1126, 809, 1144, 827, { stroke: C.bad, sw: 2.4 })
  b.line(1144, 809, 1126, 827, { stroke: C.bad, sw: 2.4 })
  b.ctext(1135, 852, '传导阻滞', { size: 10, weight: 700, fill: C.badD })
  b.wtext(795, 898, '多发性硬化：中枢髓鞘自身免疫性脱失——跨膜电阻骤降、膜电容回升、结旁 K^{+} 通道暴露，局部电流漏入结间而到不了下一个结：传导减慢 → 频率依赖性阻滞 → 完全中断。体温升高压低安全边际（Uhthoff 现象）；外周镜像为吉兰-巴雷综合征。安全因子正常 > 2，跌破 1 即失传导——局麻药即循此序先封锁细纤维', { maxW: 545, lh: 16.5, size: 10.5, fill: C.sub })
}

export default scene({
  title: '兴奋的传导：局部电流与跳跃传导',
  subtitle: '无髓纤维靠局部电流逐段接力（C 纤维仅 0.5–2 m/s）；髓鞘把跨膜电阻升高数十倍、膜电容大幅压缩，兴奋在相隔 1–2 mm 的郎飞结间跳跃，Aα 达 70–120 m/s——脱髓鞘（多发性硬化）即传导灾难',
  draw,
})
