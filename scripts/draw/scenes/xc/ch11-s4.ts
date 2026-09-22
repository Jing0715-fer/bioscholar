// xc ch11-s4 模型偏差的历史教训（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、偏差的机制：相位的自我实现与强度阶梯 ============
  b.panel(30, 132, 660, 300, { title: '一、偏差的机制：相位的自我实现与强度阶梯' })
  const cyc = (x: number, y: number, w: number, t: string, fill: string, stroke: string, tfill: string) => {
    b.rect(x, y, w, 48, { fill, stroke, sw: 1.6, rx: 8 })
    b.ctext(x + w / 2, y + 29, t, { size: 10, weight: 700, fill: tfill })
  }
  cyc(56, 190, 148, '① MR 模型带错', C.proL, C.pro, C.proD)
  cyc(258, 190, 162, '② 相位继承错误', C.proL, C.pro, C.proD)
  cyc(258, 286, 162, '③ 图把错误画成密度', C.badL, C.bad, C.bad)
  cyc(56, 286, 148, '④ 精修后 R 仍在降', C.accL, C.acc, C.accD)
  b.arrow(204, 214, 258, 214, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.arrow(339, 238, 339, 286, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.arrow(258, 310, 204, 310, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(130, 286, 130, 238, { stroke: C.sub, sw: 1.8 })
  b.ctext(231, 266, '自我实现', { size: 10, weight: 700, fill: C.bad })
  b.text(440, 200, '偏差强度阶梯（检出难度递增）', { size: 10, weight: 700, fill: C.ink })
  const lad = (y: number, t: string, fill: string, stroke: string, tfill: string) => {
    b.rect(440, y, 234, 44, { fill, stroke, sw: 1.6, rx: 7 })
    b.wtext(452, y + 17, t, { size: 9, weight: 700, fill: tfill, maxW: 212, lh: 11.5 })
  }
  lad(318, '轻度：侧链被「画胖」，几何与密度指标未必报警', C.okL, C.ok, C.okD)
  lad(268, '中度：整段环区错误构象获看似连续的密度背书', C.warnL, C.warn, '#92400e')
  lad(218, '重度：催化残基或配体归属错误，低分辨率加 MR 双重掩护', C.badL, C.bad, C.bad)
  b.wtext(46, 378, '按流程走、逐轮精修、R 还在降，错误照样纹丝不动——模型偏差是确认偏误的晶体学版本：不需要任何失误就能发生，伪装成「顺利」。', { size: 9.5, fill: C.sub, maxW: 616, lh: 12.5 })
  b.wtext(46, 398, '经验规律：分辨率越低、MR 模型占比越大，风险越高——2.8 Å 以下的纯 MR 结构，重要结论应有实验相位或独立重复的旁证才能安枕。', { size: 9.5, fill: C.sub, maxW: 616, lh: 12.5 })
  b.wtext(46, 418, '检出它的唯一通用手段：把「模型说的」与「数据独立说的」分开——第 10 章交叉验证与本章全部指标的共同逻辑。', { size: 9.5, fill: C.mute, maxW: 616, lh: 12.5 })

  // ============ 二、解药清单：五道防线 ============
  b.panel(710, 132, 660, 300, { title: '二、解药清单：五道防线' })
  b.table(726, 190, 616, {
    headers: ['防线', '检验方式', '拦截的偏差'],
    colW: [172, 196, 248],
    rowH: 29,
    fontSize: 10,
    rows: [
      ['omit 与 polder 图', '无偏密度复核', '幽灵配体与错误构象'],
      ['实验定相复核', 'SAD 或 MAD 独立相位', 'MR 相位继承'],
      ['R_{free} 交叉验证', '不可见自由集', '过拟合与参数膨胀'],
      ['PDB_REDO 再精修', '机械化重审', '历史欠账与旧权重之弊'],
      ['独立重复解析', '不同晶型或同源蛋白', '系统性偏差'],
    ],
  })
  b.wtext(726, 396, '防线越多，偏差的存活空间越小——但没有任何一道防线单独充分，这正是验证体系宁可冗余的原因。实验相位不欠模型任何债：一幅 SAD 图足以撕破 MR 模型在关键位点的自画像。', { size: 9.5, fill: C.sub, maxW: 616, lh: 12.5 })
  b.wtext(726, 422, '日常纪律：机制结论一律 polder 复核；新结构配一版 SAD 印证；投稿前过红色条目；存档原始图与参数。', { size: 9.5, fill: C.mute, maxW: 616, lh: 12.5 })

  // ============ 三、三个历史现场：时间轴 ============
  b.panel(30, 452, 1340, 270, { title: '三、三个历史现场：模型偏差与验证文化的时间轴' })
  b.timelineH(70, 592, 1230, [
    { at: 0.035, label: '1940 年代 青霉素', sub: 'Hodgkin 组：密度终审 β 内酰胺四元环', above: true, c: C.ok },
    { at: 0.30, label: '1984 准晶', sub: 'Shechtman 观测十重对称电子衍射', above: false, c: C.warn },
    { at: 0.52, label: '1990 评论', sub: 'Brändén 与 Jones 点名误建结构', above: true, c: C.bad },
    { at: 0.70, label: '1990s 至今 更正潮', sub: 'HIV 蛋白酶细节修正属系统正常运作', above: false, c: C.acc },
    { at: 0.85, label: '2009 PDB_REDO', sub: '全库再精修的「行动队」', above: true, c: C.pro },
    { at: 0.96, label: '2011 诺奖', sub: '准晶确立，Shechtman 获奖', above: false, c: C.ok },
  ])
  b.wtext(70, 690, '双向教训：先验可以错，数据终审；「体面的传统解释」（孪晶、无序、伪对称）未必正确——Pauling 的五重孪晶说曾使争议延续多年，孪晶检验（H-test）因此被锤炼得格外认真。', { size: 9.5, fill: C.sub, maxW: 580, lh: 13 })

  // ============ 四、验证文化：免疫系统与库的自我修正 ============
  b.panel(30, 742, 1340, 250, { title: '四、验证文化：结构生物学的免疫系统与库的自我修正' })
  b.tag(260, 782, '免疫系统', { fill: C.okL, stroke: C.ok, size: 11, weight: 700, tfill: C.okD, pad: 9 })
  b.wtext(60, 806, '遍布每一步：建模现场的红黄绿球、每轮的 R_{free} 与差值图、本章的报告与百分位；代价低廉（分钟级），事后省下以年计的纠错成本。对「自体」的容忍与对「异物」的攻击同样重要：真实的应变构象可以保留，但要能当庭对质。', { size: 9.5, fill: C.sub, maxW: 400, lh: 13 })
  b.tag(700, 782, '库的自我修正', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD, pad: 9 })
  b.wtext(500, 806, '被替换条目标注 obsolete 与 superseded，修正版与历史版并存可溯；文献的更正与撤稿在库里留下对应记录；PDB_REDO 以批量再精修持续重审全库。', { size: 9.5, fill: C.sub, maxW: 400, lh: 13 })
  b.tag(1140, 782, '使用者的半分钟', { fill: C.warnL, stroke: C.warn, size: 11, weight: 700, tfill: '#92400e', pad: 9 })
  b.wtext(940, 806, '下载结构时顺手看一眼验证报告与条目历史——是否被替换、PDB_REDO 是否有再精修版——成本半分钟，避免把一个已被修正的模型写进自己的论文。', { size: 9.5, fill: C.sub, maxW: 400, lh: 13 })
  b.rect(60, 862, 1280, 42, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(700, 889, '验证不是官僚流程，而是结构生物学的免疫系统——让每一个宣称都有证据负担', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(70, 922, '从第 3 章长出晶体、第 8 章借来相位、第 9 章搭起模型、第 10 章精修收敛，到本章的验证审判——方法论闭环已然完整；第 12 章走向串晶与 XFEL、冷冻电镜与 AlphaFold，无论技术如何更替，「让数据说话、让验证审判」的纪律一以贯之。', { size: 9.5, fill: C.sub, maxW: 1260, lh: 13 })
  b.ctext(700, 956, '结构是假设：发表不是终点，验证与再验证才是结构科学的常态。', { size: 10, weight: 700, fill: C.mute })
}

export default scene({
  title: '模型偏差的历史教训：三个现场与五道防线',
  subtitle: 'MR 相位自我实现，R 在降而错误纹丝不动；青霉素 1940 年代、准晶 1984（2011 诺奖）、1990 评论三现场时间轴；五道防线无一单独充分',
  draw,
})
