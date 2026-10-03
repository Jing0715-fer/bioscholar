// ============================================================
// 膜蛋白与物质转运自绘插图挂载 - 批次 P13（第 13 章细胞器膜上的转运，4 张）
// 场景源码：scripts/draw/scenes/mt/ch13-s1~s4.ts（47-c2 主控亲绘）
// 生成管线：scripts/draw/scenes/mt/ → bun scripts/draw/gen.ts mt
// 图注数值与 src/data/subjects/mt/ch13.ts 正文严格对齐
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawMtP13: Record<string, Illustration[]> = {
  'membrane-transport-ch13-s1': [
    {
      src: '/images/bio/drawn/mt-ch13-s1-mitochondria-membranes.svg',
      caption:
        '线粒体双膜体系：外膜 VDAC 十九链 β 桶放行约 5 kDa 以下代谢物并兼作凋亡平台；TOM-TIM 以 ΔΨ 与 mtHsp70 棘轮输入解折叠蛋白（外膜步骤耗 ATP、内膜步骤耗 ΔΨ）；SLC25 家族人类 53、拟南芥约 58 成员——ANT 以 ADP³⁻ 换 ATP⁴⁻ 靠 150–180 mV 膜电位发货（苍术苷与黄曲霉酰肽各锁半程构象作证）；动物 UCP1 棕色脂肪产热对植物 UCP 产热花序、植物独有 AOX 不泵质子旁路、MCU/MICU 把钙尖峰接进产能节律。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch13-s2': [
    {
      src: '/images/bio/drawn/mt-ch13-s2-chloroplast-envelope.svg',
      caption:
        '叶绿体被膜（约 15 亿年前蓝藻内共生遗产）：外膜 OEP16/21/24/37 各有口味；Toc75 与 VDAC 同为 β 桶、Toc34 以 GTP 验货、Tic 内膜接力；TPT 以三糖磷酸:Pᵢ 严格 1:1 反向交换（语法平行于 ANT）——白天出口蔗糖前体、夜里 MEX1 换班出口麦芽糖（mex1 突变体麦芽糖堆积中毒）；Pi 限制光合即「出口不通、工厂停工」；被膜兼为类囊体半乳糖脂车间；质体家族同一套被膜四种排班，八行镜像对照表收拢两套内共生界面的同与异。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch13-s3': [
    {
      src: '/images/bio/drawn/mt-ch13-s3-thylakoid-ion-circuits.svg',
      caption:
        '类囊体膜光驱动离子回路：光系统把 H⁺ 泵入腔（ΔpH 2–3 单位、pmf 约 200 mV），c₁₄ 合酶按约 4.7 H⁺/ATP 收税（线粒体 c₈ 约 2.7）；KEA3 可调质子泄漏阀在 ΔpH/ΔΨ 间再分配、VCCN1 电压依赖 Cl⁻ 对冲正电荷、TPK3 敏感 K⁺ 外流——电中性回路把膜电位钳在低位（ΔpH 占 pmf 九成上下）；ΔpH 身兼三职（ATP、NPQ 光保护、Tat 折叠蛋白输入）；线性流每 O₂ 约 12 H⁺ 得 2.5 ATP 配 2 NADPH、循环电子流补齐 3:2 预算；1963 年酸跳实验以人工 ΔpH 在黑暗中点亮 ATP 合酶（Mitchell 1978 诺奖）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch13-s4': [
    {
      src: '/images/bio/drawn/mt-ch13-s4-organelle-compendium.svg',
      caption:
        '其余区室闸门与全书收口：三种蛋白输入范式并立——ER 共翻译（Sec61＋核糖体直连）、线粒体解折叠（ΔΨ＋Hsp70 棘轮）、过氧化物酶体折叠输入（Pex5 受体循环，Pex 突变致 Zellweger 谱病）；ABCD1 突变致 X-ALD（VLCFA 堆积，《洛伦佐的油》）；动物 ER 的 IP₃R/RyR 钙释放为植物所缺；NPC 以约 30 种核孔蛋白拼逾 100 MDa 轮盘、FG 无序筛网为通道、importin/exportin 为载体、Ran-GTP 梯度为泵——「通道-载体-泵」三分法的巨型复现；膜接触站点「不穿膜的转运」；八行细胞器总表为全书收口。',
      credit: DRAWN_CREDIT,
    },
  ],
}
