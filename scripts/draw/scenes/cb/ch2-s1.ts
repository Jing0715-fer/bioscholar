// cb ch2-s1 膜结构模型的演变与膜的化学组成（39-d 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、模型演变（五个小模型图） ============
  b.panel(30, 132, 1340, 300, { title: '一、膜结构模型的百年演变（1925—1997）' })
  const boxes: [number, string, string][] = [
    [56, '1925 · Gorter 与 Grendel', '红细胞膜脂单层铺展面积约为细胞表面积 2 倍 → 提示脂双层'],
    [318, '1935 · Danielli 与 Davson', '蛋白质以 β 片层平铺于脂双层两侧（「三明治」）'],
    [580, '1959 · Robertson 单位膜', '电镜下「暗–亮–暗」三层，总厚约 7.5 nm；一切生物膜共有'],
    [842, '1972 · Singer 与 Nicolson', '流动镶嵌模型：脂双层为流动基质、蛋白镶嵌其中（至今经典）'],
    [1104, '1997 · Simons 与 Ikonen', '脂筏：鞘磷脂–胆固醇富集的有序微区，蛋白分选与信号平台'],
  ]
  boxes.forEach(([x, t, s], i) => {
    b.rect(x, 180, 246, 160, { fill: C.panelB, stroke: i === 3 ? C.enz : C.line, sw: i === 3 ? 2.2 : 1.4, rx: 9 })
    b.text(x + 12, 204, t, { size: 12, weight: 700, fill: i === 3 ? C.enzD : C.ink })
    // 模型示意
    if (i === 0) {
      b.bilayer(x + 23, 252, 200, { h: 12 })
    } else if (i === 1) {
      b.bilayer(x + 23, 252, 200, { h: 12 })
      b.line(x + 18, 244, x + 228, 244, { stroke: C.pro, sw: 3.5 })
      b.line(x + 18, 272, x + 228, 272, { stroke: C.pro, sw: 3.5 })
    } else if (i === 2) {
      b.rect(x + 18, 240, 210, 6, { fill: C.ink })
      b.rect(x + 18, 248, 210, 8, { fill: '#ffffff', stroke: C.ink, sw: 1.2 })
      b.rect(x + 18, 258, 210, 6, { fill: C.ink })
      b.text(x + 232, 256, '7.5 nm', { size: 9.5, fill: C.mute })
    } else if (i === 3) {
      b.bilayer(x + 23, 252, 200, { h: 12 })
      b.rect(x + 60, 238, 16, 44, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 7 })
      b.rect(x + 148, 238, 20, 44, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 9 })
      b.ellipse(x + 110, 276, 16, 8, { fill: C.accL, stroke: C.acc, sw: 1.5 })
    } else {
      b.bilayer(x + 23, 252, 200, { h: 12 })
      b.rect(x + 30, 246, 92, 24, { fill: C.rnaL, fillOp: 0.6, stroke: C.rna, sw: 1.2, rx: 5 })
      b.rect(x + 45, 236, 12, 40, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 5 })
      b.rect(x + 72, 236, 12, 40, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 5 })
      b.rect(x + 99, 236, 12, 40, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 5 })
    }
    if (i === 0) {
      // 长句无标点可断 → 手动拆两行，避免溢出与右邻盒注文交叠
      b.text(x + 12, 306, '红细胞膜脂单层铺展面积约为细胞表面积 2 倍', { size: 10.5, fill: C.sub })
      b.text(x + 12, 320, '→ 提示脂双层', { size: 10.5, fill: C.sub })
    } else {
      b.wtext(x + 12, 306, s, { size: 10.5, fill: C.sub, maxW: 224, lh: 14 })
    }
    if (i < 4) b.arrow(x + 249, 260, x + 259, 260, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  })
  b.text(56, 366, '演变主线：静态「三明治」→ 流动的脂双层基质＋镶嵌蛋白 → 有序微区（脂筏）——流动性与不对称性贯穿始终。', { size: 12.5, weight: 600, fill: C.ink })

  // ============ 二、流动镶嵌模型主图 ============
  b.panel(30, 448, 860, 330, { title: '二、流动镶嵌模型（1972）：流动脂双层＋镶嵌膜蛋白' })
  b.text(66, 498, '细胞外', { size: 12, weight: 600, fill: C.sub })
  b.text(66, 648, '细胞质面', { size: 12, weight: 600, fill: C.sub })
  b.bilayer(60, 590, 760)
  // 多次跨膜蛋白
  b.ctext(206, 536, '多次跨膜蛋白', { size: 11.5, weight: 700, fill: C.proD })
  for (let i = 0; i < 4; i++) b.rect(176 + i * 20, 566, 13, 54, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 6 })
  // 糖脂
  b.ctext(312, 528, '糖脂', { size: 11.5, weight: 700, fill: C.rnaD })
  b.circle(304, 588, 5.5, { fill: C.dna })
  b.circle(316, 588, 5.5, { fill: C.dna })
  b.circle(300, 556, 6, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.circle(312, 545, 6, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.circle(325, 556, 6, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.line(307, 580, 302, 562, { stroke: C.rna, sw: 1.4 })
  b.line(313, 580, 318, 562, { stroke: C.rna, sw: 1.4 })
  // 单次跨膜糖蛋白
  b.ctext(430, 488, '糖蛋白', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ellipse(430, 548, 30, 18, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(416, 560, 28, 50, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.circle(410, 512, 7, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.circle(424, 500, 7, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.circle(440, 508, 7, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.circle(455, 519, 7, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.line(412, 519, 428, 505, { stroke: C.rna, sw: 1.3 })
  b.line(428, 505, 444, 512, { stroke: C.rna, sw: 1.3 })
  b.line(444, 512, 458, 522, { stroke: C.rna, sw: 1.3 })
  // 胆固醇
  b.rect(533, 588, 13, 17, { fill: C.warnL, stroke: C.warn, sw: 1.4, rx: 3 })
  b.ctext(540, 640, '胆固醇', { size: 11, weight: 600, fill: C.sub })
  // GPI 锚定蛋白
  b.ctext(640, 522, 'GPI 锚定蛋白', { size: 11.5, weight: 700, fill: C.proD })
  b.ellipse(640, 545, 26, 16, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.line(640, 561, 640, 590, { stroke: C.pro, sw: 2.4 })
  b.circle(634, 592, 5, { fill: C.dna })
  b.circle(646, 592, 5, { fill: C.dna })
  // 外在蛋白
  b.ellipse(755, 622, 28, 14, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ctext(755, 662, '外在膜蛋白', { size: 11.5, weight: 700, fill: C.accD })
  // 侧向扩散
  b.arrow(690, 575, 770, 575, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.ctext(730, 565, '侧向扩散', { size: 10.5, weight: 600, fill: C.dna })
  // 膜厚
  b.line(838, 566, 838, 618, { stroke: C.mute, sw: 1.6, marker: 'mute', markerStart: 'mute' })
  b.text(846, 596, '7.5 nm', { size: 11, weight: 600, fill: C.mute })
  b.wtext(60, 692, '膜蛋白约占膜质量的 20%–70%，执行物质运输、信号接收、催化、连接与识别；膜脂既是骨架又直接参与信号转导——如 PIP₂ 被磷脂酶 C 水解生成 IP₃ 与 DAG 两种第二信使。', { size: 11, fill: C.sub, maxW: 800, lh: 15.5 })

  // ============ 三、膜脂 ============
  b.panel(910, 448, 460, 330, { title: '三、膜脂：脂双层的骨架' })
  b.text(930, 502, '化学组成', { size: 12.5, weight: 700, fill: C.ink })
  b.tag(990, 530, 'PC', { fill: C.dnaL, stroke: C.dna, size: 12, weight: 700, tfill: C.dnaD, pad: 9 })
  b.tag(1072, 530, 'PE', { fill: C.proL, stroke: C.pro, size: 12, weight: 700, tfill: C.proD, pad: 9 })
  b.tag(1154, 530, 'PS', { fill: C.enzL, stroke: C.enz, size: 12, weight: 700, tfill: C.enzD, pad: 9 })
  b.tag(1236, 530, 'PI', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(975, 566, '鞘磷脂', { fill: C.panelB, stroke: C.sub, size: 11.5, tfill: C.ink, pad: 10 })
  b.tag(1062, 566, '胆固醇', { fill: C.warnL, stroke: C.warn, size: 11.5, tfill: C.warn, pad: 10 })
  b.tag(1140, 566, '糖脂', { fill: C.rnaL, stroke: C.rna, size: 11.5, tfill: C.rnaD, pad: 10 })
  b.text(1188, 570, '（糖链全部朝外侧）', { size: 10.5, fill: C.mute })
  // 单个磷脂示意
  b.circle(950, 612, 9, { fill: C.dna })
  b.line(946, 620, 946, 650, { stroke: C.dna, sw: 2 })
  b.line(954, 620, 954, 650, { stroke: C.dna, sw: 2 })
  b.wtext(975, 606, '亲水头部朝向两侧水相、疏水尾部相对——依疏水效应自发组装成脂双层（最稳定构型）。', { size: 11, fill: C.sub, maxW: 350, lh: 15.5 })
  b.text(930, 672, '膜脂运动', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(930, 694, '侧向扩散、旋转、摆动活跃；跨双层的翻转（flip-flop）极慢、需翻转酶协助——这是膜不对称性的物理前提。', { size: 11, fill: C.sub, maxW: 420, lh: 15.5 })
  b.wtext(930, 746, '质膜厚约 7.5 nm，是细胞与外环境间的选择性屏障。', { size: 10.5, fill: C.mute, maxW: 420, lh: 14 })

  // ============ 四、三类膜蛋白对照 ============
  b.panel(30, 794, 1340, 186, { title: '四、三类膜蛋白：结合方式与分离手段' })
  b.table(56, 830, 1288, {
    headers: ['类型', '结合方式', '分离手段', '代表蛋白'],
    colW: [150, 420, 300, 418],
    rowH: 34,
    fontSize: 11,
    rows: [
      ['外在（周边）', '静电与氢键附着于膜脂极性头部或膜蛋白表面', '高盐、尿素或改变 pH', '血影蛋白、细胞色素 c'],
      ['内在（整合）', '疏水区段插入或横跨脂双层（α 螺旋／β 桶）', '去污剂增溶（Triton X-100、SDS）', '血型糖蛋白、Na⁺/K⁺-ATPase、GPCR'],
      ['脂锚定', '共价连接脂肪酸链／异戊二烯基（胞质面）或 GPI（胞外面）', '磷脂酶水解锚脂', 'Src 激酶、碱性磷酸酶'],
    ],
  })
}

export default scene({
  title: '膜结构模型的演变与膜的化学组成',
  subtitle: '1925 脂双层 → 1935 片层模型 → 1959 单位膜（暗–亮–暗，约 7.5 nm）→ 1972 流动镶嵌（流动性与不对称性两大原则）→ 1997 脂筏模型；膜蛋白分外在／内在／脂锚定三类',
  draw,
})
