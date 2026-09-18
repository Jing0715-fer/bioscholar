// bc ch11-s4 核苷酸的从头合成与补救合成（39-a 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、嘌呤从头合成 ============
  b.panel(30, 132, 700, 430, { title: '一、嘌呤从头合成（胞质 · 肝为主）：先 PRPP 后环' })
  b.rect(56, 184, 130, 36, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(121, 206, '核糖-5-磷酸', { size: 11, fill: C.ink })
  b.arrow(188, 202, 240, 202, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(214, 188, '＋ATP', { size: 9, fill: C.mute })
  b.rect(242, 184, 110, 36, { fill: C.accL, fillOp: 0.55, stroke: C.acc, sw: 1.6, rx: 7 })
  b.ctext(297, 206, 'PRPP', { size: 12, weight: 700, fill: C.accD })
  b.arrow(354, 202, 406, 202, { stroke: C.enz, sw: 2.8, marker: 'enz' })
  b.rect(408, 184, 130, 36, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(473, 206, '5-磷酸核糖胺', { size: 11, fill: C.ink })
  b.arrow(540, 202, 580, 202, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(560, 188, '多步', { size: 9, fill: C.mute })
  b.rect(582, 182, 128, 40, { fill: C.rnaL, fillOp: 0.6, stroke: C.rna, sw: 1.8, rx: 8 })
  b.ctext(646, 200, 'IMP', { size: 12.5, weight: 700, fill: C.rnaD })
  b.ctext(646, 214, '前体 / 分支点', { size: 8.5, fill: C.mute })
  b.tag(214, 240, 'PRPP 合成酶', { fill: C.panelB, stroke: C.sub, size: 9.5, weight: 600, tfill: C.sub, pad: 4 })
  b.tag(380, 240, '酰胺转移酶（限速酶）', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 4 })
  b.ctext(380, 262, '受 AMP / GMP / IMP 反馈抑制', { size: 9, fill: C.mute })
  // IMP 分支
  b.path('M600,222 C480,250 260,296 162,322', { stroke: C.acc, sw: 2.2, marker: 'acc', fill: 'none' })
  b.path('M600,222 C460,286 240,358 162,404', { stroke: C.dna, sw: 2.2, marker: 'dna', fill: 'none' })
  b.rect(56, 320, 106, 36, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.6, rx: 7 })
  b.ctext(109, 342, 'AMP', { size: 12, weight: 700, fill: C.accD })
  b.rect(56, 400, 106, 36, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.6, rx: 7 })
  b.ctext(109, 422, 'GMP', { size: 12, weight: 700, fill: C.dnaD })
  b.tag(300, 290, '腺苷酸代琥珀酸 → 裂解（GTP 供能）', { fill: C.panelB, stroke: C.sub, size: 9.5, weight: 600, tfill: C.sub, pad: 4 })
  b.tag(300, 376, 'IMP 脱氢酶 → XMP → GMP 合成酶（ATP 供能）', { fill: C.panelB, stroke: C.sub, size: 9.5, weight: 600, tfill: C.sub, pad: 4 })
  b.rect(440, 396, 270, 64, { fill: C.warnL, fillOp: 0.5, stroke: C.warn, sw: 1.6, rx: 8 })
  b.text(456, 420, '合成 1 分子 IMP 消耗 6 ATP', { size: 12, weight: 700, fill: '#78350f' })
  b.text(456, 442, '（5 个高能键＋甲酰 THF 当量）——核苷酸合成「昂贵」', { size: 10, fill: C.sub })
  b.wtext(440, 480, '交叉调节：AMP 分支由 GTP 供能、GMP 分支由 ATP 供能，交叉供能互相促进又彼此牵制，保持两者平衡。', { size: 10.5, fill: C.sub, maxW: 268, lh: 15 })
  b.wtext(56, 524, '嘌呤环各原子在 PRPP 骨架上逐步装配（见右图）。', { size: 10.5, fill: C.mute, maxW: 660, lh: 15 })

  // ============ 二、嘌呤环原子来源 ============
  b.panel(750, 132, 620, 430, { title: '二、嘌呤环的「零件表」：各原子来源' })
  // 六元环（嘧啶环）
  const hx = 880, hy = 320, r = 46
  const V = (x: number, y: number, lab: string, col: string) => {
    b.circle(x, y, 11, { fill: '#ffffff', stroke: col, sw: 1.8 })
    b.ctext(x, y + 3.5, lab, { size: 8.5, weight: 700, fill: col })
  }
  b.polygon([[hx, hy - r], [hx + r * 0.87, hy - r * 0.5], [hx + r * 0.87, hy + r * 0.5], [hx, hy + r], [hx - r * 0.87, hy + r * 0.5], [hx - r * 0.87, hy - r * 0.5]], { fill: C.panelB, fillOp: 0.6, stroke: C.line, sw: 1.4 })
  b.polygon([[hx - r * 0.87, hy - r * 0.5], [hx - r * 1.5, hy - r * 1.05], [hx - r * 0.9, hy - r * 1.85], [hx - r * 0.1, hy - r * 1.6], [hx, hy - r]], { fill: C.panelB, fillOp: 0.6, stroke: C.line, sw: 1.4 })
  V(hx, hy + r, 'N1', C.enz)
  V(hx + r * 0.87, hy + r * 0.5, 'C2', C.rna)
  V(hx + r * 0.87, hy - r * 0.5, 'N3', C.acc)
  V(hx, hy - r, 'C4', C.pro)
  V(hx - r * 0.87, hy - r * 0.5, 'C5', C.pro)
  V(hx - r * 0.87, hy + r * 0.5, 'C6', C.warn)
  V(hx - r * 1.5, hy - r * 1.05, 'N7', C.pro)
  V(hx - r * 0.9, hy - r * 1.85, 'C8', C.rna)
  V(hx - r * 0.1, hy - r * 1.6, 'N9', C.acc)
  b.ctext(hx - 40, hy + r + 42, '嘌呤环（IMP 的碱基部分）', { size: 10.5, fill: C.mute })
  // 来源表
  b.table(1020, 208, 330, {
    headers: ['原子', '来源'],
    colW: [110, 220],
    rowH: 32,
    fontSize: 10.5,
    rows: [
      ['N1', 'Asp（天冬氨酸）'],
      ['C2 · C8', '一碳单位（N¹⁰-甲酰 THF）'],
      ['N3 · N9', 'Gln（酰胺 N）'],
      ['C4 · C5 · N7', 'Gly（甘氨酸）'],
      ['C6', 'CO₂'],
    ],
  })
  b.wtext(766, 440, '「先 PRPP 后环」：环原子在磷酸核糖骨架上逐步装配——与嘧啶的「先环后糖苷」恰好相反。', { size: 11, weight: 700, fill: C.ink, maxW: 600, lh: 16 })
  b.wtext(766, 484, 'IMP 是嘌呤核苷酸合成的共同前体，再分支生成 AMP 与 GMP。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  b.wtext(766, 524, '甘氨酸一次贡献 3 个原子（C4·C5·N7），是最大的「零件供应商」。', { size: 10.5, fill: C.mute, maxW: 600, lh: 15 })

  // ============ 三、嘧啶合成与脱氧核苷酸 ============
  b.panel(30, 566, 700, 414, { title: '三、嘧啶从头合成（先环后糖苷）与脱氧核苷酸生成' })
  b.rect(56, 620, 150, 40, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(131, 636, 'Gln + CO₂', { size: 11, weight: 700, fill: C.ink })
  b.ctext(131, 652, '＋ 2 ATP', { size: 9.5, fill: C.mute })
  b.arrow(208, 640, 258, 640, { stroke: C.enz, sw: 2.8, marker: 'enz' })
  b.rect(260, 620, 110, 40, { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.5, rx: 7 })
  b.ctext(315, 636, '氨甲酰磷酸', { size: 11, weight: 700, fill: C.enzD })
  b.ctext(315, 652, '（胞质）', { size: 9, fill: C.mute })
  b.tag(233, 600, 'CPS-II（限速）', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 700, tfill: C.enzD, pad: 4 })
  b.arrow(372, 640, 422, 640, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(397, 626, '＋ Asp', { size: 9, fill: C.mute })
  b.rect(424, 620, 100, 40, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(474, 644, '乳清酸', { size: 11.5, weight: 700, fill: C.ink })
  b.arrow(526, 640, 576, 640, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.rect(578, 620, 130, 40, { fill: C.rnaL, fillOp: 0.55, stroke: C.rna, sw: 1.6, rx: 7 })
  b.ctext(643, 636, 'OMP → UMP', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(643, 652, '（先成环再接糖）', { size: 9, fill: C.mute })
  b.wtext(56, 684, 'CPS-II 受 UMP 反馈抑制、受 PRPP 与 ATP 激活；细菌中限速酶为 ATCase。CTP 由 UTP 经 CTP 合成酶（Gln 供 N · ATP 供能）生成。', { size: 10.5, fill: C.sub, maxW: 660, lh: 15 })
  // 脱氧核苷酸
  b.rect(56, 736, 130, 40, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(121, 760, 'NDP（二磷酸）', { size: 11, weight: 700, fill: C.ink })
  b.arrow(188, 756, 260, 756, { stroke: C.enz, sw: 2.8, marker: 'enz' })
  b.tag(224, 736, '核糖核苷酸还原酶', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 4 })
  b.rect(262, 736, 110, 40, { fill: C.dnaL, fillOp: 0.55, stroke: C.dna, sw: 1.6, rx: 7 })
  b.ctext(317, 754, 'dNDP', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(317, 770, '（脱氧核糖）', { size: 9, fill: C.mute })
  b.wtext(56, 800, '在二磷酸水平还原核糖为脱氧核糖：硫氧还蛋白 / 谷氧还蛋白供氢，NADPH 为最终供体；受 dATP / ATP 别构调节以维持 dNTP 平衡。', { size: 10.5, fill: C.sub, maxW: 660, lh: 15 })
  b.rect(56, 848, 200, 44, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.6, rx: 8 })
  b.ctext(156, 864, 'dUMP', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(156, 882, '（胸苷酸合酶）', { size: 9.5, fill: C.mute })
  b.arrow(258, 870, 320, 870, { stroke: C.dna, sw: 2.4, marker: 'dna' })
  b.ctext(288, 856, 'N⁵,N¹⁰-CH₂-THF', { size: 8.5, fill: C.mute })
  b.rect(322, 848, 120, 44, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.6, rx: 8 })
  b.ctext(382, 870, 'dTMP', { size: 12, weight: 700, fill: C.dnaD })
  b.wtext(470, 864, 'dTMP 由 dUMP 经胸苷酸合酶合成，甲基来自 N⁵,N¹⁰-甲烯 THF——5-FU 的作用靶点。', { size: 10.5, fill: C.sub, maxW: 240, lh: 15 })
  b.wtext(56, 924, '嘧啶与嘌呤从头合成的根本差异：先造环再接糖 vs 先备糖再造环。', { size: 11, weight: 700, fill: C.ink, maxW: 660, lh: 15 })

  // ============ 四、补救合成 ============
  b.panel(750, 566, 620, 414, { title: '四、补救合成（salvage）：APRT / HGPRT 与 Lesch-Nyhan' })
  b.rect(770, 624, 120, 44, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(830, 642, '碱基 + PRPP', { size: 11, weight: 700, fill: C.ink })
  b.ctext(830, 660, '（现成原料）', { size: 9, fill: C.mute })
  b.arrow(892, 646, 952, 646, { stroke: C.enz, sw: 2.6, marker: 'enz' })
  b.rect(954, 624, 110, 44, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.6, rx: 8 })
  b.ctext(1009, 646, '核苷酸', { size: 12, weight: 700, fill: '#065f46' })
  b.tag(923, 604, '补救合成酶', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 4 })
  const svs: [string, string][] = [
    ['APRT', '腺嘌呤 + PRPP → AMP'],
    ['HGPRT', '次黄嘌呤 / 鸟嘌呤 + PRPP → IMP / GMP'],
  ]
  svs.forEach(([t, s], i) => {
    b.tag(810 + i * 30, 700 + i * 44, t, { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD, pad: 5 })
    b.text(870 + i * 30, 704 + i * 44, s, { size: 11, fill: C.sub })
  })
  b.wtext(766, 782, '利用现成碱基 / 核苷重新合成，节省能量——在脑、骨髓等「从头合成弱」的组织尤为重要。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  b.rect(766, 812, 592, 84, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(782, 836, 'HGPRT 完全缺陷 → Lesch-Nyhan 综合征', { size: 12, weight: 700, fill: C.bad })
  b.wtext(782, 860, '自残行为 · 痛风 · 智力障碍；PRPP 堆积反馈性促使嘌呤从头合成亢进。', { size: 10.5, fill: C.sub, maxW: 560, lh: 15 })
  b.wtext(766, 916, '从头合成（肝 · 耗 6 ATP）与补救合成（脑 · 骨髓 · 省能）分工互补。', { size: 11, weight: 700, fill: C.ink, maxW: 600, lh: 15 })
  b.wtext(766, 952, '补救途径同时回收分解产生的碱基，减少尿酸生成。', { size: 10.5, fill: C.mute, maxW: 600, lh: 15 })
}

export default scene({
  title: '核苷酸的从头合成与补救合成',
  subtitle: '嘌呤「先 PRPP 后环」（酰胺转移酶限速，IMP 耗 6 ATP 再分支为 AMP/GMP）vs 嘧啶「先环后糖苷」（CPS-II 限速→UMP）；脱氧核苷酸在 NDP 水平还原；补救靠 APRT/HGPRT，HGPRT 缺陷致 Lesch-Nyhan',
  draw,
})
