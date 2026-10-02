// mt ch3-s4 动植物钾稳态对照（肾三段式 vs 吸收-分配-储存-再动员/门控方向反用/缺钾症状/共同点表）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、全链对照：动物的肾 vs 植物的整体 ============
  b.panel(30, 132, 1340, 430, { title: '一、全链对照：动物的肾（排泄闭环）vs 植物的整体（储存再动员）' })
  // —— 左：动物侧 ——
  b.text(48, 176, '动物侧：滤过—恒定重吸收—远端精细分泌', { size: 12.5, weight: 700, fill: C.badD })
  b.text(48, 202, '体内约 98% 的钾在细胞内（约 140 mmol/L）· 外液 3.5–5.5 mmol/L——内外比约 35:1', { size: 10.5, fill: C.sub })
  b.rect(48, 214, 640, 44, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 8 })
  b.text(60, 231, '急性防御（分钟级）：胰岛素与 β₂ 儿茶酚胺把吸收的钾推入细胞，抹平血钾尖峰', { size: 10, fill: C.sub })
  b.text(60, 248, '溶血·横纹肌溶解·酸中毒把 1%–2% 胞内钾搬出，即足以冲出血钾窄窗', { size: 10, fill: C.sub })
  b.rect(60, 268, 390, 34, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 7 })
  b.ctext(255, 285, '肾小球滤过 约 700 mmol/日', { size: 10.5, weight: 600, fill: C.badD })
  b.arrow(255, 302, 255, 316, { stroke: C.sub, sw: 1.6 })
  b.rect(60, 320, 390, 34, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(255, 337, '近端小管：恒定重吸收约 2/3（定量环节，不随盈亏调节）', { size: 10.5, fill: C.sub })
  b.arrow(255, 354, 255, 368, { stroke: C.sub, sw: 1.6 })
  b.rect(60, 372, 390, 34, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(255, 389, '髓襻升支：再吸收约 1/4（NKCC2）', { size: 10.5, fill: C.sub })
  b.arrow(255, 406, 255, 420, { stroke: C.sub, sw: 1.6 })
  b.rect(60, 424, 390, 44, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 7 })
  b.ctext(255, 440, '远端主细胞：ENaC 吸 Na^{+} → 管腔负电位', { size: 10.5, weight: 600, fill: C.badD })
  b.ctext(255, 458, 'ROMK 顺势泌 K^{+}（变量调节全压在远端）', { size: 10.5, weight: 600, fill: C.badD })
  b.wtext(472, 378, '高钾血症直接刺激肾上腺球状带（数分钟至数小时起效）', { size: 9.5, fill: C.mute, maxW: 195, lh: 16 })
  b.arrow(572, 398, 572, 420, { stroke: C.warn, sw: 1.4, marker: 'warn' })
  b.rect(470, 424, 205, 44, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 7 })
  b.ctext(572, 440, '醛固酮（总开关）', { size: 10.5, weight: 700, fill: C.warnD })
  b.ctext(572, 458, '↑ENaC·ROMK·钠泵', { size: 10, fill: C.warnD })
  b.arrow(468, 446, 452, 446, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.wtext(48, 500, '高钾餐后数小时内尿钾追平摄入——「吃得多少排多少」；摄入锐减时主细胞下调 ROMK、闰细胞经 H^{+}/K^{+}-ATPase 保钾泌 H^{+}', { size: 10.5, fill: C.sub, maxW: 630, lh: 18 })
  b.text(48, 542, '心脏对血钾窄窗最敏感：高钾 T 波高尖·低钾心律失常——临床恪守「见尿补钾」', { size: 10.5, weight: 600, fill: C.badD })
  // —— 右：植物侧 ——
  b.text(710, 176, '植物侧：吸收—分配—储存—再动员（无排泄概念）', { size: 12.5, weight: 700, fill: C.okD })
  b.text(710, 202, '钾占植物干重 1%–5%——最丰富的无机阳离子：酶激活·蛋白合成·渗透势·气孔运动·电荷配重', { size: 10.5, fill: C.sub })
  const stages: [string, string, string, string][] = [
    ['吸收（根成熟区）：AKT1＋HAK5 双系统接力', '', C.dnaL, C.dna],
    ['长距离分配：木质部 SKOR 装载·蒸腾流上行', '韧皮部 AKT2 双向装卸（糖-钾互为电学配重）', C.accL, C.acc],
    ['气孔日循环：保卫细胞 K^{+} 与苹果酸涨落——最大日常消耗户', '', C.okL, C.ok],
    ['储存：液泡（成熟细胞八至九成的钾）——「胞质恒定、液泡弹性」', '', C.proL, C.pro],
    ['再动员：老叶衰老 → 钾经韧皮部撤出，调往新叶与果实（可移动元素）', '', C.okL, C.ok],
  ]
  stages.forEach(([l1, l2, fc, sc], i) => {
    const y = 218 + i * 58
    b.rect(720, y, 640, 42, { fill: fc, stroke: sc, sw: 1.6, rx: 7 })
    if (l2) {
      b.ctext(1040, y + 17, l1, { size: 10.5, weight: 600, fill: C.ink })
      b.ctext(1040, y + 34, l2, { size: 10.5, fill: C.sub })
    } else {
      b.ctext(1040, y + 26, l1, { size: 10.5, weight: 600, fill: C.ink })
    }
    if (i < 4) b.arrow(1040, y + 43, 1040, y + 56, { stroke: C.sub, sw: 1.6 })
  })
  b.text(710, 516, '蒸腾微弱的夜间由根压与韧皮部再循环接替——钾的运输没有下班时间，只有换班', { size: 10.5, fill: C.sub })
  b.text(710, 544, '动物带着钾跑（血浆循环＋肾小管液），植物守着钾等（木质部＋韧皮部再循环）', { size: 10.5, weight: 600, fill: C.dnaD })

  // ============ 二、门控方向反用与缺钾症状 ============
  b.panel(30, 574, 1340, 200, { title: '二、门控方向反用与缺钾症状' })
  b.text(48, 612, '同一 S4 骨架，相反的接法（电压轴）', { size: 12, weight: 700, fill: C.sub })
  b.text(70, 625, '植物静息（−120～−200 mV）', { size: 9.5, fill: C.dnaD })
  b.rect(70, 630, 188, 10, { fill: C.dnaL, stroke: C.dna, sw: 1.4 })
  b.text(329, 625, '动物静息（−30～−90 mV）', { size: 9.5, fill: C.warnD })
  b.rect(329, 630, 141, 10, { fill: C.warnL, stroke: C.warn, sw: 1.4 })
  b.rect(70, 646, 205, 26, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.ctext(172, 663, 'KAT1：超极化开（内向吸 K^{+}）', { size: 10.5, weight: 600, fill: C.okD })
  b.rect(440, 646, 218, 26, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(549, 663, 'Kv：去极化开（外向复极）', { size: 10.5, weight: 600, fill: C.accD })
  b.arrow(55, 690, 670, 690, { stroke: C.sub, sw: 2, marker: 'ink' })
  const vt: [number, string][] = [[70, '−200'], [258, '−120'], [329, '−90'], [470, '−30'], [540, '0'], [658, '+50']]
  vt.forEach(([tx, lb]) => {
    b.line(tx, 690, tx, 697, { stroke: C.sub, sw: 1.6 })
    b.ctext(tx, 714, lb, { size: 9.5, fill: C.mute })
  })
  b.ctext(362, 736, '膜电位（mV）', { size: 10.5, fill: C.sub })
  b.text(48, 760, '植物把 H^{+}-ATPase 泵出的更负电位兑现为吸钾驱动力；动物 Kv 几乎清一色外向复极', { size: 10.5, fill: C.sub })
  // —— 右：缺钾症状 ——
  b.text(720, 612, '缺钾先写老叶：可移动元素的信号图谱', { size: 12, weight: 700, fill: C.warnD })
  b.path('M 860 690 Q 950 615 1040 690 Q 950 748 860 690 Z', { fill: C.okL, stroke: C.ok, sw: 2 })
  b.path('M 860 690 Q 950 615 1040 690', { stroke: C.bad, sw: 5, opacity: 0.5 })
  b.path('M 860 690 Q 950 748 1040 690', { stroke: C.bad, sw: 5, opacity: 0.5 })
  b.line(872, 690, 1028, 690, { stroke: C.dna, sw: 1.6 })
  b.line(910, 690, 895, 668, { stroke: C.dna, sw: 1.2 })
  b.line(910, 690, 895, 712, { stroke: C.dna, sw: 1.2 })
  b.line(990, 690, 1005, 668, { stroke: C.dna, sw: 1.2 })
  b.line(990, 690, 1005, 712, { stroke: C.dna, sw: 1.2 })
  b.ctext(950, 766, '叶缘先黄化、后焦枯（烧灼状镶边）', { size: 10.5, weight: 600, fill: C.badD })
  b.text(1090, 640, '· 钾优先调往幼嫩组织——老叶先衰', { size: 10.5, fill: C.sub })
  b.text(1090, 664, '· 茎秆机械强度下降·易倒伏', { size: 10.5, fill: C.sub })
  b.text(1090, 688, '· 果实着色差·淀粉积累不足', { size: 10.5, fill: C.sub })
  b.text(1090, 712, '· 抗逆性下滑——大田追施钾肥的信号', { size: 10.5, fill: C.sub })
  b.wtext(1090, 738, '动物缺钾危险在心（心律失常·肌无力）；植物缺钾损失在产量与品质', { size: 10, fill: C.mute, maxW: 265, lh: 16 })

  // ============ 三、共同点：同一套钾经济学 ============
  b.panel(30, 786, 1340, 199, { title: '三、共同点：同一套钾经济学' })
  b.table(45, 836, 900, {
    headers: ['共同点', '动物', '植物'],
    rows: [
      ['最富胞内阳离子', '胞内约 140 mmol/L·98% 在胞内', '100–200 mM·占干重 1%–5%'],
      ['通道＋转运体双系统', 'Kv/Kir/ROMK 配 NKCC/KCC', 'AKT1（mM 级）配 HAK5（μM 级）'],
      ['翻译后级联为旋钮', 'PKA·醛固酮—ENaC/ROMK', 'CBL-CIPK23 钙依赖磷酸化—AKT1'],
      ['一次泵供能', 'Na^{+} 循环（Na^{+}/K^{+}-ATPase）', 'H^{+} 循环（H^{+}-ATPase·PMF）'],
    ],
    rowH: 26, fontSize: 12, colW: [200, 350, 350],
  })
  b.wtext(965, 850, '连通道本身都同源：植物 Shaker 与动物 Kv 共享 6TMS 拓扑与带电 S4，只是门控方向被演化各取所需地反转', { size: 10.5, fill: C.sub, maxW: 390, lh: 18 })
  b.wtext(965, 915, '激素层面平行：醛固酮与 ABA 都是应激激素，都以「快速非基因组＋慢速转录重塑」双轨作用于各自的转运机器', { size: 10.5, fill: C.sub, maxW: 390, lh: 18 })
  b.text(965, 972, '分子高度同源，分岔在生态位——动物带着钾跑，植物守着钾等', { size: 11, weight: 700, fill: C.dnaD })
}

export default scene({
  title: '动植物钾稳态对照：排泄闭环 vs 储存再动员',
  subtitle:
    '动物体内约 98% 的钾在细胞内、外液仅 3.5–5.5 mmol/L——急性靠胰岛素等细胞间缓冲，慢性靠肾「近端恒定重吸收＋远端 ROMK/ENaC 按需分泌」与醛固酮总开关；植物无排泄概念，走吸收—木质部/韧皮部分配—液泡储存—老叶再动员的全内循环，缺钾先写老叶叶缘焦枯',
  draw,
})
