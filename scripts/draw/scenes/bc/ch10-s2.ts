// bc ch10-s2 酮体的生成与利用（39-a 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、酮体的生成（肝细胞线粒体） ============
  b.panel(30, 132, 700, 430, { title: '一、酮体的生成：肝细胞线粒体（仅在肝内合成）' })
  b.rect(56, 168, 100, 32, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(106, 188, '脂肪酸', { size: 11.5, fill: C.ink })
  b.arrow(158, 184, 205, 184, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(182, 172, 'β-氧化', { size: 9, fill: C.mute })
  b.rect(208, 168, 130, 32, { fill: C.rnaL, fillOp: 0.55, stroke: C.rna, sw: 1.5, rx: 7 })
  b.ctext(273, 188, '2 × 乙酰CoA', { size: 11.5, weight: 700, fill: C.rnaD })
  b.arrow(273, 200, 273, 226, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(213, 228, 120, 32, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(273, 248, '乙酰乙酰CoA', { size: 11.5, fill: C.ink })
  b.tag(415, 214, '乙酰乙酰CoA 硫解酶', { fill: C.panelB, stroke: C.sub, size: 10, weight: 600, tfill: C.sub, pad: 5 })
  b.arrow(273, 260, 273, 286, { stroke: C.enz, sw: 3, marker: 'enz' })
  b.rect(208, 288, 130, 32, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(273, 308, 'HMG-CoA', { size: 11.5, fill: C.ink })
  b.tag(430, 274, 'HMG-CoA 合酶（限速酶）', { fill: C.enzL, stroke: C.enz, size: 11, weight: 700, tfill: C.enzD, pad: 6 })
  b.arrow(273, 320, 273, 346, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.tag(415, 333, 'HMG-CoA 裂解酶', { fill: C.panelB, stroke: C.sub, size: 10, weight: 600, tfill: C.sub, pad: 5 })
  b.rect(208, 348, 130, 32, { fill: C.warnL, fillOp: 0.6, stroke: C.warn, sw: 1.6, rx: 7 })
  b.ctext(273, 368, '乙酰乙酸', { size: 12, weight: 700, fill: '#78350f' })
  b.ctext(273, 396, '约 30%', { size: 10, fill: C.mute })
  b.arrow(230, 380, 160, 430, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.tag(160, 415, 'β-羟丁酸脱氢酶（NADH）', { fill: C.panelB, stroke: C.sub, size: 9, weight: 600, tfill: C.sub, pad: 4 })
  b.rect(78, 432, 160, 40, { fill: C.warnL, fillOp: 0.6, stroke: C.warn, sw: 1.5, rx: 7 })
  b.ctext(158, 448, 'D-β-羟丁酸', { size: 12, weight: 700, fill: '#78350f' })
  b.ctext(158, 464, '约 70%（严格说不是酮）', { size: 9.5, fill: C.mute })
  b.arrow(316, 380, 386, 430, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.ctext(352, 415, '自发脱羧', { size: 9, fill: C.mute })
  b.rect(310, 432, 150, 40, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(385, 448, '丙酮（微量）', { size: 12, weight: 700, fill: C.sub })
  b.ctext(385, 464, '经呼吸道排出', { size: 9.5, fill: C.mute })
  b.wtext(510, 190, '脂肪酸动员增强（饥饿 · 糖利用障碍）→ 肝内乙酰CoA 暴增、草酰乙酸被糖异生抽调 → 转向生酮。', { size: 10.5, fill: C.sub, maxW: 190, lh: 15 })
  b.wtext(510, 288, '胰岛素抑制脂解，从而抑制生酮。', { size: 10.5, fill: C.sub, maxW: 190, lh: 15 })
  b.tag(600, 460, '酮体 = 三者总称', { fill: C.warnL, stroke: C.warn, size: 11, weight: 700, tfill: '#78350f', pad: 6 })

  // ============ 二、酮体的利用（肝外） ============
  b.panel(750, 132, 620, 430, { title: '二、酮体的利用：肝内生成 → 肝外利用' })
  b.cell(870, 262, 82, 88, { label: '肝' })
  b.ctext(870, 288, '生成酮体', { size: 10, weight: 700, fill: C.ink })
  b.wtext(870, 306, '缺乏 SCOT（琥珀酰CoA 转硫酶），乙酰乙酸硫激酶活性极低 → 自身不能利用', { size: 9.5, fill: C.mute, maxW: 130, lh: 13, anchor: 'middle' })
  b.cell(1230, 262, 92, 88, { label: '肝外组织' })
  b.ctext(1230, 288, '心 · 肾 · 脑 · 骨骼肌', { size: 10, weight: 700, fill: C.ink })
  b.ctext(1230, 306, '线粒体内氧化酮体', { size: 9.5, fill: C.mute })
  b.arrow(958, 240, 1132, 240, { stroke: C.bad, sw: 2.6, marker: 'bad' })
  b.ctext(1045, 226, '酮体（血）', { size: 11.5, weight: 700, fill: C.bad })
  b.wtext(766, 366, 'D-β-羟丁酸先经 β-羟丁酸脱氢酶（NAD⁺）氧化为乙酰乙酸，再进入利用：', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  b.rect(790, 396, 130, 32, { fill: C.warnL, fillOp: 0.6, stroke: C.warn, sw: 1.5, rx: 7 })
  b.ctext(855, 416, '乙酰乙酸', { size: 11.5, weight: 700, fill: '#78350f' })
  b.ion(1000, 412, '＋琥珀酰CoA', { r: 30, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 9 })
  b.arrow(1046, 412, 1090, 412, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.tag(1170, 412, 'SCOT 转硫酶', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 5 })
  b.rect(1240, 396, 110, 32, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(1295, 416, '乙酰乙酰CoA', { size: 10.5, weight: 700, fill: C.ink })
  b.ctext(1295, 444, '＋ 琥珀酸', { size: 9.5, fill: C.mute })
  b.arrow(855, 428, 855, 458, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(790, 460, 130, 32, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(855, 480, '2 × 乙酰CoA', { size: 11.5, weight: 700, fill: C.ink })
  b.arrow(920, 476, 1010, 476, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.tag(1070, 476, 'TCA 彻底氧化', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: '#065f46', pad: 5 })
  b.rect(766, 506, 300, 44, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.6, rx: 8 })
  b.text(780, 524, '每分子乙酰乙酸 ≈ 23.5 ATP（活化耗 1 GTP 当量）', { size: 10.5, weight: 700, fill: '#065f46' })
  b.text(780, 542, 'β-羟丁酸 ≈ 26 ATP', { size: 10.5, weight: 700, fill: '#065f46' })
  b.wtext(1090, 524, '肝「只产不用」，保证酮体作为输出能源。', { size: 10.5, fill: C.sub, maxW: 250, lh: 15 })

  // ============ 三、生理意义 ============
  b.panel(30, 566, 700, 414, { title: '三、生理意义：脂肪酸的「水溶性运输形式」' })
  b.ctext(280, 646, '长期饥饿时脑的能量来源', { size: 13, weight: 700, fill: C.ink })
  b.rect(70, 668, 420, 44, { fill: C.rna, fillOp: 0.8, stroke: C.rna, sw: 1.5 })
  b.ctext(196, 695, '酮体 50%~70%', { size: 12.5, weight: 700, fill: '#ffffff' })
  b.rect(490, 668, 180, 44, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.ctext(580, 695, '葡萄糖 30%~50%', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(280, 738, '分子小 · 水溶性 —— 可通过血脑屏障与肌肉毛细血管壁', { size: 11, fill: C.sub })
  const pts3 = [
    '· 饥饿时脑的重要替代能源：长期饥饿可满足脑 50%~70% 的能量需要',
    '· 心脏也「偏爱」酮体作为燃料',
    '· 酮症（生理性代偿）：长期饥饿、高脂低糖饮食 → 血酮升高，血糖尚可维持',
  ]
  pts3.forEach((s, i) => b.wtext(70, 780 + i * 34, s, { size: 11.5, fill: C.sub, maxW: 630, lh: 16 }))
  b.wtext(70, 900, '酮体把肝内不溶的脂肪酸打包成可溶的小分子，经血运往肝外——是脂肪酸的「水溶性运输形式」。', { size: 11, fill: C.mute, maxW: 630, lh: 16 })
  b.ctext(380, 958, '饥饿 · 糖利用障碍 → 脂肪动员 → 生酮', { size: 11, weight: 700, fill: C.rnaD })

  // ============ 四、酮症酸中毒 ============
  b.panel(750, 566, 620, 414, { title: '四、酮症酸中毒（DKA）：糖尿病常见急症' })
  const chain = [
    ['1 型糖尿病：胰岛素绝对缺乏', C.badL, C.bad],
    ['脂解失控 · 脂肪酸大量入肝', C.badL, C.bad],
    ['酮体生成超量（血酮 > 4 mmol/L）', C.warnL, C.warn],
    ['乙酰乙酸 / β-羟丁酸（强酸）堆积 → 酸中毒', C.badL, C.bad],
  ]
  chain.forEach(([t, fl, st], i) => {
    const y = 614 + i * 76
    b.rect(800, y, 340, 40, { fill: fl, fillOp: 0.55, stroke: st, sw: 1.6, rx: 8 })
    b.ctext(970, y + 24, t, { size: 11.5, weight: 700, fill: st === C.warn ? '#78350f' : C.bad })
    if (i < 3) b.arrow(970, y + 40, 970, y + 64, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  })
  const signs = ['Kussmaul 深大呼吸', '脱水', '酮尿', '重者昏迷']
  signs.forEach((s, i) => {
    b.tag(830 + i * 118, 930, s, { fill: C.panelB, stroke: C.bad, size: 9.5, weight: 700, tfill: C.bad, pad: 4 })
  })
  b.rect(1170, 614, 176, 108, { fill: C.warnL, fillOp: 0.5, stroke: C.warn, sw: 1.5, rx: 8 })
  b.ctext(1258, 638, '「烂苹果味」', { size: 12, weight: 700, fill: '#78350f' })
  b.wtext(1180, 660, '丙酮经呼吸道排出，呼气烂苹果味是酮症酸中毒的体征线索。', { size: 10, fill: C.sub, maxW: 156, lh: 14 })
  b.rect(1170, 738, 176, 118, { fill: C.panel, stroke: C.line, sw: 1.3, rx: 8 })
  b.ctext(1258, 760, '「三多一少」', { size: 12, weight: 700, fill: C.ink })
  b.wtext(1180, 782, '多食 · 多饮 · 多尿 · 体重减少——葡萄糖不能利用，血糖高渗利尿失水，脂解与蛋白分解代偿产酮。', { size: 10, fill: C.sub, maxW: 156, lh: 14 })
  b.wtext(766, 968, '生酮饮食（高脂低糖）可用于治疗难治性癫痫。', { size: 10.5, fill: C.mute, maxW: 600, lh: 14 })
}

export default scene({
  title: '酮体的生成与利用：肝内生成、肝外氧化',
  subtitle: 'HMG-CoA 合酶限速（肝线粒体），产物乙酰乙酸 ~30% / β-羟丁酸 ~70% / 丙酮微量；肝缺 SCOT 只产不用，肝外氧化得 23.5 / 26 ATP，饥饿时供脑 50%~70% 能量',
  draw,
})
