// bp ch10-s3 量子生物现象概述
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、FMO 量子节拍（左上） ============
  b.panel(30, 132, 660, 400, { title: '一、FMO 复合物：数百飞秒的量子节拍' })
  // 色素网络
  const sites: [number, number, string][] = [
    [130, 240, '1'], [230, 200, '2'], [320, 250, '3'], [200, 320, '4'],
    [330, 350, '5'], [430, 280, '6'], [540, 330, '7'], [580, 240, 'RC'],
  ]
  sites.forEach(([x, y, s]) => {
    b.circle(x, y, 22, { fill: C.okL, stroke: C.ok, sw: 2 })
    b.ctext(x, y + 5, s, { size: 13, weight: 700, fill: C.ink })
  })
  // 相干连线（虚线波浪示意）
  const links: [number, number, number, number][] = [
    [130, 240, 230, 200], [230, 200, 320, 250], [320, 250, 430, 280],
    [230, 200, 200, 320], [200, 320, 330, 350], [430, 280, 540, 330], [430, 280, 580, 240],
  ]
  links.forEach(([x1, y1, x2, y2]) => {
    b.line(x1, y1, x2, y2, { stroke: C.ok, sw: 1.8, dash: '5 4', opacity: 0.75 })
  })
  b.wtext(70, 190, '细菌光合天线 FMO：激发能以「量子节拍」在 7 个色素位点间震荡传递（2D 电子谱观测数百 fs 相干拍频）', { size: 13, fill: C.sub, maxW: 560, lh: 20 })
  b.wtext(70, 420, '争论点：生理温度下相干是「量子漫步导引」还是仅经典跳跃的表象？功能意义至今未有定论。', { size: 13.5, weight: 600, fill: C.warn, maxW: 570, lh: 21 })
  b.tag(120, 370, '低温 77K', { fill: '#f1f5f9', stroke: C.faint, size: 12, weight: 600, tfill: C.sub, pad: 7 })
  b.tag(260, 370, '相干时间数百 fs', { fill: C.okL, stroke: C.ok, size: 12, weight: 600, tfill: C.ink, pad: 7 })
  b.tag(430, 370, '→ 反应中心', { fill: C.dnaL, stroke: C.dna, size: 12, weight: 600, tfill: C.dnaD, pad: 7 })

  // ============ 二、鸟磁罗盘（右上） ============
  b.panel(720, 132, 650, 400, { title: '二、鸟磁罗盘：自由基对机制（cryptochrome 假说）' })
  // 地磁场与鸟
  b.path('M 760,220 L 1180,220', { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.ctext(970, 205, '地磁场 B ≈ 50 μT', { size: 12.5, weight: 600, fill: C.bad })
  // 光激发
  b.tag(800, 290, '蓝光', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.ink, pad: 7 })
  b.arrow(840, 290, 900, 290, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(960, 290, 'Cryptochrome（FAD）', { fill: C.proL, stroke: C.pro, size: 12.5, weight: 700, tfill: C.proD, pad: 8 })
  // 自由基对
  b.arrow(1090, 290, 1150, 290, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.tag(1240, 275, 'FAD•⁻', { fill: '#fee2e2', stroke: C.bad, size: 12.5, weight: 700, tfill: C.bad, pad: 7 })
  b.tag(1240, 315, 'Trp•⁺', { fill: '#fef3c7', stroke: C.warn, size: 12.5, weight: 700, tfill: '#78350f', pad: 7 })
  // 自旋态
  b.wtext(760, 380, '单重态 ⇌ 三重态：地磁场经超精细相互作用改变自旋演化速率→单/三重态化学产率随磁倾角变化', { size: 13, fill: C.sub, maxW: 560, lh: 20 })
  b.wtext(760, 460, '对蓝光依赖、射频磁场干扰（弱场射频可扰乱罗盘）与倾角感知（区分南北 vs 南北倒转）的实验证据共同指向自由基对假说。', { size: 13, weight: 600, fill: C.dnaD, maxW: 560, lh: 20 })

  // ============ 三、氢隧穿 KIE（左下） ============
  b.panel(30, 550, 660, 420, { title: '三、氢隧穿与动力学同位素效应' })
  // 能垒图
  b.axis(80, 880, 280, 200, { xlabel: '反应坐标', ylabel: '势能', grid: false })
  // 隧穿势垒：两条曲线 + 隧穿箭头
  b.curve(80, 880, 280, 200, [[0, 0.3], [0.25, 0.35], [0.5, 1.0], [0.75, 0.35], [1, 0.3]], { stroke: C.dna, sw: 3, smooth: true })
  b.curve(80, 880, 280, 200, [[0, 0.65], [0.25, 0.7], [0.5, 1.0], [0.75, 0.7], [1, 0.65]], { stroke: C.bad, sw: 3, smooth: true, dash: '8 5' })
  b.line(80 + 0.28 * 280, 880 - 0.32 * 200, 80 + 0.72 * 280, 880 - 0.32 * 200, { stroke: C.pro, sw: 2.4, marker: 'pro' })
  b.ctext(80 + 0.5 * 280, 880 - 0.42 * 200, 'H 隧穿', { size: 13, weight: 700, fill: C.proD })
  b.legend(400, 700, [['H（轻，隧穿强）', C.dna], ['D/T（重，隧穿弱）', C.bad]], { size: 12.5 })
  b.wtext(400, 760, 'KIE = k(H)/k(D)：经典过渡态理论上限 ≈ 7（零点能差）', { size: 13, fill: C.sub, maxW: 250, lh: 20 })
  b.wtext(400, 830, '酶促氢转移实测 3–10、极端 >80——超出经典解释，需量子隧穿+蛋白热振动「-promoting vibrations」辅助（Klinman 实验）。', { size: 13, weight: 600, fill: C.dnaD, maxW: 250, lh: 20 })

  // ============ 四、嗅觉振动理论（右下） ============
  b.panel(720, 550, 650, 420, { title: '四、嗅觉振动理论：可检验的量子假说' })
  b.wtext(760, 620, '经典锁钥模型：形状互补决定气味识别。', { size: 13.5, fill: C.sub, maxW: 560, lh: 20 })
  b.wtext(760, 665, '振动理论（Turin）：受体作为「非弹性电子隧穿谱仪」——电子隧穿跨越气味分子时释放的能量须匹配分子振动频率，指纹振动决定气味。', { size: 13.5, fill: C.sub, maxW: 560, lh: 20 })
  // 同位素实验
  b.tag(800, 750, 'H → D 同位素替换', { fill: C.accL, stroke: C.acc, size: 12.5, weight: 700, tfill: C.ink, pad: 8 })
  b.arrow(990, 750, 1060, 750, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.ctext(1170, 745, '振动频率变化', { size: 12.5, weight: 600, fill: C.ink })
  b.ctext(1170, 775, '形状几乎不变', { size: 12, fill: C.mute })
  b.wtext(760, 830, '判决实验：果蝇对気代气味分子的行为辨别（2011）；人类实验结果反复——假说至今存争议。', { size: 13, weight: 600, fill: C.warn, maxW: 560, lh: 20 })
  b.wtext(760, 900, '量子生物学的共同品格：可检验、可证伪——从光合、磁感、隧穿到嗅觉，皆以实验裁决而非神秘主义。', { size: 13.5, weight: 600, fill: C.dnaD, maxW: 560, lh: 20 })
}

export default scene({
  title: '量子生物现象概述：相干、隧穿与磁感',
  subtitle: 'FMO 飞秒量子节拍 · 隐花色素自由基对磁罗盘 · 氢隧穿大 KIE（3–10，极端 >80）· 嗅觉振动理论——可检验的量子假说',
  draw,
})
