// mb ch9-s1 核酸分子杂交技术（39-c 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Southern 印迹技术范式（上，全宽） ============
  b.panel(30, 132, 1340, 402, { title: '一、Southern 印迹（1975）：「电泳分离—转移—杂交」的技术范式' })

  // —— 六步流程（每箱 200×118，箭头衔接） ——
  const bx = [52, 277, 502, 727, 952, 1177]
  const by = 176, bw = 200, bh = 118
  const heads = ['① 基因组 DNA', '② 限制酶消化', '③ 琼脂糖电泳', '④ 碱变性 + 转移', '⑤ 紫外交联固定', '⑥ 探针杂交 · 显影']
  const subs = ['高分子量双链', '切为长短不一的片段', '片段按大小分开', '高盐缓冲液「吸印」', 'DNA 永久固定于尼龙膜', '洗膜后仅靶带显影']
  heads.forEach((h, i) => {
    b.rect(bx[i], by, bw, bh, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 9 })
    b.ctext(bx[i] + bw / 2, by + 24, h, { size: 14, weight: 700, fill: C.ink })
    b.ctext(bx[i] + bw / 2, by + 108, subs[i], { size: 11, fill: C.mute })
    if (i < 5) b.arrow(bx[i] + bw + 3, by + 60, bx[i + 1] - 3, by + 60, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  })

  // ① 双链 DNA 图标
  b.dna(bx[0] + 22, by + 62, 156, { amp: 8, period: 44, sw: 2.4 })
  // ② 酶切：DNA + 两条切割虚线
  b.dna(bx[1] + 22, by + 62, 156, { amp: 8, period: 44, sw: 2.4 })
  b.line(bx[1] + 78, by + 40, bx[1] + 78, by + 84, { stroke: C.enz, sw: 1.8, dash: '4 3' })
  b.line(bx[1] + 122, by + 40, bx[1] + 122, by + 84, { stroke: C.enz, sw: 1.8, dash: '4 3' })
  b.ctext(bx[1] + 100, by + 36, 'EcoRI 等', { size: 10.5, fill: C.enzD })
  // ③ 迷你凝胶：孔 + 梯度带
  b.rect(bx[2] + 30, by + 38, 140, 62, { fill: '#ffffff', stroke: C.sub, sw: 1.6, rx: 3 })
  for (let l = 0; l < 3; l++) b.rect(bx[2] + 42 + l * 44, by + 43, 26, 6, { fill: C.ink, rx: 2 })
  const gelBands: [number, number][] = [[0, 55], [0, 65], [0, 78], [1, 58], [1, 72], [1, 87], [2, 52], [2, 62], [2, 74], [2, 90]]
  for (const [l, dy] of gelBands) b.rect(bx[2] + 40 + l * 44, by + dy, 30, 5, { fill: C.dna, opacity: 0.65, rx: 2 })
  // ④ 转移塔图标（自下而上：凝胶→尼龙膜→滤纸，箭头上行）
  b.rect(bx[3] + 40, by + 78, 120, 13, { fill: '#e2e8f0', stroke: C.sub, sw: 1.4 })
  b.rect(bx[3] + 40, by + 64, 120, 11, { fill: '#ffffff', stroke: C.dna, sw: 1.8 })
  b.rect(bx[3] + 40, by + 50, 120, 11, { fill: C.panelB, stroke: C.line, sw: 1.2 })
  b.arrow(bx[3] + 100, by + 88, bx[3] + 100, by + 56, { stroke: C.enz, sw: 2, marker: 'enz' })
  // ⑤ 膜 + UV 闪电
  b.rect(bx[4] + 35, by + 62, 130, 26, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  for (const ox of [12, 48, 84]) b.rect(bx[4] + 47 + ox, by + 68, 20, 6, { fill: '#94a3b8' })
  b.path(`M${bx[4] + 92},${by + 34} l-7,12 h6 l-6,11 l13,-14 h-7 l7,-9 z`, { fill: '#b45309' })
  b.ctext(bx[4] + 136, by + 42, 'UV', { size: 10.5, weight: 700, fill: C.rnaD })
  // ⑥ 膜 + 靶带高亮 + 星标
  b.rect(bx[5] + 35, by + 62, 130, 26, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  b.rect(bx[5] + 47, by + 68, 20, 6, { fill: '#94a3b8' })
  b.rect(bx[5] + 83, by + 68, 20, 6, { fill: C.enz })
  b.rect(bx[5] + 119, by + 68, 20, 6, { fill: '#94a3b8' })
  b.polygon([[bx[5] + 93, by + 34], [bx[5] + 96, by + 40], [bx[5] + 102, by + 43], [bx[5] + 96, by + 46], [bx[5] + 93, by + 52], [bx[5] + 90, by + 46], [bx[5] + 84, by + 43], [bx[5] + 90, by + 40]], { fill: '#b45309' })
  b.ctext(bx[5] + 118, by + 43, '标记探针', { size: 10.5, fill: C.enzD })

  // —— 毛细转移「吸印塔」细节（左下） ——
  b.ctext(196, 336, '毛细转移「吸印塔」：缓冲液携 DNA 上行', { size: 14, weight: 700, fill: C.sub })
  // 重物 / 玻璃板 / 吸水纸叠 / 滤纸 / 尼龙膜 / 凝胶 / 滤纸桥 / 缓冲液皿
  b.polygon([[180, 348], [246, 348], [238, 366], [188, 366]], { fill: C.faint, stroke: C.sub, sw: 1.4 })
  b.ctext(213, 360, '重物', { size: 10, fill: C.sub })
  b.rect(150, 370, 130, 12, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  for (let i = 0; i < 5; i++) b.rect(150, 386 + i * 8, 130, 7, { fill: C.panelB, stroke: C.line, sw: 0.8 })
  b.rect(150, 428, 130, 10, { fill: C.panelB, stroke: C.line, sw: 1.2 })
  b.rect(148, 440, 134, 12, { fill: '#ffffff', stroke: C.dna, sw: 2 })
  b.rect(150, 454, 130, 26, { fill: '#e2e8f0', stroke: C.sub, sw: 1.6 })
  b.rect(96, 482, 208, 14, { fill: C.panelB, stroke: C.line, sw: 1.2 })
  b.rect(96, 496, 16, 32, { fill: C.panelB, stroke: C.line, sw: 1.2 })
  b.rect(288, 496, 16, 32, { fill: C.panelB, stroke: C.line, sw: 1.2 })
  b.rect(80, 496, 244, 32, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(202, 516, '高盐缓冲液', { size: 11, fill: C.accD })
  // DNA 上行箭头（凝胶→膜）
  b.arrow(180, 478, 180, 450, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.arrow(250, 478, 250, 450, { stroke: C.enz, sw: 2, marker: 'enz' })
  // 缓冲液沿纸桥上行
  b.arrow(104, 524, 104, 492, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.arrow(296, 524, 296, 492, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  // 右侧层注
  b.text(286, 378, '玻璃板', { size: 10, fill: C.mute })
  b.text(286, 412, '吸水纸叠', { size: 10, fill: C.mute })
  b.text(286, 433, '滤纸', { size: 10, fill: C.mute })
  b.text(286, 451, '尼龙膜', { size: 10, weight: 700, fill: C.dna })
  b.text(286, 470, '凝胶', { size: 10, fill: C.mute })
  b.ctext(200, 490, '滤纸桥', { size: 10, fill: C.mute })

  // —— 杂交→显影三联（中下） ——
  b.ctext(548, 336, '杂交与显影：探针只认靶片段', { size: 14, weight: 700, fill: C.sub })
  const strips = [
    { x: 372, cap: '膜上固定全部片段', hi: -1 },
    { x: 504, cap: '探针仅与靶配对', hi: 2 },
    { x: 636, cap: '显影只现靶带', hi: 2, film: true },
  ]
  for (const s of strips) {
    b.rect(s.x, 356, 96, 132, { fill: '#ffffff', stroke: s.film ? C.ink : C.sub, sw: s.film ? 2 : 1.6 })
    for (let i = 0; i < 6; i++) {
      const byy = 372 + i * 20
      if (i === s.hi) b.rect(s.x + 12, byy, 72, 9, { fill: C.enz })
      else b.rect(s.x + 12, byy, 72, 9, { fill: s.film ? '#ffffff' : '#cbd5e1' })
    }
    b.ctext(s.x + 48, 505, s.cap, { size: 10.5, fill: C.mute })
  }
  b.arrow(470, 412, 500, 412, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.arrow(602, 412, 632, 412, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.polygon([[552, 336], [555, 342], [561, 345], [555, 348], [552, 354], [549, 348], [543, 345], [549, 342]], { fill: '#b45309' })
  b.text(566, 349, '标记探针（³²P / DIG）', { size: 10.5, fill: C.enzD })
  b.ctext(548, 528, '非特异结合经严格洗膜去除；检测：³²P 自显影 / DIG-抗体化学发光', { size: 10.5, fill: C.mute })

  // —— 印迹家族表（右下） ——
  b.text(770, 336, '印迹家族一览', { size: 14, weight: 700, fill: C.sub })
  const tCols = [86, 84, 156, 244]
  const tX = 770, tRows = [
    ['Southern', 'DNA', '限制酶消化', '基因结构 / 拷贝数 / RFLP'],
    ['Northern', 'RNA', '变性胶电泳（甲醛 / 乙二醛）', '转录本大小与丰度 / 可变剪接'],
    ['Western', '蛋白质', 'SDS-PAGE', '蛋白表达（抗体为「探针」）'],
  ]
  let cx = tX
  const tHeads = ['印迹', '靶分子', '前处理', '主要用途']
  tHeads.forEach((h, i) => { b.ctext(cx + tCols[i] / 2, 362, h, { size: 12.5, weight: 700, fill: C.sub }); cx += tCols[i] })
  tRows.forEach((row, r) => {
    const ry = 374 + r * 46
    b.rect(tX, ry, 570, 44, { fill: r === 0 ? C.dnaL : r === 2 ? C.proL : C.panel, stroke: C.line, sw: 1, rx: 5 })
    cx = tX
    row.forEach((cell, i) => {
      b.ctext(cx + tCols[i] / 2, ry + 20, cell, { size: i === 0 ? 13 : 11.5, weight: i === 0 ? 700 : 400, fill: i === 0 ? C.ink : C.sub })
      cx += tCols[i]
    })
  })
  b.wtext(tX, 522, 'Northern 须用变性胶（甲醛 / 乙二醛）保持 RNA 线性；Western 以抗体替代核酸探针。', { size: 11, fill: C.mute, maxW: 560 })

  // ============ 二、杂交的物理化学基础（左下） ============
  b.panel(30, 548, 660, 412, { title: '二、杂交的物理化学基础：Tm 与探针' })
  // —— 解链曲线（左上：轴原点 (70,770)，绘图区 y 588–770） ——
  b.ctext(200, 586, '变性-复性与解链温度', { size: 12.5, weight: 700, fill: C.ink })
  b.arrow(70, 770, 70, 588, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(70, 770, 336, 770, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(46, 584, 'A260 ↑', { size: 11, fill: C.sub })
  b.ctext(306, 790, '温度 →', { size: 12, fill: C.sub })
  b.spline([[82, 756], [130, 752], [165, 740], [195, 716], [212, 684], [222, 652], [230, 628], [240, 612], [252, 602]], { stroke: C.acc, sw: 3 })
  b.spline([[82, 756], [160, 752], [205, 740], [238, 716], [258, 684], [270, 652], [278, 628], [288, 612], [300, 602]], { stroke: C.dna, sw: 3 })
  b.line(70, 690, 336, 690, { stroke: C.faint, sw: 1.2, dash: '5 5' })
  b.line(212, 690, 212, 770, { stroke: C.acc, sw: 1.2, dash: '4 4' })
  b.line(258, 690, 258, 770, { stroke: C.dna, sw: 1.2, dash: '4 4' })
  b.ctext(212, 786, 'Tm', { size: 11, weight: 700, fill: C.accD })
  b.ctext(258, 786, 'Tm', { size: 11, weight: 700, fill: C.dnaD })
  b.text(76, 682, 'Tm＝50% 增色点', { size: 10.5, fill: C.mute })
  b.ctext(236, 648, 'GC 低', { size: 12, weight: 700, fill: C.accD })
  b.ctext(298, 630, 'GC 高', { size: 12, weight: 700, fill: C.dnaD })
  // —— Tm 影响因素（右上） ——
  b.rect(352, 572, 320, 104, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(368, 596, 'Tm 的影响因素', { size: 13.5, weight: 700, fill: C.ink })
  const facts: [string, string][] = [
    ['GC 含量 ↑ → Tm ↑', C.dnaD], ['盐浓度 ↑ → Tm ↑', C.dnaD],
    ['片段长度 ↑ → Tm ↑', C.dnaD], ['甲酰胺 ↑ → Tm ↓', C.bad],
  ]
  facts.forEach(([s, col], i) => {
    b.text(368 + (i % 2) * 158, 622 + Math.floor(i / 2) * 26, s, { size: 12, fill: col })
  })
  // —— 探针盒（右中） ——
  b.rect(440, 692, 232, 84, { fill: C.rnaL, stroke: C.rna, sw: 1.4, rx: 8, fillOp: 0.45 })
  b.text(456, 714, '探针＝已知序列 + 标记', { size: 12.5, weight: 700, fill: C.rnaD })
  b.path('M456,736 q10,-10 20,0 t20,0 t20,0 t20,0 t20,0', { stroke: C.sub, sw: 2, fill: 'none' })
  b.path('M456,756 q10,10 20,0 t20,0 t20,0 t20,0 t20,0', { stroke: C.enz, sw: 2, fill: 'none' })
  for (let i = 0; i < 6; i++) b.line(466 + i * 20, 741, 466 + i * 20, 752, { stroke: C.faint, sw: 1.2 })
  b.polygon([[568, 746], [571, 752], [577, 755], [571, 758], [568, 764], [565, 758], [559, 755], [565, 752]], { fill: '#b45309' })
  b.text(456, 776, '从复杂混合物中检出特定分子', { size: 10.5, fill: C.mute })
  // —— 变性 / 复性横带（全宽，y ≈ 822） ——
  b.dna(56, 822, 80, { amp: 7, period: 40, sw: 2.2 })
  b.arrow(142, 822, 172, 822, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(157, 806, '加热 / 碱', { size: 10.5, fill: C.bad })
  b.path('M184,810 q9,-11 18,0 t18,0 t18,0', { stroke: C.rna, sw: 2.2, fill: 'none' })
  b.path('M184,834 q9,11 18,0 t18,0 t18,0', { stroke: C.rna, sw: 2.2, fill: 'none' })
  b.ctext(211, 850, '变性（解链）', { size: 10.5, fill: C.mute })
  b.arrow(284, 822, 314, 822, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.ctext(299, 806, '缓慢降温', { size: 10.5, fill: C.ok })
  b.dna(322, 822, 80, { amp: 7, period: 40, sw: 2.2 })
  b.text(412, 826, '复性（退火）：互补链重新配对', { size: 11, fill: C.mute })
  // —— 探针标记两大类（底部两盒） ——
  b.rect(46, 856, 300, 92, { fill: C.warnL, stroke: '#b45309', sw: 1.5, rx: 8, fillOp: 0.4 })
  b.text(62, 880, '放射性标记：³²P', { size: 14, weight: 700, fill: C.rnaD })
  const radItems = ['· 随机引物法', '· 切口平移法', '· 灵敏度高（自显影检测）']
  radItems.forEach((s, i) => b.text(62, 904 + i * 20, s, { size: 12, fill: C.sub }))
  b.polygon([[322, 884], [325, 890], [331, 893], [325, 896], [322, 902], [319, 896], [313, 893], [319, 890]], { fill: '#b45309' })
  for (const [dx, dy] of [[10, 0], [-10, 0], [0, 10], [0, -10], [7, 7], [-7, -7], [7, -7], [-7, 7]] as [number, number][]) {
    b.line(322, 893, 322 + dx * 2.2, 893 + dy * 2.2, { stroke: '#b45309', sw: 1.2 })
  }
  b.rect(356, 856, 316, 92, { fill: C.okL, stroke: C.ok, sw: 1.5, rx: 8, fillOp: 0.4 })
  b.text(372, 880, '非放射性标记', { size: 14, weight: 700, fill: C.ok })
  const nonItems = ['· 地高辛 DIG（抗 DIG 抗体检测）', '· 生物素 - 链霉亲和素', '· 安全稳定（化学发光 / 显色）']
  nonItems.forEach((s, i) => b.text(372, 904 + i * 20, s, { size: 12, fill: C.sub }))

  // ============ 三、FISH（右下） ============
  b.panel(710, 548, 660, 412, { title: '三、荧光原位杂交（FISH）：在细胞原位显示位置与拷贝数' })
  // —— 中期染色体：涂染 vs 单拷贝 ——
  const chr = (x0: number, fill: string, stroke: string) => {
    b.rect(x0, 600, 22, 58, { fill, stroke, sw: 1.8, rx: 10 })
    b.rect(x0 + 30, 600, 22, 58, { fill, stroke, sw: 1.8, rx: 10 })
    b.rect(x0, 662, 22, 58, { fill, stroke, sw: 1.8, rx: 10 })
    b.rect(x0 + 30, 662, 22, 58, { fill, stroke, sw: 1.8, rx: 10 })
    b.rect(x0, 654, 52, 12, { fill, stroke, sw: 1.8, rx: 5 })
  }
  chr(748, C.proL, C.pro)
  b.ctext(774, 738, '染色体涂染（painting）', { size: 11.5, weight: 700, fill: C.proD })
  b.ctext(774, 756, '整条染色体特异性探针', { size: 10.5, fill: C.mute })
  chr(852, '#ffffff', C.sub)
  b.rect(854, 614, 18, 24, { fill: C.okL, stroke: C.ok, sw: 2, rx: 3 })
  b.ctext(878, 738, '单拷贝探针：定位基因', { size: 11.5, weight: 700, fill: C.ok })
  b.ctext(878, 756, '检测微缺失 / 扩增', { size: 10.5, fill: C.mute })
  // —— 间期核：正常 vs 扩增 ——
  b.circle(1075, 656, 56, { fill: C.panel, stroke: C.sub, sw: 2 })
  b.circle(1058, 638, 7, { fill: C.enz })
  b.circle(1094, 676, 7, { fill: C.enz })
  b.ctext(1075, 738, '正常：2 个信号', { size: 12, weight: 700, fill: C.sub })
  b.circle(1225, 656, 56, { fill: C.panel, stroke: C.sub, sw: 2 })
  for (const [dx, dy] of [[-22, -18], [-10, -26], [4, -16], [16, -4], [4, 8], [-12, 4], [22, 10], [-4, -4]] as [number, number][]) {
    b.circle(1225 + dx, 656 + dy, 6.5, { fill: C.enz })
  }
  b.ctext(1225, 738, '扩增：多点成簇', { size: 12, weight: 700, fill: C.enzD })
  b.ctext(1225, 756, '（如 HER2）', { size: 10.5, fill: C.mute })
  b.ctext(1150, 584, '间期核 FISH：直接读出拷贝数', { size: 12.5, weight: 700, fill: C.ink })
  // —— 应用清单 ——
  b.text(740, 782, 'FISH 家族与应用', { size: 14, weight: 700, fill: C.ink })
  const apps1 = [
    '· 染色体涂染：核型分析与易位检测',
    '· 单拷贝探针：微缺失（DiGeorge 综合征）',
    '· 多色 FISH / 光谱核型（SKY）：复杂重排一览',
  ]
  const apps2 = [
    '· 纤维-FISH：高分辨率定位',
    '· RNA-FISH：单细胞转录本计数',
    '· 组织切片 ISH：反义 RNA 探针空间表达谱',
  ]
  apps1.forEach((s, i) => b.text(740, 810 + i * 24, s, { size: 11.5, fill: C.sub }))
  apps2.forEach((s, i) => b.text(1052, 810 + i * 24, s, { size: 11.5, fill: C.sub }))
  b.rect(740, 886, 600, 58, { fill: C.accL, stroke: C.acc, sw: 1.3, rx: 8, fillOp: 0.4 })
  b.wtext(756, 910, '分子杂交是贯穿基因组时代的「底层技术」：芯片（microarray）、捕获测序乃至 CRISPR 的特异性识别，本质上都是互补配对思想的延伸。', { size: 12, fill: C.accD, maxW: 572, lh: 20 })
}

export default scene({
  title: '核酸分子杂交：印迹技术与荧光原位杂交',
  subtitle: '碱基互补配对成就的底层检测技术——Tm 物理化学、Southern/Northern 印迹范式与 FISH 原位显示',
  draw,
})
