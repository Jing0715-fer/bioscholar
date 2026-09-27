// ph ch1-s4 神经调节、体液调节与自身调节（三列面板 + 时程轴 + 血压协同）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、神经调节：快而准（反射弧） ============
  b.panel(30, 132, 440, 430, { title: '一、神经调节：快而准（反射弧）' })
  const arcBoxes = ['感受器', '传入神经', '神经中枢', '传出神经', '效应器']
  arcBoxes.forEach((s, i) => {
    const ty = 175 + i * 54
    b.rect(90, ty, 150, 36, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
    b.ctext(165, ty + 22, s, { size: 11.5, weight: 700, fill: C.ink })
    if (i < arcBoxes.length - 1) b.arrow(165, ty + 38, 165, ty + 52, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  })
  b.text(258, 197, '叩击膝腱', { size: 10, fill: C.mute })
  b.text(258, 305, '突触延搁 ~0.5 ms/个', { size: 10, fill: C.mute })
  b.text(258, 413, '股四头肌收缩', { size: 10, fill: C.mute })
  b.text(50, 448, '膝反射约 50 ms：传导占小头，大头在突触延搁与兴奋-收缩耦联', { size: 10.5, fill: C.sub })
  b.wtext(50, 474, '动作电位 10–100 m/s 奔行；毫秒-秒级、解剖通路精确而效应短暂（救急）；交感与副交感拮抗支配内脏，平衡点即器官「设定状态」', { size: 10.5, fill: C.sub, maxW: 400, lh: 18 })
  b.wtext(50, 528, '反射弧任一环断裂即瘫：脊髓灰质炎破坏运动神经元、重症肌无力阻断神经-肌接头', { size: 10.5, fill: C.sub, maxW: 440, lh: 18 })

  // ============ 二、体液调节：广而久 ============
  b.panel(490, 132, 440, 430, { title: '二、体液调节：广而久（激素）' })
  b.rect(510, 185, 150, 44, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.ctext(585, 212, '内分泌细胞', { size: 11.5, weight: 700, fill: C.ink })
  b.arrow(665, 207, 745, 207, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(705, 197, '经血液运输', { size: 10, fill: C.mute })
  b.rect(750, 185, 160, 44, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.ctext(830, 212, '远处靶细胞受体', { size: 11.5, weight: 700, fill: C.ink })
  b.text(510, 262, '信使速度谱（应急 - 过渡 - 持守）：', { size: 11.5, weight: 700, fill: C.sub })
  b.text(510, 288, '· 儿茶酚胺：秒级起效、分钟级清除（应急）', { size: 10.5, fill: C.sub })
  b.text(510, 312, '· 肽类与蛋白激素：分钟-小时（过渡）', { size: 10.5, fill: C.sub })
  b.text(510, 336, '· 类固醇经核受体：小时起效、以天计（持守）', { size: 10.5, fill: C.sub })
  b.text(510, 366, '旁分泌（组胺·前列腺素）与自分泌：不经血液的短程信使', { size: 10.5, fill: C.sub })
  b.wtext(510, 394, '神经-体液调节：交感神经 → 肾上腺髓质释放肾上腺素——神经的速度接入体液的广度', { size: 10.5, fill: C.sub, maxW: 400, lh: 18 })
  b.wtext(510, 436, '起效秒-分钟、持续数小时至数天（甲状腺激素以周计）；血液流经之处皆可及——范围广、作用久', { size: 10.5, fill: C.sub, maxW: 400, lh: 18 })
  b.text(510, 498, '典型：胰岛素降糖 · 醛固酮保钠 · 甲状腺激素调代谢（周级）', { size: 10.5, fill: C.sub })
  b.text(510, 526, '神经像专线电话，体液像广播，自身像承重结构', { size: 10.5, weight: 600, fill: C.mute })

  // ============ 三、自身调节：内在而即时 ============
  b.panel(950, 132, 420, 430, { title: '三、自身调节：内在而即时' })
  b.text(1010, 208, '血流量', { size: 10.5, fill: C.sub })
  b.rect(1010, 215, 330, 140, { fill: C.bg, stroke: C.sub, sw: 1.8 })
  b.polyline([[1010, 345], [1040, 262], [1310, 262], [1340, 335]], { stroke: C.dna, sw: 2.8 })
  b.text(1150, 254, '平台：血流近乎不变', { size: 10.5, weight: 700, fill: C.dnaD })
  b.line(1010, 355, 1010, 362, { stroke: C.sub, sw: 1.8 })
  b.line(1175, 355, 1175, 362, { stroke: C.sub, sw: 1.8 })
  b.line(1340, 355, 1340, 362, { stroke: C.sub, sw: 1.8 })
  b.ctext(1010, 376, '60', { size: 10.5, fill: C.mute })
  b.ctext(1175, 376, '110', { size: 10.5, fill: C.mute })
  b.ctext(1340, 376, '160', { size: 10.5, fill: C.mute })
  b.ctext(1175, 396, '灌注压 (mmHg)', { size: 11, fill: C.sub })
  b.text(970, 424, '肌源性反应：牵张本身引起微动脉平滑肌收缩', { size: 10.5, fill: C.sub })
  b.text(970, 448, '压力窗：脑约 60–160 · 肾约 80–180 mmHg', { size: 10.5, fill: C.sub })
  b.text(970, 472, '肾管球反馈：致密斑感受 NaCl，收缩入球微动脉', { size: 10.5, fill: C.sub })
  b.text(970, 500, 'Starling 心肌定律（异长自身调节）：', { size: 11.5, weight: 700, fill: C.sub })
  b.wtext(970, 524, '静脉回流↑ → 舒张末容积↑ → 肌节初长拉向最适 → 收缩更有力，多余回心血量被泵出', { size: 10.5, fill: C.sub, maxW: 380, lh: 18 })

  // ============ 四、起效时程与失血接力 ============
  b.panel(30, 576, 660, 406, { title: '四、起效时程与失血接力（时间轴）' })
  b.text(50, 632, '急性失血约 1 L 后动脉压的多重防线（三者接力）：', { size: 12, weight: 700, fill: C.sub })
  b.tag(155, 662, '数秒：压力感受器反射', { size: 10.5, weight: 700, fill: C.accL, stroke: C.acc, tfill: C.accD, pad: 8 })
  b.arrow(222, 662, 285, 662, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.tag(390, 662, '数分钟：交感-肾上腺髓质·Ang II', { size: 10.5, weight: 700, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, pad: 8 })
  b.arrow(495, 662, 528, 662, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.tag(600, 662, '小时-日：ADH·醛固酮', { size: 10.5, weight: 700, fill: C.okL, stroke: C.ok, tfill: C.okD, pad: 8 })
  b.text(50, 690, '神经（数秒）→ 体液（数分钟至数日）→ 自身调节全程保脑与肾供血', { size: 10.5, fill: C.sub })
  b.wtext(50, 716, '同一受控变量由不同时间常数的机制层层设防——机体调控的通用架构（Guyton 时间-效应分级图）', { size: 10.5, fill: C.sub, maxW: 600, lh: 18 })
  // 时程条带
  b.text(70, 792, '精确而短暂（救急）', { size: 10, fill: C.mute })
  b.rect(70, 800, 190, 26, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.ctext(165, 817, '神经：毫秒-秒', { size: 11, weight: 700, fill: C.accD })
  b.text(240, 836, '广泛而持久（守成）', { size: 10, fill: C.mute })
  b.rect(240, 844, 330, 26, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.ctext(405, 861, '体液：秒-分钟起效，数小时至数天', { size: 11, weight: 700, fill: C.rnaD })
  b.text(70, 880, '局部固有 · 最后一道防线', { size: 10, fill: C.mute })
  b.rect(70, 888, 570, 26, { fill: C.okL, stroke: C.ok, sw: 1.5 })
  b.ctext(355, 905, '自身：即时 · 限于本组织 · 随局部条件', { size: 11, weight: 700, fill: C.okD })
  // 时间轴
  b.arrow(70, 940, 640, 940, { stroke: C.sub, sw: 2, marker: 'ink' })
  const ticks: [number, string][] = [[110, '毫秒'], [260, '秒'], [420, '分钟'], [540, '小时'], [630, '天/周']]
  ticks.forEach(([tx, lb]) => {
    b.line(tx, 940, tx, 947, { stroke: C.sub, sw: 1.8 })
    b.ctext(tx, 964, lb, { size: 10.5, fill: C.mute })
  })

  // ============ 五、动脉血压稳态：三者协同 ============
  b.panel(710, 576, 660, 406, { title: '五、动脉血压稳态：三者协同' })
  b.rect(770, 625, 180, 56, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(860, 647, '神经调节', { size: 12, weight: 700, fill: C.accD })
  b.ctext(860, 667, '压力感受器反射 · 数秒', { size: 10.5, fill: C.sub })
  b.arrow(955, 655, 984, 671, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.rect(1140, 625, 200, 56, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 1.8, rx: 8 })
  b.ctext(1240, 647, '体液调节', { size: 12, weight: 700, fill: C.rnaD })
  b.ctext(1240, 667, '儿茶酚胺·Ang II · 数分钟', { size: 10.5, fill: C.sub })
  b.arrow(1135, 655, 1096, 671, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.circle(1040, 700, 60, { fill: C.accL, fillOp: 0.6, stroke: C.acc, sw: 2.4 })
  b.ctext(1040, 694, '动脉血压', { size: 13, weight: 700, fill: C.accD })
  b.ctext(1040, 714, 'MAP 稳态', { size: 10.5, fill: C.accD })
  b.rect(940, 790, 210, 56, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(1045, 812, '自身调节', { size: 12, weight: 700, fill: C.okD })
  b.ctext(1045, 832, '脑肾血流 · 低灌注仍工作', { size: 10.5, fill: C.sub })
  b.arrow(1045, 786, 1041, 763, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.wtext(730, 890, '急性失血约 1 L：数秒内压力感受器反射把有限心输出量优先分配给脑与心（神经）；数分钟内交感-肾上腺髓质轴与血管紧张素 II 收缩血管、维持外周阻力（体液）；ADH、醛固酮与 RAAS 在小时至日尺度恢复血量；肾与脑的自身调节在低灌注中竭力保住自身供血', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })
  b.text(730, 956, '三种调节是分工接力，不是竞争——急性期听神经、过渡期听体液、慢性维持依赖自身与结构适应', { size: 11.5, weight: 600, fill: C.mute })
}

export default scene({
  title: '神经调节、体液调节与自身调节',
  subtitle: '神经经反射弧毫秒-秒级完成（膝反射约 50 ms）；体液以激素经血液秒-分钟起效、广泛持久；自身调节即时而局部（脑血流 60–160 mmHg 平台）——动脉血压由三者接力看护',
  draw,
})
