// cb ch2-s5 胞吞作用与胞吐作用（39-d 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、胞吞三种方式 ============
  b.panel(30, 132, 660, 400, { title: '一、胞吞作用的三种方式' })
  // ① 吞噬
  b.bacterium(190, 250, 62, 26, { shape: 'rod' })
  b.path('M 110,310 L 130,310 Q 140,225 190,220', { stroke: C.sub, sw: 2.2, fill: 'none' })
  b.path('M 270,310 L 250,310 Q 240,225 190,220', { stroke: C.sub, sw: 2.2, fill: 'none' })
  b.line(60, 310, 110, 310, { stroke: C.sub, sw: 2.2 })
  b.line(270, 310, 320, 310, { stroke: C.sub, sw: 2.2 })
  b.text(190, 340, '伪足包裹 → 吞噬体', { size: 10.5, fill: C.mute, anchor: 'middle' })
  b.text(56, 196, '① 吞噬作用', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(360, 196, '伸出伪足包裹细菌、细胞碎片等大颗粒形成吞噬体（肌动蛋白皮层收缩参与）；巨噬细胞与中性粒细胞是专业吞噬细胞，抗体与补体的「调理」可显著提高效率；吞噬体与溶酶体融合被消化。', { size: 11, fill: C.sub, maxW: 300, lh: 15.5 })
  // ② 胞饮
  b.text(56, 376, '② 胞饮作用', { size: 12.5, weight: 700, fill: C.ink })
  b.line(90, 386, 300, 386, { stroke: C.sub, sw: 2.2 })
  b.circle(150, 402, 15, { fill: C.panelB, stroke: C.sub, sw: 2 })
  for (let i = 0; i < 4; i++) b.circle(144 + i * 8, 400 + (i % 2) * 6, 2.6, { fill: C.acc })
  b.text(190, 432, '非选择吞饮胞外液 → 胞饮体', { size: 10.5, fill: C.mute, anchor: 'middle' })
  b.wtext(360, 376, '细胞非选择性地吞饮细胞外液及其中可溶分子，形成胞饮体；多数细胞持续进行，是质膜更新的主要途径之一。', { size: 11, fill: C.sub, maxW: 300, lh: 15.5 })
  // ③ 受体介导
  b.text(56, 460, '③ 受体介导的胞吞', { size: 12.5, weight: 700, fill: C.ink })
  b.line(90, 492, 300, 492, { stroke: C.sub, sw: 2.2 })
  for (let i = 0; i < 3; i++) {
    b.rect(160 + i * 30, 478, 12, 14, { fill: C.proL, stroke: C.pro, sw: 1.4 })
    b.circle(166 + i * 30, 462, 8, { fill: C.enzL, stroke: C.enz, sw: 1.4 })
  }
  b.arrow(166, 452, 166, 440, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.text(190, 522, '受体聚集浓缩配体', { size: 10.5, fill: C.mute, anchor: 'middle' })
  b.wtext(360, 460, '受体特异性识别配体，使被吞物质的浓缩效率提高千倍以上——经典即 LDL 受体途径（Goldstein 与 Brown，1985 年诺贝尔奖），见左下图。', { size: 11, fill: C.sub, maxW: 300, lh: 15.5 })

  // ============ 二、网格蛋白包被小泡的形成 ============
  b.panel(710, 132, 660, 400, { title: '二、网格蛋白包被小泡的形成机器（四步）' })
  // ① 受体-配体聚集
  b.line(740, 340, 840, 340, { stroke: C.sub, sw: 2.2 })
  for (let i = 0; i < 3; i++) {
    b.rect(758 + i * 26, 326, 11, 14, { fill: C.proL, stroke: C.pro, sw: 1.4 })
    b.circle(763 + i * 26, 308, 7, { fill: C.enzL, stroke: C.enz, sw: 1.4 })
  }
  b.ctext(790, 425, '① 受体-配体聚集', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(790, 442, 'LDL 结合受体', { size: 10.5, fill: C.mute })
  b.arrow(848, 280, 905, 280, { stroke: C.mute, sw: 2, marker: 'mute' })
  // ② 出芽
  b.line(920, 340, 945, 340, { stroke: C.sub, sw: 2.2 })
  b.path('M 945,340 Q 970,378 995,340', { stroke: C.sub, sw: 2.2, fill: 'none' })
  b.line(995, 340, 1020, 340, { stroke: C.sub, sw: 2.2 })
  for (let i = 0; i < 3; i++) b.rect(950 + i * 18, 352 + i * 4, 9, 11, { fill: C.proL, stroke: C.pro, sw: 1.2 })
  b.circle(970, 348, 34, { stroke: C.warn, sw: 1.9, dash: '5 4', fill: 'none' })
  b.ctext(970, 425, '② AP2＋网格蛋白出芽', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(970, 442, 'triskelion 笼架', { size: 10.5, fill: C.mute })
  b.arrow(1035, 280, 1082, 280, { stroke: C.mute, sw: 2, marker: 'mute' })
  // ③ dynamin 缢断
  b.line(1080, 335, 1100, 335, { stroke: C.sub, sw: 2.2 })
  b.line(1160, 335, 1180, 335, { stroke: C.sub, sw: 2.2 })
  b.line(1100, 335, 1118, 348, { stroke: C.sub, sw: 2.2 })
  b.line(1160, 335, 1142, 348, { stroke: C.sub, sw: 2.2 })
  b.circle(1130, 360, 22, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.circle(1130, 360, 29, { stroke: C.warn, sw: 1.9, dash: '5 4', fill: 'none' })
  b.circle(1130, 333, 11, { stroke: C.bad, sw: 3.2, fill: 'none' })
  b.ctext(1130, 425, '③ dynamin 缢断', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(1130, 442, 'GTP 水解驱动', { size: 10.5, fill: C.mute })
  b.arrow(1195, 280, 1245, 280, { stroke: C.mute, sw: 2, marker: 'mute' })
  // ④ 脱包被融合
  b.circle(1290, 322, 16, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.arrow(1290, 342, 1290, 358, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.circle(1290, 388, 27, { fill: C.accL, stroke: C.acc, sw: 2.2 })
  b.ctext(1290, 392, '早期', { size: 9.5, fill: C.accD })
  b.ctext(1290, 402, '内体', { size: 9.5, fill: C.accD })
  b.ctext(1290, 425, '④ 脱包被并融合', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(1290, 442, 'Hsc70／auxilin', { size: 10.5, fill: C.mute })
  b.wtext(736, 478, '网格蛋白以三足蛋白（triskelion）为单元聚合成多面体笼架；接头蛋白 AP2 识别受体胞质尾的内部化信号（YxxΦ 或双亮氨酸基序）并把受体连接于笼架；dynamin 在 GTP 水解驱动下缢断小泡颈部。', { size: 11, fill: C.sub, maxW: 600, lh: 15 })

  // ============ 三、LDL 受体途径 ============
  b.panel(30, 546, 920, 434, { title: '三、LDL 受体途径与内体分选（受体介导胞吞的经典）' })
  b.wtext(56, 600, 'LDL 颗粒的载脂蛋白 B-100 被细胞表面 LDL 受体识别，经网格蛋白途径内吞。', { size: 11.5, fill: C.sub, maxW: 300, lh: 16 })
  // 血浆侧标签
  b.text(56, 636, '血浆', { size: 11, weight: 600, fill: C.mute })
  // LDL 颗粒
  b.circle(120, 680, 24, { fill: C.warnL, stroke: C.warn, sw: 2 })
  for (let i = 0; i < 5; i++) b.circle(110 + i * 10, 672 + (i % 2) * 14, 4, { fill: C.warn, fillOp: 0.6 })
  b.ctext(120, 726, 'LDL 颗粒', { size: 11, weight: 600, fill: C.warn })
  b.arrow(148, 680, 196, 680, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  // 质膜与受体
  b.bilayer(200, 668, 130)
  for (let i = 0; i < 3; i++) b.rect(224 + i * 30, 652, 12, 16, { fill: C.proL, stroke: C.pro, sw: 1.5 })
  b.ctext(265, 726, '细胞表面 LDL 受体', { size: 11, weight: 600, fill: C.proD })
  b.arrow(335, 680, 388, 680, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.vesicle(420, 680, 26, { coat: 'clathrin' })
  b.ctext(420, 726, '网格蛋白小泡', { size: 11, weight: 600, fill: C.ink })
  b.arrow(452, 680, 518, 680, { stroke: C.mute, sw: 2, marker: 'mute' })
  // 早期内体
  b.circle(560, 680, 36, { fill: C.accL, stroke: C.acc, sw: 2.4 })
  b.ctext(560, 676, '早期内体', { size: 11, weight: 700, fill: C.accD })
  b.ctext(560, 692, 'pH ≈ 6', { size: 10.5, fill: C.bad })
  // 受体再循环（回到质膜）
  b.spline([[556, 646], [490, 610], [400, 606], [310, 614], [272, 646]], { stroke: C.pro, sw: 2.2, dash: '6 5', marker: 'pro', fill: 'none' })
  b.ctext(460, 596, '受体再循环回质膜（每 10 余分钟一次）', { size: 11, weight: 600, fill: C.proD })
  b.ctext(560, 726, 'V 型质子泵降低腔内 pH，受体-配体解离', { size: 10.5, fill: C.mute })
  // 晚期内体 → 溶酶体
  b.arrow(588, 706, 668, 736, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.ctext(640, 700, 'LDL 随内体成熟', { size: 10, fill: C.mute })
  b.circle(700, 748, 25, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.ctext(700, 752, '晚期内体', { size: 9.5, fill: C.sub })
  b.arrow(728, 748, 760, 748, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.lysosome(795, 748, 27, { label: '' })
  b.ctext(795, 790, '溶酶体', { size: 11, weight: 600, fill: C.bad })
  b.arrow(824, 748, 862, 748, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.tag(920, 748, '胆固醇释放', { fill: C.okL, stroke: C.ok, size: 11.5, weight: 700, tfill: C.ok, pad: 9 })
  b.ctext(920, 772, '供膜合成所需', { size: 10.5, fill: C.mute })
  b.wtext(56, 830, '家族性高胆固醇血症（FH）：LDL 受体基因突变（配体结合域或胞质尾内部化信号缺失）→ LDL 滞留血浆、沉积血管壁 → 早发动脉粥样硬化。转铁蛋白受体与铁摄取也走此途径。', { size: 11.5, fill: C.sub, maxW: 860, lh: 16 })
  b.wtext(56, 880, 'LDL 颗粒则随内体成熟进入晚期内体，最终在溶酶体降解释放胆固醇，供膜合成所需。', { size: 11, fill: C.mute, maxW: 860, lh: 15 })

  // ============ 四、胞吐作用 ============
  b.panel(970, 546, 400, 434, { title: '四、胞吐作用：组成型与调节型' })
  b.text(990, 610, '① 组成型胞吐', { size: 12.5, weight: 700, fill: C.ink })
  b.bilayer(990, 660, 150)
  b.circle(1168, 662, 15, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.arrow(1180, 662, 1148, 662, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(1075, 700, '持续进行', { size: 10.5, fill: C.mute })
  b.wtext(990, 724, '所有细胞持续进行：不断补充新合成的膜脂、膜蛋白与胞外基质组分，不依赖胞外信号。', { size: 11, fill: C.sub, maxW: 360, lh: 15.5 })
  b.text(990, 800, '② 调节型胞吐', { size: 12.5, weight: 700, fill: C.ink })
  b.bilayer(990, 856, 150)
  b.circle(1160, 836, 17, { fill: C.enzL, stroke: C.enz, sw: 2 })
  for (let i = 0; i < 4; i++) b.circle(1152 + i * 8, 832 + (i % 2) * 8, 2.8, { fill: C.enz, fillOp: 0.7 })
  b.ion(1090, 806, 'Ca²⁺', { r: 14, size: 10 })
  b.arrow(1090, 822, 1120, 838, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.ctext(1075, 890, 'Ca²⁺ 触发融合', { size: 10.5, fill: C.mute })
  b.wtext(990, 914, '分泌物储存于分泌颗粒；胞内 Ca²⁺ 浓度升高触发颗粒与质膜快速融合（神经递质释放、肥大细胞释放组胺）——融合由 SNARE 复合体执行（详见第 4 章）。', { size: 11, fill: C.sub, maxW: 360, lh: 15 })
  b.wtext(990, 962, '胞吞与胞吐构成膜的循环利用系统，维持表面积与膜组分动态平衡。', { size: 10.5, fill: C.mute, maxW: 360, lh: 14 })
}

export default scene({
  title: '胞吞作用与胞吐作用',
  subtitle: '吞噬／胞饮／受体介导三种胞吞——网格蛋白-AP2-dynamin 机器出芽缢断，早期内体 pH≈6 使受体解离再循环；LDL 受体途径缺陷致 FH；胞吐分组成型（持续）与调节型（Ca²⁺ 触发 SNARE 融合）',
  draw,
})
