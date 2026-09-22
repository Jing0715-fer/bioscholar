// xc ch8-s2 反常散射与 SAD/MAD 定相（Task 4-d）
import { scene, C, B } from '../../lib'

const sig = (x: number) => 1 / (1 + Math.exp(-x))

const draw = (b: B) => {
  // ============ 一、f′ 与 f″ 吸收边曲线 ============
  b.panel(30, 132, 660, 430, { title: '一、吸收边上的 f′ 与 f″（以 Se K 边为例）' })
  const gx = 60, gw = 300, gTop = 200, gBot = 530 // 图区
  const yOf = (v: number) => gBot - ((v + 9.5) / 14) * (gBot - gTop)
  b.rect(gx, gTop, gw, gBot - gTop, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  b.line(gx, yOf(0), gx + gw, yOf(0), { stroke: C.mute, sw: 1.4 })
  ;[[-8, '−8'], [-4, '−4'], [0, '0'], [2, '2'], [4, '4']].forEach(([v, lab]) => {
    b.line(gx - 5, yOf(v as number), gx, yOf(v as number), { stroke: C.sub, sw: 1.6 })
    b.text(gx - 9, yOf(v as number) + 4, lab as string, { size: 10.5, fill: C.mute, anchor: 'end' })
  })
  // f″ 曲线（手工控制点）
  const fppPts: [number, number][] = [[0, 0.45], [0.30, 0.48], [0.38, 0.55], [0.40, 1.6], [0.42, 3.8], [0.46, 3.4], [0.55, 3.15], [0.70, 2.95], [0.85, 2.85], [1, 2.75]]
  b.spline(fppPts.map(([t, v]) => [gx + t * gw, yOf(v)] as [number, number]), { stroke: C.enz, sw: 2.8 })
  // f′ 曲线
  const fpPts: [number, number][] = [[0, -0.6], [0.30, -0.7], [0.38, -1.2], [0.41, -4.5], [0.445, -9.0], [0.50, -7.6], [0.60, -5.8], [0.75, -5.0], [1, -4.4]]
  b.spline(fpPts.map(([t, v]) => [gx + t * gw, yOf(v)] as [number, number]), { stroke: C.acc, sw: 2.8 })
  b.legend(gx + 12, gTop + 20, [['f″（吸收项）', C.enz], ['f′（色散项）', C.acc]], { size: 11 })
  // 三波长标记
  const mark = (t: number, name: string, note: string, color: string) => {
    const mx = gx + t * gw
    b.line(mx, gTop + 6, mx, gBot - 4, { stroke: color, sw: 1.4, dash: '5 4' })
    b.ctext(mx, gBot + 20, name, { size: 10.5, weight: 700, fill: color })
    b.ctext(mx, gBot + 38, note, { size: 9, fill: C.mute })
  }
  mark(0.42, '峰', 'f″ 最大·0.9795 Å', C.enzD)
  mark(0.50, '拐点', 'f′ 最低', C.accD)
  mark(0.88, '远边', '对照波长', C.proD)
  b.ctext(gx + gw / 2, gBot + 60, '光子能量（自左向右升高，跨越 Se K 吸收边）／纵轴单位：电子', { size: 10.5, weight: 600, fill: C.sub })
  // 右侧解说
  b.tag(520, 214, 'f = f_{0} + f′ + i·f″', { fill: C.accL, stroke: C.acc, size: 13, weight: 700, tfill: C.accD, pad: 10 })
  b.wtext(386, 252, 'f″ 正比该波长的吸收截面，在吸收边处升起一座峰——Se 的 K 边上峰值约 3.8 个电子；f′ 是吸收的希尔伯特变换伴随物，在边处急剧下陷（拐点），典型可到 −8 至 −10 个电子。', { size: 10.5, fill: C.sub, maxW: 268, lh: 15 })
  b.wtext(386, 330, '物理图像：束缚电子像一枚共振频率落在吸收边附近的阻尼振子，入射波驱动它再辐射；两者都在吸收边附近才显著，远离吸收边时反常贡献趋零——这正是波长策略的物理基础。', { size: 10.5, fill: C.sub, maxW: 268, lh: 15 })
  b.wtext(386, 412, '峰（peak，Se 约 0.9795 Å）反常信号最强，SAD 只收这一处；拐点（inflection）与远边（remote）是 MAD 的全套布阵，多波长之间的差异提供冗余约束。', { size: 10.5, fill: C.mute, maxW: 268, lh: 15 })

  // ============ 二、Bijvoet 差异 ============
  b.panel(710, 132, 660, 430, { title: '二、Bijvoet 差异：弗里德定律的破口（矢量实算）' })
  const ox = 880, oy = 400, k = 1.3
  b.line(ox - 150, oy, ox + 190, oy, { stroke: C.faint, sw: 1.1 })
  b.line(ox, oy - 120, ox, oy + 90, { stroke: C.faint, sw: 1.1 })
  // 正常散射 P
  b.arrow(ox, oy, ox + 130, oy, { stroke: C.mute, sw: 2.4, marker: 'mute' })
  b.ctext(ox + 65, oy + 20, '正常散射 Σ(f_{0}+f′)', { size: 9.5, fill: C.mute })
  // F+ 合矢量（P + q + iq″）
  b.arrow(ox, oy, ox + 129.2, oy - 45.5, { stroke: C.dna, sw: 3.2, marker: 'dna' })
  b.ctext(ox + 150, oy - 52, '|F_{+}| = 105', { size: 11, weight: 700, fill: C.dnaD })
  // F− 合矢量
  b.arrow(ox, oy, ox + 169.8, oy + 22.1, { stroke: C.bad, sw: 3.2, marker: 'bad' })
  b.ctext(ox + 192, oy + 30, '|F_{−}| = 132', { size: 11, weight: 700, fill: C.badD })
  // 小分量
  b.arrow(ox + 130, oy, ox + 149.5, oy - 34, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(ox + 149.5, oy - 34, ox + 129.2, oy - 45.5, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.arrow(ox + 130, oy, ox + 149.5, oy + 34, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(ox + 149.5, oy + 34, ox + 169.8, oy + 22.1, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.wtext(730, 470, '示例（任意单位）：正常散射在 Friedel 对 h 与 −h 中互为共轭、长度相同；反常原子贡献两个小分量——实部（蓝）随 h 取负而镜像、f″ 项（玫红）自带 90° 相移且不随之翻转，于是两个合矢量 |F_{+}| 与 |F_{−}| 长度不等。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 530, '量级必须心里有数：SeMet 蛋白在峰波长下 Bijvoet 差异典型仅 3%–6%，含硫蛋白更低至 1% 上下——这正是反常数据须高冗余（7–10 倍以上）且吸收修正须波长特异的定量理由。手性红利：Bijvoet 差异的符号模式与亚结构手性一一对应，Flack 参数以 0 与 0.5 两个读数量化裁决（1983 年）；Bijvoet 本人 1949–1955 年间在酒石酸钠铷上首次以衍射测定绝对构型。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 三、SeMet 与反常元素账本 ============
  b.panel(30, 572, 660, 390, { title: '三、SeMet：实验定相的旗舰（Hendrickson 等 1990）' })
  // 蛋白链与 SeMet 灯塔
  const chY = 650
  b.rnaW(70, chY, 320, { amp: 9, stroke: C.pro })
  const seX = [110, 160, 205, 255, 300, 350]
  seX.forEach((x, i) => {
    if (i % 3 !== 2) b.circle(x, chY + (i % 2 === 0 ? -12 : 10), 7, { fill: C.enzL, stroke: C.enz, sw: 2 })
  })
  b.ctext(230, 626, '蛋白链中的每个 Met 都换成 SeMet——反常灯塔', { size: 10, weight: 700, fill: C.enzD })
  b.wtext(60, 692, '两条掺入路线：甲硫氨酸营养缺陷型菌株（E. coli B834）在无 Met 培养基中以 SeMet 替代；或代谢抑制法（过量供给 Leu、Ile、Thr、Phe 抑制 Met 内源合成）——掺入率可超过 95%。Se 的常规散射与硫几乎同构（f_{0} 相近），蛋白结构与功能基本不受扰动。', { size: 10.5, fill: C.sub, maxW: 360, lh: 15 })
  b.wtext(60, 776, '实务要点：亚结构须约 4–5 个以上位点才有像样信号，Met 极少的蛋白须定点引入 Met 突变；SeMet 晶体常更脆弱，剂量要留余量；表达量与掺入率须在质谱上验收。真核对策：昆虫细胞与哺乳动物细胞的甲硫氨酸缺乏培养基，掺入率虽不及原核，配高冗余 SAD 常已够用。', { size: 10.5, fill: C.mute, maxW: 360, lh: 15 })
  // f″ 元素账本条形图
  b.rect(440, 604, 236, 276, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(558, 622, 'f″ 峰值账本（电子数）', { size: 11, weight: 700, fill: C.ink })
  const barsData = [3.8, 3.8, 2.5, 0.9, 0.56, 0.06]
  const barsLab = ['Se K 边', 'Br K 边', 'Zn K 边', 'S 长波', 'S CuKα', 'S 1 Å']
  const barsVal = ['3.8', '3.8', '2.5', '0.7–1.1', '0.56', '0.06']
  barsData.forEach((v, i) => {
    const by = 640 + i * 36
    const bw2 = Math.max((v / 3.8) * 150, 3)
    b.rect(452, by, bw2, 16, { fill: i < 3 ? C.enzL : C.accL, stroke: i < 3 ? C.enz : C.acc, sw: 1.4, rx: 3 })
    b.text(456 + bw2 + 6, by + 13, barsVal[i], { size: 10, weight: 700, fill: C.sub })
    b.text(444, by + 13, barsLab[i], { size: 9.5, fill: C.mute, anchor: 'end' })
  })
  b.wtext(448, 856, '常规 1 Å 波长下 S 的 f″ 仅约 0.06 e^{-}；含硫 SAD 靠长波长（1.9–2.7 Å）放大信号，代价是更大的吸收与空气衰减，须真空或氦气光路。', { size: 10, fill: C.sub, maxW: 236, lh: 14 })
  b.wtext(60, 886, '核酸与抗体另有捷径：溴化脱氧核苷（BrdU）把 Br 送到 K 边（约 0.92 Å）享受类 Se 信号；碘化抗体 Fab 的 I-SAD 亦是经典；金属蛋白天生带灯——Fe、Zn、Cu 的边各有打法。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })

  // ============ 四、SAD 对 MAD ============
  b.panel(710, 572, 660, 390, { title: '四、SAD 对 MAD：三波长布阵与现代取舍' })
  // 三波长能量条
  b.text(730, 622, 'MAD 的三波长布阵（各收一整套完整数据）：', { size: 11, weight: 700, fill: C.ink })
  const wpts: [string, string, string][] = [['峰', 'f″ 最大', C.enz], ['拐点', 'f′ 最低', C.acc], ['远边', '对照', C.proD]]
  wpts.forEach(([t, s, c], i) => {
    b.rect(730 + i * 210, 636, 180, 40, { fill: '#ffffff', stroke: c, sw: 1.8, rx: 8 })
    b.ctext(820 + i * 210, 652, t, { size: 11, weight: 700, fill: c })
    b.ctext(820 + i * 210, 668, s, { size: 9.5, fill: C.mute })
  })
  // 轮转收集示意
  b.text(730, 706, '轮转收集：各波长轮流逐帧，损伤均匀分摊', { size: 11, weight: 700, fill: C.ink })
  const cols = [C.enz, C.acc, C.proD]
  for (let i = 0; i < 15; i++) {
    b.rect(730 + i * 26, 720, 22, 18, { fill: cols[i % 3], fillOp: 0.75, stroke: C.line, sw: 0.8, rx: 3 })
  }
  b.legend(1180, 729, [['峰', C.enz], ['拐点', C.acc], ['远边', C.proD]], { size: 9.5, gap: 10 })
  b.table(730, 762, 620, {
    headers: ['方案', '收集', '代价与地位'],
    colW: [92, 218, 310],
    rowH: 40,
    fontSize: 10.5,
    rows: [
      ['SAD', '单波长（峰）＋高冗余＋密度修饰', '剂量省；符号二义由密度修饰或模型信息裁决，已成常态'],
      ['MAD', '峰、拐点、远边各一套', '约束超定、相位天花板更高；剂量与时间翻倍，渐成精装选项'],
    ],
  })
  b.wtext(730, 906, '纪律两条：能量读数须校准——偏差区区 5 eV 就可能错过 f″ 峰顶，正式实验前以荧光扫描（XANES）实测定位吸收边；判据先行——数据还原阶段看反常信噪比与 CC_{anom}，ΔF/σ 峰值壳层明显高于 1 才值得进入定相流程。MAD 理论由 Karle 1980 年给出，Hendrickson 等 1985 年完成首个蛋白应用。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
}

export default scene({
  title: '反常散射与 SAD/MAD 定相',
  subtitle: 'f=f_{0}+f′+if″：Se K 边 0.9795 Å 处 f″ 约 3.8 e^{-}、f′ 陷至 −8 至 −10；Bijvoet 差异仅 3–6%（含硫约 1%），故须 7–10 倍冗余；SAD 单峰配密度修饰成常态、MAD 三波长剂量翻倍',
  draw,
})
