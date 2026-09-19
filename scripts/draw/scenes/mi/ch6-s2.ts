// mi ch6-s2 发酵类型与经典工业产物（39-f 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、两条经典发酵机制 ============
  b.panel(30, 132, 1340, 330, { title: '一、乙醇发酵的 NAD⁺ 再生闭环；同型与异型乳酸发酵' })

  // 左：酵母乙醇发酵
  b.tag(330, 190, '葡萄糖', { fill: C.dnaL, stroke: C.dna, size: 12.5, weight: 700, tfill: C.dnaD, pad: 10 })
  b.arrow(330, 206, 330, 246, { stroke: C.sub, sw: 2, marker: 'mute' })
  b.ctext(392, 228, 'EMP（净得 2 ATP）', { size: 10.5, fill: C.mute })
  b.tag(330, 268, '丙酮酸', { fill: C.accL, stroke: C.acc, size: 12.5, weight: 700, tfill: C.accD, pad: 10 })
  b.arrow(330, 284, 330, 324, { stroke: C.sub, sw: 2, marker: 'mute' })
  b.ctext(445, 306, '丙酮酸脱羧酶（放出 CO₂）', { size: 10.5, fill: C.mute })
  b.tag(330, 346, '乙醛', { fill: C.rnaL, stroke: C.rna, size: 12.5, weight: 700, tfill: C.rnaD, pad: 10 })
  b.arrow(330, 362, 330, 402, { stroke: C.sub, sw: 2, marker: 'mute' })
  b.ctext(452, 384, '乙醇脱氢酶 · NADH → NAD⁺', { size: 10.5, fill: C.mute })
  b.tag(330, 424, '乙醇', { fill: C.okL, stroke: C.ok, size: 12.5, weight: 700, tfill: C.ok, pad: 10 })
  // NADH/NAD+ 闭环
  b.path('M 262 232 C 200 232, 200 380, 260 384', { stroke: C.enz, sw: 2, dash: '6 4' })
  b.arrow(268, 384, 278, 384, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ctext(186, 308, 'NAD⁺', { size: 11, weight: 700, fill: C.enzD })
  b.path('M 398 384 C 452 380, 452 232, 396 232', { stroke: C.enz, sw: 2, dash: '6 4' })
  b.ctext(470, 272, 'NADH', { size: 11, weight: 700, fill: C.enzD })
  b.ctext(330, 452, '总反应：1 葡萄糖 → 2 乙醇 + 2 CO₂（净得 2 ATP）', { size: 11.5, weight: 700, fill: C.sub })
  // 甘油支路
  b.tag(170, 346, '亚硫酸氢盐固定乙醛', { fill: C.badL, stroke: C.bad, size: 9.5, weight: 700, tfill: C.bad, pad: 7 })
  b.arrow(240, 346, 296, 346, { stroke: C.bad, sw: 1.8, marker: 'bad', dash: '5 4' })
  b.ctext(170, 380, '产物改道 → 甘油', { size: 10.5, fill: C.bad })

  // 右：同型 vs 异型乳酸
  b.rect(690, 168, 650, 128, { fill: C.bg, stroke: C.ok, sw: 1.5, rx: 9 })
  b.text(710, 194, '同型乳酸发酵（德氏乳杆菌等）', { size: 13, weight: 700, fill: C.ok })
  b.text(710, 220, '走 EMP 途径——丙酮酸直接被乳酸脱氢酶还原：', { size: 11.5, fill: C.sub })
  b.text(710, 248, '1 葡萄糖 → 2 乳酸，净得 2 ATP（终产物「纯粹」）', { size: 12, weight: 700, fill: C.ok })
  b.rect(690, 308, 650, 128, { fill: C.bg, stroke: C.rna, sw: 1.5, rx: 9 })
  b.text(710, 334, '异型乳酸发酵（肠膜明串珠菌）', { size: 13, weight: 700, fill: C.rnaD })
  b.text(710, 360, '缺醛缩酶，改走 6-磷酸葡糖酸途径 · 磷酸酮解酶：', { size: 11.5, fill: C.sub })
  b.text(710, 388, '1 葡萄糖 → 乳酸 + 乙醇 + CO₂ 各 1，仅净得 1 ATP', { size: 12, weight: 700, fill: C.rnaD })
  b.wtext(690, 452, '双歧杆菌的「双歧途径」为 PK 途径变体：每分子葡萄糖净得约 2.5 ATP，产物为乳酸与乙酸——产能反而较高。', { size: 11, fill: C.mute, maxW: 650, lh: 16 })

  // ============ 二、发酵类型产物对照表 ============
  b.panel(30, 482, 1340, 320, { title: '二、发酵类型速查：产物、途径与检测应用' })
  b.table(50, 520, 1300, {
    headers: ['发酵类型', '代表菌', '关键途径或酶', '主要产物', 'ATP/葡萄糖', '检测应用'],
    colW: [118, 148, 228, 330, 106, 370],
    rowH: 36,
    fontSize: 11.5,
    rows: [
      ['乙醇发酵', '酿酒酵母', '丙酮酸脱羧酶 + 乙醇脱氢酶', '2 乙醇 + 2 CO₂', '2', '酿酒、面包工业'],
      ['同型乳酸发酵', '德氏乳杆菌', 'EMP 途径', '2 乳酸', '2', '乳制品、酸奶'],
      ['异型乳酸发酵', '肠膜明串珠菌', '磷酸酮解酶（PK）途径', '乳酸 + 乙醇 + CO₂', '1', '泡菜风味'],
      ['混合酸发酵', '大肠杆菌', '多分支还原', '乳酸、乙酸、甲酸、琥珀酸', '—', 'MR 阳性 · IMViC ++−−'],
      ['丁二醇发酵', '产气肠杆菌', '乙偶姻途径', '2,3-丁二醇', '—', 'V-P 阳性 · IMViC −−++'],
      ['丙酮丁醇发酵', '丙酮丁醇梭菌', 'ABE 发酵', '丙酮 : 丁醇 : 乙醇 ≈ 3 : 6 : 1', '—', '工业溶剂（pH≈4.3 转溶剂）'],
    ],
  })

  // ============ 三、IMViC 与 ABE 补充 ============
  b.panel(30, 822, 1340, 158, { title: '三、肠杆菌鉴定的 IMViC 对照与 ABE 发酵转折' })
  b.rect(50, 852, 620, 100, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(70, 880, 'IMViC 四联试验', { size: 13, weight: 700, fill: C.ink })
  b.wtext(70, 904, '吲哚 I · 甲基红 M · V-P Vi · 柠檬酸 C：大肠杆菌 ++−−（混合酸型）；产气肠杆菌 −−++（丁二醇型）。', { size: 11.5, fill: C.sub, maxW: 580, lh: 17 })
  b.wtext(70, 940, '——发酵产物特征是肠杆菌科鉴定的经典基石。', { size: 11, fill: C.mute })
  b.rect(690, 852, 650, 100, { fill: C.warnL, fillOp: 0.4, stroke: '#d97706', sw: 1.4, rx: 9 })
  b.text(710, 880, 'ABE 发酵的酸衰转溶剂', { size: 13, weight: 700, fill: '#92400e' })
  b.wtext(710, 904, '丙酮丁醇梭菌先产酸，pH 约降至 4.3 时代谢改道转向溶剂合成——丙酮 : 丁醇 : 乙醇 ≈ 3 : 6 : 1。', { size: 11.5, fill: C.sub, maxW: 610, lh: 17 })
}

export default scene({
  title: '发酵类型与经典工业产物：从 NAD⁺ 再生闭环到 IMViC 鉴定',
  subtitle: '乙醇发酵 1 葡萄糖 → 2 乙醇 + 2 CO₂（净得 2 ATP）；同型乳酸净得 2 ATP、异型仅 1；大肠杆菌 IMViC ++−−，产气肠杆菌 −−++；ABE 发酵 pH≈4.3 转溶剂（3:6:1）',
  draw,
})
