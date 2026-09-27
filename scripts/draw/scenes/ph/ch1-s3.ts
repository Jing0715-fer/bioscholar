// ph ch1-s3 反馈与前馈：稳态的三种控制逻辑（负反馈/正反馈/前馈）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、负反馈闭环：动脉血压骤升的纠正 ============
  b.panel(30, 132, 660, 460, { title: '一、负反馈闭环：动脉血压骤升的纠正' })
  b.tag(155, 205, '扰动：骤升 +40 mmHg', { size: 11, weight: 700, fill: C.warnL, stroke: C.warn, tfill: C.warnD, pad: 8 })
  b.arrow(155, 218, 155, 246, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  // 中间三盒：受控变量 → 感受器 → 控制中枢
  b.rect(70, 250, 150, 70, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.ctext(145, 276, '受控变量', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(145, 298, '动脉血压 MAP', { size: 11, fill: C.sub })
  b.rect(270, 250, 160, 70, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.ctext(350, 270, '感受器', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(350, 290, '颈动脉窦·主动脉弓', { size: 10.5, fill: C.sub })
  b.ctext(350, 308, '压力感受器', { size: 10.5, fill: C.sub })
  b.rect(480, 250, 180, 70, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.ctext(570, 270, '控制中枢（延髓）', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(570, 290, '与设定点比较', { size: 10.5, fill: C.sub })
  b.ctext(570, 308, '输出偏差信号', { size: 10.5, fill: C.sub })
  b.arrow(222, 285, 266, 285, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(244, 266, '监测', { size: 10, fill: C.mute })
  b.arrow(432, 285, 476, 285, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(454, 266, '传入', { size: 10, fill: C.mute })
  // 传出 → 效应器
  b.arrow(570, 322, 570, 396, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.text(582, 362, '传出神经', { size: 10.5, fill: C.mute })
  b.rect(340, 400, 320, 82, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 2, rx: 8 })
  b.ctext(500, 424, '效应器：心迷走增强 · 心交感与缩血管减弱', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(500, 446, '心率减慢 · 心输出量与外周阻力下降', { size: 11, fill: C.sub })
  b.ctext(500, 468, '→ 血压回降', { size: 11, weight: 700, fill: C.okD })
  // 纠正回路（负反馈 ⊖）
  b.arrow(340, 438, 174, 326, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.ctext(250, 342, '纠正：与偏差反向', { size: 10.5, weight: 700, fill: C.okD })
  b.circle(252, 382, 11, { fill: C.bg, stroke: C.ok, sw: 2 })
  b.line(244, 382, 260, 382, { stroke: C.ok, sw: 2.2 })
  b.ctext(250, 408, '负反馈', { size: 10.5, weight: 700, fill: C.okD })
  // 设定点说明
  b.text(60, 462, '设定点 = 拮抗效应器活动的平衡点', { size: 10.5, fill: C.sub })
  b.text(60, 484, '运动时重置：心率 70 → 150 次/分', { size: 10.5, fill: C.sub })
  // 增益
  b.text(60, 512, '增益 = 校正量 ÷ 残余偏差 = (40-10) ÷ 10 = 3', { size: 12, weight: 700, fill: C.accD })
  b.wtext(60, 538, '残余偏差不可避免——偏差归零则误差信号消失；时间滞后叠加强增益是振荡之源（血压 Mayer 波、餐后血糖过冲与回摆），滞后过大可致反向超调', { size: 10.5, fill: C.sub, maxW: 600, lh: 18 })

  // ============ 二、正反馈：必须自限的放大器 ============
  b.panel(710, 132, 660, 460, { title: '二、正反馈：必须自限的放大器' })
  b.ctext(800, 186, '启动信号', { size: 11, weight: 700, fill: C.mute })
  b.ctext(985, 186, '放大环', { size: 11, weight: 700, fill: C.mute })
  b.ctext(1180, 186, '自限终点', { size: 11, weight: 700, fill: C.mute })
  const posRows: [string, string, string][] = [
    ['胎头压迫宫颈', '胎儿娩出', '催产素释放增多 → 宫缩更强 → 胎头压迫更强（互为因果）'],
    ['组织因子暴露', '血栓封住破口', '凝血酶激活更多凝血因子（级联放大）'],
    ['去极化达阈电位', 'Na^{+} 通道失活', 'Na^{+} 内流与去极化互为因果（再生性升支，超射约 +30 mV）'],
  ]
  posRows.forEach(([st, ep, mech], i) => {
    const y = 225 + i * 90
    b.tag(800, y, st, { size: 11, weight: 700, fill: C.accL, stroke: C.acc, tfill: C.accD, pad: 8 })
    b.arrow(858, y, 940, y, { stroke: C.bad, sw: 1.8, marker: 'bad' })
    b.path(`M 967,${y} A 18 18 0 0 1 1003,${y}`, { fill: 'none', stroke: C.bad, sw: 2, marker: 'bad' })
    b.path(`M 1003,${y} A 18 18 0 0 1 967,${y}`, { fill: 'none', stroke: C.bad, sw: 2, marker: 'bad' })
    b.ctext(985, y + 4, '放大', { size: 9.5, weight: 700, fill: C.badD })
    b.arrow(1013, y, 1120, y, { stroke: C.bad, sw: 1.8, marker: 'bad' })
    b.tag(1180, y, ep, { size: 11, weight: 700, fill: C.okL, stroke: C.ok, tfill: C.okD, pad: 8 })
    b.text(730, y + 34, mech, { size: 10.5, fill: C.sub })
  })
  b.wtext(730, 470, '共同点：正反馈自带自限终点——终点事件物理性消除启动偏差源（胎头娩出完成 / 血栓封口 / 通道失活 / 卵泡破裂终结 LH 峰）。一旦失去自限即恶性循环：严重失血时冠脉灌注不足 → 泵血更弱 → 血压更低，须临床主动打断', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })
  b.text(730, 540, '正反馈不维持任何稳态——只把「必须一次做成」的事件推到完成', { size: 11.5, weight: 700, fill: C.badD })

  // ============ 三、前馈：不等偏差出现 ============
  b.panel(30, 606, 660, 376, { title: '三、前馈：不等偏差出现' })
  b.tag(150, 690, '条件刺激：食物形色味', { size: 11, weight: 700, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, pad: 8 })
  b.arrow(222, 690, 300, 690, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.rect(306, 664, 130, 52, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.ctext(371, 686, '皮层条件反射', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(371, 706, '（Pavlov）', { size: 10, fill: C.mute })
  b.arrow(442, 690, 505, 690, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.tag(575, 690, '唾液·胃液分泌启动', { size: 11, weight: 700, fill: C.okL, stroke: C.ok, tfill: C.okD, pad: 8 })
  b.text(50, 730, '食物入口之前分泌已启动——偏差尚未出现', { size: 10.5, fill: C.sub })
  b.tag(150, 785, '运动皮层·中央命令', { size: 11, weight: 700, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, pad: 8 })
  b.arrow(222, 785, 300, 785, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.rect(306, 759, 130, 52, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.ctext(371, 781, '内部预测模型', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(371, 801, '（可学习）', { size: 10, fill: C.mute })
  b.arrow(442, 785, 505, 785, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.tag(575, 785, '心率·通气·血流预调', { size: 11, weight: 700, fill: C.okL, stroke: C.ok, tfill: C.okD, pad: 8 })
  b.text(50, 825, '起跑之前动员已完成；训练有素者预判误差更小', { size: 10.5, fill: C.sub })
  b.wtext(50, 856, '前馈快而无兜底：预判失准便放大错误（运动前过度通气）；故与负反馈并行——前馈抢时间，负反馈保精度', { size: 10.5, fill: C.sub, maxW: 610, lh: 18 })
  // 前馈效果小图：偏差被压缩
  b.arrow(60, 952, 640, 952, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(350, 972, '时间', { size: 11, fill: C.sub })
  b.line(300, 890, 300, 952, { stroke: C.mute, sw: 1.2, dash: '4 3' })
  b.ctext(300, 884, '扰动到达', { size: 10, fill: C.mute })
  b.polyline([[240, 952], [280, 932], [330, 922], [380, 932], [420, 952]], { stroke: C.ok, sw: 2.4 })
  b.text(170, 922, '有前馈', { size: 10.5, weight: 700, fill: C.okD })
  b.polyline([[300, 952], [350, 910], [430, 885], [510, 910], [560, 952]], { stroke: C.bad, sw: 2.2, dash: '6 4' })
  b.text(520, 880, '无前馈', { size: 10.5, weight: 700, fill: C.badD })

  // ============ 四、三种控制逻辑对比 ============
  b.panel(710, 606, 660, 376, { title: '四、三种控制逻辑对比' })
  b.table(730, 665, 620, {
    headers: ['类型', '触发信号', '对偏差作用', '失控后果'],
    colW: [80, 150, 175, 215], rowH: 44, fontSize: 11,
    rows: [
      ['负反馈', '偏差本身', '对抗 · 压缩（闭环）', '振荡、残余偏差'],
      ['正反馈', '启动信号', '放大 · 推向终点', '恶性循环'],
      ['前馈', '扰动预告', '预先抵消（开环）', '预测失准'],
    ],
  })
  b.wtext(730, 872, '三种逻辑常共守同一变量——体温：添衣（行为性前馈）+ 寒战与皮肤血管收缩（负反馈）+ 褐色脂肪产热与甲状腺激素上调（长时程体液适应）；血糖：头期胰岛素分泌（前馈色彩）+ 胰岛素-胰高血糖素拮抗（负反馈）', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })
  b.text(730, 938, '控制逻辑是语法，器官系统是词汇——其余章节用这套语法造句', { size: 11.5, weight: 700, fill: C.mute })
}

export default scene({
  title: '反馈与前馈：稳态的三种控制逻辑',
  subtitle: '负反馈以偏差治偏差（增益 = 校正量 ÷ 残余偏差，血压反射例 = 3）；正反馈放大、须自限终点关闭；前馈按扰动预告预先调整——三者协作守护稳态',
  draw,
})
