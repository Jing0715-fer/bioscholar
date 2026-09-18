// bp ch8-s4 机械门控通道与通道阻断剂（39-e 收尾）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、两种力源 ============
  b.panel(30, 132, 1340, 270, { title: '一、机械门控的两种力源：力来自脂双层 与 力来自栓系' })

  // 左卡：force-from-lipid
  b.rect(50, 160, 640, 220, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(66, 188, '① 力来自脂双层（force-from-lipid）', { size: 12.5, weight: 700, fill: C.ink })
  b.tag(480, 212, 'MscL / MscS：渗透冲击的「安全阀」', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 700, tfill: C.enzD, pad: 8 })
  b.bilayer(90, 262, 340, { h: 30 })
  b.rect(246, 246, 12, 62, { fill: C.enzL, stroke: C.enz, sw: 2, rx: 5 })
  b.rect(284, 246, 12, 62, { fill: C.enzL, stroke: C.enz, sw: 2, rx: 5 })
  b.arrow(105, 277, 65, 277, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.arrow(425, 277, 465, 277, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.ctext(265, 234, '脂双层张力', { size: 9.5, weight: 700, fill: C.badD })
  b.wtext(66, 340, '通道跨膜区形状像「张力计」——被拉伸的膜直接撬开孔道，防止渗透冲击胀破；Piezo 亦属此机制。', { size: 10, fill: C.sub, maxW: 600, lh: 14 })

  // 右卡：tethered
  b.rect(700, 160, 640, 220, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(716, 188, '② 力来自栓系（tethered）', { size: 12.5, weight: 700, fill: C.ink })
  b.text(716, 213, '听毛细胞：静纤毛 + 顶链接头 + 胞内骨架传递张力', { size: 10, fill: C.sub })
  b.line(700, 336, 850, 336, { stroke: C.mute, sw: 3 })
  b.rect(724, 268, 9, 66, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 4 })
  b.rect(749, 248, 9, 86, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 4 })
  b.rect(774, 228, 9, 106, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 4 })
  b.line(733, 270, 753, 250, { stroke: C.bad, sw: 1.8, dash: '4 3' })
  b.line(758, 250, 778, 230, { stroke: C.bad, sw: 1.8, dash: '4 3' })
  b.arrow(818, 262, 788, 256, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.text(826, 258, '偏转（nm 级）', { size: 9.5, weight: 700, fill: C.badD })
  b.rect(762, 322, 28, 22, { fill: C.accL, stroke: C.acc, sw: 2, rx: 5 })
  b.text(860, 332, 'TMC 通道复合体', { size: 9.5, weight: 700, fill: C.accD })
  b.wtext(716, 368, '听觉把机械门控推到单分子极限：单个静纤毛顶端通道的开放概率随纳米级偏转变化。', { size: 10, fill: C.sub, maxW: 600, lh: 14 })

  // ============ 二、Piezo 三臂结构 ============
  b.panel(30, 422, 1340, 270, { title: '二、Piezo：三叶螺旋桨状三聚体的碟形门控（2021 年诺贝尔生理学或医学奖）' })

  // 左：俯视三臂
  b.text(60, 466, '俯视', { size: 10, fill: C.mute })
  b.path('M 280,540 C 262,505 250,475 258,448', { stroke: C.pro, sw: 12, fill: 'none', opacity: 0.55 })
  b.path('M 280,540 C 262,505 250,475 258,448', { stroke: C.pro, sw: 3.5, fill: 'none' })
  b.path('M 242,574 C 215,585 195,600 180,618', { stroke: C.pro, sw: 12, fill: 'none', opacity: 0.55 })
  b.path('M 242,574 C 215,585 195,600 180,618', { stroke: C.pro, sw: 3.5, fill: 'none' })
  b.path('M 318,574 C 345,585 365,600 380,618', { stroke: C.pro, sw: 12, fill: 'none', opacity: 0.55 })
  b.path('M 318,574 C 345,585 365,600 380,618', { stroke: C.pro, sw: 3.5, fill: 'none' })
  b.circle(280, 560, 20, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.circle(280, 560, 8, { fill: C.bg, stroke: C.proD, sw: 2 })
  b.line(292, 552, 356, 530, { stroke: C.mute, sw: 1.2, dash: '4 3' })
  b.text(360, 534, '中央孔', { size: 10, weight: 700, fill: C.proD })
  b.ctext(280, 425, '桨叶 ×3（每亚基 30 余个跨膜螺旋）', { size: 10.5, weight: 700, fill: C.ink })
  b.ctext(280, 655, '三聚体：三叶螺旋桨', { size: 10, fill: C.sub })

  // 中：碟形 → 展平
  b.text(490, 466, '侧视：碟形 → 展平', { size: 10, fill: C.mute })
  b.path('M 520,478 Q 620,548 720,478', { stroke: C.dna, sw: 4, fill: 'none' })
  b.path('M 520,494 Q 620,564 720,494', { stroke: C.dna, sw: 4, fill: 'none' })
  b.circle(620, 521, 8, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(620, 458, '碟形（静息）', { size: 9.5, weight: 700, fill: C.sub })
  b.arrow(620, 536, 620, 580, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.text(638, 562, '膜张力展平', { size: 9.5, weight: 700, fill: C.accD })
  b.line(520, 604, 720, 604, { stroke: C.dna, sw: 4 })
  b.line(520, 620, 720, 620, { stroke: C.dna, sw: 4 })
  b.circle(620, 612, 11, { fill: C.okL, stroke: C.ok, sw: 2.2 })
  b.ctext(620, 652, '展平（受力）：中央孔拉开', { size: 9.5, weight: 700, fill: C.dnaD })

  // 右：要点
  b.text(830, 480, 'Piezo1 / Piezo2', { size: 13.5, weight: 700, fill: C.ink })
  const piezo: Array<[string, number]> = [
    ['介导触觉、本体感觉、血压与血管发育', 512],
    ['开放时间毫秒级', 540],
  ]
  piezo.forEach(([t, y]) => {
    b.circle(838, y - 4, 4, { fill: C.pro })
    b.text(850, y, t, { size: 10.5, weight: 600, fill: C.sub })
  })
  b.tag(950, 578, '2021 年诺贝尔生理学或医学奖', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 9 })
  b.wtext(830, 622, '桨叶向胞内弯曲呈「碟形」，膜张力把碟展平、把中央孔拉开——力来自脂双层的真核代表。', { size: 10, fill: C.mute, maxW: 500, lh: 14 })

  // ============ 三、孔道药理学 ============
  b.panel(30, 712, 1340, 268, { title: '三、孔道药理学：TTX 封外口、TEA / 局麻药堵内口（态依赖阻断）' })

  // 左：孔道剖面 + 阻断位点
  b.line(200, 795, 400, 795, { stroke: C.mute, sw: 1.5, dash: '6 5' })
  b.line(200, 893, 400, 893, { stroke: C.mute, sw: 1.5, dash: '6 5' })
  b.polyline([[268, 765], [282, 791]], { stroke: C.enz, sw: 2.5 })
  b.polyline([[332, 765], [318, 791]], { stroke: C.enz, sw: 2.5 })
  b.line(280, 797, 280, 897, { stroke: C.sub, sw: 3 })
  b.line(320, 797, 320, 897, { stroke: C.sub, sw: 3 })
  b.line(335, 778, 385, 773, { stroke: C.mute, sw: 1.2 })
  b.text(388, 777, '选择性滤器', { size: 9.5, weight: 700, fill: C.enzD })
  b.text(200, 757, '胞外', { size: 9.5, weight: 700, fill: C.mute })
  b.text(200, 915, '胞内', { size: 9.5, weight: 700, fill: C.mute })
  b.ctext(300, 710, '胍基⁺ 从胞外卡入', { size: 9.5, weight: 700, fill: C.badD })
  b.ion(300, 743, 'TTX', { r: 17, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 9.5 })
  b.arrow(300, 763, 300, 787, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ion(255, 927, 'TEA', { r: 16, fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 9 })
  b.arrow(255, 909, 283, 889, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ctext(245, 950, 'TEA / 4-AP', { size: 9, fill: C.sub })
  b.ion(360, 927, 'LA⁺', { r: 16, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 9.5 })
  b.arrow(360, 909, 322, 889, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.ctext(370, 950, 'LA⁺＝利多卡因', { size: 9, fill: C.sub })

  // 右：三张要点卡
  b.rect(480, 730, 850, 66, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(496, 752, '河豚毒素 TTX：nM 级亲和封孔', { size: 10.5, weight: 700, fill: C.badD })
  b.wtext(496, 772, '神经元 Nav（TTX 敏感）vs 心肌 Nav1.5（亲和力低数百–上千倍）→ 中毒时神经症状、心肌相对幸存；也是 HH 实验分离电流的关键工具。', { size: 9.5, fill: C.sub, maxW: 810, lh: 13 })
  b.rect(480, 804, 850, 66, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(496, 826, '局麻药（利多卡因等）：使用依赖性', { size: 10.5, weight: 700, fill: C.warn })
  b.wtext(496, 846, '带电形式从胞内侧进入孔道，优先结合开放 / 失活态——高频发放的疼痛纤维先被阻断，构成治疗指数的物理基础。', { size: 9.5, fill: C.sub, maxW: 810, lh: 13 })
  b.rect(480, 878, 850, 58, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.wtext(496, 900, '4-AP / TEA 从内口堵 K_v；硝苯地平类阻滞 L 型 Ca²⁺ 通道；氯胺酮等阻断 NMDA 受体孔道。', { size: 9.5, fill: C.sub, maxW: 810, lh: 13 })
  b.tag(820, 952, '统一图像：阻断剂以态依赖方式占据孔道或变构位点，把马尔可夫图向关闭 / 失活态偏置——既是治疗武器，也是动力学探针', { fill: C.accL, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 10 })
}

export default scene({
  title: '机械门控通道与通道阻断剂：力来自脂双层 / 栓系，TTX 与 TEA 的位点',
  subtitle: 'Piezo 三叶螺旋桨三聚体（每亚基 30 余个跨膜螺旋，碟形→展平，2021 诺贝尔奖）；TTX 胍基⁺ 从胞外封 Na⁺ 通道滤器口（nM 级，神经型敏感高数百–上千倍）；局麻药从胞内结合开放/失活态（使用依赖性）；TEA/4-AP 堵 K_v 内口',
  draw,
})
