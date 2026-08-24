import type { ReactNode } from 'react'

interface SectionHeadProps {
  n: string
  k: string
  /** Each entry is one authored line, rendered inside its own masked box. */
  lines: string[]
  lead?: ReactNode
  /** Story 1 wraps its .head in .rv for the masked-line reveal; Story 2/3 don't. */
  reveal?: boolean
}

export function SectionHead({ n, k, lines, lead, reveal = false }: SectionHeadProps) {
  return (
    <div className={reveal ? 'head rv' : 'head'}>
      <div className="n">{n}</div>
      <div>
        <p className="k">{k}</p>
        <h2>
          {lines.map((line, i) => (
            <span className="ln" key={i}>
              <i>{line}</i>
            </span>
          ))}
        </h2>
        <div className="rule" />
        {lead && <p className="lead">{lead}</p>}
      </div>
    </div>
  )
}
