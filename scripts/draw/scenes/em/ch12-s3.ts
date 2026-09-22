// em ch12-s3 人工智能与自动化（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、挑选三代 ============
  b.panel(30, 132, 660, 412, { title: '一、颗粒挑选三代：从模板到深度学习' })
  // 微图 + 检测框
  const mx = 60, my = 186, mw = 230, mh = 180
  b.rect(mx, my, mw, mh, { fill: '#f8fafc', stroke: C.sub, sw: 1.8 })
  for (let i = 0; i < 70; i++) {
    const rx = mx + 6 + ((Math.sin(i * 127.3) * 43758.5) % 1 + 1) % 1 * (mw - 12)
    const ry = my + 6 + ((Math.sin(i * 311.7) * 12543.2) % 1 + 1) % 1 * (mh - 12)
    b.circle(rx, ry, 1.4, { fill: C.mute, opacity: 0.5 })
  }
  ;[[105, 230], [180, 215], [140, 300], [235, 280], [80, 320]].forEach(([px, py]) => {
    b.ellipse(px, py, 13, 11, { fill: C.proL, stroke: C.pro, sw: 1.6 })
    b.rect(px - 20, py - 20, 40, 40, { fill: 'none', stroke: C.ok, sw: 1.6, dash: '6 4' })
  })
  b.ctext(mx + mw / 2, my + mh + 20, '网络在陌生微图上自动画框', { size: 10, weight: 700, fill: C.sub })
  const gen = (y: number, t: string, s: string, fill: string, stroke: string, tfill: string) => {
    b.rect(320, y, 350, 66, { fill, stroke, sw: 1.6, rx: 8 })
    b.text(336, y + 25, t, { size: 12, weight: 700, fill: tfill })
    b.text(336, y + 45, s, { size: 9.5, fill: C.sub })
  }
  gen(182, '第一代：模板互相关', '先验模板投影匹配——模板里有什么就挑出什么（参考偏差）', C.panelB, C.sub, C.sub)
  gen(258, '第二代：LoG blob', '尺寸先验的差分高斯检测，免模板、常作初筛', C.dnaL, C.dna, C.dnaD)
  gen(334, '第三代：深度学习', 'Topaz 正-未标注学习（Bepler 等 2019）：少量确认颗粒＋一堆未标注图像，网络自行学会「什么不是颗粒」；crYOLO（Wagner 等 2019）单发检测毫秒级', C.proL, C.pro, C.proD)
  b.tag(280, 452, '训练偏见须人工复核：网络只认它见过的颗粒长相', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 9 })
  b.tag(560, 452, '人工标注量骤减', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })

  // ============ 二、cryoDRGN ============
  b.panel(710, 132, 660, 412, { title: '二、cryoDRGN：把构象空间流形化（Zhong 2021）' })
  // 编码器
  for (let i = 0; i < 4; i++) b.rect(740, 190 + i * 30, 120, 24, { fill: C.accL, stroke: C.acc, sw: 1.4 })
  b.ctext(800, 326, '编码器读入二维颗粒图像', { size: 9.5, fill: C.sub })
  b.arrow(866, 250, 912, 250, { stroke: C.sub, sw: 2, marker: 'ink' })
  // 潜变量流形
  b.ctext(990, 190, '低维构象潜变量 z', { size: 10.5, weight: 700, fill: C.ink })
  const mani: [number, number][] = []
  for (let i = 0; i <= 30; i++) {
    const t = i / 30
    mani.push([940 + t * 130, 260 - Math.sin(t * Math.PI) * 44])
  }
  b.polyline(mani, { stroke: C.pro, sw: 2.6 })
  for (let i = 0; i <= 6; i++) {
    const t = i / 6
    b.circle(940 + t * 130, 260 - Math.sin(t * Math.PI) * 44, 5.5, { fill: C.pro, fillOp: 0.75 })
  }
  b.ctext(1005, 330, '连续构象流形', { size: 9.5, fill: C.proD })
  b.arrow(1078, 250, 1124, 250, { stroke: C.sub, sw: 2, marker: 'ink' })
  // 解码器输出
  for (let i = 0; i < 4; i++) {
    b.ellipse(1156 + (i % 2) * 130, 216 + Math.floor(i / 2) * 72, 34, 26, { fill: C.proL, stroke: C.pro, sw: 2 })
    b.path(`M ${1140 + (i % 2) * 130},${214 + Math.floor(i / 2) * 72} q 10,-8 18,-2`, { stroke: C.proD, sw: 2, fill: 'none' })
  }
  b.ctext(1230, 326, '解码器从 z 直接生成三维密度', { size: 9.5, fill: C.sub })
  b.wtext(730, 376, '变分自编码器直面连续构象变化：每张图像映射到流形上一点，沿流形滑动即得「分子电影」雏形——离散分类力不从心的连续柔性在此被建模。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(900, 466, '假构象风险：须交叉验证（留出集与独立重构对账）', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 9 })
  b.tag(1180, 466, '自监督去噪：Topaz-Denoise、Noise2Noise 类', { fill: C.okL, stroke: C.ok, size: 10.5, tfill: C.okD, pad: 9 })
  b.ctext(1040, 508, '去噪图只用于观察判读，定量测量回到原始数据', { size: 10, fill: C.mute })

  // ============ 三、自动化链条 ============
  b.panel(30, 572, 660, 398, { title: '三、自动化：从过夜收集到实时反馈' })
  const chain = ['Leginon 开队列（Suloway 2005）', 'SerialEM 脚本', 'EPU 过夜收集']
  chain.forEach((s, i) => {
    b.tag(170 + i * 210, 626, s, { fill: C.accL, stroke: C.acc, size: 10, weight: 600, tfill: C.accD, pad: 8 })
    if (i < 2) b.arrow(272 + i * 210, 626, 358 + i * 210, 626, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  })
  b.wtext(50, 666, '低倍巡网、靶点定位与曝光排成无人值守的队列——深夜的显微镜自己找网格孔、自己对焦、自己曝光。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(250, 716, '实时异常检测：坏微图当场丢弃', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(560, 716, '「把坏数据挡在磁盘外」', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(400, 764, 'cryoSPARC Live：边收边算，反馈周期压到小时级', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })
  // 反馈环
  b.path('M 120,830 Q 360,900 600,830', { fill: 'none', stroke: C.acc, sw: 2.2, dash: '7 5', marker: 'acc' })
  b.ctext(360, 892, '采集参数（欠焦分布、冰厚、束流）随 2D 类平均质量即时回调', { size: 10, fill: C.sub })
  b.ctext(360, 936, '「收完才发现问题」变成当日可纠的工程迭代', { size: 10, fill: C.mute })

  // ============ 四、生态与合流 ============
  b.panel(710, 572, 660, 398, { title: '四、生态侧与 AlphaFold 双向流动' })
  b.tag(860, 620, 'RELION-5 与 Nexus：统一单颗粒与断层工作流', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(1170, 620, 'EMPIAR 存档原始影像', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(860, 654, '盲测挑战赛复核分辨率', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(1170, 654, '可复现性成为社区纪律', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  // AF2 <-> EM
  b.rect(760, 706, 240, 56, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  b.ctext(880, 728, 'AlphaFold2（Jumper 等 2021）', { size: 11.5, weight: 700, fill: C.proD })
  b.ctext(880, 748, 'CASP14 横扫', { size: 9.5, fill: C.mute })
  b.rect(1060, 706, 240, 56, { fill: C.accL, stroke: C.acc, sw: 2, rx: 8 })
  b.ctext(1180, 728, '冷冻电镜实验结构', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(1180, 748, '占据率与构象系综', { size: 9.5, fill: C.mute })
  b.arrow(1006, 724, 1054, 724, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.arrow(1054, 744, 1006, 744, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.ctext(1030, 712, '预测给可达构象', { size: 9, fill: C.proD })
  b.ctext(1030, 790, '电镜给真实占据', { size: 9, fill: C.accD })
  b.wtext(730, 790, '两个方向的流动同时打开：预测模型作初始参考与建模校验，电镜密度反过来校准预测的置信与局限。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.ctext(1040, 856, 'AI 应用矩阵：挑选、去噪、分类、连续构象、实时质检——经验被搬进权重，纪律仍在人', { size: 10, weight: 700, fill: C.ink })
  b.ctext(1040, 900, '风险清单：训练偏见、假构象、去噪脑补、指标过拟合', { size: 10, fill: C.mute })
}

export default scene({
  title: '人工智能与自动化：深度学习管线与实时反馈',
  subtitle: 'Topaz 正-未标注学习（Bepler 2019）与 crYOLO 毫秒级挑选；cryoDRGN（Zhong 2021）变分自编码器把构象空间流形化成「分子电影」雏形；Leginon/SerialEM/EPU 过夜收集，cryoSPARC Live 把反馈周期压到小时；AlphaFold2 与电镜双向流动',
  draw,
})
