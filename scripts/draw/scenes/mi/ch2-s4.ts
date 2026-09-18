// mi ch2-s4 核区、质粒与芽孢（39-f 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、核区 ============
  b.panel(30, 132, 1340, 240, { title: '一、核区：压缩近千倍的环状基因组（以大肠杆菌为例）' })

  b.bacterium(250, 250, 380, 130, { shape: 'rod', fill: '#f8fafc', stroke: C.sub })
  // 超螺旋拟核（多条缠绕路径）
  b.path('M 165 235 C 200 210, 245 250, 285 225 C 320 203, 360 240, 325 260 C 285 280, 240 245, 200 265 C 175 275, 150 250, 165 235', { stroke: C.dna, sw: 2.2 })
  b.path('M 200 240 C 230 220, 270 260, 310 235 C 330 222, 350 250, 320 255', { stroke: C.dna, sw: 2 })
  b.tag(250, 292, '核区（拟核）', { fill: C.dnaL, stroke: C.dna, size: 11.5, weight: 700, tfill: C.dnaD, pad: 8 })
  b.ctext(250, 342, '大肠杆菌：闭环双链 DNA，无核膜', { size: 11.5, fill: C.mute })

  // 右：压缩比卡片
  b.rect(480, 180, 850, 180, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(700, 214, '染色体 DNA：4.6 × 10⁶ bp · 闭环双链', { size: 14.5, weight: 700, fill: C.ink })
  b.rect(700, 236, 560, 12, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.text(1260, 270, '完全伸展周长 ≈ 1.6 mm', { size: 11.5, weight: 600, fill: C.dnaD, anchor: 'end' })
  b.rect(700, 300, 5, 12, { fill: C.bad })
  b.text(718, 310, '细胞长度 ≈ 2 μm', { size: 11.5, weight: 600, fill: C.bad })
  b.text(718, 336, 'DNA 总长 ≈ 细胞长的 800 倍 → 必须压缩近千倍：负超螺旋 + 拟核相关蛋白（NAP）', { size: 12, weight: 600, fill: C.sub })

  // ============ 二、质粒 ============
  b.panel(30, 392, 1340, 310, { title: '二、质粒：染色体外自主复制的小型遗传单位（1 kb – 数百 kb）' })

  b.plasmid(195, 505, 64, { genes: ['复制起点 ori', '转移基因 tra', '选择标记'], stroke: C.pro })
  b.ctext(195, 612, '共价闭环双链 DNA', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(195, 634, '严紧型 1–2 拷贝 / 松弛型高拷贝', { size: 10.5, fill: C.mute })
  b.tag(195, 664, '独立于染色体自主复制', { fill: C.proL, stroke: C.pro, size: 11, weight: 700, tfill: C.proD, pad: 8 })

  b.table(360, 445, 980, {
    headers: ['质粒类型', '主要功能', '代表实例'],
    colW: [130, 420, 430],
    rowH: 36,
    fontSize: 12,
    rows: [
      ['F 质粒', '接合——形成性菌毛、传递遗传物质', '大肠杆菌 F⁺ / Hfr 菌株'],
      ['R 质粒', '耐药性——可携带多重耐药基因并在菌间传播', '肠杆菌多重耐药株'],
      ['Col 质粒', '编码细菌素——抑制近缘竞争菌', '大肠杆菌素产生菌'],
      ['降解质粒', '降解萘、樟脑等难降解污染物', '假单胞菌'],
      ['Ti 质粒', '诱发植物冠瘿瘤——植物基因工程载体', '根癌农杆菌'],
    ],
  })
  b.wtext(360, 690, '拷贝数控制：严紧型与染色体复制同步（1–2 个/细胞）；松弛型独立高频复制——基因工程载体多用松弛型。', { size: 10.5, fill: C.mute, maxW: 960, lh: 15 })

  // ============ 三、芽孢 ============
  b.panel(30, 722, 1340, 258, { title: '三、芽孢：休眠的「生命胶囊」——121 ℃ 湿热 15–30 min 方可可靠杀灭' })

  // 左：芽孢层级（同心结构）
  b.ellipse(270, 852, 130, 92, { stroke: C.sub, sw: 1.6, dash: '6 4' })
  b.ellipse(270, 852, 108, 76, { stroke: C.pro, sw: 3.5 })
  b.ellipse(270, 852, 84, 58, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.8, dash: '5 3' })
  b.ellipse(270, 852, 60, 40, { fill: C.warnL, stroke: '#d97706', sw: 2 })
  const marks: Array<[number, number, string]> = [[335, 772, '①'], [378, 852, '②'], [312, 902, '③'], [322, 832, '④']]
  marks.forEach(([x, y, s]) => b.ctext(x, y + 5, s, { size: 15, weight: 700, fill: C.ink }))
  b.ctext(270, 968, '芽孢纵切（层级示意）', { size: 10.5, fill: C.mute })

  // 右上：层级图例
  b.text(560, 768, '抗热结构层级（对应左图）', { size: 13, weight: 700, fill: C.ink })
  const layers: Array<[string, string]> = [
    ['① 孢外壁：脂蛋白薄层（部分菌种具有）', C.sub],
    ['② 芽孢衣：坚硬致密的疏水蛋白层——阻挡酶与化学因子', C.pro],
    ['③ 皮层：特殊肽聚糖，吸水膨胀反向挤压核心', C.acc],
    ['④ 核心：高度脱水；DPA-Ca 占芽孢干重 5%–15%，稳定蛋白质与 DNA', '#d97706'],
  ]
  layers.forEach(([t, c], i) => {
    b.rect(560, 785 + i * 24, 9, 9, { fill: c, rx: 2 })
    b.text(578, 794 + i * 24, t, { size: 11.5, weight: 600, fill: C.sub })
  })
  // 伴孢晶体
  b.rect(560, 874, 790, 26, { fill: C.rnaL, fillOp: 0.45, stroke: C.rna, sw: 1.2, rx: 6 })
  b.text(572, 891, '苏云金芽孢杆菌：伴孢晶体在昆虫碱性肠液中活化成孔——安全高效的生物农药基础', { size: 11, weight: 600, fill: C.rnaD })

  // 右下：生活环
  b.rect(560, 910, 150, 44, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 8 })
  b.ctext(635, 928, '营养细胞', { size: 12.5, weight: 700, fill: C.dnaD })
  b.ctext(635, 946, '（活跃代谢）', { size: 9.5, fill: C.mute })
  b.arrow(714, 935, 790, 935, { stroke: C.sub, sw: 2, marker: 'mute' })
  b.ctext(753, 926, '营养匮乏', { size: 10, fill: C.sub })
  b.rect(796, 910, 210, 44, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(901, 928, '芽孢（休眠）', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(901, 946, '121 ℃ 湿热 15–30 min 方可杀灭', { size: 9.5, fill: C.mute })
  b.arrow(1012, 935, 1110, 935, { stroke: C.sub, sw: 2, marker: 'mute' })
  b.ctext(1061, 926, '活化 · 启动 · 长出', { size: 10, fill: C.sub })
  b.rect(1116, 910, 154, 44, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 8 })
  b.ctext(1193, 928, '营养细胞', { size: 12.5, weight: 700, fill: C.dnaD })
  b.ctext(1193, 946, '（萌发恢复）', { size: 9.5, fill: C.mute })
  b.text(560, 976, '休眠而非繁殖：一个营养细胞只产一个芽孢，萌发后仍为一个细胞；启动期数分钟内即丧失折光性与抗热性', { size: 10.5, fill: C.mute })
}

export default scene({
  title: '核区、质粒与芽孢：原核的遗传装备与休眠胶囊',
  subtitle: '大肠杆菌染色体 4.6×10⁶ bp、周长约 1.6 mm 而细胞仅约 2 μm；芽孢休眠而非繁殖，DPA-Ca 占干重 5%–15%，121 ℃ 湿热 15–30 min 方可杀灭',
  draw,
})
