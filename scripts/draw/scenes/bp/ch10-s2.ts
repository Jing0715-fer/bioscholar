// bp ch10-s2 生物系统的信息处理：趋化、适应与感知极限
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、跑-翻滚随机游走（左上） ============
  b.panel(30, 132, 640, 420, { title: '一、有偏随机游走：跑（run）与翻滚（tumble）' })
  // 跑-翻滚轨迹
  b.path('M 80,250 L 220,250 L 220,180 L 420,180 L 420,290 L 560,290', { stroke: C.dna, sw: 3, marker: 'dna' })
  const turns: [number, number][] = [[220, 250], [220, 180], [420, 180], [420, 290]]
  turns.forEach(([x, y]) => b.circle(x, y, 6, { fill: C.warn, stroke: C.warn }))
  b.tag(90, 205, '跑 ≈1 s · 20 μm/s', { fill: C.dnaL, stroke: C.dna, size: 12.5, weight: 600, tfill: C.dnaD, pad: 8 })
  b.tag(350, 312, '翻滚（tumble）= 随机重定向', { fill: C.warnL, stroke: C.warn, size: 12.5, weight: 600, tfill: C.ink, pad: 8 })
  // 浓度梯度背景
  b.rect(30, 132, 640, 420, { fill: 'none', stroke: C.line, sw: 0 })
  b.wtext(70, 340, '引诱剂浓度梯度 ↑（时间比较而非空间比较：细菌仅 2 μm，太短无法测两端浓度差）', { size: 13, fill: C.sub, maxW: 560, lh: 20 })
  b.ctext(350, 405, '浓度上升 → 去甲基化 → CheA 活性↓ → 翻滚减少 → 长跑偏向高浓度', { size: 13.5, weight: 600, fill: C.dnaD })
  b.ctext(350, 435, '浓度下降 → 甲基化 → CheA 活性↑ → 翻滚增多 → 随机重试', { size: 13.5, weight: 600, fill: C.warn })

  // ============ 二、完美适应积分反馈（右上） ============
  b.panel(700, 132, 670, 420, { title: '二、完美适应：甲基化积分反馈（Barkai–Leibler 鲁棒性）' })
  // 信号流图
  b.tag(810, 210, '引诱剂浓度 c', { fill: C.accL, stroke: C.acc, size: 13, weight: 700, tfill: C.ink, pad: 9 })
  b.arrow(900, 210, 1010, 210, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.ctext(955, 195, '结合受体', { size: 12, fill: C.mute })
  b.tag(1090, 210, '受体活性 A', { fill: C.dnaL, stroke: C.dna, size: 13, weight: 700, tfill: C.dnaD, pad: 9 })
  b.arrow(1180, 210, 1280, 210, { stroke: C.dna, sw: 2.4, marker: 'dna' })
  b.ctext(1230, 195, 'CheA→翻滚率', { size: 12, fill: C.mute })
  // 反馈弧
  b.path('M 1090,240 Q 1090,330 950,330 Q 810,330 810,270', { stroke: C.rose === undefined ? C.bad : C.bad, sw: 2.4, dash: '7 5', marker: 'bad' })
  b.wtext(860, 370, '反馈：活性 A 驱动甲基化水平 m 变化（CheR 加 / CheB 减），m 是对信号的「积分」——稳态时 A 精确回到设定点', { size: 12.5, fill: C.sub, maxW: 560, lh: 19 })
  // 适应曲线
  b.axis(880, 500, 340, 130, {
    xlabel: '时间', ylabel: '活性 A',
    xticks: [[0, ''], [0.25, '加引诱剂'], [0.55, ''], [0.9, '']],
    yticks: [[0, '0'], [0.6, '设定点'], [1, '']],
    grid: true,
  })
  b.curve(880, 500, 340, 130, [[0, 0.6], [0.22, 0.6], [0.3, 0.92], [0.45, 0.75], [0.62, 0.62], [0.8, 0.6], [1, 0.6]], { stroke: C.dna, sw: 2.6, smooth: true })
  b.line(880, 500 - 0.6 * 130, 880 + 340, 500 - 0.6 * 130, { stroke: C.faint, sw: 1.4, dash: '6 5' })
  b.ctext(1050, 348, '完美适应：暂态响应后精确回归', { size: 12.5, weight: 700, fill: C.dnaD })

  // ============ 三、Berg–Purcell 极限（左下） ============
  b.panel(30, 570, 640, 400, { title: '三、Berg–Purcell 极限：扩散感知的物理下界' })
  b.wtext(70, 640, '(δc/c)² ≥ 1/(D·a·c·τ)', { size: 22, weight: 700, fill: C.ink })
  const rows: [string, string][] = [
    ['D', '分子扩散系数（引诱剂）'],
    ['a', '受体尺度（捕获半径）'],
    ['c', '平均浓度'],
    ['τ', '感知积分时间'],
  ]
  rows.forEach(([k, v], i) => {
    b.ctext(120 + (i % 2) * 320, 690 + Math.floor(i / 2) * 46, k, { size: 17, weight: 700, fill: C.accD })
    b.text(160 + (i % 2) * 320, 690 + Math.floor(i / 2) * 46, v, { size: 13, fill: C.sub })
  })
  b.wtext(70, 810, '物理含义：涨落使测量精度存在下界——浓度越高、时间越长、受体越大，相对误差越小。', { size: 13.5, fill: C.sub, maxW: 560, lh: 21 })
  b.wtext(70, 880, '大肠杆菌趋化与视杆细胞单光子响应都运行在物理极限数倍之内——生物感受器逼近量子与涨落设定的天花板。', { size: 13.5, weight: 600, fill: C.dnaD, maxW: 560, lh: 21 })

  // ============ 四、两分量信号机（右下） ============
  b.panel(700, 570, 670, 400, { title: '四、趋化网络的分子账本（两组分系统）' })
  b.tag(790, 640, 'MCP 受体', { fill: C.dnaL, stroke: C.dna, size: 12.5, weight: 700, tfill: C.dnaD, pad: 8 })
  b.tag(790, 680, 'CheW', { fill: '#f1f5f9', stroke: C.faint, size: 11.5, weight: 600, tfill: C.sub, pad: 6 })
  b.tag(790, 720, 'CheA 组氨酸激酶', { fill: C.proL, stroke: C.pro, size: 12.5, weight: 700, tfill: C.proD, pad: 8 })
  b.arrow(950, 680, 1040, 680, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.tag(1130, 680, 'CheY~P', { fill: C.proL, stroke: C.pro, size: 12.5, weight: 700, tfill: C.proD, pad: 8 })
  b.arrow(1210, 680, 1280, 680, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.ctext(1245, 662, '马达 CW', { size: 12, fill: C.mute })
  b.ctext(1245, 700, '→ 翻滚', { size: 12, fill: C.mute })
  b.arrow(1130, 710, 1040, 710, { stroke: C.mute, sw: 2, dash: '5 4', marker: 'mute' })
  b.tag(990, 710, 'CheZ 去磷酸化', { fill: '#f1f5f9', stroke: C.faint, size: 11.5, weight: 600, tfill: C.sub, pad: 6 })
  // 甲基化酶
  b.tag(950, 830, 'CheR（甲基化，活性↑）', { fill: C.okL, stroke: C.ok, size: 12, weight: 700, tfill: C.ink, pad: 8 })
  b.tag(1200, 830, 'CheB~P（去甲基化，活性↓）', { fill: '#fee2e2', stroke: C.bad, size: 12, weight: 700, tfill: C.bad, pad: 8 })
  b.arrow(950, 850, 850, 745, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.arrow(1200, 850, 850, 750, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.wtext(730, 930, '甲基化 m 的积分反馈实现完美适应——网络结构（而非参数微调）保证鲁棒性。', { size: 13, weight: 600, fill: C.sub, maxW: 600, lh: 20 })
}

export default scene({
  title: '生物系统的信息处理：趋化、完美适应与感知极限',
  subtitle: '跑-翻滚有偏随机游走 · 甲基化积分反馈（Barkai–Leibler）· Berg–Purcell 扩散噪声下界——感受器运行在物理极限附近',
  draw,
})
