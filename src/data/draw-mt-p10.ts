// ============================================================
// 膜蛋白与物质转运自绘插图挂载 - 批次 P10（第 10 章钙与金属转运，4 张）
// 场景源码：scripts/draw/scenes/mt/ch10-s1~s4.ts（46-c10 代理绘制 ch10-s1~s3、
// 主控 46-d 补 ch10-s4 与登记图注）
// 生成管线：scripts/draw/scenes/mt/ → bun scripts/draw/gen.ts mt
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawMtP10: Record<string, Illustration[]> = {
  'membrane-transport-ch10-s1': [
    {
      src: '/images/bio/drawn/mt-ch10-s1-calcium-transport.svg',
      caption:
        '钙转运的动植物装备对照：胞质静息约 100 nM、刺激峰 1–10 μM——动物以 PMCA（CaM 调节）、SERCA（2Ca²⁺/ATP·受磷蛋白）、NCX（3Na⁺:1Ca²⁺）、IP₃R/RyR 与 CRAC（Orai1-STIM1 库容操控）守内质网/肌浆网钙库；植物以 CAX 家族 11 成员作液泡钙刹车、GLR/CNGC 司内流、TPC1 司钙释放、ZAR1 抗病小体组装为钙通道守免疫，液泡钙库达 1–10 mmol/L；解码器分野——动物 CaM-CaMK 对植物 CBL-CIPK 网络与 CDPK。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch10-s2': [
    {
      src: '/images/bio/drawn/mt-ch10-s2-iron-strategies.svg',
      caption:
        '铁转运的殊途：pH 7 游离 Fe³⁺ 仅约 10⁻¹⁷ mol/L，必需却几乎不溶——动物以 DMT1→Tf-TfR1 内吞→ferroportin 唯一外排→hepcidin 总开关应对（HFE 血色病与慢性病贫血互为镜像）；双子叶策略 I 走 H⁺-ATPase 酸化根际＋FRO2 还原＋IRT1 吸收（FIT 转录网络），禾草策略 II 走 TOM1 外排麦根酸类螯合剂＋YS1/YSL 整分子回收，水稻兼用两策；约 15 亿人缺铁性贫血与石灰性土壤失绿症是同一困境的医学与农学两张面孔。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch10-s3': [
    {
      src: '/images/bio/drawn/mt-ch10-s3-micronutrients.svg',
      caption:
        '微量元素的转运装备：动物锌由 ZIP/SLC39A（14 成员）输入、ZnT/SLC30A（10 成员）输出，金属硫蛋白把游离锌缓冲在皮摩尔级，ZIP4 肠缺陷致肢端皮炎性肠病；铜走 CTR1 输入＋伴侣蛋白押运＋ATP7A/B 输出——Menkes 缺铜与 Wilson 铜过载互为镜像；植物以 ZIP 约 15 成员吸收、HMA2/4 木质部装载（超富集植物高表达）、MTP1 液泡隔离，COPT 家族与 HMA5/6/8 完成叶绿体铜递送；ZIP 家族动植物共有——分化之前已存在，IRT1 是家族内「转岗」的产物。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch10-s4': [
    {
      src: '/images/bio/drawn/mt-ch10-s4-detox-sequestration.svg',
      caption:
        '区室化与解毒的两条路线：植物把液泡用作分子保险库——CAX、MTP、NHX 装填裸离子，PCS 合成酶以 (γ-Glu-Cys)ₙ-Gly 络合镉砷后由 ABCC1/2 整箱收押；动物以金属硫蛋白（61 aa、20 个半胱氨酸、每肽 7 金属）笼络镉锌铜——Cd-MT 经肾小管降解再释放的「特洛伊木马」循环即痛痛病，铁蛋白每壳 4500 铁矿化储铁；砷从两条暗门攻入（砷酸盐冒充磷酸盐经 PHT、亚砷酸借形甘油经 AQP7/9 与植物 NIP）；超富集植物与 HarvestPlus 生物强化把这套装备变成生态武器——植物不能排泄只能区室化，动物肝肾肠三路外排。',
      credit: DRAWN_CREDIT,
    },
  ],
}
