// ============================================================
// 膜蛋白与物质转运自绘插图挂载 - 批次 P7（第 7 章 V 型与 F 型 ATPase，4 张）
// 场景源码：scripts/draw/scenes/mt/ch7-s1~s4.ts（46-c7 代理绘制 ch7-s1~s3、
// 主控 46-d 补 ch7-s4 与登记图注）
// 生成管线：scripts/draw/scenes/mt/ → bun scripts/draw/gen.ts mt
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawMtP7: Record<string, Illustration[]> = {
  'membrane-transport-ch7-s1': [
    {
      src: '/images/bio/drawn/mt-ch7-s1-v-atpase-structure.svg',
      caption:
        'V-ATPase 的双旋转马达总装：V1 胞质侧水解马达（A₃B₃ 交替催化三位点＋E₃G₃/C/H 定子网络）与 V0 膜内质子通路（a 亚基两条互不贯通的半通道「质子井」装货—卸货、c 环携质子过膜）；酵母 c 环 10 拷贝给出约 3.3 H⁺/ATP 的耦合比；末端抑制＋动力学不可逆双保险钉死水解方向，葡萄糖缺乏数分钟即触发 V1 可逆解离节能、由 RAVE 复合体重装。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch7-s2': [
    {
      src: '/images/bio/drawn/mt-ch7-s2-animal-v-atpase.svg',
      caption:
        '动物 V-ATPase 的四大岗位：溶酶体 pH 4.5–5.0 由 V-ATPase 与 ClC-7（约 2Cl⁻:1H⁺）电荷分流协同达成；内体阶梯酸化（早期约 pH 6.0→晚期约 5.0）是货物分选条码、M6PR 经 retromer 逃逸回收；破骨细胞把泵搬上褶皱缘质膜、溶蚀腔酸化至约 pH 4.5（TCIRG1/CLCN7 突变致石骨症）；肾闰细胞顶端泌 H⁺（ATP6V1B1/ATP6V0A4 突变致远端肾小管酸中毒）；肿瘤酸化微环境与 mTORC1 看门人为两端延伸。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch7-s3': [
    {
      src: '/images/bio/drawn/mt-ch7-s3-plant-vacuolar-pumps.svg',
      caption:
        '植物液泡的双引擎：与动物同源的 V-ATPase（VHA 基因家族全套亚基）之外，独有水解焦磷酸的 V-PPase（AVP1，约 77 kDa 同源二聚体）——把合成反应副产物 PPi（ΔG 约 −27 kJ/mol）回收为跨膜 H⁺ 梯度的「廉价能源」，动物基因组从无膜上 V-PPase；液泡 pH 约 5.5 驱动花色素苷呈色（牵牛花蓝变）与离子库装填（AtCLCa 反向装填硝酸盐、夜间氮素回流），盐胁迫下酸化增强为 NHX1 供能，AVP1 过表达抗旱耐盐。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch7-s4': [
    {
      src: '/images/bio/drawn/mt-ch7-s4-rotary-motors-compare.svg',
      caption:
        '旋转马达三部曲：F 型 ATP 合酶以 α₃β₃ 环＋γ 中央轴＋F_o c 环执行 Boyer 结合变化机制（1997 年诺奖）；c 环拷贝数即质子税率——哺乳动物 8c 约 2.7、酵母 10c 约 3.3、叶绿体 14c 约 4.7 H⁺/ATP，高税低效却匹配光合质子库；F 与 V 同源而反向使用：一台顺 PMF 合成 ATP、一台水解 ATP 建梯度（实验上皆可短暂反转，方向靠末端抑制钉死）；P 型是精量的针筒、V 型是酸化的水泵、F 型是发电的涡轮——三部马达在动植物基因组中全部在场，各自扩编不同。',
      credit: DRAWN_CREDIT,
    },
  ],
}
