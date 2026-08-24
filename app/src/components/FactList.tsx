import type { ReactNode } from 'react'

interface Fact {
  k: string
  v: ReactNode
}

interface FactListProps {
  facts: Fact[]
  reveal?: boolean
}

export function FactList({ facts, reveal = false }: FactListProps) {
  return (
    <div className={reveal ? 'facts rv' : 'facts'}>
      {facts.map((f, i) => (
        <div className="fact" key={i}>
          <span className="fk">{f.k}</span>
          <span className="fv">{f.v}</span>
        </div>
      ))}
    </div>
  )
}
