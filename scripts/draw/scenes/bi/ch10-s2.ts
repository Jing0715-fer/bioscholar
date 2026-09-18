// bi ch10-s2 定量蛋白质组学（39-i 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、同量异位标签 ============
  b.panel(30, 132, 660, 420, { title: '一、iTRAQ / TMT：报告离子的同量异位设计' })
  b.ctext(125, 192, '报告基团', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(240, 192, '平衡基团', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(392, 192, '肽段', { size: 10.5, weight: 700, fill: C.sub })
  const tagColors = [C.pro, C.acc, C.rna, C.enz]
  const tagFills = [C.proL, C.accL, C.rnaL, C.enzL]
  for (let i = 0; i < 4; i++) {
    const y = 202 + i * 32
    b.rect(80, y, 90, 26, { fill: tagFills[i], stroke: tagColors[i], sw: 1.6, rx: 5 })
    b.ctext(125, y + 18, `R${126 + i}`, { size: 11, weight: 700, fill: C.ink })
    b.rect(170, y, 140, 26, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 5 })
    b.ctext(240, y + 18, '补齐质量', { size: 9.5, fill: C.mute })
    b.rect(310, y, 170, 26, { fill: C.dnaL, stroke: C.dna, sw: 1.4, rx: 5 })
  }
  b.arrow(240, 334, 165, 356, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.arrow(255, 356, 480, 356, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.text(368, 344, '碎裂', { size: 10.5, weight: 700, fill: C.enzD })
  b.line(80, 372, 250, 372, { stroke: C.sub, sw: 1.6 })
  b.line(150, 372, 150, 302, { stroke: C.pro, sw: 2.6 })
  b.circle(150, 302, 3.5, { fill: C.pro })
  b.ctext(165, 392, 'MS1：同一质量，不可区分', { size: 10.5, weight: 700, fill: C.proD })
  b.line(400, 372, 640, 372, { stroke: C.sub, sw: 1.6 })
  const rep: Array<[number, number]> = [[430, 46], [480, 66], [530, 40], [580, 84]]
  rep.forEach(([x, h], i) => {
    b.line(x, 372, x, 372 - h, { stroke: tagColors[i], sw: 2.6 })
    b.circle(x, 372 - h, 3.5, { fill: tagColors[i] })
    b.ctext(x, 392, `${126 + i}`, { size: 10, fill: C.mute })
  })
  b.ctext(540, 412, 'MS2：报告离子强度比 → 定量', { size: 10.5, weight: 700, fill: C.ink })
  b.wtext(60, 446, '多通道合并进样、互相校准提灵敏度；参照通道缝合多批次。主要代价：共洗脱干扰造成比值压缩——SPS-MS3 再碎裂是主流缓解方案。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(60, 496, '同量异位的化学魔术：MS1 不可区分，碎裂后才以报告离子现形。', { size: 11.5, fill: C.mute, maxW: 600, lh: 16 })

  // ============ 二、label-free 与 DIA ============
  b.panel(710, 132, 660, 420, { title: '二、label-free 与 DIA：不受通道数约束的两条路' })
  b.text(740, 190, 'label-free 定量', { size: 13, weight: 700, fill: C.ink })
  b.rect(740, 202, 290, 56, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8, fillOp: 0.55 })
  b.ctext(885, 226, '强度法', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(885, 246, '提取离子色谱（XIC）峰面积', { size: 10.5, fill: C.sub })
  b.rect(1050, 202, 290, 56, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8, fillOp: 0.55 })
  b.ctext(1195, 226, '谱计数法', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(1195, 246, '计数匹配到各蛋白的谱图数', { size: 10.5, fill: C.sub })
  b.wtext(740, 284, '不受通道数限制，但对重现性要求苛刻；缺失值插补与中位数归一是统计上的两大功课。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.line(730, 330, 1360, 330, { stroke: C.line, sw: 1.2, dash: '5 5' })
  b.text(740, 356, 'DIA / SWATH：数据非依赖采集', { size: 13, weight: 700, fill: C.ink })
  for (let i = 0; i < 12; i++) {
    b.rect(740 + i * 50, 372, 50, 22, { fill: i === 3 ? C.accL : '#f1f5f9', stroke: i === 3 ? C.acc : C.line, sw: i === 3 ? 1.8 : 1, rx: 3 })
  }
  b.wtext(740, 416, '把整个质量范围划成固定宽度窗口（如每 25 Da 一档），逐窗口依次碎裂、循环往复——每张二级谱都完整覆盖该窗口内全部母离子。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(740, 468, '无随机遗漏、数据可回溯重搜；代价是嵌合谱解卷积与谱图库——预测谱库使无库 DIA 渐成现实。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 三、三级工作流与绝对定量 ============
  b.panel(30, 576, 660, 404, { title: '三、三级工作流、载体通道与 AQUA 绝对定量' })
  const wf = (x: number, t: string, s: string) => {
    b.rect(x, 618, 180, 58, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8, fillOp: 0.55 })
    b.ctext(x + 90, 641, t, { size: 12.5, weight: 700, fill: C.accD })
    b.ctext(x + 90, 661, s, { size: 10.5, fill: C.sub })
  }
  wf(60, '发现 · DDA', '挑母离子碎裂')
  wf(260, '全景定量 · DIA', '窗口循环全碎')
  wf(460, '靶向验证 · MRM/PRM', '预设母离子对')
  b.arrow(240, 647, 260, 647, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(440, 647, 460, 647, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.wtext(60, 700, '发现（DDA）、全景定量（DIA）、靶向验证（MRM / PRM）构成蛋白质组学的三级工作流；载体通道以大剂量同量异位载体放大信号，支撑单细胞蛋白质组。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.text(60, 782, 'AQUA 重标肽段：绝对定量的口径', { size: 13, weight: 700, fill: C.ink })
  b.line(80, 930, 350, 930, { stroke: C.sub, sw: 1.6 })
  b.line(150, 930, 150, 878, { stroke: C.dna, sw: 2.6 })
  b.circle(150, 878, 3.5, { fill: C.dna })
  b.line(225, 930, 225, 864, { stroke: C.enz, sw: 2.6 })
  b.circle(225, 864, 3.5, { fill: C.enz })
  b.ctext(150, 948, '内源轻肽', { size: 10, fill: C.dnaD })
  b.ctext(225, 948, '重标内标', { size: 10, fill: C.enzD })
  b.wtext(380, 812, '合成同位素重标肽段作内标：与内源肽共洗脱、同步离子化——峰面积比 × 已知内标量，把靶向定量推向绝对口径。', { size: 11, fill: C.sub, maxW: 270, lh: 15 })

  // ============ 四、层间观照 ============
  b.panel(710, 576, 660, 404, { title: '四、层间观照：mRNA 与蛋白的缓冲层' })
  b.axis(760, 880, 340, 240, {
    xlabel: 'mRNA 丰度（log）',
    ylabel: '蛋白丰度（log）',
    title: '两层数据散点（示意）',
    xticks: [[0, '低'], [1, '高']],
    yticks: [[0, '低'], [1, '高']],
  })
  b.curve(760, 880, 340, 240, [[0, 0], [1, 1]], { stroke: C.faint, sw: 1.6, dash: '7 6' })
  const ma: Array<[number, number]> = [
    [0.08, 0.12], [0.15, 0.05], [0.2, 0.25], [0.25, 0.18], [0.3, 0.35], [0.35, 0.28], [0.4, 0.5],
    [0.45, 0.4], [0.5, 0.6], [0.55, 0.48], [0.6, 0.68], [0.65, 0.55], [0.7, 0.78], [0.75, 0.65],
    [0.8, 0.85], [0.85, 0.72], [0.9, 0.9], [0.93, 0.82], [0.5, 0.35], [0.75, 0.55],
  ]
  ma.forEach(([fx, fy]) => b.circle(760 + fx * 340, 880 - fy * 240, 4, { fill: C.acc, fillOp: 0.6 }))
  b.tag(880, 668, '相关 r ≈ 0.4–0.6', { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD, pad: 9 })
  b.text(1130, 656, 'mRNA 与蛋白的相关系数量级', { size: 11, fill: C.sub })
  b.text(1130, 671, '约 0.4–0.6——翻译与翻译后', { size: 11, fill: C.sub })
  b.text(1130, 686, '过程构成缓冲层。', { size: 11, fill: C.sub })
  b.wtext(1130, 736, '这层缓冲正是两层互补整合的理由：各答一问，合起来才见全貌。', { size: 11, fill: C.sub, maxW: 220, lh: 15 })
  b.ctext(930, 948, '读定量先读偏差：标签法的比值压缩、无标记法的缺失值、DIA 的嵌合谱。', { size: 11.5, weight: 600, fill: C.mute })
}

export default scene({
  title: '定量蛋白质组学：报告离子、DIA 窗口循环与三级工作流',
  subtitle: 'iTRAQ/TMT 以报告基团-平衡基团的同量异位设计在 MS1 不可区分、碎裂后以报告离子强度比定量，共洗脱干扰造成比值压缩由 SPS-MS3 缓解；DIA 把质量范围划成固定窗口（如每 25 Da 一档）循环全碎，无随机遗漏可回溯重搜；发现（DDA）、全景定量（DIA）、靶向验证（MRM/PRM）构成三级工作流；AQUA 重标肽段实现绝对定量；mRNA 与蛋白相关性约 0.4–0.6，翻译后缓冲层是两层互补整合的理由',
  draw,
})
