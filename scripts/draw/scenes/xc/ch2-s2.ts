// xc ch2-s2 七大晶系与十四种布拉维格子（6-xc）
import { scene, C, B } from '../../lib'

const P8: [number, number, number][] = [
  [0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0],
  [0, 0, 1], [1, 0, 1], [0, 1, 1], [1, 1, 1],
]
const PT_I: [number, number, number][] = [...P8, [0.5, 0.5, 0.5]]
const PT_F: [number, number, number][] = [...P8, [0.5, 0.5, 0], [0.5, 0.5, 1], [0.5, 0, 0.5], [0.5, 1, 0.5], [0, 0.5, 0.5], [1, 0.5, 0.5]]
const PT_C: [number, number, number][] = [...P8, [0.5, 0.5, 0], [0.5, 0.5, 1]]

// 斜投影小晶胞：va/vb/vc 为三条棱的屏幕向量，pts 为格点分数坐标 (i,j,k)
function cell3d(b: B, cx: number, cy: number, va: [number, number], vb: [number, number], vc: [number, number], pts: [number, number, number][], label: string) {
  const ox = cx - (va[0] + vb[0] + vc[0]) / 2
  const oy = cy - (va[1] + vb[1] + vc[1]) / 2
  const P = (i: number, j: number, k: number): [number, number] => [ox + i * va[0] + j * vb[0] + k * vc[0], oy + i * va[1] + j * vb[1] + k * vc[1]]
  const c: [number, number][] = [P(0, 0, 0), P(1, 0, 0), P(0, 1, 0), P(1, 1, 0), P(0, 0, 1), P(1, 0, 1), P(0, 1, 1), P(1, 1, 1)]
  const e = (p: [number, number], q: [number, number], dash?: string) => b.line(p[0], p[1], q[0], q[1], { stroke: C.sub, sw: 1.2, dash })
  e(c[0], c[1]); e(c[0], c[2]); e(c[1], c[3]); e(c[2], c[3])
  e(c[0], c[4]); e(c[1], c[5]); e(c[4], c[5])
  e(c[2], c[6], '3 3'); e(c[3], c[7], '3 3'); e(c[4], c[6], '3 3'); e(c[5], c[7], '3 3'); e(c[6], c[7], '3 3')
  for (const p of pts) { const q = P(p[0], p[1], p[2]); b.circle(q[0], q[1], 3.2, { fill: C.dna }) }
  b.ctext(cx, cy + 50, label, { size: 11, weight: 700, fill: C.sub })
}

// 六方棱柱小晶胞
function hexCell(b: B, cx: number, cy: number, label: string) {
  const r = 26, yk = 0.4, H = 34
  const vx: [number, number][] = []
  for (let i = 0; i < 6; i++) {
    const a = Math.PI / 2 + (i * Math.PI) / 3
    vx.push([cx + r * Math.cos(a), cy - H / 2 + yk * r * Math.sin(a)])
  }
  const bot = vx.map(p => [p[0], p[1] + H] as [number, number])
  for (let i = 0; i < 6; i++) b.line(vx[i][0], vx[i][1], bot[i][0], bot[i][1], { stroke: C.sub, sw: 1.2 })
  b.polygon(bot, { fill: 'none', stroke: C.sub, sw: 1.2 })
  b.polygon(vx, { fill: '#ccfbf1', fillOp: 0.5, stroke: C.dna, sw: 1.4 })
  for (let i = 0; i < 6; i++) { b.circle(vx[i][0], vx[i][1], 3.2, { fill: C.dna }); b.circle(bot[i][0], bot[i][1], 3.2, { fill: C.dna }) }
  b.ctext(cx, cy + H / 2 + 31, label, { size: 11, weight: 700, fill: C.sub })
}

