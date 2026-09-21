// bp ch9-s1 光学成像的分辨率极限（39-e 收尾）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、艾里斑与两点分辨 ============
  b.panel(30, 132, 1340, 430, { title: '一、点扩散函数（艾里斑）：成像分辨的基本单元' })

  // 左：PSF 强度分布
  b.text(70, 195, '点源经有限孔径透镜成像为艾里斑——其强度分布即 PSF', { size: 11, weight: 700, fill: C.ink })
  b.axis(100, 470, 540, 260, {
    ylabel: '强度',
    xlabel: '径向位置（以艾里斑半径 r 为单位）',
    yticks: [[0, '0'], [1, 'Imax']],
    xticks: [[0.36, '−r'], [0.5, '0'], [0.64, '+r']],
  })
  b.curve(100, 470, 540, 260, [
    [0, 0.001], [0.06, 0.002], [0.11, 0.003], [0.14, 0.005], [0.165, 0],
    [0.18, 0.012], [0.2, 0.018], [0.22, 0.012], [0.24, 0],
    [0.27, 0.022], [0.31, 0.05], [0.345, 0.02], [0.36, 0],
    [0.385, 0.12], [0.4, 0.35], [0.415, 0.65], [0.43, 0.88], [0.46, 0.99], [0.485, 1], [0.5, 1],
    [0.515, 1], [0.54, 0.99], [0.57, 0.88], [0.585, 0.65], [0.6, 0.35], [0.615, 0.12],
    [0.64, 0], [0.655, 0.02], [0.69, 0.05], [0.73, 0.022], [0.76, 0],
    [0.78, 0.012], [0.8, 0.018], [0.82, 0.012], [0.835, 0],
    [0.86, 0.005], [0.89, 0.003], [0.94, 0.002], [1, 0.001],
  ], { stroke: C.acc, sw: 2.8, smooth: true })
  b.line(294.4, 210, 294.4, 470, { stroke: C.faint, sw: 1.2, dash: '5 4' })
  b.line(445.6, 210, 445.6, 470, { stroke: C.faint, sw: 1.2, dash: '5 4' })
  b.ctext(294.4, 224, '第一暗环', { size: 9, fill: C.mute })
  b.ctext(445.6, 224, '第一暗环', { size: 9, fill: C.mute })
  b.arrow(372, 340, 441, 340, { stroke: C.mute, sw: 1.6, marker: 'mute', dash: '4 3' })
  b.ctext(406, 326, '半径 r', { size: 9.5, weight: 700, fill: C.sub })
  b.text(140, 440, '旁瓣（强度约 2%）', { size: 9, fill: C.mute })
  b.line(185, 448, 225, 458, { stroke: C.mute, sw: 1.2 })

  // 右：两点分辨
  b.rect(710, 185, 640, 355, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(726, 213, '两点像的分辨：Rayleigh 判据', { size: 13, weight: 700, fill: C.ink })
  b.rect(726, 235, 300, 165, { fill: C.bg, stroke: C.line, sw: 1.2, rx: 8 })
  b.circle(820, 320, 30, { fill: C.acc, fillOp: 0.35, stroke: C.acc, sw: 1.5 })
  b.circle(930, 320, 30, { fill: C.acc, fillOp: 0.35, stroke: C.acc, sw: 1.5 })
  b.ctext(876, 258, '间距 > r', { size: 10.5, weight: 700, fill: C.okD })
  b.tag(876, 392, '✓ 可分辨', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.okD, pad: 9 })
  b.rect(1050, 235, 285, 165, { fill: C.bg, stroke: C.line, sw: 1.2, rx: 8 })
  b.circle(1120, 320, 34, { fill: C.acc, fillOp: 0.35, stroke: C.acc, sw: 1.5 })
  b.circle(1176, 320, 34, { fill: C.acc, fillOp: 0.35, stroke: C.acc, sw: 1.5 })
  b.circle(1148, 320, 28, { fill: C.acc, fillOp: 0.4 })
  b.ctext(1148, 258, '间距 < r：合而为一', { size: 10.5, weight: 700, fill: C.badD })
  b.tag(1148, 392, '✗ 不可分辨', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: C.bad, pad: 9 })
  b.wtext(726, 428, '两点距离小于艾里斑半径（第一暗环）时不可分辨；OTF 给出空间频率通带——超过截止频率 2NA/λ 的信息完全丢失。', { size: 10, fill: C.sub, maxW: 600, lh: 14 })

  // ============ 二、Abbe 判据 ============
  b.panel(30, 592, 660, 388, { title: '二、Abbe 判据（1873）：d = λ/(2NA)' })
  b.tag(350, 636, 'd = λ / (2NA)，NA = n·sinθ', { fill: C.dnaL, stroke: C.dna, size: 13.5, weight: 700, tfill: C.dnaD, pad: 12 })
  b.text(90, 668, 'n：介质折射率；θ：孔径半角', { size: 10, fill: C.sub })
  b.legend(150, 688, [['λ=400 nm（紫）', C.pro], ['λ=550 nm（绿）', C.ok], ['λ=700 nm（红）', C.bad]], { size: 9.5, gap: 16 })
  b.axis(110, 925, 520, 230, {
    ylabel: 'd (nm)',
    xlabel: '数值孔径 NA = n·sinθ',
    yticks: [[0, '0'], [0.333, '500'], [0.667, '1000'], [1, '1500']],
    xticks: [[0.107, '0.25'], [0.357, '0.6'], [0.643, '1.0'], [0.929, '1.4']],
  })
  const abbe = (lam: number): Array<[number, number]> => {
    const pts: Array<[number, number]> = []
    for (let i = 0; i <= 40; i++) {
      const na = 0.25 + (i / 40) * 1.15
      pts.push([(na - 0.1) / 1.4, lam / (2 * na) / 1500])
    }
    return pts
  }
  b.curve(110, 925, 520, 230, abbe(400), { stroke: C.pro, sw: 2.6 })
  b.curve(110, 925, 520, 230, abbe(550), { stroke: C.ok, sw: 2.8 })
  b.curve(110, 925, 520, 230, abbe(700), { stroke: C.bad, sw: 2.6 })
  b.line(593, 895, 593, 695, { stroke: C.faint, sw: 1.2, dash: '5 4' })
  b.line(110, 895, 593, 895, { stroke: C.faint, sw: 1.2, dash: '5 4' })
  b.circle(593, 895, 5, { fill: C.okD })
  b.tag(400, 916, '油浸 NA=1.4、λ≈550 nm → d ≈ 200 nm', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.okD, pad: 9 })

  // ============ 三、200 nm 以下的世界 ============
  b.panel(710, 592, 660, 388, { title: '三、200 nm 以下的世界与两条突破思路' })
  b.text(730, 634, '200 nm 以内拥挤着最精彩的分子世界——衍射极限把它们挡在光学显微镜之外；', { size: 10.5, weight: 700, fill: C.ink })
  b.text(730, 658, '电镜分辨率虽达 Å 级，但要求真空、固定与重金属染色，难以观察活细胞。', { size: 10, fill: C.sub })
  b.text(730, 682, '分辨率 ≠ 放大率：放大率只是把艾里斑投得更大——「空放大」不增加任何信息。', { size: 10, fill: C.sub })
  b.axis(760, 905, 540, 135, {
    xlabel: '尺度（nm，对数刻度）',
    xticks: [[0, '1'], [0.333, '10'], [0.667, '100'], [1, '1000']],
    yticks: [],
  })
  // 蛋白复合物区间带
  b.rect(886, 790, 180, 105, { fill: C.dnaL, fillOp: 0.55, stroke: C.dna, sw: 1.2 })
  b.line(976, 758, 976, 788, { stroke: C.mute, sw: 1.2 })
  b.ctext(976, 752, '蛋白复合物 5–50 nm', { size: 9.5, weight: 700, fill: C.dnaD })
  // 核糖体 / 微管
  b.line(1011, 770, 1011, 905, { stroke: C.acc, sw: 2 })
  b.ctext(1011, 728, '核糖体 ~25 nm', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(1011, 704, '微管直径 25 nm', { size: 9.5, weight: 700, fill: C.accD })
  b.line(1011, 734, 1011, 768, { stroke: C.mute, sw: 1.2 })
  // 病毒
  b.line(1120, 770, 1120, 905, { stroke: C.warn, sw: 2 })
  b.ctext(1130, 704, '病毒 ~100 nm', { size: 9.5, weight: 700, fill: C.warn })
  b.line(1120, 710, 1120, 768, { stroke: C.mute, sw: 1.2 })
  // 衍射极限红线
  b.line(1174, 770, 1174, 905, { stroke: C.bad, sw: 2, dash: '7 4' })
  b.ctext(1174, 752, '衍射极限 200 nm', { size: 10, weight: 700, fill: C.bad })
  b.line(1174, 758, 1174, 768, { stroke: C.mute, sw: 1.2 })
  b.tag(870, 968, '① 时间上分开：相邻分子不同时发光', { fill: C.rnaL, stroke: C.rna, size: 9.5, weight: 700, tfill: C.rnaD, pad: 8 })
  b.tag(1160, 968, '② 非线性压缩：只让中心发光', { fill: C.proL, stroke: C.pro, size: 9.5, weight: 700, tfill: C.proD, pad: 8 })
}

export default scene({
  title: '光学成像的分辨率极限：艾里斑、Abbe 判据与 200 nm 以下的世界',
  subtitle: 'd = λ/(2NA)：可见光 λ≈550 nm + 油浸 NA=1.4 → d≈200 nm；两点距离小于艾里斑半径（第一暗环）不可分辨；突破思路＝时间上分开或非线性压缩 → 2014 年诺贝尔化学奖「看见不可见」',
  draw,
})
