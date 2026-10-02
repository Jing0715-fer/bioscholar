// ============================================================
// 膜蛋白与物质转运自绘插图挂载 - 批次 P5（第 5 章载体，4 张）
// 场景源码：scripts/draw/scenes/mt/ch5-s1~s4.ts（46-c5 代理绘制，
// s1/s2 为 46-c5 前批完成，本批补 s3/s4 与登记挂载）
// 生成管线：scripts/draw/scenes/mt/ → bun -e 渲染落盘
//   public/images/bio/drawn/mt-ch5-s{1..4}-*.svg
// 图注数值与 src/data/subjects/mt/ch5.ts 正文严格对齐
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawMtP5: Record<string, Illustration[]> = {
  'membrane-transport-ch5-s1': [
    {
      src: '/images/bio/drawn/mt-ch5-s1-carrier-principles.svg',
      caption:
        '载体经交替通路搬运底物——结合位点永不同时暴露于膜两侧：MFS 摇摆开关、LeuT 折叠摇摆束与谷氨酸转运体滑梯式三种构象几何殊途同归，封闭态是被结构生物学捕获的中间帧；米氏饱和动力学（Km 2 mM 的载体，底物 5→20 mM 速率仅 0.71→0.91 Vmax）、竞争抑制（根皮素）与 Q₁₀>3 的温度指纹构成区别于通道与简单扩散的酶学证据链——周转 10²–10⁴ 次/秒慢于通道约五个数量级；uniport/symport/antiport 三分法为第 8 章次级主动转运预告。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch5-s2': [
    {
      src: '/images/bio/drawn/mt-ch5-s2-animal-glut.svg',
      caption:
        'SLC2A 家族 14 个成员均为 MFS 12 TMS 摇摆开关：GLUT1（Km 1–2 mM）把守血脑屏障，人脑日耗约 120 g 葡萄糖经内皮 GLUT1-神经元 GLUT3 三级接力入脑；GLUT2（Km 15–20 mM）把速率放在线性段作肝与胰岛 β 细胞的葡萄糖感受器，突变致 Fanconi-Bickel 综合征；GLUT3 亲和最高（1.4 mM）司神经元供糖，GLUT5 专运果糖；GLUT4 静息时约 90% 封存于 GSV，经胰岛素-AKT-AS160-Rab 级联转位上膜数分钟扩容，2 型糖尿病表现为转位抵抗。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch5-s3': [
    {
      src: '/images/bio/drawn/mt-ch5-s3-plant-sugar-transporters.svg',
      caption:
        '拟南芥糖载体三大体系：STP 14 员以己糖/H⁺ 同向转运自质外体吸收（根与花粉），SUC/SUT 9 员以蔗糖/H⁺ 同向转运装载韧皮部（SUC2 伴胞、1 H⁺∶1 蔗糖），SWEET 17 员顺梯度双向外排（SWEET11/12/15 司筛分子装载与种子灌浆）；SWEET 7 TMS 由两个三螺旋半重复串联，演化自细菌 SemiSWEET 3 TMS 同源二聚体的加倍融合；黄单胞菌 TAL 效应子结合 OsSWEET14 启动子使其过表达、外排糖饲敌致水稻白叶枯——「易感基因」与启动子编辑抗病；叶绿体 TPT/GPT 与液泡 TMT/VGT 司亚细胞糖账。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch5-s4': [
    {
      src: '/images/bio/drawn/mt-ch5-s4-sugar-flux-compare.svg',
      caption:
        '动物以血糖稳态集中供糖：空腹 3.9–6.1 mmol/L、餐后回落 7.8 以下，5 L 血池常备 4–5 g 而日周转约 250 g——肠顶膜 SGLT1（2 Na⁺∶1 葡萄糖）加基侧 GLUT2 吸收、GLUT4 餐后缓冲；植物无血糖而以源-库分配改道，蔗糖经共质体（胞间连丝扩散）与质外体（SWEET 外泌＋SUC2 泵回）双途径装载；Münch 压力流（1930）以渗透压差驱动筛管汁单向流——流速 0.5–1.5 m/h、蔗糖 0.3–1 M；GLUT（MFS 12 TMS）与 SWEET（7 TMS）非同源而趋同，SGLT 用 Na⁺ 梯度、SUC 用 H⁺ 梯度。',
      credit: DRAWN_CREDIT,
    },
  ],
}
