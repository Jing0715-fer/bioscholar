// mi ch1-s2 微生物学发展简史（39-f 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、时间线 ============
  b.panel(30, 132, 1340, 320, { title: '一、发展简史时间线：从「微动物」到青霉素（1674–1928）' })
  b.timelineH(110, 300, 1220, [
    { at: 0.03, label: '1674 列文虎克首见「微动物」', sub: '自制单式显微镜 200–300×', above: true, c: C.acc },
    { at: 0.115, label: '1676 首次看见细菌', sub: '牙垢与胡椒浸液中', above: false, c: C.dna },
    { at: 0.27, label: '1857 发酵由特定微生物引起', sub: '巴斯德：乳酸·丁酸·酒变酸', above: true, c: C.rna },
    { at: 0.43, label: '1876 科赫发现炭疽杆菌', sub: '首次证明杆菌体外形成耐热芽孢', above: false, c: C.enz },
    { at: 0.55, label: '1882 发现结核杆菌', sub: '3·24 → 世界防治结核病日', above: true, c: C.enz },
    { at: 0.66, label: '1885 狂犬疫苗首次救治', sub: '减毒疫苗开启免疫接种新纪元', above: false, c: C.rna },
    { at: 0.80, label: '1905 科赫获诺贝尔奖', sub: '生理学或医学奖', above: true, c: C.pro },
    { at: 0.93, label: '1928 弗莱明发现青霉素', sub: '抗生素时代开启', above: false, c: C.bad },
  ])
  b.ctext(700, 418, '巴斯德与科赫使微生物学从形态描述走向实验科学：纯培养与科赫法则成为病原鉴定的金标准', { size: 11.5, fill: C.mute })

  // ============ 二、奠基双峰与学科分期 ============
  b.panel(30, 472, 1340, 508, { title: '二、奠基双峰：巴斯德与科赫' })

  // 左上：巴斯德卡
  b.rect(50, 512, 630, 224, { fill: C.rnaL, fillOp: 0.35, stroke: C.rna, sw: 1.6, rx: 10 })
  b.tag(200, 540, '巴斯德「微生物学之父」', { fill: C.rnaL, stroke: C.rna, size: 14, weight: 700, tfill: C.rnaD, pad: 12 })
  const pasteur = [
    '曲颈瓶实验否定「自然发生说」',
    '1857 年起证明乳酸发酵、丁酸发酵与酒的变酸皆由特定微生物引起',
    '创立巴氏消毒法',
    '依据老龄培养物毒力减弱原理制成鸡霍乱疫苗与狂犬疫苗（1885 年首次救治被疯犬咬伤的男孩）',
  ]
  let yy = 580
  pasteur.forEach(t => {
    b.circle(72, yy - 4, 3.5, { fill: C.rna })
    const e = b.wtext(84, yy, t, { size: 12, fill: C.sub, maxW: 560, lh: 18 })
    yy = e + 10
  })

  // 左下：科赫卡
  b.rect(50, 756, 630, 224, { fill: C.enzL, fillOp: 0.35, stroke: C.enz, sw: 1.6, rx: 10 })
  b.tag(200, 784, '科赫与科赫法则', { fill: C.enzL, stroke: C.enz, size: 14, weight: 700, tfill: C.enzD, pad: 12 })
  const koch = [
    '首创固体培养基，建立纯培养技术',
    '提出科赫法则（四条）——病原微生物鉴定的金标准',
    '发现炭疽杆菌（1876）、结核杆菌（1882）、霍乱弧菌（1883）',
    '1905 年获诺贝尔生理学或医学奖',
    '门下贝林与北里柴三郎制成白喉与破伤风抗毒素——贝林获 1901 年首届诺贝尔奖',
  ]
  yy = 824
  koch.forEach(t => {
    b.circle(72, yy - 4, 3.5, { fill: C.enz })
    const e = b.wtext(84, yy, t, { size: 12, fill: C.sub, maxW: 560, lh: 18 })
    yy = e + 10
  })

  // 右：分期表
  b.ctext(1025, 514, '微生物学史分期（大致年代）', { size: 14, weight: 700, fill: C.ink })
  b.table(700, 530, 650, {
    headers: ['分期', '大致年代', '特征', '代表人物'],
    colW: [95, 115, 260, 180],
    rowH: 46,
    fontSize: 12.5,
    rows: [
      ['史前期', '史前–1674', '酿酒、制酱——知其然的经验应用', '各文明先民'],
      ['初创期', '1674–1861', '显微镜下的形态描述', '列文虎克'],
      ['奠基期', '1861–1897', '否定自然发生·纯培养·科赫法则', '巴斯德·科赫'],
      ['发展期', '1897–1953', '病毒滤过性·加富培养·抗生素', '弗莱明等'],
      ['分子时期', '1953–', 'DNA 双螺旋 → 分子遗传学与基因工程', '沃森、克里克等'],
    ],
  })

  // 右下：四项发现的学科奠基
  b.rect(700, 828, 650, 148, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.5, rx: 9 })
  b.text(716, 856, '四项发现的学科奠基', { size: 13.5, weight: 700, fill: C.accD })
  const founds: Array<[number, number, string, string]> = [
    [716, 890, '加富培养 → 微生物生态学', C.dna],
    [716, 918, '病毒滤过性 → 病毒学', C.bad],
    [1040, 890, '青霉素发现 → 抗生素时代', C.ok],
    [1040, 918, '肺炎链球菌转化实验 → 分子遗传学', C.pro],
  ]
  founds.forEach(([x, y, t, c]) => {
    b.rect(x, y - 9, 9, 9, { fill: c, rx: 2 })
    b.text(x + 16, y, t, { size: 12, weight: 600, fill: C.sub })
  })
}

export default scene({
  title: '微生物学发展简史：从史前发酵经验到分子生物学',
  subtitle: '1674 列文虎克首见「微动物」，1676 首见细菌；巴斯德与科赫双峰并峙（1885 狂犬疫苗、1905 科赫诺奖）；1928 弗莱明发现青霉素开启抗生素时代',
  draw,
})
