// ne ch9-s3 听觉、前庭与化学感觉 / 前庭系统（39-h 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、半规管：角加速度计 ============
  b.panel(30, 132, 660, 430, { title: '一、三条半规管互相垂直：加速度计而非转速表' })
  // 三个半规管环（三视图）
  const canals: Array<[number, number, string, string]> = [
    [150, 300, '水平（外）半规管', '（绕垂直轴）'],
    [360, 300, '前（上）半规管', '（绕内外轴）'],
    [560, 300, '后（下）半规管', '（绕前后轴）'],
  ]
  canals.forEach(([cx, cy, name, sub]) => {
    b.circle(cx, cy, 52, { fill: 'none', stroke: C.acc, sw: 3.4 })
    b.ellipse(cx, cy - 52, 16, 11, { fill: C.rnaL, fillOp: 0.8, stroke: C.rna, sw: 1.8 })
    b.ctext(cx, cy + 86, name, { size: 11.5, weight: 700, fill: C.accD })
    b.ctext(cx, cy + 103, sub, { size: 9.5, fill: C.mute })
  })
  b.ctext(360, 218, '壶腹嵴：毛细胞 + 终帽', { size: 12.5, weight: 700, fill: C.rnaD })
  b.ctext(360, 236, '内淋巴流动 → 终帽偏转 → 毛细胞换能', { size: 10.5, fill: C.mute })
  b.wtext(60, 428, '恒速旋转时终帽回位、传入回落——半规管只报告角加速度的变化率；Ewald 定律：水平管内淋巴流向壶腹为兴奋，垂直管流离壶腹为兴奋，决定眼震方向判读。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(60, 508, '三条管大致互相垂直，任意头旋转都可被至少一条管的最适平面捕捉。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、耳石器：重力与直线加速度 ============
  b.panel(710, 132, 660, 430, { title: '二、椭圆囊与球囊：静止时也持续报告倾角' })
  // 囊斑结构示意
  b.rect(760, 220, 300, 130, { fill: C.accL, fillOp: 0.35, stroke: C.acc, sw: 1.8, rx: 10 })
  b.ctext(910, 246, '囊斑（椭圆囊 / 球囊）', { size: 12.5, weight: 700, fill: C.accD })
  // 毛细胞
  ;[830, 880, 930, 980].forEach(x => {
    b.line(x, 330, x, 300, { stroke: C.pro, sw: 2.2 })
    b.circle(x, 342, 7, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  })
  b.ctext(910, 366, '毛细胞', { size: 10.5, weight: 700, fill: C.proD })
  // 耳石膜
  b.rect(810, 282, 190, 16, { fill: C.warnL, fillOp: 0.85, stroke: C.warn, sw: 1.6, rx: 4 })
  ;[830, 860, 890, 920, 950, 980].forEach(x => {
    b.polygon([[x - 5, 282], [x + 5, 282], [x, 270]], { fill: C.warn })
  })
  b.ctext(910, 262, '耳石膜 + 耳石（碳酸钙结晶）', { size: 11, weight: 700, fill: '#92400e' })
  ;[
    '耳石密度约为周围组织的 3 倍：',
    '直线加速度与重力使耳石膜相对毛细胞',
    '偏移——静止时即持续报告头相对重力的倾角。',
  ].forEach((ln, i) => b.text(1090, 230 + i * 16, ln, { size: 11, fill: C.sub }))
  b.wtext(760, 396, '椭圆囊囊斑多呈水平面（直立时），球囊呈垂直面——两者正交布置覆盖三维直线加速度与静态重力。', { size: 11, fill: C.sub, maxW: 590, lh: 16 })
  b.table(760, 442, 590, {
    headers: ['前庭结构', '感受器', '适宜刺激'],
    colW: [180, 180, 230],
    rowH: 36,
    fontSize: 11,
    rows: [
      ['半规管 ×3', '壶腹嵴毛细胞 + 终帽', '角加速度（旋转）'],
      ['椭圆囊 / 球囊', '囊斑毛细胞 + 耳石膜', '直线加速度与重力'],
    ],
  })

  // ============ 三、前庭眼反射 ============
  b.panel(30, 578, 660, 396, { title: '三、前庭眼反射（VOR）：三神经元弧' })
  const vor: Array<[string, string]> = [
    ['毛细胞（半规管）', C.rna],
    ['前庭核', C.acc],
    ['眼运动核（Ⅲ/Ⅳ/Ⅵ）', C.pro],
    ['眼外肌 → 反向补偿眼动', C.ok],
  ]
  const pos: Array<[number, number]> = [[60, 660], [60, 770], [360, 770], [360, 660]]
  vor.forEach(([name, c], i) => {
    const [x, y] = pos[i]
    b.rect(x, y, 260, 76, { fill: C.panelB, stroke: c, sw: 2, rx: 9 })
    b.ctext(x + 130, y + 34, name, { size: 12.5, weight: 700, fill: C.ink })
    b.ctext(x + 130, y + 54, `第 ${i + 1} 级`, { size: 10, fill: C.mute })
  })
  b.arrow(190, 736, 190, 770, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.arrow(320, 808, 360, 808, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.arrow(490, 770, 490, 736, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.wtext(60, 880, '潜伏期约 10 ms、增益接近 1——头向左转时眼球向右补偿，视像稳定在中央凹；可被小脑绒球长期适应修正（戴棱镜数日后增益重新校准）。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 四、眼震与晕动症 ============
  b.panel(710, 578, 660, 396, { title: '四、眼震判读与晕动症：感觉冲突假说' })
  b.rect(740, 648, 300, 150, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(756, 674, '眼震以快相方向命名', { size: 13, weight: 700, fill: C.dnaD })
  b.wtext(756, 698, '旋转开始：慢相与旋转相反、快相与旋转同向——按快相判读方向。冷热水试验：「冷对侧、温同侧」（COWS）——冷水灌耳引发向对侧的快相眼震。', { size: 10.5, fill: C.sub, maxW: 268, lh: 15 })
  b.rect(1070, 648, 270, 150, { fill: C.rnaL, fillOp: 0.4, stroke: C.rna, sw: 1.6, rx: 9 })
  b.text(1086, 674, '晕动症', { size: 13, weight: 700, fill: C.rnaD })
  b.wtext(1086, 698, '主流解释为感觉冲突假说：前庭输入与视觉/本体预期不匹配。凡减少预期与输入误差的措施——看远处地平线、闭眼、当司机——皆可缓解。', { size: 10.5, fill: C.sub, maxW: 238, lh: 15 })
  b.wtext(740, 830, '前庭系统解剖与功能小结：半规管测角加速度、耳石器测直线加速度与重力、VOR 稳定视像、前庭脊髓反射与姿势调整联动——本体感觉与身体图式的「内感受底座」。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })
}

export default scene({
  title: '前庭系统：半规管测角加速度、耳石器测重力与直线加速度',
  subtitle: '半规管是加速度计而非转速表；VOR 为三神经元弧（潜伏期约 10 ms、增益接近 1）',
  draw,
})
