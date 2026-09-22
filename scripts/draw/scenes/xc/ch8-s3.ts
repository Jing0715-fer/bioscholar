// xc ch8-s3 密度修饰与非晶体对称平均（Task 4-d）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、溶剂平坦化循环 ============
  b.panel(30, 132, 660, 430, { title: '一、溶剂平坦化（Wang 1985）：锁死一半空间的自由度' })
  const box = (x: number, y: number, w: number, h: number, t: string, s: string, stroke: string, fill: string) => {
    b.rect(x, y, w, h, { fill, stroke, sw: 1.7, rx: 8 })
    b.wtext(x + 14, y + 21, t, { size: 10.5, weight: 700, fill: C.ink, maxW: w - 24, lh: 14 })
    b.wtext(x + 14, y + h - 14, s, { size: 9.5, fill: C.sub, maxW: w - 24, lh: 13 })
  }
  box(56, 186, 150, 62, '① 综合出图', '以当前相位计算密度图', C.acc, C.accL)
  box(216, 186, 142, 62, '② 识别边界', '球平均平滑（半径 8–10 Å）后取阈值分割', C.acc, C.accL)
  box(216, 272, 142, 62, '③ 溶剂区改常数', '水约 0.33 e/Å^{3}，绝无原子级起伏', C.dna, C.dnaL)
  box(56, 272, 150, 62, '④ 反变换取相位', '反傅里叶变换取回新相位', C.dna, C.dnaL)
  box(56, 358, 302, 56, '⑤ 加权组合再循环', '新相位与原相位按概率组合，迭代数轮', C.pro, C.proL)
  b.arrow(206, 217, 214, 217, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(287, 248, 287, 270, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(214, 303, 206, 303, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.arrow(131, 334, 131, 356, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.path('M 362,386 L 380,386 L 380,217 L 362,217', { fill: 'none', stroke: C.pro, sw: 1.8, marker: 'pro' })
  // FOM 曲线
  const fx = 400, fy = 400, fw = 250, fh = 180
  b.axis(fx, fy, fw, fh, {
    title: 'FOM 随循环爬升', xlabel: '循环轮数', grid: false,
    xticks: [[0, '0'], [0.6, '30'], [1, '50']],
    yticks: [[0, '0'], [0.5, '0.35'], [1, '0.75']],
  })
  const fom: [number, number][] = [[0, 0.18], [0.08, 0.42], [0.2, 0.6], [0.35, 0.72], [0.5, 0.78], [0.65, 0.8], [0.8, 0.8], [1, 0.8]]
  b.curve(fx, fy, fw, fh, fom, { stroke: C.dna, sw: 2.6, smooth: true })
  b.ctext(fx + fw * 0.32, fy - fh * 0.86, '0.5 升到 0.7 以上', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(fx + fw * 0.72, fy - fh * 0.5, '前 20–50 轮到达平台', { size: 9.5, fill: C.mute })
  b.wtext(56, 448, '先验来自马修斯系数（第 2 章）：蛋白晶体 40%–60% 的体积是溶剂。把这一半的密度自由度全部「锁死」，等效于向相位注入强约束——相位误差每循环削去一截。MR 相位同样可喂进这口循环，「MR 相位加溶剂平坦化」是低分辨率结构的标准起手式；若 FOM 不升反降，先查掩膜与溶剂占比，再查相位组合权重。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })

  // ============ 二、直方图匹配 ============
  b.panel(710, 132, 660, 430, { title: '二、直方图匹配：另一半空间的细分布先验' })
  const hist = (x0: number, y0: number, w: number, h: number, vals: number[], color: string, stroke: string, label: string, sub: string) => {
    b.rect(x0, y0 - h, w, h, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
    const bw = (w - 20) / vals.length
    const mx = Math.max(...vals) * 1.1
    vals.forEach((v, i) => {
      b.rect(x0 + 10 + i * bw, y0 - (v / mx) * (h - 24), bw - 5, (v / mx) * (h - 24), { fill: color, fillOp: 0.7, stroke, sw: 1.2, rx: 2 })
    })
    b.ctext(x0 + w / 2, y0 + 20, label, { size: 10.5, weight: 700, fill: C.ink })
    b.ctext(x0 + w / 2, y0 + 38, sub, { size: 9.5, fill: C.mute })
  }
  hist(730, 330, 250, 170, [5, 9, 13, 8, 4, 2.2, 1.4, 0.8, 0.5, 0.4], C.warnL, C.warn, '实测图（歪斜）', '误差相位带来的畸变')
  b.arrow(990, 250, 1030, 250, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(1010, 232, '拉到标准型', { size: 10, weight: 700, fill: C.sub })
  hist(1050, 330, 290, 170, [3, 7, 12, 11, 7, 4, 2.4, 1.4, 0.9, 0.6], C.okL, C.ok, '统计标准型（按分辨率分档）', '该高的抬高、该低的压低')
  b.wtext(730, 400, '蛋白质内部电子密度的统计分布高度保守：给定分辨率与平均密度，蛋白区密度直方图（各密度值占据的体素比例）几乎不随具体蛋白变化（Lunin、Zhang 等 1988–1993 年发展）。直方图匹配把实测图蛋白区的直方图强行拉到统计标准型，等价于逐点重加权。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 462, '与溶剂平坦化互补：后者约束「一半空间」的粗性质，前者约束「另一半空间」的细分布；两者叠加再加上对负密度与溶剂区统计的双向夹击，构成现代密度修饰的标准套餐（DM、PARROT、SHELXE 各有实现）。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 524, '纪律：标准直方图按分辨率分档存表——1.5 Å 的蛋白与 3 Å 的蛋白密度分布明显不同（高角信息使分布尾部变宽），修饰程序必须选用与数据同档的先验，套错档等于先验造假。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 三、NCS 平均 ============
  b.panel(30, 572, 660, 390, { title: '三、NCS 平均：拷贝互证，降噪按 1/√n' })
  // 三个含噪拷贝
  const noisy = (cx: number, cy: number) => {
    b.ellipse(cx, cy, 44, 30, { fill: C.panelB, stroke: C.sub, sw: 1.5 })
    let sd = 31
    const rnd = () => { sd = (sd * 9301 + 49297) % 233280; return sd / 233280 }
    for (let i = 0; i < 16; i++) {
      const a = i * 0.39 + rnd() * 0.3, r = 10 + rnd() * 28
      b.circle(cx + r * Math.cos(a), cy + r * Math.sin(a) * 0.68, 2.6, { fill: C.mute, fillOp: 0.7 })
    }
  }
  noisy(110, 646); noisy(110, 746); noisy(110, 846)
  b.ctext(110, 626, '拷贝 1', { size: 9.5, fill: C.mute })
  b.ctext(110, 726, '拷贝 2', { size: 9.5, fill: C.mute })
  b.ctext(110, 826, '拷贝 3', { size: 9.5, fill: C.mute })
  b.arrow(166, 746, 208, 746, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(187, 728, '叠合后逐点平均', { size: 9.5, weight: 700, fill: C.sub })
  // 干净的平均拷贝
  b.ellipse(286, 746, 52, 36, { fill: C.dnaL, stroke: C.dna, sw: 2.4 })
  for (let i = 0; i < 14; i++) {
    const a = i * 0.449, r = 12 + (i % 4) * 9
    b.circle(286 + r * Math.cos(a), 746 + r * Math.sin(a) * 0.69, 3.2, { fill: C.dna, fillOp: 0.8 })
  }
  b.ctext(286, 806, '平均后的干净拷贝', { size: 10, weight: 700, fill: C.dnaD })
  b.wtext(60, 856, '机理两层：拷贝间信号相关、噪声独立——真实密度在各拷贝里相同（平均后不减），误差相位带来的畸变各不相同（平均后按 1/√n 压缩）；叠合矩阵本身又不断被精修，等效于持续施加结构约束。', { size: 10.5, fill: C.sub, maxW: 360, lh: 15 })
  // 1/√n 数字
  const nTag = (y: number, n: string, v: string) => {
    b.rect(446, y, 84, 34, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 6 })
    b.ctext(488, y + 15, n, { size: 10.5, weight: 700, fill: C.ink })
    b.ctext(488, y + 28, v, { size: 10, weight: 700, fill: C.accD })
  }
  b.ctext(488, 626, '噪声残留 1/√n', { size: 10.5, weight: 700, fill: C.sub })
  nTag(638, 'n = 2', '0.71')
  nTag(678, 'n = 5', '0.45')
  nTag(718, 'n = 60', '0.13')
  // 病毒二十面体
  b.circle(600, 760, 52, { fill: C.proL, fillOp: 0.6, stroke: C.pro, sw: 2.2 })
  for (let i = 0; i < 5; i++) {
    const a = -Math.PI / 2 + i * 2 * Math.PI / 5
    b.circle(600 + 36 * Math.cos(a), 760 + 36 * Math.sin(a), 10, { fill: C.pro, fillOp: 0.75, stroke: C.proD, sw: 1.4 })
    b.line(600 + 36 * Math.cos(a), 760 + 36 * Math.sin(a), 600 + 36 * Math.cos(a + 2 * Math.PI / 5), 760 + 36 * Math.sin(a + 2 * Math.PI / 5), { stroke: C.pro, sw: 1.2, opacity: 0.6 })
  }
  b.ctext(600, 700, '球形病毒：二十面体', { size: 10, weight: 700, fill: C.proD })
  b.wtext(446, 832, '不对称单元常含 60 个二十面体等效拷贝——「60 倍平均」的出处。1985 年前后人鼻病毒与脊髓灰质炎病毒等首批球形病毒结构，即以五重及更高阶平均从中低分辨率数据逼出可读图。要害在掩膜与叠合：拷贝边界分割错或叠合矩阵不精，平均反而抹平真实差异（柔性域须分区处理）。', { size: 10, fill: C.sub, maxW: 236, lh: 14 })

  // ============ 四、相位组合、延伸与评估 ============
  b.panel(710, 572, 660, 390, { title: '四、SIGMAA 组合、相位延伸与效果评估' })
  // SIGMAA 概率曲线
  const sx = 740, sy = 770, sw = 300, sh = 140
  b.axis(sx, sy, sw, sh, {
    title: 'SIGMAA：概率密度相乘（Read 1986）', xlabel: '相位 φ（0–360°）', grid: false,
    xticks: [[0, '0°'], [0.5, '180°'], [1, '360°']],
  })
  const g = (x: number, s2: number) => Math.exp(-Math.pow((x - 0.5) / s2, 2))
  const c1: [number, number][] = [], c2: [number, number][] = [], c3: [number, number][] = [], cp: [number, number][] = []
  for (let i = 0; i <= 60; i++) {
    const x = i / 60
    const v1 = g(x, 0.17), v2 = g(x, 0.09), v3 = g(x, 0.05)
    c1.push([x, v1 * 0.55]); c2.push([x, v2 * 0.75]); c3.push([x, v3])
    const prod = v1 * v2 * v3
    cp.push([x, prod / Math.max(...[v1 * v2 * v3])])
  }
  b.curve(sx, sy, sw, sh, c1, { stroke: C.faint, sw: 1.6 })
  b.curve(sx, sy, sw, sh, c2, { stroke: C.mute, sw: 1.6, dash: '5 4' })
  b.curve(sx, sy, sw, sh, c3, { stroke: C.acc, sw: 2 })
  b.curve(sx, sy, sw, sh, cp, { stroke: C.dna, sw: 3 })
  b.legend(sx + 12, sy - sh + 18, [['实验相位（宽）', C.faint], ['模型相位', C.mute], ['修饰相位', C.acc], ['组合（尖）', C.dna]], { size: 9, gap: 8 })
  b.wtext(1064, 626, '多来源相位概率加权组合：每个反射的每种来源给出冯米泽斯型相位分布（宽度由 FOM 表征），组合即按概率密度相乘——可靠的来源给窄分布、主导组合，可疑来源自动靠边。典型三票：实验相位加 MR 模型相位加密度修饰相位。', { size: 10, fill: C.sub, maxW: 286, lh: 14.5 })
  // 相位延伸阶梯
  b.stairs(1064, 760, 286, 120, ['4 Å 起家', '3.5 Å', '3 Å', '2.5 Å', '2 Å 全量'], { fill: C.accL, stroke: C.acc, size: 10 })
  b.ctext(1207, 748, '相位延伸：逐壳层放宽（每轮一个壳层或约 5%）', { size: 10, weight: 700, fill: C.accD })
  b.wtext(730, 800, '「先易后难」的爬山路线：从低分辨率起家（只用 4–3.5 Å 的反射，此处相位最可靠），逐壳层放宽到 2 Å 全量数据，每步用刚改善的相位做一轮修饰——常把名义上噪声主导的高角数据驯服成可用相位。步子迈大，高角噪声会反客为主把相位带偏。', { size: 10, fill: C.sub, maxW: 616, lh: 14.5 })
  b.wtext(730, 872, '评估三件套：FOM 提升（全局与逐壳层）、图的可追踪性（自动追踪程序当「可读性计」用）、溶剂区平坦度。最诚实的又是可追踪性——FOM 可以被错误先验抬高，图却骗不了自动追踪的主链覆盖率。警告：先验错了会注入系统偏差，「修饰后图变漂亮」不等于「图变正确」——口诀：修饰改相位，验证靠密度，收敛见真章。', { size: 10, fill: C.mute, maxW: 616, lh: 14.5 })
}

export default scene({
  title: '密度修饰与非晶体对称平均',
  subtitle: '溶剂占晶体体积 40–60%：溶剂平坦化把 FOM 从 0.5 提到 0.7 以上；直方图匹配约束蛋白区分布；NCS 平均按 1/√n 降噪、病毒达 60 倍；SIGMAA 组合相位、延伸逐壳层推到 2 Å',
  draw,
})
