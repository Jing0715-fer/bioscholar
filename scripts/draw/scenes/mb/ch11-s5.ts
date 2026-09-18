// mb ch11-s5 合成生物学（39-c 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、自上而下：最小基因组（上，全宽） ============
  b.panel(30, 132, 1340, 252, { title: '一、两条路线：自上而下简化 vs 自下而上搭建' })
  // 时间轴
  b.arrow(70, 216, 1330, 216, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  const miles: [number, string, string][] = [
    [180, 'JCVI-syn1.0（2010）', '全基因组合成与移植——首个「合成细胞」'],
    [620, 'Tn5 转座子饱和突变', '逐个敲除非必需基因'],
    [1060, 'JCVI-syn3.0（2016）', '531 kb · 473 基因的最小基因组'],
  ]
  miles.forEach(([x, yr, d]) => {
    b.circle(x, 216, 6, { fill: C.ink })
    b.ctext(x, 192, yr, { size: 13.5, weight: 700, fill: C.ink })
    b.wtext(x, 238, d, { size: 11.5, fill: C.sub, maxW: 240, lh: 17, anchor: 'middle' })
  })
  b.rect(56, 286, 620, 78, { fill: C.dnaL, stroke: C.dna, sw: 1.4, rx: 9, fillOp: 0.4 })
  b.text(72, 310, '最小基因组的含义', { size: 13, weight: 700, fill: C.dnaD })
  b.wtext(72, 332, '维持独立生命的最小基因目录（仍有未知功能者 149 个）——为「生命必需性」提供基线', { size: 11.5, fill: C.sub, maxW: 588, lh: 17 })
  b.rect(692, 286, 604, 78, { fill: C.proL, stroke: C.pro, sw: 1.4, rx: 9, fillOp: 0.4 })
  b.text(708, 310, '自下而上（bottom-up）', { size: 13, weight: 700, fill: C.proD })
  b.wtext(708, 332, '从标准化元件搭建新功能——启动子 / RBS / ORF / 终止子拼装为基因线路', { size: 11.5, fill: C.sub, maxW: 572, lh: 17 })

  // ============ 二、基因线路：标准装置与底盘（左中） ============
  b.panel(30, 396, 700, 290, { title: '二、基因线路的标准装置与底盘细胞' })
  // 标准装置 DNA 线性图
  b.genes(56, 462, 560, [
    { label: '启动子', frac: 0.22, fill: C.accL, stroke: C.acc },
    { label: 'RBS', frac: 0.12, fill: C.rnaL, stroke: C.rna },
    { label: 'ORF（目的基因）', frac: 0.48, fill: C.dnaL, stroke: C.dna },
    { label: '终止子', frac: 0.18, fill: C.proL, stroke: C.pro },
  ])
  b.ctext(336, 512, '定强度（-35 / -10 / 间隔组合改造）', { size: 10.5, fill: C.accD })
  b.ctext(336, 530, 'RBS 计算模型（Salis）预测翻译起始速率', { size: 10.5, fill: C.rnaD })
  // 底盘细胞
  b.ellipse(560, 560, 120, 62, { fill: C.panel, stroke: C.sub, sw: 2 })
  b.ctext(560, 548, '底盘细胞（chassis）', { size: 12.5, weight: 700, fill: C.sub })
  b.ctext(560, 568, '大肠杆菌 / 酵母提供', { size: 10.5, fill: C.mute })
  b.ctext(560, 584, '转录翻译机器与代谢', { size: 10.5, fill: C.mute })
  b.arrow(430, 486, 475, 518, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(250, 560, '元件 → 底盘 → 功能', { size: 12, weight: 600, fill: C.ink })
  // 要点
  b.wtext(56, 622, 'BioBrick 标准化：统一接口的可拼装 DNA 元件库（iGEM 竞赛推动）；正交系统（T7 RNAP · 正交核糖体）隔离宿主干扰', { size: 11.5, fill: C.sub, maxW: 640, lh: 17 })
  b.wtext(56, 656, '酵母合成染色体计划（Sc2.0）：全合成并重新设计酿酒酵母染色体（去重复 · 加 loxP 指纹）', { size: 11.5, fill: C.sub, maxW: 640, lh: 17 })

  // ============ 三、两个经典线路（右中，2000 年双突破） ============
  b.panel(710, 396, 660, 290, { title: '三、2000 年双突破：拨动开关与阻遏振荡器' })
  // 拨动开关
  b.rect(726, 436, 306, 224, { fill: '#ffffff', stroke: C.enz, sw: 1.4, rx: 9 })
  b.ctext(879, 460, '拨动开关（Gardner 等，2000）', { size: 12.5, weight: 700, fill: C.enzD })
  b.ellipse(800, 528, 58, 24, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.ctext(800, 533, 'LacI', { size: 12, weight: 700, fill: C.enzD })
  b.ellipse(958, 528, 58, 24, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.ctext(958, 533, 'TetR', { size: 12, weight: 700, fill: C.rnaD })
  b.arrow(862, 516, 898, 516, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.arrow(898, 540, 862, 540, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.ctext(879, 502, '相互抑制', { size: 10.5, fill: C.mute })
  b.tag(790, 592, '态 1：LacI 高', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 6 })
  b.tag(968, 592, '态 2：TetR 高', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 6 })
  b.ctext(879, 628, '双稳态记忆：诱导信号切换状态并保持', { size: 11, fill: C.sub })
  // 阻遏振荡器
  b.rect(1046, 436, 306, 224, { fill: '#ffffff', stroke: C.acc, sw: 1.4, rx: 9 })
  b.ctext(1199, 460, '阻遏振荡器（Elowitz 与 Leibler，2000）', { size: 12.5, weight: 700, fill: C.accD })
  const ring: [number, number, string][] = [[1130, 516, 'LacI'], [1268, 516, 'TetR'], [1199, 592, 'CI']]
  ring.forEach(([x, y, t], i) => {
    b.ellipse(x, y, 52, 22, { fill: C.accL, stroke: C.acc, sw: 1.8 })
    b.ctext(x, y + 5, t, { size: 11.5, weight: 700, fill: C.accD })
  })
  b.arrow(1184, 510, 1214, 510, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.path('M1240,538 C1226,566 1212,578 1199,570', { stroke: C.acc, sw: 2, fill: 'none', marker: 'acc' })
  b.path('M1199,570 C1186,578 1172,566 1158,538', { stroke: C.acc, sw: 2, fill: 'none', marker: 'acc' })
  b.ctext(1199, 628, '三个阻遏子环形抑制 → 周期性振荡', { size: 11, fill: C.sub })
  // 逻辑门注
  b.wtext(726, 665, '逻辑门（AND / OR / NOT）以启动子组合 · RNA 开关（riboregulator / toehold）或 split-Cas9 实现；控制论设计（比例-积分 · 类数字计数器）正被移植入细胞', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 四、代谢工程与治理（下，全宽） ============
  b.panel(30, 700, 1340, 260, { title: '四、代谢工程应用与治理：从青蒿酸到感知-响应线路' })
  // 酵母青蒿酸途径
  b.rect(56, 744, 720, 130, { fill: C.okL, stroke: C.ok, sw: 1.5, rx: 10, fillOp: 0.35 })
  b.ctext(416, 770, '酵母青蒿酸工程（Keasling 实验室）——抗疟药供应链的「植物提取 → 发酵罐」转型', { size: 13, weight: 700, fill: C.ok })
  b.genes(88, 816, 560, [
    { label: '甲羟戊酸途径改造', frac: 0.34, fill: C.accL, stroke: C.acc },
    { label: '紫穗槐二烯合酶 ADS', frac: 0.34, fill: C.rnaL, stroke: C.rna },
    { label: '细胞色素 P450 级联', frac: 0.32, fill: C.enzL, stroke: C.enz },
  ])
  b.arrow(660, 816, 700, 816, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.tag(726, 816, '青蒿酸', { fill: '#ffffff', stroke: C.ok, size: 12.5, weight: 700, tfill: C.ok, pad: 8 })
  b.ctext(720, 850, '化学半合成 → 青蒿素', { size: 11.5, fill: C.ok })
  b.ctext(416, 866, '在酿酒酵母中引入的异源途径（工业化生产）', { size: 11, fill: C.mute })
  // 右侧应用与治理
  b.rect(796, 744, 548, 62, { fill: C.panel, stroke: C.line, sw: 1.2, rx: 9 })
  b.wtext(812, 766, '类似路线：大麻素 · 稀有人乳寡糖 · 生物燃料 · 可降解材料；感知-响应线路（检测炎症因子并输出抗炎因子）', { size: 11, fill: C.sub, maxW: 516, lh: 16 })
  b.wtext(812, 792, '经调控细菌定植治疗代谢病', { size: 11, fill: C.sub, maxW: 516 })
  b.rect(796, 816, 548, 58, { fill: C.warnL, stroke: '#b45309', sw: 1.3, rx: 9, fillOp: 0.35 })
  b.wtext(812, 838, '深层议题与治理：密码子重定义与合成细胞是否模糊「自然 / 人工」边界？AI 辅助设计正在加速能力扩散——生物安全与开源规范需与技术同步演进。', { size: 11, fill: C.sub, maxW: 516, lh: 16 })
  b.ctext(700, 920, '工程学范式：抽象 · 标准化 · 解耦 · 预测——把生命系统变为可设计对象', { size: 12.5, weight: 600, fill: C.ink })
}

export default scene({
  title: '合成生物学：基因线路与底盘细胞',
  subtitle: 'JCVI-syn3.0 最小基因组（531 kb · 473 基因）——启动子-RBS-ORF-终止子标准装置、拨动开关与阻遏振荡器、酵母青蒿酸工程',
  draw,
})
