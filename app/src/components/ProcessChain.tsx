interface ChainItem {
  ck: string
  p: string
}

export function ProcessChain({ items, style }: { items: ChainItem[]; style?: React.CSSProperties }) {
  return (
    <div className="chain rv" style={style}>
      {items.map((c) => (
        <div key={c.ck}>
          <p className="ck">{c.ck}</p>
          <p>{c.p}</p>
        </div>
      ))}
    </div>
  )
}
