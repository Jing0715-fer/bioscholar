// im ch2-s4 淋巴细胞再循环与归巢（39-g 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、再循环环路 ============
  b.panel(30, 132, 1340, 300, { title: '一、淋巴细胞再循环：血液 — 淋巴组织 — 淋巴液之间的巡逻环路' })

  b.rect(100, 210, 180, 64, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.8, rx: 9 })
  b.ctext(190, 238, '血液', { size: 14.5, weight: 700, fill: C.bad })
  b.ctext(190, 260, '只是通道，非居所', { size: 10.5, fill: C.sub })
  b.arrow(284, 242, 396, 242, { stroke: C.mute, sw: 2.2, marker: 'mute' })
  b.rect(400, 200, 250, 64, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.8, rx: 9 })
  b.ctext(525, 226, '高内皮静脉（HEV）', { size: 13.5, weight: 700, fill: C.accD })
  b.ctext(525, 250, '穿壁进入淋巴结（四步级联）', { size: 10.5, fill: C.sub })
  b.arrow(525, 268, 525, 316, { stroke: C.mute, sw: 2.2, marker: 'mute' })
  b.rect(400, 320, 250, 64, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.8, rx: 9 })
  b.ctext(525, 346, '淋巴结（淋巴组织）', { size: 13.5, weight: 700, fill: C.dnaD })
  b.ctext(525, 370, '遇抗原 → 增殖放大应答', { size: 10.5, fill: C.sub })
  b.arrow(654, 352, 796, 352, { stroke: C.mute, sw: 2.2, marker: 'mute' })
  b.rect(800, 320, 250, 64, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 1.8, rx: 9 })
  b.ctext(925, 346, '输出淋巴管', { size: 13.5, weight: 700, fill: C.rnaD })
  b.ctext(925, 370, '携带淋巴细胞汇入淋巴液', { size: 10.5, fill: C.sub })
  b.polyline([[925, 318], [925, 192], [190, 192], [190, 206]], { stroke: C.mute, sw: 2.2, marker: 'mute' })
  b.ctext(560, 186, '经胸导管回流入血', { size: 11.5, weight: 600, fill: C.mute })
  b.ctext(560, 412, '血液只是通道：淋巴细胞在血中每次仅停留约半小时', { size: 11.5, weight: 700, fill: C.ink })

  // 意义卡
  b.rect(1090, 186, 260, 218, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
  b.ctext(1220, 212, '再循环的生理意义', { size: 13.5, weight: 700, fill: C.ink })
  const sigs = [
    '低频克隆 · 全域监视',
    '抗原位点的应答放大',
    '记忆细胞快速部署',
    '淋巴细胞池稳态维持',
  ]
  sigs.forEach((s, i) => {
    b.circle(1112, 240 + i * 38, 3.5, { fill: C.acc })
    b.text(1124, 244 + i * 38, s, { size: 11.5, fill: C.sub })
  })

  // ============ 二、HEV 四步级联 ============
  b.panel(30, 448, 1340, 250, { title: '二、高内皮静脉（HEV）：淋巴细胞进场的四步级联' })

  b.bilayer(100, 498, 780, { tint: C.bad, op: 0.55 })
  b.bilayer(100, 592, 780, { tint: C.bad, op: 0.55 })
  // 腔面标注
  b.ctext(210, 532, '① 滚动', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(400, 532, '② 趋化激活', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(590, 532, '③ 牢固黏附', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(760, 532, '④ 穿壁', { size: 11.5, weight: 700, fill: C.dnaD })
  // ① 滚动细胞
  b.circle(210, 572, 12, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  ;[168, 180, 192].forEach(x => b.line(x, 564, x + 8, 560, { stroke: C.faint, sw: 1.6 }))
  // ② CCR7 细胞 + CCL21
  b.circle(400, 572, 12, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.circle(394, 562, 2.8, { fill: C.acc })
  b.circle(406, 562, 2.8, { fill: C.acc })
  b.ion(452, 545, 'CCL21', { r: 17, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 9 })
  b.arrow(434, 552, 412, 564, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  // ③ 变扁黏附
  b.ellipse(590, 578, 14, 8, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.circle(583, 586, 2.6, { fill: C.pro })
  b.circle(597, 586, 2.6, { fill: C.pro })
  // ④ 穿壁
  b.circle(780, 598, 11, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.arrow(780, 612, 780, 636, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.ctext(780, 652, '淋巴结实质', { size: 10.5, weight: 700, fill: C.dnaD })

  b.ctext(440, 626, '高内皮静脉（HEV）：淋巴细胞进入淋巴结的主要门户', { size: 12, weight: 600, fill: C.ink })

  const steps = [
    '① 滚动 — L-选择素与 HEV 配体疏松结合',
    '② 趋化激活 — CCR7 感知 CCL21',
    '③ 牢固黏附 — LFA-1 变构锁定',
    '④ 穿壁 — 经内皮间隙进入实质',
  ]
  steps.forEach((s, i) => {
    b.circle(942, 506 + i * 42, 11, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
    b.ctext(942, 510 + i * 42, `${i + 1}`, { size: 11, weight: 700, fill: C.dnaD })
    b.text(962, 510 + i * 42, s.slice(2), { size: 12, fill: C.sub })
  })

  // ============ 三、分子邮政编码与三种巡回 ============
  b.panel(30, 714, 1340, 264, { title: '三、归巢受体与地址素：分子邮政编码决定去向；三种巡回模式' })

  b.table(60, 778, 620, {
    title: '归巢受体 × 地址素：分子邮政编码',
    headers: ['归巢受体（淋巴细胞）', '地址素 / 配体（血管侧）', '主要靶位'],
    colW: [190, 210, 220],
    rowH: 46,
    fontSize: 12,
    rows: [
      ['L-选择素', 'PNAd', '外周淋巴结'],
      ['α4β7 整合素', 'MAdCAM-1', '黏膜淋巴组织'],
    ],
  })
  b.wtext(60, 942, 'S1P 门禁轴：调控淋巴细胞自组织迁出的门控梯度，是迁移阻断疗法的靶点。', { size: 11, fill: C.mute, maxW: 600, lh: 16 })

  const modes: Array<[string, string, string, string]> = [
    ['初始 T / B 细胞', '限于血液 ↔ 淋巴器官循环（经 HEV 进出）', C.acc, C.accD],
    ['效应 T 细胞', '离开循环，进入炎症组织执行效应功能', C.dna, C.dnaD],
    ['驻留记忆 T 细胞（Trm）', '以 CD69 与 CD103 锚定组织，不再入血', C.pro, C.proD],
  ]
  modes.forEach(([t, s, col, colD], i) => {
    const yy = 760 + i * 64
    b.rect(700, yy, 640, 54, { fill: col, fillOp: 0.08, stroke: col, sw: 1.6, rx: 9 })
    b.text(718, yy + 24, t, { size: 13, weight: 700, fill: colD })
    b.text(718, yy + 44, s, { size: 11, fill: C.sub })
  })
}

export default scene({
  title: '淋巴细胞再循环与归巢：巡逻环路、高内皮静脉与分子邮政编码',
  subtitle: '淋巴细胞在血中每次仅停留约半小时，经 HEV 的滚动—趋化—黏附—穿壁四步级联进入淋巴结；L-选择素-PNAd 通往淋巴结、α4β7-MAdCAM-1 通往黏膜；初始细胞循环于血液-淋巴器官、效应细胞入炎症组织、Trm 以 CD69/CD103 驻留组织',
  draw,
})
