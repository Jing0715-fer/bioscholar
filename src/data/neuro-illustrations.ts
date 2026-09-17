// ============================================================
// 神经生物学教材插图（Wikimedia Commons 真实图，全部经 VLM 科学审校）
// 搜集于 Task 28-ILL-N2/N3：源文件/作者/许可证见
// agent-ctx/tmp28/manifest-n.json
// 图注为学术中文描述，与对应小节正文知识点呼应
// ============================================================
import type { Illustration } from '@/lib/types'

export const neuroIllustrations: Record<string, Illustration[]> = {
  // ---- 第 2 章 静息膜电位 ----
  'neurobiology-ch2-s4': [
    {
      src: '/images/bio/commons/sodium-potassium-pump-cycle.png',
      caption:
        'Na⁺/K⁺-ATPase 的循环工作模型：E1 构象朝胞内侧结合 3 个 Na⁺，ATP 磷酸化驱动构象翻转为 E2，将 Na⁺泵出胞外；E2 随即朝胞外侧结合 2 个 K⁺，去磷酸化返回 E1 并释放 K⁺入胞——3:2 的不等量泵送使每循环净外排一个正电荷（生电性泵），既维持约 -70 mV 的静息膜电位底座，也保障 Na⁺/K⁺ 浓度梯度的长期稳定，为动作电位与继发主动转运储备势能。乌本甙（ouabain）结合 K⁺ 位点阻断此循环。',
      credit: '图片来源：Wikimedia Commons（Biology with Risa，CC BY-SA 4.0）',
    },
  ],

  // ---- 第 4 章 突触与突触传递 ----
  'neurobiology-ch4-s1': [
    {
      src: '/images/bio/commons/chemical-synapse-diagram.png',
      caption:
        '化学突触的结构组成：突触前末梢内充满神经递质囊泡并聚集于活性区（active zone），Ca²⁺ 电压门控通道密集分布其近旁；约 20–40 nm 宽的突触间隙将前后膜隔开；突触后膜下方是致密的 PSD 结构，密集排列受体与支架蛋白。动作电位抵达末梢→钙内流→囊泡胞吐→递质跨间隙扩散→突触后受体激活，构成「电-化学-电」转换的完整链条——这正是 Sherrington 1897 年命名「突触」时所无法想象的分子细节。',
      credit: '图片来源：Wikimedia Commons（Christy Krames / Looie496，Public domain）',
    },
  ],
  'neurobiology-ch4-s2': [
    {
      src: '/images/bio/commons/neurotransmitter-release.png',
      caption:
        '突触囊泡胞吐的分子机器：突触前膜上的 syntaxin 与 SNAP-25 组成受体复合体，囊泡膜上的 synaptobrevin（VAMP）以三股 α 螺旋束与它们组装成 SNARE 复合体，像拉链一样把两层膜拉到几纳米内；Ca²⁺ 内流后 synaptotagmin 的 C2 结构域感知钙并结合磷脂，触发融合孔开放——递质于亚毫秒内倾入间隙。肉毒杆菌毒素各血清型以锌内肽酶特异性切割三种 SNARE 蛋白之一，据此可反推每型毒素的麻痹机制。',
      credit: '图片来源：Wikimedia Commons（neurotransmitter release diagram）',
    },
  ],

  // ---- 第 6 章 突触可塑性与学习记忆 ----
  'neurobiology-ch6-s2': [
    {
      src: '/images/bio/commons/nmda-receptor-diagram.png',
      caption:
        'NMDA 受体的「巧合检测器」双门机制：静息电位下（上图）即使谷氨酸（G）与甘氨酸（Gly）结合，通道孔仍被 Mg²⁺ 物理性堵塞，无电流通过；突触后膜充分去极化（下图）将 Mg²⁺ 逐出，此时谷氨酸结合的受体才开放并对 Ca²⁺ 高通透。突触前高频释放（谷氨酸到位）+ 突触后已去极化（AMPA 受体先前激活的后果）两条件同时满足，Ca²⁺ 内流才能触发 CaMKII 级联——这是海马 CA1 区 LTP 诱导的分子开关，也是 Hebb 规则「共同激活的细胞连接在一起」的受体级实现。',
      credit: '图片来源：Wikimedia Commons（Blanca Piedrafita，CC BY-SA 2.5）',
    },
  ],

  // ---- 第 8 章 视觉系统 ----
  'neurobiology-ch8-s1': [
    {
      src: '/images/bio/commons/retina-cell-layers-eye.png',
      caption:
        '视网膜的十层结构与细胞组成（自外向内）：色素上皮层→光感受器外段层（视杆/视锥）→外界膜→外核层（光感受器胞体）→外网状层（光感受器与双极细胞突触）→内核层（双极/水平/无长突/Müller 细胞胞体）→内网状层（双极与神经节细胞突触）→神经节细胞层→神经纤维层→内界膜。注意光在到达光感受器前需先穿过全部透明内层——这一「倒置」设计由色素上皮的吞噬与代谢支持补偿。中央凹处仅存视锥且其余各层被推向边缘，是视敏度最高的结构基础。',
      credit: '图片来源：Wikimedia Commons（Firoz et al.，CC BY 4.0）',
    },
  ],
  'neurobiology-ch8-s2': [
    {
      src: '/images/bio/commons/phototransduction.png',
      caption:
        '视杆细胞光转导级联：光子使视紫红质（R）中的 11-顺式视黄醛异构为全反式（数皮秒内完成），激活的 R* 逐个催化约数百个转导蛋白（G 蛋白）交换 GDP→GTP；每个激活的 PDE 水解数千个 cGMP。cGMP 浓度骤降使外段膜上 cGMP 门控 Na⁺ 通道关闭，暗电流中止，膜超极化——「光信号被转导为电信号」的关键在于级联的级联放大（单光子即可引发可测的超极化）。恢复依赖视紫红质激酶/arrestin 熄灭 R*、转导蛋白 GTP 水解与鸟苷酸环化酶再生 cGMP。',
      credit: '图片来源：Wikimedia Commons（Jason J. Corneveaux，CC BY 3.0）',
    },
  ],

  // ---- 第 9 章 听觉、前庭与化学感觉 ----
  'neurobiology-ch9-s1': [
    {
      src: '/images/bio/commons/cochlea-crosssection.png',
      caption:
        '耳蜗的横截面解剖：蜗管（中阶）被前庭阶与鼓阶夹持，三者沿蜗轴螺旋 2.5–2.75 圈。蜗管底壁即基底膜，其上坐落 Corti 器——一行内毛细胞（约 3500 个，95% 的听神经传入纤维与其构成一对一放射树突）与三列外毛细胞（约 12000–20000 个，接受交叉传出橄榄耳蜗束的调制）。基底膜宽度自蜗底向蜗顶渐增而劲度递减，von Békésy 行波学说据此解释音频拓扑：高频定位于蜗底、低频达蜗顶。',
      credit: '图片来源：Wikimedia Commons（Oarih / Fred the Oyster，CC BY-SA 3.0）',
    },
  ],

  // ---- 第 10 章 运动系统 ----
  'neurobiology-ch10-s3': [
    {
      src: '/images/bio/commons/purkinje-cell-cajal.jpg',
      caption:
        '浦肯野细胞（A）与颗粒细胞（B）——Santiago Ramón y Cajal 的经典 Camera Lucida 手绘图（猫小脑皮层，硝酸银染色）。浦肯野细胞那棵巨型扇形树突树密被爬行纤维与数十万条平行纤维的突触，是单一神经元接受突触数最多的纪录保持者之一；其轴突是小脑皮层唯一的输出通路，投射至深部核并全程抑制性（GABA）。Cajal 凭此类绘图奠定神经元学说，1906 年与 Golgi 共获诺贝尔奖。',
      credit: '图片来源：Wikimedia Commons（Santiago Ramón y Cajal 原图，Public domain）',
    },
  ],
  'neurobiology-ch10-s4': [
    {
      src: '/images/bio/commons/basal-ganglia-circuits.png',
      caption:
        '基底神经节的直接与间接通路连线图：纹状体（尾核/壳核）接受皮层谷氨酸能输入与黑质致密部多巴胺能调制。直接通路中纹状体 D1 阳性神经元投射至苍白球内侧段（GPi）/黑质网状部（SNr），经丘脑向运动皮层发放「去抑制→增强运动」信号；间接通路先至苍白球外侧段（GPe）再经丘脑下核（STN）回到 GPi/SNr，净效应抑制运动。多巴胺对两通路施以相反极性调制（D1 兴奋直接通路、D2 抑制间接通路）——黑质 DA 神经元退变时双重失衡即帕金森病的运动少-强直-震颤三联征。',
      credit: '图片来源：Wikimedia Commons（Mikael Häggström，CC BY-SA 3.0）',
    },
  ],
}
