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
    b.rect(60, y, 330, 70, { fill: fl, fillOp: 0.55, stroke: st, sw: 1.5, rx: 8 })
    b.text(74, y + 22, t, { size: 12.5, weight: 700, fill: st === C.ok ? '#065f46' : st })
    b.text(74, y + 44, f, { size: 12.5, fill: C.ink })
    b.wtext(74, y + 60, note, { size: 10.5, fill: C.sub, maxW: 300, lh: 13 })
  })
  b.arrow(150, 252, 150, 268, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(300, 268, 300, 252, { stroke: C.faint, sw: 1.6, marker: 'mute' })
  b.ctext(150, 246, '加 OH⁻', { size: 9.5, fill: C.mute })
  b.ctext(300, 246, '加 H⁺', { size: 9.5, fill: C.mute })
  b.arrow(150, 336, 150, 352, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(300, 352, 300, 336, { stroke: C.faint, sw: 1.6, marker: 'mute' })
  b.ctext(150, 330, '加 OH⁻', { size: 9.5, fill: C.mute })
  b.ctext(300, 330, '加 H⁺', { size: 9.5, fill: C.mute })
  // 右：平均净电荷–pH 曲线
  b.axis(470, 486, 220, 284, {
    xlabel: 'pH', ylabel: '平均净电荷',
    xticks: [[0, '0'], [0.164, '2.3'], [0.43, '6.0'], [0.686, '9.6'], [1, '14']],
    yticks: [[0, '+1'], [0.5, '0'], [1, '−1']],
  })
  b.line(470 + 0.164 * 220, 486, 470 + 0.164 * 220, 486 - 284, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.line(470 + 0.43 * 220, 486, 470 + 0.43 * 220, 486 - 0.5 * 284, { stroke: C.ok, sw: 1.4, dash: '5 4' })
  b.line(470 + 0.686 * 220, 486, 470 + 0.686 * 220, 486 - 284, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.ctext(470 + 0.164 * 220, 214, 'pKa₁', { size: 10.5, fill: C.mute })
  b.ctext(470 + 0.43 * 220, 214, 'pI', { size: 11, weight: 700, fill: C.ok })
  b.ctext(470 + 0.686 * 220, 214, 'pKa₂', { size: 10.5, fill: C.mute })
  b.curve(470, 486, 220, 284, [[0, 1], [0.08, 0.97], [0.13, 0.9], [0.2, 0.68], [0.3, 0.3], [0.43, 0], [0.58, -0.25], [0.686, -0.62], [0.78, -0.88], [0.9, -0.97], [1, -1]], { stroke: C.dna, sw: 2.8 })
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
  // 电泳迁移示意（上负下正）
  b.text(766, 826, '电泳迁移方向取决于 pH 与 pI：', { size: 12.5, weight: 700, fill: C.ink })
  b.line(790, 846, 1180, 846, { stroke: C.mute, sw: 1.6, dash: '6 4' })
  b.text(780, 842, '−', { size: 13, weight: 700, fill: C.sub })
  b.etext(1190, 842, '+', { size: 13, weight: 700, fill: C.sub })
  const lanes: [number, number, string][] = [
    [830, 0.22, 'pH < pI：+1 → 向负极'],
    [990, 0.5, 'pH = pI：0 → 不动'],
    [1150, 0.8, 'pH > pI：−1 → 向正极'],
  ]
  lanes.forEach(([x, fy, label]) => {
    b.rect(x - 26, 854, 52, 92, { fill: '#f8fafc', stroke: C.sub, sw: 1.6, rx: 4 })
    b.rect(x - 20, 858, 40, 6, { fill: C.ink, rx: 2 })
    b.rect(x - 19, 862 + fy * 74, 38, 7, { fill: C.enz, opacity: 0.85, rx: 3 })
    b.ctext(x, 962, label, { size: 10, fill: C.sub })
  })
}

export default scene({
  title: '氨基酸的解离、等电点与特征反应',
  subtitle: '兼性离子净电荷随 pH 由 +1 → 0 → −1，pI 取两端（或侧链）pKa 均值；茚三酮紫 / Pro 黄、DNFB 与 PITC 定 N 端，A₂₈₀ 来自 Trp·Tyr',
  draw,
})
