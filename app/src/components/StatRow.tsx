interface Stat {
  value: string
  label: string
}

interface StatRowProps {
  stats: Stat[]
  reveal?: boolean
  dataD?: string
}

export function StatRow({ stats, reveal = false, dataD }: StatRowProps) {
  return (
    <div className={reveal ? 'stats rv' : 'stats'} data-d={dataD}>
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <b>{s.value}</b>
          <i>{s.label}</i>
        </div>
      ))}
    </div>
  )
}
