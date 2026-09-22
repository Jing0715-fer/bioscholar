// x-ray crystallography 自绘插图登记表（6-xc）
import ch1s3 from './ch1-s3'
import ch2s1 from './ch2-s1'
import ch2s3 from './ch2-s3'
import ch3s2 from './ch3-s2'
import ch4s3 from './ch4-s3'
import ch5s4 from './ch5-s4'
import ch6s4 from './ch6-s4'
import ch7s3 from './ch7-s3'
import ch9s1 from './ch9-s1'
import ch11s1 from './ch11-s1'

export default {
  'xc-ch1-s3-dawn-timeline': ch1s3,
  'xc-ch2-s1-lattice-miller': ch2s1,
  'xc-ch2-s3-space-groups': ch2s3,
  'xc-ch3-s2-nucleation-phase': ch3s2,
  'xc-ch4-s3-bragg-ewald': ch4s3,
  'xc-ch5-s4-radiation-dose': ch5s4,
  'xc-ch6-s4-data-quality': ch6s4,
  'xc-ch7-s3-mr-modern': ch7s3,
  'xc-ch9-s1-density-maps': ch9s1,
  'xc-ch11-s1-ramachandran': ch11s1,
} as Record<string, string>
