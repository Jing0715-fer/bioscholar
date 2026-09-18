// cb ch1-s1 细胞学说与细胞的统一性（39-d 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、时间线：细胞的发现 → 细胞学说 ============
  b.panel(30, 132, 1340, 214, { title: '一、从细胞的发现到细胞学说（1665—1855）' })
  b.timelineH(130, 262, 1200, [
    { at: 0.02, label: '1665 Hooke', sub: '软木「小室」命名 cell', above: true, c: C.acc },
    { at: 0.2, label: 'Leeuwenhoek', sub: '首次观察到活细胞', above: false, c: C.acc },
    { at: 0.48, label: '1838–39 学说建立', sub: 'Schleiden＋Schwann', above: true, c: C.dna },
    { at: 0.72, label: '1855 Virchow', sub: '细胞来自细胞', above: false, c: C.dna },
    { at: 0.95, label: '三大发现之一', sub: '与进化论、遗传定律并称', above: true, c: C.pro },
  ])

  // ============ 二、细胞学说三大要点 ============
  b.panel(30, 366, 430, 282, { title: '二、细胞学说三大要点' })
  const pts: [string, string][] = [
    ['结构与功能的基本单位', '多细胞生物由细胞及其产物构成'],
    ['生命活动的基本单位', '代谢、生长、增殖、遗传与应激以细胞为独立单元'],
    ['新细胞来自已存在细胞', 'Virchow（1855）：omnis cellula e cellula'],
  ]
  pts.forEach(([t, s], i) => {
    const y = 424 + i * 64
    b.circle(62, y - 6, 14, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
    b.ctext(62, y - 1, `${i + 1}`, { size: 13, weight: 700, fill: C.dnaD })
    b.text(88, y, t, { size: 13.5, weight: 700, fill: C.ink })
    b.wtext(88, y + 20, s, { size: 11.5, fill: C.sub, maxW: 330, lh: 16 })
  })
  b.wtext(56, 620, '细胞学说将生物学研究的焦点从组织器官聚焦到细胞，是现代生物学的基石。', { size: 11.5, fill: C.mute, maxW: 390, lh: 16 })

  // ============ 三、细胞的统一性 ============
  b.panel(480, 366, 890, 282, { title: '三、细胞的统一性：一切细胞共享同一套分子装置' })
  b.dna(530, 452, 130, { amp: 8 })
  b.ctext(595, 492, 'DNA 遗传物质', { size: 12, weight: 600, fill: C.dnaD })
  b.arrow(678, 444, 748, 444, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.ctext(713, 428, '转录', { size: 11.5, weight: 600, fill: C.dnaD })
  b.rnaW(760, 452, 110, { stroke: C.rna, amp: 10 })
  b.ctext(815, 492, 'RNA 信息中介', { size: 12, weight: 600, fill: C.rnaD })
  b.arrow(885, 444, 955, 444, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.ctext(920, 428, '翻译', { size: 11.5, weight: 600, fill: C.rnaD })
  b.ribo(920, 468, { scale: 0.9 })
  b.rect(965, 428, 120, 46, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(1025, 456, '蛋白质', { size: 13.5, weight: 700, fill: C.proD })
  b.ctext(920, 492, '核糖体', { size: 10.5, weight: 600, fill: C.bad })
  const cards: [number, string, string][] = [
    [530, 'ATP 能量货币', '一切细胞均以 ATP 为能量流通货币'],
    [812, '磷脂双分子层', '一切生物膜以磷脂双层为基本骨架'],
    [1094, '通用遗传密码', '密码几乎完全通用——源自共同祖先'],
  ]
  cards.forEach(([x, t, s]) => {
    b.rect(x, 528, 262, 88, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
    b.ctext(x + 131, 560, t, { size: 13.5, weight: 700, fill: C.ink })
    b.wtext(x + 18, 588, s, { size: 11, fill: C.sub, maxW: 226, lh: 15 })
  })

  // ============ 四、病毒不是细胞 ============
  b.panel(30, 666, 1340, 314, { title: '四、病毒不是细胞：专性胞内寄生的「分子级生命形式」' })
  b.virion(150, 790, 50, { shape: 'enveloped' })
  b.ctext(150, 884, '包膜病毒（示意）', { size: 12, weight: 700, fill: C.bad })
  b.wtext(84, 910, '只含一种核酸（DNA 或 RNA）与蛋白质外壳，部分具包膜。', { size: 10.5, fill: C.mute, maxW: 140, lh: 15 })
  b.table(300, 716, 1050, {
    headers: ['对照项', '细胞', '病毒'],
    colW: [180, 400, 470],
    rowH: 38,
    fontSize: 11.5,
    rows: [
      ['核糖体（翻译机器）', '有', '无'],
      ['能量转换系统', '有（线粒体／呼吸链）', '无'],
      ['独立代谢网络', '有完整代谢网络', '无——借用宿主酶、核糖体与能量'],
      ['核酸类型', 'DNA 与 RNA 并存', '仅一种（DNA 或 RNA）'],
      ['增殖方式', '细胞分裂', '在宿主细胞内复制与装配'],
    ],
  })
  b.text(300, 968, '类病毒（仅感染性 RNA）与朊病毒（仅蛋白质）显示生命与非生命的连续谱系——唯有细胞具备独立完成生命活动的全套装置。', { size: 11.5, fill: C.sub })
}

export default scene({
  title: '细胞学说与细胞的统一性',
  subtitle: '1665 Hooke 命名细胞、1838–1839 Schleiden 与 Schwann 建立学说、1855 Virchow 补「细胞来自细胞」；一切细胞共享 DNA–RNA–蛋白质体系、ATP、磷脂双层与通用密码',
  draw,
})
