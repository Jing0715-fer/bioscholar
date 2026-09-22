// em ch5-s1 负染技术流程（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、五步操作流程 ============
  b.panel(30, 132, 1340, 290, { title: '一、五步操作流程（全程不过十分钟）' })
  const st = (x: number, t: string, lines: string[], fill: string, stroke: string, tfill: string) => {
    b.rect(x, 190, 240, 140, { fill, stroke, sw: 1.8, rx: 9 })
    b.ctext(x + 120, 216, t, { size: 13.5, weight: 700, fill: tfill })
    lines.forEach((s, i) => b.ctext(x + 120, 242 + i * 19, s, { size: 10.5, fill: C.sub }))
  }
  st(55, '① 辉光放电', ['连续碳膜铜网亲水化', '典型 15–30 mA、约 60 s', '接触角 > 90° → < 20°', '否则水滴缩球、颗粒附不上'], C.accL, C.acc, C.accD)
  st(330, '② 滴样吸附', ['滴上约 3–5 μL 样品', '静置 30–60 s', '静电与物理吸附贴膜', '亲和强者数秒即足'], C.dnaL, C.dna, C.dnaD)
  st(605, '③ 滤纸吸干', ['滤纸从网边吸走液滴', '残液量决定染壳厚度', '滤纸批次与含湿量是变量'], C.proL, C.pro, C.proD)
  st(880, '④ 染色', ['滴染液 30–60 s 后吸干', '可重复一次加深衬度', '染液浓度 0.5–2%（w/v）'], C.rnaL, C.rna, C.rnaD)
  st(1155, '⑤ 空气干燥', ['空气中自然干燥即成', '样品浓度约 10–50 μg/mL', '太稀颗粒寥寥、太浓叠罗汉'], C.okL, C.ok, C.okD)
  b.arrow(297, 260, 326, 260, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(572, 260, 601, 260, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(847, 260, 876, 260, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(1122, 260, 1151, 260, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(700, 372, '常规筛查以连续碳膜为默认（颗粒密度高而均匀）；微孔碳膜让部分颗粒悬于孔内薄冰，形态统计更接近溶液状态', { size: 10.5, fill: C.sub })
  b.ctext(700, 400, '历史：1962 年 Caspar 与 Klug 从负染病毒图像提炼二十面体准等价理论；TMV 螺旋参数同样先由负染定调', { size: 10.5, fill: C.mute })

  // ============ 二、染液三杰 ============
  b.panel(30, 444, 660, 260, { title: '二、染液三杰与选择' })
  b.table(50, 488, 620, {
    headers: ['染液', '常用浓度', 'pH 特点', '适用与注意'],
    colW: [110, 90, 120, 300], rowH: 44, fontSize: 12.5,
    rows: [
      ['醋酸铀 UAc', '1–2%', '约 4', '通用、颗粒细腻；酸性改变某些蛋白'],
      ['甲酸铀 UF', '0.5–1%', '约 3.5–4', '颗粒最细、细节最佳；须新鲜配制并过滤'],
      ['磷钨酸 PTA', '1–2%', '可调至中性', '对酶颗粒与 pH 敏感样品友好'],
    ],
  })
  b.wtext(50, 690, '铀（Z = 92）与钨（Z = 74）电子密度远高于有机物；两型化学：铀酰离子与负电基团配位渗入（UAc / UF），磷钨酸根与蛋白相斥仅机械包裹且 pH 可调。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、负片成像原理 ============
  b.panel(710, 444, 660, 260, { title: '三、负片成像原理：亮颗粒嵌于暗背景' })
  b.rect(740, 490, 260, 180, { fill: C.ink, rx: 5 })
  // 染料颗粒度（背景噪点）
  for (let i = 0; i < 22; i++) {
    const rx = 752 + ((Math.sin(i * 127.1) * 43758.5) % 1 + 1) % 1 * 236
    const ry = 502 + ((Math.sin(i * 311.7) * 12543.2) % 1 + 1) % 1 * 156
    b.circle(rx, ry, 1.6 + ((Math.sin(i * 74.7) * 9898.2) % 1 + 1) % 1 * 1.8, { fill: '#475569', opacity: 0.8 })
  }
  const hex: [number, number][] = []
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 - Math.PI / 2
    hex.push([870 + 46 * Math.cos(a), 580 + 46 * Math.sin(a)])
  }
  b.polygon(hex, { fill: '#f8fafc', stroke: '#cbd5e1', sw: 1.8 })
  b.ctext(870, 700, '负染像：颗粒成亮影、染壳背景暗（负片式）', { size: 10.5, fill: C.sub })
  b.wtext(1020, 510, '重金属盐干燥成壳包埋颗粒；成像正片逻辑里颗粒成了亮影、背景才是暗底——「负」染之名由此而来。', { size: 10.5, fill: C.sub, maxW: 320, lh: 16 })
  b.tag(1175, 600, '分辨率 15–20 Å 封顶', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 9 })
  b.tag(1175, 632, '空气干燥压扁假象', { fill: C.badL, stroke: C.bad, size: 10.5, tfill: C.badD, pad: 9 })
  b.tag(1175, 664, '优先取向 / 内部密度缺失', { fill: C.badL, stroke: C.bad, size: 10.5, tfill: C.badD, pad: 9 })

  // ============ 四、负染 vs 冷冻 ============
  b.panel(30, 728, 1340, 250, { title: '四、负染 vs 冷冻单颗粒：先侦察、后主攻' })
  b.table(50, 772, 900, {
    headers: ['投入项', '负染', '冷冻单颗粒'],
    colW: [180, 350, 370], rowH: 32, fontSize: 12,
    rows: [
      ['蛋白用量', '数微升、约 0.1–0.5 μg', '数十微升、约 10–100 μg'],
      ['浓度要求', '约 10–50 μg/mL', '约 0.5–5 mg/mL'],
      ['设备与耗材', '铜网、染液、常温电镜', '冷冻制样装置、低温冷台、机时'],
      ['从样品到答案', '半小时以内', '数天到数周'],
      ['分辨率回报', '约 15–20 Å 封顶', '向原子分辨率进发'],
    ],
  })
  b.tag(1160, 806, '负染确认均一性', { fill: C.rnaL, stroke: C.rna, size: 11.5, weight: 700, tfill: C.rnaD, pad: 10 })
  b.arrow(1160, 822, 1160, 846, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.tag(1160, 868, '投入冷冻制样', { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD, pad: 10 })
  b.arrow(1160, 884, 1160, 908, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.tag(1160, 930, '高分辨结构解析', { fill: C.proL, stroke: C.pro, size: 11.5, weight: 700, tfill: C.proD, pad: 10 })
  b.wtext(975, 952, '负染二维分类是手艺：类别平均里认「左右手」与构象态——其类别分布常直接预示冷冻数据的可分性。', { size: 9.5, fill: C.sub, maxW: 330, lh: 14 })
}

export default scene({
  title: '负染技术：以重元素造背景的快速筛查',
  subtitle: '辉光放电（15–30 mA、约 60 s）→ 滴样 3–5 μL 吸附 30–60 s → 滤纸吸干 → 染色 30–60 s（可两次）→ 空气干燥；分辨率约 15–20 Å，半小时给出二维形态学答案',
  draw,
})
