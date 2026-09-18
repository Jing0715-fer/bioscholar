// vi ch7-s4 裂解与细胞间传播（39-j 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、裂解三件套 ============
  b.panel(30, 132, 660, 430, { title: '一、革兰阴性噬菌体裂解的三件套' })
  b.bilayer(60, 200, 560, { tint: C.pro })
  b.ctext(340, 192, '外膜', { size: 10, fill: C.proD })
  b.rect(60, 232, 560, 16, { fill: C.accL, stroke: C.acc, sw: 1.4 })
  b.ctext(340, 244, '肽聚糖细胞壁', { size: 9.5, fill: C.accD })
  b.bilayer(60, 276, 560, { tint: C.dna })
  b.ctext(340, 268, '内膜', { size: 10, fill: C.dnaD })
  b.ctext(150, 320, '胞质', { size: 10, fill: C.mute })
  // 三件套
  b.circle(120, 276, 10, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
  b.ctext(120, 280, 'S', { size: 9, weight: 700, fill: '#78350f' })
  b.arrow(120, 264, 120, 240, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.tag(210, 276, '① 穿孔素：内膜成孔（定时）', { fill: C.warnL, stroke: C.warn, size: 10.5, tfill: '#78350f', pad: 8 })
  b.circle(390, 248, 10, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(390, 252, 'R', { size: 9, weight: 700, fill: C.bad })
  b.tag(500, 248, '② 内溶素：破壁', { fill: C.badL, stroke: C.bad, size: 10.5, tfill: C.bad, pad: 8 })
  b.tag(330, 200, '③ spanin：融合内外膜', { fill: C.enzL, stroke: C.enz, size: 10.5, tfill: C.enzD, pad: 8 })
  b.wtext(50, 356, 'λ 的 S 蛋白以双起始密码子内置「定时器与保险栓」：到点才穿膜、误伤被兜底——裂解时机是精密编程的。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(50, 400, '三件齐备方裂解：孔一开、内溶素经孔到壁、spanin 拢合内外膜——细胞瞬间瓦解。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })
  b.wtext(50, 440, 'T4 的裂解抑制现象表明：裂解时机是可被环境信号调校的生活史参数（r 基因座突变体呈快裂解表型）。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、蚀斑：裂解与扩散的表型记录 ============
  b.panel(710, 132, 660, 430, { title: '二、蚀斑：无包膜病毒的裂解释放记录' })
  b.circle(880, 330, 108, { fill: C.accL, stroke: C.acc, sw: 2.2 })
  const plq: [number, number, number][] = [[850, 300, 26], [930, 350, 20], [860, 380, 13], [912, 278, 10], [838, 345, 9]]
  plq.forEach(([px, py, r]) => {
    b.circle(px, py, r, { fill: '#ffffff', stroke: C.bad, sw: 1.8, dash: '3 3' })
    b.circle(px, py, 4, { fill: C.bad })
  })
  b.ctext(880, 452, '细胞单层上的溶解斑', { size: 11.5, weight: 700, fill: C.sub })
  b.wtext(1020, 210, '无包膜动物病毒（脊灰、腺病毒等）多经裂解释放；每一枚蚀斑＝一个感染单位的克隆后代。', { size: 11, fill: C.sub, maxW: 330, lh: 16 })
  b.wtext(1020, 290, '蚀斑形态记录裂解与扩散能力——大而清晰＝快裂快扩；兼作克隆纯化与减毒选育的表型平台。', { size: 11, fill: C.sub, maxW: 330, lh: 16 })
  b.wtext(1020, 370, '统计口径见下一章：蚀斑形成单位（PFU）是病毒学最早的定量语言。', { size: 11, fill: C.mute, maxW: 330, lh: 16 })

  // ============ 三、合胞体：跳过胞外阶段 ============
  b.panel(30, 586, 660, 394, { title: '三、合胞体：融合蛋白贯通相邻细胞' })
  b.cell(150, 760, 74, 46, { stroke: C.dna })
  b.cell(280, 760, 74, 46, { stroke: C.dna })
  b.cell(215, 760, 74, 46, { stroke: C.dna, dash: '5 4' })
  b.circle(150, 748, 7, { fill: C.ink })
  b.circle(180, 748, 7, { fill: C.ink })
  b.circle(280, 748, 7, { fill: C.ink })
  b.circle(310, 748, 7, { fill: C.ink })
  b.virion(215, 672, 11, { shape: 'enveloped', stroke: C.bad })
  b.arrow(215, 692, 215, 724, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(215, 654, '融合蛋白（F）', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(390, 646, '融合蛋白把相邻细胞膜打通：基因组直接穿堂而过、跳过胞外阶段——抗体在细胞外无从拦截。', { size: 11, fill: C.sub, maxW: 280, lh: 16 })
  b.wtext(390, 726, '呼吸道合胞病毒（RSV）即因合胞体病变得名。', { size: 11, fill: C.mute, maxW: 280, lh: 16 })
  b.wtext(50, 856, '多核巨细胞＝多个细胞共用一胞质——病毒把宿主组织改造成自己的公路网。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 四、病毒突触 ============
  b.panel(710, 586, 660, 394, { title: '四、病毒突触：定向的跨细胞投送' })
  b.cell(820, 720, 92, 66, { stroke: C.dna })
  b.ctext(820, 720, '供体细胞', { size: 11.5, weight: 700, fill: C.dnaD })
  b.cell(1150, 720, 92, 66, { stroke: C.acc })
  b.ctext(1150, 720, '靶细胞', { size: 11.5, weight: 700, fill: C.accD })
  b.rect(908, 700, 156, 40, { fill: C.badL, stroke: C.bad, sw: 2, rx: 10 })
  b.virion(960, 720, 10, { shape: 'enveloped', stroke: C.bad })
  b.virion(1000, 720, 10, { shape: 'enveloped', stroke: C.bad })
  b.ctext(986, 760, '病毒突触（肌动蛋白富集接触面）', { size: 10.5, weight: 700, fill: C.bad })
  b.arrow(830, 666, 940, 666, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(885, 650, '出芽即入突触', { size: 9.5, fill: C.bad })
  b.wtext(730, 800, 'HIV 经病毒突触的细胞间传播效率显著高于游离病毒——批量、定向、免受中和抗体。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 844, '高感染复数还带来互补与重组：不同突变体在突触里互通有无，耐药屏障被显著降低。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })
  b.wtext(730, 888, '裂解 / 出芽 / 合胞体 / 突触：释放与传播方式是产出节律、免疫暴露、演化速度的三维权衡。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })
}

export default scene({
  title: '裂解与细胞间传播：三件套、蚀斑、合胞体与病毒突触',
  subtitle: '穿孔素—内溶素—spanin 三件套定时裂解（λ S 蛋白双起始密码子）；蚀斑记录裂解扩散；融合蛋白贯通合胞体（RSV）；HIV 病毒突触传播效率高且降低耐药屏障',
  draw,
})
