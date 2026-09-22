// em ch8-s4 均匀化精修与后处理（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、金标准精修与过拟合检验 ============
  b.panel(30, 132, 660, 412, { title: '一、金标准精修：过拟合的防线' })
  b.rect(60, 180, 130, 40, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 7 })
  b.ctext(125, 204, '颗粒库（随机对半）', { size: 10.5, weight: 700, fill: C.sub })
  b.arrow(105, 224, 85, 256, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.arrow(145, 224, 165, 256, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  // 两个半图循环
  const half = (x: number, fill: string, stroke: string, tfill: string, label: string) => {
    b.rect(x, 260, 150, 118, { fill, stroke, sw: 1.8, rx: 10 })
    b.ctext(x + 75, 284, label, { size: 11.5, weight: 700, fill: tfill })
    b.ellipse(x + 75, 330, 34, 26, { fill: '#ffffff', stroke, sw: 2 })
    b.text(x + 75, 362, '独立参考 · 独立迭代', { size: 9.5, fill: C.mute, anchor: 'middle' })
  }
  half(40, C.accL, C.acc, C.accD, '半图 A')
  half(210, C.proL, C.pro, C.proD, '半图 B')
  b.arrow(190, 319, 210, 319, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(200, 300, 'FSC', { size: 10, weight: 700, fill: C.badD })
  b.tag(200, 408, '半图间 FSC 以 0.143 报告分辨率（Scheres 2012）', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 9 })
  b.wtext(400, 196, '两半独立演化：任何一半的过拟合都不会被另一半承认。精修循环本身是取向、位移与参考的联合最大后验估计；角度局部化搜索与参考低通约束，防高频噪声混入参考。', { size: 10.5, fill: C.sub, maxW: 270, lh: 15 })
  // 高频噪声替代检验
  b.rect(400, 286, 270, 96, { fill: '#ffffff', stroke: C.sub, sw: 1.6, rx: 8 })
  b.ctext(535, 308, '高频噪声替代检验（Scheres 与 Chen 2013）', { size: 10.5, weight: 700, fill: C.ink })
  b.text(418, 330, '把两半数据的高频替换为噪声再跑流程：', { size: 9.5, fill: C.sub })
  b.text(418, 352, '分辨率若不跌——原高频「信号」本是拟合的幽灵', { size: 9.5, fill: C.badD })
  b.text(418, 372, '该检验已并入多个程序的报告项', { size: 9.5, fill: C.mute })
  b.tag(340, 470, '半图与 mask 修正 FSC 为 EMDB 投稿硬标准', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.ctext(350, 520, '金标准只防过拟合，不修坏数据——微图与颗粒库的质量仍是上限', { size: 10, fill: C.mute })

  // ============ 二、逐颗粒的物理精修 ============
  b.panel(710, 132, 660, 412, { title: '二、逐颗粒的物理精修：抛光与像差' })
  // 贝叶斯抛光
  b.text(730, 184, '贝叶斯抛光（Zivanov 2019）：', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(730, 198, 300, 66, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  for (let i = 0; i < 7; i++) {
    b.rect(742 + i * 40, 212, 32, 38, { fill: '#ffffff', stroke: C.line, sw: 1.1 })
    b.circle(758 + i * 40 + Math.sin(i) * 6, 231, 4.5, { fill: C.accD })
  }
  b.polyline([[758, 214], [798, 244], [838, 222], [878, 240], [918, 218], [958, 238]], { stroke: C.enz, sw: 1.6, dash: '4 3' })
  b.text(730, 284, '以概率模型描述每个颗粒的轨迹（全局加局部、含速度平滑先验），把电影帧按后验最优加权再平均——等效于给每个颗粒量身定制的运动校正。', { size: 10, fill: C.sub })
  // 逐颗粒 CTF 与高阶像差
  b.text(730, 330, '逐颗粒 CTF 与高阶像差精修（Zivanov 等 2020）：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(790, 360, '逐颗粒重估欠焦（网格箔面弯曲，同图可差数十纳米）', { fill: C.proL, stroke: C.pro, size: 10, tfill: C.proD, pad: 8 })
  b.tag(1170, 360, '束倾 · 球差 · 箔面曲率', { fill: C.proL, stroke: C.pro, size: 10, tfill: C.proD, pad: 8 })
  b.wtext(730, 392, '对 2 Å 以内的目标，这些「二级参数」升级为一级瓶颈——误差不除，图谱系统性发糊。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })
  b.tag(880, 428, '局部聚焦精修：mask 内重估取向，救回柔性子结构', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 9 })
  b.ctext(1040, 520, '物理参数精修与贝叶斯框架互补：一个修「样品怎么动」，一个修「光怎么弯」', { size: 10, fill: C.mute })

  // ============ 三、多刚体分解 ============
  b.panel(30, 572, 660, 398, { title: '三、multi-body 精修：分刚体、拼系综' })
  // 整体复合物拆两刚体
  b.ellipse(200, 688, 78, 60, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.path('M 200,632 A 78,60 0 0 0 200,744', { fill: 'none', stroke: C.sub, sw: 1.6, dash: '5 4' })
  b.ellipse(170, 688, 40, 44, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ellipse(232, 688, 32, 36, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(170, 690, '刚体 1', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(232, 690, '刚体 2', { size: 10.5, weight: 700, fill: C.proD })
  b.arrow(150, 660, 120, 636, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.arrow(250, 716, 280, 740, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.ctext(200, 772, '如核糖体大小亚基、聚合酶模块', { size: 9.5, fill: C.mute })
  b.wtext(330, 630, 'multi-body 精修（Nakane 2018）：把复合物拆成若干刚体，每个刚体独立精修取向与平移，再拼回整体——既提升各刚体内的分辨率，又给出刚体间相对运动的系综。', { size: 10.5, fill: C.sub, maxW: 330, lh: 15 })
  // PCA 相对运动曲线
  const ax = 360, ay = 800, aw = 290, ah = 120
  b.axis(ax, ay, aw, ah, {
    grid: false,
    xticks: [[0, '0'], [1, '颗粒序号']],
    yticks: [[0.5, '+σ'], [0.0, '0'], [0.95, '−σ']],
    title: '主成分分析提取相对运动（PC1）',
  })
  b.curve(ax, ay, aw, ah, [[0, 0.5], [0.1, 0.62], [0.2, 0.45], [0.3, 0.75], [0.4, 0.3], [0.5, 0.6], [0.6, 0.35], [0.7, 0.72], [0.8, 0.4], [0.9, 0.58], [1, 0.48]], { stroke: C.enz, sw: 2.2, smooth: true })
  b.ctext(505, 852, '刚体间相对运动坐标化作连续变量（第 12 章连续构象分析的伏笔）', { size: 9.5, fill: C.mute })
  b.tag(200, 908, '各刚体分辨率提升 + 相对运动系综一并到手', { fill: C.rnaL, stroke: C.rna, size: 10, weight: 700, tfill: C.rnaD, pad: 8 })

  // ============ 四、后处理三件套与投稿自查 ============
  b.panel(710, 572, 660, 398, { title: '四、后处理三件套与投稿自查' })
  // B 因子锐化前后
  const ax2 = 850, ay2 = 772, aw2 = 300, ah2 = 130
  b.axis(ax2, ay2, aw2, ah2, {
    grid: false,
    xticks: [[0, '0'], [1, '频率 g']],
    yticks: [[0.9, '高'], [0.1, '低']],
    title: 'B 因子锐化：振幅谱被拉平',
  })
  const dull: [number, number][] = []
  const sharp: [number, number][] = []
  for (let i = 0; i <= 50; i++) {
    const t = i / 50
    dull.push([t, 0.92 * Math.exp(-t * 3.0) + 0.05])
    sharp.push([t, 0.55 * Math.exp(-t * 0.9) + 0.32])
  }
  b.curve(ax2, ay2, aw2, ah2, dull, { stroke: C.mute, sw: 2.2, dash: '6 4' })
  b.curve(ax2, ay2, aw2, ah2, sharp, { stroke: C.ok, sw: 2.4 })
  b.text(870, 780, '锐化前', { size: 10, fill: C.mute })
  b.text(1080, 742, '锐化后（Rosenthal 与 Henderson 2003）', { size: 10, weight: 700, fill: C.okD })
  b.wtext(730, 620, '三件套：B 因子锐化把被包络与平均压平的高频按负温度因子提升；溶剂压平压低 mask 外的溶剂噪声；局部分辨率估计（blocres 或 RELION）逐区域报告图谱质量。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.text(730, 816, '投稿自查四条：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(860, 846, '半图一致性', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(1000, 846, 'mask 修正 FSC', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(1140, 846, '模型-图拟合度', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(1280, 846, '分子量 sanity', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.ctext(1040, 908, '锐化是「除回」有效传递函数的一部分——过度锐化会把噪声一并抬起来，振幅谱拉平即止', { size: 10, fill: C.mute })
}

export default scene({
  title: '均匀化精修与后处理：从颗粒库到密度图',
  subtitle: '金标准半图独立精修加 FSC 0.143（Scheres 2012）防过拟合；贝叶斯抛光（Zivanov 2019）与逐颗粒 CTF／高阶像差精修（Zivanov 2020）收回二级误差；multi-body 分刚体（Nakane 2018）；后处理三件套收尾',
  draw,
})
