// mb ch2-s3 DNA 聚合酶体系：pol I、pol II 与 pol III（39-b2 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、共同特性与 pol I ============
  b.panel(30, 132, 660, 316, { title: '一、共同催化特性与 pol I（Kornberg，1956 发现）' })
  const props = ['需模板与引物', '5′→3′ 聚合', '3′→5′ 校对', '不能从头合成']
  props.forEach((s, i) => {
    b.tag(130 + i * 160, 182, s, { fill: C.panelB, stroke: C.sub, size: 12.5, weight: 700, tfill: C.sub, pad: 10 })
  })
  b.text(60, 226, 'pol I：单链多肽，928 aa（约 109 kDa）', { size: 13.5, weight: 700, fill: C.ink })
  b.domains(60, 244, 44, [
    { label: '5′→3′ 外切', frac: 170, fill: C.enzL, stroke: C.enz },
    { label: 'Klenow 片段（68 kDa）', frac: 390, fill: C.proL, stroke: C.pro, sub: '聚合 + 3′→5′ 校对' },
  ])
  b.line(230, 236, 230, 292, { stroke: C.bad, sw: 1.8, dash: '5 4' })
  b.ctext(230, 312, '枯草杆菌蛋白酶切点', { size: 10.5, fill: C.bad })
  b.text(60, 336, '切口平移（nick translation）', { size: 13, weight: 700, fill: C.enzD })
  b.line(60, 378, 610, 378, { stroke: C.dna, sw: 2.6 })
  b.line(294, 372, 306, 384, { stroke: C.bad, sw: 2.4 })
  b.line(294, 384, 306, 372, { stroke: C.bad, sw: 2.4 })
  b.arrow(288, 358, 228, 358, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ctext(258, 342, '5′→3′ 外切', { size: 11, fill: C.enzD })
  b.arrow(312, 398, 372, 398, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(342, 414, '5′→3′ 聚合填补', { size: 11, fill: C.accD })
  b.wtext(60, 424, '切口平移是体外标记探针的技术基础；polA⁻ 突变株仍可存活——pol I 主要承担修复；pol II 受 SOS 诱导，参与修复与复制重启。', { size: 11.5, fill: C.mute, maxW: 610, lh: 16 })

  // ============ 二、pol III 全酶亚基 ============
  b.panel(690, 132, 680, 316, { title: '二、pol III 全酶（10 种亚基）：复制主导酶（约 1000 nt/s）' })
  b.table(710, 180, 640, {
    headers: ['亚基', '功能'],
    colW: [230, 410],
    rowH: 32,
    fontSize: 12.5,
    rows: [
      ['α（DnaE）', '聚合酶催化亚基，合成 DNA'],
      ['ε（DnaQ）', '3′→5′ 外切酶，校对功能'],
      ['θ', '稳定 ε 亚基'],
      ['β（滑动夹）', '二聚体环状夹，套住 DNA 赋予高续进性'],
      ['γ 复合体', 'γ₃δδ′χψ，ATP 依赖装载 β 夹（钳载蛋白）'],
      ['τ', '连接两个核心酶并结合解旋酶 DnaB'],
    ],
  })
  b.text(710, 434, '组装成不对称二聚体，在复制叉处同时合成前导链与后随链。', { size: 12, fill: C.sub })

  // ============ 三、真核 DNA 聚合酶分工 ============
  b.panel(30, 462, 1340, 250, { title: '三、真核 DNA 聚合酶分工（至少 15 种）' })
  b.table(60, 506, 1280, {
    headers: ['聚合酶', '功能', '特点'],
    colW: [250, 430, 600],
    rowH: 26,
    fontSize: 12.5,
    rows: [
      ['pol α / 引发酶', '起始每条链的合成', '无校对活性'],
      ['pol δ', '主导后随链延伸', '与 FEN1 协同完成冈崎片段置换'],
      ['pol ε', '主导前导链延伸', '连续合成'],
      ['pol γ', '负责线粒体 DNA 复制', '线粒体基因组'],
      ['pol β', '碱基切除修复（BER）', '短修补填补'],
      ['跨损伤 pol（ζ、η、ι、κ）', '损伤位点旁路合成', '易错 / 损伤容忍'],
    ],
  })

  // ============ 四、β 滑动夹与 τ 双核心 ============
  b.panel(30, 724, 1340, 246, { title: '四、β 滑动夹与 τ 双核心：双链协同复制' })
  b.arrow(90, 830, 700, 830, { stroke: C.dna, sw: 2.4, marker: 'dna' })
  b.rect(240, 800, 120, 60, { fill: C.accL, stroke: C.acc, sw: 2, rx: 10 })
  b.ctext(300, 834, '核心酶', { size: 13.5, weight: 700, fill: C.accD })
  b.circle(420, 830, 22, { stroke: C.pro, sw: 5 })
  b.ctext(420, 796, 'β 滑动夹', { size: 11.5, weight: 700, fill: C.proD })
  b.arrow(90, 920, 700, 920, { stroke: C.dna, sw: 2.4, marker: 'dna' })
  b.rect(360, 890, 120, 60, { fill: C.accL, stroke: C.acc, sw: 2, rx: 10 })
  b.ctext(420, 924, '核心酶', { size: 13.5, weight: 700, fill: C.accD })
  b.circle(540, 920, 22, { stroke: C.pro, sw: 5 })
  b.ctext(540, 886, 'β 滑动夹', { size: 11.5, weight: 700, fill: C.proD })
  b.rect(300, 862, 150, 24, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 6 })
  b.ctext(375, 878, 'τ 亚基', { size: 11.5, weight: 700, fill: C.enzD })
  b.circle(140, 875, 26, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ctext(140, 880, 'DnaB', { size: 10.5, weight: 700, fill: C.dnaD })
  b.line(166, 875, 300, 874, { stroke: C.mute, sw: 1.6, dash: '5 4' })
  b.ctext(140, 944, '解旋酶', { size: 11, fill: C.sub })
  b.text(712, 824, '前导链模板（连续合成）', { size: 12, fill: C.sub })
  b.text(712, 914, '后随链模板（不连续合成）', { size: 12, fill: C.sub })
  b.wtext(760, 860, 'γ 复合体（钳载蛋白）以 ATP 水解将 β 夹装载至引物-模板连接处；β 二聚体环套住 DNA，使 pol III 获得高续进性。', { size: 12, fill: C.sub, maxW: 570, lh: 18 })
  b.wtext(760, 932, 'τ 亚基连接两个核心并结合 DnaB，实现前导链与后随链的协同合成。', { size: 12, fill: C.sub, maxW: 570, lh: 18 })
}

export default scene({
  title: 'DNA 聚合酶体系：pol I、pol II 与 pol III',
  subtitle: '所有 DNA pol 需模板与引物、5′→3′ 合成并具 3′→5′ 校对——pol I（928 aa，Klenow 片段 + 切口平移）主修复，pol III 全酶（10 亚基、β 滑动夹、τ 双核心）主复制',
  draw,
})
