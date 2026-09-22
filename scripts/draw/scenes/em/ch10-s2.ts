// em ch10-s2 二维晶体电子晶体学（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、二维结晶三路 ============
  b.panel(30, 132, 660, 412, { title: '一、二维结晶：把膜蛋白排进阵列' })
  // 透析重组
  b.rect(60, 190, 180, 140, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  b.rect(78, 214, 124, 84, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.8, rx: 6 })
  b.text(140, 240, '透析袋（截留 8–14 kDa）', { size: 9, weight: 700, fill: C.dnaD, anchor: 'middle' })
  for (let i = 0; i < 6; i++) b.circle(92 + i * 20, 276, 5, { fill: C.dna, fillOp: 0.7 })
  b.ctext(150, 316, '袋外缓冲液缓慢耗竭去垢剂', { size: 9, fill: C.mute })
  b.ctext(150, 346, '去垢剂透析重组', { size: 11, weight: 700, fill: C.dnaD })
  b.ctext(150, 362, '数天到数周', { size: 9.5, fill: C.mute })
  // 亲和重组
  b.rect(270, 190, 180, 140, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  for (let i = 0; i < 5; i++) {
    b.line(288 + i * 34, 240, 288 + i * 34, 300, { stroke: C.rna, sw: 3 })
    b.circle(288 + i * 34, 258, 6.5, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  }
  b.ctext(360, 316, '镍螯合脂配 His、抗体脂配 FLAG', { size: 9, fill: C.mute })
  b.ctext(360, 346, '亲和重组', { size: 11, weight: 700, fill: C.rnaD })
  b.ctext(360, 362, '标签定向排列', { size: 9.5, fill: C.mute })
  // 脂单层
  b.rect(480, 190, 170, 140, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  b.line(498, 270, 632, 270, { stroke: C.acc, sw: 4 })
  for (let i = 0; i < 6; i++) {
    b.circle(506 + i * 24, 258, 7, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  }
  b.ctext(565, 316, '气液界面脂单层成核', { size: 9, fill: C.mute })
  b.ctext(565, 346, '脂单层结晶', { size: 11, weight: 700, fill: C.accD })
  b.ctext(565, 362, '二维组装快', { size: 9.5, fill: C.mute })
  b.tag(280, 470, '紫膜：六角 p3、a 约 62 Å', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 9 })
  b.tag(560, 470, 'AQP1：正方晶格、边长约 9.6 nm、每格一个四聚体', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 9 })

  // ============ 二、振幅与相位分账 ============
  b.panel(710, 132, 660, 412, { title: '二、数据采集分账：衍射收振幅、图像收相位' })
  // 衍射图
  b.rect(740, 190, 170, 150, { fill: '#0f172a', fillOp: 0.06, stroke: C.sub, sw: 1.8 })
  b.ctext(825, 208, '电子衍射图', { size: 10.5, weight: 700, fill: C.sub })
  for (let i = -2; i <= 2; i++) for (let j = -1; j <= 1; j++) {
    if (Math.abs(i) + Math.abs(j) > 2) continue
    const r = 9 - (Math.abs(i) + Math.abs(j)) * 2
    b.circle(825 + i * 30, 268 + j * 30, r, { fill: C.acc })
    b.circle(825 + i * 30, 268 + j * 30, r + 3.5, { fill: 'none', stroke: C.acc, sw: 1, opacity: 0.4 })
  }
  b.ctext(825, 352, '强度正比 |F|^{2}', { size: 10, weight: 700, fill: C.accD })
  b.ctext(825, 368, '单图剂量可低于 1 e^{-}/Å^{2}', { size: 9.5, fill: C.mute })
  // 图像
  b.rect(940, 190, 170, 150, { fill: '#f8fafc', stroke: C.sub, sw: 1.8 })
  b.ctext(1025, 208, '高分辨图像', { size: 10.5, weight: 700, fill: C.sub })
  for (let i = -2; i <= 2; i++) for (let j = -1; j <= 1; j++) {
    b.rect(1025 + i * 30 - 4, 268 + j * 30 - 4, 8, 8, { fill: 'none', stroke: C.dna, sw: 1.4, dash: '3 2' })
  }
  b.ctext(1025, 352, '透镜传播相位', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(1025, 368, '晶格条纹携带相位信息', { size: 9.5, fill: C.mute })
  b.arrow(915, 268, 935, 268, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(1115, 268, 1150, 268, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(1155, 226, 130, 84, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  b.ctext(1220, 258, '振幅 + 相位', { size: 11, weight: 700, fill: C.proD })
  b.ctext(1220, 280, '绕开同晶置换', { size: 9.5, fill: C.sub })
  b.ctext(1220, 296, '与分子置换', { size: 9.5, fill: C.sub })
  b.wtext(740, 404, '分账纪律：衍射强度给振幅（剂量账宽松），图像给相位（透镜的物理馈赠）——相位问题被成像几何直接绕开，这是电子晶体学相对 X 射线晶体学的根本红利。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.ctext(1040, 470, '紫膜天然晶格与重组晶格共用同一套分账', { size: 10, fill: C.mute })

  // ============ 三、unbending ============
  b.panel(30, 572, 660, 398, { title: '三、unbending：把弯晶掰直' })
  // 弯晶
  const wavy: [number, number][] = []
  for (let i = 0; i < 7; i++) for (let j = 0; j < 5; j++) {
    const wx = 66 + i * 34 + Math.sin(j * 1.1 + i * 0.5) * 9
    const wy = 628 + j * 30
    wavy.push([wx, wy])
  }
  wavy.forEach(([wx, wy]) => b.circle(wx, wy, 4.5, { fill: C.mute }))
  b.ctext(170, 800, '弯晶：点阵畸变抹宽衍射点', { size: 10, weight: 700, fill: C.sub })
  b.arrow(330, 700, 380, 700, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  // 直晶
  for (let i = 0; i < 7; i++) for (let j = 0; j < 5; j++) {
    b.circle(396 + i * 34, 628 + j * 30, 4.5, { fill: C.ok })
  }
  b.ctext(500, 800, '掰直后：衍射点锐利、信噪提升', { size: 10, weight: 700, fill: C.okD })
  const steps = ['傅里叶变换识点阵', '点阵滤波互相关解位移场', '二次插值重采样', '迭代收敛']
  steps.forEach((s, i) => {
    b.tag(150 + i * 160, 848, `${i + 1} ${s}`, { fill: C.panelB, stroke: C.line, size: 9.5, weight: 600, tfill: C.sub, pad: 8 })
  })
  b.tag(300, 906, '信息界限从约 3.5–4 Å 推进到 3 Å 以内', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })
  b.ctext(360, 950, '晶格缺陷与漂移是二维晶体的常态，unbending 是流水线的必经站', { size: 9.5, fill: C.mute })

  // ============ 四、lattice lines 与三维重构 ============
  b.panel(710, 572, 660, 398, { title: '四、lattice lines：倾角采样与各向异性' })
  // 倒易空间示意
  b.line(740, 820, 900, 820, { stroke: C.sub, sw: 2.6, marker: 'ink' })
  b.ctext(820, 846, 'z^{*}', { size: 11, weight: 700, fill: C.sub })
  ;[-1, 0, 1].forEach(k => {
    b.circle(790 + k * 40, 820, 4, { fill: C.acc })
    b.line(790 + k * 40, 820, 790 + k * 40, 680, { stroke: C.acc, sw: 1.8, dash: '5 4' })
  })
  // 倾角切点（沿 lattice lines 的采样弧）
  const arcs: [number, number][] = []
  for (let i = 0; i <= 30; i++) {
    const a = -0.9 + (i / 30) * 1.8
    arcs.push([830 - 70 * Math.sin(a), 820 - 70 * Math.cos(a)])
  }
  b.polyline(arcs, { stroke: C.enz, sw: 2.2 })
  b.ctext(920, 760, '倾角 θ 处切点：z^{*} = g·sin θ', { size: 10, weight: 700, fill: C.enzD })
  b.wtext(940, 800, 'lattice line 沿 z^{*} 连续；倾角步长乘 g·cos θ 即沿线采样间隔——以 3 Å 目标（g 约 0.33 Å^{-1}）与含脂双层约 6 nm 厚度核算，步长约 3–5 度才能满足 1/t 采样密度。', { size: 10, fill: C.sub, maxW: 380, lh: 14 })
  b.wtext(740, 620, '垂直方向信息只来自高倾角投影，分辨率被最大倾角系统性压一档：紫膜以 60 度内倾角得三向 3.5 Å；AQP1 得 2.2 Å 面内、3.8 Å 垂直（Murata 等 2000 年，Nature）；AQP0 二维晶体直接可视化脂质（Gonen 等 2005 年前后）。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })
  b.tag(900, 930, '面内与垂直分辨率各记各的账', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 9 })
  b.ctext(1150, 880, '「沙漏」构型与 ar/R 选滤器', { size: 9, fill: C.mute })
  b.ctext(1150, 896, '由此定案（AQP1 案例）', { size: 9, fill: C.mute })
}

export default scene({
  title: '二维晶体电子晶体学：分账、unbending 与 lattice lines',
  subtitle: '透析（截留 8–14 kDa）、亲和与脂单层三路结晶；衍射收振幅（单图低于 1 e⁻/Å²）、图像收相位；unbending 四步把信息界限推进 3 Å 以内；倾角步长约 3–5 度保 1/t 采样，AQP1 得 2.2 Å 面内、3.8 Å 垂直',
  draw,
})
