// im ch1-s4 免疫学发展简史：时间线（39-g 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、时间线 ============
  b.panel(30, 132, 1340, 372, { title: '一、免疫学发展简史：从人痘经验到检查点治疗的里程碑' })
  b.timelineH(80, 350, 1250, [
    { at: 0.02, label: '1796 琴纳牛痘接种', sub: '开创理性疫苗接种', above: true, c: C.dna },
    { at: 0.13, label: '巴斯德减毒疫苗', sub: '炭疽 1881 · 狂犬 1885', above: false, c: C.bad },
    { at: 0.25, label: '1890 血清疗法', sub: 'Behring 与北里柴三郎 · 1901 首届诺奖', above: true, c: C.acc },
    { at: 0.37, label: '1908 两派和解', sub: '梅奇尼科夫与埃尔利希共享诺奖', above: false, c: C.pro },
    { at: 0.50, label: '克隆选择学说', sub: '伯内特：统一特异性·记忆·耐受', above: true, c: C.enz },
    { at: 0.62, label: '1975 杂交瘤技术', sub: '单克隆抗体诞生', above: false, c: C.dna },
    { at: 0.74, label: '1980 天花根除', sub: '世界卫生大会宣布', above: true, c: C.ok },
    { at: 0.86, label: '抗体基因重排', sub: '利根川进破解多样性之谜', above: false, c: C.pro },
    { at: 0.97, label: '2018 检查点诺奖', sub: 'CTLA-4 与 PD-1 改写肿瘤治疗', above: true, c: C.bad },
  ])
  b.ctext(700, 478, '经验免疫学时期：明代中国的「人痘接种」经蒙塔古夫人西传，为琴纳的牛痘接种铺路；1798 年琴纳发表论文，vaccination 词根 vacca 即「牛」', { size: 11.5, fill: C.mute })

  // ============ 二、两派之争 ============
  b.panel(30, 520, 1340, 216, { title: '二、细胞免疫与体液免疫：两派之争的和解' })
  b.rect(70, 568, 560, 104, { fill: C.bg, stroke: C.dna, sw: 1.7, rx: 9 })
  b.text(90, 594, '细胞免疫学派 —— 梅奇尼科夫', { size: 14, weight: 700, fill: C.dnaD })
  b.wtext(90, 618, '吞噬理论：白细胞吞噬病原体即免疫之本；1881 年普利堡绵羊试验轰动欧洲。', { size: 11.5, fill: C.sub, maxW: 520, lh: 17 })
  b.circle(120, 648, 13, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.bacterium(120, 648, 16, 7, { shape: 'rod', fill: '#fee2e2', stroke: C.bad })
  b.text(140, 652, '吞噬病原体的白细胞', { size: 10.5, fill: C.mute })

  b.tag(700, 620, 'VS', { fill: C.panelB, stroke: C.line, tfill: C.ink, size: 15, weight: 700, pad: 12 })

  b.rect(770, 568, 560, 104, { fill: C.bg, stroke: C.acc, sw: 1.7, rx: 9 })
  b.text(790, 594, '体液免疫学派 —— Behring 与北里柴三郎', { size: 14, weight: 700, fill: C.accD })
  b.wtext(790, 618, '1890 年证明免疫血清中存在「抗毒素」，可中和白喉与破伤风毒素——血清疗法诞生，Behring 独得 1901 年首届诺贝尔奖。', { size: 11.5, fill: C.sub, maxW: 520, lh: 17 })
  b.tag(940, 648, '血清抗毒素', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11, weight: 700, pad: 8 })
  b.tag(1100, 648, '中和毒素', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11, weight: 700, pad: 8 })
  b.arrow(1010, 648, 1054, 648, { stroke: C.acc, sw: 1.8, marker: 'acc' })

  b.ctext(700, 706, '1908 年梅奇尼科夫与埃尔利希共享诺贝尔奖——细胞免疫与体液免疫各有其位，恰是现代免疫学的常识', { size: 12.5, weight: 700, fill: C.ink })

  // ============ 三、理论基石与完胜 ============
  b.panel(30, 752, 1340, 226, { title: '三、现代免疫学的理论基石与一场完胜' })
  b.rect(70, 792, 620, 130, { fill: C.enzL, fillOp: 0.35, stroke: C.enz, sw: 1.7, rx: 9 })
  b.text(90, 818, '克隆选择学说（伯内特）', { size: 14, weight: 700, fill: C.enzD })
  b.wtext(90, 842, '抗原从预存的受体库中选择相应克隆并使之扩增——统一解释特异性、记忆与耐受，是现代免疫学的理论基石。', { size: 11.5, fill: C.sub, maxW: 560, lh: 17 })
  const clones = [100, 132, 164, 196]
  clones.forEach((x, i) => b.circle(x, 898, 8, { fill: i === 1 ? C.enz : C.panelB, stroke: i === 1 ? C.enz : C.faint, sw: 1.6 }))
  b.arrow(210, 898, 250, 898, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  ;[260, 286, 312].forEach(x => b.circle(x, 898, 8, { fill: C.enzL, stroke: C.enz, sw: 1.6 }))
  b.text(340, 902, '抗原选中 → 克隆扩增', { size: 10.5, fill: C.enzD, weight: 700 })

  b.rect(720, 792, 620, 130, { fill: C.proL, fillOp: 0.35, stroke: C.pro, sw: 1.7, rx: 9 })
  b.text(740, 818, '抗体的结构与多样性之谜', { size: 14, weight: 700, fill: C.proD })
  b.wtext(740, 842, '波特与埃德尔曼解析抗体四肽链结构；利根川进以基因重排破解抗体多样性之谜——两条重链与两条轻链如何编码近乎无限的识别库。', { size: 11.5, fill: C.sub, maxW: 560, lh: 17 })
  b.path('M 950 912 L 950 886 M 950 886 L 936 866 M 950 886 L 964 866', { stroke: C.pro, sw: 4.5, fill: 'none' })
  b.circle(936, 862, 5, { fill: C.proL, stroke: C.pro, sw: 1.4 })
  b.circle(964, 862, 5, { fill: C.proL, stroke: C.pro, sw: 1.4 })
  b.text(978, 900, 'Y 形四肽链抗体（2 重链 + 2 轻链）', { size: 10.5, fill: C.proD, weight: 700 })

  b.rect(70, 936, 1280, 32, { fill: C.okL, fillOp: 0.45, stroke: C.ok, sw: 1.3, rx: 7 })
  b.ctext(710, 958, '1980 年 5 月，世界卫生大会正式宣布天花在全球根除——免疫学以一场完胜回报了它的起点', { size: 12.5, weight: 700, fill: '#065f46' })
}

export default scene({
  title: '免疫学发展简史：从牛痘接种到免疫检查点治疗的里程碑时间线',
  subtitle: '1796 年琴纳牛痘接种开创理性疫苗接种，1980 年天花被宣布根除；巴斯德研制炭疽（1881）与狂犬病（1885）减毒疫苗；1890 年血清疗法与 1908 年细胞/体液两派共享诺奖；1975 年杂交瘤技术诞生单克隆抗体；2018 年 CTLA-4 与 PD-1 免疫检查点治疗获诺贝尔奖',
  draw,
})
