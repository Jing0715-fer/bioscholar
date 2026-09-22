// ============================================================
// 自绘插图挂载（sb 学科 · 结构生物学实验方法）
// 全部为代码绘制矢量示意图（依据教材参数，非 AI 生成）
// 生成管线：scripts/draw/scenes/sb/ → bun scripts/draw/gen.ts sb
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawSbR4: Record<string, Illustration[]> = {
  'structural-biology-ch1-s2': [
    {
      src: '/images/bio/drawn/sb-ch1-s2-methods-overview.svg',
      caption:
        '三大结构解析方法总览：X 射线晶体学以 10¹³–10¹⁵ 个分子的有序晶格放大信号，常规分辨率约 1.0–2.5 Å（小蛋白纪录 0.48 Å），分子量无上限（50S 核糖体亚基约 1.6 MDa，2000 年）；冷冻电镜单颗粒约 100 kDa 起步、大于 300 kDa 更可靠，2013 年后 2–3 Å 成为常态（最佳 1.22 Å）；溶液 NMR 常规小于 30–50 kDa、TROSY 加氘代可至约 100 kDa，是唯一能直接测量皮秒至秒动力学的传统方法——三者的样品要求、周期与成本互为补集。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch3-s2': [
    {
      src: '/images/bio/drawn/sb-ch3-s2-affinity-imac.svg',
      caption:
        '亲和层析原理：固定化金属螯合亲和层析（IMAC）中 IDA 三齿或 NTA 四齿配体螯合 Ni²⁺（或 Co²⁺），余下配位位点由 His₆ 标签的咪唑基补位结合；游离咪唑以梯度竞争洗脱——结合缓冲液 20–40 mM、洗脱 150–500 mM（实例 250 mM）。GST-谷胱甘肽、MBP-直链淀粉、Strep-tag-链霉亲和素（desthiobiotin 竞争）与 Protein A-Fc 各成体系，一步亲和可把纯度从粗提的百分之几抬到 90% 以上。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch3-s3': [
    {
      src: '/images/bio/drawn/sb-ch3-s3-ion-exchange.svg',
      caption:
        '离子交换层析：蛋白净电荷由 pI 与缓冲液 pH 共同决定——pH 高于 pI 时带负电、结合阴离子交换剂 Q/DEAE，低于 pI 时结合阳离子交换剂 SP/CM，结合 pH 宜偏离 pI 至少 1 个单位。0–500 mM NaCl 线性梯度跨 10–20 个柱体积展开洗脱，梯度越长分辨率越高；容量内上样体积不受限，是标签蛋白与天然蛋白流程共同的第二步精纯主力。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch5-s1': [
    {
      src: '/images/bio/drawn/sb-ch5-s1-phase-diagram.svg',
      caption:
        '结晶相图四区与溶解度旋钮：不饱和区（溶解）、亚稳区（只长不生）、成核区与沉淀区由溶解度曲线与临界过饱和分隔；Cohn 方程 log S = β − Ks·I 刻画盐析段，Hofmeister 序列中硫酸铵析出能力最强。悬滴蒸气扩散沿蒸汽压差把液滴推入过饱和、成核后回落溶解度线缓慢生长——「成核要快、生长要慢」的两幕剧，也是晶种技术的全部原理。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch6-s1': [
    {
      src: '/images/bio/drawn/sb-ch6-s1-bragg-ewald.svg',
      caption:
        '布拉格定律与 Ewald 反射球：2d sinθ = nλ，λ = 1 Å 时 d = 2.0/1.0/0.8 Å 对应 θ = 14.5°/30.0°/38.7°；Ewald 球半径 1/λ，倒易格点落在球面上即满足衍射条件——旋转晶体让格点扫过球面逐个产斑。光源亮度从实验室密封管（Cu Kα 1.5418 Å，约 10⁸–10⁹）到波荡器（约 10¹⁵–10¹⁷）再到低发射度扩散源（约 10¹⁸–10²² ph/s/mm²/mrad²/0.1%bw）；Se 吸收边 0.9795 Å 附近微调波长是反常散射定相的先决条件。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch7-s2': [
    {
      src: '/images/bio/drawn/sb-ch7-s2-molecular-replacement.svg',
      caption:
        '分子置换两步搜索：Patterson 函数 P(u) = Σ|F|²exp(−2πih·u) 无需相位即可计算，分子内向量簇只随取向变化——旋转函数（Rossmann 与 Blow 1962 年）定取向、平移函数定位置、packing 检验排除碰撞；Phaser 以 LLG 与 TFZ 判读（大于 8 大概率正确、5–8 存疑）。模型来源：同源结构序列一致性大于 30% 直接用、20–30% 修剪侧链、小于 20% 用 AlphaFold 预测（pLDDT 大于 90 的主链误差约 1 Å）——预测时代分子置换成功率大幅跃升。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch9-s2': [
    {
      src: '/images/bio/drawn/sb-ch9-s2-vitrification-grids.svg',
      caption:
        '玻璃化冷冻与载网制备（Dubochet 1982 年，2017 年诺贝尔化学奖）：环境仓控制湿度大于 90% 防蒸发浓缩，滤纸 blot 1–5 s 吸去多余液体，约 0.1–0.5 s 内浸入液态乙烷浆料（约 90 K）实现 10⁵–10⁶ K/s 速冷绕过冰晶成核（玻璃化转变温度约 136 K）——液氮因 Leidenfrost 气膜导热不足，必须以乙烷为冷媒。载网谱系：铜/金网 200–400 mesh、Quantifoil R1.2/1.3 规整多孔碳膜、UltrAuFoil 金箔；辉光放电 15–30 mA、30–60 s 亲水化；样品浓度 0.5–5 mg/mL、目标冰厚 30–100 nm。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch10-s2': [
    {
      src: '/images/bio/drawn/sb-ch10-s2-picking-2d-classification.svg',
      caption:
        '颗粒挑选与二维分类：模板相关、LoG 差分高斯与深度学习（Topaz/cryolo）三种眼力，框径取颗粒直径 1.2–1.5 倍，一套数据 10⁵–10⁶ 颗粒。二维类平均把颗粒按取向聚类、类内对齐平均，信噪比随 √N 提升（Scheres 2012 年贝叶斯框架）；「好类」以约 10 Å 的 α 螺旋纹理与视角多样为标准，空框/聚集/冰污染的垃圾类一律剔除。参考偏差三防线：随机参考起步、多参考并行、垃圾类不硬救（Dotson 与 Glaeser 2016 年论战）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch11-s1': [
    {
      src: '/images/bio/drawn/sb-ch11-s1-nmr-hsqc.svg',
      caption:
        '蛋白质 NMR 基础：¹H-¹⁵N HSQC 指纹谱中每个非脯氨酸残基给出一枚酰胺峰（100 残基蛋白约 100 枚）——突变、配体结合与构象变化都会移动特定峰位。样品要求 ¹⁵NH₄Cl 与 ¹³C-葡萄糖双标记的大肠杆菌表达、浓度 0.2–1 mM；谱仪场强 600–950 MHz（14.1–22.3 T）。分子量极限的物理根源是转动变慢导致弛豫加快与谱线展宽：常规小于 30–50 kDa，TROSY（Pervushin 1997 年）加氘代把极限推至约 100 kDa。',
      credit: DRAWN_CREDIT,
    },
  ],
}
