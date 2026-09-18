// cb ch2-s2 膜的不对称性与流动性（39-d 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、膜脂两叶不对称 ============
  b.panel(30, 132, 760, 350, { title: '一、膜的不对称性：脂双层两叶组成不同' })
  b.text(66, 190, '细胞外', { size: 12, weight: 600, fill: C.sub })
  b.text(66, 404, '细胞质', { size: 12, weight: 600, fill: C.sub })
  // 外叶脂质：PC（青）与鞘磷脂（琥珀）
  for (let i = 0; i < 12; i++) {
    const x = 90 + i * 52
    b.circle(x, 260, 10, { fill: i % 3 === 2 ? C.rna : C.dna })
    b.line(x - 5, 268, x - 5, 306, { stroke: C.dna, sw: 2, opacity: 0.8 })
    b.line(x + 5, 268, x + 5, 306, { stroke: C.dna, sw: 2, opacity: 0.8 })
    b.line(x - 5, 322, x - 5, 360, { stroke: C.dna, sw: 2, opacity: 0.8 })
    b.line(x + 5, 322, x + 5, 360, { stroke: C.dna, sw: 2, opacity: 0.8 })
    b.circle(x, 368, 10, { fill: i % 2 === 0 ? C.pro : C.enz })
  }
  // 糖萼：糖链只朝非胞质面
  b.ctext(460, 202, '糖萼——糖链只分布于非胞质面', { size: 11.5, weight: 700, fill: C.rnaD })
  const glycan = (x: number) => {
    b.line(x, 250, x, 236, { stroke: C.rna, sw: 1.4 })
    b.circle(x, 234, 7, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
    b.circle(x + 13, 226, 7, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
    b.circle(x + 26, 234, 7, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
    b.line(x + 5, 238, x + 9, 228, { stroke: C.rna, sw: 1.3 })
    b.line(x + 18, 228, x + 22, 238, { stroke: C.rna, sw: 1.3 })
  }
  glycan(294)
  glycan(452)
  // PS 外翻
  b.text(66, 200, 'PS 外翻＝「吃我」信号', { size: 11.5, weight: 700, fill: C.bad })
  b.wtext(66, 216, '凋亡早期细胞与活化血小板的标志；Annexin V 染色检测凋亡的原理。', { size: 10.5, fill: C.sub, maxW: 210, lh: 14 })
  b.arrow(110, 356, 110, 272, { stroke: C.bad, sw: 2.2, marker: 'bad', dash: '7 5' })
  // flippase
  b.rect(606, 262, 28, 96, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 6 })
  b.arrow(620, 278, 620, 340, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.ctext(620, 244, '氨基磷脂转位酶', { size: 10.5, weight: 600, fill: C.enzD })
  b.ctext(620, 258, 'flippase', { size: 10.5, fill: C.mute })
  // 图例与注释
  b.legend(200, 400, [['PC（外叶）', C.dna], ['鞘磷脂（外叶）', C.rna], ['PE（内叶）', C.pro], ['PS（内叶）', C.enz]], { size: 10.5, gap: 14 })
  b.wtext(56, 430, '膜蛋白同样具有方向性：受体的配体结合位点朝胞外，激酶活性位点多朝胞质侧——保证信号方向与反应秩序。', { size: 11, fill: C.sub, maxW: 680, lh: 15.5 })

  // ============ 二、FRAP ============
  b.panel(810, 132, 560, 350, { title: '二、FRAP：膜流动性的直接实验证据' })
  const dots: [number, number][] = []
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const dx = (i - 2) * 20 + (j % 2 === 0 ? 5 : -4)
      const dy = (j - 2) * 19 + (i % 2 === 0 ? 4 : -3)
      if (Math.hypot(dx, dy) < 46) dots.push([dx, dy])
    }
  }
  const patch = (cx: number, mode: 'before' | 'bleach' | 'recover') => {
    b.circle(cx, 228, 55, { fill: '#ffffff', stroke: C.sub, sw: 2.2 })
    dots.forEach(([dx, dy]) => {
      const inside = Math.hypot(dx, dy) < 22
      if (mode === 'before') b.circle(cx + dx, 228 + dy, 3, { fill: C.ok })
      else if (mode === 'bleach') { if (!inside) b.circle(cx + dx, 228 + dy, 3, { fill: C.ok }) }
      else {
        if (!inside) b.circle(cx + dx, 228 + dy, 3, { fill: C.ok })
        else if ((dx + dy) % 2 === 0) b.circle(cx + dx, 228 + dy, 3, { fill: C.ok, opacity: 0.55 })
      }
    })
    if (mode === 'bleach') b.circle(cx, 228, 22, { fill: C.ink, fillOp: 0.82 })
    if (mode === 'recover') b.circle(cx, 228, 22, { stroke: C.bad, sw: 1.6, dash: '5 4', fill: 'none' })
  }
  patch(890, 'before')
  patch(1090, 'bleach')
  patch(1290, 'recover')
  b.ctext(890, 310, '漂白前', { size: 12, weight: 700, fill: C.ink })
  b.ctext(1090, 310, '强激光漂白', { size: 12, weight: 700, fill: C.ink })
  b.ctext(1290, 310, '侧向扩散恢复', { size: 12, weight: 700, fill: C.ink })
  b.arrow(950, 228, 1028, 228, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(989, 216, '强激光', { size: 10.5, fill: C.mute })
  b.arrow(1150, 228, 1228, 228, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(1189, 216, '时间', { size: 10.5, fill: C.mute })
  // 恢复曲线
  b.axis(880, 430, 420, 100, {
    xlabel: '时间 →', ylabel: '荧光强度',
    xticks: [[0.03, '漂白'], [0.55, '恢复中'], [1, '']],
    yticks: [[0.95, 'F₀'], [0.1, '']],
  })
  b.curve(880, 430, 420, 100, [[0, 0.92], [0.04, 0.14], [0.12, 0.2], [0.25, 0.42], [0.4, 0.62], [0.6, 0.8], [0.8, 0.9], [1, 0.93]], { stroke: C.dna, sw: 2.6, smooth: true })
  b.text(830, 470, '恢复速率即膜组分的侧向扩散速度', { size: 10.5, fill: C.mute })

  // ============ 三、影响膜流动性的因素 ============
  b.panel(30, 496, 760, 484, { title: '三、影响膜流动性的五大因素' })
  b.table(56, 556, 700, {
    headers: ['因素', '对流动性的影响'],
    colW: [190, 510],
    rowH: 44,
    fontSize: 11,
    rows: [
      ['脂肪酸链长度', '链越短 → 疏水尾相互作用越弱 → 流动性越高'],
      ['不饱和程度', '顺式双键造成链扭结、排列疏松 → 流动性升高'],
      ['胆固醇', '双向调节：高于相变温度时限制流动，低于时阻止紧密排列'],
      ['温度', '跨越相变温度（Tm）：凝胶态 ⇌ 液晶态转变'],
      ['膜蛋白密度', '嵌入蛋白增多 → 限制局部脂质运动'],
    ],
  })
  b.rect(56, 848, 330, 112, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(221, 874, '饱和直链：排列紧密，流动性低', { size: 11.5, weight: 700, fill: C.ink })
  for (let i = 0; i < 8; i++) b.line(90 + i * 36, 888, 90 + i * 36, 944, { stroke: C.dna, sw: 2.4 })
  b.rect(410, 848, 346, 112, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(583, 874, '不饱和（顺式双键扭结）：疏松，流动性高', { size: 11.5, weight: 700, fill: C.ink })
  for (let i = 0; i < 8; i++) {
    const x = 444 + i * 36
    b.path(`M ${x},888 L ${x},906 L ${x + 11},920 L ${x},934 L ${x},944`, { stroke: C.dna, sw: 2.4, fill: 'none' })
  }

  // ============ 四、生理与病理意义 ============
  b.panel(810, 496, 560, 484, { title: '四、膜流动性的生理与病理意义' })
  b.tag(900, 556, '生理过程依赖', { fill: C.okL, stroke: C.ok, size: 12, weight: 700, tfill: C.ok, pad: 10 })
  b.wtext(830, 586, '膜融合（胞吞与胞吐）· 跨膜运输 · 膜酶活性 · 信号转导 · 细胞分裂与细胞运动。', { size: 11, fill: C.sub, maxW: 500, lh: 16 })
  b.tag(878, 638, '低温适应', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 10 })
  b.wtext(830, 668, '耐寒植物与冬眠动物通过提高膜脂不饱和度，维持低温下的膜流动性。', { size: 11, fill: C.sub, maxW: 500, lh: 16 })
  b.tag(910, 720, '病理：流动性异常', { fill: C.badL, stroke: C.bad, size: 12, weight: 700, tfill: C.bad, pad: 10 })
  b.wtext(830, 750, '镰状细胞贫血：红细胞膜脂组分改变、流动性异常 → 变形能力下降 → 堵塞小血管。', { size: 11, fill: C.sub, maxW: 500, lh: 16 })
  b.ellipse(920, 880, 38, 20, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.ellipse(920, 880, 16, 7, { fill: '#ffffff', stroke: C.dna, sw: 1 })
  b.ctext(920, 924, '正常红细胞（双凹圆盘形）', { size: 10.5, fill: C.sub })
  b.path('M 1085,862 Q 1045,882 1085,902 Q 1128,898 1138,878 Q 1130,862 1110,858 Z', { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(1095, 924, '镰变红细胞（变形性差）', { size: 10.5, fill: C.sub })
}

export default scene({
  title: '膜的不对称性与流动性',
  subtitle: '外叶以 PC／鞘磷脂为主、内叶富集 PE／PS（flippase 将 PS 锁在内叶，外翻即「吃我」信号）；FRAP 漂白恢复直接证明侧向扩散；链长、不饱和度、胆固醇、温度与蛋白密度共同决定流动性',
  draw,
})
