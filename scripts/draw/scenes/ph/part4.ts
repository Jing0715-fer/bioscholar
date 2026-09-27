// 生理学自绘插图场景登记 - 批次 P4（ch10–ch12 共 12 张；44 系列）
import ch10s1 from './ch10-s1'
import ch10s2 from './ch10-s2'
import ch10s3 from './ch10-s3'
import ch10s4 from './ch10-s4'
import ch11s1 from './ch11-s1'
import ch11s2 from './ch11-s2'
import ch11s3 from './ch11-s3'
import ch11s4 from './ch11-s4'
import ch12s1 from './ch12-s1'
import ch12s2 from './ch12-s2'
import ch12s3 from './ch12-s3'
import ch12s4 from './ch12-s4'

const scenes: Record<string, string> = {
  'ph-ch10-s1-gut-neurohormones': ch10s1,
  'ph-ch10-s2-secretion-absorption': ch10s2,
  'ph-ch10-s3-energy-metabolism': ch10s3,
  'ph-ch10-s4-thermoregulation': ch10s4,
  'ph-ch11-s1-gfr-filtration': ch11s1,
  'ph-ch11-s2-tubular-map': ch11s2,
  'ph-ch11-s3-countercurrent-adh': ch11s3,
  'ph-ch11-s4-acid-base-k': ch11s4,
  'ph-ch12-s1-pituitary-axes': ch12s1,
  'ph-ch12-s2-thyroid-adrenal': ch12s2,
  'ph-ch12-s3-calcium-glucose': ch12s3,
  'ph-ch12-s4-menstrual-cycle': ch12s4,
}
export default scenes
