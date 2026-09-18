// im ch12-s3 IV 型超敏反应：迟发型 · 结核菌素试验 · 肉芽肿（39-g 批C）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // 副标题过长（scene 两行自动换行仍溢出）→ 手动三行渲染（原文未改动）
  b.ctext(700, 77, 'IV 型由致敏 Th1 与 CTL 介导，无抗体与补体参与，再次接触后 24–72 小时达峰，只能以淋巴细胞（不能以免疫血清）被动转移；', { size: 12, fill: C.mute })
  b.ctext(700, 94, '结核菌素试验以 PPD 皮内注射、48–72 小时读取硬结，阳性示细胞免疫致敏而非现症感染，重症免疫抑制者可呈假阴性；接触性皮炎由镍、漆酚、TNCB 等半抗原经朗格汉斯细胞提呈致敏 CTL/Th1，表位扩散使皮炎慢性化；', { size: 12, fill: C.mute })
  b.ctext(700, 111, '肉芽肿是持续性抗原驱动 Th1-M1 聚集的慢性 IV 型形态；IV 型与细胞免疫保护为同一机制的两面——适度清除病原、失度则组织损伤', { size: 12, fill: C.mute })

  // ============ 一、细胞基础与两阶段 ============
  b.panel(30, 132, 1340, 288, { title: '一、IV 型（迟发型）：致敏 Th1 与 CTL 介导——无抗体、无补体' })

  b.rect(60, 184, 620, 130, { fill: C.dnaL, fillOp: 0.35, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(78, 208, '致敏阶段（初次接触，约 1–2 周）', { size: 12.5, weight: 700, fill: C.dnaD })
  b.rect(84, 226, 160, 44, { fill: C.bg, stroke: C.dna, sw: 1.4, rx: 7 })
  b.ctext(164, 252, '抗原 / 半抗原', { size: 10.5, weight: 700, fill: C.dnaD })
  b.arrow(248, 248, 288, 248, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.rect(292, 226, 160, 44, { fill: C.bg, stroke: C.dna, sw: 1.4, rx: 7 })
  b.ctext(372, 252, '朗格汉斯细胞', { size: 10.5, weight: 700, fill: C.dnaD })
  b.arrow(456, 248, 496, 248, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.rect(500, 226, 160, 44, { fill: C.bg, stroke: C.dna, sw: 1.4, rx: 7 })
  b.ctext(580, 252, '致敏 Th1 / CTL', { size: 10.5, weight: 700, fill: C.dnaD })

  b.rect(710, 184, 620, 130, { fill: C.proL, fillOp: 0.45, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(728, 208, '效应阶段（再次接触，24–72 小时达峰）', { size: 12.5, weight: 700, fill: C.proD })
  b.rect(734, 226, 170, 44, { fill: C.bg, stroke: C.pro, sw: 1.4, rx: 7 })
  b.ctext(819, 244, '记忆 Th1 / CTL', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(819, 262, '再次识别同一抗原', { size: 9, fill: C.mute })
  b.arrow(908, 248, 948, 248, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.rect(952, 226, 160, 44, { fill: C.bg, stroke: C.pro, sw: 1.4, rx: 7 })
  b.ctext(1032, 244, 'IFN-γ 等动员', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(1032, 262, '巨噬细胞活化', { size: 9, fill: C.mute })
  b.arrow(1118, 248, 1158, 248, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.rect(1162, 226, 150, 44, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.4, rx: 7 })
  b.ctext(1237, 252, '硬结 · 损伤', { size: 10.5, weight: 700, fill: C.bad })

  b.rect(60, 328, 1240, 72, { fill: C.bg, stroke: C.acc, sw: 1.5, rx: 9 })
  b.wtext(80, 352, '铁证——被动转移实验：IV 型只能以淋巴细胞（不能以免疫血清）被动转移给正常个体；抗体与补体均不参与。', { size: 11, weight: 600, fill: C.accD, maxW: 1200, lh: 15 })
  b.wtext(80, 378, '「迟发」之名：效应细胞招募与活化需要时间，24–72 小时方达峰——与 I 型的数分钟形成鲜明对照。', { size: 10.5, fill: C.sub, maxW: 1200, lh: 14 })

  // ============ 二、结核菌素试验 ============
  b.panel(30, 434, 1340, 240, { title: '二、结核菌素试验（PPD 试验）：IV 型超敏反应的临床标尺' })

  b.timelineH(120, 560, 620, [
    { at: 0.02, label: '0 h：皮内注射 PPD', sub: '结核分枝杆菌纯蛋白衍生物', above: true, c: C.acc },
    { at: 0.4, label: '24 h：红斑渐起', sub: '记忆 T 募集途中', above: false, c: C.rna },
    { at: 0.72, label: '48–72 h：硬结达峰', sub: '读取硬结直径', above: true, c: C.bad },
    { at: 0.98, label: '数日：渐退', sub: '', above: false, c: C.mute },
  ], { title: '' })

  b.rect(790, 484, 540, 80, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(808, 508, '阳性 = 细胞免疫致敏', { size: 12.5, weight: 700, fill: C.dnaD })
  b.wtext(808, 530, '示机体对结核分枝杆菌已建立细胞免疫（感染或卡介苗），并非现症感染的诊断。', { size: 10.5, fill: C.sub, maxW: 505, lh: 15 })

  b.rect(790, 576, 540, 74, { fill: C.warnL, fillOp: 0.45, stroke: C.warn, sw: 1.6, rx: 9 })
  b.text(808, 600, '假阴性警报', { size: 12.5, weight: 700, fill: '#92400e' })
  b.wtext(808, 622, '重症免疫抑制者（如播散性结核、HIV 晚期）应答无力，可呈假阴性。', { size: 10.5, fill: C.sub, maxW: 505, lh: 15 })

  // ============ 三、接触性皮炎 · 肉芽肿 · 一体两面 ============
  b.panel(30, 688, 1340, 284, { title: '三、接触性皮炎与肉芽肿 · 四型超敏反应速览' })

  b.rect(60, 738, 620, 90, { fill: C.badL, fillOp: 0.3, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(78, 762, '接触性皮炎：半抗原的皮肤伏击战', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(78, 784, '镍、漆酚、TNCB 等小分子半抗原与皮肤蛋白结合，经朗格汉斯细胞提呈致敏 CTL/Th1；表位扩散可使皮炎慢性化与顽固化。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })

  b.rect(60, 840, 620, 104, { fill: C.rnaL, fillOp: 0.4, stroke: C.rna, sw: 1.6, rx: 9 })
  b.text(78, 864, '肉芽肿：持续性抗原的僵局', { size: 12.5, weight: 700, fill: C.rnaD })
  b.wtext(78, 886, '无法清除的抗原（如结核分枝杆菌）持续驱动 Th1-M1（活化巨噬细胞）聚集，形成慢性 IV 型形态——上皮样细胞与多核巨细胞围而不歼。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.wtext(78, 932, '一体两面：IV 型与细胞免疫保护为同一机制——适度清除病原，失度则成组织损伤。', { size: 10.5, weight: 700, fill: C.rnaD, maxW: 580, lh: 14 })

  b.table(710, 744, 630, {
    headers: ['分型', '介导物', '达峰时相', '代表性疾病'],
    colW: [70, 200, 160, 200],
    rowH: 36,
    fontSize: 10,
    rows: [
      ['I 型', 'IgE-FcεRI-肥大细胞', '数分钟', '过敏性休克、哮喘'],
      ['II 型', 'IgG/IgM，补体-吞噬-ADCC', '分钟至数小时', '输血反应、Graves 病'],
      ['III 型', '中等大小可溶性 IC', '数小时至数天', '血清病（7–14 天）、狼疮肾炎'],
      ['IV 型', 'Th1 与 CTL，无抗体', '24–72 小时', '结核菌素反应、接触性皮炎'],
    ],
  })
}

export default scene({
  title: 'IV 型超敏反应：迟发型的细胞基础、结核菌素试验与肉芽肿',
  draw,
})
