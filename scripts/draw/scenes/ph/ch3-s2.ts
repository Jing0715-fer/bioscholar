// ph ch3-s2 酶联受体与第二信使网络：RTK-RAS-MAPK、JAK-STAT、NO-cGMP
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、RTK 自磷酸化与 RAS-MAPK 级联 ============
  b.panel(30, 132, 700, 450, { title: '一、RTK 自磷酸化与 RAS-MAPK 级联' })
  b.ctext(200, 188, '生长因子（EGF 等）', { size: 10.5, weight: 700, fill: C.enzD })
  b.polygon([[170, 195], [181, 205], [170, 215], [159, 205]], { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.polygon([[230, 195], [241, 205], [230, 215], [219, 205]], { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.bilayer(50, 260, 610, { h: 18 })
  b.text(56, 250, '胞外', { size: 9.5, fill: C.mute })
  b.text(56, 300, '胞内', { size: 9.5, fill: C.mute })
  b.rect(150, 225, 40, 95, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  b.rect(210, 225, 40, 95, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  for (const [px, py] of [[160, 332], [186, 342], [214, 342], [240, 332]] as [number, number][]) {
    b.circle(px, py, 8, { fill: C.enzL, stroke: C.enz, sw: 1.4 })
    b.ctext(px, py + 3, 'P', { size: 8.5, weight: 700, fill: C.enzD })
  }
  b.ctext(200, 368, '胞内段酪氨酸自磷酸化', { size: 11, weight: 700, fill: C.enzD })
  b.tag(200, 398, 'Grb2·SOS（SH2 登船）', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10.5, weight: 700, pad: 8 })
  b.arrow(200, 410, 160, 428, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.tag(130, 445, 'RAS·GTP', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 10 })
  b.arrow(167, 445, 192, 445, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.tag(220, 445, 'RAF', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 10 })
  b.arrow(245, 445, 270, 445, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.tag(298, 445, 'MEK', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 10 })
  b.arrow(323, 445, 348, 445, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.tag(376, 445, 'ERK', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 10 })
  b.arrow(401, 445, 486, 445, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.ellipse(575, 445, 95, 60, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.ctext(575, 428, '细胞核', { size: 12, weight: 700, fill: C.proD })
  b.wtext(505, 450, 'ERK 入核磷酸化 Elk-1、c-Fos → 启动细胞周期', { maxW: 140, lh: 14, size: 9.5, fill: C.proD })
  b.ctext(255, 475, '三级激酶级联（MAPKKK → MAPKK → MAPK）', { size: 10, weight: 700, fill: C.sub })
  b.wtext(50, 528, '约 60 个 RTK 几乎囊括全部促生长因子受体（EGFR、PDGFR、VEGFR、Trk、胰岛素受体）；磷酸酪氨酸如同公开的招聘启事，所有携带 SH2/PTB 结构域的分子（Grb2、Shc、PI3K、PLC-γ）循此登船', { maxW: 630, lh: 16.5, size: 10.5, fill: C.sub })
  b.wtext(50, 558, '临床分量：约三成人类肿瘤携带 RAS 突变——突变体失去 GTP 酶活性、永久处于「开」位（癌变版的霍乱毒素）；NF1 编码 RAS 的 GAP，其功能丢失同样令 RAS 失控', { maxW: 630, lh: 16.5, size: 10.5, fill: C.sub })

  // ============ 二、JAK-STAT 快车与 IRS-PI3K-AKT 轴 ============
  b.panel(750, 132, 620, 450, { title: '二、JAK-STAT 快车与 IRS-PI3K-AKT 轴' })
  b.ctext(955, 172, '细胞因子（GH、EPO、干扰素）', { size: 10.5, weight: 700, fill: C.enzD })
  b.polygon([[919, 182], [930, 192], [919, 202], [908, 192]], { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.polygon([[979, 182], [990, 192], [979, 202], [968, 192]], { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.bilayer(770, 228, 540, { h: 16 })
  b.rect(898, 212, 42, 62, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  b.rect(958, 212, 42, 62, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  b.rect(896, 280, 46, 22, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 4 })
  b.ctext(919, 294, 'JAK', { size: 9.5, weight: 700, fill: C.enzD })
  b.rect(956, 280, 46, 22, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 4 })
  b.ctext(979, 294, 'JAK', { size: 9.5, weight: 700, fill: C.enzD })
  b.arrow(944, 286, 954, 286, { stroke: C.enz, sw: 1.3, marker: 'enz' })
  b.arrow(954, 296, 944, 296, { stroke: C.enz, sw: 1.3, marker: 'enz' })
  b.tag(905, 340, 'STAT', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 8 })
  b.tag(1005, 340, 'STAT', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 8 })
  b.arrow(929, 333, 981, 333, { stroke: C.enz, sw: 1.4, marker: 'enz' })
  b.arrow(981, 347, 929, 347, { stroke: C.enz, sw: 1.4, marker: 'enz' })
  b.ctext(955, 322, 'JAK 磷酸化', { size: 10, weight: 700, fill: C.enzD })
  b.arrow(955, 353, 955, 371, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.tag(955, 384, 'STAT·P 二聚体', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10.5, weight: 700, pad: 8 })
  b.ellipse(1195, 320, 85, 58, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.ctext(1195, 305, '细胞核', { size: 11.5, weight: 700, fill: C.proD })
  b.wtext(1135, 325, 'GAS 元件 → 靶基因转录（IGF-1、红系增殖）', { maxW: 120, lh: 14, size: 9.5, fill: C.proD })
  b.arrow(1002, 382, 1112, 345, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.wtext(770, 420, '一跳直达：STAT 借「SH2 咬住对方磷酸酪氨酸」互锁成二聚体、暴露入核信号。负反馈：STAT 诱导的 SOCS 回头结合 JAK/受体促其降解——骨髓增殖性疾病的 JAK2 V617F「功能获得」突变即刹车失灵', { maxW: 560, lh: 16.5, size: 10.5, fill: C.sub })
  b.text(770, 470, '胰岛素受体（RTK 异类：α_{2}β_{2} 四聚体）→ IRS 平台', { size: 12, weight: 700, fill: C.ink })
  b.tag(815, 505, 'IRS·P', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10.5, weight: 700, pad: 10 })
  b.arrow(845, 505, 868, 505, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.tag(895, 505, 'PI3K', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10.5, weight: 700, pad: 10 })
  b.arrow(923, 505, 946, 505, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.tag(973, 505, 'PIP_{3}', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10.5, weight: 700, pad: 10 })
  b.arrow(1002, 505, 1025, 505, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.tag(1052, 505, 'AKT', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10.5, weight: 700, pad: 10 })
  b.wtext(770, 545, 'AKT 三管齐下：促 GLUT4 囊泡转位（葡萄糖进门）、抑制 GSK3 放开糖原合成、经 mTORC1 促蛋白合成——II 型糖尿病的胰岛素抵抗即此通路接力棒被逐一「弄湿」', { maxW: 560, lh: 16.5, size: 10.5, fill: C.sub })

  // ============ 三、NO-cGMP：气体信使与血管舒张 ============
  b.panel(30, 602, 700, 383, { title: '三、NO-cGMP：可扩散气体信使与血管舒张' })
  b.ctext(145, 645, '血流切应力', { size: 10, weight: 700, fill: C.badD })
  b.arrow(80, 655, 210, 655, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ion(300, 650, 'ACh', { r: 13, size: 9, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.text(320, 654, '副交感末梢释放', { size: 9.5, fill: C.mute })
  b.rect(283, 664, 34, 18, { fill: C.proL, stroke: C.pro, sw: 1.4, rx: 4 })
  b.ctext(300, 677, 'M_{3}', { size: 9, weight: 700, fill: C.proD })
  // 内皮细胞
  b.rect(50, 682, 290, 130, { fill: C.accL, stroke: C.acc, sw: 2.2, rx: 22 })
  b.ctext(180, 704, '内皮细胞', { size: 12.5, weight: 700, fill: C.accD })
  b.text(255, 704, 'Ca^{2+} ↑', { size: 10.5, weight: 700, fill: C.warnD })
  b.arrow(270, 710, 190, 726, { stroke: C.warn, sw: 1.4, marker: 'warn' })
  b.text(80, 722, 'Ca^{2+}·CaM', { size: 9.5, fill: C.sub })
  b.rect(80, 730, 100, 34, { fill: C.enzL, stroke: C.enz, sw: 2, rx: 7 })
  b.ctext(130, 751, 'eNOS', { size: 11, weight: 700, fill: C.enzD })
  b.text(80, 786, 'L-精氨酸 → NO', { size: 9.5, weight: 700, fill: C.enzD })
  b.arrow(182, 748, 216, 748, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.ion(230, 748, 'NO', { r: 12, size: 9, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.ctext(376, 712, 'NO 自由扩散', { size: 10, weight: 700, fill: C.okD })
  b.circle(355, 690, 4, { fill: C.ok })
  b.circle(400, 720, 4, { fill: C.ok })
  b.circle(370, 785, 4, { fill: C.ok })
  b.arrow(246, 748, 448, 748, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.arrow(246, 770, 350, 770, { stroke: C.ok, sw: 1.6, marker: 'ok' })
  // 平滑肌细胞
  b.rect(420, 682, 260, 130, { fill: '#d1fae5', stroke: C.ok, sw: 2.2, rx: 22 })
  b.ctext(550, 704, '平滑肌细胞', { size: 12.5, weight: 700, fill: C.okD })
  b.text(455, 722, 'GTP', { size: 9.5, fill: C.sub })
  b.rect(455, 730, 80, 34, { fill: C.proL, stroke: C.pro, sw: 2, rx: 7 })
  b.ctext(495, 751, 'sGC', { size: 11, weight: 700, fill: C.proD })
  b.ion(585, 748, 'cGMP', { r: 17, size: 9, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.arrow(537, 748, 566, 748, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.rect(612, 700, 56, 26, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 5 })
  b.ctext(640, 716, 'PKG', { size: 10, weight: 700, fill: C.rnaD })
  b.arrow(592, 730, 620, 723, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.arrow(640, 728, 615, 780, { stroke: C.rna, sw: 1.4, marker: 'rna' })
  b.text(440, 790, 'MLCP ↑ → 横桥减速', { size: 10.5, weight: 700, fill: C.okD })
  b.text(580, 790, '血管舒张', { size: 11, weight: 700, fill: C.okD })
  b.wtext(50, 836, '血流切应力或 ACh 使内皮 Ca^{2+} 升高 → Ca^{2+}-钙调蛋白激活 eNOS，以精氨酸为底物生成 NO——分子量仅 30 的气体自由基，不储存、不打包，合成后径直向四面八方扩散（半径约百微米、半衰期数秒，典型旁分泌信使）', { maxW: 630, lh: 16.5, size: 10.5, fill: C.sub })
  b.wtext(50, 872, 'NO 穿膜激活 sGC → cGMP → PKG → 增强肌球蛋白轻链磷酸酶（MLCP）→ 横桥循环减速 → 舒张。硝酸甘油在体内缓释 NO 治心绞痛；西地那非选择性抑制海绵体 PDE5、使 cGMP 少被降解——与硝酸酯合用会酿成危险的低血压（两条「加法」不能叠加）', { maxW: 630, lh: 16.5, size: 10.5, fill: C.sub })
  b.wtext(50, 922, '同一分子三副面孔：内皮（舒血管）、神经递质（胃肠道与呼吸道的硝基能神经）、免疫（巨噬细胞 iNOS 产大量 NO 杀伤病原体）——三位发现者共享 1998 年诺贝尔奖', { maxW: 630, lh: 16.5, size: 10.5, fill: C.sub })

  // ============ 四、第二信使脉冲与五大信使总表 ============
  b.panel(750, 602, 620, 383, { title: '四、第二信使的脉冲编码与五大信使总表' })
  b.arrow(790, 728, 790, 645, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(790, 728, 1180, 728, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(800, 655, '第二信使浓度', { size: 10.5, weight: 600, fill: C.sub })
  b.line(790, 688, 1180, 688, { stroke: C.bad, sw: 1, dash: '5 4' })
  b.etext(1176, 684, '阈', { size: 9.5, weight: 700, fill: C.badD })
  b.polyline([
    [792, 723], [815, 723], [822, 719], [828, 672], [836, 700], [844, 722], [860, 723], [870, 719],
    [875, 670], [883, 700], [891, 722], [905, 723], [913, 719], [917, 668], [924, 700], [931, 722],
    [943, 723], [949, 719], [952, 665], [958, 698], [964, 722], [975, 723], [980, 719], [982, 662],
    [988, 697], [994, 722], [1005, 723], [1009, 718], [1011, 660], [1016, 696], [1021, 722], [1030, 723],
  ], { stroke: C.dna, sw: 2.2 })
  b.text(935, 656, '钙振荡：频率编码配体浓度', { size: 10, weight: 700, fill: C.dnaD })
  b.wtext(1195, 665, 'AKAP 把 PKA 锚定在底物旁（信号体）；交叉对话：PKA 使 β_{2} 受体从 Gs 切到 Gi，Ca^{2+} 是全会合点', { maxW: 160, lh: 15, size: 9.5, fill: C.sub })
  b.ctext(985, 750, '时间（刺激频率递增 →）', { size: 11, weight: 600, fill: C.sub })
  b.table(770, 792, 580, {
    title: '五种第二信使总表',
    headers: ['第二信使', '生成环节', '主要效应器', '代表性功能', '主要清除'],
    colW: [80, 110, 120, 160, 110], rowH: 29, fontSize: 9.5,
    rows: [
      ['cAMP', 'Gs/Gi 调 AC', 'PKA、Epac', '糖原分解、心肌变力', 'PDE 水解'],
      ['cGMP', 'NO-sGC / pGC', 'PKG、CNG 通道', '血管舒张、光换能', 'PDE5/6'],
      ['IP_{3}', 'PLC-PIP_{2}', 'ER IP_{3}R', '钙释放、分泌', '脱磷酸'],
      ['DAG', 'PLC（留于膜内）', 'PKC', '增殖、分化、分泌', '脂酶代谢'],
      ['Ca^{2+}', '通道/IP_{3}R/RyR', 'CaM、TnC、PKC', '收缩、分泌、基因表达', 'SERCA/泵'],
    ],
  })
}

export default scene({
  title: '酶联受体与第二信使网络',
  subtitle: 'RTK 二聚化自磷酸化开出 SH2 码头，经 Grb2-SOS-RAS-RAF-MEK-ERK 送入细胞核；JAK-STAT 一跳直达；NO 自内皮扩散激活 sGC-cGMP-PKG 令血管舒张——五大第二信使以脉冲与振荡频率编码信息',
  draw,
})
