export function LearningsList({ items }: { items: { i: string; text: string }[] }) {
  return (
    <ul className="lrn rv">
      {items.map((item) => (
        <li key={item.i}>
          <span className="i">{item.i}</span>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  )
}
