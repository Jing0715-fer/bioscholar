// xc ch8-s1 同晶置换法（Task 4-d）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、相位圆（Harker 作图） ============
  b.panel(30, 132, 660, 430, { title: '一、相位圆（Harker 作图）：三边已知，相位可解' })
  const ox = 150, oy = 370, r1 = 125, rFH = 80, r2 = 145
  const hx = ox + rFH, hy = oy
  // 两个圆
  b.circle(ox, oy, r1, { fill: 'none', stroke: C.acc, sw: 2 })
  b.circle(hx, hy, r2, { fill: 'none', stroke: C.pro, sw: 2 })
  // 第二衍生物圆（虚线）
  b.circle(215, 315, 92, { fill: 'none', stroke: C.enz, sw: 2, dash: '7 5' })
  // F_H 已知矢量
  b.arrow(ox, oy, hx, hy, { stroke: C.warn, sw: 3, marker: 'warn' })
  b.ctext((ox + hx) / 2, hy + 22, 'F_{H}（由重原子坐标算出，完全已知）', { size: 10, weight: 700, fill: C.warnD })
  // 两个交点候选
  b.arrow(ox, oy, 156, 245, { stroke: C.dna, sw: 3, marker: 'dna' })
  b.arrow(ox, oy, 156, 495, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.circle(156, 245, 6, { fill: C.dna })
  b.circle(156, 495, 6, { fill: C.bad })
  b.ctext(196, 240, 'φ_{1}（真解）', { size: 11, weight: 700, fill: C.dnaD })
  b.ctext(196, 500, 'φ_{2}（二义解）', { size: 11, weight: 700, fill: C.bad })
  b.circle(ox, oy, 4, { fill: C.ink })
  b.ctext(ox, oy + 16, '原点 O', { size: 10, fill: C.mute })
  b.ctext(ox - 52, oy - 96, '以 O 为心、|F_{P}| 为半径', { size: 9.5, fill: C.accD })
  b.ctext(hx + 60, hy - 120, '以 F_{H} 终点为心、|F_{PH}| 为半径', { size: 9.5, fill: C.proD })
  b.ctext(258, 288, '第二衍生物圆', { size: 9.5, weight: 700, fill: C.enzD })
  // 右侧解说
  b.wtext(424, 190, '分别测得母体振幅 |F_{P}| 与衍生物振幅 |F_{PH}|，再定位 F_{H}，三个矢量满足加法关系 F_{PH} = F_{P} + F_{H}——两边长度与第三边已知，相位可解。代数化即余弦定理逐反射解三角形：如 |F_{P}| = 100、|F_{PH}| = 120、|F_{H}| = 50，三边既定，角可解。', { size: 10.5, fill: C.sub, maxW: 246, lh: 15 })
  b.wtext(424, 300, 'SIR 的宿命缺陷：两圆通常交于两点，相位二义。破局靠 MIR——第二个衍生物的相位圆（虚线）与第一个交于同一点 φ_{1}，二义性消解；再叠加反常信号（MIRAS）约束更强。Hendrickson 与 Lattman 1970 年把各来源相位证据统一成概率曲线；FOM 量化可信度，MIR 常达 0.5–0.8。', { size: 10.5, fill: C.sub, maxW: 246, lh: 15 })

  // ============ 二、浸泡化学与同晶性 ============
  b.panel(710, 132, 660, 430, { title: '二、浸泡化学：把重原子送进溶剂通道' })
  // 浸泡示意
  b.rect(730, 186, 300, 148, { fill: '#e0f2fe', fillOp: 0.5, stroke: C.sub, sw: 1.8, rx: 10 })
  b.ctext(880, 204, '母液＋重原子化合物', { size: 10.5, weight: 700, fill: C.sub })
  // 晶体
  b.polygon([[790, 262], [846, 238], [906, 250], [926, 296], [884, 322], [818, 316]], { fill: '#ffffff', stroke: C.dna, sw: 2.2 })
  // 溶剂通道
  b.line(800, 268, 916, 306, { stroke: C.acc, sw: 1.6, dash: '5 4' })
  b.line(798, 292, 900, 250, { stroke: C.acc, sw: 1.6, dash: '5 4' })
  // 化合物离子
  b.ion(754, 240, 'Pt', { r: 12, fill: C.warnL, stroke: C.warn, size: 10 })
  b.ion(754, 286, 'Hg', { r: 12, fill: C.enzL, stroke: C.enz, size: 10, tfill: C.enzD })
  b.arrow(768, 244, 806, 262, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.arrow(768, 282, 800, 288, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.ctext(866, 342, '化合物沿溶剂通道扩散、与特定残基配位', { size: 9.5, fill: C.mute })
  // 三主轴
  b.text(1046, 196, '条件扫描三主轴：', { size: 11, weight: 700, fill: C.ink })
  const axis3 = (y: number, t: string) => b.tag(1150, y, t, { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 8 })
  axis3(216, '浓度 0.1–10 mM')
  axis3(246, '时间 数分钟到数天')
  axis3(276, 'pH（决定残基质子化）')
  b.wtext(1046, 306, '浸泡即化学：还原性 DTT 与 TCEP 会抢先螯合汞铂（浸泡前须透析除去），缓冲液本身也可能螯合重金属。批次组织：多颗晶体、多化合物同批扫描，衍射预筛先行淘汰——「浸泡后晶胞不变且仍衍射」者才值得收数；产出率常在三成上下，备料按失败率放大。', { size: 10, fill: C.sub, maxW: 306, lh: 14 })
  b.wtext(1046, 376, '同晶性门槛：晶胞变化小于约 1%，且蛋白坐标不因浸泡而改变，F_{PH} = F_{P} + F_{H} 的加法才成立；镶嵌化恶化常是非同晶的前兆，先于晶胞膨胀出现。', { size: 10, fill: C.mute, maxW: 306, lh: 14 })
  // 化合物表
  b.table(730, 372, 620, {
    headers: ['化合物', '主要结合靶标', '备注'],
    colW: [160, 210, 250],
    rowH: 26,
    fontSize: 10,
    rows: [
      ['K_{2}PtCl_{4}', 'His、Met、Lys 侧链', '最常用的首试化合物'],
      ['HgAc_{2}、PCMBA', 'Cys（巯基）', '巯基亲和最强'],
      ['K[Au(CN)_{2}]', 'His、Cys', '线形小配体'],
      ['K_{2}HgI_{4}', 'His、酸性残基', '大体积碘配位'],
      ['稀土乙酸盐（Sm、Yb 等）', '酸性残基簇', '多点弱结合'],
    ],
  })

  // ============ 三、差值 Patterson ============
  b.panel(30, 572, 660, 390, { title: '三、差值 Patterson：峰稀疏可数，位点不用猜' })
  const dx = 70, dy = 630, dw = 250, dh = 250
  b.rect(dx, dy, dw, dh, { fill: '#ffffff', stroke: C.sub, sw: 1.8, rx: 6 })
  // Harker 截面（v=0 横带）
  b.rect(dx, dy + dh * 0.44, dw, dh * 0.12, { fill: C.warnL, stroke: C.warn, sw: 1.3 })
  b.ctext(dx + dw / 2, dy + dh + 18, 'Harker 截面（v = 0）', { size: 9.5, weight: 700, fill: C.warnD })
  // 原点峰
  b.circle(dx, dy, 11, { fill: C.ink, fillOp: 0.85 })
  b.ctext(dx + 16, dy + 14, '原点峰', { size: 9, fill: C.mute })
  // 自峰（Harker 面上，2 个位点各一）
  b.circle(dx + dw * 0.36, dy + dh * 0.5, 9, { fill: C.warn, fillOp: 0.85, stroke: C.warnD, sw: 1.2 })
  b.circle(dx + dw * 0.78, dy + dh * 0.48, 9, { fill: C.warn, fillOp: 0.85, stroke: C.warnD, sw: 1.2 })
  b.ctext(dx + dw * 0.36, dy + dh * 0.5 - 14, '2x', { size: 9.5, weight: 700, fill: C.warnD })
  // 交叉峰（± 对称）
  b.circle(dx + dw * 0.62, dy + dh * 0.16, 8, { fill: C.acc, fillOp: 0.8, stroke: C.accD, sw: 1.1 })
  b.circle(dx + dw * 0.38, dy + dh * 0.84, 8, { fill: C.acc, fillOp: 0.8, stroke: C.accD, sw: 1.1 })
  b.ctext(dx + dw * 0.66, dy + dh * 0.13, '交叉峰 ±u_{12}', { size: 9.5, weight: 700, fill: C.accD })
  b.wtext(346, 626, '系数 (|F_{PH}| − |F_{P}|)^{2} 综合——两套晶体的差值里几乎只剩重原子的影子。重原子数目少（1–8 个位点属常规），向量峰稀疏可数，2–3 Å 数据上常可目视解读；SHELXD 的 Patterson 解读模式几分钟出解。', { size: 10.5, fill: C.sub, maxW: 316, lh: 15 })
  b.wtext(346, 706, '位点读取从 Harker 截面开始（第 7 章的方法照搬）：截面上寥寥数峰对应经对称操作联系的重原子对（C2 中即向量 (2x, 0, 2z)），几个峰即可锁定全部坐标——位点坐实，相位圆三角形三边齐备。', { size: 10.5, fill: C.sub, maxW: 316, lh: 15 })
  b.wtext(346, 792, '误差账本：非同晶性往往比测量噪声更重——晶胞差 1% 在 3 Å 反射上即可引入数个百分点的系统振幅差；重原子部分占据（occupancy 低于 1）使 |F_{H}| 被系统性高估、三边失配，按位点精修占有率是对策。', { size: 10.5, fill: C.mute, maxW: 316, lh: 15 })

  // ============ 四、SIR 二义根源与二十年窄门 ============
  b.panel(710, 572, 660, 390, { title: '四、对映反转的镜像图与同晶置换的二十年' })
  // 两个镜像密度示意
  const helix = (cx: number, cy: number, mirror: number) => {
    const rot = -14 * mirror
    b.els.push(`<ellipse cx="${cx}" cy="${cy}" rx="74" ry="20" fill="${C.dnaL}" fill-opacity="0.75" stroke="${C.dna}" stroke-width="2.2" transform="rotate(${rot} ${cx} ${cy})"/>`)
    for (let i = -2; i <= 2; i++) {
      const px = cx + i * 26, py = cy - 16 * mirror
      b.circle(px + 8 * mirror, py + Math.abs(i) * 2, 5, { fill: C.pro, fillOp: 0.85 })
    }
  }
  helix(830, 668, 1)
  b.ctext(830, 622, '真图：右手 α 螺旋', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(830, 712, '侧链齿轮咬向一侧', { size: 9.5, fill: C.mute })
  b.arrow(920, 668, 1000, 668, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(960, 652, '亚结构坐标整体取负', { size: 9.5, weight: 700, fill: C.ink })
  helix(1070, 668, -1)
  b.ctext(1070, 622, '镜像图：螺旋全部反向', { size: 10.5, weight: 700, fill: C.badD })
  b.ctext(1070, 712, '蛋白天然手性，一眼识破', { size: 9.5, fill: C.mute })
  b.wtext(1176, 640, '手性空间群里，重原子亚结构坐标的对映反转给出另一套同样自洽的解，两套相位分别综合出互为镜像的电子密度图——SIR 二义的更深根源。操作纪律：各衍生物独立定位、统一标度，相位按概率组合而非取单值。', { size: 10, fill: C.sub, maxW: 178, lh: 14.5 })
  b.wtext(730, 748, '原理一望即知：一个 Hg 约 80 个电子，对硫的 16 个——重原子超强散射在结构因子上叠加一个可计算的矢量 F_{H}。这条窄门整整推了二十年才敞开，同晶置换也由此成为首个「为定相而做」的蛋白化学工程。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.timelineH(740, 880, 560, [
    { at: 0.04, label: '1954', sub: 'Hg／Ag 衍生物', above: true },
    { at: 0.26, label: '1956', sub: '相位理论' },
    { at: 0.48, label: '1958', sub: '肌红蛋白 6 Å', above: true },
    { at: 0.70, label: '1960', sub: '推进到 2 Å' },
    { at: 0.92, label: '1962', sub: '共享诺贝尔奖', above: true },
  ], { title: '' })
}

export default scene({
  title: '同晶置换法：让重原子替你看相位',
  subtitle: 'F_{PH}=F_{P}+F_{H} 三边解相位；SIR 两圆二义、MIR 与反常破局（FOM 0.5–0.8）；差值 Patterson 定位 1–8 个位点；同晶性门槛：晶胞变化小于约 1%',
  draw,
})
