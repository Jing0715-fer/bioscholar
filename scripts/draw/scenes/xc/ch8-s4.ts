// xc ch8-s4 组合定相与自动化流程（Task 4-d）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、MR-SAD 双弱互补 ============
  b.panel(30, 132, 660, 430, { title: '一、MR-SAD：两个 60 分凑一个 90 分' })
  b.rect(56, 186, 280, 64, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(196, 210, '弱模型：MR 弱解', { size: 11.5, weight: 700, fill: C.proD })
  b.ctext(196, 232, 'TFZ 5–8（相位平均误差 60°–90°）', { size: 10, fill: C.sub })
  b.rect(366, 186, 280, 64, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 8 })
  b.ctext(506, 210, '弱反常：Bijvoet 差异', { size: 11.5, weight: 700, fill: C.enzD })
  b.ctext(506, 232, '3%–5%（SeMet 或含硫体系）', { size: 10, fill: C.sub })
  b.arrow(196, 250, 300, 282, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(506, 250, 400, 282, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(156, 286, 390, 62, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(351, 308, '反常差值图：(|F_{+}|−|F_{−}|)·exp(iφ_{model})', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(351, 330, '模型相位把重原子位点直接点亮，无需 Patterson 峰海解读', { size: 10, fill: C.sub })
  b.arrow(351, 348, 351, 366, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.rect(156, 370, 390, 62, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(351, 392, '位点定位后 SAD 定相，与模型相位组合', { size: 11.5, weight: 700, fill: C.okD })
  b.ctext(351, 414, '一轮密度修饰后常一跃到可解读', { size: 10, fill: C.sub })
  b.wtext(56, 460, '经验阈值：模型相位平均误差 60°–90° 配 3%–5% 的 Bijvoet 差异，是最典型的双弱组合区；任一边过弱（相位误差大于 100°、或反常信噪不足）都救不动。适配场景：SeMet 标记但位点少信号弱、含硫蛋白配 MR 弱解、金属蛋白配远缘模型。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(56, 522, '反向的组合同样成立：SAD 相位帮助 MR 排除假解（反常位点与模型中 Met、金属位置的互证），定相与验证一体两面。同一颗衍生物上置换差异与 Bijvoet 差异亦可叠加（SIRAS）——组合定相谱系里最早的一员。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 二、高 NCS 病毒三段式 ============
  b.panel(710, 132, 660, 430, { title: '二、高 NCS 的病毒三段式：弱相位洗成强图' })
  const stage = (x: number, y: number, w: number, h: number, t: string, s: string, stroke: string, fill: string) => {
    b.rect(x, y, w, h, { fill, stroke, sw: 1.8, rx: 8 })
    b.ctext(x + w / 2, y + 22, t, { size: 11.5, weight: 700, fill: C.ink })
    b.wtext(x + w / 2, y + 44, s, { size: 9.5, fill: C.sub, maxW: w - 30, lh: 13, anchor: 'middle' })
  }
  stage(730, 186, 190, 92, '① 弱 MR 定骨架', '粗模型（同源外壳蛋白或预测模型）先定取向与位置', C.pro, C.proL)
  stage(940, 186, 190, 92, '② 二十面体平均', '数十倍级 NCS 平均接管相位，1/√n 把弱相位洗成强图', C.dna, C.dnaL)
  stage(1150, 186, 190, 92, '③ 相位延伸', '逐壳层推高分辨率，每步以平均约束作抵押', C.acc, C.accL)
  b.arrow(922, 232, 938, 232, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(1132, 232, 1148, 232, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  // 分辨率推进条
  b.rect(730, 316, 610, 34, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 17 })
  b.rect(730, 316, 610 * 0.45, 34, { fill: C.okL, stroke: C.ok, sw: 1.4, rx: 17 })
  b.ctext(730 + 610 * 0.225, 337, '3.5–4 Å 起步', { size: 10.5, weight: 700, fill: C.okD })
  b.ctext(730 + 610 * 0.72, 337, '推进到 2.5–3 Å 可用区', { size: 10.5, weight: 700, fill: C.sub })
  b.arrow(730 + 610 * 0.45, 333, 730 + 610 * 0.5, 333, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.wtext(730, 382, '两个早期坐标供凭吊：1985 年的人鼻病毒 14 与脊髓灰质炎病毒分别在 3.5 Å 与 2.9 Å 上完成，靠的正是五重平均加相位延伸——低分辨率起步、高倍平均、逐层延伸，三招齐下。这一范式贯穿细小病毒、杯状病毒直到近年巨型组装体。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 452, '含硫与 SeMet SAD 同高 NCS 的组合同样经典——反常差异虽小，但平均后的小信号依然坚挺（信号相关、噪声独立的逻辑对反常同样成立）。病毒与大型组装体是组合定相的秀场：分子量大、拷贝多、分辨率常中庸（3–4 Å），但非晶体对称倍数惊人。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 三、自动流水线 ============
  b.panel(30, 572, 660, 390, { title: '三、自动流水线：autoSHARP 编队与 SHELX 双算法' })
  const pl = (x: number, t: string, s: string, stroke: string, fill: string) => {
    b.rect(x, 618, 116, 58, { fill, stroke, sw: 1.6, rx: 7 })
    b.ctext(x + 58, 640, t, { size: 10.5, weight: 700, fill: C.ink })
    b.wtext(x + 58, 656, s, { size: 8.5, fill: C.sub, maxW: 104, lh: 11, anchor: 'middle' })
  }
  pl(56, 'MTZ 数据', '还原数据输入', C.sub, C.panelB)
  pl(188, 'SHELXD', '双算法搜位点', C.enz, C.enzL)
  pl(320, 'SHARP', '精修占有率与 B', C.acc, C.accL)
  pl(452, 'Solomon／DM', '密度修饰', C.dna, C.dnaL)
  pl(584, 'ARP/wARP', '自动建模收尾', C.pro, C.proL)
  b.arrow(172, 647, 186, 647, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.arrow(304, 647, 318, 647, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.arrow(436, 647, 450, 647, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.arrow(568, 647, 582, 647, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.wtext(56, 700, 'SHELXD 细节值得记：对重原子亚结构同时跑 Patterson 解读与直接法（shake-and-bake 式交替迭代），以 CC_{all} 与 CC_{weak} 判位点真伪——常用口径是 CC_{weak} 显著高于噪声带（约 30% 起判真）、且位点数与期望相符；假解的特征是相关系数高而位点数飘忽。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.table(56, 772, 616, {
    headers: ['工具', '定位', '强项'],
    colW: [150, 190, 276],
    rowH: 26,
    fontSize: 10,
    rows: [
      ['SHELXC/D/E', '子结构定位与定相', 'SHELXD 双算法搜位点，SHELXE 密度修饰'],
      ['autoSHARP', '全流程', '重原子搜索、定相、修饰、建模一条龙'],
      ['CRANK2', '闭环自动化', '定相、修饰、建模、验证闭环迭代'],
      ['phenix AutoSol', '全流程', 'SAD／MAD 决策树内置'],
    ],
  })
  b.wtext(56, 902, 'SHELXE 的杀手锏：以重原子为光源的「密度阴影」判手性，含硫 SAD 的手性二义常由它一锤定音；还能把修饰后的密度峰值转成伪原子再计算结构因子——低分辨率数据的定相常靠这招起死回生。', { size: 10, fill: C.mute, maxW: 616, lh: 14 })

  // ============ 四、结果判据与失败模式 ============
  b.panel(710, 572, 660, 390, { title: '四、三级判据、失败模式与低分辨率对策' })
  b.text(730, 620, '判「定相成功」的三级证据（成本递增的分诊次序）：', { size: 11, weight: 700, fill: C.ink })
  const ev = (y: number, t: string, s: string, cost: string, stroke: string, fill: string) => {
    b.rect(730, y, 300, 52, { fill, stroke, sw: 1.6, rx: 7 })
    b.text(746, y + 21, t, { size: 10.5, weight: 700, fill: C.ink })
    b.wtext(746, y + 38, s, { size: 9.5, fill: C.sub, maxW: 272, lh: 12.5 })
    b.ctext(1090, y + 24, cost, { size: 10, weight: 700, fill: C.mute })
  }
  ev(636, '① 重原子位点一致性', '不同方法、不同晶体独立解出的位点吻合，Met 与金属位置和生物学先验互证', '最便宜', C.ok, C.okL)
  ev(694, '② 图可读性', '主链可追踪、二级结构成形、溶剂区平坦', '半自动', C.acc, C.accL)
  ev(752, '③ 自动建模覆盖率', 'CRANK2 或 ARP/wARP 能自动搭出与序列对得上的片段（第 9 章）', '最贵但最诚实', C.pro, C.proL)
  b.wtext(1064, 636, '失败模式谱：非同晶（系统差异压过信号）；亚结构部分占据（occupancy 低于 1 使 |F_{H}| 估计偏差）；辐射损伤还原重原子（X 射线把 Hg^{2+} 还原、位点漂移或消失）；数据处理吞噬反常信号（过度缩放或吸收修正抹平 Bijvoet 差）。', { size: 10, fill: C.sub, maxW: 286, lh: 14 })
  b.wtext(1064, 728, '鉴别一法：分批次看重原子差值峰强度随帧序的走势——正常位点平稳，被还原的位点前段强后段弱；重跑定相时截取前段数据常即治愈。', { size: 10, fill: C.sub, maxW: 286, lh: 14 })
  b.wtext(730, 830, '低于 3.5 Å：直方图先验钝化、溶剂边界模糊、位点不再锋利——优先 NCS 平均（先验最强、不依赖分辨率）、分阶段延伸（先在 4 Å 内站稳）、容忍「粗图加强约束精修」共处。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 892, '绝望线：分辨率低于约 4.5–5 Å 时溶剂边界难以界定、直方图先验失效，活路只剩高 NCS 平均与生物先验（同源模型的刚性段），或改投电子显微镜（第 12 章）。人工介入原则：流水线每一步都有产出可查，介入越早损失越小。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })
}

export default scene({
  title: '组合定相与自动化流程',
  subtitle: 'MR-SAD：相位误差 60–90° 配 3–5% Bijvoet 的双弱组合区；病毒三段式（弱 MR、二十面体平均、延伸）；SHELXD 以 CC_weak 约 30% 起判真；三级判据位点一致性、图可读性、自动建模覆盖率',
  draw,
})
