// bi ch5-s4 调控元件与基因组特征预测（39-i 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、启动子语法 ============
  b.panel(30, 132, 1340, 330, { title: '一、原核 σ70 启动子与真核核心启动子 / 增强子' })
  // 原核（左）
  b.text(80, 184, '原核 · 大肠杆菌 σ70：两框一距', { size: 13.5, weight: 700, fill: C.dnaD })
  b.line(90, 250, 630, 250, { stroke: C.dna, sw: 2.4 })
  b.rect(120, 232, 84, 36, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 4 })
  b.ctext(162, 254, 'TTGACA', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(162, 222, '-35 元件', { size: 11, weight: 700, fill: C.mute })
  b.rect(340, 232, 84, 36, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 4 })
  b.ctext(382, 254, 'TATAAT', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(382, 222, '-10 元件（Pribnow 框）', { size: 11, weight: 700, fill: C.mute })
  b.arrow(470, 214, 560, 214, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.ctext(470, 276, '转录起点', { size: 10.5, fill: C.mute })
  b.line(470, 232, 470, 248, { stroke: C.rna, sw: 2 })
  b.braceH(208, 274, 128, { label: '约 15–19 bp（约 17 bp 最优）', fill: C.dnaD, size: 10.5 })
  b.wtext(90, 344, '交替 σ 因子各有保守 motif 与语法——间距改变，识别即失。', { size: 11.5, fill: C.sub, maxW: 540, lh: 16 })
  // 真核（右）
  b.text(700, 184, '真核 · 核心启动子与增强子', { size: 13.5, weight: 700, fill: C.accD })
  b.line(710, 250, 1350, 250, { stroke: C.dna, sw: 2.4 })
  b.rect(730, 232, 100, 36, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 4 })
  b.ctext(780, 254, '增强子', { size: 11.5, weight: 700, fill: C.proD })
  b.arrow(840, 240, 950, 240, { stroke: C.enz, sw: 1.8, marker: 'enz', dash: '6 4' })
  b.ctext(895, 226, '挣脱距离与方向', { size: 10.5, weight: 700, fill: C.enzD })
  b.rect(960, 226, 370, 52, { fill: C.accL, stroke: C.acc, sw: 1.2, dash: '5 4', fillOp: 0.4 })
  b.text(975, 246, '核心启动子（RNA Pol II 装配平台）', { size: 10.5, weight: 700, fill: C.accD })
  b.rect(1050, 234, 84, 36, { fill: '#ffffff', stroke: C.acc, sw: 1.6, rx: 4 })
  b.ctext(1092, 256, 'TATAAA', { size: 11.5, weight: 700, fill: C.accD })
  b.rect(1160, 234, 64, 36, { fill: '#ffffff', stroke: C.acc, sw: 1.6, rx: 4 })
  b.ctext(1192, 256, 'Inr', { size: 11.5, weight: 700, fill: C.accD })
  b.rect(1240, 234, 76, 36, { fill: '#ffffff', stroke: C.acc, sw: 1.6, rx: 4 })
  b.ctext(1278, 256, 'BRE·DPE', { size: 11, weight: 700, fill: C.accD })
  b.ctext(1085, 300, 'TATA 框（−25 ~ −30 bp）', { size: 10.5, fill: C.mute })
  b.ctext(1205, 300, 'Inr（横跨起点）', { size: 10.5, fill: C.mute })
  b.line(1192, 226, 1192, 218, { stroke: C.rna, sw: 2 })
  b.ctext(1192, 210, '转录起点', { size: 10.5, fill: C.mute })
  b.wtext(700, 344, '增强子挣脱距离与方向约束——真核调控预测常需开放染色质数据先行框区。', { size: 11.5, fill: C.sub, maxW: 540, lh: 16 })

  // ============ 二、CpG 岛与 PWM/logo ============
  b.panel(30, 472, 660, 488, { title: '二、CpG 岛判据与位置权重矩阵 / motif logo' })
  b.text(60, 524, 'CpG 岛经典判据三件套（Gardiner-Garden 与 Frommer，1987）', { size: 12.5, weight: 700, fill: C.ink })
  b.tag(165, 560, '长度 ≥ 200 bp', { fill: C.dnaL, stroke: C.dna, size: 12, weight: 700, tfill: C.dnaD, pad: 10 })
  b.tag(370, 560, 'GC > 50%', { fill: C.dnaL, stroke: C.dna, size: 12, weight: 700, tfill: C.dnaD, pad: 10 })
  b.tag(565, 560, 'Obs/Exp > 0.6', { fill: C.dnaL, stroke: C.dna, size: 12, weight: 700, tfill: C.dnaD, pad: 10 })
  b.wtext(60, 598, '脊椎动物基因组中 GC 与 CpG 双富集的短区段，多与管家基因启动子关联。', { size: 11.5, fill: C.sub, maxW: 560, lh: 16 })
  b.text(60, 668, 'PWM 与 motif logo', { size: 12.5, weight: 700, fill: C.ink })
  // logo：逐列堆高 = 信息量
  const logo: Array<Array<[string, number, string]>> = [
    [['A', 0.95, C.ok]],
    [['C', 0.45, C.acc], ['G', 0.30, C.warn]],
    [['G', 0.90, C.warn]],
    [['T', 0.50, C.bad], ['A', 0.30, C.ok]],
    [['A', 0.85, C.ok]],
    [['C', 0.70, C.acc]],
    [['G', 0.42, C.warn], ['T', 0.28, C.bad]],
  ]
  const base = 806
  logo.forEach((col, i) => {
    const cx = 112 + i * 44
    let y = base
    col.forEach(([ch, f, color]) => {
      const h = f * 100
      const size = Math.max(h * 0.62, 10)
      b.rect(cx - 19, y - h, 38, h, { fill: '#ffffff', stroke: C.line, sw: 0.8 })
      b.ctext(cx, y - h / 2 + size * 0.36, ch, { size, weight: 700, fill: color })
      y -= h
    })
    b.ctext(cx, 826, `${i + 1}`, { size: 10, fill: C.faint })
  })
  b.wtext(430, 700, 'PWM 把位点频数化为逐列对数权重；logo 以堆高显示逐列信息量——高柱即保守列。', { size: 11.5, fill: C.sub, maxW: 230, lh: 16 })
  b.wtext(430, 780, '第 1 / 3 / 5 列近单一残基：信息量高；第 2 / 4 列有分裂：信息量低。', { size: 11, fill: C.mute, maxW: 230, lh: 15 })

  // ============ 三、密码子偏性与 CAI ============
  b.panel(710, 472, 660, 488, { title: '三、密码子使用偏性与 CAI' })
  b.wtext(740, 524, '同义密码子的使用并不均等——同一氨基酸的不同密码子有明显的使用偏好。', { size: 11.5, fill: C.sub, maxW: 590, lh: 16 })
  const cbars: Array<[number, number, string, string]> = [
    [760, 110, '常用', C.dna],
    [850, 52, '次常用', C.dna],
    [940, 20, '罕见', C.faint],
  ]
  cbars.forEach(([x, h, lab, st]) => {
    b.rect(x, 690 - h, 60, h, { fill: C.dnaL, stroke: st, sw: 1.6 })
    b.ctext(x + 30, 712, lab, { size: 11, fill: C.mute })
  })
  b.ctext(860, 570, '同义密码子使用频率（示意）', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(1090, 560, 250, 160, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 8 })
  b.ctext(1215, 596, 'CAI = exp( Σ ln wᵢ / L )', { size: 13.5, weight: 700, fill: C.ink })
  b.wtext(1105, 626, 'wᵢ：密码子 i 的相对适应性（最优同义密码子取 1）', { size: 11, fill: C.sub, maxW: 222, lh: 15 })
  b.wtext(1105, 676, 'L：基因内密码子总数——几何平均', { size: 11, fill: C.sub, maxW: 222, lh: 15 })
  const cflow: Array<[number, string]> = [
    [740, '高表达参考集'],
    [930, '逐密码子 w'],
    [1120, '几何平均'],
    [1290, 'CAI'],
  ]
  cflow.forEach(([x, t], i) => {
    b.rect(x, 756, 150, 54, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8, fillOp: 0.6 })
    b.ctext(x + 75, 787, t, { size: 12, weight: 700, fill: C.accD })
    if (i < 3) b.arrow(x + 154, 783, x + 186, 783, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  b.wtext(740, 860, 'CAI 为高表达参考集相对适应性的几何平均——高表达基因的密码子选择向参考集靠拢，CAI 量度这种偏性。', { size: 11.5, fill: C.sub, maxW: 590, lh: 16 })
}

export default scene({
  title: '调控元件与基因组特征：启动子语法、CpG 岛与 CAI',
  subtitle: 'σ70 启动子为 -35（TTGACA）与 -10（TATAAT）框加约 15–19 bp 间距；真核增强子挣脱距离与方向约束；CpG 岛判据三件套（长约 200 bp 以上、GC 高于 50%、Obs/Exp 高于 0.6）；PWM 化频数为逐列对数权重、logo 显示逐列信息量；CAI 为高表达参考集相对适应性的几何平均',
  draw,
})
