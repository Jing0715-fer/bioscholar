// sb ch6-s3 低温晶体学与辐射损伤（Task SB-5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、100 K 冷却横截面与双重收益 ============
  b.panel(30, 132, 660, 400, { title: '一、100 K 冷却：冷流横截面与双重收益' })
  // 冷流喷口（竖直双壁管 + 隔板）
  b.line(262, 165, 262, 218, { stroke: C.sub, sw: 2.5 })
  b.line(298, 165, 298, 218, { stroke: C.sub, sw: 2.5 })
  b.line(262, 165, 298, 165, { stroke: C.sub, sw: 2.5 })
  b.line(266, 182, 294, 182, { stroke: C.faint, sw: 1.2 })
  b.line(266, 196, 294, 196, { stroke: C.faint, sw: 1.2 })
  b.text(326, 188, '液氮冷流口', { size: 9.5, fill: C.mute })
  b.text(326, 210, '100 K 液氮流', { size: 10, weight: 700, fill: C.accD })
  b.text(326, 228, '（控温 ±0.1 K）', { size: 9.5, fill: C.mute })
  // 冷流箭头（三股直下 + 绕流）
  for (const fx of [264, 280, 296]) b.arrow(fx, 224, fx, 276, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.path('M 258,300 Q 240,330 252,368', { fill: 'none', stroke: C.acc, sw: 1.4, dash: '4 3', marker: 'acc' })
  b.path('M 302,300 Q 320,330 308,368', { fill: 'none', stroke: C.acc, sw: 1.4, dash: '4 3', marker: 'acc' })
  b.ctext(196, 356, '冷流包裹晶体', { size: 9.5, fill: C.accD })
  // 尼龙环 + 晶体 + 霜
  b.ellipse(280, 310, 38, 28, { fill: 'none', stroke: C.mute, sw: 1.6 })
  b.polygon([[280, 296], [294, 310], [280, 324], [266, 310]], { fill: C.enzL, stroke: C.enz, sw: 2 })
  b.ctext(280, 352, '晶体', { size: 10.5, weight: 700, fill: C.enzD })
  b.etext(322, 292, '尼龙环', { size: 9.5, fill: C.mute })
  for (const [fx, fy] of [[247, 293], [313, 293], [245, 327], [315, 327]] as Array<[number, number]>) {
    b.circle(fx, fy, 2.2, { fill: C.faint })
  }
  b.tag(178, 310, '100 K', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 10 })
  // 挖晶铲针与测角仪
  b.line(316, 322, 368, 396, { stroke: C.sub, sw: 2.5 })
  b.rect(346, 396, 44, 12, { fill: C.panelB, stroke: C.sub, sw: 1.5 })
  b.ctext(368, 424, '测角仪', { size: 9.5, fill: C.mute })
  // 右侧解读
  b.wtext(440, 190, 'Teng（1990）首次报道：调整母液组成后直接投入液氮冷却，蛋白晶体衍射显著改善；Hope 等同期发展成套低温操作器件并推动普及。', { size: 10.5, fill: C.sub, maxW: 230, lh: 15 })
  b.wtext(440, 252, '低温收益其一：热振动幅度减小（Debye-Waller 因子），高分辨率反射增强。', { size: 10.5, fill: C.sub, maxW: 230, lh: 15 })
  b.wtext(440, 292, '其二：辐射损伤被冻结——X 射线电离水分子产生的自由基，其扩散与攻击在 100 K 下近乎停摆，可耐受剂量较室温提高约两个数量级。', { size: 10.5, fill: C.sub, maxW: 230, lh: 15 })
  b.wtext(440, 368, '绝大多数蛋白晶体在 100 K 液氮气流下收集；恒温比绝对到 100 K 更重要——温度波动造成的晶格应变会毁掉数据的可合并性。', { size: 10.5, fill: C.sub, maxW: 230, lh: 15 })
  b.wtext(60, 480, '冷却使晶格常数收缩约 0.2–2% 且各向异性：同一晶体的室温与低温数据不能直接合并；冷却瞬间的各向不同步重排，以弹性应变或镶嵌度增高的形式被吸收——原本锐利的晶体冷后斑点变弧，多半是各向异性收缩的账单。低温收缩与损伤膨胀方向相反、成因不同。', { size: 10.5, fill: C.sub, maxW: 615, lh: 15 })

  // ============ 二、冷冻保护与玻璃化检查 ============
  b.panel(30, 562, 660, 380, { title: '二、冷冻保护与玻璃化检查' })
  b.text(50, 606, '逐步置换：梯度提高保护剂浓度', { size: 11, weight: 700, fill: C.ink })
  const dropX = [80, 150, 220, 290]
  const dropL = ['10%', '15%', '20%', '25%']
  dropX.forEach((dx, i) => {
    b.ellipse(dx, 655, 24, 18, { fill: C.proL, stroke: C.pro, sw: 1.6 })
    b.polygon([[dx, 647], [dx + 6, 655], [dx, 663], [dx - 6, 655]], { fill: C.bg, stroke: C.proD, sw: 1.4 })
    b.ctext(dx, 690, dropL[i], { size: 10, fill: C.sub })
    if (i < 3) b.arrow(dx + 27, 648, dx + 43, 648, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  })
  b.wtext(50, 712, '每步停留覆盖平衡时间（数十秒至两分钟）、3–5 步到位；甘油等渗透型小分子扩散进晶体约需数十秒到数分钟，PEG 类几乎不渗透、靠胞外置换。', { size: 10.5, fill: C.sub, maxW: 300, lh: 14 })
  b.wtext(50, 768, '渗透冲击的指纹：斑点拉长成弧甚至分裂、镶嵌度陡增而不见冰环——此时先怀疑渗透而不是结冰。', { size: 10.5, fill: C.sub, maxW: 300, lh: 14 })
  b.wtext(50, 796, '四大常客：甘油 15–25%、乙二醇、MPD、低分子量 PEG 400。', { size: 10.5, fill: C.sub, maxW: 300, lh: 14 })
  b.wtext(50, 824, '化学相似原则：硫酸铵条件首选甘油与乙二醇；PEG 条件常提高 PEG 400 梯度或添 MPD；柠檬酸盐条件对甘油耐受好。', { size: 10.5, fill: C.sub, maxW: 300, lh: 14 })
  b.wtext(50, 866, '见冰环：更高浓度重淬或退火去除；表面霜可在液氮下以冷气流拂拭（有风险）；内部结冰只能提高浓度重淬；低角背景抬升而无锐环 = 无定形冰或母液层增厚——先分类再动手。', { size: 10.5, fill: C.sub, maxW: 300, lh: 14 })
  // 右：玻璃化检查衍射图
  b.ctext(525, 606, '玻璃化检查：衍射图上的「环」与「斑」', { size: 11, weight: 700, fill: C.ink })
  b.circle(525, 705, 92, { fill: C.bg, stroke: C.line, sw: 1.6 })
  b.circle(525, 705, 40, { fill: 'none', stroke: C.bad, sw: 1.6, dash: '6 4' })
  b.circle(525, 705, 72, { fill: 'none', stroke: C.bad, sw: 1.6, dash: '6 4' })
  for (const [sx, sy] of [[466, 726], [467, 688], [495, 750], [538, 768], [568, 752], [588, 688], [490, 670], [520, 650], [555, 660], [575, 680], [470, 695], [515, 720], [535, 690], [545, 725], [455, 745]] as Array<[number, number]>) {
    b.circle(sx, sy, 2.4, { fill: C.pro })
  }
  b.circle(525, 705, 7, { fill: C.ink })
  b.line(560, 685, 592, 674, { stroke: C.bad, sw: 1 })
  b.line(587, 660, 592, 652, { stroke: C.bad, sw: 1 })
  b.text(598, 648, '1.92 Å 立方冰', { size: 9.5, weight: 700, fill: C.badD })
  b.text(598, 670, '3.67 Å 六方冰', { size: 9.5, weight: 700, fill: C.badD })
  b.wtext(360, 820, '完全玻璃化的冰相无衍射环。冰晶衍射 = 以直射斑为心的锐利同心环，整环均匀、不随晶体旋转改变；蛋白反射是离散斑点、逐帧换位——「环」与「斑」的区分在衍射图上现场完成。', { size: 10.5, fill: C.sub, maxW: 310, lh: 14 })
  b.wtext(360, 876, '表面霜给出同样锐利但更弥散的环；内部结冰与表面霜的处置不同，先分类再动手。', { size: 10.5, fill: C.sub, maxW: 310, lh: 14 })

  // ============ 三、Henderson 剂量极限与损伤次序 ============
  b.panel(710, 132, 660, 400, { title: '三、Henderson 剂量极限与损伤次序' })
  b.wtext(730, 176, '辐射损伤的物理学由剂量刻画（单位质量吸收的能量，Gy）。Henderson（1995）经典估算给出蛋白晶体可耐受剂量上限约 2×10^{7} Gy（20 MGy）；Owen 等（2006）把「衍射强度衰减约 30%」的经验上限放宽至约 30 MGy。剂量由 RADDOSE-3D 预计算：输入晶体尺寸、成分与光束能谱通量，输出每帧吸收剂量。', { size: 10.5, fill: C.sub, maxW: 620, lh: 14 })
  // 剂量标尺（0–30+ MGy）
  b.line(740, 292, 1330, 292, { stroke: C.sub, sw: 2, marker: 'ink' })
  for (let d = 0; d <= 30; d += 5) {
    const tx = 745 + d * 19
    b.line(tx, 292, tx, 298, { stroke: C.sub, sw: 1.8 })
    b.ctext(tx, 314, `${d}`, { size: 10, fill: C.mute })
  }
  b.ctext(1035, 336, '剂量（MGy）', { size: 10.5, weight: 600, fill: C.sub })
  // 超限区
  b.rect(1315, 246, 35, 46, { fill: C.badL, fillOp: 0.6, stroke: C.bad, sw: 1 })
  b.ctext(1332, 272, '超限', { size: 9, weight: 700, fill: C.badD })
  // Henderson 20 MGy 与 Owen 30 MGy 竖线
  b.line(1125, 238, 1125, 292, { stroke: C.bad, sw: 1.8, dash: '5 4' })
  b.ctext(1125, 230, 'Henderson 1995：20 MGy', { size: 9.5, weight: 700, fill: C.badD })
  b.line(1315, 238, 1315, 292, { stroke: C.enz, sw: 1.8, dash: '5 4' })
  b.etext(1348, 230, 'Owen 2006：约 30 MGy', { size: 9.5, weight: 700, fill: C.enzD })
  // 特异性损伤事件
  b.rect(783, 285, 57, 7, { fill: C.bad, fillOp: 0.8 })
  b.ctext(811, 262, '二硫键断裂（2–5 MGy）', { size: 9.5, weight: 700, fill: C.badD })
  b.line(811, 268, 811, 283, { stroke: C.bad, sw: 1, dash: '3 3' })
  b.polygon([[935, 282], [940, 288], [935, 294], [930, 288]], { fill: C.enz })
  b.ctext(935, 262, '金属中心失序（数 MGy 起）', { size: 9.5, weight: 700, fill: C.enzD })
  b.line(935, 268, 935, 280, { stroke: C.enz, sw: 1, dash: '3 3' })
  b.polygon([[1060, 282], [1065, 288], [1060, 294], [1055, 288]], { fill: C.warn })
  b.ctext(1060, 248, 'Glu/Asp 去羧（更高剂量）', { size: 9.5, weight: 700, fill: C.warnD })
  b.line(1060, 254, 1060, 280, { stroke: C.warn, sw: 1, dash: '3 3' })
  b.wtext(730, 352, '镶嵌度随剂量近似线性增长：每吸收约 10 MGy 上升约 0.05–0.1°（体系依赖）；晶格常数膨胀约 0.1–0.5%、整体强度衰减 I/I_{0}——逐帧镶嵌度与强度衰减曲线并列为本底监测双指标。', { size: 10.5, fill: C.sub, maxW: 620, lh: 14 })
  b.table(730, 388, 620, {
    headers: ['损伤类型', '阈值或表现', '检测手段', '对策'],
    colW: [118, 152, 140, 210],
    rowH: 24,
    fontSize: 9.5,
    rows: [
      ['二硫键断裂', '2–5 MGy', '差值密度图', '限总剂量、降通量'],
      ['金属中心失序', '数 MGy 起', '密度形状异常', '谨慎解释活性位点'],
      ['Glu/Asp 去羧', '更高剂量', '侧链密度消失', '同上'],
      ['全局强度衰减', '30 MGy 处降 30%', '逐帧强度曲线', 'collect-and-destroy'],
    ],
  })

  // ============ 四、损伤管理：逐区扫描、多晶合并与退火 ============
  b.panel(710, 562, 660, 380, { title: '四、损伤管理：逐区扫描、多晶合并与退火' })
  // collect-and-destroy
  b.rect(752, 618, 126, 78, { fill: C.proL, stroke: C.pro, sw: 2, rx: 6, fillOp: 0.5 })
  b.line(794, 618, 794, 696, { stroke: C.pro, sw: 1.2, opacity: 0.6 })
  b.line(836, 618, 836, 696, { stroke: C.pro, sw: 1.2, opacity: 0.6 })
  b.line(752, 657, 878, 657, { stroke: C.pro, sw: 1.2, opacity: 0.6 })
  b.rect(752, 618, 42, 39, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.arrow(724, 638, 770, 638, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(737, 626, '微束', { size: 9.5, weight: 700, fill: C.badD })
  b.arrow(798, 637, 830, 637, { stroke: C.enz, sw: 1.6, dash: '4 3', marker: 'enz' })
  b.ctext(880, 610, '逐区扫描', { size: 9.5, weight: 700, fill: C.enzD })
  b.wtext(726, 722, 'collect-and-destroy：高亮度微束对较大晶体逐区扫描，每个区域只承受部分剂量，靠软件拼接各楔数据；极端形态是「每晶一小楔」的多晶合并。', { size: 10.5, fill: C.sub, maxW: 300, lh: 14 })
  b.wtext(726, 764, '同等总剂量下，剂量率高低在 100 K 的损伤差异有限（自由基扩散已冻结）；室温串晶学中剂量率效应显著——XFEL「先破坏后衍射」的物理窗口。', { size: 10.5, fill: C.sub, maxW: 300, lh: 14 })
  // 多晶合并
  const mcX = [1090, 1140, 1190, 1240, 1290]
  mcX.forEach((mx) => {
    b.polygon([[mx, 621], [mx + 9, 630], [mx, 639], [mx - 9, 630]], { fill: C.bg, stroke: C.pro, sw: 1.6 })
  })
  b.ctext(1190, 660, '数十颗同条件小晶 · 每颗各收一小楔（5–10°）', { size: 9.5, fill: C.sub })
  mcX.forEach((mx, i) => {
    b.arrow(mx, 642, 1170 + (i - 2) * 16, 682, { stroke: C.faint, sw: 1.1, dash: '3 3' })
  })
  b.tag(1190, 704, '统一标定合并', { fill: C.okL, stroke: C.ok, size: 12, weight: 700, tfill: C.okD, pad: 10 })
  b.wtext(1060, 745, '多晶合并：从数十颗同条件小晶各收 5–10°，统一标定下合并、成为完整数据集；微焦点端站与自动换晶机械手使其工业化。', { size: 10.5, fill: C.sub, maxW: 290, lh: 14 })
  // 退火循环
  b.text(726, 806, '退火（annealing）', { size: 11, weight: 700, fill: C.ink })
  b.tag(850, 832, '短暂回升温度', { fill: C.warnL, stroke: C.warn, size: 12, weight: 700, tfill: C.warnD, pad: 10 })
  b.tag(1010, 832, '再冷却', { fill: C.warnL, stroke: C.warn, size: 12, weight: 700, tfill: C.warnD, pad: 10 })
  b.arrow(903, 832, 975, 832, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.path('M 1041,846 A 121 40 0 0 1 799,846', { fill: 'none', stroke: C.mute, sw: 1.6, dash: '5 4', marker: 'mute' })
  b.ctext(920, 906, '局部重溶消除晶格应力', { size: 9.5, fill: C.mute })
  b.wtext(1120, 812, '退火：冷流阻断—恢复循环，部分晶体镶嵌度可显著回落；成功率不保证但成本极低。重溶可能溶解表面、放大孪晶——宜在晶体备份到位后进行。', { size: 10.5, fill: C.sub, maxW: 230, lh: 14 })
  b.wtext(726, 926, '损伤不可逆但可预算：与其祈祷不如记账——把每颗晶体的总剂量写进数据集元数据；第 7、8 章解释活性位点（二硫键、金属中心）的电子密度时保持戒心。', { size: 10.5, fill: C.sub, maxW: 620, lh: 14 })

  // 底部收束
  b.ctext(700, 972, '低温给出时间窗，剂量决定总信息量，几何决定信息落在哪——三者在第 4 节汇合为可量化、可复盘的处理流水线', { size: 11.5, weight: 600, fill: C.mute })
}

export default scene({
  title: '低温晶体学与辐射损伤：100 K、玻璃化与剂量预算',
  subtitle: 'Teng 1990 开创 100 K 冷却、耐受剂量提高约两个数量级；甘油 15–25%、冰环 3.67/1.92 Å；Henderson 20 MGy 与实验上限 30 MGy；二硫键 2–5 MGy 先断',
  draw,
})
