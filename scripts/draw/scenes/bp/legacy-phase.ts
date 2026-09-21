// bp 遗留重绘：膜脂相变（凝胶相 ↔ 液晶相 + 胆固醇缓冲 + 不饱和键）（slug: membrane-phase-transition）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、凝胶相 Lβ ============
  b.panel(30, 150, 620, 424, { title: '一、凝胶相 Lβ（T < Tm）：低温有序态' })
  // 磷脂头部两排（紧密）
  for (let i = 0; i < 20; i++) {
    const x = 62 + i * 28
    b.circle(x, 226, 8, { fill: C.dna, fillOp: 0.85 })
    b.circle(x, 330, 8, { fill: C.dna, fillOp: 0.85 })
    // 尾部：全反式伸展（直线，紧密堆积）
    b.line(x, 234, x, 322, { stroke: C.dna, sw: 2, opacity: 0.55 })
  }
  b.tag(340, 200, '磷脂头部（极性区）', { fill: '#ffffff', stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 6 })
  b.ctext(340, 356, '脂肪酸尾部全反式伸展、排列紧密有序', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(80, 384, '膜刚性强、流动性与通透性低；尾部振动幅度小、链间紧密堆积、厚度略大。饱和磷脂（如 DPPC，Tm ≈ 41 ℃）常处于此态。', { size: 11.5, fill: C.sub, maxW: 540, lh: 17 })

  // ============ 升温箭头（中缝） ============
  b.ctext(700, 240, '升温', { size: 15, weight: 700, fill: C.warn })
  b.arrow(700, 268, 700, 352, { stroke: C.warn, sw: 3.5, marker: 'warn' })
  b.ctext(700, 382, 'T → Tm', { size: 13.5, weight: 700, fill: C.sub })
  b.ctext(700, 414, '降温则逆向', { size: 11, fill: C.mute })
  b.ctext(700, 432, '回到凝胶相', { size: 11, fill: C.mute })

  // ============ 二、液晶相 Lα ============
  b.panel(750, 150, 620, 424, { title: '二、液晶相 Lα（T > Tm）：生理温度下的功能态' })
  for (let i = 0; i < 20; i++) {
    const x = 782 + i * 28
    b.circle(x, 226, 8, { fill: C.dna, fillOp: 0.85 })
    b.circle(x, 330, 8, { fill: C.dna, fillOp: 0.85 })
    // 尾部：gauche 歪扭（锯齿折线）
    const jx = (i % 3 - 1) * 7
    b.polyline([[x, 234], [x + jx, 258], [x - jx, 280], [x + jx, 302], [x, 322]], { stroke: C.dna, sw: 2, opacity: 0.55 })
  }
  // 胆固醇（灰刚性甾环）插入两层尾部之间
  for (const cx of [860, 1010, 1160, 1290]) {
    b.rect(cx - 13, 240, 26, 52, { fill: '#e2e8f0', stroke: '#64748b', sw: 1.8, rx: 5 })
    b.line(cx - 8, 252, cx + 8, 252, { stroke: '#64748b', sw: 1.2 })
    b.line(cx - 8, 266, cx + 8, 266, { stroke: '#64748b', sw: 1.2 })
    b.line(cx - 8, 280, cx + 8, 280, { stroke: '#64748b', sw: 1.2 })
    b.ion(cx, 318, 'OH', { r: 9, fill: '#f1f5f9', stroke: '#64748b', tfill: '#475569', size: 9 })
  }
  b.tag(960, 200, '胆固醇（灰）', { fill: '#ffffff', stroke: '#64748b', size: 10.5, weight: 700, tfill: '#475569', pad: 6 })
  b.ctext(1060, 356, '尾部歪扭（gauche）构象、活动加剧', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(800, 384, '膜流动性增大：侧向扩散、翻转酶活性上升。胆固醇 Tm 以上限制流动、Tm 以下阻止紧密排列——动物细胞膜把相变「抹平」为宽温区中间态。', { size: 11.5, fill: C.sub, maxW: 540, lh: 17 })

  // ============ 三、底部：DSC 吸热峰 + 不饱和弯折 + Tm 对照 ============
  b.panel(30, 600, 430, 376, { title: '三、差示扫描量热（DSC）：Tm 处吸热峰' })
  b.axis(80, 900, 340, 210, {
    xlabel: '温度 T', xticks: [[0.18, ''], [0.5, 'Tm'], [0.82, '']],
    yticks: [[0.08, ''], [0.5, ''], [0.92, '']], grid: true,
  })
  b.curve(80, 900, 340, 210, [[0, 0.04], [0.2, 0.06], [0.38, 0.14], [0.5, 0.97], [0.62, 0.14], [0.8, 0.06], [1, 0.04]], { stroke: C.bad, sw: 3, smooth: true })
  b.ctext(250, 662, 'Cp（吸热）', { size: 11.5, fill: C.mute })
  b.wtext(80, 964, '升温扫过 Tm 时脂双层吸热熔融——峰位即相变温度。', { size: 11.5, fill: C.sub, maxW: 360, lh: 16 })

  b.panel(490, 600, 400, 376, { title: '四、不饱和键降低 Tm' })
  // 饱和直尾 vs 不饱和弯尾
  b.line(580, 660, 580, 800, { stroke: C.dna, sw: 3 })
  b.ctext(580, 826, '饱和尾（全反式）', { size: 11, weight: 700, fill: C.sub })
  b.polyline([[760, 660], [760, 706], [786, 730], [760, 754], [760, 800]], { stroke: C.rna, sw: 3 })
  b.ctext(770, 826, '顺式双键 ≈30° 弯折', { size: 11, weight: 700, fill: C.rnaD })
  b.circle(773, 730, 5, { fill: C.rna })
  b.wtext(530, 862, '顺式双键使链间无法紧密堆积，Tm 显著低于同链长饱和磷脂——膜在体温保持流动。', { size: 11.5, fill: C.sub, maxW: 330, lh: 17 })

  b.panel(920, 600, 450, 376, { title: '五、代表性 Tm 对照' })
  b.table(944, 656, 402, {
    headers: ['脂质 / 链', 'Tm'],
    colW: [300, 102],
    rowH: 52,
    fontSize: 12,
    rows: [
      ['DPPC（饱和 C16:0）', '≈ 41 ℃'],
      ['硬脂酸（饱和 C18:0）', '69.6 ℃'],
      ['油酸（顺式 C18:1）', '13.4 ℃'],
    ],
  })
  b.wtext(944, 880, '膜功能（酶活性、信号转导、物质转运）依赖液晶相流动性——体温下细胞膜须处于 Tm 之上。', { size: 11.5, fill: C.sub, maxW: 400, lh: 17 })
}

export default scene({
  title: '膜脂的相变：凝胶相与液晶相',
  subtitle: '同一磷脂双层在相变温度 Tm 上下的两种状态；胆固醇双向缓冲、不饱和键显著降低 Tm',
  draw,
})
