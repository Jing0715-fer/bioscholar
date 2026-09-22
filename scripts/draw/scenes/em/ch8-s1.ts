// em ch8-s1 电影校正与颗粒挑选（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、帧对齐 ============
  b.panel(30, 132, 660, 412, { title: '一、帧对齐：全局轨迹 + 局部轨迹（MotionCor2）' })
  // 原始电影堆栈
  b.ctext(200, 186, '原始电影（典型 50–60 帧，每帧约 1 e^{-}/Å^{2}）', { size: 10.5, weight: 700, fill: C.sub })
  const fr: [number, number][] = []
  for (let i = 0; i < 6; i++) {
    const fx = 96 + i * 13, fy = 212 + i * 11
    b.rect(fx, fy, 150, 106, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 3, opacity: 0.92 })
    fr.push([fx, fy])
  }
  const traj: [number, number][] = []
  fr.forEach(([fx, fy], i) => {
    const px = fx + 75 - 34 + i * 13.5
    const py = fy + 53 - 10 + Math.pow(i - 2.5, 2) * 6.2
    traj.push([px, py])
    b.circle(px, py, 9, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  })
  b.polyline(traj, { stroke: C.enz, sw: 1.8, dash: '5 4' })
  b.ctext(170, 348, '颗粒沿抛物线状轨迹漂移', { size: 10, fill: C.enzD })
  b.ctext(170, 364, '「先拍的帧最糊」', { size: 9.5, fill: C.mute })
  b.arrow(300, 268, 352, 268, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(326, 250, '对齐叠加', { size: 10, fill: C.sub })
  // 对齐后
  b.rect(370, 212, 150, 106, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 3 })
  b.circle(445, 265, 12, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.circle(445, 265, 6, { fill: C.accD, fillOp: 0.55 })
  b.ctext(445, 348, '压平后的微图', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(445, 364, '颗粒锐利、可辨', { size: 9.5, fill: C.mute })
  b.wtext(560, 208, '思想源自 Li 等 2013 年（Nature Methods）：同一微图内所有颗粒共享一条全局漂移轨迹，叠加每个颗粒自身的局部偏移；以低阶多项式（典型抛物线）拟合出平滑位移场后再叠加。', { size: 10, fill: C.sub, maxW: 120, lh: 14 })
  b.tag(230, 404, 'MotionCor2 为标配', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(500, 404, 'RELION 自带等价实现', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.wtext(50, 442, '残余的埃级模糊由贝叶斯抛光（Zivanov 2019，本章第 4 节）逐颗粒再救一程——电影校正是「三部曲」的第一部。', { size: 10, fill: C.mute, maxW: 620, lh: 14 })

  // ============ 二、剂量加权矩阵 ============
  b.panel(710, 132, 660, 412, { title: '二、剂量加权：按累积剂量逐帧逐频率赋权' })
  const rows = 8, cols = 3
  const gx = 850, gy = 196, cw = 120, ch = 30
  const colLabels = ['低频', '中频', '高频']
  const weights = [
    [1, 1, 1], [1, 0.92, 0.78], [1, 0.82, 0.55], [0.98, 0.68, 0.34],
    [0.95, 0.52, 0.18], [0.9, 0.36, 0.08], [0.85, 0.24, 0.03], [0.78, 0.15, 0.01],
  ]
  colLabels.forEach((lb, j) => b.ctext(gx + j * cw + cw / 2, gy - 10, lb, { size: 11, weight: 700, fill: C.sub }))
  for (let i = 0; i < rows; i++) {
    b.text(gx - 14, gy + i * ch + 20, `帧 ${i + 1}`, { size: 10, fill: C.mute, anchor: 'end' })
    for (let j = 0; j < cols; j++) {
      const w = weights[i][j]
      b.rect(gx + j * cw, gy + i * ch, cw - 4, ch - 4, {
        fill: j === 2 ? C.enz : j === 1 ? C.acc : C.dna, fillOp: 0.15 + w * 0.75, stroke: C.line, sw: 0.8, rx: 3,
      })
    }
  }
  b.text(gx + 3 * cw + 24, gy + 40, '早帧：全频段可用', { size: 10.5, weight: 700, fill: C.okD })
  b.text(gx + 3 * cw + 24, gy + 78, '晚帧：只剩低频', { size: 10.5, weight: 700, fill: C.badD })
  b.text(gx + 3 * cw + 24, gy + 116, '颜色深浅＝权重', { size: 10, fill: C.mute })
  b.wtext(730, 480, 'Grant 与 Grigorieff 2015 年的剂量加权：晚帧高频被降权，不是「噪声大」的统计问题，而是「结构已不在」的物理损伤——平均救不回已被辐照抹掉的信息。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(900, 512, '早帧保高频、晚帧仅贡献低频', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })

  // ============ 三、颗粒挑选 ============
  b.panel(30, 572, 660, 398, { title: '三、颗粒挑选：方法谱系' })
  // 微图示意
  const mx = 60, my = 618, mw = 240, mh = 180
  b.rect(mx, my, mw, mh, { fill: '#f8fafc', stroke: C.sub, sw: 1.8 })
  for (let i = 0; i < 90; i++) {
    const rx = mx + 6 + ((Math.sin(i * 127.3) * 43758.5) % 1 + 1) % 1 * (mw - 12)
    const ry = my + 6 + ((Math.sin(i * 311.7) * 12543.2) % 1 + 1) % 1 * (mh - 12)
    b.circle(rx, ry, 1.3, { fill: C.mute, opacity: 0.5 })
  }
  const parts: [number, number][] = [[100, 660], [180, 645], [140, 725], [230, 700], [80, 745], [210, 770]]
  parts.forEach(([px, py]) => {
    b.ellipse(px, py, 13, 11, { fill: C.accL, stroke: C.acc, sw: 1.6 })
    b.rect(px - 21, py - 21, 42, 42, { fill: 'none', stroke: C.ok, sw: 1.6, dash: '6 4' })
  })
  b.ellipse(190, 782, 16, 7, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.rect(158, 760, 62, 44, { fill: 'none', stroke: C.bad, sw: 1.6, dash: '6 4' })
  b.ctext(mx + mw / 2, my + mh + 18, '框＝颗粒直径的约 1.5–2 倍', { size: 10, weight: 700, fill: C.sub })
  b.ctext(mx + mw / 2, my + mh + 34, '红框：双粒聚集，人工复查时剔除', { size: 9.5, fill: C.badD })
  // 方法卡
  const card = (y: number, t: string, s1: string, s2: string, fill: string, stroke: string, tfill: string) => {
    b.rect(340, y, 330, 74, { fill, stroke, sw: 1.6, rx: 8 })
    b.text(356, y + 24, t, { size: 12, weight: 700, fill: tfill })
    b.text(356, y + 44, s1, { size: 10, fill: C.sub })
    b.text(356, y + 62, s2, { size: 10, fill: C.mute })
  }
  card(612, '模板互相关', '输入：参考模板投影', '风险：参考偏差——模板里有什么就挑出什么', C.panelB, C.sub, C.sub)
  card(696, 'LoG blob 检测', '输入：尺寸先验（直径上下限）', '免模板、常作首跑与初筛', C.dnaL, C.dna, C.dnaD)
  card(780, 'Topaz / crYOLO 深度学习', '少量人工标注训练卷积网络', '正-未标注学习省标注；训练偏见须人工复核', C.proL, C.pro, C.proD)
  b.ctext(505, 888, '挑出后再由 2D/3D 分类与分辨率反馈迭代回挑（第 8 章第 2–3 节）', { size: 10, fill: C.mute })

  // ============ 四、质检与规模 ============
  b.panel(710, 572, 660, 398, { title: '四、微图质检两把尺与规模感' })
  // 漂移图好坏
  b.rect(740, 612, 200, 130, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  b.polyline([[760, 700], [790, 678], [820, 668], [850, 662], [880, 658], [910, 656]], { stroke: C.ok, sw: 2 })
  b.ctext(840, 756, '可用：轨迹平滑收敛', { size: 10, weight: 700, fill: C.okD })
  b.rect(960, 612, 200, 130, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  b.polyline([[980, 700], [1010, 650], [1040, 690], [1070, 640], [1100, 690], [1130, 655]], { stroke: C.bad, sw: 2 })
  b.ctext(1060, 756, '弃用：漂移紊乱或跳变', { size: 10, weight: 700, fill: C.badD })
  b.ctext(950, 596, '两把尺：漂移图 + CTF 拟合分辨率极限', { size: 11, weight: 700, fill: C.ink })
  b.tag(860, 792, '微图级淘汰率 10–30% 属常态', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 9 })
  b.tag(1160, 792, '宁可少而干净', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 9 })
  b.tag(860, 824, '一张微图 50–300 个颗粒', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(1160, 824, '一套数据 10^{5}–10^{6} 个颗粒', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.text(730, 856, '人工复查三盯：', { size: 11, weight: 700, fill: C.ink })
  b.tag(870, 884, '框偏移', { fill: C.panelB, stroke: C.sub, size: 10.5, tfill: C.sub, pad: 9 })
  b.tag(990, 884, '双粒聚集', { fill: C.panelB, stroke: C.sub, size: 10.5, tfill: C.sub, pad: 9 })
  b.tag(1110, 884, '冰污染', { fill: C.panelB, stroke: C.sub, size: 10.5, tfill: C.sub, pad: 9 })
  b.tag(1230, 884, '边缘碳膜碎屑', { fill: C.panelB, stroke: C.sub, size: 10.5, tfill: C.sub, pad: 9 })
}

export default scene({
  title: '电影校正与颗粒挑选：微图到颗粒库的前两步',
  subtitle: 'MotionCor2 全局加局部抛物线轨迹对齐 50–60 帧电影；剂量加权逐帧逐频率赋权（晚帧高频是结构已不在）；模板/LoG/深度学习三谱系挑出每图 50–300 个颗粒，微图淘汰率 10–30% 属常态',
  draw,
})
