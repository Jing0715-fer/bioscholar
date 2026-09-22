// em ch8-s2 单颗粒数据处理流水线（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、主流水线 ============
  b.panel(30, 132, 1340, 330, { title: '一、从电影到结构：主流流水线（软件标注）' })
  const node = (x: number, y: number, t: string, sw: string, sub: string, fill: string, stroke: string, tfill: string) => {
    b.rect(x, y, 215, 85, { fill, stroke, sw: 1.8, rx: 8 })
    b.ctext(x + 107, y + 24, t, { size: 12.5, weight: 700, fill: tfill })
    b.ctext(x + 107, y + 46, sw, { size: 10.5, weight: 600, fill: C.accD })
    b.ctext(x + 107, y + 66, sub, { size: 10, fill: C.mute })
  }
  node(70, 195, '电影帧序列', '直接探测 50–60 帧', '每帧约 1 e^{-}/Å^{2}', C.panelB, C.sub, C.sub)
  node(330, 195, '运动校正 + 剂量加权', 'MotionCor2 / RELION', '全局 + 局部轨迹拟合', C.accL, C.acc, C.accD)
  node(590, 195, 'CTF 拟合', 'CTFFIND4 / GCTF', '欠焦·像散·拟合极限', C.accL, C.acc, C.accD)
  node(850, 195, '颗粒挑选', 'LoG / Topaz / cryolo', '微图 50–300 个颗粒', C.dnaL, C.dna, C.dnaD)
  node(1110, 195, '2D 分类', 'RELION / cryoSPARC', '先聚类后平均，SNR ∝ √N', C.proL, C.pro, C.proD)
  b.arrow(290, 237, 325, 237, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(550, 237, 585, 237, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(810, 237, 845, 237, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(1070, 237, 1105, 237, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(1217, 284, 1217, 325, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  node(1110, 330, '初始模型', 'cryoSPARC ab initio', 'SGD + 频率爬升', C.proL, C.pro, C.proD)
  node(850, 330, '3D 分类', 'RELION（T = 4）', '拆解构象异质性', C.enzL, C.enz, C.enzD)
  node(590, 330, '金标准精修', 'RELION / cryoSPARC', '半图独立 + 贝叶斯抛光', C.enzL, C.enz, C.enzD)
  node(330, 330, '分辨率报告', 'FSC = 0.143', '半图 FSC + mask 修正', C.badL, C.bad, C.badD)
  b.arrow(1105, 372, 1070, 372, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(845, 372, 810, 372, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(580, 372, 545, 372, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(325, 372, 262, 372, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.tag(192, 372, '密度图 + 模型', { fill: C.okL, stroke: C.ok, size: 11, weight: 700, tfill: C.okD, pad: 9 })
  b.ctext(700, 442, 'on-the-fly：收数当晚即见 2D 类平均与取向分布，把结果反馈到采集参数（欠焦分布、冰厚、束流）的迭代', { size: 10.5, fill: C.sub })

  // ============ 二、2D 分类 ============
  b.panel(30, 486, 660, 260, { title: '二、2D 分类：先聚类、后平均' })
  b.rect(60, 530, 130, 130, { fill: '#f8fafc', stroke: C.line, sw: 1.5 })
  for (let i = 0; i < 46; i++) {
    const rx = 64 + ((Math.sin(i * 127.1) * 43758.5) % 1 + 1) % 1 * 122
    const ry = 534 + ((Math.sin(i * 311.7) * 12543.2) % 1 + 1) % 1 * 122
    b.circle(rx, ry, 1.4 + ((Math.sin(i * 74.7) * 9898.2) % 1 + 1) % 1 * 1.5, { fill: C.mute, opacity: 0.55 })
  }
  b.ellipse(125, 595, 42, 33, { fill: C.accL, stroke: C.acc, sw: 1.2, opacity: 0.6 })
  b.ctext(125, 678, '单个颗粒（SNR < 0.1）', { size: 10, fill: C.sub })
  b.arrow(200, 595, 250, 595, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(225, 578, 'N = 100 平均', { size: 10.5, fill: C.sub })
  b.rect(258, 530, 130, 130, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  b.ellipse(323, 595, 42, 34, { fill: C.accL, stroke: C.acc, sw: 2 })
  for (let i = 0; i < 4; i++) b.line(290 + i * 16, 622, 312 + i * 16, 568, { stroke: C.accD, sw: 3, opacity: 0.7 })
  b.ctext(323, 678, '类平均（干净 10 倍）', { size: 10, fill: C.sub })
  b.ctext(323, 694, 'α 螺旋约 10 Å 周期条纹', { size: 9.5, fill: C.mute })
  b.wtext(420, 540, 'N 个同类颗粒对齐平均，信噪比按 √N 提升；「先聚类后平均」的顺序不可颠倒——异质颗粒硬塞一类只得模糊鬼影。', { size: 10.5, fill: C.sub, maxW: 250, lh: 16 })
  b.tag(545, 630, '类数 K 起步 50–200', { fill: C.proL, stroke: C.pro, size: 10.5, tfill: C.proD, pad: 9 })
  b.tag(545, 662, '好类：螺旋条纹、视角多样', { fill: C.proL, stroke: C.pro, size: 10.5, tfill: C.proD, pad: 9 })
  b.tag(545, 694, '坏类淘汰常削两至四成', { fill: C.badL, stroke: C.bad, size: 10.5, tfill: C.badD, pad: 9 })

  // ============ 三、金标准 FSC ============
  b.panel(710, 486, 660, 260, { title: '三、金标准精修与 FSC 0.143 判据' })
  b.rect(735, 535, 90, 34, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 7 })
  b.ctext(780, 556, '颗粒库', { size: 11.5, weight: 700, fill: C.sub })
  b.arrow(765, 572, 745, 606, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.arrow(795, 572, 815, 606, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.rect(720, 610, 84, 30, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 7 })
  b.ctext(762, 629, '半图 A', { size: 11, weight: 600, fill: C.accD })
  b.rect(800, 610, 84, 30, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 7 })
  b.ctext(842, 629, '半图 B', { size: 11, weight: 600, fill: C.proD })
  b.arrow(762, 643, 790, 672, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.arrow(842, 643, 812, 672, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.tag(800, 690, '半图间 FSC', { fill: C.badL, stroke: C.bad, size: 11, weight: 700, tfill: C.badD, pad: 9 })
  b.axis(980, 700, 320, 150, {
    grid: false,
    xticks: [[0, '0'], [1, '空间频率 →']],
    yticks: [[1, '1.0'], [0.143, '0.143'], [0, '0']],
    title: 'FSC（金标准半图）',
  })
  b.line(980, 678.5, 1300, 678.5, { stroke: C.bad, sw: 1.4, dash: '5 4' })
  b.curve(980, 700, 320, 150, [[0, 1], [0.08, 0.97], [0.18, 0.92], [0.28, 0.84], [0.38, 0.7], [0.48, 0.52], [0.56, 0.3], [0.62, 0.143], [0.7, 0.04], [1, 0.01]], { stroke: C.acc, sw: 2.6, smooth: true })
  b.line(1178, 700, 1178, 640, { stroke: C.bad, sw: 1.4, dash: '4 4' })
  b.circle(1178, 678.5, 4.5, { fill: C.bad })
  b.tag(1178, 628, '分辨率（0.143 判据）', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 8 })
  b.text(725, 720, '两半独立演化：任何一半的过拟合都不会被另一半承认', { size: 9.5, fill: C.sub })
  b.text(730, 740, '0.143 对应相位误差（更保守的 0.5 亦用）；半图与 mask 修正 FSC 为 EMDB 投稿硬标准。', { size: 10, fill: C.sub })

  // ============ 四、质检与逐颗粒精修 ============
  b.panel(30, 772, 1340, 206, { title: '四、微图质检与逐颗粒精修' })
  b.tag(220, 838, '漂移图：轨迹平滑收敛者可用', { fill: C.accL, stroke: C.acc, size: 11, tfill: C.accD, pad: 9 })
  b.tag(530, 838, 'CTF 拟合分辨率极限（体检指标）', { fill: C.accL, stroke: C.acc, size: 11, tfill: C.accD, pad: 9 })
  b.tag(840, 838, '微图级淘汰率 10–30% 属常态', { fill: C.warnL, stroke: C.warn, size: 11, tfill: C.warnD, pad: 9 })
  b.tag(1150, 838, '计数上限约 5–10 e^{-}/像素/秒', { fill: C.warnL, stroke: C.warn, size: 11, tfill: C.warnD, pad: 9 })
  b.tag(240, 888, '贝叶斯抛光（Zivanov 2019）', { fill: C.proL, stroke: C.pro, size: 11, tfill: C.proD, pad: 9 })
  b.tag(540, 888, '逐颗粒 CTF 与高阶像差精修', { fill: C.proL, stroke: C.pro, size: 11, tfill: C.proD, pad: 9 })
  b.tag(850, 888, 'multi-body 分刚体（Nakane 2018）', { fill: C.proL, stroke: C.pro, size: 11, tfill: C.proD, pad: 9 })
  b.tag(1160, 888, '局部分辨率（blocres / RELION）', { fill: C.proL, stroke: C.pro, size: 11, tfill: C.proD, pad: 9 })
  b.ctext(700, 946, '规模：一张微图 50–300 个颗粒、一套数据 10⁵–10⁶ 个；「边收边算」把「收完才发现问题」变成当日可纠的工程迭代', { size: 10.5, fill: C.sub })
}

export default scene({
  title: '单颗粒数据处理流水线：从电影到结构',
  subtitle: 'MotionCor2 运动校正 + 剂量加权 → CTFFIND4 拟合 → 挑颗粒 → 2D 分类（SNR ∝ √N）→ ab initio 初始模型 → 3D 分类 → gold-standard 精修 → FSC 0.143 报告分辨率',
  draw,
})
