// em ch4-s4 低剂量成像三步与剂量预算（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三步工作流 ============
  b.panel(30, 132, 1340, 300, { title: '一、三步工作流：search – focus – expose，把剂量花在刀刃上' })
  const step = (x: number, title: string, lines: string[], tail: string, fill: string, stroke: string, tfill: string) => {
    b.rect(x, 190, 380, 150, { fill, stroke, sw: 1.8, rx: 9 })
    b.ctext(x + 190, 216, title, { size: 14, weight: 700, fill: tfill })
    lines.forEach((s, i) => b.ctext(x + 190, 240 + i * 18, s, { size: 11, fill: C.sub }))
    b.ctext(x + 190, 322, tail, { size: 10, fill: C.mute })
  }
  step(60, '① SEARCH 搜索', ['极低束流扫览载网', '剂量率 0.01–0.05 e^{-}/Å^{2}·s^{-1}', '导航总剂量 < 1 e^{-}/Å^{2}', '定位合适孔位与颗粒分布'], 'map 模式先拼整网低剂量镶嵌图', C.accL, C.acc, C.accD)
  step(480, '② FOCUS / ALIGN 对焦', ['束斑移至曝光区旁 1–2 μm 牺牲区', '对焦、像散校正、束流对中', 'defocus 预设分档：−0.5 至 −2.5 μm', 'Z 高度（欧拉高度）按孔联动'], '高剂量操作烧在注定不要的地方', C.warnL, C.warn, C.warnD)
  step(900, '③ EXPOSE 曝光', ['仅在拍摄瞬间施加满剂量', '冷冻单颗粒目标约 40–60 e^{-}/Å^{2}', '三步之间束闸关闭、偏转复位', '曝光区在全过程中只见一次电子'], '电子断层：剂量分摊至各倾角投影', C.badL, C.bad, C.badD)
  b.arrow(443, 265, 474, 265, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.arrow(863, 265, 894, 265, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  // 牺牲区示意
  b.rect(60, 352, 320, 68, { fill: 'none', stroke: C.faint, sw: 1.4, dash: '5 4', rx: 8 })
  b.ctext(220, 346, 'search 定位区（低倍）', { size: 9.5, fill: C.mute })
  b.circle(150, 386, 18, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
  b.circle(300, 386, 18, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.line(172, 386, 278, 386, { stroke: C.sub, sw: 1.6, marker: 'ink', markerStart: 'ink' })
  b.ctext(225, 372, '约 1–2 μm', { size: 10, fill: C.sub })
  b.ctext(150, 420, 'focus 牺牲区', { size: 9.5, fill: C.warnD })
  b.ctext(300, 420, 'expose 曝光区', { size: 9.5, fill: C.accD })
  b.wtext(420, 366, '低剂量源流：1975 年 Unwin–Henderson 紫膜二维晶体低剂量衍射，每张约 0.5 e^{-}/Å^{2}、多图拼合。', { size: 10.5, fill: C.sub, maxW: 430, lh: 15 })
  b.wtext(900, 366, '现代软件把三步整合为半自动网格方案：map 镶嵌 → 按孔选目标 → 自动计算 focus 偏移；「顺手先看一眼」即透支预算。', { size: 10.5, fill: C.sub, maxW: 430, lh: 15 })

  // ============ 二、总剂量预算表 ============
  b.panel(30, 456, 700, 270, { title: '二、总剂量预算（Henderson 1995：液氮温度约 20 e^{-}/Å^{2}）' })
  b.table(50, 494, 660, {
    headers: ['应用', '总剂量（e⁻/Å²）', '主要约束'],
    colW: [150, 190, 320], rowH: 36, fontSize: 12.5,
    rows: [
      ['负染筛查', '约 10–20', '染料相对耐辐照，bake 重排随剂量加剧'],
      ['冷冻单颗粒', '约 40–60', '运动校正时代的标准预算'],
      ['电子断层', '每投影 0.5–3，总 50–150', '剂量分摊于数十个倾角'],
      ['二维晶体衍射', '单图常低于 5', '晶格序最先失守，多图拼合'],
      ['室温蛋白', '个位数', '无低温抑制，损伤全速推进'],
    ],
  })

  // ============ 三、剂量分割与剂量加权 ============
  b.panel(750, 456, 620, 270, { title: '三、剂量分割（dose fractionation）与剂量加权' })
  for (let i = 0; i < 12; i++) {
    const op = 0.9 - i * 0.062
    b.rect(770 + i * 44, 500, 38, 52, { fill: C.acc, fillOp: op, stroke: C.acc, sw: 1.2, rx: 3 })
    if (i < 11) b.ctext(789 + i * 44, 570, `${i + 1}`, { size: 8.5, fill: C.mute })
  }
  b.text(1296, 572, '…', { size: 13, fill: C.mute })
  b.ctext(1030, 592, '电影 50–60 帧：每帧约 1 e^{-}/Å^{2}，总曝约 10 s（每帧 0.1–0.2 s）', { size: 10.5, fill: C.sub })
  b.tag(880, 632, '早帧 → 高频全权重', { fill: C.okL, stroke: C.ok, size: 11.5, weight: 700, tfill: C.okD, pad: 10 })
  b.tag(1130, 632, '晚帧 → 仅贡献低频', { fill: C.panelB, stroke: C.mute, size: 11.5, weight: 700, tfill: C.mute, pad: 10 })
  b.wtext(770, 668, 'Grant 与 Grigorieff（2015）：B 因子每 e^{-}/Å^{2} 增约 1–2 Å^{2}，逐帧逐频率赋权——晚帧高频不是「噪声大」，而是「结构已不在」。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.ctext(1040, 712, '计数模式以约 5–10 e^{-}/像素/秒 上限规避重合损失', { size: 10.5, fill: C.mute })

  // ============ 四、损伤时序与最优剂量 ============
  b.panel(30, 750, 1340, 228, { title: '四、损伤时序与最优剂量：信噪累积 × 损伤衰减' })
  b.axis(60, 950, 420, 150, {
    grid: false,
    xticks: [[0, '0'], [0.5, '50'], [1, '100 e^{-}/Å^{2}']],
    yticks: [[1, '1.0'], [0.5, '0.5'], [0, '0']],
  })
  b.curve(60, 950, 420, 150, [[0, 0], [0.1, 0.32], [0.2, 0.45], [0.3, 0.55], [0.4, 0.63], [0.5, 0.71], [0.6, 0.77], [0.7, 0.84], [0.8, 0.89], [0.9, 0.95], [1, 1]], { stroke: C.ok, sw: 2.2, smooth: true })
  b.curve(60, 950, 420, 150, [[0, 1], [0.1, 0.95], [0.2, 0.88], [0.3, 0.79], [0.4, 0.68], [0.5, 0.58], [0.6, 0.48], [0.7, 0.39], [0.8, 0.31], [0.9, 0.25], [1, 0.2]], { stroke: C.bad, sw: 2.2, smooth: true })
  b.curve(60, 950, 420, 150, [[0, 0], [0.1, 0.3], [0.2, 0.4], [0.3, 0.43], [0.4, 0.43], [0.5, 0.41], [0.6, 0.37], [0.7, 0.33], [0.8, 0.28], [0.9, 0.24], [1, 0.2]], { stroke: C.acc, sw: 3, smooth: true })
  b.circle(228, 885, 4.5, { fill: C.acc })
  b.tag(270, 795, '最优剂量 ≈ 40–60 e^{-}/Å^{2}', { fill: C.okL, stroke: C.ok, size: 11, weight: 700, tfill: C.okD, pad: 9 })
  b.text(320, 842, '√D 信噪累积', { size: 10, fill: C.ok })
  b.text(320, 858, 'exp(−B·D·s^{2}/4) 损伤衰减', { size: 10, fill: C.bad })
  b.text(320, 874, '乘积（中等剂量取极大）', { size: 10, fill: C.accD })
  b.text(620, 838, '损伤时序（谁先死）', { size: 13, weight: 700, fill: C.ink })
  const seq = ['高分辨衍射强度', '晶格有序下降', '化学键断裂、交联', '去羧与质量损失']
  seq.forEach((s, i) => {
    const x = 620 + i * 180
    b.rect(x, 852, 164, 48, { fill: i === 0 ? C.badL : C.panelB, stroke: i === 0 ? C.bad : C.line, sw: 1.5, rx: 7 })
    b.ctext(x + 82, 872, s, { size: 11, weight: 600, fill: i === 0 ? C.badD : C.sub })
    const sub = i === 0 ? '最先衰减' : i === 3 ? '最晚出现' : ''
    if (sub) b.ctext(x + 82, 890, sub, { size: 9, fill: C.mute })
    if (i < 3) b.arrow(x + 166, 876, x + 178, 876, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  })
  b.wtext(620, 928, 'B 因子每 e^{-}/Å^{2} 约增 1–2 Å^{2}；Grant 与 Grigorieff（2015）证明最优曝光随频率分层——「先定分辨率目标、再定剂量」，而非先拍后算。', { size: 10.5, fill: C.sub, maxW: 700, lh: 15 })
}

export default scene({
  title: '低剂量成像：search–focus–expose 与剂量预算',
  subtitle: 'search 剂量率约 0.01–0.05 e⁻/Å²·s⁻¹（总剂量 <1 e⁻/Å²）；focus 于曝光区旁 1–2 μm 牺牲区；预算：负染 10–20、单颗粒 40–60、断层每投影 0.5–3、二维衍射 <5 e⁻/Å²',
  draw,
})
