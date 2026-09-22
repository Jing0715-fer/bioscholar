// xc ch2-s3 对称操作与 230 种空间群（6-xc）
import { scene, C, B } from '../../lib'

/** 不对称三角旗 motif：kind r=原样，l=旋转 180°，m=竖直镜像（滑移面用） */
const motif = (b: B, x: number, y: number, kind: 'r' | 'l' | 'm', stroke: string, fill: string) => {
  const base: [number, number][] = [[-11, -10], [11, -2], [-5, 8]]
  const pts = kind === 'r' ? base : kind === 'l' ? base.map(p => [-p[0], -p[1]] as [number, number]) : base.map(p => [p[0], -p[1]] as [number, number])
  b.polygon(pts.map(p => [x + p[0], y + p[1]]), { fill, stroke, sw: 1.8 })
  const dot: [number, number] = kind === 'r' ? [6, -5] : kind === 'l' ? [-6, 5] : [6, 5]
  b.circle(x + dot[0], y + dot[1], 2.6, { fill: stroke })
}

const draw = (b: B) => {
  // ============ 一、三类对称操作图解 ============
  b.panel(30, 132, 660, 400, { title: '一、螺旋轴、滑移面与记号解读' })
  // 2₁ 螺旋轴（左右交替 + 升半周期）
  b.line(180, 190, 180, 430, { stroke: C.sub, sw: 2, dash: '7 5' })
  b.tag(180, 182, '2_{1}', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 7 })
  motif(b, 214, 235, 'r', C.accD, C.accL)
  motif(b, 146, 305, 'l', C.accD, C.accL)
  motif(b, 214, 375, 'r', C.accD, C.accL)
  b.line(120, 235, 136, 235, { stroke: C.mute, sw: 1.4 })
  b.line(120, 305, 136, 305, { stroke: C.mute, sw: 1.4 })
  b.line(120, 375, 136, 375, { stroke: C.mute, sw: 1.4 })
  b.etext(116, 239, '0', { size: 10, fill: C.mute })
  b.etext(116, 309, 'c/2', { size: 10, fill: C.mute })
  b.etext(116, 379, 'c', { size: 10, fill: C.mute })
  b.wtext(80, 428, '旋转 180°＋沿轴平移 c/2：投影上左右交替', { size: 10, fill: C.sub, maxW: 176, lh: 14 })
  // 纯 2 次旋转轴（同高度成对）
  b.line(360, 190, 360, 430, { stroke: C.sub, sw: 2 })
  b.tag(360, 182, '2', { fill: C.dnaL, stroke: C.dna, size: 12, weight: 700, tfill: C.dnaD, pad: 7 })
  motif(b, 394, 270, 'r', C.dnaD, C.dnaL)
  motif(b, 326, 270, 'l', C.dnaD, C.dnaL)
  motif(b, 394, 360, 'r', C.dnaD, C.dnaL)
  motif(b, 326, 360, 'l', C.dnaD, C.dnaL)
  b.wtext(280, 428, '纯旋转 2 次：同高度左右成对，不沿轴平移', { size: 10, fill: C.sub, maxW: 176, lh: 14 })
  // 滑移面 a（反映＋平移 a/2）
  b.line(470, 300, 650, 300, { stroke: C.sub, sw: 2, dash: '9 5' })
  b.tag(462, 282, 'a', { fill: C.enzL, stroke: C.enz, size: 12, weight: 700, tfill: C.enzD, pad: 7 })
  motif(b, 500, 255, 'r', C.enzD, C.enzL)
  motif(b, 556, 345, 'm', C.enzD, C.enzL)
  motif(b, 612, 255, 'r', C.enzD, C.enzL)
  b.line(500, 268, 556, 332, { stroke: C.faint, sw: 1.2, dash: '3 3' })
  b.arrow(556, 322, 612, 262, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.ctext(558, 375, '反映＋沿面内平移 a/2', { size: 10, fill: C.sub })
  b.wtext(60, 466, '读记号：P2_{1}2_{1}2_{1}＝简单格子＋沿 a、b、c 各一根 2_{1} 螺旋轴（三轴垂直）；P2_{1} 仅沿 b 有 2_{1}；C222_{1}＝C 心格子加 2、2、2_{1}；P4_{1}2_{1}2＝沿 c 的 4_{1} 加 a、b 的 2_{1} 与 2。n_{m} 读作「旋转 2π/n 后沿轴平移 m/n 周期」：3_{1} 转 120° 移 1/3，4_{1} 转 90° 移 1/4，6_{1} 转 60° 移 1/6；3_{1} 与 3_{2}、4_{1} 与 4_{3} 互为镜像操作，恰与生物分子手性呼应。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15.5 })

  // ============ 二、限制定理与 65/230 ============
  b.panel(710, 132, 660, 400, { title: '二、晶体学限制定理与 65/230：手性的宿命' })
  const rosette = (cx: number, cy: number, n: number, ok: boolean) => {
    const c = ok ? C.dna : C.bad
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2 - Math.PI / 2
      const px = cx + 16 * Math.cos(a)
      const py = cy + 16 * Math.sin(a)
      b.polygon([[cx, cy], [px, py], [cx + 16 * Math.cos(a + Math.PI / n), cy + 16 * Math.sin(a + Math.PI / n)]], { fill: ok ? C.dnaL : C.badL, stroke: c, sw: 1.4 })
    }
    b.circle(cx, cy, 3, { fill: c })
    b.ctext(cx, cy + 34, `${n} 次`, { size: 10.5, weight: 700, fill: c })
    b.ctext(cx, cy + 50, ok ? '✓' : '✗', { size: 13, weight: 700, fill: c })
  }
  const xs = [760, 880, 1000, 1120, 1250]
  rosette(xs[0], 215, 2, true)
  rosette(xs[1], 215, 3, true)
  rosette(xs[2], 215, 4, true)
  rosette(xs[3], 215, 6, true)
  rosette(xs[4], 215, 5, false)
  b.wtext(730, 296, '晶体学限制定理：与平移周期相容的旋转轴仅 1、2、3、4、6 次——五次轴无法与任何二维点阵相容。准晶体（Shechtman 1982 年发现、2011 年诺贝尔化学奖）以五次、十次对称震动学界：有长程序却无平移周期，是「晶体」定义被改写的著名例外。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.stairs(730, 424, 330, 78, ['7 晶系', '14 布拉维格子', '32 点群', '230 空间群'], { fill: C.panelB, stroke: C.line, size: 11 })
  b.rect(1080, 388, 268, 120, { fill: C.dnaL, fillOp: 0.55, stroke: C.dna, sw: 1.8, rx: 10 })
  b.ctext(1214, 412, '65 个 Sohncke 群', { size: 14, weight: 700, fill: C.dnaD })
  b.wtext(1096, 436, '仅含纯旋转、螺旋轴与平移——L-氨基酸与 D-核糖构成的手性分子只能栖身其中（1879 年索恩克枚举）；镜面、滑移面、反演被禁止。', { size: 10, fill: C.dnaD, maxW: 236, lh: 14 })
  b.tag(1214, 526, '忽略反常散射：衍射点对称归并为 11 个 Laue 群', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.mute, pad: 8 })

  // ============ 三、系统消光规律表 ============
  b.panel(30, 552, 1340, 410, { title: '三、系统消光：空间群判定的第一实验依据' })
  b.table(60, 618, 1300, {
    headers: ['空间群', '特征对称元素', 'Sohncke 手性群', '代表性系统消光'],
    colW: [150, 330, 210, 610],
    rowH: 34,
    fontSize: 12.5,
    rows: [
      ['P2_{1}', '沿 b 的 2_{1} 螺旋轴', '是', '0k0 仅 k 为偶（奇数消光）'],
      ['P2_{1}2_{1}2_{1}', '三根互相垂直的 2_{1}', '是', 'h00、0k0、00l 仅偶'],
      ['C222_{1}', 'C 心加对称轴组合', '是', 'h+k 为奇数全消'],
      ['P6_{1}', '沿 c 的 6_{1} 螺旋轴', '是', '00l 仅 l 为 6 的倍数'],
      ['P2_{1}/c（对照）', '2_{1} 加 c 滑移面', '否（含滑移与反演）', '0k0 仅偶；h0l 仅 l 偶'],
    ],
  })
  b.wtext(60, 856, '消光机理一句话：分数平移使相邻等效位置对某指标的散射波相位差恰为 π 的奇数倍，求和归零——理解它即可对任意记号自行推出大部分消光条件。消光只能缩小候选范围：P4_{1} 与 P4_{3} 消光模式部分相同，最终判定靠强度统计甚至解析后回验。', { size: 10.5, fill: C.sub, maxW: 630, lh: 15.5 })
  b.wtext(730, 856, '蛋白晶体空间群高度集中：P2_{1}2_{1}2_{1} 约占四分之一强、P2_{1} 约一成半、C2 次之，三者合计约半数——手性分子只能以一般位置入格，低对称群一般位置多重数为 1，堆积限制最少。小分子最常见的 P2_{1}/c 含滑移与反演，蛋白晶体学家终其一生几乎不会遇到。', { size: 10.5, fill: C.sub, maxW: 630, lh: 15.5 })
}

export default scene({
  title: '对称操作、Sohncke 群与系统消光',
  subtitle: '螺旋轴 2_{1}＝旋转 180°＋平移半周期；滑移面＝反映＋分数平移；65 个 Sohncke 手性群⊂230 空间群；P2_{1} 使 0k0 奇数消光、P2_{1}2_{1}2_{1} 三轴仅偶、C 心 h+k 奇全消',
  draw,
})
