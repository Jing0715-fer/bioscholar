// sb ch7-s2 分子置换两步搜索（Task 6-sb）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Patterson 自相关 ============
  b.panel(30, 132, 660, 330, { title: '一、Patterson 函数：不用相位的相关图' })
  b.tag(110, 170, 'P(u) = Σ |F|^{2} exp(−2πi h·u)', { fill: C.dnaL, stroke: C.dna, size: 12.5, weight: 700, tfill: C.dnaD, pad: 11 })
  b.wtext(60, 205, '以 |F|² 为系数的傅里叶合成——无需相位即可计算；每个峰对应一对原子间的位移向量（峰高 ~ Z_{1}Z_{2}）。分子内向量聚成特征簇，其位置只随分子取向变化、不随平移变化——这是旋转函数的罗盘。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  // 模拟分子与向量簇
  b.rect(90, 260, 180, 150, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(180, 278, '分子（5 原子示意）', { size: 10.5, weight: 700, fill: C.ink })
  const atoms: Array<[number, number]> = [[130, 320], [175, 305], [215, 330], [155, 355], [205, 380]]
  for (const [ax, ay] of atoms) b.circle(ax, ay, 5, { fill: C.dna, stroke: 'none' })
  b.rect(300, 260, 180, 150, { fill: C.dnaL, stroke: C.dna, sw: 1.4, rx: 8 })
  b.ctext(390, 278, '分子内向量簇', { size: 10.5, weight: 700, fill: C.dnaD })
  for (let i = 0; i < atoms.length; i++)
    for (let j = i + 1; j < atoms.length; j++) {
      const mx = 390 + (atoms[j][0] - atoms[i][0]) * 0.42
      const my = 335 + (atoms[j][1] - atoms[i][1]) * 0.42
      b.circle(mx, my, 2.2, { fill: C.dna, stroke: 'none' })
    }
  b.arrow(275, 335, 295, 335, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.wtext(500, 290, '把「分子内向量簇」当作指纹：晶体 Patterson 与模型 Patterson 在取向空间互相关，峰值即正确取向——旋转函数（Rossmann 与 Blow 1962 年；Crowther 1972 年快速实现）。', { size: 10.5, fill: C.sub, maxW: 170, lh: 15 })
  b.wtext(500, 390, '取向固定后，沿晶格三个方向平移搜索使交叉向量匹配——平移函数给出分子在晶胞中的位置。', { size: 10.5, fill: C.sub, maxW: 170, lh: 15 })

  // ============ 二、两步搜索流程 ============
  b.panel(710, 132, 660, 330, { title: '二、旋转 → 平移 → packing 三道闸门' })
  const steps = [
    ['① 旋转函数', '模型取向扫描（角度网格/快速 FFT）', C.acc],
    ['② 平移函数', '三轴平移搜索交叉峰', C.dna],
    ['③ packing 检验', '排除分子碰撞的物理解', C.warn],
    ['④ Phaser 判读', 'LLG 显著为正、TFZ 分档', C.ok],
  ]
  let sy = 185
  for (const [t, s, c] of steps) {
    b.tag(760, sy, t, { fill: `${c}22`, stroke: c, size: 11.5, weight: 700, tfill: C.ink, pad: 9 })
    b.text(880, sy + 4, s, { size: 10.5, fill: C.sub })
    if (sy < 290) b.arrow(800, sy + 18, 800, sy + 34, { stroke: C.mute, sw: 1.6, marker: 'ink' })
    sy += 52
  }
  b.wtext(730, 410, 'TFZ 分档：大于 8 大概率正确解、5–8 存疑需复核；多拷贝时递增搜索（逐个加上并重跑平移）。ensemble 多模型平均可把约 1 Å 的模型误差压缩过半。', { size: 10.5, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 三、模型来源决策 ============
  b.panel(30, 482, 660, 250, { title: '三、模型来源决策（AlphaFold 时代）' })
  b.table(50, 522, 620, {
    headers: ['来源', '序列一致性', '操作'],
    colW: [170, 140, 310],
    rowH: 40,
    fontSize: 11,
    rows: [
      ['PDB 同源结构', '大于 30%', '直接使用，成功率最高'],
      ['同源需修剪', '20–30%', 'Sculptor/CHAINSAW 截侧链'],
      ['AlphaFold 预测', '小于 20%', '按 pLDDT 剪枝后常能破局'],
      ['多模型 ensemble', '多候选', '平均降误差约一半'],
    ],
  })
  b.wtext(50, 706, 'AF2 模型主链精度（pLDDT 大于 90 时约 1 Å）已与优质同源模型相当——分子置换成功率在预测时代大幅跃升。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、陷阱清单 ============
  b.panel(710, 482, 660, 250, { title: '四、四大陷阱与退路' })
  const traps = [
    ['假解', 'LLG 边缘值、精修 R 不降、图不成蛋白样', C.bad],
    ['空间群错', '指标化歧义/伪对称——重索引后重试', C.warn],
    ['多拷贝 NCS', '顺序搜索 + packing 把关', C.acc],
    ['低分辨率', '强 NCS 限制 + 密度修饰救图', C.dna],
  ]
  let ty = 522
  for (const [t, s, c] of traps) {
    b.circle(740, ty, 5, { fill: c, stroke: 'none' })
    b.text(756, ty + 4, t + '：' + s, { size: 10.5, fill: C.sub })
    ty += 36
  }
  b.wtext(730, 688, '退路：MR-SAD 组合（弱模型＋弱反常互补）、换结晶条件、回到实验定相（第 7 章第 3 节）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // 底部收束
  b.ctext(700, 770, '分子置换把「已知」借给「未知」——先用模型粗略定相、再让数据逐步说服几何', { size: 11.5, weight: 600, fill: C.mute })
}

export default scene({
  title: '分子置换：Patterson 旋转/平移两步搜索与现代实践',
  subtitle: 'P(u) = Σ|F|^{2}exp(−2πih·u) 免相位；旋转函数定取向（Rossmann-Blow 1962）＋平移定位置＋packing 闸门；Phaser TFZ 大于 8 判定；同源大于 30% 直接用／小于 20% 用 AlphaFold（pLDDT 剪枝）',
  draw,
})
