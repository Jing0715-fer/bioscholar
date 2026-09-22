// em ch3-s4 明场、暗场与扫描透射模式（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、明场、暗场与中心暗场 ============
  b.panel(30, 132, 700, 320, { title: '一、明场、暗场与中心暗场：光阑位置的三种选择' })
  const col = (cx: number, t: string, mode: 'bf' | 'df' | 'cdf', cap: string, tfill: string, stroke: string) => {
    b.tag(cx, 172, t, { fill: C.bg, stroke, tfill, size: 12.5, weight: 700, pad: 9 })
    b.rect(cx - 58, 190, 116, 116, { fill: C.ink, rx: 3 })
    if (mode === 'cdf') {
      b.circle(cx - 30, 276, 4, { fill: '#94a3b8' })
      b.circle(cx, 248, 4.5, { fill: '#f8fafc' })
      b.circle(cx, 248, 15, { stroke: C.warn, sw: 2.5 })
    } else {
      b.circle(cx, 248, 5, { fill: '#f8fafc' })
      ;[[cx - 32, 216], [cx + 32, 216], [cx - 32, 280], [cx + 32, 280]].forEach(([x, y]) => b.circle(x, y, 3.5, { fill: '#e2e8f0' }))
      if (mode === 'bf') b.circle(cx, 248, 15, { stroke: C.warn, sw: 2.5 })
      else b.circle(cx + 32, 216, 13, { stroke: C.warn, sw: 2.5 })
    }
    b.arrow(cx, 312, cx, 320, { stroke: C.mute, sw: 1.6, marker: 'mute' })
    if (mode === 'bf') {
      b.rect(cx - 58, 324, 116, 54, { fill: '#e2e8f0' })
      b.ellipse(cx, 352, 30, 14, { fill: C.ink, fillOp: 0.72 })
      b.ellipse(cx - 26, 342, 12, 8, { fill: C.ink, fillOp: 0.5 })
    } else {
      b.rect(cx - 58, 324, 116, 54, { fill: C.ink })
      b.circle(cx + (mode === 'df' ? 10 : 0), 352, mode === 'df' ? 9 : 11, { fill: mode === 'df' ? '#f8fafc' : '#ffffff' })
      b.circle(cx - 16, 340, 5, { fill: '#cbd5e1' })
    }
    b.wtext(cx - 95, 396, cap, { size: 9.5, fill: C.sub, maxW: 190, lh: 13 })
  }
  col(145, '明场 BF', 'bf', '放行中心束与近角散射（合计半角约 10 mrad 内）；厚区、重元素区显暗', C.accD, C.acc)
  col(365, '暗场 DF', 'df', '光阑移到某衍射斑上：只有满足该衍射条件的晶区显亮，其余全暗', C.enzD, C.enz)
  col(585, '中心暗场 CDF', 'cdf', '束倾转把衍射斑挪到光轴——像差更小、质量更高的暗场', C.proD, C.pro)
  b.wtext(50, 430, '双束条件下衍衬像最锐利，g·b 不可见判据可实验测定位错滑移系统；等厚、等倾条纹分别标记厚度变化与弯曲梯度。明场对厚度的宽容度并不大——生物树脂切片经验上控制在约 100 nm 内才保得住信息量。', { size: 10.5, fill: C.sub, maxW: 660, lh: 15 })

  // ============ 二、STEM：探针逐点扫描 ============
  b.panel(750, 132, 620, 320, { title: '二、STEM：探针逐点扫描，探测器按散射角分区' })
  b.rect(830, 172, 60, 8, { fill: C.sub })
  b.line(840, 182, 860, 236, { stroke: C.acc, sw: 1.6 })
  b.line(880, 182, 860, 236, { stroke: C.acc, sw: 1.6 })
  b.line(815, 222, 905, 222, { stroke: C.mute, sw: 1.3, dash: '4 4', marker: 'mute', markerStart: 'mute' })
  b.ctext(860, 214, '逐点扫描', { size: 9.5, fill: C.mute })
  b.circle(860, 240, 3.2, { fill: C.acc })
  b.rect(825, 246, 70, 4, { fill: C.enz })
  b.ctext(860, 268, '探针 0.05–0.2 nm', { size: 10, weight: 600, fill: C.sub })
  b.line(860, 252, 860, 392, { stroke: C.acc, sw: 1.6 })
  b.line(860, 252, 839, 392, { stroke: C.enz, sw: 1.6 })
  b.line(860, 252, 881, 392, { stroke: C.enz, sw: 1.6 })
  b.line(860, 252, 818, 390, { stroke: C.bad, sw: 1.6 })
  b.line(860, 252, 902, 390, { stroke: C.bad, sw: 1.6 })
  b.circle(860, 400, 9, { fill: C.acc, fillOp: 0.85 })
  b.circle(860, 400, 21, { stroke: C.enz, sw: 8, fill: 'none' })
  b.circle(860, 400, 36, { stroke: C.bad, sw: 10, fill: 'none' })
  b.legend(770, 444, [['BF 小于约 10 mrad', C.acc], ['ADF 30–100 mrad', C.enz], ['HAADF 大于 50–100 mrad', C.bad]], { size: 10.5, gap: 16 })
  b.wtext(960, 190, '聚光镜与物镜合轴组成探针形成系统，把电子压成直径 0.05–0.2 nm（校正后小于 0.1 nm）的探针；每像素驻留从微秒到毫秒、探针电流 pA 到几十 pA——扫描参数本身就是剂量分配工具。', { size: 11, fill: C.sub, maxW: 390, lh: 16 })
  b.rect(960, 268, 390, 96, { fill: C.badL, fillOp: 0.55, stroke: C.bad, sw: 1.5, rx: 8 })
  b.wtext(972, 288, 'HAADF 只收大角卢瑟福散射：非相干 Z 衬度，亮度约按 Z 的 1.6–2 次方增长；原子柱位置即亮度峰，可以直接读、不会随离焦反号——与相位衬度的「反转与零点」形成鲜明对照。', { size: 10.5, fill: C.sub, maxW: 366, lh: 15 })
  b.wtext(960, 390, '克鲁 1970 年用环形探测器分辨单个重原子（第 1 章），正是这一探测哲学的奠基礼。', { size: 10.5, fill: C.sub, maxW: 390, lh: 15 })

  // ============ 三、HAADF 的 Z 衬度与 4D-STEM ============
  b.panel(30, 472, 700, 260, { title: '三、HAADF 的 Z 衬度与 4D-STEM：重新分配散射预算' })
  b.rect(60, 516, 250, 150, { fill: C.ink, rx: 3 })
  ;[105, 265].forEach(x => { b.circle(x, 545, 7, { fill: '#f8fafc' }); b.circle(x, 645, 7, { fill: '#f8fafc' }) })
  ;[185].forEach(x => b.circle(x, 595, 7, { fill: '#f8fafc' }))
  b.circle(105, 595, 3.5, { fill: '#94a3b8' })
  b.circle(265, 595, 3.5, { fill: '#94a3b8' })
  b.circle(185, 545, 3.5, { fill: '#94a3b8' })
  b.circle(185, 645, 3.5, { fill: '#94a3b8' })
  b.ctext(185, 688, 'HAADF 像示意：重原子亮、轻原子暗', { size: 10.5, weight: 600, fill: C.sub })
  b.wtext(340, 520, '把环形探测器换成像素阵列探测器，在每个探针位置记录一整幅二维衍射图（扫描二维 × 衍射二维），即得四维数据集——4D-STEM：', { size: 11, fill: C.sub, maxW: 360, lh: 16 })
  b.tag(520, 586, '事后重构探测器：同一数据当明场或任意环形', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 8 })
  b.tag(520, 624, '叠层成像：迭代相位恢复，轻元素灵敏度超 HAADF', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 10.5, weight: 700, pad: 8 })
  b.tag(520, 662, '差分相衬（DPC）：衍射图重心偏移读出电场磁场', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 10.5, weight: 700, pad: 8 })
  b.wtext(340, 700, '数据量单数据集可达 TB 级，算力即分辨率；冷冻厚样品的低剂量 STEM 断层是生物侧的特种路线。', { size: 10.5, fill: C.sub, maxW: 360, lh: 15 })

  // ============ 四、模式对照表 ============
  b.panel(750, 472, 620, 260, { title: '四、BF / DF / HAADF 成像模式对照' })
  b.table(760, 500, 600, {
    headers: ['模式', '收集信号与角度', '衬度机制'],
    colW: [104, 236, 260], rowH: 24, fontSize: 10.5,
    rows: [
      ['TEM 明场', '中心束 + 近角（约 10 mrad 内）', '质厚为主、相位为辅'],
      ['TEM 暗场', '单支衍射束（中心暗场更优）', '衍射衬度'],
      ['STEM BF', '内角小于约 10 mrad', '相位衬度'],
      ['STEM ADF', '环形约 30–100 mrad', '部分非相干、对缺陷敏感'],
      ['STEM HAADF', '大于约 50–100 mrad', '非相干 Z 衬度，可直读无反号'],
      ['4D-STEM', '每点全衍射图', '相位恢复 / 叠层 / 差分相衬'],
    ],
  })
  b.wtext(760, 700, '分工读表即得：要「形态」用明场，要「取向与缺陷」用暗场/衍衬，要「哪种原子在哪」用 HAADF，要「轻元素的相位与场」用 4D-STEM。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
}

export default scene({
  title: '明场、暗场与扫描透射模式：光阑与探测器的收账哲学',
  subtitle: '明场放行中心束（约 10 mrad 内）质厚衬度；暗场只取一支衍射束、中心暗场更优；STEM 探针 0.05–0.2 nm 逐点扫描，HAADF 亮度约按 Z 的 1.6–2 次方增长、不随离焦反号',
  draw,
})
