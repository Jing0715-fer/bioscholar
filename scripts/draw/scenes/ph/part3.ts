// 生理学自绘插图场景登记 - 批次 P3（ch7–ch9 共 12 张；44 系列）
import ch7s1 from './ch7-s1'
import ch7s2 from './ch7-s2'
import ch7s3 from './ch7-s3'
import ch7s4 from './ch7-s4'
import ch8s1 from './ch8-s1'
import ch8s2 from './ch8-s2'
import ch8s3 from './ch8-s3'
import ch8s4 from './ch8-s4'
import ch9s1 from './ch9-s1'
import ch9s2 from './ch9-s2'
import ch9s3 from './ch9-s3'
import ch9s4 from './ch9-s4'

const scenes: Record<string, string> = {
  'ph-ch7-s1-cardiac-ecg': ch7s1,
  'ph-ch7-s2-pv-loop-starling': ch7s2,
  'ph-ch7-s3-hemodynamics': ch7s3,
  'ph-ch7-s4-starling-forces': ch7s4,
  'ph-ch8-s1-baroreflex': ch8s1,
  'ph-ch8-s2-raas-volume': ch8s2,
  'ph-ch8-s3-regional-circulation': ch8s3,
  'ph-ch8-s4-circulation-integration': ch8s4,
  'ph-ch9-s1-ventilation-mechanics': ch9s1,
  'ph-ch9-s2-vq-matching': ch9s2,
  'ph-ch9-s3-oxygen-dissociation': ch9s3,
  'ph-ch9-s4-respiratory-control': ch9s4,
}
export default scenes
