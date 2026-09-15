import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import ZAI from 'z-ai-web-dev-sdk'
import { getSubject } from '@/data/biology'
import type { SubjectId } from '@/lib/types'

export const runtime = 'nodejs'
export const maxDuration = 120

const PUBLIC_DIR = path.join(process.cwd(), 'public')

/** 支持的图片扩展名（SVG 经 sharp 转 PNG 后送审） */
const BITMAP_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif'])

function extOf(src: string): string {
  return path.extname(new URL(src, 'http://x').pathname).toLowerCase()
}

/** 教授讲解人设（与 AI 助教一致的教学风格） */
function buildPrompt(meta: {
  num?: string
  caption?: string
  credit?: string
  sectionTitle?: string
  subjectName?: string
  chapterTitle?: string
}): string {
  let prompt = `你是"BioScholar 智能生物助教"的看图讲解模块，一位精通生物化学、分子生物学、细胞生物学与生物物理学的资深教授。学生正在放大查看一张教材插图，请你看图讲解。

讲解要求：
1. **看图说话**：先整体说明这张图描绘了什么；再按图中可见的结构/阶段/组分逐一讲解，指明它们在图中的位置与相互关系。
2. **科学准确**：使用规范中文术语（首次出现标注英文）；化学式规范写法（NAD⁺、H₂O、CO₂）；数字、度量与图例描述必须忠实于图面，不得臆造图中不存在的细节。
3. **教学导向**：点出这张图最能帮助学生记住的 1-3 个核心要点（考试常考点/易混淆点）。
4. **格式**：用 Markdown 组织——先用一句话概括，再用「图面导览」「核心要点」两个小节；总长度控制在 350 字以内，要点精炼。`

  if (meta.subjectName || meta.chapterTitle || meta.sectionTitle) {
    prompt += `\n\n图的教学位置：${[meta.subjectName, meta.chapterTitle, meta.sectionTitle].filter(Boolean).join(' · ')}。`
  }
  if (meta.num) {
    prompt += `\n教材图号：图 ${meta.num}。`
  }
  if (meta.caption) {
    prompt += `\n\n教材图注（供参考，你的讲解应比图注更生动、更聚焦于看图方法）：\n${meta.caption}`
  }
  if (meta.credit) {
    prompt += `\n\n图片来源标注：${meta.credit}`
  }
  return prompt
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      src?: string
      num?: string
      caption?: string
      credit?: string
      sectionId?: string
    }

    // ---- 安全校验：仅允许 public/images/bio 下的静态图片 ----
    const src = body.src ?? ''
    if (!src.startsWith('/images/bio/') || src.includes('..')) {
      return NextResponse.json({ error: '非法图片路径' }, { status: 400 })
    }
    const ext = extOf(src)
    const isSvg = ext === '.svg'
    if (!isSvg && !BITMAP_EXT.has(ext)) {
      return NextResponse.json({ error: '不支持的图片格式' }, { status: 400 })
    }
    const filePath = path.join(PUBLIC_DIR, src)
    if (!filePath.startsWith(path.join(PUBLIC_DIR, 'images', 'bio'))) {
      return NextResponse.json({ error: '非法图片路径' }, { status: 400 })
    }

    // ---- 读取并按需转码（VLM 不支持 SVG，用 sharp 栅格化） ----
    let dataUrl: string
    const buf = await readFile(filePath)
    if (isSvg) {
      const sharp = (await import('sharp')).default
      const png = await sharp(buf, { density: 110 }).png().toBuffer()
      dataUrl = `data:image/png;base64,${png.toString('base64')}`
    } else {
      const mime =
        ext === '.png'
          ? 'image/png'
          : ext === '.webp'
            ? 'image/webp'
            : ext === '.gif'
              ? 'image/gif'
              : 'image/jpeg'
      dataUrl = `data:${mime};base64,${buf.toString('base64')}`
    }

    // ---- 组装教学上下文 ----
    let ctx: { subjectName?: string; chapterTitle?: string; sectionTitle?: string } = {}
    if (body.sectionId) {
      for (const subject of ['biochemistry', 'molecular-biology', 'cell-biology', 'biophysics'] as SubjectId[]) {
        for (const chapter of getSubject(subject)?.chapters ?? []) {
          const section = chapter.sections.find((s) => s.id === body.sectionId)
          if (section) {
            ctx = {
              subjectName: getSubject(subject)?.name,
              chapterTitle: `第 ${chapter.number} 章 ${chapter.title}`,
              sectionTitle: section.title,
            }
            break
          }
        }
        if (ctx.sectionTitle) break
      }
    }

    // ---- 调用 VLM 看图讲解 ----
    const zai = await ZAI.create()
    const completion = await zai.chat.completions.createVision({
      model: 'glm-5v-turbo',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text' as const,
              text: buildPrompt({
                num: body.num,
                caption: body.caption,
                credit: body.credit,
                ...ctx,
              }),
            },
            { type: 'image_url' as const, image_url: { url: dataUrl } },
          ],
        },
      ],
      thinking: { type: 'disabled' },
    })

    const content = completion.choices[0]?.message?.content ?? ''
    if (!content) {
      return NextResponse.json({ error: '讲解生成失败，请稍后再试' }, { status: 502 })
    }
    return NextResponse.json({ content })
  } catch (e) {
    console.error('figure-explain error:', e)
    return NextResponse.json({ error: '服务器内部错误' }, { status: 500 })
  }
}
