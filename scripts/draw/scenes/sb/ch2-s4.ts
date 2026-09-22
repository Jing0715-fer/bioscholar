// sb ch2-s4 融合标签、切割与特殊表达需求（Task 4-a）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、融合构建与 TEV 切割工艺 ============
  b.panel(30, 132, 1340, 280, { title: '一、融合构建与 TEV 切割工艺' })
  b.rect(70, 176, 120, 36, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 6 })
  b.ctext(130, 199, 'His_{6}', { size: 12.5, weight: 700, fill: C.enzD })
  b.ctext(130, 166, '约 0.8 kDa', { size: 9.5, fill: C.mute })
  b.rect(194, 176, 168, 36, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 6 })
  b.ctext(248, 199, 'ENLYFQ', { size: 12.5, weight: 700, fill: C.warnD })
  b.line(292, 180, 292, 208, { stroke: C.bad, sw: 1.6, dash: '4 3' })
  b.ctext(318, 199, 'G', { size: 12.5, weight: 700, fill: C.warnD })
  b.ctext(278, 166, 'TEV 位点：Q 与 G 之间切割', { size: 9.5, fill: C.mute })
  b.rect(366, 176, 40, 36, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 6 })
  b.rect(410, 176, 270, 36, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.ctext(545, 199, '目的蛋白', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(545, 166, '结晶前最终样品：无标签', { size: 9.5, fill: C.mute })
  b.arrow(280, 218, 240, 252, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.arrow(302, 218, 342, 252, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(290, 274, 'TEV 蛋白酶（27 kDa，S219V 工程化主流）', { size: 10.5, weight: 700, fill: C.badD })
  b.wtext(70, 296, '设计 linker 时在 Q 后留一个甘氨酸即可获得天然 N 端；结晶前常规切除标签——PDB 中绝大多数晶体结构来自无标签蛋白，柔性标签制造晶格接触的熵障碍；切割完成后以 SDS-PAGE 确认完全切透。', { maxW: 560, lh: 14, size: 10, fill: C.sub })
  b.tag(800, 190, '4–16 °C 过夜', { fill: C.panelB, stroke: C.line, size: 10.5, weight: 700, tfill: C.ink, pad: 8 })
  b.tag(990, 190, '酶底物质量比 1:20 至 1:100', { fill: C.panelB, stroke: C.line, size: 10.5, weight: 700, tfill: C.ink, pad: 8 })
  b.tag(1180, 190, 'pH 7–8 兼容多数缓冲液', { fill: C.panelB, stroke: C.line, size: 10.5, weight: 700, tfill: C.ink, pad: 8 })
  b.tag(790, 244, '切割反应液', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 8 })
  b.arrow(846, 244, 874, 244, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(945, 244, '再过镍柱', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 8 })
  b.arrow(992, 244, 1020, 244, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(1115, 244, '流出液：纯净目的蛋白', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 8 })
  b.wtext(730, 276, '负吸附：TEV 带 His_{6}，未切融合蛋白、标签与酶都挂在柱上，流出即纯净目的蛋白；残余未切组分可回收再切，必要时补酶续切。', { maxW: 610, lh: 13.5, size: 10, fill: C.sub })
  b.wtext(730, 318, '备选蛋白酶：HRV 3C（识别 LEVLFQ/GP，PreScission 常以 GST 融合供应、偏好 4 °C）、肠激酶（DDDDK 位点）与凝血酶——后两者识别序列较短，错切风险更高，结构生物学项目慎用。', { maxW: 610, lh: 13.5, size: 10, fill: C.sub })

  // ============ 二、常用标签规格与场景选型 ============
  b.panel(30, 424, 660, 534, { title: '二、常用标签规格与场景选型' })
  b.table(50, 462, 620, {
    title: '标签规格',
    headers: ['标签', '大小', '亲和配偶', '洗脱方式', '附加价值'],
    colW: [84, 84, 130, 150, 172],
    rowH: 42,
    fontSize: 10.5,
    rows: [
      ['His_{6}', '约 0.8 kDa', '镍或钴螯合介质', '咪唑 150–500 mM', '几乎不干扰结构与功能'],
      ['GST', '26 kDa', '谷胱甘肽介质', '还原型谷胱甘肽 5–20 mM', '增溶；注意标签自身二聚'],
      ['MBP', '42 kDa', '直链淀粉介质', '麦芽糖 10 mM', '增溶能力最强的常用标签'],
      ['Strep-tag II', '8 个残基', '链霉亲和素变体', 'desthiobiotin 2.5 mM', '条件极温和、可逆再生'],
      ['SUMO', '约 11 kDa', '经 His 借道 IMAC', '咪唑', '强增溶；SUMO 蛋白酶识别折叠体'],
    ],
  })
  b.wtext(50, 724, '小肽家族 FLAG（DYKDDDDK，3×FLAG 肽竞争洗脱）与 HA 标签更常用于免疫检测与免疫沉淀，纯化场景相对少。', { maxW: 620, lh: 13, size: 9.5, fill: C.mute })
  b.table(50, 752, 620, {
    title: '场景选型',
    headers: ['场景', '首选', '备选与备注'],
    colW: [190, 110, 320],
    rowH: 32,
    fontSize: 10,
    rows: [
      ['常规可溶蛋白、快速纯化', 'His_{6}', '全程保留也常不影响结晶'],
      ['表达差、易成包涵体', 'MBP 或 SUMO', '必须切标签再精纯'],
      ['活性敏感、需温和条件', 'Strep-tag II', '生理盐条件即洗脱'],
      ['需要天然 N 端（含 Pro）', 'SUMO', 'SUMO 蛋白酶切割折叠体'],
      ['结晶前的最终样品', '无标签', 'TEV 或 3C 切除后负吸附'],
    ],
  })

  // ============ 三、共表达与特殊标记 ============
  b.panel(720, 424, 660, 534, { title: '三、共表达、SeMet 与同位素标记' })
  b.rect(740, 466, 620, 108, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.text(756, 488, '共表达复合物策略', { size: 12, weight: 700, fill: C.accD })
  b.wtext(756, 506, '同一细胞内同时合成各亚基，天然组装与共折叠得以发生：大肠杆菌用 pET-Duet 类双表达载体或相容复制子多质粒（ColA、RSF、p15A），滴定抗生素浓度维持质粒平衡；昆虫用 MultiBac；哺乳动物瞬时体系多质粒共转染、按化学计量调配比例。让伴侣亚基略过量，常能推动限速亚基正确折叠。', { maxW: 580, lh: 13.5, size: 10, fill: C.sub })
  b.rect(740, 588, 620, 128, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 8 })
  b.text(756, 610, '硒代甲硫氨酸（SeMet）掺入', { size: 12, weight: 700, fill: C.dnaD })
  b.wtext(756, 628, '硒的反常散射信号用于 SAD/MAD 定相（参见第 7 章）。路线一：甲硫氨酸营养缺陷型菌株 B834，在 M9 培养基中以 SeMet 替代甲硫氨酸；路线二：代谢抑制——对数期加过量苏氨酸、亮氨酸、异亮氨酸与赖氨酸封锁甲硫氨酸合成，再补 SeMet。质谱验证掺入率应高于 95%；表达量常下降三至五成，需相应放大培养。', { maxW: 580, lh: 13.5, size: 10, fill: C.sub })
  b.rect(740, 730, 620, 116, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 8 })
  b.text(756, 752, 'NMR 同位素标记', { size: 12, weight: 700, fill: C.rnaD })
  b.wtext(756, 770, '以 ^{15}NH_{4}Cl（约 1 g/L）与 ^{13}C 葡萄糖（约 2–4 g/L）为唯一氮碳源的 M9 培养基表达，获得均匀标记蛋白；氘代与选择性甲基标记用于大分子量体系。标记在大肠杆菌中最经济高效——即便最终走电镜或晶体学路线，也常保留一套大肠杆菌表达构建。', { maxW: 580, lh: 13.5, size: 10, fill: C.sub })
  b.rect(740, 860, 620, 78, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.text(756, 882, '批次纪律', { size: 12, weight: 700, fill: C.ink })
  b.wtext(756, 900, '用于电镜与晶体学的蛋白虽无需同位素，却常需脱辅基与结合态多批次平行制备——表达体系的批次稳定性比峰值收率更重要。', { maxW: 580, lh: 13.5, size: 10, fill: C.sub })
  b.wtext(740, 950, '把标签选择、蛋白酶位点与共表达设计一并写进最初的构造面板，是高水平表达构建与「边做边改」之间的分水岭。', { maxW: 620, lh: 13, size: 9.5, fill: C.mute })
}

export default scene({
  title: '融合标签、切割与特殊表达需求',
  subtitle: 'His_{6} 约 0.8 kDa 几乎不干扰结晶，MBP 42 kDa 增溶最强；TEV 识别 ENLYFQ 与 Gly 之间的肽键，4–16 °C 过夜、酶底物比 1:20 至 1:100；结晶前常规切标签，SeMet 掺入率应高于 95%',
  draw,
})
