// ============================================================
// 生理学自绘插图挂载 - 批次 P1（第 1/4/5/7/10 章共 15 张，由中断的
// 44-c1/c2/c3/c4 代理绘制、主控 44-d 补记图注）
// 生成管线：scripts/draw/scenes/ph/ → bun scripts/draw/gen.ts ph
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawPhP1: Record<string, Illustration[]> = {
  'physiology-ch1-s1': [
    {
      src: '/images/bio/drawn/ph-ch1-s1-levels-and-methods.svg',
      caption:
        '生理学的层级与整合观：整体→系统→器官→细胞→分子五级结构中，每一层的性质都由下一层涌现而来，而功能问题必须回到整体回答——还原与综合互为镜像。急性/慢性、在体/离体四类实验各有取舍：急性离体实验可控可重复，慢性在体实验保全调节完整性；「功能问题→假说→实验→定量模型」的科学循环贯穿全书。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch1-s2': [
    {
      src: '/images/bio/drawn/ph-ch1-s2-setpoints-table.svg',
      caption:
        '内环境与稳态的定量画像：细胞外液（血浆约占体重 5%、组织液约 15%）是细胞直接生活的环境，其理化参数被约束在狭窄的设定点容许带内——核心体温 37±0.5 ℃、动脉血 pH 7.35–7.45、空腹血糖 3.9–6.1 mmol/L、血钙 2.25–2.75 mmol/L、血钠 135–145 mmol/L。稳态是消耗能量的动态平衡而非静止，参数持续小幅波动正是反馈系统在工作的证据。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch4-s1': [
    {
      src: '/images/bio/drawn/ph-ch4-s1-synaptic-transmission.svg',
      caption:
        '化学突触的传递链与递质系统：突触前动作电位开启电压门控 Ca²⁺ 通道，Ca²⁺ 内流经 SNARE 复合体触发囊泡量子式胞吐（单个量子释放产生的微终板电位约 0.4–0.6 mV）；递质扩散后激活突触后受体，EPSP/IPSP 在轴突始段进行时间与空间总和。胆碱能、肾上腺素能、多巴胺能、5-羟色胺能、氨基酸能（谷氨酸/GABA/甘氨酸）与神经肽六大递质系统的投射与功能各成体系。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch4-s2': [
    {
      src: '/images/bio/drawn/ph-ch4-s2-somatosensory-pathways.svg',
      caption:
        '感觉系统的一般原则与躯体感觉双通路：感受器把刺激能量换能为感受器电位，强度以放电频率编码；快适应感受器报告变化、慢适应感受器报告持续状态。精细触觉、振动与本体觉经背柱-内侧丘系上行（在延髓交叉），痛温与粗触觉经脊髓丘脑束上行（入髓即交叉）——两条通路的交叉层级不同，是脊髓半切综合征鉴别诊断的解剖基础；皮层体感矮人图的手唇投影远大于躯干。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch4-s3': [
    {
      src: '/images/bio/drawn/ph-ch4-s3-visual-system.svg',
      caption:
        '视觉系统全景：眼光学（折光系统与简化眼、近视用凹透镜/远视用凸透镜矫正）→ 视网膜换能（视杆约 1.2 亿，视紫红质暗视单色高敏感；视锥约 600 万，L/M/S 三色明视）→ 视觉通路（鼻侧纤维在视交叉交叉、双眼信息汇聚外侧膝状体分层投射至 V1 距状沟）。光感受器响应方向与普通神经元相反——光照使 cGMP 门控 Na⁺ 通道关闭、细胞超极化。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch4-s4': [
    {
      src: '/images/bio/drawn/ph-ch4-s4-auditory-vestibular.svg',
      caption:
        '听觉与前庭：鼓膜-听骨链杠杆增压约 22 倍（面积比 17:1 × 杠杆比 1.3）把声压高效传入内耳；基底膜行波高频定位于基部、低频至顶部；毛细胞静纤毛向最长侧偏转时顶端机械门控 K⁺ 通道开放，以内淋巴高电位驱动去极化，触发谷氨酸释放（内毛细胞承担约 95% 传入）。半规管壶腹嵴感知角加速度、耳石器感知直线加速度与重力，前庭眼反射稳定视网膜成像。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch5-s1': [
    {
      src: '/images/bio/drawn/ph-ch5-s1-stretch-reflex.svg',
      caption:
        '脊髓运动控制的元件级回路：运动单位按 I → IIa → IIx 大小原则募集（先耐力后爆发）；肌梭 Ia/II 末梢感受长度与变化率，经单突触弧兴奋同名肌 α 运动神经元完成牵张反射（膝跳反射中枢延搁最短）；γ 运动神经元与 α 共激活维持肌梭敏感度；腱器官 Ib 传入经中间神经元反向抑制 α 神经元构成张力保护；交互抑制使拮抗肌舒张。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch5-s2': [
    {
      src: '/images/bio/drawn/ph-ch5-s2-basal-ganglia-cerebellum.svg',
      caption:
        '基底节与小脑的运动调控：基底节直接通路（纹状体 D1 → GPi 抑制 → 丘脑去抑制 → 皮层兴奋，Go）与间接通路（D2 → GPe → STN → GPi 增强 → 丘脑抑制，NoGo）相互拮抗；黑质多巴胺同时兴奋 D1、抑制 D2 双向放大 Go——帕金森病黑质变性致运动减少与静止性震颤，亨廷顿病间接通路神经元退变致舞蹈样多动。小脑按前庭/脊髓/大脑三区分别管平衡、肌张力与运动计划，以攀缘纤维误差信号校正运动。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch7-s1': [
    {
      src: '/images/bio/drawn/ph-ch7-s1-cardiac-ecg.svg',
      caption:
        '心脏电活动三层结构：传导系统的频率梯度决定「频率最高者统治」——窦房结 60–100 次/分为优势起搏、房室结延搁约 0.1 s 保证心房先收缩、浦肯野纤维 15–40 次/分为最后防线。心室肌动作电位 0 期快 Na⁺ 内流、2 期 L 型 Ca²⁺ 平台期造就长达 250 ms 的有效不应期（防止强直收缩）；窦房结 4 期 IK 衰减＋If 内流的自动去极化受交感 β₁（正变时）与迷走 M₂（负变时）双向调制。体表心电图 P-QRS-T 各波与各间期对应心房心室的去极化与复极化时序。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch7-s2': [
    {
      src: '/images/bio/drawn/ph-ch7-s2-pv-loop-starling.svg',
      caption:
        '心动周期的同步描记与心泵功能指标：Wiggers 图以心率 75 次/分（周期 0.8 s）同步呈现主动脉压、心室压、心房压与心室容积四条曲线，划分七时相并标注第一/第二心音位置；压力-容积环给出 EDV 125 ml、ESV 55 ml、SV 70 ml、EF 55%–70% 与 CO=HR×SV≈5 L/min 的直观读数。Frank-Starling 定律：前负荷增大→肌节初长度向 2.0–2.2 μm 最适重叠靠拢→收缩力增强，是异长自身调节的物质基础。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch7-s3': [
    {
      src: '/images/bio/drawn/ph-ch7-s3-hemodynamics.svg',
      caption:
        '血管系统的血流动力学：Poiseuille 定律 Q=ΔP·πr⁴/(8ηL) 中半径的四次方统治阻力——口径减半阻力增至 16 倍，故外周阻力主要落于小动脉与微动脉的平滑肌口径；MAP=DBP+1/3 脉压（120/80 mmHg → 约 93 mmHg）＝CO×SVR 是血压的两要素框架。血管由主动脉到毛细再到静脉的串联分段中，压力逐级降落、流速与总横截面积互为倒数（毛细最慢最利交换）；层流失稳为湍流的 Reynolds 判据解释贫血杂音。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch7-s4': [
    {
      src: '/images/bio/drawn/ph-ch7-s4-starling-forces.svg',
      caption:
        '微循环与组织液交换：微循环单元中毛细前括约肌受局部代谢产物调控轮番开闭；毛细血管壁两侧的 Starling 力决定液体去向——有效滤过压＝(Pc＋πi)−(Pi＋πp)，动脉端 Pc 30 mmHg＞血浆胶渗压 25 mmHg 净滤过，静脉端 Pc 降至 12 mmHg 净重吸收，淋巴系统每日回收 2–4 L 余液与蛋白。毛细压升高、血浆胶渗压下降、通透性增高与淋巴阻塞四大机制对应心源性/营养不良性/炎性/淋巴性水肿。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch10-s1': [
    {
      src: '/images/bio/drawn/ph-ch10-s1-gut-neurohormones.svg',
      caption:
        '消化道的动力与调控总论：管壁四层结构中的壁内神经丛（肌间丛驱动蠕动与分节运动、黏膜下丛调节分泌与血流）由约 1 亿神经元构成「第二大脑」，离断外来神经仍能完成局部反射；Cajal 间质细胞起搏电慢波限定快波频率上限（胃 3 次/分、十二指肠 12 次/分、结肠 6–8 次/分）；胃泌素、CCK、促胰液素、GIP、GLP-1、胃动素与生长抑素等胃肠激素构成「第二信使级」的体液调控网。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch10-s2': [
    {
      src: '/images/bio/drawn/ph-ch10-s2-secretion-absorption.svg',
      caption:
        '消化腺分泌与小肠吸收：壁细胞 M₃/CCK_B/H₂ 三种受体协同驱动 H⁺/K⁺-ATPase 质子泵泌酸（H₂ 受体的组胺旁分泌是最大放大器），黏液-碳酸氢盐屏障护卫胃黏膜；促胰液素动员碳酸氢盐、CCK 动员酶原分泌并收缩胆囊；胆盐经肠肝循环约 94% 回收。小肠以皱襞×绒毛×微绒毛三级放大把吸收面扩约 600 倍，铁在十二指肠、维生素 B₁₂-内因子复合物在回肠末端各有专属吸收位点。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch10-s3': [
    {
      src: '/images/bio/drawn/ph-ch10-s3-energy-metabolism.svg',
      caption:
        '能量代谢的测定与量尺：间接测热以 VO₂/VCO₂ 气体交换换算产热（Weir 公式），呼吸商指明燃料配比——糖 1.00、混合膳食约 0.85、蛋白 0.80、脂肪 0.70；基础代谢率在清醒静卧、餐后 12–14 h、舒适温度的严格条件下测定，甲状腺激素是其最强的生理调节者（甲亢/甲减可偏离 ±40%–60%）；食物特殊动力效应以蛋白最强（约 30%），混合膳食约 10%；能量平衡方程「摄入＝产出＋贮存」是体重管理的物理底线。',
      credit: DRAWN_CREDIT,
    },
  ],
}
