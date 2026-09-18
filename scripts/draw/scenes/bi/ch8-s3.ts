// bi ch8-s3 基因组注释（39-i 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、流水线总览 ============
  b.panel(30, 132, 1340, 250, { title: '一、注释流水线：重复先行 → 结构合流 → 功能转移 → 完整性体检' })
  const stage = (x: number, t: string, s: string) => {
    b.rect(x, 185, 224, 112, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 9, fillOp: 0.55 })
    b.ctext(x + 112, 214, t, { size: 13, weight: 700, fill: C.accD })
    b.wtext(x + 14, 240, s, { size: 10.5, fill: C.sub, maxW: 196, lh: 14.5 })
  }
  stage(68, '原始基因组组装', '重叠群 / 支架序列，尚未指认任何元件')
  stage(328, '① 重复注释先行', 'RepeatMasker 同源屏蔽 ＋ RepeatModeler 等 de novo 挖掘；软屏蔽（小写化）为默认')
  stage(588, '② 基因结构注释', '从头预测 ＋ 转录证据 ＋ 蛋白同源三方合流，EVM / MAKER 加权投票')
  stage(848, '③ 功能注释', '直向同源转移 ＋ InterProScan 签名扫描，两条路线互为印证')
  stage(1108, '④ 完整性评估', 'BUSCO 以单拷贝直系同源标记集四桶统计')
  for (const x of [292, 552, 812, 1072]) b.arrow(x, 241, x + 36, 241, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.wtext(60, 336, '软屏蔽仅把重复区碱基小写化——位置与序列信息俱在，故为默认；重复屏蔽不先行，基因预测会被转座子淹没。', { size: 11.5, fill: C.sub, maxW: 1280, lh: 16 })

  // ============ 二、三方合流 ============
  b.panel(30, 406, 660, 574, { title: '二、基因结构注释：三方证据的加权合流' })
  const src = (y: number, t: string, s: string) => {
    b.rect(60, y, 220, 64, { fill: C.rnaL, stroke: C.rna, sw: 1.7, rx: 8, fillOp: 0.6 })
    b.ctext(170, y + 27, t, { size: 13, weight: 700, fill: C.rnaD })
    b.ctext(170, y + 49, s, { size: 11, fill: C.sub })
  }
  src(470, '从头预测', '不依赖外部证据的编码概率模型')
  src(556, '转录证据', 'RNA-seq / EST 比对定边界')
  src(642, '蛋白同源', '近缘物种蛋白比对定编码可靠性')
  b.arrow(280, 502, 345, 552, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.arrow(280, 588, 345, 590, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.arrow(280, 674, 345, 628, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.rect(348, 540, 230, 100, { fill: C.proL, stroke: C.pro, sw: 2, rx: 10 })
  b.ctext(463, 578, 'EVM / MAKER', { size: 14, weight: 700, fill: C.proD })
  b.ctext(463, 602, '按证据类型加权投票', { size: 11.5, fill: C.sub })
  b.arrow(463, 640, 463, 668, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.rect(348, 668, 230, 56, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 8, fillOp: 0.5 })
  b.ctext(463, 701, '一致基因集', { size: 13, weight: 700, fill: C.proD })
  b.text(60, 766, '评估须区分三种口径', { size: 13.5, weight: 700, fill: C.ink })
  b.tag(150, 798, '核苷酸级', { fill: C.panelB, stroke: C.line, size: 12, weight: 600, tfill: C.sub, pad: 10 })
  b.tag(350, 798, '外显子级', { fill: C.panelB, stroke: C.line, size: 12, weight: 600, tfill: C.sub, pad: 10 })
  b.tag(550, 798, '基因级', { fill: C.panelB, stroke: C.line, size: 12, weight: 600, tfill: C.sub, pad: 10 })
  b.wtext(60, 838, '同一注释集在三种口径下的灵敏度可以相差悬殊——报告口径先于数字本身。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(60, 876, 'EvidenceModeler / MAKER 对各证据源加权投票：权重反映每类证据的历史可靠性，最终输出单一一致基因模型。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 三、功能注释与 BUSCO ============
  b.panel(710, 406, 660, 574, { title: '三、功能注释：直向同源转移与 BUSCO 完整性体检' })
  b.text(740, 458, '直向同源（可转移） vs 旁向同源（慎转移）', { size: 13.5, weight: 700, fill: C.ink })
  b.rect(740, 474, 290, 148, { fill: C.dnaL, stroke: C.dna, sw: 1.7, rx: 10, fillOp: 0.4 })
  b.circle(820, 530, 20, { fill: C.bg, stroke: C.dna, sw: 2 })
  b.ctext(820, 535, 'a', { size: 12.5, weight: 700, fill: C.dnaD, italic: true })
  b.circle(950, 530, 20, { fill: C.bg, stroke: C.dna, sw: 2 })
  b.ctext(950, 535, 'a′', { size: 12.5, weight: 700, fill: C.dnaD, italic: true })
  b.line(840, 530, 930, 530, { stroke: C.dna, sw: 1.8, dash: '5 4' })
  b.ctext(885, 512, '物种分化', { size: 10.5, weight: 700, fill: C.dnaD })
  b.wtext(756, 586, '直向同源：功能通常保守——注释转移的首选。', { size: 11, fill: C.sub, maxW: 262, lh: 15 })
  b.rect(1050, 474, 290, 148, { fill: C.enzL, stroke: C.enz, sw: 1.7, rx: 10, fillOp: 0.4 })
  b.circle(1130, 530, 20, { fill: C.bg, stroke: C.enz, sw: 2 })
  b.ctext(1130, 535, 'a₁', { size: 12.5, weight: 700, fill: C.enzD, italic: true })
  b.circle(1260, 530, 20, { fill: C.bg, stroke: C.enz, sw: 2 })
  b.ctext(1260, 535, 'a₂', { size: 12.5, weight: 700, fill: C.enzD, italic: true })
  b.line(1150, 530, 1240, 530, { stroke: C.enz, sw: 1.8, dash: '5 4' })
  b.ctext(1195, 512, '基因复制', { size: 10.5, weight: 700, fill: C.enzD })
  b.wtext(1066, 586, '旁向同源：常已分化——功能转移须谨慎。', { size: 11, fill: C.sub, maxW: 262, lh: 15 })
  b.rect(740, 636, 600, 40, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 8, fillOp: 0.5 })
  b.ctext(1040, 661, '转移门槛宁紧勿松：同一性约 ≥ 40% 且覆盖过半', { size: 12.5, weight: 700, fill: '#92400e' })
  b.wtext(740, 700, '两条路线互为印证：签名扫描答「凭什么能做」，直向同源转移答「叫什么、做什么」。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.text(740, 736, 'BUSCO：以类群特异的单拷贝直系同源标记集体检', { size: 13.5, weight: 700, fill: C.ink })
  const pattern = [
    'OOOOOOODOO', 'OOOOOOOOOM', 'OODOOOOOOO', 'OOOOOMOOOF',
  ]
  pattern.forEach((row, r) => {
    row.split('').forEach((ch, c) => {
      const color = ch === 'O' ? C.ok : ch === 'D' ? C.pro : ch === 'M' ? C.faint : C.bad
      b.rect(740 + c * 26, 758 + r * 26, 24, 24, { fill: color, fillOp: 0.75, stroke: C.line, sw: 0.6, rx: 3 })
    })
  })
  b.wtext(1030, 772, '四桶：单拷贝完整、重复、缺失、碎片——汇总为完整度百分比。', { size: 11.5, fill: C.sub, maxW: 300, lh: 16 })
  b.legend(740, 886, [
    ['单拷贝', C.ok], ['重复', C.pro], ['缺失', C.faint], ['碎片', C.bad],
  ], { size: 11.5, gap: 14 })
  b.wtext(740, 924, '全基因组加倍物种「重复」偏高属正常；BUSCO 高分不担保基因家族注释正确——最宜作同一流程下的比较性体检。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
}

export default scene({
  title: '基因组注释：重复先行、三方证据合流与 BUSCO 体检',
  subtitle: 'RepeatMasker 同源屏蔽与 RepeatModeler de novo 挖掘互补，软屏蔽（小写化）为默认；结构注释由从头预测、转录证据与蛋白同源三方合流，EVM/MAKER 加权投票输出一致基因集，评估须区分核苷酸级、外显子级与基因级口径；功能注释以直向同源转移为核心（同一性约 ≥40% 且覆盖过半，宁紧勿松）；BUSCO 四桶统计完整性——高分不担保基因家族注释正确',
  draw,
})
