// ph ch2-s3 静息膜电位与动作电位（Nernst/GHK 标尺 + AP 分期与不应期）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、平衡电位标尺与静息电位（GHK） ============
  b.panel(30, 132, 620, 560, { title: '一、平衡电位标尺与静息电位（GHK）' })
  b.text(150, 182, '膜电位标尺（mV）', { size: 12, weight: 700, fill: C.sub })
  b.arrow(120, 495, 120, 190, { stroke: C.sub, sw: 2, marker: 'ink' })
  // E_Na +60 → y200；0 → y312；-55 → y415；-70 → y443；-90 → y480
  b.line(120, 200, 160, 200, { stroke: C.bad, sw: 1.5 })
  b.tag(230, 200, 'E_{Na} ≈ +60 mV', { size: 11, weight: 700, fill: C.badL, stroke: C.bad, tfill: C.badD, pad: 8 })
  b.etext(112, 204, '+60', { size: 10.5, fill: C.badD })
  b.line(120, 312, 160, 312, { stroke: C.faint, sw: 1.2 })
  b.etext(112, 316, '0', { size: 10.5, fill: C.mute })
  b.line(120, 443, 160, 443, { stroke: C.rna, sw: 1.5 })
  b.tag(230, 443, 'E_{Cl} ≈ -70 mV', { size: 11, weight: 700, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, pad: 8 })
  b.etext(112, 447, '-70', { size: 10.5, fill: C.sub })
  b.line(120, 480, 160, 480, { stroke: C.acc, sw: 1.5 })
  b.tag(230, 480, 'E_{K} ≈ -90 mV', { size: 11, weight: 700, fill: C.accL, stroke: C.acc, tfill: C.accD, pad: 8 })
  b.etext(112, 484, '-90', { size: 10.5, fill: C.accD })
  // 静息膜电位（GHK）
  b.line(300, 443, 560, 443, { stroke: C.sub, sw: 1.4, dash: '6 4' })
  b.text(330, 428, 'P_{K} : P_{Na} ≈ 1 : 0.04 → 紧贴 E_{K}', { size: 10.5, fill: C.sub })
  b.tag(430, 465, '静息膜电位 ≈ -70 mV（GHK）', { size: 10.5, weight: 700, fill: C.proL, stroke: C.pro, tfill: C.proD, pad: 8 })
  b.text(60, 528, 'Nernst（37 ℃）：E = (61.5/z)·lg(外/内)', { size: 11, fill: C.sub })
  b.wtext(60, 554, 'GHK 方程：以通透性为权的对数平均——静息时 P_{K} : P_{Na} ≈ 1 : 0.04（K^{+} 经 K2P 漏通道外逸），电位落在 E_{K} 与 E_{Na} 之间而紧贴 K 侧；钠泵 3 : 2 生电直接贡献仅约 -4 mV', { size: 10.5, fill: C.sub, maxW: 560, lh: 18 })
  b.text(60, 618, '「按通透性投票」：静息 K^{+} 票占多数；升支时 Na^{+} 通道开放、选票易手', { size: 10.5, weight: 600, fill: C.mute })
  b.wtext(60, 644, '泵-漏平衡：Na^{+} 漏入速率恰被钠泵外排抵消——抑制钠泵，电位以分钟级缓慢去极化；直接作者是 K^{+} 外漏，间接作者是钠泵', { size: 10.5, fill: C.sub, maxW: 560, lh: 18 })

  // ============ 二、动作电位：分期、全或无与不应期 ============
  b.panel(670, 132, 700, 560, { title: '二、动作电位：分期、全或无与不应期' })
  b.text(676, 205, '膜电位', { size: 11, weight: 700, fill: C.sub })
  b.arrow(720, 620, 720, 195, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(720, 620, 1330, 620, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(1025, 648, '时间 (ms) →', { size: 11, fill: C.sub })
  // 参考线：+30/0/-55/-70
  b.line(720, 270, 1330, 270, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.text(1336, 274, '+30', { size: 10.5, fill: C.mute })
  b.line(720, 330, 1330, 330, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.text(1336, 334, '0', { size: 10.5, fill: C.mute })
  b.line(720, 440, 1330, 440, { stroke: C.bad, sw: 1.2, dash: '6 4' })
  b.text(1336, 444, '-55', { size: 10.5, fill: C.badD })
  b.line(720, 470, 1330, 470, { stroke: C.sub, sw: 1.2, dash: '6 4' })
  b.text(1336, 474, '-70', { size: 10.5, fill: C.sub })
  b.text(770, 432, '阈电位（较静息正 10–15 mV）', { size: 10.5, weight: 700, fill: C.badD })
  // 刺激
  b.arrow(828, 505, 852, 462, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.text(788, 520, '刺激', { size: 10.5, fill: C.badD })
  // AP 曲线
  b.polyline([[720, 470], [800, 468], [842, 460], [858, 442], [872, 395], [888, 325], [902, 282], [918, 262], [940, 260], [962, 264], [982, 274], [1002, 296], [1022, 332], [1042, 382], [1062, 432], [1082, 464], [1098, 480], [1118, 492], [1142, 496], [1168, 492], [1198, 482], [1240, 473], [1330, 470]], { stroke: C.dna, sw: 3 })
  b.text(870, 240, '0 期：Na^{+} 快速内流（再生性升支）', { size: 11, weight: 700, fill: C.badD })
  b.text(1150, 250, '超射 ≈ +30 mV', { size: 10.5, fill: C.badD })
  b.text(898, 322, 'Na^{+} 失活', { size: 10.5, weight: 700, fill: C.enzD })
  b.text(1080, 380, '复极：K^{+} 外流（迟开放）', { size: 11, weight: 700, fill: C.accD })
  b.text(1120, 515, '后超极化（K^{+} 通道关闭迟缓）', { size: 10.5, fill: C.sub })
  // 不应期色带
  b.text(726, 576, '不应期：', { size: 11, weight: 700, fill: C.sub })
  b.rect(880, 560, 105, 25, { fill: C.badL, stroke: C.bad, sw: 1.2 })
  b.ctext(932, 576, '绝对不应期', { size: 10, weight: 700, fill: C.badD })
  b.rect(995, 560, 150, 25, { fill: C.warnL, stroke: C.warn, sw: 1.2 })
  b.ctext(1070, 576, '相对不应期', { size: 10, weight: 700, fill: C.warnD })
  b.text(1160, 576, '失活态不可激发 / 部分复活需强刺激', { size: 10, fill: C.sub })
  b.text(726, 600, '绝对不应期约 0.5–2 ms，为最高发放频率封顶；相对期幅度稍低', { size: 10.5, fill: C.sub })
  b.wtext(690, 666, '全或无：达阈后幅度恒定、与刺激强度无关——强刺激改「节拍」而非「音量」（频率编码）；再长的阈下刺激也唤不起动作电位', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })

  // ============ 三、离子分布与兴奋性的物理账本 ============
  b.panel(30, 706, 1340, 276, { title: '三、离子分布与兴奋性的物理账本' })
  b.table(60, 770, 620, {
    headers: ['离子', '胞内 (mmol/L)', '胞外 (mmol/L)', '平衡电位'],
    colW: [110, 170, 170, 170], rowH: 36, fontSize: 10.5,
    rows: [
      ['K^{+}', '约 140', '约 4–5', '约 -90 mV'],
      ['Na^{+}', '约 10–15', '约 142', '约 +60 mV'],
      ['Ca^{2+}', '约 0.0001（游离）', '约 2.25–2.75', '约 +125 mV'],
      ['Cl^{-}', '约 4–10', '约 105', '约 -65 至 -70 mV'],
    ],
  })
  b.text(720, 782, '电荷分离于薄薄一层：改变 100 mV 只需每平方微米移动数千离子', { size: 11, weight: 600, fill: C.sub })
  b.text(720, 808, '梯度是水库，电位是涟漪——建立电位几乎不消耗浓度', { size: 10.5, fill: C.sub })
  b.text(720, 834, '利多卡因优先结合失活态 Na^{+} 通道（使用依赖性）→ 局麻·抗心律失常', { size: 10.5, fill: C.sub })
  b.wtext(720, 860, 'Hodgkin 与 Huxley：1939 年枪乌贼巨轴突记录，1952 年电压钳四方程（1963 年诺奖）；心脏动作电位多平台期（Ca^{2+} 内流与 K^{+} 外流对峙），时程更长', { size: 10.5, fill: C.sub, maxW: 600, lh: 18 })
  b.text(720, 924, '复合动作电位幅度依赖兴奋纤维数目与同步性 → 传导检查主看潜伏期', { size: 10.5, fill: C.sub })
  b.text(720, 948, '升支逼近而不及 E_{Na}；后超极化源于 K^{+} 通道关闭迟缓', { size: 10.5, fill: C.sub })
}

export default scene({
  title: '静息膜电位与动作电位',
  subtitle: 'Nernst 给出 E_{K} ≈ -90、E_{Na} ≈ +60 mV；GHK 按通透性加权得静息约 -70 mV（P_{K} : P_{Na} ≈ 1 : 0.04）；阈电位 -55 mV 触发 Na^{+} 再生性升支、超射 +30 mV，绝对不应期约 0.5–2 ms 限定频率上限',
  draw,
})
