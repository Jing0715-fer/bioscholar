// sb ch12-s1 结构验证与数据库提交（Task SB-4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、OneDep 投递流程 ============
  b.panel(30, 132, 1340, 260, { title: '一、OneDep 投递：三类方法各交各的账' })
  const steps: Array<[string, string]> = [
    ['① 上传', '坐标与实验数据'],
    ['② 自动验证', '验证报告即时生成'],
    ['③ 人工注释', 'biocuration 逐条核对'],
    ['④ 编号签发', 'PDB 编号一条龙'],
    ['⑤ 持有/释放', '与论文同步释放'],
  ]
  steps.forEach(([t, s], i) => {
    const x = 60 + i * 260
    b.rect(x, 160, 220, 46, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 8 })
    b.ctext(x + 110, 178, t, { size: 12.5, weight: 700, fill: C.accD })
    b.ctext(x + 110, 197, s, { size: 9.5, fill: C.sub })
    if (i < 4) b.arrow(x + 224, 183, x + 256, 183, { stroke: C.acc, sw: 2, marker: 'acc' })
  })
  const methods: Array<[string, string, string, string, string]> = [
    ['X 射线', '坐标 + 结构因子', 'mmCIF 反射文件使任何人都能重算 R 因子；缺结构因子的坐标在现代已不可发表。', C.dna],
    ['冷冻电镜', '坐标 + 密度图', 'PDB 与 EMDB 双库互链；挑选与精修所用微图或粒子栈按惯例存入 EMPIAR。', C.pro],
    ['NMR', '系综坐标 + 约束', '化学位移归 BMRB；注释员逐条核对序列、命名与引用——配体命名最常被打回。', C.rna],
  ]
  methods.forEach(([t, deliver, note, c], i) => {
    const x = 60 + i * 440
    b.rect(x, 218, 420, 156, { fill: C.panelB, stroke: c, sw: 1.5, rx: 9 })
    b.rect(x, 218, 420, 34, { fill: c, fillOp: 0.16, stroke: 'none', rx: 9 })
    b.ctext(x + 210, 240, `${t}：${deliver}`, { size: 13, weight: 700, fill: c })
    b.wtext(x + 18, 276, note, { size: 10.5, fill: C.sub, maxW: 385, lh: 15 })
    b.ctext(x + 210, 352, ['衍射图归同步辐射图像库', '原始电影入 EMPIAR', '处理参数随方法学公开'][i], { size: 10, weight: 600, fill: C.mute })
  })

  // ============ 二、验证报告 ============
  b.panel(30, 412, 660, 280, { title: '二、验证报告：几何与密度两条线一起读' })
  const rep: Array<[string, string, string, string]> = [
    ['clashscore', '2.1', '第 94 百分位', C.ok],
    ['Ramachandran 优势区', '98.6%', '应大于 98%', C.ok],
    ['Ramachandran 离区', '0.12%', '宜小于 0.2%', C.ok],
    ['Rwork / Rfree', '0.19 / 0.24', '密度线（X 射线）', C.ok],
    ['侧链转角离群', '1.9%', '第 8 百分位', C.bad],
  ]
  b.text(70, 466, '指标', { size: 11, weight: 700, fill: C.mute })
  b.text(300, 466, '读数', { size: 11, weight: 700, fill: C.mute })
  b.text(400, 466, '同分辨率档对比', { size: 11, weight: 700, fill: C.mute })
  b.text(600, 466, '档', { size: 11, weight: 700, fill: C.mute })
  b.line(60, 474, 670, 474, { stroke: C.line, sw: 1.2 })
  rep.forEach(([name, val, pct, c], i) => {
    const y = 496 + i * 30
    b.text(70, y, name, { size: 11, weight: 600, fill: C.ink })
    b.text(300, y, val, { size: 11, fill: C.sub })
    b.text(400, y, pct, { size: 11, fill: C.sub })
    b.rect(590, y - 12, 44, 18, { fill: c === C.ok ? C.okL : C.badL, stroke: c, sw: 1.3, rx: 9 })
    b.ctext(612, y + 1, c === C.ok ? '绿' : '红', { size: 10.5, weight: 700, fill: c })
  })
  b.wtext(60, 656, 'clashscore：每 1000 原子中重叠不小于 0.4 Å 的冲突数（Chen 等 2010）；多数指标附百分位，红黄绿三色分档——红色项即返工清单。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })
  b.wtext(60, 682, '两条线可背离：几何漂亮而密度残差高，多半「自说自话」精修过头；密度贴而几何糟，常是构象硬塞进噪声。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })

  // ============ 三、投稿自查四类 ============
  b.panel(710, 412, 660, 280, { title: '三、投稿前自查：四类机器看不见的语义错误' })
  const checks: Array<[string, string, number, number, number, number]> = [
    ['序列一致', 'SEQRES 与坐标残基对应；纯化标签是否已切、引入突变如实标注；未建模区段声明为「未观测」而非抹去编号。', 730, 462, 310, 108],
    ['配体化学', '键级、环的平面性、质子化状态与化学组分字典一致；新配体先提交字典，再以理想几何限制参与精修。', 1050, 462, 300, 108],
    ['金属配位', 'Mg 至配位氧约 2.0–2.2 Å 六配位八面体；Zn 与 His/Asp 约 2.0–2.3 Å；五配位镁多半是「水冒充镁」。', 730, 582, 310, 100],
    ['occupancy', '双构象侧链成对建模、占据率之和合理；无差别把水设为 1.0，高分辨数据里可被密度直接否决。', 1050, 582, 300, 100],
  ]
  for (const [t, s, x, y, w, h] of checks) {
    b.rect(x, y, w, h, { fill: C.warnL, stroke: C.warn, sw: 1.3, rx: 8, fillOp: 0.4 })
    b.text(x + 14, y + 22, t, { size: 12, weight: 700, fill: C.warnD })
    b.wtext(x + 14, y + 42, s, { size: 10, fill: C.sub, maxW: w - 26, lh: 14 })
  }
  b.ctext(1040, 678, '另有有序水清点：优于 1.8 Å 时经验上约每残基一枚量级', { size: 10, weight: 600, fill: C.mute })

  // ============ 四、PDB_REDO 与可重复性 ============
  b.panel(30, 712, 1340, 190, { title: '四、PDB_REDO 与可重复性：存量里的免费精度红利' })
  const rx = (v: number) => 90 + ((v - 0.21) / 0.035) * 280
  b.line(90, 800, 380, 800, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  for (const v of [0.21, 0.22, 0.23, 0.24]) {
    b.line(rx(v), 800, rx(v), 806, { stroke: C.sub, sw: 1.4 })
    b.ctext(rx(v), 820, v.toFixed(2), { size: 9.5, fill: C.mute })
  }
  b.circle(rx(0.238), 776, 6, { fill: C.bad })
  b.ctext(rx(0.238), 762, '再精修前 0.238', { size: 10, weight: 700, fill: C.bad })
  b.circle(rx(0.218), 776, 6, { fill: C.ok })
  b.ctext(rx(0.218), 744, '再精修后 0.218', { size: 10, weight: 700, fill: C.okD })
  b.arrow(rx(0.238) - 10, 776, rx(0.218) + 10, 776, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.ctext((rx(0.238) + rx(0.218)) / 2, 796, '平均 Rfree 降约 2 个百分点', { size: 10.5, weight: 700, fill: C.accD })
  b.wtext(60, 848, 'PDB_REDO（Joosten、Vriend 等 2009 年起）以当代协议批量再精修存量条目：各向异性 B 因子、占据率再估、优化的权重日程——已处理数万条，几何同步改善。', { size: 10, fill: C.sub, maxW: 400, lh: 14 })
  b.wtext(60, 884, '个体启示：定稿前过一遍线上服务，常白捡半个到一个百分点的 Rfree。', { size: 10, fill: C.sub, maxW: 400, lh: 14 })
  // 归档三动因
  b.rect(520, 740, 830, 148, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(538, 764, '原始数据存档的三重动因', { size: 12.5, weight: 700, fill: C.ink })
  const motiv: Array<[string, string]> = [
    ['再分析', '十年后以新算法重处理旧数据仍可收获精度'],
    ['纠错', '可疑结构可被独立复核，验证体系因此有牙齿'],
    ['AI 训练', '今天归档的衍射图与电影就是明天的训练集'],
  ]
  motiv.forEach(([t, s], i) => {
    const y = 790 + i * 30
    b.tag(578, y, t, { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 8 })
    b.text(650, y + 4, s, { size: 10.5, fill: C.sub })
  })
  b.ctext(700, 934, '验证贯穿全程、投稿只是最后一站——红字项只有「修复」与「解释」两条出路，沉默是最差的选项', { size: 11, weight: 600, fill: C.mute })
}

export default scene({
  title: '结构验证与数据库提交：wwPDB 质检单与 OneDep 投递',
  subtitle: 'clashscore：每 1000 原子中重叠不小于 0.4 Å 的冲突数；Ramachandran 优势区应大于 98%；PDB_REDO 使平均 Rfree 降约 2 个百分点',
  draw,
})
