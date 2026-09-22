// sb ch11-s1 蛋白质NMR波谱学基础（Task 6-sb）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、HSQC 指纹谱 ============
  b.panel(30, 132, 700, 430, { title: '一、¹H-¹⁵N HSQC：每个残基一枚身份证' })
  // 坐标
  const x0 = 120, y0 = 520, w = 560, h = 320
  b.line(x0, y0, x0 + w, y0, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.line(x0, y0, x0, y0 - h, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(x0 + w / 2, y0 + 26, '¹⁵N 化学位移（ppm）', { size: 11, weight: 600, fill: C.sub })
  b.ctext(x0 - 26, y0 - h / 2, '¹H（ppm）', { size: 11, weight: 600, fill: C.sub, rotate: -90 })
  for (let k = 0; k <= 5; k++) {
    b.line(x0 + (w / 5) * k, y0, x0 + (w / 5) * k, y0 - 6, { stroke: C.sub, sw: 1.4 })
    b.ctext(x0 + (w / 5) * k, y0 + 14, String(130 - k * 10), { size: 9, fill: C.mute })
  }
  // 峰点阵（伪随机但稳定）
  const peaks: Array<[number, number, number]> = [
    [0.12, 0.3, 3], [0.22, 0.55, 3.4], [0.3, 0.22, 3], [0.36, 0.72, 3.2], [0.45, 0.4, 3.6],
    [0.5, 0.62, 3.2], [0.58, 0.28, 3.5], [0.64, 0.5, 3.3], [0.7, 0.78, 3], [0.78, 0.35, 3.4],
    [0.85, 0.6, 3.2], [0.92, 0.2, 3], [0.18, 0.85, 3.1], [0.62, 0.88, 3.3], [0.9, 0.82, 3.2],
  ]
  for (const [fx, fy, r] of peaks) {
    const px = x0 + fx * w, py = y0 - fy * h
    b.circle(px, py, r, { fill: C.pro, stroke: 'none', fillOpacity: 0.75 })
  }
  b.wtext(140, 560, '每个非脯氨酸残基给出一枚酰胺峰（100 残基蛋白约 100 枚）——序列指纹：突变、配体结合、构象变化都会移动特定峰位。', { size: 10.5, fill: C.sub, maxW: 640, lh: 15 })

  // ============ 二、同位素标记 ============
  b.panel(750, 132, 620, 200, { title: '二、同位素标记：NMR 的入场券' })
  b.table(770, 172, 580, {
    headers: ['体系', '标记组合', '用途'],
    colW: [130, 200, 250],
    rowH: 34,
    fontSize: 11,
    rows: [
      ['大肠杆菌', '¹⁵NH_{4}Cl + ¹³C-葡萄糖', '双标记：三共振指定'],
      ['氘代', 'D_{2}O 培养基 + 选择性 H 回补', '降低谱线展宽'],
      ['TROSY 体系', '²H + ¹⁵N + ¹³C', '大分子量极限突破'],
    ],
  })
  b.wtext(770, 306, '样品需求：0.2–1 mM 浓度、300–600 μL、稳定性足以撑数天的采集。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })

  // ============ 三、磁场与弛豫 ============
  b.panel(750, 352, 620, 210, { title: '三、磁场强度与分子量极限' })
  const fields = [
    ['600 MHz', '14.1 T', '常规蛋白主力'],
    ['800 MHz', '18.8 T', '灵敏度与色散提升'],
    ['950 MHz', '22.3 T', '高色散旗舰'],
  ]
  b.table(770, 392, 580, {
    headers: ['氢谱频率', '磁场强度', '定位'],
    colW: [140, 140, 300],
    rowH: 34,
    fontSize: 11,
    rows: fields,
  })
  b.wtext(770, 520, '分子量极限的物理根源：分子越大转动越慢、弛豫越快、谱线越宽。常规小于 30–50 kDa；TROSY（Pervushin 1997 年）＋氘代把极限推至约 100 kDa。', { size: 10.5, fill: C.sub, maxW: 580, lh: 16 })

  // ============ 四、三大方法样品对照 ============
  b.panel(30, 582, 1340, 190, { title: '四、三大方法样品要求速查' })
  b.table(50, 622, 1300, {
    headers: ['维度', 'X 射线晶体学', '冷冻电镜（单颗粒）', '溶液 NMR'],
    colW: [150, 380, 380, 390],
    rowH: 34,
    fontSize: 11,
    rows: [
      ['样品形态', '有序晶体', '玻璃化薄冰载网', '同位素标记溶液'],
      ['典型用量', '微克级／晶体', '约 0.1–0.5 mg 上样', '数 mg（0.2–1 mM）'],
      ['分子量窗口', '数 kDa 至数 MDa', '约 100 kDa 以上', '常规小于 30–50 kDa'],
    ],
  })
  b.ctext(700, 756, 'HSQC 一张谱即可体检样品——峰位分布均匀、线宽一致的样品才值得进入三共振指定（第 11 章第 2 节）', { size: 11, weight: 600, fill: C.mute })
}

export default scene({
  title: '蛋白质 NMR 基础：HSQC 指纹谱、同位素标记与分子量极限',
  subtitle: '¹H-¹⁵N HSQC 每个非脯氨酸残基一枚峰；¹⁵NH_{4}Cl/¹³C-葡萄糖双标记、0.2–1 mM；600–950 MHz（14.1–22.3 T）；常规小于 30–50 kDa、TROSY 加氘代至约 100 kDa（Pervushin 1997）',
  draw,
})
