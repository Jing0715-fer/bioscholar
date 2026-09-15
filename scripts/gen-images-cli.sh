#!/bin/bash
# BioScholar 教材插图批量生成（z-ai CLI 版）
# 用法: bash scripts/gen-images-cli.sh <group>
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
  biochemistry)
    gen glycolysis.png 1344x768 'glycolysis metabolic pathway diagram, one glucose hexose ring molecule at top transforming through a vertical chain of enzymatic reaction steps into two pyruvate molecules, each intermediate drawn as small molecular structure with phosphate groups, elegant curved arrows connecting steps' biochemistry
    gen protein-structure.png 1152x864 'protein secondary structure ribbon diagram, a coiled alpha helix cylinder on the left and an arrowed beta pleated sheet on the right, connected by flexible loops, three-dimensional molecular ribbon representation' biochemistry
    gen lipid-bilayer.png 1152x864 'cell membrane phospholipid bilayer cross-section, two rows of phospholipids with round hydrophilic heads facing outward and wavy hydrophobic fatty acid tails facing inward, cholesterol and embedded transmembrane proteins between the layers' biochemistry
    gen enzyme-substrate.png 1152x864 'enzyme-substrate induced fit model, a large enzyme macromolecule with a deep active-site pocket, a small substrate molecule fitting snugly into the pocket, conformational change indicated, product released below' biochemistry
    gen atp-synthase.png 1152x864 'ATP synthase rotary motor embedded in mitochondrial inner membrane, mushroom-shaped headpiece above the membrane, central rotating stalk, proton channel in membrane base, protons flowing through, small ATP molecules being released' biochemistry
    gen tca-cycle.png 1152x864 'citric acid cycle diagram, eight metabolic intermediates arranged in an elegant circle connected by curved arrows, each intermediate as a small molecular structure, acetyl-CoA entering at top, carbon dioxide leaving at two points' biochemistry
    ;;
  molecular-biology)
    gen dna-helix.png 1152x864 'DNA double helix elegant scientific diagram, two antiparallel intertwined strands with paired bases as rungs, major and minor grooves visible, backbone as ribbon strands, base pairs in muted complementary colors' molecular-biology
    gen replication-fork.png 1152x864 'DNA replication fork, parental double helix unwinding at a Y-shaped fork, leading strand synthesized continuously, lagging strand with Okazaki fragments, helicase and DNA polymerases drawn as molecular machines at the fork' molecular-biology
    gen transcription.png 1152x864 'RNA polymerase transcribing DNA into RNA, a large enzyme complex moving along DNA duplex, DNA strands separating inside enzyme, a single emerging RNA strand peeling off, bubble of unwound DNA' molecular-biology
    gen translation.png 1152x864 'ribosome translating mRNA into protein, a large and small ribosomal subunit sandwiching a messenger RNA strand, three tRNA cloverleaf molecules in A P E sites delivering amino acids, growing polypeptide chain exiting from top' molecular-biology
    gen operon.png 1152x864 'bacterial operon gene regulation diagram, a horizontal DNA segment with promoter and operator regions, regulatory protein bound to operator blocking RNA polymerase, structural genes as arrows below' molecular-biology
    gen crispr.png 1152x864 'CRISPR Cas9 gene editing complex, a large crescent-shaped Cas9 protein cradling a DNA double helix, guide RNA inside the protein guiding the cut position, DNA break shown at target site' molecular-biology
    ;;
  cell-biology)
    gen cell-anatomy.png 1344x768 'eukaryotic animal cell cross-section anatomy, large central nucleus with nucleolus and chromatin, mitochondria, rough and smooth endoplasmic reticulum, Golgi apparatus, lysosomes, vesicles, plasma membrane, translucent cutaway view showing all organelles clearly' cell-biology
    gen mitochondrion.png 1152x864 'mitochondrion detailed anatomy, elongated organelle with smooth outer membrane and deeply folded inner membrane cristae, matrix interior with small circular DNA and ribosomes, cutaway view' cell-biology
    gen secretory-pathway.png 1152x864 'secretory pathway through the cell, endoplasmic reticulum network with ribosomes, transport vesicles budding off and fusing with Golgi apparatus stacks, secretory vesicles moving to plasma membrane and releasing cargo by exocytosis' cell-biology
    gen mitosis.png 1344x768 'cell division mitosis in five stages arranged left to right: prophase with condensing chromosomes, metaphase with chromosomes aligned at equator, anaphase with sister chromatids pulled to poles, telophase with two new nuclei, cytokinesis with cleavage furrow, spindle fibers as thin lines' cell-biology
    gen apoptosis.png 1152x864 'apoptosis programmed cell death, a healthy round cell on the left transforming into a shrunken blebbing cell on the right, membrane bubbles, fragmented nucleus with condensed chromatin, apoptotic bodies budding off, nearby macrophage engulfing debris' cell-biology
    gen cytoskeleton.png 1152x864 'cytoskeleton network inside a cell, thick hollow microtubules radiating from centrosome, ropelike intermediate filaments, thin actin filaments forming dense cortical web beneath membrane, three fiber systems in distinct muted colors' cell-biology
    ;;
  biophysics)
    gen folding-funnel.png 1152x864 'protein folding energy landscape, a three-dimensional funnel-shaped surface with rugged terrain, wide chaotic ensemble of unfolded states at the rim descending to a single deep narrow minimum at the native state bottom, topographic style' biophysics
    gen kinesin.png 1152x864 'kinesin molecular motor walking along a microtubule track, a dimeric two-headed motor protein with stalk and fan-shaped tail carrying a round cargo vesicle, hand-over-hand stepping gait on hollow cylindrical microtubule protofilaments' biophysics
    gen ion-channel.png 1152x864 'ion channel in cell membrane, a transmembrane protein with water-filled pore, positively charged ions flowing single-file through the open channel gate across the lipid bilayer, voltage sensor domains, closed channel shown beside' biophysics
    gen single-molecule.png 1152x864 'single-molecule fluorescence microscopy, dark field of view with a laser beam illuminating from the side, individual glowing fluorescent spots on a glass surface, one bright molecule with concentric diffraction rings, microscope objective below' biophysics
    gen membrane-potential.png 1152x864 'resting membrane potential diagram, lipid bilayer with sodium potassium pump expelling three positive ions and importing two, ion concentration gradient shown as dense particle clouds outside and dilute inside, charge symbols along membrane' biophysics
    ;;
  covers)
    gen cover-biochemistry.png 1344x768 'biochemistry book cover art, laboratory flasks and beakers with glowing molecular structures rising like steam, hexagonal glucose rings, peptide chains and chemical bonds floating in composition, warm amber and ivory tones' covers
    gen cover-molecular-biology.png 1344x768 'molecular biology book cover art, a majestic DNA double helix rising diagonally across the composition with RNA strands and protein molecules orbiting, violet and plum muted tones with ivory background' covers
    gen cover-cell-biology.png 1344x768 'cell biology book cover art, microscope field of view of diverse cells and organelles, a large eukaryotic cell in cross-section surrounded by smaller cells, rose and coral muted tones, ivory background' covers
    gen cover-biophysics.png 1344x768 'biophysics book cover art, where physics meets life, a protein molecule rendered as physical energy field with force vectors, geometric light rays and waveforms passing through molecular structures, teal and slate muted tones' covers
    gen hero-bioscience.png 1440x720 'wide panoramic banner of life sciences, from molecule to cell to organism: DNA helix on one side flowing into cell cross-section in middle and abstract organic forms on the other, muted sage green and ivory tones, elegant scientific composition' covers
    ;;
  *)
    echo "unknown group: $GROUP"
    exit 1
    ;;
esac
echo "GROUP $GROUP DONE"
