// sb ch3-s2 亲和层析原理：IMAC（Task 6-sb）
import { scene, C, B } from '../../lib'

/** 高斯峰路径（chromatogram 用） */
const gauss = (mu: number, sig: number, amp: number, base: number) => {
  const segs: string[] = []
  for (let x = mu - 3.2 * sig; x <= mu + 3.2 * sig; x += 3) {
    segs.push(`${x.toFixed(1)},${(base - amp * Math.exp(-((x - mu) ** 2) / (2 * sig * sig))).toFixed(1)}`)
  }
  return `M ${mu - 3.2 * sig},${base} L ${segs.join(' L ')} L ${mu + 3.2 * sig},${base} Z`
}

const draw = (b: B) => {
  // ============ 一、IMAC 配位原理 ============
  b.panel(30, 132, 700, 430, { title: '一、IMAC 配位原理：螯合金属的「余位」识别' })
  b.wtext(50, 178, 'IDA（次氮基三乙酸）占 3 个配位点，余 3 个空位招引咪唑——容量大、金属固着较松；Ni 容量高而通用，Co（Talon 类介质）配位更紧、容量略低、对宿主杂蛋白更挑剔，常用于二次纯化。', { maxW: 390, lh: 15, size: 11, fill: C.sub })
  // NTA 小图
  b.rect(460, 168, 220, 104, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(474, 188, 'NTA：四齿占位（余 2 空位）', { size: 11, weight: 700, fill: C.sub })
  for (let k = 0; k < 4; k++) b.line(480, 208 + k * 17, 545, 228 + k * 5, { stroke: C.dna, sw: 2 })
  b.circle(556, 236, 12, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
  b.ctext(556, 240, 'Ni', { size: 10.5, weight: 700, fill: '#78350f' })
  b.circle(576, 226, 5.5, { stroke: C.mute, sw: 1.4, dash: '3 3', fill: 'none' })
  b.circle(576, 246, 5.5, { stroke: C.mute, sw: 1.4, dash: '3 3', fill: 'none' })
  b.wtext(470, 288, '金属固着牢固、泄漏少；容量与结合力略降——同一蛋白常需更高咪唑才能洗脱。', { maxW: 195, lh: 13.5, size: 10, fill: C.mute })
  // 介质珠与螯合臂
  b.circle(150, 352, 62, { fill: C.panelB, stroke: C.sub, sw: 2.2 })
  for (let k = 0; k < 7; k++) {
    const a = 0.9 + k * 0.8
    b.circle(150 + 34 * Math.cos(a), 352 + 30 * Math.sin(a), 5, { fill: '#ffffff', stroke: C.faint, sw: 1.2 })
  }
  b.ctext(150, 432, '琼脂糖介质珠（共价偶联螯合配基）', { size: 10.5, fill: C.mute })
  b.line(204, 322, 316, 312, { stroke: C.dna, sw: 2.4 })
  b.line(212, 352, 311, 322, { stroke: C.dna, sw: 2.4 })
  b.line(204, 382, 316, 332, { stroke: C.dna, sw: 2.4 })
  b.ctext(258, 300, 'IDA 三齿', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ion(337, 322, 'Ni^{2+}', { r: 20, fill: C.warnL, stroke: C.warn, size: 12 })
  for (const a of [-0.7, 0, 0.7]) {
    b.circle(337 + 27 * Math.cos(a), 322 + 27 * Math.sin(a), 6, { stroke: C.mute, sw: 1.5, dash: '3 3', fill: 'none' })
  }
  // 蛋白与 His6 标签
  b.ellipse(565, 372, 62, 44, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(585, 376, '目的蛋白', { size: 12, weight: 700, fill: C.proD })
  for (let k = 0; k < 6; k++) b.circle(508 - k * 21, 344 - k * 2, 8, { fill: '#ffffff', stroke: C.enz, sw: 1.6 })
  b.ctext(455, 322, 'His_{6} 标签（咪唑基）', { size: 10.5, weight: 700, fill: C.enzD })
  b.line(395, 333, 358, 340, { stroke: C.enz, sw: 2.2, dash: '5 4' })
  b.ctext(376, 316, '补位配位', { size: 10, fill: C.enz })
  b.tag(360, 462, 'pH 低于 6：咪唑质子化（pKa 约 6）→ 失去配位——「低 pH 不结合」是第一条纪律', { fill: C.badL, stroke: C.bad, size: 10.5, tfill: C.badD, pad: 10 })
  b.wtext(50, 500, 'Porath 等 1975 年以 IDA 螯合铜锌首创「金属螯合亲和层析」；Hochuli 等 1987 年改用 NTA 配基并配合基因工程 His 标签，把它推上重组蛋白纯化的王座。缓冲液须维持 pH 不低于 7；偏酸或含弱螯合组分的缓冲液长时间运行时镍会逐渐剥落，洗脱组分必要时以丁二酮肟比色或 ICP-MS 核查。', { maxW: 640, lh: 15, size: 11, fill: C.sub })

  // ============ 二、咪唑梯度洗脱 ============
  b.panel(750, 132, 620, 430, { title: '二、咪唑梯度洗脱与操作流程' })
  b.axis(780, 330, 550, 150, {
    xlabel: '洗脱体积（柱体积 CV）', ylabel: 'A_{280}',
    xticks: [[0, '0'], [0.25, '5'], [0.5, '10'], [0.75, '15'], [1, '20']],
  })
  b.line(785, 322, 1325, 178, { stroke: C.warn, sw: 2, dash: '7 5' })
  b.text(790, 314, '20 mM', { size: 10, weight: 700, fill: C.warnD })
  b.circle(1215, 207, 4.5, { fill: C.warn })
  b.ctext(1215, 193, '250 mM（实例洗脱浓度）', { size: 10, weight: 700, fill: C.warnD })
  b.path(gauss(900, 22, 34, 326), { fill: '#e2e8f0', stroke: C.mute, sw: 1.8 })
  b.path(gauss(960, 18, 22, 326), { fill: '#e2e8f0', stroke: C.mute, sw: 1.8 })
  b.path(gauss(1215, 34, 108, 326), { fill: C.accL, stroke: C.acc, sw: 2.4 })
  b.ctext(930, 268, '弱结合杂蛋白', { size: 10.5, fill: C.mute })
  b.etext(1090, 230, '目标 His 融合蛋白', { size: 11.5, weight: 700, fill: C.accD })
  b.tag(860, 372, '① 平衡结合 10–40 mM', { fill: C.panelB, stroke: C.line, size: 11, tfill: C.ink, pad: 9 })
  b.tag(1075, 372, '② 洗涤 20–60 mM', { fill: C.panelB, stroke: C.line, size: 11, tfill: C.ink, pad: 9 })
  b.tag(1282, 372, '③ 梯度洗脱 150–500 mM', { fill: C.accL, stroke: C.acc, size: 11, tfill: C.accD, pad: 9 })
  b.tag(935, 404, '④ EDTA 20–50 mM 剥镍', { fill: C.panelB, stroke: C.line, size: 11, tfill: C.ink, pad: 9 })
  b.tag(1190, 404, '⑤ 硫酸镍 50–100 mM 重挂', { fill: C.panelB, stroke: C.line, size: 11, tfill: C.ink, pad: 9 })
  b.wtext(770, 436, '咪唑在 280 nm 有吸收，高浓度时监测基线上移——读峰须扣除参比。动态结合容量约 10–50 mg/mL，上样按容量七至八成；捕获按停留时间 1–4 分钟设定流速（1 mL 预装柱即 0.5–1 mL/min），宁可放慢换容量。', { maxW: 580, lh: 15, size: 11, fill: C.sub })
  b.wtext(770, 496, '典型案例：1 L BL21 培养物裂解得目的 His 融合蛋白 50–150 mg；5 mL 镍柱（标称 DBC 40 mg/mL，按八折分两轮上样）以 250 mM 咪唑洗脱，两小时收得 60–100 mg、SDS-PAGE 纯度 85–92%——「两小时九成纯」；再经离子交换与排阻精纯，全程收率约 50–60%。', { maxW: 580, lh: 15, size: 11, fill: C.sub })

  // ============ 三、其他亲和体系 ============
  b.panel(30, 578, 1340, 250, { title: '三、其他亲和体系：配基—洗脱对照' })
  b.table(50, 618, 1300, {
    headers: ['系统', '固定相配基', '洗脱方式', '特点'],
    colW: [150, 200, 320, 630],
    rowH: 40,
    fontSize: 12,
    rows: [
      ['GST 融合', '谷胱甘肽', '还原型谷胱甘肽 5–20 mM', '特异性洗脱；标签 26 kDa 且二聚'],
      ['MBP 融合', '直链淀粉', '麦芽糖 10 mM', '特异性洗脱；42 kDa 增溶标签'],
      ['Strep-tag II', '链霉亲和素变体', 'desthiobiotin 2.5 mM', '条件最温和，可用 HABA 再生'],
      ['Protein A/G', '重组 Protein A/G', '甘氨酸 pH 2.5–3.5', '抗体类别级捕获；须以 1 M Tris 快速中和'],
    ],
  })

  // ============ 四、洗脱方式两型与纯度天花板 ============
  b.panel(30, 844, 1340, 126, { title: '四、洗脱方式两型与纯度天花板' })
  b.tag(340, 878, '特异性洗脱＝游离配体竞争（温和、活性无忧）', { fill: C.okL, stroke: C.ok, size: 11, tfill: C.okD, pad: 10 })
  b.tag(1030, 878, '严苛洗脱＝pH／离子强度强制解离（低 pH 后立即中和）', { fill: C.warnL, stroke: C.warn, size: 11, tfill: C.warnD, pad: 10 })
  b.wtext(50, 906, '链霉亲和素—生物素解离常数低至 10^{-14}–10^{-15} M，改造为 desthiobiotin 可逆体系后兼得刚性亲和与温和洗脱。宿主杂蛋白 SlyD（约 25 kDa，富含组氨酸 C 端）与 GroEL（约 57 kDa 伴娘蛋白）常挂镍柱，须经离子交换与排阻清除；一步亲和可至 90% 以上纯度，标准流程再接酶切去标签、二次亲和负吸附、IEX 精纯与 SEC 终纯，推至电泳级 95% 以上。', { maxW: 1300, lh: 16, size: 11, fill: C.sub })
}

export default scene({
  title: '亲和层析原理：IMAC 螯合镍柱与 His_{6} 标签配位识别',
  subtitle: 'IDA 三齿／NTA 四齿螯合 Ni^{2+}，余位由咪唑基补位；咪唑 20–250 mM 梯度竞争洗脱（洗脱区间 150–500 mM，实例 250 mM）；GST、MBP、Strep、Protein A 各成体系',
  draw,
})
