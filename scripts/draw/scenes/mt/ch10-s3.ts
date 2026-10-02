// mt ch10-s3 锌铜等微量元素：动物装备 · 植物装备 · ZIP 演化佳话
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、动物锌装备：ZIP 入、ZnT 出 =================
  b.panel(30, 132, 660, 455, { title: '一、动物锌装备：ZIP 入、ZnT 出' })
  b.wtext(46, 184, '锌是数百种酶的「稳定工具钢」：不氧化、不产自由基——稳态由两个反向家族对掌', { size: 10, fill: C.sub, maxW: 615, lh: 18 })
  b.text(46, 226, '细胞外', { size: 9.5, fill: C.mute })
  b.bilayer(60, 268, 320)
  b.rect(100, 244, 72, 52, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 7 })
  b.ctext(136, 266, 'ZIP×14', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(136, 284, '输入', { size: 7.5, fill: C.sub })
  b.ion(136, 204, 'Zn^{2+}', { r: 11, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 7.5 })
  b.arrow(136, 218, 136, 240, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.rect(240, 244, 72, 52, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 7 })
  b.ctext(276, 266, 'ZnT1', { size: 10.5, weight: 700, fill: C.enzD })
  b.ctext(276, 284, '质膜外排', { size: 7, fill: C.sub })
  b.ion(276, 322, 'Zn^{2+}', { r: 11, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 7.5 })
  b.arrow(276, 310, 276, 298, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  // 胞质与金属硫蛋白缓冲
  b.text(46, 322, '细胞质·游离锌 pM 级', { size: 9.5, fill: C.mute })
  b.ion(190, 316, 'MT', { r: 20, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 10 })
  b.ctext(190, 354, '金属硫蛋白缓冲', { size: 8, fill: C.sub })
  // 区室化细胞器
  b.circle(130, 420, 30, { fill: '#ffffff', stroke: C.dna, sw: 2 })
  b.ctext(130, 414, 'ZnT2', { size: 9, weight: 700, fill: C.dnaD })
  b.circle(118, 432, 4, { fill: C.dna })
  b.circle(142, 432, 4, { fill: C.dna })
  b.ctext(130, 468, '乳腺分泌泡', { size: 8.5, fill: C.sub })
  b.arrow(150, 360, 133, 392, { stroke: C.sub, sw: 1.4, marker: 'ink' })
  b.circle(300, 420, 30, { fill: '#ffffff', stroke: C.dna, sw: 2 })
  b.ctext(300, 414, 'ZnT8', { size: 9, weight: 700, fill: C.dnaD })
  b.circle(288, 432, 4, { fill: C.dna })
  b.circle(312, 432, 4, { fill: C.dna })
  b.ctext(300, 468, '胰岛素颗粒·结晶储锌', { size: 8.5, fill: C.sub })
  b.arrow(285, 360, 298, 392, { stroke: C.sub, sw: 1.4, marker: 'ink' })
  // 右列
  b.rect(405, 208, 270, 118, { fill: '#ffffff', stroke: C.bad, sw: 1.5, rx: 9 })
  b.text(419, 230, 'ZIP4（十二指肠顶膜）', { size: 10.5, weight: 700, fill: C.badD })
  b.wtext(419, 250, '锌充足时被泛素-溶酶体途径快速降解、缺锌时稳定富集——吸收闸门随体锌实时启闭；突变→肠病性肢端皮炎：腹泻·皮炎·脱发，补锌即逆转', { size: 9.5, fill: C.sub, maxW: 242, lh: 20 })
  b.rect(405, 342, 270, 60, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 9 })
  b.text(419, 364, '体锌 2–3 g（仅次于铁）', { size: 9.5, weight: 700, fill: C.ink })
  b.text(419, 386, '含锌酶数以百计、锌指转录因子数以千计', { size: 9, fill: C.sub })
  b.wtext(405, 426, '胞质游离锌被金属硫蛋白缓冲在皮摩尔量级——波动本身即信号', { size: 9.5, fill: C.sub, maxW: 258, lh: 21 })
  b.wtext(405, 470, 'ZnT 家族分工：ZnT1 质膜外排、ZnT2 向乳腺分泌泡、ZnT8 向胰岛素分泌颗粒（胰岛素结晶储存需锌）——输出与区室化', { size: 9.5, fill: C.sub, maxW: 258, lh: 21 })
  b.wtext(405, 540, '从味觉、免疫到伤口愈合——锌的缺位都有回声', { size: 9.5, fill: C.sub, maxW: 258, lh: 21 })
  // 底部小结
  b.wtext(46, 512, '两个反向家族对掌：ZIP（SLC39A，14 个成员）负责跨膜输入与胞质锌供给，ZnT（SLC30A，10 个成员）负责输出与区室化', { size: 10, fill: C.sub, maxW: 350, lh: 23 })

  // ================= 二、动物铜装备：零库存、全押运 =================
  b.panel(710, 132, 660, 455, { title: '二、动物铜装备：CTR1 入、ATP7A/B 出' })
  b.wtext(726, 184, '铜极易惹出自由基——生物给铜修「专线」：CTR1 输入 Cu^{+} 后由伴侣蛋白分类押运，不设「游离铜」这一站', { size: 10, fill: C.sub, maxW: 615, lh: 18 })
  b.text(726, 226, '细胞外', { size: 9.5, fill: C.mute })
  b.bilayer(740, 268, 200)
  b.rect(800, 244, 76, 52, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 7 })
  b.ctext(838, 266, 'CTR1', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(838, 284, 'Cu^{+} 输入', { size: 7.5, fill: C.sub })
  b.ion(838, 204, 'Cu^{+}', { r: 10, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7.5 })
  b.arrow(838, 218, 838, 240, { stroke: C.dna, sw: 1.6, marker: 'dna' })
  b.text(726, 316, '细胞质', { size: 9.5, fill: C.mute })
  b.arrow(838, 298, 838, 332, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  // 伴侣蛋白三押运
  b.rect(726, 336, 170, 44, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(811, 356, 'ATOX1', { size: 10.5, weight: 700, fill: C.ink })
  b.ctext(811, 374, '押运至铜泵 ATP7A/B', { size: 7.5, fill: C.sub })
  b.rect(912, 336, 150, 44, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(987, 356, 'CCS', { size: 10.5, weight: 700, fill: C.ink })
  b.ctext(987, 374, '→ 超氧化物歧化酶', { size: 7.5, fill: C.sub })
  b.rect(1078, 336, 160, 44, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(1158, 356, 'COX17', { size: 10.5, weight: 700, fill: C.ink })
  b.ctext(1158, 374, '→ 细胞色素氧化酶', { size: 7.5, fill: C.sub })
  // 双泵卡片
  b.rect(726, 396, 250, 74, { fill: '#ffffff', stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(740, 418, 'ATP7A（P1B 型 Cu 泵）', { size: 10.5, weight: 700, fill: C.accD })
  b.text(740, 440, '平时：高尔基体装铜（酪氨酸酶等）', { size: 9, fill: C.sub })
  b.text(740, 462, '缺铜：迁至肠上皮基底侧→铜入血', { size: 9, fill: C.sub })
  b.rect(1000, 396, 250, 74, { fill: '#ffffff', stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(1014, 418, 'ATP7B（P1B 型 Cu 泵）', { size: 10.5, weight: 700, fill: C.proD })
  b.text(1014, 440, '平时：高尔基体装铜蛋白', { size: 9, fill: C.sub })
  b.text(1014, 462, '过量：迁至胆小管膜→铜入胆汁', { size: 9, fill: C.sub })
  // 右上注记
  b.wtext(960, 240, '成人体铜仅约 100 mg、日摄入 1–2 mg 即可维持平衡——需求之小与毒性之烈，都要求「零库存、全押运」的运行方式', { size: 9.5, fill: C.sub, maxW: 300, lh: 21 })
  b.wtext(960, 296, '镜像治疗：Wilson 用青霉胺螯合促铜经尿排出、或口服锌诱导肠 MT「扣下」膳食铜；Menkes 相反——绕过肠壁直接补铜', { size: 9.5, fill: C.sub, maxW: 380, lh: 21 })
  // 疾病双卡
  b.rect(726, 486, 250, 80, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 9 })
  b.text(740, 508, 'Menkes 综合征', { size: 10.5, weight: 700, fill: C.badD })
  b.wtext(740, 528, 'ATP7A 突变：铜出不了肠→全身进行性缺铜、头发卷曲易断、神经退行（约 1/10 万）', { size: 9, fill: C.sub, maxW: 222, lh: 19 })
  b.rect(1000, 486, 250, 80, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 9 })
  b.text(1014, 508, 'Wilson 病（肝豆状核变性）', { size: 10.5, weight: 700, fill: C.badD })
  b.wtext(1014, 528, 'ATP7B 突变：胆汁排铜阻断→肝·脑·角膜沉积，K-F 环是签名（约 1/3 万）', { size: 9, fill: C.sub, maxW: 222, lh: 19 })
  b.text(726, 580, '同一泵家族两个成员：一个守「出口入血」、一个守「出口入胆」——突变表型互补成一对教学经典', { size: 9, fill: C.mute })

  // ================= 三、植物的锌铜装备：同构而异名 =================
  b.panel(30, 600, 660, 385, { title: '三、植物的锌铜装备：ZIP·HMA·MTP 与 COPT' })
  b.wtext(46, 644, '阵容同构而异名：锌走 ZIP 吸收—HMA2/4 木质部装载—MTP1 液泡隔离；铜走 COPT 输入—HMA5/HMA6/HMA8 递送', { size: 10, fill: C.sub, maxW: 615, lh: 18 })
  b.text(46, 662, '土壤', { size: 9.5, fill: C.mute })
  b.ion(132, 680, 'Zn^{2+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 7 })
  b.arrow(132, 692, 132, 704, { stroke: C.acc, sw: 1.5, marker: 'acc' })
  b.ion(275, 680, 'Cu^{+}', { r: 10, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7 })
  b.arrow(275, 692, 275, 704, { stroke: C.dna, sw: 1.5, marker: 'dna' })
  b.bilayer(60, 730, 350)
  b.rect(100, 706, 64, 52, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 7 })
  b.ctext(132, 728, 'ZIP×15', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(132, 746, 'IRT3 等', { size: 7.5, fill: C.sub })
  b.rect(240, 706, 70, 52, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 7 })
  b.ctext(275, 728, 'COPT', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(275, 746, 'Cu^{+} 输入', { size: 7, fill: C.sub })
  b.text(46, 776, '根细胞（IRT1 亦兼收铁锌）', { size: 9.5, fill: C.mute })
  // 液泡（MTP1 隔离）
  b.circle(110, 822, 40, { fill: C.okL, stroke: C.ok, sw: 2 })
  b.ctext(110, 816, 'MTP1', { size: 9.5, weight: 700, fill: C.okD })
  b.ctext(110, 834, '液泡隔离锌', { size: 7.5, fill: C.sub })
  b.circle(92, 848, 4, { fill: C.ok })
  b.circle(128, 848, 4, { fill: C.ok })
  b.ctext(110, 878, '液泡', { size: 8.5, fill: C.okD })
  // HMA2/4 → 木质部
  b.rect(220, 766, 84, 44, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 7 })
  b.ctext(262, 784, 'HMA2/4', { size: 9.5, weight: 700, fill: C.enzD })
  b.ctext(262, 800, '锌装载', { size: 7.5, fill: C.sub })
  b.arrow(306, 788, 326, 788, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.rect(330, 756, 84, 120, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 16 })
  b.ctext(372, 786, '木质部', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(372, 802, '导管', { size: 8, fill: C.sub })
  b.ion(372, 830, 'Zn^{2+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 6.5 })
  b.arrow(372, 850, 372, 824, { stroke: C.acc, sw: 1.5, marker: 'acc' })
  b.ctext(372, 894, '向茎叶长途', { size: 8.5, fill: C.sub })
  b.wtext(46, 906, 'COPT 家族 6 成员分工：COPT1 主理根尖铜吸收；COPT5 居液泡膜「出库」，铜饥饿时重释再分配；HMA5 突变则铜困于根中、根尖生长受阻', { size: 9.5, fill: C.sub, maxW: 260, lh: 21 })
  // 右列：铜专线 + 超富集
  b.text(445, 668, '铜专线：叶绿体接力', { size: 11, weight: 700, fill: C.sub })
  b.chloro(560, 716, 150, 76)
  b.ctext(560, 776, 'HMA6/PAA1·内膜', { size: 8.5, fill: C.sub })
  b.ctext(560, 796, 'HMA8/PAA2·类囊体膜', { size: 8.5, fill: C.sub })
  b.ctext(560, 816, '→ 递给电子载体质体蓝素', { size: 8.5, fill: C.sub })
  b.rect(445, 840, 225, 118, { fill: '#ffffff', stroke: C.ok, sw: 1.5, rx: 9 })
  b.text(459, 860, '超富集三支柱', { size: 10.5, weight: 700, fill: C.okD })
  b.wtext(459, 880, 'A. halleri／遏蓝菜叶锌达普通植物百倍以上：高表达 HMA4（运得上）＋MTP1（存得住）＋ZIP（吸得进）', { size: 9.5, fill: C.sub, maxW: 198, lh: 20 })
  b.text(445, 972, '线粒体：Fe-S 簇装配产物经 ATM3 输出（上一章）', { size: 8.5, fill: C.mute })

  // ================= 四、ZIP 家族演化佳话 + 装备对照表 =================
  b.panel(710, 600, 660, 385, { title: '四、ZIP 家族演化佳话与装备对照' })
  b.wtext(726, 644, '金属输入模块的重复利用：ZIP 家族横跨动植物——在后生动物与绿色植物分化之前已存在，随后被两侧反复征用', { size: 10, fill: C.sub, maxW: 615, lh: 18 })
  b.ctext(1041, 660, '锌铜铁装备对照', { size: 14, weight: 700, fill: C.ink })
  b.table(726, 672, 630, {
    headers: ['元素', '动物输入', '动物输出', '植物输入', '植物输出／区室化'],
    colW: [44, 138, 140, 152, 156], rowH: 40, fontSize: 9,
    rows: [
      ['锌', 'ZIP／SLC39A（14 个）', 'ZnT／SLC30A（10 个）', 'ZIP 家族（约 15 个，IRT3 等）', 'HMA2/4 装载·MTP1 液泡'],
      ['铜', 'CTR1（SLC31A1）', 'ATP7A/B（P1B 型泵）', 'COPT 家族', 'HMA5·HMA6/PAA1·HMA8/PAA2'],
      ['铁', 'DMT1、Tf-TfR1', 'ferroportin', 'IRT1／YS1', 'FRO2 供二价铁（策略 I）'],
    ],
  })
  // 演化树
  b.rect(726, 850, 200, 56, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 9 })
  b.ctext(826, 872, 'ZIP 祖先模块', { size: 11, weight: 700, fill: C.dnaD })
  b.ctext(826, 892, '（后生动物与绿色植物分化前）', { size: 7.5, fill: C.sub })
  b.arrow(926, 864, 988, 864, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.arrow(926, 892, 988, 916, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.rect(994, 842, 170, 44, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 9 })
  b.ctext(1079, 866, '动物：ZIP4 收锌', { size: 9.5, weight: 700, fill: C.accD })
  b.rect(994, 894, 170, 44, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 9 })
  b.ctext(1079, 918, '植物：IRT1 收铁', { size: 9.5, weight: 700, fill: C.okD })
  b.wtext(1180, 858, '并行佳话：NRAMP 同样跨界，动物 DMT1、植物 NRAMP1 各担铁锰；P1B 泵（ATP7A/B 对 HMA，细菌 CopA/ZntA 为远祖）亦三界同谱', { size: 9, fill: C.sub, maxW: 180, lh: 20 })
  b.text(726, 962, '人类 ZIP4 与拟南芥 IRT1 是同一家族的远房表亲——跨界古老模块各自演化出医学与农学的重量级故事（第十二章续写）', { size: 9, fill: C.mute })
}

export default scene({
  title: '锌铜等微量元素：对掌的家族与共有的模块',
  subtitle: '动物锌由 ZIP/SLC39A（14 成员）输入、ZnT/SLC30A（10 成员）输出，金属硫蛋白把游离锌缓冲在皮摩尔级，ZIP4 肠缺陷致肢端皮炎性肠病；铜走 CTR1 输入＋伴侣蛋白押运＋ATP7A/B 输出——Menkes 缺铜与 Wilson 铜过载互为镜像；植物 ZIP 约 15 成员吸收、HMA2/4 木质部装载、MTP1 液泡隔离，COPT 家族与 HMA5/6/8 完成铜的叶绿体递送；ZIP 家族动植物共有——分化之前已存在，IRT1 是家族内「转岗」的产物',
  draw,
})
