// em ch10-s1 电子衍射的发现与早期历史（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、1927 两路实验 ============
  b.panel(30, 132, 660, 412, { title: '一、1927 年：两路实验同时裁决物质波' })
  b.text(50, 180, 'λ = h/p（德布罗意 1924 年物质波假说）', { size: 12.5, weight: 700, fill: C.ink })
  // Davisson-Germer
  b.ctext(210, 204, '戴维孙-革末：镍单晶弹性散射', { size: 10.5, weight: 700, fill: C.sub })
  b.rect(60, 224, 42, 26, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(81, 241, 'e^{-}枪', { size: 9, weight: 700, fill: C.accD })
  b.arrow(106, 237, 160, 237, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.polygon([[160, 218], [196, 218], [188, 258], [168, 258]], { fill: C.warnL, stroke: C.warn, sw: 1.8 })
  b.ctext(178, 276, '镍单晶', { size: 9.5, fill: C.warnD })
  b.arrow(192, 231, 262, 205, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.rect(262, 190, 34, 26, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 4 })
  b.ctext(279, 207, '收集器', { size: 8.5, fill: C.enzD })
  b.path('M 150,252 A 40,40 0 0 0 186,262', { fill: 'none', stroke: C.mute, sw: 1.4 })
  b.ctext(168, 288, 'θ', { size: 10, weight: 700, fill: C.sub })
  b.tag(190, 322, '54 eV 电子，波长约 1.67 Å', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })
  // G.P. Thomson
  b.ctext(540, 204, 'G. P. 汤姆孙：多晶薄膜环状衍射', { size: 10.5, weight: 700, fill: C.sub })
  b.rect(380, 224, 42, 26, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(401, 241, 'e^{-}枪', { size: 9, weight: 700, fill: C.accD })
  b.arrow(426, 237, 480, 237, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.rect(480, 214, 8, 46, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(484, 276, '多晶薄膜', { size: 9.5, fill: C.proD })
  b.arrow(492, 237, 540, 237, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.circle(600, 237, 52, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  for (let i = 1; i <= 3; i++) b.circle(600, 237, i * 14, { fill: 'none', stroke: C.enz, sw: 1.6, opacity: 0.75 })
  b.ctext(600, 300, '透射衍射环', { size: 9.5, fill: C.enzD })
  b.tag(540, 322, '环纹＝多晶取向平均的布拉格反射', { fill: C.rnaL, stroke: C.rna, size: 10.5, tfill: C.rnaD, pad: 9 })
  b.tag(250, 392, '德布罗意 1929 年先行获诺贝尔物理学奖', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(560, 392, '戴维孙与 G. P. 汤姆孙 1937 年共享诺奖', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.ctext(360, 468, 'J. J. 汤姆孙因证明电子是粒子获 1906 年诺奖，儿子 G. P. 因证明电子是波获 1937 年——父证其粒、子证其波', { size: 10, fill: C.mute })

  // ============ 二、波长-电压关系 ============
  b.panel(710, 132, 660, 412, { title: '二、电子波长随加速电压缩短' })
  b.bars(760, 400, 300, 220, [0.037, 0.025, 0.020, 1.54], {
    labels: ['100 kV', '200 kV', '300 kV', 'Cu Kα'],
    vlabels: ['0.037 Å', '0.025 Å', '0.020 Å', '1.54 Å'],
    fill: C.accL, stroke: C.acc, max: 1.8,
  })
  b.ctext(910, 186, '电子波长比常用 X 射线短数十倍', { size: 11.5, weight: 700, fill: C.sub })
  b.wtext(740, 216, '短波长意味着超小的衍射角与接近平面的 Ewald 球（本章第 3 节 MicroED 的物理红利）；电子散射截面比 X 射线高多个数量级——薄膜即可衍射，亚微米微晶也给出可测强度。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })
  b.tag(1170, 300, '散射强：薄膜即衍射', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 10 })
  b.tag(1170, 336, '代价：动力学散射', { fill: C.badL, stroke: C.bad, size: 11, weight: 700, tfill: C.badD, pad: 10 })
  b.wtext(740, 470, '多束相干相互作用使强度偏离 |F|^{2}——「电子衍射不可定量」的质疑伴随半个世纪，直到动力学精修给出回应（本章第 3、4 节）。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })

  // ============ 三、从物理玩具到结构工具 ============
  b.panel(30, 572, 660, 398, { title: '三、1930 至 1950 年代：从物理玩具到结构工具' })
  const evs: [number, string, string, boolean][] = [
    [0.05, '1924', '德布罗意物质波假说', true],
    [0.22, '1927', '两路衍射实验裁决', false],
    [0.42, '1930–40 年代', '电子衍射相机成常规仪器', true],
    [0.62, '1940–50 年代', '苏联学派电子衍射结构分析', false],
    [0.84, '1960 年代', 'Vainshtein 专著译介西方', true],
  ]
  b.timelineH(70, 780, 580, evs.map(([at, label, sub, above]) => ({ at, label, sub, above })), { title: '' })
  b.wtext(50, 880, '电子衍射相机定量测定金属蒸镀层晶粒取向、表面氧化层织构与脂肪酸单分子层堆积周期；Pinsker 与 Vainshtein 等人以强度统计解出轻原子薄层与粘土矿物结构。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(250, 930, '表面与薄膜：电子的浅穿透恰成优势', { fill: C.panelB, stroke: C.sub, size: 10.5, tfill: C.sub, pad: 9 })

  // ============ 四、生物样品的两条出路 ============
  b.panel(710, 572, 660, 398, { title: '四、生物样品：剂量困境与紫膜加冕' })
  b.tag(900, 620, 'Taylor 与 Glaeser 1974：冷冻催化酶晶体', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(1180, 620, '低温放宽剂量预算、保留水合', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  // 紫膜 p3 晶格
  const lx = 780, ly = 760
  const grid: [number, number][] = []
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
    grid.push([lx + i * 56 + (j % 2) * 28, ly - j * 48])
  }
  grid.forEach(([gx, gy]) => {
    b.circle(gx, gy, 16, { fill: C.proL, stroke: C.pro, sw: 2 })
    for (let k = 0; k < 3; k++) {
      const a = (k / 3) * Math.PI * 2
      b.circle(gx + 7.5 * Math.cos(a), gy + 7.5 * Math.sin(a), 3.2, { fill: C.proD })
    }
  })
  b.line(lx + 28, ly + 8, lx + 84, ly + 8, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.ctext(lx + 56, ly + 28, 'a 约 62 Å', { size: 9.5, weight: 700, fill: C.rnaD })
  b.ctext(lx + 56, ly - 148, '紫膜：六角 p3 晶格，每格一个 bR 三聚体', { size: 10, weight: 700, fill: C.sub })
  b.wtext(1010, 690, 'Henderson 与 Unwin 1975 年紫膜结构：葡萄糖包埋防脱水、衍射收振幅加图像收相位，得 7 Å 面内分辨率——首个非染色天然膜蛋白结构；1990 年达 3.5 Å 完整原子模型。', { size: 10.5, fill: C.sub, maxW: 320, lh: 15 })
  b.tag(1180, 820, '分账纪律：振幅出自衍射、相位出自图像', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 9 })
  b.ctext(1040, 930, '「图像给相位」的路线为二维晶体电子晶体学加冕（本章第 2 节展开）', { size: 10, fill: C.mute })
}

export default scene({
  title: '电子衍射的发现与早期历史：从物质波到紫膜',
  subtitle: '1927 年戴维孙-革末镍单晶（54 eV，波长约 1.67 Å）与 G. P. 汤姆孙薄膜环状衍射证实电子波动性（1937 年诺奖）；电子波长 100/200/300 kV 为 0.037/0.025/0.020 Å；Henderson 与 Unwin 1975 年紫膜 7 Å',
  draw,
})
