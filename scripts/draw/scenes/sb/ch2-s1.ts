// sb ch2-s1 大肠杆菌表达系统：T7 体系（Task 4-a）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、T7 体系分子机制 ============
  b.panel(30, 132, 680, 430, { title: '一、T7 体系：pET 载体与 BL21(DE3) 的两级放大' })
  b.wtext(50, 170, '大肠杆菌是结构生物学样品的第一来源，主力是 Studier 与 Moffatt 1986 年确立的 T7 体系：pET 载体把目的基因置于 T7 启动子之下，宿主聚合酶与 T7 聚合酶接力，把外源蛋白推到细胞总蛋白的 10–30%。', { maxW: 620, lh: 15, size: 10.5, fill: C.sub })
  b.tag(140, 198, 'IPTG（乳糖类似物）', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 8 })
  b.arrow(140, 209, 185, 242, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  // 菌体
  b.rect(60, 214, 620, 118, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 46 })
  b.text(78, 236, 'BL21(DE3)', { size: 12, weight: 700, fill: C.sub })
  b.ellipse(200, 273, 95, 42, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 2, dash: '7 5' })
  b.ctext(200, 270, '染色体（λDE3 整合）', { size: 9.5, weight: 700, fill: C.dnaD })
  b.ctext(200, 286, 'lacUV5–T7 RNAP 基因', { size: 9.5, fill: C.dnaD })
  b.circle(430, 262, 40, { stroke: C.pro, sw: 5, opacity: 0.85 })
  b.ctext(430, 266, 'pET', { size: 13, weight: 700, fill: C.proD })
  b.ctext(430, 316, 'T7 启动子·目的基因', { size: 9.5, fill: C.proD })
  b.circle(575, 288, 22, { stroke: C.enz, sw: 3.5, opacity: 0.9 })
  b.ctext(575, 291, 'pLysS', { size: 9, weight: 700, fill: C.enzD })
  b.ctext(575, 326, 'T7 溶菌酶', { size: 9, fill: C.enzD })
  // 两级放大流程条
  b.text(50, 362, '两级转录放大：', { size: 10.5, weight: 700, fill: C.accD })
  b.tag(150, 388, '宿主 RNAP 转录 T7 聚合酶', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 8 })
  b.arrow(228, 388, 264, 388, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(342, 388, 'T7 聚合酶专一驱动目的基因', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 8 })
  b.arrow(432, 388, 468, 388, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(548, 388, '外源蛋白占 10–30%', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 8 })
  b.ctext(246, 370, '宿主聚合酶', { size: 9, fill: C.mute })
  b.ctext(450, 370, '每秒约 200–260 nt', { size: 9, fill: C.mute })
  b.wtext(50, 428, 'T7 聚合酶延伸速率约为大肠杆菌聚合酶的十倍（每秒约 200–260 个核苷酸）且不识别大肠杆菌启动子；BL21 背景缺失 Lon 与 OmpT 两个蛋白酶，降低产物降解。', { maxW: 620, lh: 15, size: 10.5, fill: C.sub })
  b.wtext(50, 470, 'pLysS 表达的 T7 溶菌酶既切割细胞壁又结合抑制 T7 聚合酶，把未诱导本底泄漏压低一到两个数量级，对毒性蛋白尤其重要；T7lac 衍生载体在目的基因前再加 lac 操纵子，本底被 IPTG 双重压制。', { maxW: 620, lh: 15, size: 10.5, fill: C.sub })
  b.wtext(50, 512, '放大约需 1–10 L 培养规模；「条件 × 构造」双重矩阵是小试选型依据（构造面板参见第 1 章第 4 节）。', { maxW: 620, lh: 14, size: 10, fill: C.mute })

  // ============ 二、诱导参数窗口 ============
  b.panel(720, 132, 650, 430, { title: '二、诱导参数窗口与黄金法则' })
  b.table(740, 176, 610, {
    headers: ['参数', '常规窗口', '调节逻辑'],
    colW: [150, 150, 310],
    rowH: 36,
    fontSize: 11,
    rows: [
      ['诱导时机 OD600', '0.5–0.8', '对数中期代谢旺盛，耐受表达冲击'],
      ['IPTG 浓度', '0.05–1 mM', '高浓度加重代谢负担，反降可溶比例'],
      ['诱导温度', '16–37 °C', '低温减慢折叠与聚集的竞争'],
      ['诱导时长', '3–16 h', '37 °C 约 3–4 h；16 °C 过夜经典'],
      ['培养基', 'LB 或 TB', 'TB 菌密度 OD600 约 4–8，收率数倍'],
      ['摇床转速', '180–250 rpm', '供氧不足时乙酸堆积抑制表达'],
      ['抗生素', '相应于载体', '过夜培养中降解可能需二次补充'],
    ],
  })
  b.tag(1045, 496, '黄金法则：低温慢表达——16–18 °C 过夜配 0.05–0.2 mM IPTG', { fill: C.warnL, stroke: C.warn, size: 11, weight: 700, tfill: C.warnD, pad: 10 })
  b.wtext(740, 522, '规范小试把菌株、温度、诱导剂浓度、时长拆成矩阵，逐条件记录可溶与不可溶组分的电泳谱；37 °C 快速诱导适合本身稳定易溶的原核酶类。', { maxW: 610, lh: 13, size: 10, fill: C.sub })

  // ============ 三、包涵体与复性 ============
  b.panel(30, 578, 680, 380, { title: '三、包涵体：失败中的机会与复性路线' })
  const ibox = (x: number, t: string, body: string, fill: string, stroke: string) => {
    b.rect(x, 630, 138, 92, { fill, stroke, sw: 1.6, rx: 7 })
    b.ctext(x + 69, 652, t, { size: 11, weight: 700, fill: C.ink })
    b.wtext(x + 12, 670, body, { maxW: 118, lh: 12.5, size: 9.5, fill: C.sub })
  }
  ibox(45, '包涵体', '错误折叠产物在胞内凝集：密度高、抗蛋白酶、杂质少', C.panelB, C.line)
  ibox(211, '洗涤与变性', '1–2% Triton 洗涤；6–8 M 尿素或约 6 M 盐酸胍溶解', C.dnaL, C.dna)
  ibox(377, '复性', '稀释复性（骤降 50–100 倍）或透析复性（缓慢梯度除盐）', C.proL, C.pro)
  ibox(543, '活性蛋白', '氧化还原对配二硫键；均一性常逊于可溶表达，无替代时才启用', C.okL, C.ok)
  b.arrow(187, 676, 205, 676, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(353, 676, 371, 676, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(519, 676, 537, 676, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(215, 756, 'GSH 4 mM／GSSG 0.4 mM（约 10:1）', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 8 })
  b.tag(390, 756, '精氨酸 0.4–1 M 抑制聚集', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 8 })
  b.tag(565, 756, '蛋白浓度常低于 0.1 mg/mL', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 8 })
  b.tag(350, 792, '复性收率通常仅 5–20%：需矩阵筛选 pH、精氨酸、蛋白浓度与添加剂', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 10 })
  b.wtext(45, 822, '包涵体其实是「失败中的机会」：纯化后经复性仍可回收活性蛋白；对结构生物学项目，复性蛋白的均一性常逊于可溶表达，仅在没有替代路线时启用。', { maxW: 630, lh: 14, size: 10, fill: C.sub })
  b.wtext(45, 862, '优先纪律：先以低温慢表达、增溶标签（MBP／SUMO）与构造边界调整提高可溶性，包涵体复性是无替代路线时的兜底。', { maxW: 630, lh: 14, size: 10, fill: C.sub })
  b.wtext(45, 912, '洗涤以含 Triton X-100 与低浓度尿素的缓冲液反复进行，去除膜片段与杂蛋白——洗涤彻底程度直接决定复性起点的纯度。', { maxW: 630, lh: 14, size: 10, fill: C.mute })

  // ============ 四、稀有密码子、宿主工程与放大 ============
  b.panel(720, 578, 650, 380, { title: '四、稀有密码子、自诱导与放大' })
  b.rect(740, 616, 610, 112, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 8 })
  b.text(756, 638, '稀有密码子与宿主工程', { size: 12, weight: 700, fill: C.dnaD })
  b.wtext(756, 656, 'AGG、AGA 与 ATA 在大肠杆菌高频词表占比各不足 0.2%，真核基因中可能高出十倍，高频出现触发核糖体停顿与截断。对策：密码子优化全基因合成；或 Rosetta（pRARE 补约 7 种稀有 tRNA）与 CodonPlus-RIL；二硫键蛋白选 SHuffle（氧化性细胞质＋DsbC）或 Origami。', { maxW: 580, lh: 13.5, size: 10, fill: C.sub })
  b.rect(740, 742, 610, 96, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 8 })
  b.text(756, 764, '自诱导培养基（Studier 2005）', { size: 12, weight: 700, fill: C.rnaD })
  b.wtext(756, 782, '甘油为主碳源；葡萄糖阻遏乳糖吸收、压制本底；葡萄糖耗尽后乳糖经代谢产生别乳糖诱导 lac 体系——过夜自动从生长切换到表达，菌密度与收率常高于人工诱导数倍。', { maxW: 580, lh: 13.5, size: 10, fill: C.sub })
  b.rect(740, 852, 610, 100, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.text(756, 874, '表达放大与适用边界', { size: 12, weight: 700, fill: C.accD })
  b.wtext(756, 892, '放大约需 1–10 L 培养规模，补料分批把比生长速率控制在约 0.1–0.2 每小时以维持可溶性。大肠杆菌不能糖基化——真核蛋白应及早平行启用酵母、昆虫或哺乳动物体系。', { maxW: 580, lh: 13.5, size: 10, fill: C.sub })
}

export default scene({
  title: '大肠杆菌表达系统：T7 体系的分子逻辑',
  subtitle: 'lacUV5 控制 T7 聚合酶、T7 启动子驱动目的基因的两级放大使外源蛋白占细胞总蛋白 10–30%；OD600 0.5–0.8、IPTG 0.05–1 mM、16 °C 过夜为经典窗口；包涵体复性收率常仅 5–20%',
  draw,
})
