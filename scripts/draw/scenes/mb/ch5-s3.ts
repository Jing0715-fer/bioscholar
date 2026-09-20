// mb ch5-s3 选择性剪接与反式剪接（39-b2 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、五种模式 ============
  b.panel(30, 132, 1340, 348, { title: '一、选择性剪接的五种模式（青框＝保留外显子，白框＝被跳过）' })
  const box = (x: number, y: number, w: number, h: number, s: string, keep: boolean, fs = 11) => {
    b.rect(x, y, w, h, { fill: keep ? C.dnaL : '#ffffff', stroke: keep ? C.dna : C.faint, sw: 1.6, rx: 4 })
    b.ctext(x + w / 2, y + h / 2 + 5, s, { size: fs, weight: 700, fill: keep ? C.dnaD : C.mute })
  }
  // 行 1：外显子跳跃
  b.text(56, 210, '外显子跳跃', { size: 12, weight: 700, fill: C.ink })
  box(200, 196, 80, 24, '外显子 1', true)
  box(300, 196, 80, 24, '外显子 2', false)
  box(400, 196, 80, 24, '外显子 3', true)
  box(500, 196, 80, 24, '外显子 4', true)
  b.path('M280,208 C 320,178 380,178 400,208', { stroke: C.rna, sw: 2.2, fill: 'none' })
  b.line(580, 208, 640, 208, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.text(700, 210, '果蝇 Dscam、α-原肌球蛋白', { size: 10.5, fill: C.mute })
  // 行 2：可变 3′ 剪接位点
  b.text(56, 272, '可变 3′ 位点', { size: 12, weight: 700, fill: C.ink })
  box(200, 252, 80, 24, '外显子 1', true)
  box(300, 246, 90, 20, '外显子 2a', true)
  box(330, 272, 60, 20, '2b', true)
  box(400, 252, 80, 24, '外显子 3', true)
  b.line(280, 256, 300, 256, { stroke: C.rna, sw: 2 })
  b.line(390, 256, 400, 256, { stroke: C.rna, sw: 2 })
  b.line(280, 282, 330, 282, { stroke: C.rna, sw: 2 })
  b.path('M390,282 L 396,282 L 396,264 L 400,264', { stroke: C.rna, sw: 2, fill: 'none' })
  b.line(480, 256, 500, 256, { stroke: C.rna, sw: 2 })
  b.text(700, 272, 'Bcl-x（长 / 短型调控凋亡）', { size: 10.5, fill: C.mute })
  // 行 3：互斥外显子
  b.text(56, 336, '互斥外显子', { size: 12, weight: 700, fill: C.ink })
  box(200, 320, 80, 24, '外显子 1', true)
  box(300, 312, 80, 20, '外显子 2a', false)
  box(300, 336, 80, 20, '外显子 2b', false)
  box(400, 320, 80, 24, '外显子 3', true)
  b.line(280, 322, 300, 322, { stroke: C.rna, sw: 2 })
  b.line(380, 322, 400, 322, { stroke: C.rna, sw: 2 })
  // 转录本线只画到外显子框边缘（避免穿过框内文字）
  b.line(280, 346, 300, 346, { stroke: C.rna, sw: 2 })
  b.line(380, 346, 400, 322, { stroke: C.rna, sw: 2 })
  b.text(700, 336, '肌钙蛋白 T', { size: 10.5, fill: C.mute })
  // 行 4：内含子保留
  b.text(56, 394, '内含子保留', { size: 12, weight: 700, fill: C.ink })
  box(200, 380, 80, 24, '外显子 1', true)
  box(300, 380, 80, 24, '内含子', false)
  box(400, 380, 80, 24, '外显子 2', true)
  b.path('M280,392 C 320,364 380,364 400,392', { stroke: C.rna, sw: 2, fill: 'none' })
  b.line(280, 392, 300, 392, { stroke: C.rna, sw: 2, dash: '5 4' })
  b.line(380, 392, 400, 392, { stroke: C.rna, sw: 2, dash: '5 4' })
  b.line(480, 392, 500, 392, { stroke: C.rna, sw: 2 })
  b.text(700, 394, '多在特定发育阶段出现', { size: 10.5, fill: C.mute })
  // 行 5：可变末端 / poly(A)
  b.text(56, 444, '可变末端 / poly(A)', { size: 12, weight: 700, fill: C.ink })
  box(200, 422, 84, 26, '外显子 1', true)
  box(300, 418, 124, 24, '末端 A（polyA）', true, 12)
  box(300, 442, 124, 24, '末端 B（polyA）', false, 12)
  b.line(284, 430, 300, 430, { stroke: C.rna, sw: 2 })
  b.line(424, 430, 470, 430, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.line(284, 454, 300, 454, { stroke: C.rna, sw: 2, dash: '5 4' })
  b.line(424, 454, 470, 454, { stroke: C.rna, sw: 2, dash: '5 4', marker: 'rna' })
  b.text(700, 444, '免疫球蛋白 M 膜型 / 分泌型', { size: 10.5, fill: C.mute })
  b.wtext(950, 200, '人约 95% 多外显子基因经历选择性剪接——蛋白质组多样性超过基因数目的主要原因。Dscam 经互斥外显子组合理论上可产生 38 000 余种异构体，是单一基因扩展信息容量的极致案例。', { size: 11.5, fill: C.sub, maxW: 400, lh: 17 })

  // ============ 二、顺式元件与反式因子 ============
  b.panel(30, 500, 700, 240, { title: '二、剪接调控：顺式元件 × 反式因子' })
  b.ellipse(150, 566, 50, 19, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.ctext(150, 571, 'SR 蛋白', { size: 11, weight: 700, fill: '#065f46' })
  b.arrow(204, 566, 240, 566, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.rect(244, 554, 52, 24, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 4 })
  b.ctext(270, 570, 'ESE', { size: 10.5, weight: 700, fill: '#065f46' })
  b.ellipse(460, 566, 52, 19, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(460, 571, 'hnRNP', { size: 11, weight: 700, fill: '#991b1b' })
  b.arrow(516, 566, 552, 566, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.rect(556, 554, 52, 24, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 4 })
  b.ctext(582, 570, 'ESS', { size: 10.5, weight: 700, fill: '#991b1b' })
  // RNA 骨架
  b.line(60, 606, 660, 606, { stroke: C.rna, sw: 2 })
  b.line(120, 598, 120, 614, { stroke: C.bad, sw: 2.2 })
  b.ctext(120, 630, '5′ 剪接位点', { size: 9.5, fill: C.bad })
  b.line(340, 598, 340, 614, { stroke: C.bad, sw: 2.2 })
  b.ctext(340, 630, '3′ 剪接位点', { size: 9.5, fill: C.bad })
  b.ctext(230, 630, '外显子', { size: 10, fill: C.mute })
  b.arrow(270, 580, 270, 602, { stroke: C.ok, sw: 1.6, marker: 'ok' })
  b.arrow(582, 580, 582, 602, { stroke: C.bad, sw: 1.6, marker: 'bad' })
  b.wtext(60, 656, '增强子元件（ESE / ISE）招募 SR 蛋白促进附近位点使用；沉默子元件（ESS / ISS）招募 hnRNP 蛋白抑制之。剪接因子常呈组织特异性（神经元 nSR100、肌细胞 PTB 重编程），同一基因在不同细胞产出不同 isoform。', { size: 11, fill: C.sub, maxW: 640, lh: 16 })

  // ============ 三、疾病与疗法 ============
  b.panel(750, 500, 620, 240, { title: '三、剪接失调致病与反义疗法' })
  b.text(770, 548, 'SMN2 外显子 7 跳跃', { size: 13, weight: 700, fill: C.bad })
  b.genes(770, 584, 500, [
    { label: '外显子 6', frac: 0.22, fill: C.dnaL, stroke: C.dna },
    { label: '外显子 7（被跳过）', frac: 0.36, fill: '#ffffff', stroke: C.bad },
    { label: '外显子 8', frac: 0.2, fill: C.dnaL, stroke: C.dna },
  ])
  b.wtext(770, 636, '外显子 7 被跳过导致脊髓性肌萎缩（SMA）；约 15%～50% 的致病点突变落于剪接信号，tau、TDP-43 等剪接异常参与神经退行性疾病。', { size: 11, fill: C.sub, maxW: 580, lh: 17 })
  b.rect(770, 672, 580, 50, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8, fillOp: 0.75 })
  b.text(786, 692, 'Spinraza（nusinersen）：反义寡核苷酸药物', { size: 12, weight: 700, fill: '#065f46' })
  b.wtext(786, 712, '掩盖 SMN2 的内含子沉默子、促进外显子 7 包含——理解剪接机制直接转化为疗法。', { size: 10.5, fill: C.sub, maxW: 552, lh: 14 })

  // ============ 四、反式剪接 ============
  b.panel(30, 756, 1340, 224, { title: '四、反式剪接：两个独立 RNA 分子的拼接' })
  const trans: [string, string, string][] = [
    ['锥虫', '所有成熟 mRNA 的 5′ 端均带相同的 39 nt 剪接前导序列（SL）', 'SL RNA 提供；分支机制类似，SL 内含子含 GU'],
    ['线虫', '约 70% mRNA 经 SL1（操纵子下游基因经 SL2）反式剪接', '与多顺反子转录本的「解体」偶联'],
    ['叶绿体', 'rps12 等基因两段外显子位于相反链', '必须靠反式剪接拼成完整 mRNA'],
  ]
  trans.forEach(([t, s, d], i) => {
    const x = 60 + i * 434
    b.rect(x, 800, 414, 96, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 10 })
    b.ctext(x + 207, 826, t, { size: 14.5, weight: 700, fill: C.ink })
    b.wtext(x + 207, 850, s, { size: 11, weight: 600, fill: C.sub, maxW: 390, lh: 15, anchor: 'middle' })
    b.wtext(x + 207, 882, d, { size: 10.5, fill: C.mute, maxW: 390, lh: 14, anchor: 'middle' })
  })
  b.text(60, 940, '剪接化学本质上是 RNA 之间的连接反应，与分子内 / 分子间无关——「以 RNA 为媒介的模块重组」。', { size: 11, fill: C.mute })
}

export default scene({
  title: '选择性剪接与反式剪接',
  subtitle: '外显子跳跃、可变位点、互斥外显子、内含子保留与可变 poly(A) 五种模式（人约 95% 多外显子基因）——SR/hnRNP 经 ESE/ESS 调控；锥虫 39 nt SL 与线虫 SL2 的反式剪接',
  draw,
})
