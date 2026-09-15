'use client'

import ReactMarkdown from 'react-markdown'
import { cn } from '@/lib/utils'

/** 教材正文 Markdown 渲染器（教材内容使用 ## / ### 层级） */
export function Markdown({ content, className }: { content: string; className?: string }) {
  return (
    <div className={cn('bio-md', className)}>
      <ReactMarkdown
        components={{
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
