// ph ch1-s1 生理学的对象、方法与整合观：层级、实验方法与科学循环
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、层级与整合 ============
  b.panel(30, 132, 660, 400, { title: '一、从分子到整体：生理学的层级与整合' })
  const lv: Array<[string, string, number, string, string, string]> = [
    ['整体（个体）', '行为、体温、整体适应', 150, C.proL, C.pro, C.proD],
    ['器官系统', '循环、呼吸、消化功能', 240, C.dnaL, C.dna, C.dnaD],
    ['器官', '心脏泵血、肾滤过', 330, C.okL, C.ok, C.okD],
    ['细胞', '心肌细胞收缩、神经元放电', 400, C.accL, C.acc, C.accD],
    ['分子', '离子通道、肌钙蛋白、酶', 460, C.rnaL, C.rna, C.rnaD],
  ]
  lv.forEach(([t, s, w, fill, stroke, tf], i) => {
    const y = 178 + i * 62
    b.rect(360 - w / 2, y, w, 56, { fill, stroke, sw: 1.6, rx: 7 })
    b.ctext(360, y + 24, t, { size: 14.5, weight: 700, fill: tf })
    b.ctext(360, y + 44, s, { size: 11.5, fill: C.sub })
  })
  b.ctext(88, 192, '还原（分析）', { size: 12, weight: 700, fill: C.badD })
  b.arrow(88, 208, 88, 460, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(640, 192, '整合（综合）', { size: 12, weight: 700, fill: C.okD })
  b.arrow(640, 460, 640, 208, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.wtext(50, 506, '机制在分子层面、意义在整体层面——「还原」拆解机器，「整合」重装功能，两个方向互为镜像、缺一不可。', { size: 11.5, fill: C.sub, maxW: 600, lh: 17 })

  // ============ 二、实验方法 ============
  b.panel(710, 132, 660, 400, { title: '二、实验方法：急性与慢性、在体与离体' })
  b.text(730, 185, '按实验时程与机体完整性分类：', { size: 12.5, fill: C.sub })
  b.table(730, 205, 620, {
    headers: ['方法', '要点', '代表', '主要局限'],
    colW: [95, 190, 190, 145],
    rowH: 56,
    fontSize: 12,
    rows: [
      ['急性在体', '麻醉下短时手术观测', '动脉血压神经调节', '急性扰乱、存活短'],
      ['急性离体', '离体器官/细胞灌流记录', '离体蛙心灌流、膜片钳', '脱离整体调节'],
      ['慢性在体', '预置瘘管/电极，恢复后长期观察', '巴甫洛夫小胃、慢性导管', '周期长、成本高'],
    ],
  })
  b.wtext(730, 445, '急性实验回答「机制在隔离条件下如何运作」，慢性实验回答「完整机体在自然生活中如何调节」——二者互补，结论须回到整体语境整合。', { size: 11.5, fill: C.sub, maxW: 610, lh: 17 })

  // ============ 三、科学循环与奠基年表 ============
  b.panel(30, 548, 1340, 437, { title: '三、科学循环：功能问题 → 假说 → 实验 → 定量模型' })
  const cyc: Array<[number, number, string, string, string, string, string]> = [
    [110, 610, '① 功能问题', '现象观察：血压为何自动回升？', C.accL, C.acc, C.accD],
    [450, 610, '② 假说', '可检验的机制猜想', C.proL, C.pro, C.proD],
    [450, 790, '③ 实验', '控制变量、定量测量', C.dnaL, C.dna, C.dnaD],
    [110, 790, '④ 定量模型', '数学描述 → 新预测', C.rnaL, C.rna, C.rnaD],
  ]
  cyc.forEach(([x, y, t, s, fill, stroke, tf]) => {
    b.rect(x, y, 250, 88, { fill, stroke, sw: 1.6, rx: 10 })
    b.ctext(x + 125, y + 30, t, { size: 15, weight: 700, fill: tf })
    b.ctext(x + 125, y + 58, s, { size: 11.5, fill: C.sub })
  })
  b.arrow(362, 654, 446, 654, { sw: 2, marker: 'ink' })
  b.arrow(575, 700, 575, 786, { sw: 2, marker: 'ink' })
  b.arrow(448, 834, 364, 834, { sw: 2, marker: 'ink' })
  b.arrow(235, 786, 235, 700, { sw: 2, marker: 'ink' })
  b.ctext(405, 749, '循环迭代', { size: 13, weight: 700, fill: C.mute })
  // 奠基年表（右栏）
  b.text(730, 610, '生理学的奠基时刻', { size: 15, weight: 700, fill: C.ink })
  const miles: Array<[string, string]> = [
    ['1628', '哈维《心血运动论》：定量实验证明血液循环'],
    ['1865', '贝尔纳提出「内环境」：细胞直接生活的液体环境'],
    ['1926', '坎农创造「稳态」（homeostasis）一词'],
    ['1948', '维纳《控制论》：反馈工程模型进入生理学'],
  ]
  miles.forEach(([yr, txt], i) => {
    const y = 645 + i * 50
    b.tag(757, y - 5, yr, { fill: C.panelB, stroke: C.line, tfill: C.ink, size: 12.5, weight: 700, pad: 9 })
    b.text(800, y, txt, { size: 12.5, fill: C.sub })
  })
  b.wtext(730, 852, '生理学以「功能」为问题意识：结构为何如此，须由其在整体功能中的角色解释；一切机制假说最终都要接受可重复、可定量的实验检验。', { size: 12, fill: C.sub, maxW: 610, lh: 18 })
}

export default scene({
  title: '生理学的对象、方法与整合观',
  subtitle: '整体→系统→器官→细胞→分子五级整合，还原与综合互为镜像；急性/慢性、在体/离体实验互补；1628 年哈维以定量实验开创实验生理学',
  draw,
})
