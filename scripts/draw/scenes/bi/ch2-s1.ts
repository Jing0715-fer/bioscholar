// bi ch2-s1 GenBank 记录格式与注释（39-i 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、flat file 三段解剖 ============
  b.panel(30, 132, 760, 500, { title: '一、flat file：一条记录的三段解剖' })
  b.rect(60, 186, 700, 420, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 6 })

  // ① 描述区
  b.rect(60, 186, 700, 124, { fill: C.accL, fillOp: 0.35, stroke: 'none', rx: 6 })
  b.tag(104, 214, '① 描述区', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 8 })
  b.text(196, 218, 'LOCUS / DEFINITION / SOURCE / ORGANISM …', { size: 11.5, fill: C.mute })
  b.text(76, 250, 'ACCESSION   登录号', { size: 12.5, weight: 700, fill: C.enzD })
  b.text(300, 250, '——稳定标识，跨库互认', { size: 11, fill: C.sub })
  b.text(76, 274, 'VERSION     登录号.版本号', { size: 12.5, weight: 700, fill: C.enzD })
  b.wtext(300, 274, '——内容级标识：序列实质修改则版本加一', { size: 11, fill: C.sub, maxW: 320, lh: 14 })
  b.text(76, 298, '自由文本（DEFINITION 等）不是稳定标识', { size: 11, fill: C.bad, weight: 600 })

  // ② FEATURES
  b.rect(60, 310, 700, 178, { fill: C.dnaL, fillOp: 0.3, stroke: 'none' })
  b.tag(104, 338, '② FEATURES 特征表', { fill: C.dnaL, stroke: C.dna, size: 12, weight: 700, tfill: C.dnaD, pad: 8 })
  b.text(196, 342, '注释的真正载体', { size: 11.5, fill: C.mute })
  b.text(76, 376, 'CDS    join(100..300, 501..700)', { size: 12.5, weight: 700, fill: C.dnaD })
  b.text(370, 376, 'join：外显子拼接', { size: 11, fill: C.sub })
  b.text(76, 402, 'CDS    complement(900..1200)', { size: 12.5, weight: 700, fill: C.dnaD })
  b.text(370, 402, 'complement：位于互补链', { size: 11, fill: C.sub })
  b.text(76, 428, '/codon_start=1', { size: 12.5, weight: 700, fill: C.dnaD })
  b.text(370, 428, '读框相位', { size: 11, fill: C.sub })
  b.text(76, 454, '/product="…" /evidence=…', { size: 12.5, weight: 700, fill: C.dnaD })
  b.wtext(370, 454, '提交者声明而非权威裁决——须结合证据标签与文献交叉验证', { size: 11, fill: C.bad, maxW: 320, lh: 14 })
  b.text(76, 478, 'FEATURES   Location/Qualifiers', { size: 11, fill: C.mute })

  // ③ 序列区
  b.rect(60, 488, 700, 118, { fill: C.panelB, fillOp: 0.5, stroke: 'none', rx: 6 })
  b.tag(104, 514, '③ 序列区', { fill: C.panelB, stroke: C.mute, size: 12, weight: 700, tfill: C.sub, pad: 8 })
  b.text(196, 518, 'ORIGIN … //', { size: 11.5, fill: C.mute })
  b.text(76, 548, 'ORIGIN', { size: 12.5, weight: 700, fill: C.sub })
  b.text(76, 574, '1 atgcatgcgg cattaacgta …', { size: 12, fill: C.sub })
  b.text(76, 598, '//', { size: 12.5, weight: 700, fill: C.sub })

  // ============ 二、CDS 位置表达式 ============
  b.panel(820, 132, 550, 500, { title: '二、CDS 位置表达式：join 与 complement' })
  // 基因组坐标轴（正链）
  b.text(850, 200, '基因组正链', { size: 13, weight: 700, fill: C.dnaD })
  b.line(850, 262, 1330, 262, { stroke: C.dna, sw: 2.2 })
  const exons: Array<[number, number]> = [[900, 96], [1052, 92], [1206, 70]]
  exons.forEach(([x, w], i) => {
    b.rect(x, 240, w, 44, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 4 })
    b.ctext(x + w / 2, 266, `E${i + 1}`, { size: 13, weight: 700, fill: C.dnaD })
    b.ctext(x + w / 2, 226, `外显子${i + 1}`, { size: 11, fill: C.mute })
  })
  b.ctext(878, 230, '5′', { size: 12, weight: 700, fill: C.mute })
  b.ctext(1348, 230, '3′', { size: 12, weight: 700, fill: C.mute })
  b.braceH(898, 300, 378, { label: 'join(100..300, 501..700, 901..1000)', fill: C.dnaD, size: 11 })
  // 剪接箭头
  b.arrow(1268, 336, 1268, 398, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.ctext(1268, 372, '剪接', { size: 11.5, weight: 700, fill: C.rnaD })
  // mRNA
  b.text(850, 384, '成熟 mRNA', { size: 13, weight: 700, fill: C.rnaD })
  b.line(850, 428, 1330, 428, { stroke: C.rna, sw: 2.2 })
  let mx = 940
  exons.forEach(([, w]) => {
    b.rect(mx, 406, w, 44, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 4 })
    mx += w + 8
  })
  b.braceH(938, 462, 268, { label: '拼接后外显子首尾相连', fill: C.rnaD, size: 11 })
  // complement
  b.text(850, 512, '互补链基因', { size: 13, weight: 700, fill: C.bad })
  b.arrow(1330, 560, 850, 560, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.rect(1030, 538, 130, 44, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 4 })
  b.ctext(1095, 564, 'CDS', { size: 13, weight: 700, fill: C.bad })
  b.ctext(1348, 536, '5′', { size: 12, weight: 700, fill: C.mute })
  b.ctext(878, 536, '3′', { size: 12, weight: 700, fill: C.mute })
  b.wtext(850, 596, 'complement(900..1200)：位置写在正链坐标上，基因实际位于互补链，转录方向相反。', { size: 11.5, fill: C.sub, maxW: 480, lh: 16 })

  // ============ 三、INSDC 三库 ============
  b.panel(30, 656, 1340, 304, { title: '三、INSDC：三库一体的每日交换' })
  b.ctext(700, 712, '一次提交、全球可得——三库两两每日交换，登录号互认', { size: 13.5, weight: 700, fill: C.ink })
  const dbs: Array<[number, string, string]> = [
    [260, 'GenBank', 'NCBI（美）· 1982 年建立'],
    [700, 'EMBL-Bank', 'EBI（欧）'],
    [1140, 'DDBJ', '日本（日）'],
  ]
  dbs.forEach(([cx, t, s]) => {
    b.circle(cx, 800, 68, { fill: C.dnaL, stroke: C.dna, sw: 2.4 })
    b.ctext(cx, 794, t, { size: 15, weight: 700, fill: C.dnaD })
    b.ctext(cx, 818, s, { size: 10.5, fill: C.dnaD })
  })
  b.arrow(332, 800, 624, 800, { stroke: C.sub, sw: 2.4, marker: 'ink', markerStart: 'ink' })
  b.ctext(478, 830, '每日交换', { size: 11.5, weight: 700, fill: C.mute })
  b.arrow(772, 800, 1064, 800, { stroke: C.sub, sw: 2.4, marker: 'ink', markerStart: 'ink' })
  b.ctext(918, 830, '每日交换', { size: 11.5, weight: 700, fill: C.mute })
  const notes: Array<[number, string]> = [
    [70, '三库内容等价而格式各异——去中心的冗余基础设施'],
    [500, '冗余是档案库的天性：nr / UniRef 只是按特定定义去冗余的衍生资源'],
    [930, '特征表注释是提交者声明——须结合证据标签与文献交叉验证'],
  ]
  notes.forEach(([x, s]) => {
    b.rect(x, 878, 400, 56, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
    b.wtext(x + 16, 900, s, { size: 11.5, fill: C.sub, maxW: 370, lh: 16 })
  })
}

export default scene({
  title: 'GenBank 平面文件：三段结构与位置表达式',
  subtitle: 'flat file 分描述区、FEATURES 特征表与序列区三段——ACCESSION 与 VERSION 是稳定标识而自由文本不是；join 刻画外显子拼接、complement 表示互补链、/codon_start 给出读框相位；INSDC 三库每日交换、登录号互认',
  draw,
})
