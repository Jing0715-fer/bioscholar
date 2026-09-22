// em ch10-s4 MicroED 的样品与应用（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、上载三路 ============
  b.panel(30, 132, 660, 412, { title: '一、样品上载：从沉淀到微晶的三条路' })
  // 涡旋悬液
  b.circle(150, 262, 62, { fill: C.accL, stroke: C.acc, sw: 2 })
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2
    b.rect(150 + 34 * Math.cos(a) - 6, 262 + 34 * Math.sin(a) - 6, 12, 12, { fill: '#ffffff', stroke: C.accD, sw: 1.4, rx: 2, transform: `rotate(${i * 20} ${150 + 34 * Math.cos(a)} ${262 + 34 * Math.sin(a)})` } as never)
  }
  b.ctext(150, 356, '涡旋打散的微晶悬液', { size: 11, weight: 700, fill: C.sub })
  b.ctext(150, 372, '直接上载约 1 μL', { size: 9.5, fill: C.mute })
  // LCP
  b.rect(280, 208, 130, 108, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 8 })
  for (let i = 0; i < 14; i++) {
    const rx = 292 + ((Math.sin(i * 71.3) * 33758.5) % 1 + 1) % 1 * 106
    const ry = 220 + ((Math.sin(i * 217.7) * 42543.2) % 1 + 1) % 1 * 84
    b.rect(rx, ry, 9, 9, { fill: '#ffffff', stroke: C.rnaD, sw: 1.2, rx: 2 })
  }
  b.ctext(345, 356, 'LCP 脂相提取', { size: 11, weight: 700, fill: C.rnaD })
  b.ctext(345, 372, '酶消化或去垢剂溶解', { size: 9.5, fill: C.mute })
  // FIB
  b.rect(440, 208, 130, 108, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  b.ellipse(505, 262, 40, 30, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(497, 218, 16, 88, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.arrow(470, 262, 492, 262, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.text(452, 250, 'Ga^{+}', { size: 9.5, fill: C.accD })
  b.ctext(505, 356, 'FIB 定点减薄', { size: 11, weight: 700, fill: C.proD })
  b.ctext(505, 372, '数微米大晶铣成 100–300 nm', { size: 9.5, fill: C.mute })
  b.wtext(50, 404, '第三路与第 9 章 lamella 的工艺同源、目的互补：那里为让电子穿透成像，这里为压厚晶保运动学近似（动力学散射重的大晶体）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(360, 470, '研钵研磨的粉末直接上样已成系列（天然产物与合成中间体）', { fill: C.panelB, stroke: C.sub, size: 10.5, tfill: C.sub, pad: 9 })

  // ============ 二、浸泡时间随尺寸平方 ============
  b.panel(710, 132, 660, 412, { title: '二、配体浸泡：灌注时间随尺寸平方' })
  const ax = 760, ay = 420, aw = 400, ah = 200
  b.axis(ax, ay, aw, ah, {
    grid: false,
    xticks: [[0, '0.1 μm'], [0.5, '1 μm'], [1, '10 μm+']],
    yticks: [[0, '秒'], [0.5, '小时'], [1, '天']],
    xlabel: '晶体特征尺寸（示意）',
    ylabel: '浸泡时间',
    title: '扩散时标按尺寸平方增长',
  })
  const soak: [number, number][] = []
  for (let i = 0; i <= 50; i++) {
    const t = i / 50
    soak.push([t, Math.pow(t, 2.1)])
  }
  b.curve(ax, ay, aw, ah, soak, { stroke: C.enz, sw: 2.6 })
  b.tag(900, 470, '微晶以秒计；大晶体以小时到天计', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 9 })
  b.wtext(1180, 200, '时间分辨（混合-冻停）与片段筛选的物理红利：配体在微晶里秒级达平衡，快扫化学中间态成为可能。', { size: 10.5, fill: C.sub, maxW: 160, lh: 15 })
  b.tag(1140, 320, '混合-喷雾捕集亚秒中间态', { fill: C.accL, stroke: C.acc, size: 10, tfill: C.accD, pad: 8 })
  b.tag(1140, 352, '片段筛选通量立增', { fill: C.accL, stroke: C.acc, size: 10, tfill: C.accD, pad: 8 })
  b.ctext(960, 510, '「尺寸小」从缺陷变成装置——MicroED 的化学红利', { size: 10, weight: 700, fill: C.mute })

  // ============ 三、应用谱系 ============
  b.panel(30, 572, 660, 398, { title: '三、应用谱系：小分子、肽与蛋白' })
  const app = (y: number, t: string, s: string, tag: string, fill: string, stroke: string, tfill: string) => {
    b.rect(50, y, 620, 72, { fill, stroke, sw: 1.6, rx: 8 })
    b.text(66, y + 26, t, { size: 12.5, weight: 700, fill: tfill })
    b.text(66, y + 48, s, { size: 10, fill: C.sub })
    b.etext(654, y + 26, tag, { size: 9.5, fill: C.mute, anchor: 'end' })
  }
  app(616, '小分子与晶型筛选', '粉末直接上样解析天然产物与合成中间体；多晶型与共晶快筛', '工业主战场', C.accL, C.acc, C.accD)
  app(698, '绝对构型判定', '经动力学精修的反常散射路径独立给出手性', 'Brázda 与 Palatinus 2019（Science）', C.rnaL, C.rna, C.rnaD)
  app(780, '淀粉样肽拉链结构', '与 Eisenberg 实验室合作的拉链骨架系列；4.7 Å 签名升级到原子级', '招牌案例', C.proL, C.pro, C.proD)
  app(862, '蛋白微晶筛查', '替结晶学快速判决「这滴结晶有没有戏」，免长晶等待', '决策工具', C.dnaL, C.dna, C.dnaD)

  // ============ 四、四笔账与生态位 ============
  b.panel(710, 572, 660, 398, { title: '四、四笔未清的账与生态位' })
  b.text(730, 618, '四笔账：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(830, 646, '动力学散射限制厚晶精修', { fill: C.badL, stroke: C.bad, size: 10, tfill: C.badD, pad: 8 })
  b.tag(1090, 646, '辐射损伤要求快收', { fill: C.badL, stroke: C.bad, size: 10, tfill: C.badD, pad: 8 })
  b.tag(830, 678, '蛋白分辨率多停 1–2 Å', { fill: C.badL, stroke: C.bad, size: 10, tfill: C.badD, pad: 8 })
  b.tag(1090, 678, '单晶数据量小', { fill: C.badL, stroke: C.bad, size: 10, tfill: C.badD, pad: 8 })
  b.wtext(730, 716, '生态位定位：补「晶体太小、太少、长不大」的拼图，非替代 X 射线晶体学——均一大复合物（约 100 kDa 以上）归单颗粒冷冻电镜，长得出 10 μm 以上三维大晶归 X 射线，太小的晶体归 MicroED（分工决策联动第 12 章）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(1040, 800, '方法史的对仗：', { fill: C.panelB, stroke: C.sub, size: 11, weight: 700, tfill: C.ink, pad: 10 })
  b.wtext(730, 838, '1975 年的加冕之作靠「图像给相位」，2013 年的复兴靠「旋转给几何」——电子晶体学两次证明，最可靠的突破都来自把电子波的物理性质（透镜传相位、Ewald 球平、散射强）直接兑换成方法。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.ctext(1040, 926, 'Gonen 组与制药界 2018 年起的合作浪潮把粉末上样做成常规', { size: 10, fill: C.mute })
}

export default scene({
  title: 'MicroED 的样品与应用：小晶体的化学红利',
  subtitle: '上载三路（涡旋悬液约 1 μL、LCP 提取、FIB 铣 100–300 nm）；浸泡时间随尺寸平方——微晶以秒计；小分子晶型筛选为工业主战场，绝对构型由动力学精修独立判定（Brázda 与 Palatinus 2019）；蛋白分辨率多停 1–2 Å',
  draw,
})
