// xc ch4-s4 衍射强度与结构因子（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、结构因子矢量合成 ============
  b.panel(30, 132, 660, 412, { title: '一、结构因子：晶胞内原子散射波的相干叠加' })
  b.ctext(330, 182, 'F(h) = Σ_{j} f_{j}·exp(2πi(h·r_{j}))', { size: 14, weight: 700, fill: C.ink })
  b.wtext(60, 206, '练手模型：一维晶胞两原子——A 位于 x＝0、B 位于 x＝1/4，散射力相同（各记 f）；B 的贡献带相位因子 exp(2πi·h/4)，随 h 每步旋转 90°。', { size: 10, fill: C.sub, maxW: 616, lh: 13.5 })
  const planes: Array<[number, string, string]> = [
    [60, 'h＝1：F＝f(1+i)', '|F|＝√2·f，相位 45°'],
    [250, 'h＝2：两项反相抵消', 'F＝0，反射消失'],
    [440, 'h＝4：两项同相', 'F＝2f'],
  ]
  for (const [x0, l1, l2] of planes) {
    b.line(x0 + 8, 400, x0 + 175, 400, { stroke: C.mute, sw: 1.5, marker: 'mute' })
    b.line(x0 + 30, 415, x0 + 30, 230, { stroke: C.mute, sw: 1.5, marker: 'mute' })
    b.ctext(x0 + 168, 416, 'Re', { size: 8.5, fill: C.mute })
    b.ctext(x0 + 12, 228, 'Im', { size: 8.5, fill: C.mute })
    b.ctext(x0 + 92, 434, l1, { size: 10.5, weight: 700, fill: C.ink })
    b.ctext(x0 + 92, 450, l2, { size: 9.5, fill: C.sub })
  }
  // h=1：矢量加法 f + if
  b.arrow(90, 400, 162, 400, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.arrow(162, 400, 162, 328, { stroke: C.pro, sw: 2.4, marker: 'pro' })
  b.arrow(90, 400, 162, 328, { stroke: C.bad, sw: 2.8, marker: 'bad' })
  b.path('M 114,400 A 24,24 0 0 0 107,383', { fill: 'none', stroke: C.bad, sw: 1.4 })
  b.ctext(126, 390, '45°', { size: 8.5, weight: 700, fill: C.bad })
  b.ctext(122, 414, 'f', { size: 9.5, weight: 700, fill: C.accD, italic: true })
  b.ctext(172, 366, 'f', { size: 9.5, weight: 700, fill: C.proD, italic: true })
  b.ctext(116, 356, 'F', { size: 10, weight: 700, fill: C.bad, italic: true })
  // h=2：反相抵消
  b.arrow(280, 400, 352, 400, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.arrow(352, 400, 280, 400, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.line(284, 394, 296, 406, { stroke: C.bad, sw: 2 })
  b.line(284, 406, 296, 394, { stroke: C.bad, sw: 2 })
  b.ctext(312, 414, 'f', { size: 9.5, weight: 700, fill: C.accD, italic: true })
  b.ctext(316, 388, '−f（反相）', { size: 8.5, weight: 700, fill: C.enzD })
  b.ctext(346, 376, 'F＝0', { size: 10.5, weight: 700, fill: C.bad })
  // h=4：同相相加
  b.arrow(470, 400, 542, 400, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.arrow(542, 400, 614, 400, { stroke: C.acc, sw: 2.4, marker: 'acc', dash: '6 4' })
  b.arrow(470, 400, 614, 400, { stroke: C.bad, sw: 2.8, marker: 'bad' })
  b.ctext(502, 414, 'f', { size: 9.5, weight: 700, fill: C.accD, italic: true })
  b.ctext(574, 414, 'f', { size: 9.5, weight: 700, fill: C.accD, italic: true })
  b.ctext(542, 388, 'F＝2f', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(60, 478, '同一对原子，振幅随 h 从 2f、√2f 到 0 起伏——原子间的相对位置就编码在这种消长里，这是「强度知道结构」的最小演示；每个反射的相位由原子坐标唯一决定，第 7 章的「相位问题」正从这里出发。蛋白晶胞虽无解析可算的 F，这个定义把「强度里的结构信息」规范化为可计算的量——结构因子就是晶胞电子密度在倒易空间的傅里叶系数。', { size: 10, fill: C.mute, maxW: 616, lh: 13.5 })

  // ============ 二、从强度到振幅与系统消光 ============
  b.panel(710, 132, 660, 412, { title: '二、从强度到振幅：修正链条与结构消光' })
  const chain: Array<[number, number, string, string]> = [
    [730, 140, '探测器计数', 'I(h) ∝ |F(h)|^{2}（正比于功率而非振幅）'],
    [894, 150, '除「装机税」', '洛伦兹·偏振·吸收·通量归一'],
    [1068, 130, '修正后严格成正比', 'I 与 |F|^{2}（第 6 章完成）'],
    [1222, 124, '开方取振幅', '得 |F|，相位无从恢复'],
  ]
  chain.forEach(([x, w, t, s], i) => {
    b.rect(x, 172, w, 56, { fill: i === 3 ? C.proL : C.accL, stroke: i === 3 ? C.pro : C.acc, sw: 1.5, rx: 8 })
    b.ctext(x + w / 2, 194, t, { size: 10.5, weight: 700, fill: i === 3 ? C.proD : C.accD })
    b.wtext(x + w / 2, 212, s, { size: 8.5, fill: C.sub, maxW: w - 14, lh: 11, anchor: 'middle' })
    if (i < 3) b.arrow(x + w + 3, 200, chain[i + 1][0] - 4, 200, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  })
  b.text(730, 254, '结构消光：格子的算术（体心 I 的完整推导）', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(730, 274, '体心格子每个原子 (x, y, z) 必伴随等价原子 (x+½, y+½, z+½)，两项相加——当 h+k+l 为奇数时方括号内两项之和为零，F 恒等于 0，反射整体消失。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })
  b.tag(1038, 316, 'F = f·exp(2πi(hx+ky+lz))·[1 + exp(iπ(h+k+l))]', { fill: C.panelB, stroke: C.sub, size: 11.5, weight: 700, tfill: C.ink, pad: 12 })
  b.wtext(730, 346, '消光规律由格子心性与对称元素分层贡献，是空间群判定的实验依据（第 2 章规律、第 6 章判定流程）；螺旋轴与滑移面的「半步平移」沿特征方向留下选择性指纹。洛伦兹修正的直觉：贴着反射球面滑行的格点满足时间长、被「重复计费」——修正即除掉这笔停留时间税。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })
  b.table(730, 380, 616, {
    headers: ['对称元素', '消光条件（示例）'],
    colW: [216, 400],
    rowH: 24,
    fontSize: 10.5,
    rows: [
      ['体心 I', 'h+k+l＝2n+1 消光'],
      ['面心 F', 'h、k、l 奇偶混杂消光'],
      ['C 底心', 'h+l＝2n+1 消光'],
      ['2_{1} 螺旋轴（沿 b）', '0k0 中 k 为奇者消光'],
      ['c 滑移面（垂直于 b）', 'h0l 中 l 为奇者消光'],
    ],
  })

  // ============ 三、温度因子 ============
  b.panel(30, 558, 660, 412, { title: '三、温度因子：热运动的低通滤波' })
  b.text(70, 600, '振幅衰减因子 exp(−B sin^{2}θ/λ^{2})，其中 B＝8π^{2}〈u^{2}〉（〈u^{2}〉为原子位移均方值）', { size: 10.5, weight: 700, fill: C.sub })
  const tx = 70, ty = 790, tw = 330, th = 170
  b.axis(tx, ty, tw, th, {
    xlabel: 'sin^{2}θ/λ^{2}（Å^{-2}）',
    xticks: [[0, '0'], [0.3, '0.15'], [0.6, '0.3'], [1, '0.5']],
    yticks: [[1, '1'], [0.5, '0.5'], [0, '0']],
  })
  b.curve(tx, ty, tw, th, [[0, 1], [0.1, 0.47], [0.2, 0.22], [0.4, 0.05], [0.6, 0.011], [0.8, 0.0025], [1, 0.0006]], { smooth: true, stroke: C.ok, sw: 2.6 })
  b.curve(tx, ty, tw, th, [[0, 1], [0.05, 0.47], [0.1, 0.22], [0.2, 0.05], [0.3, 0.011], [0.4, 0.0025]], { smooth: true, stroke: C.warn, sw: 2.6 })
  b.curve(tx, ty, tw, th, [[0, 1], [0.03, 0.47], [0.06, 0.22], [0.12, 0.05], [0.18, 0.011], [0.24, 0.0025]], { smooth: true, stroke: C.bad, sw: 2.6 })
  b.ctext(tx + 0.5 * tw, ty - 0.9 * th, 'B＝15', { size: 9.5, weight: 700, fill: C.okD })
  b.ctext(tx + 0.29 * tw, ty - 0.9 * th, 'B＝30', { size: 9.5, weight: 700, fill: C.warnD })
  b.ctext(tx + 0.15 * tw, ty - 0.9 * th, 'B＝50', { size: 9.5, weight: 700, fill: C.bad })
  b.ctext(tx + 0.72 * tw, ty - 0.55 * th, '高角被削平', { size: 9.5, weight: 700, fill: C.sub })
  b.rect(430, 620, 240, 88, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
  b.ctext(550, 642, 'B＝8π^{2}〈u^{2}〉', { size: 12, weight: 700, fill: C.ink })
  b.wtext(442, 664, 'B＝20 Å^{2} 对应 〈u^{2}〉约 0.25 Å^{2}，即均方根位移约 0.5 Å；蛋白质的 B 因子典型范围 15–50 Å^{2}，主链通常低于侧链，柔性环与表面赖氨酸可超过 60 Å^{2}。', { size: 9.5, fill: C.sub, maxW: 216, lh: 13 })
  b.table(410, 730, 270, {
    headers: ['部位', '典型 B（Å^{2}）'],
    colW: [165, 105],
    rowH: 28,
    fontSize: 10,
    rows: [
      ['蛋白内核与主链', '15–25'],
      ['一般侧链', '25–40'],
      ['表面环与末端', '40–60 以上'],
      ['配体与内部水', '20–35'],
    ],
  })
  b.wtext(60, 908, '一桩「不可分辨」：同一批原子以两种构象各偏一点位置，平均之后与「热得晃」在衍射上无法区分——精修中占有率与 B 强烈耦合（同升同降都能拟合强度），惯用固定其一解另一。100 K 低温冻结了大部分振动，读出的 B 更偏静态无序与镶嵌度的贡献——解读 B 因子时永远要问一句「这是热还是乱」。B 既是精修参数（第 10 章）也是模型质量的温度计（第 11 章）。', { size: 10, fill: C.mute, maxW: 616, lh: 13.5 })

  // ============ 四、傅里叶对偶、相位问题与弗里德定律 ============
  b.panel(710, 558, 660, 412, { title: '四、|F|^{2} 与电子密度：傅里叶对偶与相位问题' })
  // 左：电子密度
  b.rect(730, 610, 240, 200, { fill: '#ffffff', stroke: C.sub, sw: 1.8, rx: 8 })
  const blob = (cx: number, cy: number, rx: number, ry: number) => {
    for (const [k, op] of [[1, 0.25], [0.72, 0.45], [0.45, 0.85]] as [number, number][])
      b.ellipse(cx, cy, rx * k, ry * k, { fill: C.proL, fillOp: op, stroke: C.pro, sw: 1.2 })
  }
  blob(810, 680, 44, 36); blob(900, 668, 30, 26); blob(872, 748, 34, 26); blob(790, 745, 20, 17)
  b.ctext(850, 796, 'ρ(x)＝(1/V)·Σ_{h}F(h)·e^{−2πih·x}', { size: 9.5, weight: 700, fill: C.proD })
  b.ctext(850, 826, '晶胞内电子密度 ρ(x)（实空间）', { size: 10, weight: 700, fill: C.sub })
  // 中：傅里叶变换双箭头
  b.ctext(1015, 664, '傅里叶变换', { size: 10.5, weight: 700, fill: C.ink })
  b.arrow(985, 690, 1045, 690, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(1045, 714, 985, 714, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(1015, 748, '互为变换对', { size: 9, fill: C.mute })
  // 右：倒易格点与 F 矢量
  for (let i = 0; i < 7; i++) for (let j = 0; j < 5; j++)
    b.circle(1070 + i * 44, 630 + j * 40, 2.6, { fill: C.mute })
  b.circle(1158, 710, 4.5, { fill: C.ink })
  b.ctext(1158, 694, '原点', { size: 8, fill: C.mute })
  b.arrow(1158, 710, 1070, 630, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.arrow(1158, 710, 1246, 790, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.arrow(1158, 710, 1290, 630, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(1096, 618, 'F(h)', { size: 9.5, weight: 700, fill: C.enzD })
  b.ctext(1252, 802, 'F(−h)', { size: 9.5, weight: 700, fill: C.enzD })
  b.etext(1332, 690, '模相等', { size: 8.5, weight: 700, fill: C.bad })
  b.ctext(1200, 826, '倒易格点上的 F(h)：箭长＝|F|，方向＝相位', { size: 10, weight: 700, fill: C.sub })
  // 相位问题与弗里德定律
  b.rect(730, 846, 300, 96, { fill: C.proL, fillOp: 0.45, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(744, 868, '相位问题', { size: 11.5, weight: 700, fill: C.proD })
  b.wtext(744, 886, '探测器只记录 I ∝ |F|^{2}：开方得振幅，相位在记录过程中天然丢失——分子置换、同晶置换与反常散射三条路赎回相位（第 7、8 章）。', { size: 9.5, fill: C.sub, maxW: 272, lh: 13 })
  b.rect(1050, 846, 296, 96, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(1064, 868, '弗里德定律', { size: 11.5, weight: 700, fill: C.accD })
  b.wtext(1064, 886, '常规波长下 F(h)＝F*(−h)、模相等——h 与 −h 强度相等，衍射图自带中心对称；吸收边附近 f″ 将其打破，Bijvoet 差是 SAD/MAD 信号源（第 8 章）。', { size: 9.5, fill: C.sub, maxW: 268, lh: 13 })
  b.wtext(730, 958, '求和收支：到 2 Å 约 5×10^{5} 项、到 1 Å 约 4×10^{6} 项——每缺一项，图上就少一块系统性空位（完整度的傅里叶依据，第 6 章）。', { size: 9.5, fill: C.mute, maxW: 616, lh: 12.5 })
}

export default scene({
  title: '衍射强度与结构因子：矢量合成、系统消光、温度因子与傅里叶对偶',
  subtitle: 'F(h)＝Σf_{j}exp(2πi(h·r_{j}))；两原子实算 h＝1 得 √2f（45°）、h＝2 反相归零；体心 h+k+l 奇消光；B＝8π^{2}〈u^{2}〉典型 15–50 Å^{2}；实测只得 |F|，相位丢失',
  draw,
})
