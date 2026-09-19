// vi ch1-s2 病毒学发展史（39-j 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、发展史时间线 ============
  b.panel(30, 132, 1340, 320, { title: '一、病毒学发展史：1892—1970 的里程碑' })
  b.timelineH(110, 300, 1160, [
    { at: 0, label: '1892 伊万诺夫斯基', sub: '滤液仍使烟株发病', above: true, c: C.acc },
    { at: 0.125, label: '1898 贝杰林克', sub: '「传染性活液」', c: C.acc },
    { at: 0.25, label: '1900 里德', sub: '黄热病＝首个人类病毒', above: true, c: C.acc },
    { at: 0.375, label: '1917 德赫雷尔', sub: '发现并命名噬菌体', c: C.dna },
    { at: 0.5, label: '1935 斯坦利', sub: '结晶 TMV', above: true, c: C.enz },
    { at: 0.625, label: '1939 考舍等', sub: '首张病毒电镜像', c: C.enz },
    { at: 0.75, label: '1949 恩德斯等', sub: '脊灰组织培养', above: true, c: C.rna },
    { at: 0.875, label: '1955 弗伦克尔-康拉特', sub: '重建 TMV', c: C.rna },
    { at: 1, label: '1970 特明 / 巴尔的摩', sub: '证实逆转录酶', above: true, c: C.bad },
  ])
  b.ctext(700, 418, '从滤过性因子到逆转录酶：滤器（1892）—结晶（1935）—电镜（1939）—组织培养（1949）——每一次工具革新都重写了「病毒」的定义', { size: 11.5, fill: C.sub })

  // ============ 二、滤过性因子：病毒学的开端 ============
  b.panel(30, 470, 660, 246, { title: '二、滤过性因子：病毒学的开端' })
  b.rect(50, 528, 120, 52, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(110, 550, '患病烟叶', { size: 11.5, weight: 700, fill: C.sub })
  b.ctext(110, 568, '研磨汁液', { size: 10.5, fill: C.mute })
  b.arrow(174, 554, 206, 554, { stroke: C.acc, sw: 2, marker: 'acc' })
  // 尚贝兰滤器
  b.polygon([[216, 526], [336, 526], [318, 580], [234, 580]], { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  for (let i = 0; i < 4; i++) b.line(226 + i * 24, 534, 252 + i * 22, 572, { stroke: C.faint, sw: 1.6 })
  b.ctext(276, 596, '尚贝兰细菌滤器', { size: 10.5, fill: C.mute })
  b.arrow(346, 554, 378, 554, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.rect(388, 528, 110, 52, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 7 })
  b.ctext(443, 558, '无菌滤液', { size: 12, weight: 700, fill: C.accD })
  b.arrow(504, 554, 536, 554, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.rect(546, 528, 124, 52, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 7 })
  b.ctext(608, 550, '健康烟株', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(608, 568, '仍然发病', { size: 10.5, fill: C.bad })
  b.text(50, 628, '1898 年贝杰林克的四项判据：', { size: 12, weight: 700, fill: C.ink })
  b.tag(120, 656, '能透过滤器', { fill: C.accL, stroke: C.acc, size: 11, tfill: C.accD, pad: 9 })
  b.tag(248, 656, '可扩散入琼脂', { fill: C.accL, stroke: C.acc, size: 11, tfill: C.accD, pad: 9 })
  b.tag(382, 656, '无细胞培养基不生长', { fill: C.accL, stroke: C.acc, size: 11, tfill: C.accD, pad: 9 })
  b.tag(552, 656, '活植株内可增殖', { fill: C.accL, stroke: C.acc, size: 11, tfill: C.accD, pad: 9 })
  b.ctext(360, 696, '结论：一种「传染性活液」——病毒学诞生', { size: 12.5, weight: 700, fill: C.ink })

  // ============ 三、TMV：从结晶到重建 ============
  b.panel(710, 470, 660, 246, { title: '三、TMV：从结晶到重建（病毒成为「分子」）' })
  b.tag(778, 548, '1935 结晶', { fill: C.enzL, stroke: C.enz, size: 11.5, weight: 700, tfill: C.enzD, pad: 10 })
  b.polygon([[900, 528], [1010, 518], [1014, 526], [904, 536]], { fill: '#f1f5f9', stroke: C.mute, sw: 1.4 })
  b.polygon([[908, 536], [1018, 548], [1016, 556], [906, 544]], { fill: '#f8fafc', stroke: C.mute, sw: 1.4 })
  b.wtext(900, 574, '斯坦利提纯针状结晶，溶解后仍具感染性', { size: 10.5, fill: C.sub, maxW: 300, lh: 14 })
  b.wtext(740, 574, '1946 年诺贝尔化学奖；病毒的化学本质首次被「拿到手里」。', { size: 10.5, fill: C.sub, maxW: 150, lh: 14 })
  b.tag(778, 622, '1936 组成', { fill: C.proL, stroke: C.pro, size: 11.5, weight: 700, tfill: C.proD, pad: 10 })
  b.rect(900, 610, 285, 22, { fill: C.proL, stroke: C.pro, sw: 1.5 })
  b.rect(1185, 610, 15, 22, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.ctext(1050, 648, '蛋白质约 95%', { size: 10.5, fill: C.proD })
  b.ctext(1192, 648, 'RNA 5%', { size: 10.5, fill: C.rna })
  b.wtext(740, 650, '鲍登与皮里：病毒确认为一类核蛋白。', { size: 10.5, fill: C.sub, maxW: 150, lh: 14 })
  b.tag(778, 696, '1955 重建', { fill: C.rna, size: 11.5, weight: 700, tfill: '#ffffff', pad: 10 })
  b.wtext(900, 690, '分离的蛋白亚基 + RNA 重新装配 → 仍具感染性：遗传信息在 RNA。', { size: 11, weight: 700, fill: C.rnaD, maxW: 420, lh: 15 })

  // ============ 四、定量时代与中心法则的补全 ============
  b.panel(30, 736, 1340, 244, { title: '四、定量时代与中心法则的补全' })
  b.wtext(50, 786, '组织培养革命：1949 年恩德斯等实现脊髓灰质炎病毒的非神经组织培养，获 1954 年诺贝尔奖；组织培养与蚀斑法使病毒学走向定量化。', { size: 11, fill: C.sub, maxW: 272, lh: 16 })
  b.rect(380, 792, 140, 50, { fill: C.dnaL, stroke: C.dna, sw: 2, rx: 8 })
  b.ctext(450, 822, 'DNA', { size: 16, weight: 700, fill: C.dnaD })
  b.arrow(528, 817, 618, 817, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(573, 800, '转录', { size: 12, weight: 700, fill: C.sub })
  b.rect(626, 792, 140, 50, { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 8 })
  b.ctext(696, 822, 'RNA', { size: 16, weight: 700, fill: C.rnaD })
  b.arrow(774, 817, 864, 817, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(819, 800, '翻译', { size: 12, weight: 700, fill: C.sub })
  b.rect(872, 792, 150, 50, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  b.ctext(947, 822, '蛋白质', { size: 15, weight: 700, fill: C.proD })
  b.path('M 700,855 C 620,905 520,905 448,862', { fill: 'none', stroke: C.bad, sw: 2.4, dash: '7 5', marker: 'bad' })
  b.ctext(575, 905, '逆转录（1970 年证实）', { size: 12.5, weight: 700, fill: C.bad })
  b.text(1080, 786, '逆转录酶：特明与巴尔的摩于 1970 年各自证实，', { size: 11, fill: C.sub })
  b.text(1080, 802, '与杜尔贝科共获 1975 年诺贝尔', { size: 11, fill: C.sub })
  b.text(1080, 818, '生理学或医学奖——中心法则自此有了反向箭头。', { size: 11, fill: C.sub })
  b.wtext(50, 920, '同期工具箱：电镜（1939）看到颗粒、结晶（1935）拿到分子、组织培养与蚀斑法（1949—）数出数目——病毒学从「不可见」走向「可计数、可操纵」。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
}

export default scene({
  title: '病毒学发展史：从滤过性因子到逆转录酶（1892—1970）',
  subtitle: '1892 伊万诺夫斯基／1898 贝杰林克「传染性活液」；1935 斯坦利结晶 TMV（1946 诺奖）；1949 恩德斯组织培养（1954 诺奖）；1970 逆转录酶（1975 诺奖）',
  draw,
})
