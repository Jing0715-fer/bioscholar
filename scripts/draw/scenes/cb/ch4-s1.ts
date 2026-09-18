// cb ch4-s1 信号假说与蛋白质分选信号（39-d 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、信号假说 + 信号肽/信号斑 ============
  b.panel(30, 132, 1340, 220, { title: '一、Blobel 信号假说：蛋白质自带「地址信息」（1999 年诺贝尔生理学或医学奖）' })
  b.wtext(56, 196, '多肽链自身携带的分选信号决定其在细胞内的最终去向，由细胞中相应的受体与转运机器识别执行。信号假说首先在分泌蛋白进入内质网的过程得到证明，并推广为细胞内蛋白质定向分选的普遍原则。', { size: 11.5, fill: C.sub, maxW: 560, lh: 16.5 })
  b.wtext(56, 288, '两个基本特征——充分性：把信号融合到无关蛋白足以引导其到达相应部位；必要性：突变或删除信号使蛋白失去正确定位（可用移植实验验证）。', { size: 11, fill: C.mute, maxW: 560, lh: 15.5 })
  // 信号肽示意（线性序列）
  b.rect(660, 200, 40, 16, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 4 })
  b.rect(700, 204, 290, 8, { fill: C.proL, stroke: C.pro, sw: 1.4, rx: 4 })
  b.ctext(680, 240, '信号肽', { size: 11, weight: 700, fill: C.bad })
  b.wtext(660, 264, 'N 端 15–30 aa 的线性序列，含疏水核心，转运后常被切除。', { size: 10.5, fill: C.sub, maxW: 340, lh: 14.5 })
  // 信号斑示意（折叠后表面斑块）
  b.circle(1160, 218, 34, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.polygon([[1140, 206], [1156, 200], [1168, 210], [1152, 218]], { fill: C.enzL, stroke: C.enz, sw: 1.5 })
  b.ctext(1160, 282, '信号斑', { size: 11, weight: 700, fill: C.enz })
  b.wtext(990, 264, '折叠后由不连续肽段构成的三维表面斑块（如溶酶体酶被识别的位点）。', { size: 10.5, fill: C.sub, maxW: 330, lh: 14.5 })

  // ============ 二、分选信号总表 ============
  b.panel(30, 364, 1340, 330, { title: '二、经典分选信号总表' })
  b.table(56, 410, 1288, {
    headers: ['信号类型', '结构特征', '典型例子', '指导去向'],
    colW: [170, 400, 368, 350],
    rowH: 34,
    fontSize: 10.5,
    rows: [
      ['信号肽', 'N 端 15–30 aa，含疏水核心，常被切除', '分泌蛋白 ER 信号肽', '进入内质网'],
      ['导肽', 'N 端，带正电的两性螺旋', '线粒体、叶绿体前体蛋白', '进入线粒体/叶绿体'],
      ['信号斑', '折叠后由不连续肽段构成的表面斑块', '溶酶体酶被 GlcNAc 磷酸转移酶识别的位点', 'M6P 标记'],
      ['核定位信号（NLS）', '内部短肽，富含碱性氨基酸（SV40 大 T 抗原的 PKKKRKV）', '转录因子、输入蛋白货物', '入核'],
      ['核输出信号（NES）', '富含亮氨酸的短肽', '含 NES 的蛋白出核', '出核（CRM1 途径）'],
      ['ER 滞留信号', 'C 端 KDEL（可溶性蛋白）/ KKXX（膜蛋白）', 'BiP、calreticulin', '内质网滞留与回收'],
      ['过氧化物酶体信号', 'PTS1（C 端 SKL）/ PTS2（N 端）', '过氧化氢酶', '进入过氧化物酶体'],
    ],
  })

  // ============ 三、三种分选方式 ============
  b.panel(30, 710, 1340, 270, { title: '三、蛋白质分选的三种基本方式' })
  b.line(455, 775, 455, 960, { stroke: C.line, sw: 1.2 })
  b.line(885, 775, 885, 960, { stroke: C.line, sw: 1.2 })
  // ① 门控运输
  b.text(56, 780, '① 门控运输', { size: 12.5, weight: 700, fill: C.ink })
  b.nucleusU(210, 858, 52, { label: '' })
  b.rect(152, 846, 12, 24, { fill: '#ffffff', stroke: C.pro, sw: 1.6, rx: 3 })
  b.circle(122, 858, 10, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.arrow(134, 858, 148, 858, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.circle(186, 858, 9, { fill: C.proL, stroke: C.pro, sw: 1.4 })
  b.ctext(158, 894, '核孔', { size: 10, weight: 600, fill: C.proD })
  b.wtext(56, 924, '经核孔复合体在细胞核与细胞质间运输；蛋白质保持折叠状态，甚至以核糖核蛋白复合体形式通过。', { size: 10.5, fill: C.sub, maxW: 370, lh: 14.5 })
  // ② 跨膜运输
  b.text(480, 780, '② 跨膜运输', { size: 12.5, weight: 700, fill: C.ink })
  b.bilayer(500, 860, 200)
  b.rect(591, 820, 14, 60, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 5 })
  b.ribo(598, 806, { scale: 0.7 })
  b.path('M 598,818 q 6,10 0,20 q -6,10 0,20 q 6,10 0,20 q -6,9 0,17', { stroke: C.pro, sw: 1.8, fill: 'none' })
  b.ctext(598, 908, '易位子', { size: 10, weight: 600, fill: C.enzD })
  b.wtext(480, 924, '经易位子穿过细胞器膜（ER 共翻译转运；线粒体、叶绿体与过氧化物酶体为翻译后转运）；多肽链须处于伸展或至少部分解折叠状态。', { size: 10.5, fill: C.sub, maxW: 370, lh: 14.5 })
  // ③ 囊泡运输
  b.text(910, 780, '③ 囊泡运输', { size: 12.5, weight: 700, fill: C.ink })
  b.golgi(980, 820, 100, { label: '' })
  b.vesicle(1090, 856, 20, { coat: 'cop' })
  b.arrow(1035, 856, 1062, 856, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.circle(1190, 856, 27, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(1190, 860, '内体', { size: 10.5, weight: 700, fill: C.accD })
  b.arrow(1115, 856, 1157, 856, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.ctext(980, 908, '高尔基体', { size: 10, weight: 600, fill: C.accD })
  b.wtext(910, 924, '以运输小泡形式在细胞器之间转移，蛋白质所在的膜与腔环境保持完整——分泌途径与内吞途径的主干。', { size: 10.5, fill: C.sub, maxW: 420, lh: 14.5 })
}

export default scene({
  title: '信号假说与蛋白质分选信号',
  subtitle: 'Blobel（1999 诺贝尔奖）：多肽链自带「地址信息」——信号肽（线性可切除）与信号斑（折叠后三维斑块）；NLS 入核、KDEL 滞留 ER、PTS1 入过氧化物酶体；分选经门控／跨膜／囊泡三种方式执行',
  draw,
})
