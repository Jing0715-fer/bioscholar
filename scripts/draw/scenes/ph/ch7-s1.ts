// ph ch7-s1 心脏电活动与心电图：传导系统、心肌动作电位与体表波形
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、传导系统解剖 ============
  b.panel(30, 132, 660, 430, { title: '一、传导系统：频率最高者统治' })
  b.rect(96, 186, 252, 62, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 14 })
  b.ctext(222, 222, '心房肌（结间束 0.3–0.5 m/s）', { size: 10.5, fill: C.sub })
  b.path('M 96,258 L 348,258 L 316,452 L 128,452 Z', { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.ctext(222, 300, '心室肌', { size: 12, weight: 700, fill: C.sub })
  // 兴奋在心房内传布
  b.arrow(278, 214, 166, 214, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  // 窦房结 / 房室结 / 希氏束 / 束支 / 浦肯野
  b.ellipse(300, 204, 13, 11, { fill: C.enzL, stroke: C.enz, sw: 2 })
  b.ctext(300, 208, '①', { size: 10, weight: 700, fill: C.enzD })
  b.ellipse(196, 252, 12, 10, { fill: C.warnL, stroke: C.warn, sw: 2 })
  b.ctext(196, 256, '②', { size: 10, weight: 700, fill: C.warnD })
  b.line(196, 262, 196, 300, { stroke: C.acc, sw: 4 })
  b.ctext(196, 288, '③', { size: 10, weight: 700, fill: C.accD })
  b.line(196, 300, 162, 380, { stroke: C.acc, sw: 3 })
  b.line(196, 300, 230, 380, { stroke: C.acc, sw: 3 })
  for (const [x1, y1, x2, y2] of [[162, 380, 140, 430], [162, 380, 164, 432], [162, 380, 186, 428], [230, 380, 208, 428], [230, 380, 232, 432], [230, 380, 254, 430]] as [number, number, number, number][]) {
    b.line(x1, y1, x2, y2, { stroke: C.dna, sw: 2 })
  }
  b.ctext(160, 408, '④', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(236, 408, '⑤', { size: 10, weight: 700, fill: C.dnaD })
  // 右列信息
  b.text(420, 192, '① 窦房结：60–100 次/分（优势起搏）', { size: 11, weight: 700, fill: C.enzD })
  b.text(420, 222, '② 房室结：40–60 次/分 · 延搁 0.1 s', { size: 11, weight: 700, fill: C.warnD })
  b.text(420, 252, '③ 希氏束与束支：1.5–4.0 m/s', { size: 11, weight: 700, fill: C.accD })
  b.text(420, 282, '④⑤ 浦肯野纤维：15–40 次/分 · 3–4 m/s', { size: 11, weight: 700, fill: C.dnaD })
  b.text(420, 312, '（心房肌 0.3–0.5、结间束约 1.0 m/s）', { size: 10, fill: C.mute })
  b.wtext(420, 342, '房室延搁保证心房收缩先行、完成心室最后 20%–30% 充盈；浦肯野高速传导使双室在约 0.1 s 内同步去极化。', { size: 10, fill: C.sub, maxW: 240, lh: 16 })
  b.wtext(420, 408, '优势起搏＋超速驱动压抑：高频驱动使下位细胞 Na^{+}-K^{+} 泵代偿性增强（3Na^{+} 出 : 2K^{+} 入）→ 轻度过度极化、自律性被「锁死」；窦房结停搏时下位起搏点需数秒「温醒」。', { size: 10, fill: C.sub, maxW: 240, lh: 16 })
  b.wtext(50, 500, '临床：房室传导减慢（PR 延长）或中断（房室传导阻滞）→ 房室配合作业瓦解，是人工起搏器的经典适应证；室性逸搏 15–40 次/分已难以维持足够心输出量。', { size: 10, fill: C.sub, maxW: 610, lh: 16 })

  // ============ 二、心室肌动作电位五期 ============
  b.panel(710, 132, 660, 210, { title: '二、心室肌动作电位：五期谱' })
  b.arrow(770, 312, 770, 172, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(770, 312, 1100, 312, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.line(770, 250, 1090, 250, { stroke: C.faint, sw: 1, dash: '4 5' })
  b.etext(762, 186, '+30', { size: 10, fill: C.mute })
  b.etext(762, 254, '0', { size: 10, fill: C.mute })
  b.etext(762, 300, '−85', { size: 10, fill: C.mute })
  b.text(782, 170, '膜电位 (mV)', { size: 10, fill: C.sub })
  b.polyline([[785, 296], [790, 286], [794, 178], [802, 206], [808, 212], [850, 216], [900, 220], [940, 224], [975, 258], [1000, 282], [1015, 296], [1085, 296]], { stroke: C.acc, sw: 3 })
  b.rect(787, 286, 208, 8, { fill: C.badL, stroke: C.bad, sw: 1 })
  b.ctext(890, 281, '有效不应期（覆盖收缩期）', { size: 9, fill: C.badD })
  b.text(1150, 196, '0 期 快 Na^{+} 内流，1 ms 达 +30', { size: 9.5, fill: C.sub })
  b.text(1150, 220, '1 期 Ito 瞬时外向 K^{+}', { size: 9.5, fill: C.sub })
  b.text(1150, 244, '2 期 L 型 Ca^{2+} 平台 0.1–0.2 s', { size: 9.5, fill: C.sub })
  b.text(1150, 268, '3 期 K^{+} 外流复极', { size: 9.5, fill: C.sub })
  b.text(1150, 292, '4 期 泵与交换体恢复离子分布', { size: 9.5, fill: C.sub })
  b.ctext(940, 336, '动作电位时程 0.2–0.3 s → 心肌不可能完全强直收缩', { size: 9.5, fill: C.mute })

  // ============ 三、窦房结慢反应电位 ============
  b.panel(710, 362, 660, 200, { title: '三、窦房结：4 期自动去极化与自主神经调制' })
  b.arrow(770, 545, 770, 405, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(770, 545, 1140, 545, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.line(770, 462, 1145, 462, { stroke: C.bad, sw: 1.2, dash: '6 4' })
  b.text(778, 452, '阈电位 −40 mV', { size: 9.5, weight: 700, fill: C.badD })
  b.text(778, 527, '最大舒张电位 −55～−60 mV', { size: 9.5, fill: C.mute })
  b.polyline([[780, 505], [800, 500], [820, 493], [840, 480], [850, 468], [856, 455], [864, 438], [870, 432], [876, 440], [884, 470], [895, 505], [915, 500], [935, 493], [955, 480], [965, 468], [971, 455], [979, 438], [985, 432], [991, 440], [999, 470], [1010, 505], [1030, 500], [1050, 494], [1070, 487], [1090, 477]], { stroke: C.acc, sw: 2.6 })
  b.text(880, 415, '0 期：L 型 Ca^{2+}（慢反应、升支缓）', { size: 9.5, weight: 700, fill: C.accD })
  b.text(785, 540, '4 期：IK 衰减 ＋ If（Na^{+} 内流）递增', { size: 9.5, weight: 700, fill: C.enzD })
  b.wtext(1180, 420, '交感 β_{1}：cAMP↑ → If 与 L 型 Ca^{2+}↑ → 斜率陡、心率↑', { size: 9.5, fill: C.sub, maxW: 165, lh: 14 })
  b.wtext(1180, 465, '迷走 M_{2}：开 K^{+} 通道 → 过度极化、斜率缓、心率↓', { size: 9.5, fill: C.sub, maxW: 165, lh: 14 })
  b.wtext(1180, 510, '心率悬于一对自主神经的拔河', { size: 9.5, fill: C.mute, maxW: 165, lh: 14 })

  // ============ 四、体表心电图 ============
  b.panel(30, 582, 1340, 390, { title: '四、体表心电图：波、间期与电-机械对应' })
  b.line(100, 800, 620, 800, { stroke: C.faint, sw: 1, dash: '4 5' })
  b.polyline([[100, 800], [148, 800], [158, 781], [170, 769], [182, 781], [190, 800], [252, 800], [254, 806], [263, 730], [268, 700], [274, 712], [280, 810], [286, 798], [292, 800], [360, 800], [380, 781], [415, 758], [450, 781], [470, 800], [620, 800]], { stroke: C.ink, sw: 2.6 })
  b.text(330, 670, '心率 75 次/分（周期 0.8 s）', { size: 10, fill: C.sub })
  b.ctext(170, 726, '心房去极化', { size: 10, fill: C.enzD })
  b.arrow(170, 732, 170, 762, { stroke: C.enz, sw: 1.4, marker: 'enz' })
  b.ctext(146, 768, 'P', { size: 12, weight: 700, fill: C.enzD })
  b.ctext(268, 660, '心室去极化', { size: 10, fill: C.badD })
  b.arrow(268, 670, 268, 692, { stroke: C.bad, sw: 1.4, marker: 'bad' })
  b.ctext(300, 680, 'QRS', { size: 12, weight: 700, fill: C.badD })
  b.ctext(415, 706, '心室复极', { size: 10, fill: C.okD })
  b.arrow(415, 712, 415, 752, { stroke: C.ok, sw: 1.4, marker: 'ok' })
  b.ctext(452, 742, 'T', { size: 12, weight: 700, fill: C.okD })
  b.ctext(326, 790, 'ST 段＝平台期（等电位）', { size: 9, fill: C.sub })
  for (const [tx, lb] of [[100, '0'], [360, '0.4 s'], [620, '0.8 s']] as [number, string][]) {
    b.line(tx, 800, tx, 806, { stroke: C.sub, sw: 1.6 })
    b.ctext(tx, 820, lb, { size: 9.5, fill: C.mute })
  }
  b.ctext(252, 828, 'S1', { size: 9, weight: 700, fill: C.badD })
  b.ctext(470, 828, 'S2', { size: 9, weight: 700, fill: C.accD })
  b.line(148, 836, 252, 836, { marker: 'mute', markerStart: 'mute', stroke: C.mute, sw: 1.4 })
  b.ctext(200, 856, 'PR 0.12–0.20 s', { size: 9.5, weight: 700, fill: C.sub })
  b.line(252, 878, 292, 878, { marker: 'mute', markerStart: 'mute', stroke: C.mute, sw: 1.4 })
  b.ctext(272, 872, 'QRS 0.06–0.10 s', { size: 9.5, weight: 700, fill: C.sub })
  b.line(252, 900, 460, 900, { marker: 'mute', markerStart: 'mute', stroke: C.mute, sw: 1.4 })
  b.ctext(356, 920, 'QT ≈0.36 s（QTc ≤0.44 s）', { size: 9.5, weight: 700, fill: C.sub })
  b.wtext(100, 946, 'Einthoven 1903 弦线电流计记录体表 ECG（1924 诺贝尔奖）；十二导联＝综合心电向量的十二个角度「照片」——既能定时，也能定位。', { size: 10, fill: C.sub, maxW: 560, lh: 15 })
  b.table(760, 640, 560, {
    headers: ['成分', '电生理含义', '正常参考'],
    colW: [110, 300, 150], rowH: 30, fontSize: 10.5,
    rows: [
      ['P 波', '心房去极化（Ta 波淹没于 QRS）', '<0.12 s'],
      ['PR 间期', '房去极化始→室去极化始，含房室延搁', '0.12–0.20 s'],
      ['QRS 波群', '心室去极化', '0.06–0.10 s'],
      ['ST 段', '全室处于去极化平台，无净电位差', '等电位'],
      ['T 波', '心室复极（心外膜先复极）', '圆钝非对称'],
      ['QT 间期', '心室电收缩全程（去极＋复极）', 'QTc ≤0.44 s'],
    ],
  })
  b.wtext(760, 890, 'S1 出现于 QRS 之后数十毫秒（电-机械耦联延迟：Ca^{2+} 释放与横桥启动所需时间）；S2 出现于 T 波终末附近——ECG、心音与心内压力曲线并排对照即 Wiggers 图。', { size: 10, fill: C.sub, maxW: 560, lh: 15 })
  b.wtext(760, 944, 'ST 抬高/压低与 T 倒置＝缺血损伤标志；QT 延长预示扭转型室速；PR 延长＝房室阻滞；QRS 增宽＝室内阻滞或室性异位。', { size: 10, fill: C.sub, maxW: 560, lh: 15 })
}

export default scene({
  title: '心脏的电活动与心电图：从窦房结到体表波形',
  subtitle: '传导系统频率梯度：窦房结 60–100 次/分优势起搏、房室结延搁 0.1 s、浦肯野 15–40 次/分；心室肌 2 期 Ca^{2+} 平台使 APD 达 0.2–0.3 s；ECG 之 PR 0.12–0.20 s、QRS 0.06–0.10 s',
  draw,
})
