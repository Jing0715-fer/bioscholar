// im ch5-s2 表位：T 细胞表位与 B 细胞表位（39-g 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、线性表位与构象表位 ============
  b.panel(30, 132, 1340, 282, { title: '一、线性表位与构象表位：抗原特异性的物质基础' })

  // 左：线性表位
  b.rect(60, 176, 620, 196, { fill: C.bg, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(80, 202, '线性表位（连续残基）', { size: 13.5, weight: 700, fill: C.dnaD })
  b.spline([[90, 260], [150, 220], [220, 270], [290, 225], [360, 268], [430, 222], [500, 266], [570, 230], [640, 262]], { stroke: C.dna, sw: 3.4 })
  // 连续段高亮
  b.spline([[255, 244], [290, 225], [325, 258]], { stroke: C.enz, sw: 7, opacity: 0.75 })
  ;[255, 290, 325].forEach(x => b.circle(x, x === 290 ? 225 : 250, 6, { fill: C.enzL, stroke: C.enz, sw: 1.8 }))
  b.ctext(300, 300, '由序列上连续的氨基酸残基组成', { size: 11, fill: C.sub })
  b.ctext(300, 322, '变性 / 复性后仍可保留', { size: 10.5, fill: C.mute })
  b.ctext(300, 352, '一段序列上连续的残基（玫红高亮段）', { size: 10, fill: C.mute })

  // 右：构象表位
  b.rect(720, 176, 620, 196, { fill: C.bg, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(740, 202, '构象表位（不连续残基拼合）', { size: 13.5, weight: 700, fill: C.proD })
  b.ellipse(1030, 262, 130, 58, { fill: C.proL, fillOp: 0.45, stroke: C.pro, sw: 2.4 })
  ;[[950, 240], [1090, 232], [1030, 308]].forEach(([x, y]) => b.circle(x, y, 7.5, { fill: C.enzL, stroke: C.enz, sw: 2 }))
  b.line(950, 240, 1090, 232, { stroke: C.enz, sw: 1.6, dash: '4 3', opacity: 0.7 })
  b.line(1090, 232, 1030, 308, { stroke: C.enz, sw: 1.6, dash: '4 3', opacity: 0.7 })
  b.ctext(1030, 268, '折叠抗原', { size: 11.5, weight: 700, fill: C.proD })
  b.ctext(1030, 344, '折叠后空间上相聚的不连续残基拼合', { size: 11, fill: C.sub })
  b.ctext(1030, 366, '变性破坏折叠 → 构象表位随之消失', { size: 10.5, fill: C.bad, weight: 700 })

  // ============ 二、T 表位与 B 表位对照 ============
  b.panel(30, 428, 1340, 262, { title: '二、T 细胞表位与 B 细胞表位：提呈方式与大小口径的对照' })
  b.table(60, 476, 780, {
    headers: ['比较项目', 'T 细胞表位', 'B 细胞表位'],
    colW: [130, 320, 330],
    rowH: 44,
    fontSize: 12,
    rows: [
      ['构成', '经 MHC 提呈的线性肽', '天然表面结构（线性或构象）'],
      ['大小口径', '约 8–17 个氨基酸残基', '约 5–15 个氨基酸残基或 5–7 个糖残基'],
      ['识别受体', 'TCR（须经 MHC 提呈）', 'BCR / 抗体（直接识别）'],
      ['MHC 肽槽', 'I 类槽容纳 8–10 aa（9 肽最典型）；II 类 13–17 aa', '—'],
    ],
  })
  // 右：MHC-肽示意
  b.rect(880, 476, 440, 176, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(898, 502, '为何 T 表位是短肽？', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(898, 524, 'MHC I 类肽结合槽两端封闭，容纳 8–10 aa；II 类槽两端开放、肽段可垂出槽外，容纳 13–17 aa。', { size: 11, fill: C.sub, maxW: 404, lh: 16 })
  b.wtext(898, 580, 'B 细胞表位大小约 5–15 aa，恰与抗体可变区构成的结合界面互补。', { size: 11, fill: C.sub, maxW: 404, lh: 16 })
  b.wtext(898, 624, '表位是抗原分子上被 TCR、BCR 或抗体特异性识别的最小结构单位。', { size: 10.5, fill: C.mute, maxW: 404, lh: 15 })

  // ============ 三、功能性 / 隐蔽表位与应用 ============
  b.panel(30, 704, 1340, 274, { title: '三、功能性表位与隐蔽表位：从变性暴露到疫苗设计' })

  b.rect(60, 748, 620, 194, { fill: C.warnL, fillOp: 0.45, stroke: C.warn, sw: 1.6, rx: 9 })
  b.text(80, 774, '功能性表位 vs 隐蔽表位', { size: 13, weight: 700, fill: '#92400e' })
  b.wtext(80, 798, '天然抗原表面可供识别者为功能性表位；藏于内部、正常不可及者为隐蔽表位。', { size: 11.5, fill: C.sub, maxW: 570, lh: 17 })
  b.wtext(80, 838, '· 变性抗原暴露出新的（隐蔽）表位', { size: 11.5, weight: 600, fill: '#92400e', maxW: 570, lh: 17 })
  b.wtext(80, 862, '· 隐蔽自身抗原释放可诱发自身免疫病', { size: 11.5, weight: 600, fill: '#92400e', maxW: 570, lh: 17 })
  b.wtext(80, 902, '同一抗原分子上多个表位共存——即抗原结合价的基础。', { size: 10.5, fill: C.mute, maxW: 570, lh: 15 })

  b.rect(710, 748, 610, 194, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(730, 774, '表位技术的应用', { size: 13, weight: 700, fill: C.accD })
  const apps: Array<[string, string]> = [
    ['表位作图', '逐段扫描鉴定关键残基'],
    ['模拟表位', '以模拟肽替代天然表位'],
    ['应用出口', '诊断试剂开发与疫苗设计'],
  ]
  apps.forEach(([t, s], i) => {
    b.circle(750, 802 + i * 38, 3.5, { fill: C.acc })
    b.text(762, 806 + i * 38, t, { size: 12, weight: 700, fill: C.ink })
    b.text(762 + 96, 806 + i * 38, s, { size: 11, fill: C.sub })
  })
  b.wtext(730, 922, '二者是诊断试剂开发与疫苗设计的核心工具。', { size: 10.5, fill: C.mute, maxW: 560, lh: 15 })
}

export default scene({
  title: '表位：T 细胞表位与 B 细胞表位的对照与线性 / 构象之分',
  subtitle: '表位是抗原分子上被 TCR、BCR 或抗体特异性识别的最小结构单位，约 5–15 个氨基酸残基（或多糖残基、化学基团）；线性表位由连续残基组成、构象表位由折叠后相聚的不连续残基拼合（变性可破坏）；T 表位为经 MHC 提呈的线性肽（约 8–17 aa，I 类槽 8–10 aa、II 类槽 13–17 aa），B 表位为天然表面结构（约 5–15 aa 或 5–7 个糖残基）',
  draw,
})
