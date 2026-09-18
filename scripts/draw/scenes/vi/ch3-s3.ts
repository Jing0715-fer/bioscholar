// vi ch3-s3 RNA 病毒基因组（39-j 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、RNA 基因组大小：止步于 33 kb ============
  b.panel(30, 132, 660, 400, { title: '一、RNA 基因组大小：多数 3–15 kb，止步于约 33 kb' })
  const px = (kb: number) => 200 + (kb / 35) * 400
  b.rect(px(3), 190, px(15) - px(3), 190, { fill: C.rnaL, fillOp: 0.4 })
  b.ctext((px(3) + px(15)) / 2, 182, '多数 RNA 病毒 3–15 kb', { size: 10.5, weight: 700, fill: C.rna })
  const sizes: [string, number, number, boolean][] = [
    ['小 RNA 病毒（脊灰）', 7.4, 8.5, false],
    ['黄病毒', 9, 13, false],
    ['甲病毒', 10, 13, false],
    ['丝状病毒', 19, 19, false],
    ['冠状病毒', 26, 32, true],
  ]
  sizes.forEach(([nm, lo, hi, hot], i) => {
    const by = 206 + i * 35
    b.text(50, by + 13, nm, { size: 11, fill: C.sub })
    b.rect(px(lo), by, Math.max(px(hi) - px(lo), 7), 18, { fill: hot ? C.badL : C.rnaL, stroke: hot ? C.bad : C.rna, sw: 1.6, rx: 4 })
    b.text(px(hi) + 8, by + 13, hot ? '26–32 kb · RNA 之最' : `${lo}${hi === lo ? '' : `–${hi}`} kb`, { size: 10, weight: hot ? 700 : 400, fill: hot ? C.bad : C.rnaD })
  })
  b.line(px(33), 188, px(33), 388, { stroke: C.bad, sw: 2, dash: '7 5' })
  b.ctext(px(33) + 6, 202, '上限 ≈ 33 kb', { size: 11, weight: 700, fill: C.bad })
  ;[0, 10, 20, 30].forEach(t => {
    b.line(px(t), 388, px(t), 394, { stroke: C.sub, sw: 1.8 })
    b.ctext(px(t), 408, `${t}`, { size: 11, fill: C.mute })
  })
  b.ctext(400, 408, 'kb', { size: 11, fill: C.mute })
  b.wtext(50, 438, '与 DNA 病毒（可达 130–300 kb）相比，RNA 基因组普遍偏小：下限约 2 kb、多数 3–15 kb——原因见右下「错误阈值」。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(50, 492, '正链基因组进胞先翻译后复制；负链毒粒必携 RdRp；双链把复制关进衣壳（见右上图）。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、正链／负链／双链：三种策略 ============
  b.panel(710, 132, 660, 400, { title: '二、正链 / 负链 / 双链 RNA：三种复制策略' })
  const strat: { nm: string; c: string; head: string; flow: string[]; sub: string }[] = [
    {
      nm: '正链 RNA', c: C.rna, head: '基因组即 mRNA：进胞先翻译、后复制',
      flow: ['毒粒 RNA(+)', '翻译', '蛋白 · RdRp', '复制', '子代 RNA(+)'],
      sub: '核糖体直接读取第一条链；蛋白到位后复制才能开动。',
    },
    {
      nm: '负链 RNA', c: C.bad, head: '毒粒必携 RdRp：先转录、后翻译',
      flow: ['RNA(−)＋RdRp', '转录', 'mRNA', '翻译', '病毒蛋白'],
      sub: '非节段病毒呈 3′ 起始的转录梯度（基因排位＝转录丰度）；节段病毒各段独立转录。',
    },
    {
      nm: '双链 RNA', c: C.dna, head: '把复制关进衣壳：保守型复制',
      flow: ['dsRNA（衣壳内）', '转录', 'mRNA 自顶点释出', '翻译', '蛋白'],
      sub: '复制为保守型、dsRNA 始终不暴露于胞质，规避宿主的双链 RNA 传感报警。',
    },
  ]
  strat.forEach((s, i) => {
    const y0 = 180 + i * 110
    b.tag(768, y0 + 16, s.nm, { fill: s.c + '22', stroke: s.c, size: 11.5, weight: 700, tfill: s.c, pad: 9 })
    b.text(860, y0 + 20, s.head, { size: 11.5, weight: 700, fill: C.ink })
    const mk = (): 'rna' | 'bad' | 'dna' => (s.c === C.rna ? 'rna' : s.c === C.bad ? 'bad' : 'dna')
    for (let k = 0; k < 3; k++) {
      const bx = 730 + k * 200
      b.rect(bx, y0 + 42, 170, 34, { fill: '#ffffff', stroke: s.c, sw: 1.6, rx: 7 })
      b.ctext(bx + 85, y0 + 63, s.flow[k * 2], { size: 10.5, weight: 600, fill: C.sub })
      if (k < 2) {
        b.arrow(bx + 174, y0 + 59, bx + 196, y0 + 59, { stroke: s.c, sw: 1.8, marker: mk() })
        b.ctext(bx + 185, y0 + 36, s.flow[k * 2 + 1], { size: 9.5, weight: 700, fill: C.mute })
      }
    }
    b.wtext(730, y0 + 96, s.sub, { size: 10, fill: C.mute, maxW: 620, lh: 13 })
  })

  // ============ 三、错误阈值 ============
  b.panel(30, 556, 660, 424, { title: '三、RdRp 无校读：错误阈值封顶基因组大小' })
  b.axis(100, 900, 300, 250, {
    xticks: [[0, '10⁻⁶'], [0.5, '10⁻⁵'], [1, '10⁻⁴']],
    yticks: [[0, '低'], [1, '高']],
    xlabel: '每碱基复制错误率 μ →',
    ylabel: '信息保持度',
    title: '埃根错误阈值',
  })
  b.curve(100, 900, 300, 250, [[0, 0.95], [0.2, 0.93], [0.4, 0.88], [0.55, 0.62], [0.7, 0.28], [0.85, 0.08], [1, 0.03]], {
    stroke: C.dna, sw: 2.6, smooth: true,
  })
  b.line(265, 650, 265, 900, { stroke: C.bad, sw: 1.8, dash: '7 5' })
  b.ctext(265, 634, '错误阈值', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(380, 780, '突变灾难区', { size: 11, weight: 700, fill: C.bad })
  b.wtext(430, 626, '埃根（Eigen）错误阈值：L×μ ≪ 1——基因组越长（L 越大），可容忍的错误率越小。', { size: 11, weight: 700, fill: C.ink, maxW: 240, lh: 16 })
  b.wtext(430, 686, 'RdRp 缺乏校读，错误率高达 10⁻⁶–10⁻⁴：DNA 聚合酶的校读把错误率再压低几个数量级，故 DNA 病毒可达数百 kb。', { size: 10.5, fill: C.sub, maxW: 240, lh: 15 })
  b.wtext(430, 756, '冠状病毒靠 nsp14 外切酶「补上」校读，才把基因组扩容到 26–32 kb——RNA 之最仍止步于约 33 kb。', { size: 10.5, fill: C.sub, maxW: 240, lh: 15 })
  b.wtext(430, 826, '上限的另一面：错误率是准种动态之源——见右下。', { size: 10.5, fill: C.mute, maxW: 240, lh: 15 })

  // ============ 四、准种与致死诱变 ============
  b.panel(710, 556, 660, 424, { title: '四、准种：快适应的引擎，复杂度的天花板' })
  b.ctext(890, 626, '准种＝围绕主序列的突变体云', { size: 12.5, weight: 700, fill: C.ink })
  const dots: [number, number][] = [
    [830, 660], [950, 668], [790, 710], [985, 720], [845, 770], [940, 780],
    [880, 660], [890, 745], [820, 728], [960, 748], [872, 810], [910, 690],
    [835, 818], [950, 812],
  ]
  dots.forEach(([dx, dy]) => b.circle(dx, dy, 6, { fill: C.rnaL, stroke: C.rna, sw: 1.5 }))
  b.circle(888, 736, 11, { fill: C.rna, stroke: C.rnaD, sw: 1.8 })
  b.ctext(888, 786, '主序列', { size: 10.5, weight: 700, fill: C.rnaD })
  b.wtext(730, 852, '高错误率造就准种动态：任何时刻群体里都备好适应新环境的变体——快适应的引擎，也封死了 RNA 基因组复杂度的上限。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  // 致死诱变小图
  b.axis(1080, 880, 250, 180, {
    xticks: [[0, '低'], [1, '高']],
    xlabel: '错误率 μ →',
    title: '致死诱变',
  })
  b.curve(1080, 880, 250, 180, [[0, 0.85], [0.3, 0.8], [0.55, 0.5], [0.75, 0.15], [1, 0.03]], { stroke: C.dna, sw: 2.4, smooth: true })
  b.line(1218, 700, 1218, 880, { stroke: C.bad, sw: 1.8, dash: '7 5' })
  b.arrow(1090, 912, 1200, 912, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(1145, 930, '核苷类似物推高 μ', { size: 10, weight: 700, fill: C.bad })
  b.wtext(730, 940, '核苷类似物「致死诱变」：把错误率推过阈值，让突变灾难性地积累——反用快适应引擎作为治疗武器。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
}

export default scene({
  title: 'RNA 病毒基因组：三种链型策略与 33 kb 错误阈值',
  subtitle: '多数 3–15 kb、冠状病毒 26–32 kb 为 RNA 之最；RdRp 无校读错误率 10⁻⁶–10⁻⁴，埃根阈值 L×μ≪1 封顶；准种既是快适应引擎也是复杂度天花板',
  draw,
})
