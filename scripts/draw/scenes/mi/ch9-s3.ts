// mi ch9-s3 极端环境微生物（39-f 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Taq 与 PCR ============
  b.panel(30, 132, 660, 300, { title: '一、嗜热菌的经典馈赠：Taq DNA 聚合酶与 PCR' })

  b.timelineH(70, 242, 580, [
    { at: 0.08, label: '1960 年代', sub: 'Brock 分离', above: true, c: C.dna },
    { at: 0.55, label: '1980 年代中期', sub: '引入 PCR', above: false, c: C.acc },
    { at: 0.88, label: '1993', sub: 'Mullis 获诺奖', above: true, c: C.pro },
  ], { title: '从黄石热泉到诺贝尔奖' })
  b.wtext(60, 260, 'Thomas Brock 从黄石公园约 70–80 ℃ 热泉分离嗜热水生栖热菌（Thermus aquaticus）——当时教科书仍断言生命不能在如此高温存活。', { size: 10.5, fill: C.sub, maxW: 240, lh: 15 })

  b.rect(50, 316, 610, 96, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.5, rx: 9 })
  b.text(70, 340, 'Taq DNA 聚合酶', { size: 13, weight: 700, fill: C.accD })
  b.wtext(70, 364, '最适延伸约 72 ℃、95 ℃ 下半衰期约 40 分钟——恰可耐受 PCR 每轮变性高温，使程序化自动循环成为可能。', { size: 11, fill: C.sub, maxW: 570, lh: 16 })
  b.ctext(355, 424, '增殖温度纪录：Methanopyrus 约 122 ℃', { size: 11, weight: 700, fill: C.bad })

  // ============ 二、嗜盐古菌 ============
  b.panel(710, 132, 660, 300, { title: '二、嗜盐古菌：「从盐里长出来的生命」' })

  // NaCl 浓度轴
  b.line(740, 250, 1320, 250, { stroke: C.sub, sw: 3, marker: 'ink' })
  b.ctext(1330, 250, 'NaCl', { size: 10, fill: C.mute })
  const marks: Array<[number, string, string, boolean]> = [
    [740, '0%', '', true],
    [870, '3.5%', '海水', false],
    [1035, '约 10%', '低于此细胞壁解体', true],
    [1290, '20%–30%', '最适生长区', false],
  ]
  marks.forEach(([x, lab, s, up]) => {
    b.line(x, 242, x, 258, { stroke: C.ink, sw: 2 })
    b.ctext(x, up ? 228 : 272, lab, { size: 11.5, weight: 700, fill: C.ink })
    if (s) b.ctext(x, up ? 214 : 288, s, { size: 9.5, fill: C.mute })
  })
  b.rect(1240, 244, 80, 12, { fill: C.ok, fillOp: 0.4 })
  b.rect(740, 244, 295, 12, { fill: C.bad, fillOp: 0.25 })

  // 胞内对策
  b.rect(730, 320, 620, 92, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(750, 344, '盐杆菌（Halobacterium salinarum）的胞内对策', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(750, 368, '胞内以 KCl 平衡外渗压 + 酸性蛋白适应高盐；紫膜的菌视紫质光驱动质子泵直接产能（无氧光营养）。', { size: 11, fill: C.sub, maxW: 580, lh: 16 })
  b.wtext(730, 424, '生于盐湖、盐田与腌渍物——极端微生物资源服务生物技术的经典注脚。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 三、适应分子策略总表 ============
  b.panel(30, 444, 1340, 300, { title: '三、极端因子的核心挑战与分子对策（适应策略总表）' })
  b.table(60, 494, 1280, {
    headers: ['极端因子', '核心挑战', '分子对策', '代表与资源价值'],
    colW: [140, 250, 380, 510],
    rowH: 34,
    fontSize: 11,
    rows: [
      ['高温', '蛋白变性、膜流动过快', '四醚单层膜、伴侣蛋白、提高蛋白刚性', '嗜热水生栖热菌（70–80 ℃ 热泉）；Methanopyrus 约 122 ℃ 增殖纪录'],
      ['低温', '膜僵化、酶活性骤降', '膜不饱和脂肪酸、冷激蛋白、柔性低温酶', '嗜冷菌；冷适应酶已成洗涤与食品工业资源'],
      ['高盐', '渗透脱水', '胞内 KCl 与酸性蛋白、菌视紫质光泵', '盐杆菌最适 20%–30% NaCl，低于约 10% 壁解体'],
      ['强酸 / 强碱', '胞内必须近中性', '反向转运维持胞内中性（质子泵与 K⁺/H⁺ 对换）', '嗜酸菌、嗜碱菌'],
      ['高压', '蛋白与膜受压形变', '膜流动对策与柔性蛋白平衡', '深海嗜压菌'],
    ],
  })
  b.wtext(60, 722, '四大通用设计：四醚单层膜 · 相容溶质 · 反向转运维持胞内中性 · 蛋白刚性柔性平衡。', { size: 11.5, weight: 700, fill: C.ink, maxW: 1280 })

  // ============ 四、极端环境与天体生物学 ============
  b.panel(30, 756, 1340, 224, { title: '四、极端环境与天体生物学：生命边界的地球参照系' })

  const envs: Array<[number, string, string, string, string]> = [
    [70, '南极干谷', '极度干冷', C.acc, C.accL],
    [330, '冰下湖', '黑暗高压', C.dna, C.dnaL],
    [590, '深海热泉', '高温高压无光', C.bad, C.badL],
  ]
  envs.forEach(([x, t, s, c, cl]) => {
    b.rect(x, 790, 190, 80, { fill: cl, fillOp: 0.5, stroke: c, sw: 1.6, rx: 9 })
    b.ctext(x + 95, 820, t, { size: 13, weight: 700, fill: C.ink })
    b.ctext(x + 95, 844, s, { size: 10.5, fill: C.sub })
    b.arrow(x + 190, 830, 830, 830, { stroke: C.faint, sw: 1.8, marker: 'mute' })
  })
  b.rect(830, 790, 500, 80, { fill: C.proL, fillOp: 0.6, stroke: C.pro, sw: 1.8, rx: 10 })
  b.ctext(1080, 818, '天体生物学', { size: 14, weight: 700, fill: C.proD })
  b.ctext(1080, 842, '火星与冰卫星生命探测的地球参照系', { size: 11, fill: C.sub })
  b.wtext(60, 906, '极端环境标定生命的温度、盐度、酸度与能量边界——微生物一次次把这些边界推到意料之外，为地外生命「能在哪里存在」提供校准。', { size: 11, fill: C.sub, maxW: 1280, lh: 16 })
  b.wtext(60, 946, '嗜冷菌的柔性低温酶、嗜热菌的 Taq——极端微生物的资源属性与科学属性同样极端。', { size: 10.5, fill: C.mute, maxW: 1280, lh: 15 })
}

export default scene({
  title: '极端环境微生物：嗜热、嗜盐代表菌与适应机制',
  subtitle: 'Taq 源自黄石 70–80 ℃ 热泉，最适延伸 72 ℃、95 ℃ 半衰期约 40 分钟成就 PCR；Methanopyrus 约 122 ℃ 纪录；盐杆菌最适 20%–30% NaCl、低于约 10% 壁解体',
  draw,
})
