// mt ch13-s1 线粒体膜：外膜 β 桶孔道 VDAC 与内膜 SLC25 载体群 · TOM-TIM 输入 · UCP/AOX 两界配件
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、双膜体系：外膜海关与内膜交易行 =================
  b.panel(30, 132, 660, 455, { title: '一、双膜体系：外膜海关，内膜交易行' })
  b.text(46, 180, '细胞质', { size: 10, fill: C.mute })
  b.tag(130, 172, '代谢物 ≤约 5 kDa', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10, weight: 700 })
  // 外膜（双层）
  b.bilayer(46, 196, 610, { h: 12, tint: C.dna })
  b.text(46, 232, '外膜', { size: 9.5, fill: C.mute })
  // VDAC β 桶
  b.rect(120, 186, 34, 30, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  for (let i = 0; i < 5; i++) b.line(126 + i * 6, 189, 126 + i * 6, 213, { stroke: C.dna, sw: 1, opacity: 0.5 })
  b.ctext(137, 236, 'VDAC', { size: 8.5, weight: 700, fill: C.dnaD })
  b.ctext(137, 248, 'β 桶·≤5 kDa·电压门控', { size: 7.2, fill: C.sub })
  // TOM 复合体
  b.rect(196, 184, 44, 32, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(218, 200, 'TOM', { size: 9, weight: 700, fill: C.proD })
  b.rect(240, 190, 16, 22, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.ctext(248, 236, 'Tom20/22 受体', { size: 7.6, fill: C.enzD })
  b.arrow(300, 176, 262, 188, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.wtext(304, 172, '前体蛋白（解折叠）', { size: 7.8, fill: C.sub, maxW: 150, lh: 12 })
  b.text(46, 252, '膜间隙', { size: 9, fill: C.mute })
  // 内膜（双层）
  b.bilayer(46, 262, 610, { h: 12, tint: C.rna })
  b.text(46, 300, '内膜（嵴）·ΔΨ 约 150–180 mV（基质负）', { size: 9.5, fill: C.mute })
  // TIM23
  b.rect(196, 254, 44, 28, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(218, 268, 'TIM', { size: 9, weight: 700, fill: C.proD })
  b.arrow(218, 282, 218, 306, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.text(224, 302, 'ΔΨ＋mtHsp70 棘轮', { size: 7.8, fill: C.proD })
  // 内膜载体群
  const carriers: [number, string, string, string][] = [
    [330, 'ANT', 'ADP³⁻⇄ATP⁴⁻', C.rna],
    [396, 'PIC', 'Pi·H⁺ 同向', C.acc],
    [454, 'MPC', '丙酮酸', C.dna],
    [506, 'CIC', '柠檬酸出', C.enz],
    [562, 'UCP', 'H⁺ 泄漏产热', C.warn],
    [616, 'MCU', 'Ca²⁺ 单向', C.pro],
  ]
  for (const [x, name, note, col] of carriers) {
    b.rect(x - 22, 254, 44, 28, { fill: C.panelB, stroke: col, sw: 2 })
    b.ctext(x, 268, name, { size: 9, weight: 700, fill: col })
    b.ctext(x, 300, note, { size: 7.4, fill: C.sub })
  }
  // 基质区
  b.text(46, 336, '基质', { size: 10, fill: C.mute })
  b.tag(96, 330, 'TCA 循环', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 8.5, weight: 700 })
  b.ion(180, 326, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.ion(214, 326, 'ATP', { r: 11, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 7.5 })
  b.arrow(214, 340, 214, 286, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.ion(248, 326, 'ADP', { r: 11, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 7.5 })
  b.arrow(248, 286, 248, 340, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.wtext(330, 330, 'ANT 每循环净移出一个负电荷，由 ΔΨ「下山」推着 ATP 出货；苍术苷锁胞质侧构象、黄曲霉酰肽锁基质侧构象——两种毒素各冻半程，交替接触机制的经典证据', { size: 8.2, fill: C.sub, maxW: 300, lh: 15 })
  b.wtext(46, 392, '99% 以上线粒体蛋白由核基因编码：外膜步骤耗 ATP（胞质 Hsp70）、内膜步骤耗 ΔΨ 与 mtHsp70——蛋白输入本身就是一台泵；植物前体须先被叶绿体排除（导肽口音不同）', { size: 8.6, fill: C.sub, maxW: 612, lh: 17 })
  b.wtext(46, 446, 'SLC25 载体家族：6 跨膜螺旋组成三个二联体，含 PX(D/E)XX(K/R)X(K/R) 基序，在「腔开／基质开」两构象间交替——MFS 摇摆开关的紧凑快板', { size: 8.6, fill: C.sub, maxW: 612, lh: 17 })
  b.wtext(46, 494, '心大动物内膜褶成嵴，面积扩张数倍：内膜是细胞里「单位面积货流」最高的膜', { size: 8.6, weight: 600, fill: C.accD, maxW: 612, lh: 17 })

  // ================= 二、两界配件表：同细胞器不同配件 =================
  b.panel(710, 132, 660, 455, { title: '二、SLC25 家族与两界配件表' })
  // 家族成员数对比
  b.text(726, 186, 'SLC25 家族成员数：两界相当', { size: 11, weight: 700, fill: C.ink })
  b.rect(726, 200, 212, 22, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.text(736, 215, '人类 SLC25：53', { size: 9.5, weight: 700, fill: C.accD })
  b.rect(726, 230, 232, 22, { fill: C.okL, stroke: C.ok, sw: 1.5 })
  b.text(736, 245, '拟南芥 MCF：约 58', { size: 9.5, weight: 700, fill: C.okD })
  b.wtext(980, 206, '「同超家族、不同成员数」的又一实例：内共生一次带来的载体骨架，两界各自扩编', { size: 8.4, fill: C.sub, maxW: 372, lh: 15 })
  b.wtext(980, 246, 'UCP：动物 UCP1 守棕色脂肪（新生儿、冬眠）；植物 UCP 守产热花序（海芋）——同家族、两次取用', { size: 8.4, fill: C.warnD, maxW: 372, lh: 15 })
  // 对照表
  b.table(726, 274, 628, {
    headers: ['配件', '动物线粒体', '植物线粒体'],
    rows: [
      ['外膜孔道', 'VDAC1–3（β 桶）', '同源 VDAC 体系'],
      ['内膜载体群', 'SLC25 共 53 成员', '约 58 成员'],
      ['H⁺ 泄漏产热', 'UCP1 棕色脂肪主导', 'UCP 家族并行'],
      ['电子传递旁路', '无 AOX', 'AOX＋不泵质子脱氢酶'],
      ['钙调控', 'MCU/MICU 搏动匹配', 'MCU 同源物偏胁迫信号'],
    ],
    fontSize: 8.4,
    rowH: 19,
    colW: [130, 240, 258],
  })
  b.wtext(726, 428, '植物 AOX 从泛醌池直接把电子交给氧、绕过复合物 III/IV、不泵 H⁺——产能打折换抗氰化物与胁迫柔性；动物把产能表调得更精（UCP＋ANT 开度）', { size: 8.6, fill: C.sub, maxW: 616, lh: 16 })
  b.wtext(726, 462, 'MICU1/MICU2 是 MCU 的门卫：设定开启阈值防钙过载；心肌以线粒体钙尖峰激活三羧酸循环脱氢酶，把 ATP 生产对上做功节律', { size: 8.6, fill: C.sub, maxW: 616, lh: 16 })
  b.wtext(726, 496, '一句话：植物线粒体备了多条「省电旁路」求生，动物线粒体把产能表调得更精', { size: 9, weight: 600, fill: C.accD, maxW: 616, lh: 16 })

  // ================= 三、UCP 与 AOX：两界的产能调节阀 =================
  b.panel(30, 592, 1340, 393, { title: '三、两界的产能调节阀：动物的 UCP 与植物的 AOX' })
  // 左：动物棕色脂肪 UCP1
  b.text(46, 648, '动物：棕色脂肪 UCP1', { size: 11.5, weight: 700, fill: C.warnD })
  b.bilayer(46, 668, 400, { h: 14, tint: C.warn })
  b.rect(200, 660, 48, 30, { fill: C.warnL, stroke: C.warn, sw: 2.2 })
  b.ctext(224, 678, 'UCP1', { size: 9, weight: 700, fill: C.warnD })
  b.ion(224, 646, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.arrow(224, 648, 224, 660, { stroke: C.warn, sw: 2 })
  b.ion(224, 706, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.arrow(224, 690, 224, 704, { stroke: C.warn, sw: 2 })
  b.text(256, 652, '绕过 ATP 合酶', { size: 8, fill: C.warnD })
  b.text(256, 712, '梯度→热', { size: 8, fill: C.warnD })
  b.wtext(46, 740, '去甲肾上腺素—cAMP—脂解—游离脂肪酸激活；新生儿与冬眠动物以棕色脂肪维持体温（占体重小份额、产热量可观）', { size: 8.4, fill: C.sub, maxW: 400, lh: 15 })
  b.wtext(46, 786, '产热调度：ATP 合酶（收 H⁺ 造 ATP）与 UCP1（放 H⁺ 造热）的配比，即「做功／取暖」的能量分流阀', { size: 8.4, fill: C.sub, maxW: 400, lh: 15 })
  // 中：植物 AOX 旁路
  b.text(490, 648, '植物：AOX 交替氧化酶旁路', { size: 11.5, weight: 700, fill: C.okD })
  const etc: [number, string, string][] = [
    [500, 'I', '泵 H⁺'], [556, 'III', '泵 H⁺'], [612, 'IV', '泵 H⁺'],
  ]
  for (const [x, name, note] of etc) {
    b.rect(x, 660, 40, 30, { fill: C.accL, stroke: C.acc, sw: 2 })
    b.ctext(x + 20, 678, name, { size: 10, weight: 700, fill: C.accD })
    b.ctext(x + 20, 700, note, { size: 7.5, fill: C.mute })
  }
  b.rect(668, 660, 40, 30, { fill: C.okL, stroke: C.ok, sw: 2.4 })
  b.ctext(688, 678, 'AOX', { size: 9, weight: 700, fill: C.okD })
  b.ctext(688, 700, '不泵 H⁺', { size: 7.5, fill: C.badD })
  b.arrow(540, 675, 556, 675, { stroke: C.acc, sw: 1.8 })
  b.arrow(596, 675, 612, 675, { stroke: C.acc, sw: 1.8 })
  b.text(500, 634, '泛醌池', { size: 8.5, fill: C.mute })
  b.line(500, 640, 708, 640, { stroke: C.mute, sw: 1.2, dash: '4,3' })
  b.arrow(652, 675, 668, 675, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.ion(688, 646, 'O_{2}', { r: 9, fill: C.okL, stroke: C.ok, tfill: C.okD, size: 7.5 })
  b.wtext(490, 740, '电子从泛醌池直接交给氧，绕过 III/IV：产能故意打折，换来抗氰化物、稳住泛醌池、限制活性氧爆发——「氰化物抗性呼吸」', { size: 8.4, fill: C.sub, maxW: 428, lh: 15 })
  b.wtext(490, 786, '另有数条不泵质子的外源 NAD(P)H 脱氢酶入口：胁迫下的弹性能量网；动物线粒体没有 AOX——两界在「备用电路」上的根本分岔', { size: 8.4, fill: C.sub, maxW: 428, lh: 15 })
  // 右：MCU 钙闸
  b.text(960, 648, '动物心肌：MCU 的节拍器', { size: 11.5, weight: 700, fill: C.proD })
  b.bilayer(960, 668, 380, { h: 14, tint: C.pro })
  b.rect(1090, 660, 46, 30, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.ctext(1113, 678, 'MCU', { size: 9.5, weight: 700, fill: C.proD })
  b.rect(1046, 652, 34, 14, { fill: C.enzL, stroke: C.enz, sw: 1.4 })
  b.rect(1146, 652, 34, 14, { fill: C.enzL, stroke: C.enz, sw: 1.4 })
  b.ctext(1063, 662, 'MICU', { size: 6.5, weight: 700, fill: C.enzD })
  b.ctext(1163, 662, 'MICU', { size: 6.5, weight: 700, fill: C.enzD })
  b.ion(1206, 646, 'Ca^{2+}', { r: 10, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 7.5 })
  b.arrow(1196, 650, 1136, 664, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.wtext(960, 740, '每次搏动摄入少量 Ca²⁺ 激活三羧酸循环脱氢酶，再经 NCLX 排出——用线粒体钙尖峰把 ATP 生产对上做功节律', { size: 8.4, fill: C.sub, maxW: 388, lh: 15 })
  b.wtext(960, 786, 'MICU1/MICU2 设阈值防钙过载；植物 MCU 同源物偏记录胁迫钙信号与 ROS 解码', { size: 8.4, fill: C.sub, maxW: 388, lh: 15 })
  // 底部一句话
  b.wtext(46, 836, '小结：外膜 VDAC 当海关（β 桶、约 5 kDa 截留）、TOM-TIM 当蛋白输入泵（ΔΨ＋Hsp70）、SLC25 当交易行（ANT 靠膜电位发货）；两界配件表之别集中在 UCP 的用法与 AOX 的有无', { size: 9.5, weight: 600, fill: C.accD, maxW: 1308, lh: 20 })
  b.wtext(46, 868, '衔接：叶绿体被膜把同一套 β 桶语法再来一遍——Toc75 与 VDAC 同源、TPT 与 ANT 同语法：下一节看植物独有的这套「光合海关」', { size: 9, fill: C.sub, maxW: 1308, lh: 20 })
}

export default scene({
  title: '线粒体膜上的转运：外膜 β 桶海关与内膜 SLC25 交易行',
  subtitle:
    'VDAC 十九链 β 桶放行约 5 kDa 以下代谢物并兼作凋亡平台；TOM-TIM 以 ΔΨ 与 mtHsp70 棘轮输入解折叠蛋白；SLC25 家族人类 53、拟南芥约 58 成员——ANT 以 ADP³⁻ 换 ATP⁴⁻ 靠膜电位发货（苍术苷与黄曲霉酰肽各锁半程作证）；动物 UCP1 棕色脂肪产热对植物 UCP 产热花序、植物独有 AOX 不泵质子旁路、MCU/MICU 把钙尖峰接进产能节律',
  draw,
})
