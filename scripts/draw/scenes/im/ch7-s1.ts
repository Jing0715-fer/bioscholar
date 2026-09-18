// im ch7-s1 补体的组成、命名与合成（39-g 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、命名法则 ============
  b.panel(30, 132, 1340, 300, { title: '一、命名法则：按发现先后编号（C1–C9），与激活顺序并不一致' })

  b.ctext(700, 186, '发现顺序（命名序号）', { size: 12.5, weight: 700, fill: C.ink })
  const disc = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9']
  disc.forEach((s, i) => {
    b.rect(80 + i * 145, 200, 120, 34, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 6 })
    b.ctext(80 + i * 145 + 60, 222, s, { size: 13.5, weight: 700, fill: C.sub })
  })

  b.ctext(700, 286, '经典途径的实际激活顺序', { size: 12.5, weight: 700, fill: C.bad })
  const act: Array<[string, string]> = [
    ['C1', C.bad], ['C4', C.bad], ['C2', C.bad], ['C3', C.enz], ['C5', C.enz], ['C6–C9', C.bad],
  ]
  act.forEach(([s, col], i) => {
    b.rect(90 + i * 225, 300, 150, 40, { fill: col === C.enz ? C.enzL : C.badL, fillOp: 0.5, stroke: col, sw: 1.8, rx: 7 })
    b.ctext(90 + i * 225 + 75, 326, s, { size: 14.5, weight: 700, fill: col === C.enz ? C.enzD : C.bad })
    if (i < 5) b.arrow(244 + i * 225, 320, 308 + i * 225, 320, { stroke: C.mute, sw: 2, marker: 'mute' })
  })
  b.ctext(700, 376, '能裂解 C3 与 C5 的复合酶分别称 C3 转化酶与 C5 转化酶——三条激活途径殊途同归的汇合点', { size: 11.5, weight: 600, fill: C.ink })
  b.ctext(700, 404, '注意：C4 与 C2 的序号早于 C3，却在 C3 之前被激活', { size: 10.5, fill: C.mute })

  // ============ 二、组成分组 ============
  b.panel(30, 448, 1340, 250, { title: '二、40 余种蛋白按职能分组：固有成分 · 调节蛋白 · 补体受体' })
  b.table(60, 494, 1280, {
    headers: ['组别', '代表成分', '主要职能'],
    colW: [220, 520, 540],
    rowH: 44,
    fontSize: 12,
    rows: [
      ['固有成分', 'C1–C9 · B / D / P 因子 · MBL', '组成级联反应的执行序列'],
      ['可溶性调节蛋白', 'C1-INH · C4bp · H 因子 · I 因子 · S 蛋白', '灭活启动酶与转化酶，限制 MAC'],
      ['膜型调节蛋白与受体', 'DAF（CD55）· MCP（CD46）· CD59 · CR1–CR4', '保护自身细胞并介导效应'],
    ],
  })
  b.ctext(700, 672, '调节蛋白的数量与固有成分相当——级联之猛，恰需刹车之精', { size: 11.5, weight: 600, fill: C.ink })

  // ============ 三、理化特性与合成 ============
  b.panel(30, 714, 1340, 264, { title: '三、理化特性与生物合成：肝细胞与巨噬细胞双中心' })

  b.rect(60, 758, 620, 186, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(80, 784, '理化特性与量级悬殊', { size: 13, weight: 700, fill: C.ink })
  const phys: Array<[string, string]> = [
    ['总量', '约占血清球蛋白的 10%，体液丰度最高的蛋白体系之一'],
    ['热不稳定性', '血清经 56 °C 作用 30 分钟即被灭活（体外清除补体活性的经典操作）'],
    ['浓度两端', 'C3 最高（约 1.2–1.6 g/L）；D 因子最小（约 24 kDa、1–2 mg/L）'],
    ['分子量两端', 'D 因子约 24 kDa；C4bp 可达约 550 kDa'],
  ]
  phys.forEach(([t, s], i) => {
    b.circle(100, 810 + i * 32, 3.5, { fill: C.acc })
    b.text(112, 814 + i * 32, t, { size: 11.5, weight: 700, fill: C.ink })
    b.text(112 + 92, 814 + i * 32, s, { size: 10.5, fill: C.sub })
  })
  b.ctext(370, 930, 'D 因子浓度最低，恰与其旁路限速酶的身份相称', { size: 10, fill: C.mute })

  b.rect(710, 758, 610, 186, { fill: C.rnaL, fillOp: 0.35, stroke: C.rna, sw: 1.5, rx: 9 })
  b.text(730, 784, '生物合成双中心', { size: 13, weight: 700, fill: C.rnaD })
  b.rect(740, 806, 250, 72, { fill: C.bg, stroke: C.rna, sw: 1.5, rx: 8 })
  b.ctext(865, 832, '肝细胞', { size: 13, weight: 700, fill: C.rnaD })
  b.ctext(865, 854, '血浆补体的主要来源', { size: 10.5, fill: C.sub })
  b.rect(1040, 806, 250, 72, { fill: C.bg, stroke: C.rna, sw: 1.5, rx: 8 })
  b.ctext(1165, 832, '巨噬细胞', { size: 13, weight: 700, fill: C.rnaD })
  b.ctext(1165, 854, '炎症灶局部补体的重要来源', { size: 10.5, fill: C.sub })
  b.ctext(1015, 912, '局部合成受 IL-6、IFN-γ 等细胞因子调控', { size: 11, weight: 600, fill: C.rnaD })
  b.ctext(1015, 936, '补体 = 全身储备 + 局部增产', { size: 10.5, fill: C.mute })
}

export default scene({
  title: '补体的组成、命名与合成：命名序号 ≠ 激活顺序',
  subtitle: '补体由 40 余种蛋白质组成，总量约占血清球蛋白的 10%；固有成分按发现先后命名 C1–C9，经典途径实际激活顺序为 C1、C4、C2、C3、C5；C3 浓度最高（约 1.2–1.6 g/L）、D 因子最小（约 24 kDa，1–2 mg/L）、C4bp 可达约 550 kDa；56 °C 30 分钟即被灭活；血浆补体主要由肝细胞合成，巨噬细胞是炎症灶局部补体的重要来源',
  draw,
})
