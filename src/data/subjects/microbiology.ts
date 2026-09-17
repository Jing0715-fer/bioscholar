// ============================================================
// 微生物学 —— 学科聚合
// ============================================================
import type { Subject } from '@/lib/types'
import { microCh1 } from './micro/ch1'
import { microCh2 } from './micro/ch2'
import { microCh3 } from './micro/ch3'
import { microCh4 } from './micro/ch4'
import { microCh5 } from './micro/ch5'
import { microCh6 } from './micro/ch6'
import { microCh7 } from './micro/ch7'
import { microCh8 } from './micro/ch8'
import { microCh9 } from './micro/ch9'
import { microCh10 } from './micro/ch10'
import { microCh11 } from './micro/ch11'
import { microCh12 } from './micro/ch12'

export const microbiology: Subject = {
  id: 'microbiology',
  name: '微生物学',
  englishName: 'Microbiology',
  description:
    '从细菌、真菌到病毒与亚病毒因子，系统讲授微生物的形态结构、营养代谢、生长控制、遗传变异、生态互作与感染免疫，直至 CRISPR 与合成生物学的现代应用。',
  textbook: '周德庆《微生物学教程》（第4版）· 沈萍《微生物学》（第8版）· Madigan《Brock Biology of Microorganisms》',
  color: 'emerald',
  icon: 'Biohazard',
  chapters: [
    microCh1, microCh2, microCh3, microCh4, microCh5, microCh6,
    microCh7, microCh8, microCh9, microCh10, microCh11, microCh12,
  ],
}
