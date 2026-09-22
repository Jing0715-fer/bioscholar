// xc ch1-s3 生物大分子晶体学的黎明（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、黎明时间线 1934—1969 ============
  b.panel(30, 132, 1340, 300, { title: '一、大分子晶体学的黎明：1934—1969 标杆时间线' })
  b.timelineH(120, 302, 1120, [
    { at: 0, label: '1934 贝尔纳·胃蛋白酶', sub: '母液保湿→约 2 Å 衍射', above: true, c: C.acc },
    { at: 0.26, label: '1953 同晶置换法', sub: '佩鲁茨：重原子定相位', c: C.acc },
    { at: 0.42, label: '1958 肌红蛋白 6 Å', sub: '首张三级结构像', above: true, c: C.dna },
    { at: 0.54, label: '1960 肌红蛋白 2 Å', sub: '原子级蛋白结构首例', c: C.dna },
    { at: 0.66, label: '1962 诺贝尔化学奖', sub: '佩鲁茨与肯德鲁', above: true, c: C.pro },
    { at: 0.77, label: '1964 霍奇金诺奖', sub: '青霉素·维生素 B12', c: C.rna },
    { at: 0.88, label: '1965 溶菌酶 2 Å', sub: '首个酶结构', above: true, c: C.enz },
    { at: 1, label: '1969 胰岛素 2.5 Å', sub: '中英协作里程碑', c: C.ok },
  ])
  b.ctext(700, 404, '从 1934 年胃蛋白酶照片到 1969 年胰岛素结构：三十五年把「原则上不可解」变成常规；1962 年诺奖距贝尔纳照片 28 年、距佩鲁茨 1937 年开工 25 年', { size: 11.5, fill: C.sub })

  // ============ 二、1934 年的保湿教训 ============
  b.panel(30, 452, 660, 500, { title: '二、1934 年的保湿教训：湿晶体才会衍射' })
  b.tag(165, 502, '干燥晶体', { fill: C.badL, stroke: C.bad, size: 12, weight: 700, tfill: C.bad, pad: 10 })
  b.tag(490, 502, '毛细管封存·浸没母液', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 10 })
  // 左：干燥晶体（无衍射）
  b.rect(58, 556, 44, 24, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 5 })
  b.ctext(80, 572, 'X 射线', { size: 9.5, fill: C.sub })
  b.arrow(106, 568, 178, 615, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.polygon([[172, 596], [228, 588], [252, 620], [224, 656], [178, 650]], { fill: '#f1f5f9', stroke: C.faint, sw: 1.8, dash: '4 4' })
  b.line(196, 606, 216, 640, { stroke: C.faint, sw: 1.2 })
  b.line(222, 604, 208, 644, { stroke: C.faint, sw: 1.2 })
  b.arrow(258, 646, 322, 676, { stroke: C.faint, sw: 1.6, dash: '4 4', marker: 'mute' })
  b.ctext(300, 700, '几乎不衍射', { size: 11.5, weight: 700, fill: C.bad })
  // 右：湿晶体（衍射至约 2 Å）
  b.rect(352, 560, 210, 150, { fill: '#e0f2fe', fillOp: 0.55, stroke: C.sub, sw: 2, rx: 16 })
  b.rect(344, 566, 8, 138, { fill: C.sub, rx: 2 })
  b.rect(562, 566, 8, 138, { fill: C.sub, rx: 2 })
  b.ctext(457, 584, '母液保持湿润', { size: 10, fill: C.accD })
  b.polygon([[420, 616], [466, 608], [488, 638], [462, 672], [420, 664]], { fill: C.accL, stroke: C.acc, sw: 2 })
  b.arrow(300, 596, 408, 632, { stroke: C.warn, sw: 2, marker: 'warn' })
  // 衍射束打到底片
  b.rect(588, 556, 16, 158, { fill: '#334155', rx: 3 })
  b.ctext(596, 732, '底片', { size: 9.5, fill: C.mute })
  const spots: [number, number][] = [[586, 586], [583, 616], [584, 646], [582, 676], [585, 700]]
  spots.forEach(([sx, sy]) => {
    b.arrow(486, 640, sx - 12, sy, { stroke: C.enz, sw: 1.6, marker: 'enz' })
    b.circle(sx, sy, 3.4, { fill: C.enz })
  })
  b.ctext(490, 748, '衍射斑点延伸到约 2 Å 角域', { size: 11, weight: 700, fill: C.enzD })
  b.wtext(50, 782, '贝尔纳与克劳福特（婚后的霍奇金）把一粒胃蛋白酶晶体置于 X 射线束前：干燥晶体几乎不衍射；封入毛细管、浸没母液保持湿润的晶体给出清晰斑点。蛋白晶体是裹挟大量母液的「湿晶体」，内部长程有序完好——保湿从此成为不可动摇的操作纪律（低温冷冻只是它的发展而非否定）。', { size: 10.5, fill: C.sub, maxW: 618, lh: 15.5 })
  b.wtext(50, 876, '观念背景：萨姆纳 1926 年结晶脲酶、诺思罗普 1930 年前后结晶胃蛋白酶与胰蛋白酶（分享 1946 年诺贝尔化学奖）已证明酶是可纯化的均一分子；贝尔纳的照片再进一步——蛋白质内部排列与简单盐类同样规则。', { size: 10.5, fill: C.mute, maxW: 618, lh: 15.5 })

  // ============ 三、同晶置换法与标杆结构 ============
  b.panel(710, 452, 660, 500, { title: '三、同晶置换法与早期标杆结构' })
  const flowBoxes: [number, string, string][] = [
    [725, '天然晶体', '|F_{P}|'],
    [875, '＋Hg 重原子', '同晶衍生物 |F_{PH}|'],
    [1025, '差值 Patterson', '定位重原子'],
    [1175, '多对联立', '解出相位（MIR）'],
  ]
  flowBoxes.forEach(([x, l1, l2]) => {
    b.rect(x, 496, 130, 58, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
    b.ctext(x + 65, 519, l1, { size: 11, weight: 700, fill: C.accD })
    b.ctext(x + 65, 540, l2, { size: 10.5, fill: C.sub })
  })
  b.arrow(856, 525, 872, 525, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(1006, 525, 1022, 525, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(1156, 525, 1172, 525, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.tag(940, 580, '同晶＝晶胞参数与分子排布基本不变', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.mute, pad: 8 })
  b.wtext(730, 616, '1953 年佩鲁茨发明重原子同晶置换法：把汞等重原子选择性引入与天然蛋白同晶的少数位点，比较两套衍射强度即可逐步推算相位；肯德鲁为肌红蛋白 2 Å 工作制备至少 5 种重原子衍生物，「多对同晶置换」（MIR）流程由此定型。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15.5 })
  b.table(730, 680, 616, {
    title: '早期标杆结构一览',
    headers: ['年份', '结构', '分辨率与要点'],
    colW: [92, 196, 328],
    rowH: 26,
    fontSize: 12,
    rows: [
      ['1934', '胃蛋白酶（母液中）', '衍射照片，约 2 Å 角域'],
      ['1958', '肌红蛋白', '6 Å·首张三级结构像'],
      ['1960', '肌红蛋白', '2 Å·原子级蛋白结构首例'],
      ['1959', '血红蛋白', '5.5 Å·后至原子级'],
      ['1945–56', '青霉素·维生素 B12', '约 2–2.5 Å（霍奇金 1964 年独享化学奖）'],
      ['1965', '溶菌酶', '2 Å·首个酶结构'],
      ['1969', '胰岛素', '2.5 Å·中英协作里程碑'],
    ],
  })
  b.wtext(730, 918, '溶菌酶裂隙容纳六个糖环、Glu35 与 Asp52 分列待切键两侧——「结构解释机制」范式确立；1965 年中国完成结晶牛胰岛素全合成，1971 年起梁栋材等完成猪胰岛素 2.5 Å 结构测定。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15.5 })
}

export default scene({
  title: '生物大分子晶体学的黎明：1934—1969',
  subtitle: '1934 贝尔纳胃蛋白酶母液保湿→约 2 Å；1953 同晶置换；1958/1960 肌红蛋白 6/2 Å；1962 佩鲁茨与肯德鲁诺奖；1964 霍奇金；1965 溶菌酶 2 Å；1969 胰岛素 2.5 Å',
  draw,
})
