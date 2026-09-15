/**
 * BioScholar 教材插图批量生成脚本
 * 用法: bun scripts/gen-images.ts <group>
 * group ∈ { biochemistry | molecular-biology | cell-biology | biophysics | covers }
 */
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'
import path from 'path'

/** 统一风格基线：教科书级墨线+淡彩插画风，禁止文字标签（避免乱码） */
const STYLE =
  'professional scientific textbook illustration, precise clean ink line art with soft muted watercolor wash coloring, ivory paper background, elegant academic biology diagram, subtle depth and shading, refined muted color palette, high quality, NO text, NO letters, NO numbers, NO labels, NO watermark'

interface Task {
  file: string
  prompt: string
  size: (typeof SUPPORTED_SIZES)[number]
}

const SUPPORTED_SIZES = [
  '1024x1024',
  '768x1344',
  '864x1152',
  '1344x768',
  '1152x864',
  '1440x720',
  '720x1440',
] as const

const groups: Record<string, Task[]> = {
  biochemistry: [
    {
      file: 'glycolysis.png',
      size: '1344x768',
      prompt:
        'glycolysis metabolic pathway diagram, one glucose hexose ring molecule at top transforming through a vertical chain of enzymatic reaction steps into two pyruvate molecules, each intermediate drawn as small molecular structure with phosphate groups, elegant curved arrows connecting steps',
    },
    {
      file: 'protein-structure.png',
      size: '1152x864',
      prompt:
        'protein secondary structure ribbon diagram, a coiled alpha helix cylinder on the left and an arrowed beta pleated sheet on the right, connected by flexible loops, three-dimensional molecular ribbon representation',
    },
    {
      file: 'lipid-bilayer.png',
      size: '1152x864',
      prompt:
        'cell membrane phospholipid bilayer cross-section, two rows of phospholipids with round hydrophilic heads facing outward and wavy hydrophobic fatty acid tails facing inward, cholesterol and embedded transmembrane proteins between the layers',
    },
    {
      file: 'enzyme-substrate.png',
      size: '1152x864',
      prompt:
        'enzyme-substrate induced fit model, a large enzyme macromolecule with a deep active-site pocket, a small substrate molecule fitting snugly into the pocket, conformational change indicated, product released below',
    },
    {
      file: 'atp-synthase.png',
      size: '1152x864',
      prompt:
        'ATP synthase rotary motor embedded in mitochondrial inner membrane, mushroom-shaped headpiece above the membrane, central rotating stalk, proton channel in membrane base, protons flowing through, small ATP molecules being released',
    },
    {
      file: 'tca-cycle.png',
      size: '1152x864',
      prompt:
        'citric acid cycle diagram, eight metabolic intermediates arranged in an elegant circle connected by curved arrows, each intermediate as a small molecular structure, acetyl-CoA entering at top, carbon dioxide leaving at two points',
    },
  ],
  'molecular-biology': [
    {
      file: 'dna-helix.png',
      size: '1152x864',
      prompt:
        'DNA double helix elegant scientific diagram, two antiparallel intertwined strands with paired bases as rungs, major and minor grooves visible, backbone as ribbon strands, base pairs in muted complementary colors',
    },
    {
      file: 'replication-fork.png',
      size: '1152x864',
      prompt:
        'DNA replication fork, parental double helix unwinding at a Y-shaped fork, leading strand synthesized continuously, lagging strand with Okazaki fragments, helicase and DNA polymerases drawn as molecular machines at the fork',
    },
    {
      file: 'transcription.png',
      size: '1152x864',
      prompt:
        'RNA polymerase transcribing DNA into RNA, a large enzyme complex moving along DNA duplex, DNA strands separating inside enzyme, a single emerging RNA strand peeling off, bubble of unwound DNA',
    },
    {
      file: 'translation.png',
      size: '1152x864',
      prompt:
        'ribosome translating mRNA into protein, a large and small ribosomal subunit sandwiching a messenger RNA strand, three tRNA cloverleaf molecules in A P E sites delivering amino acids, growing polypeptide chain exiting from top',
    },
    {
      file: 'operon.png',
      size: '1152x864',
      prompt:
        'bacterial operon gene regulation diagram, a horizontal DNA segment with promoter and operator regions, regulatory protein bound to operator blocking RNA polymerase, structural genes as arrows below',
    },
    {
      file: 'crispr.png',
      size: '1152x864',
      prompt:
        'CRISPR Cas9 gene editing complex, a large crescent-shaped Cas9 protein cradling a DNA double helix, guide RNA inside the protein guiding the cut position, DNA break shown at target site',
    },
  ],
  'cell-biology': [
    {
      file: 'cell-anatomy.png',
      size: '1344x768',
      prompt:
        'eukaryotic animal cell cross-section anatomy, large central nucleus with nucleolus and chromatin, mitochondria, rough and smooth endoplasmic reticulum, Golgi apparatus, lysosomes, vesicles, plasma membrane, translucent cutaway view showing all organelles clearly',
    },
    {
      file: 'mitochondrion.png',
      size: '1152x864',
      prompt:
        'mitochondrion detailed anatomy, elongated organelle with smooth outer membrane and deeply folded inner membrane cristae, matrix interior with small circular DNA and ribosomes, cutaway view',
    },
    {
      file: 'secretory-pathway.png',
      size: '1152x864',
      prompt:
        'secretory pathway through the cell, endoplasmic reticulum network with ribosomes, transport vesicles budding off and fusing with Golgi apparatus stacks, secretory vesicles moving to plasma membrane and releasing cargo by exocytosis',
    },
    {
      file: 'mitosis.png',
      size: '1344x768',
      prompt:
        'cell division mitosis in five stages arranged left to right: prophase with condensing chromosomes, metaphase with chromosomes aligned at equator, anaphase with sister chromatids pulled to poles, telophase with two new nuclei, cytokinesis with cleavage furrow, spindle fibers as thin lines',
    },
    {
      file: 'apoptosis.png',
      size: '1152x864',
      prompt:
        'apoptosis programmed cell death, a healthy round cell on the left transforming into a shrunken blebbing cell on the right, membrane bubbles, fragmented nucleus with condensed chromatin, apoptotic bodies budding off, nearby macrophage engulfing debris',
    },
    {
      file: 'cytoskeleton.png',
      size: '1152x864',
      prompt:
        'cytoskeleton network inside a cell, thick hollow microtubules radiating from centrosome, ropelike intermediate filaments, thin actin filaments forming dense cortical web beneath membrane, three fiber systems in distinct muted colors',
    },
  ],
  biophysics: [
    {
      file: 'folding-funnel.png',
      size: '1152x864',
      prompt:
        'protein folding energy landscape, a three-dimensional funnel-shaped surface with rugged terrain, wide chaotic ensemble of unfolded states at the rim descending to a single deep narrow minimum at the native state bottom, topographic style',
    },
    {
      file: 'kinesin.png',
      size: '1152x864',
      prompt:
        'kinesin molecular motor walking along a microtubule track, a dimeric two-headed motor protein with stalk and fan-shaped tail carrying a round cargo vesicle, hand-over-hand stepping gait on hollow cylindrical microtubule protofilaments',
    },
    {
      file: 'ion-channel.png',
      size: '1152x864',
      prompt:
        'ion channel in cell membrane, a transmembrane protein with water-filled pore, positively charged ions flowing single-file through the open channel gate across the lipid bilayer, voltage sensor domains, closed channel shown beside',
    },
    {
      file: 'single-molecule.png',
      size: '1152x864',
      prompt:
        'single-molecule fluorescence microscopy, dark field of view with a laser beam illuminating from the side, individual glowing fluorescent spots on a glass surface, one bright molecule with concentric diffraction rings, microscope objective below',
    },
    {
      file: 'membrane-potential.png',
      size: '1152x864',
      prompt:
        'resting membrane potential diagram, lipid bilayer with sodium potassium pump expelling three positive ions and importing two, ion concentration gradient shown as dense particle clouds outside and dilute inside, voltage difference symbolized by charge symbols along membrane',
    },
  ],
  covers: [
    {
      file: 'cover-biochemistry.png',
      size: '1344x768',
      prompt:
        'biochemistry book cover art, laboratory flasks and beakers with glowing molecular structures rising like steam, hexagonal glucose rings, peptide chains and chemical bonds floating in composition, warm amber and ivory tones',
    },
    {
      file: 'cover-molecular-biology.png',
      size: '1344x768',
      prompt:
        'molecular biology book cover art, a majestic DNA double helix rising diagonally across the composition with RNA strands and protein molecules orbiting, violet and plum muted tones with ivory background',
    },
    {
      file: 'cover-cell-biology.png',
      size: '1344x768',
      prompt:
        'cell biology book cover art, microscope field of view of diverse cells and organelles, a large eukaryotic cell in cross-section surrounded by smaller cells, rose and coral muted tones, ivory background',
    },
    {
      file: 'cover-biophysics.png',
      size: '1344x768',
      prompt:
        'biophysics book cover art, where physics meets life, a protein molecule rendered as physical energy field with force vectors, geometric light rays and waveforms passing through molecular structures, teal and slate muted tones',
    },
    {
      file: 'hero-bioscience.png',
      size: '1440x720',
      prompt:
        'wide panoramic banner of life sciences, from molecule to cell to organism: DNA helix on one side flowing into cell cross-section in middle and abstract organic forms on the other, muted sage green and ivory tones, elegant scientific composition',
    },
  ],
}

