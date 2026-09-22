// sb ch8-s1 电子密度图的解读（Task 4-b）
import { scene, C, B } from '../../lib'

/** 一段「香肠」密度：嵌套等值线 + 中心原子 */
function sausage(b: B, cx: number, cy: number, rx: number, ry: number, rot: number, atomC = C.dnaD) {
  b.ellipse(cx, cy, rx + 13, ry + 13, { fill: C.dnaL, fillOp: 0.3, stroke: C.dna, sw: 1.1, dash: '5 4' })
  b.ellipse(cx, cy, rx, ry, { fill: C.dnaL, fillOp: 0.65, stroke: C.dna, sw: 1.8 })
  b.ellipse(cx, cy, rx * 0.55, ry * 0.55, { fill: C.dna, fillOp: 0.35, stroke: C.dnaD, sw: 1.2 })
  void rot
  b.circle(cx, cy, 3.2, { fill: atomC, stroke: 'none' })
}

const draw = (b: B) => {
  // ============ 一、三种密度图 ============
  b.panel(30, 132, 660, 330, { title: '一、2Fo−Fc 主图与 Fo−Fc 差值图' })
  // 主图
  b.rect(56, 212, 300, 150, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 6 })
  b.ctext(206, 230, '2Fo−Fc 主图：1σ 连续「香肠」', { size: 11, weight: 700, fill: C.dnaD })
  sausage(b, 100, 280, 24, 15, 0)
  sausage(b, 150, 300, 26, 16, 0)
  sausage(b, 205, 290, 24, 15, 0)
  sausage(b, 255, 315, 25, 15, 0)
  sausage(b, 300, 295, 22, 14, 0)
  b.text(66, 350, '虚线 0.5σ 追柔性 · 内圈 1.5σ 检验扎实', { size: 9.5, fill: C.mute })
  // 差值图
  b.rect(390, 212, 270, 150, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 6 })
  b.ctext(525, 230, 'Fo−Fc 差值图：只画观测减计算', { size: 11, weight: 700, fill: C.sub })
  // 模型原子偏离密度
  b.ellipse(475, 300, 34, 24, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.4, dash: '5 4' })
  b.circle(505, 285, 3.2, { fill: C.dnaD, stroke: 'none' })
  b.ellipse(475, 300, 14, 10, { fill: C.ok, fillOp: 0.75, stroke: C.okD, sw: 1.4 })
  b.ctext(452, 336, '+3σ：晶体有、模型无', { size: 9.5, weight: 700, fill: C.okD })
  b.ellipse(505, 285, 13, 9, { fill: C.bad, fillOp: 0.7, stroke: C.badD, sw: 1.4 })
  b.ctext(560, 268, '−3σ：模型有、晶体无', { size: 9.5, weight: 700, fill: C.badD })
  b.arrow(500, 288, 484, 296, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(525, 372, '口诀：加水看正峰、删原子看负峰', { fill: C.warnL, stroke: C.warn, size: 10, weight: 700, tfill: C.warnD, pad: 8 })
  b.wtext(56, 404, '读图姿势：主图确认密度存在，差值图指出偏差方向；两者打架时先怀疑相位与缩放。差值图随精修轮次动态变化——每轮精修后重算，新出现的小峰群往往指向交替构象或构象变化而非噪声：差值图是模型与数据对话的留言板。', { size: 10, fill: C.sub, maxW: 615, lh: 14.5 })

  // ============ 二、匹配好坏与交替构象 ============
  b.panel(710, 132, 660, 330, { title: '二、模型-密度匹配的好坏对照' })
  // 好匹配
  b.rect(740, 212, 260, 140, { fill: '#d1fae5', fillOp: 0.28, stroke: C.ok, sw: 1.6, rx: 8 })
  b.ctext(870, 230, '好匹配：原子坐在密度中心', { size: 11, weight: 700, fill: C.okD })
  sausage(b, 810, 285, 26, 16, 0)
  sausage(b, 862, 300, 26, 16, 0)
  sausage(b, 912, 280, 24, 15, 0)
  b.text(752, 340, '差值图干净（无 ±3σ 峰），侧链饱满贴模', { size: 9.5, fill: C.sub })
  // 坏匹配
  b.rect(1030, 212, 310, 140, { fill: '#fee2e2', fillOp: 0.28, stroke: C.bad, sw: 1.6, rx: 8 })
  b.ctext(1185, 230, '坏匹配：成对正负峰喊「搬我」', { size: 11, weight: 700, fill: C.badD })
  b.ellipse(1120, 300, 34, 23, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.4, dash: '5 4' })
  b.ellipse(1120, 300, 14, 10, { fill: C.ok, fillOp: 0.75, stroke: C.okD, sw: 1.4 })
  b.circle(1150, 282, 3.2, { fill: C.dnaD, stroke: 'none' })
  b.ellipse(1150, 282, 13, 9, { fill: C.bad, fillOp: 0.7, stroke: C.badD, sw: 1.4 })
  b.arrow(1146, 285, 1130, 295, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.text(1042, 340, '正峰在密度中心、负峰在原子处：搬移或翻转的信号', { size: 9.5, fill: C.sub })
  // 哑铃密度与 altloc
  b.rect(740, 366, 600, 88, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(1040, 384, '哑铃状密度：交替构象按 altloc 拆分', { size: 11, weight: 700, fill: C.ink })
  b.ellipse(860, 424, 26, 13, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.5, dash: '5 4' })
  b.ellipse(908, 410, 22, 12, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.5 })
  b.circle(848, 424, 3, { fill: C.acc, stroke: 'none' })
  b.circle(918, 406, 3, { fill: C.pro, stroke: 'none' })
  b.text(830, 448, '构象 A 占有率 0.6', { size: 9.5, weight: 700, fill: C.accD })
  b.text(946, 414, '构象 B 占有率 0.4', { size: 9.5, weight: 700, fill: C.proD })
  b.wtext(1000, 428, '两构象占有率之和须为 1；占有率与 B 因子强相关（乘积简并），精修须锁其一防跑飞。成对 ±差值峰是拆分信号。', { size: 9.5, fill: C.sub, maxW: 320, lh: 13.5 })

  // ============ 三、omit / polder / sigma-A ============
  b.panel(30, 482, 660, 400, { title: '三、无偏检验：omit 图、polder 图与 sigma-A 加权' })
  // omit 三步
  const om: Array<[string, string, string]> = [
    ['① 抠掉可疑片段', '把配体/可疑残基从模型中删除', C.bad],
    ['② 重算相位', '以剩余模型计算相位并合成图', C.acc],
    ['③ 看无偏密度', '被抠区域若仍有密度，即真有东西', C.ok],
  ]
  let oy = 528
  for (const [t, s, c] of om) {
    b.tag(140, oy, t, { fill: `${c}18`, stroke: c, size: 10.5, weight: 700, tfill: C.ink, pad: 8 })
    b.text(240, oy + 4, s, { size: 10, fill: C.sub })
    if (oy < 600) b.arrow(140, oy + 20, 140, oy + 40, { stroke: C.mute, sw: 1.6, marker: 'ink' })
    oy += 60
  }
  b.wtext(56, 700, 'omit 图的意义：被抠区域的密度不再被「模型里有它」这一假设污染，是防模型偏差的无偏检验。', { size: 10, fill: C.sub, maxW: 300, lh: 14.5 })
  // polder 对比
  b.rect(400, 516, 280, 128, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.4, rx: 6 })
  b.ctext(540, 534, '普通 omit：bulk 溶剂「填坑」', { size: 10.5, weight: 700, fill: C.badD })
  b.ellipse(540, 585, 40, 24, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.2, dash: '5 4' })
  b.ellipse(540, 585, 16, 10, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.1 })
  b.text(410, 632, '平坦溶剂把弱配体密度稀释掉', { size: 9.5, fill: C.sub })
  b.rect(400, 656, 280, 128, { fill: C.okL, fillOp: 0.35, stroke: C.ok, sw: 1.4, rx: 6 })
  b.ctext(540, 674, 'polder 图：掩膜挡住溶剂（2017）', { size: 10.5, weight: 700, fill: C.okD })
  b.ellipse(540, 725, 40, 24, { fill: 'none', stroke: C.warn, sw: 1.6, dash: '7 5' })
  b.ellipse(540, 725, 26, 16, { fill: C.dnaL, fillOp: 0.8, stroke: C.dna, sw: 1.6 })
  b.ellipse(540, 725, 12, 8, { fill: C.dna, fillOp: 0.6, stroke: 'none' })
  b.text(410, 772, '配体密度保全，弱配体判定首选', { size: 9.5, fill: C.sub })
  // sigma-A
  b.tag(240, 826, 'sigma-A 加权（Read 1986，SIGMAA）', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 8 })
  b.wtext(56, 852, '按逐反射的相位可靠性给图系数加权：模型相位可靠的反射权重大、不可靠者（典型如高分辨率弱反射）权重小——压模型偏差、提弱密度灵敏度，是所有日常图的公共底座。', { size: 10, fill: C.sub, maxW: 615, lh: 14.5 })

  // ============ 四、分辨率决定你能看见什么 ============
  b.panel(710, 482, 660, 400, { title: '四、分辨率决定你能看见什么' })
  b.table(730, 528, 620, {
    headers: ['分辨率', '图上可见', '建模策略'],
    colW: [130, 250, 240],
    rowH: 38,
    fontSize: 10,
    rows: [
      ['优于 1.2 Å', '氢、各向异性位移', '全原子精修、交替构象拆分'],
      ['1.5–2.0 Å', '键与峰的分叶、有序水网', '常规逐残基建模、逐个加水'],
      ['2.5–3.0 Å', '主链清晰、长侧链断续', '主链优先、rotamer 约束建模'],
      ['3.5–4.0 Å', '螺旋与片层的轮廓', '域级刚体、强二级结构约束'],
      ['约 6 Å', '仅二级结构包络', '结合同源模型解读（MR）'],
    ],
  })
  b.wtext(730, 760, '低于 3.5 Å 时，侧链建模更多依赖 rotamer 库与几何先验而非密度本身——图给不了的信息必须诚实地由 restraints 供给，并在论文中声明建模置信度。把 4 Å 图强行建成全原子模型、再用「精修收敛」粉刷，是数据库里过拟合的重灾区。', { size: 10, fill: C.sub, maxW: 620, lh: 14.5 })
  b.wtext(730, 826, '同一道理适用于水：分辨率撑不起水网时逐个加水，等于给噪声发居民证——水数必须与分辨率匹配（见第 2 节三判据）。读图技巧：沿骨架走、找锚点（大侧链与 Gly-Gly 的 register 印记），密度支持度逐段配数字。', { size: 10, fill: C.sub, maxW: 620, lh: 14.5 })

  // 底部收束
  b.ctext(700, 946, '图是假说、模型是论点——差值图永远留着让数据说「不」的通道', { size: 12, weight: 600, fill: C.mute })
}

export default scene({
  title: '电子密度图的解读：主图、差值图与无偏检验',
  subtitle: '2Fo−Fc 主图按 1σ 勾画连续「香肠」；Fo−Fc 差值图 +3σ 表缺失、−3σ 表多余；omit 图防模型偏差、polder 图（Liebschner 2017）加掩膜挡溶剂为配体判定首选；sigma-A 加权逐反射压偏差；1.2 Å 见氢、6 Å 仅见包络',
  draw,
})
