// ============================================================
// 生物化学 —— 学科聚合
// ============================================================
import type { Subject } from '@/lib/types'
import { bcCh1 } from './bc/ch1'
import { bcCh2 } from './bc/ch2'
import { bcCh3 } from './bc/ch3'
import { bcCh4 } from './bc/ch4'
import { bcCh5 } from './bc/ch5'
import { bcCh6 } from './bc/ch6'
import { bcCh7 } from './bc/ch7'
import { bcCh8 } from './bc/ch8'
import { bcCh9 } from './bc/ch9'
import { bcCh10 } from './bc/ch10'
import { bcCh11 } from './bc/ch11'
import { bcCh12 } from './bc/ch12'

export const biochemistry: Subject = {
  id: 'biochemistry',
  name: '生物化学',
  englishName: 'Biochemistry',
  description:
    '从糖类、脂质、氨基酸、蛋白质与酶，到核酸化学、生物氧化与糖脂蛋白质三大代谢的整合调节，以能量与信息为双主线系统讲授生命的化学。',
  textbook: '王镜岩《生物化学》（第4版）· Lehninger《Principles of Biochemistry》',
  color: 'amber',
  icon: 'FlaskConical',
  chapters: [
    bcCh1, bcCh2, bcCh3, bcCh4, bcCh5, bcCh6,
    bcCh7, bcCh8, bcCh9, bcCh10, bcCh11, bcCh12,
  ],
}
