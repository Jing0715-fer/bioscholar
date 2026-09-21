// mi ch7-s4 灭菌、消毒与防腐（39-f 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、四个基本概念 ============
  b.panel(30, 132, 1340, 190, { title: '一、灭菌 · 消毒 · 防腐 · 化学治疗：按杀灭强度与使用对象递进' })
  b.arrow(80, 168, 1320, 168, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.ctext(700, 160, '杀灭强度递减', { size: 10.5, fill: C.mute })

  const terms: Array<[number, string, string, string, string]> = [
    [195, '灭菌', C.bad, C.badL, '杀灭物品上一切微生物（包括细菌芽孢）——培养基、手术器械'],
    [515, '消毒', C.warn, C.warnL, '杀灭病原微生物的繁殖体（不一定杀芽孢）——物体表面、环境'],
    [835, '防腐', C.acc, C.accL, '抑制微生物生长繁殖（不杀灭）——食品、药品保存'],
    [1155, '化学治疗', C.pro, C.proL, '化学治疗剂选择性杀灭体内病原——可进入体内使用'],
  ]
  terms.forEach(([cx, t, c, cl, s]) => {
    b.tag(cx, 208, t, { fill: cl, stroke: c, size: 15, weight: 700, tfill: C.ink, pad: 12 })
    b.wtext(cx - 145, 248, s, { size: 10.5, fill: C.sub, maxW: 290, lh: 15 })
  })
  b.wtext(60, 300, '消毒剂因毒性不可体内使用——这是「消毒」与「化学治疗」的分界。', { size: 11, weight: 700, fill: C.ink })

  // ============ 二、湿热强于干热 + 热力工艺阶梯 ============
  b.panel(30, 334, 660, 300, { title: '二、湿热灭菌为什么强于干热；热力工艺阶梯' })

  const mech: Array<[number, string, string]> = [
    [384, '① 水导热快', '蒸汽对流与冷凝把热迅速传到物品各处。'],
    [456, '② 蛋白含水越多越易凝固', '卵清蛋白含水约 50% 时 56 ℃ 即凝固；完全干燥则需 160 ℃ 以上。'],
    [528, '③ 蒸汽冷凝释放潜热', '每克 100 ℃ 蒸汽冷凝释放约 2.26 kJ 汽化潜热，物品表面迅速升温。'],
  ]
  mech.forEach(([y, t, s]) => {
    b.rect(46, y, 300, 68, { fill: C.bg, stroke: C.dna, sw: 1.5, rx: 9 })
    b.wtext(60, y + 22, t, { size: 12.5, weight: 700, fill: C.dnaD, maxW: 276, lh: 16 })
    b.wtext(60, y + 44, s, { size: 10.5, fill: C.sub, maxW: 276, lh: 14 })
  })

  // 热力阶梯（纵轴温度）
  b.arrow(384, 596, 384, 396, { stroke: C.sub, sw: 2, marker: 'mute' })
  b.ctext(368, 500, '温度 ↑', { size: 10.5, weight: 700, fill: C.mute })
  const ladder: Array<[number, string, string, string, string]> = [
    [396, 'UHT 135 ℃ 以上 · 数秒', '商业无菌', C.bad, C.badL],
    [444, '高压蒸汽 121 ℃ · 0.1 MPa · 15–30 min', '杀灭芽孢——灭菌', C.warn, C.warnL],
    [492, '煮沸 100 ℃ · 数分钟', '杀繁殖体；芽孢需数小时，加 2% 碳酸钠增效防锈', C.dna, C.dnaL],
    [540, '巴氏消毒 63 ℃/30 min 或 72 ℃/15 s', '不杀芽孢', C.acc, C.accL],
  ]
  ladder.forEach(([y, t, s, c, cl]) => {
    b.rect(400, y, 276, 40, { fill: cl, fillOp: 0.55, stroke: c, sw: 1.5, rx: 7 })
    b.ctext(538, y + 17, t, { size: 10.5, weight: 700, fill: C.ink })
    b.ctext(538, y + 32, s, { size: 8.5, fill: C.sub })
  })

  // ============ 三、灭菌动力学：D 值、Z 值与 F 值 ============
  b.panel(710, 334, 660, 300, { title: '三、灭菌动力学定量：D 值、Z 值与 F 值（存活曲线为对数直线）' })

  const ax = 740, ay = 610, aw = 300, ah = 175
  b.axis(ax, ay, aw, ah, {
    xlabel: '加热时间（min）',
    xticks: [[0.25, '10'], [0.5, '20'], [0.75, '30']],
    yticks: [[0.1, '10⁶'], [0.3, '10⁵'], [0.5, '10⁴'], [0.7, '10³'], [0.9, '10²']],
  })
  // 手动纵轴标签（置于图左上方，避开 0.5 处的「10⁴」刻度）
  b.text(742, 412, '存活数（对数）↑', { size: 12.5, weight: 600, fill: C.sub })
  b.curve(ax, ay, aw, ah, [[0, 1], [0.35, 0]], { stroke: C.bad, sw: 2.6 })
  b.curve(ax, ay, aw, ah, [[0, 1], [0.6, 0.05]], { stroke: C.warn, sw: 2.6 })
  b.curve(ax, ay, aw, ah, [[0, 1], [1, 0.35]], { stroke: C.acc, sw: 2.6 })
  b.legend(940, 590, [['121 ℃', C.bad], ['115 ℃', C.warn], ['105 ℃', C.acc]], { size: 10, gap: 14 })
  // D 值标注（105 ℃ 线上降一个数量级）
  b.line(ax, ay - 0.8 * ah, ax + 0.308 * aw, ay - 0.8 * ah, { stroke: C.ink, sw: 2, marker: 'ink', markerStart: 'ink' })
  b.ctext(ax + 0.15 * aw, ay - 0.8 * ah - 14, 'D 值 = 降 1 个数量级的时间', { size: 10, weight: 700, fill: C.ink })

  // 右卡
  b.rect(1070, 380, 286, 218, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.wtext(1086, 404, 'D 值：给定温度下活数下降一个数量级（杀灭 90%）所需时间——肉毒梭菌芽孢在 121 ℃ 的 D 值约 0.2–0.3 min。', { size: 10.5, fill: C.sub, maxW: 256, lh: 15 })
  b.wtext(1086, 456, 'Z 值：使 D 值变动 10 倍所需的温度变化度数（细菌芽孢常取约 10 ℃），用于不同温度间热力等效换算。', { size: 10.5, fill: C.sub, maxW: 256, lh: 15 })
  b.wtext(1086, 512, 'F 值：折算的等效灭菌时间——如某芽孢 121 ℃ 的 D 值为 1.5 min，工艺折算 F₀ = 6 min 即获 4 个数量级杀灭。', { size: 10.5, fill: C.sub, maxW: 256, lh: 15 })
  b.wtext(1086, 568, '商业无菌：低酸罐头以肉毒梭菌芽孢 12D 为目标。', { size: 10.5, weight: 700, fill: C.bad, maxW: 256, lh: 15 })

  // ============ 四、方法对照表 ============
  b.panel(30, 646, 1340, 334, { title: '四、常用控制方法对照：热力 · 过滤 · 化学' })
  b.table(60, 700, 1280, {
    headers: ['方法类别', '具体手段', '关键参数', '适用与特点'],
    colW: [130, 250, 400, 500],
    rowH: 34,
    fontSize: 11,
    rows: [
      ['干热灭菌', '火焰烧灼 · 干热灭菌箱', '卵清蛋白完全干燥时需 160 ℃ 以上才凝固', '金属接种环、玻璃器皿等耐烧物品'],
      ['湿热灭菌', '高压蒸汽灭菌', '121 ℃（0.1 MPa）15–30 min 可杀灭芽孢', '培养基、生理盐水、手术器械等常规首选'],
      ['湿热消毒', '巴氏消毒 · 煮沸', '63 ℃/30 min 或 72 ℃/15 s；煮沸 100 ℃ 数分钟', '乳品酒类与一般器械——不杀芽孢'],
      ['超高温', 'UHT', '135 ℃ 以上数秒', '商业无菌乳品'],
      ['过滤除菌', '微孔滤膜 · 空气过滤', '液体 0.22 μm 膜；空气用 HEPA 与深层棉炭过滤', '血清、疫苗等热敏液体与洁净空气'],
      ['化学消毒', '乙醇等消毒剂', '乙醇 70%–75% 浓度最适', '体表与环境；消毒剂因毒性不可体内使用'],
    ],
  })
  b.wtext(60, 958, '影响消毒效果的四要素：浓度 · 时间 · 温度 · 有机物干扰；消毒剂效力以石炭酸系数评价。', { size: 11, weight: 700, fill: C.ink })
}

export default scene({
  title: '灭菌、消毒与防腐：四术语递进与湿热强于干热的原理',
  subtitle: '湿热强于干热：水导热快、蛋白含水越多越易凝固、蒸汽冷凝释潜热；高压蒸汽 121 ℃ 15–30 min 杀芽孢，巴氏 63 ℃/30 min 或 72 ℃/15 s；D 值 90% 杀灭时间、Z 约 10 ℃、12D 商业无菌；乙醇 70%–75%',
  draw,
})
