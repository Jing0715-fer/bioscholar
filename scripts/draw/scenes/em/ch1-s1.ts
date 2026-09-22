// em ch1-s1 电子显微镜的诞生（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、波长革命：光学极限与物质波 ============
  b.panel(30, 132, 660, 286, { title: '一、波长革命：光学极限与物质波' })
  b.text(50, 184, 'd = 0.61λ/(n·sin α)（阿贝判据，1873）', { size: 16.5, weight: 700, fill: C.ink })
  b.wtext(50, 210, '以可见光 400–700 nm 的波长、油浸物镜约 1.4 的数值孔径计算，光学极限分辨率约 200 nm——镜片磨得再完美，更小的细节也无力分辨。', { size: 12.5, fill: C.sub, maxW: 620, lh: 19 })
  b.tag(210, 306, '1924 德布罗意物质波：λ = h/p', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 12.5, weight: 700, pad: 10 })
  b.tag(490, 306, '1929 诺贝尔物理学奖', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 12.5, weight: 700, pad: 10 })
  b.wtext(50, 344, '波长与动量成反比，一切运动粒子皆具波动性；1927 年电子衍射实验证实这一预言。电子只需数千伏电压加速，波长远短于可见光——短约十万倍（10^{5} 量级），波长从此不再是分辨率的枷锁。', { size: 12.5, fill: C.sub, maxW: 620, lh: 19 })

  // ============ 二、1931 超显微镜光路 ============
  b.panel(710, 132, 660, 286, { title: '二、1931：柏林工大的「超显微镜」（Übermikroskop）' })
  const cx = 800
  const coil = (y: number, label: string) => {
    b.rect(cx - 46, y, 92, 26, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 5 })
    for (let i = 0; i < 3; i++) {
      b.circle(cx - 46, y + 7 + i * 6, 5, { fill: C.acc })
      b.circle(cx + 46, y + 7 + i * 6, 5, { fill: C.acc })
    }
    b.text(cx + 62, y + 17, label, { size: 12, weight: 600, fill: C.accD })
  }
  // 电子枪（阴极 V 形）与阳极
  b.path(`M ${cx - 13},168 L ${cx},188 L ${cx + 13},168`, { stroke: C.bad, sw: 3.2 })
  b.line(cx - 50, 200, cx - 9, 200, { stroke: C.sub, sw: 4.5 })
  b.line(cx + 9, 200, cx + 50, 200, { stroke: C.sub, sw: 4.5 })
  b.text(cx + 62, 172, '电子枪（阴极）', { size: 12, weight: 600, fill: C.badD })
  b.text(cx + 62, 205, '阳极（加速）', { size: 12, weight: 600, fill: C.sub })
  // 电子束路径
  b.line(cx, 190, cx - 22, 224, { stroke: C.warn, sw: 1.3 })
  b.line(cx, 190, cx + 22, 224, { stroke: C.warn, sw: 1.3 })
  coil(228, '聚光线圈')
  b.line(cx - 22, 256, cx - 5, 282, { stroke: C.warn, sw: 1.3 })
  b.line(cx + 22, 256, cx + 5, 282, { stroke: C.warn, sw: 1.3 })
  // 样品
  b.rect(cx - 26, 284, 52, 5, { fill: C.enz })
  b.text(cx + 62, 290, '薄样品', { size: 12, weight: 600, fill: C.enzD })
  b.line(cx - 5, 292, cx - 24, 310, { stroke: C.warn, sw: 1.3 })
  b.line(cx + 5, 292, cx + 24, 310, { stroke: C.warn, sw: 1.3 })
  coil(312, '物镜线圈')
  b.line(cx - 24, 340, cx - 11, 368, { stroke: C.warn, sw: 1.3 })
  b.line(cx + 24, 340, cx + 11, 368, { stroke: C.warn, sw: 1.3 })
  // 荧光屏
  b.rect(cx - 62, 372, 124, 8, { fill: C.ok })
  b.text(cx + 62, 380, '荧光屏（放大像）', { size: 12, weight: 600, fill: C.okD })
  b.ctext(1190, 200, '电气工程师诺尔（Knoll）与', { size: 12.5, fill: C.sub })
  b.ctext(1190, 220, '博士生鲁斯卡（Ruska），', { size: 12.5, fill: C.sub })
  b.ctext(1190, 240, '柏林工业大学，1931 年春', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(1010, 286, '电子枪发射的电子束穿透薄样品，经磁透镜链逐级放大，在荧光屏上形成放大像。', { size: 12, fill: C.sub, maxW: 340, lh: 18 })
  b.tag(1190, 360, '1933 年改进机型首次超越光学显微镜', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11.5, weight: 700, pad: 9 })

  // ============ 三、仪器演进年表 ============
  b.panel(30, 438, 1340, 238, { title: '三、仪器演进年表：从物质波到单原子（1924–1986）' })
  const evs: Array<{ at: number; label: string; sub?: string; above?: boolean; c?: string }> = [
    { at: 0.035, label: '1924 物质波假说', sub: '德布罗意', above: true, c: C.pro },
    { at: 0.135, label: '1926 磁透镜理论', sub: '布施，电子光学奠基', above: false, c: C.pro },
    { at: 0.235, label: '1931 首台透射电镜', sub: '诺尔与鲁斯卡，柏林工大', above: true, c: C.bad },
    { at: 0.335, label: '1937 首张生物样品像', sub: '硅藻，西门子', above: false, c: C.bad },
    { at: 0.435, label: '1938 首台扫描透射电镜', sub: '冯·阿登纳', above: true, c: C.acc },
    { at: 0.535, label: '1939 首台商品电镜', sub: '西门子交付', above: false, c: C.bad },
    { at: 0.635, label: '1942 首台 SEM', sub: '兹沃雷金，RCA', above: true, c: C.acc },
    { at: 0.735, label: '1965 首台商品 SEM', sub: 'Stereoscan，剑桥仪器', above: false, c: C.acc },
    { at: 0.845, label: '1970 单原子成像', sub: '克鲁，场发射 STEM', above: true, c: C.dna },
    { at: 0.95, label: '1986 诺贝尔物理学奖', sub: '鲁斯卡（与宾尼希、罗雷尔）', above: false, c: C.warn },
  ]
  b.timelineH(70, 560, 1260, evs)

  // ============ 四、与光学显微镜的分辨率对比 ============
  b.panel(30, 696, 1340, 284, { title: '四、与光学显微镜的分辨率对比：三个数量级的跃迁（对数标尺）' })
  const x0 = 120, xw = 1160, ry = 860
  const lx = (v: number) => x0 + ((Math.log10(v) + 3) / 6) * xw
  b.line(x0, ry, x0 + xw + 14, ry, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  for (let e = -3; e <= 3; e++) {
    const tx = x0 + ((e + 3) / 6) * xw
    b.line(tx, ry, tx, ry + 7, { stroke: C.sub, sw: 1.8 })
    b.ctext(tx, ry + 24, e === 0 ? '1' : e === 1 ? '10' : `10^{${e}}`, { size: 12, fill: C.mute })
  }
  b.ctext(700, ry + 50, '波长 / 分辨率（nm，对数刻度）', { size: 13, weight: 600, fill: C.sub })
  // 可见光波段
  b.rect(lx(400), 822, lx(700) - lx(400), 38, { fill: C.warnL, fillOp: 0.8, stroke: C.warn, sw: 1.2 })
  // 标记线（先画线，后画标签覆盖）
  const marks: Array<[number, number, string, string, number]> = [
    [lx(0.0055), 798, '电子波长（较可见光短约 10^{5} 倍）', C.acc, 1],
    [lx(0.2), 836, '现代电子显微镜：亚纳米级', C.dna, 2],
    [lx(200), 798, '光学衍射极限约 200 nm', C.bad, 1],
    [lx(550), 836, '可见光 400–700 nm', C.warn, 2],
  ]
  marks.forEach(([mx, , , c]) => b.line(mx, 812, mx, ry, { stroke: c, sw: 2, dash: '5 4' }))
  marks.forEach(([mx, my, s, c]) => b.tag(mx, my, s, { fill: C.bg, stroke: c, tfill: c, size: 11.5, weight: 700, pad: 8 }))
  // 数量级跃迁箭头
  b.arrow(lx(200) - 26, 776, lx(0.2) + 40, 776, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext((lx(200) + lx(0.2)) / 2, 762, '约三个数量级', { size: 12.5, weight: 700, fill: C.badD })
  b.wtext(60, 938, '波长不是瓶颈、像差才是：皮米级的电子波长被毫米级的磁透镜像差削平到亚纳米——现代电镜远未用尽波长的潜力。', { size: 11.5, fill: C.sub, maxW: 640, lh: 17 })
  b.wtext(760, 938, '1986 年鲁斯卡因电子显微镜的发明与宾尼希、罗雷尔（扫描隧道显微镜）共享诺贝尔物理学奖——距 1931 年样机问世逾半个世纪。', { size: 11.5, fill: C.sub, maxW: 580, lh: 17 })
}

export default scene({
  title: '电子显微镜的诞生：从物质波到超显微镜',
  subtitle: '阿贝光学极限约 200 nm、电子波长短约十万倍；1924 物质波、1926 磁透镜、1931 首台 TEM、1939 商品化、1986 鲁斯卡获诺贝尔物理学奖',
  draw,
})
