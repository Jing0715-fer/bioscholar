// sb ch9-s2 玻璃化冷冻与载网制备（Task 6-sb）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、玻璃化原理 ============
  b.panel(30, 132, 660, 300, { title: '一、玻璃化：绕过冰晶的赛跑（Dubochet 1982）' })
  // 乙烷杯
  b.rect(120, 230, 200, 160, { fill: C.panelB, stroke: C.line, sw: 1.8, rx: 6 })
  b.rect(122, 262, 196, 126, { fill: C.accL, stroke: 'none', fillOpacity: 0.5 })
  b.ctext(220, 250, '液态乙烷浆料（约 90 K）', { size: 10.5, weight: 700, fill: C.accD })
  // 液氮外杯
  b.rect(90, 215, 260, 185, { fill: 'none', stroke: C.mute, sw: 1.6, rx: 6, dash: '6 4' })
  b.ctext(220, 412, '液氮浴（77 K）', { size: 10, fill: C.mute })
  // 载网下落
  b.circle(200, 190, 7, { fill: C.bad, stroke: 'none' })
  b.arrow(200, 200, 220, 258, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(178, 176, '载网夹持 plunge', { size: 10.5, weight: 700, fill: C.badD })
  // 速冷标注
  b.tag(420, 240, '冷却速率 10^{5}–10^{6} K/s', { fill: C.okL, stroke: C.ok, size: 11.5, weight: 700, tfill: C.okD, pad: 10 })
  b.wtext(400, 275, '薄液膜（小于 1 μm）两侧高效换热，水来不及成核即进入玻璃态——Tg 约 136 K。', { size: 10.5, fill: C.sub, maxW: 260, lh: 15 })
  b.wtext(400, 330, '液氮导热悖论：Leidenfrost 气膜使其冷却速率不足——必须用液态乙烷/丙烷作冷媒介质。', { size: 10.5, fill: C.sub, maxW: 260, lh: 15 })
  b.wtext(400, 385, '判别：玻璃冰呈非晶宽晕；六方冰在衍射图出现 3.67/1.92 Å 尖锐环——见第 9 章第 4 节质量评估。', { size: 10.5, fill: C.sub, maxW: 260, lh: 15 })

  // ============ 二、blotting 与环境控制 ============
  b.panel(710, 132, 660, 300, { title: '二、blotting：把冰厚拿捏在 30–100 nm' })
  // Vitrobot 装置示意
  b.rect(750, 175, 160, 210, { fill: C.panelB, stroke: C.line, sw: 1.8, rx: 10 })
  b.ctext(830, 195, '环境仓', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(762, 215, '湿度大于 90–100%', { size: 10.5, fill: C.sub })
  b.wtext(762, 235, '温度 4–20 °C 可控', { size: 10.5, fill: C.sub })
  // 滤纸对夹
  b.rect(770, 262, 120, 14, { fill: C.warnL, stroke: C.warn, sw: 1.5 })
  b.rect(770, 306, 120, 14, { fill: C.warnL, stroke: C.warn, sw: 1.5 })
  b.ctext(830, 294, '载网', { size: 10, fill: C.badD })
  b.tag(950, 262, '滤纸 blot 1–5 s', { fill: C.warnL, stroke: C.warn, size: 11, weight: 700, tfill: C.warnD, pad: 9 })
  b.wtext(920, 300, '单/双侧、滤纸型号共同决定吸水量；湿度防蒸发浓缩与盐析。', { size: 10.5, fill: C.sub, maxW: 220, lh: 15 })
  b.wtext(920, 356, '样品要求：浓度 0.5–5 mg/mL；缓冲液低盐（大于 500 mM 高背景）；甘油/DMSO 小于 2%（须透析去除）。', { size: 10.5, fill: C.sub, maxW: 220, lh: 15 })
  b.wtext(920, 410, 'Chameleon/Spotiton 免滤纸喷洒：纳升液滴直接喷向自吸干网格，亚毫秒 blot 极薄冰、定向分布改善。', { size: 10.5, fill: C.sub, maxW: 220, lh: 15 })

  // ============ 三、载网谱系 ============
  b.panel(30, 452, 660, 250, { title: '三、载网与支持膜谱系' })
  b.table(50, 492, 620, {
    headers: ['类型', '规格', '特点'],
    colW: [150, 190, 280],
    rowH: 40,
    fontSize: 11,
    rows: [
      ['铜网 200–400 mesh', '孔宽约 100 μm（200 mesh）', '便宜导热好，束致运动偏大'],
      ['金网', '同规格', '束致运动小（约 2× 数据质量收益）'],
      ['Quantifoil 多孔碳膜', 'R1.2/1.3：孔径 1.2 μm 间距 1.3 μm', '规整孔阵、冰悬于孔中'],
      ['UltrAuFoil 金箔', '约 25 nm 金膜', '界面友好、污染少'],
    ],
  })
  b.wtext(50, 672, '连续碳膜（约 10–20 nm）令颗粒吸附膜面——取向优势与 AWI 问题（第 9 章第 4 节）常随之而来。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、辉光放电 ============
  b.panel(710, 452, 660, 250, { title: '四、辉光放电：亲水化的最后一道工序' })
  b.wtext(730, 492, '空气等离子体处理（15–30 mA、30–60 s）清除有机污染物并使碳膜表面亲水带电——液滴得以均匀铺展而非成珠。戊胺气氛可调正电性、增强带负电蛋白的吸附。', { size: 10.5, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 560, '等离子清洗的时机也有讲究：放电后数小时内使用最佳，久置会重新疏水化——一张「过期」网格足以毁掉一个数据收集日。', { size: 10.5, fill: C.sub, maxW: 620, lh: 16 })
  b.ctext(1040, 660, '2017 年诺贝尔化学奖：Dubochet 的玻璃化 · Frank 的算法 · Henderson 的远见', { size: 11, weight: 600, fill: C.mute })

  // 底部收束
  b.ctext(700, 770, '玻璃化把「保持天然态」从愿望变成工艺——下一步：低剂量成像与数据收集（第 9 章第 3 节）', { size: 11.5, weight: 600, fill: C.mute })
}

export default scene({
  title: '玻璃化冷冻与载网制备：Dubochet 的诺贝尔工艺',
  subtitle: '液态乙烷约 90 K 速冷 10^{5}–10^{6} K/s 绕过冰晶成核（Tg 约 136 K）；blot 1–5 s 拿捏冰厚 30–100 nm；铜/金网与 Quantifoil R1.2/1.3 谱系；辉光放电 15–30 mA、30–60 s；浓度 0.5–5 mg/mL、低盐缓冲',
  draw,
})
