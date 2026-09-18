// vi ch11-s1 传播途径与感染动力学（39-j 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、传播途径总览 ============
  b.panel(30, 132, 660, 430, { title: '一、传播途径总览：四条主干＋虫媒' })
  const routes: [string, string, string, string][] = [
    ['呼吸道', '流感 · SARS-CoV-2 · 麻疹', '飞沫与气溶胶，经鼻腔入呼吸道'],
    ['粪-口', '脊灰 · 诺如 · 甲肝', '粪便污染水与食物，耐环境'],
    ['血液与性', 'HIV · HBV · HCV', '血液、黏膜接触传播'],
    ['垂直传播', 'HBV · HCMV · 风疹（寨卡与小头畸形相关）', '宫内、产道与母乳'],
    ['虫媒', '登革 · 乙脑', '蚊蜱叮咬注入'],
  ]
  routes.forEach(([nm, vs, po], i) => {
    const ry = 196 + i * 62
    b.rect(50, ry, 118, 52, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8, fillOp: 0.65 })
    b.ctext(109, ry + 31, nm, { size: 12.5, weight: 700, fill: C.accD })
    b.text(184, ry + 22, vs, { size: 10.5, weight: 700, fill: C.sub })
    b.text(184, ry + 41, po, { size: 9.5, fill: C.mute })
  })
  b.wtext(50, 522, '排出门户与环境耐受性决定传播效率——同一病毒可兼走多条途径。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、R0 与屏障阈值 ============
  b.panel(710, 132, 660, 430, { title: '二、基本传染数 R0 与屏障阈值' })
  b.axis(760, 380, 300, 220, {
    xticks: [], yticks: [[0, '0'], [0.5, '10'], [1, '20']],
  })
  b.bars(790, 380, 240, 220, [15, 2], { labels: ['麻疹', '1918 大流感'], vlabels: ['12–18', '1.5–2.5'], fill: C.badL, stroke: C.bad, max: 20 })
  b.rect(1090, 210, 260, 96, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 9 })
  b.ctext(1220, 236, 'Rt ＝ R0 × 易感比例', { size: 13.5, weight: 700, fill: C.ink })
  b.ctext(1220, 262, '屏障阈值 ＝ 1 − 1/R0', { size: 13.5, weight: 700, fill: C.accD })
  b.ctext(1220, 288, '麻疹 ≈ 92%–94% · 1918 流感 ≈ 三到六成', { size: 9.5, fill: C.mute })
  b.wtext(726, 430, '1918 年大流感 R0 仅约 1.5–2.5、屏障阈值只约三到六成——但在无抗生素、无疫苗的年代仍造成约五亿人感染、约五千万人死亡：R0 度量传播能力，绝非严重程度。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(726, 486, '传代间隔决定疫情倍增速度：流感约 2–3 日，一旬即可翻数番。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 三、呼吸道：飞沫、气溶胶与超扩散 ============
  b.panel(30, 586, 660, 394, { title: '三、呼吸道传播：粒径分工与超扩散' })
  // 左：飞沫与气溶胶
  b.circle(120, 730, 14, { fill: 'none', stroke: C.sub, sw: 2 })       // 头
  b.rect(106, 748, 28, 40, { fill: 'none', stroke: C.sub, sw: 2, rx: 6 }) // 身
  for (let i = 0; i < 5; i++) {
    b.circle(160 + i * 16, 716 + i * 14, 4.4 - i * 0.4, { fill: C.dna })
  }
  b.ctext(208, 820, '飞沫：≥5 μm，1–2 米内沉降', { size: 9.5, weight: 700, fill: C.dnaD })
  for (let i = 0; i < 7; i++) {
    b.circle(250 + i * 24, 660 + (i % 3) * 16, 2.4, { fill: C.bad })
  }
  b.ctext(330, 706, '气溶胶：＜5 μm，悬浮数小时、随气流远扩散', { size: 9.5, weight: 700, fill: C.bad })
  b.wtext(50, 848, '传统以直径 5 μm 为界区分飞沫与气溶胶；2021 年前后，世界卫生组织与美国疾控机构正式确认 SARS-CoV-2 可经气溶胶传播，终结数十年争论。', { size: 10.5, fill: C.sub, maxW: 330, lh: 15 })
  // 右：超扩散分布
  b.ctext(560, 640, '继发病例数分布（高度偏态）', { size: 11, weight: 700, fill: C.ink })
  b.bars(400, 830, 260, 160, [14, 5, 2, 1, 3, 8], { labels: ['0', '1', '2', '3', '4–9', '≥10'], fill: C.accL, stroke: C.acc, max: 16 })
  b.tag(590, 872, '超扩散事件', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: C.bad, pad: 6 })
  b.wtext(380, 916, 'SARS 2003：教堂唱诗班、医院、宿舍与邮轮等封闭拥挤场所的少数感染者贡献不成比例的病例。', { size: 10, fill: C.mute, maxW: 280, lh: 14 })

  // ============ 四、病毒载量时程与传播窗口 ============
  b.panel(710, 586, 660, 394, { title: '四、载量时程：同是冠状病毒，防控难度迥异' })
  const ax = 766, ay = 850, aw = 500, ah = 170
  b.axis(ax, ay, aw, ah, {
    xticks: [[0, '-5'], [0.25, '0'], [0.5, '+5'], [0.75, '+10'], [1, '+15（天）']],
    yticks: [[0, '低'], [1, '高']], grid: true,
  })
  b.curve(ax, ay, aw, ah, [[0.02, 0.05], [0.12, 0.35], [0.25, 0.95], [0.4, 0.6], [0.6, 0.3], [1, 0.1]], { stroke: C.acc, sw: 2.8, smooth: true })
  b.curve(ax, ay, aw, ah, [[0.05, 0.02], [0.3, 0.06], [0.45, 0.2], [0.62, 0.8], [0.75, 0.95], [0.9, 0.5], [1, 0.2]], { stroke: C.bad, sw: 2.8, smooth: true })
  b.line(ax + 0.25 * aw, ay, ax + 0.25 * aw, ay - ah, { stroke: C.sub, sw: 1.6, dash: '5 4' })
  b.ctext(ax + 0.25 * aw, ay - ah - 10, '症状出现', { size: 10, weight: 700, fill: C.sub })
  b.legend(726, 646, [['SARS-CoV-2（峰值在症状前后）', C.acc], ['SARS-CoV（峰值在发病后约第十日）', C.bad]], { size: 10 })
  b.wtext(726, 892, '纵轴为病毒载量。SARS-CoV-2 前症状传播使隔离难以奏效；SARS-CoV 载量高峰时患者多已就医隔离——隔离能奏效而前症状传播罕见。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(726, 928, 'HIV 急性期高载量贡献不成比例的传播；麻疹出疹前后各四日传染；抗原检测宜用于载量高峰期。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })
}

export default scene({
  title: '传播途径与感染动力学：途径、R0 与载量时程',
  subtitle: '呼吸道／粪-口／血液性／垂直四主干＋虫媒；麻疹 R0 12–18、1918 大流感 1.5–2.5（约五亿感染）；SARS-CoV-2 气溶胶传播 2021 年确认；载量峰值错位决定防控难度',
  draw,
})
