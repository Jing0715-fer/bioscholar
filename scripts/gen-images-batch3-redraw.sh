#!/bin/bash
# BioScholar 第三批插图重画（VLM 审校发现乱码文字/结构错误的 6 张）
# 策略：更强调"绝对无文字"+更简洁的构图，降低模型绘制伪标签的倾向
cd /home/z/my-project

STYLE='professional scientific textbook illustration, precise clean ink line art with soft muted watercolor wash coloring, ivory paper background, elegant academic biology diagram, subtle depth and shading, refined muted color palette, high quality, absolutely NO text, NO letters, NO numbers, NO labels, NO captions, NO annotations, NO watermark, pure pictorial diagram only'

gen() {
  local file="$1" size="$2" prompt="$3" dir="$4"
  local out="public/images/bio/$dir/$file"
  rm -f "$out"
  for attempt in 1 2 3; do
    if z-ai image -p "$prompt, $STYLE" -o "$out" -s "$size" >/dev/null 2>&1; then
      echo "OK $file ($(stat -c%s "$out" 2>/dev/null || echo ?)B)"
      return 0
    fi
    echo "RETRY$attempt $file"
    sleep 3
  done
  echo "FAIL $file"
  return 1
}

# 呼吸链：简化为四复合物横排 + 电子流向，去掉易被加标签的细节
gen etc-complexes.png 1152x864 'mitochondrial electron transport chain shown as four large protein complexes embedded side by side in a horizontal lipid membrane cross section, each complex drawn as a distinct colored globular shape with transmembrane helices, electrons depicted as small glowing dots flowing left to right from one complex to the next through a small shuttle molecule diffusing in the membrane and a small round carrier protein moving along the membrane surface, protons shown as tiny circles with plus symbol being ejected upward above the membrane at three of the complexes, final electron acceptor oxygen molecule at right producing water droplet, matrix below and intermembrane space above indicated only by shading' biochemistry

# PCR：三个温度区 + 指数扩增树
gen pcr-cycles.png 1344x768 'polymerase chain reaction thermal cycle, three circular arrows connecting three temperature stages: high heat stage showing DNA double helix unzipping into two separated single strands, medium heat stage showing two short primer fragments binding to complementary positions on single strands, optimal extension stage showing polymerase enzyme blobs synthesizing new strands, at right a branching tree diagram showing one DNA duplex multiplying into two then four then eight identical duplexes across generations' molecular-biology

# β氧化：四步螺旋
gen beta-oxidation.png 1152x864 'fatty acid beta oxidation spiral, a long hydrocarbon chain with a coenzyme A handle at one end entering a circular four-step reaction cycle drawn as a wheel with four stations: first station showing removal of hydrogen atoms creating a double bond in the chain with a flattened coin-shaped cofactor accepting hydrogens, second station showing water molecule being added across the double bond, third station showing another hydrogen removal with a different tall cofactor accepting, fourth station showing scissors-like enzyme cleaving the endmost two-carbon unit as acetyl coenzyme A exiting downward, the shortened chain loops back to the first station' biochemistry

# RNAi：Dicer → RISC → 靶mRNA切割
gen rna-interference.png 1152x864 'RNA interference gene silencing, at left a long double stranded RNA molecule being chopped by a large scissor-shaped Dicer enzyme into many short identical double stranded fragments, at center one short fragment being loaded into a large crescent moon shaped Argonaute protein complex forming RISC with one strand kept inside as guide, at right the guided complex pairing with a matching single stranded messenger RNA and slicing it into two broken pieces which drift apart, arrows flowing left to right' molecular-biology

# CDK-cyclin：周期环 + 浓度波
gen cdk-cyclin.png 1344x768 'cell cycle engine, upper part a large circular ring divided into four arc segments representing cell cycle phases with small icons on each arc: cell growing then DNA replication dots then cell growing again then cell dividing, lower part a graph with a wavy line showing cyclin protein concentration rising and falling in repeating waves across a horizontal axis, each wave peak aligning under its corresponding arc segment, small clock hand at ring center suggesting periodicity' cell-biology

# 冷冻电镜：制样 → 采集 → 三维重构
gen cryo-em.png 1152x864 'cryo-electron microscopy single particle analysis, left panel a grid with thin ice film containing many identical protein complexes frozen at random orientations drawn as small matching shapes scattered in a blue translucent sheet, middle panel an electron beam column passing through the grid onto a detector screen collecting 2D silhouette images of the same shape at different rotations, right panel many 2D silhouettes stacking and fusing into one translucent 3D molecular structure rendered as mesh envelope, three panels connected by arrows' biophysics

echo "BATCH3-REDRAW DONE"
