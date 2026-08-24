import type { CSSProperties, ReactNode } from 'react'

interface ColumnsProps {
  cols: '1:1' | '5:7' | '7:5' | '3'
  reveal?: boolean
  style?: CSSProperties
  children: ReactNode
}

const classFor: Record<ColumnsProps['cols'], string> = {
  '1:1': 'two',
  '5:7': 'two-a',
  '7:5': 'two-b',
  '3': 'three',
}

export function Columns({ cols, reveal = false, style, children }: ColumnsProps) {
  const cls = classFor[cols] + (reveal ? ' rv' : '')
  return (
    <div className={cls} style={style}>
      {children}
    </div>
  )
}
