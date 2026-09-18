// ne ch5-s4 神经递质与受体 / 氨基酸类递质与神经肽（39-h 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、谷氨酸-谷氨酰胺穿梭 ============
  b.panel(30, 132, 700, 430, { title: '一、谷氨酸-谷氨酰胺穿梭：回收原料并控毒' })
  b.rect(60, 186, 260, 84, { fill: C.proL, fillOp: 0.45, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(80, 212, '突触前末梢', { size: 13.5, weight: 700, fill: C.proD })
  b.wtext(80, 232, '囊泡谷氨酸；谷氨酰胺酶把谷氨酰胺转回 Glu', { size: 10.5, fill: C.sub, maxW: 226, lh: 14 })
  b.rect(380, 186, 280, 84, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(400, 212, '星形胶质细胞', { size: 13.5, weight: 700, fill: C.accD })
  b.wtext(400, 232, 'EAAT 摄取谷氨酸；谷氨酰胺合成酶（GS）→ 谷氨酰胺', { size: 10.5, fill: C.sub, maxW: 246, lh: 14 })
  b.rect(200, 360, 380, 84, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(220, 388, '突触间隙', { size: 13.5, weight: 700, fill: C.dnaD })
  b.wtext(220, 408, 'Glu 激活突触后 AMPA / NMDA / mGluR', { size: 11, fill: C.sub, maxW: 340, lh: 15 })
  b.arrow(140, 272, 240, 356, { stroke: C.pro, sw: 2.4, marker: 'pro' })
  b.ctext(150, 306, '释放 Glu', { size: 10.5, weight: 700, fill: C.proD })
  b.arrow(470, 356, 540, 272, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.ctext(540, 318, 'EAAT 摄取', { size: 10.5, weight: 700, fill: C.accD })
  b.arrow(378, 226, 322, 226, { stroke: C.ok, sw: 2.4, marker: 'ok' })
  b.ctext(350, 210, '谷氨酰胺回流', { size: 10.5, weight: 700, fill: '#065f46' })
  b.wtext(60, 470, '穿梭的意义：既回收原料、维持递质供给，又把间隙谷氨酸压到无毒水平——EAAT 失效即兴奋性毒性。', { size: 11.5, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 二、受体三系与 NMDA 三重门控 ============
  b.panel(720, 132, 650, 430, { title: '二、谷氨酸受体三系并存与 NMDA 三重门控' })
  b.table(750, 190, 590, {
    headers: ['受体', '类型', '激动 / 门控', '主要离子', '时程与角色'],
    colW: [78, 82, 160, 92, 178],
    rowH: 46,
    fontSize: 11.5,
    rows: [
      ['AMPA', '离子型', '谷氨酸', 'Na⁺ / K⁺', '快电流（毫秒级）'],
      ['KA', '离子型', '谷氨酸', 'Na⁺ / K⁺', '快电流'],
      ['NMDA', '离子型', 'Glu + 共激动 + 去极化', 'Ca²⁺（高通透）', '慢成分 · 可塑性'],
      ['mGluR1–8', '代谢型', '谷氨酸（GPCR）', '—', '慢速调音（G 蛋白）'],
    ],
  })
  b.rect(750, 436, 590, 106, { fill: C.enzL, fillOp: 0.35, stroke: C.enz, sw: 1.5, rx: 9 })
  b.text(770, 462, 'NMDA 三重门控——巧合检测器的分子原型', { size: 13.5, weight: 700, fill: C.enzD })
  b.wtext(770, 486, '① 谷氨酸结合　② 甘氨酸 / D-丝氨酸共激动　③ 去极化逐出 Mg²⁺——三关齐过方开放，通透 Ca²⁺，承担钙信号与可塑性。', { size: 11.5, fill: C.sub, maxW: 550, lh: 17 })

  // ============ 三、抑制 · 兴奋性毒性 · 阿片 ============
  b.panel(30, 576, 1340, 402, { title: '三、抑制性递质、兴奋性毒性与神经肽阿片系统' })
  b.rect(60, 656, 400, 300, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(80, 688, 'GABA 与甘氨酸', { size: 15, weight: 700, fill: C.dnaD })
  b.wtext(80, 720, 'GABA_A：氯通道，带苯二氮卓位点（安定类增强其开放）。', { size: 12, fill: C.sub, maxW: 360, lh: 20 })
  b.wtext(80, 760, 'GABA_B：代谢型受体，巴氯芬为其激动剂。', { size: 12, fill: C.sub, maxW: 360, lh: 20 })
  b.wtext(80, 800, '甘氨酸受体：被士的宁竞争性封锁 → 强直痉挛。', { size: 12, fill: C.sub, maxW: 360, lh: 20 })
  b.rect(490, 656, 400, 300, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(510, 688, '兴奋性毒性：钙的越界', { size: 15, weight: 700, fill: C.bad })
  b.wtext(510, 720, '清除失效（EAAT 失灵 / 缺血）→ 间隙谷氨酸堆积 → NMDA 钙超载 → 蛋白酶 · NOS · 线粒体级联 → 神经元死亡。', { size: 12, fill: C.sub, maxW: 360, lh: 20 })
  b.wtext(510, 790, '卒中半暗带与神经变性共有的轴。', { size: 12, weight: 700, fill: C.bad, maxW: 360, lh: 20 })
  b.rect(920, 656, 420, 300, { fill: C.proL, fillOp: 0.4, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(940, 688, '神经肽与阿片受体', { size: 15, weight: 700, fill: C.proD })
  b.wtext(940, 720, '代表：阿片肽（脑啡肽 · 内啡肽）与 P 物质。', { size: 12, fill: C.sub, maxW: 380, lh: 20 })
  b.wtext(940, 760, 'μ / δ / κ 受体皆 Gi 偶联。', { size: 12, fill: C.sub, maxW: 380, lh: 20 })
  b.wtext(940, 800, '吗啡与芬太尼激动 μ 受体；纳洛酮竞争性逆转过量。', { size: 12, fill: C.sub, maxW: 380, lh: 20 })
}

export default scene({
  title: '氨基酸类递质与神经肽：谷氨酸穿梭、NMDA 门控与阿片',
  subtitle: '谷氨酸经「EAAT 摄取入星形胶质细胞—GS 合成谷氨酰胺—末梢谷氨酰胺酶转回」的穿梭回收原料并控毒；受体三系：AMPA/KA 快电流、NMDA 钙信号与可塑性、mGluR1–8 慢速调音；NMDA 须谷氨酸 + 甘氨酸/D-丝氨酸共激动 + 去极化逐出 Mg²⁺ 三关齐过；GABA_A 为带苯二氮卓位点的氯通道、甘氨酸受体被士的宁封锁致强直痉挛；兴奋性毒性是卒中半暗带与神经变性共有的轴；μ/δ/κ 皆 Gi 偶联，纳洛酮竞争性逆转阿片过量',
  draw,
})
