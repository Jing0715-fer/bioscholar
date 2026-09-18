// ne ch11-s2 自主神经与神经内分泌 / 下丘脑与垂体（39-h 批C）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、下丘脑：稳态总枢纽 ============
  b.panel(30, 132, 660, 430, { title: '一、下丘脑：采样三路输入，执行四路输出' })
  b.rect(240, 260, 240, 130, { fill: C.proL, fillOp: 0.55, stroke: C.pro, sw: 2.2, rx: 10 })
  b.ctext(360, 300, '下丘脑', { size: 17, weight: 700, fill: C.proD })
  b.ctext(360, 322, '（约 4 g · 稳态的总枢纽）', { size: 11, fill: C.mute })
  b.ctext(360, 348, '「采样—比较—设定点」', { size: 11, weight: 700, fill: C.sub })
  // 输入（左）
  b.wtext(60, 226, '输入三路', { size: 12, weight: 700, fill: C.ink })
  const ins = ['孤束核内脏传入', '边缘系统（杏仁核等）调制', '血液直接采样（温度/渗透压）']
  ins.forEach((s, i) => {
    b.tag(140, 262 + i * 40, s, { fill: C.panelB, stroke: C.line, size: 10.5, weight: 600, tfill: C.sub, pad: 7, minh: 26 })
  })
  b.arrow(200, 300, 240, 300, { stroke: C.sub, sw: 2, marker: 'ink' })
  // 输出（右）
  b.wtext(540, 226, '输出四路', { size: 12, weight: 700, fill: C.ink })
  const outs: Array<[string, number]> = [['自主神经（交感/副交感）', 262], ['大细胞 → 神经垂体', 302], ['小细胞 → 垂体门脉', 342], ['边缘联系（行为输出）', 382]]
  outs.forEach(([s, y]) => {
    b.tag(560, y, s, { fill: C.accL, stroke: C.acc, size: 10.5, weight: 600, tfill: C.accD, pad: 7, minh: 26 })
  })
  ;[262, 302, 342, 382].forEach(y => b.arrow(480, y, 520, y, { stroke: C.sub, sw: 1.8, marker: 'ink' }))
  b.wtext(60, 440, '体温、渗透压、血糖、体重与生殖内分泌的设定点均在此维护——四路输出并行执行同一稳态决策。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(60, 500, '「神经内分泌的总开关」：神经元既是神经元的指挥官，又是腺体的分泌细胞。', { size: 11, weight: 700, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、大细胞与小细胞两套分泌系统 ============
  b.panel(710, 132, 660, 430, { title: '二、大细胞直达血循环，小细胞经门脉近距离调控' })
  // 大细胞系统
  b.rect(740, 196, 290, 160, { fill: C.rnaL, fillOp: 0.45, stroke: C.rna, sw: 1.8, rx: 9 })
  b.text(756, 222, '大细胞系统 → 神经垂体', { size: 12.5, weight: 700, fill: C.rnaD })
  b.wtext(756, 246, '视上核与室旁核大细胞神经元合成 ADH 与催产素，经轴突运送至神经垂体储存，由动作电位触发释放入血。', { size: 11, fill: C.sub, maxW: 258, lh: 16 })
  b.wtext(756, 330, '神经垂体是下丘脑的延伸而非腺体。', { size: 11, weight: 700, fill: C.rnaD, maxW: 258, lh: 15 })
  // 小细胞系统
  b.rect(1050, 196, 290, 160, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.8, rx: 9 })
  b.text(1066, 222, '小细胞系统 → 垂体门脉', { size: 12.5, weight: 700, fill: C.dnaD })
  b.wtext(1066, 246, '经正中隆起释入垂体门脉，以 TRH、CRH、GnRH、GHRH、SST、DA 六类调节激素控制腺垂体七种激素。', { size: 11, fill: C.sub, maxW: 258, lh: 16 })
  b.wtext(1066, 330, '门脉使微量激素近距离高效送达。', { size: 11, weight: 700, fill: C.dnaD, maxW: 258, lh: 15 })
  // GnRH 脉冲
  b.wtext(740, 396, 'GnRH 脉冲频率决定格局：', { size: 12, weight: 700, fill: C.ink })
  const pulses: Array<[number, number]> = [[760, 420], [800, 420], [840, 420], [880, 420], [920, 420], [960, 420], [1000, 420]]
  pulses.forEach(([x, y]) => b.line(x, y + 24, x, y, { stroke: C.dna, sw: 2.4 }))
  b.line(748, 444, 1010, 444, { stroke: C.faint, sw: 1.6 })
  b.wtext(740, 470, '慢脉冲（约 90 分钟一次）偏向 FSH、快脉冲偏向 LH——脉冲信号本身携带信息，持续给药反致受体下调。', { size: 11, fill: C.sub, maxW: 590, lh: 16 })
  b.wtext(740, 522, '腺垂体七种激素：GH、PRL、ACTH、TSH、LH、FSH、MSH。', { size: 11, weight: 700, fill: C.mute, maxW: 590, lh: 15 })

  // ============ 三、反馈层级 ============
  b.panel(30, 578, 1340, 396, { title: '三、反馈层级：长环负反馈为主，两个著名例外' })
  // 三级轴示意
  const axis: Array<[string, string]> = [['下丘脑（CRH / GnRH / TRH …）', C.pro], ['垂体（ACTH / LH / TSH …）', C.acc], ['靶腺（皮质醇 / 性激素 / T3 T4）', C.dna]]
  axis.forEach(([name, c], i) => {
    b.rect(90 + i * 420, 650, 330, 56, { fill: C.panelB, stroke: c, sw: 2, rx: 9 })
    b.ctext(255 + i * 420, 684, name, { size: 12.5, weight: 700, fill: C.ink })
    if (i < 2) b.arrow(420 + i * 420, 678, 510 + i * 420, 678, { stroke: C.sub, sw: 2.6, marker: 'ink' })
  })
  // 长环负反馈
  b.path('M1150,714 C1150,760 600,760 240,714', { stroke: C.bad, sw: 2.4, dash: '8 5', marker: 'bad' })
  b.ctext(700, 768, '长环负反馈：靶腺激素抑制下丘脑与垂体（主导机制）', { size: 11.5, weight: 700, fill: C.bad })
  // 例外卡
  b.rect(90, 800, 590, 110, { fill: C.rnaL, fillOp: 0.4, stroke: C.rna, sw: 1.6, rx: 9 })
  b.text(106, 826, '例外一：排卵前雌激素正反馈翻转', { size: 12.5, weight: 700, fill: C.rnaD })
  b.wtext(106, 850, '雌激素持续高水平不再抑制、反而触发 LH 峰与排卵——同一激素因浓度与时程而作用翻转。', { size: 11, fill: C.sub, maxW: 560, lh: 16 })
  b.rect(700, 800, 630, 110, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(716, 826, '例外二：应激时 CRH 越权', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(716, 850, '应激令 CRH 同时抑制 GnRH 与 TSH 轴（「应激性闭经」「应激性甲减」）——生存优先于生殖与代谢。', { size: 11, fill: C.sub, maxW: 598, lh: 16 })
  b.wtext(90, 940, '定位诊断按「靶腺—促激素—兴奋试验」层级展开：先测靶腺激素，再测促激素，最后用兴奋试验区分病变在垂体还是下丘脑。', { size: 11, fill: C.mute, maxW: 1240, lh: 15 })
}

export default scene({
  title: '下丘脑与垂体：神经内分泌的总开关',
  subtitle: '大细胞直达神经垂体释 ADH/催产素；小细胞经垂体门脉以六类激素调度腺垂体七种激素',
  draw,
})
