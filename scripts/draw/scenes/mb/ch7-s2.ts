// mb ch7-s2 乳糖操纵子的正调控与二度生长（39-c）
import { scene, C, B } from '../../lib'

// 与门真值表
const table = [
  ['−', '−', '极低', 'LacI 结合（负调控）'],
  ['+', '−', '极低', 'LacI + 无 CAP（双关）'],
  ['+', '+', '低', 'LacI 解除但 CAP 缺位'],
  ['−', '+', '高', '双重开启（正+负解除）'],
]

const draw = (b: B) => {
  // ================= 上左：CAP-cAMP 正调控的 DNA 线性图 =================
  b.panel(30, 132, 880, 300, { title: '一、CAP-cAMP 正调控：-61 位点与 RNAP 招募' })
  const dy = 330 // DNA 基线
  // lacI（旁侧）
  b.genes(64, dy, 100, [{ label: 'lacI', frac: 1, fill: C.proL, stroke: C.pro }])
  b.ctext(114, dy + 54, '阻遏蛋白基因', { size: 12.5, fill: C.mute })
  // 调控区 + 结构基因
  const regX = 210
  b.genes(regX, dy, 640, [
    { label: 'CAP 位点', frac: 0.13, fill: C.okL, stroke: C.ok },
    { label: 'lacP', frac: 0.09, fill: C.accL, stroke: C.acc },
    { label: 'lacO', frac: 0.09, fill: C.enzL, stroke: C.enz },
    { label: 'lacZ（β-半乳糖苷酶）', frac: 0.29, fill: C.dnaL, stroke: C.dna },
    { label: 'lacY（透性酶）', frac: 0.21, fill: C.dnaL, stroke: C.dna },
    { label: 'lacA', frac: 0.19, fill: C.dnaL, stroke: C.dna },
  ])
  // CAP 二聚体（结合 CAP 位点上方）
  const capX = regX + 640 * 0.065
  b.ctext(capX, dy - 96, 'cAMP', { size: 11, fill: C.rnaD })
  b.circle(capX - 34, dy - 78, 10, { fill: C.warnL, stroke: '#b45309', sw: 1.8 })
  b.circle(capX + 34, dy - 78, 10, { fill: C.warnL, stroke: '#b45309', sw: 1.8 })
  b.ellipse(capX, dy - 52, 60, 32, { fill: C.okL, stroke: C.ok, sw: 2.4 })
  b.ctext(capX, dy - 58, 'CAP 二聚体', { size: 15, weight: 700, fill: C.ok })
  b.ctext(capX, dy - 38, 'HTH 结合 DNA', { size: 11.5, fill: C.mute })
  // DNA 弯折标注（约 90°）
  b.path(`M${capX - 36},${dy - 14} q12,24 36,28`, { stroke: C.ok, sw: 2, dash: '4 4', marker: 'ok' })
  b.ctext(capX, dy - 12, '弯折≈90°', { size: 11.5, fill: C.ok })
  // RNAP（覆盖启动子/操纵基因）
  const rnapX = regX + 640 * (0.13 + 0.09 + 0.045)
  b.ellipse(rnapX, dy - 46, 64, 38, { fill: C.accL, stroke: C.acc, sw: 2.4 })
  b.ctext(rnapX, dy - 52, 'RNAP', { size: 16.5, weight: 700, fill: C.acc })
  b.ctext(rnapX, dy - 32, 'α-CTD 接触 CAP', { size: 11.5, fill: C.mute })
  b.arrow(capX + 58, dy - 60, rnapX - 54, dy - 46, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.ctext((capX + rnapX) / 2 + 40, dy - 82, '招募（正调控）', { size: 12.5, fill: C.ok })
  // 转录产物
  b.arrow(regX + 640 * 0.34, dy + 78, regX + 620, dy + 78, { stroke: C.rna, sw: 3, marker: 'rna' })
  b.text(regX + 640 * 0.34 + 8, dy + 64, '多顺反子 mRNA（Z·Y·A）', { size: 14, fill: C.rnaD })
  // 下游注释
  b.ctext(regX + 320, dy + 98, 'lacP 为弱启动子：无 CAP-cAMP 时开放复合物形成率低，转录寥寥', { size: 13, fill: C.mute })

  // ================= 上右：与门逻辑 =================
  b.panel(930, 132, 440, 300, { title: '二、「与门」：两个信号积分后输出' })
  // 输入 1：乳糖
  b.tag(1030, 196, '乳糖（异乳糖）', { fill: C.enzL, stroke: C.enz, size: 13.5, pad: 10, tfill: C.enzD })
  b.ctext(1030, 224, 'LacI 阻遏解除', { size: 11.5, fill: C.mute })
  b.line(1090, 196, 1106, 214, { stroke: C.enz, sw: 2 })
  // 输入 2：无葡萄糖
  b.tag(1030, 266, '无葡萄糖', { fill: C.okL, stroke: C.ok, size: 13.5, pad: 10, tfill: C.ok })
  b.ctext(1030, 294, 'cAMP 升高 → CAP 结合', { size: 11.5, fill: C.mute })
  b.line(1090, 266, 1106, 248, { stroke: C.ok, sw: 2 })
  // AND 门（D 形，右凸）
  b.path(`M1106,200 L1106,262 A32,31 0 0 1 1106,200 Z`, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.ctext(1128, 235, 'AND', { size: 13.5, weight: 700, fill: C.sub })
  b.arrow(1146, 231, 1190, 231, { stroke: C.bad, sw: 2.6, marker: 'bad' })
  b.tag(1258, 231, '高水平转录', { fill: C.badL, stroke: C.bad, size: 14, weight: 700, tfill: '#991b1b' })
  // 真值表
  const tx = 946, ty = 292
  b.rect(tx, ty, 408, 136, { fill: '#ffffff', stroke: C.line, sw: 1.2, rx: 6 })
  const cols = [66, 66, 80, 196]
  const heads = ['葡萄糖', '乳糖', '表达', '控制状态']
  let cx0 = tx
  heads.forEach((h, i) => {
    b.ctext(cx0 + cols[i] / 2, ty + 20, h, { size: 13.5, weight: 700, fill: C.sub })
    cx0 += cols[i]
  })
  b.line(tx + 6, ty + 30, tx + 402, ty + 30, { stroke: C.line, sw: 0.8 })
  table.forEach((row, r) => {
    const ry = ty + 46 + r * 22
    cx0 = tx
    row.forEach((cell, i) => {
      const emph = row[2] === '高'
      b.ctext(cx0 + cols[i] / 2, ry + 5, cell, {
        size: 13,
        fill: i === 2 ? (emph ? C.bad : C.mute) : C.ink,
        weight: i === 2 && emph ? 700 : 400,
      })
      cx0 += cols[i]
    })
    if (r < 3) b.line(tx + 6, ry + 11, tx + 402, ry + 11, { stroke: C.line, sw: 0.8 })
  })

  // ================= 下：二度生长曲线 =================
  b.panel(30, 452, 1340, 510, { title: '三、二度生长（diauxie）：葡萄糖 + 乳糖混合培养基中的时序编程' })
  const ax = 90, ay = 920          // 原点
  const axW = 780, axH = 340       // 绘图区
  // 坐标轴
  b.arrow(ax, ay, ax + axW + 30, ay, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(ax, ay, ax, ay - axH - 30, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(ax + axW / 2, ay + 36, '培养时间 →', { size: 15, fill: C.sub })
  b.text(ax + 10, ay - axH - 12, '细菌密度（OD）↑', { size: 14, fill: C.sub })
  // OD 曲线（两段指数 + 停顿平台）
  b.spline([[ax + 8, ay - 24], [ax + 90, ay - 60], [ax + 170, ay - 130], [ax + 230, ay - 208], [ax + 262, ay - 258], [ax + 274, ay - 272]], { stroke: C.dna, sw: 3.4 })
  b.spline([[ax + 274, ay - 272], [ax + 300, ay - 276], [ax + 322, ay - 275], [ax + 348, ay - 272]], { stroke: C.dna, sw: 3.4 })
  b.spline([[ax + 348, ay - 272], [ax + 420, ay - 240], [ax + 470, ay - 196], [ax + 520, ay - 140], [ax + 580, ay - 86], [ax + 640, ay - 52]], { stroke: C.dna, sw: 3.4 })
  // 葡萄糖浓度（虚线红）
  b.spline([[ax + 8, ay - 96], [ax + 120, ay - 92], [ax + 210, ay - 84], [ax + 250, ay - 70], [ax + 274, ay - 40], [ax + 282, ay - 14]], { stroke: C.bad, sw: 2.4, dash: '7 5' })
  // 乳糖浓度（虚线琥珀）
  b.spline([[ax + 8, ay - 96], [ax + 180, ay - 94], [ax + 300, ay - 90], [ax + 380, ay - 76], [ax + 470, ay - 52], [ax + 560, ay - 24], [ax + 620, ay - 10]], { stroke: C.rna, sw: 2.4, dash: '7 5' })
  // cAMP 水平（点线绿）
  b.spline([[ax + 8, ay - 26], [ax + 150, ay - 30], [ax + 250, ay - 32], [ax + 286, ay - 118], [ax + 340, ay - 128], [ax + 470, ay - 122], [ax + 620, ay - 118]], { stroke: C.ok, sw: 2.2, dash: '2 6' })
  // 阶段分隔与标注
  b.line(ax + 282, ay - 300, ax + 282, ay, { stroke: C.faint, sw: 1.4, dash: '6 6' })
  b.line(ax + 348, ay - 300, ax + 348, ay, { stroke: C.faint, sw: 1.4, dash: '6 6' })
  b.tag(205, ay - 322, '第一相：优先利用葡萄糖', { fill: C.badL, stroke: C.bad, size: 13.5, tfill: '#991b1b', pad: 12 })
  b.tag(405, ay - 322, '停顿期', { fill: C.warnL, stroke: '#b45309', size: 13, tfill: C.rnaD, pad: 10 })
  b.tag(560, ay - 322, '第二相：切换利用乳糖', { fill: C.rnaL, stroke: C.rna, size: 13.5, tfill: C.rnaD, pad: 12 })
  b.ctext(ax + 315, ay + 20, '葡萄糖耗尽', { size: 12.5, fill: C.mute })
  // 图例（面板顶部右侧）
  b.legend(950, 486, [['细菌密度', C.dna], ['葡萄糖', C.bad], ['乳糖', C.rna], ['cAMP', C.ok]], { size: 14 })
  // 右侧解读
  const nx = 930
  b.rect(nx, 508, 410, 424, { fill: C.panel, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(nx + 18, 542, '停顿期＝诱导期', { size: 17, weight: 700, fill: C.ink })
  const steps = [
    '① 葡萄糖耗尽 → PTS 解除对腺苷酸环化酶的抑制',
    '② cAMP 升高 → CAP-cAMP 结合 -61 位点',
    '③ 残留乳糖 → 异乳糖使 LacI 解离',
    '④ lacZ/Y/A 诱导合成 → 第二次指数生长',
  ]
  steps.forEach((s, i) => {
    b.text(nx + 18, 574 + i * 30, s, { size: 13.5, fill: C.sub })
  })
  b.line(nx + 18, 708, nx + 392, 708, { stroke: C.line, sw: 1 })
  b.text(nx + 18, 738, 'Monod 最早描述：', { size: 14.5, weight: 700, fill: C.ink })
  b.wtext(nx + 18, 764, '碳源利用的优先级编程——优先使用最经济的碳源，保证细胞的能源逻辑。', { size: 13.5, fill: C.sub, maxW: 370 })
  b.wtext(nx + 18, 826, 'CAP 为全局调节因子：结合位点见于 100+ 个基因的调控区，与不同局部调节因子组合成分层网络；乳糖操纵子因此成为「组合逻辑调控」的教科书范式。', { size: 13.5, fill: C.sub, maxW: 370 })
}

export default scene({
  title: '乳糖操纵子的正调控与二度生长',
  subtitle: 'CAP-cAMP 结合 -61 位点弯折 DNA 并招募 RNAP——「有乳糖 + 无葡萄糖」的与门条件与碳源时序编程',
  draw,
})
