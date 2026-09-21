// bp ch3-s3 膜的热涨落、出芽融合与脂筏（39-e 批2）
import { scene, C, B } from '../../lib'

/** 起伏膜（正弦波浪线） */
const wavy = (b: B, x: number, y: number, w: number, amp: number, segs: number, stroke: string, sw = 3) => {
  let d = `M ${x},${y}`
  const step = w / segs
  for (let i = 0; i < segs; i++) d += ` q ${step / 2},${i % 2 === 0 ? -amp * 2 : amp * 2} ${step},0`
  b.path(d, { stroke, sw, fill: 'none' })
}

const draw = (b: B) => {
  // ============ 一、热涨落与 Helfrich 熵排斥 ============
  b.panel(30, 132, 1340, 252, { title: '一、热涨落：膜的「起伏海洋」与 Helfrich 熵致排斥' })

  // -- 左：单片涨落膜 --
  wavy(b, 70, 215, 320, 14, 6, C.dna)
  b.ctext(230, 252, 'undulation 弯曲涨落', { size: 12, weight: 700, fill: C.dnaD })
  b.wtext(70, 280, 'κ ~ 10–25 k_BT 与 k_BT 同量级，室温热运动足以激起显著弯曲涨落——膜像微风吹动的旗帜持续起伏。反射干涉显微术可直接观察贴壁膜的「起伏海洋」，其幅度谱给出 κ 的非侵入测量。', { size: 10.5, fill: C.sub, maxW: 560, lh: 15 })

  // -- 右：两张涨落膜之间的熵排斥 --
  wavy(b, 700, 205, 400, 12, 7, C.acc)
  wavy(b, 700, 268, 400, 12, 7, C.acc)
  // 排斥箭头（上下互相推开）
  for (const ax of [780, 900, 1020]) {
    b.arrow(ax, 218, ax, 250, { stroke: C.bad, sw: 2, marker: 'bad' })
    b.arrow(ax, 255, ax, 223, { stroke: C.bad, sw: 2, marker: 'bad' })
  }
  // 膜间距 d 标注
  b.line(1128, 205, 1128, 268, { stroke: C.sub, sw: 1.6, markerStart: 'mute', marker: 'mute' })
  b.text(1140, 241, 'd', { size: 13, weight: 700, fill: C.ink, italic: true })
  b.tag(940, 308, '单位面积排斥能 ~ (k_BT)² / (κ·d²)', { fill: C.badL, stroke: C.bad, size: 12.5, weight: 700, tfill: C.bad, pad: 10 })
  b.ctext(940, 340, '压强按 1/d³ 发散——纯熵的排斥', { size: 10.5, fill: C.sub })
  b.wtext(700, 362, '这种排斥稳定了多片层堆（髓鞘图样、多层囊泡），也是膜融合必须克服的能垒之一。', { size: 10.5, fill: C.mute, maxW: 560, lh: 14 })

  // ============ 二、出芽与融合 ============
  b.panel(30, 408, 1340, 300, { title: '二、出芽与融合：囊泡转运的「两半程」' })

  // -- 左：出芽三阶段 --
  b.text(60, 452, '出芽（budding）', { size: 13.5, weight: 700, fill: C.dnaD })
  // ① 平膜 + 锥形脂 + 蛋白衣架
  b.bilayer(70, 495, 130, { h: 14, tint: C.dna })
  for (const cx of [95, 135, 175]) b.polygon([[cx - 6, 516], [cx + 6, 516], [cx, 530]], { fill: C.enz, stroke: C.enz, sw: 1 })
  b.path('M 80,488 Q 135,462 190,488', { stroke: C.warn, sw: 1.8, dash: '5 4', fill: 'none' })
  b.ctext(135, 556, '① 局部提高 C_{0} / 蛋白衣架', { size: 10.5, weight: 600, fill: C.sub })
  b.ctext(135, 574, '锥形脂 / 网格蛋白 / ESCRT / BAR', { size: 9.5, fill: C.mute })
  b.arrow(215, 515, 250, 515, { stroke: C.dna, sw: 2, marker: 'dna' })
  // ② 鼓芽
  b.path('M 270,509 L 270,502 Q 270,470 305,470 Q 340,470 340,502 L 340,509', { stroke: C.dna, sw: 2.4, fill: C.dnaL, fillOp: 0.6 })
  b.line(262, 511, 282, 511, { stroke: C.dna, sw: 3 })
  b.line(328, 511, 348, 511, { stroke: C.dna, sw: 3 })
  b.arrow(262, 505, 284, 505, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.arrow(348, 505, 326, 505, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.ctext(305, 556, '② 鼓出球形芽并颈缩', { size: 10.5, weight: 600, fill: C.sub })
  b.arrow(365, 515, 400, 515, { stroke: C.dna, sw: 2, marker: 'dna' })
  // ③ 囊泡
  b.vesicle(455, 505, 26, { coat: 'clathrin', label: '', stroke: C.dna })
  b.ctext(455, 556, '③ 掐断成囊泡', { size: 10.5, weight: 600, fill: C.sub })
  b.ctext(455, 574, '做功由 ATP/GTP 水解支付', { size: 9.5, fill: C.mute })
  b.wtext(60, 620, '胞内转运的基本动作：通过局部提高自发曲率 C_{0} 或蛋白脚手架，膜鼓出球形芽并颈缩掐断，形成囊泡。', { size: 10.5, fill: C.sub, maxW: 480, lh: 14 })

  // -- 右：融合三阶段 --
  b.text(690, 452, '融合（fusion）', { size: 13.5, weight: 700, fill: C.accD })
  // ① 两膜靠近 1–2 nm + SNARE
  b.bilayer(700, 480, 130, { h: 11, tint: C.acc })
  b.bilayer(700, 512, 130, { h: 11, tint: C.acc })
  for (const cx of [745, 785]) {
    b.line(cx, 491, cx + 14, 511, { stroke: C.enz, sw: 2 })
    b.line(cx + 14, 491, cx, 511, { stroke: C.enz, sw: 2 })
  }
  b.ctext(765, 556, '① SNARE 拉链拉近至 1–2 nm', { size: 10.5, weight: 600, fill: C.sub })
  b.ctext(765, 574, '克服水化排斥与涨落排斥', { size: 9.5, fill: C.mute })
  b.arrow(855, 515, 890, 515, { stroke: C.acc, sw: 2, marker: 'acc' })
  // ② 半融合茎：两膜内侧叶在中央融合成腰（SNARE 复合体持续钳在两侧提供能量）
  b.line(898, 480, 975, 480, { stroke: C.acc, sw: 3 })
  b.line(898, 512, 975, 512, { stroke: C.acc, sw: 3 })
  b.path('M 928,480 C 928,489 940,491 940,496 C 940,501 928,503 928,512', { stroke: C.enz, sw: 2.4, fill: 'none' })
  b.path('M 946,480 C 946,489 934,491 934,496 C 934,501 946,503 946,512', { stroke: C.enz, sw: 2.4, fill: 'none' })
  // SNARE 拉链（与步骤① 同一 X 基序，两侧钳持）
  b.line(899, 486, 913, 506, { stroke: C.enz, sw: 2 })
  b.line(913, 486, 899, 506, { stroke: C.enz, sw: 2 })
  b.text(896, 530, 'SNARE', { size: 8.5, weight: 700, fill: C.enzD })
  b.ctext(936, 556, '② 茎状半融合中间体', { size: 10.5, weight: 600, fill: C.sub })
  b.ctext(936, 574, 'SNARE 释放数十 k_BT 结合能', { size: 9.5, fill: C.mute })
  b.arrow(1000, 515, 1035, 515, { stroke: C.acc, sw: 2, marker: 'acc' })
  // ③ 融合孔：两膜连通，中央留 ~1 nm 开口并向外扩展（SNARE 仍钳在孔缘）
  b.path('M 1060,480 L 1102,480 C 1112,480 1112,486 1112,492', { stroke: C.acc, sw: 3, fill: 'none' })
  b.path('M 1060,512 L 1102,512 C 1112,512 1112,506 1112,500', { stroke: C.acc, sw: 3, fill: 'none' })
  b.path('M 1112,492 C 1126,486 1136,470 1152,470 L 1190,470', { stroke: C.acc, sw: 3, fill: 'none' })
  b.path('M 1112,500 C 1126,506 1136,522 1152,522 L 1190,522', { stroke: C.acc, sw: 3, fill: 'none' })
  b.line(1068, 486, 1082, 506, { stroke: C.enz, sw: 2 })
  b.line(1082, 486, 1068, 506, { stroke: C.enz, sw: 2 })
  b.text(1065, 530, 'SNARE', { size: 8.5, weight: 700, fill: C.enzD })
  b.ctext(1128, 556, '③ 融合孔扩大', { size: 10.5, weight: 600, fill: C.sub })
  b.ctext(1128, 574, '开口约 1 nm 起步、可逆开合', { size: 9.5, fill: C.mute })
  b.wtext(690, 620, '病毒入胞与神经递质释放走同一条能量上艰难的路径：两膜靠近 → 半融合茎 → 融合孔。', { size: 10.5, fill: C.sub, maxW: 500, lh: 14 })
  b.wtext(690, 648, '融合孔开口约 1 nm 起步，经历可逆的开合涨落后扩大。', { size: 10.5, fill: C.mute, maxW: 500, lh: 14 })

  // ============ 三、脂筏 ============
  b.panel(30, 736, 1340, 236, { title: '三、脂筏：鞘脂–胆固醇富集的液态有序（Lo）微区' })

  // -- 左：膜俯视图 --
  b.rect(60, 775, 580, 155, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.6, rx: 10 })
  const rafts: Array<[number, number, number]> = [[170, 848, 34], [400, 822, 27], [525, 872, 38]]
  rafts.forEach(([cx, cy, r]) => {
    b.circle(cx, cy, r, { fill: C.warnL, stroke: C.warn, sw: 2.2 })
    b.circle(cx, cy, r - 6, { fill: 'none', stroke: C.warn, sw: 0.8, dash: '3 3', opacity: 0.6 })
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 + cx
      b.circle(cx + (r - 16) * Math.cos(a), cy + (r - 16) * Math.sin(a), 4.5, { fill: C.bad, stroke: C.badL, sw: 1 })
    }
  })
  b.legend(80, 956, [['Lo 筏（10–200 nm）', C.warn], ['Ld 液态无序相', C.acc], ['GPI 锚定蛋白 / Src 激酶', C.bad]], { size: 11, gap: 16 })
  b.text(80, 804, '线张力收成圆形微畴', { size: 10.5, fill: C.mute })

  // -- 右：Lo 与 Ld 对照表 --
  b.table(860, 800, 470, {
    headers: ['属性', 'Lo 液态有序（筏）', 'Ld 液态无序'],
    rows: [
      ['主要成分', '鞘磷脂（长饱和链）+ 胆固醇', '不饱和磷脂'],
      ['链状态', '链有序、仍侧向流动', '链无序、流动'],
    ],
    colW: [78, 225, 167], rowH: 38, fontSize: 11.5,
  })
  b.wtext(860, 928, 'GPI 锚定蛋白、Src 家族激酶偏好分配于筏内，为信号转导提供「浮动的平台」；相分离物理学（Ising 临界涨落放大成畴）为筏大小、寿命与临界行为提供完整理论框架。', { size: 10.5, fill: C.sub, maxW: 466, lh: 14 })
}

export default scene({
  title: '膜的热涨落、出芽融合与脂筏：软膜的三个物理剧本',
  subtitle: 'κ ~ k_BT → 显著起伏与熵致排斥 (k_BT)²/(κd²)；出芽靠 C_{0} / 蛋白衣架，融合经半融合茎与 ~1 nm 融合孔；脂筏 = 鞘脂–胆固醇 Lo 相微区（10–200 nm）与 Ld 相分离',
  draw,
})
