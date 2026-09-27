// ============================================================
// 生理学 —— 第十三大学科
// 体系参照 Guyton & Hall《Textbook of Medical Physiology》第14版、
// Boron & Boulpaep《Medical Physiology》第3版、Berne & Levy《Physiology》
// 第7版与王庭槐《生理学》（人卫第9版）
// 12 章 48 节，各章由内容代理并行编写（见 src/data/subjects/ph/）
// ============================================================
import type { Subject } from '@/lib/types'
import { phCh1 } from './ph/ch1'
import { phCh2 } from './ph/ch2'
import { phCh3 } from './ph/ch3'
import { phCh4 } from './ph/ch4'
import { phCh5 } from './ph/ch5'
import { phCh6 } from './ph/ch6'
import { phCh7 } from './ph/ch7'
import { phCh8 } from './ph/ch8'
import { phCh9 } from './ph/ch9'
import { phCh10 } from './ph/ch10'
import { phCh11 } from './ph/ch11'
import { phCh12 } from './ph/ch12'

export const physiology: Subject = {
  id: 'physiology',
  name: '生理学',
  englishName: 'Physiology',
  description:
    '从稳态与反馈控制的绪论出发，经细胞膜转运、生物电与信号转导，进入神经系统的感觉与运动整合、血液与止血、心脏与血管的双章深潜、呼吸与消化吸收、能量代谢与体温，直至肾脏的滤过重吸收与酸碱平衡、内分泌轴系与生殖——以器官系统为主线，系统讲授人体功能活动的原理及其调节机制。',
  textbook:
    'Guyton & Hall《Textbook of Medical Physiology》· Boron & Boulpaep《Medical Physiology》· Berne & Levy《Physiology》· 王庭槐《生理学》（人卫第9版）',
  color: 'pink',
  icon: 'HeartPulse',
  chapters: [
    phCh1,
    phCh2,
    phCh3,
    phCh4,
    phCh5,
    phCh6,
    phCh7,
    phCh8,
    phCh9,
    phCh10,
    phCh11,
    phCh12,
  ],
}
