// vi ch4-s4 侵入方式的多样性与抗侵入策略（39-j 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、gp41 六螺旋束与恩夫韦肽 ============
  b.panel(30, 132, 660, 430, { title: '一、gp41 六螺旋束：融合的终局与药物靶点' })
  b.bilayer(60, 186, 200, { tint: C.bad })
  b.ctext(160, 172, '病毒包膜', { size: 10.5, fill: C.mute })
  b.bilayer(60, 372, 200, { tint: C.dna })
  b.ctext(160, 400, '靶细胞膜', { size: 10.5, fill: C.mute })
  for (let k = 0; k < 3; k++) {
    b.rect(104 + k * 22, 200, 10, 56, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 4 })
    b.rect(104 + k * 22, 302, 10, 56, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 4 })
    b.path(`M 109,${302 + k * 0} C ${80 + k * 12},280 ${80 + k * 12},232 109,${262 - k * 0}`, { fill: 'none', stroke: C.rna, sw: 1.6, dash: '4 3' })
  }
  b.ctext(160, 286, 'HR1（三聚体芯）', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(160, 296, '', { size: 1 })
  b.ctext(160, 320, 'HR2 折回', { size: 10.5, weight: 700, fill: C.rna })
  b.arrow(150, 262, 150, 296, { stroke: C.ink, sw: 1.6, marker: 'ink' })
  b.tag(160, 434, '六螺旋束＝两膜拉拢锁定', { fill: C.okL, stroke: C.ok, size: 11, weight: 700, tfill: '#065f46', pad: 9 })
  b.wtext(300, 196, 'I 类融合的终末结构：HR1 三条螺旋成芯、HR2 三条折回包拢，六螺旋束像拉链把两膜锁死——融合完成。', { size: 11, fill: C.sub, maxW: 370, lh: 16 })
  b.rect(300, 258, 370, 148, { fill: C.badL, stroke: C.bad, sw: 1.7, rx: 9 })
  b.text(316, 282, '恩夫韦肽（T-20，2003 年获批）', { size: 12.5, weight: 700, fill: C.bad })
  b.rect(340, 300, 84, 14, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 6 })
  b.ctext(382, 311, '药物肽（36 aa）', { size: 9.5, weight: 700, fill: C.rna })
  b.arrow(382, 322, 382, 344, { stroke: C.bad, sw: 2, marker: 'bad' })
  for (let k = 0; k < 3; k++) b.rect(348 + k * 22, 350, 10, 40, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 4 })
  b.ctext(382, 388, '抢占 HR1 芯', { size: 9.5, weight: 700, fill: C.bad })
  b.wtext(316, 320, '模拟 HR2 序列、抢先与 HR1 芯结合——真正的 HR2 无处可折，融合被阻断。首个融合抑制剂。', { size: 10.5, fill: C.sub, maxW: 220, lh: 15 })

  // ============ 二、三条非常规侵入路径 ============
  b.panel(710, 132, 660, 430, { title: '二、侵入方式的多样性：三条非常规路径' })
  const paths: { nm: string; c: string; txt: string; icon: 'ad' | 'sv40' | 'ebo' }[] = [
    { nm: '腺病毒：内体破裂', c: C.acc, txt: '五邻体基板结合整合素并触发内吞；酸化后变构释放蛋白 VI，裂解内体膜破膜而出。', icon: 'ad' },
    { nm: 'SV40：内质网脱壳', c: C.dna, txt: '经内质网逆行转运，借宿主 ERAD 机器「逆转位」进入胞质，再入核——开辟「ER 脱壳」路径。', icon: 'sv40' },
    { nm: '埃博拉：内体受体', c: C.bad, txt: '以内体蛋白 NPC1 为受体、需组织蛋白酶先行切割——「内体受体」模式：受体在细胞内部。', icon: 'ebo' },
  ]
  paths.forEach((p, i) => {
    const y0 = 188 + i * 124
    b.tag(760, y0 + 20, p.nm, { fill: p.c + '22', stroke: p.c, size: 11.5, weight: 700, tfill: p.c, pad: 9 })
    b.wtext(920, y0 + 12, p.txt, { size: 10.5, fill: C.sub, maxW: 420, lh: 15 })
    if (p.icon === 'ad') {
      b.virion(780, y0 + 72, 13, { shape: 'icosahedral', stroke: C.acc })
      b.line(780, y0 + 52, 780, y0 + 62, { stroke: C.acc, sw: 1.6 })
      b.circle(830, y0 + 72, 30, { fill: C.accL, stroke: C.acc, sw: 1.6, dash: '5 4' })
      b.ctext(830, y0 + 76, '内体', { size: 10, fill: C.accD })
      b.arrow(864, y0 + 72, 906, y0 + 72, { stroke: C.bad, sw: 2, marker: 'bad' })
      b.ctext(884, y0 + 56, '蛋白 VI 破膜', { size: 9, weight: 700, fill: C.bad })
    } else if (p.icon === 'sv40') {
      b.erU(740, y0 + 66, 110, 24, { stroke: C.dna, ribo: false })
      b.virion(782, y0 + 62, 11, { shape: 'icosahedral', stroke: C.dna })
      b.arrow(858, y0 + 70, 900, y0 + 70, { stroke: C.dna, sw: 2, marker: 'dna' })
      b.ctext(878, y0 + 54, 'ERAD 逆转位', { size: 9, weight: 700, fill: C.dnaD })
      b.circle(930, y0 + 70, 24, { fill: '#ffffff', stroke: C.sub, sw: 1.6, dash: '4 4' })
      b.ctext(930, y0 + 74, '胞质', { size: 9.5, fill: C.sub })
    } else {
      b.virion(780, y0 + 66, 15, { shape: 'bullet', stroke: C.bad })
      b.circle(840, y0 + 70, 30, { fill: C.badL, stroke: C.bad, sw: 1.8 })
      b.ctext(840, y0 + 74, 'NPC1', { size: 10, weight: 700, fill: C.bad })
      b.arrow(874, y0 + 70, 916, y0 + 70, { stroke: C.bad, sw: 2, marker: 'bad' })
      b.ctext(894, y0 + 54, '组织蛋白酶切割', { size: 9, weight: 700, fill: C.bad })
    }
  })

  // ============ 三、抗侵入药物盘点 ============
  b.panel(30, 586, 660, 394, { title: '三、抗侵入药物盘点：作用于胞外环节' })
  b.table(50, 646, 620, {
    headers: ['药物 / 策略', '靶点', '作用环节'],
    colW: [180, 190, 250],
    rows: [
      ['恩夫韦肽（2003）', 'gp41 六螺旋束', '36 aa 肽模拟 HR2，阻断融合'],
      ['马拉维若（2008）', '宿主 CCR5 共受体', '封堵共受体（首个宿主靶点）'],
      ['金刚烷胺类', 'M2 离子通道', '抑制酸化脱壳（已普遍耐药）'],
    ],
    rowH: 48, fontSize: 12,
  })
  b.wtext(50, 846, '马拉维若不攻击病毒、而封堵宿主分子 CCR5——首个以宿主为靶的抗病毒药；用药前须检测病毒向性（仅 R5 毒株有效）。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(50, 896, '抗侵入药物共同的优势：在胞外环节拦截，不待病毒进细胞即失其感染性。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })

  // ============ 四、原则与局限 ============
  b.panel(710, 586, 660, 394, { title: '四、抗侵入策略的原则与局限' })
  b.bilayer(760, 700, 240, { tint: C.dna })
  b.virion(820, 646, 16, { shape: 'enveloped', stroke: C.bad })
  b.virion(1000, 646, 16, { shape: 'icosahedral', stroke: C.bad })
  b.line(790, 660, 1070, 660, { stroke: C.ok, sw: 2.4, dash: '8 6' })
  b.ctext(930, 640, '药物拦截线（胞外）', { size: 11, weight: 700, fill: '#065f46' })
  b.ctext(880, 730, '细胞膜', { size: 10, fill: C.mute })
  b.wtext(730, 780, '局限：病毒表面蛋白变异极快（尤其包膜刺突的抗原漂移），单靶药物很快被逃逸。', { size: 11, fill: C.sub, maxW: 300, lh: 16 })
  b.wtext(730, 836, '对策：与其他机制药物联用——多环节同时施压，降低逃逸空间。', { size: 11, weight: 700, fill: C.ink, maxW: 300, lh: 16 })
  b.rect(1070, 760, 260, 120, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(1086, 784, '联合用药', { size: 12.5, weight: 700, fill: C.ink })
  b.tag(1130, 812, '融合抑制剂', { fill: C.badL, stroke: C.bad, size: 10.5, tfill: C.bad, pad: 8 })
  b.tag(1266, 812, '共受体拮抗', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 8 })
  b.tag(1198, 852, '＋ 其他机制药物', { fill: C.okL, stroke: C.ok, size: 10.5, tfill: '#065f46', pad: 8 })
  b.ctext(1200, 760, '', { size: 1 })
  b.wtext(730, 918, '宿主靶点（如 CCR5）不随病毒变异——把靶子换成不易变的宿主分子，是抗侵入策略的重要出路。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })
}

export default scene({
  title: '侵入方式的多样性与抗侵入策略：六螺旋束、ER 脱壳与内体受体',
  subtitle: '恩夫韦肽（36 aa，2003）模拟 HR2 抢占 HR1 芯；SV40 借 ERAD 逆转位「ER 脱壳」；埃博拉以内体 NPC1 为受体；马拉维若（2008）为首个宿主靶点药，须测向性',
  draw,
})
