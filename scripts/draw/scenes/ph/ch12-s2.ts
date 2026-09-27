// ph ch12-s2 甲状腺与肾上腺：六步合成、外周脱碘、三带、皮质醇节律与应激双轴
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、甲状腺激素六步合成 ============
  b.panel(30, 132, 660, 400, { title: '一、甲状腺激素六步合成（滤泡装配）' })
  const step = (x: number, y: number, fill: string, stroke: string, tfill: string, t1: string, t2: string, t3: string) => {
    b.rect(x, y, 195, 78, { fill, stroke, sw: 1.6, rx: 8 })
    b.ctext(x + 97, y + 22, t1, { size: 12.5, weight: 700, fill: tfill })
    b.ctext(x + 97, y + 42, t2, { size: 10, fill: C.sub })
    b.ctext(x + 97, y + 62, t3, { size: 10, fill: C.mute })
  }
  step(50, 180, C.accL, C.acc, C.accD, '① 摄碘', 'NIS（Na^{+}/I^{-} 同向转运）', '二级主动·浓集 20–40 倍')
  b.arrow(247, 219, 263, 219, { stroke: C.ink, sw: 2 })
  step(265, 180, C.accL, C.acc, C.accD, '② 碘入腔', '顶膜 pendrin 外排', 'I^{-} 进入滤泡腔')
  b.arrow(462, 219, 478, 219, { stroke: C.ink, sw: 2 })
  step(480, 180, C.rnaL, C.rna, C.rnaD, '③ 活化', 'TPO + H_{2}O_{2}', 'I^{-} 氧化为活性碘')
  b.arrow(577, 260, 577, 283, { stroke: C.ink, sw: 2 })
  step(480, 285, C.rnaL, C.rna, C.rnaD, '④ 碘化', 'TPO 催化', 'TG 酪氨酸挂碘成 MIT/DIT')
  b.arrow(478, 324, 462, 324, { stroke: C.ink, sw: 2 })
  step(265, 285, C.rnaL, C.rna, C.rnaD, '⑤ 偶联', 'DIT+DIT→T_{4}；MIT+DIT→T_{3}', 'TPO 催化偶联')
  b.arrow(263, 324, 247, 324, { stroke: C.ink, sw: 2 })
  step(50, 285, C.okL, C.ok, C.okD, '⑥ 释放', '胞吞胶体·溶酶体水解', 'MIT/DIT 脱碘回收碘')
  b.tag(205, 392, 'TPO 一肩挑 ③④⑤——硫脲类靶点', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10.5, weight: 700, pad: 10 })
  b.tag(480, 392, 'Wolff-Chaikoff：大剂碘阻断有机化', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10.5, weight: 700, pad: 10 })
  b.wtext(50, 428, '胶体（TG 支架）储于滤泡腔、储量够 2–3 个月——抗甲亢药起效慢的根源。碘缺乏→TSH 持续刺激→腺体增生（地方性甲状腺肿）；食盐加碘基本消除碘缺乏病。', { size: 11, fill: C.sub, maxW: 620, lh: 16.5 })
  b.tag(330, 482, '滤泡上皮顶面朝腔·底面朝血（极性）', { fill: C.panelB, stroke: C.mute, tfill: C.sub, size: 10.5, weight: 700, pad: 10 })

  // ============ 二、分泌比例·外周脱碘·三大作用 ============
  b.panel(710, 132, 660, 400, { title: '二、分泌比例·外周脱碘·三大作用' })
  b.text(730, 178, '分泌比例', { size: 11, weight: 700, fill: C.sub })
  b.rect(730, 188, 223, 26, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.rect(953, 188, 17, 26, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.ctext(841, 206, 'T_{4} 约 93%', { size: 11, weight: 700, fill: C.accD })
  b.text(977, 206, 'T_{3} 7%', { size: 10.5, weight: 700, fill: C.rnaD })
  b.rect(730, 248, 90, 44, { fill: C.bg, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(775, 276, 'T_{4}', { size: 14, weight: 700, fill: C.accD })
  b.arrow(822, 270, 874, 270, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.ctext(848, 258, '5′-脱碘', { size: 9.5, weight: 700, fill: C.okD })
  b.ctext(848, 290, 'D1/D2', { size: 9, fill: C.mute })
  b.rect(876, 248, 130, 44, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(941, 268, 'T_{3}', { size: 13, weight: 700, fill: C.okD })
  b.ctext(941, 285, '活性约 5 倍', { size: 9.5, fill: C.sub })
  b.arrow(848, 296, 848, 330, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.text(858, 316, 'D3 内环脱碘', { size: 9.5, fill: C.badD })
  b.rect(790, 332, 120, 40, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8 })
  b.ctext(850, 356, 'rT_{3}（灭活）', { size: 11, weight: 700, fill: C.badD })
  b.text(920, 356, '饥饿·重症时堆积', { size: 9.5, fill: C.mute })
  b.arrow(1006, 270, 1046, 228, { stroke: C.ok, sw: 2, marker: 'ok' })
  const eff = (y: number, fill: string, stroke: string, tfill: string, t1: string, t2: string) => {
    b.rect(1050, y, 300, 58, { fill, stroke, sw: 1.6, rx: 8 })
    b.ctext(1200, y + 22, t1, { size: 12, weight: 700, fill: tfill })
    b.ctext(1200, y + 42, t2, { size: 10, fill: C.sub })
  }
  eff(190, C.accL, C.acc, C.accD, '代谢：产热 BMR↑', '上调 Na^{+}/K^{+}-ATP 酶·促糖异生')
  eff(258, C.proL, C.pro, C.proD, '发育：脑关键期', '缺乏→克汀病·新生儿 TSH 筛查')
  eff(326, C.rnaL, C.rna, C.rnaD, '允许：上调 β 受体', '放大儿茶酚胺效应（甲亢心悸手抖）')
  b.wtext(730, 400, 'T_{4} 99.97% 与蛋白结合（TBG 为主）：半衰期约 7 天、T_{3} 约 1 天；妊娠 TBG 翻倍——总 T_{4} 升而游离 T_{4} 正常（假性甲亢），判断须测游离。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.tag(890, 460, 'TRH→TSH→滤泡；T_{3}/T_{4} 负反馈于垂体·下丘脑', { fill: C.panelB, stroke: C.mute, tfill: C.sub, size: 10.5, weight: 700, pad: 10 })
  b.tag(890, 496, '垂体局部 D2 转换的 T_{3} 是反馈「读数器」', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 10.5, weight: 700, pad: 10 })

  // ============ 三、肾上腺皮质：三带三激素 ============
  b.panel(30, 548, 660, 437, { title: '三、肾上腺皮质：三带三激素' })
  b.ctext(240, 636, '肾上腺（皮质三带 + 髓质）', { size: 11.5, weight: 700, fill: C.sub })
  b.circle(240, 770, 118, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.circle(240, 770, 92, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.circle(240, 770, 66, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.circle(240, 770, 40, { fill: C.enzL, stroke: C.enz, sw: 2 })
  b.line(394, 672, 330, 706, { stroke: C.faint, sw: 1.3 })
  b.text(400, 668, '球状带 → 醛固酮', { size: 12.5, weight: 700, fill: C.accD })
  b.text(400, 688, '血管紧张素 II·高血钾驱动（不听 ACTH）', { size: 10.5, fill: C.sub })
  b.line(394, 740, 318, 742, { stroke: C.faint, sw: 1.3 })
  b.text(400, 738, '束状带 → 皮质醇', { size: 12.5, weight: 700, fill: C.rnaD })
  b.text(400, 758, 'ACTH 驱动·最厚一带', { size: 10.5, fill: C.sub })
  b.line(394, 810, 290, 798, { stroke: C.faint, sw: 1.3 })
  b.text(400, 808, '网状带 → DHEA', { size: 12.5, weight: 700, fill: C.proD })
  b.text(400, 828, '雄激素前体库·17,20-裂解酶活跃', { size: 10.5, fill: C.sub })
  b.line(394, 880, 262, 808, { stroke: C.faint, sw: 1.3 })
  b.text(400, 878, '髓质 → 肾上腺素', { size: 12.5, weight: 700, fill: C.enzD })
  b.text(400, 898, '嗜铬细胞·内脏大神经（交感同源）', { size: 10.5, fill: C.sub })
  b.wtext(50, 940, '球状带无 17α-羟化酶故独产醛固酮；束状带 17α-羟化酶富集产皮质醇；网状带 17,20-裂解酶活跃出 DHEA——同一底物、不同酶链。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(240, 972, '青春期「肾上腺功能初现」＝网状带开场', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 10.5, weight: 700, pad: 10 })

  // ============ 四、皮质醇昼夜节律与应激双轴 ============
  b.panel(710, 548, 660, 437, { title: '四、皮质醇昼夜节律与应激双轴' })
  b.axis(745, 800, 235, 165, {
    title: '皮质醇昼夜节律（晨峰夜谷）',
    xlabel: '时刻（h）',
    grid: false,
    xticks: [[0, '0'], [0.25, '6'], [0.5, '12'], [0.75, '18'], [1, '24']],
  })
  b.curve(745, 800, 235, 165, [[0, 0.3], [0.1, 0.35], [0.2, 0.62], [0.33, 0.95], [0.5, 0.55], [0.65, 0.35], [0.8, 0.28], [0.93, 0.22], [1, 0.18]], { smooth: true, stroke: C.rna, sw: 3 })
  b.circle(822.6, 643.3, 5, { fill: C.rna })
  b.text(850, 640, '晨 8 时峰', { size: 10.5, weight: 700, fill: C.rnaD })
  b.text(850, 656, '可达夜间 2–3 倍', { size: 10, fill: C.mute })
  b.circle(980, 770.3, 5, { fill: C.rna })
  b.etext(972, 787, '午夜谷', { size: 10.5, weight: 700, fill: C.rnaD })
  b.wtext(730, 880, 'ACTH 亦步亦趋；采样时辰不注明则数据无意义', { size: 10.5, fill: C.sub, maxW: 250, lh: 15 })
  // 右列：应激双轴
  b.rect(1080, 598, 230, 46, { fill: C.enzL, stroke: C.enz, sw: 2, rx: 10 })
  b.ctext(1195, 618, '应激刺激', { size: 12.5, weight: 700, fill: C.enzD })
  b.ctext(1195, 635, '稳态受威胁（创伤·感染·心理）', { size: 9.5, fill: C.sub })
  b.arrow(1150, 646, 1085, 668, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.arrow(1240, 646, 1290, 668, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.rect(990, 670, 190, 56, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(1085, 690, '交感-髓质轴', { size: 12, weight: 700, fill: C.badD })
  b.ctext(1085, 708, '内脏大神经→儿茶酚胺', { size: 10, fill: C.sub })
  b.rect(1195, 670, 165, 56, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(1277, 690, 'HPA 轴', { size: 12, weight: 700, fill: C.accD })
  b.ctext(1277, 708, 'CRH→ACTH→皮质醇', { size: 10, fill: C.sub })
  b.tag(1085, 755, '秒级动员', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10.5, weight: 700, pad: 8 })
  b.tag(1285, 755, '分钟-小时级', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 8 })
  b.wtext(1000, 795, '允许作用：皮质醇自身不缩血管，却维持血管平滑肌对儿茶酚胺的反应性——艾迪生病「无人允许，信号失效」，血压低垂、升压药迟钝。', { size: 10.5, fill: C.sub, maxW: 350, lh: 15 })
  b.tag(1180, 848, '慢性应激→海马受损·HPA 刹车松脱', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10.5, weight: 700, pad: 10 })
  b.tag(1180, 884, 'IL-1/IL-6 亦激活 HPA：神经-内分泌-免疫握手', { fill: C.panelB, stroke: C.mute, tfill: C.sub, size: 10.5, weight: 700, pad: 10 })
  b.tag(1180, 920, '库欣：向心性肥胖·满月脸·水牛背', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10.5, weight: 700, pad: 10 })
}

export default scene({
  title: '甲状腺与肾上腺：激素合成、节律与应激双轴',
  subtitle: 'T_{4} 占分泌约 93% 而活性在 T_{3}（约 5 倍）——外周 5′-脱碘本身即调节位点；肾上腺三带分产醛固酮/皮质醇/DHEA，皮质醇晨 8 时峰可达夜间 2–3 倍，应激由交感-髓质轴（秒级）与 HPA 轴（分钟-小时级）双轴接力',
  draw,
})
