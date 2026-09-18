// ne ch7-s4 感觉系统总论与躯体感觉 / 触觉与本体感觉（39-h 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、皮肤分层与四型机械感受器 ============
  b.panel(30, 132, 660, 430, { title: '一、无毛皮肤四型机械感受器：浅密深疏' })
  // 皮肤分层
  b.rect(70, 200, 300, 300, { fill: C.proL, fillOp: 0.3, stroke: C.pro, sw: 1.8, rx: 6 })
  b.line(70, 280, 370, 280, { stroke: C.pro, sw: 1.4, dash: '5 4' })
  b.line(70, 380, 370, 380, { stroke: C.pro, sw: 1.4, dash: '5 4' })
  b.text(80, 226, '表皮', { size: 11.5, weight: 700, fill: C.proD })
  b.text(80, 306, '真皮', { size: 11.5, weight: 700, fill: C.proD })
  b.text(80, 406, '皮下', { size: 11.5, weight: 700, fill: C.proD })
  // Merkel（表皮基底层）
  b.circle(150, 270, 9, { fill: C.dna, fillOp: 0.8 })
  b.text(168, 266, 'Merkel（SA1）', { size: 10.5, weight: 700, fill: C.dnaD })
  b.text(168, 280, '棱角·盲文样细节', { size: 9.5, fill: C.mute })
  // Meissner（真皮乳头）
  b.ellipse(260, 306, 10, 15, { fill: C.rna, fillOp: 0.75 })
  b.text(284, 304, 'Meissner（RA）', { size: 10.5, weight: 700, fill: C.rnaD })
  b.text(284, 318, '5–40 Hz 低频振动', { size: 9.5, fill: C.mute })
  // Ruffini（真皮深层）
  b.ellipse(180, 420, 16, 9, { fill: C.acc, fillOp: 0.75 })
  b.text(212, 418, 'Ruffini（SA2）', { size: 10.5, weight: 700, fill: C.accD })
  b.text(212, 432, '皮肤牵拉·手形', { size: 9.5, fill: C.mute })
  // 环层小体（皮下）
  b.ellipse(320, 452, 13, 19, { fill: C.badL, fillOp: 0.8, stroke: C.bad, sw: 1.6 })
  b.circle(320, 452, 4, { fill: C.bad })
  b.text(350, 448, '环层小体（RA2）', { size: 10.5, weight: 700, fill: C.bad })
  b.text(350, 462, '100–300 Hz 高频振动', { size: 9.5, fill: C.mute })
  // 感受野大小示意
  b.ctext(480, 226, '感受野：浅小深大', { size: 12.5, weight: 700, fill: C.ink })
  b.circle(500, 292, 13, { fill: C.dna, fillOp: 0.35, stroke: C.dna, sw: 1.8 })
  b.ctext(500, 296, 'SA1', { size: 8.5, weight: 700, fill: C.dnaD })
  b.ctext(500, 330, '小而边界清晰', { size: 10, fill: C.mute })
  b.circle(560, 292, 20, { fill: C.rna, fillOp: 0.3, stroke: C.rna, sw: 1.8 })
  b.ctext(560, 296, 'RA', { size: 8.5, weight: 700, fill: C.rnaD })
  b.ctext(560, 330, '小而清晰', { size: 10, fill: C.mute })
  b.circle(500, 412, 40, { fill: C.acc, fillOp: 0.22, stroke: C.acc, sw: 1.8 })
  b.ctext(500, 416, 'SA2', { size: 8.5, weight: 700, fill: C.accD })
  b.circle(596, 412, 34, { fill: C.bad, fillOp: 0.15, stroke: C.bad, sw: 1.8 })
  b.ctext(596, 416, 'RA2', { size: 8.5, weight: 700, fill: C.bad })
  b.ctext(548, 470, '大而模糊', { size: 10, fill: C.mute })
  b.wtext(430, 508, '浅层两型感受野小、密度高——指尖两点辨别阈仅数毫米；深层两型感受野大，整合大范围机械状态。', { size: 10.5, fill: C.sub, maxW: 250, lh: 15 })

  // ============ 二、四型对照表 ============
  b.panel(710, 132, 660, 430, { title: '二、四型分工：把盲文「读」进大脑的主力' })
  b.table(740, 200, 600, {
    headers: ['类型', '结构与位置', '适应', '最敏感刺激'],
    colW: [128, 200, 92, 180],
    rowH: 52,
    fontSize: 11,
    rows: [
      ['Merkel 复合体', '表皮基底层上皮细胞+末梢', '慢（SA1）', '恒压、棱角、边缘细节'],
      ['Meissner 小体', '真皮乳头囊状小体', '快（RA）', '5–40 Hz 抖动、滑动'],
      ['Ruffini 末梢', '真皮深层梭形末梢', '慢（SA2）', '皮肤牵拉、握持状态'],
      ['环层小体', '真皮深层与皮下「洋葱头」', '极快（RA2）', '100–300 Hz 高频振动'],
    ],
  })
  b.wtext(740, 486, 'SA1 读纹理与盲文；RA 探粗糙度与滑动；环层小体隔着工具「感到」锉刀颗粒或手机震动——高频成分经工具传到手；SA2 监测拉伸方向，为捏握的力方向提供反馈。有毛皮肤另有触觉 C 纤维（低阈值、慢传导、情感性通路），负责「温柔轻抚」的愉悦感受。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })

  // ============ 三、肌梭：长度的感受器 ============
  b.panel(30, 578, 660, 396, { title: '三、肌梭并联于梭外肌：自带调零机构' })
  // 梭外肌（上下两条）
  b.rect(90, 660, 440, 26, { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.8, rx: 13 })
  b.ctext(310, 677, '梭外肌纤维（α 支配）', { size: 11, weight: 700, fill: C.enzD })
  b.rect(90, 780, 440, 26, { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.8, rx: 13 })
  // 肌梭（被囊，中间）
  b.rect(150, 718, 320, 30, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 2, rx: 15 })
  b.ctext(310, 737, '肌梭（核袋 + 核链纤维）', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(310, 760, '并联于梭外肌之间', { size: 10, fill: C.mute })
  // Ia / II 传入
  b.arrow(220, 718, 200, 664, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.ctext(178, 690, 'Ia', { size: 11, weight: 700, fill: C.dnaD })
  b.arrow(400, 718, 420, 664, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.ctext(440, 690, 'II', { size: 11, weight: 700, fill: C.rnaD })
  // γ 神经元
  b.arrow(310, 848, 310, 808, { stroke: C.pro, sw: 2.4, marker: 'pro' })
  b.ctext(310, 868, 'γ 运动神经元支配梭内纤维两端', { size: 11, weight: 700, fill: C.proD })
  b.wtext(60, 900, 'Ia 螺旋末梢感长度与变化率、II 末梢感静态长度；梭外肌主动缩短时 γ 共激活令梭内同步缩短，肌梭在任何长度上都不失灵。Ia 放电沿 Ia 纤维以高达 100 m/s 以上速度上传。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、腱器官与关节感受器 ============
  b.panel(710, 578, 660, 396, { title: '四、腱器官串联感张力；关节感受器报角度' })
  // 腱器官示意
  b.rect(740, 660, 150, 24, { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.8, rx: 12 })
  b.ctext(815, 676, '肌腹', { size: 10.5, weight: 700, fill: C.enzD })
  b.ellipse(930, 672, 24, 16, { fill: C.warnL, fillOp: 0.8, stroke: C.warn, sw: 2 })
  b.ctext(930, 676, '腱器官', { size: 9, weight: 700, fill: '#92400e' })
  b.line(980, 672, 1050, 672, { stroke: C.sub, sw: 5 })
  b.ctext(1010, 652, '肌腱', { size: 10.5, weight: 700, fill: C.sub })
  b.wtext(740, 720, '与约 10–15 条梭外肌纤维「串联」；张力升高时胶原纤维束拉直、挤压 Ib 传入末梢放电——阈值较高，张力危及肌腱时骤增，经反肌伸张反射抑制同一肌肉的 α 神经元（防断保护）。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })
  // 关节感受器四型
  b.ctext(1040, 788, '关节感受器四型分工', { size: 12.5, weight: 700, fill: C.ink })
  b.table(740, 800, 590, {
    headers: ['末梢类型', '报告内容'],
    colW: [220, 370],
    rowH: 30,
    fontSize: 11,
    rows: [
      ['Ruffini 型（慢适应）', '关节角度的持续报告'],
      ['环层小体型', '运动瞬变'],
      ['高尔基型', '关节接近极限位置时高频报警'],
      ['游离末梢', '仅关节囊被牵扯或发炎时放电'],
    ],
  })
}

export default scene({
  title: '触觉与本体感觉：四型皮肤感受器、肌梭与腱器官',
  subtitle: '浅层感受野小而密（指尖两点辨别仅数毫米）；肌梭并联感长度、腱器官串联感张力',
  draw,
})
