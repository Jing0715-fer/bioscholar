// sb ch5-s3 结晶的实验方法：五法横截面对照（Task SB-2）
import { scene, C, B } from '../../lib'

// 微晶菱形（小晶体符号）
function crystal(b: B, cx: number, cy: number, r: number, o: { fill?: string; stroke?: string; sw?: number } = {}) {
  b.polygon([[cx, cy - r], [cx + r, cy], [cx, cy + r], [cx - r, cy]], { fill: o.fill ?? C.bg, stroke: o.stroke ?? C.pro, sw: o.sw ?? 1.4 })
}

const draw = (b: B) => {
  // ============ 一、五法横截面对照 ============
  b.panel(30, 132, 1340, 440, { title: '一、结晶五法横截面对照（过饱和的三条来路）' })
  const cxs = [164, 432, 700, 968, 1236]
  const titles = ['① 悬滴蒸气扩散', '② 坐滴蒸气扩散', '③ 微批量（油封）', '④ 微透析（钮）', '⑤ 自由界面扩散']
  cxs.forEach((cx, i) => b.ctext(cx, 186, titles[i], { size: 12, weight: 700, fill: C.ink }))

  // ---- ① 悬滴 ----
  b.rect(64, 208, 200, 8, { fill: C.panelB, stroke: C.sub, sw: 1.5 })
  b.etext(262, 204, '硅化盖片', { size: 9.5, fill: C.mute })
  b.circle(74, 216, 5, { fill: C.warnL, stroke: C.warn, sw: 1.2 })
  b.circle(254, 216, 5, { fill: C.warnL, stroke: C.warn, sw: 1.2 })
  b.line(84, 216, 84, 352, { stroke: C.sub, sw: 2 })
  b.line(244, 216, 244, 352, { stroke: C.sub, sw: 2 })
  b.line(84, 352, 244, 352, { stroke: C.sub, sw: 2 })
  b.rect(86, 306, 156, 44, { fill: C.accL, fillOp: 0.85 })
  b.ctext(164, 332, '池液 500 μL', { size: 9.5, weight: 700, fill: C.accD })
  b.ellipse(164, 244, 26, 20, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  crystal(b, 156, 240, 5)
  crystal(b, 173, 247, 4)
  b.etext(126, 240, '液滴 1–2 μL', { size: 9.5, fill: C.proD })
  b.path('M 138,268 Q 118,290 116,304', { fill: 'none', stroke: C.acc, sw: 1.5, dash: '4 4', marker: 'acc' })
  b.path('M 190,268 Q 210,290 212,304', { fill: 'none', stroke: C.acc, sw: 1.5, dash: '4 4', marker: 'acc' })
  b.text(96, 288, '水汽', { size: 9, fill: C.accD })
  b.etext(232, 288, '水汽', { size: 9, fill: C.accD })
  b.ctext(164, 396, '24 孔 VDX 板 · 真空脂封边', { size: 9.5, fill: C.mute })

  // ---- ② 坐滴 ----
  b.polygon([[424, 204], [440, 204], [434, 224], [430, 224]], { fill: C.panelB, stroke: C.sub, sw: 1.4 })
  b.text(446, 216, '0.2–1 μL', { size: 9.5, fill: C.sub })
  b.rect(352, 240, 160, 115, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.rect(354, 310, 156, 43, { fill: C.accL, fillOp: 0.85 })
  b.ctext(378, 334, '池液', { size: 9.5, weight: 700, fill: C.accD })
  b.rect(402, 270, 60, 43, { fill: C.bg, stroke: C.sub, sw: 1.6 })
  b.ellipse(432, 264, 27, 17, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  crystal(b, 424, 262, 4)
  crystal(b, 441, 266, 3.5)
  b.etext(398, 292, '凸台', { size: 9.5, fill: C.mute })
  b.ctext(432, 396, '96 孔板 · 机器人铺板 · 自动成像', { size: 9.5, fill: C.mute })

  // ---- ③ 微批量 ----
  b.rect(620, 225, 160, 130, { fill: C.bg, stroke: C.sub, sw: 1.8, rx: 8 })
  b.rect(622, 227, 156, 56, { fill: C.warnL, fillOp: 0.9 })
  b.ctext(700, 244, '石蜡油 + 硅油', { size: 9.5, weight: 700, fill: C.warnD })
  b.circle(700, 320, 24, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  crystal(b, 692, 316, 4)
  crystal(b, 709, 323, 3.5)
  b.arrow(676, 296, 670, 258, { stroke: C.acc, sw: 1.3, dash: '4 3', marker: 'acc' })
  b.arrow(724, 296, 730, 258, { stroke: C.acc, sw: 1.3, dash: '4 3', marker: 'acc' })
  b.ctext(700, 396, '1–2 μL 直接混合 · 封于油下', { size: 9.5, fill: C.mute })

  // ---- ④ 微透析 ----
  b.rect(888, 252, 160, 100, { fill: C.accL, fillOp: 0.5, stroke: C.sub, sw: 1.8, rx: 6 })
  b.rect(928, 222, 80, 50, { fill: C.proL, stroke: C.pro, sw: 2, rx: 6 })
  b.ctext(968, 240, '样品 10–50 μL', { size: 9, weight: 700, fill: C.proD })
  for (const [px, py] of [[944, 254], [958, 259], [972, 252], [986, 257]]) b.circle(px, py, 2.2, { fill: C.pro })
  b.line(926, 272, 1010, 272, { stroke: C.dna, sw: 3.5, dash: '8 4' })
  b.arrow(948, 280, 948, 264, { stroke: C.acc, sw: 1.3, marker: 'acc' })
  b.arrow(988, 264, 988, 280, { stroke: C.pro, sw: 1.3, marker: 'pro' })
  b.ctext(968, 300, '膜 3.5–10 kDa MWCO', { size: 9, fill: C.dnaD })
  b.ctext(1024, 342, '外液', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(968, 396, '外液逐步置换 · 平滑可逆', { size: 9.5, fill: C.mute })

  // ---- ⑤ 自由界面扩散 ----
  b.rect(1150, 262, 172, 56, { fill: C.bg, stroke: C.sub, sw: 1.8, rx: 12 })
  b.rect(1162, 266, 60, 48, { fill: C.proL, fillOp: 0.85 })
  b.rect(1250, 266, 60, 48, { fill: C.accL, fillOp: 0.85 })
  b.rect(1222, 266, 7, 48, { fill: C.proL, fillOp: 0.55 })
  b.rect(1229, 266, 7, 48, { fill: C.proL, fillOp: 0.3 })
  b.rect(1236, 266, 7, 48, { fill: C.accL, fillOp: 0.3 })
  b.rect(1243, 266, 7, 48, { fill: C.accL, fillOp: 0.55 })
  b.line(1236, 264, 1236, 316, { stroke: C.mute, sw: 1.2, dash: '4 3' })
  b.arrow(1226, 294, 1246, 294, { stroke: C.pro, sw: 1.5, marker: 'pro' })
  b.arrow(1246, 306, 1226, 306, { stroke: C.acc, sw: 1.5, marker: 'acc' })
  b.ctext(1186, 250, '蛋白', { size: 10, weight: 700, fill: C.proD })
  b.ctext(1286, 250, '沉淀剂', { size: 10, weight: 700, fill: C.accD })
  b.ctext(1236, 340, '互扩散形成连续浓度梯度', { size: 9.5, fill: C.mute })
  b.ctext(1236, 396, 'nL 级微流控通道', { size: 9.5, fill: C.mute })

  // 五法注解
  const caps = [
    '晶体大（0.3–0.5 mm）、肉眼可判；平衡以小时到天计，液滴减半需一至三天。通量低、依赖手工，如今多用于初筛命中后的放大培养。',
    '96 孔规格契合机器人与每日自动成像，现代初筛绝对主力；晶体常 20–80 μm，恰好匹配同步辐射微束；疏水板防咖啡环效应。',
    '无蒸气通道、条件所见即所得：纯石蜡近零透水，条件冻结；掺硅油即得连续可调的等效蒸发，1:1 混油对应每天约 5–10% 失水。',
    '外液逐步置换沉淀剂，平滑可逆且能「往回收」；膜截留宜低于蛋白分子量十分之一，3.5 kDa 最常用，20 kDa 以上可放宽至 10 kDa。',
    '界面两侧互扩散，形成连续浓度梯度，一条通道同时扫过相图上一整条线；商品化微流控器件把蛋白用量压到纳升级，多用于优化。',
  ]
  const capX = [44, 312, 580, 848, 1116]
  caps.forEach((s, i) => b.wtext(capX[i], 420, s, { size: 10, fill: C.sub, maxW: 248, lh: 14 }))

  // ============ 二、五法选型对照表 ============
  b.panel(30, 592, 660, 350, { title: '二、五法选型与温度梯度结晶' })
  b.table(50, 640, 620, {
    headers: ['方法', '液滴体积', '过饱和来源', '主要优点', '主要局限'],
    colW: [118, 92, 112, 148, 150],
    rowH: 30,
    fontSize: 10,
    rows: [
      ['悬滴蒸气扩散', '1–2 μL', '水分蒸发', '晶体大、肉眼可见', '通量低、依赖手工'],
      ['坐滴蒸气扩散', '0.2–1 μL', '水分蒸发', '自动化与成像友好', '晶体偏小'],
      ['微批量', '1–2 μL', '直接混合', '条件所见即所得', '条件固定不可调'],
      ['微透析', '10–50 μL', '外液置换', '平滑可逆、可回退', '通量极低'],
      ['自由界面扩散', 'nL 级', '界面互扩散', '一扫浓度梯度', '需微流控器件'],
    ],
  })
  b.wtext(50, 860, '温度梯度结晶以温差施加过饱和——不加任何化学组分、全程可逆：溶菌酶按约 0.1–0.2 °C/天自 22 °C 缓降至 4 °C 可养成毫米级巨晶；胰岛素历史上走升温路线。多用于「已有晶体、只差尺寸」的优化阶段，与微透析联用（外液降温）是最常见的工程形态。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、稀疏矩阵筛选 ============
  b.panel(710, 592, 660, 350, { title: '三、稀疏矩阵：广而浅的初筛' })
  const hits = new Set(['2,1', '5,3', '7,0', '9,5', '3,6', '10,2', '6,7', '0,4', '11,3'])
  const partial = new Set(['1,2', '4,4', '8,1', '2,5', '9,6', '5,0', '11,7'])
  for (let i = 0; i < 12; i++) for (let j = 0; j < 8; j++) {
    const key = `${i},${j}`
    const o = hits.has(key) ? { fill: C.ok, stroke: C.okD, sw: 1.2 } : partial.has(key) ? { fill: C.warn, stroke: C.warnD, sw: 1.2 } : { fill: C.panelB, stroke: C.line, sw: 1 }
    b.circle(748 + i * 42, 648 + j * 21, 4.5, o)
  }
  b.ctext(979, 822, '一板 96 条件 · 绿色为命中、黄色为微晶或油滴', { size: 9.5, fill: C.mute })
  b.wtext(730, 848, 'Jancarik 与 Kim 1991 年统计当时已报道的结晶条件，浓缩出 48 个「高命中率」条件的经典矩阵——承认溶解度理论预测力有限，让经验的统计分布替你下注。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(730, 886, 'Gryphon、Mosquito 等移液机器人以 20–200 nL 液滴铺板，一次 96 条件筛选消耗蛋白不足 100 μL——「省蛋白」正是坐滴加机器人统治初筛的经济逻辑。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(730, 918, '试剂四大家族：PEG 3350/4000/8000、硫酸铵、MPD、有机酸盐；命中形态五级——单晶、簇状、微晶、油滴、沉淀，前四者皆有信息。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // 底部收束
  b.ctext(700, 972, '五法殊途同归：以不同速率把液滴送过成核区、再回落亚稳区养晶——速率之梯就是第 1 节相图上的轨迹', { size: 11.5, weight: 600, fill: C.mute })
}

export default scene({
  title: '结晶五法横截面对照：悬滴、坐滴、微批量、微透析与自由界面扩散',
  subtitle: '悬滴 1–2 μL 对 500 μL 池液、晶体 0.3–0.5 mm；坐滴 0.2–1 μL 晶体 20–80 μm；微批量 1:1 混油日失水 5–10%；微透析膜 3.5–10 kDa；稀疏矩阵 48 条件、耗蛋白不足 100 μL',
  draw,
})
