// ============================================================
// 自绘插图挂载（em 学科 · 电子显微学）
// 全部为代码绘制矢量示意图（依据教材参数，非 AI 生成）
// 生成管线：scripts/draw/scenes/em/ → bun scripts/draw/gen.ts em
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawEmR4: Record<string, Illustration[]> = {
  'electron-microscopy-ch1-s2': [
    {
      src: '/images/bio/drawn/em-ch1-s2-wavelength-resolution.svg',
      caption:
        '相对论电子波长 λ = h/√(2meV·(1+eV/2mc²))：100 kV 加速电压对应 0.0370 Å、200 kV 对应 0.0251 Å、300 kV 对应 0.0197 Å——比可见光（约 400–700 nm）短约十万倍。阿贝衍射极限下光学显微镜约 200 nm，电子透镜的衍射极限仍约 0.12 nm，但电磁透镜像差（球差毫米级、色差）才是分辨率的真正瓶颈。',
      credit: DRAWN_CREDIT,
    },
  ],
  'electron-microscopy-ch1-s3': [
    {
      src: '/images/bio/drawn/em-ch1-s3-milestones.svg',
      caption:
        '生物电子显微学里程碑：1939 年首张病毒电镜照片（烟草花叶病毒）；1955–1959 年负染色技术建立；1974 年泰勒与格拉泽证明低温减缓晶体辐射损伤；1975 年亨德森与昂温获细菌视紫红质 7 Å 结构；1982 年杜博歇玻璃化冷冻；2013 年 Liao 等以直接电子探测相机解出 TRPV1 3.4 Å——分辨率革命起点；2017 年杜博歇、弗兰克、亨德森共享诺贝尔化学奖；2020 年前后 apoferritin 达 1.2 Å。',
      credit: DRAWN_CREDIT,
    },
  ],
  'electron-microscopy-ch3-s2': [
    {
      src: '/images/bio/drawn/em-ch3-s2-ctf-thon-rings.svg',
      caption:
        '衬度传递函数与 Thon 环：300 kV、Cs = 1.2 mm、欠焦 Δf = −2.0 μm 条件下，第一零点位于约 0.50 nm⁻¹（空间周期约 2 nm），其后零点依次约 0.71/0.87/1.01 nm⁻¹；混合 CTF = −[sin χ + Q·cos χ]，振幅衬度分数 Q 约 0.1–0.2。非晶冰与碳膜的功率谱上，CTF 零点表现为 Thon 环暗带——零点频率处信息丢失，需多欠焦收集互补。',
      credit: DRAWN_CREDIT,
    },
  ],
  'electron-microscopy-ch4-s4': [
    {
      src: '/images/bio/drawn/em-ch4-s4-low-dose-workflow.svg',
      caption:
        '低剂量三步工作流：search 模式以约 0.01–0.05 e⁻/Å²·s⁻¹ 的极低剂量率导航（累计小于 1 e⁻/Å²）；focus 在曝光区旁 1–2 μm 的牺牲区对焦与消像散；expose 才把预算剂量一次打满。各类样品的总剂量预算：负染约 10–20、单颗粒冷冻电镜 40–60、电子断层每张投影 0.5–3（总量 50–150 摊分）、二维晶体电子衍射小于 5 e⁻/Å²。',
      credit: DRAWN_CREDIT,
    },
  ],
  'electron-microscopy-ch5-s1': [
    {
      src: '/images/bio/drawn/em-ch5-s1-negative-staining.svg',
      caption:
        '负染技术五步流程（全程不过十分钟）：碳膜铜网辉光放电（15–30 mA、约 60 s）亲水化 → 滴样 3–5 μL 吸附 30–60 s → 滤纸吸干 → 重金属染液（醋酸铀/甲酸铀/磷钨酸 0.5–2%）染色 30–60 s（可两次）→ 空气干燥。重金属包埋使颗粒呈亮影、背景呈暗色的「负片」成像；分辨率约 15–20 Å，半小时即可给出二维形态学答案——是冷冻电镜前的标准面试环节。',
      credit: DRAWN_CREDIT,
    },
  ],
  'electron-microscopy-ch6-s2': [
    {
      src: '/images/bio/drawn/em-ch6-s2-grid-support-films.svg',
      caption:
        '冷冻载网与支持膜：3.05 mm 金属圆网按 mesh 数分孔（200 mesh 孔宽约 100–120 μm），铜网便宜导热好、金网束致运动小。支持膜三条路线——连续碳膜（约 10–20 nm，颗粒吸附于膜面）、Quantifoil 规整多孔碳膜（R1.2/1.3 即孔径 1.2 μm 间距 1.3 μm，冰悬于孔中）、UltrAuFoil 金箔（约 25 nm，界面友好）。辉光放电 15–30 mA、30–60 s 使碳膜亲水带电。',
      credit: DRAWN_CREDIT,
    },
  ],
  'electron-microscopy-ch6-s3': [
    {
      src: '/images/bio/drawn/em-ch6-s3-plunge-freezing.svg',
      caption:
        ' plunge freezing 工作流：环境仓控制湿度大于 90%（温度 4–20 °C）防止蒸发浓缩 → 滤纸 blot 1–5 s 吸去多余液体 → 约 0.1–0.5 s 内浸入液态乙烷（约 90 K）实现 10⁵–10⁶ K/s 速冷绕过冰晶成核 → 液氮中低于 130 K 储存。样品浓度 0.5–5 mg/mL、缓冲液低盐，目标冰厚 30–100 nm——颗粒清晰的单层薄冰是合格数据的前提。',
      credit: DRAWN_CREDIT,
    },
  ],
  'electron-microscopy-ch7-s1': [
    {
      src: '/images/bio/drawn/em-ch7-s1-central-section-theorem.svg',
      caption:
        '中心截面定理：实空间投影 p(x, y) = ∫ρ dz（三维密度沿视线积分）的二维傅里叶变换，等于三维傅里叶体积中过原点、以投影方向为法向的中心截面。不同取向颗粒的显微照片对应不同方向的截面，拼合出完整三维傅里叶体积后逆变换即得重构。欧拉角 φ/θ/ψ 参数化取向：θ 决定截面法向，ψ 仅面内自旋——这是单颗粒分析与断层扫描共用的数学根基。',
      credit: DRAWN_CREDIT,
    },
  ],
  'electron-microscopy-ch8-s2': [
    {
      src: '/images/bio/drawn/em-ch8-s2-spa-pipeline.svg',
      caption:
        '单颗粒数据处理主流流水线：电影经 MotionCor2 运动校正与剂量加权 → CTFFIND4 拟合衬度传递函数 → 自动挑选颗粒（LoG/深度学习）→ 二维分类提纯（类平均信噪比随 √N 提升）→ ab initio 初始模型 → 三维分类拆解构象异质性 → gold-standard 精修（数据分半独立、FSC 0.143 判据）报告分辨率。RELION 与 cryoSPARC 是两大主力实现，GPU 加速把十万颗粒级精修压缩到小时级。',
      credit: DRAWN_CREDIT,
    },
  ],
  'electron-microscopy-ch11-s2': [
    {
      src: '/images/bio/drawn/em-ch11-s2-sem-signals-detectors.svg',
      caption:
        '扫描电镜的信号体系：二次电子能量低于 50 eV、逸出深度 1–10 nm——SE1 由探针直接激发（约 1 nm 分辨率）、SE2/SE3 由背散射再激发（亚微米分辨率），是表面形貌衬度的来源。背散射电子逸出深度约 0.1–1 μm，产额随原子序数上升（碳约 0.05、金约 0.5）提供成分衬度。ET 探测器侧向收集、环内探测器专收 SE1、四象限背散射探测器可分离成分与形貌信息。',
      credit: DRAWN_CREDIT,
    },
  ],
}
