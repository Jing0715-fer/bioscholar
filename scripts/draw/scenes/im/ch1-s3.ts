// im ch1-s3 免疫应答的类型与基本规律：初次/再次应答曲线（39-g 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、应答四阶段 ============
  b.panel(30, 132, 1340, 140, { title: '一、免疫应答的四个阶段：识别 → 活化 → 效应 → 记忆' })
  const steps: Array<[number, string, string, string]> = [
    [70, '① 识别', 'TCR 识别 MHC-肽；BCR 直接识别天然抗原表位', C.acc],
    [400, '② 活化', 'T 细胞需双信号：MHC-肽第一信号 + 共刺激第二信号', C.dna],
    [730, '③ 效应', 'CTL · Th · 抗体等协同清除抗原', C.pro],
    [1060, '④ 记忆', '记忆 T/B 细胞 + 骨髓长寿命浆细胞', C.rna],
  ]
  steps.forEach(([x, t, s, col]) => {
    b.rect(x, 176, 300, 60, { fill: col, fillOp: 0.09, stroke: col, sw: 1.6, rx: 8 })
    b.text(x + 16, 200, t, { size: 14, weight: 700, fill: col })
    b.wtext(x + 16, 222, s, { size: 10.5, fill: C.sub, maxW: 272, lh: 14 })
  })
  b.arrow(376, 206, 394, 206, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.arrow(706, 206, 724, 206, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.arrow(1036, 206, 1054, 206, { stroke: C.mute, sw: 2, marker: 'mute' })

  // ============ 二、初次应答与再次应答 ============
  b.panel(30, 288, 1340, 400, { title: '二、初次应答与再次应答：抗体动态的定量规律（再次应答更快、更高、亲和力更强）' })

  const ax = 150, ay = 612, aw = 540, ah = 272
  // 注入标记
  b.line(ax + 0.03 * aw, ay - ah, ax + 0.03 * aw, ay, { stroke: C.bad, sw: 1.6, dash: '5 4', opacity: 0.7 })
  b.line(ax + 0.58 * aw, ay - ah, ax + 0.58 * aw, ay, { stroke: C.bad, sw: 1.6, dash: '5 4', opacity: 0.7 })
  b.axis(ax, ay, aw, ah, {
    xlabel: '时间（初次免疫 → 再次暴露同一抗原）',
    ylabel: '抗体滴度（对数坐标）',
    xticks: [[0.03, '初免'], [0.58, '再次暴露'], [0.95, '时间 →']],
    yticks: [[0.05, '低'], [0.5, '中'], [0.95, '高']],
  })
  // 初次 IgM
  b.curve(ax, ay, aw, ah, [
    [0.03, 0.02], [0.12, 0.02], [0.20, 0.09], [0.28, 0.24], [0.36, 0.40],
    [0.44, 0.46], [0.52, 0.40], [0.58, 0.34],
  ], { stroke: C.rna, sw: 2.4, dash: '7 5' })
  // 初次 IgG
  b.curve(ax, ay, aw, ah, [
    [0.10, 0.02], [0.22, 0.04], [0.32, 0.15], [0.42, 0.32], [0.52, 0.38], [0.58, 0.36],
  ], { stroke: C.acc, sw: 2.4 })
  // 再次 IgG
  b.curve(ax, ay, aw, ah, [
    [0.58, 0.34], [0.63, 0.55], [0.70, 0.83], [0.78, 0.93], [0.88, 0.96], [1, 0.96],
  ], { stroke: C.dna, sw: 3.4 })

  // 潜伏期标注
  b.line(ax + 0.03 * aw, ay - 0.10 * ah, ax + 0.20 * aw, ay - 0.10 * ah, { stroke: C.rna, sw: 1.6, marker: 'rna', markerStart: 'rna' })
  b.ctext(ax + 0.115 * aw, ay - 0.10 * ah - 10, '潜伏期约 1–2 周', { size: 10.5, weight: 700, fill: C.rnaD })
  b.line(ax + 0.58 * aw, ay - 0.12 * ah, ax + 0.645 * aw, ay - 0.12 * ah, { stroke: C.dna, sw: 1.6, marker: 'dna', markerStart: 'dna' })
  b.ctext(ax + 0.61 * aw, ay - 0.12 * ah - 10, '潜伏期 1–3 天', { size: 10.5, weight: 700, fill: C.dnaD })
  b.text(ax + 0.66 * aw, ay - 0.62 * ah, '平台更高 · 更持久', { size: 11, weight: 700, fill: C.dnaD })
  b.text(ax + 0.66 * aw, ay - 0.62 * ah + 16, '亲和力更高（亲和力成熟）', { size: 11, fill: C.dnaD })
  b.ctext(ax + 0.30 * aw, ay - 0.44 * ah, 'IgM 先行', { size: 10.5, weight: 700, fill: C.rnaD })
  b.legend(ax + aw - 300, ay - ah + 26, [['再次 IgG', C.dna], ['初次 IgG', C.acc], ['初次 IgM', C.rna]], { size: 11, gap: 16 })

  // 右侧对照表
  b.table(730, 350, 620, {
    headers: ['比较项', '初次应答', '再次应答'],
    colW: [110, 190, 320],
    rowH: 40,
    fontSize: 12.5,
    rows: [
      ['潜伏期', '约 1–2 周', '约 1–3 天'],
      ['先导抗体', 'IgM 先行', 'IgG 为主'],
      ['抗体平台', '较低', '更高、更持久'],
      ['亲和力', '较低', '高（亲和力成熟）'],
      ['细胞基础', '初始 T / B 细胞', '记忆 T / B 细胞 + 骨髓长寿命浆细胞'],
    ],
  })
  b.rect(730, 614, 620, 60, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.5, rx: 9 })
  b.text(748, 638, '疫苗学的基石', { size: 13.5, weight: 700, fill: '#065f46' })
  b.text(748, 660, '初免—加强程序正是利用免疫记忆，以再次应答的快、高、强获得保护。', { size: 11.5, fill: C.sub })

  // ============ 三、自限与耐受 ============
  b.panel(30, 704, 1340, 274, { title: '三、应答的自限与免疫耐受：收放之间的艺术' })
  b.rect(80, 744, 330, 58, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.6, rx: 8 })
  b.text(96, 768, '效应应答', { size: 13.5, weight: 700, fill: C.dnaD })
  b.text(96, 790, '克隆扩增 · 清除抗原', { size: 11, fill: C.sub })
  b.arrow(418, 773, 506, 773, { stroke: C.mute, sw: 2.2, marker: 'mute' })
  b.rect(512, 744, 330, 58, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 8 })
  b.text(528, 768, '自限回落', { size: 13.5, weight: 700, fill: C.ink })
  b.text(528, 790, '检查点 + Treg 双重「刹车」', { size: 11, fill: C.sub })
  b.arrow(850, 773, 938, 773, { stroke: C.mute, sw: 2.2, marker: 'mute' })
  b.rect(944, 744, 350, 58, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 1.6, rx: 8 })
  b.text(960, 768, '免疫记忆留存', { size: 13.5, weight: 700, fill: C.rnaD })
  b.text(960, 790, '记忆 T/B 细胞 · 骨髓长寿命浆细胞', { size: 11, fill: C.sub })

  b.line(320, 842, 320, 808, { stroke: C.mute, sw: 1.8, dash: '5 4', marker: 'mute' })
  b.line(700, 842, 700, 808, { stroke: C.mute, sw: 1.8, dash: '5 4', marker: 'mute' })

  b.rect(80, 846, 480, 96, { fill: C.bg, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(100, 872, '免疫检查点：CTLA-4 · PD-1', { size: 13.5, weight: 700, fill: C.accD })
  b.wtext(100, 896, '抑制性受体为活化的 T 细胞「踩刹车」，负调控应答强度，防止过度免疫损伤。', { size: 11, fill: C.sub, maxW: 440, lh: 16 })
  b.rect(590, 846, 440, 96, { fill: C.bg, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(610, 872, '调节性 T 细胞（Treg）', { size: 13.5, weight: 700, fill: C.proD })
  b.wtext(610, 896, '主动抑制效应 T 细胞活性与应答放大，维持对自身抗原的耐受。', { size: 11, fill: C.sub, maxW: 400, lh: 16 })
  b.rect(1055, 846, 285, 96, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(1075, 872, '耐受被打破', { size: 13.5, weight: 700, fill: C.bad })
  b.wtext(1075, 896, '对自身抗原的耐受丧失 → 自身免疫病。', { size: 11, fill: C.sub, maxW: 245, lh: 16 })

  b.ctext(700, 962, '应答的「收放之间」：耐受的维持与效应的执行同等重要', { size: 13, weight: 700, fill: C.ink })
}

export default scene({
  title: '免疫应答的基本规律：初次与再次应答的抗体动态曲线',
  subtitle: '初次应答潜伏期约 1–2 周、IgM 先行、平台低；再次应答潜伏期 1–3 天、IgG 为主、平台高且亲和力高；免疫记忆由记忆 T/B 细胞与骨髓长寿命浆细胞构成，是疫苗初免—加强程序的理论依据；CTLA-4、PD-1 检查点与 Treg 负责应答自限',
  draw,
})
