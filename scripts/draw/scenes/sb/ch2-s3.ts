// sb ch2-s3 哺乳动物细胞表达系统（Task 4-a）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三大细胞系与瞬时表达 ============
  b.panel(30, 132, 660, 430, { title: '一、三大细胞系与 PEI 瞬时表达' })
  b.wtext(50, 170, 'HEK293 于 1977 年以腺病毒 5 型 DNA 转化人胚肾细胞建系；293T 表达 SV40 大 T 抗原，支持含 SV40 复制起点的质粒以附加体形式扩增，瞬时表达量更高。CHO（中国仓鼠卵巢细胞）建系于 1957 年——当今约 70% 的重组蛋白类药物产自 CHO，监管经验与配套工艺最成熟。', { maxW: 620, lh: 14.5, size: 10.5, fill: C.sub })
  b.tag(350, 240, '分工：293 系管瞬时出样与功能验证 · CHO 管放大与监管先例', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 8 })
  // PEI 流程
  b.tag(150, 292, '质粒 DNA（每百万细胞 1 μg）', { fill: C.dnaL, stroke: C.dna, size: 10, weight: 700, tfill: C.dnaD, pad: 7 })
  b.ctext(262, 292, '＋', { size: 13, weight: 700, fill: C.sub })
  b.tag(390, 292, 'PEI 25 kDa 线性·质量比约 1 比 3', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 7 })
  b.arrow(508, 292, 538, 292, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(610, 292, '正电复合物', { fill: C.accL, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 7 })
  b.wtext(55, 324, '复合物经「质子海绵」效应协助内体逃逸；质粒以附加体形式瞬时表达，随传代丢失。转染悬浮驯化的 293F/Expi293：细胞密度约 1–3 × 10^{6} 个/mL，转染后 48–72 小时收获上清。', { maxW: 620, lh: 14, size: 10, fill: C.sub })
  b.tag(200, 392, '常规滴度约 5–50 mg/L', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 8 })
  b.tag(460, 392, '强化体系（补料·降温·丙戊酸）可逾百', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 8 })
  b.tag(160, 432, '传代限于 20–30 代内', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 8 })
  b.tag(350, 432, '活率高于 95%', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 8 })
  b.tag(540, 432, '无支原体污染', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 8 })
  b.ctext(350, 456, '培养体系健康度三条件，缺一不可', { size: 9.5, fill: C.mute })
  b.wtext(50, 486, '无血清培养基是现代标配——既免去批次差异，更重要的是消除胎牛血清中牛 IgG 对 Protein A 纯化的干扰；293T 贴壁瞬时适合 6 孔板到 10 层细胞工厂的小量验证，悬浮 293F 是结构样品主力，两者共享同一套质粒。', { maxW: 620, lh: 14, size: 10, fill: C.sub })

  // ============ 二、分泌捕获与糖基化 ============
  b.panel(710, 132, 660, 430, { title: '二、分泌捕获与糖基化的生理意义' })
  b.wtext(730, 170, '分泌型蛋白的基因前端接信号肽：疏水核心引导新生肽进入内质网，信号肽酶在其 C 端切割释放成熟蛋白。分泌的巨大红利是「上清即半成品」：细胞碎片与绝大多数杂蛋白留在胞内，离心取上清、0.22 μm 过滤后即可进入捕获。', { maxW: 610, lh: 14.5, size: 10.5, fill: C.sub })
  b.tag(830, 252, '离心上清·0.22 μm 过滤', { fill: C.panelB, stroke: C.line, size: 10, weight: 700, tfill: C.ink, pad: 8 })
  b.arrow(950, 252, 978, 252, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(1085, 252, 'Protein A 抓 Fc（CH2–CH3 交界）', { fill: C.dnaL, stroke: C.dna, size: 10, weight: 700, tfill: C.dnaD, pad: 8 })
  b.arrow(1214, 252, 1242, 252, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(1300, 252, '甘氨酸 pH 2.5–3.5', { fill: C.warnL, stroke: C.warn, size: 10, weight: 700, tfill: C.warnD, pad: 8 })
  b.wtext(730, 286, '低 pH 洗脱须立即以 1 M Tris 中和，短暂停留做时间控制以免酸性诱发聚集；下游经典三步：Protein A 捕获、低 pH 病毒灭活、阳离子交换与阴离子交换流穿精纯。', { maxW: 610, lh: 14, size: 10, fill: C.sub })
  b.rect(730, 330, 610, 148, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 8 })
  b.text(746, 352, 'N297 糖链与 ADCC：糖工程赛道', { size: 12, weight: 700, fill: C.enzD })
  b.wtext(746, 372, 'N 连接糖基化发生在 Asn-X-Ser/Thr（X 不为 Pro）序列子。Fc 的 N297 糖链若带核心岩藻糖（α1,6 连接），会立体阻碍 Fc 与 NK 细胞 FcγRIIIa 的结合、削弱 ADCC；去掉岩藻糖可使 ADCC 增强最多约 50 倍——obinutuzumab 过量表达 GnT-III 引入平分型糖链，mogamulizumab 以 FUT8 敲低实现去岩藻糖化。培养天数、葡萄糖与锰离子浓度都能调节岩藻糖与半乳糖比例，糖型并非「细胞系决定论」。', { maxW: 580, lh: 13.5, size: 10, fill: C.sub })
  b.rect(730, 492, 610, 62, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 8 })
  b.text(746, 514, '结构生物学的糖链处理', { size: 12, weight: 700, fill: C.warnD })
  b.wtext(746, 532, '糖链异质性是结晶的天敌——哺乳动物来源蛋白常在解析前以 PNGase F 或 Endo H 压缩糖链；冷冻电镜对糖链宽容度更高，这是膜蛋白结构研究近年转向电镜的原因之一。', { maxW: 580, lh: 13.5, size: 10, fill: C.sub })

  // ============ 三、瞬时与稳定对照 ============
  b.panel(30, 578, 1340, 380, { title: '三、瞬时与稳定表达对照与选型红线' })
  b.table(50, 622, 640, {
    headers: ['维度', '瞬时表达', '稳定细胞系'],
    colW: [120, 240, 280],
    rowH: 44,
    fontSize: 10.5,
    rows: [
      ['出样周期', '3–7 天', '稳定池 2–4 周；单克隆 3–6 个月'],
      ['常规滴度', '约 5–50 mg/L，强化可逾百', '补料分批 1–5 g/L'],
      ['基因状态', '附加体质粒，随传代丢失', '基因组整合并选择扩增'],
      ['适用场景', '结构样品与候选筛选', '产业化与长期供应'],
      ['投入与监管', '门槛低、无需克隆溯源', '投入高、需单克隆化与细胞库体系'],
    ],
  })
  b.rect(710, 616, 630, 158, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.text(726, 638, '选择扩增两条路线', { size: 12, weight: 700, fill: C.accD })
  b.wtext(726, 658, 'DHFR 系统：在 DHFR 缺陷的 CHO DG44/DUKX-B11 中转入目的基因连带 DHFR 标记，甲氨蝶呤（MTX）浓度梯度加压，只有扩增出更多基因拷贝的克隆才能存活；GS 系统：以谷氨酰胺合成酶为标记，MSX 抑制胞内 GS 迫使基因扩增。随后经有限稀释、流式分选或 ClonePix 单克隆化，克隆溯源至单细胞并建立主细胞库与工作细胞库两级种子体系。', { maxW: 600, lh: 13.5, size: 10, fill: C.sub })
  b.rect(710, 786, 630, 128, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 8 })
  b.text(726, 808, '何时必须用哺乳动物系统', { size: 12, weight: 700, fill: C.enzD })
  b.tag(800, 838, '需要天然糖型', { fill: '#ffffff', stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 8 })
  b.tag(1010, 838, '复杂二硫键', { fill: '#ffffff', stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 8 })
  b.tag(1190, 838, '治疗性抗体／Fc 融合', { fill: '#ffffff', stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 8 })
  b.tag(900, 872, '人源膜蛋白冷冻电镜样品', { fill: '#ffffff', stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 8 })
  b.wtext(726, 898, '这四类需求下，大肠杆菌与酵母体系均无法替代。', { maxW: 600, lh: 13, size: 9.5, fill: C.mute })
  b.wtext(50, 916, '瞬时表达适合毫克级的结构与功能研究；产业化与克级以上交给稳定细胞系——工业补料分批的抗体滴度可达 1–5 g/L，批间一致性满足法规要求。', { maxW: 620, lh: 14, size: 10, fill: C.mute })
}

export default scene({
  title: '哺乳动物细胞表达系统：瞬时、稳定与糖基化',
  subtitle: 'PEI（25 kDa 线性，与 DNA 质量比约 1 比 3）转染 293F，48–72 小时收获，滴度约 5–50 mg/L；稳定细胞系经 DHFR/MTX 或 GS/MSX 扩增，补料分批达 1–5 g/L；去岩藻糖使 ADCC 增强最多约 50 倍',
  draw,
})
