// cb ch4-s3 三类包被膜泡：COPII、COPI 与网格蛋白（39-d 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、COPII ============
  b.panel(30, 132, 660, 430, { title: '一、COPII 包被小泡：ER → 高尔基体正向运输' })
  // ER 膜与 Sar1 激活
  b.bilayer(60, 300, 250)
  b.ctext(185, 340, 'ER 膜（ERES 出芽位点）', { size: 10.5, weight: 600, fill: C.dnaD })
  b.rect(128, 280, 34, 20, { fill: C.okL, stroke: C.ok, sw: 1.5, rx: 4 })
  b.ctext(145, 294, 'Sec12', { size: 9.5, weight: 700, fill: C.ok })
  b.circle(100, 252, 14, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ctext(100, 256, 'Sar1', { size: 9, weight: 700, fill: C.accD })
  b.ctext(100, 224, 'Sar1-GDP（GEF 激活）', { size: 10, fill: C.sub })
  b.arrow(100, 268, 128, 282, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  // 出芽的 COPII 小泡
  b.circle(300, 240, 24, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.circle(300, 240, 31, { stroke: C.acc, sw: 1.9, dash: '5 4', fill: 'none' })
  b.path('M 300,290 L 300,268', { stroke: C.sub, sw: 2 })
  b.ctext(300, 196, 'COPII 小泡（出芽）', { size: 10.5, weight: 600, fill: C.accD })
  // 分子步骤
  const steps1: [string, string][] = [
    ['① Sar1 激活', '小 GTP 酶 Sar1 被 ER 膜上 GEF（Sec12）激活，Sar1-GTP 的 N 端两性螺旋插入膜内启动出芽'],
    ['② Sec23/Sec24', 'Sar1 招募 Sec23/Sec24 异二聚体：Sec24 是货物识别核心，结合分泌蛋白胞质尾的 exit 信号（如二酸性基序 DxE）'],
    ['③ Sec13/Sec31', '外层 Sec13/Sec31 形成笼架，完成包被'],
  ]
  steps1.forEach(([t, s], i) => {
    const y = 366 + i * 42
    b.text(60, y, t, { size: 11.5, weight: 700, fill: C.ink })
    b.wtext(170, y - 11, s, { size: 10.5, fill: C.sub, maxW: 480, lh: 13.5 })
  })
  b.wtext(60, 508, '从 ERES 生成，经 ERGIC 送往顺面高尔基体；组成型、持续进行。约 1/3 的 ER 膜蛋白会「逃逸」到高尔基体，需 COPI 回收。', { size: 10.5, fill: C.mute, maxW: 600, lh: 14.5 })

  // ============ 二、COPI ============
  b.panel(710, 132, 660, 430, { title: '二、COPI 包被小泡：高尔基体 → ER 逆向回收' })
  b.golgi(880, 210, 130, { label: '' })
  b.ctext(880, 300, '高尔基体', { size: 11.5, weight: 700, fill: C.accD })
  b.vesicle(1070, 250, 24, { coat: 'cop' })
  b.arrow(950, 246, 1036, 250, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.ctext(1070, 300, 'COPI 小泡（逆向）', { size: 10.5, weight: 600, fill: C.bad })
  b.bilayer(1150, 250, 180)
  b.ctext(1240, 290, 'ER 膜', { size: 10.5, weight: 600, fill: C.dnaD })
  b.arrow(1100, 250, 1142, 250, { stroke: C.mute, sw: 2, marker: 'mute' })
  // 货物标注
  b.circle(1070, 250, 8, { fill: C.rnaL, stroke: C.rna, sw: 1.4 })
  b.ctext(1070, 222, 'KDEL 受体货运', { size: 10, fill: C.rnaD })
  const steps2: [string, string][] = [
    ['① Arf1 激活', '小 GTP 酶 Arf1 激活后招募七聚体 coatomer（αββ\'δεγζ）形成包被'],
    ['② 识别回收货物', '可溶性蛋白经 KDEL 受体识别 C 端 KDEL 序列；膜蛋白被直接识别 C 端 KKXX 基序'],
    ['③ 维持驻留平衡', '同时维持高尔基体内部顺面驻留蛋白的回流'],
  ]
  steps2.forEach(([t, s], i) => {
    const y = 366 + i * 42
    b.text(740, y, t, { size: 11.5, weight: 700, fill: C.ink })
    b.wtext(850, y - 11, s, { size: 10.5, fill: C.sub, maxW: 480, lh: 13.5 })
  })
  b.wtext(740, 508, '布雷菲德菌素 A（BFA）抑制 Arf 的 GEF → COPI 解离、高尔基体逆向融合入 ER，是研究分泌途径的经典工具药。', { size: 10.5, fill: C.mute, maxW: 600, lh: 14.5 })

  // ============ 三、网格蛋白 ============
  b.panel(30, 576, 660, 404, { title: '三、网格蛋白包被小泡：TGN→内体与质膜→内体' })
  // triskelion 三足蛋白
  const triskelion = (cx: number, cy: number, r: number, col: string) => {
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 - Math.PI / 2
      const x1 = cx + r * 0.45 * Math.cos(a)
      const y1 = cy + r * 0.45 * Math.sin(a)
      const x2 = cx + r * Math.cos(a - 0.28)
      const y2 = cy + r * Math.sin(a - 0.28)
      b.path(`M ${cx},${cy} L ${x1},${y1} L ${x2},${y2}`, { stroke: col, sw: 2.6, fill: 'none' })
    }
    b.circle(cx, cy, 4, { fill: col })
  }
  b.ctext(140, 640, '三足蛋白 triskelion', { size: 11, weight: 700, fill: C.warn })
  triskelion(140, 690, 34, C.warn)
  b.ctext(140, 748, '重链＋轻链组成', { size: 10, fill: C.mute })
  // 多面体笼架
  b.polygon([[300, 660], [380, 640], [440, 690], [420, 745], [330, 750], [280, 705]], { fill: C.warnL, fillOp: 0.4, stroke: C.warn, sw: 1.8 })
  triskelion(340, 690, 20, C.warn)
  triskelion(396, 716, 20, C.warn)
  b.ctext(360, 780, '多个三足蛋白聚合成多面体笼架', { size: 10.5, fill: C.sub })
  // 接头与路线
  b.text(60, 826, '接头蛋白连接货物与网格蛋白：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(150, 856, 'AP2（质膜）', { fill: C.accL, stroke: C.acc, size: 11, tfill: C.accD, pad: 8 })
  b.tag(330, 856, 'AP1 / GGA（TGN）', { fill: C.dnaL, stroke: C.dna, size: 11, tfill: C.dnaD, pad: 8 })
  b.wtext(60, 886, 'TGN 处 AP1 与 GGA 识别 M6P 受体胞质尾的分选基序；质膜处小泡由 dynamin 缢断；负责溶酶体酶运输、受体内部化与质膜组分回收。', { size: 10.5, fill: C.sub, maxW: 600, lh: 14.5 })
  b.wtext(60, 948, '网格蛋白小泡同样需要脱包被后才能与靶膜融合。', { size: 10, fill: C.mute, maxW: 600, lh: 13.5 })

  // ============ 四、三类膜泡对照 ============
  b.panel(710, 576, 660, 404, { title: '四、三类包被膜泡对照' })
  b.table(726, 626, 628, {
    headers: ['类型', '包被核心', '小 GTP 酶', '运输方向', '主要货物'],
    colW: [76, 130, 62, 130, 230],
    rowH: 52,
    fontSize: 10,
    rows: [
      ['COPII', 'Sec23/24-Sec13/31', 'Sar1', 'ER→高尔基体', '分泌蛋白、溶酶体酶原'],
      ['COPI', 'coatomer 七聚体', 'Arf1', '高尔基体→ER（逆向）', 'KDEL/KKXX 回收货物'],
      ['网格蛋白', 'clathrin+AP/GGA', 'Arf6 等', 'TGN→内体；质膜→内体', 'M6P 受体-酶、受体-配体复合物'],
    ],
  })
  b.tag(960, 800, '包被蛋白的三重职责', { fill: C.proL, stroke: C.pro, size: 11.5, weight: 700, tfill: C.proD, pad: 9 })
  b.wtext(726, 830, '驱动膜变形、选择货物、形成小泡——出芽之后须脱包被才能与靶膜融合。', { size: 11, fill: C.sub, maxW: 600, lh: 15.5 })
  b.wtext(726, 880, 'BFA 抑制 Arf 的 GEF：COPI 解离 → 高尔基体崩解并入 ER（逆向融合），直观展示膜泡运输维持细胞器身份的动态平衡。', { size: 10.5, fill: C.mute, maxW: 600, lh: 14.5 })
  b.wtext(726, 936, '约 1/3 的 ER 膜蛋白会「逃逸」到高尔基体，依靠 COPI 逆行回收维持 ER 驻留蛋白库。', { size: 10.5, fill: C.mute, maxW: 600, lh: 14.5 })
}
export default scene({
  title: '三类包被膜泡：COPII、COPI 与网格蛋白',
  subtitle: 'COPII（Sar1–Sec23/24–Sec13/31）介导 ER→高尔基体正向运输、Sec24 识别 exit 信号；COPI（Arf1–coatomer）回收 KDEL/KKXX 货物、BFA 使高尔基体崩解入 ER；网格蛋白经 AP1/GGA 与 AP2 接头选择货物',
  draw,
})
