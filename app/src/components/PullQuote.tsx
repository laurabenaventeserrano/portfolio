import type { CSSProperties, ReactNode } from 'react'

interface PullQuoteProps {
  children: ReactNode
  /** Story 1 borders in --rust-l; Story 2/3 use the darker --rust as authored. */
  tone?: 'rust-l' | 'rust'
  style?: CSSProperties
}

export function PullQuote({ children, tone = 'rust-l', style }: PullQuoteProps) {
  return (
    <p className="pull" style={{ borderColor: `var(--${tone})`, ...style }}>
      {children}
    </p>
  )
}
