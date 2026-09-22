// electron-microscopy 自绘插图登记表（6-em）
import ch1s2 from './ch1-s2'
import ch1s3 from './ch1-s3'
import ch3s2 from './ch3-s2'
import ch4s4 from './ch4-s4'
import ch5s1 from './ch5-s1'
import ch6s2 from './ch6-s2'
import ch6s3 from './ch6-s3'
import ch7s1 from './ch7-s1'
import ch8s2 from './ch8-s2'
import ch11s2 from './ch11-s2'

export default {
  'em-ch1-s2-wavelength-resolution': ch1s2,
  'em-ch1-s3-milestones': ch1s3,
  'em-ch3-s2-ctf-thon-rings': ch3s2,
  'em-ch4-s4-low-dose-workflow': ch4s4,
  'em-ch5-s1-negative-staining': ch5s1,
  'em-ch6-s2-grid-support-films': ch6s2,
  'em-ch6-s3-plunge-freezing': ch6s3,
  'em-ch7-s1-central-section-theorem': ch7s1,
  'em-ch8-s2-spa-pipeline': ch8s2,
  'em-ch11-s2-sem-signals-detectors': ch11s2,
} as Record<string, string>
