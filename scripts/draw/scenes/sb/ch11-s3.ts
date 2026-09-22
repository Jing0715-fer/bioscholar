// sb ch11-s3 结构计算与系综评估（Task SB-4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、模拟退火流程 ============
  b.panel(30, 132, 1340, 270, { title: '一、模拟退火：扭转角空间的三阶段折叠搜索' })
  const stages: Array<[string, string, string]> = [
    ['随机初始构象', '扭转角随机化', C.panelB],
    ['高温随机化', '虚拟 8000–10000 K', C.badL],
    ['慢冷', '数十步降至室温量级', C.warnL],
    ['能量最小化', '抹平残余应力', C.accL],
    ['水盒子精修', 'ARIA / Xplor-NIH', C.okL],
  ]
  stages.forEach(([t, s, f], i) => {
    const x = 55 + i * 245
    b.rect(x, 168, 220, 54, { fill: f, stroke: C.line, sw: 1.5, rx: 8 })
    b.ctext(x + 110, 190, t, { size: 13, weight: 700, fill: C.ink })
    b.ctext(x + 110, 210, s, { size: 10.5, fill: C.sub })
    if (i < 4) b.arrow(x + 224, 195, x + 241, 195, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  // 温度日程曲线
  const tx0 = 90, tx1 = 620, tyB = 372, tyT = 252
  const vx = (t: number) => tx0 + t * (tx1 - tx0)
  const vy = (v: number) => tyB - ((Math.log10(Math.max(v, 100)) - 2) / 2) * (tyB - tyT)
  let d = `M${tx0},${tyB}`
  for (let t = 0; t <= 1.0001; t += 0.02) {
    const T = t < 0.18 ? 9000 : 300 + 8700 * Math.exp(-(t - 0.18) / 0.15)
    d += ` L${vx(t).toFixed(1)},${vy(T).toFixed(1)}`
  }
  d += ` L${tx1},${tyB} Z`
  b.path(d, { fill: C.warnL, fillOp: 0.5, stroke: 'none' })
  let d2 = ''
  for (let t = 0; t <= 1.0001; t += 0.02) {
    const T = t < 0.18 ? 9000 : 300 + 8700 * Math.exp(-(t - 0.18) / 0.15)
    d2 += `${t === 0 ? 'M' : 'L'}${vx(t).toFixed(1)},${vy(T).toFixed(1)} `
  }
  b.path(d2, { fill: 'none', stroke: C.warn, sw: 2.6 })
  b.line(tx0, tyB, tx0, tyT, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.line(tx0, tyB, tx1 + 12, tyB, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(tx0 - 34, (tyT + tyB) / 2, '虚拟温度（K）', { size: 10, weight: 600, fill: C.sub, rotate: -90 })
  b.ctext((tx0 + tx1) / 2, tyB + 20, '退火进度', { size: 10, weight: 600, fill: C.sub })
  b.ctext(tx0 + 55, vy(9000) - 10, '9000', { size: 9.5, fill: C.warnD, weight: 700 })
  b.ctext(tx1 - 14, vy(300) - 10, '300', { size: 9.5, fill: C.mute })
  b.ctext(140, 244, '高温打散', { size: 10, weight: 700, fill: C.badD })
  b.ctext(330, 244, '慢冷收紧', { size: 10, weight: 700, fill: C.warnD })
  b.ctext(545, 244, '最小化收尾', { size: 10, weight: 700, fill: C.accD })
  // 右侧要点
  b.wtext(680, 262, '扭转角空间是关键加速：只在 φ/ψ 二面角上积分、键长键角刚性冻结——自由度骤降两个数量级，一次完整退火在当代工作站约数分钟。', { size: 10.5, fill: C.sub, maxW: 640, lh: 16 })
  b.wtext(680, 312, '高温阶段约束力被故意压低，唯一任务是动起来；慢冷把权重逐步交还给 NOE 与二面角约束，链在「听得见」的约束声里折叠就位。', { size: 10.5, fill: C.sub, maxW: 640, lh: 16 })
  b.wtext(680, 362, '同一套约束独立重复约 100 次：收敛到相近构象，才说明数据真的锁定了结构。', { size: 10.5, fill: C.sub, maxW: 640, lh: 16 })

  // ============ 二、自动指认循环 ============
  b.panel(30, 422, 660, 250, { title: '二、CYANA 与 CANDID：自动指认的纠错循环' })
  b.tag(360, 466, '① 模糊指认起步', { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD, pad: 10 })
  b.tag(545, 523, '② 扭转角算结构', { fill: C.proL, stroke: C.pro, size: 11.5, weight: 700, tfill: C.proD, pad: 10 })
  b.tag(360, 580, '③ 重评每条 NOE 归属', { fill: C.rnaL, stroke: C.rna, size: 11.5, weight: 700, tfill: C.rnaD, pad: 10 })
  b.tag(175, 523, '④ 网络锚定筛选', { fill: C.okL, stroke: C.ok, size: 11.5, weight: 700, tfill: C.okD, pad: 10 })
  b.ctext(360, 527, 'CANDID 迭代', { size: 12, weight: 700, fill: C.ink })
  b.ctext(360, 545, '约 7–8 轮', { size: 11, fill: C.mute })
  b.path('M445,470 Q505,470 545,497', { fill: 'none', stroke: C.sub, sw: 2, marker: 'ink' })
  b.path('M545,549 Q505,580 445,580', { fill: 'none', stroke: C.sub, sw: 2, marker: 'ink' })
  b.path('M275,580 Q215,580 175,549', { fill: 'none', stroke: C.sub, sw: 2, marker: 'ink' })
  b.path('M175,497 Q215,470 275,470', { fill: 'none', stroke: C.sub, sw: 2, marker: 'ink' })
  b.wtext(50, 622, 'CYANA（Güntert 等 1997 年，时名 DYANA）以网络锚定只接受被多条约束互相印证的指认；Xplor-NIH 与 ARIA（Linge 等 2001）同路：与结构自洽的峰保留、违约者剔除。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(50, 654, '自动指认把数周的人肉配峰压到数天；正确率九成以上，剩下一成交还人眼抽查。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、系综与违约检查 ============
  b.panel(710, 422, 660, 250, { title: '三、系综叠合与约束违约检查' })
  b.wtext(730, 460, '独立计算约 100 个构象，按总能量与违约数择优 10–20 个成系综存入 PDB。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  // 系综叠合（左）
  for (const s of [-2.5, -1.5, -0.5, 0.5, 1.5, 2.5]) {
    b.spline([[742 + s * 1.5, 512], [800 + s * 2, 488], [858 + s * 2, 492], [900 + s * 2.5, 516], [916 + s * 4, 556], [890 + s * 10, 594], [846 + s * 13, 606]], { stroke: C.pro, sw: 1.8, opacity: 0.72 })
  }
  b.rect(735, 486, 200, 92, { fill: 'none', stroke: C.acc, sw: 1.4, dash: '5 4' })
  b.ctext(835, 590, '有序区：叠合紧密', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(905, 630, '柔性环/末端：弥散即柔性', { size: 10.5, weight: 700, fill: C.pro })
  b.wtext(730, 652, '骨架 RMSD 小于 0.5 Å 为好；0.5–1.0 中等；大于 1 常见于柔性区外扩。', { size: 10, fill: C.sub, maxW: 330, lh: 14 })
  // 违约散点（右）
  const sx0 = 1060, syB = 610, sw2 = 270, sh2 = 112
  b.ctext(sx0 + sw2 / 2, 470, 'NOE 距离违约检查', { size: 11.5, weight: 700, fill: C.ink })
  b.line(sx0, syB, sx0, syB - sh2, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.line(sx0, syB, sx0 + sw2, syB, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  const vyv = (v: number) => syB - (v / 0.65) * sh2
  b.line(sx0, vyv(0.3), sx0 + sw2, vyv(0.3), { stroke: C.bad, sw: 1.4, dash: '5 4' })
  b.ctext(sx0 + sw2 - 6, vyv(0.3) - 6, '0.3 Å 阈值', { size: 9.5, weight: 700, fill: C.bad })
  const viol: Array<[number, number, boolean]> = [
    [1, 0.02], [2, 0.05], [3, 0.01], [4, 0.08], [5, 0.03], [6, 0.11], [7, 0.02], [8, 0.06],
    [9, 0.04], [10, 0.19], [11, 0.02], [12, 0.07], [13, 0.03], [14, 0.05], [15, 0.21], [16, 0.01],
    [17, 0.04], [18, 0.09], [19, 0.02], [20, 0.06], [21, 0.03], [22, 0.55, true],
  ]
  for (const [i, v, bad] of viol) {
    const pxx = sx0 + (i / 23) * sw2
    if (bad) {
      b.circle(pxx, vyv(v), 5.5, { fill: C.bad })
      b.ctext(pxx, vyv(v) - 12, '0.55 Å 违约', { size: 9.5, weight: 700, fill: C.bad })
    } else b.circle(pxx, vyv(v), 3.6, { fill: C.pro, fillOp: 0.8, stroke: 'none' })
  }
  b.ctext(sx0 + sw2 / 2, syB + 18, '距离约束（按编号排序）', { size: 9.5, fill: C.mute })
  b.wtext(1050, 652, '通行标准：大于 0.3–0.5 Å 的违约为零、违约均方根约 0.05 Å；Ramachandran 优势加许可区大于九成。', { size: 10, fill: C.sub, maxW: 300, lh: 14 })

  // ============ 四、NMR 与晶体学对照 ============
  b.panel(30, 692, 1340, 208, { title: '四、NMR 与 X 射线晶体学：输出特性对照' })
  b.table(50, 718, 1300, {
    headers: ['维度', 'NMR', 'X 射线晶体学'],
    colW: [180, 560, 560],
    rowH: 22,
    fontSize: 10.5,
    rows: [
      ['输出形式', '10–20 个构象的系综（约 100 个中择优）', '单一坐标加一列 B 因子'],
      ['氢原子', '显式可见（约束多来自质子）', '常规不可见，约 1 Å 内方现形'],
      ['局部精度', '约埃级、长程较弱', '高分辨率下可达 0.1 nm 级'],
      ['内在无序区', '天然表达为弥散系综', '常无密度、被截断或缺失'],
      ['环境效应', '溶液中测定、无晶格包装伪影', '晶格接触可影响构象'],
      ['动力学', '系综弥散即柔性信息', 'B 因子间接提示'],
    ],
  })
  b.ctext(700, 934, 'RMSD 度精度（系综互相像不像）而不度准确度（像不像真的）——RDC 回拟合与独立交叉验证才是准确度的试金石', { size: 11, weight: 600, fill: C.mute })
}

export default scene({
  title: '结构计算与系综评估：模拟退火、自动指认与质量标准',
  subtitle: '扭转角空间自由度降两个数量级；8000–10000 K 高温随机化；约 100 构象择优 10–20 入 PDB；违约大于 0.3–0.5 Å 清零；RMSD 小于 0.5 Å',
  draw,
})
