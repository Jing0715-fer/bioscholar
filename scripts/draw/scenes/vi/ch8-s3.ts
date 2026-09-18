// vi ch8-s3 持续性感染与潜伏感染（39-j 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、感染结局四型 ============
  b.panel(30, 132, 660, 430, { title: '一、感染结局四型：病毒载量曲线' })
  const curves: [string, string, Array<[number, number]>][] = [
    ['急性', C.acc, [[0, 0], [0.08, 0.3], [0.18, 0.95], [0.32, 0.6], [0.5, 0.15], [0.7, 0.02], [1, 0]]],
    ['慢性', C.rna, [[0, 0], [0.1, 0.5], [0.25, 0.85], [0.5, 0.7], [0.75, 0.75], [1, 0.7]]],
    ['潜伏', C.dna, [[0, 0], [0.1, 0.8], [0.2, 0.06], [0.5, 0.03], [0.72, 0.05], [0.8, 0.7], [0.9, 0.3], [1, 0.04]]],
    ['慢病毒', C.bad, [[0, 0], [0.2, 0.1], [0.4, 0.25], [0.6, 0.45], [0.8, 0.7], [1, 0.9]]],
  ]
  curves.forEach(([nm, c, pts], i) => {
    const ax = 50 + (i % 2) * 316, ay = 270 + Math.floor(i / 2) * 172
    b.axis(ax, ay, 280, 120, { title: nm, xticks: [[0, '0'], [1, '时间→']], grid: false })
    b.curve(ax, ay, 280, 120, pts, { stroke: c, sw: 2.2, smooth: true })
    if (nm === '潜伏') {
      b.ctext(ax + 190, ay - 128, '再激活', { size: 9.5, weight: 700, fill: C.bad })
      b.arrow(ax + 222, ay - 122, ax + 222, ay - 104, { stroke: C.bad, sw: 1.6, marker: 'bad' })
    }
  })
  b.wtext(50, 630, '难点各不相同：储库（慢性）、靶点不表达（潜伏）、免疫失效（慢病毒）——治疗思路亦随之不同。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 二、HBV：cccDNA 储库 ============
  b.panel(710, 132, 660, 430, { title: '二、慢性感染储库：HBV 的 cccDNA' })
  b.cell(1050, 320, 130, 84, { stroke: C.sub })
  b.nucleusU(1010, 300, 66)
  b.plasmid(1010, 300, 30, { stroke: C.bad, label: 'cccDNA' })
  b.wtext(730, 200, 'HBV 持久性的核心：核内 cccDNA 微染色体储库——核苷类似物只压复制、不能清除之。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.arrow(880, 320, 940, 306, { stroke: C.enz, sw: 2, marker: 'enz', dash: '6 4' })
  b.ctext(900, 336, '核苷类似物', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(1010, 390, '✗ 清除不了', { size: 10.5, weight: 700, fill: C.bad })
  b.tag(1120, 480, '功能性治愈：压到不可检出并维持——现实治疗目标', { fill: C.okL, stroke: C.ok, size: 11, weight: 700, tfill: '#065f46', pad: 10 })
  b.wtext(730, 440, '停药即回升的根源就在这枚「微染色体」：半衰期长、不随药物消失。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 三、神经节里的沉默 ============
  b.panel(30, 586, 660, 394, { title: '三、潜伏感染：神经节里的沉默与再激活' })
  b.circle(200, 700, 56, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.ctext(200, 700, '感觉神经节', { size: 11, weight: 700, fill: C.rnaD })
  b.dna(168, 726, 64, { stroke: C.dna, amp: 6, period: 40 })
  b.ctext(200, 760, '潜伏基因组（环形）', { size: 9.5, fill: C.dnaD })
  b.ctext(200, 636, 'LAT＝唯一大量转录产物', { size: 10.5, weight: 700, fill: C.rna })
  b.wtext(60, 820, 'HSV 潜伏于感觉神经节：不产毒粒、仅 LAT 长期低语——「不表达」让免疫与药物都无从下手。', { size: 11, fill: C.sub, maxW: 590, lh: 16 })
  b.timelineH(90, 900, 560, [
    { at: 0.08, label: '儿童：水痘', sub: '初次感染', c: C.acc },
    { at: 0.5, label: '潜伏数十年', sub: '神经节内沉默', above: true, c: C.mute },
    { at: 0.92, label: '老年：带状疱疹', sub: '再激活', c: C.bad },
  ])
  b.ctext(370, 962, 'VZV：同一病毒相隔数十年的两副面孔', { size: 11.5, weight: 700, fill: C.ink })

  // ============ 四、EB 与慢病毒范式 ============
  b.panel(710, 586, 660, 394, { title: '四、EB 病毒与慢病毒：另外两种藏法' })
  b.cell(860, 680, 80, 48, { stroke: C.dna })
  b.ctext(860, 672, '静息记忆 B 细胞', { size: 10.5, weight: 700, fill: C.dnaD })
  b.plasmid(860, 690, 20, { stroke: C.bad, label: '附加体' })
  b.ctext(860, 744, 'EBNA1 低表达维护附加体', { size: 10, fill: C.sub })
  b.wtext(730, 636, 'EB 病毒潜伏于静息记忆 B 细胞：几乎不表达抗原，免疫监视近乎失明——成人感染率逾九成。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.axis(1010, 920, 330, 160, {
    title: '慢病毒（Maedi-Visna）：抗原漂变',
    xticks: [[0, '0'], [1, '时间→']],
    grid: false,
  })
  b.curve(1010, 920, 330, 160, [[0, 0.5], [0.15, 0.8], [0.25, 0.3], [0.4, 0.65], [0.55, 0.25], [0.7, 0.6], [0.85, 0.2], [1, 0.55]], { stroke: C.bad, sw: 2.2, smooth: true })
  b.wtext(1040, 736, '免疫失效型：抗原持续漂变、波浪式推进——免疫总慢半拍。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.wtext(730, 788, '无包膜病毒同样构成储库：HPV 的附加体、腺病毒与细小病毒的隐匿——「潜伏」不是有包膜者的专利。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })
}

export default scene({
  title: '持续性感染与潜伏感染：四型曲线、储库与沉默',
  subtitle: '急性／慢性／潜伏／慢病毒四型结局；HBV 靠 cccDNA 储库（核苷类似物不能清除、功能性治愈为目标）；HSV 潜伏神经节仅转录 LAT；EBV 潜伏记忆 B 细胞',
  draw,
})
