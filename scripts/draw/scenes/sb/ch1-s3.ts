// sb ch1-s3 结构生物学发展简史（Task 4-a）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、百年时间轴 ============
  b.panel(30, 132, 1340, 280, { title: '一、百年时间轴：方法学的接力' })
  b.wtext(50, 172, '学科节奏清晰可辨：物理学先行（1912 至 1934），方法学奠基（1953 至 1971），基础设施与膜蛋白攻坚（1975 至 2000），分辨率革命与计算预测并进（2013 至今）。两条经验值得写进实验笔记：方法学突破从不均匀降临，每次探测器件或算法的跃迁都会重排哪些问题「可解」。', { maxW: 1240, lh: 15, size: 10.5, fill: C.sub })
  b.timelineH(60, 300, 1280, [
    { at: 0.025, label: '劳厄衍射', sub: '1912', above: true, c: C.dna },
    { at: 0.13, label: '湿晶体铁律', sub: '1934 Bernal', above: true, c: C.dna },
    { at: 0.25, label: '同晶置换法', sub: '1953 Perutz', above: true, c: C.pro },
    { at: 0.37, label: '首座诺奖', sub: '1962 化学奖', above: true, c: C.pro },
    { at: 0.49, label: 'PDB 建库', sub: '1971·13 条', above: true, c: C.acc },
    { at: 0.62, label: '玻璃化冷冻', sub: '1982 Dubochet', above: true, c: C.acc },
    { at: 0.78, label: '分辨率革命', sub: '2013 直接探测', above: true, c: C.warn },
    { at: 0.96, label: 'AlphaFold2', sub: '2020 CASP14', above: true, c: C.warn },
    { at: 0.075, label: '布拉格定律', sub: '1913', c: C.dna },
    { at: 0.19, label: '二级结构', sub: '1951 Pauling', c: C.dna },
    { at: 0.31, label: '肌红蛋白', sub: '1958 6 Å', c: C.pro },
    { at: 0.43, label: '溶菌酶 2 Å', sub: '1965 Phillips', c: C.pro },
    { at: 0.55, label: '膜蛋白首例', sub: '1975 bR 7 Å', c: C.acc },
    { at: 0.85, label: '剪接体', sub: '2015 3.6 Å', c: C.warn },
    { at: 0.91, label: '冷冻电镜诺奖', sub: '2017', c: C.warn },
  ])

  // ============ 二、学科节奏四阶段 ============
  b.panel(30, 424, 830, 534, { title: '二、学科节奏四阶段' })
  const card = (x: number, y: number, fill: string, stroke: string, t: string, body: string) => {
    b.rect(x, y, 380, 215, { fill, stroke, sw: 1.6, rx: 8 })
    b.text(x + 16, y + 26, t, { size: 12.5, weight: 700, fill: C.ink })
    b.wtext(x + 16, y + 48, body, { maxW: 350, lh: 15, size: 10, fill: C.sub })
  }
  card(50, 470, C.dnaL, C.dna, '物理学先行（1912 至 1934）', '劳厄与 Friedrich、Knipping 以硫酸铜晶体证明 X 射线是波长与原子间距相当的电磁波，劳厄获 1914 年诺贝尔物理学奖；22 岁的 W. L. Bragg 导出布拉格定律 nλ=2d·sinθ，父子共享 1915 年物理学奖；1934 年 Bernal 发现胃蛋白酶湿晶体方可清晰衍射——「永不干燥你的晶体」至今仍是铁律。')
  card(445, 470, C.proL, C.pro, '方法学奠基（1953 至 1971）', '1953 年 Perutz 以血红蛋白汞衍生物确立多对同晶置换法（MIR），相位问题的第一把通用钥匙铸成；Kendrew 的抹香鲸肌红蛋白（约 17 kDa、153 个残基）1958 年 6 Å、1960 年推进至 2 Å；1965 年 Phillips 解析 2 Å 溶菌酶；1971 年 PDB 建库。')
  card(50, 700, C.warnL, C.warn, '基础设施与膜蛋白攻坚（1975 至 2000）', 'Henderson 与 Unwin 1975 年解析细菌视紫红质 7 Å，为膜蛋白结构奠基；1982 年 Dubochet 玻璃化冷冻为冷冻电镜埋下伏笔；1988 年光合反应中心三维结构获诺贝尔化学奖；同步辐射光源与机器人化结晶筛选逐步铺开，PDB 条目数跨入万级。')
  card(445, 700, C.accL, C.acc, '分辨率革命与计算时代（2013 至 2020）', '直接电子探测相机（Falcon、K2 等）配合束流诱导运动校正，使冷冻电镜一举跨入 2 至 3 Å 时代；2015 年施一公团队报道 3.6 Å 酵母剪接体；2017 年冷冻电镜获诺贝尔化学奖；2020 年 AlphaFold2 在 CASP14 以中位 GDT_TS 约 92.4 与实验精度相当。')

  // ============ 三、诺贝尔奖年表与中国坐标 ============
  b.panel(860, 424, 510, 534, { title: '三、诺贝尔奖年表与中国坐标' })
  b.table(875, 466, 480, {
    headers: ['年份', '获奖者', '表彰内容'],
    colW: [64, 178, 238],
    rowH: 33,
    fontSize: 10,
    rows: [
      ['1962 化学', 'Kendrew、Perutz', '肌红蛋白与血红蛋白晶体结构'],
      ['1982 化学', 'Klug', '晶体学电子显微学'],
      ['1985 化学', 'Hauptman、Karle', '直接法解析晶体结构'],
      ['1988 化学', 'Deisenhofer、Huber、Michel', '光合反应中心三维结构'],
      ['2003 化学', 'Agre、MacKinnon', '水通道与钾通道'],
      ['2009 化学', 'Ramakrishnan、Steitz、Yonath', '核糖体结构与功能'],
      ['2012 化学', 'Lefkowitz、Kobilka', 'G 蛋白偶联受体'],
      ['2017 化学', 'Dubochet、Frank、Henderson', '冷冻电镜技术'],
    ],
  })
  b.rect(875, 792, 480, 150, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 8 })
  b.text(891, 814, '中国坐标', { size: 12.5, weight: 700, fill: C.okD })
  b.wtext(891, 834, '1965 年世界首次结晶牛胰岛素全合成；1971 年北京胰岛素结构研究组完成 2.5 Å 猪胰岛素晶体结构（后推进至 1.8 Å，骨干含梁栋材）；2015 年起施一公团队连续解析酵母剪接体工作循环各态；颜宁团队 2016 年报道兔源 Cav1.1 钙通道复合体、2020 年解析人源 hERG 钾通道。', { maxW: 448, lh: 14, size: 10, fill: C.sub })
}

export default scene({
  title: '结构生物学发展简史：从劳厄衍射到 AlphaFold2',
  subtitle: '1912 年劳厄衍射与 1913 年布拉格定律奠基，1953 年同晶置换铸成相位钥匙，2013 年直接电子探测器引发分辨率革命，2020 年 AlphaFold2 达中位 GDT_TS 约 92.4',
  draw,
})
