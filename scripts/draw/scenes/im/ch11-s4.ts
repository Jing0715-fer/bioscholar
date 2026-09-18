// im ch11-s4 神经-内分泌-免疫网络：HPA 轴 · 胆碱能抗炎通路 · 发热（39-g 批C）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // 副标题过长（scene 两行自动换行仍溢出）→ 手动三行渲染（原文未改动）
  b.ctext(700, 77, '神经、内分泌与免疫三大系统互表达受体、互为信号源，HPA 轴、交感神经与迷走神经为三条解剖干线；糖皮质激素经胞内受体抑制促炎基因、诱导淋巴细胞凋亡并压制 Th1，炎症细胞因子上传激活 HPA 轴构成炎症自限的内分泌负反馈；', { size: 12, fill: C.mute })
  b.ctext(700, 94, '胆碱能抗炎通路（2000 年前后确立）经迷走神经-乙酰胆碱-α7 烟碱型受体抑制巨噬细胞促炎因子合成，脾神经-乙酰胆碱能 T 细胞接力完成脾内末段；', { size: 12, fill: C.mute })
  b.ctext(700, 111, 'IL-1、TNF、IL-6 经 PGE2 上移体温调定点致发热并驱动病态行为，非甾体抗炎药抑制环氧化酶退热；自身免疫病是遗传易感、分子模拟与表位扩展、屏障失守及调节失效多环节失守的复合终局（同卵双胞胎一致率常仅 20%–40%）', { size: 12, fill: C.mute })

  // ============ 一、总蓝图 ============
  b.panel(30, 132, 1340, 274, { title: '一、总蓝图：神经 · 内分泌 · 免疫三大系统互表达受体、互为信号源' })

  b.rect(150, 196, 260, 56, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.8, rx: 9 })
  b.ctext(280, 220, '神经系统', { size: 14, weight: 700, fill: C.accD })
  b.ctext(280, 240, '交感 / 迷走神经递质', { size: 9.5, fill: C.sub })
  b.rect(990, 196, 260, 56, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 1.8, rx: 9 })
  b.ctext(1120, 220, '内分泌系统', { size: 14, weight: 700, fill: C.rnaD })
  b.ctext(1120, 240, '皮质醇等激素', { size: 9.5, fill: C.sub })
  b.rect(565, 326, 260, 56, { fill: C.dnaL, fillOp: 0.55, stroke: C.dna, sw: 1.8, rx: 9 })
  b.ctext(695, 350, '免疫系统', { size: 14, weight: 700, fill: C.dnaD })
  b.ctext(695, 370, '细胞因子 · 趋化因子', { size: 9.5, fill: C.sub })

  b.arrow(416, 224, 984, 224, { stroke: C.mute, sw: 2, marker: 'mute', markerStart: 'mute' })
  b.arrow(300, 256, 520, 336, { stroke: C.mute, sw: 2, marker: 'mute', markerStart: 'mute' })
  b.arrow(870, 336, 1090, 256, { stroke: C.mute, sw: 2, marker: 'mute', markerStart: 'mute' })

  b.rect(540, 236, 320, 40, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(700, 260, '互表达受体 · 互为信号源', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(60, 284, '炎症细胞因子上传激活 HPA 轴，构成炎症自限的内分泌负反馈；三条解剖干线：HPA 轴 · 交感神经 · 迷走神经。', { size: 10.5, fill: C.sub, maxW: 440, lh: 15 })
  b.wtext(880, 284, '糖皮质激素经胞内受体抑制促炎基因、诱导淋巴细胞凋亡并压制 Th1——应激的免疫账单。', { size: 10.5, fill: C.sub, maxW: 420, lh: 15 })

  // ============ 二、三条干线 ============
  b.panel(30, 418, 1340, 306, { title: '二、三条解剖干线的分子账本与免疫效应方向' })
  b.table(60, 468, 1280, {
    headers: ['通路', '关键分子', '免疫效应方向', '代表性证据或应用'],
    colW: [240, 270, 300, 470],
    rowH: 42,
    fontSize: 11,
    rows: [
      ['HPA 轴-糖皮质激素', '皮质醇、糖皮质激素受体', '广泛抑制、Th1 压制', '泼尼松治疗排斥与自身炎'],
      ['交感-儿茶酚胺', '去甲肾上腺素、β2 受体', '抑制促炎因子、Th2 偏置', '淋巴器官交感纤维支配'],
      ['胆碱能抗炎通路', '乙酰胆碱、α7 烟碱受体', '抑制 TNF 等促炎因子', '迷走神经刺激改善炎症模型'],
      ['细胞因子入脑', 'IL-1、TNF、IL-6、PGE2', '发热、病态行为、HPA 激活', '非甾体抗炎药退热原理'],
    ],
  })
  b.wtext(60, 694, '胆碱能抗炎通路（2000 年前后确立的炎症反射弧）：组织炎症信号经迷走神经感觉纤维上传脑干（孤束核等整合），经迷走运动纤维下传；脾神经-乙酰胆碱能 T 细胞接力完成脾内末段。', { size: 10.5, weight: 600, fill: C.ink, maxW: 1260, lh: 15 })

  // ============ 三、发热与自身免疫病终局 ============
  b.panel(30, 732, 1340, 242, { title: '三、细胞因子反向入脑：发热与病态行为 · 失耐受的复合终局' })

  b.rect(60, 782, 620, 162, { fill: C.warnL, fillOp: 0.45, stroke: C.warn, sw: 1.6, rx: 9 })
  b.text(78, 806, '发热与病态行为：免疫系统的「求助广播」', { size: 12.5, weight: 700, fill: '#92400e' })
  b.wtext(78, 830, 'IL-1、TNF、IL-6 经 PGE2 上移体温调定点致发热，并驱动病态行为、急性期反应与 HPA 轴激活——「生病感」本身即是细胞因子作品。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.wtext(78, 894, '非甾体抗炎药经抑制环氧化酶（COX）减少 PGE2 而退热。', { size: 10.5, weight: 600, fill: '#92400e', maxW: 580, lh: 14 })

  b.rect(710, 782, 630, 162, { fill: C.badL, fillOp: 0.3, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(728, 806, '自身免疫病：多环节失守的复合终局', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(728, 830, '遗传易感（HLA 关联）＋ 分子模拟与表位扩展 ＋ 屏障失守 ＋ 调节失效——同卵双胞胎一致率常仅 20%–40%。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })
  b.wtext(728, 886, '基因上膛，扣动扳机的却是环境与随机。', { size: 11, weight: 700, fill: C.bad, maxW: 590, lh: 14 })
}

export default scene({
  title: '神经-内分泌-免疫网络：HPA 轴、胆碱能抗炎通路与细胞因子入脑',
  draw,
})
