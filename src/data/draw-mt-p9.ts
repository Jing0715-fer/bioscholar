// ============================================================
// 膜蛋白与物质转运自绘插图挂载 - 批次 P9（第 9 章 ABC 转运体，4 张）
// 场景源码：scripts/draw/scenes/mt/ch9-s1~s4.ts（46-c9 代理绘制，
// 主控 46-d 补图注挂载）
// 生成管线：scripts/draw/scenes/mt/ → bun scripts/draw/gen.ts mt
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawMtP9: Record<string, Illustration[]> = {
  'membrane-transport-ch9-s1': [
    {
      src: '/images/bio/drawn/mt-ch9-s1-abc-architecture.svg',
      caption:
        'ATP 结合盒家族以 2×TMD（各约 6 TMS）＋2×NBD 拼装：Walker A/B、Q 环、H 环与家族独有的 LSGGQ 签名基序；NBD 二聚体夹住两分子 ATP 的「三明治循环」（结合→二聚化→水解→解离）驱动 TMD 交替通路；全长与半分子两种组装并存，细菌输入体（MalFGK₂+结合蛋白）与动植物输出体分流——人类 48 基因七亚族对拟南芥约 130 个九亚族，底物从脂质、胆汁酸到药物与重金属螯合物。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch9-s2': [
    {
      src: '/images/bio/drawn/mt-ch9-s2-animal-abc.svg',
      caption:
        '动物的 ABC 转运体：P-gp（ABCB1）1976 年发现于中国仓鼠秋水仙素抗性细胞（Juliano & Ling），外排地高辛、长春碱等疏水阳离子，守血脑屏障、肠、肾、胎盘四道关口——多药耐药的分子主角；CFTR 是唯一演化为离子通道的 ABC（R 域＋ATP 门控、Cl⁻/HCO₃⁻ 电导，ΔF508 折叠缺陷经 ERAD 降解）；ABCA1 装配 HDL（Tangier 病）、ABCG5/G8 限制植物固醇吸收、MRP2 分泌胆汁、TAP 递送抗原肽、ABCD1 输入极长链脂肪酸（X-ALD）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch9-s3': [
    {
      src: '/images/bio/drawn/mt-ch9-s3-plant-abc.svg',
      caption:
        '拟南芥约 130 个 ABC 基因为植物最大基因家族之一：ABCB1/19 外排生长素与 PIN 协同（NPA 直接靶向 ABCB）、ABCG11/32 铺设角质层蜡质与叶面防水、ABCC1/2 把谷胱甘肽结合物收押液泡；ABCG37 外排 IBA 塑造侧根发生、ABCG29 输出木质素单体；γ 全基因组三倍化（约 1.2–1.5 亿年前）造就家族扩张，安全剂活化 ABCC 成为除草剂选择性的农艺利器。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch9-s4': [
    {
      src: '/images/bio/drawn/mt-ch9-s4-abc-function-compare.svg',
      caption:
        '动植物 ABC 功能对照：共同祖型是脂质与异生物质的外排屏障（细菌 MsbA 已练成翻转酶看家本领）；动物把屏障医学化——血脑 P-gp、胎盘与肠肝关口，植物把屏障生态化——角质层 ABCG 与根际外排；化疗多药耐药与除草剂抗性是同一军备竞赛逻辑的医学/农业版本；区室化分工上植物液泡 ABCC 隔离对动物肝肾排泄；CFTR 转行氯通道、ABCE1 丢失 TMD 再就业核糖体循环——退役 ABC 的两条出路。',
      credit: DRAWN_CREDIT,
    },
  ],
}
