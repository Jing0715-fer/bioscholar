// ============================================================
// 膜蛋白与物质转运自绘插图挂载 - 批次 P8（第 8 章次级主动转运，4 张）
// 场景源码：scripts/draw/scenes/mt/ch8-s1~s4.ts（46-c8 代理绘制，
// 主控 46-d 补图注挂载）
// 生成管线：scripts/draw/scenes/mt/ → bun scripts/draw/gen.ts mt
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawMtP8: Record<string, Illustration[]> = {
  'membrane-transport-ch8-s1': [
    {
      src: '/images/bio/drawn/mt-ch8-s1-secondary-principles.svg',
      caption:
        '次级主动转运原理：一级泵建梯度、二级泵花梯度——动物铸 Na⁺ 币（胞外 145 对胞内 10–15 mmol/L），植物铸 PMF（约 −150~−200 mV）；同向/反向/单向三分类，化学计量决定生电性（EAAT 以 3Na⁺:1H⁺:1Glu⁻ 外加反向 1K⁺ 的奢侈单向阀）；MFS、CPA、APC、NCX/CBX、NSS 五大超家族共享交替通路，Mitchell 化学渗透学说（1961 年提出、1978 年诺奖）统一动植两界的能量逻辑。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch8-s2': [
    {
      src: '/images/bio/drawn/mt-ch8-s2-animal-slc.svg',
      caption:
        '动物 SLC 超家族以 52 个家族约 400 基因（不足 2% 的编码基因）承包跨膜运输：肾糖双闸 SGLT2 约 90%＋SGLT1 约 10% 收回每日约 180 g 滤过糖，恩格列净借此收获心肾获益；呋塞米卡 NKCC2（1Na⁺:1K⁺:2Cl⁻）、噻嗪卡 NCC；NCX 3Na⁺:1Ca²⁺ 司心肌舒张期 20%–30% 钙外排、缺血时反向成灾；带 3 运碳、SSRI 靶 SERT；Bartter、Gitelman、Hartnup 与胱氨酸尿钉牢「转运体即生理功能」。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch8-s3': [
    {
      src: '/images/bio/drawn/mt-ch8-s3-plant-h-symporters.svg',
      caption:
        '植物的 H⁺ 经济：拟南芥次级转运基因逾 600 个（NPF 53 个成员为最大之一），按根毛区、花粉管、韧皮部分区布防；NRT1.1 双亲和兼硝酸盐感受器——Thr101 被 CIPK23 磷酸化切换高亲和并触发 NLP7 转录级联，「转运转受体」范例；AMT1;1 以 Thr460 自抑制防氨毒、PHT1 司菌根界面磷吸收、BOR1 管硼窗口、水稻 Lsi1/Lsi2 错流收硅、AtCLCa 向液泡装填硝酸盐。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch8-s4': [
    {
      src: '/images/bio/drawn/mt-ch8-s4-coupling-ion-compare.svg',
      caption:
        '驱动离子对照——同一需求、两种支付：动物一栏几乎全写 Na⁺（SGLT·NKCC·NHE·NCX·SLC6），植物一栏几乎全写 H⁺（SUC·NRT·AMT·PHT·SULTR·LHT）；钙外排殊途同归（NCX 3Na⁺:1Ca²⁺ 对 CAX 多 H⁺:1Ca²⁺，都借单价梯度抬二价）；动物血浆 Na⁺ 约 145 mmol/L 稳定富余、植物自产 H⁺（缺铁 Strategy I 酸化根际）；SOS1 与 NHE3 哲学互逆——驱动离子的选择是环境化学的镜像：海水的钠、土壤的酸。',
      credit: DRAWN_CREDIT,
    },
  ],
}
