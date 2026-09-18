// bp ch10-s1 DNA 作为信息分子与数据存储（39-e 收尾）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、存储密度 ============
  b.panel(30, 132, 660, 430, { title: '一、存储密度：比最好的硬盘高 6–7 个数量级' })
  b.axis(80, 440, 560, 250, {
    ylabel: '',
    xlabel: '存储介质',
    yticks: [[0, '10⁹'], [0.25, '10¹¹'], [0.5, '10¹³'], [0.75, '10¹⁵'], [1, '10¹⁷ B/g']],
    xticks: [[0.18, 'DNA'], [0.5, '硬盘'], [0.82, '磁带']],
  })
  // 对数刻度柱（fy = (log10(B/g) − 9) / 8）
  b.rect(135, 190, 90, 250, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ctext(180, 180, '2×10¹⁷ B/g', { size: 10.5, weight: 700, fill: C.dnaD })
  b.rect(315, 393, 90, 47, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(360, 381, '≈10¹⁰–10¹¹ B/g', { size: 10, weight: 700, fill: C.accD })
  b.rect(494, 390, 90, 50, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.ctext(539, 378, '与硬盘同量级', { size: 10, weight: 700, fill: C.rnaD })
  b.arrow(400, 350, 240, 215, { stroke: C.bad, sw: 2.2, dash: '6 4', marker: 'bad' })
  b.ctext(330, 225, '高 6–7 个数量级', { size: 11, weight: 700, fill: C.badD })
  b.tag(425, 240, '≈ 215 PB / g', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.okD, pad: 8 })
  b.text(60, 500, '4 种碱基＝每碱基 2 bit；双螺旋直径 2 nm、每碱基对升高 0.34 nm（每圈 10.5 bp）', { size: 10, fill: C.sub })
  b.wtext(60, 526, '低温干燥条件下半衰期可达百年以上——猛犸象与尼安德特人基因组测序证明了它的持久性。', { size: 10, fill: C.mute, maxW: 560, lh: 13 })

  // ============ 二、编码流程 ============
  b.panel(710, 132, 660, 430, { title: '二、编码流程：分子级的分页与校验' })
  b.tag(1040, 192, '数字文件（比特流）', { fill: C.panelB, stroke: C.sub, size: 11, weight: 700, tfill: C.ink, pad: 10 })
  b.arrow(1040, 206, 1040, 228, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.rect(740, 232, 600, 84, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(760, 262, '碱基→比特映射：00 / 01 / 10 / 11 ↔ A / C / G / T', { size: 11.5, weight: 700, fill: C.ink })
  b.text(760, 288, '旋转码、霍夫曼码约束编码——避免长同聚物串与 GC 失衡（测序 / 合成困难）', { size: 10, fill: C.sub })
  b.arrow(1040, 320, 1040, 344, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.genes(760, 380, 560, [
    { label: '索引（地址）', frac: 0.24, fill: C.rnaL, stroke: C.rna },
    { label: '载荷', frac: 0.52, fill: C.dnaL, stroke: C.dna },
    { label: '纠错码 RS', frac: 0.24, fill: C.proL, stroke: C.pro },
  ])
  b.ctext(1040, 446, '每条 ~150–200 nt 寡核苷酸：索引 + 载荷 + Reed–Solomon 纠错', { size: 10.5, weight: 700, fill: C.sub })
  b.arrow(900, 462, 900, 482, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.arrow(1180, 462, 1180, 482, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.tag(900, 498, '写入＝寡核苷酸合成', { fill: C.dnaL, stroke: C.dna, size: 10, weight: 700, tfill: C.dnaD, pad: 9 })
  b.tag(1180, 498, '读出＝高通量测序', { fill: C.accL, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(1040, 540, '随机读取＝PCR 引物寻址', { fill: C.proL, stroke: C.pro, size: 10, weight: 700, tfill: C.proD, pad: 9 })

  // ============ 三、里程碑与瓶颈 ============
  b.panel(30, 592, 1340, 388, { title: '三、里程碑、瓶颈与信息视角' })
  b.timelineH(60, 710, 600, [
    { at: 0.08, label: '2012 Church', sub: '一本 5.27 Mb 的书', above: true },
    { at: 0.5, label: '2013 Goldman', sub: '739 kB', above: false },
    { at: 0.92, label: '2017 Erlich', sub: '「DNA fountain」逼近理论极限', above: true },
  ])
  b.text(700, 800, '此后已演示可随机读取的数据库、DNA 逻辑检索与原位分子计算。', { size: 10, fill: C.mute })
  b.rect(50, 810, 620, 150, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(66, 838, '物理瓶颈与定位', { size: 13, weight: 700, fill: C.ink })
  b.text(66, 868, '合成与测序是「批量并行」而非「随机寻址」工艺——读写速度与成本是瓶颈；', { size: 10, weight: 600, fill: C.sub })
  b.text(66, 890, '多次读取需 PCR 放大，会引入差错。', { size: 10, weight: 600, fill: C.sub })
  b.tag(200, 926, '归档冷存储：写一次、读少次、放千年——DNA 无可替代', { fill: C.rnaL, stroke: C.rna, size: 10, weight: 700, tfill: C.rnaD, pad: 9 })
  b.rect(700, 810, 640, 150, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(716, 838, '中心法则的信息论重述', { size: 13, weight: 700, fill: C.ink })
  b.text(716, 868, '复制＝信道传输（校对纠错）；翻译＝有噪解码（密码子冗余即信道编码）；', { size: 10, weight: 600, fill: C.sub })
  b.text(716, 890, '表观遗传＝标注层。', { size: 10, weight: 600, fill: C.sub })
  b.tag(920, 926, '「生命以负熵为生」在信息时代有了精确的度量衡', { fill: C.accL, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 9 })
}

export default scene({
  title: 'DNA 数据存储：密度、编码与信息视角',
  subtitle: '4 种碱基＝每碱基 2 bit，1 g 单链 DNA 理论可存约 2×10¹⁷ 字节（约 215 PB），比最好的硬盘高 6–7 个数量级；~150–200 nt 寡核苷酸＝索引+载荷+Reed–Solomon 纠错；2012 Church 5.27 Mb → 2017 Erlich「DNA fountain」',
  draw,
})
