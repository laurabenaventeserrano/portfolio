import { Fragment, type ReactNode } from 'react'

interface ChapterProps {
  n: string
  k: string
  /** Story 2/3 headings are plain text with authored <br> breaks, not masked lines. */
  lines: string[]
  lead?: ReactNode
  /** Story 2/3 nest the body grid inside .head's second column, unlike Story 1. */
  children?: ReactNode
}

/** The Story 2 / Story 3 chapter-opener pattern: no reveal wrapper, no masked lines. */
export function Chapter({ n, k, lines, lead, children }: ChapterProps) {
  return (
    <div className="head">
      <div>
        <span className="n">{n}</span>
      </div>
      <div>
        <p className="k">{k}</p>
        <h2>
          {lines.map((line, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h2>
        <div className="rule" />
        {lead}
        {children}
      </div>
    </div>
  )
}
