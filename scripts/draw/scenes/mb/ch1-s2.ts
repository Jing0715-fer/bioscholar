// mb ch1-s2 基因组结构特点与 C 值悖论（39-b2 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、C 值悖论 ============
  b.panel(30, 132, 720, 306, { title: '一、C 值悖论：基因组大小与复杂度不成比例' })
  const ax = 115, ay = 380, aw = 590, ah = 200
  b.axis(ax, ay, aw, ah, {
    xlabel: '物种（按复杂度大致排序）→',
    xticks: [[0.12, '大肠杆菌'], [0.5, '人类'], [0.88, '肺鱼 / 两栖类']],
    yticks: [[0, '10⁴'], [0.25, '10⁶'], [0.5, '10⁸'], [0.75, '10¹⁰'], [1, '10¹²']],
  })
  b.text(122, 196, 'C 值（bp，对数刻度）', { size: 11.5, fill: C.mute })
  // 散点（log10 归一化：10⁴ → 10¹²）
  const pts: [number, string, number][] = [
    [0.12, '大肠杆菌 4.6×10⁶', Math.log10(4.6e6)],
    [0.5, '人类 3.1×10⁹', Math.log10(3.1e9)],
    [0.88, '肺鱼 约10¹¹', 11],
  ]
  pts.forEach(([fx, label, logv]) => {
    const fy = (logv - 4) / 8
    b.circle(ax + fx * aw, ay - fy * ah, 8, { fill: C.dnaL, stroke: C.dna, sw: 2.2 })
    b.ctext(ax + fx * aw, ay - fy * ah - 17, label, { size: 12.5, weight: 700, fill: C.dnaD })
  })
  b.arrow(625, 212, 425, 238, { stroke: C.bad, sw: 1.8, dash: '6 5', marker: 'bad' })
  b.ctext(505, 272, '同为脊椎动物，C 值相差 30 余倍', { size: 12, fill: C.bad })
  b.text(62, 424, 'C 值＝单倍体基因组 DNA 总量（pg 或 bp）', { size: 12, fill: C.mute })

  // ============ 二、原核基因组 ============
  b.panel(770, 132, 600, 306, { title: '二、原核基因组：环状、紧凑、操纵子成簇' })
  b.plasmid(950, 292, 80, { genes: ['oriC', 'rrn ×7', '操纵子'] })
  b.ctext(950, 282, '大肠杆菌', { size: 14.5, weight: 700, fill: C.dnaD })
  b.ctext(950, 304, '4.6×10⁶ bp', { size: 13, fill: C.sub })
  b.ctext(950, 324, '单条环状双链', { size: 11.5, fill: C.mute })
  const feats = [
    '· 结构紧凑：非编码区仅约 11%',
    '· 功能相关基因成簇排列成操纵子',
    '· 基因多为单拷贝；重复序列主要为 rRNA、tRNA 等多拷贝基因',
    '· 质粒（F 因子、R 质粒）携带附加遗传信息',
  ]
  b.wtext(1080, 200, feats.join(''), { size: 12.5, fill: C.sub, maxW: 262, lh: 19 })
  b.circle(1105, 352, 15, { stroke: C.pro, sw: 3 })
  b.ctext(1105, 382, '质粒（F / R）', { size: 11, fill: C.proD })
  b.ctext(950, 410, '操纵子＝功能相关结构基因与调控序列的成簇组织（详见第 7 章）', { size: 12, fill: C.mute })

  // ============ 三、原核 vs 真核比较表 ============
  b.panel(30, 452, 1340, 312, { title: '三、原核与真核基因组比较' })
  b.table(60, 512, 1280, {
    headers: ['比较项', '原核基因组', '真核基因组'],
    colW: [220, 470, 590],
    rowH: 38,
    fontSize: 13,
    rows: [
      ['存在形式', '环状（少数线状），裸露', '线状，与组蛋白结合形成染色质，位于细胞核内'],
      ['基因密度', '高（非编码区约 11%）', '低，间隔序列与重复序列多'],
      ['内含子', '极少（见于古菌与噬菌体）', '普遍存在，转录后需剪接加工'],
      ['基因排列', '多操纵子成簇', '多为单基因转录单元；基因家族与串联重复基因簇'],
      ['重复序列', '少（rRNA、tRNA 等多拷贝）', '大量，可占基因组一半以上'],
    ],
  })

  // ============ 四、真核要点与细胞器基因组 ============
  b.panel(30, 774, 1340, 206, { title: '四、真核基因组要点与细胞器基因组' })
  const feats2 = [
    '· 基因组庞大、基因密度低；蛋白质编码序列仅约 1.5%',
    '· 一半以上为重复序列；多数基因为断裂基因，转录后需剪接',
    '· 基因家族与串联重复基因簇（rRNA、组蛋白基因）',
    '· 染色体末端具端粒结构，保证复制完整性',
  ]
  b.wtext(60, 822, feats2.join(''), { size: 12.5, fill: C.sub, maxW: 580, lh: 19 })
  b.text(60, 916, 'C 值悖论的解答：非编码序列的调控功能与重复序列的动态变化本身即是重要属性。', { size: 12, fill: C.mute })
  b.circle(1050, 880, 52, { stroke: C.acc, sw: 5, opacity: 0.85 })
  b.ctext(1050, 812, '人线粒体 DNA', { size: 13.5, weight: 700, fill: C.accD })
  b.ctext(1050, 874, '16 569 bp', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(1050, 892, '环状', { size: 11, fill: C.mute })
  const feats3 = [
    '· 紧凑，几乎不含内含子',
    '· 遗传密码与通用密码存在偏差：UGA 编码色氨酸',
    '· 叶绿体另有自身基因组',
  ]
  b.wtext(1140, 850, feats3.join(''), { size: 12, fill: C.sub, maxW: 218, lh: 18 })
}

export default scene({
  title: '基因组结构特点与 C 值悖论',
  subtitle: '肺鱼基因组约 10¹¹ bp 为人类（3.1×10⁹ bp）的 30 余倍——C 值与复杂度不成比例；原核紧凑成操纵子，真核庞大含断裂基因与大量重复序列',
  draw,
})
