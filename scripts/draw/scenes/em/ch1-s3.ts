// em ch1-s3 生物电子显微学里程碑（6-em）
import { scene, C, B, textW } from '../../lib'

const draw = (b: B) => {
  // ============ 一、里程碑时间线 ============
  b.panel(30, 132, 1340, 330, { title: '一、生物电镜里程碑时间线（1939—2020）' })
  b.timelineH(110, 310, 1160, [
    { at: 0, label: '1939 考舍等', sub: '首张病毒电镜照片（TMV）', above: true, c: C.acc },
    { at: 0.125, label: '1955–1959 负染色', sub: '霍尔；布伦纳与霍恩', c: C.dna },
    { at: 0.25, label: '1974 泰勒与格拉泽', sub: '冷冻晶体电子衍射', above: true, c: C.acc },
    { at: 0.375, label: '1975 亨德森与昂温', sub: '紫膜二维晶体 7 Å', c: C.pro },
    { at: 0.5, label: '1982 杜博歇', sub: 'plunge-freezing 玻璃化', above: true, c: C.dna },
    { at: 0.625, label: '2013 廖等', sub: '直接探测：TRPV1 3.4 Å', c: C.bad },
    { at: 0.75, label: '2017 诺贝尔化学奖', sub: '杜博歇、弗兰克、亨德森', above: true, c: C.warn },
    { at: 0.875, label: '2020 前后', sub: 'apoferritin 1.2 Å', c: C.bad },
  ])
  b.ctext(700, 424, '同期细胞线：1945 年波特首见内质网；帕拉德解析线粒体嵴与核糖体；克劳德、德迪夫、帕拉德共享 1974 年诺贝尔生理学或医学奖', { size: 10.5, fill: C.sub })
  b.ctext(700, 446, '每约十年一次制样或探测的范式更替：负染色（1950s）→ 低温（1974）→ 玻璃化（1982）→ 直接探测（2013）', { size: 10.5, fill: C.sub })

  // ============ 二、分辨率革命 ============
  b.panel(30, 484, 660, 240, { title: '二、分辨率革命：从 blob 到 1.2 Å' })
  b.bars(80, 655, 560, 112, [7, 3.4, 1.2], {
    labels: ['1975 紫膜二维晶体', '2013 TRPV1', '2020 前后 apoferritin'],
    vlabels: ['7 Å', '3.4 Å', '1.2 Å'],
    fill: C.accL, stroke: C.acc, max: 8,
  })
  b.wtext(50, 700, '直接电子探测相机使 TRPV1 达 3.4 Å，结束几十年的「blob 学」时代；2020 年前后 apoferritin 以电子计数与多层校正达 1.2 Å，与晶体学正面会师。', { size: 10.5, fill: C.sub, maxW: 610, lh: 15 })

  // ============ 三、相机革命 ============
  b.panel(710, 484, 660, 240, { title: '三、相机革命：为什么直接探测改变一切' })
  b.text(730, 532, 'CCD（闪烁体耦合）：', { size: 11.5, weight: 700, fill: C.mute })
  b.rect(730, 542, 84, 32, { fill: '#f1f5f9', stroke: C.mute, sw: 1.5, rx: 6 })
  b.ctext(772, 562, '电子', { size: 10.5, fill: C.sub })
  b.arrow(818, 558, 836, 558, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.rect(840, 542, 128, 32, { fill: '#f1f5f9', stroke: C.mute, sw: 1.5, rx: 6 })
  b.ctext(904, 562, '闪烁体（转光）', { size: 10.5, fill: C.sub })
  b.arrow(972, 558, 990, 558, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.rect(994, 542, 96, 32, { fill: '#f1f5f9', stroke: C.mute, sw: 1.5, rx: 6 })
  b.ctext(1042, 562, '光学耦合', { size: 10.5, fill: C.sub })
  b.arrow(1094, 558, 1112, 558, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.rect(1116, 542, 92, 32, { fill: '#f1f5f9', stroke: C.mute, sw: 1.5, rx: 6 })
  b.ctext(1162, 562, 'CCD 芯片', { size: 10.5, fill: C.sub })
  b.text(730, 596, '散射与串扰把探测量子效率（DQE）压在低水平', { size: 10.5, fill: C.mute })

  b.text(730, 622, '直接电子探测：', { size: 11.5, weight: 700, fill: C.accD })
  b.rect(730, 632, 84, 32, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 6 })
  b.ctext(772, 652, '电子', { size: 10.5, fill: C.accD })
  b.arrow(818, 648, 836, 648, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.rect(840, 632, 150, 32, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 6 })
  b.ctext(915, 652, 'CMOS 像素直接轰击', { size: 10.5, fill: C.accD })
  b.arrow(994, 648, 1012, 648, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.rect(1016, 632, 132, 32, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 6 })
  b.ctext(1082, 652, '逐事件电子计数', { size: 10.5, fill: C.accD })
  b.text(730, 686, '逐事件计数剔除读出噪声：半奈奎斯特频率处 DQE 提升一倍以上', { size: 10.5, fill: C.sub })
  b.tag(770, 710, 'Falcon', { fill: C.panelB, stroke: C.line, size: 10.5, tfill: C.sub, pad: 8 })
  b.tag(850, 710, 'K2 / K3', { fill: C.panelB, stroke: C.line, size: 10.5, tfill: C.sub, pad: 8 })
  b.tag(930, 710, 'DE 系列', { fill: C.panelB, stroke: C.line, size: 10.5, tfill: C.sub, pad: 8 })
  b.wtext(1010, 703, '电影模式 + 束致运动校正 + 剂量分级：同一剂量可提取的信息量成倍增长', { size: 10, fill: C.sub, maxW: 340, lh: 13.5 })

  // ============ 四、三线轮动 ============
  b.panel(30, 744, 1340, 234, { title: '四、硬件—制样—算法：三线轮动' })
  const lane = (y: number, name: string, items: string[], fill: string, stroke: string, tfill: string) => {
    b.text(52, y + 5, name, { size: 13.5, weight: 700, fill: stroke })
    let cx = 150
    items.forEach((s, i) => {
      const w = textW(s, 11.5, 600) + 22
      b.rect(cx, y - 13, w, 26, { fill, stroke, sw: 1.4, rx: 6 })
      b.ctext(cx + w / 2, y + 4, s, { size: 11.5, weight: 600, fill: tfill })
      cx += w + 6
      if (i < items.length - 1) {
        b.arrow(cx + 2, y, cx + 26, y, { stroke: C.mute, sw: 1.6, marker: 'mute' })
        cx += 34
      }
    })
  }
  lane(802, '制样', ['1939 干燥 + 金属投影', '1955–1959 负染色', '1974 低温减损', '1982 玻璃化冷冻'], C.dnaL, C.dna, C.dnaD)
  lane(856, '探测', ['荧光屏 / 照相干板', '1990s CCD 闪烁体', '2010s 直接探测 + 计数'], C.accL, C.acc, C.accD)
  lane(910, '算法', ['1968 DeRosier–Klug 三维重构', '1975–1990s Frank 单颗粒框架', '2012 贝叶斯 + 金标准 FSC'], C.proL, C.pro, C.proD)
  b.ctext(700, 962, '硬件、制样与算法三线轮动——每条线的革新都把观察边界外推一程，是这门学科一百年来最稳定的演化规律', { size: 11.5, fill: C.sub })
}

export default scene({
  title: '生物电子显微学里程碑（1939—2020）',
  subtitle: '1939 首张病毒电镜照片（TMV）→ 1955–1959 负染色 → 1974 低温减损 → 1975 紫膜 7 Å → 1982 玻璃化 → 2013 TRPV1 3.4 Å → 2017 诺贝尔化学奖 → 2020 前后 apoferritin 1.2 Å',
  draw,
})
