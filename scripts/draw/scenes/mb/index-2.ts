// mb 场景登记表（39-c：ch7–12；ch1–6 归 index.ts / 39-b）
// default 导出 Record<slug, svg>，slug 即 public/images/bio/drawn/ 文件名（省略 .svg）
import ch7s2 from './ch7-s2'
import ch7s4 from './ch7-s4'
import ch8s2 from './ch8-s2'
import ch8s3 from './ch8-s3'
import ch8s4 from './ch8-s4'
import ch9s1 from './ch9-s1'
import ch9s3 from './ch9-s3'
import ch9s5 from './ch9-s5'
import ch10s1 from './ch10-s1'
import ch10s2 from './ch10-s2'
import ch10s3 from './ch10-s3'
import ch10s4 from './ch10-s4'
import ch10s5 from './ch10-s5'
import ch11s1 from './ch11-s1'
import ch11s3 from './ch11-s3'
import ch11s4 from './ch11-s4'
import ch11s5 from './ch11-s5'
import ch12s1 from './ch12-s1'

export default {
  'mb-ch7-s2-camp-cap-and-gate': ch7s2,
  'mb-ch7-s4-riboswitch-srna-stringent': ch7s4,
  'mb-ch8-s2-enhancer-lcr': ch8s2,
  'mb-ch8-s3-tf-domains': ch8s3,
  'mb-ch8-s4-mediator-signaling': ch8s4,
  'mb-ch9-s1-hybridization-blot-fish': ch9s1,
  'mb-ch9-s3-cloning-libraries': ch9s3,
  'mb-ch9-s5-markers-y2h-emsa-chip': ch9s5,
  'mb-ch10-s1-hgp-strategies': ch10s1,
  'mb-ch10-s2-ngs-assembly-annotation': ch10s2,
  'mb-ch10-s3-comparative-functional-genomics': ch10s3,
  'mb-ch10-s4-rnaseq-proteomics': ch10s4,
  'mb-ch10-s5-epigenomics-encode': ch10s5,
  'mb-ch11-s1-rm-cohen-boyer': ch11s1,
  'mb-ch11-s3-dsb-editing': ch11s3,
  'mb-ch11-s4-transgenic-ips-gt': ch11s4,
  'mb-ch11-s5-synbio': ch11s5,
  'mb-ch12-s1-oncogene-discovery': ch12s1,
} as Record<string, string>
