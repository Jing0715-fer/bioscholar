// vi ch6-s4 基因表达的时序级联与调控网络（39-j 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、HSV α-β-γ 三级级联 ============
  b.panel(30, 132, 660, 430, { title: '一、HSV 的 α-β-γ 三级级联' })
  b.tag(200, 196, 'VP16（毒粒携带）', { fill: C.enzL, stroke: C.enz, size: 11.5, weight: 700, tfill: C.enzD, pad: 10 })
  b.arrow(200, 218, 200, 246, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.ctext(280, 234, '起爆 α 基因', { size: 10, fill: C.mute })
  b.rect(80, 252, 240, 44, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(200, 272, 'α（立即早期）', { size: 12, weight: 700, fill: C.bad })
  b.ctext(200, 290, 'ICP4 · ICP27', { size: 10, fill: C.sub })
  b.arrow(200, 300, 200, 330, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.rect(80, 336, 240, 44, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 8 })
  b.ctext(200, 356, 'β（早期）', { size: 12, weight: 700, fill: C.rnaD })
  b.ctext(200, 374, '复制酶系：合成 DNA', { size: 10, fill: C.sub })
  b.arrow(200, 384, 200, 414, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.rect(80, 420, 240, 44, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 8 })
  b.ctext(200, 440, 'γ（晚期）', { size: 12, weight: 700, fill: C.dnaD })
  b.ctext(200, 458, '结构蛋白：装配子代', { size: 10, fill: C.sub })
  b.path('M 324,270 C 380,270 380,442 324,442', { fill: 'none', stroke: C.bad, sw: 1.8, dash: '6 4', marker: 'bad' })
  b.ctext(415, 350, 'ICP4 双向调控', { size: 10.5, weight: 700, fill: C.bad })
  b.ctext(415, 368, '自抑 α · 激活 β 与 γ', { size: 10, fill: C.mute })
  b.wtext(440, 262, 'ICP4 既当刹车又当油门：抑制自己的 α 基因，却逐级点亮 β、γ——一个蛋白写就级联骨架。', { size: 11, fill: C.sub, maxW: 230, lh: 16 })
  b.wtext(440, 356, '', { size: 1, maxW: 10 })
  b.wtext(440, 396, 'γ2 绝对依赖 DNA 复制：先复制、后装配，次序不可颠倒。', { size: 11, fill: C.sub, maxW: 230, lh: 16 })
  b.wtext(50, 500, '级联各期表达量以数量级变动——时序即「先造工具、后造建材」的调度。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、λ 的 CI-Cro 双稳态开关 ============
  b.panel(710, 132, 660, 430, { title: '二、λ 噬菌体：CI-Cro 双稳态开关' })
  b.text(730, 192, '右操纵区：三个约 17 bp 位点夹在背靠背启动子间', { size: 11.5, weight: 700, fill: C.ink })
  b.line(760, 244, 1250, 244, { stroke: C.dna, sw: 3 })
  const ops: [string, number][] = [['OR3', 830], ['OR2', 940], ['OR1', 1050]]
  ops.forEach(([nm, x]) => {
    b.rect(x - 22, 232, 44, 24, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
    b.ctext(x, 248, nm, { size: 10.5, weight: 700, fill: C.dnaD })
  })
  b.ctext(740, 248, 'PRM ▶', { size: 10, weight: 700, fill: C.ok })
  b.ctext(740, 268, '驱动 CI', { size: 9.5, fill: C.mute })
  b.ctext(1270, 248, '▶ PR', { size: 10, weight: 700, fill: C.bad })
  b.ctext(1270, 268, '驱动 cro', { size: 9.5, fill: C.mute })
  b.text(730, 330, '溶原态（CI 占优）：', { size: 12, weight: 700, fill: '#065f46' })
  b.rect(760, 344, 200, 40, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(860, 364, 'CI 二聚体坐镇 OR1/OR2', { size: 10.5, weight: 700, fill: '#065f46' })
  b.wtext(760, 412, '阻遏 PR（裂解基因关）；又激活 PRM——正负自调、维持溶原。', { size: 10.5, fill: C.sub, maxW: 260, lh: 15 })
  b.text(1030, 330, '裂解态（Cro 占优）：', { size: 12, weight: 700, fill: C.bad })
  b.rect(1060, 344, 200, 40, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(1160, 364, 'Cro 先关 PRM', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(1060, 412, 'CI 不再生产，开关翻向裂解——PR 尽情驱动 cro 与裂解基因。', { size: 10.5, fill: C.sub, maxW: 260, lh: 15 })
  b.tag(930, 476, 'UV → RecA 活化体切割 CI → 诱导进入裂解', { fill: C.warn, size: 11, weight: 700, tfill: '#ffffff', pad: 10 })
  b.wtext(730, 512, '双稳态：两个自增强的吸引子，一触即翻——后续「潜伏／再激活」的通用语法。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 三、运输配额即调控语言 ============
  b.panel(30, 586, 660, 394, { title: '三、流感：用运输配额写时序' })
  b.text(50, 640, 'NP 丰度切换转录 / 复制：', { size: 12, weight: 700, fill: C.ink })
  b.tag(150, 686, 'NP 少 → 转录产 mRNA', { fill: C.rnaL, stroke: C.rna, size: 11, tfill: C.rnaD, pad: 9 })
  b.arrow(300, 686, 360, 686, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.ctext(330, 670, 'NP 积累', { size: 9.5, fill: C.mute })
  b.tag(470, 686, 'NP 多 → 切换复制产 cRNA', { fill: C.dnaL, stroke: C.dna, size: 11, tfill: C.dnaD, pad: 9 })
  b.text(50, 740, 'M1-NEP 复合物的出核运输切换装配：', { size: 12, weight: 700, fill: C.ink })
  b.rect(70, 758, 130, 36, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 7 })
  b.ctext(135, 780, 'vRNP＋M1-NEP', { size: 10, weight: 700, fill: C.rnaD })
  b.arrow(206, 776, 266, 776, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(236, 760, '出核', { size: 9.5, fill: C.accD })
  b.rect(270, 758, 110, 36, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 7 })
  b.ctext(325, 780, '胞质装配', { size: 10.5, weight: 700, fill: C.accD })
  b.wtext(50, 836, '同一套机器，靠「谁押运、运多少」切换模式——运输配额本身就是调控语言。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(50, 876, '不等新转录因子出现，流量重分配即完成程序切换——快而经济。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })

  // ============ 四、Tat 正反馈与网络模体 ============
  b.panel(710, 586, 660, 394, { title: '四、HIV Tat 正反馈：全或无的分子天平' })
  b.rect(740, 640, 150, 44, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 8 })
  b.ctext(815, 660, 'TAR（RNA 茎环）', { size: 11, weight: 700, fill: C.rnaD })
  b.arrow(900, 662, 950, 662, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.ctext(925, 646, 'Tat 结合', { size: 9.5, fill: C.proD })
  b.rect(955, 640, 150, 44, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(1030, 660, '募集 P-TEFb', { size: 11, weight: 700, fill: C.proD })
  b.arrow(1108, 662, 1158, 662, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(1133, 646, '延伸加速', { size: 9.5, fill: C.accD })
  b.rect(1162, 640, 160, 44, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(1242, 660, '更多 Tat 产出', { size: 11, weight: 700, fill: C.accD })
  b.path('M 1242,688 C 1242,730 815,730 815,688', { fill: 'none', stroke: C.bad, sw: 2.2, dash: '7 5', marker: 'bad' })
  b.ctext(1030, 728, '正反馈：产得越多、延伸越快', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(730, 776, '前病毒表达因此呈「全或无」爆发——爆发的另一面是长期沉默：潜伏储库的分子天平。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 820, '共同的语法：正负反馈、前馈与双稳态模体——HSV 级联、λ 开关、Tat 爆发用的是同一套网络词汇。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })
}

export default scene({
  title: '基因表达的时序级联与调控网络：α-β-γ、CI-Cro 与 Tat',
  subtitle: 'VP16 起爆 HSV α 级联、ICP4 双向调控、γ2 依赖 DNA 复制；λ 右操纵区 OR1/OR2/OR3 与背靠背启动子构成双稳态；Tat-TAR 募集 P-TEFb 正反馈致全或无表达',
  draw,
})
