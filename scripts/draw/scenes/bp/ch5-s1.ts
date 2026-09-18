// bp ch5-s1 热力学定律在生物系统中的应用（39-e 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、生命不违反热力学 ============
  b.panel(30, 132, 1340, 292, { title: '一、生命是远离平衡的开放系统：进口负熵，出口更大的熵' })

  // -- 中：生物体系统框 --
  b.rect(470, 190, 460, 200, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 2.2, rx: 14 })
  b.ctext(700, 232, '生物体（低熵结构）', { size: 15, weight: 700, fill: C.ok })
  b.ctext(700, 258, '远离平衡的开放系统', { size: 11, fill: C.sub })
  b.circle(610, 300, 20, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.circle(610, 300, 7, { fill: C.proL, stroke: C.pro, sw: 1.4 })
  b.circle(780, 298, 26, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.circle(780, 298, 9, { fill: C.proL, stroke: C.pro, sw: 1.4 })
  b.ellipse(695, 322, 40, 16, { fill: C.okL, stroke: C.ok, sw: 1.6 })
  // 输入箭头（自由能）
  b.arrow(160, 250, 452, 250, { stroke: C.dna, sw: 3, marker: 'dna' })
  b.ctext(300, 232, '输入：自由能（光、食物）', { size: 12.5, weight: 700, fill: C.dnaD })
  b.wtext(110, 288, '低熵「燃料」：光子、葡萄糖、还原当量', { size: 10.5, fill: C.sub, maxW: 280, lh: 14 })
  // 输出箭头（熵）
  b.arrow(948, 250, 1250, 250, { stroke: C.bad, sw: 3, marker: 'bad' })
  b.ctext(1090, 232, '输出：熵（热 + 低能产物）', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(980, 288, '向环境排出更大的熵：CO₂、H₂O、废热', { size: 10.5, fill: C.sub, maxW: 280, lh: 14 })
  // 薛定谔注
  b.wtext(110, 408, '薛定谔「生命以负熵为生」的准确含义：生物体从环境「进口」负熵，向环境「出口」更大的熵——不违反任何热力学定律。', { size: 10.5, fill: C.mute, maxW: 1180, lh: 14 })

  // ============ 二、两条定律 ============
  b.panel(30, 452, 1340, 262, { title: '二、第一定律：能量收支闭合；第二定律：ΔG 判据' })

  // -- 左：第一定律 --
  b.rect(50, 486, 630, 130, { fill: C.rnaL, fillOp: 0.4, stroke: C.rna, sw: 1.2, rx: 8 })
  b.text(70, 512, '第一定律（能量守恒）：ΔU = Q − W', { size: 13, weight: 700, fill: C.rnaD })
  b.wtext(70, 538, '化学键能（ATP）按能量守恒转化为机械功（马达、肌肉）、渗透功与热。量热实验（发芽种子、完整细胞的代谢产热）证实能量收支闭合。', { size: 10.5, fill: C.sub, maxW: 580, lh: 14 })
  b.tag(300, 590, '人静息功率 ≈ 100 W，全部最终变为热流散环境', { fill: C.rnaL, stroke: C.rna, size: 11, weight: 700, tfill: C.rnaD, pad: 9 })

  // -- 右：第二定律 --
  b.rect(700, 486, 640, 130, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.2, rx: 8 })
  b.text(720, 512, '第二定律（等温等压判据）：吉布斯自由能', { size: 13, weight: 700, fill: C.accD })
  const dg: Array<[string, string, string]> = [
    ['ΔG < 0', '过程自发', C.ok],
    ['ΔG = 0', '系统处于平衡', C.sub],
    ['ΔG > 0', '需外部输入功', C.bad],
  ]
  dg.forEach(([t, d, col], i) => {
    const x = 720 + i * 206
    b.rect(x, 532, 190, 30, { fill: C.bg, stroke: col, sw: 1.5, rx: 6 })
    b.ctext(x + 62, 552, t, { size: 12.5, weight: 700, fill: col })
    b.text(x + 116, 552, d, { size: 9.5, fill: C.sub })
  })
  b.wtext(720, 588, 'ΔG 是态函数之差，只看始末态而不管路径，且随反应商 Q 改变——给细胞留出「用浓度梯度驱动吸能反应」的操作空间。', { size: 10.5, fill: C.sub, maxW: 600, lh: 14 })

  // ============ 三、稳态与熵账本 ============
  b.panel(30, 742, 1340, 238, { title: '三、远离平衡的稳态与生命的「熵账本」' })

  // -- 左：稳态示意 --
  b.wtext(60, 792, '活细胞稳态下净通量不为零：物质不断流入流出、反应远离平衡。若切断能量供给，细胞滑向平衡——即死亡；生命稳定存在，正因为它被代谢通量持续「顶」在远离平衡的稳态上。', { size: 10.5, fill: C.sub, maxW: 560, lh: 15 })
  b.tag(220, 852, '代谢通量（持续输入自由能）', { fill: C.okL, stroke: C.ok, size: 11.5, weight: 700, tfill: C.ok, pad: 9 })
  b.arrow(220, 862, 220, 874, { stroke: C.ok, sw: 2.6, marker: 'ok' })
  b.ellipse(220, 906, 110, 30, { fill: C.okL, fillOp: 0.6, stroke: C.ok, sw: 2 })
  b.ctext(220, 910, '远离平衡的稳态', { size: 12, weight: 700, fill: '#065f46' })
  b.line(60, 906, 110, 906, { stroke: C.mute, sw: 2, dash: '5 4' })
  b.ctext(85, 936, '平衡 = 死亡', { size: 10, fill: C.mute })

  // -- 右：熵账本卡 --
  b.rect(680, 778, 660, 186, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(700, 806, '量纲估算：给「生命」算总账', { size: 13.5, weight: 700, fill: C.ink })
  const acct: Array<[string, string]> = [
    ['人静息代谢率 ≈ 100 W，体温 310 K 向 293 K 环境散热', ''],
    ['熵产生率 ≈ 100 / 310 ≈ 0.3 W/K', ''],
    ['一个成年人一生约输出 10⁹ J/K 的熵', '全部由食物的自由能「支付」'],
  ]
  acct.forEach(([t, d], i) => {
    const y = 836 + i * 40
    b.circle(708, y - 4, 4, { fill: C.acc })
    b.text(720, y, t, { size: 11.5, weight: 600, fill: C.ink })
    if (d) b.text(720, y + 18, d, { size: 10, fill: C.mute })
  })
  b.wtext(700, 946, '生命是大自然中最出色的能量经理，但从不做无本生意——生理学（代谢率）与物理学（熵流）记在同一张账本上。', { size: 10.5, fill: C.mute, maxW: 620, lh: 14 })
}

export default scene({
  title: '热力学定律在生物系统中的应用：开放系统与熵账本',
  subtitle: 'ΔU = Q − W（静息人体 ~100 W 全部变为热）；等温等压判据 ΔG < 0 自发 / = 0 平衡 / > 0 需输入功；熵产生率 ≈ 0.3 W/K，一生 ~10⁹ J/K 由食物自由能支付',
  draw,
})
