export function StepList({ steps }: { steps: { hn: string; h3: string; p: string }[] }) {
  return (
    <div className="hand rv">
      {steps.map((s) => (
        <div className="hstep" key={s.hn}>
          <div className="hn">{s.hn}</div>
          <div>
            <h3>{s.h3}</h3>
            <p>{s.p}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
