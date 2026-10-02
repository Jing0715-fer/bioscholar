// mt ch1-s2 转运的热力学
// 面板：一、ΔG 公式与示范账（25 ℃ RT/F ≈ 25.7 mV）
//       二、Nernst 方程与平衡电位标尺（E_K ≈ −90、E_Na +60~+67、E_Ca > +125、E_Cl −60~−90 mV）
//       三、被动 vs 主动判据（ΔG 符号分支）
//       四、动植物静息膜电位与离子环境对照（−30~−90 vs −120~−250 mV + 浓度表）
// Task ID: 46-c1
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、电化学梯度与 ΔG 判据 ============
  b.panel(30, 132, 660, 420, { title: '一、电化学梯度与 ΔG 判据' })
  b.rect(60, 185, 600, 58, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 10 })
  b.ctext(360, 222, 'ΔG = RT ln(C_{2}/C_{1}) + zFV', { size: 21, weight: 700, fill: C.accD })
  b.text(60, 278, 'C_{2}/C_{1}：膜两侧浓度；z：电荷数；F = 96 485 C/mol；V：膜电位（胞内 − 胞外）', { size: 11, fill: C.sub })
  b.text(60, 302, '25 ℃ 时 RT/F ≈ 25.7 mV——十倍浓度差 ≈ 59 mV 电位当量，浓度项与电压项同尺相加', { size: 11, fill: C.sub })
  b.text(60, 326, 'ΔG < 0：顺梯度、可自发；ΔG > 0：逆梯度、必须输入能量——方向与工钱只看这一个数', { size: 11, fill: C.sub })
  // 示范账
  b.rect(60, 352, 600, 158, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 10 })
  b.text(76, 380, '示范账：静息神经元的 K^{+}（胞内 140 / 胞外 4.5 mmol/L）', { size: 12.5, weight: 700, fill: C.sub })
  b.text(76, 408, '浓度项 ≈ +88 mV 当量 ＋ 电压项 −70 mV ＝ ΔG ≈ +18 mV > 0——内向移动仍是上坡', { size: 11, fill: C.sub })
  b.text(76, 434, '若膜电位再负 20 mV 到 −90 mV（即 E_{K}）：两项恰好抵消，净流为零', { size: 11, fill: C.sub })
  b.text(76, 460, '维持 140 对 4.5 的格局，靠 Na^{+}/K^{+} 泵不停把外逸趋势抵回去——这就是泵的工钱', { size: 11, fill: C.sub })

  // ============ 二、Nernst 方程与平衡电位标尺 ============
  b.panel(710, 132, 660, 420, { title: '二、Nernst 方程与平衡电位标尺' })
  b.text(740, 192, 'E_{ion} = (RT/zF) ln([离子]_{外}/[离子]_{内})', { size: 15, weight: 700, fill: C.ink })
  b.text(740, 216, '25 ℃ 简化式：E = 59/z × log([外]/[内]) mV', { size: 11, fill: C.sub })
  // 左列注释
  let ny = b.wtext(740, 244, 'E_{ion} 是净流为零的「安分电压」：双向流恰好相等，不是不动', { size: 10.5, fill: C.sub, maxW: 240, lh: 18 })
  ny = b.wtext(740, ny + 14, '实际膜电位离 E_{ion} 越远，该离子的驱动力越大——静息时是支柱，兴奋时是落差', { size: 10.5, fill: C.sub, maxW: 240, lh: 18 })
  ny = b.wtext(740, ny + 14, 'E_{K} 之深：胞内 K^{+} 约为胞外 30 倍以上，K^{+} 漏通道的高通透主导动物静息电位', { size: 10.5, fill: C.sub, maxW: 240, lh: 23 })
  ny = b.wtext(740, ny + 14, 'E_{Ca} 之陡：胞质游离仅约 100 nmol/L、外液 1–2 mmol/L（十万倍级）——几十个 Ca^{2+} 通道短暂开放即可让钙信号翻倍', { size: 10.5, fill: C.sub, maxW: 240, lh: 23 })
  b.text(740, ny + 16, '钙因此成为最常用的第二信使', { size: 10.5, weight: 600, fill: C.enzD })
  // 电压标尺（axis）
  const fy = (v: number) => (v + 90) / 215
  const ax = 1010, ay = 520, aw = 160, ah = 260
  b.axis(ax, ay, aw, ah, {
    grid: false,
    title: '膜电位（mV）',
    yticks: [[fy(125), '+125'], [fy(60), '+60'], [fy(0), '0'], [fy(-60), '−60'], [fy(-90), '−90']],
  })
  const yOf = (v: number) => ay - fy(v) * ah
  // E_Ca
  b.line(ax, yOf(125), ax + 90, yOf(125), { stroke: C.bad, sw: 3 })
  b.text(1180, yOf(125) + 4, 'E_{Ca} > +125 mV', { size: 11.5, weight: 700, fill: C.badD })
  b.text(1180, yOf(125) + 24, '十万倍级内外差', { size: 9.5, fill: C.mute })
  // E_Na（范围须）
  b.line(ax + 55, yOf(60), ax + 55, yOf(67), { stroke: C.acc, sw: 2 })
  b.line(ax, yOf(63.5), ax + 90, yOf(63.5), { stroke: C.acc, sw: 3 })
  b.text(1180, yOf(63.5) + 4, 'E_{Na} +60~+67 mV', { size: 11.5, weight: 700, fill: C.accD })
  b.text(1180, yOf(63.5) + 24, '去极化的引擎', { size: 9.5, fill: C.mute })
  // E_Cl
  b.line(ax + 55, yOf(-60), ax + 55, yOf(-90), { stroke: C.enz, sw: 2 })
  b.line(ax, yOf(-75), ax + 90, yOf(-75), { stroke: C.enz, sw: 3 })
  b.text(1180, yOf(-75) + 4, 'E_{Cl} −60~−90 mV', { size: 11.5, weight: 700, fill: C.enzD })
  // E_K
  b.line(ax, yOf(-90), ax + 90, yOf(-90), { stroke: C.dna, sw: 3 })
  b.text(1180, yOf(-90) + 4, 'E_{K} ≈ −90 mV', { size: 11.5, weight: 700, fill: C.dnaD })
  b.text(1180, yOf(-90) + 24, '静息电位的支柱', { size: 9.5, fill: C.mute })

  // ============ 三、被动 vs 主动：ΔG 符号划界 ============
  b.panel(30, 567, 660, 418, { title: '三、被动 vs 主动：ΔG 符号划界' })
  b.rect(150, 612, 420, 46, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 10 })
  b.ctext(360, 641, '算 ΔG = RT ln(C_{2}/C_{1}) + zFV', { size: 14, weight: 700, fill: C.ink })
  b.arrow(200, 658, 200, 690, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.arrow(520, 658, 520, 690, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.text(214, 678, 'ΔG < 0', { size: 11, weight: 700, fill: C.okD })
  b.text(534, 678, 'ΔG > 0', { size: 11, weight: 700, fill: C.warnD })
  // 被动盒
  b.rect(60, 694, 280, 150, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 10 })
  b.text(76, 722, 'ΔG < 0 → 被动转运', { size: 13.5, weight: 700, fill: C.okD })
  b.text(76, 750, '简单扩散：溶入脂相、顺梯度', { size: 10.5, fill: C.sub })
  b.text(76, 772, '经通道 / 经载体的易化扩散', { size: 10.5, fill: C.sub })
  b.text(76, 794, '能量来自梯度本身——但梯度是别人预付的', { size: 10.5, fill: C.sub })
  b.text(76, 816, '（水特殊：不带净电荷，只服从渗透差）', { size: 10, fill: C.mute })
  // 主动盒
  b.rect(380, 694, 280, 150, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 10 })
  b.text(396, 722, 'ΔG > 0 → 主动转运', { size: 13.5, weight: 700, fill: C.warnD })
  b.text(396, 750, '初级：泵直接水解 ATP 等高能键', { size: 10.5, fill: C.sub })
  b.text(396, 772, '次级：借 Na^{+} 或 H^{+} 梯度的转运体', { size: 10.5, fill: C.sub })
  b.wtext(396, 794, '预付梯度者：动物 Na^{+}/K^{+}-ATPase、植物质子泵', { size: 10.5, fill: C.sub, maxW: 248, lh: 23 })
  // 底部
  let py = b.wtext(60, 876, '梯度有账单：维持 Na^{+}/K^{+} 梯度约占动物静息 ATP 消耗的 20%–30%；植物的质子泵同样位居耗能榜首', { size: 11, fill: C.sub, maxW: 620, lh: 23 })
  b.text(60, py + 14, '被动转运的「免费」，是泵在背后持续付费换来的', { size: 11, weight: 600, fill: C.sub })
  b.wtext(60, py + 40, '水的转运较特殊：不带净电荷，ΔG 的电压项为零，只服从渗透压差（π = iCRT）——后果在动植物截然不同', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })

  // ============ 四、静息膜电位与离子环境：量级对照 ============
  b.panel(710, 567, 660, 418, { title: '四、静息膜电位与离子环境：量级对照' })
  // 电压标尺与双范围柱
  b.ctext(780, 612, 'mV', { size: 10, fill: C.mute })
  b.line(780, 622, 780, 772, { stroke: C.sub, sw: 2 })
  for (let v = 0; v <= 250; v += 50) {
    const yy = 622 + v * 0.6
    b.line(774, yy, 780, yy, { stroke: C.sub, sw: 1.8 })
    b.text(768, yy + 4, v === 0 ? '0' : `−${v}`, { size: 10.5, fill: C.mute, anchor: 'end' })
  }
  b.line(790, 622, 1000, 622, { stroke: C.faint, sw: 1, dash: '4 4' })
  // 动物 −30~−90
  b.rect(816, 640, 44, 36, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 4 })
  b.ctext(838, 662, '动物', { size: 11, weight: 700, fill: C.accD })
  b.text(868, 654, '−30~−90 mV', { size: 11, weight: 700, fill: C.accD })
  b.text(868, 674, '神经元 −70~−90', { size: 9.5, fill: C.mute })
  // 植物 −120~−250
  b.rect(896, 694, 44, 78, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 4 })
  b.ctext(918, 722, '植物', { size: 11, weight: 700, fill: C.okD })
  b.ctext(918, 794, '−120~−250 mV', { size: 11, weight: 700, fill: C.okD })
  // PMF 注释块
  b.text(1010, 636, '为什么植物把电位做得更深？', { size: 11.5, weight: 700, fill: C.sub })
  let wy = b.wtext(1010, 660, '土壤溶液 K^{+}、NO_{3}^{-} 只有 0.1–1 mmol/L——不把电源做大，就抽不进矿质养分', { size: 10.5, fill: C.sub, maxW: 340, lh: 23 })
  b.text(1010, wy + 16, '植物 PMF = 膜电位 + H^{+} 浓度差', { size: 11.5, weight: 700, fill: C.okD })
  wy = b.wtext(1010, wy + 40, '折合能量常超 250–300 mV 当量，是次级转运的通用货币；质外体被酸化到约 pH 5.5（胞质 7.2 上下）', { size: 10.5, fill: C.sub, maxW: 340, lh: 23 })
  b.text(1010, wy + 16, '动物侧：Na^{+} 梯度＋膜电位合计约 150–200 mV 可用势', { size: 10.5, fill: C.accD })
  // 离子浓度对照表
  b.table(730, 818, 620, {
    headers: ['参数', '动物（哺乳类）', '植物（拟南芥）'],
    colW: [170, 215, 235],
    rowH: 27,
    fontSize: 11.5,
    rows: [
      ['胞质 K^{+}（mmol/L）', '约 140', '100–200'],
      ['胞外 Na^{+}（mmol/L）', '血浆约 145', '土壤溶液仅 0.1–1'],
      ['胞质游离 Ca^{2+}', '约 100 nmol/L', '约 100 nmol/L（液泡毫摩尔级）'],
      ['胞质 pH', '约 7.2', '约 7.2（质外体约 5.5）'],
    ],
  })
}

export default scene({
  title: '转运的热力学：ΔG、Nernst 与膜电位',
  subtitle:
    'ΔG = RT ln(C_{2}/C_{1}) + zFV 合并浓度差与电位差（25 ℃ 时 RT/F ≈ 25.7 mV，十倍浓度差 ≈ 59 mV）；Nernst 方程给出 E_{K} ≈ −90、E_{Na} +60~+67、E_{Ca} > +125 mV 的安分点；动物静息 −30~−90 mV、植物 −120~−250 mV——植物以 PMF（常超 250–300 mV 当量）驱动次级转运',
  draw,
})
