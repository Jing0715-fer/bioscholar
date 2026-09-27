// ph ch2-s1 细胞膜结构与被动转运（流动镶嵌 + 简单扩散 + 渗透与 AQP + 渗透浓度标尺）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、流动镶嵌膜与简单扩散 ============
  b.panel(30, 132, 1340, 300, { title: '一、流动镶嵌膜与简单扩散：谁能过膜？' })
  // —— 左：流动镶嵌剖面 ——
  b.text(60, 192, '流动镶嵌模型（Singer–Nicolson，1972）', { size: 12.5, weight: 700, fill: C.dnaD })
  b.bilayer(70, 280, 600)
  b.text(60, 262, '细胞外', { size: 11, weight: 700, fill: C.sub })
  b.text(60, 330, '细胞质', { size: 11, weight: 700, fill: C.sub })
  b.text(80, 246, '磷脂双分子层', { size: 10.5, fill: C.dnaD })
  b.line(100, 252, 95, 274, { stroke: C.faint, sw: 1 })
  b.circle(200, 286, 5, { fill: C.warnL, stroke: C.warn, sw: 1.5 })
  b.text(165, 246, '胆固醇', { size: 10.5, fill: C.warnD })
  b.line(183, 252, 198, 279, { stroke: C.faint, sw: 1 })
  // 通道蛋白（带孔道）
  b.rect(312, 272, 11, 30, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(337, 272, 11, 30, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.text(288, 332, '通道蛋白', { size: 10.5, fill: C.proD })
  b.line(315, 324, 326, 304, { stroke: C.faint, sw: 1 })
  // 糖蛋白
  b.rect(470, 272, 20, 30, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.circle(466, 258, 4, { fill: C.ok })
  b.circle(476, 252, 4, { fill: C.ok })
  b.circle(486, 258, 4, { fill: C.ok })
  b.text(440, 232, '糖蛋白·糖萼（胞外侧）', { size: 10.5, fill: C.okD })
  // 载体/泵
  b.ellipse(590, 287, 15, 19, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.text(560, 332, '载体 / 泵', { size: 10.5, fill: C.accD })
  b.line(578, 324, 585, 308, { stroke: C.faint, sw: 1 })
  // 外周蛋白
  b.circle(660, 305, 8, { fill: C.enzL, stroke: C.enz, sw: 1.5 })
  b.text(620, 352, '外周蛋白', { size: 10.5, fill: C.enzD })
  b.line(648, 344, 656, 314, { stroke: C.faint, sw: 1 })
  // 膜厚
  b.line(682, 280, 682, 293, { stroke: C.sub, sw: 1.2, marker: 'mute', markerStart: 'mute' })
  b.text(615, 270, '7.5–10 nm', { size: 10, fill: C.mute })
  b.text(60, 372, '疏水核心 = 选择性屏障：离子与极性分子被挡，脂溶性小分子放行', { size: 10.5, fill: C.sub })
  b.wtext(60, 396, '膜蛋白可侧向漂移；红细胞膜 蛋白 : 脂 : 糖 ≈ 5 : 4 : 1——「蛋白质漂浮在脂的海洋里」', { size: 10.5, fill: C.sub, maxW: 560, lh: 17 })
  // —— 右：简单扩散透过谱 ——
  b.text(740, 192, '简单扩散：顺梯度 · 不耗能 · 不饱和', { size: 12.5, weight: 700, fill: C.accD })
  b.bilayer(760, 280, 560)
  b.text(764, 262, '细胞外', { size: 10.5, weight: 700, fill: C.sub })
  b.text(764, 330, '细胞内', { size: 10.5, weight: 700, fill: C.sub })
  const cross = (x: number, above: boolean, fc: string, key: 'acc' | 'rna' | 'enz' | 'ok' | 'warn') => {
    const sc = C[key]
    b.circle(x, above ? 335 : 240, 10, { fill: fc, stroke: sc, sw: 1.6 })
    b.arrow(x, above ? 252 : 323, x, above ? 323 : 252, { stroke: sc, sw: 1.6, marker: key, dash: '4 3' })
    b.circle(x, above ? 240 : 335, 10, { fill: fc, stroke: sc, sw: 1.6 })
  }
  cross(835, true, C.accL, 'acc')
  b.ctext(835, 218, 'O_{2}', { size: 10.5, fill: C.accD })
  cross(895, false, C.rnaL, 'rna')
  b.ctext(895, 218, 'CO_{2}', { size: 10.5, fill: C.rnaD })
  cross(955, true, C.enzL, 'enz')
  b.ctext(955, 218, '类固醇', { size: 10.5, fill: C.enzD })
  cross(1015, true, C.okL, 'ok')
  b.ctext(1015, 218, '乙醇', { size: 10.5, fill: C.okD })
  cross(1075, true, C.warnL, 'warn')
  b.ctext(1075, 218, '尿素（慢）', { size: 10.5, fill: C.warnD })
  // 被拒者：Na+ 与葡萄糖
  b.circle(1160, 240, 11, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(1160, 244, 'Na^{+}', { size: 8.5, weight: 700, fill: C.badD })
  b.arrow(1160, 253, 1160, 268, { stroke: C.bad, sw: 1.6, marker: 'bad' })
  b.line(1152, 278, 1168, 292, { stroke: C.bad, sw: 2 })
  b.line(1168, 278, 1152, 292, { stroke: C.bad, sw: 2 })
  b.ctext(1160, 218, 'Na^{+}', { size: 10.5, fill: C.badD })
  b.circle(1240, 240, 12, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(1240, 244, 'G', { size: 9, weight: 700, fill: C.badD })
  b.arrow(1240, 254, 1240, 268, { stroke: C.bad, sw: 1.6, marker: 'bad' })
  b.line(1232, 278, 1248, 292, { stroke: C.bad, sw: 2 })
  b.line(1248, 278, 1232, 292, { stroke: C.bad, sw: 2 })
  b.ctext(1240, 218, '葡萄糖', { size: 10.5, fill: C.badD })
  b.text(1130, 340, '被拒：需通道 / 载体（下节）', { size: 10, fill: C.badD })
  b.text(740, 372, 'Fick 定律：速率 ∝ 梯度 × 面积 ÷ 距离；脂溶性越强、分子越小越快（乙醇 > 尿素）', { size: 10.5, fill: C.sub })
  b.wtext(740, 396, '红细胞流经肺毛细血管约 0.75 s，O_{2}/CO_{2} 交换在前 0.25 s 即完成；呼吸膜增厚（肺间质水肿）→ 弥散受限 → 活动后低氧', { size: 10.5, fill: C.sub, maxW: 560, lh: 17 })

  // ============ 二、渗透与水通道（AQP） ============
  b.panel(30, 447, 660, 535, { title: '二、渗透与水通道（AQP）' })
  // 三态细胞
  b.arrow(58, 530, 92, 545, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(58, 590, 92, 575, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.circle(130, 560, 48, { fill: C.accL, stroke: C.acc, sw: 2.4 })
  b.ctext(130, 556, '肿胀', { size: 11, weight: 700, fill: C.accD })
  b.ctext(130, 574, '（趋于溶血）', { size: 9.5, fill: C.accD })
  b.ctext(130, 638, '低渗液', { size: 12, weight: 700, fill: C.accD })
  b.ctext(130, 658, '水内流 → 肿胀溶血', { size: 10.5, fill: C.sub })
  b.circle(370, 560, 38, { fill: C.okL, stroke: C.ok, sw: 2.4 })
  b.ctext(370, 556, '正常', { size: 11, weight: 700, fill: C.okD })
  b.ctext(370, 574, '体积不变', { size: 9.5, fill: C.okD })
  b.ctext(370, 638, '等渗 ≈ 300 mOsm', { size: 12, weight: 700, fill: C.okD })
  b.ctext(370, 658, '水净移动 = 0', { size: 10.5, fill: C.sub })
  b.arrow(642, 540, 672, 525, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.arrow(642, 580, 672, 595, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.circle(600, 560, 30, { fill: C.warnL, stroke: C.warn, sw: 2.4 })
  b.ctext(600, 556, '皱缩', { size: 11, weight: 700, fill: C.warnD })
  b.ctext(600, 574, '（水外出）', { size: 9.5, fill: C.warnD })
  b.ctext(600, 638, '高渗液', { size: 12, weight: 700, fill: C.warnD })
  b.ctext(600, 658, '水外流 → 皱缩', { size: 10.5, fill: C.sub })
  // AQP 水通道
  b.text(60, 695, '水通道蛋白 AQP（Agre 1992 鉴定，2003 年诺奖）', { size: 11.5, weight: 700, fill: C.proD })
  b.bilayer(60, 725, 610)
  b.text(66, 713, '胞外', { size: 9.5, fill: C.mute })
  b.text(66, 762, '胞内', { size: 9.5, fill: C.mute })
  b.rect(336, 717, 16, 30, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(376, 717, 16, 30, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.circle(344, 700, 5, { fill: C.acc })
  b.arrow(344, 708, 344, 760, { stroke: C.acc, sw: 1.6, marker: 'acc', dash: '4 3' })
  b.circle(344, 770, 5, { fill: C.acc })
  b.circle(384, 700, 5, { fill: C.acc })
  b.arrow(384, 708, 384, 760, { stroke: C.acc, sw: 1.6, marker: 'acc', dash: '4 3' })
  b.circle(384, 770, 5, { fill: C.acc })
  b.text(430, 700, '渗透：水由低渗侧净流向高渗侧（半透膜）', { size: 10.5, fill: C.sub })
  b.wtext(60, 792, 'AQP2 受抗利尿激素调控插入肾集合管顶膜——尿液浓缩的关键一环；水分子小，亦可缓慢直接穿过脂双层', { size: 10.5, fill: C.sub, maxW: 610, lh: 18 })
  b.text(60, 834, '渗透压为依数性：只取决于不能过膜的溶质颗粒数，与种类无关', { size: 10.5, fill: C.sub })
  b.text(60, 858, '正常细胞外液渗透浓度约 280–310 mOsm/kg（冰点降低法测定）', { size: 10.5, fill: C.sub })
  b.text(60, 882, '154 mmol/L NaCl 近乎完全解离 ≈ 308 mOsm/L → 0.9% 生理盐水等渗', { size: 10.5, fill: C.sub })
  b.wtext(60, 908, '动物细胞无细胞壁，体积靠渗透平衡守护：Na^{+} 不能自由穿膜、外液有效渗透性主要由血钠决定；渗透脆性试验：正常红细胞 0.45%–0.40% NaCl 开始溶血，0.35%–0.30% 完全溶血', { size: 10.5, fill: C.sub, maxW: 610, lh: 18 })

  // ============ 三、渗透浓度标尺与等渗 / 等张 ============
  b.panel(710, 447, 660, 535, { title: '三、渗透浓度标尺与等渗 / 等张' })
  b.text(740, 548, '渗透浓度标尺（mOsm/kg H_{2}O）', { size: 12, weight: 700, fill: C.sub })
  b.arrow(740, 590, 1330, 590, { stroke: C.sub, sw: 2, marker: 'ink' })
  const oTicks: [number, string][] = [[740, '0'], [858, '100'], [976, '200'], [1094, '300'], [1212, '400'], [1330, '500']]
  oTicks.forEach(([tx, lb]) => {
    b.line(tx, 590, tx, 597, { stroke: C.sub, sw: 1.8 })
    b.ctext(tx, 614, lb, { size: 10.5, fill: C.mute })
  })
  b.rect(1070, 576, 36, 28, { fill: C.okL, stroke: C.ok, sw: 1.6 })
  b.ctext(1088, 566, '正常 280–310', { size: 10.5, weight: 700, fill: C.okD })
  b.circle(1068, 590, 5.5, { fill: C.acc })
  b.circle(1094, 590, 5.5, { fill: C.bad })
  b.circle(1106, 590, 5.5, { fill: C.ok })
  b.circle(748, 644, 4.5, { fill: C.ok })
  b.text(760, 648, '0.9% NaCl ≈ 308 mOsm：等渗且等张', { size: 10.5, fill: C.okD })
  b.circle(748, 672, 4.5, { fill: C.bad })
  b.text(760, 676, '300 mOsm 尿素溶液：等渗而不等张——尿素渗入红细胞 → 溶血', { size: 10.5, fill: C.badD })
  b.circle(748, 700, 4.5, { fill: C.acc })
  b.text(760, 704, '5% 葡萄糖 ≈ 278：等渗输入，葡萄糖被代谢后仅剩纯水', { size: 10.5, fill: C.accD })
  b.text(740, 738, '等渗（isosmotic）：只问渗透浓度数值是否与细胞外液相等', { size: 11, weight: 600, fill: C.sub })
  b.text(740, 764, '等张（isotonic）：红细胞置于其中体积不变——差别在溶质能否自由穿膜', { size: 11, weight: 600, fill: C.sub })
  b.wtext(740, 792, '输液张力谱（等张晶体 / 低张 / 高张）本质是选择把水赶到哪个区室；张力选择失误可直接造成溶血或细胞皱缩', { size: 10.5, fill: C.sub, maxW: 600, lh: 18 })
  b.text(740, 836, '冰点降低法：每 kg 水 1 mOsm 约使冰点下降 1.86×10^{-3} ℃', { size: 10.5, fill: C.sub })
  b.wtext(740, 862, '血浆电解质为主：Na^{+} 及其伴随阴离子撑起一半以上有效渗透性；蛋白质仅约 1.3 mOsm/L，却因不能穿过毛细血管壁而独担血管内保水（胶体渗透压，Starling 公式抗水肿的一极）', { size: 10.5, fill: C.sub, maxW: 600, lh: 18 })
  b.text(740, 926, '肝病低蛋白血症的水肿 = 胶体渗透压一极塌陷的结果', { size: 10.5, weight: 600, fill: C.enzD })
}

export default scene({
  title: '细胞膜结构与被动转运',
  subtitle: '脂双层约 7.5–10 nm 构成选择性屏障：O_{2}/CO_{2} 与类固醇顺梯度自由穿越；水经 AQP 快速通行，渗透压是溶质依数性，细胞外液约 280–310 mOsm/kg——等渗不等于等张',
  draw,
})
