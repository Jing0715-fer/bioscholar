// xc ch6-s2 衍射强度积分与剖面拟合（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、积分盒 ============
  b.panel(30, 132, 660, 300, { title: '一、积分盒：围绕预测中心记账' })
  // 像素网格
  for (let i = 0; i <= 11; i++) b.line(70 + i * 17, 178, 70 + i * 17, 314, { stroke: C.faint, sw: 0.6, opacity: 0.55 })
  for (let j = 0; j <= 8; j++) b.line(70, 178 + j * 17, 257, 178 + j * 17, { stroke: C.faint, sw: 0.6, opacity: 0.55 })
  // 背景环带（7×5 盒的边缘）
  for (let i = 2; i <= 8; i++) for (let j = 2; j <= 6; j++) {
    const edge = i === 2 || i === 8 || j === 2 || j === 6
    if (edge) b.rect(70 + i * 17, 178 + j * 17, 17, 17, { fill: C.warnL, fillOp: 0.7 })
  }
  // 信号 3×3
  for (let i = 4; i <= 6; i++) for (let j = 3; j <= 5; j++) {
    const d = Math.abs(i - 5) + Math.abs(j - 4)
    b.rect(70 + i * 17, 178 + j * 17, 17, 17, { fill: C.pro, fillOp: d === 0 ? 0.95 : d === 1 ? 0.6 : 0.35 })
  }
  // 积分盒与偏心盒
  b.rect(104, 212, 119, 85, { fill: 'none', stroke: C.acc, sw: 2.2 })
  b.rect(121, 229, 119, 85, { fill: 'none', stroke: C.bad, sw: 1.6, dash: '5 4' })
  b.line(163, 262, 300, 200, { stroke: C.pro, sw: 1.1 })
  b.text(304, 202, '中心：信号（约 9 个显著像素）', { size: 9.5, weight: 700, fill: C.proD })
  b.line(110, 290, 300, 286, { stroke: C.warnD, sw: 1.1 })
  b.text(304, 288, '边缘环带：背景', { size: 9.5, weight: 700, fill: '#92400e' })
  b.line(238, 250, 300, 240, { stroke: C.bad, sw: 1.1 })
  b.text(304, 240, '偏心的盒：先丢信号再捡背景', { size: 9.5, weight: 700, fill: C.bad })
  b.ctext(163, 334, '积分盒边长约取斑点半径的 2–3 倍', { size: 10, fill: C.sub })
  // 右侧说明
  b.text(304, 186, '求和积分：最直接的记账', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(304, 206, '盒内像素减去背景后相加，对强斑足够精确；对弱斑，背景涨落的方差随盒面积线性增长，信噪比迅速恶化——这正是剖面拟合的出场理由。', { size: 10, fill: C.sub, maxW: 368, lh: 14 })
  b.text(304, 258, '一笔账（5×5 盒、背景每像素 10 计数、涨落 3）', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(410, 286, '求和积分：方差 25×9 = 225', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: '#92400e', pad: 8 })
  b.tag(575, 286, '剖面拟合：方差约 81', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 8 })
  b.text(304, 314, '信噪比立赚约 1.7 倍，且斑越弱（信号占比越低）红利越肥。', { size: 10, fill: C.sub })
  b.wtext(304, 338, '盒子尺寸由 mosaicity 与探测器点扩散共同决定：太小则截尾漏强度（高角先漏），太大则引入多余背景与邻斑混入（弱斑方差整盒端进来）——两种偏置都带方向性，会伪装成高角强度异常。', { size: 10, fill: C.mute, maxW: 368, lh: 13.5 })
  b.text(46, 388, '「预测中心」四字有分量：它来自上一节的精修（晶胞、取向、探测器几何与 mosaicity 全套），差一个像素盒子就偏心——积分精度的天花板，一半埋在几何参数的精修质量里。', { size: 9.5, fill: C.mute })

  // ============ 二、剖面拟合 ============
  b.panel(710, 132, 660, 300, { title: '二、剖面拟合：形状已知，只求高度' })
  for (let i = 0; i <= 12; i++) b.line(726 + i * 16, 180, 726 + i * 16, 340, { stroke: C.faint, sw: 0.6, opacity: 0.5 })
  for (let j = 0; j <= 10; j++) b.line(726, 180 + j * 16, 918, 180 + j * 16, { stroke: C.faint, sw: 0.6, opacity: 0.5 })
  // 5×5 淡环 + 3×3 显著像素
  for (let i = 4; i <= 8; i++) for (let j = 3; j <= 7; j++) {
    const di = Math.abs(i - 6), dj = Math.abs(j - 5)
    const d = di + dj
    if (d <= 1) b.rect(726 + i * 16, 180 + j * 16, 16, 16, { fill: C.pro, fillOp: d === 0 ? 0.95 : 0.6 })
    else if (di <= 2 && dj <= 2) b.rect(726 + i * 16, 180 + j * 16, 16, 16, { fill: C.pro, fillOp: 0.3 })
  }
  b.braceV(718, 236, 64, { label: '9 个显著像素', left: true })
  b.braceV(924, 220, 96, { label: '背景环带', left: false })
  b.ctext(822, 358, '标准剖面 p（归一化）「贴」到弱斑上', { size: 10, fill: C.sub })
  b.text(960, 190, '两步建立剖面库', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(960, 210, '① 把邻近的中强斑按分区归一化平均成模板——同一晶体、同一光束条件下斑点形状高度相似（嵌镶块分布、光束发散与探测器点扩散的卷积）；② 以加权最小二乘把模板「贴」到弱斑上：形状已知、只求高度。', { size: 10, fill: C.sub, maxW: 394, lh: 14 })
  b.tag(1108, 280, '拟合强度 = Σ(o·p)/Σ(p^{2})', { fill: C.panelB, stroke: C.sub, size: 11, weight: 700, tfill: C.ink, pad: 8 })
  b.text(960, 306, '（o 为扣背景后的像素读数、p 为归一化剖面；Kabsch 2010 给出推导）', { size: 9.5, fill: C.mute })
  b.wtext(960, 330, '有效背景面积被压缩到剖面显著区，弱斑强度估计的方差大幅下降；对极弱的反射，模板本身就是「斑长什么样」的唯一可靠信息来源。', { size: 9.5, fill: C.sub, maxW: 394, lh: 13.5 })
  // 九宫格分区
  b.text(726, 380, '埃瓦尔德球弯曲使剖面沿探测器系统漂移——分区学习（九宫格）', { size: 11, weight: 700, fill: C.ink })
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
    const cx = 730 + i * 52, cy = 396 + j * 16
    b.rect(cx, cy - 8, 48, 15, { fill: '#ffffff', stroke: C.line, sw: 0.8 })
    b.ellipse(cx + 24, cy, 5 + j * 3, 3.5, { fill: C.proL, stroke: C.pro, sw: 1.2 })
  }
  b.wtext(900, 388, '同一帧不同位置的反射以不同几何掠过球面，剖面随探测器位置漂移——XDS 将探测器划为九宫格分别建模，跨区滥用会引入系统误差；数据太稀、模板样本不足时，宁降分区粒度也不跨区硬贴。强斑走求和、弱斑走剖面、过载斑走外推——三条通道共用同一套剖面库。', { size: 9.5, fill: C.sub, maxW: 454, lh: 13.5 })

  // ============ 三、部分反射 ============
  b.panel(30, 452, 660, 490, { title: '三、部分反射：跨帧的接力' })
  for (let i = 0; i < 3; i++) {
    b.rect(60 + i * 110, 490, 110, 62, { fill: i % 2 === 0 ? C.panelB : '#ffffff', stroke: C.line, sw: 1 })
    b.ctext(115 + i * 110, 484, `帧 ${i + 1}`, { size: 9.5, fill: C.mute })
  }
  b.line(60, 548, 400, 548, { stroke: C.sub, sw: 1.8 })
  b.polygon([[110, 548], [150, 514], [190, 500], [225, 496], [260, 502], [300, 520], [340, 548]], { fill: C.enzL, fillOp: 0.5 })
  b.spline([[110, 548], [150, 514], [190, 500], [225, 496], [260, 502], [300, 520], [340, 548]], { fill: 'none', stroke: C.enz, sw: 2.6 })
  ;[170, 280].forEach(x => b.line(x, 490, x, 556, { stroke: C.sub, sw: 1.2, dash: '4 4' }))
  b.ctext(120, 568, '帧 1 部分', { size: 9, weight: 700, fill: C.sub })
  b.ctext(225, 568, '帧 2 部分', { size: 9, weight: 700, fill: C.sub })
  b.ctext(320, 568, '帧 3 部分', { size: 9, weight: 700, fill: C.sub })
  b.text(60, 592, '部分性 = 帧的 φ 区间覆盖反射剖面的积分比例', { size: 9.5, weight: 700, fill: C.enzD })
  b.tag(552, 500, '占比 ≈ mosaicity / 帧宽', { fill: C.panelB, stroke: C.sub, size: 10.5, weight: 700, tfill: C.ink, pad: 8 })
  b.wtext(430, 522, '0.15° 镶嵌配 0.2° 帧宽，约四分之三的反射跨帧；帧宽翻倍、占比约减半，但斑点重叠风险同步上升——交换没有白吃的午餐，只有被算清的账。', { size: 10, fill: C.sub, maxW: 244, lh: 14 })
  b.wtext(430, 586, '帧间通量若不一致（衰减器切换、top-up 注入前后的流强波动），须先经缩放统一再拼合（本章第 3 节）。', { size: 10, fill: C.sub, maxW: 244, lh: 14 })
  b.wtext(60, 620, '三处细节决定成败：其一，mosaicity 低估半个档，部分性就系统性算错；其二，跨帧拼合的 σ 按方差传播合成，不能简单相加；其三，收集范围首尾被「拦腰截断」的反射（另一半剖面永远测不到）须整体剔除或标记不完整——它们看起来正常、实则缺了一半强度，混进合并就是慢性毒药。', { size: 10, fill: C.sub, maxW: 616, lh: 14 })
  b.wtext(60, 690, '部分反射并非缺陷而是旋转法的常态：处理得当精度无损；高 mosaicity 与窄 Δφ 都会推高其比例，是第 5 章选择转角时要平衡的量。', { size: 10, fill: C.mute, maxW: 616, lh: 14 })
  // 拼合流程
  const pbox = (x: number, t: string, s: string) => {
    b.rect(x, 736, 150, 46, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 8 })
    b.ctext(x + 75, 753, t, { size: 10, weight: 700, fill: '#831843' })
    b.ctext(x + 75, 770, s, { size: 9, fill: C.sub })
  }
  pbox(60, '帧 1 部分强度', '部分性 p_{1}')
  pbox(240, '帧 2 部分强度', '部分性 p_{2}')
  pbox(420, '帧 3 部分强度', '部分性 p_{3}')
  b.arrow(135, 782, 260, 816, { stroke: C.sub, sw: 1.6 })
  b.arrow(315, 782, 315, 816, { stroke: C.sub, sw: 1.6 })
  b.arrow(495, 782, 370, 816, { stroke: C.sub, sw: 1.6 })
  b.rect(220, 820, 190, 50, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(315, 839, '按部分性换算', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(315, 857, 'σ 按方差传播合成', { size: 9, fill: C.sub })
  b.arrow(414, 845, 454, 845, { stroke: C.sub, sw: 1.8 })
  b.rect(458, 820, 190, 50, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 8 })
  b.ctext(553, 839, '全反射强度 + σ', { size: 10.5, weight: 700, fill: C.okD })
  b.ctext(553, 857, '交给缩放与合并', { size: 9, fill: C.sub })
  b.text(60, 900, '跨帧的接力：各帧部分强度换算、加和为全反射——处理得当精度无损，处理不当则强度出现系统偏差。', { size: 9.5, fill: C.mute })

  // ============ 四、过载、遮挡与背景拟合 ============
  b.panel(710, 452, 660, 490, { title: '四、过载、遮挡、坏像素与背景拟合' })
  for (let i = 0; i <= 7; i++) b.line(726 + i * 16, 486, 726 + i * 16, 566, { stroke: C.faint, sw: 0.6, opacity: 0.5 })
  for (let j = 0; j <= 5; j++) b.line(726, 486 + j * 16, 838, 486 + j * 16, { stroke: C.faint, sw: 0.6, opacity: 0.5 })
  for (let i = 2; i <= 4; i++) for (let j = 1; j <= 3; j++) {
    const d = Math.abs(i - 3) + Math.abs(j - 2)
    if (d === 0) b.rect(726 + i * 16, 486 + j * 16, 16, 16, { fill: C.ink })
    else b.rect(726 + i * 16, 486 + j * 16, 16, 16, { fill: C.pro, fillOp: d === 1 ? 0.55 : 0.3 })
  }
  b.ellipse(782, 526, 32, 22, { fill: 'none', stroke: C.enz, sw: 1.8, dash: '5 4' })
  b.text(726, 590, '过载斑：剔除超限像素，按标准剖面外推补全', { size: 9.5, weight: 700, fill: C.ink })
  b.wtext(726, 610, '强斑与弱斑共享同一模板形状，被剔除的「头部」可按模板等比例复原——前提是过载像素占比不大：超过两三成，外推就失去依据，宁可弃帧；或丢弃该反射指望冗余补位。', { size: 9.5, fill: C.sub, maxW: 244, lh: 13.5 })
  b.text(990, 494, '掩膜纪律：「窄而准」', { size: 11, weight: 700, fill: C.ink })
  b.rect(990, 506, 160, 92, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 4 })
  b.circle(1070, 552, 34, { fill: 'none', stroke: C.badL, sw: 16 })
  b.circle(1070, 552, 34, { fill: 'none', stroke: C.bad, sw: 1.4 })
  b.ctext(1070, 616, '画宽一度：整圈反射缺失', { size: 9, weight: 700, fill: C.bad })
  b.rect(1170, 506, 160, 92, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 4 })
  b.circle(1250, 552, 34, { fill: 'none', stroke: C.badL, sw: 6 })
  b.circle(1250, 552, 34, { fill: 'none', stroke: C.warn, sw: 1.4, dash: '3 3' })
  b.ctext(1250, 616, '画漏：冰的强度漏进背景', { size: 9, weight: 700, fill: C.warnD })
  b.wtext(990, 636, '坏像素表随探测器出厂提供、模块间隙由几何标定登记、冰环盐环由程序按环位置圈定再人工复核；多模块 PAD 的模块间隙是物理盲区，几何标定中须精确登记，否则缝隙里的反射会被漏计。', { size: 9.5, fill: C.sub, maxW: 364, lh: 13.5 })
  b.text(726, 692, '背景拟合与「扫地」', { size: 11, weight: 700, fill: C.ink })
  b.wtext(726, 712, '背景在积分盒的边缘环带拟合为局部平面（或低阶多项式），扣除后进入积分；空气散射、母液与保护剂散射、荧光的平缓贡献都在这里被吸收。拟合前先「扫地」：环带像素中显著偏离平面者（斑点尾巴、坏点、雪斑）按 σ 剔除后再拟合——稳健回归的最小实现。', { size: 10, fill: C.sub, maxW: 616, lh: 14 })
  b.wtext(726, 766, '冰环或盐环横穿积分盒时，环带像素成片污染，须整段掩膜、背景退化为环外区域的拟合；环附近背景梯度陡，一个平面兜不住，程序改用分区或高阶拟合兜底。', { size: 10, fill: C.sub, maxW: 616, lh: 14 })
  b.table(726, 796, 616, {
    headers: ['方式', '适用对象', '优点', '局限'],
    colW: [110, 150, 160, 196],
    rowH: 26,
    fontSize: 10,
    rows: [
      ['求和积分', '强斑', '无形状假设、直接', '弱斑噪声随盒面积涨'],
      ['剖面拟合', '弱斑、常规斑', '方差显著降低', '依赖剖面稳定与预测位置'],
      ['外推补全', '过载斑', '保住强低角反射', '依赖剖面模型可靠'],
    ],
  })
  b.text(726, 930, '积分产物：未缩放强度 + σ（XDS 输出 XDS_ASCII.HKL，DIALS 输出整合反射表）；洛伦兹-偏振修正一并落账，交给第 3 节缩放合并。', { size: 9.5, fill: C.mute })
}

export default scene({
  title: '衍射强度积分与剖面拟合：从像素到反射',
  subtitle: '积分盒取斑点半径 2–3 倍；求和方差 225、剖面拟合降至 81，信噪比赚 1.7 倍；拟合强度 Σ(o·p)/Σ(p^{2})；部分反射占比近似 mosaicity/帧宽',
  draw,
})
