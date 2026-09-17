#!/bin/bash
# BioScholar 第二批教学关键插图（16 张）
# 用法: bash scripts/gen-images-extra.sh [batch1|batch2]
cd /home/z/my-project

GROUP="$1"
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

case "$GROUP" in
  batch1)
    # —— 生化 ——
    gen glucose-anomer.png 1152x864 'glucose ring structure stereochemistry, a pyranose hexose ring drawn as Haworth projection beside a chair conformation, hydroxyl groups above and below the ring plane, anomeric carbon highlighted, D-glucose molecular stereochemistry diagram' biochemistry
    gen amino-acids.png 1152x864 'amino acid general structure diagram, a central alpha carbon bonded to amino group, carboxyl group, hydrogen atom and a variable side chain R, four representative side chains shown separately: nonpolar, polar, acidic and basic' biochemistry
    gen hemoglobin.png 1152x864 'hemoglobin quaternary structure, four globular subunits two alpha and two beta arranged in tetrahedral symmetry, each subunit carrying one heme prosthetic group with iron atom, oxygen molecules bound to heme, myoglobin single chain beside for comparison' biochemistry
    gen michaelis-menten.png 1152x864 'Michaelis-Menten enzyme kinetics curve, reaction velocity on vertical axis rising hyperbolically with increasing substrate concentration toward a horizontal plateau representing maximum velocity, the curve drawn as elegant line graph on axes without numbers, Km marked at half-plateau with dashed guide line' biochemistry
    gen urea-cycle.png 1152x864 'urea cycle ornithine cycle diagram, five metabolic intermediates arranged in a circle connected by curved arrows, ornithine citrulline argininosuccinate arginine and urea, mitochondrial membrane crossing at one side, ammonia entering and urea exiting' biochemistry
    gen glycogen.png 1152x864 'glycogen molecule branched structure, a large treelike branched polysaccharide with glucose units as small hexagons, branch points every 8 to 12 residues, central glycogenin protein core, branch enzyme and glycogen phosphorylase working at nonreducing ends' biochemistry
    # —— 分子生物学 ——
    gen central-dogma.png 1344x768 'central dogma of molecular biology, three large icons connected by bold arrows: DNA double helix on left, arrow labeled replication curving back to itself, arrow to messenger RNA single strand in middle labeled transcription, arrow to protein ribbon structure on right labeled translation, reverse transcription arrow from RNA back to DNA dashed' molecular-biology
    gen rna-splicing.png 1152x864 'pre-mRNA splicing by spliceosome, a long RNA strand with intron segment looped out forming lariat structure, spliceosome machine as large molecular assembly around the branch point, exons joining together, snRNP particles assembling' molecular-biology
    ;;
  batch2)
    # —— 分子生物学（续）——
    gen holliday.png 1152x864 'homologous recombination Holliday junction, two DNA double helices crossing in X shape at a junction point where strands exchange partners, heteroduplex DNA flanking the junction, branch migration arrows along the helices, resolution by cutting in two possible planes' molecular-biology
    gen chromatin.png 1152x864 'chromosome packaging hierarchy, from left to right at increasing scale: naked DNA double helix, beads-on-a-string nucleosomes with DNA wrapping around histone cores, 30 nanometer fiber helical coil, looped domains, and finally condensed X-shaped mitotic chromosome' molecular-biology
    # —— 细胞生物学 ——
    gen gpcr-signaling.png 1152x864 'G protein-coupled receptor signaling pathway, a serpentine seven-transmembrane receptor in the membrane binding hormone ligand from outside, heterotrimeric G protein on cytoplasmic side exchanging GDP for GTP, activated alpha subunit separating to stimulate adenylate cyclase enzyme producing cyclic AMP molecules, PKA activation cascade below' cell-biology
    gen meiosis.png 1344x768 'meiosis cell division stages, two sequential divisions shown: meiosis I with homologous chromosome pairs crossing over and separating, meiosis II with sister chromatids separating, resulting in four genetically distinct haploid cells, homologous chromosomes in matching muted color pairs, chiasmata crossover points visible' cell-biology
    gen sodium-potassium-pump.png 1152x864 'sodium potassium pump active transport, a transmembrane carrier protein in lipid bilayer binding three sodium ions from inside cell, phosphorylated by ATP, opening outward releasing sodium, then binding two potassium ions from outside, returning open inward releasing potassium, ion movement cycle with ATP molecule splitting' cell-biology
    # —— 生物物理学 ——
    gen action-potential.png 1152x864 'action potential waveform curve, membrane potential plotted as elegant line graph rising rapidly from resting negative level through threshold trigger point to sharp positive peak then falling undershoot below rest and recovering, four phases distinguishable, axes without numbers' biophysics
    gen optical-tweezers.png 1152x864 'optical tweezers single molecule experiment, a focused laser beam converging through microscope objective trapping a small transparent bead at the focal point, bead attached to a single biological molecule stretching to a surface, force measurement concept, light rays refracting through the bead' biophysics
    gen membrane-phases.png 1152x864 'membrane lipid phase transition, two phospholipid bilayer states side by side: gel phase with rigid ordered straight tails on left, liquid crystalline fluid phase with mobile kinked tails on right, transition indicated by arrow, cholesterol molecule nestled between tails moderating fluidity' biophysics
    ;;
  all)
    bash scripts/gen-images-extra.sh batch1
    bash scripts/gen-images-extra.sh batch2
    ;;
  *)
    echo "usage: gen-images-extra.sh [batch1|batch2|all]"
    ;;
esac
echo "BATCH $GROUP DONE"
