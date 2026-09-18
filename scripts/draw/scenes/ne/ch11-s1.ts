// ne ch11-s1 自主神经与神经内分泌 / 自主神经系统的结构与递质（39-h 批C）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、交感与副交感的镜像对偶 ============
  b.panel(30, 132, 660, 430, { title: '一、交感与副交感：结构布局的镜像对偶' })
  // 中枢-神经节-效应器链条
  b.ctext(360, 200, '中枢内脏神经元 → 节前神经元 → 节后神经元（三级链条）', { size: 12.5, weight: 700, fill: C.ink })
  // 交感行
  b.text(60, 258, '交感', { size: 14, weight: 700, fill: C.bad })
  b.rect(110, 240, 150, 36, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.6, rx: 7 })
  b.ctext(185, 262, '胸腰段 T1–L2', { size: 11, weight: 700, fill: C.bad })
  b.arrow(260, 258, 330, 258, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.rect(330, 240, 170, 36, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(415, 262, '神经节近中枢（椎旁链）', { size: 10.5, weight: 600, fill: C.ink })
  b.arrow(500, 258, 560, 258, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(610, 262, '节后长', { size: 11, weight: 700, fill: C.bad })
  // 副交感行
  b.text(60, 330, '副交感', { size: 14, weight: 700, fill: C.dnaD })
  b.rect(110, 312, 150, 36, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.6, rx: 7 })
  b.ctext(185, 334, '颅骶段（Ⅲ Ⅶ Ⅸ Ⅹ + S2–S4）', { size: 9.5, weight: 700, fill: C.dnaD })
  b.arrow(260, 330, 330, 330, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.rect(330, 312, 170, 36, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(415, 334, '神经节近效应器', { size: 10.5, weight: 600, fill: C.ink })
  b.arrow(500, 330, 560, 330, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.ctext(610, 334, '节后短', { size: 11, weight: 700, fill: C.dnaD })
  // 效应器
  b.rect(110, 386, 560, 44, { fill: C.proL, fillOp: 0.35, stroke: C.pro, sw: 1.5, rx: 8 })
  b.ctext(390, 412, '效应器：心肌 · 平滑肌 · 外分泌腺（多数器官双重支配、相互拮抗）', { size: 11, weight: 600, fill: C.proD })
  b.arrow(185, 276, 185, 386, { stroke: C.sub, sw: 1.6, dash: '4 4' })
  b.arrow(185, 348, 185, 386, { stroke: C.sub, sw: 1.6, dash: '4 4' })
  b.wtext(60, 466, '「 Fight or Flight 」与「Rest and Digest」：交感把血液送往肌肉、扩大瞳孔；副交感保存能量、促进消化——两者是同一稳态的两个砝码。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(60, 522, '节前一律 ACh；交感节后多 NE；汗腺为胆碱能例外。', { size: 11, weight: 700, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、递质链条与受体 ============
  b.panel(710, 132, 660, 430, { title: '二、递质链条与受体：从节前纤维到效应器' })
  b.table(740, 200, 600, {
    headers: ['环节', '递质', '主要受体', '要点'],
    colW: [170, 100, 130, 200],
    rowH: 52,
    fontSize: 10.5,
    rows: [
      ['节前纤维（两系皆是）', '乙酰胆碱', '烟碱型 N 受体', '神经节突触传递，六烃季铵可阻断'],
      ['交感节后纤维', '去甲肾上腺素', 'α 与 β 受体', '血管、心脏、瞳孔开大肌等多数靶'],
      ['交感节后至汗腺', '乙酰胆碱', '毒蕈碱 M3', '经典例外，阿托品抑制发汗'],
      ['副交感节后纤维', '乙酰胆碱', '毒蕈碱 M 受体', '心脏、内脏平滑肌与外分泌腺效应'],
    ],
  })
  b.rect(740, 466, 600, 96, { fill: C.warnL, fillOp: 0.45, stroke: C.warn, sw: 1.6, rx: 9 })
  b.text(756, 490, '肾上腺髓质：特化的节后「细胞」', { size: 12.5, weight: 700, fill: '#92400e' })
  b.wtext(756, 512, '嗜铬细胞受节前胆碱能（N 受体）支配，分泌肾上腺素为主入血——把交感的秒级神经信号转译为分钟级的激素信号。', { size: 11, fill: C.sub, maxW: 560, lh: 16 })

  // ============ 三、肠神经系统：第二脑 ============
  b.panel(30, 578, 660, 396, { title: '三、肠神经系统：可独立运转的「第二脑」' })
  b.tag(200, 648, '约一亿神经元', { fill: C.dnaL, stroke: C.dna, size: 12.5, weight: 700, tfill: C.dnaD, pad: 9 })
  b.rect(60, 686, 580, 120, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 9 })
  b.text(80, 714, '两个神经丛即可完成局部回路', { size: 13, weight: 700, fill: C.ink })
  b.wtext(80, 740, '肠肌间神经丛（Auerbach）：驱动蠕动波；黏膜下神经丛（Meissner）：调节分泌与局部血流——离体肠段仍能蠕动。', { size: 11, fill: C.sub, maxW: 540, lh: 16 })
  b.wtext(80, 790, '交感（减弱蠕动与分泌）与副交感（迷走，增强）仅作调制——「中央政府只发指导文件，地方政府自办日常」。', { size: 11, fill: C.mute, maxW: 540, lh: 16 })
  b.wtext(60, 840, '肠-脑轴：迷走传入把肠道状态持续上报中枢，肠道菌群代谢物参与情绪与行为调制——「第二脑」之说由此而来。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 四、Barrington 核：排尿开关 ============
  b.panel(710, 578, 660, 396, { title: '四、排尿开关：骶髓反射 + 脑桥 Barrington 核' })
  b.rect(740, 648, 280, 130, { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 1.8, rx: 9 })
  b.text(756, 674, '脑桥 Barrington 核（M 区）', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(756, 698, '排尿的指挥中枢：同步驱动逼尿肌收缩 + 外括约肌松弛——两者必须同步，缺一即尿潴留或失禁。', { size: 11, fill: C.sub, maxW: 248, lh: 16 })
  b.rect(1050, 648, 290, 130, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.8, rx: 9 })
  b.text(1066, 674, '骶髓节段反射（S2–S4）', { size: 12.5, weight: 700, fill: C.dnaD })
  b.wtext(1066, 698, '膀胱牵张感受器 → 骶髓 → 逼尿肌初级反射弧；婴儿期由其独立运作，随皮层控制成熟而受上位统辖。', { size: 11, fill: C.sub, maxW: 258, lh: 16 })
  b.arrow(1020, 713, 1050, 713, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.ctext(1035, 696, '下达', { size: 10, weight: 700, fill: C.sub })
  b.rect(740, 806, 600, 96, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(756, 830, '上位中断 → 脊髓膀胱', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(756, 852, '脊髓横断后 Barrington 指令无法下达：自动性排尿反射亢进但排空不全，需间歇导尿——「开关还在，指挥线断了」。', { size: 11, fill: C.sub, maxW: 560, lh: 16 })
}

export default scene({
  title: '自主神经系统的结构与递质：镜像对偶、胆碱能例外与第二脑',
  subtitle: '节前一律 ACh；交感节后多 NE（汗腺为 M3 例外）；肠神经系统约一亿神经元独立运转',
  draw,
})
