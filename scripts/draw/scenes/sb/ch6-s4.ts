// sb ch6-s4 数据处理与质量评估（主线收尾）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、处理流水线 ============
  b.panel(30, 132, 660, 300, { title: '一、处理流水线：从影像到合并强度' })
  const steps: Array<[string, string, string]> = [
    ['指标化', 'XDS / DIALS / iMOSFLM', '首帧斑点反解晶胞与取向，枚举 14 种布拉维格子候选'],
    ['晶胞精修', ' refine ', '逐帧迭代收敛晶胞参数与 mosaicity'],
    ['剖面拟合积分', ' 3D profile ', '以预测位置取三维峰形拟合，弱斑借邻斑峰形'],
    ['缩放合并', 'AIMLESS / XSCALE', '批间缩放、衰减与吸收修正后合并出 I(hkl)'],
  ]
  let sy = 186
  for (let i = 0; i < steps.length; i++) {
    const [name, prog, desc] = steps[i]
    b.rect(60, sy - 22, 96, 30, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 6 })
    b.ctext(108, sy - 2, `② 三维剖面拟合积分`.replace('② 三维剖面拟合积分', name), { size: 12, weight: 700, fill: C.accD })
    b.ctext(196, sy - 22, prog.trim(), { size: 10, weight: 700, fill: C.proD })
    b.wtext(196, sy - 4, desc, { size: 10.5, fill: C.sub, maxW: 470, lh: 14 })
    if (i < steps.length - 1) {
      b.arrow(108, sy + 10, 108, sy + 30, { stroke: C.mute, sw: 1.6, marker: 'mute' })
    }
    sy += 56
  }
  b.tag(360, 400, '输出 MTZ：强度 I(hkl) 与 σ(I)——交给第 7 章定相的接力棒', { fill: C.okL, stroke: C.ok, size: 11, tfill: C.okD, pad: 9 })

  // ============ 二、R 因子三兄弟 ============
  b.panel(710, 132, 660, 300, { title: '二、R 因子三兄弟：同一组数的三种读法' })
  b.wtext(730, 170, '某反射四次测得 100、104、98、102（均值 101）：离差和 8、分母 404，R_{merge} = 1.98%——同一组数 R_{meas} 约 2.3%、R_{pim} 约 1.1%。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  // 三根指标条
  const bars: Array<[string, number, string]> = [
    ['R_{merge}', 1.98, '随冗余虚高（分母不计次数）'],
    ['R_{meas}', 2.3, '冗余校正：每次测量都算数'],
    ['R_{pim}', 1.1, '单次测量精度：越冗余越瘦'],
  ]
  let by = 214
  for (const [name, val, note] of bars) {
    b.ctext(760, by, name, { size: 11.5, weight: 700, fill: C.ink })
    const w = val * 46
    b.rect(830, by - 10, w, 14, { fill: val > 2 ? C.warn : C.acc, stroke: 'none', rx: 3, fillOpacity: 0.8 })
    b.ctext(830 + w + 12, by, `${val}%`, { size: 11, weight: 700, fill: C.sub })
    b.wtext(960, by - 8, note, { size: 10, fill: C.mute, maxW: 380, lh: 13 })
    by += 44
  }
  b.wtext(730, 352, '三个数放在一起读才公允——报告须辨明所用指标；冗余越高 R_{merge} 越「虚胖」而 R_{pim} 越瘦。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(1040, 398, 'CC_{1/2}（Karplus 与 Diederichs 2012）：分半相关，最外壳约 0.3 为现代截断点', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })

  // ============ 三、空间群判定与孪晶预警 ============
  b.panel(30, 452, 660, 330, { title: '三、空间群判定与孪晶预警' })
  b.wtext(50, 490, '空间群由 Laue 对称加系统消光共同判定——P2_{1}2_{1}2_{1} 的 h00 仅 h = 2n 出现（沿三轴各含 2_{1} 螺旋轴），消光规律是晶格平移与螺旋/滑移对称的指纹。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  // 消光示意：h00 轴上的斑点奇偶
  b.text(70, 556, 'h00 衍射（奇偶消光）', { size: 10.5, weight: 700, fill: C.ink })
  for (let h = 1; h <= 8; h++) {
    const x = 70 + h * 68
    const even = h % 2 === 0
    if (even) {
      b.circle(x, 576, 7, { fill: C.bad, stroke: C.badD, sw: 1 })
    } else {
      b.circle(x, 576, 7, { fill: 'none', stroke: C.faint, sw: 1.2, dash: '2 2' })
    }
    b.ctext(x, 604, `${h}00`, { size: 9.5, fill: C.mute })
  }
  b.ctext(340, 632, '实心 = 出现（h = 2n）；空心 = 系统消光（h = 2n+1）', { size: 10, fill: C.mute })
  // L 检验
  b.wtext(50, 660, '孪晶预警看 L 检验（Padilla 与 Yeates 2003）：L = (I_{1} − I_{2})/(I_{1} + I_{2})，正常单晶平均 |L| 约 0.5，孪晶使其显著偏离；孪晶分数近 0.5 近乎无解，须回到结晶环节。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(240, 742, '|L| 约 0.5 = 单晶', { fill: C.okL, stroke: C.ok, size: 10.5, tfill: C.okD, pad: 8 })
  b.tag(480, 742, '显著偏离 = 孪晶警报', { fill: C.badL, stroke: C.bad, size: 10.5, tfill: C.badD, pad: 8 })

  // ============ 四、质量决策表 ============
  b.panel(710, 452, 660, 330, { title: '四、数据质量决策表（惯用验收线）' })
  b.table(730, 492, 620, {
    headers: ['指标', '经验判据', '不达标时的处置'],
    colW: [150, 160, 310],
    rowH: 36,
    fontSize: 11,
    rows: [
      ['完整度', '大于 95%', '补收空缺旋转区（策略计算回补）'],
      ['冗余', '3–7 倍', '反常实验取高值；过低补收、过高伤剂量'],
      ['I/σ(I) 最外壳', '大于 2（传统）', '以 CC_{1/2} 约 0.3 重判截断壳'],
      ['R_{meas} 最外壳', '小于约 60%', '排查吸收、冰环与损伤衰减'],
      ['R_{pim}', '整体越低越精', '结合冗余读单次测量精度'],
    ],
  })
  b.wtext(730, 700, '现代判据以 CC_{1/2} 为核心：把反射随机分两半算相关系数，直接度量信号可分辨性，摆脱对冗余与 σ 估计的依赖——低冗余数据也能被公允评判。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(730, 756, '合格数据以 MTZ 交棒第 7 章：从「强度 I」到「结构因子 F」只差一步平方根与强度到幅度的换算——相位问题自此登场。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 五、底部收束 ============
  b.wtext(30, 824, '指标化定盒、积分称重、缩放对表、合并成册——四步流水线把千万斑点收拢为一部可校核的强度账本；账本首页写满 R 家族与 CC_{1/2} 的体检值，末页留给第 7 章的相位钥匙。', { size: 11.5, weight: 600, fill: C.ink, maxW: 1340, lh: 17 })
}

export default scene({
  title: '衍射数据处理与质量评估：从影像到合并强度',
  subtitle: '指标化-精修-剖面拟合-缩放四步流水线；R_{merge}/R_{meas}/R_{pim} 三读与 CC_{1/2} 现代判据；系统消光定空间群、L 检验预警孪晶；完整度 95%、I/σ(I) 大于 2 的验收线',
  draw,
})
