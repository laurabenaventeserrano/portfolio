interface TagListProps {
  tags: string[]
  reveal?: boolean
}

export function TagList({ tags, reveal = false }: TagListProps) {
  return (
    <ul className={reveal ? 'tags rv' : 'tags'}>
      {tags.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}
