// mb ch1-s3 DNA 序列的复杂性与卫星 DNA（39-b2 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Cot 曲线 ============
  b.panel(30, 132, 700, 322, { title: '一、复性动力学与 Cot 曲线：三类动力学组分' })
  const ax = 108, ay = 400, aw = 575, ah = 205
  b.axis(ax, ay, aw, ah, {
    xlabel: 'Cot 值（对数刻度）→',
    xticks: [[0, '10⁻²'], [1 / 6, '10⁻¹'], [2 / 6, '1'], [3 / 6, '10'], [4 / 6, '10²'], [5 / 6, '10³'], [1, '10⁴']],
    yticks: [[0, '0'], [0.25, '25'], [0.5, '50'], [0.75, '75'], [1, '100%']],
  })
  b.text(120, 190, '复性分数（%）', { size: 11.5, fill: C.mute })
  b.text(420, 214, '约 400 bp 片段 · 热变性后降温复性', { size: 11.5, fill: C.mute })
  // 组分曲线（虚线）与累积曲线（实线）
  b.curve(ax, ay, aw, ah, [[0, 0], [0.04, 0.07], [0.08, 0.135], [0.12, 0.148], [0.2, 0.15], [1, 0.15]], { smooth: true, stroke: C.enz, sw: 2, dash: '6 4' })
  b.curve(ax, ay, aw, ah, [[0.25, 0.01], [0.33, 0.06], [0.42, 0.15], [0.5, 0.24], [0.58, 0.285], [0.66, 0.30], [1, 0.30]], { smooth: true, stroke: C.rna, sw: 2, dash: '6 4' })
  b.curve(ax, ay, aw, ah, [[0.6, 0.02], [0.7, 0.08], [0.78, 0.2], [0.85, 0.33], [0.92, 0.46], [1, 0.53]], { smooth: true, stroke: C.acc, sw: 2, dash: '6 4' })
  b.curve(ax, ay, aw, ah, [[0, 0], [0.04, 0.07], [0.08, 0.135], [0.12, 0.148], [0.25, 0.16], [0.33, 0.21], [0.42, 0.30], [0.5, 0.39], [0.58, 0.435], [0.66, 0.49], [0.7, 0.53], [0.78, 0.65], [0.85, 0.78], [0.92, 0.91], [1, 0.98]], { smooth: true, stroke: C.dna, sw: 3.2 })
  // 平台参考线
  b.line(ax, ay - 0.15 * ah, ax + aw, ay - 0.15 * ah, { stroke: C.faint, sw: 1, dash: '5 5' })
  b.line(ax, ay - 0.45 * ah, ax + aw, ay - 0.45 * ah, { stroke: C.faint, sw: 1, dash: '5 5' })
  b.etext(679, ay - 0.15 * ah - 5, '≈15%', { size: 11, fill: C.mute })
  b.etext(679, ay - 0.45 * ah - 5, '≈45%', { size: 11, fill: C.mute })
  b.text(234, ay - 0.17 * ah, '高度重复 10～15%', { size: 11.5, weight: 700, fill: C.enzD })
  b.etext(679, ay - 0.30 * ah - 8, '中度重复 25～30%', { size: 11.5, weight: 700, fill: C.rnaD })
  b.etext(679, ay - 0.53 * ah - 8, '单一序列 45～50%', { size: 11.5, weight: 700, fill: C.accD })

  // ============ 二、卫星 DNA 三级分类 ============
  b.panel(750, 132, 620, 322, { title: '二、卫星 DNA：离心命名与三级分类' })
  b.text(880, 180, '因碱基组成偏差，离心后形成独立于主带的「卫星」条带而得名', { size: 11.5, fill: C.mute })
  // CsCl 离心管
  b.rect(800, 196, 54, 186, { fill: '#f8fafc', stroke: C.sub, sw: 2, rx: 8 })
  b.rect(802, 238, 50, 13, { fill: C.dnaL, stroke: C.dna, sw: 1.2 })
  b.etext(792, 248, '主带', { size: 11, fill: C.sub })
  b.rect(802, 300, 50, 13, { fill: C.enzL, stroke: C.enz, sw: 1.2 })
  b.etext(792, 310, '卫星带', { size: 11, fill: C.enzD })
  b.ctext(827, 398, 'CsCl 梯度', { size: 11, fill: C.mute })
  // 三级分类
  b.text(880, 206, '大卫星 DNA（α 卫星）', { size: 13, weight: 700, fill: C.dnaD })
  for (let i = 0; i < 4; i++) {
    b.rect(880 + i * 101, 214, 92, 26, { fill: C.dnaL, stroke: C.dna, sw: 1.5, rx: 4 })
    b.ctext(880 + i * 101 + 46, 231, '171 bp', { size: 10.5, fill: C.dnaD })
  }
  b.text(1286, 231, '×10⁵ 以上', { size: 11.5, fill: C.mute })
  b.text(880, 258, '重复单位 171 bp · 着丝粒功能核心 · CENP-B 结合位点', { size: 11.5, fill: C.mute })
  b.text(880, 292, '小卫星 DNA（VNTR）', { size: 13, weight: 700, fill: C.rnaD })
  for (let i = 0; i < 5; i++) {
    b.rect(880 + i * 70, 300, 62, 26, { fill: C.rnaL, stroke: C.rna, sw: 1.5, rx: 4 })
    b.ctext(880 + i * 70 + 31, 317, 'TTAGGG', { size: 9.5, fill: C.rnaD })
  }
  b.text(1236, 317, '等位间重复数可变', { size: 11.5, fill: C.mute })
  b.text(880, 344, '6～25 bp · 端粒 TTAGGG 重复 · DNA 指纹的基础', { size: 11.5, fill: C.mute })
  b.text(880, 378, '微卫星 DNA（SSR）', { size: 13, weight: 700, fill: C.accD })
  for (let i = 0; i < 6; i++) {
    b.rect(880 + i * 40, 386, 34, 26, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 4 })
    b.ctext(880 + i * 40 + 17, 403, 'CA', { size: 10.5, fill: C.accD })
  }
  b.text(1128, 403, '(CA)ₙ 分布广 · 多态性高', { size: 11.5, fill: C.mute })
  b.text(880, 430, '1～6 bp · 分子遗传学标记与连锁分析的重要工具', { size: 11.5, fill: C.mute })

  // ============ 三、三类序列组分表 ============
  b.panel(30, 466, 1340, 256, { title: '三、复性动力学划分的三类序列组分' })
  b.table(60, 522, 1280, {
    headers: ['序列类型', '拷贝数', '占人基因组比例', '典型代表'],
    colW: [220, 180, 240, 640],
    rowH: 42,
    fontSize: 13,
    rows: [
      ['单一序列', '1～数拷贝', '约 45%～50%', '多数结构基因（并非全部编码：多数细胞仅约 10% 得到表达）'],
      ['中度重复序列', '10²～10⁵', '约 25%～30%', 'Alu 序列、LINE-1、rRNA / 组蛋白等串联重复基因簇'],
      ['高度重复序列', '>10⁵', '约 10%～15%', '卫星 DNA、微卫星'],
    ],
  })
  b.text(60, 706, '人 5S rRNA 基因簇位于 1 号染色体，45S 基因簇位于近端着丝粒染色体短臂；Alu 约 280 bp、约 100 万拷贝（7SL RNA 衍生的 SINE）。', { size: 11.5, fill: C.mute })

  // ============ 四、散在重复元件与微卫星疾病 ============
  b.panel(30, 734, 1340, 236, { title: '四、散在重复元件（复制-粘贴扩散）与微卫星不稳定疾病' })
  b.text(60, 786, 'LINE-1：约 6 kb，自主逆转座子', { size: 13.5, weight: 700, fill: C.rnaD })
  b.genes(60, 824, 520, [
    { label: 'ORF1（RNA 结合蛋白）', frac: 0.40, fill: C.rnaL, stroke: C.rna },
    { label: 'ORF2（内切酶 + 逆转录酶）', frac: 0.60, fill: C.enzL, stroke: C.enz },
  ])
  b.text(60, 884, 'TPRT：ORF2 在基因组靶点切口 → 以 LINE-1 mRNA 为模板反转录插入新拷贝', { size: 11.5, fill: C.mute })
  b.arrow(584, 824, 606, 824, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.text(610, 786, 'Alu 序列：约 280 bp', { size: 13.5, weight: 700, fill: C.rnaD })
  b.rect(610, 796, 240, 36, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 6 })
  b.ctext(730, 818, 'Alu（SINE）', { size: 13, weight: 700, fill: C.rnaD })
  b.wtext(610, 852, '7SL RNA 衍生 · 约 100 万拷贝；非自主元件，借用 LINE-1 的 ORF2 酶系转座', { size: 11.5, fill: C.mute, maxW: 300, lh: 17 })
  b.text(940, 786, '重复序列与疾病 / 功能', { size: 13.5, weight: 700, fill: C.ink })
  b.wtext(940, 812, '· 微卫星不稳定扩张：脆性 X 综合征、亨廷顿病（三核苷酸重复病）· 高度重复序列不编码产物：参与染色质结构维持、着丝粒形成与减数分裂配对 · 重复序列的扩增与重排是基因组进化的重要驱动力', { size: 12.5, fill: C.sub, maxW: 400, lh: 19 })
}

export default scene({
  title: 'DNA 序列的复杂性与卫星 DNA',
  subtitle: 'Cot 曲线把人基因组分为单一（约 45%～50%）、中度重复（25%～30%）与高度重复（10%～15%）三类——卫星 DNA 按重复单位分大卫星 171 bp、小卫星 6～25 bp 与微卫星 1～6 bp',
  draw,
})
