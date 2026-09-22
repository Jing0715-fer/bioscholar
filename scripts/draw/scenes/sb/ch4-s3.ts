// sb ch4-s3 纯度与均一性的分析（Task SB-1）
import { scene, C, B } from '../../lib'

/** 高斯峰路径（色谱图用） */
const gauss = (mu: number, sig: number, amp: number, base: number) => {
  const segs: string[] = []
  for (let x = mu - 3.2 * sig; x <= mu + 3.2 * sig; x += 3) {
    segs.push(`${x.toFixed(1)},${(base - amp * Math.exp(-((x - mu) ** 2) / (2 * sig * sig))).toFixed(1)}`)
  }
  return `M ${mu - 3.2 * sig},${base} L ${segs.join(' L ')} L ${mu + 3.2 * sig},${base} Z`
}

const draw = (b: B) => {
  // ============ 一、SDS-PAGE：分子量的第一道关卡 ============
  b.panel(30, 132, 660, 430, { title: '一、SDS-PAGE：分子量的第一道关卡' })
  const lanes: { label: string; bands: [number, string][] }[] = [
    { label: 'Marker', bands: [[0.03, C.faint], [0.198, C.faint], [0.312, C.faint], [0.388, C.faint], [0.49, C.faint], [0.639, C.faint], [0.801, C.faint], [0.93, C.faint]] },
    { label: '裂解全样', bands: [[0.05, C.faint], [0.09, C.faint], [0.14, C.faint], [0.19, C.faint], [0.25, C.faint], [0.3, C.faint], [0.36, C.faint], [0.44, C.faint], [0.5, C.faint], [0.561, C.pro], [0.63, C.faint], [0.7, C.faint], [0.78, C.faint], [0.86, C.faint], [0.92, C.faint]] },
    { label: 'Ni 流穿', bands: [[0.05, C.faint], [0.09, C.faint], [0.14, C.faint], [0.19, C.faint], [0.25, C.faint], [0.3, C.faint], [0.36, C.faint], [0.44, C.faint], [0.5, C.faint], [0.63, C.faint], [0.7, C.faint], [0.78, C.faint], [0.86, C.faint], [0.92, C.faint]] },
    { label: '亲和洗脱', bands: [[0.377, C.faint], [0.49, '#e2e8f0'], [0.561, C.pro], [0.639, C.faint]] },
    { label: 'TEV 消化液', bands: [[0.561, '#e2e8f0'], [0.581, C.pro], [0.615, C.enz]] },
    { label: 'SEC 终纯', bands: [[0.581, C.pro]] },
  ]
  b.gel(100, 190, 540, 240, lanes, { size: 10 })
  const mw: [string, number][] = [['170', 0.03], ['100', 0.198], ['70', 0.312], ['55', 0.388], ['40', 0.49], ['25', 0.639], ['15', 0.801], ['10', 0.93]]
  b.etext(92, 208, 'kDa', { size: 9, fill: C.mute })
  for (const [lab, rf] of mw) b.etext(92, 219.5 + rf * 200, lab, { size: 9, fill: C.mute })
  b.text(646, 324, '目的蛋白', { size: 9.5, weight: 700, fill: C.proD })
  b.text(646, 338, '32 kDa', { size: 9.5, weight: 700, fill: C.proD })
  b.tag(165, 480, '考马斯 10–50 ng/条带', { fill: C.panelB, stroke: C.line, size: 10.5, tfill: C.ink, pad: 8 })
  b.tag(400, 480, '银染 1–10 ng（灵敏约一个量级）', { fill: C.enzL, stroke: C.enz, size: 10.5, tfill: C.enzD, pad: 8 })
  b.tag(620, 480, '上样 0.5–2 μg/孔', { fill: C.panelB, stroke: C.line, size: 10.5, tfill: C.ink, pad: 8 })
  b.wtext(50, 512, '10–12% 胶对 20–100 kDa 蛋白最优、4–20% 梯度胶一胶覆盖宽范围；还原与非还原两条胶对照可识别共价二聚；纯度以灰度扫描（整泳道积分）定量而非目测条带深浅，必要时以 western 印迹佐证条带身份，排除「分子量巧合」的杂带误判。', { maxW: 620, lh: 14, size: 10, fill: C.sub })

  // ============ 二、分析型 SEC 与 SEC-MALS ============
  b.panel(730, 132, 640, 430, { title: '二、分析型 SEC 与 SEC-MALS' })
  b.axis(800, 345, 515, 150, {
    title: 'Superdex 200 Increase 5/150（约 3 mL 柱床）',
    xlabel: '洗脱体积（mL）', ylabel: 'A_{280}',
    xticks: [[0, '0'], [0.25, '0.6'], [0.5, '1.2'], [0.75, '1.8'], [1, '2.4']],
    yticks: [[0, '0'], [0.5, ''], [1, '1']],
  })
  b.path(gauss(993, 20, 24, 343), { fill: '#e2e8f0', stroke: C.mute, sw: 1.8 })
  b.path(gauss(1122, 34, 118, 343), { fill: C.accL, stroke: C.acc, sw: 2.4 })
  b.ctext(993, 300, '聚合峰（空体积附近）', { size: 9.5, fill: C.mute })
  b.ctext(1122, 245, '主峰 · 表观 95 kDa', { size: 11, weight: 700, fill: C.accD })
  b.ctext(1040, 414, '表观 95 kDa 洗脱峰的两种 MALS 判读：', { size: 10.5, weight: 700, fill: C.ink })
  b.tag(900, 440, 'MALS 96 kDa：同源三体（单体 32 kDa）', { fill: C.okL, stroke: C.ok, size: 10.5, tfill: C.okD, pad: 8 })
  b.tag(1195, 440, 'MALS 64 kDa：二体加形状拉长', { fill: C.warnL, stroke: C.warn, size: 10.5, tfill: C.warnD, pad: 8 })
  b.wtext(746, 470, 'SEC 保留时间只给「表现分子量」，依赖标准曲线与形状假设；SEC-MALS 在柱后串联多角度激光光散射与折光检测器，散射强度与摩尔质量成正比，直接测定绝对分子量、误差约 3–5%，判别同源二聚或四聚、确认复合物化学计量。聚合体是结晶头号毒药——抢在单体之前充当异相成核中心。', { maxW: 600, lh: 14, size: 10, fill: C.sub })
  b.tag(905, 540, '上样 10–50 μg，不超过柱床 1%', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 7 })
  b.tag(1190, 540, '15 min 完成一轮快筛', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 7 })

  // ============ 三、DLS 分散性与质谱共价验证 ============
  b.panel(30, 578, 660, 372, { title: '三、DLS 分散性与质谱共价验证' })
  b.text(50, 622, 'DLS 由布朗运动相关时间提取流体力学半径 Rh 与粒径分布，以多分散性指数 PDI 判读（384 孔板 2–5 μL，温控 ±0.1 °C）：', { size: 10.5, fill: C.sub })
  b.rect(60, 638, 56, 26, { fill: C.okL, stroke: C.ok, sw: 1.6 })
  b.ctext(88, 655, '<0.1', { size: 10, weight: 700, fill: C.okD })
  b.rect(116, 638, 112, 26, { fill: C.warnL, stroke: C.warn, sw: 1.6 })
  b.ctext(172, 655, '0.1–0.3 可接受', { size: 10, weight: 700, fill: C.warnD })
  b.rect(228, 638, 392, 26, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.ctext(424, 655, '大于 0.3 显著异质', { size: 10, weight: 700, fill: C.badD })
  b.ctext(88, 688, '单分散优等', { size: 9.5, fill: C.okD })
  b.ctext(172, 688, '可接受', { size: 9.5, fill: C.warnD })
  b.ctext(424, 688, '痕量尘埃即可主导信号', { size: 9.5, fill: C.badD })
  b.tag(240, 716, '样品与比色皿须洁净：0.1 μm 过滤或高速离心除尘', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 7 })
  b.tag(548, 716, 'Rh 换算依赖形状模型，与 SEC-MALS 互为印证', { fill: C.dnaL, stroke: C.dna, size: 10, tfill: C.dnaD, pad: 7 })
  b.tag(340, 748, '同批样品稀释三个浓度复测，区分可逆聚集与不可逆聚合', { fill: C.accL, stroke: C.acc, size: 10, tfill: C.accD, pad: 7 })
  b.text(50, 786, '质谱补全共价信息（层析管「量」，质谱管「份」）：', { size: 10.5, weight: 700, fill: C.sub })
  b.tag(215, 812, '完整质量约 1 Da：验证切点与二硫键（每对 −2 Da）', { fill: C.proL, stroke: C.pro, size: 10, tfill: C.proD, pad: 7 })
  b.tag(523, 812, '肽图覆盖率大于 90% 确认无突变与截断', { fill: C.enzL, stroke: C.enz, size: 10, tfill: C.enzD, pad: 7 })
  b.tag(150, 844, 'Met 氧化 +16 Da', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 6 })
  b.tag(355, 844, 'N 端乙酰化 +42 Da', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 6 })
  b.tag(550, 844, '脱酰胺 +1 Da', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 6 })
  b.wtext(50, 878, 'cIEF 毛细管等电聚焦以约 0.1 pH 精度监控电荷异质性——脱酰胺（Asn 转 Asp）等老化修饰在谱上劈裂成多峰提示批次衰老；同一肽段的修饰与未修饰成对双峰提示样品是混合物，结晶中常表现为顽固微晶。', { maxW: 630, lh: 13.5, size: 10, fill: C.sub })
  b.wtext(50, 920, '质控的意义在行动而非存档：SDS-PAGE 出现 5–10% 降解带则回溯上一步收窄停留时间；SEC 聚合拖尾则下调浓缩上限或加 200 mM 精氨酸再试；PDI 由 0.15 恶化到 0.4 提示批次衰老，优先用掉。', { maxW: 630, lh: 13.5, size: 10, fill: C.mute })

  // ============ 四、质控方法对照与均一性四维 ============
  b.panel(730, 578, 640, 372, { title: '四、质控方法对照与均一性四维' })
  b.table(746, 616, 610, {
    headers: ['方法', '观测对象', '灵敏度或精度', '经验判据'],
    colW: [118, 150, 158, 184],
    rowH: 33,
    fontSize: 10,
    rows: [
      ['SDS-PAGE', '亚基分子量与纯度', '考马斯 10–50 ng', '纯度大于 95%'],
      ['分析型 SEC', '尺寸分布', '聚合体检出约 1%', '单体峰大于 95%'],
      ['SEC-MALS', '绝对摩尔质量', '误差约 3–5%', '寡聚化学计量明确'],
      ['DLS', '流体力学半径', 'PDI 精度约 0.01', 'PDI 小于 0.1'],
      ['完整质量 MS', '共价完整性', '约 1 Da', '切点与二硫键无误'],
      ['cIEF', '电荷异质性', 'pI 精度约 0.1 pH', '单一主峰'],
    ],
  })
  b.text(746, 886, '均一性四维：', { size: 10.5, weight: 700, fill: C.ink })
  b.tag(905, 886, '尺寸（SEC · DLS）', { fill: C.dnaL, stroke: C.dna, size: 10, tfill: C.dnaD, pad: 6 })
  b.tag(1062, 886, '共价（质谱 · 肽图）', { fill: C.proL, stroke: C.pro, size: 10, tfill: C.proD, pad: 6 })
  b.tag(1200, 886, '电荷（cIEF）', { fill: C.accL, stroke: C.acc, size: 10, tfill: C.accD, pad: 6 })
  b.tag(1308, 886, '构象（有限酶解）', { fill: C.rnaL, stroke: C.rna, size: 10, tfill: C.rnaD, pad: 6 })
  b.wtext(746, 916, '时间维：4 °C 存放一周后复测 SEC 与 DLS——入库时的优等生可能在筛选中期变质；任一维「差不多」都会在下游被放大成「做不出来」。', { maxW: 600, lh: 13, size: 9.8, fill: C.sub })
}

export default scene({
  title: '纯度与均一性的分析：从走胶到四维证据链',
  subtitle: '考马斯 10–50 ng、银染 1–10 ng，纯度大于 95% 放行；SEC 单体峰大于 95% 为门槛；SEC-MALS 误差约 3–5%；DLS 与质谱补全四维证据',
  draw,
})
