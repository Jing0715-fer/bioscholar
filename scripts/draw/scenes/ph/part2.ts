// 生理学自绘插图场景登记 - 批次 P2（ch4–ch6 共 12 张；44 系列）
import ch4s1 from './ch4-s1'
import ch4s2 from './ch4-s2'
import ch4s3 from './ch4-s3'
import ch4s4 from './ch4-s4'
import ch5s1 from './ch5-s1'
import ch5s2 from './ch5-s2'
import ch5s3 from './ch5-s3'
import ch5s4 from './ch5-s4'
import ch6s1 from './ch6-s1'
import ch6s2 from './ch6-s2'
import ch6s3 from './ch6-s3'
import ch6s4 from './ch6-s4'

const scenes: Record<string, string> = {
  'ph-ch4-s1-synaptic-transmission': ch4s1,
  'ph-ch4-s2-somatosensory-pathways': ch4s2,
  'ph-ch4-s3-visual-system': ch4s3,
  'ph-ch4-s4-auditory-vestibular': ch4s4,
  'ph-ch5-s1-stretch-reflex': ch5s1,
  'ph-ch5-s2-basal-ganglia-cerebellum': ch5s2,
  'ph-ch5-s3-cortical-motor': ch5s3,
  'ph-ch5-s4-autonomic-sleep': ch5s4,
  'ph-ch6-s1-plasma-composition': ch6s1,
  'ph-ch6-s2-blood-cells': ch6s2,
  'ph-ch6-s3-hematopoiesis-iron': ch6s3,
  'ph-ch6-s4-hemostasis-abo': ch6s4,
}
export default scenes
