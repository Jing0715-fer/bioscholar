// sb ch10-s2 颗粒挑选与二维分类（Task 6-sb）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、挑选方法谱系 ============
  b.panel(30, 132, 660, 280, { title: '一、颗粒挑选：三种眼力' })
  const picks = [
    ['模板相关', '参考投影互相关；快但易参考偏差', C.warn],
    ['LoG 差分高斯', '免参考、按尺寸先验找斑；稳健通用', C.ok],
    ['深度学习', 'Topaz/cryolo/cryoSPARC；众包训练集', C.acc],
  ]
  let py = 175
  for (const [t, s, c] of picks) {
    b.tag(120, py, t, { fill: `${c}22`, stroke: c, size: 11.5, weight: 700, tfill: C.ink, pad: 9 })
    b.text(230, py + 4, s, { size: 10.5, fill: C.sub })
    py += 46
  }
  b.wtext(60, 330, '框尺寸取颗粒直径的 1.2–1.5 倍；挑选后人工复查：中心偏移、双粒、聚集、冰污染剔除。一张微图典型 50–300 颗粒，一套数据 10^{5}–10^{6} 颗粒。', { size: 10.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 二、2D 分类原理 ============
  b.panel(710, 132, 660, 280, { title: '二、二维分类：类平均与 √N 法则' })
  b.wtext(730, 170, '把颗粒按取向聚类、类内对齐平均——信噪比随颗粒数 N 的平方根提升。贝叶斯最大似然框架（Scheres 2012 年）把取向与类别当隐变量边缘化。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  // √N 曲线
  const bx = 760, by = 380, bw = 560
  b.line(bx, by, bx + bw, by, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.line(bx, by, bx, by - 160, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.path(`M ${bx},${by} Q ${bx + 160},${by - 130} ${bx + bw},${by - 150}`, { fill: 'none', stroke: C.ok, sw: 2.6 })
  for (const [v, lx] of [[1, 0], [100, 0.45], [10000, 0.92]] as Array<[number, number]>) {
    const px = bx + lx * bw
    b.line(px, by, px, by - 6, { stroke: C.sub, sw: 1.6 })
    b.ctext(px, by + 18, `N=${v}`, { size: 9.5, fill: C.mute })
    const pyy = by - Math.sqrt(v) * (150 / 100)
    b.circle(px, Math.max(pyy, by - 150), 3.5, { fill: C.ok, stroke: 'none' })
  }
  b.ctext(bx + bw / 2, by + 40, '类内颗粒数 N（对数趋势）', { size: 10.5, fill: C.sub })
  b.ctext(bx + bw + 34, by - 80, 'SNR ∝ √N', { size: 11, weight: 700, fill: C.okD })
  b.wtext(730, 396, '类数选 50–200 起步；「好类」标准：α 螺旋约 10 Å 纹理可辨、类内一致、视角多样。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、好类与垃圾类判读 ============
  b.panel(30, 432, 660, 300, { title: '三、2D 类别判读：一眼分好坏' })
  // 好类（三个小圆带螺旋纹）
  b.tag(140, 470, '好类', { fill: C.okL, stroke: C.ok, size: 11.5, weight: 700, tfill: C.okD, pad: 9 })
  for (let i = 0; i < 3; i++) {
    const cx = 110 + i * 90
    b.circle(cx, 545, 32, { fill: C.okL, stroke: C.ok, sw: 1.8, fillOpacity: 0.5 })
    b.line(cx - 22, 545, cx + 22, 545, { stroke: C.okD, sw: 2.4 })
    b.line(cx - 20, 535, cx + 20, 535, { stroke: C.okD, sw: 1.2 })
    b.line(cx - 20, 555, cx + 20, 555, { stroke: C.okD, sw: 1.2 })
  }
  b.wtext(60, 600, '内部结构可辨、视角互补——保留进 3D；α 螺旋约 10 Å 条纹是分辨率合格的第一信号。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  // 垃圾类
  b.tag(140, 645, '垃圾类', { fill: C.badL, stroke: C.bad, size: 11.5, weight: 700, tfill: C.badD, pad: 9 })
  for (let i = 0; i < 3; i++) {
    const cx = 110 + i * 90
    b.circle(cx, 700, 30, { fill: C.badL, stroke: C.bad, sw: 1.6, fillOpacity: 0.4 })
    if (i === 0) { b.circle(cx - 8, 694, 7, { fill: C.bad, stroke: 'none' }); b.circle(cx + 10, 706, 9, { fill: C.bad, stroke: 'none' }) }
    if (i === 1) b.rect(cx - 18, 690, 36, 18, { fill: 'none', stroke: C.bad, sw: 1.4, rotate: 20 })
    if (i === 2) { b.line(cx - 16, 688, cx + 16, 712, { stroke: C.bad, sw: 1.6 }); b.line(cx - 16, 712, cx + 16, 688, { stroke: C.bad, sw: 1.6 }) }
  }
  b.wtext(340, 660, '左：空框/碎屑；中：聚集物；右：冰污染——一律剔除。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.wtext(340, 700, '全部类别视角单一：警惕优势取向（AWI，第 9 章第 4 节）——需干预制样而非硬算。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })

  // ============ 四、参考偏差警示 ============
  b.panel(710, 432, 660, 300, { title: '四、参考偏差：噪声里的幽灵' })
  b.wtext(730, 470, '用原子模型投影做 2D 参考可能「诱导」出模型假象——Dotson 与 Glaeser 2016 年的论战让全社区警醒：随机参考或 LoG 起步、多参考并行、垃圾类不硬救，是三条防线。', { size: 10.5, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 540, '2D 阶段还有诊断价值：构象异质性初判（类别形态连续变化提示多构象）、对称性初判（正面观的角度对称）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 16 })
  b.ctext(1040, 700, '2D 是数据质量的镜子——见第 10 章第 3 节的 3D 分类与精修', { size: 11, weight: 600, fill: C.mute })

  // 底部收束
  b.ctext(700, 772, '挑选给足数量、分类给足质量——三维重构的成功在这两步就已成了一半', { size: 11.5, weight: 600, fill: C.mute })
}

export default scene({
  title: '颗粒挑选与二维分类：三种眼力与 √N 法则',
  subtitle: 'LoG/深度学习挑选（框径 1.2–1.5 倍）；类平均 SNR ∝ √N（Scheres 2012 贝叶斯）；好类判读 α 螺旋约 10 Å；垃圾类剔除；参考偏差三防线（Dotson-Glaeser 2016）',
  draw,
})
