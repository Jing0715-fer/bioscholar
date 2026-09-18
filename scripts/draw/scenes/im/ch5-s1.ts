// im ch5-s1 抗原的基本特性：免疫原性与反应原性（39-g 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、一体两面 ============
  b.panel(30, 132, 1340, 270, { title: '一、抗原的一体两面：免疫原性与反应原性彼此独立' })

  b.tag(700, 210, '抗 原', { fill: C.ink, stroke: C.ink, tfill: '#ffffff', size: 19, weight: 700, pad: 18 })

  b.rect(60, 176, 420, 130, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.8, rx: 9 })
  b.ctext(270, 206, '免疫原性', { size: 16, weight: 700, fill: C.dnaD })
  b.wtext(80, 234, '诱导机体产生免疫应答的能力——刺激机体生成抗体与致敏淋巴细胞等应答产物。', { size: 11.5, fill: C.sub, maxW: 380, lh: 17 })
  b.arrow(612, 230, 486, 230, { stroke: C.mute, sw: 2.2, marker: 'mute' })

  b.rect(920, 176, 420, 130, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.8, rx: 9 })
  b.ctext(1130, 206, '反应原性', { size: 16, weight: 700, fill: C.accD })
  b.wtext(940, 234, '与其应答产物特异性结合的能力——抗原表位与抗体 / TCR 互补结合。', { size: 11.5, fill: C.sub, maxW: 380, lh: 17 })
  b.arrow(788, 230, 914, 230, { stroke: C.mute, sw: 2.2, marker: 'mute' })

  b.ctext(700, 340, '兼具两重性能者为完全抗原；仅具反应原性者为半抗原（多为小分子化合物）', { size: 12.5, weight: 600, fill: C.ink })
  b.ctext(700, 372, '引申概念：诱导免疫耐受的抗原称耐受原', { size: 11, fill: C.mute })

  // ============ 二、完全抗原与半抗原 ============
  b.panel(30, 418, 1340, 260, { title: '二、完全抗原与半抗原：分子量与两重性能的对照' })
  b.table(60, 462, 620, {
    headers: ['比较项目', '完全抗原', '半抗原'],
    colW: [120, 260, 240],
    rowH: 52,
    fontSize: 12,
    rows: [
      ['两重性能', '兼具免疫原性与反应原性', '仅有反应原性'],
      ['分子量', '通常较大（多大于 10 kDa）', '小（常不足 1 kDa）'],
      ['常见实例', '蛋白质等大分子', '药物等小分子化合物'],
    ],
  })

  b.tag(830, 474, '半抗原（小分子）', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 12, weight: 700, pad: 9 })
  b.ctext(960, 474, '+', { size: 18, weight: 700, fill: C.ink })
  b.tag(1092, 474, '载体蛋白', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 12, weight: 700, pad: 9 })
  b.arrow(980, 492, 980, 528, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.ctext(1030, 514, '偶联', { size: 10.5, fill: C.mute })
  b.ellipse(980, 582, 120, 46, { fill: C.proL, fillOp: 0.55, stroke: C.pro, sw: 2.2 })
  ;[[880, 560], [920, 548], [1050, 552]].forEach(([x, y]) => b.circle(x, y, 7, { fill: C.enzL, stroke: C.enz, sw: 1.8 }))
  b.ctext(980, 588, '载体蛋白', { size: 11.5, weight: 700, fill: C.proD })
  b.ctext(980, 648, '半抗原-载体偶联物 = 完全抗原（获得免疫原性）', { size: 12, weight: 700, fill: C.ink })
  b.ctext(980, 672, '圆点示结合于载体的半抗原（B 表位），载体蛋白提供 T 表位', { size: 10, fill: C.mute })

  // ============ 三、载体效应的三个应用面 ============
  b.panel(30, 694, 1340, 284, { title: '三、载体效应：B 表位与 T 表位的分工协作（Mitchison 经典实验 · 药物超敏 · 结合疫苗）' })

  b.rect(60, 738, 400, 202, { fill: C.bg, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(78, 764, '经典载体效应实验（60 年代）', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(78, 788, 'DNP-OVA 免疫小鼠后分别加强：', { size: 11, fill: C.sub, maxW: 360, lh: 16 })
  b.wtext(78, 812, '· DNP-OVA（同载体）→ 强再次应答', { size: 11, weight: 600, fill: C.ok, maxW: 360, lh: 16 })
  b.wtext(78, 836, '· DNP-BSA（换载体）→ 应答微弱', { size: 11, weight: 600, fill: C.bad, maxW: 360, lh: 16 })
  b.wtext(78, 860, '结论：半抗原的应答依赖载体上的 T 表位——B 识别半抗原、T 识别载体，二者协作。', { size: 10.5, fill: C.mute, maxW: 360, lh: 15 })

  b.rect(490, 738, 400, 202, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(508, 764, '药物超敏的分子基础', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(508, 788, '青霉素等药物小分子本身无免疫原性；进入体内与组织蛋白结合后成为完全抗原，继而诱发药物超敏反应。', { size: 11, fill: C.sub, maxW: 364, lh: 17 })
  b.tag(690, 880, '小分子 + 组织蛋白 → 完全抗原', { fill: C.bg, stroke: C.bad, tfill: C.bad, size: 11, weight: 700, pad: 8 })

  b.rect(920, 738, 400, 202, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.6, rx: 9 })
  b.text(938, 764, '结合疫苗的巧用', { size: 12.5, weight: 700, fill: '#065f46' })
  b.wtext(938, 788, '细菌荚膜多糖本身难以在婴幼儿中诱导记忆性免疫；将其偶联载体蛋白，即借载体效应获得 T 细胞依赖的记忆性免疫。', { size: 11, fill: C.sub, maxW: 364, lh: 17 })
  b.tag(1120, 880, '多糖偶联载体蛋白 → 记忆性免疫', { fill: C.bg, stroke: C.ok, tfill: '#065f46', size: 11, weight: 700, pad: 8 })
}

export default scene({
  title: '抗原的基本特性：免疫原性与反应原性的一体两面',
  subtitle: '抗原兼具免疫原性（诱导应答）与反应原性（与应答产物特异结合）两重性能且彼此独立；完全抗原多大于 10 kDa、半抗原常不足 1 kDa，半抗原偶联载体蛋白后获得免疫原性——载体效应（DNP-OVA/DNP-BSA 实验）证明 B 表位识别半抗原、T 表位识别载体的分工协作，也是青霉素超敏与结合疫苗的分子基础',
  draw,
})
