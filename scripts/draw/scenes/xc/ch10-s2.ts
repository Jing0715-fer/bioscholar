// xc ch10-s2 精修参数的层级与策略（Task 4-d）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、参数五级与账目 ============
  b.panel(30, 132, 660, 430, { title: '一、参数五级：参数总数必须与数据量匹配' })
  const lvl = (y: number, t: string, s: string, badge: string) => {
    b.rect(56, y, 380, 52, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
    b.text(72, y + 21, t, { size: 11, weight: 700, fill: C.ink })
    b.wtext(72, y + 38, s, { size: 9.5, fill: C.sub, maxW: 260, lh: 12.5 })
    b.tag(414, y + 26, badge, { fill: C.accL, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 7 })
  }
  lvl(184, '原子坐标（individual sites）', '永远是主角', '每原子 3 个')
  lvl(242, '各向同性 B 因子', '热振动与静态无序的合并弥散', '每原子 1 个')
  lvl(300, 'group B', '低分辨率的退化方案', '每组 1 个')
  lvl(358, '各向异性 B（Uij 六分量）', '只在数据极富余时合法', '每原子 6 个')
  lvl(416, 'occupancy', '部分占有与交替构象比例，整组联动', '特殊对象')
  // 账目条
  b.rect(470, 184, 200, 284, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(570, 202, '250 残基·约 2000 原子', { size: 10.5, weight: 700, fill: C.ink })
  const acct = (y: number, label: string, val: number, max: number, color: string) => {
    const bw = (val / max) * 150
    b.rect(486, y, bw, 16, { fill: color, fillOp: 0.75, stroke: color, sw: 1.2, rx: 3 })
    b.text(486 + bw + 8, y + 13, `${val}`, { size: 10, weight: 700, fill: C.sub })
    b.text(478, y + 13, label, { size: 9.5, fill: C.mute, anchor: 'end' })
  }
  acct(226, '坐标', 6000, 12000, C.acc)
  acct(258, '＋个体 B', 8000, 12000, C.dna)
  acct(290, '全各向异性', 12000, 12000, C.bad)
  b.wtext(486, 330, 'Uij 六分量对数据量的胃口与坐标同级；2 Å 精修各向异性 B 是自欺。', { size: 9.5, fill: C.sub, maxW: 170, lh: 13 })
  b.wtext(486, 396, '原则：分辨率每降一档就退一级参数化。', { size: 10, weight: 700, fill: C.ink, maxW: 170, lh: 14 })
  b.wtext(56, 490, 'phenix.refine 的 strategy 与 REFMAC 的指令都围绕「哪些参数放、哪些锁」组织，每放开一级都要问一句数据答不答应。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 二、TLS ============
  b.panel(710, 132, 660, 430, { title: '二、TLS：二十个参数讲完一个域（Schomaker 与 Trueblood 1968）' })
  // 域摆动示意
  b.ellipse(880, 300, 120, 62, { fill: C.panelB, stroke: C.sub, sw: 1.8 })
  b.line(880, 210, 880, 390, { stroke: C.mute, sw: 1.8, dash: '7 5' })
  b.ctext(880, 202, '摆动轴', { size: 10, weight: 700, fill: C.mute })
  const tlsAtom = (dx: number, dy: number) => {
    const r = 1 + Math.abs(dx) / 60
    b.ellipse(880 + dx, 300 + dy, 7 * r, 4.4 * r, 0, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  }
  tlsAtom(0, 0); tlsAtom(28, -22); tlsAtom(-30, -18); tlsAtom(52, 12); tlsAtom(-56, 16); tlsAtom(86, -6); tlsAtom(-88, 8); tlsAtom(20, 34); tlsAtom(-16, 36)
  b.ctext(880, 384, '域绕轴摆动：远离轴的原子弥散大，一个 L 张量算清全场', { size: 10, fill: C.sub })
  // T L S 盒
  const tls = (x: number, t: string, s: string, n: string) => {
    b.rect(x, 420, 190, 62, { fill: C.dnaL, stroke: C.dna, sw: 1.7, rx: 8 })
    b.ctext(x + 95, 442, `${t}（${n} 参数）`, { size: 11.5, weight: 700, fill: C.dnaD })
    b.ctext(x + 95, 464, s, { size: 9.5, fill: C.sub })
  }
  tls(730, '平移张量 T', '整体平移抖动', '6')
  tls(940, '旋转张量 L', 'libration 摆动', '9')
  tls(1150, '耦合张量 S', 'screw 与相关', '5')
  b.ctext(1220, 508, '合计 20 个参数／域', { size: 11, weight: 700, fill: C.ink })
  b.wtext(730, 176, '把一个结构域当作刚体，以刚体运动学替代逐原子的 B——而逐原子 B 要为域内数百个原子花数百个参数。适用区间约 2 至 3.5 Å：低于个体 B 的可靠分辨率仍可运行，是中分辨率的主力装备；对 3 至 3.5 Å 数据，常见组合恰是 TLS 加 group B。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 530, 'PDB 口径：总有效 B = TLS 贡献加残余个体 B，两者加和才是报告值。合理性检查：L 张量主值对应振幅在几度到十几度属正常；TLS 拟合后域内有效 B 谱应更平滑，R_{free} 应有实打实的收益；分组按域、链、二级结构皆可试。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 三、NCS 与孪晶 ============
  b.panel(30, 572, 660, 390, { title: '三、NCS 两档约束与孪晶怪兽' })
  b.text(60, 620, 'NCS：同一分子在不同环境的重复证据', { size: 11.5, weight: 700, fill: C.ink })
  b.ellipse(140, 676, 44, 30, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ellipse(260, 676, 44, 30, { fill: C.dnaL, stroke: C.dna, sw: 2, dash: '6 4' })
  b.line(186, 676, 214, 676, { stroke: C.sub, sw: 1.6, dash: '4 3' })
  b.ctext(200, 660, '偏差 σ', { size: 9.5, weight: 700, fill: C.sub })
  b.ctext(140, 724, '拷贝 1', { size: 9.5, fill: C.mute })
  b.ctext(260, 724, '拷贝 2', { size: 9.5, fill: C.mute })
  // σ 档位刻度
  const nx = 60, nw = 300
  b.rect(nx, 748, nw * 0.12, 24, { fill: C.proL, stroke: C.pro, sw: 1.3 })
  b.rect(nx + nw * 0.12, 748, nw * 0.30, 24, { fill: C.okL, stroke: C.ok, sw: 1.3 })
  b.rect(nx + nw * 0.42, 748, nw * 0.28, 24, { fill: C.accL, stroke: C.acc, sw: 1.3 })
  b.rect(nx + nw * 0.70, 748, nw * 0.30, 24, { fill: C.warnL, stroke: C.warn, sw: 1.3 })
  b.ctext(nx + nw * 0.06, 762, 'strict', { size: 9, weight: 700, fill: C.proD })
  b.ctext(nx + nw * 0.27, 762, 'tight 0.05 Å', { size: 9, weight: 700, fill: C.okD })
  b.ctext(nx + nw * 0.56, 762, 'medium', { size: 9, weight: 700, fill: C.accD })
  b.ctext(nx + nw * 0.85, 762, 'loose 2 Å', { size: 9, weight: 700, fill: C.warnD })
  b.ctext(nx + nw / 2, 792, '分辨率越低档位越紧；高分辨率下须放松乃至解除', { size: 9.5, fill: C.sub })
  b.wtext(400, 626, 'strict 约束让拷贝坐标完全等同、参数直接合并，最省；restraints 约束拷贝间相应原子的偏差，σ 从约 0.05 Å 到 2 Å 量级分档。硬约束等于宣称「晶体环境对分子毫无影响」——高分辨率下拷贝间的真实环境差异显现，须放松。', { size: 10.5, fill: C.sub, maxW: 276, lh: 15 })
  // 孪晶示意
  b.text(60, 830, '孪晶：晶畴共生、衍射叠加', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(60, 846, 90, 90, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.polygon([[60, 846], [150, 936]], { fill: 'none', stroke: C.bad, sw: 2 })
  b.polygon([[60, 936], [150, 846]], { fill: 'none', stroke: C.bad, sw: 2, dash: '5 4' })
  b.ctext(105, 956, '两个（或多个）晶畴', { size: 9, fill: C.mute })
  b.wtext(180, 856, '强度是各畴的加权和；孪晶律是让本不等价的反射对「合并」的操作矩阵（单斜晶系绕 a 或 c 轴的二重伪对称孪晶最常见）。诊断靠 H-test（Britton 与 Yeates，1980 年代奠基）检查孪晶指标组合的分布偏离。', { size: 10.5, fill: C.sub, maxW: 280, lh: 15 })
  b.wtext(480, 856, '对策两步：按孪晶律解叠，或在目标函数里以孪晶分数 α（0 至 0.5）参数化加权和直接做 twin refinement。警钟常鸣：完美孪晶（α 为 0.5）使 R 异常低而模型可全错——孪晶不检出，R 的读数尽是幻象；twin 精修之后 R_{free} 才恢复话语权。', { size: 10.5, fill: C.badD, maxW: 196, lh: 15 })

  // ============ 四、策略组合与急救工具 ============
  b.panel(710, 572, 660, 390, { title: '四、分辨率对应的策略组合与两件急救工具' })
  b.table(730, 622, 620, {
    headers: ['分辨率', 'ADP 模型', 'NCS 档位', '氢', '备注'],
    colW: [92, 150, 128, 110, 140],
    rowH: 27,
    fontSize: 10,
    rows: [
      ['3.5 Å', 'group B 加 TLS', 'strict 或 tight', '不加', '强先验、参数极省'],
      ['2.5 Å', '个体 B 加 TLS', 'tight 或 medium', '可加 riding', '主流区间'],
      ['1.8 Å', '个体各向同性 B', 'medium 或解除', 'riding', '水与交替构象丰富'],
      ['优于 1.2 Å', '各向异性 Uij', '无需', 'riding 加可精修', 'occupancy 可放开'],
    ],
  })
  b.wtext(730, 792, 'riding 氢的性价比：氢坐标由母原子几何生成、随母原子联动——不单独精修坐标、几乎不增参数，却常把 R 与 R_{free} 拉低约 1 个百分点（1.5 Å 起；氢占原子总数的一半）。到优于 1.2 Å 部分氢可直接定位；2.5 Å 以远通常不值得。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 856, '两件急救工具：刚体精修是 MR 后的第一步——每刚体 6 个自由度（3 平移加 3 旋转），只动姿态不动内部，几轮拉正错位；模拟退火（Brünger 的 X-PLOR）加热到 2000 至 5000 K 再缓慢冷却，借热运动翻越局部极小的壁垒。共同纪律：都是起手式而非日常。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })
  b.wtext(730, 920, '试错纪律：每次只动一个变量、跑固定轮数、以 R_{free} 与 gap 对照前后；开工先立「基线轮」，TLS 分组、NCS 档位、水批量都以基线为锚逐一试。', { size: 10, fill: C.mute, maxW: 616, lh: 14 })
}

export default scene({
  title: '精修参数的层级与策略',
  subtitle: '参数五级：坐标 3、个体 B 1、group B、各向异性 6、occupancy；TLS 以 T6+L9+S5 共 20 参数讲完一个域；NCS 档位 σ 0.05–2 Å；完美孪晶 α=0.5 使 R 异常低而模型可全错',
  draw,
})
