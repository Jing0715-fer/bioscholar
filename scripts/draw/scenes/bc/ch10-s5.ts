// bc ch10-s5 胆固醇的代谢（39-a 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、合成三阶段 ============
  b.panel(30, 132, 700, 430, { title: '一、胆固醇的合成：三阶段（肝占 70%~80%，胞质与内质网）' })
  b.wtext(46, 176, '原料：18 乙酰CoA + 36 ATP + 16 NADPH → 1 分子胆固醇（27C）。', { size: 11.5, weight: 700, fill: C.ink, maxW: 660, lh: 16 })
  // 阶段一
  b.rect(46, 202, 200, 118, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(60, 226, '① 甲羟戊酸（MVA）阶段', { size: 11.5, weight: 700, fill: C.ink })
  b.text(60, 250, '2 乙酰CoA → 乙酰乙酰CoA', { size: 9.5, fill: C.sub })
  b.text(60, 270, '→（HMG-CoA 合酶）HMG-CoA', { size: 9.5, fill: C.sub })
  b.tag(120, 296, 'HMG-CoA 还原酶（限速）', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 700, tfill: C.enzD, pad: 4 })
  b.text(60, 316, '→ MVA（6C · 耗 2 NADPH）', { size: 9.5, fill: C.sub })
  // 阶段二
  b.rect(262, 202, 200, 118, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(276, 226, '② 鲨烯阶段', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(276, 250, 'MVA 磷酸化活化为焦磷酸异戊烯（IPP）等活性异戊二烯单位', { size: 9.5, fill: C.sub, maxW: 176, lh: 13 })
  b.text(276, 300, '6 × 异戊二烯（30C）→ 鲨烯', { size: 9.5, fill: C.sub })
  // 阶段三
  b.rect(478, 202, 222, 118, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(492, 226, '③ 环化阶段', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(492, 250, '鲨烯经单加氧酶、环化酶（固醇载体蛋白 SCP 携带）→ 羊毛固醇', { size: 9.5, fill: C.sub, maxW: 196, lh: 13 })
  b.rect(586, 288, 100, 32, { fill: C.proL, fillOp: 0.55, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(636, 308, '胆固醇 27C', { size: 11.5, weight: 700, fill: C.proD })
  b.arrow(246, 262, 260, 262, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(462, 262, 476, 262, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  // 调节
  b.rect(46, 342, 654, 100, { fill: C.enzL, fillOp: 0.4, stroke: C.enz, sw: 1.6, rx: 9 })
  b.text(60, 366, 'HMG-CoA 还原酶的多级调控：', { size: 11.5, weight: 700, fill: C.enzD })
  b.wtext(60, 388, '① 酶量：高胆固醇经 SREBP-2-SCAP-Insig 通路反馈抑制转录；② 共价修饰：AMPK 磷酸化失活、胰岛素去磷酸化激活；③ 昼夜节律（午夜峰值）；④ 饥饿抑制、高糖高脂饮食促进。', { size: 10, fill: C.sub, maxW: 625, lh: 14 })
  b.wtext(46, 468, 'LDL 受体基因同样受 SREBP-2 调节——酶量与「进口量」同步反馈。', { size: 10.5, fill: C.mute, maxW: 660, lh: 15 })
  b.wtext(46, 506, '胆固醇不能被彻底氧化分解，只能转变或随胆汁排出。', { size: 11, weight: 700, fill: C.ink, maxW: 660, lh: 15 })

  // ============ 二、转变去路 ============
  b.panel(750, 132, 620, 430, { title: '二、转变去路：胆汁酸 · 类固醇激素 · 维生素 D₃' })
  b.rect(950, 170, 120, 46, { fill: C.proL, fillOp: 0.55, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(1010, 191, '胆固醇', { size: 13, weight: 700, fill: C.proD })
  b.ctext(1010, 208, '（不能氧化分解）', { size: 9, fill: C.mute })
  // 去路 1
  b.arrow(972, 216, 861, 256, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.rect(766, 260, 190, 56, { fill: C.accL, fillOp: 0.6, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(861, 282, '胆汁酸（主要去路）', { size: 12, weight: 700, fill: C.accD })
  b.ctext(861, 302, '7α-羟化酶（限速）', { size: 10, fill: C.sub })
  b.wtext(766, 330, '胆酸与鹅脱氧胆酸（与甘氨酸 / 牛磺酸结合），随胆汁乳化脂类；肠肝循环重吸收约 95%。', { size: 10, fill: C.sub, maxW: 190, lh: 14 })
  // 去路 2
  b.arrow(1010, 216, 1066, 256, { stroke: C.rna, sw: 2.4, marker: 'rna' })
  b.rect(976, 260, 180, 56, { fill: C.rnaL, fillOp: 0.6, stroke: C.rna, sw: 1.8, rx: 8 })
  b.ctext(1066, 282, '类固醇激素', { size: 12, weight: 700, fill: C.rnaD })
  b.ctext(1066, 302, 'P450 侧链裂解酶起步', { size: 10, fill: C.sub })
  b.wtext(976, 330, '肾上腺皮质（糖皮质 · 盐皮质激素）与性腺（性激素）——第一步生成孕烯醇酮。', { size: 10, fill: C.sub, maxW: 195, lh: 14 })
  // 去路 3
  b.arrow(1048, 216, 1256, 256, { stroke: C.warn, sw: 2.4, marker: 'warn' })
  b.rect(1176, 260, 160, 56, { fill: C.warnL, fillOp: 0.6, stroke: C.warn, sw: 1.8, rx: 8 })
  b.ctext(1256, 282, '维生素 D₃', { size: 12, weight: 700, fill: '#78350f' })
  b.ctext(1256, 302, '皮肤 · 紫外线', { size: 10, fill: C.sub })
  b.wtext(1176, 330, '皮肤 7-脱氢胆固醇经紫外线转变。', { size: 10, fill: C.sub, maxW: 160, lh: 14 })
  b.wtext(766, 412, '树脂类药物与膳食纤维促进胆汁酸排泄，间接拉动胆固醇转变为胆汁酸而降胆固醇。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  b.wtext(766, 456, '三大去路中胆汁酸量最大——「变废为乳」用于脂类消化吸收。', { size: 10.5, fill: C.mute, maxW: 600, lh: 15 })

  // ============ 三、脂蛋白与 LDL 受体 ============
  b.panel(30, 566, 700, 414, { title: '三、血浆脂蛋白与 LDL 受体途径（Brown & Goldstein，1985 诺奖）' })
  b.table(46, 620, 654, {
    headers: ['脂蛋白', '主要脂质', '功能', '电泳'],
    colW: [128, 176, 236, 114],
    rowH: 34,
    fontSize: 10,
    rows: [
      ['CM 乳糜微粒', '外源性 TAG', '转运膳食脂肪', '原点'],
      ['VLDL', '内源性 TAG', '肝输出脂肪', '前 β'],
      ['LDL', '胆固醇酯 ~50%', '肝 → 外周运输胆固醇', 'β'],
      ['HDL', '蛋白 / 磷脂', '胆固醇逆向转运（外周 → 肝）', 'α'],
    ],
  })
  // LDL 受体途径流程
  b.text(46, 812, 'LDL 受体途径：', { size: 12, weight: 700, fill: C.ink })
  const steps = ['识别 ApoB100', '网格蛋白包被凹陷内吞', '溶酶体水解释放游离胆固醇']
  steps.forEach((s, i) => {
    b.rect(180 + i * 176, 796, 160, 32, { fill: C.panel, stroke: C.acc, sw: 1.4, rx: 7 })
    b.wtext(260 + i * 176, 814, s, { size: 10, fill: C.ink, maxW: 148, lh: 12, anchor: 'middle' })
    if (i < 2) b.arrow(342 + i * 176, 812, 352 + i * 176, 812, { stroke: C.acc, sw: 2, marker: 'acc' })
  })
  b.wtext(46, 852, '胞内胆固醇升高 → ① 抑制 HMG-CoA 还原酶（停止合成）② 抑制 LDL 受体基因（SREBP 通路，减少摄取）③ 激活 ACAT（重新酯化储存）。', { size: 10.5, fill: C.sub, maxW: 654, lh: 15 })
  b.rect(46, 892, 654, 70, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.6, rx: 8 })
  b.text(62, 916, '家族性高胆固醇血症（FH）：LDL 受体缺陷', { size: 11.5, weight: 700, fill: C.bad })
  b.wtext(62, 938, '杂合子血 LDL 升高 2~3 倍；纯合子升高 5~6 倍，早年即发生致死性动脉粥样硬化。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })

  // ============ 四、他汀 ============
  b.panel(750, 566, 620, 414, { title: '四、他汀与降胆固醇策略' })
  b.rect(790, 620, 150, 44, { fill: C.enzL, fillOp: 0.6, stroke: C.enz, sw: 1.8, rx: 8 })
  b.ctext(865, 640, 'HMG-CoA 还原酶', { size: 11, weight: 700, fill: C.enzD })
  b.ctext(865, 656, '（限速酶）', { size: 9.5, fill: C.mute })
  b.arrow(940, 642, 1000, 642, { stroke: C.bad, sw: 2.6, marker: 'bad' })
  b.ctext(970, 626, '竞争性抑制', { size: 9.5, weight: 700, fill: C.bad })
  b.tag(1075, 642, '他汀类 statins', { fill: C.badL, stroke: C.bad, size: 12, weight: 700, tfill: C.bad, pad: 6 })
  b.wtext(766, 692, '他汀结构类似 HMG-CoA 的过渡态，与底物竞争结合限速酶 → 阻断内源性胆固醇合成。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })
  b.rect(766, 726, 592, 84, { fill: C.okL, fillOp: 0.45, stroke: C.ok, sw: 1.6, rx: 9 })
  b.text(782, 750, '连锁效应：肝细胞代偿上调 LDL 受体 → 血 LDL 清除加快', { size: 12, weight: 700, fill: '#065f46' })
  b.wtext(782, 774, '他汀类由此成为降胆固醇治疗的基石；LDL 运胆固醇出肝、HDL 行逆向转运，两者方向相反。', { size: 10.5, fill: C.sub, maxW: 560, lh: 15 })
  b.rect(766, 828, 286, 76, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.5, rx: 8 })
  b.text(780, 852, 'PCSK9 抑制剂（近年新靶点）', { size: 11.5, weight: 700, fill: C.accD })
  b.wtext(780, 874, '减少 LDL 受体降解，增强清除。', { size: 10, fill: C.sub, maxW: 260, lh: 14 })
  b.rect(1072, 828, 286, 76, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(1086, 852, '树脂类 + 膳食纤维', { size: 11.5, weight: 700, fill: C.sub })
  b.wtext(1086, 874, '促胆汁酸排泄，间接拉动胆固醇转变消耗。', { size: 10, fill: C.sub, maxW: 260, lh: 14 })
  b.wtext(766, 930, '「限速酶 + 受体反馈」双节点是降胆固醇药物设计的经典范式。', { size: 11, weight: 700, fill: C.ink, maxW: 590, lh: 15 })
}

export default scene({
  title: '胆固醇的代谢：HMG-CoA 还原酶限速与三大转变去路',
  subtitle: '18 乙酰CoA + 36 ATP + 16 NADPH 经 MVA → 鲨烯 → 胆固醇（27C）；不能氧化分解，转变成胆汁酸（7α-羟化酶限速）、类固醇激素与维 D₃；LDL 受体介导内吞，他汀竞争性抑制限速酶并代偿上调受体',
  draw,
})
