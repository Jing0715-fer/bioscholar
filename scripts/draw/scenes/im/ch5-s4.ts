// im ch5-s4 超抗原、佐剂与丝裂原（39-g 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、超抗原 ============
  b.panel(30, 132, 1340, 316, { title: '一、超抗原：绕过加工的克隆引爆器——不经加工、不占 MHC 沟槽' })

  // 左：普通抗原识别
  b.rect(60, 178, 400, 170, { fill: C.bg, stroke: C.dna, sw: 1.6, rx: 9 })
  b.ctext(260, 202, '普通抗原（对照）', { size: 12.5, weight: 700, fill: C.dnaD })
  b.rect(120, 250, 280, 34, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 6 })
  b.ctext(260, 272, 'MHC II 沟槽中的抗原肽', { size: 10.5, weight: 700, fill: C.dnaD })
  b.circle(200, 316, 15, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.circle(320, 316, 15, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.line(200, 301, 200, 286, { stroke: C.rna, sw: 1.6 })
  b.line(320, 301, 320, 286, { stroke: C.rna, sw: 1.6 })
  b.ctext(260, 320, 'TCR', { size: 11, weight: 700, fill: C.rnaD })
  b.ctext(260, 344, '高度特异识别', { size: 10.5, fill: C.mute })

  // 右：超抗原
  b.rect(490, 178, 400, 170, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.8, rx: 9 })
  b.ctext(690, 202, '超抗原（SAg）', { size: 12.5, weight: 700, fill: C.bad })
  b.rect(550, 250, 280, 34, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 6 })
  b.ctext(690, 272, 'MHC II（沟槽空置）', { size: 10.5, weight: 700, fill: C.dnaD })
  b.tag(690, 316, '超抗原', { fill: C.bad, stroke: C.bad, tfill: '#ffffff', size: 11, weight: 700, pad: 8 })
  b.arrow(662, 306, 618, 288, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.arrow(718, 316, 782, 316, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.circle(800, 316, 15, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.ctext(800, 320, 'Vβ', { size: 10.5, weight: 700, fill: C.rnaD })
  b.ctext(660, 344, '同时结合 MHC II 非多态区与 TCR Vβ', { size: 10.5, fill: C.bad })

  // 中：数量对比
  b.rect(920, 178, 440, 170, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
  b.ctext(1140, 204, '激活克隆比例对比', { size: 12.5, weight: 700, fill: C.ink })
  b.ctext(1140, 240, '普通抗原：通常不足万分之一', { size: 11.5, fill: C.sub })
  b.ctext(1140, 272, '超抗原：约 2%–20%', { size: 14, weight: 700, fill: C.bad })
  b.ctext(1140, 304, '只需极低剂量（纳克级）', { size: 11.5, fill: C.sub })
  b.ctext(1140, 332, '即可引爆大量 T 细胞', { size: 11.5, fill: C.sub })

  b.ctext(700, 388, '金黄色葡萄球菌肠毒素与 TSST-1 经 Vβ 特异激活引发细胞因子风暴样中毒性休克综合征', { size: 11.5, weight: 600, fill: C.ink })

  // ============ 二、三类物质对照 ============
  b.panel(30, 464, 1340, 222, { title: '二、普通抗原 · 超抗原 · 丝裂原：三类激活物质的鲜明对照' })
  b.table(60, 510, 1280, {
    headers: ['比较项目', '普通抗原', '超抗原', '丝裂原'],
    colW: [140, 330, 380, 430],
    rowH: 38,
    fontSize: 12,
    rows: [
      ['识别方式', '经 MHC 提呈，TCR 特异识别', '结合 MHC II 非多态区与 TCR Vβ 直接交联', '非特异性多克隆激活'],
      ['MHC 参与', '必须（肽占 MHC 沟槽）', '不经加工、不占沟槽', '不需要'],
      ['激活克隆比例', '通常不足万分之一', '约 2%–20%', '多克隆、大比例'],
      ['代表', '各类蛋白抗原', '金葡菌肠毒素 · TSST-1', 'PHA · ConA（T 细胞）；LPS（小鼠 B 细胞）'],
    ],
  })

  // ============ 三、佐剂 ============
  b.panel(30, 702, 1340, 276, { title: '三、佐剂：免疫原性的放大器——储库 · 招募 · PRR 刺激三重机制' })
  const mech: Array<[number, string, string, string]> = [
    [60, '储库效应', '抗原在局部缓慢释放，延长暴露时间', C.acc],
    [470, '招募 APC', '吸引与活化抗原提呈细胞', C.dna],
    [880, 'PRR 刺激', '激活模式识别受体，上调共刺激（发放「许可证」）', C.pro],
  ]
  mech.forEach(([x, t, s, col]) => {
    b.rect(x, 748, 420, 88, { fill: col, fillOp: 0.09, stroke: col, sw: 1.7, rx: 9 })
    b.text(x + 20, 774, t, { size: 13.5, weight: 700, fill: col === C.acc ? C.accD : col === C.dna ? C.dnaD : C.proD })
    b.wtext(x + 20, 798, s, { size: 11, fill: C.sub, maxW: 380, lh: 16 })
  })
  b.rect(60, 856, 1280, 100, { fill: C.rnaL, fillOp: 0.35, stroke: C.rna, sw: 1.5, rx: 9 })
  b.text(80, 882, '经典佐剂', { size: 13, weight: 700, fill: C.rnaD })
  b.text(80, 910, '铝佐剂（氢氧化铝 / 磷酸铝，人类疫苗最常用）', { size: 11.5, fill: C.sub })
  b.text(760, 910, '弗氏完全佐剂（含灭活结核杆菌，实验用）', { size: 11.5, fill: C.sub })
  b.ctext(700, 940, '丝裂原则反向提醒：PHA / ConA 激活 T 细胞、LPS 激活小鼠 B 细胞——皆非特异性', { size: 10.5, fill: C.mute })
}

export default scene({
  title: '超抗原、佐剂与丝裂原：三类「非典型」免疫激活物质',
  subtitle: '超抗原不经加工、不占 MHC 沟槽，而结合 MHC II 非多态区与 TCR Vβ 直接交联，纳克级剂量即可激活 2%–20% 的 T 细胞（普通抗原不足万分之一），金葡菌肠毒素与 TSST-1 引发中毒性休克综合征；佐剂经储库效应、APC 招募与 PRR 刺激增强免疫原性（铝佐剂与弗氏完全佐剂）；丝裂原非特异多克隆激活——PHA/ConA 作用于 T 细胞、LPS 作用于小鼠 B 细胞',
  draw,
})
