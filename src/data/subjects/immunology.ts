// ============================================================
// 免疫学 —— 第六大学科
// 体系参照曹雪涛《医学免疫学》（第4版）、周光炎《免疫学原理》、Janeway《Immunobiology》
// 12 章 48 节，各章由内容代理并行编写（见 src/data/subjects/immuno/）
// ============================================================
import type { Subject } from '@/lib/types'
import { immunoCh1 } from './immuno/ch1'
import { immunoCh2 } from './immuno/ch2'
import { immunoCh3 } from './immuno/ch3'
import { immunoCh4 } from './immuno/ch4'
import { immunoCh5 } from './immuno/ch5'
import { immunoCh6 } from './immuno/ch6'
import { immunoCh7 } from './immuno/ch7'
import { immunoCh8 } from './immuno/ch8'
import { immunoCh9 } from './immuno/ch9'
import { immunoCh10 } from './immuno/ch10'
import { immunoCh11 } from './immuno/ch11'
import { immunoCh12 } from './immuno/ch12'

export const immunology: Subject = {
  id: 'immunology',
  name: '免疫学',
  englishName: 'Immunology',
  description:
    '从免疫器官与免疫细胞，到抗体、补体、MHC 与抗原提呈，再到 T/B 淋巴细胞的应答、免疫耐受与调节，直至超敏反应、疫苗与 CAR-T 免疫治疗，系统讲授免疫系统的识别、应答与调控全景。',
  textbook:
    '曹雪涛《医学免疫学》（第4版）· 周光炎《免疫学原理》· Janeway《Immunobiology》',
  color: 'fuchsia',
  icon: 'Shield',
  chapters: [
    immunoCh1, immunoCh2, immunoCh3, immunoCh4, immunoCh5, immunoCh6,
    immunoCh7, immunoCh8, immunoCh9, immunoCh10, immunoCh11, immunoCh12,
  ],
}
