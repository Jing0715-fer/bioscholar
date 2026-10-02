// ============================================================
// 膜蛋白与物质转运自绘插图挂载 - 批次 P3（由绘图代理 46-c3 编写）
// 生成管线：scripts/draw/scenes/mt/ → bun -e 渲染 or bun scripts/draw/gen.ts mt
// 覆盖小节：membrane-transport-ch3-s1 ~ ch3-s4（第 3 章 4 节）
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawMtP3: Record<string, Illustration[]> = {
  'membrane-transport-ch3-s1': [
    {
      src: '/images/bio/drawn/mt-ch3-s1-animal-k-channels.svg',
      caption:
        '人类钾通道四大家族共享 GYG 滤器（K⁺/Na⁺ 万倍选择）：Kv 约 40 基因、12 亚族，4×(6TMS+P) 四聚体靠 T1 装配，N 端「球-链」数毫秒堵孔失活；Kir 仅 2TMS，Mg²⁺/多胺塞孔口致内向整流；K-ATP＝Kir6.2+SUR1 八聚体按 ATP/ADP 开合，为磺脲类靶点；BK 电导 100–300 pS 双门控；K2P 15 基因常开漏流；hERG/KCNQ1 致 LQT2/LQT1，ROMK 致 Bartter。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch3-s2': [
    {
      src: '/images/bio/drawn/mt-ch3-s2-plant-shaker.svg',
      caption:
        '拟南芥 Shaker 9 成员与 Kv 同享 6TMS 与带电 S4，门控方向反转：KAT1/KAT2 守保卫细胞、AKT1 守根表皮（KC1 无孔亚基收窄）、AKT2 双向守韧皮部、GORK 普遍外排、SKOR 专职装木质部。KAT1 整流靠胞外 K⁺ 门控（1992 酵母互补克隆），与 Kir 多胺阻塞同题两解；低钾时 CBL1/9-CIPK23 激活 AKT1；蓝光-H⁺-ATPase 级联开 KAT1、吸水开气孔，保卫细胞 K⁺ 达数百 mM。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch3-s3': [
    {
      src: '/images/bio/drawn/mt-ch3-s3-plant-k-transporters.svg',
      caption:
        '植物细胞含 K⁺ 100–200 mM 而土壤仅 0.1–1 mM，须逆 100–1000 倍富集：毫摩尔级 AKT1 管日常吸收，微摩尔级 Km 的 HAK5（HAK/KUP 13 成员）低钾数小时即强诱导上岗，「换装备」与「拨开关」两层接力覆盖四个数量级的土壤钾波动。内膜侧 KEA 6 成员与 CHX 共管区室 K⁺ 与 pH（类囊体调 ΔpH/Δψ、高尔基管分泌腔），液泡 NHX 管库存；动物则以 NKCC/KCC 氯耦联方案管理钾——同题两解。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch3-s4': [
    {
      src: '/images/bio/drawn/mt-ch3-s4-k-homeostasis-compare.svg',
      caption:
        '动物体内 98% 的钾在细胞内（约 140 mmol/L，内外比约 35:1）：急性靠胰岛素等细胞缓冲，慢性靠肾三段式——日滤过约 700 mmol、近端恒定重吸收约 2/3、远端 ENaC-ROMK 按需分泌，醛固酮为总开关。植物无排泄概念：吸收（AKT1+HAK5）、分配（SKOR/AKT2）、气孔日循环、液泡储存（八至九成）与老叶再动员一条龙，缺钾先写老叶叶缘焦枯；KAT1 与 Kv 同源而门控反用——动物带着钾跑，植物守着钾等。',
      credit: DRAWN_CREDIT,
    },
  ],
}
