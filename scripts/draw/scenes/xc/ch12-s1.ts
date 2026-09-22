// xc ch12-s1 串行晶体学与 XFEL（Task XC-3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、XFEL 光源三数字 ============
  b.panel(30, 132, 660, 430, { title: '一、XFEL：把光源推到亮度之巅' })
  const chain = (x: number, t: string, s: string) => {
    b.rect(x, 186, 134, 62, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8 })
    b.ctext(x + 67, 210, t, { size: 11.5, weight: 700, fill: C.accD })
    b.ctext(x + 67, 232, s, { size: 9, fill: C.sub })
  }
  chain(58, '直线加速器', '电子团加速至数十亿 eV')
  chain(212, '波荡器（数十米）', '磁阵列中扭摆辐射')
  chain(366, 'SASE 增益', '辐射与电子团相互调制')
  chain(520, '飞秒巨脉冲', '高度相干、指数放大')
  b.arrow(194, 217, 210, 217, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(348, 217, 364, 217, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(502, 217, 518, 217, { stroke: C.acc, sw: 2, marker: 'acc' })
  // 三数字卡片
  const card = (x: number, lab: string, val: string, sub: string) => {
    b.rect(x, 262, 192, 86, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 9 })
    b.ctext(x + 96, 286, lab, { size: 10, weight: 600, fill: C.mute })
    b.ctext(x + 96, 316, val, { size: 19, weight: 700, fill: C.ink })
    b.ctext(x + 96, 338, sub, { size: 8.5, fill: C.sub })
  }
  card(58, '脉宽', '10–100 fs', '短于损伤时标')
  card(264, '每脉冲光子', '约 10^{12} 个', '一颗微晶一发即够')
  card(470, '峰值亮度', '高约 9 个数量级', '对第三代同步辐射')
  // 装置时间线
  b.timelineH(80, 430, 560, [
    { at: 0.14, label: 'LCLS 2009', sub: 'SLAC · 世界首台硬X射线 FEL', above: true },
    { at: 0.5, label: 'SACLA 2012', sub: '日本', above: false },
    { at: 0.88, label: 'European XFEL 2017', sub: '汉堡 · 每秒 27000 脉冲', above: true },
  ])
  b.wtext(56, 524, '亮度的直观读法：一颗 1 μm 的微晶在旧光源上曝光数秒、损伤殆尽也攒不够光子，在 XFEL 上一发即够——「可测晶体」的尺寸下限从几十微米改写到亚微米，第 5 章那堵 Henderson 极限（20 至 30 MGy）第一次有了绕开的可能。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })

  // ============ 二、衍射先于破坏 ============
  b.panel(710, 132, 660, 430, { title: '二、衍射先于破坏：一场与时间的赛跑' })
  // 时间轴
  b.arrow(750, 214, 1340, 214, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  const tk = (x: number, s: string) => {
    b.line(x, 208, x, 220, { stroke: C.sub, sw: 1.8 })
    b.ctext(x, 234, s, { size: 9.5, fill: C.mute })
  }
  tk(758, '阿秒')
  tk(812, '10 fs')
  tk(888, '100 fs')
  tk(990, '数百 fs')
  tk(1096, '1 ps')
  tk(1210, '1 ns')
  // 三条时间带
  b.rect(750, 256, 120, 28, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(810, 274, '飞秒脉冲', { size: 9.5, weight: 700, fill: C.accD })
  b.text(884, 274, '约 10^{12} 个光子压入 10–100 fs', { size: 10, fill: C.sub })
  b.rect(750, 296, 120, 28, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.ctext(810, 314, '衍射完成', { size: 9.5, weight: 700, fill: C.okD })
  b.text(884, 314, '原子位置在最初几十飞秒内几乎未动', { size: 10, fill: C.sub })
  b.rect(840, 336, 290, 28, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(985, 354, '光电子级联与原子位移（数十至数百 fs）', { size: 9.5, weight: 700, fill: C.badD })
  b.line(888, 246, 888, 372, { stroke: C.mute, sw: 1.6, dash: '6 4' })
  b.ctext(888, 388, '原子开始移动', { size: 9, fill: C.mute })
  b.tag(1080, 406, '样品是一次性的，数据是永久的', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 11.5, weight: 700, pad: 12 })
  // 里程碑三行
  const mile = (y: number, yr: string, s: string) => {
    b.rect(736, y, 64, 20, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 5 })
    b.ctext(768, y + 14, yr, { size: 10, weight: 700, fill: C.accD })
    b.text(812, y + 14, s, { size: 9.8, fill: C.sub })
  }
  mile(424, '2000', 'Neutze 等 · Nature：理论预言——辐射损伤需要时间，脉冲足够短则衍射先行')
  mile(452, '2011', 'Chapman 等 · LCLS：Photosystem I 纳米晶体首证——晶体湮灭而图案已写入探测器')
  mile(480, '2012', 'Boutet 等：溶菌酶证明该路线可达 1.9 Å，工程可行性就此钉牢')
  // 两点纪律
  b.rect(736, 508, 588, 48, { fill: C.warnL, stroke: C.warn, sw: 1.5, rx: 8 })
  b.text(752, 526, '两点纪律', { size: 10.5, weight: 700, fill: C.warnD })
  b.wtext(752, 542, '① 「先于破坏」不等于零损伤：脉冲内电离已经开始，反常信号仍随剂量衰减；② 相位问题与指标化照旧——XFEL 改变的是剂量的算术，不是衍射的物理。', { size: 9.5, fill: C.sub, maxW: 560, lh: 12 })

  // ============ 三、进样两路与命中率 ============
  b.panel(30, 572, 660, 390, { title: '三、进样两路：液体射流与固定靶，命中率对照' })
  // 左：GDVN 射流
  b.rect(120, 616, 110, 24, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 5 })
  b.ctext(175, 632, 'GDVN 喷嘴', { size: 10, weight: 700, fill: C.accD })
  b.line(175, 640, 175, 762, { stroke: C.acc, sw: 5, opacity: 0.6 })
  ;[656, 684, 712, 740].forEach(y => b.circle(175, y, 5.5, { fill: C.dnaL, stroke: C.dna, sw: 1.6 }))
  b.arrow(70, 690, 160, 690, { stroke: C.bad, sw: 2.6, marker: 'bad' })
  b.ctext(102, 676, 'XFEL 光束', { size: 9, weight: 700, fill: C.badD })
  b.rect(238, 656, 64, 68, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 4 })
  b.ctext(270, 682, '探测器', { size: 9.5, weight: 700, fill: C.sub })
  b.ctext(270, 700, '图案即数据', { size: 8, fill: C.mute })
  b.line(181, 690, 238, 668, { stroke: C.enz, sw: 1.6 })
  b.line(181, 690, 238, 690, { stroke: C.enz, sw: 1.6 })
  b.line(181, 690, 238, 712, { stroke: C.enz, sw: 1.6 })
  b.wtext(56, 780, 'GDVN 气动聚焦：同轴气体把液流聚焦成微米级射流，微晶依次穿过光斑；空射在所难免。', { size: 9.5, fill: C.sub, maxW: 264, lh: 13 })
  // 右：固定靶芯片
  b.ctext(504, 612, '固定靶硅芯片：微孔阵列分装微晶', { size: 10, weight: 700, fill: C.sub })
  b.rect(386, 620, 236, 112, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 6 })
  const hit: [number, number][] = [[1, 0], [3, 1], [4, 0], [2, 2], [5, 1], [0, 3], [3, 3], [5, 3]]
  for (let i = 0; i < 6; i++) for (let j = 0; j < 4; j++) {
    b.rect(392 + i * 38, 626 + j * 26, 34, 22, { fill: '#ffffff', stroke: C.line, sw: 1.1, rx: 3 })
    if (hit.some(([ci, cj]) => ci === i && cj === j)) b.circle(409 + i * 38, 637 + j * 26, 4.5, { fill: C.enzL, stroke: C.enz, sw: 1.4 })
  }
  b.polyline([[378, 637], [630, 637], [630, 663], [378, 663], [378, 689], [630, 689], [630, 715], [378, 715]], { stroke: C.mute, sw: 1.5, dash: '5 4', opacity: 0.85, marker: 'mute' })
  b.wtext(350, 758, '光栅式步进扫描逐坑读数：晶体位置已知，样品消耗低一个量级；芯片便于预先加样与在位触发（第 2 节的混合实验正需要它）。', { size: 9.5, fill: C.sub, maxW: 300, lh: 13 })
  // 命中率对照
  b.text(56, 840, '命中率（打到晶体的脉冲比例）', { size: 11, weight: 700, fill: C.ink })
  ;[0, 96, 240, 480].forEach((dx, i) => {
    b.line(170 + dx, 850, 170 + dx, 916, { stroke: C.faint, sw: 1, dash: '4 4' })
    b.ctext(170 + dx, 930, ['0%', '10%', '25%', '50%'][i], { size: 9, fill: C.mute })
  })
  b.etext(162, 868, '液体射流', { size: 10, fill: C.sub })
  b.rect(180, 852, 76, 26, { fill: C.warnL, stroke: C.warn, sw: 1.7 })
  b.ctext(218, 869, '1%–10%', { size: 9.5, weight: 700, fill: C.warnD })
  b.etext(162, 900, '固定靶', { size: 10, fill: C.sub })
  b.rect(458, 884, 192, 26, { fill: C.okL, stroke: C.ok, sw: 1.7 })
  b.ctext(554, 901, '数十个百分点', { size: 9.5, weight: 700, fill: C.okD })
  b.wtext(56, 946, 'LCP 注射器（Weierstall 等 2014）以每分钟纳升级慢速挤出脂立方相——膜蛋白微晶不离开脂环境即可测数；SSX 把串晶哲学带回同步辐射：每晶数帧极低剂量，数十至数百颗合并成套。', { size: 9.5, fill: C.mute, maxW: 610, lh: 12.5 })

  // ============ 四、合并统计与剂量新账 ============
  b.panel(710, 572, 660, 390, { title: '四、从百万图案到一套数据：合并统计与剂量新账' })
  const step = (x: number, y: number, t: string, s: string) => {
    b.rect(x, y, 188, 58, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
    b.ctext(x + 94, y + 24, t, { size: 11, weight: 700, fill: C.accD })
    b.ctext(x + 94, y + 43, s, { size: 8.8, fill: C.sub })
  }
  step(738, 618, '数万–百万张静止图案', '每颗晶体一张、取向随机')
  step(943, 618, '逐张指标化', '索引率可站上数十个百分点')
  step(1148, 618, '积分', '反射普遍部分记录')
  step(738, 700, 'Monte Carlo 平均', '以图案数压涨落与噪声')
  step(943, 700, 'post-refinement', '精化各晶参数与比例因子')
  step(1148, 700, '完整数据集', 'R_{split} 与 CC_{1/2} 监控')
  b.arrow(928, 647, 941, 647, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(1133, 647, 1146, 647, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(928, 729, 941, 729, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(1133, 729, 1146, 729, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.line(1242, 676, 1242, 688, { stroke: C.acc, sw: 1.8 })
  b.line(1242, 688, 832, 688, { stroke: C.acc, sw: 1.8 })
  b.arrow(832, 688, 832, 698, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.wtext(738, 782, '多重性按「每反射的图案数」计——高多重性意味着百万级图案；微晶制备产能（毫克级）与束流时间，是实验设计最先要算的两笔账。CrystFEL（White 等 2012）与 DIALS 的串晶分支以「边收边合并」的在线闭环，把数百万图案的周转压到小时级。', { size: 9.5, fill: C.sub, maxW: 596, lh: 13 })
  // 剂量范式转移
  b.rect(738, 838, 596, 106, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 9 })
  b.text(754, 860, '剂量范式转移：从预算到军团', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(886, 896, '单晶剂量预算：20–30 MGy', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10.5, weight: 700, pad: 10 })
  b.arrow(1000, 896, 1052, 896, { stroke: C.ink, sw: 2.4, marker: 'ink' })
  b.tag(1180, 896, '每晶一次曝光·单发可越过 Henderson 极限', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10, weight: 700, pad: 9 })
  b.wtext(754, 926, '损伤发生在记录之后——只要晶体供给源源不断，总数据量就没有天花板：从「保护一颗晶体」到「消耗一支晶体军团」，第 3 章的高通量筛选与微晶种放大恰为军团准备了兵员。', { size: 9.5, fill: C.mute, maxW: 564, lh: 12.5 })
}

export default scene({
  title: '串行晶体学与 XFEL：衍射先于破坏',
  subtitle: '脉宽 10–100 fs、每脉冲约 10^{12} 光子、亮度高约 9 个数量级；液体射流命中率 1%–10%、固定靶数十个百分点；数万至百万张图案 Monte Carlo 合并',
  draw,
})
