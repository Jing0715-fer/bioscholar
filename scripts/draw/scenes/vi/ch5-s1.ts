// vi ch5-s1 复制的总原则（39-j 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、复制场所：核内与胞质两大阵营 ============
  b.panel(30, 132, 660, 430, { title: '一、复制场所：核内与胞质两大阵营' })
  b.cell(350, 350, 300, 172, { stroke: C.sub })
  b.nucleusU(230, 330, 84)
  b.tag(230, 250, '核内阵营', { fill: C.proL, stroke: C.pro, size: 12, weight: 700, tfill: C.proD, pad: 10 })
  b.wtext(130, 448, '须用宿主 Pol II 者：入核转录复制——SV40、腺病毒、疱疹病毒、乳多空病毒。', { size: 10.5, fill: C.sub, maxW: 260, lh: 15 })
  b.zone(380, 260, 250, 160, { label: '胞质阵营', fill: C.accL })
  b.tag(505, 330, '痘病毒工厂', { fill: C.accL, stroke: C.acc, size: 11.5, tfill: C.accD, pad: 9 })
  b.virion(505, 380, 12, { shape: 'icosahedral', stroke: C.rna })
  b.ctext(505, 414, '大多数 RNA 病毒', { size: 10.5, fill: C.sub })
  b.wtext(390, 448, '基因组不可被宿主读取者：自带聚合酶留在胞质——痘病毒、大多数 RNA 病毒。', { size: 10.5, fill: C.sub, maxW: 260, lh: 15 })
  b.wtext(50, 500, '选址逻辑：能否借用宿主聚合酶、基因组的「可读性」——两问答案决定毒粒开包后的去向。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })

  // ============ 二、聚合酶的三大来源 ============
  b.panel(710, 132, 660, 430, { title: '二、聚合酶的三大来源' })
  const src: { nm: string; c: string; txt: string; rep: string }[] = [
    { nm: '① 完全借用宿主酶', c: C.dna, txt: '环状小 DNA 基因组直接调用宿主复制机器：Pol α/δ、Pol II 一应俱全。', rep: 'SV40 · 乳多空病毒' },
    { nm: '② 毒粒自带', c: C.bad, txt: '基因组不可被宿主读取者，毒粒必携 RdRp——或如痘病毒整套转录系随颗粒包装。', rep: '负链 RNA 病毒 · 痘病毒' },
    { nm: '③ 感染后新合成', c: C.rna, txt: '基因组即 mRNA：进胞先翻译出聚合酶，再回头开始复制。', rep: '＋ssRNA 病毒（小 RNA 病毒等）' },
  ]
  src.forEach((s, i) => {
    const y0 = 190 + i * 122
    b.tag(768, y0 + 18, s.nm, { fill: s.c + '22', stroke: s.c, size: 12, weight: 700, tfill: s.c, pad: 10 })
    b.wtext(930, y0 + 6, s.txt, { size: 10.5, fill: C.sub, maxW: 400, lh: 15 })
    b.text(930, y0 + 76, `代表：${s.rep}`, { size: 10, weight: 700, fill: s.c })
    if (i === 0) {
      b.cell(790, y0 + 70, 40, 24, { stroke: C.dna })
      b.ctext(790, y0 + 74, '宿主', { size: 9, fill: C.dnaD })
      b.arrow(836, y0 + 70, 868, y0 + 70, { stroke: C.dna, sw: 1.8, marker: 'dna' })
      b.ellipse(896, y0 + 70, 26, 17, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
      b.ctext(896, y0 + 74, 'Pol', { size: 9.5, weight: 700, fill: C.dnaD })
    } else if (i === 1) {
      b.virion(800, y0 + 70, 14, { shape: 'enveloped', stroke: C.bad })
      b.circle(866, y0 + 70, 11, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
      b.ctext(866, y0 + 74, 'RdRp', { size: 7.5, weight: 700, fill: C.enzD })
      b.ctext(866, y0 + 96, '随毒粒进胞', { size: 9, fill: C.mute })
    } else {
      b.rnaW(770, y0 + 62, 70, { stroke: C.rna, amp: 7 })
      b.ribo(866, y0 + 70, { scale: 0.8 })
      b.ctext(866, y0 + 100, '先翻译、后复制', { size: 9, fill: C.mute })
    }
  })

  // ============ 三、复制中间体与正负链不对称 ============
  b.panel(30, 586, 660, 394, { title: '三、复制型与分枝状中间体：正负链不对称' })
  b.ctext(95, 656, '＋RNA', { size: 11, weight: 700, fill: C.rna })
  b.line(60, 668, 130, 668, { stroke: C.rna, sw: 3 })
  b.arrow(140, 668, 180, 668, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.rect(190, 656, 120, 24, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.dna(196, 668, 108, { stroke: C.rna, amp: 8, period: 46 })
  b.ctext(250, 700, '复制型（RF，双链）', { size: 10, fill: C.mute })
  b.arrow(320, 668, 360, 668, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.rect(370, 640, 150, 56, { fill: C.panelB, stroke: C.rna, sw: 1.5, rx: 7 })
  b.dna(380, 668, 130, { stroke: C.rna, amp: 8, period: 50 })
  b.line(420, 660, 420, 620, { stroke: C.rna, sw: 2.4 })
  b.line(480, 676, 480, 716, { stroke: C.rna, sw: 2.4 })
  b.ctext(445, 714, '分枝状复制中间体', { size: 10, fill: C.mute })
  b.arrow(530, 668, 570, 668, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.rnaW(580, 660, 90, { stroke: C.rna, amp: 7 })
  b.rnaW(580, 690, 90, { stroke: C.rna, amp: 7 })
  b.ctext(625, 724, '大量子代＋链', { size: 10, weight: 700, fill: C.rna })
  b.text(50, 782, '产出高度不对称：', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(190, 798, 300, 22, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.ctext(346, 813, '（＋）链：海量——装进毒粒、兼作 mRNA', { size: 10.5, fill: C.rnaD })
  b.rect(190, 832, 70, 22, { fill: C.panelB, stroke: C.bad, sw: 1.6 })
  b.ctext(270, 847, '（−）链：仅作模板', { size: 10.5, fill: C.bad })
  b.wtext(50, 896, 'RNA 复制经复制型（RF）与分枝状复制中间体运转；子代链从中间体上不断「收割」，正链远多于负链。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 四、转录模式与时序级联 ============
  b.panel(710, 586, 660, 394, { title: '四、转录的对称性与时序级联' })
  b.text(730, 646, '对称 vs 非对称转录：', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(730, 664, 260, 60, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.rnaW(760, 686, 90, { stroke: C.rna, amp: 6 })
  b.rnaW(880, 686, 90, { stroke: C.dna, amp: 6 })
  b.ctext(860, 712, '对称（呼肠孤特例）：两条链都当模板', { size: 10, fill: C.sub })
  b.rect(1010, 664, 320, 60, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.line(1040, 686, 1090, 686, { stroke: C.dna, sw: 3 })
  b.rnaW(1100, 686, 120, { stroke: C.rna, amp: 6 })
  b.ctext(1170, 712, '非对称（主流）：只产（＋）mRNA', { size: 10, fill: C.sub })
  b.ctext(860, 744, '聚合酶在「转录」与「复制」两模式间由辅助因子切换', { size: 10.5, fill: C.mute })
  b.text(730, 782, '立即早期—早期—晚期级联：', { size: 12.5, weight: 700, fill: C.ink })
  b.stairs(730, 806, 620, 130, ['立即早期：接管与防御', '早期：造复制工具', '晚期：造结构建材'], { fill: C.accL, stroke: C.acc, size: 11 })
  b.ctext(1040, 962, '「先造工具、后造建材」的资源调度', { size: 11.5, weight: 700, fill: C.accD })
}

export default scene({
  title: '病毒基因组复制的总原则：场所、聚合酶来源与中间体',
  subtitle: '核内（借宿主 Pol II）vs 胞质（自带聚合酶）；聚合酶三来源；RNA 复制经复制型与分枝中间体、正负链不对称；立即早期—早期—晚期级联调度资源',
  draw,
})
