// em ch9-s3 断层图的分析与分割（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、断层图的各向异性 ============
  b.panel(30, 132, 660, 412, { title: '一、断层图的物理特性：先认「拉长的地图」' })
  // 坐标示意：xy 清晰、z 拖影
  b.text(60, 186, '横切面上约 5 nm 的膜，在 z 向被拖成 8–10 nm 的「泡影」', { size: 11, weight: 700, fill: C.ink })
  // xy 面：细膜
  b.rect(60, 206, 180, 130, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  b.path('M 80,290 L 220,290', { stroke: C.dna, sw: 3 })
  b.ctext(150, 258, 'xy 剖面', { size: 9.5, fill: C.mute })
  b.ctext(150, 316, '膜约 5 nm', { size: 9.5, fill: C.dnaD })
  // xz 面：泡影
  b.rect(270, 206, 180, 130, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  b.ellipse(360, 271, 24, 9, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ctext(360, 240, 'xz 剖面', { size: 9.5, fill: C.mute })
  b.ctext(360, 316, 'z 向拖成 8–10 nm', { size: 9.5, fill: C.dnaD })
  b.arrow(248, 271, 262, 271, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  // 囊泡变椭球
  b.circle(530, 258, 34, { fill: 'none', stroke: C.faint, sw: 1.6, dash: '5 4' })
  b.ellipse(530, 258, 26, 40, { fill: C.proL, fillOp: 0.5, stroke: C.pro, sw: 2 })
  b.arrow(530, 300, 530, 316, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.text(540, 330, 'z', { size: 10, weight: 700, fill: C.sub })
  b.ctext(530, 362, '囊泡拉成竖直长轴椭球', { size: 9.5, fill: C.proD })
  b.tag(230, 396, 'z 向分辨率常比 xy 差约 2 倍', { fill: C.warnL, stroke: C.warn, size: 11, weight: 700, tfill: C.warnD, pad: 10 })
  b.tag(540, 396, '定量测量按方向分别记账', { fill: C.panelB, stroke: C.sub, size: 11, tfill: C.sub, pad: 10 })
  b.wtext(60, 440, '读图者的第一课：先在脑内把这张「拉长的地图」校正回真实比例——z 向膜厚测量须乘拉长因子（约 1.4–1.7 倍，随缺失角与算法而异）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.ctext(360, 510, '缺失楔（本章第 1 节）的实空间账单在此兑付', { size: 10, fill: C.mute })

  // ============ 二、去噪 ============
  b.panel(710, 132, 660, 412, { title: '二、去噪：从非局部均值到深度学习' })
  b.rect(740, 190, 120, 120, { fill: '#f8fafc', stroke: C.sub, sw: 1.6 })
  for (let i = 0; i < 60; i++) {
    const rx = 748 + ((Math.sin(i * 127.3) * 43758.5) % 1 + 1) % 1 * 104
    const ry = 198 + ((Math.sin(i * 311.7) * 12543.2) % 1 + 1) % 1 * 104
    b.circle(rx, ry, 1.4, { fill: C.mute, opacity: 0.55 })
  }
  b.ellipse(800, 250, 30, 22, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(800, 332, '原始低剂量断层片', { size: 10, weight: 700, fill: C.sub })
  b.tag(800, 396, '非局部均值（NLM）：保边去噪', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 9 })
  b.wtext(740, 430, '以相似图像块互相平均，边缘结构得以保留——无训练、无「脑补」风险的经典选项。', { size: 10, fill: C.sub, maxW: 180, lh: 14 })
  // cryoCARE 训练对
  b.rect(900, 190, 90, 90, { fill: '#f8fafc', stroke: C.sub, sw: 1.4 })
  b.ellipse(945, 235, 24, 17, { fill: C.accL, stroke: C.acc, sw: 1.4 })
  b.ctext(945, 296, '采集一（噪声实现 A）', { size: 9, fill: C.mute })
  b.rect(1000, 190, 90, 90, { fill: '#f8fafc', stroke: C.sub, sw: 1.4 })
  b.ellipse(1045, 235, 24, 17, { fill: C.accL, stroke: C.acc, sw: 1.4 })
  b.ctext(1045, 296, '采集二（噪声实现 B）', { size: 9, fill: C.mute })
  b.ctext(1045, 322, '同区两次低剂量采集', { size: 9.5, weight: 700, fill: C.sub })
  b.ctext(1045, 338, '结构相同、噪声独立', { size: 9.5, fill: C.sub })
  b.rect(1110, 190, 90, 90, { fill: '#ffffff', stroke: C.acc, sw: 1.8 })
  b.ellipse(1155, 235, 26, 19, { fill: C.accL, stroke: C.accD, sw: 2.2 })
  b.ctext(1155, 296, '平均（监督目标）', { size: 9, fill: C.mute })
  b.arrow(990, 235, 996, 235, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.arrow(1090, 235, 1106, 235, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(1155, 396, 'cryoCARE：训练对自监督去噪', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 9 })
  b.wtext(940, 430, '一图输入、平均为监督目标——网络学的是「去噪声实现」而非「补结构」；但去噪图只用于观察判读，定量测量须回到原始数据（「脑补」风险的纪律）。', { size: 10, fill: C.sub, maxW: 380, lh: 14 })

  // ============ 三、三维分割 ============
  b.panel(30, 572, 660, 398, { title: '三、三维分割：膜与丝的测绘（IMOD 工作流）' })
  // 切片序列描 contour
  for (let k = 0; k < 4; k++) {
    const sx = 60 + k * 78
    b.rect(sx, 616, 66, 66, { fill: '#ffffff', stroke: C.sub, sw: 1.4 })
    b.path(`M ${sx + 33},${622} q 22,12 18,28 q -4,26 -20,30 q -18,-4 -20,-28 q 2,-20 22,-30`, { fill: 'none', stroke: C.dna, sw: 2 })
    b.ctext(sx + 33, 696, `片 ${k + 1}`, { size: 9, fill: C.mute })
  }
  b.arrow(368, 649, 400, 649, { stroke: C.sub, sw: 2, marker: 'ink' })
  // mesh
  b.ellipse(470, 649, 40, 32, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 2 })
  for (let i = 0; i < 5; i++) {
    b.path(`M ${430 + i * 4},${633 + i * 8} q 20,-8 40,${i * 2}`, { stroke: C.dna, sw: 1, opacity: 0.5 })
  }
  b.ctext(470, 696, 'mesh 化的三维对象', { size: 9.5, weight: 700, fill: C.dnaD })
  const steps = ['描 contour', '归对象', '插值平滑', 'mesh 化', '测量']
  steps.forEach((s, i) => {
    b.tag(120 + i * 110, 730, `${i + 1} ${s}`, { fill: C.panelB, stroke: C.line, size: 9.5, weight: 600, tfill: C.sub, pad: 7 })
  })
  b.wtext(50, 770, '膜性细胞器以 IMOD（Kremer 等 1996）的 contour 工作流逐切片描线、再拟合成 mesh；也可在正交剖面上勾画。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })
  b.tag(240, 824, '人工分割 1–3 个工作日一幅', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 9 })
  b.tag(540, 824, '注释工作量是断层第一瓶颈', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 9 })
  b.tag(240, 860, 'MemBrain 等 U-Net 类网络：工时压向小时级', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(560, 860, '网络初画 + 人工校对的纪律', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.ctext(360, 916, '一个项目动辄数十幅断层图——分割效率决定定量生物学的吞吐', { size: 9.5, fill: C.mute })

  // ============ 四、模板匹配与接触位点定量 ============
  b.panel(710, 572, 660, 398, { title: '四、模板匹配与线粒体-ER 接触位点定量' })
  b.text(730, 620, '模板匹配：以归一化互相关在六维空间定位分子（3 旋转 + 3 平移）', { size: 11, weight: 700, fill: C.ink })
  // 断层片内找分子
  b.rect(740, 638, 170, 120, { fill: '#f8fafc', stroke: C.sub, sw: 1.6 })
  for (let i = 0; i < 40; i++) {
    const rx = 748 + ((Math.sin(i * 71.3) * 33758.5) % 1 + 1) % 1 * 154
    const ry = 646 + ((Math.sin(i * 217.7) * 42543.2) % 1 + 1) % 1 * 104
    b.circle(rx, ry, 1.3, { fill: C.mute, opacity: 0.45 })
  }
  const hits: [number, number][] = [[780, 670], [840, 700], [880, 660], [770, 730]]
  hits.forEach(([hx, hy]) => {
    b.circle(hx, hy, 9, { fill: C.enzL, stroke: C.enz, sw: 2 })
    b.rect(hx - 13, hy - 13, 26, 26, { fill: 'none', stroke: C.ok, sw: 1.4, dash: '5 4' })
  })
  b.ctext(825, 776, '峰值＝候选分子位置', { size: 9.5, fill: C.sub })
  b.text(940, 660, '假阳性控制三连：', { size: 10.5, weight: 700, fill: C.ink })
  b.tag(1040, 684, '对照区高分位阈值（如 99.9%）', { fill: C.okL, stroke: C.ok, size: 9.5, tfill: C.okD, pad: 7 })
  b.tag(1040, 710, '尺寸过滤', { fill: C.okL, stroke: C.ok, size: 9.5, tfill: C.okD, pad: 7 })
  b.tag(1160, 710, '聚类或非极大值抑制', { fill: C.okL, stroke: C.ok, size: 9.5, tfill: C.okD, pad: 7 })
  b.tag(1040, 736, '阈值不靠拍脑袋，在「不含该分子」的对照区标定', { fill: C.panelB, stroke: C.sub, size: 9, tfill: C.sub, pad: 6 })
  // 线粒体-ER 接触
  b.ellipse(860, 856, 66, 26, { fill: C.warnL, stroke: C.warn, sw: 2 })
  b.path('M 780,886 q 40,-14 90,-10 q 30,2 56,12', { stroke: C.dna, sw: 3 })
  b.ctext(860, 856, '线粒体', { size: 10, weight: 700, fill: C.warnD })
  b.ctext(930, 900, 'ER', { size: 10, weight: 700, fill: C.dnaD })
  b.line(838, 868, 852, 880, { stroke: C.bad, sw: 1.6, dash: '3 3' })
  b.ctext(820, 930, '两套 mesh 的最近距离统计', { size: 9.5, fill: C.sub })
  b.tag(1090, 856, '接触带阈值常取 10–30 nm', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })
  b.tag(1090, 888, '接触带面积占比统计', { fill: C.rnaL, stroke: C.rna, size: 10.5, tfill: C.rnaD, pad: 9 })
  b.ctext(1000, 940, '模板匹配定位分子、mesh 定量几何——「以已知找已知」的识别局限见本章第 4 节', { size: 9.5, fill: C.mute })
}

export default scene({
  title: '断层图的分析与分割：从拉长的地图到定量几何',
  subtitle: 'z 向分辨率比 xy 差约 2 倍：约 5 nm 的膜在 z 向拖成 8–10 nm 泡影、测量乘约 1.4–1.7 倍拉长因子；IMOD contour-mesh 五步分割（人工 1–3 个工作日一幅）；模板匹配六维搜索配假阳性控制三连',
  draw,
})
