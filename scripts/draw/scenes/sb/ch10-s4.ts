// sb ch10-s4 分辨率评估与模型构建（Task SB-3）
import { scene, C, B, textW } from '../../lib'

const draw = (b: B) => {
  // ============ 一、FSC 曲线与 0.143 黄金准则 ============
  b.panel(30, 132, 660, 330, { title: '一、FSC 曲线与 0.143 黄金准则' })
  const ax = 70, ay = 340, aw = 330, ah = 160
  b.axis(ax, ay, aw, ah, {
    xticks: [[0.2, '10'], [0.4, '5'], [0.667, '3'], [1, '2']],
    yticks: [[0, '0'], [0.5, '0.5'], [1, '1.0']],
    xlabel: '分辨率（Å）',
  })
  b.text(64, 268, 'FSC', { size: 12, weight: 600, fill: C.sub, anchor: 'end' })
  b.curve(ax, ay, aw, ah, [[0, 0.97], [0.1, 0.96], [0.2, 0.94], [0.3, 0.88], [0.4, 0.78], [0.5, 0.62], [0.58, 0.45], [0.65, 0.28], [0.7, 0.18], [0.75, 0.12], [0.8, 0.08], [0.9, 0.03], [1, 0.01]], { stroke: C.acc, sw: 2.6 })
  b.line(ax, 317.1, ax + aw, 317.1, { stroke: C.rose, sw: 1.6, dash: '6 4' })
  b.text(404, 321, '0.143', { size: 10.5, weight: 700, fill: C.rose })
  b.line(ax, 260, ax + aw, 260, { stroke: C.mute, sw: 1.3, dash: '4 4' })
  b.text(404, 264, '0.5 旧口径', { size: 9.5, fill: C.mute })
  b.circle(307.6, 317.1, 4.5, { fill: C.rose, stroke: C.bg, sw: 1 })
  b.line(307.6, 317.1, 307.6, 340, { stroke: C.rose, sw: 1.2, dash: '3 3' })
  b.text(307.6, 302, '全局分辨率', { size: 9, weight: 600, fill: C.rose, anchor: 'middle' })
  b.wtext(460, 192, '0.143 并非拍脑袋：按两半独立重构的信噪比换算，FSC 0.143 处每一壳层信噪比约为 1——信号恰好与噪声打平（Rosenthal 与 Henderson 2003）。', { size: 9.5, fill: C.sub, maxW: 195, lh: 13.5 })
  b.wtext(460, 272, '三条纪律：FSC 是全局平均，不保证处处达标；金标准分半是合法性前提，不分半的分辨率永远虚高；分辨率数字须与可解读性对账。', { size: 9.5, fill: C.sub, maxW: 195, lh: 13.5 })
  b.wtext(56, 404, '曲线形状亦有信息量：双平台形态（低频高、中频塌陷再回升）常提示构象异质性未拆净或掩蔽边缘效应——读曲线与读数字并重。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // ============ 二、掩蔽伪相关与相位随机化 ============
  b.panel(710, 132, 660, 330, { title: '二、掩蔽伪相关与「假分辨率」' })
  const bx = 740, by = 340, bw = 340, bh = 160
  b.axis(bx, by, bw, bh, {
    xticks: [[0.2, '10'], [0.4, '5'], [0.667, '3'], [1, '2']],
    yticks: [[0, '0'], [0.5, '0.5'], [1, '1.0']],
    xlabel: '分辨率（Å）',
  })
  b.text(734, 268, 'FSC', { size: 12, weight: 600, fill: C.sub, anchor: 'end' })
  b.curve(bx, by, bw, bh, [[0, 0.97], [0.1, 0.96], [0.2, 0.94], [0.3, 0.88], [0.4, 0.78], [0.5, 0.62], [0.58, 0.45], [0.65, 0.28], [0.7, 0.18], [0.75, 0.12], [0.8, 0.08], [0.9, 0.03], [1, 0.01]], { stroke: C.acc, sw: 2.4 })
  b.curve(bx, by, bw, bh, [[0, 0.97], [0.2, 0.95], [0.4, 0.92], [0.6, 0.88], [0.75, 0.82], [0.85, 0.7], [0.93, 0.45], [0.97, 0.2], [1, 0.08]], { stroke: C.bad, sw: 2.4 })
  b.line(bx, 317.1, bx + bw, 317.1, { stroke: C.rose, sw: 1.5, dash: '6 4' })
  b.text(1086, 321, '0.143', { size: 10, weight: 700, fill: C.rose })
  b.line(984.8, 317.1, 984.8, 288, { stroke: C.acc, sw: 1.2, dash: '4 3' })
  b.text(984.8, 282, '真实', { size: 9.5, weight: 700, fill: C.accD, anchor: 'middle' })
  b.line(1064.7, 317.1, 1064.7, 288, { stroke: C.bad, sw: 1.2, dash: '4 3' })
  b.text(1064.7, 282, '虚高', { size: 9.5, weight: 700, fill: C.badD, anchor: 'middle' })
  b.legend(1095, 196, [['松掩蔽/无掩蔽', C.acc], ['紧掩蔽未修正', C.bad]], { size: 10 })
  b.wtext(1110, 232, '自测：换三种松紧的掩蔽重算——分辨率随掩蔽大幅跳动的，问题在掩蔽不在分子；掩蔽以贴合分子表面为度，溶剂区可多裁、分子内部一刀不剪。', { size: 9.5, fill: C.sub, maxW: 235, lh: 13 })
  b.wtext(1110, 300, '第三方检验：独立构建的模型分别与两半图算 map-model FSC——模型未参与精修、无「共谋」嫌疑，其口径最可信。', { size: 9.5, fill: C.sub, maxW: 235, lh: 13 })
  b.wtext(730, 404, '紧掩蔽把高频人为托起、曲线「坚挺到底」即是典型指纹。标准修正为相位随机化：在阈值以上打乱两半图相位、重施掩蔽再算 FSC，差值曲线即伪相关贡献、从原曲线扣除——RELION postprocess 与 cryoSPARC 均内置。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // ============ 三、局部分辨率与 B 因子锐化 ============
  b.panel(30, 482, 660, 420, { title: '三、局部分辨率与 B 因子锐化' })
  b.ctext(190, 505, '局部分辨率着色图（blocres 滑窗约 10–15 Å 见方）', { size: 11, weight: 700, fill: C.ink })
  b.text(70, 530, '虚线：blocres 滑窗', { size: 8.5, fill: C.mute })
  b.ellipse(180, 585, 60, 46, { fill: C.accL, stroke: C.acc, sw: 2.2 })
  b.ctext(180, 589, '2.5 Å', { size: 11.5, weight: 700, fill: C.accD })
  b.path('M240,575 q34,-14 62,-20', { fill: 'none', stroke: C.warn, sw: 5, opacity: 0.75 })
  b.ctext(316, 548, '6–8 Å', { size: 10, weight: 700, fill: C.warnD })
  b.path('M158,630 q-20,26 -52,42', { fill: 'none', stroke: C.bad, sw: 5, opacity: 0.75 })
  b.ctext(96, 690, '6–8 Å', { size: 10, weight: 700, fill: C.badD })
  for (const [gx, gy] of [[128, 552], [166, 552], [204, 552], [128, 592], [166, 592], [204, 592]] as Array<[number, number]>) {
    b.rect(gx, gy, 34, 34, { fill: 'none', stroke: C.faint, sw: 1, dash: '3 3' })
  }
  b.legend(70, 716, [['刚性核心 2.5 Å', C.acc], ['柔性尾区 6–8 Å', C.warn]], { size: 9 })
  b.ctext(520, 520, 'Guinier 图：ln|F| 对 s^{2}', { size: 10.5, weight: 700, fill: C.ink })
  b.axis(420, 650, 200, 115, { grid: false, xticks: [], yticks: [], xlabel: 's^{2}', ylabel: 'ln|F|' })
  b.line(420, 551.1, 620, 633.9, { stroke: C.pro, sw: 2 })
  for (let i = 0; i < 8; i++) {
    const fx = 0.06 + i * 0.125
    const fy = 0.86 - 0.72 * fx + ((i % 3) - 1) * 0.04
    b.circle(420 + fx * 200, 650 - fy * 115, 3, { fill: C.pro, fillOp: 0.8, stroke: 'none' })
  }
  b.text(575, 568, '斜率 ∝ −B', { size: 9.5, weight: 600, fill: C.pro, italic: true })
  b.wtext(420, 716, 'B 因子锐化：以 Guinier 图拟合全局 B（典型数十至一百余 Å^{2}），施加负 B 把被衰减的高频抬回；过度锐化把噪声一并放大——孤立点噪声冒充侧链是常见事故。', { size: 9.5, fill: C.sub, maxW: 240, lh: 13 })
  b.wtext(56, 800, '着色图随稿随附、柔性区如实标注；投稿版常附未锐化与适度锐化两版供评审判断；深度学习锐化（deepEMhancer 类）以训练先验区分信号与噪声，须以独立模型-图指标复核——「美化」不得越界成「脑补」。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // ============ 四、从密度到模型 ============
  b.panel(710, 482, 660, 420, { title: '四、从密度到模型：分辨率分档与双投递' })
  const tiers: Array<[string, string, string, string, string]> = [
    ['优于 3 Å', C.okL, C.ok, C.okD, '侧链密度可见、可从头搭建——Coot 逐残基入图、旋转构象、修骨架'],
    ['4–5 Å', C.warnL, C.warn, C.warnD, '以 AlphaFold 或同源模型刚体拟合起步，逐段核对修正、错处以密度为准'],
    ['6–8 Å', C.badL, C.bad, C.badD, '常只支持刚体拟合与二级结构登记——图是实验、预测是先验'],
  ]
  let ty = 528
  for (const [t, f, s, tf, desc] of tiers) {
    b.tag(795, ty, t, { fill: f, stroke: s, size: 10, weight: 700, tfill: tf, pad: 7 })
    b.wtext(850, ty - 3, desc, { size: 9.5, fill: C.sub, maxW: 490, lh: 13 })
    ty += 32
  }
  const tools = ['Coot（2004）', 'Phenix real-space refine（2018）', 'ISOLDE（2018）']
  let tcx = 745
  for (let i = 0; i < tools.length; i++) {
    const tw = textW(tools[i], 9.5, 700) + 14
    b.tag(tcx + tw / 2, 630, tools[i], { fill: C.accL, stroke: C.acc, size: 9.5, weight: 700, tfill: C.accD, pad: 7 })
    tcx += tw
    if (i < tools.length - 1) {
      b.arrow(tcx + 4, 630, tcx + 22, 630, { stroke: C.mute, sw: 1.6, marker: 'ink' })
      tcx += 30
    }
  }
  b.text(730, 664, '模型-图三指标：', { size: 10.5, weight: 700, fill: C.ink })
  b.wtext(840, 664, 'Q-score 逐原子吻合（Pintilie 等 2020）、EMRinger 侧链手性统计（Barad 等 2015）、map-model FSC 给出频率上限——三项互相印证、缺一不可。', { size: 9.5, fill: C.sub, maxW: 500, lh: 13 })
  b.rect(740, 700, 175, 56, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(827, 722, 'EMDB', { size: 12, weight: 700, fill: C.accD })
  b.ctext(827, 740, '密度图', { size: 9.5, fill: C.sub })
  b.rect(945, 700, 175, 56, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 8 })
  b.ctext(1032, 722, 'PDB', { size: 12, weight: 700, fill: C.proD })
  b.ctext(1032, 740, '原子坐标·两库互链', { size: 9.5, fill: C.sub })
  b.rect(1150, 700, 190, 56, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 8 })
  b.ctext(1245, 722, 'EMPIAR', { size: 12, weight: 700, fill: C.okD })
  b.ctext(1245, 740, '原始影像·软件与参数', { size: 9.5, fill: C.sub })
  b.line(915, 728, 945, 728, { stroke: C.mute, sw: 1.5, dash: '4 3' })
  b.tag(1030, 790, 'Yip 等 2020：脱铁铁蛋白约 1.2 Å，氢原子密度初现', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.okD, pad: 8 })
  b.wtext(730, 824, '双投递为标配；EMPIAR 条目须注明所用软件与版本、参数文件——五年后复现你的精修，靠的是这些而不是记忆。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // 底部收束
  b.ctext(700, 940, '宣称的分辨率须与图的实际可解读性一致——从玻璃化载网到可投递的结构，冷冻电镜已与晶体学并肩', { size: 12, weight: 600, fill: C.mute })
}

export default scene({
  title: '分辨率评估与模型构建：从 0.143 到双投递',
  subtitle: 'FSC 0.143 处壳层信噪比约 1；紧掩蔽伪相关以相位随机化修正；blocres 核心 2.5 Å、柔性区 6–8 Å；B 因子数十至百余 Å^{2}；EMDB 加 PDB 双投递、原始数据入 EMPIAR',
  draw,
})
