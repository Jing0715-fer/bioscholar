// ph ch7-s4 微循环、淋巴与静脉回流：Starling 力与水肿机制
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、微循环单元 ============
  b.panel(30, 132, 660, 440, { title: '一、微循环单元：主干加分叉，三条通路' })
  b.rect(200, 175, 260, 16, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.arrow(460, 183, 505, 183, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.ctext(240, 168, '微静脉', { size: 10.5, weight: 700, fill: C.accD })
  b.rect(60, 240, 130, 20, { fill: '#ffe4e6', stroke: C.rose, sw: 2, rx: 10 })
  for (const mx of [85, 115, 145, 175]) b.circle(mx, 240, 5, { fill: C.rose })
  b.ctext(125, 232, '微动脉', { size: 10.5, weight: 700, fill: C.rose })
  b.rect(190, 244, 240, 12, { fill: '#ffe4e6', stroke: C.rose, sw: 1.6, rx: 6 })
  b.ctext(310, 236, '后微动脉（直捷通路）', { size: 10, weight: 700, fill: C.rose })
  for (const cx of [225, 295, 365]) {
    b.rect(cx - 3.5, 191, 7, 53, { fill: '#fff1f2', stroke: C.dna, sw: 1.6 })
    b.ellipse(cx, 238, 8, 5, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  }
  b.braceH(225, 162, 147, { label: '真毛细血管网（迂回通路）', flip: true, fill: C.dnaD })
  b.text(388, 214, '交换：扩散·滤过·吞饮', { size: 9.5, fill: C.dnaD })
  b.path('M 70,262 Q 55,302 105,306 L 425,306 Q 475,306 462,186', { stroke: C.warn, sw: 5, fill: 'none', opacity: 0.75 })
  b.ctext(265, 328, '动-静脉短路（皮肤，交感缩血管纤维控制）', { size: 10, weight: 700, fill: C.warnD })
  b.table(60, 350, 600, {
    headers: ['通路', '开关者', '主要功能'],
    colW: [140, 210, 250], rowH: 26, fontSize: 10.5,
    rows: [
      ['迂回通路', '毛细前括约肌轮流开闭', '营养物质与代谢产物交换'],
      ['直捷通路', '后微动脉平滑肌', '快速过境、少量交换'],
      ['动-静脉短路', '交感缩血管纤维', '皮肤散热或保温的血流调门'],
    ],
  })
  b.wtext(50, 492, '毛细前括约肌听命于局部代谢产物：腺苷、CO_{2}、H^{+}、K^{+}、乳酸与组织液渗透压升高使其松弛开放，代谢产物被冲走后凭基础张力关闭——「按需灌注」，安静时仅约 1/4 毛细血管开放；灌注压过低时血管内压不足以平衡平滑肌张力，出现临界闭合（Burton 1951）。', { size: 10, fill: C.sub, maxW: 615, lh: 15 })

  // ============ 二、Starling 力 ============
  b.panel(710, 132, 660, 440, { title: '二、Starling 力：滤过与重吸收的天平（1896）' })
  b.rect(740, 300, 540, 18, { fill: '#fff1f2', stroke: C.rose, sw: 2, rx: 9 })
  for (const [x, y1, y2] of [[800, 296, 258], [840, 296, 268]] as [number, number, number][]) {
    b.arrow(x, y1, x, y2, { stroke: C.acc, sw: 2, marker: 'acc' })
  }
  for (const [x, y1, y2] of [[1180, 258, 296], [1220, 268, 296]] as [number, number, number][]) {
    b.arrow(x, y1, x, y2, { stroke: C.ok, sw: 2, marker: 'ok' })
  }
  b.ctext(800, 240, '动脉端滤过', { size: 11, weight: 700, fill: C.accD })
  b.ctext(1200, 240, '静脉端重吸收', { size: 11, weight: 700, fill: C.okD })
  b.ctext(1005, 240, '翻转点 Pc ≈14', { size: 10, fill: C.mute })
  b.line(1000, 250, 1000, 320, { stroke: C.mute, sw: 1.2, dash: '5 4' })
  b.ctext(790, 336, 'Pc 30', { size: 10, weight: 700, fill: C.sub })
  b.ctext(1230, 336, 'Pc 12', { size: 10, weight: 700, fill: C.sub })
  b.text(740, 362, '有效滤过压 ＝ (Pc ＋ π_{i}) − (P_{i} ＋ π_{p})', { size: 12.5, weight: 700, fill: C.ink })
  b.table(730, 378, 560, {
    headers: ['力', '动脉端', '静脉端', '方向'],
    colW: [230, 105, 105, 120], rowH: 26, fontSize: 10.5,
    rows: [
      ['毛细血管血压 Pc', '约 30', '约 12', '促滤过'],
      ['组织液胶体渗透压 π_{i}', '约 8', '约 8', '促滤过'],
      ['组织液静水压 P_{i}', '约 −3', '约 −3', '抗滤过'],
      ['血浆胶体渗透压 π_{p}', '约 25', '约 25', '抗滤过（白蛋白）'],
      ['有效滤过压', '约 +16', '约 −2', '动脉端出、静脉端回'],
    ],
  })
  b.wtext(726, 566, '全天滤出约 20 L：约九成静脉端重吸收，余 2–4 L 由淋巴回收——「零头走淋巴」。', { size: 10, fill: C.sub, maxW: 630, lh: 15 })

  // ============ 三、水肿四大机制与淋巴 ============
  b.panel(30, 592, 660, 380, { title: '三、水肿四大机制与淋巴回流' })
  const edema: Array<[number, number, string, string]> = [
    [60, 640, '① 毛细血管血压 ↑', '右心衰竭（下垂部位最重）、静脉血栓或外压'],
    [370, 640, '② 血浆胶体渗透压 ↓', '肾病综合征大量蛋白尿、肝硬化白蛋白合成不足、重度营养不良'],
    [60, 724, '③ 毛细血管通透性 ↑', '炎症介质（组胺、缓激肽）开大内皮间隙，蛋白漏入组织间隙'],
    [370, 724, '④ 淋巴回流受阻', '丝虫病堵塞淋巴管致象皮肿、肿瘤转移或淋巴结清扫后'],
  ]
  edema.forEach(([x, y, t, s]) => {
    b.rect(x, y, 290, 74, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8 })
    b.text(x + 16, y + 26, t, { size: 12, weight: 700, fill: C.badD })
    b.wtext(x + 16, y + 46, s, { size: 9.5, fill: C.sub, maxW: 260, lh: 14 })
  })
  // 淋巴系统示意
  b.ellipse(100, 870, 34, 13, { fill: C.okL, stroke: C.ok, sw: 2 })
  b.line(70, 858, 52, 846, { stroke: C.mute, sw: 1.2 })
  b.line(130, 858, 148, 846, { stroke: C.mute, sw: 1.2 })
  b.rect(140, 862, 190, 16, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.arrow(150, 870, 320, 870, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  for (const vx of [180, 230, 280]) b.path(`M ${vx - 6},862 q 6,8 12,0`, { stroke: C.okD, sw: 1.6, fill: 'none' })
  b.ctext(100, 846, '毛细淋巴管（盲端）', { size: 9.5, weight: 700, fill: C.okD })
  b.ctext(235, 895, '集合淋巴管（瓣膜密布）', { size: 9.5, fill: C.okD })
  b.arrow(330, 870, 370, 870, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.text(375, 866, '胸导管 → 锁骨下静脉', { size: 10, weight: 700, fill: C.okD })
  b.wtext(60, 925, '每日引流 2–4 L 组织液；组织间隙蛋白质回收的唯一通道；小肠绒毛中央乳糜管运输长链脂肪为乳糜；淋巴结是抗原提呈细胞与淋巴细胞会师的哨所（适应性免疫由此启动）。', { size: 10, fill: C.sub, maxW: 615, lh: 15 })

  // ============ 四、静脉回流助力 ============
  b.panel(710, 592, 660, 380, { title: '四、静脉回流的三级助力：肌肉泵与呼吸泵' })
  b.ellipse(830, 720, 52, 72, { fill: C.warnL, stroke: C.warn, sw: 2 })
  b.etext(768, 662, '小腿肌群', { size: 10.5, weight: 700, fill: C.warnD })
  b.rect(820, 648, 20, 165, { fill: '#fff1f2', stroke: C.rose, sw: 2, rx: 10 })
  for (const vy of [670, 720, 770]) b.path(`M 820,${vy} q 10,10 20,0`, { stroke: C.rose, sw: 2, fill: 'none' })
  b.arrow(858, 795, 858, 660, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.text(868, 730, '向心单向', { size: 9.5, weight: 700, fill: C.accD })
  b.arrow(778, 700, 812, 710, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.arrow(884, 700, 850, 710, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.wtext(730, 850, '肌肉泵：小腿肌收缩挤压深静脉，静脉瓣保证只向心不返流——行走时堪比「外周心脏」；久坐久站则静脉淤滞、深静脉血栓风险上升（长途飞行）。', { size: 10, fill: C.sub, maxW: 250, lh: 15 })
  b.rect(1000, 650, 160, 100, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 10 })
  b.rect(1010, 668, 26, 64, { fill: '#ffe4e6', stroke: C.rose, sw: 1.6, rx: 6 })
  b.rect(1024, 676, 40, 48, { fill: '#ffe4e6', stroke: C.rose, sw: 1, dash: '4 3', rx: 6 })
  b.path('M 1000,740 Q 1080,726 1160,740', { stroke: C.warn, sw: 3 })
  b.path('M 1000,756 Q 1080,768 1160,756', { stroke: C.warn, sw: 2, dash: '5 4' })
  b.arrow(1080, 764, 1080, 786, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.text(1170, 672, '胸腔大静脉', { size: 9.5, weight: 700, fill: C.rose })
  b.text(1170, 700, '膈肌下移', { size: 9.5, fill: C.warnD })
  b.wtext(990, 812, '吸气使胸内压更负、胸腔大静脉扩张「抽吸」；膈肌下推腹压把下肢与腹腔的血吸入胸腔，呼气再递入心房。', { size: 9.5, fill: C.sub, maxW: 180, lh: 14 })
  b.wtext(1185, 812, '体位决定静水柱：直立时踝部静脉压骤增近 90 mmHg，久站出现站立性水肿（Starling 静水侧加重）。', { size: 9.5, fill: C.sub, maxW: 170, lh: 14 })
  b.wtext(726, 940, '压力梯度（毛细血管后端→右心房）是原始驱动力；肌肉泵、呼吸泵与体位三种辅助共同保障直立回流——静脉瓣失效即静脉曲张与慢性静脉功能不全。', { size: 10, fill: C.sub, maxW: 620, lh: 15 })
}

export default scene({
  title: '微循环、Starling 液体交换与淋巴回流',
  subtitle: '有效滤过压＝(Pc＋π_{i})−(P_{i}＋π_{p})：动脉端 Pc 30＞π_{p} 25 净滤过、静脉端 Pc 12 净重吸收；日滤出约 20 L、淋巴回收 2–4 L；水肿四大机制；肌肉泵＋静脉瓣＝「外周心脏」',
  draw,
})
