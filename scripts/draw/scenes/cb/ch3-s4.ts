// cb ch3-s4 内膜系统与疾病（39-d 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、ER 应激与 UPR 三分支 ============
  b.panel(30, 132, 900, 440, { title: '一、内质网应激与未折叠蛋白反应（UPR）三条分支' })
  // ER 示意（腔内未折叠蛋白累积）
  b.erU(60, 240, 240, 30, { ribo: false })
  b.ctext(180, 218, 'ER 腔内未折叠/错误折叠蛋白累积', { size: 11, weight: 600, fill: C.bad })
  for (let i = 0; i < 8; i++) b.circle(80 + i * 28, 252 + (i % 2) * 6, 5, { fill: C.bad, fillOp: 0.55 })
  b.text(60, 296, '基因突变 · 缺氧 · 钙稳态破坏 · 糖剥夺', { size: 10.5, fill: C.mute })
  // 三种传感器（ER 跨膜）
  const sens: [number, string][] = [[130, 'PERK'], [230, 'IRE1'], [330, 'ATF6']]
  sens.forEach(([x, name]) => {
    b.rect(x - 30, 320, 60, 30, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
    b.ctext(x, 340, name, { size: 12, weight: 700, fill: C.proD })
  })
  b.wtext(390, 296, '应激时伴侣 BiP/GRP78 与传感器解离，传感器活化', { size: 10.5, fill: C.mute, maxW: 240, lh: 14 })
  // 三条分支效果
  b.arrow(130, 355, 130, 392, { stroke: C.pro, sw: 2, marker: 'pro' })
  // 三列窄注改等行距多行 text（列间距 100px，单行宽压在 ~90px 内）
  ;['磷酸化 eIF2α →', '全局抑制翻译、', '减少蛋白流入'].forEach((ln, k) => b.text(56, 412 + k * 15, ln, { size: 11, fill: C.sub }))
  b.arrow(230, 355, 230, 392, { stroke: C.pro, sw: 2, marker: 'pro' })
  ;['非经典剪接', 'XBP1 mRNA →', '转录因子，上调', '折叠与 ERAD 基因'].forEach((ln, k) => b.text(156, 412 + k * 15, ln, { size: 11, fill: C.sub }))
  b.arrow(330, 355, 330, 392, { stroke: C.pro, sw: 2, marker: 'pro' })
  ;['经 S1P/S2P', '切割后入核，', '上调伴侣蛋白表达'].forEach((ln, k) => b.text(256, 412 + k * 15, ln, { size: 11, fill: C.sub }))
  // 失代偿 → 凋亡
  b.arrow(430, 335, 470, 335, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.rect(475, 306, 130, 58, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(540, 330, '应激持续失代偿', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(540, 350, 'CHOP · caspase-12', { size: 11, fill: C.bad })
  b.arrow(540, 364, 540, 392, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(540, 412, '凋亡', { size: 13, weight: 700, fill: C.bad })
  // 慢性应激疾病
  b.wtext(630, 310, '慢性 ER 应激参与：2 型糖尿病（胰岛 β 细胞衰竭）、神经退行性疾病（帕金森病、肌萎缩侧索硬化）、缺血再灌注损伤与肝病。', { size: 11, fill: C.sub, maxW: 270, lh: 16 })
  b.wtext(630, 400, 'UPR 三分支协同降低蛋白流入、增强折叠能力并加速清除——是 ER 蛋白稳态的核心代偿机制。', { size: 10.5, fill: C.mute, maxW: 270, lh: 15 })

  // ============ 二、疾病举例 ============
  b.panel(950, 132, 420, 440, { title: '二、内膜系统相关疾病举例' })
  b.table(962, 190, 396, {
    headers: ['疾病', '机制'],
    colW: [130, 266],
    rowH: 50,
    fontSize: 10,
    rows: [
      ['囊性纤维化', 'CFTR ΔF508 错误折叠，被 ER 质量控制降解，膜上功能通道不足'],
      ['家族性高胆固醇血症', 'LDL 受体缺陷，胆固醇稳态失衡'],
      ['I-cell 病', 'M6P 分选障碍，溶酶体酶错误分泌'],
      ['α1-抗胰蛋白酶缺乏', '突变蛋白在 ER 聚集，肝细胞损伤'],
      ['Zellweger 综合征', '过氧化物酶体装配缺陷，VLCFA 累积'],
      ['高尔基体与肿瘤', '糖基化谱改变（N-糖链分支增加），与侵袭转移相关'],
    ],
  })
  b.wtext(962, 548, '囊性纤维化新型治疗采用「正确剂」帮助突变蛋白折叠运输。', { size: 10, fill: C.mute, maxW: 396, lh: 13.5 })

  // ============ 三、细胞器互作网络 ============
  b.panel(30, 588, 1340, 392, { title: '三、细胞器互作网络：内膜系统的稳态即细胞稳态' })
  // ER-线粒体 MAM
  b.erU(90, 680, 220, 28, { ribo: false })
  b.ctext(200, 654, '内质网 ER', { size: 12, weight: 700, fill: C.dnaD })
  b.mito(420, 690, 110, 48, { label: '' })
  b.ctext(420, 744, '线粒体', { size: 12, weight: 700, fill: C.warn })
  b.rect(300, 668, 84, 44, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 1.6, rx: 6 })
  b.ctext(342, 694, 'MAM', { size: 12, weight: 700, fill: C.rnaD })
  b.arrow(300, 690, 284, 690, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.arrow(384, 690, 366, 690, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.wtext(90, 770, 'ER-线粒体接触位点（MAM）介导 Ca²⁺ 与脂质交换，是脂质合成与凋亡调控的平台。', { size: 11, fill: C.sub, maxW: 330, lh: 15.5 })
  // ER 提供膜来源
  b.arrow(200, 712, 200, 760, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.wtext(90, 806, 'ER 以 COPII 出芽为其他细胞器提供膜来源。', { size: 11, fill: C.sub, maxW: 330, lh: 15.5 })
  // 内体-溶酶体系统
  b.circle(700, 700, 42, { fill: C.accL, stroke: C.acc, sw: 2.2 })
  b.ctext(700, 696, '内体', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(700, 712, '系统', { size: 11.5, weight: 700, fill: C.accD })
  b.lysosome(830, 700, 40, { label: '' })
  b.ctext(830, 760, '溶酶体', { size: 12, weight: 700, fill: C.bad })
  b.arrow(744, 700, 786, 700, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.tag(700, 800, 'mTORC1 定位于溶酶体膜感受营养（第 8 章）', { fill: C.panelB, stroke: C.sub, size: 10.5, tfill: C.sub, pad: 8 })
  b.wtext(560, 660, '内体-溶酶体系统既是降解终点又是信号平台。', { size: 11, fill: C.sub, maxW: 300, lh: 15.5 })
  // 意义总结
  b.rect(920, 636, 430, 320, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(944, 668, '共同土壤', { size: 13.5, weight: 700, fill: C.ink })
  b.wtext(944, 700, '内膜系统的稳态维系即细胞稳态；其失衡是代谢病、衰老与肿瘤的共同土壤。', { size: 11.5, fill: C.sub, maxW: 380, lh: 16.5 })
  b.wtext(944, 760, '恶性肿瘤细胞高尔基体常碎裂增大、糖基化谱改变（N-糖链分支增加）与侵袭转移相关——糖基转移酶成为潜在治疗靶点。', { size: 11, fill: C.sub, maxW: 380, lh: 16 })
  b.wtext(944, 830, 'ER 为其他细胞器提供膜来源、内体-溶酶体兼为信号平台——互作网络的整体观是理解内膜系统疾病的钥匙。', { size: 10.5, fill: C.mute, maxW: 380, lh: 15 })
  b.arrow(880, 700, 912, 700, { stroke: C.mute, sw: 2, marker: 'mute' })
}

export default scene({
  title: '内膜系统与疾病：ER 应激、错误折叠与互作网络',
  subtitle: '未折叠蛋白累积触发 UPR（PERK 抑翻译 / IRE1 剪接 XBP1 / ATF6 入核），失代偿经 CHOP 走向凋亡；CFTR ΔF508 被 ER 质控降解致囊性纤维化；MAM 介导 ER-线粒体 Ca²⁺ 与脂质交换',
  draw,
})
