// em ch12-s1 分辨率革命的技术要素（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、革命前三重瓶颈 ============
  b.panel(30, 132, 660, 412, { title: '一、革命前夜：三重瓶颈压住 10–20 Å' })
  const bt = (y: number, t: string, s: string, fill: string, stroke: string, tfill: string) => {
    b.rect(50, y, 620, 62, { fill, stroke, sw: 1.6, rx: 8 })
    b.text(66, y + 25, t, { size: 12.5, weight: 700, fill: tfill })
    b.text(66, y + 46, s, { size: 10, fill: C.sub })
  }
  bt(180, 'CCD 探测器', '经闪烁体与光纤耦合，半奈奎斯特处 DQE 不足 0.1——每枚电子的信息大半损耗在转换链上', C.badL, C.bad, C.badD)
  bt(252, '束致运动', '辐照升温与充电让颗粒走出数埃至数十埃，高频信息被抹平', C.badL, C.bad, C.badD)
  bt(324, '剂量天花板', 'Henderson 极限约 20 e^{-}/Å^{2} 不容商量，电子总数封顶', C.badL, C.bad, C.badD)
  b.tag(230, 428, '常规样品停在 10–20 Å', { fill: C.warnL, stroke: C.warn, size: 12, weight: 700, tfill: C.warnD, pad: 10 })
  b.tag(540, 428, '理论框架早已齐备，缺的是硬件', { fill: C.panelB, stroke: C.sub, size: 11, tfill: C.sub, pad: 10 })
  b.ctext(360, 480, '回望 2000 年代：像隔着毛玻璃看电影——中心截面定理、贝叶斯框架、剂量与 CTF 账本都在，产出却上不去', { size: 10, fill: C.mute })

  // ============ 二、直接探测相机：DQE 革命 ============
  b.panel(710, 132, 660, 412, { title: '二、直接电子探测相机：把每个电子数清' })
  const ax = 760, ay = 470, aw = 400, ah = 240
  b.axis(ax, ay, aw, ah, {
    grid: false,
    xticks: [[0, '0'], [0.5, '0.5'], [1, '奈奎斯特']],
    yticks: [[0, '0'], [0.5, '0.5'], [1, '1.0']],
    xlabel: '归一化空间频率',
    ylabel: 'DQE',
    title: '量子探测效率：CCD 对比直接探测计数',
  })
  const ccd: [number, number][] = []
  const k2: [number, number][] = []
  for (let i = 0; i <= 40; i++) {
    const t = i / 40
    ccd.push([t, 0.38 * Math.exp(-t * 2.4)])
    k2.push([t, 0.82 * Math.exp(-t * 1.0)])
  }
  b.curve(ax, ay, aw, ah, ccd, { stroke: C.mute, sw: 2.4, dash: '7 5' })
  b.curve(ax, ay, aw, ah, k2, { stroke: C.ok, sw: 2.8 })
  b.text(ax + 14, ay - ah + 22, '直接探测计数（约 0.3–0.5）', { size: 10.5, weight: 700, fill: C.okD })
  b.text(ax + aw - 60, ay - 34, 'CCD（不足 0.1）', { size: 10.5, weight: 700, fill: C.mute, anchor: 'end' })
  b.wtext(740, 510, '三家几乎同时把产品推向市场：Gatan 的 K2 Summit（2012–2013 年商用）率先实现逐事件电子计数，Falcon 与 DE 系列跟进——电子直接打进 CMOS 半导体，逐事件计数消灭读出噪声。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })
  b.tag(940, 530, '计数剂量率约 5–10 e^{-}/像素/秒（重合损失上限）', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 9 })

  // ============ 三、电影三部曲 ============
  b.panel(30, 572, 660, 398, { title: '三、分子电影的三部曲' })
  b.ctext(360, 618, '剂量分数化：把 40–60 e^{-}/Å^{2} 切成 50–60 帧电影', { size: 11.5, weight: 700, fill: C.ink })
  for (let i = 0; i < 10; i++) {
    b.rect(70 + i * 58, 632, 48, 44, { fill: i % 2 === 0 ? C.accL : '#ffffff', stroke: C.acc, sw: 1.4 })
    b.ctext(94 + i * 58, 656, `${i + 1}`, { size: 9, fill: C.accD })
  }
  const tr = (y: number, t: string, s: string, fill: string, stroke: string, tfill: string) => {
    b.rect(70, y, 580, 56, { fill, stroke, sw: 1.6, rx: 8 })
    b.text(86, y + 24, t, { size: 12, weight: 700, fill: tfill })
    b.text(86, y + 44, s, { size: 9.5, fill: C.sub })
  }
  tr(696, '第一部曲：帧对齐（MotionCor，Li 等 2013）', '各帧对参考帧互相关求全局轨迹，网格分块求局部轨迹，低阶多项式拟合成平滑位移场', C.accL, C.acc, C.accD)
  tr(762, '第二部曲：贝叶斯抛光（Zivanov 2019）', '概率模型逐颗粒回溯最优轨迹，电影帧按后验最优加权再平均', C.proL, C.pro, C.proD)
  tr(828, '第三部曲：剂量加权（Grant 与 Grigorieff 2015）', '按「各频率信号衰减一半的临界曝光」逐帧逐频率赋权——电影被按信息寿命剪辑', C.rnaL, C.rna, C.rnaD)
  b.ctext(360, 932, '「对齐」之外又被「按信息寿命剪辑」——晚帧低频照用、高频自动降权', { size: 10, fill: C.mute })

  // ============ 四、算法线与里程碑 ============
  b.panel(710, 572, 660, 398, { title: '四、算法革命与里程碑年表' })
  const al = [
    ['Sigworth 1998', '最大似然估计引入单颗粒分类'],
    ['RELION（Scheres 2012）', '贝叶斯边缘化框架'],
    ['GPU 加速', '一至两个数量级提速'],
    ['cryoSPARC（Punjani 2017）', 'SGD 与分支定界压缩周期'],
  ]
  al.forEach(([t, s], i) => {
    b.tag(770 + (i % 2) * 300, 616 + Math.floor(i / 2) * 40, t, { fill: C.accL, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 8 })
    b.wtext(770 + (i % 2) * 300, 648 + Math.floor(i / 2) * 40 - 22, s, { size: 9, fill: C.mute, maxW: 270, lh: 12 })
  })
  const mile: [string, string][] = [
    ['2013', 'TRPV1 3.4 Å（Liao 等）——膜蛋白小样品首证'],
    ['2015', 'β-半乳糖苷酶 2.2 Å（Bartesaghi 等）'],
    ['2017', '诺贝尔化学奖加冕（Dubochet、Frank、Henderson）'],
    ['2020 前后', 'apoferritin 约 1.2 Å（Yip 与 Kato 等团队）'],
  ]
  mile.forEach(([y, s], i) => {
    b.text(740, 706 + i * 34, y, { size: 11, weight: 700, fill: C.okD })
    b.line(838, 701 + i * 34, 848, 701 + i * 34, { stroke: C.ok, sw: 2.4 })
    b.text(858, 706 + i * 34, s, { size: 10.5, fill: C.sub })
  })
  b.ctext(1040, 866, '硬件一半（直接探测）＋软件一半（贝叶斯与算力）——相变发生在两半同时到位', { size: 10.5, weight: 700, fill: C.ink })
  b.ctext(1040, 906, '常规峰值从 10–20 Å 跃入原子分辨率区间', { size: 10, fill: C.mute })
}

export default scene({
  title: '分辨率革命的技术要素：直接探测、电影与算法',
  subtitle: 'K2 Summit 2012–2013 年商用，逐事件计数把 DQE 从不足 0.1 升至约 0.3–0.5；40–60 e⁻/Å² 切成 50–60 帧电影经对齐、抛光、剂量加权三部曲；里程碑从 TRPV1 3.4 Å 到 apoferritin 约 1.2 Å，2017 年诺奖加冕',
  draw,
})
