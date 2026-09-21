// ne ch3-s3 动作电位 / Hodgkin-Huxley 模型（39-h 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、枪乌贼巨轴突 ============
  b.panel(30, 132, 700, 420, { title: '一、枪乌贼巨轴突：大自然送来的实验台' })
  b.rect(60, 176, 640, 52, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.4, rx: 8 })
  b.wtext(78, 196, '直径 0.5–1 mm、肉眼可见、可插入电极的神经纤维——本是枪乌贼喷水推进的高速信号线。', { size: 11.5, fill: C.accD, maxW: 610, lh: 15 })
  // 假说更替
  const hist: Array<[string, string]> = [
    ['1902', 'Bernstein 膜学说：兴奋时膜「崩塌」，电位向零坍塌——无法容纳超射'],
    ['1939', 'Hodgkin & Huxley 微电极刺入巨轴突：测得超射 +40 mV，旧说当场失效'],
    ['1949', '钠假说登场：兴奋时膜转为对 Na^{+} 通透，电位冲向 E_Na'],
    ['1947–52', '电压钳系列实验：把放电问题化为各钳位电压下的电流测量'],
  ]
  hist.forEach(([yr, s], i) => {
    const y = 246 + i * 34
    b.tag(96, y + 6, yr, { fill: C.panelB, stroke: C.line, size: 10.5, weight: 700, tfill: C.sub, pad: 7 })
    b.wtext(146, y + 10, s, { size: 11, fill: C.sub, maxW: 540, lh: 14 })
  })
  // 两条电流时间表
  b.axis(90, 500, 260, 100, {
    yticks: [[0.1, '0'], [0.9, '大']],
    xticks: [[0.08, '去极化钳位'], [0.9, '时间 →']],
  })
  b.curve(90, 500, 260, 100, [
    [0.08, 0.05], [0.12, 0.82], [0.2, 0.9], [0.35, 0.5], [0.5, 0.25], [0.7, 0.1], [0.9, 0.04],
  ], { stroke: C.bad, sw: 2.6, smooth: true })
  b.ctext(220, 384, 'I_Na：快起 · 自我失活', { size: 11.5, weight: 700, fill: C.bad })
  b.axis(400, 500, 250, 100, {
    yticks: [[0.1, '0'], [0.9, '大']],
    xticks: [[0.08, '去极化钳位'], [0.9, '时间 →']],
  })
  b.curve(400, 500, 250, 100, [
    [0.08, 0.02], [0.2, 0.1], [0.35, 0.3], [0.5, 0.55], [0.7, 0.72], [0.9, 0.78], [1.0, 0.8],
  ], { stroke: C.dna, sw: 2.6, smooth: true })
  b.ctext(525, 384, 'I_K：慢起 · 持续', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(385, 544, '胆碱置换（后用 TTX / TEA）分离两种电流——两张时间表暗含动作电位剧本', { size: 11, fill: C.sub })

  // ============ 二、门控变量 ============
  b.panel(740, 132, 630, 420, { title: '二、m、h、n：三个门控变量写成的方程' })
  b.rect(770, 178, 570, 62, { fill: C.bg, stroke: C.dna, sw: 1.6, rx: 9 })
  b.ctext(1055, 204, 'g_Na = g~{¯}_Na · m^{3}h　　g_K = g~{¯}_K · n^{4}', { size: 17, weight: 700, fill: C.ink })
  b.ctext(1055, 230, 'm 快激活 · h 慢失活 · n 慢（四次方对应四聚体）', { size: 10.5, fill: C.sub })
  b.table(770, 258, 570, {
    headers: ['门控变量', '所属电导', '动力学', '去极化稳态走向', '分子对应'],
    colW: [76, 86, 108, 128, 172],
    rowH: 42,
    fontSize: 12,
    rows: [
      ['m', 'g_Na', '快激活', '→ 1（开放）', '激活门：S4 外携'],
      ['h', 'g_Na', '慢失活', '→ 0（关闭）', 'IFM 球塞孔'],
      ['n', 'g_K', '慢 · 四次方', '→ 1（开放）', '四聚体的四个 S4'],
    ],
  })
  b.rect(770, 452, 570, 46, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.wtext(790, 476, '电压钳参数（枪乌贼巨轴突）：E_Na = +50 mV、E_K = −77 mV、E_l = −54.4 mV。', { size: 11.5, fill: C.sub, maxW: 534, lh: 15 })

  // ============ 三、数值重建 ============
  b.panel(30, 566, 1340, 412, { title: '三、数值重建：手摇计算机上的奇迹与模型遗产' })
  b.ctext(220, 626, '传导速度：模型 vs 实测', { size: 13, weight: 700, fill: C.ink })
  b.bars(110, 800, 230, 170, [18.7, 21], {
    labels: ['模型计算', '实测'],
    vlabels: ['18.7 m/s', '21 m/s'],
    fill: C.dnaL, stroke: C.dna, max: 25,
  })
  b.ctext(225, 856, '偏差约一成——波形、阈值、不应期一并重现', { size: 11, fill: C.sub })
  b.axis(470, 820, 350, 200, {
    xlabel: '时间（任意单位）',
    ylabel: '膜电位',
    xticks: [[0.05, ''], [0.5, ''], [0.95, '']],
    yticks: [[0.1, '静息'], [0.9, '峰值']],
  })
  b.curve(470, 820, 350, 200, [
    [0, 0.1], [0.15, 0.12], [0.22, 0.2], [0.3, 0.72], [0.36, 0.95], [0.45, 0.72],
    [0.55, 0.32], [0.65, 0.12], [0.75, 0.05], [0.9, 0.08], [1.0, 0.1],
  ], { stroke: C.dna, sw: 2.6, smooth: true })
  ;[[0.22, 0.2], [0.36, 0.95], [0.55, 0.32], [0.75, 0.05]].forEach(([fx, fy]) => {
    b.circle(470 + fx * 350, 820 - fy * 200, 4.5, { fill: C.bad })
  })
  b.legend(490, 610, [['模型（数值积分）', C.dna], ['实测散点', C.bad]], { size: 11, gap: 14 })
  b.ctext(645, 888, '重现：波形 · 阈值 · 不应期 · 传导速度', { size: 11.5, weight: 700, fill: C.sub })
  b.rect(900, 636, 440, 120, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.6, rx: 9 })
  b.text(920, 666, '1963 年诺贝尔生理学或医学奖', { size: 14.5, weight: 700, fill: '#065f46' })
  b.wtext(920, 690, 'Hodgkin、Huxley 与 Eccles 共享——表彰对神经细胞兴奋与抑制之离子机制的研究。', { size: 11.5, fill: C.sub, maxW: 405, lh: 16 })
  b.rect(900, 776, 440, 120, { fill: C.proL, fillOp: 0.4, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(920, 806, '模型的边界与遗产', { size: 14.5, weight: 700, fill: C.proD })
  b.wtext(920, 830, 'HH 是集中参数的唯象模型；遗产在于方法——现代多舱室模型与计算神经科学均以其为底座。', { size: 11.5, fill: C.sub, maxW: 405, lh: 16 })
}

export default scene({
  title: 'Hodgkin-Huxley 模型：电压钳、门控变量与手摇计算机上的奇迹',
  subtitle: '枪乌贼巨轴突直径 0.5–1 mm；1939 年测得超射 +40 mV 否定 Bernstein 膜学说，1949 年钠假说登场；胆碱置换（后用 TTX/TEA）分离出快失活的 I_Na 与持续延迟的 I_K；g_Na = g~{¯}_Na·m^{3}h、g_K = g~{¯}_K·n^{4}（E_Na = +50、E_K = −77、E_l = −54.4 mV）；数值积分重现波形与传导速度（计算约 18.7 m/s 对实测约 21 m/s），1963 年三人共获诺奖',
  draw,
})
