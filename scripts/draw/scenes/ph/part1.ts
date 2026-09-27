// 生理学自绘插图场景登记 - 批次 P1（ch1–ch3 共 12 张；44 系列）
import ch1s1 from './ch1-s1'
import ch1s2 from './ch1-s2'
import ch1s3 from './ch1-s3'
import ch1s4 from './ch1-s4'
import ch2s1 from './ch2-s1'
import ch2s2 from './ch2-s2'
import ch2s3 from './ch2-s3'
import ch2s4 from './ch2-s4'
import ch3s1 from './ch3-s1'
import ch3s2 from './ch3-s2'
import ch3s3 from './ch3-s3'
import ch3s4 from './ch3-s4'

const scenes: Record<string, string> = {
  'ph-ch1-s1-levels-and-methods': ch1s1,
  'ph-ch1-s2-setpoints-table': ch1s2,
  'ph-ch1-s3-feedback-modes': ch1s3,
  'ph-ch1-s4-three-regulations': ch1s4,
  'ph-ch2-s1-membrane-passive': ch2s1,
  'ph-ch2-s2-carriers-pumps': ch2s2,
  'ph-ch2-s3-resting-action-potential': ch2s3,
  'ph-ch2-s4-saltatory-conduction': ch2s4,
  'ph-ch3-s1-gpcr-pathways': ch3s1,
  'ph-ch3-s2-kinase-receptors': ch3s2,
  'ph-ch3-s3-skeletal-ec-coupling': ch3s3,
  'ph-ch3-s4-muscle-comparison': ch3s4,
}
export default scenes
