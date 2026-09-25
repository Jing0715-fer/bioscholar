// bc ch3-s2 氨基酸的解离、等电点与特征反应（39-a 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、两性解离与净电荷-pH 曲线 ============
  b.panel(30, 132, 700, 412, { title: '一、两性解离：净电荷随 pH 变化' })
  const states: [string, string, string, string, string][] = [
    ['低 pH（< pKa₁）', '⁺H₃N–CH(R)–COOH', '净电荷 +1 · 阳离子', C.accL, C.acc],
    ['pH = pI（等电点）', '⁺H₃N–CH(R)–COO⁻', '净电荷 0 · 兼性离子：电泳不迁移 · 溶解度最低', C.okL, C.ok],
    ['高 pH（> pKa₂）', 'H₂N–CH(R)–COO⁻', '净电荷 −1 · 阴离子', C.enzL, C.enz],
  ]
  states.forEach(([t, f, note, fl, st], i) => {
    const y = 178 + i * 84
    b.rect(60, y, 330, 64, { fill: fl, fillOp: 0.55, stroke: st, sw: 1.5, rx: 8 })
    b.text(74, y + 19, t, { size: 12.5, weight: 700, fill: st === C.ok ? '#065f46' : st })
    b.text(74, y + 38, f, { size: 12.5, fill: C.ink })
    b.wtext(74, y + 56, note, { size: 10.5, fill: C.sub, maxW: 300, lh: 13 })
  })
  // 状态间转换箭头与标注（完全位于两框间隙内，不压框内文字）
  for (const gy of [242, 326]) {
    b.arrow(150, gy + 4, 150, gy + 16, { stroke: C.sub, sw: 1.8, marker: 'ink' })
    b.arrow(300, gy + 16, 300, gy + 4, { stroke: C.faint, sw: 1.6, marker: 'mute' })
    b.text(162, gy + 14, '加 OH⁻', { size: 9, fill: C.mute })
    b.text(312, gy + 14, '加 H⁺', { size: 9, fill: C.mute })
  }
  // 右：平均净电荷–pH 曲线
  b.axis(470, 486, 220, 284, {
    xlabel: 'pH', ylabel: '平均净电荷',
    xticks: [[0, '0'], [0.164, '2.3'], [0.43, '6.0'], [0.686, '9.6'], [1, '14']],
    yticks: [[0, '−1'], [0.5, '0'], [1, '+1']],
  })
  b.line(470 + 0.164 * 220, 486, 470 + 0.164 * 220, 486 - 284, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.line(470 + 0.43 * 220, 486, 470 + 0.43 * 220, 486 - 0.5 * 284, { stroke: C.ok, sw: 1.4, dash: '5 4' })
  b.line(470 + 0.686 * 220, 486, 470 + 0.686 * 220, 486 - 284, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.ctext(470 + 0.164 * 220, 214, 'pKa₁', { size: 10.5, fill: C.mute })
  b.ctext(470 + 0.43 * 220, 214, 'pI', { size: 11, weight: 700, fill: C.ok })
  b.ctext(470 + 0.686 * 220, 214, 'pKa₂', { size: 10.5, fill: C.mute })
  // 净电荷 q(+1→−1) 映射为归一化 v=(q+1)/2：曲线自左上 (+1) 阶梯式降至右下 (−1)，完整落在轴框内
  b.curve(470, 486, 220, 284, [[0, 1], [0.08, 0.985], [0.13, 0.95], [0.2, 0.84], [0.3, 0.65], [0.43, 0.5], [0.58, 0.375], [0.686, 0.19], [0.78, 0.06], [0.9, 0.015], [1, 0]], { stroke: C.dna, sw: 2.8 })
  b.wtext(60, 448, 'α-COOH pKa₁≈2.0~2.3 · α-NH₃⁺ pKa₂≈9.0~10.0；pI 时兼性离子占主导。', { size: 11, fill: C.sub, maxW: 360, lh: 16 })

  // ============ 二、pI 的计算 ============
  b.panel(750, 132, 620, 412, { title: '二、pI 的计算：取决于侧链可解离基团' })
  b.table(766, 188, 588, {
    headers: ['类别', 'pI 公式', '示例'],
    colW: [150, 240, 198],
    rowH: 48,
    fontSize: 11.5,
    rows: [
      ['中性（侧链不解离）', '(pKa₁ + pKa₂) / 2', '≈ 6.0'],
      ['酸性（Asp）', '(pKa₁ + pKaR) / 2', '(2.1 + 3.9)/2 ≈ 2.98'],
      ['碱性（Lys）', '(pKa₂ + pKaR) / 2', '(8.95 + 10.5)/2 ≈ 9.74'],
    ],
  })
  b.text(766, 404, '侧链可解离基团 pKaR：', { size: 12.5, weight: 700, fill: C.ink })
  b.text(766, 432, 'Asp 3.9 · Glu 4.3 · His 6.0 · Cys 8.3 · Tyr 10.1 · Lys 10.5 · Arg 12.5', { size: 11.5, fill: C.sub })
  b.wtext(766, 468, 'pI 时净电荷为零、溶解度最低；pI 差异是电泳与离子交换层析分离氨基酸混合物的基础，也是蛋白质双向电泳第一向（等电聚焦）的理论基础。', { size: 11.5, fill: C.sub, maxW: 588, lh: 17 })
  b.wtext(766, 524, '氨基酸分析仪即利用不同 pH 下各氨基酸解离态与交换柱亲和力的差异实现逐一分离。', { size: 11, fill: C.mute, maxW: 588, lh: 16 })

  // ============ 三、特征化学反应 ============
  b.panel(30, 564, 700, 416, { title: '三、氨基酸的特征化学反应' })
  const react = (y: number, reagent: string, prod: string, prodFill: string, prodStroke: string, prodText: string, note: string) => {
    b.tag(170, y, reagent, { fill: C.panelB, stroke: C.sub, size: 11.5, weight: 700, tfill: C.ink, pad: 8 })
    b.arrow(300, y, 346, y, { stroke: C.sub, sw: 1.8, marker: 'ink' })
    b.rect(356, y - 16, 148, 32, { fill: prodFill, stroke: prodStroke, sw: 1.6, rx: 16 })
    b.ctext(430, y + 4, prod, { size: 11.5, weight: 700, fill: prodText })
    b.wtext(522, y + 4, note, { size: 10.5, fill: C.sub, maxW: 196, lh: 14 })
  }
  react(612, '茚三酮 + α-氨基酸', 'Ruhemann 紫', '#5b21b6', '#3b0764', '#ffffff', '共热显色，570 nm 定量 · 纸层析显色')
  react(668, '茚三酮 + Pro（仲胺）', '黄色产物', C.warnL, C.warn, '#78350f', '440 nm——脯氨酸特有反应')
  react(724, 'DNFB（Sanger 试剂）', 'DNP-氨基酸', C.warnL, C.warn, '#78350f', '黄色 · N 端测定；Sanger 完成胰岛素测序')
  react(780, 'PITC（Edman 试剂）', 'PTH-氨基酸', C.accL, C.acc, C.accD, '弱碱偶联 → 酸解切下 → HPLC 鉴定')
  react(836, '荧光胺 / OPA', '荧光产物', C.okL, C.ok, '#065f46', '灵敏度高 · HPLC 衍生检测')
  b.wtext(50, 890, '茚三酮反应用于氨基酸定量；Sanger 与 Edman 反应用于 N 端与序列测定（详见一级结构测定一节）；荧光衍生法将检测灵敏度提高数个量级。', { size: 11.5, fill: C.mute, maxW: 660, lh: 17 })

  // ============ 四、紫外吸收与电泳分离 ============
  b.panel(750, 564, 620, 416, { title: '四、紫外吸收与电泳分离' })
  b.axis(800, 742, 450, 140, {
    xlabel: '波长 (nm)', ylabel: '吸光度',
    xticks: [[0.04, '205'], [0.33, '240'], [0.5, '260'], [0.67, '280'], [0.92, '310']],
    yticks: [[0, '0'], [1, 'A']],
  })
  b.curve(800, 742, 450, 140, [[0, 0.18], [0.04, 0.95], [0.1, 0.72], [0.18, 0.45], [0.28, 0.26], [0.5, 0.14], [0.75, 0.07], [1, 0.04]], { stroke: C.mute, sw: 2.4 })
  b.curve(800, 742, 450, 140, [[0.3, 0.05], [0.42, 0.28], [0.5, 1.0], [0.58, 0.33], [0.72, 0.13], [1, 0.05]], { stroke: C.dna, sw: 2.6 })
  b.curve(800, 742, 450, 140, [[0.3, 0.03], [0.5, 0.1], [0.58, 0.34], [0.67, 0.58], [0.76, 0.36], [0.9, 0.12], [1, 0.06]], { stroke: C.pro, sw: 2.6 })
  b.ctext(800 + 0.5 * 450, 742 - 1.0 * 140 - 10, '核酸 260 nm', { size: 10.5, weight: 700, fill: C.dna })
  b.text(800 + 0.78 * 450, 742 - 0.6 * 140 + 6, '蛋白质 280 nm', { size: 10.5, weight: 700, fill: C.pro })
  b.text(800 + 0.09 * 450, 742 - 0.95 * 140 + 8, '肽键 190~220 nm', { size: 10, fill: C.mute })
  b.wtext(766, 806, 'A₂₈₀ 估算蛋白质浓度（Trp 与 Tyr 的贡献）；A₂₆₀/A₂₈₀ 评估纯度。', { size: 11, fill: C.sub, maxW: 590, lh: 16 })
  // 电泳迁移示意（水平式：左 − 负极 · 右 + 正极，点样孔居中，条带位置即迁移方向）
  b.text(766, 826, '电泳迁移方向取决于 pH 与 pI（左 − 负极 · 右 + 正极）：', { size: 12.5, weight: 700, fill: C.ink })
  const lanes: [string, number, string, string, string][] = [
    ['pH < pI：+1 → 负极', 947, C.acc, C.acc, 'etext'],
    ['pH = pI：0 → 不动', 1097, C.ok, '#065f46', 'etext'],
    ['pH > pI：−1 → 正极', 1247, C.enz, C.enz, 'text'],
  ]
  lanes.forEach(([label, bx, bandC, textC, anchor], i) => {
    const y = 840 + i * 36
    b.rect(884, y, 426, 20, { fill: '#f8fafc', stroke: C.sub, sw: 1.4, rx: 4 })
    b.text(874, y + 13.5, '−', { size: 10, weight: 700, fill: C.sub })
    b.text(1320, y + 13.5, '+', { size: 10, weight: 700, fill: C.sub })
    b.rect(1093, y + 3, 8, 14, { fill: C.ink, rx: 2 })
    if (bx === 1097) {
      b.rect(1084, y + 5, 26, 10, { fill: bandC, opacity: 0.9, rx: 3 })
    } else {
      b.rect(bx - 13, y + 5, 26, 10, { fill: bandC, opacity: 0.9, rx: 3 })
      const toLeft = bx < 1097
      b.arrow(toLeft ? 1078 : 1116, y + 10, toLeft ? 970 : 1224, y + 10, { stroke: bandC, sw: 1.5, marker: 'ink' })
    }
    if (anchor === 'etext') {
      b.etext(1296, y + 13.5, label, { size: 9.5, weight: 700, fill: textC })
    } else {
      b.text(896, y + 13.5, label, { size: 9.5, weight: 700, fill: textC })
    }
  })
  b.wtext(766, 948, 'pH < pI 时净电荷为正、迁向负极；pH > pI 净负电、迁向正极；pI 处净电荷为零、原地不动——等电聚焦即在 pH 梯度中把各蛋白聚焦至其 pI。', { size: 10, fill: C.sub, maxW: 590, lh: 14 })
}

export default scene({
  title: '氨基酸的解离、等电点与特征反应',
  subtitle: '兼性离子净电荷随 pH 由 +1 → 0 → −1，pI 取两端（或侧链）pKa 均值；茚三酮紫 / Pro 黄、DNFB 与 PITC 定 N 端，A₂₈₀ 来自 Trp·Tyr',
  draw,
})
