// em ch9-s2 倾斜系列的收集与对位（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、SerialEM 自动化收集 ============
  b.panel(30, 132, 660, 412, { title: '一、SerialEM：预测模型驱动的自动收集' })
  const ax = 80, ay = 420, aw = 360, ah = 220
  b.axis(ax, ay, aw, ah, {
    grid: false,
    xticks: [[0, '−60°'], [0.5, '0°'], [1, '+60°']],
    yticks: [[0, '0'], [1, '位置偏差']],
    title: '预测先行、实测微调',
  })
  const meas: [number, number][] = [[0.05, 0.12], [0.15, 0.28], [0.25, 0.42], [0.35, 0.5], [0.45, 0.55], [0.55, 0.53], [0.65, 0.44], [0.75, 0.3], [0.85, 0.16], [0.95, 0.08]]
  b.curve(ax, ay, aw, ah, meas, { stroke: C.dna, sw: 2.4, smooth: true })
  // 预测点：下一倾角位置由多项式轨迹外推
  b.circle(ax + 0.8 * aw, ay - 0.18 * ah, 5.5, { fill: '#ffffff', stroke: C.acc, sw: 2.2 })
  b.arrow(ax + 0.72 * aw, ay - 0.33 * ah, ax + 0.78 * aw, ay - 0.2 * ah, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(ax + 0.82 * aw + 6, ay - 0.24 * ah, '外推预测点', { size: 10, weight: 700, fill: C.accD })
  b.ctext(ax + 0.3 * aw, ay - 0.75 * ah, '实线＝已测倾角轨迹', { size: 9.5, fill: C.dnaD })
  b.wtext(470, 190, 'SerialEM（Mastronarde 2005）学习样品台与物镜的行为：倾转后的位移、焦面漂移、图像偏移与束偏转的联动——下一张按预测先行补偿，实测只剩微调；倾角等间隔利于多项式外推。', { size: 10, fill: C.sub, maxW: 190, lh: 14 })
  b.tag(560, 320, '剂量跟踪', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(560, 352, '焦点跟踪', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(560, 384, '低倍预扫选区', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(280, 478, '单套系列典型 20–60 分钟', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })
  b.tag(560, 478, '每小时 1–2 套', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })

  // ============ 二、对位：金珠与图像块 ============
  b.panel(710, 132, 660, 412, { title: '二、对位：fiducial 金珠与 patch tracking' })
  // 微图 + 金珠
  const mx = 740, my = 186, mw = 220, mh = 170
  b.rect(mx, my, mw, mh, { fill: '#f8fafc', stroke: C.sub, sw: 1.8 })
  for (let i = 0; i < 10; i++) {
    const gx = mx + 20 + ((Math.sin(i * 91.7) * 7351.3) % 1 + 1) % 1 * (mw - 40)
    const gy = my + 20 + ((Math.sin(i * 45.3) * 9127.7) % 1 + 1) % 1 * (mh - 40)
    b.circle(gx, gy, 5, { fill: C.warn, stroke: C.warnD, sw: 1.2 })
    b.circle(gx, gy, 1.8, { fill: C.warnD })
    if (i < 4) b.circle(gx, gy, 13, { fill: 'none', stroke: C.warn, sw: 1, dash: '3 3', opacity: 0.7 })
  }
  b.ellipse(mx + 150, my + 120, 26, 18, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.ctext(mx + mw / 2, my + mh + 18, '5–10 nm 胶体金珠（两面撒布）', { size: 10, weight: 700, fill: C.sub })
  b.ctext(mx + mw / 2, my + mh + 34, '每图 8–15 颗均匀分布为宜', { size: 9.5, fill: C.mute })
  // patch 块
  const px = 990, py = 186
  b.rect(px, py, 220, 170, { fill: '#f8fafc', stroke: C.sub, sw: 1.8 })
  for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) {
    b.rect(px + 10 + i * 52, py + 10 + j * 52, 40, 40, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.2 })
  }
  b.ctext(px + 110, py + 170 + 18, 'patch tracking：图像块互相关', { size: 10, weight: 700, fill: C.sub })
  b.ctext(px + 110, py + 170 + 34, '块 128–512 像素、约半重叠', { size: 9.5, fill: C.mute })
  b.table(740, 400, 620, {
    headers: ['方法', '锚点', '精度', '适用'],
    colW: [150, 160, 110, 200], rowH: 24, fontSize: 10,
    rows: [
      ['fiducial 金珠', '5–10 nm 胶体金', '亚像素', '常规冷冻断层'],
      ['patch tracking', '图像块互相关', '近亚像素', '无珠样品（免制样扰动）'],
    ],
  })
  b.ctext(1050, 500, '对位精度须优于 1 像素，否则高频在叠加中互相对消', { size: 10, weight: 700, fill: C.badD })
  b.wtext(740, 522, '金珠法逐张跟踪高衬度点，全局一次解算「平移、旋转、放大率变化、剪切」的仿射几何模型。', { size: 9.5, fill: C.mute, maxW: 620, lh: 13 })

  // ============ 三、倾转的物理代价 ============
  b.panel(30, 572, 660, 398, { title: '三、倾转的物理代价：有效厚度与逐张 CTF' })
  const tx = 70, ty = 856, tw = 330, th = 190
  b.axis(tx, ty, tw, th, {
    grid: false,
    xticks: [[0, '0°'], [0.5, '30°'], [1, '60°']],
    yticks: [[0, '1'], [0.5, '2'], [1, '']],
    ylabel: '相对厚度',
    title: '有效厚度按 1/cos θ 膨胀',
  })
  const eff: [number, number][] = []
  for (let i = 0; i <= 60; i++) {
    const t = i / 60
    const ang = t * (Math.PI / 3)
    eff.push([t, (1 / Math.cos(ang) - 1) / 2])
  }
  b.curve(tx, ty, tw, th, eff, { stroke: C.warn, sw: 2.6 })
  b.line(tx + tw, ty, tx + tw, ty - th * 0.5, { stroke: C.bad, sw: 1.4, dash: '4 4' })
  b.circle(tx + tw, ty - th * 0.5, 4.5, { fill: C.bad })
  b.ctext(tx + tw - 40, ty - th * 0.62, '60° 处翻倍', { size: 10, weight: 700, fill: C.badD })
  b.wtext(430, 620, '样品只有几十纳米厚，倾到 60 度时电子要斜穿的有效厚度翻倍：非弹性散射与多重散射随之加重，剂量-厚度-分辨率三角更紧。', { size: 10.5, fill: C.sub, maxW: 240, lh: 15 })
  b.wtext(430, 700, '高倾角欠焦差可达数微米——同一张投影内边对边失焦不一，逐张 CTF 以条带拟合或多焦点（multi-focus）处理。', { size: 10.5, fill: C.sub, maxW: 240, lh: 15 })
  b.tag(550, 800, '网格杆遮挡：能倾满的区域常不足两成', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 9 })
  b.ctext(360, 880, '翘曲与杆遮挡使可用区域收窄，低倍预扫先行排除', { size: 9.5, fill: C.mute })

  // ============ 四、cryo-FIB 铣薄 ============
  b.panel(710, 572, 660, 398, { title: '四、cryo-FIB 铣薄：为原位铺路' })
  // 细胞 → lamella
  b.ellipse(790, 660, 52, 34, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(790, 660, '细胞', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(790, 706, '厚 5–10 μm', { size: 9.5, fill: C.mute })
  b.ctext(790, 722, '对 300 kV 近乎不透明', { size: 9.5, fill: C.mute })
  b.arrow(860, 660, 920, 660, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.text(890, 644, 'Ga^{+}', { size: 10, fill: C.accD })
  b.ctext(890, 684, '30 kV', { size: 9.5, fill: C.accD })
  b.rect(940, 636, 130, 48, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  b.rect(990, 636, 26, 48, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(1005, 700, 'lamella 100–300 nm', { size: 10, weight: 700, fill: C.sub })
  b.ctext(1005, 716, '先溅射沉积铂保护表面', { size: 9.5, fill: C.mute })
  b.tag(900, 760, '粗铣：数百 pA 梯度递减', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 9 })
  b.tag(1170, 760, '抛光：10–50 pA 收尾', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 9 })
  // 收集链条
  const chain = ['CLEM 定位', 'FIB 铣削', '剂量对称收集', '对位', '逐张 CTF', '重构']
  chain.forEach((s, i) => {
    const cx = 762 + i * 103
    b.tag(cx, 812, s, { fill: i === 2 ? C.accL : C.panelB, stroke: i === 2 ? C.acc : C.line, size: 9.5, weight: 600, tfill: i === 2 ? C.accD : C.sub, pad: 7 })
    if (i < chain.length - 1) b.arrow(cx + 38, 812, cx + 62, 812, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  })
  b.wtext(730, 856, 'Mahamid 等 2016 年对 HeLa 细胞的冷冻断层研究（Science）演示这条路线：核周细胞质中蛋白酶体等大分子机器的原位可视化，「原位结构生物学」的引路案例。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })
  b.tag(1000, 930, '散射账本：弹性平均自由程约 100–300 nm，透射成像须压进数百纳米', { fill: C.rnaL, stroke: C.rna, size: 10, weight: 700, tfill: C.rnaD, pad: 8 })
}

export default scene({
  title: '倾斜系列的收集与对位：从 SerialEM 到 FIB lamella',
  subtitle: 'SerialEM 预测模型自动收集（单套 20–60 分钟、每小时 1–2 套）；fiducial 金珠亚像素对位（每图 8–15 颗）或 patch tracking；60° 处有效厚度按 1/cos θ 翻倍；cryo-FIB 以 Ga 离子 30 kV 铣成 100–300 nm lamella',
  draw,
})
