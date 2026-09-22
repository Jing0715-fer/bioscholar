// em ch8-s3 初始模型与三维分类（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、初始模型四来路 ============
  b.panel(30, 132, 660, 412, { title: '一、初始模型的四条来路与质量验证' })
  const src = (y: number, t: string, s: string, risk: string, fill: string, stroke: string, tfill: string) => {
    b.rect(50, y, 620, 60, { fill, stroke, sw: 1.6, rx: 8 })
    b.text(66, y + 24, t, { size: 12.5, weight: 700, fill: tfill })
    b.text(66, y + 44, s, { size: 10, fill: C.sub })
    b.etext(654, y + 34, risk, { size: 9.5, fill: C.badD, anchor: 'end' })
  }
  src(178, 'ab initio SGD（cryoSPARC）', '随机初始化并行 + 取向与密度联合优化 + 频率爬升；小于约 100 kDa 常须百万级颗粒', '小样品不收敛', C.accL, C.acc, C.accD)
  src(246, '随机锥形重构', '已知倾角双张照片张出锥面覆盖，实验设计绕开搜索（第 7 章第 2 节）', '锥面覆盖不完整', C.dnaL, C.dna, C.dnaD)
  src(314, '负染三维模型', '形状信息约 20 Å 级可靠，作低频形状锚点转入冷冻数据', '染剂压扁构象', C.rnaL, C.rna, C.rnaD)
  src(382, '同源结构参考', '以序列同源模型投影定向，起步最快', '参考偏差风险最高', C.badL, C.bad, C.badD)
  b.text(50, 478, '验证四条（不过关宁可推倒重来）：', { size: 11, weight: 700, fill: C.ink })
  b.tag(150, 508, '对称性正确', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(290, 508, '多起点收敛一致', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(450, 508, '投影与 2D 类平均吻合', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(610, 508, 'FSC 收敛趋势健康', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })

  // ============ 二、三维分类 ============
  b.panel(710, 132, 660, 412, { title: '二、三维分类：异质性的拆解' })
  // 颗粒云
  for (let i = 0; i < 42; i++) {
    const rx = 748 + ((Math.sin(i * 127.3) * 43758.5) % 1 + 1) % 1 * 130
    const ry = 190 + ((Math.sin(i * 311.7) * 12543.2) % 1 + 1) % 1 * 150
    b.circle(rx, ry, 2.6, { fill: C.mute, opacity: 0.6 })
  }
  b.ctext(812, 366, '混合颗粒库', { size: 11, weight: 700, fill: C.sub })
  b.ctext(812, 382, '构象与化学计量各异', { size: 9.5, fill: C.mute })
  // 三只桶
  const bucket = (x: number, label: string, pct: string, fill: string, stroke: string, tfill: string) => {
    b.arrow(880, 268, x - 44, 268, { stroke: C.faint, sw: 1.6, marker: 'mute' })
    b.rect(x - 40, 196, 108, 144, { fill, stroke, sw: 1.8, rx: 10 })
    b.ellipse(x + 14, 252, 30, 24, { fill: '#ffffff', stroke, sw: 2 })
    b.path(`M ${x - 6},246 q 10,-12 22,0 q 8,-9 14,2`, { stroke, sw: 2, fill: 'none' })
    b.ctext(x + 14, 300, label, { size: 10.5, weight: 700, fill: tfill })
    b.ctext(x + 14, 318, pct, { size: 10, fill: C.mute })
  }
  bucket(990, '构象 A', '占据约 60%', C.dnaL, C.dna, C.dnaD)
  bucket(1110, '构象 B', '占据约 30%', C.proL, C.pro, C.proD)
  bucket(1230, '空结合位', '占据约 10%', C.enzL, C.enz, C.enzD)
  b.wtext(730, 366, '每个类拥有独立的三维参考与各自的取向分配：不同构象、不同化学计量（配体有无、寡聚态、占据率）各归其桶，桶内均一度上升、各自精修的分辨率随之改善。算法是贝叶斯 EM：类别为隐变量，正则化参数 T（RELION 常用 T = 4）控制类的紧散——T 大先验弱、类易拆细，T 小则类被拉向共同平均。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })
  b.tag(880, 476, '分类参考常压低至 10–20 Å：用低频分家、用高频精修', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(1180, 476, '免对齐分类：只分裂类别变量，专拆占据率', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 9 })
  b.wtext(730, 522, '两个实务陷阱：类间迁移（K 或 T 不当）与 mask 过紧（边界密度推挤变形，须比外廓大数个像素并做软边）。', { size: 10, fill: C.mute, maxW: 620, lh: 14 })

  // ============ 三、策略表与欧拉角分布 ============
  b.panel(30, 572, 660, 398, { title: '三、分类策略表与欧拉角分布图' })
  b.table(50, 626, 360, {
    headers: ['场景', '类数 K', '正则化 T'],
    colW: [150, 90, 120], rowH: 40, fontSize: 10.5,
    rows: [
      ['快速试探', '2–4', '4'],
      ['构象拆解', '4–8', '4–8'],
      ['化学计量与占据率', '2–3', '高 T 拆得动'],
      ['疑似过度拆分', '递减 K', '低 T'],
    ],
  })
  b.wtext(50, 800, '备注：先粗拆（2–3 类）看大势，再对目标类细拆（4–8 类）找稀有态；高度相似的类可合并再精修。', { size: 10, fill: C.sub, maxW: 350, lh: 14 })
  // 欧拉角分布图
  b.circle(560, 706, 84, { fill: '#ffffff', stroke: C.line, sw: 1.6 })
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * Math.PI * 2
    const r = 12 + ((Math.sin(i * 78.2) * 269.4) % 1 + 1) % 1 * 68
    const px = 560 + r * Math.cos(a)
    const py = 706 + r * Math.sin(a)
    b.circle(px, py, 3, { fill: i % 4 === 3 ? C.bad : C.ok, opacity: 0.75 })
  }
  b.path('M 560,622 A 84,84 0 0 1 633,648', { fill: 'none', stroke: C.bad, sw: 3.5, opacity: 0.35 })
  b.ctext(560, 612, '欧拉角分布图（听诊器）', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(560, 808, '红色弧段＝角度空洞', { size: 9.5, fill: C.badD })
  b.ctext(560, 824, '优势取向实证，回制样端或预倾收集补救', { size: 9.5, fill: C.mute })
  b.tag(560, 866, '分布图与 2D 类平均视角多样性互证，诊断即闭环', { fill: C.accL, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 8 })
  b.ctext(560, 900, '覆盖均匀度指标把空洞变成数字', { size: 9.5, fill: C.mute })

  // ============ 四、对称性纠错与聚焦分类 ============
  b.panel(710, 572, 660, 398, { title: '四、对称性纠错、聚焦分类与连续构象' })
  b.text(730, 620, '对称性误判的纠错：', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(730, 640, '把 C 当 D，密度被多余二次轴平均、缺失成分以减半密度出现；把螺旋当 Cn 则完全无法收敛。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })
  b.tag(870, 676, 'C1 与候选对称各精修一轮，比较 FSC', { fill: C.okL, stroke: C.ok, size: 10.5, tfill: C.okD, pad: 9 })
  b.tag(1170, 676, '终审交给 2D 类平均的对称元素计数', { fill: C.okL, stroke: C.ok, size: 10.5, tfill: C.okD, pad: 9 })
  b.wtext(730, 706, '对称颗粒的优势取向更隐蔽：C4 只贡献顶视时傅里叶体积仍缺一大圈——覆盖图须先除以对称操作，回到非对称单元的视角分布。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })
  b.text(730, 748, '聚焦分类（focused classification）：', { size: 11.5, weight: 700, fill: C.ink })
  // mask 示意
  b.ellipse(790, 812, 46, 36, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ellipse(812, 800, 17, 14, { fill: C.enzL, stroke: C.enz, sw: 2.4, dash: '6 4' })
  b.ctext(790, 864, 'mask 圈定易变区域', { size: 9.5, fill: C.sub })
  b.wtext(870, 782, '在共识取向下只让该区域的类别变量分裂——专为低占据率构象态设计，把宝贵的类数预算集中到真正变化的地方；配局部分辨率据此判读。', { size: 10, fill: C.sub, maxW: 470, lh: 14 })
  b.wtext(870, 840, '对类别间平滑过渡的连续构象变化，离散分类终会力不从心——连续构象分析（3D variability 一类）接棒，把异质性建模为低维流形上的连续坐标（第 12 章）。', { size: 10, fill: C.sub, maxW: 470, lh: 14 })
  b.tag(1000, 930, '分辨率的账记在「每桶的有效颗粒数」上', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })
}

export default scene({
  title: '初始模型与三维分类：拆解异质性的决策树',
  subtitle: '初始模型四来路（ab initio SGD／随机锥形／负染约 20 Å／同源结构）加验证四条；三维分类以独立参考与取向分配拆构象，正则化 T 常用 4，欧拉角分布图查空洞，聚焦分类专攻低占据率构象态',
  draw,
})
