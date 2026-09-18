// bi ch12-s1 机器学习在生物信息学中的应用（39-i 批6）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、监督学习五环节 ============
  b.panel(30, 132, 660, 420, { title: '一、监督学习五环节：测试集只许碰一次' })
  const steps = ['① 特征表示', '② 数据划分', '③ 模型训练', '④ 交叉验证', '⑤ 泛化评估']
  steps.forEach((s, i) => {
    b.rect(50 + i * 122, 200, 104, 56, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8 })
    b.ctext(102 + i * 122, 233, s, { size: 11.5, weight: 700, fill: C.accD })
    if (i < 4) b.arrow(156 + i * 122, 228, 168 + i * 122, 228, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  })
  b.text(50, 296, '② 数据划分的三分结构：', { size: 12, weight: 700, fill: C.ink })
  b.rect(50, 312, 360, 34, { fill: C.accL, stroke: C.acc, sw: 1.7 })
  b.ctext(230, 334, '训练集（拟合参数）', { size: 11.5, weight: 700, fill: C.accD })
  b.rect(410, 312, 120, 34, { fill: C.enzL, stroke: C.enz, sw: 1.7 })
  b.ctext(470, 334, '验证集（调参）', { size: 11.5, weight: 700, fill: C.enzD })
  b.rect(530, 312, 120, 34, { fill: C.badL, stroke: C.bad, sw: 1.7, dash: '6 4' })
  b.ctext(590, 334, '测试集（终审）', { size: 11.5, weight: 700, fill: C.bad })
  b.wtext(50, 386, '交叉验证只在训练＋验证内部轮转；测试集在最终评估前只许碰一次——每多碰一次，报告的泛化性能就多一分乐观偏差。', { size: 11, fill: C.sub, maxW: 600, lh: 15 })
  b.wtext(50, 424, '示例：特征 = 基因表达向量，标签 = 肿瘤 / 正常；模型 = 逻辑回归、SVM、随机森林、梯度提升树。', { size: 11, fill: C.sub, maxW: 600, lh: 15 })

  // ============ 二、两大泄漏陷阱 ============
  b.panel(710, 132, 660, 420, { title: '二、两大泄漏陷阱：循环论证与伪独立' })
  b.text(740, 196, '陷阱 A：循环论证', { size: 12.5, weight: 700, fill: C.bad })
  b.rect(740, 220, 250, 40, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(865, 245, '差异分析选 top 基因（用全部样本）', { size: 11, fill: C.sub })
  b.arrow(865, 262, 865, 288, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.rect(740, 294, 250, 40, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(865, 319, '用这些基因训练分类器', { size: 11, fill: C.sub })
  b.arrow(865, 336, 865, 362, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.rect(740, 368, 250, 40, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 7 })
  b.ctext(865, 393, '验证折上准确率虚高', { size: 11.5, weight: 700, fill: C.bad })
  b.path('M 998,388 C 1022,388 1022,240 998,240', { fill: 'none', stroke: C.bad, sw: 1.6, dash: '5 4', marker: 'bad' })
  b.wtext(740, 424, '预筛在划分数据前进行，验证折信息已泄入特征，性能因此虚高（循环论证）。', { size: 10.5, fill: C.sub, maxW: 280, lh: 15 })
  b.text(1050, 196, '陷阱 B：伪独立', { size: 12.5, weight: 700, fill: C.bad })
  b.rect(1050, 216, 140, 122, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8, fillOp: 0.5 })
  b.ctext(1120, 240, '训练集', { size: 12, weight: 700, fill: C.accD })
  b.rect(1200, 216, 140, 122, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 8 })
  b.ctext(1270, 240, '测试集', { size: 12, weight: 700, fill: C.sub })
  ;[268, 294, 320].forEach((y, i) => {
    b.line(1098, y, 1242, y, { stroke: C.bad, sw: 1.4, dash: '4 3', opacity: 0.85 })
    b.circle(1090, y, 8, { fill: C.accL, stroke: C.acc, sw: 1.6 })
    b.circle(1250, y, 8, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
    b.ctext(1070, y + 4, `P${i + 1}`, { size: 10.5, fill: C.mute })
  })
  b.wtext(1050, 360, '按样本而非按患者划分 → 同一患者的样本横跨两侧，测试集不再独立（伪独立）。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.wtext(1050, 404, '正确做法：按患者整体划分训练与测试（患者级 k 折）。', { size: 10.5, weight: 700, fill: '#065f46', maxW: 300, lh: 15 })
  b.wtext(740, 480, '泄漏的共同结构：验证 / 测试数据的信息，以任何途径进入特征选择、参数或流程——结果都不可信。', { size: 11, fill: C.sub, maxW: 600, lh: 15 })

  // ============ 三、过拟合与正则化 ============
  b.panel(30, 576, 660, 404, { title: '三、过拟合：p ≫ n 的结构与学习曲线裂缝' })
  b.axis(110, 930, 280, 260, {
    title: '学习曲线：性能 vs 样本量',
    xticks: [[0, '小'], [1, '大']],
    xlabel: '训练样本量 n →',
  })
  b.curve(110, 930, 280, 260, [[0, 0.62], [0.15, 0.75], [0.3, 0.84], [0.5, 0.9], [0.7, 0.94], [1, 0.97]], {
    stroke: C.dna, sw: 2.2, label: '训练性能', labelAt: [0.28, 0.92],
  })
  b.curve(110, 930, 280, 260, [[0, 0.3], [0.15, 0.38], [0.3, 0.48], [0.5, 0.6], [0.7, 0.7], [1, 0.78]], {
    stroke: C.enz, sw: 2.2, label: '验证性能', labelAt: [0.26, 0.38],
  })
  b.line(264, 700, 264, 757, { stroke: C.bad, sw: 1.6, marker: 'bad', markerStart: 'bad' })
  b.ctext(285, 732, '泛化裂缝', { size: 11, weight: 700, fill: C.bad })
  b.text(420, 650, '过拟合的来源与对策', { size: 13, weight: 700, fill: C.ink })
  b.wtext(420, 676, 'p ≫ n（特征远多于样本）时，模型足以记住噪声：训练性能高、验证性能低，裂缝即体征。', { size: 11, fill: C.sub, maxW: 250, lh: 15 })
  b.wtext(420, 746, '首选对策：L1（稀疏选择）、L2（权重收缩）正则化；特征选择分过滤式、包裹式、嵌入式三型。', { size: 11, fill: C.sub, maxW: 250, lh: 15 })
  b.wtext(420, 816, '小样本须报告 bootstrap 选择稳定性；通路级特征聚合，常比裸分子更稳健。', { size: 11, fill: C.sub, maxW: 250, lh: 15 })

  // ============ 四、ROC-AUC 与类别不平衡 ============
  b.panel(710, 576, 660, 404, { title: '四、ROC-AUC 与类别不平衡的准确率陷阱' })
  b.axis(780, 930, 250, 250, {
    title: 'ROC 曲线：真阳性率 vs 假阳性率',
    xticks: [[0, '0'], [1, '1']],
    yticks: [[0, '0'], [1, '1']],
    xlabel: '假阳性率 →',
  })
  b.line(780, 930, 1030, 680, { stroke: C.faint, sw: 1.4, dash: '5 5' })
  b.curve(780, 930, 250, 250, [[0, 0], [0.02, 0.35], [0.06, 0.6], [0.12, 0.75], [0.25, 0.88], [0.5, 0.95], [1, 1]], {
    stroke: C.dna, sw: 2.4,
  })
  b.legend(790, 952, [['ROC 曲线', C.dna], ['随机水平 AUC = 0.5', C.faint]], { size: 10.5, gap: 18 })
  b.text(1060, 650, 'AUC 的概率释义', { size: 13, weight: 700, fill: C.ink })
  b.wtext(1060, 676, '随机取一阳一阴，阳性得分更高的概率。取值 0.5–1：0.5 为随机水平、1 为完美分离，是阈值无关的整体判别度量。', { size: 11, fill: C.sub, maxW: 280, lh: 15 })
  b.text(1060, 750, '准确率陷阱：阳性率 1%', { size: 12.5, weight: 700, fill: C.bad })
  b.rect(1060, 770, 290, 56, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(1205, 792, '「全部预测阴性」策略', { size: 12, weight: 700, fill: C.bad })
  b.ctext(1205, 814, '准确率 99% · 召回 0 · 毫无价值', { size: 10.5, fill: C.sub })
  b.wtext(1060, 856, '对策：平衡指标、类别加权或重采样；并以外部验证集作泛化终审。', { size: 11, fill: C.sub, maxW: 280, lh: 15 })
}

export default scene({
  title: '机器学习在生物信息学中的应用：五环节、泄漏、过拟合与 AUC',
  subtitle: '五环节与测试集只碰一次；两大泄漏：预筛回头分类、按样本伪独立；p≫n 过拟合用 L1/L2 正则化；AUC 取值 0.5–1；阳性率 1% 时 99% 准确率毫无价值',
  draw,
})
