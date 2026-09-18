// vi ch10-s4 跨种传播与人兽共患（39-j 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、跨种传播四阶段 ============
  b.panel(30, 132, 660, 430, { title: '一、跨种传播的四个阶段' })
  b.wtext(46, 190, '对二十世纪末以来新发传染病的系统评估显示：约 60%–75% 的新发人类传染病源于人兽共患，其中多数病毒的源头为野生动物。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  const person = (px: number, py: number, c: string) => {
    b.circle(px, py, 6, { fill: 'none', stroke: c, sw: 2 })
    b.rect(px - 5, py + 8, 10, 18, { fill: 'none', stroke: c, sw: 2, rx: 3 })
  }
  const bat = (px: number, py: number, c: string) => {
    b.polygon([[px - 8, py], [px - 26, py - 9], [px - 14, py + 5]], { fill: c, fillOp: 0.7 })
    b.polygon([[px + 8, py], [px + 26, py - 9], [px + 14, py + 5]], { fill: c, fillOp: 0.7 })
    b.ellipse(px, py, 9, 6, { fill: c, fillOp: 0.85 })
    b.polygon([[px - 4, py - 5], [px - 7, py - 10], [px - 1, py - 6]], { fill: c })
    b.polygon([[px + 4, py - 5], [px + 7, py - 10], [px + 1, py - 6]], { fill: c })
  }
  const stages: [string, string][] = [
    ['储存宿主循环', '动物种群内长期维持'],
    ['溢出', '偶然跨种感染个体'],
    ['获得人传人', '适应人际传播链条'],
    ['人群流行', '社区乃至全球扩散'],
  ]
  stages.forEach(([t, s], i) => {
    const bx = 56 + i * 156
    b.rect(bx, 240, 142, 168, { fill: C.panelB, stroke: C.acc, sw: 1.8, rx: 10 })
    b.ctext(bx + 71, 396, t, { size: 12, weight: 700, fill: C.accD })
    b.wtext(bx + 12, 414, s, { size: 9.5, fill: C.mute, maxW: 118, lh: 13 })
    if (i < 3) b.arrow(bx + 144, 324, bx + 154, 324, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  })
  // 图标：蝙蝠循环 / 溢出 / 人传人 / 流行曲线
  bat(127, 290, C.dna)
  b.circle(127, 290, 36, { fill: 'none', stroke: C.dna, sw: 1.6, dash: '5 4' })
  bat(258, 280, C.dna)
  person(332, 292, C.bad)
  b.arrow(276, 284, 312, 288, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(295, 268, '溢出', { size: 9.5, weight: 700, fill: C.bad })
  person(440, 282, C.bad)
  person(492, 282, C.bad)
  b.arrow(458, 292, 474, 292, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.arrow(474, 306, 458, 306, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.axis(560, 344, 90, 56, { xticks: [], yticks: [], grid: false })
  b.curve(560, 344, 90, 56, [[0, 0.02], [0.3, 0.25], [0.55, 0.95], [0.8, 0.5], [1, 0.15]], { stroke: C.bad, sw: 2.2, smooth: true })
  b.wtext(46, 466, '溢出未必成疫：多数跨种跳跃止步于第二阶段；一旦获得稳定的人传人能力，才可能点燃人群流行。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(46, 500, '生态界面治理（土地利用、活体动物市场、养殖场选址）正是干预的关键窗口。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、蝙蝠：异常重要的病毒库 ============
  b.panel(710, 132, 660, 430, { title: '二、蝙蝠：异常重要的病毒库' })
  bat(880, 300, C.dnaD)
  const fTags: [number, number, string][] = [
    [880, 208, '飞行高温（每日发热样代谢）'],
    [780, 262, 'STING 通路低反应性'],
    [990, 262, '组成性干扰素'],
    [880, 366, '长寿 · 高密度群居 · 冬眠'],
  ]
  fTags.forEach(([tx, ty, s]) => {
    b.tag(tx, ty, s, { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 7 })
  })
  b.ctext(880, 412, '低炎症＋高耐受的免疫模式', { size: 10.5, weight: 700, fill: C.sub })
  b.wtext(726, 452, '亨德拉（1994，澳大利亚，狐蝠经马）、尼帕（1998，马来西亚，狐蝠经猪）、SARSr-CoV 等均以蝙蝠为储存宿主。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(726, 488, '尼帕 1998 年的暴发与养猪场侵入蝙蝠觅食区直接相关——土地利用变化把人类与蝙蝠、啮齿类推入新接触。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 三、三次冠状病毒跨种事件 ============
  b.panel(30, 586, 660, 394, { title: '三、三次冠状病毒跨种事件：三种结局' })
  b.table(50, 660, 600, {
    headers: ['事件', '年份', '动物环节', '结局'],
    rows: [
      ['SARS-CoV', '2003', '果子狸（放大宿主）', '疫情被扑灭'],
      ['MERS-CoV', '2012', '骆驼（稳定界面）', '持续零星溢出'],
      ['SARS-CoV-2', '2019 起', '中间环节未定（RaTG13 同源性约 96%）', '全球大流行'],
    ],
    colW: [110, 70, 250, 170], rowH: 46, fontSize: 12,
  })
  b.wtext(50, 862, 'SARS-CoV 经果子狸放大而 MERS-CoV 与骆驼建立稳定界面；SARS-CoV-2 的最近亲属为蝙蝠 RaTG13（同源性约 96%），中间环节未定——起源仍在调查。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(50, 900, '同一类病毒、三种跨种结局：围堵、拉锯与大流行。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 四、H5N1 的种属屏障 ============
  b.panel(710, 586, 660, 394, { title: '四、禽流感 H5N1：种属屏障的分子构成' })
  b.text(730, 644, '三道屏障：', { size: 12, weight: 700, fill: C.ink })
  const barrs: [string, string][] = [
    ['① 受体连接方式', 'α2,6 与 α2,3 唾液酸的组织分布'],
    ['② HA 多碱性切割位点', '需多种蛋白酶活化方能高效入侵'],
    ['③ PB2 627K–ANP32A', '聚合酶辅主因子的种属适配'],
  ]
  barrs.forEach(([t, s], i) => {
    const by = 662 + i * 54
    b.rect(730, by, 320, 44, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8, fillOp: 0.55 })
    b.text(742, by + 19, t, { size: 11, weight: 700, fill: C.bad })
    b.text(742, by + 35, s, { size: 9.5, fill: C.sub })
  })
  b.wtext(1080, 656, '1997 年香港以来，H5N1 全球累计人间病例八百余例、死亡四百余例——病死率过半。', { size: 10.5, fill: C.sub, maxW: 250, lh: 15 })
  b.wtext(1080, 716, '2020 年以来 2.3.4.4b 分支在候鸟中泛动物流行，多次溢出至海狮等哺乳动物。', { size: 10.5, fill: C.sub, maxW: 250, lh: 15 })
  b.wtext(730, 838, '2024 年更现北美奶牛场牛群感染与工人暴露：病毒经乳汁与挤奶设备在牛群间高效传播——哺乳动物适应的门槛远比想象中低。', { size: 10.5, fill: C.bad, maxW: 630, lh: 15 })
  b.text(730, 856, '宿主范围的分子决定因素：', { size: 11.5, weight: 700, fill: C.ink })
  const dts = ['受体', '蛋白酶活化', '聚合酶辅因子', '免疫拮抗匹配', '温度']
  let dx = 730
  dts.forEach(s => {
    const w = s.length * 10.5 + 16
    b.tag(dx + w / 2, 880, s, { fill: C.panelB, stroke: C.sub, size: 10, weight: 700, tfill: C.sub, pad: 6 })
    dx += w + 10
  })
  b.wtext(730, 920, '生态界面治理是 One Health 的干预点：溢出预防优于疫情应对。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })
}

export default scene({
  title: '跨种传播与人兽共患：四阶段、蝙蝠病毒库与种属屏障',
  subtitle: '60%–75% 新发人类传染病为人兽共患；储存宿主—溢出—人传人—流行四阶段；SARS／MERS／SARS-CoV-2（RaTG13 约 96%）三种结局；H5N1 病死率过半、2024 牛群感染',
  draw,
})
