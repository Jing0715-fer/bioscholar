// ph ch3-s3 骨骼肌兴奋-收缩偶联：肌节、偶联链与长度-张力关系
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、肌节超微结构 ============
  b.panel(30, 132, 1340, 292, { title: '一、肌节超微结构：Z 线到 Z 线的收缩机器' })
  // 区带底色（先画，垫底）
  b.rect(185, 186, 400, 122, { fill: C.panelB, fillOp: 0.7 })
  b.rect(360, 186, 50, 122, { fill: C.proL, fillOp: 0.4 })
  // Z 线与 M 线
  b.rect(106, 186, 8, 122, { fill: C.sub, rx: 2 })
  b.rect(646, 186, 8, 122, { fill: C.sub, rx: 2 })
  b.rect(381, 186, 8, 122, { fill: C.pro, rx: 2 })
  b.ctext(110, 180, 'Z 线', { size: 11, weight: 700, fill: C.sub })
  b.ctext(650, 180, 'Z 线', { size: 11, weight: 700, fill: C.sub })
  b.ctext(385, 180, 'M 线', { size: 11, weight: 700, fill: C.proD })
  // 细肌丝（上下两股）
  for (const y of [216, 274]) {
    b.line(114, y, 360, y, { stroke: C.acc, sw: 2.4 })
    b.line(646, y, 410, y, { stroke: C.acc, sw: 2.4 })
  }
  // 粗肌丝
  b.rect(185, 232, 400, 26, { fill: C.proL, stroke: C.pro, sw: 2, rx: 4 })
  // 横桥（重叠区斜杆）
  for (const x of [210, 240, 270, 300, 330]) {
    b.line(x, 233, x + 9, 219, { stroke: C.pro, sw: 1.6 })
    b.line(x, 257, x + 9, 271, { stroke: C.pro, sw: 1.6 })
  }
  for (const x of [435, 465, 495, 525, 555]) {
    b.line(x, 233, x - 9, 219, { stroke: C.pro, sw: 1.6 })
    b.line(x, 257, x - 9, 271, { stroke: C.pro, sw: 1.6 })
  }
  // 收缩方向
  b.arrow(280, 172, 345, 172, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.arrow(490, 172, 425, 172, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.text(150, 176, '收缩方向', { size: 10, fill: C.okD })
  b.ctext(240, 208, '细肌丝（肌动蛋白＋原肌球蛋白＋肌钙蛋白）', { size: 9.5, fill: C.accD })
  b.ctext(500, 208, '横桥', { size: 9.5, weight: 700, fill: C.proD })
  b.ctext(560, 208, '粗肌丝', { size: 9.5, weight: 700, fill: C.proD })
  // 区带括注
  b.braceH(114, 292, 71, { label: 'I 带（明）', size: 9.5, fill: C.accD })
  b.braceH(360, 292, 50, { label: 'H 带', size: 9.5, fill: C.proD })
  b.braceH(585, 292, 61, { label: 'I 带', size: 9.5, fill: C.accD })
  b.braceH(185, 322, 400, { label: 'A 带（暗带）：长 1.6 μm，收缩时恒定不变', size: 10, fill: C.sub })
  // 右：区带表
  b.table(820, 188, 520, {
    headers: ['区带', '组成与位置', '收缩时'],
    colW: [70, 260, 190], rowH: 24, fontSize: 10.5,
    rows: [
      ['Z 线', '细肌丝锚定的界标', '相互靠近'],
      ['I 带', '仅细肌丝（明带）', '变窄'],
      ['A 带', '粗肌丝全长＋重叠区', '长度不变'],
      ['H 带', 'A 带中央仅粗肌丝', '变窄乃至消失'],
      ['M 线', '固定粗肌丝的中央结构', '位置不变'],
    ],
  })
  b.wtext(820, 372, '粗肌丝由约 300 个肌球蛋白 II 束成（长 1.6 μm），头部朝两端侧突成横桥；细肌丝主干为肌动蛋白双螺旋，沟内卧原肌球蛋白、每约 40 nm 挂一粒肌钙蛋白（TnC/TnT/TnI）；titin 自 Z 线弹性连至 M 线，锚定粗肌丝居中并贡献被动张力；静息肌节长 2.0–2.2 μm', { maxW: 520, lh: 16.5, size: 10.5, fill: C.sub })

  // ============ 二、兴奋-收缩偶联链与钙回收 ============
  b.panel(30, 444, 780, 541, { title: '二、兴奋-收缩偶联：三联体上的快速传令与钙回收' })
  // 肌膜与 AP
  b.line(55, 500, 425, 500, { stroke: C.sub, sw: 2.5 })
  b.polyline([[90, 498], [104, 462], [116, 480], [130, 498]], { stroke: C.bad, sw: 2.2 })
  b.text(140, 490, 'AP', { size: 10.5, weight: 700, fill: C.badD })
  // T 管
  b.line(195, 500, 195, 645, { stroke: C.sub, sw: 2.2 })
  b.line(211, 500, 211, 645, { stroke: C.sub, sw: 2.2 })
  b.text(220, 522, 'T 管（A–I 交界内陷）', { size: 10, fill: C.sub })
  b.text(220, 566, 'AP 沿 T 管下传', { size: 10, weight: 700, fill: C.badD })
  b.arrow(203, 540, 203, 598, { stroke: C.bad, sw: 2, marker: 'bad' })
  // 终池（肌质网）
  b.rect(105, 610, 75, 100, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 8 })
  b.rect(226, 610, 75, 100, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 8 })
  b.ctext(142, 602, '三联体', { size: 10, weight: 700, fill: C.sub })
  b.ctext(142, 690, '终池', { size: 10.5, weight: 700, fill: C.warnD })
  b.ctext(263, 690, '终池', { size: 10.5, weight: 700, fill: C.warnD })
  // DHPR 与 RyR1（构象直连）
  b.rect(204, 618, 14, 34, { fill: C.acc, stroke: C.accD, sw: 1.2 })
  b.rect(219, 618, 14, 34, { fill: C.bad, stroke: C.badD, sw: 1.2 })
  b.rect(188, 618, 14, 34, { fill: C.acc, stroke: C.accD, sw: 1.2 })
  b.rect(173, 618, 14, 34, { fill: C.bad, stroke: C.badD, sw: 1.2 })
  b.text(312, 622, 'DHPR（电压感受器）', { size: 9.5, weight: 700, fill: C.accD })
  b.arrow(310, 618, 222, 630, { stroke: C.acc, sw: 1.2, marker: 'acc' })
  b.text(312, 650, 'RyR1', { size: 9.5, weight: 700, fill: C.badD })
  b.arrow(310, 646, 236, 640, { stroke: C.bad, sw: 1.2, marker: 'bad' })
  // Ca2+ 释放
  b.arrow(160, 712, 150, 748, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.arrow(270, 712, 280, 748, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(120, 770, 'Ca^{2+}', { r: 12, size: 8 })
  b.ion(185, 788, 'Ca^{2+}', { r: 12, size: 8 })
  b.ion(255, 788, 'Ca^{2+}', { r: 12, size: 8 })
  b.ion(310, 770, 'Ca^{2+}', { r: 12, size: 8 })
  // 右：偶联级联
  const chain: Array<[string, string, string, string]> = [
    ['① AP 沿 T 管入三联体', C.badL, C.bad, C.badD],
    ['② DHPR 构象直连（电压感受器）', C.accL, C.acc, C.accD],
    ['③ RyR1 开放、终池放钙', C.warnL, C.warn, C.warnD],
    ['④ Ca^{2+} 10^{-7}→10^{-5} mol/L', C.warnL, C.warn, C.warnD],
    ['⑤ Ca^{2+} 结合肌钙蛋白 C', C.okL, C.ok, C.okD],
    ['⑥ 原肌球蛋白移位 → 横桥开闸', C.okL, C.ok, C.okD],
    ['⑦ 舒张：SERCA 泵回 70–90%', C.dnaL, C.dna, C.dnaD],
    ['⑧ NCX / PMCA 逐出 10–30%', C.accL, C.acc, C.accD],
  ]
  chain.forEach(([s, fill, stroke, tfill], i) => {
    const cy = 495 + i * 42
    b.tag(600, cy, s, { fill, stroke, tfill, size: 11, weight: 700, pad: 9 })
    if (i < chain.length - 1) b.arrow(600, cy + 13, 600, cy + 29, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  })
  // 底部要点
  b.wtext(55, 842, '钙瞬变是兴奋与收缩的通用货币：高度决定收缩峰值（点亮的肌丝比例），衰减速率决定舒张速度——药物与激素调节肌力最常动的旋钮', { maxW: 730, lh: 16.5, size: 10.5, fill: C.sub })
  b.wtext(55, 868, '全程不需细胞外钙参与（对照心肌的钙致钙释放）；潜伏期仅数毫秒，主要耗时在钙扩散与肌钙蛋白结合', { maxW: 730, lh: 16.5, size: 10.5, fill: C.sub })
  b.wtext(55, 894, '回收：SERCA 每水解 1 ATP 泵回 2 Ca^{2+}（占 70–90%），其余经 NCX / PMCA 逐出；腔内钙网蛋白低亲和力大量缓冲、维持泵钙梯度', { maxW: 730, lh: 16.5, size: 10.5, fill: C.sub })
  b.wtext(55, 920, '临床回声：恶性高热＝RyR1 突变在挥发性麻醉下失控放钙，持续收缩与高热；快慢肌差异源于肌球蛋白 ATP 酶异构体速度与 SERCA 密度', { maxW: 730, lh: 16.5, size: 10.5, fill: C.sub })

  // ============ 三、横桥循环四步 ============
  b.panel(830, 444, 540, 250, { title: '三、横桥循环：ATP 两用的分子马达' })
  const cb = (x: number, y: number, l1: string, l2: string, fill: string, stroke: string) => {
    b.rect(x, y, 170, 56, { fill, stroke, sw: 1.8, rx: 9 })
    b.ctext(x + 85, y + 24, l1, { size: 11, weight: 700, fill: C.ink })
    b.ctext(x + 85, y + 46, l2, { size: 9.5, fill: C.sub })
  }
  cb(850, 487, '① 僵直态', '无 ATP：紧扣肌动蛋白', C.badL, C.bad)
  cb(1180, 487, '② ATP 结合 → 脱附', '亲和力骤降、横桥脱离', C.accL, C.acc)
  cb(1180, 612, '③ 水解上弦', 'ADP·Pi 滞留（高势能）', C.rnaL, C.rna)
  cb(850, 612, '④ 作功冲程', '释 Pi/ADP 划动 ~10 nm', C.okL, C.ok)
  b.arrow(1024, 515, 1176, 515, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.arrow(1265, 547, 1265, 606, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.arrow(1176, 640, 1024, 640, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.arrow(935, 606, 935, 549, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.ctext(1100, 570, '每循环耗 1 ATP', { size: 10, weight: 700, fill: C.ink })
  b.ctext(1100, 588, '收缩花钱、放松也花钱', { size: 9.5, fill: C.sub })
  b.wtext(850, 682, '尸僵＝死后 ATP 耗竭、横桥锁死；占空比低＋非同步循环 → 平滑张力', { maxW: 500, lh: 14, size: 9.5, fill: C.sub })

  // ============ 四、长度-张力关系 ============
  b.panel(830, 714, 540, 271, { title: '四、长度-张力关系（等长收缩）：最适初长的工程学' })
  b.axis(875, 945, 452, 165, {
    xticks: [[0.087, '1.6'], [0.261, '2.0'], [0.348, '2.2'], [0.609, '2.8'], [0.957, '3.6']],
    yticks: [[0.9, '100%'], [0.45, '50%']],
    xlabel: '肌节初长（μm）',
  })
  // 最适区间虚线（2.0–2.2 μm）
  b.line(993, 780, 993, 945, { stroke: C.ok, sw: 1.2, dash: '5 4' })
  b.line(1032, 780, 1032, 945, { stroke: C.ok, sw: 1.2, dash: '5 4' })
  b.curve(875, 945, 452, 165, [
    [0.087, 0.58], [0.174, 0.82], [0.261, 0.9], [0.348, 0.9],
    [0.478, 0.77], [0.609, 0.58], [0.783, 0.33], [0.957, 0.02],
  ], { stroke: C.dna, sw: 2.4, smooth: true })
  b.curve(875, 945, 452, 165, [
    [0.087, 0.0], [0.261, 0.01], [0.348, 0.03], [0.478, 0.07],
    [0.609, 0.14], [0.783, 0.27], [0.957, 0.45],
  ], { stroke: C.rna, sw: 2, dash: '6 4', smooth: true })
  b.curve(875, 945, 452, 165, [
    [0.087, 0.58], [0.261, 0.91], [0.348, 0.93], [0.478, 0.84],
    [0.609, 0.72], [0.783, 0.6], [0.957, 0.47],
  ], { stroke: C.sub, sw: 2.2, smooth: true })
  b.legend(885, 764, [['主动张力', C.dna], ['被动张力', C.rna], ['总张力', C.sub]], { size: 10 })
  b.text(1055, 784, '总张力', { size: 10, weight: 700, fill: C.sub })
  b.text(1135, 834, '主动张力', { size: 10, weight: 700, fill: C.dnaD })
  b.text(1260, 860, '被动张力', { size: 10, weight: 700, fill: C.rnaD })
  b.text(885, 794, '升支：细肌丝互扰', { size: 9.5, fill: C.sub })
  b.text(1245, 930, '3.6 μm 脱离归零', { size: 9, fill: C.mute })
  b.text(871, 984, '最适初长 2.0–2.2 μm', { size: 10, weight: 700, fill: C.okD })
}

export default scene({
  title: '骨骼肌兴奋-收缩偶联：从动作电位到横桥循环',
  subtitle: '动作电位沿 T 管传入三联体，DHPR 构象直连拽开 RyR1，终池放钙使胞质 Ca^{2+} 从 10^{-7} 跃至 10^{-5} mol/L 开启横桥循环（每圈耗 1 ATP）；舒张由 SERCA 泵钙完成（占回收 70–90%）；最适初长 2.0–2.2 μm 处横桥重叠最优、主动张力最大',
  draw,
})
