// ============================================================
// 自绘插图挂载（xc 学科 · X射线晶体学）
// 全部为代码绘制矢量示意图（依据教材参数，非 AI 生成）
// 生成管线：scripts/draw/scenes/xc/ → bun scripts/draw/gen.ts xc
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawXcR4: Record<string, Illustration[]> = {
  'x-ray-crystallography-ch1-s3': [
    {
      src: '/images/bio/drawn/xc-ch1-s3-dawn-timeline.svg',
      caption:
        '大分子晶体学的黎明（1934–1969）：1934 年贝尔纳使胃蛋白酶晶体在母液中保持衍射（干燥晶体则无衍射——保湿是蛋白晶体学的第一课）；1953 年佩鲁茨建立重原子同晶置换法；1958 与 1960 年肯德鲁先后解出肌红蛋白 6 Å 与 2 Å 结构；1962 年佩鲁茨与肯德鲁共享诺贝尔化学奖；1964 年霍奇金（青霉素与维生素 B12）、1965 年菲利普斯溶菌酶 2 Å、1969 年中国团队测定胰岛素 2.5 Å 结构。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch2-s1': [
    {
      src: '/images/bio/drawn/xc-ch2-s1-lattice-miller.svg',
      caption:
        '晶体结构＝点阵＋基元；晶胞六参数 a b c α β γ 定义惯用晶胞形状；Miller 指数 (hkl) 标记晶面族对三轴的截距倒数。立方晶系面间距公式 d = a/√(h²+k²+l²)：a = 10 Å 时 (110)/(111)/(210) 面的 d 值分别为 7.07/5.77/4.47 Å。倒易点阵与正空间对偶，倒易格矢长度 d* = 1/d，是布拉格衍射几何与 Ewald 球构造的语言。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch2-s3': [
    {
      src: '/images/bio/drawn/xc-ch2-s3-space-groups.svg',
      caption:
        '空间群的对称操作：螺旋轴 2₁＝旋转 180° 加平移半个周期；滑移面＝反映加分数平移。生物大分子由 L-氨基酸构成，只能落在 65 个 Sohncke 手性空间群（230 空间群的子集）。系统消光规律：P2₁ 使 0k0 的 k 为奇数消光、P2₁2₁2₁ 三轴向指数均须为偶、C 底心格子 h+k 为奇数整体消光——这些缺失反射是实验判定空间群的依据。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch3-s2': [
    {
      src: '/images/bio/drawn/xc-ch3-s2-nucleation-phase.svg',
      caption:
        '结晶相图四区（不饱和/亚稳/成核/沉淀）与经典成核理论：ΔG(r) = 4πr²γ − (4/3)πr³ρΔμ 的表面项与体积项竞争，给出临界核半径 r* = 2γ/(ρΔμ) 与能垒 ΔG* = 16πγ³/(3(Δμ)²ρ²)；成核速率正比于 exp(−ΔG*/kT)，对过饱和度呈指数依赖。两步成核学说中致密液滴先行；晶种技术把成核与生长解耦——亚稳区内「只养不生」。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch4-s3': [
    {
      src: '/images/bio/drawn/xc-ch4-s3-bragg-ewald.svg',
      caption:
        '布拉格定律与 Ewald 反射球：2d sinθ = nλ 在 λ = 1 Å 时，d = 2.0/1.0/0.8 Å 对应 θ = 14.5°/30.0°/38.7°。倒易格矢长度 |g| = 1/d；Ewald 球半径 1/λ，按五步作图法构造——倒易格点落在球面上即满足衍射条件；限制球半径 2/λ。分辨率从 2 Å 提高到 1 Å，可测反射数增加约 8 倍，这是高分辨率数据收集代价陡增的几何根源。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch5-s4': [
    {
      src: '/images/bio/drawn/xc-ch5-s4-radiation-dose.svg',
      caption:
        '辐射剂量学：1 Gy = 1 J/kg；Henderson 1995 年估算的剂量极限为 2×10⁷ Gy（20 MGy），Owen 2006 年实验修正放宽至约 30 MGy。特异性损伤的先后次序为二硫键断裂（1–5 MGy 即可检出）→ 金属中心失序 → 羧基去羧 → 酪氨酸邻位损伤；全局损伤四指纹为强度衰减、B 因子上升、晶格膨胀与镶嵌度增大。RADDOSE-3D 输入束流与晶体参数输出三维剂量分布；XFEL 的「衍射先于破坏」是绕开剂量的出路。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch6-s4': [
    {
      src: '/images/bio/drawn/xc-ch6-s4-data-quality.svg',
      caption:
        '数据质量三兄弟与 CC1/2：Rmerge 随冗余恶化（2.8% 至 3.9%）、Rmeas 对冗余校正后恒定（约 4.0%）、Rpim 反映合并后精度（可降至 0.9%）。CC1/2 = 0.143 对应 CC* = 0.5，是现代分辨率截断的主判据；I/σ ≥ 2 的传统惯例退居辅助。整体完整度应 ≥95%，反常数据冗余宜 7–10 倍。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch7-s3': [
    {
      src: '/images/bio/drawn/xc-ch7-s3-mr-modern.svg',
      caption:
        '分子置换的现代实践：旋转函数定取向、平移函数定位置、packing 检验把关；Phaser 的 TFZ 大于 8 大概率为正确解、5–8 存疑，LLG 显著为正。模型来源决策：同源结构序列一致性大于 30% 可直接使用、20–30% 需修剪、小于 20% 宜用 AlphaFold 预测模型（pLDDT 大于 90 的主链误差约 1 Å）；多模型 ensemble 可把约 1 Å 的模型误差压缩过半。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch9-s1': [
    {
      src: '/images/bio/drawn/xc-ch9-s1-density-maps.svg',
      caption:
        '电子密度图的解读：2mFo−DFc 主力图按 1σ 轮廓勾画已知部分，mFo−DFc 差值图以 ±3σ 揭示缺失（正峰）与多余（负峰）；omit 图经「挖区—精修—重构图」三步消除模型偏差，polder 图（Liebschner 2017）对外周小配体提供无偏检验。分辨率决定可见细节：1.2 Å 可辨氢、1.8 Å 键电子分叶、3.2 Å 侧链断续、6 Å 只余螺旋轮廓。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch11-s1': [
    {
      src: '/images/bio/drawn/xc-ch11-s1-ramachandran.svg',
      caption:
        'Ramachandran 图：φ/ψ 平面的 favored/allowed/outlier 三区审判台，outlier 小于 0.5% 为行业惯例，优秀结构 favored 区占比不低于 98%。甘氨酸无 Cβ 约束四象限皆可及，脯氨酸的 φ 锁于约 −60°，pre-Pro 自成一区；β 折叠、αR 与 αL 螺旋的典型区块清晰可辨——每个红叉 outlier 都应逐个给出解释或重建。',
      credit: DRAWN_CREDIT,
    },
  ],
}
