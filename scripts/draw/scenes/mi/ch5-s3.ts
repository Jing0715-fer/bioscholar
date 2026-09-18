// mi ch5-s3 营养物质的跨膜运输（39-f 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、四种运输方式机制图 ============
  b.panel(30, 132, 1340, 420, { title: '一、四种跨膜运输方式：是否需要载体、是否耗能、能否逆浓度、是否化学修饰' })

  const cells: Array<[number, string, string, string]> = [
    [210, '① 单纯扩散', '顺浓度', 'simple diffusion'],
    [545, '② 促进扩散', '顺浓度', 'facilitated diffusion'],
    [880, '③ 主动运输', '逆浓度', 'active transport'],
    [1215, '④ 基团转位（PTS）', '逆浓度 + 化学修饰', 'group translocation'],
  ]
  cells.forEach(([cx, t, mode, en]) => {
    b.ctext(cx, 186, t, { size: 14, weight: 700, fill: C.ink })
    b.ctext(cx, 206, mode, { size: 10, weight: 700, fill: mode.includes('顺') ? C.ok : C.bad })
    b.ctext(cx, 466, en, { size: 9.5, fill: C.faint, ls: 0.5 })
  })

  const memb = (cx: number) => {
    b.bilayer(cx - 145, 318, 290, { h: 12, tint: C.dna })
    b.ctext(cx - 118, 288, '胞外', { size: 10, weight: 700, fill: C.mute })
    b.ctext(cx - 118, 372, '胞内', { size: 10, weight: 700, fill: C.mute })
  }
  memb(210); memb(545); memb(880); memb(1215)

  // ① 单纯扩散：小分子双向流动
  b.ion(165, 278, 'O₂', { r: 13, size: 10, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.ion(210, 278, 'CO₂', { r: 13, size: 10, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.ion(255, 278, 'H₂O', { r: 13, size: 10, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.line(180, 300, 180, 360, { stroke: C.mute, sw: 2, marker: 'mute', markerStart: 'mute' })
  b.line(240, 300, 240, 360, { stroke: C.mute, sw: 2, marker: 'mute', markerStart: 'mute' })
  b.wtext(85, 404, '无载体、不耗能；双向流动至浓度相等（平衡）为止。', { size: 10.5, fill: C.sub, maxW: 250, lh: 16 })
  b.wtext(85, 436, '仅 O₂、CO₂、水、乙醇等小分子可循此入胞。', { size: 10.5, fill: C.sub, maxW: 250, lh: 16 })

  // ② 促进扩散：特异载体
  b.rect(522, 306, 46, 36, { fill: C.proL, stroke: C.pro, sw: 2, rx: 9 })
  b.ion(545, 278, 'G', { r: 12, size: 11, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.ion(545, 366, 'G', { r: 12, size: 11, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.arrow(545, 292, 545, 352, { stroke: C.enz, sw: 2.2, marker: 'enz', dash: '6 4' })
  b.ctext(585, 330, '特异载体', { size: 10, weight: 700, fill: C.proD })
  b.wtext(420, 404, '特异性渗透酶加速运输；速率呈饱和曲线；', { size: 10.5, fill: C.sub, maxW: 250, lh: 16 })
  b.wtext(420, 436, '仍顺浓度、不耗能（如酵母吸收葡萄糖）。', { size: 10.5, fill: C.sub, maxW: 250, lh: 16 })

  // ③ 主动运输：耗能逆浓度
  b.rect(857, 306, 46, 36, { fill: C.proL, stroke: C.pro, sw: 2, rx: 9 })
  b.ion(880, 278, 'AA', { r: 12, size: 10, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.ion(855, 366, 'AA', { r: 10, size: 9, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.ion(880, 366, 'AA', { r: 10, size: 9, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.ion(905, 366, 'AA', { r: 10, size: 9, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.arrow(880, 292, 880, 352, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.circle(955, 268, 17, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
  b.ctext(955, 272, 'ATP', { size: 9, weight: 700, fill: '#78350f' })
  b.arrow(938, 282, 908, 306, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.wtext(755, 404, '耗 ATP 或质子动力，逆浓度富集底物；ABC', { size: 10.5, fill: C.sub, maxW: 250, lh: 16 })
  b.wtext(755, 436, '转运体依赖周质结合蛋白——营养吸收主力。', { size: 10.5, fill: C.sub, maxW: 250, lh: 16 })

  // ④ 基团转位：PTS 磷酸化
  b.ion(1160, 278, 'G', { r: 12, size: 11, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.rect(1192, 306, 46, 36, { fill: C.proL, stroke: C.pro, sw: 2, rx: 9 })
  b.ctext(1215, 328, '酶Ⅱ', { size: 10, weight: 700, fill: C.proD })
  b.ion(1280, 370, 'G-6-P', { r: 16, size: 9.5, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.arrow(1172, 290, 1192, 304, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.arrow(1238, 342, 1266, 360, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.tag(1170, 368, '酶Ⅰ → HPr → 酶Ⅱ 级联', { fill: C.panelB, stroke: C.sub, size: 9.5, weight: 700, tfill: C.ink, pad: 7 })
  b.arrow(1190, 356, 1213, 344, { stroke: C.sub, sw: 1.6, marker: 'mute' })
  b.wtext(1090, 404, 'PTS 级联把葡萄糖磷酸化为 6-磷酸葡萄糖', { size: 10.5, fill: C.sub, maxW: 250, lh: 16 })
  b.wtext(1090, 436, '「锁入」胞内；每分子糖耗 1 分子 PEP。', { size: 10.5, fill: C.sub, maxW: 250, lh: 16 })

  // ============ 二、四方式对照表 ============
  b.panel(30, 562, 1340, 260, { title: '二、四种运输方式的比较' })
  b.table(50, 598, 1240, {
    headers: ['比较项目', '单纯扩散', '促进扩散', '主动运输', '基团转位'],
    colW: [150, 246, 252, 286, 306],
    rowH: 40,
    fontSize: 12,
    rows: [
      ['载体蛋白', '无', '有（特异渗透酶）', '有（ABC 转运体等）', '有（酶Ⅱ复合体）'],
      ['能量消耗', '不耗能', '不耗能', '耗 ATP / 质子动力', '耗 PEP（1 分子/糖）'],
      ['浓度方向', '顺浓度，双向至平衡', '顺浓度，单向加速', '逆浓度梯度富集', '逆浓度（修饰后锁定）'],
      ['运输前后分子', '不变', '不变', '不变', '葡萄糖 → 6-磷酸葡萄糖'],
    ],
  })
  b.ctext(670, 800, '判定四维度：载体 · 能量 · 浓度方向 · 化学修饰——基团转位是唯一使被运分子发生化学改变的运输方式', { size: 11, fill: C.mute })

  // ============ 三、两个数字实例 ============
  b.panel(30, 842, 1340, 138, { title: '三、两个经典计量实例' })
  b.rect(50, 874, 620, 88, { fill: C.accL, fillOp: 0.35, stroke: C.acc, sw: 1.4, rx: 9 })
  b.text(70, 900, '大肠杆菌乳糖透过酶（LacY）——次级主动运输', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(70, 924, '每运入 1 分子乳糖，同向偶联转运 1 个 H⁺——由呼吸链泵出质子形成的质子动力驱动。', { size: 11, fill: C.sub, maxW: 580, lh: 16 })
  b.rect(690, 874, 650, 88, { fill: C.proL, fillOp: 0.3, stroke: C.pro, sw: 1.4, rx: 9 })
  b.text(710, 900, '真核细胞 Na⁺/K⁺ 泵——初级主动运输范例', { size: 12.5, weight: 700, fill: C.proD })
  b.wtext(710, 924, '每消耗 1 分子 ATP，泵出 3 个 Na⁺、泵入 2 个 K⁺——帮助建立直观类比。', { size: 11, fill: C.sub, maxW: 610, lh: 16 })
}

export default scene({
  title: '营养物质的跨膜运输：单纯扩散、促进扩散、主动运输与基团转位',
  subtitle: '单纯扩散无载体不耗能（O₂/CO₂/水）；主动运输耗能逆浓度富集；PTS 以酶Ⅰ→HPr→酶Ⅱ级联磷酸化葡萄糖（每分子糖耗 1 PEP）；LacY 每运 1 乳糖偶联 1 H⁺',
  draw,
})
