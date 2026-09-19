// mi ch7-s2 微生物生长的测定方法（39-f 批3）
import { scene, C, B, textW } from '../../lib'

const draw = (b: B) => {
  // ============ 一、计总菌数：血球计数板 ============
  b.panel(30, 132, 1340, 286, { title: '一、计总菌数：血球计数板与电子颗粒计数——活死兼计' })

  // 计数板俯视
  b.rect(70, 195, 310, 190, { fill: C.panel, stroke: C.sub, sw: 2, rx: 6 })
  b.rect(125, 232, 190, 116, { fill: C.bg, stroke: C.ink, sw: 1.5 })
  for (let i = 1; i < 5; i++) b.line(125 + i * 38, 232, 125 + i * 38, 348, { stroke: C.faint, sw: 1 })
  for (let j = 1; j < 3; j++) b.line(125, 232 + j * 38.7, 315, 232 + j * 38.7, { stroke: C.faint, sw: 1 })
  const pts: Array<[number, number]> = [[150, 250], [172, 243], [195, 262], [220, 252], [243, 270], [268, 258], [290, 245], [155, 285], [180, 300], [205, 288], [232, 305], [258, 292], [281, 312], [160, 325], [188, 335], [215, 330], [245, 328], [275, 335], [300, 322]]
  pts.forEach(([x, y]) => b.circle(x, y, 3.2, { fill: C.dna }))
  b.ctext(220, 372, '计数室（加盖片后深度与面积固定）', { size: 10, fill: C.mute })

  // 放大中格
  b.rect(430, 225, 130, 130, { fill: C.bg, stroke: C.ink, sw: 1.5 })
  for (let i = 1; i < 4; i++) {
    b.line(430 + i * 32.5, 225, 430 + i * 32.5, 355, { stroke: C.faint, sw: 1 })
    b.line(430, 225 + i * 32.5, 560, 225 + i * 32.5, { stroke: C.faint, sw: 1 })
  }
  const bigPts: Array<[number, number]> = [[445, 240], [495, 248], [525, 238], [462, 285], [508, 290], [540, 275], [470, 322], [520, 335]]
  bigPts.forEach(([x, y]) => b.circle(x, y, 5.5, { fill: C.dna }))
  b.line(201, 251, 430, 288, { stroke: C.mute, sw: 1.4, dash: '5 4' })
  b.ctext(495, 385, '一个中格放大：内分 16 小格', { size: 10, fill: C.mute })

  // 右侧说明卡
  b.rect(600, 192, 360, 168, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(620, 218, '计数室规格', { size: 13, weight: 700, fill: C.ink })
  b.wtext(620, 242, '总容积 0.1 mm³；网格分 25×16 或 16×25 两种规格，共 400 个小格。', { size: 11.5, fill: C.sub, maxW: 320, lh: 17 })
  b.wtext(620, 296, '换算：计得 N 个细胞 → 浓度 = N × 10⁴ 个/mL（再乘稀释倍数）。', { size: 11.5, fill: C.sub, maxW: 320, lh: 17 })
  b.rect(990, 192, 360, 168, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(1010, 218, '特点', { size: 13, weight: 700, fill: C.ink })
  b.wtext(1010, 242, '快速、直观，无需培养；但活死兼计，无法区分细胞生理状态，且要求菌浓较高。', { size: 11.5, fill: C.sub, maxW: 320, lh: 17 })
  b.wtext(1010, 312, '电子颗粒计数：细胞通过微孔引起电阻脉冲逐个累计——同为总菌数口径。', { size: 11.5, fill: C.sub, maxW: 320, lh: 17 })

  // ============ 二、计活菌数：平板菌落计数 ============
  b.panel(30, 430, 660, 330, { title: '二、计活菌数：平板菌落计数（以 CFU 报告）' })

  // 稀释系列
  const dil = ['10⁻¹', '10⁻²', '10⁻³', '10⁻⁴']
  dil.forEach((d, i) => {
    const x = 66 + i * 62
    b.rect(x, 492, 24, 56, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.6, rx: 5 })
    b.ctext(x + 12, 566, d, { size: 10, weight: 700, fill: C.dnaD })
  })
  b.ctext(145, 480, '10 倍系列梯度稀释', { size: 10, fill: C.mute })
  b.arrow(310, 520, 360, 520, { stroke: C.sub, sw: 2, marker: 'mute' })
  b.ctext(335, 506, '接种培养', { size: 10, fill: C.mute })

  // 三个平板
  const plates: Array<[number, number, number]> = [[420, 530, 26], [520, 530, 8], [610, 530, 2]]
  const seed = (cx: number, cy: number, n: number, r: number) => {
    const ang: Array<[number, number]> = [[-0.6, -0.5], [0.4, -0.7], [0.7, 0.2], [0.0, 0.3], [-0.5, 0.6], [0.6, 0.7], [-0.8, 0.1], [0.2, -0.2], [-0.2, 0.8], [0.9, -0.3]]
    for (let i = 0; i < n; i++) {
      const [dx, dy] = ang[i % ang.length]
      const rr = r * (0.35 + 0.6 * ((i * 7) % 10) / 10)
      b.circle(cx + dx * r * 0.85, cy + dy * r * 0.85, 2.2 + (i % 3), { fill: C.dna })
    }
  }
  seed(420, 530, 10, 34)
  seed(520, 530, 8, 34)
  seed(610, 530, 2, 34)
  b.circle(420, 530, 42, { fill: C.dnaL, fillOp: 0.3, stroke: C.dna, sw: 2 })
  b.circle(520, 530, 42, { fill: C.dnaL, fillOp: 0.3, stroke: C.dna, sw: 2 })
  b.circle(610, 530, 42, { fill: C.dnaL, fillOp: 0.3, stroke: C.dna, sw: 2 })
  b.ctext(420, 590, '过密 ✗', { size: 11, weight: 700, fill: C.bad })
  b.ctext(520, 590, '30–300 ✓', { size: 11, weight: 700, fill: C.ok })
  b.ctext(610, 590, '过疏 ✗', { size: 11, weight: 700, fill: C.bad })
  b.wtext(60, 612, '选每皿 30–300 个菌落的稀释度计数；每稀释度设 2–3 个重复，相邻稀释度每皿菌落数应大致呈 10 倍关系。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // 倾注 vs 涂布
  b.tag(160, 668, '稀释倒平板法（倾注）', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD, pad: 8 })
  b.wtext(60, 692, '菌液与冷至 45–50 ℃ 的融化培养基混匀后倾注，菌落分布于培养基内部与表面。', { size: 10.5, fill: C.sub, maxW: 290, lh: 15 })
  b.tag(480, 668, '涂布平板法', { fill: C.rnaL, stroke: C.rna, size: 11, weight: 700, tfill: C.rnaD, pad: 8 })
  b.wtext(380, 692, '菌液涂布于固体培养基表面，菌落全部长于表面、便于挑取。', { size: 10.5, fill: C.sub, maxW: 290, lh: 15 })

  // 薄膜过滤
  b.rect(60, 726, 620, 28, { fill: C.bg, stroke: C.line, sw: 1.2, rx: 6 })
  b.text(76, 744, '薄膜过滤：', { size: 11.5, weight: 700, fill: C.ink })
  b.text(76 + textW('薄膜过滤：', 11.5, 700) + 10, 744, '大体积低菌浓样品（饮用水、深部海水）经孔径 0.22–0.45 μm 无菌滤膜截留细菌，膜贴培养基培养计数。', { size: 10.5, fill: C.sub })

  // ============ 三、MPN 法 ============
  b.panel(710, 430, 330, 330, { title: '三、最大或然数法（MPN）' })
  const rows = ['10⁻¹', '10⁻²', '10⁻³']
  rows.forEach((r, ri) => {
    b.ctext(736, 510 + ri * 56, r, { size: 10, weight: 700, fill: C.dnaD })
    for (let k = 0; k < 5; k++) {
      const x = 760 + k * 34, y = 486 + ri * 56
      const positive = (ri === 0 && k < 4) || (ri === 1 && k < 2) || (ri === 2 && k < 1)
      b.rect(x, y, 26, 44, { fill: positive ? C.warnL : C.bg, stroke: positive ? C.warn : C.line, sw: 1.6, rx: 6 })
      if (positive) {
        b.circle(x + 9, y + 34, 4.5, { fill: C.warn, opacity: 0.65 })
        b.circle(x + 17, y + 36, 3.5, { fill: C.warn, opacity: 0.5 })
        b.circle(x + 13, y + 28, 3, { fill: C.warn, opacity: 0.45 })
      }
    }
  })
  b.ctext(880, 470, '产气为阳性（示例管型 4-2-1）', { size: 10, fill: C.mute })
  b.wtext(730, 658, '连续 10 倍稀释，每稀释度接种多管乳糖培养基（通常 3 个稀释度各 5 管，共 15 管），按阳性管型以泊松统计查 MPN 表估计菌浓度。', { size: 10.5, fill: C.sub, maxW: 292, lh: 15 })
  b.wtext(730, 724, '水质大肠菌群检验经典法；精度较低（95% 置信区间常横跨数倍），适合硝化菌、反硝化菌、产甲烷菌等不能形成可见菌落的功能菌群。', { size: 10.5, fill: C.sub, maxW: 292, lh: 15 })

  // ============ 四、比浊法与标准曲线 ============
  b.panel(1060, 430, 310, 330, { title: '四、比浊法与标准曲线' })
  const ax = 1090, ay = 712, aw = 250, ah = 175
  b.axis(ax, ay, aw, ah, {
    xlabel: 'OD₆₀₀', ylabel: '细胞浓度',
    xticks: [[0.18, '0.2'], [0.5, '0.5'], [0.82, '0.8']],
    yticks: [[0.05, '低'], [0.5, '中'], [0.95, '高']],
  })
  // 线性区间底色（OD 0.3–0.8）
  b.rect(ax + 0.30 * aw, ay - ah, 0.50 * aw, ah, { fill: C.okL, fillOp: 0.45 })
  b.curve(ax, ay, aw, ah, [
    [0, 0], [0.15, 0.13], [0.3, 0.30], [0.5, 0.52], [0.65, 0.68], [0.8, 0.83], [0.9, 0.89], [1, 0.92],
  ], { stroke: C.acc, sw: 3 })
  b.ctext(ax + 0.55 * aw, ay - ah - 14, '线性区间 OD₆₀₀≈0.3–0.8', { size: 10.5, weight: 700, fill: C.ok })
  b.wtext(1080, 470, '先以计数法绘制标准曲线，再由吸光度查浓度：快速、可在线监测，但超出线性区间即偏离直线，且不辨死活。', { size: 10.5, fill: C.sub, maxW: 270, lh: 15 })

  // ============ 五、方法对照表 ============
  b.panel(30, 772, 1340, 208, { title: '五、各类生长测定方法对比' })
  b.table(60, 806, 1280, {
    headers: ['方法', '测定对象', '区分死活', '速度', '主要用途与局限'],
    colW: [150, 180, 110, 140, 700],
    rowH: 26,
    fontSize: 11,
    rows: [
      ['计数板 / 颗粒计数', '总菌数', '否', '快', '直接镜检或电子计数；活死兼计，要求菌浓较高'],
      ['平板菌落计数', '活菌数（CFU）', '是', '慢（需培养）', '经典可靠；仅计可培养菌，选每皿 30–300 菌落'],
      ['薄膜过滤', '活菌数（CFU）', '是', '慢（需培养）', '低菌浓大体积水样；孔径 0.22–0.45 μm 滤膜截留'],
      ['MPN 法', '活菌数（统计值）', '是', '慢（需培养）', '水质大肠菌群经典；95% 置信区间常横跨数倍'],
      ['比浊 / 生理指标法', '总菌量 / 生物量', '否', '快、可在线', 'OD₆₀₀ 0.3–0.8 线性；干重、总氮、ATP 生物发光适合丝状菌与快速卫生监测'],
    ],
  })
}

export default scene({
  title: '微生物生长的测定方法：直接与间接计数、CFU 与标准曲线',
  subtitle: '血球计数板 0.1 mm³、400 小格计总菌数；平板计数选每皿 30–300 菌落以 CFU 报告；MPN 以 3 个稀释度各 5 管泊松统计；比浊法仅在线性区间 OD₆₀₀ 0.3–0.8 可靠',
  draw,
})
