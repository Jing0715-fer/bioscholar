// sb ch3-s4 分子排阻层析与疏水相互作用层析（Task 4-a）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、SEC 原理与校准曲线 ============
  b.panel(30, 132, 660, 430, { title: '一、SEC：按流体力学体积筛分' })
  b.wtext(50, 170, 'SEC 不靠吸附而靠筛分：大分子被孔道排除、先流出（V_{e} 趋近 V_{0}），小分子畅行全部孔道、后流出（趋近 V_{t}），居中者部分进入——分配系数 K_{av} 把这支「体积标尺」量化。', { maxW: 610, lh: 15, size: 10.5, fill: C.sub })
  // 介质珠与孔道
  b.circle(100, 255, 30, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.circle(160, 275, 20, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  for (const [px, py, pr] of [[88, 248, 7], [112, 262, 6], [100, 238, 4.5], [152, 272, 5], [168, 282, 4]] as Array<[number, number, number]>) {
    b.circle(px, py, pr, { fill: '#ffffff', stroke: C.dna, sw: 1.1, dash: '3 3' })
  }
  b.circle(220, 232, 9, { fill: C.enz })
  b.text(238, 236, '大分子（如聚合体）：走孔外，V_{e} 趋近 V_{0}', { size: 10, fill: C.sub })
  b.circle(220, 262, 6.5, { fill: C.pro })
  b.text(238, 266, '中等分子：部分进入孔道，K_{av} 介于 0 与 1', { size: 10, fill: C.sub })
  b.circle(220, 292, 4.5, { fill: C.acc })
  b.text(238, 296, '小分子：畅行全部孔道，V_{e} 趋近 V_{t}', { size: 10, fill: C.sub })
  b.tag(190, 330, 'K_{av} = (V_{e} − V_{0})/(V_{t} − V_{0})，取值 0 至 1', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 8 })
  // 校准曲线
  b.axis(100, 505, 280, 130, {
    title: '校准曲线：log MW 对 V_{e}',
    xlabel: '洗脱体积 V_{e}', ylabel: 'log MW',
    xticks: [[0, 'V_{t}'], [1, 'V_{0}']],
    yticks: [[0.1, '小'], [0.9, '大']],
  })
  b.curve(100, 505, 280, 130, [[0.08, 0.9], [0.5, 0.5], [0.92, 0.1]], { smooth: false, stroke: C.pro, sw: 2.4 })
  b.circle(128, 390.6, 4, { fill: C.proD })
  b.text(136, 386, 'Superose 6：至约 5000 kDa', { size: 9.5, weight: 700, fill: C.proD })
  b.circle(170, 412.7, 4, { fill: C.proD })
  b.text(178, 404, 'Superdex 200：10–600 kDa', { size: 9.5, weight: 700, fill: C.proD })
  b.circle(273.6, 458.2, 4, { fill: C.proD })
  b.text(281, 448, 'Superdex 75：3–70 kDa', { size: 9.5, weight: 700, fill: C.proD })
  // 右列纪律
  b.tag(535, 180, '一柱三用：精纯 · 换液 · 聚合态分析', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 8 })
  b.tag(535, 212, '制备上样不超过柱体积 0.5–2%', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 8 })
  b.tag(535, 244, 'G-25 脱盐：组别分离，上样可达 30%', { fill: C.panelB, stroke: C.line, size: 10.5, tfill: C.ink, pad: 8 })
  b.tag(535, 276, '分析柱流速 0.5–1 mL/min', { fill: C.panelB, stroke: C.line, size: 10.5, tfill: C.ink, pad: 8 })
  b.wtext(415, 312, '分辨率随柱长的平方根增加——加长柱或两柱串联是唯一正道。', { maxW: 240, lh: 14, size: 10, fill: C.sub })
  b.wtext(415, 350, '8–13 μm 增效介质较传统约 34 μm 把塔板高度压低两三倍，同柱长下分辨率提升四到五成，还容许更高流速。', { maxW: 240, lh: 14, size: 10, fill: C.sub })
  b.wtext(415, 410, '分析型 SEC 以标准曲线线性段估算分子量，配多角度光散射 SEC-MALS 可得绝对分子量与化学计量（参见第 4 章质控）。', { maxW: 240, lh: 14, size: 10, fill: C.sub })
  b.wtext(415, 470, '等度洗脱、条件温和，但每个峰都是「稀释器」——峰收集须预判体积并安排浓缩衔接。', { maxW: 240, lh: 14, size: 10, fill: C.sub })

  // ============ 二、分析型与制备型 SEC ============
  b.panel(710, 132, 660, 430, { title: '二、分析型与制备型 SEC：参数分野' })
  b.wtext(730, 172, '「信息优先还是物质优先」——两种柱型给出两套参数：', { maxW: 610, lh: 14, size: 10.5, fill: C.sub })
  b.table(730, 200, 610, {
    headers: ['参数', '分析型 SEC', '制备型 SEC'],
    colW: [110, 240, 260],
    rowH: 40,
    fontSize: 10.5,
    rows: [
      ['柱规格', '10 × 300 mm，约 24 mL', '26 × 600 mm 串联，约 640 mL'],
      ['介质粒径', '8–13 μm 增效介质', '30–45 μm 耐压介质'],
      ['流速', '0.5–0.75 mL/min', '约 1–2 mL/min（低线速）'],
      ['上样量', '柱体积 0.3–0.5%（约 100 μL）', '柱体积 0.5–2%（数 mL）'],
      ['单轮时长', '30–45 分钟', '数小时'],
      ['定位', '聚合态监测与分子量估算', '精纯、换液与批量制备'],
    ],
  })
  b.wtext(730, 504, '分析柱以塔板数与保留时间的重复性为先，上样以微克至毫克计；制备柱牺牲分辨率换通量与回收。峰收集执行「宁可窄收不全、不可宽收掺杂质」——两端参数表贴在层析柜门上，是纯化平台的常见风景。上样带宽直接叠加在峰宽上，故上样体积是 SEC 分辨率的第一变量。', { maxW: 610, lh: 14, size: 10, fill: C.sub })

  // ============ 三、HIC ============
  b.panel(30, 578, 660, 380, { title: '三、HIC：借盐暴露疏水面' })
  const hbox = (x: number, t: string, sub: string, fill: string, stroke: string) => {
    b.rect(x, 616, 190, 66, { fill, stroke, sw: 1.6, rx: 7 })
    b.ctext(x + 95, 636, t, { size: 11, weight: 700, fill: C.ink })
    b.wtext(x + 14, 654, sub, { maxW: 168, lh: 12, size: 9.5, fill: C.sub })
  }
  hbox(45, '高盐上样', '0.8–1.5 M 硫酸铵（或硫酸钠）把蛋白「挤出」溶剂', C.warnL, C.warn)
  hbox(251, '结合', '疏水面与苯基／丁基／辛基配基结合挂柱', C.proL, C.pro)
  hbox(457, '降盐洗脱', '降低盐浓度梯度，把溶解度还给蛋白', C.okL, C.ok)
  b.arrow(239, 649, 247, 649, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(445, 649, 453, 649, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(185, 716, '苯基：默认首发（π 相互作用）', { fill: C.panelB, stroke: C.line, size: 10, weight: 700, tfill: C.ink, pad: 7 })
  b.tag(400, 716, '丁基：最温和', { fill: C.panelB, stroke: C.line, size: 10, weight: 700, tfill: C.ink, pad: 7 })
  b.tag(565, 716, '辛基：最猛', { fill: C.panelB, stroke: C.line, size: 10, weight: 700, tfill: C.ink, pad: 7 })
  b.wtext(45, 748, '辛基适于疏水性弱、挂不住的目标；丁基留给疏水性强、易在辛基柱上「粘死」的蛋白；两档配基密度与三种链长铺开的筛选矩阵，是 HIC 优化的第一轮动作。', { maxW: 620, lh: 14, size: 10, fill: C.sub })
  b.tag(240, 800, '结合过强：辅以 10–50% 乙二醇或温和去污剂', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 8 })
  b.tag(500, 800, '「宁弱而可洗，勿强而失收」', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 8 })
  b.wtext(45, 832, '结合过强者高盐洗脱困难、回收率差；结合过弱者高盐也挂不住。', { maxW: 620, lh: 14, size: 10, fill: C.mute })
  b.wtext(45, 866, '工业高光：抗体药物偶联物（ADC）的载药数（0 至 8）按疏水程度被 HIC 梯度逐一分开；疏水电荷诱导色谱（HCIC）以 MEP 配基在中性 pH 捕获抗体、pH 降至约 4 时配基质子化相互排斥而洗脱——耐酸抗体的盐耐受替代路线。结构生物学流程中 HIC 多用于精纯。', { maxW: 620, lh: 14, size: 10, fill: C.sub })

  // ============ 四、Hofmeister、Cohn 与协同 ============
  b.panel(710, 578, 660, 380, { title: '四、Hofmeister 序列、Cohn 方程与三机理协同' })
  b.ctext(1035, 606, '阴离子盐析能力自左向右递减', { size: 10, weight: 700, fill: C.sub })
  b.ion(775, 630, 'SO_{4}^{2−}', { r: 20, fill: C.dnaL, stroke: C.dna, size: 9, tfill: C.dnaD })
  b.ion(905, 630, 'Cl^{−}', { r: 18, fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink })
  b.ion(1025, 630, 'Br^{−}', { r: 18, fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink })
  b.ion(1145, 630, 'I^{−}', { r: 18, fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink })
  b.ion(1268, 630, 'SCN^{−}', { r: 19, fill: C.badL, stroke: C.bad, size: 9.5, tfill: C.badD })
  b.arrow(740, 664, 1330, 664, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.text(740, 686, '盐析端', { size: 9.5, weight: 700, fill: C.dnaD })
  b.etext(1330, 686, '盐溶端', { size: 9.5, weight: 700, fill: C.badD })
  b.wtext(740, 706, '阳离子 NH_{4}^{+}、K^{+}、Na^{+} 居盐析端——硫酸根与铵根双端居首，硫酸铵因此成为经典盐析剂。', { maxW: 610, lh: 13.5, size: 10, fill: C.sub })
  b.tag(830, 740, 'Cohn：log S = β − K_{s}·I', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 8 })
  b.tag(1120, 740, '接力设计：上一步洗脱＝下一步上样', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 8 })
  b.wtext(740, 766, '溶解度 S 的对数随离子强度 I 线性下降；HIC 是这条曲线的可逆利用——高盐把蛋白推到接近析出使其挂柱，降盐再把溶解度还给它。IEX 高盐洗脱组分补加硫酸铵至约 1 M 即可直接上 HIC，省去一步脱盐。', { maxW: 610, lh: 13.5, size: 10, fill: C.sub })
  b.table(730, 800, 610, {
    headers: ['特性', 'SEC', 'IEX', 'HIC'],
    colW: [110, 170, 160, 170],
    rowH: 30,
    fontSize: 9.5,
    rows: [
      ['分离依据', '流体力学体积', '净电荷', '表面疏水性'],
      ['上样限制', '0.5–2% 柱体积', '容量内宽松', '高盐下容量内宽松'],
      ['分辨率调节', '柱长与上样量', '梯度体积', '梯度与配基谱'],
      ['洗脱条件', '等度温和', '盐梯度', '降盐梯度'],
    ],
  })
  b.wtext(730, 952, '经典三步：亲和捕获后接 IEX 精纯，再以 SEC 收官换液；目标疏水性强则在 IEX 与 SEC 之间插入 HIC。', { maxW: 610, lh: 13, size: 9.5, fill: C.mute })
}

export default scene({
  title: '分子排阻层析与疏水相互作用层析',
  subtitle: 'SEC 按流体力学体积筛分，K_{av} = (V_{e}−V_{0})/(V_{t}−V_{0})，制备上样仅柱体积 0.5–2%；HIC 以 0.8–1.5 M 硫酸铵高盐上样、降盐梯度洗脱；硫酸铵居 Hofmeister 序列盐析端',
  draw,
})
