// xc ch2-s1 晶体点阵与 Miller 指数（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、点阵＋基元 与 晶胞六参数 ============
  b.panel(30, 132, 660, 420, { title: '一、点阵＋基元＝晶体结构；晶胞六参数' })
  // 左：带基元的二维点阵
  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 3; j++) {
      const px = 80 + i * 58
      const py = 250 + j * 58
      b.circle(px, py, 5, { fill: C.dna })
      b.circle(px + 10, py - 8, 3.6, { fill: C.rna })
    }
  }
  b.rect(80, 250, 58, 58, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 2 })
  b.ctext(109, 236, '基元', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(210, 470, '点阵＝排的秩序；基元＝排的内容', { size: 11, weight: 700, fill: C.sub })
  b.wtext(60, 496, '平移周期是相干衍射的根源（第 1 章劳厄实验的尺度匹配）；原胞每胞恰含 1 个格点，惯用晶胞按对称性最高选取——面心含 4 个、体心含 2 个。', { size: 10.5, fill: C.sub, maxW: 340, lh: 15 })
  // 右：三维晶胞（斜投影）
  const O: [number, number] = [450, 415]
  const A: [number, number] = [580, 415]
  const Bp: [number, number] = [505, 460]
  const Cc: [number, number] = [450, 270]
  const AB: [number, number] = [635, 460]
  const AC: [number, number] = [580, 270]
  const BC: [number, number] = [505, 315]
  const ABC: [number, number] = [635, 315]
  const edge = (p: [number, number], q: [number, number], dash?: string) =>
    b.line(p[0], p[1], q[0], q[1], { stroke: C.sub, sw: dash ? 1.3 : 1.8, dash })
  edge(O, A); edge(O, Bp); edge(A, AB); edge(Bp, AB)
  edge(O, Cc); edge(A, AC)
  edge(Cc, AC); edge(Bp, BC, '5 4'); edge(AB, ABC, '5 4')
  edge(Cc, BC, '5 4'); edge(AC, ABC, '5 4'); edge(BC, ABC, '5 4')
  b.arrow(450, 415, 580, 415, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.arrow(450, 415, 505, 460, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.arrow(450, 415, 450, 270, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.ctext(515, 438, 'a', { size: 13, weight: 700, fill: C.accD, italic: true })
  b.ctext(490, 482, 'b', { size: 13, weight: 700, fill: C.accD, italic: true })
  b.ctext(436, 340, 'c', { size: 13, weight: 700, fill: C.accD, italic: true })
  b.path('M 488,415 A 38,38 0 0 1 478,452', { fill: 'none', stroke: C.mute, sw: 1.4 })
  b.ctext(512, 449, 'γ', { size: 12, weight: 700, fill: C.mute, italic: true })
  b.ctext(487, 384, 'α', { size: 12, weight: 700, fill: C.mute, italic: true })
  b.ctext(462, 402, 'β', { size: 12, weight: 700, fill: C.mute, italic: true })
  b.wtext(470, 196, '六参数：棱长 a、b、c；夹角 α（b、c 间）、β（c、a 间）、γ（a、b 间）。一般晶胞 V = abc·√(1−cos²α−cos²β−cos²γ+2cosα·cosβ·cosγ)；单斜 P2_{1} 直接用 V = abc·sinβ。', { size: 10.5, fill: C.sub, maxW: 195, lh: 15 })
  b.wtext(440, 496, '蛋白晶胞边长数十至数百 Å、体积 10⁵–10⁷ Å³——是 Matthews 判据与强度绝对标定的共同入口。', { size: 10.5, fill: C.mute, maxW: 220, lh: 15 })

  // ============ 二、Miller 指数：晶面的身份证 ============
  b.panel(710, 132, 660, 420, { title: '二、Miller 指数：晶面的身份证' })
  b.wtext(730, 186, '规则：晶面在三轴截距取倒数再整数化；(hkl) 标一族无限平行、等距的晶面；平行于某轴则该指数为 0；负截距在指数上方加横线。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  // (110) 面族
  for (let i = 0; i <= 4; i++) for (let j = 0; j <= 3; j++) b.circle(760 + i * 40, 430 - j * 40, 2.6, { fill: C.mute })
  for (let n = 1; n <= 4; n++) b.line(760 + n * 40, 430, 760, 430 - n * 40, { stroke: C.acc, sw: 1.8 })
  b.line(852, 404, 830, 426, { stroke: C.enz, sw: 2, markerStart: 'enz', marker: 'enz' })
  b.ctext(848, 392, 'd', { size: 11, weight: 700, fill: C.enz, italic: true })
  b.ctext(842, 462, '(110) 面对角线面族', { size: 10.5, weight: 700, fill: C.accD })
  // (210) 面族
  for (let i = 0; i <= 4; i++) for (let j = 0; j <= 3; j++) b.circle(960 + i * 40, 430 - j * 40, 2.6, { fill: C.mute })
  b.line(1040, 430, 960, 390, { stroke: C.acc, sw: 1.8 })
  b.line(1120, 430, 960, 350, { stroke: C.acc, sw: 1.8 })
  b.line(1120, 390, 960, 310, { stroke: C.acc, sw: 1.8 })
  b.line(1052, 406, 1034, 424, { stroke: C.enz, sw: 2, markerStart: 'enz', marker: 'enz' })
  b.ctext(1050, 394, 'd', { size: 11, weight: 700, fill: C.enz, italic: true })
  b.ctext(1044, 462, '(210) 高指数面族', { size: 10.5, weight: 700, fill: C.accD })
  // (111) 立方晶胞体对角面
  const cO: [number, number] = [1210, 420]
  const cA: [number, number] = [1320, 420]
  const cB: [number, number] = [1265, 452]
  const cC: [number, number] = [1210, 325]
  const cAB: [number, number] = [1375, 452]
  const cAC: [number, number] = [1320, 325]
  const cBC: [number, number] = [1265, 357]
  const cABC: [number, number] = [1375, 357]
  const ce = (p: [number, number], q: [number, number], dash?: string) =>
    b.line(p[0], p[1], q[0], q[1], { stroke: C.faint, sw: dash ? 1.1 : 1.5, dash })
  ce(cO, cA); ce(cO, cB); ce(cA, cAB); ce(cB, cAB)
  ce(cO, cC); ce(cA, cAC); ce(cC, cAC)
  ce(cB, cBC, '4 3'); ce(cAB, cABC, '4 3'); ce(cC, cBC, '4 3'); ce(cAC, cABC, '4 3'); ce(cBC, cABC, '4 3')
  b.polygon([[cA[0], cA[1]], [cB[0], cB[1]], [cC[0], cC[1]]], { fill: C.accL, fillOp: 0.75, stroke: C.acc, sw: 2.2 })
  b.circle(cA[0], cA[1], 3.4, { fill: C.acc })
  b.circle(cB[0], cB[1], 3.4, { fill: C.acc })
  b.circle(cC[0], cC[1], 3.4, { fill: C.acc })
  b.ctext(1324, 438, 'a', { size: 11, weight: 700, fill: C.mute, italic: true })
  b.ctext(1270, 470, 'b', { size: 11, weight: 700, fill: C.mute, italic: true })
  b.ctext(1196, 372, 'c', { size: 11, weight: 700, fill: C.mute, italic: true })
  b.ctext(1282, 300, '(111) 体对角线面族', { size: 10.5, weight: 700, fill: C.accD })
  b.wtext(730, 500, '换算实例：截距 2a、3b、6c → 取倒数 1/2、1/3、1/6 → 通分乘 6 → (321)；截距恰为 a、b、c → (111)。晶带定律 hu + kv + lw = 0 判晶向 [uvw] 与晶面 (hkl) 平行。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })

  // ============ 三、立方晶系面间距算例 ============
  b.panel(30, 572, 660, 390, { title: '三、面间距：d = a/√(h²+k²+l²)（a = 10 Å 算例）' })
  b.table(60, 646, 600, {
    headers: ['晶面 (hkl)', 'h²+k²+l²', '间距 d（Å）', '备注'],
    colW: [130, 120, 130, 220],
    rowH: 33,
    fontSize: 12.5,
    rows: [
      ['(100)', '1', '10.00', '晶胞的六个面'],
      ['(110)', '2', '7.07', '面对角线面族'],
      ['(111)', '3', '5.77', '体对角线面族'],
      ['(210)', '5', '4.47', '高指数面族'],
      ['(222)', '12', '2.89', '指数升高、间距减小'],
    ],
  })
  b.wtext(60, 856, '间距随指数升高单调减小——高分辨率信息藏在高指数反射里：测到多大 hkl，就看到多小的细节。四方 d = 1/√((h²+k²)/a² + l²/c²)；正交 d = 1/√(h²/a² + k²/b² + l²/c²)。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15.5 })
  b.tag(350, 928, '「求 d」永远等价于「求倒易格点到原点的距离」', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 10 })

  // ============ 四、倒易点阵 ============
  b.panel(710, 572, 660, 390, { title: '四、倒易点阵：衍射的自然语言' })
  b.wtext(730, 616, '倒易基矢 b₁ = a₂×a₃/V、b₂ = a₃×a₁/V、b₃ = a₁×a₂/V；b₁⊥a₂、b₂⊥a₁。正空间 (hkl) 面族 ↔ 倒易格点 h b₁ + k b₂ + l b₃，格矢沿面法线、长度 d* = 1/d（晶体学惯例不含 2π）；两套晶胞体积互为倒数 V* = 1/V。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  // 正空间斜格子
  const dO: [number, number] = [790, 930]
  for (let i = 0; i <= 2; i++) for (let j = 0; j <= 2; j++)
    b.circle(dO[0] + i * 90 + j * 24, dO[1] - j * 68, 3.4, { fill: C.dna })
  b.arrow(dO[0], dO[1], dO[0] + 90, dO[1], { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.arrow(dO[0], dO[1], dO[0] + 24, dO[1] - 68, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.ctext(dO[0] + 45, dO[1] + 18, 'a₁', { size: 12, weight: 700, fill: C.dnaD })
  b.ctext(dO[0] + 42, dO[1] - 40, 'a₂', { size: 12, weight: 700, fill: C.dnaD })
  b.ctext(dO[0] + 105, dO[1] - 78, '正空间点阵', { size: 11, weight: 700, fill: C.dnaD })
  // 倒易格子（旋转约 90°、间距不同）
  const rO: [number, number] = [1090, 880]
  for (let i = 0; i <= 2; i++) for (let j = 0; j <= 2; j++)
    b.circle(rO[0] + i * 54, rO[1] - j * 55 - i * 20, 3.4, { fill: C.acc })
  b.arrow(rO[0], rO[1], rO[0] + 54, rO[1] - 20, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.arrow(rO[0], rO[1], rO[0], rO[1] - 55, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.ctext(rO[0] + 36, rO[1] + 6, 'b₁', { size: 12, weight: 700, fill: C.accD })
  b.ctext(rO[0] - 16, rO[1] - 46, 'b₂', { size: 12, weight: 700, fill: C.accD })
  b.ctext(rO[0] + 62, rO[1] - 92, '倒易点阵', { size: 11, weight: 700, fill: C.accD })
  b.path('M 1000,790 C 1010,760 1040,750 1062,760', { fill: 'none', stroke: C.mute, sw: 1.6, dash: '5 4', marker: 'mute' })
  b.wtext(730, 952, '长晶轴 ↔ 短倒易轴：正交晶胞 a=80、b=100、c=120 Å 的倒易格点间距分别为 0.0125、0.0100、0.0083 Å^{-1}——「反射指标」本质就是倒易格点坐标，第 4 章 Ewald 球的语言。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })
}

export default scene({
  title: '晶体点阵、晶胞与 Miller 指数',
  subtitle: '晶体结构＝点阵＋基元；晶胞六参数 a b c α β γ；(110)/(111)/(210) 面族；立方 d = a/√(h²+k²+l²)（a=10 Å 时 d=7.07/5.77/4.47 Å）；倒易点阵 d* = 1/d',
  draw,
})
