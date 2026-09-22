// xc ch6-s3 缩放、吸收修正与合并（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、缩放模型：批间 scale 与剂量 B 衰减 ============
  b.panel(30, 132, 660, 430, { title: '一、缩放模型：批间 scale 与剂量 B 衰减' })
  const fx = (x: number, w: number, main: string, sub: string, c: string) => {
    b.rect(x, 168, w, 44, { fill: C.panelB, stroke: c, sw: 1.4, rx: 7 })
    b.ctext(x + w / 2, 187, main, { size: 11.5, weight: 700, fill: C.ink })
    b.ctext(x + w / 2, 203, sub, { size: 9.5, fill: C.mute })
  }
  fx(52, 160, '几百帧 I_{raw}', '流强·体积·损伤', C.mute)
  b.arrow(216, 190, 236, 190, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  fx(240, 254, '逐帧 s_{j} 与 B(D) 衰减项', '等效反射一致性最小二乘', C.acc)
  b.arrow(496, 190, 516, 190, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  fx(520, 158, '同一把尺 I_{corr}', '缩放曲线即损伤时间轴', C.ok)
  // 双轴曲线：I(D) 指数衰减 + B(D) 线性爬升
  const gx0 = 90, gx1 = 640, gy = 480
  b.line(gx0, gy, gx1, gy, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.line(gx0, gy, gx0, 252, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.line(gx1, gy, gx1, 252, { stroke: C.sub, sw: 1.4 })
  const pyI = (v: number) => gy - (v - 0.3) / 0.7 * 220
  const pyB = (v: number) => gy - (v / 15) * 220
  const px = (d: number) => gx0 + (d / 30) * 550
  ;[1.0, 0.8, 0.6, 0.4].forEach(v => {
    b.line(gx0, pyI(v), gx1, pyI(v), { stroke: C.faint, sw: 0.8, dash: '3 4', opacity: 0.5 })
    b.etext(84, pyI(v) + 4, v.toFixed(1), { size: 9.5, fill: C.mute })
  })
  ;[15, 10, 5].forEach(v => b.text(646, pyB(v) + 4, String(v), { size: 9.5, fill: C.mute }))
  b.etext(84, 244, 'I(D)/I_{0}', { size: 9.5, fill: C.mute, weight: 600 })
  b.text(644, 244, 'B(Å^{2})', { size: 9.5, fill: C.mute, weight: 600 })
  ;[0, 10, 20, 30].forEach(d => {
    b.line(px(d), gy, px(d), gy + 5, { stroke: C.sub, sw: 1.2 })
    b.ctext(px(d), gy + 19, String(d), { size: 10, fill: C.mute })
  })
  // 批次分隔（按剂量分批）
  ;[10, 20].forEach(d => b.line(px(d), 268, px(d), gy, { stroke: C.faint, sw: 1, dash: '2 5', opacity: 0.75 }))
  b.ctext(px(5), 270, '批 1', { size: 9.5, fill: C.mute })
  b.ctext(px(15), 270, '批 2', { size: 9.5, fill: C.mute })
  b.ctext(px(25), 270, '批 3', { size: 9.5, fill: C.mute })
  // I(D) = I(0) e^{-mu D}
  const ipts: [number, number][] = [0, 5, 10, 15, 20, 25, 30].map(d => [px(d), pyI(Math.exp(-0.03 * d))] as [number, number])
  b.spline(ipts, { stroke: C.warn, sw: 2.6 })
  // B(D) = B0 + beta D
  b.polyline([[px(0), pyB(5)], [px(30), pyB(14)]] as [number, number][], { stroke: C.acc, sw: 2.4 })
  // 1/e 参考线
  b.line(gx0, pyI(Math.exp(-1)), gx1, pyI(Math.exp(-1)), { stroke: C.bad, sw: 1.3, dash: '6 4', opacity: 0.75 })
  b.text(306, 473, '1/e = 0.368：30–50 MGy 掉一个 e 因子（μ = 0.02–0.04 MGy^{−1}）', { size: 9.5, fill: C.bad, weight: 600 })
  ;[0, 10, 20, 30].forEach(d => {
    b.circle(px(d), pyI(Math.exp(-0.03 * d)), 3.2, { fill: C.warn })
    b.circle(px(d), pyB(5 + 0.3 * d), 3.2, { fill: C.acc })
  })
  b.ctext(200, 513, '累计剂量 D (MGy)', { size: 11, weight: 600, fill: C.sub })
  b.legend(330, 513, [['I(D) = I(0)e^{−μD}', C.warn], ['B(D) = B_{0} + βD', C.acc]], { size: 11.5, gap: 18 })
  b.wtext(52, 538, 'μ 典型 0.02–0.04 MGy^{−1}、β 每 MGy 十分之几 Å^{2}，两条描述等价（指数与 sin^{2}θ/λ^{2} 角度展开）；逐帧参数噪声大会把涨落合法化，按剂量分批加批内样条又可能抹平 top-up 注入的真实跳变——程序多以剂量为分批轴折中。', { size: 10, fill: C.sub, maxW: 616, lh: 13.5 })

  // ============ 二、各向异性缩放与吸收修正 ============
  b.panel(710, 132, 660, 430, { title: '二、各向异性缩放与吸收修正' })
  b.ctext(885, 184, '吸收的签名：花瓣样弥散', { size: 13, weight: 700, fill: C.ink })
  const rose: [number, number][] = []
  for (let i = 0; i <= 96; i++) {
    const th = (i / 96) * Math.PI * 2
    const r = 44 + 27 * Math.cos(4 * th)
    rose.push([885 + r * Math.cos(th), 302 + r * Math.sin(th)])
  }
  b.polygon(rose, { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 2 })
  b.circle(885, 302, 2.6, { fill: C.enz })
  b.ctext(885, 306, '〈I〉', { size: 9.5, fill: C.enzD, weight: 700 })
  b.ctext(885, 392, '等效反射弥散图（偏差随 φ 与 2θ 系统变化）', { size: 10, fill: C.mute })
  b.wtext(726, 414, '经验法以等效反射间的系统偏差反推吸收面（球谐函数拟合，4–5 阶足矣）；阶数过高会把真实强度差异也吸进吸收面——对反常数据尤须以正交性约束。', { size: 10, fill: C.sub, maxW: 300, lh: 14 })
  b.ctext(1205, 184, '各向异性缩放：椭球 B 张量', { size: 13, weight: 700, fill: C.ink })
  b.ellipse(1205, 300, 88, 40, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 2 })
  b.line(1113, 300, 1297, 300, { stroke: C.acc, sw: 1, dash: '5 4', opacity: 0.65 })
  b.line(1205, 254, 1205, 346, { stroke: C.acc, sw: 1, dash: '5 4', opacity: 0.65 })
  b.ctext(1205, 248, 'B_{33} = 22 Å^{2}', { size: 10, fill: C.acc, weight: 700 })
  b.etext(1108, 318, 'B_{11} = 38 Å^{2}', { size: 10, fill: C.acc, weight: 700 })
  b.ctext(1205, 296, '衰减最快方向', { size: 10, weight: 600, fill: C.accD })
  b.ctext(1205, 313, '常垂直于束流', { size: 9.5, fill: C.mute })
  b.tag(1205, 378, '主轴差过十几 Å^{2}：按方向截断', { fill: C.badL, stroke: C.bad, tfill: C.bad, size: 10.5, weight: 700, pad: 10 })
  b.ctext(1205, 410, '六参数对称张量：三对角 + 三交叉项', { size: 10.5, fill: C.sub })
  b.wtext(726, 468, '物理路线按晶体几何与线性吸收系数数值积分（近年借照片重建晶体轮廓复活）；经验法不问几何只问效果。反常数据的吸收修正必须波长特异：Bijvoet 差仅百分之几、与波长间吸收差同量级，MAD 各波长须分别建模，否则吸收伪影直接冒充反常信号。', { size: 10, fill: C.sub, maxW: 616, lh: 14 })

  // ============ 三、合并与离群剔除 ============
  b.panel(30, 592, 660, 370, { title: '三、合并与离群剔除' })
  b.rect(72, 634, 306, 40, { fill: C.dnaL, stroke: C.dna, sw: 1.5, rx: 7 })
  b.ctext(225, 658, '反射的 N 次测量 I_{i}（各带 σ_{i}）', { size: 11, weight: 700, fill: C.dnaD })
  b.arrow(225, 676, 225, 690, { stroke: C.dna, sw: 1.6, marker: 'dna' })
  b.rect(72, 698, 306, 58, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(225, 720, 'w_{i} = 1/σ_{i}^{2} 方差加权', { size: 11, weight: 700, fill: C.ink })
  b.ctext(225, 742, '〈I〉 = Σw_{i}I_{i}/Σw_{i}，σ = √(1/Σw_{i})', { size: 10.5, fill: C.sub })
  b.arrow(225, 758, 225, 772, { stroke: C.dna, sw: 1.6, marker: 'dna' })
  b.rect(72, 780, 306, 36, { fill: C.okL, stroke: C.ok, sw: 1.5, rx: 7 })
  b.ctext(225, 802, '冗余加倍，σ 缩至 1/√2', { size: 11, weight: 700, fill: C.okD })
  b.wtext(52, 838, 'Bijvoet 对的去留须事先决定：常规数据把 F(h) 与 F(−h) 一并平均（弗里德定律）；反常数据保持不合并，I^{+} 与 I^{−} 分别合并留给 SAD/MAD；σ 还须按等效反射的实际弥散重加权，否则下游一切按 σ 加权的环节都会失真。', { size: 10, fill: C.sub, maxW: 330, lh: 14 })
  // 右：离群剔除散点
  b.ctext(545, 640, '正态偏差检验揪出离群', { size: 13, weight: 700, fill: C.ink })
  b.line(440, 850, 440, 662, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.line(440, 850, 662, 850, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.rect(442, 756, 218, 28, { fill: C.okL, fillOp: 0.55 })
  b.line(440, 770, 660, 770, { stroke: C.sub, sw: 1.5, dash: '6 4' })
  b.etext(658, 765, '〈I〉', { size: 10, fill: C.sub, weight: 600 })
  ;[[458, 762], [482, 775], [506, 759], [528, 772], [548, 764], [566, 778], [588, 767], [632, 781]].forEach(([x, y]) =>
    b.circle(x, y, 3, { fill: C.dna }))
  b.line(604, 689, 604, 766, { stroke: C.bad, sw: 1.2, dash: '4 3' })
  b.circle(604, 685, 4, { fill: C.bad })
  b.circle(604, 685, 8, { stroke: C.bad, sw: 1.2, fill: 'none', dash: '3 3' })
  b.ctext(604, 669, '|z| ≈ 6σ', { size: 9.5, fill: C.bad, weight: 700 })
  b.tag(520, 700, 'z = (I_{i} − 〈I〉)/σ_{i}', { fill: C.badL, stroke: C.bad, tfill: C.bad, size: 10, weight: 700, pad: 8 })
  b.ctext(552, 874, '等效反射的各次测量', { size: 10, fill: C.mute })
  b.wtext(404, 896, '阈值默认 4–6σ，并随组内测量数与总检验次数作多重校正；程序迭代只剔组内最坏一个，总量设上限（百分之零点几），清单随报表输出——剔除是手术，不是屠戮。', { size: 10, fill: C.sub, maxW: 285, lh: 14 })

  // ============ 四、CC1/2 示意与三层级输出 ============
  b.panel(710, 592, 660, 370, { title: '四、CC1/2 示意与三层级输出' })
  b.rect(726, 640, 122, 44, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 7 })
  b.ctext(787, 658, 'N 次观测', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(787, 676, '组内随机对半', { size: 9, fill: C.mute })
  b.arrow(852, 662, 878, 662, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.rect(882, 618, 108, 34, { fill: C.dnaL, stroke: C.dna, sw: 1.5, rx: 6 })
  b.ctext(936, 639, '半组 A：I_{1}', { size: 10.5, weight: 700, fill: C.dnaD })
  b.rect(882, 672, 108, 34, { fill: C.rnaL, stroke: C.rna, sw: 1.5, rx: 6 })
  b.ctext(936, 693, '半组 B：I_{2}', { size: 10.5, weight: 700, fill: C.rnaD })
  b.arrow(994, 635, 1022, 654, { stroke: C.acc, sw: 1.5, marker: 'acc' })
  b.arrow(994, 689, 1022, 670, { stroke: C.acc, sw: 1.5, marker: 'acc' })
  b.rect(1026, 640, 130, 44, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 7 })
  b.ctext(1091, 658, '逐壳层相关', { size: 10.5, weight: 700, fill: C.ink })
  b.ctext(1091, 676, 'CC_{1/2}', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(1252, 662, 'CC_{1/2} = 0.143 即 CC* = 0.5', { fill: C.badL, stroke: C.bad, tfill: C.bad, size: 10, weight: 700, pad: 8 })
  b.ctext(1040, 712, '合并的三层级菜单', { size: 10.5, weight: 600, fill: C.sub })
  const card = (x: number, main: string, s1: string, s2: string, c: string, cl: string, cd: string) => {
    b.rect(x, 726, 198, 68, { fill: cl, stroke: c, sw: 1.5, rx: 7 })
    b.ctext(x + 99, 747, main, { size: 11.5, weight: 700, fill: cd })
    b.ctext(x + 99, 766, s1, { size: 9.5, fill: C.sub })
    b.ctext(x + 99, 782, s2, { size: 9.5, fill: C.mute })
  }
  card(726, '常规合并', '弗里德对一并平均', '供分子置换与常规精修', C.acc, C.accL, C.accD)
  card(948, 'anomalous 保留', 'I^{+} 与 I^{−} 分别合并', 'Bijvoet 差交 SAD/MAD', C.enz, C.enzL, C.enzD)
  card(1170, '质量护栏', 'CC_{anom} 与 ΔF/σ', '监控反常信号成色', C.warn, C.warnL, C.warnD)
  b.rect(726, 820, 400, 118, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(926, 844, 'MTZ（CCP4 生态标准格式）', { size: 11.5, weight: 700, fill: C.ink })
  b.text(744, 866, '反射指数 · 强度 I 与 σ · 批次（batch）记录', { size: 9.5, fill: C.sub })
  b.text(744, 884, '各壳层 R_{merge}、完整度、冗余、I/σ', { size: 9.5, fill: C.sub })
  b.text(744, 902, '每帧剂量、时间与角度写进元数据', { size: 9.5, fill: C.sub })
  b.text(744, 920, '按剂量重排与零剂量外推在此落地', { size: 9.5, fill: C.sub })
  b.arrow(1130, 879, 1158, 879, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.rect(1162, 842, 206, 74, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(1265, 864, '下游公共入口', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(1265, 886, '第 7 章分子置换', { size: 10, fill: C.sub })
  b.ctext(1265, 904, '第 8 章实验定相', { size: 10, fill: C.sub })
  b.ctext(1040, 954, '合并了弗里德对再想找回反常没有回头路——拿不准时宁可默认保留', { size: 10, fill: C.mute, weight: 600 })
}

export default scene({
  title: '缩放、吸收修正与合并：从几百帧到一把尺',
  subtitle: '批间 scale 加剂量 B 衰减（μ 约 0.02–0.04 MGy^{−1}）；椭球 B 张量与花瓣样吸收签名；方差加权合并、4–6σ 剔除离群；CC_{1/2} 分半示意；MTZ 衔接第 7、8 章',
  draw,
})