const draw = (b: B) => {
  // ============ 一、七大晶系参数表 ============
  b.panel(30, 132, 660, 412, { title: '一、七大晶系：对称性对晶胞参数的强制定义' })
  b.table(60, 200, 600, {
    title: '七晶系对六参数的强制约束（点群数合计 32）',
    headers: ['晶系', '晶胞参数约束', '特征对称', '点群数'],
    colW: [70, 230, 200, 100],
    rowH: 38,
    fontSize: 12,
    rows: [
      ['立方', 'a=b=c，α=β=γ=90°', '4 条三次轴', '5'],
      ['六方', 'a=b，γ=120°', '1 条六次轴', '7'],
      ['三方', 'a=b=c，α=β=γ≠90°', '1 条三次轴', '5'],
      ['四方', 'a=b，其余 90°', '1 条四次轴', '7'],
      ['正交', 'a≠b≠c，三夹角 90°', '3 条二次轴或镜面', '3'],
      ['单斜', 'β≠90°，其余 90°', '1 条二次轴或镜面', '3'],
      ['三斜', '六参数全独立', '仅恒等与反演', '2'],
    ],
  })
  b.wtext(60, 522, '七行点群数 5+7+5+7+3+3+2 合计恰为 32，与第 1 章赫塞尔的枚举闭合；三方可按六方轴系描述，也可取菱方胞。「参数式样」只是必要条件，衍射强度的对称性（Laue 对称）才是最终裁决。', { size: 10.5, fill: C.sub, maxW: 600, lh: 14 })

  // ============ 二、十四种布拉维格子图阵 ============
  b.panel(710, 132, 660, 412, { title: '二、十四种布拉维格子（1850，布拉维完备枚举）' })
  b.wtext(730, 186, 'P＝简单；I＝体心；F＝面心（每胞等效 4 格点）；C＝底心（一对对面心）；R＝菱心（体对角三分之一处两个附加格点）。', { size: 10.5, fill: C.sub, maxW: 616, lh: 14 })
  const va42: [number, number] = [42, 0]
  const vb14: [number, number] = [14, 12]
  cell3d(b, 774, 212, va42, vb14, [0, -42], P8, '立方 P')
  cell3d(b, 902, 212, va42, vb14, [0, -42], PT_I, '立方 I')
  cell3d(b, 1030, 212, va42, vb14, [0, -42], PT_F, '立方 F')
  cell3d(b, 1158, 212, va42, vb14, [0, -54], P8, '四方 P')
  cell3d(b, 1286, 212, va42, vb14, [0, -54], PT_I, '四方 I')
  cell3d(b, 774, 302, [48, 0], [15, 12], [0, -36], P8, '正交 P')
  cell3d(b, 902, 302, [48, 0], [15, 12], [0, -36], PT_C, '正交 C')
  cell3d(b, 1030, 302, [48, 0], [15, 12], [0, -36], PT_I, '正交 I')
  cell3d(b, 1158, 302, [48, 0], [15, 12], [0, -36], PT_F, '正交 F')
  cell3d(b, 1286, 302, [46, 0], [15, 12], [-12, -38], P8, '单斜 P')
  cell3d(b, 774, 392, [46, 0], [15, 12], [-12, -38], PT_C, '单斜 C')
  cell3d(b, 902, 392, [46, 0], [11, 17], [-13, -38], P8, '三斜 P')
  hexCell(b, 1030, 392, '六方 P')
  cell3d(b, 1158, 392, [38, 0], [13, 14], [-13, -36], [...P8, [1 / 3, 1 / 3, 1 / 3], [2 / 3, 2 / 3, 2 / 3]], '三方 R')
  b.tag(1286, 392, '合计 14 种', { fill: C.dnaL, stroke: C.dna, size: 12, weight: 700, tfill: C.dnaD })
  b.wtext(730, 470, '合法加心方式与七大晶系的组合只有 14 种：立方 P/I/F、四方 P/I、正交 P/C/I/F、单斜 P/C、三斜 P、六方 P 与三方 R。曾被列举的「底心四方」经基矢变换仍是四方 P（心点成为新格点），故被约化；立方加 C 心与立方对称冲突，同样被排除。', { size: 10.5, fill: C.sub, maxW: 616, lh: 14 })

  // ============ 三、蛋白晶体空间群统计 ============
  b.panel(30, 558, 660, 412, { title: '三、蛋白质晶体的空间群统计（RCSB 数十万条目）' })
  b.bars(70, 850, 360, 270, [26, 15, 10, 49], {
    labels: ['P2_{1}2_{1}2_{1}', 'P2_{1}', 'C2', '其余全部'],
    vlabels: ['约四分之一强', '约一成半', '', '约半数'],
    fill: C.accL, stroke: C.acc, max: 56,
  })
  b.braceH(70, 896, 270, { label: 'P2_{1}2_{1}2_{1}＋P2_{1}＋C2 三者合计约覆盖一半' })
  b.wtext(460, 620, '其后依次为 P2_{1}2_{1}2 与 C2、若干立方群（P2_{1}3、I23 等）、四方 P4_{1}/P4_{3} 与 P4_{1}2_{1}2/P4_{3}2_{1}2、六方 P6_{1}/P6_{5}、三方 P3_{1}2_{1}/P3_{2}2_{1}。', { size: 10.5, fill: C.sub, maxW: 196, lh: 14 })
  b.wtext(460, 710, '正交与单斜晶系合计约占六成；立方虽少，却是精修与教学的宠儿（肌红蛋白、多种铁蛋白）。', { size: 10.5, fill: C.sub, maxW: 196, lh: 14 })
  b.wtext(460, 782, '手性分子只能以一般位置入格；低对称群一般位置多重数为 1，对堆积几何限制最少，概率自然最高。', { size: 10.5, fill: C.sub, maxW: 196, lh: 14 })
  b.wtext(70, 930, '少见群出现时更须警惕指标化假象，以多条证据交叉确认后再定论（第 6 章）。', { size: 10.5, fill: C.mute, maxW: 360, lh: 14 })

  // ============ 四、组合漏斗与晶胞选择惯例 ============
  b.panel(710, 558, 660, 412, { title: '四、从晶系到空间群的收紧漏斗与晶胞选择惯例' })
  const flow: Array<[string, string]> = [
    ['7 种晶系', '晶胞参数式样初判'],
    ['14 种布拉维格子', '加心方式与晶系组合'],
    ['32 种点群', '点对称的完备分类'],
    ['230 种空间群', '格子＋点群＋螺旋轴与滑移面'],
  ]
  flow.forEach(([t, s], i) => {
    const by = 616 + i * 60
    b.rect(740, by, 210, 44, { fill: i === 3 ? C.proL : C.accL, stroke: i === 3 ? C.pro : C.acc, sw: 1.6, rx: 7 })
    b.ctext(845, by + 19, t, { size: 13, weight: 700, fill: i === 3 ? C.proD : C.accD })
    b.ctext(845, by + 36, s, { size: 9.5, fill: C.mute })
    if (i < 3) b.arrow(845, by + 44, 845, by + 60, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  })
  b.ctext(1135, 622, '同一晶体、不同晶胞划分', { size: 11.5, weight: 700, fill: C.sub })
  const L0: [number, number] = [1010, 646]
  const lu: [number, number] = [34, 0], lv: [number, number] = [15, 22]
  for (let i = 0; i <= 5; i++) for (let j = 0; j <= 3; j++)
    b.circle(L0[0] + lu[0] * i + lv[0] * j, L0[1] + lu[1] * i + lv[1] * j, 3, { fill: C.mute })
  b.polygon([[L0[0], L0[1]], [L0[0] + 68, L0[1]], [L0[0] + 83, L0[1] + 22], [L0[0] + 15, L0[1] + 22]], { fill: 'none', stroke: C.enz, sw: 1.8, dash: '6 4' })
  b.polygon([[L0[0], L0[1]], [L0[0] + 64, L0[1] + 44], [L0[0] + 79, L0[1] + 44], [L0[0] + 15, L0[1] + 22]], { fill: 'none', stroke: C.warn, sw: 1.8, dash: '6 4' })
  b.polygon([[L0[0], L0[1]], [L0[0] + 34, L0[1]], [L0[0] + 49, L0[1] + 22], [L0[0] + 15, L0[1] + 22]], { fill: C.dnaL, fillOp: 0.75, stroke: C.dna, sw: 2.2 })
  b.text(1090, 752, '实线：Niggli 约化胞（三条最短基矢，唯一）', { size: 10.5, weight: 700, fill: C.dnaD })
  b.text(1090, 772, '虚线：同一点阵的其他合法划分', { size: 10.5, weight: 700, fill: C.enzD })
  b.wtext(730, 862, 'Niggli 约化胞按三条最短基矢唯一确定最小胞；惯用原点与轴约定（国际表 A 卷）使同群晶体的参数可直接比较。数据处理软件内部先做约化、再换算到惯用设置输出——两条参数记录对不上时，先查轴变换与设置差异；胰岛素晶胞的多次「改名」正是这类换算的经典案例。', { size: 10.5, fill: C.sub, maxW: 616, lh: 14.5 })
  b.tag(1040, 944, '「标准」晶胞参数是约定的产物而非天然', { fill: C.warnL, stroke: C.warn, size: 11.5, weight: 700, tfill: C.warnD, pad: 11 })
}

export default scene({
  title: '七大晶系与十四种布拉维格子',
  subtitle: '七晶系点群数 5+7+5+7+3+3+2＝32；P/I/F/C/R 加心与晶系组合共 14 种布拉维格子；蛋白晶体集中于 P2_{1}2_{1}2_{1}（约四分之一强）、P2_{1} 与 C2（合计约半数）；Niggli 约化胞统一晶胞选择',
  draw,
})
