// ne ch9-s4 听觉、前庭与化学感觉 / 嗅觉与味觉（39-h 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、嗅觉的分子换能 ============
  b.panel(30, 132, 660, 430, { title: '一、嗅受体：最大基因家族与放大级联' })
  b.tag(360, 196, 'OR 属 GPCR · 每只嗅神经元终身只表达一种', { fill: C.dnaL, stroke: C.dna, size: 11.5, weight: 700, tfill: C.dnaD, pad: 9 })
  b.wtext(60, 240, '人类基因组 OR 座位逾 800 个、功能基因约 400 个（小鼠约 1000 个，约占其基因总数 3%）——人类最大的基因家族。Buck 与 Axel 1991 年克隆首个 OR 基因，获 2004 年诺贝尔奖。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  const casc: Array<[string, string, string]> = [
    ['气味分子结合 OR（GPCR）', C.dna, C.dnaL],
    ['偶联 Golf → 腺苷酸环化酶 → cAMP', C.acc, C.accL],
    ['CNG 通道开放 → Ca²⁺ 内流去极化', C.rna, C.rnaL],
    ['Ca²⁺ 激活 Cl⁻ 通道 → Cl⁻ 外流放大', C.enz, C.enzL],
    ['动作电位沿嗅神经轴突入嗅球', C.pro, C.proL],
  ]
  casc.forEach(([label, c, cl], i) => {
    const y = 310 + i * 44
    b.rect(80, y, 560, 32, { fill: cl, fillOp: 0.5, stroke: c, sw: 1.6, rx: 7 })
    b.text(100, y + 21, label, { size: 12, weight: 600, fill: C.ink })
    if (i < casc.length - 1) b.arrow(360, y + 32, 360, y + 44, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  b.wtext(80, 538, 'Cl⁻ 外流是嗅觉特有的放大设计：嗅神经元内 Cl⁻ 浓度高，通道开放时氯外流而非内流，与去极化同向叠加。', { size: 10.5, fill: C.mute, maxW: 610, lh: 15 })

  // ============ 二、组合编码与肾小球汇聚 ============
  b.panel(710, 132, 660, 430, { title: '二、组合编码：约 400 种受体辨识万千气味' })
  // 激活矩阵
  b.ctext(920, 216, '激活组合谱（颜色深浅 ∝ 亲和力）', { size: 12, weight: 700, fill: C.ink })
  const ors = ['OR1', 'OR2', 'OR3', 'OR4', 'OR5']
  const odors = ['气味 A', '气味 B', '气味 C']
  const mat = [
    [0.9, 0.15, 0.0],
    [0.5, 0.0, 0.3],
    [0.0, 0.85, 0.45],
    [0.2, 0.6, 0.0],
    [0.0, 0.3, 0.95],
  ]
  odors.forEach((od, r) => {
    b.text(748, 260 + r * 52, od, { size: 11, weight: 700, fill: C.sub })
  })
  ors.forEach((o, c) => {
    b.ctext(824 + c * 66, 240, o, { size: 10.5, fill: C.mute })
  })
  mat.forEach((col, c) => {
    col.forEach((v, r) => {
      if (v > 0) {
        b.rect(800 + c * 66, 248 + r * 52, 48, 40, { fill: C.dna, fillOp: 0.25 + v * 0.7, stroke: C.dna, sw: 1.2, rx: 4 })
        b.ctext(824 + c * 66, 272 + r * 52, v > 0.7 ? '强' : v > 0.4 ? '中' : '弱', { size: 10, weight: 700, fill: '#ffffff' })
      } else {
        b.rect(800 + c * 66, 248 + r * 52, 48, 40, { fill: C.panelB, stroke: C.line, sw: 1, rx: 4 })
      }
    })
  })
  b.wtext(740, 452, '一个分子以不同亲和力激活多种 OR；一种 OR 也可被多种分子激活——天然气味是数十至数百种分子的混合物，其「指纹」即受体激活谱。', { size: 11, fill: C.sub, maxW: 590, lh: 16 })
  b.wtext(740, 508, '表达同一 OR 的轴突汇聚于嗅球固定的肾小球 → 僧帽细胞；嗅觉是唯一不经丘脑直接抵达皮层（梨状皮层、杏仁核）的主要感觉；人类犁鼻器退化。', { size: 11, fill: C.mute, maxW: 590, lh: 16 })

  // ============ 三、味觉通路 ============
  b.panel(30, 578, 660, 396, { title: '三、味蕾与味觉中枢通路' })
  // 味蕾结构
  b.ctext(105, 646, '味蕾（舌乳头）', { size: 12.5, weight: 700, fill: C.ink })
  b.ellipse(105, 720, 30, 46, { fill: C.proL, fillOp: 0.5, stroke: C.pro, sw: 2 })
  ;[93, 105, 117].forEach(x => b.line(x, 760, x, 682, { stroke: C.pro, sw: 1.8 }))
  b.ctext(105, 776, '约 50–100 个细胞', { size: 9.5, fill: C.mute })
  b.ctext(105, 790, '寿命约 10 天', { size: 9.5, fill: C.mute })
  b.circle(105, 676, 5, { fill: C.warn })
  b.ctext(105, 660, '味孔', { size: 9.5, fill: C.mute })
  b.wtext(160, 656, '成人味蕾总数约 4000–10000 个，单个轮廓乳头可含数百个味蕾；顶端微绒毛经味孔伸入口腔。', { size: 11, fill: C.sub, maxW: 490, lh: 16 })
  // 通路链
  const tastePath: Array<[string, string]> = [
    ['面神经鼓索支（前 2/3）', C.rna],
    ['舌咽神经（后 1/3）', C.acc],
    ['迷走神经（会厌）', C.pro],
  ]
  tastePath.forEach(([name, c], i) => {
    b.rect(160 + i * 160, 712, 148, 40, { fill: C.panelB, stroke: c, sw: 1.6, rx: 7 })
    b.wtext(168 + i * 160, 728, name, { size: 9.5, weight: 600, fill: C.ink, maxW: 132, lh: 12 })
  })
  b.arrow(105, 766, 105, 800, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(105, 816, '汇聚于孤束核头端', { size: 11, weight: 700, fill: C.ink })
  b.arrow(232, 816, 330, 816, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.rect(336, 792, 130, 48, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(401, 812, '丘脑腹后内侧核', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(401, 830, '（VPM）', { size: 10, fill: C.mute })
  b.arrow(466, 816, 520, 816, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.rect(526, 792, 140, 48, { fill: C.dnaL, fillOp: 0.55, stroke: C.dna, sw: 1.8, rx: 8 })
  b.ctext(596, 812, '岛叶味皮层', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(596, 830, '（味觉的皮层终点）', { size: 9.5, fill: C.mute })
  b.wtext(60, 880, '五味信息与咀嚼温度质地整合成「风味」——嗅觉（鼻后通路）贡献了风味的大部分：捏住鼻子，咖啡与洋葱汁难分。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 四、五种基本味质 ============
  b.panel(710, 578, 660, 396, { title: '四、五种基本味质的受体与传导' })
  b.table(740, 648, 600, {
    headers: ['味质', '受体 / 通道', '传导级联'],
    colW: [70, 250, 280],
    rowH: 46,
    fontSize: 11,
    rows: [
      ['甜', 'T1R2 + T1R3', 'gustducin–PLCβ2–TRPM5 → ATP'],
      ['鲜', 'T1R1 + T1R3', 'gustducin–PLCβ2–TRPM5 → ATP'],
      ['苦', 'T2R 家族（约 25–30 种）', 'gustducin–PLCβ2–TRPM5 → ATP'],
      ['咸', 'ENaC（钠通道）', 'Na⁺ 直接内流去极化'],
      ['酸', 'H⁺ 经质子通道', 'H⁺ 阻断 K⁺ 通道去极化'],
    ],
  })
  b.wtext(740, 940, '甜/鲜/苦共用同一套 G 蛋白级联（TRPM5 通透阳离子、ATP 为传出信使）；咸与酸则由离子直接介导——五味在味蕾即分两路。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })
}

export default scene({
  title: '嗅觉与味觉：组合编码、不经丘脑的直达通路与五味受体',
  subtitle: '约 400 个功能 OR 组合编码万千气味；甜鲜苦走 gustducin–TRPM5 级联，咸酸由离子直接介导',
  draw,
})
