// mt ch13-s4 过氧化物酶体/内质网/核孔三种输入范式 · Ran-GTP 泵 · 接触位点 · 细胞器总表收口
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、三种蛋白输入范式 =================
  b.panel(30, 132, 660, 455, { title: '一、蛋白入膜的三个答案：三种输入范式' })
  // 范式一：ER 共翻译
  b.rect(46, 176, 196, 120, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 10 })
  b.text(62, 200, '① 内质网：共翻译', { size: 10.5, weight: 700, fill: C.rnaD })
  b.bilayer(62, 226, 164, { h: 10, tint: C.rna })
  b.rect(120, 204, 30, 24, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 5 })
  for (let i = 0; i < 3; i++) b.line(126 + i * 8, 208, 126 + i * 8, 224, { stroke: C.enz, sw: 1.2, opacity: 0.6 })
  b.ctext(135, 250, 'Sec61', { size: 8, weight: 700, fill: C.rnaD })
  b.arrow(120, 216, 160, 232, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.wtext(62, 272, '核糖体直连通道，肽链边合成边穿膜；信号肽被信号肽酶切除', { size: 7.8, fill: C.sub, maxW: 172, lh: 13 })
  // 范式二：线粒体解折叠
  b.rect(254, 176, 196, 120, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 10 })
  b.text(270, 200, '② 线粒体：解折叠', { size: 10.5, weight: 700, fill: C.proD })
  b.bilayer(270, 226, 164, { h: 10, tint: C.pro })
  b.rect(330, 220, 26, 22, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.ctext(343, 234, 'TOM', { size: 7, weight: 700, fill: C.dnaD })
  b.spline([[310, 210], [330, 226], [350, 240], [370, 256]], { stroke: C.dna, sw: 1.8 })
  b.tag(343, 250, 'Hsp70 棘轮', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7, weight: 700 })
  b.wtext(270, 272, 'ΔΨ 拉正电导肽、Hsp70 棘轮拽入；导肽切除——先拆解后过门', { size: 7.8, fill: C.sub, maxW: 172, lh: 13 })
  // 范式三：过氧化物酶体折叠输入
  b.rect(462, 176, 214, 120, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 10 })
  b.text(478, 200, '③ 过氧化物酶体：折叠输入', { size: 10.5, weight: 700, fill: C.dnaD })
  b.bilayer(478, 226, 182, { h: 10, tint: C.dna })
  b.circle(530, 218, 15, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.ctext(530, 222, 'P', { size: 9, weight: 700, fill: C.okD })
  b.arrow(548, 218, 580, 232, { stroke: C.ok, sw: 1.6, marker: 'ok' })
  b.tag(560, 204, 'Pex5', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 7, weight: 700 })
  b.circle(596, 240, 13, { fill: C.okL, stroke: C.ok, sw: 1.6 })
  b.ctext(596, 244, 'P', { size: 8, weight: 700, fill: C.okD })
  b.wtext(478, 272, '已折叠蛋白（连辅基装好）整件入关；Pex5 泛素化后由 AAA 马达拽回循环再用——触酶四聚体整队进门', { size: 7.8, fill: C.sub, maxW: 188, lh: 13 })
  // 过氧化物酶体功能
  b.wtext(46, 328, '过氧化物酶体：ABCD1–3 以酰基 CoA 形式输入极长链脂肪酸——ABCD1 突变致 X-ALD 肾上腺脑白质营养不良（VLCFA 堆积髓鞘、童年起病，《洛伦佐的油》即绕闸而行的努力）；Pex 基因突变酿成 Zellweger 谱病：输入机制崩塌、整个细胞器消失', { size: 8.4, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(46, 384, '植物版扩编：光呼吸乙醇酸→甘氨酸在叶绿体—过氧化物酶体—线粒体三方穿梭；乙醛酸循环支撑油脂种子（蓖麻、花生）萌发；胁迫下合成茉莉酸前体——动物版只管脂肪酸与毒物，同屏障不同化学战场', { size: 8.4, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(46, 440, 'ER 一侧：SERCA 泵钙入库（P2A），动物另有 IP₃R/RyR 钙释放通道把「最大钙库」倾成信号尖峰——植物 ER 缺乏明确同源物，钙释放身份仍在考证；Sec61 兼反向输出错误蛋白交 ERAD 降解，进与出同一副门框；被膜是磷脂与甾醇主产区（P4 翻转酶维护小叶不对称）', { size: 8.4, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(46, 508, '膜接触位点：转运不必穿越——ER–线粒体（MAM）交换脂质与钙、ER–叶绿体为脂质往返与胁迫信号专线，膜间隔 10–30 nm 对齐、脂交换蛋白直接倒手', { size: 8.6, weight: 600, fill: C.accD, maxW: 620, lh: 16 })

  // ================= 二、核孔复合体：最大的选择性通道 =================
  b.panel(710, 132, 660, 455, { title: '二、核孔复合体：三分法的巨型复现' })
  // NPC 截面示意
  b.rect(726, 200, 300, 200, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 10 })
  b.text(742, 226, '胞质（富 Ran-GDP）', { size: 9, weight: 700, fill: C.sub })
  b.bilayer(742, 250, 268, { h: 12, tint: C.pro })
  // 八辐轮盘（简化：两侧辐条）
  for (let i = 0; i < 4; i++) {
    b.rect(760 + i * 30, 240, 20, 32, { fill: C.proL, stroke: C.pro, sw: 1.4 })
    b.rect(890 + i * 30, 240, 20, 32, { fill: C.proL, stroke: C.pro, sw: 1.4 })
  }
  b.rect(876, 244, 16, 24, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.text(742, 300, '核质（富 Ran-GTP）', { size: 9, weight: 700, fill: C.sub })
  b.wtext(742, 322, '约 30 种核孔蛋白拼成逾 100 MDa 八辐轮盘，每核数百至数千拷贝；中央栓铺 FG 重复无序筛网', { size: 8.2, fill: C.sub, maxW: 270, lh: 15 })
  b.arrow(800, 268, 800, 296, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.arrow(820, 296, 820, 268, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.tag(762, 348, '＜约 40 kDa 被动漏过', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 8, weight: 700 })
  b.wtext(1046, 220, '大货物走受体中介：', { size: 9.5, weight: 700, fill: C.ink })
  b.wtext(1046, 242, 'importin/exportin 牵引货物逐个 FG 位点「跳岛」通行；Ran-GTP 梯度定方向——染色体上 RCC1 置换 GTP、胞质 RanGAP 水解回 GDP：核内富 GTP、胞质富 GDP，一个梯度管两向；mRNA 与核糖体亚基另走专门输出通路', { size: 8.4, fill: C.sub, maxW: 306, lh: 16 })
  b.wtext(1046, 320, '「通道—载体—泵」在此复现出最宏伟的版本：FG 无序筛网是通道、受体是载体、Ran-GTP 是泵', { size: 8.6, weight: 600, fill: C.accD, maxW: 306, lh: 16 })
  b.wtext(1046, 360, '两界共有同一语法：植物特异 Nup 变体参与免疫信号分流；动物开放式拆核对植物闭式核内分裂为演化余话', { size: 8.4, fill: C.sub, maxW: 306, lh: 16 })
  b.wtext(726, 430, '小结：过氧化物酶体、ER、核孔各守一道闸门——三种蛋白输入范式、钙库调度分岔、无序蛋白筛网与 Ran 泵，加上膜接触站点的「不穿膜转运」，细胞器的膜世界就此闭环', { size: 8.8, weight: 600, fill: C.accD, maxW: 626, lh: 17 })
  b.wtext(726, 470, '衔接：以一张总表收口全书——从 7.5 nm 质膜到逾 100 MDa 核孔，转运蛋白是生命同一门通用语', { size: 8.8, fill: C.sub, maxW: 626, lh: 17 })

  // ================= 三、细胞器转运总表：全书收口 =================
  b.panel(30, 592, 1340, 393, { title: '三、细胞器转运总表：动物 vs 植物的全书收口' })
  b.table(46, 630, 1308, {
    headers: ['区室', '动物侧配置', '植物侧配置', '共有性'],
    rows: [
      ['线粒体外膜', 'VDAC1–3（β 桶）＋TOM 输入', '同 VDAC/TOM 体系', '共有'],
      ['线粒体内膜', 'SLC25 53 成员、UCP1 产热', '约 58 成员、UCP＋AOX 旁路', '共有·配件差异'],
      ['叶绿体被膜', '无', 'Toc75/Tic、TPT/MEX1、DiT、KEA1/2', '植物独占'],
      ['类囊体膜', '无', '光泵 H⁺＋KEA3/VCCN1/TPK3 回路', '植物独占'],
      ['液泡/溶酶体', '溶酶体 ClC、TRPML、V-ATPase', '液泡 V-ATPase＋V-PPase 双引擎、NHX/CAX', '平行体系'],
      ['过氧化物酶体', 'ABCD1–3 管脂肪酸毒物', '同族＋光呼吸/乙醛酸循环/萌发', '共有·植物扩编'],
      ['内质网', 'SERCA、Sec61、IP₃R/RyR', 'SERCA 同工型、Sec61、钙释放待考', '共有·钙释放分岔'],
      ['核被膜', 'NPC 约 30 种核孔蛋白＋Ran 泵', '同语法＋植物特异 Nup', '共有'],
    ],
    fontSize: 8.4,
    rowH: 21,
    colW: [140, 420, 468, 280],
  })
  b.wtext(46, 850, '四句诀的细胞器版收束：同家族不同成员数（SLC25 两界各约半百）、同机制不同驱动离子（化学渗透通用而方向镜像）、同家族不同亚细胞定位（KEA 守被膜也守类囊体、ClC 遍布液泡内涵体）、同屏障不同化学战场（ABCD 管长链脂肪酸、光呼吸管活性氧）', { size: 9.5, weight: 600, fill: C.accD, maxW: 1308, lh: 20 })
  b.wtext(46, 882, '全书终章：堵与通的艺术，两界各执一本账，语法始终如一——从 7.5 nm 的脂双层到逾 100 MDa 的核孔，转运蛋白始终是生命写就的同一门通用语', { size: 9.5, weight: 700, fill: C.ink, maxW: 1308, lh: 20 })
}

export default scene({
  title: '过氧化物酶体、内质网与核孔：细胞器闸门与全书总表',
  subtitle:
    '三种蛋白输入范式并立——ER 共翻译（Sec61＋核糖体直连）、线粒体解折叠（ΔΨ＋Hsp70 棘轮）、过氧化物酶体折叠输入（Pex5 受体循环）；ABCD1 突变致 X-ALD、Pex 突变致 Zellweger 谱病；动物 ER 的 IP₃R/RyR 钙释放为植物所缺；NPC 以约 30 种核孔蛋白拼逾 100 MDa 轮盘、FG 无序筛网为通道、importin/exportin 为载体、Ran-GTP 梯度为泵——三分法的巨型复现；膜接触站点「不穿膜的转运」；八行细胞器总表为全书收口',
  draw,
})
