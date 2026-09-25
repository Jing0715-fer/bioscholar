// xc ch10-s4 精修收敛与最终模型（Task 4-d）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、收敛四判据 ============
  b.panel(30, 132, 660, 430, { title: '一、收敛四判据：全过才算收工' })
  const check = (x: number, y: number) => {
    b.rect(x, y, 18, 18, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 4 })
    b.path(`M ${x + 4},${y + 10} L ${x + 8},${y + 14} L ${x + 14},${y + 5}`, { fill: 'none', stroke: C.okD, sw: 2.4 })
  }
  const jud = (x: number, y: number, t: string, s: string) => {
    check(x, y)
    b.text(x + 30, y + 14, t, { size: 11.5, weight: 700, fill: C.ink })
    b.wtext(x + 30, y + 34, s, { size: 9.5, fill: C.sub, maxW: 260, lh: 13 })
  }
  jud(56, 184, '① R 变化趋平', '连续数轮 R_{work} 与 R_{free} 的变化都小于 0.1%，再修只是空转')
  jud(366, 184, '② 几何 outlier 清零', 'Ramachandran、rotamer、显著 clash 全部清账或给出书面解释')
  jud(56, 290, '③ 差值图干净', '无遗留的 ±4σ 孤立峰——正峰是未建模物质，负峰是占有率或 B 报错的位置')
  jud(366, 290, '④ B 分布平滑', '沿主链相邻原子 B 连续过渡，核心到表面梯度合理，无锯齿')
  // 病案警示
  b.rect(56, 386, 600, 118, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 9 })
  b.text(74, 412, '病案警示：R 停在平台而差值图仍有大片残留', { size: 11.5, weight: 700, fill: C.badD })
  b.wtext(74, 434, '这是模型系统性缺块的信号（整段无序未处理、配体漏建、体溶剂模型失当），此时再多的轮数也无济于事，须回到建模层面动手术——R 只能度量「已建模部分」的失配，度量不了「没建的部分」。', { size: 10, fill: C.sub, maxW: 566, lh: 14 })
  b.wtext(74, 486, 'B 分布的形态即诊断线索：锯齿指向 register 错位（第 9 章）、断崖指向错误的无序建模、全线过平指向 B 根本没被真精修。', { size: 10, fill: C.mute, maxW: 566, lh: 14 })
  b.wtext(56, 530, '四条判据互相独立又互相印证——单看 R 一条定收敛，是初学者最常犯的懒病。', { size: 10.5, weight: 700, fill: C.ink, maxW: 616, lh: 15 })

  // ============ 二、水的最终清点 ============
  b.panel(710, 132, 660, 430, { title: '二、水的最终清点：数量与分辨率匹配' })
  const wrow = (y: number, res: string, cnt: string, note: string, stroke: string, fill: string) => {
    b.rect(730, y, 150, 54, { fill, stroke, sw: 1.7, rx: 7 })
    b.ctext(805, y + 22, res, { size: 11.5, weight: 700, fill: C.ink })
    b.ctext(805, y + 42, cnt, { size: 10, weight: 700, fill: stroke })
    b.wtext(900, y + 16, note, { size: 10, fill: C.sub, maxW: 390, lh: 14 })
  }
  wrow(184, '2 Å', '每残基约 1 个', '全蛋白数百个（200 至 400 常见）', C.ok, C.okL)
  wrow(248, '3 Å', '少数几十个或零', '只留证据最强的有序水', C.warn, C.warnL)
  wrow(312, '3.5 Å 以上', '放水基本是自欺', '分辨率撑不起水的证据强度', C.bad, C.badL)
  b.wtext(730, 392, '纪律加两条：R_{free} 监控——每批水加完看 R_{free} 持平或下降，上涨即回滚，那是水在拟合噪声的现场；逐轮增删——REFMAC 的 ARP/waters 与 phenix.refine 的 ordered water 先在峰上置水，B 飙出区间或峰消失的水下一轮自动删除，最终存量是自然选择的结果。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 470, '人工把关四条：孤悬无氢键伙伴的水先删为敬；成排堆在晶体表面的水链多为溶剂噪声；骑在对称元素上的水常是半个占有；与配体距离小于 2.2 Å 的「水」要查化学身份。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })
  b.wtext(730, 530, '水的质量是审稿人估量建模认真程度的低成本样本——一个 clash 满屏的水网，读者有理由怀疑别处更不认真。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 三、B 曲线终审 ============
  b.panel(30, 572, 660, 390, { title: '三、全局 B 终审与 TLS 报告口径' })
  const bx = 60, by = 780, bw = 340, bh = 150
  b.axis(bx, by, bw, bh, {
    title: 'B 沿残基序号（合格形态）', xlabel: '残基序号', grid: false,
    yticks: [[0, '0'], [0.5, '30'], [1, '60 Å^{2}']],
  })
  const bC: [number, number][] = [[0, 0.38], [0.1, 0.3], [0.22, 0.26], [0.35, 0.3], [0.5, 0.27], [0.65, 0.33], [0.8, 0.42], [0.9, 0.5], [1, 0.58]]
  b.curve(bx, by, bw, bh, bC, { stroke: C.dna, sw: 2.4, smooth: true })
  const bW: [number, number][] = [[0, 0.5], [0.15, 0.46], [0.3, 0.48], [0.5, 0.45], [0.7, 0.5], [0.88, 0.55], [1, 0.6]]
  b.curve(bx, by, bw, bh, bW, { stroke: C.acc, sw: 2, smooth: true, dash: '6 4' })
  b.legend(bx + 14, by - bh + 18, [['主链 B（平缓起伏）', C.dna], ['水的 B（略高于周边）', C.acc]], { size: 9.5 })
  // 三种病态
  const sick = (x: number, t: string, kind: number) => {
    b.rect(x, 626, 124, 88, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
    b.ctext(x + 62, 618, t, { size: 9.5, weight: 700, fill: C.sub })
    const pts: [number, number][] = []
    for (let i = 0; i <= 24; i++) {
      const f = i / 24
      let v = 0.45
      if (kind === 0) v = 0.4 + 0.32 * Math.abs(Math.sin(i * 2.1))
      else if (kind === 1) v = f < 0.6 ? 0.4 : 0.9
      else v = 0.46
      pts.push([x + 10 + f * 104, 700 - v * 56])
    }
    b.polyline(pts, { stroke: kind === 2 ? C.mute : C.warn, sw: 2 })
  }
  sick(425, '锯齿：register 错位', 0)
  sick(561, '断崖：无序建模错', 1)
  b.rect(425, 726, 124, 60, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(487, 718, '全线过平', { size: 9.5, weight: 700, fill: C.sub })
  b.line(437, 764, 537, 764, { stroke: C.mute, sw: 2 })
  b.ctext(487, 752, 'B 没被真精修', { size: 8.5, fill: C.mute })
  b.wtext(425, 812, 'TLS 报告口径：每个原子的总有效 B ＝ TLS 贡献加残余 B；论文报「平均 B」须注明是否已含 TLS 贡献，TLS 分组（哪些残基一组、依据什么划分）写进方法学段落——这是可重复性的一部分。', { size: 10, fill: C.sub, maxW: 240, lh: 14 })
  b.wtext(60, 836, '配体终审四条：occupancy 与 B 永不同轮放开（先锁 1 修 B、回归不了再逐档降）；配体 B 与口袋残基同量级；RSRCC 不低于 0.8；polder 图上密度仍在。', { size: 10.5, fill: C.sub, maxW: 360, lh: 15 })
  b.wtext(60, 900, '任何一处的陡变都是「最后一处没结账」的路标——主链 B 应随二级结构与埋藏深度平缓起伏，配体 B 与口袋同带、水的 B 略高于周边蛋白。', { size: 10.5, fill: C.mute, maxW: 360, lh: 15 })

  // ============ 四、结构身份证与投递前四查 ============
  b.panel(710, 572, 660, 390, { title: '四、结构身份证、投递前四查与 OneDep' })
  b.table(730, 622, 620, {
    headers: ['条目', '示例内容', '说明'],
    colW: [150, 240, 230],
    rowH: 27,
    fontSize: 10,
    rows: [
      ['分辨率范围', '45.0 至 1.8 Å', '数据质量总纲（第 5、6 章）'],
      ['R_{work} 与 R_{free}', '0.19 与 0.23（gap 约 4 个百分点）', '在锚点带内（第 3 节）'],
      ['原子数', '蛋白约 2000、配体 30、水 260', '各类分开计'],
      ['平均 B', '蛋白 28、配体 25、水 38 Å^{2}', '注明含 TLS 口径'],
      ['空间群与晶胞', 'P2_{1}2_{1}2_{1}，a、b、c 与夹角', '与数据处理一致'],
    ],
  })
  b.text(730, 830, '投递前四查：', { size: 11, weight: 700, fill: C.ink })
  const pre = (x: number, t: string, s: string) => {
    b.rect(x, 844, 146, 62, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
    b.wtext(x + 73, 862, t, { size: 10, weight: 700, fill: C.ink, maxW: 130, lh: 12.5, anchor: 'middle' })
    b.wtext(x + 73, 884, s, { size: 8.5, fill: C.sub, maxW: 130, lh: 11, anchor: 'middle' })
  }
  pre(730, '序列对版', 'tag、linker、突变点均有交代')
  pre(886, '二硫键正确', 'SG 与 SG 约 2.03 至 2.05 Å')
  pre(1042, '金属配位合理', '锌约四配位、镁六配位带水壳')
  pre(1198, '配体字典版本', '与化学组件字典对齐')
  b.wtext(730, 930, 'OneDep 投递自动生成验证报告，红色条目终身公开——投递不是终点，而是把模型交给全场读者复核的起点（第 11 章）。', { size: 10.5, weight: 700, fill: C.mute, maxW: 616, lh: 15 })
}

export default scene({
  title: '精修收敛与最终模型',
  subtitle: '收敛四判据：R 变化小于 0.1%、几何 outlier 清零、无 ±4σ 遗留峰、B 分布平滑；2 Å 每残基约 1 个水（全蛋白 200–400）；身份证示例 Rwork 0.19 与 Rfree 0.23；投递前四查',
  draw,
})
