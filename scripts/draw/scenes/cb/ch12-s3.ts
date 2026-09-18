// cb ch12-s3 细胞自噬（39-d 批D 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、自噬的三种类型 ============
  b.panel(30, 132, 660, 300, { title: '一、自噬的三种类型（溶酶体介导的自我降解）' })
  b.table(60, 186, 600, {
    headers: ['类型', '机制', '特点'],
    colW: [170, 260, 170],
    rowH: 56,
    fontSize: 9.5,
    rows: [
      ['巨自噬', '双层膜自噬体包裹底物 → 与溶酶体融合', '通常说的"自噬"；本节主题'],
      ['微自噬', '溶酶体膜直接内陷包裹底物', '直接吞入'],
      ['分子伴侣介导（CMA）', 'Hsc70 识别 KFERQ 基序 → LAMP-2A 转运', '选择性、不形成自噬体'],
    ],
  })
  b.wtext(60, 408, '功能：营养匮乏时应急供能（饥饿时肝脏自噬流上调提供游离氨基酸）＋长寿蛋白与受损细胞器的质量控制（recycling）。', { size: 10, fill: C.mute, maxW: 600, lh: 13.5 })

  // ============ 二、mTORC1-ULK1 开关 ============
  b.panel(710, 132, 660, 300, { title: '二、诱导开关：mTORC1 抑制 ULK1（营养感受）' })
  // 营养充足分支
  b.tag(830, 196, '营养充足', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.ok, pad: 6 })
  b.rect(770, 226, 120, 40, { fill: C.okL, stroke: C.ok, sw: 2, rx: 8 })
  b.ctext(830, 250, 'mTORC1', { size: 11.5, weight: 700, fill: C.ok })
  b.arrow(830, 268, 830, 292, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(830, 312, '磷酸化抑制', { size: 9.5, weight: 700, fill: C.bad })
  b.rect(770, 326, 120, 40, { fill: C.panelB, stroke: C.mute, sw: 2, rx: 8 })
  b.ctext(830, 344, 'ULK1 复合体', { size: 10, weight: 700, fill: C.sub })
  b.ctext(830, 360, '（静息）', { size: 8.5, fill: C.mute })
  // 饥饿分支
  b.tag(1140, 196, '饥饿 / AMPK 激活', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: '#78350f', pad: 6 })
  b.rect(1080, 226, 120, 40, { fill: C.warnL, stroke: C.warn, sw: 2, rx: 8 })
  b.ctext(1140, 250, 'AMPK', { size: 11.5, weight: 700, fill: '#78350f' })
  b.arrow(1140, 268, 1140, 292, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.ctext(1140, 312, '活化', { size: 9.5, weight: 700, fill: C.ok })
  b.rect(1080, 326, 120, 40, { fill: C.okL, stroke: C.ok, sw: 2, rx: 8 })
  b.ctext(1140, 344, 'ULK1 复合体', { size: 10, weight: 700, fill: C.ok })
  b.ctext(1140, 360, '（启动自噬）', { size: 8.5, fill: C.ok })
  b.wtext(740, 400, 'ULK1 复合体＝ULK1＋ATG13＋FIP200＋ATG101；mTORC1 是自噬的主闸门（亦见第 8、11 章）。', { size: 10, fill: C.mute, maxW: 600, lh: 13.5 })

  // ============ 三、巨自噬的分子流程 ============
  b.panel(30, 452, 1340, 528, { title: '三、巨自噬流程：吞噬泡 → 自噬体 → 自噬溶酶体（LC3 脂化标记）' })
  // 五步流程图
  const steps: Array<[string, string, string]> = [
    ['① 成核', 'ULK1 激活 Beclin-1–VPS34（class Ⅲ PI3K）', '产生 PI3P 募集效应蛋白'],
    ['② 延伸·脂化', 'LC3-I 经 ATG7（E1 样）/ATG3（E2 样）连接 PE', 'LC3-Ⅱ 定位自噬体膜（经典标志物）'],
    ['③ 选择识别', 'p62/SQSTM1 结合泛素化底物×LC3', '打包受损线粒体／入侵细菌'],
    ['④ 融合', '自噬体与溶酶体融合为自噬溶酶体', '内容物被酸性水解酶降解'],
    ['⑤ 回收', '氨基酸等被回收利用', '应急供能与质量控制'],
  ]
  steps.forEach((s, i) => {
    const x = 66 + i * 258
    b.rect(x, 512, 230, 120, { fill: i % 2 === 0 ? C.dnaL : C.accL, stroke: i % 2 === 0 ? C.dna : C.acc, sw: 1.8, rx: 10 })
    b.ctext(x + 115, 536, s[0], { size: 11.5, weight: 700, fill: i % 2 === 0 ? C.dnaD : C.accD })
    b.wtext(x + 12, 556, s[1], { size: 8.5, fill: C.sub, maxW: 210, lh: 11.5 })
    b.wtext(x + 12, 596, s[2], { size: 8.5, fill: C.mute, maxW: 210, lh: 11.5 })
    if (i < 4) b.arrow(x + 234, 572, x + 254, 572, { stroke: C.mute, sw: 2.2, marker: 'mute' })
  })
  // 结构图：吞噬泡→自噬体→自噬溶酶体
  b.text(80, 676, '形态演变：', { size: 10.5, weight: 700, fill: C.sub })
  b.ellipse(200, 740, 46, 40, { fill: C.bg, stroke: C.dna, sw: 2.4 })
  b.ctext(200, 736, '吞噬泡', { size: 9.5, weight: 700, fill: C.dnaD })
  b.ctext(200, 752, '（双层膜）', { size: 8, fill: C.mute })
  b.mito(200, 740, 30, 22, { label: '' })
  b.arrow(258, 740, 320, 740, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.circle(370, 740, 46, { fill: C.dnaL, stroke: C.dna, sw: 2.4 })
  b.mito(370, 740, 30, 22, { label: '' })
  b.ctext(370, 796, '自噬体', { size: 10, weight: 700, fill: C.dnaD })
  b.arrow(428, 740, 490, 740, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.lysosome(545, 740, 42, { label: '' })
  b.mito(545, 740, 26, 18, { label: '' })
  b.ctext(545, 796, '自噬溶酶体', { size: 10, weight: 700, fill: C.bad })
  b.arrow(598, 740, 660, 740, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  for (let i = 0; i < 4; i++) b.ion(690 + i * 34, 740, 'aa', { r: 11, fill: C.okL, stroke: C.ok, tfill: C.ok, size: 8 })
  b.ctext(745, 784, '氨基酸回收', { size: 9.5, weight: 700, fill: C.ok })
  // 双泛素样系统
  b.text(840, 676, '两条泛素样系统：', { size: 10.5, weight: 700, fill: C.sub })
  b.wtext(840, 696, '· LC3 脂化系统：前体被 ATG4 切割暴露甘氨酸 → LC3-I → 连接 PE → LC3-Ⅱ（LC3-Ⅱ/LC3-I 比值反映自噬流）；', { size: 9, fill: C.sub, maxW: 500, lh: 12.5 })
  b.wtext(840, 724, '· ATG12 结合系统：ATG12 与 ATG5、ATG16L1 结合，促进 LC3 脂化。', { size: 9, fill: C.sub, maxW: 500, lh: 12.5 })
  b.wtext(840, 752, '选择性自噬：线粒体自噬（mitophagy，受体 PINK1-Parkin 途径，帕金森相关基因）；异体自噬（xenophagy）清除入侵细菌。', { size: 9, fill: C.mute, maxW: 500, lh: 12.5 })
  // 疾病
  b.text(80, 846, '与疾病：', { size: 10.5, weight: 700, fill: C.sub })
  b.tag(180, 872, '神经退行（帕金森 / 阿尔茨海默）：自噬流受阻或清除能力下降', { fill: C.badL, stroke: C.bad, size: 9, tfill: C.bad, pad: 5 })
  b.tag(660, 872, '肿瘤双重：早期抑癌（清除受损线粒体降 ROS）／晚期助存活', { fill: C.warnL, stroke: C.warn, size: 9, tfill: '#78350f', pad: 5 })
  b.tag(1100, 872, '感染免疫：异体自噬＋抗原交叉呈递', { fill: C.accL, stroke: C.acc, size: 9, tfill: C.accD, pad: 5 })
  b.wtext(80, 916, '抗衰老：自噬活性随年龄下降，热量限制延寿部分依赖自噬（mTOR 抑制剂雷帕霉素延长小鼠寿命）。', { size: 10, fill: C.mute, maxW: 600, lh: 13.5 })
  b.wtext(840, 846, 'LC3-Ⅱ 是自噬体的经典标志物；GFP-LC3 点状聚集为常用实验读数。', { size: 9, fill: C.mute, maxW: 500, lh: 12.5 })
}

export default scene({
  title: '细胞自噬：溶酶体介导的自我降解与回收',
  subtitle: '巨自噬/微自噬/CMA 三类型；mTORC1 抑制 ULK1、饥饿/AMPK 启动；LC3-Ⅱ 定位自噬体膜为标志，p62 介导线粒体自噬与异体自噬，自噬溶酶体降解回收',
  draw,
})
