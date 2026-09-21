// bc ch4-s2 超二级结构与结构域（39-a 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、超二级结构（模体） ============
  b.panel(30, 132, 660, 412, { title: '一、超二级结构（模体）：二级结构元件的保守组合' })
  // β 链箭头与 α 螺旋卷曲的绘制助手
  const betaArrowH = (x: number, y: number, w: number, h: number, dir: 1 | -1) => {
    const tip = dir === 1 ? x + w : x
    const tail = dir === 1 ? x + w - 14 : x + 14
    b.polygon([[x, y], [tail, y], [tip, y + h / 2], [tail, y + h], [x, y + h]], { fill: C.accL, stroke: C.acc, sw: 1.6 })
  }
  const betaArrowV = (x: number, y: number, h: number, w: number, dir: 1 | -1) => {
    const tip = dir === 1 ? y + h : y
    const tail = dir === 1 ? y + h - 12 : y + 12
    b.polygon([[x, y], [x, tail], [x + w / 2, tip], [x + w, tail], [x + w, y]], { fill: C.accL, stroke: C.acc, sw: 1.6 })
  }
  const coilH = (x: number, y: number, w: number, amp = 7) => {
    const pts: [number, number][] = []
    for (let t = 0; t <= w; t += 4) pts.push([x + t, y - amp * Math.sin((t / 22) * Math.PI * 2)])
    b.polyline(pts, { stroke: C.pro, sw: 3 })
  }
  const quad = (qx: number, qy: number, name: string, note: string) => {
    b.rect(qx, qy, 300, 160, { fill: C.bg, stroke: C.line, sw: 1.2, rx: 8 })
    b.text(qx + 14, qy + 24, name, { size: 12.5, weight: 700, fill: C.ink })
    b.wtext(qx + 14, qy + 148, note, { size: 10, fill: C.mute, maxW: 276, lh: 13 })
  }
  // ① βαβ 单元
  quad(56, 178, '① βαβ 单元', '两段 β 链由一段 α 螺旋连接（螺旋越过折叠片上方）')
  betaArrowH(76, 300, 96, 16, 1)
  betaArrowH(236, 300, 96, 16, -1)
  coilH(168, 252, 76, 8)
  b.line(172, 292, 172, 262, { stroke: C.faint, sw: 1.4 })
  b.line(240, 262, 240, 292, { stroke: C.faint, sw: 1.4 })
  b.text(76, 336, 'β₁', { size: 10.5, weight: 700, fill: C.accD })
  b.text(300, 336, 'β₂', { size: 10.5, weight: 700, fill: C.accD })
  b.text(200, 230, 'α', { size: 12, weight: 700, italic: true, fill: C.proD })
  // ② β 发夹
  quad(360, 178, '② β 发夹（β-meander）', '反平行 β 链由紧凑转角串联')
  betaArrowV(430, 226, 88, 18, 1)
  betaArrowV(470, 226, 88, 18, -1)
  b.path('M439,226 Q449,204 479,226', { stroke: C.acc, sw: 1.8 })
  b.text(500, 260, '转角', { size: 10, fill: C.mute })
  // ③ αα 模体
  quad(56, 350, '③ αα 模体（helix-turn-helix）', '两段 α 螺旋由转角连接——λ 阻遏蛋白识别螺旋插入 DNA 大沟')
  coilH(76, 408, 100, 7)
  b.path('M176,412 q18,-24 36,0', { stroke: C.pro, sw: 3 })
  coilH(212, 430, 100, 7)
  b.text(250, 388, '识别螺旋', { size: 10, weight: 700, fill: C.proD })
  b.text(180, 400, '转角', { size: 10, fill: C.mute })
  // ④ 希腊钥匙
  quad(360, 350, '④ 希腊钥匙（Greek key）', '四段反平行 β 链的特殊连接方式')
  for (let i = 0; i < 4; i++) betaArrowV(424 + i * 36, 398, 84, 16, i % 2 === 0 ? 1 : -1)
  b.path('M432,394 Q500,368 566,394', { stroke: C.acc, sw: 1.8, dash: '5 4' })
  b.text(584, 390, '跨接', { size: 10, fill: C.mute })

  // ============ 二、结构域 ============
  b.panel(710, 132, 660, 412, { title: '二、结构域：独立折叠的功能单元（以 Src 激酶为例）' })
  b.circle(790, 268, 42, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(790, 264, 'SH3', { size: 14, weight: 700, fill: C.proD })
  b.ctext(790, 284, '调节', { size: 10.5, fill: C.mute })
  b.circle(950, 268, 42, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(950, 264, 'SH2', { size: 14, weight: 700, fill: C.proD })
  b.ctext(950, 284, '调节', { size: 10.5, fill: C.mute })
  b.ellipse(1180, 268, 108, 52, { fill: C.enzL, stroke: C.enz, sw: 2 })
  b.ctext(1180, 264, '激酶域', { size: 14, weight: 700, fill: C.enzD })
  b.ctext(1180, 284, '（催化）', { size: 10.5, fill: C.mute })
  b.path('M834,268 q28,-34 72,0', { stroke: C.mute, sw: 2, dash: '5 4' })
  b.path('M994,268 q34,-34 76,0', { stroke: C.mute, sw: 2, dash: '5 4' })
  b.ctext(872, 314, '柔性铰链', { size: 10.5, fill: C.mute })
  b.ctext(1038, 314, '柔性铰链（可被蛋白酶切开）', { size: 10.5, fill: C.mute })
  b.text(726, 196, 'N', { size: 13, weight: 700, fill: C.sub })
  b.etext(1314, 196, 'C', { size: 13, weight: 700, fill: C.sub })
  b.wtext(726, 366, '结构域由 100~200 个残基构成，可独立折叠、功能相对独立；酶的底物结合域与调节域分开，有利于别构调节与模块化进化。', { size: 11.5, fill: C.sub, maxW: 620, lh: 17 })
  b.wtext(726, 432, '域间运动（铰链弯曲）是别构酶与肌动球蛋白工作的基础；结构域的模块化是蛋白进化与别构调节的结构基础。', { size: 11.5, fill: C.mute, maxW: 620, lh: 17 })
  b.text(726, 490, '大蛋白常由数个结构域组装——每个结构域常对应一个功能。', { size: 11.5, fill: C.sub })

  // ============ 三、常见结构域类型 + 经典模体 ============
  b.panel(30, 556, 1340, 424, { title: '三、常见结构域类型与两个经典模体' })
  b.table(56, 620, 720, {
    headers: ['结构域', '特征', '代表蛋白'],
    colW: [190, 290, 240],
    rowH: 38,
    fontSize: 10.5,
    rows: [
      ['平行 β 桶（TIM 桶）', '8 段平行 β 链围成内桶，外绕 8 段 α 螺旋', '磷酸丙糖异构酶及众多代谢酶'],
      ['开放式 β 片（Rossmann）', 'β 折叠片一侧被 α 螺旋覆盖', '乳酸脱氢酶核苷酸结合域'],
      ['全 α 螺旋束（4 螺旋束）', '四段 α 螺旋装配成束', '细胞色素 b₅₆₂、载脂蛋白'],
      ['免疫球蛋白折叠', '两层反平行 β 片由二硫键锁定（β 三明治）', '抗体、细胞表面受体'],
      ['β 螺旋', '平行 β 片卷成螺旋', '果胶酸裂解酶'],
    ],
  })
  b.wtext(56, 892, '模体与结构域的重复利用体现「进化是修补匠」；Rossmann 折叠结合 NAD⁺/FAD，在 β-α-β 连接处的环有保守 Gly-Gly-xx-Gly 序列，广泛见于脱氢酶。', { size: 11.5, fill: C.sub, maxW: 720, lh: 17 })
  // TIM 桶
  b.ellipse(960, 716, 58, 13, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ellipse(960, 782, 58, 13, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2
    b.line(960 + 58 * Math.cos(a), 716 + 13 * Math.sin(a), 960 + 58 * Math.cos(a), 782 + 13 * Math.sin(a), { stroke: C.acc, sw: 1.6 })
  }
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + 0.3
    b.path(`M${960 + 58 * Math.cos(a)},${716 + 13 * Math.sin(a)} q26,14 52,26`, { stroke: C.pro, sw: 2.6, opacity: 0.75 })
  }
  b.ctext(960, 676, 'TIM 桶（α/β 桶）', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(960, 816, '内桶 8β · 外绕 8α', { size: 10.5, fill: C.mute })
  b.ctext(960, 834, '最常见的酶催化结构域', { size: 10.5, fill: C.mute })
  // EF 手
  b.path('M1160,680 q-8,26 0,52', { stroke: C.pro, sw: 3 })
  b.path('M1160,680 l0,-8', { stroke: C.pro, sw: 2 })
  b.path('M1196,680 q8,26 0,52', { stroke: C.pro, sw: 3 })
  b.path('M1160,732 q18,14 36,0', { stroke: C.warn, sw: 2.2 })
  b.ion(1178, 740, 'Ca²⁺', { r: 15, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 10 })
  b.ctext(1128, 706, '螺旋 E', { size: 10, weight: 700, fill: C.proD })
  b.ctext(1232, 706, '螺旋 F', { size: 10, weight: 700, fill: C.proD })
  b.ctext(1178, 672, 'EF 手模体', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(1178, 782, '螺旋-环-螺旋：环中 Asp/Glu 氧原子配位 Ca²⁺', { size: 10.5, fill: C.mute })
  b.ctext(1178, 800, '见于钙调素', { size: 10.5, fill: C.mute })
}

export default scene({
  title: '超二级结构与结构域：从模体到功能模块',
  subtitle: 'βαβ、β 发夹、HTH 与希腊钥匙四种模体；Src 的 SH2/SH3/激酶域分域调节；TIM 桶（8β+8α）与 EF 手（螺旋-环-螺旋配位 Ca²⁺）两大经典',
  draw,
})
