import type { ReactNode } from 'react'

interface HeroNoteProps {
  /** Story 1 uses .hero-note; Story 2/3 use .conf — near-identical rules, different names. */
  variant: 'hero-note' | 'conf'
  children: ReactNode
  reveal?: boolean
  dataD?: string
}

export function HeroNote({ variant, children, reveal = false, dataD }: HeroNoteProps) {
  return (
    <div className={reveal ? `${variant} rv` : variant} data-d={dataD}>
      <div />
      <div className="body">{children}</div>
    </div>
  )
}
