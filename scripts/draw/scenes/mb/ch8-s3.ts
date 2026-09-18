// mb ch8-s3 反式作用因子：结构域与家族（39-c）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 上：模块化结构与激活域 ============
  b.panel(30, 132, 1340, 252, { title: '一、转录因子为模块化蛋白：结构域可独立交换拼接（domain swapping）' })
  // 结构域条
  b.domains(80, 196, 54, [
    { label: 'DNA 结合域 DBD', frac: 300, fill: C.dnaL, stroke: C.dna },
    { label: '铰链 + NLS', frac: 170, fill: C.panelB, stroke: C.line },
    { label: '转录激活域 TAD', frac: 330, fill: C.proL, stroke: C.pro },
  ])
  // DBD 接触 DNA
  b.dna(110, 288, 240, { amp: 6, period: 42, stroke: C.dna, sw: 2.2 })
  b.arrow(230, 254, 230, 276, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.ctext(230, 306, '识别特异 DNA 序列（常经大沟）', { size: 12, fill: C.mute })
  // TAD 输出
  b.arrow(580, 254, 580, 276, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.ctext(580, 306, '招募 Mediator / TFIIIB 等机器', { size: 12, fill: C.mute })
  // 交换拼接示意
  b.rect(720, 178, 300, 92, { fill: C.panel, stroke: C.line, sw: 1.3, rx: 8 })
  b.ctext(870, 204, '交换拼接实验', { size: 13.5, weight: 700, fill: C.ink })
  b.wtext(775, 228, 'Gal4 的 DBD 拼接 VP16 的 TAD 仍有活性', { size: 12, fill: C.sub, maxW: 268 })
  b.wtext(775, 246, '——两域可独立作业', { size: 12, fill: C.sub, maxW: 268 })
  // 激活域三类
  b.rect(1040, 168, 300, 148, { fill: C.proL, stroke: C.pro, sw: 1.4, rx: 8, fillOp: 0.4 })
  b.ctext(1190, 192, '激活域按氨基酸组成分类', { size: 13.5, weight: 700, fill: C.proD })
  const tads = [
    ['酸性域（Gal4、VP16）', '「酸性分子胶」，经相分离凝聚体富集机器'],
    ['谷氨酰胺富集（Sp1）', ''],
    ['脯氨酸富集（CTF/NF-1）', ''],
  ]
  tads.forEach(([t, s], i) => {
    b.text(1056, 218 + i * 22, '· ' + t, { size: 12, fill: C.sub })
    if (s) b.text(1180, 218 + i * 22, '', { size: 11, fill: C.mute })
  })
  b.wtext(1056, 286, '酸性域为带正电斑块的无序区，可结合多元靶点（现代观点：相分离凝聚体）', { size: 11.5, fill: C.mute, maxW: 272, lh: 17 })

  // ============ 中下：DNA 结合域家族卡片（6 张） ============
  const cards: { title: string; sub: string; draw: (x: number, y: number) => void; note: string; rep: string }[] = [
    {
      title: '同源域（HTH）',
      sub: '螺旋-转折-螺旋，约 60 aa',
      note: '识别 TAATTA 核心；Antennapedia、HOX 蛋白',
      rep: '胚胎发育体轴规划',
      draw: (x, y) => {
        // 三螺旋束 + 大沟
        b.dna(x + 14, y + 96, 190, { amp: 5, period: 40, stroke: C.dna, sw: 2 })
        for (let i = 0; i < 3; i++) {
          b.rect(x + 40 + i * 46, y + 18, 22, 44, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 4 })
          b.ctext(x + 51 + i * 46, y + 44, `H${i + 1}`, { size: 11, weight: 700, fill: C.dnaD })
        }
        b.arrow(x + 97, y + 64, x + 97, y + 84, { stroke: C.dna, sw: 1.6, marker: 'dna' })
        b.ctext(x + 107, y + 76, '识别螺旋入大沟', { size: 11, fill: C.mute })
      },
    },
    {
      title: 'C2H2 锌指',
      sub: 'Cys₂His₂ 配位 Zn²⁺，每指约 30 aa 识别 3 bp',
      note: 'Sp1、Zif268（GC 富集元件）',
      rep: 'ZFN 基因编辑的结构基础',
      draw: (x, y) => {
        b.dna(x + 14, y + 96, 190, { amp: 5, period: 40, stroke: C.dna, sw: 2 })
        for (let i = 0; i < 3; i++) {
          const fx = x + 48 + i * 56
          b.circle(fx, y + 34, 13, { fill: C.warnL, stroke: '#b45309', sw: 1.6 })
          b.ctext(fx, y + 39, 'Zn', { size: 10.5, weight: 700, fill: C.rnaD })
          b.line(fx - 11, y + 26, fx - 30, y + 34, { stroke: C.mute, sw: 1.4 })
          b.line(fx + 11, y + 26, fx + 30, y + 34, { stroke: C.mute, sw: 1.4 })
          b.text(fx - 34, y + 22, 'C', { size: 10, fill: C.mute })
          b.text(fx + 24, y + 22, 'H', { size: 10, fill: C.mute })
          b.arrow(fx, y + 48, fx, y + 82, { stroke: '#b45309', sw: 1.5, marker: 'rna' })
        }
      },
    },
    {
      title: 'bZIP（碱性区+亮氨酸拉链）',
      sub: 'Leu 每 7 位重复 → 卷曲螺旋二聚',
      note: '识别 CRE、AP-1 位点；CREB、c-Fos/c-Jun',
      rep: '二聚化组合调控的代表',
      draw: (x, y) => {
        b.dna(x + 14, y + 96, 190, { amp: 5, period: 40, stroke: C.dna, sw: 2 })
        // 两条拉链螺旋
        b.path(`M${x + 70},${y + 12} L${x + 96},${y + 54}`, { stroke: C.pro, sw: 5 })
        b.path(`M${x + 124},${y + 12} L${x + 98},${y + 54}`, { stroke: C.enz, sw: 5 })
        for (let i = 0; i < 3; i++) {
          b.circle(x + 76 + i * 7, y + 22 + i * 11, 3.4, { fill: '#b45309' })
          b.circle(x + 118 - i * 7, y + 22 + i * 11, 3.4, { fill: '#b45309' })
        }
        b.ctext(x + 97, y + 68, '碱性区夹住 DNA', { size: 11, fill: C.mute })
      },
    },
    {
      title: 'bHLH（碱性区+螺旋-环-螺旋）',
      sub: 'HLH 二聚化，碱性区识别 E 盒',
      note: 'E 盒（CANNTG）；MyoD、c-Myc/Max',
      rep: '肌发生与增殖控制',
      draw: (x, y) => {
        b.dna(x + 14, y + 96, 190, { amp: 5, period: 40, stroke: C.dna, sw: 2 })
        b.rect(x + 58, y + 12, 18, 34, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 4 })
        b.rect(x + 118, y + 12, 18, 34, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 4 })
        b.path(`M${x + 76},${y + 22} C ${x + 96},${y + 2} ${x + 98},${y + 2} ${x + 118},${y + 22}`, { stroke: C.mute, sw: 2.2 })
        b.rect(x + 84, y + 52, 26, 22, { fill: C.proL, stroke: C.pro, sw: 1.4, rx: 3 })
        b.rect(x + 84, y + 52, 26, 22, { fill: C.enzL, stroke: C.enz, sw: 1.4, rx: 3, fillOp: 0.5 })
        b.ctext(x + 97, y + 67, '碱性区', { size: 9.5, fill: C.sub })
        b.arrow(x + 97, y + 76, x + 97, y + 88, { stroke: C.pro, sw: 1.5, marker: 'pro' })
      },
    },
    {
      title: '核受体锌指（C4）',
      sub: '两对 Cys 配 Zn²⁺，二聚识别半位点',
      note: 'GR 识别 GRE、ER 识别 ERE（半位点回文/间隔重复）',
      rep: '配体直接调控的胞内受体',
      draw: (x, y) => {
        b.dna(x + 14, y + 96, 190, { amp: 5, period: 40, stroke: C.dna, sw: 2 })
        for (let i = 0; i < 2; i++) {
          const fx = x + 62 + i * 70
          b.circle(fx, y + 34, 13, { fill: C.warnL, stroke: '#b45309', sw: 1.6 })
          b.ctext(fx, y + 39, 'Zn', { size: 10.5, weight: 700, fill: C.rnaD })
          b.rect(fx - 17, y + 22, 34, 24, { fill: 'none', stroke: i ? C.enz : C.pro, sw: 1.6, rx: 4 })
          b.arrow(fx, y + 48, fx, y + 82, { stroke: '#b45309', sw: 1.5, marker: 'rna' })
        }
        b.ctext(x + 97, y + 68, '二聚体夹两个半位点', { size: 11, fill: C.mute })
      },
    },
    {
      title: 'HMG 框 / TBP β 桶',
      sub: 'HMG：L 形三螺旋弯折 DNA；TBP：β 片层贴 TATA 小沟',
      note: 'SRY（性别决定）；TBP 识别 TATA 盒',
      rep: '变构 DNA 与基础机器',
      draw: (x, y) => {
        b.path(`M${x + 60},${y + 88} C ${x + 60},${y + 30} ${x + 84},${y + 40} ${x + 92},${y + 16} C ${x + 112},${y + 8} ${x + 132},${y + 26} ${x + 136},${y + 52} C ${x + 140},${y + 78} ${x + 128},${y + 92} ${x + 100},${y + 92} Z`, { fill: C.dnaL, stroke: C.dna, sw: 2, dash: '5 4' })
        b.ctext(x + 97, y + 56, 'L 形', { size: 11, weight: 700, fill: C.dnaD })
        b.ctext(x + 97, y + 72, '（弯折 DNA）', { size: 10, fill: C.mute })
        b.rect(x + 158, y + 36, 46, 40, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 4 })
        b.line(x + 164, y + 50, x + 198, y + 50, { stroke: C.acc, sw: 1.6 })
        b.line(x + 164, y + 62, x + 198, y + 62, { stroke: C.acc, sw: 1.6 })
        b.ctext(x + 181, y + 26, 'β 片层', { size: 10.5, fill: C.accD })
        b.ctext(x + 181, y + 92, 'TBP·小沟', { size: 10.5, fill: C.accD })
      },
    },
  ]
  cards.forEach((c, i) => {
    const col = i % 3, row = Math.floor(i / 3)
    const x = 30 + col * 447
    const y = 402 + row * 254
    b.rect(x, y, 433, 240, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 10 })
    b.ctext(x + 216, y + 26, c.title, { size: 15.5, weight: 700, fill: C.ink })
    b.wtext(x + 14, y + 48, c.sub, { size: 11.5, fill: C.mute, maxW: 405 })
    c.draw(x, y + 56)
    b.wtext(x + 14, y + 176, '识别：' + c.note, { size: 12, fill: C.sub, maxW: 405 })
    b.text(x + 14, y + 226, '意义：' + c.rep, { size: 11.5, fill: C.mute })
  })

  // ============ 底：二聚化组合 + 语法 ============
  b.rect(30, 922, 1340, 62, { fill: C.okL, stroke: C.ok, sw: 1.4, rx: 10, fillOp: 0.4 })
  b.text(56, 946, '二聚化的组合威力：', { size: 14.5, weight: 700, fill: C.ink })
  b.text(240, 946, 'Jun-Fos（AP-1）· MyoD-E 蛋白（肌发生）· Myc-Max（增殖激活）vs Max-Max（抑制）', { size: 13.5, fill: C.sub })
  b.text(56, 970, '顺式-反式互作网络构成真核调控「语法系统」：元件是词、因子是义、组合成句、组织特异为章', { size: 12.5, fill: C.mute })
}

export default scene({
  title: '反式作用因子：结构域与家族',
  subtitle: '模块化的 DNA 结合域与激活域——七大结合域家族和二聚化编码的组合调控词汇',
  draw,
})
