interface RegionShot {
  src: string
  width: number
  height: number
  alt: string
  caption: string
}

interface Region {
  market: string
  shots: RegionShot[]
}

export function RegionGrid({ regions }: { regions: Region[] }) {
  return (
    <div className="regions">
      {regions.map((r) => (
        <div className="region" key={r.market}>
          <p className="k">{r.market}</p>
          {r.shots.map((s) => (
            <figure key={s.src}>
              <img src={s.src} width={s.width} height={s.height} loading="lazy" decoding="async" alt={s.alt} />
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      ))}
    </div>
  )
}
