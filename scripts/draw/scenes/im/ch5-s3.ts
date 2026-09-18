// im ch5-s3 影响免疫原性的因素（39-g 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三方变量的函数 ============
  b.panel(30, 132, 1340, 240, { title: '一、免疫原性是抗原、宿主与免疫方式三方变量的函数，而非物质的固有常数' })
  const inputs: Array<[number, string, string, string, string, string]> = [
    [60, '抗原自身', '异物性 · 分子量', '化学组成 · 构象 · 物理状态', C.dna, C.dnaD],
    [500, '宿主', '遗传背景（MHC / Ir 基因）', '年龄 · 营养 · 健康状态', C.pro, C.proD],
    [940, '免疫方式', '进入途径 · 剂量', '免疫程序（初免 / 加强）', C.acc, C.accD],
  ]
  inputs.forEach(([x, t, s1, s2, col, colD]) => {
    b.rect(x, 178, 380, 118, { fill: col, fillOp: 0.09, stroke: col, sw: 1.7, rx: 9 })
    b.ctext(x + 190, 204, t, { size: 15, weight: 700, fill: colD })
    b.ctext(x + 190, 230, s1, { size: 11.5, fill: C.sub })
    b.ctext(x + 190, 256, s2, { size: 11.5, fill: C.sub })
    b.arrow(x + 190, 300, x + 190, 326, { stroke: C.mute, sw: 2.2, marker: 'mute' })
  })
  b.rect(460, 330, 480, 34, { fill: C.ink, rx: 8 })
  b.ctext(700, 352, '免疫原性强弱 = 三方变量的函数', { size: 14.5, weight: 700, fill: '#ffffff' })

  // ============ 二、因素总表 ============
  b.panel(30, 388, 1340, 306, { title: '二、影响因素总表：异物性居首，分子量定档，宿主与方式定走向' })
  b.table(60, 434, 1280, {
    headers: ['因素类别', '具体因素', '一般规律', '典型实例'],
    colW: [130, 190, 470, 490],
    rowH: 34,
    fontSize: 12,
    rows: [
      ['抗原自身', '异物性（首要）', '种系距离越大，免疫原性越强', '隐蔽抗原释放 → 自身免疫'],
      ['抗原自身', '分子量', '越大越强：大于 100 kDa 多为强免疫原，小于 10 kDa 通常微弱', '类毒素与 DNP 的对照'],
      ['抗原自身', '组成 · 构象 · 状态', '共同决定免疫原性强弱', '—'],
      ['宿主', 'MHC 肽结合基序', 'Ir 基因决定提呈效率——应答个体差异的遗传基础', '同品系应答者 / 无应答者'],
      ['免疫方式', '进入途径', '皮内与皮下最佳；口服倾向耐受', '口服耐受'],
      ['免疫方式', '剂量', '过高或过低剂量均倾向耐受', '低带 / 高带耐受'],
    ],
  })

  // ============ 三、两条规律图 ============
  b.panel(30, 710, 1340, 268, { title: '三、两条定量规律：异物性的种系阶梯与分子量档位' })

  // 左：异物性阶梯
  b.rect(60, 754, 620, 194, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(80, 780, '异物性：种系距离阶梯', { size: 13, weight: 700, fill: C.ink })
  const ladder: Array<[string, string, string, string]> = [
    ['自身成分', '无 / 极弱', C.okL, '#065f46'],
    ['同种异型抗原', '弱', C.warnL, '#92400e'],
    ['异种抗原', '强', C.badL, C.bad],
  ]
  ladder.forEach(([t, s, fill, tf], i) => {
    const xx = 90 + i * 190
    b.rect(xx, 800, 170, 44, { fill, stroke: C.line, sw: 1.2, rx: 7 })
    b.ctext(xx + 85, 818, t, { size: 11.5, weight: 700, fill: tf })
    b.ctext(xx + 85, 836, s, { size: 10, fill: C.sub })
    if (i < 2) b.arrow(xx + 172, 822, xx + 186, 822, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  })
  b.ctext(370, 876, '种系距离增大 → 异物性增强 → 免疫原性增强', { size: 11.5, weight: 600, fill: C.ink })
  b.ctext(370, 900, '隐蔽抗原（晶状体蛋白等）释放，可越过阶梯诱发自身免疫', { size: 10.5, fill: C.mute })
  b.ctext(370, 930, '同种异型抗原：同种不同个体间存在的那类抗原', { size: 10, fill: C.mute })

  // 右：分子量档位
  b.rect(710, 754, 610, 194, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(730, 780, '分子量档位（一般规律）', { size: 13, weight: 700, fill: C.ink })
  b.bars(760, 920, 500, 110, [1.2, 3, 5], {
    max: 5.6,
    labels: ['< 10 kDa', '10–100 kDa', '> 100 kDa'],
    vlabels: ['通常微弱', '中等', '强免疫原'],
    fill: C.accL, stroke: C.acc,
  })
  b.ctext(1010, 952, '分子量越大，免疫原性越强', { size: 11.5, weight: 600, fill: C.ink })
}

export default scene({
  title: '影响免疫原性的因素：抗原、宿主与免疫方式的三元函数',
  subtitle: '异物性是首要因素，随种系距离增大而增强；分子量大于 100 kDa 多为强免疫原、小于 10 kDa 通常微弱；宿主 MHC 肽结合基序（Ir 基因）决定提呈效率，是个体应答差异的遗传基础；进入途径与剂量影响应答走向——皮内与皮下最佳，过高或过低剂量及口服途径倾向耐受',
  draw,
})
