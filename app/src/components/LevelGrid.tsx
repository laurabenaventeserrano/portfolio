interface Level {
  h3: string
  p: string
}

export function LevelGrid({ levels, reveal = false, style }: { levels: Level[]; reveal?: boolean; style?: React.CSSProperties }) {
  return (
    <div className={reveal ? 'levels rv' : 'levels'} style={style}>
      {levels.map((l) => (
        <div className="level" key={l.h3}>
          <h3>{l.h3}</h3>
          <p>{l.p}</p>
        </div>
      ))}
    </div>
  )
}
