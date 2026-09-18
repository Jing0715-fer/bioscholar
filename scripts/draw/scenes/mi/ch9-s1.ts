// mi ch9-s1 微生物在生态系统中的地位（39-f 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、生态三角色 ============
  b.panel(30, 132, 1340, 170, { title: '一、微生物一身兼三职：生产者 · 消费者 · 分解者' })
  const roles: Array<[number, string, string, string, string]> = [
    [50, '生产者', C.ok, C.okL, '光合与化能自养固定 CO₂——蓝细菌、藻类、硝化菌与硫氧化菌是水域与黑暗深海的初级生产者'],
    [495, '消费者', C.warn, C.warnL, '原生动物捕食细菌与藻类，衔接食物链——微生物也是被取食与取食者'],
    [940, '分解者', C.dna, C.dnaL, '把有机残体彻底矿化归还环境——收尾者身份使微生物主导物质循环'],
  ]
  roles.forEach(([x, t, c, cl, s]) => {
    b.rect(x, 160, 400, 118, { fill: cl, fillOp: 0.5, stroke: c, sw: 1.6, rx: 9 })
    b.tag(x + 90, 188, t, { fill: cl, stroke: c, size: 13.5, weight: 700, tfill: C.ink, pad: 10 })
    b.wtext(x + 16, 218, s, { size: 11, fill: C.sub, maxW: 368, lh: 16 })
  })

  // ============ 二、碳循环 ============
  b.panel(30, 314, 660, 332, { title: '二、碳循环：微生物在两端都是主力' })

  b.tag(360, 372, '大气 CO₂', { fill: C.accL, stroke: C.acc, size: 13, weight: 700, tfill: C.accD, pad: 10 })
  // 固定（左侧下行）
  b.arrow(240, 388, 240, 540, { stroke: C.ok, sw: 3, marker: 'ok' })
  b.wtext(110, 430, '光合 / 化能自养固定（生产者）', { size: 11, weight: 700, fill: C.ok, maxW: 130, lh: 15 })
  b.wtext(110, 480, '蓝细菌 · 藻类 · 硝化菌 · 硫氧化菌经 Calvin 等途径固碳', { size: 10, fill: C.sub, maxW: 130, lh: 14 })
  // 有机物库
  b.tag(360, 570, '有机物（生物量 · 残体 · 排泄物）', { fill: C.dnaL, stroke: C.dna, size: 11.5, weight: 700, tfill: C.dnaD, pad: 9 })
  // 分解（右侧上行）
  b.arrow(480, 540, 480, 388, { stroke: C.dna, sw: 3, marker: 'dna' })
  b.wtext(510, 430, '呼吸与发酵矿化（分解者收尾）', { size: 11, weight: 700, fill: C.dnaD, maxW: 130, lh: 15 })
  b.wtext(510, 480, '彻底分解为 CO₂ 归还大气——碳的主循环闭合', { size: 10, fill: C.sub, maxW: 130, lh: 14 })
  // 甲烷支路
  b.arrow(430, 588, 560, 588, { stroke: C.rna, sw: 2.4, marker: 'rna' })
  b.ctext(495, 576, '无氧环境', { size: 9.5, fill: C.mute })
  b.tag(580, 588, 'CH₄', { fill: C.rnaL, stroke: C.rna, size: 11.5, weight: 700, tfill: C.rnaD, pad: 8 })
  b.ctext(560, 618, '产甲烷古菌', { size: 10, fill: C.mute })
  b.wtext(50, 630, '未被完全矿化的有机碳埋藏为化石燃料——燃烧将其快速释放，打破收支平衡。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、氮循环 ============
  b.panel(710, 314, 660, 332, { title: '三、氮循环：微生物独揽全部关键反应' })

  b.tag(1035, 372, 'N₂（大气）', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 9 })
  // 固氮
  b.arrow(960, 392, 890, 460, { stroke: C.ok, sw: 2.6, marker: 'ok' })
  b.ctext(860, 420, '生物固氮', { size: 10.5, weight: 700, fill: C.ok })
  b.wtext(760, 436, '根瘤菌 · 固氮菌（固氮酶）', { size: 9.5, fill: C.mute, maxW: 130, lh: 13 })
  b.tag(860, 478, 'NH₄⁺ / NH₃', { fill: C.rnaL, stroke: C.rna, size: 11.5, weight: 700, tfill: C.rnaD, pad: 8 })
  // 氨化
  b.arrow(905, 500, 975, 545, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.ctext(960, 512, '氨化（分解者）', { size: 10, weight: 700, fill: C.dnaD })
  // 硝化
  b.arrow(905, 478, 1145, 478, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.ctext(1025, 464, '硝化（两级）', { size: 10.5, weight: 700, fill: C.enzD })
  b.ctext(1025, 492, '亚硝化单胞菌 + 硝化杆菌', { size: 9.5, fill: C.mute })
  b.tag(1195, 478, 'NO₃⁻', { fill: C.enzL, stroke: C.enz, size: 11.5, weight: 700, tfill: C.enzD, pad: 8 })
  // 同化
  b.arrow(1195, 498, 1130, 545, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.ctext(1180, 528, '同化为有机氮', { size: 10, weight: 700, fill: C.ok })
  b.tag(1035, 570, '有机氮（生物量）', { fill: C.dnaL, stroke: C.dna, size: 11.5, weight: 700, tfill: C.dnaD, pad: 9 })
  // 反硝化
  b.arrow(1215, 460, 1090, 392, { stroke: C.bad, sw: 2.4, marker: 'bad', dash: '7 5' })
  b.ctext(1210, 420, '反硝化', { size: 10.5, weight: 700, fill: C.bad })
  b.ctext(1210, 436, '返回大气', { size: 9.5, fill: C.mute })
  b.wtext(730, 618, '固氮、氨化、硝化与反硝化全部由微生物驱动——植物的「可利用氮」几乎全部出自微生物之手。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、共生与微生态要点 ============
  b.panel(30, 658, 1340, 322, { title: '四、微生物与动植物的共生；土壤与人体微生物组' })

  // 左：植物共生三例
  b.text(60, 692, '与植物共生', { size: 13, weight: 700, fill: C.ok })
  const plant: Array<[number, string, string]> = [
    [718, '根际 PGPR', '根系分泌物供养高密度菌群，促生防病'],
    [756, '外生/丛枝菌根', '真菌以碳磷交换为核心与根互惠'],
    [794, '地衣', '藻菌共生体——裸岩成土的先锋'],
  ]
  plant.forEach(([y, t, s]) => {
    b.circle(74, y - 4, 3.5, { fill: C.ok })
    b.text(88, y, t, { size: 11.5, weight: 700, fill: C.ink })
    b.text(88 + 130, y, s, { size: 10.5, fill: C.sub })
  })
  // 中：动物共生
  b.text(470, 692, '与动物共生', { size: 13, weight: 700, fill: C.warn })
  const animal: Array<[string, string]> = [
    ['瘤胃', '种间氢转移互营彻底分解纤维素'],
    ['白蚁肠道', '共生微生物消化特殊底物'],
    ['深海管虫', '体内化能自养菌供养整个群落'],
  ]
  animal.forEach(([t, s], i) => {
    b.circle(484, 714 + i * 38 - 4, 3.5, { fill: C.warn })
    b.text(498, 714 + i * 38, t, { size: 11.5, weight: 700, fill: C.ink })
    b.text(498 + 60, 714 + i * 38, s, { size: 10.5, fill: C.sub })
  })
  // 人体微生物组卡
  b.rect(850, 700, 480, 118, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.5, rx: 9 })
  b.text(870, 724, '人体微生物组', { size: 13, weight: 700, fill: C.accD })
  b.wtext(870, 748, '经典估计约 10¹⁴ 个细胞（为自身细胞的 10 倍）；直接计数修订为约 3.8×10¹³（约 1:1）。微生物基因数远超人类基因组约 2 万个基因——「第二基因组」。', { size: 10.5, fill: C.sub, maxW: 440, lh: 15 })
  b.wtext(870, 800, '承担免疫训练、维生素合成与定植抗力；失调与代谢免疫疾病相关。', { size: 10.5, fill: C.sub, maxW: 440, lh: 15 })

  // 底：土壤大本营 + 研究模型
  b.rect(50, 840, 620, 116, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.5, rx: 9 })
  b.text(70, 864, '土壤：微生物的大本营', { size: 13, weight: 700, fill: C.dnaD })
  b.wtext(70, 888, '每克肥土含 10⁷–10⁹ 个微生物——数量最大、多样性最高、抗生素资源最富的微生物储库。', { size: 11, fill: C.sub, maxW: 580, lh: 16 })
  b.rect(700, 840, 630, 116, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(720, 864, '研究模型', { size: 13, weight: 700, fill: C.ink })
  b.wtext(720, 888, '无菌动物与悉生动物证明菌群对免疫发育与营养供应的因果性贡献；宏基因组学绕开培养直接读取群落基因。', { size: 11, fill: C.sub, maxW: 590, lh: 16 })
}

export default scene({
  title: '微生物在生态系统中的地位：碳氮循环的主力与三大角色',
  subtitle: '微生物兼生产者、消费者与分解者主导物质循环；氮循环全部关键反应由微生物驱动；人体微生物组约 10¹⁴（修订约 1:1）为「第二基因组」；每克肥土 10⁷–10⁹ 菌',
  draw,
})
