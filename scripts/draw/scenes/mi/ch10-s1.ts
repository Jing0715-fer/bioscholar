// mi ch10-s1 正常菌群、微生态与机会致病（39-f 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、正常菌群的人体分布 ============
  b.panel(30, 132, 660, 420, { title: '一、正常菌群的人体分布「地图」：部位与优势菌群' })

  // 人体剪影（头 + 躯干 + 四肢）
  b.circle(210, 196, 26, { fill: C.panel, stroke: C.sub, sw: 2 })
  b.rect(180, 228, 62, 150, { fill: C.panel, stroke: C.sub, sw: 2, rx: 18 })
  b.line(190, 250, 150, 330, { stroke: C.sub, sw: 2 })
  b.line(232, 250, 272, 330, { stroke: C.sub, sw: 2 })
  b.line(196, 378, 188, 470, { stroke: C.sub, sw: 2 })
  b.line(226, 378, 234, 470, { stroke: C.sub, sw: 2 })
  b.line(184, 500, 202, 500, { stroke: C.sub, sw: 2 })
  b.line(228, 500, 246, 500, { stroke: C.sub, sw: 2 })
  b.ctext(210, 178, '头皮', { size: 10, fill: C.mute })

  // 部位标注（引线 + tag + 优势菌群）
  const spots: Array<[number, number, number, number, string, string, string, string]> = [
    [150, 250, 110, 262, '皮肤', C.dna, C.dnaL, '葡萄球菌等 · 干燥酸性'],
    [246, 232, 320, 218, '口腔', C.warn, C.warnL, '链球菌等 · 量大种多'],
    [180, 258, 96, 330, '胃', C.bad, C.badL, '菌量极少 · 胃酸屏障'],
    [244, 280, 330, 300, '小肠', C.acc, C.accL, '较低 · 排空快'],
    [244, 350, 340, 386, '结肠', C.pro, C.proL, '厌氧菌为主 10¹¹–10¹²/g'],
    [178, 360, 96, 420, '阴道', C.rna, C.rnaL, '乳酸杆菌 · 维持低 pH'],
  ]
  spots.forEach(([sx, sy, tx, ty, t, c, cl, s]) => {
    b.line(sx, sy, tx, ty, { stroke: C.faint, sw: 1.3, dash: '4 3' })
    b.circle(sx, sy, 4, { fill: c })
    if (tx < sx) {
      b.tag(tx - 50, ty, t, { fill: cl, stroke: c, size: 11, weight: 700, tfill: C.ink, pad: 7 })
      b.wtext(tx - 66, ty + 22, s, { size: 9.5, fill: C.sub, maxW: 112, lh: 12 })
    } else {
      b.tag(tx + 40, ty, t, { fill: cl, stroke: c, size: 11, weight: 700, tfill: C.ink, pad: 7 })
      b.wtext(tx + 20, ty + 22, s, { size: 9.5, fill: C.sub, maxW: 150, lh: 12 })
    }
  })
  b.wtext(50, 528, '各部位生态位由 pH、氧分压、分泌物与黏液共同塑造——菌群组成高度特异。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、菌量梯度与第二基因组 ============
  b.panel(710, 132, 660, 420, { title: '二、自胃至结肠菌量上升约 9 个数量级；「第二基因组」' })

  // 梯度条
  b.rect(740, 190, 100, 280, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 6 })
  for (let i = 0; i < 10; i++) {
    b.rect(742, 468 - i * 28, 96, 26, { fill: C.pro, fillOp: 0.12 + i * 0.08 })
  }
  b.text(760, 214, '菌量对数 ↑', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(870, 470, '胃', { size: 11, weight: 700, fill: C.bad })
  b.ctext(870, 414, '十二指肠', { size: 10, fill: C.mute })
  b.ctext(870, 358, '空肠', { size: 10, fill: C.mute })
  b.ctext(870, 302, '回肠', { size: 10, fill: C.mute })
  b.ctext(870, 236, '结肠', { size: 11, weight: 700, fill: C.pro })
  b.wtext(950, 240, '梯度由胃酸、胆汁、蠕动速率与黏液分泌共同塑造——小肠远低于结肠，与其排空快、抗菌物质浓度高直接相关。', { size: 11, fill: C.sub, maxW: 390, lh: 16 })

  // 数字卡
  b.rect(940, 330, 410, 90, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.5, rx: 9 })
  b.text(960, 354, '人体微生物组', { size: 13, weight: 700, fill: C.accD })
  b.wtext(960, 378, '经典估计约 10¹⁴ 个细胞（自身细胞的 10 倍）；直接计数修订为约 3.8×10¹³（约 1:1）。', { size: 11, fill: C.sub, maxW: 370, lh: 16 })
  b.wtext(940, 444, '微生物编码基因总数远超人类基因组的约 2 万个基因——肠道菌群因此被称为人体的「第二基因组」，承担免疫训练、维生素合成与定植抗力。', { size: 11, fill: C.sub, maxW: 410, lh: 16 })

  // ============ 三、定植抗力与菌群失调 ============
  b.panel(30, 564, 1340, 200, { title: '三、定植抗力：厌氧菌主导的排斥屏障；失调与二重感染' })

  b.rect(50, 598, 620, 140, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.5, rx: 9 })
  b.text(70, 622, '定植抗力（colonization resistance）', { size: 12.5, weight: 700, fill: C.ok })
  b.wtext(70, 646, '占结肠菌群 99% 以上的厌氧菌，通过占位竞争、营养争夺以及代谢产物（短链脂肪酸、脱结合胆汁酸、细菌素）的抑制，形成排斥外来菌定殖的屏障。', { size: 11, fill: C.sub, maxW: 580, lh: 16 })
  b.wtext(70, 710, '屏障一旦削弱，致病菌与耐药菌即可乘虚定殖。', { size: 11, weight: 700, fill: C.ok })

  b.rect(690, 598, 650, 140, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.5, rx: 9 })
  b.text(710, 622, '菌群失调 → 二重感染', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(710, 646, '广谱抗生素、饮食骤变与免疫抑制破坏屏障引发失调：白假丝酵母菌过度增殖致鹅口疮，艰难梭菌增殖致伪膜性肠炎——正常菌群成员本身成为病原。', { size: 11, fill: C.sub, maxW: 610, lh: 16 })
  b.wtext(710, 710, '二重感染 = 抗感染治疗诱发的感染，是其最刺眼的临床形式。', { size: 11, weight: 700, fill: C.bad })

  // ============ 四、机会致病与干预 ============
  b.panel(30, 776, 1340, 204, { title: '四、机会致病的条件与微生态干预' })

  // 左：机会致病条件
  b.text(60, 810, '条件致病菌 → 机会感染的三类条件', { size: 12.5, weight: 700, fill: C.ink })
  const conds: Array<[number, string]> = [
    [838, '免疫屏障破损（放化疗、烧伤、老年）'],
    [866, '正常菌群失调（抗生素后生态位空出）'],
    [894, '侵入性装置（导管、人工关节生物膜）'],
  ]
  conds.forEach(([y, s]) => {
    b.circle(74, y - 4, 3.5, { fill: C.bad })
    b.text(88, y, s, { size: 11, fill: C.sub })
  })
  b.wtext(60, 928, '条件致病菌是医院内感染与导管相关感染的主要病原。', { size: 11, weight: 700, fill: C.bad })

  // 右：干预
  b.rect(700, 800, 640, 64, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.4, rx: 9 })
  b.text(720, 824, '重建菌群屏障', { size: 12.5, weight: 700, fill: C.accD })
  b.text(720, 848, '粪菌移植与微生态制剂（益生菌、益生元）——把「屏障」本身当作治疗对象。', { size: 11, fill: C.sub })
  b.rect(700, 876, 640, 84, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(720, 900, '研究模型', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(720, 924, '无菌动物与悉生动物：在「无菌群」与「已知菌群」两种极端之间做加减法，证明菌群对免疫发育与营养供应的因果性贡献。', { size: 11, fill: C.sub, maxW: 600, lh: 16 })
}

export default scene({
  title: '正常菌群、微生态与机会致病：人体分布地图与屏障机制',
  subtitle: '结肠菌量 10¹¹–10¹²/g，胃至结肠升约 9 个数量级；微生物组经典约 10¹⁴、修订约 3.8×10¹³（约 1:1）；厌氧菌定植抗力破则失调与二重感染（鹅口疮、伪膜性肠炎）',
  draw,
})
