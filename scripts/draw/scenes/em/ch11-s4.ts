// em ch11-s4 生物扫描电镜与冷冻扫描电镜（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、冷冻扫描电镜 ============
  b.panel(30, 132, 660, 412, { title: '一、冷冻扫描电镜：含水样品直读' })
  // 冰壳覆盖
  b.rect(60, 190, 200, 150, { fill: '#f8fafc', stroke: C.sub, sw: 1.8 })
  b.ellipse(160, 270, 62, 48, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ellipse(160, 270, 74, 58, { fill: 'none', stroke: C.acc, sw: 6, opacity: 0.35 })
  b.ctext(160, 358, '冰壳掩埋细节', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(160, 374, '约 110 K 冷台直读', { size: 9.5, fill: C.mute })
  b.arrow(280, 265, 340, 265, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.tag(310, 240, '升华蚀刻', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })
  // 蚀刻后
  b.rect(360, 190, 200, 150, { fill: '#f8fafc', stroke: C.sub, sw: 1.8 })
  b.ellipse(460, 270, 56, 44, { fill: C.accL, stroke: C.acc, sw: 2 })
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2
    b.line(460 + 52 * Math.cos(a), 270 + 40 * Math.sin(a), 460 + 76 * Math.cos(a), 270 + 60 * Math.sin(a), { stroke: C.ok, sw: 2 })
  }
  b.ctext(460, 358, '被掩埋的微绒毛露出', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(460, 374, '表面细节重新可读', { size: 9.5, fill: C.mute })
  b.wtext(590, 200, '把温度短暂升到约 −100 °C（170–180 K），表面冰缓慢升华数十秒到几分钟——盖在结构之上的冰壳被掏走，乳浊液界面膜等细节重见天日。', { size: 10, fill: C.sub, maxW: 90, lh: 14 })
  b.tag(230, 428, '冰面低电压下衬度温和', { fill: C.panelB, stroke: C.sub, size: 10.5, tfill: C.sub, pad: 9 })
  b.tag(540, 428, '细结构再镀 1–2 nm 薄铂稳电荷', { fill: C.panelB, stroke: C.sub, size: 10.5, tfill: C.sub, pad: 9 })
  b.ctext(360, 480, '免脱水免镀厚膜——形貌保真与低荷电的折中路线', { size: 10, fill: C.mute })

  // ============ 二、深蚀刻冷冻断裂复型 ============
  b.panel(710, 132, 660, 412, { title: '二、深蚀刻冷冻断裂复型：五步与 P/E 面' })
  const steps = ['快冻', '真空断裂', '蚀刻', '铂碳低角投影 2–3 nm', '碳加固 5–10 nm、溶样捞膜']
  steps.forEach((s, i) => {
    b.tag(770 + i * 118, 186, `${i + 1} ${s}`, { fill: i === 3 || i === 4 ? C.rnaL : C.panelB, stroke: i === 3 || i === 4 ? C.rna : C.line, size: 9, weight: 600, tfill: i === 3 || i === 4 ? C.rnaD : C.sub, pad: 6 })
    if (i < steps.length - 1) b.arrow(770 + i * 118 + 44, 186, 770 + (i + 1) * 118 - 44, 186, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  })
  // P 面 / E 面
  b.rect(740, 226, 270, 130, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  b.line(760, 300, 990, 300, { stroke: C.sub, sw: 2.4 })
  for (let i = 0; i < 6; i++) b.circle(782 + i * 36, 300, 6, { fill: C.pro })
  b.ctext(875, 276, 'P 面（胞质半层）：颗粒即膜蛋白原位分布', { size: 9.5, weight: 700, fill: C.proD })
  b.rect(1030, 226, 270, 130, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  b.line(1050, 300, 1280, 300, { stroke: C.sub, sw: 2.4 })
  for (let i = 0; i < 6; i++) b.circle(1072 + i * 36, 300, 6, { fill: 'none', stroke: C.mute, sw: 1.6, dash: '3 3' })
  b.ctext(1165, 276, 'E 面（胞外半层）：对应位置留坑', { size: 9.5, weight: 700, fill: C.mute })
  b.wtext(740, 392, '断口沿膜中平面裂开——命名由 Branton 等 1970 年代规范。以次氯酸钠一类腐蚀剂溶去样品、铜网捞取残膜，透射电镜下看的是这层「复型」而非样品本身；旋转投影使各方向均匀。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })
  b.tag(940, 470, '间隙连接六角颗粒阵列是经典证据', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.ctext(1150, 440, '第 3 章的投影衬度在此服役', { size: 9.5, fill: C.mute })

  // ============ 三、体积电镜 ============
  b.panel(30, 572, 660, 398, { title: '三、体积电镜：SBF-SEM 与 FIB-SEM' })
  // SBF
  b.rect(60, 616, 280, 160, { fill: '#f8fafc', stroke: C.sub, sw: 1.8 })
  b.rect(120, 700, 150, 50, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
  b.ctext(195, 729, '树脂块', { size: 10, weight: 700, fill: C.warnD })
  b.polygon([[240, 660], [258, 660], [249, 706]], { fill: C.acc, stroke: C.accD, sw: 1.4 })
  b.ctext(249, 652, '微型钻石刀', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(200, 772, 'SBF-SEM：切一刀、拍一张块面像', { size: 10, weight: 700, fill: C.sub })
  b.ctext(200, 788, 'z 步长即刀进给量 10–50 nm；牺牲式成像', { size: 9.5, fill: C.mute })
  // FIB
  b.rect(360, 616, 280, 160, { fill: '#f8fafc', stroke: C.sub, sw: 1.8 })
  b.rect(420, 700, 150, 50, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(495, 729, '树脂块', { size: 10, weight: 700, fill: C.proD })
  b.arrow(560, 720, 590, 720, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.text(556, 706, 'Ga^{+}', { size: 9.5, fill: C.accD })
  b.ctext(500, 772, 'FIB-SEM：30 kV 镓离子铣削', { size: 10, weight: 700, fill: C.sub })
  b.ctext(500, 788, 'z 步长 4–10 nm、体素各向同性', { size: 9.5, fill: C.mute })
  b.table(60, 812, 580, {
    headers: ['技术', 'z 步长', '各向同性', '通量'],
    colW: [170, 140, 140, 130], rowH: 26, fontSize: 10,
    rows: [
      ['SBF-SEM（Denk 与 Horstmann 2004）', '10–50 nm', '否', '最高'],
      ['FIB-SEM', '4–10 nm', '是', '中'],
    ],
  })
  b.ctext(350, 920, '带电样品（核酸类）与硬组织宜 FIB-SEM；大体积普查宜 SBF-SEM', { size: 9.5, fill: C.mute })

  // ============ 四、临床与分子应用 ============
  b.panel(710, 572, 660, 398, { title: '四、临床与分子应用' })
  b.text(730, 618, '肾脏病理：足细胞足突融合', { size: 11.5, weight: 700, fill: C.ink })
  // 正常足突
  b.rect(740, 634, 180, 80, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  for (let i = 0; i < 6; i++) b.rect(756 + i * 26, 646, 14, 44, { fill: C.okL, stroke: C.ok, sw: 1.4 })
  b.ctext(830, 728, '正常：指状足突交错', { size: 9.5, fill: C.okD })
  // 融合
  b.rect(940, 634, 180, 80, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  b.rect(956, 646, 148, 44, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(1030, 728, '病理：足突融合连续化', { size: 9.5, fill: C.badD })
  b.wtext(730, 762, '足突融合是肾小球滤过屏障病变的直接形态学证据——扫描电镜的表面形貌在临床病理中即诊断。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })
  b.tag(880, 812, '免疫金双标：背散射读共分布', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(1180, 812, '5–15 nm 金粒高衬度白点', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(880, 846, '核孔复合物篮结构：Ris 场发射 SEM 立档', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 9 })
  b.tag(1180, 846, '果蝇全脑约 8 nm 体素（Zheng 等 2018）', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 9 })
  b.ctext(1040, 916, '从花粉到肾脏：表面形貌学在生物学与医学两线作战', { size: 10, fill: C.mute })
}

export default scene({
  title: '生物扫描电镜与冷冻扫描电镜：从冷台到体积电镜',
  subtitle: '约 110 K 冷台直读含水样品，升华蚀刻于约 −100 °C 掏出被冰掩埋的细节；深蚀刻复型五步（铂碳低角投影 2–3 nm 加碳 5–10 nm）；SBF-SEM z 步长 10–50 nm 通量之最、FIB-SEM 4–10 nm 各向同性，果蝇全脑约 8 nm 体素',
  draw,
})
