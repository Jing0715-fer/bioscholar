// 擦除插图中的乱码文字（image-edit：保留图形，仅去文字）
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'

const REMOVE_PROMPT =
  'Remove ALL text, letters, numbers, words, labels and annotations from this scientific illustration completely. ' +
  'Replace any text areas with clean blank background matching the surrounding ivory paper texture and watercolor style. ' +
  'Keep every diagram element, molecular structure, arrow, curve and pictorial content exactly unchanged. ' +
  'The result must be a purely pictorial diagram with zero text anywhere.'

const TASKS: Array<{ file: string; size: '1344x768' | '1152x864' | '1024x1024' }> = [
  { file: 'public/images/bio/molecular-biology/pcr-cycles.png', size: '1344x768' },
  { file: 'public/images/bio/biochemistry/beta-oxidation.png', size: '1152x864' },
  { file: 'public/images/bio/molecular-biology/rna-interference.png', size: '1152x864' },
  { file: 'public/images/bio/cell-biology/cdk-cyclin.png', size: '1344x768' },
  { file: 'public/images/bio/biophysics/cryo-em.png', size: '1152x864' },
]

async function main() {
  const zai = await ZAI.create()
  for (const task of TASKS) {
    const buf = fs.readFileSync(task.file)
    const dataUrl = `data:image/png;base64,${buf.toString('base64')}`
    try {
      const res = await zai.images.generations.edit({
        prompt: REMOVE_PROMPT,
        image: dataUrl,
        size: task.size,
      })
      const b64 = res.data?.[0]?.base64
      if (!b64) throw new Error('no base64 in response')
      fs.writeFileSync(task.file, Buffer.from(b64, 'base64'))
      console.log('CLEANED', task.file)
    } catch (e) {
      console.error('FAIL', task.file, e instanceof Error ? e.message : e)
    }
  }
}

main()
