// bp ch4-s3 肌球蛋白 II 与肌肉收缩的摆动横桥模型（39-e 批2）
import { scene, C, B } from '../../lib'

/** 横桥卡片：图标 + 标题 + 说明 */
const bridgeCard = (b: B, x0: number, num: string, title: string, text: string, bound: boolean, stroked: boolean, tagLabel: string, tagC: [string, string, string]) => {
  const y0 = 468
  b.rect(x0, y0, 310, 228, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  // 肌动蛋白丝（细丝）
  b.line(x0 + 22, 552, x0 + 288, 552, { stroke: C.bad, sw: 2.6 })
  b.line(x0 + 22, 558, x0 + 288, 558, { stroke: C.bad, sw: 2.6 })
  // 头部（结合/游离）
  const hy = bound ? 538 : 520
  b.circle(x0 + 120, hy, 12, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  // 杆杆臂（上弦 / 冲程后）
  if (stroked) {
    b.line(x0 + 128, hy - 8, x0 + 168, 486, { stroke: C.accD, sw: 4 })
    b.path(`M ${x0 + 95},${hy - 25} Q ${x0 + 120},470 ${x0 + 150},488`, { stroke: C.enz, sw: 2, dash: '5 4', marker: 'enz', fill: 'none' })
  } else {
    b.line(x0 + 112, hy - 8, x0 + 78, 478, { stroke: C.pro, sw: 4 })
  }
  // 化学态标签
  b.tag(x0 + 218, 498, tagLabel, { fill: tagC[0], stroke: tagC[1], size: 10, weight: 700, tfill: tagC[2], pad: 7 })
  b.text(x0 + 16, y0 + 132, `${num} ${title}`, { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(x0 + 16, y0 + 154, text, { size: 10, fill: C.sub, maxW: 280, lh: 13.5 })
}

const draw = (b: B) => {
  // ============ 一、肌节与滑动丝学说 ============
  b.panel(30, 132, 1340, 268, { title: '一、肌节与滑动丝学说（1954）：粗丝细丝长度不变，细丝向 M 线滑入' })

  // Z 盘
  b.rect(146, 195, 8, 120, { fill: C.sub, rx: 2 })
  b.rect(1246, 195, 8, 120, { fill: C.sub, rx: 2 })
  b.ctext(150, 186, 'Z 盘', { size: 11, weight: 700, fill: C.ink })
  b.ctext(1250, 186, 'Z 盘', { size: 11, weight: 700, fill: C.ink })
  // 细丝（自 Z 盘伸入）
  b.line(154, 212, 660, 212, { stroke: C.bad, sw: 3 })
  b.line(154, 298, 660, 298, { stroke: C.bad, sw: 3 })
  b.line(740, 212, 1246, 212, { stroke: C.bad, sw: 3 })
  b.line(740, 298, 1246, 298, { stroke: C.bad, sw: 3 })
  // 粗丝（myosin II 双极）
  b.rect(430, 236, 540, 28, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(700, 254, 'myosin II 双极粗丝（长 ~1.6 μm）', { size: 10.5, weight: 700, fill: C.proD })
  // 横桥（头部小钩）
  for (const x of [450, 500, 550, 600, 650, 750, 800, 850, 900, 950]) {
    b.line(x, 236, x + 10, 222, { stroke: C.pro, sw: 2 })
    b.line(x, 264, x + 10, 278, { stroke: C.pro, sw: 2 })
  }
  // M 线
  b.line(700, 226, 700, 274, { stroke: C.sub, sw: 1.6, dash: '5 4' })
  b.ctext(700, 222, 'M 线', { size: 9.5, fill: C.mute })
  // 收缩箭头（细丝滑入）
  b.arrow(240, 322, 330, 322, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.arrow(1160, 322, 1070, 322, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.ctext(700, 326, '收缩：细丝向 M 线滑入', { size: 11, weight: 700, fill: C.bad })
  // 带区标注
  b.braceH(152, 348, 278, { label: 'I 带（仅细丝）', size: 11 })
  b.braceH(430, 348, 540, { label: 'A 带（粗丝 + 重叠）', size: 11 })
  b.braceH(970, 348, 278, { label: 'I 带', size: 11 })
  // 静息长度
  b.line(150, 388, 1250, 388, { stroke: C.mute, sw: 1.4, markerStart: 'mute', marker: 'mute' })
  b.ctext(700, 382, '静息肌节长 ~2.2 μm', { size: 10, fill: C.mute })
  b.legend(880, 172, [['粗丝（myosin II）', C.pro], ['细丝（肌动蛋白 + 原肌球蛋白 + 肌钙蛋白）', C.bad]], { size: 10.5, gap: 18 })

  // ============ 二、Lymn–Taylor 摆动横桥循环 ============
  b.panel(30, 424, 1340, 330, { title: '二、Lymn–Taylor 摆动横桥循环（1971）：ATP → 构象应变 → 机械冲程' })

  bridgeCard(b, 46, '①', '待发态（上弦）', '头部持有 ADP·Pi，杠杆臂处于预存应变的高能构象——像上满弦的发条。', false, false, 'ADP·Pi', [C.enzL, C.enz, C.enzD])
  bridgeCard(b, 378, '②', '结合', 'Ca²⁺ 经肌钙蛋白–原肌球蛋白开关暴露细丝结合位点；头部与肌动蛋白弱结合 → 强结合。', true, false, 'Ca²⁺ 开关', [C.warnL, C.warn, '#78350f'])
  bridgeCard(b, 710, '③', '冲程（做功）', 'Pi 与 ADP 依次释放，杠杆臂相对肌动蛋白摆动 5–10 nm，拖动细丝——单个冲程力约 3–5 pN。', true, true, 'Pi、ADP 释放', [C.accL, C.acc, C.accD])
  bridgeCard(b, 1042, '④', '再武装', '新 ATP 结合使头部脱离细丝；ATP 水解把杠杆臂重新「上弦」，进入下一轮循环。', false, false, 'ATP', [C.dnaL, C.dna, C.dnaD])

  // 卡间箭头 + 回环箭头
  b.arrow(358, 590, 375, 590, { stroke: C.ink, sw: 2.4 })
  b.arrow(690, 590, 707, 590, { stroke: C.ink, sw: 2.4 })
  b.arrow(1022, 590, 1039, 590, { stroke: C.ink, sw: 2.4 })
  b.path('M 1197,700 C 1197,732 201,732 201,700', { stroke: C.mute, sw: 2, marker: 'mute', fill: 'none' })
  b.ctext(700, 750, '循环往复', { size: 10.5, fill: C.mute })
  // 冲程距离标注（卡③）
  b.arrow(830, 545, 878, 545, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(854, 536, '5–10 nm', { size: 9.5, weight: 700, fill: C.bad })

  // ============ 三、从分子到整肌 ============
  b.panel(30, 778, 1340, 202, { title: '三、从分子到整肌：非同步循环与宏观力学' })

  // 卡 1：非同步
  b.rect(46, 810, 310, 120, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(62, 836, '非同步循环 → 平滑张力', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(62, 860, '整根粗丝上数百个头处于循环的不同相位，总张力平滑不掉线。', { size: 10, fill: C.sub, maxW: 278, lh: 13.5 })

  // 卡 2：力–速度关系
  b.rect(376, 810, 310, 120, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(392, 836, '力–速度关系（Hill 方程）', { size: 12.5, weight: 700, fill: C.ink })
  b.line(400, 912, 660, 912, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.line(400, 845, 400, 912, { stroke: C.sub, sw: 1.6 })
  b.spline([[402, 850], [430, 896], [485, 906], [570, 909], [656, 910]], { stroke: C.acc, sw: 2.6 })
  b.ctext(648, 926, '速度 →', { size: 9, fill: C.mute })
  b.ctext(388, 852, '力', { size: 9, fill: C.mute })
  b.wtext(470, 862, '横桥循环速率随负荷减慢的宏观表现', { size: 9.5, fill: C.sub, maxW: 200, lh: 12.5 })

  // 卡 3：最大比张力
  b.rect(706, 810, 310, 120, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(722, 836, '最大等长比张力', { size: 12.5, weight: 700, fill: C.ink })
  b.ctext(861, 878, '≈ 0.3 MPa', { size: 22, weight: 700, fill: C.accD })
  b.ctext(861, 906, '（30 N/cm²）——数百万横桥力之和', { size: 10, fill: C.sub })

  // 卡 4：兴奋–收缩耦联
  b.rect(1036, 810, 310, 120, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(1052, 836, '兴奋–收缩耦联', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(1052, 860, '动作电位沿肌膜与 T 管传入 → 肌浆网 RyR 释放 Ca²⁺ → 与肌钙蛋白 C 结合，解除原肌球蛋白的位阻。', { size: 10, fill: C.sub, maxW: 278, lh: 13.5 })

  b.wtext(46, 948, 'ATP 供给由磷酸肌酸缓冲；疲劳与僵直（rigor，ATP 耗尽使横桥不可逆锁死）都从能量学得到解释——摆动横桥模型把宏观肌肉力学一路还原到「ATP → 构象应变 → 机械冲程」的分子事件链。', { size: 10, fill: C.mute, maxW: 1280, lh: 13 })
}

export default scene({
  title: '肌球蛋白 II 与肌肉收缩：滑动丝学说与摆动横桥循环',
  subtitle: '肌节静息 ~2.2 μm（粗丝 ~1.6 μm）；Lymn–Taylor 循环：ADP·Pi 待发 → Ca²⁺ 暴露位点结合 → 杠杆臂摆 5–10 nm（力 3–5 pN）→ ATP 再武装；整肌最大比张力 ≈ 0.3 MPa',
  draw,
})
