// ph ch12-s4 生殖与妊娠：月经周期激素曲线、hCG 黄体救援、分娩与泌乳
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、月经周期激素曲线 ============
  b.panel(30, 132, 660, 428, { title: '一、月经周期激素曲线：反馈方向的两次翻转' })
  b.legend(130, 185, [['FSH', C.acc], ['LH', C.bad], ['雌二醇 E_{2}', C.enz], ['孕酮', C.warn]])
  b.axis(112, 470, 508, 270, {
    ylabel: '激素水平',
    yticks: [[0.04, '低'], [0.96, '高']],
    xticks: [[0, '0'], [0.25, '7'], [0.75, '21'], [1, '28 天']],
  })
  b.curve(112, 470, 508, 270, [[0, 0.42], [0.08, 0.34], [0.2, 0.3], [0.35, 0.32], [0.44, 0.45], [0.48, 0.52], [0.53, 0.3], [0.7, 0.22], [0.85, 0.2], [1, 0.32]], { smooth: true, stroke: C.acc, sw: 2.4 })
  b.curve(112, 470, 508, 270, [[0, 0.26], [0.15, 0.16], [0.35, 0.18], [0.43, 0.24], [0.475, 0.4], [0.485, 0.88], [0.5, 0.45], [0.53, 0.18], [0.7, 0.13], [0.85, 0.12], [1, 0.22]], { smooth: true, stroke: C.bad, sw: 2.6 })
  b.curve(112, 470, 508, 270, [[0, 0.1], [0.12, 0.11], [0.25, 0.16], [0.35, 0.26], [0.43, 0.44], [0.475, 0.58], [0.51, 0.33], [0.58, 0.32], [0.7, 0.42], [0.82, 0.46], [0.92, 0.3], [1, 0.06]], { smooth: true, stroke: C.enz, sw: 2.4 })
  b.curve(112, 470, 508, 270, [[0, 0.05], [0.4, 0.04], [0.48, 0.1], [0.58, 0.38], [0.68, 0.62], [0.75, 0.72], [0.85, 0.58], [0.93, 0.25], [1, 0.04]], { smooth: true, stroke: C.warn, sw: 2.6 })
  b.line(358.4, 236, 358.4, 494, { stroke: C.bad, sw: 1.4, dash: '5 4' })
  b.ctext(353, 212, 'LH 峰', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(430, 212, '排卵于峰后约 36 h', { size: 9.5, fill: C.mute })
  b.ctext(282, 246, '第一次翻转：雌二醇越阈值', { size: 9.5, weight: 700, fill: C.enz })
  b.ctext(282, 264, '（约 200 pg/ml 持续 48 h）', { size: 9, fill: C.mute })
  b.ctext(505, 250, '第二次翻转：黄体期强负反馈', { size: 9.5, weight: 700, fill: C.warn })
  b.ctext(505, 268, '孕酮+E_{2} 压制 GnRH 脉冲', { size: 9, fill: C.mute })
  b.rect(112, 496, 90, 26, { fill: C.badL, stroke: C.bad, sw: 1.4, rx: 5 })
  b.ctext(157, 513, '月经期', { size: 10, weight: 700, fill: C.badD })
  b.rect(202, 496, 145, 26, { fill: C.enzL, stroke: C.enz, sw: 1.4, rx: 5 })
  b.ctext(274, 513, '增殖期（E_{2}）', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(365, 513, '排卵', { size: 9.5, weight: 700, fill: C.bad })
  b.rect(384, 496, 236, 26, { fill: C.warnL, stroke: C.warn, sw: 1.4, rx: 5 })
  b.ctext(502, 513, '分泌期（P+E_{2}）', { size: 10, weight: 700, fill: C.warnD })
  b.wtext(50, 546, '黄体功能性寿命固定约 14 天（月度差在卵泡期）；月经期 = 激素撤退 → 螺旋动脉痉挛 → 内膜崩解，FSH 回升唤醒下一批卵泡。', { size: 10, fill: C.sub, maxW: 620, lh: 18 })

  // ============ 二、卵巢–子宫内膜双人舞 ============
  b.panel(710, 132, 660, 428, { title: '二、卵巢–子宫内膜双人舞（28 天周期）' })
  b.table(722, 190, 636, {
    headers: ['阶段（天）', '卵巢事件', '激素主导', '子宫内膜'],
    colW: [96, 150, 120, 270],
    rowH: 52,
    fontSize: 11,
    rows: [
      ['月经期 1–5', '黄体退缩', '全线低谷', '螺旋动脉痉挛、崩解脱落'],
      ['增殖期 6–13', '优势卵泡崛起', '雌二醇', '腺体与间质再生长'],
      ['排卵 ≈14', 'LH 峰', 'E_{2} 翻转正反馈', '—（宫颈黏液拉丝）'],
      ['分泌期 15–28', '黄体形成', '孕酮+雌二醇', '腺体迂曲分泌糖原、着床窗开启'],
    ],
  })
  b.ctext(925, 456, '双细胞双促性腺激素理论', { size: 11, weight: 700, fill: C.pro })
  b.rect(722, 466, 150, 42, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 7 })
  b.ctext(797, 484, '卵泡膜细胞', { size: 11, weight: 700, fill: C.enzD })
  b.ctext(797, 500, 'LH → 雄激素', { size: 9.5, fill: C.sub })
  b.arrow(874, 487, 902, 487, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(904, 466, 160, 42, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 7 })
  b.ctext(984, 484, '颗粒细胞', { size: 11, weight: 700, fill: C.accD })
  b.ctext(984, 500, 'FSH → 芳香化酶', { size: 9.5, fill: C.sub })
  b.arrow(1066, 487, 1094, 487, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(1096, 466, 150, 42, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 7 })
  b.ctext(1171, 484, '雌二醇攀升', { size: 11, weight: 700, fill: C.proD })
  b.ctext(1171, 500, '优势卵泡自催化', { size: 9.5, fill: C.sub })
  b.wtext(722, 528, '雌二醇越高→FSH 受体与芳香化酶越多→雌二醇更高：优势卵泡跑赢同伴，并用抑制素 B 压低 FSH 饿死竞争者。', { size: 10, fill: C.sub, maxW: 620, lh: 18 })
  b.wtext(722, 552, '临床排卵判定：尿 LH 试纸（峰后约 36 h）·基础体温双相（孕酮升温 0.3–0.5 ℃）·排卵痛与宫颈黏液拉丝', { size: 10, fill: C.sub, maxW: 620, lh: 18 })

  // ============ 三、hCG 黄体救援与胎盘内分泌 ============
  b.panel(30, 572, 660, 413, { title: '三、hCG 黄体救援与胎盘内分泌' })
  b.timelineH(70, 676, 560, [
    { at: 0.06, label: '受精', sub: '卵仅 12–24 h 可受精', above: true, c: C.dna },
    { at: 0.2, label: '着床 5–6 天', sub: '着床窗第 20–24 天', above: false, c: C.acc },
    { at: 0.35, label: 'hCG 可测 8–10 天', sub: '妊娠试验靶标', above: true, c: C.pro },
    { at: 0.52, label: '黄体 14 天大限', sub: '未孕即退缩', above: false, c: C.warn },
    { at: 0.72, label: 'hCG 救援黄体', sub: '维持孕酮至 8–10 周', above: true, c: C.bad },
    { at: 0.93, label: '胎盘接管孕酮', sub: '黄体-胎盘移交', above: false, c: C.ok },
  ])
  b.wtext(50, 786, 'hCG 与 LH 共享 α 亚基并具 LH 样活性——以「每月一次 LH 峰」的力度救援黄体，使孕酮跨越 14 天大限维持至妊娠 8–10 周；受精后 8–10 天即入血可测，妊娠试验测的都是它。', { size: 11, fill: C.sub, maxW: 620, lh: 18 })
  b.text(50, 838, '胎盘内分泌与「胎儿-胎盘单位」', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(50, 852, 195, 72, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(147, 870, '孕酮', { size: 11.5, weight: 700, fill: C.proD })
  b.ctext(147, 888, '8–10 周起胎盘自产', { size: 9.5, fill: C.sub })
  b.ctext(147, 906, '（黄体-胎盘移交）', { size: 9.5, fill: C.sub })
  b.rect(255, 852, 195, 72, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(352, 870, 'hPL', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(352, 888, '胎盘催乳素·胰岛素拮抗', { size: 9.5, fill: C.sub })
  b.ctext(352, 906, '（妊娠糖尿病倾向）', { size: 9.5, fill: C.sub })
  b.rect(460, 852, 200, 72, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 8 })
  b.ctext(560, 870, '雌三醇', { size: 11.5, weight: 700, fill: C.enzD })
  b.ctext(560, 888, '联合胎儿 DHEA-S 合成', { size: 9.5, fill: C.sub })
  b.ctext(560, 906, '「胎儿-胎盘单位」产物', { size: 9.5, fill: C.sub })
  b.wtext(50, 950, '受精要点：获能使精子超活化；ZP3 诱导顶体反应释水解酶开路；卵内 Ca^{2+} 振荡触发皮质颗粒胞吐——透明带反应挡死多精受精。', { size: 10, fill: C.sub, maxW: 620, lh: 18 })

  // ============ 四、分娩发动正反馈环与泌乳 ============
  b.panel(710, 572, 660, 413, { title: '四、分娩发动的正反馈环与泌乳' })
  b.text(730, 616, '启动权在胎儿：皮质醇对下丘脑负反馈、对胎盘却是正反馈', { size: 10, weight: 700, fill: C.sub })
  b.rect(740, 628, 280, 38, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 7 })
  b.ctext(880, 652, '胎儿 HPA 轴成熟·皮质醇↑', { size: 11, weight: 700, fill: C.ink })
  b.arrow(880, 666, 880, 680, { stroke: C.sub, sw: 2 })
  b.rect(740, 682, 280, 38, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 7 })
  b.ctext(880, 706, '胎盘 CRH 表达↑（自增益环路）', { size: 11, weight: 700, fill: C.ink })
  b.arrow(880, 720, 880, 734, { stroke: C.sub, sw: 2 })
  b.rect(740, 736, 280, 38, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 7 })
  b.ctext(880, 760, '缩宫素受体↑·Cx43·PG 合成酶', { size: 11, weight: 700, fill: C.enzD })
  b.arrow(880, 774, 880, 788, { stroke: C.sub, sw: 2 })
  b.rect(740, 790, 280, 38, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 7 })
  b.ctext(880, 814, '宫缩↑ → 宫颈扩张', { size: 11, weight: 700, fill: C.badD })
  b.arrow(880, 828, 880, 842, { stroke: C.sub, sw: 2 })
  b.rect(740, 844, 280, 38, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 7 })
  b.ctext(880, 868, 'Ferguson 反射 → 缩宫素释放↑', { size: 11, weight: 700, fill: C.badD })
  b.path('M740,863 L720,863 L720,809 L734,809', { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(770, 838, '正反馈', { size: 9.5, weight: 700, fill: C.bad })
  b.path('M1020,699 L1032,699 L1032,647 L1026,647', { stroke: C.mute, sw: 1.8, dash: '5 4', marker: 'mute' })
  b.wtext(730, 900, '缩宫素与前列腺素的产科应用（引产与促宫颈成熟）即此机制的工程化；人类无孕酮的全身性撤退，而是向雌激素的功能性撤退。', { size: 9.5, fill: C.sub, maxW: 300, lh: 18 })
  b.tag(880, 948, '自我放大的力学正反馈环', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10.5, weight: 700, pad: 12 })
  b.text(1050, 616, '泌乳：生成与射乳两个环节', { size: 11, weight: 700, fill: C.ink })
  b.rect(1050, 632, 300, 56, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 7 })
  b.ctext(1200, 652, '催乳素 PRL：乳汁生成', { size: 11, weight: 700, fill: C.accD })
  b.ctext(1200, 670, '孕期被孕酮封锁·胎盘娩出即解锁', { size: 9.5, fill: C.sub })
  b.arrow(1200, 688, 1200, 702, { stroke: C.sub, sw: 2 })
  b.rect(1050, 704, 300, 56, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 7 })
  b.ctext(1200, 724, '射乳反射（神经内分泌）', { size: 11, weight: 700, fill: C.enzD })
  b.ctext(1200, 742, '吮吸 → 脊髓上传 → 下丘脑', { size: 9.5, fill: C.sub })
  b.arrow(1200, 760, 1200, 774, { stroke: C.sub, sw: 2 })
  b.rect(1050, 776, 300, 56, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 7 })
  b.ctext(1200, 796, '缩宫素 → 肌上皮收缩', { size: 11, weight: 700, fill: C.badD })
  b.ctext(1200, 814, '乳汁挤入导管射出', { size: 9.5, fill: C.sub })
  b.wtext(1050, 852, '吮吸维持催乳素并抑制 GnRH 脉冲——哺乳期闭经；紧张焦虑抑制缩宫素释放可致排乳困难，婴儿啼哭可条件反射性「漏奶」。', { size: 9.5, fill: C.sub, maxW: 300, lh: 18 })
  b.tag(1200, 906, '初乳富集分泌型 IgA', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10, weight: 700, pad: 10 })
  b.text(1050, 940, '青春期雌二醇铺导管、孕酮发育腺泡；妊娠期完成终末装配', { size: 9.5, fill: C.sub })
}

export default scene({
  title: '生殖与妊娠：月经周期、黄体救援、分娩与泌乳',
  subtitle: '雌二醇持续越过约 200 pg/ml 达 48 h 把负反馈翻转为正反馈引爆 LH 峰，排卵发生于峰起始后约 36 小时；黄体功能性寿命固定约 14 天，hCG 救援孕酮至妊娠 8–10 周由胎盘接管',
  draw,
})
