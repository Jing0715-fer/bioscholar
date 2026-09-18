// bc ch9-s4 糖异生（39-a 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、糖酵解 vs 糖异生：三处旁路 ============
  b.panel(30, 132, 1340, 452, { title: '一、糖酵解与糖异生：三处不可逆步骤的旁路对照' })
  b.ctext(665, 172, '糖酵解 10 步中 7 步可逆（双向共用酶），仅 3 步不可逆——糖异生须「绕行」', { size: 10.5, fill: C.mute })
  b.tag(400, 180, '糖酵解（放能 ↓）', { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD, pad: 6 })
  b.tag(1000, 180, '糖异生（耗能旁路 ↑）', { fill: C.enzL, stroke: C.enz, size: 11.5, weight: 700, tfill: C.enzD, pad: 6 })
  const box = (cy: number, label: string) => {
    b.rect(590, cy - 16, 150, 32, { fill: '#ffffff', stroke: C.sub, sw: 1.6, rx: 7 })
    b.ctext(665, cy + 4, label, { size: 12, weight: 700, fill: C.ink })
  }
  box(200, '葡萄糖'); box(262, '6-磷酸葡萄糖'); box(324, '6-磷酸果糖')
  box(386, '1,6-二磷酸果糖'); box(470, '磷酸烯醇式丙酮酸'); box(532, '丙酮酸')
  // 中心可逆虚线双箭
  b.line(665, 278, 665, 308, { stroke: C.mute, sw: 1.8, dash: '5 4', marker: 'mute', markerStart: 'mute' })
  b.ctext(735, 296, '磷酸己糖异构酶', { size: 9, fill: C.mute })
  b.line(665, 402, 665, 454, { stroke: C.mute, sw: 1.8, dash: '5 4', marker: 'mute', markerStart: 'mute' })
  b.wtext(690, 428, '中间 6 步可逆（醛缩酶 → 烯醇化酶，双向共用）', { size: 9.5, fill: C.mute, maxW: 170, lh: 13 })
  // 左：糖酵解三个不可逆步骤
  const gly = (y1: number, y2: number, lab: string, sub: string) => {
    b.arrow(552, y1, 552, y2, { stroke: C.acc, sw: 2.6, marker: 'acc' })
    b.tag(430, (y1 + y2) / 2, lab, { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 5 })
    b.ctext(430, (y1 + y2) / 2 + 20, sub, { size: 9, fill: C.mute })
  }
  gly(216, 246, '己糖激酶', '耗 1 ATP')
  gly(340, 370, 'PFK-1', '耗 1 ATP')
  gly(486, 516, '丙酮酸激酶', '产 1 ATP')
  // 右：糖异生旁路
  b.path('M740,262 C830,262 830,200 740,200', { stroke: C.enz, sw: 2.6, marker: 'enz', fill: 'none' })
  b.tag(940, 224, '葡萄糖-6-磷酸酶', { fill: C.enzL, stroke: C.enz, size: 11, weight: 700, tfill: C.enzD, pad: 5 })
  b.ctext(940, 248, '（仅存在于肝 · 肾内质网）', { size: 9.5, fill: C.sub })
  b.path('M740,386 C830,386 830,324 740,324', { stroke: C.enz, sw: 2.6, marker: 'enz', fill: 'none' })
  b.tag(940, 348, '果糖二磷酸酶-1', { fill: C.enzL, stroke: C.enz, size: 11, weight: 700, tfill: C.enzD, pad: 5 })
  b.ctext(940, 372, '（F-2,6-BP 抑制 · 柠檬酸激活）', { size: 9.5, fill: C.sub })
  // 丙酮酸 → OAA → PEP 旁路（线粒体）
  b.rect(756, 494, 210, 70, { fill: '#ffedd5', fillOp: 0.5, stroke: C.warn, sw: 1.6, rx: 9, dash: '6 4' })
  b.text(768, 508, '线粒体', { size: 9.5, weight: 700, fill: '#78350f' })
  b.path('M740,532 L927,532 L927,486', { stroke: C.enz, sw: 2.6, marker: 'enz', fill: 'none' })
  b.tag(858, 556, '丙酮酸羧化酶（耗 1 ATP）', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 4 })
  b.rect(862, 452, 130, 34, { fill: '#ffffff', stroke: C.sub, sw: 1.6, rx: 7 })
  b.ctext(927, 473, '草酰乙酸', { size: 11.5, weight: 700, fill: C.ink })
  b.path('M927,452 C927,410 830,410 742,470', { stroke: C.enz, sw: 2.6, marker: 'enz', fill: 'none' })
  b.tag(890, 398, 'PEP 羧激酶（耗 1 GTP）', { fill: C.enzL, stroke: C.enz, size: 11, weight: 700, tfill: C.enzD, pad: 5 })
  b.wtext(1004, 492, '草酰乙酸不能穿膜：以苹果酸（兼带出 NADH）或天冬氨酸形式出线粒体。', { size: 9.5, fill: C.sub, maxW: 180, lh: 14 })
  // 代价与警示
  b.rect(1090, 240, 250, 128, { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.5, rx: 9 })
  b.text(1106, 264, '旁路代价（2 丙酮酸 → 葡萄糖）', { size: 11, weight: 700, fill: C.enzD })
  b.text(1106, 290, '· 丙酮酸羧化酶 ×2 → 2 ATP', { size: 10.5, fill: C.sub })
  b.text(1106, 312, '· PEP 羧激酶 ×2 → 2 GTP', { size: 10.5, fill: C.sub })
  b.text(1106, 338, '合计 6 个高能磷酸键', { size: 11, weight: 700, fill: C.enzD })
  b.text(1106, 358, '（糖酵解仅净回收 2 ATP）', { size: 9.5, fill: C.mute })
  b.rect(1090, 396, 250, 76, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.5, rx: 8 })
  b.text(1106, 420, '肌 · 脑无葡萄糖-6-磷酸酶', { size: 10.5, weight: 700, fill: C.bad })
  b.text(1106, 440, '肌糖原不能直接补充血糖', { size: 10.5, fill: C.sub })
  b.text(1106, 460, '（仅肝、肾可输出游离葡萄糖）', { size: 9.5, fill: C.mute })

  // ============ 二、场所、原料与总反应 ============
  b.panel(30, 596, 440, 384, { title: '二、场所、原料与总代价' })
  b.wtext(46, 640, '主要场所：肝（约 80%~90%）；肾皮质次之——长期饥饿时肾糖异生比例大增，被称「第二个糖异生器官」。', { size: 11, fill: C.sub, maxW: 410, lh: 16 })
  b.wtext(46, 692, '空腹血糖约 4.5 mmol/L（总量仅约 20 g），脑日耗葡萄糖 100~120 g，全靠糖异生维持。', { size: 11, fill: C.sub, maxW: 410, lh: 16 })
  b.text(46, 744, '原料：', { size: 12, weight: 700, fill: C.ink })
  b.wtext(46, 768, '乳酸（LDH 氧化为丙酮酸）· 甘油（→ 磷酸二羟丙酮，仅肝）· 生糖氨基酸（转氨后成 TCA 中间物 → OAA）· 丙酸', { size: 10.5, fill: C.sub, maxW: 410, lh: 15 })
  b.rect(46, 824, 410, 92, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.wtext(62, 848, '2 丙酮酸 + 4 ATP + 2 GTP + 2 NADH + 6 H₂O → 葡萄糖 + 4 ADP + 2 GDP + 6 Pi + 2 NAD⁺ + 2 H⁺', { size: 10.5, weight: 700, fill: C.ink, maxW: 380, lh: 16 })
  b.wtext(62, 892, '消耗 6 个高能磷酸键 ≫ 糖酵解回收的 2 ATP——代价换来反应方向的不可逆性。', { size: 10, fill: C.mute, maxW: 380, lh: 14 })
  b.ctext(251, 952, '由非糖物质合成葡萄糖或糖原', { size: 10.5, fill: C.mute })

  // ============ 三、Cori 循环与丙氨酸循环 ============
  b.panel(470, 596, 460, 384, { title: '三、Cori 循环与葡萄糖-丙氨酸循环' })
  b.cell(590, 700, 62, 44, { label: '肌肉' })
  b.ctext(590, 724, '糖酵解产乳酸', { size: 9, fill: C.mute })
  b.cell(812, 700, 62, 44, { label: '肝' })
  b.ctext(812, 724, '糖异生成葡萄糖', { size: 9, fill: C.mute })
  b.arrow(624, 662, 776, 662, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.ctext(700, 648, '乳酸（血）', { size: 11, weight: 700, fill: C.bad })
  b.arrow(776, 742, 624, 742, { stroke: C.ok, sw: 2.4, marker: 'ok' })
  b.ctext(700, 764, '葡萄糖（血）', { size: 11, weight: 700, fill: '#065f46' })
  b.tag(700, 700, 'Cori 循环', { fill: C.panelB, stroke: C.sub, size: 10, weight: 700, tfill: C.sub, pad: 4 })
  b.wtext(486, 806, '红细胞与剧烈运动的肌肉糖酵解产乳酸 → 肝摄取糖异生成葡萄糖回输', { size: 10.5, fill: C.sub, maxW: 430, lh: 15 })
  b.wtext(486, 821, '——能量上「肝贴补 ATP」换取肌糖即时供给，并防止乳酸酸中毒。', { size: 10.5, fill: C.sub, maxW: 430, lh: 15 })
  b.text(486, 862, '葡萄糖-丙氨酸循环（兼运氮）：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(560, 906, '肌肉', { fill: C.panelB, stroke: C.line, size: 10.5, weight: 700, tfill: C.sub, pad: 5 })
  b.tag(842, 906, '肝', { fill: C.panelB, stroke: C.line, size: 10.5, weight: 700, tfill: C.sub, pad: 5 })
  b.arrow(600, 906, 800, 906, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.ctext(700, 890, '丙氨酸（携氨基氮）', { size: 10, weight: 700, fill: C.proD })
  b.arrow(800, 934, 600, 934, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.ctext(700, 952, '葡萄糖', { size: 10, weight: 700, fill: '#065f46' })

  // ============ 四、互为倒数调节 ============
  b.panel(930, 596, 440, 384, { title: '四、互为倒数调节：F-2,6-BP 是枢纽' })
  b.tag(1150, 664, 'F-2,6-BP（枢纽）', { fill: C.rnaL, stroke: C.rna, size: 13, weight: 700, tfill: C.rnaD, pad: 7 })
  b.arrow(1108, 682, 1044, 706, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.arrow(1192, 682, 1256, 706, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.tag(1030, 730, '激活 PFK-1', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 5 })
  b.ctext(1030, 752, '糖酵解 ↑', { size: 11, weight: 700, fill: C.accD })
  b.tag(1272, 730, '抑制 FBPase-1', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 5 })
  b.ctext(1272, 752, '糖异生 ↓', { size: 11, weight: 700, fill: C.enzD })
  b.rect(946, 780, 204, 128, { fill: C.panel, stroke: C.acc, sw: 1.5, rx: 9 })
  b.wtext(960, 804, '胰高血糖素 / 肾上腺素：cAMP-PKA 磷酸化双功能酶（PFK-2 / FBPase-2）→ 肝内 FBPase-2 占优 → F-2,6-BP ↓ → 糖异生 ↑', { size: 10, fill: C.sub, maxW: 180, lh: 14 })
  b.rect(1162, 780, 194, 128, { fill: C.panel, stroke: C.ok, sw: 1.5, rx: 9 })
  b.wtext(1176, 804, '胰岛素：使双功能酶去磷酸化（PFK-2 占优）→ F-2,6-BP ↑ → 酵解 ↑、糖异生 ↓', { size: 10, fill: C.sub, maxW: 170, lh: 14 })
  b.wtext(946, 930, '乙酰CoA 激活丙酮酸羧化酶、同时抑制 PDH（「丙酮酸分流」）；ATP / 柠檬酸抑制 PFK-1，均推动糖异生。', { size: 10, fill: C.sub, maxW: 420, lh: 14 })
  b.wtext(946, 962, '互为倒数避免无效循环（ATP 空转）；底物循环可产热（颤抖性产热）；饥饿时糖皮质激素诱导关键酶转录上调。', { size: 10, fill: C.mute, maxW: 420, lh: 14 })
}

export default scene({
  title: '糖异生：三处旁路绕行与互为倒数调节',
  subtitle: '丙酮酸羧化酶 + PEP 羧激酶、果糖二磷酸酶-1、葡萄糖-6-磷酸酶三处绕行（耗 4 ATP + 2 GTP）；Cori 循环防酸中毒；F-2,6-BP 为酵解 / 糖异生互为倒数的调节枢纽',
  draw,
})
