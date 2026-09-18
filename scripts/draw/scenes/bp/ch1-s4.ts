// bp ch1-s4 聚合物物理：Flory 指数与溶剂质量（39-e 批1）
import { scene, C, B } from '../../lib'

const walk = (cx: number, cy: number, n: number, step: number, maxR: number, seed: number): Array<[number, number]> => {
  let sd = seed
  const rnd = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647 }
  let x = 0, y = 0
  const pts: Array<[number, number]> = [[cx, cy]]
  for (let i = 0; i < n; i++) {
    let a = rnd() * Math.PI * 2
    if (Math.hypot(x, y) > maxR) a = Math.atan2(-y, -x) + (rnd() - 0.5) * 1.5
    x += step * Math.cos(a); y += step * Math.sin(a)
    pts.push([cx + x, cy + y])
  }
  return pts
}

const draw = (b: B) => {
  // ============ 一、三种溶剂条件 ============
  b.panel(30, 132, 1340, 360, { title: '一、溶剂质量决定链构象：Flory 标度律 R ~ b·N^ν（1950s 平均场）' })
  const col = (cx: number, tag: string, tagC: string, tagL: string, nu: string, rf: string, desc: string, wlk: Array<[number, number]>, st: string, sw: number) => {
    b.tag(cx, 196, tag, { fill: tagL, stroke: tagC, size: 12, weight: 700, tfill: tagC, pad: 8 })
    b.polyline(wlk, { stroke: st, sw })
    b.ctext(cx, 402, nu, { size: 14, weight: 700, fill: tagC })
    b.ctext(cx, 426, rf, { size: 11.5, weight: 700, fill: C.ink })
    b.ctext(cx, 450, desc, { size: 10.5, fill: C.sub })
  }
  col(250, 'θ 溶剂（理想条件）', C.acc, C.accL, 'ν = 1/2', 'R ~ b·N^(1/2)', '无扰高斯线团：熵致排斥与焓致吸引恰好抵消', walk(250, 290, 44, 11, 56, 31), C.acc, 1.7)
  col(690, '良溶剂', C.ok, C.okL, 'ν ≈ 3/5（精确值 0.588）', 'R ~ b·N^(3/5)', '排除体积为正，链膨胀成溶胀线团', walk(690, 288, 50, 13, 68, 77), C.ok, 1.8)
  col(1130, '不良溶剂', C.pro, C.proL, 'ν = 1/3', 'R ~ N^(1/3)', '单体间净吸引，坍缩成致密球（globule）', walk(1130, 290, 90, 6.5, 30, 13), C.pro, 1.4)
  b.wtext(60, 478, 'Flory 指数 ν 只取决于溶剂条件与空间维数，与链的化学细节无关——统计物理普适性（universality）的典范；θ 温度下链表现为理想高斯链。', { size: 10.5, fill: C.mute, maxW: 1280, lh: 15 })

  // ============ 二、R–N 双对数标度 ============
  b.panel(30, 512, 660, 448, { title: '二、R–N 双对数图：斜率即 Flory 指数' })
  b.axis(90, 860, 460, 270, {
    xlabel: '单体数 N（对数刻度）', title: 'log R – log N：三种溶剂条件',
    xticks: [[0, '10⁰'], [0.25, '10¹'], [0.5, '10²'], [0.75, '10³'], [1, '10⁴']],
    yticks: [[0, 'b'], [0.5, '10b'], [1, '10²b']],
  })
  b.text(90, 578, '链尺寸 R（对数）', { size: 12.5, weight: 600, fill: C.sub })
  // ν=1/2：N 从 1→10⁴，R 从 b→100b（满高）
  b.curve(90, 860, 460, 270, [[0, 0], [1, 1]], { stroke: C.acc, sw: 3 })
  b.circle(550, 590, 5, { fill: C.acc })
  // ν≈3/5：R=10²b 处 N=10^(10/3)≈2154 → fx=0.833
  b.curve(90, 860, 460, 270, [[0, 0], [0.833, 1]], { stroke: C.ok, sw: 3 })
  b.circle(90 + 0.833 * 460, 590, 5, { fill: C.ok })
  // ν=1/3：N=10⁴ → R=10^(4/3)b ≈ 21.5b → fy=0.667
  b.curve(90, 860, 460, 270, [[0, 0], [1, 0.667]], { stroke: C.pro, sw: 3 })
  b.circle(550, 860 - 0.667 * 270, 5, { fill: C.pro })
  b.ctext(430, 780, '斜率 = ν', { size: 11.5, weight: 700, fill: C.sub })
  b.legend(90, 930, [['良溶剂 ν ≈ 3/5', C.ok], ['θ 溶剂 ν = 1/2', C.acc], ['不良溶剂 ν = 1/3', C.pro]], { size: 11 })

  // ============ 三、生物大分子的尺寸层级 ============
  b.panel(710, 512, 660, 448, { title: '三、聚合物标度律的生物体现' })
  b.table(730, 560, 620, {
    headers: ['体系', '关键数值', '物理结论'],
    colW: [168, 250, 202],
    rowH: 48,
    fontSize: 11.5,
    rows: [
      ['变性 DNA', 'λ 噬菌体基因组 48.5 kb，伸展约 16.5 μm', 'ν=1/2 线团 Rg 达数百 nm'],
      ['天然蛋白质', '100 残基链折叠后半径仅 1.5–2 nm', '接近 ν=1/3 的致密球'],
      ['小蛋白经验律', 'Rg ≈ R₀·N^(1/3)，R₀ 约 0.3–0.6 nm', '与晶体结构实测一致'],
      ['染色质', '基因组 DNA 被组蛋白逐级压缩，压缩比近万倍', '纳米→微米完整尺寸层级'],
    ],
  })
  b.wtext(730, 838, '高浓度变性剂（如尿素）中的蛋白质去折叠链近似处于良溶剂条件（ν ≈ 3/5）；变性 DNA 线团在电泳凝胶中按长度分开——凝胶电泳迁移率的物理基础。', { size: 11, fill: C.sub, maxW: 610, lh: 16 })
  b.wtext(730, 890, '基因组 DNA 在凝胶中按长度分离、转录因子沿 DNA 的滑行搜索、染色质的压缩与去压缩、细胞拥挤环境中的有效浓度，都可用 ν、b、N 少数参数定量描述。', { size: 11, fill: C.mute, maxW: 610, lh: 16 })
  b.tag(1030, 940, 'R ~ b·N^ν', { fill: C.dnaL, stroke: C.dna, size: 12, weight: 700, tfill: C.dnaD, pad: 9 })
}

export default scene({
  title: 'Flory 指数与溶剂质量：良 / θ / 不良三种链构象',
  subtitle: 'R~b·N^ν：θ 溶剂 ν=1/2（理想高斯线团）、良溶剂 ν≈3/5（0.588 溶胀）、不良溶剂 ν=1/3（坍缩球）；λ 噬菌体 DNA 48.5 kb 伸展 16.5 μm；100 残基蛋白折叠后半径 1.5–2 nm；染色质压缩比近万倍',
  draw,
})
