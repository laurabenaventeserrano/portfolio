import type { ReactNode } from 'react'

interface Item {
  i: string
  text: ReactNode
}

interface IndexedListProps {
  items: Item[]
  reveal?: boolean
  dataD?: string
}

/** ul.p — the mono-index / body-text list used for scope, impact and process items. */
export function IndexedList({ items, reveal = false, dataD }: IndexedListProps) {
  return (
    <ul className={reveal ? 'p rv' : 'p'} data-d={dataD}>
      {items.map((item, idx) => (
        <li key={idx}>
          <span className="i">{item.i}</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  )
}
