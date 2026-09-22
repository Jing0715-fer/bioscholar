// mi ch11-s3 多相分类与经典鉴定流程（39-f 批6）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、经典表型鉴定四条线索 ============
  b.panel(30, 132, 1340, 220, { title: '一、经典表型鉴定：四条线索的标准流程' })

  const clues: Array<[number, string, string, string, string]> = [
    [64, '① 菌落形态', '大小 · 颜色 · 边缘 · 光滑度——平板上的第一眼', C.dna, C.dnaL],
    [392, '② 细胞形态与革兰反应', '球菌/杆菌/螺旋 · 芽孢与鞭毛 · 革兰阳/阴性', C.pro, C.proL],
    [720, '③ 生理生化试验', 'IMViC · 触酶 · 氧化酶等代谢指纹', C.enz, C.enzL],
    [1048, '④ 血清学分型', '已知抗体鉴定表面抗原（血清型）', C.acc, C.accL],
  ]
  clues.forEach(([x, t, s, c, cl]) => {
    b.rect(x, 176, 304, 108, { fill: cl, fillOp: 0.45, stroke: c, sw: 1.5, rx: 9 })
    b.tag(x + 88, 204, t, { fill: cl, stroke: c, size: 11.5, weight: 700, tfill: C.ink, pad: 8 })
    b.wtext(x + 16, 232, s, { size: 10.5, fill: C.sub, maxW: 272, lh: 15 })
  })
  b.ctext(700, 316, '四条线索互补印证 → 初步鉴定到属、种', { size: 11.5, weight: 700, fill: C.ink })

  // ============ 二、数值分类与 API 20E ============
  b.panel(30, 364, 660, 290, { title: '二、数值分类与商品化鉴定系统（API 20E / VITEK）' })

  b.wtext(60, 402, 'Sneath 与 Sokal（1950–60 年代）系统化：对两株菌测定 50–100 项以上等权特征，逐项编码计算相似系数 S 值聚类——S 值达约定阈值（同种通常 ≥70%–75%）即归为一个表观群。', { size: 10.5, fill: C.sub, maxW: 620, lh: 16 })
  // API 20E 试条示意
  b.rect(60, 468, 620, 54, { fill: C.bg, stroke: C.sub, sw: 1.6, rx: 6 })
  for (let i = 0; i < 20; i++) {
    const x = 76 + i * 30
    b.rect(x, 478, 24, 34, { fill: i % 3 === 0 ? C.enzL : i % 3 === 1 ? C.okL : C.panelB, stroke: C.faint, sw: 1, rx: 3 })
    b.ctext(x + 12, 532, `${i + 1}`, { size: 7.5, fill: C.mute })
  }
  b.ctext(370, 552, '20 个生化底物干燥于反应杯，接种后 4–24 小时显色', { size: 10, fill: C.mute })
  // 数字编码
  b.tag(180, 590, '阳性记 1', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 7 })
  b.arrow(236, 590, 300, 590, { stroke: C.sub, sw: 1.8, marker: 'mute' })
  b.tag(370, 590, '7 位数字编码', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD, pad: 8 })
  b.arrow(430, 590, 494, 590, { stroke: C.sub, sw: 1.8, marker: 'mute' })
  b.tag(566, 590, '检索库 → 菌名', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 8 })
  b.wtext(60, 624, 'API 20E 把数值分类固化为「试条即数据库」；VITEK 等自动化系统同源而高通量。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、多相分类三足鼎立 ============
  b.panel(710, 364, 660, 290, { title: '三、多相分类：表型 · 基因型 · 系统发育三证据链' })

  b.ellipse(880, 480, 90, 62, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 2 })
  b.ctext(880, 470, '表型', { size: 13, weight: 700, fill: C.dnaD })
  b.ctext(880, 490, '形态·生化·血清', { size: 9, fill: C.mute })
  b.ellipse(1090, 480, 90, 62, { fill: C.proL, fillOp: 0.6, stroke: C.pro, sw: 2 })
  b.ctext(1090, 470, '基因型', { size: 13, weight: 700, fill: C.proD })
  b.ctext(1090, 490, 'DNA-DNA 杂交', { size: 9, fill: C.mute })
  b.ctext(1090, 504, 'G+C 等', { size: 9, fill: C.mute })
  b.ellipse(985, 566, 90, 62, { fill: C.accL, fillOp: 0.6, stroke: C.acc, sw: 2 })
  b.ctext(985, 556, '系统发育', { size: 13, weight: 700, fill: C.accD })
  b.ctext(985, 576, '16S rRNA / 基因组树', { size: 9, fill: C.mute })
  b.ctext(985, 508, '多相分类', { size: 14, weight: 700, fill: C.ink })
  b.wtext(730, 630, '三条证据链整合成当代新种描述的规范框架——任何单链都不足为凭。', { size: 11, weight: 700, fill: C.ink })

  // ============ 四、IMViC + MALDI + 未培养 ============
  b.panel(30, 666, 1340, 314, { title: '四、IMViC 对照 · MALDI-TOF 蛋白指纹 · 未培养微生物' })

  b.table(60, 716, 560, {
    headers: ['IMViC 项目', '大肠埃希菌', '产气肠杆菌'],
    colW: [180, 190, 190],
    rowH: 30,
    fontSize: 11,
    title: '肠道菌鉴定的经典组合',
    rows: [
      ['吲哚（I）', '+', '−'],
      ['甲基红（M）', '+', '−'],
      ['伏-普（V）', '−', '+'],
      ['柠檬酸盐（C）', '−', '+'],
    ],
  })
  b.ctext(340, 906, '大肠埃希菌 ++−− 与产气肠杆菌 −−++ 恰成镜像', { size: 11, weight: 700, fill: C.ink })

  // MALDI 卡
  b.rect(650, 706, 330, 130, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.5, rx: 9 })
  b.text(670, 730, 'MALDI-TOF', { size: 13, weight: 700, fill: C.ok })
  b.wtext(670, 754, '以核糖体蛋白指纹比对数据库：分钟级、低成本，已成临床鉴定常规。', { size: 11, fill: C.sub, maxW: 290, lh: 16 })

  // 未培养卡
  b.rect(1000, 706, 340, 130, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.5, rx: 9 })
  b.text(1020, 730, '未培养微生物', { size: 13, weight: 700, fill: C.bad })
  b.wtext(1020, 754, 'VBNC 状态与「微生物暗物质」划定培养边界；培养组学以海量条件矩阵复兴培养，与宏基因组互补。', { size: 11, fill: C.sub, maxW: 300, lh: 16 })

  // 底部 Bergey
  b.rect(650, 850, 690, 110, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(670, 874, 'Bergey 手册：分类学革命的凝固史', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(670, 898, '1923 年初版《伯杰氏鉴定细菌学手册》以表型鉴定为纲；1984 年四卷本仍按表型编排；2001–2012 年二版五卷改按 16S rRNA 系统发育的门级框架——从「表型排列」到「系统发育排列」的转变，本身就是二十世纪分类学革命的一段凝固历史。', { size: 10.5, fill: C.sub, maxW: 650, lh: 15 })
}

export default scene({
  title: '多相分类与经典鉴定流程：表型、基因型与系统发育三足',
  subtitle: '经典鉴定四线索：菌落、形态与革兰、生理生化（IMViC ++−− 对 −−++）、血清学；数值分类 S 值 ≥70%–75%；多相分类整合表型、基因型与系统发育；MALDI-TOF 分钟级',
  draw,
})
