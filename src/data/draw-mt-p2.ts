// ============================================================
// 膜蛋白与物质转运自绘插图挂载 - 批次 P2（第 2 章离子通道，4 张）
// 场景源码：scripts/draw/scenes/mt/ch2-s1~s4.ts（46-c2 代理绘制，
// 主控 46-d 补登记与图注）
// 生成管线：scripts/draw/scenes/mt/ → bun scripts/draw/gen.ts mt
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawMtP2: Record<string, Illustration[]> = {
  'membrane-transport-ch2-s1': [
    {
      src: '/images/bio/drawn/mt-ch2-s1-channel-properties.svg',
      caption:
        '离子通道的一般性质由三要素模块化组合：孔道、门控与选择性。单通道电流服从欧姆关系 i = g(V−E_ion)，多数 K⁺ 通道电导 2–20 pS 而 BK 大电导可达 100–300 pS；KcsA 选择性滤器以主链羰基氧模拟水化壳、孔径约 3 Å 恰容脱水 K⁺，实现 >10000:1 的钾钠甄别（Nav 的 DEKA 滤器仅约 12:1）；通道以 10⁷–10⁸ 离子/s 的速率顺梯度双向导通且不饱和，比载体快约五个数量级——速率与选择性由同一几何设计兼得。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch2-s2': [
    {
      src: '/images/bio/drawn/mt-ch2-s2-gating-mechanisms.svg',
      caption:
        '门控机制四大类：电压门控以 S4 精氨酸滑尺把毫伏译成开门（Nav 门控电荷总量约 12–16 e）；配体门控分居膜两侧（胞外 Cys-loop 五聚体 vs 胞内 cAMP-CNG 与 Ca²⁺-CaM-BK）；机械门控中动物 Piezo 三叶桨与听毛 tip-link 对应植物 MSL 家族 10 个成员与 OSCA。植物用法独树一帜：KAT1 去极化激活却内向导通（与动物 Kv 反向用极）、TPC1 守液泡以电压与 Ca²⁺ 双门控——门控失效即长 QT 综合征与 SCN1A 癫痫。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch2-s3': [
    {
      src: '/images/bio/drawn/mt-ch2-s3-superfamilies.svg',
      caption:
        '离子通道超家族的拓扑谱系：VGL 超家族 4×6TMS（S1–S4 传感器+S5-P 环-S6 孔道）涵盖 Nav/Cav/Kv/CNG/HCN/TRP/TPC，TRP 在动物扩张至约 28 个而植物缺乏；Cys-loop 五聚体（5×4TMS）全为神经递质门控、动物独有；谷氨酸受体家族以 3TMS+P 环的省料设计让动物 AMPA/NMDA/KA 与植物 GLR 同源分化；Kir 4×2TMS 无传感器靠 Mg²⁺/多胺整流、K2P 2×4TMS 双 P 环常开；ClC 双孔二聚体部分成员已转运体化；动物 connexin 间隙连接对应植物胞间连丝——模块重复与寡聚协作两条演化路线。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch2-s4': [
    {
      src: '/images/bio/drawn/mt-ch2-s4-animal-plant-channels.svg',
      caption:
        '动物与植物通道家族对照——同源部件、两本职业账：动物独有 Nav（9 基因）、Cav（10 基因）、LGIC、Piezo 与 connexin（21 基因）司毫秒级快信号；植物扩张 GLR 20 个与 CNGC 20 个（动物仅约 6 个）、MSL 10 个司防御与发育钙信号。共有而用法不同：Shaker 型 K⁺ 通道动物约 40 个 KCN 基因司复极、拟南芥仅 9 个司 K⁺ 物流（AKT1/KAT1/GORK/SKOR/AKT2/KC1）；ClC 动物 9 对植物 7 且 AtCLCa 已演化为 2NO₃⁻/H⁺ 反向转运体；TPC1 动物守溶酶体透 Na⁺、植物守液泡透 Ca²⁺。植物动作电位以 Cl⁻ 外流为升支、K⁺ 外流与 H⁺-ATPase 复极为降支——不用 Nav/Cav 而自成一套电语言。',
      credit: DRAWN_CREDIT,
    },
  ],
}
