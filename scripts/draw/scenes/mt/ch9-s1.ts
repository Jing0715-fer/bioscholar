// mt ch9-s1 ABC 总论：模块总装 · NBD 三明治循环 · 两种组装 · 方向性与版图
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、核心模块总装：2×TMD＋2×NBD =================
  b.panel(30, 132, 660, 455, { title: '一、核心模块总装：2×TMD＋2×NBD' })
  b.wtext(46, 185, '四个模块拼成一台机器：两个跨膜结构域（TMD，各约 6 条 TMS）对合围成底物通路；两个核苷酸结合域（NBD）悬挂胞质侧——全家族序列最保守的部分', { size: 10.5, fill: C.sub, maxW: 610, lh: 18 })
  b.text(46, 255, '细胞外', { size: 10, fill: C.mute })
  // 膜与 12 条跨膜螺旋（6＋6）
  b.bilayer(80, 290, 400)
  const tms1 = [160, 184, 208, 232, 256, 280]
  const tms2 = [330, 354, 378, 402, 426, 450]
  tms1.forEach(cx => b.rect(cx - 10, 272, 20, 68, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 5 }))
  tms2.forEach(cx => b.rect(cx - 10, 272, 20, 68, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 5 }))
  b.ctext(220, 260, 'TMD1·6 TMS', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(390, 260, 'TMD2·6 TMS', { size: 10.5, weight: 700, fill: C.proD })
  // 转运通路（交替通路）：底物自胞质小叶入口袋、甩到胞外
  b.path('M283,336 L305,286 L327,336', { fill: 'none', stroke: C.enz, sw: 1.6, dash: '5 4' })
  b.ion(305, 306, 'S', { r: 9, fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 9 })
  b.arrow(305, 282, 305, 250, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ion(305, 236, 'S', { r: 9, fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 9 })
  b.ctext(305, 218, '底物外排', { size: 9.5, weight: 600, fill: C.enzD })
  // 耦联螺旋与两个 NBD
  b.line(220, 340, 205, 396, { stroke: C.sub, sw: 1.6 })
  b.line(390, 340, 375, 396, { stroke: C.sub, sw: 1.6 })
  b.ctext(292, 372, '耦联螺旋', { size: 9, fill: C.mute })
  b.ellipse(195, 435, 62, 40, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(195, 440, 'NBD1', { size: 12, weight: 700, fill: C.accD })
  b.ellipse(385, 435, 62, 40, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(385, 440, 'NBD2', { size: 12, weight: 700, fill: C.accD })
  b.tag(290, 414, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10, weight: 700 })
  b.tag(290, 458, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10, weight: 700 })
  b.ctext(290, 496, '二聚界面夹 2 ATP', { size: 9.5, weight: 600, fill: C.rnaD })
  b.text(46, 390, '细胞质', { size: 10, fill: C.mute })
  // 右列：NBD 基序速查
  b.text(492, 255, 'NBD 基序速查（家族指纹）', { size: 11.5, weight: 700, fill: C.sub })
  b.text(492, 283, '· Walker A＝P 环，抓 ATP 磷酸基', { size: 10, fill: C.sub })
  b.text(492, 307, '· Walker B 配位 Mg^{2+}·激活催化水', { size: 10, fill: C.sub })
  b.text(492, 331, '· Q 环 / H 环稳定催化水与 γ 磷酸', { size: 10, fill: C.sub })
  b.wtext(492, 355, '· LSGGQ 签名基序：仅见于 ABC 家族——分子分类学最重要的序列指纹', { size: 10, fill: C.sub, maxW: 186, lh: 23 })
  b.wtext(492, 414, '多数 ABC 每转运一分子底物约耗 2 分子 ATP——效率换广谱', { size: 10, fill: C.sub, maxW: 186, lh: 23 })
  b.wtext(46, 545, 'NBD 像标准化的「盒式磁带」，拼上不同 TMD 即得不同机器：运脂质、固醇、胆汁酸、多肽、药物、螯合物无所不可；TMD 底物口袋深而柔软，底物先溶入胞质小叶再滑进口袋', { size: 10, fill: C.sub, maxW: 625, lh: 23 })

  // ================= 二、NBD 三明治循环：四拍发动机 =================
  b.panel(710, 132, 660, 455, { title: '二、NBD 三明治循环：四拍发动机' })
  b.wtext(726, 185, '单个 NBD 没有完整催化腔：只有两 NBD 面对面闭合、一侧 Walker A 与对侧 LSGGQ 互嵌，像三明治一样夹住两分子 ATP，催化要素才被临时拼齐', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })
  // 四步盒
  const step = (x: number, t: string, s1: string, s2: string, hot: boolean) => {
    b.rect(x, 232, 140, 78, { fill: hot ? C.rnaL : C.panelB, stroke: hot ? C.rna : C.sub, sw: hot ? 2.2 : 1.8, rx: 9 })
    b.ctext(x + 70, 256, t, { size: 12.5, weight: 700, fill: hot ? C.rnaD : C.ink })
    b.ctext(x + 70, 276, s1, { size: 9, fill: C.sub })
    b.ctext(x + 70, 292, s2, { size: 9, fill: C.mute })
  }
  step(726, '① ATP 结合', '两 NBD 各抓', '一分子 ATP', false)
  step(886, '② 二聚化', '三明治闭合', '夹住 2 ATP', true)
  step(1046, '③ 依次水解', 'γ 磷酸脱离', '→ ADP＋Pi', true)
  step(1206, '④ 解离复位', '钳口张开', '待下一轮', false)
  b.arrow(870, 271, 884, 271, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(1030, 271, 1044, 271, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(1190, 271, 1204, 271, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  // 回环箭头
  b.path('M1276,314 C1276,342 1215,338 1150,338 L890,338 C825,338 766,342 766,314', { fill: 'none', stroke: C.faint, sw: 1.8, dash: '6 5', marker: 'mute' })
  b.ctext(1021, 356, '循环往复', { size: 9.5, fill: C.mute })
  // TMD 交替通路双态
  b.bilayer(830, 388, 150)
  b.bilayer(1120, 388, 150)
  b.path('M885,384 L865,418 M935,384 L955,418', { fill: 'none', stroke: C.pro, sw: 3 })
  b.ion(910, 408, 'S', { r: 8, fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 8 })
  b.ctext(910, 442, '内开口（朝胞质）', { size: 9.5, weight: 600, fill: C.proD })
  b.path('M1175,418 L1155,384 M1225,418 L1245,384', { fill: 'none', stroke: C.pro, sw: 3 })
  b.ion(1200, 396, 'S', { r: 8, fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 8 })
  b.ctext(1200, 442, '外开口（朝胞外）', { size: 9.5, weight: 600, fill: C.proD })
  b.arrow(1000, 401, 1100, 401, { stroke: C.sub, sw: 2, marker: 'ink', markerStart: 'ink' })
  b.ctext(1050, 382, '交替通路', { size: 10, weight: 700, fill: C.sub })
  b.ctext(1050, 466, 'NBD 钳口开合经耦联螺旋传到 TMD：跨膜通路在内开口 / 外开口间来回翻转', { size: 10, fill: C.sub })
  // P 型对照注记
  b.rect(726, 480, 618, 92, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 9 })
  b.text(740, 502, '与 P 型 ATPase 并排：两种「直接水解 ATP」的哲学', { size: 11.5, weight: 700, fill: C.sub })
  b.wtext(740, 526, 'P 型：γ 磷酸共价转移到天冬氨酸，形成 E1~P 磷酰化中间体——底物限于离子，计量精确（3 Na^{+}:2 K^{+}/ATP）', { size: 9.5, fill: C.sub, maxW: 285, lh: 23 })
  b.wtext(1048, 526, 'ABC：完全不经共价中间体，ATP 只当「分子胶」与「弹簧」——动力交给任意形状的底物结合腔，约 2 ATP/底物', { size: 9.5, fill: C.sub, maxW: 285, lh: 23 })

  // ================= 三、两种组装：全长与半分子 =================
  b.panel(30, 602, 660, 380, { title: '三、两种组装：全长单体与半分子拼装' })
  // 全长型
  b.line(56, 695, 436, 695, { stroke: C.faint, sw: 1.4 })
  b.rect(60, 678, 80, 34, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.ctext(100, 699, 'TMD1', { size: 10.5, weight: 600, fill: C.proD })
  b.rect(150, 678, 90, 34, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 6 })
  b.ctext(195, 699, 'NBD1', { size: 10.5, weight: 600, fill: C.accD })
  b.rect(250, 678, 80, 34, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.ctext(290, 699, 'TMD2', { size: 10.5, weight: 600, fill: C.proD })
  b.rect(340, 678, 90, 34, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 6 })
  b.ctext(385, 699, 'NBD2', { size: 10.5, weight: 600, fill: C.accD })
  b.text(48, 672, 'N', { size: 9.5, weight: 700, fill: C.mute })
  b.text(444, 672, 'C', { size: 9.5, weight: 700, fill: C.mute })
  b.tag(490, 695, '一条肽链', { fill: C.panelB, stroke: C.line, tfill: C.sub, size: 10, weight: 600 })
  b.text(46, 737, '全长型（full-size）：TMD1-NBD1-TMD2-NBD2 串在一条肽链，天然自带「内二聚」——代表：P-gp、CFTR', { size: 10, fill: C.sub })
  // 半分子异二聚体 TAP
  b.rect(60, 758, 70, 32, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.ctext(95, 778, 'TMD', { size: 10, weight: 600, fill: C.proD })
  b.rect(140, 758, 80, 32, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 6 })
  b.ctext(180, 778, 'NBD', { size: 10, weight: 600, fill: C.accD })
  b.ctext(135, 750, 'TAP1 半分子', { size: 9, fill: C.mute })
  b.ctext(255, 780, '＋', { size: 15, weight: 700, fill: C.sub })
  b.rect(280, 758, 70, 32, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.ctext(315, 778, 'TMD', { size: 10, weight: 600, fill: C.proD })
  b.rect(360, 758, 80, 32, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 6 })
  b.ctext(400, 778, 'NBD', { size: 10, weight: 600, fill: C.accD })
  b.ctext(355, 750, 'TAP2 半分子', { size: 9, fill: C.mute })
  b.arrow(452, 774, 486, 774, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.tag(540, 774, '异二聚体', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10, weight: 700 })
  b.text(46, 817, '半分子型（half-size）：每条肽链只带一个 TMD＋一个 NBD，必须成对拼装才有功能——TAP1/TAP2 把抗原肽送进内质网', { size: 10, fill: C.sub })
  // 半分子同二聚体 ABCG
  b.rect(60, 838, 70, 32, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.ctext(95, 858, 'TMD', { size: 10, weight: 600, fill: C.proD })
  b.rect(140, 838, 80, 32, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 6 })
  b.ctext(180, 858, 'NBD', { size: 10, weight: 600, fill: C.accD })
  b.ctext(135, 830, 'ABCG 半分子', { size: 9, fill: C.mute })
  b.ctext(255, 860, '＋', { size: 15, weight: 700, fill: C.sub })
  b.rect(280, 838, 70, 32, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.ctext(315, 858, 'TMD', { size: 10, weight: 600, fill: C.proD })
  b.rect(360, 838, 80, 32, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 6 })
  b.ctext(400, 858, 'NBD', { size: 10, weight: 600, fill: C.accD })
  b.ctext(355, 830, 'ABCG 半分子', { size: 9, fill: C.mute })
  b.arrow(452, 854, 486, 854, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.tag(540, 854, '同/异二聚体', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10, weight: 700 })
  b.text(46, 897, '植物 ABCG 亚族多为半分子：同二聚（ABCG11、ABCG29）或异二聚（ABCG11/12）皆可——拼装组合大幅扩充家族底物谱', { size: 10, fill: C.sub })
  b.wtext(46, 925, '「半分子×2」的经济学：同一亚族成员互换搭档即换底物谱，家族功能多样性由此翻倍——全长自带内二聚，半分子靠配对寻对手', { size: 10, fill: C.sub, maxW: 625, lh: 23 })

  // ================= 四、方向性与版图 =================
  b.panel(710, 602, 660, 380, { title: '四、方向性：输入体对输出体 · 48 对 130' })
  b.ctext(815, 644, '细菌·输入体', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(1215, 644, '动植物·输出体', { size: 11.5, weight: 700, fill: C.proD })
  // 输入体 mini
  b.ion(800, 650, '麦芽糖', { r: 12, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 6.5 })
  b.arrow(800, 664, 800, 674, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.ellipse(800, 688, 24, 13, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.ctext(800, 691, 'MBP', { size: 8, weight: 700, fill: C.rnaD })
  b.text(852, 692, '底物结合蛋白', { size: 8.5, fill: C.rnaD })
  b.line(848, 688, 826, 688, { stroke: C.rna, sw: 1.1 })
  b.bilayer(740, 706, 130)
  b.rect(775, 694, 18, 42, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 4 })
  b.rect(808, 694, 18, 42, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 4 })
  b.ctext(762, 686, 'MalF', { size: 8, fill: C.mute })
  b.ctext(840, 686, 'MalG', { size: 8, fill: C.mute })
  b.ellipse(778, 752, 19, 13, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ellipse(822, 752, 19, 13, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ctext(800, 776, 'MalK_{2}（NBD×2）', { size: 8.5, fill: C.accD })
  b.arrow(800, 702, 800, 760, { stroke: C.rna, sw: 1.6, marker: 'rna', dash: '4 3' })
  b.ctext(1015, 720, 'vs', { size: 13, weight: 700, fill: C.sub })
  // 输出体 mini
  b.bilayer(1150, 706, 130)
  b.rect(1185, 694, 18, 42, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 4 })
  b.rect(1218, 694, 18, 42, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 4 })
  b.ellipse(1188, 752, 19, 13, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ellipse(1232, 752, 19, 13, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ion(1210, 770, 'S', { r: 8, fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 8 })
  b.arrow(1210, 760, 1210, 738, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.ion(1180, 662, 'S', { r: 7, fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 7 })
  b.ion(1216, 656, 'S', { r: 7, fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 7 })
  b.arrow(1210, 692, 1210, 672, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.wtext(726, 795, '输入体：底物结合蛋白先抓后递（I 型）；BtuCD（II 型）以胞外结构域直接抓取——高效浓缩营养', { size: 9.5, fill: C.sub, maxW: 245, lh: 17 })
  b.wtext(1090, 795, '输出体为主流：脂质、信号分子、异生物质泵出胞外——动物屏障与植物表面工程皆建于其上', { size: 9.5, fill: C.sub, maxW: 245, lh: 17 })
  // 基因组规模对比条
  b.text(726, 848, '家族规模：两个基因组的对照（基因数）', { size: 11.5, weight: 700, fill: C.sub })
  b.text(838, 868, '人类：48 个基因，ABCA–ABCG 七亚族', { size: 9.5, fill: C.sub })
  b.rect(838, 874, 125, 16, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 4 })
  b.text(972, 886, '48', { size: 10, weight: 700, fill: C.accD })
  b.text(838, 906, '拟南芥：约 130 个，ABCA–ABCI 九亚族（最大基因家族之一）', { size: 9.5, fill: C.sub })
  b.rect(838, 912, 338, 16, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 4 })
  b.text(1184, 924, '≈130', { size: 10, weight: 700, fill: C.okD })
  b.wtext(726, 950, '底物广谱：脂质与固醇、胆汁酸、多肽、数百种结构各异的药物、重金属螯合物、谷胱甘肽结合物、生长素与次生代谢物', { size: 9.5, fill: C.sub, maxW: 620, lh: 20 })
}

export default scene({
  title: 'ABC 转运体总论：模块、发动机与版图',
  subtitle: 'ATP 结合盒家族以 2×TMD（各约 6 TMS）＋2×NBD 拼装：Walker A/B、Q 环、H 环与家族独有的 LSGGQ 签名基序；NBD 二聚体夹住两分子 ATP 的三明治循环驱动交替通路；全长与半分子两种组装并存，细菌输入体与动植物输出体分流——人类 48 基因七亚族对拟南芥约 130 个九亚族',
  draw,
})
