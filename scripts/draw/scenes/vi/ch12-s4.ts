// vi ch12-s4 病毒学与公共卫生前沿
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、GISRS 全球监测网络（左上） ============
  b.panel(30, 132, 660, 250, { title: '一、GISRS：全球流感监测与疫苗组分匹配' })
  b.tag(160, 195, '1952 建立 · 2011 更名', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.ink, pad: 8 })
  b.wtext(70, 240, '全球毒株监测网络支撑每年两次（南/北半球）的疫苗组分推荐；鸡胚适应与预测滞后是 H3N2 疫苗有效性波动的主因。', { size: 12.5, fill: C.sub, maxW: 580, lh: 19 })
  // 网络节点示意
  const hubs: [number, number, string][] = [
    [140, 320, 'WHO 中心'], [300, 335, '国家实验室'], [460, 320, '疫苗厂商'], [580, 345, '预警发布'],
  ]
  hubs.forEach(([x, y, s]) => {
    b.circle(x, y, 8, { fill: C.acc })
    b.ctext(x, y + 26, s, { size: 12, weight: 600, fill: C.sub })
  })
  b.line(148, 320, 292, 335, { stroke: C.acc, sw: 1.8, opacity: 0.6 })
  b.line(308, 335, 452, 320, { stroke: C.acc, sw: 1.8, opacity: 0.6 })
  b.line(468, 320, 572, 345, { stroke: C.acc, sw: 1.8, opacity: 0.6 })
  b.ctext(360, 372, '正向细胞与序列化制备及更广呼吸道病毒扩展', { size: 11.5, fill: C.mute })

  // ============ 二、三个递进层级（右上） ============
  b.panel(720, 132, 650, 250, { title: '二、控制 → 消除 → 消灭：三级递进' })
  // 阶梯
  b.stairs(760, 340, 570, 130, ['控制', '消除', '消灭'], { fill: C.dnaL, stroke: C.dna, size: 15 })
  b.wtext(760, 200, '天花（1980）：唯一被消灭的人类病原', { size: 13, weight: 600, fill: C.ink, maxW: 280, lh: 18 })
  b.wtext(1060, 200, '牛瘟（2011）：动物界首例', { size: 13, weight: 600, fill: C.sub, maxW: 240, lh: 18 })
  b.wtext(760, 250, '脊灰：2 型与 3 型野生毒株分别于 2015 与 2019 年宣告根除，1 型残存于阿巴两国——消灭的「最后一英里」最难。', { size: 12.5, fill: C.sub, maxW: 580, lh: 19 })

  // ============ 三、耐药监测与噬菌体复兴（左下） ============
  b.panel(30, 402, 660, 270, { title: '三、耐药闭环与噬菌体治疗复兴' })
  b.wtext(70, 460, '耐药监测与治疗指南形成闭环：HIV 治疗前耐药超阈值推动一线方案转向多替拉韦；流感 H275Y 与乙肝恩替卡韦时代数据共同支撑「高屏障联合用药」原则。', { size: 12.5, fill: C.sub, maxW: 580, lh: 19 })
  // 噬菌体
  b.virion(140, 570, 26, { shape: 'helical', fill: C.dnaL })
  b.ctext(140, 635, '噬菌体', { size: 12.5, weight: 700, fill: C.dnaD })
  b.wtext(230, 545, '2016 静脉个体化噬菌体鸡尾酒与 2019 工程化分枝杆菌噬菌体成功病例 → 噬菌体治疗复兴；个体化定制 vs 批量监管的矛盾是规模化瓶颈。', { size: 12.5, fill: C.sub, maxW: 420, lh: 19 })

  // ============ 四、溶瘤病毒与 One Health（右下） ============
  b.panel(720, 402, 650, 270, { title: '四、溶瘤病毒、载体治疗与 One Health' })
  b.wtext(760, 460, 'T-VEC（2015 获批）：删除毒力基因 + GM-CSF 的 HSV-1 载体实现「复制 + 免疫」的溶瘤治疗。', { size: 12.5, weight: 600, fill: C.sub, maxW: 580, lh: 19 })
  b.wtext(760, 510, 'AAV 与慢病毒载体支撑基因治疗——包装上限、预存抗体、剂量毒性与产能构成规模化挑战。', { size: 12.5, fill: C.sub, maxW: 580, lh: 19 })
  // One Health 三环
  const rings: [number, number, string][] = [
    [900, 600, '人'], [1010, 600, '动物'], [955, 668, '环境'],
  ]
  rings.forEach(([x, y, s]) => {
    b.circle(x, y, 34, { fill: C.okL, stroke: C.ok, sw: 2 })
    b.ctext(x, y + 5, s, { size: 14, weight: 700, fill: C.ink })
  })
  b.wtext(1060, 580, 'One Health：人-动物-环境界面治理统摄溢出预防、污水监测与禽流感预警——病毒学转化为公共卫生成果的制度出口。', { size: 12.5, weight: 600, fill: C.ok, maxW: 290, lh: 19 })

  // 底部主线条
  b.panel(30, 690, 1340, 48, { fill: '#f1f5f9' })
  b.ctext(700, 720, '从实验室到全球治理：监测网络（GISRS）× 分级目标（消灭/消除/控制）× 耐药闭环 × 新疗法（噬菌体/溶瘤/载体）× One Health 制度出口', { size: 13, weight: 600, fill: C.sub })
}

export default scene({
  title: '病毒学与公共卫生前沿',
  subtitle: 'GISRS 全球监测 · 天花 1980 唯一消灭案例 · 脊灰 2/3 型已根除 · 噬菌体复兴与 T-VEC 溶瘤 · AAV 载体 · One Health 界面治理',
  draw,
})