async function main() {
  const group = process.argv[2]
  const tasks = groups[group]
  if (!tasks) {
    console.error(`Unknown group: ${group}. Valid: ${Object.keys(groups).join(', ')}`)
    process.exit(1)
  }

  const outDir =
    group === 'covers'
      ? path.resolve('public/images/bio/covers')
      : path.resolve('public/images/bio', group)
  fs.mkdirSync(outDir, { recursive: true })

  const zai = await ZAI.create()
  let ok = 0
  let fail = 0

  for (const t of tasks) {
    const out = path.join(outDir, t.file)
    if (fs.existsSync(out) && fs.statSync(out).size > 30_000) {
      console.log(`SKIP (exists): ${t.file}`)
      ok++
      continue
    }
    const prompt = `${t.prompt}, ${STYLE}`
    let done = false
    for (let attempt = 1; attempt <= 3 && !done; attempt++) {
      try {
        const res = await zai.images.generations.create({ prompt, size: t.size })
        const b64 = res?.data?.[0]?.base64
        if (!b64) throw new Error('empty base64')
        const buf = Buffer.from(b64, 'base64')
        if (buf.length < 10_000) throw new Error(`too small: ${buf.length}B`)
        fs.writeFileSync(out, buf)
        console.log(`OK: ${t.file} (${(buf.length / 1024).toFixed(0)}KB)`)
        ok++
        done = true
      } catch (e) {
        console.error(`ATTEMPT ${attempt} FAILED: ${t.file}: ${String(e)}`)
        if (attempt === 3) fail++
        else await new Promise((r) => setTimeout(r, 1500 * attempt))
      }
    }
  }
  console.log(`GROUP ${group} DONE: ok=${ok} fail=${fail}`)
}

main().catch((e) => {
  console.error('FATAL', e)
  process.exit(1)
})
