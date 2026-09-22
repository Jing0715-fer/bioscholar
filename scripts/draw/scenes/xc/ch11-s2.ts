// xc ch11-s2 密度匹配验证（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、RSRZ 按序列对账：零星尖峰与成串报警 ============
  b.panel(30, 132, 660, 412, { title: '一、RSRZ 按序列对账：零星尖峰与成串报警' })
  const px = (r: number) => 60 + ((r - 1) / 199) * 330
  const py = (v: number) => 372 - ((v + 3) / 6.5) * 180
  b.axis(60, 372, 330, 180, {
    xlabel: '残基序号',
    xticks: [[0, '1'], [0.25, '50'], [0.5, '100'], [0.75, '150'], [1, '200']],
    yticks: [[0.154, '-2'], [0.462, '0'], [0.769, '+2']],
  })
  b.text(60, 186, 'RSRZ', { size: 10, weight: 700, fill: C.sub })
  b.line(60, py(2), 390, py(2), { stroke: C.bad, sw: 1.2, dash: '6 4' })
  b.line(60, py(-2), 390, py(-2), { stroke: C.bad, sw: 1.2, dash: '6 4' })
  b.etext(388, py(2) - 5, '＋2 传唤线', { size: 8.5, weight: 700, fill: C.bad })
  b.etext(388, py(-2) + 13, '−2', { size: 8.5, fill: C.bad })
  // 成串区底色（残基 52 至 69 连续高于 2）
  b.rect(px(51.5), 192, px(70) - px(51.5), 180, { fill: C.badL, fillOp: 0.55 })
  const seq: Array<[number, number]> = []
  const push = (from: number, step: number, vs: number[]) =>
    vs.forEach((v, i) => seq.push([from + i * step, v]))
  push(1, 4, [0.3, -0.4, 0.8, -0.6, 0.2, 0.5, -0.3, 0.9, -0.5, 0.1, 0.4, -0.7, 0.6])
  push(50, 1, [1.1, 1.7, 2.2, 2.6, 2.9, 3.1, 3.3, 3.4, 3.2, 3.0, 2.8, 2.6, 2.5, 2.4, 2.3, 2.2, 2.3, 2.4, 2.3, 2.2])
  push(74, 4, [-0.2, 0.5, 0.3, -0.8, 0.6, -0.3, 0.4, -0.5, 0.7, -0.2, 0.5, 0.3, -0.4, 0.6, -0.6, 0.2])
  push(140, 1, [0.4, 2.7, 0.2])
  push(150, 4, [-0.4, 0.6, 0.2, -0.5, 0.4, -0.7, 0.5, 0.1, -0.3, 0.6, -0.2, 0.4, 0.3])
  b.polyline(seq.map(([r, v]) => [px(r), py(v)] as [number, number]), { stroke: C.acc, sw: 1.8 })
  b.polyline(
    seq.filter(([r]) => r >= 51 && r <= 69).map(([r, v]) => [px(r), py(v)] as [number, number]),
    { stroke: C.bad, sw: 2.6 }
  )
  b.line(px(60), py(3.1), 214, 187, { stroke: C.bad, sw: 1 })
  b.text(218, 185, '成串高于 2：register 错位或构象错误', { size: 9.5, weight: 700, fill: C.bad })
  b.circle(px(141), py(2.7), 4.2, { fill: C.warn, stroke: '#ffffff', sw: 1.2 })
  b.line(px(141) + 5, py(2.7) - 5, 306, 214, { stroke: C.warn, sw: 1 })
  b.text(310, 212, '零星尖峰：逐个调图核对', { size: 9.5, weight: 700, fill: C.warnD })
  // 右：全体残基 RSRZ 分布直方图
  const hx = (v: number) => 424 + ((v + 3) / 6.5) * 220
  const hts = [0.4, 1.1, 2.9, 6.4, 11.5, 16.1, 16.1, 11.5, 6.4, 2.9, 1.1, 0.4, 0.1]
  hts.forEach((h, i) => {
    const tail = i <= 1 || i >= 10
    const bh = h * 6.8
    b.rect(hx(-3 + i * 0.5) + 1.7, 372 - bh, 13.5, bh, {
      fill: tail ? C.badL : C.accL, stroke: tail ? C.bad : C.acc, sw: 1.1,
    })
  })
  b.line(420, 372, 648, 372, { stroke: C.sub, sw: 1.6 })
  b.line(hx(-2), 258, hx(-2), 372, { stroke: C.bad, sw: 1, dash: '5 4' })
  b.line(hx(2), 258, hx(2), 372, { stroke: C.bad, sw: 1, dash: '5 4' })
  b.ctext(536, 240, 'RSRZ 分布（示意）', { size: 10, weight: 700, fill: C.sub })
  b.ctext(hx(-2), 252, '−2', { size: 9, weight: 700, fill: C.bad })
  b.ctext(hx(2), 252, '＋2', { size: 9, weight: 700, fill: C.bad })
  b.ctext(hx(-2), 390, '−2', { size: 9, fill: C.mute })
  b.ctext(hx(0), 390, '0', { size: 9, fill: C.mute })
  b.ctext(hx(2), 390, '＋2', { size: 9, fill: C.mute })
  b.ctext(536, 414, '两尾即传唤区', { size: 8.5, fill: C.mute })
  b.wtext(60, 442, 'RSRZ＝RSR 按残基类型与分辨率壳层标准化成的 Z 分数——同一残基在高角与低角的「正常失配」不同，标准化后才有统一报警线；EDS（Kleywegt 等 2004 年）对全库条目自动计算，wwPDB 验证报告收录逐残基尖峰。', { size: 10, fill: C.sub, maxW: 616, lh: 13.5 })
  b.wtext(60, 486, 'RSCC 与 RSR 分工：相关系数比对「形状是否像」，但对整体缺失不敏感（配体只建一半仍可高相关）；RSR 对绝对失配敏感、能抓「量不够」。成串高 RSRZ 几乎必是 register 错位或构象错误，零星尖峰逐个调图核对。', { size: 10, fill: C.mute, maxW: 616, lh: 13.5 })

  // ============ 二、B 因子分布：四判据与三种病理 ============
  b.panel(710, 132, 660, 412, { title: '二、B 因子分布：四判据与三种病理' })
  const bx = (r: number) => 740 + ((r - 1) / 199) * 330
  const by = (v: number) => 372 - (v / 90) * 180
  b.axis(740, 372, 330, 180, {
    xlabel: '残基序号',
    xticks: [[0, '1'], [0.25, '50'], [0.5, '100'], [0.75, '150'], [1, '200']],
    yticks: [[0.222, '20'], [0.5, '45'], [0.889, '80']],
  })
  b.text(740, 186, 'B（Å^{2}）', { size: 10, weight: 700, fill: C.sub })
  b.line(740, by(80), 1070, by(80), { stroke: C.bad, sw: 1.2, dash: '6 4' })
  b.etext(1068, by(80) - 5, '80：信号弥散殆尽', { size: 8.5, weight: 700, fill: C.bad })
  b.line(740, by(30), 1070, by(30), { stroke: C.mute, sw: 1, dash: '4 4' })
  b.etext(1068, by(30) - 5, 'Wilson B 同量级', { size: 8.5, fill: C.mute })
  const bpts: Array<[number, number]> = []
  const bpush = (from: number, step: number, vs: number[]) =>
    vs.forEach((v, i) => bpts.push([from + i * step, v]))
  bpush(1, 4, [22, 23.5, 24, 23, 25, 26, 27, 28])
  bpush(31, 1, [26, 47, 25, 48, 24, 46, 25, 47, 26, 48, 25, 47, 26, 27])
  bpush(46, 6, [28, 29, 31, 32, 33, 35, 34, 36, 37, 38, 39, 40, 40, 41, 42, 43])
  bpush(139, 1, [40, 55, 68, 73, 72])
  bpush(146, 6, [72, 71, 72.5, 73, 72, 74, 73, 72.5, 74, 73.5])
  b.polyline(bpts.map(([r, v]) => [bx(r), by(v)] as [number, number]), { stroke: C.dna, sw: 2.2 })
  b.rect(bx(31), 192, bx(44) - bx(31), 180, { fill: C.badL, fillOp: 0.45 })
  b.rect(bx(139), 192, bx(200) - bx(139), 180, { fill: C.badL, fillOp: 0.45 })
  b.line(bx(37), 276, bx(37), 208, { stroke: C.bad, sw: 0.9, dash: '3 3' })
  b.ctext(bx(37), 202, '锯齿', { size: 9, weight: 700, fill: C.bad })
  b.line(bx(165), 226, bx(165), 208, { stroke: C.bad, sw: 0.9, dash: '3 3' })
  b.ctext(bx(165), 202, '断崖', { size: 9, weight: 700, fill: C.bad })
  // 右侧小图：全线过平
  b.rect(1086, 226, 268, 150, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(1220, 246, '全线过平', { size: 11, weight: 700, fill: C.bad })
  b.line(1106, 316, 1334, 316, { stroke: C.faint, sw: 1 })
  b.polyline([[1106, 300], [1130, 299], [1154, 301], [1178, 300], [1202, 299], [1226, 300], [1250, 301], [1274, 300], [1298, 299], [1322, 300], [1334, 300]] as [number, number][], { stroke: C.bad, sw: 2.2 })
  b.wtext(1096, 336, '所有原子几乎同值：B 根本没被真精修，或权重被锁死——「温度计」没通电。', { size: 9, fill: C.sub, maxW: 248, lh: 12.5 })
  b.tag(150, 448, '主链连续无锯齿', { fill: C.dnaL, stroke: C.dna, size: 10, weight: 700, tfill: C.dnaD, pad: 8 })
  b.tag(430, 448, '核心到表面平滑升高（表面高 10–30 Å^{2}）', { fill: C.dnaL, stroke: C.dna, size: 10, weight: 700, tfill: C.dnaD, pad: 8 })
  b.tag(170, 480, '与 Wilson B 同量级', { fill: C.dnaL, stroke: C.dna, size: 10, weight: 700, tfill: C.dnaD, pad: 8 })
  b.tag(450, 480, '单原子逾 80 Å^{2}：信号弥散殆尽', { fill: C.dnaL, stroke: C.dna, size: 10, weight: 700, tfill: C.dnaD, pad: 8 })
  b.wtext(726, 512, '三种病理记牢：锯齿（相邻原子高低交替——register 错位的指纹）、断崖（局部突然跳升几十 Å^{2}——无序区硬建或占有率报错）、全线过平（B 未被真精修或权重锁死）。B 对残基序号的曲线一目了然，是比任何统计指标都便宜的诊断。', { size: 9.5, fill: C.mute, maxW: 616, lh: 13 })

  // ============ 三、配体验证专项：四件套与过拟合红旗三联 ============
  b.panel(30, 552, 660, 430, { title: '三、配体验证专项：四件套与过拟合红旗三联' })
  const lbox = (x: number, t: string, s: string) => {
    b.rect(x, 596, 148, 62, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
    b.ctext(x + 74, 616, t, { size: 10.5, weight: 700, fill: C.accD })
    b.wtext(x + 74, 634, s, { size: 8.5, fill: C.sub, maxW: 132, lh: 11, anchor: 'middle' })
  }
  lbox(46, '① RSRZ', '配体区域密度失配的标准化分数')
  lbox(202, '② llgf 适合度', '对数似然增益，负值即红旗')
  lbox(358, '③ polder 复核', '无偏密度检验（第 9 章）')
  lbox(514, '④ occupancy·B 终审', '占有率与 B 一致性审查')
  const rbox = (x: number, t: string) => {
    b.rect(x, 686, 150, 44, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 7 })
    b.ctext(x + 75, 712, t, { size: 10.5, weight: 700, fill: C.bad })
  }
  rbox(46, '密度弱而模糊')
  b.ctext(203, 712, '＋', { size: 12, weight: 700, fill: C.bad })
  rbox(214, 'occupancy 却报 1')
  b.ctext(371, 712, '＋', { size: 12, weight: 700, fill: C.bad })
  rbox(382, 'B 却低于周边')
  b.arrow(457, 730, 457, 756, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.rect(534, 686, 140, 72, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.wtext(604, 708, '宣称比事实「更自信」——物理上说不通', { size: 9, weight: 700, fill: C.badD, maxW: 124, lh: 12, anchor: 'middle' })
  b.tag(285, 780, '三者同现即过拟合红旗三联', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 9 })
  b.tag(130, 818, '降 occupancy', { fill: C.warnL, stroke: C.warn, size: 10, weight: 700, tfill: '#92400e', pad: 8 })
  b.tag(300, 818, '升 B 至自洽', { fill: C.accL, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 8 })
  b.tag(480, 818, '或承认证据不足而删除', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.okD, pad: 8 })
  b.wtext(46, 852, 'llgf（ligand density fit 的对数似然增益）度量配体放在此处比放在随机位置多赢得多少密度证据——负值即红旗。验证报告把配体的 llgf、RSRZ、占有率与 B 列成公开明细表：读者看一个结构的配体，第一眼就看这张表；作者投稿前的自查也当以此为镜。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })
  b.wtext(46, 892, '实操顺序：先按 llgf 与 RSRC 排序、挑出证据最弱的配体；逐一出 polder 图复核；再同溯当初的建模证据（第 9 章四步流程）。「幽灵配体」的账本（甘油、PEG 片段被当作底物）第 9 章已有，此处不重抄。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })
  b.wtext(46, 930, '窗口口径提醒：残基级窗口把主侧链合算，会掩盖「主链在侧链无」的半建情形；关键残基不妨再算原子级曲线。', { size: 9.5, fill: C.mute, maxW: 616, lh: 13 })

  // ============ 四、覆盖度三面对账与 map-model FSC ============
  b.panel(710, 552, 660, 430, { title: '四、覆盖度三面对账与 map-model FSC' })
  b.text(726, 614, 'coverage 曲线', { size: 9.5, weight: 700, fill: C.sub })
  b.text(726, 646, 'REMARK 465', { size: 9.5, weight: 700, fill: C.sub })
  b.text(726, 678, 'RSRZ 曲线', { size: 9.5, weight: 700, fill: C.sub })
  const segs: Array<[number, number]> = [[0, 0.055], [0.09, 0.24], [0.28, 0.40], [0.44, 0.57], [0.62, 0.73], [0.78, 0.95]]
  segs.forEach(([a, c2]) => b.rect(850 + a * 498, 604, (c2 - a) * 498, 18, { fill: C.dnaL, stroke: C.dna, sw: 1.2 }))
  b.rect(850, 634, 498, 18, { fill: C.panelB, stroke: C.line, sw: 1 })
  b.text(858, 647, '缺失清单：6–9、25–27、46–48、74–77、97–104（首尾无序段）', { size: 8.5, fill: C.sub })
  b.polyline([[850, 679], [875, 686], [900, 678], [925, 685], [950, 681], [975, 687], [1000, 672], [1015, 666], [1030, 664], [1045, 668], [1060, 675], [1085, 683], [1110, 678], [1135, 685], [1160, 680], [1185, 686], [1210, 679], [1235, 684], [1260, 678], [1285, 685], [1310, 681], [1335, 686], [1348, 683]] as [number, number][], { stroke: C.enz, sw: 1.8 })
  b.ctext(1030, 660, '建了而无密度', { size: 8.5, weight: 700, fill: C.enzD })
  b.wtext(726, 700, '建了而无密度（RSRZ 高且 B 飙升）＝虚构坐标；有密度而未建（差值图遗留正峰）＝漏建物质——「无密度即不建」的执行情况由此审计。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })
  b.axis(726, 872, 300, 112, {
    title: 'map-model FSC（示意）',
    xlabel: '空间频率',
    yticks: [[0, '0'], [0.5, '0.5'], [1, '1.0']],
    xticks: [[0, '0'], [0.53, 'd_{model}^{-1}'], [1, '高频']],
  })
  b.curve(726, 872, 300, 112, [[0, 1], [0.08, 0.98], [0.16, 0.95], [0.24, 0.9], [0.32, 0.83], [0.4, 0.74], [0.48, 0.62], [0.56, 0.48], [0.64, 0.35], [0.72, 0.24], [0.8, 0.15], [0.9, 0.07], [1, 0.02]], { smooth: true, stroke: C.acc, sw: 2.6 })
  b.line(726, 816, 1026, 816, { stroke: C.bad, sw: 1.2, dash: '6 4' })
  b.line(885, 816, 885, 872, { stroke: C.bad, sw: 1.4 })
  b.ctext(930, 832, 'FSC＝0.5 判模型分辨率', { size: 8.5, weight: 700, fill: C.bad })
  b.wtext(1050, 762, '模型与图逐壳层算相关，以 FSC 降至 0.5 的频率判定「模型分辨率」——EM 验证报告的常驻指标。X 射线端以 d_{min} 与 R_{free} 为纲，但思想与交叉验证同源：模型必须解释它没被用来拟合的那部分数据；两条技术路线的验证口径正在统一。', { size: 9.5, fill: C.sub, maxW: 300, lh: 13 })
  b.wtext(726, 934, '红旗用法「先定位、后定性」：先查最廉价的目视检验（双图巡检、B 曲线），再上统计工具（RSRZ 曲线、llgf），最后才动模型；解释若拿不出独立证据支撑（B 阶梯、邻近残基同步升高），就只是遁词——红旗不问「为什么可以原谅」，只问「证据在哪里」。', { size: 9.5, fill: C.mute, maxW: 616, lh: 13 })
}

export default scene({
  title: '密度匹配验证：RSRZ 成串报警、B 因子病理与配体四件套',
  subtitle: 'RSCC／RSR 逐残基对账：|RSRZ| 高于 2 传唤、成串即查 register；B 四判据与锯齿、断崖、全线过平；配体四件套与红旗三联；FSC 0.5 判模型分辨率',
  draw,
})
