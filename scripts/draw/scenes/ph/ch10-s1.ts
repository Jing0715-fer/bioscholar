// ph ch10-s1 消化道总论：壁四层结构、肠神经系统与电慢波
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、消化道壁四层结构 ============
  b.panel(30, 132, 660, 398, { title: '一、消化道壁的四层结构与壁内神经丛' })
  b.ctext(260, 182, '← 管腔（肠腔）面', { size: 12, fill: C.mute })
  b.rect(70, 190, 380, 66, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.rect(70, 256, 380, 52, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.rect(70, 308, 380, 42, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.rect(70, 350, 380, 20, { fill: C.warnL, stroke: C.warn, sw: 1.6 })
  b.rect(70, 370, 380, 38, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.rect(70, 408, 380, 30, { fill: C.panelB, stroke: C.mute, sw: 1.6 })
  for (const x of [130, 205, 280, 355]) b.circle(x, 282, 5.5, { fill: C.warn, stroke: C.warnD, sw: 1.2 })
  for (const x of [110, 180, 250, 320, 390]) b.circle(x, 360, 5.5, { fill: C.warn, stroke: C.warnD, sw: 1.2 })
  const lab = (y: number, mid: number, s: string, sub?: string) => {
    b.line(452, mid, 466, y - 5, { stroke: C.faint, sw: 1.4 })
    b.text(470, y, s, { size: 12.5, weight: 700, fill: C.ink })
    if (sub) b.text(470, y + 19, sub, { size: 10.5, fill: C.mute })
  }
  lab(212, 223, '黏膜层', '上皮·固有层·黏膜肌')
  lab(278, 282, '黏膜下层', '内含 Meissner 神经丛')
  lab(334, 329, '环行肌')
  lab(364, 360, '肌间神经丛', '（Auerbach 丛）')
  lab(412, 389, '纵行肌')
  lab(428, 423, '外膜 / 浆膜')
  b.wtext(50, 466, '壁内神经丛分两层：黏膜下丛调节分泌与局部血流，肌间丛驱动蠕动与分节运动——它们由感觉、中间与运动神经元构成微型反射中枢，即使离断外来神经仍能独立工作。', { size: 12, fill: C.sub, maxW: 620, lh: 19 })

  // ============ 二、肠神经系统 ENS ============
  b.panel(710, 132, 660, 398, { title: '二、肠神经系统（ENS）：「第二大脑」' })
  b.tag(920, 195, '腔内刺激（扩张·pH·营养物）', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 12, weight: 700, pad: 14 })
  b.arrow(920, 209, 920, 232, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.rect(840, 234, 160, 34, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.ctext(920, 255, '感觉神经元', { size: 12.5, weight: 700, fill: C.ink })
  b.arrow(920, 270, 920, 292, { stroke: C.sub, sw: 2 })
  b.rect(840, 294, 160, 34, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.ctext(920, 315, '中间神经元', { size: 12.5, weight: 700, fill: C.ink })
  b.arrow(920, 330, 920, 352, { stroke: C.sub, sw: 2 })
  b.rect(840, 354, 160, 34, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.ctext(920, 375, '运动神经元', { size: 12.5, weight: 700, fill: C.ink })
  b.arrow(870, 390, 830, 418, { stroke: C.sub, sw: 2 })
  b.arrow(970, 390, 1050, 418, { stroke: C.sub, sw: 2 })
  b.rect(740, 420, 180, 44, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.ctext(830, 437, '平滑肌', { size: 12, weight: 700, fill: C.dnaD })
  b.ctext(830, 456, '蠕动·分节运动', { size: 10.5, fill: C.sub })
  b.rect(960, 420, 180, 44, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.ctext(1050, 437, '腺上皮 / 血管', { size: 12, weight: 700, fill: C.rnaD })
  b.ctext(1050, 456, '分泌·血流调节', { size: 10.5, fill: C.sub })
  // 右列：第二大脑要点
  b.tag(1240, 240, '约 1 亿神经元', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 12.5, weight: 700 })
  b.ctext(1240, 272, '≈ 脊髓神经元总量级', { size: 11.5, fill: C.mute })
  b.tag(1240, 310, '「第二大脑」', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 12.5, weight: 700 })
  b.tag(1240, 355, '切断外来神经仍工作', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 11.5, weight: 700, pad: 12 })
  b.rect(1150, 388, 200, 56, { fill: C.bg, stroke: C.mute, sw: 1.5, dash: '6 4', rx: 8 })
  b.ctext(1250, 412, '外来神经', { size: 11.5, weight: 700, fill: C.sub })
  b.ctext(1250, 432, '（交感 / 副交感：调制）', { size: 10.5, fill: C.mute })
  b.arrow(1148, 410, 1006, 374, { stroke: C.mute, sw: 1.8, dash: '5 4', marker: 'mute' })
  b.wtext(730, 495, 'ENS 与中枢经迷走/交感双向联系（脑-肠轴）；迷走节前纤维大多在壁内换元——「肠脑」自主处理日常反射，中枢仅作指令级调制。', { size: 12, fill: C.sub, maxW: 620, lh: 19 })

  // ============ 三、电慢波与 ICC ============
  b.panel(30, 546, 660, 439, { title: '三、电慢波起步：ICC（Cajal 间质细胞）起搏' })
  b.wtext(50, 600, 'ICC 是胃肠起搏细胞：自发性内向电流产生周期性部分去极化——慢波（基本电节律）。慢波决定收缩节律的上限：锋电位叠加于慢波波峰时才触发收缩，任何收缩频率都不会超过该段慢波频率。', { size: 12, fill: C.sub, maxW: 620, lh: 19 })
  b.ctext(350, 672, '幅度 −5 ~ −15 mV（周期性部分去极化）', { size: 11, fill: C.mute })
  // 三条慢波
  const wave = (cy: number, n: number, color: string) => {
    const p = 395 / n
    let d = `M150,${cy}`
    for (let i = 0; i < n; i++) d += ` q ${(p / 4).toFixed(1)},-28 ${(p / 2).toFixed(1)},0 q ${(p / 4).toFixed(1)},28 ${(p / 2).toFixed(1)},0`
    b.path(d, { stroke: color, sw: 2.6 })
  }
  b.text(60, 705, '胃体', { size: 12.5, weight: 700, fill: C.sub })
  wave(705, 3, C.acc)
  b.text(560, 705, '3 次/分', { size: 12, weight: 700, fill: C.accD })
  b.text(60, 765, '十二指肠', { size: 12.5, weight: 700, fill: C.sub })
  wave(765, 8, C.dna)
  b.text(560, 765, '12 次/分', { size: 12, weight: 700, fill: C.dnaD })
  b.text(60, 825, '结肠', { size: 12.5, weight: 700, fill: C.sub })
  wave(825, 6, C.rna)
  b.text(560, 825, '6–8 次/分', { size: 12, weight: 700, fill: C.rnaD })
  b.wtext(50, 870, '各段慢波频率：胃 3、十二指肠 11–12、空肠 9–11、回肠 8–9、结肠 6–8 次/分——沿口向肛向递减，由各段 ICC 固有特性决定。', { size: 12, fill: C.sub, maxW: 620, lh: 19 })
  b.tag(360, 940, 'ICC 分布：环行肌-纵行肌之间及黏膜下层', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 11.5, weight: 700, pad: 12 })

  // ============ 四、胃肠激素总表 ============
  b.panel(710, 546, 660, 439, { title: '四、主要胃肠激素：来源—刺激—效应' })
  b.table(722, 596, 636, {
    headers: ['激素', '主要来源', '释放刺激', '主要效应'],
    colW: [108, 112, 132, 284],
    rowH: 44,
    fontSize: 11.5,
    rows: [
      ['胃泌素', '胃窦 G 细胞', '蛋白产物·胃扩张', '促胃酸·胃蛋白酶，黏膜营养'],
      ['CCK', '十二指肠 I 细胞', '脂肪·蛋白产物', '胰酶分泌·胆囊收缩·饱感'],
      ['促胰液素', '十二指肠 S 细胞', '胃酸（pH<4.5）', '促胰/胆 HCO_{3}^{-}，中和胃酸'],
      ['抑胃肽 GIP', '空肠 K 细胞', '糖·脂肪·氨基酸', '促胰岛素（肠-胰岛轴）'],
      ['GLP-1', '回肠 L 细胞', '肠腔营养物', '促胰岛素·抑胃排空·饱感'],
      ['胃动素', '小肠 M 细胞', '空腹周期性', 'MMC 消化间期移行复合波'],
      ['生长抑素', '胃肠 D 细胞', '腔内酸度升高', '广泛抑制分泌（旁分泌）'],
    ],
  })
  b.wtext(722, 966, '胃肠激素多为肽类，经内分泌（血行）、旁分泌与神经分泌三种途径作用；壁内神经丛与激素共同构成消化道的「神经-体液」双重调节。', { size: 11.5, fill: C.sub, maxW: 636, lh: 17 })
}

export default scene({
  title: '消化道总论：壁的四层结构、ENS 与胃肠激素',
  subtitle: '肠神经系统约 1 亿神经元构成「第二大脑」，脱离外来神经仍可完成局部反射；ICC 起搏电慢波——胃 3、十二指肠 12、结肠 6–8 次/分',
  draw,
})
