// cb ch5-s4 线粒体与细胞凋亡及线粒体疾病（39-d 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、线粒体：内在凋亡的调控中心 ============
  b.panel(30, 132, 660, 420, { title: '一、线粒体：内在（线粒体）凋亡途径的枢纽' })
  b.mito(350, 245, 250, 120, {})
  b.ctext(350, 250, '线粒体', { size: 13, weight: 700, fill: C.warn })
  b.circle(300, 230, 4, { fill: C.acc })
  b.circle(330, 215, 4, { fill: C.acc })
  b.circle(360, 225, 4, { fill: C.acc })
  b.circle(395, 218, 4, { fill: C.acc })
  // 左路：Bax/Bak → Cyt c → apoptosome → caspase
  b.rect(213, 233, 14, 30, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 3 })
  b.tag(150, 208, 'Bax/Bak 寡聚成孔', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: C.bad, pad: 6 })
  b.arrow(280, 262, 185, 300, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(258, 302, 'Cyt c 释放', { size: 9.5, weight: 700, fill: C.accD })
  b.circle(196, 306, 4.5, { fill: C.acc })
  b.circle(176, 318, 4.5, { fill: C.acc })
  b.arrow(185, 327, 160, 345, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.circle(150, 380, 36, { fill: C.enzL, stroke: C.enz, sw: 2.2 })
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2 - Math.PI / 2
    b.circle(150 + 24 * Math.cos(a), 380 + 24 * Math.sin(a), 5, { fill: C.enz, fillOp: 0.7 })
  }
  b.circle(150, 380, 10, { fill: C.bg, stroke: C.enz, sw: 1.6 })
  b.ctext(150, 438, '凋亡复合体（apoptosome）', { size: 11, weight: 700, fill: C.enzD })
  b.ctext(150, 456, 'Cyt c＋Apaf-1＋procaspase-9', { size: 9.5, fill: C.sub })
  b.arrow(150, 470, 150, 490, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.tag(150, 515, 'caspase 级联 → 凋亡', { fill: C.badL, stroke: C.bad, size: 11, weight: 700, tfill: C.bad, pad: 8 })
  // 右路：mPTP
  b.tag(555, 195, 'Ca²⁺ 超载', { fill: C.warnL, stroke: C.warn, size: 10, tfill: '#78350f', pad: 6 })
  b.tag(628, 195, '氧化应激', { fill: C.warnL, stroke: C.warn, size: 10, tfill: '#78350f', pad: 6 })
  b.arrow(540, 206, 488, 222, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.rect(468, 225, 16, 44, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 3 })
  b.ctext(476, 214, 'mPTP', { size: 10, weight: 700, fill: C.bad })
  b.text(494, 252, 'ANT·VDAC·亲环蛋白 D', { size: 9, fill: C.sub })
  b.wtext(505, 285, '开放 → 内膜失去选择性、Δψ 崩解、基质肿胀、外膜破裂', { size: 9.5, fill: C.sub, maxW: 168, lh: 13 })
  b.arrow(560, 315, 486, 272, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.ctext(545, 328, '抑制', { size: 9, weight: 700, fill: C.ok })
  b.tag(600, 330, '环孢素 A', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.ok, pad: 6 })
  b.wtext(505, 360, '环孢素 A 结合亲环蛋白 D 抑制其开放——缺血再灌注损伤（心肌梗死、脑卒中）保护研究的焦点。', { size: 9.5, fill: C.mute, maxW: 168, lh: 13 })
  b.wtext(255, 522, '嵴重构（OPA1 断裂）与动力学：分裂促进 Cyt c 释放、融合延缓凋亡。', { size: 10, fill: C.mute, maxW: 420, lh: 14 })

  // ============ 二、母系遗传与阈值效应 ============
  b.panel(710, 132, 660, 420, { title: '二、母系遗传与异质性阈值效应' })
  // 家系图
  b.circle(790, 215, 17, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.ctext(790, 258, '母（卵传递 mtDNA）', { size: 9.5, weight: 600, fill: C.bad })
  b.rect(862, 199, 32, 32, { fill: C.bg, stroke: C.sub, sw: 2 })
  b.ctext(878, 258, '父（不传递）', { size: 9.5, fill: C.sub })
  b.line(807, 215, 862, 215, { stroke: C.sub, sw: 1.8 })
  b.line(835, 215, 835, 285, { stroke: C.sub, sw: 1.8 })
  b.line(755, 285, 945, 285, { stroke: C.sub, sw: 1.8 })
  b.line(775, 285, 775, 303, { stroke: C.sub, sw: 1.8 })
  b.line(836, 285, 836, 303, { stroke: C.sub, sw: 1.8 })
  b.line(885, 285, 885, 303, { stroke: C.sub, sw: 1.8 })
  b.circle(775, 318, 15, { fill: C.bad, fillOp: 0.85 })
  b.rect(823, 303, 26, 26, { fill: C.bad, fillOp: 0.45 })
  b.circle(885, 318, 15, { fill: C.bad, fillOp: 0.15 })
  b.ctext(775, 350, '重', { size: 9.5, weight: 700, fill: C.bad })
  b.ctext(836, 350, '轻', { size: 9.5, weight: 700, fill: C.warn })
  b.ctext(885, 350, '正常', { size: 9.5, fill: C.mute })
  b.ctext(850, 380, '子代异质性（突变比例）不同 → 轻重悬殊', { size: 10, fill: C.mute })
  // 阈值曲线
  b.axis(1070, 420, 250, 200, {
    xlabel: '突变型 mtDNA 比例', ylabel: '表型严重度', title: '阈值效应',
    xticks: [[0, '0'], [0.5, '50%'], [1, '100%']], yticks: [[0, '轻'], [1, '重']],
  })
  b.curve(1070, 420, 250, 200, [[0, 0.04], [0.25, 0.08], [0.5, 0.14], [0.68, 0.25], [0.78, 0.55], [0.88, 0.85], [1, 0.97]], { stroke: C.bad, sw: 3, smooth: true })
  b.line(1245, 420, 1245, 222, { stroke: C.warn, sw: 1.8, dash: '5 4' })
  b.ctext(1245, 212, '阈值', { size: 10, weight: 700, fill: C.warn })
  b.wtext(740, 478, '多系统受累：能量需求高的脑、肌肉、眼、耳症状突出；mtDNA 与核基因突变均致呼吸链缺陷。', { size: 10.5, fill: C.sub, maxW: 380, lh: 14.5 })
  b.wtext(740, 522, '受累母亲可将突变传给所有子代、比例各异；父方完全不传递——严格的母系遗传。', { size: 10, fill: C.mute, maxW: 380, lh: 14 })

  // ============ 三、代表性疾病与诊断 ============
  b.panel(30, 566, 1340, 414, { title: '三、代表性线粒体病与诊断' })
  b.table(60, 620, 900, {
    headers: ['疾病', '主要突变', '特征表型'],
    colW: [190, 230, 480],
    rowH: 52,
    fontSize: 11,
    rows: [
      ['LHON', '复合体Ⅰ亚基（G11778A 等）', '青年男性急性双侧中央视力丧失'],
      ['MELAS', 'tRNA(Leu) A3243G', '线粒体脑肌病、乳酸酸中毒、卒中样发作'],
      ['MERRF', 'tRNA(Lys) A8344G', '肌阵挛性癫痫、破碎红纤维'],
      ['Kearns-Sayre', 'mtDNA 大片段缺失', '进行性眼外肌麻痹、视网膜色素变性、心脏传导阻滞'],
    ],
  })
  // 破碎红纤维示意
  b.circle(1170, 720, 55, { fill: '#ffedd5', stroke: C.sub, sw: 2 })
  for (let i = 0; i < 15; i++) {
    const a = (i / 15) * Math.PI * 2
    b.circle(1170 + 46 * Math.cos(a), 720 + 46 * Math.sin(a), 4.5, { fill: C.bad, fillOp: 0.7 })
  }
  b.ctext(1170, 720, '肌纤维', { size: 10.5, weight: 600, fill: C.sub })
  b.ctext(1170, 800, '破碎红纤维（Gomori 三色染色）', { size: 10.5, weight: 700, fill: C.bad })
  b.ctext(1170, 818, '肌膜下异常线粒体堆积', { size: 9, fill: C.mute })
  // 诊断依据
  b.text(60, 905, '诊断依据：', { size: 11.5, weight: 700, fill: C.sub })
  b.tag(150, 935, '血乳酸/丙酮酸比值', { fill: C.accL, stroke: C.acc, size: 10, tfill: C.accD, pad: 6 })
  b.tag(295, 935, '肌肉活检·破碎红纤维', { fill: C.badL, stroke: C.bad, size: 10, tfill: C.bad, pad: 6 })
  b.tag(455, 935, 'COX 缺失纤维', { fill: C.enzL, stroke: C.enz, size: 10, tfill: C.enzD, pad: 6 })
  b.tag(570, 935, '呼吸链酶活性测定', { fill: C.dnaL, stroke: C.dna, size: 10, tfill: C.dnaD, pad: 6 })
  b.tag(715, 935, 'mtDNA 测序', { fill: C.proL, stroke: C.pro, size: 10, tfill: C.proD, pad: 6 })
  b.text(60, 972, '线粒体功能下降还参与 2 型糖尿病、老化与神经退行性疾病（帕金森病：PINK1-Parkin 介导的线粒体自噬缺陷）。', { size: 10, fill: C.mute })
}

export default scene({
  title: '线粒体与细胞凋亡及线粒体疾病',
  subtitle: 'mPTP（ANT·VDAC·亲环蛋白 D）开放致 Δψ 崩解与基质肿胀、环孢素 A 抑制；Bax/Bak 成孔释放 Cyt c 组装凋亡复合体启动 caspase 级联；LHON/MELAS/MERRF/KSS 呈母系遗传、多系统受累、异质性阈值效应与破碎红纤维',
  draw,
})
