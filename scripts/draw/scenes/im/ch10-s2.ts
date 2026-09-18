// im ch10-s2 BCR 复合体与 B 细胞活化信号（39-g 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // 副标题过长（scene 两行自动换行仍溢出）→ 手动三行渲染（原文未改动）
  b.ctext(700, 77, 'BCR 由 mIgM/mIgD 与 Igα/Igβ（CD79a/b）组成，信号亚单位共携两枚 ITAM，经 Lyn-Syk-BLNK-PLCγ2 接通钙流、MAPK 与 NF-κB 三条主干（Btk 缺陷致 XLA）；', { size: 12.5, fill: C.mute })
  b.ctext(700, 94, 'CD21-CD19-CD81 共受体以 C3d 耦联补体激活、显著降低活化阈值，EB 病毒经 gp350 盗用 CD21；CD22 与 FCGR2B 经 ITIM 招募 SHP-1 与 SHIP 负调，抗体反馈构成自限环；', { size: 12.5, fill: C.mute })
  b.ctext(700, 111, 'TD 抗原须 Tfh 辅助并产出记忆与亲和力成熟，TI-1 依赖丝裂原、TI-2 依赖重复表位交联，婴幼儿对 TI-2 应答弱故多糖疫苗须制成结合疫苗', { size: 12.5, fill: C.mute })

  // ============ 一、BCR 复合体与信号主干 ============
  b.panel(30, 132, 1340, 300, { title: '一、BCR 复合体：识别亚单位 + 信号亚单位，接通三条主干' })

  b.rect(60, 182, 560, 230, { fill: C.rnaL, fillOp: 0.3, stroke: C.rna, sw: 1.6, rx: 9 })
  b.text(80, 206, 'BCR 复合体的分子构造', { size: 12.5, weight: 700, fill: C.rnaD })
  b.bilayer(110, 372, 330)
  b.rect(140, 272, 150, 60, { fill: C.bg, stroke: C.rna, sw: 1.6, rx: 7 })
  b.ctext(215, 296, 'mIgM / mIgD', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(215, 316, '识别亚单位', { size: 9.5, fill: C.mute })
  b.rect(320, 272, 150, 60, { fill: C.bg, stroke: C.pro, sw: 1.6, rx: 7 })
  b.ctext(395, 296, 'Igα / Igβ', { size: 11.5, weight: 700, fill: C.proD })
  b.ctext(395, 316, '（CD79a/b）信号亚单位', { size: 9, fill: C.mute })
  b.line(215, 332, 215, 366, { stroke: C.rna, sw: 2 })
  b.line(395, 332, 395, 366, { stroke: C.pro, sw: 2 })
  b.circle(370, 352, 15, { fill: C.enzL, stroke: C.enz, sw: 1.4 })
  b.ctext(370, 356, 'ITAM', { size: 7.5, weight: 700, fill: C.enzD })
  b.circle(428, 352, 15, { fill: C.enzL, stroke: C.enz, sw: 1.4 })
  b.ctext(428, 356, 'ITAM', { size: 7.5, weight: 700, fill: C.enzD })
  b.wtext(80, 340, 'mIg 识别抗原、Igα/Igβ 传讯：两条信号链各携一枚 ITAM，共两枚磷酸化码头。', { size: 10, fill: C.sub, maxW: 240, lh: 14 })
  b.ctext(215, 398, 'B 细胞膜', { size: 9, fill: C.mute })

  b.rect(650, 182, 690, 230, { fill: C.bg, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(670, 206, '信号转导：Lyn-Syk-BLNK-PLCγ2 主干', { size: 12.5, weight: 700, fill: C.accD })
  const kin: Array<[number, string]> = [[670, 'Lyn'], [800, 'Syk'], [930, 'BLNK'], [1060, 'PLCγ2']]
  kin.forEach(([x, t], i) => {
    b.rect(x, 222, 110, 42, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.5, rx: 7 })
    b.ctext(x + 55, 248, t, { size: 12, weight: 700, fill: C.accD })
    if (i < 3) b.arrow(x + 114, 243, x + 124, 243, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  })
  b.arrow(670, 276, 670, 300, { stroke: C.mute, sw: 1.5, marker: 'mute', opacity: 0 })
  const branches: Array<[number, string, string]> = [
    [660, '钙流', 'NFAT 活化'],
    [890, 'MAPK', '增殖转录'],
    [1120, 'NF-κB', '存活与活化'],
  ]
  branches.forEach(([x, t, s]) => {
    b.rect(x, 300, 200, 54, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.5, rx: 8 })
    b.ctext(x + 100, 322, t, { size: 12, weight: 700, fill: C.dnaD })
    b.ctext(x + 100, 342, s, { size: 9.5, fill: C.sub })
    b.arrow(x + 100, 264, x + 100, 296, { stroke: C.dna, sw: 1.6, marker: 'dna' })
  })
  b.wtext(670, 378, 'ITAM 磷酸化后接通三条主干：Btk 在通路中承前启后——其缺陷即 XLA。', { size: 10.5, fill: C.sub, maxW: 650, lh: 15 })

  // ============ 二、共受体正反馈与负调 ============
  b.panel(30, 448, 1340, 250, { title: '二、CD21 共受体耦联补体正反馈 · CD22/FCGR2B 负调与抗体反馈' })

  b.rect(60, 498, 620, 182, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(78, 522, 'CD21-CD19-CD81 共受体：阈值调低器', { size: 12.5, weight: 700, fill: C.dnaD })
  b.wtext(78, 546, '抗原若同时携带 C3d，经 CD21（CR2）把补体激活与 BCR 信号并联——显著降低活化所需抗原量。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.rect(84, 586, 150, 44, { fill: C.bg, stroke: C.dna, sw: 1.4, rx: 7 })
  b.ctext(159, 612, 'C3d-抗原', { size: 10.5, weight: 700, fill: C.dnaD })
  b.arrow(238, 608, 278, 608, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.rect(282, 586, 160, 44, { fill: C.bg, stroke: C.dna, sw: 1.4, rx: 7 })
  b.ctext(362, 612, 'CD21-CD19-CD81', { size: 10, weight: 700, fill: C.dnaD })
  b.arrow(446, 608, 486, 608, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.rect(490, 586, 130, 44, { fill: C.bg, stroke: C.dna, sw: 1.4, rx: 7 })
  b.ctext(555, 612, '活化阈值↓', { size: 10.5, weight: 700, fill: C.dnaD })
  b.wtext(78, 654, 'EB 病毒以 gp350 盗用 CD21 通道进入 B 细胞。', { size: 10.5, weight: 600, fill: C.bad, maxW: 580, lh: 14 })

  b.rect(710, 498, 630, 182, { fill: C.badL, fillOp: 0.25, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(728, 522, '负调双闸与抗体反馈自限环', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(728, 546, 'CD22 与 FCGR2B 胞内段带 ITIM：分别招募 SHP-1 与 SHIP，给 BCR 信号踩刹车。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })
  b.rect(748, 580, 240, 44, { fill: C.bg, stroke: C.bad, sw: 1.4, rx: 7 })
  b.ctext(868, 604, 'CD22 → SHP-1', { size: 10.5, weight: 700, fill: C.ink })
  b.rect(1030, 580, 250, 44, { fill: C.bg, stroke: C.bad, sw: 1.4, rx: 7 })
  b.ctext(1155, 604, 'FCGR2B → SHIP', { size: 10.5, weight: 700, fill: C.ink })
  b.wtext(728, 648, '免疫复合物交联 BCR 与 FCGR2B → 抗体反馈构成体液应答的自限环：抗体多了，刹车自动收紧。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })

  // ============ 三、TD / TI-1 / TI-2 三类抗原 ============
  b.panel(30, 712, 1340, 262, { title: '三、TD · TI-1 · TI-2：三类抗原的分野（婴幼儿 TI-2 应答弱，多糖须制成结合疫苗）' })
  b.table(60, 764, 1280, {
    headers: ['比较项目', 'TD 抗原', 'TI-1 抗原', 'TI-2 抗原'],
    colW: [130, 390, 360, 400],
    rowH: 30,
    fontSize: 10.5,
    rows: [
      ['代表抗原', '蛋白质抗原、类毒素', 'LPS 等具丝裂原活性的分子', '细菌荚膜多糖、聚合鞭毛素'],
      ['表位与结构', '表位多样、重复性低', 'B 表位加丝裂原部分', '高度重复的线性表位'],
      ['T 细胞辅助', '必需（Tfh-CD40-IL-21）', '不需要', '不需要（补体可协同）'],
      ['活化机制', 'BCR 加共刺激与细胞因子', '丝裂原信号（高浓度多克隆）', '多价交联 mIgM'],
      ['应答性质', '生发中心、转类、亲和力成熟、记忆', '快而原始，IgM 为主、无记忆', 'IgM 为主、无记忆、婴幼儿应答弱'],
    ],
  })
}

export default scene({
  title: 'BCR 复合体与 B 细胞活化信号：构造、正负调控与三类抗原',
  draw,
})
