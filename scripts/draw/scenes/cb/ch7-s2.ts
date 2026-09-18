// cb ch7-s2 核纤层、核骨架与核仁（39-d 批A 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、核纤层：内核膜下的中间丝网架 ============
  b.panel(30, 132, 660, 430, { title: '一、核纤层与核骨架：V 型中间丝的正交网架' })
  // -- 核被膜双层（左：连 RER；右侧留空放标注）--
  b.text(64, 190, '外核膜（连 RER，胞质面附着核糖体）', { size: 10, weight: 700, fill: C.accD })
  b.bilayer(56, 232, 300)
  b.bilayer(56, 282, 300)
  b.brace(376, 232, 282, '核周腔', { side: 'right', size: 10 })
  b.text(64, 316, '内核膜', { size: 10, weight: 700, fill: C.dnaD })
  // 核纤层：正交网格
  for (let i = 0; i < 8; i++) {
    b.line(70 + i * 38, 328, 70 + i * 38, 362, { stroke: C.pro, sw: 2 })
  }
  for (let j = 0; j < 3; j++) {
    b.line(56, 336 + j * 13, 356, 336 + j * 13, { stroke: C.pro, sw: 2.2, opacity: 0.85 })
  }
  b.tag(160, 388, '核纤层（lamin 正交网架）', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 6 })
  // 锚定蛋白与异染色质
  b.tag(330, 388, 'LAP2 · emerin · LBR', { fill: C.dnaL, stroke: C.dna, size: 9.5, tfill: C.dnaD, pad: 5 })
  for (let i = 0; i < 4; i++) {
    b.rect(78 + i * 72, 404, 46, 16, { fill: C.pro, fillOp: 0.35, stroke: C.pro, sw: 1.3, rx: 3 })
  }
  b.text(64, 440, '异染色质常锚于核周（核纤层提供锚定位点）', { size: 9.5, fill: C.mute })
  // -- 右侧组成与疾病 --
  b.text(470, 218, '组成（V 型中间丝）', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(470, 240, 'B 型：lamin B1/B2——所有细胞持续表达；A 型：lamin A/C——LMNA 选择性剪接产生，分化细胞表达。', { size: 10, fill: C.sub, maxW: 200, lh: 14 })
  b.text(470, 320, '功能', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(470, 342, '维持核形与机械稳定性；锚定间期染色质；参与 DNA 复制与转录的空间组织；前期经 CDK1 磷酸化解聚、末期去磷酸化重建。', { size: 10, fill: C.sub, maxW: 200, lh: 14 })
  b.tag(478, 420, 'LMNA 突变 → laminopathy', { fill: C.badL, stroke: C.bad, size: 9.5, weight: 700, tfill: C.bad, pad: 5 })
  b.wtext(470, 444, '早衰症（HGPS）、扩张型心肌病、脂肪营养不良', { size: 9.5, fill: C.bad, maxW: 200, lh: 13 })
  b.text(64, 470, '核骨架（核基质）：非组蛋白纤维网络——"复制工厂"与"转录工厂"锚定其上。', { size: 10, weight: 600, fill: C.mute })

  // ============ 二、核仁：三分区超微结构 ============
  b.panel(710, 132, 660, 430, { title: '二、核仁：围绕 NOR 构建的无膜细胞器（三分区）' })
  b.circle(1040, 340, 112, { fill: '#fdf0e0', stroke: C.rna, sw: 2.4, dash: '8 5' })
  b.text(1160, 244, '虚线：无膜包裹', { size: 9.5, fill: C.mute })
  // GC 颗粒组分（外周颗粒）
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2
    b.circle(1040 + 82 * Math.cos(a), 340 + 82 * Math.sin(a), 5, { fill: C.rna, fillOp: 0.5 })
    b.circle(1040 + 70 * Math.cos(a * 2), 340 + 70 * Math.sin(a * 2), 4, { fill: C.rna, fillOp: 0.4 })
  }
  b.text(948, 428, 'GC 颗粒组分', { size: 10.5, weight: 700, fill: C.rnaD })
  b.text(948, 444, 'nucleolin·B23·亚基装配', { size: 9, fill: C.mute })
  // DFC 环 + FC 中心
  b.circle(1000, 320, 34, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.circle(1000, 320, 15, { fill: C.bg, stroke: C.rnaD, sw: 1.8 })
  b.circle(1090, 372, 28, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.circle(1090, 372, 12, { fill: C.bg, stroke: C.rnaD, sw: 1.8 })
  b.tag(1000, 258, 'FC', { fill: C.bg, stroke: C.rnaD, size: 9.5, weight: 700, tfill: C.rnaD, pad: 4 })
  b.text(1000, 274, 'RNA 聚合酶 I＋沉默 rDNA', { size: 8.5, fill: C.mute })
  b.tag(1090, 428, 'DFC', { fill: C.rnaL, stroke: C.rna, size: 9.5, weight: 700, tfill: C.rnaD, pad: 4 })
  b.text(1090, 444, '活跃转录·fibrillarin', { size: 8.5, fill: C.mute })
  // 转录位点箭头
  b.arrow(1016, 330, 1040, 348, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.ctext(1012, 356, 'FC/DFC 边界转录', { size: 8.5, fill: C.dnaD })
  // NOR 说明
  b.wtext(740, 190, '核仁组织区（NOR）：人类 rDNA 串联重复位于 5 对近端着丝粒染色体（13、14、15、21、22 号）的次缢痕处，核仁随细胞周期解体与重建（核仁周期）。', { size: 10, fill: C.sub, maxW: 600, lh: 14 })
  b.wtext(740, 478, '核仁是真核细胞最大的无膜细胞器；三分区：纤维中心（FC）→ 致密纤维组分（DFC）→ 颗粒组分（GC）。', { size: 10, fill: C.mute, maxW: 600, lh: 14 })

  // ============ 三、45S rRNA 转录、加工与核糖体装配 ============
  b.panel(30, 576, 1340, 404, { title: '三、rRNA 转录加工流程：从 45S 前体到核糖体亚基输出' })
  const steps: Array<[string, string, string]> = [
    ['① 转录', 'RNA 聚合酶 I 在 FC/DFC 边界', '转录 45S 前体 rRNA'],
    ['② 修饰加工', 'snoRNP：C/D 盒 2′-O-甲基化', 'H/ACA 盒假尿苷化→剪切'],
    ['③ 裂解', '剪切为 18S · 5.8S · 28S', '（三者同源于 45S）'],
    ['④ 装配', 'GC 区与蛋白质组装', '40S 与 60S 前体亚基'],
    ['⑤ 输出', '前体亚基经核孔输出至胞质', '成熟为核糖体'],
  ]
  steps.forEach((s, i) => {
    const x = 66 + i * 262
    b.rect(x, 636, 226, 108, { fill: i % 2 === 0 ? C.rnaL : C.bg, stroke: C.rna, sw: 1.8, rx: 10 })
    b.ctext(x + 113, 662, s[0], { size: 12.5, weight: 700, fill: C.rnaD })
    b.ctext(x + 113, 688, s[1], { size: 9.5, fill: C.sub })
    b.ctext(x + 113, 708, s[2], { size: 9.5, fill: C.sub })
    if (i < 4) b.arrow(x + 230, 690, x + 258, 690, { stroke: C.rna, sw: 2.4, marker: 'rna' })
  })
  b.tag(230, 782, '5S rRNA：由 RNA 聚合酶 III 在核仁外转录后输入', { fill: C.dnaL, stroke: C.dna, size: 10, tfill: C.dnaD, pad: 6 })
  b.tag(660, 782, '18S 参与小亚基 40S；5.8S·28S 参与大亚基 60S', { fill: C.accL, stroke: C.acc, size: 10, tfill: C.accD, pad: 6 })
  // -- 核仁应激小图 --
  b.text(80, 830, '核仁应激（应激感受器）：', { size: 11.5, weight: 700, fill: C.ink })
  b.circle(210, 872, 34, { fill: '#fdf0e0', stroke: C.rna, sw: 2, dash: '6 4' })
  b.line(210, 838, 210, 826, { stroke: C.bad, sw: 2 })
  b.text(150, 818, '功能紊乱', { size: 10, weight: 700, fill: C.bad })
  b.tag(320, 868, '核糖体蛋白 RPL11', { fill: C.proL, stroke: C.pro, size: 10, tfill: C.proD, pad: 5 })
  b.arrow(248, 868, 288, 868, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.tag(500, 868, '结合 Mdm2', { fill: C.enzL, stroke: C.enz, size: 10, tfill: C.enzD, pad: 5 })
  b.arrow(400, 868, 462, 868, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ion(636, 868, 'p53 释放', { r: 30, fill: C.badL, stroke: C.bad, tfill: C.bad, size: 11 })
  b.arrow(560, 868, 600, 868, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.arrow(668, 868, 720, 868, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.tag(826, 868, '细胞周期阻滞', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: '#78350f', pad: 6 })
  b.wtext(80, 918, '多种化疗药正是经此"核仁应激"发挥作用（p53 通路详见第 10 章）。', { size: 10, fill: C.mute, maxW: 560, lh: 14 })
  b.wtext(950, 836, '核仁输出：核糖体亚基与 5S rRNA 汇合路径示意。', { size: 10, fill: C.mute, maxW: 380, lh: 14 })
}

export default scene({
  title: '核纤层、核骨架与核仁：核内结构与 rRNA 工厂',
  subtitle: '核纤层 V 型中间丝网架（LMNA 突变致早衰）；核仁围绕 5 对染色体 NOR 构建、FC/DFC/GC 三分区；45S 前体经 snoRNP 加工为 18S/5.8S/28S 后输出',
  draw,
})
