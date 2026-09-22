// em ch6-s3 plunge freezing 工作流（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、四要素工作流 ============
  b.panel(30, 132, 1340, 300, { title: '一、商品化装置四要素（Vitrobot / EM GP）' })
  const st = (x: number, t: string, lines: string[], fill: string, stroke: string, tfill: string) => {
    b.rect(x, 190, 280, 150, { fill, stroke, sw: 1.8, rx: 9 })
    b.ctext(x + 140, 216, t, { size: 14, weight: 700, fill: tfill })
    lines.forEach((s, i) => b.ctext(x + 140, 242 + i * 19, s, { size: 10.5, fill: C.sub }))
  }
  st(60, '① 环境仓', ['湿度保持 90–100%（近饱和）', '温度 4–20 °C 可控', '防蒸发致盐浓缩、颗粒聚集'], C.accL, C.acc, C.accD)
  st(390, '② 滤纸 blot', ['blot 时间典型 1–5 s（0.5 s 微调）', 'Vitrobot 双侧对夹 / EM GP 单侧点吸', '滤纸型号、压力与次数定残液量'], C.proL, C.pro, C.proD)
  st(720, '③ 快速 plunge', ['约 0.1–0.5 s 送入液态乙烷', '乙烷约 90 K（液氮预冷至熔点附近）', '速冷 10^{5}–10^{6} K/s → 玻璃化'], C.dnaL, C.dna, C.dnaD)
  st(1050, '④ 液氮转移储存', ['乙烷槽外套液氮杜瓦', '带屏蔽罩的转移盒全程 < 约 130 K', '防霜链路闭合，样品待用'], C.okL, C.ok, C.okD)
  b.arrow(343, 265, 386, 265, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.arrow(673, 265, 716, 265, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.arrow(1003, 265, 1046, 265, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.ctext(700, 382, '目标冰厚约 30–100 nm、颗粒单层悬浮：太厚多重散射衬度塌，太薄颗粒被挤向空气-水界面', { size: 11, weight: 600, fill: C.sub })
  b.ctext(700, 408, '湿度大于 90% 的物理必要性：近饱和水汽掐断蒸发链，液滴组成在进入乙烷前保持原样', { size: 10.5, fill: C.mute })

  // ============ 二、为什么是液态乙烷 ============
  b.panel(30, 456, 660, 280, { title: '二、为什么是液态乙烷（约 90 K）：Leidenfrost 的教训' })
  // 液氮杯（气膜）
  b.polygon([[70, 530], [230, 530], [215, 640], [85, 640]], { fill: '#e0f2fe', stroke: C.sub, sw: 2 })
  b.rect(135, 460, 30, 10, { fill: C.mute })
  b.line(150, 470, 150, 575, { stroke: C.sub, sw: 3 })
  for (let i = 0; i < 7; i++) {
    const rx = 128 + ((Math.sin(i * 91.7) * 4371.5) % 1 + 1) % 1 * 44
    const ry = 540 + i * 6
    b.circle(rx, ry, 3 + (i % 3), { fill: '#ffffff', stroke: C.faint, sw: 1 })
  }
  b.ctext(150, 664, '液氮（77 K）', { size: 12, weight: 700, fill: C.sub })
  b.ctext(150, 684, 'Leidenfrost 气膜绝热，热流被掐断', { size: 10.5, fill: C.bad })
  // 乙烷杯（液-液接触）
  b.polygon([[390, 530], [550, 530], [535, 640], [405, 640]], { fill: '#ccfbf1', stroke: C.sub, sw: 2 })
  b.rect(455, 460, 30, 10, { fill: C.mute })
  b.line(470, 470, 470, 575, { stroke: C.sub, sw: 3 })
  b.ctext(470, 664, '液态乙烷（约 90 K）', { size: 12, weight: 700, fill: C.dnaD })
  b.ctext(470, 684, '液-液接触无气膜，换热高约一个数量级', { size: 10.5, fill: C.dnaD })
  b.tag(470, 710, '速冷 10^{5}–10^{6} K/s，越过玻璃化门槛', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 9 })
  b.ctext(340, 734, '纯水玻璃化需 10^{6}–10^{7} K/s；溶质抗成核 + 薄膜小体积把门槛压到实测可及', { size: 10, fill: C.mute })

  // ============ 三、样品纪律与预处理清单 ============
  b.panel(710, 456, 660, 280, { title: '三、样品纪律与预处理清单（浓度 0.5–5 mg/mL）' })
  b.tag(940, 502, '缓冲液：Tris 冻融 pH 漂移 → 改用 HEPES', { fill: C.warnL, stroke: C.warn, size: 10.5, tfill: C.warnD, pad: 9 })
  b.table(730, 516, 620, {
    headers: ['样品情形', '主要风险', '预处理建议'],
    colW: [170, 190, 260], rowH: 32, fontSize: 11.5,
    rows: [
      ['高盐（> 500 mM）', '背景散射、盐晶', '脱盐柱换低盐缓冲液'],
      ['甘油 / DMSO ≥ 2%', '背景散射大增', '透析或脱盐柱去除'],
      ['去垢剂体系', '起泡与液膜失稳', '选温和去垢剂、控浓度'],
      ['浓度过低', '颗粒稀疏、空孔率高', '适度浓缩或亲和富集'],
      ['易氧化样品', '暴露窗口内损伤', '缩短冰龄、加 TCEP 类还原剂'],
    ],
  })

  // ============ 四、冰厚控制与免滤纸新装置 ============
  b.panel(30, 762, 1340, 216, { title: '四、冰厚控制的艺术与免滤纸新装置' })
  b.ctext(250, 802, '冰厚 vs blot 时间（示意）', { size: 12, weight: 700, fill: C.sub })
  b.axis(60, 950, 380, 140, {
    grid: false,
    xticks: [[0, '0'], [0.33, '2'], [0.67, '4'], [1, '6 s']],
    yticks: [[1, '300'], [0.33, '100'], [0, '0 nm']],
  })
  b.rect(60, 903, 380, 33, { fill: C.okL, fillOp: 0.55, stroke: C.ok, sw: 1, dash: '4 3' })
  b.ctext(250, 897, '甜点区 30–100 nm', { size: 10, weight: 600, fill: C.okD })
  b.curve(60, 950, 380, 140, [[0, 1], [0.1, 0.62], [0.2, 0.45], [0.33, 0.34], [0.5, 0.27], [0.67, 0.23], [0.83, 0.2], [1, 0.185]], { stroke: C.acc, sw: 2.6, smooth: true })
  b.text(500, 812, '新一代：喷洒-免滤纸（Spotiton / chameleon）', { size: 13, weight: 700, fill: C.ink })
  b.tag(620, 852, '纳升级液滴喷到自吸干载网', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(950, 852, '亚毫秒完成润湿到 plunge', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(620, 892, '冰龄：数百 ms → 数十 ms', { fill: C.dnaL, stroke: C.dna, size: 10.5, tfill: C.dnaD, pad: 9 })
  b.tag(950, 892, '冰更薄更均、聚集减少', { fill: C.dnaL, stroke: C.dna, size: 10.5, tfill: C.dnaD, pad: 9 })
  b.wtext(500, 932, 'blot-冰厚为指数逼近：前 1–2 s 吃掉大部分厚度，之后每加半秒只刮下十纳米上下——一味加长 blot 得不到更薄的冰，只买到更久的界面暴露。', { size: 10.5, fill: C.sub, maxW: 800, lh: 15 })
}

export default scene({
  title: 'plunge freezing：玻璃化冷冻的工作流',
  subtitle: '环境仓湿度 >90%（4–20 °C）→ 滤纸 blot 1–5 s → 约 0.1–0.5 s 浸入液态乙烷（约 90 K）速冷 10⁵–10⁶ K/s → 液氮储存 <130 K；样品浓度 0.5–5 mg/mL、目标冰厚 30–100 nm',
  draw,
})
