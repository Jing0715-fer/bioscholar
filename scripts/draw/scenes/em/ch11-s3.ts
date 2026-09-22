// em ch11-s3 扫描电镜的样品制备（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、双重困境与梯度脱水 ============
  b.panel(30, 132, 660, 412, { title: '一、双重困境：真空要干燥、张力怕界面' })
  b.tag(230, 186, '水的表面张力 72 mN/m（20 °C）', { fill: C.badL, stroke: C.bad, size: 11, weight: 700, tfill: C.badD, pad: 10 })
  b.tag(540, 186, '气液界面扫过即塌陷', { fill: C.badL, stroke: C.bad, size: 11, weight: 700, tfill: C.badD, pad: 10 })
  // 正常细胞 vs 空气干燥
  b.ctext(140, 216, '固定良好', { size: 10, weight: 700, fill: C.okD })
  b.ellipse(140, 268, 42, 30, { fill: C.okL, stroke: C.ok, sw: 2 })
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2
    b.line(140 + 40 * Math.cos(a), 268 + 28 * Math.sin(a), 140 + 58 * Math.cos(a), 268 + 42 * Math.sin(a), { stroke: C.ok, sw: 1.8 })
  }
  b.ctext(140, 326, '微绒毛舒展', { size: 9.5, fill: C.mute })
  b.arrow(210, 268, 250, 268, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(230, 250, '空气干燥', { size: 9.5, fill: C.badD })
  b.ctext(330, 216, '空气干燥后', { size: 10, weight: 700, fill: C.badD })
  b.circle(330, 268, 26, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.ctext(330, 272, '烙饼', { size: 9.5, weight: 700, fill: C.badD })
  b.ctext(330, 326, '微绒毛并拢成毡', { size: 9.5, fill: C.mute })
  // 梯度脱水
  const et = ['30%', '50%', '70%', '80%', '90%', '95%', '100%']
  et.forEach((s, i) => {
    const x = 70 + i * 82
    b.rect(x, 360, 70, 46, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 6 })
    b.ctext(x + 35, 388, s, { size: 12, weight: 700, fill: C.accD })
    if (i < et.length - 1) b.arrow(x + 72, 383, x + 80, 383, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  })
  b.ctext(360, 434, '乙醇逐级置换，每级 10–20 分钟', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(360, 452, '直接投入无水乙醇会因渗透压抽缩变形；几毫米组织块整夜爬梯度、单层细胞半小时走完', { size: 10, fill: C.mute })
  b.tag(200, 488, '双固定：戊二醛 2–2.5% 过夜', { fill: C.dnaL, stroke: C.dna, size: 10, tfill: C.dnaD, pad: 8 })
  b.tag(500, 488, '锇酸 1% 后固定 1–2 小时', { fill: C.dnaL, stroke: C.dna, size: 10, tfill: C.dnaD, pad: 8 })

  // ============ 二、临界点干燥 ============
  b.panel(710, 132, 660, 412, { title: '二、临界点干燥：让液气界面消失' })
  // 相图
  const px = 770, py = 480, pw = 300, ph = 250
  b.rect(px, py - ph, pw, ph, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  b.path(`M ${px + 40},${py - 10} L ${px + 128},${py - 116}`, { stroke: C.acc, sw: 2.2 })
  b.path(`M ${px + 128},${py - 116} Q ${px + 170},${py - 160} ${px + 250},${py - 162}`, { stroke: C.acc, sw: 2.2, dash: '6 4' })
  b.tag(px + 262, py - 168, '临界点 31.1 °C、7.4 MPa', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 8 })
  b.circle(px + 128, py - 116, 5, { fill: C.bad })
  b.ctext(px + 96, py - 96, '液', { size: 11, weight: 700, fill: C.accD })
  b.ctext(px + 60, py - 40, '固', { size: 11, weight: 700, fill: C.mute })
  b.ctext(px + 210, py - 60, '气', { size: 11, weight: 700, fill: C.mute })
  // 路径
  b.arrow(px + 60, py - 40, px + 116, py - 100, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.arrow(px + 140, py - 116, px + 230, py - 158, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.ctext(px + 170, py - 190, '① 低温加压以液态 CO_{2} 置换乙醇（互溶，换数次务求换净）', { size: 9.5, fill: C.enzD })
  b.ctext(px + 170, py - 174, '② 升温越过临界点：界面消失、张力归零', { size: 9.5, fill: C.enzD })
  b.wtext(1100, 240, '越过临界点后液气不再两相共存，表面张力归零——样品从液态环境直接进入气态而不经过任何界面。', { size: 10.5, fill: C.sub, maxW: 240, lh: 15 })
  b.tag(1210, 360, '陷阱一：残留乙醇', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 9 })
  b.tag(1210, 394, '陷阱二：卸压过快', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 9 })
  b.ctext(1040, 470, 'Anderson 1951 年提出；CO_{2} 以温和临界点与对乙醇的互溶性胜出——半个多世纪物理一字未改', { size: 10, fill: C.mute })

  // ============ 三、导电化 ============
  b.panel(30, 572, 660, 398, { title: '三、导电化：溅射镀膜与导电染色' })
  // 溅射腔
  b.rect(60, 618, 180, 150, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.rect(120, 630, 60, 14, { fill: C.warn, stroke: C.warnD, sw: 1.4 })
  b.ctext(150, 624, '金钯靶', { size: 9, fill: C.warnD })
  b.line(150, 652, 150, 700, { stroke: C.warn, sw: 1.6, dash: '4 3', marker: 'warn' })
  b.line(90, 736, 210, 736, { stroke: C.sub, sw: 3 })
  b.rect(120, 712, 60, 24, { fill: '#ffffff', stroke: C.sub, sw: 1.4 })
  b.ctext(150, 700, '样品', { size: 9, fill: C.mute })
  b.ctext(150, 762, '溅射腔（Ar 等离子体）', { size: 9.5, fill: C.sub })
  // 金岛 vs 铱
  b.rect(280, 630, 130, 90, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  for (let i = 0; i < 10; i++) {
    const gx = 292 + ((Math.sin(i * 127.3) * 43758.5) % 1 + 1) % 1 * 106
    const gy = 642 + ((Math.sin(i * 311.7) * 12543.2) % 1 + 1) % 1 * 66
    b.circle(gx, gy, 4.5, { fill: C.warn, fillOp: 0.8 })
  }
  b.ctext(345, 742, '金膜：2–5 nm 岛粒', { size: 9.5, weight: 700, fill: C.warnD })
  b.rect(430, 630, 130, 90, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  for (let i = 0; i < 16; i++) {
    const gx = 442 + ((Math.sin(i * 127.3) * 43758.5) % 1 + 1) % 1 * 106
    const gy = 642 + ((Math.sin(i * 311.7) * 12543.2) % 1 + 1) % 1 * 66
    b.circle(gx, gy, 2.2, { fill: C.mute, fillOp: 0.85 })
  }
  b.ctext(495, 742, '铱膜：约 1 nm 级颗粒', { size: 9.5, weight: 700, fill: C.sub })
  b.wtext(60, 776, '膜的粒度就是分辨率的硬地板：常规金或金钯合金 2–10 nm，看 5 nm 以下细节时金膜自己先糊掉；铱膜颗粒约 1 nm 级更细。', { size: 10, fill: C.sub, maxW: 500, lh: 14 })
  b.tag(190, 880, 'OTO 锇-硫卡巴肼-锇导电染色免金属膜', { fill: C.okL, stroke: C.ok, size: 10, tfill: C.okD, pad: 8 })
  b.tag(530, 880, '碳镀对能谱与大样品友好', { fill: C.okL, stroke: C.ok, size: 10, tfill: C.okD, pad: 8 })

  // ============ 四、截面抛光与路线决策 ============
  b.panel(710, 572, 660, 398, { title: '四、截面抛光、块面成像与路线决策表' })
  b.wtext(730, 618, '截面抛光（CP）：氩离子束数 kV 铣削、末段约 1 kV 收尾成镜面——平整块面是背散射切面成像与体积电镜的入场券，每切一刀新鲜面自然裸露、无需整体覆膜。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.table(730, 668, 620, {
    headers: ['样品与目标', '推荐路线', '关键点'],
    colW: [220, 180, 220], rowH: 30, fontSize: 10,
    rows: [
      ['表面形貌（高分辨）', 'CPD + 铱膜', '膜粒度约 1 nm 级'],
      ['元素面扫', 'CPD + 碳镀', '碳膜低干扰、束流纳安级'],
      ['内部截面', '树脂包埋 + CP 离子铣', '末段约 1 kV 成镜面'],
      ['含水样品免干燥', '冷冻扫描电镜（本章第 4 节）', '约 110 K 冷台直读'],
    ],
  })
  b.ctext(1040, 930, '制备路线按「看表面还是看内部、测形貌还是测成分」反推', { size: 10, fill: C.mute })
}

export default scene({
  title: '扫描电镜的样品制备：梯度脱水、临界点干燥与导电化',
  subtitle: '水的表面张力 72 mN/m，乙醇 30 至 100% 逐级脱水每级 10–20 分钟；CO₂ 临界点 31.1 °C、7.4 MPa 使界面消失；金钯膜 2–10 nm（金岛 2–5 nm 为分辨率地板）、铱膜约 1 nm；截面抛光末段约 1 kV 收尾',
  draw,
})
