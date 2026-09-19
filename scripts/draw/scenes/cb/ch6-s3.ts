// cb ch6-s3 微丝：肌动蛋白、结合蛋白与肌肉收缩（39-d 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、微丝结构、极性与成核 ============
  b.panel(30, 132, 660, 430, { title: '一、微丝：7 nm 极性纤维与两类成核机器' })
  b.text(60, 178, 'F-actin：直径 7 nm 双股右手螺旋（G-actin 单体聚合）', { size: 11, weight: 700, fill: C.ink })
  b.dna(70, 225, 280, { amp: 12, period: 38, stroke: C.acc, sw: 2.8, rung: false })
  b.circle(372, 225, 8, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.arrow(388, 225, 358, 225, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.text(360, 202, '＋端（倒刺端）· G-actin 添加快', { size: 10, weight: 700, fill: C.ok })
  b.text(60, 258, '−端（尖状端）· 解离快', { size: 10, weight: 600, fill: C.bad })
  b.text(360, 255, '单体结合 ATP；聚合后水解为 ADP', { size: 9.5, fill: C.mute })
  // 踏车
  b.text(60, 300, '踏车行为：正端添加 ≈ 负端解离，纤维长度表观不变', { size: 11, weight: 700, fill: C.ink })
  b.dna(140, 338, 220, { amp: 10, period: 38, stroke: C.acc, sw: 2.4, rung: false })
  b.arrow(425, 325, 375, 330, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.arrow(425, 350, 375, 345, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.text(440, 340, '＋ 添加', { size: 9.5, weight: 700, fill: C.ok })
  b.arrow(128, 330, 92, 328, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.arrow(128, 348, 92, 350, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.etext(80, 340, '− 解离', { size: 9.5, weight: 700, fill: C.bad })
  // 成核机器
  b.text(60, 390, '两类成核机器（纯肌动蛋白组装的限速步骤是成核）', { size: 11.5, weight: 700, fill: C.ink })
  b.line(80, 480, 310, 480, { stroke: C.acc, sw: 4 })
  b.line(170, 480, 265, 425, { stroke: C.enz, sw: 3.5 })
  b.line(225, 480, 300, 445, { stroke: C.enz, sw: 3.5 })
  b.circle(170, 480, 7, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.circle(225, 480, 7, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.tag(120, 430, 'Arp2/3', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 6 })
  b.ctext(195, 540, 'WASP/WAVE＋Rac/Cdc42 激活 → 片足树状分支网络', { size: 9.5, fill: C.sub })
  b.line(400, 480, 620, 480, { stroke: C.dna, sw: 4 })
  b.circle(620, 470, 8, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.circle(620, 490, 8, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.arrow(640, 452, 664, 452, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.tag(450, 430, 'formin', { fill: C.dnaL, stroke: C.dna, size: 10, weight: 700, tfill: C.dnaD, pad: 6 })
  b.line(485, 438, 605, 462, { stroke: C.faint, sw: 1.2 })
  b.ctext(510, 540, '伴随正端生长直线纤维 → 应力纤维与收缩环', { size: 9.5, fill: C.sub })

  // ============ 二、结合蛋白与工具药 ============
  b.panel(710, 132, 660, 430, { title: '二、肌动蛋白结合蛋白：周转、切割、封端与交联' })
  b.table(726, 188, 628, {
    headers: ['蛋白', '功能'],
    colW: [190, 438],
    rowH: 26,
    fontSize: 10.5,
    rows: [
      ['cofilin/ADF', '切断并促进 ADP-肌动蛋白解聚，加速周转'],
      ['profilin', '结合单体、ADP→ATP 交换并递送至正端'],
      ['gelsolin', 'Ca²⁺ 激活后切断微丝并封端'],
      ['CapZ／tropomodulin', '分别封正端与负端'],
      ['α 辅肌动蛋白·fimbrin', '交联成束（微绒毛核心）'],
      ['filamin', '正交交联成网（皮层凝胶）'],
      ['dystrophin', '连接皮层微丝与膜糖蛋白——缺陷致 DMD'],
      ['ERM 家族', '连接皮层微丝与质膜'],
    ],
  })
  b.text(726, 472, '工具药：', { size: 11, weight: 700, fill: C.sub })
  b.tag(865, 470, '细胞松弛素：切断微丝、阻止聚合', { fill: C.badL, stroke: C.bad, size: 10, tfill: C.bad, pad: 6 })
  b.tag(1050, 470, '鬼笔环肽：稳定微丝、F-actin 荧光标记', { fill: C.okL, stroke: C.ok, size: 10, tfill: C.ok, pad: 6 })
  b.text(726, 505, '非肌肉细胞的微丝结构：', { size: 11, weight: 700, fill: C.sub })
  b.tag(790, 532, '细胞皮层（膜下凝胶层）', { fill: C.accL, stroke: C.acc, size: 10, tfill: C.accD, pad: 6 })
  b.tag(975, 532, '微绒毛（刷状缘）', { fill: C.dnaL, stroke: C.dna, size: 10, tfill: C.dnaD, pad: 6 })
  b.tag(1120, 532, '应力纤维（RhoA 诱导）', { fill: C.proL, stroke: C.pro, size: 10, tfill: C.proD, pad: 6 })
  b.tag(1290, 532, '收缩环', { fill: C.enzL, stroke: C.enz, size: 10, tfill: C.enzD, pad: 6 })

  // ============ 三、肌小节与滑动丝模型 ============
  b.panel(30, 576, 1340, 404, { title: '三、肌小节与滑动丝模型：兴奋-收缩耦联' })
  b.braceH(158, 642, 134, { label: '明带 I（缩短）', flip: true, size: 10 })
  b.braceH(300, 642, 400, { label: '暗带 A（长度不变）', flip: true, size: 10 })
  b.braceH(708, 642, 134, { label: '明带 I（缩短）', flip: true, size: 10 })
  b.line(150, 650, 150, 790, { stroke: C.acc, sw: 5 })
  b.line(850, 650, 850, 790, { stroke: C.acc, sw: 5 })
  const thins = [665, 695, 725, 755]
  thins.forEach(y => {
    b.line(158, y, 530, y, { stroke: C.acc, sw: 3.5 })
    b.line(470, y, 842, y, { stroke: C.acc, sw: 3.5 })
  })
  const thicks = [680, 710, 740]
  thicks.forEach(y => b.line(300, y, 700, y, { stroke: C.pro, sw: 6 }))
  for (let x = 310; x <= 460; x += 25) {
    b.line(x, 704, x - 9, 696, { stroke: C.pro, sw: 1.6 })
    b.line(x, 716, x - 9, 724, { stroke: C.pro, sw: 1.6 })
    b.line(790 - x + 300, 704, 790 - x + 300 + 9, 696, { stroke: C.pro, sw: 1.6 })
    b.line(790 - x + 300, 716, 790 - x + 300 + 9, 724, { stroke: C.pro, sw: 1.6 })
  }
  b.line(500, 655, 500, 785, { stroke: C.pro, sw: 2, dash: '4 4' })
  b.ctext(500, 632, 'M 线', { size: 10, weight: 700, fill: C.proD })
  b.braceH(455, 802, 90, { label: 'H 带（缩短）', size: 10 })
  b.ctext(150, 815, 'Z 线', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(850, 815, 'Z 线', { size: 10.5, weight: 700, fill: C.accD })
  b.arrow(85, 720, 140, 720, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.text(80, 705, '收缩', { size: 10, weight: 700, fill: C.bad })
  b.arrow(860, 720, 915, 720, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.text(862, 705, '细肌丝滑入', { size: 9.5, weight: 700, fill: C.bad })
  b.wtext(100, 845, '滑动丝模型（H. E. Huxley 与 A. F. Huxley，1954）：肌纤维由肌小节串联而成，收缩时细肌丝（肌动蛋白＋原肌球蛋白＋肌钙蛋白）向 M 线滑入粗肌丝（肌球蛋白Ⅱ）之间——暗带不变、明带与 H 带缩短。', { size: 10.5, fill: C.sub, maxW: 820, lh: 14 })
  b.text(100, 890, '肌球蛋白马达：Ⅰ 类单体连接膜泡与微丝；Ⅱ 类双头反平行组装成粗肌丝；Ⅴ 类高过程性马达长程运输膜泡。', { size: 10, fill: C.mute })
  // 兴奋-收缩耦联
  b.ctext(1150, 640, '兴奋-收缩耦联', { size: 12.5, weight: 700, fill: C.ink })
  const steps: string[] = [
    '肌膜动作电位沿 T 小管传入',
    'L 型 Ca²⁺ 通道（DHPR）构象变化',
    'RyR 释放肌浆网储存的 Ca²⁺',
    'Ca²⁺ 结合肌钙蛋白 C → 原肌球蛋白移位、暴露结合位点',
    '横桥 ATP 水解驱动划桨式循环 → 肌小节缩短',
    'SERCA 泵回收 Ca²⁺ → 舒张',
  ]
  steps.forEach((s, i) => {
    const y = 675 + i * 40
    b.circle(985, y - 5, 11, { fill: C.warnL, stroke: C.warn, sw: 1.6 })
    b.ctext(985, y - 1, `${i + 1}`, { size: 10.5, weight: 700, fill: '#78350f' })
    b.text(1005, y, s, { size: 10.5, fill: C.ink })
  })
}

export default scene({
  title: '微丝：肌动蛋白、结合蛋白与肌肉收缩',
  subtitle: '7 nm 双股螺旋、正端组装快可踏车；Arp2/3（分支）与 formin（直线）成核；肌钙蛋白-原肌球蛋白复合体介导 Ca²⁺ 开关——DHPR→RyR→Ca²⁺→横桥循环，滑动丝模型下暗带不变、明带与 H 带缩短（Huxley，1954）',
  draw,
})
