// mt ch5-s3 植物的糖载体：三大体系总览 | SWEET 结构与演化 | 病原劫持 | 亚细胞糖流
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三大体系总览（拟南芥） ============
  b.panel(30, 132, 690, 428, { title: '一、三大体系总览：进货与出货的分工（拟南芥）' })
  b.wtext(50, 182, '质外体＝细胞壁与胞间隙构成的「细胞外公共水路」；共质体＝胞间连丝连通的活细胞共同体——STP 与 SUC/SUT 向内进货、以 H^{+} 梯度付费，SWEET 向外出货、顺浓度梯度免费', { size: 10, fill: C.sub, maxW: 650, lh: 23 })

  const ionH = (cx: number, cy: number, r: number) =>
    b.ion(cx, cy, 'H^{+}', { r, size: r >= 8 ? 7.5 : 6.5, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
  const ionG = (cx: number, cy: number, r: number) =>
    b.ion(cx, cy, 'G', { r, size: r + 1, fill: C.accL, stroke: C.acc, tfill: C.accD })
  const ionS = (cx: number, cy: number, r: number) =>
    b.ion(cx, cy, 'Suc', { r, size: r - 2, fill: C.enzL, stroke: C.enz, tfill: C.enzD })

  // —— STP / SUC 两列：H⁺ 拖动糖内向同向转运 ——
  const symCol = (cx: number, head: string, sub: string, prot: string, desc: string, lh: number, sugar: 'G' | 'Suc') => {
    b.ctext(cx, 232, head, { size: 12, weight: 700, fill: C.ink })
    b.ctext(cx, 250, sub, { size: 9.5, weight: 600, fill: C.accD })
    b.bilayer(cx - 97, 305, 194)
    b.rect(cx - 30, 287, 60, 36, { fill: C.proL, stroke: C.pro, sw: 2, rx: 6 })
    b.ctext(cx, 309, prot, { size: 9.5, weight: 700, fill: C.proD })
    ionH(cx - 22, 265, 8)
    if (sugar === 'G') ionG(cx + 22, 265, 8)
    else ionS(cx + 22, 265, 9)
    b.arrow(cx - 22, 275, cx - 22, 334, { stroke: C.warn, sw: 1.8, marker: 'warn' })
    b.arrow(cx + 22, 275, cx + 22, 334, { stroke: sugar === 'G' ? C.acc : C.enz, sw: 1.8, marker: sugar === 'G' ? 'acc' : 'enz' })
    ionH(cx - 22, 345, 7)
    if (sugar === 'G') ionG(cx + 22, 345, 7)
    else ionS(cx + 22, 345, 8)
    b.wtext(cx - 97, 372, desc, { size: 9.5, fill: C.sub, maxW: 195, lh })
  }
  symCol(190, 'STP｜14 员', '己糖/H^{+} 同向转运（向内·次级主动）', 'STP',
    '根表皮从质外体回收渗漏的糖、花粉从花柱质外体汲取能量；病原侵染使质外体糖源充沛时基因诱导上调', 18, 'G')
  symCol(390, 'SUC/SUT｜9 员', '蔗糖/H^{+} 同向转运（向内·次级主动）', 'SUC2',
    'SUC2 表达于伴胞，把质外体蔗糖逆浓度抽入伴胞-筛分子复合体（1 H^{+}∶1 蔗糖）；SUC3 司花粉管与保卫细胞', 23, 'Suc')

  // —— SWEET 列：顺梯度外排（双向可逆） ——
  b.ctext(595, 232, 'SWEET｜17 员', { size: 12, weight: 700, fill: C.ink })
  b.ctext(595, 250, '顺梯度易化外排（向外·双向可逆）', { size: 9.5, weight: 600, fill: C.enzD })
  b.bilayer(498, 305, 194)
  b.rect(565, 287, 60, 36, { fill: C.proL, stroke: C.pro, sw: 2, rx: 6 })
  b.ctext(595, 309, 'SWEET', { size: 9, weight: 700, fill: C.proD })
  ionS(580, 345, 8)
  ionS(610, 345, 8)
  b.arrow(580, 335, 580, 276, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.arrow(610, 335, 610, 276, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  ionS(580, 265, 8)
  ionS(610, 265, 8)
  b.arrow(595, 323, 595, 286, { stroke: C.mute, sw: 1.4, marker: 'mute', dash: '4 3' })
  b.text(640, 308, '可逆', { size: 7.5, fill: C.mute })
  b.wtext(498, 372, 'SWEET11/12 驻筛分子质膜外泌蔗糖、SWEET15 司种子灌浆、SWEET1 在根尖分泌葡萄糖滋育根际微生物', { size: 9.5, fill: C.sub, maxW: 195, lh: 18 })

  // 侧标签
  b.text(50, 268, '质外体', { size: 9, weight: 600, fill: C.mute })
  b.text(50, 352, '胞质', { size: 9, weight: 600, fill: C.mute })
  b.line(79, 272, 90, 296, { stroke: C.faint, sw: 1 })
  b.line(79, 348, 90, 318, { stroke: C.faint, sw: 1 })

  b.text(50, 440, '一送一收：SWEET 把糖从共质体送进质外体、STP/SUC 把糖从质外体收回共质体——糖流才能既跨细胞又跨区室', { size: 10, fill: C.sub })
  b.text(50, 468, '结算货币一致：凡逆梯度必以 H^{+} 支付，动力由质膜 H^{+}-ATPase 预付（第 6 章）——SUC2 装载是唯一逆能量而上的一步', { size: 10, fill: C.sub })
  b.text(50, 496, '植物以蔗糖作长距离运输糖：非还原糖化学稳定、一分子等效两分子己糖的碳——运输密度高、途中不易被「打劫」', { size: 10, fill: C.sub })

  // ============ 二、SWEET：双半重复结构与演化接力 ============
  b.panel(740, 132, 630, 428, { title: '二、SWEET：双半重复结构与演化接力' })
  b.wtext(760, 182, 'SWEET（sugar will eventually be exported transporter）＝双向易化的糖外排载体——拟南芥 17 个成员均为 7 个跨膜螺旋，由两个三螺旋半重复串联而成', { size: 10, fill: C.sub, maxW: 590, lh: 18 })

  const cyl = (x: number, y: number, w: number, h: number, fill: string, stroke: string) =>
    b.rect(x, y, w, h, { fill, stroke, sw: 1.6, rx: 3 })

  // —— 左：7 TMS 拓扑 ——
  b.text(760, 228, '7 TMS 拓扑：半重复① ＋ 连接螺旋 ＋ 半重复②', { size: 10.5, weight: 700, fill: C.ink })
  b.bilayer(765, 270, 250)
  const tx = [790, 816, 842, 868, 894, 920, 946]
  tx.forEach((x, i) => cyl(x, 256, 14, 28, i === 3 ? C.rnaL : C.proL, i === 3 ? C.rna : C.pro))
  b.ctext(875, 248, 'TMS4 连接螺旋', { size: 8, weight: 600, fill: C.rnaD })
  b.braceH(786, 308, 74, { label: '半重复①（TMS 1–3）', size: 9, fill: C.proD })
  b.braceH(890, 308, 74, { label: '半重复②（TMS 5–7）', size: 9, fill: C.proD })
  b.wtext(760, 356, '两个半重复背靠背围成中央孔道、相对摆动完成交替开合——与 MFS 摇摆开关异曲同工，却非同源', { size: 9.5, fill: C.sub, maxW: 250, lh: 18 })

  // —— 右：演化接力 3 → 6 → 7 ——
  b.text(1040, 228, '演化接力：3 → 6 → 7', { size: 10.5, weight: 700, fill: C.ink })
  b.bilayer(1044, 256, 76)
  ;[1056, 1072, 1088].forEach(x => cyl(x, 244, 10, 24, C.proL, C.pro))
  b.text(1140, 248, '① 细菌 SemiSWEET', { size: 9.5, weight: 700, fill: C.ink })
  b.text(1140, 264, '3 TMS 单体，司营养摄取', { size: 9, fill: C.sub })
  b.arrow(1080, 274, 1080, 300, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.bilayer(1044, 324, 132)
  ;[1056, 1072, 1088].forEach(x => cyl(x, 312, 10, 24, C.proL, C.pro))
  ;[1104, 1120, 1136].forEach(x => cyl(x, 312, 10, 24, C.enzL, C.enz))
  b.ellipse(1101, 325, 55, 22, { fill: 'none', stroke: C.faint, sw: 1.4, dash: '4 3' })
  b.text(1190, 316, '② 背靠背同源二聚', { size: 9.5, weight: 700, fill: C.ink })
  b.text(1190, 332, '两单体拼出运转单位', { size: 9, fill: C.sub })
  b.arrow(1101, 352, 1101, 366, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.bilayer(1042, 378, 100)
  ;[1050, 1063, 1076, 1089, 1102, 1115, 1128].forEach((x, i) =>
    cyl(x, 366, 9, 24, i === 3 ? C.rnaL : C.proL, i === 3 ? C.rna : C.pro))
  b.text(1160, 370, '③ 加倍 · 融合', { size: 9.5, weight: 700, fill: C.ink })
  b.text(1160, 386, '植物 SWEET：7 TMS', { size: 9, fill: C.sub })

  b.text(760, 448, 'SemiSWEET 在细菌中本为营养摄取服务，编入植物体系后改行外排——「同一支架、不同职业」的招募在膜蛋白演化史上屡见不鲜', { size: 10, fill: C.sub })
  b.text(760, 476, '双向易化：质外体糖浓度高于胞内（装载初期）时流向自动反转——物理规则替植物省下一套阀门，外排与回收共用同一孔道', { size: 10, fill: C.sub })
  b.text(760, 504, '底物谱分工明确：SWEET16/17 守液泡膜司果糖区室调配——维管束与根尖的表达差异把「外排」细化成组织学地图', { size: 10, fill: C.sub })

  // ============ 三、病原劫持：当载体变成内奸 ============
  b.panel(30, 570, 690, 415, { title: '三、病原劫持：当载体变成内奸' })
  b.text(50, 618, '载体为植物所用，也被病原征用——病原的进攻对象不是植物的防御，而是植物的物流', { size: 10, fill: C.sub })

  b.ctext(115, 636, '① 黄单胞菌', { size: 9.5, weight: 700, fill: C.badD })
  b.bacterium(115, 660, 82, 26, { fill: C.badL, stroke: C.bad })
  b.text(168, 654, 'TAL 效应子（转录激活子样）', { size: 9, fill: C.sub })
  b.text(168, 670, '注入水稻细胞、直入细胞核', { size: 9, fill: C.sub })
  b.arrow(115, 682, 115, 708, { stroke: C.sub, sw: 1.8, marker: 'ink' })

  b.circle(115, 756, 44, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.dna(88, 756, 54, { amp: 5, period: 27, stroke: C.pro, sw: 1.8 })
  b.rect(96, 740, 38, 16, { fill: C.rnaL, stroke: C.rna, sw: 1.5, rx: 3 })
  b.ctext(115, 751, 'TAL', { size: 8, weight: 700, fill: C.rnaD })
  b.ctext(112, 788, 'OsSWEET14 启动子', { size: 7.5, weight: 600, fill: C.proD })
  b.text(172, 744, '② TAL 结合 OsSWEET14 启动子', { size: 9.5, weight: 700, fill: C.ink })
  b.text(172, 762, 'pthXo1→OsSWEET11 · AvrXa7→OsSWEET14', { size: 8.5, fill: C.mute })
  b.text(172, 780, '转录被强行超激活', { size: 9, fill: C.sub })
  b.arrow(115, 804, 115, 822, { stroke: C.sub, sw: 1.8, marker: 'ink' })

  b.text(50, 832, '③ 胞质：OsSWEET14 过表达（外排失控）', { size: 9, weight: 700, fill: C.enzD })
  b.bilayer(55, 866, 335)
  ;[80, 160, 240].forEach(x => {
    b.rect(x, 857, 46, 30, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 5 })
    b.ctext(x + 23, 876, 'SWEET', { size: 7.5, weight: 700, fill: C.proD })
  })
  b.text(300, 876, '……×N', { size: 9, weight: 700, fill: C.proD })
  ;[103, 183, 263].forEach(x => {
    ionS(x, 844, 7)
    b.arrow(x, 852, x, 891, { stroke: C.enz, sw: 1.8, marker: 'enz' })
    ionS(x, 900, 7)
  })
  b.text(50, 922, '质外体：糖源充沛——病菌的「外卖」', { size: 9, weight: 600, fill: C.sub })
  b.bacterium(345, 916, 44, 18, { fill: C.badL, stroke: C.bad })
  b.bacterium(400, 900, 40, 16, { fill: C.badL, stroke: C.bad })
  b.bacterium(388, 934, 40, 16, { fill: C.badL, stroke: C.bad })
  b.text(350, 882, '病菌增殖', { size: 8.5, weight: 700, fill: C.badD })
  b.tag(235, 956, '水稻白叶枯病——OsSWEET14 即「易感基因」', { size: 9.5, weight: 700, fill: C.badL, stroke: C.bad, tfill: C.badD, pad: 12 })

  b.wtext(445, 630, '易感基因（susceptibility gene）：病原攻击的是植物的物流而非防御——OsSWEET14 因此得名', { size: 9.5, fill: C.sub, maxW: 250, lh: 18 })
  b.wtext(445, 666, '外排载体超表达把糖源源不断倾泻到质外体，白叶枯病菌在「外卖」上茁壮生长，植株由此感病', { size: 9.5, fill: C.sub, maxW: 250, lh: 18 })
  b.wtext(445, 702, '抗病思路逆转：不添加抗性基因，而是夺走病原的饭票——敲除冗余成员，或编辑启动子上的效应子结合位点', { size: 9.5, fill: C.sub, maxW: 250, lh: 18 })
  b.wtext(445, 768, '招牌范例：针对 OsSWEET14 启动子的编辑已在田间展示对白叶枯病的抗性，载体的本职运输另有成员兜底', { size: 9.5, fill: C.sub, maxW: 250, lh: 18 })
  b.wtext(445, 834, '军备竞赛：水稻种质自然存在 OsSWEET11/14 启动子变异（隐性抗病基因 xa13 等）——野生种质早已「换锁」，病原则以新 TAL 效应子「换钥匙」', { size: 9.5, fill: C.sub, maxW: 250, lh: 18 })
  b.wtext(445, 900, '一枚载体的两面：病原借它取食、植物靠它装载——糖流十字路口，双方必争', { size: 9.5, fill: C.sub, maxW: 250, lh: 18 })

  // ============ 四、亚细胞糖流：细胞器之间的会计 ============
  b.panel(740, 570, 630, 415, { title: '四、亚细胞糖流：细胞器之间的会计' })
  b.text(760, 618, '糖流不止于质膜——叶绿体 TPT（磷酸三碳糖/磷酸反向转运体）、非光合质体 GPT 与液泡 TMT/VGT 各设账房', { size: 10, fill: C.sub })

  b.chloro(880, 710, 190, 100, { label: '叶绿体' })
  b.rect(960, 690, 30, 36, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 4 })
  b.ctext(975, 684, 'TPT', { size: 8, weight: 700, fill: C.accD })
  b.arrow(996, 697, 1034, 697, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.ctext(1015, 688, 'TP', { size: 8.5, weight: 700, fill: C.accD })
  b.arrow(1034, 717, 996, 717, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ctext(1015, 731, 'Pi', { size: 8.5, weight: 700, fill: C.warnD })

  b.rect(1040, 652, 140, 163, { fill: '#fef3c7', fillOp: 0.45, stroke: C.rna, sw: 1.5, rx: 10, dash: '5 4' })
  b.text(1052, 674, '胞质', { size: 11, weight: 700, fill: C.rnaD })
  b.ctext(1100, 700, '白天合成', { size: 8.5, weight: 600, fill: C.rnaD })
  b.tag(1100, 732, '蔗糖', { size: 10, weight: 700, fill: '#fef3c7', stroke: C.rna, tfill: C.rnaD, pad: 10 })

  b.rect(1195, 652, 155, 165, { fill: C.panelB, stroke: C.acc, sw: 2, rx: 16 })
  b.ctext(1272, 676, '液泡', { size: 11, weight: 700, fill: C.accD })
  b.ctext(1272, 694, '（糖银行）', { size: 8.5, fill: C.sub })
  ;[[1243, 748], [1300, 748], [1243, 788], [1300, 788]].forEach(([x, y]) => ionG(x, y, 7))
  b.rect(1181, 712, 28, 28, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 4 })
  b.ctext(1195, 730, 'TMT', { size: 7.5, weight: 700, fill: C.accD })
  b.rect(1181, 752, 28, 28, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 4 })
  b.ctext(1195, 770, 'VGT', { size: 7.5, weight: 700, fill: C.accD })
  ionG(1132, 726, 7)
  b.arrow(1146, 726, 1177, 726, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.ctext(1160, 714, '白天存入', { size: 7.5, weight: 600, fill: C.accD })
  ionG(1132, 766, 7)
  b.arrow(1177, 766, 1146, 766, { stroke: C.warn, sw: 1.8, marker: 'warn', dash: '4 3' })
  b.ctext(1160, 782, '夜间放出', { size: 7.5, weight: 600, fill: C.warnD })

  b.ellipse(880, 862, 92, 40, { fill: '#ecfccb', stroke: C.ok, sw: 2 })
  b.rect(866, 818, 28, 28, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 4 })
  b.ctext(880, 836, 'GPT', { size: 7.5, weight: 700, fill: C.accD })
  b.ctext(880, 862, '淀粉', { size: 9.5, weight: 700, fill: C.okD })
  ;[[852, 880, 9], [884, 886, 11], [912, 880, 8]].forEach(([x, y, r]) =>
    b.circle(x, y, r, { fill: '#ffffff', stroke: C.ok, sw: 1.5 }))
  b.polyline([[1105, 818], [1105, 840], [896, 840]], { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.text(990, 832, 'G6P', { size: 8.5, weight: 700, fill: C.accD })
  b.ctext(880, 926, '非光合质体：GPT 输入 G6P 合成淀粉', { size: 9, fill: C.sub })

  b.text(1040, 856, '白天：TPT 输出磷酸三碳糖 → 胞质合成蔗糖 → 经 SWEET/SUC2 装载外运', { size: 9.5, fill: C.sub })
  b.text(1040, 882, '夜间与胁迫：TMT/VGT 把液泡储存的糖放出，维持呼吸底物', { size: 9.5, fill: C.sub })
  b.text(1040, 908, '叶绿体、液泡与质外体三本账互为对冲——胞质糖浓度始终被约束在窄带内', { size: 9.5, fill: C.sub })
  b.tag(1055, 952, '动物用激素稳血糖，植物用区室稳「胞糖」——同一道稳态命题，两种执行语法', { size: 9.5, weight: 700, fill: C.panelB, stroke: C.line, tfill: C.ink, pad: 14 })
}

export default scene({
  title: '植物的糖载体：三大体系与病原劫持',
  subtitle: '拟南芥三大体系：STP 14 员己糖/H^{+} 同向进货、SUC/SUT 9 员蔗糖/H^{+} 同向装载、SWEET 17 员顺梯度外排；SWEET 7 TMS 双半重复演化自 SemiSWEET 3 TMS 同源二聚体的加倍融合；黄单胞菌 TAL 效应子劫持 OsSWEET14 启动子致白叶枯「易感基因」；叶绿体 TPT/GPT 与液泡 TMT/VGT 记亚细胞糖账',
  draw,
})
