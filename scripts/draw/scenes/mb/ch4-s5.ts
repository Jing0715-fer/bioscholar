// mb ch4-s5 Pol II CTD 磷酸化与转录延伸调控（39-b2 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、CTD 磷酸化密码与转录循环 ============
  b.panel(30, 132, 1340, 264, { title: '一、CTD 磷酸化密码：标注转录循环阶段（YSPTSPS 重复）' })
  b.legend(1160, 166, [['Ser5-P', C.enz], ['Ser2-P', C.acc]], { size: 11.5 })
  // DNA 线 + 基因结构
  b.line(70, 252, 1330, 252, { stroke: C.dna, sw: 2.4 })
  b.rect(80, 244, 56, 16, { fill: C.dnaL, stroke: C.dna, sw: 1.4 })
  b.ctext(108, 284, 'TATA', { size: 10, fill: C.dnaD })
  b.circle(160, 252, 4, { fill: C.ink })
  b.ctext(160, 284, '+1', { size: 10, weight: 700, fill: C.sub })
  b.ctext(720, 284, '基因区（延伸）', { size: 10.5, fill: C.mute })
  b.rect(1130, 244, 60, 16, { fill: C.rnaL, stroke: C.rna, sw: 1.4 })
  b.ctext(1160, 284, 'poly(A)', { size: 10, fill: C.rnaD })
  // 五个阶段的 pol II + CTD 尾巴
  const stages: [number, string, number, number, string][] = [
    [220, '① 起始', 0, 0, 'CTD 非磷酸化参与 PIC 组装；CDK7（TFIIH）磷酸化 Ser5'],
    [500, '② 启动子清除', 3, 0, 'Ser5-P 募集加帽酶：新生 RNA 仅 ~25 nt 即完成 5′ 加帽'],
    [780, '③ 延伸', 1, 3, 'Ser5-P 渐降、Ser2-P 升高（P-TEFb/CDK9）；剪接体登船'],
    [1040, '④ 3′ 端加工', 0, 4, 'Ser2-P 募集 CPSF/CstF，切割与多聚腺苷酸化'],
    [1270, '⑤ 终止', 0, 2, 'Rat1/Xrn2 追逐 Ser2-P 标记的聚合酶（torpedo）；Fcp1 重置'],
  ]
  stages.forEach(([x, tag, s5, s2, desc]) => {
    b.ellipse(x, 252, 34, 24, { fill: C.accL, stroke: C.acc, sw: 2 })
    b.ctext(x, 256, 'II', { size: 12, weight: 700, fill: C.accD })
    // CTD 尾巴
    b.polyline([[x + 32, 244], [x + 48, 238], [x + 64, 244], [x + 80, 238], [x + 96, 244]], { stroke: C.faint, sw: 2.4 })
    for (let i = 0; i < s5; i++) b.circle(x + 44 + i * 18, 236, 4.5, { fill: C.enz })
    for (let i = 0; i < s2; i++) b.circle(x + 44 + i * 18, 248, 4.5, { fill: C.acc })
    b.ctext(x, 216, tag, { size: 12.5, weight: 700, fill: C.ink })
    b.wtext(x, 306, desc, { size: 10, fill: C.sub, maxW: 230, lh: 14, anchor: 'middle' })
  })
  b.ctext(60, 216, '（CTD 简示于酶体右侧）', { size: 9.5, fill: C.mute, anchor: 'start' })

  // ============ 二、启动子近端暂停与 P-TEFb ============
  b.panel(30, 420, 660, 300, { title: '二、启动子近端暂停与 P-TEFb 释放' })
  b.line(60, 510, 640, 510, { stroke: C.dna, sw: 2.4 })
  b.circle(90, 510, 4, { fill: C.ink })
  b.ctext(90, 536, '+1', { size: 10.5, weight: 700, fill: C.sub })
  b.ellipse(160, 510, 36, 26, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(160, 515, 'pol II', { size: 11, weight: 700, fill: C.accD })
  b.polyline([[170, 524], [220, 532], [270, 524], [320, 532]], { stroke: C.rna, sw: 2.2 })
  b.ctext(245, 552, '新生 RNA', { size: 10, fill: C.rnaD })
  // 暂停距离标注
  b.line(96, 470, 200, 470, { stroke: C.mute, sw: 1.4, marker: 'mute', markerStart: 'mute' })
  b.ctext(148, 462, '20～60 nt', { size: 10.5, weight: 700, fill: C.mute })
  // NELF / DSIF 钳制
  b.rect(196, 480, 64, 24, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 5 })
  b.ctext(228, 496, 'NELF', { size: 11, weight: 700, fill: '#991b1b' })
  b.rect(270, 480, 64, 24, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 5 })
  b.ctext(302, 496, 'DSIF', { size: 11, weight: 700, fill: '#b45309' })
  b.ctext(265, 576, '负延伸因子联合钳制聚合酶', { size: 10.5, fill: C.mute })
  // P-TEFb
  b.rect(420, 460, 170, 40, { fill: C.enzL, stroke: C.enz, sw: 2, rx: 8 })
  b.ctext(505, 478, 'P-TEFb', { size: 13, weight: 700, fill: C.enzD })
  b.ctext(505, 494, 'CDK9-Cyclin T', { size: 10, fill: C.mute })
  b.arrow(416, 480, 340, 480, { stroke: C.enz, sw: 2, marker: 'enz' })
  const acts: [string, string][] = [
    ['磷酸化 NELF', '促其解离'],
    ['磷酸化 DSIF', '转为正延伸因子'],
    ['磷酸化 CTD Ser2', '进入高效延伸'],
  ]
  acts.forEach(([t, s], i) => {
    b.text(370, 540 + i * 24, '· ' + t, { size: 11, weight: 600, fill: C.sub })
    b.text(500, 540 + i * 24, s, { size: 11, fill: C.mute })
  })
  b.wtext(60, 636, 'HIV 的 Tat 蛋白经 TAR RNA 结构募集宿主 P-TEFb，解除病毒基因暂停——抗 HIV 药物靶点。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 三、CTD 修饰状态表 ============
  b.panel(710, 420, 660, 300, { title: '三、CTD 修饰状态与主要效应' })
  b.table(730, 464, 620, {
    headers: ['修饰', '激酶 / 酶', '出现阶段', '主要效应'],
    colW: [120, 150, 120, 230],
    rowH: 40,
    fontSize: 10.5,
    rows: [
      ['Ser5-P', 'TFIIH（CDK7）', '起始、清除', '募集加帽酶；促进早期剪接因子'],
      ['Ser2-P', 'P-TEFb（CDK9/ Cyclin T）', '延伸', '募集剪接体与 3′ 加尾因子（CPSF 等）'],
      ['去磷酸化', 'Fcp1 等', '终止后', 'CTD 重置，pol II 再循环'],
    ],
  })
  b.text(730, 648, '暂停-释放的意义：', { size: 12.5, weight: 700, fill: C.ink })
  const means = [
    '① 启动子处预置「待命」聚合酶，快速诱导表达（如热激基因）',
    '② 提供检查点，协调启动子选择与延伸效率',
    '③ 与增强子-中介体协同，使远端调控施加于延伸阶段（第 8 章）',
  ]
  means.forEach((s, i) => b.text(730, 674 + i * 22, s, { size: 11, fill: C.sub }))

  // ============ 四、转录-加工流水线 ============
  b.panel(30, 744, 1340, 226, { title: '四、转录-加工的全面偶联：「转录工厂」流水线' })
  const flow: [string, string, string][] = [
    ['加帽', '起始早期（~25 nt）', 'Ser5-P 招募加帽酶'],
    ['剪接', '延伸全程', '外显子定义与 CTD 直接相关'],
    ['3′ 加尾 + 终止', 'Ser2-P 募集 CPSF/CstF', '切割后 Rat1/Xrn2 降解下游 RNA 产生「鱼雷」'],
    ['染色质修饰定位', 'Set2 识别 Ser2-P/Ser5-P 组合', 'CTD 充当修饰酶的坐标系'],
  ]
  flow.forEach(([t, s, d], i) => {
    const x = 60 + i * 330
    b.rect(x, 800, 300, 108, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 10 })
    b.ctext(x + 150, 826, t, { size: 14, weight: 700, fill: C.ink })
    b.wtext(x + 150, 852, s, { size: 11, weight: 600, fill: C.sub, maxW: 276, lh: 15, anchor: 'middle' })
    b.wtext(x + 150, 884, d, { size: 10.5, fill: C.mute, maxW: 276, lh: 14, anchor: 'middle' })
    if (i < 3) b.arrow(x + 302, 854, x + 328, 854, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  })
  b.text(60, 944, '「合成与加工」零时差偶联，使真核基因表达在时间与空间上高度协同。', { size: 11, fill: C.mute })
}

export default scene({
  title: 'Pol II CTD 磷酸化与转录延伸调控',
  subtitle: 'Ser5-P（CDK7）标志起始与加帽、Ser2-P（P-TEFb/CDK9）标志延伸与 3′ 加工——NELF/DSIF 造成 20～60 nt 启动子近端暂停，P-TEFb 解除（HIV Tat 经 TAR 劫持）',
  draw,
})
