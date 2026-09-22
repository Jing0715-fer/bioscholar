// xc ch9-s4 自动建模与模型检查（Task 4-d）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、自动建模三工具 ============
  b.panel(30, 132, 660, 430, { title: '一、自动建模谱系：ARP/wARP 滚雪球与两个同行者' })
  // ARP/wARP 四格
  const frame = (x: number, t: string) => {
    b.rect(x, 186, 140, 96, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
    b.ctext(x + 70, 178, t, { size: 9.5, weight: 700, fill: C.sub })
  }
  frame(56, '① 撒自由原子')
  let sd = 13
  const rnd = () => { sd = (sd * 9301 + 49297) % 233280; return sd / 233280 }
  for (let i = 0; i < 14; i++) b.circle(66 + rnd() * 120, 200 + rnd() * 66, 3, { fill: C.mute, fillOp: 0.75 })
  frame(216, '② 拽向峰心')
  for (let i = 0; i < 12; i++) b.circle(226 + rnd() * 120, 202 + rnd() * 62, 3, { fill: C.mute, fillOp: 0.75 })
  b.ellipse(286, 234, 52, 30, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.4, dash: '5 4' })
  frame(376, '③ 认亲连链')
  const chain3: [number, number][] = [[392, 250], [406, 236], [420, 252], [434, 238], [448, 254], [462, 240]]
  b.polyline(chain3, { stroke: C.acc, sw: 2.4 })
  chain3.forEach(([x, y]) => b.circle(x, y, 4.5, { fill: C.acc, fillOp: 0.9 }))
  b.ctext(430, 272, 'Cα 间距约 3.8 Å', { size: 8.5, fill: C.mute })
  frame(536, '④ 反哺相位')
  b.path('M 548,244 q 12,-18 26,-8 q 14,10 26,-6 q 12,-14 24,4', { fill: 'none', stroke: C.dna, sw: 2.6 })
  b.arrow(586, 220, 606, 236, { stroke: C.dna, sw: 1.6, marker: 'dna' })
  b.ctext(606, 272, '图变好', { size: 8.5, fill: C.mute })
  b.arrow(196, 234, 214, 234, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.arrow(356, 234, 374, 234, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.arrow(516, 234, 534, 234, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.wtext(56, 300, 'ARP/wARP 的自由原子迭代是「先撒原子、后认亲」：在密度峰上撒一把无化学身份的自由原子，每轮按峰高增删、把原子拽向峰心；当一段原子的间距与几何渐渐符合肽链模式（相邻 Cα 约 3.8 Å 的节律），程序便把它们连成主链、赋予化学身份；成链的模型立即反哺相位，图变好又允许更多原子被指认——滚雪球直至全链。这套打法依赖峰与峰分得开，故 1.7 Å 是道坎：优于约 1.7 Å 的数据上主链自动追踪成功率可超过 90%。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.table(56, 396, 616, {
    headers: ['工具', '舒适分辨率', '核心思路', '弱点'],
    colW: [130, 130, 210, 146],
    rowH: 27,
    fontSize: 10,
    rows: [
      ['ARP/wARP', '优于约 1.7 Å', '自由原子迭代建模', '低分辨率失效'],
      ['Buccaneer', '2.5–3.2 Å', '概率骨架追踪', '依赖相位质量'],
      ['AutoBuild', '各档通吃', '修饰-建模-重建循环', '循环耗算力'],
    ],
  })

  // ============ 二、AlphaFold 起点 ============
  b.panel(710, 132, 660, 430, { title: '二、AlphaFold 起点：AF 骨架加密度裁决' })
  const mx = 740, my = 400, mw = 330, mh = 200
  b.axis(mx, my, mw, mh, {
    title: 'model-to-map 逐残基拟合度与 pLDDT', xlabel: '残基序号（沿序列）', grid: false,
    xticks: [[0, '1'], [0.3, '60'], [0.6, '120'], [1, '200']],
    yticks: [[0, '0'], [0.5, ''], [1, '高']],
  })
  const cc: [number, number][] = [[0, 0.85], [0.12, 0.9], [0.24, 0.86], [0.30, 0.35], [0.38, 0.22], [0.46, 0.3], [0.54, 0.55], [0.62, 0.88], [0.75, 0.92], [0.88, 0.9], [1, 0.87]]
  const plddt: [number, number][] = [[0, 0.92], [0.12, 0.95], [0.24, 0.9], [0.30, 0.88], [0.38, 0.9], [0.46, 0.86], [0.54, 0.6], [0.62, 0.55], [0.75, 0.9], [0.88, 0.94], [1, 0.9]]
  b.curve(mx, my, mw, mh, plddt, { stroke: C.pro, sw: 2.4, smooth: true })
  b.curve(mx, my, mw, mh, cc, { stroke: C.acc, sw: 2.4, smooth: true, dash: '7 4' })
  b.legend(mx + 12, my - mh + 18, [['pLDDT（预测置信度）', C.pro], ['局部 map-model 相关', C.acc]], { size: 9.5 })
  // 分区标注
  b.line(mx + 0.29 * mw, my - mh, mx + 0.29 * mw, my, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.line(mx + 0.57 * mw, my - mh, mx + 0.57 * mw, my, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.ctext(mx + 0.15 * mw, my - mh * 0.16, '两高：按 AF 摆', { size: 9, weight: 700, fill: C.okD })
  b.ctext(mx + 0.43 * mw, my - mh * 0.16, 'pLDDT 高而无密度', { size: 9, weight: 700, fill: C.warnD })
  b.ctext(mx + 0.79 * mw, my - mh * 0.16, '两高', { size: 9, weight: 700, fill: C.okD })
  b.wtext(1090, 216, '当代标准姿势：pLDDT 高的区段按模型摆、密度冲突处依图重建；侧链构象一律以密度为准重新挑选 rotamer（预测侧链的构象精度低于骨架）。对低分辨率结构，AF 起点配 NCS 与限制精修，常能把 3–4 Å 的图做出超出手搭的完整度。', { size: 10, fill: C.sub, maxW: 262, lh: 14.5 })
  b.wtext(1090, 320, '两步工作流：model-to-map 拟合度检验（以 AF 模型计算结构因子、与实验图逐残基比对局部相关系数）；限制性 rebuild——高拟合区段不动，低拟合区段按密度重搭，全程以预测骨架作参考模型限制，精修器可微调但不许推翻先验。', { size: 10, fill: C.sub, maxW: 262, lh: 14.5 })
  b.wtext(730, 440, 'pLDDT 与局部拟合度的对照本身即是体检：高 pLDDT 而图上无密度，多半是晶体里局部无序——先验对而晶体不配合；低 pLDDT 而密度清晰，则是预测保守或真实构象变化的信号。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 三、register 错位报警 ============
  b.panel(30, 572, 660, 390, { title: '三、register 错位：三联报警与整段平移' })
  // B 因子锯齿
  const bx = 60, by = 730, bw = 300, bh = 130
  b.axis(bx, by, bw, bh, {
    title: 'B 因子锯齿（错位区）', xlabel: '残基序号', grid: false,
    yticks: [[0, '0'], [0.5, '30'], [1, '60 Å^{2}']],
  })
  const bzig: [number, number][] = []
  for (let i = 0; i <= 30; i++) {
    const f = i / 30
    let v = 0.3
    if (f > 0.3 && f < 0.7) v = 0.3 + 0.5 * Math.abs(Math.sin(i * 1.9))
    bzig.push([f, Math.min(1, v)])
  }
  b.curve(bx, by, bw, bh, bzig, { stroke: C.warn, sw: 2.2 })
  // 验证球串
  b.text(400, 626, '验证图标连锁报警：', { size: 11, weight: 700, fill: C.ink })
  const ballRow = [C.ok, C.ok, C.ok, C.warn, C.bad, C.warn, C.bad, C.warn, C.bad, C.ok, C.ok, C.ok]
  ballRow.forEach((c, i) => {
    b.circle(400 + (i % 6) * 30, 650 + Math.floor(i / 6) * 32, 9, { fill: c, stroke: C.ink, sw: 1 })
  })
  b.wtext(400, 726, '一处 register 错会拉出一串黄红球：错位区侧链密度系统性缺失、rotamer 频繁不良、Ramachandran 异常连片。', { size: 10, fill: C.sub, maxW: 268, lh: 14 })
  // 错配示意
  b.text(60, 786, '密度与序列错位：', { size: 11, weight: 700, fill: C.ink })
  const mm = (x: number, dens: number, side: number) => {
    b.rect(x, 800, 26, 14, { fill: C.accL, stroke: C.acc, sw: 1.4 })
    b.ellipse(x + 13, 838, dens, dens * 0.6, { fill: C.dnaL, stroke: C.dna, sw: 1.4 })
    b.circle(x + 13, 820, side, { fill: C.pro, fillOp: 0.85 })
  }
  mm(70, 12, 7); mm(110, 9, 8); mm(150, 7, 9); mm(190, 9, 6); mm(230, 12, 7)
  b.ctext(185, 868, '长侧链坐在短密度上、短侧链悬在长密度外', { size: 9.5, weight: 700, fill: C.warnD })
  b.wtext(60, 892, '口诀：一连串 rotamer outlier、相邻原子 B 因子锯齿、密度与序列错位三者同现，即 register 错位的教科书像；三缺一才须另寻他因。发现即整段重搭：整体平移一两个残基再 mutate，比逐个残基修补快得多。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })

  // ============ 四、无密度即不建与验收清单 ============
  b.panel(710, 572, 660, 390, { title: '四、「无密度即不建」与建模验收清单' })
  // 链完整度示意
  const cy = 636
  b.path('M 760,668 L 800,660 L 840,668 L 880,660 L 920,668 L 960,660 L 1000,668 L 1040,660', { fill: 'none', stroke: C.acc, sw: 3 })
  for (let i = 0; i < 5; i++) {
    b.circle(1060 + i * 26, 664 + (i % 2 === 0 ? 4 : -4), 5 - i * 0.7, { fill: C.acc, fillOp: 0.55 - i * 0.09 })
  }
  b.ctext(770, 690, 'N 端', { size: 10, weight: 700, fill: C.accD })
  b.ctext(1105, 690, 'C 端无序（虚化）', { size: 10, weight: 700, fill: C.mute })
  b.wtext(730, 620, '模型完整度口径：覆盖残基数对序列长度之比。两端柔性尾巴在晶格里多构象平均成背景——无密度支撑的残基硬建出来，等于向图里注射虚构坐标。', { size: 10, fill: C.sub, maxW: 616, lh: 14 })
  b.wtext(730, 712, '报告纪律：如实交代「可见第 1 至 28 与第 35 至 212 号残基」；PDB 的 REMARK 465 列出缺失残基，mmCIF 以全序列与模型残基对照表记录——「未观测」与「不存在」是两个世界，混写即误导读者。', { size: 10, fill: C.sub, maxW: 616, lh: 14 })
  b.table(730, 772, 620, {
    headers: ['验收项', '检查方法', '通过标准'],
    colW: [130, 250, 240],
    rowH: 27,
    fontSize: 10,
    rows: [
      ['主链连续', '沿骨架逐段巡主图', '可观测密度内无断点'],
      ['侧链就位', 'rotamer 着色加密度比对', '保守区侧链贴合且构象合规'],
      ['无显著 clash', '验证球与 clashscore', '红球清零或可解释'],
      ['密度匹配', '双图整体巡检', '差值图无大片未解释正负斑'],
      ['register 无误', 'Met 与 Trp 锚定核对', '大侧链逐一对号'],
    ],
  })
  b.wtext(730, 942, '全项打勾，模型才有资格进入第 10 章的精修主循环。', { size: 10.5, weight: 700, fill: C.mute, maxW: 616, lh: 14 })
}

export default scene({
  title: '自动建模与模型检查',
  subtitle: 'ARP/wARP 优于 1.7 Å 主链追踪成功率超 90%；Buccaneer 2.5–3.2 Å 概率骨架；AutoBuild 修饰-建模-精修循环；AF 起点按 model-to-map 分区；register 错位三联报警；验收五项过关交棒精修',
  draw,
})
