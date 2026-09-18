// vi ch7-s1 装配的分子逻辑（39-j 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、自组装：信息内置 + 准等价 ============
  b.panel(30, 132, 660, 430, { title: '一、自组装与准等价：少数基因搭大衣壳' })
  // 二十面体晶格片段：中央五聚体 + 周围六聚体
  const pent = (cx: number, cy: number, r: number) => {
    const pts: string[] = []
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 - Math.PI / 2
      pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`)
    }
    b.polygon(pts.map(p => p.split(',').map(Number)) as [number, number][], { fill: C.badL, stroke: C.bad, sw: 1.8 })
  }
  const hex = (cx: number, cy: number, r: number) => {
    const pts: string[] = []
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2
      pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`)
    }
    b.polygon(pts.map(p => p.split(',').map(Number)) as [number, number][], { fill: C.dnaL, stroke: C.dna, sw: 1.5 })
  }
  pent(200, 300, 34)
  hex(200 + 58, 300 - 34, 26)
  hex(200 + 66, 300 + 30, 26)
  hex(200 - 62, 300 + 34, 26)
  hex(200 - 66, 300 - 30, 26)
  hex(200, 300 + 66, 26)
  hex(200, 300 - 68, 26)
  b.ctext(200, 302, '五聚体', { size: 9.5, weight: 700, fill: C.bad })
  b.wtext(400, 210, 'Caspar 与 Klug（1962）准等价理论：同一亚基只需微调构象，即可胜任五重轴顶点与六重轴侧面两类位置。', { size: 11, fill: C.sub, maxW: 260, lh: 16 })
  b.wtext(400, 290, '亚基内置信息 + 弱键可逆性：装错了就拆、重装——忠实与纠错由此保证。', { size: 11, fill: C.sub, maxW: 260, lh: 16 })
  b.wtext(400, 356, '少数基因编码的蛋白，得以搭建庞大衣壳——几何是省基因的最大杠杆。', { size: 11, fill: C.mute, maxW: 260, lh: 16 })
  b.ctext(200, 396, '一个亚基，两种座位（准等价）', { size: 11, weight: 700, fill: C.ink })
  b.wtext(50, 480, '「自组装」的含义：没有酶催、没有模板指令，信息全部写在亚基的形状与结合面上。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、TMV 重建实验与螺旋装配 ============
  b.panel(710, 132, 660, 430, { title: '二、TMV：两组分复活病毒（1955）' })
  b.virion(830, 300, 36, { shape: 'helical', stroke: C.bad })
  b.ctext(830, 420, '2130 个亚基 · 螺距 2.3 nm', { size: 11, weight: 700, fill: C.bad })
  b.arrow(940, 260, 1020, 260, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.ctext(980, 244, '解离', { size: 9.5, fill: C.mute })
  b.circle(1060, 236, 13, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.ctext(1060, 240, 'P', { size: 10, weight: 700, fill: C.proD })
  b.ctext(1060, 268, '衣壳蛋白', { size: 9.5, fill: C.mute })
  b.rnaW(1040, 300, 80, { stroke: C.rna, amp: 8 })
  b.ctext(1080, 330, 'RNA', { size: 9.5, fill: C.rna })
  b.line(1130, 260, 1130, 280, { stroke: C.ink, sw: 2 })
  b.line(1120, 270, 1140, 270, { stroke: C.ink, sw: 2 })
  b.arrow(1180, 280, 1240, 300, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(1210, 264, '混合', { size: 9.5, fill: C.mute })
  b.virion(1290, 330, 24, { shape: 'helical', stroke: C.bad })
  b.wtext(730, 452, 'Fraenkel-Conrat 与 Williams 把颗粒解离为蛋白与 RNA，再混合——侵染性颗粒原样重建：装配信息在蛋白亚基、遗传信息在 RNA。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 502, '装配自基因组内部的起始序列发起，以 20S 双层盘起始；体外数小时即可完成、产物侵染率可观。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })

  // ============ 三、成核-生长动力学 ============
  b.panel(30, 586, 660, 394, { title: '三、成核-生长：衣壳装配的动力学骨架' })
  b.axis(110, 930, 300, 250, {
    xticks: [[0, '0'], [0.5, '时间'], [1, '→']],
    yticks: [[0, '0'], [1, '完成']],
    title: '装配程度 vs 时间',
  })
  b.curve(110, 930, 300, 250, [[0, 0], [0.2, 0.04], [0.35, 0.1], [0.5, 0.5], [0.65, 0.85], [0.8, 0.96], [1, 0.98]], { stroke: C.dna, sw: 2.6, smooth: true })
  b.ctext(190, 700, '成核限速', { size: 11, weight: 700, fill: C.bad })
  b.ctext(330, 810, '快速生长', { size: 11, weight: 700, fill: C.dnaD })
  b.wtext(440, 650, '成核是慢步骤：少数亚基凑成「种子」后，生长一泻千里——S 形曲线由此而来。', { size: 11, fill: C.sub, maxW: 240, lh: 16 })
  b.wtext(440, 724, '成核速率对亚基浓度高度敏感：浓度不足则装配几乎不启动。', { size: 11, fill: C.sub, maxW: 240, lh: 16 })
  b.wtext(440, 788, '弱键可逆性提供质量控制：错配中间体自发解体，只有正确衣壳存续。', { size: 11, fill: C.sub, maxW: 240, lh: 16 })
  b.wtext(440, 868, '可逆＝纠错，这是自组装忠实性的来源。', { size: 11, fill: C.mute, maxW: 240, lh: 16 })

  // ============ 四、支架蛋白与三条途径 ============
  b.panel(710, 586, 660, 394, { title: '四、支架蛋白：临时的内部模板' })
  b.text(730, 646, 'HSV 衣壳装配：', { size: 12.5, weight: 700, fill: C.ink })
  b.virion(800, 730, 26, { shape: 'icosahedral', stroke: C.bad })
  b.circle(800, 730, 14, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.ctext(800, 734, '支架', { size: 8.5, weight: 700, fill: C.proD })
  b.arrow(848, 730, 896, 730, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.ctext(872, 714, 'UL26 自切', { size: 9.5, fill: C.proD })
  b.virion(950, 730, 26, { shape: 'icosahedral', stroke: C.bad })
  b.ctext(950, 734, '', { size: 1 })
  b.dna(934, 730, 34, { stroke: C.dna, amp: 6, period: 34 })
  b.ctext(880, 786, '支架被切割、经门户排出，DNA 入驻', { size: 10, fill: C.mute })
  b.wtext(1040, 636, 'UL26 前体自切产生蛋白酶 VP24 与支架亚基 VP21——支架用完即弃，腾出空间装基因组。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.text(730, 822, '衣壳装配的三条途径：', { size: 12.5, weight: 700, fill: C.ink })
  b.tag(790, 856, '共装配', { fill: C.dnaL, stroke: C.dna, size: 11.5, tfill: C.dnaD, pad: 9 })
  b.tag(936, 856, '支架辅助', { fill: C.proL, stroke: C.pro, size: 11.5, tfill: C.proD, pad: 9 })
  b.tag(1082, 856, '装配-成熟', { fill: C.enzL, stroke: C.enz, size: 11.5, tfill: C.enzD, pad: 9 })
  b.wtext(730, 898, '（核酸与衣壳共聚成核 / 先搭外壳再装内容 / 装完再切一刀成熟）复杂衣壳常兼用后两者。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })
  b.wtext(730, 936, '代表体系：共装配——TMV；支架辅助——HSV；装配-成熟——HIV（Gag 切割成熟）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
}

export default scene({
  title: '毒粒装配的分子逻辑：自组装、准等价与支架蛋白',
  subtitle: 'Caspar-Klug 1962 准等价：一个亚基胜任五重／六重轴；TMV 2130 亚基、螺距 2.3 nm、1955 年两组分重建；成核-生长动力学弱键纠错；HSV 支架 VP21/VP24 用完即弃',
  draw,
})
