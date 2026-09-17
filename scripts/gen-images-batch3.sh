#!/bin/bash
# BioScholar 第三批教学关键插图（12 张）
# 覆盖：呼吸链 / 磷酸戊糖途径 / β氧化 / DNA复性 / PCR / Sanger测序 / trp衰减 / RNAi / RTK / CDK-cyclin / 跳跃传导 / 冷冻电镜
# 用法: bash scripts/gen-images-batch3.sh
cd /home/z/my-project

STYLE='professional scientific textbook illustration, precise clean ink line art with soft muted watercolor wash coloring, ivory paper background, elegant academic biology diagram, subtle depth and shading, refined muted color palette, high quality, NO text, NO letters, NO numbers, NO labels, NO watermark'

gen() {
  local file="$1" size="$2" prompt="$3" dir="$4"
  local out="public/images/bio/$dir/$file"
  if [ -f "$out" ] && [ $(stat -c%s "$out") -gt 30000 ]; then
    echo "SKIP $file"
    return 0
  fi
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

# —— 生物化学 ——
gen etc-complexes.png 1152x864 'mitochondrial electron transport chain four complexes embedded in inner membrane, complex one large L-shaped flavoprotein, complex two succinate dehydrogenase, complex three cytochrome bc1 with Rieske iron sulfur protein, complex four cytochrome c oxidase, small lipid-soluble ubiquinone shuttle diffusing laterally in membrane between complexes, soluble cytochrome c small heme protein moving along membrane surface, protons being pumped upward across membrane from matrix to intermembrane space at three pump sites, electrons flowing left to right, final oxygen molecule accepting electrons to form water' biochemistry
gen pentose-phosphate.png 1152x864 'pentose phosphate pathway diagram with two branches, oxidative branch on left showing glucose-6-phosphate converted through lactonase and dehydrogenase steps releasing carbon dioxide bubbles and producing NADPH molecules, non-oxidative branch on right showing sugar interconversions catalyzed by transketolase and transaldolase enzymes rearranging carbon skeletons of ribose and xylulose sugars, circular arrow connecting back to glycolysis intermediates' biochemistry
gen beta-oxidation.png 1152x864 'fatty acid beta oxidation spiral pathway, long fatty acid chain with carboxyl end activated attached to coenzyme A entering at top, four enzymatic steps repeating around a spiral: oxidation creating double bond with FAD reduced, hydration adding water across double bond, second oxidation with NAD reduced, thiolysis cleaving two-carbon acetyl CoA unit releasing it, remaining shortened chain re-entering the spiral, each turn shortening chain by two carbons' biochemistry
gen dna-renaturation.png 1344x768 'DNA thermal denaturation and renaturation experiment, upper panel showing double helix strands separating into single strands as temperature rises with hydrogen bonds breaking, lower panel plotting absorbance as elegant sigmoid melting curve against temperature with melting midpoint marked by dashed line, hypochromic effect, cooling arrow showing slow reassociation of complementary strands zipping back together' biochemistry

# —— 分子生物学 ——
gen pcr-cycles.png 1344x768 'polymerase chain reaction three-step thermal cycle diagram, three temperature zones arranged as circular cycle: high temperature denaturation zone at top with double helix unwinding into two single strands, moderate temperature annealing zone at bottom left with short primer oligonucleotides binding to complementary sequences, optimal extension temperature zone at bottom right with polymerase enzyme extending primers into full new strands, exponential amplification tree on far right showing one duplex becoming two then four then eight molecules across cycles' molecular-biology
gen sanger-sequencing.png 1152x864 'Sanger chain termination DNA sequencing, single stranded template with primer bound, polymerase synthesizing new strand, four reaction tubes each containing one type of dideoxynucleotide terminator missing hydroxyl group, terminated fragments of different lengths separated by electrophoresis on gel shown at right as ladder of bands, shortest fragments at bottom, autoradiograph pattern' molecular-biology
gen trp-attenuation.png 1152x864 'tryptophan operon attenuation mechanism, leader RNA transcript forming two alternative secondary structures: terminator hairpin stem-loop with adjacent uracil-rich run causing RNA polymerase to stall and dissociate on left, versus antiterminator hairpin pairing different regions allowing transcription to read through into operon genes on right, charged tryptophan tRNA ribosome position determining which hairpin forms, high tryptophan versus low tryptophan conditions' molecular-biology
gen rna-interference.png 1152x864 'RNA interference gene silencing pathway, long double-stranded RNA entering cell being diced by Dicer enzyme into small interfering RNA duplexes, one guide strand loaded into RISC complex containing Argonaute protein, guide strand pairing with complementary messenger RNA, Argonaute slicing the target messenger RNA into fragments for degradation, gene silenced' molecular-biology

# —— 细胞生物学 ——
gen rtk-signaling.png 1152x864 'receptor tyrosine kinase signaling pathway, ligand dimer binding two receptor extracellular domains causing dimerization, intracellular kinase domains phosphorylating each other on tyrosine residues shown as dots, adaptor protein GRB2 with SOS guanine nucleotide exchange factor recruiting, small Ras protein at membrane switching GDP to GTP activating, phosphorylation cascade of RAF MEK ERK kinases relay with arrows into nucleus activating transcription factor' cell-biology
gen cdk-cyclin.png 1344x768 'cell cycle engine oscillation diagram, circular cell cycle ring with four phases G1 S G2 M as arc segments, cyclin concentration curve rising and falling like waves across a horizontal time axis below, matching CDK kinase activity peaks, key cyclin-CDK pairs labeled by icons: cyclin D with CDK4 at G1 start, cyclin E with CDK2 at G1/S transition, cyclin A with CDK2 during S, cyclin B with CDK1 driving mitosis, cyclin degradation by ubiquitin machinery resetting cycle' cell-biology

# —— 生物物理学 ——
gen saltatory-conduction.png 1344x768 'saltatory conduction in myelinated neuron axon, long axon wrapped in myelin sheath segments with small nodes of Ranvier gaps between them, action potential regenerating only at nodes with ion channels densely packed, depolarization current leaping from node to node shown as arcing arrows above the axon jumping over myelin, comparing unmyelinated continuous conduction below with weak spreading decay, velocity comparison' biophysics
gen cryo-em.png 1152x864 'cryo-electron microscopy single particle reconstruction workflow, grid with vitreous ice film containing randomly oriented copies of one protein complex frozen in amorphous ice, electron beam passing through generating 2D projection images of particles at many orientations collected on detector, class averaging producing clear 2D averages, computational angular reconstitution assembling 3D density map of the molecular structure shown as translucent mesh envelope' biophysics

echo "BATCH3 DONE"
