// mb ch7-s4 核糖开关、反义 RNA 与严紧反应（39-c）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 列一：核糖开关（x 30–450） ============
  b.panel(30, 132, 420, 636, {})
  b.ctext(240, 158, '① 核糖开关：RNA 直接感受代谢物', { size: 19, weight: 700, fill: C.ink })
  // 代谢物 + 适配体
  b.polygon([[135, 188], [152, 178], [169, 188], [169, 208], [152, 218], [135, 208]], { fill: C.warnL, stroke: '#b45309', sw: 1.8 })
  b.ctext(152, 206, 'TPP', { size: 10.5, weight: 700, fill: C.rnaD })
  b.arrow(152, 218, 152, 230, { stroke: '#b45309', sw: 1.8, marker: 'rna' })
  // —— mRNA 拓扑 ——
  b.line(60, 252, 430, 252, { stroke: C.rna, sw: 2.6 })
  b.etext(56, 257, "5′", { size: 13, fill: C.rnaD })
  b.text(432, 257, "3′", { size: 13, fill: C.rnaD })
  b.rect(70, 232, 130, 40, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 6 })
  b.ctext(135, 257, '适配体 aptamer', { size: 13, weight: 600, fill: C.rnaD })
  b.rect(210, 232, 90, 40, { fill: '#ffffff', stroke: C.rna, sw: 1.2, rx: 6, dash: '4 3' })
  b.ctext(255, 257, '表达平台', { size: 12.5, fill: C.rnaD })
  b.text(312, 257, 'RBS · ORF', { size: 12.5, fill: C.mute })
  b.text(60, 296, '小分子代谢物：TPP、SAM、FMN、赖氨酸、腺苷钴胺素', { size: 11.5, fill: C.mute })
  b.ctext(240, 318, '经变构切换表达平台构型——无需蛋白传感器', { size: 12, fill: C.mute })
  // —— 两种输出构型 ——
  b.rect(46, 336, 194, 224, { fill: C.okL, stroke: C.ok, sw: 1.4, rx: 8, fillOp: 0.45 })
  b.ctext(120, 362, '未结合代谢物', { size: 14, weight: 700, fill: C.ok })
  b.tag(210, 362, 'ON', { fill: C.okL, stroke: C.ok, size: 12.5, weight: 700, tfill: C.ok, pad: 8 })
  b.ctext(143, 392, '抗终止子（2:3 配对）', { size: 12.5, fill: C.rnaD })
  b.stemLoop(90, 500, { h: 56, r: 14, stroke: C.rna })
  b.stemLoop(196, 500, { h: 56, r: 14, stroke: C.rna })
  for (const yy of [452, 472, 492]) b.line(102, yy, 184, yy, { stroke: C.rna, sw: 1.2, dash: '3 3' })
  b.arrow(56, 536, 230, 536, { stroke: C.ok, sw: 2.6, marker: 'ok' })
  b.ctext(143, 556, '转录通读 → 表达', { size: 12.5, fill: C.ok })
  b.rect(250, 336, 190, 224, { fill: C.badL, stroke: C.bad, sw: 1.4, rx: 8, fillOp: 0.5 })
  b.ctext(322, 362, '结合代谢物后', { size: 14, weight: 700, fill: C.bad })
  b.tag(408, 362, 'OFF', { fill: C.badL, stroke: C.bad, size: 12.5, weight: 700, tfill: C.bad, pad: 8 })
  b.ctext(345, 392, '终止子（3:4）+ poly-U', { size: 12.5, fill: C.bad })
  b.stemLoop(345, 500, { h: 60, r: 16, stroke: C.bad })
  b.arrow(262, 536, 312, 536, { stroke: C.bad, sw: 2.6, marker: 'bad' })
  b.polygon([[320, 526], [336, 536], [320, 546]], { fill: C.bad })
  b.ctext(372, 556, '提前终止转录', { size: 12.5, fill: C.bad })
  // —— 翻译型 + glmS ——
  b.rect(46, 576, 194, 176, { fill: C.panel, stroke: C.line, sw: 1.2, rx: 8 })
  b.ctext(143, 600, '翻译型：遮蔽 RBS', { size: 13.5, weight: 700, fill: C.ink })
  b.line(64, 660, 222, 660, { stroke: C.rna, sw: 2.2 })
  b.rect(88, 644, 52, 32, { fill: C.rnaL, stroke: C.bad, sw: 2, rx: 4 })
  b.ctext(114, 665, 'RBS', { size: 12, weight: 700, fill: C.bad })
  b.stemLoop(114, 640, { h: 34, r: 11, stroke: C.bad })
  b.ellipse(168, 660, 24, 20, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ctext(168, 665, '30S', { size: 11, fill: C.accD })
  b.line(200, 652, 214, 668, { stroke: C.bad, sw: 2.6 })
  b.line(214, 652, 200, 668, { stroke: C.bad, sw: 2.6 })
  b.wtext(58, 704, '发夹覆盖核糖体结合位点，翻译起始受阻', { size: 11.5, fill: C.sub, maxW: 172 })
  b.rect(250, 576, 190, 176, { fill: C.panel, stroke: C.line, sw: 1.2, rx: 8 })
  b.ctext(345, 600, 'glmS：自切核酶', { size: 13.5, weight: 700, fill: C.ink })
  b.tag(318, 624, 'GlcN-6-P', { fill: C.warnL, stroke: '#b45309', size: 11, tfill: C.rnaD, pad: 8 })
  b.arrow(318, 636, 318, 646, { stroke: '#b45309', sw: 1.6, marker: 'rna' })
  b.line(264, 664, 352, 664, { stroke: C.rna, sw: 2.2 })
  b.line(366, 664, 426, 664, { stroke: C.rna, sw: 2.2 })
  b.rect(286, 648, 64, 32, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 4 })
  b.ctext(318, 669, '核酶', { size: 12.5, weight: 700, fill: C.enzD })
  b.line(354, 654, 364, 674, { stroke: C.enz, sw: 2.4 })
  b.line(364, 654, 354, 674, { stroke: C.enz, sw: 2.4 })
  b.wtext(262, 704, '结合葡萄糖胺-6-磷酸后自身切割（以催化方式执行调控）', { size: 11.5, fill: C.sub, maxW: 172 })
  b.ctext(240, 760, 'RNA 世界遗留的「分子化石」', { size: 12.5, fill: C.mute })

  // ============ 列二：反义 RNA / 小 RNA（x 470–890） ============
  b.panel(470, 132, 420, 636, {})
  b.ctext(680, 158, '② 反义 RNA 与小 RNA（sRNA）', { size: 19, weight: 700, fill: C.ink })
  // 靶 mRNA（上）
  b.text(500, 216, '靶 mRNA（sodB，编码含铁酶）', { size: 13.5, weight: 600, fill: C.dna })
  b.line(504, 248, 856, 248, { stroke: C.dna, sw: 2.8 })
  b.etext(498, 253, "5′", { size: 12, fill: C.dnaD })
  b.text(858, 253, "3′", { size: 12, fill: C.dnaD })
  b.rect(560, 232, 56, 32, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 4 })
  b.ctext(588, 253, 'RBS', { size: 12.5, weight: 700, fill: C.dnaD })
  b.rect(624, 232, 46, 32, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 4 })
  b.ctext(647, 253, 'AUG', { size: 12.5, weight: 700, fill: C.dnaD })
  b.rect(680, 236, 160, 24, { fill: '#ffffff', stroke: C.dna, sw: 1.2, rx: 4, dash: '4 3' })
  b.ctext(760, 253, '编码区', { size: 12, fill: C.dnaD })
  // 配对短线
  for (let i = 0; i < 8; i++) {
    b.line(566 + i * 18, 266, 566 + i * 18, 288, { stroke: C.faint, sw: 1.6 })
  }
  // 反义 sRNA（下）
  b.line(560, 292, 700, 292, { stroke: C.rna, sw: 2.8 })
  b.etext(552, 297, "5′", { size: 12, fill: C.rnaD })
  b.text(702, 297, "3′", { size: 12, fill: C.rnaD })
  b.text(566, 318, '与 RBS / AUG 区互补配对', { size: 11.5, fill: C.mute })
  b.text(500, 346, '反义 sRNA（RyhB）', { size: 13.5, weight: 600, fill: C.rna })
  b.text(500, 366, '铁饥饿时大量表达', { size: 11.5, fill: C.mute })
  // Hfq
  b.circle(790, 268, 32, { fill: C.proL, stroke: C.pro, sw: 2.2, dash: '5 4' })
  b.ctext(790, 273, 'Hfq', { size: 14, weight: 700, fill: C.proD })
  b.ctext(790, 318, '伴侣蛋白', { size: 11.5, fill: C.mute })
  b.ctext(790, 336, '协助配对', { size: 11.5, fill: C.mute })
  b.arrow(758, 276, 708, 282, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  // 两种后果
  b.rect(494, 386, 178, 118, { fill: C.enzL, stroke: C.enz, sw: 1.4, rx: 8, fillOp: 0.4 })
  b.ctext(583, 410, '翻译阻遏', { size: 14.5, weight: 700, fill: C.enzD })
  b.wtext(510, 436, 'micF 与 ompF mRNA 5′ 区配对，遮蔽 RBS 抑制外膜蛋白合成（渗透压响应）', { size: 12, fill: C.sub, maxW: 150 })
  b.rect(688, 386, 178, 118, { fill: C.badL, stroke: C.bad, sw: 1.4, rx: 8, fillOp: 0.45 })
  b.ctext(777, 410, '促降解', { size: 14.5, weight: 700, fill: C.bad })
  b.wtext(704, 436, '双链区被 RNase E 切割，sodB / sdh 等含铁酶 mRNA 被清除', { size: 12, fill: C.sub, maxW: 150 })
  // 铁平衡逻辑
  b.rect(494, 520, 372, 120, { fill: C.okL, stroke: C.ok, sw: 1.4, rx: 8, fillOp: 0.35 })
  b.ctext(680, 546, '铁平衡的经济学', { size: 14.5, weight: 700, fill: C.ok })
  b.wtext(510, 572, '铁饥饿 → RyhB 大量表达 → 降解含铁酶 mRNA → 把有限的铁留给必需酶', { size: 12.5, fill: C.sub, maxW: 340 })
  b.wtext(510, 610, '同理：Spot 42 参与半乳糖操纵子选择性调控；ColE1 质粒拷贝数控制（RNA I/II）与转座子免疫同为反义逻辑', { size: 12, fill: C.mute, maxW: 340 })
  // 全局网络提示
  b.rect(494, 656, 372, 96, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.ctext(680, 682, '全局 mRNA 调节网络', { size: 14.5, weight: 700, fill: C.ink })
  b.wtext(510, 708, '一个 sRNA 可同时调节数十个 mRNA——原核系统生物学的前沿', { size: 12.5, fill: C.sub, maxW: 340 })

  // ============ 列三：严紧反应（x 910–1370） ============
  b.panel(910, 132, 460, 636, {})
  b.ctext(1140, 158, '③ 严紧反应：应对氨基酸饥饿', { size: 19, weight: 700, fill: C.ink })
  // 核糖体 + 空载 tRNA
  b.ellipse(1010, 250, 84, 46, { fill: C.accL, stroke: C.acc, sw: 2.2 })
  b.ctext(1010, 246, '核糖体', { size: 14.5, weight: 700, fill: C.accD })
  b.ctext(1010, 268, 'A 位', { size: 12, fill: C.accD })
  // 空载 tRNA（L 形）
  b.line(946, 216, 966, 190, { stroke: C.rna, sw: 4 })
  b.line(966, 190, 996, 202, { stroke: C.rna, sw: 4 })
  b.text(930, 180, '空载 tRNA', { size: 12.5, weight: 700, fill: C.rnaD })
  b.text(930, 198, '（无氨基酸）', { size: 11.5, fill: C.mute })
  b.arrow(996, 202, 1002, 226, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.ctext(1010, 316, '氨基酸饥饿信号', { size: 12.5, fill: C.mute })
  // RelA
  b.tag(1150, 250, 'RelA', { fill: C.enzL, stroke: C.enz, size: 15, weight: 700, tfill: C.enzD })
  b.arrow(1096, 250, 1108, 250, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  // 反应式
  b.rect(940, 330, 400, 74, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 8, fillOp: 0.5 })
  b.ctext(1140, 358, 'GTP + ATP ─RelA→ ppGpp', { size: 16.5, weight: 700, fill: C.rnaD })
  b.ctext(1140, 386, '鸟苷五磷酸（「魔斑」）', { size: 12.5, fill: C.rnaD })
  // ppGpp 作用
  b.tag(1140, 446, 'ppGpp + RNAP（辅以 DksA）', { fill: C.warnL, stroke: '#b45309', size: 14, weight: 600, tfill: C.rnaD })
  b.arrow(1140, 396, 1140, 424, { stroke: '#b45309', sw: 2.2, marker: 'rna' })
  b.ctext(1140, 478, '改变 RNA 聚合酶的启动子选择', { size: 12.5, fill: C.mute })
  // 三条输出
  const outs: [string, string, string, string][] = [
    ['下调', 'rRNA / tRNA 等稳定 RNA 操纵子', '直接作用于开放复合物形成阶段', 'bad'],
    ['上调', '氨基酸合成酶与应激基因', '', 'ok'],
    ['抑制', 'DNA 复制起始', '', 'warn'],
  ]
  outs.forEach(([tag, main, note, key], i) => {
    const oy = 528 + i * 64
    b.arrow(1070, 486, 986, oy - 12, { stroke: key === 'bad' ? C.bad : key === 'ok' ? C.ok : '#b45309', sw: 1.8, marker: key === 'bad' ? 'bad' : key === 'ok' ? 'ok' : 'warn' })
    b.tag(1000, oy, tag, { fill: key === 'bad' ? C.badL : key === 'ok' ? C.okL : C.warnL, stroke: key === 'bad' ? C.bad : key === 'ok' ? C.ok : '#b45309', size: 13, weight: 700, tfill: key === 'bad' ? C.bad : key === 'ok' ? C.ok : '#b45309' })
    b.text(1046, oy + 5, main, { size: 12.5, fill: C.sub })
    if (note) b.text(1046, oy + 24, note, { size: 11, fill: C.mute })
  })
  // SpoT + 持家模式
  b.rect(940, 668, 400, 84, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.ctext(1140, 696, 'SpoT：水解 + 弱合成双重活性，维持稳态', { size: 13.5, weight: 600, fill: C.sub })
  b.ctext(1140, 722, '细胞进入「持家模式」——抑制生长、保存资源', { size: 13.5, fill: C.sub })

  // ============ 底部：原核调控四层次 ============
  b.panel(30, 790, 1340, 176, { title: '原核基因表达的四个调控层次（由左至右逐步「下游化」）' })
  const lv = [
    ['转录起始', '阻遏 / 激活蛋白、CAP', 'lac、trp 阻遏'],
    ['转录提前终止', '衰减子、转录型核糖开关', 'trpL、TPP 开关'],
    ['翻译起始', '翻译型核糖开关遮蔽 RBS、反义 RNA', 'glmS、micF'],
    ['RNA 稳定性', 'sRNA 引导降解', 'RyhB'],
  ]
  lv.forEach(([name, mech, rep], i) => {
    const lx = 60 + i * 330
    b.rect(lx, 838, 290, 100, { fill: i % 2 ? C.accL : C.dnaL, stroke: i % 2 ? C.acc : C.dna, sw: 1.6, rx: 10 })
    b.ctext(lx + 145, 866, `层次 ${i + 1}：${name}`, { size: 16, weight: 700, fill: i % 2 ? C.accD : C.dnaD })
    b.ctext(lx + 145, 894, mech, { size: 12.5, fill: C.sub })
    b.ctext(lx + 145, 920, `代表：${rep}`, { size: 12, fill: C.mute })
    if (i < 3) b.arrow(lx + 294, 888, lx + 326, 888, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  })
}

export default scene({
  title: '核糖开关、反义 RNA 与严紧反应',
  subtitle: 'RNA 层面的三级调控——适配体感代谢物、sRNA 配对靶 mRNA、ppGpp 重编程转录组',
  draw,
})
