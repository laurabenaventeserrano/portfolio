import type { ReactNode } from 'react'

interface PivotProps {
  id?: string
  /** Story 2/3 label the pivot ("02 · The insight"); Story 1 doesn't. */
  k?: string
  statement: ReactNode
  /** Story 1 only: the line following the statement. */
  after?: ReactNode
  /** Story 1 reveals stmt/after with .rv; Story 2/3 render them plain. */
  reveal?: boolean
  afterDataD?: string
  children?: ReactNode
}

export function Pivot({ id, k, statement, after, reveal = false, afterDataD, children }: PivotProps) {
  return (
    <section className="pivot" id={id}>
      <div className="w">
        {k && <p className="k">{k}</p>}
        <p className={reveal ? 'stmt rv' : 'stmt'}>{statement}</p>
        {after && (
          <p className={reveal ? 'after rv' : 'after'} data-d={afterDataD}>
            {after}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
