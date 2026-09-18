// vi ch4-s2 融合与内吞（39-j 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、侵入的两条通路 ============
  b.panel(30, 132, 660, 430, { title: '一、侵入的两条通路：质膜融合 vs 内吞' })
  b.text(50, 196, '质膜融合（中性 pH 触发）', { size: 12.5, weight: 700, fill: C.dnaD })
  b.bilayer(60, 282, 280, { tint: C.dna })
  b.virion(200, 232, 26, { shape: 'enveloped', stroke: C.bad })
  b.circle(200, 288, 20, { fill: C.badL, stroke: C.bad, sw: 2, fillOp: 0.6 })
  b.ctext(200, 292, '', { size: 1 })
  b.rnaW(170, 316, 60, { stroke: C.rna, amp: 6 })
  b.ctext(200, 344, '融合孔开，vRNP 入胞', { size: 10.5, fill: C.mute })
  b.ctext(200, 370, '病毒在细胞表面直接卸货', { size: 11, weight: 700, fill: C.sub })
  b.line(90, 404, 330, 404, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.text(370, 196, '内吞（多需低 pH 触发）', { size: 12.5, weight: 700, fill: C.accD })
  b.bilayer(370, 226, 290, { tint: C.dna })
  b.vesicle(515, 286, 34, { coat: 'clathrin', fill: C.bg })
  b.virion(515, 286, 13, { shape: 'icosahedral', stroke: C.bad })
  b.ctext(515, 340, '网格蛋白衣被小泡', { size: 10, fill: C.mute })
  b.arrow(515, 356, 515, 380, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.circle(515, 428, 52, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.virion(515, 424, 15, { shape: 'enveloped', stroke: C.bad })
  b.ctext(515, 496, '内体酸化 pH↓ → 融合蛋白变构', { size: 10.5, weight: 700, fill: C.accD })
  b.wtext(370, 256, '融合蛋白的触发方式决定通路：中性 pH 融合可在细胞表面发生；低 pH 依赖者须待内体酸化。', { size: 10.5, fill: C.sub, maxW: 240, lh: 15 })

  // ============ 二、三类融合蛋白 ============
  b.panel(710, 132, 660, 430, { title: '二、三类融合蛋白：结构与活化方式' })
  const fp: { nm: string; c: string; feat: string; rep: string }[] = [
    { nm: 'I 类', c: C.bad, feat: '须切割活化：流感 HA0 切为 HA1＋HA2；终末六螺旋束锁定两膜。多碱性切割位点与禽流感高毒力相关。', rep: '流感 HA · HIV gp41 · 埃博拉 GP' },
    { nm: 'II 类', c: C.rna, feat: '经二聚体解离、融合环暴露，并重折为三聚体发夹——无切割步骤、由低 pH 直接驱动。', rep: '黄病毒 E · 甲病毒 E1' },
    { nm: 'III 类', c: C.dna, feat: '兼含螺旋束与 β 桶两类元件，结构上是 I／II 的「合体」。', rep: '疱疹 gB · 弹状病毒 G' },
  ]
  fp.forEach((f, i) => {
    const y0 = 190 + i * 120
    b.tag(752, y0 + 22, f.nm, { fill: f.c + '22', stroke: f.c, size: 12.5, weight: 700, tfill: f.c, pad: 10 })
    if (i === 0) {
      for (let k = 0; k < 3; k++) b.rect(810 + k * 18, y0 - 2, 10, 44, { fill: C.badL, stroke: f.c, sw: 1.5, rx: 4 })
      b.line(806, y0 + 52, 868, y0 + 52, { stroke: C.dna, sw: 2.4 })
      b.ctext(838, y0 + 70, '切割（HA0→HA1/HA2）', { size: 9.5, fill: C.mute })
      b.line(810, y0 - 10, 868, y0 - 10, { stroke: C.enz, sw: 2, dash: '5 4' })
    } else if (i === 1) {
      b.rect(806, y0 + 6, 26, 16, { fill: C.rnaL, stroke: f.c, sw: 1.5, rx: 5 })
      b.rect(836, y0 + 6, 26, 16, { fill: C.rnaL, stroke: f.c, sw: 1.5, rx: 5 })
      b.arrow(868, y0 + 14, 892, y0 + 14, { stroke: f.c, sw: 1.6, marker: 'rna' })
      for (let k = 0; k < 3; k++) b.rect(898 + k * 14, y0 - 4, 8, 40, { fill: C.rnaL, stroke: f.c, sw: 1.4, rx: 3 })
      b.ctext(870, y0 + 48, '二聚体→重折为三聚体', { size: 9.5, fill: C.mute })
    } else {
      for (let k = 0; k < 3; k++) b.rect(808 + k * 15, y0 + 2, 8, 18, { fill: C.dnaL, stroke: f.c, sw: 1.4, rx: 3 })
      for (let k = 0; k < 2; k++) b.polygon([[806 + k * 40, y0 + 26], [830 + k * 40, y0 + 26], [818 + k * 40, y0 + 46]], { fill: C.dnaL, stroke: f.c, sw: 1.4 })
      b.ctext(844, y0 + 48, '螺旋束＋β 桶', { size: 9.5, fill: C.mute })
    }
    b.wtext(950, y0 + 16, f.feat, { size: 10.5, fill: C.sub, maxW: 400, lh: 15 })
    b.text(950, y0 + 92, `代表：${f.rep}`, { size: 10, weight: 700, fill: f.c })
  })

  // ============ 三、融合孔的形成：半融合中间体 ============
  b.panel(30, 586, 660, 394, { title: '三、膜融合孔的形成：经半融合中间体' })
  const stages: [string, number][] = [['① 两膜靠近', 70], ['② 半融合（外叶合并）', 260], ['③ 融合孔扩张', 450]]
  stages.forEach(([nm, x], i) => {
    b.ctext(x + 100, 660, nm, { size: 12, weight: 700, fill: C.ink })
    if (i === 0) {
      b.bilayer(x + 20, 700, 160, { tint: C.dna })
      b.bilayer(x + 20, 760, 160, { tint: C.bad })
      for (let k = 0; k < 4; k++) b.line(x + 40 + k * 40, 716, x + 40 + k * 40, 752, { stroke: C.pro, sw: 2 })
      b.ctext(x + 100, 792, '融合蛋白跨膜桥接', { size: 10, fill: C.mute })
    } else if (i === 1) {
      b.bilayer(x + 20, 700, 62, { tint: C.dna })
      b.bilayer(x + 98, 700, 62, { tint: C.dna })
      b.bilayer(x + 20, 760, 62, { tint: C.bad })
      b.bilayer(x + 98, 760, 62, { tint: C.bad })
      b.path(`M ${x + 80},${712} C ${x + 62},${732} ${x + 62},${732} ${x + 80},${752} C ${x + 98},${732} ${x + 98},${732} ${x + 80},${712}`, { fill: C.warnL, stroke: C.warn, sw: 2 })
      b.ctext(x + 100, 792, '外叶融合成柄（半融合）', { size: 10, fill: C.mute })
    } else {
      b.bilayer(x + 20, 700, 60, { tint: C.dna })
      b.bilayer(x + 100, 700, 60, { tint: C.dna })
      b.bilayer(x + 20, 760, 60, { tint: C.bad })
      b.bilayer(x + 100, 760, 60, { tint: C.bad })
      b.path(`M ${x + 80},${696} C ${x + 40},${716} ${x + 40},${748} ${x + 80},${766} C ${x + 120},${748} ${x + 120},${716} ${x + 80},${696}`, { fill: '#ffffff', stroke: C.warn, sw: 2.4 })
      b.ctext(x + 80, 736, '孔', { size: 11, weight: 700, fill: C.warn })
      b.ctext(x + 100, 792, '内外叶打通、孔扩张', { size: 10, fill: C.mute })
    }
    if (i < 2) b.arrow(x + 186, 726, x + 208, 726, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  })
  b.wtext(50, 836, 'I 类融合蛋白的终末六螺旋束像「拉链」一样把两膜锁在一起——融合孔一旦扩张，基因组即进入胞质。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(50, 880, '半融合中间体是所有融合蛋白共用的中间站：膜的外叶先合并、内叶再断开成孔。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })

  // ============ 四、内吞的多种形式 ============
  b.panel(710, 586, 660, 394, { title: '四、内吞的多种形式' })
  b.bilayer(740, 664, 200, { tint: C.dna })
  b.vesicle(840, 726, 36, { coat: 'clathrin', fill: C.bg })
  b.virion(840, 726, 13, { shape: 'icosahedral', stroke: C.bad })
  b.ctext(840, 790, '网格蛋白介导的内吞', { size: 11.5, weight: 700, fill: C.sub })
  b.ctext(840, 810, '衣被小泡掐入胞内', { size: 10, fill: C.mute })
  b.bilayer(1010, 664, 200, { tint: C.dna })
  b.path('M 1032,676 C 1012,716 1032,756 1072,760', { fill: 'none', stroke: C.dna, sw: 5 })
  b.path('M 1188,676 C 1208,716 1188,756 1148,760', { fill: 'none', stroke: C.dna, sw: 5 })
  b.virion(1110, 716, 17, { shape: 'icosahedral', stroke: C.bad })
  b.ctext(1110, 790, '大胞饮', { size: 11.5, weight: 700, fill: C.sub })
  b.ctext(1110, 810, '膜皱褶大量吞饮液体与颗粒', { size: 10, fill: C.mute })
  b.wtext(730, 856, '内体的意义：提供酸度梯度等触发信号——多数经内吞侵入的病毒，其融合蛋白在低 pH 下才变构活化；内体也是很多病毒「脱壳」的车间。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 912, '选择哪条路，取决于融合蛋白的触发方式与受体的位置（表面受体 vs 内体受体）。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })
}

export default scene({
  title: '融合与内吞：两条侵入通路、三类融合蛋白与融合孔',
  subtitle: '中性 pH 融合发生于细胞表面、低 pH 依赖者待内体酸化；I 类须切割活化（HA0→HA1/HA2）、II 类重折为三聚体、III 类兼含两类元件；融合经半融合中间体成孔',
  draw,
})
