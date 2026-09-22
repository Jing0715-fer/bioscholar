// sb ch9-s3 单颗粒数据收集（Task SB-3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、低剂量三步 ============
  b.panel(30, 132, 660, 320, { title: '一、低剂量三步：search · focus · expose' })
  const steps: Array<[string, string, string, string]> = [
    ['search 侦察', '0.01–0.05 e^{-}/Å^{2}', '低倍离轴快扫定位合格孔；看过的区域即报废，不再正式曝光', C.acc],
    ['focus 对焦', '约 0.1 e^{-}/Å^{2}', '对焦与消像散在目标孔旁的空白区完成，束偏转把校正搬回正区', C.pro],
    ['expose 曝光', '40–60 e^{-}/Å^{2}', '一切就绪后才对目标孔正式曝光，剂量预算一次用完并记录电影', C.bad],
  ]
  let sx = 56
  for (const [t, dose, desc, c] of steps) {
    b.rect(sx, 178, 186, 118, { fill: `${c}14`, stroke: c, sw: 1.6, rx: 8 })
    b.ctext(sx + 93, 200, t, { size: 12, weight: 700, fill: c })
    b.ctext(sx + 93, 222, dose, { size: 11, weight: 700, fill: C.ink })
    b.wtext(sx + 12, 246, desc, { size: 9.5, fill: C.sub, maxW: 162, lh: 13.5 })
    if (sx < 460) b.arrow(sx + 188, 237, sx + 204, 237, { stroke: C.mute, sw: 1.8, marker: 'ink' })
    sx += 206
  }
  // 剂量账横条（0–60 e-/Å²，每单位 9 px）
  b.text(70, 334, '预曝光约 1–2 e^{-}/Å^{2}（总量百分之几）', { size: 9.5, weight: 600, fill: C.warnD })
  b.tag(470, 328, '常规 40–60 e^{-}/Å^{2}', { fill: C.accL, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 7 })
  b.rect(70, 340, 18, 20, { fill: C.warn, stroke: 'none' })
  b.rect(88, 340, 432, 20, { fill: C.acc, stroke: 'none' })
  b.ctext(304, 354, '正式曝光（expose）', { size: 10, weight: 700, fill: '#ffffff' })
  for (let v = 0; v <= 60; v += 10) {
    const tx = 70 + v * 9
    b.line(tx, 360, tx, 366, { stroke: C.sub, sw: 1.4 })
    b.ctext(tx, 378, String(v), { size: 9, fill: C.mute })
  }
  b.ctext(340, 396, '累积剂量（e^{-}/Å^{2}）', { size: 9.5, fill: C.sub })
  b.wtext(56, 416, '先侦察、再校正、后打击——与第 6 章 collect-and-destroy 一脉相承；逐孔剂量记录进入元数据台账，供第 10 章剂量加权使用。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // ============ 二、剂量分级与电子计数 ============
  b.panel(710, 132, 660, 320, { title: '二、剂量分级电影与直接电子探测' })
  b.ctext(990, 170, '一部「电影」：总剂量 40–60 e^{-}/Å^{2} 切成 50–60 帧', { size: 11, weight: 600, fill: C.ink })
  // 帧条（示意 10 帧，颗粒随束致运动逐帧位移）
  const dots: Array<[number, number]> = [[14, 16], [27, 28], [9, 30]]
  for (let i = 0; i < 10; i++) {
    const fx = 740 + i * 49
    b.rect(fx, 180, 42, 44, { fill: i % 2 === 0 ? C.bg : C.panelB, stroke: C.faint, sw: 1.2, rx: 3 })
    const dx = 2.6 * Math.sin(i * 0.9), dy = 2.0 * Math.cos(i * 0.7)
    for (const [bx, by] of dots) b.circle(fx + bx + dx, 180 + by + dy, 2.3, { fill: C.acc, stroke: 'none' })
  }
  b.ctext(990, 238, '示意前 10 帧（全程 50–60 帧）', { size: 9, fill: C.mute })
  b.wtext(730, 254, '每帧剂量低、帧间位移小，事后逐帧对齐再叠加——既保总信号又追回运动模糊（运动校正，第 10 章第 1 节）。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })
  // counting 与重合损失
  b.text(730, 284, 'counting：单电子逐一计数', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(740, 294, 56, 56, { fill: C.bg, stroke: C.sub, sw: 1.6 })
  b.line(768, 294, 768, 350, { stroke: C.faint, sw: 1 })
  b.line(740, 322, 796, 322, { stroke: C.faint, sw: 1 })
  b.circle(754, 306, 4, { fill: C.acc, stroke: 'none' })
  b.circle(782, 334, 4, { fill: C.acc, stroke: 'none' })
  b.ctext(768, 366, '分立事件：计数 2', { size: 9, fill: C.sub })
  b.rect(824, 294, 56, 56, { fill: C.bg, stroke: C.sub, sw: 1.6 })
  b.line(852, 294, 852, 350, { stroke: C.faint, sw: 1 })
  b.line(824, 322, 880, 322, { stroke: C.faint, sw: 1 })
  b.circle(838, 307, 5.5, { fill: C.warn, stroke: 'none' })
  b.circle(843, 311, 4, { fill: C.warn, fillOp: 0.65, stroke: 'none' })
  b.ctext(852, 366, '重合损失：计数 1', { size: 9, fill: C.warnD })
  b.wtext(900, 298, 'K2/K3 与 Falcon 以 counting 模式工作，DQE 较闪烁体耦合 CCD 约翻倍；剂量率须控在约 5–10 e^{-}/像素/秒——再高则两电子同落一像素被并成一个，强度与噪声统计双双失真。', { size: 9.5, fill: C.sub, maxW: 440, lh: 13 })
  b.wtext(730, 388, '曝光反推：目标 50 e^{-}/Å^{2}、像素 1 Å、剂量率 8 e^{-}/像素/秒，曝光约 6 秒；切成 50 帧即每帧约 0.1 秒——相机帧率下限与电影帧数上限同时锁定。能量过滤以零损失峰加 10–20 eV 狭缝剔除非弹性散射，厚冰信噪比与 CTF 拟合双双改善。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })
  b.wtext(730, 430, 'Li 等 2013 年演示电子计数加运动校正把单颗粒分辨率推入近原子区，Kühlbrandt 随之命名「分辨率革命」——硬件是它的第一推动力。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // ============ 三、像素、Nyquist 与 defocus 计划 ============
  b.panel(30, 472, 660, 400, { title: '三、像素、Nyquist 与 defocus 计划' })
  b.ctext(205, 500, 'Nyquist 极限＝2×像素尺寸', { size: 11, weight: 700, fill: C.ink })
  b.bars(80, 640, 250, 130, [1.2, 1.6, 2.0, 2.2], {
    labels: ['0.6', '0.8', '1.0', '1.1'], vlabels: ['1.2 Å', '1.6 Å', '2.0 Å', '2.2 Å'],
    max: 2.6, fill: C.accL, stroke: C.acc,
  })
  b.ctext(205, 684, '像素尺寸（Å/像素）', { size: 9.5, fill: C.sub })
  b.wtext(60, 704, '目标 2 Å 至少 1.0 Å/像素采样，留处理余量取 0.8–0.9；过细采样浪费视场与剂量。常规区间 0.6–1.1 Å/像素。', { size: 9.5, fill: C.sub, maxW: 270, lh: 13 })
  // defocus 零点互补（频率线性：s 0.02–0.2 对应 50–5 Å）
  b.ctext(530, 500, 'defocus 梯度与零点互补（300 kV）', { size: 11, weight: 700, fill: C.ink })
  const seg = (y: number, x1: number, x2: number, c: string) => b.rect(x1, y, x2 - x1, 18, { fill: c, stroke: 'none' })
  b.text(424, 542, '−1.5 μm 档', { size: 10, weight: 600, fill: C.accD, anchor: 'end' })
  seg(534, 430, 469, C.acc); seg(534, 483, 645, C.acc)
  b.ctext(476, 528, '17 Å', { size: 8.5, weight: 700, fill: C.accD })
  b.text(424, 580, '−2.5 μm 档', { size: 10, weight: 600, fill: C.proD, anchor: 'end' })
  seg(572, 430, 453, C.pro); seg(572, 467, 645, C.pro)
  b.ctext(460, 564, '22 Å', { size: 8.5, weight: 700, fill: C.proD })
  b.text(424, 618, '两档合并', { size: 10, weight: 600, fill: C.okD, anchor: 'end' })
  seg(610, 430, 645, C.ok)
  b.line(430, 632, 645, 632, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  const fticks: Array<[number, string]> = [[50, '50'], [25, '25'], [12.5, '12.5'], [8, '8'], [5, '5']]
  for (const [d, lab] of fticks) {
    const f = (1 / d - 0.02) / 0.18
    const tx = 430 + f * 215
    b.line(tx, 632, tx, 637, { stroke: C.sub, sw: 1.4 })
    b.ctext(tx, 649, lab, { size: 8.5, fill: C.mute })
  }
  b.ctext(537, 668, '分辨率（Å，频率线性）', { size: 9.5, fill: C.sub })
  b.wtext(360, 690, '第一零点约为 1/√(λ·Δf)：−1.5 μm 档约 17 Å、−2.5 μm 档约 22 Å——两档各自「失明」的频段不同，合并后互补，第 10 章 CTF 校正才有材料。', { size: 9.5, fill: C.sub, maxW: 285, lh: 13 })
  b.wtext(56, 740, '浅离焦高分辨好但衬度弱、深离焦衬度强但零点抹频段，按孔序轮转离焦档避免整批「同生共死」。离焦深浅与分子量挂钩：小分子量蛋白常取 −2 至 −3 μm 保衬度；大于 500 kDa 的大复合物取 −0.8 至 −1.5 μm 保高频；相位板以固定相位差替代离焦，允浅离焦高信噪。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // ============ 四、自动化收集与参数速查 ============
  b.panel(710, 472, 660, 400, { title: '四、自动化收集与参数速查' })
  b.text(730, 512, 'EPU（赛默飞）', { size: 11, weight: 700, fill: C.accD })
  b.wtext(845, 512, '模板化单颗粒：图形化圈孔、按模板自动执行，学习曲线平缓', { size: 9.5, fill: C.sub, maxW: 500, lh: 13 })
  b.text(730, 538, 'SerialEM', { size: 11, weight: 700, fill: C.proD })
  b.wtext(815, 538, '脚本见长：组收集一次校正服务相邻数孔、多孔模式束偏转多点曝光，兼顾断层', { size: 9.5, fill: C.sub, maxW: 530, lh: 13 })
  b.tag(940, 568, 'K3 + Falcon4 加多孔模式：每小时千张量级', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 8 })
  b.wtext(730, 592, '单孔模式逐孔校正最稳但通量垫底；组收集通量翻数倍、多孔模式再上台阶，代价是边缘孔额外像散；束致运动或漂移超阈值的孔当场弃曝。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })
  b.table(730, 614, 620, {
    headers: ['参数', '常规范围', '决定因素'],
    colW: [140, 230, 250],
    rowH: 28,
    fontSize: 10,
    rows: [
      ['总剂量', '40–60 e^{-}/Å^{2}', '样品辐射敏感性'],
      ['电影帧数', '50–60 帧', '束致运动校正需求'],
      ['像素大小', '0.6–1.1 Å/像素', '目标分辨率 Nyquist 预算'],
      ['defocus', '−0.5 至 −3 μm 梯度', '衬度与 CTF 零点互补'],
      ['剂量率', '5–10 e^{-}/像素/秒', 'counting 重合损失上限'],
      ['能量过滤狭缝', '10–20 eV', '剔非弹性散射、通量折衷'],
      ['通量', '数百至千张/小时', '自动化与相机读出'],
    ],
  })

  // 底部收束
  b.ctext(700, 940, '收集不是拍照，是给算法生产原料——电影供运动校正、多档 defocus 供 CTF 互补、通量供颗粒预算', { size: 12, weight: 600, fill: C.mute })
}

export default scene({
  title: '单颗粒数据收集：低剂量三步与电影式曝光',
  subtitle: 'search 0.01–0.05、focus 约 0.1、expose 40–60 e^{-}/Å^{2}；总剂量切 50–60 帧电影；counting 5–10 e^{-}/像素/秒；Nyquist＝2×像素；defocus −0.5 至 −3 μm、零点 17/22 Å 互补',
  draw,
})
